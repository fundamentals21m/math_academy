import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section15Questions } from '../../data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mb-4">The Pythagorean Theorem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Having seen the main ideas of Greek geometry, we return to the
        Pythagorean theorem to see where it fits in the big picture. Logically,
        it comes <em>after</em> the basic theory of area.
      </p>

      {/* Euclid's Proof */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Proof</h3>

      <p className="text-dark-200 mb-6">
        Euclid uses the fact that a triangle has half the area of a parallelogram
        with the same base and height. His proof relates squares on the sides to
        rectangles carved from the square on the hypotenuse.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">The Argument</h4>
        <p className="text-dark-200 text-sm mb-2">
          For square <InlineMath>ABFG</InlineMath> on one side of the triangle:
        </p>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            Square <InlineMath>ABFG</InlineMath> = 2 × triangle{' '}
            <InlineMath>CFB</InlineMath> (same base and height)
          </li>
          <li>
            = 2 × triangle <InlineMath>ABD</InlineMath> (congruent by SAS)
          </li>
          <li>
            = rectangle <InlineMath>BMLD</InlineMath> (same base and height)
          </li>
        </ul>
        <p className="text-dark-300 mt-3 text-sm">
          Similarly, the square on the other side equals another rectangle, so
          the two squares sum to the square on the hypotenuse.
        </p>
      </div>

      {/* Historical Discovery */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Historical Discovery</h3>

      <p className="text-dark-200 mb-6">
        The Pythagorean theorem was discovered in several different cultures,
        some <em>long before</em> Pythagoras. However, the Pythagoreans deserve
        special mention because they also discovered that{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath> is irrational.
      </p>

      <Callout type="warning">
        <p>
          According to legend, this discovery caused great dismay because it
          conflicted with the Pythagorean philosophy that "<strong>all is
          number</strong>." They initially believed all lengths could be
          measured by natural numbers or their ratios.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        Yet the diagonal of the unit square is a length, and by the Pythagorean
        theorem its square equals 2. So the side and diagonal are <em>not</em>{' '}
        natural number multiples of a common unit!
      </p>

      {/* Consequences */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Consequences of the Conflict</h3>

      <p className="text-dark-200 mb-6">
        The first fruits of the conflict were "bitter" but hugely influential:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">1.</span>
            <span>
              <strong>Separation</strong> of arithmetic and geometry
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">2.</span>
            <span>
              Development of a separate <strong>arithmetic of lengths and areas</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">3.</span>
            <span>
              Preference for <strong>"geometric algebra"</strong>—lengths added by
              joining, multiplied by forming rectangles
            </span>
          </li>
        </ul>
      </div>

      {/* Geometric Algebra */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Geometric Algebra</h3>

      <p className="text-dark-200 mb-6">
        In geometric algebra, lengths are added by joining end to end and
        "multiplied" by forming rectangles. Areas are added by pasting.
      </p>

      <Callout type="info">
        <p>
          The Pythagorean theorem itself exemplifies this approach: the sides
          and hypotenuse are <strong>simply related via their squares</strong>,
          even though they are not simply related as lengths.
        </p>
      </Callout>

      {/* Reconciliation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Eventual Reconciliation</h3>

      <p className="text-dark-200 mb-6">
        The "sweeter fruits" came from reconciling arithmetic and geometry. This
        began only in the 17th century with Fermat and Descartes (analytic
        geometry) and wasn't completed until the late 19th century.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="The Difficulties" />
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• Different styles of thought</li>
            <li>• Subtle defects in Euclid's geometry</li>
            <li>• Arithmetic needed a clear concept of number</li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="The Solutions" />
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• 16th c. algebra made arithmetic competitive</li>
            <li>• Calculus answered questions about curves</li>
            <li>• Dedekind (1858) defined real numbers</li>
          </ul>
        </Card>
      </CardGrid>

      <Callout type="success">
        <p>
          In 1858, <strong>Dedekind</strong> realized that calculus, geometry,
          and the concept of irrational could all be clarified at once. He
          defined <strong>real numbers</strong> to capture all possible lengths,
          completing the reconciliation.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Euclid's proof</strong> uses triangle-parallelogram area
              relationships and congruence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>Pythagoreans</strong> discovered both the theorem and
              the irrationality of <InlineMath>\sqrt{'{2}'}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The conflict led to <strong>separation</strong> of arithmetic and
              geometry and "geometric algebra."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Reconciliation</strong> came through algebra (16th c.),
              calculus (17th c.), and Dedekind's real numbers (19th c.).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The theorem relates lengths via <strong>squares</strong>, even when
              the lengths themselves have no simple ratio.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={15} questions={section15Questions} />
    </LessonLayout>
  );
}
