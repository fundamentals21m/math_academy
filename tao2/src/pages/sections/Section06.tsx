import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Continuity and Product Spaces</h2>

      <p className="mb-4">
        Given two functions <InlineMath>{`f : X \\to Y`}</InlineMath> and{' '}
        <InlineMath>{`g : X \\to Z`}</InlineMath>, one can define their <strong>direct sum</strong>{' '}
        <InlineMath>{`f \\oplus g : X \\to Y \\times Z`}</InlineMath> defined by{' '}
        <InlineMath>{`f \\oplus g(x) := (f(x), g(x))`}</InlineMath>. This is the function taking
        values in the Cartesian product <InlineMath>{`Y \\times Z`}</InlineMath> whose first
        coordinate is <InlineMath>{`f(x)`}</InlineMath> and whose second coordinate is{' '}
        <InlineMath>{`g(x)`}</InlineMath>.
      </p>

      <Example title="Direct Sum Example">
        <p>
          If <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is the function{' '}
          <InlineMath>{`f(x) := x^2 + 3`}</InlineMath>, and{' '}
          <InlineMath>{`g : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is the function{' '}
          <InlineMath>{`g(x) = 4x`}</InlineMath>, then{' '}
          <InlineMath>{`f \\oplus g : \\mathbf{R} \\to \\mathbf{R}^2`}</InlineMath> is the
          function:
        </p>
        <MathBlock>{`f \\oplus g(x) := (x^2 + 3, 4x)`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Direct Sum Preserves Continuity
      </h3>

      <Definition title="Continuity of Direct Sums">
        <p>
          Let <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : X \\to \\mathbf{R}`}</InlineMath> be functions, and let{' '}
          <InlineMath>{`f \\oplus g : X \\to \\mathbf{R}^2`}</InlineMath> be their direct sum.
          We give <InlineMath>{`\\mathbf{R}^2`}</InlineMath> the Euclidean metric.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If <InlineMath>{`x_0 \\in X`}</InlineMath>, then <InlineMath>f</InlineMath> and{' '}
            <InlineMath>g</InlineMath> are both continuous at <InlineMath>x_0</InlineMath> if and
            only if <InlineMath>{`f \\oplus g`}</InlineMath> is continuous at{' '}
            <InlineMath>x_0</InlineMath>.
          </li>
          <li>
            <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are both continuous if and
            only if <InlineMath>{`f \\oplus g`}</InlineMath> is continuous.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Arithmetic Operations</h3>

      <Definition title="Continuity of Arithmetic Functions">
        <p>The following functions are all continuous:</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            The <strong>addition</strong> function{' '}
            <InlineMath>{`(x, y) \\mapsto x + y`}</InlineMath> from{' '}
            <InlineMath>{`\\mathbf{R}^2`}</InlineMath> to <InlineMath>{`\\mathbf{R}`}</InlineMath>
          </li>
          <li>
            The <strong>subtraction</strong> function{' '}
            <InlineMath>{`(x, y) \\mapsto x - y`}</InlineMath>
          </li>
          <li>
            The <strong>multiplication</strong> function{' '}
            <InlineMath>{`(x, y) \\mapsto xy`}</InlineMath>
          </li>
          <li>
            The <strong>maximum</strong> function{' '}
            <InlineMath>{`(x, y) \\mapsto \\max(x, y)`}</InlineMath>
          </li>
          <li>
            The <strong>minimum</strong> function{' '}
            <InlineMath>{`(x, y) \\mapsto \\min(x, y)`}</InlineMath>
          </li>
          <li>
            The <strong>division</strong> function <InlineMath>{`(x, y) \\mapsto x/y`}</InlineMath>{' '}
            from <InlineMath>{`\\mathbf{R} \\times (\\mathbf{R}\\setminus\\{0\\})`}</InlineMath> to{' '}
            <InlineMath>{`\\mathbf{R}`}</InlineMath>
          </li>
          <li>
            For any real number <InlineMath>c</InlineMath>, the function{' '}
            <InlineMath>{`x \\mapsto cx`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Algebra of Continuous Functions
      </h3>

      <Definition title="Operations on Continuous Functions">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : X \\to \\mathbf{R}`}</InlineMath> be functions. Let{' '}
          <InlineMath>c</InlineMath> be a real number.
        </p>
        <p className="mt-2">
          If <InlineMath>{`x_0 \\in X`}</InlineMath> and <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath> are continuous at <InlineMath>x_0</InlineMath>, then the
          following functions are also continuous at <InlineMath>x_0</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>{`f + g : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f - g : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`fg : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\max(f, g) : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\min(f, g) : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`cf : X \\to \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f/g : X \\to \\mathbf{R}`}</InlineMath> (if{' '}
            <InlineMath>{`g(x) \\neq 0`}</InlineMath> for all <InlineMath>{`x \\in X`}</InlineMath>)
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Absolute Value">
        <p>
          If <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> is a continuous function, so is
          the function <InlineMath>{`|f| : X \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`|f|(x) := |f(x)|`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coordinate Functions</h3>

      <Example title="Coordinate Functions are Continuous">
        <p>
          Let <InlineMath>{`\\pi_1 : \\mathbf{R}^2 \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`\\pi_2 : \\mathbf{R}^2 \\to \\mathbf{R}`}</InlineMath> be the functions{' '}
          <InlineMath>{`\\pi_1(x, y) := x`}</InlineMath> and{' '}
          <InlineMath>{`\\pi_2(x, y) := y`}</InlineMath>. These two functions are sometimes called
          the <em>coordinate functions</em> on <InlineMath>{`\\mathbf{R}^2`}</InlineMath>.
        </p>
        <p className="mt-2">
          Both <InlineMath>{`\\pi_1`}</InlineMath> and <InlineMath>{`\\pi_2`}</InlineMath> are
          continuous. This implies that if <InlineMath>{`f : X \\to \\mathbf{R}^2`}</InlineMath>{' '}
          is continuous, then both of its coordinate functions are continuous.
        </p>
      </Example>

      <Definition title="Polynomials of Two Variables">
        <p>
          Let <InlineMath>{`n, m \\geq 0`}</InlineMath> be integers. Suppose that for every{' '}
          <InlineMath>{`0 \\leq i \\leq n`}</InlineMath> and{' '}
          <InlineMath>{`0 \\leq j \\leq m`}</InlineMath> we have a real number{' '}
          <InlineMath>{`c_{ij}`}</InlineMath>. Form the function{' '}
          <InlineMath>{`P : \\mathbf{R}^2 \\to \\mathbf{R}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`P(x, y) := \\sum_{i=0}^{n} \\sum_{j=0}^{m} c_{ij} x^i y^j`}</MathBlock>
        <p className="mt-2">
          Such a function is known as a <strong>polynomial of two variables</strong>. A typical
          example is <InlineMath>{`P(x, y) = x^3 + 2xy^2 - x^2 + 3y + 6`}</InlineMath>.
        </p>
        <p className="mt-2">
          Every polynomial of two variables is <strong>continuous</strong>.
        </p>
      </Definition>

      <Callout type="warning" title="Joint vs. Separate Continuity">
        <p>
          A function <InlineMath>{`f(x, y)`}</InlineMath> which is jointly continuous in{' '}
          <InlineMath>(x, y)</InlineMath> is also continuous in each variable{' '}
          <InlineMath>x</InlineMath>, <InlineMath>y</InlineMath> separately.
        </p>
        <p className="mt-2">
          However, the converse is false! It is possible to be continuous in each variable
          separately without being jointly continuous. For example, the function{' '}
          <InlineMath>{`f(x, y) := \\frac{xy}{x^2 + y^2}`}</InlineMath> when{' '}
          <InlineMath>{`(x, y) \\neq (0, 0)`}</InlineMath> and{' '}
          <InlineMath>{`f(0, 0) = 0`}</InlineMath> is continuous in each variable separately but
          not jointly continuous at the origin.
        </p>
      </Callout>
    </LessonLayout>
  );
}
