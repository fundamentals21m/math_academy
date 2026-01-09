import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <p>
        In this section, we explore specific examples of quadratic residue codes, including
        the celebrated binary and ternary Golay codes. These codes have exceptional
        error-correcting properties and demonstrate the power of the QR code construction.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Binary Golay Code</h2>

      <p>
        The binary Golay code is one of the most remarkable codes in coding theory. It arises
        naturally as a quadratic residue code with <InlineMath>{`p = 23`}</InlineMath> and{' '}
        <InlineMath>{`s = 2`}</InlineMath>.
      </p>

      <Definition title="Parameters for the Binary Golay Code">
        <p>
          Let <InlineMath>{`p = 23`}</InlineMath> and <InlineMath>{`s = 2`}</InlineMath>. We verify that
          2 is a quadratic residue modulo 23:
        </p>
        <MathBlock>{`2^\\{11\\} = 2048 \\equiv 1 \\pmod\\{23\\}`}</MathBlock>
        <p className="mt-2">
          By Euler's criterion, since <InlineMath>{`2^\\{{(23-1)/2\\}'} \equiv 1 \pmod\\{23\\}`}</InlineMath>,
          2 is indeed a quadratic residue mod 23.
        </p>
      </Definition>

      <p className="mt-4">
        The quadratic residues modulo 23 are the squares of{' '}
        <InlineMath>{`1, 2, 3, \\ldots, 11`}</InlineMath> reduced modulo 23:
      </p>
      <MathBlock>{`Q = \\{{1, 2, 3, 4, 6, 8, 9, 12, 13, 16, 18}\\}`}</MathBlock>
      <p className="mt-2">
        The quadratic non-residues are:
      </p>
      <MathBlock>{`N = \\{{5, 7, 10, 11, 14, 15, 17, 19, 20, 21, 22}\\}`}</MathBlock>

      <Theorem
        title="The Binary (23, 12, 7) Golay Code"
        proof={
          <>
            <p>
              The generator polynomial <InlineMath>{`q(x)`}</InlineMath> for the QR code has roots{' '}
              <InlineMath>{`\\alpha^i`}</InlineMath> for <InlineMath>{`i \\in Q`}</InlineMath>. Since{' '}
              <InlineMath>{`|Q| = 11`}</InlineMath>, we have{' '}
              <InlineMath>{`\\deg q(x) = 11`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore, the dimension is <InlineMath>{`k = 23 - 11 = 12`}</InlineMath>.
            </p>
            <p className="mt-2">
              The minimum distance <InlineMath>{`d = 7`}</InlineMath> can be verified by examining
              the weight distribution or by applying the square root bound (covered in Section 29).
            </p>
          </>
        }
      >
        <p>
          The quadratic residue code <InlineMath>{`\\mathcal{F}`}</InlineMath> with{' '}
          <InlineMath>{`p = 23`}</InlineMath> and <InlineMath>{`s = 2`}</InlineMath> is a{' '}
          <InlineMath>{`[23, 12, 7]`}</InlineMath> binary code. This is the{' '}
          <strong>binary Golay code</strong>, denoted <InlineMath>{`\\mathcal{G}_\\{23\\}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Generator Polynomial for the Binary Golay Code">
        <p>
          The generator polynomial for the binary Golay code is:
        </p>
        <MathBlock>{`q(x) = x^\\{11\\} + x^9 + x^7 + x^6 + x^5 + x + 1`}</MathBlock>
        <p className="mt-2">
          This can be computed by finding a primitive 23rd root of unity{' '}
          <InlineMath>{`\\alpha`}</InlineMath> in an extension of{' '}
          <InlineMath>{`\\text{GF}(2)`}</InlineMath> and computing:
        </p>
        <MathBlock>{`q(x) = \\prod_\\{i \\in Q\\} (x - \\alpha^i)`}</MathBlock>
        <p className="mt-2">
          The alternative generator (for the code <InlineMath>{`\\mathcal{N}`}</InlineMath>) is:
        </p>
        <MathBlock>{`n(x) = x^\\{11\\} + x^\\{10\\} + x^6 + x^5 + x^4 + x^2 + 1`}</MathBlock>
      </Example>

      <Callout type="info" title="Perfect Code Property">
        <p>
          The binary Golay code is a <strong>perfect code</strong>. It achieves the Hamming bound
          with equality:
        </p>
        <MathBlock>{`2^\\{12\\} \\cdot \\left( \\binom\\{23\\}\\{0\\} + \\binom\\{23\\}\\{1\\} + \\binom\\{23\\}\\{2\\} + \\binom\\{23\\}\\{3\\} \\right) = 2^\\{12\\} \\cdot 2048 = 2^\\{23\\}`}</MathBlock>
        <p className="mt-2">
          This means the code can correct up to 3 errors and the spheres of radius 3 around
          codewords partition the entire space.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Ternary Golay Code</h2>

      <p>
        Another famous Golay code arises over <InlineMath>{`\\text{GF}(3)`}</InlineMath> with{' '}
        <InlineMath>{`p = 11`}</InlineMath>.
      </p>

      <Definition title="Parameters for the Ternary Golay Code">
        <p>
          Let <InlineMath>{`p = 11`}</InlineMath> and <InlineMath>{`s = 3`}</InlineMath>. We verify that
          3 is a quadratic residue modulo 11:
        </p>
        <MathBlock>{`3^5 = 243 = 22 \\cdot 11 + 1 \\equiv 1 \\pmod\\{11\\}`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`3^\\{{(11-1)/2\\}'} \equiv 1 \pmod\\{11\\}`}</InlineMath>, 3 is a
          quadratic residue mod 11.
        </p>
      </Definition>

      <p className="mt-4">
        The quadratic residues modulo 11 are:
      </p>
      <MathBlock>{`Q = \\{{1, 3, 4, 5, 9}\\}`}</MathBlock>
      <p className="mt-2">
        And the quadratic non-residues are:
      </p>
      <MathBlock>{`N = \\{{2, 6, 7, 8, 10}\\}`}</MathBlock>

      <Theorem
        title="The Ternary (11, 6, 5) Golay Code"
        proof={
          <>
            <p>
              The generator polynomial has degree <InlineMath>{`|Q| = 5`}</InlineMath>, so the
              dimension is <InlineMath>{`k = 11 - 5 = 6`}</InlineMath>.
            </p>
            <p className="mt-2">
              The minimum distance <InlineMath>{`d = 5`}</InlineMath> can be established through
              the square root bound and direct verification.
            </p>
          </>
        }
      >
        <p>
          The quadratic residue code with <InlineMath>{`p = 11`}</InlineMath> and{' '}
          <InlineMath>{`s = 3`}</InlineMath> is an <InlineMath>{`[11, 6, 5]`}</InlineMath> ternary code.
          This is the <strong>ternary Golay code</strong>, denoted{' '}
          <InlineMath>{`\\mathcal{G}_\\{11\\}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Generator Polynomial for the Ternary Golay Code">
        <p>
          The generator polynomial for the ternary Golay code is:
        </p>
        <MathBlock>{`q(x) = x^5 - x^4 - x^3 + x^2 + 1`}</MathBlock>
        <p className="mt-2">
          In <InlineMath>{`\\text{GF}(3)`}</InlineMath>, this is equivalent to:
        </p>
        <MathBlock>{`q(x) = x^5 + 2x^4 + 2x^3 + x^2 + 1`}</MathBlock>
        <p className="mt-2">
          The alternative generator polynomial is:
        </p>
        <MathBlock>{`n(x) = x^5 - x^3 - x^2 + x + 1 = x^5 + 2x^3 + 2x^2 + x + 1`}</MathBlock>
      </Example>

      <Callout type="info" title="Perfect Code">
        <p>
          The ternary Golay code is also perfect. It satisfies the Hamming bound with equality:
        </p>
        <MathBlock>{`3^6 \\cdot \\left( \\binom\\{11\\}\\{0\\} + 2\\binom\\{11\\}\\{1\\} + 4\\binom\\{11\\}\\{2\\} \\right) = 729 \\cdot 243 = 3^\\{11\\}`}</MathBlock>
        <p className="mt-2">
          This means the code can correct up to 2 errors.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Other QR Code Families</h2>

      <Example title="Binary QR Code of Length 17">
        <p>
          With <InlineMath>{`p = 17`}</InlineMath> and <InlineMath>{`s = 2`}</InlineMath>, we have a
          binary QR code. First verify that 2 is a quadratic residue mod 17:
        </p>
        <MathBlock>{`2^8 = 256 = 15 \\cdot 17 + 1 \\equiv 1 \\pmod\\{17\\}`}</MathBlock>
        <p className="mt-2">
          The quadratic residues modulo 17 are:
        </p>
        <MathBlock>{`Q = \\{{1, 2, 4, 8, 9, 13, 15, 16}\\}`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`|Q| = 8`}</InlineMath>, the code has parameters{' '}
          <InlineMath>{`[17, 9, d]`}</InlineMath>. The minimum distance is{' '}
          <InlineMath>{`d = 5`}</InlineMath>.
        </p>
      </Example>

      <Example title="Binary QR Code of Length 31">
        <p>
          With <InlineMath>{`p = 31`}</InlineMath> and <InlineMath>{`s = 2`}</InlineMath>:
        </p>
        <MathBlock>{`2^\\{15\\} = 32768 = 1057 \\cdot 31 + 1 \\equiv 1 \\pmod\\{31\\}`}</MathBlock>
        <p className="mt-2">
          So 2 is a quadratic residue mod 31. The quadratic residues are:
        </p>
        <MathBlock>{`Q = \\{{1, 2, 4, 5, 7, 8, 9, 10, 14, 16, 18, 19, 20, 25, 28}\\}`}</MathBlock>
        <p className="mt-2">
          This gives a <InlineMath>{`[31, 16, 7]`}</InlineMath> binary code.
        </p>
      </Example>

      <Example title="Binary QR Code of Length 41">
        <p>
          With <InlineMath>{`p = 41`}</InlineMath> and <InlineMath>{`s = 2`}</InlineMath>:
        </p>
        <MathBlock>{`2^\\{20\\} = 1048576 \\equiv 1 \\pmod\\{41\\}`}</MathBlock>
        <p className="mt-2">
          The code has parameters <InlineMath>{`[41, 21, 9]`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary of Binary QR Codes</h2>

      <p>
        The following table summarizes the parameters of binary QR codes for small primes
        where 2 is a quadratic residue:
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 px-4 py-2">Prime p</th>
              <th className="border border-gray-600 px-4 py-2">n</th>
              <th className="border border-gray-600 px-4 py-2">k</th>
              <th className="border border-gray-600 px-4 py-2">d</th>
              <th className="border border-gray-600 px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">7</td>
              <td className="border border-gray-600 px-4 py-2 text-center">7</td>
              <td className="border border-gray-600 px-4 py-2 text-center">4</td>
              <td className="border border-gray-600 px-4 py-2 text-center">3</td>
              <td className="border border-gray-600 px-4 py-2">Hamming code</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">17</td>
              <td className="border border-gray-600 px-4 py-2 text-center">17</td>
              <td className="border border-gray-600 px-4 py-2 text-center">9</td>
              <td className="border border-gray-600 px-4 py-2 text-center">5</td>
              <td className="border border-gray-600 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">23</td>
              <td className="border border-gray-600 px-4 py-2 text-center">23</td>
              <td className="border border-gray-600 px-4 py-2 text-center">12</td>
              <td className="border border-gray-600 px-4 py-2 text-center">7</td>
              <td className="border border-gray-600 px-4 py-2">Binary Golay (perfect)</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">31</td>
              <td className="border border-gray-600 px-4 py-2 text-center">31</td>
              <td className="border border-gray-600 px-4 py-2 text-center">16</td>
              <td className="border border-gray-600 px-4 py-2 text-center">7</td>
              <td className="border border-gray-600 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">41</td>
              <td className="border border-gray-600 px-4 py-2 text-center">41</td>
              <td className="border border-gray-600 px-4 py-2 text-center">21</td>
              <td className="border border-gray-600 px-4 py-2 text-center">9</td>
              <td className="border border-gray-600 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2 text-center">47</td>
              <td className="border border-gray-600 px-4 py-2 text-center">47</td>
              <td className="border border-gray-600 px-4 py-2 text-center">24</td>
              <td className="border border-gray-600 px-4 py-2 text-center">11</td>
              <td className="border border-gray-600 px-4 py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Condition for Binary QR Codes">
        <p>
          For a binary QR code to exist, we need 2 to be a quadratic residue mod{' '}
          <InlineMath>{`p`}</InlineMath>. By quadratic reciprocity, this occurs when{' '}
          <InlineMath>{`p \equiv \pm 1 \pmod\\{8\\}`}</InlineMath>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
