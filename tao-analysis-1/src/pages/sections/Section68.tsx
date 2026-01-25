import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <p>
        Here we give some simple examples of proofs involving the "for all" and
        "there exists" quantifiers. The results themselves are straightforward,
        but you should pay close attention to how the quantifiers are arranged
        and how the proofs are structured.
      </p>

      <h2>Example 1: A Basic ε-δ Statement</h2>

      <Theorem id="A.6.1" title="Proposition: A simple ε-δ statement">
        <p>
          For every <Math>{String.raw`\varepsilon > 0`}</Math> there exists a{' '}
          <Math>{String.raw`\delta > 0`}</Math> such that{' '}
          <Math>{String.raw`2\delta < \varepsilon`}</Math>.
        </p>
        <div className="proof">
          <p>
            Let <Math>{String.raw`\varepsilon > 0`}</Math> be arbitrary. We have
            to show that there exists a <Math>{String.raw`\delta > 0`}</Math>{' '}
            such that <Math>{String.raw`2\delta < \varepsilon`}</Math>.
          </p>
          <p className="mt-2">
            We only need to pick one such <Math>\delta</Math>; choosing{' '}
            <Math>{String.raw`\delta := \varepsilon/3`}</Math> will work, since
            one then has{' '}
            <Math>{String.raw`2\delta = 2\varepsilon/3 < \varepsilon`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Key observations about this proof:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <Math>{String.raw`\varepsilon`}</Math> has to be{' '}
            <strong>arbitrary</strong>, because we are proving something for{' '}
            <em>every</em> <Math>{String.raw`\varepsilon`}</Math>
          </li>
          <li>
            <Math>\delta</Math> can be <strong>chosen as we wish</strong>,
            because we only need to show that <em>there exists</em> a{' '}
            <Math>\delta</Math> with the desired property
          </li>
          <li>
            <Math>\delta</Math> can <strong>depend on</strong>{' '}
            <Math>{String.raw`\varepsilon`}</Math>, because the{' '}
            <Math>\delta</Math>-quantifier is nested inside the{' '}
            <Math>{String.raw`\varepsilon`}</Math>-quantifier
          </li>
        </ul>
      </Callout>

      <h3>What If the Quantifiers Were Reversed?</h3>

      <Example id="A.6.2" title="Reversed quantifiers change the statement">
        <p>
          If the quantifiers were reversed, we would need to prove:
        </p>
        <MathBlock>{String.raw`\text{There exists } \delta > 0 \text{ such that for every } \varepsilon > 0, \, 2\delta < \varepsilon`}</MathBlock>
        <p className="mt-2">
          This statement is <strong>false</strong>! If we must select{' '}
          <Math>\delta</Math> first (before being given{' '}
          <Math>{String.raw`\varepsilon`}</Math>), then there is no way to
          ensure <Math>{String.raw`2\delta < \varepsilon`}</Math> for{' '}
          <em>every</em> <Math>{String.raw`\varepsilon > 0`}</Math>.
        </p>
        <p className="mt-2">
          For instance, if we chose <Math>{String.raw`\delta = 1`}</Math>, then
          the statement fails when{' '}
          <Math>{String.raw`\varepsilon = 1`}</Math> (since{' '}
          <Math>{String.raw`2 \not< 1`}</Math>).
        </p>
      </Example>

      <h2>Example 2: Deferring a Choice</h2>

      <p>
        Normally, when one has to prove a "there exists" statement, one
        proceeds by selecting the variable carefully and then showing the
        desired property holds. However, this sometimes requires a lot of
        foresight.
      </p>

      <Callout type="note">
        <p>
          <strong>A useful technique:</strong> It is legitimate to{' '}
          <em>defer</em> the selection of a variable until later in the
          argument, when it becomes clearer what properties it needs to
          satisfy. The only requirement is that the variable must{' '}
          <strong>not depend on any nested (inner) variables</strong>.
        </p>
      </Callout>

      <Theorem id="A.6.3" title="Proposition: A deferred choice example">
        <p>
          There exists an <Math>{String.raw`\varepsilon > 0`}</Math> such that{' '}
          <Math>{String.raw`\sin(x) > x/2`}</Math> for all{' '}
          <Math>{String.raw`0 < x < \varepsilon`}</Math>.
        </p>
        <div className="proof">
          <p>
            We pick <Math>{String.raw`\varepsilon > 0`}</Math> to be chosen
            later, and let <Math>{String.raw`0 < x < \varepsilon`}</Math>.
          </p>
          <p className="mt-2">
            Since the derivative of <Math>{String.raw`\sin(x)`}</Math> is{' '}
            <Math>{String.raw`\cos(x)`}</Math>, we see from the mean-value
            theorem that:
          </p>
          <MathBlock>{String.raw`\frac{\sin(x)}{x} = \frac{\sin(x) - \sin(0)}{x - 0} = \cos(y)`}</MathBlock>
          <p className="mt-2">
            for some <Math>{String.raw`0 \leq y \leq x`}</Math>. Thus, to ensure
            that <Math>{String.raw`\sin(x) > x/2`}</Math>, it suffices to ensure
            that <Math>{String.raw`\cos(y) > 1/2`}</Math>.
          </p>
          <p className="mt-2">
            To achieve this, it suffices to ensure that{' '}
            <Math>{String.raw`0 \leq y < \pi/3`}</Math> (since the cosine
            function takes the value 1 at 0, takes the value 1/2 at{' '}
            <Math>{String.raw`\pi/3`}</Math>, and is decreasing in between).
          </p>
          <p className="mt-2">
            Since <Math>{String.raw`0 \leq y \leq x`}</Math> and{' '}
            <Math>{String.raw`0 < x < \varepsilon`}</Math>, we have{' '}
            <Math>{String.raw`0 \leq y < \varepsilon`}</Math>. Thus if we pick{' '}
            <Math>{String.raw`\varepsilon := \pi/3`}</Math>, then we have{' '}
            <Math>{String.raw`0 \leq y < \pi/3`}</Math> as desired, and so we
            can ensure that <Math>{String.raw`\sin(x) > x/2`}</Math> for all{' '}
            <Math>{String.raw`0 < x < \varepsilon`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Critical observation:</strong> The value of{' '}
          <Math>{String.raw`\varepsilon`}</Math> that we picked at the end{' '}
          <strong>did not depend</strong> on the nested variables{' '}
          <Math>x</Math> and <Math>y</Math>. This makes the argument
          legitimate.
        </p>
        <p className="mt-2">
          If we had chosen <Math>{String.raw`\varepsilon`}</Math> to depend on{' '}
          <Math>x</Math> or <Math>y</Math>, the argument would{' '}
          <strong>not be valid</strong>, because{' '}
          <Math>{String.raw`\varepsilon`}</Math> is the outer variable and{' '}
          <Math>x</Math>, <Math>y</Math> are nested inside it.
        </p>
      </Callout>

      <h3>Rearranging the Proof</h3>

      <p>
        We can rearrange the proof so that we don't have to postpone anything:
      </p>

      <Theorem id="A.6.4" title="Alternative proof (no deferred choice)">
        <p>
          There exists an <Math>{String.raw`\varepsilon > 0`}</Math> such that{' '}
          <Math>{String.raw`\sin(x) > x/2`}</Math> for all{' '}
          <Math>{String.raw`0 < x < \varepsilon`}</Math>.
        </p>
        <div className="proof">
          <p>
            We choose <Math>{String.raw`\varepsilon := \pi/3`}</Math>; clearly{' '}
            <Math>{String.raw`\varepsilon > 0`}</Math>. Now we have to show that
            for all <Math>{String.raw`0 < x < \pi/3`}</Math>, we have{' '}
            <Math>{String.raw`\sin(x) > x/2`}</Math>.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`0 < x < \pi/3`}</Math> be arbitrary. By the
            mean-value theorem:
          </p>
          <MathBlock>{String.raw`\frac{\sin(x)}{x} = \frac{\sin(x) - \sin(0)}{x - 0} = \cos(y)`}</MathBlock>
          <p className="mt-2">
            for some <Math>{String.raw`0 \leq y \leq x`}</Math>. Since{' '}
            <Math>{String.raw`0 \leq y \leq x`}</Math> and{' '}
            <Math>{String.raw`0 < x < \pi/3`}</Math>, we have{' '}
            <Math>{String.raw`0 \leq y < \pi/3`}</Math>.
          </p>
          <p className="mt-2">
            Thus{' '}
            <Math>{String.raw`\cos(y) > \cos(\pi/3) = 1/2`}</Math>, since{' '}
            <Math>{String.raw`\cos`}</Math> is decreasing on{' '}
            <Math>{String.raw`[0, \pi/3]`}</Math>. Therefore{' '}
            <Math>{String.raw`\sin(x)/x > 1/2`}</Math> and hence{' '}
            <Math>{String.raw`\sin(x) > x/2`}</Math> as desired.
          </p>
        </div>
      </Theorem>

      <h2>General Guidelines for Quantifier Proofs</h2>

      <Definition id="A.6.5" title="Rules for handling quantifiers in proofs">
        <p>
          When writing proofs involving quantifiers:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>For "for all" (∀):</strong> Let the variable be{' '}
            <em>arbitrary</em>. You cannot choose its value.
          </li>
          <li>
            <strong>For "there exists" (∃):</strong> <em>You</em> choose the
            variable. Pick a value that makes the statement work.
          </li>
          <li>
            <strong>Outer before inner:</strong> Variables are handled in order
            from outermost to innermost quantifier.
          </li>
          <li>
            <strong>Inner can depend on outer:</strong> When choosing a
            variable for an inner ∃, you may use the values of all outer
            variables.
          </li>
          <li>
            <strong>Outer cannot depend on inner:</strong> When choosing a
            variable for an outer ∃, you may <em>not</em> use the values of
            inner variables.
          </li>
        </ul>
      </Definition>

      <Example id="A.6.6" title="Dependency structure">
        <p>
          Consider the statement:{' '}
          <Math>{String.raw`\forall \varepsilon > 0, \exists \delta > 0, \forall x: |x| < \delta \Rightarrow |f(x)| < \varepsilon`}</Math>
        </p>
        <p className="mt-2">
          When proving this:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>{String.raw`\varepsilon`}</Math> is given to you (arbitrary)
          </li>
          <li>
            <Math>\delta</Math> is chosen by you, and <strong>may depend on</strong>{' '}
            <Math>{String.raw`\varepsilon`}</Math>
          </li>
          <li>
            <Math>x</Math> is given to you (arbitrary), and{' '}
            <Math>\delta</Math> must <strong>not depend on</strong>{' '}
            <Math>x</Math>
          </li>
        </ul>
      </Example>

      <h2>Common Mistakes to Avoid</h2>

      <Callout type="warning">
        <p>
          <strong>Mistake 1: Choosing an arbitrary variable</strong>
        </p>
        <p className="mt-2">
          When proving "for all <Math>x</Math>...", do not write "choose{' '}
          <Math>x = 5</Math>". Instead, write "let <Math>x</Math> be
          arbitrary".
        </p>
      </Callout>

      <Callout type="warning">
        <p>
          <strong>Mistake 2: Wrong dependency direction</strong>
        </p>
        <p className="mt-2">
          When proving{' '}
          <Math>{String.raw`\exists \delta, \forall x: P(\delta, x)`}</Math>, do
          not let <Math>\delta</Math> depend on <Math>x</Math>. The outer
          variable must be chosen before the inner variable is known.
        </p>
      </Callout>

      <Callout type="warning">
        <p>
          <strong>Mistake 3: Proving the wrong statement</strong>
        </p>
        <p className="mt-2">
          The statements <Math>{String.raw`\forall x \exists y: P(x,y)`}</Math>{' '}
          and <Math>{String.raw`\exists y \forall x: P(x,y)`}</Math> are{' '}
          <em>different</em>. Be careful about which one you are proving.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key principles for proofs with quantifiers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>∀ variables are arbitrary:</strong> You cannot choose them;
            your proof must work for all values
          </li>
          <li>
            <strong>∃ variables are your choice:</strong> Pick values that make
            the statement true
          </li>
          <li>
            <strong>Order matters:</strong> Handle quantifiers from outside to
            inside
          </li>
          <li>
            <strong>Inner depends on outer:</strong> Choices for inner ∃
            variables may use outer variable values
          </li>
          <li>
            <strong>Deferred choice is allowed:</strong> You may postpone
            choosing an ∃ variable, but the final choice must not depend on
            inner variables
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
