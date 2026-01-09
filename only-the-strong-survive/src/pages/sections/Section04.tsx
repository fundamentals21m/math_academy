import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Where I'm from, only the strong survive."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Allen Iverson on "Crypto"
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> Before critiquing crypto, the authors steelman the case for what crypto
          has achieved: permissionless access, data portability, and interoperability. They present the
          strongest arguments from proponents like Marvin Ammori and Balaji Srinivasan.
        </p>
      </Callout>

      {/* The Promise */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Promise of DeFi</h2>

      <p className="my-4">
        Any hope for decentralized finance must be grounded in a technology that is reliably and
        probabilistically secure, open, and distributed. The authors reiterate their belief in the
        <em> potential</em> of this concept, were it to be built on such a secure, open, and distributed base.
      </p>

      <p className="my-4">
        Their problem with crypto is essentially that it is <strong>not decentralized enough</strong> and
        it is <strong>not finance</strong>. But first, they acknowledge what crypto claims to offer.
      </p>

      {/* Ammori's Characterization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Social Benefits</h2>

      <p className="my-4">
        Marvin Ammori gives a helpful characterization in <em>Decentralized Finance: What It Is, Why It Matters</em>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 italic">
          "With DeFi, anyone in the world can lend, borrow, send, or trade blockchain-based assets using
          easily downloadable wallets without having to use a bank or broker. If they wish, they can explore
          even more advanced financial activities — leveraged trading, structured products, synthetic assets,
          insurance underwriting, market making — while always retaining complete control over their assets."
        </p>
      </div>

      <p className="my-4">
        Ammori emphasizes two key criteria that DeFi protocols abide by:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Permissionless-ness</h3>
          <p className="text-dark-300 text-sm">
            Anyone can participate without needing approval from gatekeepers. Barriers to entry for
            entrepreneurs collapse to zero.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Transparency</h3>
          <p className="text-dark-300 text-sm">
            All applications share the same database, making moving capital between platforms trivial
            and forcing projects to compete on fees and user experience.
          </p>
        </div>
      </div>

      {/* Srinivasan's Technical Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Technical Benefits</h2>

      <p className="my-4">
        Balaji Srinivasan provides a technical accompaniment in <em>Yes, You May Need A Blockchain</em>,
        arguing that "public blockchains are massively multiclient databases, where every user is a root user."
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">The Root User Concept</h3>
        <p className="text-dark-300">
          A "root user" is somebody with the rights and permissions to change whatever they want about
          the structure of the database. In public blockchains, <em>every</em> user has these rights,
          rather than being limited to reading and writing within prescribed rules.
        </p>
      </div>

      {/* Data Portability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Data Portability Problem</h2>

      <p className="my-4">
        Srinivasan makes a powerful argument about why traditional applications fail users:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 italic">
          "Different applications typically don't give users certainty that their data wasn't intentionally
          tampered with or inadvertently corrupted during all the exporting and importing. The reason why
          boils down to incentives. For most major internet services, there is simply no financial incentive
          to enable users to export their data."
        </p>
      </div>

      {/* Financial Incentive for Interoperability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Financial Incentives for Interoperability</h2>

      <p className="my-4">
        Srinivasan explains why public blockchains solve the data portability problem:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <div>
            <p className="font-semibold text-dark-100">Incentive for Import</p>
            <p className="text-sm text-dark-400 mt-1">
              Because blockchain data represents monetary value, any app that wants to receive BTC must
              honor the blockchain's conventions. Developers have no choice due to the single, canonical
              proof-of-work chain with cryptographic validation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <div>
            <p className="font-semibold text-dark-100">Incentive for Export</p>
            <p className="text-sm text-dark-400 mt-1">
              When it comes to money, users demand the ability to export with complete fidelity. Any
              application that doesn't support withdrawals is unlikely to ever receive deposits.
            </p>
          </div>
        </div>
      </div>

      {/* The Breakthrough */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">The Real Breakthrough</h3>
        <p className="text-dark-200">
          "This is a real breakthrough. We've now got a reliable way to incentivize the use of shared state
          while enforcing a common standard and maintaining high confidence in the integrity of the data.
          Public blockchains solve this problem with cryptography rather than permissions."
        </p>
        <p className="text-dark-400 text-sm mt-2">— Balaji Srinivasan</p>
      </div>

      {/* The Critical Question */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Critical Question</h2>

      <p className="my-4">
        A fundamental question emerges from all that has been described:
      </p>

      <Callout type="warning">
        <p className="text-xl font-semibold text-center">
          Does any of it require a token?
        </p>
      </Callout>

      <p className="my-4">
        Recall that tokens are by no means the essence of "decentralization" — HTTP, email, BitTorrent,
        TOR, Git, and wikis are all decentralized and involve only exchanging <em>information</em>, not value.
      </p>

      <p className="my-4">
        Srinivasan argues yes, because the technical blueprint borrowed from Bitcoin necessitates a native
        unit of value. But this is where the authors' critique begins: any self-respecting representation
        of value must possess precisely the properties outlined earlier — consensus, immutability, and
        unforgeable costliness.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              The steelman case for crypto includes <strong>permissionless access</strong> and
              <strong> transparency</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Public blockchains solve the <strong>data portability problem</strong> through financial
              incentives for interoperability.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Users retain <strong>complete control</strong> over their assets and can move freely
              between platforms.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              The critical question: <strong>do these benefits actually require a token?</strong>
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
