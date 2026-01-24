import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function HodlingHumanAction() {
  return (
    <TranscriptLayout transcriptId="hodling-human-action">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Human action is unpredictable and based on unique individual circumstances</li>
          <li>AI cannot reliably predict Bitcoiner behavior due to operational security</li>
          <li>HODL&apos;ing defies conventional financial logic that AI models expect</li>
          <li>Institutions cannot truly HODL due to inherent time preference pressures</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Praxeology and Human Unpredictability</h3>

      <p className="mb-4">
        Drawing from Austrian economics, the author argues that human action cannot be
        reliably predicted by any system, including artificial intelligence:
      </p>

      <Definition title="Praxeology">
        <p>
          The study of human action and choice. Key principles:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Action is purposeful behavior aimed at achieving goals</li>
          <li>Each individual&apos;s circumstances are unique</li>
          <li>Preferences are subjective and cannot be measured externally</li>
          <li>Future actions cannot be predicted with certainty</li>
        </ul>
      </Definition>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Human action is based on an individual&apos;s unique set of circumstances and cannot
          be reliably predicted, making AI&apos;s ability to forecast behavior fundamentally limited.&quot;
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">AI&apos;s Limitations with Bitcoiners</h3>

      <p className="mb-4">
        Bitcoiners present a particular challenge for AI prediction systems:
      </p>

      <Example title="Why AI Fails with Bitcoiners">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Operational Security</p>
            <p className="text-sm text-dark-400">Bitcoiners maintain strong opsec and minimal digital footprints</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Training Data Bias</p>
            <p className="text-sm text-dark-400">AI trained on compliant populations creates false confidence</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Contrarian Behavior</p>
            <p className="text-sm text-dark-400">HODL&apos;ing defies the conventional selling behavior AI expects</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HODL&apos;ing as Uniquely Human</h3>

      <p className="mb-4">
        The act of holding Bitcoin through extreme volatility defies conventional financial
        logic and represents behavior that AI struggles to comprehend or replicate:
      </p>

      <Callout type="info" title="The HODL Paradox">
        <p>
          From a traditional finance perspective, HODLing is irrational. Assets should be
          rebalanced, profits taken, losses cut. Yet HODLers persist through 80%+ drawdowns,
          acting on conviction rather than conventional risk management.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Failure to HODL</h3>

      <p className="mb-4">
        Companies, governments, and pension funds possess inherently higher time preference
        than individuals, making true HODLing impossible:
      </p>

      <Definition title="Institutional Time Preference">
        <p>
          Why institutions cannot HODL:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Quarterly reporting creates pressure to realize gains/losses</li>
          <li>Fiduciary duties may require rebalancing</li>
          <li>Political/governance changes disrupt long-term holdings</li>
          <li>Liquidity needs force selling during downturns</li>
        </ul>
      </Definition>

      <Example title="The MicroStrategy Exception">
        <p className="text-dark-300 mb-3">
          MicroStrategy is often cited as an institutional HODLer, but the article argues
          this is an exception that proves the rule:
        </p>
        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
          <p className="font-medium text-indigo-400">Why MSTR Can HODL</p>
          <p className="text-sm text-dark-400">
            MicroStrategy functions as an extension of Michael Saylor - an individual with
            extraordinary conviction and control. Remove Saylor, and the institution would
            face the same pressures as all others.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Resistance to Psychological Operations</h3>

      <p className="mb-4">
        Bitcoin holders demonstrate resistance to persuasion tactics - the inverse of
        populations most susceptible to AI-driven behavioral conditioning:
      </p>

      <Callout type="warning" title="Institutional Implication">
        <p>
          If institutions cannot truly HODL, their Bitcoin strategies must account for
          this limitation. Rather than pretending to be long-term holders, institutions
          should design strategies aligned with their actual time horizons and governance
          constraints.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 5: Portfolio Allocation
          </p>
          <p className="text-sm text-dark-500">Institutional Bitcoin strategies</p>
        </a>
        <a
          href="#/transcript/credit-rating-methodology"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Article: Credit Rating Methodology
          </p>
          <p className="text-sm text-dark-500">S&amp;P&apos;s view on Bitcoin treasury companies</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
