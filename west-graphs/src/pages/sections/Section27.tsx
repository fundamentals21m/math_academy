import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { RandomGraphGenerator } from '@/components/visualizations';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <p>
        Random graph theory studies the typical properties of graphs when edges are
        chosen randomly. Introduced by Erdős and Rényi in 1959, this field reveals that
        graph properties often have sharp thresholds: small changes in edge probability
        cause dramatic transitions. Random graphs also provide existence proofs for
        graphs with specific properties through the probabilistic method.
      </p>

      <h2>Random Graph Models</h2>

      <Definition title="Erdős-Rényi Model G(n,p)">
        <p>
          The <strong>Erdős-Rényi random graph</strong>{' '}
          <InlineMath math="G(n, p)" /> is a probability distribution on graphs with{' '}
          <InlineMath math="n" /> labeled vertices where each of the{' '}
          <InlineMath math="\binom{n}{2}" /> possible edges appears independently with
          probability <InlineMath math="p" />.
        </p>
      </Definition>

      <Definition title="Alternative Model G(n,m)">
        <p>
          <InlineMath math="G(n, m)" /> is the uniform distribution on all graphs with{' '}
          <InlineMath math="n" /> vertices and exactly <InlineMath math="m" /> edges.
        </p>
        <p className="mt-2 text-dark-300">
          When <InlineMath math="m \approx p\binom{n}{2}" />, the models behave
          similarly.
        </p>
      </Definition>

      <RandomGraphGenerator className="my-8" />

      <h2>Basic Properties</h2>

      <Theorem
        title="Expected Number of Edges"
        proof={
          <>
            <p>
              Let <InlineMath math="X_e" /> be the indicator variable for edge{' '}
              <InlineMath math="e" /> being present. Then <InlineMath math="X_e = 1" />{' '}
              with probability <InlineMath math="p" /> and <InlineMath math="X_e = 0" />{' '}
              with probability <InlineMath math="1 - p" />.
            </p>
            <p className="mt-2">
              The total number of edges is <InlineMath math="|E| = \sum_e X_e" />.
            </p>
            <p className="mt-2">
              By linearity of expectation:
            </p>
            <MathBlock math="\mathbb{E}[|E|] = \mathbb{E}\left[\sum_e X_e\right] = \sum_e \mathbb{E}[X_e] = \sum_e p = p \cdot \binom{n}{2}" />
            <p className="mt-2">
              Since <InlineMath math="\binom{n}{2} = \frac{n(n-1)}{2} \approx \frac{n^2}{2}" />{' '}
              for large <InlineMath math="n" />, we get{' '}
              <InlineMath math="\mathbb{E}[|E|] \approx \frac{pn^2}{2}" />.
            </p>
          </>
        }
      >
        <p>
          In <InlineMath math="G(n, p)" />:
        </p>
        <MathBlock math="\mathbb{E}[|E|] = p \binom{n}{2} \approx \frac{pn^2}{2}" />
      </Theorem>

      <Theorem
        title="Expected Number of Triangles"
        proof={
          <>
            <p>
              Let <InlineMath math="X_T" /> be the indicator variable for triangle{' '}
              <InlineMath math="T = \{'{'}u, v, w{'}'}" /> being present (all three edges
              exist).
            </p>
            <p className="mt-2">
              Since edges are independent, the probability that all three edges of{' '}
              <InlineMath math="T" /> exist is <InlineMath math="p^3" />.
            </p>
            <p className="mt-2">
              The number of triangles is <InlineMath math="\sum_T X_T" /> over all{' '}
              <InlineMath math="\binom{n}{3}" /> triples.
            </p>
            <p className="mt-2">
              By linearity of expectation:
            </p>
            <MathBlock math="\mathbb{E}[\#\text{ triangles}] = \sum_T \mathbb{E}[X_T] = \binom{n}{3} \cdot p^3" />
            <p className="mt-2">
              Since <InlineMath math="\binom{n}{3} = \frac{n(n-1)(n-2)}{6} \approx \frac{n^3}{6}" />,
              we get approximately <InlineMath math="\frac{n^3 p^3}{6}" />.
            </p>
          </>
        }
      >
        <MathBlock math="\mathbb{E}[\#\text{ triangles}] = \binom{n}{3} p^3 \approx \frac{n^3 p^3}{6}" />
      </Theorem>

      <Example title="Sparse vs Dense Random Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="p = 1/n^2" />: Very sparse, almost no edges
          </li>
          <li>
            <InlineMath math="p = 1/n" />: Average degree constant
          </li>
          <li>
            <InlineMath math="p = \log n / n" />: Around connectivity threshold
          </li>
          <li>
            <InlineMath math="p = 1/2" />: Dense, "typical" random graph
          </li>
        </ul>
      </Example>

      <h2>Threshold Functions</h2>

      <Definition title="Threshold Function">
        <p>
          A function <InlineMath math="t(n)" /> is a <strong>threshold function</strong>{' '}
          for property <InlineMath math="\mathcal{P}" /> if:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <InlineMath math="p(n)/t(n) \to 0 \implies \Pr[G(n,p) \text{ has } \mathcal{P}] \to 0" />
          </li>
          <li>
            <InlineMath math="p(n)/t(n) \to \infty \implies \Pr[G(n,p) \text{ has } \mathcal{P}] \to 1" />
          </li>
        </ul>
        <p className="mt-2">
          A <strong>sharp threshold</strong> occurs when the transition happens over a
          small range of <InlineMath math="p" />.
        </p>
      </Definition>

      <Theorem
        title="Threshold for Containing H"
        proof={
          <>
            <p>
              <strong>Expected number of copies:</strong> Let <InlineMath math="X" />{' '}
              count copies of <InlineMath math="H" /> in <InlineMath math="G(n, p)" />.
            </p>
            <MathBlock math="\mathbb{E}[X] = \binom{n}{v} \cdot v! \cdot a(H) \cdot p^e \approx n^v p^e" />
            <p className="mt-2">
              where <InlineMath math="a(H)" /> accounts for automorphisms.
            </p>
            <p className="mt-2">
              <strong>Threshold intuition:</strong> When <InlineMath math="p = n^{-v/e}" />:
            </p>
            <MathBlock math="\mathbb{E}[X] \approx n^v \cdot (n^{-v/e})^e = n^v \cdot n^{-v} = 1" />
            <p className="mt-2">
              <strong>Below threshold:</strong> When <InlineMath math="p \ll n^{-v/e}" />,
              the expected number of copies <InlineMath math="\to 0" />, so by Markov's
              inequality, <InlineMath math="\Pr[X \geq 1] \to 0" />.
            </p>
            <p className="mt-2">
              <strong>Above threshold:</strong> When <InlineMath math="p \gg n^{-v/e}" />,
              the expected number <InlineMath math="\to \infty" />. For balanced{' '}
              <InlineMath math="H" />, second moment methods show{' '}
              <InlineMath math="\Pr[X \geq 1] \to 1" />.
            </p>
          </>
        }
      >
        <p>
          For a graph <InlineMath math="H" /> with <InlineMath math="v" /> vertices and{' '}
          <InlineMath math="e" /> edges, the threshold for <InlineMath math="G(n, p)" />{' '}
          to contain <InlineMath math="H" /> is:
        </p>
        <MathBlock math="t(n) = n^{-v/e}" />
        <p className="mt-2 text-dark-300">
          More precisely, when <InlineMath math="H" /> is "balanced": max density over
          all subgraphs equals density of <InlineMath math="H" />.
        </p>
      </Theorem>

      <Example title="Triangle Threshold">
        <p>
          Triangle: <InlineMath math="v = 3" />, <InlineMath math="e = 3" />. Threshold:{' '}
          <InlineMath math="t(n) = n^{-1} = 1/n" />.
        </p>
        <p className="mt-2">
          If <InlineMath math="p \ll 1/n" />: almost surely no triangles. If{' '}
          <InlineMath math="p \gg 1/n" />: almost surely many triangles.
        </p>
      </Example>

      <h2>Connectivity</h2>

      <Theorem
        title="Connectivity Threshold"
        proof={
          <>
            <p>
              <strong>Key observation:</strong> Near the threshold, the main obstruction
              to connectivity is isolated vertices.
            </p>
            <p className="mt-2">
              <strong>Expected isolated vertices:</strong> Let <InlineMath math="X" />{' '}
              count isolated vertices. A vertex is isolated if all <InlineMath math="n - 1" />{' '}
              potential edges to it are absent:
            </p>
            <MathBlock math="\mathbb{E}[X] = n(1-p)^{n-1}" />
            <p className="mt-2">
              When <InlineMath math="p = \frac{\log n + c}{n}" />:
            </p>
            <MathBlock math="(1-p)^{n-1} \approx e^{-p(n-1)} \approx e^{-\log n - c} = \frac{e^{-c}}{n}" />
            <p className="mt-2">
              So <InlineMath math="\mathbb{E}[X] \approx e^{-c}" />.
            </p>
            <p className="mt-2">
              <strong>Poisson approximation:</strong> The number of isolated vertices
              converges in distribution to <InlineMath math="\text{Poisson}(e^{-c})" />.
              The probability of no isolated vertices is{' '}
              <InlineMath math="e^{-e^{-c}}" />.
            </p>
            <p className="mt-2">
              <strong>Connectivity:</strong> Near the threshold, having no isolated
              vertices is asymptotically equivalent to connectivity (other disconnecting
              structures are rarer), giving the limiting probability.
            </p>
          </>
        }
      >
        <p>
          The threshold for <InlineMath math="G(n, p)" /> to be connected is{' '}
          <InlineMath math="p = \frac{\log n}{n}" />.
        </p>
        <p className="mt-2">
          More precisely: if{' '}
          <InlineMath math="p = \frac{\log n + c}{n}" /> for constant{' '}
          <InlineMath math="c" />:
        </p>
        <MathBlock math="\Pr[G(n,p) \text{ connected}] \to e^{-e^{-c}}" />
        <p className="mt-2 text-dark-300">
          This is a sharp threshold with a specific limiting distribution.
        </p>
      </Theorem>

      <Theorem
        title="Isolated Vertices"
        proof={
          <>
            <p>
              Let <InlineMath math="I_v" /> be the indicator that vertex{' '}
              <InlineMath math="v" /> is isolated (has degree 0).
            </p>
            <MathBlock math="\Pr[I_v = 1] = \Pr[\text{all } n-1 \text{ edges to } v \text{ absent}] = (1-p)^{n-1}" />
            <p className="mt-2">
              The number of isolated vertices is <InlineMath math="\sum_v I_v" />. By
              linearity:
            </p>
            <MathBlock math="\mathbb{E}[\text{isolated vertices}] = \sum_v \mathbb{E}[I_v] = n(1-p)^{n-1}" />
            <p className="mt-2">
              <strong>At threshold:</strong> When <InlineMath math="p = \frac{\log n}{n}" />:
            </p>
            <MathBlock math="(1-p)^{n-1} \approx e^{-p(n-1)} = e^{-(1-1/n)\log n} \approx e^{-\log n} = 1/n" />
            <p className="mt-2">
              So <InlineMath math="\mathbb{E}[\text{isolated}] \approx n \cdot (1/n) = 1" />.
            </p>
            <p className="mt-2">
              This shows the connectivity threshold is precisely where isolated
              vertices disappear on average.
            </p>
          </>
        }
      >
        <p>
          The expected number of isolated vertices in <InlineMath math="G(n, p)" /> is{' '}
          <InlineMath math="n(1-p)^{n-1}" />.
        </p>
        <p className="mt-2">
          When <InlineMath math="p = \frac{\log n}{n}" />, this equals approximately{' '}
          <InlineMath math="n \cdot e^{-\log n} = 1" />. The graph becomes connected
          precisely when the last isolated vertex gets an edge.
        </p>
      </Theorem>

      <h2>Evolution of Random Graphs</h2>

      <Definition title="Giant Component">
        <p>
          A <strong>giant component</strong> is a connected component containing a
          constant fraction of all vertices.
        </p>
      </Definition>

      <Theorem
        title="Phase Transition at p = 1/n"
        proof={
          <>
            <p>
              <strong>Branching process heuristic:</strong> Explore from a vertex by
              BFS. At step <InlineMath math="k" />, a vertex has{' '}
              <InlineMath math="\approx np - 1" /> unexplored neighbors on average.
            </p>
            <p className="mt-2">
              <strong>Subcritical (<InlineMath math="c < 1" />):</strong> With{' '}
              <InlineMath math="p = c/n" />, average degree <InlineMath math="np = c < 1" />.
              The exploration process is a subcritical branching process that dies out
              quickly. Component sizes are <InlineMath math="O(\log n)" />.
            </p>
            <p className="mt-2">
              <strong>Critical (<InlineMath math="c = 1" />):</strong> Average degree is
              exactly 1. The branching process is critical; fluctuations create
              moderately large components of size <InlineMath math="O(n^{2/3})" />.
            </p>
            <p className="mt-2">
              <strong>Supercritical (<InlineMath math="c > 1" />):</strong> Average
              degree exceeds 1. With positive probability, the exploration never dies,
              creating a giant component. The fraction in the giant is approximately{' '}
              <InlineMath math="1 - e^{-cy}" /> where <InlineMath math="y" /> is the
              solution to <InlineMath math="y = 1 - e^{-cy}" />.
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> The giant is unique because once it exists,
              it absorbs any other large structure.
            </p>
          </>
        }
      >
        <p>
          The random graph <InlineMath math="G(n, p)" /> undergoes a{' '}
          <strong>phase transition</strong> at <InlineMath math="p = 1/n" />:
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>
            <InlineMath math="p = c/n" /> with <InlineMath math="c < 1" />: All
            components have <InlineMath math="O(\log n)" /> vertices.
          </li>
          <li>
            <InlineMath math="p = 1/n" />: Largest component has{' '}
            <InlineMath math="O(n^{2/3})" /> vertices.
          </li>
          <li>
            <InlineMath math="p = c/n" /> with <InlineMath math="c > 1" />: Unique
            giant component with <InlineMath math="\Theta(n)" /> vertices; all others{' '}
            <InlineMath math="O(\log n)" />.
          </li>
        </ul>
      </Theorem>

      <h2>The Probabilistic Method</h2>

      <Theorem
        title="Existence via Expectation"
        proof={
          <>
            <p>
              <strong>First moment method:</strong> This follows from basic properties
              of expectation.
            </p>
            <p className="mt-2">
              <strong>For <InlineMath math="X \geq \mu" />:</strong> Suppose for
              contradiction that <InlineMath math="X < \mu" /> for all outcomes. Then
              every term in the expectation is less than <InlineMath math="\mu" />, so{' '}
              <InlineMath math="\mathbb{E}[X] < \mu" />, contradiction.
            </p>
            <p className="mt-2">
              <strong>For <InlineMath math="X \leq \mu" />:</strong> Symmetric argument.
              If <InlineMath math="X > \mu" /> for all outcomes, then{' '}
              <InlineMath math="\mathbb{E}[X] > \mu" />.
            </p>
            <p className="mt-2">
              <strong>Application:</strong> To prove a graph with property{' '}
              <InlineMath math="P" /> exists, define <InlineMath math="X" /> counting
              "bad" structures. If <InlineMath math="\mathbb{E}[X] < 1" />, some graph
              has <InlineMath math="X = 0" /> (no bad structures), hence has property{' '}
              <InlineMath math="P" />.
            </p>
          </>
        }
      >
        <p>
          If the expected value of a random variable <InlineMath math="X" /> is{' '}
          <InlineMath math="\mu" />, then:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            There exists an outcome with <InlineMath math="X \geq \mu" />
          </li>
          <li>
            There exists an outcome with <InlineMath math="X \leq \mu" />
          </li>
        </ul>
      </Theorem>

      <Example title="Large Independent Sets">
        <p>
          We can prove existence of graphs with large independence number but small
          clique number using random graphs:
        </p>
        <p className="mt-2">
          In <InlineMath math="G(n, 1/2)" />: expected clique number ≈{' '}
          <InlineMath math="2\log_2 n" />. Expected independence number also ≈{' '}
          <InlineMath math="2\log_2 n" />. So random graphs have{' '}
          <InlineMath math="\chi \approx n/(2\log n)" /> but{' '}
          <InlineMath math="\omega \approx 2\log n" />.
        </p>
      </Example>

      <h2>Chromatic Number of Random Graphs</h2>

      <Theorem
        title="Chromatic Number of G(n, 1/2)"
        proof={
          <>
            <p>
              <strong>Upper bound:</strong> <InlineMath math="\chi(G) \leq n/\alpha(G)" />{' '}
              (greedy coloring using independent sets). For <InlineMath math="G(n, 1/2)" />,
              the expected number of independent sets of size <InlineMath math="k" /> is:
            </p>
            <MathBlock math="\binom{n}{k} 2^{-\binom{k}{2}}" />
            <p className="mt-2">
              This is less than 1 when <InlineMath math="k > 2\log_2 n + O(1)" />, so{' '}
              <InlineMath math="\alpha(G) \leq (2 + o(1))\log_2 n" /> almost surely.
            </p>
            <p className="mt-2">
              Thus <InlineMath math="\chi(G) \geq n/\alpha(G) \geq (1 - o(1)) \frac{n}{2\log_2 n}" />.
            </p>
            <p className="mt-2">
              <strong>Lower bound:</strong> The fractional chromatic number{' '}
              <InlineMath math="\chi^*(G) \geq n/\alpha(G)" />. Combined with greedy
              coloring analysis, we get:
            </p>
            <MathBlock math="\chi(G) \leq (1 + o(1)) \frac{n}{2\log_2 n}" />
            <p className="mt-2">
              The matching upper and lower bounds give the asymptotic formula.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath math="G \sim G(n, 1/2)" />:
        </p>
        <MathBlock math="\chi(G) = (1 + o(1)) \frac{n}{2\log_2 n}" />
        <p className="mt-2">
          almost surely.
        </p>
      </Theorem>

      <Theorem
        title="Concentration"
        proof={
          <>
            <p>
              <strong>Edge exposure martingale:</strong> Order the potential edges{' '}
              <InlineMath math="e_1, \ldots, e_{\binom{n}{2}}" />. Define{' '}
              <InlineMath math="X_i = \mathbb{E}[\chi(G) | e_1, \ldots, e_i]" />.
            </p>
            <p className="mt-2">
              This is a martingale with <InlineMath math="X_0 = \mathbb{E}[\chi(G)]" />{' '}
              and <InlineMath math="X_m = \chi(G)" />.
            </p>
            <p className="mt-2">
              <strong>Bounded differences:</strong> Each edge changes{' '}
              <InlineMath math="\chi(G)" /> by at most 1, so{' '}
              <InlineMath math="|X_i - X_{i-1}| \leq 1" />.
            </p>
            <p className="mt-2">
              <strong>Azuma-Hoeffding:</strong> By the Azuma-Hoeffding inequality:
            </p>
            <MathBlock math="\Pr[|\chi(G) - \mathbb{E}[\chi(G)]| > t] \leq 2\exp\left(-\frac{t^2}{2m}\right)" />
            <p className="mt-2">
              With <InlineMath math="m = \binom{n}{2} \approx n^2/2" />, setting{' '}
              <InlineMath math="t = c\sqrt{n}" /> gives exponentially small probability,
              proving concentration in an <InlineMath math="O(\sqrt{n})" /> interval.
            </p>
            <p className="mt-2">
              <em>Sharp concentration (constant interval) remains open.</em>
            </p>
          </>
        }
      >
        <p>
          The chromatic number of <InlineMath math="G(n, 1/2)" /> is concentrated in an
          interval of width <InlineMath math="O(\sqrt{n})" />. Sharper concentration is
          a major open problem.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>G(n,p):</strong> Each edge present independently with probability{' '}
          <InlineMath math="p" />.
        </li>
        <li>
          <strong>Thresholds:</strong> Many properties have sharp thresholds; small
          changes in <InlineMath math="p" /> cause dramatic transitions.
        </li>
        <li>
          <strong>Connectivity:</strong> Threshold at{' '}
          <InlineMath math="p = \log n / n" />.
        </li>
        <li>
          <strong>Giant Component:</strong> Phase transition at{' '}
          <InlineMath math="p = 1/n" />.
        </li>
        <li>
          <strong>Probabilistic Method:</strong> Random graphs prove existence of
          extremal structures.
        </li>
        <li>
          <strong>Chromatic Number:</strong> Typically{' '}
          <InlineMath math="\Theta(n/\log n)" /> for <InlineMath math="G(n, 1/2)" />.
        </li>
      </ul>
    </LessonLayout>
  );
}
