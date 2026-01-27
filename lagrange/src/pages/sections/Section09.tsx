import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Euclidean Group</h2>

      <p className="mb-4">
        When analyzing motion in non-inertial reference frames, we need to understand how the laws
        of mechanics transform under changes of reference frame. The mathematical foundation for
        this is the <em>Euclidean group</em>, which describes all rigid motions of space: translations
        and rotations. This group structure is essential for understanding fictitious forces and
        the principle of relativity in classical mechanics.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Euclidean Space</h3>

      <Definition title="Euclidean Space">
        <p>
          <strong>Euclidean space</strong> <InlineMath>{`\\mathbb{E}^n`}</InlineMath> is an affine
          space modeled on <InlineMath>{`\\mathbb{R}^n`}</InlineMath> with a positive-definite inner
          product. Points in <InlineMath>{`\\mathbb{E}^n`}</InlineMath> do not have a preferred origin;
          only differences between points (vectors) can be added and measured.
        </p>
        <p className="mt-2">
          The distance between points <InlineMath>{`P`}</InlineMath> and <InlineMath>{`Q`}</InlineMath> is:
        </p>
        <MathBlock>{`d(P, Q) = \\|\\overrightarrow{PQ}\\| = \\sqrt{\\langle \\overrightarrow{PQ}, \\overrightarrow{PQ} \\rangle}`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Rigid Motions</h3>

      <Definition title="Rigid Motion (Isometry)">
        <p>
          A <strong>rigid motion</strong> or <strong>isometry</strong> of Euclidean space is a
          transformation <InlineMath>{`\\phi: \\mathbb{E}^n \\to \\mathbb{E}^n`}</InlineMath> that
          preserves distances:
        </p>
        <MathBlock>{`d(\\phi(P), \\phi(Q)) = d(P, Q)`}</MathBlock>
        <p className="mt-2">
          for all points <InlineMath>{`P, Q`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Structure of Rigid Motions">
        <p className="mb-2">
          Every rigid motion of <InlineMath>{`\\mathbb{E}^n`}</InlineMath> can be written as a
          composition of a translation and a linear isometry (rotation or reflection):
        </p>
        <MathBlock>{`\\phi(\\mathbf{r}) = R\\mathbf{r} + \\mathbf{a}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`R \\in O(n)`}</InlineMath> is an orthogonal matrix
          and <InlineMath>{`\\mathbf{a} \\in \\mathbb{R}^n`}</InlineMath> is a translation vector.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Euclidean Group SE(3)</h3>

      <Definition title="Special Euclidean Group">
        <p>
          The <strong>special Euclidean group</strong> <InlineMath>{`SE(n)`}</InlineMath> consists of
          all orientation-preserving rigid motions (those with <InlineMath>{`\\det(R) = +1`}</InlineMath>):
        </p>
        <MathBlock>{`SE(n) = \\{(R, \\mathbf{a}) : R \\in SO(n), \\, \\mathbf{a} \\in \\mathbb{R}^n\\}`}</MathBlock>
        <p className="mt-2">
          For 3D space, <InlineMath>{`SE(3)`}</InlineMath> is the group of proper rigid motions,
          combining rotations (<InlineMath>{`SO(3)`}</InlineMath>) and translations (<InlineMath>{`\\mathbb{R}^3`}</InlineMath>).
        </p>
      </Definition>

      <Theorem title="Semidirect Product Structure">
        <p className="mb-2">
          The Euclidean group has the structure of a <strong>semidirect product</strong>:
        </p>
        <MathBlock>{`SE(3) = SO(3) \\ltimes \\mathbb{R}^3`}</MathBlock>
        <p className="mt-2">
          The group operation is:
        </p>
        <MathBlock>{`(R_1, \\mathbf{a}_1) \\cdot (R_2, \\mathbf{a}_2) = (R_1 R_2, R_1 \\mathbf{a}_2 + \\mathbf{a}_1)`}</MathBlock>
        <p className="mt-2">
          Note that translations do not commute with rotations: the rotation acts on the translation
          vector.
        </p>
      </Theorem>

      <Example title="Composition of Rigid Motions">
        <p className="mb-3">
          Consider a rotation <InlineMath>{`R`}</InlineMath> about the origin followed by a
          translation <InlineMath>{`\\mathbf{a}`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{r}' = R\\mathbf{r} + \\mathbf{a}`}</MathBlock>
        <p className="mb-2">
          If we instead translate first and then rotate:
        </p>
        <MathBlock>{`\\mathbf{r}'' = R(\\mathbf{r} + \\mathbf{a}) = R\\mathbf{r} + R\\mathbf{a}`}</MathBlock>
        <p className="mt-2">
          The results differ: <InlineMath>{`\\mathbf{r}' \\neq \\mathbf{r}''`}</InlineMath> unless
          <InlineMath>{`R\\mathbf{a} = \\mathbf{a}`}</InlineMath>. This non-commutativity is captured
          by the semidirect product structure.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Matrix Representation</h3>

      <Definition title="Homogeneous Coordinates">
        <p>
          Elements of <InlineMath>{`SE(3)`}</InlineMath> can be represented as <InlineMath>{`4 \\times 4`}</InlineMath>
          matrices acting on homogeneous coordinates:
        </p>
        <MathBlock>{`\\begin{pmatrix} \\mathbf{r}' \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} R & \\mathbf{a} \\\\ \\mathbf{0}^T & 1 \\end{pmatrix} \\begin{pmatrix} \\mathbf{r} \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          This representation makes group multiplication correspond to matrix multiplication.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lie Algebra of SE(3)</h3>

      <Definition title="Lie Algebra se(3)">
        <p>
          The <strong>Lie algebra</strong> <InlineMath>{`\\mathfrak{se}(3)`}</InlineMath> of <InlineMath>{`SE(3)`}</InlineMath>
          consists of <InlineMath>{`4 \\times 4`}</InlineMath> matrices of the form:
        </p>
        <MathBlock>{`\\xi = \\begin{pmatrix} \\Omega & \\mathbf{v} \\\\ \\mathbf{0}^T & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\Omega`}</InlineMath> is a <InlineMath>{`3 \\times 3`}</InlineMath>
          antisymmetric matrix (element of <InlineMath>{`\\mathfrak{so}(3)`}</InlineMath>)
          and <InlineMath>{`\\mathbf{v} \\in \\mathbb{R}^3`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Generators of SE(3)">
        <p className="mb-2">
          The Lie algebra <InlineMath>{`\\mathfrak{se}(3)`}</InlineMath> is 6-dimensional, with:
        </p>
        <ul className="list-disc list-inside mb-2 text-dark-300 space-y-1">
          <li>3 generators <InlineMath>{`J_1, J_2, J_3`}</InlineMath> for rotations about the <InlineMath>{`x, y, z`}</InlineMath> axes</li>
          <li>3 generators <InlineMath>{`P_1, P_2, P_3`}</InlineMath> for translations along the <InlineMath>{`x, y, z`}</InlineMath> axes</li>
        </ul>
        <p className="mt-2">
          The commutation relations are:
        </p>
        <MathBlock>{`[J_i, J_j] = \\epsilon_{ijk} J_k, \\quad [J_i, P_j] = \\epsilon_{ijk} P_k, \\quad [P_i, P_j] = 0`}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reference Frames</h3>

      <Definition title="Reference Frame">
        <p>
          A <strong>reference frame</strong> in Euclidean space consists of:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-300 space-y-1">
          <li>An origin point <InlineMath>{`O`}</InlineMath></li>
          <li>An orthonormal basis <InlineMath>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          Two reference frames are related by an element of <InlineMath>{`SE(3)`}</InlineMath>. If
          frame <InlineMath>{`S'`}</InlineMath> has origin at <InlineMath>{`\\mathbf{a}`}</InlineMath>
          and basis vectors <InlineMath>{`R\\mathbf{e}_i`}</InlineMath> relative to frame <InlineMath>{`S`}</InlineMath>,
          then coordinates transform as <InlineMath>{`\\mathbf{r}_S = R\\mathbf{r}_{S'} + \\mathbf{a}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Rotating Reference Frame">
        <p className="mb-3">
          Consider a reference frame <InlineMath>{`S'`}</InlineMath> rotating with angular
          velocity <InlineMath>{`\\boldsymbol{\\omega}`}</InlineMath> about the origin of an inertial
          frame <InlineMath>{`S`}</InlineMath>. The rotation matrix <InlineMath>{`R(t)`}</InlineMath>
          satisfies:
        </p>
        <MathBlock>{`\\dot{R} = \\Omega R, \\quad \\text{where } \\Omega_{ij} = \\epsilon_{ijk}\\omega_k`}</MathBlock>
        <p className="mt-2">
          This gives rise to the Coriolis and centrifugal forces in the rotating frame.
        </p>
      </Example>

      <Callout type="info" title="Galilean vs. Euclidean Group">
        <p>
          The Euclidean group describes spatial transformations. For full spacetime transformations
          in classical mechanics, we need the <strong>Galilean group</strong>, which includes time
          translations and velocity boosts. The Galilean group is a 10-parameter group containing
          <InlineMath>{`SE(3)`}</InlineMath> as a subgroup. In special relativity, the Galilean group
          is replaced by the Poincare group.
        </p>
      </Callout>

      <Callout type="success" title="Key Insight">
        <p>
          The Euclidean group <InlineMath>{`SE(3) = SO(3) \\ltimes \\mathbb{R}^3`}</InlineMath> captures
          all possible rigid motions of 3D space. Its semidirect product structure reflects the
          non-commutative relationship between rotations and translations. Understanding this group
          is essential for analyzing mechanics in non-inertial frames and for robotics, where rigid
          body motion is fundamental.
        </p>
      </Callout>
    </LessonLayout>
  );
}
