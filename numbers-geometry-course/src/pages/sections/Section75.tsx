import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section75Questions } from '../../data/quizzes';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h2 className="text-2xl font-semibold mb-4">The Exponential Function</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The exponential function <InlineMath>e^x</InlineMath> is arguably the
        most important function in mathematics. Its simple addition formula
        and deep connections to trigonometry make it central to both pure and
        applied mathematics.
      </p>

      {/* Addition Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Addition Formula
      </h3>

      <p className="text-dark-200 mb-6">
        The additive property of log translates into a multiplicative
        property for the exponential:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Addition Formula for <InlineMath>e^x</InlineMath>
        </h4>
        <MathBlock>
          {`e^{a+b} = e^a \\cdot e^b`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          This is the characteristic property of exponents—it justifies
          treating <InlineMath>e^x</InlineMath> as a power of{' '}
          <InlineMath>e</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Proof:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            • <InlineMath>e^{'{a+b}'}</InlineMath> is the number whose log is{' '}
            <InlineMath>a + b</InlineMath>
          </li>
          <li>
            • By the additive property of log,{' '}
            <InlineMath>a + b = \log(e^a \cdot e^b)</InlineMath>
          </li>
          <li>
            • Therefore <InlineMath>e^{'{a+b}'} = e^a \cdot e^b</InlineMath>
          </li>
        </ul>
      </div>

      {/* Why e? */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Why Use <InlineMath>e</InlineMath>?
      </h3>

      <p className="text-dark-200 mb-6">
        We could use powers of any positive number, like{' '}
        <InlineMath>2^x</InlineMath> or <InlineMath>10^x</InlineMath>. Why is{' '}
        <InlineMath>e</InlineMath> special?
      </p>

      <p className="text-dark-200 mb-6">
        The properties of <InlineMath>a^x</InlineMath> often involve{' '}
        <InlineMath>\log a</InlineMath>. Since <InlineMath>\log e = 1</InlineMath>,
        formulas are simplest when the base is <InlineMath>e</InlineMath>.
      </p>

      {/* Formulas for e */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Formulas for <InlineMath>e</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        The number <InlineMath>e</InlineMath> can be computed from these
        remarkable formulas:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-blue-400 font-semibold mb-2">Limit formula:</p>
            <MathBlock>
              {`e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n`}
            </MathBlock>
          </div>
          <div>
            <p className="text-blue-400 font-semibold mb-2">Series formula:</p>
            <MathBlock>
              {`e^x = 1 + \\frac{x}{1!} + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}
            </MathBlock>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        Setting <InlineMath>x = 1</InlineMath> gives:
      </p>

      <MathBlock>
        {`e = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\cdots \\approx 2.71828`}
      </MathBlock>

      {/* Euler's Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Euler's Formula
      </h3>

      <p className="text-dark-200 mb-6">
        The most spectacular connection of <InlineMath>e</InlineMath> to
        other mathematics comes from Euler (1748):
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Euler's Formula
        </h4>
        <MathBlock>
          {`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This remarkable formula unifies exponential and trigonometric
        functions! The special case <InlineMath>\theta = \pi</InlineMath>
        gives:
      </p>

      <MathBlock>
        {`e^{i\\pi} = -1`}
      </MathBlock>

      <Callout type="info">
        <p>
          This equation, <InlineMath>e^{'{i\\pi}'} + 1 = 0</InlineMath>,
          connects five fundamental constants:{' '}
          <InlineMath>e</InlineMath>, <InlineMath>i</InlineMath>,{' '}
          <InlineMath>\pi</InlineMath>, <InlineMath>1</InlineMath>, and{' '}
          <InlineMath>0</InlineMath>. It is often called "the most beautiful
          equation in mathematics."
        </p>
      </Callout>

      {/* Transcendence Proof */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Transcendence of <InlineMath>e^x</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Euler's formula proves that <InlineMath>e^x</InlineMath> is transcendental:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>
            • If <InlineMath>e^x</InlineMath> were algebraic, the equation{' '}
            <InlineMath>e^x = 1</InlineMath> would have only finitely many
            solutions.
          </li>
          <li>
            • But <InlineMath>e^{'{2\\pi in}'} = (\cos 2\pi + i\sin 2\pi)^n = 1</InlineMath>{' '}
            for all integers <InlineMath>n</InlineMath>.
          </li>
          <li>
            • So <InlineMath>e^x = 1</InlineMath> has infinitely many solutions:{' '}
            <InlineMath>x = 2\pi in</InlineMath>.
          </li>
        </ul>
      </div>

      {/* Historical Note */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Historical Note
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1873</span>
            <span>
              <strong>Hermite</strong> proved <InlineMath>e</InlineMath> is
              transcendental—the first "known" transcendental number.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1882</span>
            <span>
              <strong>Lindemann</strong> proved <InlineMath>\pi</InlineMath> is
              transcendental, building on Hermite's method.
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
              Addition formula: <InlineMath>e^{'{a+b}'} = e^a \cdot e^b</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>e = \lim(1 + 1/n)^n = 1 + 1 + 1/2! + 1/3! + \cdots</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Euler's formula:{' '}
              <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>e^{'{i\\pi}'} + 1 = 0</InlineMath> connects five
              fundamental constants
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={75} questions={section75Questions} />
    </LessonLayout>
  );
}
