import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <p>
        A fundamental question in coding theory is: given the dimension <InlineMath>{`k`}</InlineMath> and
        field size <InlineMath>{`q`}</InlineMath>, what is the largest length <InlineMath>{`n`}</InlineMath> for
        which an MDS code exists? This section explores this existence problem and translates it
        into equivalent problems in linear algebra.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Existence Problem</h2>

      <Definition title="Maximum MDS Length">
        <p>
          Given <InlineMath>{`k`}</InlineMath> and <InlineMath>{`q`}</InlineMath>, we denote by{' '}
          <InlineMath>{`m(k, q)`}</InlineMath> the largest value of <InlineMath>{`n`}</InlineMath> for which an{' '}
          <InlineMath>{`[n, k, n-k+1]`}</InlineMath> MDS code exists over <InlineMath>{`\text{GF}(q)`}</InlineMath>.
        </p>
      </Definition>

      <p className="mt-4">
        By the corollary to Theorem 9.2 (equivalent characterizations of MDS codes), this problem
        is equivalent to:
      </p>

      <Definition title="Equivalent Matrix Problem">
        <p>
          Given <InlineMath>{`k`}</InlineMath> and <InlineMath>{`q`}</InlineMath>, find the largest{' '}
          <InlineMath>{`n`}</InlineMath> for which there exists a <InlineMath>{`k \\times n`}</InlineMath> matrix
          over <InlineMath>{`\text{GF}(q)`}</InlineMath>, every <InlineMath>{`k`}</InlineMath> columns of
          which are linearly independent.
        </p>
      </Definition>

      <p className="mt-4">
        This can be further translated into a vector space problem:
      </p>

      <Definition title="Equivalent Vector Space Problem">
        <p>
          Given a <InlineMath>{`k`}</InlineMath>-dimensional vector space <InlineMath>{`V`}</InlineMath> over{' '}
          <InlineMath>{`\text{GF}(q)`}</InlineMath>, what is the order of a largest subset of{' '}
          <InlineMath>{`V`}</InlineMath> with the property that every <InlineMath>{`k`}</InlineMath> of these
          vectors form a basis of <InlineMath>{`V`}</InlineMath>?
        </p>
      </Definition>

      <Callout type="info" title="Main Conjecture">
        <p>It has been conjectured that:</p>
        <MathBlock>{`
          m(k, q) = \\begin{cases} q + 1 & \\\text{for } 2 \\leq k \\leq q - 1 \\\\ k + 1 & \\\text{for } q \\leq k \\end{cases}
        `}</MathBlock>
        <p className="mt-2">except that <InlineMath>{`m(3, q) = m(q-1, q) = q + 2`}</InlineMath> if <InlineMath>{`q = 2^m`}</InlineMath>.</p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Case k = 2</h2>

      <Theorem
        title="Maximum Length for Dimension 2"
        proof={
          <>
            <p>
              Let <InlineMath>{`V`}</InlineMath> be a 2-dimensional vector space over <InlineMath>{`\text{GF}(q)`}</InlineMath>
              and let <InlineMath>{`\\alpha`}</InlineMath> be a primitive element of <InlineMath>{`\text{GF}(q)`}</InlineMath>.
              Let <InlineMath>{`S`}</InlineMath> be a largest subset of <InlineMath>{`V`}</InlineMath> with the property
              that every two elements of <InlineMath>{`S`}</InlineMath> are linearly independent.
            </p>
            <p className="mt-2">
              The set <InlineMath>{`S`}</InlineMath> contains at least two elements, say{' '}
              <InlineMath>{`\mathbf{e}_1`}</InlineMath> and <InlineMath>{`\mathbf{e}_2`}</InlineMath>.
              Every other element of <InlineMath>{`S`}</InlineMath> is of the form{' '}
              <InlineMath>{`\alpha^i\mathbf{e}_1 + \alpha^j\mathbf{e}_2`}</InlineMath>.
            </p>
            <p className="mt-2">
              For each <InlineMath>{`i`}</InlineMath>, <InlineMath>{`0 \\leq i \\leq q - 2`}</InlineMath>, define:
            </p>
            <MathBlock>{`
              S_i = \\{{'} \\beta(\\mathbf{e}_1 + \\alpha^i\\mathbf{e}_2) : 0 \\neq \\beta \\in \\\text{GF}(q) \\{}'}
            `}</MathBlock>
            <p className="mt-2">
              Any two elements of <InlineMath>{`S_i`}</InlineMath> are linearly dependent, and at most one element
              from each <InlineMath>{`S_i`}</InlineMath> belongs to <InlineMath>{`S`}</InlineMath>. No element from{' '}
              <InlineMath>{`S_i`}</InlineMath> is a scalar multiple of an element from <InlineMath>{`S_j`}</InlineMath> for{' '}
              <InlineMath>{`j \\neq i`}</InlineMath>.
            </p>
            <p className="mt-2">
              Hence at least one element from each <InlineMath>{`S_i`}</InlineMath> belongs to <InlineMath>{`S`}</InlineMath>,
              otherwise <InlineMath>{`S`}</InlineMath> can be enlarged. Thus <InlineMath>{`S`}</InlineMath> contains{' '}
              <InlineMath>{`q + 1`}</InlineMath> elements: <InlineMath>{`\mathbf{e}_1`}</InlineMath>,{' '}
              <InlineMath>{`\mathbf{e}_2`}</InlineMath>, and one from each of the <InlineMath>{`q - 1`}</InlineMath> sets{' '}
              <InlineMath>{`S_0, \ldots, S_\\{q-2\\}`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{`m(2, q) = q + 1`}</InlineMath> for any prime power <InlineMath>{`q`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Case q ≤ k</h2>

      <Theorem
        title="Maximum Length When Field is Small"
        proof={
          <>
            <p>
              Let <InlineMath>{`V`}</InlineMath> be a <InlineMath>{`k`}</InlineMath>-dimensional vector space over{' '}
              <InlineMath>{`\text{GF}(q)`}</InlineMath>. Let <InlineMath>{`S`}</InlineMath> be a largest subset of{' '}
              <InlineMath>{`V`}</InlineMath> such that any <InlineMath>{`k`}</InlineMath> vectors from{' '}
              <InlineMath>{`S`}</InlineMath> are linearly independent.
            </p>
            <p className="mt-2">
              Choose any <InlineMath>{`k`}</InlineMath> vectors <InlineMath>{`\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_k`}</InlineMath>
              from <InlineMath>{`S`}</InlineMath>. Every other element of <InlineMath>{`S`}</InlineMath> is of the form:
            </p>
            <MathBlock>{`
              \\sum_\\{1 \\leq i \\leq k\\} a_i\\mathbf{e}_i
            `}</MathBlock>
            <p className="mt-2">
              where <InlineMath>{`a_i \in \\text{GF}(q)^*`}</InlineMath> (all coefficients non-zero).
            </p>
            <p className="mt-2">
              Suppose two such elements <InlineMath>{`\sum a_i\mathbf{e}_i`}</InlineMath> and{' '}
              <InlineMath>{`\sum b_i\mathbf{e}_i`}</InlineMath> with <InlineMath>{`a_i, b_i \in \\text{GF}(q)^*`}</InlineMath>
              are in <InlineMath>{`S`}</InlineMath>. Consider the <InlineMath>{`k`}</InlineMath> equations{' '}
              <InlineMath>{`a_i x = b_i`}</InlineMath>, <InlineMath>{`1 \\leq i \\leq k`}</InlineMath>.
            </p>
            <p className="mt-2">
              Each has a unique solution in <InlineMath>{`\\text{GF}(q)^*`}</InlineMath>. Since{' '}
              <InlineMath>{`|\\text{GF}(q)^*| = q - 1 < k`}</InlineMath>, at least two equations
              have the same solution, say <InlineMath>{`a_1x = b_1`}</InlineMath> and{' '}
              <InlineMath>{`a_2x = b_2`}</InlineMath> with solution <InlineMath>{`x`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`x(\sum a_i\mathbf{e}_i) - \sum b_i\mathbf{e}_i`}</InlineMath> is a linear combination
              of <InlineMath>{`\mathbf{e}_3, \ldots, \mathbf{e}_k`}</InlineMath>, so the vectors{' '}
              <InlineMath>{`\mathbf{e}_3, \ldots, \mathbf{e}_k, \sum a_i\mathbf{e}_i, \sum b_i\mathbf{e}_i`}</InlineMath>
              are linearly dependent—a contradiction.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{`S`}</InlineMath> contains at most one element of the form{' '}
              <InlineMath>{`\sum a_i\mathbf{e}_i`}</InlineMath> with all <InlineMath>{`a_i \\neq 0`}</InlineMath>.
              So <InlineMath>{`m(k, q) \\leq k + 1`}</InlineMath>. Since <InlineMath>{`S`}</InlineMath> must contain
              at least one such element (otherwise it can be enlarged), we have{' '}
              <InlineMath>{`m(k, q) = k + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{`m(k, q) = k + 1`}</InlineMath> for <InlineMath>{`q \\leq k`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Binary Case">
        <p>
          When <InlineMath>{`q = 2`}</InlineMath> and <InlineMath>{`k \\neq 1`}</InlineMath>,
          we have <InlineMath>{`m(k, 2) = k + 1`}</InlineMath> or <InlineMath>{`m(k, 2) = k`}</InlineMath>.
        </p>
        <p className="mt-2">
          This confirms that the only binary MDS codes are the trivial ones:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`[n, 1, n]`}</InlineMath> repetition code</li>
          <li><InlineMath>{`[n, n-1, 2]`}</InlineMath> parity check code</li>
          <li><InlineMath>{`[n, n, 1]`}</InlineMath> full space</li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary of Known Results</h2>

      <Callout type="note" title="Classification of Trivial MDS Codes">
        <p>The following are always MDS codes for any finite field <InlineMath>{`F`}</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`[n, 1, n]`}</InlineMath> - The repetition code (every element is 1...1 or 0...0)</li>
          <li><InlineMath>{`[n, n-1, 2]`}</InlineMath> - The single parity check code</li>
          <li><InlineMath>{`[n, n, 1]`}</InlineMath> - The entire space <InlineMath>{`F^n`}</InlineMath></li>
        </ul>
        <p className="mt-2">These are called <strong>trivial MDS codes</strong>.</p>
      </Callout>

      <Example title="MDS Codes over GF(5)">
        <p>
          Over <InlineMath>{`\text{GF}(5)`}</InlineMath>, we have:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`m(2, 5) = 6`}</InlineMath></li>
          <li><InlineMath>{`m(3, 5) = 6`}</InlineMath></li>
          <li><InlineMath>{`m(4, 5) = 6`}</InlineMath></li>
          <li><InlineMath>{`m(5, 5) = 6`}</InlineMath></li>
          <li><InlineMath>{`m(k, 5) = k + 1`}</InlineMath> for <InlineMath>{`k \\geq 5`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          This means we can construct <InlineMath>{`[6, 2, 5]`}</InlineMath>, <InlineMath>{`[6, 3, 4]`}</InlineMath>,
          and <InlineMath>{`[6, 4, 3]`}</InlineMath> MDS codes over <InlineMath>{`\text{GF}(5)`}</InlineMath>.
        </p>
      </Example>

      <Example title="Constructing an MDS Code over GF(5)">
        <p>Consider the matrix over <InlineMath>{`\text{GF}(5)`}</InlineMath>:</p>
        <MathBlock>{`
          \\mathbf{A} = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & 3 & 1 & 2 \\end{pmatrix}
        `}</MathBlock>
        <p className="mt-2">
          Every square submatrix of <InlineMath>{`\mathbf{A}`}</InlineMath> is non-singular. Therefore:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The code with generator matrix <InlineMath>{`\mathbf{G} = (\mathbf{I}_2 \mid \mathbf{A})`}</InlineMath>
            is a <InlineMath>{`[6, 2, -]`}</InlineMath> MDS code over <InlineMath>{`\text{GF}(5)`}</InlineMath>
          </li>
          <li>
            The code with parity check matrix <InlineMath>{`\mathbf{H} = (\mathbf{A} \mid \mathbf{I}_2)`}</InlineMath>
            is a <InlineMath>{`[6, 4, -]`}</InlineMath> MDS code over <InlineMath>{`\text{GF}(5)`}</InlineMath>
          </li>
        </ul>
      </Example>

      <Callout type="warning" title="Open Problem">
        The exact determination of <InlineMath>{`m(k, q)`}</InlineMath> for all values of{' '}
        <InlineMath>{`k`}</InlineMath> and <InlineMath>{`q`}</InlineMath> remains an open problem.
        The main conjecture has been verified for many cases but a complete proof is still elusive.
      </Callout>
    </LessonLayout>
  );
}
