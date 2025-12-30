import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { MobiusTransformDemo } from '@/components/visualizations/chapter8';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2>Reflections and Möbius Transformations</h2>

      <p>
        Now we bring together complex conjugation and linear fractional
        transformations to define <strong>reflections</strong> in hyperbolic
        geometry. These reflections, together with the orientation-preserving
        transformations, generate all isometries of the hyperbolic plane.
      </p>

      <h3>Möbius Transformations</h3>

      <Definition title="Möbius Transformation">
        <p>
          A <strong>Möbius transformation</strong> of the upper half plane is a
          map of one of the two forms:
        </p>
        <MathBlock>{`f(z) = \\frac{az + b}{cz + d} \\quad \\text{(orientation-preserving)}`}</MathBlock>
        <MathBlock>{`f(z) = \\frac{a\\bar{z} + b}{c\\bar{z} + d} \\quad \\text{(orientation-reversing)}`}</MathBlock>
        <p className="mt-2">
          where a, b, c, d are real numbers with ad - bc &gt; 0 for the first
          form and ad - bc &lt; 0 for the second form.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Sign Convention:</strong> The condition on ad - bc ensures that
        the transformation maps the upper half plane to itself. For
        orientation-preserving maps we need ad - bc &gt; 0, and for
        orientation-reversing maps we need ad - bc &lt; 0.
      </Callout>

      <h3>Generating Transformations</h3>

      <p>
        All Möbius transformations can be built from a small set of simple
        generators. This is analogous to how all isometries of the Euclidean
        plane can be built from translations, rotations, and reflections.
      </p>

      <Theorem title="Generators of Möbius Transformations">
        <p>
          Every Möbius transformation of the upper half plane is a composition
          of the following generators:
        </p>
        <div className="mt-3 space-y-2">
          <MathBlock>{`z \\mapsto z + l \\quad \\text{(horizontal translation by } l \\in \\mathbb{R}\\text{)}`}</MathBlock>
          <MathBlock>{`z \\mapsto kz \\quad \\text{(scaling by } k > 0\\text{)}`}</MathBlock>
          <MathBlock>{`z \\mapsto -\\bar{z} \\quad \\text{(reflection in imaginary axis)}`}</MathBlock>
          <MathBlock>{`z \\mapsto \\frac{1}{\\bar{z}} \\quad \\text{(inversion-reflection)}`}</MathBlock>
        </div>
      </Theorem>

      <h3>Understanding the Generators</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Horizontal Translation: z → z + l</h4>
        <p className="text-slate-300">
          This shifts every point horizontally by l units. If z = x + iy, then
          z + l = (x + l) + iy. The imaginary part (height above the x-axis)
          is unchanged.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Scaling: z → kz</h4>
        <p className="text-slate-300">
          This scales distances from the origin by factor k. If z = x + iy, then
          kz = kx + iky. Both real and imaginary parts are multiplied by k.
          This is a dilation centered at the origin.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Reflection in Imaginary Axis: z → -z̄</h4>
        <p className="text-slate-300">
          If z = x + iy, then -z̄ = -x + iy. This reflects points across the
          imaginary axis (the y-axis). Points on the imaginary axis are fixed.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Inversion-Reflection: z → 1/z̄</h4>
        <p className="text-slate-300 mb-2">
          This is a composition of inversion in the unit circle and reflection
          across the real axis. It maps the unit semicircle to itself and
          exchanges points inside and outside the unit circle.
        </p>
        <p className="text-slate-300">
          For example: i → 1/(-i) = -1/i = i (fixed), and 2i → 1/(-2i) = i/2.
        </p>
      </div>

      <MobiusTransformDemo className="my-6" />

      <h3>Reflections in Non-Euclidean Lines</h3>

      <p>
        A <strong>reflection</strong> in a non-Euclidean line L is a Möbius
        transformation that fixes every point on L and reverses orientation.
      </p>

      <Theorem title="Reflection Formulas">
        <p>
          The reflection in a non-Euclidean line is given by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Reflection in vertical line x = a:</strong>
            <MathBlock>{`z \\mapsto -\\bar{z} + 2a = 2a - \\bar{z}`}</MathBlock>
          </li>
          <li>
            <strong>Reflection in semicircle with center c and radius r:</strong>
            <MathBlock>{`z \\mapsto c + \\frac{r^2}{\\bar{z} - c}`}</MathBlock>
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Circle Inversion:</strong> The reflection in a semicircular
        non-Euclidean line is related to "circle inversion" in Euclidean geometry.
        However, the conjugation ensures that the upper half plane maps to itself.
      </Callout>

      <h3>Verification: Reflection in Imaginary Axis</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Checking the Formula</h4>
        <p className="text-slate-300 mb-2">
          The imaginary axis is the vertical line x = 0. The reflection formula
          gives z → 2(0) - z̄ = -z̄.
        </p>
        <p className="text-slate-300 mb-2">
          Let's verify this works:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Points on the imaginary axis: z = iy → -z̄ = -(-iy) = iy ✓ (fixed)</li>
          <li>The map z → -z̄ reverses orientation ✓</li>
          <li>Applying twice: z → -z̄ → -(-z̄)̄ = -(-z) = z ✓ (involution)</li>
        </ul>
      </div>

      <h3>Composition of Reflections</h3>

      <p>
        An important fact, familiar from Euclidean geometry, is that the
        composition of two reflections gives an orientation-preserving
        transformation.
      </p>

      <Theorem title="Two Reflections">
        <p>
          The composition of two reflections in non-Euclidean lines is an
          orientation-preserving Möbius transformation (a hyperbolic motion).
          Conversely, every orientation-preserving Möbius transformation is a
          composition of two reflections.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.3.1</h4>
        <p className="text-slate-300">
          Verify that z → z + l maps the upper half plane to itself.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.3.2</h4>
        <p className="text-slate-300">
          Show that z → kz (for k &gt; 0) maps non-Euclidean lines to
          non-Euclidean lines.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.3.3</h4>
        <p className="text-slate-300">
          Find the image of the point 1 + i under the reflection in the
          non-Euclidean line x = 0 (the imaginary axis).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.3.4</h4>
        <p className="text-slate-300">
          Show that z → 1/z̄ fixes every point on the unit semicircle
          |z| = 1, y &gt; 0.
        </p>
      </div>

      <SectionQuiz
        sectionId={59}
        questions={quizMap[59] || []}
        title="Reflections and Möbius Transformations Quiz"
      />
    </LessonLayout>
  );
}
