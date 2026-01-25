import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 's33-e01',
    type: 'multiple-choice',
    question: 'Who are credited as the independent inventors of calculus?',
    difficulty: 'easy',
    options: [
      'Fermat and Descartes',
      'Newton and Leibniz',
      'Euler and Bernoulli',
      'Cauchy and Weierstrass',
    ],
    correctIndex: 1,
    explanation:
      'Isaac Newton (1642–1727) and Gottfried Wilhelm Leibniz (1646–1716) independently developed calculus in the late 17th century. Newton developed it earlier (~1666) but Leibniz published first (1684).',
  },
  {
    id: 's33-e02',
    type: 'multiple-choice',
    question: 'What term did Newton use for the derivative (rate of change)?',
    difficulty: 'easy',
    options: [
      'Differential',
      'Gradient',
      'Fluxion',
      'Increment'
    ],
    correctIndex: 2,
    explanation:
      'Newton called the derivative the "fluxion" and denoted it with a dot: $\\dot{x}$. The position variable was called the "fluent." This terminology came from thinking of quantities as flowing or changing over time.',
  },
  {
    id: 's33-m01',
    type: 'multiple-choice',
    question: 'Why is Leibniz\'s notation generally preferred over Newton\'s today?',
    difficulty: 'medium',
    options: [
      'It was invented first',
      'It was endorsed by the Royal Society',
      'It uses fewer symbols',
      'It makes the chain rule look like fraction multiplication'
    ],
    correctIndex: 3,
    explanation:
      'Leibniz\'s notation $dy/dx$ makes many calculus operations intuitive. For example, the chain rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$ looks like fraction multiplication, and substitution in integrals becomes natural.',
  },
  {
    id: 's33-m02',
    type: 'multiple-choice',
    question:
      'What key insight made Newton and Leibniz the "inventors" of calculus?',
    difficulty: 'medium',
    options: [
      'They recognized differentiation and integration as inverse operations',
      'They discovered the power rule',
      'They proved the existence of infinitesimals',
      'They invented coordinate geometry'
    ],
    correctIndex: 0,
    explanation:
      'The crucial insight was recognizing that finding tangents (differentiation) and finding areas (integration) are inverse operations. This connection—the Fundamental Theorem of Calculus—unified two previously separate problem types.',
  },
  {
    id: 's33-h01',
    type: 'multiple-choice',
    question:
      'Who proved a geometric version of the fundamental relationship between tangents and areas before Newton and Leibniz?',
    difficulty: 'hard',
    options: [
      'Descartes',
      'Barrow',
      'Fermat',
      'Cavalieri',
    ],
    correctIndex: 1,
    explanation:
      'Isaac Barrow (Newton\'s teacher) proved a geometric version of what became the Fundamental Theorem of Calculus in 1670. However, he didn\'t recognize it as a fundamental principle—that insight came from his student Newton.',
  },
  {
    id: 's33-h02',
    type: 'multiple-choice',
    question:
      'What was the outcome of the Newton-Leibniz priority dispute?',
    difficulty: 'hard',
    options: [
      'Newton was proven to have plagiarized from Leibniz',
      'Leibniz was proven to have plagiarized from Newton',
      'Modern historians believe both discoveries were genuinely independent',
      'The Royal Society determined they collaborated',
    ],
    correctIndex: 2,
    explanation:
      'Modern historians agree that both discoveries were independent. Newton developed his methods earlier (~1666) but didn\'t publish until 1704. Leibniz developed his version around 1675-76 and published in 1684, without access to Newton\'s unpublished work.',
  },
];
