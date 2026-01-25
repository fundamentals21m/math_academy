import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section105() {
  return (
    <LessonLayout sectionId={105}>
      <h2>Line Integrals with Respect to Arc Length</h2>

      <p>
        Let <InlineMath>{'\\alpha'}</InlineMath> be a path with{' '}
        <InlineMath>{`\\alpha'`}</InlineMath> continuous on an interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. The graph of <InlineMath>{'\\alpha'}</InlineMath>{' '}
        is a rectifiable curve. The corresponding arc-length function{' '}
        <InlineMath>{'s'}</InlineMath> is given by:
      </p>
      <MathBlock>{`s(t) = \\int_a^t \\|\\alpha'(u)\\| \\, du`}</MathBlock>

      <p>
        The derivative of arc length is:
      </p>
      <MathBlock>{`s'(t) = \\|\\alpha'(t)\\|`}</MathBlock>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'\\varphi'}</InlineMath> be a scalar
        field defined and bounded on <InlineMath>{'C'}</InlineMath>, the graph of{' '}
        <InlineMath>{'\\alpha'}</InlineMath>. The <strong>line integral of{' '}
        <InlineMath>{'\\varphi'}</InlineMath> with respect to arc length</strong> along{' '}
        <InlineMath>{'C'}</InlineMath> is denoted by{' '}
        <InlineMath>{'\\int_C \\varphi \\, ds'}</InlineMath> and is defined by:
        <MathBlock>{`\\int_C \\varphi \\, ds = \\int_a^b \\varphi[\\alpha(t)] s'(t) \\, dt`}</MathBlock>
        whenever the integral on the right exists.
      </Callout>

      <h3>Connection to Vector Line Integrals</h3>

      <p>
        Consider a scalar field <InlineMath>{'\\varphi'}</InlineMath> given by{' '}
        <InlineMath>{'\\varphi[\\alpha(t)] = f[\\alpha(t)] \\cdot T(t)'}</InlineMath>,
        the dot product of a vector field <InlineMath>{'f'}</InlineMath> defined on{' '}
        <InlineMath>{'C'}</InlineMath> and the unit tangent vector{' '}
        <InlineMath>{'T(t) = d\\alpha/ds'}</InlineMath>.
      </p>

      <p>
        In this case, the line integral{' '}
        <InlineMath>{'\\int_C \\varphi \\, ds'}</InlineMath> is the same as the line
        integral <InlineMath>{'\\int_C f \\cdot d\\alpha'}</InlineMath> because:
      </p>
      <MathBlock>{`f[\\alpha(t)] \\cdot \\alpha'(t) = f[\\alpha(t)] \\cdot \\frac{d\\alpha}{ds} \\frac{ds}{dt} = f[\\alpha(t)] \\cdot T(t) s'(t) = \\varphi[\\alpha(t)] s'(t)`}</MathBlock>

      <h3>Flow Integrals and Circulation</h3>

      <Callout type="info">
        <strong>Definitions:</strong>
        <br /><br />
        When <InlineMath>{'f'}</InlineMath> denotes a velocity field, the dot product{' '}
        <InlineMath>{'f \\cdot T'}</InlineMath> is the <strong>tangential component
        of velocity</strong>, and the line integral{' '}
        <InlineMath>{'\\int_C f \\cdot T \\, ds'}</InlineMath> is called the{' '}
        <strong>flow integral</strong> of <InlineMath>{'f'}</InlineMath> along{' '}
        <InlineMath>{'C'}</InlineMath>.
        <br /><br />
        When <InlineMath>{'C'}</InlineMath> is a closed curve, the flow integral is
        called the <strong>circulation</strong> of <InlineMath>{'f'}</InlineMath> along{' '}
        <InlineMath>{'C'}</InlineMath>.
      </Callout>

      <h3>Applications: Mass Distribution Along a Curve</h3>

      <p>
        Think of a curve <InlineMath>{'C'}</InlineMath> in 3-space as a wire made of
        material of varying density. Assume the density is described by a scalar
        field <InlineMath>{'\\mu'}</InlineMath>, where{' '}
        <InlineMath>{'\\mu(x, y, z)'}</InlineMath> is the mass per unit length at the
        point <InlineMath>{'(x, y, z)'}</InlineMath> of <InlineMath>{'C'}</InlineMath>.
      </p>

      <p>
        The <strong>total mass</strong> <InlineMath>{'M'}</InlineMath> of the wire is:
      </p>
      <MathBlock>{`M = \\int_C \\mu(x, y, z) \\, ds`}</MathBlock>

      <p>
        The <strong>center of mass</strong> of the wire is the point{' '}
        <InlineMath>{'(\\bar{x}, \\bar{y}, \\bar{z})'}</InlineMath> whose coordinates
        are determined by:
      </p>
      <MathBlock>{`\\bar{x}M = \\int_C x \\mu(x, y, z) \\, ds, \\quad \\bar{y}M = \\int_C y \\mu(x, y, z) \\, ds, \\quad \\bar{z}M = \\int_C z \\mu(x, y, z) \\, ds`}</MathBlock>

      <p>
        A wire of constant density is called <strong>uniform</strong>. In this case
        the center of mass is also called the <strong>centroid</strong>.
      </p>

      <h3>Example: Mass of a Spring Coil</h3>

      <p>
        Compute the mass <InlineMath>{'M'}</InlineMath> of one coil of a spring having
        the shape of the helix:
      </p>
      <MathBlock>{`\\alpha(t) = a \\cos t \\, \\mathbf{i} + a \\sin t \\, \\mathbf{j} + bt \\, \\mathbf{k}`}</MathBlock>
      <p>
        if the density at <InlineMath>{'(x, y, z)'}</InlineMath> is{' '}
        <InlineMath>{'x^2 + y^2 + z^2'}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The integral for <InlineMath>{'M'}</InlineMath> is:
      </p>
      <MathBlock>{`M = \\int_C (x^2 + y^2 + z^2) \\, ds = \\int_0^{2\\pi} (a^2 \\cos^2 t + a^2 \\sin^2 t + b^2 t^2) s'(t) \\, dt`}</MathBlock>

      <p>
        Since <InlineMath>{`s'(t) = \\|\\alpha'(t)\\|`}</InlineMath> and{' '}
        <InlineMath>{`\\alpha'(t) = -a \\sin t \\, \\mathbf{i} + a \\cos t \\, \\mathbf{j} + b \\mathbf{k}`}</InlineMath>,
        we have <InlineMath>{`s'(t) = \\sqrt{a^2 + b^2}`}</InlineMath>. Hence:
      </p>
      <MathBlock>{`M = \\sqrt{a^2 + b^2} \\int_0^{2\\pi} (a^2 + b^2 t^2) \\, dt = \\sqrt{a^2 + b^2} \\left( 2\\pi a^2 + \\frac{8}{3} \\pi^3 b^2 \\right)`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Line integrals with respect to arc length are
        coordinate-independent—they measure geometric quantities like total mass along
        a curve. Flow integrals and circulation are key concepts in fluid mechanics,
        measuring how much a fluid "flows along" a curve.
      </Callout>
    </LessonLayout>
  );
}
