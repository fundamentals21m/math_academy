import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <p>
        Perfect graphs are those where the chromatic number equals the clique number for
        every induced subgraph. This class includes many important graph families and has
        beautiful structural theory. The Strong Perfect Graph Theorem, proved in 2002,
        characterizes perfect graphs by forbidden induced subgraphs.
      </p>

      <h2>Perfect Graph Basics</h2>

      <Definition title="Perfect Graph">
        <p>
          A graph <InlineMath math="G" /> is <strong>perfect</strong> if for every
          induced subgraph <InlineMath math="H" /> of <InlineMath math="G" />:
        </p>
        <MathBlock math="\chi(H) = \omega(H)" />
        <p className="mt-2">
          where <InlineMath math="\omega(H)" /> is the clique number and{' '}
          <InlineMath math="\chi(H)" /> is the chromatic number.
        </p>
      </Definition>

      <Example title="Perfect Graph Classes">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Bipartite graphs:</strong> <InlineMath math="\omega = 2" />,{' '}
            <InlineMath math="\chi = 2" /> (if has edges)
          </li>
          <li>
            <strong>Chordal graphs:</strong> No induced <InlineMath math="C_k" /> for{' '}
            <InlineMath math="k \geq 4" />
          </li>
          <li>
            <strong>Interval graphs:</strong> Intersection graphs of intervals
          </li>
          <li>
            <strong>Comparability graphs:</strong> Transitively orientable graphs
          </li>
          <li>
            <strong>Split graphs:</strong> Vertices partition into clique and independent
            set
          </li>
        </ul>
      </Example>

      <h2>The Perfect Graph Theorem</h2>

      <Theorem title="Weak Perfect Graph Theorem (Lovász, 1972)">
        <p>
          A graph <InlineMath math="G" /> is perfect if and only if its complement{' '}
          <InlineMath math="\overline{G}" /> is perfect.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Key Insight
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              This is surprising because chromatic number and clique number behave very
              differently under complementation. Lovász proved this using the{' '}
              <strong>theta function</strong> <InlineMath math="\vartheta(G)" />, which
              lies between <InlineMath math="\alpha(G)" /> and{' '}
              <InlineMath math="\chi(\overline{G})" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Definition title="Odd Holes and Antiholes">
        <p>
          An <strong>odd hole</strong> is an induced cycle{' '}
          <InlineMath math="C_{2k+1}" /> with <InlineMath math="k \geq 2" />.
        </p>
        <p className="mt-2">
          An <strong>odd antihole</strong> is the complement of an odd hole:{' '}
          <InlineMath math="\overline{C_{2k+1}}" />.
        </p>
      </Definition>

      <Example title="Why C₅ and its Complement are Imperfect">
        <p>
          <InlineMath math="C_5" />: <InlineMath math="\omega = 2" /> (no triangle),
          but <InlineMath math="\chi = 3" /> (odd cycle). Not perfect.
        </p>
        <p className="mt-2">
          <InlineMath math="\overline{C_5}" />: Also <InlineMath math="C_5" />{' '}
          (self-complementary!). Also imperfect.
        </p>
        <p className="mt-2">
          <InlineMath math="C_7" />: <InlineMath math="\omega = 2" />,{' '}
          <InlineMath math="\chi = 3" />. <InlineMath math="\overline{C_7}" />:{' '}
          <InlineMath math="\omega = 3" />, <InlineMath math="\chi = 4" />.
        </p>
      </Example>

      <Theorem title="Strong Perfect Graph Theorem (Chudnovsky et al., 2006)">
        <p>
          A graph is perfect if and only if it contains no odd hole and no odd antihole
          as an induced subgraph.
        </p>
        <p className="mt-2 text-dark-300">
          Conjectured by Claude Berge in 1961. Proved 40+ years later by Maria
          Chudnovsky, Neil Robertson, Paul Seymour, and Robin Thomas using a 179-page
          proof.
        </p>
      </Theorem>

      <h2>Recognition and Optimization</h2>

      <Theorem title="Perfect Graph Recognition">
        <p>
          Perfect graphs can be recognized in polynomial time.
        </p>
        <p className="mt-2">
          The algorithm detects odd holes and antiholes using sophisticated structural
          decomposition (Chudnovsky et al., 2005).
        </p>
      </Theorem>

      <Theorem title="Polynomial Optimization on Perfect Graphs">
        <p>
          For perfect graphs, the following problems can be solved in polynomial time:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Maximum clique:</strong> Find <InlineMath math="\omega(G)" />
          </li>
          <li>
            <strong>Maximum independent set:</strong> Find <InlineMath math="\alpha(G)" />
          </li>
          <li>
            <strong>Chromatic number:</strong> Find <InlineMath math="\chi(G)" />
          </li>
          <li>
            <strong>Clique cover:</strong> Partition vertices into cliques
          </li>
        </ul>
        <p className="mt-2 text-dark-300">
          These use the ellipsoid method and the Lovász theta function.
        </p>
      </Theorem>

      <h2>Berge Graphs</h2>

      <Definition title="Berge Graph">
        <p>
          A graph is <strong>Berge</strong> if it contains no odd hole and no odd
          antihole.
        </p>
        <p className="mt-2">
          The Strong Perfect Graph Theorem says: Berge = Perfect.
        </p>
      </Definition>

      <h2>Imperfect Graphs</h2>

      <Definition title="Imperfection Ratio">
        <p>
          The <strong>imperfection ratio</strong> of <InlineMath math="G" /> is:
        </p>
        <MathBlock math="\text{imp}(G) = \max_{H \subseteq G} \frac{\chi(H)}{\omega(H)}" />
        <p className="mt-2">
          <InlineMath math="G" /> is perfect iff <InlineMath math="\text{imp}(G) = 1" />.
        </p>
      </Definition>

      <Example title="Imperfection of Odd Cycles">
        <p>
          For <InlineMath math="C_{2k+1}" />:{' '}
          <InlineMath math="\text{imp}(C_{2k+1}) = \frac{3}{2}" />.
        </p>
        <p className="mt-2">
          As <InlineMath math="k \to \infty" />, odd cycles approach{' '}
          <InlineMath math="\text{imp} = 3/2" />.
        </p>
      </Example>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Perfect:</strong> <InlineMath math="\chi(H) = \omega(H)" /> for all
          induced <InlineMath math="H" />.
        </li>
        <li>
          <strong>Weak Perfect Graph Theorem:</strong> <InlineMath math="G" /> perfect
          iff <InlineMath math="\overline{G}" /> perfect.
        </li>
        <li>
          <strong>Strong Perfect Graph Theorem:</strong> Perfect = No odd holes or
          antiholes.
        </li>
        <li>
          <strong>Perfect Families:</strong> Bipartite, chordal, interval, comparability.
        </li>
        <li>
          <strong>Imperfect:</strong> <InlineMath math="C_{2k+1}" /> and{' '}
          <InlineMath math="\overline{C_{2k+1}}" /> are minimal imperfect.
        </li>
        <li>
          <strong>Algorithms:</strong> Maximum clique, chromatic number solvable in
          polynomial time for perfect graphs.
        </li>
      </ul>
    </LessonLayout>
  );
}
