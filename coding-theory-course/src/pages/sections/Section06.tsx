import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Chapter 3: Hamming Codes</h2>
      <h3>3.1 Binary Representation of Numbers</h3>

      <p>
        Before introducing Hamming codes, we need to understand the binary representation
        of integers. This representation is fundamental to understanding how Hamming codes
        are constructed and why they work.
      </p>

      <h3>Positional Number Systems</h3>

      <p>
        We are familiar with the decimal (base 10) representation of numbers, where each
        position represents a power of 10. For example:
      </p>
      <MathBlock>{`347 = 3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0`}</MathBlock>

      <p>
        The binary (base 2) system works similarly, but each position represents a power of 2,
        and only the digits 0 and 1 are used.
      </p>

      <Definition title="Binary Representation">
        <p>
          The <strong>binary representation</strong> of a non-negative integer <InlineMath>n</InlineMath> is
          the unique expression:
        </p>
        <MathBlock>{`n = a_k 2^k + a_{k-1} 2^{k-1} + \\cdots + a_1 2^1 + a_0 2^0`}</MathBlock>
        <p className="mt-2">
          where each <InlineMath>{`a_i \\in \\{0, 1\\}`}</InlineMath> and <InlineMath>{`a_k = 1`}</InlineMath> (for <InlineMath>{`n > 0`}</InlineMath>).
        </p>
        <p className="mt-2">
          We write this as <InlineMath>{`n = (a_k a_{k-1} \\cdots a_1 a_0)_2`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Binary Representations">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <p className="text-primary-400 font-semibold mb-2">Decimal to Binary</p>
            <p><InlineMath>{`1 = 1 \\cdot 2^0 = (1)_2`}</InlineMath></p>
            <p><InlineMath>{`2 = 1 \\cdot 2^1 + 0 \\cdot 2^0 = (10)_2`}</InlineMath></p>
            <p><InlineMath>{`3 = 1 \\cdot 2^1 + 1 \\cdot 2^0 = (11)_2`}</InlineMath></p>
            <p><InlineMath>{`4 = 1 \\cdot 2^2 = (100)_2`}</InlineMath></p>
            <p><InlineMath>{`5 = 1 \\cdot 2^2 + 1 \\cdot 2^0 = (101)_2`}</InlineMath></p>
            <p><InlineMath>{`6 = 1 \\cdot 2^2 + 1 \\cdot 2^1 = (110)_2`}</InlineMath></p>
            <p><InlineMath>{`7 = 1 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = (111)_2`}</InlineMath></p>
          </div>
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <p className="text-primary-400 font-semibold mb-2">Binary to Decimal</p>
            <p><InlineMath>{`(1001)_2 = 8 + 1 = 9`}</InlineMath></p>
            <p><InlineMath>{`(1010)_2 = 8 + 2 = 10`}</InlineMath></p>
            <p><InlineMath>{`(1011)_2 = 8 + 2 + 1 = 11`}</InlineMath></p>
            <p><InlineMath>{`(1100)_2 = 8 + 4 = 12`}</InlineMath></p>
            <p><InlineMath>{`(1101)_2 = 8 + 4 + 1 = 13`}</InlineMath></p>
            <p><InlineMath>{`(1110)_2 = 8 + 4 + 2 = 14`}</InlineMath></p>
            <p><InlineMath>{`(1111)_2 = 8 + 4 + 2 + 1 = 15`}</InlineMath></p>
          </div>
        </div>
      </Example>

      <h3>Conversion Algorithm</h3>

      <Callout type="info">
        <strong>Converting Decimal to Binary:</strong>
        <p className="mt-2">
          Repeatedly divide by 2 and record the remainders. The binary representation is the
          sequence of remainders read from bottom to top.
        </p>
        <div className="mt-4 bg-dark-800/50 p-4 rounded-lg">
          <p className="font-semibold">Example: Convert 13 to binary</p>
          <div className="mt-2 font-mono">
            <p>13 ÷ 2 = 6 remainder <span className="text-emerald-400">1</span></p>
            <p> 6 ÷ 2 = 3 remainder <span className="text-emerald-400">0</span></p>
            <p> 3 ÷ 2 = 1 remainder <span className="text-emerald-400">1</span></p>
            <p> 1 ÷ 2 = 0 remainder <span className="text-emerald-400">1</span></p>
          </div>
          <p className="mt-2">Reading bottom to top: <InlineMath>{`13 = (1101)_2`}</InlineMath></p>
        </div>
      </Callout>

      <h3>Properties of Binary Representations</h3>

      <Theorem
        title="Number of Bits Required"
        proof={
          <>
            <p>
              If <InlineMath>{`n = (a_k a_{k-1} \\cdots a_0)_2`}</InlineMath> with <InlineMath>{`a_k = 1`}</InlineMath>, then:
            </p>
            <MathBlock>{`2^k \\leq n < 2^{k+1}`}</MathBlock>
            <p className="mt-2">
              Taking logarithms: <InlineMath>{`k \\leq \\log_2 n < k + 1`}</InlineMath>
            </p>
            <p className="mt-2">
              Thus <InlineMath>{`k = \\lfloor \\log_2 n \\rfloor`}</InlineMath>, and the number of
              bits is <InlineMath>{`k + 1 = \\lfloor \\log_2 n \\rfloor + 1`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A positive integer <InlineMath>n</InlineMath> requires <InlineMath>{`\\lfloor \\log_2 n \\rfloor + 1`}</InlineMath> bits
          in its binary representation.
        </p>
      </Theorem>

      <Example title="Bits Required">
        <div className="bg-dark-800/50 p-4 rounded-lg">
          <p>Numbers from 1 to 15 require at most 4 bits:</p>
          <MathBlock>{`2^3 = 8 \\leq n \\leq 15 < 2^4 = 16`}</MathBlock>
          <p className="mt-2">Numbers from 1 to 7 require at most 3 bits:</p>
          <MathBlock>{`2^2 = 4 \\leq n \\leq 7 < 2^3 = 8`}</MathBlock>
        </div>
      </Example>

      <h3>Binary Representation as Column Vectors</h3>

      <p>
        For Hamming codes, we will represent integers as column vectors of their binary digits.
        This allows us to use them as columns of a matrix.
      </p>

      <Definition title="Binary Column Vector">
        <p>
          For an integer <InlineMath>{`n \\geq 1`}</InlineMath> with <InlineMath>r</InlineMath>-bit
          binary representation, we write:
        </p>
        <MathBlock>{`n \\leftrightarrow \\begin{pmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_r \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`n = a_1 \\cdot 2^{r-1} + a_2 \\cdot 2^{r-2} + \\cdots + a_r \\cdot 2^0`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Binary Column Vectors (3 bits)">
        <p>The integers 1 through 7 as 3-bit column vectors:</p>
        <div className="grid grid-cols-7 gap-2 mt-4 text-center">
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">1</p>
            <MathBlock>{`\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">2</p>
            <MathBlock>{`\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">3</p>
            <MathBlock>{`\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">4</p>
            <MathBlock>{`\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">5</p>
            <MathBlock>{`\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">6</p>
            <MathBlock>{`\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-2 rounded-lg">
            <p className="text-primary-400">7</p>
            <MathBlock>{`\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
          </div>
        </div>
      </Example>

      <h3>Key Observations for Hamming Codes</h3>

      <Callout type="info">
        <strong>Important Properties:</strong>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            With <InlineMath>r</InlineMath> bits, we can represent <InlineMath>{`2^r - 1`}</InlineMath> distinct
            non-zero values (from 1 to <InlineMath>{`2^r - 1`}</InlineMath>).
          </li>
          <li>
            All <InlineMath>{`2^r - 1`}</InlineMath> binary <InlineMath>r</InlineMath>-tuples (except <InlineMath>{`00\\cdots0`}</InlineMath>)
            correspond to unique integers.
          </li>
          <li>
            These column vectors are all distinct and non-zero—exactly what we need for a parity
            check matrix that corrects single errors!
          </li>
        </ul>
      </Callout>

      <h3>Binary Addition (XOR)</h3>

      <p>
        When working over the binary field <InlineMath>{`\\mathbb{B}`}</InlineMath>, addition is
        performed modulo 2, which is equivalent to the XOR operation.
      </p>

      <Example title="Binary Addition">
        <p>Adding binary column vectors (in <InlineMath>{`\\mathbb{B}`}</InlineMath>):</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <MathBlock>{`\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
            <p className="text-center text-sm mt-2">(5 + 6 ≡ 3 mod binary)</p>
          </div>
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <MathBlock>{`\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
            <p className="text-center text-sm mt-2">(3 + 4 ≡ 7 mod binary)</p>
          </div>
        </div>
        <p className="mt-4 text-amber-400">
          Note: Binary addition of column vectors corresponds to XOR of each component,
          not ordinary integer addition.
        </p>
      </Example>

      <h3>Connection to Hamming Codes</h3>

      <p>
        The key insight for Hamming codes is this: if we use all non-zero <InlineMath>r</InlineMath>-bit
        binary representations as columns of a parity check matrix <InlineMath>{`\\mathbf{H}`}</InlineMath>,
        then:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>All columns are non-zero</li>
        <li>All columns are distinct</li>
        <li>
          Therefore, by our earlier theorem, this <InlineMath>{`\\mathbf{H}`}</InlineMath> can correct
          all single errors
        </li>
        <li>
          Furthermore, when an error occurs in position <InlineMath>i</InlineMath>, the syndrome equals
          the binary representation of <InlineMath>i</InlineMath>—directly telling us where the error is!
        </li>
      </ul>

      <Callout type="success">
        <strong>Section Summary:</strong> The binary representation of integers provides the
        foundation for Hamming codes. With <InlineMath>r</InlineMath> bits, we can represent <InlineMath>{`2^r - 1`}</InlineMath> distinct
        non-zero integers. Using these as columns of a parity check matrix creates a code where
        the syndrome of a single-error pattern directly indicates the error position. This elegant
        construction is developed fully in the next section.
      </Callout>
    </LessonLayout>
  );
}
