import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Next Stage: What to Do with Constants</h2>

      <p>
        In our previous examples, we worked with bare powers of x. Now we must learn
        what happens when constants appear in our expressions—either as multipliers
        or as added terms.
      </p>

      <h2>Constants as Multipliers</h2>

      <p>
        Suppose we have y = ax^n, where a is a constant. What is dy/dx?
      </p>

      <MathBlock latex="y = ax^n" />
      <MathBlock latex="y + dy = a(x + dx)^n = a(x^n + nx^{n-1} \cdot dx + \ldots)" />

      <p>After subtracting y = axⁿ and dropping higher-order terms:</p>

      <MathBlock latex="dy = a \cdot nx^{n-1} \cdot dx" />

      <MathBlock latex="\frac{dy}{dx} = anx^{n-1}" />

      <Callout type="info">
        <strong>Rule:</strong> A constant multiplier remains unchanged when you
        differentiate. Just bring it along for the ride!
      </Callout>

      <h2>Example Problems</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">If y = 5x³, then:</p>
          <MathBlock latex="\frac{dy}{dx} = 5 \times 3x^2 = 15x^2" />
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">If y = 7x⁴, then:</p>
          <MathBlock latex="\frac{dy}{dx} = 7 \times 4x^3 = 28x^3" />
        </div>
      </div>

      <h2>Added Constants</h2>

      <p>
        What if we have y = x² + a, where a is a constant? Let's differentiate:
      </p>

      <MathBlock latex="y + dy = (x + dx)^2 + a = x^2 + 2x \cdot dx + (dx)^2 + a" />

      <p>Since y = x² + a, subtracting gives:</p>

      <MathBlock latex="dy = 2x \cdot dx" />

      <MathBlock latex="\frac{dy}{dx} = 2x" />

      <Callout type="info">
        <strong>Rule:</strong> Added constants vanish when you differentiate! They
        contribute nothing to the rate of change.
      </Callout>

      <h2>Why Constants Vanish</h2>

      <p>
        This makes perfect sense: a constant doesn't change, so it doesn't contribute
        to the <em>rate of change</em>. Think of it this way: if you're measuring how
        fast a car is accelerating, it doesn't matter whether the car started at sea
        level or on a mountain—only the <em>change</em> matters.
      </p>

      <h2>Combined Examples</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">If y = 3x² + 7, then:</p>
          <MathBlock latex="\frac{dy}{dx} = 6x" />
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">If y = ax² + bx + c, then:</p>
          <MathBlock latex="\frac{dy}{dx} = 2ax + b" />
        </div>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> When differentiating: (1) constant multipliers stay
        the same, (2) added constants disappear. The derivative of a constant alone is zero.
      </Callout>
    </LessonLayout>
  );
}
