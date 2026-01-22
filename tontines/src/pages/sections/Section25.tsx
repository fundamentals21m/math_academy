import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Risk Aversion Effects</h2>

      <p className="mb-4">
        Different risk preferences lead to different optimal payout profiles. Understanding
        this helps us see why the natural tontine is such a good compromise.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Low Risk Aversion (γ → 0)</h3>

      <Example title="Risk-Tolerant Investor">
        <p className="mb-3">
          A risk-neutral investor wants to maximize expected wealth, accepting volatility.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimal: Rapidly growing payouts</li>
          <li>Accept variable income year-to-year</li>
          <li>Frontload less, back-load more</li>
        </ul>
        <p className="mt-3 text-dark-400">
          The classic tontine's explosive growth is actually closer to optimal for
          risk-neutral investors!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Moderate Risk Aversion (γ = 1-3)</h3>

      <Example title="Typical Retiree">
        <p className="mb-3">
          Most people fall in this range. They want growth but not too much volatility.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimal: Steady growth, matching mortality decline</li>
          <li>Balance between early and late consumption</li>
          <li>Natural tontine is 97-99.5% efficient</li>
        </ul>
        <p className="mt-3 text-emerald-400">
          The natural tontine is nearly perfect for this group.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">High Risk Aversion (γ → ∞)</h3>

      <Example title="Ultra-Conservative Investor">
        <p className="mb-3">
          Extremely risk-averse investors prioritize stable consumption above all.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Optimal: Flat payouts (constant income)</li>
          <li>No volatility preferred</li>
          <li>Lorenzo Tonti's original design!</li>
        </ul>
        <p className="mt-3 text-amber-400">
          The original 17th-century tontine is actually optimal for extremely
          risk-averse individuals.
        </p>
      </Example>

      <Callout type="note" title="A Surprising Connection">
        <p>
          Lorenzo Tonti designed his tontine in 1653 without knowledge of utility theory.
          Yet his design—equal shares of investment income split among survivors—is
          mathematically optimal for extremely risk-averse investors. Intuition
          anticipated mathematics by 350 years!
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary</h3>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Risk Type</th>
              <th className="pb-2">Optimal Profile</th>
              <th className="pb-2">Natural Fit</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Low (<InlineMath>{`\\gamma`}</InlineMath>→0)</td>
              <td className="py-2">Explosive growth</td>
              <td className="py-2">Good (98%)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Moderate (<InlineMath>{`\\gamma`}</InlineMath>=1-3)</td>
              <td className="py-2">Smooth growth</td>
              <td className="py-2">Excellent (97-99%)</td>
            </tr>
            <tr>
              <td className="py-2">High (<InlineMath>{`\\gamma`}</InlineMath>→∞)</td>
              <td className="py-2">Flat</td>
              <td className="py-2">Good (92%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-400 italic">
        Now that we understand optimal design, let's see how to actually construct
        a natural tontine step by step.
      </p>
    </LessonLayout>
  );
}
