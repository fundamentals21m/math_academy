import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <p>
        In this section, we introduce cyclotomic cosets, which provide an elegant method for
        factoring <InlineMath>{`X^n - 1`}</InlineMath> over finite fields. This technique partitions the
        exponents into equivalence classes that correspond to irreducible factors.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cyclotomic Cosets</h2>

      <Definition title="Multiplicative Order and Cyclotomic Cosets">
        <p>
          Let <InlineMath>{`p`}</InlineMath> be a prime, <InlineMath>{`n`}</InlineMath> a positive integer not
          divisible by <InlineMath>{`p`}</InlineMath>, and <InlineMath>{`q`}</InlineMath> a power of{' '}
          <InlineMath>{`p`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`\\gcd(n, q) = 1`}</InlineMath>, there exists a smallest positive integer{' '}
          <InlineMath>{`m`}</InlineMath> such that <InlineMath>{`q^m \\equiv 1 \\pmod{n}`}</InlineMath>. This{' '}
          <InlineMath>{`m`}</InlineMath> is called the <strong>multiplicative order</strong> of{' '}
          <InlineMath>{`q`}</InlineMath> modulo <InlineMath>{`n`}</InlineMath>.
        </p>
        <p className="mt-2">
          In <InlineMath>{`S = \\{0, 1, 2, \\ldots, n-1\\}`}</InlineMath>, define the relation{' '}
          <InlineMath>{`a \\sim b`}</InlineMath> if <InlineMath>{`a \\equiv bq^i \\pmod{n}`}</InlineMath> for
          some <InlineMath>{`i`}</InlineMath>. Each equivalence class is called a{' '}
          <strong>cyclotomic coset</strong> (or <strong>q-cyclotomic class</strong>) modulo{' '}
          <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\\text{GF}(q)`}</InlineMath>.
        </p>
        <p className="mt-2">
          The cyclotomic coset containing <InlineMath>{`s \\in S`}</InlineMath> is:
        </p>
        <MathBlock>{`C_s = \\{s, qs, \\ldots, q^{m_s - 1}s\\}`}</MathBlock>
        <p>
          where <InlineMath>{`m_s`}</InlineMath> is the smallest positive integer with{' '}
          <InlineMath>{`sq^{m_s} \\equiv s \\pmod{n}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Cyclotomic Cosets Modulo 7 (q = 2)">
        <p>For <InlineMath>{`n = 7`}</InlineMath>, <InlineMath>{`q = 2`}</InlineMath>:</p>
        <MathBlock>{`C_0 = \\{0\\}`}</MathBlock>
        <MathBlock>{`C_1 = \\{1, 2, 4\\}`}</MathBlock>
        <MathBlock>{`C_3 = \\{3, 6, 5\\}`}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>{`m_1 = 3`}</InlineMath> since <InlineMath>{`2^3 = 8 \\equiv 1 \\pmod{7}`}</InlineMath>,
          so the multiplicative order of 2 modulo 7 is 3.
        </p>
      </Example>

      <Example title="Cyclotomic Cosets Modulo 15 (q = 2)">
        <p>For <InlineMath>{`n = 15`}</InlineMath>, <InlineMath>{`q = 2`}</InlineMath>:</p>
        <MathBlock>{`C_0 = \\{0\\}`}</MathBlock>
        <MathBlock>{`C_1 = \\{1, 2, 4, 8\\}`}</MathBlock>
        <MathBlock>{`C_3 = \\{3, 6, 12, 9\\}`}</MathBlock>
        <MathBlock>{`C_5 = \\{5, 10\\}`}</MathBlock>
        <MathBlock>{`C_7 = \\{7, 14, 13, 11\\}`}</MathBlock>
      </Example>

      <Theorem
        title="Size of Cyclotomic Cosets"
        proof={
          <>
            <p>
              Since <InlineMath>{`q^m \equiv 1 \pmod\\{n\\}`}</InlineMath>, we have{' '}
              <InlineMath>{`sq^m \equiv s \pmod\\{n\\}`}</InlineMath>. Also,{' '}
              <InlineMath>{`sq^\\{m_s\\} \equiv s \pmod\\{n\\}`}</InlineMath>.
            </p>
            <p className="mt-2">Therefore:</p>
            <MathBlock>{`sq^\\{m_s\\}(q^\\{m - m_s\\} - 1) \\equiv 0 \\pmod\\{n\\}`}</MathBlock>
            <p>
              Since <InlineMath>{`\\gcd(s, n) = 1`}</InlineMath>, we have{' '}
              <InlineMath>{`q^\\{m - m_s\\} - 1 \equiv 0 \pmod\\{n\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              But <InlineMath>{`m`}</InlineMath> is the smallest positive integer with this property,
              so <InlineMath>{`m = m_s`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`s`}</InlineMath> is relatively prime to <InlineMath>{`n`}</InlineMath>, then{' '}
          <InlineMath>{`C_s`}</InlineMath> has <InlineMath>{`m`}</InlineMath> elements, where{' '}
          <InlineMath>{`m`}</InlineMath> is the multiplicative order of <InlineMath>{`q`}</InlineMath> modulo{' '}
          <InlineMath>{`n`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Minimal Polynomials from Cyclotomic Cosets</h2>

      <Theorem
        title="Minimal Polynomials via Cyclotomic Cosets"
        proof={
          <>
            <p>
              Let <InlineMath>{`M_s(X)`}</InlineMath> denote the minimal polynomial of{' '}
              <InlineMath>{`\\alpha^s`}</InlineMath> over <InlineMath>{`\\text{GF}(p)`}</InlineMath>. Since
              elements <InlineMath>{`\\beta`}</InlineMath> and <InlineMath>{`\\beta^p`}</InlineMath> of{' '}
              <InlineMath>{`\\text{GF}(p^m)`}</InlineMath> have the same minimal polynomial over{' '}
              <InlineMath>{`\\text{GF}(p)`}</InlineMath>, we have:
            </p>
            <MathBlock>{`\\deg \\prod_{'\\{i \\in C_s\\}'} (X - \\alpha^i) \\leq \\deg M_s(X)`}</MathBlock>
            <p className="mt-2">
              Let <InlineMath>{`C_s(\alpha) = \{'{'} \alpha^s, \alpha^\\{ps\\}, \ldots, \alpha^\\{sp^{m_s - 1\\}'} \{'}'}`}</InlineMath>.
              Since <InlineMath>{`sp^\\{m_s\\} \equiv s \pmod\\{n\\}`}</InlineMath>, we have{' '}
              <InlineMath>{`\alpha^\\{sp^{m_s\\}'} = \alpha^s`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore <InlineMath>{`C_s(\\alpha)^p = C_s(\\alpha)`}</InlineMath>. If{' '}
              <InlineMath>{`\sigma_1, \ldots, \sigma_\\{m_s\\}`}</InlineMath> are the symmetric
              polynomials in the elements of <InlineMath>{`C_s(\\alpha)`}</InlineMath>, then{' '}
              <InlineMath>{`\\sigma_i^p = \\sigma_i`}</InlineMath>, so{' '}
              <InlineMath>{`\sigma_i \in \\text{GF}(p)`}</InlineMath>.
            </p>
            <p className="mt-2">
              This means <InlineMath>{`\prod_{'\{i \in C_s\}'} (X - \alpha^i)`}</InlineMath> is a
              polynomial over <InlineMath>{`\\text{GF}(p)`}</InlineMath> with <InlineMath>{`\\alpha^s`}</InlineMath>
              as a root. Hence <InlineMath>{`M_s(X)`}</InlineMath> divides it, and since both are monic:
            </p>
            <MathBlock>{`M_s(X) = \\prod_{'\\{i \\in C_s\\}'} (X - \\alpha^i)`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{`C_s`}</InlineMath> is the cyclotomic coset mod <InlineMath>{`n`}</InlineMath> over{' '}
          <InlineMath>{`\\text{GF}(p)`}</InlineMath> containing the integer <InlineMath>{`s`}</InlineMath>,
          and <InlineMath>{`\\alpha`}</InlineMath> is a primitive <InlineMath>{`n`}</InlineMath>th root of unity
          in <InlineMath>{`\\text{GF}(p^m)`}</InlineMath>, then:
        </p>
        <MathBlock>{`M_s(X) = \\prod_{'\\{i \\in C_s\\}'} (X - \\alpha^i)`}</MathBlock>
        <p>is the minimal polynomial of <InlineMath>{`\\alpha^s`}</InlineMath> over <InlineMath>{`\\text{GF}(p)`}</InlineMath>.</p>
      </Theorem>

      <Callout type="success" title="Corollary: Factorization of X^n - 1">
        <MathBlock>{`X^n - 1 = \\prod_s M_s(X)`}</MathBlock>
        <p>
          where <InlineMath>{`s`}</InlineMath> runs over a set of representatives of cyclotomic cosets
          modulo <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\\text{GF}(p)`}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Detailed Examples</h2>

      <Example title="Factoring X^9 + 1 over GF(2)">
        <p>
          The least <InlineMath>{`m`}</InlineMath> such that <InlineMath>{`9 | 2^m - 1`}</InlineMath> is 6.
          We construct <InlineMath>{`\\text{GF}(64)`}</InlineMath> using the irreducible polynomial{' '}
          <InlineMath>{`X^6 + X + 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`\\alpha = X + (X^6 + X + 1)`}</InlineMath>. Then{' '}
          <InlineMath>{`\\beta = \\alpha^7`}</InlineMath> is a primitive 9th root of unity.
        </p>
        <p className="mt-2">The cyclotomic cosets modulo 9 over GF(2) are:</p>
        <MathBlock>{`C_0 = \\{0\\}, \\quad C_1 = \\{1, 2, 4, 8, 7, 5\\}, \\quad C_3 = \\{3, 6\\}`}</MathBlock>
        <p className="mt-2">Then:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><InlineMath>{`M_0(X) = X + 1`}</InlineMath></li>
          <li><InlineMath>{`M_3(X) = X^2 + X + 1`}</InlineMath></li>
          <li><InlineMath>{`M_1(X) = X^6 + X^3 + 1`}</InlineMath> (since <InlineMath>{`\\beta^6 + \\beta^3 + 1 = 0`}</InlineMath>)</li>
        </ul>
        <p className="mt-2">Hence:</p>
        <MathBlock>{`X^9 + 1 = (X + 1)(X^2 + X + 1)(X^6 + X^3 + 1)`}</MathBlock>
      </Example>

      <Example title="Factoring X^13 - 1 over GF(3)">
        <p>
          The order of 3 modulo 13 is 3, so we construct <InlineMath>{`\\text{GF}(27)`}</InlineMath>
          using <InlineMath>{`X^3 + 2X + 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`\\alpha = X + (X^3 + 2X + 1)`}</InlineMath>. Then{' '}
          <InlineMath>{`\\beta = \\alpha^2`}</InlineMath> is a primitive 13th root of unity.
        </p>
        <p className="mt-2">The cyclotomic cosets modulo 13 over GF(3) are:</p>
        <MathBlock>{`C_0 = \\{0\\}, \\quad C_1 = \\{1, 3, 9\\}, \\quad C_2 = \\{2, 6, 5\\}`}</MathBlock>
        <MathBlock>{`C_4 = \\{4, 12, 10\\}, \\quad C_7 = \\{7, 8, 11\\}`}</MathBlock>
        <p className="mt-2">Through computation of symmetric polynomials:</p>
        <MathBlock>{`M_1(X) = X^3 + X^2 + X + 2`}</MathBlock>
        <MathBlock>{`M_2(X) = X^3 + X^2 + 2`}</MathBlock>
        <MathBlock>{`M_4(X) = X^3 + 2X^2 - X + 2`}</MathBlock>
        <MathBlock>{`M_7(X) = X^3 + 2X + 2`}</MathBlock>
        <p className="mt-2">Hence:</p>
        <MathBlock>{`X^{13} - 1 = (X - 1)(X^3 + X^2 + X + 2)(X^3 + X^2 + 2)(X^3 + 2X + 2)(X^3 + 2X^2 + 2X + 2)`}</MathBlock>
      </Example>

      <Callout type="info" title="Application to Cyclic Codes">
        <p>
          The cyclotomic coset method is particularly useful for constructing BCH codes and
          Reed-Solomon codes. By choosing roots from specific cyclotomic cosets, we can design
          codes with guaranteed minimum distances.
        </p>
      </Callout>
    </LessonLayout>
  );
}
