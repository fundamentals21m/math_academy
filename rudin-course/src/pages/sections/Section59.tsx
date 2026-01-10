import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2 className="text-2xl font-semibold mb-4">Linear Transformations</h2>

      <p className="mb-4">
        This section begins our study of functions of several variables. We start with
        linear transformations between Euclidean spaces, which provide the foundation
        for differential calculus in higher dimensions. The derivative of a function
        at a point will be defined as a linear transformation that best approximates
        the function near that point.
      </p>

      <Definition title="9.1 - Euclidean Spaces">
        <p className="mb-3">
          We denote by <InlineMath>{'\\mathbb{R}^n'}</InlineMath> the set of all ordered <InlineMath>{'n'}</InlineMath>-tuples
        </p>
        <MathBlock>{'\\mathbf{x} = (x_1, x_2, \\ldots, x_n)'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'x_1, \\ldots, x_n'}</InlineMath> are real numbers, called the <em>coordinates</em> of <InlineMath>{'\\mathbf{x}'}</InlineMath>.
          The elements of <InlineMath>{'\\mathbb{R}^n'}</InlineMath> are called <em>points</em> or <em>vectors</em>.
        </p>
        <p className="mb-3">
          We define vector operations:
        </p>
        <MathBlock>{'\\mathbf{x} + \\mathbf{y} = (x_1 + y_1, \\ldots, x_n + y_n)'}</MathBlock>
        <MathBlock>{'c\\mathbf{x} = (cx_1, \\ldots, cx_n)'}</MathBlock>
        <p className="mb-3">
          The <em>inner product</em> (or dot product) is
        </p>
        <MathBlock>{'\\mathbf{x} \\cdot \\mathbf{y} = \\sum_{i=1}^n x_i y_i'}</MathBlock>
        <p>
          and the <em>norm</em> (or length) of <InlineMath>{'\\mathbf{x}'}</InlineMath> is <InlineMath>{'|\\mathbf{x}| = (\\mathbf{x} \\cdot \\mathbf{x})^{1/2}'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="9.2 - Standard Basis">
        <p className="mb-3">
          The <em>standard basis</em> of <InlineMath>{'\\mathbb{R}^n'}</InlineMath> consists of the vectors
        </p>
        <MathBlock>{'\\mathbf{e}_1 = (1, 0, \\ldots, 0), \\quad \\mathbf{e}_2 = (0, 1, 0, \\ldots, 0), \\quad \\ldots, \\quad \\mathbf{e}_n = (0, \\ldots, 0, 1)'}</MathBlock>
        <p>
          Every <InlineMath>{'\\mathbf{x} \\in \\mathbb{R}^n'}</InlineMath> can be written uniquely as <InlineMath>{'\\mathbf{x} = \\sum_{i=1}^n x_i \\mathbf{e}_i'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="9.3 - Linear Transformation">
        <p className="mb-3">
          A mapping <InlineMath>{'A: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> is said to be a <em>linear transformation</em> if
        </p>
        <MathBlock>{'A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}'}</MathBlock>
        <MathBlock>{'A(c\\mathbf{x}) = cA\\mathbf{x}'}</MathBlock>
        <p className="mt-3">
          for all <InlineMath>{'\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n'}</InlineMath> and all scalars <InlineMath>{'c \\in \\mathbb{R}'}</InlineMath>.
          We often write <InlineMath>{'A\\mathbf{x}'}</InlineMath> instead of <InlineMath>{'A(\\mathbf{x})'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          Note that <InlineMath>{'A\\mathbf{0} = \\mathbf{0}'}</InlineMath> for any linear transformation, since
          <InlineMath>{'A\\mathbf{0} = A(0 \\cdot \\mathbf{x}) = 0 \\cdot A\\mathbf{x} = \\mathbf{0}'}</InlineMath>.
          We denote the set of all linear transformations from <InlineMath>{'\\mathbb{R}^n'}</InlineMath> to <InlineMath>{'\\mathbb{R}^m'}</InlineMath> by <InlineMath>{'L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>, or simply <InlineMath>{'L(\\mathbb{R}^n)'}</InlineMath> when <InlineMath>{'m = n'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="9.4 - Matrix Representation"
        proof={
          <>
            <p className="mb-3">
              For any <InlineMath>{'\\mathbf{x} \\in \\mathbb{R}^n'}</InlineMath>, we have <InlineMath>{'\\mathbf{x} = \\sum_{j=1}^n x_j \\mathbf{e}_j'}</InlineMath>.
              By linearity:
            </p>
            <MathBlock>{'A\\mathbf{x} = A\\left(\\sum_{j=1}^n x_j \\mathbf{e}_j\\right) = \\sum_{j=1}^n x_j A\\mathbf{e}_j'}</MathBlock>
            <p className="mb-3">
              Each <InlineMath>{'A\\mathbf{e}_j \\in \\mathbb{R}^m'}</InlineMath> can be written as <InlineMath>{'A\\mathbf{e}_j = \\sum_{i=1}^m a_{ij} \\mathbf{e}_i'}</InlineMath>.
              Thus
            </p>
            <MathBlock>{'A\\mathbf{x} = \\sum_{j=1}^n \\sum_{i=1}^m a_{ij} x_j \\mathbf{e}_i = \\sum_{i=1}^m \\left(\\sum_{j=1}^n a_{ij} x_j\\right) \\mathbf{e}_i'}</MathBlock>
            <p>
              The <InlineMath>{'i'}</InlineMath>-th component of <InlineMath>{'A\\mathbf{x}'}</InlineMath> is therefore <InlineMath>{'\\sum_{j=1}^n a_{ij} x_j'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Every linear transformation <InlineMath>{'A: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> can be represented by
          an <InlineMath>{'m \\times n'}</InlineMath> matrix <InlineMath>{'[a_{ij}]'}</InlineMath>, where <InlineMath>{'a_{ij}'}</InlineMath> is the <InlineMath>{'i'}</InlineMath>-th component
          of <InlineMath>{'A\\mathbf{e}_j'}</InlineMath>. The transformation is given by
        </p>
        <MathBlock>{'(A\\mathbf{x})_i = \\sum_{j=1}^n a_{ij} x_j'}</MathBlock>
        <p className="mt-3">
          Conversely, every <InlineMath>{'m \\times n'}</InlineMath> matrix defines a linear transformation by this formula.
        </p>
      </Theorem>

      <Example title="9.5 - Examples of Linear Transformations">
        <p className="mb-3">
          <strong>(a)</strong> The <em>identity</em> <InlineMath>{'I: \\mathbb{R}^n \\to \\mathbb{R}^n'}</InlineMath> defined by <InlineMath>{'I\\mathbf{x} = \\mathbf{x}'}</InlineMath>.
          Its matrix is the <InlineMath>{'n \\times n'}</InlineMath> identity matrix with <InlineMath>{'1'}</InlineMath>s on the diagonal.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> The <em>zero transformation</em> <InlineMath>{'0: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> defined by <InlineMath>{'0\\mathbf{x} = \\mathbf{0}'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(c)</strong> <em>Rotation</em> in <InlineMath>{'\\mathbb{R}^2'}</InlineMath> by angle <InlineMath>{'\\theta'}</InlineMath>:
        </p>
        <MathBlock>{'A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          <strong>(d)</strong> <em>Projection</em> onto the first coordinate in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>:
        </p>
        <MathBlock>{'P = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}'}</MathBlock>
      </Example>

      <Definition title="9.6 - Operator Norm">
        <p className="mb-3">
          For a linear transformation <InlineMath>{'A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>, we define the <em>operator norm</em> (or <em>norm</em>) of <InlineMath>{'A'}</InlineMath> by
        </p>
        <MathBlock>{'\\|A\\| = \\sup\\{|A\\mathbf{x}| : \\mathbf{x} \\in \\mathbb{R}^n, |\\mathbf{x}| \\leq 1\\}'}</MathBlock>
        <p className="mt-3">
          Equivalently, <InlineMath>{'\\|A\\| = \\sup\\{|A\\mathbf{x}|/|\\mathbf{x}| : \\mathbf{x} \\neq \\mathbf{0}\\}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="9.7 - Properties of Operator Norm"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> The set <InlineMath>{'\\{|A\\mathbf{x}| : |\\mathbf{x}| \\leq 1\\}'}</InlineMath> is bounded:
              if <InlineMath>{'[a_{ij}]'}</InlineMath> is the matrix of <InlineMath>{'A'}</InlineMath>, then
            </p>
            <MathBlock>{'|A\\mathbf{x}|^2 = \\sum_{i=1}^m \\left(\\sum_{j=1}^n a_{ij}x_j\\right)^2 \\leq \\left(\\sum_{i,j} a_{ij}^2\\right)|\\mathbf{x}|^2'}</MathBlock>
            <p className="mb-3">
              by Cauchy-Schwarz. Hence <InlineMath>{'\\|A\\|^2 \\leq \\sum_{i,j} a_{ij}^2 < \\infty'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(b)</strong> For any <InlineMath>{'\\mathbf{x}'}</InlineMath>, if <InlineMath>{'\\mathbf{x} \\neq \\mathbf{0}'}</InlineMath> then <InlineMath>{'\\mathbf{y} = \\mathbf{x}/|\\mathbf{x}|'}</InlineMath> has <InlineMath>{'|\\mathbf{y}| = 1'}</InlineMath>, so
            </p>
            <MathBlock>{'|A\\mathbf{x}| = |\\mathbf{x}| \\cdot |A\\mathbf{y}| \\leq |\\mathbf{x}| \\cdot \\|A\\|'}</MathBlock>
            <p className="mb-3">
              <strong>(c)</strong> <InlineMath>{'|AB\\mathbf{x}| = |A(B\\mathbf{x})| \\leq \\|A\\| \\cdot |B\\mathbf{x}| \\leq \\|A\\| \\cdot \\|B\\| \\cdot |\\mathbf{x}|'}</InlineMath>
            </p>
            <p className="mb-3">
              <strong>(d)</strong> This follows from properties of the supremum and linearity of <InlineMath>{'A + B'}</InlineMath> and <InlineMath>{'cA'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'A, B \\in L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>. Then:
        </p>
        <ul className="list-none space-y-2">
          <li>(a) <InlineMath>{'\\|A\\| < \\infty'}</InlineMath></li>
          <li>(b) <InlineMath>{'|A\\mathbf{x}| \\leq \\|A\\| \\cdot |\\mathbf{x}|'}</InlineMath> for all <InlineMath>{'\\mathbf{x} \\in \\mathbb{R}^n'}</InlineMath></li>
          <li>(c) If <InlineMath>{'A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath> and <InlineMath>{'B \\in L(\\mathbb{R}^m, \\mathbb{R}^k)'}</InlineMath>, then <InlineMath>{'\\|BA\\| \\leq \\|B\\| \\cdot \\|A\\|'}</InlineMath></li>
          <li>(d) <InlineMath>{'\\|A + B\\| \\leq \\|A\\| + \\|B\\|'}</InlineMath> and <InlineMath>{'\\|cA\\| = |c| \\cdot \\|A\\|'}</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem
        title="9.8 - Completeness of L(R^n, R^m)"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\{A_k\\}'}</InlineMath> be a Cauchy sequence in <InlineMath>{'L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>.
              For each basis vector <InlineMath>{'\\mathbf{e}_j'}</InlineMath>, the sequence <InlineMath>{'\\{A_k \\mathbf{e}_j\\}'}</InlineMath> is Cauchy in <InlineMath>{'\\mathbb{R}^m'}</InlineMath>
              since
            </p>
            <MathBlock>{'|A_k \\mathbf{e}_j - A_\\ell \\mathbf{e}_j| \\leq \\|A_k - A_\\ell\\| \\cdot |\\mathbf{e}_j| = \\|A_k - A_\\ell\\|'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'\\mathbb{R}^m'}</InlineMath> is complete, <InlineMath>{'A_k \\mathbf{e}_j \\to \\mathbf{b}_j'}</InlineMath> for some <InlineMath>{'\\mathbf{b}_j \\in \\mathbb{R}^m'}</InlineMath>.
              Define <InlineMath>{'A'}</InlineMath> by <InlineMath>{'A\\mathbf{e}_j = \\mathbf{b}_j'}</InlineMath> and extend linearly. Then <InlineMath>{'A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>.
            </p>
            <p className="mb-3">
              For any <InlineMath>{'\\mathbf{x} = \\sum x_j \\mathbf{e}_j'}</InlineMath>:
            </p>
            <MathBlock>{'|A_k \\mathbf{x} - A\\mathbf{x}| = \\left|\\sum_j x_j (A_k \\mathbf{e}_j - A\\mathbf{e}_j)\\right| \\leq |\\mathbf{x}| \\cdot \\max_j |A_k \\mathbf{e}_j - \\mathbf{b}_j|'}</MathBlock>
            <p>
              Since each <InlineMath>{'|A_k \\mathbf{e}_j - \\mathbf{b}_j| \\to 0'}</InlineMath>, we have <InlineMath>{'\\|A_k - A\\| \\to 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The space <InlineMath>{'L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath> with the operator norm is a complete metric space.
          That is, every Cauchy sequence of linear transformations converges to a linear transformation.
        </p>
      </Theorem>

      <Theorem
        title="9.9 - Invertible Transformations Form Open Set"
        proof={
          <>
            <p className="mb-3">
              The key is to show that if <InlineMath>{'\\|I - A\\| < 1'}</InlineMath>, then <InlineMath>{'A'}</InlineMath> is invertible.
              Define the <em>Neumann series</em>:
            </p>
            <MathBlock>{'B = \\sum_{k=0}^\\infty (I - A)^k'}</MathBlock>
            <p className="mb-3">
              This converges absolutely since <InlineMath>{'\\|(I-A)^k\\| \\leq \\|I-A\\|^k'}</InlineMath> and <InlineMath>{'\\sum \\|I-A\\|^k < \\infty'}</InlineMath>.
              Moreover:
            </p>
            <MathBlock>{'AB = A \\sum_{k=0}^\\infty (I-A)^k = (I - (I-A))\\sum_{k=0}^\\infty (I-A)^k = \\sum_{k=0}^\\infty (I-A)^k - \\sum_{k=1}^\\infty (I-A)^k = I'}</MathBlock>
            <p className="mb-3">
              Similarly <InlineMath>{'BA = I'}</InlineMath>, so <InlineMath>{'A^{-1} = B'}</InlineMath> exists.
            </p>
            <p className="mb-3">
              Now if <InlineMath>{'A_0'}</InlineMath> is invertible and <InlineMath>{'\\|A - A_0\\| < 1/\\|A_0^{-1}\\|'}</InlineMath>, then
            </p>
            <MathBlock>{'\\|I - A_0^{-1}A\\| = \\|A_0^{-1}(A_0 - A)\\| \\leq \\|A_0^{-1}\\| \\cdot \\|A_0 - A\\| < 1'}</MathBlock>
            <p>
              so <InlineMath>{'A_0^{-1}A'}</InlineMath> is invertible, hence <InlineMath>{'A'}</InlineMath> is invertible.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The set of invertible linear transformations in <InlineMath>{'L(\\mathbb{R}^n)'}</InlineMath> is open.
          More precisely, if <InlineMath>{'A'}</InlineMath> is invertible and <InlineMath>{'\\|B - A\\| < 1/\\|A^{-1}\\|'}</InlineMath>,
          then <InlineMath>{'B'}</InlineMath> is also invertible.
        </p>
      </Theorem>

      <Theorem
        title="9.10 - Continuity of Inversion"
        proof={
          <>
            <p className="mb-3">
              With <InlineMath>{'B = A + H'}</InlineMath> where <InlineMath>{'\\|H\\| < 1/\\|A^{-1}\\|'}</InlineMath>, we have
              <InlineMath>{'B^{-1} = (A(I + A^{-1}H))^{-1} = (I + A^{-1}H)^{-1}A^{-1}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Using the Neumann series <InlineMath>{'(I + A^{-1}H)^{-1} = \\sum_{k=0}^\\infty (-A^{-1}H)^k'}</InlineMath>:
            </p>
            <MathBlock>{'B^{-1} - A^{-1} = \\left(\\sum_{k=1}^\\infty (-A^{-1}H)^k\\right) A^{-1}'}</MathBlock>
            <p className="mb-3">
              Taking norms:
            </p>
            <MathBlock>{'\\|B^{-1} - A^{-1}\\| \\leq \\|A^{-1}\\| \\sum_{k=1}^\\infty \\|A^{-1}\\|^k \\|H\\|^k = \\frac{\\|A^{-1}\\|^2 \\|H\\|}{1 - \\|A^{-1}\\| \\|H\\|}'}</MathBlock>
            <p>
              This tends to <InlineMath>{'0'}</InlineMath> as <InlineMath>{'\\|H\\| \\to 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The map <InlineMath>{'A \\mapsto A^{-1}'}</InlineMath> is continuous on the set of invertible transformations.
          More precisely, if <InlineMath>{'A'}</InlineMath> is invertible and <InlineMath>{'\\|B - A\\| < 1/\\|A^{-1}\\|'}</InlineMath>, then
        </p>
        <MathBlock>{'\\|B^{-1} - A^{-1}\\| \\leq \\frac{\\|A^{-1}\\|^2 \\|B - A\\|}{1 - \\|A^{-1}\\| \\|B - A\\|}'}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Linear transformations <InlineMath>{'A: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> satisfy <InlineMath>{'A(\\mathbf{x}+\\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}'}</InlineMath> and <InlineMath>{'A(c\\mathbf{x}) = cA\\mathbf{x}'}</InlineMath></li>
        <li>Every linear transformation corresponds to a unique matrix via <InlineMath>{'(A\\mathbf{x})_i = \\sum_j a_{ij}x_j'}</InlineMath></li>
        <li>The operator norm <InlineMath>{'\\|A\\| = \\sup_{|\\mathbf{x}| \\leq 1} |A\\mathbf{x}|'}</InlineMath> measures the maximum stretching</li>
        <li><InlineMath>{'|A\\mathbf{x}| \\leq \\|A\\| \\cdot |\\mathbf{x}|'}</InlineMath> is the fundamental inequality for the operator norm</li>
        <li><InlineMath>{'L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath> is a complete normed space (Banach space)</li>
        <li>Invertible transformations form an open set, and inversion is continuous</li>
      </ul>
    </LessonLayout>
  );
}
