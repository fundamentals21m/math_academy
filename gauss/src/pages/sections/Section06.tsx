import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';
import { ConstructiblePolygonDemo } from '@/components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Equations Defining Sections of a Circle</h2>

      <p>
        The seventh and final section of the Disquisitiones is perhaps its most celebrated.
        Here Gauss applies his number-theoretic machinery to solve a geometric problem
        that had puzzled mathematicians since antiquity: <strong>which regular polygons
        can be constructed with compass and straightedge?</strong>
      </p>

      <Callout type="info">
        <strong>Historical Context:</strong> The ancient Greeks knew how to construct
        regular polygons with 3, 4, 5, 6, 8, 10, 12, 15, ... sides. But the 7-gon, 9-gon,
        11-gon, 13-gon seemed impossible. For over 2000 years, no new constructible
        polygons were discovered—until Gauss.
      </Callout>

      <h2>The Division of the Circle</h2>

      <p>
        Dividing a circle into <InlineMath>{`n`}</InlineMath> equal parts is equivalent to
        finding the <InlineMath>{`n`}</InlineMath>-th roots of unity—the solutions to:
      </p>

      <MathBlock>{`z^n = 1`}</MathBlock>

      <p>
        In the complex plane, these roots are:
      </p>

      <MathBlock>{`\\zeta_k = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n} = e^{2\\pi i k/n}`}</MathBlock>

      <p>
        for <InlineMath>{`k = 0, 1, 2, \ldots, n-1`}</InlineMath>. They form the vertices
        of a regular <InlineMath>{`n`}</InlineMath>-gon inscribed in the unit circle.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">The Cyclotomic Polynomial</h3>
        <p className="text-dark-200 mb-4">
          The primitive <InlineMath>{`n`}</InlineMath>-th roots of unity are roots of the
          <strong>cyclotomic polynomial</strong> <InlineMath>{`\Phi_n(x)`}</InlineMath>,
          whose degree is <InlineMath>{`\phi(n)`}</InlineMath> (Euler's totient).
        </p>
        <MathBlock>{`\\Phi_n(x) = \\prod_{\\substack{1 \\le k \\le n \\\\ \\gcd(k,n)=1}} (x - \\zeta_k)`}</MathBlock>
      </div>

      <h2>Constructibility and Field Extensions</h2>

      <p>
        Gauss recognized that a length is constructible with compass and straightedge
        if and only if it can be expressed using rational numbers and repeated square
        roots. In modern terms:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Constructibility Criterion</h3>
        <p className="text-dark-200">
          A number <InlineMath>{`\alpha`}</InlineMath> is constructible if and only if the
          field extension <InlineMath>{`\\mathbb{Q}(\\alpha)/\\mathbb{Q}`}</InlineMath> has
          degree <InlineMath>{`2^k`}</InlineMath> for some <InlineMath>{`k`}</InlineMath>.
        </p>
      </div>

      <p>
        For the regular <InlineMath>{`n`}</InlineMath>-gon, the relevant number is{' '}
        <InlineMath>{`\cos(2\pi/n)`}</InlineMath>. Its field extension has degree{' '}
        <InlineMath>{`\phi(n)/2`}</InlineMath> for <InlineMath>{`n \ge 3`}</InlineMath>.
      </p>

      <h2>Gauss's Theorem on Constructibility</h2>

      <p>
        Gauss proved the fundamental result characterizing constructible polygons:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Gauss-Wantzel Theorem</h3>
        <p className="text-dark-200 mb-4">
          The regular <InlineMath>{`n`}</InlineMath>-gon is constructible with compass and
          straightedge if and only if:
        </p>
        <MathBlock>{`n = 2^k p_1 p_2 \\cdots p_m`}</MathBlock>
        <p className="text-dark-300 mt-4">
          where <InlineMath>{`k \ge 0`}</InlineMath> and <InlineMath>{`p_1, p_2, \ldots, p_m`}</InlineMath>{' '}
          are <strong>distinct Fermat primes</strong>.
        </p>
      </div>

      <h2>Fermat Primes</h2>

      <p>
        Fermat primes are primes of the form:
      </p>

      <MathBlock>{`F_k = 2^{2^k} + 1`}</MathBlock>

      <p>
        Fermat conjectured that all such numbers are prime, but only five are known:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="p-3 text-dark-300">k</th>
              <th className="p-3 text-dark-300">F<sub>k</sub></th>
              <th className="p-3 text-dark-300">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="p-3">0</td>
              <td className="p-3 font-mono">3</td>
              <td className="p-3 text-emerald-400">Prime (Fermat prime)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">1</td>
              <td className="p-3 font-mono">5</td>
              <td className="p-3 text-emerald-400">Prime (Fermat prime)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">2</td>
              <td className="p-3 font-mono">17</td>
              <td className="p-3 text-emerald-400">Prime (Fermat prime)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">3</td>
              <td className="p-3 font-mono">257</td>
              <td className="p-3 text-emerald-400">Prime (Fermat prime)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">4</td>
              <td className="p-3 font-mono">65537</td>
              <td className="p-3 text-emerald-400">Prime (Fermat prime)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">5</td>
              <td className="p-3 font-mono">4294967297</td>
              <td className="p-3 text-rose-400">Composite = 641 × 6700417</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <strong>Open Problem:</strong> Are there any Fermat primes beyond{' '}
        <InlineMath>{`F_4 = 65537`}</InlineMath>? No new Fermat primes have been discovered,
        and many mathematicians conjecture there are only five.
      </Callout>

      <h2>The Regular 17-gon</h2>

      <p>
        Gauss's most famous achievement in this section is proving that the regular
        <strong>17-gon (heptadecagon)</strong> is constructible. Since 17 is a Fermat
        prime, this follows from his theorem—but he also provided an explicit construction!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Gauss's Construction of the 17-gon</h3>
        <p className="text-dark-200 mb-4">
          Gauss showed that <InlineMath>{`\cos(2\pi/17)`}</InlineMath> can be expressed using
          only square roots:
        </p>
        <MathBlock>{`\\cos\\frac{2\\pi}{17} = \\frac{-1 + \\sqrt{17} + \\sqrt{34-2\\sqrt{17}} + 2\\sqrt{17+3\\sqrt{17}-\\sqrt{34-2\\sqrt{17}}-2\\sqrt{34+2\\sqrt{17}}}}{16}`}</MathBlock>
        <p className="text-dark-400 text-sm mt-4">
          This remarkable formula, involving only nested square roots, confirms
          constructibility.
        </p>
      </div>

      <Callout type="info">
        <strong>Gauss's Pride:</strong> Gauss was so proud of this discovery (made at
        age 19) that he requested a regular 17-gon be engraved on his tombstone.
        Although this wish was not fulfilled, a 17-pointed star does appear on a
        monument to Gauss in Brunswick.
      </Callout>

      <h2>Try It: Constructible Polygon Demo</h2>

      <p>
        Explore which regular polygons can be constructed with compass and straightedge.
        Enter a number of sides and see its factorization to understand why it is or
        isn't constructible:
      </p>

      <ConstructiblePolygonDemo className="my-6" />

      <h2>Constructible Polygons</h2>

      <p>
        From Gauss's theorem, the constructible regular <InlineMath>{`n`}</InlineMath>-gons
        for small <InlineMath>{`n`}</InlineMath> are:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-6">
        {[3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20, 24, 30, 32, 34, 40].map((n) => (
          <div
            key={n}
            className="bg-dark-800/50 rounded-lg p-3 text-center border border-emerald-500/30"
          >
            <span className="text-emerald-400 font-mono text-lg">{n}</span>
            <span className="text-dark-400 text-sm ml-1">-gon</span>
          </div>
        ))}
      </div>

      <p>
        The first few non-constructible regular polygons:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-6">
        {[7, 9, 11, 13, 14, 18, 19, 21].map((n) => (
          <div
            key={n}
            className="bg-dark-800/50 rounded-lg p-3 text-center border border-rose-500/30"
          >
            <span className="text-rose-400 font-mono text-lg">{n}</span>
            <span className="text-dark-400 text-sm ml-1">-gon</span>
          </div>
        ))}
      </div>

      <h2>Gauss Sums and Periods</h2>

      <p>
        Gauss's proof involves partitioning the <InlineMath>{`n`}</InlineMath>-th roots of
        unity into "periods" using primitive roots. The <strong>Gauss sums</strong>
        (sometimes called Gaussian periods) satisfy polynomial equations of lower degree,
        allowing a step-by-step descent to constructible quantities.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Period Structure for n = 17</h3>
        <p className="text-dark-200 mb-2">
          The 16 primitive 17th roots split into periods of sizes 8, 4, 2, 1:
        </p>
        <MathBlock>{`16 = 2^4 \\rightarrow \\text{4 levels of square roots}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          At each level, solving a quadratic equation introduces one square root,
          eventually reaching <InlineMath>{`\cos(2\pi/17)`}</InlineMath>.
        </p>
      </div>

      <h2>Legacy of Section VII</h2>

      <p>
        The ideas in this final section had profound influence:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Galois Theory:</strong> The analysis of field extensions and solvability
          foreshadows Galois's work on polynomial equations.
        </li>
        <li>
          <strong>Algebraic Number Theory:</strong> Cyclotomic fields became central
          objects of study.
        </li>
        <li>
          <strong>Gauss Sums:</strong> These appear throughout modern number theory
          and are connected to L-functions and the Riemann Hypothesis.
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Gauss's Diary Entry</h3>
        <p className="text-dark-200 italic">
          "March 30, 1796: The principles upon which the division of the circle depend,
          and geometrical divisibility of the same into seventeen parts, etc."
        </p>
        <p className="text-dark-400 text-sm mt-4">
          — Gauss's first diary entry, recording his discovery at age 19. This entry
          convinced him to pursue mathematics as a career.
        </p>
      </div>

      <Callout type="success">
        <strong>Conclusion:</strong> With this section, we complete our journey through
        Gauss's <em>Disquisitiones Arithmeticae</em>. This masterpiece transformed number
        theory into a rigorous mathematical discipline and introduced ideas that continue
        to shape mathematics over two centuries later.
      </Callout>
    </LessonLayout>
  );
}
