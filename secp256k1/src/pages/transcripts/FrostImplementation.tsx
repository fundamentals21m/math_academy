import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function FrostImplementation() {
  return (
    <TranscriptLayout transcriptId="frost-implementation">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>FROST is being implemented in libsecp256k1-zkp</li>
          <li>Distributed key generation is the most complex part</li>
          <li>State management is critical for nonce safety</li>
          <li>Hardware wallet integration requires careful protocol design</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Status</h3>

      <p className="mb-4">
        Jesse Posner and Tim Ruffing discuss bringing FROST to Bitcoin:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "FROST has been a long road. The theory was published in 2020, but getting
          a production-ready implementation with the same security guarantees as our
          MuSig2 code has taken years of careful work."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Architecture Decisions</h3>

      <p className="mb-4">
        Key architectural choices for the libsecp256k1-zkp implementation:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Modular DKG</p>
          <p className="text-sm text-dark-300">
            Key generation is separate from signing. Supports multiple DKG
            protocols including Pedersen DKG and FROST DKG.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Share Format</p>
          <p className="text-sm text-dark-300">
            Standardized share serialization for interoperability between
            wallets and custody solutions.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Coordinator Mode</p>
          <p className="text-sm text-dark-300">
            Optional coordinator for message routing. Coordinator learns nothing
            about the key or signatures.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Constant-Time</p>
          <p className="text-sm text-dark-300">
            All secret-dependent operations are constant-time, following
            libsecp256k1 security principles.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Distributed Key Generation</h3>

      <p className="mb-4">
        Tim Ruffing explains the DKG challenges:
      </p>

      <Definition title="FROST DKG Protocol">
        <p>
          Each party <InlineMath>i</InlineMath> in a <InlineMath>t</InlineMath>-of-<InlineMath>n</InlineMath> setup:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            Generates random polynomial <InlineMath>f_i(x)</InlineMath> of degree <InlineMath>t-1</InlineMath>
          </li>
          <li>
            Broadcasts commitments to coefficients: <InlineMath>{`A_{ik} = a_{ik} G`}</InlineMath>
          </li>
          <li>
            Sends share <InlineMath>f_i(j)</InlineMath> privately to each party <InlineMath>j</InlineMath>
          </li>
          <li>
            Verifies received shares against commitments
          </li>
          <li>
            Computes final share as sum of received shares
          </li>
        </ol>
        <p className="mt-3">
          The group public key is <InlineMath>{`P = \\sum_i A_{i0}`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="DKG Security">
        <p>
          DKG requires a secure broadcast channel to prevent equivocation attacks
          where a malicious party sends different values to different participants.
          In practice, this often means committing messages to a bulletin board.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nonce Management</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Like MuSig2, FROST signing is stateful. You generate nonce commitments,
          then you must use exactly those nonces exactly once. Our API makes it
          impossible to accidentally reuse or skip nonces."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Example title="FROST Signing API">
        <pre className="text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
{`// Pseudocode for FROST signing

// Step 1: Generate nonces (can be done ahead of time)
FrostNonce nonce = frost_nonce_gen(share, session_id);
FrostNonceCommitment commit = frost_nonce_commitment(nonce);
// Share commit with coordinator...

// Step 2: Receive all commitments, create signature share
FrostSigningSession session = frost_sign_init(
    share,
    all_commitments,
    message,
    participant_list
);
FrostPartialSig psig = frost_partial_sign(session, nonce);
// nonce is now consumed!

// Step 3: Coordinator aggregates
FrostSignature sig = frost_partial_sig_agg(
    partial_sigs,
    session
);`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hardware Wallet Support</h3>

      <p className="mb-4">
        Supporting FROST on hardware wallets presents unique challenges:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Hardware Wallet Considerations</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div>
              <p className="text-dark-200 font-medium">State Encryption</p>
              <p className="text-sm text-dark-400">
                Signing state must be encrypted by the hardware wallet and stored
                on the host. Only the HW can decrypt and use it.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div>
              <p className="text-dark-200 font-medium">Share Backup</p>
              <p className="text-sm text-dark-400">
                Key shares need secure backup, potentially using existing seed
                phrase infrastructure with derivation paths.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div>
              <p className="text-dark-200 font-medium">Verification Display</p>
              <p className="text-sm text-dark-400">
                HW must display participant set and message clearly—users need to
                verify they're signing with the expected group.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div>
              <p className="text-dark-200 font-medium">DKG Participation</p>
              <p className="text-sm text-dark-400">
                Hardware wallets may need to participate in DKG, requiring
                multiple interaction rounds during setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Testing and Verification</h3>

      <p className="mb-4">
        The implementation undergoes rigorous testing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Test vectors:</strong> From the FROST specification and IETF draft
        </li>
        <li>
          <strong>Cross-implementation:</strong> Testing against ZCash's FROST implementation
        </li>
        <li>
          <strong>Fuzzing:</strong> Random participant configurations, message orderings
        </li>
        <li>
          <strong>Failure injection:</strong> Simulating malicious or failing participants
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Work</h3>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We're also looking at FROST with adaptor signatures—threshold adaptor
          signatures for DLCs with distributed key management. And proactive secret
          sharing for rotating shares without changing the public key."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/frost-intro"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            FROST Introduction
          </p>
          <p className="text-sm text-dark-500">Protocol overview and theory</p>
        </a>
        <a
          href="#/transcript/musig-implementations"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            Implementing MuSig
          </p>
          <p className="text-sm text-dark-500">Related implementation patterns</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
