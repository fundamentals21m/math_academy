import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Topological Spaces</h2>

      <p className="mb-4">
        The concept of a metric space can be generalized to that of a{' '}
        <strong>topological space</strong>. The idea here is not to view the metric{' '}
        <InlineMath>d</InlineMath> as the fundamental object; indeed, in a general topological
        space there is no metric at all. Instead, it is the collection of{' '}
        <strong>open sets</strong> which is the fundamental concept.
      </p>

      <Callout type="info" title="From Metrics to Open Sets">
        <p>
          In a metric space one introduces the metric <InlineMath>d</InlineMath> first, then
          uses the metric to define the concept of an open ball and then open sets. In a
          topological space one starts just with the notion of an open set. From the open sets,
          one cannot necessarily reconstruct a usable notion of a ball or metric.
        </p>
      </Callout>

      <Definition title="Topological Spaces">
        <p>
          A <strong>topological space</strong> is a pair <InlineMath>{`(X, \\mathcal{F})`}</InlineMath>,
          where <InlineMath>X</InlineMath> is a set, and{' '}
          <InlineMath>{`\\mathcal{F} \\subset 2^X`}</InlineMath> is a collection of subsets of{' '}
          <InlineMath>X</InlineMath>, whose elements are referred to as <strong>open sets</strong>.
          The collection <InlineMath>{`\\mathcal{F}`}</InlineMath> must obey the following
          properties:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            The empty set <InlineMath>\\emptyset</InlineMath> and the whole set{' '}
            <InlineMath>X</InlineMath> are open.
          </li>
          <li>
            Any <strong>finite intersection</strong> of open sets is open. In other words, if{' '}
            <InlineMath>{`V_1, \\ldots, V_n`}</InlineMath> are elements of{' '}
            <InlineMath>{`\\mathcal{F}`}</InlineMath>, then{' '}
            <InlineMath>{`V_1 \\cap \\cdots \\cap V_n`}</InlineMath> is also in{' '}
            <InlineMath>{`\\mathcal{F}`}</InlineMath>.
          </li>
          <li>
            Any <strong>arbitrary union</strong> of open sets is open (including infinite unions).
            If <InlineMath>{`(V_\\alpha)_{\\alpha \\in I}`}</InlineMath> is a family of sets in{' '}
            <InlineMath>{`\\mathcal{F}`}</InlineMath>, then{' '}
            <InlineMath>{`\\bigcup_{\\alpha \\in I} V_\\alpha`}</InlineMath> is also in{' '}
            <InlineMath>{`\\mathcal{F}`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="note" title="Metric Spaces are Topological Spaces">
        <p>
          Every metric space <InlineMath>(X, d)</InlineMath> is automatically also a topological
          space (if we set <InlineMath>{`\\mathcal{F}`}</InlineMath> equal to the collection of
          sets which are open in <InlineMath>(X, d)</InlineMath>). However, there do exist
          topological spaces which do not arise from metric spaces.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Neighbourhoods</h3>

      <Definition title="Neighbourhoods">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space, and let{' '}
          <InlineMath>{`x \\in X`}</InlineMath>. A <strong>neighbourhood</strong> of{' '}
          <InlineMath>x</InlineMath> is defined to be any open set in{' '}
          <InlineMath>{`\\mathcal{F}`}</InlineMath> which contains <InlineMath>x</InlineMath>.
        </p>
      </Definition>

      <Example title="Neighbourhoods in Metric Spaces">
        <p>
          If <InlineMath>(X, d)</InlineMath> is a metric space, <InlineMath>{`x \\in X`}</InlineMath>,
          and <InlineMath>{`r > 0`}</InlineMath>, then <InlineMath>{`B(x, r)`}</InlineMath> is a
          neighbourhood of <InlineMath>x</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Topological Convergence
      </h3>

      <Definition title="Topological Convergence">
        <p>
          Let <InlineMath>m</InlineMath> be an integer,{' '}
          <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space, and let{' '}
          <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> be a sequence of points in{' '}
          <InlineMath>X</InlineMath>. Let <InlineMath>x</InlineMath> be a point in{' '}
          <InlineMath>X</InlineMath>.
        </p>
        <p className="mt-2">
          We say that <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath>{' '}
          <strong>converges to</strong> <InlineMath>x</InlineMath> if and only if, for every
          neighbourhood <InlineMath>V</InlineMath> of <InlineMath>x</InlineMath>, there exists an{' '}
          <InlineMath>{`N \\geq m`}</InlineMath> such that{' '}
          <InlineMath>{`x^{(n)} \\in V`}</InlineMath> for all <InlineMath>{`n \\geq N`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Hausdorff Property</h3>

      <Definition title="Hausdorff Spaces">
        <p>
          A topological space <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> is said to be{' '}
          <strong>Hausdorff</strong> if given any two distinct points{' '}
          <InlineMath>{`x, y \\in X`}</InlineMath>, there exists a neighbourhood{' '}
          <InlineMath>V</InlineMath> of <InlineMath>x</InlineMath> and a neighbourhood{' '}
          <InlineMath>W</InlineMath> of <InlineMath>y</InlineMath> such that{' '}
          <InlineMath>{`V \\cap W = \\emptyset`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Uniqueness of Limits">
        <p>
          Any topological space coming from a metric space is Hausdorff. In Hausdorff spaces,
          limits of sequences are unique (analogous to the metric space case). In non-Hausdorff
          spaces, a sequence can converge to multiple limits!
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Interior, Exterior, Boundary, and Closure
      </h3>

      <Definition title="Interior, Exterior, and Boundary Points">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space, let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>x_0</InlineMath> is an <strong>interior point</strong> of{' '}
            <InlineMath>E</InlineMath> if there exists a neighbourhood <InlineMath>V</InlineMath>{' '}
            of <InlineMath>x_0</InlineMath> such that{' '}
            <InlineMath>{`V \\subseteq E`}</InlineMath>.
          </li>
          <li>
            <InlineMath>x_0</InlineMath> is an <strong>exterior point</strong> of{' '}
            <InlineMath>E</InlineMath> if there exists a neighbourhood <InlineMath>V</InlineMath>{' '}
            of <InlineMath>x_0</InlineMath> such that{' '}
            <InlineMath>{`V \\cap E = \\emptyset`}</InlineMath>.
          </li>
          <li>
            <InlineMath>x_0</InlineMath> is a <strong>boundary point</strong> of{' '}
            <InlineMath>E</InlineMath> if it is neither an interior point nor an exterior point.
          </li>
        </ul>
      </Definition>

      <Definition title="Closure">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space, let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>. We say that{' '}
          <InlineMath>x_0</InlineMath> is an <strong>adherent point</strong> of{' '}
          <InlineMath>E</InlineMath> if every neighbourhood <InlineMath>V</InlineMath> of{' '}
          <InlineMath>x_0</InlineMath> has a non-empty intersection with <InlineMath>E</InlineMath>.
        </p>
        <p className="mt-2">
          The set of all adherent points of <InlineMath>E</InlineMath> is called the{' '}
          <strong>closure</strong> of <InlineMath>E</InlineMath> and is denoted{' '}
          <InlineMath>{`\\overline{E}`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Relative Topology and Continuous Functions
      </h3>

      <Definition title="Relative Topology">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space, and{' '}
          <InlineMath>Y</InlineMath> be a subset of <InlineMath>X</InlineMath>. Then we define{' '}
          <InlineMath>{`\\mathcal{F}_Y := \\{V \\cap Y : V \\in \\mathcal{F}\\}`}</InlineMath>,
          and refer to this as the topology on <InlineMath>Y</InlineMath>{' '}
          <strong>induced</strong> by <InlineMath>{`(X, \\mathcal{F})`}</InlineMath>.
        </p>
        <p className="mt-2">
          We call <InlineMath>{`(Y, \\mathcal{F}_Y)`}</InlineMath> a{' '}
          <strong>topological subspace</strong> of <InlineMath>{`(X, \\mathcal{F})`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Continuous Functions on Topological Spaces">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F}_X)`}</InlineMath> and{' '}
          <InlineMath>{`(Y, \\mathcal{F}_Y)`}</InlineMath> be topological spaces, and let{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath> be a function.
        </p>
        <p className="mt-2">
          If <InlineMath>{`x_0 \\in X`}</InlineMath>, we say that <InlineMath>f</InlineMath> is{' '}
          <strong>continuous at</strong> <InlineMath>x_0</InlineMath> iff for every neighbourhood{' '}
          <InlineMath>V</InlineMath> of <InlineMath>{`f(x_0)`}</InlineMath>, there exists a
          neighbourhood <InlineMath>U</InlineMath> of <InlineMath>x_0</InlineMath> such that{' '}
          <InlineMath>{`f(U) \\subseteq V`}</InlineMath>.
        </p>
        <p className="mt-2">
          We say that <InlineMath>f</InlineMath> is <strong>continuous</strong> iff it is
          continuous at every point <InlineMath>{`x \\in X`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Open Set Characterization">
        <p>
          A function <InlineMath>{`f : X \\to Y`}</InlineMath> between topological spaces is
          continuous if and only if the pre-image of every open set is open:
        </p>
        <MathBlock>
          {`V \\text{ open in } Y \\implies f^{-1}(V) \\text{ open in } X`}
        </MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Compactness and Connectedness in Topological Spaces
      </h3>

      <Definition title="Compact Topological Spaces">
        <p>
          Let <InlineMath>{`(X, \\mathcal{F})`}</InlineMath> be a topological space. We say that
          this space is <strong>compact</strong> if every open cover of <InlineMath>X</InlineMath>{' '}
          has a finite subcover.
        </p>
      </Definition>

      <Callout type="warning" title="No Uniform Continuity">
        <p>
          In general topological spaces, there is no notion of a Cauchy sequence, a complete
          space, a bounded space, or uniform continuity. These require a metric structure.
          However, compactness and connectedness can be defined purely in terms of open sets.
        </p>
      </Callout>

      <Definition title="Key Results Generalize">
        <p>Many basic facts about compact metric spaces continue to hold for compact topological
        spaces:</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Continuous maps preserve compactness.</li>
          <li>
            The Maximum Principle holds: continuous real-valued functions on compact spaces are
            bounded and attain their bounds.
          </li>
          <li>Continuous maps preserve connectedness.</li>
          <li>The Intermediate Value Theorem holds for continuous functions on connected spaces.</li>
        </ul>
      </Definition>
    </LessonLayout>
  );
}
