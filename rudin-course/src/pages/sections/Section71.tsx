import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h2 className="text-2xl font-semibold mb-4">Change of Variables</h2>

      <p className="mb-4">
        The change of variables formula generalizes substitution from single-variable calculus to
        multiple integrals. The Jacobian determinant measures how the transformation scales volumes.
      </p>

      <Definition title="10.11 - Jacobian Determinant">
        <p className="mb-3">
          Let <InlineMath>{'E'}</InlineMath> be an open subset of <InlineMath>{'\\mathbb{R}^n'}</InlineMath> and
          let <InlineMath>{'T: E \\to \\mathbb{R}^n'}</InlineMath> be a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping.
          The <em>Jacobian</em> of <InlineMath>{'T'}</InlineMath> at <InlineMath>{'x \\in E'}</InlineMath> is
        </p>
        <MathBlock>{'J_T(x) = \\det(T\'(x)) = \\det\\left(\\frac{\\partial T_i}{\\partial x_j}(x)\\right)'}</MathBlock>
        <p>
          where <InlineMath>{'T = (T_1, \\ldots, T_n)'}</InlineMath> and <InlineMath>{'T\'(x)'}</InlineMath> is the
          <InlineMath>{'n \\times n'}</InlineMath> Jacobian matrix.
        </p>
      </Definition>

      <Callout type="info" title="Geometric Meaning">
        <p>
          The absolute value <InlineMath>{'|J_T(x)|'}</InlineMath> represents the factor by which
          <InlineMath>{'T'}</InlineMath> stretches volumes near <InlineMath>{'x'}</InlineMath>. The sign of
          <InlineMath>{'J_T(x)'}</InlineMath> indicates whether orientation is preserved or reversed.
        </p>
      </Callout>

      <Theorem
        title="10.12 - Change of Variables Formula"
        proof={
          <>
            <p className="mb-3">
              The proof proceeds in stages. First, we establish the result for <em>primitive mappings</em>,
              which change only one coordinate at a time. Any <InlineMath>{'\\mathscr{C}^1'}</InlineMath>-diffeomorphism
              can be locally factored as a composition of primitive mappings.
            </p>
            <p className="mb-3">
              For a primitive mapping <InlineMath>{'S'}</InlineMath> with <InlineMath>{'S(x) = (x_1, \\ldots, x_{n-1}, \\sigma(x))'}</InlineMath>,
              we apply Fubini's theorem. Let <InlineMath>{'y = S(x)'}</InlineMath>, so <InlineMath>{'y_n = \\sigma(x)'}</InlineMath>.
              Then
            </p>
            <MathBlock>{'\\int_{S(E)} f(y) \\, dy = \\int_{\\mathbb{R}^{n-1}} \\left(\\int f(y\', y_n) \\, dy_n\\right) dy\''}</MathBlock>
            <p className="mb-3">
              Substituting <InlineMath>{'y_n = \\sigma(x\', x_n)'}</InlineMath> for fixed <InlineMath>{'x\''}</InlineMath> and using
              the one-variable change of variables gives the factor <InlineMath>{'|\\partial_n \\sigma| = |J_S|'}</InlineMath>.
            </p>
            <p className="mb-3">
              For a general diffeomorphism <InlineMath>{'T'}</InlineMath>, we use partitions of unity to reduce
              to the local case, where <InlineMath>{'T = S_1 \\circ \\cdots \\circ S_k'}</InlineMath> with
              each <InlineMath>{'S_i'}</InlineMath> primitive. The chain rule gives
            </p>
            <MathBlock>{'J_T = J_{S_1} \\cdots J_{S_k}'}</MathBlock>
            <p>
              and composing the change of variables for each primitive mapping yields the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'T'}</InlineMath> is a <InlineMath>{'\\mathscr{C}^1'}</InlineMath>-diffeomorphism of an
          open set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> onto an open set <InlineMath>{'T(E) \\subset \\mathbb{R}^n'}</InlineMath>,
          and <InlineMath>{'f'}</InlineMath> is a continuous function on <InlineMath>{'T(E)'}</InlineMath> with compact support. Then
        </p>
        <MathBlock>{'\\int_{T(E)} f(y) \\, dy = \\int_E f(T(x)) |J_T(x)| \\, dx'}</MathBlock>
      </Theorem>

      <Example title="Polar Coordinates">
        <p className="mb-3">
          Let <InlineMath>{'T(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)'}</InlineMath>. The Jacobian matrix is
        </p>
        <MathBlock>{'T\'(r,\\theta) = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          so <InlineMath>{'J_T = r\\cos^2\\theta + r\\sin^2\\theta = r'}</InlineMath>. Thus
        </p>
        <MathBlock>{'\\iint_{\\mathbb{R}^2} f(x,y) \\, dx \\, dy = \\int_0^\\infty \\int_0^{2\\pi} f(r\\cos\\theta, r\\sin\\theta) \\, r \\, d\\theta \\, dr'}</MathBlock>
      </Example>

      <Example title="Spherical Coordinates">
        <p className="mb-3">
          Let <InlineMath>{'T(\\rho, \\phi, \\theta) = (\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)'}</InlineMath>.
          Then
        </p>
        <MathBlock>{'J_T = \\rho^2 \\sin\\phi'}</MathBlock>
        <p>
          giving the familiar volume element <InlineMath>{'dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning" title="Important">
        <p>
          The absolute value of the Jacobian is essential. Without it, integrals over regions
          where the Jacobian is negative would contribute with the wrong sign.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The Jacobian determinant measures local volume distortion</li>
        <li>Change of variables formula: <InlineMath>{'\\int_{T(E)} f \\, dy = \\int_E (f \\circ T)|J_T| \\, dx'}</InlineMath></li>
        <li>The proof uses factorization into primitive mappings</li>
        <li>In polar coordinates, <InlineMath>{'|J| = r'}</InlineMath></li>
        <li>In spherical coordinates, <InlineMath>{'|J| = \\rho^2 \\sin\\phi'}</InlineMath></li>
        <li>The formula extends single-variable substitution to multiple dimensions</li>
      </ul>
    </LessonLayout>
  );
}
