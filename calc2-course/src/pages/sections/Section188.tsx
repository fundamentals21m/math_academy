import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section188() {
  return (
    <LessonLayout sectionId={188}>
      <h2>Approximate Integration: The Trapezoidal Rule</h2>

      <p>
        <strong>Numerical integration</strong> (or numerical quadrature)
        approximates definite integrals when exact antiderivatives are unavailable
        or impractical to compute. The simplest approach replaces the integrand
        by an interpolating polynomial.
      </p>

      <h3>The Basic Idea</h3>

      <p>
        To approximate <InlineMath>{'\\int_a^b f(x)\\,dx'}</InlineMath>:
      </p>
      <ol>
        <li>Select interpolation points <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> in <InlineMath>{'[a, b]'}</InlineMath></li>
        <li>Construct the interpolating polynomial <InlineMath>p</InlineMath></li>
        <li>Integrate <InlineMath>p</InlineMath> instead of <InlineMath>f</InlineMath></li>
      </ol>

      <h3>The Trapezoidal Rule (Single Interval)</h3>

      <p>
        Using two points <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
        the linear interpolant gives:
      </p>

      <Callout type="info">
        <strong>Trapezoidal Rule:</strong>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{2}[f(a) + f(b)]`}
        </MathBlock>
      </Callout>

      <p>
        Geometrically, this approximates the area under the curve by a trapezoid
        with vertices at <InlineMath>{'(a, 0)'}</InlineMath>,{' '}
        <InlineMath>{'(a, f(a))'}</InlineMath>, <InlineMath>{'(b, f(b))'}</InlineMath>,{' '}
        <InlineMath>{'(b, 0)'}</InlineMath>.
      </p>

      <h3>Error in the Trapezoidal Rule</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>f</InlineMath> has a continuous
        second derivative on <InlineMath>{'[a, b]'}</InlineMath>, then:
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = \\frac{b - a}{2}[f(a) + f(b)] - \\frac{(b-a)^3}{12}f''(\\xi)`}
        </MathBlock>
        for some <InlineMath>{'\\xi \\in (a, b)'}</InlineMath>.
      </Callout>

      <p>
        The error is <InlineMath>{'O((b-a)^3)'}</InlineMath>, so the trapezoidal
        rule is exact for linear functions.
      </p>

      <h3>The Composite Trapezoidal Rule</h3>

      <p>
        For better accuracy, divide <InlineMath>{'[a, b]'}</InlineMath> into{' '}
        <InlineMath>n</InlineMath> equal subintervals of width{' '}
        <InlineMath>{'h = (b - a)/n'}</InlineMath>:
      </p>

      <Callout type="info">
        <strong>Composite Trapezoidal Rule:</strong>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]`}
        </MathBlock>
        where <InlineMath>{'x_k = a + kh'}</InlineMath>.
      </Callout>

      <h3>Error in the Composite Rule</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For the composite trapezoidal rule:
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = \\frac{h}{2}\\left[f(x_0) + 2\\sum_{k=1}^{n-1} f(x_k) + f(x_n)\\right] - \\frac{(b-a)h^2}{12}f''(\\xi)`}
        </MathBlock>
        for some <InlineMath>{'\\xi \\in (a, b)'}</InlineMath>.
      </Callout>

      <p>
        The error is <InlineMath>{'O(h^2)'}</InlineMath>. Halving the step size
        reduces the error by a factor of 4.
      </p>

      <h3>Example</h3>

      <p>
        Approximate <InlineMath>{'\\int_0^1 e^{-x^2}\\,dx'}</InlineMath> with{' '}
        <InlineMath>{'n = 4'}</InlineMath> (<InlineMath>{'h = 0.25'}</InlineMath>):
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>k</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'x_k'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'f(x_k)'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Weight</th>
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
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>2</td>
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
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>2</td>
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
        {`\\int_0^1 e^{-x^2}\\,dx \\approx \\frac{0.25}{2}(1 + 2(0.9394 + 0.7788 + 0.5698) + 0.3679) \\approx 0.7430`}
      </MathBlock>

      <p>
        The exact value is approximately 0.7468, giving an error of about 0.005.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The trapezoidal rule is the simplest
        numerical integration method—it approximates the integrand by line
        segments. While it has only <InlineMath>{'O(h^2)'}</InlineMath> accuracy,
        its simplicity makes it easy to implement and analyze. More accurate
        methods like Simpson's rule use higher-degree polynomial approximations.
      </Callout>
    </LessonLayout>
  );
}
