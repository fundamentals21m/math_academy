import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function AdaptorIntro() {
  return (
    <TranscriptLayout transcriptId="adaptor-intro">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Adaptor signatures are "incomplete" signatures locked by a secret</li>
          <li>Completing an adaptor reveals the secret to the original creator</li>
          <li>Enable trustless atomic swaps without hash time-locks</li>
          <li>Foundation for "scriptless scripts" that move logic off-chain</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What Are Adaptor Signatures?</h3>

      <p className="mb-4">
        Lloyd Fournier introduces the concept of adaptor signatures:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "An adaptor signature is a promise: 'I'll give you a valid signature if you
          reveal a secret to me.' But it's cryptographically binding—once the secret
          is revealed through usage, I learn it automatically."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Lloyd Fournier</cite>
      </blockquote>

      <Definition title="Adaptor Signature">
        <p>
          An adaptor signature for public key <InlineMath>P</InlineMath> on message <InlineMath>m</InlineMath>,
          locked by adaptor point <InlineMath>T = tG</InlineMath>:
        </p>
        <MathBlock>
          {`\\hat{\\sigma} = (R + T, \\hat{s})`}
        </MathBlock>
        <p className="mt-2">Where:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>R = kG</InlineMath> is the nonce point</li>
          <li><InlineMath>{`\\hat{s} = k + H(R + T \\| P \\| m) \\cdot d`}</InlineMath> is the adaptor scalar</li>
        </ul>
        <p className="mt-3">
          This verifies as: <InlineMath>{`\\hat{s}G = R + T + eP`}</InlineMath> but is <em>not</em> a valid signature.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Extraction Property</h3>

      <p className="mb-4">
        The key insight is what happens when the adaptor is completed:
      </p>

      <Example title="Secret Extraction">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">Completing the Adaptor</p>
            <p className="text-sm text-dark-300 mt-1">
              Someone who knows <InlineMath>t</InlineMath> can compute the valid signature:
            </p>
            <MathBlock>
              {`s = \\hat{s} + t`}
            </MathBlock>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Extracting the Secret</p>
            <p className="text-sm text-dark-300 mt-1">
              Anyone with both the adaptor <InlineMath>{`\\hat{\\sigma}`}</InlineMath> and
              completed signature <InlineMath>{`\\sigma`}</InlineMath> can extract:
            </p>
            <MathBlock>
              {`t = s - \\hat{s}`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Atomic Swap Protocol</h3>

      <p className="mb-4">
        Lloyd walks through a trustless cross-chain atomic swap:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Alice (BTC) ↔ Bob (LTC) Swap</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Setup</p>
              <p className="text-sm text-dark-400">
                Alice generates secret <InlineMath>t</InlineMath>, shares <InlineMath>T = tG</InlineMath> with Bob
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Bob's BTC Side</p>
              <p className="text-sm text-dark-400">
                Bob creates tx sending 1 BTC to Alice, gives her adaptor signature locked by <InlineMath>T</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Alice's LTC Side</p>
              <p className="text-sm text-dark-400">
                Alice creates tx sending 10 LTC to Bob, gives him adaptor signature locked by <InlineMath>T</InlineMath>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 font-bold">4</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Alice Claims BTC</p>
              <p className="text-sm text-dark-400">
                Alice completes Bob's adaptor using <InlineMath>t</InlineMath>, broadcasts to claim BTC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 font-bold">5</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Bob Claims LTC</p>
              <p className="text-sm text-dark-400">
                Bob sees Alice's completed sig, extracts <InlineMath>t</InlineMath>, completes his adaptor, claims LTC
              </p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="info" title="Atomicity">
        <p>
          If Alice doesn't claim the BTC (revealing <InlineMath>t</InlineMath>), Bob can't claim
          the LTC either. If Alice does claim, Bob can always extract <InlineMath>t</InlineMath>
          from the blockchain and complete his side. The swap is atomic!
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantages Over HTLCs</h3>

      <p className="mb-4">
        Compared to traditional hash time-locked contracts:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Privacy</p>
          <p className="text-sm text-dark-300">
            No hash preimage visible on-chain. Both sides look like regular
            single-sig spends.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Efficiency</p>
          <p className="text-sm text-dark-300">
            Smaller transactions—no OP_HASH160 or script conditions needed.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Unlinkability</p>
          <p className="text-sm text-dark-300">
            Different adaptors can use independent secrets, making swaps
            unlinkable across chains.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">No Timeout Complexity</p>
          <p className="text-sm text-dark-300">
            HTLCs require careful timeout coordination. Adaptors don't have
            this constraint (though timeouts can still be added).
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scriptless Scripts</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The term 'scriptless scripts' captures the idea: we're achieving what
          Bitcoin Script does—conditional payments—but without any script on-chain.
          The conditions are enforced purely through signature algebra."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Lloyd Fournier</cite>
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
          <p className="text-sm text-dark-500">Foundation for adaptor signatures</p>
        </a>
        <a
          href="#/transcript/adaptor-applications"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            Adaptor Signatures for DLCs
          </p>
          <p className="text-sm text-dark-500">Advanced applications</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
