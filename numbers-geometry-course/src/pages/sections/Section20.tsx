import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section20Questions } from '../../data/quizzes';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-semibold mb-4">Intersections</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The difference between analytic and synthetic geometry can be illustrated
        with Euclid's very first proposition: the construction of an equilateral
        triangle on a line segment AB.
      </p>

      {/* Euclid's Construction */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Euclid's Equilateral Triangle
      </h3>

      <p className="text-dark-200 mb-6">
        Recall that Euclid constructs an equilateral triangle by finding the
        intersection of two circles—one centered at A with radius AB, the other
        centered at B with radius BA.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Analytic Approach
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          If A = (−1, 0) and B = (1, 0), the two circles have radius 2:
        </p>
        <MathBlock>{`(x+1)^2 + y^2 = 4`}</MathBlock>
        <MathBlock>{`(x-1)^2 + y^2 = 4`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          Subtracting: x = 0. Substituting back: y = ±√3.
        </p>
        <p className="text-dark-300 text-sm mt-2">
          The intersections are <InlineMath>(0, \sqrt{'{3}'})</InlineMath> and{' '}
          <InlineMath>(0, -\sqrt{'{3}'})</InlineMath>.
        </p>
      </div>

      {/* A Defect in Euclid */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        A Defect in Euclid's Axioms
      </h3>

      <Callout type="warning">
        <p>
          Euclid's argument is short and sweet, but it has one defect:{' '}
          <strong>it does not follow from his axioms!</strong> His axioms
          guarantee only the existence of circles, not their intersections.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        The great advantage of coordinates is that all questions about
        intersections become questions about <strong>solutions of
        equations</strong>, which algebra can answer. In this case, the algebra
        shows that existence of the intersection depends on existence of the
        number <InlineMath>\sqrt{'{3}'}</InlineMath>.
      </p>

      {/* Constructible Points Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Nature of Constructible Points
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Key Theorem
        </h4>
        <p className="text-dark-200">
          Points constructible by ruler and compass have coordinates obtainable
          from 1 by the <strong>rational operations</strong> (+, −, ×, ÷) and{' '}
          <strong>square roots</strong>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This follows because ruler and compass constructions involve only:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">1.</span>
            <span>
              <strong>Line through two points:</strong> Equation has coefficients
              from rational operations on the points' coordinates.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              <strong>Circle with center and radius:</strong> Equation has
              coefficients from rational operations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">3.</span>
            <span>
              <strong>Intersection of two lines:</strong> Found by rational
              operations (solving linear equations).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">4.</span>
            <span>
              <strong>Line meets circle:</strong> Gives a quadratic equation—solved
              by rational operations plus one square root.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">5.</span>
            <span>
              <strong>Two circles:</strong> Reduces to line-circle case after
              subtracting equations.
            </span>
          </li>
        </ul>
      </div>

      {/* Impossibility Results */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Solving Ancient Problems
      </h3>

      <p className="text-dark-200 mb-6">
        If a number is <em>not</em> expressible by rational operations and square
        roots, the corresponding point is <strong>not constructible</strong> by
        ruler and compass. This opens the way for algebraic attack on problems of
        constructibility.
      </p>

      <Callout type="success">
        <p>
          After 2000 years of unsuccessful attempts, some Greek problems were
          finally shown to be <strong>impossible</strong>. For example,{' '}
          <InlineMath>\sqrt[3]{'{2}'}</InlineMath> is not constructible—so the
          famous problem of <strong>doubling the cube</strong> has no solution!
        </p>
      </Callout>

      {/* Converse Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Converse</h3>

      <p className="text-dark-200 mb-6">
        There is also a converse: any point with coordinates expressible by
        rational operations and square roots <em>is</em> constructible. The key
        constructions are:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Addition/Subtraction" />
          <p className="text-xs text-dark-300">
            Join lengths end to end, or mark off one from another.
          </p>
        </Card>
        <Card>
          <CardHeader title="Multiplication" />
          <p className="text-xs text-dark-300">
            Use similar triangles to construct ab from a and b.
          </p>
        </Card>
        <Card>
          <CardHeader title="Division" />
          <p className="text-xs text-dark-300">
            Use similar triangles to construct a/b.
          </p>
        </Card>
        <Card>
          <CardHeader title="Square Root" />
          <p className="text-xs text-dark-300">
            A semicircle construction gives √a from a.
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
              <strong>Intersections</strong> in analytic geometry reduce to
              solving equations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Euclid's axioms have a <strong>defect</strong>: they don't guarantee
              that circles intersect!
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Constructible points</strong> have coordinates involving
              only +, −, ×, ÷, and √.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <InlineMath>\sqrt[3]{'{2}'}</InlineMath> is <strong>not</strong>{' '}
              constructible, proving doubling the cube is impossible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>converse</strong> also holds: rational operations and
              square roots give constructible lengths.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={20} questions={section20Questions} />
    </LessonLayout>
  );
}
