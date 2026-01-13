import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2>Attack Scenarios FROST Prevents</h2>

      <p>
        Let's examine specific attacks that FROST's design prevents. Understanding these scenarios
        illuminates why each component of the protocol is necessary.
      </p>

      <h3>Attack 1: Key Extraction</h3>

      <Definition title="Attack Setup">
        <p>
          Adversary controls <InlineMath>{`t-1`}</InlineMath> participants and tries to learn the
          group secret <InlineMath>{`s`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Why It Fails">
        <p>
          The adversary has <InlineMath>{`t-1`}</InlineMath> Shamir shares:{' '}
          <InlineMath>{`s_1, s_2, \\ldots, s_{t-1}`}</InlineMath>.
        </p>
        <p className="mt-3">
          To reconstruct <InlineMath>{`s = f(0)`}</InlineMath>, need <InlineMath>{`t`}</InlineMath>{' '}
          points on the degree <InlineMath>{`(t-1)`}</InlineMath> polynomial.
        </p>
        <p className="mt-3">
          With only <InlineMath>{`t-1`}</InlineMath> points, there are infinitely many degree{' '}
          <InlineMath>{`(t-1)`}</InlineMath> polynomials passing through them. Each gives a
          different <InlineMath>{`f(0)`}</InlineMath> value.
        </p>
        <MathBlock>{`\\text{For every possible } s^*, \\exists \\text{ polynomial } f^* \\text{ with } f^*(0) = s^*`}</MathBlock>
        <p className="mt-3">
          <strong>Information-theoretic security:</strong> All possible secrets are equally likely
          given <InlineMath>{`t-1`}</InlineMath> shares.
        </p>
      </Example>

      <h3>Attack 2: Signature Forgery (Without Nonce Reuse)</h3>

      <Definition title="Attack Setup">
        <p>
          Adversary observes valid signatures{' '}
          <InlineMath>{`\\sigma_1, \\sigma_2, \\ldots`}</InlineMath> and tries to forge a
          signature <InlineMath>{`\\sigma^*`}</InlineMath> for an unauthorized message{' '}
          <InlineMath>{`m^*`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Why It Fails">
        <p>Each signature uses a fresh nonce <InlineMath>{`k`}</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Each <InlineMath>{`k_i = d_{ij} + e_{ij} \\cdot \\rho_i`}</InlineMath> used exactly
            once
          </li>
          <li>
            Nonces deleted immediately after use
          </li>
          <li>
            Fresh preprocessing values for each signature
          </li>
        </ul>
        <p className="mt-3">
          Without knowing any honest party's secret share <InlineMath>{`s_i`}</InlineMath>, the
          adversary cannot produce:
        </p>
        <MathBlock>{`z^* = k^* + s \\cdot c^* \\text{ for chosen } m^*, R^*`}</MathBlock>
        <p className="mt-3">
          This reduces to the discrete log problem: solving for <InlineMath>{`s`}</InlineMath>{' '}
          given <InlineMath>{`Y = [s]G`}</InlineMath>.
        </p>
      </Example>

      <h3>Attack 3: Parallel Session Attack (Drijvers Attack)</h3>

      <Definition title="Attack Setup">
        <p>
          Adversary opens multiple parallel signing sessions, attempting to combine responses from
          different sessions to forge a signature on an unauthorized message.
        </p>
      </Definition>

      <Example title="The Attack Idea">
        <p>
          Using Wagner's k-tree algorithm, the adversary tries to find challenges{' '}
          <InlineMath>{`c_1, c_2, \\ldots, c_T`}</InlineMath> from <InlineMath>{`T`}</InlineMath>{' '}
          sessions such that:
        </p>
        <MathBlock>{`c^* = c_1 + c_2 + \\cdots + c_T`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`c^* = H_2(R^*, Y, m^*)`}</InlineMath> for a forged message.
        </p>
      </Example>

      <Theorem title="Why FROST Prevents This">
        <p>
          FROST's binding mechanism makes each commitment depend on <em>all</em> commitments:
        </p>
        <MathBlock>{`\\rho_i = H_1(i, m, B) \\text{ where } B = [(1, D_1, E_1), \\ldots, (t, D_t, E_t)]`}</MathBlock>
        <p className="mt-3">
          <strong>Key insight:</strong> The adversary must commit to{' '}
          <InlineMath>{`D_i, E_i`}</InlineMath> before seeing other parties' commitments.
        </p>
        <p className="mt-3">After commitments are revealed:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Changing any <InlineMath>{`D_j, E_j`}</InlineMath> changes all{' '}
            <InlineMath>{`\\rho_i`}</InlineMath>
          </li>
          <li>
            Which changes <InlineMath>{`R = \\sum_i (D_i + [\\rho_i]E_i)`}</InlineMath>
          </li>
          <li>
            Which changes <InlineMath>{`c = H_2(R, Y, m)`}</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          This breaks the linear algebra structure that Wagner's algorithm exploits.
        </p>
      </Theorem>

      <h3>Attack 4: ROS Attack</h3>

      <Definition title="Attack Setup">
        <p>
          ROS (Random Inhomogeneities in Overdetermined Solvable) attack: adversary tries to solve
          a system of linear equations in the exponent.
        </p>
      </Definition>

      <Example title="Why FROST Resists">
        <p>
          Unlike schemes vulnerable to ROS, FROST's <InlineMath>{`R`}</InlineMath> changes with
          commitments:
        </p>
        <MathBlock>{`R = \\sum_i (D_i + [H_1(i, m, B)]E_i)`}</MathBlock>
        <p className="mt-3">
          The dependence of <InlineMath>{`R`}</InlineMath> on the binding values creates
          non-linearity that the ROS solver cannot exploit.
        </p>
        <p className="mt-3">
          Specifically, the adversary cannot pre-compute responses because they depend on values
          not known until after commitment.
        </p>
      </Example>

      <h3>Attack 5: Nonce Reuse (What FROST Users Must Prevent)</h3>

      <Callout type="warning">
        <strong>This Attack Succeeds If Implementation Is Flawed!</strong>
      </Callout>

      <Definition title="Attack Setup">
        <p>
          If a participant reuses nonce values <InlineMath>{`(d_i, e_i)`}</InlineMath> for two
          different signatures.
        </p>
      </Definition>

      <Example title="The Devastating Consequence">
        <p>Given two signatures with reused nonce components:</p>
        <MathBlock>{`z_i^{(1)} = d_i + e_i \\cdot \\rho_i^{(1)} + \\lambda_i \\cdot s_i \\cdot c^{(1)}`}</MathBlock>
        <MathBlock>{`z_i^{(2)} = d_i + e_i \\cdot \\rho_i^{(2)} + \\lambda_i \\cdot s_i \\cdot c^{(2)}`}</MathBlock>
        <p className="mt-3">Subtracting:</p>
        <MathBlock>{`z_i^{(1)} - z_i^{(2)} = e_i(\\rho_i^{(1)} - \\rho_i^{(2)}) + \\lambda_i \\cdot s_i (c^{(1)} - c^{(2)})`}</MathBlock>
        <p className="mt-3">
          With known public values, the adversary can solve for{' '}
          <InlineMath>{`s_i`}</InlineMath>!
        </p>
      </Example>

      <Callout type="info">
        <strong>Prevention:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Generate fresh nonces for every signature</li>
          <li>Securely delete nonces immediately after use</li>
          <li>Use stateful counters to prevent accidental reuse</li>
          <li>Never persist nonces longer than necessary</li>
        </ul>
      </Callout>

      <h3>Summary: FROST's Defense Matrix</h3>

      <Definition title="How FROST Defends">
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Attack</th>
              <th className="text-left py-2">Defense Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Key Extraction</td>
              <td className="py-2">Shamir's information-theoretic security</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Signature Forgery</td>
              <td className="py-2">Discrete log hardness</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Parallel Session</td>
              <td className="py-2">Binding mechanism (<InlineMath>{`\\rho_i`}</InlineMath>)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">ROS Attack</td>
              <td className="py-2">Non-linear commitment structure</td>
            </tr>
            <tr>
              <td className="py-2">Nonce Reuse</td>
              <td className="py-2">Implementation discipline (not protocol)</td>
            </tr>
          </tbody>
        </table>
      </Definition>
    </LessonLayout>
  );
}
