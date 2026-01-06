# Magic Internet Math

A multi-course educational platform with gamification, leaderboard, and decentralized authentication (Nostr + Firebase).

## Courses

### Mathematics

| Directory | Course Name | ID | Description |
|-----------|-------------|-----|-------------|
| `linalg/` | Introduction to Linear Algebra | `linalg` | Based on Gilbert Strang's textbook |
| `advanced-linalg/` | Advanced Linear Algebra | `advlinalg` | Based on Hoffman & Kunze |
| `real-analysis/` | Introduction to Real Analysis | `ra` | Limits, continuity, differentiation, integration |
| `calc1-course/` | Calculus | `calc1` | Based on Tom M. Apostol's Calculus Vol. 1 |
| `calc_easy/` | Calculus Made Easy | `calc_easy` | Accessible introduction to calculus |
| `calc_lib_art/` | Calculus as a Liberal Art | `calc_lib_art` | Calculus through a liberal arts lens |
| `crypto-react/` | Cryptography Mathematics | `crypto` | Modular arithmetic to elliptic curves |
| `koblitz-course/` | Number Theory and Cryptography | `koblitz` | Graduate-level, based on Koblitz |
| `coding-theory-course/` | Algebraic Coding Theory | `coding` | Error-correcting codes (Vermani) |
| `islr/` | Introduction to Statistical Learning | `islr` | Based on James et al. (2nd Edition) |
| `west-graphs/` | Introduction to Graph Theory | `west_graphs` | Based on Douglas B. West |
| `why-math/` | Why Math? | `wm` | Based on R.D. Driver's classic |
| `numbers-geometry-course/` | Numbers and Geometry | `numbers-geometry` | Connections between numbers and geometry |

### Geometry & History

| Directory | Course Name | ID | Description |
|-----------|-------------|-----|-------------|
| `euclid/` | Euclid's Elements | `euclid` | All 13 books with interactive propositions |
| `gauss/` | Disquisitiones Arithmeticae | `gauss` | Gauss's 1801 number theory treatise |
| `four-pillars/` | Advanced Geometry | `four_pillars` | Based on Stillwell's Four Pillars |
| `thales/` | The Heritage of Thales | `thales` | 2,500 years of mathematical history |
| `men-of-math-course/` | Men of Mathematics | `mom` | E.T. Bell's mathematical biographies |

### Economics & Philosophy

| Directory | Course Name | ID | Description |
|-----------|-------------|-----|-------------|
| `human-action/` | Human Action | `human_action` | Ludwig von Mises' economic treatise |
| `man-econ-state/` | Man, Economy, and State | `man_econ_state` | Murray Rothbard's economics |
| `road-to-serfdom/` | The Road to Serfdom | `road_to_serfdom` | F.A. Hayek on freedom and planning |
| `atlas-shrugged/` | Atlas Shrugged | `atlas_shrugged` | Ayn Rand's novel |

### Bitcoin & Special Topics

| Directory | Course Name | ID | Description |
|-----------|-------------|-----|-------------|
| `only-the-strong-survive/` | Only The Strong Survive | `only-the-strong-survive` | Critique of altcoins |
| `orange-is-new-green/` | Orange is the New Green | `orange_btc` | Bitcoin money market funds |
| `mod-race/` | Modular Arithmetic Racing | `mod-race` | Competitive math game |

### Built/Deployed Courses

| Directory | Source | Status |
|-----------|--------|--------|
| `aa/` | Abstract Algebra | Deployed |
| `ba/` | Basic Algebra | Deployed |
| `cryptography/` | Cryptography | Vanilla JS (legacy) |

### Templates & Tools

| Directory | Purpose |
|-----------|---------|
| `course-template/` | Template for creating new courses |
| `shared/` | Shared library for all courses |
| `firebase/` | Firebase functions backend |

## Tech Stack

- React 19
- TypeScript 5.9
- Firebase 10.14
- Vite 5.4
- KaTeX 0.16
- Tailwind CSS 3.4
- Framer Motion
- Vitest + React Testing Library
- Zod (validation)
- nostr-tools (authentication)

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

## Security Features

### Input Validation
- **Nostr Keys**: Bech32 format validation for npub keys
- **Display Names**: Length and character restrictions (1-50 chars)
- **URLs**: HTTP/HTTPS protocols only (prevents javascript: attacks)
- **Gamification Data**: Zod schema validation with proper error handling
- **Local Storage**: Type-safe parsing with corruption recovery

### XSS Protection
- **LaTeX Rendering**: DOMPurify sanitization for mathematical content
- **HTML Escaping**: Automatic escaping of text segments
- **KaTeX Integration**: Safe mathematical expression rendering

### Error Handling
- **Global Error Context**: Centralized error management across courses
- **Error Boundaries**: React error boundary components prevent crashes
- **Structured Logging**: Consistent logging with proper severity levels
- **User-Friendly Messages**: Clear error messages for end users

### Authentication Security
- **Challenge-Response**: Prevents replay attacks in Nostr authentication
- **Token Expiration**: Short-lived challenges (5-minute expiry)
- **Admin Authorization**: Role-based access control with database checks
- **Action Logging**: All admin actions are logged for accountability

## Deployment

- Vercel for frontend
- Firebase for backend functions
