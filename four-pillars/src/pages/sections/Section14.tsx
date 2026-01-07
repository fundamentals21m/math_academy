import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Discussion</h2>

      <p>
        Having explored Euclid's axiomatic approach to geometry, it's worth
        reflecting on the foundations of his system and how our understanding
        of axiomatics has evolved over the past two millennia.
      </p>

      <h3>Gaps in Euclid</h3>

      <p>
        While Euclid's <em>Elements</em> was the gold standard of mathematical
        rigor for over 2000 years, modern mathematicians have identified some
        logical gaps. Euclid sometimes assumes properties that aren't stated
        in his axioms, such as:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>That lines and circles actually intersect when they appear to</li>
        <li>The concept of "betweenness" (when is a point between two others?)</li>
        <li>The continuity of geometric objects</li>
      </ul>

      <Callout type="info">
        <strong>Example:</strong> In the very first proposition (constructing an
        equilateral triangle), Euclid draws two circles and claims they intersect.
        But this requires an axiom about continuity—the circles might "pass through"
        each other without meeting!
      </Callout>

      <h3>Hilbert's Axioms</h3>

      <p>
        In 1899, David Hilbert published <em>Foundations of Geometry</em>, which
        gave a complete and rigorous axiom system for Euclidean geometry. Hilbert's
        system has 20 axioms organized into five groups:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">I. Incidence Axioms (8 axioms)</h4>
          <p className="text-slate-300 mt-2">
            These govern the relationships between points, lines, and planes.
            For example: "Two distinct points determine a unique line."
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">II. Order Axioms (4 axioms)</h4>
          <p className="text-slate-300 mt-2">
            These formalize "betweenness"—when a point lies between two others.
            This concept was used implicitly by Euclid but never defined.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">III. Congruence Axioms (5 axioms)</h4>
          <p className="text-slate-300 mt-2">
            These include the SAS axiom and related properties of congruence
            for segments and angles.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-pink-500">
          <h4 className="font-semibold text-pink-400">IV. Parallel Axiom (1 axiom)</h4>
          <p className="text-slate-300 mt-2">
            Playfair's axiom: Given a line and a point not on it, there exists
            exactly one parallel through that point.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-semibold text-purple-400">V. Continuity Axioms (2 axioms)</h4>
          <p className="text-slate-300 mt-2">
            These include the Archimedean axiom (no segment is infinitely large
            or small) and a completeness axiom ensuring no "gaps."
          </p>
        </div>
      </div>

      <h3>The Parallel Axiom and Non-Euclidean Geometry</h3>

      <p>
        For centuries, mathematicians tried to prove the parallel axiom from
        the other axioms, believing it was a theorem rather than an axiom.
        All such attempts failed.
      </p>

      <p>
        In the 19th century, Gauss, Bolyai, and Lobachevsky independently
        discovered that the parallel axiom is <em>independent</em>—it cannot
        be proved from the other axioms. This led to:
      </p>

      <Definition title="Non-Euclidean Geometries">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Hyperbolic geometry:</strong> Given a line and a point,
              there are <em>infinitely many</em> parallels through the point.
              The angle sum of a triangle is less than 180°.</li>
          <li><strong>Spherical geometry:</strong> There are <em>no</em> parallel
              lines (all great circles intersect). The angle sum of a triangle
              is greater than 180°.</li>
        </ul>
      </Definition>

      <Callout type="important">
        <strong>Physical Implications:</strong> Einstein's general relativity
        shows that the geometry of spacetime is actually non-Euclidean! The
        presence of mass causes space to curve, making hyperbolic or spherical
        geometry more accurate descriptions of the universe than Euclidean
        geometry.
      </Callout>

      <h3>The Axiomatic Method</h3>

      <p>
        Hilbert's work established the modern axiomatic method:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Undefined terms (point, line, plane) that get meaning from the axioms</li>
        <li>Axioms that describe relationships between undefined terms</li>
        <li>Theorems that follow logically from the axioms</li>
        <li>Questions of consistency and independence</li>
      </ul>

      <Theorem title="Hilbert's Philosophy">
        <p>
          "One must be able to say at all times—instead of points, lines, and
          planes—tables, chairs, and beer mugs."
        </p>
        <p className="mt-2 text-sm text-slate-400">
          — David Hilbert
        </p>
      </Theorem>

      <p>
        This quote captures the essence of formal axiomatics: the meaning of
        geometric terms comes entirely from how they relate to each other
        through the axioms, not from our intuitive notions.
      </p>

      <h3>Looking Ahead</h3>

      <p>
        In the chapters that follow, we will explore three more approaches
        to geometry:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Coordinates (Chapter 3):</strong> Using algebra to describe
            geometry, leading to analytic geometry.</li>
        <li><strong>Vectors (Chapter 4):</strong> A hybrid of algebra and
            geometry with powerful applications.</li>
        <li><strong>Projective geometry (Chapter 5):</strong> The geometry of
            perspective and projection.</li>
        <li><strong>Transformations (Chapter 7-8):</strong> Understanding
            geometry through symmetry and groups.</li>
      </ul>

      <p>
        Each approach offers different insights and techniques, but they all
        describe the same underlying geometric reality. Understanding how
        these perspectives connect is one of the great achievements of
        modern mathematics.
      </p>

      <h3>Recommended Reading</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Hilbert, D. <em>Foundations of Geometry</em> (1899)</li>
          <li>Hartshorne, R. <em>Geometry: Euclid and Beyond</em> (2000)</li>
          <li>Greenberg, M. <em>Euclidean and Non-Euclidean Geometries</em> (2008)</li>
          <li>Heath's translation of Euclid's <em>Elements</em> with commentary</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={14}
        questions={quizMap[14] || []}
        title="Chapter 2 Discussion Quiz"
      />
    </LessonLayout>
  );
}
