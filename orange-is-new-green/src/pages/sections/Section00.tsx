import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Stay humble and stack sats."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Bitcoin community wisdom
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        The transformative power of Bitcoin as a savings technology is now widely
        acknowledged. No other asset class in history has been able to rival its
        long-term returns, underpinned by the unique combination of Bitcoin's
        <strong className="text-amber-400"> scarcity</strong> and the commitment of
        its holders to <strong className="text-amber-400">long-term accumulation</strong>.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> Based on Theo Mogenet's paper
          "Orange is the New Green," we explore how Bitcoin can serve not just
          as long-term savings, but potentially as a vehicle for short-term
          cash management through innovative financial instruments.
        </p>
      </Callout>

      {/* Section 1: The HODL Mentality */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The HODL Mentality</h2>

      <p className="my-4">
        During a recent interview, legendary investor Stanley Druckenmiller shared
        an insight he gained from Paul Tudor Jones II perfectly illustrating Bitcoin's
        unique holder behavior: when Bitcoin's price plummeted from $17,000 to $3,000,
        an astonishing <strong className="text-amber-400">86% of those who acquired
        it at its peak did not sell</strong>.
      </p>

      <p className="my-4">
        This steadfast "hodl" mentality is vividly illustrated in the "HODL waves"
        chart, a graphical representation of Bitcoin supply categorized by time held.
        The chart demonstrates the gradual reduction in circulating supply as long-term
        holders transfer their coins into cold storage.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">HODL Waves Insight</h4>
        <p className="text-dark-200 text-lg mb-4">
          The gradual movement of Bitcoin from exchanges to cold storage creates
          a natural supply squeeze.
        </p>
        <p className="text-dark-400 text-sm">
          As supply decreases while demand grows, this dynamic explains in part
          Bitcoin's appreciation over time, but also its characteristic volatility.
        </p>
      </div>

      {/* Section 2: Understanding Bitcoin's Appreciation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Understanding Bitcoin's Appreciation</h2>

      <p className="my-4">
        The HODL waves phenomenon explains two seemingly contradictory aspects of Bitcoin:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Long-term Appreciation</h4>
          <p className="text-sm text-dark-300">
            As long-term holders continuously remove supply from circulation,
            new demand must compete for an ever-shrinking available supply,
            driving prices upward over time.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Short-term Volatility</h4>
          <p className="text-sm text-dark-300">
            A significant influx of capital into an asset with fixed supply
            naturally leads to pronounced price swings, as small changes in
            demand have outsized effects on price.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Greatest Savings Vehicle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Greatest Savings Vehicle</h2>

      <p className="my-4">
        This general dynamic is what makes Bitcoin arguably the greatest savings
        vehicle ever invented. The combination of:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Absolute Scarcity</p>
            <p className="text-sm text-dark-400 mt-1">
              21 million coins maximum supply, enforced by mathematics and consensus
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Decreasing Issuance</p>
            <p className="text-sm text-dark-400 mt-1">
              Block rewards halve every ~4 years, continuously reducing new supply
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Committed Holders</p>
            <p className="text-sm text-dark-400 mt-1">
              A unique culture of long-term holding that reduces effective supply
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Global Accessibility</p>
            <p className="text-sm text-dark-400 mt-1">
              Anyone with internet access can participate, expanding the demand base
            </p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Stack sats:</strong> This expression encapsulates the Bitcoin
          community wisdom—continuously accumulate Bitcoin (measured in satoshis,
          the smallest unit) because its superior monetary characteristics almost
          guarantee it will outperform every other commodity in the long run.
        </p>
      </Callout>

      {/* Section 4: The Thesis of This Paper */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Thesis</h2>

      <p className="my-4">
        While Bitcoin excels as long-term savings, this paper proposes something
        more ambitious: a plausible scenario in which Bitcoin absorbs
        <strong className="text-amber-400"> short-term cash balances</strong> as well.
      </p>

      <p className="my-4">
        To be clear, this would be before attaining anything like the status of
        a global unit of account, and despite its seemingly disqualifying volatility
        relative to fiat competition.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Core Proposition</h4>
        <p className="text-dark-200 mb-4">
          By introducing Bitcoin into a flawed incentive structure, and teasing
          out its less-than-obvious properties, a compelling solution emerges—one
          that incentivizes holders of cash balances to actively contribute to
          Bitcoin's adoption.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Bitcoin has demonstrated <strong>unparalleled long-term returns</strong>
              due to its unique scarcity and holder commitment.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>HODL mentality</strong> creates a natural supply squeeze
              that drives appreciation over time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The same dynamics that make Bitcoin excellent for savings also create
              <strong> volatility</strong> that makes it challenging for short-term use.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This course explores how Bitcoin could potentially absorb
              <strong> short-term cash balances</strong> despite this volatility.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
