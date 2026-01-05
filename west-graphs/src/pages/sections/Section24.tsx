import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <p>
        Matroids abstract the notion of linear independence from vector spaces and
        forests from graphs. They provide a unifying framework for many combinatorial
        optimization problems, explaining why greedy algorithms work for minimum spanning
        trees. The theory reveals deep connections between linear algebra, graph theory,
        and combinatorics.
      </p>

      <h2>Matroid Definition</h2>

      <Definition title="Matroid (Independence Axioms)">
        <p>
          A <strong>matroid</strong> <InlineMath math="M = (E, \mathcal{I})" /> consists
          of a finite set <InlineMath math="E" /> (the <strong>ground set</strong>) and a
          collection <InlineMath math="\mathcal{I}" /> of subsets of{' '}
          <InlineMath math="E" /> (the <strong>independent sets</strong>) satisfying:
        </p>
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>
            <strong>(I1)</strong> <InlineMath math="\emptyset \in \mathcal{I}" />
          </li>
          <li>
            <strong>(I2)</strong> If <InlineMath math="I \in \mathcal{I}" /> and{' '}
            <InlineMath math="J \subseteq I" />, then{' '}
            <InlineMath math="J \in \mathcal{I}" /> (hereditary)
          </li>
          <li>
            <strong>(I3)</strong> If <InlineMath math="I, J \in \mathcal{I}" /> with{' '}
            <InlineMath math="|I| < |J|" />, then{' '}
            <InlineMath math="\exists e \in J - I" /> with{' '}
            <InlineMath math="I \cup \{e\} \in \mathcal{I}" /> (exchange property)
          </li>
        </ol>
      </Definition>

      <Example title="Graphic Matroid">
        <p>
          For graph <InlineMath math="G" />, let <InlineMath math="E = E(G)" /> and{' '}
          <InlineMath math="\mathcal{I}" /> = sets of edges forming forests.
        </p>
        <p className="mt-2">
          <strong>Verify axioms:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>(I1): Empty set is a forest. ✓</li>
          <li>(I2): Subsets of forests are forests. ✓</li>
          <li>
            (I3): If forest <InlineMath math="J" /> has more edges than forest{' '}
            <InlineMath math="I" />, some edge of <InlineMath math="J" /> can be added
            to <InlineMath math="I" /> without creating a cycle. ✓
          </li>
        </ul>
      </Example>

      <Example title="Vector Matroid">
        <p>
          For a matrix <InlineMath math="A" /> with columns{' '}
          <InlineMath math="v_1, \ldots, v_n" />, let{' '}
          <InlineMath math="E = \{1, \ldots, n\}" /> and{' '}
          <InlineMath math="I \in \mathcal{I}" /> iff{' '}
          <InlineMath math="\{v_i : i \in I\}" /> is linearly independent.
        </p>
        <p className="mt-2">
          The exchange property (I3) follows from the Steinitz exchange lemma.
        </p>
      </Example>

      <h2>Basic Matroid Terminology</h2>

      <Definition title="Dependent Sets, Circuits, Bases">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Dependent:</strong> A set not in <InlineMath math="\mathcal{I}" />
          </li>
          <li>
            <strong>Circuit:</strong> A minimal dependent set
          </li>
          <li>
            <strong>Base:</strong> A maximal independent set
          </li>
          <li>
            <strong>Rank:</strong> <InlineMath math="r(A)" /> = max size of independent
            subset of <InlineMath math="A" />
          </li>
        </ul>
      </Definition>

      <Theorem title="Base Properties">
        <p>
          All bases of a matroid have the same cardinality (the <strong>rank</strong> of
          the matroid).
        </p>
        <p className="mt-2">
          <strong>Base exchange:</strong> If <InlineMath math="B_1, B_2" /> are bases
          and <InlineMath math="e \in B_1 - B_2" />, then{' '}
          <InlineMath math="\exists f \in B_2 - B_1" /> such that{' '}
          <InlineMath math="B_1 - e + f" /> is a base.
        </p>
      </Theorem>

      <Example title="Graphic Matroid Terms">
        <p>
          In graphic matroid <InlineMath math="M(G)" />:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Circuits:</strong> Cycles of <InlineMath math="G" />
          </li>
          <li>
            <strong>Bases:</strong> Spanning forests (spanning trees if connected)
          </li>
          <li>
            <strong>Rank:</strong> <InlineMath math="n - c" /> where{' '}
            <InlineMath math="c" /> = components
          </li>
        </ul>
      </Example>

      <h2>Matroid Duality</h2>

      <Definition title="Dual Matroid">
        <p>
          The <strong>dual</strong> <InlineMath math="M^*" /> of matroid{' '}
          <InlineMath math="M = (E, \mathcal{I})" /> has:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>Ground set: <InlineMath math="E" /></li>
          <li>
            Bases: <InlineMath math="\{E - B : B \text{ is a base of } M\}" />
          </li>
        </ul>
        <p className="mt-2">
          The dual of the dual is the original: <InlineMath math="(M^*)^* = M" />.
        </p>
      </Definition>

      <Example title="Dual of Graphic Matroid">
        <p>
          For a planar graph <InlineMath math="G" />, the dual of{' '}
          <InlineMath math="M(G)" /> is <InlineMath math="M(G^*)" />, where{' '}
          <InlineMath math="G^*" /> is the planar dual graph.
        </p>
        <p className="mt-2">
          <strong>Circuits of <InlineMath math="M^*" />:</strong> Minimal edge cuts
          (bonds) of <InlineMath math="G" />.
        </p>
      </Example>

      <h2>Greedy Algorithm</h2>

      <Theorem title="Greedy Algorithm for Matroids">
        <p>
          Given a weighted matroid <InlineMath math="(E, \mathcal{I}, w)" />, the greedy
          algorithm finds a maximum-weight base:
        </p>
        <ol className="mt-2 list-decimal list-inside">
          <li>
            Sort elements by weight: <InlineMath math="w(e_1) \geq \cdots \geq w(e_n)" />
          </li>
          <li>
            Initialize <InlineMath math="I = \emptyset" />
          </li>
          <li>
            For each <InlineMath math="e_i" />: if{' '}
            <InlineMath math="I \cup \{e_i\} \in \mathcal{I}" />, set{' '}
            <InlineMath math="I = I \cup \{e_i\}" />
          </li>
        </ol>
        <p className="mt-2">
          This gives an <strong>optimal</strong> solution.
        </p>
      </Theorem>

      <Theorem title="Characterization by Greedy">
        <p>
          A hereditary system <InlineMath math="(E, \mathcal{I})" /> is a matroid if and
          only if the greedy algorithm produces a maximum-weight base for every weight
          function.
        </p>
      </Theorem>

      <Example title="Kruskal's Algorithm">
        <p>
          Kruskal's algorithm for minimum spanning tree is the greedy algorithm on the
          graphic matroid with weights = negative edge weights.
        </p>
        <p className="mt-2">
          It works because graphic matroids are matroids!
        </p>
      </Example>

      <h2>Matroid Intersection</h2>

      <Definition title="Matroid Intersection">
        <p>
          Given matroids <InlineMath math="M_1 = (E, \mathcal{I}_1)" /> and{' '}
          <InlineMath math="M_2 = (E, \mathcal{I}_2)" /> on the same ground set, the{' '}
          <strong>matroid intersection</strong> problem asks for the largest set in{' '}
          <InlineMath math="\mathcal{I}_1 \cap \mathcal{I}_2" />.
        </p>
      </Definition>

      <Theorem title="Matroid Intersection Theorem">
        <p>
          The maximum size of a common independent set equals:
        </p>
        <MathBlock math="\max |I| = \min_{A \subseteq E} (r_1(A) + r_2(E - A))" />
        <p className="mt-2">
          where <InlineMath math="r_1, r_2" /> are the rank functions.
        </p>
        <p className="mt-2 text-dark-300">
          This generalizes many min-max theorems (König, Menger, etc.).
        </p>
      </Theorem>

      <Example title="Bipartite Matching as Matroid Intersection">
        <p>
          For bipartite graph <InlineMath math="G = (X \cup Y, E)" />, define:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <InlineMath math="M_1" />: Partition matroid on <InlineMath math="E" /> where
            edges incident to same <InlineMath math="x \in X" /> are dependent
          </li>
          <li>
            <InlineMath math="M_2" />: Same for <InlineMath math="Y" />
          </li>
        </ul>
        <p className="mt-2">
          Common independent sets = matchings. Max intersection = max matching.
        </p>
      </Example>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Matroid:</strong> Hereditary system with exchange property; abstracts
          independence.
        </li>
        <li>
          <strong>Examples:</strong> Graphic (forests), vector (linear independence),
          partition, uniform.
        </li>
        <li>
          <strong>Dual:</strong> Bases complement to dual bases.
        </li>
        <li>
          <strong>Greedy:</strong> Greedy algorithm is optimal on matroids; this
          characterizes them.
        </li>
        <li>
          <strong>Intersection:</strong> Max common independent set has min-max formula;
          generalizes matching.
        </li>
        <li>
          <strong>Unification:</strong> Matroids explain why greedy works for MST but
          not for other problems.
        </li>
      </ul>
    </LessonLayout>
  );
}
