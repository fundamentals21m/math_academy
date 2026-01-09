import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Chapter XII: Asymptotes of Third Order</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XII: De Asymptotis Linearum tertii ordinis
      </p>

      <p>
        Building on our study of infinite branches, we now focus specifically on the
        <strong> asymptotes</strong> of cubic curves—their equations, how to find them,
        and the special phenomena that occur when asymptotes coincide or have special
        configurations.
      </p>

      <Callout type="info">
        <strong>Recall:</strong> An asymptote is a line that the curve approaches
        arbitrarily closely at infinity. A cubic can have 1, 2, or 3 asymptotes,
        some of which may coincide.
      </Callout>

      <h2>Computing Asymptotes</h2>

      <p>
        For a cubic <InlineMath>f(x, y) = 0</InlineMath>, we find asymptotes as follows:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Method</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Write <InlineMath>f(x, y) = F_3(x,y) + F_2(x,y) + F_1(x,y) + F_0</InlineMath>
            where <InlineMath>F_k</InlineMath> is homogeneous of degree <InlineMath>k</InlineMath>
          </li>
          <li>
            Find asymptotic directions by solving <InlineMath>F_3(1, m) = 0</InlineMath>
          </li>
          <li>
            For each real root <InlineMath>m_i</InlineMath>, find the intercept
            <InlineMath>c_i</InlineMath> using:
            <MathBlock>{`c_i = -\\frac{F_2(1, m_i)}{\\frac{\\partial F_3}{\\partial m}(1, m_i)}`}</MathBlock>
          </li>
          <li>
            The asymptote is <InlineMath>y = m_i x + c_i</InlineMath>
          </li>
        </ol>
      </div>

      <h2>Example: The Folium of Descartes</h2>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Finding the Asymptote</p>
        <MathBlock>{`x^3 + y^3 - 3axy = 0`}</MathBlock>
        <p className="mt-2"><strong>Step 1:</strong> Separate by degree:</p>
        <ul className="mt-1 text-dark-300 text-sm">
          <li><InlineMath>F_3 = x^3 + y^3</InlineMath></li>
          <li><InlineMath>F_2 = -3axy</InlineMath></li>
        </ul>
        <p className="mt-2"><strong>Step 2:</strong> Direction: <InlineMath>1 + m^3 = 0</InlineMath> gives <InlineMath>m = -1</InlineMath></p>
        <p className="mt-2"><strong>Step 3:</strong> Intercept:</p>
        <MathBlock>{`c = -\\frac{F_2(1, -1)}{3m^2}\\bigg|_{m=-1} = -\\frac{-3a(1)(-1)}{3(1)} = -a`}</MathBlock>
        <p className="mt-2"><strong>Asymptote:</strong> <InlineMath>y = -x - a</InlineMath> or <InlineMath>x + y + a = 0</InlineMath></p>
      </div>

      <h2>Multiple and Parallel Asymptotes</h2>

      <p>
        Special configurations arise when the direction polynomial has special structure:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Three Parallel Asymptotes</h4>
          <p className="text-dark-300 text-sm">
            When <InlineMath>F_3 = y^3</InlineMath>, all three asymptotic directions are
            <InlineMath>m = 0</InlineMath>. The curve has three horizontal asymptotes.
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Example: <InlineMath>{`y^3 = (x-a)(x-b)(x-c)`}</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Two Parallel Asymptotes</h4>
          <p className="text-dark-300 text-sm">
            When one direction has multiplicity 2. Two parallel lines plus one different.
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Example: Curves with <InlineMath>F_3 = y^2(y - x)</InlineMath>
          </p>
        </div>
      </div>

      <h2>Curvilinear Asymptotes</h2>

      <p>
        When a branch is parabolic (no straight asymptote), it may approach a curve
        rather than a line:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Parabolic Asymptote</p>
        <MathBlock>{`y^2 = x^3 + ax`}</MathBlock>
        <p className="mt-2">
          For large <InlineMath>x</InlineMath>, <InlineMath>y \approx \pm x^{3/2}</InlineMath>.
          The parabola <InlineMath>{`Y = X^{3/2}`}</InlineMath> serves as a "curvilinear
          asymptote"—the curve approaches it asymptotically.
        </p>
      </div>

      <h2>The Trident Curve</h2>

      <p>
        Newton's "trident" is a cubic with three parallel vertical asymptotes:
      </p>

      <MathBlock>{`xy^2 = (x-a)(x-b)(x-c)`}</MathBlock>

      <p>
        The vertical lines <InlineMath>x = a</InlineMath>, <InlineMath>x = b</InlineMath>,
        and <InlineMath>x = c</InlineMath> are asymptotes. The curve looks like a trident
        or three-pronged fork.
      </p>

      <h2>Intersection of Cubic with Its Asymptotes</h2>

      <p>
        A remarkable property: the asymptotes of a cubic intersect the cubic in a
        structured way.
      </p>

      <Callout type="success">
        <strong>Theorem:</strong> Each asymptote of a cubic meets the cubic in exactly
        one additional finite point. (At infinity, the asymptote is tangent to the curve,
        accounting for two of the three intersections.)
      </Callout>

      <p>
        This follows from Bezout's theorem: a line and a cubic meet in 3 points.
        For an asymptote, two of these points "escape to infinity" (the asymptotic
        intersection counts with multiplicity 2), leaving exactly one finite intersection.
      </p>

      <h2>The Triangle of Asymptotes</h2>

      <p>
        When a cubic has three distinct asymptotes forming a triangle:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Properties of the Asymptote Triangle</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            The three asymptotes meet the cubic in three finite points (one each)
          </li>
          <li>
            These three points are often collinear (for certain curve families)
          </li>
          <li>
            The "centroid" of the asymptote triangle has special significance
          </li>
          <li>
            The area of the asymptote triangle relates to curve parameters
          </li>
        </ul>
      </div>

      <h2>Asymptotes and Inflection Points</h2>

      <p>
        There's a beautiful relationship between asymptotes and inflection points:
      </p>

      <Callout type="info">
        <strong>Connection:</strong> For many cubics, the line through the three
        inflection points is parallel to one of the asymptotes, or passes through
        a vertex of the asymptote triangle.
      </Callout>

      <p>
        This connection reflects deep projective properties of cubic curves—the
        inflection points and asymptotic structure are intimately related through
        the curve's Hessian.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The asymptotes of cubic curves are found by
        analyzing the highest-degree terms and computing intercepts from the next-order
        terms. Cubics can have one, two, or three asymptotes, which may be parallel
        or form a triangle. Each asymptote meets the cubic in exactly one finite point.
        Parabolic branches may have curvilinear asymptotes. The asymptotic structure
        connects to inflection points through projective geometry.
      </Callout>
    </LessonLayout>
  );
}
