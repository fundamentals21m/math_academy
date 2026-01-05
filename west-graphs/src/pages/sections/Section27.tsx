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

      <Theorem title="Expected Number of Edges">
        <p>
          In <InlineMath math="G(n, p)" />:
        </p>
        <MathBlock math="\mathbb{E}[|E|] = p \binom{n}{2} \approx \frac{pn^2}{2}" />
      </Theorem>

      <Theorem title="Expected Number of Triangles">
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

      <Theorem title="Threshold for Containing H">
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

      <Theorem title="Connectivity Threshold">
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

      <Theorem title="Isolated Vertices">
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

      <Theorem title="Phase Transition at p = 1/n">
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

      <Theorem title="Existence via Expectation">
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

      <Theorem title="Chromatic Number of G(n, 1/2)">
        <p>
          For <InlineMath math="G \sim G(n, 1/2)" />:
        </p>
        <MathBlock math="\chi(G) = (1 + o(1)) \frac{n}{2\log_2 n}" />
        <p className="mt-2">
          almost surely.
        </p>
      </Theorem>

      <Theorem title="Concentration">
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
