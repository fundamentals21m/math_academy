import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function FormanTontinePensions() {
  return (
    <TranscriptLayout transcriptId="forman-tontine-pensions">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tontines could be integrated into defined contribution pension plans</li>
          <li>Historical legal prohibitions are based on outdated fraud concerns</li>
          <li>Modern design eliminates the "last survivor jackpot" problem</li>
          <li>ERISA modifications would enable employer-sponsored tontines</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Legal History</h3>

      <p className="mb-4">
        Professor Forman traces the legal evolution:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "New York banned tontines in 1906, but the ban was aimed at insurance company
          abuses—speculative tontine policies that were essentially gambling. Pure tontines,
          where members pool longevity risk, were collateral damage. The law hasn't kept
          up with modern product design."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jonathan Barry Forman</cite>
      </blockquote>

      <Definition title="The 1906 Armstrong Investigation">
        <p>
          The investigation found that insurance companies had:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Used tontine premiums to fund speculative investments</li>
          <li>Promised unrealistic returns to policyholders</li>
          <li>Delayed payments to maximize forfeitures</li>
          <li>Created products that resembled gambling more than insurance</li>
        </ul>
        <p className="mt-3">
          The result was a blanket ban that also prevented legitimate longevity pooling.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Distinguishing Modern Tontines</h3>

      <p className="mb-4">
        Forman and Sabin argue that modern tontines are fundamentally different:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-red-400 font-bold mb-2">1900s Tontine Insurance</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Winner-take-all at end of term</li>
            <li>Speculative investment strategy</li>
            <li>Long deferral periods (20+ years)</li>
            <li>Opaque fee structures</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Modern Fair Tontines</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Continuous redistribution</li>
            <li>Conservative investment options</li>
            <li>Immediate income payments</li>
            <li>Transparent, regulated fees</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pension Integration Model</h3>

      <p className="mb-4">
        The paper proposes a specific integration approach:
      </p>

      <Example title="401(k) Tontine Option">
        <p className="mb-3">
          At retirement, workers could elect to convert some 401(k) balance to a tontine:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Voluntary election:</strong> Worker chooses percentage to tontine
          </li>
          <li>
            <strong>Age-banded pools:</strong> Members grouped by retirement date
          </li>
          <li>
            <strong>Employer-facilitated:</strong> Plan sponsor manages the pool
          </li>
          <li>
            <strong>PBGC-like backup:</strong> Federal guarantee for minimum payments
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          This leverages existing retirement infrastructure while adding longevity protection.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ERISA Considerations</h3>

      <p className="mb-4">
        Forman addresses the legal framework for employer plans:
      </p>

      <Callout type="warning" title="Current ERISA Barriers">
        <p>
          ERISA's prudent investor rule and anti-forfeiture provisions create challenges:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fiduciary duty unclear for tontine investments</li>
          <li>Death forfeiture may conflict with ERISA Section 203</li>
          <li>Spousal rights under QJSA/QPSA rules need clarification</li>
        </ul>
        <p className="mt-2">
          Statutory changes or DOL guidance could resolve these issues.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Social Security Model</h3>

      <p className="mb-4">
        Forman draws an interesting parallel:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Social Security is essentially a government tontine. Your contributions don't
          go into a personal account—they pay current retirees. When you die, your
          'account' doesn't pass to heirs. It's mortality pooling at national scale.
          If Social Security is legal, why aren't private tontines?"
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jonathan Barry Forman</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Legislative Proposal</h3>

      <Definition title="Proposed Legal Framework">
        <p>
          The paper outlines key legislative elements:
        </p>
        <MathBlock>
          {`\\text{Fair Tontine} = \\text{Longevity Pool} + \\text{Transparent Rules} + \\text{No Jackpot}`}
        </MathBlock>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Define "qualified tontine" with specific requirements</li>
          <li>Exempt from state insurance regulation if qualified</li>
          <li>Allow in ERISA plans with fiduciary safe harbor</li>
          <li>Require disclosure of variability and forfeiture</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/brookings-gateway"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Brookings Policy Discussion
          </p>
          <p className="text-sm text-dark-500">Broader retirement policy context</p>
        </a>
        <a
          href="#/section/25"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 25: Legal Framework
          </p>
          <p className="text-sm text-dark-500">Tontine regulation history</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
