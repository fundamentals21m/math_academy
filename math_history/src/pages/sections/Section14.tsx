import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Zeno's Paradoxes</h2>

      <p>
        <strong>Zeno of Elea</strong> (c. 490-430 BCE) was a Greek philosopher
        who posed a series of paradoxes that challenged fundamental assumptions
        about space, time, and motion. These paradoxes troubled mathematicians
        and philosophers for over two millennia, and their resolution required
        the rigorous development of calculus and the theory of infinite series.
      </p>

      <h3>The Dichotomy Paradox</h3>

      <p>
        The first and most famous of Zeno's paradoxes concerns the impossibility
        of completing any journey:
      </p>

      <Definition title="The Dichotomy">
        <p>
          To travel from point A to point B, you must first travel half the
          distance. Before that, you must travel a quarter of the distance.
          Before that, an eighth. And so on, infinitely.
        </p>
        <p className="mt-2">
          Since you must complete infinitely many tasks, you can never even
          <em> begin</em> your journey!
        </p>
      </Definition>

      {/* Visual representation of the dichotomy */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          The Dichotomy: Infinite Steps to Cross a Room
        </h4>
        <svg viewBox="0 0 500 120" className="w-full h-auto">
          {/* Main line */}
          <line x1="50" y1="60" x2="450" y2="60" stroke="#4b5563" strokeWidth="2"/>
          
          {/* Point A */}
          <circle cx="50" cy="60" r="8" fill="#4f46e5"/>
          <text x="50" y="90" fill="#c7d2fe" fontSize="14" textAnchor="middle">A</text>
          <text x="50" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Start</text>
          
          {/* Point B */}
          <circle cx="450" cy="60" r="8" fill="#10b981"/>
          <text x="450" y="90" fill="#a7f3d0" fontSize="14" textAnchor="middle">B</text>
          <text x="450" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">End</text>
          
          {/* Half point */}
          <circle cx="250" cy="60" r="5" fill="#f59e0b"/>
          <text x="250" y="40" fill="#fcd34d" fontSize="11" textAnchor="middle">1/2</text>
          
          {/* Quarter point */}
          <circle cx="150" cy="60" r="4" fill="#f59e0b"/>
          <text x="150" y="40" fill="#fcd34d" fontSize="10" textAnchor="middle">1/4</text>
          
          {/* Eighth point */}
          <circle cx="100" cy="60" r="3" fill="#f59e0b"/>
          <text x="100" y="40" fill="#fcd34d" fontSize="9" textAnchor="middle">1/8</text>
          
          {/* Sixteenth point */}
          <circle cx="75" cy="60" r="2" fill="#f59e0b"/>
          <text x="75" y="40" fill="#fcd34d" fontSize="8" textAnchor="middle">1/16</text>
          
          {/* Dots indicating continuation */}
          <circle cx="60" cy="60" r="1.5" fill="#f59e0b"/>
          <circle cx="55" cy="60" r="1" fill="#f59e0b"/>
          
          {/* Arrow showing direction */}
          <path d="M 60 25 L 440 25" stroke="#6b7280" strokeWidth="1" strokeDasharray="4"/>
          <polygon points="440,25 432,21 432,29" fill="#6b7280"/>
          <text x="250" y="18" fill="#6b7280" fontSize="10" textAnchor="middle">Infinitely many steps required</text>
        </svg>
      </div>

      <h3>Achilles and the Tortoise</h3>

      <p>
        Perhaps Zeno's most famous paradox involves a race:
      </p>

      <Example title="Achilles and the Tortoise">
        <p>
          The swift Achilles races a tortoise. Being sporting, Achilles gives
          the tortoise a 100-meter head start. Achilles runs 10 times faster
          than the tortoise.
        </p>
        <p className="mt-2">
          When Achilles reaches the tortoise's starting point, the tortoise
          has moved 10 meters ahead. When Achilles covers those 10 meters,
          the tortoise has moved 1 meter. When Achilles covers that meter,
          the tortoise has moved 0.1 meters...
        </p>
        <p className="mt-2 text-primary-400">
          The tortoise is always ahead! Achilles can never catch up!
        </p>
      </Example>

      <h3>The Arrow Paradox</h3>

      <Definition title="The Arrow">
        <p>
          Consider an arrow in flight. At any single instant of time, the arrow
          occupies a space exactly equal to itself—it is motionless.
        </p>
        <p className="mt-2">
          But time is composed of instants. If the arrow is motionless at every
          instant, when does it move?
        </p>
      </Definition>

      <h3>The Stadium Paradox</h3>

      <p>
        Zeno's fourth paradox involves relative motion:
      </p>

      <Example title="The Stadium">
        <p>
          Three rows of soldiers march in a stadium. Row A is stationary.
          Row B marches right. Row C marches left at the same speed.
        </p>
        <p className="mt-2">
          In one "instant," B passes one soldier of A. But B passes <em>two</em>
          soldiers of C (since C is moving toward B). Therefore, the same
          instant is both one unit and two units of time—a contradiction!
        </p>
      </Example>

      <h3>Mathematical Resolution</h3>

      <p>
        The resolution of Zeno's paradoxes required understanding that infinite
        sums can have finite values:
      </p>

      <Theorem title="Resolution via Infinite Series">
        <p>
          Consider Achilles chasing the tortoise. The total distance Achilles
          must run is:
        </p>
        <MathBlock>
          {`100 + 10 + 1 + 0.1 + 0.01 + \\cdots = \\sum_{n=0}^{\\infty} 100 \\cdot \\left(\\frac{1}{10}\\right)^n`}
        </MathBlock>
        <p className="mt-2">
          This geometric series converges to:
        </p>
        <MathBlock>
          {`\\frac{100}{1 - 1/10} = \\frac{100}{9/10} = \\frac{1000}{9} \\approx 111.11 \\text{ meters}`}
        </MathBlock>
      </Theorem>

      <p>
        Achilles catches the tortoise after running about 111.11 meters, which
        takes him about 11.11 seconds. The "infinite tasks" are completed in
        finite time!
      </p>

      <Callout type="note">
        <strong>Key Insight:</strong> Zeno assumed that completing infinitely
        many tasks requires infinite time. This is false! If each subsequent
        task takes proportionally less time, the total can be finite.
      </Callout>

      <h3>The Dichotomy Resolved</h3>

      <Example title="Summing the Dichotomy">
        <p>
          The distances in the Dichotomy form the series:
        </p>
        <MathBlock>
          {`\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots = \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1`}
        </MathBlock>
        <p className="mt-2">
          The infinite sum equals exactly 1—the whole distance! There is no
          contradiction; you <em>do</em> complete the journey.
        </p>
      </Example>

      {/* Visual proof that 1/2 + 1/4 + ... = 1 */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Visual Proof: 1/2 + 1/4 + 1/8 + ... = 1
        </h4>
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Unit square */}
          <rect x="50" y="25" width="150" height="150" fill="none" stroke="#4b5563" strokeWidth="2"/>
          
          {/* 1/2 */}
          <rect x="50" y="25" width="75" height="150" fill="#4f46e5" fillOpacity="0.6" stroke="#818cf8" strokeWidth="1"/>
          <text x="87" y="105" fill="#e0e7ff" fontSize="14" textAnchor="middle">1/2</text>
          
          {/* 1/4 */}
          <rect x="125" y="25" width="75" height="75" fill="#10b981" fillOpacity="0.6" stroke="#34d399" strokeWidth="1"/>
          <text x="162" y="68" fill="#d1fae5" fontSize="12" textAnchor="middle">1/4</text>
          
          {/* 1/8 */}
          <rect x="125" y="100" width="37.5" height="75" fill="#f59e0b" fillOpacity="0.6" stroke="#fbbf24" strokeWidth="1"/>
          <text x="143" y="142" fill="#fef3c7" fontSize="10" textAnchor="middle">1/8</text>
          
          {/* 1/16 */}
          <rect x="162.5" y="100" width="37.5" height="37.5" fill="#ef4444" fillOpacity="0.6" stroke="#f87171" strokeWidth="1"/>
          <text x="181" y="122" fill="#fee2e2" fontSize="8" textAnchor="middle">1/16</text>
          
          {/* 1/32 */}
          <rect x="162.5" y="137.5" width="18.75" height="37.5" fill="#8b5cf6" fillOpacity="0.6" stroke="#a78bfa" strokeWidth="1"/>
          
          {/* Remaining tiny pieces */}
          <rect x="181.25" y="137.5" width="18.75" height="18.75" fill="#ec4899" fillOpacity="0.6" stroke="#f472b6" strokeWidth="1"/>
          
          {/* Equation */}
          <text x="300" y="60" fill="#e5e7eb" fontSize="12" textAnchor="middle">The pieces fill</text>
          <text x="300" y="80" fill="#e5e7eb" fontSize="12" textAnchor="middle">the entire square:</text>
          <text x="300" y="110" fill="#c7d2fe" fontSize="14" textAnchor="middle" fontWeight="bold">1/2 + 1/4 + 1/8 + ...</text>
          <text x="300" y="135" fill="#c7d2fe" fontSize="14" textAnchor="middle" fontWeight="bold">= 1</text>
        </svg>
      </div>

      <h3>Philosophical Legacy</h3>

      <Callout type="info">
        <strong>Deeper Questions:</strong> While mathematics resolves the
        computational aspects of Zeno's paradoxes, philosophers still debate
        the underlying questions: Is space infinitely divisible? Is time
        composed of instants? Can an infinite process ever be "completed"?
        These questions influenced the development of calculus, set theory,
        and the foundations of mathematics.
      </Callout>

      <SectionQuiz
        sectionId={14}
        questions={quizMap[14] || []}
        title="Zeno's Paradoxes Quiz"
      />
    </LessonLayout>
  );
}
