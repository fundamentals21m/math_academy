import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's48-e01',
    type: 'multiple-choice',
    question: 'The Lagrangian $L$ is defined as:',
    options: [
      'Kinetic energy minus potential energy ($T - V$)',
      'Kinetic energy plus potential energy ($T + V$)',
      'Force times distance',
      'Mass times acceleration',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Lagrangian is defined as $L = T - V$, where $T$ is kinetic energy and $V$ is potential energy. This quantity, when integrated over time (the action), is made stationary by the actual path of a mechanical system.',
  },
  {
    id: 's48-e02',
    type: 'multiple-choice',
    question: 'Hamilton\'s principle states that mechanical systems follow paths that make the action:',
    options: [
      'Stationary (extremal)',
      'Maximum',
      'Zero',
      'Equal to energy',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hamilton\'s principle (the principle of least action) states that the actual path makes the action $S = \\int L\\, dt$ stationary—meaning its first variation is zero. This is usually a minimum but can be a saddle point.',
  },
  // Medium questions
  {
    id: 's48-m01',
    type: 'multiple-choice',
    question: 'The Euler-Lagrange equation $\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y\'} = 0$ is:',
    options: [
      'A necessary condition for extremizing an integral',
      'Always sufficient for a minimum',
      'Only valid for straight lines',
      'Newton\'s second law',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Euler-Lagrange equation is a necessary condition for a function $y(x)$ to extremize the integral $\\int F(x,y,y\')dx$. It transforms the optimization problem into a differential equation that the optimal path must satisfy.',
  },
  {
    id: 's48-m02',
    type: 'multiple-choice',
    question: 'The Hamiltonian $H$ typically represents:',
    options: [
      'Total energy ($T + V$)',
      'The Lagrangian',
      'Kinetic energy only',
      'The action',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'For most systems, the Hamiltonian $H = \\sum p_i\\dot{q}_i - L$ equals the total energy $T + V$. Hamilton\'s equations describe how position and momentum evolve in phase space, preserving this energy.',
  },
  // Hard questions
  {
    id: 's48-h01',
    type: 'multiple-choice',
    question: 'A major advantage of Lagrangian mechanics over Newtonian mechanics is:',
    options: [
      'It works naturally in any coordinate system and handles constraints easily',
      'It requires fewer equations',
      'It only applies to simple systems',
      'It eliminates the need for calculus',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Lagrangian mechanics is coordinate-independent: you can use Cartesian, polar, or any convenient coordinates. Constraints (like a bead on a wire) are handled by choosing appropriate generalized coordinates, eliminating the need for constraint forces.',
  },
  {
    id: 's48-h02',
    type: 'multiple-choice',
    question: 'Feynman\'s path integral formulation of quantum mechanics uses the action by:',
    options: [
      'Summing contributions $e^{iS/\\hbar}$ over all possible paths',
      'Finding the single path of minimum action',
      'Setting the action equal to zero',
      'Ignoring paths with large action',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'In Feynman\'s formulation, a quantum particle takes all paths simultaneously, with each weighted by $e^{iS/\\hbar}$. For macroscopic systems where $S \\gg \\hbar$, paths near the classical (stationary action) path dominate, recovering classical mechanics.',
  },
];
