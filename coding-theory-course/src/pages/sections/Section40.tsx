import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <p>
        Hadamard codes are an important family of codes derived from Hadamard matrices.
        These codes achieve good distance properties and have strong connections to
        Reed-Muller codes and simplex codes. In this section, we construct Hadamard codes
        and analyze their fundamental properties.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">From Hadamard Matrices to Binary Codes</h2>

      <Definition title="Binary Representation">
        <p>
          Given a Hadamard matrix <InlineMath>{`H`}</InlineMath> of order <InlineMath>{`n`}</InlineMath>
          with entries in <InlineMath>{`\{'{-1, +1}'\}`}</InlineMath>, we convert it to a binary
          matrix <InlineMath>{`H'`}</InlineMath> with entries in <InlineMath>{`\{'{0, 1}'\}`}</InlineMath>
          via the map:
        </p>
        <MathBlock>{`+1 \mapsto 0, \quad -1 \mapsto 1`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{`H' = \frac{'{1}{2}'}(J - H)`}</InlineMath> where{' '}
          <InlineMath>{`J`}</InlineMath> is the all-ones matrix.
        </p>
      </Definition>

      <Definition title="Hadamard Code (First Definition)">
        <p>
          Let <InlineMath>{`H`}</InlineMath> be a normalized Hadamard matrix of order{' '}
          <InlineMath>{`n`}</InlineMath>, and let <InlineMath>{`H'`}</InlineMath> be the corresponding
          binary matrix. The <strong>Hadamard code</strong> of length <InlineMath>{`n`}</InlineMath>
          is the code <InlineMath>{`\\mathcal{C}`}</InlineMath> consisting of all rows of{' '}
          <InlineMath>{`H'`}</InlineMath> together with their complements.
        </p>
        <p className="mt-2">
          If <InlineMath>{`H`}</InlineMath> has order <InlineMath>{`n`}</InlineMath>, then the
          Hadamard code has:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Length <InlineMath>{`n`}</InlineMath></li>
          <li><InlineMath>{`2n`}</InlineMath> codewords</li>
        </ul>
      </Definition>

      <h2 className="text-2xl font-bold mt-8 mb-4">Reed-Muller Codes and Hadamard Codes</h2>

      <Definition title="First-Order Reed-Muller Code">
        <p>
          The <strong>first-order Reed-Muller code</strong>{' '}
          <InlineMath>{`R(1, m)`}</InlineMath> is a binary linear code of:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Length <InlineMath>{`n = 2^m`}</InlineMath></li>
          <li>Dimension <InlineMath>{`k = m + 1`}</InlineMath></li>
          <li>Minimum distance <InlineMath>{`d = 2^\\{m-1\\}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          It can be defined as the set of all vectors{' '}
          <InlineMath>{`(f(P_1), f(P_2), \ldots, f(P_\\{2^m\\}))`}</InlineMath> where{' '}
          <InlineMath>{`f`}</InlineMath> ranges over all affine functions{' '}
          <InlineMath>{`f: \\mathbb{F}_2^m \to \\mathbb{F}_2`}</InlineMath> and{' '}
          <InlineMath>{`P_1, \ldots, P_\\{2^m\\}`}</InlineMath> are all points in{' '}
          <InlineMath>{`\\mathbb{F}_2^m`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Generator Matrix for R(1,m)"
        proof={
          <>
            <p>
              The affine functions on <InlineMath>{`\\mathbb{F}_2^m`}</InlineMath> are:
            </p>
            <MathBlock>{`f(x_1, \ldots, x_m) = a_0 + a_1 x_1 + \cdots + a_m x_m`}</MathBlock>
            <p className="mt-2">
              There are <InlineMath>{`2^\\{m+1\\}`}</InlineMath> choices for{' '}
              <InlineMath>{`(a_0, a_1, \\ldots, a_m)`}</InlineMath>, giving{' '}
              <InlineMath>{`2^\\{m+1\\}`}</InlineMath> codewords. The dimension is thus{' '}
              <InlineMath>{`m + 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              The row for the constant function <InlineMath>{`f = 1`}</InlineMath> is the
              all-ones vector. The row for <InlineMath>{`f = x_i`}</InlineMath> evaluates
              to the <InlineMath>{`i`}</InlineMath>-th coordinate of each point.
            </p>
          </>
        }
      >
        <p>
          A generator matrix for <InlineMath>{`R(1, m)`}</InlineMath> is the{' '}
          <InlineMath>{`(m+1) \\times 2^m`}</InlineMath> matrix:
        </p>
        <MathBlock>{`
          G = \begin\\{pmatrix\\} 1 & 1 & 1 & \cdots & 1 \\ \\text{(rows encoding evaluation of } x_1, x_2, \ldots, x_m \\text{)} \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          where the columns are indexed by all <InlineMath>{`2^m`}</InlineMath> binary vectors,
          and row <InlineMath>{`i`}</InlineMath> (for <InlineMath>{`i \\geq 1`}</InlineMath>) contains
          the <InlineMath>{`i`}</InlineMath>-th coordinate of each indexing vector.
        </p>
      </Theorem>

      <Example title="First-Order Reed-Muller Code R(1,3)">
        <p>
          For <InlineMath>{`m = 3`}</InlineMath>, we have{' '}
          <InlineMath>{`R(1, 3)`}</InlineMath> with parameters{' '}
          <InlineMath>{`[8, 4, 4]`}</InlineMath>.
        </p>
        <p className="mt-2">
          Index the columns by <InlineMath>{`(0,0,0), (0,0,1), (0,1,0), (0,1,1), (1,0,0), (1,0,1), (1,1,0), (1,1,1)`}</InlineMath>.
        </p>
        <MathBlock>{`
          G = \begin\\{pmatrix\\} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          This code has <InlineMath>{`2^4 = 16`}</InlineMath> codewords: the 8 rows of a
          Hadamard matrix (in binary form) and their 8 complements.
        </p>
      </Example>

      <Theorem
        title="Connection Between R(1,m) and Hadamard Codes"
        proof={
          <>
            <p>
              Consider the Sylvester-Hadamard matrix <InlineMath>{`H_\\{2^m\\}`}</InlineMath>
              of order <InlineMath>{`2^m`}</InlineMath>. Converting to binary form with{' '}
              <InlineMath>{`+1 \\mapsto 0`}</InlineMath>, <InlineMath>{`-1 \\mapsto 1`}</InlineMath>,
              we obtain a matrix whose rows are precisely the codewords of{' '}
              <InlineMath>{`R(1, m)`}</InlineMath>.
            </p>
            <p className="mt-2">
              This can be verified by noting that both constructions produce the same
              set of <InlineMath>{`2^\\{m+1\\}`}</InlineMath> vectors: the rows of the
              binary Hadamard matrix and their complements coincide with the evaluations
              of all affine functions.
            </p>
          </>
        }
      >
        <p>
          The first-order Reed-Muller code <InlineMath>{`R(1, m)`}</InlineMath> is identical
          to the Hadamard code of length <InlineMath>{`2^m`}</InlineMath> derived from the
          Sylvester-Hadamard matrix.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Minimum Distance of Hadamard Codes</h2>

      <Theorem
        title="Minimum Distance"
        proof={
          <>
            <p>
              In a normalized Hadamard matrix <InlineMath>{`H`}</InlineMath> of order{' '}
              <InlineMath>{`n`}</InlineMath>, the first row is all <InlineMath>{`+1`}</InlineMath>'s,
              and every other row has exactly <InlineMath>{`n/2`}</InlineMath> entries equal to{' '}
              <InlineMath>{`+1`}</InlineMath> and <InlineMath>{`n/2`}</InlineMath> equal to{' '}
              <InlineMath>{`-1`}</InlineMath>.
            </p>
            <p className="mt-2">
              In binary form, the first row becomes the all-zeros vector (weight 0),
              and every other row has weight <InlineMath>{`n/2`}</InlineMath>.
            </p>
            <p className="mt-2">
              The complement of the all-zeros vector is the all-ones vector (weight{' '}
              <InlineMath>{`n`}</InlineMath>), and the complement of a weight-<InlineMath>{`n/2`}</InlineMath>
              vector also has weight <InlineMath>{`n/2`}</InlineMath>.
            </p>
            <p className="mt-2">
              For two distinct rows <InlineMath>{`i, j`}</InlineMath> (neither being the first row),
              their agreement/disagreement pattern shows that the Hamming distance between
              corresponding binary vectors is <InlineMath>{`n/2`}</InlineMath>.
            </p>
            <p className="mt-2">
              The distance between a row and the complement of another row is also{' '}
              <InlineMath>{`n/2`}</InlineMath>. Hence the minimum non-zero distance is{' '}
              <InlineMath>{`n/2`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The Hadamard code of length <InlineMath>{`n`}</InlineMath> (derived from an{' '}
          <InlineMath>{`n \\times n`}</InlineMath> Hadamard matrix) has minimum distance{' '}
          <InlineMath>{`d = n/2`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Parameters of Hadamard Codes">
        <p>
          A Hadamard code derived from an <InlineMath>{`n \\times n`}</InlineMath> Hadamard
          matrix has parameters:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Length: <InlineMath>{`n`}</InlineMath></li>
          <li>Size: <InlineMath>{`2n`}</InlineMath> codewords</li>
          <li>Minimum distance: <InlineMath>{`n/2`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          For the Sylvester-Hadamard case (<InlineMath>{`n = 2^m`}</InlineMath>), this gives
          a <InlineMath>{`(2^m, 2^\\{m+1\\}, 2^\\{m-1\\})`}</InlineMath> code.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Relationship to Simplex Codes</h2>

      <Definition title="Simplex Code">
        <p>
          The <strong>simplex code</strong> <InlineMath>{`S(m)`}</InlineMath> is the dual of
          the Hamming code <InlineMath>{`H(m)`}</InlineMath>. It is a{' '}
          <InlineMath>{`[2^m - 1, m, 2^\\{m-1\\}]`}</InlineMath> code.
        </p>
        <p className="mt-2">
          Every non-zero codeword of the simplex code has weight exactly{' '}
          <InlineMath>{`2^\\{m-1\\}`}</InlineMath>. The code is also called a{' '}
          <strong>maximum-length sequence code</strong>.
        </p>
      </Definition>

      <Theorem
        title="Relationship Between Simplex and Hadamard Codes"
        proof={
          <>
            <p>
              Consider <InlineMath>{`R(1, m)`}</InlineMath> with its generator matrix{' '}
              <InlineMath>{`G`}</InlineMath> having the all-ones row as the first row.
            </p>
            <p className="mt-2">
              Puncturing (removing) the first column from <InlineMath>{`R(1, m)`}</InlineMath>
              does not affect the dimension since the all-ones vector punctured at one
              position is still independent of the other generators.
            </p>
            <p className="mt-2">
              Deleting the all-ones generator row and puncturing the first column gives
              a code with parameters <InlineMath>{`[2^m - 1, m]`}</InlineMath>. This is
              precisely the simplex code <InlineMath>{`S(m)`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The simplex code <InlineMath>{`S(m)`}</InlineMath> can be obtained from the
          first-order Reed-Muller code <InlineMath>{`R(1, m)`}</InlineMath> by:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Removing the all-ones row from the generator matrix</li>
          <li>Puncturing one coordinate position</li>
        </ol>
        <p className="mt-2">
          Equivalently, <InlineMath>{`S(m)`}</InlineMath> is the code obtained by taking
          all non-zero codewords of <InlineMath>{`R(1, m)`}</InlineMath> that have a 0 in
          a fixed position, and then puncturing that position.
        </p>
      </Theorem>

      <Example title="Simplex Code S(3)">
        <p>
          The simplex code <InlineMath>{`S(3)`}</InlineMath> has parameters{' '}
          <InlineMath>{`[7, 3, 4]`}</InlineMath>. Its generator matrix is:
        </p>
        <MathBlock>{`
          G = \begin\\{pmatrix\\} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">
          The 7 non-zero codewords each have weight 4. Together with the zero codeword,
          this gives <InlineMath>{`2^3 = 8`}</InlineMath> codewords total.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Non-Linear Hadamard Codes</h2>

      <Callout type="warning" title="Linear vs Non-Linear">
        <p>
          The Hadamard code derived from the Sylvester construction is linear
          (it is <InlineMath>{`R(1, m)`}</InlineMath>). However, Hadamard codes from
          other constructions (e.g., Paley) may not be linear.
        </p>
        <p className="mt-2">
          A Hadamard code is <strong>non-linear</strong> when it cannot be expressed
          as a vector subspace. In this case, it is specified by listing all codewords
          rather than by a generator matrix.
        </p>
      </Callout>

      <Definition title="General Hadamard Code">
        <p>
          Given any Hadamard matrix <InlineMath>{`H`}</InlineMath> of order{' '}
          <InlineMath>{`n`}</InlineMath>, the <strong>Hadamard code</strong>{' '}
          <InlineMath>{`\\mathcal{C}_H`}</InlineMath> consists of:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The <InlineMath>{`n`}</InlineMath> binary vectors obtained from the rows of <InlineMath>{`H`}</InlineMath></li>
          <li>The <InlineMath>{`n`}</InlineMath> complements of these vectors</li>
        </ul>
        <p className="mt-2">
          This code has <InlineMath>{`2n`}</InlineMath> codewords, length <InlineMath>{`n`}</InlineMath>,
          and minimum distance <InlineMath>{`n/2`}</InlineMath>, regardless of whether it is linear.
        </p>
      </Definition>

      <Theorem
        title="Optimality of Hadamard Codes"
        proof={
          <>
            <p>
              The Plotkin bound states that for a code of length <InlineMath>{`n`}</InlineMath>
              and minimum distance <InlineMath>{`d {'>'} n/2`}</InlineMath>, the number of
              codewords <InlineMath>{`M`}</InlineMath> satisfies:
            </p>
            <MathBlock>{`M \leq \frac{'{2d}{2d - n}'}`}</MathBlock>
            <p className="mt-2">
              For <InlineMath>{`d = n/2`}</InlineMath>, a refinement of the bound gives{' '}
              <InlineMath>{`M \\leq 2n`}</InlineMath> when all codewords have even weight.
            </p>
            <p className="mt-2">
              A Hadamard code achieves exactly <InlineMath>{`M = 2n`}</InlineMath> codewords
              with <InlineMath>{`d = n/2`}</InlineMath>, meeting this bound with equality.
            </p>
          </>
        }
      >
        <p>
          Hadamard codes are optimal in the sense that they achieve the Plotkin bound.
          A code with length <InlineMath>{`n`}</InlineMath>, <InlineMath>{`2n`}</InlineMath>
          codewords, and minimum distance <InlineMath>{`n/2`}</InlineMath> meets the
          theoretical maximum.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Applications</h2>

      <Example title="Mariner 9 Mission">
        <p>
          The Hadamard code (specifically <InlineMath>{`R(1, 5)`}</InlineMath>, a{' '}
          <InlineMath>{`[32, 6, 16]`}</InlineMath> code) was used in the Mariner 9 mission
          to Mars in 1971-1972. The code was used for transmitting grayscale images
          back to Earth.
        </p>
        <p className="mt-2">
          Each pixel was encoded as one of 64 brightness levels (6 bits). The{' '}
          <InlineMath>{`R(1, 5)`}</InlineMath> code expanded this to 32 bits, providing
          strong error correction for the noisy deep-space communication channel.
        </p>
        <p className="mt-2">
          The code can correct up to <InlineMath>{`\\lfloor (16-1)/2 \\rfloor = 7`}</InlineMath>
          errors per 32-bit block.
        </p>
      </Example>

      <Callout type="success" title="Key Properties Summary">
        <p>Hadamard codes possess several desirable properties:</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>High rate of error correction:</strong> Can correct nearly{' '}
            <InlineMath>{`n/4`}</InlineMath> errors in a length-<InlineMath>{`n`}</InlineMath> code
          </li>
          <li>
            <strong>Simple decoding:</strong> Fast Hadamard Transform enables efficient
            maximum-likelihood decoding
          </li>
          <li>
            <strong>Optimal:</strong> Meet the Plotkin bound with equality
          </li>
          <li>
            <strong>Well-understood structure:</strong> Deep connections to Reed-Muller
            codes and simplex codes
          </li>
        </ul>
      </Callout>

      <Example title="Weight Distribution">
        <p>
          For a Hadamard code of length <InlineMath>{`n = 2^m`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>1 codeword of weight 0 (the zero vector)</li>
          <li><InlineMath>{`2^\\{m+1\\} - 2`}</InlineMath> codewords of weight <InlineMath>{`2^\\{m-1\\}`}</InlineMath></li>
          <li>1 codeword of weight <InlineMath>{`2^m`}</InlineMath> (the all-ones vector)</li>
        </ul>
        <p className="mt-2">
          For example, with <InlineMath>{`m = 3`}</InlineMath> (length 8):
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>1 codeword of weight 0</li>
          <li>14 codewords of weight 4</li>
          <li>1 codeword of weight 8</li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
