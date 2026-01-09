import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Pell's Equation</h2>

      <p>
        <strong>Pell's equation</strong> is one of the oldest and most important
        Diophantine equations. Despite its name, it was studied extensively by
        Indian mathematicians—particularly Brahmagupta and Bhāskara II—centuries
        before the English mathematician John Pell, to whom it was mistakenly
        attributed by Euler.
      </p>

      <h3>The Equation</h3>

      <Definition title="Pell's Equation">
        <p>
          <strong>Pell's equation</strong> is:
        </p>
        <MathBlock>
          {`x^2 - Ny^2 = 1`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>N</InlineMath> is a positive integer that is{' '}
          <em>not</em> a perfect square, and we seek positive integer solutions{' '}
          <InlineMath>(x, y)</InlineMath>.
        </p>
      </Definition>

      <p>
        The equation always has the trivial solution <InlineMath>(x, y) = (1, 0)</InlineMath>.
        The interesting question is: are there nontrivial solutions, and if so,
        how do we find them?
      </p>

      <Theorem title="Existence of Solutions">
        <p>
          For any non-square positive integer <InlineMath>N</InlineMath>, Pell's
          equation <InlineMath>x^2 - Ny^2 = 1</InlineMath> has infinitely many
          positive integer solutions.
        </p>
      </Theorem>

      <h3>Small Cases</h3>

      <Example title="Solutions for Small N">
        <div className="overflow-x-auto">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="p-2 text-left text-primary-400">N</th>
                <th className="p-2 text-left text-primary-400">Smallest (x, y)</th>
                <th className="p-2 text-left text-primary-400">Verification</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-700">
                <td className="p-2">2</td>
                <td className="p-2">(3, 2)</td>
                <td className="p-2"><InlineMath>9 - 2(4) = 9 - 8 = 1</InlineMath> ✓</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">3</td>
                <td className="p-2">(2, 1)</td>
                <td className="p-2"><InlineMath>4 - 3(1) = 1</InlineMath> ✓</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">5</td>
                <td className="p-2">(9, 4)</td>
                <td className="p-2"><InlineMath>81 - 5(16) = 81 - 80 = 1</InlineMath> ✓</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">7</td>
                <td className="p-2">(8, 3)</td>
                <td className="p-2"><InlineMath>64 - 7(9) = 64 - 63 = 1</InlineMath> ✓</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">13</td>
                <td className="p-2">(649, 180)</td>
                <td className="p-2">Large solutions can occur!</td>
              </tr>
              <tr>
                <td className="p-2">61</td>
                <td className="p-2">(1766319049, 226153980)</td>
                <td className="p-2">Even for modest N!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <Callout type="note">
        <strong>Surprising Difficulty:</strong> Notice that <InlineMath>N = 61</InlineMath>
        requires a solution with 10-digit numbers! The size of the smallest solution
        can be wildly unpredictable from the size of <InlineMath>N</InlineMath>.
      </Callout>

      <h3>Connection to Square Roots</h3>

      <p>
        Solutions to Pell's equation give excellent rational approximations to{' '}
        <InlineMath>\sqrt{'{N}'}</InlineMath>:
      </p>

      <Theorem title="Approximation Property">
        <p>
          If <InlineMath>(x, y)</InlineMath> solves <InlineMath>x^2 - Ny^2 = 1</InlineMath>,
          then:
        </p>
        <MathBlock>
          {`\\frac{x}{y} \\approx \\sqrt{N}`}
        </MathBlock>
        <p className="mt-2">
          More precisely: <InlineMath>|x/y - \sqrt{'{N}'}| {'<'} 1/(2y^2)</InlineMath>
        </p>
      </Theorem>

      <Example title="Approximating √2">
        <p>Solutions to <InlineMath>x^2 - 2y^2 = 1</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>(3, 2)</InlineMath>: <InlineMath>3/2 = 1.5</InlineMath></li>
          <li><InlineMath>(17, 12)</InlineMath>: <InlineMath>17/12 \approx 1.41\overline{6}</InlineMath></li>
          <li><InlineMath>(99, 70)</InlineMath>: <InlineMath>99/70 \approx 1.41428...</InlineMath></li>
          <li><InlineMath>(577, 408)</InlineMath>: <InlineMath>577/408 \approx 1.414215...</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Compare: <InlineMath>\sqrt{'{2}'} = 1.41421356...</InlineMath>
        </p>
      </Example>

      <h3>Brahmagupta's Method</h3>

      <p>
        <strong>Brahmagupta</strong> (628 CE) discovered a remarkable identity
        that generates new solutions from old ones:
      </p>

      <Theorem title="Brahmagupta-Fibonacci Identity">
        <p>
          If <InlineMath>(x_1, y_1)</InlineMath> and <InlineMath>(x_2, y_2)</InlineMath>
          both satisfy <InlineMath>x^2 - Ny^2 = 1</InlineMath>, then so does:
        </p>
        <MathBlock>
          {`(x_1 x_2 + N y_1 y_2, \\, x_1 y_2 + x_2 y_1)`}
        </MathBlock>
      </Theorem>

      <Example title="Generating Solutions for N = 2">
        <p>
          Starting with <InlineMath>(x_1, y_1) = (3, 2)</InlineMath>:
        </p>
        <p className="mt-2">
          Compose it with itself:
        </p>
        <MathBlock>
          {`(3 \\cdot 3 + 2 \\cdot 2 \\cdot 2, \\, 3 \\cdot 2 + 3 \\cdot 2) = (9 + 8, \\, 6 + 6) = (17, 12)`}
        </MathBlock>
        <p className="mt-2">
          Verify: <InlineMath>17^2 - 2 \cdot 12^2 = 289 - 288 = 1</InlineMath> ✓
        </p>
        <p className="mt-2">
          Compose <InlineMath>(17, 12)</InlineMath> with <InlineMath>(3, 2)</InlineMath>:
        </p>
        <MathBlock>
          {`(17 \\cdot 3 + 2 \\cdot 12 \\cdot 2, \\, 17 \\cdot 2 + 3 \\cdot 12) = (51 + 48, \\, 34 + 36) = (99, 70)`}
        </MathBlock>
      </Example>

      {/* Visualization of solution generation */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Generating Solutions to x² - 2y² = 1
        </h4>
        <svg viewBox="0 0 500 150" className="w-full h-auto">
          {/* Solution nodes */}
          <g>
            {/* (1,0) */}
            <circle cx="50" cy="75" r="20" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
            <text x="50" y="80" fill="#c7d2fe" fontSize="11" textAnchor="middle">(1,0)</text>
            <text x="50" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">trivial</text>
            
            {/* (3,2) */}
            <circle cx="140" cy="75" r="20" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
            <text x="140" y="80" fill="#a7f3d0" fontSize="11" textAnchor="middle">(3,2)</text>
            <text x="140" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">fundamental</text>
            
            {/* (17,12) */}
            <circle cx="240" cy="75" r="20" fill="#f59e0b" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2"/>
            <text x="240" y="80" fill="#fcd34d" fontSize="10" textAnchor="middle">(17,12)</text>
            
            {/* (99,70) */}
            <circle cx="340" cy="75" r="20" fill="#ef4444" fillOpacity="0.3" stroke="#f87171" strokeWidth="2"/>
            <text x="340" y="80" fill="#fca5a5" fontSize="9" textAnchor="middle">(99,70)</text>
            
            {/* (577,408) */}
            <circle cx="440" cy="75" r="20" fill="#8b5cf6" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="2"/>
            <text x="440" y="78" fill="#ddd6fe" fontSize="8" textAnchor="middle">(577,</text>
            <text x="440" y="88" fill="#ddd6fe" fontSize="8" textAnchor="middle">408)</text>
          </g>
          
          {/* Arrows */}
          <path d="M 75 75 L 115 75" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <path d="M 165 75 L 215 75" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <path d="M 265 75 L 315 75" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <path d="M 365 75 L 415 75" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          
          {/* Curved arrow from (3,2) to composition */}
          <path d="M 140 50 Q 190 20 240 50" stroke="#34d399" strokeWidth="1" fill="none" strokeDasharray="3" markerEnd="url(#arr2)"/>
          <text x="190" y="15" fill="#34d399" fontSize="8" textAnchor="middle">compose</text>
          
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6b7280"/>
            </marker>
            <marker id="arr2" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
              <polygon points="0 0, 6 2.5, 0 5" fill="#34d399"/>
            </marker>
          </defs>
        </svg>
      </div>

      <h3>The Chakravala Method</h3>

      <p>
        <strong>Bhāskara II</strong> (12th century) perfected the <em>chakravala</em>
        ("cyclic") method—an elegant algorithm for finding the fundamental solution:
      </p>

      <Definition title="Chakravala Method">
        <p>
          The chakravala method iteratively transforms near-solutions until reaching
          an exact solution. It is essentially an optimized form of what we now
          call the continued fraction algorithm.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Bhāskara's Achievement:</strong> Using chakravala, Bhāskara solved
        <InlineMath>x^2 - 61y^2 = 1</InlineMath>, finding the solution{' '}
        <InlineMath>(1766319049, 226153980)</InlineMath>. This was not matched
        in Europe until Fermat and Wallis in the 1650s—500 years later!
      </Callout>

      <h3>Continued Fractions</h3>

      <p>
        The modern approach uses <strong>continued fractions</strong>:
      </p>

      <Example title="Continued Fraction for √2">
        <MathBlock>
          {`\\sqrt{2} = 1 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\cfrac{1}{\\ddots}}}}`}
        </MathBlock>
        <p className="mt-2">
          The convergents (partial evaluations) are: <InlineMath>1, 3/2, 7/5, 17/12, 41/29, ...</InlineMath>
        </p>
        <p className="mt-2">
          Every other convergent gives a solution to <InlineMath>x^2 - 2y^2 = \pm 1</InlineMath>!
        </p>
      </Example>

      <Theorem title="Continued Fractions and Pell">
        <p>
          The solutions to <InlineMath>x^2 - Ny^2 = 1</InlineMath> come from
          the convergents of the continued fraction expansion of{' '}
          <InlineMath>\sqrt{'{N}'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Approximating Irrationals</h4>
          <p className="text-sm text-dark-300">
            Pell solutions give the best rational approximations to{' '}
            <InlineMath>\sqrt{'{N}'}</InlineMath>. This was important before
            calculators for computing square roots.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Cryptography</h4>
          <p className="text-sm text-dark-300">
            Pell's equation appears in some cryptographic protocols and in
            the analysis of certain algebraic structures used in cryptography.
          </p>
        </div>
      </div>

      <SectionQuiz
        sectionId={20}
        questions={quizMap[20] || []}
        title="Pell's Equation Quiz"
      />
    </LessonLayout>
  );
}
