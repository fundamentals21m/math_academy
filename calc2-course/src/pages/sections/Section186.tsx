import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section186() {
  return (
    <LessonLayout sectionId={186}>
      <h2>Factorial Polynomials</h2>

      <p>
        The forward difference operator <InlineMath>{'\\Delta'}</InlineMath> acts
        on polynomials in a way analogous to differentiation. Just as{' '}
        <InlineMath>{'x^n'}</InlineMath> is the natural basis for differentiation,
        <strong> factorial polynomials</strong> are the natural basis for differences.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>falling factorial</strong> (or
        factorial polynomial) is:
        <MathBlock>
          {`x^{(n)} = x(x-1)(x-2)\\cdots(x-n+1) = \\prod_{k=0}^{n-1}(x-k)`}
        </MathBlock>
        with <InlineMath>{'x^{(0)} = 1'}</InlineMath>.
      </Callout>

      <p>Some examples:</p>
      <MathBlock>
        {`x^{(1)} = x, \\quad x^{(2)} = x(x-1), \\quad x^{(3)} = x(x-1)(x-2)`}
      </MathBlock>

      <h3>The Key Property</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The forward difference of a factorial polynomial
        satisfies:
        <MathBlock>
          {`\\Delta x^{(n)} = n \\cdot x^{(n-1)}`}
        </MathBlock>
      </Callout>

      <h3>Proof</h3>
      <MathBlock>
        {`\\Delta x^{(n)} = (x+1)^{(n)} - x^{(n)}`}
      </MathBlock>
      <MathBlock>
        {`= (x+1)x(x-1)\\cdots(x-n+2) - x(x-1)\\cdots(x-n+1)`}
      </MathBlock>
      <MathBlock>
        {`= x(x-1)\\cdots(x-n+2)[(x+1) - (x-n+1)]`}
      </MathBlock>
      <MathBlock>
        {`= n \\cdot x(x-1)\\cdots(x-n+2) = n \\cdot x^{(n-1)}`}
      </MathBlock>

      <h3>Analogy with Differentiation</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Calculus</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Finite Differences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\frac{d}{dx}x^n = nx^{n-1}'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\Delta x^{(n)} = n \\cdot x^{(n-1)}'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\sum x^{(n)} = \\frac{x^{(n+1)}}{n+1}'}</InlineMath></td>
          </tr>
        </tbody>
      </table>

      <h3>Stirling Numbers</h3>

      <p>
        The conversion between ordinary powers and factorial polynomials involves
        the <strong>Stirling numbers</strong>:
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Stirling numbers of the first kind</strong>{' '}
        <InlineMath>{'s(n, k)'}</InlineMath> and <strong>second kind</strong>{' '}
        <InlineMath>{'S(n, k)'}</InlineMath> satisfy:
        <MathBlock>
          {`x^{(n)} = \\sum_{k=0}^{n} s(n, k) x^k`}
        </MathBlock>
        <MathBlock>
          {`x^n = \\sum_{k=0}^{n} S(n, k) x^{(k)}`}
        </MathBlock>
      </Callout>

      <h3>Example: Stirling Numbers</h3>

      <p>Expanding <InlineMath>{'x^{(3)} = x(x-1)(x-2)'}</InlineMath>:</p>
      <MathBlock>
        {`x^{(3)} = x^3 - 3x^2 + 2x`}
      </MathBlock>
      <p>
        So <InlineMath>{'s(3,3) = 1'}</InlineMath>, <InlineMath>{'s(3,2) = -3'}</InlineMath>,{' '}
        <InlineMath>{'s(3,1) = 2'}</InlineMath>, <InlineMath>{'s(3,0) = 0'}</InlineMath>.
      </p>

      <h3>Application: Summation Formulas</h3>

      <p>
        To find <InlineMath>{'\\sum_{k=0}^{n-1} k^2'}</InlineMath>, first express
        <InlineMath>{'k^2'}</InlineMath> in factorial form:
      </p>
      <MathBlock>
        {`k^2 = k^{(2)} + k^{(1)} = k(k-1) + k`}
      </MathBlock>

      <p>Then sum using the anti-difference formula:</p>
      <MathBlock>
        {`\\sum_{k=0}^{n-1} k^2 = \\left[\\frac{k^{(3)}}{3} + \\frac{k^{(2)}}{2}\\right]_0^n = \\frac{n(n-1)(n-2)}{3} + \\frac{n(n-1)}{2}`}
      </MathBlock>
      <MathBlock>
        {`= \\frac{n(n-1)(2n-1)}{6}`}
      </MathBlock>

      <p>
        Adding 1 to the upper limit gives the familiar formula{' '}
        <InlineMath>{'\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Factorial polynomials are to the difference
        operator what ordinary powers are to differentiation. They provide a
        natural basis for discrete calculus, making finite summation as
        straightforward as integration. The Stirling numbers encode the
        transformation between the continuous and discrete worlds.
      </Callout>
    </LessonLayout>
  );
}
