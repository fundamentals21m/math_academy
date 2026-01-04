import type { Meta, StoryObj } from '@storybook/react';
import SectionQuiz from '@components/quiz/SectionQuiz';

const meta: Meta = {
  title: 'Components/Quiz',
  component: SectionQuiz,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SectionQuiz>;

export const EasyQuiz: Story = {
  args: {
    sectionId: 'linalg:1',
    sectionTitle: 'Vectors and Spaces',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What is $\\mathbf{0}$?',
        difficulty: 'easy',
        explanation: 'The zero vector has no direction or magnitude.',
        options: ['A scalar', 'A vector', 'A matrix', 'None of the above'],
        correctIndex: 1,
      },
    ],
  },
};

export const MediumQuiz: Story = {
  args: {
    sectionId: 'linalg:2',
    sectionTitle: 'Linear Transformations',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What does a linear transformation preserve?',
        difficulty: 'medium',
        explanation: 'Linear transformations preserve lines through the origin.',
        options: ['Curvature', 'Parallelism', 'Both A and B', 'Neither A nor B'],
        correctIndex: 2,
      },
    ],
  },
};

export const HardQuiz: Story = {
  args: {
    sectionId: 'linalg:3',
    sectionTitle: 'Eigenvalues and Eigenvectors',
    questions: [
      {
        id: 'q1',
        type: 'numeric',
        question: 'If $A$ is a $2 \\times 2$ matrix with eigenvalues $\\lambda_1=3$ and $\\lambda_2=5$, what is $\\det(A)$?',
        difficulty: 'hard',
        explanation: 'The determinant is the product of eigenvalues.',
        correctAnswer: 15,
      },
    ],
  },
};

export const CompletedQuiz: Story = {
  args: {
    sectionId: 'linalg:1',
    sectionTitle: 'Test Section',
    questions: [],
  },
};