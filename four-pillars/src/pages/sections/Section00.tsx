import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Euclid's Construction Axioms</h2>

      <p>
        For over 2000 years, mathematics was almost synonymous with the geometry of
        Euclid's <em>Elements</em>, a book written around 300 BCE and used in school
        mathematics instruction until the 20th century. Euclidean geometry, as it is
        now called, was thought to be the foundation of all exact science.
      </p>

      <p>
        A naive way to describe Euclidean geometry is to say it concerns the geometric
        figures that can be drawn (or <em>constructed</em> as we say) by straightedge
        and compass. Euclid assumes that it is possible to draw a straight line between
        any two given points, and to draw a circle with given center and radius. All of
        the propositions he proves are about figures built from straight lines and circles.
      </p>

      <h3>The Three Construction Axioms</h3>

      <p>
        Euclid assumes that certain constructions can be done and he states these
        assumptions in a list called his <em>axioms</em> (traditionally called <em>postulates</em>).
        He assumes that it is possible to:
      </p>

      <Definition title="Euclid's Construction Axioms">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li><strong>Draw a straight line segment</strong> between any two points.</li>
          <li><strong>Extend a straight line segment</strong> indefinitely.</li>
          <li><strong>Draw a circle</strong> with given center and radius.</li>
        </ol>
      </Definition>

      <h3>The Straightedge</h3>

      <p>
        Axioms 1 and 2 say we have a <em>straightedge</em>, an instrument for drawing
        arbitrarily long line segments. Euclid and his contemporaries tried to avoid
        infinity, so they worked with line segments rather than with whole lines. This
        is no real restriction, but it involves the annoyance of having to extend line
        segments (or "produce" them, as they say in old geometry books).
      </p>

      <p>
        Today we replace Axioms 1 and 2 by the single axiom that <em>a line can be
        drawn through any two points</em>.
      </p>

      <Callout type="info">
        <strong>Key Distinction:</strong> The straightedge (unlike a ruler) has no scale
        marked on it and hence can be used <em>only</em> for drawing lines—not for measurement.
        Euclid separates the function of measurement from the function of drawing straight lines.
      </Callout>

      <h3>The Compass</h3>

      <p>
        The compass is used to draw the circle through a given point B, with a given
        point A as center. To do this job, the compass must rotate rigidly about A
        after being initially set on the two points A and B.
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 200" className="w-full max-w-md">
          {/* Circle */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#60a5fa" strokeWidth="2" />

          {/* Center point A */}
          <circle cx="100" cy="100" r="4" fill="#60a5fa" />
          <text x="85" y="115" fill="#60a5fa" fontSize="16" fontStyle="italic">A</text>

          {/* Point B on circle */}
          <circle cx="170" cy="100" r="4" fill="#60a5fa" />
          <text x="175" y="115" fill="#60a5fa" fontSize="16" fontStyle="italic">B</text>

          {/* Radius line */}
          <line x1="100" y1="100" x2="170" y2="100" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="5,5" />

          {/* Compass legs */}
          <line x1="100" y1="100" x2="100" y2="30" stroke="#94a3b8" strokeWidth="2" />
          <line x1="100" y1="30" x2="170" y2="100" stroke="#94a3b8" strokeWidth="2" />

          {/* Compass pivot */}
          <circle cx="100" cy="30" r="5" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      </div>

      <p>
        Thus, the compass "stores" the length of the radius AB and allows this length
        to be transferred elsewhere. The power of measuring lengths resides in the compass.
      </p>

      <h3>Adding and Subtracting Lengths</h3>

      <p>
        The compass enables us to <strong>add</strong> and <strong>subtract</strong> lengths.
        To add the length |AB| to the length |CD|, or subtract |AB| from |CD|, we pick up
        the compass with radius set to |AB| and describe a circle with center D.
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 120" className="w-full max-w-lg">
          {/* Main line */}
          <line x1="30" y1="60" x2="370" y2="60" stroke="#475569" strokeWidth="1" />

          {/* Point C */}
          <circle cx="50" cy="60" r="4" fill="#60a5fa" />
          <text x="45" y="85" fill="#60a5fa" fontSize="14" fontStyle="italic">C</text>

          {/* Point D */}
          <circle cx="200" cy="60" r="4" fill="#60a5fa" />
          <text x="195" y="85" fill="#60a5fa" fontSize="14" fontStyle="italic">D</text>

          {/* Circle arc around D */}
          <path d="M 130 60 A 70 70 0 0 1 270 60" fill="none" stroke="#34d399" strokeWidth="1.5" />

          {/* |CD| - |AB| */}
          <line x1="50" y1="50" x2="130" y2="50" stroke="#f472b6" strokeWidth="2" />
          <text x="70" y="40" fill="#f472b6" fontSize="12">|CD| - |AB|</text>

          {/* |CD| */}
          <line x1="50" y1="70" x2="200" y2="70" stroke="#60a5fa" strokeWidth="2" />
          <text x="110" y="95" fill="#60a5fa" fontSize="12">|CD|</text>

          {/* |AB| arc indicator */}
          <text x="220" y="40" fill="#34d399" fontSize="12">|AB|</text>

          {/* |CD| + |AB| */}
          <line x1="200" y1="50" x2="350" y2="50" stroke="#34d399" strokeWidth="2" />
          <text x="250" y="40" fill="#34d399" fontSize="12">|CD| + |AB|</text>
        </svg>
      </div>

      <p>
        By adding a fixed length repeatedly, one can construct a "scale" on a given line,
        effectively creating a ruler. This process illustrates how the power of measuring
        lengths resides in the compass.
      </p>

      <Theorem title="The Scope of Straightedge and Compass">
        <p>
          Exactly which lengths can be measured by straightedge and compass is a deep
          question, which belongs to algebra and analysis. The question for general
          constructions turns out to depend on a problem about prime numbers that has
          not yet been solved:
        </p>
        <MathBlock>
          {`\\text{For which } m \\text{ is } 2^{2^m} + 1 \\text{ a prime number?}`}
        </MathBlock>
      </Theorem>

      <h3>Separation of Concepts</h3>

      <Callout type="important">
        <strong>Fundamental Insight:</strong> Separating the concepts of "straightness" and
        "length," as the straightedge and the compass do, turns out to be important for
        understanding the foundations of geometry. The same separation of concepts reappears
        in different approaches to geometry developed later in this course.
      </Callout>

      <p>
        This chapter reviews some basic constructions, to give a quick impression of the
        extent of Euclidean geometry, and to suggest why <em>right angles</em> and
        <em>parallel lines</em> play a special role in it. Constructions also help to
        expose the role of length, area, and angle in geometry. The deeper meaning of
        these concepts, and the related role of numbers in geometry, is a thread we will
        pursue throughout the course.
      </p>

      <SectionQuiz
        sectionId={0}
        questions={quizMap[0] || []}
        title="Euclid's Construction Axioms Quiz"
      />
    </LessonLayout>
  );
}
