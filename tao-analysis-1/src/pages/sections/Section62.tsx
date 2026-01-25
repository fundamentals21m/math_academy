import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <p>
        We can now give a number of useful consequences of the fundamental theorems
        of calculus (beyond the obvious application, that one can now compute any
        integral for which an antiderivative is known). The first application is
        the familiar <strong>integration by parts</strong> formula.
      </p>

      <h2>Integration by Parts</h2>

      <Theorem id="11.10.1" title="Proposition: Integration by parts formula">
        <p>
          Let <Math>{String.raw`I = [a, b]`}</Math>, and let{' '}
          <Math>{String.raw`F: [a, b] \to \mathbb{R}`}</Math> and{' '}
          <Math>{String.raw`G: [a, b] \to \mathbb{R}`}</Math> be differentiable
          functions on <Math>[a, b]</Math> such that <Math>F'</Math> and{' '}
          <Math>G'</Math> are Riemann integrable on <Math>I</Math>. Then we have:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} FG' = F(b)G(b) - F(a)G(a) - \int_{[a,b]} F'G`}</MathBlock>
        <div className="proof">
          <p>
            By Corollary 11.5.2 and Theorem 11.4.5, both <Math>FG'</Math> and{' '}
            <Math>F'G</Math> are Riemann integrable (products of bounded Riemann
            integrable functions are Riemann integrable).
          </p>
          <p className="mt-2">
            By the product rule (Theorem 10.1.13(d)):
          </p>
          <MathBlock>{String.raw`(FG)' = F'G + FG'`}</MathBlock>
          <p className="mt-2">
            Since <Math>FG</Math> is an antiderivative of{' '}
            <Math>{String.raw`F'G + FG'`}</Math>, by the second fundamental theorem
            of calculus:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} (F'G + FG') = F(b)G(b) - F(a)G(a)`}</MathBlock>
          <p className="mt-2">
            By linearity of the integral:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} F'G + \int_{[a,b]} FG' = F(b)G(b) - F(a)G(a)`}</MathBlock>
          <p className="mt-2">
            Rearranging gives the result.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          In the traditional notation, integration by parts is often written as:
        </p>
        <MathBlock>{String.raw`\int u \, dv = uv - \int v \, du`}</MathBlock>
        <p className="mt-2">
          where <Math>{String.raw`u = F`}</Math>, <Math>{String.raw`dv = G' \, dx`}</Math>,{' '}
          <Math>{String.raw`v = G`}</Math>, and <Math>{String.raw`du = F' \, dx`}</Math>.
        </p>
      </Callout>

      <h2>Converting Riemann-Stieltjes to Riemann Integrals</h2>

      <p>
        Next, we show that under certain circumstances, one can write a
        Riemann-Stieltjes integral as a Riemann integral. We begin with piecewise
        constant functions.
      </p>

      <Theorem id="11.10.2" title="Riemann-Stieltjes to Riemann (piecewise constant)">
        <p>
          Let <Math>{String.raw`\alpha: [a, b] \to \mathbb{R}`}</Math> be a monotone
          increasing function, and suppose that <Math>\alpha</Math> is also
          differentiable on <Math>[a, b]</Math>, with <Math>\alpha'</Math> being
          Riemann integrable. Let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math>{' '}
          be a piecewise constant function on <Math>[a, b]</Math>. Then{' '}
          <Math>{String.raw`f\alpha'`}</Math> is Riemann integrable on{' '}
          <Math>[a, b]</Math>, and:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha = \int_{[a,b]} f\alpha'`}</MathBlock>
        <div className="proof">
          <p>
            Since <Math>f</Math> is piecewise constant, it is Riemann integrable,
            and since <Math>\alpha'</Math> is also Riemann integrable, then{' '}
            <Math>{String.raw`f\alpha'`}</Math> is Riemann integrable by Theorem 11.4.5.
          </p>
          <p className="mt-2">
            Suppose that <Math>f</Math> is piecewise constant with respect to some
            partition <Math>\mathbf{'{P}'}</Math> of <Math>[a, b]</Math>. Then:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha = \text{p.c.} \int_{[\mathbf{P}]} f \, d\alpha = \sum_{J \in \mathbf{P}} c_J \alpha[J]`}</MathBlock>
          <p className="mt-2">
            where <Math>c_J</Math> is the constant value of <Math>f</Math> on{' '}
            <Math>J</Math>. On the other hand, by additivity over intervals:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f\alpha' = \sum_{J \in \mathbf{P}} \int_J f\alpha' = \sum_{J \in \mathbf{P}} \int_J c_J \alpha' = \sum_{J \in \mathbf{P}} c_J \int_J \alpha'`}</MathBlock>
          <p className="mt-2">
            But by the second fundamental theorem of calculus,{' '}
            <Math>{String.raw`\int_J \alpha' = \alpha[J]`}</Math>, and the claim follows.
          </p>
        </div>
      </Theorem>

      <Theorem id="11.10.3" title="Corollary: Riemann-Stieltjes to Riemann (general)">
        <p>
          Let <Math>{String.raw`\alpha: [a, b] \to \mathbb{R}`}</Math> be a monotone
          increasing function, and suppose that <Math>\alpha</Math> is also
          differentiable on <Math>[a, b]</Math>, with <Math>\alpha'</Math> being
          Riemann integrable. Let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math>{' '}
          be a function which is Riemann-Stieltjes integrable with respect to{' '}
          <Math>\alpha</Math> on <Math>[a, b]</Math>. Then{' '}
          <Math>{String.raw`f\alpha'`}</Math> is Riemann integrable on{' '}
          <Math>[a, b]</Math>, and:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha = \int_{[a,b]} f\alpha'`}</MathBlock>
        <div className="proof">
          <p>
            Since <Math>f</Math> and <Math>\alpha'</Math> are bounded, then{' '}
            <Math>{String.raw`f\alpha'`}</Math> is bounded. Also, since{' '}
            <Math>\alpha</Math> is monotone increasing and differentiable,{' '}
            <Math>\alpha'</Math> is non-negative.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`\varepsilon > 0`}</Math>. Find piecewise constant
            functions <Math>{String.raw`\overline{f}`}</Math> majorizing <Math>f</Math>{' '}
            and <Math>{String.raw`\underline{f}`}</Math> minorizing <Math>f</Math> such
            that:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha - \varepsilon \leq \int_{[a,b]} \underline{f} \, d\alpha \leq \int_{[a,b]} \overline{f} \, d\alpha \leq \int_{[a,b]} f \, d\alpha + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Applying Theorem 11.10.2:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha - \varepsilon \leq \int_{[a,b]} \underline{f}\alpha' \leq \int_{[a,b]} \overline{f}\alpha' \leq \int_{[a,b]} f \, d\alpha + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Since <Math>\alpha'</Math> is non-negative and{' '}
            <Math>{String.raw`\underline{f}`}</Math> minorizes <Math>f</Math>, then{' '}
            <Math>{String.raw`\underline{f}\alpha'`}</Math> minorizes{' '}
            <Math>{String.raw`f\alpha'`}</Math>. Thus:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f \, d\alpha - \varepsilon \leq \underline{\int}_{[a,b]} f\alpha'`}</MathBlock>
          <p className="mt-2">
            Similarly, <Math>{String.raw`\overline{\int}_{[a,b]} f\alpha' \leq \int_{[a,b]} f \, d\alpha + \varepsilon`}</Math>.
            Since <Math>\varepsilon</Math> was arbitrary, the claim follows.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Remark 11.10.4:</strong> Informally, Corollary 11.10.3 asserts that{' '}
          <Math>{String.raw`f \, d\alpha`}</Math> is essentially equivalent to{' '}
          <Math>{String.raw`f \frac{d\alpha}{dx} \, dx`}</Math>, when <Math>\alpha</Math>{' '}
          is differentiable. However, the advantage of the Riemann-Stieltjes
          integral is that it still makes sense even when <Math>\alpha</Math> is
          not differentiable.
        </p>
      </Callout>

      <h2>Change of Variables</h2>

      <p>
        We now build up to the familiar change of variables formula. We first need
        a preliminary lemma.
      </p>

      <Theorem id="11.10.5" title="Lemma: Change of variables formula I">
        <p>
          Let <Math>[a, b]</Math> be a closed interval, and let{' '}
          <Math>{String.raw`\phi: [a, b] \to [\phi(a), \phi(b)]`}</Math> be a
          continuous monotone increasing function. Let{' '}
          <Math>{String.raw`f: [\phi(a), \phi(b)] \to \mathbb{R}`}</Math> be a
          piecewise constant function on <Math>{String.raw`[\phi(a), \phi(b)]`}</Math>.
          Then <Math>{String.raw`f \circ \phi: [a, b] \to \mathbb{R}`}</Math> is also
          piecewise constant on <Math>[a, b]</Math>, and:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} f \circ \phi \, d\phi = \int_{[\phi(a), \phi(b)]} f`}</MathBlock>
        <div className="proof">
          <p>
            Let <Math>\mathbf{'{P}'}</Math> be a partition of{' '}
            <Math>{String.raw`[\phi(a), \phi(b)]`}</Math> such that <Math>f</Math>{' '}
            is piecewise constant with respect to <Math>\mathbf{'{P}'}</Math>. For each{' '}
            <Math>{String.raw`J \in \mathbf{P}`}</Math>, let <Math>c_J</Math> be the
            constant value of <Math>f</Math> on <Math>J</Math>, thus:
          </p>
          <MathBlock>{String.raw`\int_{[\phi(a), \phi(b)]} f = \sum_{J \in \mathbf{P}} c_J |J|`}</MathBlock>
          <p className="mt-2">
            For each interval <Math>J</Math>, let{' '}
            <Math>{String.raw`\phi^{-1}(J) := \{x \in [a, b] : \phi(x) \in J\}`}</Math>.
            Then <Math>{String.raw`\phi^{-1}(J)`}</Math> is connected (hence an
            interval), and <Math>c_J</Math> is the constant value of{' '}
            <Math>{String.raw`f \circ \phi`}</Math> on <Math>{String.raw`\phi^{-1}(J)`}</Math>.
          </p>
          <p className="mt-2">
            Define <Math>{String.raw`\mathbf{Q} := \{\phi^{-1}(J) : J \in \mathbf{P}\}`}</Math>.
            Then <Math>\mathbf{'{Q}'}</Math> partitions <Math>[a, b]</Math>, and{' '}
            <Math>{String.raw`f \circ \phi`}</Math> is piecewise constant with respect
            to <Math>\mathbf{'{Q}'}</Math>. Thus:
          </p>
          <MathBlock>{String.raw`\int_{[a,b]} f \circ \phi \, d\phi = \sum_{J \in \mathbf{P}} c_J \phi[\phi^{-1}(J)]`}</MathBlock>
          <p className="mt-2">
            But <Math>{String.raw`\phi[\phi^{-1}(J)] = |J|`}</Math>, and the claim follows.
          </p>
        </div>
      </Theorem>

      <Theorem id="11.10.6" title="Proposition: Change of variables formula II">
        <p>
          Let <Math>[a, b]</Math> be a closed interval, and let{' '}
          <Math>{String.raw`\phi: [a, b] \to [\phi(a), \phi(b)]`}</Math> be a
          continuous monotone increasing function. Let{' '}
          <Math>{String.raw`f: [\phi(a), \phi(b)] \to \mathbb{R}`}</Math> be a
          Riemann integrable function on <Math>{String.raw`[\phi(a), \phi(b)]`}</Math>.
          Then <Math>{String.raw`f \circ \phi: [a, b] \to \mathbb{R}`}</Math> is
          Riemann-Stieltjes integrable with respect to <Math>\phi</Math> on{' '}
          <Math>[a, b]</Math>, and:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} f \circ \phi \, d\phi = \int_{[\phi(a), \phi(b)]} f`}</MathBlock>
        <div className="proof">
          <p>
            This is obtained from Lemma 11.10.5 in a similar manner to how
            Corollary 11.10.3 was obtained from Theorem 11.10.2.
          </p>
          <p className="mt-2">
            Since <Math>f</Math> is Riemann integrable, it is bounded, and then{' '}
            <Math>{String.raw`f \circ \phi`}</Math> must also be bounded.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`\varepsilon > 0`}</Math>. Find piecewise constant
            functions <Math>{String.raw`\overline{f}`}</Math> majorizing <Math>f</Math>{' '}
            and <Math>{String.raw`\underline{f}`}</Math> minorizing <Math>f</Math> on{' '}
            <Math>{String.raw`[\phi(a), \phi(b)]`}</Math> such that:
          </p>
          <MathBlock>{String.raw`\int_{[\phi(a), \phi(b)]} f - \varepsilon \leq \int_{[\phi(a), \phi(b)]} \underline{f} \leq \int_{[\phi(a), \phi(b)]} \overline{f} \leq \int_{[\phi(a), \phi(b)]} f + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Applying Lemma 11.10.5:
          </p>
          <MathBlock>{String.raw`\int_{[\phi(a), \phi(b)]} f - \varepsilon \leq \int_{[a,b]} \underline{f} \circ \phi \, d\phi \leq \int_{[a,b]} \overline{f} \circ \phi \, d\phi \leq \int_{[\phi(a), \phi(b)]} f + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`\underline{f} \circ \phi`}</Math> is piecewise
            constant and minorizes <Math>{String.raw`f \circ \phi`}</Math>, and{' '}
            <Math>{String.raw`\overline{f} \circ \phi`}</Math> majorizes{' '}
            <Math>{String.raw`f \circ \phi`}</Math>, we get:
          </p>
          <MathBlock>{String.raw`\int_{[\phi(a), \phi(b)]} f - \varepsilon \leq \underline{\int}_{[a,b]} f \circ \phi \, d\phi \leq \overline{\int}_{[a,b]} f \circ \phi \, d\phi \leq \int_{[\phi(a), \phi(b)]} f + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Since <Math>\varepsilon</Math> was arbitrary, the claim follows.
          </p>
        </div>
      </Theorem>

      <p className="mt-4">
        Combining this formula with Corollary 11.10.3, we immediately obtain the
        following familiar formula:
      </p>

      <Theorem id="11.10.7" title="Proposition: Change of variables formula III">
        <p>
          Let <Math>[a, b]</Math> be a closed interval, and let{' '}
          <Math>{String.raw`\phi: [a, b] \to [\phi(a), \phi(b)]`}</Math> be a
          differentiable monotone increasing function such that{' '}
          <Math>\phi'</Math> is Riemann integrable. Let{' '}
          <Math>{String.raw`f: [\phi(a), \phi(b)] \to \mathbb{R}`}</Math> be a
          Riemann integrable function on <Math>{String.raw`[\phi(a), \phi(b)]`}</Math>.
          Then <Math>{String.raw`(f \circ \phi)\phi': [a, b] \to \mathbb{R}`}</Math>{' '}
          is Riemann integrable on <Math>[a, b]</Math>, and:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} (f \circ \phi)\phi' = \int_{[\phi(a), \phi(b)]} f`}</MathBlock>
      </Theorem>

      <Callout type="note">
        <p>
          In the traditional notation, this is often written as:
        </p>
        <MathBlock>{String.raw`\int_a^b f(\phi(x)) \phi'(x) \, dx = \int_{\phi(a)}^{\phi(b)} f(u) \, du`}</MathBlock>
        <p className="mt-2">
          where the substitution <Math>{String.raw`u = \phi(x)`}</Math> is made,
          with <Math>{String.raw`du = \phi'(x) \, dx`}</Math>.
        </p>
      </Callout>

      <Example id="11.10.8" title="Using change of variables">
        <p>
          To compute <Math>{String.raw`\int_0^1 2x(1 + x^2)^3 \, dx`}</Math>, let{' '}
          <Math>{String.raw`\phi(x) = 1 + x^2`}</Math>, so{' '}
          <Math>{String.raw`\phi'(x) = 2x`}</Math>. The integral becomes:
        </p>
        <MathBlock>{String.raw`\int_0^1 (1 + x^2)^3 \cdot 2x \, dx = \int_{\phi(0)}^{\phi(1)} u^3 \, du = \int_1^2 u^3 \, du`}</MathBlock>
        <MathBlock>{String.raw`= \left[\frac{u^4}{4}\right]_1^2 = \frac{16}{4} - \frac{1}{4} = \frac{15}{4}`}</MathBlock>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Monotone decreasing case:</strong> When <Math>\phi</Math> is
          monotone decreasing instead of monotone increasing, the formula becomes:
        </p>
        <MathBlock>{String.raw`\int_{[a,b]} (f \circ \phi)\phi' = -\int_{[\phi(b), \phi(a)]} f`}</MathBlock>
        <p className="mt-2">
          Note that now <Math>{String.raw`\phi(b) < \phi(a)`}</Math> since{' '}
          <Math>\phi</Math> is decreasing. When <Math>\phi</Math> is neither
          monotone increasing nor monotone decreasing, the situation becomes
          significantly more complicated.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key consequences of the fundamental theorems:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Integration by parts:</strong>{' '}
            <Math>{String.raw`\int FG' = FG\big|_a^b - \int F'G`}</Math>
          </li>
          <li>
            <strong>Riemann-Stieltjes to Riemann:</strong>{' '}
            <Math>{String.raw`\int f \, d\alpha = \int f\alpha'`}</Math> when{' '}
            <Math>\alpha</Math> is differentiable
          </li>
          <li>
            <strong>Change of variables:</strong>{' '}
            <Math>{String.raw`\int_a^b f(\phi(x))\phi'(x) \, dx = \int_{\phi(a)}^{\phi(b)} f(u) \, du`}</Math>
          </li>
        </ul>
        <p className="mt-2">
          These formulas are the workhorses of practical integration, allowing us
          to transform difficult integrals into easier ones.
        </p>
      </Callout>
    </LessonLayout>
  );
}
