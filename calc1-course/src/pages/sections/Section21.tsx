import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-semibold mb-4">Composite Functions</h2>

      <p className="text-dark-200 mb-6">
        We can create new functions from given ones by addition, subtraction, multiplication,
        and division. In this section we learn another important way to construct functions:
        the operation known as <strong>composition</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Definition of Composition</h2>

      <p className="text-dark-200 mb-4">
        Consider the function <InlineMath>{'f(x) = \\sin(x^2)'}</InlineMath>. To compute{' '}
        <InlineMath>{'f(x)'}</InlineMath>, we first square <InlineMath>{'x'}</InlineMath> and
        then take the sine of <InlineMath>{'x^2'}</InlineMath>. Thus,{' '}
        <InlineMath>{'f(x)'}</InlineMath> is obtained by combining two other functions: the
        squaring function and the sine function.
      </p>

      <p className="text-dark-200 mb-4">
        If we let <InlineMath>{'v(x) = x^2'}</InlineMath> and{' '}
        <InlineMath>{'u(x) = \\sin x'}</InlineMath>, we can express{' '}
        <InlineMath>{'f(x)'}</InlineMath> in terms of <InlineMath>{'u'}</InlineMath> and{' '}
        <InlineMath>{'v'}</InlineMath> by writing:
      </p>

      <MathBlock>{'f(x) = u[v(x)]'}</MathBlock>

      <p className="text-dark-200 mb-4">
        We say that <InlineMath>{'f'}</InlineMath> is the <strong>composition</strong> of{' '}
        <InlineMath>{'u'}</InlineMath> and <InlineMath>{'v'}</InlineMath> (in that order).
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Composite Function</p>
        <p className="mb-2">
          Let <InlineMath>{'u'}</InlineMath> and <InlineMath>{'v'}</InlineMath> be any two
          given functions. The <strong>composite</strong> (or <strong>composition</strong>) of{' '}
          <InlineMath>{'u'}</InlineMath> and <InlineMath>{'v'}</InlineMath> (in that order) is
          defined to be the function <InlineMath>{'f'}</InlineMath> for which:
        </p>
        <MathBlock>{'f(x) = u[v(x)] \\quad \\text{(read as "} u \\text{ of } v \\text{ of } x \\text{")}'}</MathBlock>
        <p className="mt-2">
          That is, to evaluate <InlineMath>{'f'}</InlineMath> at <InlineMath>{'x'}</InlineMath>,
          we first compute <InlineMath>{'v(x)'}</InlineMath> and then evaluate{' '}
          <InlineMath>{'u'}</InlineMath> at the point <InlineMath>{'v(x)'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Notation</p>
        <p className="mb-2">
          The composite function is sometimes denoted by <InlineMath>{'f = u(v)'}</InlineMath>{' '}
          (read as "<InlineMath>{'u'}</InlineMath> of <InlineMath>{'v'}</InlineMath>").
        </p>
        <p>
          Another notation is <InlineMath>{'f = u \\circ v'}</InlineMath> (read as "
          <InlineMath>{'u'}</InlineMath> circle <InlineMath>{'v'}</InlineMath>").
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        The function <InlineMath>{'f'}</InlineMath> is defined only at those points{' '}
        <InlineMath>{'x'}</InlineMath> for which <InlineMath>{'v(x)'}</InlineMath> is in the
        domain of <InlineMath>{'u'}</InlineMath>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Square Root of a Difference</p>
        <p className="mb-2">
          If <InlineMath>{'u(x) = \\sqrt{x}'}</InlineMath> and{' '}
          <InlineMath>{'v(x) = 1 - x^2'}</InlineMath>, then the composite{' '}
          <InlineMath>{'f'}</InlineMath> is given by:
        </p>
        <MathBlock>{'f(x) = \\sqrt{1 - x^2}'}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>{'v'}</InlineMath> is defined for all real{' '}
          <InlineMath>{'x'}</InlineMath>, whereas <InlineMath>{'u'}</InlineMath> is defined
          only for <InlineMath>{'x \\geq 0'}</InlineMath>. Therefore the composite{' '}
          <InlineMath>{'f'}</InlineMath> is defined only for those <InlineMath>{'x'}</InlineMath>{' '}
          satisfying <InlineMath>{'1 - x^2 \\geq 0'}</InlineMath>, i.e.,{' '}
          <InlineMath>{'|x| \\leq 1'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Order Matters: Composition is Not Commutative</h2>

      <p className="text-dark-200 mb-4">
        It is important to note that the <strong>commutative law</strong>,{' '}
        <InlineMath>{'u \\circ v = v \\circ u'}</InlineMath>, does <em>not</em> always hold for
        composition.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Order Changes the Result</p>
        <p className="mb-2">
          Let <InlineMath>{'u(x) = \\sin x'}</InlineMath> and{' '}
          <InlineMath>{'v(x) = x^2'}</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>{'f = u \\circ v'}</InlineMath>:{' '}
            <InlineMath>{'f(x) = \\sin(x^2)'}</InlineMath> — square first, then take sine
          </li>
          <li>
            <InlineMath>{'g = v \\circ u'}</InlineMath>:{' '}
            <InlineMath>{'g(x) = (\\sin x)^2 = \\sin^2 x'}</InlineMath> — take sine first, then square
          </li>
        </ul>
        <p className="mt-2">
          These are different functions! For instance,{' '}
          <InlineMath>{'f(\\sqrt{\\pi}) = \\sin \\pi = 0'}</InlineMath>, but{' '}
          <InlineMath>{'g(\\sqrt{\\pi}) = \\sin^2(\\sqrt{\\pi}) \\neq 0'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Associative Law</h2>

      <p className="text-dark-200 mb-4">
        The composite of three or more functions may be found by composing them two at a time.
        The <strong>associative law</strong> holds for composition:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Associative Law for Composition</p>
        <MathBlock>{'u \\circ (v \\circ w) = (u \\circ v) \\circ w'}</MathBlock>
        <p className="mt-2">
          for all functions <InlineMath>{'u'}</InlineMath>, <InlineMath>{'v'}</InlineMath>,{' '}
          <InlineMath>{'w'}</InlineMath>, provided it makes sense to form all the composites
          in question.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Triple Composition</p>
        <p className="mb-2">
          The function <InlineMath>{'f(x) = \\cos[\\sin(x^2)]'}</InlineMath> is a composition
          where:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{'u(x) = \\cos x'}</InlineMath></li>
          <li><InlineMath>{'v(x) = \\sin x'}</InlineMath></li>
          <li><InlineMath>{'w(x) = x^2'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          We have <InlineMath>{'f = u \\circ (v \\circ w) = (u \\circ v) \\circ w'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Composite Functions</h2>

      <p className="text-dark-200 mb-4">
        Now we prove that the property of continuity is preserved under composition.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.5 (Continuity of Composite Functions)</p>
        <p>
          Assume <InlineMath>{'v'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath>{' '}
          and that <InlineMath>{'u'}</InlineMath> is continuous at{' '}
          <InlineMath>{'q'}</InlineMath>, where <InlineMath>{'q = v(p)'}</InlineMath>. Then the
          composite function <InlineMath>{'f = u \\circ v'}</InlineMath> is continuous at{' '}
          <InlineMath>{'p'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof</h3>

      <p className="text-dark-200 mb-4">
        Since <InlineMath>{'u'}</InlineMath> is continuous at <InlineMath>{'q'}</InlineMath>,
        for every neighborhood <InlineMath>{'N_1[u(q)]'}</InlineMath> there is a neighborhood{' '}
        <InlineMath>{'N_2(q)'}</InlineMath> such that:
      </p>

      <MathBlock>{'u(y) \\in N_1[u(q)] \\quad \\text{whenever} \\quad y \\in N_2(q)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        But <InlineMath>{'q = v(p)'}</InlineMath> and <InlineMath>{'v'}</InlineMath> is
        continuous at <InlineMath>{'p'}</InlineMath>, so for the neighborhood{' '}
        <InlineMath>{'N_2(q)'}</InlineMath> there is another neighborhood{' '}
        <InlineMath>{'N_3(p)'}</InlineMath> such that:
      </p>

      <MathBlock>{'v(x) \\in N_2(q) \\quad \\text{whenever} \\quad x \\in N_3(p)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        If we let <InlineMath>{'y = v(x)'}</InlineMath> and combine these two statements, we
        find that for every neighborhood <InlineMath>{'N_1(u[v(p)])'}</InlineMath> there is a
        neighborhood <InlineMath>{'N_3(p)'}</InlineMath> such that:
      </p>

      <MathBlock>{'f(x) = u[v(x)] \\in N_1[f(p)] \\quad \\text{whenever} \\quad x \\in N_3(p)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        This means <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Continuous Composites</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: sin(x²)</p>
        <p>
          Let <InlineMath>{'f(x) = \\sin(x^2)'}</InlineMath>. This is the composition of two
          functions that are continuous everywhere (sine and squaring), so{' '}
          <InlineMath>{'f'}</InlineMath> is continuous everywhere.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: √(1 - x²)</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = \\sqrt{1 - x^2} = u[v(x)]'}</InlineMath>, where{' '}
          <InlineMath>{'u(x) = \\sqrt{x}'}</InlineMath> and{' '}
          <InlineMath>{'v(x) = 1 - x^2'}</InlineMath>.
        </p>
        <p className="mb-2">
          The function <InlineMath>{'v'}</InlineMath> is continuous everywhere, but{' '}
          <InlineMath>{'u'}</InlineMath> is continuous only for points{' '}
          <InlineMath>{'x \\geq 0'}</InlineMath>.
        </p>
        <p>
          Hence <InlineMath>{'f'}</InlineMath> is continuous at those points{' '}
          <InlineMath>{'x'}</InlineMath> for which{' '}
          <InlineMath>{'v(x) \\geq 0'}</InlineMath>, that is, at all points satisfying{' '}
          <InlineMath>{'x^2 \\leq 1'}</InlineMath>, or{' '}
          <InlineMath>{'-1 \\leq x \\leq 1'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Nested Trigonometric Functions</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = \\sin(\\cos x)'}</InlineMath>. Both sine and cosine are
          continuous everywhere, so their composition is also continuous everywhere.
        </p>
        <p>
          Similarly, <InlineMath>{'g(x) = \\cos(\\sin x)'}</InlineMath> is continuous everywhere.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Computing Limits of Composites</h2>

      <p className="text-dark-200 mb-4">
        Theorem 3.5 allows us to compute limits of composite functions by "passing the limit
        inside":
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Limit of a Composite</p>
        <p className="mb-2">
          If <InlineMath>{'\\lim_{x \\to p} v(x) = q'}</InlineMath> and{' '}
          <InlineMath>{'u'}</InlineMath> is continuous at <InlineMath>{'q'}</InlineMath>, then:
        </p>
        <MathBlock>{'\\lim_{x \\to p} u[v(x)] = u\\left[\\lim_{x \\to p} v(x)\\right] = u(q)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Limit Calculation</p>
        <p className="mb-2">
          Compute <InlineMath>{'\\lim_{x \\to 0} \\sin(\\tan x)'}</InlineMath>.
        </p>
        <p className="mb-2">
          Since <InlineMath>{'\\lim_{x \\to 0} \\tan x = 0'}</InlineMath> and sine is continuous
          at 0:
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\sin(\\tan x) = \\sin\\left(\\lim_{x \\to 0} \\tan x\\right) = \\sin 0 = 0'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Composite function:</strong>{' '}
          <InlineMath>{'(u \\circ v)(x) = u[v(x)]'}</InlineMath>
        </li>
        <li>
          <strong>Domain:</strong> The composite{' '}
          <InlineMath>{'f = u \\circ v'}</InlineMath> is defined where{' '}
          <InlineMath>{'v(x)'}</InlineMath> is in the domain of <InlineMath>{'u'}</InlineMath>
        </li>
        <li>
          <strong>Not commutative:</strong>{' '}
          <InlineMath>{'u \\circ v \\neq v \\circ u'}</InlineMath> in general
        </li>
        <li>
          <strong>Associative:</strong>{' '}
          <InlineMath>{'u \\circ (v \\circ w) = (u \\circ v) \\circ w'}</InlineMath>
        </li>
        <li>
          <strong>Continuity preserved:</strong> If <InlineMath>{'v'}</InlineMath> is
          continuous at <InlineMath>{'p'}</InlineMath> and <InlineMath>{'u'}</InlineMath> is
          continuous at <InlineMath>{'v(p)'}</InlineMath>, then{' '}
          <InlineMath>{'u \\circ v'}</InlineMath> is continuous at{' '}
          <InlineMath>{'p'}</InlineMath>
        </li>
        <li>
          <strong>Limits:</strong>{' '}
          <InlineMath>{'\\lim u[v(x)] = u[\\lim v(x)]'}</InlineMath> when{' '}
          <InlineMath>{'u'}</InlineMath> is continuous at the limit
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Composition is one of the most important operations in calculus. It allows us to build
        complex functions from simpler ones and extends our ability to work with continuous
        functions. In the next section, we will explore Bolzano's theorem, which reveals a
        fundamental property of continuous functions on closed intervals.
      </p>
    </LessonLayout>
  );
}
