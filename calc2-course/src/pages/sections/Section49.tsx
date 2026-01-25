import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Dimension of the Solution Space</h2>

      <p>
        The dimensionality theorem establishes that the solution space of an{' '}
        <InlineMath>n</InlineMath>th-order linear homogeneous equation has
        dimension exactly <InlineMath>n</InlineMath>.
      </p>

      <h3>The Dimensionality Theorem</h3>

      <Callout type="info">
        <strong>Theorem 6.4 (Dimensionality Theorem):</strong> Let{' '}
        <InlineMath>{`L: \\mathscr{C}^n(J) \\to \\mathscr{C}(J)`}</InlineMath>{' '}
        be a linear differential operator of order <InlineMath>n</InlineMath>:
        <MathBlock>{`L = D^n + P_1 D^{n-1} + \\cdots + P_n`}</MathBlock>
        Then the solution space of the equation <InlineMath>{`L(y) = 0`}</InlineMath>{' '}
        has dimension <InlineMath>n</InlineMath>:
        <MathBlock>{`\\dim N(L) = n`}</MathBlock>
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        Let <InlineMath>{`V_n`}</InlineMath> denote the{' '}
        <InlineMath>n</InlineMath>-dimensional space of{' '}
        <InlineMath>n</InlineMath>-tuples of scalars. Define a linear
        transformation <InlineMath>T</InlineMath> that maps each function{' '}
        <InlineMath>f</InlineMath> in the solution space <InlineMath>{`N(L)`}</InlineMath>{' '}
        to its initial-value vector at <InlineMath>{`x_0`}</InlineMath>:
      </p>
      <MathBlock>
        {`T(f) = (f(x_0), f'(x_0), \\ldots, f^{(n-1)}(x_0))`}
      </MathBlock>

      <p>
        The uniqueness theorem tells us that <InlineMath>{`T(f) = 0`}</InlineMath>{' '}
        implies <InlineMath>{`f = 0`}</InlineMath>. Therefore{' '}
        <InlineMath>T</InlineMath> is one-to-one on <InlineMath>{`N(L)`}</InlineMath>.
      </p>

      <p>
        Hence <InlineMath>{`T^{-1}`}</InlineMath> is also one-to-one and maps{' '}
        <InlineMath>{`V_n`}</InlineMath> onto <InlineMath>{`N(L)`}</InlineMath>, which
        shows:
      </p>
      <MathBlock>{`\\dim N(L) = \\dim V_n = n`}</MathBlock>

      <h3>Consequence: The General Solution</h3>

      <Callout type="info">
        <strong>Theorem 6.5:</strong> Let{' '}
        <InlineMath>{`L: \\mathscr{C}^n(J) \\to \\mathscr{C}(J)`}</InlineMath>{' '}
        be a linear differential operator of order <InlineMath>n</InlineMath>.
        If <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> are <InlineMath>n</InlineMath>{' '}
        independent solutions of <InlineMath>{`L(y) = 0`}</InlineMath> on{' '}
        <InlineMath>J</InlineMath>, then every solution{' '}
        <InlineMath>{`y = f(x)`}</InlineMath> can be expressed as:
        <MathBlock>{`f(x) = \\sum_{k=1}^n c_k u_k(x)`}</MathBlock>
        where <InlineMath>{`c_1, \\ldots, c_n`}</InlineMath> are constants.
      </Callout>

      <h3>The General Solution</h3>

      <p>
        Since all solutions are contained in the linear combination:
      </p>
      <MathBlock>{`y = c_1 u_1(x) + c_2 u_2(x) + \\cdots + c_n u_n(x)`}</MathBlock>

      <p>
        this expression with arbitrary constants <InlineMath>{`c_1, \\ldots, c_n`}</InlineMath>{' '}
        is called the <strong>general solution</strong> of the differential
        equation.
      </p>

      <h3>Finding a Basis</h3>

      <p>
        The dimensionality theorem guarantees that a basis of{' '}
        <InlineMath>n</InlineMath> solutions exists, but does not tell us how to
        find it. No simple method works for every linear equation. However,
        special methods exist for:
      </p>

      <ul>
        <li>
          <strong>Constant-coefficient equations:</strong> Factorization of
          operators using the characteristic polynomial
        </li>
        <li>
          <strong>Euler equations:</strong> Reduction to constant-coefficient
          equations via substitution
        </li>
        <li>
          <strong>Power series methods:</strong> For analytic coefficients
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The dimension of the solution space equals
        the order of the equation. This is the key structural result about
        linear differential equations. Any <InlineMath>n</InlineMath> independent
        solutions form a basis, and every solution is a unique linear combination
        of basis elements. The challenge shifts from proving solutions exist to
        finding <InlineMath>n</InlineMath> independent ones.
      </Callout>
    </LessonLayout>
  );
}
