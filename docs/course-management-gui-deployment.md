# Course Management GUI - Deployment Plan

## Overview

This plan deploys the Course Management GUI feature, which allows admins to:
- Manage course categories (create, edit, delete, reorder)
- Assign courses to categories via checkboxes
- Manage admin users
- View dynamic hub content loaded from Firebase

---

## Pre-Deployment Checklist

| Item | Status | Notes |
|------|--------|-------|
| Firebase CLI | ✅ Ready | v13.35.1 installed, authenticated |
| Vercel CLI | ✅ Ready | v50.1.3 installed |
| Firebase Project | ✅ Configured | `magic-internet-math-96630` |
| Course Config Functions | ✅ Written | `courseConfig.ts` (11 functions) |
| Firestore Rules | ✅ Written | `courseConfig` collection rules |
| Migration Script | ⚠️ Needs Fix | Wrong project ID (line 40) |
| Admin GUI | ✅ Written | `admin.html`, `adminRenderer.js` |
| Hub Dynamic Loading | ✅ Written | `hubRenderer.js` updated |

---

## Step 1: Fix Migration Script Project ID

**Issue:** The migration script has incorrect project ID.

**File:** `scripts/migrate-courses-to-firestore.js`  
**Line 40:** Change `'magic-internet-math'` → `'magic-internet-math-96630'`

---

## Step 2: Build Firebase Functions

The new `courseConfig.ts` and `adminAudit.ts` files haven't been compiled yet.

```bash
cd /Users/brianhirschfield/Claude/math_academy/firebase/functions
npm run build
```

**Expected Output:** New files in `lib/`:
- `courseConfig.js`
- `adminAudit.js`

**Verify:** Check that `lib/courseConfig.js` exists after build.

---

## Step 3: Deploy Firebase Functions

```bash
cd /Users/brianhirschfield/Claude/math_academy/firebase/functions
firebase deploy --only functions
```

**New Functions Being Deployed:**
| Function | Access | Purpose |
|----------|--------|---------|
| `getCourseConfig` | Public | Read course configuration |
| `updateCourse` | Admin | Update course data |
| `createSection` | Admin | Create new category |
| `updateSection` | Admin | Update category |
| `deleteSection` | Admin | Delete category |
| `reorderSections` | Admin | Reorder categories |
| `reorderCourses` | Admin | Reorder courses |
| `getCourseAdmins` | Admin | List admins |
| `addCourseAdmin` | Admin | Add new admin |
| `removeCourseAdmin` | Admin | Remove admin |
| `isCourseAdmin` | Public | Check if user is admin |

**Estimated Time:** 2-3 minutes

---

## Step 4: Deploy Firestore Rules

```bash
cd /Users/brianhirschfield/Claude/math_academy/firebase
firebase deploy --only firestore:rules
```

**New Rules:**
- `courseConfig/{docId}` - Public read, function-only write
- `courseConfig/{docId}/sections/{sectionId}` - Public read, function-only write
- `courseConfig/{docId}/courses/{courseId}` - Public read, function-only write
- `courseConfig/{docId}/admins/{adminId}` - Public read, function-only write

---

## Step 5: Run Migration Script (Seed Firestore)

### 5a. Dry Run First

```bash
cd /Users/brianhirschfield/Claude/math_academy
export GOOGLE_APPLICATION_CREDENTIALS="./math-academy-project-2026-01-04 (1).json"
node scripts/migrate-courses-to-firestore.js --dry-run
```

### 5b. Execute Migration

```bash
node scripts/migrate-courses-to-firestore.js
```

**Expected Output:**
- 11 sections created
- 26 courses created  
- 1 admin created (`npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g`)

**Verify in Firebase Console:**
1. Navigate to Firestore → `courseConfig` collection
2. Should see `config` document with subcollections: `sections`, `courses`, `admins`

---

## Step 6: Deploy Hub to Vercel

```bash
cd /Users/brianhirschfield/Claude/math_academy
vercel --prod --yes
```

**New/Updated Files Being Deployed:**
- `admin.html` - Admin GUI page
- `scripts/adminRenderer.js` - Admin functionality
- `styles/admin.css` - Admin styling
- `scripts/hubRenderer.js` - Updated with Firebase loading
- `index.html` - Updated with async rendering

**URL:** https://mathacademy-cyan.vercel.app/

---

## Step 7: Post-Deployment Verification

### 7.1 Verify Public Hub
1. Visit https://mathacademy-cyan.vercel.app/
2. Confirm courses load correctly
3. Check browser console for "Loaded course config from Firebase"
4. Test expand/collapse functionality

### 7.2 Verify Admin GUI
1. Visit https://mathacademy-cyan.vercel.app/admin.html
2. **Without login:** Should see "Access Denied"
3. **With admin npub login:**
   - Should see Categories panel (11 categories)
   - Should see Courses panel (26 courses)
   - Should see Admins panel (1 admin)
4. Test drag & drop reordering
5. Test category CRUD
6. Test admin management

### 7.3 Functional Tests
| Test | Expected Result |
|------|-----------------|
| Create test category | Category appears in list |
| Assign course to category | Checkbox updates, unsaved banner shows |
| Save changes | Toast confirms, changes persist on reload |
| Delete category | Category removed (blocked if has courses) |
| Add admin | New admin appears in list |
| Public hub reflects changes | After save, hub shows updated config |

---

## Rollback Plan

### Option A: Force Static Data
Edit `index.html`, change:
```javascript
await renderCourseHub('courses-container', { insertFeaturedContentAfter: 'featured', useFirebase: false })
```
Redeploy to Vercel.

### Option B: Remove Admin Page
```bash
rm admin.html
vercel --prod --yes
```

### Option C: Delete Firestore Data
```bash
firebase firestore:delete courseConfig --recursive
```

---

## Quick Reference Commands

```bash
# Full deployment sequence
cd /Users/brianhirschfield/Claude/math_academy

# 1. Build functions
cd firebase/functions && npm run build && cd ../..

# 2. Deploy Firebase (functions + rules)
cd firebase && firebase deploy --only functions,firestore:rules && cd ..

# 3. Run migration
export GOOGLE_APPLICATION_CREDENTIALS="./math-academy-project-2026-01-04 (1).json"
node scripts/migrate-courses-to-firestore.js

# 4. Deploy to Vercel
vercel --prod --yes
```

---

## Configuration Reference

### Initial Admin
```
npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g
```

### Firebase Project
```
Project ID: magic-internet-math-96630
```

### Service Account Key
```
./math-academy-project-2026-01-04 (1).json
```

### URLs
- **Public Hub:** https://mathacademy-cyan.vercel.app/
- **Admin GUI:** https://mathacademy-cyan.vercel.app/admin.html
- **Firebase Console:** https://console.firebase.google.com/project/magic-internet-math-96630
