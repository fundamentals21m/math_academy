import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2>Post-Quantum Considerations</h2>

      <p>
        FROST's security relies on the hardness of the discrete logarithm problem
        in elliptic curve groups. Quantum computers running Shor's algorithm could
        potentially break this assumption, necessitating consideration of post-quantum
        alternatives.
      </p>

      <h3>The Quantum Threat</h3>

      <Definition title="Shor's Algorithm Impact">
        <p>
          Shor's algorithm solves the discrete logarithm problem in polynomial time
          on a quantum computer:
        </p>
        <MathBlock>
          {`\\text{Given } Y = [s]G, \\text{ compute } s \\text{ in } O(\\log^3 q) \\text{ time}`}
        </MathBlock>
        <p className="mt-4">
          This breaks the fundamental assumption underlying FROST (and all ECC-based
          cryptography).
        </p>
      </Definition>

      <Callout type="warning">
        <strong>Timeline Uncertainty:</strong> Estimates for when large-scale quantum
        computers will exist range from 10 to 30+ years. However, "harvest now,
        decrypt later" attacks mean sensitive data encrypted today could be at risk
        when quantum computers arrive.
      </Callout>

      <h3>Post-Quantum Threshold Signatures</h3>

      <p>Several approaches are being researched for post-quantum threshold signatures:</p>

      <h4>Lattice-Based Approaches</h4>

      <Definition title="Lattice-Based Threshold Signatures">
        <p>Based on the hardness of lattice problems like LWE and SIS:</p>
        <MathBlock>
          {`\\text{Secret: vector } \\mathbf{s} \\in \\mathbb{Z}_q^n`}
        </MathBlock>
        <MathBlock>
          {`\\text{Sharing: via additive shares of } \\mathbf{s}`}
        </MathBlock>
        <p className="mt-4">
          <strong>Challenge:</strong> Lattice operations involve "noise" that accumulates
          through computation, making threshold operations more complex than in the
          discrete log setting.
        </p>
      </Definition>

      <h4>Hash-Based Approaches</h4>

      <Example title="SPHINCS+ Threshold Variant">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Primitive:</strong> Stateful hash-based signatures (WOTS+)
          </li>
          <li>
            <strong>Threshold:</strong> Share WOTS+ one-time keys among participants
          </li>
          <li>
            <strong>Challenge:</strong> State coordination across participants is complex
          </li>
          <li>
            <strong>Status:</strong> Active research area
          </li>
        </ul>
      </Example>

      <h4>Isogeny-Based Approaches</h4>

      <Definition title="Isogeny-Based Signatures">
        <p>Based on the hardness of finding isogenies between elliptic curves:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Secret:</strong> An isogeny path between curves
          </li>
          <li>
            <strong>Sharing:</strong> Similar structure to FROST possible
          </li>
          <li>
            <strong>Status:</strong> Early research stage, some schemes broken
          </li>
        </ul>
      </Definition>

      <h3>Open Research Problems</h3>

      <Theorem title="Post-Quantum FROST Goals">
        <p>A post-quantum equivalent of FROST would need:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Single-round signing (or minimal rounds)</li>
          <li>Small signatures (current FROST: 64 bytes)</li>
          <li>Efficient verification</li>
          <li>True threshold semantics (<InlineMath>{`t`}</InlineMath>-of-<InlineMath>{`n`}</InlineMath>)</li>
        </ul>
        <p className="mt-4">
          No current post-quantum scheme achieves all these properties simultaneously.
        </p>
      </Theorem>

      <h3>Hybrid Approaches</h3>

      <Example title="Transitional Security">
        <p>During the transition period, hybrid approaches combine:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Classical signature (FROST) for efficiency
          </li>
          <li>
            Post-quantum signature for future-proofing
          </li>
        </ul>
        <p className="mt-3">
          Both signatures required for validity, providing security against both
          classical and quantum attackers.
        </p>
      </Example>

      <h3>Bitcoin Implications</h3>

      <Callout type="info">
        <strong>Bitcoin's Quantum Readiness:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            Taproot addresses (pay-to-pubkey) are directly vulnerable once keys are revealed
          </li>
          <li>
            Funds behind unrevealed public keys have some protection
          </li>
          <li>
            Migration to post-quantum signatures would require soft fork
          </li>
          <li>
            FROST implementations should plan for eventual migration
          </li>
        </ul>
      </Callout>

      <h3>Current Recommendations</h3>

      <p>For FROST implementations today:</p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Monitor developments:</strong> Post-quantum cryptography is evolving rapidly
        </li>
        <li>
          <strong>Crypto agility:</strong> Design systems that can swap signature schemes
        </li>
        <li>
          <strong>Key rotation:</strong> Plan for eventual migration to post-quantum keys
        </li>
        <li>
          <strong>Time sensitivity:</strong> Consider data lifetime vs. quantum timeline
        </li>
      </ul>
    </LessonLayout>
  );
}
