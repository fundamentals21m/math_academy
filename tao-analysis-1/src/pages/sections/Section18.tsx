import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-gray-300 mb-4">
          We now have all four basic arithmetic operations on the reals: addition, subtraction,
          multiplication, and division, with all the usual rules of algebra. Next we turn to
          the notion of <strong>order</strong> on the reals—determining when one real number
          is larger or smaller than another.
        </p>
        <p className="text-gray-300 mb-4">
          We know that every rational number is positive, negative, or zero. We want to say
          the same thing for the reals: each real number should be positive, negative, or zero.
          Since a real number <Math>x</Math> is just a formal limit of rationals <Math>a_n</Math>,
          it is tempting to define: a real number <Math>x = \text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math> is
          positive if all of the <Math>a_n</Math> are positive. However, this naive approach
          has problems.
        </p>

        <Callout type="warning" title="Why the Naive Definition Fails">
          <p className="mb-2">
            Consider the sequence <Math>(a_n)_{'{'}{'{'}n=1{'}'}{'}'}{'{'}^\infty{'}'}</Math> defined
            by <Math>a_n := 10^{'{-n}'}</Math>:
          </p>
          <MathBlock>
            0.1, 0.01, 0.001, 0.0001, \ldots
          </MathBlock>
          <p className="mb-2">
            Every term is positive, yet this sequence is equivalent to <Math>0, 0, 0, 0, \ldots</Math>,
            so <Math>\text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n = 0</Math>. The formal
            limit is zero, not positive!
          </p>
          <p>
            Another problematic example: <Math>0.1, -0.01, 0.001, -0.0001, \ldots</Math> alternates
            between positive and negative, yet its formal limit is also zero.
          </p>
        </Callout>

        <p className="text-gray-300 mt-4">
          The solution, as with reciprocals, is to restrict attention to sequences that are
          <strong> bounded away from zero</strong>. This ensures the "sign" of the sequence
          is stable and doesn't vanish in the limit.
        </p>
      </section>

      {/* Positively and Negatively Bounded Away from Zero */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Sequences Bounded Away from Zero (Revisited)
        </h2>

        <Definition
          id="5.4.1"
          title="Positively and Negatively Bounded Away from Zero"
        >
          <p className="mb-2">
            Let <Math>(a_n)_{'{'}{'{'}n=1{'}'}{'}'}{'{'}^\infty{'}'}</Math> be a sequence of rationals.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              The sequence is <strong>positively bounded away from zero</strong> iff there exists
              a positive rational <Math>c {'>'} 0</Math> such that <Math>a_n \geq c</Math> for
              all <Math>n \geq 1</Math>. (In particular, the sequence is entirely positive.)
            </li>
            <li>
              The sequence is <strong>negatively bounded away from zero</strong> iff there exists
              a negative rational <Math>-c {'<'} 0</Math> such that <Math>a_n \leq -c</Math> for
              all <Math>n \geq 1</Math>. (In particular, the sequence is entirely negative.)
            </li>
          </ul>
        </Definition>

        <Example id="5.4.2" title="Examples of Bounded Away from Zero">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">Positively bounded away from zero:</p>
              <MathBlock>
                1.1, 1.01, 1.001, 1.0001, \ldots
              </MathBlock>
              <p className="text-gray-300">
                All terms are <Math>\geq 1</Math>, so this sequence is positively bounded away
                from zero (with <Math>c = 1</Math>).
              </p>
            </div>

            <div>
              <p className="font-semibold text-emerald-300 mb-1">Negatively bounded away from zero:</p>
              <MathBlock>
                -1.1, -1.01, -1.001, -1.0001, \ldots
              </MathBlock>
              <p className="text-gray-300">
                All terms are <Math>\leq -1</Math>, so this sequence is negatively bounded away
                from zero (with <Math>c = 1</Math>).
              </p>
            </div>

            <div>
              <p className="font-semibold text-emerald-300 mb-1">Bounded away from zero, but neither positively nor negatively:</p>
              <MathBlock>
                1, -1, 1, -1, 1, -1, \ldots
              </MathBlock>
              <p className="text-gray-300">
                All terms have <Math>|a_n| \geq 1</Math>, so the sequence is bounded away from zero.
                However, it alternates sign, so it is neither positively nor negatively bounded
                away from zero.
              </p>
            </div>
          </div>
        </Example>

        <Callout type="info" title="Key Observations">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Any sequence that is positively or negatively bounded away from zero is also
              bounded away from zero.
            </li>
            <li>
              A sequence cannot be <em>both</em> positively bounded away from zero and negatively
              bounded away from zero at the same time (this would require <Math>a_n \geq c</Math> and <Math>a_n \leq -c</Math> simultaneously, which is impossible for <Math>c {'>'} 0</Math>).
            </li>
          </ul>
        </Callout>
      </section>

      {/* Positive and Negative Real Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Positive and Negative Real Numbers
        </h2>

        <Definition
          id="5.4.3"
          title="Positive and Negative Real Numbers"
        >
          <ul className="list-disc list-inside space-y-2">
            <li>
              A real number <Math>x</Math> is said to be <strong>positive</strong> iff it can
              be written as <Math>x = \text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math> for
              some Cauchy sequence <Math>(a_n)_{'{'}{'{'}n=1{'}'}{'}'}{'{'}^\infty{'}'}</Math> which
              is <em>positively bounded away from zero</em>.
            </li>
            <li>
              A real number <Math>x</Math> is said to be <strong>negative</strong> iff it can
              be written as <Math>x = \text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math> for
              some Cauchy sequence <Math>(a_n)_{'{'}{'{'}n=1{'}'}{'}'}{'{'}^\infty{'}'}</Math> which
              is <em>negatively bounded away from zero</em>.
            </li>
          </ul>
        </Definition>

        <p className="text-gray-300 my-4">
          This definition captures the intuition that a positive real number is "bounded away"
          from zero on the positive side—it can't just be an infinitesimal positive quantity
          that vanishes in the limit.
        </p>

        <Example id="5.4.3.1" title="Identifying Positive and Negative Reals">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                The real number <Math>\sqrt{'{'}2{'}'}</Math> is positive:
              </p>
              <p className="text-gray-300">
                The sequence <Math>1.4, 1.41, 1.414, 1.4142, \ldots</Math> converges to <Math>\sqrt{'{'}2{'}'}</Math> and
                is positively bounded away from zero (all terms <Math>\geq 1.4</Math>).
              </p>
            </div>

            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                The real number <Math>-\pi</Math> is negative:
              </p>
              <p className="text-gray-300">
                Any Cauchy sequence converging to <Math>-\pi</Math> can be modified to be
                negatively bounded away from zero (all terms eventually <Math>\leq -3</Math>).
              </p>
            </div>

            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                The sequence <Math>0.1, 0.01, 0.001, \ldots</Math> gives zero:
              </p>
              <p className="text-gray-300">
                Even though all terms are positive, this sequence is <em>not</em> positively
                bounded away from zero (no single <Math>c {'>'} 0</Math> works as a lower bound).
                The formal limit is <Math>0</Math>, which is neither positive nor negative.
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Trichotomy and Basic Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Trichotomy and Basic Properties
        </h2>

        <Theorem
          id="5.4.4"
          title="Basic Properties of Positive Reals"
          proof={`We prove each part:

**Part (a): Trichotomy.** Let x = LIM_{n→∞}aₙ for some Cauchy sequence (aₙ). If (aₙ) is equivalent to (0), then x = 0. Otherwise, by Lemma 5.3.14, x can be written as a formal limit of a sequence bounded away from zero. Such a sequence must be either positively bounded away from zero (making x positive) or negatively bounded away from zero (making x negative), but not both.

To show mutual exclusivity: if x is both positive and zero, then x = LIM_{n→∞}bₙ for some positively bounded sequence (bₙ), but also x = 0. This means (bₙ) is equivalent to (0), contradicting that (bₙ) is positively bounded away from zero. Similar reasoning rules out the other overlaps.

**Part (b): Negation.** If x is negative, then x = LIM_{n→∞}aₙ where aₙ ≤ -c for all n ≥ 1. Then -x = LIM_{n→∞}(-aₙ) where -aₙ ≥ c > 0 for all n ≥ 1, so -x is positive. The converse is similar.

**Part (c): Closure under addition.** If x and y are positive, write x = LIM_{n→∞}aₙ and y = LIM_{n→∞}bₙ where aₙ ≥ c and bₙ ≥ d for positive rationals c, d. Then aₙ + bₙ ≥ c + d > 0 for all n, so (aₙ + bₙ) is positively bounded away from zero, hence x + y is positive.

**Part (d): Closure under multiplication.** If x and y are positive with aₙ ≥ c > 0 and bₙ ≥ d > 0, then aₙbₙ ≥ cd > 0 for all n, so (aₙbₙ) is positively bounded away from zero, hence xy is positive. □`}
        >
          <p className="mb-2">For every real number <Math>x</Math>, exactly one of the following three statements is true:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4 mb-4">
            <li><Math>x</Math> is zero</li>
            <li><Math>x</Math> is positive</li>
            <li><Math>x</Math> is negative</li>
          </ol>
          <p className="mb-2">Furthermore:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>A real number <Math>x</Math> is negative if and only if <Math>-x</Math> is positive.</li>
            <li>If <Math>x</Math> and <Math>y</Math> are positive, then so are <Math>x + y</Math> and <Math>xy</Math>.</li>
          </ul>
        </Theorem>

        <Callout type="info" title="Trichotomy Law">
          <p>
            This is the <strong>trichotomy property</strong> for real numbers: every real is
            exactly one of positive, negative, or zero. This fundamental property allows us to
            define ordering on <Math>\mathbb{'{'}R{'}'}</Math> and is essential for analysis.
          </p>
        </Callout>
      </section>

      {/* Definition of Order */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Ordering the Real Numbers
        </h2>

        <p className="text-gray-300 mb-4">
          With the notion of positive and negative reals established, we can now define
          the order relations on <Math>\mathbb{'{'}R{'}'}</Math>.
        </p>

        <Definition
          id="5.4.5"
          title="Order Relations on the Reals"
        >
          <p className="mb-2">Let <Math>x</Math> and <Math>y</Math> be real numbers.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              We say <Math>x {'>'} y</Math> (<Math>x</Math> is greater than <Math>y</Math>) iff <Math>x - y</Math> is
              a positive real number.
            </li>
            <li>
              We say <Math>x {'<'} y</Math> (<Math>x</Math> is less than <Math>y</Math>) iff <Math>x - y</Math> is
              a negative real number, or equivalently, iff <Math>y {'>'} x</Math>.
            </li>
            <li>
              We say <Math>x \geq y</Math> (<Math>x</Math> is greater than or equal to <Math>y</Math>) iff <Math>x {'>'} y</Math> or <Math>x = y</Math>.
            </li>
            <li>
              We say <Math>x \leq y</Math> (<Math>x</Math> is less than or equal to <Math>y</Math>) iff <Math>x {'<'} y</Math> or <Math>x = y</Math>.
            </li>
          </ul>
        </Definition>

        <Example id="5.4.5.1" title="Comparing Real Numbers">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">Example 1: <Math>\sqrt{'{'}2{'}'} {'>'} 1</Math></p>
              <p className="text-gray-300">
                We have <Math>\sqrt{'{'}2{'}'} - 1 \approx 0.414\ldots</Math>, which is positive
                (the sequence <Math>0.4, 0.41, 0.414, \ldots</Math> is positively bounded away
                from zero). Therefore <Math>\sqrt{'{'}2{'}'} {'>'} 1</Math>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">Example 2: <Math>-3 {'<'} 2</Math></p>
              <p className="text-gray-300">
                We have <Math>-3 - 2 = -5</Math>, which is negative.
                Therefore <Math>-3 {'<'} 2</Math>.
              </p>
            </div>
          </div>
        </Example>

        <Theorem
          id="5.4.6"
          title="Properties of Order"
          proof={`These properties follow from Proposition 5.4.4:

**Trichotomy:** By Proposition 5.4.4, x - y is exactly one of zero, positive, or negative. This corresponds to x = y, x > y, or x < y respectively.

**Transitivity:** If x > y and y > z, then x - y and y - z are both positive. By closure under addition, (x - y) + (y - z) = x - z is positive, so x > z.

**Addition preserves order:** If x > y, then x - y is positive. Since (x + z) - (y + z) = x - y, we have x + z > y + z.

**Multiplication preserves order:** If x > y and z > 0, then x - y and z are both positive. By closure under multiplication, (x - y)z = xz - yz is positive, so xz > yz. □`}
        >
          <p className="mb-2">Let <Math>x, y, z</Math> be real numbers. Then:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>
              <strong>Trichotomy:</strong> Exactly one of <Math>x {'>'} y</Math>, <Math>x = y</Math>, or <Math>x {'<'} y</Math> holds.
            </li>
            <li>
              <strong>Transitivity:</strong> If <Math>x {'>'} y</Math> and <Math>y {'>'} z</Math>, then <Math>x {'>'} z</Math>.
            </li>
            <li>
              <strong>Addition preserves order:</strong> If <Math>x {'>'} y</Math>, then <Math>x + z {'>'} y + z</Math>.
            </li>
            <li>
              <strong>Positive multiplication preserves order:</strong> If <Math>x {'>'} y</Math> and <Math>z {'>'} 0</Math>, then <Math>xz {'>'} yz</Math>.
            </li>
          </ol>
        </Theorem>

        <Callout type="note" title="Order-Reversing Multiplication">
          <p>
            If <Math>z {'<'} 0</Math>, then multiplying an inequality by <Math>z</Math> <em>reverses</em> the
            inequality: if <Math>x {'>'} y</Math> and <Math>z {'<'} 0</Math>, then <Math>xz {'<'} yz</Math>.
            This follows because <Math>-z {'>'} 0</Math>, so <Math>x(-z) {'>'} y(-z)</Math>, which
            gives <Math>-xz {'>'} -yz</Math>, hence <Math>xz {'<'} yz</Math>.
          </p>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.4.1</p>
            <p className="text-gray-300">
              Prove Proposition 5.4.4. (Hint: Use Lemma 5.3.14 and the properties of sequences
              bounded away from zero.)
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.4.2</p>
            <p className="text-gray-300">
              Show that if <Math>x</Math> is a positive real number, then <Math>x^{'{-1}'}</Math> is
              also positive. What about if <Math>x</Math> is negative?
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.4.3</p>
            <p className="text-gray-300">
              Show that for any two real numbers <Math>x, y</Math>, we have <Math>x {'<'} y</Math> if
              and only if <Math>y - x</Math> is positive. Also show that <Math>x {'<'} y</Math> if
              and only if <Math>-y {'<'} -x</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.4.4</p>
            <p className="text-gray-300">
              Let <Math>x</Math> and <Math>y</Math> be positive real numbers. Show
              that <Math>x {'<'} y</Math> if and only if <Math>x^2 {'<'} y^2</Math>. Show
              that <Math>x {'<'} y</Math> if and only if <Math>y^{'{-1}'} {'<'} x^{'{-1}'}</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.4.5</p>
            <p className="text-gray-300">
              Show that for any positive real numbers <Math>x, y, z</Math>, we
              have <Math>x {'<'} y</Math> if and only if <Math>xz {'<'} yz</Math>.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800">
            <h4 className="font-semibold text-blue-300 mb-2">Bounded Away from Zero</h4>
            <p className="text-gray-300 text-sm">
              A sequence is positively (resp. negatively) bounded away from zero if all terms
              are bounded below (resp. above) by a positive (resp. negative) constant. This
              prevents sign changes and vanishing.
            </p>
          </div>

          <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-800">
            <h4 className="font-semibold text-amber-300 mb-2">Positive/Negative Reals</h4>
            <p className="text-gray-300 text-sm">
              A real number is positive (resp. negative) iff it equals the formal limit of a
              Cauchy sequence that is positively (resp. negatively) bounded away from zero.
            </p>
          </div>

          <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-800">
            <h4 className="font-semibold text-emerald-300 mb-2">Trichotomy</h4>
            <p className="text-gray-300 text-sm">
              Every real number is exactly one of: positive, negative, or zero. This fundamental
              property is inherited from the rationals through the careful construction.
            </p>
          </div>

          <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800">
            <h4 className="font-semibold text-purple-300 mb-2">Order from Positivity</h4>
            <p className="text-gray-300 text-sm">
              We define <Math>x {'>'} y</Math> iff <Math>x - y</Math> is positive. This gives
              a total order on <Math>\mathbb{'{'}R{'}'}</Math> with all expected properties
              (transitivity, compatibility with arithmetic).
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <Callout type="info" title="Looking Ahead">
        <p>
          With ordering established, we can now discuss concepts like <strong>upper bounds</strong>,
          <strong> suprema</strong>, and the <strong>least upper bound property</strong>—the key
          property that distinguishes <Math>\mathbb{'{'}R{'}'}</Math> from <Math>\mathbb{'{'}Q{'}'}</Math>.
          In the next section, we'll explore these ideas and prove that the reals are
          <strong> complete</strong>: every nonempty set of reals that is bounded above has a
          least upper bound in <Math>\mathbb{'{'}R{'}'}</Math>. This completeness is what allows
          us to take limits and do calculus!
        </p>
      </Callout>
    </LessonLayout>
  );
}
