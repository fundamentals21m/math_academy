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

      <Theorem
        title="Base Properties"
        proof={
          <>
            <p>
              <strong>Equal cardinality:</strong> Suppose bases <InlineMath math="B_1" /> and{' '}
              <InlineMath math="B_2" /> have <InlineMath math="|B_1| < |B_2|" />.
              By the exchange property (I3) applied to independent sets{' '}
              <InlineMath math="B_1" /> and <InlineMath math="B_2" />, there exists{' '}
              <InlineMath math="e \in B_2 - B_1" /> with <InlineMath math="B_1 \cup \{'{'}e{'}'}" />{' '}
              independent. This contradicts maximality of <InlineMath math="B_1" />.
            </p>
            <p className="mt-2">
              <strong>Base exchange:</strong> Let <InlineMath math="e \in B_1 - B_2" />.
              The set <InlineMath math="B_1 - e" /> is independent with{' '}
              <InlineMath math="|B_1 - e| = |B_1| - 1 < |B_2|" />.
            </p>
            <p className="mt-2">
              By (I3), there exists <InlineMath math="f \in B_2 - (B_1 - e) = B_2 - B_1 + e" />{' '}
              such that <InlineMath math="(B_1 - e) \cup \{'{'}f{'}'}" /> is independent.
              Since <InlineMath math="e \notin B_2" />, we have{' '}
              <InlineMath math="f \in B_2 - B_1" />.
            </p>
            <p className="mt-2">
              The set <InlineMath math="B_1 - e + f" /> has size <InlineMath math="|B_1|" />{' '}
              and is independent, hence a base.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Greedy Algorithm for Matroids"
        proof={
          <>
            <p>
              Let <InlineMath math="B^*" /> be the greedy solution and{' '}
              <InlineMath math="B" /> be any base. We show{' '}
              <InlineMath math="w(B^*) \geq w(B)" />.
            </p>
            <p className="mt-2">
              Order <InlineMath math="B^* = \{'{'}e_1, \ldots, e_r{'}'}" /> by decreasing
              weight and <InlineMath math="B = \{'{'}f_1, \ldots, f_r{'}'}" /> similarly.
              We claim <InlineMath math="w(e_i) \geq w(f_i)" /> for all{' '}
              <InlineMath math="i" />.
            </p>
            <p className="mt-2">
              <strong>By contradiction:</strong> Suppose <InlineMath math="i" /> is the
              first index with <InlineMath math="w(e_i) < w(f_i)" />.
              Consider <InlineMath math="I = \{'{'}e_1, \ldots, e_{'{'}i-1{'}'}{'}'}" /> and{' '}
              <InlineMath math="J = \{'{'}f_1, \ldots, f_i{'}'}" />.
            </p>
            <p className="mt-2">
              We have <InlineMath math="|I| < |J|" />, so by (I3), some{' '}
              <InlineMath math="f_j \in J - I" /> can be added to <InlineMath math="I" />.
              Since <InlineMath math="w(f_j) \geq w(f_i) > w(e_i)" />, the greedy algorithm
              would have chosen <InlineMath math="f_j" /> before <InlineMath math="e_i" />,
              contradiction.
            </p>
            <p className="mt-2">
              Thus <InlineMath math="w(B^*) = \sum w(e_i) \geq \sum w(f_i) = w(B)" />.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Characterization by Greedy"
        proof={
          <>
            <p>
              <strong>(Matroid → greedy works):</strong> Proved above.
            </p>
            <p className="mt-2">
              <strong>(Greedy works → matroid):</strong> Suppose{' '}
              <InlineMath math="(E, \mathcal{I})" /> is hereditary but not a matroid.
              Then (I3) fails: there exist <InlineMath math="I, J \in \mathcal{I}" /> with{' '}
              <InlineMath math="|I| < |J|" /> but no element of <InlineMath math="J - I" />{' '}
              can be added to <InlineMath math="I" />.
            </p>
            <p className="mt-2">
              <strong>Construct bad weights:</strong> Define:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <InlineMath math="w(e) = 1 + \epsilon" /> for <InlineMath math="e \in I" />
              </li>
              <li>
                <InlineMath math="w(e) = 1" /> for <InlineMath math="e \in J - I" />
              </li>
              <li>
                <InlineMath math="w(e) = 0" /> otherwise
              </li>
            </ul>
            <p className="mt-2">
              For small <InlineMath math="\epsilon > 0" />, greedy selects all of{' '}
              <InlineMath math="I" /> first (higher weight), then cannot add elements
              of <InlineMath math="J - I" />. The greedy solution has weight{' '}
              <InlineMath math="|I|(1 + \epsilon)" />, but{' '}
              <InlineMath math="J" /> achieves <InlineMath math="|J| > |I|(1 + \epsilon)" />{' '}
              for small enough <InlineMath math="\epsilon" />. Greedy fails.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Matroid Intersection Theorem"
        proof={
          <>
            <p>
              <strong>Upper bound (weak duality):</strong> For any{' '}
              <InlineMath math="A \subseteq E" /> and any common independent set{' '}
              <InlineMath math="I \in \mathcal{I}_1 \cap \mathcal{I}_2" />:
            </p>
            <MathBlock math="|I| = |I \cap A| + |I \cap (E-A)| \leq r_1(A) + r_2(E-A)" />
            <p className="mt-2">
              since <InlineMath math="I \cap A" /> is independent in{' '}
              <InlineMath math="M_1" /> and <InlineMath math="I \cap (E-A)" /> is
              independent in <InlineMath math="M_2" />.
            </p>
            <p className="mt-2">
              <strong>Equality (strong duality):</strong> The proof uses an augmenting
              path algorithm. Given a common independent set <InlineMath math="I" />,
              construct an auxiliary directed bipartite graph where:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>One part is <InlineMath math="I" />, other part is <InlineMath math="E - I" /></li>
              <li>
                Arcs encode which elements can be exchanged while preserving independence
              </li>
            </ul>
            <p className="mt-2">
              An augmenting path from <InlineMath math="E - I" /> to <InlineMath math="E - I" />{' '}
              (through <InlineMath math="I" />) allows increasing <InlineMath math="|I|" />.
              When no augmenting path exists, <InlineMath math="I" /> is maximum and
              the partition <InlineMath math="A" /> achieving equality can be constructed
              from the reachable set.
            </p>
          </>
        }
      >
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
