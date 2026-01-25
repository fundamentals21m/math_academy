import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Eliminating Signature Malleability</h2>

      <p className="mb-4">
        BIP-66 requires all ECDSA signatures in Bitcoin to use strict DER encoding. This soft fork
        eliminated a source of transaction malleability and simplified signature validation across
        implementations.
      </p>

      <Callout type="info" title="Activated: July 2015">
        <p>
          BIP-66 activated at block 363,725 via IsSuperMajority, requiring block version 3 or higher.
          It was the third major soft fork using this activation mechanism.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Malleability Problem</h3>

      <p className="mb-4">
        Before BIP-66, ECDSA signature encoding was loosely enforced. OpenSSL (which Bitcoin Core
        originally used) accepted various non-canonical encodings:
      </p>

      <Definition title="DER Encoding">
        <p>
          Distinguished Encoding Rules (DER) is a strict binary encoding for ASN.1 data structures.
          For ECDSA signatures, it specifies exactly how the r and s values should be serialized
          with no ambiguity.
        </p>
      </Definition>

      <p className="mb-4">
        The problems with loose encoding:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li><strong>Multiple encodings:</strong> The same signature could be encoded differently</li>
        <li><strong>Transaction ID changes:</strong> Re-encoding changed the txid</li>
        <li><strong>Malleability:</strong> Third parties could modify transactions in flight</li>
        <li><strong>Implementation bugs:</strong> Different libraries behaved differently</li>
      </ul>

      <Example title="Signature Malleability Attack">
        <div className="space-y-3 text-dark-300">
          <p>1. Alice broadcasts a transaction with txid <code className="text-amber-400">abc123...</code></p>
          <p>2. Attacker sees unconfirmed tx, re-encodes signature (same cryptographic validity)</p>
          <p>3. New encoding has different txid <code className="text-amber-400">def456...</code></p>
          <p>4. If attacker's version confirms, Alice's wallet shows "failed" for abc123</p>
          <p>5. Alice might think payment failed and resend—double spending risk</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Strict DER Format</h3>

      <p className="mb-4">
        A valid DER-encoded ECDSA signature has this exact structure:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6 overflow-x-auto">
        <p className="text-dark-400 mb-2"># DER Signature Structure</p>
        <p className="mb-1">
          <span className="text-purple-400">0x30</span>{' '}
          <span className="text-dark-400">[total_length]</span>
        </p>
        <p className="mb-1 ml-4">
          <span className="text-blue-400">0x02</span>{' '}
          <span className="text-dark-400">[r_length]</span>{' '}
          <span className="text-amber-400">[r_value]</span>
        </p>
        <p className="ml-4">
          <span className="text-blue-400">0x02</span>{' '}
          <span className="text-dark-400">[s_length]</span>{' '}
          <span className="text-emerald-400">[s_value]</span>
        </p>
        <p className="text-xs text-dark-500 mt-3">
          0x30 = SEQUENCE tag, 0x02 = INTEGER tag
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-66 Rules</h3>

      <p className="mb-4">
        BIP-66 enforces these specific rules for all signatures:
      </p>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-dark-300">
            <strong>1.</strong> Signature must be a properly-formed DER encoding
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-dark-300">
            <strong>2.</strong> r and s must be positive integers (no leading 0x00 unless high bit set)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-dark-300">
            <strong>3.</strong> r and s must use minimum-length encoding
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-dark-300">
            <strong>4.</strong> Length bytes must exactly match actual content length
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-dark-300">
            <strong>5.</strong> No extra bytes after the signature data
          </p>
        </div>
      </div>

      <Example title="Valid vs Invalid Encoding">
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="text-emerald-400 mb-1">✓ Valid: Minimal encoding</p>
            <p className="text-dark-400">30 44 02 20 [32-byte r] 02 20 [32-byte s]</p>
          </div>
          <div>
            <p className="text-rose-400 mb-1">✗ Invalid: Unnecessary leading zero</p>
            <p className="text-dark-400">30 45 02 21 00 [32-byte r] 02 20 [32-byte s]</p>
            <p className="text-xs text-dark-500">(Extra 0x00 when r doesn't have high bit set)</p>
          </div>
          <div>
            <p className="text-rose-400 mb-1">✗ Invalid: Wrong length byte</p>
            <p className="text-dark-400">30 45 02 20 [32-byte r] 02 20 [32-byte s]</p>
            <p className="text-xs text-dark-500">(Total length says 69, actual content is 68)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The OpenSSL Complexity</h3>

      <Callout type="warning" title="Implementation Challenges">
        <p>
          Bitcoin originally used OpenSSL for signature validation. OpenSSL was very permissive,
          accepting encodings that weren't strictly DER. After BIP-66, Bitcoin moved to libsecp256k1,
          a custom library with stricter, more predictable behavior. This also improved performance
          significantly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Low-S Rule</h3>

      <p className="mb-4">
        BIP-66 addressed encoding, but there's another malleability vector: ECDSA signatures can
        be negated. For any valid signature (r, s), the signature (r, n-s) is also valid.
      </p>

      <p className="mb-4">
        Bitcoin Core also enforces a "low-S" rule as a standardness policy (not consensus):
      </p>

      <div className="bg-dark-800 rounded-lg p-4 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-1"># Low-S requirement</p>
        <p className="text-amber-400">s ≤ n/2</p>
        <p className="text-xs text-dark-500 mt-2">
          where n is the secp256k1 curve order
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">SegWit Connection</h3>

      <p className="mb-4">
        BIP-66 fixed encoding malleability but not all malleability. Full malleability fixes
        came with SegWit (BIP-141), which moves signatures out of the txid calculation entirely.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">BIP-66 Fixes</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✓ Signature encoding variations</li>
            <li>✓ Implementation inconsistencies</li>
            <li>✗ scriptSig malleability (push ops)</li>
            <li>✗ Third-party signature modification</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">SegWit Fixes</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>✓ All scriptSig malleability</li>
            <li>✓ Third-party modifications</li>
            <li>✓ Enables payment channels</li>
            <li>✓ Clean transaction IDs</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Incremental Progress">
        <p>
          BIP-66 exemplifies Bitcoin's conservative upgrade approach. Rather than attempting a
          complete malleability fix, it addressed a specific vector with minimal risk. SegWit
          later provided the complete solution, building on the cleaner signature handling that
          BIP-66 established.
        </p>
      </Callout>
    </LessonLayout>
  );
}
