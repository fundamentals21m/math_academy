import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <p>
        The information gathered from the derivative theorems of the previous sections
        provides a powerful toolkit for analyzing and sketching the graphs of functions.
        In this section, we develop a systematic approach to curve sketching.
      </p>

      <h2>Strategy for Curve Sketching</h2>

      <Callout type="info" title="Step-by-Step Approach">
        <p>When drawing the graph of <InlineMath>{`y = f(x)`}</InlineMath>, analyze the following:</p>
        <ol>
          <li><strong>Domain:</strong> Find all <InlineMath>{`x`}</InlineMath> for which <InlineMath>{`f(x)`}</InlineMath> is defined</li>
          <li><strong>Range:</strong> If possible, determine the set of values taken by <InlineMath>{`f`}</InlineMath></li>
          <li><strong>Intercepts:</strong> Find where the curve crosses the axes</li>
          <li><strong>Symmetry:</strong> Check if <InlineMath>{`f`}</InlineMath> is even, odd, or periodic</li>
          <li><strong>Asymptotes:</strong> Identify vertical, horizontal, and oblique asymptotes</li>
          <li><strong>First derivative:</strong> Analyze <InlineMath>{`f'`}</InlineMath> for monotonicity and critical points</li>
          <li><strong>Second derivative:</strong> Analyze <InlineMath>{`f''`}</InlineMath> for concavity and inflection points</li>
          <li><strong>Special points:</strong> Plot key points (extrema, inflection points, intercepts)</li>
        </ol>
      </Callout>

      <h2>1. Domain and Range</h2>
      <p>
        The <strong>domain</strong> is the set of <InlineMath>{`x`}</InlineMath> values for which
        <InlineMath>{`f(x)`}</InlineMath> is defined. The <strong>range</strong> is the set of
        values taken on by <InlineMath>{`f`}</InlineMath>. Knowledge of both gives us an idea of
        the extent of the curve—it specifies a portion of the <InlineMath>{`xy`}</InlineMath>-plane
        in which the entire curve must lie.
      </p>

      <h2>2. Intercepts</h2>

      <Callout type="definition" title="Intercepts">
        <p>
          <strong>y-intercept:</strong> The point <InlineMath>{`(0, f(0))`}</InlineMath>, assuming
          0 is in the domain of <InlineMath>{`f`}</InlineMath>.
        </p>
        <p>
          <strong>x-intercepts:</strong> Points <InlineMath>{`(x, 0)`}</InlineMath> where
          <InlineMath>{`f(x) = 0`}</InlineMath>. These are the <em>roots</em> or <em>zeros</em>
          of <InlineMath>{`f`}</InlineMath>.
        </p>
        <p>
          <em>Note:</em> Computing x-intercepts may be difficult in practice, and we may
          have to be content with approximate values.
        </p>
      </Callout>

      <h2>3. Symmetry</h2>

      <Callout type="info" title="Types of Symmetry">
        <p>
          <strong>Even function:</strong> <InlineMath>{`f(-x) = f(x)`}</InlineMath> for all
          <InlineMath>{`x`}</InlineMath>. The graph is symmetric about the <strong>y-axis</strong>.
        </p>
        <p>
          <strong>Odd function:</strong> <InlineMath>{`f(-x) = -f(x)`}</InlineMath> for all
          <InlineMath>{`x`}</InlineMath>. The graph is symmetric about the <strong>origin</strong>.
        </p>
        <p>
          <strong>Periodic function:</strong> <InlineMath>{`f(x + T) = f(x)`}</InlineMath> for
          some period <InlineMath>{`T > 0`}</InlineMath>. The graph repeats every
          <InlineMath>{`T`}</InlineMath> units.
        </p>
      </Callout>

      <h2>4. Asymptotes</h2>

      <Callout type="definition" title="Types of Asymptotes">
        <p>
          <strong>Vertical asymptote:</strong> A vertical line <InlineMath>{`x = a`}</InlineMath>
          is a vertical asymptote if <InlineMath>{`|f(x)| \\to \\infty`}</InlineMath> as
          <InlineMath>{`x \\to a`}</InlineMath> from the right or left.
        </p>
        <p>
          <strong>Horizontal asymptote:</strong> A horizontal line <InlineMath>{`y = L`}</InlineMath>
          is a horizontal asymptote if <InlineMath>{`f(x) \\to L`}</InlineMath> as
          <InlineMath>{`x \\to +\\infty`}</InlineMath> or <InlineMath>{`x \\to -\\infty`}</InlineMath>.
        </p>
        <p>
          <strong>Oblique (slant) asymptote:</strong> A nonvertical line
          <InlineMath>{`y = mx + b`}</InlineMath> is an asymptote if
          <InlineMath>{`f(x) - (mx + b) \\to 0`}</InlineMath> as <InlineMath>{`x \\to \\pm\\infty`}</InlineMath>.
        </p>
      </Callout>

      <h2>5. First Derivative Analysis</h2>
      <p>
        The sign of <InlineMath>{`f'`}</InlineMath> determines where the function is increasing
        or decreasing.
      </p>

      <Callout type="info" title="Using f' for Monotonicity">
        <ul>
          <li><InlineMath>{`f'(x) > 0`}</InlineMath>: <InlineMath>{`f`}</InlineMath> is <strong>increasing</strong></li>
          <li><InlineMath>{`f'(x) < 0`}</InlineMath>: <InlineMath>{`f`}</InlineMath> is <strong>decreasing</strong></li>
          <li><InlineMath>{`f'(x) = 0`}</InlineMath>: Possible <strong>critical point</strong> (potential extremum)</li>
        </ul>
        <p>
          <strong>Special attention</strong> should be paid to points where the graph has
          horizontal tangents (<InlineMath>{`f'(x) = 0`}</InlineMath>).
        </p>
      </Callout>

      <h2>6. Second Derivative Analysis</h2>
      <p>
        The sign of <InlineMath>{`f''`}</InlineMath> determines the concavity of the graph.
      </p>

      <Callout type="info" title="Using f'' for Concavity">
        <ul>
          <li><InlineMath>{`f''(x) > 0`}</InlineMath>: <InlineMath>{`f`}</InlineMath> is <strong>concave up</strong> (convex) — graph curves upward like a cup</li>
          <li><InlineMath>{`f''(x) < 0`}</InlineMath>: <InlineMath>{`f`}</InlineMath> is <strong>concave down</strong> (concave) — graph curves downward like a cap</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Inflection Point">
        <p>
          A point where the second derivative <strong>changes sign</strong> is called a
          <strong> point of inflection</strong>. At such points, the concavity of the
          graph changes from concave up to concave down, or vice versa.
        </p>
        <p>
          To find inflection points: solve <InlineMath>{`f''(x) = 0`}</InlineMath> and check
          that <InlineMath>{`f''`}</InlineMath> actually changes sign.
        </p>
      </Callout>

      <h2>Worked Examples</h2>

      <Callout type="example" title="Example 1: f(x) = x + 1/x">
        <p>
          Sketch the graph of <InlineMath>{`f(x) = x + \\dfrac{1}{x}`}</InlineMath> for
          <InlineMath>{`x \\neq 0`}</InlineMath>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain:</strong> All <InlineMath>{`x \\neq 0`}</InlineMath></p>
        <p><strong>Intercepts:</strong> No y-intercept (0 not in domain). No x-intercepts
           (solving <InlineMath>{`x + 1/x = 0`}</InlineMath> gives <InlineMath>{`x^2 = -1`}</InlineMath>,
           which has no real solution).</p>
        <p><strong>Symmetry:</strong> <InlineMath>{`f(-x) = -x - 1/x = -f(x)`}</InlineMath>, so
           <InlineMath>{`f`}</InlineMath> is <em>odd</em>. The graph is symmetric about the origin.</p>
        <p><strong>Asymptotes:</strong></p>
        <ul>
          <li>Vertical: <InlineMath>{`x = 0`}</InlineMath> (y-axis), since <InlineMath>{`|f(x)| \\to \\infty`}</InlineMath> as <InlineMath>{`x \\to 0`}</InlineMath></li>
          <li>Oblique: <InlineMath>{`y = x`}</InlineMath>, since <InlineMath>{`f(x) - x = 1/x \\to 0`}</InlineMath> as <InlineMath>{`x \\to \\pm\\infty`}</InlineMath></li>
        </ul>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = 1 - \\frac{1}{x^2}`}</MathBlock>
        <ul>
          <li><InlineMath>{`f'(x) > 0`}</InlineMath> when <InlineMath>{`x^2 > 1`}</InlineMath>, i.e., <InlineMath>{`|x| > 1`}</InlineMath></li>
          <li><InlineMath>{`f'(x) < 0`}</InlineMath> when <InlineMath>{`x^2 < 1`}</InlineMath>, i.e., <InlineMath>{`|x| < 1`}</InlineMath></li>
          <li><InlineMath>{`f'(x) = 0`}</InlineMath> when <InlineMath>{`x = \\pm 1`}</InlineMath></li>
        </ul>
        <p>
          <strong>Extrema:</strong> Relative minimum at <InlineMath>{`x = 1`}</InlineMath> with
          <InlineMath>{`f(1) = 2`}</InlineMath>. Relative maximum at <InlineMath>{`x = -1`}</InlineMath>
          with <InlineMath>{`f(-1) = -2`}</InlineMath>.
        </p>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = \\frac{2}{x^3}`}</MathBlock>
        <ul>
          <li><InlineMath>{`f''(x) > 0`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath> (concave up)</li>
          <li><InlineMath>{`f''(x) < 0`}</InlineMath> for <InlineMath>{`x < 0`}</InlineMath> (concave down)</li>
        </ul>
        <p><strong>Behavior:</strong></p>
        <ul>
          <li>Near <InlineMath>{`x = 0`}</InlineMath>: The term <InlineMath>{`1/x`}</InlineMath> dominates, so the curve behaves like <InlineMath>{`y = 1/x`}</InlineMath></li>
          <li>For large <InlineMath>{`|x|`}</InlineMath>: The term <InlineMath>{`x`}</InlineMath> dominates, so the curve approaches the line <InlineMath>{`y = x`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: f(x) = 1/(x² + 1)">
        <p>
          Sketch the graph of <InlineMath>{`f(x) = \\dfrac{1}{x^2 + 1}`}</InlineMath>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain:</strong> All real numbers (denominator is always positive)</p>
        <p><strong>Range:</strong> <InlineMath>{`(0, 1]`}</InlineMath> since <InlineMath>{`x^2 + 1 \\geq 1`}</InlineMath></p>
        <p><strong>Intercepts:</strong> y-intercept at <InlineMath>{`(0, 1)`}</InlineMath>. No x-intercepts.</p>
        <p><strong>Symmetry:</strong> <InlineMath>{`f(-x) = f(x)`}</InlineMath>, so <InlineMath>{`f`}</InlineMath>
           is <em>even</em>. The graph is symmetric about the y-axis.</p>
        <p><strong>Asymptotes:</strong> Horizontal asymptote <InlineMath>{`y = 0`}</InlineMath>
           (the x-axis) as <InlineMath>{`x \\to \\pm\\infty`}</InlineMath></p>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = \\frac{-2x}{(x^2 + 1)^2}`}</MathBlock>
        <ul>
          <li><InlineMath>{`f'(x) > 0`}</InlineMath> for <InlineMath>{`x < 0`}</InlineMath> (increasing)</li>
          <li><InlineMath>{`f'(x) < 0`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath> (decreasing)</li>
          <li><InlineMath>{`f'(x) = 0`}</InlineMath> at <InlineMath>{`x = 0`}</InlineMath></li>
        </ul>
        <p><strong>Extrema:</strong> Relative (and absolute) maximum at <InlineMath>{`x = 0`}</InlineMath>
           with <InlineMath>{`f(0) = 1`}</InlineMath>.</p>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = \\frac{2(3x^2 - 1)}{(x^2 + 1)^3}`}</MathBlock>
        <ul>
          <li><InlineMath>{`f''(x) > 0`}</InlineMath> when <InlineMath>{`3x^2 > 1`}</InlineMath>, i.e., <InlineMath>{`|x| > 1/\\sqrt{3}`}</InlineMath></li>
          <li><InlineMath>{`f''(x) < 0`}</InlineMath> when <InlineMath>{`3x^2 < 1`}</InlineMath>, i.e., <InlineMath>{`|x| < 1/\\sqrt{3}`}</InlineMath></li>
        </ul>
        <p>
          <strong>Inflection points:</strong> At <InlineMath>{`x = \\pm 1/\\sqrt{3}`}</InlineMath>,
          where the concavity changes.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: f(x) = x³ - 3x">
        <p>
          Sketch the graph of <InlineMath>{`f(x) = x^3 - 3x`}</InlineMath>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain and Range:</strong> All real numbers</p>
        <p><strong>Intercepts:</strong></p>
        <ul>
          <li>y-intercept: <InlineMath>{`(0, 0)`}</InlineMath></li>
          <li>x-intercepts: <InlineMath>{`x^3 - 3x = x(x^2 - 3) = 0`}</InlineMath> gives <InlineMath>{`x = 0, \\pm\\sqrt{3}`}</InlineMath></li>
        </ul>
        <p><strong>Symmetry:</strong> <InlineMath>{`f(-x) = -f(x)`}</InlineMath>, so <InlineMath>{`f`}</InlineMath>
           is <em>odd</em>.</p>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)`}</MathBlock>
        <ul>
          <li><InlineMath>{`f'(x) > 0`}</InlineMath> for <InlineMath>{`x < -1`}</InlineMath> or <InlineMath>{`x > 1`}</InlineMath></li>
          <li><InlineMath>{`f'(x) < 0`}</InlineMath> for <InlineMath>{`-1 < x < 1`}</InlineMath></li>
        </ul>
        <p><strong>Extrema:</strong></p>
        <ul>
          <li>Local maximum at <InlineMath>{`x = -1`}</InlineMath>: <InlineMath>{`f(-1) = 2`}</InlineMath></li>
          <li>Local minimum at <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`f(1) = -2`}</InlineMath></li>
        </ul>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = 6x`}</MathBlock>
        <ul>
          <li><InlineMath>{`f''(x) > 0`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath> (concave up)</li>
          <li><InlineMath>{`f''(x) < 0`}</InlineMath> for <InlineMath>{`x < 0`}</InlineMath> (concave down)</li>
        </ul>
        <p><strong>Inflection point:</strong> At <InlineMath>{`x = 0`}</InlineMath>, where concavity changes.</p>
      </Callout>

      <h2>Summary Table</h2>

      <Callout type="info" title="Quick Reference">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #666', padding: '8px', textAlign: 'left' }}>Feature</th>
              <th style={{ borderBottom: '1px solid #666', padding: '8px', textAlign: 'left' }}>How to Find</th>
              <th style={{ borderBottom: '1px solid #666', padding: '8px', textAlign: 'left' }}>What it Tells You</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>Critical points</td>
              <td style={{ padding: '8px' }}>Solve <InlineMath>{`f'(x) = 0`}</InlineMath></td>
              <td style={{ padding: '8px' }}>Possible extrema</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Increasing</td>
              <td style={{ padding: '8px' }}><InlineMath>{`f'(x) > 0`}</InlineMath></td>
              <td style={{ padding: '8px' }}>Graph rises left to right</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Decreasing</td>
              <td style={{ padding: '8px' }}><InlineMath>{`f'(x) < 0`}</InlineMath></td>
              <td style={{ padding: '8px' }}>Graph falls left to right</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Concave up</td>
              <td style={{ padding: '8px' }}><InlineMath>{`f''(x) > 0`}</InlineMath></td>
              <td style={{ padding: '8px' }}>Graph curves upward (∪)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Concave down</td>
              <td style={{ padding: '8px' }}><InlineMath>{`f''(x) < 0`}</InlineMath></td>
              <td style={{ padding: '8px' }}>Graph curves downward (∩)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Inflection points</td>
              <td style={{ padding: '8px' }}><InlineMath>{`f''`}</InlineMath> changes sign</td>
              <td style={{ padding: '8px' }}>Concavity changes</td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Common Curve Shapes</h2>

      <Callout type="info" title="Combining f' and f'' Information">
        <ul>
          <li>
            <InlineMath>{`f' > 0`}</InlineMath> and <InlineMath>{`f'' > 0`}</InlineMath>:
            Increasing and concave up — rising curve that bends upward
          </li>
          <li>
            <InlineMath>{`f' > 0`}</InlineMath> and <InlineMath>{`f'' < 0`}</InlineMath>:
            Increasing and concave down — rising curve that bends downward
          </li>
          <li>
            <InlineMath>{`f' < 0`}</InlineMath> and <InlineMath>{`f'' > 0`}</InlineMath>:
            Decreasing and concave up — falling curve that bends upward
          </li>
          <li>
            <InlineMath>{`f' < 0`}</InlineMath> and <InlineMath>{`f'' < 0`}</InlineMath>:
            Decreasing and concave down — falling curve that bends downward
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Domain and range</strong> tell us where the curve exists.
        </li>
        <li>
          <strong>Intercepts</strong> are where the curve crosses the axes:
          <InlineMath>{`(0, f(0))`}</InlineMath> and solutions of <InlineMath>{`f(x) = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Symmetry</strong>: Even functions are symmetric about the y-axis;
          odd functions are symmetric about the origin.
        </li>
        <li>
          <strong>Asymptotes</strong> describe the behavior as <InlineMath>{`x`}</InlineMath>
          approaches certain values or infinity.
        </li>
        <li>
          The <strong>first derivative</strong> <InlineMath>{`f'`}</InlineMath> reveals
          monotonicity and critical points (potential extrema).
        </li>
        <li>
          The <strong>second derivative</strong> <InlineMath>{`f''`}</InlineMath> reveals
          concavity and inflection points.
        </li>
        <li>
          <strong>Inflection points</strong> occur where <InlineMath>{`f''`}</InlineMath>
          changes sign—the graph changes from concave up to concave down or vice versa.
        </li>
      </ul>
    </LessonLayout>
  );
}
