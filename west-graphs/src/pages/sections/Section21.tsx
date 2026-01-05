import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { HamiltonianFinder } from '@/components/visualizations';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <p>
        A Hamiltonian cycle visits every vertex exactly once and returns to start—the
        graph-theoretic version of the Traveling Salesman Problem. Unlike Eulerian
        circuits (which we characterized completely), there is no simple criterion for
        Hamiltonian cycles. We study sufficient conditions that guarantee existence and
        necessary conditions for specific graph families.
      </p>

      <h2>Hamiltonian Graphs</h2>

      <Definition title="Hamiltonian Path and Cycle">
        <p>
          A <strong>Hamiltonian path</strong> is a path that visits every vertex exactly
          once.
        </p>
        <p className="mt-2">
          A <strong>Hamiltonian cycle</strong> is a cycle that visits every vertex
          exactly once.
        </p>
        <p className="mt-2">
          A graph is <strong>Hamiltonian</strong> if it has a Hamiltonian cycle.
        </p>
      </Definition>

      <Example title="Hamiltonian and Non-Hamiltonian Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Hamiltonian:</strong> <InlineMath math="K_n" /> (
            <InlineMath math="n \geq 3" />), <InlineMath math="C_n" />,{' '}
            <InlineMath math="K_{n,n}" /> (<InlineMath math="n \geq 2" />), cube graph,
            dodecahedron
          </li>
          <li>
            <strong>Non-Hamiltonian:</strong> <InlineMath math="K_{m,n}" /> (
            <InlineMath math="m \neq n" />), Petersen graph, any graph with a
            cut-vertex, bipartite graphs with unequal parts
          </li>
        </ul>
      </Example>

      <HamiltonianFinder className="my-8" />

      <h2>Necessary Conditions</h2>

      <Theorem title="Necessary Condition 1">
        <p>
          If <InlineMath math="G" /> is Hamiltonian and <InlineMath math="S" /> is a
          proper nonempty subset of <InlineMath math="V(G)" />, then the number of
          components of <InlineMath math="G - S" /> is at most{' '}
          <InlineMath math="|S|" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              A Hamiltonian cycle visiting vertices of{' '}
              <InlineMath math="G - S" /> must pass through{' '}
              <InlineMath math="S" /> between consecutive components. Each transition
              uses at least one vertex of <InlineMath math="S" />, so components ≤{' '}
              <InlineMath math="|S|" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Petersen Graph is Non-Hamiltonian">
        <p>
          The Petersen graph has 10 vertices and is 3-regular. Remove the 5 vertices of
          the outer pentagon: the remaining 5 vertices (inner star) form an independent
          set—5 isolated vertices!
        </p>
        <p className="mt-2">
          With <InlineMath math="|S| = 5" /> but 5 components, the necessary condition
          barely holds. A careful case analysis shows no Hamiltonian cycle exists.
        </p>
      </Example>

      <Theorem
        title="Bipartite Necessary Condition"
        proof={
          <>
            <p>
              A Hamiltonian cycle visits every vertex exactly once, alternating between the two
              parts of the bipartition.
            </p>
            <p className="mt-2">
              In a bipartite graph <InlineMath math="G" /> with parts <InlineMath math="X" /> and{' '}
              <InlineMath math="Y" />, every edge connects a vertex in <InlineMath math="X" /> to
              one in <InlineMath math="Y" />.
            </p>
            <p className="mt-2">
              A Hamiltonian cycle of length <InlineMath math="n = |X| + |Y|" /> must traverse edges
              alternating: <InlineMath math="x_1 - y_1 - x_2 - y_2 - \cdots" /> and return to{' '}
              <InlineMath math="x_1" />.
            </p>
            <p className="mt-2">
              For the cycle to close (return from <InlineMath math="Y" /> to{' '}
              <InlineMath math="x_1 \in X" />), we need equal numbers of vertices in each part.
              After visiting <InlineMath math="|X|" /> vertices from <InlineMath math="X" />, we
              must have visited exactly <InlineMath math="|X|" /> vertices from{' '}
              <InlineMath math="Y" /> to return.
            </p>
            <p className="mt-2">
              Therefore <InlineMath math="|X| = |Y|" /> is necessary.
            </p>
          </>
        }
      >
        <p>
          A bipartite graph <InlineMath math="G" /> with bipartition{' '}
          <InlineMath math="(X, Y)" /> has a Hamiltonian cycle only if{' '}
          <InlineMath math="|X| = |Y|" />.
        </p>
        <p className="mt-2 text-dark-300">
          The Hamiltonian cycle must alternate between <InlineMath math="X" /> and{' '}
          <InlineMath math="Y" />.
        </p>
      </Theorem>

      <h2>Sufficient Conditions</h2>

      <Theorem title="Dirac's Theorem (Theorem 7.2.1)">
        <p>
          If <InlineMath math="G" /> is a simple graph with <InlineMath math="n \geq 3" />{' '}
          vertices and <InlineMath math="\delta(G) \geq n/2" />, then{' '}
          <InlineMath math="G" /> is Hamiltonian.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="P = v_1 v_2 \cdots v_k" /> be a longest path. If{' '}
              <InlineMath math="k < n" />, all neighbors of <InlineMath math="v_1" /> and{' '}
              <InlineMath math="v_k" /> are on <InlineMath math="P" /> (else extend).
            </p>
            <p className="mt-2">
              By pigeonhole with <InlineMath math="\delta \geq n/2" />, there exists{' '}
              <InlineMath math="v_i" /> where <InlineMath math="v_1 v_{i+1}" /> and{' '}
              <InlineMath math="v_k v_i" /> are edges. This creates a cycle covering{' '}
              <InlineMath math="P" />. Since <InlineMath math="k < n" />, an uncovered
              vertex is adjacent to the cycle, giving a longer path—contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Dirac's Theorem is Sharp">
        <p>
          Consider <InlineMath math="K_{n/2, n/2 + 1}" /> (with <InlineMath math="n" />{' '}
          odd). This has <InlineMath math="\delta = n/2" /> but is not Hamiltonian
          (unequal parts). So <InlineMath math="\delta \geq n/2" /> is best possible.
        </p>
      </Example>

      <Theorem
        title="Ore's Theorem (Theorem 7.2.3)"
        proof={
          <>
            <p>
              The proof is similar to Dirac's, using the longest path argument.
            </p>
            <p className="mt-2">
              <strong>Step 1:</strong> Let <InlineMath math="P = v_1 v_2 \cdots v_k" /> be a longest
              path in <InlineMath math="G" />. If <InlineMath math="k < n" />, all neighbors of{' '}
              <InlineMath math="v_1" /> and <InlineMath math="v_k" /> lie on <InlineMath math="P" />{' '}
              (otherwise <InlineMath math="P" /> could be extended).
            </p>
            <p className="mt-2">
              <strong>Step 2:</strong> Form a cycle from <InlineMath math="P" />. Let{' '}
              <InlineMath math="S = \{'{'}i : v_1 v_{'{'}i+1{'}'} \in E{'}'}" /> and{' '}
              <InlineMath math="T = \{'{'}i : v_k v_i \in E{'}'}" />.
            </p>
            <p className="mt-2">
              We have <InlineMath math="|S| = d(v_1)" /> and <InlineMath math="|T| = d(v_k)" />,
              both subsets of <InlineMath math="\{'{'}1, \ldots, k-1{'}'}" />.
            </p>
            <p className="mt-2">
              <strong>Step 3:</strong> If <InlineMath math="v_1" /> and <InlineMath math="v_k" />{' '}
              are non-adjacent, then <InlineMath math="d(v_1) + d(v_k) \geq n > k - 1" /> by Ore's
              condition. By pigeonhole, <InlineMath math="S \cap T \neq \emptyset" />: some{' '}
              <InlineMath math="i \in S \cap T" />.
            </p>
            <p className="mt-2">
              Then <InlineMath math="v_1 v_{'{'}i+1{'}'} \cdots v_k v_i \cdots v_1" /> is a cycle
              covering <InlineMath math="P" />. If <InlineMath math="k < n" />, some vertex{' '}
              <InlineMath math="w \notin P" /> is adjacent to the cycle, giving a longer path—contradiction.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> is a simple graph with <InlineMath math="n \geq 3" />{' '}
          vertices such that for every pair of non-adjacent vertices{' '}
          <InlineMath math="u, v" />:
        </p>
        <MathBlock math="d(u) + d(v) \geq n" />
        <p className="mt-2">
          then <InlineMath math="G" /> is Hamiltonian.
        </p>
        <p className="mt-2 text-dark-300">
          Ore's condition is weaker than Dirac's (allows low-degree vertices if they're
          adjacent to everything).
        </p>
      </Theorem>

      <Definition title="Closure">
        <p>
          The <strong>closure</strong> <InlineMath math="cl(G)" /> of graph{' '}
          <InlineMath math="G" /> is obtained by repeatedly adding edges between
          non-adjacent vertices <InlineMath math="u, v" /> with{' '}
          <InlineMath math="d(u) + d(v) \geq n" /> until no more can be added.
        </p>
      </Definition>

      <Theorem
        title="Bondy-Chvátal Theorem (Theorem 7.2.6)"
        proof={
          <>
            <p>
              <strong>(⇐):</strong> If <InlineMath math="cl(G)" /> is Hamiltonian, we show{' '}
              <InlineMath math="G" /> is Hamiltonian.
            </p>
            <p className="mt-2">
              Consider the last edge <InlineMath math="e = uv" /> added in forming{' '}
              <InlineMath math="cl(G)" /> from <InlineMath math="G" />. Let{' '}
              <InlineMath math="H = cl(G) - e" />. We had <InlineMath math="d_H(u) + d_H(v) \geq n" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="cl(G)" /> has a Hamiltonian cycle <InlineMath math="C" /> using{' '}
              <InlineMath math="e" />, the Ore-type argument (from the proof of Ore's theorem) shows
              <InlineMath math="H" /> also has a Hamiltonian cycle (using the pigeonhole argument on
              the path <InlineMath math="C - e" />).
            </p>
            <p className="mt-2">
              By induction backward through the closure construction, <InlineMath math="G" /> is Hamiltonian.
            </p>
            <p className="mt-2">
              <strong>(⇒):</strong> If <InlineMath math="G" /> is Hamiltonian, then{' '}
              <InlineMath math="cl(G) \supseteq G" /> is also Hamiltonian (adding edges preserves
              Hamiltonian cycles).
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> The closure is the unique graph containing{' '}
              <InlineMath math="G" /> where no non-adjacent pair has degree sum <InlineMath math="\geq n" />.
            </p>
          </>
        }
      >
        <p>
          A graph <InlineMath math="G" /> is Hamiltonian if and only if{' '}
          <InlineMath math="cl(G)" /> is Hamiltonian.
        </p>
        <p className="mt-2 text-dark-300">
          The closure is unique (independent of order of edge additions).
        </p>
      </Theorem>

      <Example title="Using Closure">
        <p>
          If <InlineMath math="cl(G) = K_n" />, then <InlineMath math="G" /> is
          Hamiltonian. This gives a simple sufficient condition checkable in polynomial
          time.
        </p>
      </Example>

      <h2>Degree Sequences</h2>

      <Definition title="Hamiltonian Degree Sequence">
        <p>
          A degree sequence is <strong>forcibly Hamiltonian</strong> if every simple
          graph with that degree sequence is Hamiltonian.
        </p>
      </Definition>

      <Theorem
        title="Chvátal's Theorem (Theorem 7.2.8)"
        proof={
          <>
            <p>
              We show any graph <InlineMath math="G" /> with this degree sequence has closure{' '}
              <InlineMath math="K_n" />, hence is Hamiltonian by Bondy-Chvátal.
            </p>
            <p className="mt-2">
              <strong>Claim:</strong> If <InlineMath math="G" /> has the given degree sequence
              and <InlineMath math="u, v" /> are non-adjacent with <InlineMath math="d(u) \leq d(v)" />,
              then <InlineMath math="d(u) + d(v) \geq n" />.
            </p>
            <p className="mt-2">
              <strong>Proof of claim:</strong> Let <InlineMath math="d(u) = k" />. Since{' '}
              <InlineMath math="u" /> is non-adjacent to <InlineMath math="v" />,{' '}
              <InlineMath math="u" /> has at most <InlineMath math="n - 2" /> neighbors.
            </p>
            <p className="mt-2">
              If <InlineMath math="k < n/2" />, then by the degree sequence condition,
              vertex <InlineMath math="v" /> (with <InlineMath math="d(v) \geq d(u) = k" />)
              has the property that the number of vertices with degree <InlineMath math="\leq k" />{' '}
              is at most <InlineMath math="k" />. Thus <InlineMath math="d(v) \geq n - k" />.
            </p>
            <p className="mt-2">
              Therefore <InlineMath math="d(u) + d(v) \geq k + (n-k) = n" />.
            </p>
            <p className="mt-2">
              This means the closure process adds edges until we reach <InlineMath math="K_n" />,
              which is Hamiltonian.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath math="d_1 \leq d_2 \leq \cdots \leq d_n" /> be a degree
          sequence with <InlineMath math="n \geq 3" />. If for all{' '}
          <InlineMath math="k < n/2" />:
        </p>
        <MathBlock math="d_k \leq k \implies d_{n-k} \geq n - k" />
        <p className="mt-2">
          then the sequence is forcibly Hamiltonian.
        </p>
      </Theorem>

      <h2>Hamiltonian Paths</h2>

      <Theorem
        title="Path Version of Dirac"
        proof={
          <>
            <p>
              We use a similar argument to Dirac's theorem for cycles.
            </p>
            <p className="mt-2">
              Let <InlineMath math="P = v_1 v_2 \cdots v_k" /> be a longest path in{' '}
              <InlineMath math="G" />. If <InlineMath math="k = n" />, we're done.
            </p>
            <p className="mt-2">
              Suppose <InlineMath math="k < n" />. All neighbors of <InlineMath math="v_1" />{' '}
              and <InlineMath math="v_k" /> lie on <InlineMath math="P" /> (else{' '}
              <InlineMath math="P" /> could be extended).
            </p>
            <p className="mt-2">
              Let <InlineMath math="S = \{'{'}i : v_1 v_{'{'}i+1{'}'} \in E{'}'}" /> and{' '}
              <InlineMath math="T = \{'{'}i : v_k v_i \in E{'}'}" />. Both are subsets of{' '}
              <InlineMath math="\{'{'}1, \ldots, k-1{'}'}" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="|S| \geq (n-1)/2" /> and <InlineMath math="|T| \geq (n-1)/2" />,
              and <InlineMath math="k - 1 < n - 1" />, we have{' '}
              <InlineMath math="|S| + |T| \geq n - 1 > k - 1" />.
            </p>
            <p className="mt-2">
              By pigeonhole, some <InlineMath math="i \in S \cap T" />. This creates a cycle covering{' '}
              <InlineMath math="P" />. Since <InlineMath math="k < n" />, some vertex outside{' '}
              <InlineMath math="P" /> is adjacent to this cycle, giving a longer path—contradiction.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> has <InlineMath math="n \geq 2" /> vertices and{' '}
          <InlineMath math="\delta(G) \geq (n-1)/2" />, then <InlineMath math="G" /> has
          a Hamiltonian path.
        </p>
      </Theorem>

      <Theorem
        title="Theorem 7.2.10 (Hamiltonian Path Between Vertices)"
        proof={
          <>
            <p>
              Form a new graph <InlineMath math="G'" /> by adding a new vertex{' '}
              <InlineMath math="z" /> adjacent to all vertices of <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              In <InlineMath math="G'" />, for any non-adjacent pair{' '}
              <InlineMath math="u, v \in V(G)" />:
            </p>
            <MathBlock math="d_{G'}(u) + d_{G'}(v) = (d_G(u) + 1) + (d_G(v) + 1) = d_G(u) + d_G(v) + 2 \geq n + 1 = |V(G')|" />
            <p className="mt-2">
              By Ore's theorem, <InlineMath math="G'" /> is Hamiltonian. Let{' '}
              <InlineMath math="C" /> be a Hamiltonian cycle in <InlineMath math="G'" />.
            </p>
            <p className="mt-2">
              Remove <InlineMath math="z" /> from <InlineMath math="C" />: the remaining path
              visits all vertices of <InlineMath math="G" /> exactly once.
            </p>
            <p className="mt-2">
              This path is a Hamiltonian path in <InlineMath math="G" />.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> is simple with <InlineMath math="n \geq 3" />{' '}
          vertices, and for non-adjacent <InlineMath math="u, v" />:{' '}
          <InlineMath math="d(u) + d(v) \geq n - 1" />, then there is a Hamiltonian
          path.
        </p>
      </Theorem>

      <h2>Special Graph Classes</h2>

      <Theorem
        title="Complete Bipartite Graphs"
        proof={
          <>
            <p>
              <strong>(⇒) Necessity:</strong> If <InlineMath math="K_{'{'}m,n{'}'}" /> is Hamiltonian,
              then <InlineMath math="m = n" /> by the bipartite necessary condition.
            </p>
            <p className="mt-2">
              Also <InlineMath math="m, n \geq 2" /> since a Hamiltonian cycle needs at least 3
              vertices and the cycle must alternate between parts.
            </p>
            <p className="mt-2">
              <strong>(⇐) Sufficiency:</strong> Let the parts be{' '}
              <InlineMath math="X = \{'{'}x_1, \ldots, x_n{'}'}" /> and{' '}
              <InlineMath math="Y = \{'{'}y_1, \ldots, y_n{'}'}" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="K_{'{'}n,n{'}'}" /> has every vertex in one part adjacent to
              every vertex in the other, the cycle:
            </p>
            <MathBlock math="x_1 - y_1 - x_2 - y_2 - \cdots - x_n - y_n - x_1" />
            <p className="mt-2">
              visits all <InlineMath math="2n" /> vertices exactly once and returns to the start.
              This is a Hamiltonian cycle.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="K_{m,n}" /> is Hamiltonian if and only if{' '}
          <InlineMath math="m = n \geq 2" />.
        </p>
      </Theorem>

      <Theorem
        title="Hypercube is Hamiltonian"
        proof={
          <>
            <p>
              We prove by induction on <InlineMath math="n" />.
            </p>
            <p className="mt-2">
              <strong>Base case (<InlineMath math="n = 2" />):</strong>{' '}
              <InlineMath math="Q_2 = C_4" />, which is a Hamiltonian cycle itself.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Assume <InlineMath math="Q_{'{'}n-1{'}'}" /> is
              Hamiltonian. <InlineMath math="Q_n" /> consists of two copies of{' '}
              <InlineMath math="Q_{'{'}n-1{'}'}" /> (one with first bit 0, one with first bit 1),
              connected by edges between corresponding vertices.
            </p>
            <p className="mt-2">
              Let <InlineMath math="H_0" /> and <InlineMath math="H_1" /> be Hamiltonian cycles in
              the two copies. Each vertex <InlineMath math="v" /> in <InlineMath math="H_0" /> is
              connected to its "twin" in <InlineMath math="H_1" />.
            </p>
            <p className="mt-2">
              Remove one edge <InlineMath math="uv" /> from <InlineMath math="H_0" /> and the
              corresponding edge <InlineMath math="u'v'" /> from <InlineMath math="H_1" />. Connect{' '}
              <InlineMath math="u" /> to <InlineMath math="u'" /> and <InlineMath math="v" /> to{' '}
              <InlineMath math="v'" /> using the hypercube edges.
            </p>
            <p className="mt-2">
              The result is a Hamiltonian cycle in <InlineMath math="Q_n" />.
            </p>
          </>
        }
      >
        <p>
          The <InlineMath math="n" />-dimensional hypercube{' '}
          <InlineMath math="Q_n" /> is Hamiltonian for <InlineMath math="n \geq 2" />.
        </p>
        <p className="mt-2 text-dark-300">
          In fact, <InlineMath math="Q_n" /> is Hamiltonian laceable: there's a
          Hamiltonian path between any two vertices of different parities.
        </p>
      </Theorem>

      <h2>Complexity</h2>

      <Theorem
        title="NP-Completeness (Karp, 1972)"
        proof={
          <>
            <p>
              <strong>In NP:</strong> A Hamiltonian cycle can be verified in polynomial time by
              checking that it visits each vertex exactly once and all edges are present.
            </p>
            <p className="mt-2">
              <strong>NP-hardness:</strong> We reduce from 3-SAT.
            </p>
            <p className="mt-2">
              Given a 3-SAT formula with variables <InlineMath math="x_1, \ldots, x_n" /> and
              clauses <InlineMath math="C_1, \ldots, C_m" />, construct a graph where:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                Each variable <InlineMath math="x_i" /> corresponds to a "variable gadget"—a
                path that can be traversed in two directions (representing true/false)
              </li>
              <li>
                Each clause <InlineMath math="C_j" /> corresponds to a "clause gadget" that can
                only be traversed if at least one of its literals is true
              </li>
              <li>
                The gadgets are connected so that a Hamiltonian cycle exists iff the formula
                is satisfiable
              </li>
            </ol>
            <p className="mt-2">
              The construction ensures that the direction of traversal through variable gadgets
              encodes a truth assignment, and clause gadgets force at least one true literal per
              clause.
            </p>
          </>
        }
      >
        <p>
          Determining whether a graph has a Hamiltonian cycle is NP-complete.
        </p>
        <p className="mt-2">
          It remains NP-complete even for:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>Planar 3-connected cubic graphs</li>
          <li>Bipartite graphs</li>
          <li>Grid graphs</li>
        </ul>
      </Theorem>

      <p>
        This contrasts sharply with Eulerian circuits, which can be found in linear
        time.
      </p>

      <h2>Traveling Salesman Problem</h2>

      <Definition title="TSP">
        <p>
          The <strong>Traveling Salesman Problem</strong> (TSP) asks: given a weighted
          complete graph, find a Hamiltonian cycle of minimum total weight.
        </p>
        <p className="mt-2">
          The unweighted version (does a Hamiltonian cycle exist?) is a special case.
        </p>
      </Definition>

      <Theorem
        title="TSP Complexity"
        proof={
          <>
            <p>
              <strong>NP-hardness:</strong> TSP decision problem ("is there a tour of cost ≤ k?")
              is NP-hard by reduction from Hamiltonian Cycle.
            </p>
            <p className="mt-2">
              Given graph <InlineMath math="G" />, create a complete weighted graph: weight 1 for
              edges in <InlineMath math="G" />, weight 2 for non-edges. <InlineMath math="G" /> has
              a Hamiltonian cycle iff there's a TSP tour of cost <InlineMath math="n" />.
            </p>
            <p className="mt-2">
              <strong>Inapproximability:</strong> For general TSP, suppose there's a polynomial
              <InlineMath math="c" />-approximation. Given Hamiltonian Cycle instance{' '}
              <InlineMath math="G" />, set non-edge weights to <InlineMath math="cn + 1" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="G" /> is Hamiltonian, OPT = <InlineMath math="n" />, and
              approximation returns ≤ <InlineMath math="cn" />. If not Hamiltonian, OPT ≥{' '}
              <InlineMath math="n - 1 + cn + 1 > cn" />. This distinguishes the cases, solving
              NP-complete Hamiltonian Cycle.
            </p>
            <p className="mt-2">
              <strong>Metric TSP:</strong> When triangle inequality holds, non-edge weight tricks
              fail. Christofides: find MST, add minimum matching on odd-degree vertices, find
              Eulerian tour, shortcut. This gives <InlineMath math="3/2" />-approximation.
            </p>
          </>
        }
      >
        <p>
          TSP is NP-hard. The optimization version has no polynomial-time approximation
          scheme unless P=NP (in the general case).
        </p>
        <p className="mt-2">
          For metric TSP (triangle inequality holds), the Christofides algorithm gives a
          3/2-approximation.
        </p>
      </Theorem>

      <h2>Pancyclic Graphs</h2>

      <Definition title="Pancyclic">
        <p>
          A graph <InlineMath math="G" /> is <strong>pancyclic</strong> if it contains
          cycles of every length from 3 to <InlineMath math="n" />.
        </p>
      </Definition>

      <Theorem title="Bondy's Meta-Conjecture">
        <p>
          "Almost any non-trivial condition implying that a graph is Hamiltonian also
          implies that it is pancyclic."
        </p>
        <p className="mt-2 text-dark-300">
          For instance, if <InlineMath math="\delta \geq n/2" /> and{' '}
          <InlineMath math="G" /> is not bipartite, then <InlineMath math="G" /> is
          pancyclic or <InlineMath math="G = K_{n/2, n/2}" />.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Hamiltonian:</strong> Cycle visiting every vertex exactly once. Much
          harder than Eulerian.
        </li>
        <li>
          <strong>Necessary:</strong> Removing <InlineMath math="k" /> vertices leaves
          at most <InlineMath math="k" /> components.
        </li>
        <li>
          <strong>Dirac:</strong> <InlineMath math="\delta \geq n/2" /> implies
          Hamiltonian.
        </li>
        <li>
          <strong>Ore:</strong> <InlineMath math="d(u) + d(v) \geq n" /> for all
          non-adjacent <InlineMath math="u, v" /> implies Hamiltonian.
        </li>
        <li>
          <strong>Closure:</strong> <InlineMath math="G" /> Hamiltonian iff{' '}
          <InlineMath math="cl(G)" /> Hamiltonian.
        </li>
        <li>
          <strong>NP-Complete:</strong> No efficient algorithm known; contrasts with
          linear-time Eulerian.
        </li>
        <li>
          <strong>TSP:</strong> Weighted version of Hamiltonian cycle; fundamental
          optimization problem.
        </li>
      </ul>
    </LessonLayout>
  );
}
