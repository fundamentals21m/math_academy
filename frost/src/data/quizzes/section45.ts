import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a dynamic threshold change in FROST?',
    options: [
      'Changing the threshold during a signing session',
      'Changing from $(t_1, n_1)$ to $(t_2, n_2)$ threshold without changing the public key',
      'Automatically adjusting threshold based on transaction value',
      'Randomly selecting the threshold for each signature',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Dynamic threshold changes allow the group to modify both the threshold $t$ and total participants $n$ (e.g., from 2-of-3 to 3-of-5) while keeping the same group public key $Y = [s]G$ and underlying secret $s$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why would an organization want to change their FROST threshold?',
    options: [
      'To make signatures smaller',
      'To add new key holders or increase security requirements as the organization grows',
      'To speed up signature verification',
      'To reduce computational costs',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'As organizations evolve, they may need to add new signers (new employees, new devices) or increase the threshold for higher-value transactions. Dynamic thresholds avoid generating entirely new keys and updating all systems.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is a threshold increase from $t$ to $t\' > t$ accomplished?',
    options: [
      'Generate completely new shares for all participants',
      'Have $t$ existing holders jointly re-share the secret using a degree $t\'-1$ polynomial',
      'Multiply all existing shares by $(t\'/t)$',
      'Hash existing shares with the new threshold value',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'To increase threshold from $t$ to $t\'$, current shareholders run a re-sharing protocol. They use their combined knowledge (via Lagrange interpolation) to create new shares on a degree $t\'-1$ polynomial, requiring $t\'$ shares to reconstruct.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What challenge arises when adding new participants to a FROST group?',
    options: [
      'The public key must change',
      'New participants need shares without any single party knowing the complete secret',
      'Existing participants must delete their shares',
      'The signature format changes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'New participants need valid shares of the existing secret $s$, but no single current participant knows $s$. The existing $t$ shareholders must collaboratively generate new shares without reconstructing the secret.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the minimum number of existing participants needed to perform a threshold change?',
    options: [
      '1 participant',
      '$t$ participants (the current threshold)',
      '$n$ participants (all current participants)',
      '$t + 1$ participants',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exactly $t$ participants are needed - enough to reconstruct the secret\'s polynomial. They can then jointly compute new shares for any new polynomial degree. Fewer than $t$ cannot reconstruct; more than $t$ is unnecessary.',
  },
];
