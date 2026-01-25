import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <p>
        The notion of a function <Math>f: X \to \mathbb{'{R}'}</Math> attaining a maximum or
        minimum at a point <Math>x_0 \in X</Math> was defined in Definition 9.6.5. We
        now localize this definition to consider behavior in a neighborhood of a point.
      </p>

      <Definition id="10.2.1" title="Local maxima and minima">
        <p>
          Let <Math>f: X \to \mathbb{'{R}'}</Math> be a function, and let <Math>x_0 \in X</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> attains a <strong>local maximum</strong> at <Math>x_0</Math> iff
          there exists a <Math>{String.raw`\delta > 0`}</Math> such that the restriction{' '}
          <Math>{String.raw`f|_{X \cap (x_0 - \delta, x_0 + \delta)}`}</Math> of <Math>f</Math> to{' '}
          <Math>{String.raw`X \cap (x_0 - \delta, x_0 + \delta)`}</Math> attains a maximum at <Math>x_0</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> attains a <strong>local minimum</strong> at <Math>x_0</Math> iff
          there exists a <Math>{String.raw`\delta > 0`}</Math> such that the restriction{' '}
          <Math>{String.raw`f|_{X \cap (x_0 - \delta, x_0 + \delta)}`}</Math> of <Math>f</Math> to{' '}
          <Math>{String.raw`X \cap (x_0 - \delta, x_0 + \delta)`}</Math> attains a minimum at <Math>x_0</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          If <Math>f</Math> attains a maximum at <Math>x_0</Math>, we sometimes say
          that <Math>f</Math> attains a <strong>global maximum</strong> at <Math>x_0</Math>, to
          distinguish it from local maxima. Note that if <Math>f</Math> attains a global
          maximum at <Math>x_0</Math>, then it certainly also attains a local maximum
          at <Math>x_0</Math>, and similarly for minima.
        </p>
      </Callout>

      <Example id="10.2.3" title="Local but not global minimum">
        <p>
          Let <Math>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> denote the function{' '}
          <Math>f(x) := x^2 - x^4</Math>. This function does not attain a global minimum at 0,
          since for example <Math>{String.raw`f(2) = -12 < 0 = f(0)`}</Math>.
        </p>
        <p className="mt-2">
          However, it does attain a local minimum at 0. If we choose <Math>{String.raw`\delta := 1`}</Math> and
          restrict <Math>f</Math> to the interval <Math>(-1, 1)</Math>, then for all{' '}
          <Math>{String.raw`x \in (-1, 1)`}</Math> we have <Math>{String.raw`x^4 \leq x^2`}</Math> and thus:
        </p>
        <MathBlock>{String.raw`f(x) = x^2 - x^4 \geq 0 = f(0)`}</MathBlock>
        <p>
          So <Math>{String.raw`f|_{(-1,1)}`}</Math> has a local minimum at 0.
        </p>
      </Example>

      <Example id="10.2.4" title="Local extrema on discrete domains">
        <p>
          Let <Math>f: \mathbb{'{Z}'} \to \mathbb{'{R}'}</Math> be the function <Math>f(x) = x</Math>,
          defined on the integers only.
        </p>
        <p className="mt-2">
          Then <Math>f</Math> has no global maximum or global minimum (since the integers
          are unbounded in both directions).
        </p>
        <p className="mt-2">
          However, <Math>f</Math> attains both a local maximum and local minimum at every
          integer <Math>n</Math>. This is because for any <Math>{String.raw`\delta < 1`}</Math>,
          the set <Math>{String.raw`\mathbb{Z} \cap (n - \delta, n + \delta) = \{n\}`}</Math>,
          so the restriction trivially attains both a maximum and minimum at <Math>n</Math>.
        </p>
      </Example>

      <Callout type="note">
        <p>
          If <Math>f: X \to \mathbb{'{R}'}</Math> attains a local maximum at a
          point <Math>x_0</Math> in <Math>X</Math>, and <Math>Y \subset X</Math> is a subset
          of <Math>X</Math> which contains <Math>x_0</Math>, then the restriction{' '}
          <Math>{String.raw`f|_Y: Y \to \mathbb{R}`}</Math> also attains a local maximum at <Math>x_0</Math>.
          Similarly for minima.
        </p>
      </Callout>

      <h2>The Connection to Derivatives</h2>

      <p>
        The connection between local maxima, minima and derivatives is fundamental in calculus.
        Points where the derivative equals zero are called <em>stationary points</em> or
        <em> critical points</em>.
      </p>

      <Theorem id="10.2.6" title="Proposition: Local extrema are stationary">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let{' '}
          <Math>{String.raw`f: (a, b) \to \mathbb{R}`}</Math> be a function.
          If <Math>{String.raw`x_0 \in (a, b)`}</Math>, <Math>f</Math> is differentiable at <Math>x_0</Math>,
          and <Math>f</Math> attains either a local maximum or local minimum at <Math>x_0</Math>,
          then <Math>f'(x_0) = 0</Math>.
        </p>
        <div className="proof">
          <p>
            Suppose <Math>f</Math> attains a local maximum at <Math>x_0</Math>. Then there exists{' '}
            <Math>{String.raw`\delta > 0`}</Math> such that <Math>{String.raw`f(x) \leq f(x_0)`}</Math> for
            all <Math>{String.raw`x \in (x_0 - \delta, x_0 + \delta)`}</Math>.
          </p>
          <p className="mt-2">
            For <Math>{String.raw`x \in (x_0 - \delta, x_0)`}</Math>, we have{' '}
            <Math>{String.raw`x - x_0 < 0`}</Math> and <Math>{String.raw`f(x) - f(x_0) \leq 0`}</Math>, so:
          </p>
          <MathBlock>{String.raw`\frac{f(x) - f(x_0)}{x - x_0} \geq 0`}</MathBlock>
          <p>
            Taking the limit as <Math>{String.raw`x \to x_0^-`}</Math>, we get{' '}
            <Math>{String.raw`f'(x_0) \geq 0`}</Math>.
          </p>
          <p className="mt-2">
            For <Math>{String.raw`x \in (x_0, x_0 + \delta)`}</Math>, we have{' '}
            <Math>{String.raw`x - x_0 > 0`}</Math> and <Math>{String.raw`f(x) - f(x_0) \leq 0`}</Math>, so:
          </p>
          <MathBlock>{String.raw`\frac{f(x) - f(x_0)}{x - x_0} \leq 0`}</MathBlock>
          <p>
            Taking the limit as <Math>{String.raw`x \to x_0^+`}</Math>, we get{' '}
            <Math>{String.raw`f'(x_0) \leq 0`}</Math>.
          </p>
          <p className="mt-2">
            Since <Math>{String.raw`f'(x_0) \geq 0`}</Math> and <Math>{String.raw`f'(x_0) \leq 0`}</Math>,
            we conclude <Math>f'(x_0) = 0</Math>. A similar argument works for local minima.
          </p>
        </div>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Important caveats for Proposition 10.2.6:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The function <Math>f</Math> must be differentiable at <Math>x_0</Math> for this to work.
            For example, <Math>f(x) = |x|</Math> has a global minimum at 0 but is not differentiable there.
          </li>
          <li>
            The domain must be an <em>open</em> interval <Math>(a,b)</Math>. If we use a closed
            interval <Math>[a,b]</Math>, endpoints can be local extrema even when the derivative
            is not zero. For instance, <Math>f(x) = x</Math> on <Math>[1,2]</Math> has a local
            minimum at <Math>x_0 = 1</Math> and maximum at <Math>x_0 = 2</Math>, but <Math>f'(x) = 1 \neq 0</Math>.
          </li>
          <li>
            The converse is false: <Math>f'(x_0) = 0</Math> does not imply <Math>x_0</Math> is
            a local extremum. For example, <Math>f(x) = x^3</Math> has <Math>f'(0) = 0</Math>,
            but 0 is neither a local max nor min.
          </li>
        </ul>
      </Callout>

      <h2>Rolle's Theorem</h2>

      <p>
        By combining Proposition 10.2.6 with the maximum principle (from Section 9.6),
        we obtain the following important result.
      </p>

      <Theorem id="10.2.7" title="Rolle's theorem">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let{' '}
          <Math>{String.raw`g: [a, b] \to \mathbb{R}`}</Math> be a continuous function which is
          differentiable on <Math>(a, b)</Math>. Suppose also that <Math>g(a) = g(b)</Math>.
          Then there exists an <Math>{String.raw`x \in (a, b)`}</Math> such that <Math>g'(x) = 0</Math>.
        </p>
        <div className="proof">
          <p>
            By the maximum principle, the continuous function <Math>g</Math> on the compact
            interval <Math>[a,b]</Math> attains its maximum and minimum somewhere on <Math>[a,b]</Math>.
          </p>
          <p className="mt-2">
            <strong>Case 1:</strong> If both the maximum and minimum occur at the
            endpoints <Math>a</Math> and <Math>b</Math>, then since <Math>g(a) = g(b)</Math>,
            the maximum equals the minimum. This means <Math>g</Math> is constant
            on <Math>[a,b]</Math>, so <Math>g'(x) = 0</Math> for all <Math>{String.raw`x \in (a,b)`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Case 2:</strong> If either the maximum or minimum (or both) occurs at some
            interior point <Math>{String.raw`x \in (a,b)`}</Math>, then <Math>f</Math> attains
            a local extremum there. Since <Math>f</Math> is differentiable at this interior
            point, by Proposition 10.2.6, we have <Math>g'(x) = 0</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          Note that we only assume <Math>g</Math> is differentiable on the <em>open</em> interval{' '}
          <Math>(a, b)</Math>. The theorem also holds if we assume <Math>g</Math> is differentiable
          on the closed interval <Math>[a, b]</Math>, since this is a stronger assumption.
        </p>
      </Callout>

      <h2>The Mean Value Theorem</h2>

      <p>
        Rolle's theorem has an important corollary that is fundamental throughout calculus
        and analysis.
      </p>

      <Theorem id="10.2.9" title="Corollary: Mean value theorem">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a function which is continuous
          on <Math>[a, b]</Math> and differentiable on <Math>(a, b)</Math>.
          Then there exists an <Math>{String.raw`x \in (a, b)`}</Math> such that:
        </p>
        <MathBlock>{String.raw`f'(x) = \frac{f(b) - f(a)}{b - a}`}</MathBlock>
        <div className="proof">
          <p>
            Define the auxiliary function <Math>{String.raw`g: [a,b] \to \mathbb{R}`}</Math> by:
          </p>
          <MathBlock>{String.raw`g(x) := f(x) - \frac{f(b) - f(a)}{b - a}(x - a)`}</MathBlock>
          <p className="mt-2">
            Then <Math>g</Math> is continuous on <Math>[a,b]</Math> and differentiable on <Math>(a,b)</Math>.
            We can verify that:
          </p>
          <MathBlock>{String.raw`g(a) = f(a) \quad \text{and} \quad g(b) = f(b) - (f(b) - f(a)) = f(a)`}</MathBlock>
          <p className="mt-2">
            So <Math>g(a) = g(b)</Math>. By Rolle's theorem, there exists{' '}
            <Math>{String.raw`x \in (a,b)`}</Math> with <Math>g'(x) = 0</Math>.
          </p>
          <p className="mt-2">
            Since <Math>{String.raw`g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}`}</Math>, we conclude:
          </p>
          <MathBlock>{String.raw`f'(x) = \frac{f(b) - f(a)}{b - a}`}</MathBlock>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          <strong>Geometric interpretation:</strong> The mean value theorem says that for a differentiable
          function, there is always some point in the interior where the instantaneous rate of change
          (the derivative) equals the average rate of change (the secant slope) over the interval.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Example id="10.2.10" title="Lipschitz continuity from bounded derivatives">
        <p>
          Let <Math>{String.raw`M > 0`}</Math>, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
          continuous on <Math>[a, b]</Math> and differentiable on <Math>(a, b)</Math>, with{' '}
          <Math>{String.raw`|f'(x)| \leq M`}</Math> for all <Math>{String.raw`x \in (a, b)`}</Math>.
        </p>
        <p className="mt-2">
          For any <Math>{String.raw`x, y \in [a, b]`}</Math>, by the mean value theorem there exists{' '}
          <Math>c</Math> between <Math>x</Math> and <Math>y</Math> such that:
        </p>
        <MathBlock>{String.raw`f(x) - f(y) = f'(c)(x - y)`}</MathBlock>
        <p className="mt-2">
          Taking absolute values and using <Math>{String.raw`|f'(c)| \leq M`}</Math>:
        </p>
        <MathBlock>{String.raw`|f(x) - f(y)| \leq M|x - y|`}</MathBlock>
        <p className="mt-2">
          Functions satisfying this bound are called <strong>Lipschitz continuous</strong> with
          Lipschitz constant <Math>M</Math>. Thus, functions with bounded derivative are Lipschitz continuous.
        </p>
      </Example>

      <Callout type="info">
        <p>
          <strong>Connection to uniform continuity:</strong> If <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> is
          differentiable and <Math>f'</Math> is bounded, then <Math>f</Math> is uniformly continuous.
          This follows because Lipschitz continuity implies uniform continuity (with{' '}
          <Math>{String.raw`\delta = \varepsilon/M`}</Math>).
        </p>
      </Callout>
    </LessonLayout>
  );
}
