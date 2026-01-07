import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// NQDC vs 401(k) comparison
const planComparison = [
  { feature: 'Contribution Limits', nqdc: 'No limits', qualified: '$23,000 + catch-up' },
  { feature: 'ERISA Protection', nqdc: 'None - unsecured creditor', qualified: 'Full protection' },
  { feature: 'Investment Options', nqdc: 'Company discretion', qualified: 'Regulated options' },
  { feature: 'Taxation', nqdc: 'Deferred until distribution', qualified: 'Deferred (Traditional) or tax-free growth (Roth)' },
  { feature: 'Bitcoin Eligibility', nqdc: 'Yes - if company offers', qualified: 'Rarely - regulatory barriers' },
];

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Holding a bitcoin treasury and using it in lieu of ETFs is a superior strategy
        that eliminates the counterparty credit risk entirely."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        Deferred compensation is one of the most powerful tools for executives and highly
        compensated employees to gain bitcoin exposure through their employers. This chapter
        explores how companies can use <strong className="text-orange-400">Non-Qualified Deferred
        Compensation (NQDC)</strong> plans to offer bitcoin benefits.
      </p>

      {/* What is NQDC */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What is Non-Qualified Deferred Compensation?</h2>

      <p className="my-4">
        Non-Qualified Deferred Compensation plans allow highly compensated employees to defer
        a portion of their compensation to a future date. Unlike 401(k) plans, NQDC plans
        are not subject to ERISA regulations and have <strong className="text-orange-400">no
        contribution limits</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">No Contribution Limits</h4>
          <p className="text-sm text-dark-300">
            Executives can defer unlimited amounts, making NQDC ideal for significant
            bitcoin accumulation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Tax Deferral</h4>
          <p className="text-sm text-dark-300">
            Taxes are deferred until distribution, allowing bitcoin gains to compound
            without annual tax drag.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Company Discretion</h4>
          <p className="text-sm text-dark-300">
            Companies have broad discretion over investment options - they can offer
            bitcoin when 401(k) plans cannot.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Golden Handcuffs</h4>
          <p className="text-sm text-dark-300">
            Deferred amounts typically vest over time, creating retention incentives
            for key employees.
          </p>
        </Card>
      </CardGrid>

      {/* NQDC vs 401(k) */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">NQDC vs. Qualified Plans</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Feature</th>
              <th className="px-4 py-3 text-left text-orange-400">NQDC</th>
              <th className="px-4 py-3 text-left text-orange-400">401(k)/Pension</th>
            </tr>
          </thead>
          <tbody>
            {planComparison.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.feature}</td>
                <td className="px-4 py-3 text-dark-300">{item.nqdc}</td>
                <td className="px-4 py-3 text-dark-400">{item.qualified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <p>
          <strong>The ERISA Tradeoff:</strong> NQDC plans are not protected by ERISA.
          Participants are unsecured creditors of the company - if the company goes
          bankrupt, they may lose their deferred compensation. This is why it's called
          "riding the wave" - you're tied to the company's fate.
        </p>
      </Callout>

      {/* The Bitcoin Opportunity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bitcoin Opportunity in NQDC</h2>

      <p className="my-4">
        The key insight is that NQDC plans can offer investment options that qualified plans
        cannot. This creates a unique opportunity for bitcoin exposure that would otherwise
        be unavailable through employer-sponsored retirement plans.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Why NQDC is Perfect for Bitcoin</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>1. Long Time Horizon:</strong> Executives typically defer for 10-20+
            years, aligning with bitcoin's optimal holding period.
          </p>
          <p className="text-dark-200">
            <strong>2. Tax-Deferred Growth:</strong> Bitcoin's volatility becomes less
            relevant when gains compound tax-free for decades.
          </p>
          <p className="text-dark-200">
            <strong>3. No Contribution Limits:</strong> High earners can allocate
            significant amounts to bitcoin exposure.
          </p>
          <p className="text-dark-200">
            <strong>4. Company Alignment:</strong> Creates shared interest between
            company and executive in bitcoin's success.
          </p>
        </div>
      </div>

      {/* Implementation Options */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Implementation Options</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Option 1: Bitcoin ETF</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Use IBIT, FBTC, or similar ETFs</li>
            <li>• Easiest to implement</li>
            <li>• Standard custody through ETF provider</li>
            <li>• Counterparty risk from ETF/custodian</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">Option 2: Direct Treasury</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Company holds actual bitcoin</li>
            <li>• Eliminates ETF counterparty risk</li>
            <li>• Requires custody infrastructure</li>
            <li>• Superior long-term solution</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The Superior Strategy:</strong> Holding a bitcoin treasury and using it
          in lieu of ETFs eliminates counterparty credit risk entirely. It removes all
          risk that anyone other than the company involved in the chain of custody will
          cause a failure leading to complete loss of value.
        </p>
      </Callout>

      {/* The Hedging Challenge */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Hedging Challenge</h2>

      <p className="my-4">
        When a company offers bitcoin in its NQDC plan, it may need to hedge the exposure.
        If an executive defers $1 million into a bitcoin option and bitcoin triples, the
        company owes $3 million - they need to have actually bought the bitcoin.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">ETF Due Diligence Requirements</h4>
        <p className="text-dark-200 mb-4">
          It may be that none of the available ETFs would satisfy robust due diligence.
          A golden opportunity exists for someone to create an ETF that would exclusively
          be used for hedging bitcoin exposure, optimizing for:
        </p>
        <ul className="text-dark-300 space-y-2">
          <li>1. Delivering price exposure as closely as possible</li>
          <li>2. Reducing custodial risk to an absolute minimum</li>
          <li>3. Providing complete transparency and ongoing proof of digital signatures</li>
        </ul>
      </div>

      {/* The Phase Approach */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Recommended Implementation Phases</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
            <div>
              <h4 className="font-semibold text-dark-200">Phase 1: ETF-Based Program</h4>
              <p className="text-dark-400 text-sm">
                Start with ETFs (IBIT, FBTC) to get the program operational. This is the
                fastest path to offering bitcoin in NQDC.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
            <div>
              <h4 className="font-semibold text-dark-200">Phase 2: Build Custody Capability</h4>
              <p className="text-dark-400 text-sm">
                Develop internal bitcoin custody infrastructure or partner with
                institutional-grade custody providers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
            <div>
              <h4 className="font-semibold text-dark-200">Phase 3: Direct Treasury</h4>
              <p className="text-dark-400 text-sm">
                Transition to company-held bitcoin treasury to back the NQDC program,
                eliminating ETF counterparty risk.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fiduciary Considerations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fiduciary Considerations</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Risk Disclosure</h4>
          <p className="text-sm text-dark-300">
            Clear disclosure of bitcoin's volatility, custody risks, and the unsecured
            nature of NQDC benefits is essential.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Allocation Limits</h4>
          <p className="text-sm text-dark-300">
            Consider capping bitcoin allocation at a percentage of total deferred
            compensation to manage risk.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Education</h4>
          <p className="text-sm text-dark-300">
            Provide comprehensive education on bitcoin's properties, risks, and
            historical performance to participants.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Monitoring</h4>
          <p className="text-sm text-dark-300">
            Ongoing monitoring of custody providers, ETF performance tracking, and
            regular plan reviews are required.
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>NQDC plans have no contribution limits</strong> and broad investment
              discretion, making them ideal for bitcoin exposure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>The ERISA tradeoff</strong> means participants are unsecured creditors -
              they're "riding the wave" with the company's fate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Start with ETFs, evolve to treasury</strong> - use ETFs to launch
              quickly, then build toward company-held bitcoin.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Direct treasury eliminates counterparty risk</strong> - the superior
              long-term solution removes all ETF/custodian dependencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Long time horizons align perfectly</strong> - executives deferring
              for 10-20+ years match bitcoin's optimal holding period.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
