import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h1>Pointwise Convergence</h1>

      <p>
        We have studied sequences of numbers and their convergence. Now we extend these ideas
        to <strong>sequences of functions</strong>. Given a sequence of
        functions <MathInline>{`f_1, f_2, f_3, \\ldots`}</MathInline>, we want to understand in what
        sense they might converge to a limiting function <MathInline>{`f`}</MathInline>.
      </p>

      <h2>Definition of Pointwise Convergence</h2>

      <p>
        The most natural notion of convergence for functions is to require convergence at each
        individual point.
      </p>

      <Callout type="definition" title="Pointwise Convergence">
        <p>
          Let <MathInline>{`\\{f_n\\}`}</MathInline> be a sequence of functions defined on a set <MathInline>{`S`}</MathInline>.
          We say that <MathInline>{`\\{f_n\\}`}</MathInline> <strong>converges pointwise</strong> to a
          function <MathInline>{`f`}</MathInline> on <MathInline>{`S`}</MathInline> if, for each <MathInline>{`x \\in S`}</MathInline>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} f_n(x) = f(x)`}</MathBlock>
        <p>
          Equivalently, for each <MathInline>{`x \\in S`}</MathInline> and each <MathInline>{`\\varepsilon > 0`}</MathInline>,
          there exists <MathInline>{`N`}</MathInline> (which may depend on both <MathInline>{`x`}</MathInline> and <MathInline>{`\\varepsilon`}</MathInline>)
          such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon`}</MathBlock>
        <p>We write <MathInline>{`f_n \\to f`}</MathInline> pointwise on <MathInline>{`S`}</MathInline>.</p>
      </Callout>

      <p>
        The key feature of pointwise convergence is that <MathInline>{`N`}</MathInline> can depend on
        the point <MathInline>{`x`}</MathInline>. For some points, convergence might be fast; for others, slow.
      </p>

      <h2>Examples of Pointwise Convergence</h2>

      <Callout type="example" title="Power Functions">
        <p>
          Let <MathInline>{`f_n(x) = x^n`}</MathInline> on <MathInline>{`[0, 1]`}</MathInline>. Find the pointwise limit.
        </p>
        <p><strong>Solution:</strong> For each fixed <MathInline>{`x \\in [0, 1]`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`0 \\leq x < 1`}</MathInline>: <MathInline>{`\\lim_{n \\to \\infty} x^n = 0`}</MathInline></li>
          <li>If <MathInline>{`x = 1`}</MathInline>: <MathInline>{`\\lim_{n \\to \\infty} 1^n = 1`}</MathInline></li>
        </ul>
        <p>Therefore, <MathInline>{`f_n \\to f`}</MathInline> pointwise, where:</p>
        <MathBlock>{`f(x) = \\begin{cases} 0 & \\text{if } 0 \\leq x < 1 \\ 1 & \\text{if } x = 1 \\end{cases}`}</MathBlock>
      </Callout>

      <p>
        This example is striking: each <MathInline>{`f_n(x) = x^n`}</MathInline> is continuous
        on <MathInline>{`[0, 1]`}</MathInline>, yet the limit function <MathInline>{`f`}</MathInline> is
        discontinuous at <MathInline>{`x = 1`}</MathInline>. Pointwise convergence does not preserve continuity!
      </p>

      <Callout type="example" title="Shrinking Bumps">
        <p>
          Let <MathInline>{`f_n(x) = n^2 x e^{-nx}`}</MathInline> on <MathInline>{`[0, \\infty)`}</MathInline>.
          Find the pointwise limit.
        </p>
        <p><strong>Solution:</strong> For each fixed <MathInline>{`x > 0`}</MathInline>:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} n^2 x e^{-nx} = x \\lim_{n \\to \\infty} \\frac{n^2}{e^{nx}} = 0`}</MathBlock>
        <p>
          (The exponential grows faster than any polynomial.) At <MathInline>{`x = 0`}</MathInline>,
          we have <MathInline>{`f_n(0) = 0`}</MathInline> for all <MathInline>{`n`}</MathInline>.
        </p>
        <p>So <MathInline>{`f_n \\to 0`}</MathInline> pointwise on <MathInline>{`[0, \\infty)`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Moving Peaks">
        <p>
          Let <MathInline>{`f_n(x) = nx(1-x)^n`}</MathInline> on <MathInline>{`[0, 1]`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>At <MathInline>{`x = 0`}</MathInline>: <MathInline>{`f_n(0) = 0`}</MathInline> for all <MathInline>{`n`}</MathInline></li>
          <li>At <MathInline>{`x = 1`}</MathInline>: <MathInline>{`f_n(1) = 0`}</MathInline> for all <MathInline>{`n`}</MathInline></li>
          <li>For <MathInline>{`0 < x < 1`}</MathInline>: <MathInline>{`(1-x)^n \\to 0`}</MathInline> faster than <MathInline>{`n \\to \\infty`}</MathInline></li>
        </ul>
        <p>So <MathInline>{`f_n \\to 0`}</MathInline> pointwise on <MathInline>{`[0, 1]`}</MathInline>.</p>
        <p>
          Yet each <MathInline>{`f_n`}</MathInline> has a maximum at <MathInline>{`x = 1/(n+1)`}</MathInline> with
          value <MathInline>{`f_n(1/(n+1)) \\to 1/e`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline>.
          The "bump" moves toward 0 but maintains its height.
        </p>
      </Callout>

      <h2>Pointwise Convergence and Continuity</h2>

      <p>
        As we saw with <MathInline>{`f_n(x) = x^n`}</MathInline>, the pointwise limit of continuous
        functions need not be continuous. Let's examine this more carefully.
      </p>

      <Callout type="example" title="Another Discontinuous Limit">
        <p>Define <MathInline>{`f_n`}</MathInline> on <MathInline>{`\\mathbb{R}`}</MathInline> by:</p>
        <MathBlock>{`f_n(x) = \\frac{1}{1 + x^{2n}}`}</MathBlock>
        <p>Each <MathInline>{`f_n`}</MathInline> is continuous. The pointwise limit is:</p>
        <MathBlock>{`f(x) = \\begin{cases} 1 & \\text{if } |x| < 1 \\ \\frac{1}{2} & \\text{if } |x| = 1 \\ 0 & \\text{if } |x| > 1 \\end{cases}`}</MathBlock>
        <p>
          This limit function is discontinuous at <MathInline>{`x = \\pm 1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Why Continuity Fails">
        <p>
          For pointwise convergence, at each point <MathInline>{`x`}</MathInline> we have a different
          rate of convergence. Near a point of discontinuity of <MathInline>{`f`}</MathInline>, convergence
          becomes arbitrarily slow. There is no single <MathInline>{`N`}</MathInline> that works for
          all <MathInline>{`x`}</MathInline> simultaneously.
        </p>
      </Callout>

      <h2>Pointwise Convergence and Integration</h2>

      <p>
        Does the integral of the limit equal the limit of the integrals? For pointwise convergence,
        the answer is generally <strong>no</strong>.
      </p>

      <Callout type="example" title="Failure of Interchanging Limit and Integral">
        <p>Consider <MathInline>{`f_n(x) = n^2 x e^{-nx}`}</MathInline> on <MathInline>{`[0, 1]`}</MathInline>.</p>
        <p>We showed <MathInline>{`f_n \\to 0`}</MathInline> pointwise, so:</p>
        <MathBlock>{`\\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx = \\int_0^1 0\\,dx = 0`}</MathBlock>
        <p>But computing the integral of <MathInline>{`f_n`}</MathInline> directly:</p>
        <MathBlock>{`\\int_0^1 n^2 x e^{-nx}\\,dx = \\left[-nxe^{-nx} - e^{-nx}\\right]_0^1 = 1 - (n+1)e^{-n}`}</MathBlock>
        <p>Taking the limit:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = \\lim_{n \\to \\infty} \\left(1 - (n+1)e^{-n}\\right) = 1`}</MathBlock>
        <p>Thus:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = 1 \\neq 0 = \\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx`}</MathBlock>
      </Callout>

      <p>
        The "bump" in each <MathInline>{`f_n`}</MathInline> maintains enough area (approaching 1) even
        though the function converges to 0 at every point.
      </p>

      <h2>Pointwise Convergence and Differentiation</h2>

      <p>
        Can we differentiate the limit by taking the limit of derivatives? Again, pointwise
        convergence is insufficient.
      </p>

      <Callout type="example" title="Failure of Interchanging Limit and Derivative">
        <p>Let <MathInline>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</MathInline> on <MathInline>{`\\mathbb{R}`}</MathInline>.</p>
        <p>Since <MathInline>{`|\\sin(nx)| \\leq 1`}</MathInline>, we have:</p>
        <MathBlock>{`\\left|\\frac{\\sin(nx)}{n}\\right| \\leq \\frac{1}{n} \\to 0`}</MathBlock>
        <p>So <MathInline>{`f_n \\to 0`}</MathInline> pointwise (in fact, uniformly). The limit function is <MathInline>{`f(x) = 0`}</MathInline>, which has <MathInline>{`f'(x) = 0`}</MathInline>.</p>
        <p>But the derivatives are:</p>
        <MathBlock>{`f_n'(x) = \\cos(nx)`}</MathBlock>
        <p>
          These do not converge at all! At <MathInline>{`x = \\pi`}</MathInline>, for
          instance, <MathInline>{`f_n'(\\pi) = \\cos(n\\pi) = (-1)^n`}</MathInline>, which oscillates.
        </p>
      </Callout>

      <h2>Series of Functions</h2>

      <p>
        Just as we defined series of numbers as limits of partial sums, we can define series of functions.
      </p>

      <Callout type="definition" title="Pointwise Convergence of Series">
        <p>
          Let <MathInline>{`\\{u_n\\}`}</MathInline> be a sequence of functions on <MathInline>{`S`}</MathInline>.
          The series <MathInline>{`\\sum_{n=1}^\\infty u_n(x)`}</MathInline> <strong>converges pointwise</strong>
          to <MathInline>{`f(x)`}</MathInline> on <MathInline>{`S`}</MathInline> if the sequence of partial sums:
        </p>
        <MathBlock>{`s_n(x) = \\sum_{k=1}^n u_k(x)`}</MathBlock>
        <p>converges pointwise to <MathInline>{`f(x)`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>
          Consider <MathInline>{`\\sum_{n=0}^\\infty x^n`}</MathInline> on <MathInline>{`(-1, 1)`}</MathInline>.
        </p>
        <p>The partial sums are:</p>
        <MathBlock>{`s_n(x) = 1 + x + x^2 + \\cdots + x^n = \\frac{1 - x^{n+1}}{1 - x}`}</MathBlock>
        <p>
          For <MathInline>{`|x| < 1`}</MathInline>, we have <MathInline>{`x^{n+1} \\to 0`}</MathInline>,
          so <MathInline>{`s_n(x) \\to \\frac{1}{1-x}`}</MathInline>.
        </p>
        <p>The series converges pointwise to <MathInline>{`f(x) = \\frac{1}{1-x}`}</MathInline> on <MathInline>{`(-1, 1)`}</MathInline>.</p>
      </Callout>

      <h2>The Need for Uniform Convergence</h2>

      <p>
        The examples above show that pointwise convergence is too weak to guarantee that important
        properties pass from <MathInline>{`f_n`}</MathInline> to <MathInline>{`f`}</MathInline>:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Continuity</strong>: The limit of continuous functions may be discontinuous</li>
        <li><strong>Integration</strong>: <MathInline>{`\\lim \\int f_n`}</MathInline> may not equal <MathInline>{`\\int \\lim f_n`}</MathInline></li>
        <li><strong>Differentiation</strong>: <MathInline>{`\\lim f_n'`}</MathInline> may not equal <MathInline>{`(\\lim f_n)'`}</MathInline></li>
      </ul>

      <p>
        The root cause is that in pointwise convergence, the rate of convergence can vary wildly
        from point to point. A stronger notion—<strong>uniform convergence</strong>—will remedy
        these defects by requiring that convergence occur at the same rate across all points.
      </p>

      <Callout type="info" title="Preview: Uniform Convergence">
        <p>
          A sequence <MathInline>{`\\{f_n\\}`}</MathInline> converges <strong>uniformly</strong> to <MathInline>{`f`}</MathInline> if
          for each <MathInline>{`\\varepsilon > 0`}</MathInline>, there exists <MathInline>{`N`}</MathInline> (independent
          of <MathInline>{`x`}</MathInline>) such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon \\text{ for all } x \\in S`}</MathBlock>
        <p>
          Uniform convergence implies pointwise convergence, but not conversely. With uniform
          convergence, the "bad" examples above are ruled out.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>Pointwise convergence:</strong> <MathInline>{`f_n \\to f`}</MathInline> means <MathInline>{`\\lim_{n \\to \\infty} f_n(x) = f(x)`}</MathInline> for each fixed <MathInline>{`x`}</MathInline>.</p>
        <p><strong>The rate of convergence</strong> can depend on <MathInline>{`x`}</MathInline>.</p>
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
