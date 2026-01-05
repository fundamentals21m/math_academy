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

      <Theorem
        title="Four Color Theorem (Theorem 6.3.2)"
        proof={
          <>
            <p>
              <strong>Proof structure (Appel-Haken):</strong> The proof has two main parts:
            </p>
            <p className="mt-2">
              <strong>1. Discharging method:</strong> Assign charges to vertices based on degree.
              By Euler's formula, the total charge is positive. Redistribute charge according to
              rules such that every vertex ends with non-positive charge—unless it belongs to a
              "reducible configuration."
            </p>
            <p className="mt-2">
              <strong>2. Reducibility:</strong> A configuration is <em>reducible</em> if whenever
              it appears in a minimal counterexample, the graph can be 4-colored by reducing to a
              smaller graph, coloring it, then extending back.
            </p>
            <p className="mt-2">
              Appel and Haken found an "unavoidable set" of 1,476 reducible configurations.
              Every planar graph must contain at least one of these. Since each is reducible,
              no minimal counterexample exists.
            </p>
            <p className="mt-2">
              <strong>Computer verification:</strong> Checking reducibility of each configuration
              required computer analysis (totaling ~1000 hours in 1976). Robertson, Sanders,
              Seymour, and Thomas (1997) reduced this to 633 configurations with simpler
              analysis. Gonthier (2005) gave a formal machine-checked proof in Coq.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Grötzsch's Theorem (Theorem 6.3.5)"
        proof={
          <>
            <p>
              We prove a stronger statement: every triangle-free planar graph has a proper
              3-coloring, and moreover, for any facial cycle of length at most 5 with a partial
              3-coloring, the coloring extends to the whole graph.
            </p>
            <p className="mt-2">
              <strong>Proof by induction on <InlineMath math="n" />:</strong>
            </p>
            <p className="mt-2">
              <strong>Base:</strong> Small triangle-free planar graphs are easily 3-colorable.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Let <InlineMath math="G" /> be triangle-free planar
              with <InlineMath math="n" /> vertices. Since <InlineMath math="G" /> has no triangles,
              faces have length at least 4. By the triangle-free edge bound{' '}
              (<InlineMath math="m \leq 2n - 4" />), the average degree is less than 4.
            </p>
            <p className="mt-2">
              Thus <InlineMath math="G" /> has a vertex <InlineMath math="v" /> of degree at most 3.
              If <InlineMath math="d(v) \leq 2" />, remove <InlineMath math="v" />, 3-color by
              induction, and extend (at most 2 neighbors use at most 2 colors).
            </p>
            <p className="mt-2">
              If <InlineMath math="d(v) = 3" />, the neighbors form an independent set (no triangles).
              A careful argument using Kempe chains shows we can always extend a 3-coloring of{' '}
              <InlineMath math="G - v" /> to <InlineMath math="G" />.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Thomassen's Theorem (Theorem 6.3.9)"
        proof={
          <>
            <p>
              We prove a stronger statement for plane graphs with the outer face as a cycle{' '}
              <InlineMath math="C" />:
            </p>
            <p className="mt-2">
              <strong>Claim:</strong> If <InlineMath math="G" /> is a plane graph bounded by cycle{' '}
              <InlineMath math="C" />, and:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>Two adjacent vertices on <InlineMath math="C" /> are precolored</li>
              <li>All other vertices on <InlineMath math="C" /> have lists of size ≥ 3</li>
              <li>All interior vertices have lists of size ≥ 5</li>
            </ul>
            <p className="mt-2">
              Then the precoloring extends to a valid list coloring of <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              <strong>Proof by induction on <InlineMath math="|V(G)|" />:</strong>
            </p>
            <p className="mt-2">
              <strong>Base:</strong> If <InlineMath math="G = C" />, successively color vertices on{' '}
              <InlineMath math="C" /> (each has ≥ 3 colors, ≤ 2 colored neighbors).
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> If there's a chord of <InlineMath math="C" />,
              split into two smaller graphs and apply induction. Otherwise, let{' '}
              <InlineMath math="v" /> be a vertex adjacent to both precolored vertices. Then{' '}
              <InlineMath math="v" /> has a list of size 3 and only 2 colored neighbors, so we can
              color <InlineMath math="v" /> and remove it, reducing to a smaller case.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Crossing Number Lower Bound (Theorem 6.3.18)"
        proof={
          <>
            <p>
              <strong>Proof using the probabilistic method (Ajtai-Chvátal-Newborn-Szemerédi):</strong>
            </p>
            <p className="mt-2">
              Let <InlineMath math="G" /> have <InlineMath math="n" /> vertices,{' '}
              <InlineMath math="m" /> edges, and crossing number <InlineMath math="\text{cr}(G)" />.
              Fix an optimal drawing of <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              Choose a random subset <InlineMath math="S \subseteq V(G)" /> by including each
              vertex independently with probability <InlineMath math="p" /> (to be determined).
              Let <InlineMath math="H = G[S]" /> be the induced subgraph.
            </p>
            <p className="mt-2">
              <strong>Expected values:</strong>
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li><InlineMath math="E[|V(H)|] = pn" /></li>
              <li><InlineMath math="E[|E(H)|] = p^2 m" /> (both endpoints must be selected)</li>
              <li><InlineMath math="E[\text{cr}(H)] = p^4 \cdot \text{cr}(G)" /> (all 4 endpoints of crossing edges)</li>
            </ul>
            <p className="mt-2">
              Since <InlineMath math="H" /> inherits the drawing from <InlineMath math="G" />, and
              planar graphs have <InlineMath math="m \leq 3n - 6" />:
            </p>
            <MathBlock math="E[\text{cr}(H)] \geq E[|E(H)|] - 3E[|V(H)|]" />
            <p className="mt-2">
              Thus <InlineMath math="p^4 \cdot \text{cr}(G) \geq p^2 m - 3pn" />. Setting{' '}
              <InlineMath math="p = 4n/m" /> (valid when <InlineMath math="m > 4n" />) and solving
              gives <InlineMath math="\text{cr}(G) \geq m^3 / (64n^2)" />.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Thickness Lower Bound"
        proof={
          <>
            <p>
              By definition, thickness <InlineMath math="\text{th}(G)" /> is the minimum number of
              planar subgraphs whose union covers all edges of <InlineMath math="G" />.
            </p>
            <p className="mt-2">
              Each planar subgraph <InlineMath math="H_i" /> on <InlineMath math="n" /> vertices
              (same vertex set as <InlineMath math="G" />) has at most <InlineMath math="3n - 6" />{' '}
              edges by the planar edge bound.
            </p>
            <p className="mt-2">
              If we decompose <InlineMath math="G" /> into <InlineMath math="k" /> planar subgraphs,
              the total number of edges covered is at most <InlineMath math="k(3n - 6)" />.
            </p>
            <p className="mt-2">
              Since we need to cover all <InlineMath math="m" /> edges:
            </p>
            <MathBlock math="k(3n - 6) \geq m \implies k \geq \frac{m}{3n - 6}" />
            <p className="mt-2">
              Since <InlineMath math="k" /> must be an integer:{' '}
              <InlineMath math="\text{th}(G) \geq \lceil m/(3n-6) \rceil" />.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Euler's Formula for Higher Genus (Theorem 6.3.26)"
        proof={
          <>
            <p>
              The proof generalizes the planar case using the classification of surfaces.
            </p>
            <p className="mt-2">
              <strong>Topological background:</strong> A surface of genus <InlineMath math="g" />{' '}
              (orientable) is a sphere with <InlineMath math="g" /> handles attached. The Euler
              characteristic <InlineMath math="\chi_S = 2 - 2g" /> is a topological invariant.
            </p>
            <p className="mt-2">
              <strong>Proof sketch:</strong>
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>
                For a tree embedded on any surface: <InlineMath math="n" /> vertices,{' '}
                <InlineMath math="n-1" /> edges, 1 face.{' '}
                <InlineMath math="n - (n-1) + 1 = 2 = 2 - 2(0)" /> for the sphere.
              </li>
              <li>
                Adding an edge that doesn't disconnect a face doesn't change{' '}
                <InlineMath math="n - m + f" /> (adds 1 edge, creates 1 face).
              </li>
              <li>
                Adding a handle to the surface allows one more edge to be added without creating
                a new face (the edge "wraps around" the handle). This decreases{' '}
                <InlineMath math="n - m + f" /> by 2.
              </li>
            </ol>
            <p className="mt-2">
              With <InlineMath math="g" /> handles: <InlineMath math="n - m + f = 2 - 2g" />.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Heawood's Formula (Theorem 6.3.28)"
        proof={
          <>
            <p>
              <strong>Upper bound (Heawood 1890):</strong>
            </p>
            <p className="mt-2">
              Let <InlineMath math="G" /> be embeddable on a surface of genus <InlineMath math="g" />.
              By the generalized Euler formula, <InlineMath math="m \leq 3n + 6(g-1)" /> when{' '}
              <InlineMath math="n \geq 3" />.
            </p>
            <p className="mt-2">
              This gives average degree <InlineMath math="\frac{'{'}2m{'}'}{'{'}n{'}'} \leq 6 + \frac{'{'}12(g-1){'}'}{'{'}n{'}'}" />.
              Thus <InlineMath math="G" /> has a vertex of degree at most{' '}
              <InlineMath math="\lfloor 6 + 12(g-1)/n \rfloor" />.
            </p>
            <p className="mt-2">
              By induction (greedy coloring from low-degree vertices), this bounds{' '}
              <InlineMath math="\chi(G)" />. Optimizing over <InlineMath math="n" /> gives the
              Heawood bound <InlineMath math="H(g)" />.
            </p>
            <p className="mt-2">
              <strong>Tightness (Ringel-Youngs 1968):</strong>
            </p>
            <p className="mt-2">
              For each <InlineMath math="g \geq 1" />, we must show <InlineMath math="K_{'{'}H(g){'}'}" />{' '}
              embeds on the genus-<InlineMath math="g" /> surface.
            </p>
            <p className="mt-2">
              This was proved by constructing explicit embeddings for each <InlineMath math="g" />—a
              monumental effort requiring separate constructions for different residue classes of{' '}
              <InlineMath math="H(g) \mod 12" />. The "Map Color Theorem" took 12 years to complete.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Map Coloring Connection"
        proof={
          <>
            <p>
              The dual graph of a map has one vertex per country and edges between countries
              sharing a border. Coloring the map = coloring the dual graph.
            </p>
            <p className="mt-2">
              <strong>Sphere/plane:</strong> Dual graphs are planar. By the Four Color Theorem,
              4 colors suffice. Tightness: maps with 4 mutually adjacent countries exist (e.g.,
              four regions meeting at a point with shared borders).
            </p>
            <p className="mt-2">
              <strong>Torus:</strong> Dual graphs embed on the torus. By Heawood's formula,{' '}
              <InlineMath math="H(1) = 7" /> colors suffice. Tightness: <InlineMath math="K_7" />{' '}
              embeds on the torus (the "seven color map"), so 7 mutually adjacent countries can
              exist on a torus.
            </p>
            <p className="mt-2">
              <strong>General genus <InlineMath math="g" />:</strong> Dual graphs embed on the
              genus-<InlineMath math="g" /> surface. The Heawood bound gives{' '}
              <InlineMath math="H(g)" /> colors. By Ringel-Youngs, <InlineMath math="K_{'{'}H(g){'}'}" />{' '}
              embeds, showing tightness.
            </p>
          </>
        }
      >
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
