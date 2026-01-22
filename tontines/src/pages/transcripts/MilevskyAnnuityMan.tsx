import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function MilevskyAnnuityMan() {
  return (
    <TranscriptLayout transcriptId="milevsky-annuity-man">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tontines and annuities both provide lifetime income but through different mechanisms</li>
          <li>Mortality credits make tontines more efficient than self-insurance</li>
          <li>Tontines have variable payments; annuities offer guarantees</li>
          <li>The choice depends on individual risk tolerance</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tontines vs. Traditional Annuities</h3>

      <p className="mb-4">
        Stan Haithcock opens with a fundamental question: why should retirees consider tontines
        when annuities already exist?
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "An annuity says 'we guarantee you X dollars for life, no matter what.' A tontine
          says 'we'll pool your money with others, and you'll share the pot as long as you
          live.' One is a promise from a corporation; the other is math among a group."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Moshe Milevsky</cite>
      </blockquote>

      <Definition title="Key Difference: Who Bears the Risk">
        <p>
          The fundamental distinction:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Annuity:</strong> Insurance company bears longevity risk (and charges for it)</li>
          <li><strong>Tontine:</strong> Members share longevity risk among themselves</li>
        </ul>
        <p className="mt-3">
          This risk transfer explains why annuity payouts are lower—the insurer must maintain
          reserves for members who live longer than expected.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Understanding Mortality Credits</h3>

      <p className="mb-4">
        Milevsky explains the mathematics that make tontines attractive:
      </p>

      <Example title="Mortality Credit Calculation">
        <p className="mb-3">
          Consider a 70-year-old with a 2% annual mortality rate:
        </p>
        <MathBlock>
          {`\\text{Mortality Credit} \\approx \\frac{0.02}{1-0.02} \\approx 2.04\\%`}
        </MathBlock>
        <p className="mt-3">
          This means the pool effectively earns an extra 2% return beyond market returns,
          funded by members who died that year.
        </p>
        <p className="mt-3 text-dark-400">
          At age 85, with a 6% mortality rate, the mortality credit rises to approximately 6.4%.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Variable Payment Question</h3>

      <p className="mb-4">
        Haithcock raises a concern many retirees have:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "But what if people live longer than expected? Won't payments drop?"
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Stan Haithcock</cite>
      </blockquote>

      <p className="mb-4">
        Milevsky's response addresses the volatility concern:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Yes, payments vary. But with a large enough pool—say 1,000 or more members—
          the law of large numbers kicks in. Year-to-year variation becomes tiny.
          You might see 2-3% swings, not the 20-30% some fear."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Moshe Milevsky</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparative Analysis</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Annuity Advantages</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Guaranteed fixed payments</li>
            <li>No payment volatility</li>
            <li>Backed by insurance regulations</li>
            <li>Familiar product structure</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Tontine Advantages</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Higher expected payments</li>
            <li>No insurance company margin</li>
            <li>Transparent fee structure</li>
            <li>Better inflation hedge potential</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Who Should Consider Tontines?</h3>

      <p className="mb-4">
        Milevsky outlines the ideal tontine candidate:
      </p>

      <Callout type="info" title="Ideal Tontine Participant">
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Has other sources of stable income (Social Security, pension)</li>
          <li>Can tolerate some payment variability</li>
          <li>Values higher expected returns over guarantees</li>
          <li>Understands the pool-based structure</li>
          <li>Has limited bequest motive (willing to forfeit on death)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Longevity Pooling Principle</h3>

      <Definition title="Why Pooling Works">
        <p>
          The mathematical principle behind longevity pooling:
        </p>
        <MathBlock>
          {`\\text{Self-Insurance Cost} > \\text{Pooled Insurance Cost}`}
        </MathBlock>
        <p className="mt-3">
          To self-insure against living to 100, you'd need to save for 35+ years of retirement.
          In a pool, you only need to save for the average life expectancy, plus a small buffer
          for variability.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/milevsky-tontine-history"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            The History of Tontines
          </p>
          <p className="text-sm text-dark-500">Milevsky on King William's Tontine</p>
        </a>
        <a
          href="#/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 5: Mortality Credits
          </p>
          <p className="text-sm text-dark-500">Mathematical foundations</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
