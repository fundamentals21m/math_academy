import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section190() {
  return (
    <LessonLayout sectionId={190}>
      <h2>The Euler Summation Formula</h2>

      <p>
        The <strong>Euler summation formula</strong> connects finite sums with
        integrals, providing a powerful tool for evaluating sums and deriving
        asymptotic expansions.
      </p>

      <h3>Motivation</h3>

      <p>
        Consider the sum <InlineMath>{'\\sum_{k=1}^{n} f(k)'}</InlineMath>. If{' '}
        <InlineMath>f</InlineMath> varies slowly, this sum is approximately{' '}
        <InlineMath>{'\\int_1^n f(x)\\,dx'}</InlineMath>. The Euler formula makes
        this precise and provides correction terms.
      </p>

      <h3>The Formula</h3>

      <Callout type="info">
        <strong>Theorem (Euler Summation Formula):</strong> Let{' '}
        <InlineMath>f</InlineMath> have <InlineMath>p</InlineMath> continuous
        derivatives on <InlineMath>{'[1, n]'}</InlineMath>. Then:
        <MathBlock>
          {`\\sum_{k=1}^{n} f(k) = \\int_1^n f(x)\\,dx + \\frac{f(1) + f(n)}{2} + \\sum_{k=1}^{\\lfloor p/2 \\rfloor} \\frac{B_{2k}}{(2k)!}[f^{(2k-1)}(n) - f^{(2k-1)}(1)] + R_p`}
        </MathBlock>
        where <InlineMath>{'B_{2k}'}</InlineMath> are the Bernoulli numbers and{' '}
        <InlineMath>{'R_p'}</InlineMath> is a remainder term.
      </Callout>

      <h3>Bernoulli Numbers</h3>

      <p>
        The first several Bernoulli numbers are:
      </p>
      <MathBlock>
        {`B_0 = 1, \\quad B_1 = -\\frac{1}{2}, \\quad B_2 = \\frac{1}{6}, \\quad B_4 = -\\frac{1}{30}, \\quad B_6 = \\frac{1}{42}`}
      </MathBlock>
      <p>
        Note that <InlineMath>{'B_{2k+1} = 0'}</InlineMath> for{' '}
        <InlineMath>{'k \\geq 1'}</InlineMath>.
      </p>

      <h3>Simplified Form</h3>

      <p>
        For practical use, the first few terms give:
      </p>
      <MathBlock>
        {`\\sum_{k=1}^{n} f(k) \\approx \\int_1^n f(x)\\,dx + \\frac{f(1) + f(n)}{2} + \\frac{1}{12}[f'(n) - f'(1)] - \\frac{1}{720}[f'''(n) - f'''(1)] + \\cdots`}
      </MathBlock>

      <h3>Example: Harmonic Sum</h3>

      <p>
        Apply the formula to <InlineMath>{'f(x) = 1/x'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\frac{1}{2n} + \\frac{1}{2} - \\frac{1}{12n^2} + \\frac{1}{120n^4} - \\cdots + C`}
      </MathBlock>
      <p>
        The constant <InlineMath>C</InlineMath> is the <strong>Euler-Mascheroni
        constant</strong> <InlineMath>{'\\gamma \\approx 0.5772'}</InlineMath>.
      </p>

      <h3>Stirling's Formula</h3>

      <p>
        The most famous application is the asymptotic expansion of the factorial:
      </p>

      <Callout type="info">
        <strong>Theorem (Stirling's Formula):</strong>
        <MathBlock>
          {`n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n`}
        </MathBlock>
        More precisely:
        <MathBlock>
          {`\\ln(n!) = n\\ln n - n + \\frac{1}{2}\\ln(2\\pi n) + \\frac{1}{12n} - \\frac{1}{360n^3} + \\cdots`}
        </MathBlock>
      </Callout>

      <h3>Derivation Sketch</h3>

      <p>
        Apply the Euler summation formula to <InlineMath>{'f(x) = \\ln x'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\ln(n!) = \\sum_{k=1}^{n} \\ln k = \\int_1^n \\ln x\\,dx + \\frac{\\ln n}{2} + \\cdots`}
      </MathBlock>
      <MathBlock>
        {`= n\\ln n - n + 1 + \\frac{\\ln n}{2} + \\frac{1}{12n} + \\cdots`}
      </MathBlock>

      <p>
        Exponentiating gives Stirling's formula.
      </p>

      <h3>Applications</h3>

      <ul>
        <li><strong>Combinatorics:</strong> Asymptotic formulas for binomial coefficients</li>
        <li><strong>Probability:</strong> Normal approximation to binomial</li>
        <li><strong>Number theory:</strong> Distribution of primes</li>
        <li><strong>Statistical mechanics:</strong> Entropy calculations</li>
      </ul>

      <h3>Looking Back at This Chapter</h3>

      <p>
        This chapter has developed the foundations of numerical analysis:
      </p>
      <ul>
        <li>Polynomial interpolation via Lagrange and Newton formulas</li>
        <li>Error analysis and optimal node selection (Chebyshev)</li>
        <li>Numerical integration via trapezoidal and Simpson's rules</li>
        <li>The Euler summation formula connecting sums and integrals</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The Euler summation formula is a bridge
        between discrete and continuous mathematics. It transforms sums into
        integrals plus correction terms, revealing that numerical integration
        and summation are two sides of the same coin. Stirling's formula—giving
        the asymptotics of the factorial—is perhaps the most elegant application,
        connecting the discrete world of combinatorics to the continuous world
        of calculus through the constant <InlineMath>{'\\sqrt{2\\pi}'}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
