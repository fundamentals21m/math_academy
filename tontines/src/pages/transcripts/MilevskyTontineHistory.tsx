import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function MilevskyTontineHistory() {
  return (
    <TranscriptLayout transcriptId="milevsky-tontine-history">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Tontines originated in 17th century France under Louis XIV</li>
          <li>They were the dominant retirement vehicle for 300 years</li>
          <li>King William's Tontine (1693) was England's first government-backed tontine</li>
          <li>Modern tontines could solve the "decumulation problem" in retirement</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Origins of Tontines</h3>

      <p className="mb-4">
        Professor Milevsky traces the history of tontines back to their inventor:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Lorenzo de Tonti, a Neapolitan banker, pitched the idea to Cardinal Mazarin
          in 1653. It was a brilliant scheme: collect money from subscribers, pay them
          interest, and when someone dies, their share goes to the survivors. The last
          survivor gets everything. Simple, elegant, and incredibly powerful."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Moshe Milevsky</cite>
      </blockquote>

      <Definition title="Original Tontine Structure">
        <p>
          The classic tontine had these key features:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fixed pool of subscribers, each contributing the same amount</li>
          <li>Annual dividend paid from the pool's interest</li>
          <li>Deceased members' shares redistributed to survivors</li>
          <li>Pool terminates when last member dies</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">King William's Tontine</h3>

      <p className="mb-4">
        The discussion focuses on England's first major tontine:
      </p>

      <Example title="The 1693 Million Act Tontine">
        <p className="mb-3">
          King William III needed to fund the war against France. The tontine offered:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            Initial investment of <InlineMath>£100</InlineMath> per share
          </li>
          <li>
            Annual payment starting at 10% (<InlineMath>£10</InlineMath>)
          </li>
          <li>
            Payments increased as members died
          </li>
          <li>
            One survivor, Mary Bostock, lived to receive over <InlineMath>£1,000</InlineMath>/year
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          The final survivor died in 1783, 90 years after the tontine began.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Tontines Were Banned</h3>

      <p className="mb-4">
        Milevsky explains the dark history that led to tontines being outlawed:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The problem wasn't the mathematics—it was human nature. In the 19th century,
          there were cases of murder for tontine inheritance. Insurance companies used
          tontines as speculative gambling schemes. New York State banned them in 1906,
          and the reputation never recovered."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Moshe Milevsky</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mathematics of Mortality Credits</h3>

      <p className="mb-4">
        The core mathematical insight of tontines:
      </p>

      <Definition title="Mortality Credits">
        <p>
          When a tontine member dies, their remaining wealth is redistributed to survivors.
          This creates a "mortality credit" that boosts returns:
        </p>
        <MathBlock>
          {`\\text{Mortality Credit} = \\frac{q_x}{1 - q_x} \\approx q_x \\text{ for small } q_x`}
        </MathBlock>
        <p className="mt-3">
          Where <InlineMath>{`q_x`}</InlineMath> is the probability of death at age <InlineMath>x</InlineMath>.
          At age 65, this might add 1-2% to returns; at age 85, it could be 8-10%.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Applications</h3>

      <p className="mb-4">
        Milevsky argues for a tontine revival:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Traditional Annuity</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Insurance company bears longevity risk</li>
            <li>Guaranteed lifetime income</li>
            <li>Higher capital requirements</li>
            <li>Lower payouts due to reserves</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Modern Tontine</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Members share longevity risk</li>
            <li>Variable but perpetual income</li>
            <li>Minimal capital requirements</li>
            <li>Higher payouts (no reserves)</li>
          </ul>
        </div>
      </div>

      <Callout type="info" title="The Decumulation Problem">
        <p>
          Milevsky identifies a key retirement challenge:
        </p>
        <p className="mt-2">
          "We've gotten good at accumulating wealth for retirement. The 401(k) solved that.
          But how do you turn that lump sum into lifetime income? That's the decumulation
          problem, and tontines are a 400-year-old solution we forgot about."
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/fullmer-tontine-design"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Modern Tontine Design
          </p>
          <p className="text-sm text-dark-500">Richard Fullmer on actuarial fairness</p>
        </a>
        <a
          href="#/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 1: What is a Tontine?
          </p>
          <p className="text-sm text-dark-500">Course introduction to tontines</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
