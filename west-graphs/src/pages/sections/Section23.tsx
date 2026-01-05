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

      <Theorem
        title="Weak Perfect Graph Theorem (Lovász, 1972)"
        proof={
          <>
            <p>
              <strong>Key relationships:</strong> For any graph <InlineMath math="G" />:{' '}
              <InlineMath math="\omega(\overline{G}) = \alpha(G)" /> and{' '}
              <InlineMath math="\chi(\overline{G}) = \theta(G)" /> (clique cover number).
            </p>
            <p className="mt-2">
              <strong>Lovász's approach:</strong> Define the theta function{' '}
              <InlineMath math="\vartheta(G)" /> satisfying:
            </p>
            <MathBlock math="\alpha(G) \leq \vartheta(G) \leq \chi(\overline{G})" />
            <p className="mt-2">
              Lovász showed <InlineMath math="\vartheta(G) \cdot \vartheta(\overline{G}) = n" />.
            </p>
            <p className="mt-2">
              <strong>If <InlineMath math="G" /> is perfect:</strong> Then{' '}
              <InlineMath math="\chi(H) = \omega(H)" /> for all induced subgraphs{' '}
              <InlineMath math="H" />. For the complement, we need{' '}
              <InlineMath math="\chi(\overline{H}) = \omega(\overline{H})" />.
            </p>
            <p className="mt-2">
              Using <InlineMath math="\omega(\overline{H}) = \alpha(H)" /> and the theta
              function inequalities, perfectness of <InlineMath math="G" /> implies the
              inequalities are tight for all induced subgraphs, which forces{' '}
              <InlineMath math="\overline{G}" /> to also be perfect.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Strong Perfect Graph Theorem (Chudnovsky et al., 2006)"
        proof={
          <>
            <p>
              <strong>Necessity (easy direction):</strong> Odd holes and antiholes are
              imperfect, so a perfect graph cannot contain them as induced subgraphs.
            </p>
            <p className="mt-2">
              For <InlineMath math="C_{2k+1}" /> with <InlineMath math="k \geq 2" />:{' '}
              <InlineMath math="\omega(C_{2k+1}) = 2" /> (no triangles) but{' '}
              <InlineMath math="\chi(C_{2k+1}) = 3" /> (odd cycles need 3 colors).
            </p>
            <p className="mt-2">
              For <InlineMath math="\overline{C_{2k+1}}" />:{' '}
              <InlineMath math="\omega(\overline{C_{2k+1}}) = k" /> but{' '}
              <InlineMath math="\chi(\overline{C_{2k+1}}) = k+1" /> (can be verified).
            </p>
            <p className="mt-2">
              <strong>Sufficiency (hard direction):</strong> The 179-page proof by
              Chudnovsky, Robertson, Seymour, and Thomas uses structural decomposition.
              They show that graphs without odd holes and antiholes can be decomposed
              via "2-joins" and "homogeneous pairs" into basic building blocks (bipartite
              graphs, line graphs of bipartite graphs, complements of these, and
              "double split graphs"), all of which are perfect.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Perfect Graph Recognition"
        proof={
          <>
            <p>
              By the Strong Perfect Graph Theorem, recognizing perfect graphs reduces
              to detecting odd holes and odd antiholes.
            </p>
            <p className="mt-2">
              <strong>Odd hole detection:</strong> Chudnovsky, Cornuéjols, Liu, Seymour,
              and Vušković (2005) gave an <InlineMath math="O(n^9)" /> algorithm.
              The key insight is that shortest odd holes have special structure that
              can be exploited.
            </p>
            <p className="mt-2">
              <strong>Odd antihole detection:</strong> An odd antihole in{' '}
              <InlineMath math="G" /> is an odd hole in <InlineMath math="\overline{G}" />,
              so apply the same algorithm to the complement.
            </p>
            <p className="mt-2">
              <strong>Combined:</strong> Check both <InlineMath math="G" /> and{' '}
              <InlineMath math="\overline{G}" /> for odd holes. The graph is perfect
              iff neither contains an odd hole.
            </p>
          </>
        }
      >
        <p>
          Perfect graphs can be recognized in polynomial time.
        </p>
        <p className="mt-2">
          The algorithm detects odd holes and antiholes using sophisticated structural
          decomposition (Chudnovsky et al., 2005).
        </p>
      </Theorem>

      <Theorem
        title="Polynomial Optimization on Perfect Graphs"
        proof={
          <>
            <p>
              <strong>Via theta function:</strong> Lovász showed that{' '}
              <InlineMath math="\vartheta(G)" /> can be computed in polynomial time
              using semidefinite programming.
            </p>
            <p className="mt-2">
              For perfect graphs, the sandwich inequalities are tight:
            </p>
            <MathBlock math="\omega(G) = \vartheta(\overline{G}) \quad \text{and} \quad \chi(G) = \vartheta(\overline{G})" />
            <p className="mt-2">
              <strong>Algorithm outline:</strong>
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>
                Compute <InlineMath math="\vartheta(\overline{G})" /> using the ellipsoid
                method or interior point methods.
              </li>
              <li>
                For perfect <InlineMath math="G" />, this equals{' '}
                <InlineMath math="\chi(G) = \omega(G)" />.
              </li>
              <li>
                Actual clique/coloring found by augmenting LP relaxations.
              </li>
            </ol>
            <p className="mt-2">
              <strong>Independence number:</strong> <InlineMath math="\alpha(G) = \omega(\overline{G})" />,
              so apply the above to <InlineMath math="\overline{G}" />.
            </p>
          </>
        }
      >
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
