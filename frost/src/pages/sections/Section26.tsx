import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2>Mathematical Formulation of Security</h2>

      <p>
        Beyond intuition, FROST has a formal security proof. Let's understand the
        mathematical framework that proves FROST is as secure as breaking the discrete
        logarithm problem.
      </p>

      <h3>The Forgery Game</h3>

      <Definition title="EUF-CMA Security">
        <p>
          Existential Unforgeability under Chosen Message Attack (EUF-CMA):
        </p>
        <ul className="space-y-2 mt-3">
          <li>
            <strong>Adversary capability:</strong> Can request signatures on any messages
            of their choice
          </li>
          <li>
            <strong>Adversary goal:</strong> Produce a valid signature on a message that
            was never signed
          </li>
          <li>
            <strong>Success:</strong> <InlineMath>{`(m^*, R^*, z^*)`}</InlineMath> where
            <InlineMath>{`m^*`}</InlineMath> was not queried
          </li>
        </ul>
      </Definition>

      <p>
        A signature scheme is secure if no efficient adversary can win this game with
        non-negligible probability.
      </p>

      <h3>The Security Reduction</h3>

      <Theorem title="FROST Security Reduction">
        <p>
          Assuming the random oracle model for hash functions <InlineMath>{`H_1, H_2`}</InlineMath>
          and the hardness of the discrete logarithm problem:
        </p>
        <MathBlock>
          {`\\text{If adversary forges with probability } \\varepsilon,`}
        </MathBlock>
        <MathBlock>
          {`\\text{then discrete log can be solved with probability } \\geq \\frac{\\varepsilon^2}{2n_H + (\\pi + 1)n_P + 1}`}
        </MathBlock>
      </Theorem>

      <p>
        Let's unpack the parameters:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">
            <InlineMath>{`n_H`}</InlineMath> — Hash Queries
          </h4>
          <p className="text-sm">
            Number of queries the adversary makes to the hash oracles <InlineMath>{`H_1, H_2`}</InlineMath>.
            Represents the adversary's computational effort in "searching" the hash space.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">
            <InlineMath>{`n_P`}</InlineMath> — Preprocessing Queries
          </h4>
          <p className="text-sm">
            Number of commitment pairs the adversary sees from honest parties.
            Each preprocessing round gives the adversary more information.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">
            <InlineMath>{`\\pi`}</InlineMath> — Preprocessing Batch Size
          </h4>
          <p className="text-sm">
            Number of commitment pairs generated in each preprocessing phase.
            Larger batches give more parallelism but slightly weaken the bound.
          </p>
        </div>
      </div>

      <h3>What the Reduction Means</h3>

      <Example title="Interpreting the Security Bound">
        <p className="mb-4">
          Suppose an adversary has a 1% chance of forging (<InlineMath>{`\\varepsilon = 0.01`}</InlineMath>):
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-gray-400">With typical parameters:</p>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li><InlineMath>{`n_H = 2^{60}`}</InlineMath> hash queries</li>
              <li><InlineMath>{`n_P = 2^{20}`}</InlineMath> preprocessing queries</li>
              <li><InlineMath>{`\\pi = 100`}</InlineMath> batch size</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400">Security reduction gives:</p>
            <MathBlock>
              {`\\text{DL probability} \\geq \\frac{(0.01)^2}{2 \\cdot 2^{60} + 101 \\cdot 2^{20} + 1} \\approx 2^{-74}`}
            </MathBlock>
          </div>

          <div className="text-emerald-400">
            <p>
              This means: if FROST could be broken with 1% success, we could solve
              discrete log with probability <InlineMath>{`2^{-74}`}</InlineMath>. Since
              DL is believed to require <InlineMath>{`\\approx 2^{128}`}</InlineMath>
              operations, FROST is secure.
            </p>
          </div>
        </div>
      </Example>

      <h3>The Forking Lemma</h3>

      <p>
        The security proof uses a technique called the "forking lemma":
      </p>

      <Definition title="Forking Lemma Approach">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Assume adversary <InlineMath>{`\\mathcal{A}`}</InlineMath> can forge with probability
            <InlineMath>{`\\varepsilon`}</InlineMath>
          </li>
          <li>
            Run <InlineMath>{`\\mathcal{A}`}</InlineMath> once, recording all random oracle queries
          </li>
          <li>
            "Fork" the execution at a critical point, giving different random oracle answers
          </li>
          <li>
            Extract the discrete log from the two forgeries
          </li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Intuition:</strong> If the adversary can forge twice with different
        random oracle outputs, we can extract the secret key by comparing the two
        forgeries. This transforms a forgery attack into a discrete log attack.
      </Callout>

      <h3>Why the Quadratic Loss</h3>

      <p>
        Notice the <InlineMath>{`\\varepsilon^2`}</InlineMath> in the numerator. This "quadratic
        loss" comes from the forking lemma:
      </p>

      <Theorem title="Forking Probability">
        <p>
          If <InlineMath>{`\\mathcal{A}`}</InlineMath> succeeds with probability <InlineMath>{`\\varepsilon`}</InlineMath>,
          then both forks succeed with probability approximately <InlineMath>{`\\varepsilon^2`}</InlineMath>.
        </p>
        <p className="mt-3">
          This is the main efficiency loss in the reduction, but it's tight for this
          class of proofs.
        </p>
      </Theorem>

      <h3>Comparison with Single-Party Schnorr</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Single-Party Schnorr</h4>
          <MathBlock>
            {`\\text{Security} \\geq \\frac{\\varepsilon^2}{n_H}`}
          </MathBlock>
          <p className="text-sm mt-2">
            Only depends on hash queries (simpler setting)
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">FROST</h4>
          <MathBlock>
            {`\\text{Security} \\geq \\frac{\\varepsilon^2}{2n_H + (\\pi + 1)n_P + 1}`}
          </MathBlock>
          <p className="text-sm mt-2">
            Additional terms from threshold structure
          </p>
        </div>
      </div>

      <p>
        The additional terms in FROST's bound account for:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Preprocessing queries:</strong> Each commitment pair gives adversary information
        </li>
        <li>
          <strong>Parallel sessions:</strong> Adversary can open multiple signing sessions
        </li>
        <li>
          <strong>Binding mechanism overhead:</strong> Security of the binding hash
        </li>
      </ul>

      <h3>Practical Security Level</h3>

      <Example title="Concrete Security Calculation">
        <p className="mb-4">
          For 128-bit security target:
        </p>

        <div className="space-y-3 text-sm">
          <p>Required: DL probability <InlineMath>{`\\leq 2^{-128}`}</InlineMath></p>
          <p>From reduction: <InlineMath>{`\\varepsilon^2 / (2n_H + ...) \\leq 2^{-128}`}</InlineMath></p>
          <p>So: <InlineMath>{`\\varepsilon \\leq \\sqrt{2^{-128} \\cdot (2n_H + ...)} \\approx 2^{-34}`}</InlineMath></p>
        </div>

        <p className="mt-4 text-gray-400">
          With reasonable query bounds, FROST forgery probability is negligible.
        </p>
      </Example>

      <Callout type="success">
        <strong>Bottom Line:</strong> FROST's security reduces to the discrete logarithm
        problem with a tight enough bound that breaking FROST would be a major
        breakthrough in cryptanalysis. For all practical purposes, FROST is secure.
      </Callout>

      <h3>Summary</h3>

      <Definition title="FROST Security Summary">
        <ul className="space-y-2">
          <li>
            <strong>Model:</strong> Random oracle for <InlineMath>{`H_1, H_2`}</InlineMath>
          </li>
          <li>
            <strong>Assumption:</strong> Discrete log is hard
          </li>
          <li>
            <strong>Result:</strong> FROST is EUF-CMA secure
          </li>
          <li>
            <strong>Technique:</strong> Forking lemma reduction
          </li>
        </ul>
      </Definition>
    </LessonLayout>
  );
}
