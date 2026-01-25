import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section134() {
  return (
    <LessonLayout sectionId={134}>
      <h2>Extensions to Higher Dimensions</h2>

      <p>
        The concept of multiple integral can be extended from 2-space to n-space
        for any <InlineMath>{'n \\geq 3'}</InlineMath>. The development is entirely
        analogous to the case <InlineMath>{'n = 2'}</InlineMath>.
      </p>

      <h3>N-Fold Integrals</h3>

      <p>
        The integrand is a scalar field <InlineMath>{'f'}</InlineMath> defined and
        bounded on a set <InlineMath>{'S'}</InlineMath> in n-space. The integral of{' '}
        <InlineMath>{'f'}</InlineMath> over <InlineMath>{'S'}</InlineMath>, called an{' '}
        <strong>n-fold integral</strong>, is denoted by:
      </p>
      <MathBlock>{`\\int \\cdots \\int_S f \\quad \\text{or} \\quad \\int \\cdots \\int_S f(x_1, \\ldots, x_n) \\, dx_1 \\cdots dx_n`}</MathBlock>

      <p>
        When <InlineMath>{'n = 3'}</InlineMath> we write{' '}
        <InlineMath>{'(x, y, z)'}</InlineMath> instead of{' '}
        <InlineMath>{'(x_1, x_2, x_3)'}</InlineMath> and denote triple integrals by:
      </p>
      <MathBlock>{`\\iiint_S f \\quad \\text{or} \\quad \\iiint_S f(x, y, z) \\, dx \\, dy \\, dz`}</MathBlock>

      <h3>Definition via Step Functions</h3>

      <p>
        The n-fold integral is first defined for step functions. A function{' '}
        <InlineMath>{'f'}</InlineMath> defined on an n-dimensional interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath> is called a <strong>step function</strong>{' '}
        if it is constant on each of the open subintervals determined by some
        partition <InlineMath>{'P'}</InlineMath>. The n-fold integral of such a step
        function is defined by the formula:
      </p>
      <MathBlock>{`\\int \\cdots \\int_{[a,b]} f = \\sum_i c_i v_i`}</MathBlock>

      <p>
        where <InlineMath>{'c_i'}</InlineMath> is the constant value that{' '}
        <InlineMath>{'f'}</InlineMath> takes on the ith open subinterval and{' '}
        <InlineMath>{'v_i'}</InlineMath> is the volume of the ith subinterval.
      </p>

      <h3>Integrability Conditions</h3>

      <Callout type="info">
        <strong>Theorem:</strong> As in the two-dimensional case, the integral
        exists if <InlineMath>{'f'}</InlineMath> is continuous on{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. It also exists if{' '}
        <InlineMath>{'f'}</InlineMath> is bounded on{' '}
        <InlineMath>{'[a, b]'}</InlineMath> and if the set of discontinuities of{' '}
        <InlineMath>{'f'}</InlineMath> has n-dimensional content 0.
      </Callout>

      <h3>Triple Integrals by Iteration</h3>

      <p>
        Suppose <InlineMath>{'S'}</InlineMath> is a set in 3-space described as follows:
      </p>
      <MathBlock>{`S = \\{(x, y, z) \\mid (x, y) \\in Q \\text{ and } \\varphi_1(x, y) \\leq z \\leq \\varphi_2(x, y)\\}`}</MathBlock>

      <p>
        where <InlineMath>{'Q'}</InlineMath> is a two-dimensional region, called the
        projection of <InlineMath>{'S'}</InlineMath> on the xy-plane, and{' '}
        <InlineMath>{'\\varphi_1'}</InlineMath>, <InlineMath>{'\\varphi_2'}</InlineMath>{' '}
        are continuous on <InlineMath>{'S'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Iteration Formula:</strong> If <InlineMath>{'f'}</InlineMath> is
        continuous on the interior of <InlineMath>{'S'}</InlineMath> we have:
        <MathBlock>{`\\iiint_S f(x, y, z) \\, dx \\, dy \\, dz = \\iint_Q \\left[ \\int_{\\varphi_1(x,y)}^{\\varphi_2(x,y)} f(x, y, z) \\, dz \\right] dx \\, dy`}</MathBlock>
      </Callout>

      <p>
        That is, for fixed <InlineMath>{'x'}</InlineMath> and{' '}
        <InlineMath>{'y'}</InlineMath>, the first integration is performed with respect
        to <InlineMath>{'z'}</InlineMath> from the lower boundary surface to the upper
        one. This reduces the calculation to a double integral over the projection{' '}
        <InlineMath>{'Q'}</InlineMath>.
      </p>

      <h3>Volume of an N-Dimensional Sphere</h3>

      <p>
        Let <InlineMath>{'S_n(a)'}</InlineMath> denote the n-dimensional solid
        sphere of radius <InlineMath>{'a'}</InlineMath>:
      </p>
      <MathBlock>{`S_n(a) = \\{(x_1, \\ldots, x_n) \\mid x_1^2 + \\cdots + x_n^2 \\leq a^2\\}`}</MathBlock>

      <Callout type="info">
        <strong>Theorem:</strong> The volume of the n-dimensional sphere is:
        <MathBlock>{`V_n(a) = \\frac{\\pi^{n/2}}{\\Gamma(\\frac{n}{2} + 1)} a^n`}</MathBlock>
        where <InlineMath>{'\\Gamma'}</InlineMath> is the gamma function.
      </Callout>

      <p>
        For <InlineMath>{'n = 1'}</InlineMath> the formula gives{' '}
        <InlineMath>{'V_1(a) = 2a'}</InlineMath>, the length of the interval{' '}
        <InlineMath>{'[-a, a]'}</InlineMath>. For{' '}
        <InlineMath>{'n = 2'}</InlineMath> it gives{' '}
        <InlineMath>{'V_2(a) = \\pi a^2'}</InlineMath>, the area of a circular
        disk of radius <InlineMath>{'a'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The concept of multiple integrals extends
        naturally to any dimension. Triple integrals can be computed by iteration,
        reducing the calculation to double integrals over projections. The
        transformation formula also generalizes, with the absolute value of the
        Jacobian determinant acting as the magnification factor for n-dimensional
        volumes.
      </Callout>
    </LessonLayout>
  );
}
