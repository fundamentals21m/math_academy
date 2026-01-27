import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Foucault Pendulum</h2>

      <p className="mb-4">
        In 1851, Leon Foucault performed one of the most elegant physics demonstrations in history. By
        suspending a heavy pendulum from the dome of the Pantheon in Paris, he provided direct visual
        evidence that the Earth rotates. As the pendulum swung back and forth, its plane of oscillation
        slowly rotated, completing a full circle over many hours.
      </p>

      <p className="mb-4">
        The Foucault pendulum beautifully illustrates the Coriolis effect. From the perspective of an
        observer on the rotating Earth, the pendulum appears to precess; from the perspective of an
        inertial observer, the pendulum swings in a fixed plane while the Earth rotates beneath it.
      </p>

      <Callout type="info" title="Historical Significance">
        <p>
          Foucault's demonstration was revolutionary because it provided proof of Earth's rotation without
          reference to celestial observations. The experiment can be performed in a closed room, making it
          a purely mechanical demonstration of a cosmic fact.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Setting Up the Problem</h3>

      <p className="mb-4">
        Consider a pendulum suspended at latitude <InlineMath>{'\\lambda'}</InlineMath> on the Earth's surface.
        We set up a local coordinate system with:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><InlineMath>{'x'}</InlineMath>: pointing east</li>
        <li><InlineMath>{'y'}</InlineMath>: pointing north</li>
        <li><InlineMath>{'z'}</InlineMath>: pointing radially outward (up)</li>
      </ul>

      <Definition title="Local Angular Velocity Components">
        <p className="mb-2">
          The Earth's angular velocity vector <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> points
          from the center of the Earth toward the North Pole. In the local coordinate system at
          latitude <InlineMath>{'\\lambda'}</InlineMath>:
        </p>
        <MathBlock>{'\\boldsymbol{\\Omega} = \\Omega(0, \\cos\\lambda, \\sin\\lambda)'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\Omega \\approx 7.29 \\times 10^{-5}'}</InlineMath> rad/s is Earth's rotation rate.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Equations of Motion</h3>

      <p className="mb-4">
        For small oscillations, the pendulum bob moves approximately in a horizontal plane. Let
        <InlineMath>{'(x, y)'}</InlineMath> denote the horizontal displacement from equilibrium.
      </p>

      <p className="mb-4">
        The forces acting on the bob are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Gravity and tension (combine to give restoring force <InlineMath>{'-mg(x,y)/L'}</InlineMath>)</li>
        <li>Coriolis force <InlineMath>{'-2m\\boldsymbol{\\Omega} \\times \\mathbf{v}'}</InlineMath></li>
      </ul>

      <Theorem
        title="Foucault Pendulum Equations"
        proof={
          <>
            <p className="mb-2">
              The velocity in the local frame is <InlineMath>{'\\mathbf{v} = (\\dot{x}, \\dot{y}, 0)'}</InlineMath>.
            </p>
            <p className="mb-2">
              The Coriolis acceleration is:
            </p>
            <MathBlock>{'\\mathbf{a}_{\\text{Cor}} = -2\\boldsymbol{\\Omega} \\times \\mathbf{v} = -2\\Omega\\begin{vmatrix} \\mathbf{e}_x & \\mathbf{e}_y & \\mathbf{e}_z \\\\ 0 & \\cos\\lambda & \\sin\\lambda \\\\ \\dot{x} & \\dot{y} & 0 \\end{vmatrix}'}</MathBlock>
            <p className="mb-2">
              Computing the determinant:
            </p>
            <MathBlock>{'\\mathbf{a}_{\\text{Cor}} = -2\\Omega(-\\dot{y}\\sin\\lambda, \\dot{x}\\sin\\lambda, -\\dot{x}\\cos\\lambda)'}</MathBlock>
            <p className="mb-2">
              For horizontal motion, we keep only the x and y components. Combined with the pendulum
              restoring force <InlineMath>{'-\\omega_0^2(x, y)'}</InlineMath> where <InlineMath>{'\\omega_0 = \\sqrt{g/L}'}</InlineMath>:
            </p>
            <MathBlock>{'\\ddot{x} = -\\omega_0^2 x + 2\\Omega\\sin\\lambda\\,\\dot{y}'}</MathBlock>
            <MathBlock>{'\\ddot{y} = -\\omega_0^2 y - 2\\Omega\\sin\\lambda\\,\\dot{x}'}</MathBlock>
          </>
        }
      >
        <p>
          The equations of motion for a Foucault pendulum at latitude <InlineMath>{'\\lambda'}</InlineMath> are:
        </p>
        <MathBlock>{'\\ddot{x} - 2\\Omega_z\\dot{y} + \\omega_0^2 x = 0'}</MathBlock>
        <MathBlock>{'\\ddot{y} + 2\\Omega_z\\dot{x} + \\omega_0^2 y = 0'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\Omega_z = \\Omega\\sin\\lambda'}</InlineMath> is the vertical component of
          Earth's angular velocity and <InlineMath>{'\\omega_0 = \\sqrt{g/L}'}</InlineMath> is the natural
          frequency of the pendulum.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solution: Complex Variable Method</h3>

      <p className="mb-4">
        The coupled equations are elegantly solved by introducing the complex variable:
      </p>

      <MathBlock>{'\\zeta = x + iy'}</MathBlock>

      <p className="mb-4">
        Multiplying the second equation by <InlineMath>{'i'}</InlineMath> and adding to the first:
      </p>

      <MathBlock>{'\\ddot{\\zeta} + 2i\\Omega_z\\dot{\\zeta} + \\omega_0^2\\zeta = 0'}</MathBlock>

      <p className="mb-4">
        This is a linear second-order equation with constant coefficients. We try <InlineMath>{'\\zeta = Ae^{i\\nu t}'}</InlineMath>:
      </p>

      <MathBlock>{'-\\nu^2 + 2\\Omega_z\\nu + \\omega_0^2 = 0'}</MathBlock>

      <p className="mb-4">
        Solving: <InlineMath>{'\\nu = \\Omega_z \\pm \\sqrt{\\Omega_z^2 + \\omega_0^2}'}</InlineMath>
      </p>

      <p className="mb-4">
        Since <InlineMath>{'\\Omega_z \\ll \\omega_0'}</InlineMath> (Earth rotates much slower than the
        pendulum oscillates), we can approximate:
      </p>

      <MathBlock>{'\\nu \\approx \\Omega_z \\pm \\omega_0'}</MathBlock>

      <Theorem
        title="Foucault Pendulum Precession"
        proof={
          <>
            <p className="mb-2">
              The general solution is:
            </p>
            <MathBlock>{'\\zeta = A_+ e^{i(\\Omega_z + \\omega_0)t} + A_- e^{i(\\Omega_z - \\omega_0)t}'}</MathBlock>
            <p className="mb-2">
              Factoring out <InlineMath>{'e^{i\\Omega_z t}'}</InlineMath>:
            </p>
            <MathBlock>{'\\zeta = e^{i\\Omega_z t}(A_+ e^{i\\omega_0 t} + A_- e^{-i\\omega_0 t})'}</MathBlock>
            <p className="mb-2">
              The factor <InlineMath>{'e^{i\\Omega_z t}'}</InlineMath> represents a slow rotation of the
              coordinate system with angular velocity <InlineMath>{'\\Omega_z = \\Omega\\sin\\lambda'}</InlineMath>.
            </p>
            <p>
              The period of this precession is <InlineMath>{'T_{\\text{prec}} = 2\\pi/\\Omega_z = 24\\text{ hr}/\\sin\\lambda'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The plane of oscillation of a Foucault pendulum precesses with angular velocity:
        </p>
        <MathBlock>{'\\Omega_{\\text{prec}} = -\\Omega\\sin\\lambda'}</MathBlock>
        <p className="mt-2">
          The precession period is:
        </p>
        <MathBlock>{'T_{\\text{prec}} = \\frac{24\\text{ hours}}{\\sin\\lambda}'}</MathBlock>
        <p className="mt-2">
          At the poles (<InlineMath>{'\\lambda = 90°'}</InlineMath>), the period is exactly 24 hours.
          At the equator (<InlineMath>{'\\lambda = 0°'}</InlineMath>), there is no precession.
        </p>
      </Theorem>

      <Example title="Precession at Various Latitudes">
        <p className="mb-2">
          <strong>At the North Pole (<InlineMath>{'\\lambda = 90°'}</InlineMath>):</strong>
        </p>
        <p className="mb-2">
          <InlineMath>{'T_{\\text{prec}} = 24/\\sin 90° = 24'}</InlineMath> hours
        </p>
        <p className="mb-2">
          The pendulum completes one full rotation per sidereal day.
        </p>
        <p className="mb-4 border-t border-dark-700 pt-4">
          <strong>At Paris (<InlineMath>{'\\lambda = 49°'}</InlineMath>):</strong>
        </p>
        <p className="mb-2">
          <InlineMath>{'T_{\\text{prec}} = 24/\\sin 49° = 24/0.755 \\approx 31.8'}</InlineMath> hours
        </p>
        <p className="mb-2">
          Foucault's original pendulum precessed about 11° per hour.
        </p>
        <p className="mb-4 border-t border-dark-700 pt-4">
          <strong>At the Equator (<InlineMath>{'\\lambda = 0°'}</InlineMath>):</strong>
        </p>
        <p className="mb-2">
          <InlineMath>{'T_{\\text{prec}} = 24/\\sin 0° = \\infty'}</InlineMath>
        </p>
        <p>
          No precession occurs; the horizontal component of Earth's rotation is perpendicular to the
          local vertical.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Physical Interpretation</h3>

      <p className="mb-4">
        The precession can be understood geometrically. At the North Pole, the pendulum swings in a fixed
        plane relative to the stars while the Earth rotates beneath it. An observer on the Earth sees the
        plane of oscillation rotate in the opposite direction.
      </p>

      <p className="mb-4">
        At intermediate latitudes, only the vertical component of Earth's rotation contributes to the
        precession. The pendulum "remembers" its initial plane of oscillation and resists the Earth's
        rotation, but only partially.
      </p>

      <Definition title="Parallel Transport">
        <p className="mb-2">
          The Foucault pendulum provides an example of parallel transport on a curved surface. As Earth
          rotates, the pendulum plane is "parallel transported" along a circle of latitude. The resulting
          rotation of the plane is a manifestation of the curvature of the sphere.
        </p>
        <p>
          After one day, the plane has rotated by an angle equal to the solid angle subtended by the
          circle of latitude as seen from Earth's center, which is <InlineMath>{'2\\pi(1 - \\cos\\theta)'}</InlineMath>
          where <InlineMath>{'\\theta = 90° - \\lambda'}</InlineMath> is the colatitude.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Considerations</h3>

      <p className="mb-4">
        Building a successful Foucault pendulum requires careful attention to:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Suspension:</strong> The support must not favor any particular direction of swing.
          Foucault used a flexible wire attachment.
        </li>
        <li>
          <strong>Starting conditions:</strong> The pendulum must be released without imparting any
          transverse motion, or it will trace an ellipse that itself precesses.
        </li>
        <li>
          <strong>Damping:</strong> Air resistance and internal friction cause the amplitude to decay.
          Many modern installations use electromagnetic drives to maintain the oscillation.
        </li>
        <li>
          <strong>Length:</strong> A longer pendulum has a longer period, making it easier to observe
          and less affected by suspension imperfections.
        </li>
      </ul>

      <Example title="Foucault's Original Pendulum">
        <p className="mb-2">
          <strong>Location:</strong> Pantheon, Paris
        </p>
        <p className="mb-2">
          <strong>Length:</strong> 67 meters
        </p>
        <p className="mb-2">
          <strong>Bob mass:</strong> 28 kg (brass-coated lead)
        </p>
        <p className="mb-2">
          <strong>Period:</strong> <InlineMath>{'T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{67/9.8} \\approx 16.4'}</InlineMath> seconds
        </p>
        <p className="mb-2">
          <strong>Precession rate:</strong> <InlineMath>{'\\Omega\\sin 49° \\approx 11°'}</InlineMath> per hour
        </p>
        <p>
          The long pendulum and heavy bob ensured stable oscillations that could be observed for hours.
        </p>
      </Example>

      <Callout type="note" title="Connection to Geometric Phase">
        <p>
          The Foucault pendulum is an early example of what is now called geometric phase or Berry phase
          in physics. The rotation of the oscillation plane after one day depends only on the geometry
          (the latitude) and not on the details of the motion. This concept has profound applications in
          quantum mechanics and gauge theories.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Variations and Extensions</h3>

      <p className="mb-4">
        Several variations of the Foucault pendulum have been studied:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Spherical pendulum:</strong> If the pendulum is allowed to swing in any direction with
          significant amplitude, it traces rosette patterns influenced by both the Earth's rotation and
          the nonlinearity of large-amplitude motion.
        </li>
        <li>
          <strong>Ring laser gyroscope:</strong> A modern alternative that uses the Sagnac effect to
          detect rotation with extreme precision.
        </li>
        <li>
          <strong>Quantum Foucault pendulum:</strong> Recent experiments have explored quantum mechanical
          analogues using cold atoms or Bose-Einstein condensates.
        </li>
      </ul>

      <Callout type="success" title="Key Insight">
        <p>
          The Foucault pendulum demonstrates that inertial forces, while "fictitious" in origin, have
          measurable physical consequences. The precession rate depends only on latitude and Earth's
          rotation rate, providing a direct mechanical measurement of our planet's spin.
        </p>
      </Callout>
    </LessonLayout>
  );
}
