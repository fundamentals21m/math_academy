import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section115() {
  return (
    <LessonLayout sectionId={115}>
      <h2>The Double Integral of a Step Function</h2>

      <p>
        We now define the double integral for step functions, which will serve as
        the foundation for the general definition.
      </p>

      <h3>Setup</h3>

      <p>
        Let <InlineMath>{'P = P_1 \\times P_2'}</InlineMath> be a partition of a
        rectangle <InlineMath>Q</InlineMath> into <InlineMath>mn</InlineMath>{' '}
        subrectangles, and let <InlineMath>f</InlineMath> be a step function that is
        constant on the open subrectangles of <InlineMath>Q</InlineMath>.
      </p>

      <p>
        Let the subrectangle determined by{' '}
        <InlineMath>{'[x_{i-1}, x_i]'}</InlineMath> and{' '}
        <InlineMath>{'[y_{j-1}, y_j]'}</InlineMath> be denoted by{' '}
        <InlineMath>{`Q_{ij}`}</InlineMath>, and let <InlineMath>{`c_{ij}`}</InlineMath>{' '}
        denote the constant value that <InlineMath>f</InlineMath> takes at the interior
        points of <InlineMath>{`Q_{ij}`}</InlineMath>.
      </p>

      <h3>Geometric Interpretation</h3>

      <p>
        If <InlineMath>f</InlineMath> is positive, the volume of the rectangular box
        with base <InlineMath>{`Q_{ij}`}</InlineMath> and altitude{' '}
        <InlineMath>{`c_{ij}`}</InlineMath> is the product:
      </p>
      <MathBlock>
        {`c_{ij} \\cdot (x_i - x_{i-1})(y_j - y_{j-1})`}
      </MathBlock>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>f</InlineMath> be a step function
        which takes the constant value <InlineMath>{`c_{ij}`}</InlineMath> on the open
        subrectangle{' '}
        <InlineMath>{'(x_{i-1}, x_i) \\times (y_{j-1}, y_j)'}</InlineMath> of a rectangle{' '}
        <InlineMath>Q</InlineMath>. The <strong>double integral</strong> of{' '}
        <InlineMath>f</InlineMath> over <InlineMath>Q</InlineMath> is defined by:
        <MathBlock>
          {`\\iint_Q f = \\sum_{i=1}^n \\sum_{j=1}^m c_{ij} \\cdot (x_i - x_{i-1})(y_j - y_{j-1})`}
        </MathBlock>
      </Callout>

      <p>
        As in the one-dimensional case, the value of the integral does not change if
        the partition <InlineMath>P</InlineMath> is replaced by any finer partition{' '}
        <InlineMath>P'</InlineMath>. Thus, the value of the integral is independent of
        the choice of <InlineMath>P</InlineMath> so long as <InlineMath>f</InlineMath>{' '}
        is constant on the open subrectangles of <InlineMath>Q</InlineMath>.
      </p>

      <h3>Alternative Notation</h3>

      <p>
        For brevity, we sometimes write <InlineMath>{'\\Delta x_i'}</InlineMath> instead
        of <InlineMath>{'(x_i - x_{i-1})'}</InlineMath> and{' '}
        <InlineMath>{'\\Delta y_j'}</InlineMath> instead of{' '}
        <InlineMath>{'(y_j - y_{j-1})'}</InlineMath>, so the sum becomes:
      </p>
      <MathBlock>
        {`\\sum_{i=1}^n \\sum_{j=1}^m c_{ij} \\, \\Delta x_i \\, \\Delta y_j`}
      </MathBlock>

      <p>
        To remind ourselves how this sum is formed, we write the symbol for the integral as:
      </p>
      <MathBlock>
        {`\\iint_Q f(x, y) \\, dx \\, dy`}
      </MathBlock>

      <h3>Constant Functions</h3>

      <p>
        If <InlineMath>f</InlineMath> is constant on the interior of{' '}
        <InlineMath>Q</InlineMath>, say{' '}
        <InlineMath>{'f(x, y) = k'}</InlineMath> when{' '}
        <InlineMath>{'a < x < b'}</InlineMath> and{' '}
        <InlineMath>{'c < y < d'}</InlineMath>, we have:
      </p>
      <MathBlock>
        {`\\iint_Q f = k(b - a)(d - c)`}
      </MathBlock>

      <p>
        Since <InlineMath>{'b - a = \\int_a^b dx'}</InlineMath> and{' '}
        <InlineMath>{'d - c = \\int_c^d dy'}</InlineMath>, this can also be written as:
      </p>
      <MathBlock>
        {`\\iint_Q f = \\int_c^d \\left[ \\int_a^b f(x, y) \\, dx \\right] dy = \\int_a^b \\left[ \\int_c^d f(x, y) \\, dy \\right] dx`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The double integral of a step function is a
        weighted sum of the function values on each subrectangle, weighted by the area
        of that subrectangle. For constant functions, the double integral equals the
        constant times the area of the rectangle. This definition provides the
        foundation for extending to general bounded functions.
      </Callout>
    </LessonLayout>
  );
}
