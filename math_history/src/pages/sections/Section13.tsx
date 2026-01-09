import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Diophantine Equations</h2>

      <p>
        <strong>Diophantine equations</strong> are polynomial equations where
        we seek <em>integer</em> solutions. Named after <strong>Diophantus
        of Alexandria</strong> (c. 200-284 CE), who wrote the influential
        <em> Arithmetica</em>, these equations have fascinated mathematicians
        for millennia.
      </p>

      <h3>Linear Diophantine Equations</h3>

      <p>
        The simplest Diophantine equations are linear equations in two variables:
      </p>

      <Definition title="Linear Diophantine Equation">
        <p>
          A <strong>linear Diophantine equation</strong> has the form:
        </p>
        <MathBlock>
          {`ax + by = c`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>a, b, c</InlineMath> are given integers and we
          seek integer solutions <InlineMath>x, y</InlineMath>.
        </p>
      </Definition>

      <p>
        The key to solving these equations lies in the Euclidean algorithm
        and Bézout's identity.
      </p>

      <Theorem title="Existence of Solutions">
        <p>
          The equation <InlineMath>ax + by = c</InlineMath> has an integer
          solution if and only if <InlineMath>\gcd(a, b)</InlineMath> divides{' '}
          <InlineMath>c</InlineMath>.
        </p>
      </Theorem>

      <Example title="Solving 15x + 6y = 9">
        <p>
          First, check if solutions exist: <InlineMath>\gcd(15, 6) = 3</InlineMath>,
          and 3 divides 9. Solutions exist!
        </p>
        <p className="mt-2">
          Using the extended Euclidean algorithm to find <InlineMath>15x_0 + 6y_0 = 3</InlineMath>:
        </p>
        <MathBlock>
          {`\\begin{align}
15 &= 6 \\times 2 + 3 \\\\
3 &= 15 - 6 \\times 2 \\\\
3 &= 15 \\times 1 + 6 \\times (-2)
\\end{align}`}
        </MathBlock>
        <p className="mt-2">
          Multiply by 3: <InlineMath>15 \times 3 + 6 \times (-6) = 9</InlineMath>
        </p>
        <p className="mt-2">
          One solution: <InlineMath>(x, y) = (3, -6)</InlineMath>
        </p>
      </Example>

      <Theorem title="General Solution">
        <p>
          If <InlineMath>(x_0, y_0)</InlineMath> is one solution to{' '}
          <InlineMath>ax + by = c</InlineMath>, then all solutions are:
        </p>
        <MathBlock>
          {`x = x_0 + \\frac{b}{d}t, \\quad y = y_0 - \\frac{a}{d}t`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>d = \gcd(a, b)</InlineMath> and{' '}
          <InlineMath>t</InlineMath> is any integer.
        </p>
      </Theorem>

      <Example title="All Solutions to 15x + 6y = 9">
        <p>
          With <InlineMath>(x_0, y_0) = (3, -6)</InlineMath> and{' '}
          <InlineMath>d = 3</InlineMath>:
        </p>
        <MathBlock>
          {`x = 3 + 2t, \\quad y = -6 - 5t`}
        </MathBlock>
        <p className="mt-2">Some solutions:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>t = 0</InlineMath>: <InlineMath>(3, -6)</InlineMath></li>
          <li><InlineMath>t = 1</InlineMath>: <InlineMath>(5, -11)</InlineMath></li>
          <li><InlineMath>t = -1</InlineMath>: <InlineMath>(1, -1)</InlineMath></li>
          <li><InlineMath>t = 3</InlineMath>: <InlineMath>(9, -21)</InlineMath></li>
        </ul>
      </Example>

      <h3>Pythagorean Triples Revisited</h3>

      <p>
        The Pythagorean equation <InlineMath>x^2 + y^2 = z^2</InlineMath> is
        a quadratic Diophantine equation with a complete solution:
      </p>

      <Theorem title="Pythagorean Triples">
        <p>
          All primitive Pythagorean triples (where <InlineMath>\gcd(x, y, z) = 1</InlineMath>)
          are given by:
        </p>
        <MathBlock>
          {`x = m^2 - n^2, \\quad y = 2mn, \\quad z = m^2 + n^2`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>m &gt; n &gt; 0</InlineMath>,{' '}
          <InlineMath>\gcd(m, n) = 1</InlineMath>, and{' '}
          <InlineMath>m - n</InlineMath> is odd.
        </p>
      </Theorem>

      {/* Visualization of Pythagorean triples */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Generating Pythagorean Triples
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="p-2 text-left text-primary-400">m</th>
                <th className="p-2 text-left text-primary-400">n</th>
                <th className="p-2 text-left text-primary-400">x = m²-n²</th>
                <th className="p-2 text-left text-primary-400">y = 2mn</th>
                <th className="p-2 text-left text-primary-400">z = m²+n²</th>
                <th className="p-2 text-left text-primary-400">Triple</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-700">
                <td className="p-2">2</td>
                <td className="p-2">1</td>
                <td className="p-2">3</td>
                <td className="p-2">4</td>
                <td className="p-2">5</td>
                <td className="p-2 font-mono">(3, 4, 5)</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">3</td>
                <td className="p-2">2</td>
                <td className="p-2">5</td>
                <td className="p-2">12</td>
                <td className="p-2">13</td>
                <td className="p-2 font-mono">(5, 12, 13)</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">4</td>
                <td className="p-2">1</td>
                <td className="p-2">15</td>
                <td className="p-2">8</td>
                <td className="p-2">17</td>
                <td className="p-2 font-mono">(8, 15, 17)</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">4</td>
                <td className="p-2">3</td>
                <td className="p-2">7</td>
                <td className="p-2">24</td>
                <td className="p-2">25</td>
                <td className="p-2 font-mono">(7, 24, 25)</td>
              </tr>
              <tr>
                <td className="p-2">5</td>
                <td className="p-2">2</td>
                <td className="p-2">21</td>
                <td className="p-2">20</td>
                <td className="p-2">29</td>
                <td className="p-2 font-mono">(20, 21, 29)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Fermat's Method of Descent</h3>

      <p>
        <strong>Pierre de Fermat</strong> (1607-1665) developed a powerful
        technique called <em>infinite descent</em> to prove that certain
        Diophantine equations have no solutions.
      </p>

      <Theorem title="Method of Infinite Descent">
        <p>
          To prove an equation has no positive integer solutions:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Assume a smallest positive solution exists</li>
          <li>Derive a contradiction by constructing a smaller solution</li>
          <li>Conclude no solution can exist</li>
        </ol>
      </Theorem>

      <Example title="No Solution to x⁴ + y⁴ = z²">
        <p>
          Fermat used descent to prove this equation has no positive integer
          solutions. This was an important partial result toward his famous
          Last Theorem.
        </p>
        <p className="mt-2">
          The proof shows that if <InlineMath>(x, y, z)</InlineMath> is a
          solution, we can construct another solution with a smaller value
          of <InlineMath>z</InlineMath>—contradiction!
        </p>
      </Example>

      <h3>Pell's Equation</h3>

      <p>
        One of the most important Diophantine equations is:
      </p>

      <Definition title="Pell's Equation">
        <p>
          <strong>Pell's equation</strong> is:
        </p>
        <MathBlock>
          {`x^2 - Ny^2 = 1`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>N</InlineMath> is a positive integer that is not
          a perfect square.
        </p>
      </Definition>

      <Callout type="note">
        <strong>Misnomer:</strong> Pell's equation should really be called
        "Fermat's equation" or "Brahmagupta's equation." Euler mistakenly
        attributed it to John Pell, who had little to do with it. Indian
        mathematicians had studied it centuries before!
      </Callout>

      <Example title="Pell's Equation for N = 2">
        <p>
          The equation <InlineMath>x^2 - 2y^2 = 1</InlineMath> has solutions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>(1, 0)</InlineMath> — trivial</li>
          <li><InlineMath>(3, 2)</InlineMath> — since <InlineMath>9 - 8 = 1</InlineMath></li>
          <li><InlineMath>(17, 12)</InlineMath> — since <InlineMath>289 - 288 = 1</InlineMath></li>
          <li><InlineMath>(99, 70)</InlineMath> — since <InlineMath>9801 - 9800 = 1</InlineMath></li>
        </ul>
        <p className="mt-2">
          These approximate <InlineMath>\sqrt{2}</InlineMath>:{' '}
          <InlineMath>3/2 = 1.5</InlineMath>,{' '}
          <InlineMath>17/12 \approx 1.417</InlineMath>,{' '}
          <InlineMath>99/70 \approx 1.4143</InlineMath> ...
        </p>
      </Example>

      <h3>Fermat's Last Theorem</h3>

      <p>
        The most famous Diophantine equation is Fermat's Last Theorem:
      </p>

      <Theorem title="Fermat's Last Theorem">
        <p>
          The equation <InlineMath>x^n + y^n = z^n</InlineMath> has no
          positive integer solutions for <InlineMath>n \geq 3</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>350 Years to Proof:</strong> Fermat claimed around 1637 to
        have "a truly marvelous proof" but the margin was "too narrow to
        contain it." The theorem remained unproven until 1995, when{' '}
        <strong>Andrew Wiles</strong> finally proved it using sophisticated
        modern techniques involving elliptic curves and modular forms—
        mathematics Fermat could never have imagined.
      </Callout>

      <svg viewBox="0 0 500 120" className="w-full h-auto my-6">
        {/* Timeline */}
        <line x1="50" y1="60" x2="450" y2="60" stroke="#4b5563" strokeWidth="2"/>
        
        {/* 1637 - Fermat's claim */}
        <circle cx="80" cy="60" r="8" fill="#4f46e5"/>
        <text x="80" y="40" fill="#c7d2fe" fontSize="11" textAnchor="middle">1637</text>
        <text x="80" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">Fermat's</text>
        <text x="80" y="97" fill="#94a3b8" fontSize="10" textAnchor="middle">claim</text>
        
        {/* 1770 - Euler n=3 */}
        <circle cx="160" cy="60" r="6" fill="#10b981"/>
        <text x="160" y="40" fill="#a7f3d0" fontSize="11" textAnchor="middle">1770</text>
        <text x="160" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">Euler: n=3</text>
        
        {/* 1825 - n=5 */}
        <circle cx="220" cy="60" r="6" fill="#10b981"/>
        <text x="220" y="40" fill="#a7f3d0" fontSize="11" textAnchor="middle">1825</text>
        <text x="220" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">n=5</text>
        
        {/* 1839 - n=7 */}
        <circle cx="270" cy="60" r="6" fill="#10b981"/>
        <text x="270" y="40" fill="#a7f3d0" fontSize="11" textAnchor="middle">1839</text>
        <text x="270" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">n=7</text>
        
        {/* 1850s - Kummer */}
        <circle cx="320" cy="60" r="6" fill="#f59e0b"/>
        <text x="320" y="40" fill="#fcd34d" fontSize="11" textAnchor="middle">1850s</text>
        <text x="320" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">Kummer:</text>
        <text x="320" y="97" fill="#94a3b8" fontSize="10" textAnchor="middle">many n</text>
        
        {/* 1995 - Wiles */}
        <circle cx="420" cy="60" r="10" fill="#ef4444"/>
        <text x="420" y="35" fill="#fca5a5" fontSize="12" textAnchor="middle" fontWeight="bold">1995</text>
        <text x="420" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle">Wiles:</text>
        <text x="420" y="97" fill="#94a3b8" fontSize="10" textAnchor="middle">all n ≥ 3</text>
      </svg>

      <SectionQuiz
        sectionId={13}
        questions={quizMap[13] || []}
        title="Diophantine Equations Quiz"
      />
    </LessonLayout>
  );
}
