import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Chapter XXI: Transcendental Use of Curves</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XXI: De usu Curvarum in rebus transcendentibus
      </p>

      <p>
        Curves can solve not only algebraic equations but also <strong>transcendental
        problems</strong>—those involving non-algebraic quantities like areas, arc
        lengths, and infinite series. Euler shows how curves provide geometric
        insights into analysis.
      </p>

      <Callout type="info">
        <strong>The Bridge:</strong> This chapter connects geometry (curves) with
        analysis (calculus). Many analytical quantities can be visualized and
        computed through geometric constructions.
      </Callout>

      <h2>Quadrature: Finding Areas</h2>

      <p>
        The area under a curve <InlineMath>y = f(x)</InlineMath> from 0 to <InlineMath>x</InlineMath>:
      </p>

      <MathBlock>{`A(x) = \\int_0^x f(t) \\, dt`}</MathBlock>

      <p>
        This integral can be visualized as the area of a region bounded by the curve,
        the axis, and vertical lines.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Area Under a Parabola</p>
        <MathBlock>{`y = x^2 \\implies A(x) = \\int_0^x t^2 \\, dt = \\frac{x^3}{3}`}</MathBlock>
        <p className="mt-2">
          Archimedes discovered that the area of a parabolic segment is 4/3 times
          the area of the inscribed triangle—a result Euler derives analytically.
        </p>
      </div>

      <h2>Rectification: Finding Arc Lengths</h2>

      <p>
        The arc length of <InlineMath>y = f(x)</InlineMath> from <InlineMath>a</InlineMath>
        to <InlineMath>x</InlineMath>:
      </p>

      <MathBlock>{`s(x) = \\int_a^x \\sqrt{1 + (f'(t))^2} \\, dt`}</MathBlock>

      <p>
        For most curves, this integral is transcendental—not expressible in elementary terms.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Rectifiable Curves</h3>
        <p className="mb-4">
          Some curves have algebraic arc length formulas:
        </p>
        <ul className="space-y-2 text-dark-300">
          <li><strong>Straight line:</strong> <InlineMath>s = x</InlineMath> (trivially)</li>
          <li><strong>Catenary:</strong> <InlineMath>s = a\sinh(x/a)</InlineMath></li>
          <li><strong>Cycloid:</strong> <InlineMath>s = 8a</InlineMath> (full arch)</li>
          <li><strong>Semicubical parabola:</strong> <InlineMath>y^2 = x^3</InlineMath> has algebraic arc length</li>
        </ul>
      </div>

      <h2>The Elliptic Integral</h2>

      <p>
        The arc length of an ellipse leads to the famous <strong>elliptic integral</strong>:
      </p>

      <MathBlock>{`s = a \\int_0^\\phi \\sqrt{1 - e^2\\sin^2\\theta} \\, d\\theta`}</MathBlock>

      <p>
        This cannot be expressed in terms of elementary functions—it defines a new
        class of <strong>elliptic functions</strong> that Euler, Legendre, and later
        Jacobi and Weierstrass would develop extensively.
      </p>

      <Callout type="success">
        <strong>Euler's Insight:</strong> The "failure" to express elliptic integrals
        algebraically led to rich new mathematics. What seems like a limitation
        becomes an opportunity for discovery.
      </Callout>

      <h2>Series Representations</h2>

      <p>
        Curves can be used to visualize and compute infinite series:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Area as a Series</p>
        <MathBlock>{`\\int_0^1 \\frac{1}{1+x} \\, dx = \\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots`}</MathBlock>
        <p className="mt-2">
          The area under the hyperbola <InlineMath>y = 1/(1+x)</InlineMath> from 0 to 1
          equals the alternating harmonic series.
        </p>
      </div>

      <h2>Approximating Transcendental Numbers</h2>

      <p>
        Curves provide methods to approximate <InlineMath>\pi</InlineMath>,
        <InlineMath>e</InlineMath>, and other transcendental constants:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Computing <InlineMath>\pi</InlineMath></h4>
          <MathBlock>{`\\pi = 4\\int_0^1 \\frac{1}{1+x^2} \\, dx`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Area under <InlineMath>y = 4/(1+x^2)</InlineMath> from 0 to 1
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Computing <InlineMath>e</InlineMath></h4>
          <MathBlock>{`\\int_1^e \\frac{1}{x} \\, dx = 1`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            <InlineMath>e</InlineMath> is where area under <InlineMath>y = 1/x</InlineMath> equals 1
          </p>
        </div>
      </div>

      <h2>Differential Equations and Curves</h2>

      <p>
        Many differential equations have solutions that are naturally expressed as curves:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <InlineMath>y' = y</InlineMath> → exponential curve <InlineMath>y = Ce^x</InlineMath>
        </li>
        <li>
          <InlineMath>y'' + y = 0</InlineMath> → sine/cosine curves
        </li>
        <li>
          <InlineMath>(y')^2 = y</InlineMath> → parabolas
        </li>
      </ul>

      <p>
        The "phase portrait" of a differential equation is itself a family of curves
        in the plane.
      </p>

      <h2>Physical Applications</h2>

      <p>
        Transcendental curve problems arise naturally in physics:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Physical Problems</h3>
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong className="text-amber-400">Pendulum:</strong> Period involves an
            elliptic integral (not a simple formula)
          </li>
          <li>
            <strong className="text-blue-400">Planetary orbits:</strong> Kepler's
            equation <InlineMath>M = E - e\sin E</InlineMath> is transcendental
          </li>
          <li>
            <strong className="text-purple-400">Heat conduction:</strong> Fourier
            series (infinite sums of sine curves)
          </li>
          <li>
            <strong className="text-emerald-400">Vibrating strings:</strong> Standing
            waves are sine curves
          </li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Curves solve transcendental problems:
        areas (quadrature), arc lengths (rectification), and infinite series can
        all be represented geometrically. Elliptic integrals arise from ellipse
        arc lengths and lead to new classes of functions. Physical problems—pendulums,
        orbits, heat flow—naturally involve transcendental curves. The interplay
        between geometry and analysis is one of mathematics' deepest themes.
      </Callout>
    </LessonLayout>
  );
}
