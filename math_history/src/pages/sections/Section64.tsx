import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Euler's Polyhedron Formula</h2>

      <p>
        In 1750, Leonhard Euler discovered a remarkable relationship among the
        vertices, edges, and faces of convex polyhedra. This simple formula—
        <InlineMath>V - E + F = 2</InlineMath>—was the first theorem of topology,
        a branch of mathematics that would only fully emerge a century later.
        It reveals that certain properties of shapes are preserved even when
        the shapes are stretched and deformed.
      </p>

      <Callout type="info">
        <strong>The Birth of Topology:</strong> Euler's formula was the first
        result to depend not on measurements (lengths, angles, areas) but on
        how parts of a shape are connected. This "rubber sheet geometry"
        eventually became topology—the study of properties preserved under
        continuous deformation.
      </Callout>

      <h3>The Formula</h3>

      <Theorem title="Euler's Polyhedron Formula">
        <p>
          For any convex polyhedron with <InlineMath>V</InlineMath> vertices,{' '}
          <InlineMath>E</InlineMath> edges, and <InlineMath>F</InlineMath> faces:
        </p>
        <MathBlock>
          {`V - E + F = 2`}
        </MathBlock>
      </Theorem>

      <Example title="The Platonic Solids">
        <p>
          Verify Euler's formula for each Platonic solid:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="px-4 py-2 text-left">Solid</th>
                <th className="px-4 py-2 text-left">V</th>
                <th className="px-4 py-2 text-left">E</th>
                <th className="px-4 py-2 text-left">F</th>
                <th className="px-4 py-2 text-left">V - E + F</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Tetrahedron</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Cube</td>
                <td className="px-4 py-2">8</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Octahedron</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">8</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="px-4 py-2">Dodecahedron</td>
                <td className="px-4 py-2">20</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Icosahedron</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2">20</td>
                <td className="px-4 py-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <h3>Why Does It Work?</h3>

      <p>
        Several proofs of Euler's formula exist, each illuminating different
        aspects:
      </p>

      <Example title="Proof by Edge Removal">
        <p>
          Start with a convex polyhedron and project it onto a plane (imagine
          looking at it from outside). This gives a planar graph.
        </p>
        <p className="mt-2">
          Now remove edges one at a time:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Removing an edge that bounds two faces merges them: E decreases by 1, F decreases by 1, so V - E + F stays the same</li>
          <li>Removing an edge that has a degree-1 vertex also removes that vertex: V and E each decrease by 1, so V - E + F stays the same</li>
        </ul>
        <p className="mt-2">
          Continue until only one vertex and one face remain:{' '}
          <InlineMath>V - E + F = 1 - 0 + 1 = 2</InlineMath>.
        </p>
      </Example>

      <h3>The Euler Characteristic</h3>

      <Definition title="Euler Characteristic">
        <p>
          The <strong>Euler characteristic</strong> of a surface is:
        </p>
        <MathBlock>
          {`\\chi = V - E + F`}
        </MathBlock>
        <p className="mt-2">
          For any decomposition of the surface into vertices, edges, and faces,
          this quantity is the same—it's a <em>topological invariant</em>.
        </p>
      </Definition>

      <Example title="Different Decompositions">
        <p>
          A cube has <InlineMath>\chi = 8 - 12 + 6 = 2</InlineMath>.
        </p>
        <p className="mt-2">
          If we subdivide each face into 4 triangles (adding vertices and edges),
          the new counts might be different, but <InlineMath>\chi</InlineMath>{' '}
          stays 2.
        </p>
        <p className="mt-2 text-dark-400">
          The Euler characteristic depends only on the topology of the surface,
          not on how it's divided up.
        </p>
      </Example>

      <h3>Beyond Convex Polyhedra</h3>

      <p>
        Euler's formula extends beyond convex polyhedra:
      </p>

      <Example title="The Sphere">
        <p>
          Any decomposition of a sphere into regions gives{' '}
          <InlineMath>\chi = 2</InlineMath>. The sphere is topologically
          equivalent to any convex polyhedron.
        </p>
      </Example>

      <Example title="The Torus">
        <p>
          A torus (donut shape) has Euler characteristic <InlineMath>\chi = 0</InlineMath>.
        </p>
        <p className="mt-2">
          One decomposition: divide the torus into a grid with{' '}
          <InlineMath>m \times n</InlineMath> squares. Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>V = mn</InlineMath> (vertices)</li>
          <li><InlineMath>E = 2mn</InlineMath> (horizontal and vertical edges)</li>
          <li><InlineMath>F = mn</InlineMath> (square faces)</li>
          <li><InlineMath>V - E + F = mn - 2mn + mn = 0</InlineMath></li>
        </ul>
      </Example>

      <Theorem title="Euler Characteristic for Surfaces">
        <p>
          The Euler characteristic depends on the number of "holes":
        </p>
        <MathBlock>
          {`\\chi = 2 - 2g`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>g</InlineMath> is the <strong>genus</strong> (number
          of handles/holes).
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Sphere: <InlineMath>g = 0</InlineMath>, <InlineMath>\chi = 2</InlineMath></li>
          <li>Torus: <InlineMath>g = 1</InlineMath>, <InlineMath>\chi = 0</InlineMath></li>
          <li>Double torus: <InlineMath>g = 2</InlineMath>, <InlineMath>\chi = -2</InlineMath></li>
        </ul>
      </Theorem>

      <h3>Applications</h3>

      <Example title="Graph Theory">
        <p>
          For a connected planar graph (a graph that can be drawn on a plane
          without edge crossings):
        </p>
        <MathBlock>
          {`V - E + F = 2`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>F</InlineMath> includes the "outer" infinite face.
          This constrains what graphs can be planar.
        </p>
      </Example>

      <Example title="Proving K₅ is Non-Planar">
        <p>
          The complete graph <InlineMath>K_5</InlineMath> (5 vertices, each
          connected to all others) has <InlineMath>V = 5</InlineMath> and{' '}
          <InlineMath>E = 10</InlineMath>.
        </p>
        <p className="mt-2">
          If it were planar, Euler's formula would give{' '}
          <InlineMath>F = 2 - V + E = 7</InlineMath>.
        </p>
        <p className="mt-2">
          But each face must have at least 3 edges, and each edge borders
          at most 2 faces, so <InlineMath>{`3F \\leq 2E`}</InlineMath>, giving{' '}
          <InlineMath>{`F \\leq 6.67`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Contradiction! So <InlineMath>K_5</InlineMath> cannot be planar.
        </p>
      </Example>

      <h3>Historical Development</h3>

      <p>
        The formula's history is more complex than it appears:
      </p>

      <Example title="Descartes's Anticipation">
        <p>
          René Descartes discovered a related result around 1630: the sum of
          angular defects at vertices of a convex polyhedron equals{' '}
          <InlineMath>{`4\\pi`}</InlineMath>. This is equivalent to Euler's
          formula but was stated differently and lost for centuries.
        </p>
      </Example>

      <Example title="Euler's Announcement (1750)">
        <p>
          Euler stated the formula in a letter to Goldbach but initially
          offered no proof. His first proof had gaps; Legendre later provided
          a rigorous proof.
        </p>
      </Example>

      <Example title="Cauchy and Rigor (1811)">
        <p>
          Cauchy gave the first fully rigorous proof and began exploring
          what happens for non-convex polyhedra (where the formula can fail).
        </p>
      </Example>

      <Callout type="note">
        <strong>A Formula That Launched a Field:</strong> Euler's simple
        formula contained the germ of topology. Recognizing that{' '}
        <InlineMath>V - E + F</InlineMath> is an invariant—unchanged by
        continuous deformation—was the first step toward understanding that
        shapes have properties beyond measurement. This insight would flower
        into one of mathematics' most profound and active fields.
      </Callout>

      <SectionQuiz sectionId={64} questions={quizMap[64] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
