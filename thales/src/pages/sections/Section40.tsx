import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section40Questions } from '../../data/quizzes';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-semibold mb-4">Quaternions Applied to Physics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Hamilton intended to apply quaternions to physics, but he was stymied by
        the fact that physical space has only <strong>three dimensions</strong>.
        Nevertheless, quaternions found remarkable applications in electromagnetism
        and relativity.
      </p>

      {/* Scalar and Vector Parts */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Scalar and Vector Parts</h3>

      <Callout type="definition" title="Decomposition of a Quaternion">
        <p className="mb-2">
          Writing a quaternion <InlineMath>{`x`}</InlineMath> as{' '}
          <InlineMath>{`x = x_0 + \\boldsymbol{\\xi}`}</InlineMath>, where:
        </p>
        <MathBlock>{`\\boldsymbol{\\xi} = i_1 x_1 + i_2 x_2 + i_3 x_3`}</MathBlock>
        <p className="mt-2">
          we call <InlineMath>{`x_0`}</InlineMath> the <strong>scalar part</strong>{' '}
          and <InlineMath>{`\\boldsymbol{\\xi}`}</InlineMath> the <strong>vector part</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        A <strong>3-vector</strong> is a quaternion whose scalar part is 0. Unfortunately,
        if we multiply two vectors <InlineMath>{`\\boldsymbol{\\xi}`}</InlineMath> and{' '}
        <InlineMath>{`\\boldsymbol{\\eta}`}</InlineMath>, we obtain not a vector, but a
        full quaternion.
      </p>

      {/* Heaviside's Vector Analysis */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Heaviside's Vector Analysis</h3>

      <p className="text-dark-200 mb-4">
        <strong>Oliver Heaviside</strong> pointed out the importance of the two
        separate parts of the product <InlineMath>{`\\boldsymbol{\\xi} \\boldsymbol{\\eta}`}</InlineMath>:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Scalar (Dot) Product</CardHeader>
          <MathBlock>{`\\boldsymbol{\\xi} \\circ \\boldsymbol{\\eta} = x_1 y_1 + x_2 y_2 + x_3 y_3`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            The negative of the scalar part of{' '}
            <InlineMath>{`\\boldsymbol{\\xi} \\boldsymbol{\\eta}`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader>Vector (Cross) Product</CardHeader>
          <MathBlock>{`\\boldsymbol{\\xi} \\times \\boldsymbol{\\eta} = (y_2 x_3 - x_2 y_3) i_1 + \\cdots`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            The vector part of{' '}
            <InlineMath>{`\\boldsymbol{\\xi} \\boldsymbol{\\eta}`}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        Heaviside's <strong>vector analysis</strong> soon replaced the use of
        quaternions in physics. It enabled him to give a concise formulation of
        Maxwell's laws of electromagnetism.
      </p>

      {/* Maxwell's Equations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Maxwell's Equations</h3>

      <p className="text-dark-200 mb-4">
        Writing <InlineMath>{`\\nabla = i_1 \\frac{\\partial}{\\partial x_1} + i_2 \\frac{\\partial}{\\partial x_2} + i_3 \\frac{\\partial}{\\partial x_3}`}</InlineMath>{' '}
        for the vector representing partial differentiation, Maxwell's equations become:
      </p>

      <Card className="mb-6">
        <CardHeader>Maxwell's Equations (Vector Form)</CardHeader>
        <div className="text-dark-300 space-y-2">
          <MathBlock>{`\\nabla \\circ M = 0`}</MathBlock>
          <MathBlock>{`\\nabla \\times E + \\frac{\\partial M}{c \\partial t} = 0`}</MathBlock>
          <MathBlock>{`\\nabla \\circ E = \\rho`}</MathBlock>
          <MathBlock>{`\\nabla \\times M - \\frac{\\partial E}{c \\partial t} = \\rho \\frac{d\\boldsymbol{\\xi}}{c \\, dt}`}</MathBlock>
          <p className="text-sm mt-2">
            where <InlineMath>{`E`}</InlineMath> and <InlineMath>{`M`}</InlineMath>{' '}
            are the electric and magnetic fields, <InlineMath>{`c`}</InlineMath>{' '}
            is the speed of light, and <InlineMath>{`\\rho`}</InlineMath> is charge density.
          </p>
        </div>
      </Card>

      <Callout type="note" title="Maxwell's Praise of Quaternions">
        <p>
          Maxwell wrote: "The invention of the calculus of quaternions is a step
          towards the knowledge of quantities related to space which can only be
          compared, for its importance, with the invention of triple coordinates
          by Descartes."
        </p>
      </Callout>

      {/* Einstein's Relativity */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Einstein's Theory of Relativity</h3>

      <p className="text-dark-200 mb-4">
        Einstein's theory made it clear that space and time should be combined
        into a single entity, and that the expression:
      </p>

      <MathBlock>{`s^2 = c^2 t^2 - x^2 - y^2 - z^2`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        should be <strong>invariant</strong> under coordinate transformations passing
        from a stationary to a moving platform.
      </p>

      {/* Minkowski Space */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Minkowski Space</h3>

      <p className="text-dark-200 mb-4">
        The minus sign in <InlineMath>{`s^2`}</InlineMath> suggests we are talking
        about the norm of a quaternion with <em>imaginary</em> vector part:
      </p>

      <MathBlock>{`x = x_0 + i\\boldsymbol{\\xi}, \\quad x_0 = ct`}</MathBlock>

      <Callout type="definition" title="Minkowski Space">
        <p>
          A point in <strong>Minkowski space</strong> (an event in space-time) is
          represented by a quaternion whose scalar part is real, but whose vector
          part is imaginary. We have <InlineMath>{`s^2 = N(x)`}</InlineMath>.
        </p>
      </Callout>

      {/* Biquaternions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Biquaternions</h3>

      <Callout type="definition" title="Biquaternion">
        <p className="mb-2">
          A <strong>biquaternion</strong> is a quaternion with <em>complex</em>{' '}
          coefficients:
        </p>
        <MathBlock>{`a = a_0 + i_1 a_1 + i_2 a_2 + i_3 a_3 \\quad (a_k \\in \\mathbb{C})`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        We must distinguish two types of conjugation:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Quaternion Conjugate</CardHeader>
          <MathBlock>{`a^t = a_0 - i_1 a_1 - i_2 a_2 - i_3 a_3`}</MathBlock>
        </Card>
        <Card>
          <CardHeader>Complex Conjugate</CardHeader>
          <MathBlock>{`a^c = \\bar{a}_0 + i_1 \\bar{a}_1 + i_2 \\bar{a}_2 + i_3 \\bar{a}_3`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        A biquaternion <InlineMath>{`x`}</InlineMath> is called <strong>Hermitian</strong>{' '}
        if <InlineMath>{`x^t = x^c`}</InlineMath>. This characterizes quaternions
        describing points in Minkowski space.
      </p>

      {/* Lorentz Transformations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lorentz Transformations</h3>

      <Callout type="theorem" title="Lorentz Transformation via Biquaternions">
        <p className="mb-2">
          A <strong>Lorentz transformation</strong> sends{' '}
          <InlineMath>{`x`}</InlineMath> onto:
        </p>
        <MathBlock>{`x \\mapsto p x p^{ct}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`p`}</InlineMath> is a biquaternion of norm 1.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Properties</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            If <InlineMath>{`x`}</InlineMath> is Hermitian, so is{' '}
            <InlineMath>{`pxp^{ct}`}</InlineMath>.
          </p>
          <p>
            The norm is preserved:{' '}
            <InlineMath>{`N(pxp^{ct}) = N(x)N(p) = N(x)`}</InlineMath>{' '}
            since <InlineMath>{`N(p) = 1`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Mass-Energy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mass, Momentum, and Energy</h3>

      <p className="text-dark-200 mb-4">
        Another Hermitian biquaternion which transforms like{' '}
        <InlineMath>{`x`}</InlineMath> under Lorentz transformations is:
      </p>

      <MathBlock>{`m_0 \\frac{dx}{ds} = m + im\\frac{d\\boldsymbol{\\xi}}{c \\, dt}`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`m_0`}</InlineMath> is the <strong>rest mass</strong>{' '}
        (invariant under Lorentz transformations) and{' '}
        <InlineMath>{`m\\frac{d\\boldsymbol{\\xi}}{dt}`}</InlineMath> is the momentum.
      </p>

      <Callout type="theorem" title="Einstein's Mass-Energy Equivalence">
        <p className="mb-2">
          If <InlineMath>{`v`}</InlineMath> is small compared to{' '}
          <InlineMath>{`c`}</InlineMath>:
        </p>
        <MathBlock>{`mc^2 = m_0 c^2 \\left(1 - \\frac{v^2}{c^2}\\right)^{-1/2} \\approx m_0 c^2 + \\frac{1}{2}m_0 v^2`}</MathBlock>
        <p className="mt-2">
          Einstein identified <InlineMath>{`E = mc^2`}</InlineMath> as the{' '}
          <strong>total energy</strong>, consisting of rest energy{' '}
          <InlineMath>{`m_0 c^2`}</InlineMath> and kinetic energy{' '}
          <InlineMath>{`\\frac{1}{2}m_0 v^2`}</InlineMath>.
        </p>
      </Callout>

      {/* Maxwell and Lorentz Invariance */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Maxwell's Equations and Lorentz Invariance</h3>

      <p className="text-dark-200 mb-4">
        Using biquaternion notation, Maxwell's four equations can be combined into
        a single equation. The fact that Maxwell's equations are preserved under
        Lorentz transformations appears to have been first noted by <strong>Poincaré</strong>.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• A quaternion <InlineMath>{`x = x_0 + \\boldsymbol{\\xi}`}</InlineMath>{' '}
            has <strong>scalar</strong> and <strong>vector</strong> parts</li>
          <li>• <strong>Heaviside</strong> extracted dot and cross products from
            quaternion multiplication</li>
          <li>• <strong>Maxwell's equations</strong> can be written concisely using
            vector notation</li>
          <li>• <strong>Minkowski space</strong>: quaternion with real scalar, imaginary
            vector part</li>
          <li>• The invariant <InlineMath>{`s^2 = c^2t^2 - x^2 - y^2 - z^2`}</InlineMath>{' '}
            is the quaternion norm</li>
          <li>• <strong>Biquaternions</strong> have complex coefficients</li>
          <li>• <strong>Lorentz transformations</strong>:{' '}
            <InlineMath>{`x \\mapsto pxp^{ct}`}</InlineMath> with{' '}
            <InlineMath>{`N(p) = 1`}</InlineMath></li>
          <li>• <strong>Einstein's equation</strong>:{' '}
            <InlineMath>{`E = mc^2`}</InlineMath> (total energy)</li>
          <li>• Maxwell's equations are <strong>Lorentz invariant</strong> (Poincaré)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={40} questions={section40Questions} />
    </LessonLayout>
  );
}
