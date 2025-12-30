import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Three Reflections or Two Involutions</h2>

      <p>
        In Euclidean geometry, we proved the "three reflections theorem": every
        isometry is a composition of at most three reflections. The same theorem
        holds in hyperbolic geometry, and there's an elegant related result
        involving <strong>involutions</strong>.
      </p>

      <h3>The Three Reflections Theorem</h3>

      <Theorem title="Three Reflections Theorem (Hyperbolic)">
        <p>
          Every Möbius transformation of the upper half plane (orientation-preserving
          or orientation-reversing) is a composition of at most three reflections
          in non-Euclidean lines.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">The Count</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            <strong>One reflection:</strong> Orientation-reversing, fixes a line
          </li>
          <li>
            <strong>Two reflections:</strong> Orientation-preserving (translation,
            rotation, or limit rotation)
          </li>
          <li>
            <strong>Three reflections:</strong> Orientation-reversing, no fixed
            line (glide reflection)
          </li>
        </ul>
      </div>

      <h3>Involutions</h3>

      <p>
        An involution is a transformation that is its own inverse — applying it
        twice returns to the original.
      </p>

      <Definition title="Involution">
        <p>
          A transformation f is an <strong>involution</strong> if f ∘ f = id,
          that is, f(f(z)) = z for all z.
        </p>
      </Definition>

      <p>
        Every reflection is an involution. But there are orientation-preserving
        involutions as well.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Half-Turns</h4>
        <p className="text-slate-300 mb-2">
          A <strong>half-turn</strong> (rotation by π, or 180°) is an
          orientation-preserving involution. For example:
        </p>
        <MathBlock>{`f(z) = \\frac{-z + 2i}{1} = -z + 2i`}</MathBlock>
        <p className="text-slate-300 mt-2">
          is a half-turn about the point i. Applying it twice gives
          f(f(z)) = -(-z + 2i) + 2i = z.
        </p>
      </div>

      <Callout type="info">
        <strong>Fixed Points:</strong> A reflection fixes every point on a line.
        A half-turn fixes a single point (its center). These are the two types
        of orientation-preserving involutions in hyperbolic geometry.
      </Callout>

      <h3>The Two Involutions Theorem</h3>

      <p>
        There's a beautiful theorem stating that orientation-preserving Möbius
        transformations can always be decomposed into two involutions (either
        half-turns or compositions).
      </p>

      <Theorem title="Two Involutions Theorem">
        <p>
          Every orientation-preserving Möbius transformation is a product of two
          involutions.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Case Analysis</h4>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>
            <strong>Hyperbolic translation:</strong> Product of two half-turns
            about points on the axis of translation
          </li>
          <li>
            <strong>Elliptic rotation:</strong> Product of two half-turns, one
            at the center and one at an appropriate point
          </li>
          <li>
            <strong>Parabolic transformation:</strong> Product of two half-turns
            about points on the same horocycle
          </li>
        </ul>
      </div>

      <h3>Translations as Products of Half-Turns</h3>

      <p>
        Let's verify this for hyperbolic translations along the imaginary axis.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example</h4>
        <p className="text-slate-300 mb-2">
          Consider the translation z → kz for k &gt; 1. Let P₁ = i and P₂ = √k · i.
          The half-turn about i is h₁(z) = -z + 2i... actually, for the correct
          formula, the half-turn about Pi on the imaginary axis is:
        </p>
        <MathBlock>{`h_P(z) = \\frac{-P^2}{z}`}</MathBlock>
        <p className="text-slate-300 mt-2">
          Then h₂ ∘ h₁(z) = h₂(-1/z) maps i to ki, giving the translation.
        </p>
      </div>

      <h3>Connection to Projective Geometry</h3>

      <p>
        The two involutions theorem is related to the projective line. Recall
        that Möbius transformations are the transformations of ℝP¹ (the projective
        line). An involution on ℝP¹ swaps pairs of points, and any Möbius
        transformation can be written as a composition of two such swaps.
      </p>

      <Theorem title="Involutions on the Projective Line">
        <p>
          An involution on ℝP¹ either:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fixes two points (and swaps the rest in pairs), or</li>
          <li>Has no fixed points (swaps all points in pairs)</li>
        </ul>
        <p className="mt-2">
          The first type corresponds to half-turns, the second to certain
          "point-free" involutions.
        </p>
      </Theorem>

      <h3>Generating the Isometry Group</h3>

      <p>
        These decomposition theorems show that the isometry group of the hyperbolic
        plane is generated by a simple class of transformations.
      </p>

      <Theorem title="Generators">
        <p>
          The group of all Möbius transformations of the upper half plane is
          generated by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Reflections in non-Euclidean lines, or equivalently</li>
          <li>Half-turns about points</li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Minimal Generators:</strong> In fact, reflections in just two
        non-Euclidean lines that intersect at any angle generate a dense subgroup.
        If the angle is a rational multiple of π, they generate a discrete
        (triangle) group.
      </Callout>

      <h3>Comparison of Decomposition Theorems</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 text-blue-400">Theorem</th>
              <th className="text-left py-2 text-blue-400">Building Blocks</th>
              <th className="text-left py-2 text-blue-400">Maximum Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Three Reflections</td>
              <td className="py-2">Reflections (orientation-reversing)</td>
              <td className="py-2">3</td>
            </tr>
            <tr>
              <td className="py-2">Two Involutions</td>
              <td className="py-2">Involutions (incl. half-turns)</td>
              <td className="py-2">2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.8.1</h4>
        <p className="text-slate-300">
          Verify that the composition of two reflections in parallel non-Euclidean
          lines (lines with the same endpoint at infinity) is a parabolic
          transformation.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.8.2</h4>
        <p className="text-slate-300">
          Show that the composition of two reflections in intersecting non-Euclidean
          lines is an elliptic transformation (rotation) about their intersection
          point.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.8.3</h4>
        <p className="text-slate-300">
          Show that the half-turn about i is given by h(z) = -1/z, and verify
          that h(h(z)) = z.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.8.4</h4>
        <p className="text-slate-300">
          Express the translation z → z + 2 as a product of two half-turns.
        </p>
      </div>

      <SectionQuiz
        sectionId={64}
        questions={quizMap[64] || []}
        title="Three Reflections or Two Involutions Quiz"
      />
    </LessonLayout>
  );
}
