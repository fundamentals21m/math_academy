import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section76Questions } from '../../data/quizzes';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h2 className="text-2xl font-semibold mb-4">The Hyperbolic Functions</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Just as the circle <InlineMath>x^2 + y^2 = 1</InlineMath> is
        parametrized by <InlineMath>\cos\theta</InlineMath> and{' '}
        <InlineMath>\sin\theta</InlineMath>, the hyperbola{' '}
        <InlineMath>x^2 - y^2 = 1</InlineMath> is parametrized by the{' '}
        <strong>hyperbolic cosine</strong> and <strong>hyperbolic sine</strong>.
      </p>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Definitions
      </h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Hyperbolic Cosine and Sine
        </h4>
        <MathBlock>
          {`\\cosh\\theta = \\frac{e^\\theta + e^{-\\theta}}{2}`}
        </MathBlock>
        <MathBlock>
          {`\\sinh\\theta = \\frac{e^\\theta - e^{-\\theta}}{2}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        These names are justified by the fundamental identity:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          The Hyperbolic Identity
        </h4>
        <MathBlock>
          {`\\cosh^2\\theta - \\sinh^2\\theta = 1`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          This is the hyperbolic analog of <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong>
      </p>
      <MathBlock>
        {`\\cosh^2\\theta - \\sinh^2\\theta = \\frac{(e^\\theta + e^{-\\theta})^2}{4} - \\frac{(e^\\theta - e^{-\\theta})^2}{4} = \\frac{4}{4} = 1`}
      </MathBlock>

      {/* Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Properties</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\cosh(-\theta) = \cosh\theta</InlineMath> (even function)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\sinh(-\theta) = -\sinh\theta</InlineMath> (odd function)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\cosh\theta \geq 1</InlineMath> for all{' '}
              <InlineMath>\theta</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\sinh\theta</InlineMath> takes each real value exactly once
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Thus each point on the positive branch (<InlineMath>x &gt; 0</InlineMath>)
        of <InlineMath>x^2 - y^2 = 1</InlineMath> corresponds to a unique{' '}
        <InlineMath>\theta</InlineMath>:
      </p>

      <MathBlock>
        {`P_\\theta = (\\cosh\\theta, \\sinh\\theta)`}
      </MathBlock>

      {/* Addition Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Addition Formulas</h3>

      <p className="text-dark-200 mb-6">
        The hyperbolic functions satisfy addition formulas similar to{' '}
        <InlineMath>\cos</InlineMath> and <InlineMath>\sin</InlineMath>:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\cosh(\\theta + \\phi) = \\cosh\\theta\\cosh\\phi + \\sinh\\theta\\sinh\\phi`}
        </MathBlock>
        <MathBlock>
          {`\\sinh(\\theta + \\phi) = \\sinh\\theta\\cosh\\phi + \\cosh\\theta\\sinh\\phi`}
        </MathBlock>
      </div>

      <Callout type="info">
        <p>
          Notice the <InlineMath>+</InlineMath> in the cosh formula (vs.{' '}
          <InlineMath>-</InlineMath> for cos). This is because{' '}
          <InlineMath>\cosh i\theta = \cos\theta</InlineMath> and{' '}
          <InlineMath>\sinh i\theta = i\sin\theta</InlineMath>.
        </p>
      </Callout>

      {/* Adding Points */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Adding Points on the Hyperbola
      </h3>

      <p className="text-dark-200 mb-6">
        Points on the hyperbola can be "added" by adding their parameters:
      </p>

      <MathBlock>
        {`P_\\theta + P_\\phi = P_{\\theta + \\phi}`}
      </MathBlock>

      <p className="text-dark-200 mb-6">
        The coordinates of <InlineMath>P_{'{\\theta + \\phi}'}</InlineMath> are
        computed using the addition formulas. This "addition" of points has
        remarkable connections to integer solutions of Pell's equation!
      </p>

      {/* Connection to Circular Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Circular Functions
      </h3>

      <p className="text-dark-200 mb-6">
        Euler's formula reveals the deep connection between hyperbolic and
        circular functions:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\cos\\theta = \\cosh(i\\theta)`}
        </MathBlock>
        <MathBlock>
          {`\\sin\\theta = \\frac{1}{i}\\sinh(i\\theta)`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          The circular and hyperbolic functions are the same function with
          different arguments—real for hyperbolic, imaginary for circular!
        </p>
      </div>

      {/* Area Interpretation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Area Interpretation
      </h3>

      <p className="text-dark-200 mb-6">
        Just as <InlineMath>\theta</InlineMath> in{' '}
        <InlineMath>(\cos\theta, \sin\theta)</InlineMath> is twice the sector
        area of the circle, the parameter <InlineMath>\theta</InlineMath> in{' '}
        <InlineMath>(\cosh\theta, \sinh\theta)</InlineMath> is twice the area
        of a hyperbolic "sector."
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\cosh\theta = (e^\theta + e^{'{-\\theta}'})/2</InlineMath>,{' '}
              <InlineMath>\sinh\theta = (e^\theta - e^{'{-\\theta}'})/2</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\cosh^2\theta - \sinh^2\theta = 1</InlineMath> (hyperbolic identity)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Points <InlineMath>P_\theta = (\cosh\theta, \sinh\theta)</InlineMath>{' '}
              lie on <InlineMath>x^2 - y^2 = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Addition formulas allow "adding" points on the hyperbola
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={76} questions={section76Questions} />
    </LessonLayout>
  );
}
