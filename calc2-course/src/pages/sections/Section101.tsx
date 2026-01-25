import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section101() {
  return (
    <LessonLayout sectionId={101}>
      <h2>Introduction to Line Integrals</h2>

      <p>
        In Volume I we discussed the integral <InlineMath>{'\\int_a^b f(x) \\, dx'}</InlineMath>,
        first for real-valued functions defined and bounded on finite intervals, and then
        for unbounded functions and infinite intervals.
      </p>

      <p>
        This chapter extends the notion of integral in another direction. The interval{' '}
        <InlineMath>[a, b]</InlineMath> is replaced by a <strong>curve</strong> in{' '}
        <InlineMath>n</InlineMath>-space described by a vector-valued function{' '}
        <InlineMath>\alpha</InlineMath>, and the integrand is a <strong>vector field</strong>{' '}
        <InlineMath>f</InlineMath> defined and bounded on this curve.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The resulting integral is called a{' '}
        <strong>line integral</strong>, a <strong>curvilinear integral</strong>, or a{' '}
        <strong>contour integral</strong>, and is denoted by:
        <MathBlock>
          \int f \cdot d\alpha
        </MathBlock>
        The dot is used purposely to suggest an inner product of two vectors.
        The curve is called a <strong>path of integration</strong>.
      </Callout>

      <h3>Physical Significance</h3>

      <p>
        Line integrals are of fundamental importance in both pure and applied
        mathematics. They occur in connection with:
      </p>
      <ul>
        <li><strong>Work:</strong> Force acting along a path</li>
        <li><strong>Potential energy:</strong> Energy stored in a field</li>
        <li><strong>Heat flow:</strong> Transfer of thermal energy</li>
        <li><strong>Change in entropy:</strong> Thermodynamic processes</li>
        <li><strong>Circulation of a fluid:</strong> Flow around closed curves</li>
      </ul>

      <h3>Paths vs. Curves</h3>

      <p>
        Before defining line integrals, we recall the definition of curve. Let{' '}
        <InlineMath>\alpha</InlineMath> be a vector-valued function defined on a finite
        closed interval <InlineMath>{'J = [a, b]'}</InlineMath>. As{' '}
        <InlineMath>t</InlineMath> runs through <InlineMath>J</InlineMath>, the function
        values <InlineMath>\alpha(t)</InlineMath> trace out a set of points in{' '}
        <InlineMath>n</InlineMath>-space called the <strong>graph</strong> of the function.
      </p>

      <p>
        If <InlineMath>\alpha</InlineMath> is continuous on <InlineMath>J</InlineMath>,
        the graph is called a <strong>curve</strong>. Different functions can trace out
        the same curve in different ways—for example, in different directions or with
        different velocities.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'J = [a, b]'}</InlineMath> be a
        finite closed interval in <InlineMath>{'\\mathbb{R}^1'}</InlineMath>. A function{' '}
        <InlineMath>{'\alpha: J \\to \\mathbb{R}^n'}</InlineMath> which is continuous on{' '}
        <InlineMath>J</InlineMath> is called a <strong>continuous path</strong> in{' '}
        <InlineMath>n</InlineMath>-space.
        <br /><br />
        The path is called <strong>smooth</strong> if the derivative{' '}
        <InlineMath>\alpha'</InlineMath> exists and is continuous in the open interval{' '}
        <InlineMath>(a, b)</InlineMath>.
        <br /><br />
        The path is called <strong>piecewise smooth</strong> if the interval{' '}
        <InlineMath>[a, b]</InlineMath> can be partitioned into a finite number of
        subintervals in each of which the path is smooth.
      </Callout>

      <h3>Why Paths Matter</h3>

      <p>
        In the study of line integrals, we are concerned not only with the set of
        points on a curve but with the actual manner in which the curve is traced
        out—that is, with the function <InlineMath>\alpha</InlineMath> itself.
      </p>

      <p>
        A piecewise smooth path has a tangent line at all but a finite number of its
        points. These exceptional points subdivide the curve into arcs, along each of
        which the tangent line turns continuously.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Line integrals generalize ordinary integrals by
        replacing the interval <InlineMath>[a, b]</InlineMath> with a curve in space.
        The integrand becomes a vector field, and the integral captures how the field
        "pushes" along the curve. This is exactly what we need to compute work done by
        a force field.
      </Callout>
    </LessonLayout>
  );
}
