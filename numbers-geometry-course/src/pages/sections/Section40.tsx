import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section40Questions } from '../../data/quizzes';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-semibold mb-4">A Rational Addition Formula</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The addition formulas for sine and cosine involve irrational functions.
        But there's a remarkable rational formula for <strong>tangent</strong>{' '}
        that connects beautifully to our earlier work on Pythagorean triples and
        rational points on the circle.
      </p>

      {/* The Half-Angle Substitution */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Half-Angle Substitution
      </h3>

      <p className="text-dark-200 mb-6">
        Recall from Section 31 that a point on the unit circle at angle{' '}
        <InlineMath>\theta</InlineMath> can be parameterized by the slope{' '}
        <InlineMath>t = \tan(\theta/2)</InlineMath> of the line from{' '}
        <InlineMath>(-1, 0)</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Half-Angle Formulas
        </h4>
        <MathBlock>
          {`\\cos\\theta = \\frac{1 - t^2}{1 + t^2}, \\qquad \\sin\\theta = \\frac{2t}{1 + t^2}`}
        </MathBlock>
        <p className="text-dark-300 mt-3 text-sm">
          where <InlineMath>t = \tan(\theta/2)</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This is exactly Diophantus's parametrization! When{' '}
        <InlineMath>t</InlineMath> is rational, we get a rational point on the
        circle, which corresponds to a Pythagorean triple.
      </p>

      {/* The Tangent Addition Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Tangent Addition Formula
      </h3>

      <p className="text-dark-200 mb-6">
        Using the addition formulas for sine and cosine, we can derive:
      </p>

      <MathBlock>
        {`\\tan(\\theta + \\phi) = \\frac{\\sin(\\theta + \\phi)}{\\cos(\\theta + \\phi)} = \\frac{\\tan\\theta + \\tan\\phi}{1 - \\tan\\theta\\tan\\phi}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This gives us a purely <strong>rational</strong> formula:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Rational Addition Formula
        </h4>
        <p className="text-dark-200 mb-3">
          If the line through <InlineMath>O</InlineMath> at angle{' '}
          <InlineMath>\theta</InlineMath> has slope <InlineMath>s</InlineMath>{' '}
          and the line at angle <InlineMath>\phi</InlineMath> has slope{' '}
          <InlineMath>t</InlineMath>, then the line at angle{' '}
          <InlineMath>\theta + \phi</InlineMath> has slope:
        </p>
        <MathBlock>{`\\frac{s + t}{1 - st}`}</MathBlock>
      </div>

      {/* Solving the Babylonian Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Solving the Babylonian Problem
      </h3>

      <p className="text-dark-200 mb-6">
        With this formula, we can finally solve the problem the Babylonians were
        trying to solve with their table of Pythagorean triples (Plimpton 322).
        They were looking for <strong>equally spaced rational points</strong> on
        an arc of the unit circle.
      </p>

      <p className="text-dark-200 mb-6">
        Starting with a point that has a small angle <InlineMath>\theta</InlineMath>{' '}
        and a rational slope relative to <InlineMath>O</InlineMath>, we can find
        points at angles <InlineMath>2\theta, 3\theta, \ldots</InlineMath> by
        repeated application of the formula.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Example: From (24, 7, 25)
        </h4>
        <p className="text-dark-200 mb-3">
          Start with the Pythagorean triple <InlineMath>(24, 7, 25)</InlineMath>,
          which has slope <InlineMath>s = 7/24</InlineMath> at angle{' '}
          <InlineMath>\theta \approx 16°</InlineMath>.
        </p>
        <p className="text-dark-200 mb-3">
          The point at angle <InlineMath>2\theta</InlineMath> has slope:
        </p>
        <MathBlock>
          {`t = \\frac{2s}{1 - s^2} = \\frac{2 \\times 7/24}{1 - 49/576} = \\frac{336}{527}`}
        </MathBlock>
        <p className="text-dark-200 mt-3">
          This corresponds to the triple <InlineMath>(527, 336, 625)</InlineMath>.
        </p>
      </div>

      {/* Pythagorean Triple Multiplication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Pythagorean Triple "Multiplication"
      </h3>

      <p className="text-dark-200 mb-6">
        Using complex numbers, we can view this as <strong>multiplication</strong>{' '}
        of Pythagorean triples:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>
            • Replace <InlineMath>(a, b, c)</InlineMath> by the point{' '}
            <InlineMath>(a/c, b/c)</InlineMath> on the unit circle
          </li>
          <li>
            • Think of <InlineMath>(a/c, b/c)</InlineMath> as{' '}
            <InlineMath>\cos\theta + i\sin\theta</InlineMath>
          </li>
          <li>
            • Multiply two such numbers to get a new rational point
          </li>
        </ul>
      </div>

      <MathBlock>
        {`(a_1 + ib_1)(a_2 + ib_2) = a_3 + ib_3`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The product of two Pythagorean triples gives another Pythagorean triple!
        For example, the "square" of <InlineMath>(3, 4, 5)</InlineMath> is{' '}
        <InlineMath>(-7, 24, 25)</InlineMath>.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Limitation:</strong> We never return to the initial rational
          point by continuing this process. In fact, it is impossible to divide
          the circle into more than <strong>four equal parts</strong> by rational
          points!
        </p>
      </Callout>

      {/* Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Applications</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Plimpton 322" />
          <p className="text-xs text-dark-300">
            Some triples in the Babylonian tablet can be "factorized" as products
            of simpler triples—angles that are sums of smaller angles.
          </p>
        </Card>
        <Card>
          <CardHeader title="Integration" />
          <p className="text-xs text-dark-300">
            The substitution <InlineMath>t = \tan(\theta/2)</InlineMath> converts
            trigonometric integrals into rational function integrals.
          </p>
        </Card>
        <Card>
          <CardHeader title="Stereographic" />
          <p className="text-xs text-dark-300">
            This connects to stereographic projection from a sphere to a plane.
          </p>
        </Card>
        <Card>
          <CardHeader title="Number Theory" />
          <p className="text-xs text-dark-300">
            The "multiplication" of triples reveals deep connections between
            geometry and algebra.
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
              <InlineMath>\tan(\theta + \phi) = \frac{'{\\tan\\theta + \\tan\\phi}{1 - \\tan\\theta\\tan\\phi}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Rational slopes add via{' '}
              <InlineMath>(s + t)/(1 - st)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Pythagorean triples can be <strong>"multiplied"</strong> using
              complex numbers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              This solves the <strong>Babylonian problem</strong> of finding
              equally spaced rational points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The circle can only be divided into 2 or 4 equal parts by rational
              points.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={40} questions={section40Questions} />
    </LessonLayout>
  );
}
