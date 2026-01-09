# Course Management GUI - Implementation Plan

## Overview

Build a complete course management system with:
1. **Collapsible categories** on the public hub (Featured always expanded, others collapsed)
2. **Admin-only GUI** at `/admin` for managing course-to-category assignments
3. **Firebase backend** for dynamic course configuration
4. **Category management** - admins can create/edit/delete categories
5. **Drag & drop** - reorder courses and categories

## Key Decisions

| Decision | Choice |
|----------|--------|
| Featured section | Always expanded |
| Other sections | Collapsed by default |
| Expand/Collapse All | Yes, toggle button |
| Initial admin npub | `npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g` |
| Admins can add admins | Yes, via GUI |
| Category styles | Pick from existing (`featured`, `beginner`, `subject`) |
| Course ordering | Drag & drop (essential) |
| Category ordering | Drag & drop |
| Admin page visibility | Hidden from non-admins (redirect to home) |

---

## Phase 1: Collapsible Categories (Public Hub)

### Files to Modify

| File | Changes |
|------|---------|
| `scripts/hubRenderer.js` | Add expand/collapse logic, click handlers, chevron icons |
| `styles/hub.css` | Collapsed state styles, chevron rotation, transitions |
| `index.html` | Add "Expand All / Collapse All" toggle button |

### Implementation Details

- Wrap section header in clickable element
- Add chevron icon (▶ collapsed, ▼ expanded)
- Featured section always expanded
- Other sections collapsed by default
- Store user preferences in localStorage (`hub:expandedSections`)
- Export `expandAll()` and `collapseAll()` functions

---

## Phase 2: Firestore Schema + Migration

### Firestore Structure

```
courseConfig/
├── metadata (document)
│   └── { lastUpdated, updatedBy }
│
├── sections/ (subcollection)
│   └── {sectionId}: {
│         id: string,
│         title: string,
│         subtitle: string,
│         style: 'featured' | 'beginner' | 'subject',
│         order: number
│       }
│
├── courses/ (subcollection)
│   └── {courseId}: {
│         id: string,
│         title: string,
│         description: string,
│         icon: string,
│         url: string,
│         tags: string[],
│         sections: string[],
│         totalSections: number,
│         progressPrefix: string,
│         leaderboardUrl?: string,
│         shortName?: string,
│         external?: boolean,
│         progressGradient?: string,
│         order: number
│       }
│
└── admins/ (subcollection)
    └── {visibleId}: {
          npub: string,
          displayName?: string,
          addedAt: Timestamp,
          addedBy: string
        }
```

### Files to Create/Modify

- `firebase/firestore.rules` - Add rules for courseConfig
- `scripts/migrate-courses-to-firestore.js` - One-time migration script

---

## Phase 3: Cloud Functions

### File: `firebase/functions/src/courseConfig.ts`

| Function | Access | Purpose |
|----------|--------|---------|
| `getCourseConfig` | Public | Returns all sections + courses for hub rendering |
| `updateCourse` | Admin | Update course data including category assignments |
| `createSection` | Admin | Create new category |
| `updateSection` | Admin | Edit category title/subtitle/style/order |
| `deleteSection` | Admin | Delete category (blocked if courses assigned) |
| `reorderSections` | Admin | Update order of all categories |
| `reorderCourses` | Admin | Update order of courses within a category |
| `getAdmins` | Admin | List all admins |
| `addAdmin` | Admin | Add new admin by npub |
| `removeAdmin` | Admin | Remove admin (can't remove yourself) |

---

## Phase 4: Admin GUI

### New Files

| File | Purpose |
|------|---------|
| `admin.html` | Admin page HTML |
| `scripts/adminRenderer.js` | Admin UI logic, drag & drop, Firebase calls |
| `styles/admin.css` | Admin-specific styles |

### Authentication Flow

1. Page loads → Check if Nostr extension available
2. If not logged in → Show "Connect with Nostr" button
3. On login → Check if npub is in admins collection
4. If not admin → Redirect to home page immediately
5. If admin → Render admin interface

### UI Sections

1. **Header** - Back to Hub, Save All, Discard buttons
2. **Categories Panel** - List, add, edit, delete, drag to reorder
3. **Courses Panel** - List with category checkboxes, filter, search, drag to reorder
4. **Admins Panel** - List admins, add/remove

### Drag & Drop

- Native HTML5 drag-and-drop API
- Visual placeholder shows drop position
- On drop, update `order` fields
- Categories: reorder in place
- Courses: reorder within filtered category

### Change Tracking

- Track changes in memory before saving
- Visual indicator on changed items
- "Save All" enabled only when changes exist
- "Discard" to reset to last saved state
- Warn on page unload if unsaved changes

---

## Phase 5: Dynamic Hub Loading

### Changes to `scripts/hubRenderer.js`

```javascript
async function loadConfig() {
  const cached = sessionStorage.getItem('courseConfig');
  if (cached && Date.now() - JSON.parse(cached).ts < 300000) {
    return JSON.parse(cached).data;
  }
  
  try {
    const result = await getCourseConfigFn();
    sessionStorage.setItem('courseConfig', JSON.stringify({
      data: result.data, ts: Date.now()
    }));
    return result.data;
  } catch {
    return { sections: SECTIONS, courses: COURSES };
  }
}
```

---

## File Summary

### New Files (5)
- `admin.html`
- `scripts/adminRenderer.js`
- `styles/admin.css`
- `firebase/functions/src/courseConfig.ts`
- `scripts/migrate-courses-to-firestore.js`

### Modified Files (5)
- `scripts/hubRenderer.js`
- `styles/hub.css`
- `index.html`
- `firebase/functions/src/index.ts`
- `firebase/firestore.rules`

---

## Implementation Order

| # | Task | Dependencies |
|---|------|--------------|
| 1 | Collapsible categories UI | None |
| 2 | Firestore rules for courseConfig | None |
| 3 | Cloud functions | Step 2 |
| 4 | Migration script + seed data | Step 3 |
| 5 | Admin HTML/CSS structure | None |
| 6 | Admin auth gate | Step 3 |
| 7 | Categories panel + drag/drop | Steps 5, 6 |
| 8 | Courses panel + checkbox assignment | Steps 5, 6 |
| 9 | Admins panel | Steps 5, 6 |
| 10 | Save/discard logic | Steps 7, 8, 9 |
| 11 | Hub dynamic loading from Firebase | Step 3 |
| 12 | Deploy + test | All |
