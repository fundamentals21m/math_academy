import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function SchnorrApplications() {
  return (
    <TranscriptLayout transcriptId="schnorr-applications">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Schnorr's linearity enables multi-signatures, threshold signatures, and adaptor signatures</li>
          <li>MuSig allows n-of-n multisig with a single on-chain signature</li>
          <li>FROST enables t-of-n threshold signing without trusted setup</li>
          <li>Adaptor signatures enable trustless atomic swaps</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Power of Linearity</h3>

      <p className="mb-4">
        Tim Ruffing explains why Schnorr's mathematical structure opens up possibilities
        that ECDSA cannot achieve:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "ECDSA signatures involve a modular inverse, which destroys any linear structure.
          Schnorr is just multiplication and addition—operations that combine nicely.
          This is why you can add Schnorr signatures but not ECDSA signatures."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="Signature Linearity">
        <p>
          For Schnorr signatures <InlineMath>(R_1, s_1)</InlineMath> and <InlineMath>(R_2, s_2)</InlineMath>
          with the same challenge:
        </p>
        <MathBlock>
          {`(R_1 + R_2, s_1 + s_2)`}
        </MathBlock>
        <p className="mt-2">
          is a valid signature for the sum of the public keys. This enables:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Key aggregation (MuSig)</li>
          <li>Signature aggregation (cross-input)</li>
          <li>Adaptor signatures (conditional release)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multi-Signatures (MuSig)</h3>

      <p className="mb-4">
        The most immediate application is n-of-n multi-signatures:
      </p>

      <Example title="MuSig in Practice">
        <p className="mb-3">
          Consider a 3-of-3 corporate treasury with Alice, Bob, and Carol:
        </p>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-dark-100">Traditional Multisig</p>
            <p className="text-sm text-dark-300 mt-1">
              On-chain: 3 public keys + 3 signatures ≈ 200+ bytes
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">MuSig</p>
            <p className="text-sm text-dark-300 mt-1">
              On-chain: 1 aggregated key + 1 signature = 96 bytes
              <span className="text-cyan-400 ml-2">50%+ savings</span>
            </p>
          </div>
        </div>
        <p className="mt-3 text-dark-400">
          Better yet, the MuSig output is indistinguishable from a single-key output,
          improving privacy.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Threshold Signatures (FROST)</h3>

      <p className="mb-4">
        For t-of-n signing, FROST (Flexible Round-Optimized Schnorr Threshold) is the solution:
      </p>

      <Definition title="FROST Protocol">
        <p>
          FROST enables <InlineMath>t</InlineMath>-of-<InlineMath>n</InlineMath> threshold signing where:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Any <InlineMath>t</InlineMath> participants can produce a valid signature</li>
          <li>Fewer than <InlineMath>t</InlineMath> learn nothing about the signing key</li>
          <li>The signature is indistinguishable from a single-signer Schnorr signature</li>
        </ul>
        <p className="mt-3">
          Key generation uses Shamir secret sharing; signing uses a two-round protocol.
        </p>
      </Definition>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "FROST finally gives us practical threshold signatures for Bitcoin. A 2-of-3
          setup produces a signature that looks exactly like someone spending from a
          single key. No one can tell it's a multisig."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Adaptor Signatures</h3>

      <p className="mb-4">
        Perhaps the most powerful application is adaptor signatures for atomic swaps:
      </p>

      <Definition title="Adaptor Signature">
        <p>
          An adaptor signature <InlineMath>(R', s')</InlineMath> is an "incomplete" signature that requires
          knowledge of a secret <InlineMath>t</InlineMath> to complete:
        </p>
        <MathBlock>
          {`R' = R + T \\quad \\text{where} \\quad T = tG`}
        </MathBlock>
        <p className="mt-2">
          Given the adaptor and the completed signature <InlineMath>(R, s)</InlineMath>, anyone can
          extract <InlineMath>t = s - s'</InlineMath>.
        </p>
      </Definition>

      <Example title="Atomic Swap with Adaptor Signatures">
        <p className="mb-3">
          Alice wants to buy 1 BTC from Bob for 10 LTC:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Alice creates secret <InlineMath>t</InlineMath> and shares <InlineMath>T = tG</InlineMath></li>
          <li>Bob creates BTC transaction, gives Alice adaptor signature (locked by <InlineMath>T</InlineMath>)</li>
          <li>Alice creates LTC transaction, gives Bob adaptor signature (locked by same <InlineMath>T</InlineMath>)</li>
          <li>Alice completes Bob's BTC adaptor using <InlineMath>t</InlineMath>, broadcasts to claim BTC</li>
          <li>Bob sees the completed signature, extracts <InlineMath>t</InlineMath>, completes his LTC adaptor</li>
        </ol>
        <p className="mt-3 text-dark-400">
          Either both transactions complete or neither does—atomic!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Blind Signatures</h3>

      <p className="mb-4">
        Schnorr also enables blind signatures for privacy applications:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-cyan-400 font-bold mb-2">Blind Signature Protocol</p>
        <p className="text-sm text-dark-300">
          The signer produces a valid signature on message <InlineMath>m</InlineMath> without
          learning <InlineMath>m</InlineMath>. The user "blinds" the message before sending,
          then "unblinds" the signature after receiving it.
        </p>
        <p className="text-sm text-dark-400 mt-2">
          Applications: anonymous credentials, e-cash, private authentication
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cross-Input Signature Aggregation</h3>

      <Callout type="info" title="Future Possibility">
        <p>
          A potential future soft fork could enable aggregating signatures across all
          inputs in a transaction. A transaction with 100 inputs would have just one
          64-byte signature instead of 100 signatures.
        </p>
        <p className="mt-2">
          This requires solving the "half-aggregation" problem and careful protocol design.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">The mathematical foundation</p>
        </a>
        <a
          href="#/section/9"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 9: Advanced Topics
          </p>
          <p className="text-sm text-dark-500">Multi-party protocols</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
