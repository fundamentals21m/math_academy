import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2 className="text-2xl font-semibold mb-4">The Rank Theorem</h2>

      <p className="mb-4">
        The rank theorem describes the local structure of smooth maps of constant rank.
        It says that such maps can be written in a simple canonical form after suitable
        changes of coordinates in both the domain and range. This is a far-reaching
        generalization of both the inverse and implicit function theorems.
      </p>

      <Definition title="9.32 - Rank of a Linear Map">
        <p className="mb-3">
          The <em>rank</em> of a linear transformation <InlineMath>{'A: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath>
          is the dimension of its range, denoted <InlineMath>{'\\text{rank}(A)'}</InlineMath> or <InlineMath>{'\\text{rk}(A)'}</InlineMath>.
        </p>
        <p className="mb-3">
          Equivalently, <InlineMath>{'\\text{rank}(A)'}</InlineMath> equals the number of linearly independent rows
          (or columns) of the matrix representing <InlineMath>{'A'}</InlineMath>.
        </p>
        <p>
          For a differentiable map <InlineMath>{'\\mathbf{f}'}</InlineMath>, the rank at <InlineMath>{'\\mathbf{x}'}</InlineMath> is
          <InlineMath>{'\\text{rank}(\\mathbf{f}\'(\\mathbf{x}))'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <p className="mb-3">
          For an <InlineMath>{'m \\times n'}</InlineMath> matrix, the rank is at most <InlineMath>{'\\min(m, n)'}</InlineMath>.
        </p>
        <ul className="list-disc list-inside">
          <li>Rank <InlineMath>{'= n'}</InlineMath> means <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally injective (immersion)</li>
          <li>Rank <InlineMath>{'= m'}</InlineMath> means <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally surjective (submersion)</li>
          <li>Rank <InlineMath>{'= n = m'}</InlineMath> means <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally invertible (covered by inverse function theorem)</li>
        </ul>
      </Callout>

      <Theorem
        title="9.33 - The Rank Theorem"
        proof={
          <>
            <p className="mb-3">
              <strong>Step 1: Normalization.</strong> By permuting coordinates and composing with linear maps,
              we may assume <InlineMath>{'\\mathbf{a} = \\mathbf{0}'}</InlineMath>, <InlineMath>{'\\mathbf{f}(\\mathbf{0}) = \\mathbf{0}'}</InlineMath>,
              and the upper-left <InlineMath>{'r \\times r'}</InlineMath> submatrix of <InlineMath>{'\\mathbf{f}\'(\\mathbf{0})'}</InlineMath> is the identity.
            </p>
            <p className="mb-3">
              <strong>Step 2: First change of coordinates.</strong>
              Partition <InlineMath>{'\\mathbf{x} = (\\mathbf{x}_1, \\mathbf{x}_2)'}</InlineMath> where <InlineMath>{'\\mathbf{x}_1 \\in \\mathbb{R}^r'}</InlineMath>,
              <InlineMath>{'\\mathbf{x}_2 \\in \\mathbb{R}^{n-r}'}</InlineMath>. Define
            </p>
            <MathBlock>{'\\mathbf{G}(\\mathbf{x}) = (f_1(\\mathbf{x}), \\ldots, f_r(\\mathbf{x}), x_{r+1}, \\ldots, x_n)'}</MathBlock>
            <p className="mb-3">
              The Jacobian of <InlineMath>{'\\mathbf{G}'}</InlineMath> at <InlineMath>{'\\mathbf{0}'}</InlineMath> has the form
            </p>
            <MathBlock>{'\\mathbf{G}\'(\\mathbf{0}) = \\begin{pmatrix} I_r & * \\\\ 0 & I_{n-r} \\end{pmatrix}'}</MathBlock>
            <p className="mb-3">
              This is invertible, so <InlineMath>{'\\mathbf{G}'}</InlineMath> is a local diffeomorphism by the inverse function theorem.
              Let <InlineMath>{'\\mathbf{H} = \\mathbf{G}^{-1}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 3: Structure of composite.</strong>
              Define <InlineMath>{'\\boldsymbol{\\phi} = \\mathbf{f} \\circ \\mathbf{H}'}</InlineMath>. Then
              <InlineMath>{'\\boldsymbol{\\phi}(\\mathbf{u}) = \\mathbf{f}(\\mathbf{H}(\\mathbf{u}))'}</InlineMath>.
              By construction, the first <InlineMath>{'r'}</InlineMath> components of <InlineMath>{'\\boldsymbol{\\phi}'}</InlineMath> are
              <InlineMath>{'u_1, \\ldots, u_r'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'\\text{rank}(\\boldsymbol{\\phi}\'(\\mathbf{u})) = r'}</InlineMath> (rank is preserved by diffeomorphisms),
              and the first <InlineMath>{'r'}</InlineMath> rows are linearly independent (they form <InlineMath>{'[I_r \\,|\\, 0]'}</InlineMath>),
              the remaining <InlineMath>{'m - r'}</InlineMath> rows must be linear combinations of the first <InlineMath>{'r'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 4: Independence of last variables.</strong>
              The components <InlineMath>{'\\phi_{r+1}, \\ldots, \\phi_m'}</InlineMath> depend only on <InlineMath>{'u_1, \\ldots, u_r'}</InlineMath>
              (their partials with respect to <InlineMath>{'u_{r+1}, \\ldots, u_n'}</InlineMath> vanish).
            </p>
            <p className="mb-3">
              <strong>Step 5: Second change of coordinates.</strong>
              Define <InlineMath>{'\\mathbf{K}: \\mathbb{R}^m \\to \\mathbb{R}^m'}</InlineMath> by
            </p>
            <MathBlock>{'\\mathbf{K}(\\mathbf{y}) = (y_1, \\ldots, y_r, y_{r+1} - \\phi_{r+1}(y_1, \\ldots, y_r, 0, \\ldots, 0), \\ldots)'}</MathBlock>
            <p>
              Then <InlineMath>{'\\mathbf{K} \\circ \\boldsymbol{\\phi}(\\mathbf{u}) = (u_1, \\ldots, u_r, 0, \\ldots, 0)'}</InlineMath>,
              which is the canonical form.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}^1(E)'}</InlineMath> where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open,
          <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath>, and <InlineMath>{'\\text{rank}(\\mathbf{f}\'(\\mathbf{x})) = r'}</InlineMath>
          for all <InlineMath>{'\\mathbf{x}'}</InlineMath> in a neighborhood of <InlineMath>{'\\mathbf{a} \\in E'}</InlineMath>.
        </p>
        <p className="mb-3">
          Then there exist open neighborhoods <InlineMath>{'U \\subset \\mathbb{R}^n'}</InlineMath> of <InlineMath>{'\\mathbf{a}'}</InlineMath>
          and <InlineMath>{'V \\subset \\mathbb{R}^m'}</InlineMath> of <InlineMath>{'\\mathbf{f}(\\mathbf{a})'}</InlineMath>, and
          <InlineMath>{'\\mathscr{C}^1'}</InlineMath> diffeomorphisms <InlineMath>{'\\mathbf{H}: W \\to U'}</InlineMath>
          and <InlineMath>{'\\mathbf{K}: V \\to V\''}</InlineMath>, such that
        </p>
        <MathBlock>{'(\\mathbf{K} \\circ \\mathbf{f} \\circ \\mathbf{H})(\\mathbf{u}) = (u_1, \\ldots, u_r, 0, \\ldots, 0)'}</MathBlock>
        <p className="mt-3">
          for all <InlineMath>{'\\mathbf{u}'}</InlineMath> in a neighborhood of <InlineMath>{'\\mathbf{H}^{-1}(\\mathbf{a})'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="9.34 - Projection as Canonical Form">
        <p className="mb-3">
          The canonical form <InlineMath>{'(u_1, \\ldots, u_r, 0, \\ldots, 0)'}</InlineMath> is simply the projection
          <InlineMath>{'\\pi_r: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> defined by
        </p>
        <MathBlock>{'\\pi_r(u_1, \\ldots, u_n) = (u_1, \\ldots, u_r, 0, \\ldots, 0)'}</MathBlock>
        <p className="mb-3">
          The rank theorem says that every smooth map of constant rank <InlineMath>{'r'}</InlineMath> looks
          like this projection in appropriate coordinates.
        </p>
        <p>
          This means: the image locally looks like <InlineMath>{'\\mathbb{R}^r \\times \\{\\mathbf{0}\\}'}</InlineMath>,
          and the fibers (preimages of points) locally look like <InlineMath>{'\\{*\\} \\times \\mathbb{R}^{n-r}'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="9.35 - Corollaries: Immersions and Submersions"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> If <InlineMath>{'r = n \\leq m'}</InlineMath>, the canonical form is
              <InlineMath>{'(u_1, \\ldots, u_n, 0, \\ldots, 0)'}</InlineMath>. This is injective, so <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally injective.
              The image is locally an <InlineMath>{'n'}</InlineMath>-dimensional submanifold.
            </p>
            <p className="mb-3">
              <strong>(b)</strong> If <InlineMath>{'r = m \\leq n'}</InlineMath>, the canonical form is
              <InlineMath>{'(u_1, \\ldots, u_m)'}</InlineMath> (projection onto first <InlineMath>{'m'}</InlineMath> coordinates).
              This is surjective onto a neighborhood, so <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally surjective.
              The preimage of each point is locally an <InlineMath>{'(n-m)'}</InlineMath>-dimensional submanifold.
            </p>
            <p>
              <strong>(c)</strong> When <InlineMath>{'r = m = n'}</InlineMath>, both conditions hold, giving the inverse function theorem.
            </p>
          </>
        }
      >
        <p className="mb-3">
          <strong>(a) Immersions:</strong> If <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> has rank <InlineMath>{'n'}</InlineMath>
          (full column rank, <InlineMath>{'n \\leq m'}</InlineMath>), then <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally one-to-one.
        </p>
        <p className="mb-3">
          <strong>(b) Submersions:</strong> If <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> has rank <InlineMath>{'m'}</InlineMath>
          (full row rank, <InlineMath>{'m \\leq n'}</InlineMath>), then <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally onto.
          Moreover, the preimage <InlineMath>{'\\mathbf{f}^{-1}(\\mathbf{c})'}</InlineMath> is locally an
          <InlineMath>{'(n-m)'}</InlineMath>-dimensional smooth submanifold.
        </p>
      </Theorem>

      <Example title="9.36 - A Submersion Example">
        <p className="mb-3">
          Consider <InlineMath>{'f: \\mathbb{R}^3 \\to \\mathbb{R}'}</InlineMath> defined by <InlineMath>{'f(x, y, z) = x^2 + y^2 + z^2'}</InlineMath>.
        </p>
        <MathBlock>{'\\nabla f = (2x, 2y, 2z)'}</MathBlock>
        <p className="mb-3">
          This has rank <InlineMath>{'1'}</InlineMath> (full row rank for a scalar function) everywhere except at the origin.
          By the submersion corollary, <InlineMath>{'f^{-1}(c)'}</InlineMath> for <InlineMath>{'c > 0'}</InlineMath> is a
          <InlineMath>{'(3-1) = 2'}</InlineMath>-dimensional submanifold: the sphere of radius <InlineMath>{'\\sqrt{c}'}</InlineMath>.
        </p>
        <p>
          At the origin, the rank drops to <InlineMath>{'0'}</InlineMath>, and indeed <InlineMath>{'f^{-1}(0) = \\{\\mathbf{0}\\}'}</InlineMath>
          is just a point, not a 2-dimensional manifold.
        </p>
      </Example>

      <Callout type="warning" title="Constant Rank Assumption">
        <p className="mb-3">
          The constant rank hypothesis is essential. If the rank varies, the structure can be more complicated.
        </p>
        <p>
          For example, the map <InlineMath>{'f(x) = x^2'}</InlineMath> from <InlineMath>{'\\mathbb{R}'}</InlineMath> to <InlineMath>{'\\mathbb{R}'}</InlineMath>
          has rank <InlineMath>{'1'}</InlineMath> everywhere except at <InlineMath>{'x = 0'}</InlineMath> where the rank drops to <InlineMath>{'0'}</InlineMath>.
          At the origin, the canonical form from the rank theorem does not apply.
        </p>
      </Callout>

      <Example title="9.37 - The Whitney Umbrella">
        <p className="mb-3">
          Consider the map <InlineMath>{'\\mathbf{f}: \\mathbb{R}^2 \\to \\mathbb{R}^3'}</InlineMath> given by
        </p>
        <MathBlock>{'\\mathbf{f}(u, v) = (uv, u, v^2)'}</MathBlock>
        <p className="mb-3">
          The Jacobian is
        </p>
        <MathBlock>{'\\mathbf{f}\'(u, v) = \\begin{pmatrix} v & u \\\\ 1 & 0 \\\\ 0 & 2v \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          At <InlineMath>{'(0, 0)'}</InlineMath>, the rank is <InlineMath>{'1'}</InlineMath> (only the second row is nonzero).
          Elsewhere, the rank is <InlineMath>{'2'}</InlineMath>. The image is the Whitney umbrella, a classic
          example of a surface with a singular line.
        </p>
        <p>
          The rank theorem applies away from the <InlineMath>{'v'}</InlineMath>-axis, giving a local embedding.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The rank of <InlineMath>{'\\mathbf{f}'}</InlineMath> at <InlineMath>{'\\mathbf{x}'}</InlineMath> is the rank of the Jacobian matrix <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath></li>
        <li>A map of constant rank <InlineMath>{'r'}</InlineMath> locally looks like projection onto the first <InlineMath>{'r'}</InlineMath> coordinates</li>
        <li>Immersions (rank <InlineMath>{'= n'}</InlineMath>): locally one-to-one, image is a submanifold</li>
        <li>Submersions (rank <InlineMath>{'= m'}</InlineMath>): locally onto, preimages are submanifolds</li>
        <li>The constant rank hypothesis is essential for the theorem to apply</li>
        <li>The rank theorem unifies the inverse and implicit function theorems</li>
      </ul>
    </LessonLayout>
  );
}
