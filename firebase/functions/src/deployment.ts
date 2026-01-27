import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { logAdminAction } from './adminAudit';

// Types
interface DeploymentStatus {
  stagingLastUpdated: admin.firestore.Timestamp | null;
  stagingUpdatedBy: string | null;
  productionLastUpdated: admin.firestore.Timestamp | null;
  productionUpdatedBy: string | null;
  hasChanges: boolean;
  backups: Array<{
    id: string;
    timestamp: admin.firestore.Timestamp;
    createdBy: string;
  }>;
}

interface AuthContext {
  uid: string;
  token?: Record<string, unknown>;
}

// Config paths
const STAGING_PATH = 'courseConfig/staging';
const PRODUCTION_PATH = 'courseConfig/production';

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
 * Get deployment status - shows staging vs production state
 */
export const getDeploymentStatus = functions.https.onCall(
  async (_data: unknown, context): Promise<DeploymentStatus> => {
    await requireCourseAdmin(context.auth);

    const stagingRef = admin.firestore().doc(STAGING_PATH);
    const productionRef = admin.firestore().doc(PRODUCTION_PATH);

    // Get metadata from both environments
    const [stagingDoc, productionDoc] = await Promise.all([
      stagingRef.get(),
      productionRef.get()
    ]);

    const stagingData = stagingDoc.data() || {};
    const productionData = productionDoc.data() || {};

    // Get backups list
    const backupsSnapshot = await productionRef
      .collection('backups')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .get();

    const backups = backupsSnapshot.docs.map(doc => ({
      id: doc.id,
      timestamp: doc.data().timestamp,
      createdBy: doc.data().createdBy || 'unknown'
    }));

    // Determine if there are changes by comparing timestamps
    const stagingUpdated = stagingData.lastUpdated?.toMillis() || 0;
    const productionUpdated = productionData.lastUpdated?.toMillis() || 0;
    const hasChanges = stagingUpdated > productionUpdated;

    return {
      stagingLastUpdated: stagingData.lastUpdated || null,
      stagingUpdatedBy: stagingData.updatedBy || null,
      productionLastUpdated: productionData.lastUpdated || null,
      productionUpdatedBy: productionData.updatedBy || null,
      hasChanges,
      backups
    };
  }
);

/**
 * Promote staging to production
 * Creates a backup of current production before overwriting
 */
export const promoteToProduction = functions.https.onCall(
  async (_data: unknown, context): Promise<{ success: boolean; backupId: string }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    const productionRef = admin.firestore().doc(PRODUCTION_PATH);
    const stagingRef = admin.firestore().doc(STAGING_PATH);

    // Create backup of current production
    const backupId = `backup_${Date.now()}`;

    // Use batched writes (Firestore limit is 500 operations per batch)
    let batch = admin.firestore().batch();
    let operationCount = 0;
    const MAX_BATCH_SIZE = 400; // Leave margin for safety

    // First, save current production as backup
    const productionDoc = await productionRef.get();
    if (productionDoc.exists) {
      // Save backup metadata
      const backupRef = productionRef.collection('backups').doc(backupId);
      batch.set(backupRef, {
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        createdBy: adminNpub,
        metadata: productionDoc.data()
      });
      operationCount++;

      // Copy production sections to backup
      const sectionsSnapshot = await productionRef.collection('sections').get();
      for (const doc of sectionsSnapshot.docs) {
        if (operationCount >= MAX_BATCH_SIZE) {
          await batch.commit();
          batch = admin.firestore().batch();
          operationCount = 0;
        }
        const backupSectionRef = backupRef.collection('sections').doc(doc.id);
        batch.set(backupSectionRef, doc.data());
        operationCount++;
      }

      // Copy production courses to backup
      const coursesSnapshot = await productionRef.collection('courses').get();
      for (const doc of coursesSnapshot.docs) {
        if (operationCount >= MAX_BATCH_SIZE) {
          await batch.commit();
          batch = admin.firestore().batch();
          operationCount = 0;
        }
        const backupCourseRef = backupRef.collection('courses').doc(doc.id);
        batch.set(backupCourseRef, doc.data());
        operationCount++;
      }

      // Copy production admins to backup
      const adminsSnapshot = await productionRef.collection('admins').get();
      for (const doc of adminsSnapshot.docs) {
        if (operationCount >= MAX_BATCH_SIZE) {
          await batch.commit();
          batch = admin.firestore().batch();
          operationCount = 0;
        }
        const backupAdminRef = backupRef.collection('admins').doc(doc.id);
        batch.set(backupAdminRef, doc.data());
        operationCount++;
      }
    }

    // Commit backup
    await batch.commit();
    batch = admin.firestore().batch();
    operationCount = 0;

    // Delete current production (except backups)
    const prodSectionsSnapshot = await productionRef.collection('sections').get();
    for (const doc of prodSectionsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    const prodCoursesSnapshot = await productionRef.collection('courses').get();
    for (const doc of prodCoursesSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    const prodAdminsSnapshot = await productionRef.collection('admins').get();
    for (const doc of prodAdminsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    // Commit deletions
    await batch.commit();
    batch = admin.firestore().batch();
    operationCount = 0;

    // Copy staging to production
    const stagingSectionsSnapshot = await stagingRef.collection('sections').get();
    for (const doc of stagingSectionsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodSectionRef = productionRef.collection('sections').doc(doc.id);
      batch.set(prodSectionRef, doc.data());
      operationCount++;
    }

    const stagingCoursesSnapshot = await stagingRef.collection('courses').get();
    for (const doc of stagingCoursesSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodCourseRef = productionRef.collection('courses').doc(doc.id);
      batch.set(prodCourseRef, doc.data());
      operationCount++;
    }

    const stagingAdminsSnapshot = await stagingRef.collection('admins').get();
    for (const doc of stagingAdminsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodAdminRef = productionRef.collection('admins').doc(doc.id);
      batch.set(prodAdminRef, doc.data());
      operationCount++;
    }

    // Update production metadata
    batch.set(productionRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub,
      promotedFrom: 'staging',
      promotedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    operationCount++;

    // Final commit
    await batch.commit();

    await logAdminAction('promote_to_production', adminNpub, {
      metadata: { backupId }
    });

    return { success: true, backupId };
  }
);

/**
 * Revert production to a previous backup
 */
export const revertProduction = functions.https.onCall(
  async (data: { backupId?: string }, context): Promise<{ success: boolean; revertedTo: string }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    const productionRef = admin.firestore().doc(PRODUCTION_PATH);

    // Get the backup to revert to
    let backupId = data?.backupId;

    if (!backupId) {
      // Get the most recent backup
      const backupsSnapshot = await productionRef
        .collection('backups')
        .orderBy('timestamp', 'desc')
        .limit(1)
        .get();

      if (backupsSnapshot.empty) {
        throw new functions.https.HttpsError(
          'not-found',
          'No backups available to revert to'
        );
      }

      backupId = backupsSnapshot.docs[0].id;
    }

    const backupRef = productionRef.collection('backups').doc(backupId);
    const backupDoc = await backupRef.get();

    if (!backupDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        `Backup ${backupId} not found`
      );
    }

    // Use batched writes
    let batch = admin.firestore().batch();
    let operationCount = 0;
    const MAX_BATCH_SIZE = 400;

    // Delete current production (except backups)
    const prodSectionsSnapshot = await productionRef.collection('sections').get();
    for (const doc of prodSectionsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    const prodCoursesSnapshot = await productionRef.collection('courses').get();
    for (const doc of prodCoursesSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    const prodAdminsSnapshot = await productionRef.collection('admins').get();
    for (const doc of prodAdminsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      batch.delete(doc.ref);
      operationCount++;
    }

    // Commit deletions
    await batch.commit();
    batch = admin.firestore().batch();
    operationCount = 0;

    // Copy backup to production
    const backupSectionsSnapshot = await backupRef.collection('sections').get();
    for (const doc of backupSectionsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodSectionRef = productionRef.collection('sections').doc(doc.id);
      batch.set(prodSectionRef, doc.data());
      operationCount++;
    }

    const backupCoursesSnapshot = await backupRef.collection('courses').get();
    for (const doc of backupCoursesSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodCourseRef = productionRef.collection('courses').doc(doc.id);
      batch.set(prodCourseRef, doc.data());
      operationCount++;
    }

    const backupAdminsSnapshot = await backupRef.collection('admins').get();
    for (const doc of backupAdminsSnapshot.docs) {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        batch = admin.firestore().batch();
        operationCount = 0;
      }
      const prodAdminRef = productionRef.collection('admins').doc(doc.id);
      batch.set(prodAdminRef, doc.data());
      operationCount++;
    }

    // Update production metadata
    const backupData = backupDoc.data();
    batch.set(productionRef, {
      ...backupData?.metadata,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: adminNpub,
      revertedFrom: backupId,
      revertedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    operationCount++;

    // Final commit
    await batch.commit();

    await logAdminAction('revert_production', adminNpub, {
      metadata: { backupId }
    });

    return { success: true, revertedTo: backupId };
  }
);

/**
 * Promote latest Vercel preview deployment to production
 * Requires VERCEL_TOKEN to be set in Firebase Functions config
 */
export const promoteVercelDeployment = functions.https.onCall(
  async (_data: unknown, context): Promise<{ success: boolean; deploymentUrl?: string; message?: string }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    // Get Vercel config from Firebase Functions config
    const vercelToken = functions.config().vercel?.token;
    const projectId = functions.config().vercel?.project_id;
    const teamId = functions.config().vercel?.team_id;

    if (!vercelToken || !projectId) {
      return {
        success: false,
        message: 'Vercel integration not configured. Set vercel.token and vercel.project_id in Firebase Functions config.'
      };
    }

    try {
      // Get latest preview deployment
      const listUrl = `https://api.vercel.com/v6/deployments?projectId=${projectId}${teamId ? `&teamId=${teamId}` : ''}&limit=10&state=READY`;

      const listResponse = await fetch(listUrl, {
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!listResponse.ok) {
        throw new Error(`Failed to list deployments: ${listResponse.statusText}`);
      }

      const deployments = await listResponse.json();

      // Find the latest non-production deployment
      const previewDeployment = deployments.deployments?.find(
        (d: { target?: string }) => d.target !== 'production'
      );

      if (!previewDeployment) {
        return {
          success: false,
          message: 'No preview deployment found to promote'
        };
      }

      // Promote to production by setting the production alias
      const promoteUrl = `https://api.vercel.com/v9/projects/${projectId}/alias?${teamId ? `teamId=${teamId}` : ''}`;

      const promoteResponse = await fetch(promoteUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          target: 'production',
          deploymentId: previewDeployment.uid
        })
      });

      if (!promoteResponse.ok) {
        throw new Error(`Failed to promote deployment: ${promoteResponse.statusText}`);
      }

      await logAdminAction('promote_vercel_deployment', adminNpub, {
        metadata: {
          deploymentId: previewDeployment.uid,
          deploymentUrl: previewDeployment.url
        }
      });

      return {
        success: true,
        deploymentUrl: `https://${previewDeployment.url}`
      };
    } catch (error) {
      console.error('Error promoting Vercel deployment:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
);

/**
 * Revert Vercel production to previous deployment
 * Requires VERCEL_TOKEN to be set in Firebase Functions config
 */
export const revertVercelDeployment = functions.https.onCall(
  async (_data: unknown, context): Promise<{ success: boolean; deploymentUrl?: string; message?: string }> => {
    const adminNpub = await requireCourseAdmin(context.auth);

    // Get Vercel config from Firebase Functions config
    const vercelToken = functions.config().vercel?.token;
    const projectId = functions.config().vercel?.project_id;
    const teamId = functions.config().vercel?.team_id;

    if (!vercelToken || !projectId) {
      return {
        success: false,
        message: 'Vercel integration not configured. Set vercel.token and vercel.project_id in Firebase Functions config.'
      };
    }

    try {
      // Get production deployments history
      const listUrl = `https://api.vercel.com/v6/deployments?projectId=${projectId}${teamId ? `&teamId=${teamId}` : ''}&limit=20&state=READY&target=production`;

      const listResponse = await fetch(listUrl, {
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!listResponse.ok) {
        throw new Error(`Failed to list deployments: ${listResponse.statusText}`);
      }

      const deployments = await listResponse.json();

      // Get the second most recent production deployment (first is current)
      if (!deployments.deployments || deployments.deployments.length < 2) {
        return {
          success: false,
          message: 'No previous production deployment found to revert to'
        };
      }

      const previousDeployment = deployments.deployments[1];

      // Rollback to previous deployment
      const rollbackUrl = `https://api.vercel.com/v9/projects/${projectId}/rollback?${teamId ? `teamId=${teamId}` : ''}`;

      const rollbackResponse = await fetch(rollbackUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deploymentId: previousDeployment.uid
        })
      });

      if (!rollbackResponse.ok) {
        throw new Error(`Failed to rollback deployment: ${rollbackResponse.statusText}`);
      }

      await logAdminAction('revert_vercel_deployment', adminNpub, {
        metadata: {
          deploymentId: previousDeployment.uid,
          deploymentUrl: previousDeployment.url
        }
      });

      return {
        success: true,
        deploymentUrl: `https://${previousDeployment.url}`
      };
    } catch (error) {
      console.error('Error reverting Vercel deployment:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
);
