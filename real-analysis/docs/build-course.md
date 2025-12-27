# `/build-course` Skill Specification

Transform PDF chunks into a complete standalone course integrated with the Math Academy Hub.

## Overview

This skill takes PDF content that has been chunked via `/chunk-pdf` and generates a fully functional course with:
- Summarized/reconstructed educational content
- Expandable theorem cards with full proofs
- Quizzes with difficulty selection (20 unique questions per level)
- Gamification integration
- Hub registration

---

## Input Requirements

| Input | Description |
|-------|-------------|
| `chunks/` directory | Output from `/chunk-pdf` (PDFs ≤300KB each) |
| Course ID | Short identifier (e.g., `topology`) |
| Course name | Full name (e.g., `Introduction to Topology`) |
| Description | Brief course description |
| Icon | Emoji for visual identification |
| Accent color | `indigo` / `emerald` / `amber` / `rose` / `cyan` |

---

## Output Structure

```
{course-id}/
├── docs/
│   └── build-course.md           # Copy of this specification
├── src/
│   ├── config/course.ts
│   ├── data/
│   │   ├── curriculum.ts
│   │   ├── theorems.ts
│   │   └── quizzes/
│   │       ├── types.ts
│   │       ├── section01.ts      # { easy: [...], medium: [...], hard: [...] }
│   │       ├── chapter01.ts      # Hard questions only
│   │       └── index.ts
│   ├── pages/sections/
│   │   ├── Section01.tsx
│   │   └── ...
│   ├── components/quiz/
│   │   ├── SectionQuiz.tsx       # With difficulty selector
│   │   └── index.ts
│   └── App.tsx
├── vite.config.ts
├── package.json
└── index.html
```

---

## Phases

### Phase 1: Initialize Course

1. Copy `course-template/` → `{course-id}/`
2. Prompt for: ID, name, description, icon, accent color
3. Update configuration files:
   - `src/config/course.ts`
   - `vite.config.ts`
   - `package.json`
   - `index.html`
4. Create `docs/` directory with copy of this specification

### Phase 2: Extract Curriculum Structure

1. Read PDF chunks, **detect page numbers** to ensure correct ordering
2. Detect chapter/section headings
3. Generate `curriculum.ts` with Parts → Sections hierarchy
4. **⏸️ Pause for user review before proceeding**

### Phase 3: Extract Section Content

For each section:

1. **Automatically stitch** content spanning multiple chunks
2. **Summarize and reconstruct** content (not verbatim copy)
3. Tag content blocks:
   - `<Definition>` - mathematical definitions
   - `<Theorem proof={...}>` - theorems with expandable proofs (include ALL proofs, use expandable cards for long ones)
   - `<Example>` - worked examples
   - `<Axiom>` - axioms
4. Convert math to LaTeX:
   - Inline: `<Math>{...}</Math>`
   - Display: `<MathBlock>{...}</MathBlock>`
5. Add visualization placeholders where appropriate:
   ```tsx
   {/* TODO: Add [description] visualization */}
   ```
6. Generate `Section{N}.tsx` file
7. Add entries to `theorems.ts`

**Theorem ID Convention**:
- Named theorems → use name as ID (e.g., `thm-rank-nullity`, `def-vector-space`)
- Unnamed theorems → sequential ID (e.g., `thm-001`, `def-002`)

**Error Handling**:
- If a chunk is poorly formatted or hard to parse:
  - Pause and ask for manual intervention
  - Generate placeholder content marked for review:
    ```tsx
    {/* NEEDS REVIEW: [reason] */}
    <p>Content pending review...</p>
    ```

### Phase 4: Generate Quizzes

#### Section Quizzes (per section)

| Difficulty | Questions | Types | Scope |
|------------|-----------|-------|-------|
| Easy | 20 unique | Mix of multiple-choice + numeric | Section-specific only |
| Medium | 20 unique | Mix of multiple-choice + numeric | Section-specific only |
| Hard | 20 unique | Mix of multiple-choice + numeric | Section-specific only |

**Data structure**:
```typescript
// quizzes/section01.ts
import type { QuizQuestion } from './types';

export const section01Quiz = {
  easy: [
    {
      id: 's01-e01',
      type: 'multiple-choice',
      question: 'What is $2 + 2$?',
      options: ['3', '4', '5', '6'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Basic addition: $2 + 2 = 4$.',
    },
    {
      id: 's01-e02',
      type: 'numeric',
      question: 'Calculate $3 \\times 4$.',
      correctAnswer: 12,
      difficulty: 'easy',
      explanation: '$3 \\times 4 = 12$.',
    },
    // ... 18 more unique easy questions
  ] as QuizQuestion[],
  
  medium: [...] as QuizQuestion[],  // 20 unique
  hard: [...] as QuizQuestion[],    // 20 unique
};
```

#### Chapter Quizzes (per chapter)

| Difficulty | Questions | Types |
|------------|-----------|-------|
| Hard only | 20 unique | Mix of multiple-choice + numeric |

**Data structure**:
```typescript
// quizzes/chapter01.ts
import type { QuizQuestion } from './types';

export const chapter01Quiz: QuizQuestion[] = [
  // 20 unique hard questions covering all sections in the chapter
];
```

All questions must include explanations with LaTeX support.

### Phase 5: Update Quiz Component

#### SectionQuiz.tsx Modifications

1. Add difficulty selector UI (Easy / Medium / Hard buttons)
2. Filter questions by selected difficulty
3. Randomly select 5 from pool of 20 per attempt
4. Re-randomize on retry/new attempt

#### Chapter Quiz Behavior

1. Hard difficulty only (no selector shown)
2. Randomly select 5 from pool of 20

### Phase 6: Wire Up Routes

1. Update `App.tsx`:
   - Import all section components
   - Add routes for each section
2. Update `quizzes/index.ts`:
   - Export all section and chapter quizzes

### Phase 7: Register in Hub

1. Update `shared/leaderboard/types.ts`:
   - Add new CourseId to union type
2. Update `shared/leaderboard/syncManager.ts`:
   - Add course to `extractScoresFromStorage()`
   - Add course to `getLocalScores()` return
3. Update root `index.html`:
   - Add course card to grid
   - Add progress bar section

---

## Quiz Component Behavior

### Section Quiz Flow

```
┌─────────────────────────────────┐
│  Select Difficulty:             │
│  [Easy] [Medium] [Hard]         │
└───────────────┬─────────────────┘
                │ User selects
                ▼
┌─────────────────────────────────┐
│  5 random questions from pool   │
│  (shuffled from 20)             │
└───────────────┬─────────────────┘
                │ Complete
                ▼
┌─────────────────────────────────┐
│  Results + [Try Again]          │
│  (new random 5 on retry)        │
└─────────────────────────────────┘
```

### Chapter Quiz Flow

```
┌─────────────────────────────────┐
│  Hard difficulty (no selector)  │
│  5 random from 20               │
└───────────────┬─────────────────┘
                │ Complete
                ▼
┌─────────────────────────────────┐
│  Results + [Try Again]          │
└─────────────────────────────────┘
```

---

## Content Guidelines

### Summarization Approach

- Reconstruct content in clear, educational prose
- Preserve mathematical rigor and accuracy
- Do NOT verbatim copy from PDF
- Focus on pedagogical clarity

### Math Formatting

```tsx
// Inline math
<Math>{`x^2 + y^2 = z^2`}</Math>

// Display/block math
<MathBlock>{`\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}`}</MathBlock>
```

### Content Block Examples

```tsx
<Definition title="Linear Combination">
  <p>
    A <strong>linear combination</strong> of vectors <Math>{`\\mathbf{v}`}</Math> and 
    <Math>{`\\mathbf{w}`}</Math> is any expression of the form:
  </p>
  <MathBlock>{`c\\mathbf{v} + d\\mathbf{w}`}</MathBlock>
</Definition>

<Theorem
  title="Rank-Nullity Theorem"
  proof={
    <>
      <p>Let <Math>A</Math> be an <Math>m \\times n</Math> matrix...</p>
      <MathBlock>{`\\dim(\\text{Col } A) + \\dim(\\text{Null } A) = n`}</MathBlock>
    </>
  }
>
  <p>For any <Math>m \\times n</Math> matrix <Math>A</Math>:</p>
  <MathBlock>{`\\text{rank}(A) + \\text{nullity}(A) = n`}</MathBlock>
</Theorem>

<Example title="Finding a Linear Combination">
  <p>Express <Math>(5, 7)</Math> as a linear combination of...</p>
  <MathBlock>{`c(1, 2) + d(3, 1) = (5, 7)`}</MathBlock>
</Example>
```

### Visualization Placeholders

```tsx
{/* TODO: Add vector addition parallelogram visualization */}
{/* TODO: Add matrix multiplication step-by-step animation */}
{/* TODO: Add eigenvalue/eigenvector interactive demo */}
```

### Error/Review Placeholders

```tsx
{/* NEEDS REVIEW: Unable to parse content from chunk_015.pdf pages 3-5 */}
<p>Content pending review...</p>
```

---

## File Updates Summary

| File | Action |
|------|--------|
| `{course}/src/config/course.ts` | Create with course metadata |
| `{course}/src/data/curriculum.ts` | Generate from PDF structure |
| `{course}/src/data/theorems.ts` | Populate with all theorems/definitions |
| `{course}/src/data/quizzes/*.ts` | Generate all quiz files |
| `{course}/src/pages/sections/*.tsx` | Generate all section content |
| `{course}/src/components/quiz/SectionQuiz.tsx` | Update with difficulty selector |
| `{course}/src/App.tsx` | Wire all routes |
| `{course}/vite.config.ts` | Set base path |
| `{course}/package.json` | Set package name |
| `{course}/index.html` | Set title/meta |
| `{course}/docs/build-course.md` | Copy of this specification |
| `shared/leaderboard/types.ts` | Add CourseId |
| `shared/leaderboard/syncManager.ts` | Add course to sync |
| `index.html` (root) | Add course card |

---

## Workflow Diagram

```
┌─────────────────────────────────┐
│  PDF chunks (from /chunk-pdf)   │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 1: Initialize Course     │
│  - Copy template                │
│  - Configure metadata           │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 2: Extract Curriculum    │
│  - Detect structure from PDFs   │
│  - Generate curriculum.ts       │
│  ⏸️  PAUSE: User review          │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 3: Extract Content       │
│  - Summarize/reconstruct        │
│  - Tag: Definition/Theorem/etc  │
│  - Add visualization TODOs      │
│  - Generate Section*.tsx        │
│  ⏸️  PAUSE on parsing errors     │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 4: Generate Quizzes      │
│  - 60 questions/section         │
│  - 20 questions/chapter (hard)  │
│  - All unique, mix MC + numeric │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 5: Update Quiz Component │
│  - Add difficulty selector      │
│  - Random 5 from 20 pool        │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 6: Wire Up Routes        │
│  - Update App.tsx               │
│  - Update quiz exports          │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│  Phase 7: Register in Hub       │
│  - Update shared/leaderboard    │
│  - Add to root index.html       │
└─────────────────────────────────┘
```

---

## Usage

```
/build-course <chunks-directory> [options]
```

The skill will prompt for required metadata if not provided via options.
