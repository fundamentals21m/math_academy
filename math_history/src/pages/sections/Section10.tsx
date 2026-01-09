import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>The Euclidean Algorithm</h2>

      <p>
        The <strong>Euclidean algorithm</strong> is one of the oldest algorithms
        in mathematics, appearing in Book VII of Euclid's <em>Elements</em>
        (c. 300 BCE). It finds the greatest common divisor (GCD) of two integers
        through repeated division—a procedure so efficient it remains in use today,
        over 2300 years later.
      </p>

      <h3>Division with Remainder</h3>

      <p>
        The foundation of the Euclidean algorithm is the <strong>division
        algorithm</strong>, which states that any integer can be divided by
        a positive integer to produce a quotient and remainder.
      </p>

      <Theorem title="The Division Algorithm">
        <p>
          For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> with{' '}
          <InlineMath>b &gt; 0</InlineMath>, there exist unique integers{' '}
          <InlineMath>q</InlineMath> (quotient) and <InlineMath>r</InlineMath> (remainder)
          such that:
        </p>
        <MathBlock>
          {`a = bq + r \\quad \\text{where } 0 \\leq r < b`}
        </MathBlock>
      </Theorem>

      <Example title="Division with Remainder">
        <p>
          Dividing 47 by 13:
        </p>
        <MathBlock>
          {`47 = 13 \\times 3 + 8`}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>q = 3</InlineMath> and <InlineMath>r = 8</InlineMath>.
        </p>
      </Example>

      <h3>The Greatest Common Divisor</h3>

      <Definition title="Greatest Common Divisor">
        <p>
          The <strong>greatest common divisor</strong> (GCD) of two integers{' '}
          <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, written{' '}
          <InlineMath>\gcd(a, b)</InlineMath>, is the largest positive integer
          that divides both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
        </p>
      </Definition>

      <p>
        For example, <InlineMath>\gcd(12, 18) = 6</InlineMath> because 6 is the
        largest number that divides both 12 and 18.
      </p>

      <h3>The Algorithm</h3>

      <p>
        Euclid's key insight was that the GCD of two numbers doesn't change when
        we replace the larger number with its remainder when divided by the smaller:
      </p>

      <Theorem title="Euclid's Lemma">
        <p>
          For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>
          with <InlineMath>a = bq + r</InlineMath>:
        </p>
        <MathBlock>
          {`\\gcd(a, b) = \\gcd(b, r)`}
        </MathBlock>
      </Theorem>

      <p>
        By repeatedly applying this lemma, we reduce the problem until one of the
        numbers becomes zero. The other number is then the GCD.
      </p>

      <Example title="Finding GCD(252, 105)">
        <p>Apply the Euclidean algorithm:</p>
        <MathBlock>
          {`\\begin{align}
252 &= 105 \\times 2 + 42 \\\\
105 &= 42 \\times 2 + 21 \\\\
42 &= 21 \\times 2 + 0
\\end{align}`}
        </MathBlock>
        <p className="mt-2">
          Since we reached remainder 0, the GCD is the last nonzero remainder:{' '}
          <InlineMath>\gcd(252, 105) = 21</InlineMath>.
        </p>
      </Example>

      {/* Interactive SVG visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Geometric Interpretation
        </h4>
        <svg viewBox="0 0 500 200" className="w-full h-auto">
          {/* Large rectangle 252 x 105 */}
          <rect x="20" y="20" width="252" height="105" fill="none" stroke="#818cf8" strokeWidth="2"/>
          
          {/* First square 105 x 105 */}
          <rect x="20" y="20" width="105" height="105" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="1"/>
          <text x="72" y="77" fill="#c7d2fe" fontSize="14" textAnchor="middle">105</text>
          
          {/* Second square 105 x 105 */}
          <rect x="125" y="20" width="105" height="105" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="1"/>
          <text x="177" y="77" fill="#c7d2fe" fontSize="14" textAnchor="middle">105</text>
          
          {/* Remaining strip 42 x 105 */}
          <rect x="230" y="20" width="42" height="105" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1"/>
          <text x="251" y="77" fill="#a7f3d0" fontSize="12" textAnchor="middle">42</text>
          
          {/* Arrow and label */}
          <text x="370" y="50" fill="#94a3b8" fontSize="12">252 = 105 × 2 + 42</text>
          <text x="370" y="75" fill="#94a3b8" fontSize="12">Next: find GCD(105, 42)</text>
          
          {/* Lower diagram: 105 x 42 */}
          <rect x="20" y="140" width="105" height="42" fill="none" stroke="#10b981" strokeWidth="2"/>
          
          {/* Two 42x42 squares */}
          <rect x="20" y="140" width="42" height="42" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1"/>
          <rect x="62" y="140" width="42" height="42" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1"/>
          
          {/* Remaining 21x42 strip */}
          <rect x="104" y="140" width="21" height="42" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
          <text x="114" y="165" fill="#fcd34d" fontSize="10" textAnchor="middle">21</text>
          
          <text x="160" y="155" fill="#94a3b8" fontSize="12">105 = 42 × 2 + 21</text>
          <text x="160" y="175" fill="#94a3b8" fontSize="12">42 = 21 × 2 + 0 → GCD = 21</text>
        </svg>
        <p className="text-sm text-dark-400 mt-2">
          Geometrically, the Euclidean algorithm finds the largest square that can
          tile a rectangle. Here, a 252 × 105 rectangle can be tiled by 21 × 21 squares.
        </p>
      </div>

      <h3>Efficiency of the Algorithm</h3>

      <p>
        The Euclidean algorithm is remarkably efficient. The number of steps is
        at most logarithmic in the input size:
      </p>

      <Theorem title="Lamé's Theorem (1844)">
        <p>
          The number of steps in the Euclidean algorithm for <InlineMath>\gcd(a, b)</InlineMath>
          with <InlineMath>a &gt; b</InlineMath> is at most five times the number
          of digits in <InlineMath>b</InlineMath>.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Worst Case:</strong> The algorithm takes the most steps when
        applied to consecutive Fibonacci numbers. For example,{' '}
        <InlineMath>\gcd(F_{n+1}, F_n)</InlineMath> requires exactly{' '}
        <InlineMath>n</InlineMath> steps.
      </Callout>

      <h3>The Extended Euclidean Algorithm</h3>

      <p>
        A powerful extension of the algorithm not only finds the GCD but also
        expresses it as a linear combination of the original numbers:
      </p>

      <Theorem title="Bézout's Identity">
        <p>
          For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
          there exist integers <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>
          such that:
        </p>
        <MathBlock>
          {`ax + by = \\gcd(a, b)`}
        </MathBlock>
      </Theorem>

      <Example title="Bézout's Identity for GCD(252, 105)">
        <p>Working backwards from our earlier calculation:</p>
        <MathBlock>
          {`\\begin{align}
21 &= 105 - 42 \\times 2 \\\\
   &= 105 - (252 - 105 \\times 2) \\times 2 \\\\
   &= 105 \\times 5 - 252 \\times 2
\\end{align}`}
        </MathBlock>
        <p className="mt-2">
          So <InlineMath>252 \\times (-2) + 105 \\times 5 = 21</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Modern Applications:</strong> The extended Euclidean algorithm
        is fundamental in modern cryptography, particularly in RSA encryption,
        where it's used to find modular multiplicative inverses.
      </Callout>

      <SectionQuiz
        sectionId={10}
        questions={quizMap[10] || []}
        title="The Euclidean Algorithm Quiz"
      />
    </LessonLayout>
  );
}
