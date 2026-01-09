import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { logAdminAction } from './adminAudit';

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

const CONFIG_DOC = 'courseConfig/config';

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

  // Check if user is in the courseConfig admins
  const adminDoc = await admin.firestore()
    .collection('courseConfig')
    .doc('config')
    .collection('admins')
    .doc(npub)
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
 * Get the full course configuration (public read)
 */
export const getCourseConfig = functions.https.onCall(
  async (): Promise<CourseConfig> => {
    const configRef = admin.firestore().collection('courseConfig').doc('config');

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

    // Get admins (public read for admin UI to show who's admin)
    const adminsSnapshot = await configRef.collection('admins').get();
    const admins = adminsSnapshot.docs.map(doc => ({
      npub: doc.id,
      ...doc.data()
    })) as Admin[];

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
export const updateCourse = functions.https.onCall(
  async (
    data: { courseId: string; updates: Partial<Course> },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    const { courseId, updates } = data;

    if (!courseId || typeof courseId !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseId is required'
      );
    }

    // Remove id from updates to prevent overwriting
    const { id, ...safeUpdates } = updates;

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      courseId,
      updates: safeUpdates
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

    const { title, subtitle, style } = data;

    if (!title || typeof title !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'title is required'
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

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      sectionId,
      title,
      style
    });

    return { success: true, sectionId };
  }
);

/**
 * Update a category/section (admin only)
 */
export const updateSection = functions.https.onCall(
  async (
    data: { sectionId: string; updates: Partial<Section> },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    const { sectionId, updates } = data;

    if (!sectionId || typeof sectionId !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'sectionId is required'
      );
    }

    // Remove id from updates to prevent overwriting
    const { id, ...safeUpdates } = updates;

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      sectionId,
      updates: safeUpdates
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

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      sectionId,
      sectionTitle: sectionDoc.data()?.title
    });

    return { success: true };
  }
);

/**
 * Reorder sections (admin only)
 */
export const reorderSections = functions.https.onCall(
  async (
    data: { sectionIds: string[] },
    context
  ): Promise<{ success: boolean }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    const { sectionIds } = data;

    if (!Array.isArray(sectionIds)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'sectionIds must be an array'
      );
    }

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      newOrder: sectionIds
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

    const { courseIds } = data;

    if (!Array.isArray(courseIds)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'courseIds must be an array'
      );
    }

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      newOrder: courseIds
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

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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

    const { npub, displayName } = data;

    if (!npub || typeof npub !== 'string' || !npub.startsWith('npub1')) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Valid npub is required'
      );
    }

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      displayName: displayName || null,
      addedAt: admin.firestore.FieldValue.serverTimestamp(),
      addedBy: adminNpub
    });

    await logAdminAction('add_course_admin', adminNpub, {
      newAdminNpub: npub,
      displayName
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

    const configRef = admin.firestore().collection('courseConfig').doc('config');
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
      removedAdminNpub: npub
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
