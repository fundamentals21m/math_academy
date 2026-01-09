import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's47-e01',
    type: 'multiple-choice',
    question: 'The brachistochrone problem asks for the curve of:',
    options: [
      'Fastest descent under gravity',
      'Shortest distance between two points',
      'Maximum area',
      'Constant curvature',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The brachistochrone (from Greek "shortest time") problem asks for the curve along which a frictionless bead slides from point A to lower point B in the least time under gravity. The straight line is shortest in distance but not in time.',
  },
  {
    id: 's47-e02',
    type: 'multiple-choice',
    question: 'The solution to the brachistochrone problem is:',
    options: [
      'A cycloid (path traced by a point on a rolling circle)',
      'A straight line',
      'A parabola',
      'A circular arc',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The brachistochrone curve is an inverted cycloid—the path traced by a point on the rim of a circle rolling along a horizontal line. This was discovered independently by Newton, Leibniz, and the Bernoulli brothers in 1696-97.',
  },
  // Medium questions
  {
    id: 's47-m01',
    type: 'multiple-choice',
    question: 'Johann Bernoulli solved the brachistochrone using an analogy with:',
    options: [
      'Optics and Snell\'s law of refraction',
      'Sound waves',
      'Electrical circuits',
      'Fluid dynamics',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Johann Bernoulli used Fermat\'s principle (light takes the path of least time) and Snell\'s law. He imagined the plane divided into layers with varying "light speed" equal to $\\sqrt{2gy}$. The least-time path in this medium is exactly the cycloid.',
  },
  {
    id: 's47-m02',
    type: 'multiple-choice',
    question: 'The tautochrone property of the cycloid means:',
    options: [
      'The descent time is the same regardless of starting point',
      'The curve has constant curvature',
      'The arc length equals the diameter',
      'The curve is self-similar',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A cycloid is also a tautochrone: a bead released from any point on the curve reaches the bottom in the same time. Huygens used this property to design pendulum clocks with period independent of amplitude.',
  },
  // Hard questions
  {
    id: 's47-h01',
    type: 'multiple-choice',
    question: 'The brachistochrone problem contributed to mathematics by:',
    options: [
      'Founding the calculus of variations',
      'Proving the Pythagorean theorem',
      'Discovering complex numbers',
      'Developing group theory',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The brachistochrone problem was the first major problem in the calculus of variations—finding curves that minimize or maximize integrals. This field led directly to Lagrangian and Hamiltonian mechanics and remains central to physics and optimization.',
  },
  {
    id: 's47-h02',
    type: 'multiple-choice',
    question: 'When Newton solved the brachistochrone, Johann Bernoulli said:',
    options: [
      '"I recognize the lion by his claw"',
      '"This solution is incorrect"',
      '"I solved it first"',
      '"Mathematics has reached its peak"',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Newton submitted his solution anonymously, but Johann Bernoulli immediately recognized the author, famously remarking "tanquam ex ungue leonem" (I recognize the lion by his claw). Newton had solved the problem in a single evening.',
  },
];
