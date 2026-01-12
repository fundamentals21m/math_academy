import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <p>
        MDS codes have a remarkable property: their weight distribution is completely determined
        by their parameters. In this section, we derive the unique weight distribution formula
        for MDS codes and explore its consequences.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Message Symbol Flexibility</h2>

      <Theorem
        title="Message Symbol Positions"
        proof={
          <>
            <p>
              Let <InlineMath>{`i_1, i_2, \\ldots, i_k`}</InlineMath> be the chosen <InlineMath>{`k`}</InlineMath> positions.
              Let <InlineMath>{`\mathbf{G}`}</InlineMath> be a generator matrix of <InlineMath>{`\mathcal{C}`}</InlineMath>.
              Since <InlineMath>{`\mathcal{C}`}</InlineMath> is MDS, every <InlineMath>{`k`}</InlineMath> columns of{' '}
              <InlineMath>{`\mathbf{G}`}</InlineMath> are linearly independent.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\bar{'{'}\mathbf{G}{'}'} = (\mathbf{G}_{i_1} \; \mathbf{G}_{i_2} \; \cdots \; \mathbf{G}_{i_k})`}</InlineMath>
              where <InlineMath>{`\mathbf{G}_1, \mathbf{G}_2, \ldots, \mathbf{G}_n`}</InlineMath> are the columns of{' '}
              <InlineMath>{`\mathbf{G}`}</InlineMath>. Then <InlineMath>{`\bar{'{'}\mathbf{G}{'}'}`}</InlineMath> is invertible.
            </p>
            <p className="mt-2">
              Set <InlineMath>{`\mathbf{G}' = \bar{'{'}\mathbf{G}{'}'}^\\{-1\\}\mathbf{G}`}</InlineMath>.
              This is also a generator matrix of <InlineMath>{`\mathcal{C}`}</InlineMath>.
              Given message <InlineMath>{`\mathbf{a} = (a_1, \ldots, a_k)`}</InlineMath>, let{' '}
              <InlineMath>{`\mathbf{a}' = \mathbf{a}\bar{'{'}\mathbf{G}{'}'}^\\{-1\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The code word <InlineMath>{`\mathbf{a}\mathbf{G}' = \mathbf{a}'\mathbf{G}`}</InlineMath> has
              entries <InlineMath>{`a_1, a_2, \\ldots, a_k`}</InlineMath> in positions{' '}
              <InlineMath>{`i_1, i_2, \\ldots, i_k`}</InlineMath> respectively.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathcal{C}`}</InlineMath> be an <InlineMath>{`[n, k, d]`}</InlineMath> MDS code.
          Then any <InlineMath>{`k`}</InlineMath> symbols of the code words may be taken as message symbols.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Characterization by Minimum Weight Codewords</h2>

      <Theorem
        title="Minimum Distance Codewords in Any Position"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> Let <InlineMath>{`\mathcal{C}`}</InlineMath> be MDS.
              By the previous theorem, any <InlineMath>{`k`}</InlineMath> coordinates can be taken as
              message symbol positions. Given <InlineMath>{`d = n - k + 1`}</InlineMath> coordinate positions,
              take one of them (say the <InlineMath>{`i`}</InlineMath>th) and the complementary{' '}
              <InlineMath>{`k - 1`}</InlineMath> coordinates as message positions.
            </p>
            <p className="mt-2">
              Consider the message word with 1 in the position corresponding to the{' '}
              <InlineMath>{`i`}</InlineMath>th code position and 0 elsewhere. The corresponding code word
              has a non-zero entry in the <InlineMath>{`i`}</InlineMath>th position and 0 in the{' '}
              <InlineMath>{`k - 1`}</InlineMath> complementary positions. Since it has weight{' '}
              <InlineMath>{`n - k + 1`}</InlineMath>, each of the remaining <InlineMath>{`n - k`}</InlineMath> positions
              must have a non-zero entry.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> Suppose <InlineMath>{`\mathcal{C}`}</InlineMath> has a code word
              of weight <InlineMath>{`d`}</InlineMath> in any <InlineMath>{`d`}</InlineMath> coordinate positions.
              If <InlineMath>{`d \\leq n - k`}</InlineMath>, choosing a generator matrix in standard form
              and a code word with non-zero entries only in the last <InlineMath>{`d`}</InlineMath> positions
              leads to a contradiction (the message must be zero). Hence <InlineMath>{`d = n - k + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathcal{C}`}</InlineMath> be an <InlineMath>{`[n, k, d]`}</InlineMath> code over{' '}
          <InlineMath>{`\text{GF}(q)`}</InlineMath>. Then <InlineMath>{`\mathcal{C}`}</InlineMath> is an MDS
          code if and only if <InlineMath>{`\mathcal{C}`}</InlineMath> has a minimum distance code word
          with non-zero entries in any <InlineMath>{`d`}</InlineMath> coordinates.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Counting Minimum Weight Codewords</h2>

      <Theorem
        title="Number of Minimum Weight Codewords"
        proof={
          <>
            <p>
              Let <InlineMath>{`n - k + 1`}</InlineMath> coordinate positions be given and let{' '}
              <InlineMath>{`\mathbf{b} = (b_1, b_2, \ldots, b_n)`}</InlineMath> be a code word of weight{' '}
              <InlineMath>{`n - k + 1`}</InlineMath> with non-zero entries at the given positions.
            </p>
            <p className="mt-2">
              Every non-zero scalar multiple of <InlineMath>{`\mathbf{b}`}</InlineMath> gives a distinct
              code word of weight <InlineMath>{`n - k + 1`}</InlineMath> with non-zero entries at the
              same positions, yielding <InlineMath>{`q - 1`}</InlineMath> such code words.
            </p>
            <p className="mt-2">
              If <InlineMath>{`\mathbf{c} = (c_1, \ldots, c_n)`}</InlineMath> is another code word of
              weight <InlineMath>{`n - k + 1`}</InlineMath> with non-zero entries at the given positions
              and <InlineMath>{`\mathbf{c} \notin \{'{'}\alpha\mathbf{b} : \alpha \neq 0{'}'}`}</InlineMath>,
              then for some <InlineMath>{`i`}</InlineMath>, we have{' '}
              <InlineMath>{`0 \neq c_i \notin \{'{'}\alpha b_i : \alpha \neq 0{'}'}`}</InlineMath>.
            </p>
            <p className="mt-2">
              But <InlineMath>{`|\{'{'}c_i{'}'} \cup \{'{'}\alpha b_i{'}'}{'}| = q`}</InlineMath> and
              all elements are non-zero—a contradiction. Hence <InlineMath>{`\mathbf{c}`}</InlineMath> is
              a scalar multiple of <InlineMath>{`\mathbf{b}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since there are <InlineMath>{`\binom{'{n}{n-k+1}'}`}</InlineMath> ways to choose the positions,
              the total count is <InlineMath>{`(q-1)\binom{'{n}{n-k+1}'}`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The number of code words of weight <InlineMath>{`n - k + 1`}</InlineMath> in an{' '}
          <InlineMath>{`[n, k, d]`}</InlineMath> MDS code over <InlineMath>{`\text{GF}(q)`}</InlineMath> is:
        </p>
        <MathBlock>{`
          (q - 1)\\binom{'{n}{n - k + 1}'}
        `}</MathBlock>
      </Theorem>

      <Example title="Weight Distribution of a [3,2,2] MDS Code">
        <p>
          Consider the <InlineMath>{`[4, 2, -]`}</InlineMath> code over <InlineMath>{`\text{GF}(3)`}</InlineMath>{' '}
          generated by:
        </p>
        <MathBlock>{`
          \\mathbf{G} = \\begin{pmatrix} 1 & 0 & 1 & 1 \\\\ 0 & 1 & -1 & 1 \\end{pmatrix}
        `}</MathBlock>
        <p className="mt-2">
          The code words are:
        </p>
        <div className="font-mono text-sm mt-2 p-4 bg-dark-800 rounded-lg">
          0000, 1011, -101-1, 01-11, 0-11-1,<br />
          110-1, -1110, 1-1-10, -1-101
        </div>
        <p className="mt-2">
          The number of minimum weight codewords (weight 3) is:
        </p>
        <MathBlock>{`
          (3-1)\\binom{'{4}{4-2+1}'} = 2 \\cdot \\binom{'{4}{3}'} = 2 \\cdot 4 = 8
        `}</MathBlock>
        <p className="mt-2">
          The weight enumerator is <InlineMath>{`W_\\mathcal{C}(x,y) = x^4 + 8xy^3`}</InlineMath>.
        </p>
      </Example>

      <Example title="Self-Dual MDS Code">
        <p>
          For the code in the previous example, the dual{' '}
          <InlineMath>{`\\mathcal{C}^\perp`}</InlineMath> is generated by:
        </p>
        <MathBlock>{`
          \\mathbf{H} = \\begin{pmatrix} -1 & 1 & 1 & 0 \\\\ -1 & -1 & 0 & 1 \\end{pmatrix}
        `}</MathBlock>
        <p className="mt-2">
          Computing the code words of <InlineMath>{`\\mathcal{C}^\perp`}</InlineMath>:
        </p>
        <div className="font-mono text-sm mt-2 p-4 bg-dark-800 rounded-lg">
          0000, -1110, 1-1-10, -1-101, 1101,<br />
          1011, 01-11, 0-11-1, -10-1-1
        </div>
        <p className="mt-2">
          We observe that <InlineMath>{`\\mathcal{C}^\perp = \\mathcal{C}`}</InlineMath>,
          so this code is <strong>self-dual</strong>.
        </p>
      </Example>

      <Callout type="info" title="General Weight Formula">
        <p>
          For an <InlineMath>{`[n, k]`}</InlineMath> MDS code over <InlineMath>{`\text{GF}(q)`}</InlineMath>,
          the number <InlineMath>{`A_w`}</InlineMath> of codewords of weight <InlineMath>{`w`}</InlineMath> is given by:
        </p>
        <MathBlock>{`
          A_w = \\binom{'{n}{w}'} \\sum_\\{j=0\\}^\\{w-d\\} (-1)^j \\binom{'{w}{j}'} (q^\\{w-d+1-j\\} - 1)
        `}</MathBlock>
        <p className="mt-2">
          for <InlineMath>{`d \\leq w \\leq n`}</InlineMath>, where <InlineMath>{`d = n - k + 1`}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Weight Enumerators</h2>

      <Example title="Weight Enumerator of [3,1,3] Code">
        <p>
          Consider the <InlineMath>{`[3, 1, 3]`}</InlineMath> code over <InlineMath>{`\text{GF}(3)`}</InlineMath>:
        </p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{000, 111, 222}\\}}
        `}</MathBlock>
        <p className="mt-2">
          There are <InlineMath>{`(3-1)\binom{'{3}{3}'} = 2`}</InlineMath> codewords of weight 3.
          The weight enumerator is:
        </p>
        <MathBlock>{`
          W_\\\mathcal{C}(x,y) = x^3 + 2y^3
        `}</MathBlock>
        <p className="mt-2">
          The dual is generated by rows of the matrix:
        </p>
        <MathBlock>{`
          \\mathbf{H} = \\begin{pmatrix} 1 & -1 & 1 \\end{pmatrix}
        `}</MathBlock>
        <p className="mt-2">
          Code words of <InlineMath>{`\\mathcal{C}^\perp`}</InlineMath>: 000, 1-11, -11-1.
          So <InlineMath>{`W_{'{\mathcal{C}^\perp}'}(x,y) = x^3 + 2y^3`}</InlineMath>.
        </p>
      </Example>

      <Callout type="note" title="Uniqueness of Weight Distribution">
        A remarkable property of MDS codes is that their weight distribution depends only on
        the parameters <InlineMath>{`n`}</InlineMath>, <InlineMath>{`k`}</InlineMath>, and <InlineMath>{`q`}</InlineMath>.
        All MDS codes with the same parameters have the same weight enumerator.
      </Callout>
    </LessonLayout>
  );
}
