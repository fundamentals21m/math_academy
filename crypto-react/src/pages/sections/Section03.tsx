import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section03Quiz } from '@/data/quizzes';

// Pre-calculate clock positions to avoid Math shadowing issues
const clockPositions = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  const x = 50 + 38 * Math.cos(angle);
  const y = 50 + 38 * Math.sin(angle);
  return { num, x, y };
});

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Modular Arithmetic: Clock Math</h2>

      <p>
        Modular arithmetic is perhaps the most important mathematical tool in cryptography.
        The good news? You already understand it intuitively—it's just like telling time on a clock.
      </p>

      <h2>The Clock Analogy</h2>

      <p>
        On a 12-hour clock, what time is it 3 hours after 11 o'clock?
        Not 14 o'clock—we "wrap around" to get 2 o'clock.
        This is modular arithmetic in action!
      </p>

      {/* TODO: Add clock visualization - interactive clock showing hour hand and modular arithmetic */}

      <div className="flex justify-center my-8">
        <div className="relative w-48 h-48 rounded-full border-4 border-primary-500 bg-dark-800">
          {clockPositions.map(({ num, x, y }) => (
              <span
                key={num}
                className="absolute text-sm font-bold text-primary-400"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {num}
              </span>
            ))}
        </div>
      </div>

      <p>
        When we add <InlineMath>{`11 + 3`}</InlineMath> on a 12-hour clock, we get 2. 
        In mathematical notation, we write: <InlineMath>{`11 + 3 \\equiv 2 \\pmod{12}`}</InlineMath>
      </p>

      <h2>The Mod Operation</h2>

      <Definition title="Modulo Operation">
        For integers <InlineMath>{`a`}</InlineMath> and <InlineMath>{`n`}</InlineMath> (with <InlineMath>{`n > 0`}</InlineMath>), 
        the expression <InlineMath>{`a \\bmod n`}</InlineMath> gives the <strong>remainder</strong> when <InlineMath>{`a`}</InlineMath> is divided by <InlineMath>{`n`}</InlineMath>.
      </Definition>

      <MathBlock>
        {`a = q \\cdot n + r \\quad \\text{where } 0 \\le r < n`}
      </MathBlock>

      <p>
        Here, <InlineMath>{`q`}</InlineMath> is the quotient and <InlineMath>{`r`}</InlineMath> is the remainder. 
        The mod operation returns <InlineMath>{`r`}</InlineMath>.
      </p>

      <Example title="Calculating 17 mod 5">
        <p>Calculate <InlineMath>{`17 \\bmod 5`}</InlineMath>:</p>
        <MathBlock>
          {`17 = 3 \\times 5 + 2`}
        </MathBlock>
        <p>
          The remainder is 2, so <InlineMath>{`17 \\bmod 5 = 2`}</InlineMath>
        </p>
      </Example>

      <Example title="Calculating 25 mod 7">
        <p>Calculate <InlineMath>{`25 \\bmod 7`}</InlineMath>:</p>
        <MathBlock>
          {`25 = 3 \\times 7 + 4`}
        </MathBlock>
        <p>
          The remainder is 4, so <InlineMath>{`25 \\bmod 7 = 4`}</InlineMath>
        </p>
      </Example>

      <h2>Negative Numbers in Mod</h2>

      <Callout type="warning">
        <strong>Important for Cryptography:</strong> In cryptographic contexts, 
        we always want the result of mod to be <strong>non-negative</strong>. 
        Different programming languages handle this differently!
      </Callout>

      <Definition title="Mod with Negative Numbers">
        For negative numbers, we want the result to be in the range <InlineMath>[0, n-1]</InlineMath>. 
        If the standard remainder is negative, add <InlineMath>n</InlineMath> to make it positive.
      </Definition>

      <Example title="Calculating -1 mod 5">
        <p>Calculate <InlineMath>{`-1 \\bmod 5`}</InlineMath>:</p>
        <p>
          We need to find a number <InlineMath>{`r`}</InlineMath> where <InlineMath>{`0 \\le r < 5`}</InlineMath> such
          that <InlineMath>{`-1 = q \\times 5 + r`}</InlineMath>.
        </p>
        <MathBlock>
          {`-1 = (-1) \\times 5 + 4`}
        </MathBlock>
        <p>
          So <InlineMath>{`-1 \\bmod 5 = 4`}</InlineMath>
        </p>
      </Example>

      <p>
        Think of it this way: on a 5-hour clock, going back 1 hour from 0 takes you to 4.
      </p>

      <h2>Congruence Notation</h2>

      <Definition title="Congruence">
        We say <InlineMath>a</InlineMath> is <strong>congruent</strong> to <InlineMath>b</InlineMath> modulo <InlineMath>n</InlineMath>, 
        written <InlineMath>{`a \\equiv b \\pmod{n}`}</InlineMath>, if <InlineMath>n</InlineMath> divides <InlineMath>(a - b)</InlineMath>.
      </Definition>

      <p>
        Equivalently, <InlineMath>{`a \\equiv b \\pmod{n}`}</InlineMath> means <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> have 
        the same remainder when divided by <InlineMath>n</InlineMath>.
      </p>

      <Example title="Congruence Example">
        <MathBlock>
          {`17 \\equiv 2 \\pmod{5}`}
        </MathBlock>
        <p>
          Because <InlineMath>17 - 2 = 15</InlineMath>, and <InlineMath>5</InlineMath> divides <InlineMath>15</InlineMath>.
        </p>
        <p className="mt-2">
          Also, <InlineMath>{`17 \\bmod 5 = 2`}</InlineMath> and <InlineMath>{`2 \\bmod 5 = 2`}</InlineMath>—same remainder!
        </p>
      </Example>

      <h2>Arithmetic in Mod</h2>

      <Theorem title="Modular Arithmetic Properties">
        Addition, subtraction, and multiplication work naturally in modular arithmetic:
        <MathBlock>
          {`(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n`}
        </MathBlock>
        <MathBlock>
          {`(a \\times b) \\bmod n = ((a \\bmod n) \\times (b \\bmod n)) \\bmod n`}
        </MathBlock>
      </Theorem>

      <p>
        This means we can reduce numbers mod <InlineMath>n</InlineMath> at any point during a calculation, 
        which is crucial for handling large numbers in cryptography.
      </p>

      <h2>Powers Cycle in Mod</h2>

      <p>
        An important property: when we raise a number to successive powers mod <InlineMath>n</InlineMath>, 
        the results eventually repeat in a cycle.
      </p>

      <Example title="Powers Cycling Mod 7">
        <p>Powers of 2 mod 7:</p>
        <div className="bg-dark-700/50 rounded-lg p-4 my-2 font-mono">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <span>2<sup>1</sup> mod 7 = <span className="text-emerald-400">2</span></span>
            <span>2<sup>2</sup> mod 7 = <span className="text-emerald-400">4</span></span>
            <span>2<sup>3</sup> mod 7 = <span className="text-emerald-400">1</span></span>
            <span>2<sup>4</sup> mod 7 = <span className="text-emerald-400">2</span></span>
          </div>
        </div>
        <p>
          The pattern <InlineMath>{`\\{2, 4, 1\\}`}</InlineMath> repeats! This cycling behavior is 
          fundamental to cryptographic algorithms.
        </p>
      </Example>

      <Callout type="success">
        <strong>Key Takeaway:</strong> Modular arithmetic keeps numbers in a fixed range 
        by "wrapping around." This property is essential for cryptography because it lets 
        us work with manageable numbers even when dealing with astronomically large calculations.
      </Callout>

      <SectionQuiz sectionId={3} questions={section03Quiz} title="Modular Arithmetic Quiz" />
    </LessonLayout>
  );
}
