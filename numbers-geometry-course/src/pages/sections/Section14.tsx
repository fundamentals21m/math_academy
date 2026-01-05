import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section14Questions } from '../../data/quizzes';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">Length and Area</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Arithmetic and geometry come together in the idea of{' '}
        <strong>measurement</strong>. In fact, the very word "geometry" comes
        from the Greek for "land measurement."
      </p>

      {/* Measuring Length */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Measuring Length</h3>

      <p className="text-dark-200 mb-6">
        To measure lengths, we choose a fixed line segment as the{' '}
        <strong>unit of length</strong> and express other lengths as multiples
        of it.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200 text-sm">
          <li>
            • Join copies of the unit end to end → any <strong>natural number</strong>{' '}
            multiple
          </li>
          <li>
            • Divide these into equal parts → any <strong>rational</strong> multiple
          </li>
          <li>
            • For most practical purposes, rational multiples suffice
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          However, we know that <InlineMath>\sqrt{'{2}'}</InlineMath> is{' '}
          <em>not</em> rational! Mathematicians would like to speak of a length{' '}
          <InlineMath>\sqrt{'{2}'}</InlineMath>, even though 1.414 might be close
          enough for carpentry.
        </p>
      </Callout>

      {/* Measuring Area */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Measuring Area</h3>

      <p className="text-dark-200 mb-6">
        Just as length is measured by counting unit lengths, <strong>area</strong>{' '}
        is measured by counting <strong>unit squares</strong>—squares whose sides
        are of unit length.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">
          Area of a Rectangle
        </h4>
        <p className="text-dark-200 mb-3">
          A rectangle of height 3 and width 5 can be cut into{' '}
          <InlineMath>3 \times 5 = 15</InlineMath> unit squares, so its area is 15.
        </p>
        <MathBlock>{`\\text{Area} = \\text{height} \\times \\text{width}`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        How convenient that we call it a "3 × 5 rectangle"! <strong>Multiplication</strong>{' '}
        is the natural symbol because it gives the number of unit squares.
      </p>

      {/* Fractional Sides */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rectangles with Fractional Sides</h3>

      <p className="text-dark-200 mb-6">
        The same idea works for rational dimensions. A rectangle of height{' '}
        <InlineMath>3/2</InlineMath> and width <InlineMath>5/2</InlineMath> can
        be cut into 15 squares of side <InlineMath>1/2</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 text-sm">
          Each small square has area <InlineMath>1/4</InlineMath> (four make a
          unit square), so:
        </p>
        <MathBlock>{`\\text{Area} = \\frac{3}{2} \\times \\frac{5}{2} = \\frac{15}{4}`}</MathBlock>
      </div>

      {/* The sqrt(2) Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The <InlineMath>\sqrt{'{2}'}</InlineMath> Problem
      </h3>

      <p className="text-dark-200 mb-6">
        What about a square with side <InlineMath>\sqrt{'{2}'}</InlineMath>? Is
        its area <InlineMath>\sqrt{'{2}'} \times \sqrt{'{2}'} = 2</InlineMath>?
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Modern Approach" />
          <p className="text-sm text-dark-300">
            The area of an <InlineMath>r \times r</InlineMath> square should be
            close to a <InlineMath>\sqrt{'{2}'} \times \sqrt{'{2}'}</InlineMath>{' '}
            square when <InlineMath>r</InlineMath> is close to{' '}
            <InlineMath>\sqrt{'{2}'}</InlineMath>. So yes, the area is 2.
          </p>
        </Card>
        <Card>
          <CardHeader title="Greek Approach" />
          <p className="text-sm text-dark-300">
            Greeks <em>defined</em> <InlineMath>\sqrt{'{2}'}</InlineMath> as the
            side of a square of area 2. But they didn't regard it as a number,
            requiring a separate arithmetic of lengths.
          </p>
        </Card>
      </CardGrid>

      {/* Cutting and Pasting */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Areas by Cutting and Pasting</h3>

      <p className="text-dark-200 mb-6">
        Once we know the area of a rectangle is height × width, we can find
        areas of other polygons by <strong>cutting and pasting</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Area of a Parallelogram
        </h4>
        <p className="text-dark-200 text-sm mb-3">
          Cut a triangle off one end and paste it on the other to form a rectangle:
        </p>
        <MathBlock>{`\\text{Area of parallelogram} = \\text{base} \\times \\text{height}`}</MathBlock>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Area of a Triangle
        </h4>
        <p className="text-dark-200 text-sm mb-3">
          A triangle is half of a parallelogram (paste two copies together):
        </p>
        <MathBlock>{`\\text{Area of triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}`}</MathBlock>
      </div>

      <Callout type="success">
        <p>
          Any polygon can be cut into triangles, so the area of <em>any</em>{' '}
          polygon can be computed from the triangle formula!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Length</strong> is measured by counting unit lengths;{' '}
              <strong>area</strong> by counting unit squares.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Rectangle area</strong> = height × width. Multiplication
              naturally describes rectangles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Irrational lengths like <InlineMath>\sqrt{'{2}'}</InlineMath> posed
              a problem—Greeks kept geometry and arithmetic separate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Parallelogram area</strong> = base × height (by cut and paste).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Triangle area</strong> = ½ × base × height. All polygon
              areas follow from this.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={14} questions={section14Questions} />
    </LessonLayout>
  );
}
