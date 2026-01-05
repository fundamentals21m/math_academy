import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <p>
        How resilient is a network to failures? If we remove vertices or edges, does the
        graph remain connected? The study of connectivity measures how "well-connected"
        a graph is and identifies its vulnerable points. These concepts are fundamental
        to network reliability and algorithm design.
      </p>

      <h2>Separating Sets and Connectivity</h2>

      <Definition title="Separating Set and Cut">
        <p>
          A <strong>separating set</strong> or <strong>vertex cut</strong> of a connected
          graph <InlineMath math="G" /> is a set <InlineMath math="S \subseteq V(G)" />{' '}
          such that <InlineMath math="G - S" /> has more than one component.
        </p>
        <p className="mt-2">
          A <strong>disconnecting set</strong> of edges is a set{' '}
          <InlineMath math="F \subseteq E(G)" /> such that <InlineMath math="G - F" />{' '}
          has more than one component. A disconnecting set is an{' '}
          <strong>edge cut</strong> if no proper subset is also disconnecting.
        </p>
      </Definition>

      <Definition title="Connectivity Numbers">
        <p>
          The <strong>connectivity</strong> (or <strong>vertex connectivity</strong>){' '}
          <InlineMath math="\kappa(G)" /> is the minimum size of a vertex cut, or{' '}
          <InlineMath math="n - 1" /> if <InlineMath math="G = K_n" />.
        </p>
        <p className="mt-2">
          The <strong>edge-connectivity</strong> <InlineMath math="\kappa'(G)" /> is the
          minimum size of an edge cut (if <InlineMath math="G" /> is connected).
        </p>
        <p className="mt-2">
          A graph is <strong>
            <InlineMath math="k" />-connected
          </strong>{' '}
          if <InlineMath math="\kappa(G) \geq k" />, and{' '}
          <strong>
            <InlineMath math="k" />-edge-connected
          </strong>{' '}
          if <InlineMath math="\kappa'(G) \geq k" />.
        </p>
      </Definition>

      <Example title="Connectivity of Common Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="K_n" />: <InlineMath math="\kappa = \kappa' = n - 1" />
          </li>
          <li>
            <InlineMath math="K_{m,n}" /> (<InlineMath math="m \leq n" />):{' '}
            <InlineMath math="\kappa = \kappa' = m" />
          </li>
          <li>
            <InlineMath math="C_n" />: <InlineMath math="\kappa = \kappa' = 2" />
          </li>
          <li>
            <InlineMath math="P_n" />: <InlineMath math="\kappa = \kappa' = 1" />
          </li>
          <li>
            Petersen graph: <InlineMath math="\kappa = \kappa' = 3" />
          </li>
        </ul>
      </Example>

      <Theorem title="Theorem 4.1.9 (Connectivity Bounds)">
        <p>
          For any graph <InlineMath math="G" />:
        </p>
        <MathBlock math="\kappa(G) \leq \kappa'(G) \leq \delta(G)" />
        <p className="mt-2">
          where <InlineMath math="\delta(G)" /> is the minimum vertex degree.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>
                <InlineMath math="\kappa'(G) \leq \delta(G)" />:
              </strong>{' '}
              Deleting all edges at a vertex of minimum degree disconnects the graph
              (isolating that vertex).
            </p>
            <p className="mt-2">
              <strong>
                <InlineMath math="\kappa(G) \leq \kappa'(G)" />:
              </strong>{' '}
              Given a minimum edge cut <InlineMath math="[S, \overline{S}]" />, for each
              edge <InlineMath math="e" /> in the cut, include one endpoint in a vertex
              set <InlineMath math="T" />. Then <InlineMath math="T" /> is a vertex cut
              with <InlineMath math="|T| \leq \kappa'(G)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Strict Inequalities">
        <p>
          Consider a "bowtie" graph: two triangles sharing a vertex. We have{' '}
          <InlineMath math="\delta = 2" />, <InlineMath math="\kappa' = 2" />, but{' '}
          <InlineMath math="\kappa = 1" /> (removing the shared vertex disconnects).
        </p>
        <p className="mt-2">
          For <InlineMath math="K_{2,3}" />: <InlineMath math="\delta = 2" />, but{' '}
          <InlineMath math="\kappa = \kappa' = 2" />.
        </p>
      </Example>

      <h2>Cut-Vertices and Bridges</h2>

      <Definition title="Cut-Vertex and Cut-Edge">
        <p>
          A <strong>cut-vertex</strong> (or <strong>articulation point</strong>) of a
          connected graph <InlineMath math="G" /> is a vertex whose deletion increases
          the number of components.
        </p>
        <p className="mt-2">
          A <strong>cut-edge</strong> (or <strong>bridge</strong>) is an edge whose
          deletion increases the number of components.
        </p>
      </Definition>

      <Theorem title="Theorem 4.1.3 (Cut-Edge Characterization)">
        <p>
          An edge <InlineMath math="e" /> is a cut-edge if and only if{' '}
          <InlineMath math="e" /> belongs to no cycle.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇒)</strong> If <InlineMath math="e = uv" /> lies on a cycle, then
              any path using <InlineMath math="e" /> can be rerouted through the rest of
              the cycle. So <InlineMath math="G - e" /> is connected.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> If <InlineMath math="e = uv" /> lies on no cycle, then
              the unique <InlineMath math="u, v" />-path in <InlineMath math="G" /> uses{' '}
              <InlineMath math="e" />. Deleting <InlineMath math="e" /> leaves no{' '}
              <InlineMath math="u, v" />-path.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Theorem 4.1.2 (Cut-Vertex Characterization)">
        <p>
          A vertex <InlineMath math="v" /> in a connected graph <InlineMath math="G" />{' '}
          is a cut-vertex if and only if there exist vertices{' '}
          <InlineMath math="u, w \neq v" /> such that every{' '}
          <InlineMath math="u, w" />-path passes through <InlineMath math="v" />.
        </p>
      </Theorem>

      <h2>Blocks</h2>

      <p>
        Graphs decompose naturally into pieces separated by cut-vertices.
      </p>

      <Definition title="Block">
        <p>
          A <strong>block</strong> of a graph <InlineMath math="G" /> is a maximal
          connected subgraph of <InlineMath math="G" /> that has no cut-vertex.
        </p>
        <p className="mt-2 text-dark-300">
          Equivalently, a block is either a maximal 2-connected subgraph, or a cut-edge
          (with its endpoints), or an isolated vertex.
        </p>
      </Definition>

      <Theorem title="Theorem 4.1.11 (Block Properties)">
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Every edge belongs to exactly one block.
          </li>
          <li>
            Two blocks share at most one vertex (which must be a cut-vertex).
          </li>
          <li>
            The blocks partition <InlineMath math="E(G)" />.
          </li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Part 1:</strong> Let <InlineMath math="e = uv" /> be an edge.
              Consider the subgraph <InlineMath math="H" /> consisting of all edges
              that lie on a common cycle with <InlineMath math="e" />, plus{' '}
              <InlineMath math="e" /> itself.
            </p>
            <p className="mt-2">
              We claim <InlineMath math="H" /> is a block. If{' '}
              <InlineMath math="H" /> has a cut-vertex <InlineMath math="v" />, then
              some edge <InlineMath math="f" /> in <InlineMath math="H" /> would be
              separated from <InlineMath math="e" /> by <InlineMath math="v" />. But{' '}
              <InlineMath math="f" /> is in <InlineMath math="H" /> precisely because
              it lies on a cycle with <InlineMath math="e" />, so removing{' '}
              <InlineMath math="v" /> cannot separate them—contradiction.
            </p>
            <p className="mt-2">
              <InlineMath math="H" /> is maximal: any edge sharing a cycle with any edge
              of <InlineMath math="H" /> also shares a cycle with <InlineMath math="e" />{' '}
              (by transitivity of the "same cycle" relation).
            </p>
            <p className="mt-2">
              <strong>Part 2:</strong> Suppose blocks <InlineMath math="B_1" /> and{' '}
              <InlineMath math="B_2" /> share two vertices <InlineMath math="u" /> and{' '}
              <InlineMath math="v" />. Since <InlineMath math="B_1" /> is 2-connected,
              there exist internally disjoint <InlineMath math="u, v" />-paths in{' '}
              <InlineMath math="B_1" />. Similarly for <InlineMath math="B_2" />.
            </p>
            <p className="mt-2">
              Taking one path from each block gives a cycle containing edges from both
              blocks. By Part 1, these edges belong to the same block—contradiction.
            </p>
            <p className="mt-2">
              If blocks share exactly one vertex <InlineMath math="v" />, then{' '}
              <InlineMath math="v" /> is a cut-vertex: removing it separates the blocks.
            </p>
            <p className="mt-2">
              <strong>Part 3:</strong> Follows from Part 1: each edge is in exactly one
              block, and every edge is in some block (the edge itself forms a block if
              it's a cut-edge).
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Finding Blocks">
        <p>
          Consider a graph that is two triangles sharing a vertex <InlineMath math="v" />
          . The graph has:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>One cut-vertex: <InlineMath math="v" /></li>
          <li>Two blocks: the two triangles</li>
          <li>
            <InlineMath math="\kappa(G) = 1" />
          </li>
        </ul>
        <p className="mt-2">
          A path <InlineMath math="P_n" /> has <InlineMath math="n - 1" /> blocks, each
          being a single edge.
        </p>
      </Example>

      <h3>Block-Cutpoint Graph</h3>

      <Definition title="Block-Cutpoint Graph">
        <p>
          The <strong>block-cutpoint graph</strong> (or <strong>BC-tree</strong>) of a
          connected graph <InlineMath math="G" /> is a bipartite graph{' '}
          <InlineMath math="H" /> where:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>One partite set consists of the blocks of <InlineMath math="G" /></li>
          <li>
            The other partite set consists of the cut-vertices of{' '}
            <InlineMath math="G" />
          </li>
          <li>
            Block <InlineMath math="B" /> is adjacent to cut-vertex{' '}
            <InlineMath math="v" /> iff <InlineMath math="v \in V(B)" />
          </li>
        </ul>
      </Definition>

      <Theorem title="Theorem 4.1.12">
        <p>
          The block-cutpoint graph of a connected graph is a tree.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="G" /> be a connected graph and{' '}
              <InlineMath math="H" /> be its block-cutpoint graph.
            </p>
            <p className="mt-2">
              <strong>Connectedness:</strong> We show <InlineMath math="H" /> is connected.
              For any two blocks <InlineMath math="B_1, B_2" />, pick vertices{' '}
              <InlineMath math="u \in B_1" /> and <InlineMath math="v \in B_2" />. Since{' '}
              <InlineMath math="G" /> is connected, there is a <InlineMath math="u, v" />-path
              in <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              This path passes through a sequence of blocks, consecutive blocks sharing a
              cut-vertex. This gives a path in <InlineMath math="H" /> from{' '}
              <InlineMath math="B_1" /> to <InlineMath math="B_2" />.
            </p>
            <p className="mt-2">
              <strong>Acyclicity:</strong> Suppose <InlineMath math="H" /> contains a
              cycle. Since <InlineMath math="H" /> is bipartite (blocks and cut-vertices
              alternate), the cycle has form{' '}
              <InlineMath math="B_1, v_1, B_2, v_2, \ldots, B_k, v_k, B_1" />.
            </p>
            <p className="mt-2">
              Consider what this means in <InlineMath math="G" />: we can go from{' '}
              <InlineMath math="B_1" /> through <InlineMath math="v_1" /> to{' '}
              <InlineMath math="B_2" />, etc., and return to <InlineMath math="B_1" />{' '}
              through <InlineMath math="v_k" />.
            </p>
            <p className="mt-2">
              This means <InlineMath math="v_1" /> and <InlineMath math="v_k" /> are both
              in <InlineMath math="B_1" />, and we can reach <InlineMath math="v_k" />{' '}
              from <InlineMath math="v_1" /> via a path through{' '}
              <InlineMath math="B_2, \ldots, B_k" /> that avoids{' '}
              <InlineMath math="B_1 - \{'{'}v_1, v_k{'}'}" />.
            </p>
            <p className="mt-2">
              Combined with paths in <InlineMath math="B_1" />, this shows all the edges
              in <InlineMath math="B_1, B_2, \ldots, B_k" /> lie on common cycles.
              By Theorem 4.1.11, they should all be in one block—contradicting that{' '}
              <InlineMath math="B_1, \ldots, B_k" /> are distinct blocks.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Edge Cuts and Bonds</h2>

      <Definition title="Bond">
        <p>
          A <strong>bond</strong> is a minimal nonempty edge cut. Equivalently, a bond
          is an edge cut <InlineMath math="[S, \overline{S}]" /> such that both{' '}
          <InlineMath math="G[S]" /> and <InlineMath math="G[\overline{S}]" /> are
          connected.
        </p>
      </Definition>

      <Theorem title="Bond Characterization">
        <p>
          An edge cut is a bond if and only if it is a minimal disconnecting set.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇒)</strong> Suppose <InlineMath math="[S, \overline{S}]" /> is a
              bond, so both <InlineMath math="G[S]" /> and{' '}
              <InlineMath math="G[\overline{S}]" /> are connected.
            </p>
            <p className="mt-2">
              We show it's minimal. Suppose we remove some edge{' '}
              <InlineMath math="e = uv" /> from the cut, where{' '}
              <InlineMath math="u \in S" /> and <InlineMath math="v \in \overline{S}" />.
              Since <InlineMath math="G[S]" /> is connected, there's a path from any{' '}
              <InlineMath math="s \in S" /> to <InlineMath math="u" /> within{' '}
              <InlineMath math="S" />. Since <InlineMath math="G[\overline{S}]" /> is
              connected, there's a path from <InlineMath math="v" /> to any{' '}
              <InlineMath math="t \in \overline{S}" /> within <InlineMath math="\overline{S}" />.
            </p>
            <p className="mt-2">
              Combined with edge <InlineMath math="e" />, we get an{' '}
              <InlineMath math="s, t" />-path using only edges in{' '}
              <InlineMath math="G[S] \cup G[\overline{S}] \cup \{'{'}e{'}'}" />. So{' '}
              <InlineMath math="[S, \overline{S}] - \{'{'}e{'}'}" /> doesn't disconnect—the
              bond is minimal.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> Suppose <InlineMath math="F" /> is a minimal
              disconnecting set. Then <InlineMath math="F" /> separates{' '}
              <InlineMath math="G" /> into components. Let <InlineMath math="S" /> be
              one component and <InlineMath math="\overline{S}" /> be the union of
              all others.
            </p>
            <p className="mt-2">
              We must show <InlineMath math="G[\overline{S}]" /> is connected (
              <InlineMath math="G[S]" /> is connected by definition of component).
              If <InlineMath math="G[\overline{S}]" /> has multiple components{' '}
              <InlineMath math="C_1, C_2, \ldots" />, then edges of <InlineMath math="F" />{' '}
              go from <InlineMath math="S" /> to various <InlineMath math="C_i" />.
            </p>
            <p className="mt-2">
              But then <InlineMath math="F" /> minus edges to some{' '}
              <InlineMath math="C_j" /> still disconnects (separating{' '}
              <InlineMath math="S \cup C_j" /> from other components). This contradicts
              minimality of <InlineMath math="F" />. So{' '}
              <InlineMath math="G[\overline{S}]" /> is connected, and{' '}
              <InlineMath math="F = [S, \overline{S}]" /> is a bond.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Bonds in a Cycle">
        <p>
          In <InlineMath math="C_n" />, the bonds are exactly the edge sets of size 2
          (removing two edges disconnects). Any single edge is not a bond because its
          removal leaves the graph connected.
        </p>
      </Example>

      <h2>Finding Cut-Vertices (DFS Algorithm)</h2>

      <p>
        Tarjan's algorithm uses depth-first search to find all cut-vertices and bridges
        in linear time.
      </p>

      <Definition title="Tarjan's Algorithm">
        <p>Key concepts for DFS from root <InlineMath math="r" />:</p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="\text{disc}[v]" />: discovery time of{' '}
            <InlineMath math="v" />
          </li>
          <li>
            <InlineMath math="\text{low}[v]" />: minimum discovery time reachable from
            subtree of <InlineMath math="v" /> via back edges
          </li>
        </ul>
        <p className="mt-2">
          <strong>Cut-vertex conditions:</strong>
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            Root <InlineMath math="r" /> is a cut-vertex iff it has ≥2 children in DFS
            tree
          </li>
          <li>
            Non-root <InlineMath math="v" /> is a cut-vertex iff some child{' '}
            <InlineMath math="u" /> has{' '}
            <InlineMath math="\text{low}[u] \geq \text{disc}[v]" />
          </li>
        </ul>
        <p className="mt-2">
          <strong>Bridge condition:</strong> Edge <InlineMath math="uv" /> (where{' '}
          <InlineMath math="v" /> is child of <InlineMath math="u" />) is a bridge iff{' '}
          <InlineMath math="\text{low}[v] > \text{disc}[u]" />.
        </p>
      </Definition>

      <Theorem title="Tarjan's Algorithm Complexity">
        <p>
          All cut-vertices and bridges can be found in <InlineMath math="O(n + m)" />{' '}
          time using DFS.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Correctness of cut-vertex detection:</strong>
            </p>
            <p className="mt-2">
              For root <InlineMath math="r" />: <InlineMath math="r" /> is a cut-vertex iff
              it has ≥2 children in the DFS tree. If <InlineMath math="r" /> has only one
              child, removing <InlineMath math="r" /> leaves the subtree connected.
              If ≥2 children, they can only communicate through <InlineMath math="r" />{' '}
              (no cross edges between subtrees in DFS).
            </p>
            <p className="mt-2">
              For non-root <InlineMath math="v" />: <InlineMath math="v" /> is a cut-vertex
              iff some child <InlineMath math="u" /> has{' '}
              <InlineMath math="\text{low}[u] \geq \text{disc}[v]" />. This means the subtree
              rooted at <InlineMath math="u" /> has no back edge to an ancestor of{' '}
              <InlineMath math="v" />, so removing <InlineMath math="v" /> disconnects this
              subtree.
            </p>
            <p className="mt-2">
              <strong>Correctness of bridge detection:</strong>
            </p>
            <p className="mt-2">
              Edge <InlineMath math="(u, v)" /> (where <InlineMath math="v" /> is child of{' '}
              <InlineMath math="u" />) is a bridge iff{' '}
              <InlineMath math="\text{low}[v] > \text{disc}[u]" />. This means no vertex in{' '}
              <InlineMath math="v" />'s subtree can reach <InlineMath math="u" /> or its
              ancestors except through edge <InlineMath math="(u, v)" />, so{' '}
              <InlineMath math="(u, v)" /> lies on no cycle.
            </p>
            <p className="mt-2">
              <strong>Time complexity:</strong>
            </p>
            <p className="mt-2">
              DFS visits each vertex once: <InlineMath math="O(n)" />.
              Each edge is examined twice (once from each endpoint): <InlineMath math="O(m)" />.
              Computing <InlineMath math="\text{low}[v]" /> values during DFS adds only
              constant work per edge.
            </p>
            <p className="mt-2">
              Total: <InlineMath math="O(n + m)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Connectivity Hierarchy:</strong>{' '}
          <InlineMath math="\kappa(G) \leq \kappa'(G) \leq \delta(G)" />.
        </li>
        <li>
          <strong>Cut-vertex:</strong> A vertex whose removal disconnects the graph.
        </li>
        <li>
          <strong>Bridge:</strong> An edge whose removal disconnects; equivalently, an
          edge on no cycle.
        </li>
        <li>
          <strong>Blocks:</strong> Maximal 2-connected subgraphs; partition the edges
          and share at most cut-vertices.
        </li>
        <li>
          <strong>BC-tree:</strong> The block-cutpoint graph is always a tree, revealing
          the hierarchical structure.
        </li>
        <li>
          <strong>Efficiency:</strong> All cut-vertices and bridges can be found in
          linear time using DFS.
        </li>
      </ul>
    </LessonLayout>
  );
}
