import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2>Foundations and Rigor</h2>

      <p>
        For over 150 years, calculus was used with tremendous success despite
        having no rigorous foundation. The "infinitely small" quantities that
        Newton and Leibniz used were philosophically troubling—were they zero
        or not? The 19th century finally provided rigorous definitions that
        put calculus on solid ground.
      </p>

      <Callout type="info">
        <strong>The Crisis:</strong> Bishop Berkeley's 1734 pamphlet{' '}
        <em>The Analyst</em> devastatingly critiqued the logical foundations
        of calculus, calling infinitesimals "ghosts of departed quantities."
        Mathematicians knew calculus worked, but couldn't explain why.
      </Callout>

      <h3>Berkeley's Critique</h3>

      <p>
        Berkeley pointed out a fundamental inconsistency in the usual derivation
        of the derivative:
      </p>

      <Example title="The Problem with Infinitesimals">
        <p>
          To find the derivative of <InlineMath>y = x^2</InlineMath>:
        </p>
        <MathBlock>
          {`\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h`}
        </MathBlock>
        <p className="mt-2">
          Now we set <InlineMath>h = 0</InlineMath> to get{' '}
          <InlineMath>2x</InlineMath>. But wait—we divided by{' '}
          <InlineMath>h</InlineMath>, which is only valid if{' '}
          <InlineMath>{'h \\neq 0'}</InlineMath>!
        </p>
        <p className="mt-2 italic text-dark-400">
          "By virtue of a twofold mistake, you arrive, though not at science,
          yet at truth." —Berkeley
        </p>
      </Example>

      <h3>The Path to Rigor</h3>

      <p>
        The resolution came through three mathematicians who replaced
        infinitesimals with the concept of <strong>limits</strong>:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Cauchy (1821)</h4>
          <p className="text-sm text-dark-300">
            Defined limits, continuity, and convergence. Made calculus logically
            coherent for the first time.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Weierstrass (1860s)</h4>
          <p className="text-sm text-dark-300">
            Perfected the epsilon-delta definitions. Constructed pathological
            counterexamples that revealed hidden assumptions.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Riemann (1854)</h4>
          <p className="text-sm text-dark-300">
            Gave the modern definition of the integral that handles much more
            general functions than Newton's.
          </p>
        </div>
      </div>

      <h3>The Epsilon-Delta Definition</h3>

      <p>
        The key insight was to replace "infinitely small" with "arbitrarily small":
      </p>

      <Definition title="Limit (Weierstrass)">
        <p>
          We say <InlineMath>\lim_{'{x \\to a}'} f(x) = L</InlineMath> if:
        </p>
        <p className="mt-2">
          For every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists a{' '}
          <InlineMath>{`\\delta > 0`}</InlineMath> such that:
        </p>
        <MathBlock>
          {`0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          In words: We can make <InlineMath>f(x)</InlineMath> as close to{' '}
          <InlineMath>L</InlineMath> as we want by taking{' '}
          <InlineMath>x</InlineMath> sufficiently close to{' '}
          <InlineMath>a</InlineMath>.
        </p>
      </Definition>

      {/* Epsilon-delta visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          The Epsilon-Delta Definition
        </h4>
        <svg viewBox="0 0 500 250" className="w-full h-auto">
          {/* Axes */}
          <line x1="50" y1="200" x2="450" y2="200" stroke="#64748b" strokeWidth="1"/>
          <line x1="50" y1="200" x2="50" y2="30" stroke="#64748b" strokeWidth="1"/>
          
          {/* Function curve */}
          <path 
            d="M 80 180 Q 150 150 250 100 Q 350 50 420 60" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="2"
          />
          
          {/* Point a on x-axis */}
          <line x1="250" y1="200" x2="250" y2="195" stroke="#818cf8" strokeWidth="2"/>
          <text x="250" y="215" fill="#818cf8" fontSize="11" textAnchor="middle">a</text>
          
          {/* L on y-axis */}
          <line x1="45" y1="100" x2="50" y2="100" stroke="#f59e0b" strokeWidth="2"/>
          <text x="35" y="104" fill="#f59e0b" fontSize="11">L</text>
          
          {/* Epsilon band */}
          <rect x="50" y="80" width="400" height="40" fill="#f59e0b" fillOpacity="0.1"/>
          <line x1="50" y1="80" x2="450" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4"/>
          <line x1="50" y1="120" x2="450" y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4"/>
          <text x="460" y="85" fill="#f59e0b" fontSize="10">L + ε</text>
          <text x="460" y="125" fill="#f59e0b" fontSize="10">L - ε</text>
          
          {/* Delta interval */}
          <line x1="200" y1="200" x2="200" y2="190" stroke="#818cf8" strokeWidth="1"/>
          <line x1="300" y1="200" x2="300" y2="190" stroke="#818cf8" strokeWidth="1"/>
          <line x1="200" y1="195" x2="300" y2="195" stroke="#818cf8" strokeWidth="1.5"/>
          <text x="220" y="230" fill="#818cf8" fontSize="10">a - δ</text>
          <text x="280" y="230" fill="#818cf8" fontSize="10">a + δ</text>
          
          {/* Annotations */}
          <text x="350" y="150" fill="#94a3b8" fontSize="9">Within ε of L</text>
          <text x="350" y="165" fill="#94a3b8" fontSize="9">when within δ of a</text>
        </svg>
      </div>

      <Definition title="Derivative (Rigorous Definition)">
        <MathBlock>
          {`f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}`}
        </MathBlock>
        <p className="mt-2">
          This limit exists if and only if for every{' '}
          <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists{' '}
          <InlineMath>{`\\delta > 0`}</InlineMath> such that:
        </p>
        <MathBlock>
          {`0 < |h| < \\delta \\implies \\left|\\frac{f(a+h) - f(a)}{h} - f'(a)\\right| < \\varepsilon`}
        </MathBlock>
      </Definition>

      <h3>Weierstrass's Monsters</h3>

      <p>
        The new rigor revealed surprising possibilities:
      </p>

      <Theorem title="Weierstrass Function (1872)">
        <p>
          There exists a function that is <strong>continuous everywhere</strong>{' '}
          but <strong>differentiable nowhere</strong>!
        </p>
        <MathBlock>
          {`f(x) = \\sum_{n=0}^{\\infty} a^n \\cos(b^n \\pi x)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`0 < a < 1`}</InlineMath> and{' '}
          <InlineMath>b</InlineMath> is an odd integer with{' '}
          <InlineMath>{`ab > 1 + \\frac{3\\pi}{2}`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Shocking the Establishment:</strong> This function contradicted
        the intuition of centuries. Mathematicians had assumed that continuous
        functions must be "smooth" except at isolated points. Weierstrass showed
        this was completely wrong.
      </Callout>

      <h3>The Riemann Integral</h3>

      <p>
        Riemann gave the first rigorous definition of the integral:
      </p>

      <Definition title="Riemann Integral">
        <p>
          Partition <InlineMath>[a, b]</InlineMath> into subintervals and form
          Riemann sums:
        </p>
        <MathBlock>
          {`S = \\sum_{i=1}^n f(x_i^*) \\Delta x_i`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>x_i^*</InlineMath> is any point in the{' '}
          <InlineMath>i</InlineMath>-th subinterval.
        </p>
        <p className="mt-2">
          The integral <InlineMath>\int_a^b f(x)\,dx</InlineMath> exists if these
          sums converge to the same limit as the partition gets finer, regardless
          of how the <InlineMath>x_i^*</InlineMath> are chosen.
        </p>
      </Definition>

      <h3>What Rigor Achieved</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Before Rigor</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Infinitesimals: useful but paradoxical</li>
            <li>Hidden assumptions everywhere</li>
            <li>Proofs relied on geometric intuition</li>
            <li>No way to handle "pathological" cases</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">After Rigor</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Limits: clear and unambiguous</li>
            <li>Explicit hypotheses in every theorem</li>
            <li>Purely logical proofs possible</li>
            <li>Can study very general functions</li>
          </ul>
        </div>
      </div>

      <h3>The Arithmetic of Real Numbers</h3>

      <p>
        The rigorous foundation of calculus required a rigorous foundation for
        the real numbers themselves. This came from:
      </p>

      <Example title="Constructions of the Reals">
        <ul className="space-y-2">
          <li>
            <strong>Dedekind cuts (1872):</strong> A real number is defined as
            a way of dividing the rationals into two sets
          </li>
          <li>
            <strong>Cauchy sequences (Cantor, 1872):</strong> A real number is
            an equivalence class of convergent sequences of rationals
          </li>
        </ul>
        <p className="mt-2 text-dark-400">
          Both constructions prove that <InlineMath>{'\\mathbb{R}'}</InlineMath> is{' '}
          <em>complete</em>: every Cauchy sequence converges.
        </p>
      </Example>

      <h3>Nonstandard Analysis</h3>

      <p>
        In a remarkable twist, Abraham Robinson (1960s) showed that infinitesimals
        can be made rigorous after all:
      </p>

      <Theorem title="Nonstandard Analysis">
        <p>
          Using advanced logic (model theory), one can construct a rigorous number
          system containing genuine infinitesimals. In this system, the original
          arguments of Newton and Leibniz become valid!
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Historical Vindication:</strong> Robinson's nonstandard analysis
        showed that Newton and Leibniz were right all along—not in their specific
        manipulations, but in their intuition that infinitesimals could be made
        meaningful. The epsilon-delta approach and the infinitesimal approach
        are equally valid foundations for calculus.
      </Callout>

      <p>
        With rigorous foundations in place, calculus became analysis—a vast
        field encompassing real analysis, complex analysis, functional analysis,
        and more. The intuitions of Newton and Leibniz, refined by two centuries
        of work, became the bedrock of modern mathematics.
      </p>

      <SectionQuiz
        sectionId={36}
        questions={quizMap[36] || []}
        title="Foundations and Rigor Quiz"
      />
    </LessonLayout>
  );
}
