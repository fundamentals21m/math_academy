import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Chapter VI: Species of Second Order Lines</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput VI: De subdivisione Linearum secundi ordinis in species
      </p>

      <p>
        While all conic sections are curves of the second order, they exhibit strikingly
        different geometric behavior. In this chapter, Euler classifies conics into their
        fundamental <strong>species</strong>: the ellipse, parabola, and hyperbola.
      </p>

      <Callout type="info">
        <strong>The Classification Principle:</strong> The discriminant of the general
        quadratic equation determines which type of conic we have. Different values
        correspond to fundamentally different geometric shapes.
      </Callout>

      <h2>The Discriminant</h2>

      <p>
        For the general second-degree equation:
      </p>

      <MathBlock>{`\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0`}</MathBlock>

      <p>
        The key quantity is the <strong>discriminant</strong>:
      </p>

      <MathBlock>{`\\Delta = \\beta^2 - 4\\alpha\\gamma`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Classification by Discriminant</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold"><InlineMath>{`\\Delta < 0`}</InlineMath></span>
            <span>→ <strong>Ellipse</strong> (including circle as special case)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold"><InlineMath>{`\\Delta = 0`}</InlineMath></span>
            <span>→ <strong>Parabola</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold"><InlineMath>{`\\Delta > 0`}</InlineMath></span>
            <span>→ <strong>Hyperbola</strong></span>
          </li>
        </ul>
      </div>

      <h2>The Ellipse</h2>

      <p>
        When <InlineMath>{`\\beta^2 - 4\\alpha\\gamma < 0`}</InlineMath>, the curve is an
        <strong> ellipse</strong>—a closed, bounded curve. The canonical form is:
      </p>

      <MathBlock>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</MathBlock>

      <p>
        where <InlineMath>a</InlineMath> is the <strong>semi-major axis</strong> and
        <InlineMath>b</InlineMath> is the <strong>semi-minor axis</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Properties of the Ellipse</h4>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>Bounded: <InlineMath>{`-a \\leq x \\leq a`}</InlineMath></li>
            <li>Symmetric about both axes</li>
            <li>Has a center at the origin</li>
            <li>Two foci at <InlineMath>{`(\\pm c, 0)`}</InlineMath> where <InlineMath>{`c^2 = a^2 - b^2`}</InlineMath></li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">The Circle</h4>
          <p className="text-dark-300 text-sm">
            When <InlineMath>a = b</InlineMath>, the ellipse becomes a <strong>circle</strong>:
          </p>
          <MathBlock>{`x^2 + y^2 = r^2`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            (Here <InlineMath>\beta = 0</InlineMath> and <InlineMath>\alpha = \gamma</InlineMath>)
          </p>
        </div>
      </div>

      <h2>The Parabola</h2>

      <p>
        When <InlineMath>{`\\beta^2 - 4\\alpha\\gamma = 0`}</InlineMath>, the curve is a
        <strong> parabola</strong>—an unbounded curve with one branch extending to infinity.
      </p>

      <MathBlock>{`y^2 = 4px`}</MathBlock>

      <p>
        The parameter <InlineMath>p</InlineMath> is the distance from the vertex to the focus.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">The Parabola's Unique Property</p>
        <p>
          The parabola is the only conic that has exactly <strong>one</strong> infinite branch.
          It's the "boundary case" between ellipse and hyperbola—the transition point where
          the curve first becomes unbounded.
        </p>
      </div>

      <p>
        Properties of the parabola:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Extends to infinity in one direction</li>
        <li>Has no center (center is "at infinity")</li>
        <li>Single focus at <InlineMath>(p, 0)</InlineMath></li>
        <li>Directrix at <InlineMath>x = -p</InlineMath></li>
        <li>Reflects rays parallel to axis through the focus</li>
      </ul>

      <h2>The Hyperbola</h2>

      <p>
        When <InlineMath>{`\\beta^2 - 4\\alpha\\gamma > 0`}</InlineMath>, the curve is a
        <strong> hyperbola</strong>—consisting of two separate branches, each unbounded.
      </p>

      <MathBlock>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Properties of the Hyperbola</h3>
        <ul className="space-y-2 text-dark-300">
          <li>Two branches, symmetric about both axes</li>
          <li>Vertices at <InlineMath>(\pm a, 0)</InlineMath></li>
          <li>Foci at <InlineMath>{`(\\pm c, 0)`}</InlineMath> where <InlineMath>{`c^2 = a^2 + b^2`}</InlineMath></li>
          <li>Two asymptotes: <InlineMath>{`y = \\pm\\frac{b}{a}x`}</InlineMath></li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>The Rectangular Hyperbola:</strong> When <InlineMath>a = b</InlineMath>,
        the asymptotes are perpendicular, and we have <InlineMath>{`x^2 - y^2 = a^2`}</InlineMath>.
        In rotated form, this becomes <InlineMath>xy = k</InlineMath>.
      </Callout>

      <h2>Degenerate Cases</h2>

      <p>
        The second-degree equation can sometimes represent "degenerate" conics:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-rose-400 font-semibold mb-2">Two Lines</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`x^2 - y^2 = 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Factors as <InlineMath>(x-y)(x+y) = 0</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-rose-400 font-semibold mb-2">Single Line</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`x^2 = 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            A "double line" along the y-axis
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-rose-400 font-semibold mb-2">Point</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`x^2 + y^2 = 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Only the origin satisfies this
          </p>
        </div>
      </div>

      <h2>The Projective Viewpoint</h2>

      <p>
        Euler hints at a deeper unity: from the projective perspective, all non-degenerate
        conics are essentially the same! The distinction between ellipse, parabola, and
        hyperbola depends on how the curve intersects the "line at infinity":
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Ellipse:</strong> No real points at infinity</li>
        <li><strong>Parabola:</strong> One real point at infinity (tangent to line at infinity)</li>
        <li><strong>Hyperbola:</strong> Two real points at infinity (the asymptotic directions)</li>
      </ul>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The discriminant <InlineMath>{`\\Delta = \\beta^2 - 4\\alpha\\gamma`}</InlineMath>
        classifies conics into three species: ellipses (<InlineMath>\Delta &lt; 0</InlineMath>),
        parabolas (<InlineMath>\Delta = 0</InlineMath>), and hyperbolas (<InlineMath>\Delta &gt; 0</InlineMath>).
        Each species has characteristic properties related to boundedness, symmetry, and
        behavior at infinity. The circle and rectangular hyperbola are special symmetric cases.
      </Callout>
    </LessonLayout>
  );
}
