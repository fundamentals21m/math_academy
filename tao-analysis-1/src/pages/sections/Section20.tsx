import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-gray-300 mb-4">
          In Section 4.3, we defined exponentiation <Math>x^n</Math> when <Math>x</Math> is
          rational and <Math>n</Math> is a natural number, or when <Math>x</Math> is a non-zero
          rational and <Math>n</Math> is an integer. Now that we have the real numbers and
          the least upper bound property, we can extend exponentiation significantly.
        </p>
        <p className="text-gray-300 mb-4">
          In this section, we will:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 mb-4">
          <li>Define <Math>x^n</Math> for real <Math>x</Math> and integer <Math>n</Math></li>
          <li>Define <Math>x^{'{'}1/n{'}'}</Math> (the <Math>n</Math>th root) for positive real <Math>x</Math></li>
          <li>Define <Math>x^q</Math> for positive real <Math>x</Math> and rational <Math>q</Math></li>
        </ul>

        <Callout type="info" title="The Power of Completeness">
          <p>
            The key to defining roots is the least upper bound property. We define <Math>x^{'{'}1/n{'}'}</Math> as
            the supremum of a certain set—something that was impossible in the rationals because
            suprema don't always exist there. This is why <Math>\sqrt{'{'}2{'}'}</Math> exists in <Math>\mathbb{'{'}R{'}'}</Math> but
            not in <Math>\mathbb{'{'}Q{'}'}</Math>.
          </p>
        </Callout>
      </section>

      {/* Integer Exponents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Exponentiation by Integers
        </h2>

        <p className="text-gray-300 mb-4">
          We begin by extending exponentiation to real bases with integer exponents. The
          definitions are the same as for rationals, but now work for all real numbers.
        </p>

        <Definition id="5.6.1" title="Exponentiating a Real by a Natural Number">
          <p className="mb-2">
            Let <Math>x</Math> be a real number. To raise <Math>x</Math> to the power <Math>0</Math>,
            we define <Math>x^0 := 1</Math>.
          </p>
          <p>
            Recursively, if <Math>x^n</Math> has been defined for some natural number <Math>n</Math>,
            then we define <Math>x^{'{'}n+1{'}'} := x^n \times x</Math>.
          </p>
        </Definition>

        <Definition id="5.6.2" title="Exponentiating a Real by an Integer">
          <p>
            Let <Math>x</Math> be a <strong>non-zero</strong> real number. For any negative
            integer <Math>-n</Math>, we define <Math>x^{'{-n}'} := 1/x^n</Math>.
          </p>
        </Definition>

        <p className="text-gray-300 my-4">
          These definitions are consistent with our earlier definitions for rational bases.
          Furthermore, all the laws of exponentiation that held for rationals continue to
          hold for reals:
        </p>

        <Theorem id="5.6.3" title="Laws of Exponentiation for Reals">
          <p>
            All the properties in Propositions 4.3.10 and 4.3.12 remain valid if <Math>x</Math> and <Math>y</Math> are
            assumed to be real numbers instead of rational numbers. In particular:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li><Math>x^{'{'}n+m{'}'} = x^n \cdot x^m</Math></li>
            <li><Math>(x^n)^m = x^{'{'}nm{'}'}</Math></li>
            <li><Math>(xy)^n = x^n y^n</Math></li>
            <li>If <Math>x {'>'} 0</Math> and <Math>n {'>'} 0</Math>, then <Math>x^n {'>'} 0</Math></li>
            <li>If <Math>x {'>'} y {'>'} 0</Math> and <Math>n {'>'} 0</Math>, then <Math>x^n {'>'} y^n</Math></li>
          </ul>
        </Theorem>

        <Callout type="note" title="Meta-Proof">
          <p>
            The proof of Proposition 5.6.3 is a "meta-proof"—we observe that the original proofs
            for rationals relied only on the laws of algebra and order, which the reals also
            satisfy (Propositions 5.3.11 and 5.4.7). Therefore the same proofs work for reals.
          </p>
        </Callout>
      </section>

      {/* nth Roots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          The <Math>n</Math>th Root
        </h2>

        <p className="text-gray-300 mb-4">
          Now we tackle exponents that are not integers. We begin with the notion of
          an <Math>n</Math>th root, which we define using the supremum—this is where the
          least upper bound property becomes essential.
        </p>

        <Definition id="5.6.4" title="The nth Root">
          <p className="mb-2">
            Let <Math>x {'>'} 0</Math> be a positive real, and let <Math>n \geq 1</Math> be a
            positive integer. We define <Math>x^{'{'}1/n{'}'}</Math>, also known as
            the <strong><Math>n</Math>th root of <Math>x</Math></strong>, by the formula:
          </p>
          <MathBlock>
            {`x^{1/n} := \\sup\\{y \\in \\mathbb{R} : y \\geq 0 \\text{ and } y^n \\leq x\\}`}
          </MathBlock>
          <p className="mt-2">
            We often write <Math>\sqrt{'{'}x{'}'}</Math> for <Math>x^{'{'}1/2{'}'}</Math>.
          </p>
        </Definition>

        <Callout type="warning" title="Restrictions">
          <p>
            We do not define the <Math>n</Math>th root of zero at this point, nor do we define
            the <Math>n</Math>th root of a negative number. The former will be addressed presently
            (we set <Math>0^{'{'}1/n{'}'} = 0</Math>). The latter requires complex numbers, which
            we do not cover in this text.
          </p>
        </Callout>

        <Theorem
          id="5.6.5"
          title="Existence of nth Roots"
          proof={`We must show that the set E := {y ∈ ℝ : y ≥ 0 and yⁿ ≤ x} is non-empty and bounded above.

**Non-empty:** The set E contains 0 (since 0ⁿ = 0 ≤ x for any positive x).

**Bounded above:** We consider two cases.

**Case 1: x ≤ 1.** We claim E is bounded above by 1. Suppose for contradiction that y ∈ E with y > 1. Then yⁿ > 1 ≥ x (since y > 1 implies yⁿ > 1), contradicting y ∈ E.

**Case 2: x > 1.** We claim E is bounded above by x. Suppose for contradiction that y ∈ E with y > x. Since x > 1, we have y > 1. Since y > x and y > 1, we have yⁿ > x (because yⁿ ≥ y² > y > x when y > x > 1). This contradicts y ∈ E.

In both cases, E has an upper bound, so by the least upper bound property, x^{1/n} = sup(E) is a well-defined real number. □`}
        >
          <p>
            Let <Math>x {'>'} 0</Math> be a positive real, and let <Math>n \geq 1</Math> be a
            positive integer. Then the set
          </p>
          <MathBlock>
            {`E := \\{y \\in \\mathbb{R} : y \\geq 0 \\text{ and } y^n \\leq x\\}`}
          </MathBlock>
          <p>
            is non-empty and bounded above. In particular, <Math>x^{'{'}1/n{'}'}</Math> is a
            well-defined real number.
          </p>
        </Theorem>

        <Example id="5.6.5.1" title="Computing Some Roots">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>4^{'{'}1/2{'}'} = 2</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The set <Math>{`\\{y \\geq 0 : y^2 \\leq 4\\}`}</Math> is <Math>[0, 2]</Math>,
                and <Math>\sup[0, 2] = 2</Math>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>8^{'{'}1/3{'}'} = 2</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The set <Math>{`\\{y \\geq 0 : y^3 \\leq 8\\}`}</Math> has supremum <Math>2</Math>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>2^{'{'}1/2{'}'} = \sqrt{'{'}2{'}'}</Math>
              </p>
              <p className="text-gray-300 text-sm">
                This is exactly what we proved exists in Proposition 5.5.12!
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Properties of nth Roots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Properties of <Math>n</Math>th Roots
        </h2>

        <Theorem id="5.6.6" title="Properties of nth Roots">
          <p className="mb-2">
            Let <Math>x, y {'>'} 0</Math> be positive reals, and let <Math>n, m \geq 1</Math> be
            positive integers.
          </p>
          <ol className="list-[lower-alpha] list-inside space-y-2 ml-4">
            <li>
              If <Math>y = x^{'{'}1/n{'}'}</Math>, then <Math>y^n = x</Math>.
            </li>
            <li>
              Conversely, if <Math>y^n = x</Math>, then <Math>y = x^{'{'}1/n{'}'}</Math>.
            </li>
            <li>
              <Math>x^{'{'}1/n{'}'}</Math> is a positive real number.
            </li>
            <li>
              We have <Math>x {'>'} y</Math> if and only if <Math>x^{'{'}1/n{'}'} {'>'} y^{'{'}1/n{'}'}</Math>.
            </li>
            <li>
              If <Math>x {'>'} 1</Math>, then <Math>x^{'{'}1/k{'}'}</Math> is a decreasing function of <Math>k</Math>.
              If <Math>x {'<'} 1</Math>, then <Math>x^{'{'}1/k{'}'}</Math> is an increasing function of <Math>k</Math>.
              If <Math>x = 1</Math>, then <Math>x^{'{'}1/k{'}'} = 1</Math> for all <Math>k</Math>.
            </li>
            <li>
              We have <Math>(xy)^{'{'}1/n{'}'} = x^{'{'}1/n{'}'}y^{'{'}1/n{'}'}</Math>.
            </li>
            <li>
              We have <Math>(x^{'{'}1/n{'}'})^{'{'}1/m{'}'} = x^{'{'}1/(nm){'}'}</Math>.
            </li>
          </ol>
        </Theorem>

        <p className="text-gray-300 my-4">
          Property (b) gives us a <strong>cancellation law</strong>: if <Math>y, z</Math> are
          positive and <Math>y^n = z^n</Math>, then <Math>y = z</Math>. Note this only works for
          positive numbers—for instance, <Math>(-3)^2 = 3^2</Math>, but <Math>-3 \neq 3</Math>.
        </p>

        <Callout type="note" title="Consistency Check">
          <p>
            The definition of <Math>x^{'{'}1/n{'}'}</Math> might seem inconsistent with our
            earlier definition of <Math>x^n</Math> when <Math>n = 1</Math>. But it's easy to
            check that <Math>x^{'{'}1/1{'}'} = x = x^1</Math>, so there's no conflict.
          </p>
        </Callout>
      </section>

      {/* Rational Exponents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Rational Exponents
        </h2>

        <p className="text-gray-300 mb-4">
          Now we can define how to raise a positive number to a rational exponent,
          combining roots and integer powers.
        </p>

        <Definition id="5.6.7" title="Rational Exponents">
          <p className="mb-2">
            Let <Math>x {'>'} 0</Math> be a positive real number, and let <Math>q</Math> be a
            rational number. To define <Math>x^q</Math>, we write <Math>q = a/b</Math> for some
            integer <Math>a</Math> and positive integer <Math>b</Math>, and define:
          </p>
          <MathBlock>
            x^q := (x^{'{'}1/b{'}'})^a
          </MathBlock>
        </Definition>

        <p className="text-gray-300 my-4">
          Note that every rational <Math>q</Math> (positive, negative, or zero) can be written
          in the form <Math>a/b</Math> where <Math>a</Math> is an integer and <Math>b</Math> is
          positive. However, this representation is not unique—for instance, <Math>1/2 = 2/4 = 3/6</Math>.
          We must verify that different representations give the same value:
        </p>

        <Theorem
          id="5.6.8"
          title="Well-Definedness of Rational Exponents"
          proof={`We consider three cases: a = 0, a > 0, and a < 0.

**Case a = 0:** If a = 0, then since a/b = a'/b', we must have a' = 0 as well. Both (x^{1/b'})^{a'} and (x^{1/b})^a equal 1, so we're done.

**Case a > 0:** Then a' > 0 and ab' = ba'. Let y := x^{1/(ab')} = x^{1/(ba')}.

By Lemma 5.6.6(g): y = (x^{1/b'})^{1/a} and y = (x^{1/b})^{1/a'}.

By Lemma 5.6.6(a): y^a = x^{1/b'} and y^{a'} = x^{1/b}.

Thus:
(x^{1/b'})^{a'} = (y^a)^{a'} = y^{aa'} = (y^{a'})^a = (x^{1/b})^a

**Case a < 0:** Then (-a)/b = (-a')/b'. Since -a is positive, the previous case gives (x^{1/b'})^{-a'} = (x^{1/b})^{-a}. Taking reciprocals: (x^{1/b'})^{a'} = (x^{1/b})^a. □`}
        >
          <p>
            Let <Math>a, a'</Math> be integers and <Math>b, b'</Math> be positive integers such
            that <Math>a/b = a'/b'</Math>, and let <Math>x</Math> be a positive real number.
            Then <Math>(x^{'{'}1/b'{'}'})^{'{'}a'{'}'} = (x^{'{'}1/b{'}'})^a</Math>.
          </p>
        </Theorem>

        <p className="text-gray-300 my-4">
          This lemma ensures that <Math>x^q</Math> is well-defined for every rational <Math>q</Math>.
          Note that this definition is consistent with <Math>x^{'{'}1/n{'}'}</Math> (taking <Math>a = 1, b = n</Math>)
          and with <Math>x^n</Math> (taking <Math>a = n, b = 1</Math>).
        </p>

        <Example id="5.6.8.1" title="Computing Rational Powers">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>8^{'{'}2/3{'}'} = (8^{'{'}1/3{'}'})^2 = 2^2 = 4</Math>
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>16^{'{'}3/4{'}'} = (16^{'{'}1/4{'}'})^3 = 2^3 = 8</Math>
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>4^{'{-1/2}'} = (4^{'{'}1/2{'}'})^{'{-1}'} = 2^{'{-1}'} = 1/2</Math>
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Properties of Rational Exponentiation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Properties of Rational Exponentiation
        </h2>

        <Theorem id="5.6.9" title="Properties of Rational Exponentiation">
          <p className="mb-2">
            Let <Math>x, y {'>'} 0</Math> be positive reals, and let <Math>q, r</Math> be rationals.
          </p>
          <ol className="list-[lower-alpha] list-inside space-y-2 ml-4">
            <li>
              <Math>x^q</Math> is a positive real.
            </li>
            <li>
              <Math>x^{'{'}q+r{'}'} = x^q x^r</Math> and <Math>(x^q)^r = x^{'{'}qr{'}'}</Math>.
            </li>
            <li>
              <Math>x^{'{-q}'} = 1/x^q</Math>.
            </li>
            <li>
              If <Math>q {'>'} 0</Math>, then <Math>x {'>'} y</Math> if and only if <Math>x^q {'>'} y^q</Math>.
            </li>
            <li>
              If <Math>x {'>'} 1</Math>, then <Math>x^q {'>'} x^r</Math> if and only if <Math>q {'>'} r</Math>.
              If <Math>x {'<'} 1</Math>, then <Math>x^q {'>'} x^r</Math> if and only if <Math>q {'<'} r</Math>.
            </li>
          </ol>
        </Theorem>

        <Callout type="info" title="What About Real Exponents?">
          <p>
            We still haven't defined <Math>x^y</Math> where <Math>y</Math> is a real (possibly
            irrational) number. For instance, what is <Math>2^{'{'}\\sqrt{'{'}2{'}'}{'}'}</Math>?
            This requires the theory of limits developed in Chapter 6. We will return to real
            exponentiation in Section 6.7.
          </p>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.6.1</p>
            <p className="text-gray-300">
              Prove Lemma 5.6.6. (Hints: Review the proof of Proposition 5.5.12. Proof by
              contradiction combined with trichotomy is useful. The earlier parts of the lemma
              can be used to prove later parts. For part (e), first show that if <Math>x {'>'} 1</Math> then <Math>x^{'{'}1/n{'}'} {'>'} 1</Math>,
              and if <Math>x {'<'} 1</Math> then <Math>x^{'{'}1/n{'}'} {'<'} 1</Math>.)
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.6.2</p>
            <p className="text-gray-300">
              Prove Lemma 5.6.9. (Hint: You should rely mainly on Lemma 5.6.6 and on algebra.)
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.6.3</p>
            <p className="text-gray-300">
              If <Math>x</Math> is a real number, show that <Math>|x| = (x^2)^{'{'}1/2{'}'}</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.6.4</p>
            <p className="text-gray-300">
              Show that for any positive reals <Math>x, y</Math> and any rational <Math>q</Math>,
              we have <Math>(xy)^q = x^q y^q</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.6.5</p>
            <p className="text-gray-300">
              Let <Math>x {'>'} 0</Math> and <Math>q, r</Math> be rationals. Show
              that <Math>x^q / x^r = x^{'{'}q-r{'}'}</Math>.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800">
            <h4 className="font-semibold text-blue-300 mb-2">Integer Exponents</h4>
            <p className="text-gray-300 text-sm">
              For real <Math>x</Math> and integer <Math>n</Math>, we define <Math>x^n</Math> recursively
              (for <Math>n \geq 0</Math>) and via reciprocals (for <Math>n {'<'} 0</Math>). All
              familiar exponent laws hold.
            </p>
          </div>

          <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-800">
            <h4 className="font-semibold text-amber-300 mb-2"><Math>n</Math>th Roots via Supremum</h4>
            <p className="text-gray-300 text-sm">
              For <Math>x {'>'} 0</Math>, we define <Math>x^{'{'}1/n{'}'} := \sup\{'{'}y \geq 0 : y^n \leq x\{'}'}</Math>.
              This exists by the least upper bound property, and <Math>(x^{'{'}1/n{'}'})^n = x</Math>.
            </p>
          </div>

          <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-800">
            <h4 className="font-semibold text-emerald-300 mb-2">Rational Exponents</h4>
            <p className="text-gray-300 text-sm">
              For <Math>x {'>'} 0</Math> and <Math>q = a/b</Math> rational, we
              define <Math>x^q := (x^{'{'}1/b{'}'})^a</Math>. This is well-defined regardless
              of how we write <Math>q</Math>.
            </p>
          </div>

          <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800">
            <h4 className="font-semibold text-purple-300 mb-2">Exponent Laws</h4>
            <p className="text-gray-300 text-sm">
              All the familiar laws hold: <Math>x^{'{'}q+r{'}'} = x^q x^r</Math>,
              <Math>(x^q)^r = x^{'{'}qr{'}'}</Math>, <Math>x^{'{-q}'} = 1/x^q</Math>, etc.
              Order is preserved for positive exponents.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <Callout type="info" title="Looking Ahead">
        <p>
          We have now completed our development of the real numbers and can assume all the
          usual laws of algebra, order, and (rational) exponentiation. In Chapter 6, we will
          develop the theory of <strong>limits of sequences</strong>, which will finally allow
          us to replace formal limits <Math>\text{'{'}LIM{'}'}</Math> with actual
          limits <Math>\lim</Math>. This theory will also enable us to define <Math>x^y</Math> for
          real exponents <Math>y</Math>, completing our extension of exponentiation.
        </p>
      </Callout>
    </LessonLayout>
  );
}
