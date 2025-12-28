import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Theorem } from '../../components/common/ContentBlocks';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">The Fundamental Theorem of Calculus</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        This is it—the crown jewel of calculus. The Fundamental Theorem reveals that differentiation
        and integration are <strong>inverse operations</strong>. This profound connection, discovered
        independently by Newton and Leibniz, unifies the two pillars of calculus and makes the
        subject both powerful and computationally tractable.
      </p>

      <Callout type="info">
        <p className="italic">
          "The Fundamental Theorem of Calculus is rightly named: it is fundamental. It connects
          the two great problems of calculus—finding tangent lines and finding areas—revealing
          them to be two sides of the same coin."
        </p>
      </Callout>

      {/* Two Parts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Two Theorems in One</h2>

      <p className="text-dark-200 mb-6">
        The Fundamental Theorem comes in two forms, each revealing a different aspect of the
        connection between derivatives and integrals.
      </p>

      <Theorem title="Fundamental Theorem of Calculus (Part 1)">
        If <MathInline>{'f'}</MathInline> is continuous on <MathInline>{'[a, b]'}</MathInline>,
        and we define:
        <MathBlock>{`F(x) = \\int_a^x f(t)\\,dt`}</MathBlock>
        then <MathInline>{'F'}</MathInline> is differentiable and:
        <MathBlock>{`F'(x) = f(x)`}</MathBlock>
      </Theorem>

      <p className="text-dark-200 my-6">
        In words: <strong>the derivative of an accumulation function is the original function</strong>.
        If you're accumulating something at rate <MathInline>{'f(x)'}</MathInline>, then the
        rate of change of your total is exactly <MathInline>{'f(x)'}</MathInline>. This seems
        almost tautological—and that's the beauty. It's deeply true.
      </p>

      <Theorem title="Fundamental Theorem of Calculus (Part 2)">
        If <MathInline>{'f'}</MathInline> is continuous on <MathInline>{'[a, b]'}</MathInline>,
        and <MathInline>{'F'}</MathInline> is any antiderivative of <MathInline>{'f'}</MathInline>{' '}
        (meaning <MathInline>{'F\' = f'}</MathInline>), then:
        <MathBlock>{`\\int_a^b f(x)\\,dx = F(b) - F(a)`}</MathBlock>
      </Theorem>

      <p className="text-dark-200 my-6">
        In words: <strong>to compute an integral, find an antiderivative and evaluate at the
        endpoints</strong>. This turns the impossible (adding up infinitely many infinitesimal
        pieces) into the straightforward (subtract two numbers).
      </p>

      {/* Why It's Revolutionary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why This Changes Everything</h2>

      <p className="text-dark-200 mb-6">
        Before the Fundamental Theorem, computing areas required Archimedes-style exhaustion
        arguments—clever, case-by-case constructions. After it, we have a universal algorithm:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 1</span>
          <div>
            <p className="font-semibold">Find an antiderivative</p>
            <p className="text-sm text-dark-400">
              Look for a function <MathInline>{'F'}</MathInline> whose derivative is{' '}
              <MathInline>{'f'}</MathInline>.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Step 2</span>
          <div>
            <p className="font-semibold">Evaluate at endpoints</p>
            <p className="text-sm text-dark-400">
              Compute <MathInline>{'F(b) - F(a)'}</MathInline>.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Done!</span>
          <div>
            <p className="font-semibold">That's the integral</p>
            <p className="text-sm text-dark-400">
              No infinite sums, no limiting arguments, no case-by-case analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Example: Area Under a Parabola</h2>

      <p className="text-dark-200 mb-6">
        Let's compute <MathInline>{'\\int_0^1 x^2\\,dx'}</MathInline> using the Fundamental Theorem.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Find an antiderivative:</strong> We need{' '}
          <MathInline>{'F\'(x) = x^2'}</MathInline>.
        </p>
        <p className="text-dark-200 mb-4">
          Try <MathInline>{'F(x) = \\frac{x^3}{3}'}</MathInline>. Check:{' '}
          <MathInline>{'F\'(x) = x^2'}</MathInline>. ✓
        </p>
        <p className="text-dark-200 mb-4">
          <strong>Evaluate at endpoints:</strong>
        </p>
        <MathBlock>{`\\int_0^1 x^2\\,dx = F(1) - F(0) = \\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3}`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        Compare this to the Riemann sum calculation from the previous section—the Fundamental
        Theorem gives us the answer in seconds rather than requiring elaborate algebraic
        manipulations.
      </p>

      <Callout type="success">
        <p>
          <strong>The Power:</strong> We transformed an infinite sum into simple arithmetic.
          This is why calculus is so useful—it replaces impossible computations with tractable ones.
        </p>
      </Callout>

      {/* The Connection Visualized */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding the Connection</h2>

      <CardGrid>
        <Card>
          <CardHeader title="Derivative → Integral" />
          <p className="text-sm text-dark-300 mb-2">
            If you differentiate and then integrate, you get back (almost) where you started:
          </p>
          <MathBlock>{`\\int_a^x f'(t)\\,dt = f(x) - f(a)`}</MathBlock>
          <p className="text-xs text-dark-500 mt-2">
            (Up to the initial value <MathInline>{'f(a)'}</MathInline>)
          </p>
        </Card>
        <Card>
          <CardHeader title="Integral → Derivative" />
          <p className="text-sm text-dark-300 mb-2">
            If you integrate and then differentiate, you get back exactly where you started:
          </p>
          <MathBlock>{`\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)`}</MathBlock>
          <p className="text-xs text-dark-500 mt-2">
            (Perfectly, with no ambiguity)
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        Integration and differentiation are <strong>inverse operations</strong>, just as addition
        and subtraction are, or as multiplication and division are. Knowing one tells you about
        the other.
      </p>

      {/* The Net Change Interpretation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Net Change Theorem</h2>

      <p className="text-dark-200 mb-6">
        Part 2 of the Fundamental Theorem has an important interpretation:
      </p>

      <div className="bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-xl p-6 mb-6">
        <MathBlock>{`\\int_a^b F'(x)\\,dx = F(b) - F(a)`}</MathBlock>
        <p className="text-dark-200 mt-4">
          The integral of a rate of change equals the net change. If{' '}
          <MathInline>{'F\'(x)'}</MathInline> tells you how fast <MathInline>{'F'}</MathInline>{' '}
          is changing at each instant, then integrating <MathInline>{'F\''}</MathInline> from{' '}
          <MathInline>{'a'}</MathInline> to <MathInline>{'b'}</MathInline> tells you the total
          change in <MathInline>{'F'}</MathInline> over that interval.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🚗</span>
          <div>
            <p className="font-semibold">Position from Velocity</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'\\int_a^b v(t)\\,dt = x(b) - x(a)'}</MathInline> = displacement
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">👥</span>
          <div>
            <p className="font-semibold">Population from Birth Rate</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'\\int_a^b r(t)\\,dt = P(b) - P(a)'}</MathInline> = population change
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💰</span>
          <div>
            <p className="font-semibold">Wealth from Income</p>
            <p className="text-sm text-dark-400">
              <MathInline>{'\\int_a^b I(t)\\,dt = W(b) - W(a)'}</MathInline> = wealth change
            </p>
          </div>
        </div>
      </div>

      {/* Historical Note */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Historical Perspective</h2>

      <p className="text-dark-200 mb-6">
        Both Newton and Leibniz recognized this connection, though they expressed it differently.
        Newton thought in terms of fluents and fluxions—if you know the fluxion (rate), you can
        recover the fluent (quantity). Leibniz thought in terms of sums and differences—integration
        undoes differentiation.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Catch:</strong> The Fundamental Theorem only helps if you can find an
          antiderivative. For many functions (like <MathInline>{'e^{-x^2}'}</MathInline>),
          no "nice" antiderivative exists. In such cases, we must resort to numerical methods
          or express answers in terms of new special functions.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Part 1: The derivative of an accumulation function is the original integrand. d/dx ∫ₐˣ f(t) dt = f(x).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Part 2: To evaluate a definite integral, find an antiderivative F and compute F(b) - F(a).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Differentiation and integration are inverse operations—each undoes the other.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The integral of a rate of change equals net change—connecting instantaneous rates to cumulative effects.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
