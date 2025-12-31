import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section08Quiz } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Systems of Linear Equations: Structure and Solutions</h2>

      <p>
        Systems of linear equations are ubiquitous in mathematics and its applications. The key
        insight is that the solution set has beautiful structure: it's either empty, a single point,
        or an entire subspace (translated by a particular solution).
      </p>

      <Callout type="info">
        <strong>The Connection:</strong> Solving <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math> is equivalent
        to finding which vectors in <Math>{`\\mathbb{R}`}^n</Math> map to <Math>{`\\mathbf{b}`}</Math> under
        the linear transformation <Math>T({`\\mathbf{x}`}) = A{`\\mathbf{x}`}</Math>.
      </Callout>

      <h2>Homogeneous Systems</h2>

      <Definition title="Homogeneous System">
        <p>
          A system <Math>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</Math> is <strong>homogeneous</strong>. The
          solution set is denoted <Math>N(A)</Math> (the <strong>null space</strong> of <Math>A</Math>).
        </p>
      </Definition>

      <Theorem
        title="Null Space is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> <Math>A{`\\mathbf{0}`} = {`\\mathbf{0}`}</Math>, so <Math>{`\\mathbf{0}`} \in N(A)</Math>.</p>
            <p className="mt-2"><strong>Closure under addition:</strong> If <Math>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</Math> and <Math>A{`\\mathbf{v}`} = {`\\mathbf{0}`}</Math>:</p>
            <MathBlock>{`A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}`}</MathBlock>
            <p className="mt-2"><strong>Closure under scalar multiplication:</strong> If <Math>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</Math>:</p>
            <MathBlock>{`A(c\\mathbf{u}) = c(A\\mathbf{u}) = c\\mathbf{0} = \\mathbf{0}`}</MathBlock>
          </>
        }
      >
        <p>
          The null space <Math>N(A)</Math> is a subspace of <Math>{`\\mathbb{R}`}^n</Math> (or <Math>F^n</Math>).
        </p>
      </Theorem>

      <Example title="Finding the Null Space">
        <p>Consider the system:</p>
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">Row reduce:</p>
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The free variables are <Math>y</Math> and <Math>z</Math>. From <Math>x + 2y + z = 0</Math>:</p>
        <MathBlock>{`\\mathbf{x} = \\begin{pmatrix} -2y - z \\\\ y \\\\ z \\end{pmatrix} = y\\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\end{pmatrix} + z\\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">So <Math>N(A) = {`\\text{span}`}{`\\{(-2, 1, 0)^T, (-1, 0, 1)^T\\}`}</Math> and <Math>\dim(N(A)) = 2</Math>.</p>
      </Example>

      <h2>Non-Homogeneous Systems</h2>

      <Theorem
        title="Solution Structure Theorem"
        proof={
          <>
            <p><strong>(⊆)</strong> If <Math>{`\\mathbf{x}`}</Math> is a solution to <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math>:</p>
            <MathBlock>{`A(\\mathbf{x} - \\mathbf{x}_0) = A\\mathbf{x} - A\\mathbf{x}_0 = \\mathbf{b} - \\mathbf{b} = \\mathbf{0}`}</MathBlock>
            <p>So <Math>{`\\mathbf{x}`} - {`\\mathbf{x}`}_0 \in N(A)</Math>, meaning <Math>{`\\mathbf{x}`} = {`\\mathbf{x}`}_0 + {`\\mathbf{n}`}</Math> for some <Math>{`\\mathbf{n}`} \in N(A)</Math>.</p>
            <p className="mt-2"><strong>(⊇)</strong> If <Math>{`\\mathbf{x}`} = {`\\mathbf{x}`}_0 + {`\\mathbf{n}`}</Math> with <Math>{`\\mathbf{n}`} \in N(A)</Math>:</p>
            <MathBlock>{`A\\mathbf{x} = A(\\mathbf{x}_0 + \\mathbf{n}) = A\\mathbf{x}_0 + A\\mathbf{n} = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}`}</MathBlock>
          </>
        }
      >
        <p>
          If <Math>{`\\mathbf{x}`}_0</Math> is a particular solution to <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math>,
          then the complete solution set is:
        </p>
        <MathBlock>{`\\{\\mathbf{x}_0 + \\mathbf{n} : \\mathbf{n} \\in N(A)\\}`}</MathBlock>
        <p className="mt-2">
          This is the null space "shifted" by <Math>{`\\mathbf{x}`}_0</Math>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Geometric Picture:</strong> The solution set of <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math>
        (if non-empty) is a translate of the null space — a "parallel copy" passing through
        <Math>{`\\mathbf{x}`}_0</Math> instead of the origin.
      </Callout>

      <h2>Gaussian Elimination and RREF</h2>

      <Definition title="Row Echelon Form">
        <p>
          A matrix is in <strong>row echelon form (REF)</strong> if:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li>All zero rows are at the bottom</li>
          <li>The leading entry (pivot) of each nonzero row is to the right of the pivot above it</li>
          <li>All entries below a pivot are zero</li>
        </ol>
      </Definition>

      <Definition title="Reduced Row Echelon Form">
        <p>
          A matrix is in <strong>reduced row echelon form (RREF)</strong> if it's in REF and also:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2" start={4}>
          <li>Each pivot is 1</li>
          <li>Each pivot is the only nonzero entry in its column</li>
        </ol>
      </Definition>

      <Example title="REF and RREF">
        <MathBlock>{`\\text{REF: } \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & 5 & 4 \\\\ 0 & 0 & 2 \\end{pmatrix} \\quad \\text{RREF: } \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Example>

      <Theorem title="Uniqueness of RREF">
        <p>Every matrix has a unique reduced row echelon form.</p>
      </Theorem>

      <h2>The Four Fundamental Subspaces</h2>

      <Definition title="Column Space">
        <p>
          The <strong>column space</strong> of <Math>A</Math>, denoted <Math>C(A)</Math> or <Math>{`\\text{Col}`}(A)</Math>,
          is the span of the columns of <Math>A</Math>. It equals <Math>{`\\text{im}`}(T_A)</Math> where
          <Math>T_A({`\\mathbf{x}`}) = A{`\\mathbf{x}`}</Math>.
        </p>
      </Definition>

      <Definition title="Row Space">
        <p>
          The <strong>row space</strong> of <Math>A</Math>, denoted <Math>R(A)</Math> or <Math>{`\\text{Row}`}(A)</Math>,
          is the span of the rows of <Math>A</Math>. Equivalently, <Math>R(A) = C(A^T)</Math>.
        </p>
      </Definition>

      <Theorem title="The Four Fundamental Subspaces">
        <p>For an <Math>m \times n</Math> matrix <Math>A</Math>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">In <Math>{`\\mathbb{R}`}^n</Math></h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li>Row space <Math>R(A)</Math>: dimension = <Math>r</Math></li>
              <li>Null space <Math>N(A)</Math>: dimension = <Math>n - r</Math></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">In <Math>{`\\mathbb{R}`}^m</Math></h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li>Column space <Math>C(A)</Math>: dimension = <Math>r</Math></li>
              <li>Left null space <Math>N(A^T)</Math>: dimension = <Math>m - r</Math></li>
            </ul>
          </div>
        </div>
        <p className="mt-2">where <Math>r = {`\\text{rank}`}(A)</Math>.</p>
      </Theorem>

      <Theorem title="Orthogonality Relations">
        <p>The four subspaces satisfy:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><Math>R(A) \perp N(A)</Math> (row space perpendicular to null space)</li>
          <li><Math>C(A) \perp N(A^T)</Math> (column space perpendicular to left null space)</li>
          <li><Math>{`\\mathbb{R}`}^n = R(A) \oplus N(A)</Math></li>
          <li><Math>{`\\mathbb{R}`}^m = C(A) \oplus N(A^T)</Math></li>
        </ul>
      </Theorem>

      <h2>Existence and Uniqueness</h2>

      <Theorem title="Existence of Solutions">
        <p>
          <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math> has a solution if and only if <Math>{`\\mathbf{b}`} \in C(A)</Math>,
          i.e., <Math>{`\\text{rank}`}(A) = {`\\text{rank}`}(A | {`\\mathbf{b}`})</Math>.
        </p>
      </Theorem>

      <Theorem title="Uniqueness of Solutions">
        <p>
          If a solution exists, it is unique if and only if <Math>N(A) = {`\\{\\mathbf{0}\\}`}</Math>,
          i.e., <Math>{`\\text{rank}`}(A) = n</Math> (full column rank).
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-dark-100 mb-3">Summary: Solution Types for <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math></h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="text-left py-2">Condition</th>
              <th className="text-left py-2">Solutions</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2"><Math>{`\\mathbf{b}`} \notin C(A)</Math></td>
              <td className="py-2">No solutions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2"><Math>{`\\mathbf{b}`} \in C(A)</Math> and <Math>{`\\text{rank}`}(A) = n</Math></td>
              <td className="py-2">Unique solution</td>
            </tr>
            <tr>
              <td className="py-2"><Math>{`\\mathbf{b}`} \in C(A)</Math> and <Math>{`\\text{rank}`}(A) {'<'} n</Math></td>
              <td className="py-2">Infinitely many solutions (<Math>n - r</Math> free variables)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Null space <Math>N(A)</Math> = solutions to <Math>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</Math> (a subspace)</li>
          <li>General solution = particular solution + null space</li>
          <li>RREF is unique; it reveals rank and free variables</li>
          <li>Four fundamental subspaces: <Math>C(A), R(A), N(A), N(A^T)</Math></li>
          <li>Existence: <Math>{`\\mathbf{b}`} \in C(A)</Math>; Uniqueness: <Math>N(A) = {`\\{\\mathbf{0}\\}`}</Math></li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={8}
        questions={section08Quiz}
        title="Systems of Linear Equations Quiz"
      />
    </LessonLayout>
  );
}
