import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          A <strong>partition</strong> <MathInline>{'P'}</MathInline> of a closed interval{' '}
          <MathInline>{'[a, b]'}</MathInline> is a finite collection of points
        </p>
        <MathBlock>{'P = \\{x_0, x_1, x_2, \\ldots, x_n\\}'}</MathBlock>
        <p className="mt-2">satisfying</p>
        <MathBlock>{'a = x_0 < x_1 < x_2 < \\cdots < x_{n-1} < x_n = b'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        The partition <MathInline>{'P'}</MathInline> determines <MathInline>{'n'}</MathInline>{' '}
        closed subintervals:
      </p>

      <MathBlock>{'[x_0, x_1], \\, [x_1, x_2], \\, \\ldots, \\, [x_{n-1}, x_n]'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The <MathInline>{'k'}</MathInline>th closed subinterval is{' '}
        <MathInline>{'[x_{k-1}, x_k]'}</MathInline>, and the corresponding open subinterval
        is <MathInline>{'(x_{k-1}, x_k)'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: A Partition of [0, 4]</p>
        <p className="mb-2">
          The set <MathInline>{'P = \\{0, 1, 2, 3, 4\\}'}</MathInline> is a partition of{' '}
          <MathInline>{'[0, 4]'}</MathInline> into 4 subintervals:
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
          A partition <MathInline>{"P'"}</MathInline> is called a <strong>refinement</strong>{' '}
          of <MathInline>{'P'}</MathInline> (and is said to be <em>finer</em> than{' '}
          <MathInline>{'P'}</MathInline>) if <MathInline>{"P'"}</MathInline> contains all
          the points of <MathInline>{'P'}</MathInline> plus possibly additional points.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Refinement</p>
        <p>
          If <MathInline>{'P = \\{0, 1, 2, 3, 4\\}'}</MathInline>, then{' '}
          <MathInline>{"P' = \\{0, \\frac{3}{4}, 1, \\sqrt{2}, 2, 3, \\frac{7}{2}, 4\\}"}</MathInline>{' '}
          is a refinement of <MathInline>{'P'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Step Functions</h2>

      <p className="text-dark-200 mb-4">
        Step functions are the simplest functions for which we can easily define integrals:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Step Function</p>
        <p className="mb-2">
          A function <MathInline>{'s'}</MathInline> whose domain is a closed interval{' '}
          <MathInline>{'[a, b]'}</MathInline> is called a <strong>step function</strong>{' '}
          if there exists a partition <MathInline>{'P = \\{x_0, x_1, \\ldots, x_n\\}'}</MathInline>{' '}
          of <MathInline>{'[a, b]'}</MathInline> such that <MathInline>{'s'}</MathInline> is
          constant on each open subinterval of <MathInline>{'P'}</MathInline>.
        </p>
        <p>
          That is, for each <MathInline>{'k = 1, 2, \\ldots, n'}</MathInline>, there is a
          constant <MathInline>{'s_k'}</MathInline> such that:
        </p>
        <MathBlock>{'s(x) = s_k \\quad \\text{if} \\quad x_{k-1} < x < x_k'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Step functions are also called <strong>piecewise constant functions</strong>.
        Note that at the endpoints <MathInline>{'x_{k-1}'}</MathInline> and{' '}
        <MathInline>{'x_k'}</MathInline>, the function must have some well-defined value,
        but it need not equal <MathInline>{'s_k'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: The Postage Function</p>
        <p>
          Consider a postage function where the cost is 5 cents for every ounce or fraction
          thereof. For mail weighing up to 4 ounces, the function takes values 1, 2, 3, 4
          (number of 5-cent stamps) on the intervals <MathInline>{'(0, 1]'}</MathInline>,{' '}
          <MathInline>{'(1, 2]'}</MathInline>, <MathInline>{'(2, 3]'}</MathInline>,{' '}
          <MathInline>{'(3, 4]'}</MathInline>. This is a step function.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Property</p>
        <p>
          If a step function is constant on the open subintervals of a partition{' '}
          <MathInline>{'P'}</MathInline>, then it is also constant on the open subintervals
          of every refinement <MathInline>{"P'"}</MathInline> of <MathInline>{'P'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Greatest Integer Function</h2>

      <p className="text-dark-200 mb-4">
        An important example of a step function is the <strong>greatest integer function</strong>:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Greatest Integer Function</p>
        <p>
          For any real number <MathInline>{'x'}</MathInline>, the symbol{' '}
          <MathInline>{'[x]'}</MathInline> (also written <MathInline>{'\\lfloor x \\rfloor'}</MathInline>)
          denotes the <strong>greatest integer less than or equal to</strong>{' '}
          <MathInline>{'x'}</MathInline>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Examples</p>
        <ul className="list-disc list-inside space-y-1">
          <li><MathInline>{'[3.7] = 3'}</MathInline></li>
          <li><MathInline>{'[5] = 5'}</MathInline></li>
          <li><MathInline>{'[-2.3] = -3'}</MathInline></li>
          <li><MathInline>{'[\\pi] = 3'}</MathInline></li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4">
        The greatest integer function has several useful properties:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Properties of [x]</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <MathInline>{'[x + n] = [x] + n'}</MathInline> for any integer <MathInline>{'n'}</MathInline>
          </li>
          <li>
            <MathInline>{'[-x] = -[x]'}</MathInline> if <MathInline>{'x'}</MathInline> is an integer;{' '}
            <MathInline>{'[-x] = -[x] - 1'}</MathInline> otherwise
          </li>
          <li>
            <MathInline>{'[x + y] = [x] + [y]'}</MathInline> or <MathInline>{'[x] + [y] + 1'}</MathInline>
          </li>
          <li>
            <MathInline>{'[2x] = [x] + [x + \\frac{1}{2}]'}</MathInline>
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Operations on Step Functions</h2>

      <p className="text-dark-200 mb-4">
        We can combine step functions to create new step functions:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Sum of Step Functions</h3>

      <p className="text-dark-200 mb-4">
        If <MathInline>{'s'}</MathInline> and <MathInline>{'t'}</MathInline> are step functions
        on <MathInline>{'[a, b]'}</MathInline>, their sum <MathInline>{'u = s + t'}</MathInline>{' '}
        is defined by:
      </p>

      <MathBlock>{'u(x) = s(x) + t(x) \\quad \\text{for } a \\leq x \\leq b'}</MathBlock>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Sum of Step Functions</p>
        <p>
          The sum of two step functions is also a step function. If <MathInline>{'s'}</MathInline>{' '}
          is constant on the open subintervals of <MathInline>{'P_1'}</MathInline> and{' '}
          <MathInline>{'t'}</MathInline> is constant on the open subintervals of{' '}
          <MathInline>{'P_2'}</MathInline>, then <MathInline>{'s + t'}</MathInline> is constant
          on the open subintervals of the <strong>common refinement</strong> of{' '}
          <MathInline>{'P_1'}</MathInline> and <MathInline>{'P_2'}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Common Refinement</p>
        <p>
          The <strong>common refinement</strong> of partitions <MathInline>{'P_1'}</MathInline>{' '}
          and <MathInline>{'P_2'}</MathInline> is the partition containing all points from
          both <MathInline>{'P_1'}</MathInline> and <MathInline>{'P_2'}</MathInline>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Product of Step Functions</h3>

      <p className="text-dark-200 mb-4">
        Similarly, the product <MathInline>{'v = s \\cdot t'}</MathInline> is defined by:
      </p>

      <MathBlock>{'v(x) = s(x) \\cdot t(x) \\quad \\text{for } a \\leq x \\leq b'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The product of two step functions is also a step function, constant on the open
        subintervals of the common refinement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Scalar Multiplication</h3>

      <p className="text-dark-200 mb-4">
        An important special case: if <MathInline>{'t(x) = c'}</MathInline> is constant
        throughout <MathInline>{'[a, b]'}</MathInline>, then <MathInline>{'(s \\cdot t)(x) = c \\cdot s(x)'}</MathInline>.
        This is called <strong>scalar multiplication</strong> of a step function by a constant.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Characteristic Functions</h2>

      <p className="text-dark-200 mb-4">
        Step functions can be expressed in terms of characteristic functions:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Characteristic Function</p>
        <p className="mb-2">
          The <strong>characteristic function</strong> <MathInline>{'\\chi_S'}</MathInline>{' '}
          of a set <MathInline>{'S'}</MathInline> is defined by:
        </p>
        <MathBlock>{'\\chi_S(x) = \\begin{cases} 1 & \\text{if } x \\in S \\ 0 & \\text{if } x \\notin S \\end{cases}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Every step function can be written as a <strong>linear combination</strong> of
        characteristic functions of intervals. If <MathInline>{'s'}</MathInline> takes
        constant value <MathInline>{'c_k'}</MathInline> on the <MathInline>{'k'}</MathInline>th
        open subinterval <MathInline>{'I_k'}</MathInline>, then:
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
