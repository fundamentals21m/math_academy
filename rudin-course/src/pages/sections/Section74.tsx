import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h2 className="text-2xl font-semibold mb-4">Stokes' Theorem</h2>

      <p className="mb-4">
        Stokes' theorem is the fundamental theorem of calculus for differential forms. It
        generalizes the classical theorems of Green, Gauss, and the original Stokes theorem
        into a single elegant statement.
      </p>

      <Definition title="10.22 - Integration of Forms over Chains">
        <p className="mb-3">
          Let <InlineMath>{'\\omega'}</InlineMath> be a <InlineMath>{'k'}</InlineMath>-form in an open set
          <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath>, and let <InlineMath>{'\\sigma: \\Delta_k \\to E'}</InlineMath> be
          a singular <InlineMath>{'k'}</InlineMath>-simplex. The <em>integral of</em> <InlineMath>{'\\omega'}</InlineMath> over <InlineMath>{'\\sigma'}</InlineMath> is
        </p>
        <MathBlock>{'\\int_\\sigma \\omega = \\int_{\\Delta_k} \\sigma^* \\omega'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\sigma^* \\omega'}</InlineMath> is the <em>pullback</em> of <InlineMath>{'\\omega'}</InlineMath> by <InlineMath>{'\\sigma'}</InlineMath>.
          For a chain <InlineMath>{'\\Gamma = \\sum c_i \\sigma_i'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_\\Gamma \\omega = \\sum c_i \\int_{\\sigma_i} \\omega'}</MathBlock>
      </Definition>

      <Definition title="10.23 - Pullback">
        <p className="mb-3">
          If <InlineMath>{'T: \\mathbb{R}^m \\to \\mathbb{R}^n'}</InlineMath> is a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> map and
          <InlineMath>{'\\omega = \\sum a_I(y) \\, dy_I'}</InlineMath> is a <InlineMath>{'k'}</InlineMath>-form on <InlineMath>{'\\mathbb{R}^n'}</InlineMath>,
          the <em>pullback</em> <InlineMath>{'T^*\\omega'}</InlineMath> is defined by
        </p>
        <MathBlock>{'T^*\\omega = \\sum a_I(T(x)) \\, d(T_{i_1}) \\wedge \\cdots \\wedge d(T_{i_k})'}</MathBlock>
        <p>
          where <InlineMath>{'dT_j = \\sum_i (\\partial T_j/\\partial x_i) dx_i'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.24 - Stokes' Theorem"
        proof={
          <>
            <p className="mb-3">
              It suffices to prove the theorem for a single simplex <InlineMath>{'\\sigma: \\Delta_k \\to E'}</InlineMath>.
              By the definition of pullback, we need to show
            </p>
            <MathBlock>{'\\int_{\\Delta_k} d(\\sigma^*\\omega) = \\int_{\\partial \\Delta_k} \\sigma^*\\omega'}</MathBlock>
            <p className="mb-3">
              On <InlineMath>{'\\Delta_k'}</InlineMath>, write <InlineMath>{'\\sigma^*\\omega = f(u) \\, du_1 \\wedge \\cdots \\wedge du_{k-1}'}</InlineMath>
              (a <InlineMath>{'(k-1)'}</InlineMath>-form). Then
            </p>
            <MathBlock>{'d(\\sigma^*\\omega) = \\sum_{j=1}^k \\frac{\\partial f}{\\partial u_j} du_j \\wedge du_1 \\wedge \\cdots \\wedge du_{k-1}'}</MathBlock>
            <p className="mb-3">
              By Fubini's theorem, the integral of <InlineMath>{'d(\\sigma^*\\omega)'}</InlineMath> over <InlineMath>{'\\Delta_k'}</InlineMath>
              reduces to boundary integrals. The faces of <InlineMath>{'\\Delta_k'}</InlineMath> are:
            </p>
            <p className="mb-2">- <InlineMath>{'u_j = 0'}</InlineMath> for <InlineMath>{'j = 1, \\ldots, k'}</InlineMath></p>
            <p className="mb-3">- <InlineMath>{'u_1 + \\cdots + u_k = 1'}</InlineMath></p>
            <p>
              Careful bookkeeping of signs from the orientation of <InlineMath>{'\\partial \\Delta_k'}</InlineMath> and
              the wedge product shows the two sides match.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\omega'}</InlineMath> be a <InlineMath>{'(k-1)'}</InlineMath>-form of class
          <InlineMath>{'\\mathscr{C}^1'}</InlineMath> in an open set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath>,
          and let <InlineMath>{'\\Gamma'}</InlineMath> be a <InlineMath>{'k'}</InlineMath>-chain in <InlineMath>{'E'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\int_\\Gamma d\\omega = \\int_{\\partial \\Gamma} \\omega'}</MathBlock>
      </Theorem>

      <Example title="Fundamental Theorem of Calculus">
        <p className="mb-3">
          Let <InlineMath>{'k = 1'}</InlineMath>, <InlineMath>{'\\omega = f(x)'}</InlineMath> (a 0-form),
          and <InlineMath>{'\\Gamma = [a, b]'}</InlineMath>. Then <InlineMath>{'d\\omega = f\'(x) \\, dx'}</InlineMath> and
          <InlineMath>{'\\partial \\Gamma = b - a'}</InlineMath>. Stokes' theorem gives
        </p>
        <MathBlock>{'\\int_a^b f\'(x) \\, dx = f(b) - f(a)'}</MathBlock>
      </Example>

      <Example title="Green's Theorem">
        <p className="mb-3">
          Let <InlineMath>{'k = 2'}</InlineMath>, <InlineMath>{'\\omega = P \\, dx + Q \\, dy'}</InlineMath>,
          and <InlineMath>{'\\Gamma'}</InlineMath> a region in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>.
          Then <InlineMath>{'d\\omega = (Q_x - P_y) \\, dx \\wedge dy'}</InlineMath>. Stokes gives
        </p>
        <MathBlock>{'\\iint_\\Gamma \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx \\, dy = \\oint_{\\partial \\Gamma} P \\, dx + Q \\, dy'}</MathBlock>
      </Example>

      <Example title="Divergence Theorem">
        <p className="mb-3">
          Let <InlineMath>{'k = 3'}</InlineMath> and <InlineMath>{'\\omega = P \\, dy \\wedge dz + Q \\, dz \\wedge dx + R \\, dx \\wedge dy'}</InlineMath>.
          Then <InlineMath>{'d\\omega = (P_x + Q_y + R_z) \\, dx \\wedge dy \\wedge dz'}</InlineMath>. Stokes gives
        </p>
        <MathBlock>{'\\iiint_\\Gamma \\text{div } \\mathbf{F} \\, dV = \\iint_{\\partial \\Gamma} \\mathbf{F} \\cdot \\mathbf{n} \\, dS'}</MathBlock>
      </Example>

      <Callout type="info" title="Unified Framework">
        <p>
          Stokes' theorem <InlineMath>{'\\int_\\Gamma d\\omega = \\int_{\\partial\\Gamma} \\omega'}</InlineMath> unifies:
          Fundamental Theorem of Calculus (<InlineMath>{'k=1'}</InlineMath>), Green's Theorem (<InlineMath>{'k=2'}</InlineMath>),
          classical Stokes (<InlineMath>{'k=2'}</InlineMath> in <InlineMath>{'\\mathbb{R}^3'}</InlineMath>),
          and Divergence Theorem (<InlineMath>{'k=3'}</InlineMath>).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Integration of forms over chains uses pullbacks</li>
        <li>Stokes' theorem: <InlineMath>{'\\int_\\Gamma d\\omega = \\int_{\\partial\\Gamma} \\omega'}</InlineMath></li>
        <li>The theorem relates the exterior derivative to the boundary operator</li>
        <li>It generalizes all classical integral theorems of vector calculus</li>
        <li>The proof uses the identities <InlineMath>{'d^2 = 0'}</InlineMath> and <InlineMath>{'\\partial^2 = 0'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
