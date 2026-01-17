import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SequenceConvergenceVisualizer } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Relative Topology</h2>

      <p className="mb-4">
        When we defined notions such as open and closed sets, we mentioned that such concepts
        depended on the choice of metric. However, it is not just the choice of metric which
        determines what is open and what is not — it is also the choice of{' '}
        <strong>ambient space</strong> <InlineMath>X</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Sequence Convergence</h3>

      <SequenceConvergenceVisualizer />

      <Example title="Open in One Space, Not in Another">
        <p className="mb-3">
          Consider the plane <InlineMath>{`\\mathbf{R}^2`}</InlineMath> with the Euclidean
          metric. Inside the plane, we can find the <InlineMath>x</InlineMath>-axis{' '}
          <InlineMath>{`X := \\{(x, 0) : x \\in \\mathbf{R}\\}`}</InlineMath>.
        </p>
        <p className="mb-3">
          Now consider the set <InlineMath>{`E := \\{(x, 0) : -1 < x < 1\\}`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Viewed as a subset of <InlineMath>{`\\mathbf{R}^2`}</InlineMath>,{' '}
            <InlineMath>E</InlineMath> is <strong>not open</strong>, because any ball centered
            at a point in <InlineMath>E</InlineMath> contains points off the{' '}
            <InlineMath>x</InlineMath>-axis.
          </li>
          <li>
            Viewed as a subset of <InlineMath>X</InlineMath>,{' '}
            <InlineMath>E</InlineMath> <strong>is open</strong>, since every point is an
            interior point with respect to the subspace metric.
          </li>
        </ul>
      </Example>

      <Example title="Closed in One Space, Not in Another">
        <p className="mb-3">
          Consider <InlineMath>{`\\mathbf{R}`}</InlineMath> with the standard metric, and let{' '}
          <InlineMath>{`X := (-1, 1)`}</InlineMath>. Now consider the set{' '}
          <InlineMath>{`[0, 1)`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            In <InlineMath>{`\\mathbf{R}`}</InlineMath>, the set <InlineMath>{`[0, 1)`}</InlineMath>{' '}
            is <strong>not closed</strong>, because 1 is adherent but not in the set.
          </li>
          <li>
            In <InlineMath>X</InlineMath>, the set <InlineMath>{`[0, 1)`}</InlineMath>{' '}
            <strong>is closed</strong>, because 1 is not in <InlineMath>X</InlineMath> and so
            is no longer considered an adherent point.
          </li>
        </ul>
      </Example>

      <Definition title="Relative Topology">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>Y</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>Y</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            We say <InlineMath>E</InlineMath> is <strong>relatively open</strong> with respect
            to <InlineMath>Y</InlineMath> if it is open in the metric subspace{' '}
            <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath>.
          </li>
          <li>
            We say <InlineMath>E</InlineMath> is <strong>relatively closed</strong> with
            respect to <InlineMath>Y</InlineMath> if it is closed in the metric space{' '}
            <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Characterization of Relative Open and Closed Sets</h3>

      <Definition title="Relative Topology Characterization">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>Y</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>Y</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>E</InlineMath> is relatively open with respect to{' '}
            <InlineMath>Y</InlineMath> if and only if{' '}
            <InlineMath>{`E = V \\cap Y`}</InlineMath> for some set{' '}
            <InlineMath>{`V \\subseteq X`}</InlineMath> which is open in{' '}
            <InlineMath>X</InlineMath>.
          </li>
          <li>
            <InlineMath>E</InlineMath> is relatively closed with respect to{' '}
            <InlineMath>Y</InlineMath> if and only if{' '}
            <InlineMath>{`E = K \\cap Y`}</InlineMath> for some set{' '}
            <InlineMath>{`K \\subseteq X`}</InlineMath> which is closed in{' '}
            <InlineMath>X</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Intuition">
        <p>
          To find relatively open sets in <InlineMath>Y</InlineMath>, take any open set in{' '}
          <InlineMath>X</InlineMath> and intersect it with <InlineMath>Y</InlineMath>.
          Similarly for relatively closed sets.
        </p>
      </Callout>

      <Example title="Relatively Open Sets">
        <p className="mb-3">
          Let <InlineMath>{`X = \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`Y = [0, 2]`}</InlineMath>. Consider <InlineMath>{`E = [0, 1)`}</InlineMath>.
        </p>
        <p className="mb-3">
          We can write <InlineMath>{`E = (-1, 1) \\cap [0, 2]`}</InlineMath>, where{' '}
          <InlineMath>(-1, 1)</InlineMath> is open in <InlineMath>{`\\mathbf{R}`}</InlineMath>.
        </p>
        <p>
          Therefore, <InlineMath>{`[0, 1)`}</InlineMath> is <strong>relatively open</strong>{' '}
          with respect to <InlineMath>{`[0, 2]`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Relative Topology Matters</h3>

      <p className="mb-4">
        Understanding relative topology is crucial when working with subspaces. Many theorems
        about continuity, compactness, and connectedness rely on the careful distinction between
        properties that hold in the ambient space versus properties that hold in a subspace.
      </p>

      <Callout type="note" title="Key Insight">
        <p>
          The notions of being open and being closed are <em>not intrinsic</em> — they depend
          on the ambient space. However, notions like compactness and completeness <em>are
          intrinsic</em> — they only depend on the metric restricted to the subset, not on
          any containing space.
        </p>
      </Callout>
    </LessonLayout>
  );
}
