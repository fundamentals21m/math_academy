import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SchnorrComparison } from '@/components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Schnorr Signatures</h2>

      <p className="mb-4">
        Schnorr signatures, invented by Claus Schnorr in 1989, are simpler, more efficient,
        and enable powerful features like signature aggregation. Bitcoin activated Schnorr
        support with Taproot in November 2021.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not ECDSA?</h3>

      <p className="mb-4">
        ECDSA was chosen for Bitcoin because Schnorr was patented until 2008. But ECDSA has
        limitations:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Complex formulas:</strong> Verification requires computing inverses</li>
        <li><strong>No aggregation:</strong> Cannot combine multiple signatures into one</li>
        <li><strong>Malleability:</strong> Both <InlineMath>(r, s)</InlineMath> and <InlineMath>(r, -s)</InlineMath> valid</li>
        <li><strong>Harder proofs:</strong> Security proofs are more complex</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Schnorr Signing Algorithm</h3>

      <Definition title="Schnorr Signature (BIP 340)">
        <p><strong>Input:</strong> Message <InlineMath>m</InlineMath>, private key <InlineMath>d</InlineMath></p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>1: <InlineMath>k \leftarrow H(\text{'{aux}'} || d || m)</InlineMath> (deterministic nonce)</p>
          <p>2: <InlineMath>R = kG</InlineMath></p>
          <p>3: <InlineMath>e = H(R || Q || m)</InlineMath> (challenge)</p>
          <p>4: <InlineMath>s = k + ed \mod n</InlineMath></p>
          <p>5: Return <InlineMath>(R, s)</InlineMath></p>
        </div>
      </Definition>

      <Definition title="Schnorr Verification">
        <p>
          <strong>Input:</strong> Message <InlineMath>m</InlineMath>, signature <InlineMath>(R, s)</InlineMath>,
          public key <InlineMath>Q</InlineMath>
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>1: <InlineMath>e = H(R || Q || m)</InlineMath></p>
          <p>2: Accept if <InlineMath>sG = R + eQ</InlineMath></p>
        </div>
      </Definition>

      <Example title="Why Verification Works">
        <MathBlock>
          {`sG = (k + ed)G = kG + edG = R + eQ \\quad \\checkmark`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Schnorr vs ECDSA</h3>

      <SchnorrComparison className="my-8" />

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Property</th>
              <th className="pb-2">ECDSA</th>
              <th className="pb-2">Schnorr</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr>
              <td className="py-2">Signature size</td>
              <td>64 bytes</td>
              <td className="text-emerald-400">64 bytes</td>
            </tr>
            <tr>
              <td className="py-2">Sign formula</td>
              <td><InlineMath>s = k^{'{-1}'}(z + rd)</InlineMath></td>
              <td className="text-emerald-400"><InlineMath>s = k + ed</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2">Verify</td>
              <td>2 scalar mults + inverse</td>
              <td className="text-emerald-400">2 scalar mults</td>
            </tr>
            <tr>
              <td className="py-2">Aggregation</td>
              <td className="text-rose-400">Not possible</td>
              <td className="text-emerald-400">Yes (MuSig)</td>
            </tr>
            <tr>
              <td className="py-2">Batch verify</td>
              <td className="text-rose-400">Not efficient</td>
              <td className="text-emerald-400">~2x speedup</td>
            </tr>
            <tr>
              <td className="py-2">Provably secure</td>
              <td>Harder proof</td>
              <td className="text-emerald-400">Simple proof</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig: Signature Aggregation</h3>

      <p className="mb-4">
        Schnorr's most powerful feature: <strong>multiple signers can produce a single signature</strong>{' '}
        that's indistinguishable from a regular signature.
      </p>

      <Definition title="MuSig Protocol (Simplified)">
        <p>Three parties (Alice, Bob, Carol) want to create a 3-of-3 multisig:</p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm space-y-2">
          <p><strong>Key Aggregation:</strong></p>
          <p><InlineMath>Q = a_A Q_A + a_B Q_B + a_C Q_C</InlineMath></p>
          <p className="text-dark-400">(weighted sum of public keys)</p>
          <p className="mt-3"><strong>Signing:</strong></p>
          <p>1: Each party commits to a nonce <InlineMath>R_i</InlineMath></p>
          <p>2: Aggregate: <InlineMath>R = R_A + R_B + R_C</InlineMath></p>
          <p>3: Each computes partial signature <InlineMath>s_i</InlineMath></p>
          <p>4: Aggregate: <InlineMath>s = s_A + s_B + s_C</InlineMath></p>
          <p className="mt-3"><strong>Result:</strong> Single signature <InlineMath>(R, s)</InlineMath></p>
        </div>
      </Definition>

      <Callout type="success" title="Privacy Benefit">
        <p>
          The aggregated signature looks exactly like a single-party signature. On-chain,
          no one can tell it's multisig. This is a massive privacy improvement over
          Bitcoin's old multisig (which exposed all public keys).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Batch Verification</h3>

      <p className="mb-4">
        When verifying many Schnorr signatures at once, we can batch them:
      </p>

      <MathBlock>
        {`\\sum_i r_i s_i G = \\sum_i r_i R_i + \\sum_i r_i e_i Q_i`}
      </MathBlock>

      <p className="mb-4">
        Where <InlineMath>r_i</InlineMath> are random weights. This combines all verifications
        into a single multi-scalar multiplication, giving roughly <strong>2x speedup</strong>{' '}
        for large batches.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Taproot Integration</h3>

      <p className="mb-4">
        Bitcoin's Taproot upgrade (BIP 340/341/342, activated November 2021) uses Schnorr with:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>x-only public keys:</strong> 32 bytes instead of 33 (drop y-parity prefix)
        </li>
        <li>
          <strong>Key-path spending:</strong> Simple signature reveals nothing about scripts
        </li>
        <li>
          <strong>Script-path spending:</strong> Reveal script only when needed
        </li>
      </ul>

      <Example title="Taproot Address">
        <p>
          A Taproot address can be spent two ways:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Key path:</strong> Just sign with Schnorr (looks like single-sig)</li>
          <li><strong>Script path:</strong> Reveal hidden script (multisig, timelocks, etc.)</li>
        </ul>
        <p className="mt-2 text-dark-400">
          The common case (key path) is maximally efficient and private. Complex scripts
          are hidden unless needed.
        </p>
      </Example>

      <Callout type="info" title="Adoption">
        <p>
          As of 2024, Taproot addresses represent a growing percentage of Bitcoin transactions.
          Exchanges, wallets, and services are progressively adopting Schnorr signatures.
        </p>
      </Callout>
    </LessonLayout>
  );
}
