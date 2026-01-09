import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>The Theorem of Pythagoras: Introduction</h2>

      <p>
        The theorem of Pythagoras is arguably the most important theorem in all of
        mathematics. It lies at the intersection of arithmetic and geometry, and
        its ramifications extend throughout the history of mathematics—from ancient
        Babylon to modern number theory.
      </p>

      <p>
        The theorem itself is deceptively simple: in a right-angled triangle, the
        square on the hypotenuse equals the sum of the squares on the other two sides.
      </p>

      <MathBlock>
        {`a^2 + b^2 = c^2`}
      </MathBlock>

      <p>
        But this simple equation conceals profound depths. When we ask which
        right triangles have integer sides, we are led into number theory. When
        we ask whether the diagonal of a square can be measured exactly, we
        discover irrational numbers. The Pythagorean theorem is, in a sense,
        the gateway to all of higher mathematics.
      </p>

      <h3>The Historical Setting</h3>

      <p>
        The theorem is named after <strong>Pythagoras of Samos</strong> (c. 570–495 BCE),
        who founded a school in southern Italy around 530 BCE. The Pythagoreans were
        as much a religious brotherhood as a mathematical school. They believed that
        "all is number"—that the universe could be understood through mathematics.
      </p>

      <Callout type="note">
        <strong>Historical Note:</strong> The Pythagorean theorem was actually known
        long before Pythagoras. Babylonian clay tablets from around 1800 BCE show
        knowledge of Pythagorean triples, and there is evidence of the theorem
        in ancient Chinese and Indian mathematics. What Pythagoras may have contributed
        is the first <em>proof</em> of the theorem.
      </Callout>

      <h3>A Visual Proof</h3>

      <p>
        There are hundreds of proofs of the Pythagorean theorem. Here is one of
        the most elegant, based on rearranging areas:
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg">
          {/* Left square: (a+b)² arranged one way */}
          <g transform="translate(10, 10)">
            {/* Outer square */}
            <rect x="0" y="0" width="150" height="150" fill="none" stroke="#60a5fa" strokeWidth="2" />
            
            {/* Four triangles */}
            <polygon points="0,40 40,0 0,0" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="40,0 150,0 150,110" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="150,110 150,150 110,150" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="110,150 0,150 0,40" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            
            {/* Inner tilted square (c²) */}
            <polygon points="0,40 40,0 150,110 110,150" fill="#f472b6" fillOpacity="0.3" stroke="#f472b6" strokeWidth="2" />
            
            {/* Labels */}
            <text x="15" y="15" fill="#60a5fa" fontSize="12">a</text>
            <text x="90" y="15" fill="#60a5fa" fontSize="12">b</text>
            <text x="70" y="85" fill="#f472b6" fontSize="14" fontWeight="bold">c²</text>
          </g>
          
          {/* Equals sign */}
          <text x="185" y="95" fill="#94a3b8" fontSize="24">=</text>
          
          {/* Right square: (a+b)² arranged another way */}
          <g transform="translate(220, 10)">
            {/* Outer square */}
            <rect x="0" y="0" width="150" height="150" fill="none" stroke="#60a5fa" strokeWidth="2" />
            
            {/* Four triangles in corners */}
            <polygon points="0,40 40,0 0,0" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="150,0 150,40 110,0" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="150,150 110,150 150,110" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            <polygon points="0,150 0,110 40,150" fill="#34d399" fillOpacity="0.5" stroke="#34d399" strokeWidth="1" />
            
            {/* a² square */}
            <rect x="0" y="40" width="40" height="70" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2" />
            <text x="15" y="80" fill="#fbbf24" fontSize="12" fontWeight="bold">a²</text>
            
            {/* b² square */}
            <rect x="40" y="0" width="70" height="110" fill="#818cf8" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2" />
            <text x="70" y="60" fill="#818cf8" fontSize="12" fontWeight="bold">b²</text>
          </g>
        </svg>
      </div>

      <p>
        Both squares have the same area <InlineMath>{`(a+b)^2`}</InlineMath>. Both contain
        four identical right triangles with legs <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
        Therefore, the remaining areas must be equal: the tilted square <InlineMath>c^2</InlineMath> on
        the left equals the two axis-aligned squares <InlineMath>a^2 + b^2</InlineMath> on the right.
      </p>

      <Theorem title="The Pythagorean Theorem">
        <p>
          In any right triangle with legs <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> and
          hypotenuse <InlineMath>c</InlineMath>:
        </p>
        <MathBlock>
          {`a^2 + b^2 = c^2`}
        </MathBlock>
      </Theorem>

      <h3>Why This Theorem Matters</h3>

      <p>
        The Pythagorean theorem is remarkable because it connects two seemingly
        different mathematical concepts:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Geometry:</strong> The relationship between lengths in a right triangle
        </li>
        <li>
          <strong>Arithmetic:</strong> The equation <InlineMath>{`a^2 + b^2 = c^2`}</InlineMath> among numbers
        </li>
      </ul>

      <p>
        This connection between geometry and arithmetic was the foundation of Greek
        mathematics and continues to drive mathematical discovery today. In the
        following sections, we will explore:
      </p>

      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>How the arithmetic and geometric viewpoints interact</li>
        <li>Pythagorean triples: integer solutions to the equation</li>
        <li>The discovery of irrational numbers through <InlineMath>{`\\sqrt{2}`}</InlineMath></li>
        <li>The profound crisis this discovery caused in Greek mathematics</li>
      </ol>

      <Definition title="Pythagorean Triple">
        <p>
          A <strong>Pythagorean triple</strong> is a set of three positive integers
          <InlineMath>(a, b, c)</InlineMath> satisfying <InlineMath>a^2 + b^2 = c^2</InlineMath>.
        </p>
        <p className="mt-2">
          The most famous example is <InlineMath>(3, 4, 5)</InlineMath>:
        </p>
        <MathBlock>
          {`3^2 + 4^2 = 9 + 16 = 25 = 5^2`}
        </MathBlock>
      </Definition>

      <Example title="Checking a Pythagorean Triple">
        <p>
          Is <InlineMath>(5, 12, 13)</InlineMath> a Pythagorean triple?
        </p>
        <MathBlock>
          {`5^2 + 12^2 = 25 + 144 = 169 = 13^2 \\quad \\checkmark`}
        </MathBlock>
        <p>
          Yes! This is another Pythagorean triple.
        </p>
      </Example>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In the next section, we'll explore the deep
        connection between arithmetic and geometry that the Pythagorean theorem reveals,
        and see how the ancient Greeks used this connection to develop their mathematics.
      </Callout>

      <SectionQuiz
        sectionId={0}
        questions={quizMap[0] || []}
        title="Introduction to the Pythagorean Theorem"
      />
    </LessonLayout>
  );
}
