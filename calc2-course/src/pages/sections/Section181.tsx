import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section181() {
  return (
    <LessonLayout sectionId={181}>
      <h2>Historical Introduction to Numerical Analysis</h2>

      <p>
        <strong>Numerical analysis</strong> is the branch of mathematics concerned
        with devising and analyzing methods for obtaining numerical solutions to
        mathematical problems. Its roots extend back to antiquity, but it has
        become increasingly important in the modern era of digital computation.
      </p>

      <h3>The Central Problem</h3>

      <p>
        Many mathematical problems have exact solutions that cannot be computed
        directly. Consider finding a root of <InlineMath>{'x^5 - x + 1 = 0'}</InlineMath>.
        While we know from algebra that exactly five roots exist (counting
        multiplicity and complex roots), there is no general formula for roots of
        polynomials of degree five or higher.
      </p>

      <p>
        Similarly, many integrals have no elementary antiderivative. The integral
        <InlineMath>{'\\int e^{-x^2}\\,dx'}</InlineMath> is essential in probability
        and statistics, yet it cannot be expressed in terms of elementary functions.
      </p>

      <h3>Approximation as a Solution</h3>

      <p>
        Numerical analysis provides approximate solutions to such problems. The key
        questions are:
      </p>
      <ul>
        <li>How accurate is the approximation?</li>
        <li>How efficiently can it be computed?</li>
        <li>How do errors propagate through calculations?</li>
      </ul>

      <h3>Historical Development</h3>

      <p>
        Ancient mathematicians developed numerical methods out of necessity.
        Archimedes approximated <InlineMath>{'\\pi'}</InlineMath> by inscribing
        and circumscribing regular polygons. Babylonian mathematicians had
        iterative methods for computing square roots.
      </p>

      <p>
        The development of calculus by Newton and Leibniz provided the theoretical
        foundation for many numerical methods. Newton's method for finding roots,
        the trapezoidal rule, and Simpson's rule all emerged from this period.
      </p>

      <p>
        The modern era of numerical analysis began with the advent of electronic
        computers. Suddenly, methods requiring thousands of arithmetic operations
        became practical, and entirely new algorithms became possible.
      </p>

      <h3>Topics in This Chapter</h3>

      <Callout type="info">
        <strong>Chapter Overview:</strong> This chapter develops four main themes:
        <ul style={{ marginBottom: 0 }}>
          <li><strong>Polynomial approximation:</strong> Approximating functions by polynomials</li>
          <li><strong>Interpolation:</strong> Constructing polynomials that pass through given points</li>
          <li><strong>Numerical integration:</strong> Approximating definite integrals</li>
          <li><strong>Summation formulas:</strong> Connecting sums and integrals</li>
        </ul>
      </Callout>

      <h3>Why Polynomials?</h3>

      <p>
        Polynomials are the natural choice for approximation because:
      </p>
      <ul>
        <li>They can be evaluated using only addition and multiplication</li>
        <li>Their derivatives and integrals are again polynomials</li>
        <li>The Weierstrass approximation theorem guarantees that any continuous function on a closed interval can be uniformly approximated by polynomials</li>
      </ul>

      <MathBlock>
        {`p(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n`}
      </MathBlock>

      <p>
        A polynomial of degree <InlineMath>n</InlineMath> has{' '}
        <InlineMath>{'n + 1'}</InlineMath> coefficients, giving{' '}
        <InlineMath>{'n + 1'}</InlineMath> degrees of freedom to match a function.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Numerical analysis transforms impossible
        exact computations into possible approximate computations. The art lies
        in making approximations accurate enough for practical purposes while
        keeping computations efficient. Every method involves a tradeoff between
        accuracy and computational cost.
      </Callout>
    </LessonLayout>
  );
}
