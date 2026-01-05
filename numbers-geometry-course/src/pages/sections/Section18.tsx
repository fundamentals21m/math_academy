import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section18Questions } from '../../data/quizzes';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mb-4">Discussion: The Pythagorean Influence</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Pythagorean philosophy that "all is number" has come down to us
        through legends rather than hard evidence. Nevertheless, these legends
        were persistent enough to influence the development of mathematics and
        physics until the present day.
      </p>

      {/* The Discovery of Musical Harmony */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Discovery of Musical Harmony
      </h3>

      <p className="text-dark-200 mb-6">
        The story goes that the Pythagoreans came to believe in the power of
        numbers through discovering their role in <strong>music</strong>. They
        found, by studying the sounds of plucked strings, that the most
        harmonious notes were produced by strings whose lengths were in simple
        integer ratios.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Musical Intervals</h4>
        <p className="text-dark-300 text-sm mb-4">
          For strings of the same material, thickness, and tension:
        </p>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-center gap-3">
            <span className="text-purple-400 font-mono">2:1</span>
            <span>→ Octave</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-purple-400 font-mono">3:2</span>
            <span>→ Perfect Fifth</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-purple-400 font-mono">4:3</span>
            <span>→ Perfect Fourth</span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          If the subjective experience of harmony can be explained by numbers,
          perhaps <em>anything</em> can—or so the Pythagoreans may have thought.
        </p>
      </Callout>

      {/* The Harmony of the Spheres */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Harmony of the Spheres</h3>

      <p className="text-dark-200 mb-6">
        The best-known example of Pythagorean influence was the "harmony of the
        spheres," which tried to explain the positions of the planets by numbers.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="The Dream" />
          <p className="text-xs text-dark-300">
            Planetary positions determined by musical ratios. Haunted astronomy
            from Aristotle (~350 BC) to Kepler (1571–1630).
          </p>
        </Card>
        <Card>
          <CardHeader title="The Reality" />
          <p className="text-xs text-dark-300">
            Newton's theory of gravitation provided a better explanation, based
            on inverse-square forces rather than integer ratios.
          </p>
        </Card>
      </CardGrid>

      {/* The Irony of Pythagorean Music Theory */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Irony of Pythagorean Music Theory
      </h3>

      <p className="text-dark-200 mb-6">
        If the Pythagoreans really believed that "all is number" (meaning natural
        numbers and their ratios), then it is ironic that their own philosophy
        was brought down by the Pythagorean theorem and the irrationality of{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          An Even Greater Irony
        </h4>
        <p className="text-dark-300 text-sm">
          Pythagorean music theory <em>itself</em> is fundamentally irrational!
          This becomes apparent when comparing the "size" of different musical
          intervals.
        </p>
      </div>

      {/* The Pythagorean Comma */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Pythagorean Comma</h3>

      <p className="text-dark-200 mb-6">
        According to legend, Pythagoras himself tried to compare the octave and
        the perfect fifth, finding that:
      </p>

      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>
          7 octaves corresponds to multiplying string length by{' '}
          <InlineMath>2^7 = 128</InlineMath>
        </li>
        <li>
          12 perfect fifths corresponds to multiplying by{' '}
          <InlineMath>(3/2)^{'{12}'} = 129.746...</InlineMath>
        </li>
      </ul>

      <Callout type="warning">
        <p>
          These are <strong>very close, but not equal</strong>. The small
          difference is called the <em>Pythagorean comma</em>, and it makes it
          impossible to tune an instrument perfectly using only integer ratios.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        This means that the ratio of an octave to a perfect fifth is:
      </p>

      <MathBlock>
        {`\\frac{7 \\text{ octaves}}{12 \\text{ fifths}} = \\frac{\\log 2^7}{\\log (3/2)^{12}} = \\frac{7 \\log 2}{12(\\log 3 - \\log 2)}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        which is irrational! Perfect tuning using pure ratios is mathematically
        impossible.
      </p>

      {/* The Reconciliation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Broader Reconciliation</h3>

      <p className="text-dark-200 mb-6">
        Despite these ironies, the Pythagorean dream of understanding nature
        through numbers has been remarkably successful—just not in the way they
        imagined:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              Numbers describe nature—but <strong>real numbers</strong>, not just
              rationals
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              Arithmetic and geometry are unified—through <strong>analytic
              geometry</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              Simple laws govern complex phenomena—through <strong>calculus</strong>{' '}
              and differential equations
            </span>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The Pythagoreans discovered that <strong>musical harmony</strong>{' '}
              corresponds to simple integer ratios (2:1, 3:2, 4:3).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The "harmony of the spheres" tried to explain astronomy through
              numbers, until <strong>Newton's gravitation</strong> provided a
              better theory.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Ironically, <strong>music theory itself</strong> involves irrational
              numbers—the Pythagorean comma shows perfect tuning is impossible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The Pythagorean dream succeeded by <strong>expanding</strong> the
              number concept to include all real numbers.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={18} questions={section18Questions} />
    </LessonLayout>
  );
}
