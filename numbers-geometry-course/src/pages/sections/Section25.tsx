import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section25Questions } from '../../data/quizzes';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-semibold mb-4">The Triangle Inequality</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Another crucial property of distance is the so-called{' '}
        <strong>triangle inequality</strong>: if A, B, and C are three points not
        in a line, then
      </p>

      <MathBlock>{`d(A, C) < d(A, B) + d(B, C)`}</MathBlock>

      {/* The Dog's Wisdom */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Self-Evident Truth?</h3>

      <Callout type="info">
        <p>
          This property is so obvious that even a <strong>dog</strong> knows it:
          a dog will go straight from A to a bone at C rather than go via B.
          However, in mathematics, even obvious statements need not be accepted
          if they can be <em>proven</em>.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        The triangle inequality can indeed be proved from the standard assumptions
        of geometry. Euclid arrives at it only in his Proposition 20, and it
        depends on most of his earlier propositions. A proof in our coordinate
        setup is not trivial but takes only a few lines of algebra.
      </p>

      {/* Proof Setup */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Proof Using Coordinates</h3>

      <p className="text-dark-200 mb-6">
        We can simplify the calculation by applying isometries to move triangle
        ABC to a convenient position:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">1.</span>
            <span>
              Apply a <strong>translation</strong> to move B to the origin.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">2.</span>
            <span>
              If A is not on the x-axis, apply a <strong>reflection</strong> to
              place it on the x-axis.
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The result is a triangle with coordinates:
      </p>

      <MathBlock>{`A = (a_1, 0), \\quad B = (0, 0), \\quad C = (c_1, c_2)`}</MathBlock>

      <p className="text-dark-200 mb-6">
        where <InlineMath>c_2 {'>'} 0</InlineMath> if the three points are not in
        a line.
      </p>

      {/* The Inequality */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Calculation</h3>

      <p className="text-dark-200 mb-6">The required inequality</p>

      <MathBlock>{`d(A, C) < d(A, B) + d(B, C)`}</MathBlock>

      <p className="text-dark-200 mb-6">becomes:</p>

      <MathBlock>{`\\sqrt{(c_1 - a_1)^2 + c_2^2} < a_1 + \\sqrt{c_1^2 + c_2^2}`}</MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Verification
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          Squaring both sides and simplifying:
        </p>
        <MathBlock>{`(\\text{RHS})^2 - (\\text{LHS})^2 = 2a_1\\sqrt{c_1^2 + c_2^2} - 2a_1c_1 > 0`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          This is positive because <InlineMath>c_2 {'>'} 0</InlineMath> implies{' '}
          <InlineMath>\sqrt{'{c_1^2 + c_2^2}'} {'>'} c_1</InlineMath>.
        </p>
      </div>

      {/* Equality Case */}
      <h3 className="text-xl font-semibold mt-10 mb-4">When Equality Holds</h3>

      <p className="text-dark-200 mb-6">
        The calculation also shows that{' '}
        <InlineMath>d(A, C) = d(A, B) + d(B, C)</InlineMath> only when{' '}
        <InlineMath>c_2 = 0</InlineMath>—that is, when the three points are{' '}
        <strong>in a line</strong>.
      </p>

      <Callout type="success">
        <p>
          <strong>Summary:</strong> The straight line from A to C is shorter than
          any detour via B, unless B is already on the line AC.
        </p>
      </Callout>

      {/* Shortest Path */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Shortest Path Between Two Points
      </h3>

      <p className="text-dark-200 mb-6">
        A less formal way to express the triangle inequality is the old saying:
        "A straight line is the shortest distance between two points."
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Polygonal Paths" />
          <p className="text-xs text-dark-300">
            By induction, a line segment AB is the shortest polygonal path from A
            to B (a sequence of line segments A₁A₂, A₂A₃, ...).
          </p>
        </Card>
        <Card>
          <CardHeader title="Curves" />
          <p className="text-xs text-dark-300">
            The length of a curve is the least upper bound of lengths of
            polygonal paths with vertices on the curve.
          </p>
        </Card>
      </CardGrid>

      {/* Bounding Circle Length */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Example: The Circle's Circumference
      </h3>

      <p className="text-dark-200 mb-6">
        We can use the triangle inequality to prove an upper bound for the length
        of the circle. Consider a quarter circle from A to C with center at B.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          Any polygonal path with vertices on the quarter circle from A to C has
          total length less than d(A, B) + d(B, C).
        </p>
        <p className="text-dark-400 text-xs">
          By completeness of the reals, this upper bound implies the{' '}
          <strong>least upper bound</strong> (the arc length) exists.
        </p>
      </div>

      {/* Euclid's Approach */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Comparison with Euclid
      </h3>

      <p className="text-dark-200 mb-6">
        One reason Euclid's proof of the triangle inequality is longer than ours
        is that he assumes less. He proves it <em>without</em> assuming the
        parallel axiom, so his argument also applies to the geometry of the{' '}
        <strong>non-Euclidean plane</strong>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>triangle inequality</strong> states:{' '}
              <InlineMath>d(A, C) {'<'} d(A, B) + d(B, C)</InlineMath> for
              non-collinear A, B, C.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Isometries</strong> simplify the proof by placing the
              triangle in a convenient position.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Equality</strong> holds if and only if B lies on the segment
              AC.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The straight line is the <strong>shortest path</strong> between two
              points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The triangle inequality helps prove the{' '}
              <strong>existence of arc length</strong> via the completeness of ℝ.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={25} questions={section25Questions} />
    </LessonLayout>
  );
}
