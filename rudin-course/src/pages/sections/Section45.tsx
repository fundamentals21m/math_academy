import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2 className="text-2xl font-semibold mb-4">Rectifiable Curves</h2>

      <p className="mb-4">
        We now study the concept of arc length for curves in <InlineMath>{'\\mathbb{R}^k'}</InlineMath>.
        The key idea is to approximate the curve by polygonal paths and take the supremum
        of the lengths of these approximations. Curves for which this supremum is finite
        are called rectifiable.
      </p>

      <Definition title="6.26 - Arc Length">
        <p className="mb-3">
          A continuous mapping <InlineMath>{'\\gamma: [a, b] \\to \\mathbb{R}^k'}</InlineMath> is called a <em>curve</em>.
          To define the length of <InlineMath>{'\\gamma'}</InlineMath>, consider any partition
          <InlineMath>{'P = \\{a = t_0 < t_1 < \\cdots < t_n = b\\}'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
        <p className="mb-3">
          The <em>polygonal approximation</em> to <InlineMath>{'\\gamma'}</InlineMath> corresponding to <InlineMath>{'P'}</InlineMath> is
          the polygon with vertices <InlineMath>{'\\gamma(t_0), \\gamma(t_1), \\ldots, \\gamma(t_n)'}</InlineMath>.
          Its length is
        </p>
        <MathBlock>{'\\Lambda(P, \\gamma) = \\sum_{i=1}^{n} |\\gamma(t_i) - \\gamma(t_{i-1})|'}</MathBlock>
        <p className="mb-3">
          The <em>length of <InlineMath>{'\\gamma'}</InlineMath></em> is defined as
        </p>
        <MathBlock>{'\\Lambda(\\gamma) = \\sup_P \\Lambda(P, \\gamma)'}</MathBlock>
        <p>
          where the supremum is taken over all partitions <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="6.27 - Rectifiable Curve">
        <p>
          If <InlineMath>{'\\Lambda(\\gamma) < \\infty'}</InlineMath>, we say that <InlineMath>{'\\gamma'}</InlineMath> is <em>rectifiable</em>.
          Otherwise, the curve has infinite length.
        </p>
      </Definition>

      <Theorem
        title="6.27 - Arc Length Formula"
        proof={
          <>
            <p className="mb-3">
              Write <InlineMath>{'\\gamma(t) = (\\gamma_1(t), \\ldots, \\gamma_k(t))'}</InlineMath>.
              For any partition <InlineMath>{'P'}</InlineMath>:
            </p>
            <MathBlock>{'|\\gamma(t_i) - \\gamma(t_{i-1})| = \\sqrt{\\sum_{j=1}^{k} |\\gamma_j(t_i) - \\gamma_j(t_{i-1})|^2}'}</MathBlock>
            <p className="mb-3">
              By the Mean Value Theorem, <InlineMath>{'\\gamma_j(t_i) - \\gamma_j(t_{i-1}) = \\gamma_j\'(s_{ij})(t_i - t_{i-1})'}</InlineMath> for some <InlineMath>{'s_{ij}'}</InlineMath>.
            </p>
            <p className="mb-3">
              For continuously differentiable curves, as the mesh of <InlineMath>{'P'}</InlineMath> approaches zero,
              the Riemann sums converge to the integral.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\gamma\''}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'\\gamma'}</InlineMath> is rectifiable, and
        </p>
        <MathBlock>{'\\Lambda(\\gamma) = \\int_a^b |\\gamma\'(t)| \\, dt'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Arc Length Element">
        <p className="mb-3">
          In differential notation, if <InlineMath>{'\\gamma(t) = (x(t), y(t))'}</InlineMath> in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>, then
        </p>
        <MathBlock>{'ds = |\\gamma\'(t)| \\, dt = \\sqrt{x\'(t)^2 + y\'(t)^2} \\, dt'}</MathBlock>
        <p>
          This is often written as <InlineMath>{'ds = \\sqrt{dx^2 + dy^2}'}</InlineMath>.
        </p>
      </Callout>

      <Example title="Length of a Circle">
        <p className="mb-3">
          Consider the unit circle <InlineMath>{'\\gamma(t) = (\\cos t, \\sin t)'}</InlineMath> for <InlineMath>{'t \\in [0, 2\\pi]'}</InlineMath>.
        </p>
        <MathBlock>{'\\gamma\'(t) = (-\\sin t, \\cos t)'}</MathBlock>
        <MathBlock>{'|\\gamma\'(t)| = \\sqrt{\\sin^2 t + \\cos^2 t} = 1'}</MathBlock>
        <p className="mb-3">
          Therefore:
        </p>
        <MathBlock>{'\\Lambda(\\gamma) = \\int_0^{2\\pi} 1 \\, dt = 2\\pi'}</MathBlock>
        <p>
          As expected, the circumference of the unit circle is <InlineMath>{'2\\pi'}</InlineMath>.
        </p>
      </Example>

      <Example title="Length of a Helix">
        <p className="mb-3">
          Consider the helix <InlineMath>{'\\gamma(t) = (a\\cos t, a\\sin t, bt)'}</InlineMath> for <InlineMath>{'t \\in [0, 2\\pi]'}</InlineMath>.
        </p>
        <MathBlock>{'\\gamma\'(t) = (-a\\sin t, a\\cos t, b)'}</MathBlock>
        <MathBlock>{'|\\gamma\'(t)| = \\sqrt{a^2\\sin^2 t + a^2\\cos^2 t + b^2} = \\sqrt{a^2 + b^2}'}</MathBlock>
        <p className="mb-3">
          Therefore:
        </p>
        <MathBlock>{'\\Lambda(\\gamma) = \\int_0^{2\\pi} \\sqrt{a^2 + b^2} \\, dt = 2\\pi\\sqrt{a^2 + b^2}'}</MathBlock>
      </Example>

      <Definition title="6.28 - Bounded Variation">
        <p className="mb-3">
          A real-valued function <InlineMath>{'f'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath> is said to be of <em>bounded variation</em> if
        </p>
        <MathBlock>{'V_a^b(f) = \\sup_P \\sum_{i=1}^{n} |f(t_i) - f(t_{i-1})| < \\infty'}</MathBlock>
        <p>
          where the supremum is over all partitions of <InlineMath>{'[a, b]'}</InlineMath>.
          <InlineMath>{'V_a^b(f)'}</InlineMath> is called the <em>total variation</em> of <InlineMath>{'f'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Characterization of Bounded Variation">
        <p className="mb-3">
          A curve <InlineMath>{'\\gamma: [a, b] \\to \\mathbb{R}^k'}</InlineMath> is rectifiable if and only if
          each component function <InlineMath>{'\\gamma_j'}</InlineMath> is of bounded variation.
        </p>
        <p>
          Every monotonic function and every function with continuous derivative is of bounded variation.
        </p>
      </Theorem>

      <Example title="A Non-Rectifiable Curve">
        <p className="mb-3">
          Consider the curve <InlineMath>{'\\gamma(t) = (t, \\sin(1/t))'}</InlineMath> for <InlineMath>{'t \\in (0, 1]'}</InlineMath>,
          extended to <InlineMath>{'\\gamma(0) = (0, 0)'}</InlineMath>.
        </p>
        <p className="mb-3">
          This curve oscillates infinitely many times near <InlineMath>{'t = 0'}</InlineMath>.
          Its <InlineMath>{'y'}</InlineMath>-component <InlineMath>{'\\sin(1/t)'}</InlineMath> is not of bounded variation
          on <InlineMath>{'[0, 1]'}</InlineMath>, so the curve is not rectifiable.
        </p>
        <p>
          The curve has infinite length even though it is contained in a bounded region.
        </p>
      </Example>

      <Callout type="warning" title="Arc Length Parameterization">
        <p className="mb-3">
          Given a rectifiable curve <InlineMath>{'\\gamma: [a, b] \\to \\mathbb{R}^k'}</InlineMath>, we can define the <em>arc length function</em>:
        </p>
        <MathBlock>{'s(t) = \\Lambda(\\gamma|_{[a,t]}) = \\int_a^t |\\gamma\'(u)| \\, du'}</MathBlock>
        <p>
          If <InlineMath>{'|\\gamma\'| > 0'}</InlineMath>, we can reparametrize the curve by arc length,
          obtaining a new curve with <InlineMath>{'|d\\gamma/ds| = 1'}</InlineMath> everywhere.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Arc length is the supremum of polygonal approximation lengths</li>
        <li>A curve is rectifiable if it has finite length</li>
        <li>For <InlineMath>{'C^1'}</InlineMath> curves: <InlineMath>{'\\Lambda(\\gamma) = \\int_a^b |\\gamma\'(t)| \\, dt'}</InlineMath></li>
        <li>In 2D: <InlineMath>{'ds = \\sqrt{x\'(t)^2 + y\'(t)^2} \\, dt'}</InlineMath></li>
        <li>Rectifiability is equivalent to bounded variation of components</li>
        <li>Monotonic and continuously differentiable functions have bounded variation</li>
        <li>Some continuous curves have infinite length (not rectifiable)</li>
      </ul>
    </LessonLayout>
  );
}
