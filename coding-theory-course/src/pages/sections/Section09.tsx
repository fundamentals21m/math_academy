import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Primitive Polynomials</h2>

      <p>
        Primitive polynomials play a crucial role in the construction of finite fields and BCH codes.
        They provide a way to construct finite fields where the element <InlineMath math="\\alpha = X + \\langle f(X) \\rangle" />
        is automatically a primitive element.
      </p>

      <h3>Definition and Properties</h3>

      <Definition title="Primitive Polynomial">
        An irreducible polynomial <InlineMath math="f(X) \\in F_p[X]" /> of degree <InlineMath math="n" />,
        where <InlineMath math="F_p" /> is the field of <InlineMath math="p" /> elements, is called <strong>primitive</strong> if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath math="f(X)" /> divides <InlineMath math="X^{p^n - 1} - 1" /></li>
          <li><InlineMath math="f(X)" /> does not divide <InlineMath math="X^k - 1" /> for any <InlineMath math="k < p^n - 1" /></li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Terminology Note:</strong> This definition differs from the standard definition of primitive
        polynomials with integer coefficients (where <InlineMath math="\\gcd(a_0, a_1, \\ldots, a_n) = 1" />).
        In coding theory, "primitive" refers to the property above.
      </Callout>

      <Theorem
        title="Primitive Polynomials and Primitive Elements"
        proof={
          <>
            <p>
              Let <InlineMath math="\\deg f(X) = n" />. Then <InlineMath math="O(K) = p^n = m" /> (say)
              and <InlineMath math="O(\\alpha) = t \\leq m - 1" />. Therefore:
            </p>
            <MathBlock math="X^{m-1} - 1 + \\langle f(X) \\rangle = 0" />
            <p className="mt-2">
              i.e., <InlineMath math="f(X) \\mid X^{m-1} - 1" />.
            </p>
            <p className="mt-2">Observe that:</p>
            <MathBlock math="f(X) \\mid X^r - 1 \\iff O(\\alpha) \\mid r" />
            <p className="mt-2">
              Thus <InlineMath math="t = O(\\alpha)" /> is the smallest value of <InlineMath math="r" /> for
              which <InlineMath math="f(X) \\mid X^r - 1" />.
            </p>
            <p className="mt-2">
              This proves that <InlineMath math="\\alpha" /> is primitive iff the smallest value
              of <InlineMath math="r" /> for which <InlineMath math="f(X) \\mid X^r - 1" /> is <InlineMath math="m - 1" />,
              i.e., iff <InlineMath math="f(X)" /> is a primitive polynomial.
            </p>
          </>
        }
      >
        Given an irreducible polynomial <InlineMath math="f(X) \\in F_p[X]" />, the element
        <MathBlock math="\\alpha = X + \\langle f(X) \\rangle \\in F_p[X]/\\langle f(X) \\rangle" />
        is primitive if and only if <InlineMath math="f(X)" /> is a primitive polynomial.
      </Theorem>

      <h3>Primitive Polynomials over F<sub>3</sub></h3>

      <Example title="Finding Primitive Polynomials of Degree 2 over F_3">
        <p>
          Let <InlineMath math="F = F_3" /> be the field of 3 elements. For irreducible polynomials of degree 2,
          we need <InlineMath math="aX^2 + bX + 1" /> where <InlineMath math="a, b \\in F" /> and neither 1 nor -1 is a root.
        </p>
        <p className="mt-2">
          This requires <InlineMath math="a + b + 1 \\neq 0" /> and <InlineMath math="a - b + 1 \\neq 0" />.
        </p>
        <p className="mt-2">
          The possible values are: <InlineMath math="a = 1, b = 0" /> or <InlineMath math="a = -1, b = 1" /> or <InlineMath math="a = -1 = b" />.
        </p>
        <p className="mt-2">
          Thus all irreducible polynomials of degree 2 over <InlineMath math="F" /> are:
        </p>
        <MathBlock math="X^2 + 1, \\quad X^2 - X - 1, \\quad X^2 + X - 1" />
        <p className="mt-2">
          Now <InlineMath math="X^2 + 1" /> divides <InlineMath math="X^4 - 1" /> over <InlineMath math="F" />, so it is not primitive.
        </p>
        <p className="mt-2">
          For <InlineMath math="X^2 - X - 1" /> and <InlineMath math="X^2 + X - 1" />:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Neither divides <InlineMath math="X^3 + 1 = (X + 1)^3" /></li>
          <li>Neither divides <InlineMath math="X^4 - 1 = (X - 1)(X + 1)(X^2 + 1)" /></li>
          <li>Neither divides <InlineMath math="X^5 - 1" /> (verified by polynomial division)</li>
          <li>Neither divides <InlineMath math="X^6 - 1 = (X^3 - 1)(X^3 + 1) = (X - 1)^3(X + 1)^3" /></li>
          <li>Neither divides <InlineMath math="X^7 - 1" /></li>
        </ul>
        <p className="mt-2">
          Thus both <InlineMath math="X^2 + X - 1" /> and <InlineMath math="X^2 - X - 1" /> are primitive over <InlineMath math="F_3" />.
        </p>
      </Example>

      <h3>Primitive Polynomials over the Binary Field</h3>

      <Example title="Degree 1 Primitive Polynomial">
        <p>
          The polynomial <InlineMath math="X + 1" /> over <InlineMath math="\\mathbb{B}" /> is trivially the only primitive
          polynomial of degree 1.
        </p>
      </Example>

      <Example title="Degree 2 Primitive Polynomial">
        <p>
          Neither 0 nor 1 is a root of <InlineMath math="X^2 + X + 1" /> over <InlineMath math="\\mathbb{B}" />, so it is irreducible.
          Since <InlineMath math="2^2 - 1 = 3" /> is prime, every non-identity element in <InlineMath math="GF(4)^*" /> is primitive.
          Thus <InlineMath math="X^2 + X + 1" /> is the unique primitive polynomial of degree 2 over <InlineMath math="\\mathbb{B}" />.
        </p>
      </Example>

      <Example title="Degree 3 Primitive Polynomials">
        <p>
          For any irreducible polynomial <InlineMath math="f(X)" /> of degree 3 over <InlineMath math="\\mathbb{B}" />,
          the field <InlineMath math="K = \\mathbb{B}[X]/\\langle f(X) \\rangle" /> has order 8.
        </p>
        <p className="mt-2">
          The multiplicative group <InlineMath math="K^*" /> is of order 7 (a prime). Hence every non-zero,
          non-identity element is primitive, so every irreducible cubic is primitive.
        </p>
        <p className="mt-2">
          The only irreducible (and hence primitive) polynomials of degree 3 over <InlineMath math="\\mathbb{B}" /> are:
        </p>
        <MathBlock math="X^3 + X + 1 \\quad \\text{and} \\quad X^3 + X^2 + 1" />
      </Example>

      <Example title="Degree 4 Irreducible Polynomials">
        <p>
          The irreducible polynomials of degree 4 over <InlineMath math="\\mathbb{B}" /> are:
        </p>
        <MathBlock math="X^4 + X + 1, \\quad X^4 + X^3 + 1, \\quad X^4 + X^3 + X^2 + X + 1" />
        <p className="mt-2">
          To verify <InlineMath math="X^4 + X + 1" /> is irreducible: it has no roots in <InlineMath math="\\mathbb{B}" />,
          and if it factored into quadratics, the only possibility would be <InlineMath math="(X^2 + X + 1)^2 = X^4 + X^2 + 1 \\neq X^4 + X + 1" />.
        </p>
        <p className="mt-2">
          For <InlineMath math="\\alpha = X + \\langle X^4 + X + 1 \\rangle" />:
        </p>
        <MathBlock math="\\alpha^4 = \\alpha + 1 \\neq 1, \\quad \\alpha^5 = \\alpha^2 + \\alpha \\neq 1" />
        <p className="mt-2">
          Since <InlineMath math="O(\\alpha)" /> divides 15 and <InlineMath math="\\alpha^3 \\neq 1" />, <InlineMath math="\\alpha^5 \\neq 1" />,
          we have <InlineMath math="O(\\alpha) = 15" /> so <InlineMath math="\\alpha" /> is primitive.
        </p>
        <p className="mt-2">
          <strong>Note:</strong> For <InlineMath math="X^4 + X^3 + X^2 + X + 1" />,
          letting <InlineMath math="\\alpha = X + \\langle X^4 + X^3 + X^2 + X + 1 \\rangle" />:
        </p>
        <MathBlock math="\\alpha^4 = \\alpha^3 + \\alpha^2 + \\alpha + 1, \\quad \\alpha^5 = \\alpha^4 + \\alpha^3 + \\alpha^2 + \\alpha = 1" />
        <p className="mt-2">
          Thus <InlineMath math="\\alpha" /> has order 5, not 15. So <InlineMath math="X^4 + X^3 + X^2 + X + 1" /> is
          irreducible but <strong>not</strong> primitive.
        </p>
      </Example>

      <Example title="Degree 5 Primitive Polynomials">
        <p>
          Since <InlineMath math="2^5 - 1 = 31" /> is prime, every non-zero element in <InlineMath math="GF(32)^*" /> is primitive,
          so every irreducible polynomial of degree 5 over <InlineMath math="\\mathbb{B}" /> is primitive.
        </p>
        <p className="mt-2">First, we eliminate reducible polynomials:</p>
        <MathBlock math="(X^2 + X + 1)(X^3 + X + 1) = X^5 + X^4 + 1" />
        <MathBlock math="(X^2 + X + 1)(X^3 + X^2 + 1) = X^5 + X + 1" />
        <p className="mt-2">
          The primitive polynomials of degree 5 over <InlineMath math="\\mathbb{B}" /> are:
        </p>
        <MathBlock math="X^5 + X^2 + 1, \\quad X^5 + X^3 + 1, \\quad X^5 + X^4 + X^3 + X^2 + 1" />
        <MathBlock math="X^5 + X^4 + X^3 + X + 1, \\quad X^5 + X^4 + X^2 + X + 1, \\quad X^5 + X^3 + X^2 + X + 1" />
      </Example>

      <Example title="Degree 7 Primitive Polynomials">
        <p>
          Since <InlineMath math="2^7 - 1 = 127" /> is prime, every irreducible polynomial of degree 7
          over <InlineMath math="\\mathbb{B}" /> is primitive.
        </p>
        <p className="mt-2">
          We identify non-irreducible degree 7 polynomials by computing products:
        </p>
        <MathBlock math="(X^2 + X + 1)(X^5 + X^2 + 1) = X^7 + X^6 + X^5 + X^4 + X^3 + X + 1" />
        <MathBlock math="(X^3 + X + 1)(X^4 + X^3 + 1) = X^7 + X^6 + X^5 + X + 1" />
        <MathBlock math="(X^3 + X + 1)(X^4 + X + 1) = X^7 + X^5 + X^3 + X^2 + 1" />
        <p className="mt-2">Some primitive polynomials of degree 7:</p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><InlineMath math="X^7 + X^6 + 1" /></div>
            <div><InlineMath math="X^7 + X + 1" /></div>
            <div><InlineMath math="X^7 + X^4 + 1" /></div>
            <div><InlineMath math="X^7 + X^3 + 1" /></div>
            <div><InlineMath math="X^7 + X^6 + X^5 + X^2 + 1" /></div>
            <div><InlineMath math="X^7 + X^6 + X^4 + X + 1" /></div>
            <div><InlineMath math="X^7 + X^6 + X^4 + X^2 + 1" /></div>
            <div><InlineMath math="X^7 + X^6 + X^3 + X + 1" /></div>
            <div><InlineMath math="X^7 + X^5 + X^4 + X^3 + 1" /></div>
            <div><InlineMath math="X^7 + X^4 + X^3 + X^2 + 1" /></div>
          </div>
        </div>
      </Example>

      <h3>Summary Table</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Primitive Polynomials over GF(2)</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Degree</th>
              <th className="text-left py-2">Field Size</th>
              <th className="text-left py-2">Count</th>
              <th className="text-left py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">1</td>
              <td className="py-2">2</td>
              <td className="py-2">1</td>
              <td className="py-2"><InlineMath math="X + 1" /></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">2</td>
              <td className="py-2">4</td>
              <td className="py-2">1</td>
              <td className="py-2"><InlineMath math="X^2 + X + 1" /></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3</td>
              <td className="py-2">8</td>
              <td className="py-2">2</td>
              <td className="py-2"><InlineMath math="X^3 + X + 1" /></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">4</td>
              <td className="py-2">16</td>
              <td className="py-2">2</td>
              <td className="py-2"><InlineMath math="X^4 + X + 1" /></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">5</td>
              <td className="py-2">32</td>
              <td className="py-2">6</td>
              <td className="py-2"><InlineMath math="X^5 + X^2 + 1" /></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">6</td>
              <td className="py-2">64</td>
              <td className="py-2">6</td>
              <td className="py-2"><InlineMath math="X^6 + X + 1" /></td>
            </tr>
            <tr>
              <td className="py-2">7</td>
              <td className="py-2">128</td>
              <td className="py-2">18</td>
              <td className="py-2"><InlineMath math="X^7 + X + 1" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Splitting Fields</h3>

      <Definition title="Simple Extension">
        Let <InlineMath math="K" /> be a field, <InlineMath math="F" /> a subfield of <InlineMath math="K" />, and <InlineMath math="\\alpha \\in K" />.
        By <InlineMath math="F(\\alpha)" /> we denote the smallest subfield of <InlineMath math="K" /> which contains
        both <InlineMath math="F" /> and <InlineMath math="\\alpha" />. We call <InlineMath math="F(\\alpha)" /> a <strong>simple extension</strong>
        of <InlineMath math="F" />.
      </Definition>

      <Definition title="Splitting Field">
        Let <InlineMath math="F" /> be a field and <InlineMath math="f(X) \\in F[X]" />. An extension field <InlineMath math="K" /> of <InlineMath math="F" /> is
        called a <strong>splitting field</strong> of <InlineMath math="f(X)" /> if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath math="f(X)" /> factors as a product of linear factors over <InlineMath math="K" /></li>
          <li>If <InlineMath math="\\alpha_1, \\alpha_2, \\ldots, \\alpha_m" /> are the roots of <InlineMath math="f(X)" />,
            then <InlineMath math="K = F(\\alpha_1, \\alpha_2, \\ldots, \\alpha_m)" /></li>
        </ol>
      </Definition>

      <Theorem
        title="Existence of Root Extension"
        proof={
          <>
            <p>
              The polynomial <InlineMath math="f(X)" /> being irreducible, <InlineMath math="K = F[X]/\\langle f(X) \\rangle" /> is
              a field. The element <InlineMath math="\\alpha = X + \\langle f(X) \\rangle" /> of <InlineMath math="K" /> is then
              a root of <InlineMath math="f(X)" />.
            </p>
            <p className="mt-2">
              The map <InlineMath math="a \\mapsto a + \\langle f(X) \\rangle" /> for <InlineMath math="a \\in F" /> is
              a ring monomorphism <InlineMath math="F \\to K" />. Identifying <InlineMath math="a \\in F" /> with
              <InlineMath math="a + \\langle f(X) \\rangle \\in K" />, we can regard <InlineMath math="K" /> as an extension of <InlineMath math="F" />.
            </p>
          </>
        }
      >
        Let <InlineMath math="f(X)" /> be an irreducible polynomial over a field <InlineMath math="F" />. Then there exists
        an extension <InlineMath math="K" /> of <InlineMath math="F" /> in which <InlineMath math="f(X)" /> has a root.
      </Theorem>

      <Theorem
        title="Existence of Splitting Field"
        proof={
          <>
            <p>
              We prove by induction on <InlineMath math="\\deg f(X)" />. If <InlineMath math="\\deg f(X) = 1" />, then <InlineMath math="F" /> itself
              is a splitting field of <InlineMath math="f(X)" />.
            </p>
            <p className="mt-2">
              Suppose <InlineMath math="\\deg f(X) = n \\geq 2" />. By the previous theorem, there exists an extension
              of <InlineMath math="F" /> in which <InlineMath math="f(X)" /> has a root <InlineMath math="\\alpha_1" />. Let <InlineMath math="F_1 = F(\\alpha_1)" />.
            </p>
            <p className="mt-2">Then:</p>
            <MathBlock math="f(X) = (X - \\alpha_1)g(X)" />
            <p className="mt-2">
              where <InlineMath math="g(X) \\in F_1[X]" /> and <InlineMath math="\\deg g(X) = n - 1" />. By induction, <InlineMath math="g(X)" /> has
              a splitting field <InlineMath math="K" /> over <InlineMath math="F_1" />, i.e., <InlineMath math="g(X)" /> factors as linear factors over <InlineMath math="K" /> and
              <InlineMath math="K = F_1(\\alpha_2, \\ldots, \\alpha_n)" />.
            </p>
            <p className="mt-2">
              But then <InlineMath math="\\alpha_1, \\alpha_2, \\ldots, \\alpha_n" /> are roots of <InlineMath math="f(X)" />,
              <InlineMath math="K = F(\\alpha_1, \\ldots, \\alpha_n)" />, and <InlineMath math="f(X)" /> factors as linear factors over <InlineMath math="K" />.
              Hence <InlineMath math="K" /> is a splitting field of <InlineMath math="f(X)" />.
            </p>
          </>
        }
      >
        Let <InlineMath math="F" /> be a field and <InlineMath math="f(X) \\in F[X]" />. Then there exists a splitting field
        of <InlineMath math="f(X)" /> over <InlineMath math="F" />.
      </Theorem>

      <Callout type="success">
        <strong>Key Insight:</strong> Primitive polynomials are essential for BCH code construction because
        they allow us to work with a primitive element <InlineMath math="\\alpha" /> whose powers
        generate all non-zero elements of the finite field, making the definition of BCH codes straightforward.
      </Callout>
    </LessonLayout>
  );
}
