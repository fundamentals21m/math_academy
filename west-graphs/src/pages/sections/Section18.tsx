import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <p>
        When is a graph planar? We've seen that <InlineMath math="K_5" /> and{' '}
        <InlineMath math="K_{3,3}" /> are non-planar. Kuratowski's remarkable theorem
        states that these are the only "essential" obstructions—a graph is planar if and
        only if it contains no subdivision of <InlineMath math="K_5" /> or{' '}
        <InlineMath math="K_{3,3}" />. We also study efficient algorithms for testing
        planarity.
      </p>

      <h2>Subdivisions and Minors</h2>

      <Definition title="Subdivision">
        <p>
          A <strong>subdivision</strong> of graph <InlineMath math="H" /> is a graph
          obtained by replacing each edge of <InlineMath math="H" /> with a path of
          length at least 1.
        </p>
        <p className="mt-2">
          The vertices of <InlineMath math="H" /> are called{' '}
          <strong>branch vertices</strong>; the new vertices on the paths are{' '}
          <strong>subdivision vertices</strong>.
        </p>
        <p className="mt-2">
          We write <InlineMath math="TH" /> for a subdivision of <InlineMath math="H" />{' '}
          (T for "topological").
        </p>
      </Definition>

      <Example title="Subdivisions of K₄">
        <p>
          <InlineMath math="K_4" /> has 4 vertices and 6 edges. A subdivision of{' '}
          <InlineMath math="K_4" /> might replace each edge with a path of length 2,
          giving a graph with <InlineMath math="4 + 6 = 10" /> vertices and 12 edges.
        </p>
        <p className="mt-2">
          Any graph containing <InlineMath math="TK_4" /> as a subgraph is "at least as
          complicated" as <InlineMath math="K_4" />.
        </p>
      </Example>

      <Definition title="Minor">
        <p>
          Graph <InlineMath math="H" /> is a <strong>minor</strong> of{' '}
          <InlineMath math="G" /> (written <InlineMath math="H \preceq G" />) if{' '}
          <InlineMath math="H" /> can be obtained from a subgraph of{' '}
          <InlineMath math="G" /> by contracting edges.
        </p>
        <p className="mt-2">
          Equivalently: we can assign each vertex of <InlineMath math="H" /> to a
          connected subgraph of <InlineMath math="G" /> (called a{' '}
          <strong>branch set</strong>), with branch sets pairwise disjoint, such that
          for each edge of <InlineMath math="H" />, there's an edge of{' '}
          <InlineMath math="G" /> between the corresponding branch sets.
        </p>
      </Definition>

      <Theorem
        title="Lemma 6.2.2 (Subdivision implies Minor)"
        proof={
          <>
            <p>
              Let <InlineMath math="G" /> contain <InlineMath math="TH" />, a subdivision of{' '}
              <InlineMath math="H" />. The branch vertices of <InlineMath math="TH" /> correspond
              to vertices of <InlineMath math="H" />, and paths between them (through subdivision
              vertices) correspond to edges of <InlineMath math="H" />.
            </p>
            <p className="mt-2">
              To obtain <InlineMath math="H" /> as a minor:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>Start with <InlineMath math="TH" /> as a subgraph of <InlineMath math="G" /></li>
              <li>
                For each path of subdivision vertices connecting two branch vertices, contract all
                internal edges to collapse the path to a single edge
              </li>
              <li>
                After all contractions, the branch vertices become the vertices of{' '}
                <InlineMath math="H" />, and the contracted paths become edges of{' '}
                <InlineMath math="H" />
              </li>
            </ol>
            <p className="mt-2">
              Thus <InlineMath math="H" /> is obtained from a subgraph of <InlineMath math="G" />{' '}
              by edge contractions, so <InlineMath math="H \preceq G" />.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> contains a subdivision of <InlineMath math="H" />,
          then <InlineMath math="H" /> is a minor of <InlineMath math="G" />.
        </p>
        <p className="mt-2 text-dark-300">
          The converse is false for graphs with vertices of high degree.
        </p>
      </Theorem>

      <h2>Kuratowski's Theorem</h2>

      <Theorem title="Kuratowski's Theorem (Theorem 6.2.3)">
        <p>
          A graph <InlineMath math="G" /> is planar if and only if{' '}
          <InlineMath math="G" /> contains no subdivision of <InlineMath math="K_5" />{' '}
          or <InlineMath math="K_{3,3}" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch (Necessity)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Necessity:</strong> Subdivisions preserve non-planarity. Since{' '}
              <InlineMath math="K_5" /> and <InlineMath math="K_{3,3}" /> are
              non-planar, so is any graph containing their subdivisions.
            </p>
          </div>
        </details>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch (Sufficiency)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Sufficiency:</strong> Prove by induction on{' '}
              <InlineMath math="n + m" />. Consider a non-planar graph{' '}
              <InlineMath math="G" /> with no <InlineMath math="TK_5" /> or{' '}
              <InlineMath math="TK_{3,3}" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="G" /> has a cut vertex or is 1-edge-connected, reduce
              to smaller pieces. For 2-connected <InlineMath math="G" />, analyze
              Tutte's wheel theorem and structure of 3-connected graphs to show{' '}
              <InlineMath math="TK_5" /> or <InlineMath math="TK_{3,3}" /> must exist.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Kuratowski Subgraph">
        <p>
          A <strong>Kuratowski subgraph</strong> of <InlineMath math="G" /> is a
          subgraph that is a subdivision of <InlineMath math="K_5" /> or{' '}
          <InlineMath math="K_{3,3}" />.
        </p>
      </Definition>

      <Example title="Finding a Kuratowski Subgraph">
        <p>
          The Petersen graph is non-planar. It contains <InlineMath math="TK_{3,3}" />:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            One partite set: vertices 0, 1, 2 (outer pentagon vertices at positions 0,
            144°, 288°)
          </li>
          <li>
            Other partite set: vertices 5, 6, 7 (inner star vertices opposite to 0, 1,
            2)
          </li>
          <li>Paths of length 2 connect these via the other vertices</li>
        </ul>
      </Example>

      <h2>Wagner's Theorem (Minor Version)</h2>

      <Theorem
        title="Wagner's Theorem (Theorem 6.2.5)"
        proof={
          <>
            <p>
              <strong>Equivalence with Kuratowski:</strong> We show that{' '}
              <InlineMath math="G" /> has a <InlineMath math="K_5" /> or{' '}
              <InlineMath math="K_{'{'}3,3{'}'}" /> minor iff <InlineMath math="G" /> contains{' '}
              <InlineMath math="TK_5" /> or <InlineMath math="TK_{'{'}3,3{'}'}" />.
            </p>
            <p className="mt-2">
              <strong>(⇐):</strong> By Lemma 6.2.2, subdivision implies minor.
            </p>
            <p className="mt-2">
              <strong>(⇒):</strong> Suppose <InlineMath math="G" /> has <InlineMath math="K_5" /> or{' '}
              <InlineMath math="K_{'{'}3,3{'}'}" /> as a minor. The branch sets form connected subgraphs
              with edges between them.
            </p>
            <p className="mt-2">
              For <InlineMath math="K_5" />: each branch set contains a vertex (pick one from each),
              and paths through the branch sets provide the subdivision. A technical argument shows
              we can always route these paths to form <InlineMath math="TK_5" /> or{' '}
              <InlineMath math="TK_{'{'}3,3{'}'}" />.
            </p>
            <p className="mt-2">
              For <InlineMath math="K_{'{'}3,3{'}'}" /> minors, the low maximum degree (3) means the
              minor structure directly yields a subdivision.
            </p>
            <p className="mt-2">
              Therefore, Wagner's forbidden minor characterization is equivalent to Kuratowski's
              forbidden subdivision characterization.
            </p>
          </>
        }
      >
        <p>
          A graph <InlineMath math="G" /> is planar if and only if{' '}
          <InlineMath math="G" /> has neither <InlineMath math="K_5" /> nor{' '}
          <InlineMath math="K_{3,3}" /> as a minor.
        </p>
      </Theorem>

      <p>
        Wagner's formulation using minors is often more convenient because minors are
        closed under edge contraction, which subdivisions are not.
      </p>

      <Example title="K₅ vs K₅ Minor">
        <p>
          Adding a degree-2 vertex to <InlineMath math="K_5" /> gives{' '}
          <InlineMath math="TK_5" />. This graph has <InlineMath math="K_5" /> as a
          minor (contract the added vertex) but is not isomorphic to{' '}
          <InlineMath math="K_5" />.
        </p>
        <p className="mt-2">
          Wagner's theorem says: contract edges to find <InlineMath math="K_5" /> or{' '}
          <InlineMath math="K_{3,3}" /> as a minor.
        </p>
      </Example>

      <h2>Testing Planarity</h2>

      <p>
        Kuratowski's theorem gives a characterization but doesn't immediately yield an
        efficient algorithm. Several linear-time planarity testing algorithms exist.
      </p>

      <Theorem
        title="Linear-Time Planarity Testing"
        proof={
          <>
            <p>
              <strong>Key insight:</strong> By Euler's formula, a planar graph with{' '}
              <InlineMath math="n" /> vertices has at most <InlineMath math="3n - 6" /> edges, so{' '}
              <InlineMath math="m = O(n)" />. This allows algorithms linear in{' '}
              <InlineMath math="n" />.
            </p>
            <p className="mt-2">
              <strong>Hopcroft-Tarjan approach:</strong>
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                Compute a DFS tree <InlineMath math="T" /> of <InlineMath math="G" />. Non-tree edges
                (back edges) form cycles with tree paths.
              </li>
              <li>
                Process cycles in a specific order, maintaining partial embeddings.
              </li>
              <li>
                At each step, determine which face(s) can accommodate the next path. Use stack-based
                bookkeeping to track constraints in <InlineMath math="O(1)" /> amortized time per edge.
              </li>
              <li>
                If no valid placement exists at any step, the graph is non-planar; otherwise,
                construct the embedding.
              </li>
            </ol>
            <p className="mt-2">
              Each edge is processed a constant number of times, yielding{' '}
              <InlineMath math="O(n)" /> total time.
            </p>
          </>
        }
      >
        <p>
          Planarity can be tested in <InlineMath math="O(n)" /> time.
        </p>
        <p className="mt-2">Key algorithms:</p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Hopcroft-Tarjan (1974):</strong> Path addition method using DFS
          </li>
          <li>
            <strong>Lempel-Even-Cederbaum / PQ-trees (1976):</strong> Vertex addition
            with PQ-tree data structure
          </li>
          <li>
            <strong>Boyer-Myrvold (2004):</strong> Simplified edge addition method
          </li>
        </ul>
      </Theorem>

      <h3>Planarity Testing Overview</h3>

      <Definition title="Path Addition Method">
        <p>
          The Hopcroft-Tarjan algorithm builds an embedding incrementally:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>Compute a DFS tree and find the fundamental cycles.</li>
          <li>
            Add paths one at a time, maintaining a planar embedding.
          </li>
          <li>
            At each step, determine which side of the current drawing a new path must
            go.
          </li>
          <li>
            If no valid placement exists, the graph is non-planar.
          </li>
        </ol>
      </Definition>

      <Definition title="Vertex Addition Method">
        <p>
          Process vertices in order (e.g., by a special numbering):
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            Maintain a representation of all planar embeddings of the graph seen so far.
          </li>
          <li>
            When adding a new vertex, determine if it can be placed consistently.
          </li>
          <li>
            Use PQ-trees to efficiently represent and manipulate the valid orderings.
          </li>
        </ol>
      </Definition>

      <h2>Properties of Planar Graphs</h2>

      <Theorem title="Every Planar Graph has a Small-Degree Vertex">
        <p>
          Every simple planar graph has a vertex of degree at most 5.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              By <InlineMath math="m \leq 3n - 6" />:{' '}
              <InlineMath math="2m \leq 6n - 12" />, so{' '}
              <InlineMath math="\sum d(v) = 2m < 6n" />.
            </p>
            <p className="mt-2">
              By averaging, some vertex has degree{' '}
              <InlineMath math="< 6" />, hence <InlineMath math="\leq 5" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="6-Colorability (Corollary)">
        <p>
          Every planar graph is 6-colorable.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Induct on <InlineMath math="n" />. Remove a vertex <InlineMath math="v" />{' '}
              of degree ≤5. By induction, <InlineMath math="G - v" /> is 6-colorable.
              Since <InlineMath math="v" /> has at most 5 neighbors, some color is
              available for <InlineMath math="v" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Convex Embeddings</h2>

      <Definition title="Convex Embedding">
        <p>
          A <strong>convex embedding</strong> of a planar graph is a planar drawing
          where every face (including the outer face) is a convex polygon.
        </p>
      </Definition>

      <Theorem
        title="Tutte's Barycentric Embedding (Theorem 6.2.9)"
        proof={
          <>
            <p>
              Let <InlineMath math="G" /> be 3-connected and planar. Choose a face{' '}
              <InlineMath math="F" /> to be the outer face and fix its boundary vertices
              on a convex polygon in the plane.
            </p>
            <p className="mt-2">
              For each interior vertex <InlineMath math="v" />, require that its position{' '}
              <InlineMath math="p(v)" /> equals the average of its neighbors' positions:
            </p>
            <MathBlock math="p(v) = \frac{1}{d(v)} \sum_{u \in N(v)} p(u)" />
            <p className="mt-2">
              This gives a system of linear equations. Since <InlineMath math="G" /> is
              3-connected, the system has a unique solution (the matrix is invertible by
              the connection to electrical networks and Kirchhoff's laws).
            </p>
            <p className="mt-2">
              <strong>Convexity:</strong> The key lemma is that in the resulting drawing,
              edges do not cross. This follows because:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                Each vertex is a strict convex combination of its neighbors (barycenter property)
              </li>
              <li>
                By 3-connectivity, every face boundary is a simple cycle
              </li>
              <li>
                A crossing would create a configuration violating the barycenter equations
              </li>
            </ol>
            <p className="mt-2">
              Every face (not just the outer face) is convex in this embedding.
            </p>
          </>
        }
      >
        <p>
          Every 3-connected planar graph has a convex embedding (with any face chosen as
          the outer face).
        </p>
        <p className="mt-2">
          <strong>Method:</strong> Fix the outer face as a convex polygon. Place each
          interior vertex at the barycenter (average) of its neighbors' positions. The
          result is a convex embedding.
        </p>
      </Theorem>

      <h2>Unique Embeddings</h2>

      <Theorem
        title="Whitney's Theorem (Theorem 6.2.11)"
        proof={
          <>
            <p>
              We show that the facial cycles (boundaries of faces) are uniquely determined by the
              graph structure when <InlineMath math="G" /> is 3-connected and planar.
            </p>
            <p className="mt-2">
              <strong>Key observation:</strong> A cycle <InlineMath math="C" /> in <InlineMath math="G" />{' '}
              is a facial cycle in some embedding iff <InlineMath math="G - V(C)" /> is connected
              (for 3-connected graphs).
            </p>
            <p className="mt-2">
              <strong>Proof of uniqueness:</strong>
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                Since <InlineMath math="G" /> is 3-connected, every facial cycle is an induced cycle
                (no chords), and <InlineMath math="G - V(C)" /> remains connected.
              </li>
              <li>
                Conversely, any cycle with <InlineMath math="G - V(C)" /> connected must bound a face
                in any planar embedding.
              </li>
              <li>
                The set of facial cycles is therefore determined solely by <InlineMath math="G" />'s
                structure, not by any particular embedding.
              </li>
            </ol>
            <p className="mt-2">
              Since facial cycles determine the embedding (up to reflection), and the facial cycles
              are uniquely determined, the embedding is unique.
            </p>
            <p className="mt-2">
              <strong>Note:</strong> For 2-connected graphs, different embeddings can have different
              facial cycles (e.g., <InlineMath math="C_n" /> can have either 2-face embedded differently).
            </p>
          </>
        }
      >
        <p>
          A 3-connected planar graph has a unique embedding on the sphere (up to
          homeomorphism).
        </p>
        <p className="mt-2 text-dark-300">
          "Unique" means the cyclic orderings of edges around each vertex are the same
          in any two embeddings (up to global reflection).
        </p>
      </Theorem>

      <Example title="Non-Unique Embedding">
        <p>
          A cycle <InlineMath math="C_n" /> is only 2-connected. Its faces can be
          interchanged: what was inside becomes outside. This gives different embeddings
          in the plane (though the same on the sphere up to reflection).
        </p>
        <p className="mt-2">
          A graph with a cut-vertex has many embeddings: the parts can be rotated
          independently around the cut-vertex.
        </p>
      </Example>

      <h2>Planarity and Minors</h2>

      <Theorem
        title="Robertson-Seymour Graph Minor Theorem"
        proof={
          <>
            <p>
              This is one of the deepest results in graph theory, proved over a series of 23
              papers spanning 1983-2004. We outline the key ideas.
            </p>
            <p className="mt-2">
              <strong>Well-quasi-ordering:</strong> The theorem states that graphs under the
              minor relation form a well-quasi-order (WQO). A WQO has no infinite antichains
              (sets of pairwise incomparable elements) and no infinite descending chains.
            </p>
            <p className="mt-2">
              <strong>Structure theorem:</strong> The proof relies on a deep structure theorem
              for <InlineMath math="H" />-minor-free graphs. For any fixed graph{' '}
              <InlineMath math="H" />, graphs with no <InlineMath math="H" /> minor can be built
              from bounded-treewidth pieces glued along bounded-size separators.
            </p>
            <p className="mt-2">
              <strong>Consequence for forbidden minors:</strong> If property{' '}
              <InlineMath math="\mathcal{P}" /> is closed under minors (if{' '}
              <InlineMath math="G \in \mathcal{P}" /> and <InlineMath math="H \preceq G" />,
              then <InlineMath math="H \in \mathcal{P}" />), then the set of minimal graphs
              not in <InlineMath math="\mathcal{P}" /> must be finite.
            </p>
            <p className="mt-2">
              For planarity, the minimal forbidden minors are exactly <InlineMath math="K_5" />{' '}
              and <InlineMath math="K_{'{'}3,3{'}'}" /> (Wagner's theorem).
            </p>
          </>
        }
      >
        <p>
          In any infinite sequence of graphs <InlineMath math="G_1, G_2, G_3, \ldots" />,
          some <InlineMath math="G_i" /> is a minor of some <InlineMath math="G_j" />{' '}
          with <InlineMath math="i < j" />.
        </p>
        <p className="mt-2 text-dark-300">
          This deep theorem implies that any minor-closed class of graphs (like planar
          graphs) can be characterized by a finite set of forbidden minors.
        </p>
      </Theorem>

      <p>
        Wagner's theorem states that planar graphs are exactly those with no{' '}
        <InlineMath math="K_5" /> or <InlineMath math="K_{3,3}" /> minor. By
        Robertson-Seymour, such finite characterizations exist for many other graph
        classes (though the forbidden sets may be large).
      </p>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Kuratowski's Theorem:</strong> <InlineMath math="G" /> is planar iff
          it contains no <InlineMath math="TK_5" /> or <InlineMath math="TK_{3,3}" />.
        </li>
        <li>
          <strong>Wagner's Theorem:</strong> <InlineMath math="G" /> is planar iff it
          has no <InlineMath math="K_5" /> or <InlineMath math="K_{3,3}" /> minor.
        </li>
        <li>
          <strong>Linear-Time Testing:</strong> Planarity can be tested in{' '}
          <InlineMath math="O(n)" /> time (Hopcroft-Tarjan, Boyer-Myrvold).
        </li>
        <li>
          <strong>Degree Bound:</strong> Every planar graph has{' '}
          <InlineMath math="\delta \leq 5" />.
        </li>
        <li>
          <strong>3-Connected:</strong> Have unique spherical embeddings and admit
          convex drawings.
        </li>
        <li>
          <strong>Robertson-Seymour:</strong> Any minor-closed property has finite
          forbidden minors.
        </li>
      </ul>
    </LessonLayout>
  );
}
