# REGRESSION BASELINES

Last Updated: 2026-01-03

## Overview

This document captures the baseline values and behaviors for critical system components. These baselines are protected by regression tests to ensure changes don't unexpectedly break existing functionality.

## XP Calculation Baselines

### Configuration Constants

| Constant | Value | Location |
|----------|-------|----------|
| SECTION_VISIT | 10 XP | `gamification/types.ts:135` |
| SECTION_COMPLETE | 25 XP | `gamification/types.ts:136` |
| QUIZ_EASY | 15 XP | `gamification/types.ts:137` |
| QUIZ_MEDIUM | 25 XP | `gamification/types.ts:138` |
| QUIZ_HARD | 40 XP | `gamification/types.ts:139` |
| QUIZ_PERFECT_BONUS | 0.5 (50%) | `gamification/types.ts:140` |

### Calculation Formula

```typescript
XP = base * (score / 100)
```

- XP is rounded to nearest integer
- Scales linearly with score percentage
- Scores can exceed 100% (scales proportionally)
- Negative scores produce negative XP (implementation-dependent)

## Mastery Level Baselines

### Levels

| Level | Symbol | Color | Criteria |
|-------|---------|--------|----------|
| none | (empty) | text-dark-600 | No quiz attempts |
| learning | ○ | text-blue-400 | Default or low scores (< 70 avg) |
| familiar | ◑ | text-yellow-400 | Best >= 80 OR (avg >= 70 AND 2+ attempts) |
| mastered | ✓ | text-emerald-400 | Perfect >= 1 OR (avg >= 90 AND 3+ attempts) |

### Note
The implementation returns `mastered` for single perfect score (different from initial test expectations). This is the **actual** behavior.

## Math Rendering Baselines

### KaTeX Configuration
- Version: 0.16.27+
- Uses `katex.renderToString()` for server-side rendering
- Supports inline math `$...$` and display math `$$...$$`

### Key Features
- All output contains `katex` or `katex-display` class
- Output is HTML with CSS classes (not raw LaTeX text)
- Handles error gracefully (doesn't crash on invalid input)

## Quiz Logic Baselines

### Question Types
- **multiple-choice**: 4 options, `correctIndex` (0-3)
- **numeric**: `correctAnswer` (number)
- **text**: `correctAnswer` (string)

### Scoring
```typescript
score = (correctAnswers / totalQuestions) * 100
```

### Randomization
- Selects 5 questions from pool by default
- Preserves all question properties after randomization
- Does not change correct answer indices

## Test Coverage

### Regression Test Results (2026-01-03)
- **Total Tests**: 93
- **Passing**: 93 (100%)
- **Failing**: 0

### Test Files
1. `xp-calculation.baseline.test.ts` (21 tests)
2. `mastery-levels.baseline.test.ts` (22 tests)
3. `math-rendering.baseline.test.ts` (25 tests)
4. `quiz-logic.baseline.test.ts` (25 tests)

### Running Regression Tests
```bash
cd shared
npm run test:regression
```

### Running All Tests
```bash
cd shared
npm run test:all
```

## Updating Baselines

When changing baseline values:

1. **Update the implementation** first
2. **Update this document** with new values
3. **Update test expectations** to match new implementation
4. **Document the reason** for the change in commit message

### Example
```bash
# After changing XP values:
# 1. Edit gamification/types.ts
# 2. Update values in this REGRESSION_BASELINES.md
# 3. Update expected values in regression tests
# 4. Commit: "Update QUIZ_EASY from 15 to 20 XP for better progression"
```

## CI/CD Integration

The regression tests are integrated into GitHub Actions workflow:

- **File**: `.github/workflows/regression.yml`
- **Triggers**: Pull requests, pushes to main, manual dispatch
- **Jobs**:
  - Baseline regression tests
  - Snapshot tests
  - TypeScript type check
  - ESLint check
  - Build verification
  - Firebase functions tests

### Blocking Behavior

Regression tests **block deployments** by default. If tests fail, the workflow fails and prevents merging.

## Maintenance

### Who to Contact
- Test issues: Engineering team
- Baseline changes: Product + Engineering
- CI/CD issues: DevOps + Engineering

### Update Frequency
- Review quarterly (every 3 months)
- Update after major feature releases
- Update after critical bug fixes

## Related Files

- `shared/test/regression/*.test.ts` - Test implementations
- `shared/gamification/xpCalculator.ts` - XP calculations
- `shared/gamification/masteryCalculator.ts` - Mastery calculations
- `shared/gamification/latexParser.ts` - LaTeX rendering
- `shared/gamification/quizTypes.ts` - Quiz type definitions
- `shared/gamification/types.ts` - All gamification types and constants
