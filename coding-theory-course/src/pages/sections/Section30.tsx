import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <p>
        Idempotent elements provide an elegant algebraic approach to cyclic codes. In this
        section, we study the idempotent generators for quadratic residue codes, which offer
        both theoretical insights and practical computational advantages.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Idempotents in Cyclic Codes</h2>

      <Definition title="Idempotent Element">
        <p>
          An element <InlineMath>{`e(x)`}</InlineMath> in a ring <InlineMath>{`R`}</InlineMath> is called
          an <strong>idempotent</strong> if:
        </p>
        <MathBlock>{`e(x)^2 = e(x)`}</MathBlock>
        <p className="mt-2">
          In the context of cyclic codes, we work in the ring{' '}
          <InlineMath>{`\\mathcal{R} = \\text{GF}(q)[x]/\langle x^n - 1 \rangle`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Idempotent Generator of a Cyclic Code"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be a cyclic code with generator
              polynomial <InlineMath>{`g(x)`}</InlineMath> and check polynomial{' '}
              <InlineMath>{`h(x)`}</InlineMath> where <InlineMath>{`g(x)h(x) = x^n - 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`\\gcd(g(x), h(x)) = 1`}</InlineMath>, there exist polynomials{' '}
              <InlineMath>{`a(x)`}</InlineMath> and <InlineMath>{`b(x)`}</InlineMath> such that:
            </p>
            <MathBlock>{`a(x)g(x) + b(x)h(x) = 1`}</MathBlock>
            <p className="mt-2">
              Let <InlineMath>{`e(x) = b(x)h(x) \pmod\\{x^n - 1\\}`}</InlineMath>. Then:
            </p>
            <MathBlock>{`e(x) \\equiv 1 - a(x)g(x) \\pmod\\{x^n - 1\\}`}</MathBlock>
            <p className="mt-2">
              This implies <InlineMath>{`e(x) \equiv 1 \pmod\\{g(x)\\}`}</InlineMath>, so{' '}
              <InlineMath>{`e(x) \in \\mathcal{C}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Also, <InlineMath>{`e(x)^2 - e(x) = e(x)(e(x) - 1)`}</InlineMath> is divisible by both{' '}
              <InlineMath>{`h(x)`}</InlineMath> and <InlineMath>{`g(x)`}</InlineMath>, hence by{' '}
              <InlineMath>{`x^n - 1`}</InlineMath>. So <InlineMath>{`e(x)^2 = e(x)`}</InlineMath> in{' '}
              <InlineMath>{`\\mathcal{R}`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every cyclic code <InlineMath>{`\\mathcal{C}`}</InlineMath> in{' '}
          <InlineMath>{`\\mathcal{R} = \\text{GF}(q)[x]/\langle x^n - 1 \rangle`}</InlineMath>
          has a unique <strong>idempotent generator</strong> <InlineMath>{`e(x)`}</InlineMath> such
          that:
        </p>
        <MathBlock>{`\\\mathcal{C} = \\langle e(x) \\rangle`}</MathBlock>
      </Theorem>

      <Definition title="Primitive Idempotent">
        <p>
          An idempotent <InlineMath>{`e(x)`}</InlineMath> is called <strong>primitive</strong> if
          it cannot be written as a sum of two nonzero orthogonal idempotents:
        </p>
        <MathBlock>{`e(x) = e_1(x) + e_2(x) \\text{ with } e_1(x)e_2(x) = 0`}</MathBlock>
        <p className="mt-2">
          Primitive idempotents correspond to minimal cyclic codes.
        </p>
      </Definition>

      <h2 className="text-2xl font-bold mt-8 mb-4">Idempotents for QR Codes</h2>

      <p>
        For quadratic residue codes, the idempotent generators have a beautiful explicit form
        related to quadratic Gauss sums.
      </p>

      <Definition title="Quadratic Gauss Sum">
        <p>
          Let <InlineMath>{`p`}</InlineMath> be an odd prime and <InlineMath>{`\\alpha`}</InlineMath> a
          primitive <InlineMath>{`p`}</InlineMath>th root of unity. The <strong>quadratic Gauss
          sum</strong> is:
        </p>
        <MathBlock>{`\\tau = \\sum_\\{i=1\\}^\\{p-1\\} \\chi(i) \\alpha^i`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\chi(i)`}</InlineMath> is the Legendre symbol.
        </p>
      </Definition>

      <Theorem
        title="Value of the Gauss Sum"
        proof={
          <>
            <p>
              Consider <InlineMath>{`\\tau^2`}</InlineMath>:
            </p>
            <MathBlock>{`\\tau^2 = \\sum_\\{i,j\\} \\chi(i)\\chi(j) \\alpha^\\{i+j\\} = \\sum_\\{i,j\\} \\chi(ij) \\alpha^\\{i+j\\}`}</MathBlock>
            <p className="mt-2">
              Substituting <InlineMath>{`j = ik`}</InlineMath> for <InlineMath>{`k`}</InlineMath> ranging
              over non-zero residues:
            </p>
            <MathBlock>{`\\tau^2 = \\sum_\\{i,k\\} \\chi(k) \\alpha^\\{i(1+k)\\}`}</MathBlock>
            <p className="mt-2">
              For <InlineMath>{`k \\neq -1`}</InlineMath>, the inner sum over{' '}
              <InlineMath>{`i`}</InlineMath> gives zero. For <InlineMath>{`k = -1`}</InlineMath>:
            </p>
            <MathBlock>{`\\tau^2 = \\chi(-1) \\cdot (p - 1) = \\chi(-1) \\cdot p \\cdot \\frac\\{p-1\\}\\{p\\}`}</MathBlock>
            <p className="mt-2">
              More careful analysis shows <InlineMath>{`\\tau^2 = \\chi(-1) \\cdot p`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The quadratic Gauss sum satisfies:
        </p>
        <MathBlock>{`\\tau^2 = \\chi(-1) \\cdot p = (-1)^\\{{(p-1)/2\\}'} \\cdot p`}</MathBlock>
        <p className="mt-2">
          Specifically:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <InlineMath>{`\\tau^2 = p`}</InlineMath> if{' '}
            <InlineMath>{`p \equiv 1 \pmod\\{4\\}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\tau^2 = -p`}</InlineMath> if{' '}
            <InlineMath>{`p \equiv 3 \pmod\\{4\\}`}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Definition title="Idempotent for QR Codes">
        <p>
          For the QR code <InlineMath>{`\\mathcal{F}`}</InlineMath> of length{' '}
          <InlineMath>{`p`}</InlineMath> over <InlineMath>{`\\text{GF}(s)`}</InlineMath>, define:
        </p>
        <MathBlock>{`\\theta_Q = \\sum_\\{i \\in Q\\} \\alpha^i \\quad \\\text{and} \\quad \\theta_N = \\sum_\\{j \\in N\\} \\alpha^j`}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>{`\\theta_Q + \\theta_N = -1`}</InlineMath> (sum of all primitive{' '}
          <InlineMath>{`p`}</InlineMath>th roots) and{' '}
          <InlineMath>{`\\tau = \\theta_Q - \\theta_N`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Idempotent Generators for QR Codes"
        proof={
          <>
            <p>
              From <InlineMath>{`\\theta_Q + \\theta_N = -1`}</InlineMath> and{' '}
              <InlineMath>{`\\tau = \\theta_Q - \\theta_N`}</InlineMath>, we get:
            </p>
            <MathBlock>{`\\theta_Q = \\frac\\{-1 + \\tau\\}\\{2\\} \\quad \\\text{and} \\quad \\theta_N = \\frac\\{-1 - \\tau\\}\\{2\\}`}</MathBlock>
            <p className="mt-2">
              The idempotents can be computed by finding the inverse of 2 in{' '}
              <InlineMath>{`\\text{GF}(s)`}</InlineMath> and expressing{' '}
              <InlineMath>{`\\tau`}</InlineMath> in terms of the polynomial basis.
            </p>
            <p className="mt-2">
              Alternatively, using the fact that <InlineMath>{`\\theta_Q`}</InlineMath> and{' '}
              <InlineMath>{`\\theta_N`}</InlineMath> satisfy certain polynomial relations, one can
              derive explicit formulas for the idempotents.
            </p>
          </>
        }
      >
        <p>
          The idempotent generator for the QR code <InlineMath>{`\\mathcal{F}`}</InlineMath>
          (generated by <InlineMath>{`q(x)`}</InlineMath>) is:
        </p>
        <MathBlock>{`e_Q(x) = \\frac\\{1\\}\\{p\\} \\sum_\\{i \\in Q\\} \\sum_\\{j=0\\}^\\{p-1\\} \\alpha^\\{-ij\\} x^j`}</MathBlock>
        <p className="mt-2">
          Similarly, the idempotent for <InlineMath>{`\\mathcal{N}`}</InlineMath> is:
        </p>
        <MathBlock>{`e_N(x) = \\frac\\{1\\}\\{p\\} \\sum_\\{i \\in N\\} \\sum_\\{j=0\\}^\\{p-1\\} \\alpha^\\{-ij\\} x^j`}</MathBlock>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Explicit Idempotent Formulas</h2>

      <Example title="Idempotent for the Binary [7, 4] QR Code">
        <p>
          For <InlineMath>{`p = 7`}</InlineMath>, <InlineMath>{`s = 2`}</InlineMath>, and{' '}
          <InlineMath>{`Q = \\{1, 2, 4\\}`}</InlineMath>:
        </p>
        <MathBlock>{`e_Q(x) = x + x^2 + x^4`}</MathBlock>
        <p className="mt-2">Verification that this is idempotent in <InlineMath>{`\\mathbb{F}_2[x]/\langle x^7 - 1 \rangle`}</InlineMath>:</p>
        <MathBlock>{`\\begin{aligned}
e_Q(x)^2 &= (x + x^2 + x^4)^2 \\\\
&= x^2 + x^4 + x^8 \\\\
&= x^2 + x^4 + x \\pmod{x^7 - 1} \\\\
&= e_Q(x)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          The idempotent for <InlineMath>{`\\mathcal{N}`}</InlineMath> is:
        </p>
        <MathBlock>{`e_N(x) = x^3 + x^5 + x^6`}</MathBlock>
      </Example>

      <Example title="Idempotent for the Binary Golay Code">
        <p>
          For <InlineMath>{`p = 23`}</InlineMath>, <InlineMath>{`s = 2`}</InlineMath>, and{' '}
          <InlineMath>{`Q = \\{1, 2, 3, 4, 6, 8, 9, 12, 13, 16, 18\\}`}</InlineMath>:
        </p>
        <MathBlock>{`e_Q(x) = \\sum_\\{i \\in Q\\} x^i = x + x^2 + x^3 + x^4 + x^6 + x^8 + x^9 + x^\\{12\\} + x^\\{13\\} + x^\\{16\\} + x^\\{18\\}`}</MathBlock>
        <p className="mt-2">
          This idempotent generates the [23, 12, 7] binary Golay code.
        </p>
      </Example>

      <Example title="Idempotent for the Ternary Golay Code">
        <p>
          For <InlineMath>{`p = 11`}</InlineMath>, <InlineMath>{`s = 3`}</InlineMath>, and{' '}
          <InlineMath>{`Q = \\{1, 3, 4, 5, 9\\}`}</InlineMath>:
        </p>
        <MathBlock>{`e_Q(x) = -\\sum_\\{i \\in Q\\} x^i = -(x + x^3 + x^4 + x^5 + x^9) = 2x + 2x^3 + 2x^4 + 2x^5 + 2x^9`}</MathBlock>
        <p className="mt-2">
          (In <InlineMath>{`\\text{GF}(3)`}</InlineMath>, <InlineMath>{`-1 = 2`}</InlineMath>.)
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of QR Code Idempotents</h2>

      <Theorem
        title="Orthogonality of QR Idempotents"
        proof={
          <>
            <p>
              Since <InlineMath>{`Q \\cap N = \\emptyset`}</InlineMath> and{' '}
              <InlineMath>{`Q \cup N = \\{1, 2, \ldots, p-1\\}'`}</InlineMath>:
            </p>
            <MathBlock>{`e_Q(x) + e_N(x) + e_0 = 1`}</MathBlock>
            <p className="mt-2">
              where <InlineMath>{`e_0 = \frac\\{1\\}\\{p\\}(1 + x + x^2 + \cdots + x^\\{p-1\\})`}</InlineMath>
              is the idempotent for the repetition code.
            </p>
            <p className="mt-2">
              Since these are orthogonal idempotents corresponding to the complete factorization
              of <InlineMath>{`x^p - 1`}</InlineMath>, we have{' '}
              <InlineMath>{`e_Q(x) \\cdot e_N(x) = 0`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The idempotents <InlineMath>{`e_Q(x)`}</InlineMath> and <InlineMath>{`e_N(x)`}</InlineMath> are
          orthogonal:
        </p>
        <MathBlock>{`e_Q(x) \\cdot e_N(x) = 0 \\text{ in } \\\mathcal{R}`}</MathBlock>
      </Theorem>

      <Theorem
        title="Sum of All Idempotents"
        proof={
          <>
            <p>
              The complete set of primitive idempotents corresponds to the complete factorization
              of <InlineMath>{`x^p - 1 = (x - 1)q(x)n(x)`}</InlineMath>.
            </p>
            <p className="mt-2">
              The identity element in <InlineMath>{`\\mathcal{R}`}</InlineMath> decomposes as
              the sum of all primitive idempotents.
            </p>
          </>
        }
      >
        <p>
          In <InlineMath>{`\\text{GF}(s)[x]/\langle x^p - 1 \rangle`}</InlineMath>:
        </p>
        <MathBlock>{`e_0 + e_Q(x) + e_N(x) = 1`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`e_0`}</InlineMath> is the idempotent for{' '}
          <InlineMath>{`\\langle x - 1 \\rangle`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Computational Advantage of Idempotents">
        <p>
          Idempotents provide a direct way to encode: given a message polynomial{' '}
          <InlineMath>{`m(x)`}</InlineMath>, the codeword is simply{' '}
          <InlineMath>{`c(x) = m(x) \\cdot e(x)`}</InlineMath>. No polynomial division is required!
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Relationship to Generator Polynomials</h2>

      <Theorem
        title="Idempotent and Generator Polynomial"
        proof={
          <>
            <p>
              Let <InlineMath>{`g(x)`}</InlineMath> be the generator polynomial and{' '}
              <InlineMath>{`h(x) = (x^n - 1)/g(x)`}</InlineMath> the check polynomial.
            </p>
            <p className="mt-2">
              The idempotent <InlineMath>{`e(x)`}</InlineMath> satisfies{' '}
              <InlineMath>{`e(x) \equiv 0 \pmod\\{h(x)\\}`}</InlineMath> and{' '}
              <InlineMath>{`e(x) \equiv 1 \pmod\\{g(x)\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              By the Chinese Remainder Theorem, such an <InlineMath>{`e(x)`}</InlineMath> exists
              uniquely and generates the same ideal as <InlineMath>{`g(x)`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`g(x)`}</InlineMath> is the generator polynomial for a cyclic code and{' '}
          <InlineMath>{`e(x)`}</InlineMath> is its idempotent generator, then:
        </p>
        <MathBlock>{`g(x) | e(x) \\text{ and } e(x) | g(x)^k \\text{ for some } k`}</MathBlock>
        <p className="mt-2">
          In <InlineMath>{`\\mathcal{R}`}</InlineMath>, both{' '}
          <InlineMath>{`\\langle g(x) \\rangle = \\langle e(x) \\rangle`}</InlineMath>.
        </p>
      </Theorem>
    </LessonLayout>
  );
}
