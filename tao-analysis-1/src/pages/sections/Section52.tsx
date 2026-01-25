import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <p>
        Finally, we present versions of a rule you are likely familiar with from elementary
        calculus. L'Hôpital's rule provides a powerful method for evaluating limits of
        indeterminate forms like <Math>0/0</Math>.
      </p>

      <h2>The Basic Version</h2>

      <Theorem id="10.5.1" title="Proposition: L'Hôpital's rule I">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, let{' '}
          <Math>f: X \to \mathbb{'{R}'}</Math> and <Math>g: X \to \mathbb{'{R}'}</Math> be functions,
          and let <Math>x_0</Math> be a limit point of <Math>X</Math>.
        </p>
        <p className="mt-2">
          Suppose that <Math>f(x_0) = g(x_0) = 0</Math>, that <Math>f</Math> and <Math>g</Math> are
          both differentiable at <Math>x_0</Math>, but <Math>{String.raw`g'(x_0) \neq 0`}</Math>.
        </p>
        <p className="mt-2">
          Then there exists a <Math>{String.raw`\delta > 0`}</Math> such that{' '}
          <Math>{String.raw`g(x) \neq 0`}</Math> for all{' '}
          <Math>{String.raw`x \in (X \cap (x_0 - \delta, x_0 + \delta)) - \{x_0\}`}</Math>, and:
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in (X \cap (x_0 - \delta, x_0 + \delta)) - \{x_0\}} \frac{f(x)}{g(x)} = \frac{f'(x_0)}{g'(x_0)}`}</MathBlock>
        <div className="proof">
          <p>
            First, we show that <Math>{String.raw`g(x) \neq 0`}</Math> near <Math>x_0</Math>.
            By Newton's approximation (Proposition 10.1.7), for <Math>x</Math> near <Math>x_0</Math>:
          </p>
          <MathBlock>{String.raw`g(x) = g(x_0) + g'(x_0)(x - x_0) + o(|x - x_0|) = g'(x_0)(x - x_0) + o(|x - x_0|)`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`g'(x_0) \neq 0`}</Math>, for <Math>x</Math> sufficiently close
            to <Math>x_0</Math> (but not equal to it), we have <Math>{String.raw`g(x) \neq 0`}</Math>.
          </p>
          <p className="mt-2">
            Now, for the limit. We have:
          </p>
          <MathBlock>{String.raw`\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{\frac{f(x) - f(x_0)}{x - x_0}}{\frac{g(x) - g(x_0)}{x - x_0}}`}</MathBlock>
          <p className="mt-2">
            (using <Math>f(x_0) = g(x_0) = 0</Math>). Taking the limit as <Math>{String.raw`x \to x_0`}</Math>:
          </p>
          <MathBlock>{String.raw`\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}}{\lim_{x \to x_0} \frac{g(x) - g(x_0)}{x - x_0}} = \frac{f'(x_0)}{g'(x_0)}`}</MathBlock>
          <p>by the definition of derivative and limit laws (since <Math>{String.raw`g'(x_0) \neq 0`}</Math>).</p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          The presence of the <Math>\delta</Math> may seem strange, but is needed because{' '}
          <Math>g(x)</Math> might vanish at some points other than <Math>x_0</Math>. This would
          mean the quotient <Math>{String.raw`\frac{f(x)}{g(x)}`}</Math> is not necessarily defined
          at all points in <Math>{String.raw`X - \{x_0\}`}</Math>.
        </p>
      </Callout>

      <Example id="10.5.2" title="Using L'Hôpital's rule I">
        <p>
          Evaluate <Math>{String.raw`\lim_{x \to 0} \frac{x^2}{x}`}</Math>.
        </p>
        <p className="mt-2">
          Let <Math>f(x) = x^2</Math> and <Math>g(x) = x</Math>. We have <Math>f(0) = g(0) = 0</Math>,
          so this is a <Math>0/0</Math> indeterminate form.
        </p>
        <p className="mt-2">
          We have <Math>f'(x) = 2x</Math> and <Math>g'(x) = 1</Math>, so{' '}
          <Math>f'(0) = 0</Math> and <Math>{String.raw`g'(0) = 1 \neq 0`}</Math>.
        </p>
        <p className="mt-2">
          By L'Hôpital's rule:
        </p>
        <MathBlock>{String.raw`\lim_{x \to 0} \frac{x^2}{x} = \frac{f'(0)}{g'(0)} = \frac{0}{1} = 0`}</MathBlock>
        <p className="mt-2">
          (Of course, this could also be computed directly by simplifying <Math>{String.raw`\frac{x^2}{x} = x`}</Math>.)
        </p>
      </Example>

      <h2>A More Sophisticated Version</h2>

      <p>
        The following version of L'Hôpital's rule is more powerful, as it allows the
        ratio of derivatives to be evaluated via a limit rather than requiring both
        derivatives to exist at the point <Math>x_0</Math>.
      </p>

      <Theorem id="10.5.3" title="Proposition: L'Hôpital's rule II">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> and{' '}
          <Math>{String.raw`g: [a, b] \to \mathbb{R}`}</Math> be functions which are
          differentiable on <Math>[a, b]</Math>.
        </p>
        <p className="mt-2">
          Suppose that <Math>f(a) = g(a) = 0</Math>, that <Math>g'</Math> is non-zero
          on <Math>[a, b]</Math> (i.e., <Math>{String.raw`g'(x) \neq 0`}</Math> for
          all <Math>{String.raw`x \in [a, b]`}</Math>), and that:
        </p>
        <MathBlock>{String.raw`\lim_{x \to a; x \in (a, b]} \frac{f'(x)}{g'(x)} \text{ exists and equals } L`}</MathBlock>
        <p className="mt-2">
          Then <Math>{String.raw`g(x) \neq 0`}</Math> for all <Math>{String.raw`x \in (a, b]`}</Math>, and:
        </p>
        <MathBlock>{String.raw`\lim_{x \to a; x \in (a, b]} \frac{f(x)}{g(x)} = L`}</MathBlock>
        <div className="proof">
          <p>
            <strong>Step 1:</strong> We first show that <Math>{String.raw`g(x) \neq 0`}</Math> for
            all <Math>{String.raw`x \in (a, b]`}</Math>.
          </p>
          <p className="mt-2">
            Suppose for contradiction that <Math>g(x) = 0</Math> for some <Math>{String.raw`x \in (a, b]`}</Math>.
            Since <Math>g(a) = 0</Math> as well, we can apply Rolle's theorem to obtain{' '}
            <Math>g'(y) = 0</Math> for some <Math>{String.raw`a < y < x`}</Math>. But this contradicts
            the hypothesis that <Math>g'</Math> is non-zero on <Math>[a, b]</Math>.
          </p>
          <p className="mt-2">
            <strong>Step 2:</strong> Now we show the limit. By Proposition 9.3.9, it suffices to show:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{f(x_n)}{g(x_n)} = L`}</MathBlock>
          <p>
            for any sequence <Math>{String.raw`(x_n)_{n=1}^{\infty}`}</Math> in <Math>(a, b]</Math> converging to <Math>a</Math>.
          </p>
          <p className="mt-2">
            <strong>Step 3:</strong> For each <Math>x_n</Math>, define <Math>{String.raw`h_n: [a, x_n] \to \mathbb{R}`}</Math> by:
          </p>
          <MathBlock>{String.raw`h_n(x) := f(x)g(x_n) - g(x)f(x_n)`}</MathBlock>
          <p className="mt-2">
            Observe that <Math>h_n</Math> is continuous on <Math>[a, x_n]</Math> and equals 0 at both{' '}
            <Math>a</Math> and <Math>x_n</Math> (since <Math>f(a) = g(a) = 0</Math>).
          </p>
          <p className="mt-2">
            By Rolle's theorem, there exists <Math>{String.raw`y_n \in (a, x_n)`}</Math> such
            that <Math>h_n'(y_n) = 0</Math>, which gives:
          </p>
          <MathBlock>{String.raw`f'(y_n)g(x_n) - g'(y_n)f(x_n) = 0`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`g'(y_n) \neq 0`}</Math> and <Math>{String.raw`g(x_n) \neq 0`}</Math>, we can rearrange:
          </p>
          <MathBlock>{String.raw`\frac{f(x_n)}{g(x_n)} = \frac{f'(y_n)}{g'(y_n)}`}</MathBlock>
          <p className="mt-2">
            <strong>Step 4:</strong> Since <Math>{String.raw`y_n \in (a, x_n)`}</Math> for all <Math>n</Math>,
            and <Math>{String.raw`x_n \to a`}</Math>, by the squeeze test <Math>{String.raw`y_n \to a`}</Math> as well.
          </p>
          <p className="mt-2">
            Therefore:
          </p>
          <MathBlock>{String.raw`\lim_{n \to \infty} \frac{f(x_n)}{g(x_n)} = \lim_{n \to \infty} \frac{f'(y_n)}{g'(y_n)} = L`}</MathBlock>
          <p>as desired.</p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Comparing the two versions:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>L'Hôpital I</strong> requires <Math>f</Math> and <Math>g</Math> to be differentiable
            at <Math>x_0</Math>, and directly uses <Math>{String.raw`f'(x_0)/g'(x_0)`}</Math>.
          </li>
          <li>
            <strong>L'Hôpital II</strong> only requires differentiability near <Math>a</Math>,
            and uses the limit of <Math>{String.raw`f'(x)/g'(x)`}</Math> as <Math>{String.raw`x \to a`}</Math>.
          </li>
        </ul>
        <p className="mt-2">
          The second version is more general and handles cases where the derivatives may not
          exist at the limit point itself.
        </p>
      </Callout>

      <Callout type="note">
        <p>
          Proposition 10.5.2 only considers limits to the right of <Math>a</Math>, but one
          can easily state and prove a similar proposition for limits to the left, or for
          two-sided limits.
        </p>
        <p className="mt-2">
          Speaking informally, the proposition states:
        </p>
        <MathBlock>{String.raw`\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}`}</MathBlock>
        <p className="mt-2">
          though one must ensure all conditions hold (in particular, that <Math>f(a) = g(a) = 0</Math>,
          and that the right-hand limit exists) before applying the rule.
        </p>
      </Callout>

      <h2>Important Cautions</h2>

      <Example id="10.5.4" title="When L'Hôpital's rule fails">
        <p>
          L'Hôpital's rule requires the limit of <Math>{String.raw`\frac{f'(x)}{g'(x)}`}</Math> to exist.
          If this limit does not exist, the rule cannot be applied.
        </p>
        <p className="mt-2">
          Consider <Math>{String.raw`\lim_{x \to 0} \frac{x^2 \sin(1/x)}{x}`}</Math> (where we
          define <Math>f(0) = 0</Math>).
        </p>
        <p className="mt-2">
          This is a <Math>0/0</Math> form. The derivatives are:
        </p>
        <MathBlock>{String.raw`f'(x) = 2x\sin(1/x) - \cos(1/x), \quad g'(x) = 1`}</MathBlock>
        <p className="mt-2">
          The limit <Math>{String.raw`\lim_{x \to 0} f'(x)`}</Math> does not exist (the <Math>\cos(1/x)</Math> term
          oscillates), so L'Hôpital's rule cannot be applied.
        </p>
        <p className="mt-2">
          However, the original limit does exist and equals 0:
        </p>
        <MathBlock>{String.raw`\lim_{x \to 0} \frac{x^2 \sin(1/x)}{x} = \lim_{x \to 0} x \sin(1/x) = 0`}</MathBlock>
        <p className="mt-2">
          (by the squeeze theorem, since <Math>{String.raw`|x \sin(1/x)| \leq |x|`}</Math>).
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Common mistakes with L'Hôpital's rule:</strong>
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            Applying the rule when the form is not indeterminate (<Math>0/0</Math> or <Math>\infty/\infty</Math>).
          </li>
          <li>
            Applying the rule when <Math>{String.raw`\lim \frac{f'(x)}{g'(x)}`}</Math> does not exist.
          </li>
          <li>
            Forgetting to verify that <Math>{String.raw`g'(x) \neq 0`}</Math> near the limit point.
          </li>
          <li>
            Confusing L'Hôpital's rule with the quotient rule for derivatives.
          </li>
        </ol>
      </Callout>

      <h2>Summary</h2>

      <Definition id="10.5.5" title="When to use L'Hôpital's rule">
        <p>
          L'Hôpital's rule can be applied to evaluate <Math>{String.raw`\lim_{x \to x_0} \frac{f(x)}{g(x)}`}</Math> when:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            The limit is an indeterminate form: <Math>f(x_0) = g(x_0) = 0</Math>.
          </li>
          <li>
            Both <Math>f</Math> and <Math>g</Math> are differentiable at or near <Math>x_0</Math>.
          </li>
          <li>
            <Math>{String.raw`g'(x) \neq 0`}</Math> near <Math>x_0</Math> (or <Math>{String.raw`g'(x_0) \neq 0`}</Math> for version I).
          </li>
          <li>
            The limit <Math>{String.raw`\lim_{x \to x_0} \frac{f'(x)}{g'(x)}`}</Math> exists (for version II),
            or <Math>f'(x_0)</Math> and <Math>g'(x_0)</Math> both exist (for version I).
          </li>
        </ol>
        <p className="mt-3">
          When these conditions are met:
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}`}</MathBlock>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Historical note:</strong> L'Hôpital's rule is named after Guillaume de l'Hôpital
          (1661-1704), who published it in the first calculus textbook (1696). However, the rule
          was actually discovered by Johann Bernoulli, who was employed by l'Hôpital to teach
          him calculus and agreed to let l'Hôpital publish his discoveries.
        </p>
      </Callout>
    </LessonLayout>
  );
}
