import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Al-Khwarizmi and Algebra</h2>

      <p>
        The word <strong>"algebra"</strong> comes from the Arabic word{' '}
        <em>al-jabr</em>, meaning "restoring." It entered mathematics through
        the influential book <em>Al-jabr w'al muqabala</em> (Science of Restoring
        and Opposition) written by <strong>al-Khwarizmi</strong> in 830 CE.
      </p>

      <Callout type="info">
        <strong>Etymology:</strong> In the context of solving equations,
        "restoring" (<em>al-jabr</em>) meant adding equal terms to both sides,
        while "opposition" (<em>al-muqabala</em>) meant setting the two sides equal.
        For many centuries, <em>al-jabr</em> also referred to the surgical resetting
        of broken bones!
      </Callout>

      <h3>The Birth of Algebra as a Discipline</h3>

      <p>
        Al-Khwarizmi's own name has given us another mathematical word:
        <strong> algorithm</strong>. While his algebra went no further than solving
        quadratic equations—already understood by the Babylonians and formalized by
        Brahmagupta—his work had a lasting impact because it recognized algebra as
        a <em>separate field</em> with its own methods.
      </p>

      <Definition title="Al-Khwarizmi's Contribution">
        <p>
          Al-Khwarizmi's book was the first to treat algebra as an independent
          discipline, separate from geometry and arithmetic. He systematically
          classified and solved all types of linear and quadratic equations,
          presenting general methods rather than specific numerical examples.
        </p>
      </Definition>

      <h3>Why Al-Khwarizmi, Not Brahmagupta?</h3>

      <p>
        Interestingly, <strong>Brahmagupta</strong>'s work from 628 CE was more
        advanced than al-Khwarizmi's in several respects: better notation,
        acceptance of negative numbers, and deeper treatment of Diophantine equations.
        Yet it was al-Khwarizmi's simpler approach that became the foundation of
        Western algebra.
      </p>

      <Example title="The Convergence of Traditions">
        <p>Arabic mathematics developed at the right time and place to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Absorb the <strong>geometry</strong> of the Greeks from the West</li>
          <li>Incorporate the <strong>algebra</strong> and numerals of India from the East</li>
          <li>Recognize algebra as a <em>distinct field</em> with its own methods</li>
        </ul>
        <p className="mt-2 text-dark-400">
          The concept of algebra as the theory of polynomial equations proved its
          worth by holding firm for 1000 years.
        </p>
      </Example>

      <h3>Solving Quadratic Equations</h3>

      <p>
        Al-Khwarizmi's geometric approach to solving quadratics was a direct
        embodiment of algebra. His famous method of <strong>"completing the square"</strong>
        used geometry to derive algebraic solutions.
      </p>

      <Example title="Al-Khwarizmi's Method: Solving x² + 10x = 39">
        <p>To solve <InlineMath>x^2 + 10x = 39</InlineMath>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>Represent <InlineMath>x^2</InlineMath> as a square of side <InlineMath>x</InlineMath></li>
          <li>Represent <InlineMath>10x</InlineMath> as two rectangles of size <InlineMath>5 \times x</InlineMath></li>
          <li>The extra square of area 25 "completes" the larger square of side <InlineMath>x + 5</InlineMath></li>
          <li>The big square has area <InlineMath>25 + 39 = 64</InlineMath></li>
          <li>Therefore <InlineMath>x + 5 = 8</InlineMath>, giving <InlineMath>x = 3</InlineMath></li>
        </ol>
      </Example>

      {/* Visualization of completing the square */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Completing the Square: x² + 10x = 39
        </h4>
        <svg viewBox="0 0 450 220" className="w-full h-auto">
          {/* Main square x² */}
          <rect x="120" y="20" width="80" height="80" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
          <text x="160" y="65" fill="#c7d2fe" fontSize="14" textAnchor="middle">x²</text>
          
          {/* Right rectangle 5x */}
          <rect x="200" y="20" width="40" height="80" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
          <text x="220" y="65" fill="#a7f3d0" fontSize="12" textAnchor="middle">5x</text>
          
          {/* Bottom rectangle 5x */}
          <rect x="120" y="100" width="80" height="40" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
          <text x="160" y="125" fill="#a7f3d0" fontSize="12" textAnchor="middle">5x</text>
          
          {/* Corner square 25 */}
          <rect x="200" y="100" width="40" height="40" fill="#f59e0b" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2"/>
          <text x="220" y="125" fill="#fcd34d" fontSize="11" textAnchor="middle">25</text>
          
          {/* Labels */}
          <text x="160" y="10" fill="#94a3b8" fontSize="10" textAnchor="middle">x</text>
          <text x="220" y="10" fill="#94a3b8" fontSize="10" textAnchor="middle">5</text>
          <text x="110" y="65" fill="#94a3b8" fontSize="10" textAnchor="end">x</text>
          <text x="110" y="125" fill="#94a3b8" fontSize="10" textAnchor="end">5</text>
          
          {/* Bracket showing (x+5)² */}
          <path d="M 120 155 L 120 165 L 240 165 L 240 155" stroke="#6b7280" strokeWidth="1" fill="none"/>
          <text x="180" y="180" fill="#94a3b8" fontSize="11" textAnchor="middle">(x + 5)² = x² + 10x + 25</text>
          
          {/* Equation */}
          <text x="180" y="200" fill="#818cf8" fontSize="11" textAnchor="middle">= 39 + 25 = 64</text>
          <text x="180" y="215" fill="#34d399" fontSize="11" textAnchor="middle">So x + 5 = 8, x = 3</text>
          
          {/* Arrow and result */}
          <path d="M 260 80 L 300 80" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
          <text x="340" y="75" fill="#fbbf24" fontSize="12" textAnchor="middle">Area = 64</text>
          <text x="340" y="92" fill="#94a3b8" fontSize="10" textAnchor="middle">Side = 8</text>
          
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      <h3>Case Distinctions</h3>

      <p>
        Because al-Khwarizmi and Euclid did not admit negative lengths or coefficients,
        they had to consider multiple cases of what we now write as one general equation.
      </p>

      <Theorem title="The Three Forms of Quadratic Equations">
        <p>
          Without negative coefficients, the "general" quadratic equation splits into
          three distinct cases:
        </p>
        <MathBlock>
          {`\\begin{aligned}
x^2 + ax &= b \\\\
x^2 &= ax + b \\\\
x^2 + b &= ax
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          Each required its own geometric construction and solution method.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>The Missing Solution:</strong> Al-Khwarizmi's geometric method for{' '}
        <InlineMath>x^2 + 10x = 39</InlineMath> gives only <InlineMath>x = 3</InlineMath>.
        The other root, <InlineMath>x = -13</InlineMath>, doesn't appear because
        geometry admits only one square with area 64. Negative solutions would have
        to wait for later developments.
      </Callout>

      <h3>Linear Equations and Elimination</h3>

      <p>
        While al-Khwarizmi focused on quadratics, <strong>Chinese mathematicians</strong>
        had already discovered methods for solving systems of linear equations during
        the Han dynasty (206 BCE - 220 CE).
      </p>

      <Definition title="Gaussian Elimination">
        <p>
          The method now called "Gaussian elimination" was discovered in China
          nearly 2000 years before Gauss. It appears in the <em>Jiuzhang suanshu</em>
          (Nine Chapters of Mathematical Art), systematically eliminating terms
          until a triangular system is obtained.
        </p>
        <MathBlock>
          {`\\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\
a_{22}'x_2 + \\cdots + a_{2n}'x_n &= b_2' \\\\
&\\vdots \\\\
a_{nn}'x_n &= b_n'
\\end{aligned}`}
        </MathBlock>
      </Definition>

      <Example title="The Chinese Counting Board">
        <p>
          Chinese mathematicians used a device called the <strong>counting board</strong>
          to hold arrays of coefficients, facilitating manipulations similar to modern
          matrix operations. Around the 12th century, they extended elimination to
          systems of polynomial equations.
        </p>
        <p className="mt-2 text-dark-400">
          Zhu Shijie's <em>Jade Mirror of Four Unknowns</em> (1303) extended
          these methods to four variables.
        </p>
      </Example>

      <h3>The Quadratic Formula</h3>

      <p>
        Brahmagupta (628 CE) gave an explicit general formula for solving quadratic
        equations, expressed in words:
      </p>

      <Theorem title="Brahmagupta's Quadratic Formula">
        <p>
          For the equation <InlineMath>ax^2 + bx = c</InlineMath>:
        </p>
        <MathBlock>
          {`x = \\frac{\\sqrt{4ac + b^2} - b}{2a}`}
        </MathBlock>
        <p className="mt-2">
          This is equivalent to our modern formula{' '}
          <InlineMath>x = \frac{'{-b \\pm \\sqrt{b^2 + 4ac}}'}{'{2a}'}</InlineMath>{' '}
          (with the equation written as <InlineMath>ax^2 + bx - c = 0</InlineMath>).
        </p>
      </Theorem>

      <h3>Legacy</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Words We Inherited</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li><strong>Algebra</strong> - from <em>al-jabr</em> (restoring)</li>
            <li><strong>Algorithm</strong> - from <em>al-Khwarizmi</em>'s name</li>
            <li><strong>Zero</strong> - from Arabic <em>sifr</em> (empty)</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Mathematical Impact</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Algebra established as its own field</li>
            <li>Systematic classification of equations</li>
            <li>Foundation for Renaissance mathematics</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Looking Ahead:</strong> The concept of algebra as the theory of
        polynomial equations would prove its worth for 1000 years. Only in the
        19th century did algebra grow beyond these bounds—but first came the
        dramatic solutions of cubic and quartic equations in Renaissance Italy.
      </Callout>

      <SectionQuiz
        sectionId={21}
        questions={quizMap[21] || []}
        title="Al-Khwarizmi and Algebra Quiz"
      />
    </LessonLayout>
  );
}
