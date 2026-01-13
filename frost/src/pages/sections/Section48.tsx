import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2>Scriptless Scripts with Adaptor Signatures</h2>

      <p>
        Adaptor signatures are a powerful cryptographic primitive that enable conditional payments
        without revealing the condition on-chain. Combined with FROST, they enable threshold-controlled
        atomic swaps and other advanced protocols.
      </p>

      <h3>Adaptor Signature Concept</h3>

      <Definition title="The Idea">
        <p>An adaptor signature encodes a "puzzle":</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Pre-signature:</strong> A signature that's almost valid, but not quite
          </li>
          <li>
            <strong>Adaptor point:</strong> <InlineMath>{`T = [t]G`}</InlineMath> (public)
          </li>
          <li>
            <strong>Secret:</strong> <InlineMath>{`t`}</InlineMath> (hidden)
          </li>
          <li>
            <strong>Completion:</strong> Knowing <InlineMath>{`t`}</InlineMath> converts pre-signature
            to valid signature
          </li>
        </ul>
      </Definition>

      <h3>Mathematical Construction</h3>

      <Definition title="Pre-Signature Generation">
        <p>Given adaptor point <InlineMath>{`T = [t]G`}</InlineMath>:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Generate nonce: <InlineMath>{`k`}</InlineMath>, commitment{' '}
            <InlineMath>{`R = [k]G`}</InlineMath>
          </li>
          <li>
            Compute adapted commitment: <InlineMath>{`R' = R + T`}</InlineMath>
          </li>
          <li>
            Compute challenge: <InlineMath>{`c' = H(R', Y, m)`}</InlineMath>
          </li>
          <li>
            Compute pre-signature: <InlineMath>{`z' = k + s \\cdot c'`}</InlineMath>
          </li>
        </ol>
        <p className="mt-3">
          The pre-signature <InlineMath>{`(R', z')`}</InlineMath> is "offset" by the unknown{' '}
          <InlineMath>{`t`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Pre-Signature Verification">
        <p>Verifier can check the pre-signature is well-formed:</p>
        <MathBlock>{`[z']G \\stackrel{?}{=} R' - T + [c']Y`}</MathBlock>
        <MathBlock>{`= R + [c']Y \\quad \\checkmark`}</MathBlock>
        <p className="mt-3">
          This confirms: if someone reveals <InlineMath>{`t`}</InlineMath>, the signature can be completed.
        </p>
      </Definition>

      <Definition title="Signature Completion">
        <p>With knowledge of <InlineMath>{`t`}</InlineMath>:</p>
        <MathBlock>{`z = z' + t`}</MathBlock>
        <p className="mt-3">
          The completed signature <InlineMath>{`(R', z)`}</InlineMath> is valid:
        </p>
        <MathBlock>{`[z]G = [z' + t]G = [z']G + T = R + [c']Y + T = R' + [c']Y \\quad \\checkmark`}</MathBlock>
      </Definition>

      <h3>FROST Adaptor Signatures</h3>

      <Example title="Threshold Pre-Signature">
        <p>Each participant in the FROST group produces a pre-signature share:</p>
        <MathBlock>{`z'_i = k_i + s_i \\cdot \\lambda_i \\cdot c'`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`c' = H(R', Y, m)`}</InlineMath> uses the adapted commitment{' '}
          <InlineMath>{`R' = R + T`}</InlineMath>.
        </p>
        <p className="mt-3">Aggregation:</p>
        <MathBlock>{`z' = \\sum_{i \\in S} z'_i`}</MathBlock>
      </Example>

      <Example title="Completing the Signature">
        <p>Once <InlineMath>{`t`}</InlineMath> is revealed:</p>
        <MathBlock>{`z = z' + t`}</MathBlock>
        <p className="mt-3">
          Anyone can complete the signature, but completing it reveals <InlineMath>{`t`}</InlineMath> to
          anyone watching.
        </p>
      </Example>

      <h3>Atomic Swaps</h3>

      <Definition title="Cross-Chain Atomic Swap">
        <p>Alice (Bitcoin) and Bob (other chain) want to swap atomically:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Alice chooses secret <InlineMath>{`t`}</InlineMath>, publishes{' '}
            <InlineMath>{`T = [t]G`}</InlineMath>
          </li>
          <li>
            Bob creates pre-signature for his coin (adapted with <InlineMath>{`T`}</InlineMath>)
          </li>
          <li>
            Alice creates pre-signature for her coin (adapted with <InlineMath>{`T`}</InlineMath>)
          </li>
          <li>
            Alice claims Bob's coin: completes his pre-signature, revealing <InlineMath>{`t`}</InlineMath>
          </li>
          <li>
            Bob sees <InlineMath>{`t`}</InlineMath> on-chain, claims Alice's coin
          </li>
        </ol>
      </Definition>

      <Callout type="success">
        <strong>No Hash Revelation:</strong> Unlike HTLC-based atomic swaps, adaptor signature
        swaps don't reveal the preimage hash on-chain. The swap condition is completely hidden!
      </Callout>

      <h3>FROST + Adaptor Swaps</h3>

      <Example title="Threshold Atomic Swap">
        <p>Alice's 2-of-3 FROST group swaps with Bob:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Alice's threshold group agrees on secret <InlineMath>{`t`}</InlineMath> (can be
            generated via DKG or one party proposes)
          </li>
          <li>
            Group produces FROST pre-signature adapted with <InlineMath>{`T`}</InlineMath>
          </li>
          <li>
            When group decides to execute swap, they reveal <InlineMath>{`t`}</InlineMath>
          </li>
          <li>
            Swap completes atomically
          </li>
        </ol>
        <p className="mt-3">
          The threshold security applies to both the coins and the swap decision.
        </p>
      </Example>

      <h3>Point Time-Locked Contracts (PTLCs)</h3>

      <Definition title="PTLC vs HTLC">
        <p>PTLCs are the adaptor signature version of HTLCs:</p>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Feature</th>
              <th className="text-left py-2">HTLC</th>
              <th className="text-left py-2">PTLC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Condition</td>
              <td className="py-2">Hash preimage</td>
              <td className="py-2">Discrete log</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">On-chain visibility</td>
              <td className="py-2">Hash revealed</td>
              <td className="py-2">Nothing revealed</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Privacy</td>
              <td className="py-2">Same hash across hops</td>
              <td className="py-2">Different point each hop</td>
            </tr>
            <tr>
              <td className="py-2">FROST compatible</td>
              <td className="py-2">Yes (standard)</td>
              <td className="py-2">Yes (adaptor)</td>
            </tr>
          </tbody>
        </table>
      </Definition>

      <h3>Lightning with PTLCs</h3>

      <Example title="Private Multi-Hop Payments">
        <p>With PTLCs in Lightning:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Each hop uses a different adaptor point
          </li>
          <li>
            Points are blinded: <InlineMath>{`T_i = T + [r_i]G`}</InlineMath>
          </li>
          <li>
            Routing nodes learn nothing about payment path
          </li>
          <li>
            Much stronger privacy than HTLC-based Lightning
          </li>
        </ul>
      </Example>

      <h3>Security Considerations</h3>

      <Callout type="warning">
        <strong>Important:</strong> The adaptor point <InlineMath>{`T`}</InlineMath> and secret{' '}
        <InlineMath>{`t`}</InlineMath> must be managed carefully:
        <ul className="list-disc list-inside mt-2">
          <li>Pre-signatures commit to a specific <InlineMath>{`T`}</InlineMath></li>
          <li>Revealing <InlineMath>{`t`}</InlineMath> completes ALL pre-signatures using that <InlineMath>{`T`}</InlineMath></li>
          <li>Use fresh <InlineMath>{`t`}</InlineMath> for each independent swap</li>
        </ul>
      </Callout>

      <p>
        Adaptor signatures combined with FROST enable a new class of protocols: threshold-controlled,
        privacy-preserving conditional payments. This is the future of Bitcoin scripting without scripts.
      </p>
    </LessonLayout>
  );
}
