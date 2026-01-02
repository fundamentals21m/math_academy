import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Introduction */}
      <p>
        The four fundamental subspaces come in <strong>orthogonal pairs</strong>. Understanding these
        perpendicular relationships reveals the deepest structure of any matrix.
      </p>

      <h2>Orthogonal Vectors</h2>

      <Definition title="Orthogonal Vectors" className="my-6">
        <p>
          Two vectors <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> are <strong>orthogonal</strong> (perpendicular) if their dot product is zero:
        </p>
        <MathBlock>
          {`\\mathbf{v}^T\\mathbf{w} = 0`}
        </MathBlock>
        <p className="mt-2">
          When <InlineMath>{`\\mathbf{v}^T\\mathbf{w} = 0`}</InlineMath>, the Pythagorean theorem holds:
        </p>
        <MathBlock>
          {`\\|\\mathbf{v}\\|^2 + \\|\\mathbf{w}\\|^2 = \\|\\mathbf{v} + \\mathbf{w}\\|^2`}
        </MathBlock>
      </Definition>

      <h2>Orthogonal Subspaces</h2>

      <Definition title="Orthogonal Subspaces" className="my-6">
        <p>
          Subspaces <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath> are <strong>orthogonal</strong> if every vector in <InlineMath>V</InlineMath>
          is perpendicular to every vector in <InlineMath>W</InlineMath>:
        </p>
        <MathBlock>
          {`\\mathbf{v}^T\\mathbf{w} = 0 \\quad \\text{for all } \\mathbf{v} \\in V \\text{ and } \\mathbf{w} \\in W`}
        </MathBlock>
      </Definition>

      <h2>The Fundamental Theorem</h2>

      <Theorem
        title="Orthogonality of the Four Subspaces"
        className="my-6"
        proof={
          <>
            <p><strong>Row space ⟂ Nullspace:</strong> Let <InlineMath>{`\\mathbf{x} \\in N(A)`}</InlineMath>, so <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>. This means:</p>
            <MathBlock>{`\\begin{bmatrix} \\text{row}_1 \\\\ \\text{row}_2 \\\\ \\vdots \\end{bmatrix} \\mathbf{x} = \\begin{bmatrix} 0 \\\\ 0 \\\\ \\vdots \\end{bmatrix}`}</MathBlock>
            <p>Each row is orthogonal to <InlineMath>{`\\mathbf{x}`}</InlineMath>. Since every vector in the row space is a combination of rows, and <InlineMath>{`\\mathbf{x}`}</InlineMath> is orthogonal to each row, <InlineMath>{`\\mathbf{x}`}</InlineMath> is orthogonal to the entire row space.</p>
            <p className="mt-2"><strong>Column space ⟂ Left nullspace:</strong> Apply the same argument to <InlineMath>A^T</InlineMath>. If <InlineMath>{`A^T\\mathbf{y} = \\mathbf{0}`}</InlineMath>, then <InlineMath>{`\\mathbf{y}`}</InlineMath> is orthogonal to every column of <InlineMath>A</InlineMath>, hence to <InlineMath>C(A)</InlineMath>.</p>
          </>
        }
      >
        <p>For any matrix <InlineMath>A</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>The <strong>row space</strong> <InlineMath>C(A^T)</InlineMath> is orthogonal to the <strong>nullspace</strong> <InlineMath>N(A)</InlineMath></li>
          <li>The <strong>column space</strong> <InlineMath>C(A)</InlineMath> is orthogonal to the <strong>left nullspace</strong> <InlineMath>N(A^T)</InlineMath></li>
        </ul>
        <MathBlock>
          {`C(A^T) \\perp N(A) \\quad \\text{in } \\mathbf{R}^n`}
        </MathBlock>
        <MathBlock>
          {`C(A) \\perp N(A^T) \\quad \\text{in } \\mathbf{R}^m`}
        </MathBlock>
      </Theorem>

      <Example title="Why the Row Space is Orthogonal to the Nullspace" className="my-6">
        <p>If <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>, then each row of <InlineMath>A</InlineMath> is perpendicular to <InlineMath>{`\\mathbf{x}`}</InlineMath>:</p>
        <MathBlock>
          {`A\\mathbf{x} = \\begin{bmatrix} \\text{row 1} \\\\ \\text{row 2} \\\\ \\vdots \\end{bmatrix}\\mathbf{x} = \\begin{bmatrix} 0 \\\\ 0 \\\\ \\vdots \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Each row dotted with <InlineMath>{`\\mathbf{x}`}</InlineMath> gives zero. So <InlineMath>{`\\mathbf{x}`}</InlineMath> is perpendicular to every row,
          and therefore to every combination of rows (the entire row space).
        </p>
      </Example>

      <h2>Orthogonal Complements</h2>

      <Definition title="Orthogonal Complement" className="my-6">
        <p>
          The <strong>orthogonal complement</strong> of a subspace <InlineMath>V</InlineMath>, written <InlineMath>V^\perp</InlineMath>,
          contains all vectors perpendicular to <InlineMath>V</InlineMath>:
        </p>
        <MathBlock>
          {`V^\\perp = \\{ \\mathbf{w} : \\mathbf{v}^T\\mathbf{w} = 0 \\text{ for all } \\mathbf{v} \\in V \\}`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Dimensions Add Up"
        className="my-6"
        proof={
          <>
            <p>Row space and nullspace are orthogonal in <InlineMath>{`\\mathbf{R}^n`}</InlineMath>. Their dimensions are <InlineMath>r</InlineMath> and <InlineMath>n - r</InlineMath>, which add to <InlineMath>n</InlineMath>.</p>
            <p className="mt-2">Since they are orthogonal and their dimensions sum to <InlineMath>n</InlineMath>, they are orthogonal complements: every vector in <InlineMath>{`\\mathbf{R}^n`}</InlineMath> can be written uniquely as a sum of a row space vector and a nullspace vector.</p>
            <p className="mt-2">Similarly, column space (dimension <InlineMath>r</InlineMath>) and left nullspace (dimension <InlineMath>m - r</InlineMath>) are orthogonal complements in <InlineMath>{`\\mathbf{R}^m`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          The orthogonal complement fills the rest of the space:
        </p>
        <MathBlock>
          {`\\dim(V) + \\dim(V^\\perp) = n`}
        </MathBlock>
        <p className="mt-2">
          For the four subspaces: <InlineMath>r + (n-r) = n</InlineMath> and <InlineMath>r + (m-r) = m</InlineMath>.
        </p>
      </Theorem>

      <h2>The Big Picture</h2>

      <div className="bg-gradient-to-r from-primary-500/10 via-dark-800/50 to-amber-500/10 rounded-xl p-6 my-6 border border-primary-500/20">
        <p className="text-center text-lg font-semibold mb-4">The Four Subspaces: Orthogonal Pairs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-primary-400 font-semibold mb-2">In <InlineMath>{`\\mathbf{R}^n`}</InlineMath>:</p>
            <p className="text-sm">Row space <InlineMath>C(A^T)</InlineMath></p>
            <p className="text-xs text-dark-400">dimension <InlineMath>r</InlineMath></p>
            <p className="text-lg my-2">⟂</p>
            <p className="text-sm">Nullspace <InlineMath>N(A)</InlineMath></p>
            <p className="text-xs text-dark-400">dimension <InlineMath>n - r</InlineMath></p>
          </div>
          <div className="text-center">
            <p className="text-amber-400 font-semibold mb-2">In <InlineMath>{`\\mathbf{R}^m`}</InlineMath>:</p>
            <p className="text-sm">Column space <InlineMath>C(A)</InlineMath></p>
            <p className="text-xs text-dark-400">dimension <InlineMath>r</InlineMath></p>
            <p className="text-lg my-2">⟂</p>
            <p className="text-sm">Left nullspace <InlineMath>N(A^T)</InlineMath></p>
            <p className="text-xs text-dark-400">dimension <InlineMath>m - r</InlineMath></p>
          </div>
        </div>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Orthogonal vectors have <InlineMath>{`\\mathbf{v}^T\\mathbf{w} = 0`}</InlineMath>. Then <InlineMath>{`\\|\\mathbf{v}\\|^2 + \\|\\mathbf{w}\\|^2 = \\|\\mathbf{v} + \\mathbf{w}\\|^2`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Orthogonal subspaces: every <InlineMath>{`\\mathbf{v}`}</InlineMath> in <InlineMath>V</InlineMath> is perpendicular to every <InlineMath>{`\\mathbf{w}`}</InlineMath> in <InlineMath>W</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The row space is orthogonal to the nullspace. Column space is orthogonal to the left nullspace.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Row space and nullspace are <strong>orthogonal complements</strong>: dimensions add to <InlineMath>n</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>If <InlineMath>{`A^TA\\mathbf{x} = \\mathbf{0}`}</InlineMath> then <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>. (The nullspaces of <InlineMath>A^TA</InlineMath> and <InlineMath>A</InlineMath> are the same!)</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
