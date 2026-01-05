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

      <Theorem title="Circumference and Minimum Degree">
        <p>
          If <InlineMath math="G" /> is 2-connected with <InlineMath math="n" /> vertices
          and <InlineMath math="\delta(G) \geq k" />, then{' '}
          <InlineMath math="c(G) \geq \min(2k, n)" />.
        </p>
      </Theorem>

      <Theorem title="Dirac's Theorem (Cycle Version)">
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

      <Theorem title="Wiener Index of Trees">
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

      <Theorem title="Choosability vs Chromatic Number">
        <p>
          <InlineMath math="\chi(G) \leq \text{ch}(G)" /> always, but the gap can be
          arbitrarily large.
        </p>
        <p className="mt-2">
          <InlineMath math="K_{n,n}" /> has <InlineMath math="\chi = 2" /> but{' '}
          <InlineMath math="\text{ch}(K_{n,n}) = (1 + o(1)) \log_2 n" />.
        </p>
      </Theorem>

      <Theorem title="Edge List Coloring">
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

      <Theorem title="Edmonds' Branching Theorem">
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

      <Theorem title="Counting Spanning Trees">
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

      <Theorem title="Zarankiewicz Problem">
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

      <Theorem title="Erdős-Stone Theorem">
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
