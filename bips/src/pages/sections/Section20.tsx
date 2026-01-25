import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">A Better Signature Scheme</h2>

      <p className="mb-4">
        BIP-340 introduces <strong>Schnorr signatures</strong> to Bitcoin—a signature scheme that's
        simpler, more efficient, and more flexible than ECDSA. After decades of being blocked by
        patents, Schnorr finally came to Bitcoin with Taproot.
      </p>

      <Callout type="info" title="Activated: November 2021">
        <p>
          BIP-340 activated as part of Taproot at block 709,632. It applies to SegWit v1
          (Taproot) outputs and represents a fundamental improvement to Bitcoin's cryptographic
          foundation.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Schnorr?</h3>

      <p className="mb-4">
        Schnorr signatures have several advantages over ECDSA:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Provable Security</p>
          <p className="text-sm text-dark-300">
            Schnorr has a formal security proof in the random oracle model. ECDSA's security
            is conjectured but not proven.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Linearity</p>
          <p className="text-sm text-dark-300">
            Signatures can be combined linearly, enabling key aggregation (MuSig) and batch
            verification.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Simpler Math</p>
          <p className="text-sm text-dark-300">
            No modular inverse required for signing. Verification is faster with simpler
            equations.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Compact</p>
          <p className="text-sm text-dark-300">
            64 bytes fixed size (32 for R, 32 for s) vs ECDSA's 71-72 byte DER encoding.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mathematics</h3>

      <p className="mb-4">
        Schnorr signing uses the secp256k1 curve with generator <InlineMath>G</InlineMath>:
      </p>

      <Definition title="Schnorr Signature Scheme">
        <p className="mb-3">Given private key <InlineMath>d</InlineMath> and public key <InlineMath>P = dG</InlineMath>:</p>

        <p className="text-amber-400 font-semibold mb-2">Signing:</p>
        <ol className="list-decimal list-inside space-y-1 text-dark-300 ml-4 mb-4">
          <li>Choose random nonce <InlineMath>k</InlineMath>, compute <InlineMath>R = kG</InlineMath></li>
          <li>Compute <InlineMath>e = H(R \| P \| m)</InlineMath> (challenge)</li>
          <li>Compute <InlineMath>s = k + e \cdot d</InlineMath></li>
          <li>Signature is <InlineMath>(R, s)</InlineMath></li>
        </ol>

        <p className="text-amber-400 font-semibold mb-2">Verification:</p>
        <p className="text-dark-300">
          Check that <InlineMath>sG = R + eP</InlineMath>
        </p>
      </Definition>

      <Example title="Why Verification Works">
        <MathBlock>
          {`sG = (k + ed)G = kG + edG = R + eP \\quad \\checkmark`}
        </MathBlock>
        <p className="text-dark-400 text-sm mt-3">
          The equation holds because scalar multiplication distributes over addition on the curve.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-340 Specifics</h3>

      <p className="mb-4">
        BIP-340 makes specific design choices for Bitcoin:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">X-Only Public Keys</h4>
          <p className="text-dark-300">
            Only the x-coordinate is stored (32 bytes). The y-coordinate is implicitly even.
            This requires key tweaking during signing if the full key has an odd y.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Tagged Hashes</h4>
          <p className="text-dark-300">
            All hashes use domain separation via tags:
          </p>
          <div className="font-mono text-sm mt-2">
            <p className="text-amber-400">
              hash(tag, data) = SHA256(SHA256(tag) || SHA256(tag) || data)
            </p>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            Tags: "BIP0340/challenge", "BIP0340/aux", "BIP0340/nonce"
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-2">Deterministic Nonces</h4>
          <p className="text-dark-300">
            Nonces are derived from the private key, message, and auxiliary randomness.
            Prevents catastrophic nonce reuse (which leaks the private key).
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Format</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># BIP-340 signature (64 bytes)</p>
        <p className="text-dark-300">
          [<span className="text-amber-400">R.x</span>: 32 bytes] [<span className="text-emerald-400">s</span>: 32 bytes]
        </p>
        <p className="text-xs text-dark-500 mt-3">
          No ASN.1/DER encoding. R is x-only (y is even). Both values are big-endian.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Aggregation</h3>

      <p className="mb-4">
        Schnorr's linearity enables <strong>key aggregation</strong>—multiple parties can
        create a single public key that requires all parties to sign:
      </p>

      <Example title="Simple Key Aggregation">
        <div className="space-y-3">
          <p className="text-dark-300">Given public keys <InlineMath>P_1 = d_1G</InlineMath> and <InlineMath>P_2 = d_2G</InlineMath>:</p>
          <MathBlock>
            {`P_{agg} = P_1 + P_2 = (d_1 + d_2)G`}
          </MathBlock>
          <p className="text-dark-400 text-sm">
            A signature on <InlineMath>P_{{agg}}</InlineMath> requires both private keys!
            On-chain, this looks like a single-key spend—perfect privacy.
          </p>
        </div>
      </Example>

      <Callout type="warning" title="MuSig Required">
        <p>
          Naive key aggregation is vulnerable to rogue-key attacks. BIP-327 (MuSig2) defines
          a secure protocol for multi-party signing that prevents these attacks while preserving
          the single-signature appearance.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Batch Verification</h3>

      <p className="mb-4">
        Multiple Schnorr signatures can be verified together more efficiently than individually:
      </p>

      <MathBlock>
        {`\\sum_i s_i G \\stackrel{?}{=} \\sum_i R_i + \\sum_i e_i P_i`}
      </MathBlock>

      <p className="mb-4 text-dark-400">
        This enables faster block validation by verifying all signatures in a transaction (or
        even a block) with fewer elliptic curve operations.
      </p>

      <Callout type="success" title="Foundation for Taproot">
        <p>
          BIP-340 isn't just about signatures—it's the cryptographic foundation for Taproot's
          key path spending and script commitments. Understanding Schnorr is essential for
          understanding how Taproot achieves its privacy and efficiency gains.
        </p>
      </Callout>
    </LessonLayout>
  );
}
