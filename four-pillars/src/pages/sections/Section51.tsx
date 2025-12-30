import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2>Spherical Geometry</h2>

      <p>
        We now turn from the plane to a surface with quite different properties:
        the <strong>2-sphere</strong> S². This is the surface of a ball in ℝ³,
        and it provides an important example of non-Euclidean geometry.
      </p>

      <Definition title="The 2-Sphere">
        <p>
          The <strong>2-sphere</strong> S² is the set of points in ℝ³ at distance 1
          from the origin:
        </p>
        <MathBlock>{`S^2 = \\{(x, y, z) \\in \\mathbb{R}^3 : x^2 + y^2 + z^2 = 1\\}`}</MathBlock>
        <p className="mt-2">
          More generally, a sphere of radius r centered at the origin is the set
          of points at distance r from O.
        </p>
      </Definition>

      <h3>Great Circles as "Lines"</h3>

      <p>
        On the sphere, the natural analogues of straight lines are
        <strong> great circles</strong>.
      </p>

      <Definition title="Great Circle">
        <p>
          A <strong>great circle</strong> on S² is the intersection of S² with a
          plane through the center O of the sphere. Great circles are the largest
          circles on the sphere and have the same radius as the sphere itself.
        </p>
      </Definition>

      <p>
        Great circles serve as "lines" in spherical geometry because:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Any two distinct points determine a unique great circle (unless they are antipodal)</li>
          <li>Great circles are geodesics — the shortest paths between points on the sphere</li>
          <li>Great circles have constant curvature and no preferred direction</li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>Antipodal Points:</strong> Two points are <em>antipodal</em> if they
        are diametrically opposite on the sphere (like the North and South poles).
        Infinitely many great circles pass through any pair of antipodal points,
        so the axiom "two points determine a unique line" fails for antipodal points.
      </Callout>

      <h3>Differences from Euclidean Geometry</h3>

      <p>
        Spherical geometry differs from Euclidean geometry in several fundamental ways:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Key Differences</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>No parallel lines:</strong> Any two great circles intersect
            (at two antipodal points).
          </li>
          <li>
            <strong>Finite lines:</strong> Great circles have finite length (2πr),
            unlike infinite Euclidean lines.
          </li>
          <li>
            <strong>Angle sum of triangles:</strong> The angles of a spherical
            triangle sum to more than 180°.
          </li>
          <li>
            <strong>Area determines angle excess:</strong> The amount by which
            the angle sum exceeds 180° is proportional to the triangle's area.
          </li>
        </ul>
      </div>

      <h3>Isometries of the Sphere</h3>

      <Definition title="Spherical Isometry">
        <p>
          An <strong>isometry</strong> of S² is a distance-preserving map from S²
          to itself, where distance is measured along great circles (geodesic distance).
        </p>
      </Definition>

      <p>
        The isometries of S² form a group Isom(S²), and they have a beautiful
        characterization.
      </p>

      <Theorem title="Isometries of S² are Orthogonal">
        <p>
          Every isometry of S² is the restriction to S² of an orthogonal
          transformation of ℝ³. In other words:
        </p>
        <MathBlock>{`\\text{Isom}(S^2) \\cong O(3)`}</MathBlock>
        <p className="mt-2 text-slate-300">
          The isometry group of the sphere is isomorphic to the group of 3×3
          orthogonal matrices.
        </p>
      </Theorem>

      <h3>Reflections in Great Circles</h3>

      <p>
        Just as in the plane, reflections play a fundamental role. A
        <strong> reflection</strong> of S² in a great circle C is the restriction
        to S² of reflection of ℝ³ in the plane containing C.
      </p>

      <Theorem title="Three Reflections Theorem for S²">
        <p>
          Every isometry of S² is a product of at most three reflections in
          great circles.
        </p>
        <p className="mt-2 text-slate-300">
          This is the spherical analogue of the three reflections theorem for
          the plane.
        </p>
      </Theorem>

      <h3>Rotations of the Sphere</h3>

      <p>
        The product of two reflections in great circles is a <strong>rotation</strong>
        of S² about an axis through the center O.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> If two great circles intersect at points P
        and P' (which are antipodal), then the product of reflections in these
        circles is a rotation about the axis through P and P'. The angle of
        rotation is twice the angle between the great circles.
      </Callout>

      <Definition title="Orientation-Preserving Isometries">
        <p>
          The <strong>orientation-preserving isometries</strong> of S² are exactly
          the rotations. They form a subgroup:
        </p>
        <MathBlock>{`\\text{Isom}^+(S^2) \\cong SO(3)`}</MathBlock>
        <p className="mt-2">
          This is the group of 3×3 orthogonal matrices with determinant 1.
        </p>
      </Definition>

      <h3>The Spherical Metric</h3>

      <p>
        The natural distance on the sphere is the <strong>great circle distance</strong>:
        the length of the shorter arc of the great circle connecting two points.
      </p>

      <MathBlock>{`d(P, Q) = r \\cdot \\arccos(P \\cdot Q / r^2)`}</MathBlock>

      <p>
        For the unit sphere (r = 1), this simplifies to:
      </p>

      <MathBlock>{`d(P, Q) = \\arccos(P \\cdot Q)`}</MathBlock>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.4.1</h4>
        <p className="text-slate-300">
          Show that the equator and any line of longitude are great circles,
          but lines of latitude (except the equator) are not.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.4.2</h4>
        <p className="text-slate-300">
          Find the angle sum of a spherical triangle whose vertices are the North
          pole, (1, 0, 0), and (0, 1, 0).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.4.3</h4>
        <p className="text-slate-300">
          Explain why any two great circles on S² must intersect.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.4.4</h4>
        <p className="text-slate-300">
          Show that the great circle distance between P = (1, 0, 0) and
          Q = (0, 1, 0) on the unit sphere is π/2.
        </p>
      </div>

      <SectionQuiz
        sectionId={51}
        questions={quizMap[51] || []}
        title="Spherical Geometry Quiz"
      />
    </LessonLayout>
  );
}
