import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2>Early Applications of Calculus</h2>

      <p>
        The power of calculus became apparent through its applications to
        problems in physics and geometry that had resisted solution for centuries.
        Newton's <em>Principia Mathematica</em> (1687) demonstrated that calculus
        could explain the motion of planets, falling bodies, and tides—unifying
        terrestrial and celestial mechanics.
      </p>

      <Callout type="info">
        <strong>The Principia:</strong> Newton's masterwork derived the laws of
        planetary motion from his laws of mechanics and universal gravitation.
        Though written in geometric language to be accessible to his contemporaries,
        the underlying ideas came from calculus.
      </Callout>

      <h3>The Brachistochrone Problem</h3>

      <p>
        One of the most famous early problems solved by calculus was the{' '}
        <strong>brachistochrone</strong> (Greek for "shortest time"):
      </p>

      <Definition title="The Brachistochrone Problem">
        <p>
          What curve between two points <InlineMath>A</InlineMath> and{' '}
          <InlineMath>B</InlineMath> (with <InlineMath>B</InlineMath> lower than{' '}
          <InlineMath>A</InlineMath>) allows a frictionless bead sliding under
          gravity to travel from <InlineMath>A</InlineMath> to{' '}
          <InlineMath>B</InlineMath> in the shortest time?
        </p>
      </Definition>

      <p>
        Johann Bernoulli posed this problem in 1696 as a challenge to mathematicians.
        The answer surprised many: it's not a straight line!
      </p>

      <Theorem title="Solution: The Cycloid">
        <p>
          The brachistochrone is a <strong>cycloid</strong>—the curve traced by
          a point on the rim of a rolling wheel.
        </p>
        <MathBlock>
          {`x = r(\\theta - \\sin\\theta), \\quad y = r(1 - \\cos\\theta)`}
        </MathBlock>
        <p className="mt-2">
          Five mathematicians solved the problem: Newton, Leibniz, L'Hôpital,
          and both Bernoulli brothers (Johann and Jakob).
        </p>
      </Theorem>

      {/* Cycloid visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          The Cycloid: Curve of Fastest Descent
        </h4>
        <svg viewBox="0 0 500 180" className="w-full h-auto">
          {/* Starting point A */}
          <circle cx="50" cy="30" r="5" fill="#f59e0b"/>
          <text x="40" y="20" fill="#f59e0b" fontSize="12">A</text>
          
          {/* Ending point B */}
          <circle cx="400" cy="150" r="5" fill="#f59e0b"/>
          <text x="410" y="155" fill="#f59e0b" fontSize="12">B</text>
          
          {/* Straight line (not optimal) */}
          <line x1="50" y1="30" x2="400" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5"/>
          <text x="230" y="70" fill="#64748b" fontSize="10">straight line</text>
          
          {/* Cycloid (optimal) */}
          <path 
            d="M 50 30 Q 100 20 150 60 Q 200 120 250 140 Q 300 155 350 155 Q 380 152 400 150" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="2.5"
          />
          <text x="180" y="130" fill="#10b981" fontSize="10">cycloid (fastest!)</text>
          
          {/* Rolling circle illustration */}
          <circle cx="150" cy="60" r="30" fill="none" stroke="#818cf8" strokeWidth="1" strokeDasharray="3"/>
          <circle cx="150" cy="90" r="3" fill="#818cf8"/>
          <line x1="150" y1="60" x2="150" y2="90" stroke="#818cf8" strokeWidth="1"/>
        </svg>
        <p className="text-sm text-dark-400 mt-2 text-center">
          A bead slides faster on the cycloid than on the straight line!
        </p>
      </div>

      <Example title="Newton's Overnight Solution">
        <p>
          Newton received Bernoulli's challenge at 4 PM after a tiring day at
          the Royal Mint. He solved it before going to bed and sent his solution
          anonymously. Bernoulli recognized the author immediately:
        </p>
        <p className="mt-2 italic text-dark-300">
          "I recognize the lion by his claw."
        </p>
      </Example>

      <h3>Arc Length: The Rectification Problem</h3>

      <p>
        Descartes had declared it impossible to compare the length of a curve
        with a straight line. Calculus proved him wrong.
      </p>

      <Theorem title="Arc Length Formula">
        <p>
          The length of a curve <InlineMath>y = f(x)</InlineMath> from{' '}
          <InlineMath>x = a</InlineMath> to <InlineMath>x = b</InlineMath> is:
        </p>
        <MathBlock>
          {`L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx`}
        </MathBlock>
      </Theorem>

      <Example title="First Rectification: The Semicubical Parabola">
        <p>
          In 1657, Neil and van Heuraet found the arc length of{' '}
          <InlineMath>y^2 = x^3</InlineMath>—the first algebraic curve to be
          "rectified" (its length measured).
        </p>
        <p className="mt-2">
          For <InlineMath>y = x^{'{3/2}'}</InlineMath>, we have{' '}
          <InlineMath>dy/dx = \frac{'{3}'}{'{2}'}x^{'{1/2}'}</InlineMath>, so:
        </p>
        <MathBlock>
          {`L = \\int_0^a \\sqrt{1 + \\frac{9}{4}x}\\,dx`}
        </MathBlock>
        <p className="mt-2">
          This integral can be evaluated in closed form!
        </p>
      </Example>

      <h3>The Tautochrone Property</h3>

      <p>
        The cycloid has another remarkable property discovered by Huygens (1673):
      </p>

      <Theorem title="Tautochrone (Isochronous) Property">
        <p>
          On an inverted cycloid, a bead takes the same time to reach the bottom
          regardless of where it starts!
        </p>
        <p className="mt-2">
          This made the cycloid ideal for pendulum clocks—small variations in
          the swing wouldn't affect the period.
        </p>
      </Theorem>

      <h3>Celestial Mechanics</h3>

      <p>
        Newton's greatest application of calculus was to astronomy:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Problems Solved</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Why planets follow elliptical orbits</li>
            <li>Why Kepler's laws hold</li>
            <li>Prediction of comets' paths</li>
            <li>The shape of the Earth (oblate spheroid)</li>
            <li>Causes of tides</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Key Insight</h4>
          <p className="text-sm text-dark-300">
            The same inverse-square law that makes apples fall also governs the
            Moon's orbit. Universal gravitation:
          </p>
          <MathBlock>
            {`F = G\\frac{m_1 m_2}{r^2}`}
          </MathBlock>
        </div>
      </div>

      <Example title="Kepler's Laws from Newton's Laws">
        <p>
          Newton showed that an inverse-square central force implies:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Orbits are conic sections (ellipses for bound orbits)</li>
          <li>Equal areas are swept in equal times</li>
          <li>
            <InlineMath>T^2 \propto a^3</InlineMath> (period squared proportional
            to semi-major axis cubed)
          </li>
        </ul>
        <p className="mt-2 text-dark-400">
          What Kepler discovered empirically, Newton derived mathematically!
        </p>
      </Example>

      <h3>The Catenary</h3>

      <p>
        Another famous problem: what shape does a hanging chain take?
      </p>

      <Theorem title="The Catenary">
        <p>
          A flexible chain hanging under its own weight forms a{' '}
          <strong>catenary</strong>:
        </p>
        <MathBlock>
          {`y = a\\cosh\\left(\\frac{x}{a}\\right) = \\frac{a}{2}\\left(e^{x/a} + e^{-x/a}\\right)`}
        </MathBlock>
        <p className="mt-2">
          Galileo thought it was a parabola; Leibniz, Huygens, and Johann
          Bernoulli found the true answer in 1691.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Calculus as Language:</strong> These applications established
        calculus as the essential language of physics. By the 18th century,
        problems in mechanics, optics, and astronomy were routinely formulated
        and solved using differential equations.
      </Callout>

      <h3>The Continental Development</h3>

      <p>
        While British mathematics stagnated due to loyalty to Newton's notation,
        Continental mathematicians—led by the Bernoulli brothers, Euler, and
        Lagrange—developed calculus into a powerful tool:
      </p>

      <Example title="Euler's Contributions">
        <ul className="space-y-1">
          <li>Systematic notation for functions: <InlineMath>f(x)</InlineMath></li>
          <li>The number <InlineMath>e</InlineMath> and natural logarithms</li>
          <li>Euler's formula: <InlineMath>e^{'{ix}'} = \cos x + i\sin x</InlineMath></li>
          <li>Solutions to countless differential equations</li>
        </ul>
      </Example>

      <SectionQuiz
        sectionId={35}
        questions={quizMap[35] || []}
        title="Early Applications Quiz"
      />
    </LessonLayout>
  );
}
