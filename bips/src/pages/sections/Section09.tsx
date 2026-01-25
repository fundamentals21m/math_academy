import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Hiding Script Complexity</h2>

      <p className="mb-4">
        Before BIP-16, complex spending conditions required embedding the entire script in the
        transaction output—making addresses long, ugly, and expensive. <strong>Pay to Script Hash
        (P2SH)</strong> revolutionized Bitcoin by allowing complex scripts to be represented by
        a simple, standard-length address.
      </p>

      <Callout type="info" title="Activated: April 1, 2012">
        <p>
          BIP-16 was one of the earliest soft forks, activating via miner voting (ISM) at
          block 173,805. It enabled the 3-prefix addresses still used today for multisig
          and wrapped SegWit.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        In early Bitcoin, if Alice wanted to receive funds that required a 2-of-3 multisig,
        the sender had to include the full multisig script in the output:
      </p>

      <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
        <p className="text-dark-400 mb-2"># Old style: scriptPubKey contains full script</p>
        <p className="text-amber-400">
          OP_2 &lt;pubkey1&gt; &lt;pubkey2&gt; &lt;pubkey3&gt; OP_3 OP_CHECKMULTISIG
        </p>
      </div>

      <p className="mb-4">Problems with this approach:</p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>Long addresses:</strong> The address encoding all those pubkeys is huge</li>
        <li><strong>Sender burden:</strong> Sender pays fees for the recipient's complex script</li>
        <li><strong>Privacy leak:</strong> Everyone sees the spending conditions before they're used</li>
        <li><strong>Inflexibility:</strong> Hard to change script formats without changing addresses</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The P2SH Solution</h3>

      <Definition title="Pay to Script Hash (P2SH)">
        <p>
          Instead of embedding the full script, embed only a hash of it. The actual script
          (called the <strong>redeemScript</strong>) is revealed only when spending. The output
          just says "pay to whoever can provide a script that hashes to this value."
        </p>
      </Definition>

      <Example title="P2SH Transaction Flow">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-blue-400 font-semibold">1. Receiver creates script</p>
            <p className="text-sm text-dark-300">
              Alice creates her multisig script (the redeemScript)
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <p className="text-purple-400 font-semibold">2. Compute hash</p>
            <p className="text-sm text-dark-300">
              Hash the script: <code className="text-amber-400">HASH160(redeemScript)</code>
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <p className="text-amber-400 font-semibold">3. Create address</p>
            <p className="text-sm text-dark-300">
              Encode with version byte 0x05 → address starting with "3"
            </p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-4">
            <p className="text-emerald-400 font-semibold">4. Sender pays to hash</p>
            <p className="text-sm text-dark-300">
              Output script: <code className="text-amber-400">OP_HASH160 &lt;hash&gt; OP_EQUAL</code>
            </p>
          </div>
          <div className="border-l-4 border-rose-500 pl-4">
            <p className="text-rose-400 font-semibold">5. Receiver spends</p>
            <p className="text-sm text-dark-300">
              Provides redeemScript + signatures satisfying it
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Evaluation</h3>

      <p className="mb-4">
        When spending a P2SH output, validation happens in two stages:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-dark-400 mb-1"># Stage 1: Verify the hash matches</p>
            <p className="text-emerald-400">scriptSig: &lt;sig1&gt; &lt;sig2&gt; &lt;redeemScript&gt;</p>
            <p className="text-amber-400">scriptPubKey: OP_HASH160 &lt;scriptHash&gt; OP_EQUAL</p>
            <p className="text-dark-500 mt-1">→ Check HASH160(redeemScript) == scriptHash</p>
          </div>
          <div className="border-t border-dark-700 pt-4">
            <p className="text-dark-400 mb-1"># Stage 2: Execute the redeemScript</p>
            <p className="text-emerald-400">Stack: &lt;sig1&gt; &lt;sig2&gt;</p>
            <p className="text-amber-400">Script: &lt;redeemScript content&gt;</p>
            <p className="text-dark-500 mt-1">→ Run as if redeemScript was the original scriptPubKey</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits Achieved</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Fixed Address Length</p>
          <p className="text-sm text-dark-300">
            All P2SH addresses are 34 characters, regardless of script complexity
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Receiver Pays Fees</p>
          <p className="text-sm text-dark-300">
            Complex script only revealed when spending—receiver bears the byte cost
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Privacy Improved</p>
          <p className="text-sm text-dark-300">
            Spending conditions hidden until funds are spent
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Future Flexibility</p>
          <p className="text-sm text-dark-300">
            New script types can be added without new address formats (up to a point)
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">P2SH Script Templates</h3>

      <Example title="Common P2SH Scripts">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-semibold">Multisig (2-of-3)</p>
            <p className="text-sm text-dark-400 font-mono mt-1">
              OP_2 &lt;pk1&gt; &lt;pk2&gt; &lt;pk3&gt; OP_3 OP_CHECKMULTISIG
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold">P2SH-P2WPKH (Wrapped SegWit)</p>
            <p className="text-sm text-dark-400 font-mono mt-1">
              OP_0 &lt;20-byte-pubkey-hash&gt;
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold">Time-locked</p>
            <p className="text-sm text-dark-400 font-mono mt-1">
              &lt;time&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP OP_DUP OP_HASH160 ...
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations</h3>

      <Callout type="warning" title="P2SH Constraints">
        <p>
          P2SH redeemScripts are limited to 520 bytes (the script push limit). This restricts
          the complexity of scripts that can be used. Additionally, the script is fully
          revealed when spent, which isn't ideal for privacy in some cases.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The OP_EVAL Alternative</h3>

      <p className="mb-4">
        Before P2SH, an alternative called OP_EVAL was proposed (BIP-12). It would evaluate
        scripts on the stack, providing similar functionality. It was rejected because:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Turing-complete concerns: recursive script evaluation</li>
        <li>DoS attack vectors: hard to bound execution time</li>
        <li>Static analysis impossible: can't know script until execution</li>
      </ul>

      <p className="mb-4">
        P2SH's two-stage evaluation was simpler and safer—the redeemScript is known before
        execution begins.
      </p>

      <Callout type="success" title="Lasting Impact">
        <p>
          P2SH remains heavily used today. Most multisig wallets use P2SH addresses (starting
          with "3"). SegWit also relies on P2SH for backward-compatible wrapped addresses.
          The concept influenced later developments like Taproot's script commitments.
        </p>
      </Callout>
    </LessonLayout>
  );
}
