import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Introduction */}
      <p>
        A <strong>proof</strong> is a rigorous argument establishing the truth of a mathematical
        statement. This section introduces the main strategies used in constructing proofs.
        Mastering these techniques is essential for mathematics.
      </p>

      <h2>Direct Proof</h2>

      <Definition title="Direct Proof" className="my-6">
        <p>
          A <strong>direct proof</strong> of <InlineMath>P \to Q</InlineMath> proceeds by assuming{' '}
          <InlineMath>P</InlineMath> is true and showing, through logical steps, that{' '}
          <InlineMath>Q</InlineMath> must follow.
        </p>
        <p className="mt-2">Structure:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Assume <InlineMath>P</InlineMath> (the hypothesis)</li>
          <li>Use definitions, known results, and logic</li>
          <li>Conclude <InlineMath>Q</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Direct Proof Example" className="my-6">
        <Theorem title="Sum of Two Even Integers">
          <p>If <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath> are even integers, then <InlineMath>m + n</InlineMath> is even.</p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof:</p>
          <p>
            Assume <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath> are even.
          </p>
          <p className="mt-2">
            By definition of even, <InlineMath>m = 2a</InlineMath> and <InlineMath>n = 2b</InlineMath>{' '}
            for some integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
          </p>
          <p className="mt-2">
            Then <InlineMath>m + n = 2a + 2b = 2(a + b)</InlineMath>.
          </p>
          <p className="mt-2">
            Since <InlineMath>a + b</InlineMath> is an integer, <InlineMath>m + n</InlineMath> is
            even by definition. <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <Example title="Another Direct Proof" className="my-6">
        <Theorem title="Product of Rationals">
          <p>The product of two rational numbers is rational.</p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof:</p>
          <p>
            Let <InlineMath>r</InlineMath> and <InlineMath>s</InlineMath> be rational numbers.
          </p>
          <p className="mt-2">
            By definition, <InlineMath>r = a/b</InlineMath> and <InlineMath>s = c/d</InlineMath>{' '}
            where <InlineMath>a, b, c, d</InlineMath> are integers with{' '}
            <InlineMath>b, d \neq 0</InlineMath>.
          </p>
          <p className="mt-2">
            Then <InlineMath>rs = (a/b)(c/d) = (ac)/(bd)</InlineMath>.
          </p>
          <p className="mt-2">
            Since <InlineMath>ac</InlineMath> and <InlineMath>bd</InlineMath> are integers and{' '}
            <InlineMath>bd \neq 0</InlineMath>, we have that <InlineMath>rs</InlineMath> is rational.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <h2>Proof by Contrapositive</h2>

      <Definition title="Proof by Contrapositive" className="my-6">
        <p>
          To prove <InlineMath>P \to Q</InlineMath>, we can instead prove its contrapositive{' '}
          <InlineMath>\neg Q \to \neg P</InlineMath>, which is logically equivalent.
        </p>
        <p className="mt-2">Structure:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Assume <InlineMath>\neg Q</InlineMath></li>
          <li>Use definitions, known results, and logic</li>
          <li>Conclude <InlineMath>\neg P</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Proof by Contrapositive Example" className="my-6">
        <Theorem title="Odd Square Implies Odd">
          <p>
            For any integer <InlineMath>n</InlineMath>, if <InlineMath>n^2</InlineMath> is odd,
            then <InlineMath>n</InlineMath> is odd.
          </p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof (by contrapositive):</p>
          <p>
            We prove: If <InlineMath>n</InlineMath> is not odd (i.e., even), then{' '}
            <InlineMath>n^2</InlineMath> is not odd (i.e., even).
          </p>
          <p className="mt-2">
            Assume <InlineMath>n</InlineMath> is even. Then <InlineMath>n = 2k</InlineMath> for some
            integer <InlineMath>k</InlineMath>.
          </p>
          <p className="mt-2">
            Then <InlineMath>n^2 = (2k)^2 = 4k^2 = 2(2k^2)</InlineMath>.
          </p>
          <p className="mt-2">
            Since <InlineMath>2k^2</InlineMath> is an integer, <InlineMath>n^2</InlineMath> is even.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <h2>Proof by Contradiction</h2>

      <Definition title="Proof by Contradiction" className="my-6">
        <p>
          To prove a statement <InlineMath>P</InlineMath> by <strong>contradiction</strong>, assume{' '}
          <InlineMath>\neg P</InlineMath> and derive a logical contradiction. This shows{' '}
          <InlineMath>\neg P</InlineMath> must be false, so <InlineMath>P</InlineMath> is true.
        </p>
        <p className="mt-2">Structure:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Assume <InlineMath>\neg P</InlineMath> (the negation)</li>
          <li>Derive a contradiction (e.g., <InlineMath>Q \land \neg Q</InlineMath>)</li>
          <li>Conclude <InlineMath>P</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Classic Proof by Contradiction" className="my-6">
        <Theorem title="Irrationality of √2">
          <p><InlineMath>\sqrt{'{2}'}</InlineMath> is irrational.</p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof (by contradiction):</p>
          <p>
            Suppose <InlineMath>\sqrt{'{2}'}</InlineMath> is rational. Then{' '}
            <InlineMath>\sqrt{'{2}'} = a/b</InlineMath> where <InlineMath>a, b</InlineMath> are
            integers with <InlineMath>b \neq 0</InlineMath> and <InlineMath>\gcd(a, b) = 1</InlineMath>{' '}
            (lowest terms).
          </p>
          <p className="mt-2">
            Squaring: <InlineMath>2 = a^2/b^2</InlineMath>, so <InlineMath>a^2 = 2b^2</InlineMath>.
          </p>
          <p className="mt-2">
            Thus <InlineMath>a^2</InlineMath> is even, so <InlineMath>a</InlineMath> is even (by
            contrapositive of previous theorem).
          </p>
          <p className="mt-2">
            Write <InlineMath>a = 2k</InlineMath>. Then <InlineMath>(2k)^2 = 2b^2</InlineMath>, so{' '}
            <InlineMath>4k^2 = 2b^2</InlineMath>, giving <InlineMath>b^2 = 2k^2</InlineMath>.
          </p>
          <p className="mt-2">
            Thus <InlineMath>b^2</InlineMath> is even, so <InlineMath>b</InlineMath> is even.
          </p>
          <p className="mt-2">
            But both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> being even contradicts{' '}
            <InlineMath>\gcd(a, b) = 1</InlineMath>.
          </p>
          <p className="mt-2">
            Therefore <InlineMath>\sqrt{'{2}'}</InlineMath> is irrational.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <Example title="Infinitely Many Primes" className="my-6">
        <Theorem title="Euclid">
          <p>There are infinitely many prime numbers.</p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof (by contradiction):</p>
          <p>
            Suppose there are only finitely many primes: <InlineMath>p_1, p_2, \ldots, p_n</InlineMath>.
          </p>
          <p className="mt-2">
            Consider <InlineMath>N = p_1 p_2 \cdots p_n + 1</InlineMath>.
          </p>
          <p className="mt-2">
            Since <InlineMath>N {'>'} 1</InlineMath>, <InlineMath>N</InlineMath> has a prime divisor{' '}
            <InlineMath>p</InlineMath>.
          </p>
          <p className="mt-2">
            But <InlineMath>N</InlineMath> leaves remainder 1 when divided by any{' '}
            <InlineMath>p_i</InlineMath>, so <InlineMath>p \neq p_i</InlineMath> for all{' '}
            <InlineMath>i</InlineMath>.
          </p>
          <p className="mt-2">
            This contradicts that <InlineMath>p_1, \ldots, p_n</InlineMath> are all the primes.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <h2>Proof by Cases</h2>

      <Definition title="Proof by Cases" className="my-6">
        <p>
          To prove a statement, divide the possibilities into exhaustive cases and prove the
          statement in each case separately.
        </p>
        <p className="mt-2">
          If we want to prove <InlineMath>P \to Q</InlineMath> and <InlineMath>P</InlineMath> can
          be split as <InlineMath>P_1 \lor P_2 \lor \cdots \lor P_n</InlineMath>, prove each{' '}
          <InlineMath>P_i \to Q</InlineMath>.
        </p>
      </Definition>

      <Example title="Proof by Cases Example" className="my-6">
        <Theorem title="Triangle Inequality for |x|">
          <p>
            For all real numbers <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>:{' '}
            <InlineMath>|x + y| \leq |x| + |y|</InlineMath>.
          </p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof (by cases):</p>
          <p><strong>Case 1:</strong> <InlineMath>x + y \geq 0</InlineMath>.</p>
          <p className="ml-4">
            Then <InlineMath>|x + y| = x + y \leq |x| + |y|</InlineMath> since{' '}
            <InlineMath>x \leq |x|</InlineMath> and <InlineMath>y \leq |y|</InlineMath>.
          </p>
          <p className="mt-3"><strong>Case 2:</strong> <InlineMath>x + y {'<'} 0</InlineMath>.</p>
          <p className="ml-4">
            Then <InlineMath>|x + y| = -(x + y) = (-x) + (-y) \leq |x| + |y|</InlineMath> since{' '}
            <InlineMath>-x \leq |x|</InlineMath> and <InlineMath>-y \leq |y|</InlineMath>.
          </p>
          <p className="mt-3">
            Both cases give <InlineMath>|x + y| \leq |x| + |y|</InlineMath>.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
      </Example>

      <h2>Counterexamples</h2>

      <Definition title="Counterexample" className="my-6">
        <p>
          To <strong>disprove</strong> a universal statement <InlineMath>\forall x \, P(x)</InlineMath>,
          it suffices to find a single <strong>counterexample</strong>—a value{' '}
          <InlineMath>a</InlineMath> for which <InlineMath>P(a)</InlineMath> is false.
        </p>
        <p className="mt-2">
          One counterexample disproves a universal claim; no number of examples can prove one.
        </p>
      </Definition>

      <Example title="Counterexample" className="my-6">
        <p><strong>Claim:</strong> For all integers <InlineMath>n \geq 2</InlineMath>, <InlineMath>2^n - 1</InlineMath> is prime.</p>
        <p className="mt-3"><strong>Counterexample:</strong> <InlineMath>n = 4</InlineMath>.</p>
        <p className="mt-1">
          <InlineMath>2^4 - 1 = 15 = 3 \times 5</InlineMath>, which is not prime.
        </p>
        <p className="mt-3">
          The claim is <strong>false</strong>.
        </p>
      </Example>

      <h2>Existence and Uniqueness Proofs</h2>

      <Definition title="Existence Proof" className="my-6">
        <p>
          To prove <InlineMath>\exists x \, P(x)</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Constructive:</strong> Exhibit a specific <InlineMath>a</InlineMath> and show{' '}
            <InlineMath>P(a)</InlineMath> is true.
          </li>
          <li>
            <strong>Non-constructive:</strong> Prove such an <InlineMath>x</InlineMath> must exist
            without explicitly finding it.
          </li>
        </ul>
      </Definition>

      <Example title="Constructive Existence Proof" className="my-6">
        <Theorem title="Irrational Powers">
          <p>There exist irrational numbers <InlineMath>a, b</InlineMath> such that <InlineMath>a^b</InlineMath> is rational.</p>
        </Theorem>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Proof:</p>
          <p>
            Consider <InlineMath>a = b = \sqrt{'{2}'}</InlineMath> (both irrational).
          </p>
          <p className="mt-2">
            <strong>Case 1:</strong> If <InlineMath>(\sqrt{'{2}'})^{'{\\sqrt{2}}'}</InlineMath> is
            rational, we're done with <InlineMath>a = b = \sqrt{'{2}'}</InlineMath>.
          </p>
          <p className="mt-2">
            <strong>Case 2:</strong> If <InlineMath>(\sqrt{'{2}'})^{'{\\sqrt{2}}'}</InlineMath> is
            irrational, let <InlineMath>a = (\sqrt{'{2}'})^{'{\\sqrt{2}}'}</InlineMath> and{' '}
            <InlineMath>b = \sqrt{'{2}'}</InlineMath>.
          </p>
          <p className="ml-4">
            Then <InlineMath>a^b = ((\sqrt{'{2}'})^{'{\\sqrt{2}}'})^{'{\\sqrt{2}}'} = (\sqrt{'{2}'})^2 = 2</InlineMath>,
            which is rational.
          </p>
          <p className="mt-2">
            Either way, such <InlineMath>a, b</InlineMath> exist.{' '}
            <span className="text-dark-400">□</span>
          </p>
        </div>
        <p className="mt-3 text-dark-400">
          Note: This is non-constructive—we don't know which case holds!
        </p>
      </Example>

      <Definition title="Uniqueness Proof" className="my-6">
        <p>
          To prove <InlineMath>\exists! x \, P(x)</InlineMath> (there exists a unique x):
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Existence:</strong> Show some <InlineMath>a</InlineMath> satisfies <InlineMath>P</InlineMath>.</li>
          <li><strong>Uniqueness:</strong> Show if <InlineMath>P(b)</InlineMath> and <InlineMath>P(c)</InlineMath>, then <InlineMath>b = c</InlineMath>.</li>
        </ol>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <strong>Direct proof:</strong> Assume <InlineMath>P</InlineMath>, derive{' '}
              <InlineMath>Q</InlineMath>. Use definitions and known results.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Contrapositive:</strong> Prove <InlineMath>\neg Q \to \neg P</InlineMath>{' '}
              instead of <InlineMath>P \to Q</InlineMath>. Useful when{' '}
              <InlineMath>\neg Q</InlineMath> gives more to work with.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Contradiction:</strong> Assume <InlineMath>\neg P</InlineMath>, derive a
              contradiction. Useful for proving negatives or non-existence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Cases:</strong> Split into exhaustive cases and prove each. Cover all
              possibilities.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Counterexample:</strong> One example disproving{' '}
              <InlineMath>\forall x \, P(x)</InlineMath> is enough.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <strong>Existence:</strong> Show an example exists (constructive) or must exist
              (non-constructive). <strong>Uniqueness:</strong> Show any two solutions are equal.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
