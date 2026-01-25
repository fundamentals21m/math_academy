import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We have now constructed the integers, with the operations of addition, subtraction,
        multiplication, and order and verified all the expected algebraic and order-theoretic
        properties. Now we will use a similar construction to build the{' '}
        <strong className="text-indigo-400">rationals</strong>, adding{' '}
        <strong className="text-indigo-400">division</strong> to our mix of operations.
      </p>

      <p className="text-dark-300 mb-6">
        Just like the integers were constructed by subtracting two natural numbers, the rationals
        can be constructed by dividing two integers, though of course we have to make the usual
        caveat that the denominator should be non-zero. Just as two differences{' '}
        <Math>{'a{\\text{---}}b'}</Math> and <Math>{'c{\\text{---}}d'}</Math> can be equal
        if <Math>{'a + d = c + b'}</Math>, we know (from more advanced knowledge) that two
        quotients <Math>{'a/b'}</Math> and <Math>{'c/d'}</Math> can be equal if{' '}
        <Math>{'ad = bc'}</Math>.
      </p>

      <Callout type="info">
        <strong>The Construction Strategy</strong>
        <p className="mt-2">
          In analogy with the integers, we create a new meaningless symbol{' '}
          <Math>{'/\\!/'}</Math> (which will eventually be superseded by division), and use
          our foreknowledge that <Math>{'a/b = c/d'}</Math> exactly when <Math>{'ad = cb'}</Math>,
          and that <Math>{'a/b + c/d = (ad + bc)/(bd)'}</Math>.
        </p>
      </Callout>

      {/* Definition of Rationals */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Definition of Rationals
      </h2>

      <Definition title="Definition 4.2.1 (Rationals)">
        <p className="mb-3">
          A <strong className="text-blue-300">rational number</strong> is an expression of the
          form <Math>{'a/\\!/b'}</Math>, where <Math>{'a'}</Math> and <Math>{'b'}</Math> are
          integers and <Math>{'b'}</Math> is non-zero; <Math>{'a/\\!/0'}</Math> is not
          considered to be a rational number.
        </p>
        <p className="mb-3">
          Two rational numbers are considered to be equal, <Math>{'a/\\!/b = c/\\!/d'}</Math>,
          if and only if <Math>{'ad = cb'}</Math>.
        </p>
        <p>
          We let <Math>{'\\mathbb{Q}'}</Math> denote the set of all rational numbers.
        </p>
      </Definition>

      <Example title="Understanding Rational Equality">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'3/\\!/4 = 6/\\!/8'}</Math> because <Math>{'3 \\times 8 = 6 \\times 4 = 24'}</Math>
          </li>
          <li>
            <Math>{'3/\\!/4 = -3/\\!/-4'}</Math> because <Math>{'3 \\times (-4) = (-3) \\times 4 = -12'}</Math>
          </li>
          <li>
            <Math>{'3/\\!/4 \\neq 4/\\!/3'}</Math> because <Math>{'3 \\times 3 = 9 \\neq 16 = 4 \\times 4'}</Math>
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Why We Cannot Divide by Zero</strong>
        <p className="mt-2">
          There is no reasonable way we can divide by zero, since one cannot have both the
          identities <Math>{'(a/b) \\times b = a'}</Math> and <Math>{'c \\times 0 = 0'}</Math> hold
          simultaneously if <Math>{'b'}</Math> is allowed to be zero. However, we can eventually
          get a reasonable notion of dividing by a quantity which <em>approaches</em> zero —
          think of L'Hôpital's rule, which suffices for defining differentiation.
        </p>
      </Callout>

      {/* Operations on Rationals */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Arithmetic Operations
      </h2>

      <Definition title="Definition 4.2.2 (Sum, product, and negation of rationals)">
        <p className="mb-3">
          If <Math>{'a/\\!/b'}</Math> and <Math>{'c/\\!/d'}</Math> are rational numbers, we define
          their <strong className="text-blue-300">sum</strong>:
        </p>
        <MathBlock>{`(a/\\!/b) + (c/\\!/d) := (ad + bc)/\\!/(bd).`}</MathBlock>
        <p className="my-3">
          Their <strong className="text-blue-300">product</strong>:
        </p>
        <MathBlock>{`(a/\\!/b) \\times (c/\\!/d) := (ac)/\\!/(bd).`}</MathBlock>
        <p className="my-3">
          And the <strong className="text-blue-300">negation</strong>:
        </p>
        <MathBlock>{`-(a/\\!/b) := (-a)/\\!/b.`}</MathBlock>
      </Definition>

      <p className="text-dark-300 mt-6 mb-4">
        Note that if <Math>{'b'}</Math> and <Math>{'d'}</Math> are non-zero, then{' '}
        <Math>{'bd'}</Math> is also non-zero (by the fact that integers have no zero divisors),
        so the sum or product of rational numbers remains a rational number.
      </p>

      <Example title="Computing with Rationals">
        <p className="mb-2">
          <Math>{'(3/\\!/4) + (1/\\!/2) = (3 \\cdot 2 + 4 \\cdot 1)/\\!/(4 \\cdot 2) = 10/\\!/8 = 5/\\!/4'}</Math>
        </p>
        <p className="mb-2">
          <Math>{'(2/\\!/3) \\times (5/\\!/7) = 10/\\!/21'}</Math>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          (These represent <Math>{'\\frac{3}{4} + \\frac{1}{2} = \\frac{5}{4}'}</Math> and{' '}
          <Math>{'\\frac{2}{3} \\times \\frac{5}{7} = \\frac{10}{21}'}</Math> in familiar notation.)
        </p>
      </Example>

      <Theorem title="Lemma 4.2.3 (Operations are well-defined)">
        <p className="mb-3">
          The sum, product, and negation operations on rational numbers are well-defined, in the
          sense that if one replaces <Math>{'a/\\!/b'}</Math> with another rational
          number <Math>{"a'/\\!/b'"}</Math> which is equal to <Math>{'a/\\!/b'}</Math>, then the
          output of the above operations remains unchanged, and similarly for <Math>{'c/\\!/d'}</Math>.
        </p>
        <p className="text-emerald-300">
          Thus equal inputs give equal outputs.
        </p>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof (for addition)</p>
        <p className="text-dark-300 mb-3">
          Suppose <Math>{"a/\\!/b = a'/\\!/b'"}</Math>, so that <Math>{'b'}</Math> and{' '}
          <Math>{"b'"}</Math> are non-zero and <Math>{"ab' = a'b"}</Math>. We now show
          that <Math>{"a/\\!/b + c/\\!/d = a'/\\!/b' + c/\\!/d"}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          By definition, the left-hand side is <Math>{'(ad + bc)/\\!/bd'}</Math> and the right-hand
          side is <Math>{"(a'd + b'c)/\\!/b'd"}</Math>, so we have to show that:
        </p>
        <MathBlock>{`(ad + bc)b'd = (a'd + b'c)bd`}</MathBlock>
        <p className="text-dark-300 mb-3">
          which expands to <Math>{"ab'd^2 + bb'cd = a'bd^2 + bb'cd"}</Math>.
          But since <Math>{"ab' = a'b"}</Math>, the claim follows.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      {/* Embedding Integers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Embedding Integers in Rationals
      </h2>

      <p className="text-dark-300 mb-6">
        The rational numbers <Math>{'a/\\!/1'}</Math> behave in a manner identical to the
        integers <Math>{'a'}</Math>:
      </p>

      <MathBlock>{`(a/\\!/1) + (b/\\!/1) = (a + b)/\\!/1`}</MathBlock>
      <MathBlock>{`(a/\\!/1) \\times (b/\\!/1) = (ab)/\\!/1`}</MathBlock>
      <MathBlock>{`-(a/\\!/1) = (-a)/\\!/1`}</MathBlock>

      <p className="text-dark-300 mt-6">
        Also, <Math>{'a/\\!/1'}</Math> and <Math>{'b/\\!/1'}</Math> are only equal when{' '}
        <Math>{'a'}</Math> and <Math>{'b'}</Math> are equal. Because of this, we may{' '}
        <strong>identify</strong> each integer <Math>{'a'}</Math> with the
        rational <Math>{'a/\\!/1'}</Math>:
      </p>

      <MathBlock>{`a \\equiv a/\\!/1`}</MathBlock>

      <p className="text-dark-300 mt-4">
        Thus just as we embedded the natural numbers inside the integers, we embed the integers
        inside the rational numbers. In particular, all natural numbers are rational numbers:
        for instance <Math>{'0 = 0/\\!/1'}</Math> and <Math>{'1 = 1/\\!/1'}</Math>.
      </p>

      <Callout type="info">
        <strong>When Is a Rational Zero?</strong>
        <p className="mt-2">
          A rational number <Math>{'a/\\!/b'}</Math> is equal to <Math>{'0 = 0/\\!/1'}</Math> if
          and only if <Math>{'a \\times 1 = b \\times 0'}</Math>, i.e., if the
          numerator <Math>{'a'}</Math> is equal to <Math>{'0'}</Math>. Thus if <Math>{'a'}</Math> and{' '}
          <Math>{'b'}</Math> are both non-zero, then so is <Math>{'a/\\!/b'}</Math>.
        </p>
      </Callout>

      {/* Reciprocal */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Reciprocal
      </h2>

      <Definition title="Reciprocal of a Rational">
        <p className="mb-3">
          If <Math>{'x = a/\\!/b'}</Math> is a <strong>non-zero</strong> rational (so
          that <Math>{'a, b \\neq 0'}</Math>), we define the{' '}
          <strong className="text-blue-300">reciprocal</strong> <Math>{'x^{-1}'}</Math> of{' '}
          <Math>{'x'}</Math> to be the rational number:
        </p>
        <MathBlock>{`x^{-1} := b/\\!/a.`}</MathBlock>
        <p className="mt-3">
          We leave the reciprocal of <Math>{'0'}</Math> undefined.
        </p>
      </Definition>

      <p className="text-dark-300 mt-6">
        It is easy to check that this operation is consistent with our notion of equality: if two
        rational numbers <Math>{"a/\\!/b"}</Math> and <Math>{"a'/\\!/b'"}</Math> are equal, then
        their reciprocals are also equal.
      </p>

      <Callout type="warning">
        <strong>Operations That Are NOT Well-Defined</strong>
        <p className="mt-2">
          In contrast, an operation such as "numerator" is not well-defined: the
          rationals <Math>{'3/\\!/4'}</Math> and <Math>{'6/\\!/8'}</Math> are equal, but have
          unequal numerators. So we have to be careful when referring to such terms as "the
          numerator of <Math>{'x'}</Math>".
        </p>
      </Callout>

      {/* Laws of Algebra */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Laws of Algebra for Rationals
      </h2>

      <Theorem title="Proposition 4.2.4 (Laws of algebra for rationals)">
        <p className="mb-3">
          Let <Math>{'x, y, z'}</Math> be rationals. Then the following laws of algebra hold:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`x + y = y + x`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Commutativity of addition</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`(x + y) + z = x + (y + z)`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Associativity of addition</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`x + 0 = 0 + x = x`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Additive identity</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`x + (-x) = (-x) + x = 0`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Additive inverse</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`xy = yx`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Commutativity of multiplication</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`(xy)z = x(yz)`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Associativity of multiplication</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`x \\cdot 1 = 1 \\cdot x = x`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Multiplicative identity</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`x(y + z) = xy + xz`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Left distributivity</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`(y + z)x = yx + zx`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Right distributivity</p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <MathBlock>{`xx^{-1} = x^{-1}x = 1`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Multiplicative inverse (for <Math>{'x \\neq 0'}</Math>)</p>
          </div>
        </div>
      </Theorem>

      <Callout type="info">
        <strong>Remark 4.2.5 (Field)</strong>
        <p className="mt-2">
          The above set of ten identities have a name; they are asserting that the
          rationals <Math>{'\\mathbb{Q}'}</Math> form a <strong className="text-blue-300">field</strong>.
          This is better than being a commutative ring because of the tenth
          identity <Math>{'xx^{-1} = x^{-1}x = 1'}</Math>. Note that this proposition supersedes
          Proposition 4.1.6 (laws of algebra for integers).
        </p>
      </Callout>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof (for associativity of addition)</p>
        <p className="text-dark-300 mb-3">
          To prove this identity, one writes <Math>{'x = a/\\!/b'}</Math>, <Math>{'y = c/\\!/d'}</Math>,{' '}
          <Math>{'z = e/\\!/f'}</Math> for some integers <Math>{'a, c, e'}</Math> and non-zero
          integers <Math>{'b, d, f'}</Math>, and verifies each identity using the algebra of the integers:
        </p>
        <MathBlock>{`(x + y) + z = ((a/\\!/b) + (c/\\!/d)) + (e/\\!/f)`}</MathBlock>
        <MathBlock>{`= ((ad + bc)/\\!/bd) + (e/\\!/f)`}</MathBlock>
        <MathBlock>{`= (adf + bcf + bde)/\\!/bdf`}</MathBlock>
        <MathBlock>{`x + (y + z) = (a/\\!/b) + ((c/\\!/d) + (e/\\!/f))`}</MathBlock>
        <MathBlock>{`= (a/\\!/b) + ((cf + de)/\\!/df)`}</MathBlock>
        <MathBlock>{`= (adf + bcf + bde)/\\!/bdf`}</MathBlock>
        <p className="text-dark-300 mt-3">
          And so one can see that <Math>{'(x + y) + z'}</Math> and <Math>{'x + (y + z)'}</Math> are equal.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      {/* Division */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Division
      </h2>

      <p className="text-dark-300 mb-6">
        We can now define the <strong className="text-indigo-400">quotient</strong>{' '}
        <Math>{'x/y'}</Math> of two rational numbers <Math>{'x'}</Math> and <Math>{'y'}</Math>,
        provided that <Math>{'y'}</Math> is non-zero, by the formula:
      </p>

      <MathBlock>{`x/y := x \\times y^{-1}.`}</MathBlock>

      <Example title="Computing a Quotient">
        <MathBlock>{`(3/\\!/4) / (5/\\!/6) = (3/\\!/4) \\times (6/\\!/5) = 18/\\!/20 = 9/\\!/10.`}</MathBlock>
      </Example>

      <p className="text-dark-300 mt-6">
        Using this formula, it is easy to see that <Math>{'a/b = a/\\!/b'}</Math> for every
        integer <Math>{'a'}</Math> and every non-zero integer <Math>{'b'}</Math>. Thus we can
        now <strong>discard</strong> the <Math>{'/\\!/'}</Math> notation, and use the more
        customary <Math>{'a/b'}</Math> instead of <Math>{'a/\\!/b'}</Math>.
      </p>

      {/* Trichotomy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Trichotomy of Rationals
      </h2>

      <Definition title="Definition 4.2.6 (Positive and negative rationals)">
        <p className="mb-3">
          A rational number <Math>{'x'}</Math> is said to be <strong className="text-blue-300">positive</strong> iff
          we have <Math>{'x = a/b'}</Math> for some positive integers <Math>{'a'}</Math> and <Math>{'b'}</Math>.
        </p>
        <p>
          It is said to be <strong className="text-blue-300">negative</strong> iff we
          have <Math>{'x = -y'}</Math> for some positive rational <Math>{'y'}</Math> (i.e.,{' '}
          <Math>{'x = (-a)/b'}</Math> for some positive integers <Math>{'a'}</Math> and <Math>{'b'}</Math>).
        </p>
      </Definition>

      <p className="text-dark-300 mt-6 mb-6">
        Thus every positive integer is a positive rational number, and every negative integer is
        a negative rational number, so our new definition is consistent with our old one.
      </p>

      <Theorem title="Lemma 4.2.7 (Trichotomy of rationals)">
        <p>
          Let <Math>{'x'}</Math> be a rational number. Then exactly one of the following three
          statements is true:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300 mt-3">
          <li>(a) <Math>{'x'}</Math> is equal to <Math>{'0'}</Math>;</li>
          <li>(b) <Math>{'x'}</Math> is a positive rational number;</li>
          <li>(c) <Math>{'x'}</Math> is a negative rational number.</li>
        </ul>
      </Theorem>

      {/* Ordering */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Ordering the Rationals
      </h2>

      <Definition title="Definition 4.2.8 (Ordering of the rationals)">
        <p className="mb-3">
          Let <Math>{'x'}</Math> and <Math>{'y'}</Math> be rational numbers. We say
          that <Math>{'x > y'}</Math> iff <Math>{'x - y'}</Math> is a positive rational number,
          and <Math>{'x < y'}</Math> iff <Math>{'x - y'}</Math> is a negative rational number.
        </p>
        <p>
          We write <Math>{'x \\geq y'}</Math> iff either <Math>{'x > y'}</Math> or <Math>{'x = y'}</Math>,
          and similarly define <Math>{'x \\leq y'}</Math>.
        </p>
      </Definition>

      <Theorem title="Proposition 4.2.9 (Basic properties of order on the rationals)">
        <p className="mb-3">
          Let <Math>{'x, y, z'}</Math> be rational numbers. Then the following properties hold:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            (a) <strong>Order trichotomy:</strong> Exactly one of the statements{' '}
            <Math>{'x = y'}</Math>, <Math>{'x < y'}</Math>, or <Math>{'x > y'}</Math> is true.
          </li>
          <li>
            (b) <strong>Order is anti-symmetric:</strong> One has <Math>{'x < y'}</Math> if and
            only if <Math>{'y > x'}</Math>.
          </li>
          <li>
            (c) <strong>Order is transitive:</strong> If <Math>{'x < y'}</Math> and{' '}
            <Math>{'y < z'}</Math>, then <Math>{'x < z'}</Math>.
          </li>
          <li>
            (d) <strong>Addition preserves order:</strong> If <Math>{'x < y'}</Math>,
            then <Math>{'x + z < y + z'}</Math>.
          </li>
          <li>
            (e) <strong>Positive multiplication preserves order:</strong> If <Math>{'x < y'}</Math> and{' '}
            <Math>{'z'}</Math> is positive, then <Math>{'xz < yz'}</Math>.
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>Remark 4.2.10 (Ordered Field)</strong>
        <p className="mt-2">
          The above five properties in Proposition 4.2.9, combined with the field axioms in
          Proposition 4.2.4, have a name: they assert that the rationals <Math>{'\\mathbb{Q}'}</Math> form
          an <strong className="text-blue-300">ordered field</strong>. It is important to keep
          in mind that Proposition 4.2.9(e) only works when <Math>{'z'}</Math> is positive.
        </p>
      </Callout>

      <Callout type="warning">
        <strong>Negative Multiplication Reverses Order</strong>
        <p className="mt-2">
          If <Math>{'x < y'}</Math> and <Math>{'z'}</Math> is <em>negative</em>,
          then <Math>{'xz > yz'}</Math>. The inequality is reversed!
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.1</p>
          <p className="text-dark-400 mt-2">
            Show that the definition of equality for the rational numbers is reflexive, symmetric,
            and transitive. (Hint: for transitivity, use the cancellation law for integers.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.2</p>
          <p className="text-dark-400 mt-2">
            Prove the remaining components of Lemma 4.2.3 (that multiplication and negation are
            well-defined on rationals).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.3</p>
          <p className="text-dark-400 mt-2">
            Prove the remaining components of Proposition 4.2.4. (Hint: as with Proposition 4.1.6,
            you can save some work by using some identities to prove others.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.4</p>
          <p className="text-dark-400 mt-2">
            Prove Lemma 4.2.7 (trichotomy of rationals). (Note that you have to prove two different
            things: firstly, that at least one of (a), (b), (c) is true; and secondly, that at
            most one of (a), (b), (c) is true.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.5</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 4.2.9 (basic properties of order on the rationals).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.2.6</p>
          <p className="text-dark-400 mt-2">
            Show that if <Math>{'x, y, z'}</Math> are rational numbers such that{' '}
            <Math>{'x < y'}</Math> and <Math>{'z'}</Math> is negative,
            then <Math>{'xz > yz'}</Math>.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Rationals</strong> are constructed as formal
            quotients <Math>{'a/\\!/b'}</Math> of integers (with <Math>{'b \\neq 0'}</Math>),
            with equality defined as <Math>{'ad = cb'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Integers embed</strong> in rationals
            via <Math>{'a \\equiv a/\\!/1'}</Math>, preserving all arithmetic operations.
          </li>
          <li>
            <strong className="text-dark-200">Reciprocal</strong>: For non-zero{' '}
            <Math>{'x = a/\\!/b'}</Math>, we have <Math>{'x^{-1} = b/\\!/a'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Field</strong>: Rationals satisfy ten fundamental
            algebraic laws including the existence of multiplicative inverses.
          </li>
          <li>
            <strong className="text-dark-200">Trichotomy</strong>: Every rational is exactly one
            of: positive, zero, or negative.
          </li>
          <li>
            <strong className="text-dark-200">Ordered field</strong>: The order on rationals is
            compatible with addition and multiplication (by positives).
          </li>
          <li>
            <strong className="text-dark-200">Division</strong> can now be defined
            as <Math>{'x/y := x \\times y^{-1}'}</Math>, and the <Math>{'/\\!/'}</Math> notation
            can be discarded.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
