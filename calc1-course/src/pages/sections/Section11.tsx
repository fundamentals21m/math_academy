import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">Monotonic Functions</h2>

      <p className="text-dark-200 mb-6">
        Which bounded functions are integrable? A complete answer lies beyond an introductory
        course, but we can give a powerful partial answer: <strong>monotonic functions</strong>{' '}
        are always integrable. Since most functions in practice are monotonic or sums of
        monotonic functions, this result covers a wide range of applications.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Definitions</h2>

      <Callout type="definition">
        <p className="font-semibold mb-2">Increasing and Decreasing Functions</p>
        <p className="mb-2">
          A function <MathInline>{'f'}</MathInline> is <strong>increasing</strong> on a set{' '}
          <MathInline>{'S'}</MathInline> if:
        </p>
        <MathBlock>{'f(x) \\leq f(y) \\quad \\text{whenever } x < y \\text{ in } S'}</MathBlock>
        <p className="mt-2 mb-2">
          It is <strong>strictly increasing</strong> if the strict inequality{' '}
          <MathInline>{'f(x) < f(y)'}</MathInline> holds for all <MathInline>{'x < y'}</MathInline>.
        </p>
        <p className="mb-2">
          Similarly, <MathInline>{'f'}</MathInline> is <strong>decreasing</strong> on{' '}
          <MathInline>{'S'}</MathInline> if:
        </p>
        <MathBlock>{'f(x) \\geq f(y) \\quad \\text{whenever } x < y \\text{ in } S'}</MathBlock>
        <p className="mt-2">
          It is <strong>strictly decreasing</strong> if <MathInline>{'f(x) > f(y)'}</MathInline>{' '}
          for all <MathInline>{'x < y'}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Monotonic Functions</p>
        <p>
          A function is <strong>monotonic</strong> on <MathInline>{'S'}</MathInline> if it is
          either increasing on <MathInline>{'S'}</MathInline> or decreasing on{' '}
          <MathInline>{'S'}</MathInline>. It is <strong>strictly monotonic</strong> if it is
          strictly increasing or strictly decreasing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Piecewise Monotonic Functions</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Piecewise Monotonic</p>
        <p>
          A function <MathInline>{'f'}</MathInline> is <strong>piecewise monotonic</strong>{' '}
          on <MathInline>{'[a, b]'}</MathInline> if there exists a partition{' '}
          <MathInline>{'P'}</MathInline> of <MathInline>{'[a, b]'}</MathInline> such that{' '}
          <MathInline>{'f'}</MathInline> is monotonic on each open subinterval of{' '}
          <MathInline>{'P'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        Step functions are piecewise monotonic (constant on each piece). Many familiar
        functions are piecewise monotonic.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Monotonic Functions</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Power Functions</p>
        <p className="mb-2">
          For any positive integer <MathInline>{'p'}</MathInline>, the function{' '}
          <MathInline>{'f(x) = x^p'}</MathInline> satisfies:
        </p>
        <MathBlock>{'x^p < y^p \\quad \\text{if } 0 \\leq x < y'}</MathBlock>
        <p className="mt-2">
          So <MathInline>{'f(x) = x^p'}</MathInline> is strictly increasing on{' '}
          <MathInline>{'[0, \\infty)'}</MathInline>. On the negative real axis, it is
          decreasing if <MathInline>{'p'}</MathInline> is even and increasing if{' '}
          <MathInline>{'p'}</MathInline> is odd. Thus <MathInline>{'x^p'}</MathInline> is
          piecewise monotonic on every finite interval.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Square Root Function</p>
        <p className="mb-2">
          Let <MathInline>{'f(x) = \\sqrt{x}'}</MathInline> for <MathInline>{'x \\geq 0'}</MathInline>.
          If <MathInline>{'0 \\leq x < y'}</MathInline>, then:
        </p>
        <MathBlock>{'\\sqrt{y} - \\sqrt{x} = \\frac{y - x}{\\sqrt{y} + \\sqrt{x}} > 0'}</MathBlock>
        <p className="mt-2">
          Hence <MathInline>{'\\sqrt{x}'}</MathInline> is strictly increasing on{' '}
          <MathInline>{'[0, \\infty)'}</MathInline>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Semicircle</p>
        <p className="mb-2">
          The function <MathInline>{'g(x) = \\sqrt{r^2 - x^2}'}</MathInline> for{' '}
          <MathInline>{'-r \\leq x \\leq r'}</MathInline> has a semicircular graph.
        </p>
        <p>
          It is strictly increasing on <MathInline>{'[-r, 0]'}</MathInline> and strictly
          decreasing on <MathInline>{'[0, r]'}</MathInline>. Hence{' '}
          <MathInline>{'g'}</MathInline> is piecewise monotonic on{' '}
          <MathInline>{'[-r, r]'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Integrability of Monotonic Functions</h2>

      <p className="text-dark-200 mb-4">
        The fundamental result of this section establishes that monotonic functions are integrable:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.12 (Integrability of Monotonic Functions)</p>
        <p>
          If <MathInline>{'f'}</MathInline> is monotonic on a closed interval{' '}
          <MathInline>{'[a, b]'}</MathInline>, then <MathInline>{'f'}</MathInline> is
          integrable on <MathInline>{'[a, b]'}</MathInline>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        We prove the theorem for increasing functions (the decreasing case is analogous).
        The strategy is to construct special step functions that squeeze{' '}
        <MathInline>{'f'}</MathInline> and show that their integrals can be made arbitrarily close.
      </p>

      <p className="text-dark-200 mb-4">
        Partition <MathInline>{'[a, b]'}</MathInline> into <MathInline>{'n'}</MathInline> equal
        subintervals with points <MathInline>{'x_k = a + k(b-a)/n'}</MathInline>. Define step
        functions:
      </p>

      <MathBlock>{'s_n(x) = f(x_{k-1}) \\quad \\text{and} \\quad t_n(x) = f(x_k) \\quad \\text{for } x_{k-1} < x < x_k'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <MathInline>{'f'}</MathInline> is increasing, we have{' '}
        <MathInline>{'s_n(x) \\leq f(x) \\leq t_n(x)'}</MathInline> throughout{' '}
        <MathInline>{'[a, b]'}</MathInline>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Calculation</p>
        <p className="mb-2">
          The difference between the upper and lower approximations is:
        </p>
        <MathBlock>{'\\int_a^b t_n - \\int_a^b s_n = \\frac{b-a}{n} \\sum_{k=1}^{n}[f(x_k) - f(x_{k-1})] = \\frac{(b-a)[f(b) - f(a)]}{n}'}</MathBlock>
        <p className="mt-2">
          The sum telescopes! Geometrically, the shaded rectangles between{' '}
          <MathInline>{'t_n'}</MathInline> and <MathInline>{'s_n'}</MathInline> can be slid
          together to form a single rectangle of width <MathInline>{'(b-a)/n'}</MathInline>{' '}
          and height <MathInline>{'f(b) - f(a)'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Setting <MathInline>{'C = (b-a)[f(b) - f(a)]'}</MathInline>, we have:
      </p>

      <MathBlock>{'0 \\leq \\overline{I}(f) - \\underline{I}(f) \\leq \\frac{C}{n}'}</MathBlock>

      <p className="text-dark-200 mb-6">
        for every positive integer <MathInline>{'n'}</MathInline>. Since{' '}
        <MathInline>{'C/n \\to 0'}</MathInline> as <MathInline>{'n \\to \\infty'}</MathInline>,
        we must have <MathInline>{'\\underline{I}(f) = \\overline{I}(f)'}</MathInline>, so{' '}
        <MathInline>{'f'}</MathInline> is integrable.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Computing Integrals of Monotonic Functions</h2>

      <p className="text-dark-200 mb-4">
        The proof not only establishes existence but suggests a method for computing integrals:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.13 (Computing Integrals of Increasing Functions)</p>
        <p className="mb-2">
          Assume <MathInline>{'f'}</MathInline> is increasing on <MathInline>{'[a, b]'}</MathInline>.
          Let <MathInline>{'x_k = a + k(b-a)/n'}</MathInline> for <MathInline>{'k = 0, 1, \\ldots, n'}</MathInline>.
          If <MathInline>{'I'}</MathInline> is any number satisfying:
        </p>
        <MathBlock>{'\\frac{b-a}{n} \\sum_{k=0}^{n-1} f(x_k) \\leq I \\leq \\frac{b-a}{n} \\sum_{k=1}^{n} f(x_k)'}</MathBlock>
        <p className="mt-2">
          for every <MathInline>{'n \\geq 1'}</MathInline>, then{' '}
          <MathInline>{'I = \\int_a^b f(x)\\,dx'}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.14 (Computing Integrals of Decreasing Functions)</p>
        <p className="mb-2">
          Assume <MathInline>{'f'}</MathInline> is decreasing on <MathInline>{'[a, b]'}</MathInline>.
          Let <MathInline>{'x_k = a + k(b-a)/n'}</MathInline>. If <MathInline>{'I'}</MathInline>{' '}
          satisfies:
        </p>
        <MathBlock>{'\\frac{b-a}{n} \\sum_{k=1}^{n} f(x_k) \\leq I \\leq \\frac{b-a}{n} \\sum_{k=0}^{n-1} f(x_k)'}</MathBlock>
        <p className="mt-2">
          for every <MathInline>{'n \\geq 1'}</MathInline>, then{' '}
          <MathInline>{'I = \\int_a^b f(x)\\,dx'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Application: Integrating Power Functions</h2>

      <p className="text-dark-200 mb-4">
        Using Theorem 1.13, we can calculate <MathInline>{'\\int_0^b x^p\\,dx'}</MathInline>:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.15 (Integral of Power Functions)</p>
        <p className="mb-2">
          If <MathInline>{'p'}</MathInline> is a positive integer and{' '}
          <MathInline>{'b > 0'}</MathInline>, then:
        </p>
        <MathBlock>{'\\int_0^b x^p\\,dx = \\frac{b^{p+1}}{p+1}'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Proof Sketch</p>
        <p className="mb-2">
          The key is the inequality (provable by induction):
        </p>
        <MathBlock>{'\\sum_{k=1}^{n-1} k^p < \\frac{n^{p+1}}{p+1} < \\sum_{k=1}^{n} k^p'}</MathBlock>
        <p className="mt-2">
          Multiplying by <MathInline>{'b^{p+1}/n^{p+1}'}</MathInline> and using{' '}
          <MathInline>{'x_k = kb/n'}</MathInline> gives the inequalities of Theorem 1.13
          with <MathInline>{'I = b^{p+1}/(p+1)'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        More generally, for any real <MathInline>{'a'}</MathInline> and <MathInline>{'b'}</MathInline>:
      </p>

      <MathBlock>{'\\int_a^b x^p\\,dx = \\frac{b^{p+1} - a^{p+1}}{p+1}'}</MathBlock>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Monotonicity Matters</h2>

      <p className="text-dark-200 mb-4">
        The key insight is that for monotonic functions, the "gap" between upper and lower
        step approximations shrinks predictably:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          For an increasing function, the difference{' '}
          <MathInline>{'t_n(x) - s_n(x)'}</MathInline> on each subinterval equals the
          total "rise" of <MathInline>{'f'}</MathInline> on that subinterval
        </li>
        <li>
          These rises telescope: the total gap is{' '}
          <MathInline>{'(b-a)[f(b) - f(a)]/n'}</MathInline>
        </li>
        <li>
          Making <MathInline>{'n'}</MathInline> larger makes the gap arbitrarily small
        </li>
        <li>
          This forces <MathInline>{'\\underline{I}(f) = \\overline{I}(f)'}</MathInline>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        A function is monotonic if it is always increasing or always decreasing. The
        fundamental theorem states that every monotonic function on{' '}
        <MathInline>{'[a, b]'}</MathInline> is integrable. The proof constructs step function
        approximations using equal partitions and shows the gap between upper and lower
        integrals is <MathInline>{'O(1/n)'}</MathInline>. This result, combined with the
        additivity property, means that piecewise monotonic functions (including polynomials)
        are integrable, covering most functions encountered in practice.
      </p>
    </LessonLayout>
  );
}
