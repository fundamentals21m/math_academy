import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <p>
        Berlekamp's algorithm provides a systematic method for factoring polynomials over finite
        fields. This algorithm is fundamental to coding theory and is particularly useful for
        factoring <InlineMath>{`X^n - 1`}</InlineMath> when constructing cyclic codes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Q-Matrix</h2>

      <Definition title="The Q-Matrix">
        <p>
          Let <InlineMath>{`F = \\text{GF}(q)`}</InlineMath> be a field of <InlineMath>{`q`}</InlineMath> elements
          and let:
        </p>
        <MathBlock>{`f(x) = \\sum_{'\\{i=0\\}'}^m a_i x^i`}</MathBlock>
        <p>
          be a monic polynomial of degree <InlineMath>{`m`}</InlineMath> over <InlineMath>{`F`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>Q-matrix</strong> <InlineMath>{`\\mathbf{Q} = (Q_\\{ij\\})`}</InlineMath> is the
          square matrix of order <InlineMath>{`m`}</InlineMath> over <InlineMath>{`F`}</InlineMath> in which
          the <InlineMath>{`i`}</InlineMath>th row is represented by <InlineMath>{`x^\\{q(i-1)\\}`}</InlineMath>
          reduced modulo <InlineMath>{`f(x)`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Q-Matrix for f(x) = x^5 + x^3 + 1 over GF(3)">
        <p>
          For <InlineMath>{`f(x) = x^5 + x^3 + 1`}</InlineMath> and <InlineMath>{`q = 3`}</InlineMath>, we
          compute the powers of <InlineMath>{`x`}</InlineMath> modulo <InlineMath>{`f(x)`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><InlineMath>{`x^0 = 1`}</InlineMath></li>
          <li><InlineMath>{`x^3`}</InlineMath></li>
          <li><InlineMath>{`x^6 = -x - x^4 \pmod\\{f(x)\\}`}</InlineMath></li>
          <li><InlineMath>{`x^9 = -1 + x^2 - x^3 - x^4 \pmod\\{f(x)\\}`}</InlineMath></li>
          <li><InlineMath>{`x^\\{12\\} = 1 + x + x^2 + x^4 \pmod\\{f(x)\\}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The third row of <InlineMath>{`\\mathbf{Q}`}</InlineMath> (from <InlineMath>{`x^6`}</InlineMath>)
          is: <InlineMath>{`(0, -1, 0, 0, -1)`}</InlineMath>
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Key Lemma</h2>

      <Theorem
        title="Null Space Characterization"
        proof={
          <>
            <p>
              Since <InlineMath>{`q\\beta = 0`}</InlineMath> for every <InlineMath>{`\\beta \\in F`}</InlineMath>:
            </p>
            <MathBlock>{`g(x)^q = g(x^q) = \\sum_{'\\{i=0\\}'}^\\{m-1\\} g_i x^\\{iq\\} \\pmod\\{f(x)\\}`}</MathBlock>
            <p className="mt-2">
              Reducing each <InlineMath>{`x^\\{iq\\}`}</InlineMath> modulo <InlineMath>{`f(x)`}</InlineMath>
              using the rows of <InlineMath>{`\\mathbf{Q}`}</InlineMath>:
            </p>
            <MathBlock>{`g(x)^q \\equiv \\sum_{'\\{k=0\\}'}^\\{m-1\\} \\left( \\sum_{'\\{i=0\\}'}^\\{m-1\\} g_i Q_\\{i+1,k+1\\} \\right) x^k \\pmod\\{f(x)\\}`}</MathBlock>
            <p className="mt-2">Therefore:</p>
            <MathBlock>{`g(x)^q - g(x) \\equiv \\sum_{'\\{k=0\\}'}^\\{m-1\\} \\left( \\left( \\sum_{'\\{i=0\\}'}^\\{m-1\\} g_i Q_\\{i+1,k+1\\} \\right) - g_k \\right) x^k = 0 \\pmod\\{f(x)\\}`}</MathBlock>
            <p className="mt-2">if and only if:</p>
            <MathBlock>{`(g_0 \\quad g_1 \\quad \\cdots \\quad g_\\{m-1\\})( \\\mathbf{Q} - \\\mathbf{I}) = 0`}</MathBlock>
          </>
        }
      >
        <p>Given any polynomial:</p>
        <MathBlock>{`g(x) = \\sum_{'\\{i=0\\}'}^\\{m-1\\} g_i x^i`}</MathBlock>
        <p>
          over <InlineMath>{`F`}</InlineMath> of degree less than <InlineMath>{`m`}</InlineMath>, we have:
        </p>
        <MathBlock>{`g(x)^q - g(x) \\equiv 0 \\pmod\\{f(x)\\}`}</MathBlock>
        <p>
          if and only if the row vector <InlineMath>{`(g_0, g_1, \ldots, g_\\{m-1\\})`}</InlineMath> is in
          the null space of <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Berlekamp's Factorization Theorem</h2>

      <Theorem
        title="Berlekamp's Factorization"
        proof={
          <>
            <p>
              By the lemma, <InlineMath>{`f(x) | g(x)^q - g(x)`}</InlineMath>. Now, for any{' '}
              <InlineMath>{`y`}</InlineMath>:
            </p>
            <MathBlock>{`y^q - y = \\prod_{'\\{s \\in F\\}'} (y - s)`}</MathBlock>
            <p className="mt-2">Therefore:</p>
            <MathBlock>{`f(x) | \\prod_{'\\{s \\in F\\}'} (g(x) - s)`}</MathBlock>
            <p className="mt-2">and hence:</p>
            <MathBlock>{`f(x) = \\gcd\\left( f(x), \\prod_{'\\{s \\in F\\}'} (g(x) - s) \\right)`}</MathBlock>
            <p className="mt-2">
              Also, for <InlineMath>{`s \\neq t`}</InlineMath> in <InlineMath>{`F`}</InlineMath>,{' '}
              <InlineMath>{`g(x) - s`}</InlineMath> and <InlineMath>{`g(x) - t`}</InlineMath> are coprime.
              Therefore:
            </p>
            <MathBlock>{`f(x) | \\prod_{'\\{s \\in F\\}'} \\gcd(f(x), g(x) - s)`}</MathBlock>
            <p className="mt-2">
              On the other hand, <InlineMath>{`\\gcd(f(x), g(x) - s) | f(x)`}</InlineMath> for each{' '}
              <InlineMath>{`s`}</InlineMath>. Since <InlineMath>{`f(x)`}</InlineMath> is monic:
            </p>
            <MathBlock>{`f(x) = \\prod_{'\\{s \\in F\\}'} \\gcd(f(x), g(x) - s)`}</MathBlock>
          </>
        }
      >
        <MathBlock>{`f(x) = \\prod_{'\\{s \\in F\\}'} \\gcd(f(x), g(x) - s)`}</MathBlock>
        <p>
          where <InlineMath>{`g(x) = \sum_{'\{i=0\}'}^\\{m-1\\} g_i x^i`}</InlineMath> is such that:
        </p>
        <MathBlock>{`(g_0 \\quad g_1 \\quad \\cdots \\quad g_\\{m-1\\})( \\\mathbf{Q} - \\\mathbf{I}) = 0`}</MathBlock>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Algorithm Steps</h2>

      <Callout type="info" title="Berlekamp's Algorithm">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Compute the Q-matrix by reducing <InlineMath>{`x^\\{q(i-1)\\}`}</InlineMath> modulo{' '}
            <InlineMath>{`f(x)`}</InlineMath> for <InlineMath>{`i = 1, \\ldots, m`}</InlineMath>.
          </li>
          <li>
            Find the null space of <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath>.
          </li>
          <li>
            For each non-trivial vector <InlineMath>{`(g_0, \ldots, g_\\{m-1\\})`}</InlineMath> in the
            null space, form <InlineMath>{`g(x) = \\sum g_i x^i`}</InlineMath>.
          </li>
          <li>
            Compute <InlineMath>{`\\gcd(f(x), g(x) - s)`}</InlineMath> for each{' '}
            <InlineMath>{`s \\in F`}</InlineMath>.
          </li>
          <li>
            Non-trivial GCDs give factors of <InlineMath>{`f(x)`}</InlineMath>.
          </li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Number of Factors</h2>

      <Theorem
        title="Dimension Equals Number of Factors"
        proof={
          <>
            <p>
              Suppose <InlineMath>{`f(x) = \prod_{'\{i=1\}'}^n p_i(x)^\\{e_i\\}`}</InlineMath> where
              each <InlineMath>{`p_i(x)`}</InlineMath> is irreducible and distinct.
            </p>
            <p className="mt-2">
              A polynomial <InlineMath>{`g(x) \\in F[x]`}</InlineMath> is in the null space of{' '}
              <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath> if and only if{' '}
              <InlineMath>{`f(x) | g(x)^q - g(x)`}</InlineMath>.
            </p>
            <p className="mt-2">This occurs if and only if each:</p>
            <MathBlock>{`p_i(x)^\\{e_i\\} | g(x) - a_i`}</MathBlock>
            <p>
              for some <InlineMath>{`a_i \\in F`}</InlineMath>. By the Chinese Remainder Theorem, given
              any <InlineMath>{`a_1, \\ldots, a_n \\in F`}</InlineMath>, there exists a unique{' '}
              <InlineMath>{`g(x) \pmod\\{f(x)\\}`}</InlineMath> with{' '}
              <InlineMath>{`g(x) \equiv a_i \pmod\\{p_i(x)^{e_i\\}'}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since each <InlineMath>{`a_i`}</InlineMath> has <InlineMath>{`q`}</InlineMath> choices, there
              are <InlineMath>{`q^n`}</InlineMath> such polynomials <InlineMath>{`g(x)`}</InlineMath>. Thus
              the null space has dimension <InlineMath>{`n`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The number of distinct irreducible factors of <InlineMath>{`f(x)`}</InlineMath> equals the
          dimension of the null space of <InlineMath>{`\\mathbf{Q} - \\mathbf{I}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Factoring x^5 + x^3 + 1 over GF(3)">
        <p>The Q - I matrix is:</p>
        <MathBlock>{`\\mathbf{Q} - \\mathbf{I} = \\begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\\\
0 & -1 & 0 & 1 & 0 \\\\
0 & -1 & -1 & 0 & -1 \\\\
-1 & 0 & 1 & 1 & -1 \\\\
1 & 1 & 1 & 0 & 0
\\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Solving <InlineMath>{`(g_0, g_1, g_2, g_3, g_4)(\\mathbf{Q} - \\mathbf{I}) = 0`}</InlineMath>
          gives:
        </p>
        <MathBlock>{`g_1 = g_2 = g_3 = -g_4`}</MathBlock>
        <p className="mt-2">
          Taking <InlineMath>{`g_1 = g_0 = -1`}</InlineMath> and <InlineMath>{`s = 0`}</InlineMath>, we
          compute <InlineMath>{`\\gcd(x^5 + x^3 + 1, x^4 + x^3 - x^2 - x - 1)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Using the Euclidean algorithm, the GCD is <InlineMath>{`x^4 + x^3 - x^2 - x - 1`}</InlineMath>,
          giving:
        </p>
        <MathBlock>{`x^5 + x^3 + 1 = (x - 1)(x^4 + x^3 - x^2 - x - 1)`}</MathBlock>
        <p className="mt-2">
          The polynomial <InlineMath>{`h(x) = x^4 + x^3 - x^2 - x - 1`}</InlineMath> is irreducible
          over <InlineMath>{`\\text{GF}(3)`}</InlineMath> since none of the elements of{' '}
          <InlineMath>{`\\text{GF}(3)`}</InlineMath> is a root and none of the degree-2 irreducible
          polynomials divides it.
        </p>
      </Example>

      <Callout type="warning" title="Important Note">
        <p>
          When the null space has dimension 1, the algorithm indicates that{' '}
          <InlineMath>{`f(x)`}</InlineMath> is irreducible (only the trivial factor{' '}
          <InlineMath>{`g(x) = g_0`}</InlineMath> is a constant).
        </p>
      </Callout>
    </LessonLayout>
  );
}
