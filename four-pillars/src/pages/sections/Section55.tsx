import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2>The Groups S³ and ℝP³</h2>

      <p>
        The rotations of the tetrahedron vividly show that a group of rotations
        is itself a geometric object. This statement is just as true of the
        group of all rotations of S². In fact, this group is closely related
        to two important geometric objects: the <strong>3-sphere S³</strong>
        and the <strong>three-dimensional real projective space ℝP³</strong>.
      </p>

      <h3>The 3-Sphere</h3>

      <Definition title="The 3-Sphere S³">
        <p>
          Just as the 1- and 2-spheres are the sets of points at unit distance
          from O in ℝ² and ℝ³ respectively, the <strong>3-sphere</strong> is
          the set of points in ℝ⁴ at unit distance from O:
        </p>
        <MathBlock>{`S^3 = \\{(a, b, c, d) \\in \\mathbb{R}^4 : a^2 + b^2 + c^2 + d^2 = 1\\}`}</MathBlock>
      </Definition>

      <p>
        The points (a, b, c, d) on S³ correspond to quaternions q = a1 + bi + cj + dk
        with |q| = 1, because |q|² = a² + b² + c² + d². Hence, <strong>rotations
        of S²</strong>, which correspond to pairs ±q of such quaternions, correspond
        to <strong>point pairs</strong> ±(a, b, c, d) on S³.
      </p>

      <h3>Connection to ℝP³</h3>

      <p>
        Remember from Section 5.4 how we described the real projective space ℝP³.
        Its "points" are lines through O in ℝ⁴. But a line through O in ℝ⁴ meets
        S³ in a pair of antipodal points ±(a, b, c, d).
      </p>

      <Theorem title="Rotations as Points of ℝP³">
        <p>
          It is valid to view the point pairs ±(a, b, c, d) on S³ as single
          "points" of ℝP³. Hence, rotations of S² correspond to points of ℝP³,
          and the group of all rotations of S² is in some sense the "same" as
          the geometric object ℝP³.
        </p>
      </Theorem>

      <h3>Abstract Groups and Isomorphisms</h3>

      <p>
        To explain what we mean by "sameness" here, we need to say something
        about groups in general.
      </p>

      <Definition title="Abstract Group">
        <p>
          An <strong>abstract group</strong> is a set G, which contains a special
          element 1 and for each g an element g⁻¹, with a "product" operation
          satisfying the following axioms:
        </p>
        <MathBlock>{`g_1(g_2g_3) = (g_1g_2)g_3 \\quad \\text{(associativity)}`}</MathBlock>
        <MathBlock>{`g \\cdot 1 = g \\quad \\text{(identity)}`}</MathBlock>
        <MathBlock>{`g \\cdot g^{-1} = 1 \\quad \\text{(inverse)}`}</MathBlock>
      </Definition>

      <Definition title="Isomorphism">
        <p>
          An <strong>isomorphism</strong> of group G onto group G' is a one-to-one
          correspondence ϕ : G → G' that preserves products:
        </p>
        <MathBlock>{`\\varphi(g_1g_2) = \\varphi(g_1)\\varphi(g_2)`}</MathBlock>
        <p className="mt-2">
          The word "isomorphism" comes from the Greek for "same form." Two
          isomorphic groups are essentially the same as abstract groups.
        </p>
      </Definition>

      <h3>Group Structures on Spheres</h3>

      <p>
        We can use isomorphisms to transfer group structures to geometric objects.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Examples of Group Structures</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>The circle S¹:</strong> Complex numbers cos θ + i sin θ form a
            group under multiplication, and they correspond to points (cos θ, sin θ)
            of S¹. The product of points on S¹ corresponds to adding their angles.
          </li>
          <li>
            <strong>The 3-sphere S³:</strong> Unit quaternions form a group, and
            they correspond to points of S³. Hence, we can define the product of
            points on S³ via quaternion multiplication.
          </li>
          <li>
            <strong>Projective space ℝP³:</strong> Pairs of opposite quaternions ±q
            with |q| = 1 form a group. These correspond to points of ℝP³, so we
            can transfer this group structure to ℝP³.
          </li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Continuous Groups:</strong> The group structures on S¹, S³, and
        ℝP³ obtained in this way are particularly interesting because they are
        <em> continuous</em>. That is, if g'₁ is near to g₁ and g'₂ is near to g₂,
        then g'₁g'₂ is near to g₁g₂.
      </Callout>

      <h3>A Remarkable Fact</h3>

      <Theorem title="Spheres with Group Structure">
        <p>
          S² does <em>not</em> have a continuous group structure. In fact, S¹ and
          S³ are the <em>only</em> spheres with continuous group structures on them.
        </p>
      </Theorem>

      <p>
        This is a deep result from topology. The group structure on S¹ comes
        from complex multiplication, and the group structure on S³ comes from
        quaternion multiplication. There is no higher-dimensional analogue because
        the octonions (which would give S⁷) are not associative.
      </p>

      <h3>Summary of Correspondences</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 text-blue-400">Algebraic Object</th>
              <th className="text-left py-2 text-blue-400">Geometric Space</th>
              <th className="text-left py-2 text-blue-400">Transformation Group</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Unit complex numbers</td>
              <td className="py-2">S¹</td>
              <td className="py-2">SO(2)</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Unit quaternions</td>
              <td className="py-2">S³</td>
              <td className="py-2">Spin(3)</td>
            </tr>
            <tr>
              <td className="py-2">Unit quaternion pairs ±q</td>
              <td className="py-2">ℝP³</td>
              <td className="py-2">SO(3)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.8.1</h4>
        <p className="text-slate-300">
          Verify that the map ϕ(r_θ) = cos θ + i sin θ from rotations of the plane
          to complex numbers satisfies ϕ(r_θ₁ ∘ r_θ₂) = ϕ(r_θ₁)ϕ(r_θ₂).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.8.2</h4>
        <p className="text-slate-300">
          Explain why the product of two points (cos θ₁, sin θ₁) and (cos θ₂, sin θ₂)
          on S¹ is (cos(θ₁ + θ₂), sin(θ₁ + θ₂)).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.8.3</h4>
        <p className="text-slate-300">
          Explain why the map from unit quaternions to SO(3) is 2-to-1 but not
          1-to-1.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.8.4</h4>
        <p className="text-slate-300">
          Show that ℝP³ can be viewed as a solid ball with antipodal boundary
          points identified.
        </p>
      </div>

      <SectionQuiz
        sectionId={55}
        questions={quizMap[55] || []}
        title="The Groups S³ and ℝP³ Quiz"
      />
    </LessonLayout>
  );
}
