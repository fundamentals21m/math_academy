import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section03Quiz } from '@/data/quizzes';

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
          {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = 50 + 38 * Math.cos(angle);
            const y = 50 + 38 * Math.sin(angle);
            return (
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
            );
          })}
        </div>
      </div>

      <p>
        When we add <Math>{`11 + 3`}</Math> on a 12-hour clock, we get 2. 
        In mathematical notation, we write: <Math>{`11 + 3 \\equiv 2 \\pmod{12}`}</Math>
      </p>

      <h2>The Mod Operation</h2>

      <Definition title="Modulo Operation">
        For integers <Math>{`a`}</Math> and <Math>{`n`}</Math> (with <Math>{`n > 0`}</Math>), 
        the expression <Math>{`a \\bmod n`}</Math> gives the <strong>remainder</strong> when <Math>{`a`}</Math> is divided by <Math>{`n`}</Math>.
      </Definition>

      <MathBlock>
        {`a = q \\cdot n + r \\quad \\text{where } 0 \\le r < n`}
      </MathBlock>

      <p>
        Here, <Math>{`q`}</Math> is the quotient and <Math>{`r`}</Math> is the remainder. 
        The mod operation returns <Math>{`r`}</Math>.
      </p>

      <Example>
        <p>Calculate <Math>17 \bmod 5</Math>:</p>
        <MathBlock>
          {`17 = 3 \\times 5 + 2`}
        </MathBlock>
        <p>
          The remainder is 2, so <Math>17 \bmod 5 = 2</Math>
        </p>
      </Example>

      <Example>
        <p>Calculate <Math>25 \bmod 7</Math>:</p>
        <MathBlock>
          {`25 = 3 \\times 7 + 4`}
        </MathBlock>
        <p>
          The remainder is 4, so <Math>25 \bmod 7 = 4</Math>
        </p>
      </Example>

      <h2>Negative Numbers in Mod</h2>

      <Callout type="warning">
        <strong>Important for Cryptography:</strong> In cryptographic contexts, 
        we always want the result of mod to be <strong>non-negative</strong>. 
        Different programming languages handle this differently!
      </Callout>

      <Definition title="Mod with Negative Numbers">
        For negative numbers, we want the result to be in the range <Math>[0, n-1]</Math>. 
        If the standard remainder is negative, add <Math>n</Math> to make it positive.
      </Definition>

      <Example>
        <p>Calculate <Math>-1 \bmod 5</Math>:</p>
        <p>
          We need to find a number <Math>r</Math> where <Math>0 \le r {'<'} 5</Math> such 
          that <Math>-1 = q \times 5 + r</Math>.
        </p>
        <MathBlock>
          {`-1 = (-1) \\times 5 + 4`}
        </MathBlock>
        <p>
          So <Math>-1 \bmod 5 = 4</Math>
        </p>
      </Example>

      <p>
        Think of it this way: on a 5-hour clock, going back 1 hour from 0 takes you to 4.
      </p>

      <h2>Congruence Notation</h2>

      <Definition title="Congruence">
        We say <Math>a</Math> is <strong>congruent</strong> to <Math>b</Math> modulo <Math>n</Math>, 
        written <Math>a \equiv b \pmod{n}</Math>, if <Math>n</Math> divides <Math>(a - b)</Math>.
      </Definition>

      <p>
        Equivalently, <Math>a \equiv b \pmod{n}</Math> means <Math>a</Math> and <Math>b</Math> have 
        the same remainder when divided by <Math>n</Math>.
      </p>

      <Example>
        <MathBlock>
          {`17 \\equiv 2 \\pmod{5}`}
        </MathBlock>
        <p>
          Because <Math>17 - 2 = 15</Math>, and <Math>5</Math> divides <Math>15</Math>.
        </p>
        <p className="mt-2">
          Also, <Math>17 \bmod 5 = 2</Math> and <Math>2 \bmod 5 = 2</Math>—same remainder!
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
        This means we can reduce numbers mod <Math>n</Math> at any point during a calculation, 
        which is crucial for handling large numbers in cryptography.
      </p>

      <h2>Powers Cycle in Mod</h2>

      <p>
        An important property: when we raise a number to successive powers mod <Math>n</Math>, 
        the results eventually repeat in a cycle.
      </p>

      <Example>
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
          The pattern <Math>{`\\{2, 4, 1\\}`}</Math> repeats! This cycling behavior is 
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
