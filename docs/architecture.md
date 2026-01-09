# Magic Internet Math - Architecture Documentation

## Overview

Magic Internet Math is a monorepo-based educational platform built with React 19, TypeScript, and Firebase. The platform comprises 26 courses across mathematics, economics, and philosophy, with shared gamification, authentication, and leaderboard features.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend Layer                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   React 19 Application                       ││
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐   ││
│  │  │  Courses    │ │  Shared     │ │  Components         │   ││
│  │  │  (26)       │ │  Library    │ │                     │   ││
│  │  └─────────────┘ └─────────────┘ └─────────────────────┘   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Backend Services                            │
│  ┌─────────────────────┐  ┌─────────────────────────────────┐  ││
│  │  Firebase Functions │  │  Nostr Relay Network            │  ││
│  │  - Auth (NIP-07)    │  │  - Profile fetching             │  ││
│  │  - Leaderboard      │  │  - Event signing                │  ││
│  │  - Progress sync    │  │  - Challenge-response          │  ││
│  └─────────────────────┘  └─────────────────────────────────┘  ││
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Data Layer                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ││
│  │  Firestore      │  │  Local Storage  │  │  Firebase Auth  │  ││
│  │  - Users        │  │  - Progress     │  │  - Custom tokens│  ││
│  │  - Scores       │  │  - Auth state   │  │  - Admin claims │  ││
│  │  - Challenges   │  │  - Settings     │  │                 │  ││
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  ││
└─────────────────────────────────────────────────────────────────┘
```

## Monorepo Structure

```
math_academy/
├── shared/                 # Shared library (copied to each course)
│   ├── components/         # React components
│   ├── contexts/           # React contexts
│   ├── gamification/       # XP, mastery, achievements
│   ├── leaderboard/        # Score sync and display
│   ├── nostr/              # NIP-07 authentication
│   ├── validation/         # Zod schemas
│   └── firebase/           # Firebase configuration
├── courses/                # 26 course directories
│   ├── linalg/            # Linear Algebra
│   ├── crypto-react/      # Cryptography
│   └── ...
├── firebase/
│   ├── functions/         # Cloud Functions
│   └── firestore.rules    # Security rules
├── scripts/               # Deployment scripts
└── docs/                  # Documentation
```

## Authentication Flow

### Nostr NIP-07 + Firebase Custom Token

```
1. User clicks "Connect Nostr"
   │
   ▼
2. Browser extension (window.nostr) provides pubkey
   │
   ▼
3. Cloud Function: createChallenge()
   - Generates 32-byte challenge
   - Stores in Firestore with 60-second expiry
   - Returns challenge to client
   │
   ▼
4. Client signs auth event (kind 22242) with challenge
   │
   ▼
5. Cloud Function: verifyNostrAndCreateToken()
   - Validates challenge (not expired, not used)
   - Verifies Schnorr signature
   - Checks if user is banned
   - Creates Firebase custom token
   |
   ▼
6. Client signs in to Firebase with custom token
```

## Gamification System

### State Management

```
GamificationState
├── user: UserState
│   ├── totalXP: number
│   ├── level: number (1-10)
│   ├── sectionsCompleted: string[]
│   ├── perfectQuizzes: number
│   └── quizzesTaken: number
├── sections: Record<SectionId, SectionProgress>
│   ├── visitedAt: string | null
│   ├── completedAt: string | null
│   ├── quizAttempts: QuizAttempt[]
│   ├── masteryLevel: 'learning' | 'familiar' | 'mastered'
│   └── visualizationsInteracted: string[]
├── dailyGoals: DailyGoals
│   ├── currentStreak: number
│   ├── xpEarned: number
│   └── xpGoal: number
└── lastUpdated: number
```

### XP Calculation

| Action | XP Value |
|--------|----------|
| Section Visit | 10 |
| Easy Quiz (100%) | 15 |
| Medium Quiz (100%) | 25 |
| Hard Quiz (100%) | 40 |
| Perfect Quiz Bonus | +50% |
| Section Completion | 25 |

### Mastery Levels

| Level | Criteria |
|-------|----------|
| Mastered | 2+ perfect scores OR avg ≥90% with 3+ attempts |
| Familiar | Best score ≥80% OR avg ≥70% with 2+ attempts |
| Learning | Default state |

## Data Flow

### Local to Server Sync

```
User Action (quiz, visit, etc.)
        │
        ▼
Local State Update (reducer)
        │
        ▼
localStorage Backup
        │
        ▼
SyncManager.requestSync()
        │
        ▼
Cloud Function: syncProgress()
        │
        ▼
Firestore Update
        │
        ▼
Leaderboard Update (if applicable)
```

### Offline-First Strategy

1. All user interactions update local state immediately
2. localStorage provides persistence across sessions
3. Periodic sync attempts server reconciliation
4. Conflict resolution uses "last write wins" with validation

## Security Model

### Firebase Security Rules

- **Users**: Authenticated read, owner-only write (except isAdmin/banned)
- **Scores**: Public read, function-only write
- **Challenges**: Authenticated read, function-only write
- **Admin/Project collections**: Admin-only access

### Rate Limiting

- Challenge creation: 10 per pubkey per hour
- Prevents authentication abuse

### Input Validation

All user input validated with Zod schemas:
- Pubkey hex: 64-character hex string
- NPUB: bech32 format validation
- Display name: alphanumeric + limited special chars
- Quiz scores: 0-100 range

## Performance Optimizations

### Bundle Splitting

```
vendor-react:      ~34 KB  (React, React-DOM, Router)
vendor-math:       ~259 KB (KaTeX)
vendor-animation:  ~115 KB (Framer Motion)
vendor-firebase:   ~500 KB (lazy-loaded on demand)
```

### Lazy Loading

All course sections (50+ per course) loaded via `React.lazy()`:
```typescript
const Section01 = lazy(() => import('@/pages/sections/Section01'));
```

### WebSocket Management

- 5-second timeout per relay
- Automatic cleanup on component unmount
- Parallel fetching from multiple relays
- Graceful fallback on relay failure

## Deployment Architecture

### GitHub Pages Hub

Each course deploys to subdirectory:
```
math_academy.xyz/linalg/
math_academy.xyz/crypto/
math_academy.xyz/calc1/
```

### Base Path Configuration

```typescript
// vite.config.ts
export default defineConfig({
  base: '/math_academy/{course-id}/',
  // ...
});
```

### Deployment Script

The `deploy-to-hub.sh` script:
1. Validates vite.config.ts base path
2. Builds production bundle
3. Copies to hub repository
4. Verifies asset paths

## Error Handling

### Error Boundary Strategy

```
┌─────────────────────────────────────┐
│  Top-Level ErrorBoundary            │
│  (Catches app-wide errors)          │
│       │                             │
│       ▼                             │
│  ┌─────────────────────────────────┐│
│  │  Page-Level ErrorBoundary       ││
│  │  (Catches section errors)       ││
│  │       │                         ││
│       ▼                             │
│  ┌─────────────────────────────────┐│
│  │  Component ErrorBoundary        ││
│  │  (Catches component errors)     ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Error Context

All errors captured with:
- Timestamp
- User agent
- Page URL
- Recovery options

## Testing Strategy

### Regression Tests (93 tests)

| Category | Tests | Purpose |
|----------|-------|---------|
| XP Calculations | 21 | Verify XP formulas |
| Mastery Levels | 22 | Verify mastery logic |
| Quiz Logic | 25 | Verify scoring |
| Math Rendering | 25 | Verify KaTeX output |

### Test Coverage Threshold

85% coverage required for all metrics:
- Lines: 85%
- Functions: 85%
- Branches: 80%
- Statements: 85%

## Future Architecture Considerations

### Potential Improvements

1. **Micro-frontends**: Consider module federation for large courses
2. **Design System**: Create shared UI component library
3. **API Layer**: Add GraphQL for complex queries
4. **CDN Integration**: Serve assets from CDN for global users
5. **Analytics**: Add user behavior tracking
6. **A/B Testing**: Framework for content experiments

### Scalability Considerations

- Current: Single Firebase project
- Future: Multi-region Firebase for global users
- Future: Redis cache for leaderboard queries
