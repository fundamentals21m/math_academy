import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's65-e01',
    type: 'multiple-choice',
    question: 'A surface is orientable if:',
    options: [
      'It has positive Euler characteristic',
      'It has no boundary',
      'It is a sphere',
      'It has two distinct sides'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'An orientable surface has two distinct sides—you can consistently define "inside" and "outside" or "clockwise" and "counterclockwise." The sphere and torus are orientable; the Möbius strip and Klein bottle are not.',
  },
  {
    id: 's65-e02',
    type: 'multiple-choice',
    question: 'The Möbius strip is an example of:',
    options: [
      'A non-orientable surface with boundary',
      'An orientable surface without boundary',
      'A surface with two sides',
      'A sphere with one handle',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Möbius strip is non-orientable (it has only one side—if you start coloring one "side" you\'ll eventually color the "other"). It has a single boundary circle.',
  },
  // Medium questions
  {
    id: 's65-m01',
    type: 'multiple-choice',
    question: 'The classification theorem states that every compact surface is determined by:',
    options: [
      'Number of vertices and edges',
      'Orientability and Euler characteristic',
      'Area and perimeter',
      'Number of holes only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The classification of compact surfaces says every surface is topologically equivalent to either a sphere with g handles (orientable) or a sphere with k cross-caps (non-orientable). These are determined by orientability and Euler characteristic.',
  },
  {
    id: 's65-m02',
    type: 'multiple-choice',
    question: 'The connected sum of two tori has Euler characteristic:',
    options: [
      '2',
      '0',
      '-2',
      '-4'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Each torus has χ = 0. The connected sum formula is χ(S₁ # S₂) = χ(S₁) + χ(S₂) - 2 = 0 + 0 - 2 = -2. This equals a genus-2 surface: χ = 2 - 2g = 2 - 4 = -2.',
  },
  // Hard questions
  {
    id: 's65-h01',
    type: 'multiple-choice',
    question: 'The Klein bottle can be described as:',
    options: [
      'A sphere with one cross-cap',
      'A sphere with one handle',
      'An orientable surface of genus 1',
      'The connected sum of two projective planes'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Klein bottle equals RP² # RP² (two projective planes joined). It\'s non-orientable with χ = 0. Alternatively, it\'s a sphere with 2 cross-caps. A sphere with 1 cross-cap is the projective plane.',
  },
  {
    id: 's65-h02',
    type: 'multiple-choice',
    question: 'For non-orientable surfaces with $k$ cross-caps, the Euler characteristic is:',
    options: [
      '$\\chi = 2 - k$',
      '$\\chi = 2 - 2k$',
      '$\\chi = k$',
      '$\\chi = -k$',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'For non-orientable surfaces: χ = 2 - k. The projective plane (k=1) has χ=1, the Klein bottle (k=2) has χ=0, etc. For orientable surfaces with genus g: χ = 2 - 2g.',
  },
];
