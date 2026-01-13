import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2>FROST Variants and Extensions</h2>

      <p>
        The original FROST protocol has inspired several variants that address different
        security requirements or optimize for specific use cases. Understanding these
        variants helps choose the right protocol for different applications.
      </p>

      <h3>FROST2: Enhanced Security</h3>

      <Definition title="FROST2 Improvements">
        <p>FROST2 provides enhanced security through:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Improved security proofs with tighter bounds</li>
          <li>Better resistance to adaptive corruption attacks</li>
          <li>Enhanced protection against ROS (Random inhomogeneities in Overdetermined Solvable) attacks</li>
        </ul>
      </Definition>

      <Example title="Enhanced Binding">
        <p>
          The key mathematical difference in FROST2 is the binding value computation:
        </p>
        <MathBlock>
          {`\\text{Original: } \\rho_i = H_1(i, m, B)`}
        </MathBlock>
        <MathBlock>
          {`\\text{Enhanced: } \\rho_i = H_1(i, m, B, \\text{previous\\_signatures})`}
        </MathBlock>
        <p className="mt-3">
          Including previous signatures in the binding prevents certain adaptive attacks
          across signing sessions.
        </p>
      </Example>

      <h3>ChillDKG: Simplified Key Generation</h3>

      <Definition title="ChillDKG Protocol">
        <p>
          ChillDKG simplifies the distributed key generation phase by deferring
          verification to the signing phase:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Round complexity:</strong> 3 rounds reduced to 2 rounds
          </li>
          <li>
            <strong>Verification:</strong> Deferred to first signing operation
          </li>
          <li>
            <strong>Trade-off:</strong> Simpler setup, but misbehavior detected later
          </li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>When to Use ChillDKG:</strong> ChillDKG is appropriate when:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Setup simplicity is prioritized over immediate verification</li>
          <li>Participants are somewhat trusted (e.g., own devices)</li>
          <li>Signing will happen soon after key generation</li>
        </ul>
      </Callout>

      <h3>Robust FROST</h3>

      <p>
        Standard FROST aborts when any participant misbehaves. Robust variants can
        continue despite a limited number of malicious participants:
      </p>

      <Theorem title="Robustness Trade-off">
        <p>For robustness, the threshold must satisfy:</p>
        <MathBlock>
          {`t \\leq \\lfloor n/2 \\rfloor`}
        </MathBlock>
        <p className="mt-4">
          This is more restrictive than standard FROST where{' '}
          <InlineMath>{`t \\leq n - 1`}</InlineMath> is allowed. The benefit is
          guaranteed completion even with{' '}
          <InlineMath>{`\\lfloor (n-t)/2 \\rfloor`}</InlineMath> malicious participants.
        </p>
      </Theorem>

      <h3>Identifiable Abort</h3>

      <Definition title="Identifiable Abort Extension">
        <p>
          Standard FROST can detect misbehavior but identifying the malicious party
          requires additional mechanisms:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Share verification:</strong> Each share verified individually
            to pinpoint invalid contributions
          </li>
          <li>
            <strong>Complaint mechanism:</strong> Participants can prove which
            party sent invalid data
          </li>
          <li>
            <strong>Accountability:</strong> Misbehaving party can be excluded
            from future sessions
          </li>
        </ul>
      </Definition>

      <h3>Adaptor Signature Support</h3>

      <Example title="FROST Adaptor Signatures">
        <p>
          FROST can be extended to support adaptor signatures for scriptless scripts:
        </p>
        <MathBlock>
          {`\\text{Pre-signature: } (R', z') \\text{ where } R' = R + T`}
        </MathBlock>
        <MathBlock>
          {`\\text{Adaptation: } z = \\sum_i z'_i - t`}
        </MathBlock>
        <p className="mt-3">
          The secret <InlineMath>{`t`}</InlineMath> (with public commitment{' '}
          <InlineMath>{`T = [t]G`}</InlineMath>) is revealed through signature completion.
        </p>
      </Example>

      <h3>FROST-based MuSig</h3>

      <p>
        Combining FROST with MuSig enables multi-signer scenarios where each signer
        uses threshold key management:
      </p>

      <Example title="Hybrid MuSig + FROST">
        <p>Each signer has a FROST-shared key:</p>
        <MathBlock>
          {`\\text{Signer } i: \\text{ threshold } (t_i, n_i) \\text{ with public key } Y_i`}
        </MathBlock>
        <MathBlock>
          {`\\text{Aggregate public key: } Y_{\\text{agg}} = \\sum_i Y_i`}
        </MathBlock>
        <p className="mt-3">
          The result is a single signature that requires threshold authorization from
          multiple independent groups.
        </p>
      </Example>

      <Callout type="info">
        <strong>Choosing a Variant:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Standard FROST:</strong> Best performance, honest majority assumed
          </li>
          <li>
            <strong>FROST2:</strong> Enhanced security, minimal overhead
          </li>
          <li>
            <strong>Robust FROST:</strong> Byzantine tolerance, stricter threshold
          </li>
          <li>
            <strong>ChillDKG:</strong> Simple setup, trusted participants
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
