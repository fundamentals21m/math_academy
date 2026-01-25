# Quiz Generation Guidelines

This document outlines best practices for creating multiple-choice quiz questions to ensure balanced distributions and prevent test-taking strategies from exploiting patterns.

## 1. Answer Position Distribution

**Goal**: Correct answers should be evenly distributed across positions A, B, C, D (~25% each).

### Current Implementation

The `rebalance-quizzes.cjs` script in each course's `scripts/` folder automatically rebalances answer positions using a deterministic round-robin approach:
- Question 1: correct at position A (index 0)
- Question 2: correct at position B (index 1)
- Question 3: correct at position C (index 2)
- Question 4: correct at position D (index 3)
- Question 5: correct at position A (index 0)
- ... and so on

### When Writing New Quizzes

You don't need to manually balance positions - just run the rebalancing script after creating quizzes:

```bash
cd <course-folder>
node scripts/rebalance-quizzes.cjs --dry-run  # Preview changes
node scripts/rebalance-quizzes.cjs            # Apply changes
npm run build                                  # Rebuild
```

## 2. Answer Length Balance

**Goal**: Avoid correlation between answer length and correctness.

### The Problem

Test-takers often exploit the pattern that correct answers tend to be longer (more complete/specific) while distractors are shorter. In df-course before guidelines:
- Average correct answer: 35.3 characters
- Average incorrect answer: 21.4 characters
- Longest answer was correct: 61.7% of the time

### Guidelines for Writing Answers

1. **Make distractors plausible and detailed**

   Bad (short distractors):
   ```typescript
   options: [
     'The function is continuous at x = 0, differentiable everywhere, and bounded on the interval',  // Correct - very long
     'Not continuous',  // Too short
     'Undefined',       // Too short
     'Zero'            // Too short
   ]
   ```

   Good (balanced lengths):
   ```typescript
   options: [
     'Continuous at x = 0 and differentiable',     // Correct
     'Discontinuous at x = 0 but differentiable',  // Similar length
     'Neither continuous nor differentiable',      // Similar length
     'Continuous everywhere but not bounded'       // Similar length
   ]
   ```

2. **Use parallel structure**

   All options should follow the same grammatical pattern:
   ```typescript
   options: [
     'The kernel is a normal subgroup',
     'The image is a normal subgroup',
     'The kernel equals the image',
     'The kernel is always trivial'
   ]
   ```

3. **Avoid "all of the above" or "none of the above"**

   These options are often either obviously correct or obviously wrong.

4. **Keep mathematical expressions similar in complexity**

   Bad:
   ```typescript
   options: [
     '$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$',  // Correct - complex
     '$0$',
     '$1$',
     '$\\infty$'
   ]
   ```

   Good:
   ```typescript
   options: [
     '$\\frac{\\sqrt{\\pi}}{2}$',
     '$\\frac{1}{2}$',
     '$\\sqrt{\\pi}$',
     '$\\frac{\\pi}{2}$'
   ]
   ```

5. **Target similar character counts**

   Aim for all options to be within 20% of each other in length when possible.

## 3. Content Guidelines

### Distractor Quality

Good distractors should:
- Be plausible (represent common misconceptions)
- Be clearly wrong to someone who knows the material
- Not be tricky or misleading through wordplay
- Cover different types of errors (computational, conceptual, procedural)

### Question Clarity

- State questions positively when possible
- Avoid double negatives
- Be specific about what is being asked
- Include all necessary context in the question stem

### Difficulty Balance

Within each section, aim for:
- ~30% easy questions
- ~50% medium questions
- ~20% hard questions

## 4. Quiz File Structure

Each section quiz file (`section##.ts`) should follow this pattern:

```typescript
import type { QuizQuestion } from './types';

export const section##Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Your question with LaTeX: $x^2 + y^2 = z^2$',
    options: [
      'Option A text',
      'Option B text',
      'Option C text',
      'Option D text'
    ],
    correctIndex: 0,  // Will be rebalanced by script
    difficulty: 'easy' | 'medium' | 'hard',
    explanation: 'Explanation shown after answering.',
  },
  // More questions...
];
```

## 5. Validation

After creating or modifying quizzes:

1. **Run the rebalancing script**
   ```bash
   node scripts/rebalance-quizzes.cjs
   ```

2. **Build and verify**
   ```bash
   npm run build
   ```

3. **Analyze distribution** (optional)
   ```bash
   # Create analyze script if needed
   node /tmp/analyze_quiz.js src/data/quizzes
   ```

## 6. Common Patterns to Avoid

| Pattern | Problem | Solution |
|---------|---------|----------|
| Longest answer is correct | Test-takers guess longest | Balance answer lengths |
| "Always B" | Uneven position distribution | Run rebalancing script |
| Absolute words in wrong answers | "always", "never" signal wrong | Use specific conditions |
| Grammatical cues | Articles/plurals reveal answer | Check grammar consistency |
| "All of the above" is correct | Too often the right answer | Avoid these options entirely |

## 7. Review Checklist

Before committing new quizzes:

- [ ] Questions are clear and unambiguous
- [ ] All options are grammatically consistent with the question stem
- [ ] Option lengths are reasonably balanced
- [ ] Correct answers are distributed across positions (run script)
- [ ] Distractors represent plausible mistakes
- [ ] LaTeX renders correctly
- [ ] Build succeeds
