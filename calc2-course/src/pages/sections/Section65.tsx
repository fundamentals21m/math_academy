import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2>The Matrix Exponential</h2>

      <p>
        To generalize the scalar solution formula{' '}
        <InlineMath>{`y(x) = e^{A(x)}y(a) + \\cdots`}</InlineMath> to systems, we
        need to define the exponential of a matrix. This requires understanding
        convergent series of matrices.
      </p>

      <h3>Convergent Series of Matrices</h3>

      <Callout type="info">
        <strong>Definition:</strong> Given matrices{' '}
        <InlineMath>{`\\{C_k\\}`}</InlineMath> with entries{' '}
        <InlineMath>{`c_{ij}^{(k)}`}</InlineMath>, the series{' '}
        <InlineMath>{`\\sum_{k=1}^\\infty C_k`}</InlineMath> is{' '}
        <strong>convergent</strong> if all <InlineMath>mn</InlineMath> scalar
        series:
        <MathBlock>
          {`\\sum_{k=1}^\\infty c_{ij}^{(k)} \\quad (i = 1, \\ldots, m; \\, j = 1, \\ldots, n)`}
        </MathBlock>
        are convergent. The sum is the matrix whose ij-entry is this series.
      </Callout>

      <h3>Definition of the Matrix Exponential</h3>

      <Callout type="info">
        <strong>Definition:</strong> For an <InlineMath>n \times n</InlineMath>{' '}
        matrix <InlineMath>A</InlineMath>, the <strong>matrix exponential</strong>{' '}
        is:
        <MathBlock>
          {`e^A = \\sum_{k=0}^\\infty \\frac{A^k}{k!} = I + A + \\frac{A^2}{2!} + \\frac{A^3}{3!} + \\cdots`}
        </MathBlock>
        where <InlineMath>A^0 = I</InlineMath> (the identity matrix).
      </Callout>

      <h3>Convergence</h3>

      <p>
        This series converges for every square matrix <InlineMath>A</InlineMath>.
        To prove convergence, we use the <strong>norm</strong> of a matrix.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> For an <InlineMath>m \times n</InlineMath>{' '}
        matrix <InlineMath>{`A = [a_{ij}]`}</InlineMath>, the{' '}
        <strong>norm</strong> is:
        <MathBlock>
          {`\\|A\\| = \\sum_{i,j} |a_{ij}|`}
        </MathBlock>
      </Callout>

      <p>
        Key properties of the norm:
      </p>
      <ul>
        <li><InlineMath>\|A\| \geq 0</InlineMath>, with equality iff <InlineMath>A = 0</InlineMath></li>
        <li><InlineMath>\|cA\| = |c| \|A\|</InlineMath></li>
        <li><InlineMath>\|A + B\| \leq \|A\| + \|B\|</InlineMath></li>
        <li><InlineMath>\|AB\| \leq \|A\| \|B\|</InlineMath></li>
      </ul>

      <p>
        The last property implies <InlineMath>{`\\|A^k\\| \\leq \\|A\\|^k`}</InlineMath>,
        so:
      </p>
      <MathBlock>
        {`\\sum_{k=0}^\\infty \\left\\|\\frac{A^k}{k!}\\right\\| \\leq \\sum_{k=0}^\\infty \\frac{\\|A\\|^k}{k!} = e^{\\|A\\|} < \\infty`}
      </MathBlock>

      <h3>Fundamental Properties</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For <InlineMath>n \times n</InlineMath>{' '}
        matrices:
        <ol>
          <li><InlineMath>e^0 = I</InlineMath></li>
          <li>
            If <InlineMath>AB = BA</InlineMath>, then{' '}
            <InlineMath>{`e^A e^B = e^{A+B}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`e^{tA} e^{sA} = e^{(t+s)A}`}</InlineMath> for
            all scalars <InlineMath>t, s</InlineMath>
          </li>
          <li>
            <InlineMath>{`e^A`}</InlineMath> is invertible with{' '}
            <InlineMath>{`(e^A)^{-1} = e^{-A}`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <h3>The Key Derivative Property</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For a constant matrix <InlineMath>A</InlineMath>:
        <MathBlock>
          {`\\frac{d}{dt} e^{tA} = A e^{tA} = e^{tA} A`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> Differentiating term by term:
      </p>
      <MathBlock>
        {`\\frac{d}{dt} e^{tA} = \\frac{d}{dt} \\sum_{k=0}^\\infty \\frac{t^k A^k}{k!} = \\sum_{k=1}^\\infty \\frac{k t^{k-1} A^k}{k!} = A \\sum_{k=1}^\\infty \\frac{t^{k-1} A^{k-1}}{(k-1)!} = A e^{tA}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The matrix exponential{' '}
        <InlineMath>{`e^{tA}`}</InlineMath> satisfies the differential equation{' '}
        <InlineMath>Y' = AY</InlineMath> with <InlineMath>Y(0) = I</InlineMath>.
        This makes it the fundamental solution matrix for constant-coefficient
        systems—it plays exactly the role that{' '}
        <InlineMath>{`e^{at}`}</InlineMath> plays for the scalar equation{' '}
        <InlineMath>y' = ay</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
