import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section141() {
  return (
    <LessonLayout sectionId={141}>
      <h2>Surface Integrals of Vector Fields</h2>

      <p>
        When integrating a vector field over a surface, we obtain the flux of the
        field through the surface. This is a fundamental concept in physics and
        appears throughout electromagnetism and fluid dynamics.
      </p>

      <h3>The Flux Integral</h3>

      <p>
        Let <InlineMath>{`\\mathbf{F}`}</InlineMath> be a vector field defined on
        a surface <InlineMath>{`S = \\mathbf{r}(T)`}</InlineMath>. At each point,
        let <InlineMath>{`\\mathbf{n}`}</InlineMath> be the unit normal vector.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>surface integral of a vector
        field</strong> <InlineMath>{`\\mathbf{F}`}</InlineMath> over{' '}
        <InlineMath>S</InlineMath> is:
        <MathBlock>
          {`\\iint_S \\mathbf{F} \\cdot \\mathbf{n} \\, dS = \\iint_S \\mathbf{F} \\cdot d\\mathbf{S}`}
        </MathBlock>
        where <InlineMath>{`d\\mathbf{S} = \\mathbf{n} \\, dS`}</InlineMath>.
      </Callout>

      <p>
        This integral measures the total flux of{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> through the surface. If{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> represents fluid velocity, the
        flux integral gives the rate at which fluid crosses the surface.
      </p>

      <h3>Computation Using Parametric Form</h3>

      <p>
        In terms of the parametric representation, we have:
      </p>
      <MathBlock>
        {`\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_T \\mathbf{F}[\\mathbf{r}(u, v)] \\cdot \\left( \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right) du \\, dv`}
      </MathBlock>

      <p>
        Note that we use the fundamental vector product directly (not its
        magnitude), which preserves the direction information.
      </p>

      <h3>Component Form</h3>

      <p>
        If <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>,
        then:
      </p>
      <MathBlock>
        {`\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_T \\left( P \\frac{\\partial(Y, Z)}{\\partial(u, v)} + Q \\frac{\\partial(Z, X)}{\\partial(u, v)} + R \\frac{\\partial(X, Y)}{\\partial(u, v)} \\right) du \\, dv`}
      </MathBlock>

      <h3>For Explicit Surfaces</h3>

      <p>
        If the surface is given as <InlineMath>{`z = f(x, y)`}</InlineMath>, with{' '}
        <InlineMath>(x, y)</InlineMath> as parameters, then:
      </p>
      <MathBlock>
        {`\\frac{\\partial \\mathbf{r}}{\\partial x} \\times \\frac{\\partial \\mathbf{r}}{\\partial y} = -\\frac{\\partial f}{\\partial x} \\mathbf{i} - \\frac{\\partial f}{\\partial y} \\mathbf{j} + \\mathbf{k}`}
      </MathBlock>

      <p>
        The flux integral becomes:
      </p>
      <MathBlock>
        {`\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_T \\left( -P \\frac{\\partial f}{\\partial x} - Q \\frac{\\partial f}{\\partial y} + R \\right) dx \\, dy`}
      </MathBlock>

      <h3>Orientation</h3>

      <p>
        The sign of a surface integral depends on the choice of normal direction.
        Reversing the orientation of the surface changes the sign of the integral:
      </p>
      <MathBlock>
        {`\\iint_{-S} \\mathbf{F} \\cdot d\\mathbf{S} = -\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}`}
      </MathBlock>

      <h3>Example: Flux Through a Hemisphere</h3>

      <p>
        Compute the flux of{' '}
        <InlineMath>{`\\mathbf{F} = z\\mathbf{k}`}</InlineMath> through the
        upper hemisphere <InlineMath>{`x^2 + y^2 + z^2 = a^2`}</InlineMath>,{' '}
        <InlineMath>{`z \\geq 0`}</InlineMath>, with outward normal.
      </p>

      <p>
        Using spherical-like parameters:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = a \\cos u \\cos v \\, \\mathbf{i} + a \\sin u \\cos v \\, \\mathbf{j} + a \\sin v \\, \\mathbf{k}`}
      </MathBlock>

      <p>
        The fundamental vector product points outward:{' '}
        <InlineMath>{`\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} = a \\cos v \\, \\mathbf{r}(u, v)`}</InlineMath>.
      </p>

      <p>
        With <InlineMath>{`z = a \\sin v`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\mathbf{F} \\cdot \\left( \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right) = a \\sin v \\cdot a \\cos v \\cdot a \\sin v = a^3 \\sin^2 v \\cos v`}
      </MathBlock>

      <p>
        The flux is:
      </p>
      <MathBlock>
        {`\\int_0^{2\\pi} \\int_0^{\\pi/2} a^3 \\sin^2 v \\cos v \\, dv \\, du = 2\\pi a^3 \\cdot \\frac{1}{3} = \\frac{2\\pi a^3}{3}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Surface integrals of vector fields measure
        flux—the net amount of a quantity crossing a surface. The fundamental vector
        product provides both the magnitude (area element) and direction (normal)
        needed for this computation.
      </Callout>
    </LessonLayout>
  );
}
