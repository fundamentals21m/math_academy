import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-semibold mb-4">Upper and Lower Limits</h2>

      <p className="mb-6">
        It should be noted that we now use the symbol <InlineMath>{'\\to'}</InlineMath> (introduced in Definition
        3.1) for certain types of divergent sequences, as well as for convergent sequences,
        but that the definitions of convergence and of limit, given in Definition 3.1, are
        in no way changed.
      </p>

      <Definition title="Extended Limits (3.15)">
        <p className="mb-4">
          Let <InlineMath>{'\\{s_n\\}'}</InlineMath> be a sequence of real numbers with the
          following property: For every real <InlineMath>M</InlineMath> there is an
          integer <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'s_n \\geq M'}</InlineMath>.
          We then write
        </p>
        <MathBlock>{'s_n \\to +\\infty.'}</MathBlock>
        <p className="mb-4">
          Similarly, if for every real <InlineMath>M</InlineMath> there is an
          integer <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'s_n \\leq M'}</InlineMath>,
          we write
        </p>
        <MathBlock>{'s_n \\to -\\infty.'}</MathBlock>
      </Definition>

      <Definition title="Upper and Lower Limits (3.16)">
        <p className="mb-4">
          Let <InlineMath>{'\\{s_n\\}'}</InlineMath> be a sequence of real numbers.
          Let <InlineMath>E</InlineMath> be the set of numbers <InlineMath>x</InlineMath> (in the
          extended real number system) such that <InlineMath>{'s_{n_k} \\to x'}</InlineMath> for
          some subsequence <InlineMath>{'\\{s_{n_k}\\}'}</InlineMath>. This set <InlineMath>E</InlineMath> contains
          all subsequential limits as defined in Definition 3.5, plus
          possibly the numbers <InlineMath>{'+\\infty'}</InlineMath>, <InlineMath>{'-\\infty'}</InlineMath>.
        </p>
        <p className="mb-4">
          We now recall Definitions 1.8 and 1.23 and put
        </p>
        <MathBlock>{'s^* = \\sup E,'}</MathBlock>
        <MathBlock>{'s_* = \\inf E.'}</MathBlock>
        <p>
          The numbers <InlineMath>{'s^*'}</InlineMath>, <InlineMath>{'s_*'}</InlineMath> are called
          the <em>upper</em> and <em>lower limits</em> of <InlineMath>{'\\{s_n\\}'}</InlineMath>;
          we use the notation
        </p>
        <MathBlock>{'\\limsup_{n \\to \\infty} s_n = s^*, \\quad \\liminf_{n \\to \\infty} s_n = s_*.'}</MathBlock>
      </Definition>

      <Theorem
        title="Characterization of lim sup and lim inf (3.17)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> If <InlineMath>{'s^* = +\\infty'}</InlineMath>,
              then <InlineMath>E</InlineMath> is not bounded above; hence <InlineMath>{'\\{s_n\\}'}</InlineMath> is
              not bounded above, and there is a subsequence <InlineMath>{'\\{s_{n_k}\\}'}</InlineMath> such
              that <InlineMath>{'s_{n_k} \\to +\\infty'}</InlineMath>.
            </p>
            <p className="mb-4">
              If <InlineMath>{'s^*'}</InlineMath> is real, then <InlineMath>E</InlineMath> is bounded above,
              and at least one subsequential limit exists, so that (a) follows from
              Theorems 3.7 and 2.28.
            </p>
            <p className="mb-4">
              If <InlineMath>{'s^* = -\\infty'}</InlineMath>, then <InlineMath>E</InlineMath> contains
              only one element, namely <InlineMath>{'-\\infty'}</InlineMath>, and there is no
              subsequential limit. Hence, for any real <InlineMath>M</InlineMath>, <InlineMath>{'s_n > M'}</InlineMath> for
              at most a finite number of values of <InlineMath>n</InlineMath>, so
              that <InlineMath>{'s_n \\to -\\infty'}</InlineMath>.
            </p>
            <p className="mb-4">
              This establishes (a) in all cases.
            </p>
            <p className="mb-4">
              <strong>(b)</strong> Suppose there is a number <InlineMath>{'x > s^*'}</InlineMath> such
              that <InlineMath>{'s_n \\geq x'}</InlineMath> for infinitely many values of <InlineMath>n</InlineMath>.
              In that case, there is a number <InlineMath>{'y \\in E'}</InlineMath> such
              that <InlineMath>{'y \\geq x > s^*'}</InlineMath>, contradicting the
              definition of <InlineMath>{'s^*'}</InlineMath>.
            </p>
            <p>
              Thus <InlineMath>{'s^*'}</InlineMath> satisfies (a) and (b).
            </p>
            <p className="mt-4">
              To show the uniqueness, suppose there are two numbers <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath>,
              which satisfy (a) and (b), and suppose <InlineMath>{'p < q'}</InlineMath>.
              Choose <InlineMath>x</InlineMath> such that <InlineMath>{'p < x < q'}</InlineMath>.
              Since <InlineMath>p</InlineMath> satisfies (b), we have <InlineMath>{'s_n < x'}</InlineMath> for <InlineMath>{'n \\geq N'}</InlineMath>.
              But then <InlineMath>q</InlineMath> cannot satisfy (a).
            </p>
          </>
        }
      >
        <p className="mb-4">
          Let <InlineMath>{'\\{s_n\\}'}</InlineMath> be a sequence of real numbers.
          Let <InlineMath>E</InlineMath> and <InlineMath>{'s^*'}</InlineMath> have the same meaning as in
          Definition 3.16. Then <InlineMath>{'s^*'}</InlineMath> has the following two properties:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> <InlineMath>{'s^* \\in E'}</InlineMath>.
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>{'x > s^*'}</InlineMath>, there is an
            integer <InlineMath>N</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'s_n < x'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-4">
          Moreover, <InlineMath>{'s^*'}</InlineMath> is the only number with properties (a) and (b).
        </p>
        <p className="mt-4">
          Of course, an analogous result is true for <InlineMath>{'s_*'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Examples of lim sup and lim inf (3.18)">
        <p className="mb-4">
          <strong>(a)</strong> Let <InlineMath>{'\\{s_n\\}'}</InlineMath> be a sequence
          containing all rationals. Then every real number is a subsequential limit, and
        </p>
        <MathBlock>{'\\limsup_{n \\to \\infty} s_n = +\\infty, \\quad \\liminf_{n \\to \\infty} s_n = -\\infty.'}</MathBlock>
        <p className="mb-4">
          <strong>(b)</strong> Let <InlineMath>{'s_n = (-1)^n/[1 + (1/n)]'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\limsup_{n \\to \\infty} s_n = 1, \\quad \\liminf_{n \\to \\infty} s_n = -1.'}</MathBlock>
        <p className="mb-4">
          <strong>(c)</strong> For a real-valued sequence <InlineMath>{'\\{s_n\\}'}</InlineMath>,
          <InlineMath>{'\\lim_{n \\to \\infty} s_n = s'}</InlineMath> if and only if
        </p>
        <MathBlock>{'\\limsup_{n \\to \\infty} s_n = \\liminf_{n \\to \\infty} s_n = s.'}</MathBlock>
      </Example>

      <Theorem
        title="Comparison of lim inf and lim sup (3.19)"
        proof={
          <p>
            By hypothesis, <InlineMath>{'s_n \\leq t_n'}</InlineMath> for <InlineMath>{'n \\geq N'}</InlineMath>.
            If <InlineMath>x</InlineMath> is any subsequential limit of <InlineMath>{'\\{s_n\\}'}</InlineMath>,
            the corresponding subsequence eventually satisfies <InlineMath>{'s_{n_k} \\leq t_{n_k}'}</InlineMath>,
            hence <InlineMath>{'x \\leq \\limsup t_n'}</InlineMath>.
            Taking the sup over all such <InlineMath>x</InlineMath> gives the first inequality.
            The second is similar.
          </p>
        }
      >
        <p>
          If <InlineMath>{'s_n \\leq t_n'}</InlineMath> for <InlineMath>{'n \\geq N'}</InlineMath>,
          where <InlineMath>N</InlineMath> is fixed, then
        </p>
        <MathBlock>{'\\liminf_{n \\to \\infty} s_n \\leq \\liminf_{n \\to \\infty} t_n,'}</MathBlock>
        <MathBlock>{'\\limsup_{n \\to \\infty} s_n \\leq \\limsup_{n \\to \\infty} t_n.'}</MathBlock>
      </Theorem>

      <Callout type="info">
        <p className="mb-4">
          <strong>Key Properties:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <InlineMath>{'\\liminf s_n \\leq \\limsup s_n'}</InlineMath> always.
          </li>
          <li>
            <InlineMath>{'\\{s_n\\}'}</InlineMath> converges if and only
            if <InlineMath>{'\\liminf s_n = \\limsup s_n'}</InlineMath> is finite.
          </li>
          <li>
            <InlineMath>{'\\limsup s_n'}</InlineMath> is the largest subsequential limit.
          </li>
          <li>
            <InlineMath>{'\\liminf s_n'}</InlineMath> is the smallest subsequential limit.
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
