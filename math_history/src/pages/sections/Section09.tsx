import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Area and Volume</h2>

      <p>
        The Greeks developed sophisticated methods for calculating areas and
        volumes, laying the groundwork for integral calculus nearly two thousand
        years before Newton and Leibniz. Their approach, called the <em>method
        of exhaustion</em>, used clever geometric arguments to find exact answers
        to problems that seem to require limits.
      </p>

      <h3>The Regular Polyhedra</h3>

      <p>
        One of the crowning achievements of Greek geometry was the enumeration of
        the <strong>regular polyhedra</strong>—three-dimensional solids whose faces
        are all identical regular polygons meeting at identical vertices.
      </p>

      <Theorem title="The Five Platonic Solids">
        <p>
          There are exactly five regular convex polyhedra:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-800 p-3 rounded">
            <strong className="text-primary-400">Tetrahedron</strong>
            <p className="text-sm">4 triangular faces</p>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <strong className="text-primary-400">Cube</strong>
            <p className="text-sm">6 square faces</p>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <strong className="text-primary-400">Octahedron</strong>
            <p className="text-sm">8 triangular faces</p>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <strong className="text-primary-400">Dodecahedron</strong>
            <p className="text-sm">12 pentagonal faces</p>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <strong className="text-primary-400">Icosahedron</strong>
            <p className="text-sm">20 triangular faces</p>
          </div>
        </div>
      </Theorem>

      <p>
        The proof that these are the only possibilities is a beautiful application
        of the constraint that angles at each vertex must sum to less than 360°.
      </p>

      <Example title="Why Only Five?">
        <p>
          At each vertex, at least 3 faces must meet. The angles of regular
          polygons are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Triangle: 60°</li>
          <li>Square: 90°</li>
          <li>Pentagon: 108°</li>
          <li>Hexagon: 120°</li>
        </ul>
        <p className="mt-2">
          For the vertex angles to sum to less than 360°:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Triangles: 3, 4, or 5 can meet (3×60=180, 4×60=240, 5×60=300)</li>
          <li>Squares: only 3 can meet (3×90=270)</li>
          <li>Pentagons: only 3 can meet (3×108=324)</li>
          <li>Hexagons: 3×120=360, too much—no solid possible</li>
        </ul>
        <p className="mt-2">This gives exactly 5 possibilities.</p>
      </Example>

      <h3>Archimedes' Contributions</h3>

      <p>
        <strong>Archimedes</strong> (c. 287-212 BCE) was the greatest mathematician
        of antiquity, and perhaps one of the greatest of all time. His calculations
        of areas and volumes anticipated integral calculus.
      </p>

      <Theorem title="Area of a Circle">
        <p>
          Archimedes proved that the area of a circle equals the area of a right
          triangle whose legs are the radius and the circumference:
        </p>
        <MathBlock>
          {`A = \\frac{1}{2} \\cdot r \\cdot (2\\pi r) = \\pi r^2`}
        </MathBlock>
      </Theorem>

      <p>
        His method: inscribe regular polygons in the circle, with more and more
        sides. As the number of sides increases, the polygon's area approaches
        the circle's area.
      </p>

      <Theorem title="Volume of a Sphere">
        <p>
          Archimedes proved that the volume of a sphere is:
        </p>
        <MathBlock>
          {`V = \\frac{4}{3}\\pi r^3`}
        </MathBlock>
        <p className="mt-2">
          He also showed that the volume of a sphere is exactly <InlineMath>\frac{2}{3}</InlineMath>
          the volume of the circumscribing cylinder.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Archimedes' Tombstone:</strong> Archimedes was so proud of his
        discovery about the sphere and cylinder that he asked for a diagram of
        them to be inscribed on his tomb. The Roman general Cicero later reported
        finding this tomb, overgrown with vegetation, and clearing it.
      </Callout>

      <h3>The Method of Exhaustion</h3>

      <Definition title="Method of Exhaustion">
        <p>
          The <strong>method of exhaustion</strong> proves that a curvilinear area
          equals a given value by showing that:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>It cannot be greater (inscribed polygons would exceed it)</li>
          <li>It cannot be less (circumscribed polygons would fall short)</li>
        </ol>
        <p className="mt-2">
          Therefore, it must equal the claimed value exactly.
        </p>
      </Definition>

      <p>
        This technique, developed by Eudoxus (c. 408-355 BCE) and perfected by
        Archimedes, is essentially a rigorous version of taking limits—though the
        Greeks never explicitly used the concept of infinity.
      </p>

      <Example title="Approximating π">
        <p>
          Archimedes approximated π by inscribing and circumscribing regular
          polygons in a circle. Starting with hexagons and doubling the sides
          repeatedly (12, 24, 48, 96), he proved:
        </p>
        <MathBlock>
          {`3\\frac{10}{71} < \\pi < 3\\frac{1}{7}`}
        </MathBlock>
        <p className="mt-2">
          In decimal: <InlineMath>3.1408 &lt; \pi &lt; 3.1429</InlineMath>
        </p>
        <p className="mt-2 text-dark-400">
          This approximation was not improved for 800 years!
        </p>
      </Example>

      <h3>Cavalieri's Principle</h3>

      <p>
        The method of exhaustion anticipated another important principle discovered
        much later by Cavalieri (1635):
      </p>

      <Theorem title="Cavalieri's Principle">
        <p>
          If two solids have equal cross-sectional areas at every height, they
          have equal volumes.
        </p>
      </Theorem>

      <p>
        Archimedes essentially used this principle to compare volumes of spheres,
        cones, and cylinders.
      </p>

      <Callout type="info">
        <strong>Legacy:</strong> The Greek methods for calculating areas and
        volumes were the most advanced techniques available until the invention
        of calculus in the 17th century. Even then, calculus essentially formalized
        and generalized what Archimedes had done for specific cases 1800 years earlier.
      </Callout>

      <SectionQuiz
        sectionId={9}
        questions={quizMap[9] || []}
        title="Area and Volume Quiz"
      />
    </LessonLayout>
  );
}
