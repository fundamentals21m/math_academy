import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Concrete Bitcoin Scenario: Cold Storage</h2>

      <p>
        Let's walk through a complete, practical example of using FROST for Bitcoin cold storage.
        This demonstrates how all the mathematical concepts translate into real-world security.
      </p>

      <h3>Setup</h3>

      <Definition title="Cold Storage Configuration">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Threshold:</strong> 3-of-5 FROST
          </li>
          <li>
            <strong>Participants:</strong> 5 hardware security modules (HSMs) or hardware wallets
          </li>
          <li>
            <strong>Locations:</strong> Geographically distributed (different cities/countries)
          </li>
          <li>
            <strong>Use case:</strong> Corporate treasury, exchange cold wallet, or high-value
            personal holdings
          </li>
        </ul>
      </Definition>

      <h3>Initial Key Generation</h3>

      <Example title="Distributed Key Generation">
        <p>The 5 devices run FROST DKG:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Each device generates a random polynomial of degree 2:
            <MathBlock>{`f_i(x) = a_{i0} + a_{i1}x + a_{i2}x^2`}</MathBlock>
          </li>
          <li>
            Each device publishes Feldman VSS commitments:
            <MathBlock>{`C_{i0} = [a_{i0}]G, \\quad C_{i1} = [a_{i1}]G, \\quad C_{i2} = [a_{i2}]G`}</MathBlock>
          </li>
          <li>
            Each device sends encrypted shares to others:
            <MathBlock>{`f_i(j) \\text{ to device } j`}</MathBlock>
          </li>
          <li>
            Each device verifies received shares against commitments
          </li>
          <li>
            Each device computes its final share:
            <MathBlock>{`s_j = \\sum_{i=1}^{5} f_i(j)`}</MathBlock>
          </li>
        </ol>
      </Example>

      <Definition title="Public Key and Address">
        <p>The group public key is:</p>
        <MathBlock>{`Y = \\sum_{i=1}^{5} C_{i0} = \\sum_{i=1}^{5} [a_{i0}]G`}</MathBlock>
        <p className="mt-3">For Taproot, compute the tweaked key:</p>
        <MathBlock>{`P = Y + [H(Y)]G`}</MathBlock>
        <p className="mt-3">
          The Bitcoin address is derived from <InlineMath>{`P`}</InlineMath>: a standard bc1p... Taproot address.
        </p>
      </Definition>

      <h3>Receiving Bitcoin</h3>

      <Example title="Deposit Process">
        <p>To receive funds:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Generate address from group public key <InlineMath>{`P`}</InlineMath></li>
          <li>Share address with sender</li>
          <li>Sender creates transaction paying to the Taproot address</li>
          <li>Transaction confirms on-chain</li>
        </ol>
        <p className="mt-3">
          <strong>On-chain appearance:</strong> Identical to any other Taproot address. No
          indication of 3-of-5 structure.
        </p>
      </Example>

      <h3>Spending Bitcoin</h3>

      <Example title="Withdrawal Process">
        <p>To spend the funds, select any 3 of the 5 devices:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Prepare transaction:</strong> Create unsigned transaction with inputs and outputs
          </li>
          <li>
            <strong>Preprocessing check:</strong> Ensure each device has unused commitment pairs
          </li>
          <li>
            <strong>Coordinator sends request:</strong>
            <MathBlock>{`(\\text{tx\\_hash}, B) \\text{ where } B = [(1, D_1, E_1), (3, D_3, E_3), (4, D_4, E_4)]`}</MathBlock>
          </li>
          <li>
            <strong>Each device computes:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Binding value: <InlineMath>{`\\rho_i = H_1(i, \\text{tx\\_hash}, B)`}</InlineMath></li>
              <li>Commitment: <InlineMath>{`R_i = D_i + [\\rho_i]E_i`}</InlineMath></li>
              <li>Lagrange coefficient: <InlineMath>{`\\lambda_i`}</InlineMath> for set {`{1,3,4}`}</li>
              <li>Signature share: <InlineMath>{`z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c`}</InlineMath></li>
            </ul>
          </li>
          <li>
            <strong>Coordinator aggregates:</strong>
            <MathBlock>{`z = z_1 + z_3 + z_4`}</MathBlock>
          </li>
          <li>
            <strong>Adjust for Taproot tweak:</strong>
            <MathBlock>{`z' = z + t \\cdot c \\text{ where } t = H(Y)`}</MathBlock>
          </li>
          <li>
            <strong>Broadcast:</strong> Submit signed transaction to Bitcoin network
          </li>
        </ol>
      </Example>

      <h3>Security Properties</h3>

      <Callout type="success">
        <strong>What This Achieves:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Compromise resilience:</strong> Attacker needs 3 geographically separated
            devices
          </li>
          <li>
            <strong>Availability:</strong> Any 2 devices can fail and funds are still accessible
          </li>
          <li>
            <strong>Privacy:</strong> On-chain observers see single-sig transactions
          </li>
          <li>
            <strong>Cost:</strong> Same fees as single-sig (64-byte signature)
          </li>
        </ul>
      </Callout>

      <h3>Operational Considerations</h3>

      <Definition title="Preprocessing Management">
        <p>Each device maintains a buffer of commitment pairs:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Generate 100 pairs during quiet periods</li>
          <li>Publish commitments to secure storage</li>
          <li>Track usage: never reuse a pair</li>
          <li>Regenerate when buffer runs low</li>
        </ul>
      </Definition>

      <Definition title="Key Refresh">
        <p>Periodically refresh shares (e.g., quarterly):</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Run proactive secret sharing protocol</li>
          <li>Old shares become invalid</li>
          <li>Defeats mobile adversary accumulating shares over time</li>
          <li>Public key and addresses unchanged</li>
        </ul>
      </Definition>

      <Definition title="Recovery Plan">
        <p>If a device is lost or compromised:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Remaining devices can still sign (3 of 4 available)</li>
          <li>Run threshold change protocol to add replacement device</li>
          <li>Optionally increase threshold for additional security</li>
          <li>Investigate compromised device</li>
        </ol>
      </Definition>

      <h3>Cost Comparison</h3>

      <Example title="Transaction Costs">
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Input Size</th>
              <th className="text-left py-2">Cost at 50 sat/vB</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">FROST (3-of-5)</td>
              <td className="py-2">~57.5 vB</td>
              <td className="py-2">~2,875 sats</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">P2WSH (3-of-5)</td>
              <td className="py-2">~166 vB</td>
              <td className="py-2">~8,300 sats</td>
            </tr>
            <tr>
              <td className="py-2">Savings</td>
              <td className="py-2">~65%</td>
              <td className="py-2">~5,425 sats/input</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">
          For a UTXO consolidation of 100 inputs, FROST saves ~542,500 sats in fees.
        </p>
      </Example>

      <h3>The Bottom Line</h3>

      <Callout type="info">
        <strong>FROST Cold Storage:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Industrial-grade security (threshold + geographic distribution)</li>
          <li>Consumer-grade fees (single signature)</li>
          <li>Maximum privacy (indistinguishable from single-sig)</li>
          <li>Operational flexibility (key refresh, threshold changes)</li>
        </ul>
        <p className="mt-2">
          This is the future of Bitcoin custody: security without compromise.
        </p>
      </Callout>
    </LessonLayout>
  );
}
