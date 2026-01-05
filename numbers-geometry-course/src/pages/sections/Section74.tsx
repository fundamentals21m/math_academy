import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section74Questions } from '../../data/quizzes';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h2 className="text-2xl font-semibold mb-4">
        The Natural Logarithm and the Exponential
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The area under the hyperbola <InlineMath>xy = 1</InlineMath> gives
        rise to the <strong>natural logarithm</strong>—one of the most
        important functions in mathematics. Its inverse is the{' '}
        <strong>exponential function</strong>.
      </p>

      {/* Definition of log */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Defining the Natural Logarithm
      </h3>

      <p className="text-dark-200 mb-6">
        The hyperbola <InlineMath>xy = 1</InlineMath> (or{' '}
        <InlineMath>y = 1/x</InlineMath>) has a transcendental area function,
        but one with beautiful properties.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Definition of <InlineMath>\log t</InlineMath>
        </h4>
        <p className="text-dark-200">
          The <strong>natural logarithm</strong> of <InlineMath>t</InlineMath>{' '}
          is the area under the curve <InlineMath>xy = 1</InlineMath> from{' '}
          <InlineMath>x = 1</InlineMath> to <InlineMath>x = t</InlineMath>.
        </p>
        <MathBlock>
          {`\\log t = \\text{area from } x = 1 \\text{ to } x = t`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        By this definition:
      </p>
      <ul className="space-y-2 text-dark-200 mb-6 ml-4">
        <li>
          • <InlineMath>\log 1 = 0</InlineMath> (no area when{' '}
          <InlineMath>t = 1</InlineMath>)
        </li>
        <li>
          • <InlineMath>\log t &gt; 0</InlineMath> for{' '}
          <InlineMath>t &gt; 1</InlineMath>
        </li>
        <li>
          • <InlineMath>\log t &lt; 0</InlineMath> for{' '}
          <InlineMath>0 &lt; t &lt; 1</InlineMath> (area with negative sign)
        </li>
      </ul>

      {/* The Additive Property */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Additive Property
      </h3>

      <p className="text-dark-200 mb-6">
        The most remarkable property of the logarithm follows directly from
        the geometry of <InlineMath>y = 1/x</InlineMath>:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Additive Property of log
        </h4>
        <p className="text-dark-200 mb-4">
          For positive real numbers <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath>:
        </p>
        <MathBlock>
          {`\\log(ab) = \\log a + \\log b`}
        </MathBlock>
      </div>

      <h4 className="text-lg font-medium mt-6 mb-3">Proof</h4>

      <p className="text-dark-200 mb-6">
        Consider the area from <InlineMath>x = 1</InlineMath> to{' '}
        <InlineMath>x = ab</InlineMath>. Split it at{' '}
        <InlineMath>x = a</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Area from <InlineMath>1</InlineMath> to <InlineMath>a</InlineMath>{' '}
              is <InlineMath>\log a</InlineMath> by definition.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Area from <InlineMath>a</InlineMath> to <InlineMath>ab</InlineMath>{' '}
              is <InlineMath>a</InlineMath> times as long as from{' '}
              <InlineMath>1</InlineMath> to <InlineMath>b</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              But it's also <InlineMath>1/a</InlineMath> times as high (because{' '}
              <InlineMath>y = 1/x</InlineMath>).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              So the areas are equal: area from <InlineMath>a</InlineMath> to{' '}
              <InlineMath>ab</InlineMath> = <InlineMath>\log b</InlineMath>.
            </span>
          </li>
        </ul>
      </div>

      {/* Consequences */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Consequences of the Additive Property
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">1.</span>
            <span>
              <InlineMath>\log a^n = n \log a</InlineMath> for any integer{' '}
              <InlineMath>n</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              The log function takes each real value exactly once
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">3.</span>
            <span>
              There exists a number <InlineMath>e</InlineMath> with{' '}
              <InlineMath>\log e = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">4.</span>
            <span>
              <InlineMath>x = e^y</InlineMath> if and only if{' '}
              <InlineMath>y = \log x</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* The Number e */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Number <InlineMath>e</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        The number <InlineMath>e</InlineMath> is defined as the unique number
        whose natural logarithm equals 1:
      </p>

      <MathBlock>
        {`\\log e = 1, \\quad e \\approx 2.71828...`}
      </MathBlock>

      <Callout type="info">
        <p>
          The number <InlineMath>e</InlineMath> is <strong>transcendental</strong>
          —it's not the root of any polynomial with integer coefficients. This
          was proved by Charles Hermite in 1873.
        </p>
      </Callout>

      {/* The Exponential Function */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Exponential Function
      </h3>

      <p className="text-dark-200 mb-6">
        The <strong>exponential function</strong> <InlineMath>e^x</InlineMath>{' '}
        is defined as the inverse of the logarithm:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Definition of <InlineMath>e^x</InlineMath>
        </h4>
        <p className="text-dark-200">
          <InlineMath>e^y</InlineMath> is the number <InlineMath>x</InlineMath>{' '}
          whose logarithm is <InlineMath>y</InlineMath>:
        </p>
        <MathBlock>
          {`x = e^y \\iff y = \\log x`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The graph of <InlineMath>t = e^y</InlineMath> is obtained by swapping
        the axes of <InlineMath>y = \log t</InlineMath>. It shows exponential
        growth: slow for negative <InlineMath>y</InlineMath>, rapid for
        positive <InlineMath>y</InlineMath>.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\log t</InlineMath> = area under{' '}
              <InlineMath>xy = 1</InlineMath> from 1 to{' '}
              <InlineMath>t</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Additive property: <InlineMath>\log(ab) = \log a + \log b</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>e \approx 2.718</InlineMath> is defined by{' '}
              <InlineMath>\log e = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>e^x</InlineMath> is the inverse of{' '}
              <InlineMath>\log x</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={74} questions={section74Questions} />
    </LessonLayout>
  );
}
