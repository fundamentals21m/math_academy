import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What mathematical technique decomposes any sound into pure sine waves?',
    options: [
      'Long division',
      'Matrix multiplication',
      'Fourier analysis',
      'Prime factorization'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fourier analysis uses integrals to decompose any sound (or any periodic function) into a sum of pure sine and cosine waves.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What differential equation describes how sound waves propagate?',
    options: [
      'Newton\'s Second Law',
      'Euler\'s identity',
      'The heat equation',
      'The wave equation'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The wave equation is a partial differential equation that describes how vibrations travel through strings, air, and other media.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does MP3 compression work?',
    options: [
      'By using Fourier transforms to identify frequencies we can\'t hear and discarding them',
      'By removing all high notes',
      'By playing music faster',
      'By converting to a different file format'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'MP3 uses Fourier analysis to identify frequency components our ears can\'t detect, then removes them to reduce file size.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are Bézier curves used for?',
    options: [
      'Calculating prime numbers',
      'Drawing smooth curves in fonts and vector graphics',
      'Predicting weather',
      'Measuring earthquake intensity'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bézier curves are parametric curves used in every font, vector graphic, and CAD drawing. They ensure smooth, continuous curves.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In computer graphics, how is realistic lighting computed?',
    options: [
      'By taking photographs',
      'By using random colors',
      'By solving the rendering equation (an integral equation)',
      'By copying real light bulbs'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Photorealistic rendering requires solving the rendering equation, which describes how light bounces around a scene using integrals.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Edge detection in image processing uses:',
    options: [
      'The color blue',
      'File compression',
      'Random sampling',
      'Derivatives (the gradient shows where intensity changes rapidly)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Edges in images are found using derivatives—specifically the gradient $\\nabla I$, which is large where image intensity changes rapidly.',
  },
];
