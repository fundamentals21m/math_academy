import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <p>
        The degrees of the vertices are fundamental parameters of a graph. In this section,
        we explore how vertex degrees lead to powerful counting arguments, characterize
        important graph families, and solve extremal problems about graph structure.
      </p>

      <h2>Basic Definitions</h2>

      <Definition title="Degree of a Vertex">
        <p>
          The <strong>degree</strong> of vertex <InlineMath math="v" /> in a graph <InlineMath math="G" />,
          written <InlineMath math="d_G(v)" /> or <InlineMath math="d(v)" />, is the number of edges
          incident to <InlineMath math="v" />, except that each loop at <InlineMath math="v" /> counts twice.
        </p>
        <p className="mt-2">
          The <strong>maximum degree</strong> is <InlineMath math="\Delta(G)" />, the <strong>minimum degree</strong> is{' '}
          <InlineMath math="\delta(G)" />, and <InlineMath math="G" /> is <strong>regular</strong> if{' '}
          <InlineMath math="\Delta(G) = \delta(G)" />. It is <strong>k-regular</strong> if the common degree is{' '}
          <InlineMath math="k" />.
        </p>
        <p className="mt-2">
          The <strong>neighborhood</strong> of <InlineMath math="v" />, written <InlineMath math="N_G(v)" /> or{' '}
          <InlineMath math="N(v)" />, is the set of vertices adjacent to <InlineMath math="v" />.
        </p>
      </Definition>

      <Definition title="Order and Size">
        <p>
          The <strong>order</strong> of a graph <InlineMath math="G" />, written <InlineMath math="n(G)" />,
          is the number of vertices in <InlineMath math="G" />. An <strong>n-vertex graph</strong> is a
          graph of order <InlineMath math="n" />.
        </p>
        <p className="mt-2">
          The <strong>size</strong> of a graph <InlineMath math="G" />, written <InlineMath math="e(G)" />,
          is the number of edges in <InlineMath math="G" />.
        </p>
        <p className="mt-2">
          For <InlineMath math="n \in \mathbb{N}" />, the notation <InlineMath math="[n]" /> indicates
          the set <InlineMath math="\{1, \ldots, n\}" />.
        </p>
      </Definition>

      <h2>The Degree-Sum Formula</h2>

      <p>
        The first counting problem about subgraphs is to count the edges using vertex degrees.
        The resulting formula is an essential tool of graph theory, sometimes called the
        "First Theorem of Graph Theory" or the "Handshaking Lemma."
      </p>

      <Theorem title="Degree-Sum Formula (Handshaking Lemma)">
        <p>If <InlineMath math="G" /> is a graph, then</p>
        <MathBlock math="\sum_{v \in V(G)} d(v) = 2e(G)." />
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Summing the degrees counts each edge twice, since each edge has two ends and
              contributes to the degree at each endpoint.
            </p>
            <p className="mt-2">
              The proof holds even when <InlineMath math="G" /> has loops, since a loop
              contributes 2 to the degree of its endpoint. For a loopless graph, the two
              sides of the formula count the set of pairs <InlineMath math="(v, e)" /> such
              that <InlineMath math="v" /> is an endpoint of <InlineMath math="e" />, grouped
              by vertices or grouped by edges.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        "Counting two ways" is an elegant technique for proving integer identities.
        The degree-sum formula has several immediate corollaries.
      </p>

      <Theorem title="Corollary: Average Degree">
        <p>
          In a graph <InlineMath math="G" />, the average vertex degree is{' '}
          <InlineMath math="\frac{2e(G)}{n(G)}" />, and hence
        </p>
        <MathBlock math="\delta(G) \leq \frac{2e(G)}{n(G)} \leq \Delta(G)." />
      </Theorem>

      <Theorem title="Corollary: Odd Degree Vertices">
        <p>
          Every graph has an <strong>even number of vertices of odd degree</strong>.
          No graph of odd order is regular with odd degree.
        </p>
      </Theorem>

      <Theorem title="Corollary: Edges in Regular Graphs">
        <p>
          A <InlineMath math="k" />-regular graph with <InlineMath math="n" /> vertices
          has <InlineMath math="nk/2" /> edges.
        </p>
      </Theorem>

      <h2>Hypercubes</h2>

      <Definition title="k-dimensional Cube (Hypercube)">
        <p>
          The <strong><InlineMath math="k" />-dimensional cube</strong> or <strong>hypercube</strong>{' '}
          <InlineMath math="Q_k" /> is the simple graph whose vertices are the <InlineMath math="k" />-tuples
          with entries in <InlineMath math="\{0, 1\}" /> and whose edges are the pairs of{' '}
          <InlineMath math="k" />-tuples that differ in exactly one position.
        </p>
        <p className="mt-2">
          A <strong><InlineMath math="j" />-dimensional subcube</strong> of <InlineMath math="Q_k" /> is
          a subgraph of <InlineMath math="Q_k" /> isomorphic to <InlineMath math="Q_j" />.
        </p>
      </Definition>

      <Example title="Structure of Hypercubes">
        <p>
          The <strong>parity</strong> of a vertex in <InlineMath math="Q_k" /> is the parity of the
          number of 1s in its name (even or odd). Each edge of <InlineMath math="Q_k" /> has an even
          vertex and an odd vertex as endpoints. Hence:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>The even vertices form an independent set, as do the odd vertices</li>
          <li><InlineMath math="Q_k" /> is bipartite</li>
          <li><InlineMath math="n(Q_k) = 2^k" /> (each position can be 0 or 1)</li>
          <li><InlineMath math="Q_k" /> is <InlineMath math="k" />-regular (change any one position)</li>
          <li>
            By Corollary 1.3.6, <InlineMath math="e(Q_k) = k \cdot 2^{k-1}" />
          </li>
        </ul>
        <p className="mt-3">
          <strong>Recursive description:</strong> To form <InlineMath math="Q_k" />, take two copies
          of <InlineMath math="Q_{k-1}" />, append 0 to all vertex names in one copy and 1 in the other,
          then add edges joining vertices whose first <InlineMath math="k-1" /> coordinates are equal.
          The basis is the 1-vertex graph <InlineMath math="Q_0" />.
        </p>
      </Example>

      <Theorem title="Regular Bipartite Graphs">
        <p>
          If <InlineMath math="k > 0" />, then a <InlineMath math="k" />-regular bipartite graph has
          the same number of vertices in each partite set.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="G" /> be an <InlineMath math="X, Y" />-bigraph. Counting the edges
              according to their endpoints in <InlineMath math="X" /> yields{' '}
              <InlineMath math="e(G) = k|X|" />. Counting them by their endpoints in{' '}
              <InlineMath math="Y" /> yields <InlineMath math="e(G) = k|Y|" />. Thus{' '}
              <InlineMath math="k|X| = k|Y|" />, which yields <InlineMath math="|X| = |Y|" /> when{' '}
              <InlineMath math="k > 0" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Extremal Problems</h2>

      <p>
        An <strong>extremal problem</strong> asks for the maximum or minimum value of a function
        over a class of objects. For example, the maximum number of edges in a simple graph
        with <InlineMath math="n" /> vertices is <InlineMath math="\binom{n}{2}" />.
      </p>

      <Theorem title="Minimum Edges for Connectivity">
        <p>
          The minimum number of edges in a connected graph with <InlineMath math="n" /> vertices
          is <InlineMath math="n - 1" />.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Every graph with <InlineMath math="n" /> vertices and <InlineMath math="k" /> edges has
              at least <InlineMath math="n - k" /> components. Hence every <InlineMath math="n" />-vertex
              graph with fewer than <InlineMath math="n - 1" /> edges has at least two components
              and is disconnected.
            </p>
            <p className="mt-2">
              The contrapositive is that every connected <InlineMath math="n" />-vertex graph has
              at least <InlineMath math="n - 1" /> edges. This lower bound is achieved by the
              path <InlineMath math="P_n" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Minimum Degree for Connectivity">
        <p>
          If <InlineMath math="G" /> is a simple <InlineMath math="n" />-vertex graph with{' '}
          <InlineMath math="\delta(G) \geq (n-1)/2" />, then <InlineMath math="G" /> is connected.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Choose <InlineMath math="u, v \in V(G)" />. It suffices to show that{' '}
              <InlineMath math="u, v" /> have a common neighbor if they are not adjacent.
              Since <InlineMath math="G" /> is simple, we have{' '}
              <InlineMath math="|N(u)| \geq \delta(G) \geq (n-1)/2" />, and similarly for{' '}
              <InlineMath math="v" />.
            </p>
            <p className="mt-2">
              When <InlineMath math="u \not\leftrightarrow v" />, we have{' '}
              <InlineMath math="|N(u) \cup N(v)| \leq n - 2" />, since <InlineMath math="u" /> and{' '}
              <InlineMath math="v" /> are not in the union. Thus:
            </p>
            <MathBlock math="|N(u) \cap N(v)| = |N(u)| + |N(v)| - |N(u) \cup N(v)| \geq \frac{n-1}{2} + \frac{n-1}{2} - (n-2) = 1." />
          </div>
        </details>
      </Theorem>

      <Example title="Sharpness of the Bound">
        <p>
          The bound <InlineMath math="\delta(G) \geq (n-1)/2" /> is <strong>sharp</strong>. Let{' '}
          <InlineMath math="G" /> be the <InlineMath math="n" />-vertex graph with components
          isomorphic to <InlineMath math="K_{\lfloor n/2 \rfloor}" /> and{' '}
          <InlineMath math="K_{\lceil n/2 \rceil}" />.
        </p>
        <p className="mt-2">
          Since <InlineMath math="\delta(G) = \lfloor n/2 \rfloor - 1" /> and <InlineMath math="G" /> is
          disconnected, the inequality cannot be weakened.
        </p>
      </Example>

      <Definition title="Disjoint Union">
        <p>
          The graph obtained by taking the union of graphs <InlineMath math="G" /> and{' '}
          <InlineMath math="H" /> with disjoint vertex sets is the <strong>disjoint union</strong> or{' '}
          <strong>sum</strong>, written <InlineMath math="G + H" />.
        </p>
        <p className="mt-2">
          In general, <InlineMath math="mG" /> is the graph consisting of <InlineMath math="m" /> pairwise
          disjoint copies of <InlineMath math="G" />.
        </p>
      </Definition>

      <h2>Large Bipartite Subgraphs</h2>

      <Theorem title="Large Bipartite Subgraphs">
        <p>
          Every loopless graph <InlineMath math="G" /> has a bipartite subgraph with at
          least <InlineMath math="e(G)/2" /> edges.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof (Algorithmic)</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Start with any partition of <InlineMath math="V(G)" /> into two sets{' '}
              <InlineMath math="X, Y" />. Using the edges having one endpoint in each set yields a
              bipartite subgraph <InlineMath math="H" /> with bipartition <InlineMath math="X, Y" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="H" /> contains fewer than half the edges of <InlineMath math="G" /> incident
              to a vertex <InlineMath math="v" />, then <InlineMath math="v" /> has more edges to vertices
              in its own class than in the other class. Moving <InlineMath math="v" /> to the other class
              gains more edges than it loses.
            </p>
            <p className="mt-2">
              Each such switch increases the size of the subgraph, so the process must terminate.
              When it terminates, <InlineMath math="d_H(v) \geq d_G(v)/2" /> for every{' '}
              <InlineMath math="v \in V(G)" />. Summing this and applying the degree-sum formula
              yields <InlineMath math="e(H) \geq e(G)/2" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Mantel's Theorem</h2>

      <Definition title="H-free Graphs">
        <p>
          A graph <InlineMath math="G" /> is <strong><InlineMath math="H" />-free</strong> if{' '}
          <InlineMath math="G" /> has no induced subgraph isomorphic to <InlineMath math="H" />.
        </p>
      </Definition>

      <Theorem title="Mantel's Theorem (1907)">
        <p>
          The maximum number of edges in an <InlineMath math="n" />-vertex triangle-free simple graph
          is <InlineMath math="\lfloor n^2/4 \rfloor" />.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="G" /> be an <InlineMath math="n" />-vertex triangle-free simple graph.
              Let <InlineMath math="x" /> be a vertex of maximum degree, with{' '}
              <InlineMath math="k = d(x)" />. Since <InlineMath math="G" /> has no triangles, there
              are no edges among neighbors of <InlineMath math="x" />.
            </p>
            <p className="mt-2">
              Hence summing the degrees of <InlineMath math="x" /> and its non-neighbors counts at
              least one endpoint of every edge:
            </p>
            <MathBlock math="\sum_{v \notin N(x)} d(v) \geq e(G)." />
            <p className="mt-2">
              We sum over <InlineMath math="n - k" /> vertices, each having degree at most{' '}
              <InlineMath math="k" />, so <InlineMath math="e(G) \leq (n-k)k" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="(n-k)k" /> counts the edges in <InlineMath math="K_{n-k,k}" />,
              we have proved that <InlineMath math="e(G)" /> is bounded by the size of some biclique
              with <InlineMath math="n" /> vertices. The product <InlineMath math="(n-k)k" /> is maximized
              when <InlineMath math="k = \lceil n/2 \rceil" /> or <InlineMath math="k = \lfloor n/2 \rfloor" />.
              Thus <InlineMath math="e(G) \leq \lfloor n^2/4 \rfloor" />.
            </p>
            <p className="mt-2">
              To prove the bound is best possible, we exhibit a triangle-free graph with{' '}
              <InlineMath math="\lfloor n^2/4 \rfloor" /> edges:{' '}
              <InlineMath math="K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Graphic Sequences</h2>

      <Definition title="Degree Sequence">
        <p>
          The <strong>degree sequence</strong> of a graph is the list of vertex degrees, usually
          written in nonincreasing order, as <InlineMath math="d_1 \geq \cdots \geq d_n" />.
        </p>
      </Definition>

      <p>
        Every graph has a degree sequence, but which sequences occur? The degree-sum formula
        implies that <InlineMath math="\sum d_i" /> must be even. When we allow loops and
        multiple edges, this condition is sufficient:
      </p>

      <Theorem title="Realizability with Loops">
        <p>
          The nonnegative integers <InlineMath math="d_1, \ldots, d_n" /> are the vertex degrees
          of some graph if and only if <InlineMath math="\sum d_i" /> is even.
        </p>
      </Theorem>

      <Definition title="Graphic Sequence">
        <p>
          A <strong>graphic sequence</strong> is a list of nonnegative numbers that is the degree
          sequence of some simple graph. A simple graph with degree sequence <InlineMath math="d" />{' '}
          "realizes" <InlineMath math="d" />.
        </p>
      </Definition>

      <Theorem title="Havel-Hakimi Theorem (1955, 1962)">
        <p>
          For <InlineMath math="n > 1" />, an integer list <InlineMath math="d" /> of size{' '}
          <InlineMath math="n" /> is graphic if and only if <InlineMath math="d'" /> is graphic,
          where <InlineMath math="d'" /> is obtained from <InlineMath math="d" /> by deleting its
          largest element <InlineMath math="\Delta" /> and subtracting 1 from its{' '}
          <InlineMath math="\Delta" /> next largest elements.
        </p>
        <p className="mt-2">
          The only 1-element graphic sequence is <InlineMath math="d_1 = 0" />.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof Sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Sufficiency:</strong> Given a simple graph <InlineMath math="G'" /> with degree
              sequence <InlineMath math="d'" />, add a new vertex adjacent to vertices with degrees{' '}
              <InlineMath math="d_2 - 1, \ldots, d_{\Delta+1} - 1" />.
            </p>
            <p className="mt-2">
              <strong>Necessity:</strong> Begin with a simple graph <InlineMath math="G" /> realizing{' '}
              <InlineMath math="d" />. Using 2-switches (edge swaps that preserve degrees), we can
              transform <InlineMath math="G" /> so that a vertex of maximum degree is adjacent to
              vertices with the <InlineMath math="\Delta" /> highest other degrees. Deleting this
              vertex yields a graph realizing <InlineMath math="d'" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Testing Graphic Sequences">
        <p>
          To test whether <InlineMath math="3, 3, 3, 3, 3, 2, 2, 1" /> is graphic:
        </p>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Delete 3, subtract 1 from next 3 largest: <InlineMath math="2, 2, 2, 3, 2, 2, 1" /></li>
          <li>Reorder: <InlineMath math="3, 2, 2, 2, 2, 2, 1" /></li>
          <li>Delete 3, subtract 1 from next 3: <InlineMath math="1, 1, 1, 2, 2, 1" /></li>
          <li>Reorder: <InlineMath math="2, 2, 1, 1, 1, 1" /></li>
          <li>Continue until reaching <InlineMath math="1, 1, 1, 1, 0" /> or similar base case</li>
        </ol>
        <p className="mt-2">
          If we reach all zeros, the sequence is graphic. If we get negative numbers or
          cannot continue, it is not.
        </p>
      </Example>

      <h2>2-Switches</h2>

      <Definition title="2-Switch">
        <p>
          A <strong>2-switch</strong> is the replacement of a pair of edges <InlineMath math="xy" /> and{' '}
          <InlineMath math="zw" /> in a simple graph by the edges <InlineMath math="yz" /> and{' '}
          <InlineMath math="wx" />, given that <InlineMath math="yz" /> and <InlineMath math="wx" /> did
          not appear in the graph originally.
        </p>
      </Definition>

      <p>
        A 2-switch preserves all vertex degrees. If <InlineMath math="y \leftrightarrow z" /> or{' '}
        <InlineMath math="w \leftrightarrow x" />, then the 2-switch cannot be performed because
        the resulting graph would not be simple.
      </p>

      <Theorem title="Berge's Theorem on 2-Switches">
        <p>
          If <InlineMath math="G" /> and <InlineMath math="H" /> are two simple graphs with vertex
          set <InlineMath math="V" />, then <InlineMath math="d_G(v) = d_H(v)" /> for every{' '}
          <InlineMath math="v \in V" /> if and only if there is a sequence of 2-switches that
          transforms <InlineMath math="G" /> into <InlineMath math="H" />.
        </p>
      </Theorem>

      <p>
        This theorem shows that any two simple graphs with the same degree sequence are
        connected by a sequence of local edge-swapping operations.
      </p>

      <h2>Key Takeaways</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          The <strong>Degree-Sum Formula</strong> <InlineMath math="\sum d(v) = 2e(G)" /> is fundamental,
          implying that every graph has an even number of odd-degree vertices.
        </li>
        <li>
          <strong>Hypercubes</strong> <InlineMath math="Q_k" /> are <InlineMath math="k" />-regular bipartite
          graphs with <InlineMath math="2^k" /> vertices and <InlineMath math="k2^{k-1}" /> edges.
        </li>
        <li>
          <strong>Extremal problems</strong> ask for the maximum/minimum of a function over a class
          of graphs; proving sharpness requires both a bound and an achieving example.
        </li>
        <li>
          <strong>Mantel's Theorem:</strong> The maximum edges in a triangle-free{' '}
          <InlineMath math="n" />-vertex graph is <InlineMath math="\lfloor n^2/4 \rfloor" />,
          achieved by <InlineMath math="K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}" />.
        </li>
        <li>
          The <strong>Havel-Hakimi Theorem</strong> provides a recursive algorithm to test whether
          a sequence of integers is graphic (realizable by a simple graph).
        </li>
      </ul>
    </LessonLayout>
  );
}
