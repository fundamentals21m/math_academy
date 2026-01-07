import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2>A Finite Group of Space Rotations</h2>

      <p>
        We have seen that the group SO(3) of all rotations is infinite. However,
        the symmetry groups of regular polyhedra provide beautiful examples of
        <strong> finite</strong> rotation groups. In this section, we study the
        rotations of the tetrahedron and their quaternion representations.
      </p>

      <h3>The Regular Tetrahedron</h3>

      <p>
        A regular tetrahedron has four vertices, four faces (equilateral triangles),
        and six edges. We place the tetrahedron with its center at the origin
        so that its rotational symmetries become rotations of ℝ³.
      </p>

      <Definition title="Rotational Symmetry">
        <p>
          A <strong>rotational symmetry</strong> of a polyhedron is a rotation
          that maps the polyhedron onto itself. The set of all rotational symmetries
          forms a group under composition.
        </p>
      </Definition>

      <h3>Counting the Rotations</h3>

      <p>
        The tetrahedron has exactly 12 rotational symmetries:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">The 12 Rotations of the Tetrahedron</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>1 identity:</strong> Rotation by 0°</li>
          <li>
            <strong>8 face rotations:</strong> For each of 4 faces, rotations by
            120° and 240° about the axis through the face center and opposite vertex
          </li>
          <li>
            <strong>3 edge rotations:</strong> For each of 3 pairs of opposite edges,
            rotation by 180° about the axis through their midpoints
          </li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Group Theory Connection:</strong> The rotation group of the
        tetrahedron is isomorphic to the alternating group A₄ — the group of
        even permutations of 4 objects. This makes sense because each rotation
        permutes the 4 vertices, and only even permutations arise from rotations.
      </Callout>

      <h3>Quaternions for the Tetrahedron</h3>

      <p>
        Each of the 12 rotations corresponds to a pair of quaternions ±q.
        Therefore, we get 24 unit quaternions representing the tetrahedron's
        rotational symmetries.
      </p>

      <Theorem title="The 24 Quaternions">
        <p>
          The 24 unit quaternions representing rotations of the tetrahedron are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>±1, ±i, ±j, ±k (8 quaternions)</li>
          <li>½(±1 ± i ± j ± k) with an even number of minus signs (16 quaternions)</li>
        </ul>
      </Theorem>

      <p>
        These 24 quaternions form a group under quaternion multiplication,
        known as the <strong>binary tetrahedral group</strong>.
      </p>

      <h3>The 24-Cell</h3>

      <p>
        The 24 quaternions can be viewed as 24 points in ℝ⁴. Remarkably, these
        points are the vertices of a beautiful 4-dimensional polytope called
        the <strong>24-cell</strong>.
      </p>

      <Definition title="The 24-Cell">
        <p>
          The <strong>24-cell</strong> is a regular 4-dimensional polytope with:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>24 vertices (the unit quaternions for the tetrahedron)</li>
          <li>96 edges</li>
          <li>96 triangular faces</li>
          <li>24 octahedral cells (3-dimensional "faces")</li>
        </ul>
      </Definition>

      <Callout type="warning">
        <strong>Unique to 4D:</strong> The 24-cell is one of the exceptional
        regular polytopes that exist only in 4 dimensions. While the tetrahedron,
        cube, and octahedron have analogues in all dimensions, the 24-cell has
        no analogue in other dimensions.
      </Callout>

      <h3>Other Polyhedral Groups</h3>

      <p>
        The tetrahedron is just one example. Other regular polyhedra have their
        own rotation groups:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Rotation Groups of Regular Polyhedra</h4>
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2">Polyhedron</th>
              <th className="text-left py-2">Rotations</th>
              <th className="text-left py-2">Group</th>
              <th className="text-left py-2">Quaternions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Tetrahedron</td>
              <td className="py-2">12</td>
              <td className="py-2">A₄</td>
              <td className="py-2">24</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Cube/Octahedron</td>
              <td className="py-2">24</td>
              <td className="py-2">S₄</td>
              <td className="py-2">48</td>
            </tr>
            <tr>
              <td className="py-2">Dodecahedron/Icosahedron</td>
              <td className="py-2">60</td>
              <td className="py-2">A₅</td>
              <td className="py-2">120</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The cube and octahedron have the same rotation group because they are
        <strong> dual</strong> polyhedra — the vertices of one correspond to
        the face centers of the other. Similarly for the dodecahedron and icosahedron.
      </p>

      <h3>The 120-Cell and 600-Cell</h3>

      <p>
        Just as the 24 quaternions for the tetrahedron form the 24-cell, the
        120 quaternions for the icosahedron form the vertices of the
        <strong> 600-cell</strong>, another exceptional 4D polytope. The dual
        of the 600-cell is the <strong>120-cell</strong>.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.7.1</h4>
        <p className="text-slate-300">
          Verify that there are exactly 16 quaternions of the form ½(±1 ± i ± j ± k)
          with an even number of minus signs.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.7.2</h4>
        <p className="text-slate-300">
          Show that the 8 quaternions ±1, ±i, ±j, ±k form a group under multiplication.
          What familiar group is it isomorphic to?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.7.3</h4>
        <p className="text-slate-300">
          Compute the product of q₁ = ½(1 + i + j + k) and q₂ = i, and verify
          that the result is one of the 24 unit quaternions for the tetrahedron.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.7.4</h4>
        <p className="text-slate-300">
          Explain why a rotation of the cube permutes its 4 main diagonals, and
          hence why the rotation group of the cube is isomorphic to S₄.
        </p>
      </div>

      <SectionQuiz
        sectionId={54}
        questions={quizMap[54] || []}
        title="A Finite Group of Space Rotations Quiz"
      />
    </LessonLayout>
  );
}
