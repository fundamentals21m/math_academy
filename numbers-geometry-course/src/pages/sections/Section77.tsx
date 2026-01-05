import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section77Questions } from '../../data/quizzes';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <h2 className="text-2xl font-semibold mb-4">The Pell Equation Revisited</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The hyperbolic functions provide a beautiful new perspective on
        Pell's equation <InlineMath>x^2 - dy^2 = 1</InlineMath>. The rule for
        generating integer solutions turns out to be the same as "adding
        points" using hyperbolic function addition formulas!
      </p>

      {/* Parametrizing the General Hyperbola */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Parametrizing <InlineMath>x^2 - dy^2 = 1</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        For any nonsquare positive integer <InlineMath>d</InlineMath>, the
        hyperbola <InlineMath>x^2 - dy^2 = 1</InlineMath> is parametrized by:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <MathBlock>
          {`x = \\cosh\\theta, \\quad y = \\frac{1}{\\sqrt{d}}\\sinh\\theta`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          This gives a one-to-one correspondence between real numbers{' '}
          <InlineMath>\theta</InlineMath> and points on the positive branch.
        </p>
      </div>

      {/* Rule for Adding Points */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Rule for Adding Points
      </h3>

      <p className="text-dark-200 mb-6">
        Let <InlineMath>P_\theta = (x_\theta, y_\theta)</InlineMath> and{' '}
        <InlineMath>P_\phi = (x_\phi, y_\phi)</InlineMath> be points on{' '}
        <InlineMath>x^2 - dy^2 = 1</InlineMath>. Their "sum"{' '}
        <InlineMath>P_{'{\\theta + \\phi}'}</InlineMath> has coordinates:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Point Addition Formula
        </h4>
        <MathBlock>
          {`x_{\\theta+\\phi} = x_\\theta x_\\phi + d \\cdot y_\\theta y_\\phi`}
        </MathBlock>
        <MathBlock>
          {`y_{\\theta+\\phi} = x_\\theta y_\\phi + y_\\theta x_\\phi`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This formula can also be written:
      </p>

      <MathBlock>
        {`x_{\\theta+\\phi} + y_{\\theta+\\phi}\\sqrt{d} = (x_\\theta + y_\\theta\\sqrt{d})(x_\\phi + y_\\phi\\sqrt{d})`}
      </MathBlock>

      <Callout type="info">
        <p>
          This is exactly the multiplication rule we used in Chapter 8 to
          generate integer solutions! The hyperbolic functions reveal that
          it's really just addition of parameter values.
        </p>
      </Callout>

      {/* Integer Points Form a Group */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Integer Points Form a Group
      </h3>

      <p className="text-dark-200 mb-6">
        The integer points on the positive branch of{' '}
        <InlineMath>x^2 - dy^2 = 1</InlineMath> form a <strong>subgroup</strong>{' '}
        of all points (under the addition operation).
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Closure:</strong> The sum of two integer points is an
              integer point (by the addition formula).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Identity:</strong> The point <InlineMath>(1, 0)</InlineMath>{' '}
              is the identity (parameter <InlineMath>\theta = 0</InlineMath>).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Inverses:</strong> If <InlineMath>(x, y)</InlineMath> is
              an integer point, so is <InlineMath>(x, -y)</InlineMath>.
            </span>
          </li>
        </ul>
      </div>

      {/* Infinite Cyclic Group */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        An Infinite Cyclic Group
      </h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Generation Theorem
        </h4>
        <p className="text-dark-200">
          All integer points on <InlineMath>x^2 - dy^2 = 1</InlineMath> result
          from <InlineMath>(1, 0)</InlineMath> and the <strong>nearest</strong>{' '}
          integer point to it by addition and subtraction.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        In other words, the integer points form an <strong>infinite cyclic
        group</strong> generated by the fundamental solution!
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Example: <InlineMath>x^2 - 2y^2 = 1</InlineMath>
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          The fundamental solution is <InlineMath>(3, 2)</InlineMath>. Adding
          this to itself:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            • <InlineMath>P_1 = (3, 2)</InlineMath>
          </li>
          <li>
            • <InlineMath>P_1 + P_1 = P_2</InlineMath>:{' '}
            <InlineMath>x = 3 \cdot 3 + 2 \cdot 2 \cdot 2 = 17</InlineMath>,{' '}
            <InlineMath>y = 3 \cdot 2 + 2 \cdot 3 = 12</InlineMath>
          </li>
          <li>
            • <InlineMath>P_2 + P_1 = P_3</InlineMath>:{' '}
            <InlineMath>(99, 70)</InlineMath>
          </li>
        </ul>
        <p className="text-dark-200 mt-4">
          These are <em>all</em> the positive integer solutions!
        </p>
      </div>

      {/* The Big Picture */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Big Picture
      </h3>

      <p className="text-dark-200 mb-6">
        This connection between hyperbolic functions and Pell's equation shows
        a remarkable "pre-established harmony" between:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Arithmetic:</strong> Integer solutions generated by
              multiplying <InlineMath>x + y\sqrt{'{d}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Geometry:</strong> Points on a hyperbola added by
              parameter values
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Analysis:</strong> Hyperbolic functions defined via
              exponentials
            </span>
          </li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>x^2 - dy^2 = 1</InlineMath> parametrized by{' '}
              <InlineMath>(\cosh\theta, \frac{'{1}'}{'{\\sqrt{d}}'}\sinh\theta)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Point addition ↔ multiplication of{' '}
              <InlineMath>x + y\sqrt{'{d}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Integer points form an infinite cyclic group
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The fundamental solution generates all solutions
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={77} questions={section77Questions} />
    </LessonLayout>
  );
}
