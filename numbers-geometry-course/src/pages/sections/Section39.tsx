import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section39Questions } from '../../data/quizzes';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-semibold mb-4">Addition Formulas</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        After the Pythagorean identity{' '}
        <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>, the most
        important relations between cos and sin are the{' '}
        <strong>addition formulas</strong>. These tell us how to compute cos
        and sin of a sum from the cos and sin of the parts.
      </p>

      {/* The Addition Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Addition Formulas
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Addition Formulas for Cosine and Sine
        </h4>
        <MathBlock>
          {`\\cos(\\theta + \\phi) = \\cos\\theta\\cos\\phi - \\sin\\theta\\sin\\phi`}
        </MathBlock>
        <MathBlock>
          {`\\sin(\\theta + \\phi) = \\sin\\theta\\cos\\phi + \\cos\\theta\\sin\\phi`}
        </MathBlock>
      </div>

      {/* Proof Sketch */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Geometric Proof</h3>

      <p className="text-dark-200 mb-6">
        The cosine formula can be proved by a clever geometric construction.
        Consider a point <InlineMath>C</InlineMath> at unit distance from{' '}
        <InlineMath>O</InlineMath> at angle <InlineMath>\theta + \phi</InlineMath>.
        We can decompose the horizontal distance <InlineMath>\cos(\theta + \phi)</InlineMath>{' '}
        by:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>
            • First moving to angle <InlineMath>\phi</InlineMath> (distance{' '}
            <InlineMath>\cos\phi</InlineMath> horizontally)
          </li>
          <li>
            • Then rotating by <InlineMath>\theta</InlineMath>, which projects
            the horizontal and vertical components
          </li>
          <li>
            • The result: <InlineMath>\cos\theta\cos\phi - \sin\theta\sin\phi</InlineMath>
          </li>
        </ul>
      </div>

      {/* De Moivre's Formula */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        De Moivre's Formula
      </h3>

      <p className="text-dark-200 mb-6">
        By a kind of miracle, both addition formulas unite in one simple
        formula using <InlineMath>i = \sqrt{'{-1}'}</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          De Moivre's Formula (1730)
        </h4>
        <MathBlock>
          {`\\cos(\\theta + \\phi) + i\\sin(\\theta + \\phi) = (\\cos\\theta + i\\sin\\theta)(\\cos\\phi + i\\sin\\phi)`}
        </MathBlock>
      </div>

      <Callout type="info">
        <p>
          If we abbreviate <InlineMath>\cos\theta + i\sin\theta</InlineMath> as{' '}
          <InlineMath>\text{'{cis}'}\,\theta</InlineMath>, then the addition
          formulas become spectacularly simple:{' '}
          <InlineMath>\text{'{cis}'}(\theta + \phi) = \text{'{cis}'}\,\theta \cdot \text{'{cis}'}\,\phi</InlineMath>.
          This multiplicative property hints at a connection to exponentials!
        </p>
      </Callout>

      {/* Double Angle Formulas */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Double Angle Formulas
      </h3>

      <p className="text-dark-200 mb-6">
        Setting <InlineMath>\phi = \theta</InlineMath> gives the{' '}
        <strong>double angle formulas</strong>:
      </p>

      <MathBlock>{`\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta`}</MathBlock>
      <MathBlock>{`\\sin 2\\theta = 2\\sin\\theta\\cos\\theta`}</MathBlock>

      <p className="text-dark-200 my-6">
        Using <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>, the
        cosine formula can be rewritten:
      </p>

      <MathBlock>
        {`\\cos 2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta`}
      </MathBlock>

      {/* Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Applications</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Multiple Angles" />
          <p className="text-xs text-dark-300">
            <InlineMath>\cos n\theta</InlineMath> is a polynomial in{' '}
            <InlineMath>\cos\theta</InlineMath>. Viète used this to solve
            45th-degree equations!
          </p>
        </Card>
        <Card>
          <CardHeader title="Calculus" />
          <p className="text-xs text-dark-300">
            The addition formulas help prove that the derivative of{' '}
            <InlineMath>\sin x</InlineMath> is <InlineMath>\cos x</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Viète's Product" />
          <p className="text-xs text-dark-300">
            Repeated use gives <InlineMath>\frac{'{2}{\\pi}'} = \cos\frac{'{\\pi}{4}'}\cos\frac{'{\\pi}{8}'}\cos\frac{'{\\pi}{16}'}\cdots</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Triple Angle" />
          <p className="text-xs text-dark-300">
            <InlineMath>\cos 3\theta = 4\cos^3\theta - 3\cos\theta</InlineMath>,{' '}
            <InlineMath>\sin 3\theta = 3\sin\theta - 4\sin^3\theta</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Derivatives */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connection to Calculus
      </h3>

      <p className="text-dark-200 mb-6">
        Using the addition formula for sine and the limits from Section 38:
      </p>

      <MathBlock>
        {`\\frac{\\sin(\\alpha + \\theta) - \\sin\\alpha}{\\theta} = \\sin\\alpha \\cdot \\frac{\\cos\\theta - 1}{\\theta} + \\cos\\alpha \\cdot \\frac{\\sin\\theta}{\\theta}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        As <InlineMath>\theta \to 0</InlineMath>, this approaches{' '}
        <InlineMath>\cos\alpha</InlineMath>. This shows that the{' '}
        <strong>derivative</strong> of <InlineMath>\sin x</InlineMath> at{' '}
        <InlineMath>x = \alpha</InlineMath> is <InlineMath>\cos\alpha</InlineMath>.
        Similarly, the derivative of <InlineMath>\cos x</InlineMath> is{' '}
        <InlineMath>-\sin x</InlineMath>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>\cos(\theta + \phi) = \cos\theta\cos\phi - \sin\theta\sin\phi</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <InlineMath>\sin(\theta + \phi) = \sin\theta\cos\phi + \cos\theta\sin\phi</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>De Moivre's formula</strong> unifies both using complex
              numbers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Double angle:</strong>{' '}
              <InlineMath>\cos 2\theta = \cos^2\theta - \sin^2\theta</InlineMath>,{' '}
              <InlineMath>\sin 2\theta = 2\sin\theta\cos\theta</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              These formulas are essential for <strong>calculus</strong> and
              higher mathematics.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={39} questions={section39Questions} />
    </LessonLayout>
  );
}
