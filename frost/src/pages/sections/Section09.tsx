import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Polynomial Encoding</h2>

      <p>
        Shamir's secret sharing encodes a secret as the constant term of a polynomial.
        The key insight: a polynomial of degree <InlineMath>{`t-1`}</InlineMath> is
        uniquely determined by <InlineMath>{`t`}</InlineMath> points.
      </p>

      <Theorem title="Polynomial Uniqueness">
        <p>
          A polynomial of degree <InlineMath>{`t-1`}</InlineMath> is uniquely determined
          by <InlineMath>{`t`}</InlineMath> points.
        </p>
        <p className="mt-2 text-sm text-dark-300">
          Conversely, <InlineMath>{`t-1`}</InlineMath> points leave infinitely many
          degree <InlineMath>{`t-1`}</InlineMath> polynomials consistent with them.
        </p>
      </Theorem>

      <h3>The Sharing Scheme</h3>

      <p>
        To share secret <InlineMath>{`s`}</InlineMath> among <InlineMath>{`n`}</InlineMath> people
        where <InlineMath>{`t`}</InlineMath> are needed to reconstruct:
      </p>

      <Definition title="Shamir Secret Sharing">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>
            <strong>Choose random coefficients:</strong>
            <MathBlock>{`a_1, a_2, \\ldots, a_{t-1} \\xleftarrow{\\$} \\mathbb{Z}_q`}</MathBlock>
          </li>
          <li>
            <strong>Define polynomial:</strong>
            <MathBlock>{`f(x) = s + a_1 x + a_2 x^2 + \\cdots + a_{t-1} x^{t-1}`}</MathBlock>
            <p className="text-sm mt-1">Note: <InlineMath>{`f(0) = s`}</InlineMath> (the secret!)</p>
          </li>
          <li>
            <strong>Generate shares:</strong>
            <MathBlock>{`\\text{Share}_i = (i, f(i)) \\text{ for } i = 1, 2, \\ldots, n`}</MathBlock>
          </li>
        </ol>
      </Definition>

      <Example title="Concrete Example (t=3, n=5)">
        <p>Share secret <InlineMath>{`s = 42`}</InlineMath> among 5 people, threshold 3:</p>

        <div className="mt-4 space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="font-semibold text-indigo-400 mb-2">Step 1: Random coefficients</p>
            <p className="font-mono text-sm">
              <InlineMath>{`a_1 = 17, a_2 = 8`}</InlineMath> (chosen randomly)
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="font-semibold text-indigo-400 mb-2">Step 2: Define polynomial</p>
            <MathBlock>{`f(x) = 42 + 17x + 8x^2`}</MathBlock>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="font-semibold text-indigo-400 mb-2">Step 3: Generate shares</p>
            <div className="font-mono text-sm space-y-1">
              <p>Share 1: <InlineMath>{`(1, f(1)) = (1, 42 + 17 + 8) = (1, 67)`}</InlineMath></p>
              <p>Share 2: <InlineMath>{`(2, f(2)) = (2, 42 + 34 + 32) = (2, 108)`}</InlineMath></p>
              <p>Share 3: <InlineMath>{`(3, f(3)) = (3, 42 + 51 + 72) = (3, 165)`}</InlineMath></p>
              <p>Share 4: <InlineMath>{`(4, f(4)) = (4, 42 + 68 + 128) = (4, 238)`}</InlineMath></p>
              <p>Share 5: <InlineMath>{`(5, f(5)) = (5, 42 + 85 + 200) = (5, 327)`}</InlineMath></p>
            </div>
          </div>
        </div>
      </Example>

      <h3>Key Property</h3>

      <Callout type="important">
        <strong>The Magic:</strong> Any 3 shares can reconstruct <InlineMath>{`f`}</InlineMath>,
        and therefore <InlineMath>{`s = f(0)`}</InlineMath>. But any 2 shares reveal
        <strong> nothing</strong> about <InlineMath>{`s`}</InlineMath>.
      </Callout>

      <h3>Why It Works</h3>

      <p>
        A degree-2 polynomial (like our example) is determined by exactly 3 points:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>3 points:</strong> Uniquely determine the polynomial → can find <InlineMath>{`f(0)`}</InlineMath>
        </li>
        <li>
          <strong>2 points:</strong> Infinitely many degree-2 polynomials pass through them
        </li>
        <li>
          <strong>1 point:</strong> Even more ambiguity
        </li>
      </ul>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Visualization</h4>
        <p className="text-sm">
          Imagine the polynomial as a curve in 2D. Two points don't pin down a parabola -
          infinitely many parabolas pass through any two points. But three non-collinear
          points? Exactly one parabola.
        </p>
      </div>

      <h3>For FROST</h3>

      <p>
        In FROST, we'll use this to share the secret key <InlineMath>{`s`}</InlineMath>:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          Secret key <InlineMath>{`s`}</InlineMath> encoded as <InlineMath>{`f(0)`}</InlineMath>
        </li>
        <li>
          Each participant gets share <InlineMath>{`(i, s_i)`}</InlineMath> where <InlineMath>{`s_i = f(i)`}</InlineMath>
        </li>
        <li>
          Any <InlineMath>{`t`}</InlineMath> participants can sign (using Lagrange interpolation)
        </li>
        <li>
          But they never actually reconstruct <InlineMath>{`s`}</InlineMath>!
        </li>
      </ul>
    </LessonLayout>
  );
}
