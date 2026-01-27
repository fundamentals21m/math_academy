import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Euler's Equations of Rotational Motion</h2>

      <p className="mb-4">
        Having established the relationship between angular momentum and angular velocity through the
        inertia tensor, we now derive the fundamental equations governing the rotational dynamics of
        rigid bodies. These equations, first obtained by Leonhard Euler in 1758, are most elegantly
        expressed in the body-fixed reference frame.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Torque and Angular Momentum</h3>

      <p className="mb-4">
        In an inertial frame, the angular momentum theorem states:
      </p>

      <MathBlock>{'\\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}'}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{'\\boldsymbol{\\tau}'}</InlineMath> is the external torque about the center of
        mass. However, in the space frame, the inertia tensor <InlineMath>{'\\mathbf{I}_s = A\\mathbf{I}A^T'}</InlineMath> is
        time-dependent, making the equations complicated.
      </p>

      <p className="mb-4">
        The key insight is to express the equations in the body frame, where the inertia tensor is constant.
        Using the transport theorem:
      </p>

      <MathBlock>{'\\left(\\frac{d\\mathbf{L}}{dt}\\right)_{\\text{space}} = \\left(\\frac{d\\mathbf{L}}{dt}\\right)_{\\text{body}} + \\boldsymbol{\\omega} \\times \\mathbf{L}'}</MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Derivation of Euler's Equations</h3>

      <Theorem
        title="Euler's Equations"
        proof={
          <>
            <p className="mb-2">
              In the body frame, <InlineMath>{'\\mathbf{L} = \\mathbf{I}\\boldsymbol{\\Omega}'}</InlineMath> where
              <InlineMath>{'\\mathbf{I}'}</InlineMath> is constant and <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> is
              the angular velocity in the body frame.
            </p>
            <p className="mb-2">
              The time derivative in the body frame is:
            </p>
            <MathBlock>{'\\left(\\frac{d\\mathbf{L}}{dt}\\right)_{\\text{body}} = \\mathbf{I}\\dot{\\boldsymbol{\\Omega}}'}</MathBlock>
            <p className="mb-2">
              The transport theorem gives:
            </p>
            <MathBlock>{'\\boldsymbol{\\tau} = \\mathbf{I}\\dot{\\boldsymbol{\\Omega}} + \\boldsymbol{\\Omega} \\times \\mathbf{I}\\boldsymbol{\\Omega}'}</MathBlock>
            <p className="mb-2">
              In principal axes where <InlineMath>{'\\mathbf{I} = \\text{diag}(I_1, I_2, I_3)'}</InlineMath>:
            </p>
            <MathBlock>{'(\\boldsymbol{\\Omega} \\times \\mathbf{I}\\boldsymbol{\\Omega})_1 = \\Omega_2(I\\boldsymbol{\\Omega})_3 - \\Omega_3(I\\boldsymbol{\\Omega})_2 = (I_3 - I_2)\\Omega_2\\Omega_3'}</MathBlock>
            <p>
              and similarly for the other components, yielding the component equations.
            </p>
          </>
        }
      >
        <p>
          In a body-fixed coordinate system aligned with the principal axes, the equations of rotational
          motion are:
        </p>
        <MathBlock>{'I_1\\dot{\\Omega}_1 + (I_3 - I_2)\\Omega_2\\Omega_3 = K_1'}</MathBlock>
        <MathBlock>{'I_2\\dot{\\Omega}_2 + (I_1 - I_3)\\Omega_3\\Omega_1 = K_2'}</MathBlock>
        <MathBlock>{'I_3\\dot{\\Omega}_3 + (I_2 - I_1)\\Omega_1\\Omega_2 = K_3'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'K_i'}</InlineMath> are the components of external torque in the body frame.
        </p>
      </Theorem>

      <p className="mb-4">
        In compact vector form, Euler's equations read:
      </p>

      <MathBlock>{'\\mathbf{I}\\dot{\\boldsymbol{\\Omega}} + \\boldsymbol{\\Omega} \\times \\mathbf{I}\\boldsymbol{\\Omega} = \\mathbf{K}'}</MathBlock>

      <Callout type="info" title="Nonlinear Structure">
        <p>
          Unlike the linear equations of translational motion <InlineMath>{'M\\ddot{\\mathbf{R}} = \\mathbf{F}'}</InlineMath>,
          Euler's equations are inherently nonlinear due to the <InlineMath>{'\\boldsymbol{\\Omega} \\times \\mathbf{I}\\boldsymbol{\\Omega}'}</InlineMath> term.
          This nonlinearity is responsible for complex phenomena such as tumbling, precession, and chaotic motion.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Torque-Free Motion</h3>

      <p className="mb-4">
        When no external torques act (<InlineMath>{'\\mathbf{K} = 0'}</InlineMath>), Euler's equations become:
      </p>

      <MathBlock>{'I_1\\dot{\\Omega}_1 = (I_2 - I_3)\\Omega_2\\Omega_3'}</MathBlock>
      <MathBlock>{'I_2\\dot{\\Omega}_2 = (I_3 - I_1)\\Omega_3\\Omega_1'}</MathBlock>
      <MathBlock>{'I_3\\dot{\\Omega}_3 = (I_1 - I_2)\\Omega_1\\Omega_2'}</MathBlock>

      <Theorem
        title="Conservation Laws for Torque-Free Motion"
        proof={
          <>
            <p className="mb-2">
              <strong>Angular momentum:</strong> With <InlineMath>{'\\mathbf{K} = 0'}</InlineMath>, we have
              <InlineMath>{'d\\mathbf{L}/dt = 0'}</InlineMath> in the space frame, so <InlineMath>{'\\mathbf{L}'}</InlineMath> is constant.
            </p>
            <p className="mb-2">
              In body coordinates: <InlineMath>{'L^2 = I_1^2\\Omega_1^2 + I_2^2\\Omega_2^2 + I_3^2\\Omega_3^2 = \\text{const}'}</InlineMath>
            </p>
            <p className="mb-2">
              <strong>Kinetic energy:</strong> With no torques, no work is done, so:
            </p>
            <MathBlock>{'T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2) = \\text{const}'}</MathBlock>
            <p>
              Both are quadratic forms in the <InlineMath>{'\\Omega_i'}</InlineMath>, defining ellipsoids in
              angular velocity space.
            </p>
          </>
        }
      >
        <p>
          For torque-free rotation, two quantities are conserved:
        </p>
        <MathBlock>{'|\\mathbf{L}|^2 = I_1^2\\Omega_1^2 + I_2^2\\Omega_2^2 + I_3^2\\Omega_3^2 = L^2'}</MathBlock>
        <MathBlock>{'T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2) = E'}</MathBlock>
        <p className="mt-2">
          The motion in angular velocity space is confined to the intersection of these two ellipsoids.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stability of Principal Axis Rotation</h3>

      <p className="mb-4">
        Consider rotation about a principal axis, say <InlineMath>{'\\boldsymbol{\\Omega} = \\Omega_3 \\mathbf{e}_3'}</InlineMath>.
        This is an exact solution to Euler's equations. Is it stable?
      </p>

      <p className="mb-4">
        To analyze stability, we perturb: <InlineMath>{'\\Omega_1 = \\epsilon_1'}</InlineMath>,
        <InlineMath>{'\\Omega_2 = \\epsilon_2'}</InlineMath>, <InlineMath>{'\\Omega_3 = \\Omega + \\epsilon_3'}</InlineMath>
        where <InlineMath>{'\\epsilon_i \\ll \\Omega'}</InlineMath>.
      </p>

      <Theorem
        title="Intermediate Axis Theorem (Tennis Racket Theorem)"
        proof={
          <>
            <p className="mb-2">
              For small perturbations about the axis with <InlineMath>{'I_3'}</InlineMath>, the linearized equations are:
            </p>
            <MathBlock>{'I_1\\dot{\\epsilon}_1 = (I_2 - I_3)\\Omega\\epsilon_2'}</MathBlock>
            <MathBlock>{'I_2\\dot{\\epsilon}_2 = (I_3 - I_1)\\Omega\\epsilon_1'}</MathBlock>
            <p className="mb-2">
              Differentiating the first and substituting:
            </p>
            <MathBlock>{'\\ddot{\\epsilon}_1 = \\frac{(I_2 - I_3)(I_3 - I_1)}{I_1 I_2}\\Omega^2\\epsilon_1'}</MathBlock>
            <p className="mb-2">
              If <InlineMath>{'I_3'}</InlineMath> is the largest or smallest moment, the coefficient is negative,
              giving oscillatory (stable) behavior.
            </p>
            <p>
              If <InlineMath>{'I_3'}</InlineMath> is intermediate (<InlineMath>{'I_1 < I_3 < I_2'}</InlineMath> or vice versa),
              the coefficient is positive, giving exponential (unstable) growth.
            </p>
          </>
        }
      >
        <p>
          Rotation about a principal axis is:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Stable</strong> if the axis corresponds to the largest or smallest principal moment of inertia</li>
          <li><strong>Unstable</strong> if the axis corresponds to the intermediate principal moment of inertia</li>
        </ul>
      </Theorem>

      <Example title="Tennis Racket Effect">
        <p className="mb-2">
          A tennis racket has three distinct principal moments: <InlineMath>{'I_1 < I_2 < I_3'}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li><InlineMath>{'I_1'}</InlineMath>: axis through handle (smallest)</li>
          <li><InlineMath>{'I_2'}</InlineMath>: axis perpendicular to face, through center (intermediate)</li>
          <li><InlineMath>{'I_3'}</InlineMath>: axis parallel to face, perpendicular to handle (largest)</li>
        </ul>
        <p className="mb-2">
          Toss a racket spinning about the <InlineMath>{'I_1'}</InlineMath> or <InlineMath>{'I_3'}</InlineMath> axis:
          it rotates stably.
        </p>
        <p>
          Toss it spinning about the <InlineMath>{'I_2'}</InlineMath> axis (flip it end-over-end): it tumbles chaotically,
          making half-rotations about other axes before returning.
        </p>
      </Example>

      <Callout type="note" title="Dzhanibekov Effect">
        <p>
          This instability was dramatically observed by cosmonaut Vladimir Dzhanibekov in 1985 aboard the
          Salyut 7 space station. A freely spinning wing nut would periodically flip 180 degrees while
          continuing to rotate. The effect is a consequence of the intermediate axis theorem applied to an
          asymmetric rigid body.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Symmetric Top: Torque-Free Case</h3>

      <p className="mb-4">
        For a symmetric top with <InlineMath>{'I_1 = I_2 \\neq I_3'}</InlineMath>, Euler's equations simplify:
      </p>

      <MathBlock>{'I_1\\dot{\\Omega}_1 = (I_1 - I_3)\\Omega_2\\Omega_3'}</MathBlock>
      <MathBlock>{'I_1\\dot{\\Omega}_2 = (I_3 - I_1)\\Omega_3\\Omega_1'}</MathBlock>
      <MathBlock>{'I_3\\dot{\\Omega}_3 = 0'}</MathBlock>

      <Theorem
        title="Symmetric Top Motion (Torque-Free)"
        proof={
          <>
            <p className="mb-2">
              From the third equation, <InlineMath>{'\\Omega_3 = \\text{const}'}</InlineMath>.
            </p>
            <p className="mb-2">
              Define <InlineMath>{'\\omega_p = \\frac{I_3 - I_1}{I_1}\\Omega_3'}</InlineMath>. The first two equations become:
            </p>
            <MathBlock>{'\\dot{\\Omega}_1 = -\\omega_p \\Omega_2, \\quad \\dot{\\Omega}_2 = \\omega_p \\Omega_1'}</MathBlock>
            <p className="mb-2">
              This is simple harmonic motion: <InlineMath>{'\\Omega_1 + i\\Omega_2 = A e^{i\\omega_p t}'}</InlineMath>
            </p>
            <p>
              The angular velocity traces a circle around the symmetry axis in the body frame.
            </p>
          </>
        }
      >
        <p>
          For a torque-free symmetric top:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The spin about the symmetry axis, <InlineMath>{'\\Omega_3'}</InlineMath>, is constant</li>
          <li>The transverse component <InlineMath>{'\\sqrt{\\Omega_1^2 + \\Omega_2^2}'}</InlineMath> is constant</li>
          <li>The angular velocity precesses about the symmetry axis with frequency <InlineMath>{'\\omega_p = \\frac{I_3 - I_1}{I_1}\\Omega_3'}</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Free Precession of Earth">
        <p className="mb-2">
          Earth is approximately a symmetric top with <InlineMath>{'I_3 > I_1'}</InlineMath> (oblate spheroid).
          The ratio <InlineMath>{'(I_3 - I_1)/I_1 \\approx 1/305'}</InlineMath>.
        </p>
        <p className="mb-2">
          If Earth's rotation axis were misaligned from the principal axis, the predicted free precession
          period would be:
        </p>
        <MathBlock>{'T_p = \\frac{I_1}{I_3 - I_1} \\times 1 \\text{ day} \\approx 305 \\text{ days}'}</MathBlock>
        <p className="mb-2">
          The observed "Chandler wobble" has a period of about 433 days. The discrepancy is due to Earth's
          non-rigidity.
        </p>
      </Example>
    </LessonLayout>
  );
}
