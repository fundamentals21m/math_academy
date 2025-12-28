import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section10Questions } from '../../data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">Accumulation and Totals</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The integral isn't just about area—it's about <strong>accumulation</strong>. Whenever
        you have a rate of change and want to know the total effect, integration is the answer.
        This perspective reveals the integral as the mathematical embodiment of "adding up"
        continuous change.
      </p>

      <Callout type="info">
        <p className="italic">
          "Integration is the inverse of differentiation: if differentiation breaks wholes
          into infinitesimal parts, integration builds wholes from infinitesimal parts."
        </p>
      </Callout>

      {/* The Accumulation Perspective */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Rates to Totals</h2>

      <p className="text-dark-200 mb-6">
        Suppose you're filling a bathtub. The rate at which water flows is{' '}
        <MathInline>{'r(t)'}</MathInline> liters per minute. How much water is in the tub
        after 10 minutes?
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">If the rate is constant:</h4>
        <p className="text-dark-200 mb-2">
          At 5 liters/minute for 10 minutes: <MathInline>{'5 \\times 10 = 50'}</MathInline> liters.
        </p>
        <p className="text-dark-200">
          Simple multiplication works when the rate doesn't change.
        </p>
      </div>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">If the rate varies:</h4>
        <p className="text-dark-200 mb-2">
          Maybe the flow starts fast and slows down. We can't just multiply—we need to add up
          the water contributed in each tiny moment:
        </p>
        <MathBlock>{`\\text{Total water} = \\int_0^{10} r(t)\\,dt`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The integral "accumulates" the rate over time to give the total quantity.
      </p>

      {/* The Accumulation Function */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Accumulation Function</h2>

      <p className="text-dark-200 mb-6">
        Instead of computing a single total, we can track accumulation as a function of time.
        Define:
      </p>

      <MathBlock>{`F(x) = \\int_a^x f(t)\\,dt`}</MathBlock>

      <p className="text-dark-200 my-6">
        This is the <strong>accumulation function</strong>: it tells you how much has accumulated
        from the starting point <MathInline>{'a'}</MathInline> up to any point{' '}
        <MathInline>{'x'}</MathInline>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="At x = a" />
          <p className="text-sm text-dark-300">
            <MathInline>{'F(a) = \\int_a^a f(t)\\,dt = 0'}</MathInline>
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Nothing has accumulated yet at the starting point.
          </p>
        </Card>
        <Card>
          <CardHeader title="As x increases" />
          <p className="text-sm text-dark-300">
            <MathInline>{'F(x)'}</MathInline> grows (if <MathInline>{'f > 0'}</MathInline>)
            as we accumulate more and more.
          </p>
          <p className="text-xs text-dark-500 mt-2">
            The rate of growth is exactly <MathInline>{'f(x)'}</MathInline>.
          </p>
        </Card>
      </CardGrid>

      {/* Real-World Accumulation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Accumulation Everywhere</h2>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🚗</span>
          <div>
            <p className="font-semibold">Distance from Velocity</p>
            <p className="text-sm text-dark-400">
              If <MathInline>{'v(t)'}</MathInline> is velocity, then{' '}
              <MathInline>{'\\int_0^T v(t)\\,dt'}</MathInline> is total displacement. The
              odometer reading is an integral of the speedometer reading.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💧</span>
          <div>
            <p className="font-semibold">Volume from Flow Rate</p>
            <p className="text-sm text-dark-400">
              If water flows at rate <MathInline>{'r(t)'}</MathInline> liters/sec, then{' '}
              <MathInline>{'\\int_0^T r(t)\\,dt'}</MathInline> gives total liters. Every water
              meter computes an integral.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💰</span>
          <div>
            <p className="font-semibold">Total Revenue from Sales Rate</p>
            <p className="text-sm text-dark-400">
              If <MathInline>{'R(t)'}</MathInline> is revenue per day, then{' '}
              <MathInline>{'\\int_0^{365} R(t)\\,dt'}</MathInline> gives yearly revenue.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">👥</span>
          <div>
            <p className="font-semibold">Population Growth</p>
            <p className="text-sm text-dark-400">
              If <MathInline>{'b(t) - d(t)'}</MathInline> is net birth rate, then{' '}
              <MathInline>{'\\int_0^T (b - d)\\,dt'}</MathInline> gives population change.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-semibold">Energy from Power</p>
            <p className="text-sm text-dark-400">
              If <MathInline>{'P(t)'}</MathInline> is power (watts), then{' '}
              <MathInline>{'\\int_0^T P(t)\\,dt'}</MathInline> gives energy (joules). Your
              electric bill is an integral.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Pattern:</strong> Whenever you have a <em>rate</em> and want a{' '}
          <em>total</em>, integrate. The integral is the mathematical "undo" of the derivative.
        </p>
      </Callout>

      {/* Net vs. Total */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Net Change vs. Total Change</h2>

      <p className="text-dark-200 mb-6">
        An important distinction: the integral gives <strong>net</strong> accumulation, not
        necessarily total. If something goes up and then down, increases and decreases can cancel.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Net Displacement</h4>
          <MathBlock>{`\\int_a^b v(t)\\,dt`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            Where you end up minus where you started. If you walk forward 10 steps and back 7,
            net displacement is 3 steps.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">Total Distance</h4>
          <MathBlock>{`\\int_a^b |v(t)|\\,dt`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            How far you actually walked. Those 10 + 7 = 17 steps all count toward total
            distance traveled.
          </p>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        The absolute value matters when you care about total activity rather than net effect.
      </p>

      {/* Integration as Reconstruction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Reconstruction from Rates</h2>

      <p className="text-dark-200 mb-6">
        Here's a profound way to think about integration: if you know how something changes
        at every instant, you can reconstruct the thing itself.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-4 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>From velocity to position:</strong> The speedometer tells you how fast
              you're going at each moment. Integrate, and you know where you are.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>From acceleration to velocity:</strong> A phone's accelerometer measures
              acceleration. Integrate to get velocity; integrate again to get position.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>From density to mass:</strong> If you know mass per unit volume at every
              point, integrate to get total mass.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Constant of Integration:</strong> When reconstructing from rates, there's
          an ambiguity: we know the rate of change, but not the starting value. Two functions
          with the same derivative differ by a constant. That's why indefinite integrals include
          "+ C".
        </p>
      </Callout>

      {/* Continuous vs Discrete */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Sums and Integrals</h2>

      <p className="text-dark-200 mb-6">
        The integral is the continuous analog of a sum:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-800 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-primary-300 mb-3">Discrete Sum</h4>
          <MathBlock>{`\\sum_{i=1}^{n} a_i`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            Add up a finite (or countable) list of numbers. Each term contributes separately.
          </p>
        </div>

        <div className="bg-dark-800 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-primary-300 mb-3">Continuous Integral</h4>
          <MathBlock>{`\\int_a^b f(x)\\,dx`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            Add up a continuum of infinitesimal contributions. Every point in the interval
            contributes.
          </p>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        Many formulas from discrete math have continuous analogs:
      </p>

      <ul className="space-y-2 text-dark-200 mb-6">
        <li className="flex items-center gap-3">
          <span className="text-primary-400">•</span>
          Sum <MathInline>{'\\to'}</MathInline> Integral
        </li>
        <li className="flex items-center gap-3">
          <span className="text-primary-400">•</span>
          Sequence <MathInline>{'\\to'}</MathInline> Function
        </li>
        <li className="flex items-center gap-3">
          <span className="text-primary-400">•</span>
          Difference <MathInline>{'\\to'}</MathInline> Derivative
        </li>
      </ul>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The integral measures accumulation: how much piles up when you add up a rate over time.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The accumulation function F(x) = ∫ᵃˣ f(t) dt tracks running totals from a starting point.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Integrals give net change; use absolute values when you need total activity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Knowing rates of change lets you reconstruct quantities through integration—the reverse of differentiation.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={10} questions={section10Questions} />
    </LessonLayout>
  );
}
