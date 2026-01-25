import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2>Uniqueness Theorem for Matrix Differential Equations</h2>

      <p>
        In this section we prove a uniqueness theorem that characterizes all
        solutions of the matrix differential equation{' '}
        <InlineMath>F'(t) = AF(t)</InlineMath>. This theorem is fundamental for
        understanding why the matrix exponential gives the complete solution.
      </p>

      <h3>Nonsingularity of the Exponential Matrix</h3>

      <Callout type="info">
        <strong>Theorem 7.4:</strong> For any <InlineMath>n \times n</InlineMath>{' '}
        matrix <InlineMath>A</InlineMath> and any scalar <InlineMath>t</InlineMath>:
        <MathBlock>
          {`e^{tA} e^{-tA} = I`}
        </MathBlock>
        Hence <InlineMath>{`e^{tA}`}</InlineMath> is nonsingular, and its inverse
        is <InlineMath>{`e^{-tA}`}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> Let <InlineMath>F</InlineMath> be the matrix
        function defined by:
      </p>
      <MathBlock>
        {`F(t) = e^{tA} e^{-tA}`}
      </MathBlock>

      <p>
        We prove that <InlineMath>F(t) = I</InlineMath> by showing that{' '}
        <InlineMath>F'(t) = 0</InlineMath>. Differentiating as a product:
      </p>
      <MathBlock>
        {`F'(t) = e^{tA}(e^{-tA})' + (e^{tA})' e^{-tA} = e^{tA}(-Ae^{-tA}) + Ae^{tA} e^{-tA}`}
      </MathBlock>

      <p>
        Since <InlineMath>A</InlineMath> commutes with{' '}
        <InlineMath>{`e^{tA}`}</InlineMath>:
      </p>
      <MathBlock>
        {`F'(t) = -Ae^{tA} e^{-tA} + Ae^{tA} e^{-tA} = 0`}
      </MathBlock>

      <p>
        By the zero-derivative theorem, <InlineMath>F</InlineMath> is constant.
        Since <InlineMath>F(0) = e^0 e^0 = I</InlineMath>, we have{' '}
        <InlineMath>F(t) = I</InlineMath> for all <InlineMath>t</InlineMath>.
      </p>

      <h3>The Uniqueness Theorem</h3>

      <Callout type="info">
        <strong>Theorem 7.5 (Uniqueness):</strong> Let <InlineMath>A</InlineMath>{' '}
        and <InlineMath>B</InlineMath> be given{' '}
        <InlineMath>n \times n</InlineMath> constant matrices. Then the only{' '}
        <InlineMath>n \times n</InlineMath> matrix function <InlineMath>F</InlineMath>{' '}
        satisfying the initial-value problem:
        <MathBlock>
          F'(t) = AF(t), \quad F(0) = B
        </MathBlock>
        for <InlineMath>{`-\\infty < t < +\\infty`}</InlineMath> is:
        <MathBlock>
          {`F(t) = e^{tA} B`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> First, we verify that{' '}
        <InlineMath>{`e^{tA}B`}</InlineMath> is indeed a solution. Now let{' '}
        <InlineMath>F</InlineMath> be any solution and consider:
      </p>
      <MathBlock>
        {`G(t) = e^{-tA} F(t)`}
      </MathBlock>

      <p>Differentiating this product:</p>
      <MathBlock>
        {`G'(t) = e^{-tA} F'(t) - Ae^{-tA} F(t) = e^{-tA} AF(t) - e^{-tA} AF(t) = 0`}
      </MathBlock>

      <p>
        Therefore <InlineMath>G(t)</InlineMath> is a constant matrix:
      </p>
      <MathBlock>
        G(t) = G(0) = F(0) = B
      </MathBlock>

      <p>
        In other words, <InlineMath>{`e^{-tA}F(t) = B`}</InlineMath>. Multiplying
        by <InlineMath>{`e^{tA}`}</InlineMath>:
      </p>
      <MathBlock>
        {`F(t) = e^{tA} B`}
      </MathBlock>

      <h3>Right-Multiplication Variant</h3>

      <p>
        The same type of proof shows that <InlineMath>{`F(t) = Be^{tA}`}</InlineMath>{' '}
        is the only solution of the initial-value problem:
      </p>
      <MathBlock>
        F'(t) = F(t)A, \quad F(0) = B
      </MathBlock>

      <Callout type="warning">
        <strong>Note:</strong> The placement of <InlineMath>B</InlineMath> matters!
        For <InlineMath>F' = AF</InlineMath>, the solution is{' '}
        <InlineMath>{`F = e^{tA}B`}</InlineMath> (left multiplication). For{' '}
        <InlineMath>F' = FA</InlineMath>, the solution is{' '}
        <InlineMath>{`F = Be^{tA}`}</InlineMath> (right multiplication).
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The uniqueness theorem tells us that{' '}
        <InlineMath>{`e^{tA}`}</InlineMath> is not just <em>a</em> solution but{' '}
        <em>the</em> fundamental solution matrix. Every solution of{' '}
        <InlineMath>F' = AF</InlineMath> can be expressed as{' '}
        <InlineMath>{`e^{tA}B`}</InlineMath> for some constant matrix{' '}
        <InlineMath>B</InlineMath> determined by initial conditions.
      </Callout>
    </LessonLayout>
  );
}
