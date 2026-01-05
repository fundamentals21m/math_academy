import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <p>
        There are <InlineMath math="2^{\binom{n}{2}}" /> simple graphs with vertex set{' '}
        <InlineMath math="[n] = \{1, \ldots, n\}" />, since each pair may or may not form
        an edge. How many of these are trees? In this section, we solve this counting
        problem, count spanning trees in arbitrary graphs, and discuss several
        applications.
      </p>

      <h2>Enumeration of Trees</h2>

      <p>
        With one or two vertices, only one tree can be formed. With three vertices there
        is still only one isomorphism class, but the adjacency matrix is determined by
        which vertex is the center. Thus there are <strong>three</strong> trees with
        vertex set <InlineMath math="[3]" />. With vertex set <InlineMath math="[4]" />,
        there are 4 stars and 12 paths, yielding <strong>16</strong> trees. With vertex
        set <InlineMath math="[5]" />, a careful study yields <strong>125</strong> trees.
      </p>

      <p>
        Now we may see a pattern: <InlineMath math="3 = 3^1" />,{' '}
        <InlineMath math="16 = 4^2" />, <InlineMath math="125 = 5^3" />. With vertex set{' '}
        <InlineMath math="[n]" />, there are <InlineMath math="n^{n-2}" /> trees. This is{' '}
        <strong>Cayley's Formula</strong>.
      </p>

      <h3>The Prüfer Code</h3>

      <p>
        We present a bijective proof: establishing a one-to-one correspondence between
        the set of trees with vertex set <InlineMath math="[n]" /> and a set of known
        size. Given a set <InlineMath math="S" /> of <InlineMath math="n" /> numbers,
        there are exactly <InlineMath math="n^{n-2}" /> ways to form a list of length{' '}
        <InlineMath math="n-2" /> with entries in <InlineMath math="S" />.
      </p>

      <Definition title="Prüfer Code Algorithm">
        <p>
          <strong>Input:</strong> A tree <InlineMath math="T" /> with vertex set{' '}
          <InlineMath math="S \subseteq \mathbb{N}" />.
        </p>
        <p>
          <strong>Iteration:</strong> At the <InlineMath math="i" />th step, delete the
          least remaining leaf, and let <InlineMath math="a_i" /> be the neighbor of this
          leaf.
        </p>
        <p>
          <strong>Output:</strong> The list{' '}
          <InlineMath math="f(T) = (a_1, \ldots, a_{n-2})" />.
        </p>
      </Definition>

      <Example title="Computing the Prüfer Code">
        <p>
          Consider a tree on vertices <InlineMath math="\{1, 2, 3, 4, 5, 6, 7, 8\}" />{' '}
          with structure: <InlineMath math="2-7-1-8" /> as a path, with{' '}
          <InlineMath math="6" /> attached to <InlineMath math="7" />,{' '}
          <InlineMath math="4" /> attached to <InlineMath math="1" />, and{' '}
          <InlineMath math="3, 5" /> attached to <InlineMath math="4" />.
        </p>
        <p>
          The least leaf is 2; we delete it and record 7. After deleting 3 and 5 and
          recording 4 each time, the least leaf in the remaining 5-vertex tree is 4. The
          full code is <InlineMath math="(7, 4, 4, 1, 7, 1)" />, and the vertices
          remaining at the end are 1 and 8.
        </p>
      </Example>

      <p>
        <strong>Recovering the tree from the code:</strong> If we know the vertex set{' '}
        <InlineMath math="S" />, we can retrieve the tree from the code{' '}
        <InlineMath math="a" />. At each step, the least element of{' '}
        <InlineMath math="S" /> not appearing in the remaining code is the next leaf to
        add. We connect it to the next entry in the code.
      </p>

      <Theorem title="Cayley's Formula (Theorem 2.2.3)">
        <p>
          For a set <InlineMath math="S \subseteq \mathbb{N}" /> of size{' '}
          <InlineMath math="n" />, there are <InlineMath math="n^{n-2}" /> trees with
          vertex set <InlineMath math="S" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Prüfer [1918])
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              This holds for <InlineMath math="n = 1" />, so assume{' '}
              <InlineMath math="n \geq 2" />. We prove that the Prüfer algorithm defines
              a bijection from the set of trees with vertex set <InlineMath math="S" />{' '}
              to the set <InlineMath math="S^{n-2}" /> of lists of length{' '}
              <InlineMath math="n-2" /> from <InlineMath math="S" />.
            </p>
            <p className="mt-2">
              <strong>Key observation:</strong> Computing <InlineMath math="f(T)" />{' '}
              reduces each vertex to degree 1 and then possibly deletes it. Thus every
              non-leaf vertex in <InlineMath math="T" /> appears in{' '}
              <InlineMath math="f(T)" />. No leaf appears, because recording a leaf as a
              neighbor would require reducing the tree to one vertex. Hence the leaves of{' '}
              <InlineMath math="T" /> are the elements of <InlineMath math="S" /> not in{' '}
              <InlineMath math="f(T)" />.
            </p>
            <p className="mt-2">
              Given <InlineMath math="a \in S^{n-2}" />, every tree with Prüfer code{' '}
              <InlineMath math="a" /> has the same least leaf <InlineMath math="x" /> and
              has edge <InlineMath math="xa_1" />. By induction on{' '}
              <InlineMath math="n" />, there is exactly one tree with the remaining
              vertices and remaining code. Adding <InlineMath math="xa_1" /> yields
              exactly one tree with code <InlineMath math="a" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Corollary 2.2.4 (Trees with Fixed Degrees)">
        <p>
          Given positive integers <InlineMath math="d_1, \ldots, d_n" /> summing to{' '}
          <InlineMath math="2n - 2" />, there are exactly:
        </p>
        <MathBlock math="\frac{(n-2)!}{\prod_i (d_i - 1)!}" />
        <p>
          trees with vertex set <InlineMath math="[n]" /> such that vertex{' '}
          <InlineMath math="i" /> has degree <InlineMath math="d_i" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              While constructing the Prüfer code of a tree <InlineMath math="T" />, we
              record <InlineMath math="x" /> each time we delete a neighbor of{' '}
              <InlineMath math="x" />, until we delete <InlineMath math="x" /> itself or
              leave <InlineMath math="x" /> among the last two vertices. Thus each vertex{' '}
              <InlineMath math="x" /> appears <InlineMath math="d_T(x) - 1" /> times in
              the Prüfer code.
            </p>
            <p className="mt-2">
              Therefore, we count trees with these vertex degrees by counting lists of
              length <InlineMath math="n - 2" /> that for each <InlineMath math="i" />{' '}
              have <InlineMath math="d_i - 1" /> copies of <InlineMath math="i" />. This
              is the multinomial coefficient{' '}
              <InlineMath math="\frac{(n-2)!}{\prod_i (d_i - 1)!}" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Trees with Fixed Degrees">
        <p>
          Consider trees with vertices <InlineMath math="\{1, 2, 3, 4, 5, 6, 7\}" /> that
          have degrees <InlineMath math="(3, 1, 2, 1, 3, 1, 1)" />, respectively.
        </p>
        <p>
          We compute{' '}
          <InlineMath math="\frac{5!}{2! \cdot 0! \cdot 1! \cdot 0! \cdot 2! \cdot 0! \cdot 0!} = \frac{120}{2 \cdot 1 \cdot 1 \cdot 2} = 30" />{' '}
          trees.
        </p>
        <p>
          Only vertices <InlineMath math="\{1, 3, 5\}" /> are non-leaves. Deleting the
          leaves yields a subtree on <InlineMath math="\{1, 3, 5\}" />. There are three
          such subtrees, determined by which vertex is in the middle. To complete each
          tree, we add the appropriate number of leaf neighbors for each non-leaf.
        </p>
      </Example>

      <h2>Spanning Trees in Graphs</h2>

      <p>
        Cayley's Formula counts spanning trees of <InlineMath math="K_n" />. We now
        consider the more general problem of computing the number of spanning trees in
        any graph <InlineMath math="G" />.
      </p>

      <Definition title="Edge Contraction">
        <p>
          In a graph <InlineMath math="G" />, <strong>contraction</strong> of edge{' '}
          <InlineMath math="e" /> with endpoints <InlineMath math="u, v" /> is the
          replacement of <InlineMath math="u" /> and <InlineMath math="v" /> with a
          single vertex whose incident edges are the edges other than{' '}
          <InlineMath math="e" /> that were incident to <InlineMath math="u" /> or{' '}
          <InlineMath math="v" />. The resulting graph <InlineMath math="G \cdot e" />{' '}
          has one less edge than <InlineMath math="G" />.
        </p>
        <p className="mt-2 text-dark-300">
          In a drawing, contraction shrinks the edge to a single point. Contracting can
          produce multiple edges or loops.
        </p>
      </Definition>

      <Theorem title="Proposition 2.2.8 (Deletion-Contraction Recurrence)">
        <p>
          Let <InlineMath math="\tau(G)" /> denote the number of spanning trees of a
          graph <InlineMath math="G" />. If <InlineMath math="e \in E(G)" /> is not a
          loop, then:
        </p>
        <MathBlock math="\tau(G) = \tau(G - e) + \tau(G \cdot e)" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The spanning trees of <InlineMath math="G" /> that omit{' '}
              <InlineMath math="e" /> are precisely the spanning trees of{' '}
              <InlineMath math="G - e" />.
            </p>
            <p className="mt-2">
              To show that <InlineMath math="G" /> has{' '}
              <InlineMath math="\tau(G \cdot e)" /> spanning trees containing{' '}
              <InlineMath math="e" />, we show that contraction of{' '}
              <InlineMath math="e" /> defines a bijection from spanning trees of{' '}
              <InlineMath math="G" /> containing <InlineMath math="e" /> to spanning
              trees of <InlineMath math="G \cdot e" />.
            </p>
            <p className="mt-2">
              When we contract <InlineMath math="e" /> in a spanning tree containing{' '}
              <InlineMath math="e" />, we obtain a spanning tree of{' '}
              <InlineMath math="G \cdot e" /> (spanning, connected, right number of
              edges). The other edges maintain their identity, so no two trees map to the
              same tree. Each spanning tree of <InlineMath math="G \cdot e" /> arises by
              expanding the contracted vertex back into <InlineMath math="e" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="The Kite Graph">
        <p>
          The "kite" graph (a 4-cycle with one diagonal) has 8 spanning trees. Four are
          paths around the outside cycle, and four use the diagonal edge. Using
          deletion-contraction:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <InlineMath math="G - e" /> (diagonal removed) is{' '}
            <InlineMath math="C_4" />, which has 4 spanning trees.
          </li>
          <li>
            <InlineMath math="G \cdot e" /> (diagonal contracted) is a triangle with one
            doubled edge, which has 4 spanning trees.
          </li>
          <li>
            Total: <InlineMath math="4 + 4 = 8" />.
          </li>
        </ul>
      </Example>

      <h3>The Matrix Tree Theorem</h3>

      <p>
        The deletion-contraction recurrence may require exponentially many terms.
        Kirchhoff discovered a much faster approach using determinants.
      </p>

      <Theorem title="Matrix Tree Theorem (Theorem 2.2.12)">
        <p>
          Given a loopless graph <InlineMath math="G" /> with vertex set{' '}
          <InlineMath math="v_1, \ldots, v_n" />, let <InlineMath math="a_{i,j}" /> be
          the number of edges with endpoints <InlineMath math="v_i" /> and{' '}
          <InlineMath math="v_j" />. Define the <strong>Laplacian matrix</strong>{' '}
          <InlineMath math="Q" /> by:
        </p>
        <MathBlock math="Q_{i,j} = \begin{cases} d(v_i) & \text{if } i = j \\ -a_{i,j} & \text{if } i \neq j \end{cases}" />
        <p>
          If <InlineMath math="Q^*" /> is a matrix obtained by deleting row{' '}
          <InlineMath math="s" /> and column <InlineMath math="t" /> of{' '}
          <InlineMath math="Q" />, then:
        </p>
        <MathBlock math="\tau(G) = (-1)^{s+t} \det Q^*" />
      </Theorem>

      <Example title="Matrix Tree Computation">
        <p>For the kite graph with vertices labeled 1, 2, 3, 4:</p>
        <MathBlock math="Q = \begin{pmatrix} 3 & -1 & -1 & -1 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 2 & 0 \\ -1 & -1 & 0 & 2 \end{pmatrix}" />
        <p>
          Deleting row 1 and column 1 gives:
        </p>
        <MathBlock math="Q^* = \begin{pmatrix} 3 & -1 & -1 \\ -1 & 2 & 0 \\ -1 & 0 & 2 \end{pmatrix}" />
        <p>
          Computing <InlineMath math="\det Q^* = 3(4 - 0) - (-1)(-2 - 0) + (-1)(0 + 2) = 12 - 2 - 2 = 8" />
          .
        </p>
      </Example>

      <h2>Graceful Labelings</h2>

      <p>
        Can we decompose <InlineMath math="K_{2m+1}" /> into copies of a tree{' '}
        <InlineMath math="T" /> with <InlineMath math="m" /> edges? Graceful labelings
        provide a constructive approach.
      </p>

      <Definition title="Graceful Labeling">
        <p>
          A <strong>graceful labeling</strong> of a graph <InlineMath math="G" /> with{' '}
          <InlineMath math="m" /> edges is a function{' '}
          <InlineMath math="f: V(G) \to \{0, \ldots, m\}" /> such that:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Distinct vertices receive distinct numbers.</li>
          <li>
            The edge differences{' '}
            <InlineMath math="\{|f(u) - f(v)|: uv \in E(G)\} = \{1, \ldots, m\}" />.
          </li>
        </ol>
        <p className="mt-2">
          A graph is <strong>graceful</strong> if it has a graceful labeling.
        </p>
      </Definition>

      <Theorem title="Ringel's Conjecture (Conjecture 2.2.13)">
        <p>
          If <InlineMath math="T" /> is a fixed tree with <InlineMath math="m" /> edges,
          then <InlineMath math="K_{2m+1}" /> decomposes into{' '}
          <InlineMath math="2m + 1" /> copies of <InlineMath math="T" />.
        </p>
        <p className="mt-2 text-dark-300">
          This famous conjecture was proved in 2019 by Montgomery, Pokrovskiy, and
          Sudakov for sufficiently large <InlineMath math="m" />.
        </p>
      </Theorem>

      <Theorem title="Theorem 2.2.16 (Rosa [1967])">
        <p>
          If a tree <InlineMath math="T" /> with <InlineMath math="m" /> edges has a
          graceful labeling, then <InlineMath math="K_{2m+1}" /> has a decomposition into{' '}
          <InlineMath math="2m + 1" /> copies of <InlineMath math="T" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              View vertices of <InlineMath math="K_{2m+1}" /> as congruence classes
              modulo <InlineMath math="2m + 1" />, arranged circularly. Group edges by
              the difference between endpoints (differences{' '}
              <InlineMath math="1, 2, \ldots, m" />).
            </p>
            <p className="mt-2">
              From a graceful labeling, define copies{' '}
              <InlineMath math="T_0, \ldots, T_{2m}" />. The vertices of{' '}
              <InlineMath math="T_k" /> are{' '}
              <InlineMath math="k, k+1, \ldots, k+m \pmod{2m+1}" />, with{' '}
              <InlineMath math="k+i" /> adjacent to <InlineMath math="k+j" /> iff{' '}
              <InlineMath math="i" /> is adjacent to <InlineMath math="j" /> in the
              labeling.
            </p>
            <p className="mt-2">
              Each difference class has exactly one edge in each{' '}
              <InlineMath math="T_k" />, so the copies decompose{' '}
              <InlineMath math="K_{2m+1}" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Graceful Tree Conjecture (Conjecture 2.2.15)">
        <p>
          <em>Every tree has a graceful labeling.</em>
        </p>
        <p className="mt-2 text-dark-300">
          This conjecture, due to Kotzig and Ringel (1964), remains open. It is known for
          many special classes of trees.
        </p>
      </Theorem>

      <h2>Caterpillars</h2>

      <Definition title="Caterpillar">
        <p>
          A <strong>caterpillar</strong> is a tree in which a single path (the{' '}
          <strong>spine</strong>) is incident to (or contains) every edge.
        </p>
        <p className="mt-2">
          Equivalently, deleting all leaves yields a path. The vertices not on the spine
          are called the "feet" and are all leaves.
        </p>
      </Definition>

      <Theorem title="Theorem 2.2.19 (Caterpillar Characterization)">
        <p>
          A tree is a caterpillar if and only if it does not contain the tree{' '}
          <InlineMath math="Y" /> (a vertex with three neighbors, each having another
          neighbor) as a subgraph.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="G'" /> be the tree obtained by deleting all leaves.
              Since all surviving vertices are non-leaves in <InlineMath math="G" />,{' '}
              <InlineMath math="G'" /> has a vertex of degree at least 3 iff{' '}
              <InlineMath math="Y" /> appears in <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              Hence <InlineMath math="G" /> has no copy of <InlineMath math="Y" /> iff{' '}
              <InlineMath math="\Delta(G') \leq 2" /> iff{' '}
              <InlineMath math="G'" /> is a path iff <InlineMath math="G" /> is a
              caterpillar.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Graceful Caterpillars">
        <p>
          Every caterpillar is graceful. Stars and paths are special cases of
          caterpillars (paths have no feet; stars have spine of length 0).
        </p>
        <p className="mt-2">
          A graceful labeling for caterpillars uses an "up/down" pattern: there exists a
          critical value <InlineMath math="a" /> such that every edge joins vertices with
          labels above and below <InlineMath math="a" />.
        </p>
      </Example>

      <h2>Branchings (Optional)</h2>

      <Definition title="Branching (Out-tree)">
        <p>
          A <strong>branching</strong> or <strong>out-tree</strong> is an orientation of
          a tree having:
        </p>
        <ul className="list-disc list-inside">
          <li>A root of indegree 0</li>
          <li>All other vertices of indegree 1</li>
        </ul>
        <p className="mt-2">
          An <strong>in-tree</strong> is an out-tree with edges reversed.
        </p>
        <p className="mt-2">
          A branching with root <InlineMath math="v" /> is a union of paths from{' '}
          <InlineMath math="v" />. Each vertex is reached by exactly one path.
        </p>
      </Definition>

      <Theorem title="Directed Matrix Tree Theorem (Theorem 2.2.21)">
        <p>
          Given a loopless digraph <InlineMath math="G" />, let{' '}
          <InlineMath math="Q^- = D^- - A'" /> and{' '}
          <InlineMath math="Q^+ = D^+ - A'" />, where <InlineMath math="D^-" /> and{' '}
          <InlineMath math="D^+" /> are diagonal matrices of indegrees and outdegrees,
          and entry <InlineMath math="(i,j)" /> of <InlineMath math="A'" /> is the number
          of edges from <InlineMath math="v_j" /> to <InlineMath math="v_i" />.
        </p>
        <p className="mt-2">
          The number of spanning out-trees (in-trees) rooted at{' '}
          <InlineMath math="v_i" /> is the value of each cofactor in the{' '}
          <InlineMath math="i" />th row of <InlineMath math="Q^-" /> (
          <InlineMath math="i" />th column of <InlineMath math="Q^+" />).
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Cayley's Formula:</strong> There are <InlineMath math="n^{n-2}" />{' '}
          labeled trees on <InlineMath math="n" /> vertices, proved via the Prüfer code
          bijection.
        </li>
        <li>
          <strong>Prüfer code:</strong> A bijection between <InlineMath math="n" />
          -vertex labeled trees and sequences of length <InlineMath math="n-2" /> from{' '}
          <InlineMath math="[n]" />.
        </li>
        <li>
          <strong>Degree counting:</strong> Each vertex appears{' '}
          <InlineMath math="d(v) - 1" /> times in its tree's Prüfer code.
        </li>
        <li>
          <strong>Deletion-contraction:</strong>{' '}
          <InlineMath math="\tau(G) = \tau(G - e) + \tau(G \cdot e)" /> for non-loop{' '}
          <InlineMath math="e" />.
        </li>
        <li>
          <strong>Matrix Tree Theorem:</strong> Count spanning trees via the determinant
          of a cofactor of the Laplacian matrix.
        </li>
        <li>
          <strong>Graceful labelings:</strong> If a tree <InlineMath math="T" /> with{' '}
          <InlineMath math="m" /> edges is graceful, then <InlineMath math="K_{2m+1}" />{' '}
          decomposes into copies of <InlineMath math="T" />.
        </li>
        <li>
          <strong>Caterpillars:</strong> Trees where deleting leaves yields a path; they
          are always graceful.
        </li>
      </ul>
    </LessonLayout>
  );
}
