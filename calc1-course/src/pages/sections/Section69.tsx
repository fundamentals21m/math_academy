import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h1>Pointwise Convergence</h1>

      <p>
        We have studied sequences of numbers and their convergence. Now we extend these ideas
        to <strong>sequences of functions</strong>. Given a sequence of
        functions <InlineMath>{`f_1, f_2, f_3, \\ldots`}</InlineMath>, we want to understand in what
        sense they might converge to a limiting function <InlineMath>{`f`}</InlineMath>.
      </p>

      <h2>Definition of Pointwise Convergence</h2>

      <p>
        The most natural notion of convergence for functions is to require convergence at each
        individual point.
      </p>

      <Callout type="definition" title="Pointwise Convergence">
        <p>
          Let <InlineMath>{`\\{f_n\\}`}</InlineMath> be a sequence of functions defined on a set <InlineMath>{`S`}</InlineMath>.
          We say that <InlineMath>{`\\{f_n\\}`}</InlineMath> <strong>converges pointwise</strong> to a
          function <InlineMath>{`f`}</InlineMath> on <InlineMath>{`S`}</InlineMath> if, for each <InlineMath>{`x \\in S`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} f_n(x) = f(x)`}</MathBlock>
        <p>
          Equivalently, for each <InlineMath>{`x \\in S`}</InlineMath> and each <InlineMath>{`\\varepsilon > 0`}</InlineMath>,
          there exists <InlineMath>{`N`}</InlineMath> (which may depend on both <InlineMath>{`x`}</InlineMath> and <InlineMath>{`\\varepsilon`}</InlineMath>)
          such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon`}</MathBlock>
        <p>We write <InlineMath>{`f_n \\to f`}</InlineMath> pointwise on <InlineMath>{`S`}</InlineMath>.</p>
      </Callout>

      <p>
        The key feature of pointwise convergence is that <InlineMath>{`N`}</InlineMath> can depend on
        the point <InlineMath>{`x`}</InlineMath>. For some points, convergence might be fast; for others, slow.
      </p>

      <h2>Examples of Pointwise Convergence</h2>

      <Callout type="example" title="Power Functions">
        <p>
          Let <InlineMath>{`f_n(x) = x^n`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath>. Find the pointwise limit.
        </p>
        <p><strong>Solution:</strong> For each fixed <InlineMath>{`x \\in [0, 1]`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`0 \\leq x < 1`}</InlineMath>: <InlineMath>{`\\lim_{n \\to \\infty} x^n = 0`}</InlineMath></li>
          <li>If <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`\\lim_{n \\to \\infty} 1^n = 1`}</InlineMath></li>
        </ul>
        <p>Therefore, <InlineMath>{`f_n \\to f`}</InlineMath> pointwise, where:</p>
        <MathBlock>{`f(x) = \\begin{cases} 0 & \\text{if } 0 \\leq x < 1 \\ 1 & \\text{if } x = 1 \\end{cases}`}</MathBlock>
      </Callout>

      <p>
        This example is striking: each <InlineMath>{`f_n(x) = x^n`}</InlineMath> is continuous
        on <InlineMath>{`[0, 1]`}</InlineMath>, yet the limit function <InlineMath>{`f`}</InlineMath> is
        discontinuous at <InlineMath>{`x = 1`}</InlineMath>. Pointwise convergence does not preserve continuity!
      </p>

      <Callout type="example" title="Shrinking Bumps">
        <p>
          Let <InlineMath>{`f_n(x) = n^2 x e^{-nx}`}</InlineMath> on <InlineMath>{`[0, \\infty)`}</InlineMath>.
          Find the pointwise limit.
        </p>
        <p><strong>Solution:</strong> For each fixed <InlineMath>{`x > 0`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} n^2 x e^{-nx} = x \\lim_{n \\to \\infty} \\frac{n^2}{e^{nx}} = 0`}</MathBlock>
        <p>
          (The exponential grows faster than any polynomial.) At <InlineMath>{`x = 0`}</InlineMath>,
          we have <InlineMath>{`f_n(0) = 0`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>.
        </p>
        <p>So <InlineMath>{`f_n \\to 0`}</InlineMath> pointwise on <InlineMath>{`[0, \\infty)`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Moving Peaks">
        <p>
          Let <InlineMath>{`f_n(x) = nx(1-x)^n`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>At <InlineMath>{`x = 0`}</InlineMath>: <InlineMath>{`f_n(0) = 0`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li>At <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`f_n(1) = 0`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li>For <InlineMath>{`0 < x < 1`}</InlineMath>: <InlineMath>{`(1-x)^n \\to 0`}</InlineMath> faster than <InlineMath>{`n \\to \\infty`}</InlineMath></li>
        </ul>
        <p>So <InlineMath>{`f_n \\to 0`}</InlineMath> pointwise on <InlineMath>{`[0, 1]`}</InlineMath>.</p>
        <p>
          Yet each <InlineMath>{`f_n`}</InlineMath> has a maximum at <InlineMath>{`x = 1/(n+1)`}</InlineMath> with
          value <InlineMath>{`f_n(1/(n+1)) \\to 1/e`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>.
          The "bump" moves toward 0 but maintains its height.
        </p>
      </Callout>

      <h2>Pointwise Convergence and Continuity</h2>

      <p>
        As we saw with <InlineMath>{`f_n(x) = x^n`}</InlineMath>, the pointwise limit of continuous
        functions need not be continuous. Let's examine this more carefully.
      </p>

      <Callout type="example" title="Another Discontinuous Limit">
        <p>Define <InlineMath>{`f_n`}</InlineMath> on <InlineMath>{`\\mathbb{R}`}</InlineMath> by:</p>
        <MathBlock>{`f_n(x) = \\frac{1}{1 + x^{2n}}`}</MathBlock>
        <p>Each <InlineMath>{`f_n`}</InlineMath> is continuous. The pointwise limit is:</p>
        <MathBlock>{`f(x) = \\begin{cases} 1 & \\text{if } |x| < 1 \\ \\frac{1}{2} & \\text{if } |x| = 1 \\ 0 & \\text{if } |x| > 1 \\end{cases}`}</MathBlock>
        <p>
          This limit function is discontinuous at <InlineMath>{`x = \\pm 1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Why Continuity Fails">
        <p>
          For pointwise convergence, at each point <InlineMath>{`x`}</InlineMath> we have a different
          rate of convergence. Near a point of discontinuity of <InlineMath>{`f`}</InlineMath>, convergence
          becomes arbitrarily slow. There is no single <InlineMath>{`N`}</InlineMath> that works for
          all <InlineMath>{`x`}</InlineMath> simultaneously.
        </p>
      </Callout>

      <h2>Pointwise Convergence and Integration</h2>

      <p>
        Does the integral of the limit equal the limit of the integrals? For pointwise convergence,
        the answer is generally <strong>no</strong>.
      </p>

      <Callout type="example" title="Failure of Interchanging Limit and Integral">
        <p>Consider <InlineMath>{`f_n(x) = n^2 x e^{-nx}`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath>.</p>
        <p>We showed <InlineMath>{`f_n \\to 0`}</InlineMath> pointwise, so:</p>
        <MathBlock>{`\\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx = \\int_0^1 0\\,dx = 0`}</MathBlock>
        <p>But computing the integral of <InlineMath>{`f_n`}</InlineMath> directly:</p>
        <MathBlock>{`\\int_0^1 n^2 x e^{-nx}\\,dx = \\left[-nxe^{-nx} - e^{-nx}\\right]_0^1 = 1 - (n+1)e^{-n}`}</MathBlock>
        <p>Taking the limit:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = \\lim_{n \\to \\infty} \\left(1 - (n+1)e^{-n}\\right) = 1`}</MathBlock>
        <p>Thus:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = 1 \\neq 0 = \\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx`}</MathBlock>
      </Callout>

      <p>
        The "bump" in each <InlineMath>{`f_n`}</InlineMath> maintains enough area (approaching 1) even
        though the function converges to 0 at every point.
      </p>

      <h2>Pointwise Convergence and Differentiation</h2>

      <p>
        Can we differentiate the limit by taking the limit of derivatives? Again, pointwise
        convergence is insufficient.
      </p>

      <Callout type="example" title="Failure of Interchanging Limit and Derivative">
        <p>Let <InlineMath>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</InlineMath> on <InlineMath>{`\\mathbb{R}`}</InlineMath>.</p>
        <p>Since <InlineMath>{`|\\sin(nx)| \\leq 1`}</InlineMath>, we have:</p>
        <MathBlock>{`\\left|\\frac{\\sin(nx)}{n}\\right| \\leq \\frac{1}{n} \\to 0`}</MathBlock>
        <p>So <InlineMath>{`f_n \\to 0`}</InlineMath> pointwise (in fact, uniformly). The limit function is <InlineMath>{`f(x) = 0`}</InlineMath>, which has <InlineMath>{`f'(x) = 0`}</InlineMath>.</p>
        <p>But the derivatives are:</p>
        <MathBlock>{`f_n'(x) = \\cos(nx)`}</MathBlock>
        <p>
          These do not converge at all! At <InlineMath>{`x = \\pi`}</InlineMath>, for
          instance, <InlineMath>{`f_n'(\\pi) = \\cos(n\\pi) = (-1)^n`}</InlineMath>, which oscillates.
        </p>
      </Callout>

      <h2>Series of Functions</h2>

      <p>
        Just as we defined series of numbers as limits of partial sums, we can define series of functions.
      </p>

      <Callout type="definition" title="Pointwise Convergence of Series">
        <p>
          Let <InlineMath>{`\\{u_n\\}`}</InlineMath> be a sequence of functions on <InlineMath>{`S`}</InlineMath>.
          The series <InlineMath>{`\\sum_{n=1}^\\infty u_n(x)`}</InlineMath> <strong>converges pointwise</strong>
          to <InlineMath>{`f(x)`}</InlineMath> on <InlineMath>{`S`}</InlineMath> if the sequence of partial sums:
        </p>
        <MathBlock>{`s_n(x) = \\sum_{k=1}^n u_k(x)`}</MathBlock>
        <p>converges pointwise to <InlineMath>{`f(x)`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>
          Consider <InlineMath>{`\\sum_{n=0}^\\infty x^n`}</InlineMath> on <InlineMath>{`(-1, 1)`}</InlineMath>.
        </p>
        <p>The partial sums are:</p>
        <MathBlock>{`s_n(x) = 1 + x + x^2 + \\cdots + x^n = \\frac{1 - x^{n+1}}{1 - x}`}</MathBlock>
        <p>
          For <InlineMath>{`|x| < 1`}</InlineMath>, we have <InlineMath>{`x^{n+1} \\to 0`}</InlineMath>,
          so <InlineMath>{`s_n(x) \\to \\frac{1}{1-x}`}</InlineMath>.
        </p>
        <p>The series converges pointwise to <InlineMath>{`f(x) = \\frac{1}{1-x}`}</InlineMath> on <InlineMath>{`(-1, 1)`}</InlineMath>.</p>
      </Callout>

      <h2>The Need for Uniform Convergence</h2>

      <p>
        The examples above show that pointwise convergence is too weak to guarantee that important
        properties pass from <InlineMath>{`f_n`}</InlineMath> to <InlineMath>{`f`}</InlineMath>:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Continuity</strong>: The limit of continuous functions may be discontinuous</li>
        <li><strong>Integration</strong>: <InlineMath>{`\\lim \\int f_n`}</InlineMath> may not equal <InlineMath>{`\\int \\lim f_n`}</InlineMath></li>
        <li><strong>Differentiation</strong>: <InlineMath>{`\\lim f_n'`}</InlineMath> may not equal <InlineMath>{`(\\lim f_n)'`}</InlineMath></li>
      </ul>

      <p>
        The root cause is that in pointwise convergence, the rate of convergence can vary wildly
        from point to point. A stronger notion—<strong>uniform convergence</strong>—will remedy
        these defects by requiring that convergence occur at the same rate across all points.
      </p>

      <Callout type="info" title="Preview: Uniform Convergence">
        <p>
          A sequence <InlineMath>{`\\{f_n\\}`}</InlineMath> converges <strong>uniformly</strong> to <InlineMath>{`f`}</InlineMath> if
          for each <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists <InlineMath>{`N`}</InlineMath> (independent
          of <InlineMath>{`x`}</InlineMath>) such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon \\text{ for all } x \\in S`}</MathBlock>
        <p>
          Uniform convergence implies pointwise convergence, but not conversely. With uniform
          convergence, the "bad" examples above are ruled out.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>Pointwise convergence:</strong> <InlineMath>{`f_n \\to f`}</InlineMath> means <InlineMath>{`\\lim_{n \\to \\infty} f_n(x) = f(x)`}</InlineMath> for each fixed <InlineMath>{`x`}</InlineMath>.</p>
        <p><strong>The rate of convergence</strong> can depend on <InlineMath>{`x`}</InlineMath>.</p>
        <p><strong>Pointwise convergence does not preserve:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Continuity</li>
          <li>Interchangeability with integration</li>
          <li>Interchangeability with differentiation</li>
        </ul>
        <p><strong>Uniform convergence</strong> (next section) addresses these limitations.</p>
      </Callout>
    </LessonLayout>
  );
}
