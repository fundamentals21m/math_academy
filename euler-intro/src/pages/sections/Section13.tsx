import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Chapter XIV: Transcendental Curved Lines</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XIV: De Lineis curvis transcendentibus
      </p>

      <p>
        Having exhausted the study of algebraic curves, Euler now turns to
        <strong> transcendental curves</strong>—curves defined by equations involving
        non-algebraic functions such as logarithms, exponentials, and trigonometric
        functions. These curves obey different laws than their algebraic cousins.
      </p>

      <Callout type="info">
        <strong>What Makes Them "Transcendental"?</strong> A curve is transcendental
        if it cannot be defined by any polynomial equation in <InlineMath>x</InlineMath>
        and <InlineMath>y</InlineMath>. Such curves "transcend" (go beyond) the realm
        of algebra.
      </Callout>

      <h2>The Exponential Curve</h2>

      <p>
        The simplest transcendental curve is the exponential:
      </p>

      <MathBlock>{`y = a^x \\quad \\text{or equivalently} \\quad y = e^{kx}`}</MathBlock>

      <p>
        Properties of the exponential curve:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Always positive: <InlineMath>y &gt; 0</InlineMath> for all <InlineMath>x</InlineMath></li>
        <li>Horizontal asymptote: <InlineMath>y \to 0</InlineMath> as <InlineMath>x \to -\infty</InlineMath></li>
        <li>Grows without bound as <InlineMath>x \to +\infty</InlineMath></li>
        <li>Passes through <InlineMath>(0, 1)</InlineMath></li>
        <li>The tangent at any point has slope proportional to <InlineMath>y</InlineMath></li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Euler's Discovery</p>
        <p>
          Euler proved that <InlineMath>e^x</InlineMath> is its own derivative—the
          only function (up to scaling) with this property. This makes the exponential
          fundamental to differential equations.
        </p>
      </div>

      <h2>The Logarithmic Curve</h2>

      <p>
        The inverse of the exponential is the logarithm:
      </p>

      <MathBlock>{`y = \\log_a x \\quad \\text{or} \\quad y = \\ln x`}</MathBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Properties</h4>
          <ul className="text-dark-300 text-sm space-y-1">
            <li>Domain: <InlineMath>x &gt; 0</InlineMath></li>
            <li>Vertical asymptote at <InlineMath>x = 0</InlineMath></li>
            <li>Passes through <InlineMath>(1, 0)</InlineMath></li>
            <li>Grows slowly: <InlineMath>\ln x \to \infty</InlineMath> as <InlineMath>x \to \infty</InlineMath></li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Key Identity</h4>
          <MathBlock>{`\\ln(ab) = \\ln a + \\ln b`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Logarithms convert multiplication to addition—crucial for computation
            before calculators.
          </p>
        </div>
      </div>

      <h2>Trigonometric Curves</h2>

      <p>
        The sine and cosine curves are periodic transcendentals:
      </p>

      <MathBlock>{`y = \\sin x, \\quad y = \\cos x`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Properties of Sine and Cosine</h3>
        <ul className="space-y-2 text-dark-300">
          <li>Period: <InlineMath>2\pi</InlineMath></li>
          <li>Amplitude: <InlineMath>1</InlineMath> (range <InlineMath>[-1, 1]</InlineMath>)</li>
          <li>Infinitely many zeros, maxima, and minima</li>
          <li><InlineMath>\cos x = \sin(x + \pi/2)</InlineMath></li>
          <li>The derivative of sine is cosine</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Euler's Formula:</strong> The deepest connection between exponentials
        and trigonometry is Euler's famous identity:
        <MathBlock>{`e^{ix} = \\cos x + i\\sin x`}</MathBlock>
        This unifies exponential and trigonometric curves in the complex plane.
      </Callout>

      <h2>The Tangent and Other Trigonometric Curves</h2>

      <MathBlock>{`y = \\tan x = \\frac{\\sin x}{\\cos x}`}</MathBlock>

      <p>
        The tangent curve has:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Period <InlineMath>\pi</InlineMath> (half that of sine/cosine)</li>
        <li>Vertical asymptotes at <InlineMath>x = \pm\pi/2, \pm3\pi/2, \ldots</InlineMath></li>
        <li>Passes through the origin</li>
        <li>Unbounded: ranges over all real numbers</li>
      </ul>

      <h2>The Catenary</h2>

      <p>
        The catenary is the shape of a hanging chain under gravity:
      </p>

      <MathBlock>{`y = a\\cosh\\left(\\frac{x}{a}\\right) = \\frac{a}{2}\\left(e^{x/a} + e^{-x/a}\\right)`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Historical Note</p>
        <p>
          Galileo thought a hanging chain formed a parabola. The Bernoullis and
          Leibniz showed it's actually a catenary—a transcendental curve. Euler
          later provided the definitive analysis.
        </p>
      </div>

      <h2>The Cycloid</h2>

      <p>
        The path traced by a point on a rolling circle:
      </p>

      <MathBlock>{`x = a(\\theta - \\sin\\theta), \\quad y = a(1 - \\cos\\theta)`}</MathBlock>

      <p>
        Properties of the cycloid:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Cusps at <InlineMath>\theta = 0, 2\pi, 4\pi, \ldots</InlineMath></li>
        <li>Arc length and area have elegant formulas</li>
        <li>The "brachistochrone" (curve of fastest descent) is a cycloid</li>
        <li>The "tautochrone" (curve of equal time) is also a cycloid</li>
      </ul>

      <h2>Spirals</h2>

      <p>
        Spirals are transcendental curves naturally expressed in polar coordinates:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Archimedean Spiral</h4>
          <MathBlock>{`r = a\\theta`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Equal spacing between turns
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Logarithmic Spiral</h4>
          <MathBlock>{`r = ae^{b\\theta}`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Self-similar; appears in nature (shells, galaxies)
          </p>
        </div>
      </div>

      <h2>No Classification by Order</h2>

      <Callout type="warning">
        <strong>Key Difference:</strong> Unlike algebraic curves, transcendental
        curves cannot be classified by "order" since they have no polynomial equation.
        A transcendental curve intersects a line in potentially infinitely many points
        (e.g., <InlineMath>y = \sin x</InlineMath> crosses the <InlineMath>x</InlineMath>-axis
        infinitely often).
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Transcendental curves—exponentials, logarithms,
        trigonometric functions, catenaries, cycloids, and spirals—extend the study of
        curves beyond algebraic equations. They exhibit phenomena impossible for algebraic
        curves: periodicity, infinitely many intersections with lines, and connections
        to physical problems like the hanging chain and brachistochrone. Euler's formula
        reveals the deep unity between exponential and trigonometric curves.
      </Callout>
    </LessonLayout>
  );
}
