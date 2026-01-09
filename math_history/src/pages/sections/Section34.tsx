import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2>The Fundamental Theorem of Calculus</h2>

      <p>
        The <strong>Fundamental Theorem of Calculus</strong> is perhaps the most
        important theorem in mathematics. It connects two seemingly different
        problems—finding tangent lines and finding areas—revealing them to be
        inverse operations.
      </p>

      <Callout type="info">
        <strong>Historical Context:</strong> The connection between tangents and
        areas was glimpsed by several mathematicians before Newton and Leibniz,
        including Isaac Barrow (Newton's teacher) and James Gregory. But Newton
        and Leibniz were the first to make it the centerpiece of a systematic
        method.
      </Callout>

      <h3>The Two Parts</h3>

      <p>
        The Fundamental Theorem has two parts, often called FTC I and FTC II:
      </p>

      <Theorem title="Fundamental Theorem of Calculus, Part I">
        <p>
          If <InlineMath>f</InlineMath> is continuous on <InlineMath>[a, b]</InlineMath>{' '}
          and we define:
        </p>
        <MathBlock>
          {`F(x) = \\int_a^x f(t)\\,dt`}
        </MathBlock>
        <p className="mt-2">
          then <InlineMath>F</InlineMath> is differentiable and{' '}
          <InlineMath>F'(x) = f(x)</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          In words: The derivative of the integral is the original function.
        </p>
      </Theorem>

      <Theorem title="Fundamental Theorem of Calculus, Part II">
        <p>
          If <InlineMath>f</InlineMath> is continuous on <InlineMath>[a, b]</InlineMath>{' '}
          and <InlineMath>F</InlineMath> is any antiderivative of{' '}
          <InlineMath>f</InlineMath> (i.e., <InlineMath>F' = f</InlineMath>), then:
        </p>
        <MathBlock>
          {`\\int_a^b f(x)\\,dx = F(b) - F(a)`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          In words: To compute a definite integral, find an antiderivative and
          evaluate at the endpoints.
        </p>
      </Theorem>

      {/* Visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Visualizing the Fundamental Theorem
        </h4>
        <svg viewBox="0 0 500 220" className="w-full h-auto">
          {/* Axes */}
          <line x1="50" y1="180" x2="450" y2="180" stroke="#64748b" strokeWidth="1"/>
          <line x1="50" y1="180" x2="50" y2="20" stroke="#64748b" strokeWidth="1"/>
          
          {/* Function curve */}
          <path 
            d="M 50 150 Q 150 50 250 100 Q 350 150 450 80" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="2"
          />
          <text x="460" y="85" fill="#10b981" fontSize="12">y = f(x)</text>
          
          {/* Shaded area */}
          <path 
            d="M 100 180 L 100 130 Q 175 60 250 100 L 250 180 Z" 
            fill="#10b981" 
            fillOpacity="0.2"
          />
          
          {/* Vertical lines at a and x */}
          <line x1="100" y1="180" x2="100" y2="130" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4"/>
          <line x1="250" y1="180" x2="250" y2="100" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4"/>
          
          {/* Labels */}
          <text x="100" y="195" fill="#818cf8" fontSize="11" textAnchor="middle">a</text>
          <text x="250" y="195" fill="#818cf8" fontSize="11" textAnchor="middle">x</text>
          
          {/* F(x) annotation */}
          <text x="175" y="150" fill="#10b981" fontSize="11" textAnchor="middle">
            F(x) = area
          </text>
          
          {/* Derivative annotation */}
          <path d="M 320 140 L 380 140" stroke="#f59e0b" strokeWidth="2"/>
          <text x="400" y="145" fill="#f59e0b" fontSize="11">F'(x) = f(x)</text>
          
          {/* Small increment */}
          <rect x="250" y="100" width="15" height="80" fill="#f59e0b" fillOpacity="0.3"/>
          <text x="257" y="90" fill="#f59e0b" fontSize="9">dx</text>
          <text x="270" y="145" fill="#f59e0b" fontSize="9">f(x)dx</text>
        </svg>
        <p className="text-sm text-dark-400 mt-2 text-center">
          The rate of change of area F(x) equals the height f(x) of the curve
        </p>
      </div>

      <h3>Why It's True</h3>

      <Example title="Intuitive Argument for FTC I">
        <p>
          Consider <InlineMath>F(x) = \int_a^x f(t)\,dt</InlineMath> as the area
          under <InlineMath>f</InlineMath> from <InlineMath>a</InlineMath> to{' '}
          <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          When <InlineMath>x</InlineMath> increases by a tiny amount{' '}
          <InlineMath>h</InlineMath>, the area increases by approximately:
        </p>
        <MathBlock>
          {`F(x+h) - F(x) \\approx f(x) \\cdot h`}
        </MathBlock>
        <p className="mt-2">
          (a thin rectangle of height <InlineMath>f(x)</InlineMath> and width{' '}
          <InlineMath>h</InlineMath>)
        </p>
        <p className="mt-2">
          Therefore:
        </p>
        <MathBlock>
          {`F'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h} = f(x)`}
        </MathBlock>
      </Example>

      <h3>The Power of FTC</h3>

      <p>
        Before the Fundamental Theorem, computing areas required laborious
        summation techniques. Afterward, it became (relatively) easy:
      </p>

      <Example title="Computing an Integral">
        <p>
          Find <InlineMath>\int_0^1 x^2\,dx</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Old method (Archimedes-style):</strong> Approximate with rectangles,
          take limits of sums. Very difficult!
        </p>
        <p className="mt-2">
          <strong>New method (FTC):</strong> Since{' '}
          <InlineMath>\frac{'{d}'}{'{dx}'}\left(\frac{'{x^3}'}{'{3}'}\right) = x^2</InlineMath>,
          we have:
        </p>
        <MathBlock>
          {`\\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}`}
        </MathBlock>
      </Example>

      <h3>Historical Development</h3>

      <p>
        The theorem emerged gradually:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Before FTC</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Tangent problems: geometric methods</li>
            <li>Area problems: exhaustion, indivisibles</li>
            <li>No connection seen between them</li>
            <li>Each problem solved ad hoc</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">After FTC</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Tangents ↔ Antiderivatives</li>
            <li>Areas ↔ Integrals</li>
            <li>Unified method for both</li>
            <li>Systematic techniques develop</li>
          </ul>
        </div>
      </div>

      <Theorem title="Barrow's Theorem (1670)">
        <p>
          Isaac Barrow proved a geometric version of FTC: if the area under a
          curve is given by another curve, then the tangent to the area curve
          relates to the original curve in a specific way.
        </p>
        <p className="mt-2">
          Barrow didn't recognize this as a fundamental principle—that insight
          came from his student Newton.
        </p>
      </Theorem>

      <h3>The Notation Makes It Clear</h3>

      <p>
        Leibniz's notation beautifully captures the inverse relationship:
      </p>

      <MathBlock>
        {`\\frac{d}{dx}\\left(\\int f(x)\\,dx\\right) = f(x)`}
      </MathBlock>

      <p className="mt-4">
        The integral <InlineMath>\int</InlineMath> and derivative{' '}
        <InlineMath>d/dx</InlineMath> "cancel" each other—they are inverse
        operations, like addition and subtraction, or multiplication and division.
      </p>

      <Callout type="note">
        <strong>A New Era:</strong> The Fundamental Theorem opened the floodgates.
        Problems that had stumped mathematicians for centuries could now be
        solved routinely. Physics, astronomy, engineering—all were transformed
        by this single insight.
      </Callout>

      <h3>Leibniz's Transmutation Theorem</h3>

      <p>
        Leibniz found an elegant alternative formulation relating areas:
      </p>

      <Theorem title="Leibniz's Transmutation">
        <p>
          The area under a curve can be expressed in terms of the areas of
          triangles formed by tangent lines. This provides another proof that
          differentiation and integration are inverse operations.
        </p>
      </Theorem>

      <p>
        In the next section, we'll see how Newton and his successors applied
        calculus to solve physical problems that had been intractable for centuries.
      </p>

      <SectionQuiz
        sectionId={34}
        questions={quizMap[34] || []}
        title="Fundamental Theorem Quiz"
      />
    </LessonLayout>
  );
}
