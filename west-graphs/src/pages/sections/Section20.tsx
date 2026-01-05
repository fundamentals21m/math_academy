import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <p>
        Instead of coloring vertices, we can color edges—assigning colors to edges such
        that edges sharing a vertex have different colors. This models problems like
        scheduling rounds of games or assigning time slots. Vizing's remarkable theorem
        shows that edge coloring needs at most one more color than the obvious lower
        bound. We also study line graphs, which transform edge problems into vertex
        problems.
      </p>

      <h2>Edge Coloring</h2>

      <Definition title="Edge Coloring and Edge Chromatic Number">
        <p>
          A <strong>proper edge coloring</strong> (or <strong>edge coloring</strong>) of
          a graph <InlineMath math="G" /> assigns colors to edges such that edges sharing
          an endpoint have different colors.
        </p>
        <p className="mt-2">
          The <strong>edge chromatic number</strong> (or <strong>chromatic index</strong>){' '}
          <InlineMath math="\chi'(G)" /> is the minimum number of colors needed.
        </p>
      </Definition>

      <Example title="Edge Chromatic Numbers">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\chi'(K_n) = n - 1" /> if <InlineMath math="n" /> is even,{' '}
            <InlineMath math="n" /> if <InlineMath math="n" /> is odd
          </li>
          <li>
            <InlineMath math="\chi'(K_{n,n}) = n" />
          </li>
          <li>
            <InlineMath math="\chi'(C_n) = 2" /> if <InlineMath math="n" /> is even,{' '}
            <InlineMath math="3" /> if odd
          </li>
          <li>
            <InlineMath math="\chi'(\text{Petersen}) = 4" />
          </li>
        </ul>
      </Example>

      <Theorem title="Lower Bound">
        <p>
          <InlineMath math="\chi'(G) \geq \Delta(G)" /> for every graph{' '}
          <InlineMath math="G" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              At any vertex <InlineMath math="v" /> of degree <InlineMath math="d(v)" />,
              all <InlineMath math="d(v)" /> incident edges need different colors. Thus{' '}
              <InlineMath math="\chi'(G) \geq \max_v d(v) = \Delta(G)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Vizing's Theorem</h2>

      <Theorem title="Vizing's Theorem (Theorem 7.1.1)">
        <p>
          For any simple graph <InlineMath math="G" />:
        </p>
        <MathBlock math="\Delta(G) \leq \chi'(G) \leq \Delta(G) + 1" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The lower bound is obvious. For the upper bound, color edges greedily.
              When an edge <InlineMath math="e = uv" /> can't be colored with{' '}
              <InlineMath math="\Delta" /> colors, use "Vizing fan" argument: construct
              alternating paths of colors (Kempe chains for edges) to recolor and make
              room for <InlineMath math="e" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Class 1 and Class 2">
        <p>
          A graph is <strong>Class 1</strong> if{' '}
          <InlineMath math="\chi'(G) = \Delta(G)" />.
        </p>
        <p className="mt-2">
          A graph is <strong>Class 2</strong> if{' '}
          <InlineMath math="\chi'(G) = \Delta(G) + 1" />.
        </p>
      </Definition>

      <Example title="Classification Examples">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Class 1:</strong> All bipartite graphs, <InlineMath math="K_{2n}" />,
            most planar graphs
          </li>
          <li>
            <strong>Class 2:</strong> <InlineMath math="K_{2n+1}" />,{' '}
            <InlineMath math="C_{2n+1}" />, Petersen graph
          </li>
        </ul>
      </Example>

      <Theorem title="König's Edge Coloring Theorem (Theorem 7.1.4)">
        <p>
          Every bipartite graph is Class 1:{' '}
          <InlineMath math="\chi'(G) = \Delta(G)" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Induct on <InlineMath math="m" />. Given a <InlineMath math="\Delta" />
              -edge-coloring of <InlineMath math="G - e" />, extend to{' '}
              <InlineMath math="G" /> using Kempe chains of alternating colors. Since{' '}
              <InlineMath math="G" /> is bipartite, chains don't form odd cycles, so
              recoloring works.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Line Graphs</h2>

      <Definition title="Line Graph">
        <p>
          The <strong>line graph</strong> <InlineMath math="L(G)" /> of graph{' '}
          <InlineMath math="G" /> has:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            Vertices: edges of <InlineMath math="G" />
          </li>
          <li>
            Edges: two vertices of <InlineMath math="L(G)" /> are adjacent iff the
            corresponding edges of <InlineMath math="G" /> share an endpoint
          </li>
        </ul>
      </Definition>

      <Example title="Line Graph Examples">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="L(K_n) = T(n)" />, the triangular graph (vertices are
            2-subsets of <InlineMath math="[n]" />, adjacent if they intersect)
          </li>
          <li>
            <InlineMath math="L(K_{m,n}) = K_m \square K_n" /> (Cartesian product)
          </li>
          <li>
            <InlineMath math="L(C_n) = C_n" />
          </li>
          <li>
            <InlineMath math="L(P_n) = P_{n-1}" />
          </li>
        </ul>
      </Example>

      <Theorem title="Edge Coloring via Line Graphs">
        <p>
          <InlineMath math="\chi'(G) = \chi(L(G))" />
        </p>
        <p className="mt-2 text-dark-300">
          Edge coloring of <InlineMath math="G" /> = vertex coloring of{' '}
          <InlineMath math="L(G)" />.
        </p>
      </Theorem>

      <Theorem title="Line Graph Clique Number">
        <p>
          <InlineMath math="\omega(L(G)) = \max(\Delta(G), \omega'(G))" />
        </p>
        <p className="mt-2">
          where <InlineMath math="\omega'(G)" /> is the maximum number of edges pairwise
          sharing endpoints (triangle gives 3 mutually adjacent edges).
        </p>
      </Theorem>

      <h3>Characterizing Line Graphs</h3>

      <Theorem title="Beineke's Characterization (Theorem 7.1.16)">
        <p>
          A graph <InlineMath math="H" /> is a line graph if and only if{' '}
          <InlineMath math="H" /> has none of the nine forbidden induced subgraphs shown
          in Beineke's list.
        </p>
        <p className="mt-2 text-dark-300">
          The forbidden graphs include <InlineMath math="K_{1,3}" /> (claw) and eight
          others.
        </p>
      </Theorem>

      <Definition title="Claw-Free Graph">
        <p>
          A graph is <strong>claw-free</strong> if it contains no induced{' '}
          <InlineMath math="K_{1,3}" />.
        </p>
        <p className="mt-2">
          Every line graph is claw-free, but not conversely.
        </p>
      </Definition>

      <h2>Multigraph Edge Coloring</h2>

      <Definition title="Multigraph Edge Chromatic Number">
        <p>
          For multigraphs, <InlineMath math="\chi'(G)" /> can exceed{' '}
          <InlineMath math="\Delta(G) + 1" />. The <strong>multiplicity</strong>{' '}
          <InlineMath math="\mu(G)" /> is the maximum number of parallel edges between
          any pair of vertices.
        </p>
      </Definition>

      <Theorem title="Shannon's Theorem (Theorem 7.1.10)">
        <p>
          For any multigraph <InlineMath math="G" />:
        </p>
        <MathBlock math="\chi'(G) \leq \left\lfloor \frac{3\Delta(G)}{2} \right\rfloor" />
      </Theorem>

      <Theorem title="Vizing's Theorem for Multigraphs">
        <p>
          <InlineMath math="\chi'(G) \leq \Delta(G) + \mu(G)" />
        </p>
      </Theorem>

      <h2>Edge Coloring Algorithms</h2>

      <Theorem title="Misra-Gries Algorithm">
        <p>
          A <InlineMath math="(\Delta + 1)" />-edge-coloring can be computed in{' '}
          <InlineMath math="O(mn)" /> time using Vizing fan rotations.
        </p>
      </Theorem>

      <Theorem title="Complexity of Optimal Edge Coloring">
        <p>
          Determining whether a graph is Class 1 (i.e., whether{' '}
          <InlineMath math="\chi' = \Delta" />) is NP-complete even for 3-regular
          graphs.
        </p>
        <p className="mt-2 text-dark-300">
          However, for bipartite graphs, a <InlineMath math="\Delta" />-edge-coloring
          can be found in polynomial time.
        </p>
      </Theorem>

      <h2>Applications</h2>

      <h3>Round-Robin Tournaments</h3>

      <Example title="Scheduling Tournaments">
        <p>
          In a round-robin tournament with <InlineMath math="n" /> teams, each team
          plays every other team once. Model as <InlineMath math="K_n" />: vertices are
          teams, edges are games.
        </p>
        <p className="mt-2">
          An edge coloring assigns rounds: all games of one color happen in one round.{' '}
          <InlineMath math="\chi'(K_n)" /> = minimum rounds needed.
        </p>
        <p className="mt-2">
          For <InlineMath math="n" /> even: <InlineMath math="n - 1" /> rounds suffice.
          For <InlineMath math="n" /> odd: <InlineMath math="n" /> rounds needed (one
          team has a bye each round).
        </p>
      </Example>

      <h3>Frequency Assignment</h3>

      <Example title="Radio Frequency Assignment">
        <p>
          Transmitters that might interfere are connected by edges. Edge colors represent
          time slots or frequencies. An edge coloring ensures non-interfering
          transmission schedules.
        </p>
      </Example>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Edge Chromatic Number:</strong>{' '}
          <InlineMath math="\chi'(G)" /> = minimum colors for proper edge coloring.
        </li>
        <li>
          <strong>Vizing's Theorem:</strong>{' '}
          <InlineMath math="\Delta(G) \leq \chi'(G) \leq \Delta(G) + 1" /> for simple
          graphs.
        </li>
        <li>
          <strong>Class 1 vs Class 2:</strong> Class 1 achieves lower bound; Class 2
          needs extra color.
        </li>
        <li>
          <strong>König:</strong> Bipartite graphs are Class 1.
        </li>
        <li>
          <strong>Line Graph:</strong> <InlineMath math="L(G)" /> converts edges to
          vertices; <InlineMath math="\chi'(G) = \chi(L(G))" />.
        </li>
        <li>
          <strong>Multigraphs:</strong>{' '}
          <InlineMath math="\chi' \leq \Delta + \mu" /> and{' '}
          <InlineMath math="\chi' \leq 3\Delta/2" />.
        </li>
        <li>
          <strong>Complexity:</strong> Deciding Class 1 is NP-complete, but{' '}
          <InlineMath math="(\Delta + 1)" />-coloring is polynomial.
        </li>
      </ul>
    </LessonLayout>
  );
}
