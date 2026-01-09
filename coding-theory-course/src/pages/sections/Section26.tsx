import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <p>
        When factoring <InlineMath>{`X^n - 1`}</InlineMath>, Berlekamp's algorithm takes a simplified
        form. In this case, we can bypass the computation of the Q-matrix by using cyclotomic cosets
        directly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Simplified Form for <InlineMath>{`X^n - 1`}</InlineMath></h2>

      <p>
        For the polynomial <InlineMath>{`f(x) = x^n - 1`}</InlineMath>, when <InlineMath>{`\\gcd(n, q) = 1`}</InlineMath>,
        the Q-matrix has a special structure: it has exactly one non-zero entry (always 1) in every row
        and every column.
      </p>

      <Theorem
        title="Structure of Q-Matrix for X^n - 1"
        proof={
          <>
            <p>
              For <InlineMath>{`f(x) = x^n - 1`}</InlineMath>, the <InlineMath>{`i`}</InlineMath>th row
              represents <InlineMath>{`x^\\{q(i-1)\\}`}</InlineMath> modulo <InlineMath>{`x^n - 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`x^n \equiv 1 \pmod\\{x^n - 1\\}`}</InlineMath>, we have{' '}
              <InlineMath>{`x^\\{q(i-1)\\} \equiv x^j \pmod\\{x^n - 1\\}`}</InlineMath> where{' '}
              <InlineMath>{`j \equiv q(i-1) \pmod\\{n\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{`Q_\\{i+1,j+1\\} = 1`}</InlineMath> if and only if{' '}
              <InlineMath>{`qi \equiv j \pmod\\{n\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              From this structure, if <InlineMath>{`(g_0, g_1, \ldots, g_\\{n-1\\})`}</InlineMath> is in the
              null space of <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath> and{' '}
              <InlineMath>{`qi \equiv j \pmod\\{n\\}`}</InlineMath>, then <InlineMath>{`g_i = g_j`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{`f(x) = x^n - 1`}</InlineMath> with <InlineMath>{`\\gcd(n, q) = 1`}</InlineMath>:
        </p>
        <MathBlock>{`Q_\\{i+1,j+1\\} = 1 \\quad \\\text{iff} \\quad qi \\equiv j \\pmod\\{n\\}`}</MathBlock>
        <p>
          If <InlineMath>{`(g_0, g_1, \ldots, g_\\{n-1\\})`}</InlineMath> is in the null space of{' '}
          <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath>, then{' '}
          <InlineMath>{`g_j = g_i`}</InlineMath> for all <InlineMath>{`j \\in C_i`}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Cyclotomic Class Sum">
        <p>
          For a cyclotomic coset <InlineMath>{`C_i`}</InlineMath> modulo <InlineMath>{`n`}</InlineMath>
          relative to <InlineMath>{`q`}</InlineMath>, define the <strong>cyclotomic class sum</strong>:
        </p>
        <MathBlock>{`\\overline\\{C\\}_i = \\sum_{'\\{j \\in C_i\\}'} x^j`}</MathBlock>
      </Definition>

      <Theorem
        title="Factorization via Cyclotomic Class Sums"
        proof={
          <>
            <p>
              From the structure of the null space of <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath>,
              any element <InlineMath>{`g(x)`}</InlineMath> satisfying{' '}
              <InlineMath>{`f(x) | g(x)^q - g(x)`}</InlineMath> must have the form:
            </p>
            <MathBlock>{`g(x) = \\sum_i a_i \\overline\\{C\\}_i`}</MathBlock>
            <p>
              where the sum is over cyclotomic coset representatives and{' '}
              <InlineMath>{`a_i \\in F`}</InlineMath>.
            </p>
            <p className="mt-2">
              Applying Berlekamp's factorization theorem, we get irreducible factors by computing
              GCDs with <InlineMath>{`g(x) - s`}</InlineMath> for <InlineMath>{`s \\in F`}</InlineMath>.
            </p>
          </>
        }
      >
        <MathBlock>{`x^n - 1 = \\prod_{'\\{s \\in F\\}'} \\gcd(x^n - 1, g(x) - s)`}</MathBlock>
        <p>
          where <InlineMath>{`g(x)`}</InlineMath> is a linear combination of cyclotomic class sums{' '}
          <InlineMath>{`\overline\\{C\\}_i`}</InlineMath> over <InlineMath>{`F`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Detailed Examples</h2>

      <Example title="Factoring X^23 + 1 over GF(2)">
        <p>
          Let <InlineMath>{`p = 23`}</InlineMath>. The cyclotomic cosets modulo 23 relative to 2 are:
        </p>
        <MathBlock>{`C_0 = \\{{0}\\}`}</MathBlock>
        <MathBlock>{`C_1 = \\{{1, 2, 4, 8, 16, 9, 18, 13, 3, 6, 12}\\}`}</MathBlock>
        <MathBlock>{`C_5 = \\{{5, 10, 20, 17, 11, 22, 21, 19, 15, 7, 14}\\}`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`x^\\{23\\} - 1`}</InlineMath> factors as <InlineMath>{`(x - 1)`}</InlineMath>
          times two irreducible polynomials of degree 11 each.
        </p>
        <p className="mt-2">
          Using the algorithm, we compute the GCF of <InlineMath>{`x^\\{23\\} + 1`}</InlineMath> and:
        </p>
        <MathBlock>{`\\overline\\{C\\}_1 + 1 = x^\\{18\\} + x^\\{16\\} + x^\\{13\\} + x^\\{12\\} + x^9 + x^8 + x^6 + x^4 + x^3 + x^2 + x + 1`}</MathBlock>
        <p className="mt-2">After applying the Euclidean algorithm, one factor is:</p>
        <MathBlock>{`x^\\{11\\} + x^\\{10\\} + x^6 + x^5 + x^4 + x^2 + 1`}</MathBlock>
        <p className="mt-2">
          Dividing <InlineMath>{`x^\\{23\\} + 1`}</InlineMath> by <InlineMath>{`(x + 1)`}</InlineMath> times
          this factor gives the other degree-11 factor:
        </p>
        <MathBlock>{`x^\\{11\\} + x^9 + x^7 + x^6 + x^5 + x + 1`}</MathBlock>
        <p className="mt-2">Hence:</p>
        <MathBlock>{`x^\\{23\\} + 1 = (x + 1)(x^\\{11\\} + x^\\{10\\} + x^6 + x^5 + x^4 + x^2 + 1)(x^\\{11\\} + x^9 + x^7 + x^6 + x^5 + x + 1)`}</MathBlock>
      </Example>

      <Example title="Factoring X^11 - 1 over GF(3)">
        <p>The cyclotomic cosets modulo 11 relative to 3 are:</p>
        <MathBlock>{`C_0 = \\{{0}\\}, \\quad C_1 = \\{{1, 3, 9, 5, 4}\\}, \\quad C_2 = \\{{2, 6, 7, 10, 8}\\}`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`x^\\{11\\} - 1`}</InlineMath> factors as <InlineMath>{`(x - 1)`}</InlineMath>
          times two irreducible factors of degree 5 each.
        </p>
        <p className="mt-2">
          Using <InlineMath>{`g(x) = \overline\\{C\\}_1 + \overline\\{C\\}_2 + 1`}</InlineMath> and
          applying the Euclidean algorithm:
        </p>
        <MathBlock>{`x^\\{11\\} - 1 = (x - 1)(x^5 + x^4 - x^3 + x^2 - 1)(x^5 - x^3 + x^2 - x - 1)`}</MathBlock>
      </Example>

      <Example title="Factoring X^13 - 1 over GF(3)">
        <p>The cyclotomic cosets modulo 13 relative to 3 are:</p>
        <MathBlock>{`C_0 = \\{{0}\\}, \\quad C_1 = \\{{1, 3, 9}\\}, \\quad C_2 = \\{{2, 6, 5}\\}`}</MathBlock>
        <MathBlock>{`C_4 = \\{{4, 12, 10}\\}, \\quad C_7 = \\{{7, 8, 11}\\}`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`x^\\{13\\} - 1`}</InlineMath> is a product of <InlineMath>{`x - 1`}</InlineMath>
          and four irreducible polynomials of degree 3 each.
        </p>
        <p className="mt-2">
          Using different linear combinations of cyclotomic class sums with the Euclidean algorithm:
        </p>
        <MathBlock>{`x^\\{13\\} - 1 = (x - 1)(x^3 - x^2 - x - 1)(x^3 + x^2 + x - 1)(x^3 + x^2 - 1)(x^3 - x - 1)`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Special Cases for Quadratic Residue Codes</h2>

      <Example title="Factoring X^11 - 1 over GF(5)">
        <p>The cyclotomic cosets relative to 5 modulo 11 are:</p>
        <MathBlock>{`C_0 = \\{{0}\\}, \\quad C_1 = \\{{1, 5, 3, 4, 9}\\}, \\quad C_2 = \\{{2, 10, 6, 8, 7}\\}`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`x^\\{11\\} - 1`}</InlineMath> has two irreducible factors of degree 5 each
          (plus <InlineMath>{`x - 1`}</InlineMath>). Using the algorithm:
        </p>
        <MathBlock>{`x^\\{11\\} - 1 = (x - 1)(x^5 - x^4 - x^3 + x^2 - 2x - 1)(x^5 + 2x^4 - x^3 + x^2 + x - 1)`}</MathBlock>
      </Example>

      <Example title="Factoring X^37 - 1 over GF(3)">
        <p>The cyclotomic cosets relative to 3 modulo 37 are:</p>
        <MathBlock>{`C_0 = \\{{0}\\}`}</MathBlock>
        <MathBlock>{`C_1 = \\{{1, 3, 9, 27, 7, 21, 26, 4, 12, 36, 34, 28, 10, 30, 16, 11, 33, 25}\\}`}</MathBlock>
        <MathBlock>{`C_2 = \\{{2, 6, 18, 17, 14, 5, 15, 8, 24, 35, 31, 19, 20, 23, 32, 29, 13, 22}\\}`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`x^\\{37\\} - 1 = (x - 1)f(x)g(x)`}</InlineMath> where{' '}
          <InlineMath>{`f(x)`}</InlineMath> and <InlineMath>{`g(x)`}</InlineMath> are irreducible of degree 18:
        </p>
        <MathBlock>{`f(x) = x^\\{18\\} + x^\\{17\\} - x^\\{16\\} - x^\\{15\\} + x^\\{14\\} - x^\\{13\\} - x^\\{12\\} - x^\\{10\\} - x^9 - x^8 - x^6 - x^5 + x^4 - x^3 - x^2 + x + 1`}</MathBlock>
        <MathBlock>{`g(x) = x^\\{18\\} - x^\\{16\\} - x^\\{14\\} - x^\\{13\\} + x^\\{11\\} + x^7 - x^5 - x^4 - x^2 + 1`}</MathBlock>
      </Example>

      <Callout type="success" title="Key Insight">
        <p>
          The special form of Berlekamp's algorithm for <InlineMath>{`X^n - 1`}</InlineMath> allows us to:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Skip computing the full Q-matrix</li>
          <li>Work directly with cyclotomic class sums</li>
          <li>Predict the degrees of irreducible factors from coset sizes</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
