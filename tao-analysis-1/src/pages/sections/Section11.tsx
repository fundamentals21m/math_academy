import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        In Chapter 2 we built up most of the basic properties of the natural number system, but
        we have reached the limits of what one can do with just addition and multiplication. We
        would now like to introduce a new operation, that of{' '}
        <strong className="text-indigo-400">subtraction</strong>, but to do that properly we will
        have to pass from the natural number system to a larger number system, that of
        the <strong className="text-indigo-400">integers</strong>.
      </p>

      <p className="text-dark-300 mb-6">
        Informally, the integers are what you can get by subtracting two natural numbers; for
        instance, <Math>{'3 - 5'}</Math> should be an integer, as should <Math>{'6 - 2'}</Math>.
        This is not a complete definition because:
      </p>

      <ul className="list-disc list-inside space-y-2 text-dark-300 mb-6">
        <li>(a) It doesn't say when two differences are equal (why is <Math>{'3 - 5 = 2 - 4'}</Math>?)</li>
        <li>(b) It doesn't say how to do arithmetic on these differences</li>
        <li>(c) It's circular — it requires subtraction, which we can only define once integers exist!</li>
      </ul>

      <Callout type="info">
        <strong>The Construction Strategy</strong>
        <p className="mt-2">
          We use our foreknowledge from algebra: <Math>{'a - b = c - d'}</Math> exactly
          when <Math>{'a + d = c + b'}</Math>, and <Math>{'(a-b) + (c-d) = (a+c) - (b+d)'}</Math>.
          We'll use a temporary notation <Math>{'a{\\text{---}}b'}</Math> (meaningless placeholder)
          which will later be shown to equal <Math>{'a - b'}</Math>.
        </p>
      </Callout>

      {/* Definition of Integers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Definition of Integers
      </h2>

      <Definition title="Definition 4.1.1 (Integers)">
        <p className="mb-3">
          An <strong className="text-blue-300">integer</strong> is an expression of the
          form <Math>{'a{\\text{---}}b'}</Math>, where <Math>{'a'}</Math> and <Math>{'b'}</Math> are
          natural numbers.
        </p>
        <p className="mb-3">
          Two integers are considered to be equal, <Math>{'a{\\text{---}}b = c{\\text{---}}d'}</Math>,
          if and only if <Math>{'a + d = c + b'}</Math>.
        </p>
        <p>
          We let <Math>{'\\mathbb{Z}'}</Math> denote the set of all integers.
        </p>
      </Definition>

      <Example title="Understanding Integer Equality">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'3{\\text{---}}5 = 2{\\text{---}}4'}</Math> because <Math>{'3 + 4 = 2 + 5 = 7'}</Math>
          </li>
          <li>
            <Math>{'3{\\text{---}}5 \\neq 2{\\text{---}}3'}</Math> because <Math>{'3 + 3 = 6 \\neq 7 = 2 + 5'}</Math>
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Note</strong>
        <p className="mt-2">
          This notation is strange looking — for instance, 3 is not yet an integer, because it is
          not of the form <Math>{'a{\\text{---}}b'}</Math>! We will rectify this problem shortly
          by identifying natural numbers with integers of a certain form.
        </p>
      </Callout>

      {/* Operations on Integers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Arithmetic Operations
      </h2>

      <Definition title="Definition 4.1.2 (Sum and product of integers)">
        <p className="mb-3">
          The <strong className="text-blue-300">sum</strong> of two integers is defined by:
        </p>
        <MathBlock>{`(a{\\text{---}}b) + (c{\\text{---}}d) := (a + c){\\text{---}}(b + d).`}</MathBlock>
        <p className="my-3">
          The <strong className="text-blue-300">product</strong> of two integers is defined by:
        </p>
        <MathBlock>{`(a{\\text{---}}b) \\times (c{\\text{---}}d) := (ac + bd){\\text{---}}(ad + bc).`}</MathBlock>
      </Definition>

      <Example title="Computing with Integers">
        <p className="mb-2">
          <Math>{'(3{\\text{---}}5) + (1{\\text{---}}4) = (3+1){\\text{---}}(5+4) = 4{\\text{---}}9'}</Math>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          (This represents <Math>{'(-2) + (-3) = -5'}</Math> in familiar notation.)
        </p>
      </Example>

      <Theorem title="Lemma 4.1.3 (Addition and multiplication are well-defined)">
        <p className="mb-3">
          Let <Math>{'a, b, a\', b\', c, d'}</Math> be natural numbers.
          If <Math>{'(a{\\text{---}}b) = (a\'{\\text{---}}b\')'}</Math>, then:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'(a{\\text{---}}b) + (c{\\text{---}}d) = (a\'{\\text{---}}b\') + (c{\\text{---}}d)'}</Math>
          </li>
          <li>
            <Math>{'(a{\\text{---}}b) \\times (c{\\text{---}}d) = (a\'{\\text{---}}b\') \\times (c{\\text{---}}d)'}</Math>
          </li>
        </ul>
        <p className="mt-3 text-emerald-300">
          Thus addition and multiplication are well-defined (equal inputs give equal outputs).
        </p>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof (for addition)</p>
        <p className="text-dark-300 mb-3">
          We need to show that <Math>{'(a+c){\\text{---}}(b+d) = (a\'+c){\\text{---}}(b\'+d)'}</Math>,
          i.e., that <Math>{'a + c + b\' + d = a\' + c + b + d'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          Since <Math>{'(a{\\text{---}}b) = (a\'{\\text{---}}b\')'}</Math>, we
          have <Math>{'a + b\' = a\' + b'}</Math>, and so by adding <Math>{'c + d'}</Math> to both
          sides we obtain the claim. The proof for multiplication is similar.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      {/* Embedding Natural Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Embedding Natural Numbers in Integers
      </h2>

      <p className="text-dark-300 mb-6">
        The integers <Math>{'n{\\text{---}}0'}</Math> behave in the same way as the natural
        numbers <Math>{'n'}</Math>:
      </p>

      <MathBlock>{`(n{\\text{---}}0) + (m{\\text{---}}0) = (n + m){\\text{---}}0`}</MathBlock>
      <MathBlock>{`(n{\\text{---}}0) \\times (m{\\text{---}}0) = nm{\\text{---}}0`}</MathBlock>

      <p className="text-dark-300 mt-6">
        Furthermore, <Math>{'(n{\\text{---}}0) = (m{\\text{---}}0)'}</Math> if and only
        if <Math>{'n = m'}</Math>. Thus we may <strong>identify</strong> the natural numbers
        with integers by setting:
      </p>

      <MathBlock>{`n \\equiv n{\\text{---}}0`}</MathBlock>

      <p className="text-dark-300 mt-4">
        In particular, <Math>{'0 = 0{\\text{---}}0'}</Math> and <Math>{'1 = 1{\\text{---}}0'}</Math>.
        Of course, if we set <Math>{'n = n{\\text{---}}0'}</Math>, then it will also equal any
        other integer equal to <Math>{'n{\\text{---}}0'}</Math>; for instance,{' '}
        <Math>{'3 = 3{\\text{---}}0 = 4{\\text{---}}1 = 5{\\text{---}}2'}</Math>, etc.
      </p>

      {/* Negation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Negation
      </h2>

      <Definition title="Definition 4.1.4 (Negation of integers)">
        <p className="mb-3">
          If <Math>{'(a{\\text{---}}b)'}</Math> is an integer, we define
          the <strong className="text-blue-300">negation</strong>{' '}
          <Math>{'-(a{\\text{---}}b)'}</Math> to be the integer <Math>{'(b{\\text{---}}a)'}</Math>.
        </p>
        <p>
          In particular, if <Math>{'n = n{\\text{---}}0'}</Math> is a positive natural number, we
          can define its negation <Math>{'-n = 0{\\text{---}}n'}</Math>.
        </p>
      </Definition>

      <Example title="Example of Negation">
        <p>
          <Math>{'-(3{\\text{---}}5) = (5{\\text{---}}3)'}</Math>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          (This represents <Math>{'-(-2) = 2'}</Math> in familiar notation.)
        </p>
      </Example>

      {/* Trichotomy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Trichotomy of Integers
      </h2>

      <Theorem title="Lemma 4.1.5 (Trichotomy of integers)">
        <p>
          Let <Math>{'x'}</Math> be an integer. Then exactly one of the following three statements
          is true:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300 mt-3">
          <li>(a) <Math>{'x'}</Math> is zero;</li>
          <li>(b) <Math>{'x'}</Math> is equal to a positive natural number <Math>{'n'}</Math>;</li>
          <li>(c) <Math>{'x'}</Math> is the negation <Math>{'-n'}</Math> of a positive natural number <Math>{'n'}</Math>.</li>
        </ul>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof</p>
        <p className="text-dark-300 mb-3">
          By definition, <Math>{'x = a{\\text{---}}b'}</Math> for some natural numbers{' '}
          <Math>{'a, b'}</Math>. We have three cases: <Math>{'a > b'}</Math>,{' '}
          <Math>{'a = b'}</Math>, or <Math>{'a < b'}</Math>.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300 mb-3">
          <li>
            If <Math>{'a > b'}</Math>, then <Math>{'a = b + c'}</Math> for some positive{' '}
            <Math>{'c'}</Math>, so <Math>{'a{\\text{---}}b = c{\\text{---}}0 = c'}</Math>, which is (b).
          </li>
          <li>
            If <Math>{'a = b'}</Math>, then <Math>{'a{\\text{---}}b = 0{\\text{---}}0 = 0'}</Math>, which is (a).
          </li>
          <li>
            If <Math>{'a < b'}</Math>, then <Math>{'b{\\text{---}}a = n'}</Math> for some positive{' '}
            <Math>{'n'}</Math>, thus <Math>{'a{\\text{---}}b = -n'}</Math>, which is (c).
          </li>
        </ul>
        <p className="text-dark-300 mb-3">
          To show that at most one can hold: (a) and (b) can't both hold since positive naturals
          are non-zero. (a) and (c) can't both hold, for if <Math>{'0 = -n'}</Math> for
          positive <Math>{'n'}</Math>, then <Math>{'0 + n = 0'}</Math>, so <Math>{'n = 0'}</Math>,
          contradiction. Similarly, (b) and (c) can't both hold.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      <Definition title="Positive and Negative Integers">
        <p>
          If <Math>{'n'}</Math> is a positive natural number, we call <Math>{'-n'}</Math> a{' '}
          <strong className="text-blue-300">negative integer</strong>. Thus every integer is
          positive, zero, or negative, but not more than one of these at a time.
        </p>
      </Definition>

      {/* Laws of Algebra */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Laws of Algebra for Integers
      </h2>

      <Theorem title="Proposition 4.1.6 (Laws of algebra for integers)">
        <p className="mb-3">
          Let <Math>{'x, y, z'}</Math> be integers. Then we have:
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
          <div className="p-3 bg-dark-800 rounded-lg col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
            <MathBlock>{`(y + z)x = yx + zx`}</MathBlock>
            <p className="text-dark-400 text-sm text-center">Right distributivity</p>
          </div>
        </div>
      </Theorem>

      <Callout type="info">
        <strong>Remark 4.1.7 (Commutative Ring)</strong>
        <p className="mt-2">
          The above nine identities assert that the integers form
          a <strong className="text-blue-300">commutative ring</strong>. (If one deleted
          the identity <Math>{'xy = yx'}</Math>, they would only assert that the integers form
          a <em>ring</em>.)
        </p>
      </Callout>

      {/* No Zero Divisors */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        No Zero Divisors
      </h2>

      <Theorem title="Proposition 4.1.8 (Integers have no zero divisors)">
        <p>
          Let <Math>{'a'}</Math> and <Math>{'b'}</Math> be integers such that{' '}
          <Math>{'ab = 0'}</Math>. Then either <Math>{'a = 0'}</Math> or <Math>{'b = 0'}</Math>{' '}
          (or both).
        </p>
      </Theorem>

      <Theorem title="Corollary 4.1.9 (Cancellation law for integers)">
        <p>
          If <Math>{'a, b, c'}</Math> are integers such that <Math>{'ac = bc'}</Math> and{' '}
          <Math>{'c'}</Math> is non-zero, then <Math>{'a = b'}</Math>.
        </p>
      </Theorem>

      {/* Subtraction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Subtraction
      </h2>

      <p className="text-dark-300 mb-6">
        We now define the operation of <strong className="text-indigo-400">subtraction</strong>{' '}
        <Math>{'x - y'}</Math> of two integers by the formula:
      </p>

      <MathBlock>{`x - y := x + (-y).`}</MathBlock>

      <p className="text-dark-300 mt-6">
        One can easily check now that if <Math>{'a'}</Math> and <Math>{'b'}</Math> are natural
        numbers, then:
      </p>

      <MathBlock>{`a - b = a + (-b) = (a{\\text{---}}0) + (0{\\text{---}}b) = a{\\text{---}}b,`}</MathBlock>

      <p className="text-dark-300 mt-4">
        and so <Math>{'a{\\text{---}}b'}</Math> is just the same thing as <Math>{'a - b'}</Math>.
        Because of this we can now <strong>discard</strong> the <Math>{'{\\text{---}}'}</Math>{' '}
        notation, and use the familiar operation of subtraction instead.
      </p>

      {/* Ordering */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Ordering the Integers
      </h2>

      <Definition title="Definition 4.1.10 (Ordering of the integers)">
        <p className="mb-3">
          Let <Math>{'n'}</Math> and <Math>{'m'}</Math> be integers. We say that{' '}
          <Math>{'n'}</Math> is <strong className="text-blue-300">greater than or equal</strong>{' '}
          to <Math>{'m'}</Math>, and write <Math>{'n \\geq m'}</Math> or <Math>{'m \\leq n'}</Math>,
          iff we have <Math>{'n = m + a'}</Math> for some natural number <Math>{'a'}</Math>.
        </p>
        <p>
          We say that <Math>{'n'}</Math> is <strong className="text-blue-300">strictly greater
          than</strong> <Math>{'m'}</Math>, and write <Math>{'n > m'}</Math> or{' '}
          <Math>{'m < n'}</Math>, iff <Math>{'n \\geq m'}</Math> and <Math>{'n \\neq m'}</Math>.
        </p>
      </Definition>

      <Example title="Example">
        <p>
          <Math>{'5 > -3'}</Math> because <Math>{'5 = -3 + 8'}</Math> and <Math>{'5 \\neq -3'}</Math>.
        </p>
      </Example>

      <Theorem title="Lemma 4.1.11 (Properties of order)">
        <p className="mb-3">
          Let <Math>{'a, b, c'}</Math> be integers.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            (a) <Math>{'a > b'}</Math> if and only if <Math>{'a - b'}</Math> is a positive natural number.
          </li>
          <li>
            (b) <strong>Addition preserves order:</strong> If <Math>{'a > b'}</Math>,
            then <Math>{'a + c > b + c'}</Math>.
          </li>
          <li>
            (c) <strong>Positive multiplication preserves order:</strong> If <Math>{'a > b'}</Math> and{' '}
            <Math>{'c'}</Math> is positive, then <Math>{'ac > bc'}</Math>.
          </li>
          <li>
            (d) <strong>Negation reverses order:</strong> If <Math>{'a > b'}</Math>,
            then <Math>{'-a < -b'}</Math>.
          </li>
          <li>
            (e) <strong>Order is transitive:</strong> If <Math>{'a > b'}</Math> and{' '}
            <Math>{'b > c'}</Math>, then <Math>{'a > c'}</Math>.
          </li>
          <li>
            (f) <strong>Order trichotomy:</strong> Exactly one of the statements{' '}
            <Math>{'a > b'}</Math>, <Math>{'a < b'}</Math>, or <Math>{'a = b'}</Math> is true.
          </li>
        </ul>
      </Theorem>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.1.1</p>
          <p className="text-dark-400 mt-2">
            Verify that the definition of equality on the integers is both reflexive and symmetric.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.1.2</p>
          <p className="text-dark-400 mt-2">
            Show that the definition of negation on the integers is well-defined in the sense that
            if <Math>{'(a{\\text{---}}b) = (a\'{\\text{---}}b\')'}</Math>,
            then <Math>{'-(a{\\text{---}}b) = -(a\'{\\text{---}}b\')'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.1.3</p>
          <p className="text-dark-400 mt-2">
            Show that <Math>{'(-1) \\times a = -a'}</Math> for every integer <Math>{'a'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.1.5</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 4.1.8. (Hint: use Lemma 2.3.3 for the case when both factors are
            natural numbers.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.1.8</p>
          <p className="text-dark-400 mt-2">
            Show that the principle of induction (Axiom 2.5) does not apply directly to the integers.
            More precisely, give an example of a property <Math>{'P(n)'}</Math> pertaining to an
            integer <Math>{'n'}</Math> such that <Math>{'P(0)'}</Math> is true, and
            that <Math>{'P(n)'}</Math> implies <Math>{'P(n{++})'}</Math> for all
            integers <Math>{'n'}</Math>, but that <Math>{'P(n)'}</Math> is not true for all
            integers <Math>{'n'}</Math>. Thus induction is not as useful a tool for dealing with
            the integers as it is with the natural numbers.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Integers</strong> are constructed as formal
            differences <Math>{'a{\\text{---}}b'}</Math> of natural numbers, with equality defined
            as <Math>{'a + d = c + b'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Natural numbers embed</strong> in integers
            via <Math>{'n \\equiv n{\\text{---}}0'}</Math>, preserving arithmetic.
          </li>
          <li>
            <strong className="text-dark-200">Trichotomy</strong>: Every integer is exactly one of:
            positive, zero, or negative.
          </li>
          <li>
            <strong className="text-dark-200">Commutative ring</strong>: Integers satisfy nine
            fundamental algebraic laws including associativity, commutativity, and distributivity.
          </li>
          <li>
            <strong className="text-dark-200">No zero divisors</strong>: If <Math>{'ab = 0'}</Math>,
            then <Math>{'a = 0'}</Math> or <Math>{'b = 0'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Subtraction</strong> can now be defined
            as <Math>{'x - y := x + (-y)'}</Math>, and this matches our temporary notation.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
