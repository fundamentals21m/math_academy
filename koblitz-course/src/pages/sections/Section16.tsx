import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>The Continued Fraction Method</h2>

      <p>
        The continued fraction method (CFRAC) exploits the relationship between continued fractions
        and quadratic forms to find smooth values efficiently. It was the first subexponential
        factoring algorithm to be implemented successfully.
      </p>

      <h3>Continued Fractions</h3>

      <Definition title="Continued Fraction">
        A <strong>continued fraction</strong> is an expression of the form:
        <MathBlock math="a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cdots}}}" />
        Written compactly as <MathBlock math="[a_0; a_1, a_2, a_3, \ldots]" inline />.
      </Definition>

      <Theorem title="CF of √n"
        proof={
          <>
            <p>We prove that the continued fraction expansion of <MathBlock math="\sqrt{n}" inline /> for non-square <em>n</em> is purely periodic after the initial term.</p>
            <p>Define the sequence of complete quotients <MathBlock math="\alpha_k" inline /> by <MathBlock math="\alpha_0 = \sqrt{n}" inline /> and:</p>
            <MathBlock math="\alpha_k = a_k + \frac{1}{\alpha_{k+1}}, \quad a_k = \lfloor \alpha_k \rfloor" />
            <p>One can show that each <MathBlock math="\alpha_k" inline /> for <MathBlock math="k \geq 1" inline /> has the form:</p>
            <MathBlock math="\alpha_k = \frac{\sqrt{n} + P_k}{Q_k}" />
            <p>where <MathBlock math="P_k, Q_k" inline /> are integers satisfying the recurrences:</p>
            <MathBlock math="P_{k+1} = a_k Q_k - P_k, \quad Q_{k+1} = \frac{n - P_{k+1}^2}{Q_k}" />
            <p>Since <MathBlock math="0 < P_k < \sqrt{n}" inline /> and <MathBlock math="0 < Q_k < 2\sqrt{n}" inline />, there are only finitely many pairs <MathBlock math="(P_k, Q_k)" inline />. By the pigeonhole principle, the sequence must eventually repeat, establishing periodicity.</p>
            <p>The period ends with <MathBlock math="2a_0" inline /> because at the end of each period, we have <MathBlock math="\alpha_k = \sqrt{n} + a_0" inline />, giving <MathBlock math="a_k = \lfloor \sqrt{n} + a_0 \rfloor = 2a_0" inline /> (since <MathBlock math="a_0 = \lfloor \sqrt{n} \rfloor" inline />).</p>
          </>
        }
      >
        For non-square <em>n</em>, the continued fraction of <MathBlock math="\sqrt{n}" inline /> is eventually periodic:
        <MathBlock math="\sqrt{n} = [a_0; \overline{a_1, a_2, \ldots, a_{r-1}, 2a_0}]" />
        The period ends with <MathBlock math="2a_0" inline />.
      </Theorem>

      <Example title="Continued Fraction of √7">
        <MathBlock math="\sqrt{7} = [2; \overline{1, 1, 1, 4}]" />
        <p className="mt-2">The convergents are: 2, 3, 5/2, 8/3, 37/14, ...</p>
      </Example>

      <h3>Convergents and Quadratic Forms</h3>

      <Definition title="Convergent">
        The <em>k</em>-th <strong>convergent</strong> <MathBlock math="p_k/q_k" inline /> of{' '}
        <MathBlock math="[a_0; a_1, \ldots]" inline /> is obtained by truncating after <em>k</em> terms.
        They satisfy:
        <MathBlock math="p_k = a_k p_{k-1} + p_{k-2}, \quad q_k = a_k q_{k-1} + q_{k-2}" />
      </Definition>

      <Theorem title="Key Property"
        proof={
          <>
            <p>We prove this by induction using the recurrence relations for convergents and the structure of the continued fraction expansion of <MathBlock math="\sqrt{n}" inline />.</p>
            <p>The complete quotients satisfy <MathBlock math="\alpha_k = (\sqrt{n} + P_k)/Q_k" inline />, and there is a fundamental identity:</p>
            <MathBlock math="p_k \alpha_{k+1} - q_k = (-1)^k / (q_k \alpha_{k+1} + q_{k-1})" />
            <p>Since <MathBlock math="\alpha_0 = \sqrt{n}" inline />, we have for the convergents <MathBlock math="p_k/q_k" inline /> of <MathBlock math="\sqrt{n}" inline />:</p>
            <MathBlock math="p_k - q_k \sqrt{n} = \frac{(-1)^k}{q_k + q_{k-1}/\sqrt{n}} \cdot \frac{1}{\alpha_{k+1}/\sqrt{n}}" />
            <p>Using the relation <MathBlock math="(p_k - q_k\sqrt{n})(p_k + q_k\sqrt{n}) = p_k^2 - n q_k^2" inline /> and the continued fraction structure, one derives:</p>
            <MathBlock math="p_k^2 - n q_k^2 = (-1)^{k+1} Q_{k+1}" />
            <p>where <MathBlock math="Q_{k+1}" inline /> is the denominator appearing in <MathBlock math="\alpha_{k+1} = (\sqrt{n} + P_{k+1})/Q_{k+1}" inline />.</p>
            <p>The bound <MathBlock math="|Q_k| < 2\sqrt{n}" inline /> follows from the theory of reduced quadratic irrationals: for <MathBlock math="k \geq 1" inline />, the complete quotient <MathBlock math="\alpha_k > 1" inline /> and its conjugate <MathBlock math="\bar{\alpha}_k = (P_k - \sqrt{n})/Q_k" inline /> satisfies <MathBlock math="-1 < \bar{\alpha}_k < 0" inline />, which implies <MathBlock math="0 < Q_k < 2\sqrt{n}" inline />.</p>
          </>
        }
      >
        For the continued fraction of <MathBlock math="\sqrt{n}" inline />, the convergents satisfy:
        <MathBlock math="p_k^2 - n q_k^2 = (-1)^{k+1} Q_{k+1}" />
        where <MathBlock math="Q_k" inline /> are small integers related to the CF expansion.
        Crucially, <MathBlock math="|Q_k| < 2\sqrt{n}" inline />.
      </Theorem>

      <p>
        This gives us: <MathBlock math="p_k^2 \equiv (-1)^{k+1} Q_{k+1} \pmod{n}" inline />,
        producing small residues automatically!
      </p>

      <h3>The CFRAC Algorithm</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Continued Fraction Factoring</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Compute CF expansion of <MathBlock math="\sqrt{n}" inline /></li>
          <li>For each convergent <MathBlock math="p_k/q_k" inline />, compute <MathBlock math="Q_{k+1}" inline /></li>
          <li>Check if <MathBlock math="|Q_{k+1}|" inline /> is smooth over factor base</li>
          <li>Collect enough smooth relations</li>
          <li>Use linear algebra to find square product</li>
          <li>Compute GCD to extract factor</li>
        </ol>
      </div>

      <Example title="CFRAC Example">
        <p>Factor <MathBlock math="n = 9509" inline /></p>
        <p className="mt-2"><MathBlock math="\sqrt{9509} \approx 97.5" inline />, so <MathBlock math="a_0 = 97" inline /></p>
        <p className="mt-2">CF expansion: <MathBlock math="[97; 2, 6, 1, \ldots]" inline /></p>
        <table className="w-full mt-2 text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="py-1 text-left">k</th>
              <th className="py-1 text-left">p_k</th>
              <th className="py-1 text-left">Q_{k+1}</th>
              <th className="py-1 text-left">Factorization</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr><td>0</td><td>97</td><td>-100</td><td>-2² × 5²</td></tr>
            <tr><td>1</td><td>195</td><td>109</td><td>prime</td></tr>
            <tr><td>2</td><td>1267</td><td>-75</td><td>-3 × 5²</td></tr>
            <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
          </tbody>
        </table>
      </Example>

      <h3>Why CFRAC is Efficient</h3>

      <Theorem title="CFRAC Advantage"
        proof={
          <>
            <p>We establish the smoothness probability advantage of CFRAC.</p>
            <p>The bound <MathBlock math="|Q_k| < 2\sqrt{n}" inline /> was established in the Key Property theorem. For random <MathBlock math="x" inline />, the value <MathBlock math="x^2 \bmod n" inline /> is uniformly distributed in <MathBlock math="[0, n-1]" inline />, so residues can be as large as <MathBlock math="n" inline />.</p>
            <p>By the Canfield-Erdos-Pomerance theorem, the probability that an integer <MathBlock math="x" inline /> is <em>B</em>-smooth is approximately:</p>
            <MathBlock math="\Psi(x, B) / x \approx u^{-u} \quad \text{where } u = \frac{\log x}{\log B}" />
            <p>For CFRAC, we have <MathBlock math="x \approx 2\sqrt{n}" inline />, so:</p>
            <MathBlock math="u_{\text{CFRAC}} = \frac{\log(2\sqrt{n})}{\log B} \approx \frac{\log n}{2\log B}" />
            <p>For random squaring, <MathBlock math="x \approx n" inline />, giving:</p>
            <MathBlock math="u_{\text{random}} = \frac{\log n}{\log B}" />
            <p>Since <MathBlock math="u_{\text{CFRAC}} \approx u_{\text{random}}/2" inline />, and smoothness probability decays like <MathBlock math="u^{-u}" inline />, the halved exponent in CFRAC yields dramatically higher smoothness probability.</p>
          </>
        }
      >
        The values <MathBlock math="Q_k" inline /> are bounded by <MathBlock math="2\sqrt{n}" inline />,
        much smaller than random <MathBlock math="x^2 \bmod n" inline /> (which can be up to <em>n</em>).
        Smaller values are more likely to be smooth:
        <MathBlock math="P(\text{smooth}) \propto (\log n)^{-u} \text{ where } u = \frac{\log x}{\log B}" />
      </Theorem>

      <p>
        Since <MathBlock math="Q_k \approx \sqrt{n}" inline /> instead of <em>n</em>, we have{' '}
        <MathBlock math="u \approx \frac{\log \sqrt{n}}{\log B}" inline />, halving the exponent
        and dramatically increasing smoothness probability.
      </p>

      <h3>Complexity</h3>

      <Theorem title="CFRAC Complexity"
        proof={
          <>
            <p>We sketch the complexity analysis following the standard approach for subexponential factoring algorithms.</p>
            <p>Define <MathBlock math="L(n) = e^{\sqrt{\ln n \ln \ln n}}" inline />. The algorithm has two main costs:</p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li><strong>Relation collection:</strong> We need <MathBlock math="\pi(B) + 1 \approx B/\ln B" inline /> smooth values, where <em>B</em> is the smoothness bound.</li>
              <li><strong>Smoothness probability:</strong> Values <MathBlock math="Q_k \approx \sqrt{n}" inline /> are <em>B</em>-smooth with probability approximately <MathBlock math="u^{-u}" inline /> where <MathBlock math="u = \ln\sqrt{n}/\ln B" inline />.</li>
            </ol>
            <p className="mt-2">The expected number of convergents needed is <MathBlock math="B/\ln B \cdot u^u" inline />. Each convergent requires <MathBlock math="O(\log n)" inline /> operations.</p>
            <p>Optimizing over <em>B</em>: set <MathBlock math="B = L(n)^{1/2+o(1)}" inline />. Then <MathBlock math="u = \sqrt{\ln n / \ln \ln n} / (1/2) = \sqrt{\ln n \ln \ln n}" inline />, giving:</p>
            <MathBlock math="u^u = e^{u \ln u} = e^{\sqrt{\ln n \ln \ln n} \cdot (1/2)\ln(\ln n / \ln \ln n)} = L(n)^{1/2+o(1)}" />
            <p>Total cost: <MathBlock math="B \cdot u^u = L(n)^{1/2} \cdot L(n)^{1/2} = L(n)^{1+o(1)}" inline />.</p>
            <p>The linear algebra phase (Gaussian elimination mod 2) costs <MathBlock math="O(B^3)" inline /> naively, but sparse methods reduce this to <MathBlock math="O(B^2)" inline />, which is <MathBlock math="L(n)^{1+o(1)}" inline />.</p>
          </>
        }
      >
        The continued fraction method factors <em>n</em> in time:
        <MathBlock math="L(n)^{1 + o(1)} = e^{(1 + o(1))\sqrt{\ln n \ln \ln n}}" />
        This is the same as Dixon's method but with better constants in practice due to smaller residues.
      </Theorem>

      <h3>Multiple Polynomials</h3>

      <p>
        A key improvement (leading to MPQS) uses multiple quadratic polynomials:
      </p>

      <Definition title="Quadratic Polynomial">
        For chosen <em>A, B</em> with <MathBlock math="B^2 \equiv n \pmod{A}" inline />, the polynomial:
        <MathBlock math="Q(x) = (Ax + B)^2 - n" />
        satisfies <MathBlock math="Q(x) \equiv (Ax + B)^2 \pmod{n}" inline /> with values
        around <MathBlock math="\sqrt{n}/A" inline /> near <MathBlock math="x = 0" inline />.
      </Definition>

      <Callout type="info">
        <strong>Historical Note:</strong> CFRAC was implemented by Morrison and Brillhart in 1975
        to factor the seventh Fermat number <MathBlock math="F_7 = 2^{128} + 1" inline />.
        It remained the fastest general-purpose algorithm until the Quadratic Sieve.
      </Callout>

      <h3>Comparison with Other Methods</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Residue Size</th>
              <th className="text-left py-2">Parallelizable</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Dixon</td>
              <td className="py-2">~n</td>
              <td className="py-2">Yes</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">CFRAC</td>
              <td className="py-2">~√n</td>
              <td className="py-2">No (sequential)</td>
            </tr>
            <tr>
              <td className="py-2">QS</td>
              <td className="py-2">~√n</td>
              <td className="py-2">Yes (via MPQS)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Legacy:</strong> While superseded by the Quadratic Sieve, CFRAC introduced the
        crucial insight that structured sequences produce smaller residues, a principle that
        underlies all modern sieve-based factoring algorithms.
      </Callout>
    </LessonLayout>
  );
}
