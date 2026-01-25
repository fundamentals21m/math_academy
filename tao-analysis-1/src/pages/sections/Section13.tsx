import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We have already introduced the four basic arithmetic operations of addition, subtraction,
        multiplication, and division on the rationals. We also have a notion of
        order <Math>{'<'}</Math>, and have organized the rationals into the positive rationals,
        the negative rationals, and zero. In short, we have shown that the
        rationals <Math>{'\\mathbb{Q}'}</Math> form an <strong className="text-indigo-400">ordered field</strong>.
      </p>

      <p className="text-dark-300 mb-6">
        One can now use these basic operations to construct more operations. There are many such
        operations we can construct, but we shall introduce two particularly useful ones:{' '}
        <strong className="text-indigo-400">absolute value</strong> and{' '}
        <strong className="text-indigo-400">exponentiation</strong>.
      </p>

      {/* Absolute Value */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Absolute Value
      </h2>

      <Definition title="Definition 4.3.1 (Absolute value)">
        <p className="mb-3">
          If <Math>{'x'}</Math> is a rational number, the <strong className="text-blue-300">absolute
          value</strong> <Math>{'|x|'}</Math> of <Math>{'x'}</Math> is defined as follows:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>If <Math>{'x'}</Math> is positive, then <Math>{'|x| := x'}</Math>.</li>
          <li>If <Math>{'x'}</Math> is negative, then <Math>{'|x| := -x'}</Math>.</li>
          <li>If <Math>{'x'}</Math> is zero, then <Math>{'|x| := 0'}</Math>.</li>
        </ul>
      </Definition>

      <Example title="Examples of Absolute Value">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><Math>{'|3| = 3'}</Math></li>
          <li><Math>{'|-5| = -(-5) = 5'}</Math></li>
          <li><Math>{'|0| = 0'}</Math></li>
          <li><Math>{'|-7/3| = 7/3'}</Math></li>
        </ul>
      </Example>

      <Definition title="Definition 4.3.2 (Distance)">
        <p className="mb-3">
          Let <Math>{'x'}</Math> and <Math>{'y'}</Math> be rational numbers. The
          quantity <Math>{'|x - y|'}</Math> is called the <strong className="text-blue-300">distance</strong> between{' '}
          <Math>{'x'}</Math> and <Math>{'y'}</Math> and is sometimes denoted{' '}
          <Math>{'d(x, y)'}</Math>:
        </p>
        <MathBlock>{`d(x, y) := |x - y|.`}</MathBlock>
        <p className="mt-3">
          For instance, <Math>{'d(3, 5) = |3 - 5| = |-2| = 2'}</Math>.
        </p>
      </Definition>

      <Theorem title="Proposition 4.3.3 (Basic properties of absolute value and distance)">
        <p className="mb-3">
          Let <Math>{'x, y, z'}</Math> be rational numbers.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            (a) <strong>Non-degeneracy of absolute value:</strong> We have <Math>{'|x| \\geq 0'}</Math>.
            Also, <Math>{'|x| = 0'}</Math> if and only if <Math>{'x = 0'}</Math>.
          </li>
          <li>
            (b) <strong>Triangle inequality for absolute value:</strong> We
            have <Math>{'|x + y| \\leq |x| + |y|'}</Math>.
          </li>
          <li>
            (c) We have the inequalities <Math>{'-y \\leq x \\leq y'}</Math> if and only
            if <Math>{'y \\geq |x|'}</Math>. In particular, <Math>{'-|x| \\leq x \\leq |x|'}</Math>.
          </li>
          <li>
            (d) <strong>Multiplicativity of absolute value:</strong> We
            have <Math>{'|xy| = |x| \\cdot |y|'}</Math>. In particular, <Math>{'|-x| = |x|'}</Math>.
          </li>
          <li>
            (e) <strong>Non-degeneracy of distance:</strong> We have <Math>{'d(x,y) \\geq 0'}</Math>.
            Also, <Math>{'d(x,y) = 0'}</Math> if and only if <Math>{'x = y'}</Math>.
          </li>
          <li>
            (f) <strong>Symmetry of distance:</strong> <Math>{'d(x, y) = d(y, x)'}</Math>.
          </li>
          <li>
            (g) <strong>Triangle inequality for distance:</strong>{' '}
            <Math>{'d(x, z) \\leq d(x, y) + d(y, z)'}</Math>.
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>The Triangle Inequality</strong>
        <p className="mt-2">
          The triangle inequality is one of the most important inequalities in analysis. It says
          that the direct distance from <Math>{'x'}</Math> to <Math>{'z'}</Math> is never longer
          than going from <Math>{'x'}</Math> to <Math>{'y'}</Math> and then
          from <Math>{'y'}</Math> to <Math>{'z'}</Math>. This is named after the geometric fact
          that in any triangle, the length of one side is at most the sum of the other two.
        </p>
      </Callout>

      {/* Epsilon-closeness */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Epsilon-Closeness
      </h2>

      <p className="text-dark-300 mb-6">
        Absolute value is useful for measuring how "close" two numbers are. Let us make a
        somewhat artificial definition that will serve as scaffolding for the more important
        notions of limits and Cauchy sequences later.
      </p>

      <Definition title="Definition 4.3.4 (Epsilon-closeness)">
        <p className="mb-3">
          Let <Math>{'\\varepsilon > 0'}</Math>, and let <Math>{'x, y'}</Math> be rational numbers.
          We say that <Math>{'y'}</Math> is <strong className="text-blue-300">
          <Math>{'\\varepsilon'}</Math>-close</strong> to <Math>{'x'}</Math> iff we have:
        </p>
        <MathBlock>{`d(y, x) \\leq \\varepsilon.`}</MathBlock>
      </Definition>

      <Callout type="warning">
        <strong>Remark 4.3.5</strong>
        <p className="mt-2">
          This definition is not standard in mathematics textbooks; we will use it as
          "scaffolding" to construct the more important notions of limits (and of Cauchy
          sequences) later on, and once we have those more advanced notions we will discard
          the notion of <Math>{'\\varepsilon'}</Math>-close.
        </p>
      </Callout>

      <Example title="Examples 4.3.6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The numbers <Math>{'0.99'}</Math> and <Math>{'1.01'}</Math> are <Math>{'0.1'}</Math>-close,
            but they are not <Math>{'0.01'}</Math>-close, because{' '}
            <Math>{'d(0.99, 1.01) = |0.99 - 1.01| = 0.02'}</Math> is larger than <Math>{'0.01'}</Math>.
          </li>
          <li>
            The numbers <Math>{'2'}</Math> and <Math>{'2'}</Math> are <Math>{'\\varepsilon'}</Math>-close
            for every positive <Math>{'\\varepsilon'}</Math>.
          </li>
        </ul>
      </Example>

      <p className="text-dark-300 mt-6 mb-4">
        We do not bother defining a notion of <Math>{'\\varepsilon'}</Math>-close
        when <Math>{'\\varepsilon'}</Math> is zero or negative, because
        if <Math>{'\\varepsilon'}</Math> is zero then <Math>{'x'}</Math> and <Math>{'y'}</Math> are
        only <Math>{'\\varepsilon'}</Math>-close when they are equal, and
        when <Math>{'\\varepsilon'}</Math> is negative then <Math>{'x'}</Math> and <Math>{'y'}</Math> are
        never <Math>{'\\varepsilon'}</Math>-close.
      </p>

      <Theorem title="Proposition 4.3.7 (Properties of epsilon-closeness)">
        <p className="mb-3">
          Let <Math>{'x, y, z, w'}</Math> be rational numbers.
        </p>
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            (a) If <Math>{'x = y'}</Math>, then <Math>{'x'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'y'}</Math> for every <Math>{'\\varepsilon > 0'}</Math>. Conversely,
            if <Math>{'x'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'y'}</Math> for every <Math>{'\\varepsilon > 0'}</Math>,
            then <Math>{'x = y'}</Math>.
          </li>
          <li>
            (b) Let <Math>{'\\varepsilon > 0'}</Math>. If <Math>{'x'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'y'}</Math>, then <Math>{'y'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'x'}</Math>.
          </li>
          <li>
            (c) Let <Math>{'\\varepsilon, \\delta > 0'}</Math>. If <Math>{'x'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'y'}</Math>, and <Math>{'y'}</Math> is <Math>{'\\delta'}</Math>-close
            to <Math>{'z'}</Math>, then <Math>{'x'}</Math> and <Math>{'z'}</Math> are{' '}
            <Math>{'(\\varepsilon + \\delta)'}</Math>-close.
          </li>
          <li>
            (d) Let <Math>{'\\varepsilon, \\delta > 0'}</Math>. If <Math>{'x'}</Math> and <Math>{'y'}</Math> are{' '}
            <Math>{'\\varepsilon'}</Math>-close, and <Math>{'z'}</Math> and <Math>{'w'}</Math> are{' '}
            <Math>{'\\delta'}</Math>-close, then <Math>{'x + z'}</Math> and <Math>{'y + w'}</Math> are{' '}
            <Math>{'(\\varepsilon + \\delta)'}</Math>-close.
          </li>
          <li>
            (e) Let <Math>{'\\varepsilon > 0'}</Math>. If <Math>{'x'}</Math> and <Math>{'y'}</Math> are{' '}
            <Math>{'\\varepsilon'}</Math>-close, they are also <Math>{"\\varepsilon'"}</Math>-close
            for every <Math>{"\\varepsilon' > \\varepsilon"}</Math>.
          </li>
          <li>
            (f) Let <Math>{'\\varepsilon > 0'}</Math>. If <Math>{'y'}</Math> and <Math>{'z'}</Math> are
            both <Math>{'\\varepsilon'}</Math>-close to <Math>{'x'}</Math>, and <Math>{'w'}</Math> is
            between <Math>{'y'}</Math> and <Math>{'z'}</Math>, then <Math>{'w'}</Math> is
            also <Math>{'\\varepsilon'}</Math>-close to <Math>{'x'}</Math>.
          </li>
          <li>
            (g) Let <Math>{'\\varepsilon > 0'}</Math>. If <Math>{'x'}</Math> and <Math>{'y'}</Math> are{' '}
            <Math>{'\\varepsilon'}</Math>-close, and <Math>{'z'}</Math> is non-zero,
            then <Math>{'xz'}</Math> and <Math>{'yz'}</Math> are <Math>{'\\varepsilon|z|'}</Math>-close.
          </li>
          <li>
            (h) Let <Math>{'\\varepsilon, \\delta > 0'}</Math>. If <Math>{'x'}</Math> and <Math>{'y'}</Math> are{' '}
            <Math>{'\\varepsilon'}</Math>-close, and <Math>{'z'}</Math> and <Math>{'w'}</Math> are{' '}
            <Math>{'\\delta'}</Math>-close, then <Math>{'xz'}</Math> and <Math>{'yw'}</Math> are{' '}
            <Math>{'(\\varepsilon|z| + \\delta|x| + \\varepsilon\\delta)'}</Math>-close.
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>Remark 4.3.8</strong>
        <p className="mt-2">
          One should compare statements (a)-(c) of this proposition with the reflexive, symmetric,
          and transitive axioms of equality. It is often useful to think of the notion
          of "<Math>{'\\varepsilon'}</Math>-close" as an approximate substitute for that of
          equality in analysis.
        </p>
      </Callout>

      {/* Exponentiation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exponentiation to Natural Numbers
      </h2>

      <p className="text-dark-300 mb-6">
        Now we recursively define exponentiation for natural number exponents, extending
        the previous definition in Chapter 2.
      </p>

      <Definition title="Definition 4.3.9 (Exponentiation to a natural number)">
        <p className="mb-3">
          Let <Math>{'x'}</Math> be a rational number. To raise <Math>{'x'}</Math> to the
          power <Math>{'0'}</Math>, we define:
        </p>
        <MathBlock>{`x^0 := 1.`}</MathBlock>
        <p className="my-3">
          Now suppose inductively that <Math>{'x^n'}</Math> has been defined for some natural
          number <Math>{'n'}</Math>, then we define:
        </p>
        <MathBlock>{`x^{n+1} := x^n \\times x.`}</MathBlock>
      </Definition>

      <Example title="Examples of Exponentiation">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><Math>{'3^0 = 1'}</Math></li>
          <li><Math>{'3^1 = 3^0 \\times 3 = 1 \\times 3 = 3'}</Math></li>
          <li><Math>{'3^2 = 3^1 \\times 3 = 3 \\times 3 = 9'}</Math></li>
          <li><Math>{'3^3 = 3^2 \\times 3 = 9 \\times 3 = 27'}</Math></li>
          <li><Math>{'(2/3)^2 = 4/9'}</Math></li>
        </ul>
      </Example>

      <Theorem title="Proposition 4.3.10 (Properties of exponentiation, I)">
        <p className="mb-3">
          Let <Math>{'x, y'}</Math> be rational numbers, and let <Math>{'n, m'}</Math> be natural numbers.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            (a) We have <Math>{'x^n x^m = x^{n+m}'}</Math>, <Math>{'(x^n)^m = x^{nm}'}</Math>,
            and <Math>{'(xy)^n = x^n y^n'}</Math>.
          </li>
          <li>
            (b) We have <Math>{'x^n = 0'}</Math> if and only if <Math>{'x = 0'}</Math>.
          </li>
          <li>
            (c) If <Math>{'x \\geq y \\geq 0'}</Math>,
            then <Math>{'x^n \\geq y^n \\geq 0'}</Math>.
            If <Math>{'x > y \\geq 0'}</Math> and <Math>{'n > 0'}</Math>,
            then <Math>{'x^n > y^n \\geq 0'}</Math>.
          </li>
          <li>
            (d) We have <Math>{'|x^n| = |x|^n'}</Math>.
          </li>
        </ul>
      </Theorem>

      {/* Negative Exponents */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exponentiation to Negative Integers
      </h2>

      <Definition title="Definition 4.3.11 (Exponentiation to a negative number)">
        <p className="mb-3">
          Let <Math>{'x'}</Math> be a <strong>non-zero</strong> rational number. Then for any
          negative integer <Math>{'-n'}</Math>, we define:
        </p>
        <MathBlock>{`x^{-n} := 1/x^n.`}</MathBlock>
      </Definition>

      <Example title="Examples with Negative Exponents">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><Math>{'x^{-1} = 1/x'}</Math></li>
          <li><Math>{'x^{-2} = 1/x^2'}</Math></li>
          <li><Math>{'x^{-3} = 1/x^3 = 1/(x \\times x \\times x)'}</Math></li>
          <li><Math>{'2^{-3} = 1/2^3 = 1/8'}</Math></li>
          <li><Math>{'(3/4)^{-2} = 1/(3/4)^2 = 1/(9/16) = 16/9'}</Math></li>
        </ul>
      </Example>

      <p className="text-dark-300 mt-6 mb-6">
        We now have <Math>{'x^n'}</Math> defined for any integer <Math>{'n'}</Math>, whether{' '}
        <Math>{'n'}</Math> is positive, negative, or zero. Exponentiation with integer exponents
        has the following properties (which supersede Proposition 4.3.10):
      </p>

      <Theorem title="Proposition 4.3.12 (Properties of exponentiation, II)">
        <p className="mb-3">
          Let <Math>{'x, y'}</Math> be <strong>non-zero</strong> rational numbers, and
          let <Math>{'n, m'}</Math> be integers.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            (a) We have <Math>{'x^n x^m = x^{n+m}'}</Math>, <Math>{'(x^n)^m = x^{nm}'}</Math>,
            and <Math>{'(xy)^n = x^n y^n'}</Math>.
          </li>
          <li>
            (b) If <Math>{'x \\geq y > 0'}</Math>,
            then <Math>{'x^n \\geq y^n > 0'}</Math> if <Math>{'n'}</Math> is positive,
            and <Math>{'0 < x^n \\leq y^n'}</Math> if <Math>{'n'}</Math> is negative.
          </li>
          <li>
            (c) If <Math>{'x, y > 0'}</Math>, <Math>{'n \\neq 0'}</Math>,
            and <Math>{'x^n = y^n'}</Math>, then <Math>{'x = y'}</Math>.
          </li>
          <li>
            (d) We have <Math>{'|x^n| = |x|^n'}</Math>.
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Note on Negative Exponents</strong>
        <p className="mt-2">
          When <Math>{'n'}</Math> is negative, the inequality in part (b) reverses direction!
          For example, <Math>{'3 > 2 > 0'}</Math>, but <Math>{'3^{-1} = 1/3 < 1/2 = 2^{-1}'}</Math>.
          This is because taking a reciprocal reverses inequalities for positive numbers.
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.3.1</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 4.3.3. (Hint: while all of these claims can be proven by dividing
            into cases, such as when <Math>{'x'}</Math> is positive, negative, or zero, several
            parts of the proposition can be proven without such a tedious division into cases.
            For instance, one can use earlier parts of the proposition to prove later ones.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.3.2</p>
          <p className="text-dark-400 mt-2">
            Prove the remaining claims in Proposition 4.3.7.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.3.3</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 4.3.10. (Hint: use induction.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.3.4</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 4.3.12. (Hint: induction is not suitable here. Instead, use
            Proposition 4.3.10.)
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 4.3.5</p>
          <p className="text-dark-400 mt-2">
            Prove that <Math>{'2^N \\geq N'}</Math> for all positive integers <Math>{'N'}</Math>.
            (Hint: use induction.)
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Absolute value</strong> <Math>{'|x|'}</Math> gives
            the "magnitude" of a number: positive numbers stay the same, negative numbers become
            positive, and zero stays zero.
          </li>
          <li>
            <strong className="text-dark-200">Distance</strong> <Math>{'d(x,y) = |x - y|'}</Math> measures
            how far apart two numbers are.
          </li>
          <li>
            <strong className="text-dark-200">Triangle inequality</strong>: The most important
            property is <Math>{'|x + y| \\leq |x| + |y|'}</Math> (and
            equivalently <Math>{'d(x,z) \\leq d(x,y) + d(y,z)'}</Math>).
          </li>
          <li>
            <strong className="text-dark-200"><Math>{'\\varepsilon'}</Math>-closeness</strong> is
            scaffolding for limits: <Math>{'x'}</Math> is <Math>{'\\varepsilon'}</Math>-close
            to <Math>{'y'}</Math> iff <Math>{'|x - y| \\leq \\varepsilon'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Exponentiation to natural numbers</strong> is
            defined recursively: <Math>{'x^0 = 1'}</Math> and <Math>{'x^{n+1} = x^n \\cdot x'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Exponentiation to negative integers</strong>:
            For non-zero <Math>{'x'}</Math>, we have <Math>{'x^{-n} = 1/x^n'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Key laws</strong>: <Math>{'x^n x^m = x^{n+m}'}</Math>,{' '}
            <Math>{'(x^n)^m = x^{nm}'}</Math>, and <Math>{'(xy)^n = x^n y^n'}</Math>.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
