import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Chapter 2: Polynomial Codes</h2>
      <h3>2.1 Definition of Vector Space and Polynomial Ring</h3>

      <p>
        We now introduce another important algebraic technique for studying codes: <strong>polynomial
        multiplication</strong>. The codes obtained through this method are called polynomial codes,
        and many of the most important codes studied today fall into this category.
      </p>

      <h3>Vector Spaces</h3>

      <Definition title="Vector Space">
        <p>
          Let <InlineMath>F</InlineMath> be a field. A non-empty set <InlineMath>V</InlineMath> is
          called a <strong>vector space over <InlineMath>F</InlineMath></strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            There is defined an addition in <InlineMath>V</InlineMath> with respect to
            which <InlineMath>V</InlineMath> is an Abelian group.
          </li>
          <li>
            For every <InlineMath>{`a \\in F`}</InlineMath> and <InlineMath>{`v \\in V`}</InlineMath>,
            there is defined a unique element <InlineMath>{`av \\in V`}</InlineMath> (scalar multiplication)
            satisfying:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><InlineMath>{`a(v_1 + v_2) = av_1 + av_2`}</InlineMath></li>
              <li><InlineMath>{`(a + b)v = av + bv`}</InlineMath></li>
              <li><InlineMath>{`(ab)v = a(bv)`}</InlineMath></li>
              <li><InlineMath>{`1 \\cdot v = v`}</InlineMath> (where 1 is the identity of <InlineMath>F</InlineMath>)</li>
            </ul>
          </li>
        </ol>
      </Definition>

      <Definition title="Linear Independence and Basis">
        <p>
          A set <InlineMath>{`\\{v_1, v_2, \\ldots, v_n\\}`}</InlineMath> of elements of <InlineMath>V</InlineMath> is
          called <strong>linearly independent</strong> if whenever:
        </p>
        <MathBlock>{`a_1v_1 + a_2v_2 + \\cdots + a_nv_n = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`a_1, a_2, \\ldots, a_n \\in F`}</InlineMath>, then <InlineMath>{`a_1 = a_2 = \\cdots = a_n = 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          If the elements <InlineMath>{`v_1, \\ldots, v_n`}</InlineMath> are linearly independent over <InlineMath>F</InlineMath> and
          every element of <InlineMath>V</InlineMath> can be expressed as a linear combination <InlineMath>{`a_1v_1 + \\cdots + a_nv_n`}</InlineMath>,
          then <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> is called a <strong>basis</strong> of <InlineMath>V</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>dimension</strong> of <InlineMath>V</InlineMath> is <InlineMath>n</InlineMath>,
          written <InlineMath>{`\\dim V = n`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Isomorphism of Vector Spaces">
        <p>
          Let <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath> be vector spaces over the same
          field <InlineMath>F</InlineMath>. A map <InlineMath>{`f: V \\to W`}</InlineMath> is called
          an <strong>isomorphism</strong> if <InlineMath>f</InlineMath> is one-to-one and onto, and for
          all <InlineMath>{`v, v_1, v_2 \\in V`}</InlineMath> and <InlineMath>{`a \\in F`}</InlineMath>:
        </p>
        <MathBlock>{`f(v_1 + v_2) = f(v_1) + f(v_2) \\quad \\text{and} \\quad f(av) = af(v)`}</MathBlock>
      </Definition>

      <Theorem
        title="Isomorphism of Equal-Dimensional Vector Spaces"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\{x_1, \\ldots, x_n\\}`}</InlineMath> be a basis of <InlineMath>V</InlineMath> and <InlineMath>{`\\{y_1, \\ldots, y_n\\}`}</InlineMath> be
              a basis of <InlineMath>W</InlineMath>.
            </p>
            <p className="mt-2">
              Since every element of <InlineMath>V</InlineMath> can be uniquely written
              as <InlineMath>{`a_1x_1 + \\cdots + a_nx_n`}</InlineMath>, define <InlineMath>{`\\theta: V \\to W`}</InlineMath> by:
            </p>
            <MathBlock>{`\\theta(a_1x_1 + \\cdots + a_nx_n) = a_1y_1 + \\cdots + a_ny_n`}</MathBlock>
            <p className="mt-2">
              This map is well-defined and is straightforward to verify as a homomorphism.
            </p>
            <p className="mt-2">
              If <InlineMath>{`\\theta(a_1x_1 + \\cdots + a_nx_n) = 0`}</InlineMath>, then <InlineMath>{`a_1y_1 + \\cdots + a_ny_n = 0`}</InlineMath>,
              which implies <InlineMath>{`a_1 = \\cdots = a_n = 0`}</InlineMath> since <InlineMath>{`y_1, \\ldots, y_n`}</InlineMath> are
              linearly independent. Thus <InlineMath>{`\\theta`}</InlineMath> is one-to-one.
            </p>
            <p className="mt-2">
              Every element of <InlineMath>W</InlineMath> is of the form <InlineMath>{`a_1y_1 + \\cdots + a_ny_n = \\theta(a_1x_1 + \\cdots + a_nx_n)`}</InlineMath>,
              so <InlineMath>{`\\theta`}</InlineMath> is onto.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath> are vector spaces of equal finite
          dimension over the same field <InlineMath>F</InlineMath>, then <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath> are
          isomorphic.
        </p>
      </Theorem>

      <h3>Polynomial Rings</h3>

      <Definition title="Polynomial Ring">
        <p>
          Let <InlineMath>F</InlineMath> be a field and <InlineMath>X</InlineMath> be a variable.
          Let <InlineMath>{`F[X]`}</InlineMath> denote the set of all polynomials in <InlineMath>X</InlineMath> over <InlineMath>F</InlineMath>:
        </p>
        <MathBlock>{`F[X] = \\{a_0 + a_1X + \\cdots + a_nX^n : a_i \\in F, n \\geq 0\\}`}</MathBlock>
        <p className="mt-2">For polynomials:</p>
        <MathBlock>{`a(X) = a_0 + a_1X + \\cdots + a_mX^m`}</MathBlock>
        <MathBlock>{`b(X) = b_0 + b_1X + \\cdots + b_nX^n`}</MathBlock>
        <p className="mt-2">Addition is defined as:</p>
        <MathBlock>{`a(X) + b(X) = c_0 + c_1X + c_2X^2 + \\cdots \\quad \\text{where } c_i = a_i + b_i`}</MathBlock>
        <p className="mt-2">Multiplication is defined as:</p>
        <MathBlock>{`a(X)b(X) = d_0 + d_1X + \\cdots + d_{m+n}X^{m+n}`}</MathBlock>
        <p className="mt-2">where:</p>
        <MathBlock>{`d_j = a_0b_j + a_1b_{j-1} + \\cdots + a_jb_0 = \\sum_{i=0}^{j} a_ib_{j-i}`}</MathBlock>
        <p className="mt-2">(with <InlineMath>{`a_i = 0`}</InlineMath> for <InlineMath>{`i > m`}</InlineMath> and <InlineMath>{`b_i = 0`}</InlineMath> for <InlineMath>{`i > n`}</InlineMath>)</p>
      </Definition>

      <Definition title="Degree of a Polynomial">
        <p>
          For a polynomial <InlineMath>{`a(X) = a_0 + a_1X + \\cdots + a_mX^m`}</InlineMath> with <InlineMath>{`a_m \\neq 0`}</InlineMath>,
          the <strong>degree</strong> of <InlineMath>{`a(X)`}</InlineMath> is <InlineMath>m</InlineMath>,
          written <InlineMath>{`\\deg a(X) = m`}</InlineMath>.
        </p>
        <p className="mt-2">
          A key property: for non-zero polynomials <InlineMath>{`a(X), b(X) \\in F[X]`}</InlineMath>:
        </p>
        <MathBlock>{`\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)`}</MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Integral Domain:</strong> A commutative ring <InlineMath>R</InlineMath> in which <InlineMath>{`ab = 0`}</InlineMath> implies <InlineMath>{`a = 0`}</InlineMath> or <InlineMath>{`b = 0`}</InlineMath> is
        called an <strong>integral domain</strong>. The polynomial ring <InlineMath>{`F[X]`}</InlineMath> over
        a field <InlineMath>F</InlineMath> is always an integral domain.
      </Callout>

      <h3>Correspondence Between Polynomials and Words</h3>

      <p>
        Let <InlineMath>n</InlineMath> be a positive integer. With a polynomial of degree at
        most <InlineMath>{`n - 1`}</InlineMath>:
      </p>
      <MathBlock>{`a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</MathBlock>
      <p>we can associate an ordered <InlineMath>n</InlineMath>-tuple (word):</p>
      <MathBlock>{`a = (a_0, a_1, \\ldots, a_{n-1})`}</MathBlock>
      <p>
        and conversely, with every word <InlineMath>{`a = (a_0, a_1, \\ldots, a_{n-1})`}</InlineMath> we
        can associate a polynomial of degree at most <InlineMath>{`n - 1`}</InlineMath>.
      </p>

      <Definition title="Space of Bounded-Degree Polynomials">
        <p>
          Let <InlineMath>{`\\mathcal{P}_n(X)`}</InlineMath> denote the set of all polynomials
          in <InlineMath>{`F[X]`}</InlineMath> of degree at most <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">
          With addition and scalar multiplication, <InlineMath>{`\\mathcal{P}_n(X)`}</InlineMath> is a
          vector space over <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2">
          The elements <InlineMath>{`1, X, X^2, \\ldots, X^n`}</InlineMath> form a basis,
          so <InlineMath>{`\\dim \\mathcal{P}_n(X) = n + 1`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Isomorphism Between Polynomials and Words"
        proof={
          <>
            <p>
              Both <InlineMath>{`\\mathcal{P}_{n-1}(X)`}</InlineMath> and <InlineMath>{`F^{(n)}`}</InlineMath> are
              vector spaces of dimension <InlineMath>n</InlineMath> over <InlineMath>F</InlineMath>.
            </p>
            <p className="mt-2">
              By the previous theorem, they are isomorphic.
            </p>
            <p className="mt-2">
              The explicit isomorphism maps <InlineMath>{`a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</InlineMath> to
              the word <InlineMath>{`(a_0, a_1, \\ldots, a_{n-1})`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The vector spaces <InlineMath>{`\\mathcal{P}_{n-1}(X)`}</InlineMath> (polynomials of degree
          at most <InlineMath>{`n - 1`}</InlineMath>) and <InlineMath>{`F^{(n)}`}</InlineMath> (words of
          length <InlineMath>n</InlineMath>) are isomorphic, with the element:
        </p>
        <MathBlock>{`a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</MathBlock>
        <p>corresponding to:</p>
        <MathBlock>{`a = (a_0, a_1, \\ldots, a_{n-1})`}</MathBlock>
      </Theorem>

      <Callout type="info">
        <strong>Notation Convention:</strong> In view of the isomorphism between polynomials and
        words, we will use:
        <MathBlock>{`a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}`}</MathBlock>
        and
        <MathBlock>{`a = (a_0, a_1, \\ldots, a_{n-1})`}</MathBlock>
        <p className="mt-2">interchangeably throughout this chapter.</p>
      </Callout>

      <Example title="Polynomial-Word Correspondence">
        <p>Over the binary field <InlineMath>{`\\mathbb{B}`}</InlineMath>:</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-dark-800/50 p-3 rounded-lg">
            <p className="text-primary-400 font-semibold mb-2">Polynomial</p>
            <p><InlineMath>{`1 + X + X^3`}</InlineMath></p>
            <p><InlineMath>{`X^2 + X^4`}</InlineMath></p>
            <p><InlineMath>{`1 + X^2 + X^5`}</InlineMath></p>
          </div>
          <div className="bg-dark-800/50 p-3 rounded-lg">
            <p className="text-primary-400 font-semibold mb-2">Word (length 6)</p>
            <p><InlineMath>{`(1, 1, 0, 1, 0, 0)`}</InlineMath></p>
            <p><InlineMath>{`(0, 0, 1, 0, 1, 0)`}</InlineMath></p>
            <p><InlineMath>{`(1, 0, 1, 0, 0, 1)`}</InlineMath></p>
          </div>
        </div>
      </Example>

      <h3>Properties of the Binary Polynomial Ring</h3>

      <p>
        Working in the binary polynomial ring <InlineMath>{`\\mathbb{B}[X]`}</InlineMath> has
        special properties due to the characteristic of the field.
      </p>

      <Callout type="warning">
        <strong>Characteristic 2 Property:</strong> In <InlineMath>{`\\mathbb{B}[X]`}</InlineMath>,
        since <InlineMath>{`1 + 1 = 0`}</InlineMath> in <InlineMath>{`\\mathbb{B}`}</InlineMath>:
        <MathBlock>{`a(X) + a(X) = 0 \\quad \\text{for all } a(X) \\in \\mathbb{B}[X]`}</MathBlock>
        <p className="mt-2">
          This means every polynomial is its own additive inverse: <InlineMath>{`-a(X) = a(X)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="success">
        <strong>Section Summary:</strong> Vector spaces provide the algebraic framework for studying
        codes as subspaces. The polynomial ring <InlineMath>{`F[X]`}</InlineMath> and its subspace of
        bounded-degree polynomials is isomorphic to the space of words. This correspondence allows
        us to represent code words as polynomials and use polynomial operations for encoding.
        In the next section, we will use polynomial multiplication to define polynomial codes.
      </Callout>
    </LessonLayout>
  );
}
