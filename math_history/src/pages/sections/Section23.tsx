import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>The Quartic Equation</h2>

      <p>
        Hot on the heels of the cubic came the solution of the{' '}
        <strong>quartic</strong> (fourth-degree) equation, discovered by{' '}
        <strong>Lodovico Ferrari</strong>, Cardano's brilliant young student.
        Ferrari was just 18 years old when he began working with Cardano, and
        his solution was published in Cardano's <em>Ars Magna</em> (1545).
      </p>

      <Callout type="info">
        <strong>A Bonus to the Cubic:</strong> Ferrari's solution shows that
        solving quartics can be reduced to solving a cubic equation. The quartic
        was thus an "impressive bonus" to the earlier breakthrough.
      </Callout>

      <h3>Ferrari's Method</h3>

      <p>
        Like the cubic, the general quartic can first be simplified by a linear
        transformation.
      </p>

      <Definition title="The Depressed Quartic">
        <p>
          Starting with <InlineMath>x^4 + ax^3 + bx^2 + cx + d = 0</InlineMath>,
          the substitution <InlineMath>x = y - a/4</InlineMath> eliminates the
          cubic term, leaving:
        </p>
        <MathBlock>
          {`x^4 + px^2 + qx + r = 0`}
        </MathBlock>
      </Definition>

      <p>
        Ferrari's clever idea was to rewrite this equation by completing a square.
      </p>

      <Theorem title="Ferrari's Transformation">
        <p>
          Rewrite the depressed quartic as:
        </p>
        <MathBlock>
          {`(x^2 + p)^2 = px^2 - qx + p^2 - r`}
        </MathBlock>
        <p className="mt-2">
          For any value of <InlineMath>y</InlineMath>, we can write:
        </p>
        <MathBlock>
          {`(x^2 + p + y)^2 = (p + 2y)x^2 - qx + (p^2 - r + 2py + y^2)`}
        </MathBlock>
      </Theorem>

      <h3>The Key Insight</h3>

      <p>
        The right-hand side is a quadratic in <InlineMath>x</InlineMath>:
        <InlineMath>Ax^2 + Bx + C</InlineMath>. A quadratic is a perfect square
        if and only if its discriminant is zero: <InlineMath>B^2 - 4AC = 0</InlineMath>.
      </p>

      <Definition title="The Resolvent Cubic">
        <p>
          Setting <InlineMath>B^2 - 4AC = 0</InlineMath> with:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>A = p + 2y</InlineMath></li>
          <li><InlineMath>B = -q</InlineMath></li>
          <li><InlineMath>C = p^2 - r + 2py + y^2</InlineMath></li>
        </ul>
        <p className="mt-2">
          gives a <strong>cubic equation in y</strong>—called the <em>resolvent
          cubic</em>. We already know how to solve cubics!
        </p>
      </Definition>

      {/* Visualization of Ferrari's method */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Ferrari's Method: Quartic to Cubic to Quadratic
        </h4>
        <svg viewBox="0 0 500 160" className="w-full h-auto">
          {/* Box 1: Quartic */}
          <rect x="20" y="40" width="100" height="60" rx="5" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
          <text x="70" y="60" fill="#c7d2fe" fontSize="11" textAnchor="middle" fontWeight="bold">Quartic</text>
          <text x="70" y="78" fill="#a5b4fc" fontSize="9" textAnchor="middle">degree 4</text>
          <text x="70" y="92" fill="#818cf8" fontSize="8" textAnchor="middle">x⁴ + px² + qx + r = 0</text>
          
          {/* Arrow 1 */}
          <path d="M 120 70 L 160 70" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
          <text x="140" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">resolvent</text>
          
          {/* Box 2: Cubic */}
          <rect x="160" y="40" width="100" height="60" rx="5" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
          <text x="210" y="60" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">Cubic</text>
          <text x="210" y="78" fill="#6ee7b7" fontSize="9" textAnchor="middle">degree 3</text>
          <text x="210" y="92" fill="#34d399" fontSize="8" textAnchor="middle">B² - 4AC = 0</text>
          
          {/* Arrow 2 */}
          <path d="M 260 70 L 300 70" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
          <text x="280" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">Cardano</text>
          
          {/* Box 3: Quadratic (in u³) */}
          <rect x="300" y="40" width="90" height="60" rx="5" fill="#f59e0b" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2"/>
          <text x="345" y="60" fill="#fcd34d" fontSize="11" textAnchor="middle" fontWeight="bold">Quadratic</text>
          <text x="345" y="78" fill="#fcd34d" fontSize="9" textAnchor="middle">in u³</text>
          
          {/* Arrow 3 */}
          <path d="M 390 70 L 420 70" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Box 4: Solution */}
          <rect x="420" y="40" width="70" height="60" rx="5" fill="#ef4444" fillOpacity="0.3" stroke="#f87171" strokeWidth="2"/>
          <text x="455" y="65" fill="#fca5a5" fontSize="11" textAnchor="middle" fontWeight="bold">Solution</text>
          <text x="455" y="82" fill="#f87171" fontSize="9" textAnchor="middle">radicals</text>
          
          {/* Bottom note */}
          <text x="250" y="130" fill="#94a3b8" fontSize="10" textAnchor="middle">
            Once y is found, the quartic factors into two quadratics
          </text>
          <text x="250" y="145" fill="#64748b" fontSize="9" textAnchor="middle">
            (x² + p + y)² = (perfect square in x)
          </text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      <Example title="Completing Ferrari's Solution">
        <p>
          Once we find <InlineMath>y</InlineMath> from the resolvent cubic:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            The right-hand side becomes a perfect square:{' '}
            <InlineMath>(\alpha x + \beta)^2</InlineMath>
          </li>
          <li>
            Take square roots of both sides:
            <MathBlock>
              {`x^2 + p + y = \\pm(\\alpha x + \\beta)`}
            </MathBlock>
          </li>
          <li>
            Solve the two resulting <strong>quadratic equations</strong>
          </li>
        </ol>
        <p className="mt-2 text-dark-400">
          The final formula uses only square and cube roots of rational functions
          of the coefficients.
        </p>
      </Example>

      <h3>Solution by Radicals</h3>

      <Definition title="Solution by Radicals">
        <p>
          A polynomial equation is <strong>solvable by radicals</strong> if its
          roots can be expressed using only:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The coefficients of the equation</li>
          <li>The four arithmetic operations (+, -, ×, ÷)</li>
          <li>Taking <InlineMath>n</InlineMath>th roots</li>
        </ul>
        <p className="mt-2">
          Degrees 1, 2, 3, and 4 are all solvable by radicals.
        </p>
      </Definition>

      <Callout type="note">
        <strong>The Pattern:</strong> Each degree reduces to the previous one:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Quartic → Cubic (Ferrari)</li>
          <li>Cubic → Quadratic (Cardano)</li>
          <li>Quadratic → Linear (Brahmagupta)</li>
        </ul>
        This raised hopes that the pattern might continue forever...
      </Callout>

      <h3>The Quest for the Quintic</h3>

      <p>
        The success with cubics and quartics naturally raised hopes that
        fifth-degree equations (quintics) could also be solved by radicals.
        For the next <strong>250 years</strong>, mathematicians struggled to
        find such a solution.
      </p>

      <Example title="Bring's Reduction">
        <p>
          The most that could be done was shown by <strong>Bring (1786)</strong>,
          who reduced the general quintic to the simplified form:
        </p>
        <MathBlock>
          {`x^5 - x - A = 0`}
        </MathBlock>
        <p className="mt-2">
          With only one parameter! Yet even this simplified quintic resisted
          all attempts at solution by radicals.
        </p>
      </Example>

      <Theorem title="The Impossibility of the Quintic">
        <p>
          <strong>Ruffini (1799)</strong> offered the first proof that the general
          quintic cannot be solved by radicals. His proof had gaps, but was
          vindicated by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Abel (1826)</strong>: Complete proof of impossibility</li>
          <li><strong>Galois (1831)</strong>: General theory explaining <em>which</em> equations are solvable</li>
        </ul>
      </Theorem>

      <h3>Transcendental Solutions</h3>

      <p>
        While the quintic can't be solved by radicals, it <em>can</em> be solved
        using more exotic functions.
      </p>

      <Example title="Hermite's Solution (1858)">
        <p>
          Bring's reduction opened the way to a solution using{' '}
          <strong>elliptic modular functions</strong>—analogous to Viete's solution
          of the cubic using trigonometric functions.
        </p>
        <p className="mt-2 text-dark-400">
          This extraordinary convergence of ideas—polynomial equations, elliptic
          functions, and modular forms—was beautifully expounded by Felix Klein
          in 1884.
        </p>
      </Example>

      <h3>Descartes' Contributions</h3>

      <p>
        In the midst of the ongoing quest for higher solutions,{' '}
        <strong>Descartes (1637)</strong> made two simple but important contributions:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Superscript Notation</h4>
          <p className="text-sm text-dark-300">
            Descartes introduced the notation we still use:{' '}
            <InlineMath>x^3, x^4, x^5</InlineMath>, and so on. Oddly, he continued
            writing <InlineMath>xx</InlineMath> instead of <InlineMath>x^2</InlineMath>
            until well into the next century!
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">The Factor Theorem</h4>
          <p className="text-sm text-dark-300">
            If <InlineMath>p(a) = 0</InlineMath>, then{' '}
            <InlineMath>(x - a)</InlineMath> is a factor of <InlineMath>p(x)</InlineMath>.
            This raised hope that every degree-<InlineMath>n</InlineMath> polynomial
            factors into <InlineMath>n</InlineMath> linear factors.
          </p>
        </div>
      </div>

      <Theorem title="Descartes' Factor Theorem">
        <p>
          If <InlineMath>p(x)</InlineMath> is a polynomial and <InlineMath>p(a) = 0</InlineMath>,
          then <InlineMath>p(x)</InlineMath> has <InlineMath>(x - a)</InlineMath>
          as a factor:
        </p>
        <MathBlock>
          {`p(x) = (x - a) \\cdot q(x)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>q(x)</InlineMath> has degree one less than <InlineMath>p(x)</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Looking Ahead:</strong> Descartes' theorem raised the possibility
        that every polynomial of degree <InlineMath>n</InlineMath> has exactly{' '}
        <InlineMath>n</InlineMath> roots. But proving this would require accepting
        a new kind of number—the complex numbers that had already begun to emerge
        from the solution of cubic equations.
      </Callout>

      <SectionQuiz
        sectionId={23}
        questions={quizMap[23] || []}
        title="The Quartic Equation Quiz"
      />
    </LessonLayout>
  );
}
