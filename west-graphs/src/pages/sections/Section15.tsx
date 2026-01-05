import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <p>
        What structure forces a graph to need many colors? The presence of a large
        clique is an obvious reason, but graphs can have high chromatic number without
        large cliques. We study extremal questions: how many edges can a graph have
        without containing certain subgraphs? Turán's Theorem answers this for complete
        subgraphs, and color-critical graphs reveal the minimal structures requiring
        a given number of colors.
      </p>

      <h2>Turán's Theorem</h2>

      <Definition title="Turán Graph">
        <p>
          The <strong>Turán graph</strong>{' '}
          <InlineMath math="T_{n,r}" /> is the complete <InlineMath math="r" />-partite
          graph on <InlineMath math="n" /> vertices with part sizes as equal as possible
          (differing by at most 1).
        </p>
        <p className="mt-2">
          If <InlineMath math="n = qr + s" /> where <InlineMath math="0 \leq s < r" />,
          then <InlineMath math="T_{n,r}" /> has <InlineMath math="s" /> parts of size{' '}
          <InlineMath math="q + 1" /> and <InlineMath math="r - s" /> parts of size{' '}
          <InlineMath math="q" />.
        </p>
      </Definition>

      <Example title="Turán Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="T_{6,2}" />: two parts of 3 vertices ={' '}
            <InlineMath math="K_{3,3}" /> (9 edges)
          </li>
          <li>
            <InlineMath math="T_{6,3}" />: three parts of 2 vertices ={' '}
            <InlineMath math="K_{2,2,2}" /> (12 edges)
          </li>
          <li>
            <InlineMath math="T_{7,3}" />: parts of sizes 3, 2, 2 (15 edges)
          </li>
          <li>
            <InlineMath math="T_{n,n-1}" />: <InlineMath math="K_n" /> minus a perfect
            matching (if <InlineMath math="n" /> even)
          </li>
        </ul>
      </Example>

      <Theorem title="Turán's Theorem (Theorem 5.2.3)">
        <p>
          Among <InlineMath math="n" />-vertex graphs with no{' '}
          <InlineMath math="K_{r+1}" /> subgraph, the unique graph with maximum edges is
          the Turán graph <InlineMath math="T_{n,r}" />.
        </p>
        <p className="mt-2">
          The number of edges is:
        </p>
        <MathBlock math="e(T_{n,r}) = \left(1 - \frac{1}{r}\right) \frac{n^2}{2} - O(n)" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Step 1:</strong> Among <InlineMath math="K_{r+1}" />-free graphs,
              complete multipartite graphs maximize edges (moving edges between
              non-adjacent vertices only helps).
            </p>
            <p className="mt-2">
              <strong>Step 2:</strong> A <InlineMath math="K_{r+1}" />-free complete
              multipartite graph has at most <InlineMath math="r" /> parts.
            </p>
            <p className="mt-2">
              <strong>Step 3:</strong> Among <InlineMath math="r" />-partite graphs,
              equal part sizes maximize edges (by convexity of{' '}
              <InlineMath math="x^2" />).
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Turán Edge Count (Corollary 5.2.4)">
        <p>
          If <InlineMath math="G" /> is <InlineMath math="K_{r+1}" />-free with{' '}
          <InlineMath math="n" /> vertices:
        </p>
        <MathBlock math="e(G) \leq \left(1 - \frac{1}{r}\right) \frac{n^2}{2}" />
      </Theorem>

      <Example title="No Triangles">
        <p>
          How many edges can an <InlineMath math="n" />-vertex triangle-free graph have?
        </p>
        <p className="mt-2">
          By Turán (<InlineMath math="r = 2" />):{' '}
          <InlineMath math="e(G) \leq n^2/4" />. The maximum is achieved by{' '}
          <InlineMath math="K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}" />.
        </p>
        <p className="mt-2">
          For <InlineMath math="n = 10" />: at most 25 edges, achieved by{' '}
          <InlineMath math="K_{5,5}" />.
        </p>
      </Example>

      <h2>Forbidding Subgraphs</h2>

      <Definition title="Extremal Number">
        <p>
          The <strong>extremal number</strong> <InlineMath math="ex(n, H)" /> is the
          maximum number of edges in an <InlineMath math="n" />-vertex graph containing
          no copy of <InlineMath math="H" /> as a subgraph.
        </p>
      </Definition>

      <Theorem title="Turán Restated">
        <p>
          <InlineMath math="ex(n, K_{r+1}) = e(T_{n,r})" />
        </p>
      </Theorem>

      <Theorem title="Kővári-Sós-Turán (Theorem 5.2.7)">
        <p>
          For <InlineMath math="r \leq s" />:
        </p>
        <MathBlock math="ex(n, K_{r,s}) \leq \frac{1}{2}(s-1)^{1/r} n^{2-1/r} + \frac{r-1}{2}n" />
        <p className="mt-2">
          In particular, <InlineMath math="ex(n, K_{r,s}) = O(n^{2-1/r})" />.
        </p>
      </Theorem>

      <Example title="No K₂,₂">
        <p>
          <InlineMath math="K_{2,2} = C_4" />. By Kővári-Sós-Turán:{' '}
          <InlineMath math="ex(n, C_4) = O(n^{3/2})" />.
        </p>
        <p className="mt-2">
          More precisely,{' '}
          <InlineMath math="ex(n, C_4) \leq \frac{1}{2}(1 + \sqrt{4n-3})" />.
        </p>
        <p className="mt-2">
          Projective plane constructions show this is tight up to lower-order terms.
        </p>
      </Example>

      <h2>Color-Critical Graphs</h2>

      <Definition title="Color-Critical Graph">
        <p>
          A graph <InlineMath math="G" /> is <strong>
            <InlineMath math="k" />-critical
          </strong>{' '}
          (or <strong>
            <InlineMath math="k" />-color-critical
          </strong>) if <InlineMath math="\chi(G) = k" /> but{' '}
          <InlineMath math="\chi(G - v) < k" /> for every vertex{' '}
          <InlineMath math="v" />.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath math="G" /> is <InlineMath math="k" />-critical if{' '}
          <InlineMath math="\chi(G) = k" /> and deleting any vertex decreases the
          chromatic number.
        </p>
      </Definition>

      <Example title="Critical Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="K_n" /> is <InlineMath math="n" />-critical
          </li>
          <li>
            Odd cycles <InlineMath math="C_{2k+1}" /> are 3-critical
          </li>
          <li>
            The Grötzsch graph (11 vertices, 20 edges) is 4-critical and triangle-free
          </li>
          <li>
            The only 2-critical graph is <InlineMath math="K_2" />
          </li>
        </ul>
      </Example>

      <Theorem title="Properties of Critical Graphs">
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Every <InlineMath math="k" />-chromatic graph contains a{' '}
            <InlineMath math="k" />-critical subgraph.
          </li>
          <li>
            A <InlineMath math="k" />-critical graph is{' '}
            <InlineMath math="(k-1)" />-edge-connected.
          </li>
          <li>
            Every vertex of a <InlineMath math="k" />-critical graph has degree at
            least <InlineMath math="k - 1" />.
          </li>
        </ol>
      </Theorem>

      <Theorem title="Theorem 5.2.12 (Critical Graph Minimum Degree)">
        <p>
          If <InlineMath math="G" /> is <InlineMath math="k" />-critical, then{' '}
          <InlineMath math="\delta(G) \geq k - 1" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="v" /> be a vertex of minimum degree. Since{' '}
              <InlineMath math="G" /> is <InlineMath math="k" />-critical,{' '}
              <InlineMath math="G - v" /> has a <InlineMath math="(k-1)" />-coloring.
            </p>
            <p className="mt-2">
              If <InlineMath math="d(v) \leq k - 2" />, then <InlineMath math="v" /> has
              at most <InlineMath math="k - 2" /> neighbors, so some color from{' '}
              <InlineMath math="\{1, \ldots, k-1\}" /> is not used by neighbors of{' '}
              <InlineMath math="v" />. We could extend to a{' '}
              <InlineMath math="(k-1)" />-coloring of <InlineMath math="G" />,
              contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Dirac's Theorem on Critical Graphs (Theorem 5.2.14)">
        <p>
          If <InlineMath math="G" /> is <InlineMath math="k" />-critical with{' '}
          <InlineMath math="n" /> vertices, then:
        </p>
        <MathBlock math="e(G) \geq \frac{(k-1)n - k + 3}{2}" />
        <p className="mt-2">
          for <InlineMath math="k \geq 4" />.
        </p>
      </Theorem>

      <h2>Forcing Subdivisions</h2>

      <Definition title="Subdivision">
        <p>
          A <strong>subdivision</strong> of graph <InlineMath math="H" /> (or{' '}
          <InlineMath math="TH" />, "topological <InlineMath math="H" />") is obtained by
          replacing edges with internally disjoint paths.
        </p>
      </Definition>

      <Theorem title="Theorem 5.2.17 (Mader)">
        <p>
          Every graph <InlineMath math="G" /> with{' '}
          <InlineMath math="e(G) \geq 2n - 3" /> (where{' '}
          <InlineMath math="n = |V(G)|" />) contains a subdivision of{' '}
          <InlineMath math="K_4" />.
        </p>
      </Theorem>

      <Theorem title="High Average Degree Forces Subdivision (Theorem 5.2.18)">
        <p>
          For each <InlineMath math="k" />, there exists a constant{' '}
          <InlineMath math="c_k" /> such that every graph with average degree at least{' '}
          <InlineMath math="c_k" /> contains a subdivision of{' '}
          <InlineMath math="K_k" />.
        </p>
        <p className="mt-2">
          Mader proved <InlineMath math="c_k = 2^{k-2}" /> suffices. Bollobás and
          Thomason improved this to <InlineMath math="c_k = O(k^2)" />.
        </p>
      </Theorem>

      <Theorem title="Hajós Construction (Theorem 5.2.19)">
        <p>
          Every <InlineMath math="k" />-chromatic graph contains a subdivision of{' '}
          <InlineMath math="K_k" />.
        </p>
        <p className="mt-2 text-dark-300">
          This was conjectured by Hajós and proved to be false for large{' '}
          <InlineMath math="k" /> by Catlin (1979).
        </p>
      </Theorem>

      <h2>Minor-Based Characterizations</h2>

      <Definition title="Minor">
        <p>
          Graph <InlineMath math="H" /> is a <strong>minor</strong> of{' '}
          <InlineMath math="G" /> (written <InlineMath math="H \preceq G" />) if{' '}
          <InlineMath math="H" /> can be obtained from <InlineMath math="G" /> by
          deleting vertices, deleting edges, and contracting edges.
        </p>
      </Definition>

      <Theorem title="Hadwiger's Conjecture">
        <p>
          If <InlineMath math="\chi(G) \geq k" />, then <InlineMath math="G" /> has{' '}
          <InlineMath math="K_k" /> as a minor.
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="k = 1, 2, 3" />: Easy
          </li>
          <li>
            <InlineMath math="k = 4" />: Equivalent to planarity characterization
          </li>
          <li>
            <InlineMath math="k = 5, 6" />: Equivalent to the Four Color Theorem
          </li>
          <li>
            <InlineMath math="k \geq 7" />: Open (major unsolved problem)
          </li>
        </ul>
      </Theorem>

      <h2>Chromatic Number vs. Density</h2>

      <Definition title="Density">
        <p>
          The <strong>density</strong> of graph <InlineMath math="G" /> is{' '}
          <InlineMath math="\frac{e(G)}{\binom{n}{2}}" />, the fraction of possible
          edges present.
        </p>
      </Definition>

      <Theorem title="Dense Graphs Have Large Chromatic Number">
        <p>
          If <InlineMath math="G" /> has density greater than{' '}
          <InlineMath math="1 - \frac{1}{r}" />, then{' '}
          <InlineMath math="\chi(G) > r" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              By Turán, a graph with density greater than{' '}
              <InlineMath math="1 - 1/r" /> must contain{' '}
              <InlineMath math="K_{r+1}" />, so{' '}
              <InlineMath math="\chi(G) \geq r + 1" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Turán's Theorem:</strong> Maximum{' '}
          <InlineMath math="K_{r+1}" />-free graph is the balanced complete{' '}
          <InlineMath math="r" />-partite graph.
        </li>
        <li>
          <strong>Extremal Number:</strong> <InlineMath math="ex(n, H)" /> = max edges
          avoiding <InlineMath math="H" />.
        </li>
        <li>
          <strong>Color-Critical:</strong> Graphs where every proper subgraph has
          smaller chromatic number.
        </li>
        <li>
          <strong>Critical Properties:</strong>{' '}
          <InlineMath math="\delta(G) \geq k - 1" /> and{' '}
          <InlineMath math="(k-1)" />-edge-connected.
        </li>
        <li>
          <strong>High Chromatic → Dense:</strong> Large chromatic number forces many
          edges or specific structures.
        </li>
        <li>
          <strong>Hadwiger's Conjecture:</strong> Major open problem linking chromatic
          number to <InlineMath math="K_k" /> minors.
        </li>
      </ul>
    </LessonLayout>
  );
}
