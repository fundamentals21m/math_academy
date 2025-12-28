import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">The Tangent Problem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        How do you measure the direction of a curve at a single point? This seemingly simple
        question puzzled mathematicians for centuries and lies at the heart of differential
        calculus. The answer requires us to think about <strong>limits</strong>—what happens
        as we zoom in infinitely close to a point on a curve.
      </p>

      <Callout type="info">
        <p className="italic">
          "The tangent to a curve at a point is the line that best approximates the curve
          near that point."
        </p>
        <p className="text-sm text-dark-400 mt-2">— A modern definition, centuries in the making</p>
      </Callout>

      {/* The Ancient Understanding */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Tangents in Ancient Geometry</h2>

      <p className="text-dark-200 mb-6">
        The ancient Greeks understood tangent lines to circles perfectly. A tangent to a circle
        is simply a line that touches the circle at exactly one point. But what about curves
        that aren't circles?
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Circle: Easy</h4>
          <p className="text-dark-200 mb-3">
            For a circle, the tangent at any point is perpendicular to the radius at that point.
            One point of contact, clean and simple.
          </p>
          <p className="text-sm text-dark-400">
            The Greeks could construct this with compass and straightedge.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-3">Parabola: Harder</h4>
          <p className="text-dark-200 mb-3">
            For a parabola or other curve, the tangent might intersect the curve elsewhere.
            "Touches at one point" doesn't work as a definition.
          </p>
          <p className="text-sm text-dark-400">
            Fermat and Descartes wrestled with this problem.
          </p>
        </div>
      </div>

      {/* The Secant Approach */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">From Secant to Tangent</h2>

      <p className="text-dark-200 mb-6">
        The key insight is to start with something we <em>can</em> easily compute—a{' '}
        <strong>secant line</strong>—and see what happens as we push it toward becoming a tangent.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">The Secant Line</h4>
        <p className="text-dark-200 mb-4">
          A <strong>secant line</strong> passes through two points on a curve. If our curve is{' '}
          <MathInline>{'y = f(x)'}</MathInline>, and we pick two points at{' '}
          <MathInline>{'x = a'}</MathInline> and <MathInline>{'x = a + h'}</MathInline>, the
          slope of the secant is:
        </p>
        <MathBlock>{`m_{\\text{secant}} = \\frac{f(a+h) - f(a)}{h}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          This is just "rise over run"—the change in <MathInline>{'y'}</MathInline> divided by
          the change in <MathInline>{'x'}</MathInline>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Now imagine sliding the second point closer and closer to the first. As{' '}
        <MathInline>{'h'}</MathInline> gets smaller, the secant line rotates, approaching
        the tangent line. The tangent is what the secant "wants to become" as the two points
        merge into one.
      </p>

      <MathBlock>{`m_{\\text{tangent}} = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}`}</MathBlock>

      <Callout type="success">
        <p>
          <strong>The Birth of the Derivative:</strong> This limit—when it exists—is called
          the <em>derivative</em> of <MathInline>{'f'}</MathInline> at{' '}
          <MathInline>{'x = a'}</MathInline>. It gives the slope of the tangent line, which
          tells us the instantaneous rate of change of the function.
        </p>
      </Callout>

      {/* A Concrete Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Concrete Example</h2>

      <p className="text-dark-200 mb-6">
        Let's find the tangent line to <MathInline>{'y = x^2'}</MathInline> at the point{' '}
        <MathInline>{'(2, 4)'}</MathInline>.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 1</span>
          <div>
            <p className="font-semibold">Write the secant slope</p>
            <MathBlock>{`\\frac{(2+h)^2 - 4}{h} = \\frac{4 + 4h + h^2 - 4}{h} = \\frac{4h + h^2}{h}`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 2</span>
          <div>
            <p className="font-semibold">Simplify</p>
            <MathBlock>{`\\frac{4h + h^2}{h} = \\frac{h(4 + h)}{h} = 4 + h`}</MathBlock>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 3</span>
          <div>
            <p className="font-semibold">Take the limit as h → 0</p>
            <MathBlock>{`\\lim_{h \\to 0} (4 + h) = 4`}</MathBlock>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        The tangent line at <MathInline>{'(2, 4)'}</MathInline> has slope 4. Its equation is{' '}
        <MathInline>{'y - 4 = 4(x - 2)'}</MathInline>, or <MathInline>{'y = 4x - 4'}</MathInline>.
      </p>

      {/* The Geometric Meaning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Does the Tangent Tell Us?</h2>

      <CardGrid>
        <Card>
          <CardHeader title="Direction" />
          <p className="text-sm text-dark-300">
            The tangent line shows the instantaneous direction of the curve. If you were
            walking along the curve, the tangent points where you're heading at that moment.
          </p>
        </Card>
        <Card>
          <CardHeader title="Best Linear Approximation" />
          <p className="text-sm text-dark-300">
            Near the point of tangency, the tangent line is the best straight-line
            approximation to the curve. This is incredibly useful for estimation.
          </p>
        </Card>
        <Card>
          <CardHeader title="Rate of Change" />
          <p className="text-sm text-dark-300">
            The slope of the tangent tells us how fast the function is changing. Steep tangent
            = rapid change. Horizontal tangent = momentarily stationary.
          </p>
        </Card>
        <Card>
          <CardHeader title="Local Behavior" />
          <p className="text-sm text-dark-300">
            Maxima and minima occur where the tangent is horizontal (slope = 0). The tangent
            reveals the local structure of the function.
          </p>
        </Card>
      </CardGrid>

      {/* Why This Matters */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why This Matters</h2>

      <p className="text-dark-200 mb-6">
        The tangent problem might seem like pure geometry, but it connects to everything:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">Physics:</span>
            <span>Velocity is the tangent to the position-time curve. Acceleration is the tangent to velocity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">Economics:</span>
            <span>Marginal cost is the tangent to the total cost curve. It tells you what one more unit costs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">Biology:</span>
            <span>Growth rates are tangent slopes. How fast is a population growing right now?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">Engineering:</span>
            <span>Optimization requires finding where tangents are horizontal (maxima and minima).</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Conceptual Leap:</strong> The tangent problem forces us to make sense
          of dividing by something that "becomes zero." This is the heart of calculus—and
          why it took centuries to get the foundations right.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The tangent line to a curve at a point shows the instantaneous direction and rate of change.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>We find tangents by taking the limit of secant lines as two points merge into one.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>This limit—the derivative—is the slope of the tangent and measures instantaneous rate of change.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The tangent problem connects pure geometry to physics, economics, biology, and engineering.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
