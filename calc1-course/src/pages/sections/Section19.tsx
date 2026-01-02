import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mb-4">Limits and Continuity</h2>

      <p className="text-dark-200 mb-6">
        This chapter deals with the concept of <strong>continuity</strong>, one of the most
        important and fascinating ideas in all of mathematics. Although the meaning of "continuous"
        seems intuitively clear, formulating a precise mathematical definition requires care.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Historical Background</h2>

      <p className="text-dark-200 mb-4">
        In the early development of calculus, almost all functions dealt with were continuous,
        so there was no pressing need to examine the exact meaning of continuity. It was not
        until the late 18th century that discontinuous functions began appearing in connection
        with physical problems. The work of J. B. J. Fourier (1758–1830) on the theory of heat
        forced mathematicians to examine these concepts more carefully.
      </p>

      <p className="text-dark-200 mb-4">
        A satisfactory mathematical definition of continuity, expressed entirely in terms of
        properties of the real number system, was first formulated in 1821 by the French
        mathematician <strong>Augustin-Louis Cauchy</strong> (1789–1857). His definition, which
        is still used today, is most easily explained in terms of the <em>limit concept</em>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Neighborhoods</h2>

      <p className="text-dark-200 mb-4">
        To define limits precisely, we first introduce the concept of a neighborhood.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Neighborhood of a Point</p>
        <p className="mb-2">
          Any open interval containing a point <InlineMath>{'p'}</InlineMath> as its midpoint
          is called a <strong>neighborhood</strong> of <InlineMath>{'p'}</InlineMath>.
        </p>
        <p className="mb-2">
          We denote neighborhoods by <InlineMath>{'N(p)'}</InlineMath>,{' '}
          <InlineMath>{'N_1(p)'}</InlineMath>, <InlineMath>{'N_2(p)'}</InlineMath>, etc.
        </p>
        <p>
          The neighborhood <InlineMath>{'N(p; r)'}</InlineMath> with <strong>radius</strong>{' '}
          <InlineMath>{'r > 0'}</InlineMath> consists of all points{' '}
          <InlineMath>{'x'}</InlineMath> satisfying:
        </p>
        <MathBlock>{'|x - p| < r \\quad \\Leftrightarrow \\quad p - r < x < p + r'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        In other words, <InlineMath>{'N(p; r)'}</InlineMath> consists of all points whose
        distance from <InlineMath>{'p'}</InlineMath> is less than <InlineMath>{'r'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of Limit</h2>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'f'}</InlineMath> be a function defined in some open interval containing
        a point <InlineMath>{'p'}</InlineMath>, although we do not insist that{' '}
        <InlineMath>{'f'}</InlineMath> be defined at <InlineMath>{'p'}</InlineMath> itself.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Limit of a Function (Neighborhood Form)</p>
        <p className="mb-2">
          The symbolism <InlineMath>{'\\lim_{x \\to p} f(x) = A'}</InlineMath> means that for
          every neighborhood <InlineMath>{'N_1(A)'}</InlineMath> there is some neighborhood{' '}
          <InlineMath>{'N_2(p)'}</InlineMath> such that:
        </p>
        <MathBlock>{'f(x) \\in N_1(A) \\quad \\text{whenever} \\quad x \\in N_2(p) \\text{ and } x \\neq p'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        The definition involves <em>two</em> neighborhoods:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <InlineMath>{'N_1(A)'}</InlineMath> tells us how close we wish{' '}
          <InlineMath>{'f(x)'}</InlineMath> to be to the limit <InlineMath>{'A'}</InlineMath>
        </li>
        <li>
          <InlineMath>{'N_2(p)'}</InlineMath> tells us how close <InlineMath>{'x'}</InlineMath>{' '}
          should be to <InlineMath>{'p'}</InlineMath> so that{' '}
          <InlineMath>{'f(x)'}</InlineMath> will be within <InlineMath>{'N_1(A)'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The essential part: for <em>every</em> <InlineMath>{'N_1(A)'}</InlineMath>, no matter
        how small, there is <em>some</em> neighborhood <InlineMath>{'N_2(p)'}</InlineMath> to
        satisfy the condition.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">The ε-δ Definition</h3>

      <p className="text-dark-200 mb-4">
        The definition of limit can also be formulated in terms of the <em>radii</em> of the
        neighborhoods. It is customary to denote the radius of{' '}
        <InlineMath>{'N_1(A)'}</InlineMath> by <InlineMath>{'\\varepsilon'}</InlineMath>{' '}
        (epsilon) and the radius of <InlineMath>{'N_2(p)'}</InlineMath> by{' '}
        <InlineMath>{'\\delta'}</InlineMath> (delta).
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Limit of a Function (ε-δ Form)</p>
        <p className="mb-2">
          The symbol <InlineMath>{'\\lim_{x \\to p} f(x) = A'}</InlineMath> means that for every{' '}
          <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there is a{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that:
        </p>
        <MathBlock>{'|f(x) - A| < \\varepsilon \\quad \\text{whenever} \\quad 0 < |x - p| < \\delta'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Equivalent Statements</p>
        <p>The following three statements are all equivalent:</p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = A, \\quad \\lim_{x \\to p} (f(x) - A) = 0, \\quad \\lim_{x \\to p} |f(x) - A| = 0'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Basic Examples of Limits</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Limit of a Constant Function</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = c'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>.
          For every <InlineMath>{'p'}</InlineMath>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} c = c'}</MathBlock>
        <p className="mt-2">
          Given any neighborhood <InlineMath>{'N_1(c)'}</InlineMath>, relation is trivially
          satisfied for any choice of <InlineMath>{'N_2(p)'}</InlineMath> because{' '}
          <InlineMath>{'f(x) = c'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Limit of the Identity Function</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = x'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>.
          For every <InlineMath>{'p'}</InlineMath>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} x = p'}</MathBlock>
        <p className="mt-2">
          Choose any neighborhood <InlineMath>{'N_1(p)'}</InlineMath> and take{' '}
          <InlineMath>{'N_2(p) = N_1(p)'}</InlineMath>. Then the relation is trivially satisfied.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">One-Sided Limits</h2>

      <p className="text-dark-200 mb-4">
        "One-sided" limits may be defined in a similar way.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Right-Hand and Left-Hand Limits</p>
        <p className="mb-2">
          If <InlineMath>{'f(x) \\to A'}</InlineMath> as{' '}
          <InlineMath>{'x \\to p'}</InlineMath> through values <strong>greater than</strong>{' '}
          <InlineMath>{'p'}</InlineMath>, we write:
        </p>
        <MathBlock>{'\\lim_{x \\to p^+} f(x) = A \\quad \\text{(right-hand limit)}'}</MathBlock>
        <p className="mt-2 mb-2">
          If <InlineMath>{'f(x) \\to A'}</InlineMath> as{' '}
          <InlineMath>{'x \\to p'}</InlineMath> through values <strong>less than</strong>{' '}
          <InlineMath>{'p'}</InlineMath>, we write:
        </p>
        <MathBlock>{'\\lim_{x \\to p^-} f(x) = A \\quad \\text{(left-hand limit)}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{'f'}</InlineMath> has a limit <InlineMath>{'A'}</InlineMath> at{' '}
        <InlineMath>{'p'}</InlineMath>, then it also has a right-hand limit and a left-hand
        limit at <InlineMath>{'p'}</InlineMath>, both equal to <InlineMath>{'A'}</InlineMath>.
        But a function can have unequal one-sided limits, in which case the (two-sided) limit
        does not exist.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Greatest-Integer Function</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = [x]'}</InlineMath> and let <InlineMath>{'p'}</InlineMath> be
          any integer. For <InlineMath>{'x'}</InlineMath> near <InlineMath>{'p'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>
            If <InlineMath>{'x < p'}</InlineMath>, then{' '}
            <InlineMath>{'f(x) = p - 1'}</InlineMath>
          </li>
          <li>
            If <InlineMath>{'x > p'}</InlineMath>, then{' '}
            <InlineMath>{'f(x) = p'}</InlineMath>
          </li>
        </ul>
        <MathBlock>{'\\lim_{x \\to p^-} [x] = p - 1, \\quad \\lim_{x \\to p^+} [x] = p'}</MathBlock>
        <p className="mt-2">
          Since these are unequal, <InlineMath>{'\\lim_{x \\to p} [x]'}</InlineMath> does not
          exist at integers.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of Continuity</h2>

      <p className="text-dark-200 mb-4">
        In the definition of limit, we made no assertion about the behavior of{' '}
        <InlineMath>{'f'}</InlineMath> at the point <InlineMath>{'p'}</InlineMath> itself.
        Even if <InlineMath>{'f'}</InlineMath> is defined at <InlineMath>{'p'}</InlineMath>,
        its value there need not equal the limit. However, when both conditions hold, we have
        continuity.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Continuity at a Point</p>
        <p className="mb-2">
          A function <InlineMath>{'f'}</InlineMath> is said to be <strong>continuous</strong>{' '}
          at a point <InlineMath>{'p'}</InlineMath> if:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <InlineMath>{'f'}</InlineMath> is defined at <InlineMath>{'p'}</InlineMath>, and
          </li>
          <li>
            <InlineMath>{'\\displaystyle\\lim_{x \\to p} f(x) = f(p)'}</InlineMath>
          </li>
        </ol>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Continuity in ε-δ Form</p>
        <p className="mb-2">
          A function <InlineMath>{'f'}</InlineMath> is continuous at{' '}
          <InlineMath>{'p'}</InlineMath> if for every <InlineMath>{'\\varepsilon > 0'}</InlineMath>{' '}
          there is a <InlineMath>{'\\delta > 0'}</InlineMath> such that:
        </p>
        <MathBlock>{'|f(x) - f(p)| < \\varepsilon \\quad \\text{whenever} \\quad |x - p| < \\delta'}</MathBlock>
        <p className="mt-2">
          Note: Unlike the limit definition, we don't need <InlineMath>{'x \\neq p'}</InlineMath>{' '}
          here because <InlineMath>{'f(p)'}</InlineMath> always belongs to any neighborhood
          of itself.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Types of Discontinuities</h2>

      <Callout type="definition">
        <p className="font-semibold mb-2">Jump Discontinuity</p>
        <p>
          A discontinuity where the right-hand and left-hand limits both exist but are unequal.
          Such discontinuities <em>cannot</em> be removed by simply changing the value of{' '}
          <InlineMath>{'f'}</InlineMath> at one point.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Infinite Discontinuity</p>
        <p>
          A discontinuity where the function takes arbitrarily large values near the point.
          For example, <InlineMath>{'f(x) = 1/x^2'}</InlineMath> (with{' '}
          <InlineMath>{'f(0) = 0'}</InlineMath>) has an infinite discontinuity at 0.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Removable Discontinuity</p>
        <p>
          A discontinuity where the limit exists but is not equal to{' '}
          <InlineMath>{'f(p)'}</InlineMath>. Such discontinuities <em>can</em> be removed by
          redefining the function at that point to equal the limit.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Continuous Functions</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Constant Functions are Continuous Everywhere</p>
        <p>
          If <InlineMath>{'f(x) = c'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>, then
          for every <InlineMath>{'p'}</InlineMath>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} c = c = f(p)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">The Identity Function is Continuous Everywhere</p>
        <p>
          If <InlineMath>{'f(x) = x'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>, then
          for every <InlineMath>{'p'}</InlineMath>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} x = p = f(p)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Greatest-Integer Function</p>
        <p className="mb-2">
          <InlineMath>{'f(x) = [x]'}</InlineMath> is continuous at every point{' '}
          <InlineMath>{'p'}</InlineMath> which is <em>not</em> an integer. At integers, it has
          jump discontinuities. Since the right-hand limit equals{' '}
          <InlineMath>{'f(p)'}</InlineMath> at each integer, we say{' '}
          <InlineMath>{'f'}</InlineMath> is <strong>continuous from the right</strong> at integers.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Neighborhood:</strong> <InlineMath>{'N(p; r) = \\{x : |x - p| < r\\}'}</InlineMath>
        </li>
        <li>
          <strong>Limit:</strong> <InlineMath>{'\\lim_{x \\to p} f(x) = A'}</InlineMath> means
          for every <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there exists{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
          <InlineMath>{'|f(x) - A| < \\varepsilon'}</InlineMath> whenever{' '}
          <InlineMath>{'0 < |x - p| < \\delta'}</InlineMath>
        </li>
        <li>
          <strong>One-sided limits:</strong> Restrict <InlineMath>{'x'}</InlineMath> to be
          greater than (<InlineMath>{'p^+'}</InlineMath>) or less than (
          <InlineMath>{'p^-'}</InlineMath>) the point
        </li>
        <li>
          <strong>Continuity:</strong> <InlineMath>{'f'}</InlineMath> is continuous at{' '}
          <InlineMath>{'p'}</InlineMath> if <InlineMath>{'f(p)'}</InlineMath> exists and{' '}
          <InlineMath>{'\\lim_{x \\to p} f(x) = f(p)'}</InlineMath>
        </li>
        <li>
          <strong>Discontinuities:</strong> Jump (one-sided limits differ), infinite (unbounded
          near point), removable (limit exists but differs from function value)
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The ε-δ definition of limit, though initially abstract, provides a rigorous foundation
        for all of calculus. In the next section, we will see how these concepts combine with
        algebraic operations on limits.
      </p>
    </LessonLayout>
  );
}
