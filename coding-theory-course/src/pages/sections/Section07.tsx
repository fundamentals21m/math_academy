import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>3.2 Hamming Codes</h2>

      <p>
        Hamming codes, invented by Richard Hamming in 1950, are among the most elegant and
        historically important error-correcting codes. They provide a systematic method for
        constructing single-error-correcting codes with optimal efficiency.
      </p>

      <h3>Construction of Hamming Codes</h3>

      <Definition title="Hamming Code">
        <p>
          For any integer <InlineMath>{`r \\geq 2`}</InlineMath>, the <strong>Hamming
          code</strong> <InlineMath>{`\\mathcal{H}_r`}</InlineMath> is defined by a parity check
          matrix <InlineMath>{`\\mathbf{H}`}</InlineMath> whose columns are all the non-zero binary
          vectors of length <InlineMath>r</InlineMath>, arranged in order of increasing value
          when interpreted as binary numbers.
        </p>
        <p className="mt-2">
          The code has parameters:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Code length: <InlineMath>{`n = 2^r - 1`}</InlineMath></li>
          <li>Number of message bits: <InlineMath>{`k = 2^r - 1 - r`}</InlineMath></li>
          <li>Number of parity check bits: <InlineMath>r</InlineMath></li>
          <li>Minimum distance: <InlineMath>d = 3</InlineMath></li>
        </ul>
      </Definition>

      <Example title="The (7, 4) Hamming Code">
        <p>
          For <InlineMath>{`r = 3`}</InlineMath>, we get <InlineMath>{`n = 2^3 - 1 = 7`}</InlineMath> and <InlineMath>{`k = 7 - 3 = 4`}</InlineMath>.
        </p>
        <p className="mt-2">
          The parity check matrix has columns 1, 2, 3, 4, 5, 6, 7 in binary:
        </p>
        <MathBlock>{`\\mathbf{H} = \\begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\\\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">Column positions correspond to integers:</p>
        <div className="bg-dark-800/50 p-3 rounded-lg mt-2 font-mono text-sm">
          <p>Column 1: 001 (binary) = 1</p>
          <p>Column 2: 010 (binary) = 2</p>
          <p>Column 3: 011 (binary) = 3</p>
          <p>Column 4: 100 (binary) = 4</p>
          <p>Column 5: 101 (binary) = 5</p>
          <p>Column 6: 110 (binary) = 6</p>
          <p>Column 7: 111 (binary) = 7</p>
        </div>
      </Example>

      <h3>Why Hamming Codes Work</h3>

      <Theorem
        title="Hamming Codes Correct Single Errors"
        proof={
          <>
            <p>
              The columns of <InlineMath>{`\\mathbf{H}`}</InlineMath> are all <InlineMath>{`2^r - 1`}</InlineMath> non-zero
              binary <InlineMath>r</InlineMath>-tuples. By construction:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All columns are non-zero</li>
              <li>All columns are distinct (each represents a different integer from 1 to <InlineMath>{`2^r - 1`}</InlineMath>)</li>
            </ul>
            <p className="mt-2">
              By Theorem 1.5, a parity check matrix with non-zero, distinct columns can decode
              all single errors correctly.
            </p>
          </>
        }
      >
        <p>
          The Hamming code <InlineMath>{`\\mathcal{H}_r`}</InlineMath> can correct any single error.
        </p>
      </Theorem>

      <h3>The Syndrome Directly Indicates Error Position</h3>

      <Callout type="info">
        <strong>The Magic of Hamming Codes:</strong> When a single error occurs in
        position <InlineMath>i</InlineMath>, the syndrome is exactly the binary representation
        of <InlineMath>i</InlineMath>!
        <p className="mt-2">
          This makes decoding extremely simple: compute the syndrome, interpret it as a binary
          number, and flip the bit at that position.
        </p>
      </Callout>

      <Theorem
        title="Syndrome Equals Error Position"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathbf{b}`}</InlineMath> be a code word and suppose an error
              occurs in position <InlineMath>i</InlineMath>. The received word
              is <InlineMath>{`\\mathbf{r} = \\mathbf{b} + \\mathbf{e}^i`}</InlineMath>,
              where <InlineMath>{`\\mathbf{e}^i`}</InlineMath> has a 1 in position <InlineMath>i</InlineMath> and 0s elsewhere.
            </p>
            <p className="mt-2">The syndrome is:</p>
            <MathBlock>{`\\mathbf{s} = \\mathbf{Hr}^t = \\mathbf{H}(\\mathbf{b} + \\mathbf{e}^i)^t = \\mathbf{Hb}^t + \\mathbf{H}(\\mathbf{e}^i)^t`}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{`\\mathbf{b}`}</InlineMath> is a code word, <InlineMath>{`\\mathbf{Hb}^t = \\mathbf{0}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The product <InlineMath>{`\\mathbf{H}(\\mathbf{e}^i)^t`}</InlineMath> selects
              the <InlineMath>i</InlineMath>-th column of <InlineMath>{`\\mathbf{H}`}</InlineMath>, which by
              construction is the binary representation of <InlineMath>i</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          In a Hamming code, if a single error occurs in position <InlineMath>i</InlineMath>,
          the syndrome <InlineMath>{`\\mathbf{s} = \\mathbf{Hr}^t`}</InlineMath> equals the
          binary representation of <InlineMath>i</InlineMath>.
        </p>
      </Theorem>

      <Example title="Decoding with the (7, 4) Hamming Code">
        <p>
          Suppose we receive the word <InlineMath>{`\\mathbf{r} = (1, 0, 1, 1, 0, 0, 1)`}</InlineMath>.
        </p>
        <p className="mt-2">Compute the syndrome:</p>
        <MathBlock>{`\\mathbf{s} = \\mathbf{Hr}^t = \\begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\\\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`= \\begin{pmatrix} 1 + 1 \\\\ 1 + 1 \\\\ 1 + 1 + 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix} = (001)_2 = 1`}</MathBlock>
        <p className="mt-2">
          The syndrome <InlineMath>{`(001)_2 = 1`}</InlineMath> indicates an error in position 1.
        </p>
        <p className="mt-2">Correct by flipping bit 1:</p>
        <MathBlock>{`\\mathbf{c} = (0, 0, 1, 1, 0, 0, 1)`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          The decoded code word is <InlineMath>{`(0, 0, 1, 1, 0, 0, 1)`}</InlineMath>.
        </p>
      </Example>

      <h3>Generator Matrix for Hamming Codes</h3>

      <p>
        To find the generator matrix, we rearrange the parity check matrix into standard form.
      </p>

      <Example title="Generator Matrix for (7, 4) Hamming Code">
        <p>Rearranging columns of <InlineMath>{`\\mathbf{H}`}</InlineMath> to standard form:</p>
        <MathBlock>{`\\mathbf{H}' = \\begin{pmatrix} 1 & 1 & 0 & 1 & 1 & 0 & 0 \\\\ 1 & 0 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & 1 & 1 & 1 & 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          This is <InlineMath>{`\\mathbf{H}' = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_3)`}</InlineMath> with:
        </p>
        <MathBlock>{`\\mathbf{A}^t = \\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 1 & 0 & 1 & 1 \\\\ 0 & 1 & 1 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The generator matrix is:</p>
        <MathBlock>{`\\mathbf{G} = (\\mathbf{I}_4 \\;|\\; \\mathbf{A}) = \\begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 1 & 1 & 1 & 1 \\end{pmatrix}`}</MathBlock>
      </Example>

      <h3>Hamming Codes as Polynomial Codes</h3>

      <Theorem
        title="Hamming Codes are Polynomial Codes"
        proof={
          <>
            <p>
              Consider the polynomial <InlineMath>{`g(X) = 1 + X + X^3`}</InlineMath> over <InlineMath>{`\\mathbb{B}`}</InlineMath>.
            </p>
            <p className="mt-2">
              This polynomial has the property that it divides <InlineMath>{`X^7 + 1`}</InlineMath> but
              does not divide <InlineMath>{`X^k + 1`}</InlineMath> for <InlineMath>{`k < 7`}</InlineMath>.
            </p>
            <p className="mt-2">
              The polynomial code generated by <InlineMath>{`g(X)`}</InlineMath> has length 7 and
              dimension <InlineMath>{`7 - 3 = 4`}</InlineMath>.
            </p>
            <p className="mt-2">
              It can be shown that this polynomial code is equivalent to the (7, 4) Hamming code
              (after appropriate reordering of positions).
            </p>
          </>
        }
      >
        <p>
          The (7, 4) Hamming code is equivalent to the polynomial code generated
          by <InlineMath>{`g(X) = 1 + X + X^3`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Properties of Hamming Codes</h3>

      <Theorem
        title="Minimum Distance"
        proof={
          <>
            <p>
              <strong>Upper bound:</strong> Consider any two columns of <InlineMath>{`\\mathbf{H}`}</InlineMath>,
              say columns <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath>. If their sum equals
              another column <InlineMath>k</InlineMath>, then the word with 1s in positions <InlineMath>i, j, k</InlineMath> is
              a code word of weight 3.
            </p>
            <p className="mt-2">
              For example, columns 1, 2, 3 of the (7, 4) code
              satisfy: <InlineMath>{`(001) + (010) = (011)`}</InlineMath>.
              So <InlineMath>{`d \\leq 3`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Lower bound:</strong> Since all columns are distinct and non-zero, no single
              column is zero (so weight-1 vectors are not code words), and no two columns are equal
              (so weight-2 vectors are not code words). Thus <InlineMath>{`d \\geq 3`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>Every Hamming code <InlineMath>{`\\mathcal{H}_r`}</InlineMath> has minimum distance exactly 3.</p>
      </Theorem>

      <h3>Table of Hamming Codes</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-dark-800">
              <th className="border border-dark-600 px-4 py-2 text-left"><InlineMath>r</InlineMath></th>
              <th className="border border-dark-600 px-4 py-2 text-left">Code Length <InlineMath>{`n = 2^r - 1`}</InlineMath></th>
              <th className="border border-dark-600 px-4 py-2 text-left">Message Bits <InlineMath>k</InlineMath></th>
              <th className="border border-dark-600 px-4 py-2 text-left">Check Bits</th>
              <th className="border border-dark-600 px-4 py-2 text-left">Rate <InlineMath>{`k/n`}</InlineMath></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-dark-600 px-4 py-2">2</td>
              <td className="border border-dark-600 px-4 py-2">3</td>
              <td className="border border-dark-600 px-4 py-2">1</td>
              <td className="border border-dark-600 px-4 py-2">2</td>
              <td className="border border-dark-600 px-4 py-2">0.333</td>
            </tr>
            <tr>
              <td className="border border-dark-600 px-4 py-2">3</td>
              <td className="border border-dark-600 px-4 py-2">7</td>
              <td className="border border-dark-600 px-4 py-2">4</td>
              <td className="border border-dark-600 px-4 py-2">3</td>
              <td className="border border-dark-600 px-4 py-2">0.571</td>
            </tr>
            <tr>
              <td className="border border-dark-600 px-4 py-2">4</td>
              <td className="border border-dark-600 px-4 py-2">15</td>
              <td className="border border-dark-600 px-4 py-2">11</td>
              <td className="border border-dark-600 px-4 py-2">4</td>
              <td className="border border-dark-600 px-4 py-2">0.733</td>
            </tr>
            <tr>
              <td className="border border-dark-600 px-4 py-2">5</td>
              <td className="border border-dark-600 px-4 py-2">31</td>
              <td className="border border-dark-600 px-4 py-2">26</td>
              <td className="border border-dark-600 px-4 py-2">5</td>
              <td className="border border-dark-600 px-4 py-2">0.839</td>
            </tr>
            <tr>
              <td className="border border-dark-600 px-4 py-2">6</td>
              <td className="border border-dark-600 px-4 py-2">63</td>
              <td className="border border-dark-600 px-4 py-2">57</td>
              <td className="border border-dark-600 px-4 py-2">6</td>
              <td className="border border-dark-600 px-4 py-2">0.905</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <strong>Efficiency:</strong> As <InlineMath>r</InlineMath> increases, the rate <InlineMath>{`k/n`}</InlineMath> approaches 1.
        This means Hamming codes become increasingly efficient for longer code lengths, with the
        overhead of parity bits becoming negligible.
      </Callout>

      <h3>Historical Significance</h3>

      <p>
        Richard Hamming developed these codes while working at Bell Labs in the late 1940s.
        Frustrated by errors in the mechanical relay computers of the time, he sought a way to
        automatically detect and correct errors. His elegant solution remains one of the
        foundations of coding theory.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Hamming codes are single-error-correcting codes with
        parameters <InlineMath>{`[2^r - 1, 2^r - 1 - r, 3]`}</InlineMath>. They are constructed by using
        all non-zero <InlineMath>r</InlineMath>-bit binary vectors as columns of the parity check matrix.
        This construction ensures that:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All columns are distinct and non-zero (enabling single-error correction)</li>
          <li>The syndrome directly indicates the error position (enabling efficient decoding)</li>
          <li>The minimum distance is exactly 3</li>
        </ul>
        <p className="mt-2">
          Hamming codes can also be viewed as polynomial codes, connecting the matrix and polynomial
          approaches to coding theory.
        </p>
      </Callout>
    </LessonLayout>
  );
}
