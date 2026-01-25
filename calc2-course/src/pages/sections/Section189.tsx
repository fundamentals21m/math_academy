import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section189() {
  return (
    <LessonLayout sectionId={189}>
      <h2>Simpson's Rule</h2>

      <p>
        <strong>Simpson's rule</strong> uses quadratic interpolation instead of
        linear, achieving significantly better accuracy with the same number of
        function evaluations.
      </p>

      <h3>Derivation</h3>

      <p>
        Consider an interval <InlineMath>{'[-h, h]'}</InlineMath> with three points
        at <InlineMath>{'x = -h, 0, h'}</InlineMath>. The quadratic interpolating
        polynomial passing through{' '}
        <InlineMath>{'(-h, f(-h))'}</InlineMath>, <InlineMath>{'(0, f(0))'}</InlineMath>,{' '}
        <InlineMath>{'(h, f(h))'}</InlineMath> can be integrated exactly.
      </p>

      <Callout type="info">
        <strong>Simpson's Rule:</strong>
        <MathBlock>
          {`\\int_{-h}^{h} f(x)\\,dx \\approx \\frac{h}{3}[f(-h) + 4f(0) + f(h)]`}
        </MathBlock>
        Or equivalently, on <InlineMath>{'[a, b]'}</InlineMath> with midpoint{' '}
        <InlineMath>{'m = (a+b)/2'}</InlineMath>:
        <MathBlock>
          {`\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{6}[f(a) + 4f(m) + f(b)]`}
        </MathBlock>
      </Callout>

      <h3>Error in Simpson's Rule</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>f</InlineMath> has four
        continuous derivatives on <InlineMath>{'[a, b]'}</InlineMath>, then:
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = \\frac{b-a}{6}[f(a) + 4f(m) + f(b)] - \\frac{(b-a)^5}{2880}f^{(4)}(\\xi)`}
        </MathBlock>
        for some <InlineMath>{'\\xi \\in (a, b)'}</InlineMath>.
      </Callout>

      <p>
        Remarkably, Simpson's rule—based on quadratic interpolation—is exact for
        cubics as well! The error term involves{' '}
        <InlineMath>{'f^{(4)}'}</InlineMath>, not <InlineMath>{"f'''"}</InlineMath>.
      </p>

      <h3>The Composite Simpson's Rule</h3>

      <p>
        Divide <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>n</InlineMath>{' '}
        subintervals (<InlineMath>n</InlineMath> must be even), with{' '}
        <InlineMath>{'h = (b-a)/n'}</InlineMath>:
      </p>

      <Callout type="info">
        <strong>Composite Simpson's Rule:</strong>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx \\approx \\frac{h}{3}[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 4f(x_{n-1}) + f(x_n)]`}
        </MathBlock>
        The pattern of coefficients is: <InlineMath>{'1, 4, 2, 4, 2, 4, \\ldots, 2, 4, 1'}</InlineMath>.
      </Callout>

      <h3>Error in the Composite Rule</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For the composite Simpson's rule with{' '}
        <InlineMath>n</InlineMath> subintervals:
        <MathBlock>
          {`\\text{Error} = -\\frac{(b-a)h^4}{180}f^{(4)}(\\xi) = O(h^4)`}
        </MathBlock>
      </Callout>

      <p>
        The error is <InlineMath>{'O(h^4)'}</InlineMath>, compared to{' '}
        <InlineMath>{'O(h^2)'}</InlineMath> for the trapezoidal rule. Halving the
        step size reduces the error by a factor of 16.
      </p>

      <h3>Example</h3>

      <p>
        Approximate <InlineMath>{'\\int_0^1 e^{-x^2}\\,dx'}</InlineMath> with{' '}
        <InlineMath>{'n = 4'}</InlineMath>:
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>k</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'x_k'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'f(x_k)'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Coefficient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1.0000</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.25</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.9394</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>4</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>2</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.5</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.7788</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>2</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>3</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.75</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.5698</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>4</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>4</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.3679</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
          </tr>
        </tbody>
      </table>

      <MathBlock>
        {`\\int_0^1 e^{-x^2}\\,dx \\approx \\frac{0.25}{3}[1 + 4(0.9394) + 2(0.7788) + 4(0.5698) + 0.3679] \\approx 0.7469`}
      </MathBlock>

      <p>
        The exact value is approximately 0.7468—Simpson's rule achieves four
        decimal places with only 5 function evaluations!
      </p>

      <h3>Comparison</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Method</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Order</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Exact for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Trapezoidal</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'O(h^2)'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>degree ≤ 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Simpson's</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'O(h^4)'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>degree ≤ 3</td>
          </tr>
        </tbody>
      </table>

      <Callout type="success">
        <strong>Key Insight:</strong> Simpson's rule achieves fourth-order
        accuracy while only using quadratic interpolation—a bonus degree of
        accuracy due to the symmetry of the interval. This makes it the most
        popular simple integration rule: easy to implement, yet remarkably
        accurate for smooth functions.
      </Callout>
    </LessonLayout>
  );
}
