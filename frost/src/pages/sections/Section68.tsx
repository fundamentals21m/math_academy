import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2>Open Research Questions</h2>

      <p>
        Despite FROST's maturity and standardization, several important research
        questions remain open. These questions represent active areas of cryptographic
        research that could further improve threshold signature schemes.
      </p>

      <h3>Optimal Robustness Trade-offs</h3>

      <Definition title="Robustness Spectrum">
        <p>Current options are binary:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Non-robust:</strong> Abort on any misbehavior (FROST default)
          </li>
          <li>
            <strong>Fully robust:</strong> Tolerate up to{' '}
            <InlineMath>{`\\lfloor (n-1)/2 \\rfloor`}</InlineMath> malicious
            (requires <InlineMath>{`t \\leq n/2`}</InlineMath>)
          </li>
        </ul>
        <p className="mt-4">
          <strong>Open Question:</strong> Is there a middle ground? Can we achieve
          partial robustness (e.g., survive <InlineMath>{`t/2`}</InlineMath> malicious)
          without restricting the threshold as severely?
        </p>
      </Definition>

      <h3>Optimal Round Complexity</h3>

      <Theorem title="Round Complexity Question">
        <p>Current state:</p>
        <MathBlock>
          {`\\text{FROST: 2 rounds (1 signing + preprocessing)}`}
        </MathBlock>
        <p className="mt-4">
          <strong>Open Question:</strong> What is the lower bound? Can we achieve
          truly single-round threshold Schnorr signatures without preprocessing?
        </p>
        <p className="mt-4">
          Current evidence suggests 1 round is impossible without trusted setup
          or relaxed security models, but no formal impossibility proof exists.
        </p>
      </Theorem>

      <h3>Tighter Security Bounds</h3>

      <Example title="Security Reduction Gap">
        <p>Current security reduction:</p>
        <MathBlock>
          {`\\varepsilon_{\\text{FROST}} \\leq \\varepsilon_{\\text{DL}} + \\text{(small terms)}`}
        </MathBlock>
        <p className="mt-3">
          <strong>Goal:</strong> Perfect equivalence where{' '}
          <InlineMath>{`\\varepsilon_{\\text{FROST}} = \\varepsilon_{\\text{DL}}`}</InlineMath>
        </p>
        <p className="mt-3">
          Tighter bounds would provide stronger security guarantees and potentially
          allow smaller security parameters.
        </p>
      </Example>

      <h3>Adaptive Corruption</h3>

      <Definition title="Corruption Models">
        <p>
          <strong>Current model (static corruption):</strong> Adversary chooses which{' '}
          <InlineMath>{`t-1`}</InlineMath> parties to corrupt before protocol starts.
        </p>
        <p className="mt-4">
          <strong>Stronger model (adaptive corruption):</strong> Adversary can
          corrupt parties during protocol execution based on observed messages.
        </p>
        <p className="mt-4">
          <strong>Open Question:</strong> Can FROST be proven secure against adaptive
          corruption without significant efficiency loss?
        </p>
      </Definition>

      <h3>Accountable Abort</h3>

      <Example title="Accountability Problem">
        <p>
          <strong>Current:</strong> When misbehavior is detected, the culprit can
          be identified.
        </p>
        <p className="mt-3">
          <strong>Open Question:</strong> Can misbehavior be proven to a third party?
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Generate proof of misbehavior that anyone can verify</li>
          <li>Enable slashing in proof-of-stake systems</li>
          <li>Provide non-repudiation of protocol violations</li>
        </ul>
      </Example>

      <h3>Post-Quantum FROST</h3>

      <Callout type="info">
        <strong>Major Open Problem:</strong> Design a post-quantum threshold signature
        scheme with FROST's properties:
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Single-round signing (or minimal rounds)</li>
          <li>Small signatures</li>
          <li>Efficient verification</li>
          <li>True <InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath> threshold</li>
        </ul>
        No current lattice-based, hash-based, or isogeny-based scheme achieves all
        properties simultaneously.
      </Callout>

      <h3>Concurrent Composition</h3>

      <Theorem title="Composition Security">
        <p>
          <strong>Question:</strong> How does FROST's security compose when:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Run concurrently with other protocols using the same keys?</li>
          <li>Used as a subroutine in larger MPC protocols?</li>
          <li>Multiple FROST instances share participants?</li>
        </ul>
        <p className="mt-4">
          Universal composability (UC) security for FROST remains an active research
          area.
        </p>
      </Theorem>

      <h3>Practical Optimizations</h3>

      <Example title="Efficiency Research">
        <p>Open optimization questions:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Preprocessing amortization:</strong> Can commitment generation
            be more efficient across many signatures?
          </li>
          <li>
            <strong>Batch signing:</strong> Can multiple messages be signed more
            efficiently together?
          </li>
          <li>
            <strong>Asynchronous FROST:</strong> How to handle unreliable networks
            without sacrificing security?
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>Research Opportunity:</strong> These open questions represent
        opportunities for advancing cryptographic knowledge. Solutions could
        significantly impact the practical deployment of threshold signatures
        in cryptocurrency and beyond.
      </Callout>
    </LessonLayout>
  );
}
