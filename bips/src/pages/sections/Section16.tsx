import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Segregated Witness: The Consensus Layer</h2>

      <p className="mb-4">
        BIP-141 defines <strong>Segregated Witness</strong> (SegWit)—one of the most significant
        upgrades in Bitcoin's history. By separating signature data from transaction identifiers,
        SegWit fixed transaction malleability, increased capacity, and enabled Layer 2 solutions
        like Lightning Network.
      </p>

      <Callout type="info" title="Activated: August 24, 2017">
        <p>
          SegWit activated at block 481,824 after a contentious 9-month signaling period.
          It was a soft fork that introduced new transaction types while remaining backward
          compatible with old nodes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Malleability Problem</h3>

      <p className="mb-4">
        Before SegWit, transaction IDs (txids) were computed from the entire transaction,
        including signatures. This created a fundamental problem:
      </p>

      <Definition title="Transaction Malleability">
        <p>
          The ability to change a transaction's ID without invalidating it. Since signatures
          could be re-encoded or modified in ways that preserve validity, third parties could
          change a transaction's txid while it was unconfirmed.
        </p>
      </Definition>

      <Example title="Why Malleability Breaks Things">
        <div className="space-y-3 text-dark-300">
          <p>Malleability prevented trustless protocols:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Payment channels:</strong> Can't pre-sign transactions spending from an
              unconfirmed funding tx if its txid might change
            </li>
            <li>
              <strong>Atomic swaps:</strong> Hash-locked contracts break if referenced txids change
            </li>
            <li>
              <strong>Exchange tracking:</strong> Deposit tracking fails if txids are modified
            </li>
          </ul>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The SegWit Solution</h3>

      <p className="mb-4">
        SegWit's key insight: <strong>move signatures outside the txid calculation</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-rose-400 font-bold mb-3">Legacy Transaction</p>
            <div className="font-mono text-xs space-y-1 text-dark-300">
              <p>┌─────────────────┐</p>
              <p>│ Version         │</p>
              <p>│ Inputs          │</p>
              <p>│ ├─ prevout      │</p>
              <p>│ └─ <span className="text-rose-400">scriptSig</span>    │ ← Includes sigs</p>
              <p>│ Outputs         │</p>
              <p>│ Locktime        │</p>
              <p>└─────────────────┘</p>
              <p className="mt-2">txid = hash(all of above)</p>
            </div>
          </div>
          <div>
            <p className="text-emerald-400 font-bold mb-3">SegWit Transaction</p>
            <div className="font-mono text-xs space-y-1 text-dark-300">
              <p>┌─────────────────┐</p>
              <p>│ Version         │</p>
              <p>│ <span className="text-purple-400">Marker (0x00)</span>   │ ← New</p>
              <p>│ <span className="text-purple-400">Flag (0x01)</span>     │ ← New</p>
              <p>│ Inputs          │</p>
              <p>│ ├─ prevout      │</p>
              <p>│ └─ scriptSig    │ ← Empty for native</p>
              <p>│ Outputs         │</p>
              <p>│ <span className="text-emerald-400">Witness</span>         │ ← Sigs moved here</p>
              <p>│ Locktime        │</p>
              <p>└─────────────────┘</p>
              <p className="mt-2">txid = hash(excluding witness)</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Witness Programs</h3>

      <p className="mb-4">
        SegWit introduces a new output script pattern: <strong>witness programs</strong>.
      </p>

      <Definition title="Witness Program">
        <p>
          A scriptPubKey consisting of a version byte (0-16) followed by a data push of
          2-40 bytes. The version determines how the witness data is interpreted.
        </p>
        <div className="mt-3 font-mono text-sm">
          <p><span className="text-amber-400">OP_0</span> &lt;20-byte-hash&gt; → P2WPKH (v0, pubkey hash)</p>
          <p><span className="text-amber-400">OP_0</span> &lt;32-byte-hash&gt; → P2WSH (v0, script hash)</p>
          <p><span className="text-purple-400">OP_1</span> &lt;32-byte-key&gt; → P2TR (v1, Taproot)</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">SegWit v0 Output Types</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">P2WPKH (Pay to Witness Public Key Hash)</h4>
          <p className="text-dark-300 mb-2">
            The SegWit equivalent of P2PKH. The scriptPubKey commits to a hash of the public key;
            the witness contains the signature and public key.
          </p>
          <div className="font-mono text-xs">
            <p className="text-dark-400">scriptPubKey: OP_0 &lt;20-byte-pubkey-hash&gt;</p>
            <p className="text-emerald-400">witness: &lt;signature&gt; &lt;pubkey&gt;</p>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">P2WSH (Pay to Witness Script Hash)</h4>
          <p className="text-dark-300 mb-2">
            The SegWit equivalent of P2SH. Commits to a SHA256 hash of the script (not HASH160).
            Enables more complex scripts than P2WPKH.
          </p>
          <div className="font-mono text-xs">
            <p className="text-dark-400">scriptPubKey: OP_0 &lt;32-byte-script-hash&gt;</p>
            <p className="text-emerald-400">witness: &lt;script args&gt; ... &lt;witnessScript&gt;</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Block Weight</h3>

      <p className="mb-4">
        SegWit introduced <strong>weight</strong> instead of raw size for block limits:
      </p>

      <MathBlock>
        {`\\text{weight} = (\\text{non-witness data} \\times 4) + (\\text{witness data} \\times 1)`}
      </MathBlock>

      <p className="mb-4">
        Maximum block weight is 4,000,000 units, equivalent to:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">~1 MB non-witness</p>
          <p className="text-sm text-dark-300">
            If a block contains only legacy transactions, max size is still ~1 MB
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">~4 MB with witness</p>
          <p className="text-sm text-dark-300">
            Theoretical max with 100% witness data (impractical but possible)
          </p>
        </div>
      </div>

      <Callout type="info" title="Why the Discount?">
        <p>
          Witness data is discounted because it's less costly to validate—it doesn't affect the
          UTXO set and can be pruned by nodes that don't need historical signatures. The 4x
          multiplier for non-witness data preserves the ~1MB limit for the critical UTXO-affecting data.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Soft Fork Magic</h3>

      <p className="mb-4">
        SegWit achieves backward compatibility through a clever trick:
      </p>

      <Example title="Old Node Perspective">
        <div className="space-y-3 text-dark-300">
          <p>A P2WPKH output looks like this to old nodes:</p>
          <div className="font-mono text-sm bg-dark-800 p-3 rounded">
            <p>scriptPubKey: OP_0 &lt;20-bytes&gt;</p>
          </div>
          <p className="mt-2">
            Old nodes see this as an "anyone-can-spend" output (OP_0 pushes 0, 20-byte push,
            script succeeds). They consider SegWit transactions valid but don't understand
            the witness rules.
          </p>
          <p className="text-amber-400">
            New nodes enforce the witness requirements, so only valid signatures can actually spend.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits Summary</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Fixes Malleability</p>
          <p className="text-sm text-dark-300">
            txid no longer includes signatures—enables Lightning and other L2 protocols
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Increases Capacity</p>
          <p className="text-sm text-dark-300">
            ~2x practical capacity increase through witness discount
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Enables Script Upgrades</p>
          <p className="text-sm text-dark-300">
            Version byte allows future script versions (like Taproot's v1)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Improves Signing</p>
          <p className="text-sm text-dark-300">
            BIP-143 fixes quadratic hashing in signature generation
          </p>
        </div>
      </div>

      <Callout type="success" title="Foundation for the Future">
        <p>
          SegWit didn't just fix immediate problems—it created the framework for future upgrades.
          Taproot (BIP-341) is "SegWit version 1," building directly on BIP-141's versioning system.
          The witness discount principle continues to guide Bitcoin's scaling approach.
        </p>
      </Callout>
    </LessonLayout>
  );
}
