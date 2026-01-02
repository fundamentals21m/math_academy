import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

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
          A function <InlineMath>{'f'}</InlineMath> is <strong>increasing</strong> on a set{' '}
          <InlineMath>{'S'}</InlineMath> if:
        </p>
        <MathBlock>{'f(x) \\leq f(y) \\quad \\text{whenever } x < y \\text{ in } S'}</MathBlock>
        <p className="mt-2 mb-2">
          It is <strong>strictly increasing</strong> if the strict inequality{' '}
          <InlineMath>{'f(x) < f(y)'}</InlineMath> holds for all <InlineMath>{'x < y'}</InlineMath>.
        </p>
        <p className="mb-2">
          Similarly, <InlineMath>{'f'}</InlineMath> is <strong>decreasing</strong> on{' '}
          <InlineMath>{'S'}</InlineMath> if:
        </p>
        <MathBlock>{'f(x) \\geq f(y) \\quad \\text{whenever } x < y \\text{ in } S'}</MathBlock>
        <p className="mt-2">
          It is <strong>strictly decreasing</strong> if <InlineMath>{'f(x) > f(y)'}</InlineMath>{' '}
          for all <InlineMath>{'x < y'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Monotonic Functions</p>
        <p>
          A function is <strong>monotonic</strong> on <InlineMath>{'S'}</InlineMath> if it is
          either increasing on <InlineMath>{'S'}</InlineMath> or decreasing on{' '}
          <InlineMath>{'S'}</InlineMath>. It is <strong>strictly monotonic</strong> if it is
          strictly increasing or strictly decreasing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Piecewise Monotonic Functions</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Piecewise Monotonic</p>
        <p>
          A function <InlineMath>{'f'}</InlineMath> is <strong>piecewise monotonic</strong>{' '}
          on <InlineMath>{'[a, b]'}</InlineMath> if there exists a partition{' '}
          <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath> such that{' '}
          <InlineMath>{'f'}</InlineMath> is monotonic on each open subinterval of{' '}
          <InlineMath>{'P'}</InlineMath>.
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
          For any positive integer <InlineMath>{'p'}</InlineMath>, the function{' '}
          <InlineMath>{'f(x) = x^p'}</InlineMath> satisfies:
        </p>
        <MathBlock>{'x^p < y^p \\quad \\text{if } 0 \\leq x < y'}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{'f(x) = x^p'}</InlineMath> is strictly increasing on{' '}
          <InlineMath>{'[0, \\infty)'}</InlineMath>. On the negative real axis, it is
          decreasing if <InlineMath>{'p'}</InlineMath> is even and increasing if{' '}
          <InlineMath>{'p'}</InlineMath> is odd. Thus <InlineMath>{'x^p'}</InlineMath> is
          piecewise monotonic on every finite interval.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Square Root Function</p>
        <p className="mb-2">
          Let <InlineMath>{'f(x) = \\sqrt{x}'}</InlineMath> for <InlineMath>{'x \\geq 0'}</InlineMath>.
          If <InlineMath>{'0 \\leq x < y'}</InlineMath>, then:
        </p>
        <MathBlock>{'\\sqrt{y} - \\sqrt{x} = \\frac{y - x}{\\sqrt{y} + \\sqrt{x}} > 0'}</MathBlock>
        <p className="mt-2">
          Hence <InlineMath>{'\\sqrt{x}'}</InlineMath> is strictly increasing on{' '}
          <InlineMath>{'[0, \\infty)'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: Semicircle</p>
        <p className="mb-2">
          The function <InlineMath>{'g(x) = \\sqrt{r^2 - x^2}'}</InlineMath> for{' '}
          <InlineMath>{'-r \\leq x \\leq r'}</InlineMath> has a semicircular graph.
        </p>
        <p>
          It is strictly increasing on <InlineMath>{'[-r, 0]'}</InlineMath> and strictly
          decreasing on <InlineMath>{'[0, r]'}</InlineMath>. Hence{' '}
          <InlineMath>{'g'}</InlineMath> is piecewise monotonic on{' '}
          <InlineMath>{'[-r, r]'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Integrability of Monotonic Functions</h2>

      <p className="text-dark-200 mb-4">
        The fundamental result of this section establishes that monotonic functions are integrable:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.12 (Integrability of Monotonic Functions)</p>
        <p>
          If <InlineMath>{'f'}</InlineMath> is monotonic on a closed interval{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> is
          integrable on <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        We prove the theorem for increasing functions (the decreasing case is analogous).
        The strategy is to construct special step functions that squeeze{' '}
        <InlineMath>{'f'}</InlineMath> and show that their integrals can be made arbitrarily close.
      </p>

      <p className="text-dark-200 mb-4">
        Partition <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>{'n'}</InlineMath> equal
        subintervals with points <InlineMath>{'x_k = a + k(b-a)/n'}</InlineMath>. Define step
        functions:
      </p>

      <MathBlock>{'s_n(x) = f(x_{k-1}) \\quad \\text{and} \\quad t_n(x) = f(x_k) \\quad \\text{for } x_{k-1} < x < x_k'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <InlineMath>{'f'}</InlineMath> is increasing, we have{' '}
        <InlineMath>{'s_n(x) \\leq f(x) \\leq t_n(x)'}</InlineMath> throughout{' '}
        <InlineMath>{'[a, b]'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Calculation</p>
        <p className="mb-2">
          The difference between the upper and lower approximations is:
        </p>
        <MathBlock>{'\\int_a^b t_n - \\int_a^b s_n = \\frac{b-a}{n} \\sum_{k=1}^{n}[f(x_k) - f(x_{k-1})] = \\frac{(b-a)[f(b) - f(a)]}{n}'}</MathBlock>
        <p className="mt-2">
          The sum telescopes! Geometrically, the shaded rectangles between{' '}
          <InlineMath>{'t_n'}</InlineMath> and <InlineMath>{'s_n'}</InlineMath> can be slid
          together to form a single rectangle of width <InlineMath>{'(b-a)/n'}</InlineMath>{' '}
          and height <InlineMath>{'f(b) - f(a)'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Setting <InlineMath>{'C = (b-a)[f(b) - f(a)]'}</InlineMath>, we have:
      </p>

      <MathBlock>{'0 \\leq \\overline{I}(f) - \\underline{I}(f) \\leq \\frac{C}{n}'}</MathBlock>

      <p className="text-dark-200 mb-6">
        for every positive integer <InlineMath>{'n'}</InlineMath>. Since{' '}
        <InlineMath>{'C/n \\to 0'}</InlineMath> as <InlineMath>{'n \\to \\infty'}</InlineMath>,
        we must have <InlineMath>{'\\underline{I}(f) = \\overline{I}(f)'}</InlineMath>, so{' '}
        <InlineMath>{'f'}</InlineMath> is integrable.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Computing Integrals of Monotonic Functions</h2>

      <p className="text-dark-200 mb-4">
        The proof not only establishes existence but suggests a method for computing integrals:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.13 (Computing Integrals of Increasing Functions)</p>
        <p className="mb-2">
          Assume <InlineMath>{'f'}</InlineMath> is increasing on <InlineMath>{'[a, b]'}</InlineMath>.
          Let <InlineMath>{'x_k = a + k(b-a)/n'}</InlineMath> for <InlineMath>{'k = 0, 1, \\ldots, n'}</InlineMath>.
          If <InlineMath>{'I'}</InlineMath> is any number satisfying:
        </p>
        <MathBlock>{'\\frac{b-a}{n} \\sum_{k=0}^{n-1} f(x_k) \\leq I \\leq \\frac{b-a}{n} \\sum_{k=1}^{n} f(x_k)'}</MathBlock>
        <p className="mt-2">
          for every <InlineMath>{'n \\geq 1'}</InlineMath>, then{' '}
          <InlineMath>{'I = \\int_a^b f(x)\\,dx'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.14 (Computing Integrals of Decreasing Functions)</p>
        <p className="mb-2">
          Assume <InlineMath>{'f'}</InlineMath> is decreasing on <InlineMath>{'[a, b]'}</InlineMath>.
          Let <InlineMath>{'x_k = a + k(b-a)/n'}</InlineMath>. If <InlineMath>{'I'}</InlineMath>{' '}
          satisfies:
        </p>
        <MathBlock>{'\\frac{b-a}{n} \\sum_{k=1}^{n} f(x_k) \\leq I \\leq \\frac{b-a}{n} \\sum_{k=0}^{n-1} f(x_k)'}</MathBlock>
        <p className="mt-2">
          for every <InlineMath>{'n \\geq 1'}</InlineMath>, then{' '}
          <InlineMath>{'I = \\int_a^b f(x)\\,dx'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Application: Integrating Power Functions</h2>

      <p className="text-dark-200 mb-4">
        Using Theorem 1.13, we can calculate <InlineMath>{'\\int_0^b x^p\\,dx'}</InlineMath>:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.15 (Integral of Power Functions)</p>
        <p className="mb-2">
          If <InlineMath>{'p'}</InlineMath> is a positive integer and{' '}
          <InlineMath>{'b > 0'}</InlineMath>, then:
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
          Multiplying by <InlineMath>{'b^{p+1}/n^{p+1}'}</InlineMath> and using{' '}
          <InlineMath>{'x_k = kb/n'}</InlineMath> gives the inequalities of Theorem 1.13
          with <InlineMath>{'I = b^{p+1}/(p+1)'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        More generally, for any real <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath>:
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
          <InlineMath>{'t_n(x) - s_n(x)'}</InlineMath> on each subinterval equals the
          total "rise" of <InlineMath>{'f'}</InlineMath> on that subinterval
        </li>
        <li>
          These rises telescope: the total gap is{' '}
          <InlineMath>{'(b-a)[f(b) - f(a)]/n'}</InlineMath>
        </li>
        <li>
          Making <InlineMath>{'n'}</InlineMath> larger makes the gap arbitrarily small
        </li>
        <li>
          This forces <InlineMath>{'\\underline{I}(f) = \\overline{I}(f)'}</InlineMath>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        A function is monotonic if it is always increasing or always decreasing. The
        fundamental theorem states that every monotonic function on{' '}
        <InlineMath>{'[a, b]'}</InlineMath> is integrable. The proof constructs step function
        approximations using equal partitions and shows the gap between upper and lower
        integrals is <InlineMath>{'O(1/n)'}</InlineMath>. This result, combined with the
        additivity property, means that piecewise monotonic functions (including polynomials)
        are integrable, covering most functions encountered in practice.
      </p>
    </LessonLayout>
  );
}
