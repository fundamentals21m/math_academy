import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Continuity and Connectedness</h2>

      <p className="mb-4">
        We now describe another important concept in metric spaces: <strong>connectedness</strong>.
        Intuitively, a connected set is one which cannot be separated into two disjoint open sets.
      </p>

      <Definition title="Connected Spaces">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space. We say that{' '}
          <InlineMath>X</InlineMath> is <strong>disconnected</strong> iff there exist disjoint
          non-empty open sets <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath> in{' '}
          <InlineMath>X</InlineMath> such that <InlineMath>{`V \\cup W = X`}</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>X</InlineMath> is disconnected if and only if{' '}
          <InlineMath>X</InlineMath> contains a non-empty proper subset which is simultaneously
          closed and open.
        </p>
        <p className="mt-2">
          We say that <InlineMath>X</InlineMath> is <strong>connected</strong> iff it is non-empty
          and not disconnected.
        </p>
      </Definition>

      <Callout type="info" title="The Empty Set">
        <p>
          We declare the empty set <InlineMath>\\emptyset</InlineMath> as being special — it is
          neither connected nor disconnected. One could think of the empty set as "unconnected".
        </p>
      </Callout>

      <Example title="Disconnected Set">
        <p>
          Consider the set <InlineMath>{`X := [1, 2] \\cup [3, 4]`}</InlineMath>, with the usual
          metric. This set is disconnected because the sets <InlineMath>{`[1, 2]`}</InlineMath>{' '}
          and <InlineMath>{`[3, 4]`}</InlineMath> are open relative to <InlineMath>X</InlineMath>.
        </p>
      </Example>

      <Definition title="Connected Sets">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let <InlineMath>Y</InlineMath>{' '}
          be a subset of <InlineMath>X</InlineMath>. We say that <InlineMath>Y</InlineMath> is{' '}
          <strong>connected</strong> iff the metric space{' '}
          <InlineMath>{`(Y, d|_{Y \\times Y})`}</InlineMath> is connected.
        </p>
        <p className="mt-2">
          This definition is <em>intrinsic</em>: whether a set <InlineMath>Y</InlineMath> is
          connected or not depends only on what the metric is doing on <InlineMath>Y</InlineMath>,
          but not on what ambient space <InlineMath>X</InlineMath> one places{' '}
          <InlineMath>Y</InlineMath> in.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Connected Subsets of the Real Line
      </h3>

      <Definition title="Characterization of Connected Subsets of R">
        <p>
          Let <InlineMath>X</InlineMath> be a subset of the real line{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath>. Then the following statements are equivalent:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>X</InlineMath> is connected.
          </li>
          <li>
            Whenever <InlineMath>{`x, y \\in X`}</InlineMath> and <InlineMath>{`x < y`}</InlineMath>,
            the interval <InlineMath>{`[x, y]`}</InlineMath> is also contained in{' '}
            <InlineMath>X</InlineMath>.
          </li>
          <li>
            <InlineMath>X</InlineMath> is an <strong>interval</strong>.
          </li>
        </ul>
      </Definition>

      <Example title="Intervals are Connected">
        <p>
          The following subsets of <InlineMath>{`\\mathbf{R}`}</InlineMath> are connected:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Any open interval <InlineMath>(a, b)</InlineMath>
          </li>
          <li>
            Any closed interval <InlineMath>[a, b]</InlineMath>
          </li>
          <li>
            Any half-open interval <InlineMath>[a, b)</InlineMath> or <InlineMath>(a, b]</InlineMath>
          </li>
          <li>
            The entire real line <InlineMath>{`\\mathbf{R}`}</InlineMath>
          </li>
          <li>
            Half-infinite intervals <InlineMath>[a, \\infty)</InlineMath> or{' '}
            <InlineMath>(-\\infty, b]</InlineMath>
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Continuity Preserves Connectedness
      </h3>

      <Definition title="Continuous Maps Preserve Connectedness">
        <p>
          Let <InlineMath>{`f : X \\to Y`}</InlineMath> be a continuous map from one metric space{' '}
          <InlineMath>{`(X, d_X)`}</InlineMath> to another <InlineMath>{`(Y, d_Y)`}</InlineMath>.
          Let <InlineMath>E</InlineMath> be any connected subset of <InlineMath>X</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`f(E)`}</InlineMath> is also <strong>connected</strong>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Intermediate Value Theorem
      </h3>

      <Definition title="Intermediate Value Theorem">
        <p>
          Let <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> be a continuous map from one
          metric space <InlineMath>{`(X, d_X)`}</InlineMath> to the real line. Let{' '}
          <InlineMath>E</InlineMath> be any connected subset of <InlineMath>X</InlineMath>, and
          let <InlineMath>a, b</InlineMath> be any two elements of <InlineMath>E</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>y</InlineMath> be a real number <em>between</em>{' '}
          <InlineMath>{`f(a)`}</InlineMath> and <InlineMath>{`f(b)`}</InlineMath>, i.e., either{' '}
          <InlineMath>{`f(a) \\leq y \\leq f(b)`}</InlineMath> or{' '}
          <InlineMath>{`f(a) \\geq y \\geq f(b)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then there exists <InlineMath>{`c \\in E`}</InlineMath> such that{' '}
          <InlineMath>{`f(c) = y`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Classic IVT">
        <p>
          When <InlineMath>{`E = [a, b]`}</InlineMath>, this reduces to the classical intermediate
          value theorem: if <InlineMath>f</InlineMath> is continuous on{' '}
          <InlineMath>{`[a, b]`}</InlineMath> and <InlineMath>y</InlineMath> is between{' '}
          <InlineMath>{`f(a)`}</InlineMath> and <InlineMath>{`f(b)`}</InlineMath>, then{' '}
          <InlineMath>f</InlineMath> takes the value <InlineMath>y</InlineMath> somewhere in{' '}
          <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Path-Connectedness
      </h3>

      <Definition title="Path-Connected Sets">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let <InlineMath>E</InlineMath>{' '}
          be a subset of <InlineMath>X</InlineMath>. We say that <InlineMath>E</InlineMath> is{' '}
          <strong>path-connected</strong> iff, for every <InlineMath>{`x, y \\in E`}</InlineMath>,
          there exists a continuous function <InlineMath>{`\\gamma : [0, 1] \\to E`}</InlineMath>{' '}
          from the unit interval <InlineMath>{`[0, 1]`}</InlineMath> to <InlineMath>E</InlineMath>{' '}
          such that <InlineMath>{`\\gamma(0) = x`}</InlineMath> and{' '}
          <InlineMath>{`\\gamma(1) = y`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Path-Connected Implies Connected">
        <p>Every path-connected set is connected.</p>
        <p className="mt-2">
          (The converse is false in general, but constructing a counterexample is somewhat tricky.)
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Connected Sets
      </h3>

      <Definition title="Unions and Closures of Connected Sets">
        <p>Let <InlineMath>(X, d)</InlineMath> be a metric space.</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If <InlineMath>{`(E_\\alpha)_{\\alpha \\in I}`}</InlineMath> is a collection of
            connected sets in <InlineMath>X</InlineMath> such that{' '}
            <InlineMath>{`\\bigcap_{\\alpha \\in I} E_\\alpha`}</InlineMath> is non-empty, then{' '}
            <InlineMath>{`\\bigcup_{\\alpha \\in I} E_\\alpha`}</InlineMath> is connected.
          </li>
          <li>
            If <InlineMath>E</InlineMath> is connected, then the closure{' '}
            <InlineMath>{`\\overline{E}`}</InlineMath> of <InlineMath>E</InlineMath> is also
            connected.
          </li>
        </ul>
      </Definition>

      <Definition title="Connected Components">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space. Define a relation{' '}
          <InlineMath>{`x \\sim y`}</InlineMath> on <InlineMath>X</InlineMath> by declaring{' '}
          <InlineMath>{`x \\sim y`}</InlineMath> iff there exists a connected subset of{' '}
          <InlineMath>X</InlineMath> which contains both <InlineMath>x</InlineMath> and{' '}
          <InlineMath>y</InlineMath>.
        </p>
        <p className="mt-2">
          This is an equivalence relation, and the equivalence classes are called the{' '}
          <strong>connected components</strong> of <InlineMath>X</InlineMath>. Each connected
          component is both closed and connected.
        </p>
      </Definition>
    </LessonLayout>
  );
}
