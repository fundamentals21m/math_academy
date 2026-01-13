import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2>Rerandomization (Privacy Enhancement)</h2>

      <p>
        Rerandomization allows a FROST group to sign multiple times without linking the
        signatures to each other or to the original public key. This is a powerful privacy
        enhancement for financial applications.
      </p>

      <h3>The Goal</h3>

      <Definition title="Unlinkability">
        <p>
          Given signatures <InlineMath>{`\\sigma_1, \\sigma_2, \\ldots`}</InlineMath> from the
          same FROST group, an observer should not be able to determine:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>That they came from the same group</li>
          <li>The original "master" public key</li>
          <li>Any relationship between the signatures</li>
        </ul>
      </Definition>

      <h3>Mathematical Construction</h3>

      <Definition title="Original Key Pair">
        <p>The FROST group has:</p>
        <MathBlock>{`s \\in \\mathbb{Z}_q \\quad \\text{(secret, Shamir-shared)}`}</MathBlock>
        <MathBlock>{`Y = [s]G \\quad \\text{(public)}`}</MathBlock>
      </Definition>

      <Definition title="Rerandomization">
        <p>
          For signature <InlineMath>{`j`}</InlineMath>, choose a random blinding factor{' '}
          <InlineMath>{`r_j \\in \\mathbb{Z}_q`}</InlineMath>:
        </p>
        <MathBlock>{`s'_j = s + r_j`}</MathBlock>
        <MathBlock>{`Y'_j = Y + [r_j]G = [s'_j]G`}</MathBlock>
        <p className="mt-3">
          The rerandomized key pair <InlineMath>{`(s'_j, Y'_j)`}</InlineMath> is a valid key pair
          that is unlinkable to the original.
        </p>
      </Definition>

      <h3>Distributed Rerandomization in FROST</h3>

      <Example title="Generating the Blinding Factor">
        <p>
          The blinding factor <InlineMath>{`r_j`}</InlineMath> is generated additively:
        </p>
        <MathBlock>{`r_j = \\sum_{i \\in S} r_{ij}`}</MathBlock>
        <p className="mt-3">
          where each participant <InlineMath>{`i`}</InlineMath> in the signing set{' '}
          <InlineMath>{`S`}</InlineMath> chooses a random <InlineMath>{`r_{ij}`}</InlineMath>.
        </p>
      </Example>

      <Example title="Updating Shares">
        <p>Each participant updates their secret share:</p>
        <MathBlock>{`s'_{ij} = s_i \\cdot \\lambda_i + r_{ij}`}</MathBlock>
        <p className="mt-3">
          The effective secret is now <InlineMath>{`s'_j = s + r_j`}</InlineMath>.
        </p>
      </Example>

      <Example title="Public Key Update">
        <p>The rerandomized public key is computed:</p>
        <MathBlock>{`Y'_j = Y + \\sum_{i \\in S} [r_{ij}]G`}</MathBlock>
        <p className="mt-3">
          Each participant publishes <InlineMath>{`[r_{ij}]G`}</InlineMath>, so anyone can
          compute <InlineMath>{`Y'_j`}</InlineMath>, but no one (except the group) knows{' '}
          <InlineMath>{`r_j`}</InlineMath>.
        </p>
      </Example>

      <h3>Security Properties</h3>

      <Theorem title="Unlinkability">
        <p>
          Given <InlineMath>{`Y'_1, Y'_2, \\ldots`}</InlineMath>, it is computationally
          infeasible to determine if they derive from the same base key{' '}
          <InlineMath>{`Y`}</InlineMath>.
        </p>
        <p className="mt-3">
          <strong>Proof sketch:</strong> Each <InlineMath>{`Y'_j = Y + [r_j]G`}</InlineMath>{' '}
          where <InlineMath>{`r_j`}</InlineMath> is uniformly random. Without knowing{' '}
          <InlineMath>{`r_j`}</InlineMath>, relating <InlineMath>{`Y'_j`}</InlineMath> to{' '}
          <InlineMath>{`Y`}</InlineMath> requires solving the discrete log problem.
        </p>
      </Theorem>

      <Theorem title="Signature Security">
        <p>
          Signatures under rerandomized keys are as secure as signatures under the original key.
          The same unforgeability guarantees apply.
        </p>
      </Theorem>

      <h3>Use Cases in Bitcoin</h3>

      <Definition title="Privacy-Preserving Payments">
        <p>A merchant using FROST custody can:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Generate a unique address for each customer:{' '}
            <InlineMath>{`Y'_{\\text{customer}}`}</InlineMath>
          </li>
          <li>
            Receive payments that appear unrelated on-chain
          </li>
          <li>
            Sign spending transactions with the full threshold
          </li>
          <li>
            Outside observer cannot link payments to the merchant
          </li>
        </ul>
      </Definition>

      <Definition title="Stealth Addresses">
        <p>Combined with ECDH, rerandomization enables stealth addresses:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Receiver publishes scan key <InlineMath>{`Y`}</InlineMath> (FROST key)
          </li>
          <li>
            Sender generates ephemeral key <InlineMath>{`e`}</InlineMath>
          </li>
          <li>
            Computes shared secret: <InlineMath>{`r = H(e \\cdot Y)`}</InlineMath>
          </li>
          <li>
            Sends to rerandomized address: <InlineMath>{`Y' = Y + [r]G`}</InlineMath>
          </li>
          <li>
            Receiver detects payment, computes <InlineMath>{`r`}</InlineMath>, updates shares
          </li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Key Benefit:</strong> The threshold structure is preserved through
        rerandomization. The same <InlineMath>{`t`}</InlineMath> participants are still required
        to sign, but each transaction uses a unique, unlinkable address.
      </Callout>

      <h3>Practical Considerations</h3>

      <Definition title="State Management">
        <p>
          Each rerandomized key requires tracking the blinding factor{' '}
          <InlineMath>{`r_j`}</InlineMath> (or each participant's{' '}
          <InlineMath>{`r_{ij}`}</InlineMath>):
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Store <InlineMath>{`r_{ij}`}</InlineMath> along with standard FROST state
          </li>
          <li>
            Or derive deterministically from master secret and counter
          </li>
        </ul>
      </Definition>

      <Definition title="Efficiency">
        <p>Rerandomization adds minimal overhead:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            One additional scalar addition per participant
          </li>
          <li>
            One additional point addition for public key
          </li>
          <li>
            No additional communication rounds
          </li>
        </ul>
      </Definition>

      <h3>Comparison Without Rerandomization</h3>

      <Example title="Without Rerandomization">
        <p>Using the same FROST key for all transactions:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>All transactions link to the same public key</li>
          <li>Transaction graph fully visible on-chain</li>
          <li>Balance and payment patterns exposed</li>
        </ul>
      </Example>

      <Example title="With Rerandomization">
        <p>Using a fresh rerandomized key for each transaction:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Each transaction uses a unique address</li>
          <li>No visible linkage between transactions</li>
          <li>Balance and patterns hidden from observers</li>
        </ul>
      </Example>

      <Callout type="success">
        <strong>Privacy + Threshold Security:</strong> Rerandomization provides the privacy
        benefits of fresh keys for each transaction while maintaining the threshold security
        properties of FROST. Best of both worlds.
      </Callout>
    </LessonLayout>
  );
}
