import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2>Final Thoughts: The Mathematics of Trust</h2>

      <p>
        FROST represents more than a cryptographic protocol - it embodies a profound
        insight about trust itself. Trust doesn't have to be centralized or replicated;
        it can be <em>distributed</em> mathematically.
      </p>

      <h3>The Core Insight</h3>

      <Theorem title="FROST's Fundamental Equation">
        <p>
          The entire FROST protocol is captured in a single equation:
        </p>
        <MathBlock>
          {`z = k + s \\cdot c`}
        </MathBlock>
        <p className="mt-4">where:</p>
        <MathBlock>
          {`k = \\sum_i (d_i + e_i \\cdot H_1(\\ldots)) \\quad \\text{(additive sharing + binding)}`}
        </MathBlock>
        <MathBlock>
          {`s = \\sum_i s_i \\cdot \\lambda_i \\quad \\text{(Shamir reconstruction)}`}
        </MathBlock>
        <MathBlock>
          {`c = H_2(R, Y, m) \\quad \\text{(Fiat-Shamir challenge)}`}
        </MathBlock>
      </Theorem>

      <p>
        From this simple equation flows everything we've learned: unforgeability,
        privacy, efficiency, and flexibility.
      </p>

      <h3>The Journey We've Taken</h3>

      <Example title="Course Summary">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>The Problem:</strong> Single points of failure in key management
          </li>
          <li>
            <strong>The Foundation:</strong> Schnorr signatures and their elegance
          </li>
          <li>
            <strong>The Sharing:</strong> Shamir's secret sharing and Lagrange interpolation
          </li>
          <li>
            <strong>The Key Insight:</strong> Converting between share types
          </li>
          <li>
            <strong>The Security:</strong> Binding mechanisms that prevent forgery
          </li>
          <li>
            <strong>The Protocol:</strong> Putting all pieces together
          </li>
          <li>
            <strong>The Proof:</strong> Why FROST is provably secure
          </li>
          <li>
            <strong>The Applications:</strong> What we can build
          </li>
          <li>
            <strong>The Implementation:</strong> Making it real
          </li>
          <li>
            <strong>The Future:</strong> Where we're going
          </li>
        </ol>
      </Example>

      <h3>The Mathematical Beauty</h3>

      <Callout type="info">
        <strong>From Equation to Trust:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Unforgeability:</strong> Discrete log hardness ensures only
            authorized parties can sign
          </li>
          <li>
            <strong>Privacy:</strong> Signatures indistinguishable from single-party
          </li>
          <li>
            <strong>Efficiency:</strong> Single round with preprocessing
          </li>
          <li>
            <strong>Flexibility:</strong> Any <InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath> threshold
          </li>
        </ul>
      </Callout>

      <h3>From Borrowed Belief to Earned Conviction</h3>

      <p>
        You now understand not just <em>what</em> FROST does, but <em>why</em> it works,
        <em>how</em> the mathematics ensures security, and <em>where</em> it fits in
        Bitcoin's future.
      </p>

      <Definition title="Levels of Understanding">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Level 1:</strong> "FROST is a threshold signature scheme" (borrowed belief)
          </li>
          <li>
            <strong>Level 2:</strong> "FROST uses Shamir sharing with Schnorr signatures"
            (surface understanding)
          </li>
          <li>
            <strong>Level 3:</strong> "FROST converts additive shares using Lagrange
            coefficients and binds commitments to prevent forgery" (deep understanding)
          </li>
          <li>
            <strong>Level 4:</strong> "I can trace through the security proof and
            understand why each step is necessary" (earned conviction)
          </li>
        </ul>
      </Definition>

      <h3>The Liberal Art of Mathematics</h3>

      <p>
        FROST demonstrates that mathematics is not just calculation - it's a language
        for expressing trust, security, and cooperation. These are fundamentally
        human concerns, addressed through the precision of mathematical thinking.
      </p>

      <Example title="Mathematics as Expression">
        <p>What FROST expresses mathematically:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Trust distribution:</strong> No single point of failure
          </li>
          <li>
            <strong>Accountability:</strong> Actions require threshold consensus
          </li>
          <li>
            <strong>Privacy:</strong> Internal structure hidden from observers
          </li>
          <li>
            <strong>Efficiency:</strong> Minimal coordination overhead
          </li>
        </ul>
        <p className="mt-3">
          These social concepts have precise mathematical formulations that can be
          proven secure.
        </p>
      </Example>

      <h3>The Invitation</h3>

      <Callout type="info">
        <strong>Continue the Journey:</strong> This is just the beginning. The
        mathematics of cryptography is vast, beautiful, and essential for understanding
        how we can build trustless systems in a world where trust is scarce. FROST
        is one gem in a rich mathematical landscape.
      </Callout>

      <h3>Closing Theorem</h3>

      <Theorem title="The Power of Mathematical Trust">
        <p>
          FROST proves that distributed trust is not a compromise - it's an
          enhancement. Through careful mathematical construction:
        </p>
        <MathBlock>
          {`\\text{Security}_{\\text{threshold}} \\geq \\text{Security}_{\\text{single-party}}`}
        </MathBlock>
        <p className="mt-4">
          We gain resilience against key loss, protection against single-point compromise,
          and organizational flexibility - all without sacrificing the clean,
          verifiable properties of standard cryptographic signatures.
        </p>
      </Theorem>

      <p className="mt-8 text-center text-lg">
        <em>Keep learning. Keep questioning. Keep earning your convictions.</em>
      </p>
    </LessonLayout>
  );
}
