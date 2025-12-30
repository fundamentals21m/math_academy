import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2>Non-Euclidean Translations and Rotations</h2>

      <p>
        In Euclidean geometry, the orientation-preserving isometries are
        translations and rotations. Hyperbolic geometry has analogous
        transformations, but they behave quite differently. In addition,
        hyperbolic geometry has a third type called <strong>limit rotations</strong>
        or <strong>parabolic transformations</strong>.
      </p>

      <h3>Classification of Möbius Transformations</h3>

      <p>
        Every orientation-preserving Möbius transformation f(z) = (az + b)/(cz + d)
        can be classified by its fixed points on ℝ ∪ {'{'}∞{'}'}.
      </p>

      <Definition title="Types of Möbius Transformations">
        <p>
          An orientation-preserving Möbius transformation is:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Hyperbolic (translation)</strong> if it has two fixed points
            on ℝ ∪ {'{'}∞{'}'}
          </li>
          <li>
            <strong>Elliptic (rotation)</strong> if it has one fixed point in the
            upper half plane (and its conjugate below)
          </li>
          <li>
            <strong>Parabolic (limit rotation)</strong> if it has exactly one
            fixed point, on ℝ ∪ {'{'}∞{'}'}
          </li>
        </ul>
      </Definition>

      <h3>Hyperbolic Translations</h3>

      <p>
        A hyperbolic translation moves points along a non-Euclidean line, just
        as a Euclidean translation moves points along a straight line.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example: z → kz</h4>
        <p className="text-slate-300 mb-2">
          The transformation z → kz (for k &gt; 1) is a hyperbolic translation
          along the imaginary axis.
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Fixed points: 0 and ∞ (both on the boundary)</li>
          <li>The imaginary axis is the "axis" of the translation</li>
          <li>Points are moved away from 0 toward ∞</li>
          <li>The translation distance is log k</li>
        </ul>
      </div>

      <Theorem title="Axes of Translations">
        <p>
          Every hyperbolic translation has an <strong>axis</strong>: the unique
          non-Euclidean line connecting its two fixed points. Points on the axis
          are moved along the axis. Points off the axis move along curves called
          <strong> hypercycles</strong> (equidistant curves from the axis).
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">General Hyperbolic Translation</h4>
        <p className="text-slate-300">
          A hyperbolic translation with axis L (connecting points a and b on the
          boundary) and translation distance d can be written as:
        </p>
        <MathBlock>{`f(z) = \\frac{e^d(z-a) - e^{-d}(z-b)\\cdot k}{(z-a) - (z-b)\\cdot k}`}</MathBlock>
        <p className="text-slate-300 mt-2">
          for appropriate constants. The key property is that f moves each point
          on L by hyperbolic distance d along L.
        </p>
      </div>

      <h3>Elliptic Rotations</h3>

      <p>
        An elliptic transformation (hyperbolic rotation) has a fixed point in
        the upper half plane and rotates other points around it.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example: Rotation about i</h4>
        <p className="text-slate-300 mb-2">
          The transformation
        </p>
        <MathBlock>{`f(z) = \\frac{z\\cos\\theta - \\sin\\theta}{z\\sin\\theta + \\cos\\theta}`}</MathBlock>
        <p className="text-slate-300 mt-2">
          is a rotation by angle 2θ about the point i. This can be verified by
          checking that f(i) = i.
        </p>
      </div>

      <Theorem title="Hyperbolic Circles">
        <p>
          Under a hyperbolic rotation about center P, points move along
          <strong> hyperbolic circles</strong> centered at P. A hyperbolic circle
          looks like a Euclidean circle, but its Euclidean center is generally
          not at P.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Angle Preservation:</strong> Since Möbius transformations are
        conformal, the angle of rotation is well-defined: it equals the Euclidean
        angle of rotation at the fixed point.
      </Callout>

      <h3>Parabolic Transformations (Limit Rotations)</h3>

      <p>
        The third type of isometry is unique to hyperbolic geometry. It has a
        single fixed point on the boundary and can be thought of as a "rotation
        about a point at infinity."
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example: z → z + 1</h4>
        <p className="text-slate-300 mb-2">
          The horizontal translation z → z + 1 is a parabolic transformation.
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Fixed point: only ∞</li>
          <li>Points move along horocycles (horizontal lines y = c)</li>
          <li>No axis connects to a second fixed point</li>
        </ul>
      </div>

      <Definition title="Horocycles">
        <p>
          A <strong>horocycle</strong> is a curve in the hyperbolic plane that
          is tangent to the boundary at a single point. In the upper half plane
          model:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Horocycles tangent to ∞ are horizontal lines y = c</li>
          <li>
            Horocycles tangent to a point a ∈ ℝ are circles tangent to ℝ at a
            (lying entirely in the upper half plane)
          </li>
        </ul>
      </Definition>

      <Callout type="warning">
        <strong>Neither Circles nor Lines:</strong> Horocycles are neither
        hyperbolic circles (which have a center in the interior) nor hyperbolic
        lines (which meet the boundary at two points or one point orthogonally).
        They are a third type of curve unique to hyperbolic geometry.
      </Callout>

      <h3>Comparison with Euclidean Geometry</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 text-blue-400">Euclidean</th>
              <th className="text-left py-2 text-blue-400">Hyperbolic</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Translation along a line</td>
              <td className="py-2">Hyperbolic translation along a geodesic</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Rotation about a point</td>
              <td className="py-2">Elliptic transformation (rotation about interior point)</td>
            </tr>
            <tr>
              <td className="py-2">—</td>
              <td className="py-2">Parabolic transformation (no Euclidean analogue)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The Trace Criterion</h3>

      <p>
        There's an elegant algebraic way to classify Möbius transformations.
      </p>

      <Theorem title="Classification by Trace">
        <p>
          For f(z) = (az + b)/(cz + d) with ad - bc = 1, let τ = a + d (the trace).
          Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>|τ| &gt; 2: hyperbolic (translation)</li>
          <li>|τ| &lt; 2: elliptic (rotation)</li>
          <li>|τ| = 2: parabolic (limit rotation)</li>
        </ul>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.7.1</h4>
        <p className="text-slate-300">
          Verify that z → 2z has fixed points 0 and ∞, making it a hyperbolic
          translation.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.7.2</h4>
        <p className="text-slate-300">
          Show that z → z + 1 has only one fixed point (∞), making it parabolic.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.7.3</h4>
        <p className="text-slate-300">
          Find the fixed points of f(z) = (z cos θ - sin θ)/(z sin θ + cos θ)
          and verify that i is fixed.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.7.4</h4>
        <p className="text-slate-300">
          Show that horizontal lines y = c are horocycles by verifying they are
          orthogonal to all vertical non-Euclidean lines.
        </p>
      </div>

      <SectionQuiz
        sectionId={63}
        questions={quizMap[63] || []}
        title="Non-Euclidean Translations and Rotations Quiz"
      />
    </LessonLayout>
  );
}
