import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-semibold mb-4">Integration of Vector-valued Functions</h2>

      <p className="mb-4">
        Just as we extended differentiation to vector-valued functions, we can extend
        integration componentwise. This allows us to integrate curves in space and
        has applications in physics, particularly in mechanics and electromagnetism.
      </p>

      <Definition title="6.23 - Vector-valued Integration">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f} = (f_1, f_2, \\ldots, f_k)'}</InlineMath> be a function from <InlineMath>{'[a, b]'}</InlineMath> to <InlineMath>{'\\mathbb{R}^k'}</InlineMath>.
          We say that <InlineMath>{'\\mathbf{f} \\in \\mathscr{R}(\\alpha)'}</InlineMath> if <InlineMath>{'f_j \\in \\mathscr{R}(\\alpha)'}</InlineMath> for
          each <InlineMath>{'j = 1, 2, \\ldots, k'}</InlineMath>, and we define
        </p>
        <MathBlock>{'\\int_a^b \\mathbf{f} \\, d\\alpha = \\left( \\int_a^b f_1 \\, d\\alpha, \\int_a^b f_2 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha \\right)'}</MathBlock>
        <p>
          In other words, we integrate componentwise.
        </p>
      </Definition>

      <Theorem title="6.24 - Properties of Vector Integration">
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}, \\mathbf{g} \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>, then:
        </p>
        <p className="mb-2">
          <strong>(a)</strong> <InlineMath>{'\\mathbf{f} + \\mathbf{g} \\in \\mathscr{R}(\\alpha)'}</InlineMath> and
          <InlineMath>{'\\int_a^b (\\mathbf{f} + \\mathbf{g}) \\, d\\alpha = \\int_a^b \\mathbf{f} \\, d\\alpha + \\int_a^b \\mathbf{g} \\, d\\alpha'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong>(b)</strong> <InlineMath>{'c\\mathbf{f} \\in \\mathscr{R}(\\alpha)'}</InlineMath> for any scalar <InlineMath>{'c'}</InlineMath> and
          <InlineMath>{'\\int_a^b c\\mathbf{f} \\, d\\alpha = c \\int_a^b \\mathbf{f} \\, d\\alpha'}</InlineMath>
        </p>
        <p>
          <strong>(c)</strong> The integral can be split over subintervals.
        </p>
      </Theorem>

      <Theorem
        title="6.25 - Magnitude Bound"
        proof={
          <>
            <p className="mb-3">
              Put <InlineMath>{'\\mathbf{y} = \\int_a^b \\mathbf{f} \\, d\\alpha'}</InlineMath>. If <InlineMath>{'\\mathbf{y} = \\mathbf{0}'}</InlineMath>,
              the inequality holds trivially.
            </p>
            <p className="mb-3">
              If <InlineMath>{'\\mathbf{y} \\neq \\mathbf{0}'}</InlineMath>, consider the function
              <InlineMath>{'g(t) = \\mathbf{f}(t) \\cdot \\mathbf{y}'}</InlineMath>. This is a real-valued function in <InlineMath>{'\\mathscr{R}(\\alpha)'}</InlineMath>.
            </p>
            <MathBlock>{'\\int_a^b g \\, d\\alpha = \\int_a^b \\mathbf{f} \\cdot \\mathbf{y} \\, d\\alpha = \\mathbf{y} \\cdot \\mathbf{y} = |\\mathbf{y}|^2'}</MathBlock>
            <p className="mb-3">
              By the Cauchy-Schwarz inequality, <InlineMath>{'|g(t)| = |\\mathbf{f}(t) \\cdot \\mathbf{y}| \\leq |\\mathbf{f}(t)| \\cdot |\\mathbf{y}|'}</InlineMath>.
            </p>
            <p>
              Hence <InlineMath>{'|\\mathbf{y}|^2 \\leq |\\mathbf{y}| \\int_a^b |\\mathbf{f}| \\, d\\alpha'}</InlineMath>, giving the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f} \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>, then
        </p>
        <MathBlock>{'\\left| \\int_a^b \\mathbf{f} \\, d\\alpha \\right| \\leq \\int_a^b |\\mathbf{f}| \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Example title="Integrating a Position Vector">
        <p className="mb-3">
          Consider a particle moving along the helix <InlineMath>{'\\mathbf{r}(t) = (\\cos t, \\sin t, t)'}</InlineMath>.
          Its velocity is <InlineMath>{'\\mathbf{v}(t) = \\mathbf{r}\'(t) = (-\\sin t, \\cos t, 1)'}</InlineMath>.
        </p>
        <p className="mb-3">
          The displacement from <InlineMath>{'t = 0'}</InlineMath> to <InlineMath>{'t = 2\\pi'}</InlineMath> is:
        </p>
        <MathBlock>{'\\int_0^{2\\pi} \\mathbf{v}(t) \\, dt = \\left( \\int_0^{2\\pi} -\\sin t \\, dt, \\int_0^{2\\pi} \\cos t \\, dt, \\int_0^{2\\pi} 1 \\, dt \\right)'}</MathBlock>
        <MathBlock>{'= ([\\cos t]_0^{2\\pi}, [\\sin t]_0^{2\\pi}, [t]_0^{2\\pi}) = (1 - 1, 0 - 0, 2\\pi - 0) = (0, 0, 2\\pi)'}</MathBlock>
        <p>
          The particle returns to the same <InlineMath>{'(x, y)'}</InlineMath> position but has moved <InlineMath>{'2\\pi'}</InlineMath> units in the <InlineMath>{'z'}</InlineMath>-direction.
        </p>
      </Example>

      <Theorem title="Fundamental Theorem for Vector Functions">
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{F}'}</InlineMath> is differentiable on <InlineMath>{'[a, b]'}</InlineMath> and <InlineMath>{'\\mathbf{F}\' = \\mathbf{f}'}</InlineMath> is integrable, then
        </p>
        <MathBlock>{'\\int_a^b \\mathbf{f}(t) \\, dt = \\mathbf{F}(b) - \\mathbf{F}(a)'}</MathBlock>
        <p>
          This is simply the scalar Fundamental Theorem applied componentwise.
        </p>
      </Theorem>

      <Example title="Work as a Line Integral">
        <p className="mb-3">
          If a force field <InlineMath>{'\\mathbf{F}(\\mathbf{r})'}</InlineMath> acts on a particle moving along
          a curve <InlineMath>{'\\mathbf{r}(t)'}</InlineMath> from <InlineMath>{'t = a'}</InlineMath> to <InlineMath>{'t = b'}</InlineMath>,
          the work done is
        </p>
        <MathBlock>{'W = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}\'(t) \\, dt'}</MathBlock>
        <p className="mb-3">
          For a constant force <InlineMath>{'\\mathbf{F} = (F_x, F_y, F_z)'}</InlineMath> and linear path
          from <InlineMath>{'\\mathbf{A}'}</InlineMath> to <InlineMath>{'\\mathbf{B}'}</InlineMath>:
        </p>
        <MathBlock>{'W = \\mathbf{F} \\cdot (\\mathbf{B} - \\mathbf{A})'}</MathBlock>
      </Example>

      <Callout type="info" title="Applications in Physics">
        <p className="mb-3">
          Vector-valued integration appears throughout physics:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Displacement:</strong> <InlineMath>{'\\Delta \\mathbf{r} = \\int \\mathbf{v} \\, dt'}</InlineMath></li>
          <li><strong>Impulse:</strong> <InlineMath>{'\\mathbf{J} = \\int \\mathbf{F} \\, dt = \\Delta \\mathbf{p}'}</InlineMath> (change in momentum)</li>
          <li><strong>Work:</strong> <InlineMath>{'W = \\int \\mathbf{F} \\cdot d\\mathbf{r}'}</InlineMath></li>
          <li><strong>Circulation:</strong> <InlineMath>{'\\oint \\mathbf{F} \\cdot d\\mathbf{r}'}</InlineMath> (integral around a closed curve)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Vector functions are integrated componentwise</li>
        <li><InlineMath>{'\\int_a^b \\mathbf{f} \\, d\\alpha = \\left( \\int_a^b f_1 \\, d\\alpha, \\ldots, \\int_a^b f_k \\, d\\alpha \\right)'}</InlineMath></li>
        <li>Linearity holds: <InlineMath>{'\\int (\\mathbf{f} + \\mathbf{g}) = \\int \\mathbf{f} + \\int \\mathbf{g}'}</InlineMath></li>
        <li>Magnitude bound: <InlineMath>{'|\\int \\mathbf{f}| \\leq \\int |\\mathbf{f}|'}</InlineMath></li>
        <li>The Fundamental Theorem applies componentwise</li>
        <li>Physical applications include displacement, impulse, and work</li>
      </ul>
    </LessonLayout>
  );
}
