import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      {/* Introduction */}
      <p>
        When data is transmitted or stored, errors can occur. Error-correcting codes add redundancy
        to detect and correct these errors. This section introduces the mathematics behind these
        codes, showing how group theory provides the foundation for reliable digital communication.
      </p>

      <h2>Binary Strings and the Hamming Distance</h2>

      <Definition title="Binary Codeword" className="my-6">
        <p>
          A <strong>binary codeword</strong> of length <InlineMath>n</InlineMath> is an element of{' '}
          <InlineMath>\mathbb{'{Z}'}_2^n</InlineMath>, i.e., an <InlineMath>n</InlineMath>-tuple of
          0s and 1s.
        </p>
        <p className="mt-2">
          <InlineMath>\mathbb{'{Z}'}_2^n</InlineMath> forms a group under componentwise addition
          mod 2 (XOR).
        </p>
      </Definition>

      <Example title="Binary String Addition" className="my-6">
        <p>
          In <InlineMath>\mathbb{'{Z}'}_2^4</InlineMath>:
        </p>
        <MathBlock>{`(1, 0, 1, 1) + (1, 1, 0, 1) = (0, 1, 1, 0)`}</MathBlock>
        <p className="mt-2">
          Identity: <InlineMath>(0, 0, 0, 0)</InlineMath>. Every element is its own inverse.
        </p>
      </Example>

      <Definition title="Hamming Distance" className="my-6">
        <p>
          The <strong>Hamming distance</strong> between two codewords <InlineMath>u</InlineMath>{' '}
          and <InlineMath>v</InlineMath>, denoted <InlineMath>d(u, v)</InlineMath>, is the number
          of positions where they differ:
        </p>
        <MathBlock>{`d(u, v) = |\\{i : u_i \\neq v_i\\}|`}</MathBlock>
      </Definition>

      <Definition title="Hamming Weight" className="my-6">
        <p>
          The <strong>Hamming weight</strong> of a codeword <InlineMath>v</InlineMath>, denoted{' '}
          <InlineMath>w(v)</InlineMath>, is the number of non-zero components:
        </p>
        <MathBlock>{`w(v) = d(v, 0) = |\\{i : v_i \\neq 0\\}|`}</MathBlock>
        <p className="mt-2">
          Note: <InlineMath>d(u, v) = w(u + v)</InlineMath>.
        </p>
      </Definition>

      <Example title="Hamming Distance and Weight" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>d((1, 0, 1, 1), (1, 1, 0, 1)) = 2</InlineMath> (differ at positions 2 and 3)
          </li>
          <li>
            <InlineMath>w((1, 0, 1, 1)) = 3</InlineMath> (three 1s)
          </li>
          <li>
            <InlineMath>w((1, 0, 1, 1) + (1, 1, 0, 1)) = w((0, 1, 1, 0)) = 2</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem title="Hamming Distance is a Metric" className="my-6">
        <p>
          The Hamming distance satisfies:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>d(u, v) \geq 0</InlineMath> with equality iff <InlineMath>u = v</InlineMath></li>
          <li><InlineMath>d(u, v) = d(v, u)</InlineMath></li>
          <li><InlineMath>d(u, w) \leq d(u, v) + d(v, w)</InlineMath> (triangle inequality)</li>
        </ol>
      </Theorem>

      <h2>Codes and Error Detection</h2>

      <Definition title="Code" className="my-6">
        <p>
          A <strong>code</strong> <InlineMath>C</InlineMath> is a subset of{' '}
          <InlineMath>\mathbb{'{Z}'}_2^n</InlineMath>. Elements of <InlineMath>C</InlineMath> are
          called <strong>codewords</strong>.
        </p>
        <p className="mt-2">
          The <strong>minimum distance</strong> of <InlineMath>C</InlineMath> is:
        </p>
        <MathBlock>{`d(C) = \\min\\{d(u, v) : u, v \\in C, u \\neq v\\}`}</MathBlock>
      </Definition>

      <Theorem title="Error Detection Capability" className="my-6">
        <p>
          A code with minimum distance <InlineMath>d</InlineMath> can <strong>detect</strong> up to{' '}
          <InlineMath>d - 1</InlineMath> errors.
        </p>
        <p className="mt-2 text-dark-300">
          (If <InlineMath>d - 1</InlineMath> or fewer bits flip, the received word is not a codeword.)
        </p>
      </Theorem>

      <Theorem title="Error Correction Capability" className="my-6">
        <p>
          A code with minimum distance <InlineMath>d</InlineMath> can <strong>correct</strong> up to{' '}
          <InlineMath>\lfloor (d - 1)/2 \rfloor</InlineMath> errors.
        </p>
        <p className="mt-2 text-dark-300">
          (The received word is decoded to the nearest codeword.)
        </p>
      </Theorem>

      <h2>Parity Check Codes</h2>

      <Example title="Simple Parity Check" className="my-6">
        <p>
          Add a parity bit so the total number of 1s is even:
        </p>
        <MathBlock>{`C = \\{(v_1, v_2, v_3, v_4) \\in \\mathbb{Z}_2^4 : v_1 + v_2 + v_3 + v_4 = 0\\}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>C</InlineMath> has <InlineMath>2^3 = 8</InlineMath> codewords and minimum
          distance 2.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Can detect 1 error (but not correct it)</li>
          <li>Cannot detect 2 errors (they cancel out)</li>
        </ul>
      </Example>

      <h2>Linear Codes</h2>

      <Definition title="Linear Code" className="my-6">
        <p>
          A code <InlineMath>C \subseteq \mathbb{'{Z}'}_2^n</InlineMath> is <strong>linear</strong>{' '}
          if <InlineMath>C</InlineMath> is a subgroup of <InlineMath>\mathbb{'{Z}'}_2^n</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>C</InlineMath> is closed under addition:{' '}
          <InlineMath>u, v \in C \Rightarrow u + v \in C</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Minimum Distance of Linear Codes" className="my-6">
        <p>
          For a linear code <InlineMath>C</InlineMath>:
        </p>
        <MathBlock>{`d(C) = \\min\\{w(v) : v \\in C, v \\neq 0\\}`}</MathBlock>
        <p className="mt-2">
          The minimum distance equals the minimum weight of non-zero codewords.
        </p>
      </Theorem>

      <Definition title="Generator Matrix" className="my-6">
        <p>
          A <strong>generator matrix</strong> <InlineMath>G</InlineMath> for a linear code{' '}
          <InlineMath>C</InlineMath> is a <InlineMath>k \times n</InlineMath> matrix whose rows form
          a basis for <InlineMath>C</InlineMath>. The code is:
        </p>
        <MathBlock>{`C = \\{uG : u \\in \\mathbb{Z}_2^k\\}`}</MathBlock>
        <p className="mt-2">
          Such a code has <InlineMath>|C| = 2^k</InlineMath> codewords.
        </p>
      </Definition>

      <Example title="A [7, 4] Hamming Code" className="my-6">
        <p>
          The Hamming (7, 4) code has generator matrix:
        </p>
        <MathBlock>{`G = \\begin{pmatrix}
1 & 0 & 0 & 0 & 1 & 1 & 0 \\\\
0 & 1 & 0 & 0 & 1 & 0 & 1 \\\\
0 & 0 & 1 & 0 & 0 & 1 & 1 \\\\
0 & 0 & 0 & 1 & 1 & 1 & 1
\\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          This encodes 4 data bits into 7 bits. It has <InlineMath>2^4 = 16</InlineMath> codewords
          and minimum distance 3.
        </p>
        <p className="mt-2">
          <strong>Capabilities:</strong> Detects up to 2 errors, corrects 1 error.
        </p>
      </Example>

      <h2>Parity Check Matrix</h2>

      <Definition title="Parity Check Matrix" className="my-6">
        <p>
          A <strong>parity check matrix</strong> <InlineMath>H</InlineMath> for a linear code{' '}
          <InlineMath>C</InlineMath> is a matrix such that:
        </p>
        <MathBlock>{`C = \\{v \\in \\mathbb{Z}_2^n : Hv^T = 0\\}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>v</InlineMath> is a codeword iff <InlineMath>Hv^T = 0</InlineMath>.
        </p>
      </Definition>

      <Example title="Parity Check for Hamming Code" className="my-6">
        <p>
          The parity check matrix for the Hamming (7, 4) code:
        </p>
        <MathBlock>{`H = \\begin{pmatrix}
1 & 1 & 0 & 1 & 1 & 0 & 0 \\\\
1 & 0 & 1 & 1 & 0 & 1 & 0 \\\\
0 & 1 & 1 & 1 & 0 & 0 & 1
\\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Note: Columns of <InlineMath>H</InlineMath> are binary representations of 1 through 7.
        </p>
      </Example>

      <h2>Syndrome Decoding</h2>

      <Definition title="Syndrome" className="my-6">
        <p>
          For a received word <InlineMath>r</InlineMath>, the <strong>syndrome</strong> is:
        </p>
        <MathBlock>{`s = Hr^T`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>s = 0</InlineMath>, then <InlineMath>r</InlineMath> is a codeword (possibly
          with errors that went undetected).
        </p>
        <p className="mt-2">
          If <InlineMath>s \neq 0</InlineMath>, errors occurred. The syndrome indicates which bit
          to flip.
        </p>
      </Definition>

      <Example title="Error Correction with Hamming Code" className="my-6">
        <p>
          Suppose codeword <InlineMath>c = (1, 0, 1, 0, 0, 1, 1)</InlineMath> is sent but{' '}
          <InlineMath>r = (1, 0, 1, 1, 0, 1, 1)</InlineMath> is received (bit 4 flipped).
        </p>
        <p className="mt-3">
          <strong>Compute syndrome:</strong> <InlineMath>s = Hr^T = (1, 0, 0)^T</InlineMath>
        </p>
        <p className="mt-2">
          The syndrome <InlineMath>(1, 0, 0)^T</InlineMath> is column 4 of <InlineMath>H</InlineMath>,
          indicating position 4 has the error.
        </p>
        <p className="mt-2">
          <strong>Correct:</strong> Flip bit 4 to recover <InlineMath>c</InlineMath>.
        </p>
      </Example>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Real-World Applications</h4>
        <ul className="space-y-3 text-dark-200">
          <li>
            <strong>QR codes and barcodes:</strong> Use Reed-Solomon codes for error correction
          </li>
          <li>
            <strong>CDs and DVDs:</strong> Error-correcting codes handle scratches and defects
          </li>
          <li>
            <strong>Satellite communication:</strong> Correct errors from noise and interference
          </li>
          <li>
            <strong>Computer memory (ECC RAM):</strong> Detect and correct single-bit errors
          </li>
          <li>
            <strong>Internet protocols:</strong> TCP checksums detect transmission errors
          </li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <strong>Hamming distance</strong> <InlineMath>d(u, v)</InlineMath>: number of differing
              positions. <strong>Hamming weight</strong>: number of 1s.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Minimum distance <InlineMath>d</InlineMath> allows detecting <InlineMath>d - 1</InlineMath>{' '}
              errors and correcting <InlineMath>\lfloor(d - 1)/2\rfloor</InlineMath> errors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              A <strong>linear code</strong> is a subgroup of <InlineMath>\mathbb{'{Z}'}_2^n</InlineMath>.
              Its minimum distance equals minimum non-zero weight.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Generator matrix:</strong> <InlineMath>C = \{'{uG}'}\</InlineMath>.{' '}
              <strong>Parity check:</strong> <InlineMath>Hv^T = 0</InlineMath> for codewords.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Syndrome</strong> <InlineMath>s = Hr^T</InlineMath> identifies error location.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <strong>Hamming codes</strong> achieve perfect single-error correction with minimal
              redundancy.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
