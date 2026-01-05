import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section69Questions } from '../../data/quizzes';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2 className="text-2xl font-semibold mb-4">
        Square Roots and the Euclidean Algorithm
      </h2>

      <Callout type="info">
        <p>
          <strong>Advanced Topic:</strong> This section explores continued
          fractions for square roots and their remarkable periodicity—the key
          to finding fundamental solutions of Pell's equation.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        The Euclidean algorithm applies not just to integers, but to certain
        irrational numbers too! Applying it to <InlineMath>\sqrt{'{d}'}</InlineMath>{' '}
        reveals beautiful periodic patterns.
      </p>

      {/* Continued Fractions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Continued Fractions
      </h3>

      <p className="text-dark-200 mb-6">
        A <strong>continued fraction</strong> expresses a number as:
      </p>

      <MathBlock>
        {`a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cfrac{1}{a_3 + \\cdots}}}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        We write this compactly as <InlineMath>[a_0; a_1, a_2, a_3, \ldots]</InlineMath>.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          The Euclidean Process
        </h4>
        <p className="text-dark-200 mb-4">
          To find the continued fraction of <InlineMath>x</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            Set <InlineMath>a_0 = \lfloor x \rfloor</InlineMath> (floor of{' '}
            <InlineMath>x</InlineMath>)
          </li>
          <li>
            If <InlineMath>x - a_0 \neq 0</InlineMath>, compute{' '}
            <InlineMath>x_1 = 1/(x - a_0)</InlineMath>
          </li>
          <li>Repeat with <InlineMath>x_1</InlineMath></li>
        </ol>
      </div>

      {/* Example: √2 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Example: <InlineMath>\sqrt{'{2}'}</InlineMath>
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          For <InlineMath>\sqrt{'{2}'} \approx 1.414</InlineMath>:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>a_0 = 1</InlineMath>, remainder{' '}
            <InlineMath>\sqrt{'{2}'} - 1 \approx 0.414</InlineMath>
          </li>
          <li>
            <InlineMath>x_1 = 1/(\sqrt{'{2}'} - 1) = \sqrt{'{2}'} + 1 \approx 2.414</InlineMath>
          </li>
          <li>
            <InlineMath>a_1 = 2</InlineMath>, remainder{' '}
            <InlineMath>\sqrt{'{2}'} - 1</InlineMath>
          </li>
          <li>The pattern repeats!</li>
        </ul>
        <p className="text-dark-200 mt-4 font-semibold">
          <InlineMath>\sqrt{'{2}'} = [1; 2, 2, 2, 2, \ldots] = [1; \overline{'{2}'}]</InlineMath>
        </p>
      </div>

      {/* Periodicity Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Lagrange's Periodicity Theorem
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Lagrange's Theorem (1770)
        </h4>
        <p className="text-dark-200">
          The continued fraction expansion of <InlineMath>\sqrt{'{d}'}</InlineMath>{' '}
          (for <InlineMath>d</InlineMath> not a perfect square) is{' '}
          <em>eventually periodic</em>. In fact, it has the form:
        </p>
        <MathBlock>
          {`\\sqrt{d} = [a_0; \\overline{a_1, a_2, \\ldots, a_n, 2a_0}]`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          The period always ends with <InlineMath>2a_0</InlineMath>!
        </p>
      </div>

      {/* More Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        More Continued Fractions
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-3 text-dark-200">
          <p>
            <InlineMath>\sqrt{'{3}'} = [1; \overline{'{1, 2}'}]</InlineMath>
          </p>
          <p>
            <InlineMath>\sqrt{'{5}'} = [2; \overline{'{4}'}]</InlineMath>
          </p>
          <p>
            <InlineMath>\sqrt{'{7}'} = [2; \overline{'{1, 1, 1, 4}'}]</InlineMath>
          </p>
          <p>
            <InlineMath>\sqrt{'{13}'} = [3; \overline{'{1, 1, 1, 1, 6}'}]</InlineMath>
          </p>
        </div>
        <p className="text-dark-300 text-sm mt-4">
          Notice: the last term in each period is twice the initial term.
        </p>
      </div>

      {/* Convergents */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Convergents</h3>

      <p className="text-dark-200 mb-6">
        Truncating a continued fraction gives <strong>convergents</strong>—rational
        approximations to the irrational number:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          For <InlineMath>\sqrt{'{2}'} = [1; 2, 2, 2, \ldots]</InlineMath>:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>p_0/q_0 = 1/1 = 1</InlineMath>
          </li>
          <li>
            <InlineMath>p_1/q_1 = 1 + 1/2 = 3/2 = 1.5</InlineMath>
          </li>
          <li>
            <InlineMath>p_2/q_2 = 1 + 1/(2 + 1/2) = 7/5 = 1.4</InlineMath>
          </li>
          <li>
            <InlineMath>p_3/q_3 = 17/12 \approx 1.4167</InlineMath>
          </li>
        </ul>
        <p className="text-dark-300 text-sm mt-4">
          These converge rapidly to <InlineMath>\sqrt{'{2}'} \approx 1.4142</InlineMath>!
        </p>
      </div>

      <Callout type="info">
        <p>
          Convergents are the <em>best</em> rational approximations—no fraction
          with a smaller denominator can be closer to the target!
        </p>
      </Callout>

      {/* Connection to Pell */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Pell's Equation
      </h3>

      <p className="text-dark-200 mb-6">
        The remarkable fact: convergents <InlineMath>p_n/q_n</InlineMath> of{' '}
        <InlineMath>\sqrt{'{d}'}</InlineMath> satisfy{' '}
        <InlineMath>p_n^2 - dq_n^2 = \pm 1</InlineMath> at the end of each period!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200">
          For <InlineMath>\sqrt{'{2}'}</InlineMath>:
        </p>
        <ul className="space-y-2 text-dark-200 mt-3">
          <li>
            <InlineMath>1^2 - 2 \cdot 1^2 = -1</InlineMath>
          </li>
          <li>
            <InlineMath>3^2 - 2 \cdot 2^2 = 9 - 8 = 1</InlineMath> ✓
          </li>
          <li>
            <InlineMath>7^2 - 2 \cdot 5^2 = 49 - 50 = -1</InlineMath>
          </li>
          <li>
            <InlineMath>17^2 - 2 \cdot 12^2 = 289 - 288 = 1</InlineMath> ✓
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
              Continued fractions express numbers as nested reciprocals
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\sqrt{'{d}'}</InlineMath> has a periodic continued
              fraction (Lagrange)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Convergents give optimal rational approximations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Convergents at period end solve Pell's equation
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={69} questions={section69Questions} />
    </LessonLayout>
  );
}
