import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
        <strong>The Connection:</strong> Solving <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath> is equivalent
        to finding which vectors in <InlineMath>{`\\mathbb{R}`}^n</InlineMath> map to <InlineMath>{`\\mathbf{b}`}</InlineMath> under
        the linear transformation <InlineMath>T({`\\mathbf{x}`}) = A{`\\mathbf{x}`}</InlineMath>.
      </Callout>

      <h2>Homogeneous Systems</h2>

      <Definition title="Homogeneous System">
        <p>
          A system <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</InlineMath> is <strong>homogeneous</strong>. The
          solution set is denoted <InlineMath>N(A)</InlineMath> (the <strong>null space</strong> of <InlineMath>A</InlineMath>).
        </p>
      </Definition>

      <Theorem
        title="Null Space is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> <InlineMath>A{`\\mathbf{0}`} = {`\\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\mathbf{0}`} \in N(A)</InlineMath>.</p>
            <p className="mt-2"><strong>Closure under addition:</strong> If <InlineMath>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</InlineMath> and <InlineMath>A{`\\mathbf{v}`} = {`\\mathbf{0}`}</InlineMath>:</p>
            <MathBlock>{`A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}`}</MathBlock>
            <p className="mt-2"><strong>Closure under scalar multiplication:</strong> If <InlineMath>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</InlineMath>:</p>
            <MathBlock>{`A(c\\mathbf{u}) = c(A\\mathbf{u}) = c\\mathbf{0} = \\mathbf{0}`}</MathBlock>
          </>
        }
      >
        <p>
          The null space <InlineMath>N(A)</InlineMath> is a subspace of <InlineMath>{`\\mathbb{R}`}^n</InlineMath> (or <InlineMath>F^n</InlineMath>).
        </p>
      </Theorem>

      <Example title="Finding the Null Space">
        <p>Consider the system:</p>
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">Row reduce:</p>
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The free variables are <InlineMath>y</InlineMath> and <InlineMath>z</InlineMath>. From <InlineMath>x + 2y + z = 0</InlineMath>:</p>
        <MathBlock>{`\\mathbf{x} = \\begin{pmatrix} -2y - z \\\\ y \\\\ z \\end{pmatrix} = y\\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\end{pmatrix} + z\\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">So <InlineMath>N(A) = {`\\text{span}`}{`\\{(-2, 1, 0)^T, (-1, 0, 1)^T\\}`}</InlineMath> and <InlineMath>\dim(N(A)) = 2</InlineMath>.</p>
      </Example>

      <h2>Non-Homogeneous Systems</h2>

      <Theorem
        title="Solution Structure Theorem"
        proof={
          <>
            <p><strong>(⊆)</strong> If <InlineMath>{`\\mathbf{x}`}</InlineMath> is a solution to <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath>:</p>
            <MathBlock>{`A(\\mathbf{x} - \\mathbf{x}_0) = A\\mathbf{x} - A\\mathbf{x}_0 = \\mathbf{b} - \\mathbf{b} = \\mathbf{0}`}</MathBlock>
            <p>So <InlineMath>{`\\mathbf{x}`} - {`\\mathbf{x}`}_0 \in N(A)</InlineMath>, meaning <InlineMath>{`\\mathbf{x}`} = {`\\mathbf{x}`}_0 + {`\\mathbf{n}`}</InlineMath> for some <InlineMath>{`\\mathbf{n}`} \in N(A)</InlineMath>.</p>
            <p className="mt-2"><strong>(⊇)</strong> If <InlineMath>{`\\mathbf{x}`} = {`\\mathbf{x}`}_0 + {`\\mathbf{n}`}</InlineMath> with <InlineMath>{`\\mathbf{n}`} \in N(A)</InlineMath>:</p>
            <MathBlock>{`A\\mathbf{x} = A(\\mathbf{x}_0 + \\mathbf{n}) = A\\mathbf{x}_0 + A\\mathbf{n} = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathbf{x}`}_0</InlineMath> is a particular solution to <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath>,
          then the complete solution set is:
        </p>
        <MathBlock>{`\\{\\mathbf{x}_0 + \\mathbf{n} : \\mathbf{n} \\in N(A)\\}`}</MathBlock>
        <p className="mt-2">
          This is the null space "shifted" by <InlineMath>{`\\mathbf{x}`}_0</InlineMath>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Geometric Picture:</strong> The solution set of <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath>
        (if non-empty) is a translate of the null space — a "parallel copy" passing through
        <InlineMath>{`\\mathbf{x}`}_0</InlineMath> instead of the origin.
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
          The <strong>column space</strong> of <InlineMath>A</InlineMath>, denoted <InlineMath>C(A)</InlineMath> or <InlineMath>{`\\text{Col}`}(A)</InlineMath>,
          is the span of the columns of <InlineMath>A</InlineMath>. It equals <InlineMath>{`\\text{im}`}(T_A)</InlineMath> where
          <InlineMath>T_A({`\\mathbf{x}`}) = A{`\\mathbf{x}`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Row Space">
        <p>
          The <strong>row space</strong> of <InlineMath>A</InlineMath>, denoted <InlineMath>R(A)</InlineMath> or <InlineMath>{`\\text{Row}`}(A)</InlineMath>,
          is the span of the rows of <InlineMath>A</InlineMath>. Equivalently, <InlineMath>R(A) = C(A^T)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="The Four Fundamental Subspaces">
        <p>For an <InlineMath>m \times n</InlineMath> matrix <InlineMath>A</InlineMath>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">In <InlineMath>{`\\mathbb{R}`}^n</InlineMath></h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li>Row space <InlineMath>R(A)</InlineMath>: dimension = <InlineMath>r</InlineMath></li>
              <li>Null space <InlineMath>N(A)</InlineMath>: dimension = <InlineMath>n - r</InlineMath></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">In <InlineMath>{`\\mathbb{R}`}^m</InlineMath></h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li>Column space <InlineMath>C(A)</InlineMath>: dimension = <InlineMath>r</InlineMath></li>
              <li>Left null space <InlineMath>N(A^T)</InlineMath>: dimension = <InlineMath>m - r</InlineMath></li>
            </ul>
          </div>
        </div>
        <p className="mt-2">where <InlineMath>r = {`\\text{rank}`}(A)</InlineMath>.</p>
      </Theorem>

      <Theorem title="Orthogonality Relations">
        <p>The four subspaces satisfy:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><InlineMath>R(A) \perp N(A)</InlineMath> (row space perpendicular to null space)</li>
          <li><InlineMath>C(A) \perp N(A^T)</InlineMath> (column space perpendicular to left null space)</li>
          <li><InlineMath>{`\\mathbb{R}`}^n = R(A) \oplus N(A)</InlineMath></li>
          <li><InlineMath>{`\\mathbb{R}`}^m = C(A) \oplus N(A^T)</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Existence and Uniqueness</h2>

      <Theorem title="Existence of Solutions">
        <p>
          <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath> has a solution if and only if <InlineMath>{`\\mathbf{b}`} \in C(A)</InlineMath>,
          i.e., <InlineMath>{`\\text{rank}`}(A) = {`\\text{rank}`}(A | {`\\mathbf{b}`})</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Uniqueness of Solutions">
        <p>
          If a solution exists, it is unique if and only if <InlineMath>N(A) = {`\\{\\mathbf{0}\\}`}</InlineMath>,
          i.e., <InlineMath>{`\\text{rank}`}(A) = n</InlineMath> (full column rank).
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-dark-100 mb-3">Summary: Solution Types for <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath></h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="text-left py-2">Condition</th>
              <th className="text-left py-2">Solutions</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2"><InlineMath>{`\\mathbf{b}`} \notin C(A)</InlineMath></td>
              <td className="py-2">No solutions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2"><InlineMath>{`\\mathbf{b}`} \in C(A)</InlineMath> and <InlineMath>{`\\text{rank}`}(A) = n</InlineMath></td>
              <td className="py-2">Unique solution</td>
            </tr>
            <tr>
              <td className="py-2"><InlineMath>{`\\mathbf{b}`} \in C(A)</InlineMath> and <InlineMath>{`\\text{rank}`}(A) {'<'} n</InlineMath></td>
              <td className="py-2">Infinitely many solutions (<InlineMath>n - r</InlineMath> free variables)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Null space <InlineMath>N(A)</InlineMath> = solutions to <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</InlineMath> (a subspace)</li>
          <li>General solution = particular solution + null space</li>
          <li>RREF is unique; it reveals rank and free variables</li>
          <li>Four fundamental subspaces: <InlineMath>C(A), R(A), N(A), N(A^T)</InlineMath></li>
          <li>Existence: <InlineMath>{`\\mathbf{b}`} \in C(A)</InlineMath>; Uniqueness: <InlineMath>N(A) = {`\\{\\mathbf{0}\\}`}</InlineMath></li>
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
