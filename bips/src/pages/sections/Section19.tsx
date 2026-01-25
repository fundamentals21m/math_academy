import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Fixing the CHECKMULTISIG Bug</h2>

      <p className="mb-4">
        BIP-147 addresses a long-standing quirk in Bitcoin's OP_CHECKMULTISIG: the infamous
        "dummy element" bug. This soft fork requires the dummy to be null, eliminating a
        malleability vector that persisted even after SegWit.
      </p>

      <Callout type="info" title="Activated with SegWit">
        <p>
          BIP-147 activated as part of SegWit in August 2017. It applies only to SegWit
          scripts (witness programs), not to legacy P2SH multisig.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Original Bug</h3>

      <p className="mb-4">
        OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY have a well-known implementation quirk:
        they consume one more stack element than expected.
      </p>

      <Definition title="The Dummy Element">
        <p>
          Due to an off-by-one error in the original Bitcoin implementation, CHECKMULTISIG
          pops N+1 items from the stack (where N is the number of signatures). The extra
          element is not used for anything—it's just consumed and discarded.
        </p>
      </Definition>

      <Example title="Standard Multisig Script Execution">
        <div className="space-y-3">
          <p className="text-dark-300 mb-2">For a 2-of-3 multisig:</p>
          <div className="font-mono text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
            <p className="text-dark-400 mb-1"># ScriptSig (spending side)</p>
            <p className="text-amber-400 mb-3">
              &lt;dummy&gt; &lt;sig1&gt; &lt;sig2&gt;
            </p>
            <p className="text-dark-400 mb-1"># ScriptPubKey (locking side)</p>
            <p className="text-emerald-400">
              OP_2 &lt;pk1&gt; &lt;pk2&gt; &lt;pk3&gt; OP_3 OP_CHECKMULTISIG
            </p>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            The &lt;dummy&gt; element is required but ignored. Historically, any value worked.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Is a Problem</h3>

      <p className="mb-4">
        The fact that the dummy element is ignored creates a malleability vector:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-rose-400 font-semibold mb-1">Malleability Attack</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 ml-4">
              <li>Valid transaction uses dummy = OP_0 (empty)</li>
              <li>Attacker changes dummy to 0x01 or any other value</li>
              <li>Transaction remains valid (dummy is ignored)</li>
              <li>But the txid/wtxid changes!</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Pre-SegWit Impact">
        <p>
          Before SegWit, this was part of the broader scriptSig malleability problem. After
          SegWit moved signatures to the witness, the dummy element remained in the witness
          stack—still malleable for P2WSH multisig.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The BIP-147 Fix</h3>

      <p className="mb-4">
        BIP-147 adds a simple consensus rule:
      </p>

      <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 mb-6">
        <p className="text-emerald-400 font-bold text-lg mb-2">NULLDUMMY Rule</p>
        <p className="text-dark-300">
          For SegWit scripts, the dummy element consumed by CHECKMULTISIG and CHECKMULTISIGVERIFY
          MUST be an empty byte array (OP_0 / 0x00).
        </p>
        <p className="text-dark-500 text-sm mt-2">
          Any other value causes the script to fail immediately.
        </p>
      </div>

      <Example title="Valid vs Invalid After BIP-147">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-emerald-400 font-semibold mb-2">✓ Valid</p>
            <p className="font-mono text-sm text-dark-300">
              &lt;OP_0&gt; &lt;sig1&gt; &lt;sig2&gt;
            </p>
            <p className="text-xs text-dark-500 mt-1">
              Empty dummy element
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-rose-400 font-semibold mb-2">✗ Invalid</p>
            <p className="font-mono text-sm text-dark-300">
              &lt;0x01&gt; &lt;sig1&gt; &lt;sig2&gt;
            </p>
            <p className="text-xs text-dark-500 mt-1">
              Non-empty dummy → script fails
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not Fix the Bug Properly?</h3>

      <p className="mb-4">
        You might wonder: why not just fix CHECKMULTISIG to not consume the extra element?
        Several reasons:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Hard fork required:</strong> Changing opcode behavior for existing scripts
          would invalidate currently-valid transactions
        </li>
        <li>
          <strong>Script semantics:</strong> Stack depth expectations would change, potentially
          breaking complex scripts
        </li>
        <li>
          <strong>SegWit opportunity:</strong> New witness scripts could have new rules without
          affecting legacy
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scope of BIP-147</h3>

      <p className="mb-4">
        BIP-147 only applies to witness scripts:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">NULLDUMMY Enforced</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>P2WSH multisig</li>
            <li>P2SH-P2WSH multisig</li>
            <li>Witness scripts using CHECKMULTISIG*</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">NULLDUMMY Not Required</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Legacy P2SH multisig</li>
            <li>Bare multisig</li>
            <li>P2PKH (no multisig)</li>
          </ul>
          <p className="text-xs text-dark-500 mt-2">
            (Though standardness rules encourage OP_0)
          </p>
        </div>
      </div>

      <Callout type="info" title="Standardness vs Consensus">
        <p>
          Even before BIP-147, Bitcoin Core's standardness rules preferred OP_0 for the dummy.
          Non-standard transactions would relay but eventually confirm. BIP-147 elevated this
          to a consensus rule for SegWit, making non-null dummies invalid—not just non-standard.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Taproot Eliminates the Issue</h3>

      <p className="mb-4">
        BIP-147 is specific to SegWit v0. Taproot (v1) uses Schnorr signatures, which have
        a different multisig approach:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>MuSig2:</strong> Multiple signers produce a single aggregated signature
        </li>
        <li>
          <strong>OP_CHECKSIGADD:</strong> New opcode for threshold signatures, no dummy needed
        </li>
        <li>
          No CHECKMULTISIG in Tapscript—the bug doesn't exist in v1
        </li>
      </ul>

      <Callout type="success" title="Complete Malleability Fix">
        <p>
          BIP-147 was the final piece needed to make SegWit transactions fully non-malleable.
          With strict DER (BIP-66), low-S values, and now NULLDUMMY, there are no remaining
          ways to modify a valid SegWit transaction without invalidating it.
        </p>
      </Callout>
    </LessonLayout>
  );
}
