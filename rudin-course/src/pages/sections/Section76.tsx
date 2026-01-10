import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h2 className="text-2xl font-semibold mb-4">Vector Analysis</h2>

      <p className="mb-4">
        The language of differential forms provides a unified framework for the classical vector
        calculus operations: gradient, divergence, and curl. Here we translate between the two languages
        and derive the classical integral theorems as special cases of Stokes' theorem.
      </p>

      <Definition title="10.30 - Gradient, Divergence, and Curl">
        <p className="mb-3">
          In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>, for a scalar field <InlineMath>{'f'}</InlineMath> and
          vector field <InlineMath>{'\\mathbf{F} = (P, Q, R)'}</InlineMath>:
        </p>
        <MathBlock>{'\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right)'}</MathBlock>
        <MathBlock>{'\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}'}</MathBlock>
        <MathBlock>{'\\text{curl } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\left(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}, \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}, \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)'}</MathBlock>
      </Definition>

      <Definition title="10.31 - Correspondence with Forms">
        <p className="mb-3">
          There is a correspondence between vector fields and differential forms in <InlineMath>{'\\mathbb{R}^3'}</InlineMath>:
        </p>
        <p className="mb-3">
          <strong>0-forms:</strong> Functions <InlineMath>{'f'}</InlineMath>
        </p>
        <p className="mb-3">
          <strong>1-forms:</strong> <InlineMath>{'\\omega_1 = P \\, dx + Q \\, dy + R \\, dz \\leftrightarrow \\mathbf{F} = (P, Q, R)'}</InlineMath>
        </p>
        <p className="mb-3">
          <strong>2-forms:</strong> <InlineMath>{'\\omega_2 = P \\, dy \\wedge dz + Q \\, dz \\wedge dx + R \\, dx \\wedge dy \\leftrightarrow \\mathbf{F} = (P, Q, R)'}</InlineMath>
        </p>
        <p>
          <strong>3-forms:</strong> <InlineMath>{'\\omega_3 = f \\, dx \\wedge dy \\wedge dz \\leftrightarrow f'}</InlineMath>
        </p>
      </Definition>

      <Theorem
        title="10.32 - Exterior Derivative as Vector Operations"
        proof={
          <>
            <p className="mb-3">
              For (a): <InlineMath>{'df = f_x \\, dx + f_y \\, dy + f_z \\, dz'}</InlineMath> corresponds
              to <InlineMath>{'\\nabla f = (f_x, f_y, f_z)'}</InlineMath>.
            </p>
            <p className="mb-3">
              For (b): If <InlineMath>{'\\omega_1 = P \\, dx + Q \\, dy + R \\, dz'}</InlineMath>, then
            </p>
            <MathBlock>{'d\\omega_1 = (R_y - Q_z) \\, dy \\wedge dz + (P_z - R_x) \\, dz \\wedge dx + (Q_x - P_y) \\, dx \\wedge dy'}</MathBlock>
            <p className="mb-3">
              which corresponds to <InlineMath>{'\\text{curl } \\mathbf{F}'}</InlineMath>.
            </p>
            <p>
              For (c): If <InlineMath>{'\\omega_2 = P \\, dy \\wedge dz + Q \\, dz \\wedge dx + R \\, dx \\wedge dy'}</InlineMath>, then
              <InlineMath>{'d\\omega_2 = (P_x + Q_y + R_z) \\, dx \\wedge dy \\wedge dz'}</InlineMath>,
              corresponding to <InlineMath>{'\\text{div } \\mathbf{F}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Under the correspondence above:
        </p>
        <p className="mb-2">(a) <InlineMath>{'d'}</InlineMath> on 0-forms corresponds to <InlineMath>{'\\nabla'}</InlineMath> (gradient)</p>
        <p className="mb-2">(b) <InlineMath>{'d'}</InlineMath> on 1-forms corresponds to <InlineMath>{'\\nabla \\times'}</InlineMath> (curl)</p>
        <p>(c) <InlineMath>{'d'}</InlineMath> on 2-forms corresponds to <InlineMath>{'\\nabla \\cdot'}</InlineMath> (divergence)</p>
      </Theorem>

      <Theorem
        title="10.33 - Classical Identities"
        proof={
          <>
            <p className="mb-3">
              These follow from <InlineMath>{'d^2 = 0'}</InlineMath>:
            </p>
            <p className="mb-3">
              For (a): <InlineMath>{'d(df) = d^2 f = 0'}</InlineMath>, and <InlineMath>{'d'}</InlineMath> on a 1-form
              gives curl. So curl of gradient is zero.
            </p>
            <p>
              For (b): If <InlineMath>{'\\omega_1'}</InlineMath> corresponds to <InlineMath>{'\\mathbf{F}'}</InlineMath>,
              then <InlineMath>{'d\\omega_1'}</InlineMath> is a 2-form corresponding to <InlineMath>{'\\text{curl } \\mathbf{F}'}</InlineMath>,
              and <InlineMath>{'d(d\\omega_1) = d^2\\omega_1 = 0'}</InlineMath> gives div of curl is zero.
            </p>
          </>
        }
      >
        <p className="mb-2">(a) <InlineMath>{'\\nabla \\times (\\nabla f) = \\mathbf{0}'}</InlineMath> (curl of gradient is zero)</p>
        <p>(b) <InlineMath>{'\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0'}</InlineMath> (divergence of curl is zero)</p>
      </Theorem>

      <Example title="Divergence Theorem via Stokes">
        <p className="mb-3">
          Let <InlineMath>{'\\Omega'}</InlineMath> be a bounded region in <InlineMath>{'\\mathbb{R}^3'}</InlineMath> with
          smooth boundary <InlineMath>{'\\partial\\Omega'}</InlineMath>. For a 2-form
          <InlineMath>{'\\omega_2'}</InlineMath> corresponding to <InlineMath>{'\\mathbf{F}'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_\\Omega d\\omega_2 = \\int_{\\partial\\Omega} \\omega_2'}</MathBlock>
        <p>translates to</p>
        <MathBlock>{'\\iiint_\\Omega \\text{div } \\mathbf{F} \\, dV = \\iint_{\\partial\\Omega} \\mathbf{F} \\cdot \\mathbf{n} \\, dS'}</MathBlock>
      </Example>

      <Example title="Classical Stokes' Theorem">
        <p className="mb-3">
          Let <InlineMath>{'S'}</InlineMath> be an oriented surface with boundary curve <InlineMath>{'C = \\partial S'}</InlineMath>.
          For a 1-form <InlineMath>{'\\omega_1'}</InlineMath> corresponding to <InlineMath>{'\\mathbf{F}'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_S d\\omega_1 = \\int_C \\omega_1'}</MathBlock>
        <p>translates to</p>
        <MathBlock>{'\\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = \\oint_C \\mathbf{F} \\cdot d\\mathbf{r}'}</MathBlock>
      </Example>

      <Callout type="info" title="Unified View">
        <p>
          Differential forms reveal that grad, curl, div are all manifestations of the single operator <InlineMath>{'d'}</InlineMath>.
          The classical theorems (FTC, Green, Stokes, Divergence) are all the same theorem: <InlineMath>{'\\int_\\Gamma d\\omega = \\int_{\\partial\\Gamma} \\omega'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Gradient, curl, and divergence are all special cases of <InlineMath>{'d'}</InlineMath></li>
        <li>The identities <InlineMath>{'\\text{curl}(\\nabla f) = 0'}</InlineMath> and <InlineMath>{'\\text{div}(\\text{curl } \\mathbf{F}) = 0'}</InlineMath> follow from <InlineMath>{'d^2 = 0'}</InlineMath></li>
        <li>1-forms and 2-forms both correspond to vector fields in <InlineMath>{'\\mathbb{R}^3'}</InlineMath></li>
        <li>The divergence theorem and classical Stokes' theorem are special cases of the general Stokes' theorem</li>
        <li>Differential forms provide a coordinate-free, dimension-independent framework</li>
      </ul>
    </LessonLayout>
  );
}
