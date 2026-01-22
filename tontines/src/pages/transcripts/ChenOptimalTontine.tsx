import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function ChenOptimalTontine() {
  return (
    <TranscriptLayout transcriptId="chen-optimal-tontine">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Utility theory provides a framework for optimal tontine design</li>
          <li>The optimal design balances income security against bequest motives</li>
          <li>Different risk preferences lead to different optimal structures</li>
          <li>Mathematical optimization can determine ideal redistribution rules</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Optimization Framework</h3>

      <p className="mb-4">
        Professors Chen and Rach frame tontine design as an optimization problem:
      </p>

      <Definition title="Utility Maximization">
        <p>
          The optimal tontine maximizes expected lifetime utility:
        </p>
        <MathBlock>
          {`\\max \\; E\\left[\\int_0^T e^{-\\rho t} u(C_t) \\mathbf{1}_{\\{t < \\tau\\}} dt + \\beta \\cdot B(W_\\tau)\\right]`}
        </MathBlock>
        <p className="mt-3">
          Where:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li><InlineMath>{`C_t`}</InlineMath> = consumption at time <InlineMath>t</InlineMath></li>
          <li><InlineMath>{`\\tau`}</InlineMath> = random time of death</li>
          <li><InlineMath>{`\\beta`}</InlineMath> = bequest preference parameter</li>
          <li><InlineMath>{`B(W_\\tau)`}</InlineMath> = bequest utility function</li>
        </ul>
      </Definition>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The fundamental tension in tontine design is between lifetime income and bequest.
          A pure tontine maximizes income but leaves nothing to heirs. The optimal design
          depends on how much people value leaving an inheritance."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— An Chen</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Risk Aversion and Design</h3>

      <p className="mb-4">
        The lecture explores how risk preferences affect optimal structure:
      </p>

      <Example title="CRRA Utility Analysis">
        <p className="mb-3">
          Using constant relative risk aversion (CRRA) utility:
        </p>
        <MathBlock>
          {`u(C) = \\frac{C^{1-\\gamma}}{1-\\gamma}`}
        </MathBlock>
        <p className="mt-3">
          The optimal consumption-wealth ratio depends on:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm mt-2">
          <li><InlineMath>{`\\gamma`}</InlineMath> = coefficient of relative risk aversion</li>
          <li>Mortality rate <InlineMath>{`\\mu`}</InlineMath></li>
          <li>Discount rate <InlineMath>{`\\rho`}</InlineMath></li>
          <li>Investment return <InlineMath>r</InlineMath></li>
        </ul>
        <p className="mt-3 text-dark-400">
          Higher risk aversion favors more guaranteed income structures.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bequest Trade-off</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">High Bequest Motive (<InlineMath>{`\\beta`}</InlineMath> large)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Partial tontine participation</li>
            <li>Keep some wealth outside pool</li>
            <li>Lower mortality credits captured</li>
            <li>Heirs receive inheritance</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Low Bequest Motive (<InlineMath>{`\\beta`}</InlineMath> small)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Full tontine participation</li>
            <li>All wealth in pool</li>
            <li>Maximum mortality credits</li>
            <li>Higher lifetime consumption</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Optimal Redistribution Rules</h3>

      <p className="mb-4">
        Chen and Rach derive conditions for optimal mortality credit distribution:
      </p>

      <Definition title="Fair Value Condition">
        <p>
          The optimal redistribution rule satisfies:
        </p>
        <MathBlock>
          {`\\frac{dS_i}{dD_j} = \\frac{p_j \\cdot a_j}{\\sum_{k \\neq j} p_k \\cdot a_k}`}
        </MathBlock>
        <p className="mt-3">
          Where <InlineMath>{`S_i`}</InlineMath> is member <InlineMath>i</InlineMath>'s share, <InlineMath>{`D_j`}</InlineMath> indicates
          member <InlineMath>j</InlineMath>'s death, <InlineMath>{`p_k`}</InlineMath> is the probability of survival,
          and <InlineMath>{`a_k`}</InlineMath> is the actuarial factor.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dynamic Allocation</h3>

      <p className="mb-4">
        The lecture addresses time-varying optimal participation:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The optimal tontine participation rate isn't constant. Young retirees might
          optimally hold 50% in the tontine, increasing to 80% by age 85. As you age,
          the mortality credits become more valuable and bequest becomes less important."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Manuel Rach</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Welfare Analysis</h3>

      <p className="mb-4">
        Comparing tontines to alternatives:
      </p>

      <Callout type="info" title="Welfare Comparisons">
        <p>
          The research finds that optimally designed tontines provide:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>vs. Self-annuitization:</strong> 15-25% welfare improvement</li>
          <li><strong>vs. Commercial annuities:</strong> 5-10% improvement (due to lower fees)</li>
          <li><strong>vs. Pure drawdown:</strong> 20-40% improvement (longevity protection)</li>
        </ul>
        <p className="mt-2">
          Exact gains depend on risk aversion, bequest motive, and market conditions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Implications</h3>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Design Recommendations</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Flexible Participation</p>
              <p className="text-sm text-dark-400">
                Allow members to adjust tontine allocation over time
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Age-Based Redistribution</p>
              <p className="text-sm text-dark-400">
                Use actuarially fair formulas that account for age differences
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Bequest Option</p>
              <p className="text-sm text-dark-400">
                Offer partial death benefit for those with bequest motives
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/donnelly-pooling"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Pooled Annuities Mathematics
          </p>
          <p className="text-sm text-dark-500">Donnelly on mortality credit mechanics</p>
        </a>
        <a
          href="#/section/12"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 12: Optimal Design Theory
          </p>
          <p className="text-sm text-dark-500">Utility theory foundations</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
