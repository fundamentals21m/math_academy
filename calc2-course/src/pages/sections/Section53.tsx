import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2>Complex Roots</h2>

      <p>
        When the characteristic equation has complex roots, we can either use
        complex exponentials directly or extract real solutions using Euler's
        formula.
      </p>

      <h3>Conjugate Pairs</h3>

      <p>
        Since the characteristic polynomial has real coefficients, complex roots
        occur in conjugate pairs: <InlineMath>{`\\alpha + i\\beta`}</InlineMath> and{' '}
        <InlineMath>{`\\alpha - i\\beta`}</InlineMath> (where{' '}
        <InlineMath>{`\\beta \\neq 0`}</InlineMath>).
      </p>

      <p>
        The two linear factors combine into a quadratic with real coefficients:
      </p>
      <MathBlock>{`D^2 - 2\\alpha D + \\alpha^2 + \\beta^2`}</MathBlock>

      <h3>Complex Exponential Solutions</h3>

      <p>
        The complex exponential functions{' '}
        <InlineMath>{`f_1(x) = e^{(\\alpha + i\\beta)x}`}</InlineMath> and{' '}
        <InlineMath>{`f_2(x) = e^{(\\alpha - i\\beta)x}`}</InlineMath> are
        complex solutions.
      </p>

      <h3>Real Solutions via Euler's Formula</h3>

      <p>
        Using <InlineMath>{`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}</InlineMath>:
      </p>
      <MathBlock>
        {`f_1(x) = e^{\\alpha x}e^{i\\beta x} = e^{\\alpha x}(\\cos\\beta x + i\\sin\\beta x)`}
      </MathBlock>
      <MathBlock>
        {`f_2(x) = e^{\\alpha x}e^{-i\\beta x} = e^{\\alpha x}(\\cos\\beta x - i\\sin\\beta x)`}
      </MathBlock>

      <p>
        The real and imaginary parts give two independent real solutions:
      </p>
      <MathBlock>
        {`u(x) = e^{\\alpha x}\\cos\\beta x, \\quad v(x) = e^{\\alpha x}\\sin\\beta x`}
      </MathBlock>

      <h3>Simple Complex Roots</h3>

      <p>
        For a pair of simple complex roots{' '}
        <InlineMath>{`\\alpha \\pm i\\beta`}</InlineMath>, the corresponding part of
        the general solution is:
      </p>
      <MathBlock>
        {`e^{\\alpha x}(c_1 \\cos\\beta x + c_2 \\sin\\beta x)`}
      </MathBlock>

      <h3>Repeated Complex Roots</h3>

      <p>
        If the pair <InlineMath>{`\\alpha \\pm i\\beta`}</InlineMath> occurs with
        multiplicity <InlineMath>m</InlineMath>, the quadratic factor appears to
        the <InlineMath>m</InlineMath>th power. The null space contains{' '}
        <InlineMath>{`2m`}</InlineMath> independent functions:
      </p>
      <MathBlock>
        {`u_q(x) = x^{q-1}e^{\\alpha x}\\cos\\beta x, \\quad v_q(x) = x^{q-1}e^{\\alpha x}\\sin\\beta x`}
      </MathBlock>
      <p>
        for <InlineMath>{`q = 1, 2, \\ldots, m`}</InlineMath>.
      </p>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong>{' '}
        <InlineMath>{`y''' - 4y'' + 13y' = 0`}</InlineMath>
      </p>
      <p>
        Characteristic equation: <InlineMath>{`r^3 - 4r^2 + 13r = 0`}</InlineMath>
      </p>
      <p>
        Roots: <InlineMath>{`0, 2 \\pm 3i`}</InlineMath>
      </p>
      <p>
        General solution:
      </p>
      <MathBlock>{`y = c_1 + e^{2x}(c_2 \\cos 3x + c_3 \\sin 3x)`}</MathBlock>

      <p>
        <strong>Example 2:</strong>{' '}
        <InlineMath>{`y''' - 2y'' + 4y' - 8y = 0`}</InlineMath>
      </p>
      <p>
        Characteristic equation:{' '}
        <InlineMath>{`r^3 - 2r^2 + 4r - 8 = (r-2)(r^2+4) = 0`}</InlineMath>
      </p>
      <p>
        Roots: <InlineMath>{`2, \\pm 2i`}</InlineMath>
      </p>
      <p>
        General solution:
      </p>
      <MathBlock>{`y = c_1 e^{2x} + c_2 \\cos 2x + c_3 \\sin 2x`}</MathBlock>

      <p>
        <strong>Example 3 (Repeated complex roots):</strong>{' '}
        <InlineMath>{`y^{(5)} - 9y^{(4)} + 34y''' - 66y'' + 65y' - 25y = 0`}</InlineMath>
      </p>
      <p>
        Characteristic equation:{' '}
        <InlineMath>{`(r-1)(r^2 - 4r + 5)^2 = 0`}</InlineMath>
      </p>
      <p>
        Roots: <InlineMath>{`1, 2 \\pm i`}</InlineMath> (each with multiplicity 2)
      </p>
      <p>
        General solution:
      </p>
      <MathBlock>
        {`y = c_1 e^x + e^{2x}[(c_2 + c_3 x)\\cos x + (c_4 + c_5 x)\\sin x]`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Complex roots{' '}
        <InlineMath>{`\\alpha \\pm i\\beta`}</InlineMath> give oscillatory solutions
        with frequency <InlineMath>{`\\beta`}</InlineMath>. If{' '}
        <InlineMath>{`\\alpha < 0`}</InlineMath>, the oscillations decay; if{' '}
        <InlineMath>{`\\alpha > 0`}</InlineMath>, they grow; if{' '}
        <InlineMath>{`\\alpha = 0`}</InlineMath>, they remain bounded. This connects
        eigenvalue analysis to the qualitative behavior of physical systems.
      </Callout>
    </LessonLayout>
  );
}
