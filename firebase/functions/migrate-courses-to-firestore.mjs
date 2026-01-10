/**
 * Migration Script: Seed Firestore with Course Configuration
 * 
 * This script migrates course and section data from courses.js to Firestore.
 * It's designed to be run once to initialize the courseConfig collection.
 * 
 * Prerequisites:
 * 1. Set GOOGLE_APPLICATION_CREDENTIALS environment variable to your service account key path
 * 2. Or run from a machine with default credentials configured
 * 
 * Usage:
 *   node scripts/migrate-courses-to-firestore.js
 * 
 * Options:
 *   --dry-run    Show what would be written without actually writing
 *   --force      Overwrite existing data (default is to skip if exists)
 */

import admin from 'firebase-admin';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamic import for ESM courses.js
const coursesModule = await import(join(__dirname, '../../scripts/courses.js'));
const { SECTIONS, COURSES } = coursesModule;

// Initial admin npub
const INITIAL_ADMIN_NPUB = 'npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g';

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const forceOverwrite = args.includes('--force');

async function migrate() {
  console.log('🚀 Starting migration to Firestore...\n');
  
  if (isDryRun) {
    console.log('📋 DRY RUN MODE - No data will be written\n');
  }

  // Initialize Firebase Admin using Application Default Credentials
  try {
    // Try to use GOOGLE_APPLICATION_CREDENTIALS if set, otherwise use ADC
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      admin.initializeApp({
        projectId: 'magic-internet-math-96630',
      });
    } else {
      // Use Application Default Credentials (works with gcloud auth)
      admin.initializeApp({
        projectId: 'magic-internet-math-96630',
        credential: admin.credential.applicationDefault(),
      });
    }
    console.log('✅ Firebase Admin initialized\n');
  } catch (error) {
    console.error('❌ Failed to initialize Firebase Admin:', error.message);
    console.log('\nOptions to fix:');
    console.log('1. Run: gcloud auth application-default login');
    console.log('2. Or set GOOGLE_APPLICATION_CREDENTIALS to a service account key path');
    process.exit(1);
  }

  const db = admin.firestore();
  const configRef = db.collection('courseConfig').doc('config');

  // Check if config already exists
  const configDoc = await configRef.get();
  if (configDoc.exists && !forceOverwrite) {
    console.log('⚠️  courseConfig already exists. Use --force to overwrite.\n');
    process.exit(0);
  }

  const batch = db.batch();
  let operationCount = 0;

  // 1. Set metadata document
  console.log('📝 Setting metadata...');
  if (!isDryRun) {
    batch.set(configRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: 'migration-script',
      version: 1
    });
    operationCount++;
  }

  // 2. Create sections
  console.log(`\n📁 Creating ${SECTIONS.length} sections...`);
  for (let i = 0; i < SECTIONS.length; i++) {
    const section = SECTIONS[i];
    const sectionRef = configRef.collection('sections').doc(section.id);
    
    const sectionData = {
      id: section.id,
      title: section.title,
      subtitle: section.subtitle,
      style: section.style,
      order: i
    };
    
    console.log(`   - ${section.title} (${section.id})`);
    
    if (!isDryRun) {
      batch.set(sectionRef, sectionData);
      operationCount++;
    }
  }

  // 3. Create courses
  console.log(`\n📚 Creating ${COURSES.length} courses...`);
  for (let i = 0; i < COURSES.length; i++) {
    const course = COURSES[i];
    const courseRef = configRef.collection('courses').doc(course.id);
    
    const courseData = {
      id: course.id,
      title: course.title,
      description: course.description,
      icon: course.icon,
      url: course.url,
      tags: course.tags || [],
      sections: course.sections || [],
      totalSections: course.totalSections || 0,
      progressPrefix: course.progressPrefix || `${course.id}:`,
      order: i
    };
    
    // Add optional fields
    if (course.leaderboardUrl) courseData.leaderboardUrl = course.leaderboardUrl;
    if (course.shortName) courseData.shortName = course.shortName;
    if (course.external) courseData.external = course.external;
    if (course.progressGradient) courseData.progressGradient = course.progressGradient;
    if (course.iconImage) courseData.iconImage = course.iconImage;
    
    console.log(`   - ${course.title} (${course.id})`);
    
    if (!isDryRun) {
      batch.set(courseRef, courseData);
      operationCount++;
    }
  }

  // 4. Create initial admin
  console.log(`\n👤 Creating initial admin...`);
  console.log(`   - ${INITIAL_ADMIN_NPUB}`);
  
  if (!isDryRun) {
    const adminRef = configRef.collection('admins').doc(INITIAL_ADMIN_NPUB);
    batch.set(adminRef, {
      npub: INITIAL_ADMIN_NPUB,
      displayName: 'Initial Admin',
      addedAt: admin.firestore.FieldValue.serverTimestamp(),
      addedBy: 'migration-script'
    });
    operationCount++;
  }

  // 5. Commit the batch
  if (!isDryRun) {
    console.log(`\n⏳ Committing ${operationCount} operations to Firestore...`);
    await batch.commit();
    console.log('✅ Migration complete!\n');
  } else {
    console.log(`\n📊 Summary: Would write ${operationCount} documents to Firestore\n`);
  }

  // Print summary
  console.log('📊 Migration Summary:');
  console.log(`   Sections: ${SECTIONS.length}`);
  console.log(`   Courses:  ${COURSES.length}`);
  console.log(`   Admins:   1`);
  console.log('');

  process.exit(0);
}

migrate().catch(error => {
  console.error('❌ Migration failed:', error);
  process.exit(1);
});
