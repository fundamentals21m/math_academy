import type { Meta, StoryObj } from '@storybook/react';

import { Definition, Theorem, Example, Callout } from '@components/common/ContentBlocks';
import SectionQuiz from '@components/quiz/SectionQuiz';
import AuthModal from '@components/auth/AuthModal';
import Leaderboard from '@components/leaderboard/Leaderboard';

// =============================================================================
// CONTENT BLOCKS STORIES
// =============================================================================

const meta: Meta = {
  title: 'Components/ContentBlocks',
  component: Definition,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Definition>;

export const SimpleDefinition: Story = {
  args: {
    title: 'Vector Space',
    children: <p>A vector space V over a field F is a set...</p>,
  },
};

export const DefinitionWithMath: Story = {
  args: {
    title: 'Linear Independence',
    children: <p>Vectors are linearly independent if $c_1\\mathbf{v}_1 + \\dots + c_n\\mathbf{v}_n = \\mathbf{0}$</p>,
  },
};

export const ComplexDefinition: Story = {
  args: {
    title: 'Eigenvalue',
    children: (
      <div>
        <p>An eigenvalue λ of a square matrix A satisfies:</p>
        <p>$\\det(A - \\lambda I) = 0$</p>
      </div>
    ),
  },
};

// =============================================================================
// THEOREM STORIES
// =============================================================================

const theoremMeta: Meta = {
  title: 'Components/ContentBlocks',
  component: Theorem,
  tags: ['autodocs'],
};

export const SimpleTheorem: StoryObj<typeof Theorem> = {
  ...theoremMeta,
  args: {
    title: 'Fundamental Theorem of Algebra',
    children: <p>Every non-zero polynomial has a root in the complex numbers.</p>,
    proof: <>This is a standard proof...</>,
  },
};

export const TheoremWithMath: StoryObj<typeof Theorem> = {
  ...theoremMeta,
  args: {
    title: 'Rank-Nullity Theorem',
    children: (
      <>
        <p>
          For any linear transformation T: $V \\rightarrow W$, we have:
        </p>
        <p>$\\text{rank}(T) + \\text{nullity}(T) = \\text{dim}(V)$</p>
      </>
    ),
    proof: <>Proof: ...</>,
  },
};

// =============================================================================
// EXAMPLE STORIES
// =============================================================================

const exampleMeta: Meta = {
  title: 'Components/ContentBlocks',
  component: Example,
  tags: ['autodocs'],
};

export const SimpleExample: StoryObj<typeof Example> = {
  ...exampleMeta,
  args: {
    title: 'Finding Determinant',
    children: (
      <div>
        <p>Find the determinant of:</p>
        <p>$$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$</p>
        <p><strong>Solution:</strong> $1 \\times 4 - 2 \\times 3 = 4 - 6 = -2$</p>
      </div>
    ),
  },
};

// =============================================================================
// CALLOUT STORIES
// =============================================================================

const calloutMeta: Meta = {
  title: 'Components/ContentBlocks',
  component: Callout,
  tags: ['autodocs'],
};

export const InfoCallout: StoryObj<typeof Callout> = {
  ...calloutMeta,
  args: {
    type: 'info',
    children: <p>This is important information about the current topic.</p>,
  },
};

export const WarningCallout: StoryObj<typeof Callout> = {
  ...calloutMeta,
  args: {
    type: 'warning',
    children: <p>Be careful when applying this theorem to non-square matrices.</p>,
  },
};

export const ErrorCallout: StoryObj<typeof Callout> = {
  ...calloutMeta,
  args: {
    type: 'error',
    children: <p>This operation requires the matrix to be invertible.</p>,
  },
};

export const SuccessCallout: StoryObj<typeof Callout> = {
  ...calloutMeta,
  args: {
    type: 'success',
    children: <p>Great job! You've successfully solved the eigenvalue problem.</p>,
  },
};