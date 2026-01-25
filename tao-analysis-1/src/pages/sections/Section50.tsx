import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <p>
        In elementary calculus courses, you may have encountered the assertion that a positive
        derivative means an increasing function, and a negative derivative means a decreasing
        function. This statement is not completely accurate, but it is pretty close. We now
        give the precise versions of these statements.
      </p>

      <h2>From Monotonicity to Derivatives</h2>

      <p>
        First, let us establish what monotonicity tells us about derivatives.
      </p>

      <Theorem id="10.3.1" title="Proposition: Monotonicity implies non-negative/non-positive derivative">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, let <Math>x_0</Math> be
          a limit point of <Math>X</Math>, and let <Math>f: X \to \mathbb{'{R}'}</Math> be a function.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>f</Math> is monotone increasing and <Math>f</Math> is differentiable
            at <Math>x_0</Math>, then <Math>{String.raw`f'(x_0) \geq 0`}</Math>.
          </li>
          <li>
            If <Math>f</Math> is monotone decreasing and <Math>f</Math> is differentiable
            at <Math>x_0</Math>, then <Math>{String.raw`f'(x_0) \leq 0`}</Math>.
          </li>
        </ul>
        <div className="proof">
          <p>
            We prove the first statement; the second is similar. Suppose <Math>f</Math> is
            monotone increasing and differentiable at <Math>x_0</Math>.
          </p>
          <p className="mt-2">
            For <Math>{String.raw`x > x_0`}</Math> with <Math>{String.raw`x \in X`}</Math>, we have{' '}
            <Math>{String.raw`f(x) \geq f(x_0)`}</Math> (since <Math>f</Math> is monotone increasing),
            so <Math>{String.raw`f(x) - f(x_0) \geq 0`}</Math>. Since <Math>{String.raw`x - x_0 > 0`}</Math>:
          </p>
          <MathBlock>{String.raw`\frac{f(x) - f(x_0)}{x - x_0} \geq 0`}</MathBlock>
          <p className="mt-2">
            Taking the limit as <Math>{String.raw`x \to x_0`}</Math> from the right (through points
            in <Math>X</Math>), we get <Math>{String.raw`f'(x_0) \geq 0`}</Math>.
          </p>
          <p className="mt-2">
            A similar argument using <Math>{String.raw`x < x_0`}</Math> also yields{' '}
            <Math>{String.raw`f'(x_0) \geq 0`}</Math> (in this case both numerator and denominator
            are non-positive, so the ratio is non-negative).
          </p>
        </div>
      </Theorem>

      <Callout type="warning">
        <p>
          We must assume that <Math>f</Math> is differentiable at <Math>x_0</Math>. There exist
          monotone functions which are not always differentiable. For example, the function{' '}
          <Math>f(x) = |x|</Math> is monotone increasing on <Math>[0, \infty)</Math> but the
          full function on <Math>\mathbb{'{R}'}</Math> is not differentiable at 0.
        </p>
      </Callout>

      <h2>A Subtle Point About Strict Monotonicity</h2>

      <p>
        One might naively guess that if <Math>f</Math> were <em>strictly</em> monotone increasing,
        and <Math>f</Math> was differentiable at <Math>x_0</Math>, then the derivative{' '}
        <Math>f'(x_0)</Math> would be <em>strictly positive</em> instead of merely non-negative.
        Unfortunately, this is not always the case.
      </p>

      <Example id="10.3.2" title="Strictly increasing with zero derivative">
        <p>
          Consider <Math>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> defined by <Math>f(x) = x^3</Math>.
          This function is strictly monotone increasing (since <Math>{String.raw`x < y`}</Math> implies{' '}
          <Math>{String.raw`x^3 < y^3`}</Math>).
        </p>
        <p className="mt-2">
          However, <Math>f'(x) = 3x^2</Math>, so <Math>f'(0) = 0</Math>.
        </p>
        <p className="mt-2">
          Thus, a strictly monotone increasing function can have derivative equal to zero at
          some points.
        </p>
      </Example>

      <h2>From Derivatives to Monotonicity</h2>

      <p>
        On the other hand, we do have a converse result: if a function has strictly positive
        derivative everywhere, then it must be strictly monotone increasing.
      </p>

      <Theorem id="10.3.3" title="Proposition: Derivative sign determines monotonicity">
        <p>
          Let <Math>{String.raw`a < b`}</Math>, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
          a differentiable function.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>{String.raw`f'(x) > 0`}</Math> for all <Math>{String.raw`x \in [a, b]`}</Math>,
            then <Math>f</Math> is strictly monotone increasing.
          </li>
          <li>
            If <Math>{String.raw`f'(x) < 0`}</Math> for all <Math>{String.raw`x \in [a, b]`}</Math>,
            then <Math>f</Math> is strictly monotone decreasing.
          </li>
          <li>
            If <Math>f'(x) = 0</Math> for all <Math>{String.raw`x \in [a, b]`}</Math>,
            then <Math>f</Math> is a constant function.
          </li>
        </ul>
        <div className="proof">
          <p>
            We prove the first statement using the mean value theorem.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`x, y \in [a, b]`}</Math> with <Math>{String.raw`x < y`}</Math>.
            By the mean value theorem (Corollary 10.2.9), there exists{' '}
            <Math>{String.raw`c \in (x, y)`}</Math> such that:
          </p>
          <MathBlock>{String.raw`f(y) - f(x) = f'(c)(y - x)`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`f'(c) > 0`}</Math> (by hypothesis) and <Math>{String.raw`y - x > 0`}</Math>,
            we have <Math>{String.raw`f(y) - f(x) > 0`}</Math>, i.e., <Math>{String.raw`f(y) > f(x)`}</Math>.
          </p>
          <p className="mt-2">
            Since this holds for all <Math>{String.raw`x < y`}</Math> in <Math>[a, b]</Math>,{' '}
            <Math>f</Math> is strictly monotone increasing.
          </p>
          <p className="mt-2">
            The proofs for the other two statements are similar.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>The constant function case:</strong> The third statement shows that if a
          function has derivative zero everywhere on an interval, it must be constant. This
          is a key result used throughout calculus. It follows from the mean value theorem:
          if <Math>{String.raw`f(y) - f(x) = f'(c)(y - x) = 0`}</Math> for all <Math>x, y</Math>,
          then <Math>f</Math> is constant.
        </p>
      </Callout>

      <h2>Important Subtlety: Domain Matters</h2>

      <Example id="10.3.4" title="Positive derivative but not strictly increasing">
        <p>
          Consider the subset <Math>{String.raw`X = (-2, -1) \cup (1, 2) \subset \mathbb{R}`}</Math> and
          define <Math>f: X \to \mathbb{'{R}'}</Math> by:
        </p>
        <MathBlock>{String.raw`f(x) = \begin{cases} x + 3 & \text{if } x \in (-2, -1) \\ x & \text{if } x \in (1, 2) \end{cases}`}</MathBlock>
        <p className="mt-2">
          Then <Math>f'(x) = 1 {String.raw`>`} 0</Math> for all <Math>{String.raw`x \in X`}</Math>.
        </p>
        <p className="mt-2">
          However, <Math>f</Math> is <em>not</em> strictly monotone increasing on <Math>X</Math>.
          For example, <Math>{String.raw`-1.5 < 1.5`}</Math> but{' '}
          <Math>f(-1.5) = 1.5 = f(1.5)</Math>.
        </p>
        <p className="mt-2">
          The key difference from Proposition 10.3.3 is that <Math>X</Math> is not an interval -
          it has a "gap" in the middle. The mean value theorem requires the domain to be an
          interval to work.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Beware of disconnected domains:</strong> Proposition 10.3.3 requires the
          domain to be a closed interval <Math>[a, b]</Math>. If the domain is not connected
          (has gaps), positive derivative everywhere does not guarantee strict monotonicity,
          as the example above shows.
        </p>
      </Callout>

      <h2>Summary of the Relationship</h2>

      <p>
        The relationship between monotonicity and derivatives can be summarized as follows:
      </p>

      <Definition id="10.3.5" title="Summary: Monotonicity and derivatives">
        <p>
          For a function <Math>f</Math> differentiable on an interval <Math>[a, b]</Math>:
        </p>
        <table className="mt-3 w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Condition</th>
              <th className="text-left py-2">Conclusion</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2"><Math>f</Math> monotone increasing</td>
              <td className="py-2"><Math>{String.raw`f'(x) \geq 0`}</Math></td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2"><Math>f</Math> monotone decreasing</td>
              <td className="py-2"><Math>{String.raw`f'(x) \leq 0`}</Math></td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2"><Math>{String.raw`f'(x) > 0`}</Math> for all <Math>x</Math></td>
              <td className="py-2"><Math>f</Math> strictly monotone increasing</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2"><Math>{String.raw`f'(x) < 0`}</Math> for all <Math>x</Math></td>
              <td className="py-2"><Math>f</Math> strictly monotone decreasing</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2"><Math>f'(x) = 0</Math> for all <Math>x</Math></td>
              <td className="py-2"><Math>f</Math> is constant</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">
          <strong>Note:</strong> The converses of the first two rows are <em>not</em> true in general.
          Strictly monotone increasing does <em>not</em> imply <Math>{String.raw`f'(x) > 0`}</Math>;
          we can only conclude <Math>{String.raw`f'(x) \geq 0`}</Math>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          <strong>Why the asymmetry?</strong> The mean value theorem gives us a powerful tool
          to go from derivative information to function behavior, but going the other direction
          (from function behavior to derivatives) only gives us inequalities, not strict
          inequalities. This is because the derivative is a <em>limit</em>, and limits can
          be zero even when nearby values are positive.
        </p>
      </Callout>
    </LessonLayout>
  );
}
