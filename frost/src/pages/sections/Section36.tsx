import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2>Security Proof Structure</h2>

      <p>
        How do cryptographers prove that FROST is secure? The answer lies in{' '}
        <strong>reduction proofs</strong> - showing that breaking FROST is at least as hard as
        solving well-studied mathematical problems.
      </p>

      <h3>The Reduction Framework</h3>

      <Definition title="Proof by Reduction">
        <p>
          A reduction proof shows: "If algorithm <InlineMath>{`\\mathcal{A}`}</InlineMath> can
          break our protocol with probability <InlineMath>{`\\varepsilon`}</InlineMath>, then we
          can use <InlineMath>{`\\mathcal{A}`}</InlineMath> to solve the hard problem with
          probability <InlineMath>{`\\geq f(\\varepsilon)`}</InlineMath>."
        </p>
        <p className="mt-3">
          Since the hard problem is assumed infeasible,{' '}
          <InlineMath>{`\\varepsilon`}</InlineMath> must also be negligible.
        </p>
      </Definition>

      <Theorem title="Main Security Theorem">
        <p>
          If the discrete logarithm problem is hard, FROST is unforgeable under chosen-message
          attack in the random oracle model.
        </p>
        <p className="mt-3">Contrapositive form:</p>
        <MathBlock>{`\\text{If Forger } \\mathcal{F} \\text{ breaks FROST with prob } \\varepsilon`}</MathBlock>
        <MathBlock>{`\\text{Then } \\exists \\text{ algorithm solving DL with prob } \\geq \\frac{\\varepsilon^2}{\\text{poly}(\\lambda)}`}</MathBlock>
      </Theorem>

      <h3>Proof Steps Overview</h3>

      <Definition title="Step 1: Setup">
        <p>
          Given a discrete log challenge <InlineMath>{`\\omega \\in G`}</InlineMath> (we want to
          find <InlineMath>{`x`}</InlineMath> such that <InlineMath>{`\\omega = [x]G`}</InlineMath>),
          embed it in the FROST public key.
        </p>
        <p className="mt-3">
          The simulator sets up the FROST environment so that solving for the group secret{' '}
          <InlineMath>{`s`}</InlineMath> would reveal <InlineMath>{`x`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Step 2: Simulation">
        <p>Simulate the FROST environment for the forger <InlineMath>{`\\mathcal{F}`}</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>DKG:</strong> Embed <InlineMath>{`\\omega`}</InlineMath> as one participant's
            contribution to the public key
          </li>
          <li>
            <strong>Preprocessing:</strong> Simulate commitment generation
          </li>
          <li>
            <strong>Signing:</strong> Program random oracles to enable signing simulation without
            knowing the secret
          </li>
        </ul>
      </Definition>

      <Example title="Random Oracle Programming">
        <p>
          The simulator controls hash functions <InlineMath>{`H_1, H_2`}</InlineMath>. When the
          forger queries <InlineMath>{`H_2(R, Y, m)`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            If this is a new query, choose random <InlineMath>{`c`}</InlineMath> and store the
            mapping
          </li>
          <li>
            If previously queried, return the stored value
          </li>
        </ul>
        <p className="mt-3">
          This allows the simulator to "program" the hash output to values that make simulation
          possible.
        </p>
      </Example>

      <Definition title="Step 3: Forking">
        <p>
          Run <InlineMath>{`\\mathcal{F}`}</InlineMath> twice with the same randomness but
          different random oracle outputs.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>First run:</strong> <InlineMath>{`\\mathcal{F}`}</InlineMath> produces forgery{' '}
            <InlineMath>{`(R, z, m)`}</InlineMath>
          </li>
          <li>
            <strong>Fork point:</strong> At the challenge query, return different hash output
          </li>
          <li>
            <strong>Second run:</strong> <InlineMath>{`\\mathcal{F}`}</InlineMath> produces{' '}
            <InlineMath>{`(R, z', m)`}</InlineMath> with same <InlineMath>{`R`}</InlineMath> but
            different <InlineMath>{`z'`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Definition title="Step 4: Extraction">
        <p>Use the two forgeries to extract the discrete log:</p>
        <MathBlock>{`z = k + s \\cdot c`}</MathBlock>
        <MathBlock>{`z' = k + s \\cdot c'`}</MathBlock>
        <p className="mt-3">Subtracting these equations:</p>
        <MathBlock>{`z - z' = s \\cdot (c - c')`}</MathBlock>
        <p className="mt-3">Solving for s:</p>
        <MathBlock>{`s = \\frac{z - z'}{c - c'}`}</MathBlock>
      </Definition>

      <Definition title="Step 5: Recovery">
        <p>
          Extract the original challenge <InlineMath>{`x`}</InlineMath> from computed{' '}
          <InlineMath>{`s`}</InlineMath>.
        </p>
        <p className="mt-3">
          Due to how we embedded <InlineMath>{`\\omega`}</InlineMath> in the public key, knowing{' '}
          <InlineMath>{`s`}</InlineMath> allows us to compute <InlineMath>{`x`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <strong>The Forking Lemma:</strong> The probability of successful forking depends on the
        original success probability. If the forger succeeds with probability{' '}
        <InlineMath>{`\\varepsilon`}</InlineMath> after <InlineMath>{`q`}</InlineMath> queries:
        <MathBlock>{`\\Pr[\\text{successful fork}] \\geq \\frac{\\varepsilon^2}{q}`}</MathBlock>
      </Callout>

      <h3>Key Technical Challenges</h3>

      <Example title="Challenge 1: Simulating Without the Secret">
        <p>
          The simulator doesn't know <InlineMath>{`s`}</InlineMath> but must produce valid-looking
          signatures when <InlineMath>{`\\mathcal{F}`}</InlineMath> requests them.
        </p>
        <p className="mt-3">
          <strong>Solution:</strong> Choose <InlineMath>{`z`}</InlineMath> randomly first, then
          program <InlineMath>{`H_2`}</InlineMath> to return the value that makes verification pass:
        </p>
        <MathBlock>{`c = H_2(R, Y, m) \\text{ set so that } [z]G = R + [c]Y`}</MathBlock>
      </Example>

      <Example title="Challenge 2: Embedding the Challenge">
        <p>
          Must embed the DL challenge without the forger detecting the simulation.
        </p>
        <p className="mt-3">
          <strong>Solution:</strong> Distribute <InlineMath>{`\\omega`}</InlineMath> across
          polynomial commitments so that{' '}
          <InlineMath>{`Y = \\omega + [\\text{known terms}]G`}</InlineMath>.
        </p>
      </Example>

      <h3>Why This Proves Security</h3>

      <Theorem title="Security Conclusion">
        <p>The reduction shows:</p>
        <MathBlock>{`\\varepsilon_{\\text{FROST}} \\leq \\sqrt{q \\cdot \\varepsilon_{\\text{DL}}}`}</MathBlock>
        <p className="mt-3">
          If <InlineMath>{`\\varepsilon_{\\text{DL}}`}</InlineMath> is negligible (discrete log is
          hard), then <InlineMath>{`\\varepsilon_{\\text{FROST}}`}</InlineMath> must also be
          negligible.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>The Security Guarantee:</strong> Breaking FROST requires either:
        <ul className="list-disc list-inside mt-2">
          <li>Solving the discrete logarithm problem (believed impossible)</li>
          <li>Finding collisions/preimages in the hash function (believed impossible)</li>
        </ul>
        Both are considered computationally infeasible, so FROST is secure.
      </Callout>
    </LessonLayout>
  );
}
