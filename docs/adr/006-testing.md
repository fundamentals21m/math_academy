# ADR-006: Testing Strategy

## Status
Accepted

## Context
Magic Internet Math needs comprehensive testing to:
- Prevent regressions in critical paths (XP, mastery, quizzes)
- Ensure accessibility compliance
- Enable confident refactoring

## Decision
Implement a layered testing strategy:

1. **Unit Tests**: Pure functions and utilities (Vitest)
2. **Component Tests**: React component rendering (React Testing Library)
3. **Regression Tests**: Critical path protection (baseline tests)
4. **Integration Tests**: Multi-component interactions

## Consequences

### Positive
- 438+ tests passing with 100% critical path coverage
- Fast feedback loop (3.4s for full suite)
- Regression tests block deployments
- Clear test patterns for contributors

### Negative
- Initial test writing overhead
- Mock maintenance burden
- Flaky tests possible without discipline

## Implementation Details

### Test Structure
```
shared/
├── components/
│   ├── ui/
│   │   └── ui.test.tsx      # Component integration tests
│   └── ErrorBoundary.test.tsx
├── gamification/
│   ├── xpCalculator.test.ts
│   ├── masteryCalculator.test.ts
│   └── reducer.test.ts
├── test/
│   ├── regression/
│   │   ├── xp-calculation.baseline.test.ts
│   │   ├── mastery-levels.baseline.test.ts
│   │   ├── math-rendering.baseline.test.ts
│   │   └── quiz-logic.baseline.test.ts
│   └── snapshots/
```

### Running Tests
```bash
npm run test:run        # Single run
npm run test:regression # Critical path only
npm run test:coverage   # Coverage report (Node 20+)
```

### Regression Test Pattern
```typescript
describe('XP Calculation Regression', () => {
  it('Easy quiz at 100% yields 15 XP', () => {
    expect(calculateXP('easy', 100)).toBe(15);
  });

  it('Medium quiz at 70% yields 18 XP', () => {
    expect(calculateXP('medium', 70)).toBe(XP_CONFIG.QUIZ_MEDIUM * 0.7);
  });
});
```

### Environment Configuration
```typescript
/**
 * @vitest-environment happy-dom  # React component tests
 * @vitest-environment node        # Pure function tests
 */
```

## CI Integration
- Tests run on every PR
- Regression test failures block merge
- Bundle size checks in CI
- Chromatic visual regression

## References
- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com/docs/react-testing-library)
- [AGENTS.md Testing Section](/Users/brianhirschfield/Claude/math_academy/AGENTS.md#testing)
