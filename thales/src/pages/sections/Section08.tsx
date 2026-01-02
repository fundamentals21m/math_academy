import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section08Questions } from '../../data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">Regular Polyhedra</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ancient Greeks were fascinated by regular geometric figures — shapes
        with perfect symmetry. This led them to discover the <strong>five
        Platonic solids</strong>, the only regular polyhedra that exist in
        three-dimensional space.
      </p>

      <Callout type="info">
        <p>
          A <strong>regular polyhedron</strong> (or Platonic solid) is a
          three-dimensional solid where all faces are identical regular polygons,
          and the same number of faces meet at each vertex.
        </p>
      </Callout>

      {/* Tilings of the Plane */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Tilings of the Plane</h3>

      <p className="text-dark-200 mb-6">
        Before considering three-dimensional solids, let's examine{' '}
        <strong>tilings of the plane</strong>. A regular tiling uses congruent
        copies of a single regular polygon to cover the plane without gaps or
        overlaps. There are exactly <strong>three</strong> such tilings:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Triangular Tiling" />
          <p className="text-sm text-dark-300 mb-2">
            Six equilateral triangles meet at each vertex
          </p>
          <p className="text-xs text-dark-400">
            Interior angle: <InlineMath>{`60°`}</InlineMath> × 6 ={' '}
            <InlineMath>{`360°`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Square Tiling" />
          <p className="text-sm text-dark-300 mb-2">
            Four squares meet at each vertex
          </p>
          <p className="text-xs text-dark-400">
            Interior angle: <InlineMath>{`90°`}</InlineMath> × 4 ={' '}
            <InlineMath>{`360°`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Hexagonal Tiling" />
          <p className="text-sm text-dark-300 mb-2">
            Three regular hexagons meet at each vertex
          </p>
          <p className="text-xs text-dark-400">
            Interior angle: <InlineMath>{`120°`}</InlineMath> × 3 ={' '}
            <InlineMath>{`360°`}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        No other regular polygon can tile the plane. Pentagons, for example,
        have interior angles of <InlineMath>{`108°`}</InlineMath>, and no whole
        number of pentagons sums to exactly <InlineMath>{`360°`}</InlineMath>.
      </p>

      {/* The Five Platonic Solids */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Five Platonic Solids</h3>

      <p className="text-dark-200 mb-6">
        In three dimensions, the situation is even more restrictive. There are
        exactly <strong>five regular polyhedra</strong>, known as the{' '}
        <strong>Platonic solids</strong> after the philosopher Plato, who gave
        them cosmic significance in his dialogue <em>Timaeus</em>.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-3 px-4 text-amber-400">Solid</th>
              <th className="text-center py-3 px-4 text-amber-400">Faces (F)</th>
              <th className="text-center py-3 px-4 text-amber-400">Vertices (V)</th>
              <th className="text-center py-3 px-4 text-amber-400">Edges (E)</th>
              <th className="text-center py-3 px-4 text-amber-400">Face Shape</th>
              <th className="text-center py-3 px-4 text-amber-400">At Each Vertex</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-semibold">Tetrahedron</td>
              <td className="text-center py-3 px-4">4</td>
              <td className="text-center py-3 px-4">4</td>
              <td className="text-center py-3 px-4">6</td>
              <td className="text-center py-3 px-4">Triangle</td>
              <td className="text-center py-3 px-4">3 faces</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-semibold">Cube (Hexahedron)</td>
              <td className="text-center py-3 px-4">6</td>
              <td className="text-center py-3 px-4">8</td>
              <td className="text-center py-3 px-4">12</td>
              <td className="text-center py-3 px-4">Square</td>
              <td className="text-center py-3 px-4">3 faces</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-semibold">Octahedron</td>
              <td className="text-center py-3 px-4">8</td>
              <td className="text-center py-3 px-4">6</td>
              <td className="text-center py-3 px-4">12</td>
              <td className="text-center py-3 px-4">Triangle</td>
              <td className="text-center py-3 px-4">4 faces</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-semibold">Dodecahedron</td>
              <td className="text-center py-3 px-4">12</td>
              <td className="text-center py-3 px-4">20</td>
              <td className="text-center py-3 px-4">30</td>
              <td className="text-center py-3 px-4">Pentagon</td>
              <td className="text-center py-3 px-4">3 faces</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Icosahedron</td>
              <td className="text-center py-3 px-4">20</td>
              <td className="text-center py-3 px-4">12</td>
              <td className="text-center py-3 px-4">30</td>
              <td className="text-center py-3 px-4">Triangle</td>
              <td className="text-center py-3 px-4">5 faces</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Plato's Timaeus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Plato's Timaeus</h3>

      <p className="text-dark-200 mb-6">
        In his dialogue <em>Timaeus</em>, Plato associated each of the regular
        polyhedra with one of the classical elements. This gave the Platonic
        solids a mystical significance that persisted for centuries.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">
          The Elements and Their Solids
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="font-semibold text-cyan-400">Fire — Tetrahedron</p>
              <p className="text-sm text-dark-400">
                Sharp and piercing, the simplest solid
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-semibold text-cyan-400">Earth — Cube</p>
              <p className="text-sm text-dark-400">
                Stable and solid, able to be stacked
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💨</span>
            <div>
              <p className="font-semibold text-cyan-400">Air — Octahedron</p>
              <p className="text-sm text-dark-400">
                Light and mobile, intermediate form
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💧</span>
            <div>
              <p className="font-semibold text-cyan-400">Water — Icosahedron</p>
              <p className="text-sm text-dark-400">
                Flows easily due to many small faces
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:col-span-2">
            <span className="text-2xl">✨</span>
            <div>
              <p className="font-semibold text-cyan-400">Cosmos — Dodecahedron</p>
              <p className="text-sm text-dark-400">
                The shape of the universe itself, with 12 faces for the 12 zodiac signs
              </p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          The Pythagoreans are said to have discovered the <strong>dodecahedron</strong>,
          the last of the five regular solids. Its discovery was so profound that
          it was kept secret from outsiders.
        </p>
      </Callout>

      {/* Euler's Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euler's Formula</h3>

      <p className="text-dark-200 mb-6">
        In the 18th century, <strong>Leonhard Euler</strong> discovered a beautiful
        relationship connecting the faces, vertices, and edges of any convex
        polyhedron:
      </p>

      <MathBlock>{`F + V - E = 2`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        This is known as <strong>Euler's polyhedron formula</strong>. You can
        verify it for each Platonic solid:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong>Tetrahedron:</strong> 4 + 4 - 6 = 2 ✓
          </li>
          <li>
            <strong>Cube:</strong> 6 + 8 - 12 = 2 ✓
          </li>
          <li>
            <strong>Octahedron:</strong> 8 + 6 - 12 = 2 ✓
          </li>
          <li>
            <strong>Dodecahedron:</strong> 12 + 20 - 30 = 2 ✓
          </li>
          <li>
            <strong>Icosahedron:</strong> 20 + 12 - 30 = 2 ✓
          </li>
        </ul>
      </div>

      {/* Proof That Only Five Exist */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Only Five?</h3>

      <p className="text-dark-200 mb-6">
        We can prove that exactly five regular polyhedra exist using a simple
        counting argument. Let each face be a regular <InlineMath>p</InlineMath>-gon,
        and let <InlineMath>q</InlineMath> faces meet at each vertex.
      </p>

      <p className="text-dark-200 mb-6">
        Since we need at least three faces at each vertex (to form a "corner"),
        we have <InlineMath>{`q \\geq 3`}</InlineMath>. The interior angle of a
        regular <InlineMath>p</InlineMath>-gon is:
      </p>

      <MathBlock>{`\\frac{(p-2) \\cdot 180°}{p}`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        At each vertex, <InlineMath>q</InlineMath> such angles meet. For the
        vertex to "close up" into a point (rather than lying flat), the sum must
        be <em>less than</em> 360°:
      </p>

      <MathBlock>{`q \\cdot \\frac{(p-2) \\cdot 180°}{p} < 360°`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Simplifying: <InlineMath>{`(p-2)(q-2) < 4`}</InlineMath>. Since{' '}
        <InlineMath>{`p \\geq 3`}</InlineMath> and{' '}
        <InlineMath>{`q \\geq 3`}</InlineMath>, the only possibilities are:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="p = 3 (triangles)" />
          <ul className="text-sm text-dark-300 space-y-1">
            <li>q = 3: Tetrahedron</li>
            <li>q = 4: Octahedron</li>
            <li>q = 5: Icosahedron</li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="p = 4 (squares)" />
          <ul className="text-sm text-dark-300 space-y-1">
            <li>q = 3: Cube</li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="p = 5 (pentagons)" />
          <ul className="text-sm text-dark-300 space-y-1">
            <li>q = 3: Dodecahedron</li>
          </ul>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mt-6 mb-6">
        For <InlineMath>{`p \\geq 6`}</InlineMath>, even{' '}
        <InlineMath>{`q = 3`}</InlineMath> fails the inequality. This proves
        there are <strong>exactly five</strong> regular polyhedra.
      </p>

      {/* Dual Polyhedra */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dual Polyhedra</h3>

      <p className="text-dark-200 mb-6">
        The Platonic solids come in <strong>dual pairs</strong>. If you place a
        vertex at the center of each face and connect adjacent vertices, you get
        another Platonic solid:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-center gap-3">
            <span className="text-amber-400">↔</span>
            <span>
              <strong>Cube</strong> and <strong>Octahedron</strong> are duals of each other
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-amber-400">↔</span>
            <span>
              <strong>Dodecahedron</strong> and <strong>Icosahedron</strong> are duals of each other
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-amber-400">↔</span>
            <span>
              <strong>Tetrahedron</strong> is its own dual (self-dual)
            </span>
          </li>
        </ul>
      </div>

      {/* Nature and Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Regular Polyhedra in Nature
      </h3>

      <p className="text-dark-200 mb-6">
        The Platonic solids appear throughout nature:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Crystals" />
          <p className="text-sm text-dark-300">
            Salt crystals form cubes. Pyrite crystals can form dodecahedra.
            Fluorite forms octahedra.
          </p>
        </Card>
        <Card>
          <CardHeader title="Radiolarians" />
          <p className="text-sm text-dark-300">
            These microscopic sea creatures have skeletons shaped like
            icosahedra and other polyhedra.
          </p>
        </Card>
        <Card>
          <CardHeader title="Viruses" />
          <p className="text-sm text-dark-300">
            Many viruses, including the common cold, have icosahedral capsids —
            the most efficient way to enclose volume.
          </p>
        </Card>
        <Card>
          <CardHeader title="Buckyballs" />
          <p className="text-sm text-dark-300">
            Carbon-60 molecules (buckminsterfullerene) have a structure based on
            the truncated icosahedron — a soccer ball shape!
          </p>
        </Card>
      </CardGrid>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Only <strong>three regular tilings</strong> of the plane exist:
              triangles, squares, and hexagons.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Exactly <strong>five Platonic solids</strong> exist: tetrahedron,
              cube, octahedron, dodecahedron, and icosahedron.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Plato associated each solid with a classical element in his
              <em>Timaeus</em>, with the dodecahedron representing the cosmos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Euler's formula</strong> (<InlineMath>{`F + V - E = 2`}</InlineMath>)
              relates faces, vertices, and edges of any convex polyhedron.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The Platonic solids appear in nature — in crystals, viruses,
              radiolarians, and carbon molecules (buckyballs).
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={8} questions={section08Questions} />
    </LessonLayout>
  );
}
