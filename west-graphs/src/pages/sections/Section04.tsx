import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <p>
        We have used graphs to model symmetric relations. Relations need not be symmetric;
        in general, a relation on <InlineMath math="S" /> can be any set of ordered pairs
        in <InlineMath math="S \times S" />. For such relations, we need a more general model:
        <strong> directed graphs</strong>.
      </p>

      <h2>Definitions and Examples</h2>

      <Definition title="Directed Graph (Digraph)">
        <p>
          A <strong>directed graph</strong> or <strong>digraph</strong> <InlineMath math="G" /> is
          a triple consisting of a <strong>vertex set</strong> <InlineMath math="V(G)" />, an{' '}
          <strong>edge set</strong> <InlineMath math="E(G)" />, and a function assigning each edge
          an ordered pair of vertices.
        </p>
        <p className="mt-2">
          The first vertex of the ordered pair is the <strong>tail</strong> of the edge, and the
          second is the <strong>head</strong>; together, they are the <strong>endpoints</strong>.
          We say that an edge is an edge <em>from</em> its tail <em>to</em> its head.
        </p>
      </Definition>

      <p>
        The terms "head" and "tail" come from the arrows used to draw digraphs. When drawing
        a digraph, we give each curve a direction from the tail to the head.
      </p>

      <Definition title="Simple Digraphs">
        <p>
          In a digraph, a <strong>loop</strong> is an edge whose endpoints are equal.{' '}
          <strong>Multiple edges</strong> are edges having the same ordered pair of endpoints.
        </p>
        <p className="mt-2">
          A digraph is <strong>simple</strong> if each ordered pair is the head and tail of at
          most one edge; one loop may be present at each vertex.
        </p>
        <p className="mt-2">
          In a simple digraph, we write <InlineMath math="uv" /> for an edge with tail{' '}
          <InlineMath math="u" /> and head <InlineMath math="v" />. If there is an edge from{' '}
          <InlineMath math="u" /> to <InlineMath math="v" />, then <InlineMath math="v" /> is a{' '}
          <strong>successor</strong> of <InlineMath math="u" />, and <InlineMath math="u" /> is a{' '}
          <strong>predecessor</strong> of <InlineMath math="v" />. We write{' '}
          <InlineMath math="u \to v" /> for "there is an edge from <InlineMath math="u" /> to{' '}
          <InlineMath math="v" />".
        </p>
      </Definition>

      <Example title="Finite State Machines">
        <p>
          A <strong>finite state machine</strong> (also called finite automaton or discrete system)
          has a number of possible "states". Such a system can be modeled using a digraph in which
          vertices represent the states and edges represent the possible transitions between states.
        </p>
        <p className="mt-2">
          Transitions inherently move in one direction, so digraphs provide the appropriate model.
          Labels on the edges can record the events that cause the transitions. When an event
          causes the system to remain in the same state, we have a loop.
        </p>
      </Example>

      <Example title="Functional Digraphs">
        <p>
          We can study a function <InlineMath math="f: A \to A" /> using digraphs. The{' '}
          <strong>functional digraph</strong> of <InlineMath math="f" /> is the simple digraph
          with vertex set <InlineMath math="A" /> and edge set{' '}
          <InlineMath math="\{(x, f(x)): x \in A\}" />.
        </p>
        <p className="mt-2">
          For each <InlineMath math="x" />, the single edge with tail <InlineMath math="x" /> points
          to the image of <InlineMath math="x" /> under <InlineMath math="f" />. Following a path
          corresponds to iterating the function.
        </p>
        <p className="mt-2">
          In a <strong>permutation</strong>, each element is the image of exactly one element, so
          the functional digraph has one head and one tail at each vertex. Hence the functional
          digraph of a permutation consists of disjoint cycles.
        </p>
      </Example>

      <h2>Underlying Graphs and Connectivity</h2>

      <Definition title="Underlying Graph">
        <p>
          The <strong>underlying graph</strong> of a digraph <InlineMath math="D" /> is the
          graph <InlineMath math="G" /> obtained by treating the edges of <InlineMath math="D" /> as
          unordered pairs; the vertex set and edge set remain the same, and the endpoints of an
          edge are the same in <InlineMath math="G" /> as in <InlineMath math="D" />, but in{' '}
          <InlineMath math="G" /> they become an unordered pair.
        </p>
      </Definition>

      <Definition title="Paths and Cycles in Digraphs">
        <p>
          A digraph is a <strong>path</strong> if it is a simple digraph whose vertices can be
          linearly ordered so that there is an edge with tail <InlineMath math="u" /> and head{' '}
          <InlineMath math="v" /> if and only if <InlineMath math="v" /> immediately follows{' '}
          <InlineMath math="u" /> in the vertex ordering.
        </p>
        <p className="mt-2">
          A <strong>cycle</strong> is defined similarly using an ordering of the vertices on a circle.
        </p>
      </Definition>

      <Definition title="Weak and Strong Connectivity">
        <p>
          A digraph is <strong>weakly connected</strong> if its underlying graph is connected.
        </p>
        <p className="mt-2">
          A digraph is <strong>strongly connected</strong> or <strong>strong</strong> if for each
          ordered pair <InlineMath math="u, v" /> of vertices, there is a path from{' '}
          <InlineMath math="u" /> to <InlineMath math="v" />.
        </p>
        <p className="mt-2">
          The <strong>strong components</strong> of a digraph are its maximal strong subgraphs.
        </p>
      </Definition>

      <Example title="Strong Components">
        <p>
          The 2-vertex digraph consisting only of the edge <InlineMath math="xy" /> has an{' '}
          <InlineMath math="x, y" />-path but no <InlineMath math="y, x" />-path and is not
          strongly connected. As a digraph, an <InlineMath math="n" />-vertex path has{' '}
          <InlineMath math="n" /> strong components, but a cycle has only one.
        </p>
      </Example>

      <Definition title="Matrices for Digraphs">
        <p>
          In the <strong>adjacency matrix</strong> <InlineMath math="A(G)" /> of a digraph{' '}
          <InlineMath math="G" />, the entry in position <InlineMath math="i, j" /> is the number
          of edges from <InlineMath math="v_i" /> to <InlineMath math="v_j" />.
        </p>
        <p className="mt-2">
          In the <strong>incidence matrix</strong> <InlineMath math="M(G)" /> of a loopless digraph{' '}
          <InlineMath math="G" />, we set <InlineMath math="m_{i,j} = +1" /> if{' '}
          <InlineMath math="v_i" /> is the tail of <InlineMath math="e_j" /> and{' '}
          <InlineMath math="m_{i,j} = -1" /> if <InlineMath math="v_i" /> is the head of{' '}
          <InlineMath math="e_j" />.
        </p>
      </Definition>

      <h2>Vertex Degrees in Digraphs</h2>

      <Definition title="Indegree and Outdegree">
        <p>
          Let <InlineMath math="v" /> be a vertex in a digraph.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            The <strong>outdegree</strong> <InlineMath math="d^+(v)" /> is the number of edges
            with tail <InlineMath math="v" />.
          </li>
          <li>
            The <strong>indegree</strong> <InlineMath math="d^-(v)" /> is the number of edges
            with head <InlineMath math="v" />.
          </li>
          <li>
            The <strong>out-neighborhood</strong> or <strong>successor set</strong>{' '}
            <InlineMath math="N^+(v) = \{x \in V(G): v \to x\}" />.
          </li>
          <li>
            The <strong>in-neighborhood</strong> or <strong>predecessor set</strong>{' '}
            <InlineMath math="N^-(v) = \{x \in V(G): x \to v\}" />.
          </li>
        </ul>
        <p className="mt-2">
          The minimum and maximum indegree are <InlineMath math="\delta^-(G)" /> and{' '}
          <InlineMath math="\Delta^-(G)" />; for outdegree we use <InlineMath math="\delta^+(G)" />{' '}
          and <InlineMath math="\Delta^+(G)" />.
        </p>
      </Definition>

      <Theorem title="Degree-Sum Formula for Digraphs">
        <p>In a digraph <InlineMath math="G" />,</p>
        <MathBlock math="\sum_{v \in V(G)} d^+(v) = e(G) = \sum_{v \in V(G)} d^-(v)." />
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>Every edge has exactly one tail and exactly one head.</p>
          </div>
        </details>
      </Theorem>

      <h2>Eulerian Digraphs</h2>

      <p>
        The definitions of trail, walk, circuit, and the connection relation are the same in
        graphs and digraphs when we list edges as ordered pairs of vertices. In a digraph,
        the successive edges must "follow the arrows". In a walk{' '}
        <InlineMath math="v_0, e_1, \ldots, e_k, v_k" />, the edge <InlineMath math="e_i" /> has
        tail <InlineMath math="v_{i-1}" /> and head <InlineMath math="v_i" />.
      </p>

      <Definition title="Eulerian Digraphs">
        <p>
          An <strong>Eulerian trail</strong> in a digraph (or graph) is a trail containing all edges.
          An <strong>Eulerian circuit</strong> is a closed trail containing all edges.
          A digraph is <strong>Eulerian</strong> if it has an Eulerian circuit.
        </p>
      </Definition>

      <Theorem title="Characterization of Eulerian Digraphs">
        <p>
          A digraph is Eulerian if and only if <InlineMath math="d^+(v) = d^-(v)" /> for each
          vertex <InlineMath math="v" /> and the underlying graph has at most one nontrivial component.
        </p>
      </Theorem>

      <p>
        Every Eulerian digraph with no isolated vertices is strongly connected, although the
        characterization states that being weakly connected is sufficient.
      </p>

      <Example title="de Bruijn Cycles">
        <p>
          There are <InlineMath math="2^n" /> binary strings of length <InlineMath math="n" />.
          Is there a cyclic arrangement of <InlineMath math="2^n" /> binary digits such that the{' '}
          <InlineMath math="2^n" /> strings of <InlineMath math="n" /> consecutive digits are all distinct?
        </p>
        <p className="mt-2">
          For <InlineMath math="n = 4" />, the sequence <code>(0000111101100101)</code> works.
        </p>
        <p className="mt-2">
          Define a digraph <InlineMath math="D_n" /> whose vertices are the binary{' '}
          <InlineMath math="(n-1)" />-tuples. Put an edge from <InlineMath math="a" /> to{' '}
          <InlineMath math="b" /> if the last <InlineMath math="n-2" /> entries of{' '}
          <InlineMath math="a" /> agree with the first <InlineMath math="n-2" /> entries of{' '}
          <InlineMath math="b" />. Label the edge with the last entry of <InlineMath math="b" />.
        </p>
      </Example>

      <Theorem title="de Bruijn Graphs are Eulerian">
        <p>
          The digraph <InlineMath math="D_n" /> is Eulerian, and the edge labels on any Eulerian
          circuit of <InlineMath math="D_n" /> form a cyclic arrangement in which the{' '}
          <InlineMath math="2^n" /> consecutive segments of length <InlineMath math="n" /> are distinct.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof Sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Every vertex has outdegree 2 (append 0 or 1 to get a successor) and indegree 2
              (prepend 0 or 1 in reverse). Also, <InlineMath math="D_n" /> is strongly connected
              because we can reach any vertex <InlineMath math="b = (b_1, \ldots, b_{n-1})" /> from
              any vertex by following edges labeled <InlineMath math="b_1, \ldots, b_{n-1}" />.
            </p>
            <p className="mt-2">
              Since the <InlineMath math="2^{n-1}" /> vertex labels are distinct, and the two edges
              leaving each vertex have distinct labels, traversing each edge exactly once produces{' '}
              <InlineMath math="2^n" /> distinct strings of length <InlineMath math="n" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Orientations and Tournaments</h2>

      <Definition title="Orientations and Tournaments">
        <p>
          An <strong>orientation</strong> of a graph <InlineMath math="G" /> is a digraph{' '}
          <InlineMath math="D" /> obtained from <InlineMath math="G" /> by choosing an orientation
          (<InlineMath math="x \to y" /> or <InlineMath math="y \to x" />) for each edge{' '}
          <InlineMath math="xy \in E(G)" />.
        </p>
        <p className="mt-2">
          An <strong>oriented graph</strong> is an orientation of a simple graph.
        </p>
        <p className="mt-2">
          A <strong>tournament</strong> is an orientation of a complete graph.
        </p>
      </Definition>

      <p>
        An oriented graph is the same thing as a loopless simple digraph. The number of oriented
        graphs with vertices <InlineMath math="v_1, \ldots, v_n" /> is{' '}
        <InlineMath math="3^{\binom{n}{2}}" />; the number of tournaments is{' '}
        <InlineMath math="2^{\binom{n}{2}}" />.
      </p>

      <Example title="Round-Robin Tournaments">
        <p>
          Orientations of complete graphs model "round-robin tournaments". Consider an{' '}
          <InlineMath math="n" />-team league where each team plays every other exactly once.
          For each pair <InlineMath math="u, v" />, we include edge <InlineMath math="uv" /> if{' '}
          <InlineMath math="u" /> wins or <InlineMath math="vu" /> if <InlineMath math="v" /> wins.
        </p>
        <p className="mt-2">
          The "score" of a team is its outdegree, which equals its number of wins. We call
          the outdegree sequence of a tournament its <strong>score sequence</strong>.
        </p>
        <p className="mt-2">
          The outdegrees determine the indegrees, since{' '}
          <InlineMath math="d^+(v) + d^-(v) = n - 1" /> for every vertex <InlineMath math="v" />.
        </p>
      </Example>

      <h2>Kings in Tournaments</h2>

      <p>
        A tournament may have more than one vertex with maximum outdegree, so there may be
        no clear "winner". Although there need not be a clear winner, we show next that there
        must always be a team <InlineMath math="x" /> such that, for every other team{' '}
        <InlineMath math="z" />, either <InlineMath math="x" /> beats <InlineMath math="z" /> or{' '}
        <InlineMath math="x" /> beats some team that beats <InlineMath math="z" />.
      </p>

      <Definition title="King">
        <p>
          In a digraph, a <strong>king</strong> is a vertex from which every vertex is reachable
          by a path of length at most 2.
        </p>
      </Definition>

      <Theorem title="Landau's Theorem (1953)">
        <p>Every tournament has a king.</p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="x" /> be a vertex in a tournament <InlineMath math="T" />.
              If <InlineMath math="x" /> is not a king, then some vertex <InlineMath math="y" /> is
              not reachable from <InlineMath math="x" /> by a path of length at most 2.
            </p>
            <p className="mt-2">
              Hence no successor of <InlineMath math="x" /> is a predecessor of{' '}
              <InlineMath math="y" />. Since <InlineMath math="T" /> is an orientation of a clique,
              every successor of <InlineMath math="x" /> must be a successor of{' '}
              <InlineMath math="y" />. Also <InlineMath math="y \to x" />. Hence{' '}
              <InlineMath math="d^+(y) > d^+(x)" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="y" /> is not a king, repeat the argument to find{' '}
              <InlineMath math="z" /> with yet larger outdegree. Since <InlineMath math="T" /> is
              finite, we cannot forever obtain vertices of successively higher outdegree. The
              procedure must terminate, and it can terminate only when we have found a king.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        In the language of extremality, we have proved that{' '}
        <strong>every vertex of maximum outdegree in a tournament is a king</strong>.
      </p>

      <h2>Kernels in Digraphs</h2>

      <Definition title="Kernel">
        <p>
          A <strong>kernel</strong> in the digraph <InlineMath math="D" /> is a set{' '}
          <InlineMath math="S \subseteq V(D)" /> such that <InlineMath math="S" /> induces no edges
          and every vertex outside <InlineMath math="S" /> has a successor in <InlineMath math="S" />.
        </p>
      </Definition>

      <p>
        A digraph that is an odd cycle has no kernel, but forbidding odd cycles as subdigraphs
        always yields a kernel.
      </p>

      <Theorem title="Richardson's Theorem (1953)">
        <p>Every digraph having no odd cycle has a kernel.</p>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">Proof Sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              For a strongly connected digraph <InlineMath math="D" /> with no odd cycle:
              given an arbitrary vertex <InlineMath math="y \in V(D)" />, let <InlineMath math="S" /> be
              the set of vertices with even distance to <InlineMath math="y" />. Every vertex with
              odd distance to <InlineMath math="y" /> has a successor in <InlineMath math="S" />.
            </p>
            <p className="mt-2">
              If vertices of <InlineMath math="S" /> were not pairwise nonadjacent, there would be
              an edge <InlineMath math="uv" /> with <InlineMath math="u, v \in S" />, leading to
              a closed odd walk, which contains an odd cycle—a contradiction.
            </p>
            <p className="mt-2">
              For the general case, use induction on <InlineMath math="n(D)" />, building the kernel
              from kernels of strong components.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          A <strong>digraph</strong> has directed edges with a tail and head; it models
          asymmetric relations.
        </li>
        <li>
          <strong>Indegree</strong> <InlineMath math="d^-(v)" /> counts incoming edges;{' '}
          <strong>outdegree</strong> <InlineMath math="d^+(v)" /> counts outgoing edges.
          Their sums both equal <InlineMath math="e(G)" />.
        </li>
        <li>
          <strong>Strongly connected</strong> digraphs have paths between every ordered pair;{' '}
          <strong>weakly connected</strong> only requires the underlying graph to be connected.
        </li>
        <li>
          A digraph is <strong>Eulerian</strong> iff <InlineMath math="d^+(v) = d^-(v)" /> for all
          vertices and the underlying graph has at most one nontrivial component.
        </li>
        <li>
          <strong>Tournaments</strong> are orientations of complete graphs; every tournament has
          a <strong>king</strong> (a vertex reaching all others in at most 2 steps).
        </li>
        <li>
          <strong>de Bruijn graphs</strong> are Eulerian digraphs used to generate sequences
          where all <InlineMath math="n" />-substrings are distinct.
        </li>
      </ul>
    </LessonLayout>
  );
}
