import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Non-Inertial Reference Frames</h2>

      <p className="mb-4">
        Until now, we have worked exclusively in inertial reference frames where Newton's laws hold in their
        simplest form. However, many practical situations require us to analyze motion from the perspective
        of accelerating or rotating observers. When we step onto a merry-go-round or analyze motion on the
        rotating Earth, we must account for the non-inertial nature of our reference frame.
      </p>

      <p className="mb-4">
        The key insight is that coordinates in a non-inertial frame are related to those in an inertial
        frame by a time-dependent transformation. This transformation introduces additional terms in the
        equations of motion that manifest as fictitious (or inertial) forces.
      </p>

      <Definition title="Reference Frame Transformation">
        <p className="mb-2">
          Let <InlineMath>{'\\mathcal{R}'}</InlineMath> be an inertial reference frame with origin O and
          orthonormal basis <InlineMath>{'\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}'}</InlineMath>,
          and let <InlineMath>{'\\mathcal{R}\''}</InlineMath> be a non-inertial frame with origin O' and
          basis <InlineMath>{'\\{\\mathbf{e}_1\', \\mathbf{e}_2\', \\mathbf{e}_3\'\\}'}</InlineMath>.
        </p>
        <p className="mb-2">
          The position of a point P in the inertial frame is related to its position in the non-inertial
          frame by:
        </p>
        <MathBlock>{'\\mathbf{r} = A(t)\\mathbf{R} + \\mathbf{b}(t)'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'A(t) \\in SO(3)'}</InlineMath> is a time-dependent rotation matrix and
          <InlineMath>{'\\mathbf{b}(t)'}</InlineMath> is the position of O' relative to O.
        </p>
      </Definition>

      <p className="mb-4">
        The vector <InlineMath>{'\\mathbf{R}'}</InlineMath> represents the position as seen by an observer
        in the moving frame <InlineMath>{'\\mathcal{R}\''}</InlineMath>, while <InlineMath>{'\\mathbf{r}'}</InlineMath> is
        the position in the inertial frame. The rotation matrix <InlineMath>{'A(t)'}</InlineMath> describes
        how the axes of the moving frame are oriented relative to the fixed frame at each instant.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Velocity Transformation</h3>

      <p className="mb-4">
        To find the velocity in the inertial frame, we differentiate the position transformation:
      </p>

      <MathBlock>{'\\mathbf{v} = \\frac{d\\mathbf{r}}{dt} = \\dot{A}\\mathbf{R} + A\\dot{\\mathbf{R}} + \\dot{\\mathbf{b}}'}</MathBlock>

      <p className="mb-4">
        The term <InlineMath>{'\\dot{A}\\mathbf{R}'}</InlineMath> requires special attention. Since
        <InlineMath>{'A \\in SO(3)'}</InlineMath>, we have <InlineMath>{'A^TA = I'}</InlineMath>, and
        differentiating gives <InlineMath>{'\\dot{A}^TA + A^T\\dot{A} = 0'}</InlineMath>. This shows
        that <InlineMath>{'A^T\\dot{A}'}</InlineMath> is antisymmetric, so we can write:
      </p>

      <MathBlock>{'A^T\\dot{A} = \\hat{\\boldsymbol{\\omega}}'}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{'\\hat{\\boldsymbol{\\omega}}'}</InlineMath> is the skew-symmetric matrix
        corresponding to the angular velocity vector <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath>:
      </p>

      <MathBlock>{'\\hat{\\boldsymbol{\\omega}} = \\begin{pmatrix} 0 & -\\omega_3 & \\omega_2 \\\\ \\omega_3 & 0 & -\\omega_1 \\\\ -\\omega_2 & \\omega_1 & 0 \\end{pmatrix}'}</MathBlock>

      <Theorem
        title="Velocity Transformation Formula"
        proof={
          <>
            <p className="mb-2">
              Starting from <InlineMath>{'\\mathbf{v} = \\dot{A}\\mathbf{R} + A\\dot{\\mathbf{R}} + \\dot{\\mathbf{b}}'}</InlineMath>,
              we have <InlineMath>{'\\dot{A} = A\\hat{\\boldsymbol{\\omega}}'}</InlineMath> (since <InlineMath>{'\\dot{A}A^T = A\\hat{\\boldsymbol{\\omega}}A^T'}</InlineMath>).
            </p>
            <p className="mb-2">
              Thus: <InlineMath>{'\\dot{A}\\mathbf{R} = A\\hat{\\boldsymbol{\\omega}}\\mathbf{R} = A(\\boldsymbol{\\omega} \\times \\mathbf{R})'}</InlineMath>
            </p>
            <p className="mb-2">
              The relative position in the inertial frame is <InlineMath>{'\\mathbf{r}_{\\text{rel}} = A\\mathbf{R}'}</InlineMath>,
              and the relative velocity is <InlineMath>{'\\mathbf{v}_{\\text{rel}} = A\\dot{\\mathbf{R}}'}</InlineMath>.
            </p>
            <p>
              Substituting: <InlineMath>{'\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}} + \\mathbf{v}_{\\text{rel}} + \\dot{\\mathbf{b}}'}</InlineMath>
            </p>
          </>
        }
      >
        <p>
          The velocity of a particle as measured in the inertial frame is:
        </p>
        <MathBlock>{'\\mathbf{v} = \\mathbf{v}_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}} + \\dot{\\mathbf{b}}'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\mathbf{v}_{\\text{rel}}'}</InlineMath> is the velocity relative to the moving frame,
          <InlineMath>{'\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}}'}</InlineMath> is the velocity due to
          rotation of the frame, and <InlineMath>{'\\dot{\\mathbf{b}}'}</InlineMath> is the velocity of the origin of
          the moving frame.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Acceleration Transformation</h3>

      <p className="mb-4">
        The acceleration transformation is obtained by differentiating the velocity formula. This is where the
        analysis becomes significantly more complex, as we must track how each term changes with time.
      </p>

      <Theorem
        title="Acceleration Transformation Formula"
        proof={
          <>
            <p className="mb-2">
              Differentiating <InlineMath>{'\\mathbf{v} = \\mathbf{v}_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}} + \\dot{\\mathbf{b}}'}</InlineMath>:
            </p>
            <p className="mb-2">
              <InlineMath>{'\\mathbf{a} = \\dot{\\mathbf{v}}_{\\text{rel}} + \\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\dot{\\mathbf{r}}_{\\text{rel}} + \\ddot{\\mathbf{b}}'}</InlineMath>
            </p>
            <p className="mb-2">
              Now <InlineMath>{'\\dot{\\mathbf{r}}_{\\text{rel}} = \\mathbf{v}_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}}'}</InlineMath>, so:
            </p>
            <p className="mb-2">
              <InlineMath>{'\\boldsymbol{\\omega} \\times \\dot{\\mathbf{r}}_{\\text{rel}} = \\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}})'}</InlineMath>
            </p>
            <p className="mb-2">
              Similarly, <InlineMath>{'\\dot{\\mathbf{v}}_{\\text{rel}} = \\mathbf{a}_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}}'}</InlineMath>
            </p>
            <p>
              Combining all terms yields the complete formula.
            </p>
          </>
        }
      >
        <p>
          The acceleration in the inertial frame is related to the acceleration in the non-inertial frame by:
        </p>
        <MathBlock>{'\\mathbf{a} = \\mathbf{a}_{\\text{rel}} + 2\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}} + \\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}}) + \\ddot{\\mathbf{b}}'}</MathBlock>
      </Theorem>

      <p className="mb-4">
        Each term in this formula has a distinct physical interpretation:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><InlineMath>{'\\mathbf{a}_{\\text{rel}}'}</InlineMath>: acceleration as measured in the moving frame</li>
        <li><InlineMath>{'2\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}}'}</InlineMath>: Coriolis acceleration</li>
        <li><InlineMath>{'\\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}}'}</InlineMath>: Euler acceleration (due to angular acceleration)</li>
        <li><InlineMath>{'\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}})'}</InlineMath>: centripetal acceleration</li>
        <li><InlineMath>{'\\ddot{\\mathbf{b}}'}</InlineMath>: translational acceleration of the frame's origin</li>
      </ul>

      <Example title="Rotating Platform">
        <p className="mb-2">
          Consider a platform rotating with constant angular velocity <InlineMath>{'\\boldsymbol{\\omega} = \\omega\\mathbf{e}_3'}</InlineMath> about
          a vertical axis. A ball rolls radially outward with constant speed <InlineMath>{'v'}</InlineMath> at distance <InlineMath>{'r'}</InlineMath> from
          the axis.
        </p>
        <p className="mb-2">
          In the rotating frame: <InlineMath>{'\\mathbf{r}_{\\text{rel}} = r\\mathbf{e}_r\''}</InlineMath>,
          <InlineMath>{'\\mathbf{v}_{\\text{rel}} = v\\mathbf{e}_r\''}</InlineMath>,
          <InlineMath>{'\\mathbf{a}_{\\text{rel}} = 0'}</InlineMath>
        </p>
        <p className="mb-2">
          The various acceleration terms are:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Coriolis: <InlineMath>{'2\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}} = 2\\omega v\\mathbf{e}_\\theta\''}</InlineMath></li>
          <li>Centripetal: <InlineMath>{'\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}}) = -\\omega^2 r\\mathbf{e}_r\''}</InlineMath></li>
        </ul>
        <p>
          The total inertial acceleration is <InlineMath>{'\\mathbf{a} = -\\omega^2 r\\mathbf{e}_r\' + 2\\omega v\\mathbf{e}_\\theta\''}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Historical Note">
        <p>
          The systematic treatment of non-inertial reference frames was developed in the 19th century by
          Gaspard-Gustave de Coriolis (1792-1843). The "Coriolis force" he identified plays a crucial role
          in geophysical fluid dynamics, affecting ocean currents, atmospheric circulation, and even the
          trajectory of projectiles over long distances.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Transport Theorem</h3>

      <p className="mb-4">
        A key result that underlies all these transformations is the transport theorem for time derivatives
        of vectors:
      </p>

      <Theorem
        title="Transport Theorem"
        proof={
          <>
            <p className="mb-2">
              Let <InlineMath>{'\\mathbf{Q} = Q_i\'\\mathbf{e}_i\''}</InlineMath> where the prime denotes
              components and basis vectors in the rotating frame.
            </p>
            <p className="mb-2">
              <InlineMath>{'\\frac{d\\mathbf{Q}}{dt} = \\dot{Q}_i\'\\mathbf{e}_i\' + Q_i\'\\dot{\\mathbf{e}}_i\''}</InlineMath>
            </p>
            <p className="mb-2">
              Since the basis vectors rotate with angular velocity <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath>:
              <InlineMath>{'\\dot{\\mathbf{e}}_i\' = \\boldsymbol{\\omega} \\times \\mathbf{e}_i\''}</InlineMath>
            </p>
            <p>
              Therefore: <InlineMath>{'\\frac{d\\mathbf{Q}}{dt} = \\left(\\frac{d\\mathbf{Q}}{dt}\\right)_{\\text{rel}} + \\boldsymbol{\\omega} \\times \\mathbf{Q}'}</InlineMath>
            </p>
          </>
        }
      >
        <p>
          For any vector <InlineMath>{'\\mathbf{Q}'}</InlineMath>, the time derivative in the inertial frame
          is related to the time derivative as seen in the rotating frame by:
        </p>
        <MathBlock>{'\\left(\\frac{d\\mathbf{Q}}{dt}\\right)_{\\text{inertial}} = \\left(\\frac{d\\mathbf{Q}}{dt}\\right)_{\\text{rotating}} + \\boldsymbol{\\omega} \\times \\mathbf{Q}'}</MathBlock>
      </Theorem>

      <p className="mb-4">
        This elegant formula encapsulates the essence of rotating reference frames: the inertial derivative
        equals the rotating derivative plus the rotation of the vector itself. Applying this twice to the
        position vector immediately yields the velocity and acceleration transformation formulas.
      </p>

      <Callout type="warning" title="Notation Convention">
        <p>
          Different textbooks use different conventions for which frame is "moving" and which is "fixed."
          Always verify the sign conventions when applying these formulas. The key is that the Coriolis
          term always involves the cross product of angular velocity with velocity, and the centrifugal
          term points radially outward from the rotation axis.
        </p>
      </Callout>
    </LessonLayout>
  );
}
