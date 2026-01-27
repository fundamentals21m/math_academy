import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { logAdminAction } from './adminAudit';

// Rate limiting constants for admin operations
const ADMIN_RATE_LIMIT_MAX = 60; // Max operations per admin per window
const ADMIN_RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

// Types
interface Section {
  id: string;
  title: string;
  subtitle: string;
  style: 'featured' | 'beginner' | 'subject';
  order: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  tags: string[];
  sections: string[]; // Category IDs
  totalSections: number;
  progressPrefix: string;
  leaderboardUrl?: string;
  shortName?: string;
  external?: boolean;
  progressGradient?: string;
  order: number;
}

interface Admin {
  npub: string;
  displayName?: string;
  addedAt: admin.firestore.Timestamp;
  addedBy: string;
}

interface CourseConfig {
  sections: Section[];
  courses: Course[];
  admins: Admin[];
  lastUpdated?: admin.firestore.Timestamp;
  updatedBy?: string;
}

interface AuthContext {
  uid: string;
  token?: Record<string, unknown>;
}

// Config document paths
// Staging: used by admin GUI for edits
// Production: used by production hub, only updated via promotion
const STAGING_PATH = 'courseConfig/staging';
const PRODUCTION_PATH = 'courseConfig/production';

/**
 * Check rate limit for admin operations
 * Throws if rate limit exceeded
 */
async function checkAdminRateLimit(npub: string, operation: string): Promise<void> {
  const rateLimitRef = admin.firestore().collection('rateLimits').doc(`admin_${npub}`);
  const rateLimitDoc = await rateLimitRef.get();
  const now = Date.now();

  if (rateLimitDoc.exists) {
    const data = rateLimitDoc.data()!;
    const windowStart = now - ADMIN_RATE_LIMIT_WINDOW_MS;

    // Filter to only count requests within the window
    const recentRequests = (data.timestamps || []).filter(
      (ts: number) => ts > windowStart
    );

    if (recentRequests.length >= ADMIN_RATE_LIMIT_MAX) {
      console.warn(`Rate limit exceeded for admin operation ${operation}: ${npub}`);
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Too many admin operations. Please try again later.'
      );
    }

    // Update with new timestamp, keeping only recent ones
    await rateLimitRef.set({
      timestamps: [...recentRequests, now].slice(-ADMIN_RATE_LIMIT_MAX),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  } else {
    // First request, create rate limit document
    await rateLimitRef.set({
      timestamps: [now],
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
}

/**
 * Check if the caller is a course config admin
 */
async function requireCourseAdmin(auth: AuthContext | undefined): Promise<string> {
  if (!auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Authentication required'
    );
  }

  const npub = auth.uid;

  // Check if user is in the courseConfig staging admins
  const adminDoc = await admin.firestore()
    .doc(`${STAGING_PATH}/admins/${npub}`)
    .get();

  if (!adminDoc.exists) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Course admin privileges required'
    );
  }

  return npub;
}

/**
 * Get the full course configuration (public read for sections/courses, admin-only for admin list)
 *
 * @param environment - 'staging' or 'production'. Defaults based on context:
 *   - If authenticated admin: defaults to 'staging' (for admin GUI)
 *   - Otherwise: defaults to 'production' (for public hub)
 */
export const getCourseConfig = functions.https.onCall(
  async (data: { environment?: 'staging' | 'production' } | unknown, context): Promise<CourseConfig> => {
    // Determine which environment to read from
    let environment: 'staging' | 'production' = 'production';

    // Parse environment from data if provided
    if (data && typeof data === 'object' && 'environment' in data) {
      const env = (data as { environment?: string }).environment;
      if (env === 'staging' || env === 'production') {
        environment = env;
      }
    }

    // If requesting staging, verify admin access
    if (environment === 'staging' && context.auth) {
      const npub = context.auth.uid;
      const adminDoc = await admin.firestore()
        .doc(`${STAGING_PATH}/admins/${npub}`)
        .get();
      if (!adminDoc.exists) {
        // Not an admin, fall back to production
        environment = 'production';
      }
    } else if (environment === 'staging' && !context.auth) {
      // Unauthenticated users cannot access staging
      environment = 'production';
    }

    const configPath = environment === 'staging' ? STAGING_PATH : PRODUCTION_PATH;
    const configRef = admin.firestore().doc(configPath);

    // Get sections
    const sectionsSnapshot = await configRef.collection('sections')
      .orderBy('order')
      .get();
    const sections = sectionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Section[];

    // Get courses
    const coursesSnapshot = await configRef.collection('courses')
      .orderBy('order')
      .get();
    const courses = coursesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Course[];

    // Only return admin list to authenticated admins (security: prevent enumeration)
    let admins: Admin[] = [];
    if (context.auth) {
      const npub = context.auth.uid;
      // Check staging admins for admin list access
      const adminDoc = await admin.firestore()
        .doc(`${STAGING_PATH}/admins/${npub}`)
        .get();
      if (adminDoc.exists) {
        // Caller is an admin, return the full admin list from staging
        const adminsSnapshot = await admin.firestore()
          .doc(STAGING_PATH)
          .collection('admins')
          .get();
        admins = adminsSnapshot.docs.map(doc => ({
          npub: doc.id,
          ...doc.data()
        })) as Admin[];
      }
    }

    // Get metadata
    const configDoc = await configRef.get();
    const metadata = configDoc.data() || {};

    return {
      sections,
      courses,
      admins,
      lastUpdated: metadata.lastUpdated,
      updatedBy: metadata.updatedBy
    };
  }
);

/**
 * Update a course's data (admin only)
 */
// Allowed fields for course updates (security: whitelist approach)
const ALLOWED_COURSE_FIELDS = [
  'title', 'description', 'icon', 'url', 'tags', 'sections',
  'totalSections', 'progressPrefix', 'leaderboardUrl', 'shortName',
  'external', 'progressGradient', 'order'
];

export const updateCourse = functions.https.onCall(
  async (
    data: { courseId: string; updates: Partial<Course> },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'updateCourse');

    const { courseId, updates } = data;

    if (!courseId || typeof courseId !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseId is required'
      );
    }

    // Security: Only allow whitelisted fields, remove id to prevent overwriting
    const safeUpdates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(updates || {})) {
      if (key !== 'id' && ALLOWED_COURSE_FIELDS.includes(key)) {
        // Validate string fields have reasonable length
        if (typeof value === 'string' && value.length > 10000) {
          throw new functions.https.HttpsError(
            'invalid-argument',
            `Field ${key} exceeds maximum length`
          );
        }
        safeUpdates[key] = value;
      }
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const courseRef = configRef.collection('courses').doc(courseId);

    const courseDoc = await courseRef.get();
    if (!courseDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Course not found'
      );
    }

    await courseRef.update(safeUpdates);

    // Update metadata
    await configRef.set({
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await logAdminAction('update_course', adminNpub, {
      targetCourseId: courseId,
      metadata: { updates: safeUpdates }
    });

    return { success: true };
  }
);

/**
 * Create a new category/section (admin only)
 */
export const createSection = functions.https.onCall(
  async (
    data: { title: string; subtitle: string; style: Section['style'] },
    context
  ): Promise<{ success: boolean; sectionId: string }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'createSection');

    const { title, subtitle, style } = data;

    if (!title || typeof title !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'title is required'
      );
    }

    // Validate string lengths
    if (title.length > 200) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'title exceeds maximum length of 200 characters'
      );
    }

    if (subtitle && typeof subtitle === 'string' && subtitle.length > 500) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'subtitle exceeds maximum length of 500 characters'
      );
    }

    if (!['featured', 'beginner', 'subject'].includes(style)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'style must be featured, beginner, or subject'
      );
    }

    // Generate ID from title (slugify)
    const sectionId = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '');

    const configRef = admin.firestore().doc(STAGING_PATH);
    const sectionRef = configRef.collection('sections').doc(sectionId);

    // Check if section already exists
    const existingDoc = await sectionRef.get();
    if (existingDoc.exists) {
      throw new functions.https.HttpsError(
        'already-exists',
        'A section with this ID already exists'
      );
    }

    // Get the highest order number
    const sectionsSnapshot = await configRef.collection('sections')
      .orderBy('order', 'desc')
      .limit(1)
      .get();
    const maxOrder = sectionsSnapshot.docs[0]?.data()?.order ?? -1;

    await sectionRef.set({
      id: sectionId,
      title,
      subtitle: subtitle || '',
      style,
      order: maxOrder + 1
    });

    // Update metadata
    await configRef.set({
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await logAdminAction('create_section', adminNpub, {
      metadata: { sectionId, title, style }
    });

    return { success: true, sectionId };
  }
);

// Allowed fields for section updates (security: whitelist approach)
const ALLOWED_SECTION_FIELDS = ['title', 'subtitle', 'style', 'order'];

/**
 * Update a category/section (admin only)
 */
export const updateSection = functions.https.onCall(
  async (
    data: { sectionId: string; updates: Partial<Section> },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'updateSection');

    const { sectionId, updates } = data;

    if (!sectionId || typeof sectionId !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'sectionId is required'
      );
    }

    // Security: Only allow whitelisted fields, remove id to prevent overwriting
    const safeUpdates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(updates || {})) {
      if (key !== 'id' && ALLOWED_SECTION_FIELDS.includes(key)) {
        // Validate string fields have reasonable length
        if (key === 'title' && typeof value === 'string' && value.length > 200) {
          throw new functions.https.HttpsError(
            'invalid-argument',
            'title exceeds maximum length of 200 characters'
          );
        }
        if (key === 'subtitle' && typeof value === 'string' && value.length > 500) {
          throw new functions.https.HttpsError(
            'invalid-argument',
            'subtitle exceeds maximum length of 500 characters'
          );
        }
        if (key === 'style' && !['featured', 'beginner', 'subject'].includes(value as string)) {
          throw new functions.https.HttpsError(
            'invalid-argument',
            'style must be featured, beginner, or subject'
          );
        }
        safeUpdates[key] = value;
      }
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const sectionRef = configRef.collection('sections').doc(sectionId);

    const sectionDoc = await sectionRef.get();
    if (!sectionDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Section not found'
      );
    }

    await sectionRef.update(safeUpdates);

    // Update metadata
    await configRef.set({
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await logAdminAction('update_section', adminNpub, {
      metadata: { sectionId, updates: safeUpdates }
    });

    return { success: true };
  }
);

/**
 * Delete a category/section (admin only)
 * Only allowed if no courses are assigned to it
 */
export const deleteSection = functions.https.onCall(
  async (
    data: { sectionId: string },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'deleteSection');

    const { sectionId } = data;

    if (!sectionId || typeof sectionId !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'sectionId is required'
      );
    }

    // Cannot delete 'featured' section
    if (sectionId === 'featured') {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'Cannot delete the Featured section'
      );
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const sectionRef = configRef.collection('sections').doc(sectionId);

    const sectionDoc = await sectionRef.get();
    if (!sectionDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Section not found'
      );
    }

    // Check if any courses are assigned to this section
    const coursesSnapshot = await configRef.collection('courses')
      .where('sections', 'array-contains', sectionId)
      .limit(1)
      .get();

    if (!coursesSnapshot.empty) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'Cannot delete section with assigned courses. Remove courses from this section first.'
      );
    }

    await sectionRef.delete();

    // Update metadata
    await configRef.set({
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await logAdminAction('delete_section', adminNpub, {
      metadata: { sectionId, sectionTitle: sectionDoc.data()?.title }
    });

    return { success: true };
  }
);

/**
 * Reorder sections (admin only)
 */
// Maximum batch size for reorder operations (Firestore limit is 500)
const MAX_REORDER_BATCH_SIZE = 100;

export const reorderSections = functions.https.onCall(
  async (
    data: { sectionIds: string[] },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'reorderSections');

    const { sectionIds } = data;

    if (!Array.isArray(sectionIds)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'sectionIds must be an array'
      );
    }

    // Security: Limit batch size to prevent DoS
    if (sectionIds.length > MAX_REORDER_BATCH_SIZE) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        `sectionIds array exceeds maximum size of ${MAX_REORDER_BATCH_SIZE}`
      );
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const batch = admin.firestore().batch();

    // Update order for each section
    sectionIds.forEach((sectionId, index) => {
      const sectionRef = configRef.collection('sections').doc(sectionId);
      batch.update(sectionRef, { order: index });
    });

    // Update metadata
    batch.set(configRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await batch.commit();

    await logAdminAction('reorder_sections', adminNpub, {
      metadata: { newOrder: sectionIds }
    });

    return { success: true };
  }
);

/**
 * Reorder courses within a category (admin only)
 */
export const reorderCourses = functions.https.onCall(
  async (
    data: { courseIds: string[] },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'reorderCourses');

    const { courseIds } = data;

    if (!Array.isArray(courseIds)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseIds must be an array'
      );
    }

    // Security: Limit batch size to prevent DoS
    if (courseIds.length > MAX_REORDER_BATCH_SIZE) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        `courseIds array exceeds maximum size of ${MAX_REORDER_BATCH_SIZE}`
      );
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const batch = admin.firestore().batch();

    // Update order for each course
    courseIds.forEach((courseId, index) => {
      const courseRef = configRef.collection('courses').doc(courseId);
      batch.update(courseRef, { order: index });
    });

    // Update metadata
    batch.set(configRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub
    }, { merge: true });

    await batch.commit();

    await logAdminAction('reorder_courses', adminNpub, {
      metadata: { newOrder: courseIds }
    });

    return { success: true };
  }
);

/**
 * Get list of course config admins (admin only)
 */
export const getCourseAdmins = functions.https.onCall(
  async (
    _data: unknown,
    context
  ): Promise<{ admins: Admin[] }> => {
    await requireCourseAdmin(context.auth);

    const configRef = admin.firestore().doc(STAGING_PATH);
    const adminsSnapshot = await configRef.collection('admins').get();

    const admins = adminsSnapshot.docs.map(doc => ({
      npub: doc.id,
      ...doc.data()
    })) as Admin[];

    return { admins };
  }
);

/**
 * Add a new course config admin (admin only)
 */
export const addCourseAdmin = functions.https.onCall(
  async (
    data: { npub: string; displayName?: string },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'addCourseAdmin');

    const { npub, displayName } = data;

    if (!npub || typeof npub !== 'string' || !npub.startsWith('npub1')) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Valid npub is required'
      );
    }

    // Validate npub length (standard bech32 npub is 63 characters)
    if (npub.length > 70) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Invalid npub format'
      );
    }

    // Validate and sanitize display name
    let sanitizedDisplayName: string | null = null;
    if (displayName && typeof displayName === 'string') {
      if (displayName.length > 100) {
        throw new functions.https.HttpsError(
          'invalid-argument',
          'displayName exceeds maximum length of 100 characters'
        );
      }
      sanitizedDisplayName = displayName.trim().slice(0, 100);
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const adminRef = configRef.collection('admins').doc(npub);

    // Check if already an admin
    const existingDoc = await adminRef.get();
    if (existingDoc.exists) {
      throw new functions.https.HttpsError(
        'already-exists',
        'User is already an admin'
      );
    }

    await adminRef.set({
      npub,
      displayName: sanitizedDisplayName,
      addedAt: admin.firestore.FieldValue.serverTimestamp(),
      addedBy: adminNpub
    });

    await logAdminAction('add_course_admin', adminNpub, {
      targetNpub: npub,
      metadata: { displayName }
    });

    return { success: true };
  }
);

/**
 * Remove a course config admin (admin only)
 */
export const removeCourseAdmin = functions.https.onCall(
  async (
    data: { npub: string },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);
    await checkAdminRateLimit(adminNpub, 'removeCourseAdmin');

    const { npub } = data;

    if (!npub || typeof npub !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'npub is required'
      );
    }

    // Cannot remove yourself
    if (npub === adminNpub) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'Cannot remove yourself as admin'
      );
    }

    const configRef = admin.firestore().doc(STAGING_PATH);
    const adminRef = configRef.collection('admins').doc(npub);

    const adminDoc = await adminRef.get();
    if (!adminDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Admin not found'
      );
    }

    // Ensure there's at least one admin left
    const adminsSnapshot = await configRef.collection('admins').get();
    if (adminsSnapshot.size <= 1) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'Cannot remove the last admin'
      );
    }

    await adminRef.delete();

    await logAdminAction('remove_course_admin', adminNpub, {
      targetNpub: npub
    });

    return { success: true };
  }
);

/**
 * Check if the current user is a course admin (public, for UI)
 */
export const isCourseAdmin = functions.https.onCall(
  async (
    _data: unknown,
    context
  ): Promise<{ isAdmin: boolean }> => {
    if (!context.auth) {
      return { isAdmin: false };
    }

    const npub = context.auth.uid;

    const adminDoc = await admin.firestore()
      .collection('courseConfig')
      .doc('config')
      .collection('admins')
      .doc(npub)
      .get();

    return { isAdmin: adminDoc.exists };
  }
);
