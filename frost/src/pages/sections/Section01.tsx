import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>The Single Point of Failure Problem</h2>

      <p>
        Alice has a Bitcoin private key <InlineMath>{`s`}</InlineMath>. This single number controls
        her entire Bitcoin holdings. If someone steals it, her funds are gone. If she loses it,
        her funds are inaccessible forever. This is the fundamental challenge of cryptocurrency
        security: a single point of failure.
      </p>

      <Callout type="warning">
        <strong>The Core Challenge:</strong> How do you protect a secret that must be used,
        but can never be exposed?
      </Callout>

      <h3>What Alice Wants</h3>

      <p>Alice wants to ensure:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>No single device or person controls her funds alone</li>
        <li>But any authorized subset can still spend</li>
        <li>An attacker who compromises one device learns nothing useful</li>
      </ul>

      <Definition title="(t, n)-Threshold Scheme">
        <p>
          Given a secret <InlineMath>{`s \\in \\mathbb{Z}`}</InlineMath>, design a system where:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <InlineMath>{`s`}</InlineMath> is divided into <InlineMath>{`n`}</InlineMath> shares:
            <InlineMath>{`s_1, s_2, \\ldots, s_n`}</InlineMath>
          </li>
          <li>
            Any <InlineMath>{`t`}</InlineMath> shares can reconstruct <InlineMath>{`s`}</InlineMath>
          </li>
          <li>
            Any <InlineMath>{`t-1`}</InlineMath> shares reveal <em>nothing</em> about <InlineMath>{`s`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="2-of-3 Threshold">
        <p>
          Alice splits her key into 3 shares distributed across:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Her phone</li>
          <li>Her laptop</li>
          <li>A hardware wallet in a safe</li>
        </ul>
        <p className="mt-3">
          Any 2 devices can spend, but stealing just 1 device gives an attacker zero information
          about Alice's private key.
        </p>
      </Example>

      <h3>The Mathematical Statement</h3>

      <p>
        Formally, we want to construct a sharing function and reconstruction function:
      </p>

      <MathBlock>
        {`\\text{Share}(s) \\rightarrow (s_1, s_2, \\ldots, s_n)`}
      </MathBlock>

      <MathBlock>
        {`\\text{Reconstruct}(\\{s_{i_1}, s_{i_2}, \\ldots, s_{i_t}\\}) \\rightarrow s`}
      </MathBlock>

      <p>
        where reconstruction works for any subset of <InlineMath>{`t`}</InlineMath> shares,
        but fails (reveals nothing) for any subset of <InlineMath>{`t-1`}</InlineMath> shares.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> The threshold <InlineMath>{`t`}</InlineMath> represents the
        minimum trust assumption. If you believe at least <InlineMath>{`t`}</InlineMath> of your
        <InlineMath>{`n`}</InlineMath> devices/people will remain honest and available, your funds
        are safe.
      </Callout>

      <h3>Why This Is Hard</h3>

      <p>
        The challenge isn't just splitting the secret - that's easy (just XOR with random values).
        The hard part is:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>
          <strong>Threshold property:</strong> Exactly <InlineMath>{`t`}</InlineMath> shares needed,
          no more, no less
        </li>
        <li>
          <strong>Information-theoretic security:</strong> <InlineMath>{`t-1`}</InlineMath> shares
          must reveal literally zero bits of information
        </li>
        <li>
          <strong>Usability with signatures:</strong> We need to <em>sign</em> with the shared key,
          not just reconstruct it
        </li>
      </ol>

      <p>
        FROST solves all three challenges. But first, we need to understand the existing approaches
        and why they fall short.
      </p>
    </LessonLayout>
  );
}
