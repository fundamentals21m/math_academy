import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section140() {
  return (
    <LessonLayout sectionId={140}>
      <h2>Surface Integrals</h2>

      <p>
        Surface integrals are two-dimensional analogs of line integrals, with the
        integration taking place along a surface rather than along a curve.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{`S = \\mathbf{r}(T)`}</InlineMath> be a parametric surface
        described by a differentiable function{' '}
        <InlineMath>{`\\mathbf{r}`}</InlineMath> defined on a region{' '}
        <InlineMath>T</InlineMath> in the uv-plane, and let{' '}
        <InlineMath>f</InlineMath> be a scalar field defined and bounded on{' '}
        <InlineMath>S</InlineMath>. The <strong>surface integral</strong> of{' '}
        <InlineMath>f</InlineMath> over <InlineMath>S</InlineMath> is denoted by{' '}
        <InlineMath>{`\\iint_S f \\, dS`}</InlineMath> and is defined by:
        <MathBlock>
          {`\\iint_{\\mathbf{r}(T)} f \\, dS = \\iint_T f[\\mathbf{r}(u, v)] \\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\| du \\, dv`}
        </MathBlock>
      </Callout>

      <h3>Surface Area as a Surface Integral</h3>

      <p>
        When <InlineMath>{`f = 1`}</InlineMath>, the surface integral becomes:
      </p>
      <MathBlock>
        {`\\iint_S dS = \\iint_T \\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\| du \\, dv = a(S)`}
      </MathBlock>

      <p>
        Thus, the area of <InlineMath>S</InlineMath> is equal to the surface
        integral <InlineMath>{`\\iint_S dS`}</InlineMath>. The symbol{' '}
        <InlineMath>dS</InlineMath> is sometimes called the{' '}
        "element of surface area."
      </p>

      <h3>Applications: Mass and Center of Mass</h3>

      <p>
        If the scalar field <InlineMath>f</InlineMath> is interpreted as the
        density (mass per unit area) of a thin material in the shape of the
        surface <InlineMath>S</InlineMath>, the total mass{' '}
        <InlineMath>m</InlineMath> is:
      </p>
      <MathBlock>
        {`m = \\iint_S f(x, y, z) \\, dS`}
      </MathBlock>

      <p>
        The center of mass <InlineMath>{`(\\bar{x}, \\bar{y}, \\bar{z})`}</InlineMath>{' '}
        is determined by:
      </p>
      <MathBlock>
        {`\\bar{x} m = \\iint_S x f(x, y, z) \\, dS, \\quad \\bar{y} m = \\iint_S y f(x, y, z) \\, dS, \\quad \\bar{z} m = \\iint_S z f(x, y, z) \\, dS`}
      </MathBlock>

      <h3>Moment of Inertia</h3>

      <p>
        The moment of inertia <InlineMath>{`I_L`}</InlineMath> about an axis{' '}
        <InlineMath>L</InlineMath> is:
      </p>
      <MathBlock>
        {`I_L = \\iint_S \\delta^2(x, y, z) f(x, y, z) \\, dS`}
      </MathBlock>

      <p>
        where <InlineMath>{`\\delta(x, y, z)`}</InlineMath> is the perpendicular
        distance from <InlineMath>(x, y, z)</InlineMath> to the line{' '}
        <InlineMath>L</InlineMath>.
      </p>

      <h3>Example: Center of Mass of a Hemisphere</h3>

      <p>
        Consider a uniform hemispherical surface of radius{' '}
        <InlineMath>a</InlineMath>. Using the parametric representation:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = a \\cos u \\cos v \\, \\mathbf{i} + a \\sin u \\cos v \\, \\mathbf{j} + a \\sin v \\, \\mathbf{k}`}
      </MathBlock>

      <p>
        where <InlineMath>{`(u, v) \\in [0, 2\\pi] \\times [0, \\frac{\\pi}{2}]`}</InlineMath>.
        With constant density <InlineMath>{`f = c`}</InlineMath>, the mass is{' '}
        <InlineMath>{`m = 2\\pi a^2 c`}</InlineMath>. By symmetry,{' '}
        <InlineMath>{`\\bar{x} = \\bar{y} = 0`}</InlineMath>. The coordinate{' '}
        <InlineMath>{`\\bar{z}`}</InlineMath> is:
      </p>
      <MathBlock>
        {`\\bar{z} m = c \\iint_S z \\, dS = c \\iint_T a \\sin v \\cdot a^2 |\\cos v| \\, du \\, dv = 2\\pi a^3 c \\int_0^{\\pi/2} \\sin v \\cos v \\, dv = \\pi a^3 c`}
      </MathBlock>

      <p>
        Therefore <InlineMath>{`\\bar{z} = a/2`}</InlineMath>.
      </p>

      <h3>Fluid Flow Through a Surface</h3>

      <p>
        Consider a fluid with velocity field{' '}
        <InlineMath>{`\\mathbf{V}(x, y, z)`}</InlineMath> and density{' '}
        <InlineMath>{`\\rho(x, y, z)`}</InlineMath>. The{' '}
        <strong>flux density vector</strong> is:
      </p>
      <MathBlock>
        {`\\mathbf{F}(x, y, z) = \\rho(x, y, z) \\mathbf{V}(x, y, z)`}
      </MathBlock>

      <p>
        At each regular point of a surface <InlineMath>S</InlineMath>, let{' '}
        <InlineMath>{`\\mathbf{n}`}</InlineMath> denote the unit normal:
      </p>
      <MathBlock>
        {`\\mathbf{n} = \\frac{\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}}{\\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\|}`}
      </MathBlock>

      <p>
        The mass of fluid flowing through <InlineMath>S</InlineMath> in unit
        time in the direction of <InlineMath>{`\\mathbf{n}`}</InlineMath> is:
      </p>
      <MathBlock>
        {`\\iint_S \\mathbf{F} \\cdot \\mathbf{n} \\, dS`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Surface integrals generalize line integrals
        to two-dimensional integration domains. They appear in physics for
        computing flux through surfaces, total charge on a surface, and many other
        applications. The element <InlineMath>dS</InlineMath> incorporates the
        geometry of the surface through the fundamental vector product.
      </Callout>
    </LessonLayout>
  );
}
