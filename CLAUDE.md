# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- No build step required — plain HTML/CSS/JS for the hub
- Open `index.html` directly in a browser, or use a local server:
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```

## Adding New Courses

**IMPORTANT**: When adding a new course, you must update BOTH files:

### 1. Static fallback data (`scripts/courses.js`)
Add the course object with all required fields:
```javascript
{
  id: 'course_id',
  title: 'Course Title',
  description: 'Course description.',
  icon: '📚',
  url: 'https://course-url.vercel.app/',
  tags: ['X Parts', 'Y Sections'],
  sections: ['category_id'],  // e.g., 'algebra', 'calculus', 'featured'
  totalSections: 50,
  progressPrefix: 'course_id:',
  leaderboardUrl: 'https://course-url.vercel.app/#/leaderboard',
  shortName: 'Short Name',
  progressGradient: 'linear-gradient(90deg, #color1, #color2)',
}
```

### 2. Firebase seed data (`firebase/functions/src/seedCourseConfig.ts`)
Add the same course to the `COURSES` array in the seed file.

### 3. Re-seed Firebase (required for hub to show the course)
After deploying the updated seed function, run:
```bash
curl "https://us-central1-magic-internet-math-96630.cloudfunctions.net/seedCourseConfig?secret=***REMOVED***&force=true"
```

This updates the Firebase database with the new course data.

## Firebase Functions

Deploy functions from the `firebase/` directory:
```bash
cd firebase
npx firebase deploy --only functions
```

Deploy specific function:
```bash
npx firebase deploy --only functions:functionName
```

## PDF Chunker

Split large PDFs into chunks no larger than 300KB for processing:

```bash
python3 /Users/brianhirschfield/Claude/math_academy/chunk_pdf_by_size.py "<input.pdf>" "<output_dir>" 300
```

## Architecture Overview

Magic Internet Math - Interactive educational platform for mathematics courses.

### Hub Structure
```
├── index.html              # Main hub landing page
├── admin.html              # Course management admin GUI
├── styles/
│   ├── main.css            # Shared styles (dark theme, components)
│   ├── hub.css             # Hub-specific styles
│   └── admin.css           # Admin panel styles
├── scripts/
│   ├── courses.js          # Static course data (fallback)
│   ├── hubRenderer.js      # Renders course categories on hub
│   ├── adminRenderer.js    # Admin panel functionality
│   ├── nostrAuth.js        # Nostr authentication
│   └── firebase-config.js  # Firebase configuration
└── firebase/
    └── functions/src/
        ├── courseConfig.ts     # Course CRUD operations
        ├── seedCourseConfig.ts # Initial data seeding
        ├── nostrAuth.ts        # Nostr auth functions
        └── scores.ts           # Leaderboard/XP functions
```

### Data Flow
1. Hub loads course config from Firebase (`getCourseConfig`)
2. Falls back to `scripts/courses.js` if Firebase unavailable
3. Admin panel uses callable functions to modify Firebase data
4. Changes require re-seeding or using admin GUI to appear on hub

### Key Categories
- `featured` - Flagship courses (highlighted)
- `beginners` - Foundation courses
- `calculus`, `algebra`, `geometry` - Math subjects
- `history` - Math history courses
- `seminal` - Foundational mathematical texts
- `austrian` - Economics courses
