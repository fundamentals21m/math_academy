import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { IsometryGroupDemo } from '@/components/visualizations/chapter7';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2>The Group of Isometries of the Plane</h2>

      <p>
        In this chapter, we go back to the ideas of Felix Klein and take another
        look at what we have learned from the viewpoint of transformation groups.
        We have seen that different kinds of transformation group determine different
        kinds of geometry—Euclidean, affine, or projective—depending on whether the
        transformations preserve length, parallelism, or collinearity.
      </p>

      <Callout type="info">
        <strong>Klein's Vision:</strong> Felix Klein proposed in 1872 that each
        type of geometry can be characterized by its group of transformations.
        The properties of each geometry are precisely those preserved by its
        transformation group.
      </Callout>

      <h3>Definition of Isometries</h3>

      <Definition title="Isometry">
        <p>
          An <strong>isometry</strong> of the Euclidean plane ℝ² is a function
          f : ℝ² → ℝ² that preserves distance. That is, for any two points P and Q:
        </p>
        <MathBlock>{`|f(P) - f(Q)| = |P - Q|`}</MathBlock>
        <p className="mt-2">
          In other words, isometries are distance-preserving maps.
        </p>
      </Definition>

      <p>
        The isometries of ℝ² form a group under composition of functions, called
        the <strong>isometry group</strong> of the plane. We denote this group by
        Isom(ℝ²).
      </p>

      <h3>The Group Structure</h3>

      <p>
        A <strong>group of transformations</strong> of a space S is a collection G
        of functions on S with the following properties:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>If f, g ∈ G, then fg ∈ G (closure under composition)</li>
          <li>If f ∈ G, then f⁻¹ ∈ G (closure under inverses)</li>
        </ul>
      </div>

      <p>
        The "product" fg of f and g is the composite function, defined by
        fg(x) = f(g(x)). Composition is always associative: (fg)h = f(gh).
      </p>

      <h3>Types of Isometries</h3>

      <p>
        The isometries of the plane fall into several important types:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Basic Isometries</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Reflections:</strong> Mirror reflections in a line L. A reflection
            fixes every point on L and maps each point P not on L to a point P' such
            that L is the perpendicular bisector of PP'.
          </li>
          <li>
            <strong>Rotations:</strong> Rotation about a point O through an angle θ.
            Every point moves along a circular arc centered at O.
          </li>
          <li>
            <strong>Translations:</strong> Shifting every point by a fixed vector v.
            The map P → P + v.
          </li>
          <li>
            <strong>Glide reflections:</strong> A reflection followed by a translation
            parallel to the line of reflection.
          </li>
        </ul>
      </div>

      <Theorem title="Classification of Isometries"
        proof={
          <>
            <p>Let f be an isometry of ℝ². We analyze f based on its fixed points.</p>
            <p className="mt-2"><strong>Case 1: f has no fixed points.</strong></p>
            <p>If f is orientation-preserving with no fixed points, then f is a translation. (A rotation with no fixed point would be a contradiction since rotations about any point have that point fixed.)</p>
            <p className="mt-2">If f is orientation-reversing with no fixed points, then f is a glide reflection: the composition of a reflection and a translation parallel to the reflection line.</p>
            <p className="mt-2"><strong>Case 2: f has exactly one fixed point O.</strong></p>
            <p>Then f must be a rotation about O. Every point P ≠ O satisfies |f(P) - O| = |P - O| (distance to O is preserved), so P moves on a circle centered at O.</p>
            <p className="mt-2"><strong>Case 3: f has more than one fixed point.</strong></p>
            <p>If f fixes two points A and B, then f fixes every point on line AB (since distances from A and B uniquely determine each point). If f is the identity, it's rotation by 0°. If f is not the identity, it must reverse orientation and is a reflection in line AB.</p>
            <p className="mt-2">These cases are exhaustive: orientation-preserving isometries are rotations or translations; orientation-reversing isometries are reflections or glide reflections.</p>
          </>
        }
      >
        <p>
          Every isometry of the plane is one of the following:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A rotation (including the identity, which is rotation by 0°)</li>
          <li>A translation</li>
          <li>A reflection</li>
          <li>A glide reflection</li>
        </ul>
      </Theorem>

      <h3>Orientation-Preserving Isometries</h3>

      <Definition title="Orientation">
        <p>
          An isometry is <strong>orientation-preserving</strong> if it maps a
          counterclockwise triple of points to a counterclockwise triple. Otherwise,
          it is <strong>orientation-reversing</strong>.
        </p>
      </Definition>

      <p>
        The orientation-preserving isometries form a subgroup of Isom(ℝ²), denoted
        Isom⁺(ℝ²). This subgroup consists exactly of the rotations and translations.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Orientation Classification</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Orientation-preserving:</strong> Rotations and translations</li>
          <li><strong>Orientation-reversing:</strong> Reflections and glide reflections</li>
        </ul>
      </div>

      <h3>Products of Reflections</h3>

      <p>
        A fundamental fact about isometries is that they can all be expressed as
        products of reflections.
      </p>

      <Theorem title="Three Reflections Theorem"
        proof={
          <>
            <p>We prove that each type of isometry can be expressed using at most three reflections.</p>
            <p className="mt-2"><strong>Reflection:</strong> This is one reflection by definition.</p>
            <p className="mt-2"><strong>Rotation about O through angle θ:</strong> Choose any line L₁ through O. Let L₂ be the line through O making angle θ/2 with L₁. The reflection in L₂ followed by reflection in L₁ produces a rotation about O through angle θ. (Two reflections.)</p>
            <p className="mt-2"><strong>Translation by vector v:</strong> Let L₁ be any line perpendicular to v. Let L₂ be the parallel line at distance |v|/2 in the direction of v. The product of reflections in L₁ then L₂ is a translation by v. (Two reflections.)</p>
            <p className="mt-2"><strong>Glide reflection:</strong> A glide reflection is a reflection in a line L followed by a translation parallel to L. The translation can be written as two reflections (in lines perpendicular to L), giving three reflections total.</p>
            <p className="mt-2"><strong>Counting reflections and orientation:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>One reflection: orientation-reversing</li>
              <li>Two reflections: orientation-preserving (since reversing twice preserves)</li>
              <li>Three reflections: orientation-reversing</li>
            </ul>
            <p className="mt-2">This matches: rotations/translations (orientation-preserving) need even number; reflections/glide reflections (orientation-reversing) need odd number.</p>
          </>
        }
      >
        <p>
          Every isometry of the plane is a product of at most three reflections.
        </p>
        <p className="mt-2 text-slate-300">
          Moreover:
        </p>
        <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
          <li>A product of two reflections is a rotation or translation</li>
          <li>A product of one or three reflections is a reflection or glide reflection</li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Key Insight:</strong> When two reflection lines intersect at a point O
        with angle θ between them, their product is a rotation about O through angle 2θ.
        When two reflection lines are parallel, their product is a translation perpendicular
        to the lines by twice the distance between them.
      </Callout>

      <h3>The Rotation Subgroup</h3>

      <p>
        The rotations about a fixed point O form a subgroup of Isom⁺(ℝ²). This is
        because the product of two rotations about O is another rotation about O,
        and the inverse of a rotation about O is also a rotation about O.
      </p>

      <MathBlock>{`r_{\\theta_1} \\circ r_{\\theta_2} = r_{\\theta_1 + \\theta_2}`}</MathBlock>

      <p>
        The group of all rotations about O is isomorphic to the circle group S¹,
        also known as SO(2).
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.1.1</h4>
        <p className="text-slate-300">
          Prove that the product of reflections in two lines meeting at angle θ is
          a rotation through angle 2θ.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.1.2</h4>
        <p className="text-slate-300">
          Prove that the product of reflections in two parallel lines at distance d
          apart is a translation through distance 2d.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.1.3</h4>
        <p className="text-slate-300">
          Show that the product of a rotation about O and a translation is a rotation
          about some other point O'.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.1.4</h4>
        <p className="text-slate-300">
          Show that a rotation is a product of two reflections, and hence that every
          orientation-preserving isometry is a product of two reflections.
        </p>
      </div>

      <IsometryGroupDemo className="my-6" />

      <SectionQuiz
        sectionId={48}
        questions={quizMap[48] || []}
        title="The Group of Isometries of the Plane Quiz"
      />
    </LessonLayout>
  );
}
