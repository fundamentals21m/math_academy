import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <p>
        Planar graphs have special coloring properties—most famously, the Four Color
        Theorem. We also explore "how far from planar" a graph is through the crossing
        number and thickness. Finally, we consider embeddings on surfaces of higher
        genus, generalizing planarity to toruses and other surfaces.
      </p>

      <h2>Coloring Planar Graphs</h2>

      <Theorem title="Five Color Theorem (Theorem 6.3.1)">
        <p>
          Every planar graph is 5-colorable.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Kempe's Argument)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Induct on <InlineMath math="n" />. Let <InlineMath math="v" /> be a vertex
              of degree at most 5 (exists in any planar graph).
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> <InlineMath math="d(v) \leq 4" />. By induction,{' '}
              <InlineMath math="G - v" /> is 5-colorable. At most 4 colors used by
              neighbors of <InlineMath math="v" />, so one color is available.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> <InlineMath math="d(v) = 5" /> and all 5 colors
              used by neighbors. Consider two non-adjacent neighbors (exist since they
              don't form <InlineMath math="K_5" />). Use Kempe chains: paths alternating
              between two colors. Recolor along a Kempe chain to free a color for{' '}
              <InlineMath math="v" />.
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Four Color Theorem (Theorem 6.3.2)">
        <p>
          Every planar graph is 4-colorable.
        </p>
        <p className="mt-2 text-dark-300">
          Conjectured by Guthrie (1852). "Proved" by Kempe (1879), error found by
          Heawood (1890). First correct proof by Appel and Haken (1976) using computers
          to check ~2000 cases. Simplified proofs since (Robertson et al. 1997, Gonthier
          2005 formal verification).
        </p>
      </Theorem>

      <Example title="Graphs Requiring 4 Colors">
        <p>
          <InlineMath math="K_4" /> requires exactly 4 colors. Any planar graph
          containing <InlineMath math="K_4" /> (like the tetrahedron or wheel{' '}
          <InlineMath math="W_4" />) needs 4 colors.
        </p>
        <p className="mt-2">
          The dodecahedron graph also requires 4 colors, though it contains no{' '}
          <InlineMath math="K_4" /> (it's triangle-free!). This shows{' '}
          <InlineMath math="\chi = 4" /> doesn't require <InlineMath math="\omega = 4" />.
        </p>
      </Example>

      <Theorem title="Grötzsch's Theorem (Theorem 6.3.5)">
        <p>
          Every triangle-free planar graph is 3-colorable.
        </p>
        <p className="mt-2 text-dark-300">
          This strengthens the Four Color Theorem for triangle-free graphs.
        </p>
      </Theorem>

      <h2>List Coloring</h2>

      <Definition title="List Coloring">
        <p>
          Given a graph <InlineMath math="G" /> and a list <InlineMath math="L(v)" /> of
          available colors for each vertex <InlineMath math="v" />, a{' '}
          <strong>list coloring</strong> (or <strong>
            <InlineMath math="L" />-coloring
          </strong>) assigns each vertex a color from its list such that adjacent
          vertices get different colors.
        </p>
        <p className="mt-2">
          The <strong>choosability</strong> (or <strong>list chromatic number</strong>){' '}
          <InlineMath math="\text{ch}(G)" /> is the minimum <InlineMath math="k" /> such
          that <InlineMath math="G" /> has an <InlineMath math="L" />-coloring whenever
          all lists have size at least <InlineMath math="k" />.
        </p>
      </Definition>

      <Theorem title="Thomassen's Theorem (Theorem 6.3.9)">
        <p>
          Every planar graph is 5-choosable:{' '}
          <InlineMath math="\text{ch}(G) \leq 5" /> for planar <InlineMath math="G" />.
        </p>
      </Theorem>

      <Example title="Choosability vs. Chromatic Number">
        <p>
          <InlineMath math="K_{2,4}" /> has <InlineMath math="\chi = 2" /> but{' '}
          <InlineMath math="\text{ch} = 3" />.
        </p>
        <p className="mt-2">
          Give vertices in one part lists <InlineMath math="\{1, 2\}" /> and{' '}
          <InlineMath math="\{3, 4\}" />. Give vertices in the other part lists{' '}
          <InlineMath math="\{1, 3\}" />, <InlineMath math="\{1, 4\}" />,{' '}
          <InlineMath math="\{2, 3\}" />, <InlineMath math="\{2, 4\}" />. No valid list
          coloring exists with these size-2 lists.
        </p>
      </Example>

      <h2>Crossing Number</h2>

      <Definition title="Crossing Number">
        <p>
          The <strong>crossing number</strong> <InlineMath math="\text{cr}(G)" /> is the
          minimum number of edge crossings in any drawing of <InlineMath math="G" /> in
          the plane.
        </p>
        <p className="mt-2">
          A graph is planar iff <InlineMath math="\text{cr}(G) = 0" />.
        </p>
      </Definition>

      <Theorem title="Crossing Number Lower Bound (Theorem 6.3.18)">
        <p>
          For <InlineMath math="m > 7n" />:
        </p>
        <MathBlock math="\text{cr}(G) \geq \frac{m^3}{64n^2}" />
      </Theorem>

      <Example title="Crossing Numbers">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\text{cr}(K_5) = 1" />
          </li>
          <li>
            <InlineMath math="\text{cr}(K_6) = 3" />
          </li>
          <li>
            <InlineMath math="\text{cr}(K_{3,3}) = 1" />
          </li>
          <li>
            <InlineMath math="\text{cr}(K_{4,4}) = 4" />
          </li>
          <li>
            <InlineMath math="\text{cr}(\text{Petersen}) = 2" />
          </li>
        </ul>
        <p className="mt-2">
          Computing crossing number is NP-complete in general, but polynomial for
          bounded crossing number.
        </p>
      </Example>

      <h3>Conjectures on Complete Graphs</h3>

      <Definition title="Zarankiewicz Crossing Number Conjecture">
        <p>
          For complete bipartite graphs:
        </p>
        <MathBlock math="\text{cr}(K_{m,n}) = \left\lfloor \frac{m}{2} \right\rfloor \left\lfloor \frac{m-1}{2} \right\rfloor \left\lfloor \frac{n}{2} \right\rfloor \left\lfloor \frac{n-1}{2} \right\rfloor" />
        <p className="mt-2 text-dark-300">
          Known to be an upper bound. Proven for <InlineMath math="m \leq 6" />.
        </p>
      </Definition>

      <Definition title="Guy's Crossing Number Conjecture">
        <p>
          For complete graphs:
        </p>
        <MathBlock math="\text{cr}(K_n) = \frac{1}{4} \left\lfloor \frac{n}{2} \right\rfloor \left\lfloor \frac{n-1}{2} \right\rfloor \left\lfloor \frac{n-2}{2} \right\rfloor \left\lfloor \frac{n-3}{2} \right\rfloor" />
        <p className="mt-2 text-dark-300">
          Known to be an upper bound. Proven for <InlineMath math="n \leq 12" />.
        </p>
      </Definition>

      <h2>Thickness</h2>

      <Definition title="Thickness">
        <p>
          The <strong>thickness</strong> <InlineMath math="\text{th}(G)" /> is the
          minimum number of planar subgraphs whose union is <InlineMath math="G" />.
        </p>
        <p className="mt-2">
          A graph is planar iff <InlineMath math="\text{th}(G) = 1" />.
        </p>
      </Definition>

      <Example title="Thickness of Complete Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\text{th}(K_4) = 1" /> (planar)
          </li>
          <li>
            <InlineMath math="\text{th}(K_5) = 2" />
          </li>
          <li>
            <InlineMath math="\text{th}(K_8) = 2" />
          </li>
          <li>
            <InlineMath math="\text{th}(K_9) = 3" />
          </li>
          <li>
            <InlineMath math="\text{th}(K_n) = \left\lceil \frac{n + 7}{6} \right\rceil" />{' '}
            for <InlineMath math="n \geq 3" /> except{' '}
            <InlineMath math="\text{th}(K_9) = \text{th}(K_{10}) = 3" />
          </li>
        </ul>
      </Example>

      <Theorem title="Thickness Lower Bound">
        <p>
          <InlineMath math="\text{th}(G) \geq \lceil m / (3n - 6) \rceil" /> for{' '}
          <InlineMath math="n \geq 3" />.
        </p>
        <p className="mt-2 text-dark-300">
          Each planar subgraph has at most <InlineMath math="3n - 6" /> edges.
        </p>
      </Theorem>

      <h2>Higher Genus Surfaces</h2>

      <Definition title="Genus">
        <p>
          The <strong>genus</strong> <InlineMath math="\gamma(G)" /> of a graph is the
          minimum genus of a surface on which <InlineMath math="G" /> can be embedded
          without crossings.
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            Genus 0: Sphere (equivalent to plane for embedding)
          </li>
          <li>
            Genus 1: Torus (donut shape)
          </li>
          <li>
            Genus <InlineMath math="g" />: Sphere with <InlineMath math="g" /> handles
          </li>
        </ul>
        <p className="mt-2">
          <InlineMath math="\gamma(G) = 0" /> iff <InlineMath math="G" /> is planar.
        </p>
      </Definition>

      <Theorem title="Euler's Formula for Higher Genus (Theorem 6.3.26)">
        <p>
          For a graph embedded on a surface of genus <InlineMath math="g" />:
        </p>
        <MathBlock math="n - m + f = 2 - 2g" />
        <p className="mt-2">
          The quantity <InlineMath math="2 - 2g" /> is the <strong>Euler characteristic</strong>{' '}
          of the surface.
        </p>
      </Theorem>

      <Example title="Genus of Complete Graphs">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\gamma(K_n) = \left\lceil \frac{(n-3)(n-4)}{12} \right\rceil" />{' '}
            for <InlineMath math="n \geq 3" />
          </li>
          <li>
            <InlineMath math="\gamma(K_5) = 1" /> (embeds on torus)
          </li>
          <li>
            <InlineMath math="\gamma(K_7) = 1" /> (embeds on torus)
          </li>
          <li>
            <InlineMath math="\gamma(K_8) = 2" />
          </li>
        </ul>
      </Example>

      <Theorem title="Heawood's Formula (Theorem 6.3.28)">
        <p>
          For a surface of genus <InlineMath math="g \geq 1" />, the maximum chromatic
          number of graphs embeddable on that surface is:
        </p>
        <MathBlock math="H(g) = \left\lfloor \frac{7 + \sqrt{1 + 48g}}{2} \right\rfloor" />
        <p className="mt-2 text-dark-300">
          This is an upper bound (Heawood 1890) that was proved tight for all{' '}
          <InlineMath math="g \geq 1" /> (Ringel-Youngs 1968).
        </p>
      </Theorem>

      <Example title="Heawood Numbers">
        <ul className="list-disc list-inside space-y-1">
          <li>
            Genus 0 (plane): <InlineMath math="H(0) = 4" /> (Four Color Theorem)
          </li>
          <li>
            Genus 1 (torus): <InlineMath math="H(1) = 7" />
          </li>
          <li>
            Genus 2: <InlineMath math="H(2) = 8" />
          </li>
          <li>
            Genus 3: <InlineMath math="H(3) = 9" />
          </li>
        </ul>
        <p className="mt-2">
          <InlineMath math="K_7" /> embeds on the torus and needs 7 colors.
        </p>
      </Example>

      <h2>Map Coloring</h2>

      <p>
        The original motivation for the Four Color Theorem was map coloring: can any map
        be colored with 4 colors such that adjacent countries have different colors?
      </p>

      <Definition title="Map and Dual Graph">
        <p>
          A <strong>map</strong> is a partition of a surface into connected regions
          (countries). The <strong>dual graph</strong> has one vertex per country and an
          edge between countries sharing a border.
        </p>
        <p className="mt-2">
          Coloring the map is equivalent to coloring the dual graph.
        </p>
      </Definition>

      <Theorem title="Map Coloring Connection">
        <p>
          For maps on surfaces:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            <strong>Sphere/plane:</strong> 4 colors suffice (Four Color Theorem)
          </li>
          <li>
            <strong>Torus:</strong> 7 colors suffice and are sometimes needed
          </li>
          <li>
            <strong>Genus <InlineMath math="g" />:</strong>{' '}
            <InlineMath math="H(g)" /> colors suffice
          </li>
        </ul>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Four Color Theorem:</strong> Every planar graph is 4-colorable.
        </li>
        <li>
          <strong>Five Color Theorem:</strong> Simpler proof using Kempe chains.
        </li>
        <li>
          <strong>Grötzsch:</strong> Triangle-free planar graphs are 3-colorable.
        </li>
        <li>
          <strong>Choosability:</strong> Planar graphs are 5-choosable.
        </li>
        <li>
          <strong>Crossing Number:</strong> Minimum crossings in any drawing.
        </li>
        <li>
          <strong>Thickness:</strong> Minimum planar subgraphs covering all edges.
        </li>
        <li>
          <strong>Genus:</strong> Minimum surface genus for crossing-free embedding.
          Euler: <InlineMath math="n - m + f = 2 - 2g" />.
        </li>
        <li>
          <strong>Heawood:</strong> Maximum chromatic number on genus-
          <InlineMath math="g" /> surfaces.
        </li>
      </ul>
    </LessonLayout>
  );
}
