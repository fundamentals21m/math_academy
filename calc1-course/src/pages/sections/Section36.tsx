import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <p>
        The first fundamental theorem told us that differentiating an indefinite integral
        gives back the original function. Now we explore the reverse question: if we know
        a function whose derivative is <InlineMath>{`f`}</InlineMath>, can we use it to evaluate
        integrals of <InlineMath>{`f`}</InlineMath>?
      </p>

      <p>
        The answer is yes, and this is the content of the <strong>second fundamental theorem</strong>.
        This theorem is the workhorse of practical integration—it transforms the problem of
        computing areas into the problem of finding antiderivatives.
      </p>

      <h2>Primitive Functions</h2>

      <Callout type="definition" title="Primitive (Antiderivative)">
        <p>
          A function <InlineMath>{`P`}</InlineMath> is called a <strong>primitive</strong> (or
          <strong> antiderivative</strong>) of <InlineMath>{`f`}</InlineMath> on an interval
          <InlineMath>{`[a, b]`}</InlineMath> if <InlineMath>{`P`}</InlineMath> is continuous on
          <InlineMath>{`[a, b]`}</InlineMath> and if
        </p>
        <MathBlock>{`P'(x) = f(x)`}</MathBlock>
        <p>
          for all <InlineMath>{`x`}</InlineMath> in the open interval <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Primitives Differ by Constants">
        <p>
          If <InlineMath>{`P`}</InlineMath> is a primitive of <InlineMath>{`f`}</InlineMath>, then so is
          <InlineMath>{`P + C`}</InlineMath> for any constant <InlineMath>{`C`}</InlineMath>. Conversely,
          if <InlineMath>{`P`}</InlineMath> and <InlineMath>{`Q`}</InlineMath> are both primitives of
          <InlineMath>{`f`}</InlineMath> on an interval, then they differ by a constant:
        </p>
        <MathBlock>{`Q(x) - P(x) = C \\quad \\text{for all } x \\text{ in the interval.}`}</MathBlock>
        <p>
          This follows from the fact that if two functions have the same derivative on an
          interval, their difference has derivative zero, and hence is constant.
        </p>
      </Callout>

      <h2>The Second Fundamental Theorem</h2>

      <Callout type="theorem" title="Theorem 5.3 (Second Fundamental Theorem of Calculus)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is integrable on <InlineMath>{`[a, b]`}</InlineMath> and
          let <InlineMath>{`P`}</InlineMath> be a primitive of <InlineMath>{`f`}</InlineMath> on
          <InlineMath>{`[a, b]`}</InlineMath>. Then we have:
        </p>
        <MathBlock>{`\\int_a^b f(x) \\, dx = P(b) - P(a).`}</MathBlock>
      </Callout>

      <Callout type="info" title="What the Theorem Says">
        <p>In words, the Second Fundamental Theorem states:</p>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
          "To evaluate a definite integral, find any primitive of the integrand and
          compute the difference of its values at the endpoints."
        </p>
        <p>
          This is remarkable: the problem of computing an area (integration) is reduced to
          the problem of finding an antiderivative (the reverse of differentiation).
        </p>
      </Callout>

      <h2>Proof of the Second Fundamental Theorem</h2>

      <Callout type="info" title="Proof">
        <p>
          Since <InlineMath>{`f`}</InlineMath> is integrable, we can define the indefinite integral:
        </p>
        <MathBlock>{`A(x) = \\int_a^x f(t) \\, dt.`}</MathBlock>
        <p>
          By the first fundamental theorem, <InlineMath>{`A'(x) = f(x)`}</InlineMath> at points where
          <InlineMath>{`f`}</InlineMath> is continuous. Since <InlineMath>{`P'(x) = f(x)`}</InlineMath> as well,
          we have:
        </p>
        <MathBlock>{`A'(x) = P'(x)`}</MathBlock>
        <p>
          wherever <InlineMath>{`f`}</InlineMath> is continuous. This means
          <InlineMath>{`A(x) - P(x)`}</InlineMath> has derivative zero at such points. By a theorem
          from differential calculus, this implies <InlineMath>{`A(x) - P(x) = C`}</InlineMath> for
          some constant <InlineMath>{`C`}</InlineMath>.
        </p>
        <p>
          Setting <InlineMath>{`x = a`}</InlineMath>:
        </p>
        <MathBlock>{`A(a) - P(a) = C \\implies 0 - P(a) = C \\implies C = -P(a).`}</MathBlock>
        <p>
          Therefore <InlineMath>{`A(x) = P(x) - P(a)`}</InlineMath>. Setting <InlineMath>{`x = b`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_a^b f(t) \\, dt = A(b) = P(b) - P(a).`}</MathBlock>
      </Callout>

      <h2>Notation</h2>

      <Callout type="info" title="Evaluation Notation">
        <p>
          The difference <InlineMath>{`P(b) - P(a)`}</InlineMath> is often written using
          bracket notation:
        </p>
        <MathBlock>{`P(x) \\Big|_a^b = P(b) - P(a)`}</MathBlock>
        <p>
          or equivalently:
        </p>
        <MathBlock>{`\\left[ P(x) \\right]_a^b = P(b) - P(a).`}</MathBlock>
        <p>
          Thus we can write:
        </p>
        <MathBlock>{`\\int_a^b f(x) \\, dx = P(x) \\Big|_a^b.`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Integration of Powers">
        <p>
          Evaluate <InlineMath>{`\\int_a^b x^n \\, dx`}</InlineMath> for <InlineMath>{`n = 0, 1, 2, \\ldots`}</InlineMath>
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          A primitive of <InlineMath>{`f(x) = x^n`}</InlineMath> is:
        </p>
        <MathBlock>{`P(x) = \\frac{x^{n+1}}{n+1}`}</MathBlock>
        <p>
          since <InlineMath>{`P'(x) = x^n`}</InlineMath>. By the second fundamental theorem:
        </p>
        <MathBlock>{`\\int_a^b x^n \\, dx = \\frac{x^{n+1}}{n+1} \\Big|_a^b = \\frac{b^{n+1} - a^{n+1}}{n+1}.`}</MathBlock>
        <p>
          This formula also holds for all rational exponents <InlineMath>{`n \\neq -1`}</InlineMath>,
          provided the integrand is defined on <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Integration of Sine and Cosine">
        <p>
          Since <InlineMath>{`(\\sin x)' = \\cos x`}</InlineMath> and <InlineMath>{`(\\cos x)' = -\\sin x`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_a^b \\cos x \\, dx = \\sin x \\Big|_a^b = \\sin b - \\sin a`}</MathBlock>
        <MathBlock>{`\\int_a^b \\sin x \\, dx = -\\cos x \\Big|_a^b = \\cos a - \\cos b`}</MathBlock>
        <p>
          For instance:
        </p>
        <MathBlock>{`\\int_0^{\\pi/2} \\cos x \\, dx = \\sin \\frac{\\pi}{2} - \\sin 0 = 1 - 0 = 1.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Square Root">
        <p>
          Evaluate <InlineMath>{`\\int_a^b \\frac{1}{\\sqrt{x}} \\, dx`}</InlineMath> for <InlineMath>{`0 < a < b`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Write <InlineMath>{`1/\\sqrt{x} = x^{-1/2}`}</InlineMath>. With <InlineMath>{`n = -1/2`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_a^b x^{-1/2} \\, dx = \\frac{x^{1/2}}{1/2} \\Big|_a^b = 2\\sqrt{x} \\Big|_a^b = 2(\\sqrt{b} - \\sqrt{a}).`}</MathBlock>
      </Callout>

      <h2>The Case n = -1</h2>

      <Callout type="info" title="The Exceptional Case">
        <p>
          The power rule <InlineMath>{`\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C`}</InlineMath> fails
          when <InlineMath>{`n = -1`}</InlineMath> because the denominator becomes zero. Nevertheless,
          there exists a function <InlineMath>{`P`}</InlineMath> whose derivative is
          <InlineMath>{`P'(x) = 1/x`}</InlineMath>. We can exhibit such a function using an indefinite
          integral:
        </p>
        <MathBlock>{`P(x) = \\int_1^x \\frac{1}{t} \\, dt \\quad \\text{for } x > 0.`}</MathBlock>
        <p>
          This integral exists because <InlineMath>{`1/t`}</InlineMath> is monotonic on
          <InlineMath>{`[1, x]`}</InlineMath>. The function so defined is called the
          <strong> natural logarithm</strong>. Its properties are developed in the next chapter.
        </p>
      </Callout>

      <h2>Leibniz Notation for Primitives</h2>

      <Callout type="definition" title="Indefinite Integral Notation">
        <p>
          Leibniz introduced the symbol <InlineMath>{`\\int f(x) \\, dx`}</InlineMath> (without limits)
          to denote a general primitive of <InlineMath>{`f`}</InlineMath>. The equation:
        </p>
        <MathBlock>{`\\int f(x) \\, dx = P(x) + C`}</MathBlock>
        <p>
          is an alternative way of writing <InlineMath>{`P'(x) = f(x)`}</InlineMath>. The symbol
          <InlineMath>{`C`}</InlineMath> represents an arbitrary constant, so the equation really
          describes a whole family of functions.
        </p>
      </Callout>

      <Callout type="info" title="Connection Between Notations">
        <p>
          The first fundamental theorem can be expressed symbolically as:
        </p>
        <MathBlock>{`\\int f(x) \\, dx = \\int_c^x f(t) \\, dt + C`}</MathBlock>
        <p>
          meaning that every primitive of <InlineMath>{`f`}</InlineMath> is an indefinite integral
          plus a constant.
        </p>
        <p>
          The second fundamental theorem becomes:
        </p>
        <MathBlock>{`\\int_a^b f(x) \\, dx = \\int f(x) \\, dx \\Big|_a^b`}</MathBlock>
        <p>
          meaning: to evaluate a definite integral, find any primitive and take the
          difference at the endpoints.
        </p>
      </Callout>

      <h2>Deducing Properties from Derivatives</h2>

      <Callout type="info" title="Properties from the Second Fundamental Theorem">
        <p>
          If <InlineMath>{`f`}</InlineMath> has a continuous derivative <InlineMath>{`f'`}</InlineMath> on
          an open interval <InlineMath>{`I`}</InlineMath>, the second fundamental theorem states:
        </p>
        <MathBlock>{`f(x) = f(c) + \\int_c^x f'(t) \\, dt`}</MathBlock>
        <p>
          for every choice of <InlineMath>{`x`}</InlineMath> and <InlineMath>{`c`}</InlineMath> in
          <InlineMath>{`I`}</InlineMath>. This lets us deduce properties of <InlineMath>{`f`}</InlineMath>
          from properties of <InlineMath>{`f'`}</InlineMath>:
        </p>
        <ul>
          <li>
            If <InlineMath>{`f' \\geq 0`}</InlineMath> on <InlineMath>{`I`}</InlineMath>, then
            <InlineMath>{`f`}</InlineMath> is <strong>increasing</strong> on <InlineMath>{`I`}</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`f'`}</InlineMath> is <strong>increasing</strong> on <InlineMath>{`I`}</InlineMath>,
            then <InlineMath>{`f`}</InlineMath> is <strong>convex</strong> on <InlineMath>{`I`}</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`f'`}</InlineMath> is <strong>decreasing</strong> on <InlineMath>{`I`}</InlineMath>,
            then <InlineMath>{`f`}</InlineMath> is <strong>concave</strong> on <InlineMath>{`I`}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <h2>Basic Integration Formulas</h2>

      <Callout type="info" title="Table of Primitives">
        <p>
          Every differentiation formula, read in reverse, gives an integration formula.
          Here are the basic formulas derived from our differentiation rules:
        </p>
        <MathBlock>{`\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)`}</MathBlock>
        <MathBlock>{`\\int \\cos x \\, dx = \\sin x + C`}</MathBlock>
        <MathBlock>{`\\int \\sin x \\, dx = -\\cos x + C`}</MathBlock>
        <p>
          More formulas will be derived as we learn the derivatives of logarithmic,
          exponential, and inverse trigonometric functions.
        </p>
      </Callout>

      <h2>The Importance of the Fundamental Theorems</h2>

      <Callout type="info" title="Two Directions">
        <p>
          The two fundamental theorems establish a profound connection between integration
          and differentiation:
        </p>
        <ul>
          <li>
            <strong>First Fundamental Theorem:</strong> Differentiation undoes integration.
            <MathBlock>{`\\frac{d}{dx} \\int_c^x f(t) \\, dt = f(x)`}</MathBlock>
          </li>
          <li>
            <strong>Second Fundamental Theorem:</strong> Integration undoes differentiation.
            <MathBlock>{`\\int_a^b P'(x) \\, dx = P(b) - P(a)`}</MathBlock>
          </li>
        </ul>
        <p>
          These theorems transform the problem of evaluating integrals into the problem of
          finding primitives—a task often much easier in practice.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          A <strong>primitive</strong> of <InlineMath>{`f`}</InlineMath> is a function
          <InlineMath>{`P`}</InlineMath> with <InlineMath>{`P'(x) = f(x)`}</InlineMath>.
        </li>
        <li>
          <strong>Second Fundamental Theorem:</strong> If <InlineMath>{`P`}</InlineMath> is a
          primitive of <InlineMath>{`f`}</InlineMath>, then
          <InlineMath>{`\\int_a^b f(x) \\, dx = P(b) - P(a)`}</InlineMath>.
        </li>
        <li>
          The <strong>Leibniz notation</strong> <InlineMath>{`\\int f(x) \\, dx = P(x) + C`}</InlineMath>
          represents the general primitive of <InlineMath>{`f`}</InlineMath>.
        </li>
        <li>
          The fundamental theorems show that <strong>differentiation and integration are
          inverse operations</strong>.
        </li>
        <li>
          Every differentiation formula yields an integration formula when read in reverse.
        </li>
        <li>
          The case <InlineMath>{`n = -1`}</InlineMath> (integrating <InlineMath>{`1/x`}</InlineMath>)
          leads to the <strong>natural logarithm</strong>.
        </li>
      </ul>
    </LessonLayout>
  );
}
