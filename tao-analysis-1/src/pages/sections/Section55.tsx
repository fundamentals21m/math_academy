import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { RiemannSumVisualizer } from '@/components/visualizations';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <p>
        Now let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function defined on a bounded
        interval <Math>I</Math>. We want to define the Riemann integral <Math>{String.raw`\int_I f`}</Math>.
        To do this, we first need to define the notion of <em>upper and lower Riemann integrals</em>.
      </p>

      <p>
        These notions are related to the Riemann integral in much the same way that the
        lim sup and lim inf of a sequence are related to the limit of that sequence.
      </p>

      <h2>Majorization and Minorization</h2>

      <Definition id="11.3.1" title="Majorization of functions">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> and <Math>g: I \to \mathbb{'{R}'}</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            We say that <Math>g</Math> <strong>majorizes</strong> <Math>f</Math> on <Math>I</Math> if{' '}
            <Math>{String.raw`g(x) \geq f(x)`}</Math> for all <Math>{String.raw`x \in I`}</Math>.
          </li>
          <li>
            We say that <Math>g</Math> <strong>minorizes</strong> <Math>f</Math> on <Math>I</Math> if{' '}
            <Math>{String.raw`g(x) \leq f(x)`}</Math> for all <Math>{String.raw`x \in I`}</Math>.
          </li>
        </ul>
      </Definition>

      <p>
        The idea of the Riemann integral is to try to integrate a function by first
        majorizing or minorizing that function by a piecewise constant function (which
        we already know how to integrate).
      </p>

      <h2>Upper and Lower Riemann Integrals</h2>

      {/* Interactive Visualization */}
      <div className="my-8">
        <RiemannSumVisualizer />
      </div>

      <Definition id="11.3.2" title="Upper and lower Riemann integrals">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function defined on a bounded
          interval <Math>I</Math>.
        </p>
        <p className="mt-2">
          We define the <strong>upper Riemann integral</strong>{' '}
          <Math>{String.raw`\overline{\int}_I f`}</Math> by:
        </p>
        <MathBlock>{String.raw`\overline{\int}_I f := \inf\left\{\text{p.c.} \int_I g : g \text{ is a p.c. function on } I \text{ which majorizes } f\right\}`}</MathBlock>
        <p className="mt-2">
          We define the <strong>lower Riemann integral</strong>{' '}
          <Math>{String.raw`\underline{\int}_I f`}</Math> by:
        </p>
        <MathBlock>{String.raw`\underline{\int}_I f := \sup\left\{\text{p.c.} \int_I g : g \text{ is a p.c. function on } I \text{ which minorizes } f\right\}`}</MathBlock>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Intuition:</strong> The upper integral is the infimum of integrals of all
          piecewise constant functions that sit "above" <Math>f</Math>. The lower integral
          is the supremum of integrals of all piecewise constant functions that sit "below"{' '}
          <Math>f</Math>. If these two quantities agree, we can define the integral of <Math>f</Math>.
        </p>
      </Callout>

      <Theorem id="11.3.3" title="Lemma: Bounds on upper and lower integrals">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a function on a bounded interval <Math>I</Math> which
          is bounded by some real number <Math>M</Math>, i.e., <Math>{String.raw`-M \leq f(x) \leq M`}</Math> for
          all <Math>{String.raw`x \in I`}</Math>. Then:
        </p>
        <MathBlock>{String.raw`-M|I| \leq \underline{\int}_I f \leq \overline{\int}_I f \leq M|I|`}</MathBlock>
        <p className="mt-2">
          In particular, both the lower and upper Riemann integrals are real numbers
          (i.e., they are not infinite).
        </p>
        <div className="proof">
          <p>
            The constant function <Math>g(x) = M</Math> is piecewise constant and majorizes <Math>f</Math>,
            so <Math>{String.raw`\overline{\int}_I f \leq \text{p.c.} \int_I g = M|I|`}</Math>.
          </p>
          <p className="mt-2">
            Similarly, <Math>h(x) = -M</Math> minorizes <Math>f</Math>, so{' '}
            <Math>{String.raw`\underline{\int}_I f \geq \text{p.c.} \int_I h = -M|I|`}</Math>.
          </p>
          <p className="mt-2">
            Finally, we show <Math>{String.raw`\underline{\int}_I f \leq \overline{\int}_I f`}</Math>.
            Let <Math>g</Math> be any piecewise constant function majorizing <Math>f</Math>, and
            let <Math>h</Math> be any piecewise constant function minorizing <Math>f</Math>.
            Then <Math>g</Math> majorizes <Math>h</Math>, so{' '}
            <Math>{String.raw`\text{p.c.} \int_I h \leq \text{p.c.} \int_I g`}</Math>.
            Taking suprema in <Math>h</Math> and infima in <Math>g</Math> gives the result.
          </p>
        </div>
      </Theorem>

      <h2>The Riemann Integral</h2>

      <p>
        We now know that the upper Riemann integral is always at least as large as the
        lower Riemann integral. If the two integrals match, then we can define the
        Riemann integral:
      </p>

      <Definition id="11.3.4" title="Riemann integral">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function on a bounded interval <Math>I</Math>.
        </p>
        <p className="mt-2">
          If <Math>{String.raw`\underline{\int}_I f = \overline{\int}_I f`}</Math>, then we say that{' '}
          <Math>f</Math> is <strong>Riemann integrable on</strong> <Math>I</Math> and define:
        </p>
        <MathBlock>{String.raw`\int_I f := \underline{\int}_I f = \overline{\int}_I f`}</MathBlock>
        <p className="mt-2">
          If the upper and lower Riemann integrals are unequal, we say that <Math>f</Math> is{' '}
          <strong>not Riemann integrable</strong>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          Compare this definition to the relationship between the lim sup, lim inf, and
          limit of a sequence <Math>{String.raw`(a_n)`}</Math> established in Proposition 6.4.12(f):
          the lim sup is always greater than or equal to the lim inf, but they are only
          equal when the sequence converges, and in this case they are both equal to the
          limit of the sequence.
        </p>
      </Callout>

      <Callout type="warning">
        <p>
          We do not consider unbounded functions to be Riemann integrable; an integral
          involving such functions is known as an <em>improper integral</em>. It is possible
          to evaluate such integrals using more sophisticated methods (such as the Lebesgue
          integral).
        </p>
      </Callout>

      <Theorem id="11.3.7" title="Lemma: Piecewise constant functions are Riemann integrable">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a piecewise constant function on a bounded
          interval <Math>I</Math>. Then <Math>f</Math> is Riemann integrable, and{' '}
          <Math>{String.raw`\int_I f = \text{p.c.} \int_I f`}</Math>.
        </p>
        <div className="proof">
          <p>
            Since <Math>f</Math> is piecewise constant, <Math>f</Math> majorizes itself and
            minorizes itself. Thus:
          </p>
          <MathBlock>{String.raw`\text{p.c.} \int_I f \leq \overline{\int}_I f \quad \text{and} \quad \underline{\int}_I f \leq \text{p.c.} \int_I f`}</MathBlock>
          <p className="mt-2">
            Combined with <Math>{String.raw`\underline{\int}_I f \leq \overline{\int}_I f`}</Math>,
            we get equality throughout.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          Because of this lemma, we will simply use the notation <Math>{String.raw`\int_I f`}</Math> for
          the Riemann integral, even for piecewise constant functions. The piecewise
          constant integral has served its purpose as a stepping stone.
        </p>
        <p className="mt-2">
          <strong>Special case:</strong> If <Math>I</Math> is a point or the empty set, then{' '}
          <Math>{String.raw`\int_I f = 0`}</Math> for all functions <Math>f: I \to \mathbb{'{R}'}</Math>.
        </p>
      </Callout>

      <h2>Riemann Sums</h2>

      <p>
        We now connect the Riemann integral we have defined to the concept of a
        <em>Riemann sum</em>, which you may have seen in other treatments.
      </p>

      <Definition id="11.3.9" title="Riemann sums">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function on a bounded interval <Math>I</Math>,
          and let <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math>.
        </p>
        <p className="mt-2">
          We define the <strong>upper Riemann sum</strong> <Math>U(f, \mathbf{'{P}'})</Math> by:
        </p>
        <MathBlock>{String.raw`U(f, \mathbf{P}) := \sum_{J \in \mathbf{P}: J \neq \emptyset} \left(\sup_{x \in J} f(x)\right)|J|`}</MathBlock>
        <p className="mt-2">
          We define the <strong>lower Riemann sum</strong> <Math>L(f, \mathbf{'{P}'})</Math> by:
        </p>
        <MathBlock>{String.raw`L(f, \mathbf{P}) := \sum_{J \in \mathbf{P}: J \neq \emptyset} \left(\inf_{x \in J} f(x)\right)|J|`}</MathBlock>
      </Definition>

      <Callout type="note">
        <p>
          The restriction <Math>{String.raw`J \neq \emptyset`}</Math> is required because{' '}
          <Math>{String.raw`\inf_{x \in J} f(x)`}</Math> and <Math>{String.raw`\sup_{x \in J} f(x)`}</Math> are
          infinite (or negative infinite) if <Math>J</Math> is empty.
        </p>
      </Callout>

      <Theorem id="11.3.11" title="Lemma: Connecting Riemann sums to piecewise constant integrals">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function on a bounded interval <Math>I</Math>,
          and let <Math>g</Math> be a function which majorizes <Math>f</Math> and is piecewise
          constant with respect to some partition <Math>\mathbf{'{P}'}</Math> of <Math>I</Math>. Then:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_I g \geq U(f, \mathbf{P})`}</MathBlock>
        <p className="mt-2">
          Similarly, if <Math>h</Math> minorizes <Math>f</Math> and is piecewise constant with
          respect to <Math>\mathbf{'{P}'}</Math>, then:
        </p>
        <MathBlock>{String.raw`\text{p.c.} \int_I h \leq L(f, \mathbf{P})`}</MathBlock>
      </Theorem>

      <Theorem id="11.3.12" title="Proposition: Upper and lower integrals via Riemann sums">
        <p>
          Let <Math>f: I \to \mathbb{'{R}'}</Math> be a bounded function on a bounded interval <Math>I</Math>.
          Then:
        </p>
        <MathBlock>{String.raw`\overline{\int}_I f = \inf\{U(f, \mathbf{P}) : \mathbf{P} \text{ is a partition of } I\}`}</MathBlock>
        <p className="mt-2">and:</p>
        <MathBlock>{String.raw`\underline{\int}_I f = \sup\{L(f, \mathbf{P}) : \mathbf{P} \text{ is a partition of } I\}`}</MathBlock>
        <div className="proof">
          <p>
            We prove the first equality; the second is similar.
          </p>
          <p className="mt-2">
            Let <Math>S = {String.raw`\inf\{U(f, \mathbf{P}) : \mathbf{P} \text{ is a partition of } I\}`}</Math>.
            For any partition <Math>\mathbf{'{P}'}</Math>, the function{' '}
            <Math>{String.raw`g(x) = \sup_{y \in J} f(y)`}</Math> for <Math>{String.raw`x \in J`}</Math> is
            piecewise constant with respect to <Math>\mathbf{'{P}'}</Math> and majorizes <Math>f</Math>.
            Thus <Math>{String.raw`\overline{\int}_I f \leq \text{p.c.} \int_I g = U(f, \mathbf{P})`}</Math>,
            giving <Math>{String.raw`\overline{\int}_I f \leq S`}</Math>.
          </p>
          <p className="mt-2">
            Conversely, by Lemma 11.3.11, any piecewise constant majorant <Math>g</Math> with
            respect to <Math>\mathbf{'{P}'}</Math> satisfies{' '}
            <Math>{String.raw`\text{p.c.} \int_I g \geq U(f, \mathbf{P}) \geq S`}</Math>.
            Taking the infimum gives <Math>{String.raw`\overline{\int}_I f \geq S`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Equivalent definition:</strong> Proposition 11.3.12 shows that a function
          is Riemann integrable if and only if:
        </p>
        <MathBlock>{String.raw`\inf_{\mathbf{P}} U(f, \mathbf{P}) = \sup_{\mathbf{P}} L(f, \mathbf{P})`}</MathBlock>
        <p className="mt-2">
          This is equivalent to saying: for every <Math>{String.raw`\varepsilon > 0`}</Math>,
          there exists a partition <Math>\mathbf{'{P}'}</Math> such that{' '}
          <Math>{String.raw`U(f, \mathbf{P}) - L(f, \mathbf{P}) < \varepsilon`}</Math>.
        </p>
      </Callout>

      <Example id="11.3.13" title="A non-Riemann-integrable function">
        <p>
          Let <Math>f: [0, 1] \to \mathbb{'{R}'}</Math> be defined by:
        </p>
        <MathBlock>{String.raw`f(x) = \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`}</MathBlock>
        <p className="mt-2">
          This is the <strong>Dirichlet function</strong>. For any partition <Math>\mathbf{'{P}'}</Math>,
          each non-empty interval <Math>J</Math> contains both rationals and irrationals, so:
        </p>
        <MathBlock>{String.raw`\sup_{x \in J} f(x) = 1 \quad \text{and} \quad \inf_{x \in J} f(x) = 0`}</MathBlock>
        <p className="mt-2">
          Therefore <Math>U(f, \mathbf{'{P}'}) = 1</Math> and <Math>L(f, \mathbf{'{P}'}) = 0</Math> for
          every partition. Thus:
        </p>
        <MathBlock>{String.raw`\overline{\int}_{[0,1]} f = 1 \neq 0 = \underline{\int}_{[0,1]} f`}</MathBlock>
        <p className="mt-2">
          So the Dirichlet function is <strong>not Riemann integrable</strong>.
        </p>
      </Example>

      <Callout type="note">
        <p>
          The Dirichlet function is an example of a bounded function that fails to be
          Riemann integrable. It is, however, Lebesgue integrable (with integral 0), as
          we will see in Chapter 19.
        </p>
      </Callout>
    </LessonLayout>
  );
}
