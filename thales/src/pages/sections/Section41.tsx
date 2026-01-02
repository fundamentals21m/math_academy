import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section41Questions } from '../../data/quizzes';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-semibold mb-4">Quaternions in Quantum Mechanics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        If we adopt the representation of quaternions by{' '}
        <InlineMath>{`2 \\times 2`}</InlineMath> complex matrices, the matrices{' '}
        <InlineMath>{`ii_1, ii_2, ii_3`}</InlineMath> are known as the{' '}
        <strong>Pauli spin matrices</strong> (except for sign). This connection
        leads to deep applications in quantum mechanics.
      </p>

      {/* Pauli Spin Matrices */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Pauli Spin Matrices</h3>

      <p className="text-dark-200 mb-4">
        Recall the quaternion basis matrices from Chapter 8:
      </p>

      <CardGrid columns={3}>
        <Card>
          <CardHeader><InlineMath>{`i_1`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`i_2`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix}`}</MathBlock>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`i_3`}</InlineMath></CardHeader>
          <MathBlock>{`\\begin{pmatrix} i & 0 \\\\ 0 & -i \\end{pmatrix}`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        Multiplying by <InlineMath>{`i`}</InlineMath> gives matrices closely related
        to the <strong>Pauli spin matrices</strong>, fundamental in quantum mechanics
        for describing electron spin.
      </p>

      {/* Klein-Gordon Equation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Klein-Gordon Equation</h3>

      <p className="text-dark-200 mb-4">
        The relativistic form of Schrödinger's wave equation for the electron is
        known as the <strong>Klein-Gordon equation</strong>:
      </p>

      <MathBlock>{`\\left( \\frac{\\partial^2}{c^2 \\partial t^2} - \\nabla \\circ \\nabla \\right) \\phi = -\\mu^2 \\phi`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        where <InlineMath>{`\\mu = 2\\pi m_0 / h`}</InlineMath> is proportional to
        the rest mass <InlineMath>{`m_0`}</InlineMath> of the electron, and{' '}
        <InlineMath>{`h`}</InlineMath> is Planck's constant.
      </p>

      <Callout type="note" title="Biquaternion Form">
        <p>
          Using biquaternion notation, the Klein-Gordon equation can be written as:
        </p>
        <MathBlock>{`D^c D \\phi = -\\mu^2 \\phi`}</MathBlock>
        <p className="mt-2 text-sm">
          where <InlineMath>{`D = \\frac{\\partial}{c\\partial t} + i\\nabla`}</InlineMath>{' '}
          and <InlineMath>{`\\phi`}</InlineMath> is a complex-valued function of
          position in Minkowski space.
        </p>
      </Callout>

      {/* First-Order Equations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">From Second to First Order</h3>

      <p className="text-dark-200 mb-4">
        The second-order Klein-Gordon equation can be replaced by two first-order
        equations. Putting <InlineMath>{`D\\phi = \\mu\\chi`}</InlineMath>, we obtain:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>First Equation</CardHeader>
          <MathBlock>{`D\\phi = \\mu\\chi`}</MathBlock>
        </Card>
        <Card>
          <CardHeader>Second Equation</CardHeader>
          <MathBlock>{`D^c\\chi = -\\mu\\phi`}</MathBlock>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        Can these be combined into <em>one</em> first-order equation?
      </p>

      {/* Dirac's Equation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Dirac's Equation</h3>

      <p className="text-dark-200 mb-4">
        To combine the two equations, we need an entity <InlineMath>{`j`}</InlineMath>{' '}
        such that <InlineMath>{`j^2 = -1`}</InlineMath>,{' '}
        <InlineMath>{`ji = -ij`}</InlineMath>, and{' '}
        <InlineMath>{`ji_k = i_k j`}</InlineMath> for <InlineMath>{`k = 1, 2, 3`}</InlineMath>.
      </p>

      <Callout type="definition" title="The Two Representations">
        <p className="mb-2">
          Using real <InlineMath>{`4 \\times 4`}</InlineMath> matrices, we identify:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><InlineMath>{`i_k`}</InlineMath> with <InlineMath>{`L(i_k)`}</InlineMath>{' '}
            (left multiplication)</li>
          <li><InlineMath>{`j_k`}</InlineMath> with <InlineMath>{`R(i_k)`}</InlineMath>{' '}
            (right multiplication)</li>
        </ul>
        <p className="mt-2">
          These satisfy <InlineMath>{`j_k i_l = i_l j_k`}</InlineMath> and{' '}
          <InlineMath>{`j_1^2 = j_2^2 = j_3^2 = j_3 j_2 j_1 = -1`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Replacing the complex number <InlineMath>{`i`}</InlineMath> by the real
        matrix <InlineMath>{`j_1`}</InlineMath> and writing{' '}
        <InlineMath>{`j_2`}</InlineMath> for <InlineMath>{`j`}</InlineMath>, we put:
      </p>

      <MathBlock>{`\\psi = \\phi + j_2 \\chi = \\phi_0 + j_1 \\phi_1 + j_2 \\chi_0 + j_3 \\chi_1`}</MathBlock>

      <Callout type="theorem" title="Dirac's Equation">
        <p className="mb-2">
          The combined first-order equation becomes:
        </p>
        <MathBlock>{`D\\psi + j_2 \\mu \\psi = 0`}</MathBlock>
        <p className="mt-2">
          This is essentially <strong>Dirac's equation for the electron</strong>.
        </p>
      </Callout>

      {/* The Wave Function */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Wave Function</h3>

      <p className="text-dark-200 mb-4">
        The sixteen matrices <InlineMath>{`1, i_k, j_l, i_k j_l`}</InlineMath>{' '}
        (for <InlineMath>{`k, l = 1, 2, 3`}</InlineMath>) are linearly independent.
        Thus <InlineMath>{`\\psi`}</InlineMath> is a general real{' '}
        <InlineMath>{`4 \\times 4`}</InlineMath> matrix.
      </p>

      <Card className="mb-6">
        <CardHeader>Spinor Form</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            By multiplying Dirac's equation by a column vector, we may assume{' '}
            <InlineMath>{`\\psi`}</InlineMath> is a column vector:
          </p>
          <MathBlock>{`\\psi = \\begin{pmatrix} \\psi_0 \\\\ \\psi_1 \\\\ \\psi_2 \\\\ \\psi_3 \\end{pmatrix}`}</MathBlock>
          <p className="text-sm">
            with real components. Complex values are forced upon us when considering
            the electron in an electromagnetic field.
          </p>
        </div>
      </Card>

      {/* Lorentz Invariance */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lorentz Invariance</h3>

      <p className="text-dark-200 mb-4">
        Since a Lorentz transformation sends <InlineMath>{`D`}</InlineMath> onto{' '}
        <InlineMath>{`p^c D p^t`}</InlineMath>, we want <InlineMath>{`\\psi`}</InlineMath>{' '}
        to transform as:
      </p>

      <MathBlock>{`\\psi \\mapsto p\\psi`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        This makes the Dirac equation <strong>Lorentz invariant</strong>.
      </p>

      {/* Spin 1/2 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Spin ½</h3>

      <Callout type="note" title="Why Electrons Have Spin ½">
        <p className="mb-2">
          The biquaternions of norm 1, <InlineMath>{`p`}</InlineMath> and{' '}
          <InlineMath>{`-p`}</InlineMath>, yield the <strong>same</strong> Lorentz
          transformation (both sending <InlineMath>{`x`}</InlineMath> onto{' '}
          <InlineMath>{`pxp^{ct}`}</InlineMath>).
        </p>
        <p>
          However, they induce <strong>distinct</strong> transformations on{' '}
          <InlineMath>{`\\psi`}</InlineMath>, sending it to{' '}
          <InlineMath>{`p\\psi`}</InlineMath> and{' '}
          <InlineMath>{`-p\\psi`}</InlineMath> respectively.
        </p>
        <p className="mt-2 font-semibold">
          This is the mathematical reason for saying that the electron has{' '}
          <strong>spin ½</strong>.
        </p>
      </Callout>

      {/* Predictions from Mathematics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Predictions from Mathematical Formalism</h3>

      <p className="text-dark-200 mb-4">
        The power of mathematical physics lies in its predictive ability:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-3">
          <li>
            <strong>Maxwell</strong> predicted from his equations that electromagnetic
            energy is propagated in <strong>waves</strong>.
          </li>
          <li>
            <strong>Einstein</strong> used <InlineMath>{`E = mc^2`}</InlineMath>{' '}
            to predict that <strong>mass is convertible into energy</strong>.
          </li>
          <li>
            <strong>Dirac</strong> observed that in his equation,{' '}
            <InlineMath>{`\\mu`}</InlineMath> might as well be replaced by{' '}
            <InlineMath>{`-\\mu`}</InlineMath>, and predicted that the electron
            must have an <strong>anti-particle</strong>, now called the{' '}
            <strong>positron</strong>.
          </li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Pauli spin matrices</strong> are related to quaternion
            basis matrices <InlineMath>{`ii_1, ii_2, ii_3`}</InlineMath></li>
          <li>• The <strong>Klein-Gordon equation</strong> is the relativistic
            Schrödinger equation</li>
          <li>• In biquaternion form:{' '}
            <InlineMath>{`D^c D \\phi = -\\mu^2 \\phi`}</InlineMath></li>
          <li>• <strong>Dirac's equation</strong>:{' '}
            <InlineMath>{`D\\psi + j_2 \\mu \\psi = 0`}</InlineMath></li>
          <li>• The wave function <InlineMath>{`\\psi`}</InlineMath> is a
            4-component <strong>spinor</strong></li>
          <li>• Dirac's equation is <strong>Lorentz invariant</strong></li>
          <li>• The double-valued transformation{' '}
            <InlineMath>{`\\psi \\mapsto \\pm p\\psi`}</InlineMath> explains{' '}
            <strong>spin ½</strong></li>
          <li>• Dirac predicted the <strong>positron</strong> from his equation</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={41} questions={section41Questions} />
    </LessonLayout>
  );
}
