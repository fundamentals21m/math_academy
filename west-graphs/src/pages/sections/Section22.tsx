import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <p>
        The interplay between planarity, coloring, and cycles reveals deep connections
        in graph theory. Tait showed that the Four Color Theorem is equivalent to
        edge-coloring cubic planar graphs. Grinberg's theorem provides a tool for
        proving graphs are non-Hamiltonian. Nowhere-zero flows generalize these ideas,
        connecting coloring to algebraic properties.
      </p>

      <h2>Tait's Theorem</h2>

      <Definition title="Tait Coloring">
        <p>
          A <strong>Tait coloring</strong> of a 3-regular (cubic) graph{' '}
          <InlineMath math="G" /> is a proper 3-edge-coloring.
        </p>
      </Definition>

      <Theorem title="Tait's Theorem (Theorem 7.3.2)">
        <p>
          A planar graph is 4-face-colorable if and only if it is the dual of a
          bridgeless cubic planar graph that has a Tait coloring.
        </p>
        <p className="mt-2">
          More specifically: A 2-edge-connected cubic planar graph is 3-edge-colorable
          if and only if it is Hamiltonian.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Connection to Four Color Theorem
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Tait (1880) tried to prove the Four Color Theorem by showing all
              bridgeless cubic planar graphs are Hamiltonian (which would give a Tait
              coloring). But the Tutte graph (1946) is a bridgeless cubic planar
              non-Hamiltonian graph!
            </p>
            <p className="mt-2">
              Nevertheless, the Four Color Theorem implies all bridgeless cubic planar
              graphs are 3-edge-colorable (by a different argument).
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Cube Graph">
        <p>
          The cube graph <InlineMath math="Q_3" /> is cubic, planar, and Hamiltonian.
          The Hamiltonian cycle uses 8 edges, alternating in 2 colors. The remaining 4
          edges (the "opposite" edges of each face) get the third color.
        </p>
      </Example>

      <h2>Grinberg's Theorem</h2>

      <p>
        Grinberg's theorem provides a necessary condition for planar graphs to be
        Hamiltonian, based on face sizes.
      </p>

      <Theorem title="Grinberg's Theorem (Theorem 7.3.5)">
        <p>
          If a plane graph <InlineMath math="G" /> has a Hamiltonian cycle{' '}
          <InlineMath math="C" />, let <InlineMath math="f'_k" /> be the number of faces
          of size <InlineMath math="k" /> inside <InlineMath math="C" /> and{' '}
          <InlineMath math="f''_k" /> be the number outside. Then:
        </p>
        <MathBlock math="\sum_{k \geq 3} (k - 2)(f'_k - f''_k) = 0" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Let <InlineMath math="C" /> have <InlineMath math="n" /> edges. For faces
              inside: <InlineMath math="\sum k \cdot f'_k = n + 2(\text{edges inside})" />{' '}
              and <InlineMath math="\sum f'_k = 1 + \text{faces inside}" />.
            </p>
            <p className="mt-2">
              By Euler's formula applied to the inside subgraph:{' '}
              <InlineMath math="\sum (k-2) f'_k = n - 2" />. Similarly for outside.
              Subtracting gives the result.
            </p>
          </div>
        </details>
      </Theorem>

      <Example title="Using Grinberg's Theorem">
        <p>
          Consider a plane graph with face sizes 5, 5, 5, 8 (4 faces). If Hamiltonian:
        </p>
        <MathBlock math="3(f'_5 - f''_5) + 6(f'_8 - f''_8) = 0" />
        <p className="mt-2">
          With <InlineMath math="f'_5 + f''_5 = 3" /> and{' '}
          <InlineMath math="f'_8 + f''_8 = 1" />, we need{' '}
          <InlineMath math="3(f'_5 - f''_5) + 6(\pm 1) = 0" />. This requires{' '}
          <InlineMath math="f'_5 - f''_5 = \pm 2" />, which is impossible since all
          values have the same parity.
        </p>
      </Example>

      <Example title="Tutte's Graph">
        <p>
          Tutte constructed a 3-connected cubic planar non-Hamiltonian graph in 1946.
          This disproved Tait's approach to the Four Color Theorem.
        </p>
        <p className="mt-2">
          The graph has 46 vertices and can be shown non-Hamiltonian using Grinberg's
          theorem.
        </p>
      </Example>

      <h2>Nowhere-Zero Flows</h2>

      <Definition title="Flow on a Graph">
        <p>
          Given an orientation of graph <InlineMath math="G" /> and an abelian group{' '}
          <InlineMath math="\Gamma" />, a <strong>
            <InlineMath math="\Gamma" />-flow
          </strong>{' '}
          assigns a group element to each edge such that at every vertex, the sum of
          incoming values equals the sum of outgoing values.
        </p>
        <p className="mt-2">
          A flow is <strong>nowhere-zero</strong> if no edge has value 0.
        </p>
      </Definition>

      <Definition title="k-Flow">
        <p>
          A <strong>nowhere-zero <InlineMath math="k" />-flow</strong> is a nowhere-zero{' '}
          <InlineMath math="\mathbb{Z}" />-flow where each edge value is in{' '}
          <InlineMath math="\{-(k-1), \ldots, -1, 1, \ldots, k-1\}" />.
        </p>
        <p className="mt-2">
          The <strong>flow number</strong> <InlineMath math="\phi(G)" /> is the minimum{' '}
          <InlineMath math="k" /> for which <InlineMath math="G" /> has a nowhere-zero{' '}
          <InlineMath math="k" />-flow.
        </p>
      </Definition>

      <Theorem title="Duality: Flows and Colorings (Theorem 7.3.13)">
        <p>
          For a planar graph <InlineMath math="G" /> and its dual{' '}
          <InlineMath math="G^*" />:
        </p>
        <MathBlock math="\chi(G^*) = \phi(G)" />
        <p className="mt-2 text-dark-300">
          Nowhere-zero flows in <InlineMath math="G" /> correspond to proper colorings
          of <InlineMath math="G^*" />.
        </p>
      </Theorem>

      <Example title="Four Color Theorem via Flows">
        <p>
          For any planar graph <InlineMath math="G" />, we have{' '}
          <InlineMath math="\chi(G) \leq 4" />. By duality, the dual of any planar graph
          has a nowhere-zero 4-flow.
        </p>
        <p className="mt-2">
          Equivalently: every bridgeless planar graph has a nowhere-zero 4-flow.
        </p>
      </Example>

      <h3>Flow Conjectures</h3>

      <Theorem title="Tutte's Flow Conjectures">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>5-Flow Conjecture:</strong> Every bridgeless graph has a
            nowhere-zero 5-flow. (Open)
          </li>
          <li>
            <strong>4-Flow Conjecture:</strong> Every bridgeless graph with no Petersen
            minor has a nowhere-zero 4-flow. (Open)
          </li>
          <li>
            <strong>3-Flow Conjecture:</strong> Every 4-edge-connected graph has a
            nowhere-zero 3-flow. (Open)
          </li>
        </ul>
      </Theorem>

      <Theorem title="Seymour's 6-Flow Theorem (1981)">
        <p>
          Every bridgeless graph has a nowhere-zero 6-flow.
        </p>
      </Theorem>

      <h2>Cycle Double Covers</h2>

      <Definition title="Cycle Double Cover">
        <p>
          A <strong>cycle double cover</strong> of a graph is a collection of cycles
          such that each edge is in exactly two cycles.
        </p>
      </Definition>

      <Theorem title="Cycle Double Cover Conjecture">
        <p>
          Every bridgeless graph has a cycle double cover.
        </p>
        <p className="mt-2 text-dark-300">
          Equivalent to the 5-flow conjecture for cubic graphs. Open since 1973.
        </p>
      </Theorem>

      <Example title="Petersen Graph and Flows">
        <p>
          The Petersen graph is the smallest "obstruction" to nowhere-zero 4-flows. It
          has a nowhere-zero 5-flow but not a 4-flow.
        </p>
        <p className="mt-2">
          The 4-Flow Conjecture says the Petersen graph is the essential obstruction.
        </p>
      </Example>

      <h2>Snarks</h2>

      <Definition title="Snark">
        <p>
          A <strong>snark</strong> is a bridgeless cubic graph with chromatic index 4
          (Class 2).
        </p>
        <p className="mt-2">
          Equivalently: a bridgeless cubic graph with no Tait coloring, or no
          nowhere-zero 4-flow.
        </p>
      </Definition>

      <Example title="Known Snarks">
        <ul className="list-disc list-inside space-y-1">
          <li>Petersen graph (10 vertices) - the smallest</li>
          <li>Blanuša snarks (18 vertices)</li>
          <li>Flower snarks (20, 28, ... vertices)</li>
          <li>Double-star snark (30 vertices)</li>
        </ul>
        <p className="mt-2">
          Snarks are rare and difficult to construct. They play a crucial role in graph
          coloring theory.
        </p>
      </Example>

      <Theorem title="Snarks and the Four Color Theorem">
        <p>
          The Four Color Theorem is equivalent to: every planar snark has a bridge.
        </p>
        <p className="mt-2">
          Since planar bridgeless cubic graphs are 4-colorable, their duals have
          nowhere-zero 4-flows, hence are not snarks.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Tait's Theorem:</strong> Connects 4-coloring to Hamiltonian cycles in
          cubic planar graphs.
        </li>
        <li>
          <strong>Grinberg's Theorem:</strong>{' '}
          <InlineMath math="\sum (k-2)(f'_k - f''_k) = 0" /> for Hamiltonian planar
          graphs.
        </li>
        <li>
          <strong>Tutte's Graph:</strong> Non-Hamiltonian bridgeless cubic planar graph;
          disproves Tait's approach.
        </li>
        <li>
          <strong>Nowhere-Zero Flows:</strong> Generalize colorings; flow number =
          chromatic number of dual.
        </li>
        <li>
          <strong>Seymour:</strong> Every bridgeless graph has a nowhere-zero 6-flow.
        </li>
        <li>
          <strong>Tutte Conjectures:</strong> 5-flow, 4-flow, 3-flow conjectures remain
          open.
        </li>
        <li>
          <strong>Snarks:</strong> Bridgeless cubic graphs that are Class 2; key
          structures in coloring theory.
        </li>
      </ul>
    </LessonLayout>
  );
}
