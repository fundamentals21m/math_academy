import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mb-4">Cauchy Sequences</h2>

      <p className="mb-6">
        In our discussion of Cauchy sequences, as well as in other situations
        which will arise later, the following geometric concept will be useful.
      </p>

      <Definition title="Cauchy Sequence (3.8)">
        <p>
          A sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> in a metric space <InlineMath>X</InlineMath> is
          said to be a <em>Cauchy sequence</em> if for every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there
          is an integer <InlineMath>N</InlineMath> such that <InlineMath>{'d(p_n, p_m) < \\varepsilon'}</InlineMath> if <InlineMath>{'n \\geq N'}</InlineMath> and <InlineMath>{'m \\geq N'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Diameter (3.9)">
        <p className="mb-4">
          Let <InlineMath>E</InlineMath> be a nonempty subset of a metric space <InlineMath>X</InlineMath>,
          and let <InlineMath>S</InlineMath> be the set of all real numbers of the
          form <InlineMath>{'d(p, q)'}</InlineMath>, with <InlineMath>{'p \\in E'}</InlineMath> and <InlineMath>{'q \\in E'}</InlineMath>.
          The sup of <InlineMath>S</InlineMath> is called the <em>diameter</em> of <InlineMath>E</InlineMath>.
        </p>
        <p>
          If <InlineMath>{'\\{p_n\\}'}</InlineMath> is a sequence in <InlineMath>X</InlineMath> and
          if <InlineMath>{'E_N'}</InlineMath> consists of the points <InlineMath>{'p_N, p_{N+1}, p_{N+2}, \\ldots'}</InlineMath>,
          it is clear from the two preceding definitions that <InlineMath>{'\\{p_n\\}'}</InlineMath> is
          a Cauchy sequence if and only if
        </p>
        <MathBlock>{'\\lim_{N \\to \\infty} \\text{diam } E_N = 0.'}</MathBlock>
      </Definition>

      <Theorem
        title="Properties of Diameter (3.10)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Since <InlineMath>{'E \\subset \\bar{E}'}</InlineMath>, it is clear that
            </p>
            <MathBlock>{'\\text{diam } E \\leq \\text{diam } \\bar{E}.'}</MathBlock>
            <p className="mb-4">
              Fix <InlineMath>{'\\varepsilon > 0'}</InlineMath>, and
              choose <InlineMath>{'p \\in \\bar{E}'}</InlineMath>, <InlineMath>{'q \\in \\bar{E}'}</InlineMath>.
              By the definition of <InlineMath>{'\\bar{E}'}</InlineMath>, there are
              points <InlineMath>{'p\', q\''}</InlineMath>, in <InlineMath>E</InlineMath> such
              that <InlineMath>{'d(p, p\') < \\varepsilon'}</InlineMath>, <InlineMath>{'d(q, q\') < \\varepsilon'}</InlineMath>. Hence
            </p>
            <MathBlock>{'d(p, q) \\leq d(p, p\') + d(p\', q\') + d(q\', q) < 2\\varepsilon + \\text{diam } E.'}</MathBlock>
            <p className="mb-4">
              It follows that <InlineMath>{'\\text{diam } \\bar{E} \\leq 2\\varepsilon + \\text{diam } E'}</InlineMath>,
              and since <InlineMath>\\varepsilon</InlineMath> was arbitrary, (a) is proved.
            </p>
            <p className="mb-4">
              <strong>(b)</strong> Put <InlineMath>{'K = \\bigcap_{n=1}^{\\infty} K_n'}</InlineMath>.
              By Theorem 2.36, <InlineMath>K</InlineMath> is not empty. If <InlineMath>K</InlineMath> contains
              more than one point, then diam <InlineMath>{'K > 0'}</InlineMath>. But for
              each <InlineMath>n</InlineMath>, <InlineMath>{'K_n \\supset K'}</InlineMath>, so that
              diam <InlineMath>{'K_n \\geq'}</InlineMath> diam <InlineMath>K</InlineMath>. This contradicts
              the assumption that diam <InlineMath>{'K_n \\to 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> If <InlineMath>{'\\bar{E}'}</InlineMath> is the closure of a
            set <InlineMath>E</InlineMath> in a metric space <InlineMath>X</InlineMath>, then
            <MathBlock>{'\\text{diam } \\bar{E} = \\text{diam } E.'}</MathBlock>
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>{'K_n'}</InlineMath> is a sequence of compact sets
            in <InlineMath>X</InlineMath> such that <InlineMath>{'K_n \\supset K_{n+1}'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>) and if
            <MathBlock>{'\\lim_{n \\to \\infty} \\text{diam } K_n = 0,'}</MathBlock>
            then <InlineMath>{'\\bigcap_{n=1}^{\\infty} K_n'}</InlineMath> consists of exactly one point.
          </li>
        </ul>
      </Theorem>

      <Theorem
        title="Cauchy Criterion (3.11)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> If <InlineMath>{'p_n \\to p'}</InlineMath> and
              if <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there is an
              integer <InlineMath>N</InlineMath> such that <InlineMath>{'d(p, p_n) < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'n \\geq N'}</InlineMath>. Hence
            </p>
            <MathBlock>{'d(p_n, p_m) \\leq d(p_n, p) + d(p, p_m) < 2\\varepsilon'}</MathBlock>
            <p className="mb-4">
              as soon as <InlineMath>{'n \\geq N'}</InlineMath> and <InlineMath>{'m \\geq N'}</InlineMath>.
              Thus <InlineMath>{'\\{p_n\\}'}</InlineMath> is a Cauchy sequence.
            </p>
            <p className="mb-4">
              <strong>(b)</strong> Let <InlineMath>{'\\{p_n\\}'}</InlineMath> be a Cauchy sequence in the compact
              space <InlineMath>X</InlineMath>. For <InlineMath>{'N = 1, 2, 3, \\ldots'}</InlineMath>,
              let <InlineMath>{'E_N'}</InlineMath> be the set consisting
              of <InlineMath>{'p_N, p_{N+1}, p_{N+2}, \\ldots'}</InlineMath>. Then
            </p>
            <MathBlock>{'\\lim_{N \\to \\infty} \\text{diam } \\bar{E}_N = 0,'}</MathBlock>
            <p className="mb-4">
              by Definition 3.9 and Theorem 3.10(a). Being a closed subset of the
              compact space <InlineMath>X</InlineMath>, each <InlineMath>{'\\bar{E}_N'}</InlineMath> is
              compact (Theorem 2.35). Also <InlineMath>{'E_N \\supset E_{N+1}'}</InlineMath>,
              so that <InlineMath>{'\\bar{E}_N \\supset \\bar{E}_{N+1}'}</InlineMath>.
            </p>
            <p className="mb-4">
              Theorem 3.10(b) shows now that there is a unique <InlineMath>{'p \\in X'}</InlineMath> which
              lies in every <InlineMath>{'\\bar{E}_N'}</InlineMath>.
            </p>
            <p className="mb-4">
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given. By (3) there is
              an integer <InlineMath>{'N_0'}</InlineMath> such that
              diam <InlineMath>{'\\bar{E}_N < \\varepsilon'}</InlineMath> if <InlineMath>{'N \\geq N_0'}</InlineMath>.
              Since <InlineMath>{'p \\in \\bar{E}_N'}</InlineMath>, it follows that <InlineMath>{'d(p, p_n) < \\varepsilon'}</InlineMath> for
              every <InlineMath>{'q \\in E_N'}</InlineMath>. In other
              words, <InlineMath>{'d(p, p_n) < \\varepsilon'}</InlineMath> if <InlineMath>{'n \\geq N_0'}</InlineMath>.
              This says precisely that <InlineMath>{'p_n \\to p'}</InlineMath>.
            </p>
            <p>
              <strong>(c)</strong> Let <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath> be a Cauchy
              sequence in <InlineMath>{'R^k'}</InlineMath>. Define <InlineMath>{'E_N'}</InlineMath> as
              in (b), with <InlineMath>{'\\mathbf{x}_i'}</InlineMath> in place
              of <InlineMath>{'p_i'}</InlineMath>. For some <InlineMath>N</InlineMath>,
              diam <InlineMath>{'E_N < 1'}</InlineMath>. The range
              of <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath> is the union
              of <InlineMath>{'E_N'}</InlineMath> and the finite
              set <InlineMath>{'\\{\\mathbf{x}_1, \\ldots, \\mathbf{x}_{N-1}\\}'}</InlineMath>.
              Hence <InlineMath>{'\\{\\mathbf{x}_n\\}'}</InlineMath> is bounded. Since
              every bounded subset of <InlineMath>{'R^k'}</InlineMath> has compact closure
              in <InlineMath>{'R^k'}</InlineMath> (Theorem 2.41), (c) follows from (b).
            </p>
          </>
        }
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> In any metric space <InlineMath>X</InlineMath>, every convergent
            sequence is a Cauchy sequence.
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>X</InlineMath> is a compact metric space
            and if <InlineMath>{'\\{p_n\\}'}</InlineMath> is a Cauchy sequence
            in <InlineMath>X</InlineMath>, then <InlineMath>{'\\{p_n\\}'}</InlineMath> converges
            to some point of <InlineMath>X</InlineMath>.
          </li>
          <li>
            <strong>(c)</strong> In <InlineMath>{'R^k'}</InlineMath>, every Cauchy sequence converges.
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <p>
          <em>Note:</em> The difference between the definition of convergence and
          the definition of a Cauchy sequence is that the limit is explicitly involved
          in the former, but not in the latter. Thus Theorem 3.11 may enable us
          to decide whether or not a given sequence converges without knowledge
          of the limit to which it may converge.
        </p>
      </Callout>

      <Definition title="Complete Metric Space (3.12)">
        <p>
          A metric space in which every Cauchy sequence converges is
          said to be <em>complete</em>.
        </p>
      </Definition>

      <p className="my-6">
        Thus Theorem 3.11 says that <em>all compact metric spaces and all Euclidean
        spaces are complete</em>. Theorem 3.11 implies also that <em>every closed subset E
        of a complete metric space X is complete</em>. (Every Cauchy sequence
        in <InlineMath>E</InlineMath> is a Cauchy sequence in <InlineMath>X</InlineMath>, hence
        it converges to some <InlineMath>{'p \\in X'}</InlineMath>, and
        actually <InlineMath>{'p \\in E'}</InlineMath> since <InlineMath>E</InlineMath> is closed.)
      </p>

      <Example title="An Incomplete Metric Space">
        <p className="mb-4">
          An example of a metric space which is not complete is the space of all
          rational numbers, with <InlineMath>{'d(x, y) = |x - y|'}</InlineMath>.
        </p>
        <p>
          For instance, the sequence <InlineMath>{'3, 3.1, 3.14, 3.141, 3.1415, \\ldots'}</InlineMath> consisting
          of finite decimal approximations to <InlineMath>\\pi</InlineMath> is a
          Cauchy sequence of rational numbers that does not converge to any
          rational number. It converges to <InlineMath>\\pi</InlineMath> in <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
      </Example>

      <Definition title="Monotonic Sequences (3.13)">
        <p>A sequence <InlineMath>{'\\{s_n\\}'}</InlineMath> of real numbers is said to be</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <em>monotonically increasing</em> if <InlineMath>{'s_n \\leq s_{n+1}'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>);
          </li>
          <li>
            <em>monotonically decreasing</em> if <InlineMath>{'s_n \\geq s_{n+1}'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>).
          </li>
        </ul>
        <p className="mt-2">
          The class of monotonic sequences consists of the increasing and the decreasing sequences.
        </p>
      </Definition>

      <Theorem
        title="Monotone Convergence (3.14)"
        proof={
          <>
            <p className="mb-4">
              Suppose <InlineMath>{'s_n \\leq s_{n+1}'}</InlineMath> (the proof is analogous in the other case).
              Let <InlineMath>E</InlineMath> be the range of <InlineMath>{'\\{s_n\\}'}</InlineMath>.
              If <InlineMath>{'\\{s_n\\}'}</InlineMath> is bounded, let <InlineMath>s</InlineMath> be
              the least upper bound of <InlineMath>E</InlineMath>. Then
            </p>
            <MathBlock>{'s_n \\leq s \\quad (n = 1, 2, 3, \\ldots).'}</MathBlock>
            <p className="mb-4">
              For every <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there is an
              integer <InlineMath>N</InlineMath> such that
            </p>
            <MathBlock>{'s - \\varepsilon < s_N \\leq s,'}</MathBlock>
            <p className="mb-4">
              for otherwise <InlineMath>{'s - \\varepsilon'}</InlineMath> would be an upper bound
              of <InlineMath>E</InlineMath>. Since <InlineMath>{'\\{s_n\\}'}</InlineMath> increases, <InlineMath>{'n \\geq N'}</InlineMath> therefore implies
            </p>
            <MathBlock>{'s - \\varepsilon < s_n \\leq s,'}</MathBlock>
            <p>
              which shows that <InlineMath>{'\\{s_n\\}'}</InlineMath> converges (to <InlineMath>s</InlineMath>).
            </p>
            <p className="mt-4">The converse follows from Theorem 3.2(c).</p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'\\{s_n\\}'}</InlineMath> is monotonic.
          Then <InlineMath>{'\\{s_n\\}'}</InlineMath> converges if and only if it is bounded.
        </p>
      </Theorem>
    </LessonLayout>
  );
}
