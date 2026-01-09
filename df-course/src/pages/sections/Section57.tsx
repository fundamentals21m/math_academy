import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2>Determinants</h2>

      <p>
        The determinant is a fundamental function on square matrices that encodes important
        geometric and algebraic information. It measures how a linear transformation scales
        volume and determines whether a matrix is invertible.
      </p>

      <h3>Definition and Basic Properties</h3>

      <Definition title="Determinant">
        <p>
          The <strong>determinant</strong> is the unique function <InlineMath>{'\\det: M_n(F) \\to F'}</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Multilinear:</strong> Linear in each row (or column)</li>
          <li><strong>Alternating:</strong> <InlineMath>{'\\det A = 0'}</InlineMath> if two rows are equal</li>
          <li><strong>Normalized:</strong> <InlineMath>{'\\det I_n = 1'}</InlineMath></li>
        </ol>
      </Definition>

      <Theorem title="Explicit Formula"
        proof={
          <>
            <p>
              The formula follows from multilinearity, the alternating property, and normalization.
              Expanding in terms of the standard basis gives the permutation sum.
            </p>
          </>
        }
      >
        <p>
          For an <InlineMath>{'n \\times n'}</InlineMath> matrix <InlineMath>{'A = (a_{ij})'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\det A = \\sum_{\\sigma \\in S_n} \\text{sgn}(\\sigma) \\prod_{i=1}^{n} a_{i,\\sigma(i)}'}
        </MathBlock>
        <p className="mt-2">
          where the sum is over all permutations of <InlineMath>{'\\{1, \\ldots, n\\}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="2x2 and 3x3 Determinants">
        <p>
          For <InlineMath>{'n = 2'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc'}
        </MathBlock>
        <p className="mt-2">
          For <InlineMath>{'n = 3'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh'}
        </MathBlock>
      </Example>

      <h3>Properties of Determinants</h3>

      <Theorem title="Multiplicativity"
        proof={
          <>
            <p>
              View <InlineMath>{'\\det(AB)'}</InlineMath> as a function of the rows of <InlineMath>B</InlineMath>.
              It is multilinear and alternating, hence proportional to <InlineMath>{'\\det B'}</InlineMath>.
              The constant of proportionality is <InlineMath>{'\\det A'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\det(AB) = \\det A \\cdot \\det B'}</InlineMath>
        </p>
        <p className="mt-2">
          Consequently, <InlineMath>{'\\det(A^{-1}) = (\\det A)^{-1}'}</InlineMath> when <InlineMath>A</InlineMath> is invertible.
        </p>
      </Theorem>

      <Theorem title="Transpose"
        proof={
          <>
            <p>
              Both sides give the same permutation expansion: swapping rows and columns of <InlineMath>A</InlineMath>
              corresponds to replacing <InlineMath>{'\\sigma'}</InlineMath> by <InlineMath>{'\\sigma^{-1}'}</InlineMath>
              in the sum, which preserves the determinant.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\det(A^t) = \\det A'}</InlineMath>
        </p>
      </Theorem>

      <Theorem title="Row Operations"
        proof={
          <>
            <p>
              These follow from multilinearity and the alternating property.
            </p>
          </>
        }
      >
        <ul className="list-disc list-inside mt-2">
          <li>Swapping two rows multiplies <InlineMath>{'\\det'}</InlineMath> by <InlineMath>{'-1'}</InlineMath></li>
          <li>Multiplying a row by <InlineMath>c</InlineMath> multiplies <InlineMath>{'\\det'}</InlineMath> by <InlineMath>c</InlineMath></li>
          <li>Adding a multiple of one row to another doesn't change <InlineMath>{'\\det'}</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem title="Invertibility Criterion"
        proof={
          <>
            <p>
              Row reduce <InlineMath>A</InlineMath> to echelon form. The determinant is the product of pivots
              (times <InlineMath>{'\\pm 1'}</InlineMath> from row swaps). <InlineMath>A</InlineMath> is invertible
              iff there are <InlineMath>n</InlineMath> nonzero pivots iff <InlineMath>{'\\det A \\neq 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A matrix <InlineMath>A</InlineMath> is invertible if and only if <InlineMath>{'\\det A \\neq 0'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Cofactor Expansion</h3>

      <Definition title="Cofactor">
        <p>
          The <InlineMath>{'(i, j)'}</InlineMath>-<strong>minor</strong> <InlineMath>{'M_{ij}'}</InlineMath> is
          the determinant of the <InlineMath>{'(n-1) \\times (n-1)'}</InlineMath> matrix obtained by deleting
          row <InlineMath>i</InlineMath> and column <InlineMath>j</InlineMath>.
        </p>
        <p className="mt-2">
          The <InlineMath>{'(i, j)'}</InlineMath>-<strong>cofactor</strong> is:
        </p>
        <MathBlock>
          {'C_{ij} = (-1)^{i+j} M_{ij}'}
        </MathBlock>
      </Definition>

      <Theorem title="Cofactor Expansion"
        proof={
          <>
            <p>
              Expand the determinant formula by collecting terms with <InlineMath>{'a_{ij}'}</InlineMath>.
              The coefficient of <InlineMath>{'a_{ij}'}</InlineMath> involves a sum over permutations
              with <InlineMath>{'\\sigma(i) = j'}</InlineMath>, which equals <InlineMath>{'(-1)^{i+j} M_{ij}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <strong>Expansion along row <InlineMath>i</InlineMath>:</strong>
        </p>
        <MathBlock>
          {'\\det A = \\sum_{j=1}^{n} a_{ij} C_{ij}'}
        </MathBlock>
        <p className="mt-2">
          <strong>Expansion along column <InlineMath>j</InlineMath>:</strong>
        </p>
        <MathBlock>
          {'\\det A = \\sum_{i=1}^{n} a_{ij} C_{ij}'}
        </MathBlock>
      </Theorem>

      <Example title="Computing via Cofactor Expansion">
        <p>
          Compute <InlineMath>{'\\det \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 0 \\end{pmatrix}'}</InlineMath>
          by expanding along the third row:
        </p>
        <MathBlock>
          {'= 7 \\cdot C_{31} + 8 \\cdot C_{32} + 0 \\cdot C_{33}'}
        </MathBlock>
        <MathBlock>
          {'= 7 \\cdot (-1)^4 \\det \\begin{pmatrix} 2 & 3 \\\\ 5 & 6 \\end{pmatrix} + 8 \\cdot (-1)^5 \\det \\begin{pmatrix} 1 & 3 \\\\ 4 & 6 \\end{pmatrix}'}
        </MathBlock>
        <MathBlock>
          {'= 7(12 - 15) - 8(6 - 12) = 7(-3) - 8(-6) = -21 + 48 = 27'}
        </MathBlock>
      </Example>

      <h3>The Adjugate Matrix</h3>

      <Definition title="Adjugate (Classical Adjoint)">
        <p>
          The <strong>adjugate</strong> (or <strong>classical adjoint</strong>) of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>
          {'\\text{adj}(A) = (C_{ij})^t = (C_{ji})'}
        </MathBlock>
        <p className="mt-2">
          The <InlineMath>{'(i, j)'}</InlineMath> entry of <InlineMath>{'\\text{adj}(A)'}</InlineMath> is <InlineMath>{'C_{ji}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Adjugate and Inverse"
        proof={
          <>
            <p>
              The <InlineMath>{'(i, k)'}</InlineMath> entry of <InlineMath>{'A \\cdot \\text{adj}(A)'}</InlineMath> is
              <InlineMath>{'\\sum_j a_{ij} C_{kj}'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'i = k'}</InlineMath>, this is the cofactor expansion along row <InlineMath>i</InlineMath>,
              giving <InlineMath>{'\\det A'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'i \\neq k'}</InlineMath>, this is the determinant of a matrix with two identical
              rows (row <InlineMath>i</InlineMath> appears in row <InlineMath>k</InlineMath>'s cofactors), giving 0.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'A \\cdot \\text{adj}(A) = \\text{adj}(A) \\cdot A = (\\det A) I_n'}</InlineMath>
        </p>
        <p className="mt-2">
          Therefore, when <InlineMath>{'\\det A \\neq 0'}</InlineMath>:
        </p>
        <MathBlock>
          {'A^{-1} = \\frac{1}{\\det A} \\text{adj}(A)'}
        </MathBlock>
      </Theorem>

      <h3>Cramer's Rule</h3>

      <Theorem title="Cramer's Rule"
        proof={
          <>
            <p>
              From <InlineMath>{'A \\cdot \\text{adj}(A) = (\\det A) I'}</InlineMath>, the <InlineMath>j</InlineMath>-th
              column of <InlineMath>{'\\text{adj}(A)'}</InlineMath> times <InlineMath>A</InlineMath> equals
              <InlineMath>{'(\\det A) e_j'}</InlineMath>.
            </p>
            <p className="mt-2">
              With <InlineMath>{'x = A^{-1}b'}</InlineMath>, the formula follows.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>Ax = b</InlineMath> where <InlineMath>A</InlineMath> is invertible, then:
        </p>
        <MathBlock>
          {'x_j = \\frac{\\det A_j}{\\det A}'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'A_j'}</InlineMath> is <InlineMath>A</InlineMath> with column <InlineMath>j</InlineMath>
          replaced by <InlineMath>b</InlineMath>.
        </p>
      </Theorem>

      <h3>Geometric Interpretation</h3>

      <Theorem title="Determinant as Volume"
        proof={
          <>
            <p>
              Signed volume is multilinear, alternating, and normalized to 1 for the unit cube.
              By uniqueness, it equals the determinant.
            </p>
          </>
        }
      >
        <p>
          In <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, <InlineMath>{'|\\det A|'}</InlineMath> equals the volume
          of the parallelepiped spanned by the columns (or rows) of <InlineMath>A</InlineMath>.
        </p>
        <p className="mt-2">
          The sign indicates orientation: positive if orientation-preserving, negative if reversing.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Summary:</strong> The determinant is the unique multilinear alternating normalized
        function on matrices. It is multiplicative: <InlineMath>{'\\det(AB) = \\det A \\det B'}</InlineMath>.
        A matrix is invertible iff its determinant is nonzero. Cofactor expansion computes determinants
        recursively. The adjugate formula gives <InlineMath>{'A^{-1} = \\frac{1}{\\det A} \\text{adj}(A)'}</InlineMath>.
        Geometrically, <InlineMath>{'|\\det A|'}</InlineMath> measures volume scaling.
      </Callout>
    </LessonLayout>
  );
}
