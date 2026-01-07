import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2>Discussion</h2>

      <p>
        The word "geometry" comes from the Greek for "earth measurement," and
        legend has it that the subject grew from the land measurement concerns
        of farmers whose land was periodically flooded by the river Nile. As
        recently as the 18th century, one finds carpenters and other artisans
        listed among the subscribers to geometry books.
      </p>

      <Callout type="info">
        <strong>Practical Origins:</strong> There is no doubt that Euclidean
        geometry is the geometry of down-to-earth measurement. It continues
        to be a tactile subject today, when one talks about "translating,"
        "rotating," and "moving objects rigidly."
      </Callout>

      <h3>Projective and Affine Geometry in Art</h3>

      <p>
        The most <em>visual</em> branch of geometry is projective geometry,
        because it is more concerned with how objects look than with what
        they actually are. It is no surprise that projective geometry originated
        from the concerns of artists, and that many of its practitioners today
        work in the fields of video games and computer graphics.
      </p>

      <p>
        Affine geometry occupies a position in the middle. It also originates
        from an artistic tradition, but from one less radical than that of
        Renaissance Italy — the classical art of China and Japan.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Affine Perspective in Asian Art</h4>
        <p className="text-slate-300">
          Chinese and Japanese drawings often adopt unusual viewpoints, where
          one might expect perspective, but they generally preserve parallels.
          Typically, the picture is a "projection from infinity," which is an
          affine map. All parallel lines are shown as parallel, creating a
          certain "flatness" because all parts of the picture seem to be the
          same distance away — mathematically, they are.
        </p>
      </div>

      <p>
        Affine maps are also popular in engineering drawing, where the so-called
        "axonometric projection" is often used to depict an object in three
        dimensions while retaining correct proportions in a given direction.
      </p>

      <h3>The Fourth Dimension</h3>

      <p>
        The discovery of quaternions in 1843 was the first of a series of
        discoveries that drew attention to spaces of more than three dimensions
        and to the remarkable properties of ℝ⁴ in particular.
      </p>

      <Definition title="Hamilton's Quest">
        <p>
          From around 1830, the Irish mathematician William Rowan Hamilton had
          been searching in vain for "n-dimensional number systems" analogous
          to the real numbers ℝ and the complex numbers ℂ. He thought that ℝ³
          could also be viewed as a number system by some clever choice of
          multiplication rule.
        </p>
      </Definition>

      <Callout type="warning">
        <strong>Impossibility:</strong> We now know that such a system is
        impossible in any ℝⁿ with n ≥ 3 that satisfies all field axioms. But,
        luckily for Hamilton, it is <em>almost</em> possible in ℝ⁴. The quaternions
        satisfy all the field axioms except commutative multiplication, and
        their absolute value is multiplicative.
      </Callout>

      <h3>The Role of Quaternions and Octonions</h3>

      <p>
        The only other ℝⁿ that comes close is ℝ⁸, where the <strong>octonions</strong>
        satisfy all the field properties except the commutative and associative laws.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Number Systems by Dimension</h4>
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2">Dimension</th>
              <th className="text-left py-2">System</th>
              <th className="text-left py-2">Properties Lost</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">ℝ¹</td>
              <td className="py-2">Real numbers ℝ</td>
              <td className="py-2">None (full field)</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">ℝ²</td>
              <td className="py-2">Complex numbers ℂ</td>
              <td className="py-2">Ordering</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">ℝ⁴</td>
              <td className="py-2">Quaternions ℍ</td>
              <td className="py-2">Commutativity</td>
            </tr>
            <tr>
              <td className="py-2">ℝ⁸</td>
              <td className="py-2">Octonions 𝕆</td>
              <td className="py-2">Commutativity, Associativity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Regular Polytopes and Symmetry</h3>

      <p>
        Hamilton knew that quaternions give a nice representation of rotations
        in ℝ³, but the first to work out the quaternions for the symmetries
        of regular polyhedra was Cayley in 1863.
      </p>

      <p>
        The five regular polyhedra actually exhibit only three types of symmetry:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Tetrahedron (12 rotations)</li>
          <li>Cube and Octahedron (24 rotations — they are dual)</li>
          <li>Dodecahedron and Icosahedron (60 rotations — they are dual)</li>
        </ul>
      </div>

      <Theorem title="Schläfli's Discovery">
        <p>
          The Swiss geometer Ludwig Schläfli discovered in 1852 that there are
          six regular polytopes in ℝ⁴. While analogues of the tetrahedron, cube,
          and octahedron exist in all dimensions, ℝ³ and ℝ⁴ are the only ℝⁿ
          containing other regular figures.
        </p>
      </Theorem>

      <h3>The Exceptional Polytopes</h3>

      <p>
        The 24-cell is the simplest of the exceptional regular figures in ℝ⁴.
        The other two are:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>The 120-cell:</strong> Bounded by 120 regular dodecahedra,
            with 600 vertices
          </li>
          <li>
            <strong>The 600-cell:</strong> Bounded by 600 regular tetrahedra,
            with 120 vertices
          </li>
        </ul>
        <p className="text-slate-300 mt-3">
          The 120-cell and 600-cell are related "dually" like the dodecahedron
          and icosahedron. Moreover, the 600-cell arises from the icosahedron
          in the same way that the 24-cell arises from the tetrahedron.
        </p>
      </div>

      <h3>Summary: The Four Pillars</h3>

      <p>
        Throughout this chapter, we have seen how transformation groups provide
        a unifying framework for understanding geometry. Klein's Erlangen program
        showed that:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Klein's Vision</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Euclidean geometry</strong> = invariants of the isometry group</li>
          <li><strong>Affine geometry</strong> = invariants of the affine group</li>
          <li><strong>Projective geometry</strong> = invariants of the projective group</li>
        </ul>
      </div>

      <p>
        The four pillars of geometry — Euclidean constructions, coordinates,
        vectors, and projective methods — are all connected through the study
        of transformation groups. Each pillar offers a different perspective
        on the same underlying geometric reality.
      </p>

      <Callout type="info">
        <strong>Looking Ahead:</strong> The next chapter explores non-Euclidean
        geometry, where the parallel axiom fails. This geometry arises naturally
        from the projective line and provides yet another example of how different
        transformation groups lead to different geometries.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.9.1</h4>
        <p className="text-slate-300">
          Explain why affine maps preserve parallel lines but projective maps
          generally do not.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.9.2</h4>
        <p className="text-slate-300">
          Why do the cube and octahedron have the same rotation group?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.9.3</h4>
        <p className="text-slate-300">
          Explain why there is no "number system" on ℝ³ with a multiplicative
          absolute value.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.9.4</h4>
        <p className="text-slate-300">
          Describe the relationship between the 600-cell and the rotation group
          of the icosahedron.
        </p>
      </div>

      <SectionQuiz
        sectionId={56}
        questions={quizMap[56] || []}
        title="Discussion Quiz"
      />
    </LessonLayout>
  );
}
