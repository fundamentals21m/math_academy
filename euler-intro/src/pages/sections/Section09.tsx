import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Chapter X: Algebraic Lines of Third Order</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput X: De Lineis algebraicis tertii ordinis
      </p>

      <p>
        We now move beyond the conics to study <strong>cubic curves</strong>—algebraic
        curves of the third order. These curves exhibit far richer behavior than conics,
        including multiple branches, inflection points, and self-intersections.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> Newton famously classified cubic curves into
        72 species. Euler builds on this work, providing a systematic algebraic treatment
        that reveals the structure underlying Newton's geometric classification.
      </Callout>

      <h2>The General Cubic Equation</h2>

      <p>
        A curve of the third order is defined by a polynomial equation of degree 3:
      </p>

      <MathBlock>{`ax^3 + bx^2y + cxy^2 + dy^3 + ex^2 + fxy + gy^2 + hx + iy + j = 0`}</MathBlock>

      <p>
        This equation has 10 coefficients, meaning (after normalizing) a cubic is
        determined by 9 conditions—equivalently, 9 points in general position.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Counting Parameters</h3>
        <p className="mb-2">
          For a curve of degree <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`\\text{Coefficients} = \\frac{(n+1)(n+2)}{2} = \\frac{4 \\cdot 5}{2} = 10 \\text{ (for } n=3\\text{)}`}</MathBlock>
        <p className="mt-2">
          Conditions to determine: <InlineMath>10 - 1 = 9</InlineMath> (since we can scale)
        </p>
      </div>

      <h2>Solving for Ordinates</h2>

      <p>
        Following Euler's method, we treat the equation as cubic in <InlineMath>y</InlineMath>:
      </p>

      <MathBlock>{`dy^3 + (cx + g)y^2 + (bx^2 + fx + i)y + (ax^3 + ex^2 + hx + j) = 0`}</MathBlock>

      <p>
        By Cardano's formula (or Euler's own methods), this cubic in <InlineMath>y</InlineMath>
        has up to three roots for each value of <InlineMath>x</InlineMath>. Thus:
      </p>

      <Callout type="success">
        <strong>Fundamental Property:</strong> A vertical line intersects a cubic curve
        in at most 3 points. More generally, any line intersects a cubic in at most 3 points.
      </Callout>

      <h2>Types of Cubic Curves</h2>

      <p>
        Cubic curves exhibit diverse topological types:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Non-singular Cubics</h4>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>Smooth at every point</li>
            <li>One connected component (oval + infinite branch)</li>
            <li>Or two components (isolated oval)</li>
            <li>Example: elliptic curves</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-rose-400 font-semibold mb-2">Singular Cubics</h4>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>Have nodes (self-crossings)</li>
            <li>Or cusps (sharp points)</li>
            <li>Simpler to analyze</li>
            <li>Example: <InlineMath>{`y^2 = x^3`}</InlineMath> (cusp)</li>
          </ul>
        </div>
      </div>

      <h2>Famous Cubic Curves</h2>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">The Folium of Descartes</p>
        <MathBlock>{`x^3 + y^3 = 3axy`}</MathBlock>
        <ul className="mt-2 text-dark-300 space-y-1">
          <li>Has a loop passing through the origin</li>
          <li>Node at the origin</li>
          <li>One asymptote: <InlineMath>x + y + a = 0</InlineMath></li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">The Cissoid of Diocles</p>
        <MathBlock>{`y^2(2a - x) = x^3`}</MathBlock>
        <ul className="mt-2 text-dark-300 space-y-1">
          <li>Cusp at the origin</li>
          <li>Asymptotic to the line <InlineMath>x = 2a</InlineMath></li>
          <li>Used historically to solve the problem of doubling the cube</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">The Witch of Agnesi</p>
        <MathBlock>{`y = \\frac{8a^3}{x^2 + 4a^2}`}</MathBlock>
        <ul className="mt-2 text-dark-300 space-y-1">
          <li>Bell-shaped curve symmetric about the <InlineMath>y</InlineMath>-axis</li>
          <li>Horizontal asymptote <InlineMath>y = 0</InlineMath></li>
          <li>Maximum at <InlineMath>(0, 2a)</InlineMath></li>
        </ul>
      </div>

      <h2>Inflection Points</h2>

      <p>
        A distinctive feature of cubic curves is their <strong>inflection points</strong>—
        points where the curve changes from concave to convex:
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> A non-singular cubic curve has exactly 3 inflection
        points (over the complex numbers), and these three points are collinear.
      </Callout>

      <p>
        The inflection points satisfy both the original equation and the Hessian:
      </p>

      <MathBlock>{`H(x,y) = \\begin{vmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{vmatrix} = 0`}</MathBlock>

      <p>
        The Hessian of a cubic is a curve of degree 3, so by Bezout's theorem, a cubic
        and its Hessian meet in <InlineMath>3 \times 3 = 9</InlineMath> points—but 6
        are "at infinity" or have higher multiplicity, leaving 3 real inflection points.
      </p>

      <h2>Singular Points</h2>

      <p>
        A point <InlineMath>(x_0, y_0)</InlineMath> is <strong>singular</strong> if:
      </p>

      <MathBlock>{`f(x_0, y_0) = 0, \\quad \\frac{\\partial f}{\\partial x}(x_0, y_0) = 0, \\quad \\frac{\\partial f}{\\partial y}(x_0, y_0) = 0`}</MathBlock>

      <p>
        Types of singularities:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Node:</strong> Two distinct tangent directions (self-crossing)</li>
        <li><strong>Cusp:</strong> One tangent direction with higher contact</li>
        <li><strong>Isolated point:</strong> No real points nearby (e.g., <InlineMath>{`x^2 + y^2 = 0`}</InlineMath> for real <InlineMath>x, y</InlineMath>)</li>
      </ul>

      <h2>The Group Law on Cubic Curves</h2>

      <p>
        Euler was aware of a remarkable algebraic structure on non-singular cubics:
        given two points <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> on
        the curve, we can define a "sum" <InlineMath>P + Q</InlineMath> by:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Draw the line through <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath></li>
        <li>This line meets the cubic in a third point <InlineMath>R</InlineMath></li>
        <li>Define <InlineMath>P + Q</InlineMath> as the reflection of <InlineMath>R</InlineMath></li>
      </ol>

      <Callout type="success">
        <strong>Modern Significance:</strong> This construction gives the points of an
        elliptic curve the structure of an abelian group—a discovery with profound
        implications for number theory and cryptography.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Cubic curves are far richer than conics,
        exhibiting inflection points, nodes, cusps, and multiple branches. The general
        cubic has 10 coefficients and is determined by 9 points. Famous examples include
        the Folium of Descartes and the Cissoid of Diocles. Non-singular cubics have
        exactly 3 collinear inflection points and carry a natural group structure—the
        foundation of modern elliptic curve theory.
      </Callout>
    </LessonLayout>
  );
}
