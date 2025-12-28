import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Definition, Theorem } from '../../components/common/ContentBlocks';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section01Questions } from '../../data/quizzes';
import { AchillesTortoiseRace } from '../../components/visualizations';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">Zeno's Paradoxes</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Twenty-five centuries ago, a Greek philosopher named <strong>Zeno of Elea</strong> posed
        a series of puzzles that would haunt mathematicians until the invention of calculus—and
        still provoke philosophical debate today. These paradoxes strike at the heart of our
        intuitions about motion, space, time, and infinity.
      </p>

      <Callout type="info">
        <p>
          Zeno (c. 490–430 BCE) was a student of Parmenides, who taught that change and motion
          are illusions—only the eternal and unchanging is real. Zeno's paradoxes were designed
          to support this radical view by showing that our common-sense notion of motion leads
          to contradictions.
        </p>
      </Callout>

      {/* Achilles and the Tortoise */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Achilles and the Tortoise</h2>

      <p className="text-dark-200 mb-6">
        The most famous of Zeno's paradoxes involves a race between the swift warrior Achilles
        and a slow tortoise. The tortoise is given a head start—say, 100 meters.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>The Argument:</strong> When the race begins, Achilles runs to where the
          tortoise started. But during that time, the tortoise has moved ahead a little.
          Achilles runs to that new position, but again the tortoise has advanced. This
          continues forever. Therefore, Achilles can <em>never</em> catch the tortoise!
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left p-2 text-dark-400">Stage</th>
                <th className="text-left p-2 text-dark-400">Achilles runs</th>
                <th className="text-left p-2 text-dark-400">Tortoise moves</th>
                <th className="text-left p-2 text-dark-400">Gap remaining</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-700">
                <td className="p-2">1</td>
                <td className="p-2">100 m</td>
                <td className="p-2">10 m</td>
                <td className="p-2">10 m</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">2</td>
                <td className="p-2">10 m</td>
                <td className="p-2">1 m</td>
                <td className="p-2">1 m</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">3</td>
                <td className="p-2">1 m</td>
                <td className="p-2">0.1 m</td>
                <td className="p-2">0.1 m</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2">4</td>
                <td className="p-2">0.1 m</td>
                <td className="p-2">0.01 m</td>
                <td className="p-2">0.01 m</td>
              </tr>
              <tr>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2 text-primary-400">never zero!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        Of course, we <em>know</em> Achilles catches the tortoise. So where is the flaw in the
        reasoning? The paradox forces us to confront a deep question: <strong>Can infinitely
        many steps be completed?</strong>
      </p>

      {/* Interactive Visualization */}
      <AchillesTortoiseRace />

      {/* The Dichotomy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Dichotomy Paradox</h2>

      <p className="text-dark-200 mb-6">
        Before you can walk across a room, you must first walk halfway. Before you can walk
        halfway, you must walk a quarter of the way. Before that, an eighth. And so on, forever.
      </p>

      <MathBlock>{`\\text{Distance} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots`}</MathBlock>

      <p className="text-dark-200 my-6">
        There are infinitely many distances to cover. How can you complete infinitely many
        tasks? This seems to prove that motion cannot even <em>begin</em>!
      </p>

      <Callout type="warning">
        <p>
          <strong>The Hidden Assumption:</strong> Zeno assumes that completing infinitely many
          tasks must take infinitely long. But is this true? What if each successive task takes
          proportionally less time?
        </p>
      </Callout>

      {/* The Arrow */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Arrow Paradox</h2>

      <p className="text-dark-200 mb-6">
        Consider an arrow in flight. At any single <em>instant</em> of time, where is the arrow?
        It occupies a definite position in space—it is not moving from one place to another,
        because an instant has no duration. The arrow is motionless.
      </p>

      <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          But if the arrow is motionless at every instant, and time is composed of instants,
          then the arrow is <em>always</em> motionless. Motion is impossible!
        </p>
        <p className="text-sm text-dark-400">
          This paradox challenges our notion of instantaneous velocity—a concept that would
          not be properly understood until Newton and Leibniz invented the derivative.
        </p>
      </div>

      {/* The Resolution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How Calculus Resolves the Paradoxes</h2>

      <p className="text-dark-200 mb-6">
        The key insight, developed over centuries, involves two profound ideas:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Infinite Series Can Converge" />
          <p className="text-sm text-dark-300 mb-4">
            An infinite sum can have a finite total. The series in the Dichotomy paradox:
          </p>
          <MathBlock>{`\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 1`}</MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            The infinitely many pieces add up to exactly 1—a finite number. Achilles completes
            the infinite chase in finite time.
          </p>
        </Card>
        <Card>
          <CardHeader title="Instantaneous Velocity Exists" />
          <p className="text-sm text-dark-300 mb-4">
            The derivative gives precise meaning to "velocity at an instant":
          </p>
          <MathBlock>{`v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}`}</MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            The arrow's velocity at an instant is not undefined—it's the limit of average
            velocities over shrinking time intervals.
          </p>
        </Card>
      </CardGrid>

      <Definition title="Convergent Series">
        An infinite series <MathInline>{'a_1 + a_2 + a_3 + \\cdots'}</MathInline> is said to
        <strong> converge</strong> if the partial sums <MathInline>{'S_n = a_1 + a_2 + \\cdots + a_n'}</MathInline> approach
        a finite limit <MathInline>{'S'}</MathInline> as <MathInline>{'n \\to \\infty'}</MathInline>.
      </Definition>

      <Theorem
        title="Geometric Series"
        proof={
          <div>
            <p className="mb-2">Let <MathInline>{'S = 1 + r + r^2 + r^3 + \\cdots'}</MathInline></p>
            <p className="mb-2">Then <MathInline>{'rS = r + r^2 + r^3 + \\cdots'}</MathInline></p>
            <p className="mb-2">Subtracting: <MathInline>{'S - rS = 1'}</MathInline></p>
            <p>Therefore: <MathInline>{'S = \\frac{1}{1-r}'}</MathInline></p>
          </div>
        }
      >
        For <MathInline>{'|r| < 1'}</MathInline>, the infinite geometric series converges:
        <MathBlock>{`1 + r + r^2 + r^3 + \\cdots = \\frac{1}{1-r}`}</MathBlock>
      </Theorem>

      {/* Philosophical Implications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Philosophical Implications</h2>

      <p className="text-dark-200 mb-6">
        Even with the mathematical resolution, Zeno's paradoxes continue to raise deep
        questions:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-bold text-xl">?</span>
          <div>
            <p className="font-semibold">Is space infinitely divisible?</p>
            <p className="text-sm text-dark-400">
              Quantum mechanics suggests there may be a smallest length (the Planck length,
              about 10⁻³⁵ meters). Does this change anything?
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-bold text-xl">?</span>
          <div>
            <p className="font-semibold">What is an "instant" of time?</p>
            <p className="text-sm text-dark-400">
              A point in time has zero duration. Can anything really happen in zero time?
              Can reality be built from durationless moments?
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-bold text-xl">?</span>
          <div>
            <p className="font-semibold">Are mathematical limits physically real?</p>
            <p className="text-sm text-dark-400">
              Calculus uses limits to define instantaneous velocity. But can we ever
              actually measure a quantity "at an instant"?
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Power of Paradox:</strong> Zeno's puzzles, posed 2,500 years ago, helped
          drive the development of calculus and continue to inspire research in physics and
          philosophy of mathematics. Great paradoxes don't just confuse—they illuminate.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Zeno's paradoxes challenge our intuitions about motion, infinity, and the nature of space and time.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The Achilles paradox shows that infinitely many steps can be completed in finite time—if each step takes proportionally less time.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The Arrow paradox raises the question of instantaneous velocity, which calculus answers through the concept of the derivative.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Infinite series that converge to finite sums are central to calculus and resolve much of the apparent paradox.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={1} questions={section01Questions} />
    </LessonLayout>
  );
}
