import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section66Questions } from '../../data/quizzes';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2 className="text-2xl font-semibold mb-4">Quadratic Curves</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The standard forms for conics assume special coordinate systems. Can
        <em> every</em> quadratic curve be transformed into standard form? Yes!
        Through <strong>rotation</strong> and <strong>translation</strong> of
        axes, any quadratic curve reveals its true nature.
      </p>

      {/* General Quadratic Equation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The General Quadratic Equation
      </h3>

      <p className="text-dark-200 mb-6">
        The most general degree 2 equation in two variables is:
      </p>

      <MathBlock>
        {`ax^2 + bxy + cy^2 + dx + ey + f = 0`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The presence of the <InlineMath>xy</InlineMath> term (when{' '}
        <InlineMath>b \neq 0</InlineMath>) indicates that the coordinate axes
        are not aligned with the natural axes of the curve.
      </p>

      {/* Rotation of Axes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rotation of Axes</h3>

      <p className="text-dark-200 mb-6">
        To eliminate the <InlineMath>xy</InlineMath> term, we rotate the
        coordinate system by an angle <InlineMath>\theta</InlineMath>:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Rotation Formulas
        </h4>
        <MathBlock>
          {`x = X\\cos\\theta - Y\\sin\\theta`}
        </MathBlock>
        <MathBlock>
          {`y = X\\sin\\theta + Y\\cos\\theta`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          Here <InlineMath>(X, Y)</InlineMath> are the new coordinates after
          rotation by <InlineMath>\theta</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The <InlineMath>xy</InlineMath> term vanishes when we choose{' '}
        <InlineMath>\theta</InlineMath> such that:
      </p>

      <MathBlock>
        {`\\tan 2\\theta = \\frac{b}{a - c}`}
      </MathBlock>

      {/* Translation of Axes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Translation of Axes</h3>

      <p className="text-dark-200 mb-6">
        After eliminating the <InlineMath>xy</InlineMath> term, we have an
        equation of the form:
      </p>

      <MathBlock>
        {`AX^2 + CY^2 + DX + EY + F = 0`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Translation (shifting the origin) eliminates the linear terms{' '}
        <InlineMath>DX</InlineMath> and <InlineMath>EY</InlineMath>, bringing
        the equation to standard form.
      </p>

      {/* The Discriminant */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Discriminant
      </h3>

      <p className="text-dark-200 mb-6">
        Remarkably, we can determine the type of conic <em>without</em> doing
        any transformation—using the <strong>discriminant</strong>:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Classification by Discriminant
        </h4>
        <MathBlock>
          {`\\Delta = b^2 - 4ac`}
        </MathBlock>
        <div className="mt-4 space-y-2 text-dark-200">
          <p>
            <InlineMath>\Delta &lt; 0</InlineMath>: <strong>Ellipse</strong> (or
            circle, or degenerate)
          </p>
          <p>
            <InlineMath>\Delta = 0</InlineMath>: <strong>Parabola</strong> (or
            degenerate)
          </p>
          <p>
            <InlineMath>\Delta &gt; 0</InlineMath>: <strong>Hyperbola</strong>{' '}
            (or degenerate)
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          The discriminant <InlineMath>b^2 - 4ac</InlineMath> is <em>invariant</em>{' '}
          under rotation and translation! It depends only on the curve itself,
          not on the coordinate system.
        </p>
      </Callout>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Classify:</strong>{' '}
          <InlineMath>xy + x - y = 1</InlineMath>
        </p>
        <p className="text-dark-200 mb-4">
          Here <InlineMath>a = 0</InlineMath>, <InlineMath>b = 1</InlineMath>,{' '}
          <InlineMath>c = 0</InlineMath>, so:
        </p>
        <MathBlock>
          {`\\Delta = 1^2 - 4(0)(0) = 1 > 0`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Since <InlineMath>\Delta &gt; 0</InlineMath>, this is a{' '}
          <strong>hyperbola</strong>. The asymptotes are parallel to the x and
          y axes (rotated 45° from the standard position).
        </p>
      </div>

      {/* Degenerate Cases */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Degenerate Cases</h3>

      <p className="text-dark-200 mb-6">
        Not every quadratic equation gives a conic section. The{' '}
        <strong>degenerate</strong> cases include:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Point" />
          <p className="text-xs text-dark-300">
            <InlineMath>x^2 + y^2 = 0</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Degenerate ellipse</p>
        </Card>
        <Card>
          <CardHeader title="Intersecting Lines" />
          <p className="text-xs text-dark-300">
            <InlineMath>xy = 0</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Degenerate hyperbola</p>
        </Card>
        <Card>
          <CardHeader title="Parallel Lines" />
          <p className="text-xs text-dark-300">
            <InlineMath>x^2 = 1</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Degenerate parabola</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        When the quadratic factors completely, we get lines instead of curves.
        These cases arise when the cutting plane passes through the apex of
        the cone.
      </p>

      {/* The Hyperbola xy = 1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Hyperbola <InlineMath>xy = 1</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        The equation <InlineMath>xy = 1</InlineMath> represents a hyperbola
        with asymptotes along the coordinate axes. Its connection to number
        theory will be crucial in the coming sections!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200">
          The curve <InlineMath>xy = 1</InlineMath> passes through{' '}
          <InlineMath>(1, 1)</InlineMath> and <InlineMath>(-1, -1)</InlineMath>.
          After a 45° rotation, it becomes{' '}
          <InlineMath>\frac{'{X^2}'}{2} - \frac{'{Y^2}'}{2} = 1</InlineMath>,
          the standard form of a hyperbola.
        </p>
      </div>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Any quadratic curve can be transformed to standard form
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Rotation eliminates the <InlineMath>xy</InlineMath> term;
              translation eliminates linear terms
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Discriminant <InlineMath>b^2 - 4ac</InlineMath> classifies conics
              invariantly
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Degenerate cases give points or lines instead of curves
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={66} questions={section66Questions} />
    </LessonLayout>
  );
}
