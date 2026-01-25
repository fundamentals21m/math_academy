import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">M-of-N Standard Transactions</h2>

      <p className="mb-4">
        BIP-11 introduced support for multisignature transactions as a standard transaction
        type. This early BIP made it possible for nodes to relay and mine transactions
        requiring multiple signatures, enabling shared custody and trustless escrow.
      </p>

      <Callout type="info" title="Historical Context">
        <p>
          BIP-11 was one of the earliest BIPs, establishing multisig as a standard script
          type. While largely superseded by P2SH (BIP-16) for practical use, it defined
          the fundamental OP_CHECKMULTISIG semantics still used today.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is Multisig?</h3>

      <Definition title="M-of-N Multisignature">
        <p>
          A multisig script requires M signatures from a set of N public keys to spend.
          For example, 2-of-3 requires any 2 signatures from 3 possible signers.
        </p>
        <p className="mt-2 text-dark-400">
          This enables shared control, trustless escrow, backup key schemes, and corporate
          treasuries.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Script Pattern</h3>

      <p className="mb-4">
        BIP-11 defined the "bare multisig" script structure:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># ScriptPubKey (locking script)</p>
        <p className="text-amber-400">
          OP_M &lt;pubkey1&gt; &lt;pubkey2&gt; ... &lt;pubkeyN&gt; OP_N OP_CHECKMULTISIG
        </p>

        <p className="text-dark-400 mt-4 mb-2"># ScriptSig (unlocking script)</p>
        <p className="text-emerald-400">
          OP_0 &lt;sig1&gt; &lt;sig2&gt; ... &lt;sigM&gt;
        </p>

        <p className="text-xs text-dark-500 mt-3">
          OP_0 is required due to the famous CHECKMULTISIG bug (off-by-one)
        </p>
      </div>

      <Example title="2-of-3 Multisig Script">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Output script:</p>
            <p className="text-dark-300">
              OP_2 &lt;pk_alice&gt; &lt;pk_bob&gt; &lt;pk_carol&gt; OP_3 OP_CHECKMULTISIG
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Spending with Alice + Carol:</p>
            <p className="text-dark-300">
              OP_0 &lt;sig_alice&gt; &lt;sig_carol&gt;
            </p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-2">
          Signatures must appear in the same order as their public keys
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Standard Transaction Types</h3>

      <p className="mb-4">
        BIP-11 added multisig to Bitcoin Core's "IsStandard" relay policy:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Before BIP-11:</p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>P2PK (pay-to-pubkey)</li>
          <li>P2PKH (pay-to-pubkey-hash)</li>
        </ul>

        <p className="text-dark-400 mt-4 mb-3">After BIP-11:</p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>P2PK</li>
          <li>P2PKH</li>
          <li className="text-amber-400">Bare multisig (up to 3-of-3)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Limitations</h3>

      <p className="mb-4">
        Bare multisig has significant drawbacks:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Problems</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Public keys visible in output</li>
            <li>Large output scripts (~35 bytes per key)</li>
            <li>Limited to 3 keys (standard policy)</li>
            <li>Reveals quorum structure</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">P2SH Solution (BIP-16)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Script hidden behind hash</li>
            <li>Fixed output size (23 bytes)</li>
            <li>Up to 15 keys (policy limit)</li>
            <li>Better privacy</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Rarely Used Today">
        <p>
          Bare multisig (BIP-11) is rarely used in practice. P2SH-wrapped multisig (BIP-16)
          and native SegWit P2WSH provide better privacy, smaller outputs, and higher key
          limits. Understanding BIP-11 is valuable for historical context.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">2-of-3 Shared Custody</p>
          <p className="text-sm text-dark-300">
            User holds 2 keys, service holds 1. User can spend alone or with service help.
            Service can't steal funds unilaterally.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">2-of-2 Escrow</p>
          <p className="text-sm text-dark-300">
            Buyer and seller must both agree to release funds. Neither can act alone.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">3-of-5 Corporate Treasury</p>
          <p className="text-sm text-dark-300">
            Requires majority approval from board. Protects against individual compromise
            or unavailability.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The CHECKMULTISIG Bug</h3>

      <p className="mb-4">
        OP_CHECKMULTISIG has a well-known bug requiring an extra dummy element:
      </p>

      <Example title="The Dummy Element">
        <div className="space-y-3 text-dark-300">
          <p>
            Due to an off-by-one error in the original implementation, CHECKMULTISIG
            pops one more element than it uses. This extra element must be provided
            but is ignored.
          </p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm">
            <p className="text-dark-400 mb-1"># Correct (with dummy):</p>
            <p className="text-emerald-400">OP_0 &lt;sig1&gt; &lt;sig2&gt;</p>
            <p className="text-dark-400 mt-2 mb-1"># Invalid (without dummy):</p>
            <p className="text-rose-400">&lt;sig1&gt; &lt;sig2&gt;</p>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            BIP-147 requires the dummy to be OP_0 in SegWit scripts
          </p>
        </div>
      </Example>

      <Callout type="success" title="Foundation for Shared Custody">
        <p>
          Despite its limitations, BIP-11 established the fundamental multisig primitives
          that power Bitcoin's shared custody solutions today. The concepts of M-of-N
          thresholds, ordered signatures, and OP_CHECKMULTISIG remain central to modern
          wallet security.
        </p>
      </Callout>
    </LessonLayout>
  );
}
