import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Toward a Reconstruction of Utility and Welfare Economics</h2>

      <p>
        Welfare economics—the branch of economics that evaluates the social desirability of
        economic arrangements—has long been in a state of confusion. The attempt to construct
        a "scientific" welfare economics that avoids value judgments has led to increasingly
        sterile formalism. A reconstruction is needed, and the Austrian tradition points the way.
      </p>

      <Callout type="info">
        <strong>The Old Welfare Economics:</strong> The original welfare economists, like A. C. Pigou,
        assumed that utility could be measured and compared across individuals. This allowed them
        to make policy recommendations based on maximizing total utility. But the assumption of
        measurable, comparable utility is unjustified.
      </Callout>

      <h3>The Ordinalist Revolution</h3>
      <p>
        The recognition that utility is ordinal, not cardinal, revolutionized welfare economics.
        We can say that Jones prefers A to B, but not that Jones's preference for A is twice as
        strong as his preference for B. And we certainly cannot say that Jones's utility from A
        exceeds Smith's utility from B.
      </p>

      <p>
        This recognition destroyed the foundations of the old welfare economics. If we cannot
        measure utility, we cannot add up utilities across individuals. The goal of "maximizing
        social utility" becomes meaningless because there is no such thing as social utility—only
        the separate utilities of individuals, which cannot be aggregated.
      </p>

      <Callout type="warning">
        <strong>The Problem of Interpersonal Comparisons:</strong> Every policy change helps some
        people and hurts others. To evaluate such changes, we would need to compare the gains of
        some with the losses of others. But such interpersonal comparisons of utility are impossible.
        There is no scientific basis for saying that Jones's gain exceeds Smith's loss.
      </Callout>

      <h3>The Pareto Criterion</h3>
      <p>
        The new welfare economics, associated with Vilfredo Pareto, attempted to salvage welfare
        judgments without interpersonal comparisons. The Pareto criterion holds that a change is
        an improvement if it makes some people better off without making anyone worse off. This
        seems to avoid interpersonal comparisons.
      </p>

      <p>
        But the Pareto criterion is extremely restrictive. Almost any real-world policy change
        creates losers as well as winners. The criterion can endorse very few changes and provides
        no guidance for choosing among Pareto-optimal arrangements—of which there are infinitely
        many, some much more equal than others.
      </p>

      <h3>The Compensation Principle</h3>
      <p>
        Economists like Kaldor and Hicks proposed a compensation principle to extend the Pareto
        criterion. A change is desirable if the winners could compensate the losers and still be
        better off—even if no compensation actually occurs. This hypothetical compensation
        supposedly avoids interpersonal comparisons.
      </p>

      <Callout type="warning">
        <strong>The Failure of Compensation:</strong> The compensation principle fails for several
        reasons. First, hypothetical compensation is ethically irrelevant; if losers are not actually
        compensated, they are still harmed. Second, the principle can lead to contradictions: a
        change may pass the Kaldor-Hicks test, but so may its reversal.
      </Callout>

      <h3>The Austrian Alternative</h3>
      <p>
        The Austrian approach to welfare economics starts from a different foundation: voluntary
        exchange. When two parties engage in voluntary exchange, we can say with confidence that
        both expect to benefit—otherwise they would not trade. Voluntary exchange is the only
        unambiguous welfare improvement.
      </p>

      <p>
        This "demonstrated preference" approach avoids the problems of the mainstream. We do not
        need to measure utilities or make interpersonal comparisons. We simply observe that the
        parties chose to trade, which demonstrates that they preferred trading to not trading.
      </p>

      <h3>The Case Against Intervention</h3>
      <p>
        From the Austrian perspective, government intervention in the market cannot be shown to
        improve welfare. Every intervention benefits some at the expense of others; we cannot
        scientifically compare the gains and losses. And intervention replaces voluntary exchange
        with coercion—we cannot assume that the coerced parties benefit.
      </p>

      <Callout type="success">
        <strong>The Presumption of Liberty:</strong> If welfare economics cannot justify intervention,
        there is a presumption in favor of liberty. Individuals should be free to trade (or not
        trade) as they see fit. The burden of proof falls on those who would restrict freedom,
        and scientific welfare economics cannot meet that burden.
      </Callout>

      <h3>Beyond Efficiency</h3>
      <p>
        The Austrian reconstruction of welfare economics moves beyond the narrow focus on efficiency.
        Efficiency, as we have seen, is a problematic criterion. The real question is not whether
        a particular arrangement is efficient but whether it is just—whether it respects individual
        rights.
      </p>

      <p>
        A free market is not justified primarily because it is efficient (though it tends to be)
        but because it respects the rights of individuals to their property and to trade with
        others. The defense of the market is ultimately a moral defense, not merely an economic one.
      </p>

      <h3>Conclusion: The Limits of Economic Science</h3>
      <p>
        The attempt to construct a value-free welfare economics has failed. Economics can describe
        and explain; it cannot prescribe without importing value judgments. The Austrian contribution
        is to recognize these limits and to ground the case for the market on a firm foundation of
        voluntary exchange and individual rights.
      </p>

      <Callout type="success">
        <strong>The Path Forward:</strong> The reconstruction of welfare economics requires honesty
        about its normative foundations. The economist can show the consequences of various policies,
        but the ultimate evaluation depends on values that lie outside economics. By recognizing
        this, we can achieve a welfare economics that is both intellectually rigorous and practically
        relevant.
      </Callout>
    </LessonLayout>
  );
}
