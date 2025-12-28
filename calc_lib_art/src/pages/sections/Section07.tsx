import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section07Questions } from '../../data/quizzes';
import { InstantaneousVelocity } from '../../components/visualizations';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">Instantaneous Velocity</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        What does it mean to have a speed "at an instant"? This question seems simple until
        you think about it carefully. Speed is distance divided by time—but at a single instant,
        no time passes and no distance is covered. So how can velocity exist at a moment?
        This philosophical puzzle led directly to the concept of the derivative.
      </p>

      <Callout type="info">
        <p className="italic">
          "There is no motion at an instant. Motion requires duration."
        </p>
        <p className="text-sm text-dark-400 mt-2">— A philosophical objection as old as Zeno</p>
      </Callout>

      {/* The Paradox */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Paradox of Instantaneous Speed</h2>

      <p className="text-dark-200 mb-6">
        Imagine a car's speedometer reading 60 mph. What does this number actually mean?
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">?</span>
            <span>The car isn't traveling for an hour—it might stop in 5 minutes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">?</span>
            <span>At this exact instant, the car covers zero distance (no time elapses).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">?</span>
            <span>If we compute distance/time = 0/0, we get nonsense.</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Yet we <em>know</em> instantaneous velocity is real. Speedometers measure it. Physics
        depends on it. The question isn't whether it exists, but how to define it rigorously.
      </p>

      {/* Average vs Instantaneous */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Average to Instantaneous</h2>

      <p className="text-dark-200 mb-6">
        The solution is the same as with tangent lines: start with something we <em>can</em>
        compute, then take a limit.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Average Velocity</h4>
          <MathBlock>{`v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} = \\frac{x(t + \\Delta t) - x(t)}{\\Delta t}`}</MathBlock>
          <p className="text-dark-200 mt-4">
            This is well-defined for any interval, no matter how small (as long as{' '}
            <MathInline>{'\\Delta t \\neq 0'}</MathInline>).
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">Instantaneous Velocity</h4>
          <MathBlock>{`v = \\lim_{\\Delta t \\to 0} \\frac{x(t + \\Delta t) - x(t)}{\\Delta t}`}</MathBlock>
          <p className="text-dark-200 mt-4">
            The limit of average velocities as the time interval shrinks to zero. This is the
            derivative <MathInline>{'dx/dt'}</MathInline>.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Key Insight:</strong> We never actually divide by zero. We ask: what
          value do the average velocities approach as the time interval gets arbitrarily small?
          That limiting value is the instantaneous velocity.
        </p>
      </Callout>

      {/* Interactive Visualization */}
      <InstantaneousVelocity />

      {/* Galileo's Experiment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Galileo's Falling Bodies</h2>

      <p className="text-dark-200 mb-6">
        Galileo discovered that falling objects follow the law{' '}
        <MathInline>{'x(t) = \\frac{1}{2}gt^2'}</MathInline>, where{' '}
        <MathInline>{'g \\approx 9.8'}</MathInline> m/s². Let's find the instantaneous velocity.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Position</span>
          <div>
            <MathBlock>{`x(t) = \\frac{1}{2}gt^2`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Average v</span>
          <div>
            <MathBlock>{`\\frac{x(t+\\Delta t) - x(t)}{\\Delta t} = \\frac{\\frac{1}{2}g(t+\\Delta t)^2 - \\frac{1}{2}gt^2}{\\Delta t}`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Expand</span>
          <div>
            <MathBlock>{`= \\frac{\\frac{1}{2}g(t^2 + 2t\\Delta t + (\\Delta t)^2) - \\frac{1}{2}gt^2}{\\Delta t} = \\frac{gt\\Delta t + \\frac{1}{2}g(\\Delta t)^2}{\\Delta t}`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Simplify</span>
          <div>
            <MathBlock>{`= gt + \\frac{1}{2}g\\Delta t`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Limit</span>
          <div>
            <MathBlock>{`v(t) = \\lim_{\\Delta t \\to 0} \\left(gt + \\frac{1}{2}g\\Delta t\\right) = gt`}</MathBlock>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        The instantaneous velocity of a falling object is <MathInline>{'v = gt'}</MathInline>.
        After 1 second, it's moving at about 9.8 m/s. After 2 seconds, 19.6 m/s. The velocity
        grows linearly with time—a profound result that Galileo discovered experimentally.
      </p>

      {/* Velocity and Acceleration */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Chain of Derivatives</h2>

      <p className="text-dark-200 mb-6">
        Just as velocity is the derivative of position, <strong>acceleration</strong> is the
        derivative of velocity:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Position → Velocity" />
          <MathBlock>{`v = \\frac{dx}{dt}`}</MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            Velocity is how fast position changes.
          </p>
        </Card>
        <Card>
          <CardHeader title="Velocity → Acceleration" />
          <MathBlock>{`a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}`}</MathBlock>
          <p className="text-sm text-dark-300 mt-2">
            Acceleration is how fast velocity changes.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        For our falling object: position is <MathInline>{'\\frac{1}{2}gt^2'}</MathInline>,
        velocity is <MathInline>{'gt'}</MathInline>, and acceleration is just{' '}
        <MathInline>{'g'}</MathInline>—constant, as Galileo discovered.
      </p>

      {/* The Philosophical Resolution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Resolving the Paradox</h2>

      <p className="text-dark-200 mb-6">
        How does calculus resolve Zeno's objection that "there is no motion at an instant"?
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          The answer is subtle: <strong>instantaneous velocity is not computed at an instant</strong>.
          It's defined as a limit—a relationship between arbitrarily small intervals of time and
          the corresponding intervals of position.
        </p>
        <p className="text-dark-200">
          The speedometer reading "60 mph" means: if you continued at your current rate of position
          change for one hour, you would cover 60 miles. It's a statement about the local structure
          of your motion, not about what happens at a dimensionless point in time.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>A Philosophical Subtlety:</strong> Some philosophers argue that calculus
          doesn't truly resolve Zeno's paradoxes but rather <em>dissolves</em> them by
          redefining motion in terms of limits. The arrow paradox (how can an arrow be moving
          if at each instant it occupies a fixed position?) remains a topic of philosophical
          debate even today.
        </p>
      </Callout>

      {/* Modern Applications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Where Instantaneous Rates Matter</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-dark-800 rounded-lg">
          <h4 className="font-semibold text-primary-300 mb-2">GPS Navigation</h4>
          <p className="text-sm text-dark-400">
            Your phone calculates instantaneous velocity to predict where you'll be, adjust
            routes, and estimate arrival times.
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <h4 className="font-semibold text-primary-300 mb-2">Medical Monitoring</h4>
          <p className="text-sm text-dark-400">
            Heart rate monitors compute the instantaneous rate of heartbeats—the derivative
            of the cumulative beat count.
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <h4 className="font-semibold text-primary-300 mb-2">Financial Markets</h4>
          <p className="text-sm text-dark-400">
            Stock prices have instantaneous rates of change. Options pricing depends on
            derivatives (in both senses of the word!).
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <h4 className="font-semibold text-primary-300 mb-2">Rocket Science</h4>
          <p className="text-sm text-dark-400">
            Spacecraft navigation requires precise knowledge of instantaneous velocity and
            acceleration at every moment.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Instantaneous velocity seems paradoxical: at a single instant, no distance is traveled.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The resolution: define instantaneous velocity as the limit of average velocities over shrinking intervals.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Velocity is the derivative of position; acceleration is the derivative of velocity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>This concept underlies all of physics and countless modern technologies.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={7} questions={section07Questions} />
    </LessonLayout>
  );
}
