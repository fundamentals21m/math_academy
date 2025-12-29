import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Assume <MathInline>{'f'}</MathInline> is a function such that the integral{' '}
        <MathInline>{'\\int_a^x f(t)\\,dt'}</MathInline> exists for each{' '}
        <MathInline>{'x'}</MathInline> in an interval <MathInline>{'[a, b]'}</MathInline>. We keep{' '}
        <MathInline>{'a'}</MathInline> and <MathInline>{'f'}</MathInline> fixed and study this
        integral as a function of <MathInline>{'x'}</MathInline>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Indefinite Integral</p>
        <p className="mb-2">
          Define the function <MathInline>{'A'}</MathInline> by:
        </p>
        <MathBlock>{'A(x) = \\int_a^x f(t)\\,dt \\quad \\text{if } a \\leq x \\leq b'}</MathBlock>
        <p className="mt-2">
          This function <MathInline>{'A'}</MathInline> is called an <strong>indefinite integral</strong>{' '}
          of <MathInline>{'f'}</MathInline>, and is said to be obtained from{' '}
          <MathInline>{'f'}</MathInline> by integration.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        We say <em>an</em> indefinite integral rather than <em>the</em> indefinite integral because{' '}
        <MathInline>{'A'}</MathInline> also depends on the lower limit{' '}
        <MathInline>{'a'}</MathInline>. Different values of <MathInline>{'a'}</MathInline> lead to
        different functions.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Indefinite Integrals Differ by a Constant</h3>

      <p className="text-dark-200 mb-4">
        If we use a different lower limit, say <MathInline>{'c'}</MathInline>, and define another
        indefinite integral <MathInline>{'F'}</MathInline> by{' '}
        <MathInline>{'F(x) = \\int_c^x f(t)\\,dt'}</MathInline>, then by the additive property:
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
        When an indefinite integral of <MathInline>{'f'}</MathInline> is known, the value of a
        definite integral may be evaluated by a simple subtraction.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Power Functions</p>
        <p className="mb-2">
          From Theorem 1.15, for nonnegative integer <MathInline>{'n'}</MathInline>:
        </p>
        <MathBlock>{'\\int_0^x t^n\\,dt = \\frac{x^{n+1}}{n+1}'}</MathBlock>
        <p className="mt-2 mb-2">The additive property gives:</p>
        <MathBlock>{'\\int_a^b t^n\\,dt = \\int_0^b t^n\\,dt - \\int_0^a t^n\\,dt = \\frac{b^{n+1} - a^{n+1}}{n+1}'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Evaluation Notation</h3>

      <p className="text-dark-200 mb-4">
        In general, if <MathInline>{'F(x) = \\int_c^x f(t)\\,dt'}</MathInline>, then:
      </p>

      <MathBlock>{'\\int_a^b f(t)\\,dt = \\int_c^b f(t)\\,dt - \\int_c^a f(t)\\,dt = F(b) - F(a)'}</MathBlock>

      <Callout type="info">
        <p className="font-semibold mb-2">Evaluation Notation</p>
        <p className="mb-2">
          We use the special symbol <MathInline>{'F(x)\\Big|_a^b'}</MathInline> to denote the
          difference <MathInline>{'F(b) - F(a)'}</MathInline>:
        </p>
        <MathBlock>{'\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)'}</MathBlock>
        <p className="mt-2">
          A different choice of <MathInline>{'c'}</MathInline> merely changes{' '}
          <MathInline>{'F(x)'}</MathInline> by a constant; this does not alter the difference{' '}
          <MathInline>{'F(b) - F(a)'}</MathInline> because the constant cancels in the subtraction.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Geometric Interpretation</h2>

      <p className="text-dark-200 mb-4">
        There is a simple geometric relationship between a function{' '}
        <MathInline>{'f'}</MathInline> and its indefinite integrals:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          If <MathInline>{'f'}</MathInline> is <strong>nonnegative</strong>, then{' '}
          <MathInline>{'A(x)'}</MathInline> equals the area of the region under the graph of{' '}
          <MathInline>{'f'}</MathInline> from <MathInline>{'a'}</MathInline> to{' '}
          <MathInline>{'x'}</MathInline>
        </li>
        <li>
          If <MathInline>{'f'}</MathInline> takes both <strong>positive and negative</strong> values,
          then <MathInline>{'A(x)'}</MathInline> gives the sum of areas above the{' '}
          <MathInline>{'x'}</MathInline>-axis minus the sum of areas below it
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Many functions in science arise exactly this way, as indefinite integrals of other functions.
        This is one reason that a large part of calculus is devoted to studying indefinite integrals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Indefinite Integrals</h2>

      <p className="text-dark-200 mb-4">
        A special property of <MathInline>{'f'}</MathInline> often implies a corresponding property
        of its indefinite integral.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Monotonicity of the Indefinite Integral</p>
        <p className="mb-2">
          If <MathInline>{'f'}</MathInline> is nonnegative on <MathInline>{'[a, b]'}</MathInline>,
          then the indefinite integral <MathInline>{'A'}</MathInline> is increasing, since for{' '}
          <MathInline>{'a \\leq x < y \\leq b'}</MathInline>:
        </p>
        <MathBlock>{'A(y) - A(x) = \\int_a^y f(t)\\,dt - \\int_a^x f(t)\\,dt = \\int_x^y f(t)\\,dt \\geq 0'}</MathBlock>
        <p className="mt-2">
          Geometrically: the area under a nonnegative function cannot decrease as{' '}
          <MathInline>{'x'}</MathInline> increases.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Convexity and Concavity</h2>

      <p className="text-dark-200 mb-4">
        Now we discuss a property which is not immediately evident geometrically.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Convex and Concave Functions</p>
        <p className="mb-2">
          A function <MathInline>{'g'}</MathInline> is said to be <strong>convex</strong> on an
          interval <MathInline>{'[a, b]'}</MathInline> if, for all <MathInline>{'x'}</MathInline>{' '}
          and <MathInline>{'y'}</MathInline> in <MathInline>{'[a, b]'}</MathInline> and for every{' '}
          <MathInline>{'\\alpha'}</MathInline> satisfying{' '}
          <MathInline>{'0 < \\alpha < 1'}</MathInline>:
        </p>
        <MathBlock>{'g(z) \\leq \\alpha g(y) + (1 - \\alpha)g(x), \\quad \\text{where } z = \\alpha y + (1 - \\alpha)x'}</MathBlock>
        <p className="mt-3 mb-2">
          We say <MathInline>{'g'}</MathInline> is <strong>concave</strong> on{' '}
          <MathInline>{'[a, b]'}</MathInline> if the reverse inequality holds:
        </p>
        <MathBlock>{'g(z) \\geq \\alpha g(y) + (1 - \\alpha)g(x)'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        These inequalities have a simple geometric interpretation:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          The point <MathInline>{'z = \\alpha y + (1 - \\alpha)x'}</MathInline> divides the interval{' '}
          <MathInline>{'[x, y]'}</MathInline> into two subintervals, with{' '}
          <MathInline>{'[x, z]'}</MathInline> having length <MathInline>{'\\alpha'}</MathInline>{' '}
          times that of <MathInline>{'[x, y]'}</MathInline>
        </li>
        <li>
          <strong>Convex:</strong> The graph of <MathInline>{'g'}</MathInline> never goes{' '}
          <em>above</em> the chord joining any two points (graph bends upward)
        </li>
        <li>
          <strong>Concave:</strong> The graph of <MathInline>{'g'}</MathInline> never goes{' '}
          <em>below</em> the chord (graph bends downward)
        </li>
      </ul>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.9 (Convexity of Indefinite Integrals)</p>
        <p>
          Let <MathInline>{'A(x) = \\int_a^x f(t)\\,dt'}</MathInline>. Then{' '}
          <MathInline>{'A'}</MathInline> is <strong>convex</strong> on every interval where{' '}
          <MathInline>{'f'}</MathInline> is increasing, and <strong>concave</strong> on every
          interval where <MathInline>{'f'}</MathInline> is decreasing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Sketch</h3>

      <p className="text-dark-200 mb-4">
        Assume <MathInline>{'f'}</MathInline> is increasing on <MathInline>{'[a, b]'}</MathInline>,
        choose <MathInline>{'x < y'}</MathInline>, and let{' '}
        <MathInline>{'z = \\alpha y + (1 - \\alpha)x'}</MathInline>. We need to prove:
      </p>

      <MathBlock>{'(1 - \\alpha)\\int_x^z f(t)\\,dt \\leq \\alpha \\int_z^y f(t)\\,dt'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Since <MathInline>{'f'}</MathInline> is increasing:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <MathInline>{'f(t) \\leq f(z)'}</MathInline> for{' '}
          <MathInline>{'x \\leq t \\leq z'}</MathInline>
        </li>
        <li>
          <MathInline>{'f(z) \\leq f(t)'}</MathInline> for{' '}
          <MathInline>{'z \\leq t \\leq y'}</MathInline>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Integrating these inequalities and using{' '}
        <MathInline>{'(1 - \\alpha)(z - x) = \\alpha(y - z)'}</MathInline> completes the proof.
        When <MathInline>{'f'}</MathInline> is decreasing, apply the result to{' '}
        <MathInline>{'-f'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Sine Function</p>
        <p className="mb-2">
          The cosine function decreases in the interval{' '}
          <MathInline>{'[0, \\pi]'}</MathInline>. Since{' '}
          <MathInline>{'\\sin x = \\int_0^x \\cos t\\,dt'}</MathInline>, the graph of the sine
          function is <strong>concave</strong> in <MathInline>{'[0, \\pi]'}</MathInline>.
        </p>
        <p>
          In <MathInline>{'[\\pi, 2\\pi]'}</MathInline>, the cosine increases, so the sine
          function is <strong>convex</strong>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Indefinite Integral of Step Functions</h2>

      <p className="text-dark-200 mb-4">
        Consider the greatest-integer function <MathInline>{'f(x) = [x]'}</MathInline> and its
        indefinite integral <MathInline>{'A(x) = \\int_0^x [t]\\,dt'}</MathInline>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Piecewise Linear Property</p>
        <p className="mb-2">
          On those intervals where <MathInline>{'f'}</MathInline> is constant, the function{' '}
          <MathInline>{'A'}</MathInline> is linear. We describe this by saying:
        </p>
        <p className="font-medium">
          The integral of a step function is piecewise linear.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Observe that while the graph of the step function <MathInline>{'f'}</MathInline> is made
        up of disconnected line segments with sudden jumps, the corresponding indefinite integral
        does <em>not</em> exhibit this behavior. A small change in <MathInline>{'x'}</MathInline>{' '}
        produces only a small change in <MathInline>{'A(x)'}</MathInline>.
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
          Even when <MathInline>{'f'}</MathInline> has jump discontinuities (like the
          greatest-integer function), its indefinite integral{' '}
          <MathInline>{'A(x) = \\int_a^x f(t)\\,dt'}</MathInline> is always continuous. The
          integration process "smooths out" the discontinuities.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Indefinite integral:</strong>{' '}
          <MathInline>{'A(x) = \\int_a^x f(t)\\,dt'}</MathInline> is a function of the upper limit
        </li>
        <li>
          <strong>Uniqueness:</strong> Two indefinite integrals of the same function differ only by
          a constant
        </li>
        <li>
          <strong>Evaluation:</strong>{' '}
          <MathInline>{'\\int_a^b f(x)\\,dx = F(b) - F(a)'}</MathInline>
        </li>
        <li>
          <strong>Monotonicity:</strong> If <MathInline>{'f \\geq 0'}</MathInline>, then{' '}
          <MathInline>{'A'}</MathInline> is increasing
        </li>
        <li>
          <strong>Convexity:</strong> If <MathInline>{'f'}</MathInline> is increasing,{' '}
          <MathInline>{'A'}</MathInline> is convex; if <MathInline>{'f'}</MathInline> is
          decreasing, <MathInline>{'A'}</MathInline> is concave
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
