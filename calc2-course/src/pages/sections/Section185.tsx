import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section185() {
  return (
    <LessonLayout sectionId={185}>
      <h2>Newton's Interpolation Formula</h2>

      <p>
        While Lagrange's formula is elegant, Newton's formula provides a more
        practical approach that reveals the structure of interpolation for equally
        spaced points and allows efficient addition of new data points.
      </p>

      <h3>Divided Differences</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>divided differences</strong>{' '}
        of a function <InlineMath>f</InlineMath> at points{' '}
        <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> are defined recursively:
        <MathBlock>
          {`f[x_k] = f(x_k)`}
        </MathBlock>
        <MathBlock>
          {`f[x_k, x_{k+1}] = \\frac{f[x_{k+1}] - f[x_k]}{x_{k+1} - x_k}`}
        </MathBlock>
        <MathBlock>
          {`f[x_k, x_{k+1}, \\ldots, x_{k+j}] = \\frac{f[x_{k+1}, \\ldots, x_{k+j}] - f[x_k, \\ldots, x_{k+j-1}]}{x_{k+j} - x_k}`}
        </MathBlock>
      </Callout>

      <h3>Newton's Interpolation Formula</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The polynomial of degree at most{' '}
        <InlineMath>n</InlineMath> interpolating <InlineMath>f</InlineMath> at
        distinct points <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> is:
        <MathBlock>
          {`p(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \\cdots`}
        </MathBlock>
        <MathBlock>
          {`= \\sum_{k=0}^{n} f[x_0, x_1, \\ldots, x_k] \\prod_{j=0}^{k-1}(x - x_j)`}
        </MathBlock>
      </Callout>

      <h3>Advantages of Newton's Formula</h3>

      <ul>
        <li><strong>Incremental:</strong> Adding a new point <InlineMath>{'x_{n+1}'}</InlineMath> only adds one term</li>
        <li><strong>Nested evaluation:</strong> Can be evaluated efficiently using Horner's method</li>
        <li><strong>Reveals structure:</strong> For equally spaced points, patterns emerge</li>
      </ul>

      <h3>The Forward Difference Operator</h3>

      <p>
        For equally spaced points with spacing <InlineMath>h</InlineMath>, we
        introduce the <strong>forward difference operator</strong>:
      </p>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'x_k = x_0 + kh'}</InlineMath>.
        The forward difference operator <InlineMath>{'\\Delta'}</InlineMath> is:
        <MathBlock>
          {`\\Delta f_k = f_{k+1} - f_k`}
        </MathBlock>
        where <InlineMath>{'f_k = f(x_k)'}</InlineMath>. Higher differences are:
        <MathBlock>
          {`\\Delta^n f_k = \\Delta(\\Delta^{n-1} f_k) = \\Delta^{n-1} f_{k+1} - \\Delta^{n-1} f_k`}
        </MathBlock>
      </Callout>

      <h3>Divided Differences and Forward Differences</h3>

      <p>
        For equally spaced points:
      </p>
      <MathBlock>
        {`f[x_0, x_1, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}`}
      </MathBlock>

      <h3>Newton's Forward Difference Formula</h3>

      <p>
        Substituting <InlineMath>{'x = x_0 + sh'}</InlineMath> into Newton's formula:
      </p>

      <Callout type="info">
        <strong>Newton's Forward Difference Formula:</strong>
        <MathBlock>
          {`p(x_0 + sh) = \\sum_{k=0}^{n} \\binom{s}{k} \\Delta^k f_0`}
        </MathBlock>
        where the generalized binomial coefficient is:
        <MathBlock>
          {`\\binom{s}{k} = \\frac{s(s-1)(s-2)\\cdots(s-k+1)}{k!}`}
        </MathBlock>
      </Callout>

      <h3>Example: Difference Table</h3>

      <p>
        For <InlineMath>{'f(x) = x^3'}</InlineMath> at <InlineMath>{'x = 0, 1, 2, 3'}</InlineMath>:
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>x</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>f</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\Delta f'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\Delta^2 f'}</InlineMath></th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'\\Delta^3 f'}</InlineMath></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>6</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>6</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>7</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>12</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>2</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>8</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>19</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>3</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>27</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}></td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: '1rem' }}>
        The third differences are constant (equal to <InlineMath>6</InlineMath>)
        because <InlineMath>{'f(x) = x^3'}</InlineMath> is a polynomial of degree 3.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Newton's formula restructures interpolation
        using divided differences, making the process incremental and revealing
        the role of spacing. For equally spaced points, the forward difference
        operator provides a discrete analog of differentiation, and the formula
        involves binomial coefficients—connecting interpolation to combinatorics.
      </Callout>
    </LessonLayout>
  );
}
