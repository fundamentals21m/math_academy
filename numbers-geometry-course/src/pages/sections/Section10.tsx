import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section10Questions } from '../../data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">Geometric Intuition</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Geometry is in many ways opposite or complementary to arithmetic.
        Arithmetic is discrete, static, computational, and logical; geometry is
        continuous, fluid, dynamic, and visual.
      </p>

      {/* Contrasting Arithmetic and Geometry */}
      <CardGrid>
        <Card>
          <CardHeader title="Arithmetic" />
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Discrete</li>
            <li>• Static</li>
            <li>• Computational</li>
            <li>• Logical</li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="Geometry" />
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Continuous</li>
            <li>• Fluid, dynamic</li>
            <li>• Visual</li>
            <li>• Intuitive</li>
          </ul>
        </Card>
      </CardGrid>

      {/* The Pythagorean Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Pythagorean Theorem</h3>

      <p className="text-dark-200 mb-6">
        A good example of geometric intuition at work is the <strong>Pythagorean
        theorem</strong>: the square on the hypotenuse of a right-angled triangle
        equals (in area) the sum of the squares on the other two sides.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Pythagorean Theorem</h4>
        <MathBlock>{`a^2 + b^2 = c^2`}</MathBlock>
        <p className="text-dark-300 mt-3 text-sm">
          where <InlineMath>c</InlineMath> is the hypotenuse and{' '}
          <InlineMath>a, b</InlineMath> are the other two sides.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This theorem has been known since ancient times and was probably first
        noticed by someone playing with squares and triangles. A beautiful visual
        proof was given by <strong>Bhaskara II</strong> in 12th century India.
      </p>

      {/* Visual Proof Idea */}
      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Visual Proof Idea</h4>
        <p className="text-dark-200 text-sm mb-3">
          Consider a large square with side <InlineMath>a + b</InlineMath>:
        </p>
        <ul className="text-dark-300 text-sm space-y-2">
          <li>
            <strong>Arrangement 1:</strong> Remove four copies of the right triangle.
            What remains equals the squares on the two sides:{' '}
            <InlineMath>a^2 + b^2</InlineMath>
          </li>
          <li>
            <strong>Arrangement 2:</strong> Remove the same four triangles differently.
            What remains is the square on the hypotenuse: <InlineMath>c^2</InlineMath>
          </li>
        </ul>
        <p className="text-dark-300 mt-3 text-sm">
          Since both remainders come from the same square minus the same triangles,
          they must be equal: <InlineMath>a^2 + b^2 = c^2</InlineMath>. Q.E.D.
        </p>
      </div>

      {/* The Problem with Intuition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Blessing and Curse of Intuition</h3>

      <p className="text-dark-200 mb-6">
        In the physical world, exact triangles and squares do not exist—the
        theorem is about <em>ideal</em> or <em>abstract</em> objects. Yet we use
        experience with actual shapes to draw conclusions about abstract ones.
      </p>

      <Callout type="warning">
        <p>
          The gift of geometric intuition is both a <strong>blessing</strong> and
          a <strong>curse</strong>. It gives us amazingly direct access to
          mathematical results; yet we cannot be satisfied until results have
          been <em>validated by logic</em>.
        </p>
      </Callout>

      {/* Two Approaches */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Two Approaches to Geometry</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Synthetic Geometry" />
          <p className="text-sm text-dark-300 mb-2">
            Theorems derived by pure logic from visually plausible axioms about
            points, lines, circles, and planes.
          </p>
          <p className="text-xs text-dark-400">
            Initiated by Euclid's <em>Elements</em> (~300 BC), perfected by
            Hilbert (1899).
          </p>
          <div className="mt-3 text-xs">
            <span className="text-emerald-400">+</span> Self-contained, close to intuition
          </div>
          <div className="text-xs">
            <span className="text-red-400">−</span> Fails to explain similarity to arithmetic
          </div>
        </Card>
        <Card>
          <CardHeader title="Analytic Geometry" />
          <p className="text-sm text-dark-300 mb-2">
            Uses coordinates and algebra to study geometric objects. Unifies
            geometry with arithmetic.
          </p>
          <p className="text-xs text-dark-400">
            Initiated by Descartes' <em>Geometry</em> (1637), also perfected by
            Hilbert.
          </p>
          <div className="mt-3 text-xs">
            <span className="text-emerald-400">+</span> More efficient, more fruitful
          </div>
          <div className="text-xs">
            <span className="text-emerald-400">+</span> Opens door to algebra and calculus
          </div>
        </Card>
      </CardGrid>

      {/* The Common Ground */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Search for Common Ground</h3>

      <p className="text-dark-200 mb-6">
        Geometric quantities—like numbers—can be added, subtracted, and (in the
        case of lengths) even multiplied. This mysterious similarity suggests
        that geometry and arithmetic share a <strong>common ground</strong>, and
        mathematics should explain why.
      </p>

      <Callout type="success">
        <p>
          The search for this common ground led to <strong>analytic geometry</strong>,
          which enriches both arithmetic and geometry with new concepts, opening
          the whole new mathematical world of algebra and calculus!
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        As we shall see in later chapters, the new world is not separate from
        the old—algebra not only throws new light on geometry, it also enables
        us to solve problems about the natural numbers that were previously
        beyond reach.
      </p>

      {/* Thales' Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Thales' Theorem</h3>

      <p className="text-dark-200 mb-6">
        Another ancient theorem states that any right-angled triangle fits in a
        semicircle, with the hypotenuse as diameter. According to legend,
        synthetic geometry began with a proof of this theorem by{' '}
        <strong>Thales</strong> in the 6th century BC.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Thales' Theorem</h4>
        <p className="text-dark-200">
          If <InlineMath>AB</InlineMath> is a diameter of a circle and{' '}
          <InlineMath>C</InlineMath> is any other point on the circle, then
          angle <InlineMath>ACB</InlineMath> is a right angle.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Geometry is <strong>continuous and visual</strong>, complementing
              the discrete, computational nature of arithmetic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>Pythagorean theorem</strong> exemplifies how intuition
              leads to results, but these must be validated by logic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Synthetic geometry</strong> (Euclid) stays close to
              intuition; <strong>analytic geometry</strong> (Descartes) connects
              to algebra.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Geometry and arithmetic share a <strong>common ground</strong>—both
              admit addition, subtraction, and (for lengths) multiplication.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Analytic geometry opens the door to <strong>algebra and calculus</strong>,
              which solve problems in both geometry and number theory.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={10} questions={section10Questions} />
    </LessonLayout>
  );
}
