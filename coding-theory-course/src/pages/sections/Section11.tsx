import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Generator and Parity Check Matrices</h2>

      <p>
        Linear codes generalize the concept of group codes to codes over any finite field. In this section,
        we study linear codes as vector subspaces and develop their matrix representations.
      </p>

      <h3>Linear Codes as Vector Spaces</h3>

      <p>
        Let <InlineMath math="F = GF(q)" />, where <InlineMath math="q" /> is a prime power, be a field of <InlineMath math="q" /> elements.
        Let <InlineMath math="V(n, q)" /> denote the set of all vectors or sequences of length <InlineMath math="n" /> over <InlineMath math="F" />.
        Then <InlineMath math="V(n, q)" /> is a vector space of dimension <InlineMath math="n" /> over <InlineMath math="F" />.
      </p>

      <Definition title="Linear Code">
        A subspace <InlineMath math="\\mathcal{C}" /> of <InlineMath math="V(n, q)" /> is called a <strong>linear code</strong>
        of length <InlineMath math="n" /> over <InlineMath math="F" />.
      </Definition>

      <Callout type="info">
        A vector space is first of all an Abelian group with respect to addition. Therefore, a linear code
        is always a group code.
      </Callout>

      <Theorem
        title="Minimum Distance of Linear Codes"
        proof={
          <>
            <p>
              Since <InlineMath math="\\mathcal{C}" /> is a group code, for any two code words <InlineMath math="u, v \\in \\mathcal{C}" />,
              we have <InlineMath math="u - v \\in \\mathcal{C}" />.
            </p>
            <p className="mt-2">
              The Hamming distance <InlineMath math="d(u, v)" /> equals the number of positions where <InlineMath math="u" /> and
              <InlineMath math="v" /> differ, which equals <InlineMath math="\\text{wt}(u - v)" />.
            </p>
            <p className="mt-2">
              Therefore:
            </p>
            <MathBlock math="d = \\min_{u \\neq v} d(u, v) = \\min_{u \\neq v} \\text{wt}(u - v) = \\min_{c \\neq 0} \\text{wt}(c)" />
          </>
        }
      >
        The minimum distance <InlineMath math="d" /> of a linear code <InlineMath math="\\mathcal{C}" /> equals the minimum
        among the weights of non-zero code words.
      </Theorem>

      <h3>Generator Matrices</h3>

      <p>
        Let <InlineMath math="\\mathcal{C}" /> be a linear code of length <InlineMath math="n" /> over <InlineMath math="F" />.
        Let <InlineMath math="k \\leq n" /> be the dimension of <InlineMath math="\\mathcal{C}" /> over <InlineMath math="F" /> and
        choose a basis <InlineMath math="X^{(1)}, X^{(2)}, \\ldots, X^{(k)}" /> of <InlineMath math="\\mathcal{C}" /> over <InlineMath math="F" />.
      </p>

      <p>
        Then any element of <InlineMath math="\\mathcal{C}" /> is of the form:
      </p>
      <MathBlock math="a_1 X^{(1)} + a_2 X^{(2)} + \\cdots + a_k X^{(k)} = (a_1 \\, a_2 \\, \\cdots \\, a_k) \\mathbf{G}" />
      <p>where:</p>
      <MathBlock math="\\mathbf{G} = \\begin{pmatrix} X^{(1)} \\\\ X^{(2)} \\\\ \\vdots \\\\ X^{(k)} \\end{pmatrix}" />

      <Definition title="Generator Matrix">
        Let <InlineMath math="\\mathcal{C}" /> be an <InlineMath math="(m, n)" />-code. If there exists an <InlineMath math="m \\times n" /> matrix
        <InlineMath math="\\mathbf{G}" /> of rank <InlineMath math="m" /> such that <InlineMath math="\\mathcal{C} = \\{\\mathbf{aG} \\mid \\mathbf{a} \\in \\mathbb{B}^m\\}" />,
        then <InlineMath math="\\mathbf{G}" /> is called a <strong>generator matrix</strong> of the code <InlineMath math="\\mathcal{C}" />.
      </Definition>

      <Theorem
        title="Generator Matrix Equivalence"
        proof={
          <>
            <p>We know that:</p>
            <MathBlock math="\\text{rank}(\\mathbf{AG}) \\leq \\min\\{\\text{rank}(\\mathbf{A}), \\text{rank}(\\mathbf{G})\\} \\leq \\text{rank}(\\mathbf{G}) = k" />
            <p className="mt-2">Again:</p>
            <MathBlock math="k = \\text{rank}(\\mathbf{G}) = \\text{rank}(\\mathbf{A}^{-1}\\mathbf{AG}) \\leq \\min\\{\\text{rank}(\\mathbf{A}^{-1}), \\text{rank}(\\mathbf{AG})\\} \\leq \\text{rank}(\\mathbf{AG})" />
            <p className="mt-2">
              Hence <InlineMath math="\\text{rank}(\\mathbf{AG}) = \\text{rank}(\\mathbf{G}) = k" /> and the rows of
              <InlineMath math="\\mathbf{AG}" /> are linearly independent.
            </p>
            <p className="mt-2">
              The rows of <InlineMath math="\\mathbf{AG}" /> generate a subspace of dimension <InlineMath math="k" /> of
              <InlineMath math="\\mathcal{C}" />, which itself has dimension <InlineMath math="k" />. Hence any element of
              <InlineMath math="\\mathcal{C}" /> is of the form <InlineMath math="\\mathbf{a}(\\mathbf{AG})" /> for some
              <InlineMath math="\\mathbf{a} \\in V(k, q)" />.
            </p>
          </>
        }
      >
        If <InlineMath math="\\mathbf{A}" /> is a non-singular square matrix of order <InlineMath math="k" /> over <InlineMath math="F" />,
        then <InlineMath math="\\mathbf{AG}" /> is also a generator matrix of <InlineMath math="\\mathcal{C}" />.
      </Theorem>

      <h3>Code Parameters</h3>

      <Definition title="Linear [n, k, d] Code">
        If <InlineMath math="\\mathcal{C}" /> is a linear code of length <InlineMath math="n" />, dimension <InlineMath math="k" />,
        and minimum distance <InlineMath math="d" />, we say <InlineMath math="\\mathcal{C}" /> is a <strong>linear [n, k, d] code</strong>
        over <InlineMath math="F" />.
      </Definition>

      <Definition title="Equivalent Codes">
        Two codes <InlineMath math="\\mathcal{C}" /> and <InlineMath math="\\mathcal{C}'" /> of length <InlineMath math="n" /> are
        said to be <strong>equivalent</strong> if there exists a permutation <InlineMath math="\\sigma" /> of the
        <InlineMath math="n" />-symbols <InlineMath math="\\{1, 2, \\ldots, n\\}" /> such that <InlineMath math="c' \\in \\mathcal{C}'" />
        iff <InlineMath math="c' = \\sigma(c)" /> for some <InlineMath math="c \\in \\mathcal{C}" />, where:
        <MathBlock math="\\sigma(c) = \\sigma(c_1, \\ldots, c_n) = (c_{\\sigma(1)}, c_{\\sigma(2)}, \\ldots, c_{\\sigma(n)})" />
      </Definition>

      <Callout type="info">
        <strong>Key Property:</strong> Equivalent codes have the same minimum distance and therefore the same
        error detection/correction capability.
      </Callout>

      <Definition title="Permutation Matrix">
        A <strong>permutation matrix</strong> is a square matrix <InlineMath math="\\mathbf{P}" /> of order <InlineMath math="n" /> with
        exactly one non-zero entry (which is 1) in every row and column. For a permutation <InlineMath math="\\sigma" /> of
        <InlineMath math="\\{1, 2, \\ldots, n\\}" />, the corresponding permutation matrix has <InlineMath math="(i_j, j)" /> entry equal
        to 1 for each <InlineMath math="j" />, where <InlineMath math="\\sigma(j) = i_j" />.
      </Definition>

      <Theorem
        title="Characterization of Equivalent Codes"
        proof={
          <>
            <p>
              Let <InlineMath math="\\sigma" /> be a permutation with <InlineMath math="\\sigma(j) = i_j" />.
              Let <InlineMath math="\\mathbf{P} = (p_{ij})" /> be the corresponding permutation matrix.
            </p>
            <p className="mt-2">
              For any vector <InlineMath math="\\mathbf{c} = (c_1 \\cdots c_n)" />, the <InlineMath math="j" />-th entry of
              <InlineMath math="\\mathbf{cP}" /> is:
            </p>
            <MathBlock math="c_1 p_{1j} + c_2 p_{2j} + \\cdots + c_n p_{nj} = c_{i_j}" />
            <p className="mt-2">
              since <InlineMath math="p_{kj} = 0" /> for <InlineMath math="k \\neq i_j" />. Therefore:
            </p>
            <MathBlock math="\\mathbf{cP} = (c_{i_1} \\, c_{i_2} \\, \\cdots \\, c_{i_n}) = \\sigma(\\mathbf{c})" />
            <p className="mt-2">
              The converse follows similarly.
            </p>
          </>
        }
      >
        Two codes <InlineMath math="\\mathcal{C}" /> and <InlineMath math="\\mathcal{C}'" /> of length <InlineMath math="n" /> are equivalent
        if and only if there exists a permutation matrix <InlineMath math="\\mathbf{P}" /> of order <InlineMath math="n" /> such
        that <InlineMath math="\\mathcal{C}' = \\{\\mathbf{cP} \\mid \\mathbf{c} \\in \\mathcal{C}\\}" />.
      </Theorem>

      <h3>Systematic Form</h3>

      <Theorem
        title="Systematic Generator Matrix"
        proof={
          <>
            <p>
              Let <InlineMath math="\\mathbf{G}" /> be a generator matrix of <InlineMath math="\\mathcal{C}" />.
              Let <InlineMath math="\\mathbf{G}_1, \\ldots, \\mathbf{G}_n" /> denote the columns of <InlineMath math="\\mathbf{G}" />.
            </p>
            <p className="mt-2">
              Suppose <InlineMath math="\\mathbf{G}_{i_1}, \\ldots, \\mathbf{G}_{i_k}" /> for
              <InlineMath math="1 \\leq i_1 < \\cdots < i_k \\leq n" /> are linearly independent.
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\sigma" /> be a permutation with <InlineMath math="\\sigma(j) = i_j" /> for
              <InlineMath math="1 \\leq j \\leq k" />. Let <InlineMath math="\\mathbf{P}" /> be the corresponding permutation matrix.
            </p>
            <p className="mt-2">
              In the matrix <InlineMath math="\\mathbf{M} = \\mathbf{GP}" />, the first <InlineMath math="k" /> columns are linearly
              independent. Let <InlineMath math="\\mathcal{C}'" /> be the code with <InlineMath math="\\mathbf{M}" /> as generator matrix.
            </p>
            <p className="mt-2">
              Then <InlineMath math="\\mathcal{C}' = \\{\\mathbf{cP} \\mid \\mathbf{c} \\in \\mathcal{C}\\}" />, so
              <InlineMath math="\\mathcal{C}'" /> is equivalent to <InlineMath math="\\mathcal{C}" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\mathbf{A} = (\\mathbf{G}_{i_1} \\cdots \\mathbf{G}_{i_k})" />. Since
              <InlineMath math="\\mathbf{A}" /> is non-singular:
            </p>
            <MathBlock math="\\mathbf{A}^{-1}\\mathbf{M} = (\\mathbf{I}_k \\quad \\mathbf{A}^{-1}\\mathbf{B})" />
            <p className="mt-2">
              where <InlineMath math="\\mathbf{B}" /> is a <InlineMath math="k \\times (n-k)" /> matrix.
            </p>
          </>
        }
      >
        Given a linear <InlineMath math="[n, k, d]" /> code <InlineMath math="\\mathcal{C}" /> over <InlineMath math="F" />,
        there exists an equivalent code <InlineMath math="\\mathcal{C}'" /> having a generator matrix whose
        first <InlineMath math="k" /> columns form the identity matrix <InlineMath math="\\mathbf{I}_k" />.
      </Theorem>

      <h3>Parity Check Matrices</h3>

      <Definition title="Parity Check Matrix">
        Let <InlineMath math="\\mathcal{C}" /> be an <InlineMath math="(m, n)" />-code. If there exists an
        <InlineMath math="(n-m) \\times n" /> matrix <InlineMath math="\\mathbf{H}" /> of rank <InlineMath math="n - m" /> such that
        <InlineMath math="\\mathbf{Hb}^t = 0" /> for all <InlineMath math="\\mathbf{b} \\in \\mathcal{C}" />,
        then <InlineMath math="\\mathbf{H}" /> is called a <strong>parity check matrix</strong> of <InlineMath math="\\mathcal{C}" />.
      </Definition>

      <Theorem
        title="Singleton Bound"
        proof={
          <>
            <p>
              Since equivalent codes have the same minimum distance, assume <InlineMath math="\\mathcal{C}" /> has
              a generator matrix <InlineMath math="\\mathbf{G}" /> where the first <InlineMath math="k" /> columns form <InlineMath math="\\mathbf{I}_k" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="\\mathbf{e}_i" /> be a message word with 1 in position <InlineMath math="i" /> and zeros elsewhere.
              The corresponding code word <InlineMath math="\\mathbf{e}_i\\mathbf{G}" /> is the <InlineMath math="i" />-th row of
              <InlineMath math="\\mathbf{G}" />, which has at least <InlineMath math="k - 1" /> zero entries.
            </p>
            <p className="mt-2">
              So the weight of this non-zero code word is at most <InlineMath math="n - (k - 1) = n - k + 1" />.
            </p>
          </>
        }
      >
        If <InlineMath math="\\mathcal{C}" /> is a linear <InlineMath math="[n, k, d]" /> code over <InlineMath math="F" />,
        then <InlineMath math="d \\leq n - k + 1" />.
      </Theorem>

      <Theorem
        title="Generator-Parity Check Relationship"
        proof={
          <>
            <p>
              Let <InlineMath math="\\mathbf{u} = (\\mathbf{v} \\, \\mathbf{w})" /> be the code word corresponding to
              message word <InlineMath math="\\mathbf{a}" />, where <InlineMath math="\\mathbf{v}" /> is <InlineMath math="1 \\times k" /> and
              <InlineMath math="\\mathbf{w}" /> is <InlineMath math="1 \\times (n-k)" />.
            </p>
            <p className="mt-2">
              From <InlineMath math="\\mathbf{Hu}^t = 0" />, we have <InlineMath math="\\mathbf{v} = \\mathbf{a}" /> and:
            </p>
            <MathBlock math="(\\mathbf{A} \\quad \\mathbf{I}_{n-k}) \\begin{pmatrix} \\mathbf{a}^t \\\\ \\mathbf{w}^t \\end{pmatrix} = 0" />
            <p className="mt-2">which gives <InlineMath math="\\mathbf{Aa}^t + \\mathbf{w}^t = 0" />.</p>
            <p className="mt-2">Thus <InlineMath math="\\mathbf{w} = -\\mathbf{aA}^t" /> and:</p>
            <MathBlock math="\\mathbf{u} = \\mathbf{a}(\\mathbf{I}_k \\quad -\\mathbf{A}^t)" />
            <p className="mt-2">
              Conversely, for a code word <InlineMath math="\\mathbf{u} = \\mathbf{aG} = (\\mathbf{a} \\, -\\mathbf{aA}^t)" />:
            </p>
            <MathBlock math="\\mathbf{Hu}^t = (\\mathbf{A} \\quad \\mathbf{I}_{n-k}) \\begin{pmatrix} \\mathbf{a}^t \\\\ -\\mathbf{A}\\mathbf{a}^t \\end{pmatrix} = \\mathbf{Aa}^t - \\mathbf{Aa}^t = 0" />
          </>
        }
      >
        If <InlineMath math="\\mathcal{C}" /> is a linear <InlineMath math="[n, k, d]" /> code over <InlineMath math="F" /> with parity
        check matrix <InlineMath math="\\mathbf{H} = (\\mathbf{A} \\quad \\mathbf{I}_{n-k})" /> where <InlineMath math="\\mathbf{A}" /> is
        an <InlineMath math="(n-k) \\times k" /> matrix, then a generator matrix of <InlineMath math="\\mathcal{C}" /> is given
        by <InlineMath math="\\mathbf{G} = (\\mathbf{I}_k \\quad -\\mathbf{A}^t)" />.
      </Theorem>

      <h3>Examples</h3>

      <Example title="Linear Codes">
        <p>Consider the following examples of linear codes:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Every binary group code is a linear code</li>
          <li>Every polynomial code and every matrix code is a linear code</li>
          <li>BCH codes are linear codes, as are Hamming codes</li>
          <li>Every group code over a field of 3 elements (ternary code) is a linear code</li>
        </ul>
      </Example>

      <Example title="Generator Matrix Examples">
        <p>The following binary codes are linear codes:</p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
          <p className="mb-2"><strong>(a) Generator matrix:</strong></p>
          <MathBlock math="\\mathbf{A} = \\begin{pmatrix} 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & 1 \\\\ 1 & 0 & 1 & 0 \\end{pmatrix}" />
          <p className="mt-4 mb-2"><strong>(b) Generator matrix:</strong></p>
          <MathBlock math="\\mathbf{B} = \\begin{pmatrix} 1 & 1 & 0 & 0 \\\\ 1 & 0 & 1 & 1 \\\\ 0 & 1 & 1 & 0 \\end{pmatrix}" />
        </div>
        <p className="mt-2">
          The codes generated by <InlineMath math="\\mathbf{A}" /> and <InlineMath math="\\mathbf{B}" /> are equivalent
          since <InlineMath math="\\mathbf{B} = \\mathbf{AP}" /> for a suitable permutation matrix <InlineMath math="\\mathbf{P}" />.
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> A linear <InlineMath math="[n, k, d]" /> code can be characterized by either:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A <InlineMath math="k \\times n" /> generator matrix <InlineMath math="\\mathbf{G}" /> of rank <InlineMath math="k" /></li>
          <li>An <InlineMath math="(n-k) \\times n" /> parity check matrix <InlineMath math="\\mathbf{H}" /> of rank <InlineMath math="n-k" /></li>
        </ul>
        In systematic form: <InlineMath math="\\mathbf{G} = (\\mathbf{I}_k \\, | \\, \\mathbf{P})" /> and
        <InlineMath math="\\mathbf{H} = (-\\mathbf{P}^t \\, | \\, \\mathbf{I}_{n-k})" />.
      </Callout>
    </LessonLayout>
  );
}
