import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Merkelized Alternative Script Trees</h2>

      <p className="mb-4">
        BIP-341 defines <strong>Taproot</strong>—SegWit version 1. Taproot combines Schnorr
        signatures with Merkle trees to create outputs that look identical regardless of their
        complexity, dramatically improving privacy and efficiency for smart contracts.
      </p>

      <Callout type="info" title="Activated: November 14, 2021">
        <p>
          Taproot activated at block 709,632 via Speedy Trial (a modified BIP-9). It was
          Bitcoin's first consensus change since SegWit in 2017, representing years of
          cryptographic research and careful design.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Core Insight</h3>

      <p className="mb-4">
        Most complex scripts have a "happy path"—the cooperative case where all parties agree.
        Taproot optimizes for this:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-amber-400 font-semibold mb-3">Taproot's Key Innovation</p>
        <p className="text-dark-300">
          The output commits to both a <strong>key path</strong> (single signature for cooperation)
          and a <strong>script path</strong> (fallback scripts for disputes). When the key path
          is used, the scripts remain hidden—the spend looks like any single-sig transaction.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Output Structure</h3>

      <p className="mb-4">
        A Taproot output (P2TR) is a SegWit v1 witness program:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># P2TR scriptPubKey</p>
        <p className="text-amber-400">OP_1 &lt;32-byte-output-key&gt;</p>
        <p className="text-xs text-dark-500 mt-3">
          OP_1 indicates SegWit version 1. The 32 bytes are the x-only output key Q.
        </p>
      </div>

      <Definition title="Output Key (Q)">
        <p>
          The output key Q is a tweaked version of the internal key P:
        </p>
        <MathBlock>
          {`Q = P + H(P \\| m) \\cdot G`}
        </MathBlock>
        <p className="mt-2">
          Where <InlineMath>m</InlineMath> is the Merkle root of the script tree (or empty for
          key-path-only outputs). This "commits" the scripts to the public key.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Path Spending</h3>

      <p className="mb-4">
        The simplest way to spend a Taproot output—provide a Schnorr signature:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 mb-6">
        <p className="text-dark-400 mb-2 font-mono text-sm"># Witness for key path</p>
        <p className="font-mono text-sm text-amber-400">&lt;64-byte-schnorr-signature&gt;</p>
        <p className="text-dark-500 text-xs mt-3">
          That's it! Just one signature. No script revealed, no Merkle proof needed.
        </p>
      </div>

      <Example title="Key Path Advantages">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Privacy:</strong> Indistinguishable from single-key spend
          </li>
          <li>
            <strong>Efficiency:</strong> Smallest possible witness (64 bytes)
          </li>
          <li>
            <strong>Multisig invisible:</strong> With MuSig2, even N-of-N looks like 1-of-1
          </li>
          <li>
            <strong>Contracts hidden:</strong> Complex conditions never revealed if unused
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Path Spending</h3>

      <p className="mb-4">
        When cooperation fails, fallback scripts can be revealed:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Witness for script path</p>
        <p className="text-dark-300">&lt;script inputs...&gt;</p>
        <p className="text-amber-400">&lt;script&gt;</p>
        <p className="text-emerald-400">&lt;control block&gt;</p>
        <p className="text-xs text-dark-500 mt-3">
          Control block = leaf version || internal key || Merkle proof
        </p>
      </div>

      <Definition title="MAST (Merkelized Alternative Script Trees)">
        <p>
          Multiple spending conditions are organized in a Merkle tree. Only the path to the
          used script is revealed. Other conditions remain hidden, improving privacy for
          complex contracts.
        </p>
      </Definition>

      <Example title="Script Tree Example">
        <div className="space-y-4">
          <p className="text-dark-300">A Lightning commitment might have these paths:</p>
          <div className="bg-dark-900 rounded-lg p-4 font-mono text-xs">
            <pre className="text-dark-300">{`        [Root]
       /      \\
    [AB]      [CD]
   /    \\    /    \\
  A      B  C      D

A: Alice + Bob (key path via MuSig)
B: Alice after timeout
C: Bob with revocation key
D: HTLC redemption`}</pre>
          </div>
          <p className="text-dark-500 text-sm">
            If Alice and Bob cooperate (path A via key path), B/C/D are never revealed.
            Only a failure mode exposes the used script and its Merkle siblings.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Control Block</h3>

      <p className="mb-4">
        The control block proves a script is committed to by the output:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-xs mb-6">
        <p className="text-dark-400 mb-2"># Control block structure</p>
        <p>
          <span className="text-purple-400">[1 byte: leaf version + parity]</span>
        </p>
        <p>
          <span className="text-amber-400">[32 bytes: internal key P x-coordinate]</span>
        </p>
        <p>
          <span className="text-emerald-400">[32 × k bytes: Merkle proof]</span>
        </p>
        <p className="text-dark-500 mt-3">
          The verifier reconstructs Q from P and the Merkle root, confirming the script is valid.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Tweaking</h3>

      <p className="mb-4">
        The tweak binds scripts to the public key cryptographically:
      </p>

      <MathBlock>
        {`t = \\text{tagged\\_hash}(\\text{"TapTweak"}, P \\| m)`}
      </MathBlock>

      <MathBlock>
        {`Q = P + t \\cdot G`}
      </MathBlock>

      <p className="mb-4 text-dark-400">
        To sign for the key path, the signer computes the tweaked private key:
        <InlineMath>{`q = p + t`}</InlineMath>
      </p>

      <Callout type="info" title="Key-Only Outputs">
        <p>
          For outputs with no script tree (just key path), the tweak uses an empty Merkle root:
          <code className="text-amber-400 ml-2">t = tagged_hash("TapTweak", P)</code>.
          This proves no hidden scripts exist.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits Summary</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Privacy</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Key path hides all scripts</li>
            <li>Multisig looks like single-sig</li>
            <li>Only used script revealed</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Efficiency</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>64-byte key path witness</li>
            <li>Log(n) Merkle proofs</li>
            <li>Batch verification</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Flexibility</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Unlimited script paths</li>
            <li>New opcodes via Tapscript</li>
            <li>Future soft fork hooks</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Security</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Provably secure Schnorr</li>
            <li>Tagged hash separation</li>
            <li>Commitment binding</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="The Modern Standard">
        <p>
          Taproot is increasingly the default for new Bitcoin applications. Its combination
          of privacy, efficiency, and programmability makes it superior to P2WPKH/P2WSH for
          most use cases. Understanding Taproot is essential for modern Bitcoin development.
        </p>
      </Callout>
    </LessonLayout>
  );
}
