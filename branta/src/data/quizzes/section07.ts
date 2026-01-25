import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two environments Branta provides?',
    options: [
      'Development and Testing',
      'Free and Premium',
      'Personal and Business',
      'Staging and Production',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Branta provides Staging (staging.branta.pro) for testing and Production (guardrail.branta.pro) for live applications.',
  },
  {
    id: 2,
    type: 'text',
    question: 'What is the base URL for the Production environment? (e.g., "https://example.com")',
    correctAnswer: 'https://guardrail.branta.pro',
    difficulty: 'medium',
    explanation: 'The Production environment is accessed at https://guardrail.branta.pro/',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens if you try to verify a staging-registered address in production?',
    options: [
      'The verification will fail (404) because environments are isolated',
      'The verification will succeed',
      'You will get a warning but it will work',
      'The request will be redirected to staging',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Staging and Production are completely isolated - no data is shared. Addresses must be registered in each environment separately.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When should you use the Staging environment?',
    options: [
      'For customer-facing applications',
      'For development, testing, and CI/CD pipelines',
      'For high-volume production traffic',
      'Only for emergency situations',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Staging is for development, testing, integration work, and CI/CD pipelines - never for customer-facing applications.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Do Staging and Production environments behave differently?',
    options: [
      'Yes, production is faster',
      'Yes, staging has fewer features',
      'No, they have identical behavior - staging reliably previews production',
      'Yes, staging has stricter rate limits',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Staging and Production have identical behavior. If something works in staging, it will work the same way in production.',
  },
];
