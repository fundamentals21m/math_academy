import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>Newton and Higher Curves</h2>

      <p>
        While first- and second-degree curves (lines and conics) were well understood
        before analytic geometry, <strong>cubic curves</strong> presented the first
        genuinely new problem. Isaac Newton undertook their systematic classification,
        identifying 72 species (and missing 6 others).
      </p>

      <Callout type="info">
        <strong>A Classical Attitude:</strong> Up through the 18th century, many
        mathematicians believed algebra shouldn't be applied to simple curves.
        D'Alembert wrote in the <em>Encyclopédie</em> (1751) that algebraic methods
        were unnecessary for lines and conics. Cubics were considered the first
        "proper" subject for analytic geometry.
      </Callout>

      <h3>Newton's Classification</h3>

      <p>
        In 1667, Newton began classifying cubic curves by reducing the general
        equation to standard forms. The general cubic in <InlineMath>x</InlineMath>
        and <InlineMath>y</InlineMath> has 10 coefficients:
      </p>

      <MathBlock>
        {`ay^3 + bxy^2 + cx^2y + dx^3 + ey^2 + fxy + gx^2 + hy + kx + l = 0`}
      </MathBlock>

      <Theorem title="Newton's Four Standard Forms">
        <p>
          By a general transformation of axes, any cubic can be reduced to one of:
        </p>
        <MathBlock>
          {`\\begin{aligned}
Axy^2 + By &= Cx^3 + Dx^2 + Ex + F \\\\
xy &= Ax^3 + Bx^2 + Cx + D \\\\
y^2 &= Ax^3 + Bx^2 + Cx + D \\\\
y &= Ax^3 + Bx^2 + Cx + D
\\end{aligned}`}
        </MathBlock>
      </Theorem>

      <p>
        Newton then subdivided these forms according to the nature of their roots,
        obtaining his 72 species. The missing 6 were later found by Stirling (1717)
        and others.
      </p>

      <h3>The Five Fundamental Types</h3>

      <p>
        Newton made a remarkable observation (Section 29, "On the Genesis of Curves
        by Shadows") that would later be formalized as a theorem: all cubics can
        be reduced to just <strong>five basic types</strong> using projective
        transformations.
      </p>

      <Definition title="Newton's Five Divergent Parabolas">
        <p>
          Every cubic curve is projectively equivalent to one of these forms
          (where the right-hand side has different root structures):
        </p>
        <MathBlock>
          {`y^2 = Ax^3 + Bx^2 + Cx + D`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Three distinct real roots:</strong> "Bell with oval"</li>
          <li><strong>Two equal roots (double root):</strong> Nodated or punctate</li>
          <li><strong>Three equal roots:</strong> Cuspidal (semicubical parabola)</li>
          <li><strong>One real, two complex roots:</strong> Pure parabola</li>
        </ul>
      </Definition>

      {/* Visualization of Newton's classification */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Newton's Classification of Cubics by Root Structure
        </h4>
        <svg viewBox="0 0 500 200" className="w-full h-auto">
          {/* Five boxes */}
          
          {/* Type 1: Three distinct roots */}
          <g transform="translate(10, 30)">
            <rect width="90" height="130" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="45" y="18" fill="#818cf8" fontSize="8" textAnchor="middle">3 distinct</text>
            <text x="45" y="28" fill="#818cf8" fontSize="8" textAnchor="middle">roots</text>
            {/* Curve with oval */}
            <path d="M 20 100 Q 45 50 70 100" fill="none" stroke="#10b981" strokeWidth="2"/>
            <ellipse cx="45" cy="60" rx="15" ry="10" fill="none" stroke="#10b981" strokeWidth="2"/>
            <text x="45" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">"Bell + Oval"</text>
          </g>
          
          {/* Type 2: Double root (node) */}
          <g transform="translate(110, 30)">
            <rect width="90" height="130" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="45" y="18" fill="#818cf8" fontSize="8" textAnchor="middle">double root</text>
            <text x="45" y="28" fill="#818cf8" fontSize="8" textAnchor="middle">(node)</text>
            {/* Nodated curve */}
            <path d="M 20 100 Q 45 40 70 100" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="45" cy="70" r="3" fill="#f59e0b"/>
            <text x="45" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">"Nodated"</text>
          </g>
          
          {/* Type 3: Double root (punctate) */}
          <g transform="translate(210, 30)">
            <rect width="90" height="130" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="45" y="18" fill="#818cf8" fontSize="8" textAnchor="middle">double root</text>
            <text x="45" y="28" fill="#818cf8" fontSize="8" textAnchor="middle">(isolated)</text>
            {/* Punctate curve */}
            <path d="M 20 100 Q 45 50 70 100" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="45" cy="45" r="3" fill="#f59e0b"/>
            <text x="45" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">"Punctate"</text>
          </g>
          
          {/* Type 4: Triple root (cusp) */}
          <g transform="translate(310, 30)">
            <rect width="90" height="130" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="45" y="18" fill="#818cf8" fontSize="8" textAnchor="middle">triple root</text>
            <text x="45" y="28" fill="#818cf8" fontSize="8" textAnchor="middle">(cusp)</text>
            {/* Cuspidal curve */}
            <path d="M 30 45 Q 45 75 30 105" fill="none" stroke="#10b981" strokeWidth="2"/>
            <path d="M 45 75 L 75 75" fill="none" stroke="#10b981" strokeWidth="2"/>
            <circle cx="45" cy="75" r="3" fill="#f59e0b"/>
            <text x="45" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">"Cuspidal"</text>
          </g>
          
          {/* Type 5: One real root */}
          <g transform="translate(410, 30)">
            <rect width="80" height="130" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="5"/>
            <text x="40" y="18" fill="#818cf8" fontSize="8" textAnchor="middle">1 real root</text>
            <text x="40" y="28" fill="#818cf8" fontSize="8" textAnchor="middle">2 complex</text>
            {/* Pure parabola */}
            <path d="M 20 100 Q 40 40 60 100" fill="none" stroke="#10b981" strokeWidth="2"/>
            <text x="40" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">"Pure"</text>
          </g>
          
          {/* Bottom note */}
          <text x="250" y="185" fill="#64748b" fontSize="9" textAnchor="middle">
            All 72+ species of cubic curves reduce to these five types under projection
          </text>
        </svg>
      </div>

      <h3>The Semicubical Parabola</h3>

      <p>
        The simplest cubic curve is the <strong>semicubical parabola</strong>:
      </p>

      <Definition title="Semicubical Parabola">
        <MathBlock>
          {`y^2 = x^3`}
        </MathBlock>
        <p className="mt-2">
          This curve has a <strong>cusp</strong> at the origin and was historically
          important because Neil and van Heuraet (1657) were the first to calculate
          the arc length of a curve—proving Descartes wrong about the impossibility
          of "rectification."
        </p>
      </Definition>

      <Example title="Parameterizing Cusps and Nodes">
        <p>
          Curves with cusps or nodes can be parameterized by rational functions:
        </p>
        <ul className="space-y-2 mt-2">
          <li>
            <strong>Semicubical parabola</strong> <InlineMath>y^2 = x^3</InlineMath>:{' '}
            <InlineMath>x = t^2, y = t^3</InlineMath>
          </li>
          <li>
            <strong>Nodal cubic</strong> <InlineMath>y^2 = x^2(x + 1)</InlineMath>:{' '}
            <InlineMath>x = t^2 - 1, y = t(t^2 - 1)</InlineMath>
          </li>
        </ul>
        <p className="mt-2 text-dark-400">
          The existence of such parameterizations means these curves are "rational"—their
          points can be described by rational functions of a single parameter.
        </p>
      </Example>

      <h3>Construction of Equations</h3>

      <p>
        A now-forgotten discipline called "construction of equations" asked:
        given a polynomial equation, what curves can be used to construct its roots?
      </p>

      <Theorem title="Degree and Intersection">
        <p>
          Menaechmus' construction of <InlineMath>\sqrt[3]{'{2}'}</InlineMath> by
          intersecting a parabola and hyperbola is the paradigm. More generally:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Curves of degrees <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath>
            can have up to <InlineMath>mn</InlineMath> intersection points
          </li>
          <li>
            Each intersection can be a root of an equation of degree up to{' '}
            <InlineMath>mn</InlineMath>
          </li>
          <li>
            Two conics (<InlineMath>m = n = 2</InlineMath>) can solve equations
            of degree <InlineMath>4</InlineMath>
          </li>
        </ul>
      </Theorem>

      <h3>Bézout's Theorem</h3>

      <p>
        The observation about intersection numbers was formalized by{' '}
        <strong>Étienne Bézout</strong>:
      </p>

      <Theorem title="Bézout's Theorem">
        <p>
          Two algebraic curves of degrees <InlineMath>m</InlineMath> and{' '}
          <InlineMath>n</InlineMath>, with no common component, intersect in
          exactly <InlineMath>mn</InlineMath> points, counted properly:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>With <strong>multiplicity</strong> (tangent intersections count more)</li>
          <li>Including <strong>complex</strong> points</li>
          <li>Including points <strong>at infinity</strong></li>
        </ul>
        <MathBlock>
          {`|C_1 \\cap C_2| = \\deg(C_1) \\cdot \\deg(C_2) = mn`}
        </MathBlock>
      </Theorem>

      <Example title="Bézout in Action">
        <p>
          Why does a line always meet a conic in exactly 2 points?
        </p>
        <MathBlock>
          {`\\deg(\\text{line}) \\cdot \\deg(\\text{conic}) = 1 \\cdot 2 = 2`}
        </MathBlock>
        <p className="mt-2">
          If the line appears to miss the ellipse, the two intersection points
          are complex. If it's tangent, one point has multiplicity 2.
        </p>
      </Example>

      <h3>Beyond Cubics</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Quartic Curves</h4>
          <p className="text-sm text-dark-300">
            Degree 4 curves can have up to 3 double points, intricate self-intersections,
            and multiple components. Their classification is vastly more complex than
            cubics.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Higher Degrees</h4>
          <p className="text-sm text-dark-300">
            As degree increases, the variety of possible curves explodes. Complete
            classification becomes impractical—instead, mathematicians study
            invariant properties.
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Newton's Legacy:</strong> Newton's classification of cubics was
        criticized by Euler for lacking a unifying principle. But Newton's passing
        remark about "shadows" (projections) contained exactly such a principle,
        later developed into <em>projective geometry</em>—the subject of our next
        chapter.
      </Callout>

      <h3>The Familiar Cubic y = x³</h3>

      <p>
        Where does the simple curve <InlineMath>y = x^3</InlineMath> appear in
        Newton's classification? It's projectively equivalent to the cuspidal
        curve <InlineMath>y^2 = x^3</InlineMath>! Under a suitable projective
        transformation, these curves are the "same."
      </p>

      <Callout type="note">
        <strong>Looking Ahead:</strong> This surprising equivalence hints at the
        power of projective geometry—curves that look completely different in
        Cartesian coordinates can be equivalent from the projective viewpoint.
      </Callout>

      <SectionQuiz
        sectionId={28}
        questions={quizMap[28] || []}
        title="Newton and Higher Curves Quiz"
      />
    </LessonLayout>
  );
}
