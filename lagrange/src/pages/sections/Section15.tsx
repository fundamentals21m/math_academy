import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Rigid Body Configurations: SE(3) and Velocity Fields</h2>

      <p className="mb-4">
        A rigid body is an idealization: a collection of particles whose mutual distances remain fixed for
        all time. While no real body is perfectly rigid, many solid objects deform negligibly under normal
        conditions, making the rigid body approximation extremely useful.
      </p>

      <p className="mb-4">
        The rigidity constraint dramatically reduces the number of degrees of freedom. Instead of
        <InlineMath>{'3N'}</InlineMath> coordinates for <InlineMath>{'N'}</InlineMath> particles, a rigid
        body has only 6 degrees of freedom: 3 for the position of its center of mass and 3 for its
        orientation in space.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Configuration Space SE(3)</h3>

      <Definition title="Configuration of a Rigid Body">
        <p className="mb-2">
          The configuration of a rigid body is specified by:
        </p>
        <ol className="list-decimal list-inside mb-2 space-y-1">
          <li>The position <InlineMath>{'\\mathbf{R} \\in \\mathbb{R}^3'}</InlineMath> of a reference point (typically the center of mass)</li>
          <li>The orientation <InlineMath>{'A \\in SO(3)'}</InlineMath> of a body-fixed frame relative to a space-fixed frame</li>
        </ol>
        <p>
          The configuration space is the Special Euclidean group: <InlineMath>{'SE(3) = \\mathbb{R}^3 \\times SO(3)'}</InlineMath>
        </p>
      </Definition>

      <p className="mb-4">
        The group <InlineMath>{'SO(3)'}</InlineMath> consists of all <InlineMath>{'3 \\times 3'}</InlineMath> rotation
        matrices: real orthogonal matrices with determinant +1. Any element <InlineMath>{'A \\in SO(3)'}</InlineMath> satisfies
        <InlineMath>{'A^T A = I'}</InlineMath> and <InlineMath>{'\\det(A) = 1'}</InlineMath>.
      </p>

      <Definition title="Body Frame and Space Frame">
        <p className="mb-2">
          <strong>Space frame:</strong> A fixed inertial reference frame with origin O and orthonormal basis
          <InlineMath>{'\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}'}</InlineMath>.
        </p>
        <p className="mb-2">
          <strong>Body frame:</strong> A reference frame attached to the rigid body with origin at the
          center of mass G and orthonormal basis <InlineMath>{'\\{\\mathbf{E}_1, \\mathbf{E}_2, \\mathbf{E}_3\\}'}</InlineMath>.
        </p>
        <p>
          The rotation matrix <InlineMath>{'A'}</InlineMath> transforms from body to space coordinates:
          if <InlineMath>{'\\mathbf{v} = v_i\'\\mathbf{E}_i'}</InlineMath> in the body frame, then
          <InlineMath>{'\\mathbf{v} = (Av\')_i\\mathbf{e}_i'}</InlineMath> in the space frame.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Position of Points in a Rigid Body</h3>

      <p className="mb-4">
        Let <InlineMath>{'\\mathbf{\\rho}'}</InlineMath> denote the position of a point P in the body frame.
        Since the body is rigid, <InlineMath>{'\\mathbf{\\rho}'}</InlineMath> is constant in time. The position
        of P in the space frame is:
      </p>

      <MathBlock>{'\\mathbf{r} = \\mathbf{R} + A\\mathbf{\\rho}'}</MathBlock>

      <p className="mb-4">
        Here <InlineMath>{'\\mathbf{R}'}</InlineMath> is the position of the center of mass and
        <InlineMath>{'A\\mathbf{\\rho}'}</InlineMath> is the position of P relative to the center of mass,
        expressed in space-frame coordinates.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Velocity Field</h3>

      <p className="mb-4">
        The velocity of point P in the space frame is obtained by differentiating:
      </p>

      <MathBlock>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\dot{A}\\mathbf{\\rho}'}</MathBlock>

      <p className="mb-4">
        Since <InlineMath>{'A \\in SO(3)'}</InlineMath>, we have <InlineMath>{'A^T A = I'}</InlineMath>.
        Differentiating: <InlineMath>{'\\dot{A}^T A + A^T \\dot{A} = 0'}</InlineMath>. Thus
        <InlineMath>{'A^T \\dot{A}'}</InlineMath> is antisymmetric, and we can write:
      </p>

      <MathBlock>{'A^T \\dot{A} = \\hat{\\boldsymbol{\\Omega}}'}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{'\\hat{\\boldsymbol{\\Omega}}'}</InlineMath> is the skew-symmetric matrix
        corresponding to the angular velocity <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> in the body frame.
      </p>

      <Definition title="Angular Velocity">
        <p className="mb-2">
          The angular velocity can be expressed in either frame:
        </p>
        <p className="mb-2">
          <strong>Body angular velocity:</strong> <InlineMath>{'\\boldsymbol{\\Omega} = A^T\\boldsymbol{\\omega}'}</InlineMath> (components in body frame)
        </p>
        <p className="mb-2">
          <strong>Space angular velocity:</strong> <InlineMath>{'\\boldsymbol{\\omega} = A\\boldsymbol{\\Omega}'}</InlineMath> (components in space frame)
        </p>
        <p>
          They are related by <InlineMath>{'\\dot{A} = A\\hat{\\boldsymbol{\\Omega}} = \\hat{\\boldsymbol{\\omega}}A'}</InlineMath>
        </p>
      </Definition>

      <Theorem
        title="Rigid Body Velocity Field"
        proof={
          <>
            <p className="mb-2">
              From <InlineMath>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\dot{A}\\mathbf{\\rho}'}</InlineMath> and
              <InlineMath>{'\\dot{A} = \\hat{\\boldsymbol{\\omega}}A'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\hat{\\boldsymbol{\\omega}}A\\mathbf{\\rho}'}</MathBlock>
            <p className="mb-2">
              Since <InlineMath>{'A\\mathbf{\\rho} = \\mathbf{r} - \\mathbf{R}'}</InlineMath>, the relative position vector:
            </p>
            <MathBlock>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\hat{\\boldsymbol{\\omega}}(\\mathbf{r} - \\mathbf{R})'}</MathBlock>
            <p>
              Using <InlineMath>{'\\hat{\\boldsymbol{\\omega}}\\mathbf{x} = \\boldsymbol{\\omega} \\times \\mathbf{x}'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\boldsymbol{\\omega} \\times (\\mathbf{r} - \\mathbf{R})'}</MathBlock>
          </>
        }
      >
        <p>
          The velocity of any point in a rigid body is:
        </p>
        <MathBlock>{'\\mathbf{v}(\\mathbf{r}) = \\dot{\\mathbf{R}} + \\boldsymbol{\\omega} \\times (\\mathbf{r} - \\mathbf{R})'}</MathBlock>
        <p className="mt-2">
          All points share the same angular velocity <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath>. The
          velocity field is completely determined by the velocity of one point and the angular velocity.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of the Velocity Field</h3>

      <p className="mb-4">
        The velocity field of a rigid body has remarkable properties:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>It is linear (affine) in position: <InlineMath>{'\\mathbf{v}(\\mathbf{r}) = \\mathbf{v}_0 + \\boldsymbol{\\omega} \\times \\mathbf{r}'}</InlineMath></li>
        <li>It has zero divergence: <InlineMath>{'\\nabla \\cdot \\mathbf{v} = 0'}</InlineMath> (volume-preserving)</li>
        <li>Its curl is constant: <InlineMath>{'\\nabla \\times \\mathbf{v} = 2\\boldsymbol{\\omega}'}</InlineMath></li>
      </ul>

      <Example title="Rotating Disk">
        <p className="mb-2">
          A disk rotates about its center with angular velocity <InlineMath>{'\\boldsymbol{\\omega} = \\omega\\mathbf{e}_3'}</InlineMath>.
          Take the center at the origin: <InlineMath>{'\\mathbf{R} = 0'}</InlineMath>, <InlineMath>{'\\dot{\\mathbf{R}} = 0'}</InlineMath>.
        </p>
        <p className="mb-2">
          The velocity at position <InlineMath>{'\\mathbf{r} = (x, y, 0)'}</InlineMath> is:
        </p>
        <MathBlock>{'\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r} = \\omega\\mathbf{e}_3 \\times (x\\mathbf{e}_1 + y\\mathbf{e}_2) = \\omega(-y\\mathbf{e}_1 + x\\mathbf{e}_2)'}</MathBlock>
        <p className="mb-2">
          In polar coordinates: <InlineMath>{'\\mathbf{v} = \\omega r \\hat{\\boldsymbol{\\theta}}'}</InlineMath>
        </p>
        <p>
          The speed increases linearly with distance from the axis: <InlineMath>{'|\\mathbf{v}| = \\omega r'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Instantaneous Axis</h3>

      <Definition title="Instantaneous Axis of Rotation">
        <p className="mb-2">
          At any instant, the motion of a rigid body is equivalent to a screw motion: a combination of
          rotation about an axis and translation along that axis.
        </p>
        <p className="mb-2">
          If <InlineMath>{'\\boldsymbol{\\omega} \\neq 0'}</InlineMath> and <InlineMath>{'\\dot{\\mathbf{R}} \\cdot \\boldsymbol{\\omega} = 0'}</InlineMath>,
          the instantaneous axis passes through the point:
        </p>
        <MathBlock>{'\\mathbf{r}_0 = \\mathbf{R} + \\frac{\\boldsymbol{\\omega} \\times \\dot{\\mathbf{R}}}{|\\boldsymbol{\\omega}|^2}'}</MathBlock>
        <p>
          Points on this axis are instantaneously at rest.
        </p>
      </Definition>

      <Theorem
        title="Chasles' Theorem"
        proof={
          <>
            <p className="mb-2">
              The velocity field <InlineMath>{'\\mathbf{v} = \\dot{\\mathbf{R}} + \\boldsymbol{\\omega} \\times (\\mathbf{r} - \\mathbf{R})'}</InlineMath> can
              be decomposed. The component of <InlineMath>{'\\dot{\\mathbf{R}}'}</InlineMath> parallel to
              <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath> is:
            </p>
            <MathBlock>{'\\mathbf{v}_\\parallel = \\frac{(\\dot{\\mathbf{R}} \\cdot \\boldsymbol{\\omega})}{|\\boldsymbol{\\omega}|^2}\\boldsymbol{\\omega}'}</MathBlock>
            <p className="mb-2">
              This translation is along the rotation axis and cannot be eliminated by choice of reference point.
            </p>
            <p className="mb-2">
              The perpendicular component can be absorbed by shifting the reference point to the instantaneous
              axis, reducing the motion to pure rotation plus axial translation.
            </p>
          </>
        }
      >
        <p>
          The most general instantaneous motion of a rigid body is a screw motion: rotation about an
          axis combined with translation along that axis. This axis is called the instantaneous screw axis.
        </p>
      </Theorem>

      <Example title="Rolling Wheel">
        <p className="mb-2">
          A wheel of radius <InlineMath>{'R'}</InlineMath> rolls without slipping along the ground.
          The center moves with velocity <InlineMath>{'\\mathbf{V} = V\\mathbf{e}_1'}</InlineMath>.
        </p>
        <p className="mb-2">
          The angular velocity is <InlineMath>{'\\boldsymbol{\\omega} = -\\frac{V}{R}\\mathbf{e}_3'}</InlineMath>
          (counterclockwise if rolling to the right).
        </p>
        <p className="mb-2">
          The instantaneous axis is the line of contact with the ground. Points on this line have zero velocity.
        </p>
        <p className="mb-2">
          At the top of the wheel: <InlineMath>{'\\mathbf{v} = V\\mathbf{e}_1 + (-V/R)\\mathbf{e}_3 \\times R\\mathbf{e}_2 = 2V\\mathbf{e}_1'}</InlineMath>
        </p>
        <p>
          The top moves twice as fast as the center.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Degrees of Freedom</h3>

      <Callout type="info" title="Counting Degrees of Freedom">
        <p className="mb-2">
          A rigid body in 3D has 6 degrees of freedom:
        </p>
        <ul className="list-disc list-inside">
          <li>3 translational (position of center of mass)</li>
          <li>3 rotational (orientation of the body)</li>
        </ul>
        <p className="mt-2">
          This matches the dimension of SE(3): <InlineMath>{'\\dim(SE(3)) = \\dim(\\mathbb{R}^3) + \\dim(SO(3)) = 3 + 3 = 6'}</InlineMath>
        </p>
      </Callout>

      <p className="mb-4">
        Constraints can reduce the degrees of freedom. A rigid body with one point fixed (spherical joint)
        has 3 degrees of freedom. A body with one axis fixed (axle) has 1 degree of freedom.
      </p>

      <Example title="Constrained Systems">
        <p className="mb-2">
          <strong>Gyroscope:</strong> One point fixed, 3 rotational degrees of freedom.
        </p>
        <p className="mb-2">
          <strong>Door on hinges:</strong> One axis fixed, 1 degree of freedom (the angle of opening).
        </p>
        <p className="mb-2">
          <strong>Ball on table:</strong> 5 degrees of freedom (2 position, 3 rotation) minus rolling constraints.
        </p>
        <p>
          The rolling constraint <InlineMath>{'\\dot{\\mathbf{R}} = \\boldsymbol{\\omega} \\times R\\mathbf{n}'}</InlineMath>
          is nonholonomic: it reduces velocities, not configurations.
        </p>
      </Example>
    </LessonLayout>
  );
}
