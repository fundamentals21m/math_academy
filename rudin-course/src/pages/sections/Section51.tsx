import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2 className="text-2xl font-semibold mb-4">Equicontinuous Families of Functions</h2>

      <p className="mb-4">
        We now study conditions under which a family of functions has a uniformly
        convergent subsequence. This leads to the celebrated Arzela-Ascoli theorem,
        a cornerstone of functional analysis.
      </p>

      <Definition title="7.19 - Pointwise Bounded and Uniformly Bounded">
        <p className="mb-3">
          Let <InlineMath>{'\\{f_n\\}'}</InlineMath> be a sequence of functions defined on a set <InlineMath>{'E'}</InlineMath>.
        </p>
        <p className="mb-3">
          We say <InlineMath>{'\\{f_n\\}'}</InlineMath> is <em>pointwise bounded</em> on <InlineMath>{'E'}</InlineMath> if
          for every <InlineMath>{'x \\in E'}</InlineMath>, the sequence <InlineMath>{'\\{f_n(x)\\}'}</InlineMath> is bounded,
          i.e., there exists <InlineMath>{'M_x < \\infty'}</InlineMath> such that <InlineMath>{'|f_n(x)| \\le M_x'}</InlineMath> for
          all <InlineMath>{'n'}</InlineMath>.
        </p>
        <p>
          We say <InlineMath>{'\\{f_n\\}'}</InlineMath> is <em>uniformly bounded</em> on <InlineMath>{'E'}</InlineMath> if
          there exists <InlineMath>{'M < \\infty'}</InlineMath> such that <InlineMath>{'|f_n(x)| \\le M'}</InlineMath> for
          all <InlineMath>{'x \\in E'}</InlineMath> and all <InlineMath>{'n'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="7.22 - Equicontinuity">
        <p className="mb-3">
          A family <InlineMath>{'\\mathscr{F}'}</InlineMath> of functions on a set <InlineMath>{'E'}</InlineMath> in
          a metric space is said to be <em>equicontinuous</em> on <InlineMath>{'E'}</InlineMath> if for
          every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists <InlineMath>{'\\delta > 0'}</InlineMath> such
          that
        </p>
        <MathBlock>{'|f(x) - f(y)| < \\varepsilon'}</MathBlock>
        <p>
          whenever <InlineMath>{'d(x, y) < \\delta'}</InlineMath>, <InlineMath>{'x \\in E'}</InlineMath>, <InlineMath>{'y \\in E'}</InlineMath>,
          and <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Key Point">
        <p className="mb-3">
          In the definition of equicontinuity, the same <InlineMath>{'\\delta'}</InlineMath> works
          for <em>all</em> functions in the family <InlineMath>{'\\mathscr{F}'}</InlineMath> and
          all points in <InlineMath>{'E'}</InlineMath>.
        </p>
        <p>
          This is stronger than requiring each function to be uniformly continuous with
          its own <InlineMath>{'\\delta'}</InlineMath>.
        </p>
      </Callout>

      <Example title="7.23 - Example of an Equicontinuous Family">
        <p className="mb-3">
          Let <InlineMath>{'\\mathscr{F}'}</InlineMath> be the family of all functions <InlineMath>{'f'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath> such
          that <InlineMath>{'|f\'(x)| \\le M'}</InlineMath> for all <InlineMath>{'x \\in [0, 1]'}</InlineMath> (for some fixed <InlineMath>{'M'}</InlineMath>).
        </p>
        <p className="mb-3">
          By the Mean Value Theorem, for any <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath> and any <InlineMath>{'x, y \\in [0, 1]'}</InlineMath>:
        </p>
        <MathBlock>{'|f(x) - f(y)| \\le M|x - y|'}</MathBlock>
        <p className="mb-3">
          Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, take <InlineMath>{'\\delta = \\varepsilon/M'}</InlineMath>.
          Then <InlineMath>{'|x - y| < \\delta'}</InlineMath> implies <InlineMath>{'|f(x) - f(y)| < \\varepsilon'}</InlineMath> for
          all <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath>.
        </p>
        <p>
          Thus <InlineMath>{'\\mathscr{F}'}</InlineMath> is equicontinuous.
        </p>
      </Example>

      <Example title="Non-Equicontinuous Family">
        <p className="mb-3">
          Let <InlineMath>{'f_n(x) = x^n'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath>.
        </p>
        <p className="mb-3">
          Near <InlineMath>{'x = 1'}</InlineMath>, we have <InlineMath>{'f_n\'(x) = nx^{n-1}'}</InlineMath>,
          so <InlineMath>{'f_n\'(1) = n \\to \\infty'}</InlineMath>.
        </p>
        <p>
          The family <InlineMath>{'\\{f_n\\}'}</InlineMath> is <em>not</em> equicontinuous
          on <InlineMath>{'[0, 1]'}</InlineMath>. No single <InlineMath>{'\\delta'}</InlineMath> can work
          for all <InlineMath>{'n'}</InlineMath> near <InlineMath>{'x = 1'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="7.24 - Equicontinuity Implies Uniform Boundedness"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\varepsilon = 1'}</InlineMath>. By equicontinuity, there
              exists <InlineMath>{'\\delta > 0'}</InlineMath> such that <InlineMath>{'d(x, y) < \\delta'}</InlineMath> implies <InlineMath>{'|f(x) - f(y)| < 1'}</InlineMath> for
              all <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'K'}</InlineMath> is compact, it can be covered by finitely
              many <InlineMath>{'\\delta'}</InlineMath>-balls centered at points <InlineMath>{'x_1, \\ldots, x_m'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'\\mathscr{F}'}</InlineMath> is pointwise bounded, for
              each <InlineMath>{'x_i'}</InlineMath> there exists <InlineMath>{'M_i'}</InlineMath> such
              that <InlineMath>{'|f(x_i)| \\le M_i'}</InlineMath> for all <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Let <InlineMath>{'M = \\max(M_1, \\ldots, M_m) + 1'}</InlineMath>. For
              any <InlineMath>{'x \\in K'}</InlineMath>, choose <InlineMath>{'x_i'}</InlineMath> with <InlineMath>{'d(x, x_i) < \\delta'}</InlineMath>. Then
            </p>
            <MathBlock>{'|f(x)| \\le |f(x) - f(x_i)| + |f(x_i)| < 1 + M_i \\le M'}</MathBlock>
            <p>
              for all <InlineMath>{'f \\in \\mathscr{F}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'K'}</InlineMath> is compact and <InlineMath>{'\\mathscr{F}'}</InlineMath> is
          an equicontinuous family of functions on <InlineMath>{'K'}</InlineMath> that is pointwise
          bounded, then <InlineMath>{'\\mathscr{F}'}</InlineMath> is uniformly bounded on <InlineMath>{'K'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="7.25 - Arzela-Ascoli Theorem"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'K'}</InlineMath> is compact (and hence separable), let <InlineMath>{'\\{x_i\\}'}</InlineMath> be
              a countable dense subset of <InlineMath>{'K'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 1:</strong> Since <InlineMath>{'\\{f_n(x_1)\\}'}</InlineMath> is bounded, it has
              a convergent subsequence. Call it <InlineMath>{'\\{f_{1,n}\\}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> <InlineMath>{'\\{f_{1,n}(x_2)\\}'}</InlineMath> is bounded, so extract
              a convergent subsequence <InlineMath>{'\\{f_{2,n}\\}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Continue inductively. The diagonal sequence <InlineMath>{'\\{f_{n,n}\\}'}</InlineMath> converges
              at every <InlineMath>{'x_i'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 3:</strong> Use equicontinuity to show <InlineMath>{'\\{f_{n,n}\\}'}</InlineMath> is
              uniformly Cauchy on <InlineMath>{'K'}</InlineMath>. Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>,
              choose <InlineMath>{'\\delta'}</InlineMath> from equicontinuity. Cover <InlineMath>{'K'}</InlineMath> by
              finitely many <InlineMath>{'\\delta'}</InlineMath>-balls around <InlineMath>{'x_{i_1}, \\ldots, x_{i_m}'}</InlineMath>.
            </p>
            <p className="mb-3">
              For large <InlineMath>{'n, k'}</InlineMath>, <InlineMath>{'|f_{n,n}(x_{i_j}) - f_{k,k}(x_{i_j})| < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'j'}</InlineMath>.
            </p>
            <p>
              For any <InlineMath>{'x \\in K'}</InlineMath>, pick <InlineMath>{'x_{i_j}'}</InlineMath> with <InlineMath>{'d(x, x_{i_j}) < \\delta'}</InlineMath>:
            </p>
            <MathBlock>{'|f_{n,n}(x) - f_{k,k}(x)| \\le |f_{n,n}(x) - f_{n,n}(x_{i_j})| + |f_{n,n}(x_{i_j}) - f_{k,k}(x_{i_j})| + |f_{k,k}(x_{i_j}) - f_{k,k}(x)| < 3\\varepsilon'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'K'}</InlineMath> be a compact metric space. If <InlineMath>{'\\{f_n\\}'}</InlineMath> is
          a pointwise bounded, equicontinuous sequence of functions on <InlineMath>{'K'}</InlineMath>,
          then
        </p>
        <p className="mb-3">
          (a) <InlineMath>{'\\{f_n\\}'}</InlineMath> is uniformly bounded on <InlineMath>{'K'}</InlineMath>.
        </p>
        <p>
          (b) <InlineMath>{'\\{f_n\\}'}</InlineMath> contains a uniformly convergent subsequence.
        </p>
      </Theorem>

      <Callout type="note" title="Significance">
        <p>
          The Arzela-Ascoli theorem is a compactness theorem for function spaces. It tells us
          when a family of functions is "precompact" in the uniform topology. This is fundamental
          in proving existence of solutions to differential equations, in approximation theory,
          and throughout analysis.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Equicontinuity means a single <InlineMath>{'\\delta'}</InlineMath> works for all functions in the family</li>
        <li>Bounded derivatives imply equicontinuity (Lipschitz families)</li>
        <li>Arzela-Ascoli: pointwise bounded + equicontinuous implies existence of uniformly convergent subsequence</li>
        <li>This is the analogue of Bolzano-Weierstrass for function spaces</li>
        <li>Equicontinuity + pointwise boundedness on compact sets implies uniform boundedness</li>
      </ul>
    </LessonLayout>
  );
}
