import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2>Descartes and Coordinates</h2>

      <p>
        The basic idea of <strong>analytic geometry</strong> is the representation
        of curves by equations. But this alone isn't the whole story—the Greeks
        already knew equations for conic sections. What makes analytic geometry
        revolutionary is the power to <em>manipulate</em> equations to discover
        properties of curves, and the confidence to let equations{' '}
        <em>define</em> curves directly.
      </p>

      <Callout type="info">
        <strong>A Simultaneous Discovery:</strong> Analytic geometry was
        independently discovered by <strong>Fermat</strong> (1629) and{' '}
        <strong>Descartes</strong> (1637). Both even began with the same classical
        problem—the four-line problem of Apollonius—and both discovered that
        second-degree equations correspond to conic sections.
      </Callout>

      <h3>What the Greeks Lacked</h3>

      <p>
        The Greeks used curves to study algebra, not the other way around.
        Menaechmus' construction of <InlineMath>\sqrt[3]{'{2}'}</InlineMath> is
        a perfect example: taking cube roots wasn't a given operation, but something
        that had to be <em>secured</em> by geometric construction.
      </p>

      <Definition title="The Greek Limitation">
        <p>
          For the Greeks, an equation was not an entity in its own right, but a
          <em> property</em> of a curve discovered <em>after</em> the curve had
          been constructed geometrically. When equations took half a page to write
          out (as in Apollonius), it was impossible to form a general concept of
          equation, function, or curve.
        </p>
      </Definition>

      <h3>Medieval Precursors</h3>

      <p>
        <strong>Nicole Oresme</strong> (1323-1382) took a crucial step beyond the
        Greeks. While coordinates had been used in astronomy and geography since
        Hipparchus (~150 BCE), Oresme seems to have been the first to use them
        to represent <em>functions</em>—like velocity as a function of time.
      </p>

      <Example title="Oresme's Innovation">
        <p>
          Oresme called his coordinates "longitude" and "latitude" (borrowing from
          geography). His key insight was to set up the coordinate system{' '}
          <strong>before</strong> determining the curve—the opposite of the Greek
          approach. But he too lacked the algebraic notation to go further.
        </p>
      </Example>

      <h3>The Crucial Step: Algebraic Notation</h3>

      <p>
        What finally made analytic geometry feasible was the solution of equations
        and improvement of notation in the 16th century (Chapter 6). This made it
        possible to consider equations—and hence curves—in generality.
      </p>

      <Theorem title="The Power of Coordinates">
        <p>
          In the coordinate plane, every point <InlineMath>(x, y)</InlineMath> can
          be described by two numbers. A curve is then the set of all points whose
          coordinates satisfy some equation:
        </p>
        <MathBlock>
          {`f(x, y) = 0`}
        </MathBlock>
        <p className="mt-2">
          Different equations define different curves. The <em>degree</em> of the
          equation measures the complexity of the curve.
        </p>
      </Theorem>

      {/* Visualization of coordinate system */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          The Cartesian Coordinate System
        </h4>
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid)"/>
          
          {/* Axes */}
          <line x1="0" y1="150" x2="400" y2="150" stroke="#6b7280" strokeWidth="2"/>
          <line x1="200" y1="0" x2="200" y2="300" stroke="#6b7280" strokeWidth="2"/>
          
          {/* Axis labels */}
          <text x="390" y="140" fill="#94a3b8" fontSize="14">x</text>
          <text x="210" y="15" fill="#94a3b8" fontSize="14">y</text>
          
          {/* Origin */}
          <circle cx="200" cy="150" r="4" fill="#818cf8"/>
          <text x="185" y="170" fill="#818cf8" fontSize="12">O</text>
          
          {/* A point P */}
          <circle cx="280" cy="70" r="5" fill="#f59e0b"/>
          <text x="290" y="65" fill="#fbbf24" fontSize="12">P(x, y)</text>
          
          {/* Dashed lines to axes */}
          <line x1="280" y1="70" x2="280" y2="150" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="280" y1="70" x2="200" y2="70" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4"/>
          
          {/* Coordinate labels */}
          <text x="275" y="165" fill="#f59e0b" fontSize="11">x</text>
          <text x="185" y="75" fill="#f59e0b" fontSize="11">y</text>
          
          {/* A parabola */}
          <path d="M 120 270 Q 200 30 280 270" fill="none" stroke="#10b981" strokeWidth="2"/>
          <text x="290" y="250" fill="#34d399" fontSize="11">y = ax²</text>
          
          {/* A line */}
          <line x1="40" y1="230" x2="360" y2="70" stroke="#818cf8" strokeWidth="1.5"/>
          <text x="350" y="60" fill="#a5b4fc" fontSize="11">y = mx + b</text>
        </svg>
      </div>

      <h3>Descartes' La Géométrie (1637)</h3>

      <p>
        <strong>René Descartes'</strong> <em>La Géométrie</em> was written not to
        explain but to <em>boast</em>. He wanted to show off his discoveries while
        withholding their power from rivals. Proofs are frequently omitted with
        remarks like: "I shall not stop to explain this in more detail, because
        I should deprive you of the pleasure of mastering it yourself."
      </p>

      <Example title="Descartes' Contributions">
        <ul className="space-y-2">
          <li>
            <strong>Notation:</strong> Used letters at the end of the alphabet
            (<InlineMath>x, y, z</InlineMath>) for unknowns, and early letters
            (<InlineMath>a, b, c</InlineMath>) for constants
          </li>
          <li>
            <strong>Coordinate System:</strong> Established the framework we now
            call "Cartesian coordinates"
          </li>
          <li>
            <strong>Classification:</strong> Recognized that second-degree equations
            always give conic sections
          </li>
        </ul>
      </Example>

      <Callout type="note">
        <strong>Descartes' Mistake:</strong> On page 91 of <em>La Géométrie</em>,
        Descartes claimed that "the ratios between straight and curved lines are
        not known, and I believe cannot be discovered by human minds." Just 20 years
        later, Neil and van Heuraet found the arc length of the semicubical parabola
        <InlineMath>y^2 = x^3</InlineMath>!
      </Callout>

      <h3>Equations and Conic Sections</h3>

      <p>
        Both Fermat and Descartes discovered that every second-degree equation
        in <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> represents
        a conic section (or a degenerate case like two lines).
      </p>

      <Theorem title="Classification of Conics">
        <p>
          Every conic section has a standard form equation:
        </p>
        <MathBlock>
          {`\\begin{aligned}
\\frac{x^2}{a^2} + \\frac{y^2}{b^2} &= 1 \\quad \\text{(ellipse)} \\\\[6pt]
y &= ax^2 \\quad \\text{(parabola)} \\\\[6pt]
\\frac{x^2}{a^2} - \\frac{y^2}{b^2} &= 1 \\quad \\text{(hyperbola)}
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          Any quadratic equation can be reduced to one of these forms by rotation
          and translation of axes.
        </p>
      </Theorem>

      <Example title="Reducing a General Quadratic">
        <p>
          The general second-degree equation:
        </p>
        <MathBlock>
          {`ax^2 + bxy + cy^2 + dx + ey + f = 0`}
        </MathBlock>
        <p className="mt-2">can be simplified by:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            <strong>Rotation:</strong> Choose angle <InlineMath>\theta</InlineMath>
            {' '}to eliminate the <InlineMath>xy</InlineMath> term
          </li>
          <li>
            <strong>Translation:</strong> Shift origin to eliminate linear terms
          </li>
          <li>
            <strong>Result:</strong> Standard form (ellipse, parabola, or hyperbola)
          </li>
        </ol>
      </Example>

      <h3>The Unification of Algebra and Geometry</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Algebra → Geometry</h4>
          <p className="text-sm text-dark-300">
            Every polynomial equation defines a curve. Properties of the equation
            (degree, coefficients) determine properties of the curve (complexity,
            shape).
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Geometry → Algebra</h4>
          <p className="text-sm text-dark-300">
            Geometric problems (intersections, tangents, areas) become algebraic
            problems (solving equations, finding derivatives, computing integrals).
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Looking Ahead:</strong> This marriage of algebra and geometry at
        a higher level would lead to the modern field of <em>algebraic geometry</em>—one
        of the deepest areas of contemporary mathematics.
      </Callout>

      <SectionQuiz
        sectionId={25}
        questions={quizMap[25] || []}
        title="Descartes and Coordinates Quiz"
      />
    </LessonLayout>
  );
}
