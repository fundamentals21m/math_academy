import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p>
        Logic is the study of valid reasoning. In mathematics, we use logic to construct proofs
        and derive new results from known facts. This section introduces propositional logic—the
        logic of statements that can be either true or false.
      </p>

      <h2>Propositions</h2>

      <Definition title="Proposition" className="my-6">
        <p>
          A <strong>proposition</strong> (or <strong>statement</strong>) is a declarative sentence
          that is either true (T) or false (F), but not both.
        </p>
      </Definition>

      <Example title="Propositions and Non-Propositions" className="my-6">
        <p><strong>Propositions:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>"2 + 2 = 4" (true)</li>
          <li>"Paris is the capital of Germany" (false)</li>
          <li>"Every even number greater than 2 is the sum of two primes" (has a truth value, even if unknown)</li>
        </ul>
        <p className="mt-4"><strong>Not propositions:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>"What time is it?" (question)</li>
          <li>"Close the door." (command)</li>
          <li>"x + 1 = 5" (depends on x, not a fixed truth value)</li>
        </ul>
      </Example>

      <h2>Logical Connectives</h2>

      <p>
        We build compound propositions from simpler ones using <strong>logical connectives</strong>.
        Let <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> denote propositions.
      </p>

      <Definition title="Negation" className="my-6">
        <p>
          The <strong>negation</strong> of <InlineMath>P</InlineMath>, written{' '}
          <InlineMath>\neg P</InlineMath> (or <InlineMath>\sim P</InlineMath>, or "not P"), is true
          when <InlineMath>P</InlineMath> is false, and false when <InlineMath>P</InlineMath> is true.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>\neg P</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="py-2">T</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">T</td></tr>
            </tbody>
          </table>
        </div>
      </Definition>

      <Definition title="Conjunction (AND)" className="my-6">
        <p>
          The <strong>conjunction</strong> of <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath>,
          written <InlineMath>P \land Q</InlineMath> (read "P and Q"), is true only when both{' '}
          <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> are true.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>Q</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>P \land Q</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2">F</td></tr>
            </tbody>
          </table>
        </div>
      </Definition>

      <Definition title="Disjunction (OR)" className="my-6">
        <p>
          The <strong>disjunction</strong> of <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath>,
          written <InlineMath>P \lor Q</InlineMath> (read "P or Q"), is true when at least one of{' '}
          <InlineMath>P</InlineMath> or <InlineMath>Q</InlineMath> is true.
        </p>
        <p className="mt-2 text-dark-300">
          Note: This is the <em>inclusive or</em>—both can be true.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>Q</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>P \lor Q</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2">F</td></tr>
            </tbody>
          </table>
        </div>
      </Definition>

      <Definition title="Conditional (Implication)" className="my-6">
        <p>
          The <strong>conditional</strong> (or <strong>implication</strong>){' '}
          <InlineMath>P \to Q</InlineMath> (read "if P then Q" or "P implies Q") is false only when{' '}
          <InlineMath>P</InlineMath> is true and <InlineMath>Q</InlineMath> is false.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>P</InlineMath> is the <strong>hypothesis</strong> (or antecedent)</li>
          <li><InlineMath>Q</InlineMath> is the <strong>conclusion</strong> (or consequent)</li>
        </ul>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>Q</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>P \to Q</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2">T</td></tr>
            </tbody>
          </table>
        </div>
      </Definition>

      <p>
        The rows where <InlineMath>P</InlineMath> is false are sometimes surprising. The implication
        "if P then Q" is considered <em>vacuously true</em> when P is false—there's no
        counterexample because the hypothesis never holds.
      </p>

      <Example title="Understanding Implication" className="my-6">
        <p>
          Consider: "If it rains, then the ground is wet."
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Rain, ground wet: Promise kept (T)</li>
          <li>Rain, ground dry: Promise broken (F)</li>
          <li>No rain, ground wet: Promise not violated (T)</li>
          <li>No rain, ground dry: Promise not violated (T)</li>
        </ul>
      </Example>

      <Definition title="Biconditional" className="my-6">
        <p>
          The <strong>biconditional</strong> <InlineMath>P \leftrightarrow Q</InlineMath> (read "P
          if and only if Q" or "P iff Q") is true when <InlineMath>P</InlineMath> and{' '}
          <InlineMath>Q</InlineMath> have the same truth value.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>Q</InlineMath></th>
                <th className="py-2 px-4"><InlineMath>P \leftrightarrow Q</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2">T</td></tr>
              <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2">F</td></tr>
              <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2">T</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Note: <InlineMath>P \leftrightarrow Q</InlineMath> is equivalent to{' '}
          <InlineMath>(P \to Q) \land (Q \to P)</InlineMath>.
        </p>
      </Definition>

      <h2>Tautologies and Contradictions</h2>

      <Definition title="Tautology and Contradiction" className="my-6">
        <p>
          A compound proposition that is always true (regardless of the truth values of its
          components) is called a <strong>tautology</strong>.
        </p>
        <p className="mt-2">
          A compound proposition that is always false is called a <strong>contradiction</strong>.
        </p>
        <p className="mt-2">
          A proposition that is neither a tautology nor a contradiction is called a{' '}
          <strong>contingency</strong>.
        </p>
      </Definition>

      <Example title="Tautology and Contradiction Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <strong>Tautology:</strong> <InlineMath>P \lor \neg P</InlineMath> (Law of Excluded Middle)
          </li>
          <li>
            <strong>Contradiction:</strong> <InlineMath>P \land \neg P</InlineMath>
          </li>
          <li>
            <strong>Tautology:</strong> <InlineMath>(P \land Q) \to P</InlineMath> (Simplification)
          </li>
        </ul>
      </Example>

      <h2>Logical Equivalence</h2>

      <Definition title="Logical Equivalence" className="my-6">
        <p>
          Two propositions <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> are{' '}
          <strong>logically equivalent</strong>, written <InlineMath>P \equiv Q</InlineMath>, if
          they have the same truth value for all possible assignments of truth values to their
          propositional variables.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>P \equiv Q</InlineMath> means{' '}
          <InlineMath>P \leftrightarrow Q</InlineMath> is a tautology.
        </p>
      </Definition>

      <Theorem title="Important Logical Equivalences" className="my-6">
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-primary-400">De Morgan's Laws:</p>
            <MathBlock>{`\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q`}</MathBlock>
            <MathBlock>{`\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Double Negation:</p>
            <MathBlock>{`\\neg(\\neg P) \\equiv P`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Conditional as Disjunction:</p>
            <MathBlock>{`P \\to Q \\equiv \\neg P \\lor Q`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Contrapositive:</p>
            <MathBlock>{`P \\to Q \\equiv \\neg Q \\to \\neg P`}</MathBlock>
          </div>
        </div>
      </Theorem>

      <Example title="Verifying De Morgan's Law" className="my-6">
        <p>
          Show <InlineMath>\neg(P \land Q) \equiv \neg P \lor \neg Q</InlineMath>:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-2"><InlineMath>P</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>Q</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>P \land Q</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>\neg(P \land Q)</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>\neg P</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>\neg Q</InlineMath></th>
                <th className="py-2 px-2"><InlineMath>\neg P \lor \neg Q</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td>T</td><td>T</td><td>T</td><td className="text-primary-400 font-bold">F</td><td>F</td><td>F</td><td className="text-primary-400 font-bold">F</td></tr>
              <tr><td>T</td><td>F</td><td>F</td><td className="text-primary-400 font-bold">T</td><td>F</td><td>T</td><td className="text-primary-400 font-bold">T</td></tr>
              <tr><td>F</td><td>T</td><td>F</td><td className="text-primary-400 font-bold">T</td><td>T</td><td>F</td><td className="text-primary-400 font-bold">T</td></tr>
              <tr><td>F</td><td>F</td><td>F</td><td className="text-primary-400 font-bold">T</td><td>T</td><td>T</td><td className="text-primary-400 font-bold">T</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          The highlighted columns match, confirming the equivalence.
        </p>
      </Example>

      <h2>Converse, Inverse, and Contrapositive</h2>

      <Definition title="Related Conditionals" className="my-6">
        <p>
          Given a conditional <InlineMath>P \to Q</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong>Converse:</strong> <InlineMath>Q \to P</InlineMath>
          </li>
          <li>
            <strong>Inverse:</strong> <InlineMath>\neg P \to \neg Q</InlineMath>
          </li>
          <li>
            <strong>Contrapositive:</strong> <InlineMath>\neg Q \to \neg P</InlineMath>
          </li>
        </ul>
      </Definition>

      <Theorem title="Contrapositive Equivalence" className="my-6">
        <p>
          A conditional and its contrapositive are logically equivalent:
        </p>
        <MathBlock>{`P \\to Q \\equiv \\neg Q \\to \\neg P`}</MathBlock>
        <p className="mt-2">
          However, a conditional is <em>not</em> equivalent to its converse or inverse. (The
          converse and inverse are equivalent to each other.)
        </p>
      </Theorem>

      <Example title="Converse vs Contrapositive" className="my-6">
        <p>
          Original: "If it is raining, then the ground is wet." (<InlineMath>P \to Q</InlineMath>)
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>Converse:</strong> "If the ground is wet, then it is raining." (Not equivalent—sprinklers?)
          </li>
          <li>
            <strong>Inverse:</strong> "If it is not raining, then the ground is not wet." (Not equivalent)
          </li>
          <li>
            <strong>Contrapositive:</strong> "If the ground is not wet, then it is not raining." (Equivalent ✓)
          </li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>proposition</strong> is a statement that is either true or false.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Connectives:</strong> <InlineMath>\neg</InlineMath> (not),{' '}
              <InlineMath>\land</InlineMath> (and), <InlineMath>\lor</InlineMath> (or),{' '}
              <InlineMath>\to</InlineMath> (implies), <InlineMath>\leftrightarrow</InlineMath> (iff).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <InlineMath>P \to Q</InlineMath> is false only when <InlineMath>P</InlineMath> is true
              and <InlineMath>Q</InlineMath> is false. False hypothesis makes the implication
              vacuously true.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              A <strong>tautology</strong> is always true; a <strong>contradiction</strong> is
              always false.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>De Morgan's Laws:</strong> <InlineMath>\neg(P \land Q) \equiv \neg P \lor \neg Q</InlineMath>{' '}
              and <InlineMath>\neg(P \lor Q) \equiv \neg P \land \neg Q</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <strong>Contrapositive:</strong> <InlineMath>P \to Q \equiv \neg Q \to \neg P</InlineMath>.
              Converse and inverse are not equivalent to the original.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
