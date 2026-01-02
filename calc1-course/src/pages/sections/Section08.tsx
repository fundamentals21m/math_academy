import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">Step Functions and Partitions</h2>

      <p className="text-dark-200 mb-6">
        To develop integration theory systematically, we start with the simplest functions
        whose integrals we can easily compute: <strong>step functions</strong>. These are
        functions that are constant on pieces of their domain. Understanding step functions
        requires the concept of a <strong>partition</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Partitions of an Interval</h2>

      <p className="text-dark-200 mb-4">
        A partition divides an interval into smaller subintervals:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Partition</p>
        <p className="mb-2">
          A <strong>partition</strong> <InlineMath>{'P'}</InlineMath> of a closed interval{' '}
          <InlineMath>{'[a, b]'}</InlineMath> is a finite collection of points
        </p>
        <MathBlock>{'P = \\{x_0, x_1, x_2, \\ldots, x_n\\}'}</MathBlock>
        <p className="mt-2">satisfying</p>
        <MathBlock>{'a = x_0 < x_1 < x_2 < \\cdots < x_{n-1} < x_n = b'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        The partition <InlineMath>{'P'}</InlineMath> determines <InlineMath>{'n'}</InlineMath>{' '}
        closed subintervals:
      </p>

      <MathBlock>{'[x_0, x_1], \\, [x_1, x_2], \\, \\ldots, \\, [x_{n-1}, x_n]'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The <InlineMath>{'k'}</InlineMath>th closed subinterval is{' '}
        <InlineMath>{'[x_{k-1}, x_k]'}</InlineMath>, and the corresponding open subinterval
        is <InlineMath>{'(x_{k-1}, x_k)'}</InlineMath>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: A Partition of [0, 4]</p>
        <p className="mb-2">
          The set <InlineMath>{'P = \\{0, 1, 2, 3, 4\\}'}</InlineMath> is a partition of{' '}
          <InlineMath>{'[0, 4]'}</InlineMath> into 4 subintervals:
        </p>
        <MathBlock>{'[0, 1], \\, [1, 2], \\, [2, 3], \\, [3, 4]'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Refinements</h2>

      <p className="text-dark-200 mb-4">
        We can create finer partitions by adding more subdivision points:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Refinement</p>
        <p>
          A partition <InlineMath>{"P'"}</InlineMath> is called a <strong>refinement</strong>{' '}
          of <InlineMath>{'P'}</InlineMath> (and is said to be <em>finer</em> than{' '}
          <InlineMath>{'P'}</InlineMath>) if <InlineMath>{"P'"}</InlineMath> contains all
          the points of <InlineMath>{'P'}</InlineMath> plus possibly additional points.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Refinement</p>
        <p>
          If <InlineMath>{'P = \\{0, 1, 2, 3, 4\\}'}</InlineMath>, then{' '}
          <InlineMath>{"P' = \\{0, \\frac{3}{4}, 1, \\sqrt{2}, 2, 3, \\frac{7}{2}, 4\\}"}</InlineMath>{' '}
          is a refinement of <InlineMath>{'P'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Step Functions</h2>

      <p className="text-dark-200 mb-4">
        Step functions are the simplest functions for which we can easily define integrals:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Step Function</p>
        <p className="mb-2">
          A function <InlineMath>{'s'}</InlineMath> whose domain is a closed interval{' '}
          <InlineMath>{'[a, b]'}</InlineMath> is called a <strong>step function</strong>{' '}
          if there exists a partition <InlineMath>{'P = \\{x_0, x_1, \\ldots, x_n\\}'}</InlineMath>{' '}
          of <InlineMath>{'[a, b]'}</InlineMath> such that <InlineMath>{'s'}</InlineMath> is
          constant on each open subinterval of <InlineMath>{'P'}</InlineMath>.
        </p>
        <p>
          That is, for each <InlineMath>{'k = 1, 2, \\ldots, n'}</InlineMath>, there is a
          constant <InlineMath>{'s_k'}</InlineMath> such that:
        </p>
        <MathBlock>{'s(x) = s_k \\quad \\text{if} \\quad x_{k-1} < x < x_k'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Step functions are also called <strong>piecewise constant functions</strong>.
        Note that at the endpoints <InlineMath>{'x_{k-1}'}</InlineMath> and{' '}
        <InlineMath>{'x_k'}</InlineMath>, the function must have some well-defined value,
        but it need not equal <InlineMath>{'s_k'}</InlineMath>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: The Postage Function</p>
        <p>
          Consider a postage function where the cost is 5 cents for every ounce or fraction
          thereof. For mail weighing up to 4 ounces, the function takes values 1, 2, 3, 4
          (number of 5-cent stamps) on the intervals <InlineMath>{'(0, 1]'}</InlineMath>,{' '}
          <InlineMath>{'(1, 2]'}</InlineMath>, <InlineMath>{'(2, 3]'}</InlineMath>,{' '}
          <InlineMath>{'(3, 4]'}</InlineMath>. This is a step function.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Property</p>
        <p>
          If a step function is constant on the open subintervals of a partition{' '}
          <InlineMath>{'P'}</InlineMath>, then it is also constant on the open subintervals
          of every refinement <InlineMath>{"P'"}</InlineMath> of <InlineMath>{'P'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Greatest Integer Function</h2>

      <p className="text-dark-200 mb-4">
        An important example of a step function is the <strong>greatest integer function</strong>:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Greatest Integer Function</p>
        <p>
          For any real number <InlineMath>{'x'}</InlineMath>, the symbol{' '}
          <InlineMath>{'[x]'}</InlineMath> (also written <InlineMath>{'\\lfloor x \\rfloor'}</InlineMath>)
          denotes the <strong>greatest integer less than or equal to</strong>{' '}
          <InlineMath>{'x'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Examples</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{'[3.7] = 3'}</InlineMath></li>
          <li><InlineMath>{'[5] = 5'}</InlineMath></li>
          <li><InlineMath>{'[-2.3] = -3'}</InlineMath></li>
          <li><InlineMath>{'[\\pi] = 3'}</InlineMath></li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4">
        The greatest integer function has several useful properties:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Properties of [x]</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{'[x + n] = [x] + n'}</InlineMath> for any integer <InlineMath>{'n'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'[-x] = -[x]'}</InlineMath> if <InlineMath>{'x'}</InlineMath> is an integer;{' '}
            <InlineMath>{'[-x] = -[x] - 1'}</InlineMath> otherwise
          </li>
          <li>
            <InlineMath>{'[x + y] = [x] + [y]'}</InlineMath> or <InlineMath>{'[x] + [y] + 1'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'[2x] = [x] + [x + \\frac{1}{2}]'}</InlineMath>
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Operations on Step Functions</h2>

      <p className="text-dark-200 mb-4">
        We can combine step functions to create new step functions:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Sum of Step Functions</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{'s'}</InlineMath> and <InlineMath>{'t'}</InlineMath> are step functions
        on <InlineMath>{'[a, b]'}</InlineMath>, their sum <InlineMath>{'u = s + t'}</InlineMath>{' '}
        is defined by:
      </p>

      <MathBlock>{'u(x) = s(x) + t(x) \\quad \\text{for } a \\leq x \\leq b'}</MathBlock>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Sum of Step Functions</p>
        <p>
          The sum of two step functions is also a step function. If <InlineMath>{'s'}</InlineMath>{' '}
          is constant on the open subintervals of <InlineMath>{'P_1'}</InlineMath> and{' '}
          <InlineMath>{'t'}</InlineMath> is constant on the open subintervals of{' '}
          <InlineMath>{'P_2'}</InlineMath>, then <InlineMath>{'s + t'}</InlineMath> is constant
          on the open subintervals of the <strong>common refinement</strong> of{' '}
          <InlineMath>{'P_1'}</InlineMath> and <InlineMath>{'P_2'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Common Refinement</p>
        <p>
          The <strong>common refinement</strong> of partitions <InlineMath>{'P_1'}</InlineMath>{' '}
          and <InlineMath>{'P_2'}</InlineMath> is the partition containing all points from
          both <InlineMath>{'P_1'}</InlineMath> and <InlineMath>{'P_2'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Product of Step Functions</h3>

      <p className="text-dark-200 mb-4">
        Similarly, the product <InlineMath>{'v = s \\cdot t'}</InlineMath> is defined by:
      </p>

      <MathBlock>{'v(x) = s(x) \\cdot t(x) \\quad \\text{for } a \\leq x \\leq b'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The product of two step functions is also a step function, constant on the open
        subintervals of the common refinement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Scalar Multiplication</h3>

      <p className="text-dark-200 mb-4">
        An important special case: if <InlineMath>{'t(x) = c'}</InlineMath> is constant
        throughout <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'(s \\cdot t)(x) = c \\cdot s(x)'}</InlineMath>.
        This is called <strong>scalar multiplication</strong> of a step function by a constant.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Characteristic Functions</h2>

      <p className="text-dark-200 mb-4">
        Step functions can be expressed in terms of characteristic functions:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Characteristic Function</p>
        <p className="mb-2">
          The <strong>characteristic function</strong> <InlineMath>{'\\chi_S'}</InlineMath>{' '}
          of a set <InlineMath>{'S'}</InlineMath> is defined by:
        </p>
        <MathBlock>{'\\chi_S(x) = \\begin{cases} 1 & \\text{if } x \\in S \\ 0 & \\text{if } x \\notin S \\end{cases}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Every step function can be written as a <strong>linear combination</strong> of
        characteristic functions of intervals. If <InlineMath>{'s'}</InlineMath> takes
        constant value <InlineMath>{'c_k'}</InlineMath> on the <InlineMath>{'k'}</InlineMath>th
        open subinterval <InlineMath>{'I_k'}</InlineMath>, then:
      </p>

      <MathBlock>{'s(x) = \\sum_{k=1}^{n} c_k \\chi_{I_k}(x)'}</MathBlock>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        Partitions divide intervals into subintervals, providing the framework for defining
        step functions. A step function is constant on each open subinterval of some partition.
        The sum and product of step functions are again step functions. These simple functions
        serve as building blocks for integration theory—we'll define the integral first for
        step functions and then extend it to more general functions.
      </p>
    </LessonLayout>
  );
}
