import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Chapter XX: Construction of Equations</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XX: De constructione Aequationum per lineas curvas
      </p>

      <p>
        Can we use curves to solve algebraic equations? Euler shows how the
        <strong> roots of polynomial equations</strong> can be found geometrically
        by constructing appropriate curves and finding their intersections.
      </p>

      <Callout type="info">
        <strong>Historical Context:</strong> Before algebraic formulas for roots were
        known (and for degrees ≥ 5, no such formulas exist!), geometric construction
        provided a powerful method for solving equations.
      </Callout>

      <h2>The Basic Idea</h2>

      <p>
        To solve <InlineMath>f(x) = 0</InlineMath>:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Construct the curve <InlineMath>y = f(x)</InlineMath></li>
        <li>Find where it crosses the <InlineMath>x</InlineMath>-axis</li>
        <li>The <InlineMath>x</InlineMath>-coordinates of crossings are the roots</li>
      </ol>

      <p>
        More generally, to solve <InlineMath>f(x) = g(x)</InlineMath>:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Construct curves <InlineMath>y = f(x)</InlineMath> and <InlineMath>y = g(x)</InlineMath></li>
        <li>Find their intersections</li>
        <li>The <InlineMath>x</InlineMath>-coordinates are the roots</li>
      </ol>

      <h2>Quadratic Equations via Conics</h2>

      <p>
        To solve <InlineMath>x^2 + bx + c = 0</InlineMath>:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Method 1: Parabola and Line</p>
        <p className="mt-2">
          Intersect the parabola <InlineMath>y = x^2</InlineMath> with the line
          <InlineMath>y = -bx - c</InlineMath>.
        </p>
        <p className="mt-2">
          At intersections: <InlineMath>x^2 = -bx - c</InlineMath>, giving
          <InlineMath>x^2 + bx + c = 0</InlineMath>. ✓
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Method 2: Two Lines and a Circle</p>
        <p className="mt-2">
          Using the geometric mean: draw a semicircle with diameter <InlineMath>b</InlineMath>,
          and the altitude to the diameter has length <InlineMath>\sqrt{c}</InlineMath> when
          the segments are in the right proportion.
        </p>
      </div>

      <h2>Cubic Equations via Conics</h2>

      <p>
        A cubic equation can be solved by intersecting two conics!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Solving <InlineMath>x^3 + px + q = 0</InlineMath></h3>
        <p className="mb-2">
          Intersect the parabola <InlineMath>y = x^2</InlineMath> with the
          parabola <InlineMath>x = y^2/q - py/q</InlineMath> (or a suitable hyperbola).
        </p>
        <p className="mt-4">
          Alternatively, intersect:
        </p>
        <MathBlock>{`y = x^2 \\quad \\text{and} \\quad xy = -p - qy`}</MathBlock>
        <p className="mt-2">
          The <InlineMath>x</InlineMath>-coordinates of intersections satisfy the cubic.
        </p>
      </div>

      <p>
        Since two conics meet in 4 points (Bezout), we get up to 4 solutions—but
        the cubic has only 3 roots. One intersection is "extraneous" or at infinity.
      </p>

      <h2>Quartic Equations</h2>

      <p>
        A quartic <InlineMath>x^4 + ax^3 + bx^2 + cx + d = 0</InlineMath> can be solved
        by intersecting conics (up to 4 intersections = 4 roots).
      </p>

      <p>
        Alternatively, use a cubic and a line (<InlineMath>3 \times 1 = 3</InlineMath>)
        combined with a quadratic factor.
      </p>

      <h2>Higher-Degree Equations</h2>

      <p>
        For degree <InlineMath>n</InlineMath> equations, we need curves whose
        intersection count is at least <InlineMath>n</InlineMath>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Options for Degree n</h3>
        <ul className="space-y-2 text-dark-300">
          <li>Curve of degree <InlineMath>n</InlineMath> and a line: <InlineMath>n \times 1 = n</InlineMath> intersections</li>
          <li>Curve of degree <InlineMath>k</InlineMath> and degree <InlineMath>n-k</InlineMath>: <InlineMath>k(n-k)</InlineMath> intersections</li>
          <li>Two curves of degree <InlineMath>\lceil n/2 \rceil</InlineMath>: approximately <InlineMath>n^2/4</InlineMath> intersections</li>
        </ul>
      </div>

      <h2>The Quintic and Beyond</h2>

      <Callout type="warning">
        <strong>Abel-Ruffini Theorem:</strong> There is no general algebraic formula
        for roots of polynomials of degree 5 or higher. However, geometric construction
        still works! The roots can be found as intersections of algebraic curves.
      </Callout>

      <p>
        For the quintic <InlineMath>x^5 + px + q = 0</InlineMath>:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Intersect a quartic and a line (gives 5 points as needed)</li>
        <li>Or intersect a cubic and a conic (gives 6 points—one extraneous)</li>
      </ul>

      <h2>Practical Considerations</h2>

      <p>
        Euler notes the practical value of these constructions:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Graphical solutions:</strong> Draw the curves carefully and read off intersections</li>
        <li><strong>Approximation:</strong> Iteratively refine intersection locations</li>
        <li><strong>Mechanical devices:</strong> Linkages can trace curves and find intersections</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Historical Note</p>
        <p>
          The Greeks famously tried to "square the circle" and "trisect the angle"
          using only compass and straightedge. These are impossible with those tools,
          but become possible with conics or higher curves. Euler's methods generalize
          these classical construction problems.
        </p>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Algebraic equations can be solved geometrically
        by finding curve intersections. Quadratics require a conic and a line; cubics
        require two conics; higher degrees require higher curves or more intersections.
        This method works even for quintics and beyond, where no algebraic formula exists.
        Bezout's theorem guarantees enough intersections for any polynomial degree.
      </Callout>
    </LessonLayout>
  );
}
