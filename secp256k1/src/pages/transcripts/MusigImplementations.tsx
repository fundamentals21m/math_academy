import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function MusigImplementations() {
  return (
    <TranscriptLayout transcriptId="musig-implementations">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>MuSig2 is implemented in libsecp256k1-zkp with a carefully designed API</li>
          <li>State management is the hardest implementation challenge</li>
          <li>The API prevents common footguns like nonce reuse</li>
          <li>Hardware wallet integration requires special considerations</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Challenges</h3>

      <p className="mb-4">
        Jesse Posner discusses the practical difficulties of implementing MuSig safely:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The cryptography is the easy part. The hard part is designing an API that
          makes it impossible—not just difficult—for users to shoot themselves in the
          foot. Nonce reuse is an instant key compromise."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The State Machine</h3>

      <p className="mb-4">
        MuSig2 implementations model signing as a state machine:
      </p>

      <Definition title="MuSig2 Session States">
        <div className="space-y-3 mt-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-dark-200">INITIALIZED</span>
            <span className="text-dark-500">→ Nonces generated, waiting for others</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="text-dark-200">NONCES_RECEIVED</span>
            <span className="text-dark-500">→ All nonces collected, ready to sign</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-dark-200">PARTIAL_SIG_CREATED</span>
            <span className="text-dark-500">→ Our share computed</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span className="text-dark-200">FINALIZED</span>
            <span className="text-dark-500">→ Signature complete, nonces destroyed</span>
          </div>
        </div>
      </Definition>

      <Example title="State Transitions">
        <pre className="text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
{`// Safe API design in libsecp256k1-zkp
musig_session_init()      // → INITIALIZED
musig_nonce_process()     // INITIALIZED → NONCES_RECEIVED
musig_partial_sign()      // NONCES_RECEIVED → PARTIAL_SIG_CREATED
musig_partial_sig_agg()   // → FINALIZED (nonce secrets zeroed!)

// Calling functions out of order returns error
// Attempting to reuse session returns error`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nonce Security</h3>

      <Callout type="danger" title="The Cardinal Rule">
        <p>
          <strong>Never reuse nonces across signing sessions.</strong> The libsecp256k1-zkp
          implementation automatically zeros nonce secrets after signing to prevent
          accidental reuse.
        </p>
      </Callout>

      <p className="mb-4">
        The implementation enforces several safety properties:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Automatic Destruction</p>
          <p className="text-sm text-dark-300">
            Nonce secrets are zeroed after producing a partial signature.
            The session object becomes invalid for further signing.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Deterministic Generation</p>
          <p className="text-sm text-dark-300">
            Nonces derived from private key + session data + counter.
            No reliance on system randomness during signing.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Counter Persistence</p>
          <p className="text-sm text-dark-300">
            Applications must persist nonce counters atomically.
            Crash recovery must not replay old counters.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Session Binding</p>
          <p className="text-sm text-dark-300">
            Each session is bound to specific participants and context.
            Cannot be repurposed for different signing setups.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hardware Wallet Considerations</h3>

      <p className="mb-4">
        Jesse discusses special challenges for hardware wallet implementations:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Hardware wallets are stateless by design—you can unplug at any moment.
          But MuSig2 requires maintaining state across rounds. We had to design
          protocols where the host computer holds encrypted state that only the
          hardware wallet can decrypt."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jesse Posner</cite>
      </blockquote>

      <Example title="Hardware Wallet MuSig2 Flow">
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>HW generates nonces, encrypts state, returns to host</li>
          <li>Host collects all nonces, sends back with encrypted state</li>
          <li>HW decrypts state, verifies consistency, produces partial sig</li>
          <li>HW destroys state, returns partial signature</li>
        </ol>
        <p className="mt-3 text-dark-400">
          The encryption key never leaves the hardware wallet, preventing
          state tampering by compromised host software.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Testing Strategy</h3>

      <p className="mb-4">
        The implementation uses extensive testing:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>
          <strong>Unit tests:</strong> Each state transition and error condition
        </li>
        <li>
          <strong>Fuzzing:</strong> Random API call sequences to find state machine bugs
        </li>
        <li>
          <strong>Cross-implementation:</strong> Test against Python/Rust implementations
        </li>
        <li>
          <strong>Known-answer tests:</strong> Verify against test vectors from the spec
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">API Example</h3>

      <Example title="Basic MuSig2 Usage">
        <pre className="text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
{`// Simplified pseudocode
KeyAggCtx keyagg = musig_pubkey_agg(pubkeys);
PubKey agg_pk = musig_pubkey_get(keyagg);

// Round 1: Generate and share nonces
SecNonce secnonce;
PubNonce pubnonce;
musig_nonce_gen(&secnonce, &pubnonce, session_id,
                privkey, agg_pk, msg);
// Share pubnonce with other signers...

// Round 2: Sign
AggrNonce aggnonce = musig_nonce_agg(pubnonces);
Session session;
musig_nonce_process(&session, aggnonce, msg, keyagg);

PartialSig psig;
musig_partial_sign(&psig, &secnonce, privkey,
                   keyagg, session);
// secnonce is now zeroed!

// Aggregate
Sig sig = musig_partial_sig_agg(psigs, session);`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/musig-overview"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            MuSig Overview
          </p>
          <p className="text-sm text-dark-500">Theoretical foundations</p>
        </a>
        <a
          href="#/transcript/musig2-deep-dive"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-cyan-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-cyan-400 transition-colors">
            MuSig2 Deep Dive
          </p>
          <p className="text-sm text-dark-500">Protocol details</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
