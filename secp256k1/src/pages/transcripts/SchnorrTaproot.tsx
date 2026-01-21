import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function SchnorrTaproot() {
  return (
    <TranscriptLayout transcriptId="schnorr-taproot">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>BIP340 defines Schnorr signatures for Bitcoin with specific encoding choices</li>
          <li>Taproot (BIP341) uses Schnorr to enable script path hiding</li>
          <li>x-only public keys save 1 byte and simplify key aggregation</li>
          <li>Tagged hashes prevent cross-protocol attacks</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP340: Bitcoin's Schnorr Standard</h3>

      <p className="mb-4">
        Pieter Wuille walks through the design decisions that shaped BIP340:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We had a clean slate. Unlike ECDSA which was constrained by existing standards,
          we could make Schnorr exactly right for Bitcoin. Every byte, every hash—all
          optimized for our use case."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <Definition title="BIP340 Schnorr Signature">
        <p>For private key <InlineMath>d</InlineMath>, public key <InlineMath>P = dG</InlineMath>, message <InlineMath>m</InlineMath>:</p>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>Generate deterministic nonce <InlineMath>k</InlineMath> from <InlineMath>d</InlineMath> and <InlineMath>m</InlineMath></li>
          <li>Compute <InlineMath>R = kG</InlineMath>, ensure <InlineMath>R</InlineMath> has even y-coordinate</li>
          <li>Compute <InlineMath>{`e = H_{\\text{BIP340/challenge}}(R_x \\| P_x \\| m)`}</InlineMath></li>
          <li>Compute <InlineMath>s = k + ed</InlineMath></li>
          <li>Signature is <InlineMath>(R_x, s)</InlineMath> — exactly 64 bytes</li>
        </ol>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">X-Only Public Keys</h3>

      <p className="mb-4">
        One of BIP340's innovations is using only the x-coordinate of public keys:
      </p>

      <Example title="Why X-Only Keys?">
        <p className="mb-3">
          For any x-coordinate on secp256k1, there are exactly two valid y-coordinates
          (one even, one odd). BIP340 implicitly uses the even one.
        </p>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-dark-100">Space Savings</p>
            <p className="text-sm text-dark-300 mt-1">
              32 bytes instead of 33 (compressed) or 65 (uncompressed)
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Simpler Key Aggregation</p>
            <p className="text-sm text-dark-300 mt-1">
              No need to track or communicate y-coordinate parity during MuSig
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Implementation Clarity</p>
            <p className="text-sm text-dark-300 mt-1">
              "Always even y" is a simple, consistent rule
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tagged Hashes</h3>

      <p className="mb-4">
        BIP340 introduces tagged hashes to prevent domain separation attacks:
      </p>

      <Definition title="Tagged Hash Construction">
        <MathBlock>
          {`H_{\\text{tag}}(x) = \\text{SHA256}(\\text{SHA256}(\\text{tag}) \\| \\text{SHA256}(\\text{tag}) \\| x)`}
        </MathBlock>
        <p className="mt-3">
          By including the tag hash twice, we ensure that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Different protocols can't reuse each other's hashes</li>
          <li>A signature challenge can't collide with a nonce derivation</li>
          <li>The tag prefix can be precomputed for efficiency</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Taproot: Script Path Hiding</h3>

      <p className="mb-4">
        Pieter explains how Schnorr enables Taproot's privacy features:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The key insight is that a public key can commit to a script without revealing it.
          If all parties agree, they just sign with the key—the script is never exposed.
          Only when there's disagreement does the script appear on-chain."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <Definition title="Taproot Output Structure">
        <p>A Taproot output commits to:</p>
        <MathBlock>
          {`Q = P + H_{\\text{TapTweak}}(P \\| \\text{merkle\\_root}) \\cdot G`}
        </MathBlock>
        <p className="mt-3">Where:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>P</InlineMath> is the internal public key (for key-path spend)</li>
          <li><InlineMath>{`\\text{merkle\\_root}`}</InlineMath> commits to a tree of script alternatives</li>
          <li>The tweak binds the key to the scripts without revealing them</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Spending Paths</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Key Path (Happy Path)</p>
          <p className="text-sm text-dark-300">
            All parties sign with the tweaked key. On-chain, this looks identical to
            a single-sig spend. Maximum privacy.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Script Path (Fallback)</p>
          <p className="text-sm text-dark-300">
            Reveal one script from the Merkle tree plus a proof. Used when key-path
            signing isn't possible (e.g., uncooperative party).
          </p>
        </div>
      </div>

      <Callout type="info" title="Privacy Implications">
        <p>
          In the common case where everyone cooperates, Taproot transactions are
          indistinguishable from simple single-key spends. Complex multisig setups,
          timelocks, and hash locks all look the same on-chain when the key path is used.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Batch Verification</h3>

      <p className="mb-4">
        Schnorr's linearity enables efficient batch verification of multiple signatures:
      </p>

      <Example title="Batch Verification Performance">
        <p className="mb-3">
          When verifying <InlineMath>n</InlineMath> signatures:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Method</th>
              <th className="pb-2">Operations</th>
              <th className="pb-2">Relative Cost</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Individual</td>
              <td><InlineMath>2n</InlineMath> point multiplications</td>
              <td>1.0x</td>
            </tr>
            <tr>
              <td className="py-2">Batch</td>
              <td>1 multi-scalar multiplication</td>
              <td className="text-cyan-400">~0.5x for large <InlineMath>n</InlineMath></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          For block validation with thousands of signatures, this is a major speedup.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Mathematical foundations</p>
        </a>
        <a
          href="#/section/9"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 9: Advanced Topics
          </p>
          <p className="text-sm text-dark-500">Taproot and beyond</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
