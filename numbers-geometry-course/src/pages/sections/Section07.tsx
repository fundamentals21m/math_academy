import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section07Questions } from '../../data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">Induction</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We claimed that arithmetic rests on the counting process and that proofs draw
        their strength from the logical essence of counting:{' '}
        <strong>mathematical induction</strong>. Induction has been quietly intervening
        at crucial moments throughout our study of arithmetic.
      </p>

      {/* Descent Recap */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Descent: Downward Induction</h3>

      <p className="text-dark-200 mb-6">
        The form of induction called <strong>descent</strong> says that any descending
        sequence of natural numbers must have a least member. We've already used descent
        to prove fundamental results:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Results Proved by Descent</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">*</span>
            <span>The division property (Section 1.2)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">*</span>
            <span>Existence of a prime divisor (Section 1.3)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">*</span>
            <span>Termination of the Euclidean algorithm (Section 1.5)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">*</span>
            <span>Unique prime factorization (Section 1.6)</span>
          </li>
        </ul>
      </div>

      {/* Ascent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Ascent: Upward Induction</h3>

      <p className="text-dark-200 mb-6">
        In addition to descent, we use a form of induction called <strong>ascent</strong>:
        if a sequence of natural numbers includes 1, and includes{' '}
        <InlineMath>i + 1</InlineMath> when it includes <InlineMath>i</InlineMath>, then
        the sequence includes <em>all</em> natural numbers. This principle follows
        immediately from the definition of natural numbers by counting.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">The Principle of Induction</h4>
        <p className="text-dark-200 mb-4">
          To prove a statement <InlineMath>S(n)</InlineMath> for all natural numbers{' '}
          <InlineMath>n</InlineMath>, we prove:
        </p>
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <div>
              <strong>Base step:</strong> <InlineMath>S(n)</InlineMath> is true for{' '}
              <InlineMath>n = 1</InlineMath>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <div>
              <strong>Induction step:</strong> <InlineMath>S(n)</InlineMath> is true for{' '}
              <InlineMath>n = i + 1</InlineMath> when it is true for{' '}
              <InlineMath>n = i</InlineMath>
            </div>
          </li>
        </ol>
        <p className="text-dark-200 mt-4 text-sm">
          Then <InlineMath>S(n)</InlineMath> is true for <em>all</em> natural numbers{' '}
          <InlineMath>n</InlineMath>.
        </p>
      </div>

      {/* Examples of Ascent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Using Ascent in Proofs</h3>

      <p className="text-dark-200 mb-6">
        Ascent induction was used in two crucial results:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Correctness of Euclidean Algorithm" />
          <p className="text-sm text-dark-300 mb-2">
            We proved <InlineMath>S_n</InlineMath>:{' '}
            <InlineMath>\gcd(a_n, b_n) = \gcd(a, b)</InlineMath>
          </p>
          <ul className="text-xs text-dark-400 space-y-1">
            <li>Base: <InlineMath>(a_1, b_1) = (a, b)</InlineMath> ✓</li>
            <li>Step: <InlineMath>\gcd(a_i, b_i) = \gcd(a_{'{i+1}'}, b_{'{i+1}'})</InlineMath></li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="Linear Representation of GCD" />
          <p className="text-sm text-dark-300 mb-2">
            We proved <InlineMath>a_n</InlineMath> and <InlineMath>b_n</InlineMath> have
            the form <InlineMath>ax + by</InlineMath>
          </p>
          <ul className="text-xs text-dark-400 space-y-1">
            <li>Base: <InlineMath>a_1 = a</InlineMath>, <InlineMath>b_1 = b</InlineMath> ✓</li>
            <li>Step: differences preserve the form</li>
          </ul>
        </Card>
      </CardGrid>

      {/* Classic Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Classic Example</h3>

      <p className="text-dark-200 mb-6">
        The ascent form of induction is often used to prove equations involving sums.
        Consider the famous formula:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Sum of First n Natural Numbers</h4>
        <MathBlock>{`S(n): 1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}`}</MathBlock>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Proof by Induction</h4>
        <div className="space-y-4 text-dark-200 text-sm">
          <div>
            <strong className="text-emerald-400">Base step</strong> (<InlineMath>n = 1</InlineMath>):
            <p className="mt-1">
              LHS = 1, RHS = <InlineMath>\frac{'{1(2)}'}{'{2}'} = 1</InlineMath>. ✓
            </p>
          </div>
          <div>
            <strong className="text-emerald-400">Induction step</strong>:
            Assume <InlineMath>S(i)</InlineMath> is true. Add <InlineMath>(i+1)</InlineMath> to both sides:
            <MathBlock>{`1 + 2 + \\cdots + i + (i+1) = \\frac{i(i+1)}{2} + (i+1)`}</MathBlock>
            <MathBlock>{`= \\frac{i(i+1) + 2(i+1)}{2} = \\frac{(i+1)(i+2)}{2}`}</MathBlock>
            <p className="mt-1">
              This is exactly <InlineMath>S(i+1)</InlineMath>. ✓
            </p>
          </div>
        </div>
      </div>

      {/* Discovering Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Discovering vs. Proving</h3>

      <p className="text-dark-200 mb-6">
        A frequent complaint about induction proofs is that one must guess the formula
        before proving it. However, clever methods can <em>discover</em> formulas too.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Gauss's Trick</h4>
        <p className="text-dark-200 mb-3 text-sm">
          Write the sum twice, once forwards and once backwards:
        </p>
        <div className="font-mono text-sm text-dark-300 space-y-1">
          <div className="flex gap-4">
            <span>1</span><span>+</span><span>2</span><span>+</span>
            <span>...</span><span>+</span><span>(n-1)</span><span>+</span><span>n</span>
          </div>
          <div className="flex gap-4">
            <span>n</span><span>+</span><span>(n-1)</span><span>+</span>
            <span>...</span><span>+</span><span>2</span><span>+</span><span>1</span>
          </div>
        </div>
        <p className="text-dark-200 mt-3 text-sm">
          Each column sums to <InlineMath>n + 1</InlineMath>, and there are{' '}
          <InlineMath>n</InlineMath> columns. So{' '}
          <InlineMath>2(1 + 2 + \cdots + n) = n(n+1)</InlineMath>.
        </p>
      </div>

      <Callout type="info">
        <p>
          Such "non-inductive" proofs still use induction implicitly—here, to verify
          that each column sums to <InlineMath>n + 1</InlineMath>. The base step and
          induction step are just so easy they need not be spelled out.
        </p>
      </Callout>

      {/* More Sum Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">More Sum Formulas</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Sum of Squares" />
          <MathBlock>{`1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader title="Sum of Cubes" />
          <MathBlock>{`1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2`}</MathBlock>
          <p className="text-xs text-dark-400 mt-2">
            = (1 + 2 + ... + n)²
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800 rounded-lg p-6 mt-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Geometric Series</h4>
        <MathBlock>{`1 + r + r^2 + r^3 + \\cdots + r^n = \\frac{1 - r^{n+1}}{1 - r}`}</MathBlock>
        <p className="text-dark-200 mt-3 text-sm">
          This can be proved by induction or discovered by multiplying both sides by{' '}
          <InlineMath>(1 - r)</InlineMath>.
        </p>
      </div>

      {/* Descent vs Ascent */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Descent vs. Ascent</h3>

      <Callout type="success">
        <p>
          <strong>Descent</strong> and <strong>ascent</strong> are two sides of the
          same coin—both capture the essence of the counting process. Descent says
          "you can't go down forever"; ascent says "starting from 1, you can reach
          any number."
        </p>
      </Callout>

      <div className="bg-dark-800 rounded-lg p-6 mt-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Zermelo's Proof of Unique Factorization</h4>
        <p className="text-dark-200 text-sm">
          If there exists a natural number with two different prime factorizations,
          then by descent there is a <em>least</em> such number{' '}
          <InlineMath>n</InlineMath>. This <InlineMath>n</InlineMath> must have two
          factorizations with no common prime factor (otherwise we could cancel to get
          a smaller counterexample). This leads to a contradiction.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Descent</strong> (downward induction): any descending sequence
              of natural numbers has a least member.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Ascent</strong> (upward induction): prove <InlineMath>S(1)</InlineMath>{' '}
              and <InlineMath>S(i) \Rightarrow S(i+1)</InlineMath> to conclude{' '}
              <InlineMath>S(n)</InlineMath> for all <InlineMath>n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Induction underlies all major results in arithmetic: division, primes,
              Euclidean algorithm, unique factorization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Classic sum formulas like <InlineMath>1 + 2 + \cdots + n = \frac{'{n(n+1)}'}{'{2}'}</InlineMath>{' '}
              are proved by induction.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Induction captures the logical essence of counting—the foundation of
              all arithmetic.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={7} questions={section07Questions} />
    </LessonLayout>
  );
}
