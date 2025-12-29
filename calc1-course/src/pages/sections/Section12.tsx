import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Basic Properties of the Integral</h2>

      <p className="text-dark-200 mb-6">
        Having defined the integral for bounded functions and proved that monotonic functions
        are integrable, we now establish the fundamental properties that make integration a
        powerful computational tool. These properties—linearity, additivity, and comparison—carry
        over from step functions to all integrable functions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Linearity of the Integral</h2>

      <p className="text-dark-200 mb-4">
        The most important computational property of the integral is <strong>linearity</strong>:
        the integral of a sum is the sum of the integrals, and constants can be pulled outside.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.16 (Linearity Property)</p>
        <p className="mb-2">
          If both <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> are integrable
          on <MathInline>{'[a, b]'}</MathInline>, then <MathInline>{'c_1 f + c_2 g'}</MathInline>{' '}
          is integrable for every pair of constants <MathInline>{'c_1'}</MathInline> and{' '}
          <MathInline>{'c_2'}</MathInline>, and:
        </p>
        <MathBlock>{'\\int_a^b [c_1 f(x) + c_2 g(x)]\\,dx = c_1 \\int_a^b f(x)\\,dx + c_2 \\int_a^b g(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        Linearity combines two properties:
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Components of Linearity</p>
        <p className="mb-2"><strong>Additive Property:</strong></p>
        <MathBlock>{'\\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx'}</MathBlock>
        <p className="mt-3 mb-2"><strong>Homogeneous Property:</strong></p>
        <MathBlock>{'\\int_a^b c \\cdot f(x)\\,dx = c \\int_a^b f(x)\\,dx'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Generalization to Multiple Functions</p>
        <p className="mb-2">
          By mathematical induction, linearity extends to any finite sum:
        </p>
        <MathBlock>{'\\int_a^b \\sum_{k=1}^{n} c_k f_k(x)\\,dx = \\sum_{k=1}^{n} c_k \\int_a^b f_k(x)\\,dx'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea for Linearity</h3>

      <p className="text-dark-200 mb-4">
        The key insight is that if <MathInline>{'s_1 \\leq f'}</MathInline> and{' '}
        <MathInline>{'s_2 \\leq g'}</MathInline> are step functions, then{' '}
        <MathInline>{'s_1 + s_2 \\leq f + g'}</MathInline>. This allows us to show:
      </p>

      <MathBlock>{'\\underline{I}(f) + \\underline{I}(g) \\leq \\underline{I}(f + g)'}</MathBlock>

      <p className="text-dark-200 mb-6">
        Similarly for upper integrals. Since <MathInline>{'f'}</MathInline> and{' '}
        <MathInline>{'g'}</MathInline> are integrable, these inequalities force{' '}
        <MathInline>{'f + g'}</MathInline> to be integrable with the expected value.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Additivity Over Intervals</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.17 (Additivity with Respect to the Interval)</p>
        <p className="mb-2">
          If two of the following three integrals exist, the third also exists, and:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        This property allows us to split an integral over an interval into pieces, or combine
        integrals over adjacent intervals.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Application: Piecewise Functions</p>
        <p>
          If <MathInline>{'f'}</MathInline> is monotonic on <MathInline>{'[a, b]'}</MathInline>{' '}
          and also on <MathInline>{'[b, c]'}</MathInline>, then both{' '}
          <MathInline>{'\\int_a^b f'}</MathInline> and <MathInline>{'\\int_b^c f'}</MathInline>{' '}
          exist, so <MathInline>{'\\int_a^c f'}</MathInline> also exists and equals their sum.
          This means <strong>piecewise monotonic functions are integrable</strong>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Translation Invariance</h2>

      <p className="text-dark-200 mb-4">
        Shifting a function horizontally doesn't change the value of the integral—it just
        shifts the interval of integration:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.18 (Invariance Under Translation)</p>
        <p className="mb-2">
          If <MathInline>{'f'}</MathInline> is integrable on <MathInline>{'[a, b]'}</MathInline>,
          then for every real <MathInline>{'c'}</MathInline>:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx = \\int_{a+c}^{b+c} f(x - c)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Geometrically: shifting the graph of <MathInline>{'f'}</MathInline> by{' '}
        <MathInline>{'c'}</MathInline> units to the right produces a congruent ordinate set,
        which has the same area.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Scaling the Interval</h2>

      <p className="text-dark-200 mb-4">
        Stretching or compressing the interval scales the integral accordingly:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.19 (Expansion or Contraction of Interval)</p>
        <p className="mb-2">
          If <MathInline>{'f'}</MathInline> is integrable on <MathInline>{'[a, b]'}</MathInline>,
          then for every <MathInline>{'k \\neq 0'}</MathInline>:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx = \\frac{1}{k} \\int_{ka}^{kb} f\\left(\\frac{x}{k}\\right)\\,dx'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Special Case: Reflection Property</p>
        <p className="mb-2">
          When <MathInline>{'k = -1'}</MathInline>, Theorem 1.19 gives the <strong>reflection property</strong>:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx = \\int_{-b}^{-a} f(-x)\\,dx'}</MathBlock>
        <p className="mt-2">
          Reflecting the graph through the <MathInline>{'y'}</MathInline>-axis preserves the
          integral (with reflected limits).
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Comparison Theorem</h2>

      <p className="text-dark-200 mb-4">
        If one function dominates another everywhere, the same inequality holds for their integrals:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 1.20 (Comparison Theorem)</p>
        <p className="mb-2">
          If both <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> are integrable
          on <MathInline>{'[a, b]'}</MathInline> and <MathInline>{'g(x) \\leq f(x)'}</MathInline>{' '}
          for every <MathInline>{'x'}</MathInline> in <MathInline>{'[a, b]'}</MathInline>, then:
        </p>
        <MathBlock>{'\\int_a^b g(x)\\,dx \\leq \\int_a^b f(x)\\,dx'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Important Special Case</p>
        <p className="mb-2">
          Taking <MathInline>{'g(x) = 0'}</MathInline>: if <MathInline>{'f(x) \\geq 0'}</MathInline>{' '}
          for all <MathInline>{'x'}</MathInline> in <MathInline>{'[a, b]'}</MathInline>, then:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx \\geq 0'}</MathBlock>
        <p className="mt-2">
          A nonnegative function has a nonnegative integral.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof of the Comparison Theorem</h3>

      <p className="text-dark-200 mb-6">
        If <MathInline>{'s'}</MathInline> is any step function below{' '}
        <MathInline>{'g'}</MathInline> and <MathInline>{'t'}</MathInline> is any step function
        above <MathInline>{'f'}</MathInline>, then <MathInline>{'\\int_a^b s \\leq \\int_a^b t'}</MathInline>.
        Taking the supremum over <MathInline>{'s'}</MathInline> and infimum over{' '}
        <MathInline>{'t'}</MathInline> gives <MathInline>{'\\int_a^b g \\leq \\int_a^b f'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Applications of the Properties</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Integrating Polynomials</h3>

      <p className="text-dark-200 mb-4">
        Using linearity and the power rule <MathInline>{'\\int_a^b x^p\\,dx = \\frac{b^{p+1} - a^{p+1}}{p+1}'}</MathInline>,
        we can integrate any polynomial:
      </p>

      <MathBlock>{'\\int_a^b \\sum_{k=0}^{n} c_k x^k\\,dx = \\sum_{k=0}^{n} c_k \\frac{b^{k+1} - a^{k+1}}{k+1}'}</MathBlock>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Integrate a Polynomial</p>
        <p className="mb-2">
          Compute <MathInline>{'\\int_1^3 (x^2 - 3x + 5)\\,dx'}</MathInline>:
        </p>
        <MathBlock>{'\\int_1^3 (x^2 - 3x + 5)\\,dx = \\left[\\frac{x^3}{3} - \\frac{3x^2}{2} + 5x\\right]_1^3'}</MathBlock>
        <MathBlock>{'= \\left(9 - \\frac{27}{2} + 15\\right) - \\left(\\frac{1}{3} - \\frac{3}{2} + 5\\right) = \\frac{20}{3}'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Even and Odd Functions</h3>

      <Callout type="info">
        <p className="font-semibold mb-2">Symmetry Properties</p>
        <p className="mb-2">
          If <MathInline>{'f'}</MathInline> is integrable on <MathInline>{'[0, b]'}</MathInline>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            If <MathInline>{'f'}</MathInline> is <strong>even</strong> (<MathInline>{'f(-x) = f(x)'}</MathInline>):{' '}
            <MathInline>{'\\int_{-b}^{b} f(x)\\,dx = 2\\int_0^b f(x)\\,dx'}</MathInline>
          </li>
          <li>
            If <MathInline>{'f'}</MathInline> is <strong>odd</strong> (<MathInline>{'f(-x) = -f(x)'}</MathInline>):{' '}
            <MathInline>{'\\int_{-b}^{b} f(x)\\,dx = 0'}</MathInline>
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary of Properties</h2>

      <p className="text-dark-200 mb-4">
        Here is a complete list of the basic properties of the integral:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Linearity:</strong>{' '}
          <MathInline>{'\\int(c_1 f + c_2 g) = c_1 \\int f + c_2 \\int g'}</MathInline>
        </li>
        <li>
          <strong>Interval additivity:</strong>{' '}
          <MathInline>{'\\int_a^b f + \\int_b^c f = \\int_a^c f'}</MathInline>
        </li>
        <li>
          <strong>Translation:</strong>{' '}
          <MathInline>{'\\int_a^b f(x)\\,dx = \\int_{a+c}^{b+c} f(x-c)\\,dx'}</MathInline>
        </li>
        <li>
          <strong>Scaling:</strong>{' '}
          <MathInline>{'\\int_a^b f(x)\\,dx = \\frac{1}{k}\\int_{ka}^{kb} f(x/k)\\,dx'}</MathInline>
        </li>
        <li>
          <strong>Comparison:</strong> If <MathInline>{'g \\leq f'}</MathInline>, then{' '}
          <MathInline>{'\\int g \\leq \\int f'}</MathInline>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        These properties, originally proved for step functions, extend to all integrable
        functions. They form the computational foundation for integration, allowing us to
        evaluate integrals by breaking them into simpler pieces, using known formulas, and
        exploiting symmetry.
      </p>
    </LessonLayout>
  );
}
