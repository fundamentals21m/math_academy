import { LessonLayout } from '@/components/layout/LessonLayout';
import { Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <p>
        In this section, we work through detailed constructions of specific quadratic residue
        codes, showing complete calculations for finding generator polynomials, encoding,
        and verifying code properties.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Example 1: The Binary [7, 4, 3] QR Code</h2>

      <Example title="Complete Construction of the [7, 4] Code">
        <p>
          <strong>Step 1: Verify parameters.</strong> Let <InlineMath>{`p = 7`}</InlineMath> and{' '}
          <InlineMath>{`s = 2`}</InlineMath>. Check that 2 is a quadratic residue mod 7:
        </p>
        <MathBlock>{`2^3 = 8 \\equiv 1 \\pmod\\{7\\}`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`2^\\{{(7-1)/2\\}'} = 2^3 \equiv 1 \pmod\\{7\\}`}</InlineMath>, 2 is
          indeed a quadratic residue.
        </p>

        <p className="mt-4">
          <strong>Step 2: Find quadratic residues.</strong> Compute squares mod 7:
        </p>
        <MathBlock>{`\\begin{aligned}
1^2 &\\equiv 1 \\pmod{7} \\\\
2^2 &\\equiv 4 \\pmod{7} \\\\
3^2 &\\equiv 2 \\pmod{7}
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`Q = \\{1, 2, 4\\}`}</InlineMath> and{' '}
          <InlineMath>{`N = \\{3, 5, 6\\}`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 3: Find the generator polynomial.</strong> We need a primitive 7th root
          of unity in an extension of <InlineMath>{`\\mathbb{F}_2`}</InlineMath>. The smallest
          extension containing such a root is <InlineMath>{`\\mathbb{F}_\\{2^3\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`\\alpha`}</InlineMath> be a root of{' '}
          <InlineMath>{`x^3 + x + 1`}</InlineMath> over <InlineMath>{`\\mathbb{F}_2`}</InlineMath>.
          Then <InlineMath>{`\\alpha`}</InlineMath> is a primitive element of{' '}
          <InlineMath>{`\\mathbb{F}_8`}</InlineMath>, and <InlineMath>{`\\alpha^7 = 1`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 4: Compute <InlineMath>{`q(x)`}</InlineMath>.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
q(x) &= (x - \\alpha)(x - \\alpha^2)(x - \\alpha^4) \\\\
&= (x - \\alpha)(x^2 - (\\alpha^2 + \\alpha^4)x + \\alpha^6)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          In <InlineMath>{`\\mathbb{F}_8`}</InlineMath>, we have{' '}
          <InlineMath>{`\\alpha^2 + \\alpha^4 = \\alpha^2(1 + \\alpha^2)`}</InlineMath>. Using{' '}
          <InlineMath>{`\\alpha^3 = \\alpha + 1`}</InlineMath>:
        </p>
        <MathBlock>{`\\alpha^4 = \\alpha \\cdot \\alpha^3 = \\alpha(\\alpha + 1) = \\alpha^2 + \\alpha`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`\\alpha^2 + \\alpha^4 = \\alpha^2 + \\alpha^2 + \\alpha = \\alpha`}</InlineMath>.
        </p>
        <p className="mt-2">
          Also, <InlineMath>{`\\alpha^6 = (\\alpha^3)^2 = (\\alpha + 1)^2 = \\alpha^2 + 1`}</InlineMath>.
        </p>
        <MathBlock>{`\\begin{aligned}
q(x) &= (x - \\alpha)(x^2 - \\alpha x + \\alpha^2 + 1) \\\\
&= x^3 - \\alpha x^2 + (\\alpha^2 + 1)x - \\alpha x^2 + \\alpha^2 x - \\alpha(\\alpha^2 + 1) \\\\
&= x^3 + (\\alpha^2 + 1 + \\alpha^2)x + \\alpha^3 + \\alpha \\\\
&= x^3 + x + (\\alpha + 1) + \\alpha \\\\
&= x^3 + x + 1
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Therefore, the generator polynomial is{' '}
          <InlineMath>{`q(x) = x^3 + x + 1`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 5: Verify the factorization.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
x^7 - 1 &= x^7 + 1 \\text{ (in } \\mathbb{F}_2\\text{)} \\\\
&= (x + 1)(x^3 + x + 1)(x^3 + x^2 + 1)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`n(x) = x^3 + x^2 + 1`}</InlineMath>.
        </p>
      </Example>

      <Example title="Encoding with the [7, 4] Code">
        <p>
          To encode the message <InlineMath>{`m = (1, 0, 1, 1)`}</InlineMath>, write it as a polynomial:
        </p>
        <MathBlock>{`m(x) = 1 + x^2 + x^3`}</MathBlock>
        <p className="mt-2">
          <strong>Systematic encoding:</strong> Compute{' '}
          <InlineMath>{`x^3 m(x) \\mod g(x)`}</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
x^3 m(x) &= x^3 + x^5 + x^6 \\\\
x^6 &= x^3(x^3) = x^3(x + 1 + x^3) \\equiv x^4 + x^3 \\pmod{g(x)} \\\\
x^5 &= x^2(x^3) \\equiv x^3 + x^2 \\pmod{g(x)} \\\\
x^3 m(x) &\\equiv x^3 + (x^3 + x^2) + (x^4 + x^3) \\\\
&\\equiv x^4 + x^3 + x^2 \\pmod{g(x)}
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Wait, let us redo this more carefully. We divide <InlineMath>{`x^6 + x^5 + x^3`}</InlineMath>
          by <InlineMath>{`x^3 + x + 1`}</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
x^6 + x^5 + x^3 &= (x^3 + x + 1) \\cdot x^3 + (x^4 + x^3 + x^3) \\\\
&= (x^3 + x + 1) \\cdot x^3 + x^4 \\\\
x^4 &= (x^3 + x + 1) \\cdot x + (x^2 + x) \\\\
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So the remainder is <InlineMath>{`r(x) = x^2 + x`}</InlineMath>.
        </p>
        <p className="mt-2">
          The systematic codeword is:
        </p>
        <MathBlock>{`c(x) = r(x) + x^3 m(x) = (x^2 + x) + (x^3 + x^5 + x^6)`}</MathBlock>
        <p className="mt-2">
          As a vector: <InlineMath>{`\\mathbf{c} = (0, 1, 1, 1, 0, 1, 1)`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Example 2: The Binary [17, 9, 5] QR Code</h2>

      <Example title="Construction of the [17, 9] Code">
        <p>
          <strong>Step 1: Verify parameters.</strong> Let <InlineMath>{`p = 17`}</InlineMath> and{' '}
          <InlineMath>{`s = 2`}</InlineMath>:
        </p>
        <MathBlock>{`2^8 = 256 = 15 \\cdot 17 + 1 \\equiv 1 \\pmod\\{17\\}`}</MathBlock>
        <p className="mt-2">
          So 2 is a quadratic residue mod 17.
        </p>

        <p className="mt-4">
          <strong>Step 2: Find quadratic residues mod 17.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
1^2 &\\equiv 1, \\quad 2^2 \\equiv 4, \\quad 3^2 \\equiv 9, \\quad 4^2 \\equiv 16 \\\\
5^2 &\\equiv 8, \\quad 6^2 \\equiv 2, \\quad 7^2 \\equiv 15, \\quad 8^2 \\equiv 13
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`Q = \\{1, 2, 4, 8, 9, 13, 15, 16\\}`}</InlineMath> and{' '}
          <InlineMath>{`N = \\{3, 5, 6, 7, 10, 11, 12, 14\\}`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 3: Find the generator polynomial.</strong> We need{' '}
          <InlineMath>{`\\mathbb{F}_\\{2^8\\}`}</InlineMath> (since the multiplicative order of
          2 mod 17 is 8) to contain a primitive 17th root of unity.
        </p>
        <p className="mt-2">
          The generator polynomial has degree <InlineMath>{`|Q| = 8`}</InlineMath> and is:
        </p>
        <MathBlock>{`q(x) = x^8 + x^5 + x^4 + x^3 + 1`}</MathBlock>
        <p className="mt-2">
          This can be verified by checking that it divides <InlineMath>{`x^\\{17\\} + 1`}</InlineMath>
          and has <InlineMath>{`\\alpha^i`}</InlineMath> as roots for <InlineMath>{`i \\in Q`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 4: Verify the factorization.</strong>
        </p>
        <MathBlock>{`x^\\{17\\} + 1 = (x + 1)(x^8 + x^5 + x^4 + x^3 + 1)(x^8 + x^7 + x^6 + x^4 + x^2 + x + 1)`}</MathBlock>
        <p className="mt-2">
          The code <InlineMath>{`\\mathcal{F}`}</InlineMath> has parameters [17, 9, 5].
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Example 3: The Binary Golay Code [23, 12, 7]</h2>

      <Example title="Detailed Construction of the Golay Code">
        <p>
          <strong>Step 1: Quadratic residues mod 23.</strong> Since{' '}
          <InlineMath>{`23 \equiv -1 \pmod\\{8\\}`}</InlineMath>, we have 2 is a QR mod 23.
        </p>
        <MathBlock>{`\\begin{aligned}
1^2 &\\equiv 1, \\quad 2^2 \\equiv 4, \\quad 3^2 \\equiv 9, \\quad 4^2 \\equiv 16 \\\\
5^2 &\\equiv 2, \\quad 6^2 \\equiv 13, \\quad 7^2 \\equiv 3, \\quad 8^2 \\equiv 18 \\\\
9^2 &\\equiv 12, \\quad 10^2 \\equiv 8, \\quad 11^2 \\equiv 6
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>{`Q = \\{1, 2, 3, 4, 6, 8, 9, 12, 13, 16, 18\\}`}</InlineMath>
        </p>

        <p className="mt-4">
          <strong>Step 2: Generator polynomial.</strong> The multiplicative order of 2 mod 23
          is 11 (since <InlineMath>{`2^\\{11\\} \equiv 1 \pmod\\{23\\}`}</InlineMath>). This means
          the cyclotomic cosets have size dividing 11.
        </p>
        <p className="mt-2">
          The generator polynomial is:
        </p>
        <MathBlock>{`q(x) = x^\\{11\\} + x^9 + x^7 + x^6 + x^5 + x + 1`}</MathBlock>

        <p className="mt-4">
          <strong>Step 3: Verify.</strong> One can check:
        </p>
        <MathBlock>{`\\begin{aligned}
x^{23} + 1 = (x + 1) &\\cdot (x^{11} + x^9 + x^7 + x^6 + x^5 + x + 1) \\\\
&\\cdot (x^{11} + x^{10} + x^6 + x^5 + x^4 + x^2 + 1)
\\end{aligned}`}</MathBlock>
      </Example>

      <Example title="Generator Matrix for the Golay Code">
        <p>
          The systematic generator matrix for the [23, 12, 7] Golay code is:
        </p>
        <MathBlock>{`
          G = \\begin\\{pmatrix\\}
          1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 0 \\\\
          0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 \\\\
          0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 \\\\
          0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 1 & 0 \\\\
          0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 1 \\\\
          0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 & 0 & 0 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 & 0 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 1 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 1 & 1 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 1 & 1 & 1 & 1 & 1 \\\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 0 & 1
          \\end\\{pmatrix\\}
        `}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Example 4: The Ternary Golay Code [11, 6, 5]</h2>

      <Example title="Construction of the Ternary Golay Code">
        <p>
          <strong>Step 1: Quadratic residues mod 11.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
1^2 &\\equiv 1, \\quad 2^2 \\equiv 4, \\quad 3^2 \\equiv 9 \\\\
4^2 &\\equiv 5, \\quad 5^2 \\equiv 3
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>{`Q = \\{1, 3, 4, 5, 9\\}`}</InlineMath> and{' '}
          <InlineMath>{`N = \\{2, 6, 7, 8, 10\\}`}</InlineMath>.
        </p>

        <p className="mt-4">
          <strong>Step 2: Generator polynomial over <InlineMath>{`\\mathbb{F}_3`}</InlineMath>.</strong>
        </p>
        <p className="mt-2">
          The multiplicative order of 3 mod 11 is 5 (since <InlineMath>{`3^5 = 243 \equiv 1 \pmod\\{11\\}`}</InlineMath>).
          The generator polynomial is:
        </p>
        <MathBlock>{`q(x) = x^5 + 2x^4 + 2x^3 + x^2 + 1`}</MathBlock>
        <p className="mt-2">
          (In <InlineMath>{`\\mathbb{F}_3`}</InlineMath>, we have{' '}
          <InlineMath>{`-1 \\equiv 2`}</InlineMath>.)
        </p>

        <p className="mt-4">
          <strong>Step 3: Verify the factorization.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
x^{11} - 1 &= (x - 1)(x^5 + 2x^4 + 2x^3 + x^2 + 1)(x^5 + 2x^3 + 2x^2 + x + 1) \\\\
&\\text{in } \\mathbb{F}_3[x]
\\end{aligned}`}</MathBlock>
      </Example>

      <Example title="Encoding Example for the Ternary Golay Code">
        <p>
          Encode the message <InlineMath>{`m = (1, 2, 0, 1, 0, 2)`}</InlineMath>:
        </p>
        <MathBlock>{`m(x) = 1 + 2x + x^3 + 2x^5`}</MathBlock>
        <p className="mt-2">
          <strong>Non-systematic encoding:</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
c(x) &= m(x) \\cdot g(x) \\\\
&= (1 + 2x + x^3 + 2x^5)(x^5 + 2x^4 + 2x^3 + x^2 + 1) \\\\
&= x^{10} + 2x^9 + 2x^8 + x^7 + 1 + 2x^6 + x^5 + x^4 + 2x^3 + 2x \\\\
&\\quad + x^8 + 2x^7 + 2x^6 + x^5 + x^3 + 2x^{10} + x^9 + x^8 + 2x^7 + 2x^5 \\\\
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          After combining terms (mod 3):
        </p>
        <MathBlock>{`c(x) = 1 + 2x + 2x^3 + x^4 + 2x^6 + x^8 + 2x^9`}</MathBlock>
        <p className="mt-2">
          As a vector: <InlineMath>{`\\mathbf{c} = (1, 2, 0, 2, 1, 0, 2, 0, 1, 2, 0)`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Syndrome Decoding for QR Codes</h2>

      <Example title="Decoding the [7, 4, 3] Code">
        <p>
          Suppose we receive <InlineMath>{`\\mathbf{r} = (1, 1, 0, 1, 0, 1, 1)`}</InlineMath>,
          which corresponds to <InlineMath>{`r(x) = 1 + x + x^3 + x^5 + x^6`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Step 1: Compute syndrome.</strong>
        </p>
        <MathBlock>{`\\begin{aligned}
s(x) &= r(x) \\mod g(x) \\\\
&= (1 + x + x^3 + x^5 + x^6) \\mod (x^3 + x + 1)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Using <InlineMath>{`x^3 \equiv x + 1 \pmod\\{g(x)\\}`}</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
x^6 &\\equiv (x + 1)^2 = x^2 + 1 \\\\
x^5 &\\equiv x(x + 1) + x \\cdot 1 = x^2 + x + x = x^2 \\\\
x^3 &\\equiv x + 1
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So:
        </p>
        <MathBlock>{`s(x) = 1 + x + (x + 1) + x^2 + (x^2 + 1) = x`}</MathBlock>
        <p className="mt-2">
          <strong>Step 2: Find error.</strong> The syndrome <InlineMath>{`s(x) = x`}</InlineMath>
          corresponds to error polynomial <InlineMath>{`e(x) = x`}</InlineMath>, meaning an error
          in position 1.
        </p>
        <p className="mt-2">
          <strong>Step 3: Correct.</strong> The corrected codeword is:
        </p>
        <MathBlock>{`c(x) = r(x) + e(x) = 1 + x^3 + x^5 + x^6`}</MathBlock>
        <p className="mt-2">
          As a vector: <InlineMath>{`\\mathbf{c} = (1, 0, 0, 1, 0, 1, 1)`}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Summary of QR Code Examples">
        <p>
          The key steps in constructing a QR code are:
        </p>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Verify that <InlineMath>{`s`}</InlineMath> is a quadratic residue mod <InlineMath>{`p`}</InlineMath></li>
          <li>Compute the set <InlineMath>{`Q`}</InlineMath> of quadratic residues</li>
          <li>Find a primitive <InlineMath>{`p`}</InlineMath>th root of unity in an extension field</li>
          <li>Compute the generator polynomial as the product over roots indexed by <InlineMath>{`Q`}</InlineMath></li>
          <li>Verify by factoring <InlineMath>{`x^p - 1`}</InlineMath></li>
        </ol>
      </Callout>
    </LessonLayout>
  );
}
