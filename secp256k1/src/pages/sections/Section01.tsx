import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { EllipticCurvePlotter, PointAdditionVisualizer } from '@/components/visualizations';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Curves Over Real Numbers</h2>

      <p className="mb-4">
        Before diving into finite fields (where cryptography actually lives), let's build
        geometric intuition by working with elliptic curves over the real numbers. The
        operations work the same way—they're just easier to visualize.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Curve Equation</h3>

      <Definition title="Weierstrass Form">
        <p>
          An elliptic curve in <strong>short Weierstrass form</strong> is defined by:
        </p>
        <MathBlock>
          {`y^2 = x^3 + ax + b`}
        </MathBlock>
        <p className="mt-2">
          For secp256k1: <InlineMath>a = 0</InlineMath>, <InlineMath>b = 7</InlineMath>, giving:
        </p>
        <MathBlock>
          {`y^2 = x^3 + 7`}
        </MathBlock>
      </Definition>

      <Callout type="info" title="Non-Singular Condition">
        <p>
          For a valid elliptic curve, we need <InlineMath>{`4a^3 + 27b^2 \\neq 0`}</InlineMath>.
          This ensures the curve has no cusps or self-intersections. For secp256k1:{' '}
          <InlineMath>{`4(0)^3 + 27(7)^2 = 1323 \\neq 0`}</InlineMath>.
        </p>
      </Callout>

      <EllipticCurvePlotter className="my-8" />

      <Example title="Points on secp256k1">
        <p>Let's verify some points on <InlineMath>y^2 = x^3 + 7</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>x = 2</InlineMath>: <InlineMath>y^2 = 8 + 7 = 15</InlineMath>,
            so <InlineMath>y \approx \pm 3.873</InlineMath>
          </li>
          <li>
            <InlineMath>x = -1</InlineMath>: <InlineMath>y^2 = -1 + 7 = 6</InlineMath>,
            so <InlineMath>y \approx \pm 2.449</InlineMath>
          </li>
          <li>
            <InlineMath>x = 1</InlineMath>: <InlineMath>y^2 = 1 + 7 = 8</InlineMath>,
            so <InlineMath>y \approx \pm 2.828</InlineMath>
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Point Addition: Geometric Construction</h3>

      <p className="mb-4">
        The key operation on elliptic curves is <strong>point addition</strong>. Given two
        points <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath>, we compute{' '}
        <InlineMath>P + Q</InlineMath> geometrically:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="list-decimal list-inside space-y-3">
          <li>Draw a line through <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath></li>
          <li>Find the third intersection point with the curve (call it <InlineMath>R'</InlineMath>)</li>
          <li>Reflect <InlineMath>R'</InlineMath> across the x-axis to get <InlineMath>R = P + Q</InlineMath></li>
        </ol>
      </div>

      <Definition title="Point Addition Formula">
        <p>
          For <InlineMath>P = (x_1, y_1)</InlineMath> and <InlineMath>Q = (x_2, y_2)</InlineMath>
          with <InlineMath>P \neq Q</InlineMath>:
        </p>
        <MathBlock>
          {`\\lambda = \\frac{y_2 - y_1}{x_2 - x_1}`}
        </MathBlock>
        <MathBlock>
          {`x_3 = \\lambda^2 - x_1 - x_2`}
        </MathBlock>
        <MathBlock>
          {`y_3 = \\lambda(x_1 - x_3) - y_1`}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>P + Q = (x_3, y_3)</InlineMath>.
        </p>
      </Definition>

      <PointAdditionVisualizer className="my-8" />

      <Example title="Worked Example: Point Addition">
        <p>
          Let <InlineMath>P = (2, 3.873)</InlineMath> and <InlineMath>Q = (-1, 2.449)</InlineMath>.
        </p>
        <div className="mt-3 space-y-2 font-mono text-sm">
          <p>
            <InlineMath>{`\\lambda = \\frac{2.449 - 3.873}{-1 - 2} = \\frac{-1.424}{-3} = 0.475`}</InlineMath>
          </p>
          <p>
            <InlineMath>{`x_3 = 0.475^2 - 2 - (-1) = 0.226 - 1 = -0.774`}</InlineMath>
          </p>
          <p>
            <InlineMath>{`y_3 = 0.475(2 - (-0.774)) - 3.873 = 1.317 - 3.873 = -2.556`}</InlineMath>
          </p>
        </div>
        <p className="mt-3">
          So <InlineMath>P + Q \approx (-0.774, -2.556)</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Point Doubling</h3>

      <p className="mb-4">
        When <InlineMath>P = Q</InlineMath>, we can't draw a line through two points.
        Instead, we use the <strong>tangent line</strong> at <InlineMath>P</InlineMath>.
      </p>

      <Definition title="Point Doubling Formula">
        <p>
          For <InlineMath>P = (x_1, y_1)</InlineMath> with <InlineMath>y_1 \neq 0</InlineMath>:
        </p>
        <MathBlock>
          {`\\lambda = \\frac{3x_1^2 + a}{2y_1}`}
        </MathBlock>
        <p className="mt-2">
          For secp256k1 (<InlineMath>a = 0</InlineMath>):
        </p>
        <MathBlock>
          {`\\lambda = \\frac{3x_1^2}{2y_1}`}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>x_3</InlineMath> and <InlineMath>y_3</InlineMath> are computed
          the same way as point addition.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Point at Infinity</h3>

      <p className="mb-4">
        What happens when the line is vertical (no third intersection)? We need an
        <strong>identity element</strong>, called the <strong>point at infinity</strong>{' '}
        <InlineMath>\mathcal{'{O}'}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-amber-400 font-bold mb-2">Properties of <InlineMath>\mathcal{'{O}'}</InlineMath></p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><InlineMath>P + \mathcal{'{O}'} = P</InlineMath> (identity)</li>
          <li><InlineMath>P + (-P) = \mathcal{'{O}'}</InlineMath> where <InlineMath>-P = (x, -y)</InlineMath></li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scalar Multiplication</h3>

      <p className="mb-4">
        <strong>Scalar multiplication</strong> means adding a point to itself repeatedly:
      </p>

      <MathBlock>
        {`nP = \\underbrace{P + P + \\cdots + P}_{n \\text{ times}}`}
      </MathBlock>

      <Definition title="Double-and-Add Algorithm">
        <p>
          To compute <InlineMath>nP</InlineMath> efficiently (in <InlineMath>O(\log n)</InlineMath> operations):
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>1: Write <InlineMath>n</InlineMath> in binary: <InlineMath>n = (b_k b_{'{k-1}'} \ldots b_1 b_0)_2</InlineMath></p>
          <p>2: Start with <InlineMath>R = \mathcal{'{O}'}</InlineMath></p>
          <p>3: For <InlineMath>i = k</InlineMath> down to <InlineMath>0</InlineMath>:</p>
          <p className="pl-4">- Double: <InlineMath>R = 2R</InlineMath></p>
          <p className="pl-4">- If <InlineMath>b_i = 1</InlineMath>: Add: <InlineMath>R = R + P</InlineMath></p>
          <p>4: Return <InlineMath>R</InlineMath></p>
        </div>
      </Definition>

      <Example title="Computing 5P">
        <p>
          <InlineMath>5 = 101_2</InlineMath> (binary), so:
        </p>
        <div className="mt-2 space-y-1 text-sm">
          <p>Start: <InlineMath>R = \mathcal{'{O}'}</InlineMath></p>
          <p>Bit 1: Double (<InlineMath>\mathcal{'{O}'}</InlineMath>), Add P → <InlineMath>R = P</InlineMath></p>
          <p>Bit 0: Double → <InlineMath>R = 2P</InlineMath>, no add</p>
          <p>Bit 1: Double → <InlineMath>R = 4P</InlineMath>, Add P → <InlineMath>R = 5P</InlineMath></p>
        </div>
        <p className="mt-2 text-dark-400">
          Only 4 operations instead of 5 additions!
        </p>
      </Example>

      <Callout type="success" title="The One-Way Property Emerges">
        <p>
          Given <InlineMath>G</InlineMath> and <InlineMath>Q = nG</InlineMath>, computing{' '}
          <InlineMath>n</InlineMath> requires trying all possibilities—there's no shortcut.
          This is the <strong>discrete logarithm problem</strong> on elliptic curves.
        </p>
      </Callout>
    </LessonLayout>
  );
}
