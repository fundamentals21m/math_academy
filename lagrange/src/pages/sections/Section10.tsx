import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Euclidean Isometries</h2>

      <p className="mb-4">
        Isometries are the distance-preserving transformations of Euclidean space. They form
        the foundation for understanding symmetry in mechanics and the transformation of
        physical quantities between reference frames. In this section, we focus on the
        rotation group <InlineMath>{`SO(3)`}</InlineMath> and its properties, which are essential
        for describing the orientation of rigid bodies and the transformation of vectors.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Orthogonal Group</h3>

      <Definition title="Orthogonal Group">
        <p>
          The <strong>orthogonal group</strong> <InlineMath>{`O(n)`}</InlineMath> consists of
          all <InlineMath>{`n \\times n`}</InlineMath> real matrices <InlineMath>{`R`}</InlineMath>
          that preserve the Euclidean inner product:
        </p>
        <MathBlock>{`O(n) = \\{R \\in \\mathbb{R}^{n \\times n} : R^T R = I\\}`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{`\\langle R\\mathbf{v}, R\\mathbf{w} \\rangle = \\langle \\mathbf{v}, \\mathbf{w} \\rangle`}</InlineMath>
          for all vectors <InlineMath>{`\\mathbf{v}, \\mathbf{w}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Properties of Orthogonal Matrices">
        <p className="mb-2">
          For <InlineMath>{`R \\in O(n)`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mb-2 text-dark-300 space-y-1">
          <li><InlineMath>{`R^{-1} = R^T`}</InlineMath> (inverse equals transpose)</li>
          <li><InlineMath>{`\\det(R) = \\pm 1`}</InlineMath></li>
          <li>Rows and columns form orthonormal bases</li>
          <li>Eigenvalues have magnitude 1</li>
        </ol>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Rotation Group SO(3)</h3>

      <Definition title="Special Orthogonal Group">
        <p>
          The <strong>special orthogonal group</strong> <InlineMath>{`SO(n)`}</InlineMath> consists
          of orthogonal matrices with determinant <InlineMath>{`+1`}</InlineMath>:
        </p>
        <MathBlock>{`SO(n) = \\{R \\in O(n) : \\det(R) = +1\\}`}</MathBlock>
        <p className="mt-2">
          In 3D, <InlineMath>{`SO(3)`}</InlineMath> is the group of <strong>proper rotations</strong>.
          Matrices with <InlineMath>{`\\det(R) = -1`}</InlineMath> are improper rotations (including
          reflections).
        </p>
      </Definition>

      <Theorem title="Euler's Rotation Theorem">
        <p className="mb-2">
          Every proper rotation in 3D can be expressed as a rotation by some
          angle <InlineMath>{`\\theta`}</InlineMath> about some axis <InlineMath>{`\\hat{\\mathbf{n}}`}</InlineMath>:
        </p>
        <MathBlock>{`R = R(\\hat{\\mathbf{n}}, \\theta)`}</MathBlock>
        <p className="mt-2">
          The axis <InlineMath>{`\\hat{\\mathbf{n}}`}</InlineMath> is the eigenvector of <InlineMath>{`R`}</InlineMath>
          with eigenvalue 1. The angle is determined by <InlineMath>{`\\text{Tr}(R) = 1 + 2\\cos\\theta`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Rotation about z-axis">
        <p className="mb-3">
          A rotation by angle <InlineMath>{`\\theta`}</InlineMath> about the <InlineMath>{`z`}</InlineMath>-axis
          has matrix:
        </p>
        <MathBlock>{`R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          The <InlineMath>{`z`}</InlineMath>-axis is fixed (<InlineMath>{`R_z \\hat{\\mathbf{z}} = \\hat{\\mathbf{z}}`}</InlineMath>),
          and the trace is <InlineMath>{`1 + 2\\cos\\theta`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Parameterizations of SO(3)</h3>

      <Definition title="Euler Angles">
        <p>
          <strong>Euler angles</strong> <InlineMath>{`(\\phi, \\theta, \\psi)`}</InlineMath> parameterize
          rotations as a sequence of three rotations about specified axes. The ZYZ convention:
        </p>
        <MathBlock>{`R(\\phi, \\theta, \\psi) = R_z(\\phi) R_y(\\theta) R_z(\\psi)`}</MathBlock>
        <p className="mt-2">
          Euler angles have singularities (gimbal lock) when <InlineMath>{`\\theta = 0`}</InlineMath>
          or <InlineMath>{`\\pi`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Rodrigues Formula">
        <p>
          The rotation matrix for angle <InlineMath>{`\\theta`}</InlineMath> about unit
          axis <InlineMath>{`\\hat{\\mathbf{n}}`}</InlineMath> is given by:
        </p>
        <MathBlock>{`R = I + \\sin\\theta \\, [\\hat{\\mathbf{n}}]_\\times + (1 - \\cos\\theta)[\\hat{\\mathbf{n}}]_\\times^2`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`[\\hat{\\mathbf{n}}]_\\times`}</InlineMath> is the skew-symmetric matrix
          such that <InlineMath>{`[\\hat{\\mathbf{n}}]_\\times \\mathbf{v} = \\hat{\\mathbf{n}} \\times \\mathbf{v}`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Lie Algebra so(3)</h3>

      <Definition title="Lie Algebra so(3)">
        <p>
          The <strong>Lie algebra</strong> <InlineMath>{`\\mathfrak{so}(3)`}</InlineMath> consists
          of <InlineMath>{`3 \\times 3`}</InlineMath> antisymmetric matrices:
        </p>
        <MathBlock>{`\\mathfrak{so}(3) = \\{\\Omega \\in \\mathbb{R}^{3 \\times 3} : \\Omega^T = -\\Omega\\}`}</MathBlock>
        <p className="mt-2">
          Each <InlineMath>{`\\Omega`}</InlineMath> corresponds to a vector <InlineMath>{`\\boldsymbol{\\omega}`}</InlineMath>
          via:
        </p>
        <MathBlock>{`\\Omega = [\\boldsymbol{\\omega}]_\\times = \\begin{pmatrix} 0 & -\\omega_3 & \\omega_2 \\\\ \\omega_3 & 0 & -\\omega_1 \\\\ -\\omega_2 & \\omega_1 & 0 \\end{pmatrix}`}</MathBlock>
      </Definition>

      <Theorem title="Exponential Map">
        <p className="mb-2">
          The exponential map <InlineMath>{`\\exp: \\mathfrak{so}(3) \\to SO(3)`}</InlineMath> is surjective:
        </p>
        <MathBlock>{`R = \\exp(\\theta[\\hat{\\mathbf{n}}]_\\times) = I + \\sin\\theta \\, [\\hat{\\mathbf{n}}]_\\times + (1 - \\cos\\theta)[\\hat{\\mathbf{n}}]_\\times^2`}</MathBlock>
        <p className="mt-2">
          Every rotation is the exponential of an antisymmetric matrix. The vector <InlineMath>{`\\theta\\hat{\\mathbf{n}}`}</InlineMath>
          is called the <strong>rotation vector</strong>.
        </p>
      </Theorem>

      <Example title="Infinitesimal Rotations">
        <p className="mb-3">
          For small angle <InlineMath>{`\\epsilon`}</InlineMath>:
        </p>
        <MathBlock>{`R(\\hat{\\mathbf{n}}, \\epsilon) \\approx I + \\epsilon [\\hat{\\mathbf{n}}]_\\times`}</MathBlock>
        <p className="mt-2">
          Infinitesimal rotations commute to first order: <InlineMath>{`R_x(\\epsilon)R_y(\\epsilon) \\approx R_y(\\epsilon)R_x(\\epsilon)`}</InlineMath>.
          However, finite rotations do not commute.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Angular Velocity</h3>

      <Definition title="Angular Velocity">
        <p>
          For a time-dependent rotation <InlineMath>{`R(t)`}</InlineMath>, the <strong>angular velocity</strong>
          is defined by:
        </p>
        <MathBlock>{`\\dot{R} = [\\boldsymbol{\\omega}]_\\times R \\quad \\text{(space frame)}`}</MathBlock>
        <MathBlock>{`\\dot{R} = R [\\boldsymbol{\\Omega}]_\\times \\quad \\text{(body frame)}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\boldsymbol{\\omega}`}</InlineMath> is the angular velocity in the space
          frame and <InlineMath>{`\\boldsymbol{\\Omega} = R^T \\boldsymbol{\\omega}`}</InlineMath>
          in the body frame.
        </p>
      </Definition>

      <Theorem title="Velocity of a Rotating Point">
        <p className="mb-2">
          If a point <InlineMath>{`P`}</InlineMath> is fixed in a rotating body, its velocity in the
          space frame is:
        </p>
        <MathBlock>{`\\dot{\\mathbf{r}} = \\boldsymbol{\\omega} \\times \\mathbf{r}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathbf{r}`}</InlineMath> is the position of <InlineMath>{`P`}</InlineMath>
          relative to the center of rotation.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Classification of Isometries</h3>

      <Theorem title="Classification Theorem">
        <p className="mb-2">
          Every isometry of <InlineMath>{`\\mathbb{E}^3`}</InlineMath> is one of:
        </p>
        <ol className="list-decimal list-inside mb-2 text-dark-300 space-y-1">
          <li><strong>Identity:</strong> <InlineMath>{`\\phi = I`}</InlineMath></li>
          <li><strong>Translation:</strong> <InlineMath>{`\\phi(\\mathbf{r}) = \\mathbf{r} + \\mathbf{a}`}</InlineMath></li>
          <li><strong>Rotation:</strong> <InlineMath>{`\\phi(\\mathbf{r}) = R\\mathbf{r}`}</InlineMath>, <InlineMath>{`R \\in SO(3)`}</InlineMath></li>
          <li><strong>Screw motion:</strong> Rotation about an axis combined with translation along it</li>
          <li><strong>Reflection:</strong> <InlineMath>{`\\det(R) = -1`}</InlineMath>, fixes a plane</li>
          <li><strong>Glide reflection:</strong> Reflection combined with translation parallel to the mirror</li>
          <li><strong>Rotoreflection:</strong> Rotation combined with reflection</li>
        </ol>
      </Theorem>

      <Callout type="info" title="Quaternions">
        <p>
          Rotations can also be represented using unit quaternions <InlineMath>{`q = (\\cos(\\theta/2), \\sin(\\theta/2)\\hat{\\mathbf{n}})`}</InlineMath>.
          Quaternion multiplication corresponds to composition of rotations. Quaternions avoid gimbal
          lock and are computationally efficient, making them preferred in computer graphics and
          aerospace applications.
        </p>
      </Callout>

      <Callout type="success" title="Key Insight">
        <p>
          The rotation group <InlineMath>{`SO(3)`}</InlineMath> is the simplest non-abelian Lie group
          that appears throughout physics. Its structure, including the Lie
          algebra <InlineMath>{`\\mathfrak{so}(3)`}</InlineMath> and the exponential map, provides
          the mathematical foundation for understanding angular momentum, rigid body dynamics, and
          the transformation of physical quantities between reference frames. Mastering <InlineMath>{`SO(3)`}</InlineMath>
          is essential for advanced mechanics and quantum theory.
        </p>
      </Callout>
    </LessonLayout>
  );
}
