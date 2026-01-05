import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <p>
        Hall's Theorem and the König-Egerváry Theorem apply only to bipartite graphs.
        For general graphs, characterizing perfect matchings is more subtle. The key
        difficulty is the presence of odd cycles, which leads to Tutte's elegant
        characterization. We also study <InlineMath math="f" />-factors, which
        generalize matchings.
      </p>

      <h2>Tutte's 1-Factor Theorem</h2>

      <p>
        Recall that a perfect matching is also called a <strong>1-factor</strong>: a
        1-regular spanning subgraph. When does a graph have a 1-factor?
      </p>

      <Definition title="Odd Components">
        <p>
          For a graph <InlineMath math="G" /> and vertex subset{' '}
          <InlineMath math="S \subseteq V(G)" />, let{' '}
          <InlineMath math="o(G - S)" /> denote the number of <strong>odd components</strong>{' '}
          of <InlineMath math="G - S" /> (components with an odd number of vertices).
        </p>
      </Definition>

      <p>
        The key observation is that a perfect matching must match vertices within each
        component or match them to <InlineMath math="S" />. In an odd component, at
        least one vertex must be matched to <InlineMath math="S" />.
      </p>

      <Theorem title="Tutte's 1-Factor Theorem (Theorem 3.3.3)">
        <p>
          A graph <InlineMath math="G" /> has a 1-factor (perfect matching) if and only
          if for every <InlineMath math="S \subseteq V(G)" />:
        </p>
        <MathBlock math="o(G - S) \leq |S|" />
        <p className="mt-2 text-dark-300">
          This is called <strong>Tutte's Condition</strong>.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Necessity)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              If <InlineMath math="G" /> has a perfect matching <InlineMath math="M" />,
              consider any <InlineMath math="S \subseteq V(G)" />. Each odd component of{' '}
              <InlineMath math="G - S" /> has an odd number of vertices, so in any
              matching of its vertices, at least one must match outside the component.
            </p>
            <p className="mt-2">
              Since vertices in odd components can only match to <InlineMath math="S" />{' '}
              (they can't match to even components or other odd components), we need at
              least <InlineMath math="o(G - S)" /> vertices in <InlineMath math="S" />.
              Thus <InlineMath math="o(G - S) \leq |S|" />.
            </p>
          </div>
        </details>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Sufficiency - Sketch)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The sufficiency proof uses a clever argument. Assume Tutte's condition
              holds but <InlineMath math="G" /> has no perfect matching. Among all such
              graphs, consider one with the maximum number of edges (adding edges can
              only help create a matching).
            </p>
            <p className="mt-2">
              Since <InlineMath math="G" /> is edge-maximal, for any non-edge{' '}
              <InlineMath math="uv" />, the graph <InlineMath math="G + uv" /> has a
              perfect matching using <InlineMath math="uv" />. This forces{' '}
              <InlineMath math="G" /> to be a union of complete graphs joined in a
              specific way, but then we can construct a perfect matching—contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Petersen Graph">
        <p>
          The Petersen graph has 10 vertices and is 3-regular. Does it have a perfect
          matching?
        </p>
        <p className="mt-2">
          We check Tutte's condition. By symmetry, it suffices to check a few cases.
          Taking <InlineMath math="S = \emptyset" /> gives one component (connected
          graph) with 10 vertices—even, so <InlineMath math="o(G) = 0 \leq 0" />. ✓
        </p>
        <p className="mt-2">
          After checking all relevant subsets (by symmetry arguments), Tutte's
          condition holds. The Petersen graph has a perfect matching—in fact, it has
          exactly 6 perfect matchings.
        </p>
      </Example>

      <h3>Deficiency and Maximum Matchings</h3>

      <Definition title="Deficiency">
        <p>
          The <strong>deficiency</strong> of graph <InlineMath math="G" /> is:
        </p>
        <MathBlock math="\text{def}(G) = \max_{S \subseteq V(G)} \left( o(G - S) - |S| \right)" />
        <p className="mt-2">
          By Tutte's condition, <InlineMath math="G" /> has a perfect matching iff{' '}
          <InlineMath math="\text{def}(G) = 0" />.
        </p>
      </Definition>

      <Theorem title="Berge-Tutte Formula (Theorem 3.3.17)">
        <p>
          For any graph <InlineMath math="G" />:
        </p>
        <MathBlock math="\alpha'(G) = \frac{1}{2}\left( n(G) - \text{def}(G) \right)" />
        <p className="mt-2">
          where <InlineMath math="\alpha'(G)" /> is the maximum matching number.
        </p>
        <p className="mt-2 text-dark-300">
          This generalizes both Hall's Theorem (for bipartite graphs) and Tutte's
          Theorem (when <InlineMath math="\text{def}(G) = 0" />).
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Upper bound:</strong> Let <InlineMath math="S" /> achieve the
              deficiency: <InlineMath math="o(G - S) - |S| = \text{def}(G)" />.
            </p>
            <p className="mt-2">
              Any matching <InlineMath math="M" /> can saturate at most{' '}
              <InlineMath math="|S|" /> vertices from the <InlineMath math="o(G - S)" />{' '}
              odd components (each odd component needs at least one vertex matched to{' '}
              <InlineMath math="S" />). Thus at least{' '}
              <InlineMath math="o(G - S) - |S| = \text{def}(G)" /> vertices from odd
              components remain unsaturated.
            </p>
            <p className="mt-2">
              Therefore, <InlineMath math="M" /> saturates at most{' '}
              <InlineMath math="n(G) - \text{def}(G)" /> vertices, giving:
            </p>
            <MathBlock math="\alpha'(G) \leq \frac{1}{2}(n(G) - \text{def}(G))" />
            <p className="mt-2">
              <strong>Lower bound:</strong> Construct a new graph{' '}
              <InlineMath math="G'" /> from <InlineMath math="G" /> by adding{' '}
              <InlineMath math="\text{def}(G)" /> new vertices, each adjacent to all
              original vertices.
            </p>
            <p className="mt-2">
              We verify <InlineMath math="G'" /> satisfies Tutte's condition. For any{' '}
              <InlineMath math="T \subseteq V(G')" />, if <InlineMath math="T" />{' '}
              contains all new vertices, then{' '}
              <InlineMath math="o(G' - T) = o(G - S)" /> where{' '}
              <InlineMath math="S = T \cap V(G)" />. Since <InlineMath math="|T| \geq \text{def}(G) + |S|" />:
            </p>
            <MathBlock math="o(G' - T) = o(G - S) \leq |S| + \text{def}(G) \leq |T|" />
            <p className="mt-2">
              If <InlineMath math="T" /> is missing some new vertex <InlineMath math="w" />,
              then <InlineMath math="w" /> is adjacent to all of <InlineMath math="G - S" />,
              so <InlineMath math="G' - T" /> has at most one component—condition satisfied.
            </p>
            <p className="mt-2">
              By Tutte's Theorem, <InlineMath math="G'" /> has a perfect matching{' '}
              <InlineMath math="M'" />. Restricting to <InlineMath math="G" /> gives a
              matching of size{' '}
              <InlineMath math="\frac{1}{2}(n(G) + \text{def}(G)) - \text{def}(G) = \frac{1}{2}(n(G) - \text{def}(G))" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Factors and <InlineMath math="f" />-Factors</h2>

      <p>
        A matching saturates each vertex at most once. What if we want to saturate
        each vertex a specified number of times?
      </p>

      <Definition title="f-Factor">
        <p>
          Given a function <InlineMath math="f: V(G) \to \mathbb{Z}_{\geq 0}" />, an{' '}
          <strong>
            <InlineMath math="f" />-factor
          </strong>{' '}
          of graph <InlineMath math="G" /> is a spanning subgraph <InlineMath math="H" />{' '}
          such that <InlineMath math="d_H(v) = f(v)" /> for every vertex{' '}
          <InlineMath math="v" />.
        </p>
        <p className="mt-2">
          Special cases:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            A <strong>1-factor</strong> is a perfect matching (
            <InlineMath math="f \equiv 1" />).
          </li>
          <li>
            A <strong>2-factor</strong> is a spanning union of cycles (
            <InlineMath math="f \equiv 2" />).
          </li>
          <li>
            A <strong>
              <InlineMath math="k" />-factor
            </strong>{' '}
            is a <InlineMath math="k" />-regular spanning subgraph (
            <InlineMath math="f \equiv k" />).
          </li>
        </ul>
      </Definition>

      <Theorem title="2-Factor Theorem (Theorem 3.3.9)">
        <p>
          Every <InlineMath math="k" />-regular bipartite graph has a 2-factor.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              By the König-Egerváry Theorem and Hall's Theorem, every regular bipartite
              graph has a perfect matching. Remove this matching to get a{' '}
              <InlineMath math="(k-1)" />-regular bipartite graph, which again has a
              perfect matching. The union of these two perfect matchings is a 2-factor.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Petersen's Theorem (Theorem 3.3.7)">
        <p>
          Every 3-regular graph with no cut-edge has a perfect matching.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Verify Tutte's condition. For any <InlineMath math="S" />, each odd
              component of <InlineMath math="G - S" /> has an odd total degree from{' '}
              <InlineMath math="S" /> (since internal degrees sum to even). Being
              3-regular with no cut-edge provides enough connectivity to ensure{' '}
              <InlineMath math="o(G - S) \leq |S|" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h3>General <InlineMath math="f" />-Factor Theorem</h3>

      <Theorem title="Tutte's f-Factor Theorem (Theorem 3.3.25)">
        <p>
          Let <InlineMath math="f: V(G) \to \mathbb{Z}_{\geq 0}" />. The graph{' '}
          <InlineMath math="G" /> has an <InlineMath math="f" />-factor if and only if
          for every <InlineMath math="S, T \subseteq V(G)" /> with{' '}
          <InlineMath math="S \cap T = \emptyset" />:
        </p>
        <MathBlock math="\sum_{v \in S} f(v) + \sum_{v \in T} (d_G(v) - f(v)) - e_G(S, T) - q(S, T) \geq 0" />
        <p className="mt-2 text-dark-300">
          Here <InlineMath math="e_G(S, T)" /> is the number of edges between{' '}
          <InlineMath math="S" /> and <InlineMath math="T" />, and{' '}
          <InlineMath math="q(S, T)" /> counts certain "bad" components of{' '}
          <InlineMath math="G - S - T" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof Sketch
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The proof reduces to Tutte's 1-factor theorem via a clever construction.
            </p>
            <p className="mt-2">
              <strong>Construction:</strong> Build a bipartite graph{' '}
              <InlineMath math="H" /> from <InlineMath math="G" /> as follows. For each
              vertex <InlineMath math="v \in V(G)" />, create <InlineMath math="f(v)" />{' '}
              copies in one partite set <InlineMath math="A" /> and{' '}
              <InlineMath math="d_G(v) - f(v)" /> copies in the other set{' '}
              <InlineMath math="B" />. For each edge <InlineMath math="uv \in E(G)" />,
              add a complete bipartite graph between the <InlineMath math="B" />-copies
              of <InlineMath math="u" /> and the <InlineMath math="A" />-copies of{' '}
              <InlineMath math="v" />, and vice versa.
            </p>
            <p className="mt-2">
              <strong>Equivalence:</strong> An <InlineMath math="f" />-factor in{' '}
              <InlineMath math="G" /> corresponds to a perfect matching in{' '}
              <InlineMath math="H" />. The condition for <InlineMath math="H" /> to have
              a perfect matching (via Hall's condition) translates to the given
              inequality.
            </p>
            <p className="mt-2">
              <strong>Bad components <InlineMath math="q(S, T)" />:</strong> A component{' '}
              <InlineMath math="C" /> of <InlineMath math="G - S - T" /> is "bad" if the
              sum <InlineMath math="\sum_{v \in C} f(v) + e_G(C, T)" /> has different parity
              than <InlineMath math="|C|" />. Such components contribute an extra deficit
              that must be accounted for.
            </p>
            <p className="mt-2">
              The detailed verification requires careful counting arguments showing that
              violations of the inequality correspond to obstructions to finding a perfect
              matching in <InlineMath math="H" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Edmonds' Matching Algorithm</h2>

      <p>
        For general (non-bipartite) graphs, finding maximum matchings is more complex
        due to odd cycles. Jack Edmonds' breakthrough "blossom algorithm" handles this.
      </p>

      <Definition title="Blossom">
        <p>
          A <strong>blossom</strong> is an odd cycle in which every other edge (except
          one) belongs to the current matching. The cycle has{' '}
          <InlineMath math="2k + 1" /> vertices with <InlineMath math="k" /> matched
          edges.
        </p>
        <p className="mt-2">
          The key insight: a blossom can be <strong>contracted</strong> to a single
          vertex without affecting the existence of augmenting paths.
        </p>
      </Definition>

      <Example title="A Simple Blossom">
        <p>
          Consider a 5-cycle <InlineMath math="v_1, v_2, v_3, v_4, v_5" /> with matching{' '}
          <InlineMath math="M = \{v_2v_3, v_4v_5\}" />. The vertex{' '}
          <InlineMath math="v_1" /> is unsaturated.
        </p>
        <p className="mt-2">
          If we're searching for an augmenting path and reach <InlineMath math="v_1" />,
          we can enter the cycle through either <InlineMath math="v_2" /> or{' '}
          <InlineMath math="v_5" />. By contracting the blossom, we simplify the search.
        </p>
      </Example>

      <Definition title="Edmonds' Blossom Algorithm">
        <p>The algorithm maintains:</p>
        <ul className="mt-2 list-disc list-inside">
          <li>A current matching <InlineMath math="M" /></li>
          <li>A forest of alternating trees rooted at unsaturated vertices</li>
        </ul>
        <p className="mt-2">
          <strong>Process:</strong>
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>Build alternating trees from unsaturated vertices.</li>
          <li>
            If two trees connect via a non-matching edge to an unsaturated vertex:{' '}
            <strong>augmenting path found</strong>—augment and restart.
          </li>
          <li>
            If two even-level vertices in the same tree are connected:{' '}
            <strong>blossom detected</strong>—contract it and continue.
          </li>
          <li>
            When no more growth possible, <InlineMath math="M" /> is maximum.
          </li>
          <li>Expand blossoms to recover the actual matching.</li>
        </ol>
      </Definition>

      <Theorem title="Theorem 3.3.21 (Edmonds' Algorithm)">
        <p>
          Edmonds' blossom algorithm correctly finds a maximum matching in any graph{' '}
          <InlineMath math="G" /> in <InlineMath math="O(n^2 m)" /> time.
        </p>
        <p className="mt-2 text-dark-300">
          With better data structures (Micali-Vazirani), this improves to{' '}
          <InlineMath math="O(m\sqrt{n})" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Correctness:</strong> The key insight is that blossom contraction
              preserves the existence of augmenting paths. We prove two claims:
            </p>
            <p className="mt-2">
              <em>Claim 1:</em> If <InlineMath math="G" /> has an{' '}
              <InlineMath math="M" />-augmenting path, then the contracted graph{' '}
              <InlineMath math="G/B" /> has an <InlineMath math="M/B" />-augmenting path,
              where <InlineMath math="B" /> is a blossom.
            </p>
            <p className="mt-2">
              <em>Proof of Claim 1:</em> An augmenting path either avoids{' '}
              <InlineMath math="B" /> (unchanged after contraction) or enters and exits{' '}
              <InlineMath math="B" />. In the latter case, since <InlineMath math="B" />{' '}
              is an odd cycle with alternating matched/unmatched edges, we can traverse{' '}
              <InlineMath math="B" /> maintaining the alternating property. After
              contraction, the path visits the contracted vertex.
            </p>
            <p className="mt-2">
              <em>Claim 2:</em> An augmenting path in <InlineMath math="G/B" /> can be
              "lifted" to an augmenting path in <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              <em>Proof of Claim 2:</em> If the path visits the blossom vertex in{' '}
              <InlineMath math="G/B" />, we expand it by routing through{' '}
              <InlineMath math="B" /> appropriately. The odd structure of{' '}
              <InlineMath math="B" /> ensures we can enter and exit while maintaining
              alternation.
            </p>
            <p className="mt-2">
              <strong>Time analysis:</strong> We perform at most{' '}
              <InlineMath math="n/2" /> augmentations. Each augmentation involves
              building alternating trees, which takes <InlineMath math="O(nm)" /> time
              (each edge examined <InlineMath math="O(n)" /> times due to blossom
              contractions). Total: <InlineMath math="O(n^2 m)" />.
            </p>
            <p className="mt-2">
              More sophisticated implementations using the "blossom-shrinking" technique
              with better bookkeeping achieve <InlineMath math="O(n^3)" /> or{' '}
              <InlineMath math="O(m\sqrt{n})" /> with Micali-Vazirani.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Finding Maximum Matching">
        <p>
          Consider a graph with vertices <InlineMath math="\{1, 2, 3, 4, 5\}" /> and
          edges forming a 5-cycle plus edge 1-3. Start with{' '}
          <InlineMath math="M = \{2-3, 4-5\}" />.
        </p>
        <p className="mt-2">
          Build an alternating tree from vertex 1 (unsaturated). Vertices 2 and 5 are
          reached via non-matching edges. Following matching edges reaches 3 and 4.
          The edge 1-3 creates a blossom (odd cycle 1-2-3-1 through the 5-cycle).
        </p>
        <p className="mt-2">
          After contraction and expansion, we find{' '}
          <InlineMath math="M' = \{1-2, 3-4\}" /> leaves vertex 5 unsaturated. Maximum
          matching has size 2 for this 5-vertex graph.
        </p>
      </Example>

      <h2>Applications</h2>

      <h3>Scheduling Problems</h3>

      <p>
        Many scheduling problems reduce to matching. For example, scheduling{' '}
        <InlineMath math="n" /> tasks on <InlineMath math="m" /> machines where each
        task can only run on certain machines is bipartite matching. With time
        constraints, we may need general matching theory.
      </p>

      <h3>Network Design</h3>

      <p>
        Constructing networks where every node has exactly <InlineMath math="k" />{' '}
        connections is a <InlineMath math="k" />-factor problem. This appears in
        designing reliable communication networks.
      </p>

      <h3>Chemistry</h3>

      <p>
        In organic chemistry, molecular graphs represent atoms as vertices and bonds as
        edges. A perfect matching corresponds to a valid electron pairing (resonance
        structure). Benzenoid graphs always have perfect matchings by Tutte's theorem.
      </p>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Tutte's Condition:</strong> A graph has a perfect matching iff{' '}
          <InlineMath math="o(G - S) \leq |S|" /> for all{' '}
          <InlineMath math="S \subseteq V(G)" />.
        </li>
        <li>
          <strong>Berge-Tutte Formula:</strong>{' '}
          <InlineMath math="\alpha'(G) = \frac{1}{2}(n(G) - \text{def}(G))" /> gives
          maximum matching size.
        </li>
        <li>
          <strong>
            <InlineMath math="f" />-factors:
          </strong>{' '}
          Generalize matchings to specify degree at each vertex.
        </li>
        <li>
          <strong>Petersen's Theorem:</strong> 3-regular bridgeless graphs have perfect
          matchings.
        </li>
        <li>
          <strong>Edmonds' Algorithm:</strong> The blossom algorithm finds maximum
          matchings in general graphs by contracting odd cycles.
        </li>
        <li>
          <strong>Key Difference from Bipartite:</strong> Odd cycles create
          complications requiring the blossom contraction technique.
        </li>
      </ul>
    </LessonLayout>
  );
}
