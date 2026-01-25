import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <p>
        We know that a continuous function on a closed interval <Math>[a, b]</Math> remains
        bounded. However, if we replace the closed interval by an open interval, then continuous
        functions need not be bounded anymore. An example is <Math>{String.raw`f: (0, 2) \to \mathbb{R}`}</Math> defined
        by <Math>f(x) := 1/x</Math>. This function is continuous at every point in <Math>(0, 2)</Math>,
        but is not bounded.
      </p>

      <p className="mt-4">
        Informally, the problem is that while the function is continuous at every point in <Math>(0, 2)</Math>,
        it becomes "less and less" continuous as one approaches the endpoint <Math>0</Math>. To make
        this precise, we introduce <em>uniform continuity</em>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Idea: Islands of Stability</h2>

      <Example id="example-9.9.1" title="Example 9.9.1 (Varying Continuity)">
        <p>
          Take the function <Math>f(x) := 1/x</Math> at the point <Math>{String.raw`x_0 = 1`}</Math>. To
          ensure <Math>f(x)</Math> is <Math>0.1</Math>-close to <Math>{String.raw`f(x_0)`}</Math>, it suffices
          to take <Math>x</Math> to be <Math>1/11</Math>-close to <Math>{String.raw`x_0`}</Math>. So the
          "island of stability" around <Math>{String.raw`x_0 = 1`}</Math> has radius about <Math>1/11</Math>.
        </p>
        <p className="mt-2">
          Now consider <Math>{String.raw`x_0 = 0.1`}</Math>. To ensure <Math>f(x)</Math> is <Math>0.1</Math>-close
          to <Math>{String.raw`f(x_0)`}</Math>, we need <Math>x</Math> to be <Math>1/1010</Math>-close
          to <Math>{String.raw`x_0`}</Math>. The island of stability around <Math>0.1</Math> is much
          smaller than around <Math>1</Math>.
        </p>
        <p className="mt-2">
          This shows that <Math>f(x) = 1/x</Math> becomes more "unstable" as we approach <Math>0</Math>—the
          required <Math>\delta</Math> for the same <Math>\varepsilon</Math> shrinks as we move toward <Math>0</Math>.
        </p>
      </Example>

      <Example id="example-uniform" title="Example: A Uniformly Continuous Function">
        <p>
          Consider <Math>{String.raw`g: (0, 2) \to \mathbb{R}`}</Math> defined by <Math>g(x) := 2x</Math>.
          Fix <Math>\varepsilon = 0.1</Math>. At <Math>{String.raw`x_0 = 1`}</Math>, if <Math>x</Math> is <Math>0.05</Math>-close
          to <Math>{String.raw`x_0`}</Math>, then <Math>g(x)</Math> is <Math>0.1</Math>-close to <Math>{String.raw`g(x_0)`}</Math>.
        </p>
        <p className="mt-2">
          Crucially, the same <Math>\delta = 0.05</Math> works for <em>every</em> point <Math>{String.raw`x_0`}</Math>.
          Whether <Math>{String.raw`x_0 = 0.1`}</Math> or <Math>{String.raw`x_0 = 1`}</Math>, we can use the
          same <Math>\delta</Math>. This is <em>uniform continuity</em>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition of Uniform Continuity</h2>

      <Definition id="definition-9.9.2" title="Definition 9.9.2 (Uniform Continuity)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
          let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function. We say that <Math>f</Math> is
          <strong> uniformly continuous</strong> if, for every <Math>{String.raw`\varepsilon > 0`}</Math>,
          there exists a <Math>{String.raw`\delta > 0`}</Math> such that <Math>f(x)</Math> and <Math>{String.raw`f(x_0)`}</Math> are
          <Math>\varepsilon</Math>-close whenever <Math>{String.raw`x, x_0 \in X`}</Math> are two points
          which are <Math>\delta</Math>-close.
        </p>
        <p className="mt-2">
          In symbols: for every <Math>{String.raw`\varepsilon > 0`}</Math>, there
          exists <Math>{String.raw`\delta > 0`}</Math> such that
        </p>
        <MathBlock>{String.raw`|f(x) - f(x_0)| < \varepsilon \quad \text{whenever } |x - x_0| < \delta \text{ and } x, x_0 \in X.`}</MathBlock>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Key difference from ordinary continuity:</strong> In ordinary continuity,
          for each <Math>\varepsilon</Math> and each <Math>{String.raw`x_0 \in X`}</Math>, there exists
          a <Math>\delta</Math> (which may depend on <Math>{String.raw`x_0`}</Math>). In uniform continuity,
          for each <Math>\varepsilon</Math>, there exists a <em>single</em> <Math>\delta</Math> that
          works for <em>all</em> <Math>{String.raw`x_0 \in X`}</Math>.
        </p>
        <p className="mt-2">
          Every uniformly continuous function is continuous, but not conversely.
        </p>
      </Callout>

      <Example id="example-9.9.4" title="Example 9.9.4 (Not Uniformly Continuous)">
        <p>
          The function <Math>{String.raw`f: (0, 2) \to \mathbb{R}`}</Math> defined by <Math>f(x) := 1/x</Math> is
          continuous on <Math>(0, 2)</Math>, but <em>not</em> uniformly continuous. The continuity
          (i.e., the dependence of <Math>\delta</Math> on <Math>\varepsilon</Math>) becomes worse
          and worse as <Math>{String.raw`x \to 0`}</Math>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sequential Characterization</h2>

      <p>
        Just as continuity has a sequential characterization, so does uniform continuity. We first
        need the notion of equivalent sequences.
      </p>

      <Definition id="definition-9.9.5" title="Definition 9.9.5 (Equivalent Sequences)">
        <p>
          Let <Math>m</Math> be an integer, and let <Math>{String.raw`(a_n)_{n=m}^\infty`}</Math> and <Math>{String.raw`(b_n)_{n=m}^\infty`}</Math> be
          two sequences of real numbers. Let <Math>{String.raw`\varepsilon > 0`}</Math> be given.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            We say <Math>{String.raw`(a_n)`}</Math> is <strong><Math>\varepsilon</Math>-close</strong> to <Math>{String.raw`(b_n)`}</Math> iff <Math>{String.raw`a_n`}</Math> is
            <Math>\varepsilon</Math>-close to <Math>{String.raw`b_n`}</Math> for each <Math>{String.raw`n \geq m`}</Math>.
          </li>
          <li>
            We say <Math>{String.raw`(a_n)`}</Math> is <strong>eventually <Math>\varepsilon</Math>-close</strong> to <Math>{String.raw`(b_n)`}</Math> iff
            there exists <Math>{String.raw`N \geq m`}</Math> such that <Math>{String.raw`(a_n)_{n=N}^\infty`}</Math> and <Math>{String.raw`(b_n)_{n=N}^\infty`}</Math> are
            <Math>\varepsilon</Math>-close.
          </li>
          <li>
            Two sequences are <strong>equivalent</strong> iff for each <Math>{String.raw`\varepsilon > 0`}</Math>, they
            are eventually <Math>\varepsilon</Math>-close.
          </li>
        </ul>
      </Definition>

      <Theorem
        id="lemma-9.9.7"
        title="Lemma 9.9.7 (Characterization of Equivalent Sequences)"
        statement={
          <>
            Let <Math>{String.raw`(a_n)_{n=1}^\infty`}</Math> and <Math>{String.raw`(b_n)_{n=1}^\infty`}</Math> be sequences
            of real numbers (not necessarily bounded or convergent).
            Then <Math>{String.raw`(a_n)`}</Math> and <Math>{String.raw`(b_n)`}</Math> are equivalent if and only
            if <Math>{String.raw`\lim_{n \to \infty}(a_n - b_n) = 0`}</Math>.
          </>
        }
        proof={
          <>
            <p>
              (<Math>\Rightarrow</Math>) If the sequences are equivalent, then for any <Math>{String.raw`\varepsilon > 0`}</Math>,
              they are eventually <Math>\varepsilon</Math>-close, meaning <Math>{String.raw`|a_n - b_n| < \varepsilon`}</Math> for
              large <Math>n</Math>. This is exactly the definition of <Math>{String.raw`\lim_{n \to \infty}(a_n - b_n) = 0`}</Math>.
            </p>
            <p className="mt-2">
              (<Math>\Leftarrow</Math>) Conversely, if <Math>{String.raw`\lim_{n \to \infty}(a_n - b_n) = 0`}</Math>,
              then for any <Math>{String.raw`\varepsilon > 0`}</Math>, there exists <Math>N</Math> such
              that <Math>{String.raw`|a_n - b_n| < \varepsilon`}</Math> for all <Math>{String.raw`n \geq N`}</Math>.
              Thus the sequences are eventually <Math>\varepsilon</Math>-close.
            </p>
          </>
        }
      />

      <Theorem
        id="proposition-9.9.8"
        title="Proposition 9.9.8 (Sequential Characterization of Uniform Continuity)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function. The following are equivalent:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><Math>f</Math> is uniformly continuous on <Math>X</Math>.</li>
              <li>
                Whenever <Math>{String.raw`(x_n)_{n=0}^\infty`}</Math> and <Math>{String.raw`(y_n)_{n=0}^\infty`}</Math> are
                two equivalent sequences in <Math>X</Math>, the sequences <Math>{String.raw`(f(x_n))_{n=0}^\infty`}</Math> and <Math>{String.raw`(f(y_n))_{n=0}^\infty`}</Math> are
                also equivalent.
              </li>
            </ol>
          </>
        }
        proof={
          <>
            <p>See Exercise 9.9.2.</p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Comparison with Proposition 9.3.9:</strong> That proposition said continuous
          functions map <em>convergent</em> sequences to convergent sequences. Proposition 9.9.8
          says uniformly continuous functions map <em>equivalent pairs</em> of sequences to
          equivalent pairs. The connection: <Math>{String.raw`(x_n)`}</Math> converges to <Math>{String.raw`x_*`}</Math> iff <Math>{String.raw`(x_n)`}</Math> and
          the constant sequence <Math>{String.raw`(x_*)_{n=0}^\infty`}</Math> are equivalent.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples Using Sequences</h2>

      <Example id="example-9.9.10" title="Example 9.9.10 (1/x is Not Uniformly Continuous)">
        <p>
          Consider <Math>{String.raw`f: (0, 2) \to \mathbb{R}`}</Math> defined by <Math>f(x) := 1/x</Math>.
          The sequences <Math>{String.raw`(1/n)_{n=1}^\infty`}</Math> and <Math>{String.raw`(1/2n)_{n=1}^\infty`}</Math> are
          equivalent in <Math>(0, 2)</Math> since
        </p>
        <MathBlock>{String.raw`\frac{1}{n} - \frac{1}{2n} = \frac{1}{2n} \to 0.`}</MathBlock>
        <p>
          However, <Math>{String.raw`f(1/n) = n`}</Math> and <Math>{String.raw`f(1/2n) = 2n`}</Math>, so
        </p>
        <MathBlock>{String.raw`f(1/n) - f(1/2n) = n - 2n = -n \to -\infty.`}</MathBlock>
        <p>
          The sequences <Math>{String.raw`(f(1/n))`}</Math> and <Math>{String.raw`(f(1/2n))`}</Math> are <em>not</em> equivalent.
          By Proposition 9.9.8, <Math>f</Math> is not uniformly continuous.
        </p>
      </Example>

      <Example id="example-9.9.11" title="Example 9.9.11 (x² is Not Uniformly Continuous on ℝ)">
        <p>
          Consider <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> defined by <Math>f(x) := x^2</Math>.
          This is continuous on <Math>{String.raw`\mathbb{R}`}</Math>, but not uniformly continuous—the
          continuity gets "worse" as one approaches infinity.
        </p>
        <p className="mt-2">
          The sequences <Math>{String.raw`(n)_{n=1}^\infty`}</Math> and <Math>{String.raw`(n + 1/n)_{n=1}^\infty`}</Math> are
          equivalent since <Math>{String.raw`n - (n + 1/n) = -1/n \to 0`}</Math>.
        </p>
        <p className="mt-2">
          But <Math>{String.raw`f(n + 1/n) = n^2 + 2 + 1/n^2`}</Math>, so
        </p>
        <MathBlock>{String.raw`f(n + 1/n) - f(n) = 2 + \frac{1}{n^2} \to 2 \neq 0.`}</MathBlock>
        <p>
          The image sequences are not equivalent, so <Math>f</Math> is not uniformly continuous.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cauchy Sequences and Uniform Continuity</h2>

      <Theorem
        id="proposition-9.9.12"
        title="Proposition 9.9.12 (Uniformly Continuous Functions Preserve Cauchy Sequences)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be uniformly continuous.
            Let <Math>{String.raw`(x_n)_{n=0}^\infty`}</Math> be a Cauchy sequence in <Math>X</Math>.
            Then <Math>{String.raw`(f(x_n))_{n=0}^\infty`}</Math> is also a Cauchy sequence.
          </>
        }
        proof={
          <>
            <p>
              Let <Math>{String.raw`\varepsilon > 0`}</Math>. Since <Math>f</Math> is uniformly continuous,
              there exists <Math>{String.raw`\delta > 0`}</Math> such that <Math>{String.raw`|f(x) - f(y)| < \varepsilon`}</Math> whenever <Math>{String.raw`|x - y| < \delta`}</Math>.
            </p>
            <p className="mt-2">
              Since <Math>{String.raw`(x_n)`}</Math> is Cauchy, there exists <Math>N</Math> such that <Math>{String.raw`|x_n - x_m| < \delta`}</Math> for
              all <Math>{String.raw`n, m \geq N`}</Math>. Then <Math>{String.raw`|f(x_n) - f(x_m)| < \varepsilon`}</Math> for
              all <Math>{String.raw`n, m \geq N`}</Math>.
            </p>
          </>
        }
      />

      <Example id="example-9.9.13" title="Example 9.9.13 (Another Proof for 1/x)">
        <p>
          The sequence <Math>{String.raw`(1/n)_{n=1}^\infty`}</Math> is Cauchy in <Math>(0, 2)</Math>.
          But <Math>{String.raw`(f(1/n))_{n=1}^\infty = (n)_{n=1}^\infty`}</Math> is not Cauchy (it diverges to infinity).
        </p>
        <p className="mt-2">
          By Proposition 9.9.12, <Math>f(x) = 1/x</Math> is not uniformly continuous on <Math>(0, 2)</Math>.
        </p>
      </Example>

      <Theorem
        id="corollary-9.9.14"
        title="Corollary 9.9.14 (Limits at Adherent Points)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>,
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be uniformly continuous, and
            let <Math>{String.raw`x_0`}</Math> be an adherent point of <Math>X</Math>.
            Then <Math>{String.raw`\lim_{x \to x_0; x \in X} f(x)`}</Math> exists (and is a real number).
          </>
        }
        proof={
          <>
            <p>See Exercise 9.9.4.</p>
          </>
        }
      />

      <Theorem
        id="proposition-9.9.15"
        title="Proposition 9.9.15 (Bounded Sets Map to Bounded Sets)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be uniformly continuous. If <Math>E</Math> is
            a bounded subset of <Math>X</Math>, then <Math>f(E)</Math> is also bounded.
          </>
        }
        proof={
          <>
            <p>See Exercise 9.9.5.</p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">The Main Theorem</h2>

      <p>
        The most important result about uniform continuity is that continuous functions on
        closed bounded intervals are automatically uniformly continuous.
      </p>

      <Theorem
        id="theorem-9.9.16"
        title="Theorem 9.9.16 (Continuous on Closed Interval ⟹ Uniformly Continuous)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            continuous on <Math>[a, b]</Math>. Then <Math>f</Math> is uniformly continuous.
          </>
        }
        proof={
          <>
            <p>
              Suppose for contradiction that <Math>f</Math> is not uniformly continuous.
              By Proposition 9.9.8, there exist equivalent sequences <Math>{String.raw`(x_n)`}</Math> and <Math>{String.raw`(y_n)`}</Math> in <Math>[a, b]</Math> such
              that <Math>{String.raw`(f(x_n))`}</Math> and <Math>{String.raw`(f(y_n))`}</Math> are not equivalent.
            </p>
            <p className="mt-2">
              Thus there exists <Math>{String.raw`\varepsilon > 0`}</Math> such that <Math>{String.raw`(f(x_n))`}</Math> and <Math>{String.raw`(f(y_n))`}</Math> are
              not eventually <Math>\varepsilon</Math>-close. The set <Math>{String.raw`E := \{n : |f(x_n) - f(y_n)| \geq \varepsilon\}`}</Math> is
              infinite, so we can find an increasing sequence <Math>{String.raw`n_0 < n_1 < n_2 < \cdots`}</Math> in <Math>E</Math>.
            </p>
            <p className="mt-2">
              The sequence <Math>{String.raw`(x_{n_j})_{j=0}^\infty`}</Math> lies in <Math>[a, b]</Math>.
              By Heine-Borel, it has a subsequence <Math>{String.raw`(x_{n_{j_k}})`}</Math> converging to
              some <Math>{String.raw`L \in [a, b]`}</Math>.
            </p>
            <p className="mt-2">
              Since <Math>{String.raw`(x_n)`}</Math> and <Math>{String.raw`(y_n)`}</Math> are equivalent, <Math>{String.raw`\lim(x_n - y_n) = 0`}</Math>.
              By subsequence properties, <Math>{String.raw`\lim_{k \to \infty}(x_{n_{j_k}} - y_{n_{j_k}}) = 0`}</Math>.
              Since <Math>{String.raw`x_{n_{j_k}} \to L`}</Math>, we have <Math>{String.raw`y_{n_{j_k}} \to L`}</Math> as well.
            </p>
            <p className="mt-2">
              Since <Math>f</Math> is continuous at <Math>L</Math>:
            </p>
            <MathBlock>{String.raw`\lim_{k \to \infty} f(x_{n_{j_k}}) = f(L) = \lim_{k \to \infty} f(y_{n_{j_k}})`}</MathBlock>
            <p>
              Thus <Math>{String.raw`\lim_{k \to \infty}(f(x_{n_{j_k}}) - f(y_{n_{j_k}})) = 0`}</Math>.
              But by construction, <Math>{String.raw`|f(x_{n_{j_k}}) - f(y_{n_{j_k}})| \geq \varepsilon`}</Math> for all <Math>k</Math>.
              Contradiction.
            </p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Why closedness matters:</strong> Theorem 9.9.16 fails for open intervals.
          The function <Math>f(x) = 1/x</Math> is continuous on <Math>(0, 1)</Math> but not
          uniformly continuous—the problem occurs at the boundary point <Math>0</Math> which
          is not in the domain.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-slate-600">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-2 text-left">Property</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Continuous</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Uniformly Continuous</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 px-4 py-2">δ depends on...</td>
              <td className="border border-slate-600 px-4 py-2">ε and x₀</td>
              <td className="border border-slate-600 px-4 py-2">ε only</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Preserves convergent sequences</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Preserves equivalent sequences</td>
              <td className="border border-slate-600 px-4 py-2">Not necessarily</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Preserves Cauchy sequences</td>
              <td className="border border-slate-600 px-4 py-2">Not necessarily</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Maps bounded sets to bounded</td>
              <td className="border border-slate-600 px-4 py-2">Not necessarily</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.1</p>
          <p>Prove Lemma 9.9.7.</p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.2</p>
          <p>
            Prove Proposition 9.9.8. (Hint: avoid Lemma 9.9.7 and go back to Definition 9.9.5 directly.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.3</p>
          <p>Prove Proposition 9.9.12. (Hint: use Definition 9.9.2 directly.)</p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.4</p>
          <p>
            Use Proposition 9.9.12 to prove Corollary 9.9.14. Use this corollary to give an
            alternate demonstration that <Math>f(x) = 1/x</Math> on <Math>(0, 2)</Math> is not
            uniformly continuous.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.5</p>
          <p>
            Prove Proposition 9.9.15. (Hint: mimic the proof of Lemma 9.6.3. Use either
            Proposition 9.9.12 or Corollary 9.9.14.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.9.6</p>
          <p>
            Let <Math>X, Y, Z</Math> be subsets of <Math>{String.raw`\mathbb{R}`}</Math>.
            Let <Math>{String.raw`f: X \to Y`}</Math> be uniformly continuous on <Math>X</Math>,
            and let <Math>{String.raw`g: Y \to Z`}</Math> be uniformly continuous on <Math>Y</Math>.
            Show that <Math>{String.raw`g \circ f: X \to Z`}</Math> is uniformly continuous on <Math>X</Math>.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
