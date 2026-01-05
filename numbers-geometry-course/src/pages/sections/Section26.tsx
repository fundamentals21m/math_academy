import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section26Questions } from '../../data/quizzes';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-semibold mb-4">Klein's Definition of Geometry</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The history of geometry is a story with a shifting point of view. From
        Euclid's visual axioms, to Fermat and Descartes' coordinates, to
        Dedekind's definition of numbers as the raw material for points, lines,
        and planes—each era brought a new perspective.
      </p>

      {/* Klein's Insight */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Klein's Revolutionary Idea</h3>

      <p className="text-dark-200 mb-6">
        In 1872, Felix Klein made yet another dramatic shift when he realized
        that:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          The Erlangen Program
        </h4>
        <p className="text-dark-200 text-lg">
          <strong>The isometries make the geometry.</strong>
        </p>
        <p className="text-dark-300 text-sm mt-4">
          Euclidean plane geometry is everything that is{' '}
          <em>preserved by Euclidean isometries</em>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The fundamental quantity preserved by Euclidean isometries is the
        distance <InlineMath>d(P_1, P_2)</InlineMath>. We saw that any reflection
        preserves distance, and any isometry is a composite of reflections—hence
        distance is preserved by all isometries.
      </p>

      {/* Discovering Distance from Reflections */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Discovering Distance from Reflections
      </h3>

      <p className="text-dark-200 mb-6">
        In principle, we could start with the set of reflections and "discover"
        the idea of Euclidean distance by calculating:
      </p>

      <MathBlock>{`\\sqrt{(x'_2 - x_2)^2 + (y'_2 - y_2)^2}`}</MathBlock>

      <p className="text-dark-200 mb-6">
        for mirror images P₂ = (x₂, y₂) and P'₂ = (x'₂, y'₂) under any
        reflection, and finding it equals the corresponding quantity for the
        original points.
      </p>

      <Callout type="info">
        <p>
          Since <strong>line</strong> (equidistant set of two points) and{' '}
          <strong>circle</strong> (equidistant set of one point) can be defined
          in terms of distance, as soon as distance is derived from isometries,
          we have the whole Euclidean geometry!
        </p>
      </Callout>

      {/* Other Geometries */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Other Geometries</h3>

      <p className="text-dark-200 mb-6">
        Klein's viewpoint shows us that Euclidean geometry is just one of several
        structurally similar geometries. Different sets of isometries give
        different geometries.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Euclidean Space" />
          <p className="text-xs text-dark-300">
            Isometries are composites of reflections in planes. The 3D analog of
            planar Euclidean geometry.
          </p>
        </Card>
        <Card>
          <CardHeader title="Spherical Geometry" />
          <p className="text-xs text-dark-300">
            Isometries are reflections in planes through the sphere's center.
            "Lines" are great circles.
          </p>
        </Card>
      </CardGrid>

      {/* Spherical Geometry Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Spherical Geometry</h3>

      <p className="text-dark-200 mb-6">
        The geometry of the sphere is a familiar relative of Euclidean geometry.
        Its isometries are composites of reflections in planes through the
        sphere's center. The "equidistant sets" are intersections with these
        planes—the <strong>great circles</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Properties of Spherical Geometry</h4>
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">1.</span>
            <span>Any two "lines" (great circles) have a point in common.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              Hence the composite of two reflections is always a rotation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">3.</span>
            <span>
              Any isometry is the composite of one, two, or three reflections.
            </span>
          </li>
        </ul>
      </div>

      {/* Groups */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Group of Isometries</h3>

      <p className="text-dark-200 mb-6">
        An important part of Klein's concept is that isometries form a{' '}
        <strong>group of transformations</strong>: a set of one-to-one functions
        closed under composites and inverses.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Why Isometries Form a Group
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          Each reflection is its own inverse (reflecting twice returns to the
          original). If f₁f₂...f_k is a composite of reflections, its inverse is:
        </p>
        <MathBlock>{`f_k^{-1} \\cdots f_2^{-1} f_1^{-1}`}</MathBlock>
        <p className="text-dark-400 text-xs mt-4">
          Composing these gives successive cancellations, yielding the identity.
        </p>
      </div>

      {/* Orientation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Orientation-Preserving Subgroup
      </h3>

      <p className="text-dark-200 mb-6">
        Consider isometries that are composites of an <em>even</em> number of
        reflections. These form a <strong>subgroup</strong>—a subset that is also
        a group.
      </p>

      <Callout type="success">
        <p>
          Intuitively, this is the subgroup that preserves{' '}
          <strong>orientation</strong> (or "handedness" or "clockwiseness").
          Reflections reverse orientation; composites of two reflections (like
          rotations and translations) preserve it.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        We escape the tricky problem of defining "orientation" by letting the
        subgroup define it: a property depends on orientation if it is preserved
        by the subgroup but not by the whole group.
      </p>

      {/* Proving Orientation Exists */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Proving Orientation Exists
      </h3>

      <p className="text-dark-200 mb-6">
        Does the orientation-preserving subgroup differ from the whole group?
        Yes! We can prove that a reflection cannot be a composite of an even
        number of reflections:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>A single reflection maps exactly one line onto itself.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              A composite of two reflections is a rotation (no line onto itself)
              or translation (infinitely many lines onto themselves).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              Thus a reflection cannot be a composite of two reflections—and by
              extension, cannot be any even composite.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          <strong>Conclusion:</strong> The orientation-preserving subgroup is not
          the whole isometry group, and hence there is such a thing as
          orientation!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Klein's insight: <strong>isometries make the geometry</strong>.
              Geometry is what isometries preserve.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Different sets of isometries give{' '}
              <strong>different geometries</strong> (Euclidean, spherical,
              non-Euclidean).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Isometries form a <strong>group</strong>: closed under composition
              and inverses.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>orientation-preserving subgroup</strong> consists of
              even composites of reflections.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Orientation exists</strong> because reflections cannot be
              even composites of reflections.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={26} questions={section26Questions} />
    </LessonLayout>
  );
}
