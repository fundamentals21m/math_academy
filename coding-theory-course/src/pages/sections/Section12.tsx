import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Dual Code of a Linear Code</h2>

      <p>
        The dual code of a linear code is a fundamental concept that provides deep insights into
        the structure of codes. It is defined using the orthogonality relation between vectors.
      </p>

      <h3>Inner Products and Orthogonality</h3>

      <Definition title="Intersection and Scalar Product">
        Let <InlineMath math="\\mathbf{x} = (x_1 \\, x_2 \\, \\cdots \\, x_n)" /> and
        <InlineMath math="\\mathbf{y} = (y_1 \\, y_2 \\, \\cdots \\, y_n)" /> be two vectors of length <InlineMath math="n" /> over
        a field <InlineMath math="F" />. Then:
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>The <strong>intersection</strong> (Hadamard product) is:
            <MathBlock math="\\mathbf{x} * \\mathbf{y} = (x_1 y_1 \\, x_2 y_2 \\, \\cdots \\, x_n y_n)" />
          </li>
          <li>The <strong>scalar product</strong> (inner product) is:
            <MathBlock math="\\mathbf{x} \\cdot \\mathbf{y} = x_1 y_1 + x_2 y_2 + \\cdots + x_n y_n \\in F" />
          </li>
        </ul>
      </Definition>

      <p>Note that:</p>
      <MathBlock math="\\mathbf{x} \\cdot \\mathbf{y} = \\mathbf{x}\\mathbf{y}^t = \\mathbf{y} \\cdot \\mathbf{x} = \\mathbf{y}\\mathbf{x}^t" />

      <Example title="Binary Vector Products">
        <p>
          Let <InlineMath math="F = \\mathbb{B}" /> and:
        </p>
        <MathBlock math="\\mathbf{x} = (1 \\, 1 \\, 0 \\, 1), \\quad \\mathbf{y} = (1 \\, 1 \\, 1 \\, 1)" />
        <p className="mt-2">Then:</p>
        <MathBlock math="\\mathbf{x} * \\mathbf{y} = (1 \\, 1 \\, 0 \\, 1)" />
        <MathBlock math="\\mathbf{x} \\cdot \\mathbf{y} = 1 + 1 + 0 + 1 = 1" />
        <p className="mt-2">For another example:</p>
        <MathBlock math="\\mathbf{z} = (1 \\, 0 \\, 1 \\, 0 \\, 1 \\, 1), \\quad \\mathbf{t} = (1 \\, 1 \\, 0 \\, 1 \\, 0 \\, 1)" />
        <MathBlock math="\\mathbf{z} * \\mathbf{t} = (1 \\, 0 \\, 0 \\, 0 \\, 0 \\, 1)" />
        <MathBlock math="\\mathbf{z} \\cdot \\mathbf{t} = 1 + 0 + 0 + 0 + 0 + 1 = 0" />
      </Example>

      <Definition title="Orthogonal Vectors">
        Two vectors <InlineMath math="\\mathbf{x}" /> and <InlineMath math="\\mathbf{y}" /> of the same length <InlineMath math="n" /> over
        <InlineMath math="F" /> are called <strong>orthogonal</strong> if <InlineMath math="\\mathbf{x} \\cdot \\mathbf{y} = 0" />,
        or equivalently:
        <MathBlock math="\\mathbf{x}\\mathbf{y}^t = \\mathbf{y} \\cdot \\mathbf{x} = \\mathbf{y}\\mathbf{x}^t = 0" />
      </Definition>

      <Callout type="info">
        <strong>Observation:</strong> For binary vectors <InlineMath math="\\mathbf{x}" /> and <InlineMath math="\\mathbf{y}" />:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath math="\\mathbf{x} \\cdot \\mathbf{y} = 0" /> iff <InlineMath math="\\text{wt}(\\mathbf{x} * \\mathbf{y})" /> is even</li>
          <li><InlineMath math="\\mathbf{x} \\cdot \\mathbf{y} = 1" /> iff <InlineMath math="\\text{wt}(\\mathbf{x} * \\mathbf{y})" /> is odd</li>
        </ul>
      </Callout>

      <h3>The Dual Code</h3>

      <Definition title="Dual Code (Orthogonal Code)">
        If <InlineMath math="\\mathcal{C}" /> is an <InlineMath math="[n, k, d]" /> linear code over <InlineMath math="F" />,
        its <strong>dual code</strong> or <strong>orthogonal code</strong> <InlineMath math="\\mathcal{C}^\\perp" /> is the
        set of all vectors of length <InlineMath math="n" /> that are orthogonal to all code words of <InlineMath math="\\mathcal{C}" />:
        <MathBlock math="\\mathcal{C}^\\perp = \\{\\mathbf{u} \\in V(n, q) \\mid \\mathbf{u} \\cdot \\mathbf{v} = 0 \\,\\, \\forall \\mathbf{v} \\in \\mathcal{C}\\}" />
      </Definition>

      <Example title="Dual of a Simple Code">
        <p>
          Consider the linear code <InlineMath math="\\mathcal{C}" /> with generator matrix:
        </p>
        <MathBlock math="\\mathbf{G} = \\begin{pmatrix} 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & 1 \\\\ 1 & 0 & 1 & 0 \\end{pmatrix}" />
        <p className="mt-2">
          Let <InlineMath math="(x_1 \\, x_2 \\, x_3 \\, x_4)" /> be orthogonal to all code words. In particular,
          it must be orthogonal to the rows of <InlineMath math="\\mathbf{G}" />:
        </p>
        <MathBlock math="x_1 + x_2 = 0, \\quad x_2 + x_3 + x_4 = 0, \\quad x_1 + x_3 = 0" />
        <p className="mt-2">These relations give <InlineMath math="x_1 = x_2 = x_3" /> and <InlineMath math="x_4 = 0" />.</p>
        <p className="mt-2">Therefore:</p>
        <MathBlock math="\\mathcal{C}^\\perp = \\{0000, 1110\\}" />
        <p className="mt-2">
          Note that <InlineMath math="\\mathcal{C}^\\perp" /> is also linear and
          <InlineMath math="\\dim \\mathcal{C}^\\perp + \\dim \\mathcal{C} = 1 + 3 = 4 = n" />.
        </p>
      </Example>

      <Example title="Dual of the (4,7) Hamming Code">
        <p>
          The (4, 7) binary Hamming code <InlineMath math="\\mathcal{C}" /> is a [7, 4, 3] linear code with basis:
        </p>
        <MathBlock math="1110100, \\quad 0111010, \\quad 0011101, \\quad 0001011" />
        <p className="mt-2">
          A vector <InlineMath math="(x_1 \\, x_2 \\, \\cdots \\, x_7)" /> is orthogonal to <InlineMath math="\\mathcal{C}" /> iff it
          is orthogonal to the basis vectors:
        </p>
        <MathBlock math="x_1 + x_2 + x_3 + x_5 = 0" />
        <MathBlock math="x_2 + x_3 + x_4 + x_6 = 0" />
        <MathBlock math="x_3 + x_4 + x_5 + x_7 = 0" />
        <MathBlock math="x_4 + x_6 + x_7 = 0" />
        <p className="mt-2">Solving these equations in matrix form:</p>
        <MathBlock math="\\begin{pmatrix} 1 & 0 & 1 & 1 & 0 & 0 & 0 \\\\ 1 & 1 & 1 & 0 & 1 & 0 & 0 \\\\ 1 & 1 & 0 & 0 & 0 & 1 & 0 \\\\ 0 & 1 & 1 & 0 & 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_7 \\end{pmatrix} = 0" />
        <p className="mt-2">The generator matrix of <InlineMath math="\\mathcal{C}^\\perp" /> is:</p>
        <MathBlock math="\\mathbf{G} = \\begin{pmatrix} 1 & 0 & 0 & 1 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & 1 & 1 \\\\ 0 & 0 & 1 & 1 & 1 & 0 & 1 \\end{pmatrix}" />
        <p className="mt-2">
          So <InlineMath math="\\mathcal{C}^\\perp" /> is a [7, 3, -] linear code.
        </p>
      </Example>

      <h3>Main Theorem on Dual Codes</h3>

      <Theorem
        title="Properties of Dual Codes"
        proof={
          <>
            <p>
              <strong>Part 1: <InlineMath math="\\mathcal{C}^\\perp" /> is linear.</strong>
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\mathbf{u}, \\mathbf{w} \\in \\mathcal{C}^\\perp" /> and
              <InlineMath math="\\alpha, \\beta \\in GF(q) = F" />. For any <InlineMath math="\\mathbf{v} \\in \\mathcal{C}" />:
            </p>
            <MathBlock math="(\\alpha\\mathbf{u} + \\beta\\mathbf{w})\\mathbf{v}^t = \\alpha(\\mathbf{u}\\mathbf{v}^t) + \\beta(\\mathbf{w}\\mathbf{v}^t) = 0" />
            <p className="mt-2">
              Therefore <InlineMath math="\\mathcal{C}^\\perp" /> is a linear code.
            </p>

            <p className="mt-4">
              <strong>Part 2: <InlineMath math="\\mathbf{G}" /> is a parity check matrix for <InlineMath math="\\mathcal{C}^\\perp" />.</strong>
            </p>
            <p className="mt-2">
              Suppose <InlineMath math="\\mathbf{G}" /> is a <InlineMath math="k \\times n" /> matrix. The map
              <InlineMath math="\\phi: V(k, q) \\to \\mathcal{C}" /> defined by
              <InlineMath math="\\phi(\\mathbf{a}) = \\mathbf{aG}" /> is a vector space isomorphism. Hence
              <InlineMath math="k = \\dim \\mathcal{C}" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\mathbf{u} \\in \\mathcal{C}^\\perp" />. Then
              <InlineMath math="\\mathbf{v}\\mathbf{u}^t = 0" /> for all <InlineMath math="\\mathbf{v} \\in \\mathcal{C}" />,
              i.e., <InlineMath math="\\mathbf{a}(\\mathbf{G}\\mathbf{u}^t) = 0" /> for all <InlineMath math="\\mathbf{a} \\in V(k, q)" />.
              This implies <InlineMath math="\\mathbf{G}\\mathbf{u}^t = 0" />.
            </p>
            <p className="mt-2">
              Conversely, if <InlineMath math="\\mathbf{G}\\mathbf{u}^t = 0" />, then
              <InlineMath math="(\\mathbf{aG})\\mathbf{u}^t = 0" /> for all <InlineMath math="\\mathbf{a}" />, so
              <InlineMath math="\\mathbf{u} \\in \\mathcal{C}^\\perp" />.
            </p>
            <p className="mt-2">Hence:</p>
            <MathBlock math="\\mathcal{C}^\\perp = \\{\\mathbf{u} \\in V(n, q) \\mid \\mathbf{G}\\mathbf{u}^t = 0\\}" />

            <p className="mt-4">
              <strong>Part 3: Dimension of <InlineMath math="\\mathcal{C}^\\perp" />.</strong>
            </p>
            <p className="mt-2">
              Define <InlineMath math="\\theta: V(n, q) \\to V(n, q)" /> by <InlineMath math="\\theta(\\mathbf{x}) = \\mathbf{G}\\mathbf{x}^t" />.
              Then <InlineMath math="\\theta" /> is a linear transformation with:
            </p>
            <MathBlock math="\\text{rank}(\\theta) + \\text{nullity}(\\theta) = n" />
            <p className="mt-2">
              Since <InlineMath math="\\text{rank}(\\theta) = \\text{rank}(\\mathbf{G}) = k" /> and
              <InlineMath math="\\ker \\theta = \\mathcal{C}^\\perp" />:
            </p>
            <MathBlock math="\\dim \\mathcal{C}^\\perp = n - k" />

            <p className="mt-4">
              <strong>Part 4: <InlineMath math="\\mathbf{H}" /> is a generator matrix for <InlineMath math="\\mathcal{C}^\\perp" />.</strong>
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\mathcal{C}'" /> be the code generated by <InlineMath math="\\mathbf{H}" />. Every code word
              in <InlineMath math="\\mathcal{C}" /> is orthogonal to every row of <InlineMath math="\\mathbf{H}" /> and hence to
              every code word in <InlineMath math="\\mathcal{C}'" />.
            </p>
            <p className="mt-2">
              Therefore <InlineMath math="\\mathcal{C}' \\subseteq \\mathcal{C}^\\perp" />. Since <InlineMath math="\\mathbf{H}" /> has
              rank <InlineMath math="n - k" />, <InlineMath math="\\dim \\mathcal{C}' = n - k = \\dim \\mathcal{C}^\\perp" />.
            </p>
            <p className="mt-2">
              Hence <InlineMath math="\\mathcal{C}' = \\mathcal{C}^\\perp" />.
            </p>
          </>
        }
      >
        Let <InlineMath math="\\mathcal{C}" /> be a linear <InlineMath math="[n, k, d]" /> code with generator
        matrix <InlineMath math="\\mathbf{G}" /> and parity check matrix <InlineMath math="\\mathbf{H}" />. Then
        <InlineMath math="\\mathcal{C}^\\perp" /> is a linear <InlineMath math="[n, n-k, -]" /> code with generator
        matrix <InlineMath math="\\mathbf{H}" /> and parity check matrix <InlineMath math="\\mathbf{G}" />.
      </Theorem>

      <Callout type="success">
        <strong>Key Result:</strong> <InlineMath math="(\\mathcal{C}^\\perp)^\\perp = \\mathcal{C}" />. The dual of the
        dual is the original code.
      </Callout>

      <Example title="Dual of a Polynomial Code">
        <p>
          Consider the (4, 7) polynomial code <InlineMath math="\\mathcal{C}" /> generated by <InlineMath math="1 + X + X^3" />.
          Its generator matrix is:
        </p>
        <MathBlock math="\\mathbf{G} = \\begin{pmatrix} 1 & 1 & 0 & 1 & 0 & 0 & 0 \\\\ 0 & 1 & 1 & 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 & 1 & 0 & 1 \\end{pmatrix}" />
        <p className="mt-2">
          Solving <InlineMath math="\\mathbf{G}\\mathbf{x}^t = 0" />:
        </p>
        <MathBlock math="x_4 = x_1 + x_3, \\quad x_5 = x_2 + x_3, \\quad x_6 = x_1 + x_2 + x_3, \\quad x_7 = x_1 + x_3" />
        <p className="mt-2">The generator matrix of <InlineMath math="\\mathcal{C}^\\perp" /> is:</p>
        <MathBlock math="\\mathbf{H} = \\begin{pmatrix} 1 & 0 & 0 & 1 & 0 & 1 & 1 \\\\ 0 & 1 & 0 & 1 & 1 & 1 & 0 \\\\ 0 & 0 & 1 & 1 & 1 & 0 & 1 \\end{pmatrix}" />
        <p className="mt-2">
          <strong>Important observation:</strong> If we check whether <InlineMath math="\\mathcal{C}^\\perp" /> is a
          polynomial code generated by some <InlineMath math="f(X) = 1 + bX + cX^2 + dX^3 + eX^4" />, we find that
          no such polynomial exists. Thus, <strong>the dual of a polynomial code need not be a polynomial code</strong>.
        </p>
      </Example>

      <h3>Self-Dual Codes</h3>

      <Definition title="Self-Dual Code">
        A linear code <InlineMath math="\\mathcal{C}" /> over <InlineMath math="F" /> is called <strong>self-dual</strong>
        if <InlineMath math="\\mathcal{C}^\\perp = \\mathcal{C}" />.
      </Definition>

      <Callout type="info">
        <strong>Properties of Self-Dual Codes:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The length of a self-dual code is always even (since <InlineMath math="k = n - k" /> implies <InlineMath math="n = 2k" />)</li>
          <li>The weight of every code word of a binary self-dual code is even</li>
        </ul>
      </Callout>

      <Example title="Self-Dual Code of Length 4">
        <p>
          Let <InlineMath math="\\mathcal{C}" /> be a binary self-dual code of length 4. Then its dimension
          is <InlineMath math="k = 2" />.
        </p>
        <p className="mt-2">
          Consider vectors <InlineMath math="(1 \\, 1 \\, 0 \\, 0)" /> and <InlineMath math="(0 \\, 0 \\, 1 \\, 1)" />. These are
          linearly independent and each is self-orthogonal (inner product with itself is 0 over <InlineMath math="\\mathbb{B}" />).
          Also, they are orthogonal to each other.
        </p>
        <p className="mt-2">
          Thus, the code <InlineMath math="\\mathcal{C} = \\{0000, 1100, 0011, 1111\\}" /> is self-dual.
        </p>
        <p className="mt-2">
          <strong>Note:</strong> The vectors <InlineMath math="(1 \\, 1 \\, 0 \\, 0)" /> and <InlineMath math="(1 \\, 0 \\, 1 \\, 0)" /> are
          linearly independent but <InlineMath math="(1 \\, 1 \\, 0 \\, 0) \\cdot (1 \\, 0 \\, 1 \\, 0) = 1 \\neq 0" />,
          so they do not generate a self-dual code.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Remark on Dual Codes:</strong> The dual of a code <InlineMath math="\\mathcal{C}" /> that is not
        necessarily linear can still be defined as
        <InlineMath math="\\mathcal{C}^\\perp = \\{\\mathbf{u} \\in V(n, q) \\mid \\mathbf{u} \\cdot \\mathbf{v} = 0 \\,\\, \\forall \\mathbf{v} \\in \\mathcal{C}\\}" />.
        However, in this case <InlineMath math="(\\mathcal{C}^\\perp)^\\perp" /> may not equal <InlineMath math="\\mathcal{C}" />.
      </Callout>
    </LessonLayout>
  );
}
