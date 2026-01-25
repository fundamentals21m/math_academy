import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <p>
        We now have enough machinery to connect integration and differentiation via the
        familiar <strong>fundamental theorems of calculus</strong>. Actually, there are two
        such theorems: one involving the derivative of an integral, and the other involving
        the integral of a derivative.
      </p>

      <h2>The First Fundamental Theorem</h2>

      <p>
        The first fundamental theorem tells us that differentiation "undoes" integration:
        if we integrate a function and then differentiate the result, we recover the
        original function (at points of continuity).
      </p>

      <Theorem id="11.9.1" title="First Fundamental Theorem of Calculus">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a Riemann integrable
          function. Let <Math>{String.raw`F: [a, b] \to \mathbb{R}`}</Math> be the function:
        </p>
        <MathBlock>{String.raw`F(x) := \int_{[a,x]} f`}</MathBlock>
        <p className="mt-2">
          Then <Math>F</Math> is continuous. Furthermore, if{' '}
          <Math>{String.raw`x_0 \in [a, b]`}</Math> and <Math>f</Math> is continuous at{' '}
          <Math>x_0</Math>, then <Math>F</Math> is differentiable at <Math>x_0</Math>, and{' '}
          <Math>{String.raw`F'(x_0) = f(x_0)`}</Math>.
        </p>
        <div className="proof">
          <p>
            Since <Math>f</Math> is Riemann integrable, it is bounded. Thus we have some
            real number <Math>M</Math> such that{' '}
            <Math>{String.raw`-M \leq f(x) \leq M`}</Math> for all{' '}
            <Math>{String.raw`x \in [a, b]`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Continuity of F:</strong> Let <Math>{String.raw`x < y`}</Math> be two
            elements of <Math>[a, b]</Math>. Then:
          </p>
          <MathBlock>{String.raw`F(y) - F(x) = \int_{[a,y]} f - \int_{[a,x]} f = \int_{[x,y]} f`}</MathBlock>
          <p className="mt-2">
            by additivity over intervals. By monotonicity of the integral:
          </p>
          <MathBlock>{String.raw`|F(y) - F(x)| \leq M(y - x) = M|y - x|`}</MathBlock>
          <p className="mt-2">
            This bound (which holds for all <Math>x, y</Math>) implies <Math>F</Math> is
            continuous by the squeeze test.
          </p>
          <p className="mt-2">
            <strong>Differentiability at points of continuity:</strong> Suppose{' '}
            <Math>{String.raw`x_0 \in [a, b]`}</Math> and <Math>f</Math> is continuous at{' '}
            <Math>x_0</Math>. Let <Math>{String.raw`\varepsilon > 0`}</Math>. By continuity,
            there exists <Math>{String.raw`\delta > 0`}</Math> such that{' '}
            <Math>{String.raw`|f(x) - f(x_0)| \leq \varepsilon`}</Math> for all{' '}
            <Math>x</Math> in <Math>{String.raw`I := [x_0 - \delta, x_0 + \delta] \cap [a, b]`}</Math>.
          </p>
          <p className="mt-2">
            For <Math>{String.raw`y \in I`}</Math> with <Math>{String.raw`y > x_0`}</Math>:
          </p>
          <MathBlock>{String.raw`F(y) - F(x_0) = \int_{[x_0, y]} f`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`f(x_0) - \varepsilon \leq f(x) \leq f(x_0) + \varepsilon`}</Math>{' '}
            for all <Math>{String.raw`x \in [x_0, y]`}</Math>:
          </p>
          <MathBlock>{String.raw`(f(x_0) - \varepsilon)(y - x_0) \leq \int_{[x_0, y]} f \leq (f(x_0) + \varepsilon)(y - x_0)`}</MathBlock>
          <p className="mt-2">Thus:</p>
          <MathBlock>{String.raw`|F(y) - F(x_0) - f(x_0)(y - x_0)| \leq \varepsilon|y - x_0|`}</MathBlock>
          <p className="mt-2">
            By Proposition 10.1.7, this implies <Math>F</Math> is differentiable at{' '}
            <Math>x_0</Math> with <Math>{String.raw`F'(x_0) = f(x_0)`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          Informally, the first fundamental theorem asserts that:
        </p>
        <MathBlock>{String.raw`\left(\int_{[a,x]} f\right)'(x) = f(x)`}</MathBlock>
        <p className="mt-2">
          given that <Math>f</Math> is continuous at <Math>x</Math>. The derivative of an
          integral recovers the original function.
        </p>
      </Callout>

      <Example id="11.9.2" title="A function differentiable almost everywhere">
        <p>
          Recall from Exercise 9.8.5 that we constructed a monotone function{' '}
          <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> which was discontinuous at
          every rational and continuous everywhere else.
        </p>
        <p className="mt-2">
          By Proposition 11.6.1, this monotone function is Riemann integrable on{' '}
          <Math>[0, 1]</Math>. If we define <Math>{String.raw`F: [0, 1] \to \mathbb{R}`}</Math>{' '}
          by <Math>{String.raw`F(x) := \int_{[0,x]} f`}</Math>, then <Math>F</Math> is a
          continuous function which is differentiable at every irrational number. On the
          other hand, <Math>F</Math> is non-differentiable at every rational number.
        </p>
      </Example>

      <h2>Antiderivatives</h2>

      <Definition id="11.9.3" title="Antiderivatives">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be a function. We say that a
          function <Math>{String.raw`F: I \to \mathbb{R}`}</Math> is an{' '}
          <strong>antiderivative</strong> of <Math>f</Math> if <Math>F</Math> is
          differentiable on <Math>I</Math> and <Math>{String.raw`F'(x) = f(x)`}</Math> for
          all <Math>{String.raw`x \in I`}</Math>.
        </p>
      </Definition>

      <h2>The Second Fundamental Theorem</h2>

      <p>
        The second fundamental theorem tells us that integration "undoes" differentiation:
        if we differentiate a function and then integrate the result, we recover the
        original function (up to boundary values).
      </p>

      <Theorem id="11.9.4" title="Second Fundamental Theorem of Calculus">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a Riemann integrable
          function. If <Math>{String.raw`F: [a, b] \to \mathbb{R}`}</Math> is an
          antiderivative of <Math>f</Math>, then:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} f = F(b) - F(a)`}</MathBlock>
        <div className="proof">
          <p>
            We show that <Math>{String.raw`U(f, \mathbf{P}) \geq F(b) - F(a) \geq L(f, \mathbf{P})`}</Math>{' '}
            for every partition <Math>\mathbf{'{P}'}</Math> of <Math>[a, b]</Math>.
          </p>
          <p className="mt-2">
            By Proposition 11.3.12, this means:
          </p>
          <MathBlock>{String.raw`\overline{\int}_{[a,b]} f \geq F(b) - F(a) \geq \underline{\int}_{[a,b]} f`}</MathBlock>
          <p className="mt-2">
            Since <Math>f</Math> is Riemann integrable, both bounds equal{' '}
            <Math>{String.raw`\int_{[a,b]} f`}</Math>, giving the result.
          </p>
          <p className="mt-2">
            <strong>Proof of the bound:</strong> From Lemma 11.8.4:
          </p>
          <MathBlock>{String.raw`F(b) - F(a) = \sum_{J \in \mathbf{P}} F[J]`}</MathBlock>
          <p className="mt-2">
            where <Math>{String.raw`F[J] = F(d) - F(c)`}</Math> if{' '}
            <Math>{String.raw`J = [c, d]`}</Math> or similar.
          </p>
          <p className="mt-2">
            For each non-trivial interval <Math>J</Math>, by the mean-value theorem,{' '}
            <Math>{String.raw`F(d) - F(c) = (d - c)F'(e)`}</Math> for some{' '}
            <Math>{String.raw`e \in J`}</Math>. Since <Math>{String.raw`F'(e) = f(e)`}</Math>:
          </p>
          <MathBlock>{String.raw`F[J] = (d - c)f(e) = f(e)|J| \leq \sup_{x \in J} f(x) |J|`}</MathBlock>
          <p className="mt-2">
            Summing over all <Math>{String.raw`J \in \mathbf{P}`}</Math> gives{' '}
            <Math>{String.raw`F(b) - F(a) \leq U(f, \mathbf{P})`}</Math>. A similar argument
            gives the lower bound.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Practical importance:</strong> The second fundamental theorem allows us
          to compute integrals relatively easily, provided we can find an antiderivative
          of the integrand <Math>f</Math>. Note that the first fundamental theorem ensures
          that every <em>continuous</em> Riemann integrable function has an antiderivative.
        </p>
      </Callout>

      <h2>The "+C" Ambiguity</h2>

      <Theorem id="11.9.5" title="Lemma: Antiderivatives differ by a constant">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be a function. Let{' '}
          <Math>{String.raw`F: I \to \mathbb{R}`}</Math> and{' '}
          <Math>{String.raw`G: I \to \mathbb{R}`}</Math> be two antiderivatives of{' '}
          <Math>f</Math>. Then there exists a real number <Math>C</Math> such that{' '}
          <Math>{String.raw`F(x) = G(x) + C`}</Math> for all <Math>{String.raw`x \in I`}</Math>.
        </p>
        <div className="proof">
          <p>
            Consider the function <Math>{String.raw`H := F - G`}</Math>. Then{' '}
            <Math>{String.raw`H'(x) = F'(x) - G'(x) = f(x) - f(x) = 0`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>.
          </p>
          <p className="mt-2">
            By the mean-value theorem, for any <Math>{String.raw`x, y \in I`}</Math>, there
            exists <Math>c</Math> between <Math>x</Math> and <Math>y</Math> such that{' '}
            <Math>{String.raw`H(x) - H(y) = H'(c)(x - y) = 0`}</Math>.
          </p>
          <p className="mt-2">
            Thus <Math>{String.raw`H(x) = H(y)`}</Math> for all{' '}
            <Math>{String.raw`x, y \in I`}</Math>, so <Math>H</Math> is constant.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          This is the reason for the "+C" that appears when computing indefinite integrals:
          antiderivatives are only unique up to an additive constant.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>The two fundamental theorems:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>First FTC:</strong> <Math>{String.raw`\frac{d}{dx}\int_{[a,x]} f = f(x)`}</Math>{' '}
            (when <Math>f</Math> is continuous at <Math>x</Math>)
          </li>
          <li>
            <strong>Second FTC:</strong> <Math>{String.raw`\int_{[a,b]} F' = F(b) - F(a)`}</Math>{' '}
            (when <Math>F'</Math> is Riemann integrable)
          </li>
        </ul>
        <p className="mt-2">
          These theorems establish that differentiation and integration are inverse
          operations, which is one of the central insights of calculus.
        </p>
      </Callout>
    </LessonLayout>
  );
}
