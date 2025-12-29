import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <p>
        The first fundamental theorem told us that differentiating an indefinite integral
        gives back the original function. Now we explore the reverse question: if we know
        a function whose derivative is <MathInline>{`f`}</MathInline>, can we use it to evaluate
        integrals of <MathInline>{`f`}</MathInline>?
      </p>

      <p>
        The answer is yes, and this is the content of the <strong>second fundamental theorem</strong>.
        This theorem is the workhorse of practical integration—it transforms the problem of
        computing areas into the problem of finding antiderivatives.
      </p>

      <h2>Primitive Functions</h2>

      <Callout type="definition" title="Primitive (Antiderivative)">
        <p>
          A function <MathInline>{`P`}</MathInline> is called a <strong>primitive</strong> (or
          <strong> antiderivative</strong>) of <MathInline>{`f`}</MathInline> on an interval
          <MathInline>{`[a, b]`}</MathInline> if <MathInline>{`P`}</MathInline> is continuous on
          <MathInline>{`[a, b]`}</MathInline> and if
        </p>
        <MathBlock>{`P'(x) = f(x)`}</MathBlock>
        <p>
          for all <MathInline>{`x`}</MathInline> in the open interval <MathInline>{`(a, b)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Primitives Differ by Constants">
        <p>
          If <MathInline>{`P`}</MathInline> is a primitive of <MathInline>{`f`}</MathInline>, then so is
          <MathInline>{`P + C`}</MathInline> for any constant <MathInline>{`C`}</MathInline>. Conversely,
          if <MathInline>{`P`}</MathInline> and <MathInline>{`Q`}</MathInline> are both primitives of
          <MathInline>{`f`}</MathInline> on an interval, then they differ by a constant:
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
          Assume <MathInline>{`f`}</MathInline> is integrable on <MathInline>{`[a, b]`}</MathInline> and
          let <MathInline>{`P`}</MathInline> be a primitive of <MathInline>{`f`}</MathInline> on
          <MathInline>{`[a, b]`}</MathInline>. Then we have:
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
          Since <MathInline>{`f`}</MathInline> is integrable, we can define the indefinite integral:
        </p>
        <MathBlock>{`A(x) = \\int_a^x f(t) \\, dt.`}</MathBlock>
        <p>
          By the first fundamental theorem, <MathInline>{`A'(x) = f(x)`}</MathInline> at points where
          <MathInline>{`f`}</MathInline> is continuous. Since <MathInline>{`P'(x) = f(x)`}</MathInline> as well,
          we have:
        </p>
        <MathBlock>{`A'(x) = P'(x)`}</MathBlock>
        <p>
          wherever <MathInline>{`f`}</MathInline> is continuous. This means
          <MathInline>{`A(x) - P(x)`}</MathInline> has derivative zero at such points. By a theorem
          from differential calculus, this implies <MathInline>{`A(x) - P(x) = C`}</MathInline> for
          some constant <MathInline>{`C`}</MathInline>.
        </p>
        <p>
          Setting <MathInline>{`x = a`}</MathInline>:
        </p>
        <MathBlock>{`A(a) - P(a) = C \\implies 0 - P(a) = C \\implies C = -P(a).`}</MathBlock>
        <p>
          Therefore <MathInline>{`A(x) = P(x) - P(a)`}</MathInline>. Setting <MathInline>{`x = b`}</MathInline>:
        </p>
        <MathBlock>{`\\int_a^b f(t) \\, dt = A(b) = P(b) - P(a).`}</MathBlock>
      </Callout>

      <h2>Notation</h2>

      <Callout type="info" title="Evaluation Notation">
        <p>
          The difference <MathInline>{`P(b) - P(a)`}</MathInline> is often written using
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
          Evaluate <MathInline>{`\\int_a^b x^n \\, dx`}</MathInline> for <MathInline>{`n = 0, 1, 2, \\ldots`}</MathInline>
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          A primitive of <MathInline>{`f(x) = x^n`}</MathInline> is:
        </p>
        <MathBlock>{`P(x) = \\frac{x^{n+1}}{n+1}`}</MathBlock>
        <p>
          since <MathInline>{`P'(x) = x^n`}</MathInline>. By the second fundamental theorem:
        </p>
        <MathBlock>{`\\int_a^b x^n \\, dx = \\frac{x^{n+1}}{n+1} \\Big|_a^b = \\frac{b^{n+1} - a^{n+1}}{n+1}.`}</MathBlock>
        <p>
          This formula also holds for all rational exponents <MathInline>{`n \\neq -1`}</MathInline>,
          provided the integrand is defined on <MathInline>{`[a, b]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Integration of Sine and Cosine">
        <p>
          Since <MathInline>{`(\\sin x)' = \\cos x`}</MathInline> and <MathInline>{`(\\cos x)' = -\\sin x`}</MathInline>:
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
          Evaluate <MathInline>{`\\int_a^b \\frac{1}{\\sqrt{x}} \\, dx`}</MathInline> for <MathInline>{`0 < a < b`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Write <MathInline>{`1/\\sqrt{x} = x^{-1/2}`}</MathInline>. With <MathInline>{`n = -1/2`}</MathInline>:
        </p>
        <MathBlock>{`\\int_a^b x^{-1/2} \\, dx = \\frac{x^{1/2}}{1/2} \\Big|_a^b = 2\\sqrt{x} \\Big|_a^b = 2(\\sqrt{b} - \\sqrt{a}).`}</MathBlock>
      </Callout>

      <h2>The Case n = -1</h2>

      <Callout type="info" title="The Exceptional Case">
        <p>
          The power rule <MathInline>{`\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C`}</MathInline> fails
          when <MathInline>{`n = -1`}</MathInline> because the denominator becomes zero. Nevertheless,
          there exists a function <MathInline>{`P`}</MathInline> whose derivative is
          <MathInline>{`P'(x) = 1/x`}</MathInline>. We can exhibit such a function using an indefinite
          integral:
        </p>
        <MathBlock>{`P(x) = \\int_1^x \\frac{1}{t} \\, dt \\quad \\text{for } x > 0.`}</MathBlock>
        <p>
          This integral exists because <MathInline>{`1/t`}</MathInline> is monotonic on
          <MathInline>{`[1, x]`}</MathInline>. The function so defined is called the
          <strong> natural logarithm</strong>. Its properties are developed in the next chapter.
        </p>
      </Callout>

      <h2>Leibniz Notation for Primitives</h2>

      <Callout type="definition" title="Indefinite Integral Notation">
        <p>
          Leibniz introduced the symbol <MathInline>{`\\int f(x) \\, dx`}</MathInline> (without limits)
          to denote a general primitive of <MathInline>{`f`}</MathInline>. The equation:
        </p>
        <MathBlock>{`\\int f(x) \\, dx = P(x) + C`}</MathBlock>
        <p>
          is an alternative way of writing <MathInline>{`P'(x) = f(x)`}</MathInline>. The symbol
          <MathInline>{`C`}</MathInline> represents an arbitrary constant, so the equation really
          describes a whole family of functions.
        </p>
      </Callout>

      <Callout type="info" title="Connection Between Notations">
        <p>
          The first fundamental theorem can be expressed symbolically as:
        </p>
        <MathBlock>{`\\int f(x) \\, dx = \\int_c^x f(t) \\, dt + C`}</MathBlock>
        <p>
          meaning that every primitive of <MathInline>{`f`}</MathInline> is an indefinite integral
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
          If <MathInline>{`f`}</MathInline> has a continuous derivative <MathInline>{`f'`}</MathInline> on
          an open interval <MathInline>{`I`}</MathInline>, the second fundamental theorem states:
        </p>
        <MathBlock>{`f(x) = f(c) + \\int_c^x f'(t) \\, dt`}</MathBlock>
        <p>
          for every choice of <MathInline>{`x`}</MathInline> and <MathInline>{`c`}</MathInline> in
          <MathInline>{`I`}</MathInline>. This lets us deduce properties of <MathInline>{`f`}</MathInline>
          from properties of <MathInline>{`f'`}</MathInline>:
        </p>
        <ul>
          <li>
            If <MathInline>{`f' \\geq 0`}</MathInline> on <MathInline>{`I`}</MathInline>, then
            <MathInline>{`f`}</MathInline> is <strong>increasing</strong> on <MathInline>{`I`}</MathInline>.
          </li>
          <li>
            If <MathInline>{`f'`}</MathInline> is <strong>increasing</strong> on <MathInline>{`I`}</MathInline>,
            then <MathInline>{`f`}</MathInline> is <strong>convex</strong> on <MathInline>{`I`}</MathInline>.
          </li>
          <li>
            If <MathInline>{`f'`}</MathInline> is <strong>decreasing</strong> on <MathInline>{`I`}</MathInline>,
            then <MathInline>{`f`}</MathInline> is <strong>concave</strong> on <MathInline>{`I`}</MathInline>.
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
          A <strong>primitive</strong> of <MathInline>{`f`}</MathInline> is a function
          <MathInline>{`P`}</MathInline> with <MathInline>{`P'(x) = f(x)`}</MathInline>.
        </li>
        <li>
          <strong>Second Fundamental Theorem:</strong> If <MathInline>{`P`}</MathInline> is a
          primitive of <MathInline>{`f`}</MathInline>, then
          <MathInline>{`\\int_a^b f(x) \\, dx = P(b) - P(a)`}</MathInline>.
        </li>
        <li>
          The <strong>Leibniz notation</strong> <MathInline>{`\\int f(x) \\, dx = P(x) + C`}</MathInline>
          represents the general primitive of <MathInline>{`f`}</MathInline>.
        </li>
        <li>
          The fundamental theorems show that <strong>differentiation and integration are
          inverse operations</strong>.
        </li>
        <li>
          Every differentiation formula yields an integration formula when read in reverse.
        </li>
        <li>
          The case <MathInline>{`n = -1`}</MathInline> (integrating <MathInline>{`1/x`}</MathInline>)
          leads to the <strong>natural logarithm</strong>.
        </li>
      </ul>
    </LessonLayout>
  );
}
