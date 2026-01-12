import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-semibold mb-4">Discontinuities</h2>

      <p className="mb-4">
        If <InlineMath>{'x'}</InlineMath> is a point in the domain of definition of the function{' '}
        <InlineMath>{'f'}</InlineMath> at which <InlineMath>{'f'}</InlineMath> is not continuous,
        we say that <InlineMath>{'f'}</InlineMath> is <em>discontinuous</em> at{' '}
        <InlineMath>{'x'}</InlineMath>, or that <InlineMath>{'f'}</InlineMath> has a{' '}
        <em>discontinuity</em> at <InlineMath>{'x'}</InlineMath>. If{' '}
        <InlineMath>{'f'}</InlineMath> is defined on an interval or on a segment, it is customary
        to divide discontinuities into two types.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">One-Sided Limits</h3>

      <Definition title="4.25 Right-hand and Left-hand Limits">
        <p>
          Let <InlineMath>{'f'}</InlineMath> be defined on <InlineMath>{'(a, b)'}</InlineMath>.
          Consider any point <InlineMath>{'x'}</InlineMath> such that{' '}
          <InlineMath>{'a \\leq x < b'}</InlineMath>. We write
        </p>
        <MathBlock>{'f(x+) = q'}</MathBlock>
        <p>
          if <InlineMath>{'f(t_n) \\to q'}</InlineMath> as{' '}
          <InlineMath>{'n \\to \\infty'}</InlineMath>, for all sequences{' '}
          <InlineMath>{'\\{t_n\\}'}</InlineMath> in <InlineMath>{'(x, b)'}</InlineMath> such that{' '}
          <InlineMath>{'t_n \\to x'}</InlineMath>. To obtain the definition of{' '}
          <InlineMath>{'f(x-)'}</InlineMath>, for <InlineMath>{'a < x \\leq b'}</InlineMath>, we
          restrict ourselves to sequences <InlineMath>{'\\{t_n\\}'}</InlineMath> in{' '}
          <InlineMath>{'(a, x)'}</InlineMath>.
        </p>
        <p className="mt-2">
          It is clear that any point <InlineMath>{'x'}</InlineMath> of{' '}
          <InlineMath>{'(a, b)'}</InlineMath>, <InlineMath>{'\\lim_{t \\to x} f(t)'}</InlineMath>{' '}
          exists if and only if
        </p>
        <MathBlock>{'f(x+) = f(x-) = \\lim_{t \\to x} f(t).'}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Types of Discontinuities</h3>

      <Definition title="4.26 Simple and Second Kind Discontinuities">
        <p>
          Let <InlineMath>{'f'}</InlineMath> be defined on <InlineMath>{'(a, b)'}</InlineMath>. If{' '}
          <InlineMath>{'f'}</InlineMath> is discontinuous at a point{' '}
          <InlineMath>{'x'}</InlineMath>, and if <InlineMath>{'f(x+)'}</InlineMath> and{' '}
          <InlineMath>{'f(x-)'}</InlineMath> exist, then <InlineMath>{'f'}</InlineMath> is said to
          have a discontinuity of the <em>first kind</em>, or a <em>simple discontinuity</em>, at{' '}
          <InlineMath>{'x'}</InlineMath>. Otherwise the discontinuity is said to be of the{' '}
          <em>second kind</em>.
        </p>
        <p className="mt-2">
          There are two ways in which a function can have a simple discontinuity: either{' '}
          <InlineMath>{'f(x+) \\neq f(x-)'}</InlineMath> [in which case the value{' '}
          <InlineMath>{'f(x)'}</InlineMath> is immaterial], or{' '}
          <InlineMath>{'f(x-) \\neq f(x)'}</InlineMath>.
        </p>
      </Definition>

      <Example title="4.27 Examples of Discontinuities">
        <p>(a) Define</p>
        <MathBlock>
          {'f(x) = \\begin{cases} 1 & (x \\text{ rational}), \\\\ 0 & (x \\text{ irrational}). \\end{cases}'}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>{'f'}</InlineMath> has a discontinuity of the second kind at every
          point <InlineMath>{'x'}</InlineMath>, since neither{' '}
          <InlineMath>{'f(x+)'}</InlineMath> nor <InlineMath>{'f(x-)'}</InlineMath> exists.
        </p>

        <p className="mt-4">(b) Define</p>
        <MathBlock>
          {'f(x) = \\begin{cases} x & (x \\text{ rational}), \\\\ 0 & (x \\text{ irrational}). \\end{cases}'}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'x = 0'}</InlineMath>{' '}
          and has a discontinuity of the second kind at every other point.
        </p>

        <p className="mt-4">(c) Define</p>
        <MathBlock>
          {'f(x) = \\begin{cases} x + 2 & (-3 < x < -2), \\\\ -x - 2 & (-2 \\leq x < 0), \\\\ x + 2 & (0 \\leq x < 1). \\end{cases}'}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>{'f'}</InlineMath> has a simple discontinuity at{' '}
          <InlineMath>{'x = 0'}</InlineMath> and is continuous at every other point of{' '}
          <InlineMath>{'(-3, 1)'}</InlineMath>.
        </p>

        <p className="mt-4">(d) Define</p>
        <MathBlock>
          {'f(x) = \\begin{cases} \\sin \\frac{1}{x} & (x \\neq 0), \\\\ 0 & (x = 0). \\end{cases}'}
        </MathBlock>
        <p className="mt-2">
          Since neither <InlineMath>{'f(0+)'}</InlineMath> nor{' '}
          <InlineMath>{'f(0-)'}</InlineMath> exists, <InlineMath>{'f'}</InlineMath> has a
          discontinuity of the second kind at <InlineMath>{'x = 0'}</InlineMath>. We have not yet
          shown that <InlineMath>{'\\sin x'}</InlineMath> is a continuous function. If we assume
          this result for the moment, Theorem 4.7 implies that{' '}
          <InlineMath>{'f'}</InlineMath> is continuous at every point{' '}
          <InlineMath>{'x \\neq 0'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Important Observation:</strong> The function in Example 4.27(d) satisfies the
          intermediate value property on any interval containing 0, even though it has a
          discontinuity of the second kind at 0. This shows that the converse of the Intermediate
          Value Theorem (Theorem 4.23) is false.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Jump Discontinuities</h3>

      <p className="my-4">
        When <InlineMath>{'f(x+)'}</InlineMath> and <InlineMath>{'f(x-)'}</InlineMath> both exist
        but are not equal, we say <InlineMath>{'f'}</InlineMath> has a <em>jump discontinuity</em>{' '}
        at <InlineMath>{'x'}</InlineMath>. The <em>jump</em> is defined as the difference{' '}
        <InlineMath>{'f(x+) - f(x-)'}</InlineMath>.
      </p>

      <Example title="Step Function">
        <p>
          The function <InlineMath>{'f(x) = \\lfloor x \\rfloor'}</InlineMath> (the greatest
          integer less than or equal to <InlineMath>{'x'}</InlineMath>) has jump discontinuities
          at every integer <InlineMath>{'n'}</InlineMath>. We have
        </p>
        <MathBlock>{'f(n-) = n - 1, \\quad f(n+) = n,'}</MathBlock>
        <p>
          so the jump at each integer is 1. The function is continuous at all non-integer points.
        </p>
      </Example>

      <Example title="Removable Discontinuity">
        <p>
          Consider <InlineMath>{'f(x) = \\frac{\\sin x}{x}'}</InlineMath> for{' '}
          <InlineMath>{'x \\neq 0'}</InlineMath>. This function is undefined at{' '}
          <InlineMath>{'x = 0'}</InlineMath>, but
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1.'}</MathBlock>
        <p className="mt-2">
          If we define <InlineMath>{'f(0) = 1'}</InlineMath>, then{' '}
          <InlineMath>{'f'}</InlineMath> becomes continuous on all of{' '}
          <InlineMath>{'\\mathbb{R}'}</InlineMath>. The original discontinuity at 0 is called a{' '}
          <em>removable discontinuity</em> because it can be "removed" by appropriately defining{' '}
          <InlineMath>{'f(0)'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key concepts of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 4.25: One-sided limits <InlineMath>{'f(x+)'}</InlineMath> and{' '}
          <InlineMath>{'f(x-)'}</InlineMath>
        </li>
        <li>
          Definition 4.26: A discontinuity is of the first kind (simple) if both one-sided limits
          exist
        </li>
        <li>
          Jump discontinuities occur when{' '}
          <InlineMath>{'f(x+) \\neq f(x-)'}</InlineMath>
        </li>
        <li>
          Removable discontinuities occur when{' '}
          <InlineMath>{'f(x+) = f(x-) \\neq f(x)'}</InlineMath>
        </li>
        <li>
          Discontinuities of the second kind occur when at least one of the one-sided limits fails
          to exist
        </li>
      </ul>
    </LessonLayout>
  );
}
