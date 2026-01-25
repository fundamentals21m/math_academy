import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h2>The Derivative of a Scalar Field with Respect to a Vector</h2>

      <p>
        We now introduce derivatives of scalar fields. The key idea is to
        examine how the field changes as we move from a point{' '}
        <InlineMath>a</InlineMath> in a specified direction <InlineMath>y</InlineMath>.
      </p>

      <h3>Motivation</h3>

      <p>
        Suppose <InlineMath>f(a)</InlineMath> represents temperature at point{' '}
        <InlineMath>a</InlineMath> in a heated room. The rate of change of
        temperature depends on the direction we move: toward the window
        (temperature decreases) or toward the heater (temperature increases).
      </p>

      <p>
        We specify direction by a vector <InlineMath>y</InlineMath> and examine
        points on the line segment from <InlineMath>a</InlineMath> to{' '}
        <InlineMath>a + y</InlineMath>. Each point has the form{' '}
        <InlineMath>a + hy</InlineMath> where <InlineMath>h</InlineMath> is real.
      </p>

      <h3>The Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{`f: S \\to \\mathbb{R}`}</InlineMath> where{' '}
        <InlineMath>{`S \\subseteq \\mathbb{R}^n`}</InlineMath>. Let{' '}
        <InlineMath>a</InlineMath> be an interior point of <InlineMath>S</InlineMath>{' '}
        and let <InlineMath>y</InlineMath> be any vector in{' '}
        <InlineMath>{`\\mathbb{R}^n`}</InlineMath>. The{' '}
        <strong>derivative of f at a with respect to y</strong> is:
        <MathBlock>{`f'(a; y) = \\lim_{h \\to 0} \\frac{f(a + hy) - f(a)}{h}`}</MathBlock>
        when this limit exists.
      </Callout>

      <p>
        The difference quotient <InlineMath>(f(a + hy) - f(a))/h</InlineMath>{' '}
        represents the average rate of change of <InlineMath>f</InlineMath> over
        the segment from <InlineMath>a</InlineMath> to <InlineMath>a + hy</InlineMath>.
      </p>

      <h3>Basic Examples</h3>

      <p>
        <strong>Zero direction:</strong> If <InlineMath>y = 0</InlineMath>, the
        difference quotient is 0 for all <InlineMath>{`h \\neq 0`}</InlineMath>,
        so <InlineMath>f'(a; 0) = 0</InlineMath> always exists.
      </p>

      <p>
        <strong>Linear transformations:</strong> If{' '}
        <InlineMath>{`f: S \\to \\mathbb{R}`}</InlineMath> is linear, then{' '}
        <InlineMath>f(a + hy) = f(a) + hf(y)</InlineMath>, so{' '}
        <InlineMath>f'(a; y) = f(y)</InlineMath> for all <InlineMath>a</InlineMath>{' '}
        and <InlineMath>y</InlineMath>.
      </p>

      <h3>Relation to One-Dimensional Derivatives</h3>

      <Callout type="info">
        <strong>Theorem 8.3:</strong> Let <InlineMath>g(t) = f(a + ty)</InlineMath>.
        If one of the derivatives <InlineMath>g'(t)</InlineMath> or{' '}
        <InlineMath>f'(a + ty; y)</InlineMath> exists, then the other also
        exists and they are equal:
        <MathBlock>
          g'(t) = f'(a + ty; y)
        </MathBlock>
        In particular, <InlineMath>g'(0) = f'(a; y)</InlineMath>.
      </Callout>

      <p>
        This theorem allows us to compute <InlineMath>f'(a; y)</InlineMath> by
        reducing to a one-dimensional derivative problem.
      </p>

      <h3>Example Computation</h3>

      <p>
        Compute <InlineMath>f'(a; y)</InlineMath> for{' '}
        <InlineMath>{`f(x) = \\|x\\|^2`}</InlineMath> in{' '}
        <InlineMath>{`\\mathbb{R}^n`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> Let{' '}
        <InlineMath>{`g(t) = f(a + ty) = (a + ty) \\cdot (a + ty)`}</InlineMath>.
        Expanding:
      </p>
      <MathBlock>
        g(t) = a \cdot a + 2t \cdot a \cdot y + t^2 \cdot y \cdot y
      </MathBlock>
      <p>
        Therefore <InlineMath>g'(t) = 2a \cdot y + 2ty \cdot y</InlineMath>, so:
      </p>
      <MathBlock>
        f'(a; y) = g'(0) = 2a \cdot y
      </MathBlock>

      <h3>Mean-Value Theorem</h3>

      <Callout type="info">
        <strong>Theorem 8.4 (Mean-Value Theorem):</strong> Assume{' '}
        <InlineMath>f'(a + ty; y)</InlineMath> exists for each{' '}
        <InlineMath>{`t \\in [0, 1]`}</InlineMath>. Then for some{' '}
        <InlineMath>\theta</InlineMath> with{' '}
        <InlineMath>{`0 < \\theta < 1`}</InlineMath>:
        <MathBlock>{`f(a + y) - f(a) = f'(z; y), \\quad \\text{where } z = a + \\theta y`}</MathBlock>
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The derivative <InlineMath>f'(a; y)</InlineMath>{' '}
        measures how <InlineMath>f</InlineMath> changes at <InlineMath>a</InlineMath>{' '}
        in the direction of <InlineMath>y</InlineMath>. Theorem 8.3 connects
        this to one-dimensional calculus: derivatives along a line in{' '}
        <InlineMath>{`\\mathbb{R}^n`}</InlineMath> reduce to ordinary derivatives
        of a function of one variable.
      </Callout>
    </LessonLayout>
  );
}
