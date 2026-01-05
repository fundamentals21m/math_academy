import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section45Questions } from '../../data/quizzes';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2 className="text-2xl font-semibold mb-4">Discussion</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this chapter, we've explored <strong>trigonometry</strong>—the study
        of circular functions and their remarkable properties. Let's reflect on
        the key themes and their connections to broader mathematics.
      </p>

      {/* Formulas for π */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Formulas for π</h3>

      <p className="text-dark-200 mb-6">
        Finding the value of <InlineMath>\pi</InlineMath>, the circumference of
        a circle with diameter 1, is one of the oldest problems in mathematics.
        The Greeks could only find approximations like Archimedes' bounds:
      </p>

      <MathBlock>{`3\\frac{10}{71} < \\pi < 3\\frac{1}{7}`}</MathBlock>

      <p className="text-dark-200 my-6">
        But around 1500 A.D., mathematicians in India discovered an exact infinite
        description—miraculously simple:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          The Leibniz Formula
        </h4>
        <MathBlock>
          {`\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          "God loves odd numbers!" — Leibniz, upon rediscovering this formula
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This beautiful formula expresses <InlineMath>\pi</InlineMath> as an
        alternating sum of reciprocals of odd numbers—the first exact description
        of <InlineMath>\pi</InlineMath> that transcends finite approximation.
      </p>

      {/* Viète's Product */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Viète's Product</h3>

      <p className="text-dark-200 mb-6">
        Another remarkable formula comes from the half-angle identities. François
        Viète (1593) discovered:
      </p>

      <MathBlock>
        {`\\frac{2}{\\pi} = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2 + \\sqrt{2}}}{2} \\cdot \\frac{\\sqrt{2 + \\sqrt{2 + \\sqrt{2}}}}{2} \\cdots`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This was the <strong>first infinite product</strong> in mathematics—a
        pioneering step toward calculus.
      </p>

      {/* Theme Summary */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Major Themes</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Circles & Angles" />
          <p className="text-xs text-dark-300">
            The unit circle gives meaning to sin and cos for all angles, not just
            those in right triangles.
          </p>
        </Card>
        <Card>
          <CardHeader title="Addition Formulas" />
          <p className="text-xs text-dark-300">
            The formulas for <InlineMath>\sin(\theta + \phi)</InlineMath> and{' '}
            <InlineMath>\cos(\theta + \phi)</InlineMath> unify in de Moivre's formula.
          </p>
        </Card>
        <Card>
          <CardHeader title="Rational Trigonometry" />
          <p className="text-xs text-dark-300">
            Tangent gives a rational addition formula, connecting to Pythagorean
            triples and Diophantus.
          </p>
        </Card>
        <Card>
          <CardHeader title="Dehn's Theorem" />
          <p className="text-xs text-dark-300">
            Trigonometry proves a tetrahedron cannot be cut into a cube—a beautiful
            application to 3D geometry.
          </p>
        </Card>
      </CardGrid>

      {/* Connections */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Connections Across Mathematics
      </h3>

      <p className="text-dark-200 mb-6">
        Trigonometry is far more than a tool for surveying and navigation. It
        connects deeply to:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Complex Numbers:</strong> De Moivre's formula shows{' '}
              <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Calculus:</strong> The derivatives{' '}
              <InlineMath>(\sin x)' = \cos x</InlineMath> and{' '}
              <InlineMath>(\cos x)' = -\sin x</InlineMath> come from the addition
              formulas
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">•</span>
            <span>
              <strong>Number Theory:</strong> Rational points on the circle,
              Pythagorean triples, rational independence
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Abstract Algebra:</strong> The Dehn invariant introduces
              tensor products
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span>
              <strong>Physics:</strong> Waves, vibrations, and harmonic motion
              are all described by circular functions
            </span>
          </li>
        </ul>
      </div>

      {/* Historical Note */}
      <Callout type="info">
        <p>
          The word "trigonometry" comes from Greek: <em>trigonon</em> (triangle) +{' '}
          <em>metron</em> (measure). But the subject has grown far beyond triangles—it
          is really about <strong>periodic functions</strong> and the{' '}
          <strong>circle</strong>.
        </p>
      </Callout>

      {/* Looking Ahead */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Looking Ahead</h3>

      <p className="text-dark-200 mb-6">
        In the next chapter, we'll explore <strong>finite arithmetic</strong>—the
        mathematics of clock arithmetic, modular systems, and the algebraic
        structures that arise when we compute with remainders. This will take us
        toward cryptography and deeper number theory.
      </p>

      {/* Chapter Summary */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Chapter Summary</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Angle measure</strong> is defined via arc length on the unit
              circle, giving rise to radians.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Circular functions</strong> cos and sin extend trigonometry
              to all real numbers and are transcendental.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>addition formulas</strong> are the most important
              properties after <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>tangent addition formula</strong> is rational and
              connects to Pythagorean triples.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Hilbert's Third Problem</strong> was solved by Dehn using
              trigonometry and number theory.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={45} questions={section45Questions} />
    </LessonLayout>
  );
}
