import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Key Derivation</h2>

      <p className="mb-4">
        Lightning channels use a sophisticated key derivation scheme that enables revocation,
        watchtowers, and secure state management. This section covers how keys are derived
        for each commitment transaction.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Basepoints and Per-Commitment Points</h3>

      <p className="mb-4">
        During channel establishment, each party shares several "basepoint" public keys.
        These are combined with per-commitment points to derive the actual keys used in
        each commitment transaction.
      </p>

      <Definition title="Basepoints">
        Each party provides these basepoints during channel opening:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>revocation_basepoint:</strong> For constructing revocation keys</li>
          <li><strong>payment_basepoint:</strong> For to_remote outputs</li>
          <li><strong>delayed_payment_basepoint:</strong> For to_local outputs</li>
          <li><strong>htlc_basepoint:</strong> For HTLC scripts</li>
        </ul>
      </Definition>

      <Definition title="Per-Commitment Point">
        A unique elliptic curve point generated for each commitment transaction. Derived from
        a per-commitment secret using:
        <MathBlock>
          {`\\text{per\\_commitment\\_point} = \\text{per\\_commitment\\_secret} \\times G`}
        </MathBlock>
        where G is the generator point of secp256k1.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Derivation Functions</h3>

      <Theorem title="Deriving Public Keys">
        For most keys, the derivation uses elliptic curve point addition:
        <MathBlock>
          {`\\text{pubkey} = \\text{basepoint} + \\text{SHA256}(\\text{per\\_commitment\\_point} \\| \\text{basepoint}) \\times G`}
        </MathBlock>
        This creates a unique key for each commitment while allowing the holder of the
        basepoint's private key to derive the corresponding private key.
      </Theorem>

      <Example title="Deriving local_delayedpubkey">
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Take delayed_payment_basepoint and per_commitment_point</li>
          <li>Compute: hash = SHA256(per_commitment_point || delayed_payment_basepoint)</li>
          <li>Multiply hash by G (generator point)</li>
          <li>Add result to delayed_payment_basepoint</li>
          <li>Result is the local_delayedpubkey for this commitment</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Revocation Keys</h3>

      <p className="mb-4">
        Revocation keys are special—they require information from <em>both</em> parties to
        construct the private key. This enables the penalty mechanism.
      </p>

      <Theorem title="Revocation Public Key">
        <MathBlock>
          {`\\text{revocationpubkey} = \\text{revocation\\_basepoint} \\times \\text{SHA256}(R \\| P) + P \\times \\text{SHA256}(P \\| R)`}
        </MathBlock>
        where R is revocation_basepoint and P is per_commitment_point.
      </Theorem>

      <Theorem title="Revocation Private Key">
        The private key can only be computed when both secrets are known:
        <MathBlock>
          {`\\text{revocationsecretkey} = r \\times \\text{SHA256}(R \\| P) + p \\times \\text{SHA256}(P \\| R)`}
        </MathBlock>
        where r is the revocation_basepoint private key and p is the per_commitment_secret.
      </Theorem>

      <Callout type="info" title="Why This Matters">
        When a commitment is revoked, the per_commitment_secret (p) is revealed. Combined
        with the counterparty's revocation_basepoint private key (r), they can compute the
        revocationsecretkey and claim all funds from a revoked commitment.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Per-Commitment Secret Generation</h3>

      <p className="mb-4">
        Per-commitment secrets are generated using a compact tree structure that allows
        efficient storage and verification:
      </p>

      <Definition title="Shachain">
        A hash chain structure where each secret can be derived from the next. Given secret N,
        all previous secrets (0 to N-1) can be computed, but secret N+1 cannot be derived.
        <MathBlock>
          {`\\text{secret}_n = \\text{derive}(\\text{seed}, n)`}
        </MathBlock>
        This allows storing just log(N) secrets to verify any of the first N secrets.
      </Definition>

      <Example title="Secret Derivation Tree">
        <div className="text-sm space-y-2">
          <p>For a 48-bit commitment number, the tree has 48 levels:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Root seed → can derive all 2^48 secrets</li>
            <li>Each level halves by applying SHA256</li>
            <li>Storage: max 48 secrets needed to verify any prior</li>
          </ul>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Static vs Derived Keys</h3>

      <p className="mb-4">
        With <code className="bg-dark-800 px-1 rounded">option_static_remotekey</code>, the
        remote party's payment key doesn't vary with commitment number:
      </p>

      <Example title="Static Remote Key">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Key Type</th>
              <th className="text-left py-2">Without Static</th>
              <th className="text-left py-2">With Static</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">to_remote</td>
              <td className="py-2">Derived per-commitment</td>
              <td className="py-2">Fixed payment_basepoint</td>
            </tr>
            <tr>
              <td className="py-2">Recovery</td>
              <td className="py-2">Needs per-commitment data</td>
              <td className="py-2">Simple—just the key</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="success" title="Benefits of Static Remote Key">
        <ul className="list-disc list-inside space-y-1">
          <li>Simplified backup: only need the base key</li>
          <li>Any commitment version can be recovered</li>
          <li>Enabled by default in modern implementations</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Watchtower Compatibility</h3>

      <p className="mb-4">
        The key derivation scheme supports watchtowers—third parties that monitor for
        revoked commitments and can submit penalty transactions:
      </p>

      <Theorem title="Watchtower Requirements">
        A watchtower needs:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>The commitment transaction to watch for</li>
          <li>The pre-signed penalty transaction (or info to construct it)</li>
          <li>It does NOT need the per_commitment_secret until breach occurs</li>
        </ul>
        The watchtower can submit the penalty transaction if it sees a revoked commitment,
        claiming a fee while returning the rest to the channel owner.
      </Theorem>
    </LessonLayout>
  );
}
