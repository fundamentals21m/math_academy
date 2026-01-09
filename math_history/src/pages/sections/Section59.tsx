import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2>Elliptic Geometry</h2>

      <p>
        While hyperbolic geometry denies Euclid's parallel postulate by allowing
        multiple parallels, another possibility exists: a geometry with{' '}
        <em>no</em> parallel lines at all. This is <strong>elliptic geometry</strong>,
        where every pair of lines intersects. The most natural model is the
        geometry of the sphere, which has profound implications for our
        understanding of space and curvature.
      </p>

      <Callout type="info">
        <strong>Three Geometries:</strong> Given a line and a point not on it,
        there are exactly three possibilities for the number of parallels through
        the point: exactly one (Euclidean), infinitely many (hyperbolic), or
        none (elliptic). These exhaust the constant-curvature geometries.
      </Callout>

      <h3>Spherical Geometry</h3>

      <p>
        The simplest model of elliptic geometry is the surface of a sphere:
      </p>

      <Definition title="Spherical Geometry">
        <p>
          On a sphere of radius <InlineMath>R</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Points:</strong> Points on the sphere's surface</li>
          <li><strong>Lines:</strong> Great circles (circles whose center is the sphere's center)</li>
          <li><strong>Distance:</strong> Arc length along the sphere</li>
        </ul>
      </Definition>

      <Example title="Great Circles as Lines">
        <p>
          The equator is a great circle. Meridians (lines of longitude) are
          great circles. Lines of latitude (except the equator) are <em>not</em>{' '}
          great circles—they're not the shortest paths between points.
        </p>
        <p className="mt-2 text-dark-400">
          On a globe, the shortest flight path between two cities follows a
          great circle, even though it may look curved on a flat map.
        </p>
      </Example>

      <h3>No Parallel Lines</h3>

      <Theorem title="All Lines Intersect">
        <p>
          Any two great circles on a sphere intersect at exactly two antipodal
          points.
        </p>
        <p className="mt-2 text-dark-400">
          There are no parallel lines in spherical geometry—every pair of
          "lines" meets.
        </p>
      </Theorem>

      <Example title="Meridians and the Equator">
        <p>
          Consider any two meridians (lines of longitude). They both cross
          the equator at right angles, appearing "parallel" near the equator.
          Yet they meet at the North and South poles.
        </p>
        <p className="mt-2">
          Similarly, the equator and any meridian intersect at two points,
          one in each hemisphere.
        </p>
      </Example>

      <h3>Triangle Properties</h3>

      <p>
        Triangles on a sphere behave differently from Euclidean triangles:
      </p>

      <Theorem title="Angle Sum Theorem (Spherical)">
        <p>
          In spherical geometry, the sum of angles in a triangle is{' '}
          <em>greater</em> than <InlineMath>180°</InlineMath>:
        </p>
        <MathBlock>
          {`\\alpha + \\beta + \\gamma > 180°`}
        </MathBlock>
        <p className="mt-2">
          The excess <InlineMath>{`\\varepsilon = (\\alpha + \\beta + \\gamma) - 180°`}</InlineMath>{' '}
          is called the <strong>angular excess</strong>.
        </p>
      </Theorem>

      <Example title="A Large Spherical Triangle">
        <p>
          Consider the triangle with vertices at the North Pole, a point on
          the equator at <InlineMath>0°</InlineMath> longitude, and a point
          at <InlineMath>90°</InlineMath> longitude on the equator.
        </p>
        <p className="mt-2">
          Each angle is <InlineMath>90°</InlineMath>, so the angle sum is{' '}
          <InlineMath>270°</InlineMath>—excess of <InlineMath>90°</InlineMath>!
        </p>
      </Example>

      <Theorem title="Area-Excess Relationship">
        <p>
          The area of a spherical triangle is proportional to its angular excess:
        </p>
        <MathBlock>
          {`\\text{Area} = R^2 \\cdot \\varepsilon`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <InlineMath>\varepsilon</InlineMath> is measured in radians.
          This is known as <strong>Girard's theorem</strong> (1629).
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Comparison with Hyperbolic:</strong> In hyperbolic geometry,
        area equals <InlineMath>{`k^2 \\cdot \\delta`}</InlineMath> where{' '}
        <InlineMath>\delta</InlineMath> is the angular <em>defect</em>. In
        spherical geometry, area equals <InlineMath>{`R^2 \\cdot \\varepsilon`}</InlineMath>{' '}
        where <InlineMath>\varepsilon</InlineMath> is the angular <em>excess</em>.
        Both link angle sums to area.
      </Callout>

      <h3>Elliptic vs. Spherical Geometry</h3>

      <p>
        Strictly speaking, spherical geometry isn't quite the same as elliptic
        geometry:
      </p>

      <Definition title="Projective Plane / Elliptic Geometry">
        <p>
          In <strong>elliptic geometry</strong> proper, antipodal points on
          the sphere are identified as a single point. This gives the{' '}
          <strong>projective plane</strong> (or <em>elliptic plane</em>).
        </p>
        <p className="mt-2">
          In this geometry, two lines meet at exactly <em>one</em> point,
          not two.
        </p>
      </Definition>

      <Example title="Why Identify Antipodal Points?">
        <p>
          In spherical geometry, every pair of points determines two geodesic
          segments (the short and long ways around). By identifying antipodal
          points, we ensure every pair of distinct points determines exactly
          one line—just like in Euclidean geometry.
        </p>
        <p className="mt-2 text-dark-400">
          The projective plane can be visualized as a hemisphere where
          opposite boundary points are glued together.
        </p>
      </Example>

      <h3>Curvature</h3>

      <p>
        The three geometries correspond to different constant curvatures:
      </p>

      <Theorem title="Constant Curvature Geometries">
        <p>
          There are exactly three geometries with constant curvature:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Euclidean:</strong> Curvature <InlineMath>K = 0</InlineMath> (flat)</li>
          <li><strong>Hyperbolic:</strong> Curvature <InlineMath>{`K < 0`}</InlineMath> (negative/saddle-shaped)</li>
          <li><strong>Elliptic:</strong> Curvature <InlineMath>{`K > 0`}</InlineMath> (positive/sphere-like)</li>
        </ul>
      </Theorem>

      <Definition title="Gaussian Curvature">
        <p>
          The <strong>Gaussian curvature</strong> <InlineMath>K</InlineMath>{' '}
          at a point on a surface measures how the surface curves. For a sphere
          of radius <InlineMath>R</InlineMath>:
        </p>
        <MathBlock>
          {`K = \\frac{1}{R^2}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          A flat plane has <InlineMath>K = 0</InlineMath>; a saddle surface
          has <InlineMath>{`K < 0`}</InlineMath>.
        </p>
      </Definition>

      <h3>Riemann's Revolutionary Vision</h3>

      <p>
        Bernhard Riemann unified these ideas in his revolutionary 1854 lecture:
      </p>

      <Example title="Riemannian Geometry">
        <p>
          Riemann realized that geometry isn't fixed—each surface has its own
          intrinsic geometry determined by how distances are measured. He
          introduced:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The <strong>metric tensor</strong>: a formula for measuring distance</li>
          <li><strong>Curvature</strong> as an intrinsic property of space</li>
          <li>The possibility of curved spaces of any dimension</li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>Geometry and Physics:</strong> Riemann speculated that the
        geometry of physical space might not be Euclidean and could depend
        on physical phenomena. Sixty years later, Einstein's general relativity
        realized this vision: spacetime is curved by mass and energy.
      </Callout>

      <h3>Applications</h3>

      <p>
        Spherical and elliptic geometry have many applications:
      </p>

      <Example title="Navigation and Cartography">
        <p>
          Great circle routes are the shortest paths on Earth. Understanding
          spherical geometry is essential for navigation, GPS, and making
          accurate maps (which inevitably distort the sphere).
        </p>
      </Example>

      <Example title="General Relativity">
        <p>
          In Einstein's general relativity, the presence of matter curves
          spacetime. Regions near massive objects have positive curvature;
          the universe as a whole might be positively curved (like a 3-sphere),
          negatively curved, or flat.
        </p>
      </Example>

      <Example title="Cosmology">
        <p>
          The shape of the universe is an empirical question. Measurements
          of the cosmic microwave background suggest the universe is very
          close to flat, but could have slight positive or negative curvature.
        </p>
      </Example>

      <h3>The Three Geometries Compared</h3>

      <Theorem title="Summary Comparison">
        <p>
          Key properties of the three constant-curvature geometries:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="px-4 py-2 text-left">Property</th>
                <th className="px-4 py-2 text-left">Euclidean</th>
                <th className="px-4 py-2 text-left">Hyperbolic</th>
                <th className="px-4 py-2 text-left">Elliptic</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Parallels through a point</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">∞</td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Triangle angle sum</td>
                <td className="px-4 py-2">= 180°</td>
                <td className="px-4 py-2">&lt; 180°</td>
                <td className="px-4 py-2">&gt; 180°</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Curvature</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">&lt; 0</td>
                <td className="px-4 py-2">&gt; 0</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Similar triangles exist?</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Space is finite?</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Theorem>

      <h3>Philosophical Implications</h3>

      <p>
        The discovery of non-Euclidean geometries had profound philosophical
        consequences:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Mathematics is not about physical reality:</strong> Multiple
          consistent geometries exist; which describes space is an empirical
          question.
        </li>
        <li>
          <strong>Axioms are choices:</strong> The parallel postulate is
          independent—we can accept it or deny it and build consistent systems.
        </li>
        <li>
          <strong>Space might be curved:</strong> The geometry of the universe
          is not knowable a priori but must be measured.
        </li>
      </ul>

      <Callout type="info">
        <strong>From Euclid to Einstein:</strong> The journey from Euclid's
        parallel postulate through two millennia of failed proofs to hyperbolic
        and elliptic geometry represents one of mathematics' greatest stories.
        It transformed our understanding of geometry, space, and the nature
        of mathematical truth itself.
      </Callout>

      <SectionQuiz sectionId={59} questions={quizMap[59] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
