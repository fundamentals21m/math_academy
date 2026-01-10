import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2 className="text-2xl font-semibold mb-4">Primitive Mappings</h2>

      <p className="mb-4">
        This section introduces the concept of primitive mappings, which are building blocks
        for understanding the change of variables formula in multiple integrals. A primitive
        mapping changes only one coordinate at a time while preserving the others, making
        the analysis of more general transformations tractable.
      </p>

      <Definition title="10.5 - Primitive Mapping">
        <p className="mb-3">
          A <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping <InlineMath>{'\\mathbf{G}: E \\to \\mathbb{R}^n'}</InlineMath>
          (where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open) is called <em>primitive</em> if there exists
          an index <InlineMath>{'m'}</InlineMath> (<InlineMath>{'1 \\leq m \\leq n'}</InlineMath>) such that
        </p>
        <MathBlock>{'\\mathbf{G}(\\mathbf{x}) = (x_1, \\ldots, x_{m-1}, g_m(\\mathbf{x}), x_{m+1}, \\ldots, x_n)'}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{'g_m: E \\to \\mathbb{R}'}</InlineMath> is a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> function.
          In other words, <InlineMath>{'\\mathbf{G}'}</InlineMath> changes only the <InlineMath>{'m'}</InlineMath>-th coordinate.
        </p>
      </Definition>

      <Callout type="info">
        <p className="mb-3">
          The Jacobian of a primitive mapping <InlineMath>{'\\mathbf{G}'}</InlineMath> is particularly simple.
          If <InlineMath>{'\\mathbf{G}'}</InlineMath> changes only the <InlineMath>{'m'}</InlineMath>-th coordinate:
        </p>
        <MathBlock>{'\\det(\\mathbf{G}\'(\\mathbf{x})) = D_m g_m(\\mathbf{x}) = \\frac{\\partial g_m}{\\partial x_m}(\\mathbf{x})'}</MathBlock>
        <p>
          because the Jacobian matrix is the identity except in the <InlineMath>{'m'}</InlineMath>-th row.
        </p>
      </Callout>

      <Theorem
        title="10.6 - Factorization into Primitive Mappings"
        proof={
          <>
            <p className="mb-3">
              <strong>Step 1:</strong> By the inverse function theorem, <InlineMath>{'\\mathbf{G}'}</InlineMath>
              is a local diffeomorphism near <InlineMath>{'\\mathbf{0}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> We construct the primitive mappings inductively.
              The idea is to "correct" one coordinate at a time.
            </p>
            <p className="mb-3">
              <strong>For n = 2:</strong> Suppose <InlineMath>{'\\mathbf{G}(x, y) = (g_1(x, y), g_2(x, y))'}</InlineMath>
              with <InlineMath>{'\\mathbf{G}(0, 0) = (0, 0)'}</InlineMath> and <InlineMath>{'\\mathbf{G}\'(0, 0) = I'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'D_1 g_1(0, 0) = 1 \\neq 0'}</InlineMath>, the implicit function theorem
              says we can solve <InlineMath>{'g_1(x, y) = u'}</InlineMath> for <InlineMath>{'x = \\alpha(u, y)'}</InlineMath> near the origin.
            </p>
            <p className="mb-3">
              Define <InlineMath>{'\\mathbf{G}_1(x, y) = (g_1(x, y), y)'}</InlineMath>. This is primitive, and
              <InlineMath>{'\\mathbf{G}_1^{-1}(u, v) = (\\alpha(u, v), v)'}</InlineMath>.
            </p>
            <p className="mb-3">
              Define <InlineMath>{'\\mathbf{G}_2 = \\mathbf{G} \\circ \\mathbf{G}_1^{-1}'}</InlineMath>. Then
              <InlineMath>{'\\mathbf{G}_2(u, v) = (u, g_2(\\alpha(u, v), v))'}</InlineMath>,
              which is primitive (changes only the second coordinate).
            </p>
            <p>
              Thus <InlineMath>{'\\mathbf{G} = \\mathbf{G}_2 \\circ \\mathbf{G}_1'}</InlineMath>.
              The general case proceeds by induction on <InlineMath>{'n'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{G}: E \\to \\mathbb{R}^n'}</InlineMath> is a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping
          with <InlineMath>{'\\mathbf{G}(\\mathbf{0}) = \\mathbf{0}'}</InlineMath> and <InlineMath>{'\\mathbf{G}\'(\\mathbf{0}) = I'}</InlineMath>
          (the identity matrix).
        </p>
        <p className="mb-3">
          Then in a neighborhood of <InlineMath>{'\\mathbf{0}'}</InlineMath>, there exist primitive mappings
          <InlineMath>{'\\mathbf{G}_1, \\ldots, \\mathbf{G}_n'}</InlineMath> such that
        </p>
        <MathBlock>{'\\mathbf{G} = \\mathbf{G}_n \\circ \\mathbf{G}_{n-1} \\circ \\cdots \\circ \\mathbf{G}_1'}</MathBlock>
      </Theorem>

      <Example title="10.7 - Factoring a 2D Mapping">
        <p className="mb-3">
          Consider the polar-to-Cartesian map (after shifting to make the derivative identity at origin):
          Let <InlineMath>{'\\mathbf{G}(u, v) = ((1+u)\\cos(v) - 1, (1+u)\\sin(v))'}</InlineMath> near <InlineMath>{'(0, 0)'}</InlineMath>.
        </p>
        <p className="mb-3">
          At <InlineMath>{'(0, 0)'}</InlineMath>: <InlineMath>{'\\mathbf{G}(0, 0) = (0, 0)'}</InlineMath> and
        </p>
        <MathBlock>{'\\mathbf{G}\'(0, 0) = \\begin{pmatrix} \\cos(0) & -(1+0)\\sin(0) \\\\ \\sin(0) & (1+0)\\cos(0) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          By the theorem, <InlineMath>{'\\mathbf{G}'}</InlineMath> factors into two primitive mappings near the origin.
        </p>
        <p className="mb-3">
          <InlineMath>{'\\mathbf{G}_1(u, v) = ((1+u)\\cos(v) - 1, v)'}</InlineMath> changes only the first coordinate.
        </p>
        <p>
          <InlineMath>{'\\mathbf{G}_2'}</InlineMath> is determined by <InlineMath>{'\\mathbf{G} = \\mathbf{G}_2 \\circ \\mathbf{G}_1'}</InlineMath>.
        </p>
      </Example>

      <Definition title="10.8 - Flips">
        <p className="mb-3">
          A <em>flip</em> is a linear mapping that interchanges two coordinates:
        </p>
        <MathBlock>{'B(x_1, \\ldots, x_i, \\ldots, x_j, \\ldots, x_n) = (x_1, \\ldots, x_j, \\ldots, x_i, \\ldots, x_n)'}</MathBlock>
        <p className="mt-3">
          A flip has determinant <InlineMath>{'-1'}</InlineMath> (it's an odd permutation).
          Flips are useful for reordering coordinates to put a nonzero partial derivative in the right position.
        </p>
      </Definition>

      <Theorem
        title="10.9 - General Factorization"
        proof={
          <>
            <p className="mb-3">
              <strong>Step 1:</strong> If <InlineMath>{'\\mathbf{G}\'(\\mathbf{a})'}</InlineMath> is invertible,
              use the inverse function theorem to get local invertibility.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> Compose with linear maps (including flips) to normalize:
            </p>
            <MathBlock>{'\\tilde{\\mathbf{G}} = \\mathbf{G}\'(\\mathbf{a})^{-1} \\circ \\mathbf{G} \\circ (\\mathbf{x} \\mapsto \\mathbf{x} - \\mathbf{a}) + \\mathbf{a}'}</MathBlock>
            <p className="mb-3">
              This gives <InlineMath>{'\\tilde{\\mathbf{G}}(\\mathbf{a}) = \\mathbf{a}'}</InlineMath> and
              <InlineMath>{'\\tilde{\\mathbf{G}}\'(\\mathbf{a}) = I'}</InlineMath>.
            </p>
            <p>
              <strong>Step 3:</strong> Apply Theorem 10.6 to factor <InlineMath>{'\\tilde{\\mathbf{G}}'}</InlineMath>
              into primitive mappings, then express <InlineMath>{'\\mathbf{G}'}</InlineMath> accordingly.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{G}: E \\to \\mathbb{R}^n'}</InlineMath> is <InlineMath>{'\\mathscr{C}^1'}</InlineMath> and
          <InlineMath>{'\\det(\\mathbf{G}\'(\\mathbf{a})) \\neq 0'}</InlineMath> at some point <InlineMath>{'\\mathbf{a} \\in E'}</InlineMath>.
        </p>
        <p className="mb-3">
          Then in a neighborhood of <InlineMath>{'\\mathbf{a}'}</InlineMath>, <InlineMath>{'\\mathbf{G}'}</InlineMath> can be written as a composition
        </p>
        <MathBlock>{'\\mathbf{G} = \\mathbf{G}_N \\circ \\cdots \\circ \\mathbf{G}_1'}</MathBlock>
        <p>
          where each <InlineMath>{'\\mathbf{G}_j'}</InlineMath> is either a primitive mapping or a flip.
        </p>
      </Theorem>

      <Callout type="info" title="Why Primitive Mappings Matter">
        <p className="mb-3">
          The factorization into primitive mappings is the key to proving the change of variables formula.
          For a primitive mapping that changes only the <InlineMath>{'m'}</InlineMath>-th coordinate:
        </p>
        <MathBlock>{'\\int_{\\mathbf{G}(E)} f = \\int_E (f \\circ \\mathbf{G}) |D_m g_m|'}</MathBlock>
        <p className="mb-3">
          This is essentially a one-variable substitution. By composing such mappings, we obtain
          the full change of variables formula with the Jacobian determinant.
        </p>
      </Callout>

      <Example title="10.10 - Change of Variables Preview">
        <p className="mb-3">
          Consider transforming from Cartesian <InlineMath>{'(x, y)'}</InlineMath> to polar <InlineMath>{'(r, \\theta)'}</InlineMath>
          coordinates: <InlineMath>{'x = r\\cos\\theta'}</InlineMath>, <InlineMath>{'y = r\\sin\\theta'}</InlineMath>.
        </p>
        <p className="mb-3">
          The Jacobian is:
        </p>
        <MathBlock>{'\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} = r'}</MathBlock>
        <p className="mb-3">
          The change of variables formula gives:
        </p>
        <MathBlock>{'\\int \\int_R f(x, y) \\, dx \\, dy = \\int \\int_S f(r\\cos\\theta, r\\sin\\theta) \\cdot r \\, dr \\, d\\theta'}</MathBlock>
        <p>
          The factor <InlineMath>{'r'}</InlineMath> is the absolute value of the Jacobian determinant.
          This arises from composing the primitive mappings in the factorization.
        </p>
      </Example>

      <Theorem
        title="10.11 - Change of Variables for Primitive Mappings"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'\\mathbf{G}'}</InlineMath> changes only the <InlineMath>{'m'}</InlineMath>-th coordinate, we can apply
              Fubini's theorem and reduce to the one-variable substitution formula.
            </p>
            <p className="mb-3">
              For fixed <InlineMath>{'(x_1, \\ldots, x_{m-1}, x_{m+1}, \\ldots, x_n)'}</InlineMath>, the mapping
              <InlineMath>{'x_m \\mapsto g_m(x_1, \\ldots, x_n)'}</InlineMath> is a one-variable change of coordinates.
            </p>
            <p className="mb-3">
              By the one-variable substitution rule:
            </p>
            <MathBlock>{'\\int f(\\ldots, g_m(\\mathbf{x}), \\ldots) |D_m g_m(\\mathbf{x})| \\, dx_m = \\int f(\\ldots, y_m, \\ldots) \\, dy_m'}</MathBlock>
            <p>
              Integrating over the remaining variables using Fubini gives the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{G}'}</InlineMath> be a primitive mapping changing only the <InlineMath>{'m'}</InlineMath>-th coordinate,
          with <InlineMath>{'D_m g_m \\neq 0'}</InlineMath>. For an integrable function <InlineMath>{'f'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_{\\mathbf{G}(E)} f(\\mathbf{y}) \\, d\\mathbf{y} = \\int_E f(\\mathbf{G}(\\mathbf{x})) |D_m g_m(\\mathbf{x})| \\, d\\mathbf{x}'}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A primitive mapping changes only one coordinate: <InlineMath>{'\\mathbf{G}(\\mathbf{x}) = (x_1, \\ldots, g_m(\\mathbf{x}), \\ldots, x_n)'}</InlineMath></li>
        <li>Its Jacobian is simply <InlineMath>{'D_m g_m'}</InlineMath>, the partial derivative with respect to that coordinate</li>
        <li>Any smooth diffeomorphism factors locally into primitive mappings (and flips)</li>
        <li>This factorization reduces multivariable substitution to repeated one-variable substitutions</li>
        <li>The change of variables formula builds from the primitive case to the general case</li>
        <li>Flips account for sign changes in the Jacobian determinant</li>
      </ul>
    </LessonLayout>
  );
}
