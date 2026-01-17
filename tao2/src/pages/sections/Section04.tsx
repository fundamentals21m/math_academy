import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Compact Metric Spaces</h2>

      <p className="mb-4">
        We now come to one of the most useful notions in point-set topology: <strong>compactness</strong>.
        Recall the Heine-Borel theorem, which asserted that every sequence in a closed and bounded
        subset of the real line has a convergent subsequence whose limit is also in that set.
      </p>

      <Definition title="Compactness">
        <p>
          A metric space <InlineMath>(X, d)</InlineMath> is said to be <strong>compact</strong>{' '}
          iff every sequence in <InlineMath>(X, d)</InlineMath> has at least one convergent
          subsequence. A subset <InlineMath>Y</InlineMath> of a metric space{' '}
          <InlineMath>X</InlineMath> is said to be <strong>compact</strong> if the subspace{' '}
          <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath> is compact.
        </p>
      </Definition>

      <Callout type="info" title="Intrinsic Property">
        <p>
          The notion of a set <InlineMath>Y</InlineMath> being compact is <em>intrinsic</em>:
          it only depends on the metric function restricted to <InlineMath>Y</InlineMath>, and
          not on the choice of the ambient space <InlineMath>X</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bounded Sets</h3>

      <Definition title="Bounded Sets">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let{' '}
          <InlineMath>Y</InlineMath> be a subset of <InlineMath>X</InlineMath>. We say that{' '}
          <InlineMath>Y</InlineMath> is <strong>bounded</strong> iff there exists a ball{' '}
          <InlineMath>B(x, r)</InlineMath> in <InlineMath>X</InlineMath> which contains{' '}
          <InlineMath>Y</InlineMath>.
        </p>
      </Definition>

      <Definition title="Compact Implies Complete and Bounded">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a compact metric space. Then{' '}
          <InlineMath>(X, d)</InlineMath> is both <strong>complete</strong> and{' '}
          <strong>bounded</strong>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Heine-Borel Theorem</h3>

      <Definition title="Heine-Borel Theorem">
        <p>
          Let <InlineMath>{`(\\mathbf{R}^n, d)`}</InlineMath> be a Euclidean space with either
          the Euclidean metric, the taxicab metric, or the sup norm metric. Let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>{`\\mathbf{R}^n`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>E</InlineMath> is <strong>compact</strong> if and only if it is{' '}
          <strong>closed and bounded</strong>.
        </p>
      </Definition>

      <Callout type="warning" title="Heine-Borel Fails in General">
        <p>
          The Heine-Borel theorem is not true for more general metrics! For instance, the
          integers <InlineMath>{`\\mathbf{Z}`}</InlineMath> with the discrete metric is closed
          and bounded, but <strong>not compact</strong>, since the sequence{' '}
          <InlineMath>{`1, 2, 3, 4, \\ldots`}</InlineMath> has no convergent subsequence.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Open Covers and Finite Subcovers</h3>

      <Definition title="Open Cover Characterization">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let{' '}
          <InlineMath>Y</InlineMath> be a compact subset of <InlineMath>X</InlineMath>. Let{' '}
          <InlineMath>{`(V_\\alpha)_{\\alpha \\in I}`}</InlineMath> be a collection of open sets
          in <InlineMath>X</InlineMath> such that:
        </p>
        <MathBlock>
          {`Y \\subseteq \\bigcup_{\\alpha \\in I} V_\\alpha`}
        </MathBlock>
        <p className="mt-2">
          (i.e., the collection <em>covers</em> <InlineMath>Y</InlineMath>). Then there exists
          a <strong>finite</strong> subset <InlineMath>F</InlineMath> of{' '}
          <InlineMath>I</InlineMath> such that:
        </p>
        <MathBlock>
          {`Y \\subseteq \\bigcup_{\\alpha \\in F} V_\\alpha`}
        </MathBlock>
      </Definition>

      <p className="mb-4">
        This characterization — that every open cover has a finite subcover — is often
        considered the more fundamental notion of compactness than the sequence-based one.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nested Compact Sets</h3>

      <Definition title="Nested Compact Sets">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`K_1, K_2, K_3, \\ldots`}</InlineMath> be a sequence of non-empty
          compact subsets of <InlineMath>X</InlineMath> such that:
        </p>
        <MathBlock>
          {`K_1 \\supset K_2 \\supset K_3 \\supset \\cdots`}
        </MathBlock>
        <p className="mt-2">
          Then the intersection <InlineMath>{`\\bigcap_{n=1}^{\\infty} K_n`}</InlineMath> is{' '}
          <strong>non-empty</strong>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of Compact Sets</h3>

      <Definition title="Basic Properties of Compact Sets">
        <p>Let <InlineMath>(X, d)</InlineMath> be a metric space.</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If <InlineMath>Y</InlineMath> is a compact subset of <InlineMath>X</InlineMath>,
            and <InlineMath>{`Z \\subseteq Y`}</InlineMath>, then <InlineMath>Z</InlineMath> is
            compact if and only if <InlineMath>Z</InlineMath> is <strong>closed</strong>.
          </li>
          <li>
            If <InlineMath>{`Y_1, \\ldots, Y_n`}</InlineMath> are a finite collection of
            compact subsets of <InlineMath>X</InlineMath>, then their union{' '}
            <InlineMath>{`Y_1 \\cup \\cdots \\cup Y_n`}</InlineMath> is also compact.
          </li>
          <li>
            Every finite subset of <InlineMath>X</InlineMath> (including the empty set) is
            compact.
          </li>
        </ul>
      </Definition>

      <Example title="Compact Subsets of R">
        <p>In <InlineMath>{`\\mathbf{R}`}</InlineMath> with the standard metric:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>[a, b]</InlineMath> is compact (closed and bounded)
          </li>
          <li>
            <InlineMath>(a, b)</InlineMath> is not compact (not closed)
          </li>
          <li>
            <InlineMath>[0, \\infty)</InlineMath> is not compact (not bounded)
          </li>
          <li>
            Any finite set is compact
          </li>
        </ul>
      </Example>

      <Callout type="success" title="Why Compactness Matters">
        <p>
          Compactness is one of the most powerful properties in analysis. It allows us to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Extract convergent subsequences from any sequence</li>
          <li>Guarantee that continuous functions attain their maximum and minimum</li>
          <li>Reduce infinite processes to finite ones (via the open cover property)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
