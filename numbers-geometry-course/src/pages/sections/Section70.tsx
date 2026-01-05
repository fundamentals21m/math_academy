import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section70Questions } from '../../data/quizzes';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2 className="text-2xl font-semibold mb-4">Pell's Equation</h2>

      <Callout type="info">
        <p>
          <strong>Advanced Topic:</strong> Pell's equation{' '}
          <InlineMath>x^2 - dy^2 = 1</InlineMath> is one of the most famous
          equations in number theory, connecting conics, continued fractions,
          and algebraic number theory.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        Named after John Pell (though he didn't study it!), this equation has
        fascinated mathematicians since ancient times. Its solutions arise
        naturally from continued fractions.
      </p>

      {/* History */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Historical Background</h3>

      <p className="text-dark-200 mb-6">
        The equation <InlineMath>x^2 - 2y^2 = 1</InlineMath> was studied by the
        ancient Greeks, who found that solutions give excellent rational
        approximations to <InlineMath>\sqrt{'{2}'}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Indian mathematicians (especially <strong>Brahmagupta</strong> in the
          7th century) developed systematic methods to solve{' '}
          <InlineMath>x^2 - dy^2 = 1</InlineMath> for various{' '}
          <InlineMath>d</InlineMath>.
        </p>
        <p className="text-dark-200">
          <strong>Lagrange</strong> (1770) proved the complete theory using
          continued fractions.
        </p>
      </div>

      {/* Main Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Main Theorem
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Existence of Solutions
        </h4>
        <p className="text-dark-200">
          For any positive integer <InlineMath>d</InlineMath> that is not a
          perfect square, the equation <InlineMath>x^2 - dy^2 = 1</InlineMath>{' '}
          has infinitely many positive integer solutions.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The proof uses continued fractions: the convergent{' '}
        <InlineMath>p_n/q_n</InlineMath> at the end of the first period of{' '}
        <InlineMath>\sqrt{'{d}'}</InlineMath> gives the fundamental solution!
      </p>

      {/* Finding Fundamental Solutions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Finding the Fundamental Solution
      </h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">Algorithm</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            Compute the continued fraction of <InlineMath>\sqrt{'{d}'}</InlineMath>
          </li>
          <li>Find the period length <InlineMath>n</InlineMath></li>
          <li>
            If <InlineMath>n</InlineMath> is even, the fundamental solution is{' '}
            <InlineMath>(p_{'n-1'}, q_{'n-1'})</InlineMath>
          </li>
          <li>
            If <InlineMath>n</InlineMath> is odd, use{' '}
            <InlineMath>(p_{'2n-1'}, q_{'2n-1'})</InlineMath>
          </li>
        </ol>
      </div>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="space-y-6">
          <div>
            <p className="text-dark-200 font-semibold">
              <InlineMath>x^2 - 2y^2 = 1</InlineMath>
            </p>
            <p className="text-dark-300">
              <InlineMath>\sqrt{'{2}'} = [1; \overline{'{2}'}]</InlineMath>,
              period = 1
            </p>
            <p className="text-dark-300">
              Fundamental solution: <InlineMath>(3, 2)</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-dark-200 font-semibold">
              <InlineMath>x^2 - 3y^2 = 1</InlineMath>
            </p>
            <p className="text-dark-300">
              <InlineMath>\sqrt{'{3}'} = [1; \overline{'{1, 2}'}]</InlineMath>,
              period = 2
            </p>
            <p className="text-dark-300">
              Fundamental solution: <InlineMath>(2, 1)</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-dark-200 font-semibold">
              <InlineMath>x^2 - 61y^2 = 1</InlineMath>
            </p>
            <p className="text-dark-300">Period = 11 (long!)</p>
            <p className="text-dark-300">
              Fundamental solution: <InlineMath>(1766319049, 226153980)</InlineMath>
            </p>
          </div>
        </div>
      </div>

      <Callout type="info">
        <p>
          The fundamental solution can be surprisingly large! For{' '}
          <InlineMath>d = 61</InlineMath>, it has 10 digits. Fermat famously
          challenged mathematicians to find it.
        </p>
      </Callout>

      {/* Dirichlet's Approximation Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Dirichlet's Approximation Theorem
      </h3>

      <p className="text-dark-200 mb-6">
        The existence of solutions to Pell's equation follows from a general
        principle about approximating irrationals:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Dirichlet's Theorem
        </h4>
        <p className="text-dark-200">
          For any irrational <InlineMath>\alpha</InlineMath> and any{' '}
          <InlineMath>N</InlineMath>, there exist integers{' '}
          <InlineMath>p, q</InlineMath> with{' '}
          <InlineMath>1 \leq q \leq N</InlineMath> such that:
        </p>
        <MathBlock>
          {`\\left| \\alpha - \\frac{p}{q} \\right| < \\frac{1}{qN}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This guarantees infinitely many "good" rational approximations. For{' '}
        <InlineMath>\alpha = \sqrt{'{d}'}</InlineMath>, these approximations
        come from convergents, which solve Pell's equation!
      </p>

      {/* Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Applications</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Approximating square roots:</strong> Solutions give
              excellent rational approximations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Units in number fields:</strong> Solutions correspond to
              units in <InlineMath>\mathbb{'{Z}'}[\sqrt{'{d}'}]</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Cryptography:</strong> The discrete log problem in the
              multiplicative group
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
              Pell's equation <InlineMath>x^2 - dy^2 = 1</InlineMath> always
              has infinitely many solutions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The fundamental solution comes from continued fractions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              All solutions are powers of the fundamental solution
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Dirichlet's theorem guarantees good rational approximations
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={70} questions={section70Questions} />
    </LessonLayout>
  );
}
