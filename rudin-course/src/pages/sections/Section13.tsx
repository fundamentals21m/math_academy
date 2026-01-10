import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Convergent Sequences</h2>

      <p className="mb-6">
        As the title indicates, this chapter deals primarily with sequences and series
        of complex numbers. The basic facts about convergence, however, are just as
        easily explained in a more general setting. The first three sections will therefore
        be concerned with sequences in euclidean spaces, or even in metric spaces.
      </p>

      <Definition title="Convergent Sequence (3.1)">
        <p className="mb-4">
          A sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> in a metric space <InlineMath>X</InlineMath> is
          said to <em>converge</em> if there is a point <InlineMath>{'p \\in X'}</InlineMath> with
          the following property: For every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there
          is an integer <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies
          that <InlineMath>{'d(p_n, p) < \\varepsilon'}</InlineMath>.
        </p>
        <p className="mb-4">
          In this case we also say that <InlineMath>{'\\{p_n\\}'}</InlineMath> converges
          to <InlineMath>p</InlineMath>, or that <InlineMath>p</InlineMath> is the limit
          of <InlineMath>{'\\{p_n\\}'}</InlineMath>, and we write:
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} p_n = p'}</MathBlock>
        <p>
          If <InlineMath>{'\\{p_n\\}'}</InlineMath> does not converge, it is said to <em>diverge</em>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          It is important to point out that our definition of "convergent sequence" depends
          not only on <InlineMath>{'\\{p_n\\}'}</InlineMath> but also on <InlineMath>X</InlineMath>;
          for instance, the sequence <InlineMath>{'\\{1/n\\}'}</InlineMath> converges
          in <InlineMath>{'R^1'}</InlineMath> (to 0), but fails to converge in the set
          of all positive real numbers.
        </p>
      </Callout>

      <p className="my-6">
        We recall that the set of all points <InlineMath>{'p_n'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>)
        is the <em>range</em> of <InlineMath>{'\\{p_n\\}'}</InlineMath>. The range of a sequence
        may be a finite set, or it may be infinite. The sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> is
        said to be <em>bounded</em> if its range is bounded.
      </p>

      <Example title="Sequences of Complex Numbers">
        <p className="mb-4">Consider the following sequences of complex numbers (with <InlineMath>{'X = \\mathbb{C}'}</InlineMath>):</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If <InlineMath>{'s_n = 1/n'}</InlineMath>, then <InlineMath>{'\\lim_{n \\to \\infty} s_n = 0'}</InlineMath>;
            the range is infinite, and the sequence is bounded.
          </li>
          <li>
            If <InlineMath>{'s_n = n^2'}</InlineMath>, the sequence <InlineMath>{'\\{s_n\\}'}</InlineMath> is
            unbounded, is divergent, and has infinite range.
          </li>
          <li>
            If <InlineMath>{'s_n = 1 + [(-1)^n/n]'}</InlineMath>, the sequence <InlineMath>{'\\{s_n\\}'}</InlineMath> converges
            to 1, is bounded, and has infinite range.
          </li>
          <li>
            If <InlineMath>{'s_n = i^n'}</InlineMath>, the sequence <InlineMath>{'\\{s_n\\}'}</InlineMath> is
            divergent, is bounded, and has finite range.
          </li>
          <li>
            If <InlineMath>{'s_n = 1'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>),
            then <InlineMath>{'\\{s_n\\}'}</InlineMath> converges to 1, is bounded, and has finite range.
          </li>
        </ul>
      </Example>

      <Theorem
        title="Properties of Convergent Sequences (3.2)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Suppose <InlineMath>{'p_n \\to p'}</InlineMath> and
              let <InlineMath>V</InlineMath> be a neighborhood of <InlineMath>p</InlineMath>. For
              some <InlineMath>{'\\varepsilon > 0'}</InlineMath>, the
              conditions <InlineMath>{'d(q, p) < \\varepsilon'}</InlineMath>, <InlineMath>{'q \\in X'}</InlineMath> imply <InlineMath>{'q \\in V'}</InlineMath>.
              Corresponding to this <InlineMath>\\varepsilon</InlineMath>, there
              exists <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'d(p_n, p) < \\varepsilon'}</InlineMath>.
              Thus <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'p_n \\in V'}</InlineMath>.
            </p>
            <p className="mb-4">
              Conversely, suppose every neighborhood of <InlineMath>p</InlineMath> contains all
              but finitely many of the <InlineMath>{'p_n'}</InlineMath>. Fix <InlineMath>{'\\varepsilon > 0'}</InlineMath>,
              and let <InlineMath>V</InlineMath> be the set of all <InlineMath>{'q \\in X'}</InlineMath> such
              that <InlineMath>{'d(p, q) < \\varepsilon'}</InlineMath>. By assumption, there
              exists <InlineMath>N</InlineMath> (corresponding to this <InlineMath>V</InlineMath>) such
              that <InlineMath>{'p_n \\in V'}</InlineMath> if <InlineMath>{'n \\geq N'}</InlineMath>.
              Thus <InlineMath>{'d(p_n, p) < \\varepsilon'}</InlineMath> if <InlineMath>{'n \\geq N'}</InlineMath>;
              hence <InlineMath>{'p_n \\to p'}</InlineMath>.
            </p>
            <p className="mb-4">
              <strong>(b)</strong> Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given.
              There exist integers <InlineMath>{'N, N\''}</InlineMath> such that
            </p>
            <MathBlock>{'n \\geq N \\quad \\text{implies} \\quad d(p_n, p) < \\frac{\\varepsilon}{2},'}</MathBlock>
            <MathBlock>{'n \\geq N\' \\quad \\text{implies} \\quad d(p_n, p\') < \\frac{\\varepsilon}{2}.'}</MathBlock>
            <p className="mb-4">
              Hence if <InlineMath>{'n \\geq \\max(N, N\')'}</InlineMath>, we have
            </p>
            <MathBlock>{'d(p, p\') \\leq d(p, p_n) + d(p_n, p\') < \\varepsilon.'}</MathBlock>
            <p className="mb-4">
              Since <InlineMath>\\varepsilon</InlineMath> was arbitrary, we conclude
              that <InlineMath>{'d(p, p\') = 0'}</InlineMath>.
            </p>
            <p className="mb-4">
              <strong>(c)</strong> Suppose <InlineMath>{'p_n \\to p'}</InlineMath>. There is an
              integer <InlineMath>N</InlineMath> such that <InlineMath>{'n > N'}</InlineMath> implies <InlineMath>{'d(p_n, p) < 1'}</InlineMath>. Put
            </p>
            <MathBlock>{'r = \\max\\{1, d(p_1, p), \\ldots, d(p_N, p)\\}.'}</MathBlock>
            <p className="mb-4">
              Then <InlineMath>{'d(p_n, p) \\leq r'}</InlineMath> for <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>.
            </p>
            <p>
              <strong>(d)</strong> For each positive integer <InlineMath>n</InlineMath>, there
              is a point <InlineMath>{'p_n \\in E'}</InlineMath> such
              that <InlineMath>{'d(p_n, p) < 1/n'}</InlineMath>. Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>,
              choose <InlineMath>N</InlineMath> so that <InlineMath>{'N\\varepsilon > 1'}</InlineMath>.
              If <InlineMath>{'n > N'}</InlineMath>, it follows that <InlineMath>{'d(p_n, p) < \\varepsilon'}</InlineMath>.
              Hence <InlineMath>{'p_n \\to p'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-4">Let <InlineMath>{'\\{p_n\\}'}</InlineMath> be a sequence in a metric space <InlineMath>X</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> <InlineMath>{'\\{p_n\\}'}</InlineMath> converges
            to <InlineMath>{'p \\in X'}</InlineMath> if and only if every neighborhood
            of <InlineMath>p</InlineMath> contains <InlineMath>{'p_n'}</InlineMath> for all
            but finitely many <InlineMath>n</InlineMath>.
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>{'p \\in X'}</InlineMath>, <InlineMath>{'p\' \\in X'}</InlineMath>,
            and if <InlineMath>{'\\{p_n\\}'}</InlineMath> converges to <InlineMath>p</InlineMath> and
            to <InlineMath>{'p\''}</InlineMath>, then <InlineMath>{'p = p\''}</InlineMath>.
          </li>
          <li>
            <strong>(c)</strong> If <InlineMath>{'\\{p_n\\}'}</InlineMath> converges,
            then <InlineMath>{'\\{p_n\\}'}</InlineMath> is bounded.
          </li>
          <li>
            <strong>(d)</strong> If <InlineMath>{'E \\subset X'}</InlineMath> and
            if <InlineMath>p</InlineMath> is a limit point of <InlineMath>E</InlineMath>, then
            there is a sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> in <InlineMath>E</InlineMath> such
            that <InlineMath>{'p = \\lim_{n \\to \\infty} p_n'}</InlineMath>.
          </li>
        </ul>
      </Theorem>

      <Theorem
        title="Algebraic Limit Theorems (3.3)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there
              exist integers <InlineMath>{'N_1, N_2'}</InlineMath> such that
            </p>
            <MathBlock>{'n \\geq N_1 \\quad \\text{implies} \\quad |s_n - s| < \\frac{\\varepsilon}{2},'}</MathBlock>
            <MathBlock>{'n \\geq N_2 \\quad \\text{implies} \\quad |t_n - t| < \\frac{\\varepsilon}{2}.'}</MathBlock>
            <p className="mb-4">
              If <InlineMath>{'N = \\max(N_1, N_2)'}</InlineMath>, then <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|(s_n + t_n) - (s + t)| \\leq |s_n - s| + |t_n - t| < \\varepsilon.'}</MathBlock>
            <p className="mb-4">This proves (a). The proof of (b) is trivial.</p>
            <p className="mb-4">
              <strong>(c)</strong> We use the identity
            </p>
            <MathBlock>{'s_n t_n - st = (s_n - s)(t_n - t) + s(t_n - t) + t(s_n - s).'}</MathBlock>
            <p className="mb-4">
              Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there are
              integers <InlineMath>{'N_1, N_2'}</InlineMath> such that
            </p>
            <MathBlock>{'n \\geq N_1 \\quad \\text{implies} \\quad |s_n - s| < \\sqrt{\\varepsilon},'}</MathBlock>
            <MathBlock>{'n \\geq N_2 \\quad \\text{implies} \\quad |t_n - t| < \\sqrt{\\varepsilon}.'}</MathBlock>
            <p className="mb-4">
              If we take <InlineMath>{'N = \\max(N_1, N_2)'}</InlineMath>, <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|(s_n - s)(t_n - t)| < \\varepsilon,'}</MathBlock>
            <p className="mb-4">
              so that <InlineMath>{'\\lim_{n \\to \\infty} (s_n - s)(t_n - t) = 0'}</InlineMath>.
              We now apply (a) and (b) to conclude that <InlineMath>{'\\lim_{n \\to \\infty}(s_n t_n - st) = 0'}</InlineMath>.
            </p>
            <p className="mb-4">
              <strong>(d)</strong> Choosing <InlineMath>m</InlineMath> such
              that <InlineMath>{'|s_n - s| < \\frac{1}{2}|s|'}</InlineMath> if <InlineMath>{'n \\geq m'}</InlineMath>,
              we see that
            </p>
            <MathBlock>{'|s_n| > \\frac{1}{2}|s| \\quad (n \\geq m).'}</MathBlock>
            <p className="mb-4">
              Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there is an
              integer <InlineMath>{'N > m'}</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|s_n - s| < \\frac{1}{2}|s|^2 \\varepsilon.'}</MathBlock>
            <p>
              Hence, for <InlineMath>{'n \\geq N'}</InlineMath>,
            </p>
            <MathBlock>{'\\left|\\frac{1}{s_n} - \\frac{1}{s}\\right| = \\left|\\frac{s_n - s}{s_n s}\\right| < \\frac{2}{|s|^2}|s_n - s| < \\varepsilon.'}</MathBlock>
          </>
        }
      >
        <p className="mb-4">
          Suppose <InlineMath>{'\\{s_n\\}'}</InlineMath>, <InlineMath>{'\\{t_n\\}'}</InlineMath> are
          complex sequences, and <InlineMath>{'\\lim_{n \\to \\infty} s_n = s'}</InlineMath>, <InlineMath>{'\\lim_{n \\to \\infty} t_n = t'}</InlineMath>. Then
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>(a)</strong> <InlineMath>{'\\lim_{n \\to \\infty}(s_n + t_n) = s + t'}</InlineMath>;</li>
          <li>
            <strong>(b)</strong> <InlineMath>{'\\lim_{n \\to \\infty} cs_n = cs'}</InlineMath>, <InlineMath>{'\\lim_{n \\to \\infty}(c + s_n) = c + s'}</InlineMath>,
            for any number <InlineMath>c</InlineMath>;
          </li>
          <li><strong>(c)</strong> <InlineMath>{'\\lim_{n \\to \\infty} s_n t_n = st'}</InlineMath>;</li>
          <li>
            <strong>(d)</strong> <InlineMath>{'\\lim_{n \\to \\infty} \\frac{1}{s_n} = \\frac{1}{s}'}</InlineMath>,
            provided <InlineMath>{'s_n \\neq 0'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>),
            and <InlineMath>{'s \\neq 0'}</InlineMath>.
          </li>
        </ul>
      </Theorem>

      <Theorem
        title="Convergence in R^k (3.4)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> If <InlineMath>{'\\mathbf{x}_n \\to \\mathbf{x}'}</InlineMath>, the inequalities
            </p>
            <MathBlock>{'|\\alpha_{j,n} - \\alpha_j| \\leq |\\mathbf{x}_n - \\mathbf{x}|,'}</MathBlock>
            <p className="mb-4">
              which follow immediately from the definition of the norm in <InlineMath>{'R^k'}</InlineMath>,
              show that (2) holds.
            </p>
            <p className="mb-4">
              Conversely, if (2) holds, then to each <InlineMath>{'\\varepsilon > 0'}</InlineMath> there
              corresponds an integer <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|\\alpha_{j,n} - \\alpha_j| < \\frac{\\varepsilon}{\\sqrt{k}} \\quad (1 \\leq j \\leq k).'}</MathBlock>
            <p className="mb-4">
              Hence <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|\\mathbf{x}_n - \\mathbf{x}| = \\left\\{\\sum_{j=1}^{k} |\\alpha_{j,n} - \\alpha_j|^2\\right\\}^{1/2} < \\varepsilon,'}</MathBlock>
            <p>
              so that <InlineMath>{'\\mathbf{x}_n \\to \\mathbf{x}'}</InlineMath>. This proves (a).
            </p>
            <p className="mt-4">Part (b) follows from (a) and Theorem 3.3.</p>
          </>
        }
      >
        <p className="mb-4">
          <strong>(a)</strong> Suppose <InlineMath>{'\\mathbf{x}_n \\in R^k'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>) and
        </p>
        <MathBlock>{'\\mathbf{x}_n = (\\alpha_{1,n}, \\ldots, \\alpha_{k,n}).'}</MathBlock>
        <p className="mb-4">
          Then <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath> converges
          to <InlineMath>{'\\mathbf{x} = (\\alpha_1, \\ldots, \\alpha_k)'}</InlineMath> if and only if
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\alpha_{j,n} = \\alpha_j \\quad (1 \\leq j \\leq k).'}</MathBlock>
        <p className="mb-4">
          <strong>(b)</strong> Suppose <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath>, <InlineMath>{'\\{\\mathbf{y}_n\\}'}</InlineMath> are
          sequences in <InlineMath>{'R^k'}</InlineMath>, <InlineMath>{'\\{\\beta_n\\}'}</InlineMath> is a
          sequence of real numbers, and <InlineMath>{'\\mathbf{x}_n \\to \\mathbf{x}'}</InlineMath>, <InlineMath>{'\\mathbf{y}_n \\to \\mathbf{y}'}</InlineMath>, <InlineMath>{'\\beta_n \\to \\beta'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty}(\\mathbf{x}_n + \\mathbf{y}_n) = \\mathbf{x} + \\mathbf{y}, \\quad \\lim_{n \\to \\infty} \\mathbf{x}_n \\cdot \\mathbf{y}_n = \\mathbf{x} \\cdot \\mathbf{y}, \\quad \\lim_{n \\to \\infty} \\beta_n \\mathbf{x}_n = \\beta \\mathbf{x}.'}</MathBlock>
      </Theorem>
    </LessonLayout>
  );
}
