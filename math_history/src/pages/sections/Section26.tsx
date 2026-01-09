import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2>Fermat and Tangents</h2>

      <p>
        While Descartes focused on the algebraic classification of curves,{' '}
        <strong>Pierre de Fermat</strong> took analytic geometry in a different
        direction—one that would lead directly to calculus. Fermat developed
        methods for finding <em>tangent lines</em> to curves and for locating
        <em> maxima and minima</em> of functions.
      </p>

      <Callout type="info">
        <strong>The Other Founder:</strong> Fermat's work <em>Introduction to
        Plane and Solid Loci</em> (1629) actually predates Descartes' publication,
        though it wasn't published until 1679. Fermat was more systematic than
        Descartes in many ways, but content to leave his work "simple and crude."
      </Callout>

      <h3>The Problem of Tangents</h3>

      <p>
        A <strong>tangent line</strong> to a curve at a point is the line that
        best approximates the curve near that point. For circles, the Greeks knew
        that tangents are perpendicular to radii. But for general curves?
      </p>

      <Definition title="The Tangent Problem">
        <p>
          Given a curve defined by an equation <InlineMath>f(x, y) = 0</InlineMath>
          and a point <InlineMath>P = (a, b)</InlineMath> on the curve, find the
          equation of the tangent line at <InlineMath>P</InlineMath>.
        </p>
      </Definition>

      <h3>Fermat's Method of Adequality</h3>

      <p>
        Fermat introduced a revolutionary technique he called{' '}
        <strong>"adequality"</strong> (from the Latin <em>adaequalitas</em>). The
        idea: a function has a maximum or minimum where two "nearly equal" values
        of <InlineMath>x</InlineMath> give the same value of <InlineMath>f(x)</InlineMath>.
      </p>

      <Theorem title="Fermat's Method for Maxima/Minima">
        <p>
          To find where <InlineMath>f(x)</InlineMath> has a maximum or minimum:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            Replace <InlineMath>x</InlineMath> by <InlineMath>x + e</InlineMath>
            (where <InlineMath>e</InlineMath> is a small quantity)
          </li>
          <li>
            Set <InlineMath>f(x + e) \approx f(x)</InlineMath> ("adequality")
          </li>
          <li>
            Simplify and divide by <InlineMath>e</InlineMath>
          </li>
          <li>
            Set <InlineMath>e = 0</InlineMath> to find the critical point
          </li>
        </ol>
      </Theorem>

      <Example title="Finding a Maximum">
        <p>
          Find the maximum of <InlineMath>f(x) = x(a - x) = ax - x^2</InlineMath>:
        </p>
        <MathBlock>
          {`\\begin{aligned}
f(x + e) &= a(x + e) - (x + e)^2 \\\\
&= ax + ae - x^2 - 2xe - e^2 \\\\
f(x + e) &\\approx f(x) \\\\
ax + ae - x^2 - 2xe - e^2 &\\approx ax - x^2 \\\\
ae - 2xe - e^2 &\\approx 0 \\\\
a - 2x - e &\\approx 0 \\quad \\text{(dividing by } e\\text{)} \\\\
a - 2x &= 0 \\quad \\text{(setting } e = 0\\text{)} \\\\
x &= \\frac{a}{2}
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The maximum occurs at <InlineMath>x = a/2</InlineMath>, giving{' '}
          <InlineMath>f(a/2) = a^2/4</InlineMath>.
        </p>
      </Example>

      {/* Visualization of tangent line */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Tangent Line as Limit of Secants
        </h4>
        <svg viewBox="0 0 400 250" className="w-full h-auto">
          {/* Axes */}
          <line x1="40" y1="220" x2="380" y2="220" stroke="#6b7280" strokeWidth="1"/>
          <line x1="40" y1="220" x2="40" y2="20" stroke="#6b7280" strokeWidth="1"/>
          
          {/* Parabola y = -0.01(x-200)^2 + 180 */}
          <path d="M 60 180 Q 200 10 340 180" fill="none" stroke="#10b981" strokeWidth="2"/>
          
          {/* Point P */}
          <circle cx="140" cy="116" r="5" fill="#f59e0b"/>
          <text x="125" y="105" fill="#fbbf24" fontSize="11">P</text>
          
          {/* Point Q (moving) */}
          <circle cx="260" cy="116" r="4" fill="#ef4444" fillOpacity="0.6"/>
          <text x="265" y="105" fill="#f87171" fontSize="10">Q</text>
          
          {/* Secant line PQ */}
          <line x1="60" y1="116" x2="340" y2="116" stroke="#ef4444" strokeWidth="1" strokeDasharray="4"/>
          
          {/* Closer point Q' */}
          <circle cx="200" cy="58" r="4" fill="#8b5cf6" fillOpacity="0.6"/>
          <text x="205" y="50" fill="#a78bfa" fontSize="10">Q'</text>
          
          {/* Secant line PQ' */}
          <line x1="80" y1="156" x2="280" y2="10" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4"/>
          
          {/* Tangent line */}
          <line x1="40" y1="188" x2="280" y2="28" stroke="#818cf8" strokeWidth="2"/>
          <text x="240" y="22" fill="#a5b4fc" fontSize="11">Tangent</text>
          
          {/* Labels */}
          <text x="200" y="245" fill="#94a3b8" fontSize="10" textAnchor="middle">
            As Q approaches P, the secant becomes the tangent
          </text>
        </svg>
      </div>

      <h3>From Maxima to Tangents</h3>

      <p>
        Fermat cleverly connected the tangent problem to the maximum problem.
        The key insight: the tangent line at <InlineMath>P</InlineMath> is the
        unique line through <InlineMath>P</InlineMath> that intersects the curve
        with <em>multiplicity 2</em> (a "double root").
      </p>

      <Definition title="Fermat's Tangent Method">
        <p>
          For a curve <InlineMath>y = f(x)</InlineMath> at point{' '}
          <InlineMath>(a, f(a))</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            The tangent line has form{' '}
            <InlineMath>y - f(a) = m(x - a)</InlineMath>
          </li>
          <li>
            The slope <InlineMath>m</InlineMath> is found by Fermat's adequality method
          </li>
          <li>
            Modern notation: <InlineMath>m = f'(a)</InlineMath> (the derivative!)
          </li>
        </ol>
      </Definition>

      <Example title="Tangent to a Parabola">
        <p>
          Find the tangent to <InlineMath>y = x^2</InlineMath> at{' '}
          <InlineMath>(a, a^2)</InlineMath>:
        </p>
        <MathBlock>
          {`\\begin{aligned}
f(a + e) &= (a + e)^2 = a^2 + 2ae + e^2 \\\\
\\frac{f(a + e) - f(a)}{e} &= \\frac{2ae + e^2}{e} = 2a + e \\\\
\\text{As } e \\to 0: \\quad &\\text{slope} = 2a
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          The tangent line at <InlineMath>(a, a^2)</InlineMath> is{' '}
          <InlineMath>y - a^2 = 2a(x - a)</InlineMath>, or{' '}
          <InlineMath>y = 2ax - a^2</InlineMath>.
        </p>
      </Example>

      <h3>The Proto-Derivative</h3>

      <p>
        Fermat's method is essentially computing what we now call the{' '}
        <strong>derivative</strong>:
      </p>

      <Theorem title="Fermat's Formula (Modern Notation)">
        <MathBlock>
          {`f'(a) = \\lim_{e \\to 0} \\frac{f(a + e) - f(a)}{e}`}
        </MathBlock>
        <p className="mt-2">
          This is the <em>difference quotient</em> that Newton and Leibniz would
          later formalize as the foundation of calculus.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Priority Note:</strong> Fermat discovered these methods around
        1629, about 40 years before Newton and Leibniz developed calculus. But
        Fermat never systematized his approach or recognized its full generality.
      </Callout>

      <h3>Fermat's Other Contributions</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Number Theory</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Fermat's Little Theorem</li>
            <li>Fermat's Last Theorem (famously)</li>
            <li>Theory of primes and divisibility</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Optics</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Principle of least time</li>
            <li>Derived law of refraction</li>
            <li>Variational principles</li>
          </ul>
        </div>
      </div>

      <h3>The Difference Between Fermat and Descartes</h3>

      <Example title="Two Approaches">
        <p className="mb-2">
          <strong>Descartes:</strong> Classify curves algebraically. What curves
          arise from degree-<InlineMath>n</InlineMath> equations?
        </p>
        <p>
          <strong>Fermat:</strong> Analyze curves geometrically. What are the
          tangents, maxima, minima, and areas related to a curve?
        </p>
        <p className="mt-2 text-dark-400">
          Both approaches were essential. Descartes' led to algebraic geometry;
          Fermat's led to calculus.
        </p>
      </Example>

      <Callout type="info">
        <strong>Legacy:</strong> Fermat's tangent method was the missing link
        between ancient geometry and modern calculus. Newton explicitly acknowledged
        Fermat's influence, and the derivative—the central concept of calculus—is
        nothing but Fermat's "adequality" made rigorous.
      </Callout>

      <SectionQuiz
        sectionId={26}
        questions={quizMap[26] || []}
        title="Fermat and Tangents Quiz"
      />
    </LessonLayout>
  );
}
