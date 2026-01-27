import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Market Making and Market Using</h2>

      <p className="mb-4">
        Options markets have two fundamental types of participants: <strong>market makers</strong> who
        provide liquidity and <strong>market users</strong> who consume it. Understanding their
        different incentives and constraints is essential for understanding option prices.
      </p>

      <Definition title="Market Maker">
        <p>
          A participant who continuously quotes both bid and ask prices, profiting from the
          spread while remaining approximately delta-neutral. Market makers provide liquidity
          and earn the bid-ask spread as compensation for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Taking on inventory risk</li>
          <li>Providing immediacy to customers</li>
          <li>Managing adverse selection</li>
        </ul>
      </Definition>

      <Definition title="Market User">
        <p>
          A participant who trades options for directional, hedging, or volatility views.
          Market users pay the spread to access liquidity. They include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hedgers protecting underlying positions</li>
          <li>Speculators betting on direction or volatility</li>
          <li>Arbitrageurs exploiting mispricings</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Market Maker's Business Model</h3>

      <p className="mb-4">
        A market maker's P&L comes from three sources:
      </p>

      <MathBlock>
        {`\\text{P\\&L}_{\\text{MM}} = \\text{Spread Revenue} - \\text{Hedging Costs} - \\text{Adverse Selection Losses}`}
      </MathBlock>

      <Example title="Market Making Economics">
        <p className="mb-3">
          A market maker quotes a 100-strike call at $4.80 bid / $5.20 ask (40 cent spread):
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Customer buys 100 calls at $5.20 → MM is short 100 calls</li>
          <li>MM immediately delta-hedges by buying ~5,000 shares</li>
          <li>If volatility matches implied, MM keeps ~$40 per call in spread</li>
          <li>But if realized vol exceeds implied, gamma losses erode the spread</li>
          <li>If an informed trader knew something, the MM loses on direction too</li>
        </ul>
      </Example>

      <Callout type="info" title="The Spread as Compensation">
        <p>
          Market makers don't set spreads arbitrarily. The spread must compensate for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Expected hedging costs (gamma × expected realized vol)</li>
          <li>Adverse selection risk (informed traders)</li>
          <li>Inventory carrying costs</li>
          <li>Capital costs and risk limits</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Asymmetric Information</h3>

      <p className="mb-4">
        One of the market maker's greatest challenges is <strong>adverse selection</strong>—the
        risk that counterparties know something they don't. This creates an information asymmetry
        that widens spreads.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-emerald-400 font-bold mb-3">Signs of Informed Flow</p>
        <ul className="text-sm text-dark-300 space-y-2">
          <li>Unusual size in illiquid options</li>
          <li>Aggressive crossing of the spread</li>
          <li>Concentration in specific strikes or expirations</li>
          <li>Timing around events (earnings, FDA decisions)</li>
          <li>Order flow from known sophisticated counterparties</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Hedger's Dilemma</h3>

      <p className="mb-4">
        Market users face their own trade-offs. A corporate treasurer hedging currency exposure
        must choose:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Hedge fully:</strong> Pay premium and spread, eliminate risk
        </li>
        <li>
          <strong>Hedge partially:</strong> Reduce cost but retain some risk
        </li>
        <li>
          <strong>Structure creatively:</strong> Collars, risk reversals, zero-cost structures
        </li>
        <li>
          <strong>Don't hedge:</strong> Keep premium but bear full risk
        </li>
      </ul>

      <Example title="Zero-Cost Collar">
        <p className="mb-3">
          A hedger owns stock at $100 and wants downside protection without paying premium:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Buy 95-strike put for protection (costs $3)</li>
          <li>Sell 105-strike call to finance (receives $3)</li>
          <li>Net cost: Zero</li>
          <li>Trade-off: Capped upside above $105, protected below $95</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This is "hedging for free" in a sense, but the hedger has sold upside optionality.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Market Maker vs. Market User Psychology</h3>

      <p className="mb-4">
        The two types of participants think about options fundamentally differently:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Market Maker Thinks</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>"What's my gamma exposure?"</li>
            <li>"Am I getting paid enough for vol?"</li>
            <li>"Who's on the other side?"</li>
            <li>"How liquid is my hedge?"</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Market User Thinks</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>"What's my view on direction?"</li>
            <li>"Is vol cheap or expensive?"</li>
            <li>"What's my max loss?"</li>
            <li>"When should I take profit?"</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Taleb's Warning">
        <p>
          "The market maker who thinks like a market user will lose money. The market user
          who thinks like a market maker will miss opportunities. Know your role."
        </p>
        <p className="mt-2">
          Market makers must be disciplined about hedging and neutral about direction. Market
          users must have conviction about their views and accept that they pay for liquidity.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Flow of Risk</h3>

      <p className="mb-4">
        In aggregate, options markets transfer risk from those who want to shed it (hedgers)
        to those willing to bear it (speculators and market makers). The intermediaries—market
        makers—facilitate this transfer and get paid for the service.
      </p>

      <p className="mb-4">
        Understanding this ecosystem is crucial. Option prices aren't determined by models
        alone—they're determined by the supply and demand of risk transfer, mediated by
        participants with different information, constraints, and objectives.
      </p>
    </LessonLayout>
  );
}
