import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Technology Enablers</h2>

      <p className="mb-4">
        Modern technology—particularly blockchain and smart contracts—offers new possibilities
        for implementing tontines. These technologies address historical challenges around
        trust, transparency, and administration that contributed to tontines' 19th-century
        scandals.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Smart Contracts for Tontines</h3>

      <Definition title="Smart Contract Tontine">
        <p>
          A tontine implemented as code on a blockchain, providing:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Automatic payouts</strong> executed by code, not intermediaries</li>
          <li><strong>Transparent tracking</strong> of all pool balances and distributions</li>
          <li><strong>Immutable records</strong> that cannot be altered or hidden</li>
          <li><strong>Lower costs</strong> by eliminating administrative overhead</li>
        </ul>
      </Definition>

      <p className="mb-4 mt-6">
        A smart contract tontine encodes the payout rules directly in software. Here's
        a conceptual structure for an Ethereum-based tontine:
      </p>

      <div className="bg-dark-900 rounded-lg p-4 mb-6 font-mono text-sm">
        <p className="text-emerald-400 mb-2">// Conceptual Smart Contract Structure</p>
        <div className="space-y-3 text-dark-300">
          <p><span className="text-blue-400">contract</span> <span className="text-amber-400">Tontine</span> {'{'}</p>
          <div className="ml-4 space-y-2">
            <p><span className="text-purple-400">// State variables</span></p>
            <p>mapping(address =&gt; uint256) <span className="text-emerald-400">memberBalances</span>;</p>
            <p>mapping(address =&gt; bool) <span className="text-emerald-400">isAlive</span>;</p>
            <p>uint256 <span className="text-emerald-400">totalPool</span>;</p>
            <p>uint256 <span className="text-emerald-400">memberCount</span>;</p>
            <p className="mt-4"><span className="text-purple-400">// Core functions</span></p>
            <p><span className="text-blue-400">function</span> <span className="text-amber-400">join</span>() <span className="text-dark-500">payable</span>;</p>
            <p><span className="text-blue-400">function</span> <span className="text-amber-400">reportDeath</span>(address member);</p>
            <p><span className="text-blue-400">function</span> <span className="text-amber-400">distributeMortalityCredits</span>();</p>
            <p><span className="text-blue-400">function</span> <span className="text-amber-400">claimPayout</span>();</p>
          </div>
          <p>{'}'}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits of Blockchain Tontines</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">No Intermediary Risk</p>
          <p className="text-sm text-dark-300">
            Smart contracts execute automatically. There's no insurance company that can
            fail, no fund manager that can embezzle, no administrator that can make "errors."
            The code is the authority.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Trustless Operation</p>
          <p className="text-sm text-dark-300">
            Members don't need to trust each other or a central authority. The blockchain
            consensus mechanism ensures all transactions are valid and irreversible.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-2">Complete Audit Trail</p>
          <p className="text-sm text-dark-300">
            Every contribution, death report, and payout is recorded permanently on the
            blockchain. Anyone can verify the pool's history and current state.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-2">Global Access</p>
          <p className="text-sm text-dark-300">
            Blockchain tontines can accept participants worldwide, creating larger pools
            with better mortality diversification—regardless of national boundaries.
          </p>
        </div>
      </div>

      <Example title="Mortality Credit Distribution">
        <p className="mb-3">
          When a death is verified, the smart contract automatically redistributes the
          deceased member's balance. The calculation is transparent:
        </p>
        <MathBlock>
          {`\\text{Credit}_i = \\frac{\\text{Balance}_i}{\\text{TotalBalance}_{\\text{survivors}}} \\times \\text{Balance}_{\\text{deceased}}`}
        </MathBlock>
        <p className="mt-3">
          For a pool with 3 survivors holding $100k, $150k, and $250k, when a member
          with $120k dies:
        </p>
        <div className="bg-dark-900 rounded p-3 mt-3">
          <ul className="space-y-1 text-sm">
            <li>Member A: <InlineMath>{`\\$120k \\times \\frac{\\$100k}{\\$500k} = \\$24k`}</InlineMath></li>
            <li>Member B: <InlineMath>{`\\$120k \\times \\frac{\\$150k}{\\$500k} = \\$36k`}</InlineMath></li>
            <li>Member C: <InlineMath>{`\\$120k \\times \\frac{\\$250k}{\\$500k} = \\$60k`}</InlineMath></li>
          </ul>
        </div>
        <p className="mt-3 text-emerald-400">
          Distribution is proportional to existing stakes—larger contributors receive
          larger mortality credits.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Oracle Problem</h3>

      <p className="mb-4">
        The biggest challenge for blockchain tontines is <strong>mortality verification</strong>.
        How does the smart contract know when a member has died?
      </p>

      <Callout type="warning" title="The Death Verification Challenge">
        <p>
          Blockchains cannot directly access real-world data. They need "oracles"—trusted
          data feeds—to bring external information on-chain. For tontines, this means
          solving the problem: how do we reliably report deaths without creating
          opportunities for fraud?
        </p>
      </Callout>

      <p className="mb-4 mt-6">
        Several approaches have been proposed:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-4">
          <li>
            <p className="text-emerald-400 font-semibold">Government Death Registries</p>
            <p className="text-sm text-dark-300 mt-1">
              Connect to official death certificate databases. Requires government cooperation
              and raises privacy concerns, but provides authoritative verification.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Proof-of-Life Systems</p>
            <p className="text-sm text-dark-300 mt-1">
              Members periodically submit cryptographic proof they're alive (biometrics,
              video verification, or signing transactions). Failure to prove life triggers
              death investigation.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Decentralized Oracle Networks</p>
            <p className="text-sm text-dark-300 mt-1">
              Services like Chainlink aggregate data from multiple sources. Multiple
              independent reporters must agree before a death is confirmed on-chain.
            </p>
          </li>
          <li>
            <p className="text-emerald-400 font-semibold">Social Verification</p>
            <p className="text-sm text-dark-300 mt-1">
              Designated beneficiaries or family members report deaths with supporting
              documentation. Time-locked payouts allow for dispute periods.
            </p>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Additional Challenges</h3>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Challenge</th>
            <th className="pb-2">Description</th>
            <th className="pb-2">Potential Solution</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">Legal Recognition</td>
            <td className="py-2">Smart contracts may not be legally enforceable</td>
            <td className="py-2">Hybrid structures with legal wrappers</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Regulatory Uncertainty</td>
            <td className="py-2">Unclear which regulations apply</td>
            <td className="py-2">Jurisdiction shopping, sandbox programs</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Smart Contract Bugs</td>
            <td className="py-2">Code vulnerabilities can be exploited</td>
            <td className="py-2">Formal verification, audits, insurance</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Gas Costs</td>
            <td className="py-2">Ethereum transactions can be expensive</td>
            <td className="py-2">Layer 2 solutions, alternative chains</td>
          </tr>
          <tr>
            <td className="py-2">User Experience</td>
            <td className="py-2">Crypto wallets confuse mainstream users</td>
            <td className="py-2">Custodial solutions, fiat on-ramps</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Real-World Projects</h3>

      <p className="mb-4">
        Several blockchain tontine projects are in various stages of development:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="space-y-3 text-sm">
          <li>
            <strong className="text-emerald-400">Akropolis (Ethereum):</strong> DeFi protocol
            exploring decentralized pension pools with tontine elements
          </li>
          <li>
            <strong className="text-blue-400">Tontine.cash:</strong> Bitcoin-based tontine
            concept using multi-signature wallets and time-locks
          </li>
          <li>
            <strong className="text-purple-400">Various DAOs:</strong> Decentralized
            autonomous organizations experimenting with mortality-linked payouts
          </li>
        </ul>
      </div>

      <Callout type="info" title="The Promise of Programmable Finance">
        <p>
          Smart contract tontines represent a broader trend: programmable finance. By encoding
          complex financial rules in auditable code, we can create financial products that
          were previously impossible due to trust requirements. Tontines—which failed partly
          due to administrator fraud—are an ideal candidate for this technology.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        Technology alone cannot bring tontines back. Regulatory approval is essential
        for mainstream adoption. Let's examine the current regulatory landscape across
        major jurisdictions.
      </p>
    </LessonLayout>
  );
}
