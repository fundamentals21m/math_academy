import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <p>
        Extremal graph theory asks: what is the maximum or minimum value of a graph
        parameter subject to some constraint? Beyond Turán's theorem, many other extremal
        problems reveal deep structure. We explore bounds on circumference, list
        coloring, and the structure of trees, continuing the theme of finding optimal
        configurations.
      </p>

      <h2>Circumference</h2>

      <Definition title="Circumference">
        <p>
          The <strong>circumference</strong> <InlineMath math="c(G)" /> of a graph{' '}
          <InlineMath math="G" /> is the length of its longest cycle, or 0 if{' '}
          <InlineMath math="G" /> is acyclic.
        </p>
      </Definition>

      <Theorem
        title="Circumference and Minimum Degree"
        proof={
          <>
            <p>
              Let <InlineMath math="C" /> be a longest cycle in <InlineMath math="G" />.
              If <InlineMath math="|V(C)| = n" />, we're done. Otherwise, assume{' '}
              <InlineMath math="|V(C)| < n" />.
            </p>
            <p className="mt-2">
              <strong>Claim:</strong> <InlineMath math="|V(C)| \geq 2k" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="G" /> is 2-connected and <InlineMath math="C" />{' '}
              doesn't include all vertices, there exists a path <InlineMath math="P" />{' '}
              from a vertex <InlineMath math="v \notin V(C)" /> to <InlineMath math="C" />{' '}
              with only the endpoint on <InlineMath math="C" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="u" /> be the endpoint of <InlineMath math="P" /> on{' '}
              <InlineMath math="C" />. Consider the neighbors of <InlineMath math="v" />.
              If any neighbor <InlineMath math="w \in V(C)" /> is not{' '}
              <InlineMath math="u" />, we can form a longer cycle by going from{' '}
              <InlineMath math="v" /> to <InlineMath math="w" />, around{' '}
              <InlineMath math="C" /> to just before <InlineMath math="u" />, then via{' '}
              <InlineMath math="P" /> back to <InlineMath math="v" />.
            </p>
            <p className="mt-2">
              So all <InlineMath math="\geq k" /> neighbors of <InlineMath math="v" />{' '}
              must be "blocked" by the maximality of <InlineMath math="C" />. A careful
              analysis shows this requires <InlineMath math="|V(C)| \geq 2k" />.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> is 2-connected with <InlineMath math="n" /> vertices
          and <InlineMath math="\delta(G) \geq k" />, then{' '}
          <InlineMath math="c(G) \geq \min(2k, n)" />.
        </p>
      </Theorem>

      <Theorem
        title="Dirac's Theorem (Cycle Version)"
        proof={
          <>
            <p>
              This follows from the previous theorem: If <InlineMath math="\delta(G) \geq n/2" />,
              then <InlineMath math="k = n/2" /> and:
            </p>
            <MathBlock math="c(G) \geq \min(2k, n) = \min(n, n) = n" />
            <p className="mt-2">
              <strong>Alternative direct proof:</strong> Suppose <InlineMath math="C" />{' '}
              is a longest cycle with <InlineMath math="|V(C)| < n" />. Let{' '}
              <InlineMath math="v \notin V(C)" />.
            </p>
            <p className="mt-2">
              Since <InlineMath math="G" /> is connected,{' '}
              <InlineMath math="v" /> has a neighbor <InlineMath math="u" /> on a path
              to <InlineMath math="C" />. Consider neighbors of <InlineMath math="v" />{' '}
              on <InlineMath math="C" /> and their successors on <InlineMath math="C" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="v" /> has <InlineMath math="d" /> neighbors on{' '}
              <InlineMath math="C" />, the "successor" vertices form a set of size{' '}
              <InlineMath math="d" />. If any successor is also a neighbor of{' '}
              <InlineMath math="v" />, we can extend <InlineMath math="C" />. Since{' '}
              <InlineMath math="d \geq n/2" /> and there are <InlineMath math="< n" />{' '}
              vertices on <InlineMath math="C" />, pigeonhole forces such an intersection.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath math="G" /> is 2-connected with <InlineMath math="n" /> vertices
          and <InlineMath math="\delta(G) \geq n/2" />, then{' '}
          <InlineMath math="c(G) = n" /> (Hamiltonian).
        </p>
      </Theorem>

      <Example title="Sharp Examples">
        <p>
          <InlineMath math="K_{k,k+1}" /> has{' '}
          <InlineMath math="\delta = k" /> and <InlineMath math="c = 2k" /> (longest
          cycle alternates between the two parts).
        </p>
      </Example>

      <h2>Extremal Problems for Trees</h2>

      <Definition title="Wiener Index">
        <p>
          The <strong>Wiener index</strong> of a connected graph <InlineMath math="G" />{' '}
          is the sum of all pairwise distances:
        </p>
        <MathBlock math="W(G) = \sum_{\{u,v\} \subseteq V(G)} d(u, v)" />
      </Definition>

      <Theorem
        title="Wiener Index of Trees"
        proof={
          <>
            <p>
              <strong>Star <InlineMath math="K_{1,n-1}" /> achieves minimum:</strong>
            </p>
            <p className="mt-2">
              The center <InlineMath math="c" /> has distance 1 to all <InlineMath math="n-1" />{' '}
              leaves. Each pair of leaves has distance 2. Thus:
            </p>
            <MathBlock math="W(K_{1,n-1}) = (n-1) \cdot 1 + \binom{n-1}{2} \cdot 2 = (n-1) + (n-1)(n-2) = (n-1)^2" />
            <p className="mt-2">
              For minimality: among trees with <InlineMath math="n" /> vertices, the star
              minimizes eccentricities, hence minimizes total distance.
            </p>
            <p className="mt-2">
              <strong>Path <InlineMath math="P_n" /> achieves maximum:</strong>
            </p>
            <p className="mt-2">
              Label vertices <InlineMath math="1, 2, \ldots, n" /> along the path.
              Distance <InlineMath math="d(i, j) = |i - j|" />. The sum:
            </p>
            <MathBlock math="W(P_n) = \sum_{i < j} (j - i) = \sum_{k=1}^{n-1} k(n-k) = \binom{n+1}{3}" />
            <p className="mt-2">
              For maximality: the path maximizes average distance since vertices are
              "spread out" maximally; any tree with internal vertices has shortcuts.
            </p>
          </>
        }
      >
        <p>
          Among all trees on <InlineMath math="n" /> vertices:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Minimum:</strong> Star <InlineMath math="K_{1,n-1}" /> with{' '}
            <InlineMath math="W = (n-1)^2" />
          </li>
          <li>
            <strong>Maximum:</strong> Path <InlineMath math="P_n" /> with{' '}
            <InlineMath math="W = \binom{n+1}{3}" />
          </li>
        </ul>
      </Theorem>

      <h2>List Coloring</h2>

      <Definition title="List Chromatic Number">
        <p>
          The <strong>list chromatic number</strong> (or <strong>choosability</strong>){' '}
          <InlineMath math="\text{ch}(G)" /> is the minimum <InlineMath math="k" /> such
          that <InlineMath math="G" /> is <InlineMath math="L" />-colorable whenever
          every vertex has a list of at least <InlineMath math="k" /> colors.
        </p>
      </Definition>

      <Theorem
        title="Choosability vs Chromatic Number"
        proof={
          <>
            <p>
              <strong><InlineMath math="\chi(G) \leq \text{ch}(G)" />:</strong> If{' '}
              <InlineMath math="G" /> is <InlineMath math="L" />-colorable for all{' '}
              <InlineMath math="k" />-lists <InlineMath math="L" />, then choosing{' '}
              <InlineMath math="L(v) = \{'{'}1, \ldots, k{'}'}" /> for all <InlineMath math="v" />{' '}
              gives a proper <InlineMath math="k" />-coloring.
            </p>
            <p className="mt-2">
              <strong>Gap can be large (<InlineMath math="K_{n,n}" /> example):</strong>
            </p>
            <p className="mt-2">
              <InlineMath math="\chi(K_{n,n}) = 2" /> since bipartite. For choosability:
            </p>
            <p className="mt-2">
              <strong>Lower bound construction:</strong> Let <InlineMath math="k = \lfloor \log_2 n \rfloor" />.
              Take <InlineMath math="\binom{2k}{k} \leq n" /> colors and assign to each
              vertex in one part a distinct <InlineMath math="k" />-subset, and to each
              vertex in the other part the complementary <InlineMath math="k" />-subset.
            </p>
            <p className="mt-2">
              Any proper coloring must assign each edge endpoints different colors, but
              each <InlineMath math="k" />-subset and its complement share no elements,
              so there's no valid <InlineMath math="L" />-coloring.
            </p>
            <p className="mt-2">
              Thus <InlineMath math="\text{ch}(K_{n,n}) \geq k + 1 \approx \log_2 n" />,
              while <InlineMath math="\chi(K_{n,n}) = 2" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="\chi(G) \leq \text{ch}(G)" /> always, but the gap can be
          arbitrarily large.
        </p>
        <p className="mt-2">
          <InlineMath math="K_{n,n}" /> has <InlineMath math="\chi = 2" /> but{' '}
          <InlineMath math="\text{ch}(K_{n,n}) = (1 + o(1)) \log_2 n" />.
        </p>
      </Theorem>

      <Theorem
        title="Edge List Coloring"
        proof={
          <>
            <p>
              <strong><InlineMath math="\chi'(G) \leq \text{ch}'(G)" />:</strong> Same
              argument as for vertex coloring - use identical lists.
            </p>
            <p className="mt-2">
              <strong>Galvin's Theorem for bipartite graphs:</strong>
            </p>
            <p className="mt-2">
              <em>(Outline)</em> Galvin proved that for bipartite <InlineMath math="G" />,{' '}
              <InlineMath math="\text{ch}'(G) = \chi'(G) = \Delta(G)" />.
            </p>
            <p className="mt-2">
              The proof uses a clever "kernel" argument. Orient the bipartite graph{' '}
              <InlineMath math="G" /> from one part to the other. For each vertex{' '}
              <InlineMath math="v" />, the edges at <InlineMath math="v" /> can be totally
              ordered by some criterion.
            </p>
            <p className="mt-2">
              Galvin showed that choosing colors greedily in a specific order (based on
              "kernels" in an auxiliary graph) always succeeds when lists have size{' '}
              <InlineMath math="\Delta(G)" />.
            </p>
            <p className="mt-2">
              The List Coloring Conjecture asserts this holds for all graphs, not just
              bipartite ones.
            </p>
          </>
        }
      >
        <p>
          The <strong>list chromatic index</strong> <InlineMath math="\text{ch}'(G)" />{' '}
          satisfies:
        </p>
        <MathBlock math="\chi'(G) \leq \text{ch}'(G)" />
        <p className="mt-2">
          <strong>List Coloring Conjecture:</strong>{' '}
          <InlineMath math="\text{ch}'(G) = \chi'(G)" /> for all graphs.
        </p>
        <p className="mt-2 text-dark-300">
          Proved for bipartite graphs (Galvin, 1995).
        </p>
      </Theorem>

      <h2>Branchings and Arborescences</h2>

      <Definition title="Branching">
        <p>
          A <strong>branching</strong> in a digraph is a set of arcs forming a forest
          where each vertex has in-degree at most 1.
        </p>
        <p className="mt-2">
          An <strong>arborescence</strong> (or <strong>rooted tree</strong>) is a
          branching where exactly one vertex (the root) has in-degree 0 and all other
          vertices have in-degree 1.
        </p>
      </Definition>

      <Theorem
        title="Edmonds' Branching Theorem"
        proof={
          <>
            <p>
              <strong>Necessity:</strong> If <InlineMath math="k" /> edge-disjoint spanning
              arborescences rooted at <InlineMath math="r" /> exist, then for any{' '}
              <InlineMath math="S \subseteq V - \{'{'}r{'}'}" />, each arborescence must
              have at least one arc entering <InlineMath math="S" /> (since{' '}
              <InlineMath math="r \notin S" /> and the arborescence spans{' '}
              <InlineMath math="S" />). Since the arborescences are edge-disjoint, at
              least <InlineMath math="k" /> arcs enter <InlineMath math="S" />.
            </p>
            <p className="mt-2">
              <strong>Sufficiency (outline):</strong> Edmonds gave a polynomial-time
              algorithm using "contractions."
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>
                Start with the empty branching. Greedily add arcs that don't create
                in-degree {">"} 1.
              </li>
              <li>
                If stuck before spanning, find a "bad" set <InlineMath math="S" /> with
                insufficient entering arcs (would contradict the condition).
              </li>
              <li>
                Contract strongly connected components and recurse; uncontract to
                recover arborescences.
              </li>
            </ol>
            <p className="mt-2">
              The cut condition ensures the algorithm never gets stuck, proving the
              <InlineMath math="k" /> arborescences exist.
            </p>
          </>
        }
      >
        <p>
          A digraph <InlineMath math="D" /> contains <InlineMath math="k" /> edge-disjoint
          spanning arborescences rooted at <InlineMath math="r" /> if and only if for
          every non-empty <InlineMath math="S \subseteq V - \{r\}" />, the number of arcs
          entering <InlineMath math="S" /> is at least <InlineMath math="k" />.
        </p>
      </Theorem>

      <h2>Encodings and Counting</h2>

      <Definition title="Prüfer Sequence">
        <p>
          A <strong>Prüfer sequence</strong> is a bijective encoding of labeled trees on{' '}
          <InlineMath math="[n]" /> as sequences in{' '}
          <InlineMath math="[n]^{n-2}" />.
        </p>
        <p className="mt-2">
          This gives another proof of Cayley's formula:{' '}
          <InlineMath math="n^{n-2}" /> labeled trees.
        </p>
      </Definition>

      <Theorem
        title="Counting Spanning Trees"
        proof={
          <>
            <p>
              <strong>Matrix Tree Theorem:</strong> Let <InlineMath math="L = D - A" />{' '}
              be the Laplacian, where <InlineMath math="D" /> is diagonal with degrees
              and <InlineMath math="A" /> is the adjacency matrix.
            </p>
            <p className="mt-2">
              <strong>Key insight:</strong> <InlineMath math="L" /> is singular (rows sum
              to 0), but all cofactors of <InlineMath math="L" /> are equal and count
              spanning trees.
            </p>
            <p className="mt-2">
              <strong>Proof outline:</strong> Use the Cauchy-Binet formula. The determinant
              of <InlineMath math="L[v]" /> (delete row/column <InlineMath math="v" />)
              can be written as a sum over subsets of edges:
            </p>
            <MathBlock math="\det(L[v]) = \sum_{T} \det(B_T[v])^2" />
            <p className="mt-2">
              where <InlineMath math="B" /> is the incidence matrix and the sum is over
              edge sets <InlineMath math="T" /> of size <InlineMath math="n - 1" />.
            </p>
            <p className="mt-2">
              The determinant <InlineMath math="\det(B_T[v])^2 = 1" /> if{' '}
              <InlineMath math="T" /> is a spanning tree and <InlineMath math="0" />{' '}
              otherwise (since the reduced incidence matrix of a tree is unimodular).
            </p>
          </>
        }
      >
        <p>
          The Matrix Tree Theorem counts spanning trees using the determinant of a
          reduced Laplacian matrix:
        </p>
        <MathBlock math="\tau(G) = \det(L[v])" />
        <p className="mt-2">
          where <InlineMath math="L" /> is the Laplacian matrix and{' '}
          <InlineMath math="L[v]" /> is <InlineMath math="L" /> with row and column{' '}
          <InlineMath math="v" /> removed.
        </p>
      </Theorem>

      <h2>Extremal Problems for Bipartite Graphs</h2>

      <Theorem
        title="Zarankiewicz Problem"
        proof={
          <>
            <p>
              <strong>Kővári-Sós-Turán bound:</strong> Let <InlineMath math="G" /> be a
              bipartite graph with parts <InlineMath math="X" /> (size <InlineMath math="m" />)
              and <InlineMath math="Y" /> (size <InlineMath math="n" />), having{' '}
              <InlineMath math="e" /> edges and no <InlineMath math="K_{s,t}" />.
            </p>
            <p className="mt-2">
              <strong>Counting pairs:</strong> Count pairs <InlineMath math="(S, y)" />{' '}
              where <InlineMath math="S \subseteq X" /> is an <InlineMath math="s" />-set
              and <InlineMath math="y \in Y" /> is adjacent to all of <InlineMath math="S" />.
            </p>
            <p className="mt-2">
              <strong>Upper bound:</strong> Since no <InlineMath math="K_{s,t}" /> exists,
              each <InlineMath math="s" />-set <InlineMath math="S" /> has fewer than{' '}
              <InlineMath math="t" /> common neighbors in <InlineMath math="Y" />:
            </p>
            <MathBlock math="\sum_{S} |N(S)| \leq \binom{m}{s}(t-1)" />
            <p className="mt-2">
              <strong>Lower bound:</strong> By convexity, if vertex{' '}
              <InlineMath math="y_i" /> has degree <InlineMath math="d_i" />:
            </p>
            <MathBlock math="\sum_{y \in Y} \binom{d_y}{s} \geq n \binom{e/n}{s}" />
            <p className="mt-2">
              Combining and simplifying yields the stated bound.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath math="z(m, n; s, t)" /> be the maximum edges in an{' '}
          <InlineMath math="m \times n" /> bipartite graph with no{' '}
          <InlineMath math="K_{s,t}" /> subgraph.
        </p>
        <MathBlock math="z(m, n; s, t) \leq \frac{(t-1)^{1/s}}{2} n m^{1-1/s} + \frac{s-1}{2}m" />
      </Theorem>

      <h2>Forbidden Subgraph Problems</h2>

      <Definition title="Turán-Type Problems">
        <p>
          For a family <InlineMath math="\mathcal{F}" /> of graphs, the{' '}
          <strong>extremal number</strong> <InlineMath math="ex(n, \mathcal{F})" /> is
          the maximum edges in an <InlineMath math="n" />-vertex graph containing no
          member of <InlineMath math="\mathcal{F}" /> as a subgraph.
        </p>
      </Definition>

      <Theorem
        title="Erdős-Stone Theorem"
        proof={
          <>
            <p>
              <strong>Lower bound:</strong> The Turán graph{' '}
              <InlineMath math="T_{r-1}(n)" /> (complete <InlineMath math="(r-1)" />-partite
              with parts as equal as possible) has no <InlineMath math="K_r" />, hence
              no <InlineMath math="H" /> with <InlineMath math="\chi(H) = r" />.
            </p>
            <MathBlock math="|E(T_{r-1}(n))| = \left(1 - \frac{1}{r-1}\right) \binom{n}{2} + O(n)" />
            <p className="mt-2">
              <strong>Upper bound (Erdős-Stone):</strong> The key insight is that for
              any <InlineMath math="\epsilon > 0" />, if a graph on <InlineMath math="n" />{' '}
              vertices has more than{' '}
              <InlineMath math="\left(1 - \frac{1}{r-1} + \epsilon\right)\binom{n}{2}" />{' '}
              edges, it contains <InlineMath math="K_r(t)" /> (complete{' '}
              <InlineMath math="r" />-partite with parts of size <InlineMath math="t" />)
              for <InlineMath math="t = t(\epsilon, r)" />.
            </p>
            <p className="mt-2">
              <strong>Embedding H:</strong> Since <InlineMath math="\chi(H) = r" />, the
              graph <InlineMath math="H" /> can be embedded in <InlineMath math="K_r(t)" />{' '}
              for large enough <InlineMath math="t" />. Thus graphs with too many edges
              must contain <InlineMath math="H" />.
            </p>
            <p className="mt-2">
              The proof uses the regularity lemma or direct density arguments.
            </p>
          </>
        }
      >
        <p>
          For any graph <InlineMath math="H" /> with <InlineMath math="\chi(H) = r \geq 2" />:
        </p>
        <MathBlock math="ex(n, H) = \left(1 - \frac{1}{r-1} + o(1)\right) \binom{n}{2}" />
        <p className="mt-2 text-dark-300">
          This determines the asymptotic extremal number for all non-bipartite{' '}
          <InlineMath math="H" />.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Circumference:</strong> Longest cycle length; related to minimum
          degree and connectivity.
        </li>
        <li>
          <strong>Wiener Index:</strong> Sum of distances; extremized by star and path.
        </li>
        <li>
          <strong>List Coloring:</strong>{' '}
          <InlineMath math="\text{ch}(G) \geq \chi(G)" />, can be much larger.
        </li>
        <li>
          <strong>Branchings:</strong> Directed forests; Edmonds' theorem characterizes
          edge-disjoint spanning arborescences.
        </li>
        <li>
          <strong>Erdős-Stone:</strong> Asymptotic extremal number depends only on
          chromatic number.
        </li>
        <li>
          <strong>Encodings:</strong> Prüfer sequences, Matrix Tree Theorem for counting.
        </li>
      </ul>
    </LessonLayout>
  );
}
