import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section102() {
  return (
    <LessonLayout sectionId={102}>
      <h2>Definition and Computation of Line Integrals</h2>

      <p>
        We now give the precise definition of a line integral and show how to
        compute it in practice.
      </p>

      <h3>Definition of Line Integral</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>\alpha</InlineMath> be a piecewise
        smooth path in <InlineMath>n</InlineMath>-space defined on an interval{' '}
        <InlineMath>[a, b]</InlineMath>, and let <InlineMath>f</InlineMath> be a vector
        field defined and bounded on the graph of <InlineMath>\alpha</InlineMath>. The{' '}
        <strong>line integral of <InlineMath>f</InlineMath> along{' '}
        <InlineMath>\alpha</InlineMath></strong> is denoted by{' '}
        <InlineMath>{`\\int f \\cdot d\\alpha`}</InlineMath> and is defined by:
        <MathBlock>
          \int f \cdot d\alpha = \int_a^b f[\alpha(t)] \cdot \alpha'(t) \, dt
        </MathBlock>
        whenever the integral on the right exists, either as a proper or improper integral.
      </Callout>

      <p>
        In most examples that occur in practice, the dot product{' '}
        <InlineMath>{`f[\\alpha(t)] \\cdot \\alpha'(t)`}</InlineMath> is bounded on{' '}
        <InlineMath>[a, b]</InlineMath> and continuous except possibly at a finite
        number of points, in which case the integral exists as a proper integral.
      </p>

      <h3>Alternative Notations</h3>

      <p>
        If <InlineMath>C</InlineMath> denotes the graph of <InlineMath>\alpha</InlineMath>,
        the line integral is also written as <InlineMath>{`\\int_C f \\cdot d\\alpha`}</InlineMath>{' '}
        and is called the <strong>integral of <InlineMath>f</InlineMath> along{' '}
        <InlineMath>C</InlineMath></strong>.
      </p>

      <p>
        If <InlineMath>{`\\mathbf{a} = \\alpha(a)`}</InlineMath> and{' '}
        <InlineMath>{`\\mathbf{b} = \\alpha(b)`}</InlineMath> denote the end points of{' '}
        <InlineMath>C</InlineMath>, the line integral is sometimes written as{' '}
        <InlineMath>{`\\int_{\\mathbf{a}}^{\\mathbf{b}} f \\cdot d\\alpha`}</InlineMath>.
        When this notation is used, remember that the integral depends not only on the
        end points but also on the path joining them.
      </p>

      <p>
        When <InlineMath>{`\\mathbf{a} = \\mathbf{b}`}</InlineMath>, the path is said
        to be <strong>closed</strong>. The symbol <InlineMath>\oint</InlineMath> is
        often used to indicate integration along a closed path.
      </p>

      <h3>Component Form</h3>

      <p>
        When <InlineMath>f</InlineMath> and <InlineMath>\alpha</InlineMath> are
        expressed in terms of their components:
      </p>
      <MathBlock>{`f = (f_1, \\ldots, f_n) \\quad \\text{and} \\quad \\alpha = (\\alpha_1, \\ldots, \\alpha_n)`}</MathBlock>

      <p>
        the integral becomes a sum of integrals:
      </p>
      <MathBlock>{`\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha'_k(t) \\, dt`}</MathBlock>

      <p>
        This is also written as{' '}
        <InlineMath>{`\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n`}</InlineMath>.
      </p>

      <h3>Two-Dimensional Case</h3>

      <p>
        In the two-dimensional case, the path is usually described by parametric
        equations <InlineMath>{`x = \\alpha_1(t)`}</InlineMath>,{' '}
        <InlineMath>{`y = \\alpha_2(t)`}</InlineMath>, and the line integral is written:
      </p>
      <MathBlock>{`\\int_C f_1 \\, dx + f_2 \\, dy \\quad \\text{or} \\quad \\int_C f_1(x,y) \\, dx + f_2(x,y) \\, dy`}</MathBlock>

      <h3>Three-Dimensional Case</h3>

      <p>
        In three dimensions with <InlineMath>{`x = \\alpha_1(t)`}</InlineMath>,{' '}
        <InlineMath>{`y = \\alpha_2(t)`}</InlineMath>,{' '}
        <InlineMath>{`z = \\alpha_3(t)`}</InlineMath>:
      </p>
      <MathBlock>
        \int_C f_1 \, dx + f_2 \, dy + f_3 \, dz
      </MathBlock>

      <h3>Example</h3>

      <p>
        Let <InlineMath>{`f(x, y) = \\sqrt{y} \\, \\mathbf{i} + (x^3 + y) \\mathbf{j}`}</InlineMath>{' '}
        for all <InlineMath>(x, y)</InlineMath> with <InlineMath>{`y \\geq 0`}</InlineMath>.
        Calculate the line integral of <InlineMath>f</InlineMath> from{' '}
        <InlineMath>(0, 0)</InlineMath> to <InlineMath>(1, 1)</InlineMath> along:
      </p>
      <ol>
        <li>
          The line <InlineMath>{`x = t, y = t`}</InlineMath> for{' '}
          <InlineMath>{`0 \\leq t \\leq 1`}</InlineMath>
        </li>
        <li>
          The path <InlineMath>{`x = t^2, y = t^3`}</InlineMath> for{' '}
          <InlineMath>{`0 \\leq t \\leq 1`}</InlineMath>
        </li>
      </ol>

      <p>
        <strong>Solution (a):</strong> Take{' '}
        <InlineMath>{`\\alpha(t) = t\\mathbf{i} + t\\mathbf{j}`}</InlineMath>. Then{' '}
        <InlineMath>{`\\alpha'(t) = \\mathbf{i} + \\mathbf{j}`}</InlineMath> and{' '}
        <InlineMath>{`f[\\alpha(t)] = \\sqrt{t}\\mathbf{i} + (t^3 + t)\\mathbf{j}`}</InlineMath>.
      </p>
      <MathBlock>{`\\int f \\cdot d\\alpha = \\int_0^1 (\\sqrt{t} + t^3 + t) \\, dt = \\frac{17}{12}`}</MathBlock>

      <p>
        <strong>Solution (b):</strong> Take{' '}
        <InlineMath>{`\\alpha(t) = t^2\\mathbf{i} + t^3\\mathbf{j}`}</InlineMath>. Then{' '}
        <InlineMath>{`\\alpha'(t) = 2t\\mathbf{i} + 3t^2\\mathbf{j}`}</InlineMath>.
      </p>
      <MathBlock>{`\\int f \\cdot d\\alpha = \\int_0^1 (2t^{5/2} + 3t^8 + 3t^5) \\, dt = \\frac{59}{42}`}</MathBlock>

      <Callout type="warning">
        <strong>Important:</strong> This example shows that the integral from one point
        to another <strong>may depend on the path</strong> joining the two points.
        The values <InlineMath>17/12</InlineMath> and <InlineMath>59/42</InlineMath>{' '}
        are different!
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The value of a line integral generally depends on
        the path, not just the endpoints. However, the value is independent of the
        parametric representation used to describe the path—using a different
        parametrization of the same curve gives the same integral.
      </Callout>
    </LessonLayout>
  );
}
