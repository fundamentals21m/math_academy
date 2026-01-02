import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Introduction */}
      <p>
        Matrix multiplication is the heart of linear algebra. This section covers the rules that
        make it work: associative law (yes), commutative law (no!), and distributive law (yes).
      </p>

      <h2>The Laws of Matrix Multiplication</h2>

      <Theorem
        title="Rules for Matrix Operations"
        className="my-6"
        proof={
          <>
            <p><strong>Associativity:</strong> We verify entry-by-entry. The <InlineMath>(i,j)</InlineMath> entry of <InlineMath>(AB)C</InlineMath> is:</p>
            <MathBlock>{`\\sum_k (AB)_{ik} c_{kj} = \\sum_k \\left(\\sum_l a_{il}b_{lk}\\right) c_{kj} = \\sum_l \\sum_k a_{il}b_{lk}c_{kj}`}</MathBlock>
            <p>The <InlineMath>(i,j)</InlineMath> entry of <InlineMath>A(BC)</InlineMath> is:</p>
            <MathBlock>{`\\sum_l a_{il}(BC)_{lj} = \\sum_l a_{il}\\left(\\sum_k b_{lk}c_{kj}\\right) = \\sum_l \\sum_k a_{il}b_{lk}c_{kj}`}</MathBlock>
            <p>These are equal, so <InlineMath>(AB)C = A(BC)</InlineMath>.</p>
            <p className="mt-2"><strong>Distributivity:</strong> <InlineMath>{`(A(B+C))_{ij} = \\sum_k a_{ik}(b_{kj}+c_{kj}) = \\sum_k a_{ik}b_{kj} + \\sum_k a_{ik}c_{kj} = (AB)_{ij} + (AC)_{ij}`}</InlineMath></p>
            <p className="mt-2"><strong>Non-commutativity:</strong> Counterexample shown below proves <InlineMath>AB \neq BA</InlineMath> in general.</p>
          </>
        }
      >
        <p>For matrices of compatible sizes:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>Associative:</strong> <InlineMath>A(BC) = (AB)C</InlineMath></li>
          <li><strong>Distributive:</strong> <InlineMath>A(B + C) = AB + AC</InlineMath> and <InlineMath>(A + B)C = AC + BC</InlineMath></li>
          <li><strong className="text-amber-400">NOT Commutative:</strong> In general, <InlineMath>AB \neq BA</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Matrix Multiplication Is Not Commutative" className="my-6">
        <MathBlock>
          {`AB = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`BA = \\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>AB \neq BA</InlineMath> — the order matters!
        </p>
      </Example>

      <h2>Four Ways to Multiply <InlineMath>AB</InlineMath></h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-primary-500/20">
          <p className="font-semibold text-primary-400 mb-2">1. Row times Column (Standard)</p>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`(AB)_{ij}`}</InlineMath> = (row <InlineMath>i</InlineMath> of <InlineMath>A</InlineMath>) <InlineMath>\cdot</InlineMath> (column <InlineMath>j</InlineMath> of <InlineMath>B</InlineMath>)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
          <p className="font-semibold text-amber-400 mb-2">2. Columns of <InlineMath>AB</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Each column of <InlineMath>AB</InlineMath> is <InlineMath>A</InlineMath> times a column of <InlineMath>B</InlineMath>.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/20">
          <p className="font-semibold text-emerald-400 mb-2">3. Rows of <InlineMath>AB</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Each row of <InlineMath>AB</InlineMath> is a row of <InlineMath>A</InlineMath> times <InlineMath>B</InlineMath>.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-cyan-500/20">
          <p className="font-semibold text-cyan-400 mb-2">4. Column times Row</p>
          <p className="text-dark-300 text-sm">
            <InlineMath>AB</InlineMath> = sum of (column <InlineMath>k</InlineMath> of <InlineMath>A</InlineMath>) times (row <InlineMath>k</InlineMath> of <InlineMath>B</InlineMath>).
          </p>
        </div>
      </div>

      <h2>Block Multiplication</h2>

      <Definition title="Block Matrices" className="my-6">
        <p>
          When matrices are partitioned into <strong>blocks</strong>, multiplication follows the same rules—
          provided the block sizes match correctly.
        </p>
        <MathBlock>
          {`\\begin{bmatrix} A_1 & A_2 \\\\ A_3 & A_4 \\end{bmatrix}\\begin{bmatrix} B_1 \\\\ B_2 \\end{bmatrix} = \\begin{bmatrix} A_1B_1 + A_2B_2 \\\\ A_3B_1 + A_4B_2 \\end{bmatrix}`}
        </MathBlock>
      </Definition>

      <h2>Powers of a Matrix</h2>

      <Definition title="Matrix Powers" className="my-6">
        <p>
          For a square matrix <InlineMath>A</InlineMath>, powers are defined naturally:
        </p>
        <MathBlock>
          {`A^2 = AA, \\quad A^3 = AAA, \\quad A^p = \\underbrace{A \\cdot A \\cdots A}_{p \\text{ times}}`}
        </MathBlock>
        <p className="mt-2">
          Also <InlineMath>A^0 = I</InlineMath> (the identity matrix) and <InlineMath>{`A^{-1}`}</InlineMath> is the inverse (if it exists).
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Matrix multiplication is <strong>associative</strong>: <InlineMath>(AB)C = A(BC)</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Matrix multiplication is <strong>NOT commutative</strong>: <InlineMath>AB \neq BA</InlineMath> in general.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>AB</InlineMath> can be computed four ways: row×col, by columns, by rows, or col×row.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Block multiplication works when the blocks have compatible sizes.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
