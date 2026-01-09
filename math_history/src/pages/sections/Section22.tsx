import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>The Cubic Equation</h2>

      <p>
        The solution of cubic equations in early 16th-century Italy was the
        <strong> first clear advance in mathematics since the time of the Greeks</strong>.
        It revealed the power of algebra and opened the door to calculus,
        analytic geometry, and the eventual development of complex numbers.
      </p>

      <Callout type="info">
        <strong>Historical Drama:</strong> The story of the cubic involves
        mathematical duels, accusations of theft, broken oaths, and bitter
        rivalries between <strong>Scipione del Ferro</strong>,{' '}
        <strong>Niccolo Tartaglia</strong>, and <strong>Girolamo Cardano</strong>.
      </Callout>

      <h3>The Discovery</h3>

      <p>
        <strong>Scipione del Ferro</strong> of Bologna discovered the first solution
        to a class of cubic equations sometime before his death in 1526. He kept
        his method secret—a common practice when mathematical knowledge could win
        public contests and secure academic positions.
      </p>

      <Example title="The Mathematical Duel">
        <p>
          <strong>Tartaglia</strong> independently discovered the solution on
          February 12, 1535, proving it by defeating del Ferro's student
          Antonio Maria Fior in a public contest. Tartaglia solved all 30 problems
          posed by Fior, while Fior solved none of Tartaglia's.
        </p>
        <p className="mt-2 text-dark-400">
          Cardano, after much persuasion, obtained Tartaglia's method in 1539
          and published it in his <em>Ars Magna</em> (1545), crediting Tartaglia
          but earning his eternal enmity.
        </p>
      </Example>

      <h3>Cardano's Solution</h3>

      <p>
        Cardano presented algebra in the geometric style of al-Khwarizmi, with
        multiple cases to avoid negative coefficients. In modern notation, his
        method works as follows:
      </p>

      <Definition title="Reduction to Depressed Cubic">
        <p>
          Any cubic <InlineMath>x^3 + ax^2 + bx + c = 0</InlineMath> can be
          transformed into a <strong>depressed cubic</strong> (one with no
          quadratic term) by the substitution <InlineMath>x = y - a/3</InlineMath>:
        </p>
        <MathBlock>
          {`y^3 = py + q`}
        </MathBlock>
        <p className="mt-2">
          This eliminates the <InlineMath>y^2</InlineMath> term entirely.
        </p>
      </Definition>

      <h3>The Brilliant Substitution</h3>

      <p>
        The key insight is to write <InlineMath>y = u + v</InlineMath>. Then:
      </p>

      <MathBlock>
        {`y^3 = (u + v)^3 = u^3 + v^3 + 3uv(u + v) = u^3 + v^3 + 3uvy`}
      </MathBlock>

      <p>
        Comparing with <InlineMath>y^3 = py + q</InlineMath>, we need:
      </p>

      <MathBlock>
        {`\\begin{aligned}
3uv &= p \\\\
u^3 + v^3 &= q
\\end{aligned}`}
      </MathBlock>

      <Theorem title="Cardano's Formula">
        <p>
          Eliminating <InlineMath>v</InlineMath> gives a quadratic in{' '}
          <InlineMath>u^3</InlineMath>:
        </p>
        <MathBlock>
          {`u^3 + \\left(\\frac{p}{3u}\\right)^3 = q`}
        </MathBlock>
        <p className="mt-2">Solving yields:</p>
        <MathBlock>
          {`u^3 = \\frac{q}{2} + \\sqrt{\\left(\\frac{q}{2}\\right)^2 - \\left(\\frac{p}{3}\\right)^3}`}
        </MathBlock>
        <MathBlock>
          {`v^3 = \\frac{q}{2} - \\sqrt{\\left(\\frac{q}{2}\\right)^2 - \\left(\\frac{p}{3}\\right)^3}`}
        </MathBlock>
        <p className="mt-2">And the solution is:</p>
        <MathBlock>
          {`y = \\sqrt[3]{\\frac{q}{2} + \\sqrt{\\left(\\frac{q}{2}\\right)^2 - \\left(\\frac{p}{3}\\right)^3}} + \\sqrt[3]{\\frac{q}{2} - \\sqrt{\\left(\\frac{q}{2}\\right)^2 - \\left(\\frac{p}{3}\\right)^3}}`}
        </MathBlock>
      </Theorem>

      {/* Visualization of the cubic solution */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          The Structure of Cardano's Method
        </h4>
        <svg viewBox="0 0 500 200" className="w-full h-auto">
          {/* Flow diagram */}
          {/* Box 1: General cubic */}
          <rect x="20" y="20" width="120" height="50" rx="5" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
          <text x="80" y="42" fill="#c7d2fe" fontSize="10" textAnchor="middle">General Cubic</text>
          <text x="80" y="58" fill="#a5b4fc" fontSize="9" textAnchor="middle">x³ + ax² + bx + c = 0</text>
          
          {/* Arrow 1 */}
          <path d="M 140 45 L 170 45" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <text x="155" y="38" fill="#94a3b8" fontSize="7" textAnchor="middle">x = y - a/3</text>
          
          {/* Box 2: Depressed cubic */}
          <rect x="170" y="20" width="100" height="50" rx="5" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
          <text x="220" y="42" fill="#a7f3d0" fontSize="10" textAnchor="middle">Depressed Cubic</text>
          <text x="220" y="58" fill="#6ee7b7" fontSize="9" textAnchor="middle">y³ = py + q</text>
          
          {/* Arrow 2 */}
          <path d="M 270 45 L 300 45" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <text x="285" y="38" fill="#94a3b8" fontSize="7" textAnchor="middle">y = u + v</text>
          
          {/* Box 3: System */}
          <rect x="300" y="20" width="90" height="50" rx="5" fill="#f59e0b" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2"/>
          <text x="345" y="38" fill="#fcd34d" fontSize="9" textAnchor="middle">3uv = p</text>
          <text x="345" y="52" fill="#fcd34d" fontSize="9" textAnchor="middle">u³ + v³ = q</text>
          
          {/* Arrow 3 */}
          <path d="M 390 45 L 420 45" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arr)"/>
          
          {/* Box 4: Quadratic */}
          <rect x="420" y="20" width="70" height="50" rx="5" fill="#ef4444" fillOpacity="0.3" stroke="#f87171" strokeWidth="2"/>
          <text x="455" y="42" fill="#fca5a5" fontSize="9" textAnchor="middle">Quadratic</text>
          <text x="455" y="56" fill="#fca5a5" fontSize="8" textAnchor="middle">in u³</text>
          
          {/* Lower section: Example */}
          <rect x="80" y="100" width="340" height="80" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
          <text x="250" y="120" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">Example: y³ = 6y + 6</text>
          <text x="250" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle">p = 6, q = 6</text>
          <text x="250" y="158" fill="#818cf8" fontSize="9" textAnchor="middle">(q/2)² - (p/3)³ = 9 - 8 = 1</text>
          <text x="250" y="172" fill="#34d399" fontSize="10" textAnchor="middle">y = ∛(3 + 1) + ∛(3 - 1) = ∛4 + ∛2</text>
          
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      <Example title="Solving y³ = 2">
        <p>Here <InlineMath>p = 0</InlineMath> and <InlineMath>q = 2</InlineMath>:</p>
        <MathBlock>
          {`y = \\sqrt[3]{1 + \\sqrt{1}} + \\sqrt[3]{1 - \\sqrt{1}} = \\sqrt[3]{2} + \\sqrt[3]{0} = \\sqrt[3]{2}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The formula correctly gives the obvious solution!
        </p>
      </Example>

      <h3>Viete's Trigonometric Solution</h3>

      <p>
        <strong>Francois Viete</strong> (1540-1603) discovered an elegant connection
        between cubic equations and angle trisection. Any cubic can be reduced to
        the form:
      </p>

      <MathBlock>
        {`4y^3 - 3y = c`}
      </MathBlock>

      <Theorem title="The Cubic-Trisection Connection">
        <p>
          The expression <InlineMath>4\cos^3\theta - 3\cos\theta</InlineMath>
          equals <InlineMath>\cos 3\theta</InlineMath>. Therefore:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Setting <InlineMath>y = \cos\theta</InlineMath> converts the cubic into <InlineMath>\cos 3\theta = c</InlineMath></li>
          <li>Solving the cubic is equivalent to <strong>trisecting an angle</strong></li>
          <li>Trisecting angle <InlineMath>\cos^{'{-1}'}c</InlineMath> gives the solution <InlineMath>y = \cos\theta</InlineMath></li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>Avoiding Complex Numbers:</strong> Viete's method requires complex
        numbers only when Cardano's does not, and vice versa. Between the two methods,
        the cubic can always be solved using real numbers alone—though complex numbers
        would soon prove unavoidable.
      </Callout>

      <h3>The Degree-Multiplication Phenomenon</h3>

      <p>
        When we eliminate a variable between two polynomial equations, something
        remarkable happens: the degrees <em>multiply</em>.
      </p>

      <Example title="Eliminating Variables">
        <p>
          In Cardano's method, we have the system:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>3uv = p</InlineMath> (degree 2 in <InlineMath>u, v</InlineMath>)</li>
          <li><InlineMath>u^3 + v^3 = q</InlineMath> (degree 3 in <InlineMath>u, v</InlineMath>)</li>
        </ul>
        <p className="mt-2">
          Eliminating <InlineMath>v</InlineMath> yields an equation of degree{' '}
          <InlineMath>2 \times 3 = 6</InlineMath> in <InlineMath>u</InlineMath>—but
          it's a quadratic in <InlineMath>u^3</InlineMath>!
        </p>
      </Example>

      <h3>Historical Significance</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Why It Mattered</h4>
          <p className="text-sm text-dark-300">
            The solution of the cubic was "a truly celestial gift" (Cardano) that
            demonstrated algebra's power over geometry. It inspired centuries of
            work on higher-degree equations and led directly to the development of
            complex numbers.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">The Key Players</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li><strong>del Ferro</strong>: First discovery (~1515)</li>
            <li><strong>Tartaglia</strong>: Independent discovery (1535)</li>
            <li><strong>Cardano</strong>: Publication (1545)</li>
            <li><strong>Ferrari</strong>: Extended to quartics</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Modern Inspiration:</strong> Even in the 20th century, personally
        discovering the solution of the cubic equation has inspired distinguished
        mathematical careers. Mark Kac wrote of such an experience launching his
        own journey into mathematics.
      </Callout>

      <SectionQuiz
        sectionId={22}
        questions={quizMap[22] || []}
        title="The Cubic Equation Quiz"
      />
    </LessonLayout>
  );
}
