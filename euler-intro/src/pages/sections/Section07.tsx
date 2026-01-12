import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Chapter VIII: Asymptotes of Curves</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput VIII: De Asymptotis Curvarum
      </p>

      <p>
        Having introduced the concept of infinite branches, Euler now develops the full
        theory of <strong>asymptotes</strong>—lines that curves approach but never reach
        as they extend to infinity. This elegant theory reveals deep connections between
        algebra and geometry.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> An <strong>asymptote</strong> is a straight line such
        that the perpendicular distance from the curve to the line approaches zero as the
        point on the curve recedes to infinity.
      </Callout>

      <h2>Finding Asymptotes Algebraically</h2>

      <p>
        For a curve <InlineMath>f(x, y) = 0</InlineMath> of degree <InlineMath>n</InlineMath>,
        the asymptotes can be found systematically:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Method for Finding Asymptotes</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Write the equation in descending powers of <InlineMath>x</InlineMath>:
            <MathBlock>{`A_n(y)x^n + A_{n-1}(y)x^{n-1} + \\cdots + A_0(y) = 0`}</MathBlock>
          </li>
          <li>
            The asymptotic directions come from <InlineMath>A_n(y) = 0</InlineMath>
          </li>
          <li>
            For each direction, find the intercept by analyzing <InlineMath>{`A_{n-1}(y)`}</InlineMath>
          </li>
        </ol>
      </div>

      <h2>Asymptotes of Hyperbolas</h2>

      <p>
        For the standard hyperbola <InlineMath>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</InlineMath>:
      </p>

      <MathBlock>{`b^2x^2 - a^2y^2 = a^2b^2`}</MathBlock>

      <p>
        The highest-degree terms are <InlineMath>{`b^2x^2 - a^2y^2`}</InlineMath>. Setting
        this equal to zero:
      </p>

      <MathBlock>{`b^2x^2 - a^2y^2 = 0 \\implies y = \\pm\\frac{b}{a}x`}</MathBlock>

      <p>
        These are the two asymptotes, passing through the center.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">The Rectangular Hyperbola</p>
        <p>
          When <InlineMath>a = b</InlineMath>, the asymptotes are perpendicular:
          <InlineMath>y = \pm x</InlineMath>. This is the <strong>rectangular hyperbola</strong>
          <InlineMath>x^2 - y^2 = a^2</InlineMath>.
        </p>
        <p className="mt-2">
          Rotated 45°, this becomes <InlineMath>xy = k</InlineMath>, with asymptotes
          along the coordinate axes.
        </p>
      </div>

      <h2>The Approach to an Asymptote</h2>

      <p>
        How quickly does a curve approach its asymptote? For the hyperbola, let's compute
        the distance from a point <InlineMath>(x, y)</InlineMath> on the curve to the
        asymptote <InlineMath>bx - ay = 0</InlineMath>:
      </p>

      <MathBlock>{`d = \\frac{|bx - ay|}{\\sqrt{a^2 + b^2}}`}</MathBlock>

      <p>
        On the hyperbola, <InlineMath>{`y = \\frac{b}{a}\\sqrt{x^2 - a^2}`}</InlineMath>, so:
      </p>

      <MathBlock>{`d = \\frac{b\\left|x - \\sqrt{x^2 - a^2}\\right|}{\\sqrt{a^2 + b^2}}`}</MathBlock>

      <p>
        For large <InlineMath>x</InlineMath>:
      </p>

      <MathBlock>{`x - \\sqrt{x^2 - a^2} = \\frac{a^2}{x + \\sqrt{x^2 - a^2}} \\approx \\frac{a^2}{2x}`}</MathBlock>

      <p>
        Thus <InlineMath>{`d \\sim \\frac{1}{x}`}</InlineMath>—the distance decreases like the
        reciprocal of <InlineMath>{`x`}</InlineMath>.
      </p>

      <h2>Asymptotes of Higher-Degree Curves</h2>

      <p>
        For cubic and higher curves, the analysis becomes richer:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Cubic Curves</h4>
          <p className="text-dark-300 text-sm">
            Can have up to 3 asymptotes. Famous example: the Folium of Descartes
            <InlineMath>x^3 + y^3 = 3axy</InlineMath> has asymptote <InlineMath>x + y + a = 0</InlineMath>.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Quartic Curves</h4>
          <p className="text-dark-300 text-sm">
            Can have up to 4 asymptotes, possibly with complex multiplicities or
            asymptotic curves instead of lines.
          </p>
        </div>
      </div>

      <h2>Asymptotes Parallel to Axes</h2>

      <p>
        Vertical and horizontal asymptotes occur when the curve "blows up" at a finite
        value:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>xy = 1</InlineMath></p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>As <InlineMath>x \to 0^+</InlineMath>, <InlineMath>y \to +\infty</InlineMath></li>
          <li>As <InlineMath>y \to 0^+</InlineMath>, <InlineMath>x \to +\infty</InlineMath></li>
        </ul>
        <p className="mt-2">
          Both coordinate axes are asymptotes to this rectangular hyperbola.
        </p>
      </div>

      <p>
        To find vertical asymptotes, look for values of <InlineMath>x</InlineMath> where
        <InlineMath>y \to \pm\infty</InlineMath>. For horizontal asymptotes, find values
        of <InlineMath>y</InlineMath> where <InlineMath>x \to \pm\infty</InlineMath>.
      </p>

      <h2>Oblique Asymptotes</h2>

      <p>
        For oblique (non-vertical, non-horizontal) asymptotes of the form
        <InlineMath>y = mx + c</InlineMath>:
      </p>

      <MathBlock>{`m = \\lim_{x \\to \\infty} \\frac{y}{x}`}</MathBlock>
      <MathBlock>{`c = \\lim_{x \\to \\infty} (y - mx)`}</MathBlock>

      <p>
        If both limits exist and are finite, the line <InlineMath>y = mx + c</InlineMath>
        is an asymptote.
      </p>

      <Callout type="warning">
        <strong>Parabolic Branches:</strong> When <InlineMath>m</InlineMath> exists but
        <InlineMath>c \to \infty</InlineMath>, the branch is <em>parabolic</em>—it recedes
        from all lines. Example: <InlineMath>{`y = \\sqrt{x}`}</InlineMath> has
        <InlineMath>m = 0</InlineMath> but no finite <InlineMath>c</InlineMath>.
      </Callout>

      <h2>Curvilinear Asymptotes</h2>

      <p>
        Euler notes that some curves approach other curves (not just lines) asymptotically:
      </p>

      <MathBlock>{`y = x^2 + \\frac{1}{x}`}</MathBlock>

      <p>
        As <InlineMath>x \to \infty</InlineMath>, this curve approaches the parabola
        <InlineMath>y = x^2</InlineMath>. The parabola serves as a "curvilinear asymptote."
      </p>

      <h2>Properties of Asymptotes</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Summary of Asymptote Properties</h3>
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong>Tangent at infinity:</strong> An asymptote can be viewed as a tangent
            to the curve at an infinitely distant point.
          </li>
          <li>
            <strong>Number:</strong> A curve of degree <InlineMath>n</InlineMath> has at
            most <InlineMath>n</InlineMath> asymptotes.
          </li>
          <li>
            <strong>Real vs. complex:</strong> Some asymptotic directions may be complex;
            only real ones appear geometrically.
          </li>
          <li>
            <strong>Parallel asymptotes:</strong> A curve can have multiple parallel
            asymptotes (e.g., <InlineMath>{`y^2 = x(x-1)(x-2)`}</InlineMath>).
          </li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Asymptotes are lines (or curves) that algebraic
        curves approach at infinity. They arise from analyzing the highest-degree terms
        of the equation. The hyperbola has two asymptotes determined by factoring its
        quadratic terms; higher-degree curves can have more. The rate of approach is
        typically proportional to <InlineMath>1/x</InlineMath>. Understanding asymptotes
        is essential for sketching curves and analyzing their global behavior.
      </Callout>
    </LessonLayout>
  );
}
