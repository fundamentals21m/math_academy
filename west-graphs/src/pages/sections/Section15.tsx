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

      <Theorem
        title="Turán Edge Count (Corollary 5.2.4)"
        proof={
          <>
            <p>
              By Turán's Theorem, the <InlineMath math="K_{r+1}" />-free graph with maximum edges
              is <InlineMath math="T_{n,r}" />. We compute <InlineMath math="e(T_{n,r})" />.
            </p>
            <p className="mt-2">
              If the <InlineMath math="r" /> parts have sizes <InlineMath math="n_1, \ldots, n_r" /> with{' '}
              <InlineMath math="\sum n_i = n" />, then:
            </p>
            <MathBlock math="e(T_{n,r}) = \sum_{i < j} n_i n_j = \frac{1}{2}\left[\left(\sum n_i\right)^2 - \sum n_i^2\right] = \frac{n^2 - \sum n_i^2}{2}" />
            <p className="mt-2">
              This is maximized when <InlineMath math="\sum n_i^2" /> is minimized, which by convexity
              occurs when all <InlineMath math="n_i" /> are as equal as possible. With parts of size{' '}
              <InlineMath math="\lfloor n/r \rfloor" /> or <InlineMath math="\lceil n/r \rceil" />:
            </p>
            <MathBlock math="\sum n_i^2 \geq r \cdot \left(\frac{n}{r}\right)^2 = \frac{n^2}{r}" />
            <p className="mt-2">
              Therefore:
            </p>
            <MathBlock math="e(G) \leq e(T_{n,r}) \leq \frac{n^2 - n^2/r}{2} = \left(1 - \frac{1}{r}\right)\frac{n^2}{2}" />
          </>
        }
      >
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

      <Theorem
        title="Turán Restated"
        proof={
          <>
            <p>
              This is a direct restatement of Turán's Theorem using the extremal number notation.
            </p>
            <p className="mt-2">
              By definition, <InlineMath math="ex(n, K_{r+1})" /> is the maximum number of edges in
              an <InlineMath math="n" />-vertex graph containing no <InlineMath math="K_{r+1}" />.
            </p>
            <p className="mt-2">
              Turán's Theorem states that among all <InlineMath math="n" />-vertex{' '}
              <InlineMath math="K_{r+1}" />-free graphs, the Turán graph <InlineMath math="T_{n,r}" />{' '}
              uniquely achieves the maximum edge count. Therefore{' '}
              <InlineMath math="ex(n, K_{r+1}) = e(T_{n,r})" />.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="ex(n, K_{r+1}) = e(T_{n,r})" />
        </p>
      </Theorem>

      <Theorem
        title="Kővári-Sós-Turán (Theorem 5.2.7)"
        proof={
          <>
            <p>
              Let <InlineMath math="G" /> be a <InlineMath math="K_{r,s}" />-free graph with{' '}
              <InlineMath math="n" /> vertices and <InlineMath math="m" /> edges. We count pairs{' '}
              <InlineMath math="(S, v)" /> where <InlineMath math="S" /> is an <InlineMath math="r" />-subset
              of vertices and <InlineMath math="v" /> is a common neighbor of all vertices in{' '}
              <InlineMath math="S" />.
            </p>
            <p className="mt-2">
              <strong>Upper bound:</strong> Since <InlineMath math="G" /> is{' '}
              <InlineMath math="K_{r,s}" />-free, each <InlineMath math="r" />-set{' '}
              <InlineMath math="S" /> has fewer than <InlineMath math="s" /> common neighbors.
              Thus the count is at most <InlineMath math="(s-1)\binom{'{'}n{'}'}{'{'}r{'}'}" />.
            </p>
            <p className="mt-2">
              <strong>Lower bound:</strong> Each vertex <InlineMath math="v" /> of degree{' '}
              <InlineMath math="d(v)" /> contributes <InlineMath math="\binom{'{'}d(v){'}'}{'{'}r{'}'}" />{' '}
              pairs (choosing <InlineMath math="r" /> neighbors of <InlineMath math="v" />). The total is{' '}
              <InlineMath math="\sum_v \binom{'{'}d(v){'}'}{'{'}r{'}'}" />.
            </p>
            <p className="mt-2">
              By convexity of <InlineMath math="\binom{'{'}x{'}'}{'{'}r{'}'}" />, this sum is minimized when
              all degrees equal <InlineMath math="2m/n" />:
            </p>
            <MathBlock math="\sum_v \binom{d(v)}{r} \geq n \binom{2m/n}{r}" />
            <p className="mt-2">
              Combining: <InlineMath math="n\binom{'{'}2m/n{'}'}{'{'}r{'}'} \leq (s-1)\binom{'{'}n{'}'}{'{'}r{'}'}" />.
              Solving for <InlineMath math="m" /> yields the bound.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Properties of Critical Graphs"
        proof={
          <>
            <p><strong>(1) Every <InlineMath math="k" />-chromatic graph contains a{' '}
            <InlineMath math="k" />-critical subgraph:</strong></p>
            <p className="mt-2">
              Let <InlineMath math="G" /> have <InlineMath math="\chi(G) = k" />. If{' '}
              <InlineMath math="G" /> is not <InlineMath math="k" />-critical, there exists a vertex{' '}
              <InlineMath math="v" /> with <InlineMath math="\chi(G - v) = k" />. Repeat on{' '}
              <InlineMath math="G - v" />. Since chromatic number cannot decrease below{' '}
              <InlineMath math="k" /> (removing vertices cannot increase <InlineMath math="\chi" />),
              the process terminates with a <InlineMath math="k" />-critical subgraph.
            </p>
            <p className="mt-4"><strong>(2) A <InlineMath math="k" />-critical graph is{' '}
            <InlineMath math="(k-1)" />-edge-connected:</strong></p>
            <p className="mt-2">
              Suppose <InlineMath math="G" /> is <InlineMath math="k" />-critical and has an edge cut{' '}
              <InlineMath math="F" /> with <InlineMath math="|F| \leq k-2" />. Let{' '}
              <InlineMath math="G_1, G_2" /> be the components of <InlineMath math="G - F" />. Each{' '}
              <InlineMath math="G_i" /> (with cut edges reattached) has{' '}
              <InlineMath math="\chi < k" />, so has a <InlineMath math="(k-1)" />-coloring. With{' '}
              <InlineMath math="|F| \leq k-2" /> edges between them, we can permute colors in one
              part to avoid conflicts across <InlineMath math="F" />, giving a{' '}
              <InlineMath math="(k-1)" />-coloring of <InlineMath math="G" />—contradiction.
            </p>
            <p className="mt-4"><strong>(3) Every vertex has degree at least{' '}
            <InlineMath math="k-1" />:</strong></p>
            <p className="mt-2">
              This is proved separately as Theorem 5.2.12 below.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Dirac's Theorem on Critical Graphs (Theorem 5.2.14)"
        proof={
          <>
            <p>
              From Theorem 5.2.12, every vertex has degree at least <InlineMath math="k-1" />.
              Thus <InlineMath math="\sum_v d(v) \geq (k-1)n" />, giving{' '}
              <InlineMath math="e(G) \geq (k-1)n/2" />.
            </p>
            <p className="mt-2">
              For the stronger bound, we use that <InlineMath math="G" /> is{' '}
              <InlineMath math="(k-1)" />-edge-connected. By a result on edge-connectivity
              (Theorem 4.1.11), if <InlineMath math="G" /> is <InlineMath math="(k-1)" />-edge-connected
              with <InlineMath math="n" /> vertices:
            </p>
            <MathBlock math="e(G) \geq \frac{(k-1)n}{2}" />
            <p className="mt-2">
              Dirac's refinement shows that for <InlineMath math="k" />-critical graphs with{' '}
              <InlineMath math="k \geq 4" />, we can improve this to account for the structure
              of low-degree vertices. A <InlineMath math="k" />-critical graph cannot have too many
              vertices of degree exactly <InlineMath math="k-1" />, and careful counting using
              the coloring constraints yields the improved bound:
            </p>
            <MathBlock math="e(G) \geq \frac{(k-1)n - k + 3}{2}" />
          </>
        }
      >
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

      <Theorem
        title="Theorem 5.2.17 (Mader)"
        proof={
          <>
            <p>
              We prove by induction on <InlineMath math="n" />. For <InlineMath math="n \leq 4" />,
              a graph with at least <InlineMath math="2n - 3" /> edges is complete or nearly complete,
              and <InlineMath math="K_4" /> itself is a subdivision of <InlineMath math="K_4" />.
            </p>
            <p className="mt-2">
              For <InlineMath math="n \geq 5" />, suppose <InlineMath math="G" /> has{' '}
              <InlineMath math="e(G) \geq 2n - 3" /> edges but no <InlineMath math="TK_4" />.
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> <InlineMath math="G" /> has a vertex <InlineMath math="v" /> of
              degree at most 2. Then <InlineMath math="G - v" /> has at least{' '}
              <InlineMath math="(2n-3) - 2 = 2(n-1) - 3" /> edges. By induction,{' '}
              <InlineMath math="G - v" /> contains <InlineMath math="TK_4" />, contradiction.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> <InlineMath math="\delta(G) \geq 3" />. Then{' '}
              <InlineMath math="G" /> has average degree at least 3. Such graphs are known to
              contain a <InlineMath math="TK_4" /> by Dirac's theorem on graphs with minimum
              degree 3: if <InlineMath math="\delta(G) \geq 3" />, then <InlineMath math="G" />{' '}
              contains a subdivision of <InlineMath math="K_4" /> (proved by examining
              neighborhoods and paths).
            </p>
          </>
        }
      >
        <p>
          Every graph <InlineMath math="G" /> with{' '}
          <InlineMath math="e(G) \geq 2n - 3" /> (where{' '}
          <InlineMath math="n = |V(G)|" />) contains a subdivision of{' '}
          <InlineMath math="K_4" />.
        </p>
      </Theorem>

      <Theorem
        title="High Average Degree Forces Subdivision (Theorem 5.2.18)"
        proof={
          <>
            <p>
              <strong>Mader's proof outline for <InlineMath math="c_k = 2^{'{'}k-2{'}'}" />:</strong>
            </p>
            <p className="mt-2">
              Proceed by induction on <InlineMath math="k" />. For <InlineMath math="k = 4" />,
              Theorem 5.2.17 shows average degree 4 suffices (since{' '}
              <InlineMath math="e(G) \geq 2n" /> implies average degree ≥ 4).
            </p>
            <p className="mt-2">
              For the inductive step, given average degree at least <InlineMath math="2^{'{'}k-2{'}'}" />,
              find a subgraph <InlineMath math="H" /> with minimum degree at least{' '}
              <InlineMath math="2^{'{'}k-3{'}'}" />. By induction, <InlineMath math="H" /> contains{' '}
              <InlineMath math="TK_{'{'}k-1{'}'}" />. The high minimum degree provides enough paths
              to extend this to <InlineMath math="TK_k" /> by finding a vertex with paths to all{' '}
              <InlineMath math="k-1" /> branch vertices.
            </p>
            <p className="mt-2">
              <strong>Bollobás-Thomason improvement:</strong> A probabilistic argument shows that
              graphs with average degree <InlineMath math="\Omega(k^2)" /> contain{' '}
              <InlineMath math="K_k" /> topological minors. The key insight is that high average
              degree forces the existence of a highly connected subgraph, and Menger's theorem
              then provides the required disjoint paths.
            </p>
          </>
        }
      >
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
