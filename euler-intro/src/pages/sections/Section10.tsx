import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Chapter XI: Infinite Branches of Cubics</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XI: De ramis infinitis Linearum tertii ordinis
      </p>

      <p>
        Cubic curves can extend to infinity in up to three directions, creating a richer
        variety of infinite behavior than conics. This chapter analyzes how third-order
        curves behave as they recede to infinity.
      </p>

      <Callout type="info">
        <strong>Key Difference from Conics:</strong> While a conic has at most 2 infinite
        branches, a cubic can have up to 3—each potentially parabolic or hyperbolic.
        This greater complexity leads to more diverse curve shapes.
      </Callout>

      <h2>Finding Asymptotic Directions</h2>

      <p>
        For the general cubic equation, the highest-degree terms are:
      </p>

      <MathBlock>{`F_3(x, y) = ax^3 + bx^2y + cxy^2 + dy^3 = 0`}</MathBlock>

      <p>
        Setting <InlineMath>y = mx</InlineMath> and dividing by <InlineMath>x^3</InlineMath>:
      </p>

      <MathBlock>{`a + bm + cm^2 + dm^3 = 0`}</MathBlock>

      <p>
        This cubic in <InlineMath>m</InlineMath> determines the asymptotic directions.
        It can have:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Three real roots:</strong> Three distinct asymptotic directions</li>
        <li><strong>One real, two complex roots:</strong> One asymptotic direction</li>
        <li><strong>Repeated roots:</strong> Special cases with parabolic branches</li>
      </ul>

      <h2>Classification by Infinite Branches</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Types of Cubic Curves by Branches</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="pb-2">Real Roots</th>
              <th className="pb-2">Branches</th>
              <th className="pb-2">Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">3 distinct</td>
              <td>3 hyperbolic</td>
              <td><InlineMath>xy(x+y) = 1</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">1 real</td>
              <td>1 hyperbolic</td>
              <td><InlineMath>{`y = x^3`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">1 double + 1 simple</td>
              <td>1 parabolic + 1 hyperbolic</td>
              <td><InlineMath>{`y^2 = x^3 + x`}</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2">1 triple</td>
              <td>Special parabolic</td>
              <td><InlineMath>{`y^3 = x^2`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Hyperbolic Branches of Cubics</h2>

      <p>
        When the cubic in <InlineMath>m</InlineMath> has three distinct real roots
        <InlineMath>m_1, m_2, m_3</InlineMath>, the curve has three asymptotes:
      </p>

      <MathBlock>{`y = m_1 x + c_1, \\quad y = m_2 x + c_2, \\quad y = m_3 x + c_3`}</MathBlock>

      <p>
        The constants <InlineMath>c_i</InlineMath> are found by analyzing the next-order
        terms. Each branch approaches its asymptote as <InlineMath>x \to \pm\infty</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Three Asymptotes</p>
        <MathBlock>{`xy(x + y) = a^3`}</MathBlock>
        <p className="mt-2">
          Highest-degree terms: <InlineMath>x^2 y + xy^2 = 0</InlineMath>, i.e.,
          <InlineMath>xy(x+y) = 0</InlineMath>
        </p>
        <p className="mt-1">
          Asymptotes: <InlineMath>x = 0</InlineMath>, <InlineMath>y = 0</InlineMath>,
          and <InlineMath>x + y = 0</InlineMath>
        </p>
      </div>

      <h2>Parabolic Branches of Cubics</h2>

      <p>
        When the direction polynomial has a repeated root, the corresponding branch
        is parabolic—it has no straight-line asymptote.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Parabolic Branch</p>
        <MathBlock>{`y^2 = x^3`}</MathBlock>
        <p className="mt-2">
          The highest terms give <InlineMath>y^2 = 0</InlineMath> (direction <InlineMath>m = 0</InlineMath>,
          double root). The branch curves away from the <InlineMath>x</InlineMath>-axis
          parabolically: <InlineMath>y \sim x^{3/2}</InlineMath>.
        </p>
      </div>

      <p>
        For a parabolic branch, the curve approaches infinity in a specific direction
        but the "offset" from that direction grows without bound.
      </p>

      <h2>Newton's Classification</h2>

      <p>
        Newton classified cubics based partly on their infinite branches:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Divergent Parabolas</h4>
          <p className="text-dark-300 text-sm">
            One parabolic branch with two hyperbolic branches.
            Example: <InlineMath>{`y^2 = ax^3 + bx^2 + cx + d`}</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Redundant Hyperbolas</h4>
          <p className="text-dark-300 text-sm">
            Three hyperbolic branches with three distinct asymptotes.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">Deficient Hyperbolas</h4>
          <p className="text-dark-300 text-sm">
            Fewer than three real asymptotic directions; includes elliptic curves.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Parabolic Hyperbolas</h4>
          <p className="text-dark-300 text-sm">
            Mixed behavior: some branches parabolic, some hyperbolic.
          </p>
        </div>
      </div>

      <h2>The Folium Revisited</h2>

      <p>
        The Folium of Descartes <InlineMath>x^3 + y^3 = 3axy</InlineMath> illustrates
        these concepts:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          Highest terms: <InlineMath>x^3 + y^3 = 0</InlineMath>, giving
          <InlineMath>1 + m^3 = 0</InlineMath>
        </li>
        <li>
          Solutions: <InlineMath>m = -1</InlineMath> (real), and two complex roots
        </li>
        <li>
          One real asymptote: <InlineMath>x + y + a = 0</InlineMath>
        </li>
        <li>
          The loop is a bounded component; the remaining branch is hyperbolic
        </li>
      </ul>

      <Callout type="warning">
        <strong>Bounded Components:</strong> Unlike conics (where only ellipses are bounded),
        cubics can have bounded components even when they also have infinite branches.
        A cubic might have an "oval" plus an infinite branch.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Cubic curves can have up to three infinite
        branches, each either hyperbolic (approaching an asymptote) or parabolic
        (no asymptote). The nature of the branches is determined by the roots of a
        cubic polynomial derived from the highest-degree terms. This classification
        was central to Newton's enumeration of 72 species of cubic curves.
      </Callout>
    </LessonLayout>
  );
}
