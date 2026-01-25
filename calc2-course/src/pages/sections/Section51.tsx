import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2>Finding Solutions by Factorization</h2>

      <p>
        Factoring the differential operator allows us to find solutions by
        solving simpler equations. If a factor annihilates a function, so does
        the entire operator.
      </p>

      <h3>The Annihilation Principle</h3>

      <Callout type="info">
        <strong>Theorem 6.7:</strong> Let <InlineMath>{'L'}</InlineMath> be a
        constant-coefficient operator factored as:
        <MathBlock>{`L = A_1 A_2 \\cdots A_k`}</MathBlock>
        Then the solution space of <InlineMath>{'L(y) = 0'}</InlineMath> contains
        the solution space of each factor:
        <MathBlock>{`N(A_i) \\subseteq N(L) \\quad \\text{for each } i = 1, 2, \\ldots, k`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>{'u'}</InlineMath> is in the null
        space of <InlineMath>{'A_k'}</InlineMath>, then{' '}
        <InlineMath>{'A_k(u) = 0'}</InlineMath>, so:
      </p>
      <MathBlock>{`L(u) = (A_1 \\cdots A_{k-1})(A_k(u)) = (A_1 \\cdots A_{k-1})(0) = 0`}</MathBlock>

      <p>
        Since constant-coefficient operators commute, we can rearrange so any
        factor is last, proving the result for all factors.
      </p>

      <h3>Annihilation Terminology</h3>

      <p>
        If <InlineMath>{'L(u) = 0'}</InlineMath>, we say <InlineMath>{'L'}</InlineMath>{' '}
        <strong>annihilates</strong> <InlineMath>{'u'}</InlineMath>. The theorem says:
        if a factor <InlineMath>{'A_i'}</InlineMath> annihilates{' '}
        <InlineMath>{'u'}</InlineMath>, then <InlineMath>{'L'}</InlineMath> also
        annihilates <InlineMath>{'u'}</InlineMath>.
      </p>

      <h3>The Strategy</h3>

      <p>
        To solve <InlineMath>{'L(y) = 0'}</InlineMath>:
      </p>

      <ol>
        <li>Factor the characteristic polynomial completely</li>
        <li>Find the null space of each factor</li>
        <li>
          Combine the solutions from all factors (checking for independence)
        </li>
      </ol>

      <h3>First-Order Factors</h3>

      <p>
        The first-order operator <InlineMath>{'(D - r)'}</InlineMath> has null space
        containing <InlineMath>{`e^{rx}`}</InlineMath>:
      </p>
      <MathBlock>{`(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0`}</MathBlock>

      <h3>Example: Distinct Real Roots</h3>

      <p>
        Find a basis of solutions for:
      </p>
      <MathBlock>{`(D^3 - 7D + 6)y = 0`}</MathBlock>

      <p>
        <strong>Solution:</strong> The operator factors as:
      </p>
      <MathBlock>{`L = D^3 - 7D + 6 = (D-1)(D-2)(D+3)`}</MathBlock>

      <p>
        The null spaces of the factors contain:
      </p>
      <ul>
        <li>
          <InlineMath>{'N(D-1)'}</InlineMath> contains{' '}
          <InlineMath>{'u_1(x) = e^x'}</InlineMath>
        </li>
        <li>
          <InlineMath>{'N(D-2)'}</InlineMath> contains{' '}
          <InlineMath>{`u_2(x) = e^{2x}`}</InlineMath>
        </li>
        <li>
          <InlineMath>{'N(D+3)'}</InlineMath> contains{' '}
          <InlineMath>{`u_3(x) = e^{-3x}`}</InlineMath>
        </li>
      </ul>

      <p>
        These three functions are independent (exponentials with distinct
        exponents), so they form a basis. The general solution is:
      </p>
      <MathBlock>{`y = c_1 e^x + c_2 e^{2x} + c_3 e^{-3x}`}</MathBlock>

      <h3>The General Case: Distinct Real Roots</h3>

      <Callout type="info">
        <strong>Theorem 6.8:</strong> If the characteristic equation{' '}
        <InlineMath>{'p_L(r) = 0'}</InlineMath> has <InlineMath>{'n'}</InlineMath>{' '}
        distinct real roots <InlineMath>{'r_1, r_2, \\ldots, r_n'}</InlineMath>, then
        the general solution of <InlineMath>{'L(y) = 0'}</InlineMath> is:
        <MathBlock>{`y = \\sum_{k=1}^n c_k e^{r_k x}`}</MathBlock>
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> For distinct real roots, each root{' '}
        <InlineMath>{'r_k'}</InlineMath> contributes one solution{' '}
        <InlineMath>{`e^{r_k x}`}</InlineMath>. Since exponentials with distinct
        exponents are always independent, we immediately get a complete basis.
        The challenge arises when roots are repeated or complex.
      </Callout>
    </LessonLayout>
  );
}
