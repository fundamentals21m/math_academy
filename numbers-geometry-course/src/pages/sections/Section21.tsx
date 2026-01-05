import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section21Questions } from '../../data/quizzes';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-semibold mb-4">The Real Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The results of the last section show that all lengths needed in the
        geometry of straight lines and circles arise from{' '}
        <strong>rational operations and square roots</strong>. If we want to
        treat these lengths as numbers, we need to understand square roots—and
        ultimately, all irrational numbers.
      </p>

      {/* The Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Challenge</h3>

      <p className="text-dark-200 mb-6">
        Not only do we have to understand <InlineMath>\sqrt{'{2}'}</InlineMath>,{' '}
        <InlineMath>\sqrt{'{3}'}</InlineMath>, and so on, but also more
        complicated numbers like:
      </p>

      <MathBlock>{`\\sqrt{1 + \\sqrt{2}} \\quad\\text{and}\\quad \\sqrt{\\sqrt{2} + \\sqrt{3}}`}</MathBlock>

      <p className="text-dark-200 my-6">
        because these lengths are all constructible. The simplest solution was
        discovered by <strong>Dedekind in 1858</strong>.
      </p>

      {/* Dedekind's Idea */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dedekind's Insight</h3>

      <p className="text-dark-200 mb-6">
        Dedekind's idea comes from reflecting on the "position" an irrational
        number occupies among the rationals. Consider{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath>:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Upper Bounds" />
          <p className="text-xs text-dark-300 font-mono">
            2, 1.5, 1.42, 1.415, 1.4143, 1.41422, 1.414214, ...
          </p>
          <p className="text-xs text-dark-400 mt-2">
            Each has square {">"} 2
          </p>
        </Card>
        <Card>
          <CardHeader title="Lower Bounds" />
          <p className="text-xs text-dark-300 font-mono">
            1, 1.4, 1.41, 1.414, 1.4142, 1.41421, 1.414213, ...
          </p>
          <p className="text-xs text-dark-400 mt-2">
            Each has square {"<"} 2
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          The exact position of <InlineMath>\sqrt{'{2}'}</InlineMath> can be
          specified by the set <strong>L</strong> of all positive rationals with
          squares {"<"} 2, and the set <strong>U</strong> of positive rationals
          with squares {">"} 2, because there is no other number that fits
          between these two sets.
        </p>
      </Callout>

      {/* The Key Insight */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Revolutionary Step</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Dedekind's Definition
        </h4>
        <p className="text-dark-200">
          <InlineMath>\sqrt{'{2}'}</InlineMath> <em>is</em> the pair of sets
          (L, U). More generally, a <strong>cut</strong> in the rationals{' '}
          <em>defines</em> an irrational number.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        It takes a while to absorb this idea. Everyone thinks that{' '}
        <InlineMath>\sqrt{'{2}'}</InlineMath> is already "there," and we only
        have to compute it. But the real problem is to <em>define</em> it.
      </p>

      <Callout type="success">
        <p>
          The beauty of Dedekind's definition is that it requires nothing new,
          only sets of objects already assumed to exist:{' '}
          <strong>the rational numbers</strong>.
        </p>
      </Callout>

      {/* Formal Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Formal Definitions</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">
          Positive Irrational Number
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          A pair (L, U) of sets of positive rationals such that:
        </p>
        <ul className="text-dark-300 text-sm space-y-2">
          <li>• L and U together include all positive rationals</li>
          <li>• Each member of L is less than every member of U</li>
          <li>• L has no greatest member and U has no least member</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Each rational number <em>a</em> also makes a cut: into L<sub>a</sub> ={' '}
        {'{'}rationals {"<"} a{'}'} and U<sub>a</sub> = {'{'}rationals ≥ a{'}'}.
        The only difference is that U<sub>a</sub> has a least member, namely a.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Positive Real Number</h4>
        <p className="text-dark-300 text-sm mb-4">
          A pair (L, U) of sets of positive rationals such that:
        </p>
        <ul className="text-dark-300 text-sm space-y-2">
          <li>• L and U together include all positive rationals</li>
          <li>• Each member of L is less than every member of U</li>
          <li>• L has no greatest member</li>
        </ul>
        <p className="text-dark-400 text-xs mt-4">
          (This includes both rationals and irrationals)
        </p>
      </div>

      {/* Why This Matters */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why This Matters</h3>

      <p className="text-dark-200 mb-6">
        Dedekind's definition solved multiple problems at once:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <strong>Geometry:</strong> Every length can be represented by a
              real number
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <strong>Calculus:</strong> Limits and continuity can be defined
              rigorously
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <strong>Algebra:</strong> The real numbers form a complete ordered
              field
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          Dedekind realized in 1858 that calculus, geometry, and the concept of
          irrational could all be clarified in <strong>one fell swoop</strong>.
          This completed the reconciliation of arithmetic and geometry begun by
          Fermat and Descartes.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              An irrational number can be identified by its{' '}
              <strong>position</strong> among the rationals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              A <strong>Dedekind cut</strong> (L, U) partitions rationals into
              those below and above the number.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The cut <em>is</em> the number—no need for a number to already
              "exist."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Real numbers</strong> = rationals + irrationals, all
              defined via cuts.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              This definition united <strong>geometry, algebra, and
              calculus</strong> on a common foundation.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={21} questions={section21Questions} />
    </LessonLayout>
  );
}
