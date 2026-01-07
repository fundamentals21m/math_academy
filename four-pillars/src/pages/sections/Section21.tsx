import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { IsometryTransformDemo } from '@/components/visualizations/chapter3';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>The Three Reflections Theorem</h2>

      <p>
        We saw in Section 3.3 that the points equidistant from two points A and B
        form a line. This fact has a powerful consequence for understanding
        isometries of the plane.
      </p>

      <h3>Determination by Three Points</h3>

      <Theorem title="Three Point Determination">
        <p>
          An isometry f of ℝ² is determined by the images f(A), f(B), f(C) of
          three points A, B, C not in a line.
        </p>
      </Theorem>

      <p>
        The proof follows from three simple observations:
      </p>

      <ul className="list-disc list-inside space-y-3 my-4">
        <li>
          <strong>Determination by distances:</strong> Any point P in ℝ² is
          determined by its distances from A, B, C. If Q had the same distances
          from A, B, C as P, then A, B, C would lie in the equidistant line of
          P and Q—contradicting that they're not in a line.
        </li>
        <li>
          <strong>Distance preservation:</strong> The isometry f preserves
          distances, so f(P) lies at the same respective distances from
          f(A), f(B), f(C) as P does from A, B, C.
        </li>
        <li>
          <strong>Uniqueness:</strong> There is only one point at given distances
          from f(A), f(B), f(C) because these three points form a triangle
          congruent to triangle ABC.
        </li>
      </ul>

      <h3>The Three Reflections Theorem</h3>

      <Theorem title="Three Reflections Theorem">
        <p>
          <strong>Any isometry of ℝ² is a combination of one, two, or three reflections.</strong>
        </p>
      </Theorem>

      <h4 className="text-lg font-semibold text-blue-400 mt-6 mb-3">Proof Outline</h4>

      <p>
        Given an isometry f, we choose three points A, B, C not in a line, and
        we look for a combination of reflections that sends A to f(A), B to f(B),
        and C to f(C). Such a combination is necessarily equal to f.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h5 className="font-semibold text-blue-400">Step 1: Move A to f(A)</h5>
          <p className="text-slate-300 mt-2">
            Reflect in the equidistant line of A and f(A). Call this reflection r_A.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h5 className="font-semibold text-green-400">Step 2: Move B to f(B)</h5>
          <p className="text-slate-300 mt-2">
            If r_A(B) ≠ f(B), reflect in the equidistant line of r_A(B) and f(B).
            Since f(A) is equidistant from r_A(B) and f(B), this reflection
            doesn't move f(A).
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h5 className="font-semibold text-yellow-400">Step 3: Move C to f(C)</h5>
          <p className="text-slate-300 mt-2">
            If C hasn't reached f(C) yet, reflect in the line equidistant from
            f(C) and where C has been sent. Both f(A) and f(B) lie on this line,
            so they're not moved.
          </p>
        </div>
      </div>

      <p>
        Thus, we have a combination of at most three reflections that moves
        A to f(A), B to f(B), and C to f(C), as required.
      </p>

      <h3>Classification of Isometries</h3>

      <p>
        The Three Reflections Theorem, combined with our earlier results, gives
        a complete classification:
      </p>

      <Definition title="Classification of Plane Isometries">
        <p>
          An isometry of ℝ² is either:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>A translation</strong> (two reflections in parallel lines)</li>
          <li><strong>A rotation</strong> (two reflections in intersecting lines)</li>
          <li><strong>A glide reflection</strong> (three reflections)</li>
        </ul>
        <p className="mt-2 text-sm text-slate-400">
          Note: A single reflection is a special case of a glide reflection
          (with zero translation).
        </p>
      </Definition>

      <Callout type="important">
        <strong>Identifying Isometry Type:</strong> Given three points A, B, C
        and their images f(A), f(B), f(C), you can determine the type of isometry:
        <ul className="list-disc list-inside mt-2">
          <li>Translation: the triangles ABC and f(A)f(B)f(C) have the same orientation and corresponding sides are parallel</li>
          <li>Rotation: the triangles have the same orientation but sides aren't parallel</li>
          <li>Glide reflection: the triangles have opposite orientations</li>
        </ul>
      </Callout>

      <h3>Orientation</h3>

      <p>
        The key to distinguishing isometry types is <strong>orientation</strong>.
        When you traverse the vertices of a triangle, you go either clockwise
        or counterclockwise. This is the triangle's orientation.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Translations and rotations <strong>preserve</strong> orientation</li>
        <li>Reflections and glide reflections <strong>reverse</strong> orientation</li>
      </ul>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.7.1</h4>
        <p className="text-slate-300">
          Suppose that f(A) = (1.4, 2), f(B) = (1.4, 1), and f(C) = (2.4, 1),
          where A = (0, 1), B = (0, 0), C = (1, 0). Is f a translation or a
          rotation? How can you tell that f is not a glide reflection?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.7.2</h4>
        <p className="text-slate-300">
          Suppose that f(A) = (0.4, 1.8), f(B) = (1, 1), and f(C) = (1.8, 1.6).
          We can tell that f is not a translation or glide reflection (hence,
          it must be a rotation). How?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.7.3</h4>
        <p className="text-slate-300">
          Suppose that f(A) = (1.8, 1.6), f(B) = (1, 1), and f(C) = (0.4, 1.8).
          How do I know that this is a glide reflection?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.7.4</h4>
        <p className="text-slate-300">
          State a simple test for telling whether f is a translation, rotation,
          or glide reflection from the positions of f(A), f(B), and f(C).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.5</h4>
        <p className="text-slate-300">
          Show that reflections in lines L, M, and N (in that order) have the
          same outcome as reflections in lines L', M', and N, where M' is
          perpendicular to N.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.6</h4>
        <p className="text-slate-300">
          Deduce from the previous exercises that the combination of any three
          reflections is a glide reflection.
        </p>
      </div>

      <IsometryTransformDemo className="my-6" />

      <SectionQuiz
        sectionId={21}
        questions={quizMap[21] || []}
        title="Three Reflections Quiz"
      />
    </LessonLayout>
  );
}
