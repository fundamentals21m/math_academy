import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2>Models of Hyperbolic Space</h2>

      <p>
        The abstract axioms of hyperbolic geometry gained concrete reality
        through <em>models</em>—constructions within Euclidean geometry that
        satisfy the hyperbolic axioms. These models, developed by Beltrami,
        Klein, and Poincaré in the 1860s–1880s, proved that hyperbolic geometry
        is as consistent as Euclidean geometry and gave mathematicians powerful
        tools for visualization and calculation.
      </p>

      <Callout type="info">
        <strong>Consistency Through Models:</strong> If you can build a model
        of hyperbolic geometry using Euclidean geometry, then any contradiction
        in hyperbolic geometry would imply a contradiction in Euclidean geometry.
        Since we believe Euclidean geometry is consistent, hyperbolic geometry
        must be too.
      </Callout>

      <h3>The Poincaré Disk Model</h3>

      <p>
        Perhaps the most elegant and widely used model, developed by Henri
        Poincaré:
      </p>

      <Definition title="Poincaré Disk Model">
        <p>
          The hyperbolic plane is represented as the interior of a unit disk{' '}
          <InlineMath>{`D = \\{(x,y) : x^2 + y^2 < 1\\}`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Points:</strong> Points inside the disk</li>
          <li><strong>Lines:</strong> Circular arcs perpendicular to the boundary circle, including diameters</li>
          <li><strong>Boundary:</strong> The circle at infinity (not part of the hyperbolic plane)</li>
        </ul>
      </Definition>

      <Example title="Hyperbolic Lines in the Disk">
        <p>
          There are two types of "lines" in the Poincaré disk:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Diameters:</strong> Straight lines through the center</li>
          <li><strong>Circular arcs:</strong> Arcs of circles that meet the boundary at right angles</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Through any two points in the disk, exactly one such "line" passes—just
          as in Euclidean geometry.
        </p>
      </Example>

      <Definition title="Poincaré Disk Metric">
        <p>
          Distance in the Poincaré disk is given by:
        </p>
        <MathBlock>
          {`ds^2 = \\frac{4(dx^2 + dy^2)}{(1 - x^2 - y^2)^2}`}
        </MathBlock>
        <p className="mt-2">
          As you approach the boundary, distances become infinitely stretched.
          The boundary circle represents "infinity."
        </p>
      </Definition>

      <Example title="Distances Near the Boundary">
        <p>
          A Euclidean-short step near the boundary corresponds to a huge
          hyperbolic distance. The entire hyperbolic plane—infinite in extent—fits
          inside the finite disk.
        </p>
        <p className="mt-2 text-dark-400">
          Moving from the center to the boundary represents traveling infinitely
          far in hyperbolic space.
        </p>
      </Example>

      <h3>Properties of the Poincaré Disk</h3>

      <Theorem title="Angle Preservation">
        <p>
          The Poincaré disk is <strong>conformal</strong>: angles between
          hyperbolic lines equal the Euclidean angles between the corresponding
          circular arcs.
        </p>
        <p className="mt-2 text-dark-400">
          This makes the model excellent for visualizing angle-based properties
          like the angle sum theorem for triangles.
        </p>
      </Theorem>

      <Example title="Parallel Lines in the Disk">
        <p>
          Given a line <InlineMath>{'\\ell'}</InlineMath> (a circular arc) and a
          point <InlineMath>P</InlineMath> not on it:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Two limiting parallels through <InlineMath>P</InlineMath> meet <InlineMath>{'\\ell'}</InlineMath> at the boundary circle</li>
          <li>Infinitely many ultra-parallels pass through <InlineMath>P</InlineMath> without touching <InlineMath>{'\\ell'}</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400">
          The boundary points where limiting parallels meet are "ideal points"—at
          infinity in hyperbolic space.
        </p>
      </Example>

      <h3>The Poincaré Half-Plane Model</h3>

      <p>
        A closely related model uses an upper half-plane:
      </p>

      <Definition title="Poincaré Half-Plane Model">
        <p>
          The hyperbolic plane is the upper half-plane{' '}
          <InlineMath>{`H = \\{(x,y) : y > 0\\}`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Points:</strong> Points with <InlineMath>{`y > 0`}</InlineMath></li>
          <li><strong>Lines:</strong> Vertical rays and semicircles centered on the <InlineMath>x</InlineMath>-axis</li>
          <li><strong>Boundary:</strong> The <InlineMath>x</InlineMath>-axis (at infinity)</li>
        </ul>
      </Definition>

      <Definition title="Half-Plane Metric">
        <p>
          Distance in the half-plane model:
        </p>
        <MathBlock>
          {`ds^2 = \\frac{dx^2 + dy^2}{y^2}`}
        </MathBlock>
        <p className="mt-2">
          The closer to the <InlineMath>x</InlineMath>-axis, the more stretched
          distances become. The axis itself is infinitely far away.
        </p>
      </Definition>

      <Example title="Geodesics in the Half-Plane">
        <p>
          The "straight lines" (geodesics) are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Vertical lines: <InlineMath>{`x = c`}</InlineMath> (for constant <InlineMath>c</InlineMath>)</li>
          <li>Semicircles: <InlineMath>{`(x-a)^2 + y^2 = r^2`}</InlineMath> with center <InlineMath>(a, 0)</InlineMath></li>
        </ul>
      </Example>

      <Callout type="note">
        <strong>Isomorphism:</strong> The disk and half-plane models are
        equivalent—there's a conformal map (Möbius transformation) between
        them. They're just different "views" of the same hyperbolic geometry.
      </Callout>

      <h3>The Klein Disk Model</h3>

      <p>
        Felix Klein developed an alternative disk model:
      </p>

      <Definition title="Klein Disk Model">
        <p>
          The hyperbolic plane is the interior of a unit disk, but:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Points:</strong> Points inside the disk</li>
          <li><strong>Lines:</strong> Straight chords of the disk (Euclidean line segments)</li>
        </ul>
      </Definition>

      <Example title="Lines Are Straight">
        <p>
          Unlike the Poincaré models, hyperbolic lines in the Klein model
          look straight! This makes some constructions easier.
        </p>
        <p className="mt-2 text-dark-400">
          The trade-off: the Klein model is not conformal. Angles appear
          distorted.
        </p>
      </Example>

      <Theorem title="Klein Model Properties">
        <p>
          In the Klein model:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Lines are Euclidean chords (easy to visualize)</li>
          <li>Angles are distorted (not conformal)</li>
          <li>Parallel lines and their intersections at the boundary are easy to see</li>
        </ul>
      </Theorem>

      <h3>The Hyperboloid Model</h3>

      <p>
        A three-dimensional model embeds the hyperbolic plane in Minkowski space:
      </p>

      <Definition title="Hyperboloid Model">
        <p>
          The hyperbolic plane is one sheet of the hyperboloid:
        </p>
        <MathBlock>
          {`x^2 + y^2 - z^2 = -1, \\quad z > 0`}
        </MathBlock>
        <p className="mt-2">
          Distance is measured using the Minkowski metric{' '}
          <InlineMath>{`dx^2 + dy^2 - dz^2`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Projecting to Other Models">
        <p>
          The Poincaré disk is obtained by projecting from{' '}
          <InlineMath>(0, 0, -1)</InlineMath> onto the plane <InlineMath>z = 0</InlineMath>.
        </p>
        <p className="mt-2">
          The Klein disk is obtained by projecting from the origin onto{' '}
          <InlineMath>z = 1</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          This explains why both disk models use the same underlying set of
          points.
        </p>
      </Example>

      <h3>The Pseudosphere</h3>

      <p>
        Beltrami discovered that part of the hyperbolic plane can be embedded
        in ordinary Euclidean 3-space:
      </p>

      <Definition title="Pseudosphere">
        <p>
          The surface of revolution of a tractrix (a curve whose tangent
          segments have constant length) creates a <strong>pseudosphere</strong>—a
          surface with constant negative Gaussian curvature.
        </p>
      </Definition>

      <Example title="Beltrami's Insight">
        <p>
          The pseudosphere has the same intrinsic geometry as the hyperbolic
          plane—geodesics on the pseudosphere satisfy hyperbolic axioms.
        </p>
        <p className="mt-2 text-dark-400">
          However, the pseudosphere only represents part of the hyperbolic
          plane; it has an edge where it becomes singular. The full hyperbolic
          plane cannot be embedded in <InlineMath>{'\\mathbb{R}^3'}</InlineMath>{' '}
          without self-intersection.
        </p>
      </Example>

      <h3>Comparing the Models</h3>

      <Theorem title="Model Comparison">
        <p>
          Each model has advantages:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Poincaré disk:</strong> Conformal (preserves angles), compact, beautiful for tessellations</li>
          <li><strong>Poincaré half-plane:</strong> Conformal, natural for complex analysis and modular forms</li>
          <li><strong>Klein disk:</strong> Geodesics are straight lines, easy to visualize parallel properties</li>
          <li><strong>Hyperboloid:</strong> Natural symmetries, useful for computation</li>
        </ul>
      </Theorem>

      <h3>Artistic and Cultural Impact</h3>

      <p>
        The Poincaré disk model inspired art:
      </p>

      <Example title="M.C. Escher's Circle Limit">
        <p>
          The artist M.C. Escher created his famous "Circle Limit" series
          using the Poincaré disk model. Fish, angels, and devils tile the
          hyperbolic plane, growing smaller toward the boundary but all
          congruent in hyperbolic terms.
        </p>
        <p className="mt-2 text-dark-400">
          Escher was introduced to hyperbolic geometry by mathematician
          H.S.M. Coxeter, leading to a fruitful collaboration between
          art and mathematics.
        </p>
      </Example>

      <Callout type="info">
        <strong>Visualization is Understanding:</strong> These models transformed
        hyperbolic geometry from abstract axioms into something we can see
        and manipulate. They proved consistency, enabled computation, inspired
        art, and eventually helped physicists understand the geometry of
        spacetime in general relativity.
      </Callout>

      <SectionQuiz sectionId={58} questions={quizMap[58] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
