import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          We assume there exists a set <MathInline>{'\\mathbb{R}'}</MathInline> of objects, called{' '}
          <strong>real numbers</strong>, which satisfy 10 axioms. These axioms fall naturally into
          three groups: the <em>field axioms</em>, the <em>order axioms</em>, and the{' '}
          <em>least-upper-bound axiom</em> (also called the completeness axiom).
        </p>
      </Callout>

      {/* Field Axioms */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Field Axioms</h2>

      <p className="text-dark-200 mb-4">
        Along with the set <MathInline>{'\\mathbb{R}'}</MathInline> of real numbers, we assume the
        existence of two operations called <strong>addition</strong> and <strong>multiplication</strong>,
        such that for every pair of real numbers <MathInline>{'x'}</MathInline> and <MathInline>{'y'}</MathInline> we
        can form:
      </p>
      <ul className="list-disc list-inside mb-4 text-dark-300">
        <li>The <strong>sum</strong> <MathInline>{'x + y'}</MathInline></li>
        <li>The <strong>product</strong> <MathInline>{'xy'}</MathInline> (or <MathInline>{'x \\cdot y'}</MathInline>)</li>
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
            There exist two distinct real numbers, denoted by <MathInline>{'0'}</MathInline> and{' '}
            <MathInline>{'1'}</MathInline>, such that for every real <MathInline>{'x'}</MathInline>:
          </p>
          <MathBlock>{'x + 0 = x \\qquad 1 \\cdot x = x'}</MathBlock>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 5: Existence of Negatives</p>
          <p>
            For every real number <MathInline>{'x'}</MathInline> there is a real number{' '}
            <MathInline>{'y'}</MathInline> such that <MathInline>{'x + y = 0'}</MathInline>.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 6: Existence of Reciprocals</p>
          <p>
            For every real number <MathInline>{'x \\neq 0'}</MathInline> there is a real number{' '}
            <MathInline>{'y'}</MathInline> such that <MathInline>{'xy = 1'}</MathInline>.
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
          <p className="text-sm text-dark-300">If <MathInline>{'a + b = a + c'}</MathInline>, then <MathInline>{'b = c'}</MathInline></p>
          <p className="text-sm text-dark-300">If <MathInline>{'ab = ac'}</MathInline> and <MathInline>{'a \\neq 0'}</MathInline>, then <MathInline>{'b = c'}</MathInline></p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400 mb-2">Subtraction & Division</p>
          <p className="text-sm text-dark-300"><MathInline>{'b - a = b + (-a)'}</MathInline></p>
          <p className="text-sm text-dark-300"><MathInline>{'b/a = b \\cdot a^{-1}'}</MathInline> for <MathInline>{'a \\neq 0'}</MathInline></p>
        </div>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Key Algebraic Properties</p>
        <div className="space-y-1 text-sm">
          <p><MathInline>{'-(-a) = a'}</MathInline></p>
          <p><MathInline>{'0 \\cdot a = 0'}</MathInline></p>
          <p>If <MathInline>{'ab = 0'}</MathInline>, then <MathInline>{'a = 0'}</MathInline> or <MathInline>{'b = 0'}</MathInline></p>
          <p><MathInline>{'(-a)b = -(ab)'}</MathInline> and <MathInline>{'(-a)(-b) = ab'}</MathInline></p>
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
          We assume there exists a subset <MathInline>{'\\mathbb{R}^+ \\subset \\mathbb{R}'}</MathInline>,
          called the set of <strong>positive numbers</strong>, satisfying Axioms 7-9.
        </p>
      </Callout>

      <div className="space-y-4 mb-6">
        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 7: Closure under Addition and Multiplication</p>
          <p>
            If <MathInline>{'x'}</MathInline> and <MathInline>{'y'}</MathInline> are in{' '}
            <MathInline>{'\\mathbb{R}^+'}</MathInline>, so are <MathInline>{'x + y'}</MathInline> and{' '}
            <MathInline>{'xy'}</MathInline>.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 8: Trichotomy</p>
          <p>
            For every real <MathInline>{'x \\neq 0'}</MathInline>, either{' '}
            <MathInline>{'x \\in \\mathbb{R}^+'}</MathInline> or{' '}
            <MathInline>{'-x \\in \\mathbb{R}^+'}</MathInline>, but not both.
          </p>
        </Callout>

        <Callout type="definition">
          <p className="font-semibold mb-2">Axiom 9: Zero is Not Positive</p>
          <p><MathInline>{'0 \\notin \\mathbb{R}^+'}</MathInline></p>
        </Callout>
      </div>

      {/* Inequality Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Inequality Notation</h3>

      <p className="text-dark-200 mb-4">
        Now we can define the inequality symbols:
      </p>

      <div className="p-4 bg-dark-800 rounded-lg mb-6">
        <ul className="space-y-2 text-sm">
          <li><MathInline>{'x < y'}</MathInline> means <MathInline>{'y - x'}</MathInline> is positive</li>
          <li><MathInline>{'y > x'}</MathInline> means <MathInline>{'x < y'}</MathInline></li>
          <li><MathInline>{'x \\leq y'}</MathInline> means either <MathInline>{'x < y'}</MathInline> or <MathInline>{'x = y'}</MathInline></li>
          <li><MathInline>{'y \\geq x'}</MathInline> means <MathInline>{'x \\leq y'}</MathInline></li>
        </ul>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Properties of Inequalities</p>
        <div className="space-y-1 text-sm">
          <p><strong>Trichotomy:</strong> Exactly one of <MathInline>{'a < b'}</MathInline>, <MathInline>{'a = b'}</MathInline>, <MathInline>{'a > b'}</MathInline> holds</p>
          <p><strong>Transitivity:</strong> If <MathInline>{'a < b'}</MathInline> and <MathInline>{'b < c'}</MathInline>, then <MathInline>{'a < c'}</MathInline></p>
          <p><strong>Addition:</strong> If <MathInline>{'a < b'}</MathInline>, then <MathInline>{'a + c < b + c'}</MathInline></p>
          <p><strong>Multiplication (positive):</strong> If <MathInline>{'a < b'}</MathInline> and <MathInline>{'c > 0'}</MathInline>, then <MathInline>{'ac < bc'}</MathInline></p>
          <p><strong>Multiplication (negative):</strong> If <MathInline>{'a < b'}</MathInline> and <MathInline>{'c < 0'}</MathInline>, then <MathInline>{'ac > bc'}</MathInline></p>
        </div>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Important Consequences</p>
        <div className="space-y-1 text-sm">
          <p>If <MathInline>{'a \\neq 0'}</MathInline>, then <MathInline>{'a^2 > 0'}</MathInline></p>
          <p><MathInline>{'1 > 0'}</MathInline></p>
          <p>If <MathInline>{'a < b'}</MathInline>, then <MathInline>{'-a > -b'}</MathInline></p>
        </div>
      </Callout>

      {/* Integers and Rationals */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Integers and Rational Numbers</h2>

      <p className="text-dark-200 mb-4">
        There exist certain subsets of <MathInline>{'\\mathbb{R}'}</MathInline> with special properties.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Inductive Set</p>
        <p>
          A set of real numbers is called <strong>inductive</strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2 text-sm">
          <li>The number <MathInline>{'1'}</MathInline> is in the set</li>
          <li>For every <MathInline>{'x'}</MathInline> in the set, <MathInline>{'x + 1'}</MathInline> is also in the set</li>
        </ol>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Positive Integers</p>
        <p>
          A real number is called a <strong>positive integer</strong> if it belongs to every inductive set.
          The set of positive integers <MathInline>{'\\mathbb{P} = \\{1, 2, 3, \\ldots\\}'}</MathInline> is
          the <em>smallest</em> inductive set.
        </p>
      </Callout>

      <div className="p-4 bg-dark-800 rounded-lg mb-6">
        <p className="font-semibold text-primary-400 mb-2">Number Systems</p>
        <ul className="space-y-2 text-sm text-dark-300">
          <li><MathInline>{'\\mathbb{Z}'}</MathInline> = <strong>Integers</strong>: positive integers, negative integers, and zero</li>
          <li><MathInline>{'\\mathbb{Q}'}</MathInline> = <strong>Rational numbers</strong>: quotients <MathInline>{'a/b'}</MathInline> where <MathInline>{'a, b \\in \\mathbb{Z}'}</MathInline> and <MathInline>{'b \\neq 0'}</MathInline></li>
          <li><strong>Irrational numbers</strong>: real numbers not in <MathInline>{'\\mathbb{Q}'}</MathInline> (e.g., <MathInline>{'\\sqrt{2}'}</MathInline>, <MathInline>{'\\pi'}</MathInline>)</li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          The set <MathInline>{'\\mathbb{Q}'}</MathInline> of rational numbers satisfies all nine axioms
          (1-9). This is why we call <MathInline>{'\\mathbb{Q}'}</MathInline> an <strong>ordered field</strong>.
          However, <MathInline>{'\\mathbb{Q}'}</MathInline> does not satisfy Axiom 10.
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
          A set <MathInline>{'S'}</MathInline> is <strong>bounded above</strong> by <MathInline>{'B'}</MathInline> if{' '}
          <MathInline>{'x \\leq B'}</MathInline> for every <MathInline>{'x \\in S'}</MathInline>.
          The number <MathInline>{'B'}</MathInline> is called an <strong>upper bound</strong> for <MathInline>{'S'}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Least Upper Bound (Supremum)</p>
        <p>
          A number <MathInline>{'B'}</MathInline> is called the <strong>least upper bound</strong> (or{' '}
          <strong>supremum</strong>) of a nonempty set <MathInline>{'S'}</MathInline> if:
        </p>
        <ol className="list-decimal list-inside mt-2 text-sm">
          <li><MathInline>{'B'}</MathInline> is an upper bound for <MathInline>{'S'}</MathInline></li>
          <li>No number less than <MathInline>{'B'}</MathInline> is an upper bound for <MathInline>{'S'}</MathInline></li>
        </ol>
        <p className="mt-2">We write <MathInline>{'B = \\sup S'}</MathInline>.</p>
      </Callout>

      <div className="space-y-4 mt-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 1</p>
          <p className="text-dark-300 text-sm mt-1">
            <MathInline>{'S = \\{x \\in \\mathbb{R} : 0 \\leq x \\leq 1\\}'}</MathInline>
          </p>
          <p className="text-dark-400 text-sm">
            This set is bounded above by 1, and <MathInline>{'\\max S = \\sup S = 1'}</MathInline>.
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 2</p>
          <p className="text-dark-300 text-sm mt-1">
            <MathInline>{'T = \\{x \\in \\mathbb{R} : 0 \\leq x < 1\\}'}</MathInline>
          </p>
          <p className="text-dark-400 text-sm">
            This set is bounded above by 1, but has <em>no maximum element</em>.
            Still, <MathInline>{'\\sup T = 1'}</MathInline>.
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
          Every nonempty set <MathInline>{'S'}</MathInline> of real numbers which is bounded above
          has a supremum; that is, there is a real number <MathInline>{'B'}</MathInline> such
          that <MathInline>{'B = \\sup S'}</MathInline>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Why This Matters</p>
        <p>
          The completeness axiom is what distinguishes <MathInline>{'\\mathbb{R}'}</MathInline> from{' '}
          <MathInline>{'\\mathbb{Q}'}</MathInline>. For example, the set{' '}
          <MathInline>{'\\{x \\in \\mathbb{Q} : x^2 < 2\\}'}</MathInline> has no supremum in{' '}
          <MathInline>{'\\mathbb{Q}'}</MathInline>, but it does have a supremum in{' '}
          <MathInline>{'\\mathbb{R}'}</MathInline>, namely <MathInline>{'\\sqrt{2}'}</MathInline>.
        </p>
      </Callout>

      {/* Lower Bounds */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lower Bounds and Infimum</h3>

      <p className="text-dark-200 mb-4">
        Similarly, we define <strong>lower bound</strong>, <strong>bounded below</strong>, and{' '}
        <strong>greatest lower bound</strong> (or <strong>infimum</strong>, denoted <MathInline>{'\\inf S'}</MathInline>).
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Existence of Infimum</p>
        <p>
          Every nonempty set <MathInline>{'S'}</MathInline> that is bounded below has a greatest
          lower bound; that is, there is a real number <MathInline>{'L'}</MathInline> such
          that <MathInline>{'L = \\inf S'}</MathInline>.
        </p>
        <p className="text-sm text-dark-400 mt-2">
          <em>Proof sketch:</em> Let <MathInline>{'-S'}</MathInline> denote the set of negatives of numbers
          in <MathInline>{'S'}</MathInline>. Then <MathInline>{'-S'}</MathInline> is bounded above, so by
          Axiom 10 it has a supremum <MathInline>{'B'}</MathInline>. Then <MathInline>{'-B = \\inf S'}</MathInline>.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              The real numbers <MathInline>{'\\mathbb{R}'}</MathInline> satisfy 10 axioms: 6 field axioms,
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
              real numbers using <MathInline>{'<'}</MathInline>, <MathInline>{'>'}</MathInline>, etc.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>completeness axiom</strong> (10) says every nonempty set bounded above has a
              supremum. This is what makes <MathInline>{'\\mathbb{R}'}</MathInline> "complete" and allows
              irrational numbers to exist.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The supremum <MathInline>{'\\sup S'}</MathInline> may or may not be in <MathInline>{'S'}</MathInline>.
              If it's in <MathInline>{'S'}</MathInline>, it equals <MathInline>{'\\max S'}</MathInline>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
