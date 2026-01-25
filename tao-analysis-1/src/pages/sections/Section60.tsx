import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <p>
        Let <Math>I</Math> be a bounded interval, let{' '}
        <Math>{String.raw`\alpha: I \to \mathbb{R}`}</Math> be a monotone increasing
        function, and let <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be a function.
        There is a generalization of the Riemann integral, known as the{' '}
        <strong>Riemann-Stieltjes integral</strong>, which provides additional flexibility
        and has important applications.
      </p>

      <h2>The α-Length</h2>

      <p>
        The Riemann-Stieltjes integral is defined just like the Riemann integral, but
        with one twist: instead of taking the length <Math>|J|</Math> of intervals{' '}
        <Math>J</Math>, we take the <em>α-length</em> <Math>{String.raw`\alpha[J]`}</Math>.
      </p>

      <Definition id="11.8.1" title="α-length">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`\alpha: X \to \mathbb{R}`}</Math> be a function defined on
          some domain <Math>X</Math> which contains <Math>I</Math>. Then we define the{' '}
          <strong>α-length</strong> <Math>{String.raw`\alpha[I]`}</Math> of <Math>I</Math>{' '}
          as follows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>I</Math> is a point or the empty set, we set{' '}
            <Math>{String.raw`\alpha[I] = 0`}</Math>
          </li>
          <li>
            If <Math>I</Math> is an interval of the form <Math>[a, b]</Math>,{' '}
            <Math>[a, b)</Math>, <Math>(a, b]</Math>, or <Math>(a, b)</Math> for some{' '}
            <Math>{String.raw`b > a`}</Math>, then we set{' '}
            <Math>{String.raw`\alpha[I] = \alpha(b) - \alpha(a)`}</Math>
          </li>
        </ul>
      </Definition>

      <Example id="11.8.2" title="α-length with α(x) = x²">
        <p>
          Let <Math>{String.raw`\alpha: \mathbb{R} \to \mathbb{R}`}</Math> be the function{' '}
          <Math>{String.raw`\alpha(x) := x^2`}</Math>. Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>{String.raw`\alpha[[2, 3]] = \alpha(3) - \alpha(2) = 9 - 4 = 5`}</Math>
          </li>
          <li>
            <Math>{String.raw`\alpha[(-3, -2)] = \alpha(-2) - \alpha(-3) = 4 - 9 = -5`}</Math>
          </li>
          <li>
            <Math>{String.raw`\alpha[\{2\}] = 0`}</Math> and{' '}
            <Math>{String.raw`\alpha[\emptyset] = 0`}</Math>
          </li>
        </ul>
      </Example>

      <Example id="11.8.3" title="α-length with the identity function">
        <p>
          Let <Math>{String.raw`\alpha: \mathbb{R} \to \mathbb{R}`}</Math> be the identity
          function <Math>{String.raw`\alpha(x) := x`}</Math>. Then{' '}
          <Math>{String.raw`\alpha[I] = |I|`}</Math> for all bounded intervals{' '}
          <Math>I</Math>. Thus the notion of length is a special case of α-length.
        </p>
      </Example>

      <Callout type="note">
        <p>
          We sometimes write <Math>{String.raw`\alpha|_a^b`}</Math> or{' '}
          <Math>{String.raw`\alpha(x)|_{x=a}^{x=b}`}</Math> instead of{' '}
          <Math>{String.raw`\alpha[[a, b]]`}</Math>.
        </p>
      </Callout>

      <h2>Properties of α-Length</h2>

      <Theorem id="11.8.4" title="Lemma: α-length is finitely additive">
        <p>
          Let <Math>I</Math> be a bounded interval, let{' '}
          <Math>{String.raw`\alpha: X \to \mathbb{R}`}</Math> be a function defined on
          some domain <Math>X</Math> which contains <Math>I</Math>, and let{' '}
          <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math>. Then:
        </p>
        <MathBlock>{String.raw`\alpha[I] = \sum_{J \in \mathbf{P}} \alpha[J]`}</MathBlock>
        <div className="proof">
          <p>
            The proof is a modification of Theorem 11.1.13, using induction on the
            cardinality of the partition and the telescoping property of the differences{' '}
            <Math>{String.raw`\alpha(b) - \alpha(a)`}</Math>.
          </p>
        </div>
      </Theorem>

      <h2>The Piecewise Constant Riemann-Stieltjes Integral</h2>

      <Definition id="11.8.5" title="P.c. Riemann-Stieltjes integral">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>\mathbf{'{P}'}</Math>{' '}
          be a partition of <Math>I</Math>. Let <Math>{String.raw`\alpha: X \to \mathbb{R}`}</Math>{' '}
          be a function defined on some domain <Math>X</Math> which contains <Math>I</Math>,
          and let <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be a function which is
          piecewise constant with respect to <Math>\mathbf{'{P}'}</Math>. Then we define:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f \, d\alpha := \sum_{J \in \mathbf{P}} c_J \alpha[J]`}</MathBlock>
        <p className="mt-2">
          where <Math>c_J</Math> is the constant value of <Math>f</Math> on <Math>J</Math>.
        </p>
      </Definition>

      <Example id="11.8.6" title="Computing a p.c. Riemann-Stieltjes integral">
        <p>
          Let <Math>{String.raw`f: [1, 3] \to \mathbb{R}`}</Math> be the function:
        </p>
        <MathBlock>{String.raw`f(x) = \begin{cases} 4 & \text{when } x \in [1, 2) \\ 2 & \text{when } x \in [2, 3] \end{cases}`}</MathBlock>
        <p className="mt-2">
          let <Math>{String.raw`\alpha: \mathbb{R} \to \mathbb{R}`}</Math> be{' '}
          <Math>{String.raw`\alpha(x) := x^2`}</Math>, and let{' '}
          <Math>{String.raw`\mathbf{P} := \{[1, 2), [2, 3]\}`}</Math>. Then:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_{[\mathbf{P}]} f \, d\alpha = c_{[1,2)} \alpha[[1, 2)] + c_{[2,3]} \alpha[[2, 3]]`}</MathBlock>
        <MathBlock>{String.raw`= 4(\alpha(2) - \alpha(1)) + 2(\alpha(3) - \alpha(2))`}</MathBlock>
        <MathBlock>{String.raw`= 4(4 - 1) + 2(9 - 4) = 4 \times 3 + 2 \times 5 = 22`}</MathBlock>
      </Example>

      <h2>The Riemann-Stieltjes Integral</h2>

      <p>
        Just as with the Riemann integral, the piecewise constant integral is independent
        of the choice of partition (as long as <Math>f</Math> is piecewise constant with
        respect to it). We can then define{' '}
        <Math>{String.raw`\text{p.c.} \int_I f \, d\alpha`}</Math> for any piecewise
        constant function.
      </p>

      <p className="mt-4">
        When <Math>\alpha</Math> is monotone increasing, we have{' '}
        <Math>{String.raw`\alpha[I] \geq 0`}</Math> for all intervals in <Math>X</Math>.
        This allows us to define upper and lower Riemann-Stieltjes integrals:
      </p>

      <Definition id="11.8.7" title="Upper and lower Riemann-Stieltjes integrals">
        <p>
          Let <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be bounded and let{' '}
          <Math>\alpha</Math> be defined on a domain containing <Math>I</Math>. Define:
        </p>
        <MathBlock>{String.raw`\overline{\int}_I f \, d\alpha := \inf\left\{\text{p.c.} \int_I g \, d\alpha : g \text{ is p.c. on } I \text{ and majorizes } f\right\}`}</MathBlock>
        <MathBlock>{String.raw`\underline{\int}_I f \, d\alpha := \sup\left\{\text{p.c.} \int_I g \, d\alpha : g \text{ is p.c. on } I \text{ and minorizes } f\right\}`}</MathBlock>
      </Definition>

      <Definition id="11.8.8" title="Riemann-Stieltjes integrability">
        <p>
          We say that <Math>f</Math> is <strong>Riemann-Stieltjes integrable</strong> on{' '}
          <Math>I</Math> with respect to <Math>\alpha</Math> if the upper and lower
          Riemann-Stieltjes integrals match, in which case we set:
        </p>
        <MathBlock>{String.raw`\int_I f \, d\alpha := \overline{\int}_I f \, d\alpha = \underline{\int}_I f \, d\alpha`}</MathBlock>
      </Definition>

      <h2>Relationship to the Riemann Integral</h2>

      <Callout type="info">
        <p>
          When <Math>\alpha</Math> is the identity function{' '}
          <Math>{String.raw`\alpha(x) := x`}</Math>, the Riemann-Stieltjes integral is
          identical to the Riemann integral. Thus the Riemann-Stieltjes integral is a
          <em>generalization</em> of the Riemann integral.
        </p>
        <p className="mt-2">
          Because of this, we sometimes write <Math>{String.raw`\int_I f`}</Math> as{' '}
          <Math>{String.raw`\int_I f \, dx`}</Math> or{' '}
          <Math>{String.raw`\int_I f(x) \, dx`}</Math>.
        </p>
      </Callout>

      <h2>Properties</h2>

      <p>
        Most of the theory of the Riemann integral carries over to the Riemann-Stieltjes
        integral, replacing lengths with α-lengths:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>
          The laws of integration (Theorem 11.2.16) hold with integrals{' '}
          <Math>{String.raw`\text{p.c.} \int_I f`}</Math> replaced by{' '}
          <Math>{String.raw`\text{p.c.} \int_I f \, d\alpha`}</Math>
        </li>
        <li>
          Uniformly continuous functions are Riemann-Stieltjes integrable (Theorem 11.5.1
          holds)
        </li>
        <li>
          <strong>Caveat:</strong> Some results (like Theorem 11.4.1(g), Proposition 11.5.3,
          and Proposition 11.5.6) may not hold when <Math>\alpha</Math> is discontinuous
          at key places
        </li>
      </ul>

      <Example id="11.8.9" title="The signum function">
        <p>
          Let <Math>{String.raw`\text{sgn}: \mathbb{R} \to \mathbb{R}`}</Math> be the
          signum function:
        </p>
        <MathBlock>{String.raw`\text{sgn}(x) := \begin{cases} 1 & \text{when } x > 0 \\ 0 & \text{when } x = 0 \\ -1 & \text{when } x < 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          Let <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math> be a continuous function.
          Then <Math>f</Math> is Riemann-Stieltjes integrable with respect to sgn, and:
        </p>
        <MathBlock>{String.raw`\int_{[-1, 1]} f \, d(\text{sgn}) = f(0)`}</MathBlock>
        <p className="mt-2">
          This is because the signum function "jumps" by 2 at <Math>x = 0</Math>, and all
          the α-length is concentrated at that single point.
        </p>
      </Example>

      <Callout type="note">
        <p>
          <strong>Applications:</strong> The Riemann-Stieltjes integral has important
          applications in:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Probability theory (integration with respect to distribution functions)</li>
          <li>Physics (point masses and discrete distributions)</li>
          <li>Functional analysis (spectral theory)</li>
        </ul>
        <p className="mt-2">
          When <Math>\alpha</Math> has jumps, the integral can "pick out" function values
          at those jump points, as in the signum example above.
        </p>
      </Callout>
    </LessonLayout>
  );
}
