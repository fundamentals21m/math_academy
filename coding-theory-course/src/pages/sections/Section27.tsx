import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <p>
        Quadratic Residue (QR) codes are an important family of cyclic codes with remarkable
        algebraic properties. They include some famous codes like the Golay codes and have
        strong connections to number theory through quadratic residues.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Quadratic Residues</h2>

      <Definition title="Quadratic Residues and Non-Residues">
        <p>
          Let <InlineMath>{`p`}</InlineMath> be an odd prime. An integer <InlineMath>{`a`}</InlineMath> is
          called a <strong>quadratic residue</strong> modulo <InlineMath>{`p`}</InlineMath> if{' '}
          <InlineMath>{`\\gcd(a, p) = 1`}</InlineMath> and there exists an integer{' '}
          <InlineMath>{`x`}</InlineMath> such that:
        </p>
        <MathBlock>{`x^2 \\equiv a \\pmod\\{p\\}`}</MathBlock>
        <p className="mt-2">
          If no such <InlineMath>{`x`}</InlineMath> exists, then <InlineMath>{`a`}</InlineMath> is called
          a <strong>quadratic non-residue</strong> modulo <InlineMath>{`p`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`Q`}</InlineMath> denote the set of quadratic residues mod{' '}
          <InlineMath>{`p`}</InlineMath> and <InlineMath>{`N`}</InlineMath> the set of quadratic non-residues.
          Then <InlineMath>{`|Q| = |N| = (p-1)/2`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Legendre Symbol">
        <p>The <strong>Legendre symbol</strong> <InlineMath>{`\\chi(i)`}</InlineMath> is defined by:</p>
        <MathBlock>{`\\chi(i) = \\begin{cases}
0 & \\text{if } i \\text{ is a multiple of } p \\\\
1 & \\text{if } i \\text{ is a quadratic residue mod } p \\\\
-1 & \\text{if } i \\text{ is a non-residue mod } p
\\end{cases}`}</MathBlock>
        <p className="mt-2">
          The Legendre symbol is multiplicative: <InlineMath>{`\\chi(i)\\chi(j) = \\chi(ij)`}</InlineMath>.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold mt-8 mb-4">Construction of QR Codes</h2>

      <p>
        Let <InlineMath>{`p`}</InlineMath> be an odd prime and <InlineMath>{`s`}</InlineMath> another prime
        which is a quadratic residue mod <InlineMath>{`p`}</InlineMath>. Since{' '}
        <InlineMath>{`s \\in Q`}</InlineMath>, both <InlineMath>{`Q`}</InlineMath> and{' '}
        <InlineMath>{`N`}</InlineMath> are closed under multiplication by <InlineMath>{`s`}</InlineMath>.
        Therefore, <InlineMath>{`Q`}</InlineMath> is partitioned as a disjoint union of cyclotomic
        cosets modulo <InlineMath>{`p`}</InlineMath> under multiplication by <InlineMath>{`s`}</InlineMath>.
      </p>

      <p className="mt-4">
        Let <InlineMath>{`\\alpha`}</InlineMath> be a primitive <InlineMath>{`p`}</InlineMath>th root of
        unity in some extension of <InlineMath>{`\\text{GF}(s)`}</InlineMath>. Define:
      </p>
      <MathBlock>{`q(x) = \\prod_{'\\{i \\in Q\\}'} (x - \\alpha^i) \\quad \\\text{and} \\quad n(x) = \\prod_{'\\{j \\in N\\}'} (x - \\alpha^j)`}</MathBlock>

      <Theorem
        title="Factorization of X^p - 1"
        proof={
          <>
            <p>
              Since every <InlineMath>{`\\alpha^i`}</InlineMath> is a <InlineMath>{`p`}</InlineMath>th root
              of unity, every root of <InlineMath>{`q(x)`}</InlineMath> and every root of{' '}
              <InlineMath>{`n(x)`}</InlineMath> is a root of <InlineMath>{`x^p - 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore <InlineMath>{`q(x)`}</InlineMath> and <InlineMath>{`n(x)`}</InlineMath> both divide{' '}
              <InlineMath>{`x^p - 1`}</InlineMath>. Since <InlineMath>{`Q \\cap N = \\emptyset`}</InlineMath>,
              we have <InlineMath>{`q(x)n(x) | x^p - 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Also <InlineMath>{`x - 1 | x^p - 1`}</InlineMath> and 1 is neither a root of{' '}
              <InlineMath>{`q(x)`}</InlineMath> nor of <InlineMath>{`n(x)`}</InlineMath>. Therefore:
            </p>
            <MathBlock>{`(x - 1)q(x)n(x) | (x^p - 1)`}</MathBlock>
            <p className="mt-2">
              Both polynomials are monic and have the same degree <InlineMath>{`p`}</InlineMath>, hence
              they are equal.
            </p>
          </>
        }
      >
        <MathBlock>{`x^p - 1 = (x - 1)q(x)n(x)`}</MathBlock>
      </Theorem>

      <Definition title="Quadratic Residue Codes">
        <p>
          Let <InlineMath>{`\\mathcal{R} = \\text{GF}(s)[x]/\langle x^p - 1 \rangle`}</InlineMath>.
          The <strong>quadratic residue codes</strong> are the cyclic codes of length{' '}
          <InlineMath>{`p`}</InlineMath> over <InlineMath>{`\\text{GF}(s)`}</InlineMath> defined as follows:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <InlineMath>{`\\mathcal{F}`}</InlineMath>: generated by <InlineMath>{`q(x)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\mathcal{N}`}</InlineMath>: generated by <InlineMath>{`n(x)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\overline\\{\mathcal{F\\}'}`}</InlineMath>: generated by{' '}
            <InlineMath>{`(x - 1)q(x)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\overline\\{\mathcal{N\\}'}`}</InlineMath>: generated by{' '}
            <InlineMath>{`(x - 1)n(x)`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          The codes <InlineMath>{`\overline\\{\mathcal{F\\}'}`}</InlineMath> and{' '}
          <InlineMath>{`\overline\\{\mathcal{N\\}'}`}</InlineMath> are called{' '}
          <strong>expurgated</strong> QR codes.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of QR Codes</h2>

      <p>Since:</p>
      <MathBlock>{`\\deg q(x) = \\deg n(x) = \\frac\\{p-1\\}\\{2\\}`}</MathBlock>
      <p>
        both <InlineMath>{`\\mathcal{F}`}</InlineMath> and <InlineMath>{`\\mathcal{N}`}</InlineMath>
        are linear codes over <InlineMath>{`\\text{GF}(s)`}</InlineMath> of dimension:
      </p>
      <MathBlock>{`p - \\frac\\{p-1\\}\\{2\\} = \\frac\\{p+1\\}\\{2\\}`}</MathBlock>
      <p className="mt-2">
        Similarly, <InlineMath>{`\overline\\{\mathcal{F\\}'}`}</InlineMath> and{' '}
        <InlineMath>{`\overline\\{\mathcal{N\\}'}`}</InlineMath> are linear codes of dimension{' '}
        <InlineMath>{`(p-1)/2`}</InlineMath>.
      </p>

      <Theorem
        title="Equivalence of QR Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`n`}</InlineMath> be a fixed quadratic non-residue mod{' '}
              <InlineMath>{`p`}</InlineMath>. There exists a positive integer <InlineMath>{`r`}</InlineMath>
              such that <InlineMath>{`nr \equiv 1 \pmod\\{p\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since 1 is a quadratic residue and <InlineMath>{`n`}</InlineMath> is a non-residue,{' '}
              <InlineMath>{`r`}</InlineMath> must also be a non-residue. For any{' '}
              <InlineMath>{`i \\in Q`}</InlineMath>, the product <InlineMath>{`ir`}</InlineMath> is a non-residue.
            </p>
            <p className="mt-2">Now:</p>
            <MathBlock>{`q(x^n) = \\prod_{'\\{i \\in Q\\}'} (x^n - \\alpha^i)`}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{`\alpha^i = \alpha^\\{nri\\} = (\alpha^\\{ri\\})^n`}</InlineMath>,
              we have <InlineMath>{`\alpha^\\{ri\\}`}</InlineMath> (with <InlineMath>{`ri \\in N`}</InlineMath>)
              as a root of <InlineMath>{`q(x^n)`}</InlineMath>. Thus <InlineMath>{`n(x) | q(x^n)`}</InlineMath>.
            </p>
            <p className="mt-2">
              The map <InlineMath>{`x \\mapsto x^n`}</InlineMath> induces a permutation of{' '}
              <InlineMath>{`\\{0, 1, \\ldots, p-1\\}`}</InlineMath>, so the map{' '}
              <InlineMath>{`\\mathcal{F} \to \\mathcal{N}`}</InlineMath> is bijective.
            </p>
          </>
        }
      >
        <p>
          The quadratic residue codes <InlineMath>{`\\mathcal{F}`}</InlineMath> and{' '}
          <InlineMath>{`\\mathcal{N}`}</InlineMath> of length <InlineMath>{`p`}</InlineMath> over{' '}
          <InlineMath>{`\\text{GF}(s)`}</InlineMath> are equivalent. Also, the expurgated codes{' '}
          <InlineMath>{`\overline\\{\mathcal{F\\}'}`}</InlineMath> and{' '}
          <InlineMath>{`\overline\\{\mathcal{N\\}'}`}</InlineMath> are equivalent.
        </p>
      </Theorem>

      <Example title="Binary QR Code of Length 7">
        <p>
          Let <InlineMath>{`s = 2`}</InlineMath> and <InlineMath>{`p = 7`}</InlineMath>. The quadratic
          residues mod 7 are <InlineMath>{`Q = \\{1, 2, 4\\}`}</InlineMath> and the non-residues
          are <InlineMath>{`N = \\{3, 5, 6\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          In <InlineMath>{`\\mathbb{B}[x]/\langle x^3 + x + 1 \rangle`}</InlineMath>, let{' '}
          <InlineMath>{`\\alpha = x + \\langle x^3 + x + 1 \\rangle`}</InlineMath>. Then{' '}
          <InlineMath>{`\\alpha`}</InlineMath> is a primitive 7th root of unity.
        </p>
        <p className="mt-2">Computing <InlineMath>{`q(x)`}</InlineMath>:</p>
        <MathBlock>{`q(x) = (x + \\alpha)(x + \\alpha^2)(x + \\alpha^4) = x^3 + x + 1`}</MathBlock>
        <p className="mt-2">And:</p>
        <MathBlock>{`x^7 + 1 = (x + 1)(x^3 + x + 1)(x^3 + x^2 + 1)`}</MathBlock>
        <p className="mt-2">
          Thus the QR code <InlineMath>{`\\mathcal{F}`}</InlineMath> is generated by{' '}
          <InlineMath>{`x^3 + x + 1`}</InlineMath> and is a [7, 4, 3] code.
        </p>
      </Example>

      <Callout type="info" title="Connection to Hamming Codes">
        <p>
          The [7, 4, 3] binary quadratic residue code is equivalent to the binary Hamming code.
          This connection extends to other QR codes and provides rich algebraic structure.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Observations</h2>

      <p>
        For the QR codes to be well-defined, we need:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>
          <InlineMath>{`p`}</InlineMath> and <InlineMath>{`s`}</InlineMath> are distinct odd primes
        </li>
        <li>
          <InlineMath>{`s`}</InlineMath> is a quadratic residue modulo <InlineMath>{`p`}</InlineMath>
        </li>
        <li>
          The polynomials <InlineMath>{`q(x)`}</InlineMath> and <InlineMath>{`n(x)`}</InlineMath> have
          coefficients in <InlineMath>{`\\text{GF}(s)`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
