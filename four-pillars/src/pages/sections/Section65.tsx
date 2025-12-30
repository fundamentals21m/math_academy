import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2>Discussion</h2>

      <p>
        The discovery of non-Euclidean geometry in the 19th century was one of
        the most profound developments in the history of mathematics. For over
        two thousand years, Euclid's geometry was considered the absolute truth
        about physical space. The realization that alternative geometries exist
        fundamentally changed our understanding of mathematics, physics, and
        the nature of truth itself.
      </p>

      <h3>The Parallel Postulate Problem</h3>

      <p>
        Euclid's fifth postulate — the parallel postulate — had always seemed
        different from the other four. It was longer, more complicated, and less
        "self-evident."
      </p>

      <Definition title="Euclid's Fifth Postulate">
        <p>
          If a straight line falling on two straight lines makes the interior
          angles on the same side less than two right angles, the two straight
          lines, if produced indefinitely, meet on that side on which the angles
          are less than two right angles.
        </p>
      </Definition>

      <p>
        For centuries, mathematicians tried to prove this postulate from the
        other four, believing it was a theorem rather than an axiom. Their
        failure led to one of mathematics' greatest discoveries.
      </p>

      <h3>The Discovery of Non-Euclidean Geometry</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Key Figures</h4>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>
            <strong>Girolamo Saccheri (1733):</strong> Attempted to prove the
            parallel postulate by contradiction. He derived many theorems of
            hyperbolic geometry but couldn't accept the conclusion.
          </li>
          <li>
            <strong>Carl Friedrich Gauss (c. 1816):</strong> Developed non-Euclidean
            geometry privately but never published, fearing controversy.
          </li>
          <li>
            <strong>János Bolyai (1832):</strong> Published his discoveries in
            an appendix to his father's book, calling it "a new world created
            out of nothing."
          </li>
          <li>
            <strong>Nikolai Lobachevsky (1829):</strong> Published independently
            in Russian, earning the name "the Copernicus of geometry."
          </li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Simultaneous Discovery:</strong> Bolyai and Lobachevsky discovered
        non-Euclidean geometry independently around the same time. When Bolyai's
        father sent his son's work to Gauss, Gauss replied that he had already
        made these discoveries himself — a response that devastated the young
        Bolyai.
      </Callout>

      <h3>Models of Hyperbolic Geometry</h3>

      <p>
        The consistency of hyperbolic geometry was proven by constructing
        <strong> models</strong> — concrete mathematical objects where the
        hyperbolic axioms hold.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Major Models</h4>
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2">Model</th>
              <th className="text-left py-2">Description</th>
              <th className="text-left py-2">Creator</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Upper Half Plane</td>
              <td className="py-2">ℋ = {'{'}z : Im(z) &gt; 0{'}'}</td>
              <td className="py-2">Beltrami (1868)</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Poincaré Disk</td>
              <td className="py-2">Open unit disk |z| &lt; 1</td>
              <td className="py-2">Beltrami/Poincaré</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Klein Disk</td>
              <td className="py-2">Projective model in disk</td>
              <td className="py-2">Klein (1871)</td>
            </tr>
            <tr>
              <td className="py-2">Hyperboloid</td>
              <td className="py-2">Sheet of x² + y² - z² = -1</td>
              <td className="py-2">Minkowski</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Our development used the upper half plane model. The existence of multiple
        models shows that "hyperbolic geometry" is a single abstract structure
        that can be realized in various concrete ways.
      </p>

      <h3>Connections to Other Mathematics</h3>

      <p>
        Non-Euclidean geometry connects to many other areas of mathematics:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>
            <strong>Complex Analysis:</strong> Möbius transformations are fundamental
            objects in complex analysis, and the hyperbolic plane is the natural
            setting for automorphic functions.
          </li>
          <li>
            <strong>Group Theory:</strong> The isometry group PSL(2,ℝ) of the
            hyperbolic plane is a fundamental Lie group with deep connections
            to representation theory.
          </li>
          <li>
            <strong>Topology:</strong> Most surfaces of negative Euler characteristic
            have hyperbolic structures. Understanding hyperbolic surfaces is key
            to the classification of surfaces.
          </li>
          <li>
            <strong>Number Theory:</strong> The modular group PSL(2,ℤ) acts on
            the hyperbolic plane, connecting hyperbolic geometry to modular forms
            and elliptic curves.
          </li>
        </ul>
      </div>

      <h3>Physical Significance</h3>

      <Theorem title="Einstein's General Relativity">
        <p>
          In Einstein's theory of general relativity (1915), spacetime is curved,
          and its geometry is determined by the distribution of matter and energy.
          Non-Euclidean geometry is essential for understanding gravity.
        </p>
      </Theorem>

      <p>
        The discovery that geometry could be non-Euclidean prepared the way for
        Einstein's revolutionary insight that physical space itself might not
        be Euclidean.
      </p>

      <Callout type="warning">
        <strong>Spherical Geometry:</strong> Besides hyperbolic geometry, there
        is another non-Euclidean geometry: spherical (or elliptic) geometry,
        where there are <em>no</em> parallel lines. The surface of the Earth
        approximates this geometry, which is why meridians of longitude appear
        parallel at the equator but meet at the poles.
      </Callout>

      <h3>The Three Constant-Curvature Geometries</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 text-blue-400">Geometry</th>
              <th className="text-left py-2 text-blue-400">Curvature</th>
              <th className="text-left py-2 text-blue-400">Parallels</th>
              <th className="text-left py-2 text-blue-400">Angle Sum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Spherical</td>
              <td className="py-2">K &gt; 0</td>
              <td className="py-2">None</td>
              <td className="py-2">&gt; π</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Euclidean</td>
              <td className="py-2">K = 0</td>
              <td className="py-2">One</td>
              <td className="py-2">= π</td>
            </tr>
            <tr>
              <td className="py-2">Hyperbolic</td>
              <td className="py-2">K &lt; 0</td>
              <td className="py-2">Many</td>
              <td className="py-2">&lt; π</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The Four Pillars Revisited</h3>

      <p>
        We have now completed our journey through the four pillars of geometry.
        Let us reflect on how they connect:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>
            <strong>Euclidean constructions</strong> showed what can be built
            with straightedge and compass, and led to the axiomatization of
            geometry.
          </li>
          <li>
            <strong>Coordinates</strong> connected geometry to algebra, enabling
            the analytic approach.
          </li>
          <li>
            <strong>Vectors</strong> provided the language of linear algebra,
            essential for higher-dimensional and abstract geometry.
          </li>
          <li>
            <strong>Projective geometry</strong> unified parallel and intersecting
            lines, and its linear fractional transformations led naturally to
            non-Euclidean geometry.
          </li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Klein's Erlangen Program:</strong> Felix Klein's 1872 program
        proposed that each geometry is characterized by its group of transformations.
        Euclidean geometry studies invariants of the isometry group; affine
        geometry, the affine group; projective geometry, the projective group;
        and hyperbolic geometry, the group of Möbius transformations.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.9.1</h4>
        <p className="text-slate-300">
          Explain why Saccheri's attempt to prove the parallel postulate by
          contradiction failed to achieve its goal.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.9.2</h4>
        <p className="text-slate-300">
          In spherical geometry, every pair of "lines" (great circles) intersects
          in two points. How does this violate the Euclidean axiom that two points
          determine a unique line?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.9.3</h4>
        <p className="text-slate-300">
          Explain why the existence of a model proves that hyperbolic geometry
          is consistent (assuming Euclidean geometry is consistent).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.9.4</h4>
        <p className="text-slate-300">
          Describe how the four pillars of geometry (constructions, coordinates,
          vectors, projective methods) each contributed to the development of
          non-Euclidean geometry.
        </p>
      </div>

      <SectionQuiz
        sectionId={65}
        questions={quizMap[65] || []}
        title="Discussion Quiz"
      />
    </LessonLayout>
  );
}
