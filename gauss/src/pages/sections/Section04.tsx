import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Forms and Indeterminate Equations of the Second Degree</h2>

      <p>
        Section V is the longest and most ambitious part of the Disquisitiones. Here
        Gauss develops a comprehensive theory of <strong>binary quadratic forms</strong>—expressions
        of the form <InlineMath>ax^2 + bxy + cy^2</InlineMath>. This theory answers
        fundamental questions about which integers can be represented as sums of squares,
        and much more.
      </p>

      <h2>Binary Quadratic Forms</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Definition</h3>
        <p className="text-dark-200 mb-4">
          A <strong>binary quadratic form</strong> is an expression:
        </p>
        <MathBlock>{`f(x, y) = ax^2 + bxy + cy^2`}</MathBlock>
        <p className="text-dark-300 mt-4">
          where <InlineMath>a, b, c</InlineMath> are integers. Gauss writes this as{' '}
          <InlineMath>(a, b, c)</InlineMath>.
        </p>
      </div>

      <p>
        The <strong>discriminant</strong> (which Gauss calls the "determinant") is the
        quantity <InlineMath>D = b^2 - 4ac</InlineMath>. It governs many properties of
        the form.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: x² + y²</h3>
          <p className="text-dark-300">Form: (1, 0, 1)</p>
          <p className="text-dark-300">Discriminant: 0 - 4 = -4</p>
          <p className="text-dark-400 text-sm mt-2">
            Represents: 1, 2, 4, 5, 8, 9, 10, 13, ...
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: x² + 2y²</h3>
          <p className="text-dark-300">Form: (1, 0, 2)</p>
          <p className="text-dark-300">Discriminant: 0 - 8 = -8</p>
          <p className="text-dark-400 text-sm mt-2">
            Represents: 1, 2, 3, 4, 6, 8, 9, 11, ...
          </p>
        </div>
      </div>

      <h2>Representation of Integers</h2>

      <p>
        A central question: Given a form <InlineMath>f</InlineMath>, which integers{' '}
        <InlineMath>n</InlineMath> can be <strong>represented</strong> by <InlineMath>f</InlineMath>?
        That is, for which <InlineMath>n</InlineMath> does{' '}
        <InlineMath>f(x, y) = n</InlineMath> have integer solutions?
      </p>

      <Callout type="info">
        <strong>Classical Questions:</strong> Which integers are sums of two squares?
        Which are of the form <InlineMath>x^2 + 2y^2</InlineMath>? These ancient problems
        are special cases of Gauss's general theory.
      </Callout>

      <h2>Equivalence of Forms</h2>

      <p>
        Two forms can represent the same set of integers even if they look different.
        Gauss defines <strong>equivalence</strong> to capture this:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Equivalence</h3>
        <p className="text-dark-200 mb-4">
          Two forms <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are{' '}
          <strong>equivalent</strong> if one can be transformed into the other by a
          linear substitution:
        </p>
        <MathBlock>{`x = \\alpha x' + \\beta y', \\quad y = \\gamma x' + \\delta y'`}</MathBlock>
        <p className="text-dark-300 mt-4">
          where <InlineMath>\alpha\delta - \beta\gamma = \pm 1</InlineMath> (the transformation
          has determinant ±1).
        </p>
      </div>

      <p>
        Equivalent forms have the same discriminant and represent the same integers.
        Gauss distinguishes <strong>proper</strong> equivalence (determinant +1) from
        <strong>improper</strong> equivalence (determinant -1).
      </p>

      <h2>Reduction of Forms</h2>

      <p>
        Among all equivalent forms, Gauss identifies a canonical <strong>reduced form</strong>—the
        simplest representative of each equivalence class.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Reduced Forms (D &lt; 0)</h3>
        <p className="text-dark-200 mb-4">
          For negative discriminant, a form <InlineMath>(a, b, c)</InlineMath> is reduced if:
        </p>
        <MathBlock>{`|b| \\le a \\le c`}</MathBlock>
        <p className="text-dark-300 mt-2">
          with additional conditions when equality holds.
        </p>
      </div>

      <p>
        Every form is equivalent to a unique reduced form. This allows Gauss to classify
        all forms with a given discriminant.
      </p>

      <h2>Class Number</h2>

      <p>
        The number of equivalence classes of forms with discriminant <InlineMath>D</InlineMath>{' '}
        is called the <strong>class number</strong>, denoted <InlineMath>h(D)</InlineMath>.
        This is a fundamental invariant studied intensively in algebraic number theory.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="p-3 text-dark-300">D</th>
              <th className="p-3 text-dark-300">h(D)</th>
              <th className="p-3 text-dark-300">Reduced Forms</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">-4</td>
              <td className="p-3 text-amber-400">1</td>
              <td className="p-3 font-mono text-dark-300">(1, 0, 1)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">-8</td>
              <td className="p-3 text-amber-400">1</td>
              <td className="p-3 font-mono text-dark-300">(1, 0, 2)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">-20</td>
              <td className="p-3 text-amber-400">2</td>
              <td className="p-3 font-mono text-dark-300">(1, 0, 5), (2, 2, 3)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">-23</td>
              <td className="p-3 text-amber-400">3</td>
              <td className="p-3 font-mono text-dark-300">(1, 1, 6), (2, 1, 3), (2, -1, 3)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Composition of Forms</h2>

      <p>
        One of Gauss's most remarkable discoveries is that equivalence classes of forms
        can be <strong>composed</strong>—multiplied together to give another class. This
        gives the set of classes the structure of a group!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Composition Idea</h3>
        <p className="text-dark-200 mb-4">
          If form <InlineMath>f</InlineMath> represents <InlineMath>m</InlineMath> and
          form <InlineMath>g</InlineMath> represents <InlineMath>n</InlineMath>, then
          their composition <InlineMath>f \circ g</InlineMath> represents{' '}
          <InlineMath>mn</InlineMath>.
        </p>
        <p className="text-dark-300">
          The composition law is associative and commutative, and there is an identity
          element. This structure, now called the <strong>class group</strong>, is
          fundamental in algebraic number theory.
        </p>
      </div>

      <h2>Genera</h2>

      <p>
        Gauss introduces <strong>genera</strong> to partition forms into families based
        on their behavior modulo small primes. Two forms in the same genus represent
        the same residues modulo small divisors of the discriminant.
      </p>

      <h2>Sums of Two Squares</h2>

      <p>
        As a beautiful application, Gauss characterizes exactly which integers are
        sums of two squares:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Two Squares Theorem</h3>
        <p className="text-dark-200">
          A positive integer <InlineMath>n</InlineMath> is a sum of two squares if and
          only if every prime factor of the form <InlineMath>4k + 3</InlineMath> appears
          to an even power in the factorization of <InlineMath>n</InlineMath>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Sum of Two Squares</h3>
          <ul className="text-dark-300 space-y-1">
            <li>5 = 1² + 2²</li>
            <li>13 = 2² + 3²</li>
            <li>50 = 1² + 7² = 5² + 5²</li>
            <li>45 = 3² + 6² (45 = 9 × 5)</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Not Sum of Two Squares</h3>
          <ul className="text-dark-300 space-y-1">
            <li>3 (prime ≡ 3 mod 4)</li>
            <li>7 (prime ≡ 3 mod 4)</li>
            <li>6 = 2 × 3 (3 appears once)</li>
            <li>21 = 3 × 7</li>
          </ul>
        </div>
      </div>

      <h2>Legacy</h2>

      <p>
        Section V of the Disquisitiones laid the groundwork for profound developments:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Algebraic number theory:</strong> Dedekind reinterpreted Gauss's composition
          in terms of ideals in number rings.
        </li>
        <li>
          <strong>Class field theory:</strong> The class group controls abelian extensions
          of number fields.
        </li>
        <li>
          <strong>Modular forms:</strong> Generating functions for representation numbers
          are modular forms.
        </li>
      </ul>

      <Callout type="success">
        <strong>Looking Ahead:</strong> Section VI applies the theory of forms to various
        problems, including Diophantine equations. Section VII uses ideas from this section
        to study the division of the circle.
      </Callout>
    </LessonLayout>
  );
}
