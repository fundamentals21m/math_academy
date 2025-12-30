import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { EquilateralTriangleConstruction } from '@/components/visualizations/chapter1';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Euclid's Construction of the Equilateral Triangle</h2>

      <p>
        Constructing an equilateral triangle on a given side is the <strong>first proposition</strong> of
        Euclid's <em>Elements</em>. This construction elegantly demonstrates the interplay between
        construction axioms, geometric axioms, and logical reasoning.
      </p>

      <h3>The Construction</h3>

      <p>
        Given a line segment AB, we construct an equilateral triangle in three steps:
      </p>

      <Definition title="Construction of the Equilateral Triangle">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Draw the circle with center A and radius AB.</li>
          <li>Draw the circle with center B and radius AB.</li>
          <li>Draw the line segments from A and B to the intersection C of the two circles.</li>
        </ol>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 280" className="w-full max-w-md">
          {/* Circle centered at A */}
          <circle cx="80" cy="200" r="100" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Circle centered at B */}
          <circle cx="180" cy="200" r="100" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Triangle sides */}
          <line x1="80" y1="200" x2="180" y2="200" stroke="#f472b6" strokeWidth="2" />
          <line x1="80" y1="200" x2="130" y2="113" stroke="#f472b6" strokeWidth="2" />
          <line x1="180" y1="200" x2="130" y2="113" stroke="#f472b6" strokeWidth="2" />

          {/* Point A */}
          <circle cx="80" cy="200" r="4" fill="#60a5fa" />
          <text x="65" y="225" fill="#60a5fa" fontSize="16" fontStyle="italic">A</text>

          {/* Point B */}
          <circle cx="180" cy="200" r="4" fill="#34d399" />
          <text x="185" y="225" fill="#34d399" fontSize="16" fontStyle="italic">B</text>

          {/* Point C (intersection) */}
          <circle cx="130" cy="113" r="4" fill="#f472b6" />
          <text x="135" y="105" fill="#f472b6" fontSize="16" fontStyle="italic">C</text>
        </svg>
      </div>

      <h3>Why It Works</h3>

      <p>
        The result is the triangle ABC with sides AB, BC, and CA. Let's verify that all three
        sides are equal:
      </p>

      <Theorem title="Equality of Sides">
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Sides <strong>AB</strong> and <strong>CA</strong> have equal length because they are
            both radii of the first circle (centered at A).
          </li>
          <li>
            Sides <strong>AB</strong> and <strong>BC</strong> have equal length because they are
            both radii of the second circle (centered at B).
          </li>
          <li>
            Hence, all three sides of triangle ABC are equal: |AB| = |BC| = |CA|.
          </li>
        </ul>
      </Theorem>

      <h3>The Interplay of Axioms and Logic</h3>

      <p>
        This example nicely shows the interplay among three essential components of geometry:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Construction Axioms</h4>
          <p className="text-slate-300 mt-2">
            Guarantee the existence of the construction lines and circles (initially the two
            circles on radius AB, and later the line segments BC and CA).
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Geometric Axioms</h4>
          <p className="text-slate-300 mt-2">
            Guarantee the existence of points required for later steps in the construction
            (the intersection C of the two circles).
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-pink-500">
          <h4 className="font-semibold text-pink-400">Logic</h4>
          <p className="text-slate-300 mt-2">
            Guarantees that certain conclusions follow. Here we use the principle that
            things equal to the same thing (both |BC| and |CA| equal |AB|) are equal to
            each other (so |BC| = |CA|).
          </p>
        </div>
      </div>

      <Callout type="warning">
        <strong>A Gap in Euclid:</strong> Euclid states no axiom about the intersection of
        circles, so he has not justified the existence of the point C used in his very first
        proposition! This is one of several gaps in Euclid that were only filled by modern
        mathematicians.
      </Callout>

      <h3>Regular Polygons</h3>

      <p>
        The equilateral triangle is an example of a <em>regular polygon</em>: a geometric
        figure bounded by equal line segments that meet at equal angles. If the polygon
        has n sides, we call it an <em>n-gon</em>.
      </p>

      <Example title="Constructing a Regular Hexagon">
        <p>
          By extending Euclid's construction of the equilateral triangle, we can construct
          a regular hexagon:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Start with a circle of radius r.</li>
          <li>Mark any point on the circle.</li>
          <li>Using the compass set to radius r, mark successive points around the circle.</li>
          <li>Connect adjacent points to form the hexagon.</li>
        </ol>
      </Example>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-sm">
          {/* Main circle */}
          <circle cx="150" cy="150" r="80" fill="none" stroke="#475569" strokeWidth="1" />

          {/* Hexagon */}
          <polygon
            points="230,150 190,219 110,219 70,150 110,81 190,81"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          />

          {/* Vertices */}
          <circle cx="230" cy="150" r="3" fill="#60a5fa" />
          <circle cx="190" cy="219" r="3" fill="#60a5fa" />
          <circle cx="110" cy="219" r="3" fill="#60a5fa" />
          <circle cx="70" cy="150" r="3" fill="#60a5fa" />
          <circle cx="110" cy="81" r="3" fill="#60a5fa" />
          <circle cx="190" cy="81" r="3" fill="#60a5fa" />

          {/* Center */}
          <circle cx="150" cy="150" r="3" fill="#f472b6" />

          {/* Radius line */}
          <line x1="150" y1="150" x2="230" y2="150" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="185" y="140" fill="#f472b6" fontSize="12">r</text>
        </svg>
      </div>

      <h3>The Question of Constructibility</h3>

      <p>
        So the regular 3-gon and the regular 6-gon are constructible. This raises a natural
        question:
      </p>

      <Callout type="info">
        <strong>Open Question:</strong> For which n is the regular n-gon constructible by
        straightedge and compass?
      </Callout>

      <p>
        This question turns out to belong to algebra and number theory. A complete answer
        depends on a problem about prime numbers that has not yet been solved:
      </p>

      <MathBlock>
        {`\\text{For which } m \\text{ is } 2^{2^m} + 1 \\text{ a prime number?}`}
      </MathBlock>

      <Theorem title="Gauss-Wantzel Theorem (Preview)">
        <p>
          A regular polygon with a prime number p of sides is constructible by straightedge
          and compass if and only if p is of the form 2<sup>2<sup>m</sup></sup> + 1.
        </p>
        <p className="mt-4">
          This gives three constructible p-gons not known to the Greeks:
        </p>
        <MathBlock>
          {`2^4 + 1 = 17, \\quad 2^8 + 1 = 257, \\quad 2^{16} + 1 = 65537`}
        </MathBlock>
        <p className="mt-4">
          These are all prime numbers. But no larger prime numbers of this form are known!
        </p>
      </Theorem>

      <EquilateralTriangleConstruction className="my-6" />

      <SectionQuiz
        sectionId={1}
        questions={quizMap[1] || []}
        title="Equilateral Triangle Construction Quiz"
      />
    </LessonLayout>
  );
}
