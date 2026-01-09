import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>The Discovery of √2</h2>

      <p>
        The number <InlineMath>\\sqrt{2}</InlineMath> holds a special place in mathematical
        history. It was likely the first irrational number ever discovered, and its
        irrationality revealed a fundamental gap between geometry and arithmetic that
        would take over two thousand years to properly bridge.
      </p>

      <h3>Geometric Origins</h3>

      <p>
        The Pythagoreans encountered <InlineMath>\\sqrt{2}</InlineMath> through a simple
        geometric construction: the diagonal of a unit square. This is perhaps the most
        natural geometric construction imaginable, yet it yields a number that defies
        expression as a ratio of integers.
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 200" className="w-full max-w-md">
          {/* Unit square */}
          <rect x="50" y="30" width="100" height="100" fill="none" stroke="#60a5fa" strokeWidth="2" />
          
          {/* Diagonal */}
          <line x1="50" y1="130" x2="150" y2="30" stroke="#f472b6" strokeWidth="2" />
          
          {/* Labels */}
          <text x="100" y="150" textAnchor="middle" fill="#60a5fa" fontSize="14">1</text>
          <text x="165" y="85" fill="#60a5fa" fontSize="14">1</text>
          <text x="85" y="70" fill="#f472b6" fontSize="14">√2</text>
          
          {/* Number line showing √2 */}
          <line x1="50" y1="180" x2="250" y2="180" stroke="#94a3b8" strokeWidth="1" />
          <line x1="50" y1="175" x2="50" y2="185" stroke="#94a3b8" strokeWidth="2" />
          <line x1="120" y1="175" x2="120" y2="185" stroke="#94a3b8" strokeWidth="2" />
          <line x1="150" y1="175" x2="150" y2="185" stroke="#f472b6" strokeWidth="2" />
          <line x1="190" y1="175" x2="190" y2="185" stroke="#94a3b8" strokeWidth="2" />
          
          <text x="50" y="198" textAnchor="middle" fill="#94a3b8" fontSize="12">0</text>
          <text x="120" y="198" textAnchor="middle" fill="#94a3b8" fontSize="12">1</text>
          <text x="150" y="198" textAnchor="middle" fill="#f472b6" fontSize="12">√2</text>
          <text x="190" y="198" textAnchor="middle" fill="#94a3b8" fontSize="12">2</text>
        </svg>
      </div>

      <h3>Computing √2</h3>

      <p>
        Although <InlineMath>\\sqrt{2}</InlineMath> cannot be written as a fraction, we
        can compute it to any desired precision. The ancient Babylonians discovered
        an iterative method for this purpose.
      </p>

      <Theorem title="Babylonian Method for √2">
        <p>
          Starting with an initial guess <InlineMath>x_0</InlineMath>, the sequence
          defined by:
        </p>
        <MathBlock>
          {`x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)`}
        </MathBlock>
        <p className="mt-2">
          converges rapidly to <InlineMath>\\sqrt{2}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing √2 with the Babylonian Method">
        <p>Starting with <InlineMath>x_0 = 1</InlineMath>:</p>
        <MathBlock>
          {`\\begin{aligned}
x_1 &= \\frac{1}{2}\\left(1 + \\frac{2}{1}\\right) = \\frac{3}{2} = 1.5 \\\\[0.5em]
x_2 &= \\frac{1}{2}\\left(\\frac{3}{2} + \\frac{2}{3/2}\\right) = \\frac{17}{12} \\approx 1.4167 \\\\[0.5em]
x_3 &= \\frac{1}{2}\\left(\\frac{17}{12} + \\frac{2}{17/12}\\right) = \\frac{577}{408} \\approx 1.41422
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          After just 3 iterations, we have 5 correct decimal places!
          The actual value is <InlineMath>\\sqrt{2} \\approx 1.41421356...</InlineMath>
        </p>
      </Example>

      <Callout type="note">
        <strong>Babylonian Clay Tablets:</strong> The Yale Babylonian Collection contains
        tablet YBC 7289, dating from around 1800 BCE, which shows a square with its
        diagonal. The number 1;24,51,10 in base-60 notation is inscribed, giving
        <InlineMath>\\sqrt{2} \\approx 1.41421296</InlineMath>—accurate to 6 decimal places!
      </Callout>

      <h3>The Continued Fraction of √2</h3>

      <p>
        Another beautiful representation of <InlineMath>\\sqrt{2}</InlineMath> comes
        from continued fractions:
      </p>

      <Definition title="Continued Fraction">
        <p>
          A <strong>continued fraction</strong> expresses a number as a nested sequence
          of fractions. For <InlineMath>\\sqrt{2}</InlineMath>:
        </p>
        <MathBlock>
          {`\\sqrt{2} = 1 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\ddots}}}}`}
        </MathBlock>
        <p className="mt-2">
          Or more compactly: <InlineMath>\\sqrt{2} = [1; 2, 2, 2, 2, ...]</InlineMath>
        </p>
      </Definition>

      <p>
        This continued fraction is remarkable for its simplicity—after the initial 1,
        all the partial quotients are 2. This yields the <em>best</em> rational
        approximations to <InlineMath>\\sqrt{2}</InlineMath>:
      </p>

      <MathBlock>
        {`\\frac{1}{1}, \\frac{3}{2}, \\frac{7}{5}, \\frac{17}{12}, \\frac{41}{29}, \\frac{99}{70}, ...`}
      </MathBlock>

      <p>
        These fractions are called the <em>convergents</em> of the continued fraction.
        Each one is the best possible rational approximation to <InlineMath>\\sqrt{2}</InlineMath>
        with a denominator of that size or smaller.
      </p>

      <h3>The √2 Rectangle</h3>

      <p>
        A rectangle with aspect ratio <InlineMath>\\sqrt{2} : 1</InlineMath> has a
        remarkable property: when cut in half, the resulting rectangles have the
        same aspect ratio as the original!
      </p>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 180" className="w-full max-w-md">
          {/* Original rectangle */}
          <rect x="30" y="20" width="141" height="100" fill="none" stroke="#60a5fa" strokeWidth="2" />
          
          {/* Dividing line */}
          <line x1="100" y1="20" x2="100" y2="120" stroke="#f472b6" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Labels */}
          <text x="100" y="140" textAnchor="middle" fill="#60a5fa" fontSize="12">√2</text>
          <text x="180" y="75" fill="#60a5fa" fontSize="12">1</text>
          <text x="65" y="15" fill="#f472b6" fontSize="12">1</text>
          <text x="130" y="15" fill="#f472b6" fontSize="12">√2 - 1</text>
          
          {/* Arrow and text */}
          <text x="200" y="70" fill="#94a3b8" fontSize="14">Each half has</text>
          <text x="200" y="88" fill="#94a3b8" fontSize="14">ratio √2 : 1</text>
        </svg>
      </div>

      <p>
        This property makes the <InlineMath>\\sqrt{2}</InlineMath> rectangle the basis
        for the ISO paper sizes (A0, A1, A2, ..., A4, etc.). Each size is exactly half
        of the previous one, and all have the same proportions.
      </p>

      <h3>Historical Significance</h3>

      <Theorem title="Density of Irrationals">
        <p>
          Between any two rational numbers, there exist infinitely many irrational
          numbers. In fact, there are "more" irrational numbers than rational ones—
          the irrationals are <em>uncountable</em> while the rationals are
          <em>countable</em>.
        </p>
      </Theorem>

      <p>
        The discovery of <InlineMath>\\sqrt{2}</InlineMath> opened the door to an
        entirely new realm of numbers. The Pythagoreans had discovered that the
        rational numbers, despite their infinite number, have "gaps"—and these gaps
        are filled by the irrationals.
      </p>

      <Callout type="info">
        <strong>The Path Forward:</strong> The Greeks responded to this crisis by
        developing a purely geometric theory of proportion (found in Book V of Euclid's
        Elements) that could handle irrational ratios. This theory, attributed to
        Eudoxus, anticipated the modern definition of real numbers by over 2000 years.
      </Callout>

      <SectionQuiz
        sectionId={4}
        questions={quizMap[4] || []}
        title="The Discovery of √2 Quiz"
      />
    </LessonLayout>
  );
}
