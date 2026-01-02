import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mb-4">Indefinite Integrals</h2>

      <p className="text-dark-200 mb-6">
        In this section we study the integral as a function of its upper limit. This perspective
        reveals deep connections between integration and other fundamental concepts, and provides
        a powerful tool for evaluating definite integrals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Integral as a Function of the Upper Limit</h2>

      <p className="text-dark-200 mb-4">
        Assume <InlineMath>{'f'}</InlineMath> is a function such that the integral{' '}
        <InlineMath>{'\\int_a^x f(t)\\,dt'}</InlineMath> exists for each{' '}
        <InlineMath>{'x'}</InlineMath> in an interval <InlineMath>{'[a, b]'}</InlineMath>. We keep{' '}
        <InlineMath>{'a'}</InlineMath> and <InlineMath>{'f'}</InlineMath> fixed and study this
        integral as a function of <InlineMath>{'x'}</InlineMath>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Indefinite Integral</p>
        <p className="mb-2">
          Define the function <InlineMath>{'A'}</InlineMath> by:
        </p>
        <MathBlock>{'A(x) = \\int_a^x f(t)\\,dt \\quad \\text{if } a \\leq x \\leq b'}</MathBlock>
        <p className="mt-2">
          This function <InlineMath>{'A'}</InlineMath> is called an <strong>indefinite integral</strong>{' '}
          of <InlineMath>{'f'}</InlineMath>, and is said to be obtained from{' '}
          <InlineMath>{'f'}</InlineMath> by integration.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        We say <em>an</em> indefinite integral rather than <em>the</em> indefinite integral because{' '}
        <InlineMath>{'A'}</InlineMath> also depends on the lower limit{' '}
        <InlineMath>{'a'}</InlineMath>. Different values of <InlineMath>{'a'}</InlineMath> lead to
        different functions.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Indefinite Integrals Differ by a Constant</h3>

      <p className="text-dark-200 mb-4">
        If we use a different lower limit, say <InlineMath>{'c'}</InlineMath>, and define another
        indefinite integral <InlineMath>{'F'}</InlineMath> by{' '}
        <InlineMath>{'F(x) = \\int_c^x f(t)\\,dt'}</InlineMath>, then by the additive property:
      </p>

      <MathBlock>{'A(x) - F(x) = \\int_a^x f(t)\\,dt - \\int_c^x f(t)\\,dt = \\int_a^c f(t)\\,dt'}</MathBlock>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Uniqueness up to a Constant</p>
        <p>
          Any two indefinite integrals of the same function differ only by a constant. The constant
          depends on the choice of lower limits.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Evaluating Definite Integrals</h2>

      <p className="text-dark-200 mb-4">
        When an indefinite integral of <InlineMath>{'f'}</InlineMath> is known, the value of a
        definite integral may be evaluated by a simple subtraction.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Power Functions</p>
        <p className="mb-2">
          From Theorem 1.15, for nonnegative integer <InlineMath>{'n'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_0^x t^n\\,dt = \\frac{x^{n+1}}{n+1}'}</MathBlock>
        <p className="mt-2 mb-2">The additive property gives:</p>
        <MathBlock>{'\\int_a^b t^n\\,dt = \\int_0^b t^n\\,dt - \\int_0^a t^n\\,dt = \\frac{b^{n+1} - a^{n+1}}{n+1}'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Evaluation Notation</h3>

      <p className="text-dark-200 mb-4">
        In general, if <InlineMath>{'F(x) = \\int_c^x f(t)\\,dt'}</InlineMath>, then:
      </p>

      <MathBlock>{'\\int_a^b f(t)\\,dt = \\int_c^b f(t)\\,dt - \\int_c^a f(t)\\,dt = F(b) - F(a)'}</MathBlock>

      <Callout type="info">
        <p className="font-semibold mb-2">Evaluation Notation</p>
        <p className="mb-2">
          We use the special symbol <InlineMath>{'F(x)\\Big|_a^b'}</InlineMath> to denote the
          difference <InlineMath>{'F(b) - F(a)'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)'}</MathBlock>
        <p className="mt-2">
          A different choice of <InlineMath>{'c'}</InlineMath> merely changes{' '}
          <InlineMath>{'F(x)'}</InlineMath> by a constant; this does not alter the difference{' '}
          <InlineMath>{'F(b) - F(a)'}</InlineMath> because the constant cancels in the subtraction.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Geometric Interpretation</h2>

      <p className="text-dark-200 mb-4">
        There is a simple geometric relationship between a function{' '}
        <InlineMath>{'f'}</InlineMath> and its indefinite integrals:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          If <InlineMath>{'f'}</InlineMath> is <strong>nonnegative</strong>, then{' '}
          <InlineMath>{'A(x)'}</InlineMath> equals the area of the region under the graph of{' '}
          <InlineMath>{'f'}</InlineMath> from <InlineMath>{'a'}</InlineMath> to{' '}
          <InlineMath>{'x'}</InlineMath>
        </li>
        <li>
          If <InlineMath>{'f'}</InlineMath> takes both <strong>positive and negative</strong> values,
          then <InlineMath>{'A(x)'}</InlineMath> gives the sum of areas above the{' '}
          <InlineMath>{'x'}</InlineMath>-axis minus the sum of areas below it
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Many functions in science arise exactly this way, as indefinite integrals of other functions.
        This is one reason that a large part of calculus is devoted to studying indefinite integrals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Indefinite Integrals</h2>

      <p className="text-dark-200 mb-4">
        A special property of <InlineMath>{'f'}</InlineMath> often implies a corresponding property
        of its indefinite integral.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Monotonicity of the Indefinite Integral</p>
        <p className="mb-2">
          If <InlineMath>{'f'}</InlineMath> is nonnegative on <InlineMath>{'[a, b]'}</InlineMath>,
          then the indefinite integral <InlineMath>{'A'}</InlineMath> is increasing, since for{' '}
          <InlineMath>{'a \\leq x < y \\leq b'}</InlineMath>:
        </p>
        <MathBlock>{'A(y) - A(x) = \\int_a^y f(t)\\,dt - \\int_a^x f(t)\\,dt = \\int_x^y f(t)\\,dt \\geq 0'}</MathBlock>
        <p className="mt-2">
          Geometrically: the area under a nonnegative function cannot decrease as{' '}
          <InlineMath>{'x'}</InlineMath> increases.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Convexity and Concavity</h2>

      <p className="text-dark-200 mb-4">
        Now we discuss a property which is not immediately evident geometrically.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Convex and Concave Functions</p>
        <p className="mb-2">
          A function <InlineMath>{'g'}</InlineMath> is said to be <strong>convex</strong> on an
          interval <InlineMath>{'[a, b]'}</InlineMath> if, for all <InlineMath>{'x'}</InlineMath>{' '}
          and <InlineMath>{'y'}</InlineMath> in <InlineMath>{'[a, b]'}</InlineMath> and for every{' '}
          <InlineMath>{'\\alpha'}</InlineMath> satisfying{' '}
          <InlineMath>{'0 < \\alpha < 1'}</InlineMath>:
        </p>
        <MathBlock>{'g(z) \\leq \\alpha g(y) + (1 - \\alpha)g(x), \\quad \\text{where } z = \\alpha y + (1 - \\alpha)x'}</MathBlock>
        <p className="mt-3 mb-2">
          We say <InlineMath>{'g'}</InlineMath> is <strong>concave</strong> on{' '}
          <InlineMath>{'[a, b]'}</InlineMath> if the reverse inequality holds:
        </p>
        <MathBlock>{'g(z) \\geq \\alpha g(y) + (1 - \\alpha)g(x)'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        These inequalities have a simple geometric interpretation:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          The point <InlineMath>{'z = \\alpha y + (1 - \\alpha)x'}</InlineMath> divides the interval{' '}
          <InlineMath>{'[x, y]'}</InlineMath> into two subintervals, with{' '}
          <InlineMath>{'[x, z]'}</InlineMath> having length <InlineMath>{'\\alpha'}</InlineMath>{' '}
          times that of <InlineMath>{'[x, y]'}</InlineMath>
        </li>
        <li>
          <strong>Convex:</strong> The graph of <InlineMath>{'g'}</InlineMath> never goes{' '}
          <em>above</em> the chord joining any two points (graph bends upward)
        </li>
        <li>
          <strong>Concave:</strong> The graph of <InlineMath>{'g'}</InlineMath> never goes{' '}
          <em>below</em> the chord (graph bends downward)
        </li>
      </ul>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.9 (Convexity of Indefinite Integrals)</p>
        <p>
          Let <InlineMath>{'A(x) = \\int_a^x f(t)\\,dt'}</InlineMath>. Then{' '}
          <InlineMath>{'A'}</InlineMath> is <strong>convex</strong> on every interval where{' '}
          <InlineMath>{'f'}</InlineMath> is increasing, and <strong>concave</strong> on every
          interval where <InlineMath>{'f'}</InlineMath> is decreasing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Sketch</h3>

      <p className="text-dark-200 mb-4">
        Assume <InlineMath>{'f'}</InlineMath> is increasing on <InlineMath>{'[a, b]'}</InlineMath>,
        choose <InlineMath>{'x < y'}</InlineMath>, and let{' '}
        <InlineMath>{'z = \\alpha y + (1 - \\alpha)x'}</InlineMath>. We need to prove:
      </p>

      <MathBlock>{'(1 - \\alpha)\\int_x^z f(t)\\,dt \\leq \\alpha \\int_z^y f(t)\\,dt'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <InlineMath>{'f'}</InlineMath> is increasing:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <InlineMath>{'f(t) \\leq f(z)'}</InlineMath> for{' '}
          <InlineMath>{'x \\leq t \\leq z'}</InlineMath>
        </li>
        <li>
          <InlineMath>{'f(z) \\leq f(t)'}</InlineMath> for{' '}
          <InlineMath>{'z \\leq t \\leq y'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Integrating these inequalities and using{' '}
        <InlineMath>{'(1 - \\alpha)(z - x) = \\alpha(y - z)'}</InlineMath> completes the proof.
        When <InlineMath>{'f'}</InlineMath> is decreasing, apply the result to{' '}
        <InlineMath>{'-f'}</InlineMath>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Sine Function</p>
        <p className="mb-2">
          The cosine function decreases in the interval{' '}
          <InlineMath>{'[0, \\pi]'}</InlineMath>. Since{' '}
          <InlineMath>{'\\sin x = \\int_0^x \\cos t\\,dt'}</InlineMath>, the graph of the sine
          function is <strong>concave</strong> in <InlineMath>{'[0, \\pi]'}</InlineMath>.
        </p>
        <p>
          In <InlineMath>{'[\\pi, 2\\pi]'}</InlineMath>, the cosine increases, so the sine
          function is <strong>convex</strong>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Indefinite Integral of Step Functions</h2>

      <p className="text-dark-200 mb-4">
        Consider the greatest-integer function <InlineMath>{'f(x) = [x]'}</InlineMath> and its
        indefinite integral <InlineMath>{'A(x) = \\int_0^x [t]\\,dt'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Piecewise Linear Property</p>
        <p className="mb-2">
          On those intervals where <InlineMath>{'f'}</InlineMath> is constant, the function{' '}
          <InlineMath>{'A'}</InlineMath> is linear. We describe this by saying:
        </p>
        <p className="font-medium">
          The integral of a step function is piecewise linear.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Observe that while the graph of the step function <InlineMath>{'f'}</InlineMath> is made
        up of disconnected line segments with sudden jumps, the corresponding indefinite integral
        does <em>not</em> exhibit this behavior. A small change in <InlineMath>{'x'}</InlineMath>{' '}
        produces only a small change in <InlineMath>{'A(x)'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Continuity of Indefinite Integrals</h2>

      <p className="text-dark-200 mb-4">
        This illustrates a general property of indefinite integrals known as <strong>continuity</strong>.
        In the next chapter we shall discuss the concept of continuity in detail and prove that
        the indefinite integral is always a continuous function.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Preview: Continuity</p>
        <p>
          Even when <InlineMath>{'f'}</InlineMath> has jump discontinuities (like the
          greatest-integer function), its indefinite integral{' '}
          <InlineMath>{'A(x) = \\int_a^x f(t)\\,dt'}</InlineMath> is always continuous. The
          integration process "smooths out" the discontinuities.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Indefinite integral:</strong>{' '}
          <InlineMath>{'A(x) = \\int_a^x f(t)\\,dt'}</InlineMath> is a function of the upper limit
        </li>
        <li>
          <strong>Uniqueness:</strong> Two indefinite integrals of the same function differ only by
          a constant
        </li>
        <li>
          <strong>Evaluation:</strong>{' '}
          <InlineMath>{'\\int_a^b f(x)\\,dx = F(b) - F(a)'}</InlineMath>
        </li>
        <li>
          <strong>Monotonicity:</strong> If <InlineMath>{'f \\geq 0'}</InlineMath>, then{' '}
          <InlineMath>{'A'}</InlineMath> is increasing
        </li>
        <li>
          <strong>Convexity:</strong> If <InlineMath>{'f'}</InlineMath> is increasing,{' '}
          <InlineMath>{'A'}</InlineMath> is convex; if <InlineMath>{'f'}</InlineMath> is
          decreasing, <InlineMath>{'A'}</InlineMath> is concave
        </li>
        <li>
          <strong>Step functions:</strong> The integral of a step function is piecewise linear
        </li>
        <li>
          <strong>Continuity:</strong> The indefinite integral is always continuous
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The indefinite integral provides a bridge between integration and other fundamental
        concepts. In the next part of the course, we will explore continuous functions and then
        establish the deep connection between differentiation and integration through the
        Fundamental Theorem of Calculus.
      </p>
    </LessonLayout>
  );
}
