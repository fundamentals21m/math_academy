import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Euler Angles: Parameterizing SO(3)</h2>

      <p className="mb-4">
        To write down the Lagrangian for a rigid body, we need explicit coordinates on the configuration
        space SE(3). While the translational part <InlineMath>{'\\mathbb{R}^3'}</InlineMath> uses standard
        Cartesian coordinates, the rotational part SO(3) requires a more sophisticated parameterization.
        Euler angles provide one of the most important and widely-used coordinate systems for rotations.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Euler Angle Convention</h3>

      <p className="mb-4">
        There are many conventions for Euler angles, differing in the choice and order of rotation axes.
        We use the "zxz" convention, common in physics and classical mechanics:
      </p>

      <Definition title="Euler Angles (zxz Convention)">
        <p className="mb-2">
          The orientation of the body is specified by three angles <InlineMath>{'(\\psi, \\theta, \\varphi)'}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Precession <InlineMath>{'\\psi'}</InlineMath>:</strong> Rotate about the space-fixed z-axis
            (vertical) by angle <InlineMath>{'\\psi \\in [0, 2\\pi)'}</InlineMath>
          </li>
          <li>
            <strong>Nutation <InlineMath>{'\\theta'}</InlineMath>:</strong> Rotate about the new x-axis
            (line of nodes) by angle <InlineMath>{'\\theta \\in [0, \\pi]'}</InlineMath>
          </li>
          <li>
            <strong>Spin <InlineMath>{'\\varphi'}</InlineMath>:</strong> Rotate about the body-fixed z-axis
            (symmetry axis) by angle <InlineMath>{'\\varphi \\in [0, 2\\pi)'}</InlineMath>
          </li>
        </ol>
      </Definition>

      <Callout type="warning" title="Convention Variations">
        <p>
          Different authors use different conventions. Common alternatives include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Different rotation sequence (zyz, xyz, etc.)</li>
          <li>Different angle naming (<InlineMath>{'\\phi, \\theta, \\psi'}</InlineMath> with various meanings)</li>
          <li>Aircraft/aerospace: roll, pitch, yaw</li>
        </ul>
        <p className="mt-2">
          Always verify the convention when reading other sources.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Rotation Matrix</h3>

      <p className="mb-4">
        The total rotation matrix is the product of three elementary rotations:
      </p>

      <MathBlock>{'A(\\psi, \\theta, \\varphi) = R_z(\\psi) R_x(\\theta) R_z(\\varphi)'}</MathBlock>

      <p className="mb-4">
        where the elementary rotation matrices are:
      </p>

      <MathBlock>{'R_z(\\alpha) = \\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha & 0 \\\\ \\sin\\alpha & \\cos\\alpha & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}'}</MathBlock>

      <MathBlock>{'R_x(\\beta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\beta & -\\sin\\beta \\\\ 0 & \\sin\\beta & \\cos\\beta \\end{pmatrix}'}</MathBlock>

      <Theorem
        title="Euler Angle Rotation Matrix"
        proof={
          <>
            <p className="mb-2">
              Multiplying <InlineMath>{'R_z(\\psi)R_x(\\theta)R_z(\\varphi)'}</InlineMath>:
            </p>
            <p className="mb-2">
              First compute <InlineMath>{'R_x(\\theta)R_z(\\varphi)'}</InlineMath>:
            </p>
            <MathBlock>{'R_x(\\theta)R_z(\\varphi) = \\begin{pmatrix} \\cos\\varphi & -\\sin\\varphi & 0 \\\\ \\cos\\theta\\sin\\varphi & \\cos\\theta\\cos\\varphi & -\\sin\\theta \\\\ \\sin\\theta\\sin\\varphi & \\sin\\theta\\cos\\varphi & \\cos\\theta \\end{pmatrix}'}</MathBlock>
            <p>
              Then multiply on the left by <InlineMath>{'R_z(\\psi)'}</InlineMath> to get the full matrix.
            </p>
          </>
        }
      >
        <p>
          The full rotation matrix in terms of Euler angles is:
        </p>
        <MathBlock>{'A = \\begin{pmatrix} c_\\psi c_\\varphi - c_\\theta s_\\psi s_\\varphi & -c_\\psi s_\\varphi - c_\\theta s_\\psi c_\\varphi & s_\\theta s_\\psi \\\\ s_\\psi c_\\varphi + c_\\theta c_\\psi s_\\varphi & -s_\\psi s_\\varphi + c_\\theta c_\\psi c_\\varphi & -s_\\theta c_\\psi \\\\ s_\\theta s_\\varphi & s_\\theta c_\\varphi & c_\\theta \\end{pmatrix}'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'c_\\alpha = \\cos\\alpha'}</InlineMath>, <InlineMath>{'s_\\alpha = \\sin\\alpha'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Angular Velocity in Terms of Euler Angles</h3>

      <p className="mb-4">
        The angular velocity in the body frame can be expressed in terms of Euler angle rates:
      </p>

      <Theorem
        title="Angular Velocity Components"
        proof={
          <>
            <p className="mb-2">
              The angular velocity is the sum of contributions from each Euler angle rotation:
            </p>
            <MathBlock>{'\\boldsymbol{\\omega} = \\dot{\\psi}\\mathbf{e}_z + \\dot{\\theta}\\mathbf{n} + \\dot{\\varphi}\\mathbf{E}_3'}</MathBlock>
            <p className="mb-2">
              where <InlineMath>{'\\mathbf{n}'}</InlineMath> is the line of nodes and <InlineMath>{'\\mathbf{E}_3'}</InlineMath> is the body z-axis.
            </p>
            <p className="mb-2">
              Expressing these in the body frame:
            </p>
            <ul className="list-disc list-inside">
              <li><InlineMath>{'\\mathbf{e}_z'}</InlineMath> has body components <InlineMath>{'(\\sin\\theta\\sin\\varphi, \\sin\\theta\\cos\\varphi, \\cos\\theta)'}</InlineMath></li>
              <li><InlineMath>{'\\mathbf{n}'}</InlineMath> has body components <InlineMath>{'(\\cos\\varphi, -\\sin\\varphi, 0)'}</InlineMath></li>
              <li><InlineMath>{'\\mathbf{E}_3 = (0, 0, 1)'}</InlineMath></li>
            </ul>
          </>
        }
      >
        <p>
          The components of angular velocity in the body frame are:
        </p>
        <MathBlock>{'\\Omega_1 = \\dot{\\psi}\\sin\\theta\\sin\\varphi + \\dot{\\theta}\\cos\\varphi'}</MathBlock>
        <MathBlock>{'\\Omega_2 = \\dot{\\psi}\\sin\\theta\\cos\\varphi - \\dot{\\theta}\\sin\\varphi'}</MathBlock>
        <MathBlock>{'\\Omega_3 = \\dot{\\psi}\\cos\\theta + \\dot{\\varphi}'}</MathBlock>
      </Theorem>

      <p className="mb-4">
        These relations can be inverted to give the Euler angle rates in terms of angular velocities:
      </p>

      <MathBlock>{'\\dot{\\psi} = \\frac{\\Omega_1\\sin\\varphi + \\Omega_2\\cos\\varphi}{\\sin\\theta}'}</MathBlock>
      <MathBlock>{'\\dot{\\theta} = \\Omega_1\\cos\\varphi - \\Omega_2\\sin\\varphi'}</MathBlock>
      <MathBlock>{'\\dot{\\varphi} = \\Omega_3 - \\dot{\\psi}\\cos\\theta'}</MathBlock>

      <Callout type="danger" title="Gimbal Lock">
        <p>
          When <InlineMath>{'\\theta = 0'}</InlineMath> or <InlineMath>{'\\theta = \\pi'}</InlineMath>,
          the Euler angles become singular. The angles <InlineMath>{'\\psi'}</InlineMath> and
          <InlineMath>{'\\varphi'}</InlineMath> become indistinguishable, and the inverse relations fail.
          This is known as gimbal lock.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Kinetic Energy in Euler Angles</h3>

      <Theorem
        title="Rotational Kinetic Energy"
        proof={
          <>
            <p className="mb-2">
              Substituting the angular velocity expressions into <InlineMath>{'T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)'}</InlineMath>:
            </p>
            <p className="mb-2">
              For a symmetric top (<InlineMath>{'I_1 = I_2'}</InlineMath>):
            </p>
            <MathBlock>{'\\Omega_1^2 + \\Omega_2^2 = \\dot{\\psi}^2\\sin^2\\theta + \\dot{\\theta}^2'}</MathBlock>
            <MathBlock>{'\\Omega_3 = \\dot{\\psi}\\cos\\theta + \\dot{\\varphi}'}</MathBlock>
            <p>
              Combining these gives the kinetic energy formula.
            </p>
          </>
        }
      >
        <p>
          For a symmetric top with <InlineMath>{'I_1 = I_2'}</InlineMath>, the rotational kinetic energy is:
        </p>
        <MathBlock>{'T_{\\text{rot}} = \\frac{1}{2}I_1(\\dot{\\theta}^2 + \\dot{\\psi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})^2'}</MathBlock>
      </Theorem>

      <Example title="Free Symmetric Top">
        <p className="mb-2">
          For a torque-free symmetric top, the Lagrangian is:
        </p>
        <MathBlock>{'L = T = \\frac{1}{2}I_1(\\dot{\\theta}^2 + \\dot{\\psi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})^2'}</MathBlock>
        <p className="mb-2">
          Since <InlineMath>{'\\psi'}</InlineMath> and <InlineMath>{'\\varphi'}</InlineMath> are cyclic, their
          conjugate momenta are conserved:
        </p>
        <MathBlock>{'p_\\psi = \\frac{\\partial L}{\\partial \\dot{\\psi}} = I_1\\dot{\\psi}\\sin^2\\theta + I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})\\cos\\theta = L_z'}</MathBlock>
        <MathBlock>{'p_\\varphi = \\frac{\\partial L}{\\partial \\dot{\\varphi}} = I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi}) = I_3\\Omega_3 = L_3'}</MathBlock>
        <p className="mt-2">
          These are the z-component of angular momentum in the space and body frames, respectively.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Geometric Meaning</h3>

      <p className="mb-4">
        The Euler angles have clear geometric interpretations:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <InlineMath>{'\\psi'}</InlineMath> (precession): The azimuthal angle of the symmetry axis,
          measuring its rotation about the vertical
        </li>
        <li>
          <InlineMath>{'\\theta'}</InlineMath> (nutation): The polar angle of the symmetry axis,
          measuring its tilt from the vertical
        </li>
        <li>
          <InlineMath>{'\\varphi'}</InlineMath> (spin): The angle of rotation of the body about its
          symmetry axis
        </li>
      </ul>

      <Definition title="Line of Nodes">
        <p className="mb-2">
          The line of nodes is the intersection of the horizontal plane (perpendicular to the space z-axis)
          with the equatorial plane of the body (perpendicular to the body z-axis).
        </p>
        <p>
          It is the axis about which the nutation rotation <InlineMath>{'\\theta'}</InlineMath> occurs.
          The precession angle <InlineMath>{'\\psi'}</InlineMath> locates the line of nodes in the
          horizontal plane.
        </p>
      </Definition>

      <Example title="Spinning Coin">
        <p className="mb-2">
          When a coin spins on a table and begins to wobble:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li><InlineMath>{'\\varphi'}</InlineMath>: The coin spinning about its face normal</li>
          <li><InlineMath>{'\\theta'}</InlineMath>: The tilt of the coin from horizontal (nutation)</li>
          <li><InlineMath>{'\\psi'}</InlineMath>: The direction in which the coin is tilted (precession)</li>
        </ul>
        <p>
          As the coin loses energy, <InlineMath>{'\\theta \\to \\pi/2'}</InlineMath> (coin becomes vertical)
          while <InlineMath>{'\\dot{\\psi}'}</InlineMath> and <InlineMath>{'\\dot{\\varphi}'}</InlineMath> increase.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Alternative Representations</h3>

      <Callout type="info" title="Quaternions">
        <p>
          Euler angles suffer from gimbal lock and are not well-suited for numerical integration.
          Alternative representations include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Quaternions:</strong> A 4-parameter representation with no singularities</li>
          <li><strong>Rotation vectors:</strong> Axis-angle representation</li>
          <li><strong>Cayley-Klein parameters:</strong> Related to SU(2) spinors</li>
        </ul>
        <p className="mt-2">
          Quaternions are particularly popular in computer graphics, aerospace, and robotics.
        </p>
      </Callout>

      <p className="mb-4">
        Despite their limitations, Euler angles remain important because:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>They provide direct physical insight into precession, nutation, and spin</li>
        <li>The Lagrangian takes a simple form</li>
        <li>Cyclic coordinates lead to immediate conservation laws</li>
        <li>Historical importance in the development of mechanics</li>
      </ul>
    </LessonLayout>
  );
}
