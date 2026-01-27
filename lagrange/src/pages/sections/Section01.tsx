import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Fermat's Equations</h2>

      <p className="mb-4">
        Before Lagrange formulated his mechanics, Pierre de Fermat discovered a profound variational
        principle governing the propagation of light. Fermat's principle of least time states that
        light travels between two points along the path that minimizes the total travel time. This
        principle not only explains the laws of reflection and refraction but also serves as a
        prototype for all variational principles in physics.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Geometric Optics</h3>

      <p className="mb-4">
        In geometric optics, we treat light as rays traveling through media with varying refractive
        indices. The speed of light in a medium with refractive index <InlineMath>{`n`}</InlineMath> is:
      </p>

      <MathBlock>{`v = \\frac{c}{n}`}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{`c`}</InlineMath> is the speed of light in vacuum. The refractive index
        can vary continuously with position: <InlineMath>{`n = n(\\mathbf{r})`}</InlineMath>.
      </p>

      <Definition title="Optical Path Length">
        <p>
          The <strong>optical path length</strong> along a curve <InlineMath>{`\\gamma`}</InlineMath> from
          point <InlineMath>{`A`}</InlineMath> to point <InlineMath>{`B`}</InlineMath> is defined as:
        </p>
        <MathBlock>{`\\mathcal{L}[\\gamma] = \\int_A^B n(\\mathbf{r}) \\, ds`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`ds`}</InlineMath> is the arc length element along the path. Since the
          travel time is <InlineMath>{`dt = ds/v = n \\, ds/c`}</InlineMath>, the optical path length
          is proportional to the travel time.
        </p>
      </Definition>

      <Theorem title="Fermat's Principle (Principle of Least Time)">
        <p className="mb-2">
          Light travels between two points along the path that makes the optical path length stationary
          (typically a minimum). Mathematically, the physical ray path satisfies:
        </p>
        <MathBlock>{`\\delta \\int_A^B n(\\mathbf{r}) \\, ds = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\delta`}</InlineMath> denotes the variation with fixed endpoints.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Optical Lagrangian</h3>

      <p className="mb-4">
        To derive the equations governing light rays, we parameterize the path
        as <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> and express the arc length element as:
      </p>

      <MathBlock>{`ds = \\|\\dot{\\mathbf{r}}\\| \\, dt`}</MathBlock>

      <p className="mb-4">
        The optical path length becomes:
      </p>

      <MathBlock>{`\\mathcal{L} = \\int_{t_1}^{t_2} n(\\mathbf{r}) \\|\\dot{\\mathbf{r}}\\| \\, dt`}</MathBlock>

      <Definition title="Optical Lagrangian">
        <p>
          The <strong>optical Lagrangian</strong> for light propagation is:
        </p>
        <MathBlock>{`L = n(\\mathbf{r}) \\|\\dot{\\mathbf{r}}\\|`}</MathBlock>
        <p className="mt-2">
          This Lagrangian is homogeneous of degree one in <InlineMath>{`\\dot{\\mathbf{r}}`}</InlineMath>,
          reflecting the reparameterization invariance of the optical path length.
        </p>
      </Definition>

      <Theorem title="Ray Equations from Fermat's Principle">
        <p className="mb-2">
          Applying the Euler-Lagrange equations to the optical Lagrangian yields the ray equations:
        </p>
        <MathBlock>{`\\frac{d}{ds}\\left(n \\frac{d\\mathbf{r}}{ds}\\right) = \\nabla n`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`s`}</InlineMath> is arc length along the ray. In a homogeneous medium
          (<InlineMath>{`\\nabla n = 0`}</InlineMath>), rays travel in straight lines.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Snell's Law</h3>

      <p className="mb-4">
        The most celebrated consequence of Fermat's principle is Snell's law of refraction at an
        interface between two media with different refractive indices.
      </p>

      <Example title="Derivation of Snell's Law">
        <p className="mb-3">
          Consider light traveling from point <InlineMath>{`A`}</InlineMath> in medium 1
          (index <InlineMath>{`n_1`}</InlineMath>) to point <InlineMath>{`B`}</InlineMath> in medium 2
          (index <InlineMath>{`n_2`}</InlineMath>), crossing a planar interface at point <InlineMath>{`P`}</InlineMath>.
        </p>
        <p className="mb-2">
          Let <InlineMath>{`\\theta_1`}</InlineMath> be the angle of incidence
          and <InlineMath>{`\\theta_2`}</InlineMath> the angle of refraction, both measured from the normal.
          The optical path length is:
        </p>
        <MathBlock>{`\\mathcal{L} = n_1 |AP| + n_2 |PB|`}</MathBlock>
        <p className="mb-2">
          Minimizing with respect to the position of <InlineMath>{`P`}</InlineMath> along the interface gives:
        </p>
        <MathBlock>{`n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2`}</MathBlock>
        <p className="mt-2">
          This is Snell's law of refraction, discovered experimentally by Snell and explained theoretically
          by Fermat's principle.
        </p>
      </Example>

      <Definition title="Snell's Law">
        <p>
          At an interface between two media with refractive indices <InlineMath>{`n_1`}</InlineMath> and <InlineMath>{`n_2`}</InlineMath>,
          a light ray is refracted according to:
        </p>
        <MathBlock>{`n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2`}</MathBlock>
        <p className="mt-2">
          The quantity <InlineMath>{`n \\sin\\theta`}</InlineMath> is conserved across the interface. This
          is the optical analogue of momentum conservation in mechanics.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Law of Reflection</h3>

      <Example title="Law of Reflection">
        <p className="mb-3">
          For reflection at a mirror, both the incident and reflected rays are in the same medium
          (same <InlineMath>{`n`}</InlineMath>). Fermat's principle requires the path <InlineMath>{`APB`}</InlineMath>
          to be a minimum, where <InlineMath>{`P`}</InlineMath> is the point of reflection.
        </p>
        <p className="mb-2">
          The minimum path is achieved when the angle of incidence equals the angle of reflection:
        </p>
        <MathBlock>{`\\theta_i = \\theta_r`}</MathBlock>
        <p className="mt-2">
          Geometrically, this corresponds to the path that would be a straight line if we reflected
          point <InlineMath>{`B`}</InlineMath> through the mirror.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gradient Index Media</h3>

      <p className="mb-4">
        When the refractive index varies continuously, light rays curve toward regions of higher
        refractive index. This is the basis for mirages and fiber optic waveguides.
      </p>

      <Theorem title="Ray Curvature">
        <p className="mb-2">
          In a medium where <InlineMath>{`n = n(\\mathbf{r})`}</InlineMath>, the curvature vector of
          a light ray is:
        </p>
        <MathBlock>{`\\kappa \\hat{\\mathbf{n}} = \\frac{1}{n} \\left(\\nabla n - \\hat{\\mathbf{t}} (\\hat{\\mathbf{t}} \\cdot \\nabla n)\\right)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\hat{\\mathbf{t}}`}</InlineMath> is the unit tangent
          and <InlineMath>{`\\hat{\\mathbf{n}}`}</InlineMath> is the principal normal. The ray curves
          toward the gradient of <InlineMath>{`n`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Connection to Mechanics">
        <p>
          There is a profound analogy between geometric optics and classical mechanics. The optical
          path length corresponds to the action, the refractive index to an effective potential, and
          Fermat's principle to Hamilton's principle. This analogy inspired Hamilton's formulation of
          mechanics and ultimately led to wave mechanics.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Variational Calculus</h3>

      <p className="mb-4">
        Fermat's principle is an example of a variational problem: finding a function (the ray path)
        that makes a functional (the optical path length) stationary. The mathematical machinery for
        solving such problems is the calculus of variations.
      </p>

      <Definition title="Euler-Lagrange Equation (General Form)">
        <p>
          For a functional of the form:
        </p>
        <MathBlock>{`I[y] = \\int_a^b F(x, y, y') \\, dx`}</MathBlock>
        <p className="mt-2">
          the stationary condition <InlineMath>{`\\delta I = 0`}</InlineMath> with fixed
          endpoints <InlineMath>{`y(a) = y_a`}</InlineMath>, <InlineMath>{`y(b) = y_b`}</InlineMath>
          leads to the Euler-Lagrange equation:
        </p>
        <MathBlock>{`\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\left(\\frac{\\partial F}{\\partial y'}\\right) = 0`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Insight">
        <p>
          Fermat's principle demonstrates that nature's laws can be formulated as optimization
          problems. Light "chooses" the path of least time not because it has foresight, but because
          wave interference causes paths near the optimal one to reinforce while others cancel. This
          insight bridges classical ray optics with wave optics and anticipates the path integral
          formulation of quantum mechanics.
        </p>
      </Callout>
    </LessonLayout>
  );
}
