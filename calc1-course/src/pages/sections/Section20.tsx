import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-semibold mb-4">Basic Limit Theorems</h2>

      <p className="text-dark-200 mb-6">
        Calculations with limits may often be simplified by using fundamental rules for operating
        with limits. These rules, combined with what we already know about continuous functions,
        allow us to establish the continuity of many important functions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Basic Limit Theorems</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.1 (Algebraic Properties of Limits)</p>
        <p className="mb-3">
          Let <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> be functions such
          that <InlineMath>{'\\lim_{x \\to p} f(x) = A'}</InlineMath> and{' '}
          <InlineMath>{'\\lim_{x \\to p} g(x) = B'}</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Sum:</strong>{' '}
            <InlineMath>{'\\lim_{x \\to p} [f(x) + g(x)] = A + B'}</InlineMath>
          </li>
          <li>
            <strong>Difference:</strong>{' '}
            <InlineMath>{'\\lim_{x \\to p} [f(x) - g(x)] = A - B'}</InlineMath>
          </li>
          <li>
            <strong>Product:</strong>{' '}
            <InlineMath>{'\\lim_{x \\to p} [f(x) \\cdot g(x)] = A \\cdot B'}</InlineMath>
          </li>
          <li>
            <strong>Quotient:</strong>{' '}
            <InlineMath>{'\\lim_{x \\to p} \\frac{f(x)}{g(x)} = \\frac{A}{B}'}</InlineMath>{' '}
            if <InlineMath>{'B \\neq 0'}</InlineMath>
          </li>
        </ol>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Important Special Case</p>
        <p>
          When <InlineMath>{'f'}</InlineMath> is constant, say{' '}
          <InlineMath>{'f(x) = A'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>, the
          product rule becomes:
        </p>
        <MathBlock>{'\\lim_{x \\to p} A \\cdot g(x) = A \\cdot B'}</MathBlock>
        <p className="mt-2">
          This says you can "pull out" constants from limits.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        These rules can be stated in alternate form. For example, rule (i) says:
      </p>

      <MathBlock>{'\\lim_{x \\to p} [f(x) + g(x)] = \\lim_{x \\to p} f(x) + \\lim_{x \\to p} g(x)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        In words: <em>the limit of a sum is the sum of the limits</em>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Combinations</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.2 (Continuity of Algebraic Combinations)</p>
        <p>
          Let <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> be continuous at
          a point <InlineMath>{'p'}</InlineMath>. Then:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            The sum <InlineMath>{'f + g'}</InlineMath> is continuous at{' '}
            <InlineMath>{'p'}</InlineMath>
          </li>
          <li>
            The difference <InlineMath>{'f - g'}</InlineMath> is continuous at{' '}
            <InlineMath>{'p'}</InlineMath>
          </li>
          <li>
            The product <InlineMath>{'f \\cdot g'}</InlineMath> is continuous at{' '}
            <InlineMath>{'p'}</InlineMath>
          </li>
          <li>
            The quotient <InlineMath>{'f/g'}</InlineMath> is continuous at{' '}
            <InlineMath>{'p'}</InlineMath> if <InlineMath>{'g(p) \\neq 0'}</InlineMath>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4">
        <strong>Proof:</strong> Since <InlineMath>{'f'}</InlineMath> and{' '}
        <InlineMath>{'g'}</InlineMath> are continuous at <InlineMath>{'p'}</InlineMath>, we have{' '}
        <InlineMath>{'\\lim_{x \\to p} f(x) = f(p)'}</InlineMath> and{' '}
        <InlineMath>{'\\lim_{x \\to p} g(x) = g(p)'}</InlineMath>. Apply Theorem 3.1 with{' '}
        <InlineMath>{'A = f(p)'}</InlineMath> and <InlineMath>{'B = g(p)'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Polynomials and Rational Functions</h2>

      <p className="text-dark-200 mb-4">
        Using the basic continuous functions (constant and identity) together with Theorem 3.2,
        we can establish continuity for large classes of functions.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Continuity of Polynomials</p>
        <p className="mb-2">
          Taking <InlineMath>{'f(x) = g(x) = x'}</InlineMath>, the product rule proves that{' '}
          <InlineMath>{'x^2'}</InlineMath> is continuous everywhere. By induction, for every
          real <InlineMath>{'c'}</InlineMath> and positive integer <InlineMath>{'n'}</InlineMath>,
          the function <InlineMath>{'f(x) = cx^n'}</InlineMath> is continuous for all{' '}
          <InlineMath>{'x'}</InlineMath>.
        </p>
        <p>
          Since sums of continuous functions are continuous, every polynomial{' '}
          <InlineMath>{'p(x) = \\sum_{k=0}^n c_k x^k'}</InlineMath> is continuous at all points.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Continuity of Rational Functions</p>
        <p className="mb-2">
          A <strong>rational function</strong> is the quotient of two polynomials:
        </p>
        <MathBlock>{'r(x) = \\frac{p(x)}{q(x)}'}</MathBlock>
        <p className="mt-2 mb-2">
          The function <InlineMath>{'r'}</InlineMath> is defined for all real{' '}
          <InlineMath>{'x'}</InlineMath> for which{' '}
          <InlineMath>{'q(x) \\neq 0'}</InlineMath>. Since quotients of continuous functions are
          continuous, every rational function is continuous wherever it is defined.
        </p>
        <p>
          Example: <InlineMath>{'r(x) = 1/x'}</InlineMath> is continuous everywhere except at{' '}
          <InlineMath>{'x = 0'}</InlineMath>, where it fails to be defined.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Squeezing Principle</h2>

      <p className="text-dark-200 mb-4">
        The next theorem shows that if a function is "squeezed" between two other functions
        that have equal limits, then the squeezed function also has this limit.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.3 (Squeezing Principle)</p>
        <p className="mb-2">
          Suppose that <InlineMath>{'f(x) \\leq g(x) \\leq h(x)'}</InlineMath> for all{' '}
          <InlineMath>{'x \\neq p'}</InlineMath> in some neighborhood{' '}
          <InlineMath>{'N(p)'}</InlineMath>. Suppose also that:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} h(x) = a'}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>{'\\lim_{x \\to p} g(x) = a'}</InlineMath> as well.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        The squeezing principle is useful because it is often possible to find squeezing
        functions <InlineMath>{'f'}</InlineMath> and <InlineMath>{'h'}</InlineMath> that are
        easier to deal with than <InlineMath>{'g'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Indefinite Integrals</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.4 (Continuity of Indefinite Integrals)</p>
        <p className="mb-2">
          Assume <InlineMath>{'f'}</InlineMath> is integrable on{' '}
          <InlineMath>{'[a, x]'}</InlineMath> for every <InlineMath>{'x'}</InlineMath> in{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, and let:
        </p>
        <MathBlock>{'A(x) = \\int_a^x f(t)\\,dt'}</MathBlock>
        <p className="mt-2">
          Then the indefinite integral <InlineMath>{'A'}</InlineMath> is continuous at each
          point of <InlineMath>{'[a, b]'}</InlineMath>. (At each endpoint we have one-sided
          continuity.)
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Sketch</h3>

      <p className="text-dark-200 mb-4">
        Choose <InlineMath>{'p'}</InlineMath> in <InlineMath>{'[a, b]'}</InlineMath>. We have:
      </p>

      <MathBlock>{'A(x) - A(p) = \\int_p^x f(t)\\,dt'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <InlineMath>{'f'}</InlineMath> is bounded on <InlineMath>{'[a, b]'}</InlineMath>,
        there is a constant <InlineMath>{'M > 0'}</InlineMath> such that{' '}
        <InlineMath>{'-M \\leq f(t) \\leq M'}</InlineMath> for all <InlineMath>{'t'}</InlineMath>.
        Integrating these inequalities gives:
      </p>

      <MathBlock>{'-M|x - p| \\leq A(x) - A(p) \\leq M|x - p|'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Letting <InlineMath>{'x \\to p'}</InlineMath> and applying the squeezing principle, we
        find <InlineMath>{'A(x) \\to A(p)'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Trigonometric Functions</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Continuity of Sine and Cosine</p>
        <p className="mb-2">
          Since the sine function is an indefinite integral:
        </p>
        <MathBlock>{'\\sin x = \\int_0^x \\cos t\\,dt'}</MathBlock>
        <p className="mt-2 mb-2">
          Theorem 3.4 tells us that sine is continuous everywhere. Similarly, cosine is
          continuous since:
        </p>
        <MathBlock>{'\\cos x = 1 - \\int_0^x \\sin t\\,dt'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">An Important Limit</h2>

      <p className="text-dark-200 mb-4">
        We now prove a limit formula that is essential for differential calculus.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem (Fundamental Trigonometric Limit)</p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        <strong>Proof:</strong> Since the denominator approaches 0 as{' '}
        <InlineMath>{'x \\to 0'}</InlineMath>, we cannot apply the quotient theorem directly.
        Instead, we use the squeezing principle.
      </p>

      <p className="text-dark-200 mb-4">
        From the fundamental inequalities established earlier:
      </p>

      <MathBlock>{'0 < \\cos x < \\frac{\\sin x}{x} < \\frac{1}{\\cos x}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        This is valid for <InlineMath>{'0 < |x| < \\frac{\\pi}{2}'}</InlineMath>. As{' '}
        <InlineMath>{'x \\to 0'}</InlineMath>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <InlineMath>{'\\cos x \\to 1'}</InlineMath> (since cosine is continuous at 0)
        </li>
        <li>
          <InlineMath>{'\\frac{1}{\\cos x} \\to 1'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        By the squeezing principle,{' '}
        <InlineMath>{'\\frac{\\sin x}{x} \\to 1'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Removing the Discontinuity</p>
        <p>
          If we define <InlineMath>{'f(x) = (\\sin x)/x'}</InlineMath> for{' '}
          <InlineMath>{'x \\neq 0'}</InlineMath> and <InlineMath>{'f(0) = 1'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is continuous everywhere.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Power Functions</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 5: Continuity of x^r for Positive Rational r</p>
        <p className="mb-2">
          From Theorem 2.2, we have:
        </p>
        <MathBlock>{'\\int_0^x t^{1/n}\\,dt = \\frac{x^{1+1/n}}{1 + 1/n}'}</MathBlock>
        <p className="mt-2 mb-2">
          Using Theorems 3.4 and 3.1, the function{' '}
          <InlineMath>{'A(x) = x^{1+1/n}'}</InlineMath> is continuous for all{' '}
          <InlineMath>{'p > 0'}</InlineMath>.
        </p>
        <p className="mb-2">
          Now let <InlineMath>{'g(x) = x^{1/n} = A(x)/x'}</InlineMath> for{' '}
          <InlineMath>{'x > 0'}</InlineMath>. Since <InlineMath>{'g'}</InlineMath> is a quotient
          of continuous functions, it is continuous for all <InlineMath>{'p > 0'}</InlineMath>.
        </p>
        <p>
          More generally, <InlineMath>{'f(x) = x^{m/n}'}</InlineMath> (where{' '}
          <InlineMath>{'m'}</InlineMath> is a positive integer) is a product of continuous
          functions, hence continuous for all <InlineMath>{'p > 0'}</InlineMath>. At{' '}
          <InlineMath>{'p = 0'}</InlineMath>, we have right-hand continuity.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Limit of sum:</strong>{' '}
          <InlineMath>{'\\lim (f + g) = \\lim f + \\lim g'}</InlineMath>
        </li>
        <li>
          <strong>Limit of product:</strong>{' '}
          <InlineMath>{'\\lim (f \\cdot g) = \\lim f \\cdot \\lim g'}</InlineMath>
        </li>
        <li>
          <strong>Limit of quotient:</strong>{' '}
          <InlineMath>{'\\lim (f/g) = (\\lim f)/(\\lim g)'}</InlineMath> when{' '}
          <InlineMath>{'\\lim g \\neq 0'}</InlineMath>
        </li>
        <li>
          <strong>Continuity preserved:</strong> Sums, differences, products, and quotients of
          continuous functions are continuous
        </li>
        <li>
          <strong>Polynomials:</strong> Continuous everywhere
        </li>
        <li>
          <strong>Rational functions:</strong> Continuous wherever defined
        </li>
        <li>
          <strong>Squeezing principle:</strong> If{' '}
          <InlineMath>{'f \\leq g \\leq h'}</InlineMath> and{' '}
          <InlineMath>{'\\lim f = \\lim h = a'}</InlineMath>, then{' '}
          <InlineMath>{'\\lim g = a'}</InlineMath>
        </li>
        <li>
          <strong>Indefinite integrals:</strong> Always continuous
        </li>
        <li>
          <strong>Key limit:</strong>{' '}
          <InlineMath>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        These theorems provide the foundation for working with limits and establishing
        continuity. In the next section, we will explore how continuity behaves under
        composition of functions.
      </p>
    </LessonLayout>
  );
}
