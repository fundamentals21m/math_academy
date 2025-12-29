import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          Let <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> be functions such
          that <MathInline>{'\\lim_{x \\to p} f(x) = A'}</MathInline> and{' '}
          <MathInline>{'\\lim_{x \\to p} g(x) = B'}</MathInline>. Then:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Sum:</strong>{' '}
            <MathInline>{'\\lim_{x \\to p} [f(x) + g(x)] = A + B'}</MathInline>
          </li>
          <li>
            <strong>Difference:</strong>{' '}
            <MathInline>{'\\lim_{x \\to p} [f(x) - g(x)] = A - B'}</MathInline>
          </li>
          <li>
            <strong>Product:</strong>{' '}
            <MathInline>{'\\lim_{x \\to p} [f(x) \\cdot g(x)] = A \\cdot B'}</MathInline>
          </li>
          <li>
            <strong>Quotient:</strong>{' '}
            <MathInline>{'\\lim_{x \\to p} \\frac{f(x)}{g(x)} = \\frac{A}{B}'}</MathInline>{' '}
            if <MathInline>{'B \\neq 0'}</MathInline>
          </li>
        </ol>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Important Special Case</p>
        <p>
          When <MathInline>{'f'}</MathInline> is constant, say{' '}
          <MathInline>{'f(x) = A'}</MathInline> for all <MathInline>{'x'}</MathInline>, the
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
          Let <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> be continuous at
          a point <MathInline>{'p'}</MathInline>. Then:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            The sum <MathInline>{'f + g'}</MathInline> is continuous at{' '}
            <MathInline>{'p'}</MathInline>
          </li>
          <li>
            The difference <MathInline>{'f - g'}</MathInline> is continuous at{' '}
            <MathInline>{'p'}</MathInline>
          </li>
          <li>
            The product <MathInline>{'f \\cdot g'}</MathInline> is continuous at{' '}
            <MathInline>{'p'}</MathInline>
          </li>
          <li>
            The quotient <MathInline>{'f/g'}</MathInline> is continuous at{' '}
            <MathInline>{'p'}</MathInline> if <MathInline>{'g(p) \\neq 0'}</MathInline>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4">
        <strong>Proof:</strong> Since <MathInline>{'f'}</MathInline> and{' '}
        <MathInline>{'g'}</MathInline> are continuous at <MathInline>{'p'}</MathInline>, we have{' '}
        <MathInline>{'\\lim_{x \\to p} f(x) = f(p)'}</MathInline> and{' '}
        <MathInline>{'\\lim_{x \\to p} g(x) = g(p)'}</MathInline>. Apply Theorem 3.1 with{' '}
        <MathInline>{'A = f(p)'}</MathInline> and <MathInline>{'B = g(p)'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Polynomials and Rational Functions</h2>

      <p className="text-dark-200 mb-4">
        Using the basic continuous functions (constant and identity) together with Theorem 3.2,
        we can establish continuity for large classes of functions.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Continuity of Polynomials</p>
        <p className="mb-2">
          Taking <MathInline>{'f(x) = g(x) = x'}</MathInline>, the product rule proves that{' '}
          <MathInline>{'x^2'}</MathInline> is continuous everywhere. By induction, for every
          real <MathInline>{'c'}</MathInline> and positive integer <MathInline>{'n'}</MathInline>,
          the function <MathInline>{'f(x) = cx^n'}</MathInline> is continuous for all{' '}
          <MathInline>{'x'}</MathInline>.
        </p>
        <p>
          Since sums of continuous functions are continuous, every polynomial{' '}
          <MathInline>{'p(x) = \\sum_{k=0}^n c_k x^k'}</MathInline> is continuous at all points.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Continuity of Rational Functions</p>
        <p className="mb-2">
          A <strong>rational function</strong> is the quotient of two polynomials:
        </p>
        <MathBlock>{'r(x) = \\frac{p(x)}{q(x)}'}</MathBlock>
        <p className="mt-2 mb-2">
          The function <MathInline>{'r'}</MathInline> is defined for all real{' '}
          <MathInline>{'x'}</MathInline> for which{' '}
          <MathInline>{'q(x) \\neq 0'}</MathInline>. Since quotients of continuous functions are
          continuous, every rational function is continuous wherever it is defined.
        </p>
        <p>
          Example: <MathInline>{'r(x) = 1/x'}</MathInline> is continuous everywhere except at{' '}
          <MathInline>{'x = 0'}</MathInline>, where it fails to be defined.
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
          Suppose that <MathInline>{'f(x) \\leq g(x) \\leq h(x)'}</MathInline> for all{' '}
          <MathInline>{'x \\neq p'}</MathInline> in some neighborhood{' '}
          <MathInline>{'N(p)'}</MathInline>. Suppose also that:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} h(x) = a'}</MathBlock>
        <p className="mt-2">
          Then <MathInline>{'\\lim_{x \\to p} g(x) = a'}</MathInline> as well.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        The squeezing principle is useful because it is often possible to find squeezing
        functions <MathInline>{'f'}</MathInline> and <MathInline>{'h'}</MathInline> that are
        easier to deal with than <MathInline>{'g'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Indefinite Integrals</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.4 (Continuity of Indefinite Integrals)</p>
        <p className="mb-2">
          Assume <MathInline>{'f'}</MathInline> is integrable on{' '}
          <MathInline>{'[a, x]'}</MathInline> for every <MathInline>{'x'}</MathInline> in{' '}
          <MathInline>{'[a, b]'}</MathInline>, and let:
        </p>
        <MathBlock>{'A(x) = \\int_a^x f(t)\\,dt'}</MathBlock>
        <p className="mt-2">
          Then the indefinite integral <MathInline>{'A'}</MathInline> is continuous at each
          point of <MathInline>{'[a, b]'}</MathInline>. (At each endpoint we have one-sided
          continuity.)
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Sketch</h3>

      <p className="text-dark-200 mb-4">
        Choose <MathInline>{'p'}</MathInline> in <MathInline>{'[a, b]'}</MathInline>. We have:
      </p>

      <MathBlock>{'A(x) - A(p) = \\int_p^x f(t)\\,dt'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <MathInline>{'f'}</MathInline> is bounded on <MathInline>{'[a, b]'}</MathInline>,
        there is a constant <MathInline>{'M > 0'}</MathInline> such that{' '}
        <MathInline>{'-M \\leq f(t) \\leq M'}</MathInline> for all <MathInline>{'t'}</MathInline>.
        Integrating these inequalities gives:
      </p>

      <MathBlock>{'-M|x - p| \\leq A(x) - A(p) \\leq M|x - p|'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Letting <MathInline>{'x \\to p'}</MathInline> and applying the squeezing principle, we
        find <MathInline>{'A(x) \\to A(p)'}</MathInline>.
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
        <MathInline>{'x \\to 0'}</MathInline>, we cannot apply the quotient theorem directly.
        Instead, we use the squeezing principle.
      </p>

      <p className="text-dark-200 mb-4">
        From the fundamental inequalities established earlier:
      </p>

      <MathBlock>{'0 < \\cos x < \\frac{\\sin x}{x} < \\frac{1}{\\cos x}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        This is valid for <MathInline>{'0 < |x| < \\frac{\\pi}{2}'}</MathInline>. As{' '}
        <MathInline>{'x \\to 0'}</MathInline>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <MathInline>{'\\cos x \\to 1'}</MathInline> (since cosine is continuous at 0)
        </li>
        <li>
          <MathInline>{'\\frac{1}{\\cos x} \\to 1'}</MathInline>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        By the squeezing principle,{' '}
        <MathInline>{'\\frac{\\sin x}{x} \\to 1'}</MathInline>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Removing the Discontinuity</p>
        <p>
          If we define <MathInline>{'f(x) = (\\sin x)/x'}</MathInline> for{' '}
          <MathInline>{'x \\neq 0'}</MathInline> and <MathInline>{'f(0) = 1'}</MathInline>,
          then <MathInline>{'f'}</MathInline> is continuous everywhere.
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
          <MathInline>{'A(x) = x^{1+1/n}'}</MathInline> is continuous for all{' '}
          <MathInline>{'p > 0'}</MathInline>.
        </p>
        <p className="mb-2">
          Now let <MathInline>{'g(x) = x^{1/n} = A(x)/x'}</MathInline> for{' '}
          <MathInline>{'x > 0'}</MathInline>. Since <MathInline>{'g'}</MathInline> is a quotient
          of continuous functions, it is continuous for all <MathInline>{'p > 0'}</MathInline>.
        </p>
        <p>
          More generally, <MathInline>{'f(x) = x^{m/n}'}</MathInline> (where{' '}
          <MathInline>{'m'}</MathInline> is a positive integer) is a product of continuous
          functions, hence continuous for all <MathInline>{'p > 0'}</MathInline>. At{' '}
          <MathInline>{'p = 0'}</MathInline>, we have right-hand continuity.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Limit of sum:</strong>{' '}
          <MathInline>{'\\lim (f + g) = \\lim f + \\lim g'}</MathInline>
        </li>
        <li>
          <strong>Limit of product:</strong>{' '}
          <MathInline>{'\\lim (f \\cdot g) = \\lim f \\cdot \\lim g'}</MathInline>
        </li>
        <li>
          <strong>Limit of quotient:</strong>{' '}
          <MathInline>{'\\lim (f/g) = (\\lim f)/(\\lim g)'}</MathInline> when{' '}
          <MathInline>{'\\lim g \\neq 0'}</MathInline>
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
          <MathInline>{'f \\leq g \\leq h'}</MathInline> and{' '}
          <MathInline>{'\\lim f = \\lim h = a'}</MathInline>, then{' '}
          <MathInline>{'\\lim g = a'}</MathInline>
        </li>
        <li>
          <strong>Indefinite integrals:</strong> Always continuous
        </li>
        <li>
          <strong>Key limit:</strong>{' '}
          <MathInline>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1'}</MathInline>
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
