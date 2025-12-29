import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Consider the function <MathInline>{'f(x) = \\sin(x^2)'}</MathInline>. To compute{' '}
        <MathInline>{'f(x)'}</MathInline>, we first square <MathInline>{'x'}</MathInline> and
        then take the sine of <MathInline>{'x^2'}</MathInline>. Thus,{' '}
        <MathInline>{'f(x)'}</MathInline> is obtained by combining two other functions: the
        squaring function and the sine function.
      </p>

      <p className="text-dark-200 mb-4">
        If we let <MathInline>{'v(x) = x^2'}</MathInline> and{' '}
        <MathInline>{'u(x) = \\sin x'}</MathInline>, we can express{' '}
        <MathInline>{'f(x)'}</MathInline> in terms of <MathInline>{'u'}</MathInline> and{' '}
        <MathInline>{'v'}</MathInline> by writing:
      </p>

      <MathBlock>{'f(x) = u[v(x)]'}</MathBlock>

      <p className="text-dark-200 mb-4">
        We say that <MathInline>{'f'}</MathInline> is the <strong>composition</strong> of{' '}
        <MathInline>{'u'}</MathInline> and <MathInline>{'v'}</MathInline> (in that order).
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Composite Function</p>
        <p className="mb-2">
          Let <MathInline>{'u'}</MathInline> and <MathInline>{'v'}</MathInline> be any two
          given functions. The <strong>composite</strong> (or <strong>composition</strong>) of{' '}
          <MathInline>{'u'}</MathInline> and <MathInline>{'v'}</MathInline> (in that order) is
          defined to be the function <MathInline>{'f'}</MathInline> for which:
        </p>
        <MathBlock>{'f(x) = u[v(x)] \\quad \\text{(read as "} u \\text{ of } v \\text{ of } x \\text{")}'}</MathBlock>
        <p className="mt-2">
          That is, to evaluate <MathInline>{'f'}</MathInline> at <MathInline>{'x'}</MathInline>,
          we first compute <MathInline>{'v(x)'}</MathInline> and then evaluate{' '}
          <MathInline>{'u'}</MathInline> at the point <MathInline>{'v(x)'}</MathInline>.
        </p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Notation</p>
        <p className="mb-2">
          The composite function is sometimes denoted by <MathInline>{'f = u(v)'}</MathInline>{' '}
          (read as "<MathInline>{'u'}</MathInline> of <MathInline>{'v'}</MathInline>").
        </p>
        <p>
          Another notation is <MathInline>{'f = u \\circ v'}</MathInline> (read as "
          <MathInline>{'u'}</MathInline> circle <MathInline>{'v'}</MathInline>").
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        The function <MathInline>{'f'}</MathInline> is defined only at those points{' '}
        <MathInline>{'x'}</MathInline> for which <MathInline>{'v(x)'}</MathInline> is in the
        domain of <MathInline>{'u'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Square Root of a Difference</p>
        <p className="mb-2">
          If <MathInline>{'u(x) = \\sqrt{x}'}</MathInline> and{' '}
          <MathInline>{'v(x) = 1 - x^2'}</MathInline>, then the composite{' '}
          <MathInline>{'f'}</MathInline> is given by:
        </p>
        <MathBlock>{'f(x) = \\sqrt{1 - x^2}'}</MathBlock>
        <p className="mt-2">
          Note that <MathInline>{'v'}</MathInline> is defined for all real{' '}
          <MathInline>{'x'}</MathInline>, whereas <MathInline>{'u'}</MathInline> is defined
          only for <MathInline>{'x \\geq 0'}</MathInline>. Therefore the composite{' '}
          <MathInline>{'f'}</MathInline> is defined only for those <MathInline>{'x'}</MathInline>{' '}
          satisfying <MathInline>{'1 - x^2 \\geq 0'}</MathInline>, i.e.,{' '}
          <MathInline>{'|x| \\leq 1'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Order Matters: Composition is Not Commutative</h2>

      <p className="text-dark-200 mb-4">
        It is important to note that the <strong>commutative law</strong>,{' '}
        <MathInline>{'u \\circ v = v \\circ u'}</MathInline>, does <em>not</em> always hold for
        composition.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Order Changes the Result</p>
        <p className="mb-2">
          Let <MathInline>{'u(x) = \\sin x'}</MathInline> and{' '}
          <MathInline>{'v(x) = x^2'}</MathInline>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <MathInline>{'f = u \\circ v'}</MathInline>:{' '}
            <MathInline>{'f(x) = \\sin(x^2)'}</MathInline> — square first, then take sine
          </li>
          <li>
            <MathInline>{'g = v \\circ u'}</MathInline>:{' '}
            <MathInline>{'g(x) = (\\sin x)^2 = \\sin^2 x'}</MathInline> — take sine first, then square
          </li>
        </ul>
        <p className="mt-2">
          These are different functions! For instance,{' '}
          <MathInline>{'f(\\sqrt{\\pi}) = \\sin \\pi = 0'}</MathInline>, but{' '}
          <MathInline>{'g(\\sqrt{\\pi}) = \\sin^2(\\sqrt{\\pi}) \\neq 0'}</MathInline>.
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
          for all functions <MathInline>{'u'}</MathInline>, <MathInline>{'v'}</MathInline>,{' '}
          <MathInline>{'w'}</MathInline>, provided it makes sense to form all the composites
          in question.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Triple Composition</p>
        <p className="mb-2">
          The function <MathInline>{'f(x) = \\cos[\\sin(x^2)]'}</MathInline> is a composition
          where:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><MathInline>{'u(x) = \\cos x'}</MathInline></li>
          <li><MathInline>{'v(x) = \\sin x'}</MathInline></li>
          <li><MathInline>{'w(x) = x^2'}</MathInline></li>
        </ul>
        <p className="mt-2">
          We have <MathInline>{'f = u \\circ (v \\circ w) = (u \\circ v) \\circ w'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Composite Functions</h2>

      <p className="text-dark-200 mb-4">
        Now we prove that the property of continuity is preserved under composition.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 3.5 (Continuity of Composite Functions)</p>
        <p>
          Assume <MathInline>{'v'}</MathInline> is continuous at <MathInline>{'p'}</MathInline>{' '}
          and that <MathInline>{'u'}</MathInline> is continuous at{' '}
          <MathInline>{'q'}</MathInline>, where <MathInline>{'q = v(p)'}</MathInline>. Then the
          composite function <MathInline>{'f = u \\circ v'}</MathInline> is continuous at{' '}
          <MathInline>{'p'}</MathInline>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof</h3>

      <p className="text-dark-200 mb-4">
        Since <MathInline>{'u'}</MathInline> is continuous at <MathInline>{'q'}</MathInline>,
        for every neighborhood <MathInline>{'N_1[u(q)]'}</MathInline> there is a neighborhood{' '}
        <MathInline>{'N_2(q)'}</MathInline> such that:
      </p>

      <MathBlock>{'u(y) \\in N_1[u(q)] \\quad \\text{whenever} \\quad y \\in N_2(q)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        But <MathInline>{'q = v(p)'}</MathInline> and <MathInline>{'v'}</MathInline> is
        continuous at <MathInline>{'p'}</MathInline>, so for the neighborhood{' '}
        <MathInline>{'N_2(q)'}</MathInline> there is another neighborhood{' '}
        <MathInline>{'N_3(p)'}</MathInline> such that:
      </p>

      <MathBlock>{'v(x) \\in N_2(q) \\quad \\text{whenever} \\quad x \\in N_3(p)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        If we let <MathInline>{'y = v(x)'}</MathInline> and combine these two statements, we
        find that for every neighborhood <MathInline>{'N_1(u[v(p)])'}</MathInline> there is a
        neighborhood <MathInline>{'N_3(p)'}</MathInline> such that:
      </p>

      <MathBlock>{'f(x) = u[v(x)] \\in N_1[f(p)] \\quad \\text{whenever} \\quad x \\in N_3(p)'}</MathBlock>

      <p className="text-dark-200 mb-4">
        This means <MathInline>{'f'}</MathInline> is continuous at <MathInline>{'p'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Continuous Composites</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: sin(x²)</p>
        <p>
          Let <MathInline>{'f(x) = \\sin(x^2)'}</MathInline>. This is the composition of two
          functions that are continuous everywhere (sine and squaring), so{' '}
          <MathInline>{'f'}</MathInline> is continuous everywhere.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: √(1 - x²)</p>
        <p className="mb-2">
          Let <MathInline>{'f(x) = \\sqrt{1 - x^2} = u[v(x)]'}</MathInline>, where{' '}
          <MathInline>{'u(x) = \\sqrt{x}'}</MathInline> and{' '}
          <MathInline>{'v(x) = 1 - x^2'}</MathInline>.
        </p>
        <p className="mb-2">
          The function <MathInline>{'v'}</MathInline> is continuous everywhere, but{' '}
          <MathInline>{'u'}</MathInline> is continuous only for points{' '}
          <MathInline>{'x \\geq 0'}</MathInline>.
        </p>
        <p>
          Hence <MathInline>{'f'}</MathInline> is continuous at those points{' '}
          <MathInline>{'x'}</MathInline> for which{' '}
          <MathInline>{'v(x) \\geq 0'}</MathInline>, that is, at all points satisfying{' '}
          <MathInline>{'x^2 \\leq 1'}</MathInline>, or{' '}
          <MathInline>{'-1 \\leq x \\leq 1'}</MathInline>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Nested Trigonometric Functions</p>
        <p className="mb-2">
          Let <MathInline>{'f(x) = \\sin(\\cos x)'}</MathInline>. Both sine and cosine are
          continuous everywhere, so their composition is also continuous everywhere.
        </p>
        <p>
          Similarly, <MathInline>{'g(x) = \\cos(\\sin x)'}</MathInline> is continuous everywhere.
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
          If <MathInline>{'\\lim_{x \\to p} v(x) = q'}</MathInline> and{' '}
          <MathInline>{'u'}</MathInline> is continuous at <MathInline>{'q'}</MathInline>, then:
        </p>
        <MathBlock>{'\\lim_{x \\to p} u[v(x)] = u\\left[\\lim_{x \\to p} v(x)\\right] = u(q)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Limit Calculation</p>
        <p className="mb-2">
          Compute <MathInline>{'\\lim_{x \\to 0} \\sin(\\tan x)'}</MathInline>.
        </p>
        <p className="mb-2">
          Since <MathInline>{'\\lim_{x \\to 0} \\tan x = 0'}</MathInline> and sine is continuous
          at 0:
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\sin(\\tan x) = \\sin\\left(\\lim_{x \\to 0} \\tan x\\right) = \\sin 0 = 0'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Composite function:</strong>{' '}
          <MathInline>{'(u \\circ v)(x) = u[v(x)]'}</MathInline>
        </li>
        <li>
          <strong>Domain:</strong> The composite{' '}
          <MathInline>{'f = u \\circ v'}</MathInline> is defined where{' '}
          <MathInline>{'v(x)'}</MathInline> is in the domain of <MathInline>{'u'}</MathInline>
        </li>
        <li>
          <strong>Not commutative:</strong>{' '}
          <MathInline>{'u \\circ v \\neq v \\circ u'}</MathInline> in general
        </li>
        <li>
          <strong>Associative:</strong>{' '}
          <MathInline>{'u \\circ (v \\circ w) = (u \\circ v) \\circ w'}</MathInline>
        </li>
        <li>
          <strong>Continuity preserved:</strong> If <MathInline>{'v'}</MathInline> is
          continuous at <MathInline>{'p'}</MathInline> and <MathInline>{'u'}</MathInline> is
          continuous at <MathInline>{'v(p)'}</MathInline>, then{' '}
          <MathInline>{'u \\circ v'}</MathInline> is continuous at{' '}
          <MathInline>{'p'}</MathInline>
        </li>
        <li>
          <strong>Limits:</strong>{' '}
          <MathInline>{'\\lim u[v(x)] = u[\\lim v(x)]'}</MathInline> when{' '}
          <MathInline>{'u'}</MathInline> is continuous at the limit
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
