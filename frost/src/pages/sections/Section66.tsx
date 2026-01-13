import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2>FROST in Bitcoin's Future</h2>

      <p>
        With Taproot activated in November 2021, Bitcoin now natively supports Schnorr
        signatures. This opens the door for FROST-based threshold signatures that are
        indistinguishable from regular single-signature transactions on-chain.
      </p>

      <h3>Taproot Integration</h3>

      <Definition title="FROST with Taproot">
        <p>
          Taproot enables FROST through its native Schnorr support:
        </p>
        <MathBlock>
          {`\\text{Taproot output: } P = Y_{\\text{frost}} + [t]G`}
        </MathBlock>
        <p className="mt-4">
          where:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>{`Y_{\\text{frost}}`}</InlineMath> is the FROST group public key
          </li>
          <li>
            <InlineMath>{`t = H(Y_{\\text{frost}} \\| \\text{merkle\\_root})`}</InlineMath>{' '}
            is the Taproot tweak
          </li>
          <li>
            Script paths provide fallback spending conditions
          </li>
        </ul>
      </Definition>

      <h3>Privacy Benefits</h3>

      <Example title="On-Chain Indistinguishability">
        <p>A FROST-signed Taproot spend reveals:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Single public key:</strong> No indication of threshold structure
          </li>
          <li>
            <strong>Single signature:</strong> 64 bytes regardless of{' '}
            <InlineMath>{`t`}</InlineMath> or <InlineMath>{`n`}</InlineMath>
          </li>
          <li>
            <strong>No script exposure:</strong> Fallback paths remain hidden
          </li>
        </ul>
        <p className="mt-3">
          An observer cannot distinguish a 3-of-5 FROST signature from a regular
          single-signer transaction.
        </p>
      </Example>

      <h3>Adoption Timeline</h3>

      <Definition title="Projected FROST Adoption">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>2024-2026:</strong> Major wallets begin FROST integration
          </li>
          <li>
            <strong>2026-2028:</strong> FROST becomes standard for cold storage
          </li>
          <li>
            <strong>2028+:</strong> FROST as default for most Bitcoin wallets
          </li>
        </ul>
      </Definition>

      <h3>Lightning Network</h3>

      <Example title="FROST in Lightning Channels">
        <p>Current Lightning uses 2-of-2 multisig. With FROST:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Each party's key can be FROST-shared internally
          </li>
          <li>
            Channel opening remains single-sig on-chain
          </li>
          <li>
            Improved key management without privacy loss
          </li>
        </ul>
        <MathBlock>
          {`\\text{Current: 2-of-2 multisig}`}
        </MathBlock>
        <MathBlock>
          {`\\text{With FROST: 2-of-2 where each is } (t_i, n_i) \\text{ threshold}`}
        </MathBlock>
      </Example>

      <h3>Covenant Interactions</h3>

      <Callout type="info">
        <strong>Future Covenant Proposals:</strong> Proposed covenant opcodes
        (CTV, APO, etc.) combined with FROST enable powerful smart contracts:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Vaults:</strong> Time-locked recovery with threshold authorization
          </li>
          <li>
            <strong>Inheritance:</strong> Automated transfer after inactivity period
          </li>
          <li>
            <strong>Escrow:</strong> Complex conditional payments with threshold release
          </li>
        </ul>
      </Callout>

      <h3>Concrete Cold Storage Example</h3>

      <Example title="5-of-9 Cold Storage Setup">
        <p><strong>Configuration:</strong></p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>9 hardware wallets distributed geographically</li>
          <li>5-of-9 threshold for spending</li>
          <li>Taproot address with timelocked recovery path</li>
        </ul>

        <p className="mt-4"><strong>Address Generation:</strong></p>
        <MathBlock>
          {`\\text{DKG across 9 devices} \\rightarrow Y_{\\text{frost}}`}
        </MathBlock>
        <MathBlock>
          {`P = Y_{\\text{frost}} + [H(Y_{\\text{frost}} \\| \\text{recovery\\_script})]G`}
        </MathBlock>

        <p className="mt-4"><strong>On-chain appearance:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Standard Taproot address: <code>bc1p...</code></li>
          <li>Indistinguishable from any other Taproot output</li>
        </ul>
      </Example>

      <h3>Fee Efficiency</h3>

      <Theorem title="Transaction Size Comparison">
        <p>For a 3-of-5 threshold setup:</p>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Witness Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Legacy P2SH multisig</td>
              <td>approximately 250 bytes</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">SegWit P2WSH multisig</td>
              <td>approximately 200 bytes</td>
            </tr>
            <tr>
              <td className="py-2">Taproot + FROST</td>
              <td>64 bytes</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">
          FROST provides 3-4x fee savings while improving privacy.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>The Future is Threshold:</strong> As FROST tooling matures, threshold
        signatures will become the standard for any Bitcoin holding beyond casual
        amounts. The combination of superior security, privacy, and efficiency makes
        FROST the natural evolution of Bitcoin key management.
      </Callout>
    </LessonLayout>
  );
}
