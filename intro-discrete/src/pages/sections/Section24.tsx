import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <p>
        Just as we formed <InlineMath>\mathbb{'{Z}'}_n</InlineMath> by taking integers modulo{' '}
        <InlineMath>n</InlineMath>, we can form quotient rings of polynomials by taking polynomials
        modulo a fixed polynomial. When that polynomial is irreducible, we obtain a field—this is
        how finite fields of non-prime order are constructed.
      </p>

      <h2>Congruence of Polynomials</h2>

      <Definition title="Polynomial Congruence" className="my-6">
        <p>
          Let <InlineMath>m(x) \in F[x]</InlineMath> be a fixed polynomial. Two polynomials{' '}
          <InlineMath>f(x), g(x)</InlineMath> are <strong>congruent modulo m(x)</strong>, written:
        </p>
        <MathBlock>{`f(x) \\equiv g(x) \\pmod{m(x)}`}</MathBlock>
        <p className="mt-2">
          if <InlineMath>m(x)</InlineMath> divides <InlineMath>f(x) - g(x)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Polynomial Congruence is an Equivalence Relation" className="my-6">
        <p>
          Congruence mod <InlineMath>m(x)</InlineMath> is reflexive, symmetric, and transitive.
          Moreover, it is compatible with addition and multiplication.
        </p>
      </Theorem>

      <Definition title="Quotient Ring" className="my-6">
        <p>
          The <strong>quotient ring</strong> <InlineMath>F[x]/(m(x))</InlineMath> is the set of
          congruence classes:
        </p>
        <MathBlock>{`F[x]/(m(x)) = \\{[f(x)] : f(x) \\in F[x]\\}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>[f(x)] = [g(x)]</InlineMath> iff{' '}
          <InlineMath>f \equiv g \pmod{'{m}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Representatives" className="my-6">
        <p>
          Each congruence class contains exactly one polynomial of degree less than{' '}
          <InlineMath>\deg(m)</InlineMath>. So if <InlineMath>\deg(m) = n</InlineMath>:
        </p>
        <MathBlock>{`F[x]/(m(x)) = \\{[a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0] : a_i \\in F\\}`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>F = \mathbb{'{Z}'}_p</InlineMath>, then{' '}
          <InlineMath>|F[x]/(m(x))| = p^n</InlineMath>.
        </p>
      </Theorem>

      <Example title="Arithmetic in Z_2[x]/(x² + x + 1)" className="my-6">
        <p>
          Let <InlineMath>m(x) = x^2 + x + 1</InlineMath> (irreducible over <InlineMath>\mathbb{'{Z}'}_2</InlineMath>).
        </p>
        <p className="mt-2">
          Elements: <InlineMath>\{'{[0], [1], [x], [x + 1]}'}\</InlineMath> (4 elements).
        </p>
        <p className="mt-3"><strong>Addition:</strong> Add coefficients mod 2.</p>
        <p className="mt-3"><strong>Multiplication:</strong> Multiply then reduce mod <InlineMath>m(x)</InlineMath>.</p>
        <p className="mt-2">
          Example: <InlineMath>[x] \cdot [x] = [x^2]</InlineMath>. But{' '}
          <InlineMath>x^2 \equiv -x - 1 \equiv x + 1 \pmod{'{m(x)}'}</InlineMath>.
        </p>
        <p className="mt-2">
          So <InlineMath>[x]^2 = [x + 1]</InlineMath>.
        </p>
      </Example>

      <h2>Finite Fields</h2>

      <Theorem title="Quotient by Irreducible is a Field" className="my-6">
        <p>
          If <InlineMath>p(x) \in F[x]</InlineMath> is irreducible, then{' '}
          <InlineMath>F[x]/(p(x))</InlineMath> is a field.
        </p>
      </Theorem>

      <Example title="The Field with 4 Elements" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_2[x]/(x^2 + x + 1)</InlineMath> is a field with 4 elements,
          denoted <InlineMath>GF(4)</InlineMath> or <InlineMath>\mathbb{'{F}'}_4</InlineMath>.
        </p>
        <p className="mt-3"><strong>Multiplication table</strong> (writing <InlineMath>\alpha = [x]</InlineMath>):</p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-3"><InlineMath>\cdot</InlineMath></th>
                <th className="py-2 px-3">0</th>
                <th className="py-2 px-3">1</th>
                <th className="py-2 px-3"><InlineMath>\alpha</InlineMath></th>
                <th className="py-2 px-3"><InlineMath>\alpha + 1</InlineMath></th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
              <tr><td className="py-1 font-semibold">1</td><td>0</td><td>1</td><td><InlineMath>\alpha</InlineMath></td><td><InlineMath>\alpha + 1</InlineMath></td></tr>
              <tr><td className="py-1 font-semibold"><InlineMath>\alpha</InlineMath></td><td>0</td><td><InlineMath>\alpha</InlineMath></td><td><InlineMath>\alpha + 1</InlineMath></td><td>1</td></tr>
              <tr><td className="py-1 font-semibold"><InlineMath>\alpha + 1</InlineMath></td><td>0</td><td><InlineMath>\alpha + 1</InlineMath></td><td>1</td><td><InlineMath>\alpha</InlineMath></td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Note: <InlineMath>\alpha^2 = \alpha + 1</InlineMath>, <InlineMath>\alpha^3 = \alpha \cdot \alpha^2 = \alpha(\alpha + 1) = \alpha^2 + \alpha = 1</InlineMath>.
        </p>
        <p className="mt-2">
          The non-zero elements form a cyclic group: <InlineMath>\{'{1, \\alpha, \\alpha^2}'}\</InlineMath>.
        </p>
      </Example>

      <Example title="The Field with 8 Elements" className="my-6">
        <p>
          Use <InlineMath>p(x) = x^3 + x + 1</InlineMath> (irreducible over <InlineMath>\mathbb{'{Z}'}_2</InlineMath>).
        </p>
        <p className="mt-2">
          <InlineMath>GF(8) = \mathbb{'{Z}'}_2[x]/(x^3 + x + 1)</InlineMath> has{' '}
          <InlineMath>2^3 = 8</InlineMath> elements.
        </p>
        <p className="mt-3">Elements (writing <InlineMath>\beta = [x]</InlineMath>):</p>
        <MathBlock>{`0, 1, \\beta, \\beta + 1, \\beta^2, \\beta^2 + 1, \\beta^2 + \\beta, \\beta^2 + \\beta + 1`}</MathBlock>
        <p className="mt-2">
          Arithmetic: <InlineMath>\beta^3 = \beta + 1</InlineMath> (from the defining relation).
        </p>
      </Example>

      <h2>Existence and Uniqueness of Finite Fields</h2>

      <Theorem title="Finite Field Existence" className="my-6">
        <p>
          For every prime power <InlineMath>q = p^n</InlineMath>, there exists a unique (up to
          isomorphism) field with <InlineMath>q</InlineMath> elements, denoted{' '}
          <InlineMath>GF(q)</InlineMath> or <InlineMath>\mathbb{'{F}'}_q</InlineMath>.
        </p>
        <p className="mt-2">
          There is <strong>no</strong> field with <InlineMath>q</InlineMath> elements if{' '}
          <InlineMath>q</InlineMath> is not a prime power.
        </p>
      </Theorem>

      <Example title="Some Finite Fields" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>GF(2) = \mathbb{'{Z}'}_2</InlineMath>
          </li>
          <li>
            <InlineMath>GF(3) = \mathbb{'{Z}'}_3</InlineMath>
          </li>
          <li>
            <InlineMath>GF(4) = \mathbb{'{Z}'}_2[x]/(x^2 + x + 1)</InlineMath>
          </li>
          <li>
            <InlineMath>GF(5) = \mathbb{'{Z}'}_5</InlineMath>
          </li>
          <li>
            <InlineMath>GF(7) = \mathbb{'{Z}'}_7</InlineMath>
          </li>
          <li>
            <InlineMath>GF(8) = \mathbb{'{Z}'}_2[x]/(x^3 + x + 1)</InlineMath>
          </li>
          <li>
            <InlineMath>GF(9) = \mathbb{'{Z}'}_3[x]/(x^2 + 1)</InlineMath>
          </li>
        </ul>
        <p className="mt-2 text-dark-300">
          There is no field with 6 elements (6 is not a prime power).
        </p>
      </Example>

      <Theorem title="Multiplicative Group of a Finite Field" className="my-6">
        <p>
          The non-zero elements of <InlineMath>GF(q)</InlineMath> form a cyclic group of order{' '}
          <InlineMath>q - 1</InlineMath> under multiplication.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <InlineMath>f \equiv g \pmod{'{m}'}</InlineMath> means{' '}
              <InlineMath>m \mid (f - g)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <InlineMath>F[x]/(m(x))</InlineMath> has representatives of degree{' '}
              <InlineMath>{'<'} \deg m</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              If <InlineMath>p(x)</InlineMath> is <strong>irreducible</strong>, then{' '}
              <InlineMath>F[x]/(p(x))</InlineMath> is a <strong>field</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <InlineMath>GF(p^n) = \mathbb{'{Z}'}_p[x]/(p(x))</InlineMath> for any irreducible{' '}
              <InlineMath>p(x)</InlineMath> of degree <InlineMath>n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              A <strong>finite field</strong> exists iff the order is a prime power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The <strong>multiplicative group</strong> of <InlineMath>GF(q)</InlineMath> is cyclic
              of order <InlineMath>q - 1</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
