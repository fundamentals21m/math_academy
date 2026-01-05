import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section16Questions } from '../../data/quizzes';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-semibold mb-4">Volume</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The theory of volume looks much the same as the theory of area at first.
        The unit of volume is the cube with sides of unit length, and this leads
        easily to the volume formula for a <strong>cuboid</strong>—the figure
        whose faces are rectangles.
      </p>

      {/* Cuboid Volume */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Volume of a Cuboid</h3>

      <p className="text-dark-200 mb-6">
        For a cuboid with integer sides we see immediately that:
      </p>

      <MathBlock>
        {`\\text{volume} = \\text{width} \\times \\text{height} \\times \\text{depth}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This follows by cutting the cuboid into unit cubes. The same formula holds
        for rational sides (by cutting into fractional cubes) and for irrational
        sides (by definition of the product of three lengths).
      </p>

      {/* Parallelepipeds and Prisms */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Parallelepipeds and Prisms
      </h3>

      <p className="text-dark-200 mb-6">
        From the cuboid, we can obtain certain other volumes by cutting and
        pasting:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Parallelepiped" />
          <p className="text-xs text-dark-300">
            The 3D analog of a parallelogram. Volume = base area × height.
            Obtained by cutting a prism off one end of a cuboid and pasting it
            to the other.
          </p>
        </Card>
        <Card>
          <CardHeader title="Triangular Prism" />
          <p className="text-xs text-dark-300">
            Obtained by cutting a parallelepiped in half. Volume = base area × height.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          These figures have <strong>constant cross section</strong>. All we have
          done so far is operate within their cross sections the way we did in
          the plane with parallelograms and triangles.
        </p>
      </Callout>

      {/* The Tetrahedron Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Tetrahedron Problem</h3>

      <p className="text-dark-200 mb-6">
        What we really need is the volume of a <strong>tetrahedron</strong>—the
        3D counterpart of the triangle—because all polyhedra can be built from
        tetrahedra.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">The Difficulty</h4>
        <p className="text-dark-300 text-sm">
          The Greeks were <em>unable</em> to cut and paste the tetrahedron into a
          cuboid! They found its volume by various ingenious <strong>infinite
          constructions</strong> instead.
        </p>
      </div>

      {/* Euclid's Proof */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Infinite Construction</h3>

      <p className="text-dark-200 mb-6">
        Euclid fills up the tetrahedron with infinitely many prisms. He cuts the
        tetrahedron into:
      </p>

      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Two smaller tetrahedra (half the height of the original)</li>
        <li>Two triangular prisms of equal volume</li>
      </ul>

      <p className="text-dark-200 mb-6">
        Each prism has volume <InlineMath>\frac{'{1}'}{'{8}'}</InlineMath> × base × height
        of the tetrahedron, so combined they give{' '}
        <InlineMath>\frac{'{1}'}{'{4}'}</InlineMath> × base × height.
      </p>

      <p className="text-dark-200 mb-6">
        Continuing this process inside the smaller tetrahedra, the total volume
        of all prisms is:
      </p>

      <MathBlock>
        {`\\left(\\frac{1}{4} + \\frac{1}{4^2} + \\frac{1}{4^3} + \\cdots\\right) \\times \\text{base} \\times \\text{height} = \\frac{1}{3} \\times \\text{base} \\times \\text{height}`}
      </MathBlock>

      <Callout type="success">
        <p>
          The prisms exhaust the volume of the tetrahedron (their size shrinks
          toward zero), so the volume of the tetrahedron is{' '}
          <InlineMath>\frac{'{1}'}{'{3}'}</InlineMath> × base × height.
        </p>
      </Callout>

      {/* Impossibility Result */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Remarkable Impossibility</h3>

      <p className="text-dark-200 mb-6">
        With such a simple result, it is all the more mysterious that we cannot
        derive it by cutting and pasting <em>finitely</em> often, as with the
        area of a triangle.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Hilbert's Third Problem (1900)
        </h4>
        <p className="text-dark-300 text-sm">
          It can be <em>proved</em> that it is impossible to convert a regular
          tetrahedron into a cube by cutting it into a finite number of
          polyhedral pieces. This was solved by Max Dehn in 1900.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Cuboid volume</strong> = width × height × depth, derived
              by counting unit cubes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Parallelepiped</strong> and <strong>prism</strong> volumes
              follow from cut-and-paste with the cuboid.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Tetrahedron volume</strong> ={' '}
              <InlineMath>\frac{'{1}'}{'{3}'}</InlineMath> × base × height,
              but requires an infinite construction to prove.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              It is <strong>impossible</strong> to convert a tetrahedron to a
              cube by finite cutting and pasting (Dehn, 1900).
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={16} questions={section16Questions} />
    </LessonLayout>
  );
}
