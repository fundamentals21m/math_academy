import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Utility Theory Primer</h2>

      <p className="mb-4">
        Actuarial fairness ensures you get back what you put in (in expectation). But
        is that the best we can do? Maybe some payout patterns make people happier
        than others, even with the same expected value.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Utility Function</h3>

      <Definition title="Utility Function">
        <p>
          A utility function <InlineMath>u(c)</InlineMath> maps consumption (spending)
          to "happiness" or satisfaction:
        </p>
        <MathBlock>
          {`u: \\mathbb{R}^+ \\to \\mathbb{R}`}
        </MathBlock>
        <p className="mt-2">Key properties:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{"u'(c) > 0"}</InlineMath>: More is better</li>
          <li><InlineMath>{"u''(c) < 0"}</InlineMath>: Diminishing marginal utility</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Diminishing Returns</h3>

      <p className="mb-4">
        The second property is crucial: the first $10,000 matters more than the
        second $10,000, which matters more than the third, and so on.
      </p>

      <Example title="Log Utility">
        <p className="mb-3">
          A common utility function is <InlineMath>{'u(c) = \\ln(c)'}</InlineMath>:
        </p>
        <MathBlock>
          {`u(\\$20,000) = \\ln(20,000) = 9.90`}
        </MathBlock>
        <MathBlock>
          {`u(\\$40,000) = \\ln(40,000) = 10.60`}
        </MathBlock>
        <p className="mt-3">
          Doubling consumption adds only 0.70 "utils". The gain from $0 to $20,000
          would be infinitely more valuable than the gain from $20,000 to $40,000.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implications for Tontine Design</h3>

      <Callout type="info" title="Why Smoothing Matters">
        <p>
          With diminishing marginal utility:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>$50,000/year for 2 years gives MORE utility than</li>
          <li>$10,000 one year + $90,000 the next (same total)</li>
        </ul>
        <p className="mt-2">
          Smooth consumption is preferred to volatile consumption, even with the same
          expected value!
        </p>
      </Callout>

      <p className="mb-4">
        This is why the classic tontine's explosive late-game payouts (800%!) are
        suboptimal. Even if actuarially fair, the volatility hurts utility.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk Aversion</h3>

      <p className="mb-4">
        Diminishing marginal utility implies <strong>risk aversion</strong>: people
        prefer a certain outcome to an uncertain one with the same expected value.
      </p>

      <p className="text-dark-400 italic">
        To find the <em>optimal</em> tontine, we need to maximize expected lifetime
        utility. This requires a specific functional form: power utility. Let's
        develop that next.
      </p>
    </LessonLayout>
  );
}
