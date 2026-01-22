import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Musig2DeepDive() {
  return (
    <TranscriptLayout transcriptId="musig2-deep-dive">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>MuSig2 reduces signing rounds from 3 to 2 compared to MuSig1</li>
          <li>Uses multiple nonces per signer to prevent Wagner's attack without commitments</li>
          <li>Nonces can be pre-shared, enabling non-interactive signing flows</li>
          <li>Security proof in the algebraic group model</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Two-Round Breakthrough</h3>

      <p className="mb-4">
        Jonas Nick explains why reducing from 3 rounds to 2 rounds matters so much:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Three rounds is painful for real applications. Hardware wallets, cold storage,
          geographically distributed signers—every round adds latency and complexity.
          Two rounds is qualitatively different: you can pre-share the first round."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jonas Nick</cite>
      </blockquote>

      <Example title="Round Comparison">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-dark-100 mb-2">MuSig1 (3 rounds)</p>
            <ol className="list-decimal list-inside text-sm space-y-1 text-dark-300">
              <li>Commit to nonce hash</li>
              <li>Reveal nonce</li>
              <li>Exchange signature shares</li>
            </ol>
          </div>
          <div>
            <p className="font-semibold text-cyan-400 mb-2">MuSig2 (2 rounds)</p>
            <ol className="list-decimal list-inside text-sm space-y-1 text-dark-300">
              <li>Exchange nonces (can be pre-shared!)</li>
              <li>Exchange signature shares</li>
            </ol>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why MuSig1 Needs Three Rounds</h3>

      <p className="mb-4">
        The commitment round in MuSig1 prevents a subtle attack:
      </p>

      <Definition title="Wagner's Attack">
        <p>
          If an attacker sees all other signers' nonces <InlineMath>{`R_1, ..., R_{n-1}`}</InlineMath> before
          choosing their own <InlineMath>{`R_n`}</InlineMath>, they can solve a generalized birthday problem
          to find <InlineMath>{`R_n`}</InlineMath> that produces a forgeable aggregate signature.
        </p>
        <p className="mt-2">
          The attack requires ~<InlineMath>2^{32}</InlineMath> work for 128-bit security—feasible!
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig2's Solution: Multiple Nonces</h3>

      <p className="mb-4">
        MuSig2's insight is to have each signer provide multiple nonces:
      </p>

      <Definition title="MuSig2 Nonce Structure">
        <p>
          Each signer <InlineMath>i</InlineMath> generates <InlineMath>{`\\nu`}</InlineMath> nonces
          (typically <InlineMath>{`\\nu = 2`}</InlineMath>):
        </p>
        <MathBlock>
          {`R_i^{(1)}, R_i^{(2)}, ..., R_i^{(\\nu)}`}
        </MathBlock>
        <p className="mt-2">
          The final nonce is a linear combination determined after all nonces are revealed:
        </p>
        <MathBlock>
          {`R = \\sum_j b^{j-1} \\left( \\sum_i R_i^{(j)} \\right)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>b</InlineMath> is derived from all nonces, keys, and the message.
        </p>
      </Definition>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The binding factor <InlineMath>b</InlineMath> depends on the message. An attacker
          who sees nonces can't pre-compute how to combine them maliciously because they
          don't yet know which message will be signed."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jonas Nick</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pre-Sharing Nonces</h3>

      <p className="mb-4">
        The key practical advantage of MuSig2:
      </p>

      <Example title="Non-Interactive Signing">
        <p className="mb-3">
          In a 2-of-2 Lightning channel setup:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>Setup:</strong> Alice and Bob exchange 100 nonce pairs each
          </li>
          <li>
            <strong>Signing:</strong> When a commitment transaction is needed,
            each party computes their signature share locally
          </li>
          <li>
            <strong>Completion:</strong> Exchange signature shares (single round!)
          </li>
        </ol>
        <p className="mt-3 text-dark-400">
          Nonces can be exchanged during quiet periods, making signing effectively
          single-round when needed.
        </p>
      </Example>

      <Callout type="warning" title="Nonce Management is Critical">
        <p>
          Pre-shared nonces must be stored securely and never reused. If the same
          nonce pair is used for two different messages, the private key is exposed.
          Implementations must use persistent, atomic nonce counters.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Model</h3>

      <p className="mb-4">
        Jonas discusses the formal security guarantees:
      </p>

      <Definition title="Algebraic Group Model (AGM)">
        <p>
          MuSig2 is proven secure in the AGM, which assumes adversaries can only
          compute group elements by combining elements they've seen with known
          operations (addition, scalar multiplication).
        </p>
        <p className="mt-2">
          This is weaker than the Random Oracle Model alone, but stronger proofs
          require the Generic Group Model which has known limitations.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Full Protocol</h3>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">MuSig2 Signing Protocol</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nonce Generation</p>
              <p className="text-sm text-dark-400">
                Each signer generates <InlineMath>{`(k_i^{(1)}, k_i^{(2)})`}</InlineMath> and
                computes <InlineMath>{`(R_i^{(1)}, R_i^{(2)})`}</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Nonce Exchange</p>
              <p className="text-sm text-dark-400">
                All signers broadcast their nonce pairs (can be done ahead of time)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Binding Factor</p>
              <p className="text-sm text-dark-400">
                Compute <InlineMath>{`b = H(\\text{nonces} \\| P_{agg} \\| m)`}</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Signature Shares</p>
              <p className="text-sm text-dark-400">
                Each signer computes <InlineMath>{`s_i = k_i^{(1)} + b \\cdot k_i^{(2)} + e \\cdot a_i \\cdot d_i`}</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">5</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Aggregation</p>
              <p className="text-sm text-dark-400">
                Final signature: <InlineMath>{`(R, s = \\sum s_i)`}</InlineMath>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Foundation for MuSig</p>
        </a>
        <a
          href="#/transcript/musig-overview"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            MuSig Overview Transcript
          </p>
          <p className="text-sm text-dark-500">Broader context on key aggregation</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
