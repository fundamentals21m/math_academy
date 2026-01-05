import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <p>
        Can a graph be drawn in the plane without edge crossings? This question about
        planar graphs connects graph theory to topology and has practical applications
        in circuit design and geographic mapping. Euler's formula relates the number of
        vertices, edges, and faces in any planar drawing, providing a powerful tool for
        proving impossibility results.
      </p>

      <h2>Planar Graphs and Embeddings</h2>

      <Definition title="Planar Graph">
        <p>
          A graph <InlineMath math="G" /> is <strong>planar</strong> if it can be drawn
          in the plane <InlineMath math="\mathbb{R}^2" /> such that:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>Vertices are distinct points</li>
          <li>Edges are curves connecting their endpoints</li>
          <li>Edges do not cross (except at shared endpoints)</li>
        </ul>
        <p className="mt-2">
          Such a drawing is called a <strong>planar embedding</strong> or{' '}
          <strong>plane graph</strong>.
        </p>
      </Definition>

      <Example title="Planar and Non-Planar Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Planar:</strong> <InlineMath math="K_4" />, all trees, all cycles,{' '}
            <InlineMath math="K_{2,n}" /> for any <InlineMath math="n" />
          </li>
          <li>
            <strong>Non-planar:</strong> <InlineMath math="K_5" />,{' '}
            <InlineMath math="K_{3,3}" />, Petersen graph
          </li>
        </ul>
        <p className="mt-2">
          A planar graph may have many different planar embeddings.
        </p>
      </Example>

      <Definition title="Faces">
        <p>
          In a plane graph, the <strong>faces</strong> are the maximal connected regions
          of <InlineMath math="\mathbb{R}^2 - G" /> (the plane minus the drawing).
        </p>
        <p className="mt-2">
          Every plane graph has exactly one unbounded face called the{' '}
          <strong>outer face</strong> or <strong>infinite face</strong>.
        </p>
        <p className="mt-2">
          The <strong>boundary</strong> of a face is the set of edges (and vertices)
          adjacent to it. A face is <strong>incident</strong> to the edges and vertices
          on its boundary.
        </p>
      </Definition>

      <Example title="Faces of K₄">
        <p>
          Draw <InlineMath math="K_4" /> as a triangle with one vertex inside.
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>4 faces: 3 small triangles + 1 outer face</li>
          <li>Each triangular face is bounded by 3 edges</li>
          <li>The outer face is bounded by the outer triangle</li>
        </ul>
      </Example>

      <h2>Euler's Formula</h2>

      <Theorem title="Euler's Formula (Theorem 6.1.21)">
        <p>
          For a connected plane graph <InlineMath math="G" /> with <InlineMath math="n" />{' '}
          vertices, <InlineMath math="m" /> edges, and <InlineMath math="f" /> faces:
        </p>
        <MathBlock math="n - m + f = 2" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Base case:</strong> A tree has <InlineMath math="n" /> vertices,{' '}
              <InlineMath math="n - 1" /> edges, and 1 face.{' '}
              <InlineMath math="n - (n-1) + 1 = 2" />. ✓
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> If <InlineMath math="G" /> is not a tree,
              it has a cycle. Let <InlineMath math="e" /> be an edge on a cycle. Removing{' '}
              <InlineMath math="e" /> merges two faces into one.
            </p>
            <p className="mt-2">
              By induction on <InlineMath math="G - e" />:{' '}
              <InlineMath math="n - (m-1) + (f-1) = 2" />.
            </p>
            <p className="mt-2">
              For <InlineMath math="G" />:{' '}
              <InlineMath math="n - m + f = n - (m-1) - 1 + (f-1) + 1 = 2" />. ✓
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Verifying Euler's Formula">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="K_4" />: <InlineMath math="n = 4" />,{' '}
            <InlineMath math="m = 6" />, <InlineMath math="f = 4" />.{' '}
            <InlineMath math="4 - 6 + 4 = 2" /> ✓
          </li>
          <li>
            <InlineMath math="C_n" />: <InlineMath math="n" /> vertices,{' '}
            <InlineMath math="n" /> edges, 2 faces.{' '}
            <InlineMath math="n - n + 2 = 2" /> ✓
          </li>
          <li>
            Cube graph: <InlineMath math="n = 8" />, <InlineMath math="m = 12" />,{' '}
            <InlineMath math="f = 6" />. <InlineMath math="8 - 12 + 6 = 2" /> ✓
          </li>
        </ul>
      </Example>

      <Theorem title="Corollary 6.1.22 (Edge Bound for Planar Graphs)">
        <p>
          If <InlineMath math="G" /> is a simple planar graph with{' '}
          <InlineMath math="n \geq 3" /> vertices:
        </p>
        <MathBlock math="m \leq 3n - 6" />
        <p className="mt-2">
          Equality holds if and only if every face is a triangle (a{' '}
          <strong>maximal planar graph</strong> or <strong>triangulation</strong>).
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Each face is bounded by at least 3 edges. Counting edge-face incidences:
            </p>
            <MathBlock math="\sum_{\text{faces}} (\text{boundary length}) \geq 3f" />
            <p className="mt-2">
              Each edge borders at most 2 faces, so the sum is at most{' '}
              <InlineMath math="2m" />. Thus <InlineMath math="2m \geq 3f" />, giving{' '}
              <InlineMath math="f \leq 2m/3" />.
            </p>
            <p className="mt-2">
              By Euler: <InlineMath math="2 = n - m + f \leq n - m + 2m/3 = n - m/3" />.
            </p>
            <p className="mt-2">
              Therefore <InlineMath math="m \leq 3n - 6" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="K₅ is Non-Planar (Corollary 6.1.23)">
        <p>
          <InlineMath math="K_5" /> is not planar.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <InlineMath math="K_5" /> has <InlineMath math="n = 5" /> vertices and{' '}
              <InlineMath math="m = 10" /> edges.
            </p>
            <p className="mt-2">
              But <InlineMath math="3n - 6 = 3(5) - 6 = 9 < 10 = m" />.
            </p>
            <p className="mt-2">
              So <InlineMath math="K_5" /> violates the edge bound and cannot be planar.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Corollary 6.1.24 (Triangle-Free Bound)">
        <p>
          If <InlineMath math="G" /> is a simple, triangle-free, planar graph with{' '}
          <InlineMath math="n \geq 3" />:
        </p>
        <MathBlock math="m \leq 2n - 4" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              With no triangles, each face is bounded by at least 4 edges. The same
              counting argument gives <InlineMath math="2m \geq 4f" />, so{' '}
              <InlineMath math="f \leq m/2" />.
            </p>
            <p className="mt-2">
              By Euler: <InlineMath math="2 = n - m + f \leq n - m + m/2 = n - m/2" />.
            </p>
            <p className="mt-2">
              Therefore <InlineMath math="m \leq 2n - 4" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="K₃,₃ is Non-Planar (Corollary 6.1.25)">
        <p>
          <InlineMath math="K_{3,3}" /> is not planar.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <InlineMath math="K_{3,3}" /> is bipartite, hence triangle-free. It has{' '}
              <InlineMath math="n = 6" /> and <InlineMath math="m = 9" />.
            </p>
            <p className="mt-2">
              But <InlineMath math="2n - 4 = 2(6) - 4 = 8 < 9 = m" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>The Dual Graph</h2>

      <Definition title="Dual Graph">
        <p>
          Given a plane graph <InlineMath math="G" />, its <strong>dual</strong>{' '}
          <InlineMath math="G^*" /> is constructed by:
        </p>
        <ol className="mt-2 list-decimal list-inside">
          <li>Place one vertex of <InlineMath math="G^*" /> in each face of <InlineMath math="G" /></li>
          <li>
            For each edge <InlineMath math="e" /> of <InlineMath math="G" />, draw an
            edge of <InlineMath math="G^*" /> crossing <InlineMath math="e" /> and
            connecting the vertices in the two faces incident to <InlineMath math="e" />
          </li>
        </ol>
      </Definition>

      <Example title="Duals of Simple Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            The dual of <InlineMath math="C_n" /> is <InlineMath math="C_n" />{' '}
            (self-dual in a specific embedding)
          </li>
          <li>
            The dual of a tree is a single vertex (1 face)
          </li>
          <li>
            The dual of the tetrahedron graph (<InlineMath math="K_4" />) is{' '}
            <InlineMath math="K_4" />
          </li>
          <li>
            The dual of the cube graph is the octahedron graph
          </li>
        </ul>
      </Example>

      <Theorem title="Properties of Duals (Theorem 6.1.15)">
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <InlineMath math="(G^*)^* = G" /> (for connected <InlineMath math="G" />)
          </li>
          <li>
            <InlineMath math="G^*" /> is connected iff <InlineMath math="G" /> is
            connected
          </li>
          <li>
            <InlineMath math="|V(G^*)| = f(G)" />,{' '}
            <InlineMath math="|E(G^*)| = |E(G)|" />,{' '}
            <InlineMath math="f(G^*) = |V(G)|" />
          </li>
          <li>
            Cycles in <InlineMath math="G" /> correspond to edge cuts (bonds) in{' '}
            <InlineMath math="G^*" />
          </li>
        </ol>
      </Theorem>

      <h2>Platonic Solids</h2>

      <Definition title="Platonic Solid">
        <p>
          A <strong>Platonic solid</strong> is a convex polyhedron where every face is
          the same regular polygon and the same number of faces meet at each vertex.
        </p>
      </Definition>

      <Theorem title="Only Five Platonic Solids (Theorem 6.1.28)">
        <p>
          There are exactly five Platonic solids:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Tetrahedron:</strong> 4 triangular faces, 4 vertices, 6 edges
          </li>
          <li>
            <strong>Cube:</strong> 6 square faces, 8 vertices, 12 edges
          </li>
          <li>
            <strong>Octahedron:</strong> 8 triangular faces, 6 vertices, 12 edges
          </li>
          <li>
            <strong>Dodecahedron:</strong> 12 pentagonal faces, 20 vertices, 30 edges
          </li>
          <li>
            <strong>Icosahedron:</strong> 20 triangular faces, 12 vertices, 30 edges
          </li>
        </ul>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let each face be a regular <InlineMath math="p" />-gon and let{' '}
              <InlineMath math="q" /> faces meet at each vertex. Then{' '}
              <InlineMath math="p, q \geq 3" />.
            </p>
            <p className="mt-2">
              By Euler and counting: <InlineMath math="\frac{1}{p} + \frac{1}{q} > \frac{1}{2}" />.
            </p>
            <p className="mt-2">
              The only solutions with <InlineMath math="p, q \geq 3" /> are:{' '}
              <InlineMath math="(3,3), (3,4), (4,3), (3,5), (5,3)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Outerplanar Graphs</h2>

      <Definition title="Outerplanar Graph">
        <p>
          A graph is <strong>outerplanar</strong> if it has a planar embedding where all
          vertices lie on the outer face.
        </p>
      </Definition>

      <Theorem title="Outerplanar Characterization (Theorem 6.1.31)">
        <p>
          A graph is outerplanar if and only if it has no <InlineMath math="K_4" /> or{' '}
          <InlineMath math="K_{2,3}" /> minor.
        </p>
        <p className="mt-2">
          Equivalently: outerplanar graphs are exactly the graphs embeddable on the
          plane with all vertices on a single face.
        </p>
      </Theorem>

      <Theorem title="Theorem 6.1.30 (Outerplanar Edge Bound)">
        <p>
          If <InlineMath math="G" /> is a simple outerplanar graph with{' '}
          <InlineMath math="n \geq 2" /> vertices:
        </p>
        <MathBlock math="m \leq 2n - 3" />
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Planar:</strong> Can be drawn without edge crossings.
        </li>
        <li>
          <strong>Euler's Formula:</strong> <InlineMath math="n - m + f = 2" /> for
          connected plane graphs.
        </li>
        <li>
          <strong>Edge Bounds:</strong> <InlineMath math="m \leq 3n - 6" /> for planar;{' '}
          <InlineMath math="m \leq 2n - 4" /> if triangle-free.
        </li>
        <li>
          <strong>Non-Planar:</strong> <InlineMath math="K_5" /> and{' '}
          <InlineMath math="K_{3,3}" /> are the key non-planar graphs.
        </li>
        <li>
          <strong>Dual Graph:</strong> Vertices ↔ faces; cycles ↔ cuts.
        </li>
        <li>
          <strong>Platonic Solids:</strong> Only 5 exist, proved using Euler's formula.
        </li>
      </ul>
    </LessonLayout>
  );
}
