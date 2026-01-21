import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function FrostIntro() {
  return (
    <TranscriptLayout transcriptId="frost-intro">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>FROST enables t-of-n threshold Schnorr signatures</li>
          <li>Uses Shamir secret sharing for key distribution</li>
          <li>Two-round signing protocol (like MuSig2)</li>
          <li>Output signatures are indistinguishable from single-signer Schnorr</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is FROST?</h3>

      <p className="mb-4">
        Jesse Posner introduces FROST (Flexible Round-Optimized Schnorr Threshold):
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "FROST is to threshold signatures what MuSig2 is to multi-signatures.
          It's the practical, round-efficient protocol that makes t-of-n signing
          actually usable. A 2-of-3 FROST signature looks exactly like Alice signing
          alone."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <Definition title="Threshold Signature">
        <p>
          A <InlineMath>t</InlineMath>-of-<InlineMath>n</InlineMath> threshold signature scheme allows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Key generation distributing shares among <InlineMath>n</InlineMath> parties</li>
          <li>Any <InlineMath>t</InlineMath> parties to collaboratively sign</li>
          <li>Fewer than <InlineMath>t</InlineMath> parties learn nothing about the key</li>
        </ul>
        <p className="mt-3">
          The resulting signature is indistinguishable from a regular signature.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Generation with Shamir</h3>

      <p className="mb-4">
        FROST uses Shamir Secret Sharing for distributing the signing key:
      </p>

      <Definition title="Shamir Secret Sharing">
        <p>
          To share secret <InlineMath>s</InlineMath> with threshold <InlineMath>t</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Choose random polynomial <InlineMath>{`f(x) = s + a_1 x + a_2 x^2 + ... + a_{t-1} x^{t-1}`}</InlineMath></li>
          <li>Give party <InlineMath>i</InlineMath> the share <InlineMath>f(i)</InlineMath></li>
        </ol>
        <p className="mt-3">
          Any <InlineMath>t</InlineMath> shares can reconstruct <InlineMath>s</InlineMath> via
          Lagrange interpolation. Fewer shares reveal nothing (information-theoretic security).
        </p>
      </Definition>

      <Example title="2-of-3 Key Generation">
        <p className="mb-3">
          To create a 2-of-3 FROST key among Alice, Bob, Carol:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Choose secret <InlineMath>d</InlineMath> (private key), random <InlineMath>a_1</InlineMath>
          </li>
          <li>
            Polynomial: <InlineMath>{`f(x) = d + a_1 x`}</InlineMath> (degree 1 for threshold 2)
          </li>
          <li>
            Shares: Alice gets <InlineMath>f(1)</InlineMath>, Bob gets <InlineMath>f(2)</InlineMath>,
            Carol gets <InlineMath>f(3)</InlineMath>
          </li>
          <li>
            Public key: <InlineMath>P = dG</InlineMath> (same as regular Schnorr)
          </li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Distributed Key Generation</h3>

      <p className="mb-4">
        In practice, no single party should know the full secret:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "FROST uses Pedersen DKG—each party contributes randomness, and the final
          key is the sum of all contributions. No one ever sees the full private key,
          not even during setup. It only exists 'virtually' as the sum of shares."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Signing Protocol</h3>

      <p className="mb-4">
        FROST signing with <InlineMath>t</InlineMath> participants:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">FROST Signing Rounds</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nonce Generation</p>
              <p className="text-sm text-dark-400">
                Each signer generates nonce pair <InlineMath>(d_i, e_i)</InlineMath>,
                broadcasts commitments <InlineMath>(D_i, E_i)</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Signature Share</p>
              <p className="text-sm text-dark-400">
                Compute binding factor <InlineMath>{`\\rho_i`}</InlineMath>, aggregate nonce <InlineMath>R</InlineMath>,
                then signature share:
              </p>
              <MathBlock>
                {`z_i = d_i + e_i \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}
              </MathBlock>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Aggregation</p>
              <p className="text-sm text-dark-400">
                Sum all shares: <InlineMath>{`z = \\sum z_i`}</InlineMath>.
                Final signature is <InlineMath>(R, z)</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Definition title="Lagrange Coefficients">
        <p>
          The <InlineMath>{`\\lambda_i`}</InlineMath> in FROST are Lagrange coefficients that enable
          reconstructing the secret at <InlineMath>x = 0</InlineMath> from shares at positions
          <InlineMath>{`\\{i_1, ..., i_t\\}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\lambda_i = \\prod_{j \\neq i} \\frac{j}{j - i}`}
        </MathBlock>
        <p className="mt-2">
          These weights ensure the signature shares combine correctly.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">FROST vs ROAST</h3>

      <p className="mb-4">
        Jesse compares FROST to the alternative ROAST protocol:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">FROST</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Two rounds with pre-sharing</li>
            <li>• Simpler protocol</li>
            <li>• Requires honest majority online</li>
            <li>• Better for small groups</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold mb-2">ROAST</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Wrapper around FROST</li>
            <li>• Handles malicious abort</li>
            <li>• Guaranteed termination</li>
            <li>• Better for large groups</li>
          </ul>
        </div>
      </div>

      <Callout type="info" title="When to Use FROST">
        <p>
          FROST is ideal for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Corporate multisig (3-of-5 board members)</li>
          <li>Personal backup (2-of-3 with geographic distribution)</li>
          <li>Lightning node hot wallets (lower threshold for speed)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/frost-implementation"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            Implementing FROST for Bitcoin
          </p>
          <p className="text-sm text-dark-500">Practical implementation details</p>
        </a>
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Foundation for FROST</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
