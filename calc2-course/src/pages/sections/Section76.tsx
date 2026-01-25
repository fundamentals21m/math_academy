import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h2>Existence and Uniqueness by Successive Approximations</h2>

      <p>
        We prove that every homogeneous linear system has a unique solution by
        constructing it explicitly using the method of{' '}
        <strong>successive approximations</strong> (also called{' '}
        <strong>Picard iteration</strong>).
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 7.14 (Existence and Uniqueness):</strong> Let{' '}
        <InlineMath>A(t)</InlineMath> be an{' '}
        <InlineMath>n \times n</InlineMath> matrix function continuous on an
        open interval <InlineMath>J</InlineMath>. For any{' '}
        <InlineMath>a \in J</InlineMath> and any initial vector{' '}
        <InlineMath>B</InlineMath>, the system:
        <MathBlock>
          Y'(t) = A(t)Y(t), \quad Y(a) = B
        </MathBlock>
        has exactly one solution <InlineMath>Y(t)</InlineMath> on{' '}
        <InlineMath>J</InlineMath>.
      </Callout>

      <h3>The Method of Successive Approximations</h3>

      <p>
        The differential equation <InlineMath>Y' = AY</InlineMath> with{' '}
        <InlineMath>Y(a) = B</InlineMath> is equivalent to the integral
        equation:
      </p>
      <MathBlock>
        {`Y(x) = B + \\int_a^x A(t)Y(t)\\, dt`}
      </MathBlock>

      <p>
        We construct a sequence of approximations:
      </p>
      <MathBlock>
        Y_0(x) = B
      </MathBlock>
      <MathBlock>
        {`Y_{k+1}(x) = B + \\int_a^x A(t)Y_k(t)\\, dt \\quad \\text{for } k = 0, 1, 2, \\ldots`}
      </MathBlock>

      <h3>Proof Outline</h3>

      <p>
        <strong>Step 1: Boundedness.</strong> On any compact subinterval{' '}
        <InlineMath>[a, b] \subset J</InlineMath>, let{' '}
        <InlineMath>{`M = \\max_{[a,b]} \\|A(t)\\|`}</InlineMath>. Then:
      </p>
      <MathBlock>
        {`\\|Y_{k+1}(x) - Y_k(x)\\| \\leq \\frac{M^k |x-a|^k}{k!} \\|Y_1 - Y_0\\|`}
      </MathBlock>

      <p>
        <strong>Step 2: Convergence.</strong> The series:
      </p>
      <MathBlock>
        {`Y(x) = Y_0(x) + \\sum_{k=0}^\\infty (Y_{k+1}(x) - Y_k(x))`}
      </MathBlock>

      <p>
        converges uniformly on <InlineMath>[a, b]</InlineMath> because it is
        dominated by:
      </p>
      <MathBlock>
        {`\\|B\\| \\sum_{k=0}^\\infty \\frac{M^k |x-a|^k}{k!} = \\|B\\| e^{M|x-a|} < \\infty`}
      </MathBlock>

      <p>
        <strong>Step 3: Y is a solution.</strong> Taking limits in the
        recursion shows <InlineMath>Y</InlineMath> satisfies the integral
        equation, hence the differential equation.
      </p>

      <p>
        <strong>Step 4: Uniqueness.</strong> If <InlineMath>Z</InlineMath> is
        another solution, then <InlineMath>W = Y - Z</InlineMath> satisfies{' '}
        <InlineMath>W' = AW</InlineMath> with <InlineMath>W(a) = 0</InlineMath>.
        A Gronwall-type argument shows{' '}
        <InlineMath>{`\\|W(x)\\| \\leq 0`}</InlineMath>, so{' '}
        <InlineMath>W = 0</InlineMath>.
      </p>

      <h3>Extension to Nonhomogeneous Systems</h3>

      <p>
        The same technique proves existence and uniqueness for:
      </p>
      <MathBlock>
        Y'(t) = A(t)Y(t) + Q(t), \quad Y(a) = B
      </MathBlock>

      <p>
        where both <InlineMath>A(t)</InlineMath> and{' '}
        <InlineMath>Q(t)</InlineMath> are continuous.
      </p>

      <h3>The Fundamental Matrix</h3>

      <Callout type="info">
        <strong>Corollary:</strong> For each <InlineMath>a \in J</InlineMath>,
        there exists a unique <InlineMath>n \times n</InlineMath> matrix
        function <InlineMath>\Phi(x)</InlineMath> satisfying:
        <MathBlock>
          \Phi'(x) = A(x)\Phi(x), \quad \Phi(a) = I
        </MathBlock>
        This <InlineMath>\Phi</InlineMath> is called the{' '}
        <strong>fundamental matrix</strong> at <InlineMath>a</InlineMath>.
        Every solution of <InlineMath>Y' = AY</InlineMath> has the form{' '}
        <InlineMath>Y(x) = \Phi(x)C</InlineMath> for some constant vector{' '}
        <InlineMath>C</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The method of successive approximations
        is constructive—it actually builds the solution. For constant{' '}
        <InlineMath>A</InlineMath>, the iterations converge to{' '}
        <InlineMath>{`e^{(x-a)A}B`}</InlineMath>. The proof shows that
        solutions exist globally on the entire interval{' '}
        <InlineMath>J</InlineMath> where <InlineMath>A</InlineMath> is
        continuous—unlike nonlinear equations which may have finite-time
        blowup.
      </Callout>
    </LessonLayout>
  );
}
