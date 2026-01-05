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

      <Theorem
        title="Edge Coloring via Line Graphs"
        proof={
          <>
            <p>
              This follows directly from the definitions of edge coloring and line graph.
            </p>
            <p className="mt-2">
              <strong>Edge coloring of <InlineMath math="G" />:</strong> Assign colors to edges of{' '}
              <InlineMath math="G" /> such that edges sharing an endpoint have different colors.
            </p>
            <p className="mt-2">
              <strong>Line graph <InlineMath math="L(G)" />:</strong> Vertices of{' '}
              <InlineMath math="L(G)" /> are edges of <InlineMath math="G" />. Two vertices of{' '}
              <InlineMath math="L(G)" /> are adjacent iff the corresponding edges of{' '}
              <InlineMath math="G" /> share an endpoint.
            </p>
            <p className="mt-2">
              <strong>Equivalence:</strong> A proper edge coloring of <InlineMath math="G" /> assigns
              different colors to adjacent edges = assigns different colors to adjacent vertices of{' '}
              <InlineMath math="L(G)" /> = proper vertex coloring of <InlineMath math="L(G)" />.
            </p>
            <p className="mt-2">
              The minimum number of colors is the same: <InlineMath math="\chi'(G) = \chi(L(G))" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\chi'(G) = \chi(L(G))" />
        </p>
        <p className="mt-2 text-dark-300">
          Edge coloring of <InlineMath math="G" /> = vertex coloring of{' '}
          <InlineMath math="L(G)" />.
        </p>
      </Theorem>

      <Theorem
        title="Line Graph Clique Number"
        proof={
          <>
            <p>
              A clique in <InlineMath math="L(G)" /> corresponds to a set of edges of{' '}
              <InlineMath math="G" /> that are pairwise adjacent (share endpoints).
            </p>
            <p className="mt-2">
              <strong>Type 1 cliques:</strong> All edges incident to a single vertex{' '}
              <InlineMath math="v" />. These form a clique of size <InlineMath math="d(v)" /> in{' '}
              <InlineMath math="L(G)" />. Maximum size: <InlineMath math="\Delta(G)" />.
            </p>
            <p className="mt-2">
              <strong>Type 2 cliques:</strong> Edges forming a "triangle" or more generally a clique
              in <InlineMath math="G" />. A triangle <InlineMath math="K_3" /> in <InlineMath math="G" />{' '}
              gives 3 pairwise adjacent edges, forming a clique of size 3 in <InlineMath math="L(G)" />.
              This corresponds to <InlineMath math="\omega'(G)" />.
            </p>
            <p className="mt-2">
              Every maximal clique in <InlineMath math="L(G)" /> is either all edges at a vertex
              (Type 1) or edges of a clique in <InlineMath math="G" /> (Type 2).
            </p>
            <p className="mt-2">
              Therefore: <InlineMath math="\omega(L(G)) = \max(\Delta(G), \omega'(G))" />.
            </p>
            <p className="mt-2">
              Note: For triangle-free graphs, <InlineMath math="\omega'(G) \leq 2" />, so{' '}
              <InlineMath math="\omega(L(G)) = \Delta(G)" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\omega(L(G)) = \max(\Delta(G), \omega'(G))" />
        </p>
        <p className="mt-2">
          where <InlineMath math="\omega'(G)" /> is the maximum number of edges pairwise
          sharing endpoints (triangle gives 3 mutually adjacent edges).
        </p>
      </Theorem>

      <h3>Characterizing Line Graphs</h3>

      <Theorem
        title="Beineke's Characterization (Theorem 7.1.16)"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> We show line graphs cannot contain the forbidden subgraphs.
            </p>
            <p className="mt-2">
              The key forbidden graph is <InlineMath math="K_{'{'}1,3{'}'}" /> (claw): three edges
              sharing a common endpoint would require one vertex with three non-adjacent neighbors in{' '}
              <InlineMath math="L(G)" />. But if edges <InlineMath math="e_1, e_2, e_3" /> all share
              endpoint <InlineMath math="v" />, then in the original graph <InlineMath math="G" />,
              the other endpoints are pairwise non-adjacent only if no two share a vertex—but this
              contradicts having a fourth edge adjacent to all three.
            </p>
            <p className="mt-2">
              Similar arguments exclude the other eight graphs in Beineke's list (including{' '}
              <InlineMath math="K_5 - e" />, <InlineMath math="K_{'{'}2,3{'}'}" /> subdivisions, etc.).
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> If <InlineMath math="H" /> contains no forbidden subgraph,
              construct <InlineMath math="G" /> with <InlineMath math="L(G) = H" />:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>The claw-free property ensures each maximal clique has a specific structure</li>
              <li>
                Partition edges of <InlineMath math="H" /> into cliques (each from a vertex of{' '}
                <InlineMath math="G" />)
              </li>
              <li>The other forbidden graphs ensure this partition gives a valid graph</li>
            </ol>
          </>
        }
      >
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

      <Theorem
        title="Shannon's Theorem (Theorem 7.1.10)"
        proof={
          <>
            <p>
              We prove by induction on <InlineMath math="m" /> that{' '}
              <InlineMath math="\chi'(G) \leq \lfloor 3\Delta/2 \rfloor" />.
            </p>
            <p className="mt-2">
              <strong>Base:</strong> If <InlineMath math="m = 0" />, trivially true.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Remove an edge <InlineMath math="e = uv" />. By induction,{' '}
              <InlineMath math="G - e" /> has a <InlineMath math="\lfloor 3\Delta/2 \rfloor" />-edge-coloring.
            </p>
            <p className="mt-2">
              We need to color <InlineMath math="e" />. The colors "missing" at <InlineMath math="u" />{' '}
              (not used by edges at <InlineMath math="u" />) number at least{' '}
              <InlineMath math="\lfloor 3\Delta/2 \rfloor - (d(u) - 1)" />. Similarly for <InlineMath math="v" />.
            </p>
            <p className="mt-2">
              <strong>Key counting:</strong> Since <InlineMath math="d(u), d(v) \leq \Delta" />, the
              number of missing colors at <InlineMath math="u" /> is at least{' '}
              <InlineMath math="\lfloor 3\Delta/2 \rfloor - \Delta + 1 = \lceil \Delta/2 \rceil + 1" />.
            </p>
            <p className="mt-2">
              If the missing colors at <InlineMath math="u" /> and <InlineMath math="v" /> have no
              color in common, we can still find an available color by a careful "fan" argument
              similar to Vizing's proof, using the fact that{' '}
              <InlineMath math="\lfloor 3\Delta/2 \rfloor" /> colors provide enough slack.
            </p>
          </>
        }
      >
        <p>
          For any multigraph <InlineMath math="G" />:
        </p>
        <MathBlock math="\chi'(G) \leq \left\lfloor \frac{3\Delta(G)}{2} \right\rfloor" />
      </Theorem>

      <Theorem
        title="Vizing's Theorem for Multigraphs"
        proof={
          <>
            <p>
              The proof extends Vizing's fan argument for simple graphs.
            </p>
            <p className="mt-2">
              <strong>Setup:</strong> Suppose we have a <InlineMath math="(\Delta + \mu)" />-edge-coloring
              of <InlineMath math="G - e" /> where <InlineMath math="e = uv" />. We show{' '}
              <InlineMath math="e" /> can be colored.
            </p>
            <p className="mt-2">
              At vertex <InlineMath math="u" />, the number of missing colors (not used by edges at{' '}
              <InlineMath math="u" />) is at least <InlineMath math="(\Delta + \mu) - d(u) + 1 \geq \mu + 1" />.
            </p>
            <p className="mt-2">
              At vertex <InlineMath math="v" />, similarly at least <InlineMath math="\mu + 1" /> colors
              are missing.
            </p>
            <p className="mt-2">
              <strong>Key insight:</strong> Between <InlineMath math="u" /> and <InlineMath math="v" />,
              there are at most <InlineMath math="\mu - 1" /> edges in <InlineMath math="G - e" />{' '}
              (since <InlineMath math="e" /> is one of the <InlineMath math="\mu" /> parallel edges).
              These use at most <InlineMath math="\mu - 1" /> colors at both ends.
            </p>
            <p className="mt-2">
              With <InlineMath math="\geq \mu + 1" /> colors missing at each of <InlineMath math="u, v" />,
              and at most <InlineMath math="\mu - 1" /> colors "blocked" by parallel edges, by pigeonhole
              some color is available for <InlineMath math="e" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\chi'(G) \leq \Delta(G) + \mu(G)" />
        </p>
      </Theorem>

      <h2>Edge Coloring Algorithms</h2>

      <Theorem
        title="Misra-Gries Algorithm"
        proof={
          <>
            <p>
              The algorithm colors edges one at a time, maintaining a valid{' '}
              <InlineMath math="(\Delta + 1)" />-edge-coloring.
            </p>
            <p className="mt-2">
              <strong>Algorithm for adding edge <InlineMath math="e = uv" />:</strong>
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                If some color <InlineMath math="c" /> is missing at both <InlineMath math="u" />{' '}
                and <InlineMath math="v" />, color <InlineMath math="e" /> with <InlineMath math="c" />.
              </li>
              <li>
                Otherwise, build a "Vizing fan": a sequence of edges at <InlineMath math="u" />{' '}
                using colors missing at their other endpoints.
              </li>
              <li>
                Rotate colors along the fan, then either find a free color for <InlineMath math="e" />,
                or find two edges using colors missing at <InlineMath math="u" /> and <InlineMath math="v" />.
              </li>
              <li>
                In the latter case, swap colors along an alternating path (Kempe chain) to free a color.
              </li>
            </ol>
            <p className="mt-2">
              <strong>Time analysis:</strong> Building a fan takes <InlineMath math="O(\Delta)" /> time.
              Swapping along a Kempe chain takes <InlineMath math="O(n)" /> time. Thus each edge takes{' '}
              <InlineMath math="O(n)" /> time, giving <InlineMath math="O(mn)" /> total.
            </p>
          </>
        }
      >
        <p>
          A <InlineMath math="(\Delta + 1)" />-edge-coloring can be computed in{' '}
          <InlineMath math="O(mn)" /> time using Vizing fan rotations.
        </p>
      </Theorem>

      <Theorem
        title="Complexity of Optimal Edge Coloring"
        proof={
          <>
            <p>
              <strong>NP-completeness (Holyer, 1981):</strong>
            </p>
            <p className="mt-2">
              The reduction is from 3-SAT. Given a 3-SAT formula, construct a 3-regular graph where:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>
                The graph is Class 1 (<InlineMath math="\chi' = 3" />) iff the formula is satisfiable
              </li>
              <li>
                The graph is Class 2 (<InlineMath math="\chi' = 4" />) iff the formula is unsatisfiable
              </li>
            </ul>
            <p className="mt-2">
              The construction uses gadgets that encode variable assignments (true/false corresponds to
              two different 3-edge-colorings of a subgraph) and clause satisfaction.
            </p>
            <p className="mt-2">
              <strong>Polynomial time for bipartite graphs:</strong>
            </p>
            <p className="mt-2">
              By König's theorem, bipartite graphs are Class 1. A{' '}
              <InlineMath math="\Delta" />-edge-coloring can be found by:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                Reducing to bipartite matching: each color class is a matching
              </li>
              <li>
                Using Hall's theorem and augmenting paths to find{' '}
                <InlineMath math="\Delta" /> disjoint matchings covering all edges
              </li>
            </ol>
            <p className="mt-2">
              This can be done in <InlineMath math="O(m\sqrt{'{'}n{'}'})" /> time using Hopcroft-Karp matching.
            </p>
          </>
        }
      >
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
