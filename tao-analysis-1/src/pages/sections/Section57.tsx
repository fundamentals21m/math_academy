import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <p>
        We have established the basic properties of Riemann integrable functions, but so far
        we have not actually produced any such functions other than piecewise constant ones.
        Now we rectify this by showing that a large class of useful functions—specifically,
        continuous functions—are Riemann integrable.
      </p>

      <h2>Uniformly Continuous Functions</h2>

      <Theorem id="11.5.1" title="Uniformly continuous functions are Riemann integrable">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>f</Math> be a function
          which is uniformly continuous on <Math>I</Math>. Then <Math>f</Math> is Riemann
          integrable.
        </p>
        <div className="proof">
          <p>
            From Proposition 9.9.15 we see that <Math>f</Math> is bounded. Now we have to
            show that <Math>{String.raw`\underline{\int}_I f = \overline{\int}_I f`}</Math>.
          </p>
          <p className="mt-2">
            If <Math>I</Math> is a point or the empty set then the theorem is trivial, so
            let us assume that <Math>I</Math> is one of the four intervals{' '}
            <Math>[a, b]</Math>, <Math>(a, b)</Math>, <Math>(a, b]</Math>, or{' '}
            <Math>[a, b)</Math> for some real numbers <Math>{String.raw`a < b`}</Math>.
          </p>
          <p className="mt-2">
            Let <Math>{String.raw`\varepsilon > 0`}</Math> be arbitrary. By uniform continuity,
            there exists a <Math>{String.raw`\delta > 0`}</Math> such that{' '}
            <Math>{String.raw`|f(x) - f(y)| < \varepsilon`}</Math> whenever{' '}
            <Math>{String.raw`x, y \in I`}</Math> are such that{' '}
            <Math>{String.raw`|x - y| < \delta`}</Math>.
          </p>
          <p className="mt-2">
            By the Archimedean principle, there exists an integer <Math>{String.raw`N > 0`}</Math>{' '}
            such that <Math>{String.raw`(b - a)/N < \delta`}</Math>.
          </p>
          <p className="mt-2">
            We can partition <Math>I</Math> into <Math>N</Math> intervals{' '}
            <Math>{String.raw`J_1, \ldots, J_N`}</Math>, each of length{' '}
            <Math>{String.raw`(b-a)/N`}</Math>. By Proposition 11.3.12:
          </p>
          <MathBlock>{String.raw`\overline{\int}_I f \leq \sum_{k=1}^{N} \left(\sup_{x \in J_k} f(x)\right)|J_k|`}</MathBlock>
          <p className="mt-2">and</p>
          <MathBlock>{String.raw`\underline{\int}_I f \geq \sum_{k=1}^{N} \left(\inf_{x \in J_k} f(x)\right)|J_k|`}</MathBlock>
          <p className="mt-2">so in particular</p>
          <MathBlock>{String.raw`\overline{\int}_I f - \underline{\int}_I f \leq \sum_{k=1}^{N} \left(\sup_{x \in J_k} f(x) - \inf_{x \in J_k} f(x)\right)|J_k|`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`|J_k| = (b-a)/N < \delta`}</Math>, we have{' '}
            <Math>{String.raw`|f(x) - f(y)| < \varepsilon`}</Math> for all{' '}
            <Math>{String.raw`x, y \in J_k`}</Math>. Taking suprema and infima:
          </p>
          <MathBlock>{String.raw`\sup_{x \in J_k} f(x) \leq \inf_{y \in J_k} f(y) + \varepsilon`}</MathBlock>
          <p className="mt-2">Thus:</p>
          <MathBlock>{String.raw`\overline{\int}_I f - \underline{\int}_I f \leq \sum_{k=1}^{N} \varepsilon |J_k| = \varepsilon(b - a)`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`\varepsilon > 0`}</Math> was arbitrary while{' '}
            <Math>(b - a)</Math> is fixed, and since{' '}
            <Math>{String.raw`\overline{\int}_I f - \underline{\int}_I f \geq 0`}</Math> by Lemma 11.3.3,
            we conclude that <Math>f</Math> is Riemann integrable.
          </p>
        </div>
      </Theorem>

      <h2>Continuous Functions on Closed Intervals</h2>

      <p>
        Combining Theorem 11.5.1 with the fact that continuous functions on closed bounded
        intervals are uniformly continuous (Theorem 9.9.16), we obtain the following
        fundamental result:
      </p>

      <Theorem id="11.5.2" title="Corollary: Continuous functions on closed intervals">
        <p>
          Let <Math>[a, b]</Math> be a closed interval, and let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be continuous. Then{' '}
          <Math>f</Math> is Riemann integrable.
        </p>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Important:</strong> This corollary is <em>not</em> true if{' '}
          <Math>[a, b]</Math> is replaced by any other sort of interval (open, half-open),
          since continuous functions on such intervals are not guaranteed to be bounded.
        </p>
        <p className="mt-2">
          For instance, the function <Math>{String.raw`f: (0, 1) \to \mathbb{R}`}</Math>{' '}
          defined by <Math>f(x) := 1/x</Math> is continuous but not Riemann integrable
          (it is unbounded).
        </p>
      </Callout>

      <h2>Bounded Continuous Functions</h2>

      <p>
        However, if we assume that a function is both continuous <em>and</em> bounded,
        we can recover Riemann integrability on any bounded interval:
      </p>

      <Theorem id="11.5.3" title="Proposition: Bounded continuous functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be both continuous and bounded.
          Then <Math>f</Math> is Riemann integrable on <Math>I</Math>.
        </p>
        <div className="proof">
          <p>
            If <Math>I</Math> is a point or an empty set then the claim is trivial;
            if <Math>I</Math> is a closed interval the claim follows from Corollary 11.5.2.
            So let us assume that <Math>I</Math> is of the form <Math>(a, b]</Math>,{' '}
            <Math>(a, b)</Math>, or <Math>[a, b)</Math> for some{' '}
            <Math>{String.raw`a < b`}</Math>.
          </p>
          <p className="mt-2">
            We have a bound <Math>M</Math> for <Math>f</Math>, so that{' '}
            <Math>{String.raw`-M \leq f(x) \leq M`}</Math> for all{' '}
            <Math>{String.raw`x \in I`}</Math>.
          </p>
          <p className="mt-2">
            Now let <Math>{String.raw`0 < \varepsilon < (b-a)/2`}</Math> be a small number.
            The function <Math>f</Math> when restricted to the interval{' '}
            <Math>{String.raw`[a + \varepsilon, b - \varepsilon]`}</Math> is continuous, and
            hence Riemann integrable by Corollary 11.5.2.
          </p>
          <p className="mt-2">
            We can find a piecewise constant function{' '}
            <Math>{String.raw`h: [a + \varepsilon, b - \varepsilon] \to \mathbb{R}`}</Math>{' '}
            which majorizes <Math>f</Math> on{' '}
            <Math>{String.raw`[a + \varepsilon, b - \varepsilon]`}</Math> such that:
          </p>
          <MathBlock>{String.raw`\int_{[a+\varepsilon, b-\varepsilon]} h \leq \int_{[a+\varepsilon, b-\varepsilon]} f + \varepsilon`}</MathBlock>
          <p className="mt-2">
            Define <Math>{String.raw`\tilde{h}: I \to \mathbb{R}`}</Math> by:
          </p>
          <MathBlock>{String.raw`\tilde{h}(x) := \begin{cases} h(x) & \text{if } x \in [a + \varepsilon, b - \varepsilon] \\ M & \text{if } x \in I \setminus [a + \varepsilon, b - \varepsilon] \end{cases}`}</MathBlock>
          <p className="mt-2">
            Then <Math>{String.raw`\tilde{h}`}</Math> is piecewise constant on <Math>I</Math>{' '}
            and majorizes <Math>f</Math>. By the laws of integration:
          </p>
          <MathBlock>{String.raw`\overline{\int}_I f \leq \int_{[a+\varepsilon, b-\varepsilon]} f + (2M + 1)\varepsilon`}</MathBlock>
          <p className="mt-2">
            A similar argument for the lower integral gives:
          </p>
          <MathBlock>{String.raw`\underline{\int}_I f \geq \int_{[a+\varepsilon, b-\varepsilon]} f - (2M + 1)\varepsilon`}</MathBlock>
          <p className="mt-2">
            Hence <Math>{String.raw`\overline{\int}_I f - \underline{\int}_I f \leq (4M + 2)\varepsilon`}</Math>.
            Since <Math>{String.raw`\varepsilon`}</Math> is arbitrary, we conclude that{' '}
            <Math>f</Math> is Riemann integrable.
          </p>
        </div>
      </Theorem>

      <h2>Piecewise Continuous Functions</h2>

      <p>
        We can expand the class of Riemann integrable functions further to include
        bounded <em>piecewise continuous</em> functions.
      </p>

      <Definition id="11.5.4" title="Piecewise continuous functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math>. We say that <Math>f</Math> is{' '}
          <strong>piecewise continuous</strong> on <Math>I</Math> iff there exists a
          partition <Math>\mathbf{'{P}'}</Math> of <Math>I</Math> such that{' '}
          <Math>{String.raw`f|_J`}</Math> is continuous on <Math>J</Math> for all{' '}
          <Math>{String.raw`J \in \mathbf{P}`}</Math>.
        </p>
      </Definition>

      <Example id="11.5.5" title="A piecewise continuous function">
        <p>
          The function <Math>{String.raw`F: [1, 3] \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`F(x) := \begin{cases} x^2 & \text{if } 1 \leq x < 2 \\ 7 & \text{if } x = 2 \\ x^3 & \text{if } 2 < x \leq 3 \end{cases}`}</MathBlock>
        <p className="mt-2">
          is <em>not</em> continuous on <Math>[1, 3]</Math>, but it <em>is</em> piecewise
          continuous on <Math>[1, 3]</Math>. This is because it is continuous when
          restricted to <Math>[1, 2)</Math> or <Math>{String.raw`\{2\}`}</Math> or{' '}
          <Math>(2, 3]</Math>, and these three intervals partition <Math>[1, 3]</Math>.
        </p>
      </Example>

      <Theorem id="11.5.6" title="Proposition: Piecewise continuous bounded functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be both piecewise continuous and
          bounded. Then <Math>f</Math> is Riemann integrable.
        </p>
        <div className="proof">
          <p>
            Let <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math> such that{' '}
            <Math>{String.raw`f|_J`}</Math> is continuous on <Math>J</Math> for each{' '}
            <Math>{String.raw`J \in \mathbf{P}`}</Math>.
          </p>
          <p className="mt-2">
            Since <Math>f</Math> is bounded, so is <Math>{String.raw`f|_J`}</Math> for each{' '}
            <Math>J</Math>. By Proposition 11.5.3, each restriction{' '}
            <Math>{String.raw`f|_J`}</Math> is Riemann integrable on <Math>J</Math>.
          </p>
          <p className="mt-2">
            By Theorem 11.4.1(h) (additivity over intervals), <Math>f</Math> is Riemann
            integrable on <Math>I</Math>, with:
          </p>
          <MathBlock>{String.raw`\int_I f = \sum_{J \in \mathbf{P}} \int_J f|_J`}</MathBlock>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Summary:</strong> We have shown that a large class of "nice" functions
          are Riemann integrable:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Uniformly continuous functions on bounded intervals</li>
          <li>Continuous functions on closed bounded intervals</li>
          <li>Bounded continuous functions on any bounded interval</li>
          <li>Bounded piecewise continuous functions on bounded intervals</li>
        </ul>
        <p className="mt-2">
          The key insight is that uniform continuity gives control over the gap between
          upper and lower Riemann sums, allowing us to make this gap arbitrarily small.
        </p>
      </Callout>
    </LessonLayout>
  );
}
