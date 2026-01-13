import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Threshold Decryption (FROST-like)</h2>

      <p>
        The mathematical techniques underlying FROST can be applied to threshold
        decryption, enabling scenarios where encrypted data can only be decrypted
        by a threshold of parties.
      </p>

      <h3>ElGamal Encryption</h3>

      <Definition title="ElGamal Encryption Scheme">
        <p>
          For public key <InlineMath>{`Y = [s]G`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Encrypt}(m, Y):`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
          <li>
            Sample random <InlineMath>{`r \\leftarrow \\mathbb{Z}_q`}</InlineMath>
          </li>
          <li>
            Compute <InlineMath>{`C_1 = [r]G`}</InlineMath>
          </li>
          <li>
            Compute <InlineMath>{`C_2 = m \\cdot [r]Y`}</InlineMath>
          </li>
          <li>
            Return <InlineMath>{`(C_1, C_2)`}</InlineMath>
          </li>
        </ul>
        <MathBlock>
          {`\\text{Decrypt}(C_1, C_2, s) = C_2 / [s]C_1`}
        </MathBlock>
      </Definition>

      <h3>Threshold Decryption Protocol</h3>

      <p>
        Similar to FROST signing, threshold decryption uses Lagrange interpolation
        to combine partial decryptions:
      </p>

      <Theorem title="Threshold Decryption">
        <p>
          Each participant <InlineMath>{`i`}</InlineMath> with share{' '}
          <InlineMath>{`s_i`}</InlineMath> computes a decryption share:
        </p>
        <MathBlock>
          {`D_i = [s_i \\cdot \\lambda_i]C_1`}
        </MathBlock>
        <p className="mt-4">Combining the shares:</p>
        <MathBlock>
          {`D = \\sum_i D_i = [\\sum_i s_i \\cdot \\lambda_i]C_1 = [s]C_1`}
        </MathBlock>
        <p className="mt-4">The message is recovered as:</p>
        <MathBlock>
          {`m = C_2 / D`}
        </MathBlock>
      </Theorem>

      <h3>Verifiable Decryption</h3>

      <Example title="DLEQ Proof">
        <p>
          Each participant proves their decryption share is correct using a
          discrete log equality (DLEQ) proof:
        </p>
        <MathBlock>
          {`\\text{Prove: } \\log_G Y_i = \\log_{C_1} D_i`}
        </MathBlock>
        <p className="mt-3">
          This proves <InlineMath>{`D_i`}</InlineMath> was computed using the
          same secret <InlineMath>{`s_i`}</InlineMath> that corresponds to
          public share <InlineMath>{`Y_i`}</InlineMath>.
        </p>
      </Example>

      <h3>Application: Encrypted Mempools</h3>

      <Definition title="MEV Protection via Threshold Decryption">
        <p>
          Encrypted mempools use threshold decryption to prevent frontrunning:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Transactions encrypted to validator FROST key
          </li>
          <li>
            Only threshold of validators can decrypt
          </li>
          <li>
            Decryption happens after transaction ordering is committed
          </li>
          <li>
            Prevents validators from extracting MEV
          </li>
        </ul>
      </Definition>

      <Example title="Encrypted Mempool Flow">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            User encrypts transaction <InlineMath>{`tx`}</InlineMath> to
            validator threshold key
          </li>
          <li>
            Validators order encrypted transactions (cannot see contents)
          </li>
          <li>
            After ordering committed, validators threshold-decrypt
          </li>
          <li>
            Transactions executed in committed order
          </li>
        </ol>
      </Example>

      <h3>Time-Lock Encryption</h3>

      <Callout type="info">
        <strong>Future Decryption:</strong> Threshold decryption enables time-lock
        encryption where data can only be decrypted after a specified time:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Encrypt to threshold key held by time-lock committee</li>
          <li>Committee commits to decrypt at specified time</li>
          <li>Decryption shares released according to schedule</li>
        </ul>
      </Callout>

      <h3>Comparison with FROST Signing</h3>

      <Theorem title="Structural Similarity">
        <p>Threshold decryption and FROST signing share similar structure:</p>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Aspect</th>
              <th className="text-left py-2">FROST Signing</th>
              <th className="text-left py-2">Threshold Decryption</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Share computation</td>
              <td><InlineMath>{`z_i = k_i + s_i \\lambda_i c`}</InlineMath></td>
              <td><InlineMath>{`D_i = [s_i \\lambda_i]C_1`}</InlineMath></td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Aggregation</td>
              <td><InlineMath>{`z = \\sum z_i`}</InlineMath></td>
              <td><InlineMath>{`D = \\sum D_i`}</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2">Verification</td>
              <td>Schnorr equation</td>
              <td>DLEQ proof</td>
            </tr>
          </tbody>
        </table>
      </Theorem>

      <Callout type="warning">
        <strong>Key Reuse Warning:</strong> While the key setup is similar, the
        same threshold key should generally not be used for both signing and
        decryption due to potential cross-protocol attacks. Use separate keys
        for signing and encryption.
      </Callout>
    </LessonLayout>
  );
}
