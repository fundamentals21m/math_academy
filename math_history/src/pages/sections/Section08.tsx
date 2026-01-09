import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Conic Sections</h2>

      <p>
        The <strong>conic sections</strong>—ellipse, parabola, and hyperbola—were
        discovered by the Greeks around 350 BCE. These curves arise naturally when
        a plane intersects a cone, but they also appear throughout mathematics,
        physics, and engineering. The Greek study of conics represents some of the
        most sophisticated mathematics of the ancient world.
      </p>

      <h3>Slicing a Cone</h3>

      <Definition title="Conic Sections">
        <p>
          The <strong>conic sections</strong> are the curves obtained by intersecting
          a double cone with a plane:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Circle:</strong> Plane perpendicular to the axis</li>
          <li><strong>Ellipse:</strong> Plane tilted, but not parallel to the side</li>
          <li><strong>Parabola:</strong> Plane parallel to the side of the cone</li>
          <li><strong>Hyperbola:</strong> Plane cuts both halves of the double cone</li>
        </ul>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 180" className="w-full max-w-lg">
          {/* Circle */}
          <g transform="translate(50, 90)">
            <ellipse cx="0" cy="0" rx="30" ry="10" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <line x1="-30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <text x="-15" y="35" fill="#60a5fa" fontSize="12">Circle</text>
          </g>
          
          {/* Ellipse */}
          <g transform="translate(140, 90)">
            <ellipse cx="0" cy="0" rx="30" ry="20" fill="none" stroke="#34d399" strokeWidth="2" transform="rotate(-20)" />
            <line x1="-30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <text x="-15" y="50" fill="#34d399" fontSize="12">Ellipse</text>
          </g>
          
          {/* Parabola */}
          <g transform="translate(230, 90)">
            <path d="M -20 -30 Q 0 10 20 -30" fill="none" stroke="#f472b6" strokeWidth="2" />
            <line x1="-30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <text x="-20" y="50" fill="#f472b6" fontSize="12">Parabola</text>
          </g>
          
          {/* Hyperbola */}
          <g transform="translate(330, 90)">
            <path d="M -15 -40 Q 0 -20 15 -40" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <path d="M -15 40 Q 0 20 15 40" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <line x1="-30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="-50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="50" x2="0" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <text x="-25" y="70" fill="#fbbf24" fontSize="12">Hyperbola</text>
          </g>
        </svg>
      </div>

      <h3>Apollonius and the Conics</h3>

      <p>
        The definitive Greek work on conic sections was the <em>Conics</em> of
        <strong> Apollonius of Perga</strong> (c. 262-190 BCE). This masterpiece
        contained 8 books with nearly 400 propositions. Apollonius gave the curves
        their modern names:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Ellipse</strong> (from Greek "deficiency")</li>
        <li><strong>Parabola</strong> (from Greek "comparison")</li>
        <li><strong>Hyperbola</strong> (from Greek "excess")</li>
      </ul>

      <h3>The Focus-Directrix Property</h3>

      <p>
        Each conic section can be defined in terms of a point (focus) and a line
        (directrix):
      </p>

      <Definition title="Focus-Directrix Definition">
        <p>
          A conic section is the set of all points P such that the ratio of the
          distance from P to a fixed point F (focus) to the distance from P to a
          fixed line d (directrix) is constant:
        </p>
        <MathBlock>
          {`\\frac{PF}{Pd} = e`}
        </MathBlock>
        <p className="mt-2">
          The constant <InlineMath>e</InlineMath> is called the <strong>eccentricity</strong>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>e &lt; 1</InlineMath>: Ellipse</li>
          <li><InlineMath>e = 1</InlineMath>: Parabola</li>
          <li><InlineMath>e &gt; 1</InlineMath>: Hyperbola</li>
        </ul>
      </Definition>

      <h3>Algebraic Equations</h3>

      <p>
        In modern coordinates, the conic sections have elegant algebraic equations:
      </p>

      <Example title="Standard Forms of Conics">
        <div className="space-y-4 mt-4">
          <div>
            <strong>Circle:</strong>
            <MathBlock>{`x^2 + y^2 = r^2`}</MathBlock>
          </div>
          <div>
            <strong>Ellipse:</strong>
            <MathBlock>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</MathBlock>
          </div>
          <div>
            <strong>Parabola:</strong>
            <MathBlock>{`y = ax^2`}</MathBlock>
          </div>
          <div>
            <strong>Hyperbola:</strong>
            <MathBlock>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</MathBlock>
          </div>
        </div>
      </Example>

      <h3>Applications</h3>

      <p>
        Conic sections appear throughout science and engineering:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Planetary orbits</strong> are ellipses (Kepler, 1609)
        </li>
        <li>
          <strong>Projectile paths</strong> are parabolas (Galileo, 1638)
        </li>
        <li>
          <strong>Reflecting telescopes</strong> use parabolic mirrors
        </li>
        <li>
          <strong>Satellite dishes</strong> are parabolic
        </li>
        <li>
          <strong>Some comet orbits</strong> are hyperbolic
        </li>
      </ul>

      <Theorem title="Kepler's First Law (1609)">
        <p>
          Every planet moves in an ellipse with the Sun at one focus.
        </p>
        <p className="mt-2 text-dark-400">
          This discovery transformed Apollonius' "pure mathematics" into an
          essential tool for understanding the cosmos.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>The Reflective Property:</strong> Conic sections have remarkable
        optical properties. A light ray passing through one focus of an ellipse
        will reflect to pass through the other focus. A parabolic mirror focuses
        parallel rays to a single point. These properties were known to the Greeks
        and are essential in modern optics.
      </Callout>

      <SectionQuiz
        sectionId={8}
        questions={quizMap[8] || []}
        title="Conic Sections Quiz"
      />
    </LessonLayout>
  );
}
