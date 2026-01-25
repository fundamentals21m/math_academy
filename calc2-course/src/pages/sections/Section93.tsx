import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section93() {
  return (
    <LessonLayout sectionId={93}>
      <h2>The One-Dimensional Wave Equation</h2>

      <p>
        Imagine a string of infinite length stretched along the{' '}
        <InlineMath>x</InlineMath>-axis and allowed to vibrate in the{' '}
        <InlineMath>xy</InlineMath>-plane. We denote by{' '}
        <InlineMath>y = f(x, t)</InlineMath> the vertical displacement of the
        string at point <InlineMath>x</InlineMath> at time <InlineMath>t</InlineMath>.
      </p>

      <h3>The Wave Equation</h3>

      <Callout type="info">
        <strong>One-Dimensional Wave Equation:</strong> A mathematical model for
        vibrating strings is the partial differential equation:
        <MathBlock>{`\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}`}</MathBlock>
        where <InlineMath>c</InlineMath> is a positive constant depending on the
        physical characteristics of the string.
      </Callout>

      <h3>Initial Conditions</h3>

      <p>
        We assume the initial displacement is a prescribed curve{' '}
        <InlineMath>y = F(x)</InlineMath>, so we seek a solution satisfying:
      </p>
      <MathBlock>
        f(x, 0) = F(x)
      </MathBlock>

      <p>
        We also assume the initial velocity{' '}
        <InlineMath>{`\\partial y/\\partial t`}</InlineMath> is prescribed at time{' '}
        <InlineMath>t = 0</InlineMath>:
      </p>
      <MathBlock>
        D_2 f(x, 0) = G(x)
      </MathBlock>
      <p>
        where <InlineMath>G</InlineMath> is a given function.
      </p>

      <h3>D'Alembert's Solution</h3>

      <Callout type="info">
        <strong>Theorem 9.2 (D'Alembert's Solution):</strong> Let{' '}
        <InlineMath>F</InlineMath> and <InlineMath>G</InlineMath> be given
        functions such that <InlineMath>G</InlineMath> is differentiable and{' '}
        <InlineMath>F</InlineMath> is twice differentiable on{' '}
        <InlineMath>{`\\mathbb{R}^1`}</InlineMath>. Then the function{' '}
        <InlineMath>f</InlineMath> given by the formula:
        <MathBlock>{`f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c} \\int_{x - ct}^{x + ct} G(s) \\, ds`}</MathBlock>
        satisfies the wave equation and the initial conditions{' '}
        <InlineMath>f(x, 0) = F(x)</InlineMath> and{' '}
        <InlineMath>D_2 f(x, 0) = G(x)</InlineMath>.
        <br /><br />
        <strong>Conversely</strong>, any function <InlineMath>f</InlineMath> with
        equal mixed partials which satisfies the wave equation and these initial
        conditions necessarily has this form.
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        The wave equation can be rewritten by factoring:
      </p>
      <MathBlock>{`L_1(L_2 f) = 0, \\quad \\text{where } L_1 = \\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}, \\quad L_2 = \\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}`}</MathBlock>

      <p>
        If <InlineMath>f</InlineMath> is a solution and we let{' '}
        <InlineMath>u(x, t) = L_2 f(x, t)</InlineMath>, then{' '}
        <InlineMath>u</InlineMath> satisfies <InlineMath>L_1(u) = 0</InlineMath>.
        By Theorem 9.1:
      </p>
      <MathBlock>
        u(x, t) = \varphi(x + ct)
      </MathBlock>
      <p>
        for some function <InlineMath>\varphi</InlineMath>.
      </p>

      <p>
        Further analysis shows that any solution has the form:
      </p>
      <MathBlock>
        f(x, t) = \varphi_1(x + ct) + \varphi_2(x - ct)
      </MathBlock>

      <p>
        The functions <InlineMath>{`\\varphi_1`}</InlineMath> and{' '}
        <InlineMath>{`\\varphi_2`}</InlineMath> are then determined by the initial
        conditions.
      </p>

      <h3>Physical Interpretation</h3>

      <p>
        The solution is a combination of two traveling waves:
      </p>
      <ul>
        <li>
          <InlineMath>{`\\varphi_1(x + ct)`}</InlineMath>: a wave traveling to
          the <strong>left</strong> with speed <InlineMath>c</InlineMath>
        </li>
        <li>
          <InlineMath>{`\\varphi_2(x - ct)`}</InlineMath>: a wave traveling to
          the <strong>right</strong> with speed <InlineMath>c</InlineMath>
        </li>
      </ul>

      <p>
        When the initial velocity <InlineMath>G(x) = 0</InlineMath>, the solution
        simplifies to:
      </p>
      <MathBlock>{`f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}`}</MathBlock>
      <p>
        This represents the initial profile splitting into two half-amplitude
        waves traveling in opposite directions.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> D'Alembert's solution reveals that waves
        in one dimension propagate without distortion—the initial shape travels
        intact at constant speed. The chain rule and factorization technique
        reduce the second-order wave equation to first-order equations, each
        solved by Theorem 9.1.
      </Callout>
    </LessonLayout>
  );
}
