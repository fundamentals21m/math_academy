import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-semibold mb-4">Properties of the Integral</h2>

      <p className="mb-4">
        The Riemann-Stieltjes integral satisfies several important properties that make it
        a powerful tool in analysis. These properties include linearity, monotonicity,
        and the ability to split integrals over subintervals.
      </p>

      <Theorem title="6.12 - Linearity">
        <p className="mb-3">
          If <InlineMath>{'f_1, f_2 \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>, then
          <InlineMath>{'f_1 + f_2 \\in \\mathscr{R}(\\alpha)'}</InlineMath>,
          <InlineMath>{'cf \\in \\mathscr{R}(\\alpha)'}</InlineMath> for every constant <InlineMath>{'c'}</InlineMath>, and
        </p>
        <MathBlock>{'\\int_a^b (f_1 + f_2) \\, d\\alpha = \\int_a^b f_1 \\, d\\alpha + \\int_a^b f_2 \\, d\\alpha'}</MathBlock>
        <MathBlock>{'\\int_a^b cf \\, d\\alpha = c \\int_a^b f \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Theorem title="6.13 - Linearity in the Integrator">
        <p className="mb-3">
          If <InlineMath>{'f \\in \\mathscr{R}(\\alpha_1)'}</InlineMath> and <InlineMath>{'f \\in \\mathscr{R}(\\alpha_2)'}</InlineMath>,
          then <InlineMath>{'f \\in \\mathscr{R}(\\alpha_1 + \\alpha_2)'}</InlineMath> and
        </p>
        <MathBlock>{'\\int_a^b f \\, d(\\alpha_1 + \\alpha_2) = \\int_a^b f \\, d\\alpha_1 + \\int_a^b f \\, d\\alpha_2'}</MathBlock>
        <p>
          If <InlineMath>{'c'}</InlineMath> is a positive constant, then <InlineMath>{'f \\in \\mathscr{R}(c\\alpha)'}</InlineMath> and
        </p>
        <MathBlock>{'\\int_a^b f \\, d(c\\alpha) = c \\int_a^b f \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Theorem title="6.14 - Monotonicity">
        <p className="mb-3">
          If <InlineMath>{'f_1, f_2 \\in \\mathscr{R}(\\alpha)'}</InlineMath> and <InlineMath>{'f_1(x) \\leq f_2(x)'}</InlineMath> for
          all <InlineMath>{'x \\in [a, b]'}</InlineMath>, then
        </p>
        <MathBlock>{'\\int_a^b f_1 \\, d\\alpha \\leq \\int_a^b f_2 \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Theorem title="6.15 - Absolute Value Bound">
        <p className="mb-3">
          If <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath> and
          <InlineMath>{'|f(x)| \\leq M'}</InlineMath> for all <InlineMath>{'x \\in [a, b]'}</InlineMath>, then
        </p>
        <MathBlock>{'\\left| \\int_a^b f \\, d\\alpha \\right| \\leq M [\\alpha(b) - \\alpha(a)]'}</MathBlock>
      </Theorem>

      <Theorem title="6.16 - Additivity over Intervals">
        <p className="mb-3">
          Suppose <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>
          and <InlineMath>{'a < c < b'}</InlineMath>. Then <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on
          both <InlineMath>{'[a, c]'}</InlineMath> and <InlineMath>{'[c, b]'}</InlineMath>, and
        </p>
        <MathBlock>{'\\int_a^b f \\, d\\alpha = \\int_a^c f \\, d\\alpha + \\int_c^b f \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Theorem
        title="6.17 - Triangle Inequality for Integrals"
        proof={
          <>
            <p className="mb-3">
              First, <InlineMath>{'|f|^2 = f \\cdot f \\in \\mathscr{R}(\\alpha)'}</InlineMath> by Theorem 6.11.
              Hence <InlineMath>{'|f| = \\sqrt{|f|^2} \\in \\mathscr{R}(\\alpha)'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'-|f(x)| \\leq f(x) \\leq |f(x)|'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>,
              the monotonicity property (Theorem 6.14) gives
            </p>
            <MathBlock>{'-\\int_a^b |f| \\, d\\alpha \\leq \\int_a^b f \\, d\\alpha \\leq \\int_a^b |f| \\, d\\alpha'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>,
          then <InlineMath>{'|f| \\in \\mathscr{R}(\\alpha)'}</InlineMath> and
        </p>
        <MathBlock>{'\\left| \\int_a^b f \\, d\\alpha \\right| \\leq \\int_a^b |f| \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Definition title="6.18 - Integration by Parts">
        <p className="mb-3">
          If <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>,
          then <InlineMath>{'\\alpha \\in \\mathscr{R}(f)'}</InlineMath> and
        </p>
        <MathBlock>{'\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)'}</MathBlock>
      </Definition>

      <Example title="Application of Integration by Parts">
        <p className="mb-3">
          For the Riemann integral (where <InlineMath>{'\\alpha(x) = x'}</InlineMath>), if <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> have
          continuous derivatives on <InlineMath>{'[a, b]'}</InlineMath>, then
        </p>
        <MathBlock>{'\\int_a^b f(x) g\'(x) \\, dx + \\int_a^b f\'(x) g(x) \\, dx = f(b)g(b) - f(a)g(a)'}</MathBlock>
        <p className="mb-3">
          or equivalently:
        </p>
        <MathBlock>{'\\int_a^b f(x) g\'(x) \\, dx = [f(x)g(x)]_a^b - \\int_a^b f\'(x) g(x) \\, dx'}</MathBlock>
      </Example>

      <Theorem title="6.19 - Change of Variables">
        <p className="mb-3">
          Suppose <InlineMath>{'\\phi'}</InlineMath> is a strictly increasing continuous function that maps
          an interval <InlineMath>{'[A, B]'}</InlineMath> onto <InlineMath>{'[a, b]'}</InlineMath>. Suppose <InlineMath>{'\\alpha'}</InlineMath> is
          monotonically increasing on <InlineMath>{'[a, b]'}</InlineMath> and <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath>. Define
          <InlineMath>{'\\beta'}</InlineMath> and <InlineMath>{'g'}</InlineMath> on <InlineMath>{'[A, B]'}</InlineMath> by
        </p>
        <MathBlock>{'\\beta(y) = \\alpha(\\phi(y)), \\quad g(y) = f(\\phi(y))'}</MathBlock>
        <p>
          Then <InlineMath>{'g \\in \\mathscr{R}(\\beta)'}</InlineMath> and
        </p>
        <MathBlock>{'\\int_A^B g \\, d\\beta = \\int_a^b f \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Riemann Integral Form">
        <p className="mb-3">
          For the ordinary Riemann integral, the change of variables formula becomes:
          if <InlineMath>{'x = \\phi(t)'}</InlineMath> where <InlineMath>{'\\phi\'(t)'}</InlineMath> is continuous, then
        </p>
        <MathBlock>{'\\int_a^b f(x) \\, dx = \\int_A^B f(\\phi(t)) \\phi\'(t) \\, dt'}</MathBlock>
        <p>
          where <InlineMath>{'\\phi(A) = a'}</InlineMath> and <InlineMath>{'\\phi(B) = b'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The integral is linear in both the integrand and the integrator</li>
        <li>If <InlineMath>{'f_1 \\leq f_2'}</InlineMath>, then <InlineMath>{'\\int f_1 \\, d\\alpha \\leq \\int f_2 \\, d\\alpha'}</InlineMath></li>
        <li>The integral can be split over subintervals</li>
        <li>Triangle inequality: <InlineMath>{'|\\int f \\, d\\alpha| \\leq \\int |f| \\, d\\alpha'}</InlineMath></li>
        <li>Integration by parts: <InlineMath>{'\\int f \\, d\\alpha + \\int \\alpha \\, df = f\\alpha|_a^b'}</InlineMath></li>
        <li>Change of variables allows substitution in integrals</li>
      </ul>
    </LessonLayout>
  );
}
