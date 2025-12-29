import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          Any open interval containing a point <MathInline>{'p'}</MathInline> as its midpoint
          is called a <strong>neighborhood</strong> of <MathInline>{'p'}</MathInline>.
        </p>
        <p className="mb-2">
          We denote neighborhoods by <MathInline>{'N(p)'}</MathInline>,{' '}
          <MathInline>{'N_1(p)'}</MathInline>, <MathInline>{'N_2(p)'}</MathInline>, etc.
        </p>
        <p>
          The neighborhood <MathInline>{'N(p; r)'}</MathInline> with <strong>radius</strong>{' '}
          <MathInline>{'r > 0'}</MathInline> consists of all points{' '}
          <MathInline>{'x'}</MathInline> satisfying:
        </p>
        <MathBlock>{'|x - p| < r \\quad \\Leftrightarrow \\quad p - r < x < p + r'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        In other words, <MathInline>{'N(p; r)'}</MathInline> consists of all points whose
        distance from <MathInline>{'p'}</MathInline> is less than <MathInline>{'r'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of Limit</h2>

      <p className="text-dark-200 mb-4">
        Let <MathInline>{'f'}</MathInline> be a function defined in some open interval containing
        a point <MathInline>{'p'}</MathInline>, although we do not insist that{' '}
        <MathInline>{'f'}</MathInline> be defined at <MathInline>{'p'}</MathInline> itself.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Limit of a Function (Neighborhood Form)</p>
        <p className="mb-2">
          The symbolism <MathInline>{'\\lim_{x \\to p} f(x) = A'}</MathInline> means that for
          every neighborhood <MathInline>{'N_1(A)'}</MathInline> there is some neighborhood{' '}
          <MathInline>{'N_2(p)'}</MathInline> such that:
        </p>
        <MathBlock>{'f(x) \\in N_1(A) \\quad \\text{whenever} \\quad x \\in N_2(p) \\text{ and } x \\neq p'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        The definition involves <em>two</em> neighborhoods:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <MathInline>{'N_1(A)'}</MathInline> tells us how close we wish{' '}
          <MathInline>{'f(x)'}</MathInline> to be to the limit <MathInline>{'A'}</MathInline>
        </li>
        <li>
          <MathInline>{'N_2(p)'}</MathInline> tells us how close <MathInline>{'x'}</MathInline>{' '}
          should be to <MathInline>{'p'}</MathInline> so that{' '}
          <MathInline>{'f(x)'}</MathInline> will be within <MathInline>{'N_1(A)'}</MathInline>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The essential part: for <em>every</em> <MathInline>{'N_1(A)'}</MathInline>, no matter
        how small, there is <em>some</em> neighborhood <MathInline>{'N_2(p)'}</MathInline> to
        satisfy the condition.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">The ε-δ Definition</h3>

      <p className="text-dark-200 mb-4">
        The definition of limit can also be formulated in terms of the <em>radii</em> of the
        neighborhoods. It is customary to denote the radius of{' '}
        <MathInline>{'N_1(A)'}</MathInline> by <MathInline>{'\\varepsilon'}</MathInline>{' '}
        (epsilon) and the radius of <MathInline>{'N_2(p)'}</MathInline> by{' '}
        <MathInline>{'\\delta'}</MathInline> (delta).
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Limit of a Function (ε-δ Form)</p>
        <p className="mb-2">
          The symbol <MathInline>{'\\lim_{x \\to p} f(x) = A'}</MathInline> means that for every{' '}
          <MathInline>{'\\varepsilon > 0'}</MathInline>, there is a{' '}
          <MathInline>{'\\delta > 0'}</MathInline> such that:
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
          Let <MathInline>{'f(x) = c'}</MathInline> for all <MathInline>{'x'}</MathInline>.
          For every <MathInline>{'p'}</MathInline>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} c = c'}</MathBlock>
        <p className="mt-2">
          Given any neighborhood <MathInline>{'N_1(c)'}</MathInline>, relation is trivially
          satisfied for any choice of <MathInline>{'N_2(p)'}</MathInline> because{' '}
          <MathInline>{'f(x) = c'}</MathInline> for all <MathInline>{'x'}</MathInline>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Limit of the Identity Function</p>
        <p className="mb-2">
          Let <MathInline>{'f(x) = x'}</MathInline> for all <MathInline>{'x'}</MathInline>.
          For every <MathInline>{'p'}</MathInline>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} x = p'}</MathBlock>
        <p className="mt-2">
          Choose any neighborhood <MathInline>{'N_1(p)'}</MathInline> and take{' '}
          <MathInline>{'N_2(p) = N_1(p)'}</MathInline>. Then the relation is trivially satisfied.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">One-Sided Limits</h2>

      <p className="text-dark-200 mb-4">
        "One-sided" limits may be defined in a similar way.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Right-Hand and Left-Hand Limits</p>
        <p className="mb-2">
          If <MathInline>{'f(x) \\to A'}</MathInline> as{' '}
          <MathInline>{'x \\to p'}</MathInline> through values <strong>greater than</strong>{' '}
          <MathInline>{'p'}</MathInline>, we write:
        </p>
        <MathBlock>{'\\lim_{x \\to p^+} f(x) = A \\quad \\text{(right-hand limit)}'}</MathBlock>
        <p className="mt-2 mb-2">
          If <MathInline>{'f(x) \\to A'}</MathInline> as{' '}
          <MathInline>{'x \\to p'}</MathInline> through values <strong>less than</strong>{' '}
          <MathInline>{'p'}</MathInline>, we write:
        </p>
        <MathBlock>{'\\lim_{x \\to p^-} f(x) = A \\quad \\text{(left-hand limit)}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        If <MathInline>{'f'}</MathInline> has a limit <MathInline>{'A'}</MathInline> at{' '}
        <MathInline>{'p'}</MathInline>, then it also has a right-hand limit and a left-hand
        limit at <MathInline>{'p'}</MathInline>, both equal to <MathInline>{'A'}</MathInline>.
        But a function can have unequal one-sided limits, in which case the (two-sided) limit
        does not exist.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Greatest-Integer Function</p>
        <p className="mb-2">
          Let <MathInline>{'f(x) = [x]'}</MathInline> and let <MathInline>{'p'}</MathInline> be
          any integer. For <MathInline>{'x'}</MathInline> near <MathInline>{'p'}</MathInline>:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>
            If <MathInline>{'x < p'}</MathInline>, then{' '}
            <MathInline>{'f(x) = p - 1'}</MathInline>
          </li>
          <li>
            If <MathInline>{'x > p'}</MathInline>, then{' '}
            <MathInline>{'f(x) = p'}</MathInline>
          </li>
        </ul>
        <MathBlock>{'\\lim_{x \\to p^-} [x] = p - 1, \\quad \\lim_{x \\to p^+} [x] = p'}</MathBlock>
        <p className="mt-2">
          Since these are unequal, <MathInline>{'\\lim_{x \\to p} [x]'}</MathInline> does not
          exist at integers.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Definition of Continuity</h2>

      <p className="text-dark-200 mb-4">
        In the definition of limit, we made no assertion about the behavior of{' '}
        <MathInline>{'f'}</MathInline> at the point <MathInline>{'p'}</MathInline> itself.
        Even if <MathInline>{'f'}</MathInline> is defined at <MathInline>{'p'}</MathInline>,
        its value there need not equal the limit. However, when both conditions hold, we have
        continuity.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Continuity at a Point</p>
        <p className="mb-2">
          A function <MathInline>{'f'}</MathInline> is said to be <strong>continuous</strong>{' '}
          at a point <MathInline>{'p'}</MathInline> if:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <MathInline>{'f'}</MathInline> is defined at <MathInline>{'p'}</MathInline>, and
          </li>
          <li>
            <MathInline>{'\\displaystyle\\lim_{x \\to p} f(x) = f(p)'}</MathInline>
          </li>
        </ol>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Continuity in ε-δ Form</p>
        <p className="mb-2">
          A function <MathInline>{'f'}</MathInline> is continuous at{' '}
          <MathInline>{'p'}</MathInline> if for every <MathInline>{'\\varepsilon > 0'}</MathInline>{' '}
          there is a <MathInline>{'\\delta > 0'}</MathInline> such that:
        </p>
        <MathBlock>{'|f(x) - f(p)| < \\varepsilon \\quad \\text{whenever} \\quad |x - p| < \\delta'}</MathBlock>
        <p className="mt-2">
          Note: Unlike the limit definition, we don't need <MathInline>{'x \\neq p'}</MathInline>{' '}
          here because <MathInline>{'f(p)'}</MathInline> always belongs to any neighborhood
          of itself.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Types of Discontinuities</h2>

      <Callout type="definition">
        <p className="font-semibold mb-2">Jump Discontinuity</p>
        <p>
          A discontinuity where the right-hand and left-hand limits both exist but are unequal.
          Such discontinuities <em>cannot</em> be removed by simply changing the value of{' '}
          <MathInline>{'f'}</MathInline> at one point.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Infinite Discontinuity</p>
        <p>
          A discontinuity where the function takes arbitrarily large values near the point.
          For example, <MathInline>{'f(x) = 1/x^2'}</MathInline> (with{' '}
          <MathInline>{'f(0) = 0'}</MathInline>) has an infinite discontinuity at 0.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Removable Discontinuity</p>
        <p>
          A discontinuity where the limit exists but is not equal to{' '}
          <MathInline>{'f(p)'}</MathInline>. Such discontinuities <em>can</em> be removed by
          redefining the function at that point to equal the limit.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Continuous Functions</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Constant Functions are Continuous Everywhere</p>
        <p>
          If <MathInline>{'f(x) = c'}</MathInline> for all <MathInline>{'x'}</MathInline>, then
          for every <MathInline>{'p'}</MathInline>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} c = c = f(p)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">The Identity Function is Continuous Everywhere</p>
        <p>
          If <MathInline>{'f(x) = x'}</MathInline> for all <MathInline>{'x'}</MathInline>, then
          for every <MathInline>{'p'}</MathInline>:
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = \\lim_{x \\to p} x = p = f(p)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Greatest-Integer Function</p>
        <p className="mb-2">
          <MathInline>{'f(x) = [x]'}</MathInline> is continuous at every point{' '}
          <MathInline>{'p'}</MathInline> which is <em>not</em> an integer. At integers, it has
          jump discontinuities. Since the right-hand limit equals{' '}
          <MathInline>{'f(p)'}</MathInline> at each integer, we say{' '}
          <MathInline>{'f'}</MathInline> is <strong>continuous from the right</strong> at integers.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Neighborhood:</strong> <MathInline>{'N(p; r) = \\{x : |x - p| < r\\}'}</MathInline>
        </li>
        <li>
          <strong>Limit:</strong> <MathInline>{'\\lim_{x \\to p} f(x) = A'}</MathInline> means
          for every <MathInline>{'\\varepsilon > 0'}</MathInline>, there exists{' '}
          <MathInline>{'\\delta > 0'}</MathInline> such that{' '}
          <MathInline>{'|f(x) - A| < \\varepsilon'}</MathInline> whenever{' '}
          <MathInline>{'0 < |x - p| < \\delta'}</MathInline>
        </li>
        <li>
          <strong>One-sided limits:</strong> Restrict <MathInline>{'x'}</MathInline> to be
          greater than (<MathInline>{'p^+'}</MathInline>) or less than (
          <MathInline>{'p^-'}</MathInline>) the point
        </li>
        <li>
          <strong>Continuity:</strong> <MathInline>{'f'}</MathInline> is continuous at{' '}
          <MathInline>{'p'}</MathInline> if <MathInline>{'f(p)'}</MathInline> exists and{' '}
          <MathInline>{'\\lim_{x \\to p} f(x) = f(p)'}</MathInline>
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
