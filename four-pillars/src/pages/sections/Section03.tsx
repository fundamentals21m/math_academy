import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Multiplication and Division</h2>

      <p>
        Not only can one add and subtract line segments (as we saw in Section 1.1);
        one can also <strong>multiply</strong> and <strong>divide</strong> them. The
        product ab and quotient a/b of line segments a and b are obtained by
        straightedge and compass constructions. The key ingredients are parallel lines,
        and the key geometric property involved is the Thales theorem.
      </p>

      <h3>The Unit Length</h3>

      <p>
        To get started, it is necessary to choose a line segment as the <em>unit of
        length</em>, denoted 1. This unit has the property that 1 &middot; a = a for any
        length a.
      </p>

      <Callout type="info">
        <strong>Why We Need a Unit:</strong> Unlike addition, which combines two lengths
        directly, multiplication requires a reference length. The choice of unit is arbitrary,
        but once chosen, it determines all products and quotients.
      </Callout>

      <h3>Product of Line Segments</h3>

      <Definition title="Geometric Multiplication">
        <p>To multiply line segment b by line segment a:</p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Construct any triangle UOA with |OU| = 1 and |OA| = a.</li>
          <li>Extend OU by length b to point B<sub>1</sub>.</li>
          <li>Construct the parallel to UA through B<sub>1</sub>.</li>
          <li>This parallel meets the extension of OA at point C.</li>
        </ol>
        <p className="mt-4">
          By the Thales theorem, <strong>|AC| = ab</strong>.
        </p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 280" className="w-full max-w-lg">
          {/* Origin O */}
          <circle cx="50" cy="230" r="4" fill="#f472b6" />
          <text x="35" y="245" fill="#f472b6" fontSize="14" fontStyle="italic">O</text>

          {/* Point U (unit from O) */}
          <circle cx="100" cy="180" r="4" fill="#60a5fa" />
          <text x="85" y="170" fill="#60a5fa" fontSize="14" fontStyle="italic">U</text>

          {/* Point A */}
          <circle cx="150" cy="230" r="4" fill="#34d399" />
          <text x="145" y="250" fill="#34d399" fontSize="14" fontStyle="italic">A</text>

          {/* Point B1 (b above U) */}
          <circle cx="180" cy="100" r="4" fill="#fbbf24" />
          <text x="165" y="90" fill="#fbbf24" fontSize="14">B₁</text>

          {/* Point C (product) */}
          <circle cx="330" cy="230" r="4" fill="#c084fc" />
          <text x="325" y="250" fill="#c084fc" fontSize="14" fontStyle="italic">C</text>

          {/* Line OU extended to B1 */}
          <line x1="50" y1="230" x2="180" y2="100" stroke="#60a5fa" strokeWidth="1.5" />

          {/* Line OA extended to C */}
          <line x1="50" y1="230" x2="330" y2="230" stroke="#34d399" strokeWidth="1.5" />

          {/* Line UA */}
          <line x1="100" y1="180" x2="150" y2="230" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Parallel to UA through B1 */}
          <line x1="180" y1="100" x2="330" y2="230" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6,4" />

          {/* Labels */}
          <text x="65" y="215" fill="#60a5fa" fontSize="12">1</text>
          <text x="90" y="245" fill="#34d399" fontSize="12">a</text>
          <text x="130" y="130" fill="#fbbf24" fontSize="12">b</text>
          <text x="230" y="245" fill="#c084fc" fontSize="12">ab</text>

          {/* Arrow indicating multiplication */}
          <text x="280" y="165" fill="#94a3b8" fontSize="11">Multiply by a</text>
          <path d="M 330 175 L 320 185 M 330 175 L 340 185" fill="none" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>

      <h3>Quotient of Line Segments</h3>

      <Definition title="Geometric Division">
        <p>To divide line segment b by line segment a:</p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Begin with the same triangle UOA with |OU| = 1 and |OA| = a.</li>
          <li>Extend OA by distance b to point B<sub>2</sub>.</li>
          <li>Construct the parallel to UA through B<sub>2</sub>.</li>
          <li>This parallel meets the extension of OU at point D.</li>
        </ol>
        <p className="mt-4">
          By the Thales theorem, <strong>|UD| = b/a</strong>.
        </p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 280" className="w-full max-w-lg">
          {/* Origin O */}
          <circle cx="50" cy="230" r="4" fill="#f472b6" />
          <text x="35" y="245" fill="#f472b6" fontSize="14" fontStyle="italic">O</text>

          {/* Point U (unit from O) */}
          <circle cx="100" cy="180" r="4" fill="#60a5fa" />
          <text x="85" y="170" fill="#60a5fa" fontSize="14" fontStyle="italic">U</text>

          {/* Point A */}
          <circle cx="150" cy="230" r="4" fill="#34d399" />
          <text x="145" y="250" fill="#34d399" fontSize="14" fontStyle="italic">A</text>

          {/* Point B2 (b beyond A) */}
          <circle cx="300" cy="230" r="4" fill="#fbbf24" />
          <text x="295" y="250" fill="#fbbf24" fontSize="14">B₂</text>

          {/* Point D (quotient) */}
          <circle cx="200" cy="80" r="4" fill="#c084fc" />
          <text x="205" y="75" fill="#c084fc" fontSize="14" fontStyle="italic">D</text>

          {/* Line OU extended to D */}
          <line x1="50" y1="230" x2="200" y2="80" stroke="#60a5fa" strokeWidth="1.5" />

          {/* Line OA extended to B2 */}
          <line x1="50" y1="230" x2="300" y2="230" stroke="#34d399" strokeWidth="1.5" />

          {/* Line UA */}
          <line x1="100" y1="180" x2="150" y2="230" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Parallel to UA through B2 */}
          <line x1="300" y1="230" x2="200" y2="80" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6,4" />

          {/* Labels */}
          <text x="65" y="215" fill="#60a5fa" fontSize="12">1</text>
          <text x="90" y="245" fill="#34d399" fontSize="12">a</text>
          <text x="210" y="245" fill="#fbbf24" fontSize="12">b</text>
          <text x="145" y="115" fill="#c084fc" fontSize="12">b/a</text>

          {/* Arrow indicating division */}
          <text x="250" y="140" fill="#94a3b8" fontSize="11">Divide by a</text>
          <path d="M 230 155 L 220 145 M 230 155 L 240 145" fill="none" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>

      <h3>Constructing Rational Lengths</h3>

      <Theorem title="Rational Lengths are Constructible">
        <p>
          The sum operation allows us to construct a segment n units in length, for any
          natural number n, simply by adding the segment 1 to itself n times.
        </p>
        <p className="mt-4">
          The quotient operation then allows us to construct a segment of length m/n, for
          any natural numbers m and n &ne; 0.
        </p>
        <p className="mt-4">
          These are what we call the <strong>rational lengths</strong>.
        </p>
      </Theorem>

      <h3>The Discovery of Irrational Lengths</h3>

      <p>
        A great discovery of the Pythagoreans was that <em>some lengths are not rational</em>,
        and that some of these "irrational" lengths can be constructed by straightedge and
        compass.
      </p>

      <Example title="The Diagonal of the Unit Square">
        <p>
          Consider a square with side length 1. What is the length of its diagonal?
        </p>
        <p className="mt-4">
          By the Pythagorean theorem (which we'll prove later):
        </p>
        <MathBlock>
          {`d^2 = 1^2 + 1^2 = 2`}
        </MathBlock>
        <p className="mt-4">
          Therefore d = &radic;2.
        </p>
      </Example>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 200 200" className="w-full max-w-xs">
          {/* Square */}
          <rect x="30" y="30" width="140" height="140" fill="none" stroke="#60a5fa" strokeWidth="2" />

          {/* Diagonal */}
          <line x1="30" y1="170" x2="170" y2="30" stroke="#f472b6" strokeWidth="2" />

          {/* Labels */}
          <text x="95" y="185" fill="#60a5fa" fontSize="14">1</text>
          <text x="175" y="105" fill="#60a5fa" fontSize="14">1</text>
          <text x="110" y="95" fill="#f472b6" fontSize="14">&radic;2</text>
        </svg>
      </div>

      <Theorem title="Irrationality of &radic;2">
        <p>
          The Pythagoreans discovered that &radic;2 is <em>irrational</em>—there are no
          natural numbers m and n such that &radic;2 = m/n.
        </p>
        <p className="mt-4"><strong>Proof by contradiction:</strong></p>
        <p className="mt-2">
          Suppose &radic;2 = m/n where m and n have no common divisor. Then:
        </p>
        <div className="mt-4 space-y-2 pl-4 border-l-2 border-slate-600">
          <p>2 = m&sup2;/n&sup2; (squaring both sides)</p>
          <p>m&sup2; = 2n&sup2; (multiplying by n&sup2;)</p>
          <p>&rArr; m&sup2; is even &rArr; m is even (since odd&sup2; is odd)</p>
          <p>&rArr; m = 2l for some integer l</p>
          <p>&rArr; 4l&sup2; = 2n&sup2; &rArr; n&sup2; = 2l&sup2;</p>
          <p>&rArr; n&sup2; is even &rArr; n is even</p>
        </div>
        <p className="mt-4">
          But this means m and n share the common divisor 2, contradicting our assumption.
          Therefore &radic;2 is irrational.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Profound Implication:</strong> Geometry obviously includes the diagonal of
        the unit square, hence geometry includes the study of irrational lengths. This
        discovery troubled the ancient Greeks, who believed all lengths should be expressible
        as ratios of whole numbers.
      </Callout>

      <h3>Product as Area vs. Product as Length</h3>

      <p>
        The Greeks viewed the product of line segments a and b as the <em>rectangle</em>
        with perpendicular sides a and b. This interpretation has its merits:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The product of two lengths is an <em>area</em></li>
        <li>The product of three lengths is a <em>volume</em></li>
        <li>But then the product of four lengths seems to have no meaning!</li>
      </ul>

      <p>
        The idea of interpreting the product of line segments as another <em>line segment</em>
        (as we did above) first appears in Descartes' <em>Géométrie</em> of 1637, where
        algebra is used systematically in geometry for the first time.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> This conceptual difficulty perhaps explains why
        algebra appeared comparatively late in the development of geometry. On the other
        hand, interpreting the product of lengths as an area gives some remarkable insights,
        as we will see in Chapter 2.
      </Callout>

      <SectionQuiz
        sectionId={3}
        questions={quizMap[3] || []}
        title="Multiplication and Division Quiz"
      />
    </LessonLayout>
  );
}
