import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>How to Deal with Sines and Cosines</h2>

      <p>
        Trigonometric functions are essential in physics, engineering, and anywhere
        waves or cycles appear. Let's learn how to differentiate them.
      </p>

      <Callout type="info">
        <strong>Key Results:</strong> The derivatives of sine and cosine have a
        beautiful symmetry—each becomes the other (with a sign change for cosine).
      </Callout>

      <h2>The Derivative of sin(x)</h2>

      <p>
        Using the definition of the derivative and some trigonometric identities, we
        can show that:
      </p>

      <MathBlock latex="\frac{d}{dx}\sin(x) = \cos(x)" />

      <h2>The Derivative of cos(x)</h2>

      <p>Similarly:</p>

      <MathBlock latex="\frac{d}{dx}\cos(x) = -\sin(x)" />

      <p>Note the negative sign! Cosine decreases where sine is positive.</p>

      <h2>The Complete Cycle</h2>

      <p>
        If we keep differentiating, we return to where we started after four steps:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <MathBlock latex="\sin(x) \xrightarrow{d/dx} \cos(x) \xrightarrow{d/dx} -\sin(x) \xrightarrow{d/dx} -\cos(x) \xrightarrow{d/dx} \sin(x)" />
      </div>

      <h2>Other Trigonometric Derivatives</h2>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>d/dx tan(x) = sec²(x)</li>
        <li>d/dx cot(x) = -csc²(x)</li>
        <li>d/dx sec(x) = sec(x)tan(x)</li>
        <li>d/dx csc(x) = -csc(x)cot(x)</li>
      </ul>

      <h2>Chain Rule with Trig Functions</h2>

      <p>
        For composite functions like sin(3x) or cos(x²), use the chain rule:
      </p>

      <MathBlock latex="\frac{d}{dx}\sin(3x) = \cos(3x) \times 3 = 3\cos(3x)" />

      <MathBlock latex="\frac{d}{dx}\cos(x^2) = -\sin(x^2) \times 2x = -2x\sin(x^2)" />

      <Callout type="success">
        <strong>Remember:</strong> Sine and cosine derivatives cycle through each
        other. The chain rule applies when the argument isn't simply x. These functions
        describe everything from sound waves to planetary orbits!
      </Callout>
    </LessonLayout>
  );
}
