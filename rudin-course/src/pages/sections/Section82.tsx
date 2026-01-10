import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <h2 className="text-2xl font-semibold mb-4">Integration</h2>

      <p className="mb-4">
        The Lebesgue integral extends the integral from simple functions to general measurable
        functions. Key convergence theorems make the Lebesgue integral far more powerful than
        the Riemann integral.
      </p>

      <Definition title="11.27 - Lebesgue Integral (Nonnegative Functions)">
        <p className="mb-3">
          Let <InlineMath>{'f: X \\to [0, \\infty]'}</InlineMath> be measurable and <InlineMath>{'E \\in \\mathfrak{M}'}</InlineMath>.
          The <em>Lebesgue integral</em> of <InlineMath>{'f'}</InlineMath> over <InlineMath>{'E'}</InlineMath> is
        </p>
        <MathBlock>{'\\int_E f \\, d\\mu = \\sup\\left\\{\\int_E s \\, d\\mu : 0 \\leq s \\leq f, \\, s \\text{ simple}\\right\\}'}</MathBlock>
        <p>
          This may equal <InlineMath>{'+\\infty'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="11.28 - Monotone Convergence Theorem"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\alpha = \\lim \\int f_n \\, d\\mu'}</InlineMath>. Since <InlineMath>{'f_n \\leq f'}</InlineMath>,
              we have <InlineMath>{'\\int f_n \\leq \\int f'}</InlineMath>, so <InlineMath>{'\\alpha \\leq \\int f \\, d\\mu'}</InlineMath>.
            </p>
            <p className="mb-3">
              For the reverse inequality, let <InlineMath>{'s'}</InlineMath> be simple with <InlineMath>{'0 \\leq s \\leq f'}</InlineMath>
              and <InlineMath>{'0 < c < 1'}</InlineMath>. Define <InlineMath>{'E_n = \\{x : f_n(x) \\geq cs(x)\\}'}</InlineMath>.
              Then <InlineMath>{'E_n \\uparrow X'}</InlineMath>.
            </p>
            <MathBlock>{'\\int f_n \\, d\\mu \\geq \\int_{E_n} f_n \\, d\\mu \\geq c \\int_{E_n} s \\, d\\mu'}</MathBlock>
            <p className="mb-3">
              As <InlineMath>{'n \\to \\infty'}</InlineMath>, <InlineMath>{'\\int_{E_n} s \\, d\\mu \\to \\int s \\, d\\mu'}</InlineMath>
              by continuity of measure.
            </p>
            <p>
              Hence <InlineMath>{'\\alpha \\geq c \\int s \\, d\\mu'}</InlineMath>. Letting <InlineMath>{'c \\to 1'}</InlineMath>
              and taking sup over <InlineMath>{'s'}</InlineMath> gives <InlineMath>{'\\alpha \\geq \\int f \\, d\\mu'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\{f_n\\}'}</InlineMath> be a sequence of measurable functions with <InlineMath>{'0 \\leq f_1 \\leq f_2 \\leq \\cdots'}</InlineMath>,
          and let <InlineMath>{'f = \\lim_{n \\to \\infty} f_n'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\int_E f \\, d\\mu = \\lim_{n \\to \\infty} \\int_E f_n \\, d\\mu'}</MathBlock>
      </Theorem>

      <Theorem
        title="11.29 - Fatou's Lemma"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'g_n = \\inf_{k \\geq n} f_k'}</InlineMath>. Then <InlineMath>{'g_n \\leq f_n'}</InlineMath>,
              <InlineMath>{'g_n \\uparrow \\liminf f_n'}</InlineMath>, and
            </p>
            <MathBlock>{'\\int g_n \\, d\\mu \\leq \\int f_n \\, d\\mu'}</MathBlock>
            <p>
              By MCT, <InlineMath>{'\\int \\liminf f_n = \\lim \\int g_n \\leq \\liminf \\int f_n'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f_n \\geq 0'}</InlineMath> are measurable, then
        </p>
        <MathBlock>{'\\int \\liminf_{n \\to \\infty} f_n \\, d\\mu \\leq \\liminf_{n \\to \\infty} \\int f_n \\, d\\mu'}</MathBlock>
      </Theorem>

      <Definition title="11.30 - Integrable Functions">
        <p className="mb-3">
          For a real-valued measurable <InlineMath>{'f'}</InlineMath>, write <InlineMath>{'f = f^+ - f^-'}</InlineMath> where
          <InlineMath>{'f^+ = \\max(f, 0)'}</InlineMath> and <InlineMath>{'f^- = \\max(-f, 0)'}</InlineMath>. Define
        </p>
        <MathBlock>{'\\int_E f \\, d\\mu = \\int_E f^+ \\, d\\mu - \\int_E f^- \\, d\\mu'}</MathBlock>
        <p>
          provided at least one of the integrals on the right is finite. If both are finite,
          <InlineMath>{'f'}</InlineMath> is <em>integrable</em>, written <InlineMath>{'f \\in L^1(\\mu)'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="11.31 - Dominated Convergence Theorem"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'f_n \\to f'}</InlineMath> pointwise and <InlineMath>{'|f_n| \\leq g'}</InlineMath>,
              we have <InlineMath>{'|f| \\leq g'}</InlineMath>, so <InlineMath>{'f \\in L^1'}</InlineMath>.
            </p>
            <p className="mb-3">
              Apply Fatou's lemma to <InlineMath>{'g + f_n \\geq 0'}</InlineMath>:
            </p>
            <MathBlock>{'\\int g + \\int f \\leq \\liminf \\left(\\int g + \\int f_n\\right)'}</MathBlock>
            <p className="mb-3">
              giving <InlineMath>{'\\int f \\leq \\liminf \\int f_n'}</InlineMath>.
            </p>
            <p>
              Similarly, Fatou on <InlineMath>{'g - f_n \\geq 0'}</InlineMath> gives <InlineMath>{'\\int f \\geq \\limsup \\int f_n'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'g \\in L^1(\\mu)'}</InlineMath>, <InlineMath>{'g \\geq 0'}</InlineMath>. If <InlineMath>{'\\{f_n\\}'}</InlineMath> are
          measurable with <InlineMath>{'|f_n| \\leq g'}</InlineMath> and <InlineMath>{'f_n \\to f'}</InlineMath> pointwise, then
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\int f_n \\, d\\mu = \\int f \\, d\\mu'}</MathBlock>
      </Theorem>

      <Callout type="warning" title="Domination is Essential">
        <p>
          Without a dominating function, DCT fails. For example, <InlineMath>{'f_n = n \\chi_{(0, 1/n)}'}</InlineMath>
          on <InlineMath>{'[0,1]'}</InlineMath> has <InlineMath>{'\\int f_n = 1'}</InlineMath> for all <InlineMath>{'n'}</InlineMath>,
          but <InlineMath>{'f_n \\to 0'}</InlineMath> pointwise.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The Lebesgue integral is defined as sup over simple function approximations</li>
        <li>MCT: for increasing sequences, integral and limit commute</li>
        <li>Fatou: <InlineMath>{'\\int \\liminf \\leq \\liminf \\int'}</InlineMath></li>
        <li>DCT: dominated pointwise convergence implies integral convergence</li>
        <li>A function is integrable if <InlineMath>{'\\int |f| < \\infty'}</InlineMath></li>
        <li>These theorems are the main advantage of Lebesgue over Riemann integration</li>
      </ul>
    </LessonLayout>
  );
}
