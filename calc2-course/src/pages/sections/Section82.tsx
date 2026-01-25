import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <h2>Directional Derivatives and Continuity</h2>

      <p>
        In one-dimensional calculus, the existence of a derivative at a point
        implies continuity at that point. A natural question is whether this
        extends to higher dimensions: does the existence of directional
        derivatives imply continuity?
      </p>

      <h3>The One-Dimensional Argument</h3>

      <p>
        Recall the one-dimensional proof: if <InlineMath>f'(a)</InlineMath>{' '}
        exists, then for <InlineMath>{`h \\neq 0`}</InlineMath>:
      </p>
      <MathBlock>{`f(a + h) - f(a) = \\frac{f(a+h) - f(a)}{h} \\cdot h`}</MathBlock>
      <p>
        As <InlineMath>h \to 0</InlineMath>, the right side tends to{' '}
        <InlineMath>f'(a) \cdot 0 = 0</InlineMath>, so{' '}
        <InlineMath>f(a + h) \to f(a)</InlineMath>.
      </p>

      <h3>Extension to Higher Dimensions</h3>

      <p>
        Applying the same argument to scalar fields: if{' '}
        <InlineMath>f'(a; y)</InlineMath> exists for some{' '}
        <InlineMath>y</InlineMath>, then:
      </p>
      <MathBlock>{`f(a + hy) - f(a) = \\frac{f(a+hy) - f(a)}{h} \\cdot h \\to f'(a; y) \\cdot 0 = 0`}</MathBlock>
      <p>
        This means <InlineMath>f(x) \to f(a)</InlineMath> as{' '}
        <InlineMath>x \to a</InlineMath> <strong>along the line</strong> in
        direction <InlineMath>y</InlineMath>.
      </p>

      <p>
        If <InlineMath>f'(a; y)</InlineMath> exists for every direction{' '}
        <InlineMath>y</InlineMath>, then <InlineMath>f(x) \to f(a)</InlineMath>{' '}
        along every straight line through <InlineMath>a</InlineMath>. This
        seems to suggest continuity...
      </p>

      <h3>A Counterexample</h3>

      <Callout type="warning">
        <strong>Surprising Fact:</strong> The existence of all directional
        derivatives at a point does <strong>not</strong> imply continuity at
        that point!
      </Callout>

      <p>
        <strong>Example:</strong> Define{' '}
        <InlineMath>{`f: \\mathbb{R}^2 \\to \\mathbb{R}`}</InlineMath> by:
      </p>
      <MathBlock>{`f(x, y) = \\frac{xy^2}{x^2 + y^4} \\text{ if } x \\neq 0, \\quad f(0, y) = 0`}</MathBlock>

      <p>
        <strong>Claim:</strong> <InlineMath>f'(0; y)</InlineMath> exists for
        every direction <InlineMath>y</InlineMath>, but{' '}
        <InlineMath>f</InlineMath> is not continuous at <InlineMath>0</InlineMath>.
      </p>

      <p>
        <strong>Proof:</strong> Let <InlineMath>a = (0, 0)</InlineMath> and{' '}
        <InlineMath>y = (a, b)</InlineMath>.
      </p>

      <p>
        If <InlineMath>{`a \\neq 0`}</InlineMath> and{' '}
        <InlineMath>{`h \\neq 0`}</InlineMath>:
      </p>
      <MathBlock>{`\\frac{f(a + hy) - f(a)}{h} = \\frac{f(ha, hb)}{h} = \\frac{ab^2}{a^2 + h^2b^4}`}</MathBlock>
      <p>
        Letting <InlineMath>h \to 0</InlineMath>:{' '}
        <InlineMath>f'(0; y) = b^2/a</InlineMath>.
      </p>

      <p>
        If <InlineMath>y = (0, b)</InlineMath>, a similar calculation gives{' '}
        <InlineMath>f'(0; y) = 0</InlineMath>.
      </p>

      <p>
        So <InlineMath>f'(0; y)</InlineMath> exists for all directions.
        Also, <InlineMath>f(x) \to 0</InlineMath> along any straight line
        through the origin.
      </p>

      <p>
        <strong>However:</strong> On the parabola{' '}
        <InlineMath>x = y^2</InlineMath> (except at the origin), we have:
      </p>
      <MathBlock>{`f(y^2, y) = \\frac{y^2 \\cdot y^2}{y^4 + y^4} = \\frac{1}{2}`}</MathBlock>
      <p>
        Since points on this parabola exist arbitrarily close to the origin
        but <InlineMath>f(0, 0) = 0</InlineMath>, the function is{' '}
        <strong>not continuous</strong> at the origin.
      </p>

      <h3>The Need for a Better Definition</h3>

      <p>
        The counterexample shows that directional derivatives alone are
        insufficient for extending one-dimensional derivative theory. We need
        a stronger concept: the <strong>total derivative</strong>, which
        implies continuity and enables proper generalizations of theorems.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Continuity along every straight line
        through a point is not the same as continuity at that point! A function
        can behave nicely along all lines yet be discontinuous because of
        behavior along curved paths. This is why we need the total derivative,
        which captures the full local behavior of a function.
      </Callout>
    </LessonLayout>
  );
}
