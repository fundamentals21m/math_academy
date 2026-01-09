import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2>Algebraic Curves</h2>

      <p>
        Descartes defined what we now call <strong>algebraic curves</strong>—curves
        that can be expressed by polynomial equations. He called them "geometric"
        curves, distinguishing them from "mechanical" curves like the cycloid
        that arise from rolling motions.
      </p>

      <Callout type="info">
        <strong>Descartes' Definition (1637):</strong> "All points of those curves
        which we may call 'geometric' must bear a definite relation to all points
        of a straight line, and this relation must be expressed by means of a
        single equation."
      </Callout>

      <h3>Classification by Degree</h3>

      <p>
        The <strong>degree</strong> of a polynomial equation gives a natural
        classification of curves by complexity:
      </p>

      <Definition title="Algebraic Curves by Degree">
        <ul className="space-y-2">
          <li>
            <strong>Degree 1:</strong> Lines —{' '}
            <InlineMath>ax + by + c = 0</InlineMath>
          </li>
          <li>
            <strong>Degree 2:</strong> Conics —{' '}
            <InlineMath>ax^2 + bxy + cy^2 + dx + ey + f = 0</InlineMath>
          </li>
          <li>
            <strong>Degree 3:</strong> Cubic curves — including inflection points,
            double points, and cusps
          </li>
          <li>
            <strong>Degree n:</strong> Higher curves with increasingly complex features
          </li>
        </ul>
      </Definition>

      <h3>Cubic Curves: New Phenomena</h3>

      <p>
        With third-degree curves, we encounter phenomena impossible for conics:
        <strong> inflection points</strong>, <strong>double points</strong>, and{' '}
        <strong>cusps</strong>.
      </p>

      <Example title="Types of Singular Points">
        <ul className="space-y-2">
          <li>
            <strong>Inflection:</strong> Where the curve changes from concave to
            convex (e.g., <InlineMath>y = x^3</InlineMath> at the origin)
          </li>
          <li>
            <strong>Cusp:</strong> A sharp point where the curve meets itself
            tangentially (e.g., <InlineMath>y^2 = x^3</InlineMath>)
          </li>
          <li>
            <strong>Double point (node):</strong> Where the curve crosses itself
            (e.g., <InlineMath>y^2 = x^2(x + 1)</InlineMath>)
          </li>
        </ul>
      </Example>

      {/* Visualization of singular points */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Singular Points on Cubic Curves
        </h4>
        <svg viewBox="0 0 500 180" className="w-full h-auto">
          {/* Three boxes for three types */}
          
          {/* Inflection */}
          <g transform="translate(20, 20)">
            <rect width="140" height="140" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="70" y="20" fill="#818cf8" fontSize="11" textAnchor="middle" fontWeight="bold">Inflection</text>
            {/* y = x³ curve */}
            <path d="M 30 110 Q 70 70 70 70 Q 70 70 110 30" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="70" cy="70" r="4" fill="#f59e0b"/>
            <text x="70" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">y = x³</text>
          </g>
          
          {/* Cusp */}
          <g transform="translate(180, 20)">
            <rect width="140" height="140" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="70" y="20" fill="#818cf8" fontSize="11" textAnchor="middle" fontWeight="bold">Cusp</text>
            {/* y² = x³ curve (semicubical parabola) */}
            <path d="M 40 40 Q 70 70 70 70 Q 70 70 40 100" fill="none" stroke="#10b981" strokeWidth="2"/>
            <path d="M 70 70 L 120 70" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="70" cy="70" r="4" fill="#f59e0b"/>
            <text x="70" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">y² = x³</text>
          </g>
          
          {/* Node */}
          <g transform="translate(340, 20)">
            <rect width="140" height="140" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="70" y="20" fill="#818cf8" fontSize="11" textAnchor="middle" fontWeight="bold">Node (Double Point)</text>
            {/* y² = x²(x+1) - two loops crossing */}
            <ellipse cx="50" cy="70" rx="25" ry="35" fill="none" stroke="#10b981" strokeWidth="2"/>
            <path d="M 75 70 Q 110 50 110 70 Q 110 90 75 70" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="75" cy="70" r="4" fill="#f59e0b"/>
            <text x="70" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">y² = x²(x+1)</text>
          </g>
        </svg>
      </div>

      <h3>The Folium of Descartes</h3>

      <p>
        A famous cubic curve discovered by Descartes in 1638 is the{' '}
        <strong>folium</strong> (Latin for "leaf"):
      </p>

      <Definition title="Folium of Descartes">
        <MathBlock>
          {`x^3 + y^3 = 3axy`}
        </MathBlock>
        <p className="mt-2">
          The "leaf" is the closed portion near the origin. Descartes himself
          misunderstood the rest of the curve through neglect of negative coordinates.
          The true shape was first given by Huygens in 1692.
        </p>
      </Definition>

      <Example title="Parameterizing the Folium">
        <p>
          Using the chord method (Section 13), we find parametric equations by
          intersecting the curve with lines <InlineMath>y = tx</InlineMath>:
        </p>
        <MathBlock>
          {`x = \\frac{3at}{1 + t^3}, \\quad y = \\frac{3at^2}{1 + t^3}`}
        </MathBlock>
        <p className="mt-2">
          The curve has an asymptote along the line{' '}
          <InlineMath>x + y + a = 0</InlineMath>.
        </p>
      </Example>

      <h3>Transcendental vs. Algebraic</h3>

      <p>
        Descartes' restriction to polynomial equations was deliberate—he wanted
        to exclude curves arising from "mechanical" constructions like rolling
        circles.
      </p>

      <Theorem title="Algebraic vs. Transcendental Curves">
        <p>
          <strong>Algebraic curves:</strong> Defined by polynomial equations{' '}
          <InlineMath>f(x, y) = 0</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Transcendental curves:</strong> Cannot be defined by polynomial
          equations. Examples include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The <strong>cycloid</strong> (path traced by a point on a rolling circle)
          </li>
          <li>
            The <strong>catenary</strong> (<InlineMath>y = \cosh x</InlineMath>)
          </li>
          <li>
            The <strong>logarithmic spiral</strong>
          </li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>Descartes' Shortsightedness:</strong> Descartes called transcendental
        curves "mechanical" and rejected them as not truly geometric. But calculus
        soon provided powerful techniques to handle them, and they proved essential
        in physics (the cycloid is the brachistochrone!).
      </Callout>

      <h3>Intersection of Curves</h3>

      <p>
        A fundamental question: how many points do two curves share?
      </p>

      <Theorem title="Bézout's Theorem (Preview)">
        <p>
          Two algebraic curves of degrees <InlineMath>m</InlineMath> and{' '}
          <InlineMath>n</InlineMath> intersect in at most{' '}
          <InlineMath>mn</InlineMath> points (counted with multiplicity, including
          points "at infinity" and complex points).
        </p>
        <MathBlock>
          {`\\text{deg}(C_1) \\cdot \\text{deg}(C_2) = m \\cdot n = \\text{number of intersections}`}
        </MathBlock>
      </Theorem>

      <Example title="Intersection Counts">
        <ul className="space-y-1">
          <li>
            <strong>Line meets line:</strong> <InlineMath>1 \cdot 1 = 1</InlineMath> point
            (unless parallel)
          </li>
          <li>
            <strong>Line meets conic:</strong> <InlineMath>1 \cdot 2 = 2</InlineMath> points
          </li>
          <li>
            <strong>Conic meets conic:</strong> <InlineMath>2 \cdot 2 = 4</InlineMath> points
          </li>
          <li>
            <strong>Line meets cubic:</strong> <InlineMath>1 \cdot 3 = 3</InlineMath> points
          </li>
        </ul>
      </Example>

      <h3>The Roses of Grandi</h3>

      <p>
        Beautiful algebraic curves were discovered by <strong>Guido Grandi</strong>
        in 1723:
      </p>

      <Definition title="Roses of Grandi">
        <p>
          In polar coordinates <InlineMath>(r, \theta)</InlineMath>:
        </p>
        <MathBlock>
          {`r = a\\cos(n\\theta)`}
        </MathBlock>
        <p className="mt-2">
          For integer <InlineMath>n</InlineMath>, these produce "rose" curves with
          <InlineMath>n</InlineMath> petals (if <InlineMath>n</InlineMath> is odd)
          or <InlineMath>2n</InlineMath> petals (if <InlineMath>n</InlineMath> is even).
        </p>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Why "Algebraic"?</h4>
          <p className="text-sm text-dark-300">
            Despite their polar form, roses of Grandi can be converted to polynomial
            equations in <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>
            using <InlineMath>x = r\cos\theta</InlineMath>,{' '}
            <InlineMath>y = r\sin\theta</InlineMath>.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Special Cases</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li><InlineMath>n = 1</InlineMath>: A circle</li>
            <li><InlineMath>n = 2</InlineMath>: Four-petaled rose</li>
            <li><InlineMath>n = 3</InlineMath>: Three-petaled rose</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Legacy:</strong> The classification of algebraic curves by degree
        became a central problem in mathematics. The study of these curves—their
        singularities, intersections, and parameterizations—evolved into the modern
        field of <em>algebraic geometry</em>.
      </Callout>

      <SectionQuiz
        sectionId={27}
        questions={quizMap[27] || []}
        title="Algebraic Curves Quiz"
      />
    </LessonLayout>
  );
}
