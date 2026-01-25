import { Link } from 'react-router-dom';
import { TranscriptLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function WalkerBitcoinAdoption() {
  return (
    <TranscriptLayout transcriptId="walker-bitcoin-adoption">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Bitcoin as just a store of value would be "a colossal failure" — it needs commerce adoption</li>
          <li>Cashu eCash lowers the barrier to entry while educating users about self-custody</li>
          <li>Zeus continued developing in the US despite regulatory pressure on wallet developers</li>
          <li>Building circular economies is essential for Bitcoin's long-term success</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin's True Measure of Success</h3>

      <p className="mb-4">
        This episode features a philosophical discussion about what Bitcoin's success actually looks like.
        Kaloudis pushes back strongly against the narrative that Bitcoin has "won" simply by existing
        as a store of value.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "If Bitcoin stays where it's at with the small community it has and it's just used as it is
          now — store value, ETFs, shiny rock under the bed, gold 2.0 — I'll consider it a colossal
          failure. Bitcoin needs to be used for commerce. It needs to be a medium of exchange."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Role of Cashu</h3>

      <p className="mb-4">
        The conversation explores how Cashu eCash fits into Zeus's vision for onboarding new users.
        Rather than compromising on principles, Cashu serves as an educational stepping stone.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-3">Cashu as Onboarding</h4>
        <p className="text-dark-300 mb-4">
          Cashu allows users to experience Bitcoin payments without the complexity of channel management.
          But Zeus is designed to educate users about the tradeoffs and encourage progression to
          self-custody.
        </p>
        <div className="flex items-center justify-center gap-4 text-dark-400">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-xl">🪙</span>
            </div>
            <p className="text-sm">Cashu</p>
          </div>
          <div className="text-amber-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <p className="text-sm">Lightning Channel</p>
          </div>
          <div className="text-amber-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-xl">🖥️</span>
            </div>
            <p className="text-sm">Full Node</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fighting State Control</h3>

      <p className="mb-4">
        A significant portion of the discussion addresses financial surveillance, CBDCs, and the
        importance of privacy-preserving tools. Kaloudis explains why he chose to keep building
        in the US despite the risks.
      </p>

      <Callout type="warning" title="Regulatory Pressure">
        <p className="mt-2">
          Following the arrest of Samourai wallet developers and Phoenix wallet leaving the US market,
          many questioned whether self-custody wallet development could continue in the United States.
          Kaloudis chose to stay and fight for the right to build privacy-preserving tools.
        </p>
      </Callout>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We're not leaving. We're not going to compromise on self-custody. We're not going to add KYC.
          If they want to come after us, they'll have to explain why open-source software is a crime."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Improving User Experience</h3>

      <p className="mb-4">
        The conversation covers how Zeus has evolved its user experience to make self-custody more
        accessible without sacrificing principles.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Meeting Users Where They Are</p>
          <p className="text-sm text-dark-300">
            Not everyone is ready for full self-custody from day one. Zeus provides multiple entry
            points while always educating and encouraging users toward greater sovereignty.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Gradual Complexity</p>
          <p className="text-sm text-dark-300">
            Advanced features are available but not forced. Users can manage channels and liquidity
            when they're ready, without being overwhelmed initially.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Building Circular Economies</h3>

      <p className="mb-4">
        Kaloudis discusses the importance of circular economies — where Bitcoin flows between
        businesses and consumers without ever touching fiat — for Bitcoin's long-term viability.
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Elements of a Circular Economy</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Merchants Accepting Bitcoin</p>
              <p className="text-sm text-dark-400">Businesses need to accept Bitcoin for goods and services</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Employees Paid in Bitcoin</p>
              <p className="text-sm text-dark-400">Workers receiving salary in Bitcoin creates natural demand</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Suppliers Accepting Bitcoin</p>
              <p className="text-sm text-dark-400">Businesses paying suppliers in Bitcoin closes the loop</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-sm">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Easy Payment Tools</p>
              <p className="text-sm text-dark-400">User-friendly wallets like Zeus make participation possible</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy in the Digital Age</h3>

      <p className="mb-4">
        The discussion addresses broader themes of digital privacy, CBDCs, and why financial
        privacy is a fundamental right that must be defended.
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Privacy isn't about having something to hide. It's about having the freedom to transact
          without surveillance. Every transaction being tracked creates a system of control that's
          incompatible with a free society."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Evan Kaloudis</cite>
      </blockquote>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Episode Topics</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Bitcoin adoption and merchant integration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Self-custody versus custodial solutions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Zeus wallet evolution and UX improvements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Cashu (eCash) technology as onboarding</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Lightning Network scalability</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>CBDCs and financial surveillance concerns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Regulatory pressures on Bitcoin businesses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Building Bitcoin circular economies</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <p className="mb-4">
        Explore these course sections to deepen your understanding of the concepts discussed:
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <Link
          to="/section/0"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 0: Introduction to Zeus
          </p>
          <p className="text-sm text-dark-500">Overview of the Zeus wallet</p>
        </Link>
        <Link
          to="/section/4"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 4: Using Cashu
          </p>
          <p className="text-sm text-dark-500">eCash integration and usage</p>
        </Link>
      </div>
    </TranscriptLayout>
  );
}
