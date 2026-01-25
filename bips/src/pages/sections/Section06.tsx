import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Deploying Protocol Changes</h2>

      <p className="mb-4">
        Writing a BIP is one thing; getting it deployed across thousands of independent nodes
        is another. This section explores the mechanisms by which Bitcoin actually upgrades,
        focusing on the crucial distinction between <strong>soft forks</strong> and{' '}
        <strong>hard forks</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fundamental Constraint</h3>

      <p className="mb-4">
        Bitcoin has no central server that can push updates. Every upgrade must maintain
        backward compatibility with nodes that haven't updated, or risk splitting the network
        into incompatible chains.
      </p>

      <Callout type="warning" title="No Forced Updates">
        <p>
          Unlike web services that can update overnight, Bitcoin changes must respect the
          fact that some nodes will never upgrade. The network must continue to function
          as a coherent whole.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Soft Forks: Tightening Rules</h3>

      <Definition title="Soft Fork">
        <p>
          A change to Bitcoin's consensus rules that makes previously valid blocks/transactions
          invalid, while all previously invalid blocks/transactions remain invalid. Old nodes
          will accept all blocks created by new nodes.
        </p>
        <p className="mt-2">
          Formally: If <InlineMath>{"V_{\\text{old}}"}</InlineMath> is the set of valid states under old rules and{' '}
          <InlineMath>{"V_{\\text{new}}"}</InlineMath> under new rules, a soft fork requires{' '}
          <InlineMath>{"V_{\\text{new}} \\subseteq V_{\\text{old}}"}</InlineMath>.
        </p>
      </Definition>

      <p className="mb-4">
        Soft forks are <strong>forward compatible</strong>—old nodes can still follow the chain
        even if they don't understand all the new features. This is why soft forks are
        preferred for Bitcoin upgrades.
      </p>

      <Example title="Soft Fork Example: SegWit (BIP-141)">
        <p className="mb-3">
          SegWit introduced a new transaction format where signatures are moved to a separate
          "witness" structure. To old nodes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>SegWit transactions look like "anyone-can-spend" outputs (valid under old rules)</li>
          <li>Old nodes see blocks as valid, just don't understand the witness data</li>
          <li>New nodes enforce the actual signature requirements in the witness</li>
        </ul>
        <p className="mt-3 text-amber-400">
          Result: Network continued to operate; nodes upgraded gradually over years.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hard Forks: Loosening Rules</h3>

      <Definition title="Hard Fork">
        <p>
          A change that makes previously invalid blocks/transactions valid. Old nodes will
          reject blocks created by new nodes, causing a permanent chain split if any old
          nodes remain.
        </p>
        <p className="mt-2">
          Formally: <InlineMath>{"V_{\\text{old}} \\subset V_{\\text{new}}"}</InlineMath> — the new rule set
          accepts strictly more states than the old one.
        </p>
      </Definition>

      <p className="mb-4">
        Hard forks are <strong>not forward compatible</strong>. Every node must upgrade, or
        the network splits. This is why Bitcoin Core has never deployed a hard fork after
        the early days (when the network was small).
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Soft Fork Properties</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✓ Old nodes follow the chain (reduced security)</li>
            <li>✓ Gradual migration possible</li>
            <li>✓ No chain split if miners enforce</li>
            <li>✗ Limited expressiveness (must fit old rules)</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Hard Fork Properties</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✗ Old nodes reject new blocks</li>
            <li>✗ Requires near-total upgrade</li>
            <li>✗ Chain split if not unanimous</li>
            <li>✓ Can implement any change</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Activation Mechanisms</h3>

      <p className="mb-4">
        How does a soft fork actually "turn on"? Several mechanisms have been used:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Flag Day Activation</h4>
          <p className="text-dark-300 mb-2">
            At a predetermined block height or timestamp, new rules activate. Simple but risky—if
            not enough nodes have upgraded, the network could experience issues.
          </p>
          <p className="text-sm text-dark-500">Used for: BIP-30 (duplicate txids)</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">IsSuperMajority (ISM)</h4>
          <p className="text-dark-300 mb-2">
            New rules activate when 950 of the last 1000 blocks signal support (95% threshold).
            Miners signal by setting a version bit in the block header.
          </p>
          <p className="text-sm text-dark-500">Used for: BIP-34, BIP-66, BIP-65</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-emerald-400 mb-2">BIP-9: Version Bits</h4>
          <p className="text-dark-300 mb-2">
            Improved ISM with a timeout. Multiple soft forks can be signaled simultaneously using
            different bits. If the threshold isn't reached by timeout, activation fails.
          </p>
          <p className="text-sm text-dark-500">Used for: SegWit (BIP-141), but activation was contentious</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-purple-400 mb-2">Speedy Trial (BIP-8 variant)</h4>
          <p className="text-dark-300 mb-2">
            Quick signaling period followed by locked-in activation. Gives miners a chance to
            signal, but has a flag day fallback if they don't.
          </p>
          <p className="text-sm text-dark-500">Used for: Taproot (BIP-341)</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The SegWit Wars: A Case Study</h3>

      <p className="mb-4">
        The activation of SegWit in 2017 was contentious, illustrating the challenges of
        decentralized upgrades:
      </p>

      <Example title="SegWit Activation Timeline">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><strong>2015-12:</strong> SegWit BIP drafted</li>
          <li><strong>2016-10:</strong> Bitcoin Core 0.13.1 released with SegWit support</li>
          <li><strong>2016-11:</strong> BIP-9 signaling begins, requires 95% miner threshold</li>
          <li><strong>2017-03:</strong> Signaling stalls around 30%—miners demand block size increase</li>
          <li><strong>2017-08:</strong> BIP-91 lowers threshold; User Activated Soft Fork (UASF) threatened</li>
          <li><strong>2017-08-24:</strong> SegWit finally activates</li>
        </ol>
        <p className="mt-3 text-amber-400">
          Lesson: Technical readiness ≠ political readiness. Soft forks involving economic
          changes face additional hurdles.
        </p>
      </Example>

      <Callout type="info" title="UASF: User Power">
        <p>
          BIP-148 proposed that users (not miners) could force SegWit activation by rejecting
          blocks that didn't signal support. This "User Activated Soft Fork" threatened a chain
          split, pressuring miners to signal. It demonstrated that miners don't have absolute
          power over protocol changes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Post-Activation Considerations</h3>

      <p className="mb-4">
        Even after activation, there's a transition period:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>Grace period:</strong> Old transaction formats remain valid to allow wallet updates</li>
        <li><strong>Economic incentives:</strong> New features must provide enough benefit to drive adoption</li>
        <li><strong>SPV wallets:</strong> Lightweight clients may need specific updates to use new features</li>
        <li><strong>Exchange support:</strong> Services must update to recognize new address formats</li>
      </ul>

      <Callout type="success" title="Taproot: Smoother Activation">
        <p>
          Taproot (BIP-341/342) activated via Speedy Trial in November 2021, with much less
          controversy than SegWit. The community had learned from the SegWit Wars, and there
          was broad consensus on Taproot's benefits.
        </p>
      </Callout>
    </LessonLayout>
  );
}
