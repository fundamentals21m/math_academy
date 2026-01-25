import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section114() {
  return (
    <LessonLayout sectionId={114}>
      <h2>Partitions of Rectangles and Step Functions</h2>

      <p>
        To define the double integral, we first need to understand partitions of
        rectangles and step functions on rectangles.
      </p>

      <h3>Partitions of a Rectangle</h3>

      <p>
        Let <InlineMath>{'Q = [a, b] \\times [c, d]'}</InlineMath> be a rectangle.
        Consider two partitions <InlineMath>{'P_1'}</InlineMath> and{' '}
        <InlineMath>{'P_2'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath> and{' '}
        <InlineMath>{'[c, d]'}</InlineMath>, respectively:
      </p>
      <MathBlock>{`P_1 = \\{x_0, x_1, \\ldots, x_{n-1}, x_n\\} \\quad \\text{where} \\quad x_0 = a, \\; x_n = b`}</MathBlock>
      <MathBlock>{`P_2 = \\{y_0, y_1, \\ldots, y_{m-1}, y_m\\} \\quad \\text{where} \\quad y_0 = c, \\; y_m = d`}</MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> The Cartesian product{' '}
        <InlineMath>{'P = P_1 \\times P_2'}</InlineMath> is called a{' '}
        <strong>partition of <InlineMath>{'Q'}</InlineMath></strong>. Since{' '}
        <InlineMath>{'P_1'}</InlineMath> decomposes <InlineMath>{'[a, b]'}</InlineMath> into{' '}
        <InlineMath>{'n'}</InlineMath> subintervals and <InlineMath>{'P_2'}</InlineMath>{' '}
        decomposes <InlineMath>{'[c, d]'}</InlineMath> into <InlineMath>{'m'}</InlineMath>{' '}
        subintervals, the partition <InlineMath>{'P'}</InlineMath> decomposes{' '}
        <InlineMath>{'Q'}</InlineMath> into <InlineMath>{'mn'}</InlineMath> subrectangles.
      </Callout>

      <p>
        A partition <InlineMath>{"P'"}</InlineMath> of <InlineMath>{'Q'}</InlineMath> is said
        to be <strong>finer</strong> than <InlineMath>{'P'}</InlineMath> if{' '}
        <InlineMath>{"P \\subseteq P'"}</InlineMath>, that is, if every point in{' '}
        <InlineMath>{'P'}</InlineMath> is also in <InlineMath>{"P'"}</InlineMath>.
      </p>

      <h3>Open Subrectangles</h3>

      <p>
        The Cartesian product of two open subintervals of <InlineMath>{'P_1'}</InlineMath>{' '}
        and <InlineMath>{'P_2'}</InlineMath> is a subrectangle with its edges missing.
        This is called an <strong>open subrectangle</strong> of <InlineMath>{'P'}</InlineMath>{' '}
        or of <InlineMath>{'Q'}</InlineMath>.
      </p>

      <h3>Step Functions on a Rectangle</h3>

      <Callout type="info">
        <strong>Definition:</strong> A function <InlineMath>{'f'}</InlineMath> defined on
        a rectangle <InlineMath>{'Q'}</InlineMath> is said to be a{' '}
        <strong>step function</strong> if a partition <InlineMath>{'P'}</InlineMath> of{' '}
        <InlineMath>{'Q'}</InlineMath> exists such that <InlineMath>{'f'}</InlineMath> is
        constant on each of the open subrectangles of <InlineMath>{'P'}</InlineMath>.
      </Callout>

      <p>
        The graph of a step function consists mostly of horizontal rectangular patches.
        A step function also has well-defined values at each of the boundary points of
        the subrectangles, but the actual values at these points are not relevant to
        integration theory.
      </p>

      <h3>Linear Space of Step Functions</h3>

      <p>
        If <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are two step
        functions defined on a given rectangle <InlineMath>{'Q'}</InlineMath>, then the
        linear combination <InlineMath>{'c_1 f + c_2 g'}</InlineMath> is also a step
        function.
      </p>

      <p>
        In fact, if <InlineMath>{'P'}</InlineMath> and <InlineMath>{"P'"}</InlineMath> are
        partitions of <InlineMath>{'Q'}</InlineMath> such that <InlineMath>{'f'}</InlineMath>{' '}
        is constant on the open subrectangles of <InlineMath>{'P'}</InlineMath> and{' '}
        <InlineMath>{'g'}</InlineMath> is constant on the open subrectangles of{' '}
        <InlineMath>{"P'"}</InlineMath>, then <InlineMath>{'c_1 f + c_2 g'}</InlineMath>{' '}
        is constant on the open subrectangles of the union{' '}
        <InlineMath>{"P \\cup P'"}</InlineMath> (a <strong>common refinement</strong>{' '}
        of <InlineMath>{'P'}</InlineMath> and <InlineMath>{"P'"}</InlineMath>).
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The set of step functions defined on a rectangle{' '}
        <InlineMath>{'Q'}</InlineMath> forms a <strong>linear space</strong>. This is
        analogous to the one-dimensional case, where step functions on an interval
        form a linear space. The definition of the double integral will first be given
        for step functions, then extended to more general functions.
      </Callout>
    </LessonLayout>
  );
}
