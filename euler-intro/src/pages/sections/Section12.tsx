import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Chapter XIII: Species of Third Order Lines</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XIII: De speciebus Linearum tertii ordinis
      </p>

      <p>
        In a tour de force of geometric analysis, Newton classified all cubic curves
        into 72 distinct <strong>species</strong>. Euler presents and extends this
        classification, organizing the vast family of cubics according to their
        geometric and algebraic properties.
      </p>

      <Callout type="info">
        <strong>Newton's Achievement:</strong> Newton's <em>Enumeratio Linearum Tertii
        Ordinis</em> (1704) was the first systematic classification of algebraic curves
        beyond conics. Euler's treatment in the <em>Introductio</em> provides a more
        algebraic approach to this classification.
      </Callout>

      <h2>Basis of Classification</h2>

      <p>
        Newton and Euler classify cubics using several criteria:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Number and type of infinite branches</strong> (hyperbolic vs. parabolic)</li>
        <li><strong>Number and configuration of asymptotes</strong></li>
        <li><strong>Presence of singular points</strong> (nodes, cusps)</li>
        <li><strong>Number of connected components</strong> (ovals)</li>
        <li><strong>Symmetry properties</strong></li>
      </ul>

      <h2>The Five Main Classes</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Newton's Classification (Simplified)</h3>
        <ol className="list-decimal list-inside space-y-4 text-dark-300">
          <li>
            <strong className="text-emerald-400">Redundant Hyperbolas</strong>
            <p className="ml-6 text-sm">Three hyperbolic branches, three asymptotes forming a triangle</p>
          </li>
          <li>
            <strong className="text-blue-400">Deficient Hyperbolas</strong>
            <p className="ml-6 text-sm">One hyperbolic branch, one asymptote (two complex asymptotic directions)</p>
          </li>
          <li>
            <strong className="text-purple-400">Parabolic Hyperbolas</strong>
            <p className="ml-6 text-sm">One parabolic branch plus one or two hyperbolic branches</p>
          </li>
          <li>
            <strong className="text-amber-400">Divergent Parabolas</strong>
            <p className="ml-6 text-sm">One parabolic branch (all three asymptotic directions coincide)</p>
          </li>
          <li>
            <strong className="text-rose-400">Trident Curves</strong>
            <p className="ml-6 text-sm">Three parallel asymptotes, resembling a trident</p>
          </li>
        </ol>
      </div>

      <h2>Redundant Hyperbolas</h2>

      <p>
        These curves have three distinct real asymptotes. Newton found 9 species:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Canonical Form</p>
        <MathBlock>{`xy(x + y) = ax^2 + bxy + cy^2 + dx + ey + f`}</MathBlock>
        <p className="mt-2 text-dark-300 text-sm">
          Different choices of coefficients yield curves with ovals, nodes, or pure branches.
        </p>
      </div>

      <p>
        Subcases depend on:
      </p>
      <ul className="list-disc list-inside space-y-1 my-4 text-dark-300">
        <li>Whether the curve has an oval (bounded component)</li>
        <li>Whether any branch passes through the vertices of the asymptote triangle</li>
        <li>Whether there are singular points</li>
      </ul>

      <h2>Deficient Hyperbolas</h2>

      <p>
        With only one real asymptote, these curves have more restricted geometry:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Elliptic Curves</p>
        <MathBlock>{`y^2 = x^3 + ax + b`}</MathBlock>
        <p className="mt-2 text-dark-300 text-sm">
          No finite asymptotes (the asymptotic direction is vertical with no finite intercept).
          Can have one or two connected components.
        </p>
      </div>

      <p>
        Newton identified 12 species of deficient hyperbolas based on:
      </p>
      <ul className="list-disc list-inside space-y-1 my-4 text-dark-300">
        <li>Number of ovals (0 or 1)</li>
        <li>Position relative to the asymptote</li>
        <li>Presence of singular points</li>
      </ul>

      <h2>Parabolic Hyperbolas</h2>

      <p>
        These hybrid curves combine parabolic and hyperbolic behavior:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Characteristic Equation</p>
        <MathBlock>{`y^2(x - a) = x^3 + bx^2 + cx + d`}</MathBlock>
        <p className="mt-2 text-dark-300 text-sm">
          One vertical asymptote at <InlineMath>x = a</InlineMath>, and parabolic
          behavior as <InlineMath>x \to \infty</InlineMath>.
        </p>
      </div>

      <h2>Divergent Parabolas</h2>

      <p>
        All five divergent parabolas have the form:
      </p>

      <MathBlock>{`y^2 = ax^3 + bx^2 + cx + d`}</MathBlock>

      <p>
        Newton classified them by the roots of the cubic <InlineMath>ax^3 + bx^2 + cx + d</InlineMath>:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">3 Distinct Real Roots</h4>
          <p className="text-dark-300 text-sm">
            Bell-shaped curve with one oval
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">1 Double, 1 Simple Root</h4>
          <p className="text-dark-300 text-sm">
            Nodal cubic (self-crossing)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">1 Triple Root</h4>
          <p className="text-dark-300 text-sm">
            Cuspidal cubic (<InlineMath>{`y^2 = x^3`}</InlineMath>)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">1 Real, 2 Complex Roots</h4>
          <p className="text-dark-300 text-sm">
            Smooth curve with no oval
          </p>
        </div>
      </div>

      <h2>The 72 Species</h2>

      <p>
        Newton's complete enumeration:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="pb-2">Class</th>
              <th className="pb-2">Number of Species</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">Redundant hyperbolas</td>
              <td>9</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Deficient hyperbolas</td>
              <td>12</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Parabolic hyperbolas</td>
              <td>16</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Hyperbolisms of hyperbola</td>
              <td>9</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Hyperbolisms of ellipse</td>
              <td>6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Hyperbolisms of parabola</td>
              <td>6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Trident curves</td>
              <td>6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Divergent parabolas</td>
              <td>5</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Cubic parabola</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Total</td>
              <td className="font-semibold">72</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <strong>Later Additions:</strong> Stirling and others found 6 additional species
        that Newton missed, bringing the total to 78. Modern projective classification
        recognizes even more distinctions.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Newton's classification of 72 species of
        cubic curves—later extended to 78—organizes these curves by their asymptotic
        behavior, singular points, and topological features. The main classes are
        redundant hyperbolas, deficient hyperbolas, parabolic hyperbolas, divergent
        parabolas, and trident curves. This classification was a landmark in algebraic
        geometry, demonstrating the rich variety possible even at degree 3.
      </Callout>
    </LessonLayout>
  );
}
