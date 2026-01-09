import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2>Hyperbolic Geometry</h2>

      <p>
        In the 1820s and 1830s, three mathematicians independently made one of
        the most revolutionary discoveries in the history of mathematics: a
        consistent geometry in which Euclid's parallel postulate is false.
        Carl Friedrich Gauss, János Bolyai, and Nikolai Lobachevsky showed
        that denying the parallel postulate leads not to contradiction, but
        to a beautiful new world—hyperbolic geometry.
      </p>

      <Callout type="info">
        <strong>Breaking Free:</strong> For over two thousand years, geometry
        meant Euclidean geometry. The discovery of hyperbolic geometry shattered
        this monopoly and opened the door to infinitely many possible geometries.
      </Callout>

      <h3>The Founders</h3>

      <p>
        Three mathematicians arrived at hyperbolic geometry independently:
      </p>

      <Example title="Carl Friedrich Gauss (c. 1816)">
        <p>
          Gauss, the "prince of mathematicians," explored non-Euclidean geometry
          privately but never published, fearing ridicule. His letters reveal
          he understood the subject deeply.
        </p>
        <p className="mt-2 text-dark-400">
          Gauss wrote: "I have begun to work out everything so satisfactorily
          that I can already solve every problem... except for the determination
          of a constant, which cannot be obtained a priori."
        </p>
      </Example>

      <Example title="János Bolyai (1823)">
        <p>
          The young Hungarian mathematician Bolyai developed hyperbolic geometry
          and published it in 1832 as an appendix to his father's mathematics
          textbook.
        </p>
        <p className="mt-2">
          His father Farkas, who had struggled with the parallel postulate for
          years, had warned him: "Do not try the parallels... I have traveled
          past all reefs of this infernal Dead Sea."
        </p>
        <p className="mt-2 text-dark-400">
          János responded: "Out of nothing I have created a strange new universe."
        </p>
      </Example>

      <Example title="Nikolai Lobachevsky (1826)">
        <p>
          The Russian mathematician Lobachevsky was the first to publish,
          presenting his "imaginary geometry" to Kazan University in 1826.
          He spent decades developing and defending the theory.
        </p>
        <p className="mt-2 text-dark-400">
          Lobachevsky even tried to test his geometry astronomically, measuring
          parallax of distant stars to detect spatial curvature.
        </p>
      </Example>

      <h3>The Hyperbolic Axiom</h3>

      <p>
        Hyperbolic geometry accepts all of Euclid's postulates except the fifth,
        replacing it with:
      </p>

      <Definition title="Hyperbolic Parallel Axiom">
        <p>
          Given a line <InlineMath>\ell</InlineMath> and a point{' '}
          <InlineMath>P</InlineMath> not on <InlineMath>\ell</InlineMath>,
          there exist <em>at least two</em> distinct lines through{' '}
          <InlineMath>P</InlineMath> that do not intersect{' '}
          <InlineMath>\ell</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          In fact, infinitely many such "parallel" lines exist in hyperbolic
          geometry.
        </p>
      </Definition>

      <h3>Parallel Lines in Hyperbolic Space</h3>

      <p>
        The behavior of parallel lines is fundamentally different:
      </p>

      <Definition title="Asymptotic Parallels">
        <p>
          Given a line <InlineMath>\ell</InlineMath> and point{' '}
          <InlineMath>P</InlineMath> not on it, there are exactly two lines
          through <InlineMath>P</InlineMath> that approach{' '}
          <InlineMath>\ell</InlineMath> asymptotically—they get arbitrarily
          close but never meet.
        </p>
        <p className="mt-2">
          These are called <strong>limiting parallels</strong> or{' '}
          <strong>asymptotic parallels</strong>.
        </p>
      </Definition>

      <Definition title="Ultra-Parallels">
        <p>
          Between the two limiting parallels lie infinitely many{' '}
          <strong>ultra-parallel</strong> (or <strong>divergent parallel</strong>)
          lines—they don't intersect <InlineMath>\ell</InlineMath> and diverge
          from it in both directions.
        </p>
      </Definition>

      <Example title="The Angle of Parallelism">
        <p>
          The angle <InlineMath>\Pi(d)</InlineMath> between a perpendicular
          from <InlineMath>P</InlineMath> to <InlineMath>\ell</InlineMath> and
          a limiting parallel is called the <em>angle of parallelism</em>.
        </p>
        <MathBlock>
          {`\\Pi(d) = 2\\arctan(e^{-d/k})`}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>d</InlineMath> is the distance from{' '}
          <InlineMath>P</InlineMath> to <InlineMath>\ell</InlineMath>, and{' '}
          <InlineMath>k</InlineMath> is a constant (the "curvature radius").
        </p>
        <p className="mt-2 text-dark-400">
          As <InlineMath>{`d \\to 0`}</InlineMath>,{' '}
          <InlineMath>{`\\Pi(d) \\to 90°`}</InlineMath> (Euclidean behavior).
          As <InlineMath>{`d \\to \\infty`}</InlineMath>,{' '}
          <InlineMath>{`\\Pi(d) \\to 0`}</InlineMath>.
        </p>
      </Example>

      <h3>Triangle Properties</h3>

      <p>
        Triangles behave very differently in hyperbolic geometry:
      </p>

      <Theorem title="Angle Sum Theorem">
        <p>
          In hyperbolic geometry, the sum of angles in any triangle is{' '}
          <em>strictly less</em> than <InlineMath>180°</InlineMath>:
        </p>
        <MathBlock>
          {`\\alpha + \\beta + \\gamma < 180°`}
        </MathBlock>
        <p className="mt-2">
          The difference <InlineMath>{`\\delta = 180° - (\\alpha + \\beta + \\gamma)`}</InlineMath>{' '}
          is called the <strong>angular defect</strong>.
        </p>
      </Theorem>

      <Theorem title="Area-Defect Relationship">
        <p>
          The area of a hyperbolic triangle is proportional to its angular defect:
        </p>
        <MathBlock>
          {`\\text{Area} = k^2 \\cdot \\delta`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This remarkable result means there's an absolute upper bound on
          triangle areas: as the defect approaches <InlineMath>180°</InlineMath>{' '}
          (for "ideal triangles" with vertices at infinity), the area approaches{' '}
          <InlineMath>{`\\pi k^2`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Asymptotic Triangles">
        <p>
          In hyperbolic geometry, triangles can have one, two, or even three
          vertices "at infinity"—where asymptotic parallels meet.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Singly asymptotic:</strong> One ideal vertex, angle sum still less than 180°</li>
          <li><strong>Doubly asymptotic:</strong> Two ideal vertices</li>
          <li><strong>Ideal triangle:</strong> Three ideal vertices, all angles are 0°</li>
        </ul>
        <p className="mt-2 text-dark-400">
          All ideal triangles have the same area: <InlineMath>{`\\pi k^2`}</InlineMath>.
        </p>
      </Example>

      <h3>Similar Triangles Don't Exist</h3>

      <Theorem title="No Similar Triangles">
        <p>
          In hyperbolic geometry, if two triangles have the same angles, they
          are <em>congruent</em> (identical in size).
        </p>
        <p className="mt-2 text-dark-400">
          There are no similar triangles of different sizes! This is because
          angle sum determines area, so same angles means same area.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>An Absolute Scale:</strong> Hyperbolic geometry has an intrinsic
        length scale. You cannot "scale up" a figure while preserving its angles.
        This is fundamentally different from Euclidean geometry, where similar
        figures of any size exist.
      </Callout>

      <h3>Other Surprising Properties</h3>

      <Example title="Circles and Horocycles">
        <p>
          In hyperbolic geometry:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The circumference of a circle grows exponentially with radius</li>
          <li>A <strong>horocycle</strong> is a "circle of infinite radius"—the limit of circles as centers recede to infinity</li>
          <li>Horocycles are orthogonal to a family of asymptotic parallels</li>
        </ul>
      </Example>

      <Example title="The Hyperbolic Plane is Infinite">
        <p>
          Despite having an intrinsic scale, the hyperbolic plane is infinite
          in extent. In fact, it has "more room" than the Euclidean plane:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Circles have circumference <InlineMath>{`2\\pi k \\sinh(r/k)`}</InlineMath></li>
          <li>Disk area is <InlineMath>{`2\\pi k^2(\\cosh(r/k) - 1)`}</InlineMath></li>
          <li>Both grow exponentially with radius <InlineMath>r</InlineMath></li>
        </ul>
      </Example>

      <h3>Consistency</h3>

      <p>
        The critical question: is hyperbolic geometry logically consistent?
      </p>

      <Theorem title="Relative Consistency">
        <p>
          Hyperbolic geometry is consistent if and only if Euclidean geometry
          is consistent.
        </p>
        <p className="mt-2 text-dark-400">
          This was established by constructing models of hyperbolic geometry
          within Euclidean geometry—if a contradiction existed in hyperbolic
          geometry, it would translate to a contradiction in Euclidean geometry.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>A New Universe:</strong> Hyperbolic geometry is as valid as
        Euclidean geometry. The parallel postulate is truly independent—it
        can neither be proved nor disproved from the other axioms. Mathematics
        contains multiple consistent geometries, and which one describes
        physical space is an empirical question, not a mathematical one.
      </Callout>

      <h3>Reception and Impact</h3>

      <p>
        The discovery was initially met with skepticism:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Gauss:</strong> Praised Bolyai privately but never publicly
          championed the new geometry
        </li>
        <li>
          <strong>Bolyai:</strong> Was crushed to learn Gauss had anticipated
          his discovery; published nothing more
        </li>
        <li>
          <strong>Lobachevsky:</strong> Was ridiculed by some contemporaries
          but persisted in developing the theory
        </li>
      </ul>

      <p className="mt-4">
        Only after Riemann, Beltrami, and others provided concrete models in
        the 1860s–1870s did non-Euclidean geometry gain acceptance, revolutionizing
        mathematics and eventually physics through Einstein's general relativity.
      </p>

      <SectionQuiz sectionId={57} questions={quizMap[57] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
