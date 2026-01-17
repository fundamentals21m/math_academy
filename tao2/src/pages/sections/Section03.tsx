import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Cauchy Sequences and Complete Metric Spaces</h2>

      <p className="mb-4">
        We now generalize much of the theory of limits of sequences from Analysis I to the
        setting of general metric spaces. We begin by generalizing the notion of a subsequence.
      </p>

      <Definition title="Subsequences">
        <p>
          Suppose that <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> is a sequence of
          points in a metric space <InlineMath>(X, d)</InlineMath>. Suppose that{' '}
          <InlineMath>{`n_1, n_2, n_3, \\ldots`}</InlineMath> is an increasing sequence of
          integers with <InlineMath>{`m \\leq n_1 < n_2 < n_3 < \\cdots`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then we call the sequence <InlineMath>{`(x^{(n_j)})_{j=1}^{\\infty}`}</InlineMath> a{' '}
          <strong>subsequence</strong> of the original sequence.
        </p>
      </Definition>

      <Definition title="Limit Points">
        <p>
          Suppose that <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> is a sequence of
          points in a metric space <InlineMath>(X, d)</InlineMath>, and let{' '}
          <InlineMath>{`L \\in X`}</InlineMath>. We say that <InlineMath>L</InlineMath> is a{' '}
          <strong>limit point</strong> of the sequence iff for every{' '}
          <InlineMath>{`N \\geq m`}</InlineMath> and <InlineMath>{`\\varepsilon > 0`}</InlineMath>{' '}
          there exists an <InlineMath>{`n \\geq N`}</InlineMath> such that{' '}
          <InlineMath>{`d(x^{(n)}, L) \\leq \\varepsilon`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Limit Points via Subsequences">
        <p>
          <InlineMath>L</InlineMath> is a limit point of{' '}
          <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> if and only if there exists a
          subsequence <InlineMath>{`(x^{(n_j)})_{j=1}^{\\infty}`}</InlineMath> which converges
          to <InlineMath>L</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cauchy Sequences</h3>

      <Definition title="Cauchy Sequences">
        <p>
          Let <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> be a sequence of points in
          a metric space <InlineMath>(X, d)</InlineMath>. We say that this sequence is a{' '}
          <strong>Cauchy sequence</strong> iff for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>,
          there exists an <InlineMath>{`N \\geq m`}</InlineMath> such that{' '}
          <InlineMath>{`d(x^{(j)}, x^{(k)}) < \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`j, k \\geq N`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Convergent Sequences are Cauchy">
        <p>
          Let <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> be a sequence in{' '}
          <InlineMath>(X, d)</InlineMath> which converges to some limit{' '}
          <InlineMath>x_0</InlineMath>. Then <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath>{' '}
          is also a Cauchy sequence.
        </p>
      </Definition>

      <Callout type="warning" title="Cauchy Does Not Imply Convergent">
        <p>
          In general metric spaces, not every Cauchy sequence converges!
        </p>
      </Callout>

      <Example title="A Non-Convergent Cauchy Sequence">
        <p>
          Consider the sequence <InlineMath>{`3, 3.1, 3.14, 3.141, 3.1415, \\ldots`}</InlineMath>{' '}
          in the metric space <InlineMath>{`(\\mathbf{Q}, d)`}</InlineMath> (the rationals with
          the usual metric). This sequence is Cauchy, and in <InlineMath>{`\\mathbf{R}`}</InlineMath>{' '}
          it converges to <InlineMath>\\pi</InlineMath>. But it does{' '}
          <strong>not converge</strong> in <InlineMath>{`\\mathbf{Q}`}</InlineMath> since{' '}
          <InlineMath>{`\\pi \\notin \\mathbf{Q}`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Complete Metric Spaces</h3>

      <Definition title="Complete Metric Spaces">
        <p>
          A metric space <InlineMath>(X, d)</InlineMath> is said to be <strong>complete</strong>{' '}
          iff every Cauchy sequence in <InlineMath>(X, d)</InlineMath> is in fact convergent in{' '}
          <InlineMath>(X, d)</InlineMath>.
        </p>
      </Definition>

      <Example title="Complete and Incomplete Spaces">
        <ul className="list-disc list-inside space-y-2">
          <li>
            The reals <InlineMath>{`(\\mathbf{R}, d)`}</InlineMath> are <strong>complete</strong>.
          </li>
          <li>
            The rationals <InlineMath>{`(\\mathbf{Q}, d)`}</InlineMath> are{' '}
            <strong>not complete</strong>.
          </li>
          <li>
            Any metric space with the discrete metric is <strong>complete</strong> (every
            Cauchy sequence is eventually constant).
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Completeness and Closed Sets</h3>

      <Definition title="Completeness and Closed Sets">
        <p>Let <InlineMath>(X, d)</InlineMath> be a metric space.</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath> is a complete subspace of{' '}
            <InlineMath>(X, d)</InlineMath>, then <InlineMath>Y</InlineMath> must be{' '}
            <strong>closed</strong> in <InlineMath>X</InlineMath>.
          </li>
          <li>
            Conversely, if <InlineMath>(X, d)</InlineMath> is complete and{' '}
            <InlineMath>Y</InlineMath> is a <strong>closed</strong> subset of{' '}
            <InlineMath>X</InlineMath>, then the subspace{' '}
            <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath> is also complete.
          </li>
        </ul>
      </Definition>

      <Callout type="success" title="Intrinsic Completeness">
        <p>
          Complete metric spaces are <em>intrinsically closed</em>: no matter what space one
          places them in, they are always closed sets.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Completion of Metric Spaces</h3>

      <p className="mb-4">
        It turns out that given any incomplete metric space <InlineMath>(X, d)</InlineMath>,
        there exists a <strong>completion</strong>{' '}
        <InlineMath>{`(\\overline{X}, \\tilde{d})`}</InlineMath>, which is a larger metric space
        containing <InlineMath>(X, d)</InlineMath> as a dense subset, and which is complete.
      </p>

      <p className="mb-4">
        The completion is constructed by taking formal limits of Cauchy sequences, similar to
        how the real numbers are constructed from the rationals.
      </p>

      <Example title="The Completion of Q">
        <p>
          One possible completion of <InlineMath>{`\\mathbf{Q}`}</InlineMath> is{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath>. The rationals are dense in the reals, and
          every Cauchy sequence of rationals converges to a real number.
        </p>
      </Example>
    </LessonLayout>
  );
}
