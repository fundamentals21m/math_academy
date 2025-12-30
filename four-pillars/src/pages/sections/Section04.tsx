import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { ThalesTheoremDemo } from '@/components/visualizations/chapter1';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Similar Triangles</h2>

      <p>
        Two triangles are called <strong>similar</strong> if their corresponding angles
        are equal. It turns out that equal angles imply that all sides are proportional,
        so we may say that one triangle is a magnification of the other, or that they
        have the same "shape."
      </p>

      <Definition title="Similar Triangles">
        <p>
          Triangles ABC and A&prime;B&prime;C&prime; are called <strong>similar</strong> if
          their corresponding angles are equal:
        </p>
        <div className="mt-4 space-y-2 pl-4">
          <p>angle at A = angle at A&prime; (= &alpha; say)</p>
          <p>angle at B = angle at B&prime; (= &beta; say)</p>
          <p>angle at C = angle at C&prime; (= &gamma; say)</p>
        </div>
      </Definition>

      <h3>Why Similar Triangles Have Proportional Sides</h3>

      <p>
        This important result extends the Thales theorem and follows from it.
      </p>

      <Theorem title="Proportional Sides of Similar Triangles">
        <p>
          If triangles ABC and A&prime;B&prime;C&prime; are similar, then all corresponding
          sides are proportional:
        </p>
        <MathBlock>
          {`\\frac{b}{c} = \\frac{b'}{c'}`}
        </MathBlock>
        <p className="mt-4">
          where b, c are sides of ABC opposite to angles &beta; and &gamma;, and
          b&prime;, c&prime; are the corresponding sides of A&prime;B&prime;C&prime;.
        </p>
      </Theorem>

      <h4>Proof</h4>

      <p>
        Imagine moving triangle ABC so that vertex A coincides with A&prime; and sides
        AB and AC lie on sides A&prime;B&prime; and A&prime;C&prime; respectively.
        We obtain the following situation:
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 300" className="w-full max-w-lg">
          {/* Large triangle A'B'C' */}
          <polygon points="50,250 350,250 200,50" fill="none" stroke="#60a5fa" strokeWidth="2" />

          {/* Small triangle ABC inside */}
          <polygon points="50,250 200,250 125,150" fill="none" stroke="#f472b6" strokeWidth="2" />

          {/* Parallel indication */}
          <line x1="125" y1="150" x2="200" y2="250" stroke="#f472b6" strokeWidth="2" />

          {/* Vertex labels */}
          <text x="35" y="265" fill="#60a5fa" fontSize="14">A = A&prime;</text>
          <text x="340" y="265" fill="#60a5fa" fontSize="14">C&prime;</text>
          <text x="195" y="40" fill="#60a5fa" fontSize="14">B&prime;</text>
          <text x="190" y="265" fill="#f472b6" fontSize="14">C</text>
          <text x="110" y="145" fill="#f472b6" fontSize="14">B</text>

          {/* Angle markers */}
          <path d="M 70 250 A 20 20 0 0 1 60 235" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="75" y="238" fill="#fbbf24" fontSize="12">&alpha;</text>

          {/* Side labels */}
          <text x="80" y="210" fill="#f472b6" fontSize="12">c</text>
          <text x="160" y="210" fill="#f472b6" fontSize="12">b</text>
          <text x="60" y="160" fill="#60a5fa" fontSize="12">c&prime;</text>
          <text x="200" y="160" fill="#60a5fa" fontSize="12">b&prime;</text>

          {/* Angle beta markers */}
          <path d="M 125 150 L 140 165 L 155 150" fill="none" stroke="#34d399" strokeWidth="1.5" />
          <text x="145" y="140" fill="#34d399" fontSize="12">&beta;</text>
          <path d="M 200 50 L 185 75 L 210 85" fill="none" stroke="#34d399" strokeWidth="1.5" />
          <text x="175" y="70" fill="#34d399" fontSize="12">&beta;</text>
        </svg>
      </div>

      <p>
        Because BC and B&prime;C&prime; both meet AB at angle &beta;, they are <em>parallel</em>.
        By the Thales theorem:
      </p>

      <MathBlock>
        {`\\frac{b}{c} = \\frac{b' - b}{c' - c}`}
      </MathBlock>

      <p>
        Multiplying both sides by c(c&prime; - c):
      </p>

      <MathBlock>
        {`b(c' - c) = c(b' - b)`}
      </MathBlock>

      <p>
        Expanding: bc&prime; - bc = cb&prime; - cb, hence bc&prime; = cb&prime;.
      </p>

      <p>
        Dividing both sides by cc&prime;:
      </p>

      <MathBlock>
        {`\\frac{b}{c} = \\frac{b'}{c'}`}
      </MathBlock>

      <Callout type="info">
        <strong>Note:</strong> By making different angles coincide, we can show that
        <em>all</em> corresponding sides are proportional.
      </Callout>

      <h3>Applications of Similar Triangles</h3>

      <p>
        The theorem on similar triangles has many implications:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>In everyday life: scale maps, house plans, engineering drawings</li>
        <li>In pure geometry: countless theorems and constructions</li>
      </ul>

      <Example title="The Diagonal of the Unit Square is &radic;2">
        <p>
          The diagonals of the unit square cut it into four quarters, each of which is
          a triangle similar to the half square cut off by a diagonal.
        </p>
      </Example>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 200 200" className="w-full max-w-xs">
          {/* Square */}
          <rect x="30" y="30" width="140" height="140" fill="none" stroke="#60a5fa" strokeWidth="2" />

          {/* Diagonals */}
          <line x1="30" y1="30" x2="170" y2="170" stroke="#f472b6" strokeWidth="1.5" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="#f472b6" strokeWidth="1.5" />

          {/* Labels */}
          <text x="175" y="105" fill="#60a5fa" fontSize="12">1</text>
          <text x="130" y="90" fill="#34d399" fontSize="10">d/2</text>
          <text x="90" y="90" fill="#34d399" fontSize="10">d/2</text>
          <text x="90" y="125" fill="#34d399" fontSize="10">d/2</text>
          <text x="130" y="125" fill="#34d399" fontSize="10">d/2</text>
        </svg>
      </div>

      <p>
        Each of these triangles has one right angle and two half right angles (45&deg; each).
        If we compare the half square (short side 1, long side d) with the quarter square
        (short side d/2, long side 1):
      </p>

      <MathBlock>
        {`\\frac{\\text{short}}{\\text{long}} = \\frac{1}{d} = \\frac{d/2}{1}`}
      </MathBlock>

      <p>
        Multiplying both sides by 2d: 2 = d&sup2;, so <strong>d = &radic;2</strong>.
      </p>

      <h3>The Famous Theorems of Pappus and Desargues</h3>

      <p>
        The Thales theorem leads to two famous theorems that play an important role in
        the foundations of geometry.
      </p>

      <Theorem title="Pappus's Theorem (Parallel Case)">
        <p>
          Suppose that points A, B, C, D, E, F lie alternately on two lines L and M
          meeting at O.
        </p>
        <p className="mt-4">
          If AB is parallel to ED and FE is parallel to BC, then AF is parallel to CD.
        </p>
      </Theorem>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 250" className="w-full max-w-lg">
          {/* Line L (bottom) */}
          <line x1="30" y1="200" x2="370" y2="200" stroke="#475569" strokeWidth="1.5" />
          <text x="375" y="205" fill="#475569" fontSize="12">L</text>

          {/* Line M (top) */}
          <line x1="30" y1="200" x2="300" y2="50" stroke="#475569" strokeWidth="1.5" />
          <text x="305" y="45" fill="#475569" fontSize="12">M</text>

          {/* Point O */}
          <circle cx="30" cy="200" r="4" fill="#f472b6" />
          <text x="15" y="215" fill="#f472b6" fontSize="14">O</text>

          {/* Points on L */}
          <circle cx="100" cy="200" r="3" fill="#60a5fa" />
          <text x="95" y="220" fill="#60a5fa" fontSize="12">F</text>

          <circle cx="180" cy="200" r="3" fill="#60a5fa" />
          <text x="175" y="220" fill="#60a5fa" fontSize="12">B</text>

          <circle cx="280" cy="200" r="3" fill="#60a5fa" />
          <text x="275" y="220" fill="#60a5fa" fontSize="12">D</text>

          {/* Points on M */}
          <circle cx="100" cy="145" r="3" fill="#34d399" />
          <text x="85" y="140" fill="#34d399" fontSize="12">A</text>

          <circle cx="170" cy="100" r="3" fill="#34d399" />
          <text x="155" y="95" fill="#34d399" fontSize="12">E</text>

          <circle cx="240" cy="55" r="3" fill="#34d399" />
          <text x="245" y="50" fill="#34d399" fontSize="12">C</text>

          {/* Parallel lines (dashed) */}
          <line x1="100" y1="145" x2="180" y2="200" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="170" y1="100" x2="280" y2="200" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="100" y1="145" x2="170" y2="100" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="180" y1="200" x2="240" y2="55" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />

          {/* Conclusion line */}
          <line x1="100" y1="200" x2="240" y2="55" stroke="#c084fc" strokeWidth="2" />
          <line x1="280" y1="200" x2="170" y2="100" stroke="#c084fc" strokeWidth="2" />
        </svg>
      </div>

      <Theorem title="Desargues's Theorem (Parallel Case)">
        <p>
          Suppose that triangles ABC and A&prime;B&prime;C&prime; are "in perspective
          from O"—meaning points A, B, C, A&prime;, B&prime;, C&prime; lie on concurrent
          lines through O.
        </p>
        <p className="mt-4">
          If AB is parallel to A&prime;B&prime; and BC is parallel to B&prime;C&prime;,
          then AC is parallel to A&prime;C&prime;.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Looking Ahead:</strong> We will meet the Pappus and Desargues theorems
        again in more general form when we study projective geometry in Chapter 5. They
        play a fundamental role in understanding the relationship between geometry and algebra.
      </Callout>

      <ThalesTheoremDemo className="my-6" />

      <SectionQuiz
        sectionId={4}
        questions={quizMap[4] || []}
        title="Similar Triangles Quiz"
      />
    </LessonLayout>
  );
}
