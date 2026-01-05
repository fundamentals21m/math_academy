import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section68Questions } from '../../data/quizzes';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2 className="text-2xl font-semibold mb-4">Integer Points on Conics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Which points on a conic have <em>integer</em> coordinates? This
        deceptively simple question leads to deep number theory and connects
        back to our study of Pythagorean triples.
      </p>

      {/* The Hyperbola x² - dy² = 1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Hyperbola <InlineMath>x^2 - dy^2 = 1</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Consider the hyperbola <InlineMath>x^2 - 2y^2 = 1</InlineMath>. Does it
        have any integer points besides <InlineMath>(1, 0)</InlineMath> and{' '}
        <InlineMath>(-1, 0)</InlineMath>?
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Integer Solutions to <InlineMath>x^2 - 2y^2 = 1</InlineMath>
        </h4>
        <div className="text-dark-200 space-y-2">
          <p>
            <InlineMath>(1, 0)</InlineMath>: <InlineMath>1 - 0 = 1</InlineMath>{' '}
            ✓
          </p>
          <p>
            <InlineMath>(3, 2)</InlineMath>: <InlineMath>9 - 8 = 1</InlineMath>{' '}
            ✓
          </p>
          <p>
            <InlineMath>(17, 12)</InlineMath>:{' '}
            <InlineMath>289 - 288 = 1</InlineMath> ✓
          </p>
          <p>
            <InlineMath>(99, 70)</InlineMath>:{' '}
            <InlineMath>9801 - 9800 = 1</InlineMath> ✓
          </p>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        There are infinitely many! But how do we find them systematically?
      </p>

      {/* Generation Using √d */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Generation Using <InlineMath>\sqrt{'{d}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        The key insight: if <InlineMath>(x, y)</InlineMath> satisfies{' '}
        <InlineMath>x^2 - dy^2 = 1</InlineMath>, consider the number{' '}
        <InlineMath>x + y\sqrt{'{d}'}</InlineMath>.
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          The Norm Formula
        </h4>
        <p className="text-dark-200 mb-4">
          Define the <strong>norm</strong> of{' '}
          <InlineMath>x + y\sqrt{'{d}'}</InlineMath> as:
        </p>
        <MathBlock>
          {`N(x + y\\sqrt{d}) = x^2 - dy^2`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          <strong>Key property:</strong> The norm is <em>multiplicative</em>:
        </p>
        <MathBlock>
          {`N(\\alpha \\cdot \\beta) = N(\\alpha) \\cdot N(\\beta)`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This means: if <InlineMath>\alpha</InlineMath> has norm 1, then so does{' '}
        <InlineMath>\alpha^2</InlineMath>, <InlineMath>\alpha^3</InlineMath>, ...
      </p>

      {/* Example Generation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Generating Solutions for <InlineMath>x^2 - 2y^2 = 1</InlineMath>
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Start with <InlineMath>\alpha = 3 + 2\sqrt{'{2}'}</InlineMath> (from
          the solution <InlineMath>(3, 2)</InlineMath>).
        </p>
        <p className="text-dark-200 mb-4">
          Compute <InlineMath>\alpha^2</InlineMath>:
        </p>
        <MathBlock>
          {`(3 + 2\\sqrt{2})^2 = 9 + 12\\sqrt{2} + 8 = 17 + 12\\sqrt{2}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          So <InlineMath>(17, 12)</InlineMath> is a solution!
        </p>
        <p className="text-dark-200 mt-4">
          Compute <InlineMath>\alpha^3</InlineMath>:
        </p>
        <MathBlock>
          {`(17 + 12\\sqrt{2})(3 + 2\\sqrt{2}) = 51 + 34\\sqrt{2} + 36\\sqrt{2} + 48 = 99 + 70\\sqrt{2}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          So <InlineMath>(99, 70)</InlineMath> is a solution!
        </p>
      </div>

      {/* Group Structure */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Group of Solutions
      </h3>

      <p className="text-dark-200 mb-6">
        The integer solutions to <InlineMath>x^2 - dy^2 = 1</InlineMath> form
        an <strong>infinite cyclic group</strong> under multiplication of the
        corresponding <InlineMath>x + y\sqrt{'{d}'}</InlineMath> values!
      </p>

      <Callout type="info">
        <p>
          The smallest solution <InlineMath>(x_1, y_1)</InlineMath> with{' '}
          <InlineMath>x_1, y_1 &gt; 0</InlineMath> is called the{' '}
          <strong>fundamental solution</strong>. All other positive solutions
          are generated by taking powers of{' '}
          <InlineMath>x_1 + y_1\sqrt{'{d}'}</InlineMath>.
        </p>
      </Callout>

      {/* Connection to Pythagorean Triples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Pythagorean Triples
      </h3>

      <p className="text-dark-200 mb-6">
        Recall that Pythagorean triples come from rational points on the unit
        circle <InlineMath>x^2 + y^2 = 1</InlineMath>. Similarly:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Circle</strong> <InlineMath>x^2 + y^2 = 1</InlineMath>:
              Uses <InlineMath>i = \sqrt{'{-1}'}</InlineMath> for generation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Hyperbola</strong> <InlineMath>x^2 - dy^2 = 1</InlineMath>:
              Uses <InlineMath>\sqrt{'{d}'}</InlineMath> for generation
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The multiplicative property of norms is the same in both cases—only the
        sign under the square root changes!
      </p>

      {/* The Equation x² - dy² = -1 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Equation <InlineMath>x^2 - dy^2 = -1</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Sometimes <InlineMath>x^2 - dy^2 = -1</InlineMath> also has integer
        solutions. For example, <InlineMath>2^2 - 5 \cdot 1^2 = -1</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        If <InlineMath>(a, b)</InlineMath> solves{' '}
        <InlineMath>x^2 - dy^2 = -1</InlineMath>, then{' '}
        <InlineMath>(a + b\sqrt{'{d}'})^2</InlineMath> has norm{' '}
        <InlineMath>(-1)^2 = 1</InlineMath>, giving a solution to{' '}
        <InlineMath>x^2 - dy^2 = 1</InlineMath>!
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>x^2 - dy^2 = 1</InlineMath> has infinitely many
              integer solutions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Solutions correspond to <InlineMath>x + y\sqrt{'{d}'}</InlineMath>{' '}
              with norm 1
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Multiplication in <InlineMath>\mathbb{'{Z}'}[\sqrt{'{d}'}]</InlineMath>{' '}
              generates all solutions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The fundamental solution generates an infinite cyclic group
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={68} questions={section68Questions} />
    </LessonLayout>
  );
}
