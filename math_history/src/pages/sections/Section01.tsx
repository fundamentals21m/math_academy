import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Arithmetic and Geometry</h2>

      <p>
        The ancient Greeks made a remarkable discovery: geometry and arithmetic are
        deeply intertwined. Numbers can be represented as geometric shapes, and
        geometric relationships can be expressed as equations. This connection,
        first explored by the Pythagoreans, remains at the heart of mathematics today.
      </p>

      <h3>Figurate Numbers</h3>

      <p>
        The Pythagoreans visualized numbers as arrangements of pebbles or dots.
        This led them to discover patterns that connect arithmetic with geometry.
      </p>

      <Definition title="Triangular Numbers">
        <p>
          The <strong>triangular numbers</strong> are formed by arranging dots in
          equilateral triangles:
        </p>
        <MathBlock>
          {`T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}`}
        </MathBlock>
        <p className="mt-2">
          The first few triangular numbers are: 1, 3, 6, 10, 15, 21, ...
        </p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 100" className="w-full max-w-lg">
          {/* T_1 = 1 */}
          <g transform="translate(20, 50)">
            <circle cx="0" cy="0" r="8" fill="#60a5fa" />
            <text x="0" y="35" textAnchor="middle" fill="#94a3b8" fontSize="14">T₁ = 1</text>
          </g>
          
          {/* T_2 = 3 */}
          <g transform="translate(80, 40)">
            <circle cx="0" cy="0" r="8" fill="#60a5fa" />
            <circle cx="-12" cy="20" r="8" fill="#60a5fa" />
            <circle cx="12" cy="20" r="8" fill="#60a5fa" />
            <text x="0" y="55" textAnchor="middle" fill="#94a3b8" fontSize="14">T₂ = 3</text>
          </g>
          
          {/* T_3 = 6 */}
          <g transform="translate(160, 30)">
            <circle cx="0" cy="0" r="8" fill="#60a5fa" />
            <circle cx="-12" cy="20" r="8" fill="#60a5fa" />
            <circle cx="12" cy="20" r="8" fill="#60a5fa" />
            <circle cx="-24" cy="40" r="8" fill="#60a5fa" />
            <circle cx="0" cy="40" r="8" fill="#60a5fa" />
            <circle cx="24" cy="40" r="8" fill="#60a5fa" />
            <text x="0" y="75" textAnchor="middle" fill="#94a3b8" fontSize="14">T₃ = 6</text>
          </g>
          
          {/* T_4 = 10 */}
          <g transform="translate(270, 20)">
            <circle cx="0" cy="0" r="8" fill="#60a5fa" />
            <circle cx="-12" cy="20" r="8" fill="#60a5fa" />
            <circle cx="12" cy="20" r="8" fill="#60a5fa" />
            <circle cx="-24" cy="40" r="8" fill="#60a5fa" />
            <circle cx="0" cy="40" r="8" fill="#60a5fa" />
            <circle cx="24" cy="40" r="8" fill="#60a5fa" />
            <circle cx="-36" cy="60" r="8" fill="#60a5fa" />
            <circle cx="-12" cy="60" r="8" fill="#60a5fa" />
            <circle cx="12" cy="60" r="8" fill="#60a5fa" />
            <circle cx="36" cy="60" r="8" fill="#60a5fa" />
            <text x="0" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14">T₄ = 10</text>
          </g>
        </svg>
      </div>

      <Definition title="Square Numbers">
        <p>
          The <strong>square numbers</strong> are formed by arranging dots in squares:
        </p>
        <MathBlock>
          {`S_n = n^2 = 1 + 3 + 5 + \\cdots + (2n-1)`}
        </MathBlock>
        <p className="mt-2">
          The first few square numbers are: 1, 4, 9, 16, 25, 36, ...
        </p>
      </Definition>

      <Theorem title="Sum of Odd Numbers">
        <p>
          The sum of the first <InlineMath>n</InlineMath> odd numbers equals <InlineMath>n^2</InlineMath>:
        </p>
        <MathBlock>
          {`1 + 3 + 5 + \\cdots + (2n-1) = n^2`}
        </MathBlock>
      </Theorem>

      <p>
        This can be seen geometrically: each new odd number forms an "L-shaped" border
        (called a <em>gnomon</em>) around the previous square.
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 150" className="w-full max-w-md">
          {/* Building up 4² */}
          <g transform="translate(50, 20)">
            {/* First 1 (blue) */}
            <rect x="0" y="0" width="25" height="25" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
            
            {/* Second L-shape: 3 (green) */}
            <rect x="25" y="0" width="25" height="25" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
            <rect x="0" y="25" width="25" height="25" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
            <rect x="25" y="25" width="25" height="25" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
            
            {/* Third L-shape: 5 (yellow) */}
            <rect x="50" y="0" width="25" height="25" fill="#eab308" stroke="#a16207" strokeWidth="1" />
            <rect x="50" y="25" width="25" height="25" fill="#eab308" stroke="#a16207" strokeWidth="1" />
            <rect x="50" y="50" width="25" height="25" fill="#eab308" stroke="#a16207" strokeWidth="1" />
            <rect x="0" y="50" width="25" height="25" fill="#eab308" stroke="#a16207" strokeWidth="1" />
            <rect x="25" y="50" width="25" height="25" fill="#eab308" stroke="#a16207" strokeWidth="1" />
            
            {/* Fourth L-shape: 7 (pink) */}
            <rect x="75" y="0" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="75" y="25" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="75" y="50" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="75" y="75" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="0" y="75" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="25" y="75" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            <rect x="50" y="75" width="25" height="25" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
          </g>
          
          {/* Labels */}
          <text x="220" y="35" fill="#3b82f6" fontSize="14">1</text>
          <text x="220" y="55" fill="#22c55e" fontSize="14">+ 3</text>
          <text x="220" y="75" fill="#eab308" fontSize="14">+ 5</text>
          <text x="220" y="95" fill="#ec4899" fontSize="14">+ 7</text>
          <line x1="215" y1="105" x2="260" y2="105" stroke="#94a3b8" strokeWidth="1" />
          <text x="220" y="125" fill="#94a3b8" fontSize="14">= 16 = 4²</text>
        </svg>
      </div>

      <h3>The Arithmetic-Geometric Connection</h3>

      <p>
        The Pythagoreans discovered a beautiful relationship between triangular and
        square numbers:
      </p>

      <Theorem title="Two Triangles Make a Square">
        <p>
          Two consecutive triangular numbers sum to a square number:
        </p>
        <MathBlock>
          {`T_{n-1} + T_n = n^2`}
        </MathBlock>
      </Theorem>

      <Example title="Verifying the Theorem">
        <p>
          Let's check with <InlineMath>n = 4</InlineMath>:
        </p>
        <MathBlock>
          {`T_3 + T_4 = 6 + 10 = 16 = 4^2 \\quad \\checkmark`}
        </MathBlock>
      </Example>

      <p>
        This can be seen by fitting two triangular arrangements together to form a rectangle,
        then observing that when <InlineMath>{'T_{n-1}'}</InlineMath> and <InlineMath>{'T_n'}</InlineMath> are
        combined, they form an <InlineMath>{'n \\times n'}</InlineMath> square.
      </p>

      <h3>The Diagonal Problem</h3>

      <p>
        The Pythagoreans believed that all lengths could be expressed as ratios of
        whole numbers. But the Pythagorean theorem led them to a troubling question:
      </p>

      <Callout type="warning">
        <strong>The Question that Changed Mathematics:</strong> What is the length of
        the diagonal of a unit square?
      </Callout>

      <p>
        By the Pythagorean theorem, if a square has side 1, its diagonal <InlineMath>d</InlineMath> satisfies:
      </p>

      <MathBlock>
        {`d^2 = 1^2 + 1^2 = 2`}
      </MathBlock>

      <p>
        So <InlineMath>{'d = \\sqrt{2}'}</InlineMath>. But can <InlineMath>{'\\sqrt{2}'}</InlineMath> be
        expressed as a ratio of whole numbers? The shocking answer—discovered by the
        Pythagoreans themselves—is <strong>no</strong>. This discovery of{' '}
        <em>irrational numbers</em> shook the foundations of Greek mathematics.
      </p>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In the next sections, we'll explore Pythagorean
        triples (when the arithmetic <em>does</em> work out to whole numbers) and then
        confront the discovery of irrational numbers head-on.
      </Callout>

      <SectionQuiz
        sectionId={1}
        questions={quizMap[1] || []}
        title="Arithmetic and Geometry Quiz"
      />
    </LessonLayout>
  );
}
