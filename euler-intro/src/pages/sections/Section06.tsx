import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Chapter VII: Infinite Branches</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput VII: De ramis infinitis Curvarum
      </p>

      <p>
        A crucial aspect of understanding algebraic curves is analyzing their behavior
        "at infinity"—how do the branches of a curve extend as coordinates become arbitrarily
        large? This chapter develops Euler's systematic approach to <strong>infinite branches</strong>.
      </p>

      <Callout type="info">
        <strong>Why This Matters:</strong> The behavior at infinity distinguishes fundamentally
        different types of curves. An ellipse is bounded, a parabola has one infinite branch,
        and a hyperbola has two. Higher-order curves can have many more.
      </Callout>

      <h2>Counting Infinite Branches</h2>

      <p>
        For a curve of order <InlineMath>n</InlineMath>, the maximum number of infinite
        branches is <InlineMath>n</InlineMath>. To find them, we examine what happens as
        <InlineMath>x \to \infty</InlineMath> or <InlineMath>y \to \infty</InlineMath>.
      </p>

      <p>
        Consider the general equation:
      </p>

      <MathBlock>{`f(x, y) = \\sum_{i+j \\leq n} a_{ij} x^i y^j = 0`}</MathBlock>

      <p>
        If we write <InlineMath>y = mx</InlineMath> and let <InlineMath>x \to \infty</InlineMath>,
        the dominant terms are those of highest degree. Setting these equal to zero gives:
      </p>

      <MathBlock>{`\\sum_{i+j = n} a_{ij} m^j = 0`}</MathBlock>

      <p>
        This polynomial in <InlineMath>m</InlineMath> has degree at most <InlineMath>n</InlineMath>,
        giving at most <InlineMath>n</InlineMath> asymptotic directions.
      </p>

      <h2>Behavior of Conics at Infinity</h2>

      <p>
        For second-order curves, the highest-degree terms are:
      </p>

      <MathBlock>{`\\alpha x^2 + \\beta xy + \\gamma y^2 = 0`}</MathBlock>

      <p>
        Setting <InlineMath>y = mx</InlineMath>:
      </p>

      <MathBlock>{`\\alpha + \\beta m + \\gamma m^2 = 0`}</MathBlock>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Ellipse</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\beta^2 - 4\\alpha\\gamma < 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            No real solutions for <InlineMath>m</InlineMath>
          </p>
          <p className="text-emerald-400 text-sm mt-1">
            → <strong>No infinite branches</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Parabola</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\beta^2 - 4\\alpha\\gamma = 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            One real solution for <InlineMath>m</InlineMath>
          </p>
          <p className="text-blue-400 text-sm mt-1">
            → <strong>One infinite branch</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Hyperbola</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`\\beta^2 - 4\\alpha\\gamma > 0`}</InlineMath>
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Two real solutions for <InlineMath>m</InlineMath>
          </p>
          <p className="text-amber-400 text-sm mt-1">
            → <strong>Two infinite branches</strong>
          </p>
        </div>
      </div>

      <h2>Types of Infinite Branches</h2>

      <p>
        Euler distinguishes several types of behavior as a branch extends to infinity:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Classification of Infinite Branches</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong className="text-amber-400">Hyperbolic branches:</strong> Approach a
            straight line asymptote as <InlineMath>x \to \infty</InlineMath>
          </li>
          <li>
            <strong className="text-blue-400">Parabolic branches:</strong> Curve away
            from any fixed line, but more slowly than a line would
          </li>
          <li>
            <strong className="text-purple-400">Hyperparabolic branches:</strong> Diverge
            faster than any linear asymptote
          </li>
        </ol>
      </div>

      <h2>The Parabolic Branch</h2>

      <p>
        A parabolic branch occurs when the curve approaches infinity but has no finite
        asymptote. For the standard parabola <InlineMath>y^2 = 4px</InlineMath>:
      </p>

      <MathBlock>{`y = 2\\sqrt{px} \\sim 2\\sqrt{p}\\sqrt{x}`}</MathBlock>

      <p>
        As <InlineMath>x \to \infty</InlineMath>, <InlineMath>y</InlineMath> grows like
        <InlineMath>\sqrt{x}</InlineMath>—slower than any line (which grows like <InlineMath>x</InlineMath>).
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Characterization</p>
        <p>
          A branch is <em>parabolic</em> if <InlineMath>y/x \to 0</InlineMath> as both
          <InlineMath>x, y \to \infty</InlineMath>. The curve eventually becomes
          "flatter than any line" but never stops growing.
        </p>
      </div>

      <h2>The Hyperbolic Branch</h2>

      <p>
        A hyperbolic branch approaches a definite asymptote. For the hyperbola
        <InlineMath>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</InlineMath>:
      </p>

      <MathBlock>{`y = \\pm\\frac{b}{a}\\sqrt{x^2 - a^2} = \\pm\\frac{b}{a}x\\sqrt{1 - \\frac{a^2}{x^2}}`}</MathBlock>

      <p>
        As <InlineMath>x \to \infty</InlineMath>:
      </p>

      <MathBlock>{`y \\approx \\pm\\frac{b}{a}x`}</MathBlock>

      <p>
        The branches approach the asymptotes <InlineMath>{`y = \\pm\\frac{b}{a}x`}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Property:</strong> A hyperbolic branch approaches its asymptote
        arbitrarily closely—the perpendicular distance goes to zero—but never actually
        touches it (in finite coordinates).
      </Callout>

      <h2>Higher-Order Curves</h2>

      <p>
        Cubic curves (order 3) can have up to 3 infinite branches:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Three hyperbolic branches (approaching three asymptotes)</li>
        <li>One hyperbolic and one parabolic branch</li>
        <li>Other combinations depending on the specific equation</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Cubic with Three Asymptotes</p>
        <MathBlock>{`xy(x + y) = a^3`}</MathBlock>
        <p className="mt-2">
          This curve has three asymptotes: <InlineMath>x = 0</InlineMath>,
          <InlineMath>y = 0</InlineMath>, and <InlineMath>x + y = 0</InlineMath>.
        </p>
      </div>

      <h2>Determining the Number of Branches</h2>

      <p>
        For a curve of order <InlineMath>n</InlineMath>:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Write the highest-degree terms: <InlineMath>F_n(x, y) = 0</InlineMath></li>
        <li>Substitute <InlineMath>y = mx</InlineMath> to get a polynomial in <InlineMath>m</InlineMath></li>
        <li>Count the real roots—each corresponds to an asymptotic direction</li>
        <li>Analyze the next-order terms to determine if branches are parabolic or hyperbolic</li>
      </ol>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The behavior of algebraic curves at infinity is
        determined by the highest-degree terms in their equations. Conics have 0, 1, or 2
        infinite branches (ellipse, parabola, hyperbola respectively). Higher-order curves
        can have more branches, each either parabolic (no asymptote) or hyperbolic (with
        asymptote). Understanding infinite branches is essential for visualizing and
        classifying algebraic curves.
      </Callout>
    </LessonLayout>
  );
}
