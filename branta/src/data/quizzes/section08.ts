import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How should API keys be passed in Branta API requests?',
    options: [
      'In the Authorization header as a Bearer token',
      'As a query parameter in the URL',
      'In the request body',
      'As a cookie',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'API keys should be passed in the Authorization header using the Bearer token scheme: "Authorization: Bearer {your_api_key}"',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What HTTP status code indicates an authentication error?',
    options: [
      '500 Internal Server Error',
      '200 OK',
      '401 Unauthorized',
      '404 Not Found',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '401 Unauthorized is returned when the API key is missing, invalid, or revoked.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why should API keys never be used in client-side JavaScript?',
    options: [
      'JavaScript doesn\'t support HTTP headers',
      'Keys would be exposed to anyone viewing page source or monitoring traffic',
      'Client-side code is too slow',
      'Browsers block API requests'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Client-side JavaScript is visible to users, so API keys would be exposed. Use a server proxy pattern instead.',
  },
  {
    id: 4,
    type: 'text',
    question: 'Instead of hardcoding API keys, what should you use? (Two words, hint: starts with "environment")',
    correctAnswer: 'environment variables',
    difficulty: 'easy',
    explanation: 'API keys should be loaded from environment variables to keep them out of source code.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the recommended pattern for client-side applications that need Branta verification?',
    options: [
      'Embed the API key in the JavaScript',
      'Use a shared public API key',
      'Disable authentication for public endpoints',
      'Proxy API calls through your own server',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The server proxy pattern keeps API keys server-side. Client code calls your server, which then calls Branta with the secret key.',
  },
];
