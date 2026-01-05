import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section24Questions } from '../../data/quizzes';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-semibold mb-4">Isometries of the Euclidean Plane</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Isometries of the Euclidean plane are actually not much more complicated
        than reflection, though this is not clear from the bare definition. The
        situation is crucially simplified by a fundamental property.
      </p>

      {/* Basic Property */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Basic Property</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Key Theorem
        </h4>
        <p className="text-dark-200">
          An isometry is <strong>determined</strong> by the images of three
          points not in a line.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This theorem is based on the property that each point is determined by
        its distances from three non-collinear points. If t is any isometry and
        A, B, C are vertices of an equilateral triangle, then t(A), t(B), t(C) are
        also not in a line. For any point Q, its image t(Q) has the same distances
        from t(A), t(B), t(C) as Q has from A, B, C—so t(Q) is uniquely determined.
      </p>

      {/* Reflection in a Line */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Reflection in a Line</h3>

      <p className="text-dark-200 mb-6">
        The most convenient isometries for building all others are{' '}
        <strong>reflections</strong>. Each line is the equidistant set of two
        points, and any two points can be exchanged by reflection in their
        equidistant line.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">
          Reflection in ax + by = c
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          The reflection sends each point <InlineMath>(x_1, y_1)</InlineMath> to{' '}
          <InlineMath>(x_2, y_2)</InlineMath> where (assuming{' '}
          <InlineMath>a^2 + b^2 = 1</InlineMath>):
        </p>
        <MathBlock>{`x_2 = x_1(1 - 2a^2) - 2aby_1 + 2ac`}</MathBlock>
        <MathBlock>{`y_2 = y_1(1 - 2b^2) - 2abx_1 + 2bc`}</MathBlock>
      </div>

      <Callout type="info">
        <p>
          The work involved in formalizing reflection is worthwhile because it
          gives us <strong>all isometries</strong> of the Euclidean plane. We get
          them as composites of reflections.
        </p>
      </Callout>

      {/* Three Reflections Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Three Reflections Theorem
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Fundamental Theorem
        </h4>
        <p className="text-dark-200">
          <strong>Each isometry</strong> of the Euclidean plane is the composite
          of <strong>one, two, or three reflections</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The proof constructs reflections f₁, f₂, f₃ that successively move points
        P₁, P₂, P₃ to their images under the given isometry. Since an isometry is
        determined by where it sends three non-collinear points, this composite
        equals the original isometry.
      </p>

      {/* Types of Isometries */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Types of Isometries</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Reflection" />
          <p className="text-xs text-dark-300">
            One reflection. Flips the plane across a line. Sends (x, y) to its
            mirror image.
          </p>
        </Card>
        <Card>
          <CardHeader title="Rotation" />
          <p className="text-xs text-dark-300">
            Two reflections in <em>intersecting</em> lines. Rotates through twice
            the angle between them.
          </p>
        </Card>
        <Card>
          <CardHeader title="Translation" />
          <p className="text-xs text-dark-300">
            Two reflections in <em>parallel</em> lines. Moves every point by the
            same vector.
          </p>
        </Card>
        <Card>
          <CardHeader title="Glide Reflection" />
          <p className="text-xs text-dark-300">
            Three reflections. A translation combined with reflection in a
            parallel line.
          </p>
        </Card>
      </CardGrid>

      {/* Composition is Not Commutative */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Order Matters in Composition
      </h3>

      <Callout type="warning">
        <p>
          The composite f₂f₁ is <strong>not</strong> necessarily the same as f₁f₂!
          For example, if f₁ is reflection in the x-axis and f₂ is reflection in
          the line y = x, then f₂f₁ is a quarter turn anticlockwise and f₁f₂ is a
          quarter turn clockwise.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        The notation f₂f₁ means "f₁ first, then f₂." This is the standard
        convention for composition of functions.
      </p>

      {/* The Half Turn */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: The Half Turn</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Rotation Through π</h4>
        <p className="text-dark-300 text-sm mb-4">
          The <strong>half turn</strong> about O sends (x, y) to (−x, −y). It is
          the composite of reflections in the x-axis and y-axis:
        </p>
        <MathBlock>{`\\text{rot}_{O,\\pi} = \\text{ref}_{OY} \\circ \\text{ref}_{OX}`}</MathBlock>
        <p className="text-dark-400 text-xs mt-4">
          This can be used to prove that vertically opposite angles are equal.
        </p>
      </div>

      {/* Translation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: Translation</h3>

      <p className="text-dark-200 mb-6">
        The translation <InlineMath>\text{'{tran}'}_{'{a,b}'}</InlineMath> moves
        each point (x, y) to (x + a, y + b). It is the composite of reflection in
        the equidistant line of O and (a, b), and reflection in the parallel to
        this line through (a, b).
      </p>

      {/* General Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        General Properties of Isometries
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          From the three reflections theorem, all isometries:
        </p>
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">1.</span>
            <span>
              Are <strong>invertible</strong> functions, and their inverses are
              also isometries.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              Map <strong>lines to lines</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              An isometry is <strong>determined</strong> by the images of three
              non-collinear points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Every isometry</strong> is a composite of one, two, or three
              reflections.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Two reflections give <strong>rotations</strong> (intersecting lines)
              or <strong>translations</strong> (parallel lines).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Three reflections give <strong>glide reflections</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Composition of isometries is <strong>not commutative</strong>—order
              matters!
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={24} questions={section24Questions} />
    </LessonLayout>
  );
}
