import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A vector is a quantity that has:',
    options: [
      'Both magnitude and direction',
      'Direction only',
      'Magnitude only',
      'Neither magnitude nor direction'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Vectors have both magnitude (size) and direction, unlike scalars which have only magnitude.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'A boat rows 40 feet north (relative to water) while the current carries it 30 feet east. What is the total displacement in feet?',
    correctAnswer: 50,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'By the Pythagorean theorem: $d = \\sqrt{40^2 + 30^2} = \\sqrt{2500} = 50$ feet.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A motorboat travels 4 ft/sec in still water. In a 3 ft/sec eastward current (boat pointed north), what is its speed relative to the bank in ft/sec?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'Speed = $\\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ ft/sec.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Doppler effect explains why:',
    options: [
      'Sound is louder near the source',
      'A car horn sounds higher when approaching and lower when receding',
      'Sound travels faster in water',
      'Light is brighter from nearby stars'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Doppler effect causes frequency shifts—higher pitch when approaching, lower when receding.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Sound travels at approximately:',
    options: [
      '186,000 miles/second',
      '343 miles/hour',
      '1100 feet/second',
      '100 feet/second'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sound travels at about 1100 ft/s (750 mph). Light travels at 186,000 miles/second.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If an observer moves toward a stationary sound source at speed $v$, the perceived frequency is:',
    options: [
      '$f$',
      '$f/v$',
      '$(1 - v/c)f$',
      '$(1 + v/c)f$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Moving toward the source: $f\' = (1 + v/c)f$, where $c$ is the speed of sound.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Police radar uses the Doppler effect. Why is there a factor of 2 in the frequency shift formula?',
    options: [
      'Because the car acts as both a moving receiver and a moving source',
      'Because radar uses two signals',
      'Because of rounding',
      'Because light has two polarizations'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The target vehicle first receives the wave (one Doppler shift), then reflects it (another shift).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'To add two vectors geometrically, you:',
    options: [
      'Add their magnitudes',
      'Draw them tip-to-tail and connect start to end',
      'Multiply them together',
      'Find their average'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Vector addition: place the second vector\'s tail at the first vector\'s tip. The sum goes from start to end.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'How can a sailboat sail into the wind?',
    options: [
      'It uses a motor when going upwind',
      'Wind actually pushes equally in all directions',
      'By angling the sail to create forward thrust and zigzagging (tacking)',
      'It cannot sail into the wind'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sail creates a force that can be decomposed; the keel resists sideways motion. By tacking, the boat makes progress upwind.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'The "red shift" in astronomy refers to:',
    options: [
      'Stars turning red as they age',
      'The color of Mars',
      'Dust between stars making them appear red',
      'Light appearing redder from receding objects due to the Doppler effect'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Light from galaxies moving away from us is shifted to lower frequencies (redder) by the Doppler effect.',
  },
];
