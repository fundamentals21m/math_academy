import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        <p>When drawing the graph of <MathInline>{`y = f(x)`}</MathInline>, analyze the following:</p>
        <ol>
          <li><strong>Domain:</strong> Find all <MathInline>{`x`}</MathInline> for which <MathInline>{`f(x)`}</MathInline> is defined</li>
          <li><strong>Range:</strong> If possible, determine the set of values taken by <MathInline>{`f`}</MathInline></li>
          <li><strong>Intercepts:</strong> Find where the curve crosses the axes</li>
          <li><strong>Symmetry:</strong> Check if <MathInline>{`f`}</MathInline> is even, odd, or periodic</li>
          <li><strong>Asymptotes:</strong> Identify vertical, horizontal, and oblique asymptotes</li>
          <li><strong>First derivative:</strong> Analyze <MathInline>{`f'`}</MathInline> for monotonicity and critical points</li>
          <li><strong>Second derivative:</strong> Analyze <MathInline>{`f''`}</MathInline> for concavity and inflection points</li>
          <li><strong>Special points:</strong> Plot key points (extrema, inflection points, intercepts)</li>
        </ol>
      </Callout>

      <h2>1. Domain and Range</h2>
      <p>
        The <strong>domain</strong> is the set of <MathInline>{`x`}</MathInline> values for which
        <MathInline>{`f(x)`}</MathInline> is defined. The <strong>range</strong> is the set of
        values taken on by <MathInline>{`f`}</MathInline>. Knowledge of both gives us an idea of
        the extent of the curve—it specifies a portion of the <MathInline>{`xy`}</MathInline>-plane
        in which the entire curve must lie.
      </p>

      <h2>2. Intercepts</h2>

      <Callout type="definition" title="Intercepts">
        <p>
          <strong>y-intercept:</strong> The point <MathInline>{`(0, f(0))`}</MathInline>, assuming
          0 is in the domain of <MathInline>{`f`}</MathInline>.
        </p>
        <p>
          <strong>x-intercepts:</strong> Points <MathInline>{`(x, 0)`}</MathInline> where
          <MathInline>{`f(x) = 0`}</MathInline>. These are the <em>roots</em> or <em>zeros</em>
          of <MathInline>{`f`}</MathInline>.
        </p>
        <p>
          <em>Note:</em> Computing x-intercepts may be difficult in practice, and we may
          have to be content with approximate values.
        </p>
      </Callout>

      <h2>3. Symmetry</h2>

      <Callout type="info" title="Types of Symmetry">
        <p>
          <strong>Even function:</strong> <MathInline>{`f(-x) = f(x)`}</MathInline> for all
          <MathInline>{`x`}</MathInline>. The graph is symmetric about the <strong>y-axis</strong>.
        </p>
        <p>
          <strong>Odd function:</strong> <MathInline>{`f(-x) = -f(x)`}</MathInline> for all
          <MathInline>{`x`}</MathInline>. The graph is symmetric about the <strong>origin</strong>.
        </p>
        <p>
          <strong>Periodic function:</strong> <MathInline>{`f(x + T) = f(x)`}</MathInline> for
          some period <MathInline>{`T > 0`}</MathInline>. The graph repeats every
          <MathInline>{`T`}</MathInline> units.
        </p>
      </Callout>

      <h2>4. Asymptotes</h2>

      <Callout type="definition" title="Types of Asymptotes">
        <p>
          <strong>Vertical asymptote:</strong> A vertical line <MathInline>{`x = a`}</MathInline>
          is a vertical asymptote if <MathInline>{`|f(x)| \\to \\infty`}</MathInline> as
          <MathInline>{`x \\to a`}</MathInline> from the right or left.
        </p>
        <p>
          <strong>Horizontal asymptote:</strong> A horizontal line <MathInline>{`y = L`}</MathInline>
          is a horizontal asymptote if <MathInline>{`f(x) \\to L`}</MathInline> as
          <MathInline>{`x \\to +\\infty`}</MathInline> or <MathInline>{`x \\to -\\infty`}</MathInline>.
        </p>
        <p>
          <strong>Oblique (slant) asymptote:</strong> A nonvertical line
          <MathInline>{`y = mx + b`}</MathInline> is an asymptote if
          <MathInline>{`f(x) - (mx + b) \\to 0`}</MathInline> as <MathInline>{`x \\to \\pm\\infty`}</MathInline>.
        </p>
      </Callout>

      <h2>5. First Derivative Analysis</h2>
      <p>
        The sign of <MathInline>{`f'`}</MathInline> determines where the function is increasing
        or decreasing.
      </p>

      <Callout type="info" title="Using f' for Monotonicity">
        <ul>
          <li><MathInline>{`f'(x) > 0`}</MathInline>: <MathInline>{`f`}</MathInline> is <strong>increasing</strong></li>
          <li><MathInline>{`f'(x) < 0`}</MathInline>: <MathInline>{`f`}</MathInline> is <strong>decreasing</strong></li>
          <li><MathInline>{`f'(x) = 0`}</MathInline>: Possible <strong>critical point</strong> (potential extremum)</li>
        </ul>
        <p>
          <strong>Special attention</strong> should be paid to points where the graph has
          horizontal tangents (<MathInline>{`f'(x) = 0`}</MathInline>).
        </p>
      </Callout>

      <h2>6. Second Derivative Analysis</h2>
      <p>
        The sign of <MathInline>{`f''`}</MathInline> determines the concavity of the graph.
      </p>

      <Callout type="info" title="Using f'' for Concavity">
        <ul>
          <li><MathInline>{`f''(x) > 0`}</MathInline>: <MathInline>{`f`}</MathInline> is <strong>concave up</strong> (convex) — graph curves upward like a cup</li>
          <li><MathInline>{`f''(x) < 0`}</MathInline>: <MathInline>{`f`}</MathInline> is <strong>concave down</strong> (concave) — graph curves downward like a cap</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Inflection Point">
        <p>
          A point where the second derivative <strong>changes sign</strong> is called a
          <strong> point of inflection</strong>. At such points, the concavity of the
          graph changes from concave up to concave down, or vice versa.
        </p>
        <p>
          To find inflection points: solve <MathInline>{`f''(x) = 0`}</MathInline> and check
          that <MathInline>{`f''`}</MathInline> actually changes sign.
        </p>
      </Callout>

      <h2>Worked Examples</h2>

      <Callout type="example" title="Example 1: f(x) = x + 1/x">
        <p>
          Sketch the graph of <MathInline>{`f(x) = x + \\dfrac{1}{x}`}</MathInline> for
          <MathInline>{`x \\neq 0`}</MathInline>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain:</strong> All <MathInline>{`x \\neq 0`}</MathInline></p>
        <p><strong>Intercepts:</strong> No y-intercept (0 not in domain). No x-intercepts
           (solving <MathInline>{`x + 1/x = 0`}</MathInline> gives <MathInline>{`x^2 = -1`}</MathInline>,
           which has no real solution).</p>
        <p><strong>Symmetry:</strong> <MathInline>{`f(-x) = -x - 1/x = -f(x)`}</MathInline>, so
           <MathInline>{`f`}</MathInline> is <em>odd</em>. The graph is symmetric about the origin.</p>
        <p><strong>Asymptotes:</strong></p>
        <ul>
          <li>Vertical: <MathInline>{`x = 0`}</MathInline> (y-axis), since <MathInline>{`|f(x)| \\to \\infty`}</MathInline> as <MathInline>{`x \\to 0`}</MathInline></li>
          <li>Oblique: <MathInline>{`y = x`}</MathInline>, since <MathInline>{`f(x) - x = 1/x \\to 0`}</MathInline> as <MathInline>{`x \\to \\pm\\infty`}</MathInline></li>
        </ul>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = 1 - \\frac{1}{x^2}`}</MathBlock>
        <ul>
          <li><MathInline>{`f'(x) > 0`}</MathInline> when <MathInline>{`x^2 > 1`}</MathInline>, i.e., <MathInline>{`|x| > 1`}</MathInline></li>
          <li><MathInline>{`f'(x) < 0`}</MathInline> when <MathInline>{`x^2 < 1`}</MathInline>, i.e., <MathInline>{`|x| < 1`}</MathInline></li>
          <li><MathInline>{`f'(x) = 0`}</MathInline> when <MathInline>{`x = \\pm 1`}</MathInline></li>
        </ul>
        <p>
          <strong>Extrema:</strong> Relative minimum at <MathInline>{`x = 1`}</MathInline> with
          <MathInline>{`f(1) = 2`}</MathInline>. Relative maximum at <MathInline>{`x = -1`}</MathInline>
          with <MathInline>{`f(-1) = -2`}</MathInline>.
        </p>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = \\frac{2}{x^3}`}</MathBlock>
        <ul>
          <li><MathInline>{`f''(x) > 0`}</MathInline> for <MathInline>{`x > 0`}</MathInline> (concave up)</li>
          <li><MathInline>{`f''(x) < 0`}</MathInline> for <MathInline>{`x < 0`}</MathInline> (concave down)</li>
        </ul>
        <p><strong>Behavior:</strong></p>
        <ul>
          <li>Near <MathInline>{`x = 0`}</MathInline>: The term <MathInline>{`1/x`}</MathInline> dominates, so the curve behaves like <MathInline>{`y = 1/x`}</MathInline></li>
          <li>For large <MathInline>{`|x|`}</MathInline>: The term <MathInline>{`x`}</MathInline> dominates, so the curve approaches the line <MathInline>{`y = x`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: f(x) = 1/(x² + 1)">
        <p>
          Sketch the graph of <MathInline>{`f(x) = \\dfrac{1}{x^2 + 1}`}</MathInline>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain:</strong> All real numbers (denominator is always positive)</p>
        <p><strong>Range:</strong> <MathInline>{`(0, 1]`}</MathInline> since <MathInline>{`x^2 + 1 \\geq 1`}</MathInline></p>
        <p><strong>Intercepts:</strong> y-intercept at <MathInline>{`(0, 1)`}</MathInline>. No x-intercepts.</p>
        <p><strong>Symmetry:</strong> <MathInline>{`f(-x) = f(x)`}</MathInline>, so <MathInline>{`f`}</MathInline>
           is <em>even</em>. The graph is symmetric about the y-axis.</p>
        <p><strong>Asymptotes:</strong> Horizontal asymptote <MathInline>{`y = 0`}</MathInline>
           (the x-axis) as <MathInline>{`x \\to \\pm\\infty`}</MathInline></p>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = \\frac{-2x}{(x^2 + 1)^2}`}</MathBlock>
        <ul>
          <li><MathInline>{`f'(x) > 0`}</MathInline> for <MathInline>{`x < 0`}</MathInline> (increasing)</li>
          <li><MathInline>{`f'(x) < 0`}</MathInline> for <MathInline>{`x > 0`}</MathInline> (decreasing)</li>
          <li><MathInline>{`f'(x) = 0`}</MathInline> at <MathInline>{`x = 0`}</MathInline></li>
        </ul>
        <p><strong>Extrema:</strong> Relative (and absolute) maximum at <MathInline>{`x = 0`}</MathInline>
           with <MathInline>{`f(0) = 1`}</MathInline>.</p>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = \\frac{2(3x^2 - 1)}{(x^2 + 1)^3}`}</MathBlock>
        <ul>
          <li><MathInline>{`f''(x) > 0`}</MathInline> when <MathInline>{`3x^2 > 1`}</MathInline>, i.e., <MathInline>{`|x| > 1/\\sqrt{3}`}</MathInline></li>
          <li><MathInline>{`f''(x) < 0`}</MathInline> when <MathInline>{`3x^2 < 1`}</MathInline>, i.e., <MathInline>{`|x| < 1/\\sqrt{3}`}</MathInline></li>
        </ul>
        <p>
          <strong>Inflection points:</strong> At <MathInline>{`x = \\pm 1/\\sqrt{3}`}</MathInline>,
          where the concavity changes.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: f(x) = x³ - 3x">
        <p>
          Sketch the graph of <MathInline>{`f(x) = x^3 - 3x`}</MathInline>.
        </p>
        <p><strong>Analysis:</strong></p>
        <p><strong>Domain and Range:</strong> All real numbers</p>
        <p><strong>Intercepts:</strong></p>
        <ul>
          <li>y-intercept: <MathInline>{`(0, 0)`}</MathInline></li>
          <li>x-intercepts: <MathInline>{`x^3 - 3x = x(x^2 - 3) = 0`}</MathInline> gives <MathInline>{`x = 0, \\pm\\sqrt{3}`}</MathInline></li>
        </ul>
        <p><strong>Symmetry:</strong> <MathInline>{`f(-x) = -f(x)`}</MathInline>, so <MathInline>{`f`}</MathInline>
           is <em>odd</em>.</p>
        <p><strong>First derivative:</strong></p>
        <MathBlock>{`f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)`}</MathBlock>
        <ul>
          <li><MathInline>{`f'(x) > 0`}</MathInline> for <MathInline>{`x < -1`}</MathInline> or <MathInline>{`x > 1`}</MathInline></li>
          <li><MathInline>{`f'(x) < 0`}</MathInline> for <MathInline>{`-1 < x < 1`}</MathInline></li>
        </ul>
        <p><strong>Extrema:</strong></p>
        <ul>
          <li>Local maximum at <MathInline>{`x = -1`}</MathInline>: <MathInline>{`f(-1) = 2`}</MathInline></li>
          <li>Local minimum at <MathInline>{`x = 1`}</MathInline>: <MathInline>{`f(1) = -2`}</MathInline></li>
        </ul>
        <p><strong>Second derivative:</strong></p>
        <MathBlock>{`f''(x) = 6x`}</MathBlock>
        <ul>
          <li><MathInline>{`f''(x) > 0`}</MathInline> for <MathInline>{`x > 0`}</MathInline> (concave up)</li>
          <li><MathInline>{`f''(x) < 0`}</MathInline> for <MathInline>{`x < 0`}</MathInline> (concave down)</li>
        </ul>
        <p><strong>Inflection point:</strong> At <MathInline>{`x = 0`}</MathInline>, where concavity changes.</p>
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
              <td style={{ padding: '8px' }}>Solve <MathInline>{`f'(x) = 0`}</MathInline></td>
              <td style={{ padding: '8px' }}>Possible extrema</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Increasing</td>
              <td style={{ padding: '8px' }}><MathInline>{`f'(x) > 0`}</MathInline></td>
              <td style={{ padding: '8px' }}>Graph rises left to right</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Decreasing</td>
              <td style={{ padding: '8px' }}><MathInline>{`f'(x) < 0`}</MathInline></td>
              <td style={{ padding: '8px' }}>Graph falls left to right</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Concave up</td>
              <td style={{ padding: '8px' }}><MathInline>{`f''(x) > 0`}</MathInline></td>
              <td style={{ padding: '8px' }}>Graph curves upward (∪)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Concave down</td>
              <td style={{ padding: '8px' }}><MathInline>{`f''(x) < 0`}</MathInline></td>
              <td style={{ padding: '8px' }}>Graph curves downward (∩)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Inflection points</td>
              <td style={{ padding: '8px' }}><MathInline>{`f''`}</MathInline> changes sign</td>
              <td style={{ padding: '8px' }}>Concavity changes</td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Common Curve Shapes</h2>

      <Callout type="info" title="Combining f' and f'' Information">
        <ul>
          <li>
            <MathInline>{`f' > 0`}</MathInline> and <MathInline>{`f'' > 0`}</MathInline>:
            Increasing and concave up — rising curve that bends upward
          </li>
          <li>
            <MathInline>{`f' > 0`}</MathInline> and <MathInline>{`f'' < 0`}</MathInline>:
            Increasing and concave down — rising curve that bends downward
          </li>
          <li>
            <MathInline>{`f' < 0`}</MathInline> and <MathInline>{`f'' > 0`}</MathInline>:
            Decreasing and concave up — falling curve that bends upward
          </li>
          <li>
            <MathInline>{`f' < 0`}</MathInline> and <MathInline>{`f'' < 0`}</MathInline>:
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
          <MathInline>{`(0, f(0))`}</MathInline> and solutions of <MathInline>{`f(x) = 0`}</MathInline>.
        </li>
        <li>
          <strong>Symmetry</strong>: Even functions are symmetric about the y-axis;
          odd functions are symmetric about the origin.
        </li>
        <li>
          <strong>Asymptotes</strong> describe the behavior as <MathInline>{`x`}</MathInline>
          approaches certain values or infinity.
        </li>
        <li>
          The <strong>first derivative</strong> <MathInline>{`f'`}</MathInline> reveals
          monotonicity and critical points (potential extrema).
        </li>
        <li>
          The <strong>second derivative</strong> <MathInline>{`f''`}</MathInline> reveals
          concavity and inflection points.
        </li>
        <li>
          <strong>Inflection points</strong> occur where <MathInline>{`f''`}</MathInline>
          changes sign—the graph changes from concave up to concave down or vice versa.
        </li>
      </ul>
    </LessonLayout>
  );
}
