import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2>Security Model</h2>

      <p>
        Understanding FROST's security requires examining the precise assumptions under which it
        operates and the guarantees it provides. This forms the foundation for trusting the protocol.
      </p>

      <h3>Cryptographic Assumptions</h3>

      <Definition title="Assumption 1: Discrete Logarithm Hardness">
        <p>
          Given a group element <InlineMath>{`Y = [s]G`}</InlineMath>, computing the scalar{' '}
          <InlineMath>{`s`}</InlineMath> is computationally infeasible.
        </p>
        <p className="mt-3">
          For secp256k1, this means: given a point on the elliptic curve, finding the number of
          times you added <InlineMath>{`G`}</InlineMath> to itself to get there is essentially
          impossible with current (and foreseeable classical) computing power.
        </p>
      </Definition>

      <Definition title="Assumption 2: Random Oracle Model">
        <p>
          The hash functions <InlineMath>{`H_1`}</InlineMath> and <InlineMath>{`H_2`}</InlineMath>{' '}
          behave like truly random functions:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Output appears uniformly random</li>
          <li>Cannot predict output without computing the hash</li>
          <li>Each distinct input gives an independent random output</li>
        </ul>
        <p className="mt-3">
          In practice, we instantiate these with cryptographic hash functions like SHA-256, which
          are believed to approximate this ideal behavior.
        </p>
      </Definition>

      <h3>Adversary Model</h3>

      <Definition title="Adversary Capabilities">
        <p>The adversary in FROST's security model can:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Control up to <InlineMath>{`t-1`}</InlineMath> participants:</strong> Has full
            access to their secret shares and can make them behave arbitrarily
          </li>
          <li>
            <strong>Choose messages:</strong> Adaptively select which messages to request
            signatures on
          </li>
          <li>
            <strong>Observe all communication:</strong> See all messages between honest parties
            and coordinator
          </li>
          <li>
            <strong>Control the network:</strong> Delay, reorder, or drop messages (but not
            modify them due to authentication)
          </li>
        </ul>
      </Definition>

      <Callout type="warning">
        <strong>Important Limitation:</strong> FROST assumes the adversary chooses which{' '}
        <InlineMath>{`t-1`}</InlineMath> participants to corrupt <em>before</em> the protocol
        starts (static corruption). Adaptive corruption during execution requires additional
        techniques.
      </Callout>

      <h3>Security Goals</h3>

      <Theorem title="Goal 1: Unforgeability">
        <p>
          An adversary controlling fewer than <InlineMath>{`t`}</InlineMath> participants cannot
          create a valid signature on any message that was not signed by the honest participants.
        </p>
        <p className="mt-3">Formally:</p>
        <MathBlock>{`\\Pr[\\text{Forge}] \\leq \\text{negl}(\\lambda)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\text{negl}(\\lambda)`}</InlineMath> is a negligible function of
          the security parameter.
        </p>
      </Theorem>

      <Theorem title="Goal 2: Secrecy">
        <p>
          The long-term secret <InlineMath>{`s`}</InlineMath> is never revealed, even after
          producing arbitrarily many signatures.
        </p>
        <p className="mt-3">
          More precisely: no probabilistic polynomial-time adversary can compute{' '}
          <InlineMath>{`s`}</InlineMath> from observing the protocol execution.
        </p>
      </Theorem>

      <Theorem title="Goal 3: Zero-Knowledge (Signature Privacy)">
        <p>
          Signatures reveal no information about:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Individual participants' secret shares <InlineMath>{`s_i`}</InlineMath></li>
          <li>Which subset of participants signed</li>
          <li>The threshold value <InlineMath>{`t`}</InlineMath></li>
          <li>The total number of participants <InlineMath>{`n`}</InlineMath></li>
        </ul>
      </Theorem>

      <h3>What FROST Does NOT Guarantee</h3>

      <Definition title="Liveness (Availability)">
        <p>
          FROST does not guarantee that signing will always succeed. An adversary can cause the
          protocol to abort by:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Refusing to participate</li>
          <li>Providing invalid shares</li>
          <li>Timing out</li>
        </ul>
        <p className="mt-3">
          This is the trade-off for single-round efficiency. Robust variants exist but require
          more communication.
        </p>
      </Definition>

      <Definition title="Accountability">
        <p>
          While FROST can detect misbehavior and identify the misbehaving party, it cannot{' '}
          <em>prove</em> this misbehavior to a third party without additional mechanisms.
        </p>
      </Definition>

      <h3>Security Parameter Interpretation</h3>

      <Example title="Concrete Security for Bitcoin (secp256k1)">
        <p>With secp256k1 parameters:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Group order:</strong> <InlineMath>{`q \\approx 2^{256}`}</InlineMath>
          </li>
          <li>
            <strong>Discrete log security:</strong> ~128 bits (due to Pollard's rho)
          </li>
          <li>
            <strong>Hash output:</strong> 256 bits (SHA-256)
          </li>
        </ul>
        <p className="mt-3">
          This means an attacker needs approximately <InlineMath>{`2^{128}`}</InlineMath>{' '}
          operations to break FROST - comparable to breaking any single-party Schnorr signature.
        </p>
      </Example>

      <Callout type="info">
        <strong>The Key Insight:</strong> FROST's security is tightly bound to the discrete
        logarithm problem. If you trust single-party Schnorr signatures, you can trust FROST with
        the same confidence level.
      </Callout>

      <h3>Trust Model Summary</h3>

      <Definition title="What You Must Trust">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Discrete log hardness:</strong> The mathematical foundation
          </li>
          <li>
            <strong>Hash function security:</strong> SHA-256 behaves like a random oracle
          </li>
          <li>
            <strong>At least <InlineMath>{`n - t + 1`}</InlineMath> honest participants:</strong>{' '}
            Equivalently, at most <InlineMath>{`t - 1`}</InlineMath> compromised
          </li>
          <li>
            <strong>Correct implementation:</strong> No bugs in the code
          </li>
        </ol>
      </Definition>

      <p>
        The next section examines specific attack scenarios that FROST prevents, demonstrating
        how these security properties hold against realistic threats.
      </p>
    </LessonLayout>
  );
}
