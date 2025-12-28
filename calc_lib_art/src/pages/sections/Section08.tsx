import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Definition } from '../../components/common/ContentBlocks';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section08Questions } from '../../data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">The Meaning of the Derivative</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We've seen the derivative as the slope of a tangent line and as instantaneous velocity.
        But the derivative is far more general—it's a universal tool for measuring{' '}
        <strong>how one quantity changes in response to another</strong>. Understanding this
        deeper meaning unlocks the full power of calculus.
      </p>

      <Callout type="info">
        <p className="italic">
          "The derivative tells you, at any instant, how sensitive the output is to changes
          in the input."
        </p>
      </Callout>

      {/* The Formal Definition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Formal Definition</h2>

      <Definition title="The Derivative">
        The derivative of a function <MathInline>{'f'}</MathInline> at a point{' '}
        <MathInline>{'x = a'}</MathInline> is defined as:
        <MathBlock>{`f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}`}</MathBlock>
        provided this limit exists. We also write{' '}
        <MathInline>{'\\frac{df}{dx}'}</MathInline> or{' '}
        <MathInline>{'\\frac{d}{dx}f(x)'}</MathInline> for the derivative.
      </Definition>

      <p className="text-dark-200 my-6">
        The expression <MathInline>{'\\frac{f(a+h) - f(a)}{h}'}</MathInline> is called the{' '}
        <strong>difference quotient</strong>. It measures the average rate of change of{' '}
        <MathInline>{'f'}</MathInline> over the interval from <MathInline>{'a'}</MathInline>{' '}
        to <MathInline>{'a+h'}</MathInline>. The derivative is what this rate "settles down to"
        as the interval shrinks.
      </p>

      {/* Multiple Interpretations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Many Faces of the Derivative</h2>

      <CardGrid>
        <Card>
          <CardHeader title="Geometric" />
          <p className="text-sm text-dark-300">
            Slope of the tangent line to the graph of <MathInline>{'f'}</MathInline> at the
            point <MathInline>{'(a, f(a))'}</MathInline>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Physical" />
          <p className="text-sm text-dark-300">
            Instantaneous rate of change. If <MathInline>{'f(t)'}</MathInline> is position,
            then <MathInline>{'f\'(t)'}</MathInline> is velocity.
          </p>
        </Card>
        <Card>
          <CardHeader title="Analytical" />
          <p className="text-sm text-dark-300">
            Best linear approximation: near <MathInline>{'a'}</MathInline>, we have{' '}
            <MathInline>{'f(x) \\approx f(a) + f\'(a)(x-a)'}</MathInline>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Sensitivity" />
          <p className="text-sm text-dark-300">
            How much does the output change per unit change in input? A measure of
            responsiveness.
          </p>
        </Card>
      </CardGrid>

      {/* The Derivative as Sensitivity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Sensitivity Analysis</h2>

      <p className="text-dark-200 mb-6">
        Perhaps the most powerful interpretation: the derivative measures <strong>sensitivity</strong>.
        If <MathInline>{'f\'(a) = 3'}</MathInline>, then near <MathInline>{'x = a'}</MathInline>,
        a small change <MathInline>{'\\Delta x'}</MathInline> in the input produces approximately{' '}
        <MathInline>{'3 \\cdot \\Delta x'}</MathInline> change in the output.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">Example: Temperature Sensitivity</h4>
        <p className="text-dark-200 mb-4">
          Suppose <MathInline>{'C(t)'}</MathInline> gives the cost of heating a building when
          the outside temperature is <MathInline>{'t'}</MathInline> degrees. If{' '}
          <MathInline>{'C\'(20) = -15'}</MathInline> dollars per degree, this means:
        </p>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            When it's 20°, each additional degree of warmth saves about $15 in heating costs.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            The negative sign indicates that cost <em>decreases</em> as temperature increases.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            This is an instantaneous rate—at 30° the sensitivity might be different.
          </li>
        </ul>
      </div>

      {/* When Derivatives Don't Exist */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">When Derivatives Fail</h2>

      <p className="text-dark-200 mb-6">
        Not every function has a derivative at every point. The derivative fails to exist when
        the function has:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 border border-red-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-red-300 mb-3">Corners</h4>
          <p className="text-dark-200 text-sm mb-2">
            Example: <MathInline>{'f(x) = |x|'}</MathInline> at <MathInline>{'x = 0'}</MathInline>
          </p>
          <p className="text-dark-400 text-xs">
            The left and right slopes don't match. The tangent would have to point two
            directions at once.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-3">Cusps</h4>
          <p className="text-dark-200 text-sm mb-2">
            Example: <MathInline>{'f(x) = x^{2/3}'}</MathInline> at <MathInline>{'x = 0'}</MathInline>
          </p>
          <p className="text-dark-400 text-xs">
            The curve comes to a sharp point where the tangent would be vertical.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Discontinuities</h4>
          <p className="text-dark-200 text-sm mb-2">
            Example: step functions
          </p>
          <p className="text-dark-400 text-xs">
            If the function jumps, there's no meaningful tangent line at the jump point.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>Differentiable ⇒ Continuous:</strong> If a function has a derivative at a
          point, it must be continuous there. But the converse is false—continuous functions
          can fail to be differentiable (like <MathInline>{'|x|'}</MathInline> at 0).
        </p>
      </Callout>

      {/* Higher Derivatives */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Higher Derivatives</h2>

      <p className="text-dark-200 mb-6">
        The derivative of a function is itself a function—so we can take its derivative too!
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-primary-400 font-mono w-20">f(x)</span>
            <span className="text-dark-400">Original function</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-400 font-mono w-20">f'(x)</span>
            <span className="text-dark-400">First derivative (rate of change)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-400 font-mono w-20">f''(x)</span>
            <span className="text-dark-400">Second derivative (rate of change of the rate)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-400 font-mono w-20">f'''(x)</span>
            <span className="text-dark-400">Third derivative (and so on...)</span>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        In physics, if position is <MathInline>{'x(t)'}</MathInline>:
      </p>

      <ul className="space-y-2 text-dark-200 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-emerald-400">•</span>
          <strong>Velocity</strong> <MathInline>{'v = x\''}</MathInline> — how fast position changes
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-400">•</span>
          <strong>Acceleration</strong> <MathInline>{'a = x\'\''}</MathInline> — how fast velocity changes
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-400">•</span>
          <strong>Jerk</strong> <MathInline>{'j = x\'\'\''}</MathInline> — how fast acceleration changes (important for ride comfort!)
        </li>
      </ul>

      {/* The Second Derivative and Concavity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Concavity: The Shape of Change</h2>

      <p className="text-dark-200 mb-6">
        The second derivative tells us about the <strong>shape</strong> of the graph:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">f''(x) {">"} 0: Concave Up</h4>
          <p className="text-dark-200 mb-2">
            The graph bends upward like a smile. The slope is increasing.
          </p>
          <p className="text-sm text-dark-400">
            If you're driving, you're accelerating (velocity increasing).
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">f''(x) {"<"} 0: Concave Down</h4>
          <p className="text-dark-200 mb-2">
            The graph bends downward like a frown. The slope is decreasing.
          </p>
          <p className="text-sm text-dark-400">
            If you're driving, you're decelerating (velocity decreasing).
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Inflection Points:</strong> Where <MathInline>{'f\'\''}</MathInline> changes
          sign, the curve changes from concave up to concave down (or vice versa). These are
          inflection points—moments where the character of the change itself changes.
        </p>
      </Callout>

      {/* Applications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Derivative in the Wild</h2>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💰</span>
          <div>
            <p className="font-semibold">Marginal Cost</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'C\'(x)'}</MathInline> = cost of producing one more unit when you're
              already making <MathInline>{'x'}</MathInline> units.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">📈</span>
          <div>
            <p className="font-semibold">Growth Rate</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'P\'(t)/P(t)'}</MathInline> = relative growth rate of a population
              (percentage change per unit time).
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-semibold">Electrical Current</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'I = dQ/dt'}</MathInline> = rate of flow of electric charge.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🧬</span>
          <div>
            <p className="font-semibold">Reaction Rates</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'d[A]/dt'}</MathInline> = rate of change of concentration in a
              chemical reaction.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The derivative measures instantaneous rate of change—how sensitive the output is to small changes in input.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>It has many interpretations: tangent slope, velocity, linear approximation, sensitivity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Derivatives don't always exist—corners, cusps, and discontinuities break differentiability.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Higher derivatives reveal deeper structure: the second derivative describes concavity and acceleration.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={8} questions={section08Questions} />
    </LessonLayout>
  );
}
