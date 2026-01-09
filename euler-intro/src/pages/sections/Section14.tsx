import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Chapter XV: Curves with Diameters</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XV: De Curvis quae Diametros habent
      </p>

      <p>
        A <strong>diameter</strong> of a curve is a line that bisects all chords
        parallel to some fixed direction. We've seen that conics possess diameters;
        now Euler investigates which other curves share this property.
      </p>

      <Callout type="info">
        <strong>Generalization:</strong> The concept of diameter, so useful for conics,
        can be extended to higher-degree curves. However, not all curves have diameters,
        and those that do may have them in restricted directions.
      </Callout>

      <h2>Definition of Diameter</h2>

      <p>
        Formally, a line <InlineMath>\ell</InlineMath> is a <strong>diameter</strong>
        of a curve <InlineMath>C</InlineMath> if it bisects every chord of <InlineMath>C</InlineMath>
        that is parallel to some fixed direction <InlineMath>d</InlineMath>.
      </p>

      <MathBlock>{`\\text{If } P, Q \\in C \\text{ with } PQ \\parallel d, \\text{ then the midpoint of } PQ \\text{ lies on } \\ell`}</MathBlock>

      <p>
        The direction <InlineMath>d</InlineMath> is called the <strong>conjugate direction</strong>
        to the diameter <InlineMath>\ell</InlineMath>.
      </p>

      <h2>Conditions for a Diameter</h2>

      <p>
        For a curve <InlineMath>f(x, y) = 0</InlineMath>, parallel chords in direction
        <InlineMath>d</InlineMath> intersect the curve in pairs. If we parameterize
        such a chord and sum the <InlineMath>y</InlineMath>-coordinates (or
        <InlineMath>x</InlineMath>-coordinates) of intersection points, the sum
        must be constant for a diameter to exist.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Algebraic Criterion</h3>
        <p className="mb-4">
          For a curve of degree <InlineMath>n</InlineMath>, write the equation solved
          for <InlineMath>y</InlineMath> as:
        </p>
        <MathBlock>{`P_n(x)y^n + P_{n-1}(x)y^{n-1} + \\cdots + P_0(x) = 0`}</MathBlock>
        <p className="mt-4">
          By Vieta's formulas, the sum of roots is <InlineMath>{`-P_{n-1}(x)/P_n(x)`}</InlineMath>.
          The curve has a vertical diameter if and only if this sum is constant.
        </p>
      </div>

      <h2>Diameters of Conics</h2>

      <p>
        For the general conic <InlineMath>{`\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0`}</InlineMath>:
      </p>

      <MathBlock>{`y_1 + y_2 = -\\frac{\\beta x + \\varepsilon}{\\gamma}`}</MathBlock>

      <p>
        This is linear in <InlineMath>x</InlineMath>, so the locus of midpoints is
        a straight line—the diameter. Every conic has infinitely many diameters,
        one for each direction of chords.
      </p>

      <Callout type="success">
        <strong>Conic Property:</strong> Every conic section has a diameter in every
        direction. The diameters all pass through a common point: the <strong>center</strong>
        (for ellipse/hyperbola) or converge to a point at infinity (for parabola).
      </Callout>

      <h2>Diameters of Cubics</h2>

      <p>
        For a general cubic, the sum of three roots involves:
      </p>

      <MathBlock>{`y_1 + y_2 + y_3 = -\\frac{P_2(x)}{P_3(x)}`}</MathBlock>

      <p>
        This is generally <em>not</em> constant—cubics typically have no diameters.
        However, special cubics do:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Symmetric Cubic</p>
        <MathBlock>{`y^3 = x^3 - x`}</MathBlock>
        <p className="mt-2">
          This curve has the <InlineMath>x</InlineMath>-axis as a diameter: all
          horizontal chords are bisected by <InlineMath>y = 0</InlineMath> due to
          the odd symmetry in <InlineMath>y</InlineMath>.
        </p>
      </div>

      <h2>Curves with Axes of Symmetry</h2>

      <p>
        A curve with an <strong>axis of symmetry</strong> automatically has that axis
        as a diameter:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Reflection symmetry about <InlineMath>y = 0</InlineMath>:</strong>
          If <InlineMath>f(x, y) = f(x, -y)</InlineMath>, the <InlineMath>x</InlineMath>-axis
          is a diameter
        </li>
        <li>
          <strong>Reflection symmetry about <InlineMath>x = 0</InlineMath>:</strong>
          If <InlineMath>f(x, y) = f(-x, y)</InlineMath>, the <InlineMath>y</InlineMath>-axis
          is a diameter
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Parabola</h4>
          <MathBlock>{`y^2 = 4px`}</MathBlock>
          <p className="text-dark-400 text-sm">
            Symmetric about <InlineMath>y = 0</InlineMath>: the <InlineMath>x</InlineMath>-axis
            is the principal diameter
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Witch of Agnesi</h4>
          <MathBlock>{`y(x^2 + a^2) = a^3`}</MathBlock>
          <p className="text-dark-400 text-sm">
            Symmetric about <InlineMath>x = 0</InlineMath>: the <InlineMath>y</InlineMath>-axis
            is a diameter
          </p>
        </div>
      </div>

      <h2>Central Curves</h2>

      <p>
        A curve is <strong>central</strong> if it has a point <InlineMath>O</InlineMath>
        such that every chord through <InlineMath>O</InlineMath> is bisected at
        <InlineMath>O</InlineMath>. This is equivalent to:
      </p>

      <MathBlock>{`f(x, y) = f(-x, -y)`}</MathBlock>

      <p>
        (after translation to put <InlineMath>O</InlineMath> at the origin).
      </p>

      <Callout type="info">
        <strong>Central conics:</strong> Ellipses and hyperbolas are central (center
        at the intersection of axes). Parabolas are not central—they have no center,
        or equivalently, their "center" is at infinity.
      </Callout>

      <h2>Diameters of Transcendental Curves</h2>

      <p>
        Transcendental curves can also have diameters:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">The Sine Curve</p>
        <MathBlock>{`y = \\sin x`}</MathBlock>
        <p className="mt-2">
          The line <InlineMath>y = 0</InlineMath> is a diameter: every horizontal
          chord <InlineMath>y = c</InlineMath> (with <InlineMath>|c| &lt; 1</InlineMath>)
          has midpoints lying on <InlineMath>y = 0</InlineMath> due to symmetry.
        </p>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> A diameter of a curve bisects all chords
        parallel to a conjugate direction. Conics have diameters in every direction,
        all meeting at the center. Higher-degree algebraic curves generally lack
        diameters, but curves with reflection symmetry have their axes of symmetry
        as diameters. The existence of diameters is related to the algebraic structure
        of the defining equation through Vieta's formulas.
      </Callout>
    </LessonLayout>
  );
}
