# Magic Internet Math

A multi-course educational platform with gamification, leaderboard, and decentralized authentication (Nostr + Firebase).

## Courses

- **aa/** - Abstract Algebra (built)
- **ba/** - Basic Algebra (built)
- **linalg/** - Linear Algebra (source + build)
- **linalg-hub/** - Linear Algebra Hub (built)
- **cryptography/** - Cryptography (vanilla JS)

## Tech Stack

- React 19
- TypeScript 5.9
- Firebase 10.14
- Vite 5.4
- D3.js 7.9
- KaTeX 0.16
- Vitest (testing)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Create a `.env` file in root directory:
```bash
cp .env.example .env
```

Fill in your Firebase credentials:
```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Get these values from:
Firebase Console > Project Settings > Your apps

3. Run development server:

For individual courses:
```bash
cd linalg
npm run dev
```

For Firebase functions:
```bash
cd firebase/functions
npm run dev
```

## Input Validation

The application includes validation for all external inputs:

### Nostr Authentication
- Public keys validated as 64-character hex strings
- Npubs validated with `npub1` format
- Display names validated (1-50 chars, letters/numbers/spaces)
- NIP-05 addresses validated

### Local Storage
- Gamification state validated on load
- XP values sanitized to prevent overflow
- Section progress validated

### Firebase Responses
- API response schemas validated
- Scores and leaderboard data validated

### Error Handling

All errors are:
- Logged with proper severity levels (debug/info/warn/error)
- Timestamped for debugging
- Propagated to ErrorContext for UI display
- User-friendly messages shown in ErrorDisplay component

### Logging

Logging is controlled by environment variables:
- `VITE_LOGGING_ENABLED=false` - Disable all logs in production
- `VITE_LOG_LEVEL=debug|info|warn|error` - Set minimum log level

Logs are written to console in development only.

## Building

```bash
# Build specific course
cd linalg
npm run build

# Run type checking
npm run typecheck

# Run linter
npm run lint
```

## Testing

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Deployment

- Vercel for frontend
- Firebase for backend functions
