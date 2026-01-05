import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <p>
        Now that we understand the structure of maximum matchings via Berge's Theorem,
        we can design algorithms to find them. In bipartite graphs, the augmenting path
        approach leads to efficient algorithms. We also consider weighted versions of
        matching problems and the stable matching problem, which has applications in
        job markets and organ donation.
      </p>

      <h2>The Augmenting Path Algorithm</h2>

      <p>
        Berge's Theorem tells us that a matching <InlineMath math="M" /> is maximum if
        and only if there is no <InlineMath math="M" />-augmenting path. This suggests
        an algorithm: repeatedly find augmenting paths and use them to enlarge the
        matching until no augmenting path exists.
      </p>

      <Definition title="Augmenting Path Algorithm">
        <p>
          <strong>Input:</strong> An <InlineMath math="X, Y" />-bigraph{' '}
          <InlineMath math="G" />.
        </p>
        <p className="mt-2">
          <strong>Idea:</strong> Explore alternating paths from each unsaturated vertex
          in <InlineMath math="X" />, seeking to reach an unsaturated vertex in{' '}
          <InlineMath math="Y" />.
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>Start with any matching <InlineMath math="M" /> (possibly empty).</li>
          <li>
            For each unsaturated vertex <InlineMath math="u \in X" />, use BFS/DFS to
            search for an <InlineMath math="M" />-augmenting path starting at{' '}
            <InlineMath math="u" />.
          </li>
          <li>
            From <InlineMath math="X" />-vertices, follow edges not in{' '}
            <InlineMath math="M" />.
          </li>
          <li>
            From <InlineMath math="Y" />-vertices, follow edges in{' '}
            <InlineMath math="M" />.
          </li>
          <li>
            If an unsaturated <InlineMath math="Y" />-vertex is reached, we've found an
            augmenting path. Augment <InlineMath math="M" /> and repeat.
          </li>
          <li>If no augmenting path exists, <InlineMath math="M" /> is maximum.</li>
        </ol>
      </Definition>

      <Theorem title="Theorem 3.2.2 (Correctness and Running Time)">
        <p>
          The augmenting path algorithm finds a maximum matching in an{' '}
          <InlineMath math="X, Y" />-bigraph <InlineMath math="G" />. If{' '}
          <InlineMath math="n = |V(G)|" /> and <InlineMath math="m = |E(G)|" />, the
          algorithm runs in <InlineMath math="O(mn)" /> time.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Correctness:</strong> Berge's Theorem guarantees that when no
              augmenting path exists, we have a maximum matching.
            </p>
            <p className="mt-2">
              <strong>Time analysis:</strong> Each augmentation increases{' '}
              <InlineMath math="|M|" /> by 1. Since{' '}
              <InlineMath math="|M| \leq n/2" />, we perform at most{' '}
              <InlineMath math="O(n)" /> augmentations. Each search for an augmenting
              path visits each edge at most once, taking <InlineMath math="O(m)" />{' '}
              time. Total: <InlineMath math="O(mn)" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Applying the Algorithm">
        <p>
          Consider a bipartite graph with <InlineMath math="X = \{x_1, x_2, x_3\}" />{' '}
          and <InlineMath math="Y = \{y_1, y_2, y_3\}" /> with edges{' '}
          <InlineMath math="x_1y_1, x_1y_2, x_2y_1, x_2y_2, x_3y_2, x_3y_3" />.
        </p>
        <p className="mt-2">
          <strong>Round 1:</strong> Start with <InlineMath math="M = \emptyset" />.
          From <InlineMath math="x_1" />, go to <InlineMath math="y_1" /> (unsaturated).
          Augment: <InlineMath math="M = \{x_1y_1\}" />.
        </p>
        <p className="mt-2">
          <strong>Round 2:</strong> From <InlineMath math="x_2" />, try{' '}
          <InlineMath math="y_1" /> (saturated), follow matching edge to{' '}
          <InlineMath math="x_1" />, try <InlineMath math="y_2" /> (unsaturated).
          Augment: <InlineMath math="M = \{x_1y_2, x_2y_1\}" />.
        </p>
        <p className="mt-2">
          <strong>Round 3:</strong> From <InlineMath math="x_3" />, try{' '}
          <InlineMath math="y_2" /> (saturated), to <InlineMath math="x_1" />, can't
          extend further from <InlineMath math="x_1" />. Try <InlineMath math="y_3" />{' '}
          (unsaturated). Augment: <InlineMath math="M = \{x_1y_2, x_2y_1, x_3y_3\}" />.
        </p>
        <p className="mt-2">
          Final matching is perfect with size 3.
        </p>
      </Example>

      <h3>The Hopcroft-Karp Algorithm</h3>

      <p>
        By finding many augmenting paths in each phase (all of shortest length), the
        Hopcroft-Karp algorithm improves the running time.
      </p>

      <Theorem title="Hopcroft-Karp (1973)">
        <p>
          A maximum matching in a bipartite graph with <InlineMath math="n" /> vertices
          and <InlineMath math="m" /> edges can be found in{' '}
          <InlineMath math="O(m\sqrt{n})" /> time.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              The algorithm works in phases. Each phase finds a maximal set of
              vertex-disjoint shortest augmenting paths and augments along all of them
              simultaneously.
            </p>
            <p className="mt-2">
              <strong>Key insight:</strong> After each phase, the length of the shortest
              augmenting path strictly increases. This is because augmenting along all
              shortest paths removes all such paths from the residual graph.
            </p>
            <p className="mt-2">
              <strong>Phase count:</strong> If the maximum matching has size{' '}
              <InlineMath math="k" />, then after <InlineMath math="\sqrt{k}" /> phases,
              the shortest augmenting path has length at least{' '}
              <InlineMath math="\sqrt{k}" />. The number of remaining augmenting paths is
              at most <InlineMath math="\sqrt{k}" />, so at most{' '}
              <InlineMath math="\sqrt{k}" /> more phases are needed.
            </p>
            <p className="mt-2">
              <strong>Total phases:</strong> <InlineMath math="O(\sqrt{k}) = O(\sqrt{n})" />.
            </p>
            <p className="mt-2">
              <strong>Per-phase time:</strong> Finding all shortest augmenting paths via
              BFS and augmenting takes <InlineMath math="O(m)" /> time.
            </p>
            <p className="mt-2">
              <strong>Total time:</strong> <InlineMath math="O(m\sqrt{n})" />.
            </p>
          </div>
        </details>
      </Theorem>

      <h2>Weighted Bipartite Matching</h2>

      <p>
        In many applications, not all matchings are equally valuable. When edges have
        weights (costs or profits), we seek a maximum matching of maximum (or minimum)
        total weight.
      </p>

      <Definition title="Weighted Bipartite Matching">
        <p>
          Given an <InlineMath math="X, Y" />-bigraph <InlineMath math="G" /> with edge
          weights <InlineMath math="w: E(G) \to \mathbb{R}" />, the{' '}
          <strong>weighted bipartite matching problem</strong> seeks a maximum matching{' '}
          <InlineMath math="M" /> that maximizes (or minimizes){' '}
          <InlineMath math="\sum_{e \in M} w(e)" />.
        </p>
        <p className="mt-2">
          When <InlineMath math="|X| = |Y| = n" /> and we seek a perfect matching, this
          is the <strong>assignment problem</strong>.
        </p>
      </Definition>

      <Example title="Farm Assignment Problem">
        <p>
          A farm must assign <InlineMath math="n" /> workers to <InlineMath math="n" />{' '}
          jobs. Let <InlineMath math="a_{ij}" /> be the profit when worker{' '}
          <InlineMath math="i" /> does job <InlineMath math="j" />. We model this as{' '}
          <InlineMath math="K_{n,n}" /> with edge <InlineMath math="x_i y_j" /> having
          weight <InlineMath math="a_{ij}" />.
        </p>
        <p className="mt-2">
          We seek a perfect matching (assignment) maximizing total profit. The optimal
          assignment corresponds to a permutation <InlineMath math="\sigma" />{' '}
          maximizing <InlineMath math="\sum_i a_{i,\sigma(i)}" />.
        </p>
      </Example>

      <h3>The Hungarian Algorithm</h3>

      <Definition title="Vertex Labeling">
        <p>
          A <strong>feasible labeling</strong> for weighted{' '}
          <InlineMath math="X, Y" />-bigraph <InlineMath math="G" /> is a function{' '}
          <InlineMath math="\ell: V(G) \to \mathbb{R}" /> such that{' '}
          <InlineMath math="\ell(x) + \ell(y) \geq w(xy)" /> for all edges{' '}
          <InlineMath math="xy" />.
        </p>
        <p className="mt-2">
          An edge <InlineMath math="xy" /> is <strong>tight</strong> if{' '}
          <InlineMath math="\ell(x) + \ell(y) = w(xy)" />.
        </p>
        <p className="mt-2">
          The <strong>equality graph</strong>{' '}
          <InlineMath math="G_\ell" /> consists of all tight edges.
        </p>
      </Definition>

      <Theorem title="Theorem 3.2.9">
        <p>
          For a feasible labeling <InlineMath math="\ell" /> on a weighted bipartite
          graph <InlineMath math="G" /> with <InlineMath math="|X| = |Y|" />:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            For any matching <InlineMath math="M" />:{' '}
            <InlineMath math="w(M) \leq \sum_{v \in V(G)} \ell(v)" />.
          </li>
          <li>
            Equality holds if and only if <InlineMath math="M" /> is a perfect matching
            in <InlineMath math="G_\ell" />.
          </li>
        </ol>
        <p className="mt-2">
          Thus, a perfect matching in <InlineMath math="G_\ell" /> is a maximum-weight
          perfect matching in <InlineMath math="G" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Part 1:</strong> For any matching <InlineMath math="M" />, we have:
            </p>
            <MathBlock math="w(M) = \sum_{xy \in M} w(xy) \leq \sum_{xy \in M} (\ell(x) + \ell(y))" />
            <p className="mt-2">
              by the feasibility condition <InlineMath math="\ell(x) + \ell(y) \geq w(xy)" />.
              Since <InlineMath math="M" /> saturates at most one endpoint of each vertex:
            </p>
            <MathBlock math="\sum_{xy \in M} (\ell(x) + \ell(y)) \leq \sum_{v \in V(G)} \ell(v)" />
            <p className="mt-2">
              <strong>Part 2 (⇐):</strong> If <InlineMath math="M" /> is a perfect matching
              in <InlineMath math="G_\ell" />, then all edges of <InlineMath math="M" /> are
              tight: <InlineMath math="\ell(x) + \ell(y) = w(xy)" /> for each{' '}
              <InlineMath math="xy \in M" />. Since <InlineMath math="M" /> is perfect, every
              vertex is saturated exactly once, so:
            </p>
            <MathBlock math="w(M) = \sum_{xy \in M} w(xy) = \sum_{xy \in M} (\ell(x) + \ell(y)) = \sum_{v \in V(G)} \ell(v)" />
            <p className="mt-2">
              <strong>Part 2 (⇒):</strong> If equality holds, then <InlineMath math="M" /> must
              saturate every vertex (otherwise the sum over <InlineMath math="M" /> would be
              less than the sum over all vertices). Furthermore, every edge in{' '}
              <InlineMath math="M" /> must be tight (otherwise the weight would be strictly
              less). Thus <InlineMath math="M" /> is a perfect matching in{' '}
              <InlineMath math="G_\ell" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Hungarian Algorithm">
        <p>
          <strong>Input:</strong> Weighted <InlineMath math="X, Y" />-bigraph with{' '}
          <InlineMath math="|X| = |Y| = n" />.
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            Initialize: <InlineMath math="\ell(x) = \max_y w(xy)" /> for{' '}
            <InlineMath math="x \in X" />, <InlineMath math="\ell(y) = 0" /> for{' '}
            <InlineMath math="y \in Y" />.
          </li>
          <li>
            Find a maximum matching <InlineMath math="M" /> in{' '}
            <InlineMath math="G_\ell" />.
          </li>
          <li>
            If <InlineMath math="M" /> is perfect, return <InlineMath math="M" />.
          </li>
          <li>
            Otherwise, adjust labels to add edges to <InlineMath math="G_\ell" />{' '}
            (making more edges tight) and repeat.
          </li>
        </ol>
        <p className="mt-2 text-dark-300">
          Running time: <InlineMath math="O(n^3)" />.
        </p>
      </Definition>

      <h2>Stable Matchings</h2>

      <p>
        In the stable matching problem, we have preferences rather than numeric
        weights. Each vertex ranks its potential partners, and we seek a matching
        where no two unmatched vertices would prefer each other over their current
        partners.
      </p>

      <Definition title="Stable Matching">
        <p>
          Given an <InlineMath math="X, Y" />-bigraph where each vertex ranks its
          neighbors, a matching <InlineMath math="M" /> is <strong>unstable</strong> if
          there exist <InlineMath math="x \in X" /> and <InlineMath math="y \in Y" />{' '}
          such that:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="xy \notin M" /> (they are not matched to each other)
          </li>
          <li>
            <InlineMath math="x" /> prefers <InlineMath math="y" /> to{' '}
            <InlineMath math="x" />'s partner in <InlineMath math="M" /> (or{' '}
            <InlineMath math="x" /> is unmatched)
          </li>
          <li>
            <InlineMath math="y" /> prefers <InlineMath math="x" /> to{' '}
            <InlineMath math="y" />'s partner in <InlineMath math="M" /> (or{' '}
            <InlineMath math="y" /> is unmatched)
          </li>
        </ul>
        <p className="mt-2">
          Such a pair <InlineMath math="(x, y)" /> is called a{' '}
          <strong>blocking pair</strong>. A matching is <strong>stable</strong> if it
          has no blocking pairs.
        </p>
      </Definition>

      <Example title="The Roommate Problem">
        <p>
          Consider three people: Alice (A), Bob (B), and Carol (C). Suppose:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>A's preference: B &gt; C</li>
          <li>B's preference: C &gt; A</li>
          <li>C's preference: A &gt; B</li>
        </ul>
        <p className="mt-2">
          In any pairing, one person is left out. If we pair A-B, then C is alone, but
          B prefers C to A and C prefers B to being alone—blocking pair! Similarly for
          other pairings. No stable matching exists.
        </p>
        <p className="mt-2 text-dark-300">
          The bipartite version (with two disjoint groups) always has a stable
          matching.
        </p>
      </Example>

      <Theorem title="Gale-Shapley Theorem (Theorem 3.2.17)">
        <p>
          Every bipartite preference system has a stable matching.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              We prove the Gale-Shapley (proposal) algorithm produces a stable matching.
            </p>
            <p className="mt-2">
              <strong>Termination:</strong> Each proposal is made at most once (a proposer
              never re-proposes to someone who rejected them). With <InlineMath math="n" />{' '}
              proposers and <InlineMath math="n" /> receivers, there are at most{' '}
              <InlineMath math="n^2" /> proposals, so the algorithm terminates.
            </p>
            <p className="mt-2">
              <strong>Completeness:</strong> We show all proposers are matched at termination.
              Suppose proposer <InlineMath math="x" /> is unmatched. Then <InlineMath math="x" />{' '}
              proposed to everyone and was rejected by all. Since a receiver only rejects when
              they have a better partner, every receiver is matched. But then all{' '}
              <InlineMath math="n" /> receivers are matched to <InlineMath math="n - 1" />{' '}
              proposers—contradiction.
            </p>
            <p className="mt-2">
              <strong>Stability:</strong> Suppose <InlineMath math="(x, y)" /> is a blocking
              pair: <InlineMath math="x" /> prefers <InlineMath math="y" /> to{' '}
              <InlineMath math="x" />'s partner, and <InlineMath math="y" /> prefers{' '}
              <InlineMath math="x" /> to <InlineMath math="y" />'s partner.
            </p>
            <p className="mt-2">
              Since <InlineMath math="x" /> prefers <InlineMath math="y" /> to their current
              partner, <InlineMath math="x" /> must have proposed to <InlineMath math="y" />{' '}
              before proposing to their current partner (proposers go down their preference
              list). So <InlineMath math="y" /> rejected <InlineMath math="x" /> at some point.
            </p>
            <p className="mt-2">
              But receivers only reject for someone they prefer more, and once matched to
              someone, they only "trade up." So <InlineMath math="y" />'s final partner is at
              least as preferred as whoever caused <InlineMath math="y" /> to reject{' '}
              <InlineMath math="x" />. Thus <InlineMath math="y" /> does not prefer{' '}
              <InlineMath math="x" /> to their partner—contradicting our assumption.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Gale-Shapley Algorithm (Proposal Algorithm)">
        <p>
          <strong>Input:</strong> Bipartite preference system with sets{' '}
          <InlineMath math="X" /> (proposers) and <InlineMath math="Y" />{' '}
          (receivers).
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>All vertices are initially free.</li>
          <li>
            While some <InlineMath math="x \in X" /> is free and hasn't proposed to
            everyone:
            <ul className="ml-4 list-disc list-inside">
              <li>
                <InlineMath math="x" /> proposes to their most-preferred{' '}
                <InlineMath math="y" /> not yet proposed to.
              </li>
              <li>
                If <InlineMath math="y" /> is free, tentatively match{' '}
                <InlineMath math="x" /> and <InlineMath math="y" />.
              </li>
              <li>
                If <InlineMath math="y" /> prefers <InlineMath math="x" /> to their
                current partner <InlineMath math="x'" />, replace:{' '}
                <InlineMath math="x'" /> becomes free, <InlineMath math="x" /> and{' '}
                <InlineMath math="y" /> are matched.
              </li>
              <li>Otherwise, <InlineMath math="x" /> remains free.</li>
            </ul>
          </li>
          <li>Return the final matching.</li>
        </ol>
      </Definition>

      <Theorem title="Theorem 3.2.18 (Properties of Gale-Shapley)">
        <p>The Gale-Shapley algorithm:</p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            Always terminates with a stable matching in <InlineMath math="O(n^2)" />{' '}
            time.
          </li>
          <li>
            Produces the <strong>proposer-optimal</strong> stable matching: each
            proposer gets their best partner among all stable matchings.
          </li>
          <li>
            Produces the <strong>receiver-pessimal</strong> stable matching: each
            receiver gets their worst partner among all stable matchings.
          </li>
        </ol>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              <strong>Part 1:</strong> Shown in the proof of Theorem 3.2.17. At most{' '}
              <InlineMath math="n^2" /> proposals, each taking <InlineMath math="O(1)" />{' '}
              time with proper data structures.
            </p>
            <p className="mt-2">
              <strong>Part 2 (Proposer-optimal):</strong> Call <InlineMath math="y" /> a{' '}
              <em>valid partner</em> for <InlineMath math="x" /> if some stable matching pairs
              them. We show each proposer is matched to their best valid partner.
            </p>
            <p className="mt-2">
              Suppose some proposer <InlineMath math="x" /> is rejected by a valid partner
              during the algorithm. Consider the first such rejection: <InlineMath math="y" />{' '}
              rejects <InlineMath math="x" /> for <InlineMath math="x'" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="M" /> be a stable matching where{' '}
              <InlineMath math="x" /> is paired with <InlineMath math="y" />. In{' '}
              <InlineMath math="M" />, let <InlineMath math="x'" /> be paired with{' '}
              <InlineMath math="y'" />.
            </p>
            <p className="mt-2">
              Since this is the first rejection by a valid partner, <InlineMath math="x'" />{' '}
              has not yet been rejected by any valid partner. So <InlineMath math="x'" />{' '}
              prefers <InlineMath math="y" /> to <InlineMath math="y'" /> (otherwise{' '}
              <InlineMath math="x'" /> would have proposed to <InlineMath math="y'" /> first).
            </p>
            <p className="mt-2">
              Also, <InlineMath math="y" /> prefers <InlineMath math="x'" /> to{' '}
              <InlineMath math="x" /> (that's why <InlineMath math="y" /> rejected{' '}
              <InlineMath math="x" />).
            </p>
            <p className="mt-2">
              But then <InlineMath math="(x', y)" /> is a blocking pair for{' '}
              <InlineMath math="M" />—contradiction. So no proposer is ever rejected by a
              valid partner.
            </p>
            <p className="mt-2">
              <strong>Part 3 (Receiver-pessimal):</strong> Let <InlineMath math="M" /> be the
              proposer-optimal matching. Suppose receiver <InlineMath math="y" /> is matched
              to <InlineMath math="x" /> in <InlineMath math="M" /> but prefers{' '}
              <InlineMath math="x" /> less than some partner <InlineMath math="x'" /> in
              another stable matching <InlineMath math="M'" />.
            </p>
            <p className="mt-2">
              In <InlineMath math="M'" />, proposer <InlineMath math="x" /> is matched to some{' '}
              <InlineMath math="y' \neq y" />. Since <InlineMath math="M" /> is proposer-optimal,{' '}
              <InlineMath math="x" /> prefers <InlineMath math="y" /> to <InlineMath math="y'" />.
            </p>
            <p className="mt-2">
              But <InlineMath math="y" /> prefers <InlineMath math="x'" /> to{' '}
              <InlineMath math="x" />, so <InlineMath math="(x, y)" /> blocks{' '}
              <InlineMath math="M'" />—contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Medical Residency Matching">
        <p>
          The National Resident Matching Program (NRMP) uses a variant of Gale-Shapley
          to match medical school graduates to residency programs. Each year, about
          40,000 applicants and 30,000 positions are matched.
        </p>
        <p className="mt-2">
          Originally hospitals proposed (giving hospitals their optimal matching). Now
          applicants propose, giving applicants better outcomes on average.
        </p>
        <p className="mt-2 text-dark-300">
          Alvin Roth, Lloyd Shapley, and David Gale received the 2012 Nobel Prize in
          Economics partly for this work.
        </p>
      </Example>

      <h2>Min-Max Theorems</h2>

      <p>
        The König-Egerváry Theorem shows that maximum matching equals minimum vertex
        cover in bipartite graphs. Such "min-max" relations are fundamental in
        combinatorial optimization.
      </p>

      <Definition title="Min-Max Theorem">
        <p>
          A <strong>min-max theorem</strong> states that the maximum value of one
          optimization problem equals the minimum value of a related problem. Finding
          an optimal solution to either problem proves optimality for both.
        </p>
      </Definition>

      <p>
        For matchings in bipartite graphs, several min-max relations hold:
      </p>

      <Theorem title="Summary of Min-Max Relations">
        <p>For an <InlineMath math="X, Y" />-bigraph <InlineMath math="G" />:</p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\alpha'(G) = \beta(G)" /> (König-Egerváry)
          </li>
          <li>
            <InlineMath math="\alpha(G) = n(G) - \beta(G)" /> (Gallai)
          </li>
          <li>
            Maximum matching = Minimum vertex cover
          </li>
          <li>
            Maximum independent set = <InlineMath math="n" /> − Minimum vertex cover
          </li>
        </ul>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Augmenting Path Algorithm:</strong> Finds maximum matching in{' '}
          <InlineMath math="O(mn)" /> by repeatedly finding and using augmenting
          paths.
        </li>
        <li>
          <strong>Hopcroft-Karp:</strong> Improves to{' '}
          <InlineMath math="O(m\sqrt{n})" /> by finding multiple shortest augmenting
          paths per phase.
        </li>
        <li>
          <strong>Weighted Matching:</strong> The Hungarian algorithm solves the
          assignment problem in <InlineMath math="O(n^3)" /> using feasible labelings.
        </li>
        <li>
          <strong>Stable Matching:</strong> Gale-Shapley always finds a stable
          matching in bipartite systems. The proposing side gets their optimal outcome.
        </li>
        <li>
          <strong>Applications:</strong> Job assignment, organ donation, medical
          residency matching, online advertising, and more.
        </li>
      </ul>
    </LessonLayout>
  );
}
