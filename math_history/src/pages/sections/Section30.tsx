import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2>Desargues' Theorem</h2>

      <p>
        <strong>Girard Desargues</strong> (1591–1661) was a French architect and
        engineer who developed the first systematic treatment of projective
        geometry. His masterwork, the <em>Brouillon projet</em> (1639), was so
        obscure in its terminology that it was largely ignored until rediscovered
        in the 19th century.
      </p>

      <Callout type="info">
        <strong>A Theorem for All Projections:</strong> Desargues' theorem
        is remarkable because it's true in ordinary Euclidean geometry, but
        becomes <em>simpler</em> to state in projective geometry where we don't
        need to treat parallel lines as a special case.
      </Callout>

      <h3>The Theorem</h3>

      <p>
        Desargues' theorem relates two triangles that are "in perspective"—their
        corresponding vertices lie on three concurrent lines.
      </p>

      <Definition title="Triangles in Perspective">
        <p>
          Two triangles <InlineMath>ABC</InlineMath> and{' '}
          <InlineMath>A'B'C'</InlineMath> are <strong>in perspective from a point</strong>{' '}
          <InlineMath>O</InlineMath> if:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Line <InlineMath>AA'</InlineMath> passes through <InlineMath>O</InlineMath></li>
          <li>Line <InlineMath>BB'</InlineMath> passes through <InlineMath>O</InlineMath></li>
          <li>Line <InlineMath>CC'</InlineMath> passes through <InlineMath>O</InlineMath></li>
        </ul>
        <p className="mt-2">
          The point <InlineMath>O</InlineMath> is called the <strong>center of perspectivity</strong>.
        </p>
      </Definition>

      <Theorem title="Desargues' Theorem (1639)">
        <p>
          If two triangles <InlineMath>ABC</InlineMath> and{' '}
          <InlineMath>A'B'C'</InlineMath> are in perspective from a point
          (their corresponding vertices joined by concurrent lines), then they
          are in perspective from a line (their corresponding sides meet in
          collinear points).
        </p>
        <p className="mt-2">
          Specifically, if <InlineMath>AA'</InlineMath>, <InlineMath>BB'</InlineMath>,
          and <InlineMath>CC'</InlineMath> all pass through point{' '}
          <InlineMath>O</InlineMath>, then:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>P = AB \cap A'B'</InlineMath></li>
          <li><InlineMath>Q = BC \cap B'C'</InlineMath></li>
          <li><InlineMath>R = CA \cap C'A'</InlineMath></li>
        </ul>
        <p className="mt-2">are collinear (lie on a single line).</p>
      </Theorem>

      {/* Visualization of Desargues' theorem */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Desargues' Theorem
        </h4>
        <svg viewBox="0 0 500 320" className="w-full h-auto">
          {/* Center of perspectivity O */}
          <circle cx="250" cy="30" r="5" fill="#f59e0b"/>
          <text x="260" y="30" fill="#f59e0b" fontSize="12">O</text>
          
          {/* Triangle ABC */}
          <polygon points="100,200 200,120 180,280" fill="none" stroke="#10b981" strokeWidth="2"/>
          <circle cx="100" cy="200" r="4" fill="#10b981"/>
          <circle cx="200" cy="120" r="4" fill="#10b981"/>
          <circle cx="180" cy="280" r="4" fill="#10b981"/>
          <text x="85" y="205" fill="#10b981" fontSize="12">A</text>
          <text x="205" y="115" fill="#10b981" fontSize="12">B</text>
          <text x="170" y="298" fill="#10b981" fontSize="12">C</text>
          
          {/* Triangle A'B'C' */}
          <polygon points="320,180 380,100 360,250" fill="none" stroke="#818cf8" strokeWidth="2"/>
          <circle cx="320" cy="180" r="4" fill="#818cf8"/>
          <circle cx="380" cy="100" r="4" fill="#818cf8"/>
          <circle cx="360" cy="250" r="4" fill="#818cf8"/>
          <text x="325" y="175" fill="#818cf8" fontSize="12">A'</text>
          <text x="390" y="100" fill="#818cf8" fontSize="12">B'</text>
          <text x="370" y="255" fill="#818cf8" fontSize="12">C'</text>
          
          {/* Lines through O */}
          <line x1="250" y1="30" x2="100" y2="200" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="250" y1="30" x2="320" y2="180" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="250" y1="30" x2="200" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="250" y1="30" x2="380" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="250" y1="30" x2="180" y2="280" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="250" y1="30" x2="360" y2="250" stroke="#64748b" strokeWidth="1" strokeDasharray="4"/>
          
          {/* Axis of perspectivity (line through P, Q, R) */}
          <line x1="20" y1="310" x2="480" y2="310" stroke="#ef4444" strokeWidth="2"/>
          
          {/* Points P, Q, R on the axis */}
          <circle cx="80" cy="310" r="4" fill="#ef4444"/>
          <circle cx="250" cy="310" r="4" fill="#ef4444"/>
          <circle cx="420" cy="310" r="4" fill="#ef4444"/>
          <text x="75" y="300" fill="#ef4444" fontSize="11">P</text>
          <text x="245" y="300" fill="#ef4444" fontSize="11">Q</text>
          <text x="415" y="300" fill="#ef4444" fontSize="11">R</text>
          
          {/* Labels */}
          <text x="250" y="15" fill="#f59e0b" fontSize="10" textAnchor="middle">Center of Perspectivity</text>
          <text x="400" y="310" fill="#ef4444" fontSize="10">Axis of Perspectivity</text>
        </svg>
        <p className="text-sm text-dark-400 mt-2 text-center">
          The intersections P, Q, R of corresponding sides are collinear.
        </p>
      </div>

      <h3>The Converse</h3>

      <p>
        Desargues' theorem has a beautiful converse:
      </p>

      <Theorem title="Converse of Desargues' Theorem">
        <p>
          If two triangles are in perspective from a line (corresponding sides
          meet in collinear points), then they are in perspective from a point
          (corresponding vertices lie on concurrent lines).
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Self-Dual Statement:</strong> Notice that the theorem and its
        converse are obtained by interchanging "point" and "line." This is an
        example of <em>duality</em>, which we'll explore in Section 32.
      </Callout>

      <h3>A 3D Proof</h3>

      <p>
        Desargues' theorem becomes almost obvious when viewed in three dimensions:
      </p>

      <Example title="Proof via 3D Projection">
        <p>
          Place triangle <InlineMath>ABC</InlineMath> in one plane{' '}
          <InlineMath>\pi</InlineMath> and triangle <InlineMath>A'B'C'</InlineMath>{' '}
          in another plane <InlineMath>\pi'</InlineMath>, with the center of
          perspectivity <InlineMath>O</InlineMath> not in either plane.
        </p>
        <p className="mt-2">
          Now consider where corresponding sides meet:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>AB</InlineMath> lies in <InlineMath>\pi</InlineMath>;{' '}
            <InlineMath>A'B'</InlineMath> lies in <InlineMath>\pi'</InlineMath>
          </li>
          <li>
            Both lines lie in plane <InlineMath>OAB</InlineMath> (containing{' '}
            <InlineMath>O, A, B, A', B'</InlineMath>)
          </li>
          <li>
            So <InlineMath>AB \cap A'B'</InlineMath> lies on both{' '}
            <InlineMath>\pi</InlineMath> and <InlineMath>\pi'</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          Similarly for the other pairs. All three intersection points lie on the
          line <InlineMath>\pi \cap \pi'</InlineMath> where the two planes meet!
        </p>
      </Example>

      <h3>Why It Matters</h3>

      <p>
        Desargues' theorem is foundational to projective geometry for several
        reasons:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Theoretical Importance</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>It's a "purely incidence" theorem—only about points and lines</li>
            <li>It characterizes which planes can be coordinatized</li>
            <li>It's equivalent to the existence of projective transformations</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Practical Applications</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Perspective drawing and architectural design</li>
            <li>Computer graphics and 3D rendering</li>
            <li>Photogrammetry (reconstructing 3D from images)</li>
          </ul>
        </div>
      </div>

      <h3>Non-Desarguesian Planes</h3>

      <p>
        Surprisingly, there exist <strong>non-Desarguesian planes</strong>—projective
        planes where Desargues' theorem fails! These exotic structures were
        discovered in the late 19th century.
      </p>

      <Theorem title="Characterization Theorem">
        <p>
          A projective plane satisfies Desargues' theorem if and only if it can
          be embedded in a projective 3-space. Equivalently, it can be coordinatized
          by a <strong>division ring</strong> (a structure where division is possible,
          but multiplication may not be commutative).
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Desargues in the Real World:</strong> The real projective plane
        (coordinatized by real numbers) and the complex projective plane
        (coordinatized by complex numbers) both satisfy Desargues' theorem.
        Non-Desarguesian planes require exotic coordinate systems.
      </Callout>

      <h3>Desargues' Legacy</h3>

      <p>
        Desargues' work was largely forgotten for 200 years. His unusual
        botanical terminology (he named geometric concepts after parts of trees)
        made his work inaccessible. Only one copy of the <em>Brouillon projet</em>{' '}
        survived, discovered in 1845.
      </p>

      <Example title="Desargues' Terminology">
        <p>
          Desargues called a straight line a "palm" and a point an "eye." A pencil
          of lines through a point was a "tree" (with the point as trunk and lines
          as branches). Unsurprisingly, this did not catch on.
        </p>
      </Example>

      <p>
        His ideas were kept alive mainly through his young correspondent{' '}
        <strong>Blaise Pascal</strong>, who at age 16 proved the remarkable
        theorem we'll encounter in the next section.
      </p>

      <SectionQuiz
        sectionId={30}
        questions={quizMap[30] || []}
        title="Desargues' Theorem Quiz"
      />
    </LessonLayout>
  );
}
