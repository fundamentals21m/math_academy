import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <p>
        Just as we did with limits, series, and derivatives, we now give the basic laws
        for manipulating the Riemann integral. These fundamental properties allow us to
        compute integrals and establish important relationships between integrable functions.
      </p>

      <h2>Laws of Riemann Integration</h2>

      <Theorem id="11.4.1" title="Laws of Riemann integration">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: I \to \mathbb{'{R}'}</Math> be Riemann integrable functions on <Math>I</Math>.
        </p>
        <ol className="list-alpha list-inside mt-3 space-y-3">
          <li>
            <strong>Additivity:</strong> The function <Math>f + g</Math> is Riemann integrable, and:
            <MathBlock>{String.raw`\int_I (f + g) = \int_I f + \int_I g`}</MathBlock>
          </li>
          <li>
            <strong>Scalar multiplication:</strong> For any real number <Math>c</Math>, the function{' '}
            <Math>cf</Math> is Riemann integrable, and:
            <MathBlock>{String.raw`\int_I (cf) = c \int_I f`}</MathBlock>
          </li>
          <li>
            <strong>Linearity (difference):</strong> The function <Math>f - g</Math> is Riemann
            integrable, and:
            <MathBlock>{String.raw`\int_I (f - g) = \int_I f - \int_I g`}</MathBlock>
          </li>
          <li>
            <strong>Non-negativity:</strong> If <Math>{String.raw`f(x) \geq 0`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then:
            <MathBlock>{String.raw`\int_I f \geq 0`}</MathBlock>
          </li>
          <li>
            <strong>Monotonicity:</strong> If <Math>{String.raw`f(x) \geq g(x)`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then:
            <MathBlock>{String.raw`\int_I f \geq \int_I g`}</MathBlock>
          </li>
          <li>
            <strong>Constant functions:</strong> If <Math>f(x) = c</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>, then:
            <MathBlock>{String.raw`\int_I f = c|I|`}</MathBlock>
          </li>
          <li>
            <strong>Extension by zero:</strong> Let <Math>J</Math> be a bounded interval
            containing <Math>I</Math> (i.e., <Math>{String.raw`I \subseteq J`}</Math>), and let{' '}
            <Math>F: J \to \mathbb{'{R}'}</Math> be the function:
            <MathBlock>{String.raw`F(x) := \begin{cases} f(x) & \text{if } x \in I \\ 0 & \text{if } x \notin I \end{cases}`}</MathBlock>
            Then <Math>F</Math> is Riemann integrable on <Math>J</Math>, and{' '}
            <Math>{String.raw`\int_J F = \int_I f`}</Math>.
          </li>
          <li>
            <strong>Additivity over intervals:</strong> Suppose that <Math>{String.raw`\{J, K\}`}</Math> is
            a partition of <Math>I</Math> into two intervals <Math>J</Math> and <Math>K</Math>.
            Then the restrictions <Math>{String.raw`f|_J: J \to \mathbb{R}`}</Math> and{' '}
            <Math>{String.raw`f|_K: K \to \mathbb{R}`}</Math> are Riemann integrable on <Math>J</Math> and{' '}
            <Math>K</Math> respectively, and:
            <MathBlock>{String.raw`\int_I f = \int_J f|_J + \int_K f|_K`}</MathBlock>
          </li>
        </ol>
      </Theorem>

      <Callout type="note">
        <p>
          We often abbreviate <Math>{String.raw`\int_J f|_J`}</Math> as <Math>{String.raw`\int_J f`}</Math>,
          even though <Math>f</Math> is really defined on a larger domain than just <Math>J</Math>.
        </p>
      </Callout>

      <h2>Proof Sketch</h2>

      <p>
        The proofs of these laws follow similar patterns to those for the piecewise
        constant integral (Theorem 11.2.16), but require more care due to the use of
        upper and lower integrals.
      </p>

      <Example id="11.4.2" title="Proof of linearity (part a)">
        <p>
          To prove <Math>{String.raw`\int_I (f + g) = \int_I f + \int_I g`}</Math>:
        </p>
        <p className="mt-2">
          For any <Math>{String.raw`\varepsilon > 0`}</Math>, choose piecewise constant functions{' '}
          <Math>\underline{'{f}'}</Math>, <Math>\overline{'{f}'}</Math>,{' '}
          <Math>\underline{'{g}'}</Math>, <Math>\overline{'{g}'}</Math> such that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>\underline{'{f}'}</Math> minorizes <Math>f</Math> and <Math>\overline{'{f}'}</Math> majorizes <Math>f</Math></li>
          <li><Math>\underline{'{g}'}</Math> minorizes <Math>g</Math> and <Math>\overline{'{g}'}</Math> majorizes <Math>g</Math></li>
          <li><Math>{String.raw`\int_I \overline{f} - \int_I \underline{f} < \varepsilon`}</Math></li>
          <li><Math>{String.raw`\int_I \overline{g} - \int_I \underline{g} < \varepsilon`}</Math></li>
        </ul>
        <p className="mt-2">
          Then <Math>{String.raw`\underline{f} + \underline{g}`}</Math> minorizes <Math>f + g</Math> and{' '}
          <Math>{String.raw`\overline{f} + \overline{g}`}</Math> majorizes <Math>f + g</Math>.
          The gap between their integrals is less than <Math>{String.raw`2\varepsilon`}</Math>,
          which can be made arbitrarily small. This shows <Math>f + g</Math> is integrable
          with the claimed integral.
        </p>
      </Example>

      <h2>Additional Integrability Results</h2>

      <Theorem id="11.4.3" title="Max and min preserve integrability">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: I \to \mathbb{'{R}'}</Math> be Riemann integrable functions.
        </p>
        <p className="mt-2">
          Then the functions <Math>{String.raw`\max(f, g): I \to \mathbb{R}`}</Math> and{' '}
          <Math>{String.raw`\min(f, g): I \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`\max(f,g)(x) := \max(f(x), g(x)) \quad \text{and} \quad \min(f,g)(x) := \min(f(x), g(x))`}</MathBlock>
        <p className="mt-2">
          are also Riemann integrable.
        </p>
        <div className="proof">
          <p>
            We prove this for <Math>{String.raw`\max(f, g)`}</Math>; the case of <Math>{String.raw`\min(f, g)`}</Math> is similar.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`\varepsilon > 0`}</Math>. Since <Math>f</Math> and <Math>g</Math> are
            Riemann integrable, we can find piecewise constant functions{' '}
            <Math>\underline{'{f}'}</Math>, <Math>\overline{'{f}'}</Math>,{' '}
            <Math>\underline{'{g}'}</Math>, <Math>\overline{'{g}'}</Math> such that:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><Math>\underline{'{f}'}</Math> minorizes <Math>f</Math>, <Math>\overline{'{f}'}</Math> majorizes <Math>f</Math></li>
            <li><Math>{String.raw`\int_I \overline{f} \leq \int_I f + \varepsilon`}</Math> and{' '}
              <Math>{String.raw`\int_I \underline{f} \geq \int_I f - \varepsilon`}</Math></li>
            <li>Similarly for <Math>g</Math></li>
          </ul>
          <p className="mt-2">
            Define <Math>{String.raw`h := (\overline{f} - \underline{f}) + (\overline{g} - \underline{g})`}</Math>.
            Then <Math>{String.raw`\int_I h \leq 4\varepsilon`}</Math>.
          </p>
          <p className="mt-2">
            Now <Math>{String.raw`\max(\underline{f}, \underline{g})`}</Math> is piecewise constant and
            minorizes <Math>{String.raw`\max(f, g)`}</Math>. Similarly{' '}
            <Math>{String.raw`\max(\overline{f}, \overline{g})`}</Math> majorizes <Math>{String.raw`\max(f, g)`}</Math>.
          </p>
          <p className="mt-2">
            One can show that:
          </p>
          <MathBlock>{String.raw`\max(\overline{f}, \overline{g})(x) - \max(\underline{f}, \underline{g})(x) \leq h(x)`}</MathBlock>
          <p className="mt-2">
            for all <Math>{String.raw`x \in I`}</Math>. Thus the gap between upper and lower integrals
            of <Math>{String.raw`\max(f, g)`}</Math> is at most <Math>{String.raw`4\varepsilon`}</Math>, which can
            be made arbitrarily small.
          </p>
        </div>
      </Theorem>

      <Theorem id="11.4.4" title="Corollary: Absolute value preserves integrability">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a Riemann integrable function. Then the function <Math>|f|: I \to \mathbb{'{R}'}</Math> defined
          by <Math>|f|(x) := |f(x)|</Math> is also Riemann integrable.
        </p>
        <div className="proof">
          <p>
            We have <Math>|f| = {String.raw`\max(f, -f)`}</Math>. Since <Math>f</Math> is integrable,
            so is <Math>-f</Math> by Theorem 11.4.1(b). By Theorem 11.4.3,{' '}
            <Math>{String.raw`\max(f, -f) = |f|`}</Math> is integrable.
          </p>
        </div>
      </Theorem>

      <Theorem id="11.4.5" title="Products of integrable functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: I \to \mathbb{'{R}'}</Math> be Riemann integrable functions on <Math>I</Math>.
          Then the product <Math>fg: I \to \mathbb{'{R}'}</Math> is also Riemann integrable.
        </p>
        <div className="proof">
          <p>
            First note that if <Math>f</Math> is integrable, then <Math>f^2</Math> is integrable.
            This can be shown using approximation by piecewise constant functions (the
            square of a piecewise constant function is piecewise constant).
          </p>
          <p className="mt-2">
            Then use the identity:
          </p>
          <MathBlock>{String.raw`fg = \frac{1}{4}\left[(f + g)^2 - (f - g)^2\right]`}</MathBlock>
          <p className="mt-2">
            Since <Math>f + g</Math> and <Math>f - g</Math> are integrable, so are their squares,
            and hence <Math>fg</Math> is integrable.
          </p>
        </div>
      </Theorem>

      <h2>The Triangle Inequality for Integrals</h2>

      <Theorem id="11.4.6" title="Triangle inequality for integrals">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a Riemann integrable function. Then:
        </p>
        <MathBlock>{String.raw`\left|\int_I f\right| \leq \int_I |f|`}</MathBlock>
        <div className="proof">
          <p>
            Since <Math>-|f(x)| \leq f(x) \leq |f(x)|</Math> for all <Math>{String.raw`x \in I`}</Math>,
            by monotonicity (Theorem 11.4.1(e)):
          </p>
          <MathBlock>{String.raw`-\int_I |f| \leq \int_I f \leq \int_I |f|`}</MathBlock>
          <p className="mt-2">
            This is equivalent to <Math>{String.raw`\left|\int_I f\right| \leq \int_I |f|`}</Math>.
          </p>
        </div>
      </Theorem>

      <h2>Bounds on Integrals</h2>

      <Theorem id="11.4.7" title="Bounds on integrals">
        <p>
          Let <Math>I</Math> be a bounded interval, let <Math>f: I \to \mathbb{'{R}'}</Math> be
          a Riemann integrable function, and let <Math>M</Math> be a real number such that{' '}
          <Math>{String.raw`|f(x)| \leq M`}</Math> for all <Math>{String.raw`x \in I`}</Math>.
        </p>
        <p className="mt-2">Then:</p>
        <MathBlock>{String.raw`\left|\int_I f\right| \leq M|I|`}</MathBlock>
        <div className="proof">
          <p>
            By the triangle inequality and monotonicity:
          </p>
          <MathBlock>{String.raw`\left|\int_I f\right| \leq \int_I |f| \leq \int_I M = M|I|`}</MathBlock>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Summary:</strong> We have established that Riemann integrable functions form
          a <em>vector space</em> (closed under addition and scalar multiplication) and an
          <em>algebra</em> (closed under multiplication). The integral is a <em>linear
          functional</em> on this space that respects the ordering of functions.
        </p>
      </Callout>

      <Definition id="11.4.8" title="Notation for definite integrals">
        <p>
          If <Math>I = [a, b]</Math> is a closed interval with <Math>{String.raw`a \leq b`}</Math>,
          we often write:
        </p>
        <MathBlock>{String.raw`\int_a^b f := \int_{[a,b]} f \quad \text{or} \quad \int_a^b f(x)\,dx := \int_{[a,b]} f`}</MathBlock>
        <p className="mt-2">
          The variable <Math>x</Math> in <Math>{String.raw`\int_a^b f(x)\,dx`}</Math> is a <em>dummy
          variable</em> and can be replaced by any other symbol.
        </p>
      </Definition>
    </LessonLayout>
  );
}
