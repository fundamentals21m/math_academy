import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function MusigOverview() {
  return (
    <TranscriptLayout transcriptId="musig-overview">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>MuSig enables n-of-n multi-signatures that look like single signatures</li>
          <li>Key aggregation must be done carefully to prevent rogue key attacks</li>
          <li>MuSig2 reduces the signing protocol from 3 rounds to 2 rounds</li>
          <li>Proper nonce handling is critical for security</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Multi-Signature Problem</h3>

      <p className="mb-4">
        Tim Ruffing opens by explaining why naive multi-signatures don't work:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "You might think multi-signatures are simple: just add public keys together
          and add signatures together. But this creates a devastating attack where
          one party can control the aggregate key."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="Rogue Key Attack">
        <p>
          If Alice has public key <InlineMath>P_A</InlineMath> and Bob chooses{' '}
          <InlineMath>{`P_B = P_B' - P_A`}</InlineMath> for some key he knows, then:
        </p>
        <MathBlock>
          {`P_{agg} = P_A + P_B = P_A + (P_B' - P_A) = P_B'`}
        </MathBlock>
        <p className="mt-2">
          Bob now fully controls the aggregate key! He can sign without Alice's participation.
          MuSig solves this through <em>key aggregation coefficients</em>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig Key Aggregation</h3>

      <p className="mb-4">
        Jonas Nick explains how MuSig prevents rogue key attacks:
      </p>

      <Example title="Secure Key Aggregation">
        <p className="mb-3">For public keys <InlineMath>P_1, ..., P_n</InlineMath>:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Compute <InlineMath>{`L = H(P_1 \\| ... \\| P_n)`}</InlineMath> (the key set hash)
          </li>
          <li>
            For each key, compute coefficient <InlineMath>{`a_i = H(L \\| P_i)`}</InlineMath>
          </li>
          <li>
            Aggregate key: <InlineMath>{`P_{agg} = \\sum a_i P_i`}</InlineMath>
          </li>
        </ol>
        <p className="mt-3 text-dark-400">
          Now Bob can't choose <InlineMath>P_B</InlineMath> to cancel Alice's key because
          the coefficients depend on <em>all</em> keys, including <InlineMath>P_B</InlineMath> itself.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Original MuSig Protocol</h3>

      <p className="mb-4">
        The original MuSig (now called MuSig1) requires <strong>three rounds</strong> of communication:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">MuSig1 Signing Rounds</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nonce Commitment</p>
              <p className="text-sm text-dark-400">
                Each signer generates nonce <InlineMath>k_i</InlineMath>, computes{' '}
                <InlineMath>R_i = k_i G</InlineMath>, and broadcasts{' '}
                <InlineMath>H(R_i)</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nonce Reveal</p>
              <p className="text-sm text-dark-400">
                After receiving all commitments, each signer reveals <InlineMath>R_i</InlineMath>.
                Others verify commitments match.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Signature Share</p>
              <p className="text-sm text-dark-400">
                Compute <InlineMath>{`R = \\sum R_i`}</InlineMath>, challenge{' '}
                <InlineMath>e = H(R \| P_{agg} \| m)</InlineMath>, and signature share{' '}
                <InlineMath>s_i = k_i + e \cdot a_i \cdot d_i</InlineMath>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Why Three Rounds?">
        <p>
          The commitment round prevents a <strong>Wagner's attack</strong> where an attacker
          who sees other nonces first can choose their nonce to forge signatures. Committing
          before revealing ensures no one can manipulate the aggregate nonce.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig2: Two Rounds</h3>

      <p className="mb-4">
        Tim Ruffing explains the breakthrough that enabled MuSig2:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Instead of one nonce, each signer generates multiple nonces. The final nonce
          is a random linear combination of all nonces, determined after they're revealed.
          This eliminates the commitment round while maintaining security."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="MuSig2 Construction">
        <p>
          Each signer generates <InlineMath>{`\\nu`}</InlineMath> nonces{' '}
          <InlineMath>{`R_i^{(1)}, ..., R_i^{(\\nu)}`}</InlineMath> (typically <InlineMath>{`\\nu = 2`}</InlineMath>).
        </p>
        <p className="mt-2">
          After receiving all nonces, compute binding coefficient:
        </p>
        <MathBlock>
          {`b = H(R^{(1)} \\| ... \\| R^{(\\nu)} \\| P_{agg} \\| m)`}
        </MathBlock>
        <p className="mt-2">
          Final aggregate nonce: <InlineMath>{`R = \\sum_j b^{j-1} R^{(j)}`}</InlineMath>
        </p>
        <p className="mt-2 text-dark-400">
          The binding coefficient depends on the message, preventing the attacker from
          pre-computing how to manipulate the aggregate.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nonce State Management</h3>

      <p className="mb-4">
        Jonas Nick emphasizes the critical importance of proper nonce handling:
      </p>

      <Callout type="danger" title="Nonce Reuse is Catastrophic">
        <p className="mb-2">
          <strong>Never reuse nonces across signing sessions.</strong> If the same nonce
          is used with two different messages, the private key can be extracted:
        </p>
        <MathBlock>
          {`d_i = \\frac{s_i^{(1)} - s_i^{(2)}}{a_i(e^{(1)} - e^{(2)})}`}
        </MathBlock>
        <p className="mt-2">
          MuSig implementations must use secure state management to track which nonces
          have been used.
        </p>
      </Callout>

      <Example title="Safe Nonce Generation Strategies">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Randomness:</strong> Generate fresh random nonces for each session.
            Requires good entropy source.
          </li>
          <li>
            <strong>Counter-based:</strong> Derive nonce from private key + counter.
            Counter must be persisted securely.
          </li>
          <li>
            <strong>Session-bound:</strong> Include session ID in nonce derivation.
            Prevents cross-session reuse.
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Applications</h3>

      <p className="mb-4">
        The panel discusses practical applications of MuSig:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Bitcoin Multisig</p>
          <p className="text-sm text-dark-300">
            n-of-n multisig that looks like a single-key output on-chain. Saves
            space and improves privacy.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Lightning Channels</p>
          <p className="text-sm text-dark-300">
            Two-party channels with 2-of-2 MuSig outputs. Channel opens/closes
            are indistinguishable from regular spends.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Taproot Key Paths</p>
          <p className="text-sm text-dark-300">
            Combined with Taproot, multiple parties can share a key-path spend
            with complete on-chain privacy.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Federated Sidechains</p>
          <p className="text-sm text-dark-300">
            Federation members can sign withdrawals with MuSig, presenting a
            single signature on the main chain.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Status</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "MuSig2 is now available in libsecp256k1-zkp with a stable API. We've been
          extremely careful about the state machine—users can't accidentally reuse
          nonces or skip security checks."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jonas Nick</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">The foundation for MuSig</p>
        </a>
        <a
          href="#/section/9"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 9: Advanced Topics
          </p>
          <p className="text-sm text-dark-500">Multi-party protocols and beyond</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
