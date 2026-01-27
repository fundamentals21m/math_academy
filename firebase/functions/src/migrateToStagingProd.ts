/**
 * One-time migration script to move existing courseConfig/config data
 * to the new staging/production structure.
 *
 * This should be run once during the transition to the new architecture.
 *
 * Usage:
 *   1. Deploy this function: firebase deploy --only functions:migrateToStagingProd
 *   2. Run via HTTP: curl "https://us-central1-magic-internet-math-96630.cloudfunctions.net/migrateToStagingProd?secret=$SEED_SECRET"
 *   3. Verify data in Firebase console
 */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Paths
const OLD_CONFIG_PATH = 'courseConfig/config';
const STAGING_PATH = 'courseConfig/staging';
const PRODUCTION_PATH = 'courseConfig/production';
const BACKUP_PATH = 'courseConfig/config_backup';

/**
 * Copy all collections from source path to destination path
 */
async function copyConfigData(
  sourcePath: string,
  destPath: string
): Promise<{ sections: number; courses: number; admins: number }> {
  const sourceRef = admin.firestore().doc(sourcePath);
  const destRef = admin.firestore().doc(destPath);

  let sectionCount = 0;
  let courseCount = 0;
  let adminCount = 0;

  // Use batched writes
  let batch = admin.firestore().batch();
  let operationCount = 0;
  const MAX_BATCH_SIZE = 400;

  // Copy metadata document
  const sourceDoc = await sourceRef.get();
  if (sourceDoc.exists) {
    batch.set(destRef, sourceDoc.data() || {});
    operationCount++;
  }

  // Copy sections
  const sectionsSnapshot = await sourceRef.collection('sections').get();
  for (const doc of sectionsSnapshot.docs) {
    if (operationCount >= MAX_BATCH_SIZE) {
      await batch.commit();
      batch = admin.firestore().batch();
      operationCount = 0;
    }
    const destSectionRef = destRef.collection('sections').doc(doc.id);
    batch.set(destSectionRef, doc.data());
    operationCount++;
    sectionCount++;
  }

  // Copy courses
  const coursesSnapshot = await sourceRef.collection('courses').get();
  for (const doc of coursesSnapshot.docs) {
    if (operationCount >= MAX_BATCH_SIZE) {
      await batch.commit();
      batch = admin.firestore().batch();
      operationCount = 0;
    }
    const destCourseRef = destRef.collection('courses').doc(doc.id);
    batch.set(destCourseRef, doc.data());
    operationCount++;
    courseCount++;
  }

  // Copy admins
  const adminsSnapshot = await sourceRef.collection('admins').get();
  for (const doc of adminsSnapshot.docs) {
    if (operationCount >= MAX_BATCH_SIZE) {
      await batch.commit();
      batch = admin.firestore().batch();
      operationCount = 0;
    }
    const destAdminRef = destRef.collection('admins').doc(doc.id);
    batch.set(destAdminRef, doc.data());
    operationCount++;
    adminCount++;
  }

  // Commit remaining operations
  if (operationCount > 0) {
    await batch.commit();
  }

  return { sections: sectionCount, courses: courseCount, admins: adminCount };
}

/**
 * Migration function - copies config to staging and production
 */
export const migrateToStagingProd = functions.https.onRequest(async (req, res) => {
  // Security: Require secret for migration
  const secret = functions.config().seed?.secret;
  const providedSecret = req.query.secret as string;

  if (!secret || providedSecret !== secret) {
    res.status(401).send('Unauthorized: Invalid or missing secret');
    return;
  }

  try {
    console.log('Starting migration to staging/production structure...');

    // Check if old config exists
    const oldConfigRef = admin.firestore().doc(OLD_CONFIG_PATH);
    const oldConfigDoc = await oldConfigRef.get();

    if (!oldConfigDoc.exists) {
      // Check if sections subcollection exists (data might be in subcollections only)
      const sectionsSnapshot = await oldConfigRef.collection('sections').limit(1).get();
      if (sectionsSnapshot.empty) {
        res.status(404).send('No existing config found at courseConfig/config');
        return;
      }
    }

    // Check if staging already has data (prevent accidental overwrite)
    const stagingRef = admin.firestore().doc(STAGING_PATH);
    const stagingSections = await stagingRef.collection('sections').limit(1).get();

    if (!stagingSections.empty) {
      const force = req.query.force === 'true';
      if (!force) {
        res.status(409).send(
          'Staging already has data. Add ?force=true to overwrite. ' +
          'WARNING: This will replace existing staging data!'
        );
        return;
      }
      console.log('Force flag set - overwriting existing staging data');
    }

    // Step 1: Create backup of old config
    console.log('Creating backup of old config...');
    const backupResult = await copyConfigData(OLD_CONFIG_PATH, BACKUP_PATH);
    console.log(`Backup created: ${backupResult.sections} sections, ${backupResult.courses} courses, ${backupResult.admins} admins`);

    // Step 2: Copy to staging
    console.log('Copying to staging...');
    const stagingResult = await copyConfigData(OLD_CONFIG_PATH, STAGING_PATH);
    console.log(`Staging populated: ${stagingResult.sections} sections, ${stagingResult.courses} courses, ${stagingResult.admins} admins`);

    // Step 3: Copy to production
    console.log('Copying to production...');
    const productionResult = await copyConfigData(OLD_CONFIG_PATH, PRODUCTION_PATH);
    console.log(`Production populated: ${productionResult.sections} sections, ${productionResult.courses} courses, ${productionResult.admins} admins`);

    // Step 4: Add migration metadata
    const timestamp = admin.firestore.FieldValue.serverTimestamp();

    await stagingRef.set({
      lastUpdated: timestamp,
      updatedBy: 'migration',
      migratedAt: timestamp,
      migratedFrom: OLD_CONFIG_PATH
    }, { merge: true });

    await admin.firestore().doc(PRODUCTION_PATH).set({
      lastUpdated: timestamp,
      updatedBy: 'migration',
      migratedAt: timestamp,
      migratedFrom: OLD_CONFIG_PATH
    }, { merge: true });

    const response = {
      success: true,
      message: 'Migration completed successfully',
      backup: {
        path: BACKUP_PATH,
        ...backupResult
      },
      staging: {
        path: STAGING_PATH,
        ...stagingResult
      },
      production: {
        path: PRODUCTION_PATH,
        ...productionResult
      },
      note: 'Old config preserved at courseConfig/config_backup. You can delete courseConfig/config after verifying the migration.'
    };

    console.log('Migration completed:', JSON.stringify(response, null, 2));
    res.status(200).json(response);
  } catch (error) {
    console.error('Migration failed:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});
