import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2 className="text-2xl font-semibold mb-4">The Gamma Function</h2>

      <p className="mb-4">
        The gamma function is one of the most important special functions in analysis.
        It extends the factorial function to non-integer arguments and arises naturally
        in many contexts, from probability theory to complex analysis. In this section,
        we define the gamma function via an improper integral and establish its fundamental properties.
      </p>

      <Definition title="8.17 - The Gamma Function">
        <p className="mb-3">
          For <InlineMath>{'x > 0'}</InlineMath>, we define the <em>gamma function</em> by
        </p>
        <MathBlock>{'\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt'}</MathBlock>
        <p className="mt-3">
          This integral converges for all <InlineMath>{'x > 0'}</InlineMath>. At the lower limit,
          the integrand behaves like <InlineMath>{'t^{x-1}'}</InlineMath> as <InlineMath>{'t \\to 0^+'}</InlineMath>,
          which is integrable near <InlineMath>{'0'}</InlineMath> when <InlineMath>{'x > 0'}</InlineMath>.
          At the upper limit, <InlineMath>{'e^{-t}'}</InlineMath> dominates any polynomial growth,
          ensuring convergence.
        </p>
      </Definition>

      <Theorem
        title="8.18 - Functional Equation of Gamma"
        proof={
          <>
            <p className="mb-3">
              We use integration by parts. Let <InlineMath>{'u = t^x'}</InlineMath> and <InlineMath>{'dv = e^{-t} \\, dt'}</InlineMath>,
              so <InlineMath>{'du = x t^{x-1} \\, dt'}</InlineMath> and <InlineMath>{'v = -e^{-t}'}</InlineMath>. Then
            </p>
            <MathBlock>{'\\Gamma(x+1) = \\int_0^\\infty t^x e^{-t} \\, dt = \\left[-t^x e^{-t}\\right]_0^\\infty + x \\int_0^\\infty t^{x-1} e^{-t} \\, dt'}</MathBlock>
            <p className="mb-3">
              The boundary term vanishes: as <InlineMath>{'t \\to \\infty'}</InlineMath>,
              we have <InlineMath>{'t^x e^{-t} \\to 0'}</InlineMath> since the exponential
              dominates any polynomial. At <InlineMath>{'t = 0'}</InlineMath>,
              we have <InlineMath>{'t^x e^{-t} \\to 0'}</InlineMath> for <InlineMath>{'x > 0'}</InlineMath>. Thus
            </p>
            <MathBlock>{'\\Gamma(x+1) = x \\int_0^\\infty t^{x-1} e^{-t} \\, dt = x \\Gamma(x)'}</MathBlock>
            <p className="mb-3">
              For the base case, we compute directly:
            </p>
            <MathBlock>{'\\Gamma(1) = \\int_0^\\infty e^{-t} \\, dt = \\left[-e^{-t}\\right]_0^\\infty = 0 - (-1) = 1'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          The gamma function satisfies the <em>functional equation</em>
        </p>
        <MathBlock>{'\\Gamma(x+1) = x \\Gamma(x)'}</MathBlock>
        <p className="mb-3">
          for all <InlineMath>{'x > 0'}</InlineMath>. Moreover, <InlineMath>{'\\Gamma(1) = 1'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="8.19 - Gamma Extends Factorial"
        proof={
          <>
            <p className="mb-3">
              We proceed by induction on <InlineMath>{'n'}</InlineMath>.
              The base case <InlineMath>{'n = 1'}</InlineMath> gives <InlineMath>{'\\Gamma(1) = 1 = 0!'}</InlineMath>,
              which holds by Theorem 8.18.
            </p>
            <p className="mb-3">
              For the inductive step, assume <InlineMath>{'\\Gamma(n) = (n-1)!'}</InlineMath>. Then by the functional equation:
            </p>
            <MathBlock>{'\\Gamma(n+1) = n \\Gamma(n) = n \\cdot (n-1)! = n!'}</MathBlock>
            <p>
              This completes the induction.
            </p>
          </>
        }
      >
        <p className="mb-3">
          For every positive integer <InlineMath>{'n'}</InlineMath>,
        </p>
        <MathBlock>{'\\Gamma(n+1) = n!'}</MathBlock>
        <p className="mt-3">
          Thus the gamma function provides a continuous interpolation of the factorial function.
        </p>
      </Theorem>

      <Example title="8.20 - Special Values of Gamma">
        <p className="mb-3">
          <strong>(a)</strong> From the functional equation and <InlineMath>{'\\Gamma(1) = 1'}</InlineMath>:
        </p>
        <MathBlock>{'\\Gamma(2) = 1 \\cdot \\Gamma(1) = 1, \\quad \\Gamma(3) = 2 \\cdot \\Gamma(2) = 2, \\quad \\Gamma(4) = 3 \\cdot \\Gamma(3) = 6'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> An important value is <InlineMath>{'\\Gamma(1/2)'}</InlineMath>. We compute:
        </p>
        <MathBlock>{'\\Gamma\\left(\\frac{1}{2}\\right) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt'}</MathBlock>
        <p className="mb-3">
          Substitute <InlineMath>{'t = u^2'}</InlineMath>, so <InlineMath>{'dt = 2u \\, du'}</InlineMath>:
        </p>
        <MathBlock>{'\\Gamma\\left(\\frac{1}{2}\\right) = \\int_0^\\infty u^{-1} e^{-u^2} \\cdot 2u \\, du = 2 \\int_0^\\infty e^{-u^2} \\, du = \\sqrt{\\pi}'}</MathBlock>
        <p className="mb-3">
          The last equality uses the Gaussian integral <InlineMath>{'\\int_0^\\infty e^{-u^2} du = \\sqrt{\\pi}/2'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(c)</strong> Using the functional equation with <InlineMath>{'\\Gamma(1/2) = \\sqrt{\\pi}'}</InlineMath>:
        </p>
        <MathBlock>{'\\Gamma\\left(\\frac{3}{2}\\right) = \\frac{1}{2} \\Gamma\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2}'}</MathBlock>
        <MathBlock>{'\\Gamma\\left(\\frac{5}{2}\\right) = \\frac{3}{2} \\Gamma\\left(\\frac{3}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}'}</MathBlock>
      </Example>

      <Theorem
        title="8.21 - Analyticity of Gamma"
        proof={
          <>
            <p className="mb-3">
              The key is to show that differentiation under the integral sign is justified.
              For <InlineMath>{'x'}</InlineMath> in a compact subset of <InlineMath>{'(0, \\infty)'}</InlineMath>,
              say <InlineMath>{'[a, b]'}</InlineMath> with <InlineMath>{'0 < a < b'}</InlineMath>, we have
            </p>
            <MathBlock>{'\\left| \\frac{\\partial}{\\partial x} t^{x-1} e^{-t} \\right| = |\\ln t| \\cdot t^{x-1} e^{-t}'}</MathBlock>
            <p className="mb-3">
              This is bounded by an integrable function independent of <InlineMath>{'x \\in [a,b]'}</InlineMath>.
              Hence we may differentiate under the integral sign to obtain
            </p>
            <MathBlock>{'\\Gamma\'(x) = \\int_0^\\infty t^{x-1} (\\ln t) e^{-t} \\, dt'}</MathBlock>
            <p className="mb-3">
              Repeating this argument shows that <InlineMath>{'\\Gamma'}</InlineMath> has derivatives of all orders.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The gamma function is infinitely differentiable on <InlineMath>{'(0, \\infty)'}</InlineMath>,
          with derivatives given by
        </p>
        <MathBlock>{'\\Gamma^{(n)}(x) = \\int_0^\\infty t^{x-1} (\\ln t)^n e^{-t} \\, dt'}</MathBlock>
      </Theorem>

      <Theorem
        title="8.22 - Log-Convexity of Gamma"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'0 < \\lambda < 1'}</InlineMath>, and let <InlineMath>{'p = 1/\\lambda'}</InlineMath>,
              <InlineMath>{'q = 1/(1-\\lambda)'}</InlineMath>, so <InlineMath>{'1/p + 1/q = 1'}</InlineMath>.
              By Holder's inequality:
            </p>
            <MathBlock>{'\\Gamma(\\lambda x + (1-\\lambda)y) = \\int_0^\\infty t^{\\lambda x + (1-\\lambda)y - 1} e^{-t} \\, dt'}</MathBlock>
            <MathBlock>{'= \\int_0^\\infty t^{\\lambda(x-1)} e^{-\\lambda t} \\cdot t^{(1-\\lambda)(y-1)} e^{-(1-\\lambda)t} \\, dt'}</MathBlock>
            <p className="mb-3">
              Applying Holder's inequality with exponents <InlineMath>{'p'}</InlineMath> and <InlineMath>{'q'}</InlineMath>:
            </p>
            <MathBlock>{'\\leq \\left( \\int_0^\\infty t^{x-1} e^{-t} \\, dt \\right)^\\lambda \\left( \\int_0^\\infty t^{y-1} e^{-t} \\, dt \\right)^{1-\\lambda}'}</MathBlock>
            <MathBlock>{'= \\Gamma(x)^\\lambda \\Gamma(y)^{1-\\lambda}'}</MathBlock>
            <p>
              Taking logarithms gives the log-convexity.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The function <InlineMath>{'\\log \\Gamma(x)'}</InlineMath> is convex on <InlineMath>{'(0, \\infty)'}</InlineMath>.
          Equivalently, for <InlineMath>{'x, y > 0'}</InlineMath> and <InlineMath>{'0 < \\lambda < 1'}</InlineMath>:
        </p>
        <MathBlock>{'\\Gamma(\\lambda x + (1-\\lambda)y) \\leq \\Gamma(x)^\\lambda \\Gamma(y)^{1-\\lambda}'}</MathBlock>
      </Theorem>

      <Callout type="info" title="The Bohr-Mollerup Theorem">
        <p className="mb-3">
          A remarkable characterization: <InlineMath>{'\\Gamma'}</InlineMath> is the unique function <InlineMath>{'f: (0, \\infty) \\to (0, \\infty)'}</InlineMath> satisfying:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{'f(1) = 1'}</InlineMath></li>
          <li><InlineMath>{'f(x+1) = x f(x)'}</InlineMath> for all <InlineMath>{'x > 0'}</InlineMath></li>
          <li><InlineMath>{'\\log f'}</InlineMath> is convex</li>
        </ul>
      </Callout>

      <Theorem
        title="8.23 - Beta Function Relation"
        proof={
          <>
            <p className="mb-3">
              We compute <InlineMath>{'\\Gamma(x)\\Gamma(y)'}</InlineMath> as a double integral:
            </p>
            <MathBlock>{'\\Gamma(x)\\Gamma(y) = \\int_0^\\infty s^{x-1} e^{-s} \\, ds \\int_0^\\infty t^{y-1} e^{-t} \\, dt'}</MathBlock>
            <p className="mb-3">
              Substitute <InlineMath>{'s = u^2'}</InlineMath>, <InlineMath>{'t = v^2'}</InlineMath>:
            </p>
            <MathBlock>{'= 4 \\int_0^\\infty \\int_0^\\infty u^{2x-1} v^{2y-1} e^{-(u^2+v^2)} \\, du \\, dv'}</MathBlock>
            <p className="mb-3">
              Converting to polar coordinates <InlineMath>{'u = r\\cos\\theta'}</InlineMath>, <InlineMath>{'v = r\\sin\\theta'}</InlineMath>:
            </p>
            <MathBlock>{'= 4 \\int_0^{\\pi/2} \\int_0^\\infty r^{2(x+y)-1} e^{-r^2} (\\cos\\theta)^{2x-1} (\\sin\\theta)^{2y-1} \\, dr \\, d\\theta'}</MathBlock>
            <p className="mb-3">
              The <InlineMath>{'r'}</InlineMath>-integral gives <InlineMath>{'\\frac{1}{2}\\Gamma(x+y)'}</InlineMath>.
              The <InlineMath>{'\\theta'}</InlineMath>-integral, after substitution <InlineMath>{'t = \\sin^2\\theta'}</InlineMath>,
              gives <InlineMath>{'\\frac{1}{2}B(x,y)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Define the <em>beta function</em> for <InlineMath>{'x, y > 0'}</InlineMath> by
        </p>
        <MathBlock>{'B(x, y) = \\int_0^1 t^{x-1} (1-t)^{y-1} \\, dt'}</MathBlock>
        <p className="mb-3">Then</p>
        <MathBlock>{'B(x, y) = \\frac{\\Gamma(x) \\Gamma(y)}{\\Gamma(x+y)}'}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The gamma function <InlineMath>{'\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt'}</InlineMath> is defined for <InlineMath>{'x > 0'}</InlineMath></li>
        <li>The functional equation <InlineMath>{'\\Gamma(x+1) = x\\Gamma(x)'}</InlineMath> is the key recurrence</li>
        <li><InlineMath>{'\\Gamma(n+1) = n!'}</InlineMath> for positive integers <InlineMath>{'n'}</InlineMath></li>
        <li><InlineMath>{'\\Gamma(1/2) = \\sqrt{\\pi}'}</InlineMath> connects gamma to the Gaussian integral</li>
        <li>Gamma is infinitely differentiable and log-convex on <InlineMath>{'(0, \\infty)'}</InlineMath></li>
        <li>The beta function satisfies <InlineMath>{'B(x,y) = \\Gamma(x)\\Gamma(y)/\\Gamma(x+y)'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
