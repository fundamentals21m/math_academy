# ADR-002: Gamification System Architecture

## Status
Accepted

## Context
Magic Internet Math courses include XP tracking, mastery levels, streaks, and achievements. These features needed a consistent, testable architecture shared across all courses.

## Decision
Implement a Redux-like state machine pattern in `shared/gamification/` with:

1. **Centralized State**: Single source of truth in `GamificationContext`
2. **Action/Reducer Pattern**: Predictable state updates via typed actions
3. **Persistence**: Automatic localStorage sync with validation
4. **Computed Values**: Mastery levels and streaks computed from base data
5. **Achievement System**: Declarative achievement definitions with unlock logic

## Consequences

### Positive
- 100% test coverage for critical paths
- Serializable state for localStorage
- Computed values prevent drift
- Achievement unlock is declarative and auditable
- Regression tests prevent breaking changes

### Negative
- Learning curve for Redux pattern
- Context re-renders may impact performance (mitigated by selectors)

## Implementation Details

### State Structure
```typescript
interface GamificationState {
  user: UserState;
  sections: Record<SectionId, SectionState>;
  dailyGoals: DailyGoals;
  achievements: AchievementState;
  streak: StreakState;
}

interface SectionState {
  visited: boolean;
  quizScores: number[];
  masteryPoints: number;
  completedAt?: number;
}
```

### XP Calculation
```typescript
const XP_CONFIG = {
  QUIZ_EASY: 15,
  QUIZ_MEDIUM: 25,
  QUIZ_HARD: 40,
  COMPLETION_BONUS: 50,
};
```

### Mastery Levels
```typescript
const MASTERY_THRESHOLDS = {
  LEARNING: { min: 0, max: 30, label: 'Learning' },
  FAMILIAR: { min: 31, max: 70, label: 'Familiar' },
  MASTERED: { min: 71, max: Infinity, label: 'Mastered' },
};
```

## References
- [Redux Pattern](https://redux.js.org)
- [AGENTS.md gamification section](/Users/brianhirschfield/Claude/math_academy/AGENTS.md#gamification)
