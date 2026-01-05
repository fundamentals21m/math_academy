import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section72Questions } from '../../data/quizzes';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h2 className="text-2xl font-semibold mb-4">
        Algebraic and Transcendental Functions
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The main theme of this book has been the tension between arithmetic and
        geometry and its creative role in the development of mathematics. In
        this final chapter, we explore functions that <em>transcend</em>{' '}
        algebra—functions that cannot be captured by polynomial equations.
      </p>

      {/* Algebraic Curves and Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Algebraic Curves and Functions
      </h3>

      <p className="text-dark-200 mb-6">
        An <strong>algebraic curve</strong> is defined by a polynomial equation
        in two variables:
      </p>

      <MathBlock>
        {`p(x, y) = 0`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The corresponding <strong>algebraic function</strong>{' '}
        <InlineMath>y</InlineMath> of <InlineMath>x</InlineMath> satisfies this
        equation. Examples include:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Lines" />
          <p className="text-xs text-dark-300">
            <InlineMath>ax + by + c = 0</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Degree 1</p>
        </Card>
        <Card>
          <CardHeader title="Conics" />
          <p className="text-xs text-dark-300">
            <InlineMath>ax^2 + bxy + cy^2 + \cdots = 0</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Degree 2</p>
        </Card>
        <Card>
          <CardHeader title="Square Root" />
          <p className="text-xs text-dark-300">
            <InlineMath>y^2 - x = 0</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">
            <InlineMath>y = \sqrt{'{x}'}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Transcendental Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Transcendental Functions
      </h3>

      <p className="text-dark-200 mb-6">
        Functions that are <em>not</em> algebraic are called{' '}
        <strong>transcendental</strong>—they "transcend" algebra. The most
        familiar examples are the trigonometric functions.
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Why <InlineMath>\sin x</InlineMath> is Transcendental
        </h4>
        <p className="text-dark-200 mb-4">
          The curve <InlineMath>y = \sin x</InlineMath> meets the x-axis at
          infinitely many points: <InlineMath>x = 0, \pm\pi, \pm 2\pi, \ldots</InlineMath>
        </p>
        <p className="text-dark-200">
          But an algebraic curve <InlineMath>p(x, y) = 0</InlineMath> meets the
          x-axis where <InlineMath>p(x, 0) = 0</InlineMath>, which has only{' '}
          <em>finitely many</em> solutions (the degree of the polynomial).
        </p>
      </div>

      <Callout type="info">
        <p>
          Any <strong>periodic</strong> nonconstant function must be
          transcendental, for the same reason: its graph meets horizontal lines
          infinitely many times.
        </p>
      </Callout>

      {/* Arc Length and Area */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Arc Length and Area
      </h3>

      <p className="text-dark-200 mb-6">
        The <strong>arc length</strong> of almost any algebraic curve is a
        transcendental function. This is why we defined sine and cosine in
        terms of arc length—the resulting functions cannot be algebraic!
      </p>

      <p className="text-dark-200 mb-6">
        Similarly, the <strong>area</strong> function of most curves is
        transcendental. However, area turns out to be more manageable than arc
        length, and it will be our key to defining the exponential function.
      </p>

      {/* The Exponential Preview */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Exponential Function
      </h3>

      <p className="text-dark-200 mb-6">
        The most important transcendental function is the{' '}
        <strong>exponential</strong> <InlineMath>e^x</InlineMath>. Remarkably,
        it inherits its basic properties from the geometry of the{' '}
        <strong>hyperbola</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          In the coming sections, we will see that:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The <strong>natural logarithm</strong> is defined as area under
              the hyperbola <InlineMath>xy = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The exponential function is the <em>inverse</em> of the logarithm
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Euler's formula <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath>{' '}
              unifies exponential and trigonometric functions
            </span>
          </li>
        </ul>
      </div>

      {/* The Algebra-Geometry Tension */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Arithmetic-Geometry Tension
      </h3>

      <p className="text-dark-200 mb-6">
        Throughout this book, we've seen arithmetic confront geometry and both
        emerge stronger:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <InlineMath>\sqrt{'{2}'}</InlineMath> challenged arithmetic but
              generated solutions to <InlineMath>x^2 - 2y^2 = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              Coordinates described curves algebraically, fusing geometry with
              polynomials
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              Complex numbers completed algebra while modeling plane geometry
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Now we encounter functions that go beyond algebra entirely, yet reveal
        deep connections between geometry and number theory.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Algebraic functions satisfy polynomial equations{' '}
              <InlineMath>p(x, y) = 0</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Transcendental functions (like sin, cos, exp) are not algebraic
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Periodic functions are transcendental (infinite intersections)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The exponential function inherits properties from the hyperbola
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={72} questions={section72Questions} />
    </LessonLayout>
  );
}
