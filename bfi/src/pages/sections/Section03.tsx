import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// ETF Custodian comparison
const etfCustodians = [
  { etf: 'IBIT (BlackRock)', custodian: 'Coinbase', concern: 'Pre-Segwit addresses, technology limitations' },
  { etf: 'FBTC (Fidelity)', custodian: 'In-house', concern: 'Opacity, but longer bitcoin experience' },
  { etf: 'BITB (Bitwise)', custodian: 'Coinbase', concern: 'Publicly visible pre-Segwit addresses' },
];

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Cryptography is ruthless, and there are two types of people in the world — those who
        have been burned and those who have yet to be."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        Everybody is early to bitcoin. It is only sixteen years old, after all. In 2024, stories
        of bitcoin being lost on hard drives are becoming rarer, but we still see high-profile
        reports of lost bitcoin in significant amounts.
      </p>

      {/* The Stories of Lost Bitcoin */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Stories of Lost Bitcoin</h2>

      <p className="my-4">
        In 2023, a former Bitcoin Core developer, Luke Dashjr, reportedly lost hundreds of bitcoins
        in a setup that was supposedly too complicated for anybody to rescue. There are conflicting
        accounts of whether this was a loss, a theft, or an attempt to portray a "boating accident."
      </p>

      <p className="my-4">
        These stories are becoming rarer because the <strong className="text-orange-400">hardware available
        to individuals for self-custody has improved greatly</strong> in the past half-decade. Hardware
        wallets have become extremely intuitive and easy to use, making the only real obstacle to
        bitcoin self-custody one's ability to protect a 12- or 24-word seed phrase.
      </p>

      <Callout type="note">
        <p>
          That ability is no small thing. There are a number of tradeoffs to consider, and the
          reality is that it takes a long time of mulling through one's personal discomfort before
          the security of your bitcoin allows you to sleep soundly at night.
        </p>
      </Callout>

      {/* The Backwards Approach */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Backwards Approach to Custody</h2>

      <p className="my-4">
        The soundest sleepers are those who have the least issue trusting someone to hold their
        seed for them, but this is <strong className="text-orange-400">backwards and untenable</strong> and
        not a foundation for individuals or institutions to build on.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">Critical Warning</h4>
        <p className="text-dark-200 text-lg">
          Institutions that fail to take custody seriously will not only fail first, but also the
          most severely, as well as having the potential to take down their industry and/or a
          portion of the financial system with them.
        </p>
      </div>

      {/* Why Self-Custody is Different */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Holding Bitcoin is Different</h2>

      <p className="my-4">
        Holding bitcoin in self-custody is not like holding fiat for a simple reason: The likelihood
        of a mistake that makes the bitcoin unspendable is much higher, and <strong className="text-orange-400">there
        is no bailout possible</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Nightmare Scenario: 2030</h4>
        <div className="space-y-3 text-dark-200">
          <p>
            Imagine: BlackRock's IBIT ETF has acquired 2 million bitcoin on behalf of its users.
            Bitcoin reaches gold's market capitalization of $20 trillion — that's about $1M per bitcoin.
          </p>
          <p>
            BlackRock's ETF would represent 10% of that value, or <strong className="text-orange-400">$2 trillion</strong>.
            That's $2 trillion of value on balance sheets of companies all over the world.
          </p>
          <p>
            Now imagine we discover that BlackRock cannot sell back that bitcoin because its custodian
            cannot perform the signatures required to move the keys. BlackRock loses $2 trillion, and
            all of their customers have to write down 100% of that value on their balance sheets.
          </p>
          <p className="font-semibold text-red-400">Poof.</p>
        </div>
      </div>

      {/* The Coinbase Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Coinbase Problem</h2>

      <p className="my-4">
        The world that understands BlackRock knows very little about their custodian, Coinbase.
        The problems with Coinbase being trusted to hold that much bitcoin should concern everybody
        greatly.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-green-400 mb-2">Pro</h4>
          <p className="text-sm text-dark-300">
            Coinbase has been doing custody for a long time. That's about the only item in the "pro" column.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Con: Legacy Technology</h4>
          <p className="text-sm text-dark-300">
            Their custody technology predates best practices developed since the Blocksize War,
            particularly Segregated Witness (Segwit).
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Con: Transaction Malleability</h4>
          <p className="text-sm text-dark-300">
            Pre-Segwit addresses are vulnerable to the "transaction malleability" problem that led
            to the legendary failure of Mt. Gox exchange.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">Con: Fast-Track Adoption</h4>
          <p className="text-sm text-dark-300">
            BlackRock spent the majority of the last decade hating bitcoin until 2023. They wanted
            to fast-track their adoption, choosing speed over security.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>Ticking Time Bomb:</strong> This is now a ticking time bomb on the scenario that
          in 2030, Coinbase's failure leads to the destruction of $2 trillion of value.
        </p>
      </Callout>

      {/* ETF Custodian Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">ETF Custodian Comparison</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">ETF</th>
              <th className="px-4 py-3 text-left text-orange-400">Custodian</th>
              <th className="px-4 py-3 text-left text-orange-400">Concerns</th>
            </tr>
          </thead>
          <tbody>
            {etfCustodians.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200 font-medium">{item.etf}</td>
                <td className="px-4 py-3 text-dark-300">{item.custodian}</td>
                <td className="px-4 py-3 text-dark-400 text-sm">{item.concern}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fidelity's Approach */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fidelity's Different Approach</h2>

      <p className="my-4">
        Fidelity Investments has a very successful spot bitcoin ETF (FBTC) and, in contrast to
        BlackRock, they are able to manage all of the custody in-house themselves.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Fidelity's Advantages</h4>
        <ul className="text-dark-300 text-sm space-y-2">
          <li>They have been in bitcoin for a very long time (the majority of the past decade)</li>
          <li>They understood they could not trust Coinbase with their customers' keys</li>
          <li>They understood they couldn't trust any of the "qualified custodians" with their keys</li>
          <li>They have a substantial advantage over BlackRock due to their experience</li>
        </ul>
      </div>

      <p className="my-4">
        Under the current level of opacity, there is no way to know if Fidelity is a more reliable
        custodian than Coinbase. The only reason we know about Coinbase's technology limitations is
        because Bitwise made their addresses public and we were able to see the details.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-yellow-600/30 my-6">
        <h4 className="font-semibold text-yellow-400 mb-3">The Bitwise Reveal</h4>
        <p className="text-dark-200">
          The "1" in front of the bitcoin address told us that Coinbase was holding the bitcoin
          for the ETF in <strong className="text-orange-400">"pre-Segwit" addresses</strong>. The potential
          danger this signals is highly concerning.
        </p>
      </div>

      {/* The ETF Tradeoff */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The ETF Tradeoff</h2>

      <p className="my-4">
        The larger calculation of the ETF with regard to custody is that companies and individuals
        who aren't ready to deal with their own self-custody of bitcoin can gain exposure through
        the ETF.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">What the ETF Provides</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>Easy exposure to bitcoin's price volatility</li>
            <li>No need to understand self-custody</li>
            <li>Fits into existing brokerage accounts</li>
            <li>Familiar investment vehicle structure</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-red-600/30">
          <h4 className="font-semibold text-red-400 mb-3">What the ETF Costs</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>Enormous level of counterparty risk</li>
            <li>No ability to verify custody yourself</li>
            <li>Dependent on custodian's competence</li>
            <li>Not true bitcoin ownership</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          While gaining ETF exposure is a rational position for those not ready for self-custody,
          it does not make for a landscape to provide robust solutions to the public using bitcoin.
          <strong> The ETF is capable of capturing the volatility of bitcoin's price exposure but
          at an enormous level of counterparty risk.</strong>
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Hardware wallets have made self-custody accessible</strong>, but the only
              real obstacle remains one's ability to protect a 12- or 24-word seed phrase.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>There is no bailout in bitcoin</strong>—mistakes that make bitcoin
              unspendable are permanent and irreversible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Institutional custody failures could be catastrophic</strong>—potentially
              destroying trillions in value and taking down the financial system.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Coinbase's legacy technology</strong> predates Segwit best practices, creating
              systemic risk for ETFs using them as custodian.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>ETFs provide price exposure but enormous counterparty risk</strong>—they
              are not a substitute for true bitcoin ownership through self-custody.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
