import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      {/* Introduction */}
      <p>
        Different bases give different matrices for the same linear transformation. The
        <strong> change of basis</strong> reveals how these matrices are related—they are <em>similar</em>.
      </p>

      <h2>Change of Basis</h2>

      <Definition title="Change of Basis Matrix" className="my-6">
        <p>
          If <InlineMath>V</InlineMath> has two bases <InlineMath>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> and
          <InlineMath>{`\\mathcal{C} = \\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_n\\}`}</InlineMath>, the <strong>change of basis matrix</strong>
          <InlineMath>P</InlineMath> converts coordinates:
        </p>
        <MathBlock>
          {`[\\mathbf{x}]_\\mathcal{C} = P^{-1}[\\mathbf{x}]_\\mathcal{B}`}
        </MathBlock>
        <p className="mt-2">
          Column <InlineMath>j</InlineMath> of <InlineMath>P</InlineMath> contains the coordinates of <InlineMath>{`\\mathbf{v}_j`}</InlineMath> in basis <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Changing to a New Basis" className="my-6">
        <p>
          Old basis: <InlineMath>{`\\mathbf{v}_1 = (1, 0)`}</InlineMath>, <InlineMath>{`\\mathbf{v}_2 = (0, 1)`}</InlineMath> (standard)<br />
          New basis: <InlineMath>{`\\mathbf{w}_1 = (1, 1)`}</InlineMath>, <InlineMath>{`\\mathbf{w}_2 = (1, -1)`}</InlineMath>
        </p>
        <MathBlock>
          {`P = \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}, \\quad P^{-1} = \\frac{1}{2}\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The vector <InlineMath>(3, 1)</InlineMath> in standard basis has coordinates <InlineMath>(2, 1)</InlineMath> in the new basis.
        </p>
      </Example>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices" className="my-6">
        <p>
          Matrices <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are <strong>similar</strong> if:
        </p>
        <MathBlock>
          {`B = M^{-1}AM`}
        </MathBlock>
        <p className="mt-2">
          for some invertible matrix <InlineMath>M</InlineMath>. They represent the <strong>same transformation</strong>
          in different bases.
        </p>
      </Definition>

      <Theorem
        title="Matrix of T in Different Bases"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`[\\mathbf{x}]_{\\mathcal{B}}`}</InlineMath> denote coordinates in basis <InlineMath>{`\\mathcal{B}`}</InlineMath>.</p>
            <p className="mt-2">In basis <InlineMath>{`\\mathcal{B}`}</InlineMath>: <InlineMath>{`[T(\\mathbf{x})]_{\\mathcal{B}} = A[\\mathbf{x}]_{\\mathcal{B}}`}</InlineMath>.</p>
            <p className="mt-2">The change of basis matrix <InlineMath>P</InlineMath> satisfies: <InlineMath>{`[\\mathbf{x}]_{\\mathcal{B}} = P[\\mathbf{x}]_{\\mathcal{C}}`}</InlineMath>.</p>
            <p className="mt-2">In basis <InlineMath>{`\\mathcal{C}`}</InlineMath>:</p>
            <MathBlock>{`[T(\\mathbf{x})]_{\\mathcal{C}} = P^{-1}[T(\\mathbf{x})]_{\\mathcal{B}} = P^{-1}A[\\mathbf{x}]_{\\mathcal{B}} = P^{-1}A(P[\\mathbf{x}]_{\\mathcal{C}}) = (P^{-1}AP)[\\mathbf{x}]_{\\mathcal{C}}`}</MathBlock>
            <p className="mt-2">Therefore the matrix in basis <InlineMath>{`\\mathcal{C}`}</InlineMath> is <InlineMath>{`B = P^{-1}AP`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> is the matrix of <InlineMath>T</InlineMath> in basis <InlineMath>{`\\mathcal{B}`}</InlineMath> and
          <InlineMath>B</InlineMath> is the matrix in basis <InlineMath>{`\\mathcal{C}`}</InlineMath>:
        </p>
        <MathBlock>
          {`B = P^{-1}AP`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>P</InlineMath> is the change of basis matrix from <InlineMath>{`\\mathcal{B}`}</InlineMath> to <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
      </Theorem>

      <h2>The Best Basis</h2>

      <Theorem
        title="Diagonalization as Change of Basis"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`X = [\\mathbf{x}_1 \\cdots \\mathbf{x}_n]`}</InlineMath> where <InlineMath>{`A\\mathbf{x}_i = \\lambda_i \\mathbf{x}_i`}</InlineMath>.</p>
            <p className="mt-2">In the standard basis, the transformation has matrix <InlineMath>A</InlineMath>.</p>
            <p className="mt-2">In the eigenvector basis <InlineMath>{`\\{\\mathbf{x}_1, \\ldots, \\mathbf{x}_n\\}`}</InlineMath>:</p>
            <p className="mt-2">• <InlineMath>X</InlineMath> is the change of basis matrix from eigenvector basis to standard basis</p>
            <p className="mt-2">• By the change of basis theorem: <InlineMath>{`\\Lambda = X^{-1}AX`}</InlineMath></p>
            <p className="mt-2">In the eigenvector basis, <InlineMath>{`T(\\mathbf{x}_i) = \\lambda_i \\mathbf{x}_i`}</InlineMath>, so the matrix is diagonal:</p>
            <MathBlock>{`\\Lambda = \\begin{bmatrix} \\lambda_1 & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n \\end{bmatrix}`}</MathBlock>
            <p className="mt-2">Each eigenvector coordinate is simply scaled by its eigenvalue.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath> (diagonalization), then:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>X</InlineMath> is the change of basis matrix to eigenvector basis</li>
          <li><InlineMath>\Lambda</InlineMath> is the matrix of <InlineMath>T</InlineMath> in the eigenvector basis</li>
        </ul>
        <p className="mt-2 text-primary-400">
          In the eigenvector basis, <InlineMath>T</InlineMath> just scales each coordinate!
        </p>
      </Theorem>

      <Example title="Finding the Right Basis" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <InlineMath>\lambda_1 = 1</InlineMath>, <InlineMath>\lambda_2 = 3</InlineMath><br />
          Eigenvectors: <InlineMath>{`\\mathbf{x}_1 = (1, 0)`}</InlineMath>, <InlineMath>{`\\mathbf{x}_2 = (1, 1)`}</InlineMath>
        </p>
        <p className="mt-2">
          In eigenvector basis: <InlineMath>{`\\Lambda = \\begin{bmatrix} 1 & 0 \\\\\\\\ 0 & 3 \\end{bmatrix}`}</InlineMath>
        </p>
      </Example>

      <h2>Properties Preserved Under Similarity</h2>

      <Theorem
        title="Invariants of Similar Matrices"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>B = P^{-1}AP</InlineMath>.</p>
            <p className="mt-2"><strong>Eigenvalues:</strong> <InlineMath>\\det(B - \\lambda I) = \\det(P^{-1}AP - \\lambda P^{-1}P) = \\det(P^{-1}(A - \\lambda I)P)</InlineMath></p>
            <MathBlock>{`= \\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)`}</MathBlock>
            <p className="mt-2">Same characteristic polynomial ⟹ same eigenvalues.</p>
            <p className="mt-2"><strong>Determinant:</strong> <InlineMath>\\det B = \\det(P^{-1}AP) = \\det(P^{-1})\\det(A)\\det(P) = \\det A</InlineMath>.</p>
            <p className="mt-2"><strong>Trace:</strong> <InlineMath>{`\\text{tr}(B) = \\text{tr}(P^{-1}AP) = \\text{tr}(APP^{-1}) = \\text{tr}(A)`}</InlineMath> (using <InlineMath>{`\\text{tr}(XY) = \\text{tr}(YX)`}</InlineMath>).</p>
            <p className="mt-2"><strong>Rank:</strong> <InlineMath>{`B\\mathbf{x} = \\mathbf{0}`}</InlineMath> iff <InlineMath>{`P^{-1}AP\\mathbf{x} = \\mathbf{0}`}</InlineMath> iff <InlineMath>{`A(P\\mathbf{x}) = \\mathbf{0}`}</InlineMath>. Since <InlineMath>P</InlineMath> is invertible, <InlineMath>{`\\dim N(B) = \\dim N(A)`}</InlineMath>, so <InlineMath>{`\\text{rank}(B) = \\text{rank}(A)`}</InlineMath>.</p>
          </>
        }
      >
        <p>Similar matrices share these properties:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Same <strong>eigenvalues</strong></li>
          <li>Same <strong>determinant</strong></li>
          <li>Same <strong>trace</strong></li>
          <li>Same <strong>rank</strong></li>
          <li>Same <strong>characteristic polynomial</strong></li>
        </ul>
        <p className="mt-2">
          These are properties of the transformation itself, not the choice of basis.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Choosing a Good Basis</p>
        <p className="text-dark-300 text-sm">
          The goal is to find a basis where the matrix is as simple as possible:
        </p>
        <ul className="list-disc list-inside text-dark-300 text-sm mt-2 space-y-1">
          <li><strong>Diagonal:</strong> If <InlineMath>A</InlineMath> is diagonalizable</li>
          <li><strong>Jordan form:</strong> If not diagonalizable, the "next best" form</li>
          <li><strong>SVD bases:</strong> Different bases for input and output, giving <InlineMath>\Sigma</InlineMath></li>
        </ul>
      </div>

      <h2>Coordinate Transformations</h2>

      <Example title="The Action of Similarity" className="my-6">
        <p>
          To compute <InlineMath>{`B\\mathbf{y}`}</InlineMath> where <InlineMath>{`B = P^{-1}AP`}</InlineMath>:
        </p>
        <MathBlock>
          {`B\\mathbf{y} = P^{-1}A(P\\mathbf{y})`}
        </MathBlock>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Convert <InlineMath>{`\\mathbf{y}`}</InlineMath> to original basis: <InlineMath>{`\\mathbf{x} = P\\mathbf{y}`}</InlineMath></li>
          <li>Apply original transformation: <InlineMath>{`A\\mathbf{x}`}</InlineMath></li>
          <li>Convert back to new basis: <InlineMath>{`P^{-1}(A\\mathbf{x})`}</InlineMath></li>
        </ol>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Change of basis: <InlineMath>{`[x]_{\\mathcal{C}} = P^{-1}[x]_{\\mathcal{B}}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Similar matrices: <InlineMath>{`B = P^{-1}AP`}</InlineMath> (same transformation, different basis).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Similar matrices have the same eigenvalues, determinant, trace, and rank.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Eigenvector basis makes the matrix diagonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The goal: find a basis where the matrix is simplest.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
