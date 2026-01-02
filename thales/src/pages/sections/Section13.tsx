import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section13Questions } from '../../data/quizzes';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Constructions with Ruler and Compass</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Ancient Greek mathematicians were haunted by three famous problems that
        resisted solution for over two millennia. The rules of the game,
        presumably laid down in <strong>Plato's Academy</strong>, required that
        solutions use only <strong>straightedge and compass</strong>.
      </p>

      {/* The Three Classical Problems */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Three Classical Problems</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-red-400">
          <h4 className="font-semibold text-red-400 mb-2">I. Doubling the Cube</h4>
          <p className="text-dark-300">
            Find the cube root of 2, i.e., construct a length <InlineMath>x</InlineMath>{' '}
            such that <InlineMath>{`x^3 = 2`}</InlineMath>.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-amber-400">
          <h4 className="font-semibold text-amber-400 mb-2">II. Trisecting an Angle</h4>
          <p className="text-dark-300">
            Divide any given angle into three equal parts. (Some angles, like 90°,
            are easily trisected — the challenge is to trisect <em>any</em> angle,
            such as 60°.)
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-5 border-l-4 border-purple-400">
          <h4 className="font-semibold text-purple-400 mb-2">III. Squaring the Circle</h4>
          <p className="text-dark-300">
            Construct a square equal in area to a given circle. This requires
            constructing <InlineMath>{`\\sqrt{\\pi}`}</InlineMath>.
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          The rules: a <strong>ruler</strong> (straightedge) can only join two
          points. A <strong>compass</strong> can only draw a circle with a given
          center and radius. No measuring or marking allowed!
        </p>
      </Callout>

      {/* Basic Constructions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Basic Constructions</h3>

      <p className="text-dark-200 mb-6">
        The reader will have no difficulty carrying out the following fundamental
        constructions with ruler and compass:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="(a) Bisect an Angle" />
          <p className="text-sm text-dark-300">
            Given any angle, construct a ray that divides it into two equal parts.
          </p>
        </Card>
        <Card>
          <CardHeader title="(b) Perpendicular Bisector" />
          <p className="text-sm text-dark-300">
            Find the line that passes through the midpoint of a segment at right angles.
          </p>
        </Card>
        <Card>
          <CardHeader title="(c) Parallel Line" />
          <p className="text-sm text-dark-300">
            Draw a line through a given point parallel to a given line.
          </p>
        </Card>
        <Card>
          <CardHeader title="(d) Equilateral Triangle" />
          <p className="text-sm text-dark-300">
            Construct a triangle with all three sides equal.
          </p>
        </Card>
      </CardGrid>

      {/* Arithmetic Operations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Arithmetic with Ruler and Compass</h3>

      <p className="text-dark-200 mb-6">
        If we adopt a given segment as our <strong>unit of length</strong>, we can
        represent any positive real number by a segment. The Greeks discovered
        that ruler and compass allow us to perform these operations:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">+</span>
            <span><strong>Addition</strong> — place segments end-to-end</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">−</span>
            <span><strong>Subtraction</strong> — cut the smaller from the larger</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">×</span>
            <span><strong>Multiplication</strong> — using similar triangles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">÷</span>
            <span><strong>Division</strong> — using similar triangles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">√</span>
            <span><strong>Square roots</strong> — using semicircles</span>
          </li>
        </ul>
        <p className="text-dark-400 text-sm mt-4">
          The first four are called <em>rational operations</em>.
        </p>
      </div>

      {/* Multiplication and Division */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Multiplication and Division</h3>

      <p className="text-dark-200 mb-6">
        To find <InlineMath>{`x = ab`}</InlineMath>, we use the proportion:
      </p>

      <MathBlock>{`x : b = a : 1`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        To find <InlineMath>{`x = a/b`}</InlineMath>, we use:
      </p>

      <MathBlock>{`x : 1 = a : b`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        In both cases, we need to find the <strong>fourth proportional</strong>{' '}
        to three given lengths. This is easily done using similar triangles,
        following <strong>Thales</strong>, with only ruler and compass.
      </p>

      {/* Square Roots */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Extracting Square Roots</h3>

      <p className="text-dark-200 mb-6">
        To find <InlineMath>{`x = \\sqrt{a}`}</InlineMath>, we look at the proportion:
      </p>

      <MathBlock>{`1 : x = x : a`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Here we need the <strong>mean proportional</strong> of two lengths. The
        Greeks solved this ingeniously:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          Construction of √a
        </h4>
        <ol className="text-dark-300 space-y-2 list-decimal list-inside">
          <li>Draw a segment of length <InlineMath>{`a + 1`}</InlineMath></li>
          <li>Construct a semicircle with this segment as diameter</li>
          <li>At the point dividing the segment into lengths <InlineMath>a</InlineMath>{' '}
            and <InlineMath>1</InlineMath>, draw a perpendicular</li>
          <li>This perpendicular meets the semicircle at height <InlineMath>{`\\sqrt{a}`}</InlineMath></li>
        </ol>
        <p className="text-dark-400 text-sm mt-3">
          This works because the altitude to the hypotenuse of a right triangle
          is the geometric mean of the two segments it creates.
        </p>
      </div>

      {/* Trisection Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Trisection is Hard</h3>

      <p className="text-dark-200 mb-6">
        To understand the trisection problem, note that we can construct an angle
        if and only if we can construct its <strong>cosine</strong>. For a 60°
        angle, we want to find <InlineMath>{`\\theta = 20°`}</InlineMath> such that{' '}
        <InlineMath>{`3\\theta = 60°`}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        Using the triple angle formula:
      </p>

      <MathBlock>{`\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Since <InlineMath>{`\\cos 60° = 1/2`}</InlineMath>, we need to solve:
      </p>

      <MathBlock>{`8\\cos^3\\theta - 6\\cos\\theta = 1`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Substituting <InlineMath>{`u = 2\\cos\\theta`}</InlineMath>, this becomes
        the <strong>cubic equation</strong>:
      </p>

      <MathBlock>{`u^3 - 3u - 1 = 0`}</MathBlock>

      <Callout type="warning">
        <p>
          The crucial question: can solutions of this cubic be expressed using
          only rational operations and square roots? We'll see in the next
          section that the answer is <strong>no</strong> — which is why trisecting
          60° is impossible with ruler and compass.
        </p>
      </Callout>

      {/* Regular Pentagon */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Regular Pentagon</h3>

      <p className="text-dark-200 mb-6">
        One highlight of Euclid's <em>Elements</em> is the construction of a{' '}
        <strong>regular pentagon</strong>, requiring an angle of{' '}
        <InlineMath>{`360°/5 = 72°`}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        Using complex numbers and de Moivre's theorem, we can show that{' '}
        <InlineMath>{`z = \\cos 72° + i\\sin 72°`}</InlineMath> satisfies{' '}
        <InlineMath>{`z^5 = 1`}</InlineMath>. This leads to:
      </p>

      <MathBlock>{`u^2 + u - 1 = 0`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        where <InlineMath>{`u = 2\\cos 72°`}</InlineMath>. Solving this quadratic:
      </p>

      <MathBlock>{`u = \\frac{-1 + \\sqrt{5}}{2}`}</MathBlock>

      <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-lg p-6 mb-6 border border-amber-600/50">
        <p className="text-amber-200">
          This is the <strong>golden section</strong>! Since it involves only
          rational operations and a single square root, the regular pentagon{' '}
          <strong>can</strong> be constructed with ruler and compass.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Euclid constructs the pentagon in Book IV, Proposition 11, using the
        golden section from Book II, Proposition 11.
      </p>

      {/* Regular Heptagon */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Regular Heptagon</h3>

      <p className="text-dark-200 mb-6">
        The Greeks could construct regular <strong>triangles, squares, pentagons,
        and hexagons</strong>, but they left one problem open:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-red-400">
        <h4 className="text-lg font-semibold mb-3 text-red-400">
          Problem IV: The Regular Heptagon
        </h4>
        <p className="text-dark-300">
          Construct a regular seven-sided polygon.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        By the same method used for the pentagon, constructing a heptagon
        requires solving the cubic equation in <InlineMath>{`u = 2\\cos(360°/7)`}</InlineMath>:
      </p>

      <MathBlock>{`u^3 + u^2 - 2u - 1 = 0`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        Like the trisection problem, this cubic cannot be solved using only
        rational operations and square roots — so the regular heptagon is{' '}
        <strong>impossible</strong> with ruler and compass.
      </p>

      {/* Why Only Square Roots */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Only Square Roots?</h3>

      <p className="text-dark-200 mb-6">
        Although the Greeks didn't know this, <strong>Descartes' analytic
        geometry</strong> (17th century) explains why ruler and compass can
        only perform rational operations and square root extractions.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-cyan-400 mb-3">Descartes' Key Insight</h4>
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong>Lines</strong> are described by linear equations:{' '}
            <InlineMath>{`ax + by + c = 0`}</InlineMath>
          </li>
          <li>
            <strong>Circles</strong> are described by quadratic equations:{' '}
            <InlineMath>{`x^2 + y^2 + dx + ey + f = 0`}</InlineMath>
          </li>
          <li>
            <strong>Line ∩ line</strong> → solving linear equations (rational operations only)
          </li>
          <li>
            <strong>Line ∩ circle</strong> → solving quadratic equations (introduces square roots)
          </li>
          <li>
            <strong>Circle ∩ circle</strong> → reduces to line ∩ circle (still quadratic)
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          <strong>Conclusion:</strong> Every construction with ruler and compass
          produces coordinates that are built from the starting data using only
          rational operations (+, −, ×, ÷) and square roots. Since cube roots
          and <InlineMath>{`\\pi`}</InlineMath> cannot be expressed this way,
          the three classical problems are <strong>impossible</strong>.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The three classical problems — <strong>doubling the cube</strong>,{' '}
              <strong>trisecting an angle</strong>, and <strong>squaring the
              circle</strong> — must be solved using only ruler and compass.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              With ruler and compass, we can perform <strong>addition,
              subtraction, multiplication, division, and square roots</strong>{' '}
              — but nothing more.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Multiplication and division use <strong>similar triangles</strong>{' '}
              (fourth proportional); square roots use a <strong>semicircle</strong>{' '}
              construction (mean proportional).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The regular pentagon is constructible because{' '}
              <InlineMath>{`\\cos 72°`}</InlineMath> involves only the{' '}
              <strong>golden section</strong> (a square root). The heptagon
              requires solving a cubic — impossible with ruler and compass.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Descartes' analytic geometry</strong> explains why: lines
              and circles give only linear and quadratic equations, producing
              only rational operations and square roots.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={13} questions={section13Questions} />
    </LessonLayout>
  );
}
