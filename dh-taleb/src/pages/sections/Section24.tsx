import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Binary Options Case Studies</h2>

      <p className="mb-4">
        Real-world binary option trading reveals challenges that theory doesn't fully capture.
        These case studies illustrate the practical difficulties of pricing, hedging, and
        risk managing binary structures.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 1: The Expiration Nightmare</h3>

      <Example title="European Binary at Expiration">
        <p className="mb-3">Situation:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Short $1M cash-or-nothing call struck at 100</li>
          <li>1 hour to expiration, spot at 99.95</li>
          <li>Current position value: ~$450,000 (45% probability ITM)</li>
        </ul>
        <p className="mt-4 mb-3 text-emerald-400 font-bold">The Problem:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Delta is approximately 50,000 shares per tick</li>
          <li>If spot moves to 100.05, owe $1M</li>
          <li>If spot stays at 99.95, owe $0</li>
          <li>Can't hedge—any hedge would cost more than potential loss</li>
        </ul>
        <p className="mt-4 mb-3 text-rose-400 font-bold">Outcome:</p>
        <p className="text-dark-300">
          Spot settled at 100.02. Full $1M payout. The 7-cent move cost $550,000.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 2: One-Touch Barrier Event</h3>

      <Example title="Barrier Touch During Illiquid Period">
        <p className="mb-3">Situation:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Long one-touch up option: Barrier at 150, payout $500K</li>
          <li>Spot at 148, option value ~$350K</li>
          <li>Market closed for holiday weekend</li>
        </ul>
        <p className="mt-4 mb-3 text-emerald-400 font-bold">The Event:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Major news released Saturday</li>
          <li>Overseas markets traded the underlying</li>
          <li>Spot reached 152 on Sunday night in Asia</li>
        </ul>
        <p className="mt-4 mb-3 text-emerald-400 font-bold">The Dispute:</p>
        <p className="text-dark-300">
          Was the barrier touched? The contract referenced the NYSE price, which never
          traded above 148. But economically, the barrier was clearly breached. Legal
          battle ensued.
        </p>
      </Example>

      <Callout type="warning" title="Contract Specifications Matter">
        <p>
          Binary and touch options require precise definitions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Which exchange/price determines barrier breach?</li>
          <li>What hours count for barrier monitoring?</li>
          <li>How is "touch" defined (trade, bid, ask)?</li>
          <li>What happens with corporate actions?</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 3: Double No-Touch Gone Wrong</h3>

      <Example title="Range Breakout">
        <p className="mb-3">Situation:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Sold double no-touch: barriers at 95 and 105</li>
          <li>Premium received: $200K</li>
          <li>Payout if barrier touched: $1M</li>
          <li>6 months to expiry, spot at 100</li>
        </ul>
        <p className="mt-4 mb-3 text-emerald-400 font-bold">The Hedge:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Dynamic delta hedging with vanilla options</li>
          <li>Bought straddle protection at 97 and 103</li>
          <li>Position appeared manageable</li>
        </ul>
        <p className="mt-4 mb-3 text-rose-400 font-bold">What Happened:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Month 2: Flash crash, spot gaps from 99 to 92 overnight</li>
          <li>95 barrier breached during illiquid hours</li>
          <li>Vanilla hedges only partially offset</li>
          <li>Net loss: $600K (collected $200K, paid $800K after hedge gains)</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Case Study 4: Binary Spread Arbitrage</h3>

      <Example title="Mispriced Binary">
        <p className="mb-3">Opportunity Identified:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Binary call (K=100) priced at 45% implied probability</li>
          <li>Vanilla call spread 99-101 implied 50% probability</li>
          <li>Apparent arbitrage: buy binary, sell spread replication</li>
        </ul>
        <p className="mt-4 mb-3 text-emerald-400 font-bold">The Trade:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Buy 100 binary calls at 45</li>
          <li>Sell 200 vanilla 99-101 call spreads at net 50</li>
          <li>Appear to lock in 5% profit</li>
        </ul>
        <p className="mt-4 mb-3 text-rose-400 font-bold">The Problem:</p>
        <p className="text-dark-300">
          The spread replication isn't perfect. If S finishes at exactly 100, the binary
          pays 0 or 100 (unclear), while the spread pays 50. The "arbitrage" has basis
          risk at the critical point.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lessons from Binary Trading</h3>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Discontinuous payoffs can't be perfectly hedged</strong>—accept this reality
        </li>
        <li>
          <strong>Contract details matter enormously</strong>—read the fine print
        </li>
        <li>
          <strong>Gap risk is unhedgeable</strong>—size positions for worst case
        </li>
        <li>
          <strong>"Arbitrages" often have hidden risks</strong>—especially near discontinuities
        </li>
        <li>
          <strong>Near-expiry binaries are pure gambling</strong>—don't pretend otherwise
        </li>
      </ul>

      <Callout type="info" title="Taleb's View">
        <p>
          "Binary options are the clearest example of model failure. The math says you can
          hedge them; reality says you cannot. The gap between theory and practice is filled
          with blown-up trading desks."
        </p>
      </Callout>
    </LessonLayout>
  );
}
