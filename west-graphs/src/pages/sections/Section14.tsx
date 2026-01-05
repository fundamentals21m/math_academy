import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <p>
        Graph coloring assigns labels ("colors") to graph elements subject to certain
        constraints. In vertex coloring, adjacent vertices must receive different colors.
        This models scheduling conflicts, register allocation in compilers, frequency
        assignment in wireless networks, and the famous map coloring problem. The central
        question: how many colors are needed?
      </p>

      <h2>Chromatic Number</h2>

      <Definition title="Proper Coloring and Chromatic Number">
        <p>
          A <strong>proper k-coloring</strong> of graph <InlineMath math="G" /> is a
          function <InlineMath math="c: V(G) \to \{1, 2, \ldots, k\}" /> such that{' '}
          <InlineMath math="c(u) \neq c(v)" /> whenever <InlineMath math="uv \in E(G)" />.
        </p>
        <p className="mt-2">
          A graph is <strong>
            <InlineMath math="k" />-colorable
          </strong>{' '}
          if it has a proper <InlineMath math="k" />-coloring.
        </p>
        <p className="mt-2">
          The <strong>chromatic number</strong> <InlineMath math="\chi(G)" /> is the
          minimum <InlineMath math="k" /> such that <InlineMath math="G" /> is{' '}
          <InlineMath math="k" />-colorable.
        </p>
      </Definition>

      <Example title="Chromatic Numbers of Basic Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\chi(K_n) = n" /> — all vertices are adjacent
          </li>
          <li>
            <InlineMath math="\chi(C_n) = 2" /> if <InlineMath math="n" /> is even,{' '}
            <InlineMath math="3" /> if odd
          </li>
          <li>
            <InlineMath math="\chi(K_{m,n}) = 2" /> — alternate colors between parts
          </li>
          <li>
            <InlineMath math="\chi(T) = 2" /> for any tree <InlineMath math="T" /> with
            at least one edge
          </li>
          <li>
            <InlineMath math="\chi(\text{Petersen}) = 3" />
          </li>
        </ul>
      </Example>

      <Theorem title="Bipartite Characterization (Theorem 5.1.2)">
        <p>
          A graph <InlineMath math="G" /> is bipartite if and only if{' '}
          <InlineMath math="\chi(G) \leq 2" />.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath math="G" /> is bipartite iff{' '}
          <InlineMath math="G" /> has no odd cycle.
        </p>
      </Theorem>

      <h2>Greedy Coloring</h2>

      <Definition title="Greedy Coloring Algorithm">
        <p>
          Given a vertex ordering <InlineMath math="v_1, v_2, \ldots, v_n" />:
        </p>
        <ol className="mt-2 list-decimal list-inside">
          <li>
            Color <InlineMath math="v_1" /> with color 1.
          </li>
          <li>
            For <InlineMath math="i = 2, \ldots, n" />: assign{' '}
            <InlineMath math="v_i" /> the smallest color not used by any neighbor of{' '}
            <InlineMath math="v_i" /> among{' '}
            <InlineMath math="\{v_1, \ldots, v_{i-1}\}" />.
          </li>
        </ol>
      </Definition>

      <Theorem title="Theorem 5.1.7 (Greedy Bound)">
        <p>
          For any vertex ordering, greedy coloring uses at most{' '}
          <InlineMath math="\Delta(G) + 1" /> colors. Thus:
        </p>
        <MathBlock math="\chi(G) \leq \Delta(G) + 1" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              When coloring <InlineMath math="v_i" />, it has at most{' '}
              <InlineMath math="\Delta(G)" /> neighbors. These neighbors use at most{' '}
              <InlineMath math="\Delta(G)" /> colors, so color{' '}
              <InlineMath math="\Delta(G) + 1" /> is always available.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Optimal vs. Poor Orderings">
        <p>
          Consider <InlineMath math="K_3" /> with vertices <InlineMath math="a, b, c" />.
          Any ordering uses 3 colors (optimal).
        </p>
        <p className="mt-2">
          Consider <InlineMath math="K_{3,3}" /> with parts{' '}
          <InlineMath math="\{a, b, c\}" /> and <InlineMath math="\{x, y, z\}" />.
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            Ordering <InlineMath math="a, b, c, x, y, z" />: uses 2 colors (optimal)
          </li>
          <li>
            Ordering <InlineMath math="a, x, b, y, c, z" />: uses 3 colors (suboptimal)
          </li>
        </ul>
      </Example>

      <Definition title="Degeneracy">
        <p>
          A graph <InlineMath math="G" /> is <strong>
            <InlineMath math="k" />-degenerate
          </strong>{' '}
          if every subgraph has a vertex of degree at most <InlineMath math="k" />.
        </p>
        <p className="mt-2">
          The <strong>degeneracy</strong> of <InlineMath math="G" /> is the minimum{' '}
          <InlineMath math="k" /> for which <InlineMath math="G" /> is{' '}
          <InlineMath math="k" />-degenerate.
        </p>
      </Definition>

      <Theorem title="Theorem 5.1.9 (Degeneracy Bound)">
        <p>
          If <InlineMath math="G" /> is <InlineMath math="k" />-degenerate, then{' '}
          <InlineMath math="\chi(G) \leq k + 1" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Order vertices by repeatedly removing a vertex of minimum degree. In this
              ordering, each vertex has at most <InlineMath math="k" /> earlier neighbors.
              Greedy coloring uses at most <InlineMath math="k + 1" /> colors.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Cliques and Chromatic Number</h2>

      <Definition title="Clique Number">
        <p>
          The <strong>clique number</strong> <InlineMath math="\omega(G)" /> is the size
          of the largest clique (complete subgraph) in <InlineMath math="G" />.
        </p>
      </Definition>

      <Theorem title="Clique Lower Bound">
        <p>
          For any graph <InlineMath math="G" />:
        </p>
        <MathBlock math="\chi(G) \geq \omega(G)" />
        <p className="mt-2 text-dark-300">
          Vertices in a clique must all have different colors.
        </p>
      </Theorem>

      <Example title="Gap Between χ and ω">
        <p>
          The <strong>Mycielskian</strong> construction produces triangle-free graphs
          (<InlineMath math="\omega = 2" />) with arbitrarily large chromatic number.
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="M_2 = K_2" />: <InlineMath math="\chi = 2" />,{' '}
            <InlineMath math="\omega = 2" />
          </li>
          <li>
            <InlineMath math="M_3 = C_5" />: <InlineMath math="\chi = 3" />,{' '}
            <InlineMath math="\omega = 2" />
          </li>
          <li>
            <InlineMath math="M_4" /> (Grötzsch graph): <InlineMath math="\chi = 4" />,{' '}
            <InlineMath math="\omega = 2" />
          </li>
        </ul>
        <p className="mt-2">
          So the chromatic number can be arbitrarily larger than the clique number.
        </p>
      </Example>

      <h2>Brooks' Theorem</h2>

      <p>
        The greedy bound <InlineMath math="\chi(G) \leq \Delta(G) + 1" /> is achieved by
        complete graphs and odd cycles. Brooks' Theorem says these are the only cases.
      </p>

      <Theorem title="Brooks' Theorem (Theorem 5.1.22)">
        <p>
          If <InlineMath math="G" /> is a connected graph that is neither a complete
          graph nor an odd cycle, then:
        </p>
        <MathBlock math="\chi(G) \leq \Delta(G)" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Case 1:</strong> <InlineMath math="G" /> is not regular. There
              exists a vertex <InlineMath math="v" /> with{' '}
              <InlineMath math="d(v) < \Delta(G)" />. Order vertices starting from the
              most distant from <InlineMath math="v" /> and ending at{' '}
              <InlineMath math="v" />. Greedy coloring uses at most{' '}
              <InlineMath math="\Delta(G)" /> colors.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> <InlineMath math="G" /> is{' '}
              <InlineMath math="\Delta" />-regular. If{' '}
              <InlineMath math="\kappa(G) < \Delta" />, use a special ordering. If{' '}
              <InlineMath math="\kappa(G) = \Delta" />, find non-adjacent vertices{' '}
              <InlineMath math="u, v" /> with a common neighbor{' '}
              <InlineMath math="w" />. Color <InlineMath math="u, v" /> the same color
              first, then extend greedily.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Brooks' Theorem in Action">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="K_5" />: <InlineMath math="\Delta = 4" />,{' '}
            <InlineMath math="\chi = 5 = \Delta + 1" /> (complete graph exception)
          </li>
          <li>
            <InlineMath math="C_7" />: <InlineMath math="\Delta = 2" />,{' '}
            <InlineMath math="\chi = 3 = \Delta + 1" /> (odd cycle exception)
          </li>
          <li>
            Petersen graph: <InlineMath math="\Delta = 3" />,{' '}
            <InlineMath math="\chi = 3 = \Delta" /> (Brooks applies)
          </li>
          <li>
            <InlineMath math="K_{4,4}" />: <InlineMath math="\Delta = 4" />,{' '}
            <InlineMath math="\chi = 2 \ll \Delta" /> (bipartite)
          </li>
        </ul>
      </Example>

      <h2>Lower Bounds</h2>

      <Theorem title="Independence Number Bound">
        <p>
          If <InlineMath math="G" /> has <InlineMath math="n" /> vertices and
          independence number <InlineMath math="\alpha(G)" />, then:
        </p>
        <MathBlock math="\chi(G) \geq \frac{n}{\alpha(G)}" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Each color class is an independent set, so has at most{' '}
              <InlineMath math="\alpha(G)" /> vertices. To cover all{' '}
              <InlineMath math="n" /> vertices, we need at least{' '}
              <InlineMath math="n/\alpha(G)" /> colors.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Szekeres-Wilf Theorem">
        <p>
          <InlineMath math="\chi(G) \leq 1 + \max_{H \subseteq G} \delta(H)" />, where
          the maximum is over all induced subgraphs <InlineMath math="H" /> of{' '}
          <InlineMath math="G" />.
        </p>
        <p className="mt-2 text-dark-300">
          This equals 1 + degeneracy of <InlineMath math="G" />.
        </p>
      </Theorem>

      <h2>Interval Graphs</h2>

      <Definition title="Interval Graph">
        <p>
          An <strong>interval graph</strong> is the intersection graph of a set of
          intervals on the real line. Vertices correspond to intervals; two vertices are
          adjacent iff their intervals intersect.
        </p>
      </Definition>

      <Theorem title="Theorem 5.1.21 (Interval Graph Coloring)">
        <p>
          For interval graphs: <InlineMath math="\chi(G) = \omega(G)" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Process intervals left-to-right by left endpoint. When interval{' '}
              <InlineMath math="I" /> starts, assign it the smallest color not used by
              currently active (overlapping) intervals.
            </p>
            <p className="mt-2">
              If we need color <InlineMath math="k + 1" />, then <InlineMath math="k" />{' '}
              intervals are active and overlap with <InlineMath math="I" />. Together
              with <InlineMath math="I" />, these form a clique of size{' '}
              <InlineMath math="k + 1" />. So{' '}
              <InlineMath math="\chi(G) \leq \omega(G)" />, and we already know{' '}
              <InlineMath math="\chi(G) \geq \omega(G)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Scheduling with Interval Graphs">
        <p>
          A conference has talks with start and end times. How many rooms are needed?
          Model as an interval graph: talks are intervals, adjacent if they overlap.
        </p>
        <p className="mt-2">
          The chromatic number = rooms needed = maximum number of simultaneous talks.
        </p>
      </Example>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Chromatic Number:</strong> Minimum colors for proper vertex coloring.
        </li>
        <li>
          <strong>Bounds:</strong>{' '}
          <InlineMath math="\omega(G) \leq \chi(G) \leq \Delta(G) + 1" />.
        </li>
        <li>
          <strong>Brooks' Theorem:</strong>{' '}
          <InlineMath math="\chi(G) \leq \Delta(G)" /> unless <InlineMath math="G" /> is
          complete or an odd cycle.
        </li>
        <li>
          <strong>Greedy Coloring:</strong> Simple algorithm, quality depends on vertex
          ordering.
        </li>
        <li>
          <strong>Degeneracy:</strong> Measure of "sparseness"; bounds chromatic number.
        </li>
        <li>
          <strong>Gap:</strong> <InlineMath math="\chi" /> can be arbitrarily larger
          than <InlineMath math="\omega" /> (Mycielski construction).
        </li>
        <li>
          <strong>Interval Graphs:</strong> <InlineMath math="\chi = \omega" /> always;
          arise in scheduling.
        </li>
      </ul>
    </LessonLayout>
  );
}
