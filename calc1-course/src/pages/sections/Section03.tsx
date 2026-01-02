import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">The Real Number System</h2>

      <p className="text-dark-200 mb-6">
        The point of view we shall adopt is <strong>nonconstructive</strong>. We take the real numbers
        as undefined objects satisfying a number of properties that we use as axioms. All properties
        of real numbers can be deduced from these axioms.
      </p>

      <Callout type="info">
        <p>
          We assume there exists a set <InlineMath>{'\\mathbb{R}'}</InlineMath> of objects, called{' '}
          <strong>real numbers</strong>, which satisfy 10 axioms. These axioms fall naturally into
          three groups: the <em>field axioms</em>, the <em>order axioms</em>, and the{' '}
          <em>least-upper-bound axiom</em> (also called the completeness axiom).
        </p>
      </Callout>

      {/* Field Axioms */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Field Axioms</h2>

      <p className="text-dark-200 mb-4">
        Along with the set <InlineMath>{'\\mathbb{R}'}</InlineMath> of real numbers, we assume the
        existence of two operations called <strong>addition</strong> and <strong>multiplication</strong>,
        such that for every pair of real numbers <InlineMath>{'x'}</InlineMath> and <InlineMath>{'y'}</InlineMath> we
        can form:
      </p>
      <ul className="list-disc list-inside mb-4 text-dark-300">
        <li>The <strong>sum</strong> <InlineMath>{'x + y'}</InlineMath></li>
        <li>The <strong>product</strong> <InlineMath>{'xy'}</InlineMath> (or <InlineMath>{'x \\cdot y'}</InlineMath>)</li>
      </ul>

      <div className="space-y-4 mb-6">
        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 1: Commutative Laws</p>
          <MathBlock>{'x + y = y + x \\qquad xy = yx'}</MathBlock>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 2: Associative Laws</p>
          <MathBlock>{'x + (y + z) = (x + y) + z \\qquad x(yz) = (xy)z'}</MathBlock>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 3: Distributive Law</p>
          <MathBlock>{'x(y + z) = xy + xz'}</MathBlock>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 4: Existence of Identity Elements</p>
          <p>
            There exist two distinct real numbers, denoted by <InlineMath>{'0'}</InlineMath> and{' '}
            <InlineMath>{'1'}</InlineMath>, such that for every real <InlineMath>{'x'}</InlineMath>:
          </p>
          <MathBlock>{'x + 0 = x \\qquad 1 \\cdot x = x'}</MathBlock>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 5: Existence of Negatives</p>
          <p>
            For every real number <InlineMath>{'x'}</InlineMath> there is a real number{' '}
            <InlineMath>{'y'}</InlineMath> such that <InlineMath>{'x + y = 0'}</InlineMath>.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 6: Existence of Reciprocals</p>
          <p>
            For every real number <InlineMath>{'x \\neq 0'}</InlineMath> there is a real number{' '}
            <InlineMath>{'y'}</InlineMath> such that <InlineMath>{'xy = 1'}</InlineMath>.
          </p>
        </Callout>
      </div>

      {/* Theorems from Field Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Consequences of the Field Axioms</h3>

      <p className="text-dark-200 mb-4">
        From Axioms 1-6, we can derive all the usual laws of elementary algebra:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400 mb-2">Cancellation Laws</p>
          <p className="text-sm text-dark-300">If <InlineMath>{'a + b = a + c'}</InlineMath>, then <InlineMath>{'b = c'}</InlineMath></p>
          <p className="text-sm text-dark-300">If <InlineMath>{'ab = ac'}</InlineMath> and <InlineMath>{'a \\neq 0'}</InlineMath>, then <InlineMath>{'b = c'}</InlineMath></p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400 mb-2">Subtraction & Division</p>
          <p className="text-sm text-dark-300"><InlineMath>{'b - a = b + (-a)'}</InlineMath></p>
          <p className="text-sm text-dark-300"><InlineMath>{'b/a = b \\cdot a^{-1}'}</InlineMath> for <InlineMath>{'a \\neq 0'}</InlineMath></p>
        </div>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Key Algebraic Properties</p>
        <div className="space-y-1 text-sm">
          <p><InlineMath>{'-(-a) = a'}</InlineMath></p>
          <p><InlineMath>{'0 \\cdot a = 0'}</InlineMath></p>
          <p>If <InlineMath>{'ab = 0'}</InlineMath>, then <InlineMath>{'a = 0'}</InlineMath> or <InlineMath>{'b = 0'}</InlineMath></p>
          <p><InlineMath>{'(-a)b = -(ab)'}</InlineMath> and <InlineMath>{'(-a)(-b) = ab'}</InlineMath></p>
        </div>
      </Callout>

      {/* Order Axioms */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Order Axioms</h2>

      <p className="text-dark-200 mb-4">
        The order axioms establish an ordering among the real numbers. We introduce this via
        the concept of <strong>positiveness</strong>.
      </p>

      <Callout type="info">
        <p>
          We assume there exists a subset <InlineMath>{'\\mathbb{R}^+ \\subset \\mathbb{R}'}</InlineMath>,
          called the set of <strong>positive numbers</strong>, satisfying Axioms 7-9.
        </p>
      </Callout>

      <div className="space-y-4 mb-6">
        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 7: Closure under Addition and Multiplication</p>
          <p>
            If <InlineMath>{'x'}</InlineMath> and <InlineMath>{'y'}</InlineMath> are in{' '}
            <InlineMath>{'\\mathbb{R}^+'}</InlineMath>, so are <InlineMath>{'x + y'}</InlineMath> and{' '}
            <InlineMath>{'xy'}</InlineMath>.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 8: Trichotomy</p>
          <p>
            For every real <InlineMath>{'x \\neq 0'}</InlineMath>, either{' '}
            <InlineMath>{'x \\in \\mathbb{R}^+'}</InlineMath> or{' '}
            <InlineMath>{'-x \\in \\mathbb{R}^+'}</InlineMath>, but not both.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 9: Zero is Not Positive</p>
          <p><InlineMath>{'0 \\notin \\mathbb{R}^+'}</InlineMath></p>
        </Callout>
      </div>

      {/* Inequality Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Inequality Notation</h3>

      <p className="text-dark-200 mb-4">
        Now we can define the inequality symbols:
      </p>

      <div className="p-4 bg-dark-800 rounded-lg mb-6">
        <ul className="space-y-2 text-sm">
          <li><InlineMath>{'x < y'}</InlineMath> means <InlineMath>{'y - x'}</InlineMath> is positive</li>
          <li><InlineMath>{'y > x'}</InlineMath> means <InlineMath>{'x < y'}</InlineMath></li>
          <li><InlineMath>{'x \\leq y'}</InlineMath> means either <InlineMath>{'x < y'}</InlineMath> or <InlineMath>{'x = y'}</InlineMath></li>
          <li><InlineMath>{'y \\geq x'}</InlineMath> means <InlineMath>{'x \\leq y'}</InlineMath></li>
        </ul>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Properties of Inequalities</p>
        <div className="space-y-1 text-sm">
          <p><strong>Trichotomy:</strong> Exactly one of <InlineMath>{'a < b'}</InlineMath>, <InlineMath>{'a = b'}</InlineMath>, <InlineMath>{'a > b'}</InlineMath> holds</p>
          <p><strong>Transitivity:</strong> If <InlineMath>{'a < b'}</InlineMath> and <InlineMath>{'b < c'}</InlineMath>, then <InlineMath>{'a < c'}</InlineMath></p>
          <p><strong>Addition:</strong> If <InlineMath>{'a < b'}</InlineMath>, then <InlineMath>{'a + c < b + c'}</InlineMath></p>
          <p><strong>Multiplication (positive):</strong> If <InlineMath>{'a < b'}</InlineMath> and <InlineMath>{'c > 0'}</InlineMath>, then <InlineMath>{'ac < bc'}</InlineMath></p>
          <p><strong>Multiplication (negative):</strong> If <InlineMath>{'a < b'}</InlineMath> and <InlineMath>{'c < 0'}</InlineMath>, then <InlineMath>{'ac > bc'}</InlineMath></p>
        </div>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Important Consequences</p>
        <div className="space-y-1 text-sm">
          <p>If <InlineMath>{'a \\neq 0'}</InlineMath>, then <InlineMath>{'a^2 > 0'}</InlineMath></p>
          <p><InlineMath>{'1 > 0'}</InlineMath></p>
          <p>If <InlineMath>{'a < b'}</InlineMath>, then <InlineMath>{'-a > -b'}</InlineMath></p>
        </div>
      </Callout>

      {/* Integers and Rationals */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Integers and Rational Numbers</h2>

      <p className="text-dark-200 mb-4">
        There exist certain subsets of <InlineMath>{'\\mathbb{R}'}</InlineMath> with special properties.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Inductive Set</p>
        <p>
          A set of real numbers is called <strong>inductive</strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2 text-sm">
          <li>The number <InlineMath>{'1'}</InlineMath> is in the set</li>
          <li>For every <InlineMath>{'x'}</InlineMath> in the set, <InlineMath>{'x + 1'}</InlineMath> is also in the set</li>
        </ol>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Positive Integers</p>
        <p>
          A real number is called a <strong>positive integer</strong> if it belongs to every inductive set.
          The set of positive integers <InlineMath>{'\\mathbb{P} = \\{1, 2, 3, \\ldots\\}'}</InlineMath> is
          the <em>smallest</em> inductive set.
        </p>
      </Callout>

      <div className="p-4 bg-dark-800 rounded-lg mb-6">
        <p className="font-semibold text-primary-400 mb-2">Number Systems</p>
        <ul className="space-y-2 text-sm text-dark-300">
          <li><InlineMath>{'\\mathbb{Z}'}</InlineMath> = <strong>Integers</strong>: positive integers, negative integers, and zero</li>
          <li><InlineMath>{'\\mathbb{Q}'}</InlineMath> = <strong>Rational numbers</strong>: quotients <InlineMath>{'a/b'}</InlineMath> where <InlineMath>{'a, b \\in \\mathbb{Z}'}</InlineMath> and <InlineMath>{'b \\neq 0'}</InlineMath></li>
          <li><strong>Irrational numbers</strong>: real numbers not in <InlineMath>{'\\mathbb{Q}'}</InlineMath> (e.g., <InlineMath>{'\\sqrt{2}'}</InlineMath>, <InlineMath>{'\\pi'}</InlineMath>)</li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          The set <InlineMath>{'\\mathbb{Q}'}</InlineMath> of rational numbers satisfies all nine axioms
          (1-9). This is why we call <InlineMath>{'\\mathbb{Q}'}</InlineMath> an <strong>ordered field</strong>.
          However, <InlineMath>{'\\mathbb{Q}'}</InlineMath> does not satisfy Axiom 10.
        </p>
      </Callout>

      {/* Completeness Axiom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Least-Upper-Bound Axiom (Completeness)</h2>

      <p className="text-dark-200 mb-4">
        This axiom is of fundamental importance in calculus. It allows us to establish the existence
        of irrational numbers and gives the real-number system a property of <strong>continuity</strong> that
        is a keystone in the logical structure of calculus.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Upper Bound</p>
        <p>
          A set <InlineMath>{'S'}</InlineMath> is <strong>bounded above</strong> by <InlineMath>{'B'}</InlineMath> if{' '}
          <InlineMath>{'x \\leq B'}</InlineMath> for every <InlineMath>{'x \\in S'}</InlineMath>.
          The number <InlineMath>{'B'}</InlineMath> is called an <strong>upper bound</strong> for <InlineMath>{'S'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Least Upper Bound (Supremum)</p>
        <p>
          A number <InlineMath>{'B'}</InlineMath> is called the <strong>least upper bound</strong> (or{' '}
          <strong>supremum</strong>) of a nonempty set <InlineMath>{'S'}</InlineMath> if:
        </p>
        <ol className="list-decimal list-inside mt-2 text-sm">
          <li><InlineMath>{'B'}</InlineMath> is an upper bound for <InlineMath>{'S'}</InlineMath></li>
          <li>No number less than <InlineMath>{'B'}</InlineMath> is an upper bound for <InlineMath>{'S'}</InlineMath></li>
        </ol>
        <p className="mt-2">We write <InlineMath>{'B = \\sup S'}</InlineMath>.</p>
      </Callout>

      <div className="space-y-4 mt-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 1</p>
          <p className="text-dark-300 text-sm mt-1">
            <InlineMath>{'S = \\{x \\in \\mathbb{R} : 0 \\leq x \\leq 1\\}'}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm">
            This set is bounded above by 1, and <InlineMath>{'\\max S = \\sup S = 1'}</InlineMath>.
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 2</p>
          <p className="text-dark-300 text-sm mt-1">
            <InlineMath>{'T = \\{x \\in \\mathbb{R} : 0 \\leq x < 1\\}'}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm">
            This set is bounded above by 1, but has <em>no maximum element</em>.
            Still, <InlineMath>{'\\sup T = 1'}</InlineMath>.
          </p>
        </div>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Uniqueness of Supremum</p>
        <p>
          Two different numbers cannot be least upper bounds for the same set.
          If a supremum exists, it is unique.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2 text-lg">Axiom 10: The Completeness Axiom</p>
        <p className="text-base">
          Every nonempty set <InlineMath>{'S'}</InlineMath> of real numbers which is bounded above
          has a supremum; that is, there is a real number <InlineMath>{'B'}</InlineMath> such
          that <InlineMath>{'B = \\sup S'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Why This Matters</p>
        <p>
          The completeness axiom is what distinguishes <InlineMath>{'\\mathbb{R}'}</InlineMath> from{' '}
          <InlineMath>{'\\mathbb{Q}'}</InlineMath>. For example, the set{' '}
          <InlineMath>{'\\{x \\in \\mathbb{Q} : x^2 < 2\\}'}</InlineMath> has no supremum in{' '}
          <InlineMath>{'\\mathbb{Q}'}</InlineMath>, but it does have a supremum in{' '}
          <InlineMath>{'\\mathbb{R}'}</InlineMath>, namely <InlineMath>{'\\sqrt{2}'}</InlineMath>.
        </p>
      </Callout>

      {/* Lower Bounds */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lower Bounds and Infimum</h3>

      <p className="text-dark-200 mb-4">
        Similarly, we define <strong>lower bound</strong>, <strong>bounded below</strong>, and{' '}
        <strong>greatest lower bound</strong> (or <strong>infimum</strong>, denoted <InlineMath>{'\\inf S'}</InlineMath>).
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Existence of Infimum</p>
        <p>
          Every nonempty set <InlineMath>{'S'}</InlineMath> that is bounded below has a greatest
          lower bound; that is, there is a real number <InlineMath>{'L'}</InlineMath> such
          that <InlineMath>{'L = \\inf S'}</InlineMath>.
        </p>
        <p className="text-sm text-dark-400 mt-2">
          <em>Proof sketch:</em> Let <InlineMath>{'-S'}</InlineMath> denote the set of negatives of numbers
          in <InlineMath>{'S'}</InlineMath>. Then <InlineMath>{'-S'}</InlineMath> is bounded above, so by
          Axiom 10 it has a supremum <InlineMath>{'B'}</InlineMath>. Then <InlineMath>{'-B = \\inf S'}</InlineMath>.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              The real numbers <InlineMath>{'\\mathbb{R}'}</InlineMath> satisfy 10 axioms: 6 field axioms,
              3 order axioms, and 1 completeness axiom.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The <strong>field axioms</strong> (1-6) give us addition, subtraction, multiplication, and
              division—all the usual rules of algebra.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <strong>order axioms</strong> (7-9) define positive numbers and allow us to compare
              real numbers using <InlineMath>{'<'}</InlineMath>, <InlineMath>{'>'}</InlineMath>, etc.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>completeness axiom</strong> (10) says every nonempty set bounded above has a
              supremum. This is what makes <InlineMath>{'\\mathbb{R}'}</InlineMath> "complete" and allows
              irrational numbers to exist.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The supremum <InlineMath>{'\\sup S'}</InlineMath> may or may not be in <InlineMath>{'S'}</InlineMath>.
              If it's in <InlineMath>{'S'}</InlineMath>, it equals <InlineMath>{'\\max S'}</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
