import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <p>
        How many ways can we properly color a graph with <InlineMath math="k" /> colors?
        The answer is given by the chromatic polynomial, a powerful tool that encodes
        coloring information. We also study special graph classes—chordal graphs and
        perfect graphs—where chromatic number equals clique number, providing a beautiful
        connection between local structure and global coloring properties.
      </p>

      <h2>Chromatic Polynomials</h2>

      <Definition title="Chromatic Polynomial">
        <p>
          The <strong>chromatic polynomial</strong>{' '}
          <InlineMath math="P(G, k)" /> (or <InlineMath math="\chi(G, k)" />) counts
          the number of proper <InlineMath math="k" />-colorings of graph{' '}
          <InlineMath math="G" />.
        </p>
        <p className="mt-2">
          Remarkably, <InlineMath math="P(G, k)" /> is always a polynomial in{' '}
          <InlineMath math="k" />.
        </p>
      </Definition>

      <Example title="Basic Chromatic Polynomials">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Empty graph <InlineMath math="E_n" />:</strong>{' '}
            <InlineMath math="P(E_n, k) = k^n" /> (each vertex can be any color)
          </li>
          <li>
            <strong>Complete graph <InlineMath math="K_n" />:</strong>{' '}
            <InlineMath math="P(K_n, k) = k(k-1)(k-2)\cdots(k-n+1) = k^{\underline{n}}" />
          </li>
          <li>
            <strong>Tree <InlineMath math="T_n" />:</strong>{' '}
            <InlineMath math="P(T_n, k) = k(k-1)^{n-1}" /> (root has{' '}
            <InlineMath math="k" /> choices, each other vertex has{' '}
            <InlineMath math="k - 1" />)
          </li>
          <li>
            <strong>Cycle <InlineMath math="C_n" />:</strong>{' '}
            <InlineMath math="P(C_n, k) = (k-1)^n + (-1)^n(k-1)" />
          </li>
        </ul>
      </Example>

      <Theorem title="Deletion-Contraction (Theorem 5.3.1)">
        <p>
          For any edge <InlineMath math="e = uv" /> of graph <InlineMath math="G" />:
        </p>
        <MathBlock math="P(G, k) = P(G - e, k) - P(G / e, k)" />
        <p className="mt-2">
          where <InlineMath math="G - e" /> is edge deletion and{' '}
          <InlineMath math="G / e" /> is edge contraction.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <InlineMath math="P(G - e, k)" /> counts colorings where{' '}
              <InlineMath math="u, v" /> may have the same or different colors.
            </p>
            <p className="mt-2">
              <InlineMath math="P(G / e, k)" /> counts colorings of{' '}
              <InlineMath math="G - e" /> where <InlineMath math="u, v" /> have the same
              color (they become one vertex after contraction).
            </p>
            <p className="mt-2">
              Subtracting gives colorings of <InlineMath math="G - e" /> where{' '}
              <InlineMath math="u, v" /> have different colors = proper colorings of{' '}
              <InlineMath math="G" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Computing P(C₄, k)">
        <p>Label vertices 1, 2, 3, 4 in order around the cycle.</p>
        <p className="mt-2">
          <strong>Method 1:</strong> Apply deletion-contraction on edge 1-4:
        </p>
        <MathBlock math="P(C_4, k) = P(P_4, k) - P(C_3, k)" />
        <p>
          <InlineMath math="= k(k-1)^3 - k(k-1)(k-2)" />
        </p>
        <p>
          <InlineMath math="= k(k-1)[(k-1)^2 - (k-2)]" />
        </p>
        <p>
          <InlineMath math="= k(k-1)(k^2 - 3k + 3)" />
        </p>
        <p className="mt-2">
          For <InlineMath math="k = 3" />: <InlineMath math="P(C_4, 3) = 18" />{' '}
          proper 3-colorings.
        </p>
      </Example>

      <Theorem
        title="Properties of Chromatic Polynomials (Theorem 5.3.5)"
        proof={
          <>
            <p><strong>(1) Monic polynomial of degree <InlineMath math="n" />:</strong></p>
            <p className="mt-2">
              By induction using deletion-contraction. For <InlineMath math="E_n" /> (no edges),{' '}
              <InlineMath math="P(E_n, k) = k^n" />. Each deletion-contraction step preserves that
              the leading term is <InlineMath math="k^n" /> (deletion keeps degree, contraction reduces it).
            </p>
            <p className="mt-4"><strong>(2) Coefficient of <InlineMath math="k^{'{'}n-1{'}'}" /> is{' '}
            <InlineMath math="-m" />:</strong></p>
            <p className="mt-2">
              Again by induction. For <InlineMath math="E_n" />, the coefficient of{' '}
              <InlineMath math="k^{'{'}n-1{'}'}" /> is 0 = <InlineMath math="-0" />. For deletion-contraction
              on edge <InlineMath math="e" />: <InlineMath math="P(G) = P(G-e) - P(G/e)" />.
              The <InlineMath math="k^{'{'}n-1{'}'}" /> coefficient in <InlineMath math="P(G-e)" /> is{' '}
              <InlineMath math="-(m-1)" />; in <InlineMath math="P(G/e)" /> the leading term is{' '}
              <InlineMath math="k^{'{'}n-1{'}'}" />. Thus coefficient is <InlineMath math="-(m-1) - 1 = -m" />.
            </p>
            <p className="mt-4"><strong>(3) Alternating signs:</strong></p>
            <p className="mt-2">
              Follows from the deletion-contraction formula and induction. Both{' '}
              <InlineMath math="P(G-e)" /> and <InlineMath math="P(G/e)" /> have alternating signs by
              induction, and subtracting preserves this pattern.
            </p>
            <p className="mt-4"><strong>(4) Constant term is 0:</strong></p>
            <p className="mt-2">
              <InlineMath math="P(G, 0) = 0" /> because there is no way to properly color any graph
              with 0 colors (when <InlineMath math="n \geq 1" />).
            </p>
            <p className="mt-4"><strong>(5) <InlineMath math="\chi(G)" /> is smallest{' '}
            <InlineMath math="k" /> with <InlineMath math="P(G,k) > 0" />:</strong></p>
            <p className="mt-2">
              By definition, <InlineMath math="\chi(G)" /> is the smallest <InlineMath math="k" /> admitting
              a proper <InlineMath math="k" />-coloring. Thus <InlineMath math="P(G, k) = 0" /> for{' '}
              <InlineMath math="k < \chi(G)" /> and <InlineMath math="P(G, \chi(G)) \geq 1 > 0" />.
            </p>
          </>
        }
      >
        <p>
          For a connected graph <InlineMath math="G" /> with <InlineMath math="n" />{' '}
          vertices and <InlineMath math="m" /> edges:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            <InlineMath math="P(G, k)" /> is a monic polynomial of degree{' '}
            <InlineMath math="n" />.
          </li>
          <li>
            The coefficient of <InlineMath math="k^{n-1}" /> is{' '}
            <InlineMath math="-m" />.
          </li>
          <li>
            All coefficients are integers with alternating signs.
          </li>
          <li>
            The constant term is 0 (no proper 0-colorings).
          </li>
          <li>
            <InlineMath math="\chi(G)" /> is the smallest positive integer{' '}
            <InlineMath math="k" /> with <InlineMath math="P(G, k) > 0" />.
          </li>
        </ol>
      </Theorem>

      <h2>Chordal Graphs</h2>

      <Definition title="Chordal Graph">
        <p>
          A graph is <strong>chordal</strong> (or <strong>triangulated</strong>) if
          every cycle of length at least 4 has a <strong>chord</strong>: an edge joining
          two non-consecutive vertices on the cycle.
        </p>
      </Definition>

      <Example title="Chordal and Non-Chordal Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Chordal:</strong> Trees, complete graphs, interval graphs, split
            graphs
          </li>
          <li>
            <strong>Not chordal:</strong> <InlineMath math="C_n" /> for{' '}
            <InlineMath math="n \geq 4" />, grid graphs, Petersen graph
          </li>
        </ul>
        <p className="mt-2">
          The cycle <InlineMath math="C_4" /> is the smallest non-chordal graph.
        </p>
      </Example>

      <Definition title="Simplicial Vertex">
        <p>
          A vertex <InlineMath math="v" /> is <strong>simplicial</strong> if its
          neighborhood <InlineMath math="N(v)" /> induces a clique.
        </p>
      </Definition>

      <Definition title="Perfect Elimination Order">
        <p>
          A <strong>perfect elimination order</strong> (PEO) is an ordering{' '}
          <InlineMath math="v_1, v_2, \ldots, v_n" /> such that for each{' '}
          <InlineMath math="i" />, vertex <InlineMath math="v_i" /> is simplicial in the
          induced subgraph <InlineMath math="G[\{v_i, v_{i+1}, \ldots, v_n\}]" />.
        </p>
      </Definition>

      <Theorem title="Chordal Characterization (Theorem 5.3.15)">
        <p>
          A graph <InlineMath math="G" /> is chordal if and only if{' '}
          <InlineMath math="G" /> has a perfect elimination order.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>(⇒)</strong> Every chordal graph has a simplicial vertex. Remove
              it and repeat inductively.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> If there's a chordless cycle, follow it through the
              ordering to find a contradiction with the PEO property.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem
        title="Theorem 5.3.16 (Greedy Coloring of Chordal Graphs)"
        proof={
          <>
            <p>
              Let <InlineMath math="v_1, v_2, \ldots, v_n" /> be a PEO of <InlineMath math="G" />.
              We color in reverse order: <InlineMath math="v_n, v_{'{'}n-1{'}'}, \ldots, v_1" />.
            </p>
            <p className="mt-2">
              When we color <InlineMath math="v_i" />, its neighbors among{' '}
              <InlineMath math="\{'{'}v_{'{'}i+1{'}'}, \ldots, v_n{'}'}\}" /> have already been colored.
              By the PEO property, these neighbors form a clique (since <InlineMath math="v_i" /> is
              simplicial in <InlineMath math="G[\{'{'}v_i, \ldots, v_n{'}'}\}]" />).
            </p>
            <p className="mt-2">
              A clique of size <InlineMath math="d" /> uses exactly <InlineMath math="d" /> colors.
              So <InlineMath math="v_i" /> needs a color different from at most{' '}
              <InlineMath math="d_i" /> colors, where <InlineMath math="d_i" /> is the number of
              neighbors of <InlineMath math="v_i" /> in <InlineMath math="\{'{'}v_{'{'}i+1{'}'}, \ldots, v_n{'}'}\}" />.
            </p>
            <p className="mt-2">
              The greedy algorithm uses at most <InlineMath math="\max_i (d_i + 1)" /> colors.
              But <InlineMath math="d_i + 1" /> equals the clique size of{' '}
              <InlineMath math="v_i \cup N(v_i) \cap \{'{'}v_{'{'}i+1{'}'}, \ldots, v_n{'}'}\}" />.
              The maximum such clique size is <InlineMath math="\omega(G)" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="\chi(G) \geq \omega(G)" /> always, we have{' '}
              <InlineMath math="\chi(G) = \omega(G)" />.
            </p>
          </>
        }
      >
        <p>
          For a chordal graph <InlineMath math="G" />, greedy coloring using the reverse
          of any PEO is optimal:
        </p>
        <MathBlock math="\chi(G) = \omega(G)" />
      </Theorem>

      <Example title="Coloring a Chordal Graph">
        <p>
          Consider a graph with vertices{' '}
          <InlineMath math="\{a, b, c, d\}" /> and edges forming a triangle{' '}
          <InlineMath math="abc" /> plus edge <InlineMath math="cd" />.
        </p>
        <p className="mt-2">
          <strong>PEO:</strong> <InlineMath math="d, a, b, c" /> (each simplicial when
          removed).
        </p>
        <p className="mt-2">
          <strong>Reverse order:</strong> <InlineMath math="c, b, a, d" />.
        </p>
        <p className="mt-2">
          Greedy coloring: <InlineMath math="c \to 1" />,{' '}
          <InlineMath math="b \to 2" />, <InlineMath math="a \to 3" />,{' '}
          <InlineMath math="d \to 2" />. Uses 3 colors = clique number (the triangle).
        </p>
      </Example>

      <h2>Perfect Graphs</h2>

      <Definition title="Perfect Graph">
        <p>
          A graph <InlineMath math="G" /> is <strong>perfect</strong> if for every
          induced subgraph <InlineMath math="H" /> of <InlineMath math="G" />:
        </p>
        <MathBlock math="\chi(H) = \omega(H)" />
        <p className="mt-2">
          That is, the chromatic number equals the clique number for every induced
          subgraph.
        </p>
      </Definition>

      <Example title="Perfect and Imperfect Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Perfect:</strong> Bipartite graphs, chordal graphs, interval graphs,
            comparability graphs, co-comparability graphs
          </li>
          <li>
            <strong>Not perfect:</strong> <InlineMath math="C_5" /> (has{' '}
            <InlineMath math="\omega = 2" /> but <InlineMath math="\chi = 3" />)
          </li>
          <li>
            <strong>Not perfect:</strong> <InlineMath math="C_7" /> (has{' '}
            <InlineMath math="\omega = 2" /> but <InlineMath math="\chi = 3" />)
          </li>
        </ul>
      </Example>

      <Theorem
        title="Perfect Graph Theorem (Lovász, 1972)"
        proof={
          <>
            <p>
              <strong>Key observation:</strong> Perfect graphs can be characterized using the
              <em> Lovász theta function</em> <InlineMath math="\vartheta(G)" />, which satisfies:
            </p>
            <MathBlock math="\omega(G) \leq \vartheta(\overline{G}) \leq \chi(G)" />
            <p className="mt-2">
              For perfect graphs, <InlineMath math="\omega(G) = \chi(G)" />, so{' '}
              <InlineMath math="\vartheta(\overline{G}) = \omega(G) = \chi(G)" />.
            </p>
            <p className="mt-2">
              <strong>Main argument:</strong> Lovász proved that for any graph <InlineMath math="G" />:
            </p>
            <MathBlock math="\vartheta(G) \cdot \vartheta(\overline{G}) = n" />
            <p className="mt-2">
              If <InlineMath math="G" /> is perfect, then for any induced subgraph{' '}
              <InlineMath math="H" />: <InlineMath math="\chi(H) = \omega(H)" />, which implies{' '}
              <InlineMath math="\vartheta(\overline{H}) = \omega(H)" />.
            </p>
            <p className="mt-2">
              Using the multiplicative property and Lovász's Sandwich Theorem, this forces{' '}
              <InlineMath math="\chi(\overline{H}) = \omega(\overline{H})" /> for all induced{' '}
              <InlineMath math="H" />, proving <InlineMath math="\overline{G}" /> is perfect.
            </p>
          </>
        }
      >
        <p>
          A graph <InlineMath math="G" /> is perfect if and only if its complement{' '}
          <InlineMath math="\overline{G}" /> is perfect.
        </p>
      </Theorem>

      <Theorem
        title="Strong Perfect Graph Theorem (Chudnovsky et al., 2006)"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> Odd holes <InlineMath math="C_{'{'}2k+1{'}'}" /> with{' '}
              <InlineMath math="k \geq 2" /> satisfy <InlineMath math="\omega = 2" /> but{' '}
              <InlineMath math="\chi = 3" />, so they are imperfect. Similarly, odd antiholes{' '}
              <InlineMath math="\overline{C_{'{'}2k+1{'}'}}"/> are imperfect. Any graph containing
              these as induced subgraphs is therefore not perfect.
            </p>
            <p className="mt-2">
              <strong>Sufficiency (outline of the 150+ page proof):</strong>
            </p>
            <p className="mt-2">
              The proof proceeds by showing that a minimal imperfect graph (a "Berge graph"
              with no odd holes or antiholes, but not perfect) cannot exist. The argument uses
              the structure theory of Berge graphs:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                A Berge graph is either a "basic" graph (bipartite, complement of bipartite,
                line graph of bipartite, complement thereof, or double split graph), or
              </li>
              <li>
                It admits one of several decompositions (2-join, M-join, balanced skew partition,
                or homogeneous pair).
              </li>
            </ol>
            <p className="mt-2">
              Basic graphs are easily shown to be perfect. For graphs admitting decompositions,
              induction on the pieces preserves perfection. The deep technical core proves that
              every Berge graph falls into one of these cases.
            </p>
          </>
        }
      >
        <p>
          A graph <InlineMath math="G" /> is perfect if and only if neither{' '}
          <InlineMath math="G" /> nor <InlineMath math="\overline{G}" /> contains an
          induced odd cycle of length at least 5.
        </p>
        <p className="mt-2 text-dark-300">
          The forbidden induced subgraphs are <InlineMath math="C_{2k+1}" /> and{' '}
          <InlineMath math="\overline{C_{2k+1}}" /> for <InlineMath math="k \geq 2" />.
          This was conjectured by Berge in 1961 and proved in 2002 (published 2006).
        </p>
      </Theorem>

      <Definition title="Odd Hole and Odd Antihole">
        <p>
          An <strong>odd hole</strong> is an induced cycle{' '}
          <InlineMath math="C_{2k+1}" /> for <InlineMath math="k \geq 2" />.
        </p>
        <p className="mt-2">
          An <strong>odd antihole</strong> is the complement of an odd hole:{' '}
          <InlineMath math="\overline{C_{2k+1}}" /> for <InlineMath math="k \geq 2" />.
        </p>
      </Definition>

      <Example title="Why C₅ and C̄₅ Are Imperfect">
        <p>
          <strong>
            <InlineMath math="C_5" />:
          </strong>{' '}
          <InlineMath math="\omega(C_5) = 2" /> (no triangle),{' '}
          <InlineMath math="\chi(C_5) = 3" /> (odd cycle).
        </p>
        <p className="mt-2">
          <strong>
            <InlineMath math="\overline{C_5}" />:
          </strong>{' '}
          This is also <InlineMath math="C_5" /> (self-complementary)!
        </p>
        <p className="mt-2">
          For <InlineMath math="C_7" />: <InlineMath math="\omega = 2" />,{' '}
          <InlineMath math="\chi = 3" />. For <InlineMath math="\overline{C_7}" />:{' '}
          <InlineMath math="\omega = 3" />, <InlineMath math="\chi = 4" />.
        </p>
      </Example>

      <h2>Applications</h2>

      <h3>Clique Cover Number</h3>

      <Definition title="Clique Cover">
        <p>
          A <strong>clique cover</strong> of graph <InlineMath math="G" /> is a
          partition of <InlineMath math="V(G)" /> into cliques. The{' '}
          <strong>clique cover number</strong> <InlineMath math="\theta(G)" /> is the
          minimum number of cliques needed.
        </p>
      </Definition>

      <Theorem
        title="Clique Cover and Chromatic Number"
        proof={
          <>
            <p>
              <strong><InlineMath math="\theta(G) = \chi(\overline{G})" />:</strong>
            </p>
            <p className="mt-2">
              A clique cover of <InlineMath math="G" /> partitions <InlineMath math="V(G)" /> into cliques.
              In <InlineMath math="\overline{G}" />, a clique of <InlineMath math="G" /> becomes an
              independent set. So a clique cover of <InlineMath math="G" /> corresponds to a proper
              coloring of <InlineMath math="\overline{G}" /> (each color class is independent in{' '}
              <InlineMath math="\overline{G}" />, hence a clique in <InlineMath math="G" />).
            </p>
            <p className="mt-2">
              <strong><InlineMath math="\omega(G) = \alpha(\overline{G})" />:</strong>
            </p>
            <p className="mt-2">
              A clique in <InlineMath math="G" /> (set of pairwise adjacent vertices) becomes an
              independent set in <InlineMath math="\overline{G}" /> (set of pairwise non-adjacent vertices).
              Thus maximum clique size in <InlineMath math="G" /> equals maximum independent set size in{' '}
              <InlineMath math="\overline{G}" />.
            </p>
            <p className="mt-2">
              <strong>For perfect <InlineMath math="G" />:</strong> By the Perfect Graph Theorem,{' '}
              <InlineMath math="\overline{G}" /> is also perfect. Thus{' '}
              <InlineMath math="\chi(\overline{G}) = \omega(\overline{G}) = \alpha(G)" />.
              Therefore <InlineMath math="\theta(G) = \chi(\overline{G}) = \alpha(G)" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\theta(G) = \chi(\overline{G})" /> and{' '}
          <InlineMath math="\omega(G) = \alpha(\overline{G})" />.
        </p>
        <p className="mt-2">
          For perfect graphs:{' '}
          <InlineMath math="\theta(G) = \alpha(G)" /> (since{' '}
          <InlineMath math="\chi(\overline{G}) = \omega(\overline{G}) = \alpha(G)" />).
        </p>
      </Theorem>

      <h3>Shannon Capacity</h3>

      <Definition title="Shannon Capacity">
        <p>
          The <strong>Shannon capacity</strong> of graph <InlineMath math="G" /> is:
        </p>
        <MathBlock math="\Theta(G) = \sup_k \sqrt[k]{\alpha(G^k)}" />
        <p className="mt-2">
          where <InlineMath math="G^k" /> is the <InlineMath math="k" />-th power under
          the strong graph product.
        </p>
        <p className="mt-2">
          This measures the zero-error capacity of a communication channel.
        </p>
      </Definition>

      <Theorem
        title="Shannon Capacity Bounds"
        proof={
          <>
            <p>
              <strong>Lower bound <InlineMath math="\alpha(G) \leq \Theta(G)" />:</strong>
            </p>
            <p className="mt-2">
              For <InlineMath math="k = 1" />, <InlineMath math="G^1 = G" />, so{' '}
              <InlineMath math="\Theta(G) \geq \alpha(G)^{'{'}1/1{'}'} = \alpha(G)" />.
            </p>
            <p className="mt-2">
              <strong>Upper bound <InlineMath math="\Theta(G) \leq \chi(\overline{G})" />:</strong>
            </p>
            <p className="mt-2">
              An independent set in <InlineMath math="G^k" /> is a set of vertices{' '}
              <InlineMath math="(v_1, \ldots, v_k)" /> pairwise "confusable". Any proper coloring
              of <InlineMath math="\overline{G}" /> with <InlineMath math="c" /> colors can be
              extended to <InlineMath math="\overline{G^k}" /> with <InlineMath math="c^k" /> colors
              (color tuples componentwise). Thus <InlineMath math="\alpha(G^k) \leq c^k" />, giving{' '}
              <InlineMath math="\Theta(G) \leq c = \chi(\overline{G})" />.
            </p>
            <p className="mt-2">
              <strong>Perfect graphs:</strong> For perfect <InlineMath math="G" />,{' '}
              <InlineMath math="\chi(\overline{G}) = \omega(\overline{G}) = \alpha(G)" />.
              Combined with the lower bound: <InlineMath math="\Theta(G) = \alpha(G)" />.
            </p>
            <p className="mt-2">
              <strong>For <InlineMath math="C_5" />:</strong> Lovász introduced the theta function{' '}
              <InlineMath math="\vartheta(G)" /> satisfying <InlineMath math="\alpha(G) \leq \vartheta(G) \leq \chi(\overline{G})" />{' '}
              and <InlineMath math="\Theta(G) \leq \vartheta(G)" />. Computing{' '}
              <InlineMath math="\vartheta(C_5) = \sqrt{'{'}5{'}'}" /> and showing{' '}
              <InlineMath math="\alpha(C_5^2) = 5" /> proves <InlineMath math="\Theta(C_5) = \sqrt{'{'}5{'}'}" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\alpha(G) \leq \Theta(G) \leq \chi(\overline{G})" />
        </p>
        <p className="mt-2">
          For perfect graphs: <InlineMath math="\Theta(G) = \alpha(G)" />.
        </p>
        <p className="mt-2">
          Lovász (1979) proved <InlineMath math="\Theta(C_5) = \sqrt{5}" /> using the
          "Lovász theta function."
        </p>
      </Theorem>

      <h2>Recognizing Perfect Graphs</h2>

      <Theorem
        title="Polynomial Recognition"
        proof={
          <>
            <p>
              By the Strong Perfect Graph Theorem, a graph is perfect iff it contains no odd hole
              (<InlineMath math="C_{'{'}2k+1{'}'}" />) and no odd antihole (<InlineMath math="\overline{C_{'{'}2k+1{'}'}}"/>) as induced subgraphs, for <InlineMath math="k \geq 2" />.
            </p>
            <p className="mt-2">
              <strong>Detecting odd holes:</strong> Chudnovsky et al. gave an{' '}
              <InlineMath math="O(n^9)" /> algorithm. The key insight is that odd holes have
              special "cleaning" structure. By identifying "near-cleaners" and using the
              three-in-a-tree approach, we can systematically search for shortest odd holes.
            </p>
            <p className="mt-2">
              <strong>Detecting odd antiholes:</strong> An odd antihole{' '}
              <InlineMath math="\overline{C_{'{'}2k+1{'}'}}"/> has specific neighborhood structure.
              The algorithm reduces antihole detection to checking certain path configurations
              in polynomial time.
            </p>
            <p className="mt-2">
              The overall complexity is polynomial (though initially{' '}
              <InlineMath math="O(n^9)" />, later improvements reduced this).
            </p>
          </>
        }
      >
        <p>
          Perfect graphs can be recognized in polynomial time (Chudnovsky et al., 2005).
        </p>
        <p className="mt-2">
          The algorithm checks for odd holes and odd antiholes, both of which can be
          detected in polynomial time.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Chromatic Polynomial:</strong>{' '}
          <InlineMath math="P(G, k)" /> counts proper <InlineMath math="k" />-colorings.
          Computed via deletion-contraction.
        </li>
        <li>
          <strong>Chordal Graphs:</strong> No induced cycles ≥4. Have perfect
          elimination orders. <InlineMath math="\chi = \omega" />.
        </li>
        <li>
          <strong>Perfect Graphs:</strong> <InlineMath math="\chi(H) = \omega(H)" />{' '}
          for all induced subgraphs <InlineMath math="H" />.
        </li>
        <li>
          <strong>Perfect Graph Theorem:</strong> <InlineMath math="G" /> perfect iff{' '}
          <InlineMath math="\overline{G}" /> perfect.
        </li>
        <li>
          <strong>Strong Perfect Graph Theorem:</strong> Perfect iff no induced{' '}
          <InlineMath math="C_{2k+1}" /> or <InlineMath math="\overline{C_{2k+1}}" />{' '}
          for <InlineMath math="k \geq 2" />.
        </li>
        <li>
          <strong>Examples:</strong> Bipartite, chordal, interval, comparability graphs
          are all perfect.
        </li>
      </ul>
    </LessonLayout>
  );
}
