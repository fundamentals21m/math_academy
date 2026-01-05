import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { FlowNetwork } from '@/components/visualizations';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <p>
        Network flow theory studies how to route "flow" through a network from a source
        to a sink, respecting capacity constraints. The Max-flow Min-cut Theorem is a
        cornerstone of combinatorial optimization, elegantly connecting Menger's Theorem
        to linear programming duality. Flow networks model transportation, communication,
        and many other systems.
      </p>

      <h2>Interactive Flow Network</h2>

      <p>
        Watch the Ford-Fulkerson algorithm find maximum flow. See augmenting paths, observe
        flow being pushed through the network, and discover the minimum cut.
      </p>

      <FlowNetwork className="my-8" />

      <h2>Networks and Flows</h2>

      <Definition title="Network">
        <p>
          A <strong>network</strong> is a digraph <InlineMath math="N" /> with:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            A <strong>source</strong> <InlineMath math="s" /> with{' '}
            <InlineMath math="d^-(s) = 0" /> (no incoming edges)
          </li>
          <li>
            A <strong>sink</strong> <InlineMath math="t" /> with{' '}
            <InlineMath math="d^+(t) = 0" /> (no outgoing edges)
          </li>
          <li>
            A <strong>capacity function</strong>{' '}
            <InlineMath math="c: E(N) \to \mathbb{R}^+" /> assigning nonnegative
            capacities to edges
          </li>
        </ul>
      </Definition>

      <Definition title="Flow">
        <p>
          A <strong>flow</strong> on network <InlineMath math="N" /> is a function{' '}
          <InlineMath math="f: E(N) \to \mathbb{R}^+" /> satisfying:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            <strong>Capacity constraint:</strong>{' '}
            <InlineMath math="0 \leq f(e) \leq c(e)" /> for all edges{' '}
            <InlineMath math="e" />
          </li>
          <li>
            <strong>Conservation:</strong> For all <InlineMath math="v \neq s, t" />:
            <MathBlock math="f^-(v) = f^+(v)" />
            (flow in = flow out)
          </li>
        </ol>
        <p className="mt-2">
          The <strong>value</strong> of flow <InlineMath math="f" /> is{' '}
          <InlineMath math="val(f) = f^+(s)" /> (total flow leaving the source).
        </p>
      </Definition>

      <Example title="Transportation Network">
        <p>
          A distribution company ships goods from factory <InlineMath math="s" /> to
          warehouse <InlineMath math="t" /> through intermediate cities. Each road has a
          maximum capacity (trucks per day). A flow assigns truck routes respecting
          capacities and ensuring that at intermediate cities, trucks entering equals
          trucks leaving.
        </p>
      </Example>

      <h2>Cuts in Networks</h2>

      <Definition title="Source-Sink Cut">
        <p>
          An <InlineMath math="s, t" />-<strong>cut</strong> in network{' '}
          <InlineMath math="N" /> is a partition <InlineMath math="(S, T)" /> of{' '}
          <InlineMath math="V(N)" /> with <InlineMath math="s \in S" /> and{' '}
          <InlineMath math="t \in T" />.
        </p>
        <p className="mt-2">
          The <strong>capacity</strong> of cut <InlineMath math="(S, T)" /> is:
        </p>
        <MathBlock math="cap(S, T) = \sum_{e \in [S, T]} c(e)" />
        <p className="mt-2">
          where <InlineMath math="[S, T]" /> denotes edges from <InlineMath math="S" />{' '}
          to <InlineMath math="T" />.
        </p>
      </Definition>

      <Theorem title="Lemma 4.3.4 (Weak Duality)">
        <p>
          For any flow <InlineMath math="f" /> and any <InlineMath math="s, t" />-cut{' '}
          <InlineMath math="(S, T)" />:
        </p>
        <MathBlock math="val(f) \leq cap(S, T)" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Flow conservation means: for each <InlineMath math="v \in S - \{s\}" />,
              flow in equals flow out. Summing over all <InlineMath math="v \in S" />:
            </p>
            <MathBlock math="val(f) = f^+(S) - f^-(S) \leq f^+(S) \leq cap(S, T)" />
            <p>
              where <InlineMath math="f^+(S)" /> is total flow leaving{' '}
              <InlineMath math="S" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>The Max-Flow Min-Cut Theorem</h2>

      <Theorem title="Max-Flow Min-Cut Theorem (Theorem 4.3.9)">
        <p>
          In any network, the maximum value of a flow equals the minimum capacity of an{' '}
          <InlineMath math="s, t" />-cut:
        </p>
        <MathBlock math="\max_f val(f) = \min_{(S,T)} cap(S, T)" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch (Ford-Fulkerson)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We show that when no augmenting path exists, the current flow equals
              some cut's capacity. Define:
            </p>
            <MathBlock math="S = \{v : \text{there is an augmenting path from } s \text{ to } v\}" />
            <p className="mt-2">
              Since there's no augmenting path to <InlineMath math="t" />,{' '}
              <InlineMath math="t \notin S" />, so <InlineMath math="(S, T)" /> is a cut.
              For edges from <InlineMath math="S" /> to <InlineMath math="T" />, flow
              equals capacity (else augmenting path exists). For edges from{' '}
              <InlineMath math="T" /> to <InlineMath math="S" />, flow is 0. Thus{' '}
              <InlineMath math="val(f) = cap(S, T)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Computing Max-Flow">
        <p>
          Consider a network with <InlineMath math="s \to a \to t" /> (capacity 3),{' '}
          <InlineMath math="s \to b \to t" /> (capacity 2), and{' '}
          <InlineMath math="a \to b" /> (capacity 1).
        </p>
        <p className="mt-2">
          Maximum flow: Send 3 through <InlineMath math="s \to a \to t" /> and 2
          through <InlineMath math="s \to b \to t" />. Total value = 5.
        </p>
        <p className="mt-2">
          Minimum cut: <InlineMath math="S = \{s\}" />,{' '}
          <InlineMath math="T = \{a, b, t\}" />. Cut capacity = 3 + 2 = 5. ✓
        </p>
      </Example>

      <h2>The Ford-Fulkerson Algorithm</h2>

      <Definition title="Residual Network">
        <p>
          Given network <InlineMath math="N" /> and flow <InlineMath math="f" />, the{' '}
          <strong>residual network</strong> <InlineMath math="N_f" /> has:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Forward edges:</strong> For each edge{' '}
            <InlineMath math="e = (u, v)" /> with <InlineMath math="f(e) < c(e)" />,
            include <InlineMath math="(u, v)" /> with residual capacity{' '}
            <InlineMath math="c(e) - f(e)" />.
          </li>
          <li>
            <strong>Backward edges:</strong> For each edge{' '}
            <InlineMath math="e = (u, v)" /> with <InlineMath math="f(e) > 0" />,
            include <InlineMath math="(v, u)" /> with residual capacity{' '}
            <InlineMath math="f(e)" />.
          </li>
        </ul>
      </Definition>

      <Definition title="Augmenting Path">
        <p>
          An <strong>augmenting path</strong> for flow <InlineMath math="f" /> is an{' '}
          <InlineMath math="s, t" />-path in the residual network{' '}
          <InlineMath math="N_f" />.
        </p>
        <p className="mt-2">
          The <strong>bottleneck</strong> of an augmenting path is the minimum residual
          capacity along the path.
        </p>
      </Definition>

      <Definition title="Ford-Fulkerson Algorithm">
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Initialize <InlineMath math="f(e) = 0" /> for all edges.
          </li>
          <li>
            While there exists an augmenting path <InlineMath math="P" />:
            <ul className="ml-4 list-disc list-inside">
              <li>
                Find bottleneck <InlineMath math="\delta = \min_{e \in P} c_f(e)" />.
              </li>
              <li>
                For each edge <InlineMath math="(u, v)" /> in <InlineMath math="P" />:
                <ul className="ml-4 list-disc list-inside">
                  <li>
                    If forward edge: increase <InlineMath math="f(u, v)" /> by{' '}
                    <InlineMath math="\delta" />.
                  </li>
                  <li>
                    If backward edge: decrease <InlineMath math="f(v, u)" /> by{' '}
                    <InlineMath math="\delta" />.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Return <InlineMath math="f" />.
          </li>
        </ol>
      </Definition>

      <Theorem title="Ford-Fulkerson Correctness">
        <p>
          The Ford-Fulkerson algorithm terminates with a maximum flow when all
          capacities are rational. With integer capacities, running time is{' '}
          <InlineMath math="O(m \cdot val(f^*))" /> where{' '}
          <InlineMath math="val(f^*)" /> is the maximum flow value.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Correctness:</strong> The algorithm terminates when no augmenting
              path exists. At this point, define{' '}
              <InlineMath math="S = \{'{'}v : v \text{ reachable from } s \text{ in } N_f{'}'}" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="t \notin S" /> (no augmenting path to{' '}
              <InlineMath math="t" />), <InlineMath math="(S, V - S)" /> is an{' '}
              <InlineMath math="s, t" />-cut.
            </p>
            <p className="mt-2">
              For edges <InlineMath math="(u, v)" /> with <InlineMath math="u \in S" />{' '}
              and <InlineMath math="v \notin S" />: we have{' '}
              <InlineMath math="f(u, v) = c(u, v)" /> (else there would be residual
              capacity and <InlineMath math="v" /> would be reachable).
            </p>
            <p className="mt-2">
              For edges <InlineMath math="(v, u)" /> with <InlineMath math="v \notin S" />{' '}
              and <InlineMath math="u \in S" />: we have <InlineMath math="f(v, u) = 0" />{' '}
              (else there would be a backward edge and <InlineMath math="v" /> would be
              reachable).
            </p>
            <p className="mt-2">
              Thus <InlineMath math="val(f) = cap(S, V - S)" />. By weak duality,{' '}
              <InlineMath math="f" /> is maximum and <InlineMath math="(S, V - S)" />{' '}
              is a minimum cut.
            </p>
            <p className="mt-2">
              <strong>Termination:</strong> With integer capacities, each augmentation
              increases <InlineMath math="val(f)" /> by at least 1. Since{' '}
              <InlineMath math="val(f) \leq val(f^*)" />, we have at most{' '}
              <InlineMath math="val(f^*)" /> augmentations.
            </p>
            <p className="mt-2">
              <strong>Time:</strong> Finding an augmenting path takes{' '}
              <InlineMath math="O(m)" /> (BFS/DFS). Total:{' '}
              <InlineMath math="O(m \cdot val(f^*))" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h3>Improved Algorithms</h3>

      <p>
        By choosing augmenting paths more carefully, we can guarantee polynomial time:
      </p>

      <Theorem title="Edmonds-Karp Algorithm (1972)">
        <p>
          Using BFS to find shortest augmenting paths, maximum flow can be computed in{' '}
          <InlineMath math="O(nm^2)" /> time.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Key lemma:</strong> If we always augment along shortest paths (by
              number of edges), then for any vertex <InlineMath math="v" />, the distance{' '}
              <InlineMath math="d(s, v)" /> in the residual network never decreases
              throughout the algorithm.
            </p>
            <p className="mt-2">
              <strong>Proof of lemma:</strong> Suppose <InlineMath math="d'(s, v) &lt; d(s, v)" />{' '}
              after an augmentation, where <InlineMath math="d'" /> is the new distance.
              Take the first such <InlineMath math="v" /> (minimum <InlineMath math="d'(s, v)" />).
            </p>
            <p className="mt-2">
              Let <InlineMath math="u" /> be the predecessor of <InlineMath math="v" /> on
              a shortest <InlineMath math="s, v" />-path in <InlineMath math="N'_f" />.
              Then <InlineMath math="d'(s, u) = d'(s, v) - 1" />. By choice of{' '}
              <InlineMath math="v" />, we have <InlineMath math="d(s, u) \leq d'(s, u)" />.
            </p>
            <p className="mt-2">
              The edge <InlineMath math="(u, v)" /> is in <InlineMath math="N'_f" /> but
              either wasn't in <InlineMath math="N_f" /> (so we augmented along{' '}
              <InlineMath math="(v, u)" />) or was. If we augmented along{' '}
              <InlineMath math="(v, u)" />, then <InlineMath math="d(s, u) = d(s, v) + 1" />,
              giving <InlineMath math="d'(s, v) \geq d(s, v)" /> — contradiction.
            </p>
            <p className="mt-2">
              <strong>Augmentation count:</strong> An edge <InlineMath math="(u, v)" />{' '}
              can be "critical" (bottleneck) at most <InlineMath math="n/2" /> times.
              Each time it's critical, <InlineMath math="d(s, u)" /> increases by at least 2.
              With <InlineMath math="m" /> edges, total augmentations are{' '}
              <InlineMath math="O(nm)" />.
            </p>
            <p className="mt-2">
              Each BFS takes <InlineMath math="O(m)" /> time. Total:{' '}
              <InlineMath math="O(nm \cdot m) = O(nm^2)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Dinic's Algorithm (1970)">
        <p>
          Using blocking flows in layered networks, maximum flow can be computed in{' '}
          <InlineMath math="O(n^2 m)" /> time, or{' '}
          <InlineMath math="O(m\sqrt{n})" /> for unit capacity networks.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Layered network:</strong> Build a BFS layer structure from{' '}
              <InlineMath math="s" /> in the residual network. Layer <InlineMath math="L_i" />{' '}
              contains vertices at distance <InlineMath math="i" /> from{' '}
              <InlineMath math="s" />.
            </p>
            <p className="mt-2">
              <strong>Blocking flow:</strong> A flow in the layered network where every{' '}
              <InlineMath math="s, t" />-path has at least one saturated edge. Finding a
              blocking flow takes <InlineMath math="O(nm)" /> time via DFS.
            </p>
            <p className="mt-2">
              <strong>Key insight:</strong> After finding a blocking flow and updating,
              the distance from <InlineMath math="s" /> to <InlineMath math="t" /> in
              the new residual network strictly increases. Since{' '}
              <InlineMath math="d(s, t) \leq n - 1" />, at most <InlineMath math="n" />{' '}
              phases are needed.
            </p>
            <p className="mt-2">
              <strong>General case:</strong> <InlineMath math="n" /> phases, each taking{' '}
              <InlineMath math="O(nm)" /> time. Total: <InlineMath math="O(n^2 m)" />.
            </p>
            <p className="mt-2">
              <strong>Unit capacity:</strong> When all capacities are 1, each phase
              saturates at least <InlineMath math="\sqrt{m}" /> edges, and the number
              of phases before distance exceeds <InlineMath math="\sqrt{n}" /> is{' '}
              <InlineMath math="O(\sqrt{n})" />. Total: <InlineMath math="O(m\sqrt{n})" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Integrality Theorem</h2>

      <Theorem title="Integrality Theorem (Theorem 4.3.11)">
        <p>
          If all capacities in a network are integers, then there exists a maximum flow
          that is integer-valued on all edges.
        </p>
        <p className="mt-2 text-dark-300">
          The Ford-Fulkerson algorithm automatically produces such an integer flow.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We show the Ford-Fulkerson algorithm maintains integer flows throughout.
            </p>
            <p className="mt-2">
              <strong>Base case:</strong> The initial flow <InlineMath math="f \equiv 0" />{' '}
              is integer-valued.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Suppose <InlineMath math="f" /> is integer-valued.
              The residual network <InlineMath math="N_f" /> has capacities:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Forward edges: <InlineMath math="c(e) - f(e)" /> (integer minus integer)
              </li>
              <li>
                Backward edges: <InlineMath math="f(e)" /> (integer)
              </li>
            </ul>
            <p className="mt-2">
              All residual capacities are integers. The bottleneck{' '}
              <InlineMath math="\delta" /> of any augmenting path is the minimum of
              integers, hence an integer.
            </p>
            <p className="mt-2">
              After augmentation:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Forward edges: <InlineMath math="f(e) + \delta" /> (integer + integer)
              </li>
              <li>
                Backward edges: <InlineMath math="f(e) - \delta" /> (integer − integer)
              </li>
            </ul>
            <p className="mt-2">
              The new flow is integer-valued. By induction, the final maximum flow is
              integer-valued.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        This theorem has powerful consequences: many combinatorial problems can be
        modeled as integer flow problems.
      </p>

      <h2>Applications of Max-Flow</h2>

      <h3>Menger's Theorem from Max-Flow</h3>

      <Theorem title="Corollary 4.3.13 (Menger from Max-Flow)">
        <p>
          Menger's Theorem (edge version) follows from the Max-Flow Min-Cut Theorem by
          setting all capacities to 1.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              In a network with unit capacities, by integrality, maximum flow is the
              number of edge-disjoint <InlineMath math="s, t" />-paths. Minimum cut
              capacity is the minimum number of edges separating{' '}
              <InlineMath math="s" /> from <InlineMath math="t" />. Max-Flow Min-Cut
              gives Menger's Theorem.
            </p>
          </div>
        </details>
      </Theorem>

      <h3>Bipartite Matching</h3>

      <Theorem title="Maximum Bipartite Matching via Flow (Corollary 4.3.14)">
        <p>
          Maximum matching in a bipartite graph <InlineMath math="G" /> can be computed
          by:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            Create network: Add source <InlineMath math="s" /> connected to all{' '}
            <InlineMath math="X" />-vertices; add sink <InlineMath math="t" />{' '}
            connected from all <InlineMath math="Y" />-vertices.
          </li>
          <li>Direct all edges from <InlineMath math="X" /> to <InlineMath math="Y" />.</li>
          <li>Set all capacities to 1.</li>
          <li>Maximum flow value = Maximum matching size.</li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Matching → Flow:</strong> Given a matching <InlineMath math="M" />,
              define flow: <InlineMath math="f(e) = 1" /> for edges in <InlineMath math="M" />{' '}
              and their incident <InlineMath math="s" />- and <InlineMath math="t" />-edges;
              <InlineMath math="f(e) = 0" /> otherwise.
            </p>
            <p className="mt-2">
              This is a valid flow: capacity constraints hold (all edges have capacity 1),
              and conservation holds (each matched vertex has one unit in, one unit out).
              Flow value = <InlineMath math="|M|" />.
            </p>
            <p className="mt-2">
              <strong>Flow → Matching:</strong> By integrality, there's an integer maximum
              flow. Since capacities are 1, flow values are 0 or 1. Edges from{' '}
              <InlineMath math="X" /> to <InlineMath math="Y" /> with flow 1 form a
              matching (conservation ensures each vertex is used at most once).
            </p>
            <p className="mt-2">
              <strong>Optimality:</strong> Maximum flow corresponds to maximum matching
              since both directions preserve size.
            </p>
          </div>
        </details>
      </Theorem>

      <h3>König-Egerváry from Max-Flow</h3>

      <p>
        The König-Egerváry Theorem (maximum matching = minimum vertex cover in bipartite
        graphs) also follows from Max-Flow Min-Cut applied to the bipartite matching
        network.
      </p>

      <h3>Edge-Disjoint Paths</h3>

      <Example title="Multi-Commodity Flow">
        <p>
          A company needs to route data between multiple source-destination pairs
          through a network. Each link has limited bandwidth. The multi-commodity flow
          problem asks: can we satisfy all demands simultaneously?
        </p>
        <p className="mt-2">
          For single source-destination, this reduces to max-flow. For multiple pairs,
          the problem becomes NP-hard in general but has efficient approximations.
        </p>
      </Example>

      <h2>Circulations</h2>

      <Definition title="Circulation">
        <p>
          A <strong>circulation</strong> in a network is a flow where{' '}
          <InlineMath math="s = t" /> (source equals sink), so conservation holds at
          every vertex.
        </p>
        <p className="mt-2">
          Equivalently, a circulation is an assignment of flows to edges satisfying
          capacity constraints and conservation everywhere.
        </p>
      </Definition>

      <Theorem title="Circulation with Demands (Theorem 4.3.19)">
        <p>
          A network with demands <InlineMath math="d(v)" /> at each vertex (positive for
          sources, negative for sinks) has a feasible circulation if and only if:
        </p>
        <ol className="mt-2 list-decimal list-inside">
          <li>
            <InlineMath math="\sum_v d(v) = 0" /> (total demand is zero)
          </li>
          <li>
            For every <InlineMath math="s, t" />-cut, the demand can be satisfied
          </li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Reduction to max-flow:</strong> Create a standard network by adding
              a super-source <InlineMath math="s^*" /> and super-sink{' '}
              <InlineMath math="t^*" />.
            </p>
            <p className="mt-2">
              For each vertex <InlineMath math="v" /> with <InlineMath math="d(v) > 0" />{' '}
              (source), add edge <InlineMath math="(s^*, v)" /> with capacity{' '}
              <InlineMath math="d(v)" />.
            </p>
            <p className="mt-2">
              For each vertex <InlineMath math="v" /> with <InlineMath math="d(v) &lt; 0" />{' '}
              (sink), add edge <InlineMath math="(v, t^*)" /> with capacity{' '}
              <InlineMath math="-d(v)" />.
            </p>
            <p className="mt-2">
              <strong>Equivalence:</strong> A feasible circulation exists iff there's a
              flow that saturates all edges out of <InlineMath math="s^*" /> and into{' '}
              <InlineMath math="t^*" />. This happens iff maximum flow value equals{' '}
              <InlineMath math="\sum_{d(v) > 0} d(v)" />.
            </p>
            <p className="mt-2">
              <strong>Condition 1:</strong> Necessary for any flow to exist (what flows
              out must equal what flows in).
            </p>
            <p className="mt-2">
              <strong>Condition 2:</strong> By max-flow min-cut, max flow equals min cut.
              The condition ensures no cut is a bottleneck preventing demand satisfaction.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Max-Flow Min-Cut:</strong> The central theorem: maximum flow value
          equals minimum cut capacity.
        </li>
        <li>
          <strong>Ford-Fulkerson:</strong> Find max-flow by repeatedly augmenting along
          paths in the residual network.
        </li>
        <li>
          <strong>Integrality:</strong> With integer capacities, there's always an
          integer maximum flow.
        </li>
        <li>
          <strong>Unifies Theory:</strong> Menger's Theorem, König-Egerváry, and
          Hall's Theorem all follow from Max-Flow Min-Cut.
        </li>
        <li>
          <strong>Efficient Algorithms:</strong> Edmonds-Karp{' '}
          <InlineMath math="O(nm^2)" />, Dinic <InlineMath math="O(n^2 m)" />, with
          better bounds for special cases.
        </li>
        <li>
          <strong>Wide Applications:</strong> Transportation, communication networks,
          bipartite matching, scheduling, and more.
        </li>
      </ul>
    </LessonLayout>
  );
}
