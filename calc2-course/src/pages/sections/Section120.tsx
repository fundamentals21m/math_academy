import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section120() {
  return (
    <LessonLayout sectionId={120}>
      <h2>Integrability of Continuous Functions</h2>

      <p>
        The small-span theorem (Theorem 9.10) can be used to prove integrability of
        functions that are continuous on a rectangle.
      </p>

      <h3>The Main Result</h3>

      <Callout type="info">
        <strong>Theorem 11.6 (Integrability of Continuous Functions):</strong> If a
        function <InlineMath>{'f'}</InlineMath> is continuous on a rectangle{' '}
        <InlineMath>{'Q = [a, b] \\times [c, d]'}</InlineMath>, then{' '}
        <InlineMath>{'f'}</InlineMath> is integrable on <InlineMath>{'Q'}</InlineMath>.
        Moreover, the value of the integral can be obtained by iterated integration:
        <MathBlock>{`\\iint_Q f = \\int_c^d \\left[ \\int_a^b f(x, y) \\, dx \\right] dy = \\int_a^b \\left[ \\int_c^d f(x, y) \\, dy \\right] dx`}</MathBlock>
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        <strong>Step 1:</strong> By Theorem 9.8, <InlineMath>{'f'}</InlineMath> is bounded
        on <InlineMath>{'Q'}</InlineMath>, so <InlineMath>{'f'}</InlineMath> has an upper
        integral and a lower integral. We shall prove that{' '}
        <InlineMath>{'\\underline{I}(f) = \\overline{I}(f)'}</InlineMath>.
      </p>

      <p>
        <strong>Step 2:</strong> Choose <InlineMath>{'\\epsilon > 0'}</InlineMath>. By
        the small-span theorem, for this choice of <InlineMath>{'\\epsilon'}</InlineMath>{' '}
        there is a partition <InlineMath>{'P'}</InlineMath> of <InlineMath>{'Q'}</InlineMath>{' '}
        into a finite number (say <InlineMath>{'n'}</InlineMath>) of subrectangles{' '}
        <InlineMath>{'Q_1, \\ldots, Q_n'}</InlineMath> such that the{' '}
        <strong>span</strong> of <InlineMath>{'f'}</InlineMath> in every subrectangle is
        less than <InlineMath>{'\\epsilon'}</InlineMath>.
      </p>

      <p>
        Denote by <InlineMath>{'M_k(f)'}</InlineMath> and{' '}
        <InlineMath>{'m_k(f)'}</InlineMath>, respectively, the absolute maximum and
        minimum values of <InlineMath>{'f'}</InlineMath> in <InlineMath>{'Q_k'}</InlineMath>.
        Then we have:
      </p>
      <MathBlock>{`M_k(f) - m_k(f) < \\epsilon \\quad \\text{for each} \\quad k = 1, 2, \\ldots, n`}</MathBlock>

      <p>
        <strong>Step 3:</strong> Define step functions <InlineMath>{'s'}</InlineMath> and{' '}
        <InlineMath>{'t'}</InlineMath> on the interior of each <InlineMath>{'Q_k'}</InlineMath>:
      </p>
      <MathBlock>{`s(x) = m_k(f), \\quad t(x) = M_k(f) \\quad \\text{if} \\quad x \\in \\text{int} \\, Q_k`}</MathBlock>

      <p>
        At boundary points, define <InlineMath>{'s(x) = m'}</InlineMath> and{' '}
        <InlineMath>{'t(x) = M'}</InlineMath>, where <InlineMath>{'m'}</InlineMath> and{' '}
        <InlineMath>{'M'}</InlineMath> are the absolute minimum and maximum of{' '}
        <InlineMath>{'f'}</InlineMath> on <InlineMath>{'Q'}</InlineMath>. Then{' '}
        <InlineMath>{'s \\leq f \\leq t'}</InlineMath> for all{' '}
        <InlineMath>{'x'}</InlineMath> in <InlineMath>{'Q'}</InlineMath>.
      </p>

      <p>
        <strong>Step 4:</strong> The difference of the integrals is:
      </p>
      <MathBlock>{`\\iint_Q t - \\iint_Q s = \\sum_{k=1}^n \\{M_k(f) - m_k(f)\\} \\cdot a(Q_k) < \\epsilon \\sum_{k=1}^n a(Q_k) = \\epsilon \\cdot a(Q)`}</MathBlock>

      <p>
        where <InlineMath>{'a(Q)'}</InlineMath> is the area of <InlineMath>{'Q'}</InlineMath>.
        Since <InlineMath>{'\\iint_Q s \\leq \\underline{I}(f) \\leq \\overline{I}(f) \\leq \\iint_Q t'}</InlineMath>,
        we obtain:
      </p>
      <MathBlock>{`0 \\leq \\overline{I}(f) - \\underline{I}(f) \\leq \\epsilon \\cdot a(Q)`}</MathBlock>

      <p>
        Letting <InlineMath>{'\\epsilon \\to 0'}</InlineMath>, we see that{' '}
        <InlineMath>{'\\underline{I}(f) = \\overline{I}(f)'}</InlineMath>, so{' '}
        <InlineMath>{'f'}</InlineMath> is integrable on <InlineMath>{'Q'}</InlineMath>.
      </p>

      <h3>Continuity of Partial Integrals</h3>

      <p>
        The proof also shows that for each fixed <InlineMath>{'y'}</InlineMath> in{' '}
        <InlineMath>{'[c, d]'}</InlineMath>, the one-dimensional integral{' '}
        <InlineMath>{'\\int_a^b f(x, y) \\, dx'}</InlineMath> exists (since the
        integrand is continuous on <InlineMath>{'Q'}</InlineMath>). Let{' '}
        <InlineMath>{'A(y) = \\int_a^b f(x, y) \\, dx'}</InlineMath>.
      </p>

      <p>
        It can be shown that <InlineMath>{'A'}</InlineMath> is continuous on{' '}
        <InlineMath>{'[c, d]'}</InlineMath>, so <InlineMath>{'\\int_c^d A(y) \\, dy'}</InlineMath>{' '}
        exists and, by Theorem 11.5, equals <InlineMath>{'\\iint_Q f'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Continuous functions on rectangles are always
        integrable. This is the two-dimensional analogue of the fact that continuous
        functions on closed intervals are Riemann integrable. The proof uses uniform
        continuity (via the small-span theorem) to control the approximation by step
        functions.
      </Callout>
    </LessonLayout>
  );
}
