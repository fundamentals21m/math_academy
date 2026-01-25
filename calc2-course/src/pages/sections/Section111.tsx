import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section111() {
  return (
    <LessonLayout sectionId={111}>
      <h2>Constructing Potential Functions</h2>

      <p>
        The first fundamental theorem for line integrals gives us a method for
        constructing potential functions. If <InlineMath>{'f'}</InlineMath> is a
        continuous gradient on an open connected set <InlineMath>{'S'}</InlineMath>, we
        can find a potential <InlineMath>{'\\varphi'}</InlineMath> by integrating{' '}
        <InlineMath>{'f'}</InlineMath> from some fixed point{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> to an arbitrary point{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath> in <InlineMath>{'S'}</InlineMath>, using any
        piecewise smooth path lying in <InlineMath>{'S'}</InlineMath>.
      </p>

      <h3>Method 1: Integration Along Coordinate Axes</h3>

      <p>
        If <InlineMath>{'f'}</InlineMath> is a continuous gradient on an open rectangle
        in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, a potential{' '}
        <InlineMath>{'\\varphi'}</InlineMath> can be constructed by integrating from a
        fixed point to an arbitrary point along line segments parallel to the
        coordinate axes.
      </p>

      <p>
        For a two-dimensional example, if{' '}
        <InlineMath>{'f(x, y) = f_1(x, y)\\mathbf{i} + f_2(x, y)\\mathbf{j}'}</InlineMath>,
        we can first integrate from <InlineMath>{'(a, b)'}</InlineMath> to{' '}
        <InlineMath>{'(x, b)'}</InlineMath> along a horizontal segment, then from{' '}
        <InlineMath>{'(x, b)'}</InlineMath> to <InlineMath>{'(x, y)'}</InlineMath> along a
        vertical segment:
      </p>
      <MathBlock>{`\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt`}</MathBlock>

      <p>
        Alternatively, integrate first vertically then horizontally:
      </p>
      <MathBlock>{`\\varphi(x, y) = \\int_b^y f_2(a, t) \\, dt + \\int_a^x f_1(t, y) \\, dt`}</MathBlock>

      <p>
        Both formulas give the same value because the line integral of a gradient
        is independent of the path.
      </p>

      <h3>Method 2: Using Indefinite Integrals</h3>

      <p>
        The use of indefinite integrals often simplifies the calculation. Suppose a
        three-dimensional vector field{' '}
        <InlineMath>{'f = (f_1, f_2, f_3)'}</InlineMath> is the gradient of a
        potential <InlineMath>{'\\varphi'}</InlineMath>. Then:
      </p>
      <MathBlock>{`\\frac{\\partial\\varphi}{\\partial x} = f_1, \\quad \\frac{\\partial\\varphi}{\\partial y} = f_2, \\quad \\frac{\\partial\\varphi}{\\partial z} = f_3`}</MathBlock>

      <p>
        Integrating the first equation with respect to <InlineMath>{'x'}</InlineMath>{' '}
        (holding <InlineMath>{'y'}</InlineMath> and <InlineMath>{'z'}</InlineMath> constant):
      </p>
      <MathBlock>{`\\varphi(x, y, z) = \\int f_1(x, y, z) \\, dx + A(y, z)`}</MathBlock>
      <p>
        where <InlineMath>{'A(y, z)'}</InlineMath> is a "constant of integration"
        (a function of <InlineMath>{'y'}</InlineMath> and <InlineMath>{'z'}</InlineMath>
        only).
      </p>

      <p>
        Similarly, integrating the other equations:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = \\int f_2(x, y, z) \\, dy + B(x, z)`}</MathBlock>
      <MathBlock>{`\\varphi(x, y, z) = \\int f_3(x, y, z) \\, dz + C(x, y)`}</MathBlock>

      <p>
        Finding <InlineMath>{'\\varphi'}</InlineMath> means finding three functions{' '}
        <InlineMath>{'A(y, z)'}</InlineMath>, <InlineMath>{'B(x, z)'}</InlineMath>,
        and <InlineMath>{'C(x, y)'}</InlineMath> such that all three equations agree.
      </p>

      <h3>Example</h3>

      <p>
        Find a potential function <InlineMath>{'\\varphi'}</InlineMath> for:
      </p>
      <MathBlock>{`f(x, y, z) = (2xyz + z^2 - 2y^2 + 1)\\mathbf{i} + (x^2z - 4xy)\\mathbf{j} + (x^2y + 2xz - 2)\\mathbf{k}`}</MathBlock>

      <p>
        <strong>Solution:</strong> Integrating <InlineMath>{'f_1'}</InlineMath> with
        respect to <InlineMath>{'x'}</InlineMath>:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = \\int (2xyz + z^2 - 2y^2 + 1) \\, dx + A(y, z) = x^2yz + xz^2 - 2xy^2 + x + A(y, z)`}</MathBlock>

      <p>
        Integrating <InlineMath>{'f_2'}</InlineMath> with respect to{' '}
        <InlineMath>{'y'}</InlineMath>:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = \\int (x^2z - 4xy) \\, dy + B(x, z) = x^2yz - 2xy^2 + B(x, z)`}</MathBlock>

      <p>
        Integrating <InlineMath>{'f_3'}</InlineMath> with respect to{' '}
        <InlineMath>{'z'}</InlineMath>:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = \\int (x^2y + 2xz - 2) \\, dz + C(x, y) = x^2yz + xz^2 - 2z + C(x, y)`}</MathBlock>

      <p>
        By inspection: <InlineMath>{'A(y, z) = -2z'}</InlineMath>,{' '}
        <InlineMath>{'B(x, z) = xz^2 + x - 2z'}</InlineMath>, and{' '}
        <InlineMath>{'C(x, y) = x - 2xy^2'}</InlineMath> make all three equations agree.
        Hence:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = x^2yz + xz^2 - 2xy^2 + x - 2z`}</MathBlock>

      <h3>Method 3: Integration on Convex Sets</h3>

      <p>
        A set <InlineMath>{'S'}</InlineMath> in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>{' '}
        is called <strong>convex</strong> if every pair of points in{' '}
        <InlineMath>{'S'}</InlineMath> can be joined by a line segment, all of whose
        points lie in <InlineMath>{'S'}</InlineMath>. Every open convex set is connected.
      </p>

      <p>
        If <InlineMath>{'f'}</InlineMath> is a continuous gradient on an open convex set
        and <InlineMath>{'S'}</InlineMath> contains the origin, we can use the line
        segment from <InlineMath>{'\\mathbf{0}'}</InlineMath> to{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath>:
      </p>
      <MathBlock>{`\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Multiple methods exist for constructing
        potentials: integration along coordinate axes, using indefinite integrals with
        comparison, or direct line integration on convex sets. The indefinite integral
        method is often most practical—integrate each component equation and match up
        the arbitrary functions to get a consistent potential.
      </Callout>
    </LessonLayout>
  );
}
