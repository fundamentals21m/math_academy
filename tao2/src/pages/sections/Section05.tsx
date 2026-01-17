import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { EpsilonDeltaVisualizer } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Continuous Functions</h2>

      <p className="mb-4">
        In the previous chapter we studied a single metric space <InlineMath>(X, d)</InlineMath>,
        and the various types of sets one could find in that space. The theory of metric spaces
        becomes even richer when one considers not just a single metric space, but rather pairs{' '}
        <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> of metric
        spaces, as well as <strong>continuous functions</strong>{' '}
        <InlineMath>{`f : X \\to Y`}</InlineMath> between such spaces.
      </p>

      <Definition title="Continuous Functions">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath> be another metric space, and let{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath> be a function.
        </p>
        <p className="mt-2">
          If <InlineMath>{`x_0 \\in X`}</InlineMath>, we say that <InlineMath>f</InlineMath> is{' '}
          <strong>continuous at</strong> <InlineMath>x_0</InlineMath> iff for every{' '}
          <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists a{' '}
          <InlineMath>{`\\delta > 0`}</InlineMath> such that{' '}
          <InlineMath>{`d_Y(f(x), f(x_0)) < \\varepsilon`}</InlineMath> whenever{' '}
          <InlineMath>{`d_X(x, x_0) < \\delta`}</InlineMath>.
        </p>
        <p className="mt-2">
          We say that <InlineMath>f</InlineMath> is <strong>continuous</strong> iff it is
          continuous at every point <InlineMath>{`x \\in X`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Continuous Maps">
        <p>
          Continuous functions are also sometimes called <em>continuous maps</em>.
          Mathematically, there is no distinction between the two terminologies. If{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath> is continuous, and <InlineMath>K</InlineMath>{' '}
          is any subset of <InlineMath>X</InlineMath>, then the restriction{' '}
          <InlineMath>{`f|_K : K \\to Y`}</InlineMath> of <InlineMath>f</InlineMath> to{' '}
          <InlineMath>K</InlineMath> is also continuous.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Exploring the ε-δ Definition</h3>

      <EpsilonDeltaVisualizer />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Continuity Preserves Convergence</h3>

      <Definition title="Continuity Preserves Convergence">
        <p>
          Suppose that <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath>{' '}
          are metric spaces. Let <InlineMath>{`f : X \\to Y`}</InlineMath> be a function, and let{' '}
          <InlineMath>{`x_0 \\in X`}</InlineMath> be a point in <InlineMath>X</InlineMath>. Then
          the following three statements are logically equivalent:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is continuous at <InlineMath>x_0</InlineMath>.
          </li>
          <li>
            Whenever <InlineMath>{`(x^{(n)})_{n=1}^{\\infty}`}</InlineMath> is a sequence in{' '}
            <InlineMath>X</InlineMath> which converges to <InlineMath>x_0</InlineMath> with
            respect to <InlineMath>d_X</InlineMath>, the sequence{' '}
            <InlineMath>{`(f(x^{(n)}))_{n=1}^{\\infty}`}</InlineMath> converges to{' '}
            <InlineMath>{`f(x_0)`}</InlineMath> with respect to <InlineMath>d_Y</InlineMath>.
          </li>
          <li>
            For every open set <InlineMath>{`V \\subset Y`}</InlineMath> that contains{' '}
            <InlineMath>{`f(x_0)`}</InlineMath>, there exists an open set{' '}
            <InlineMath>{`U \\subset X`}</InlineMath> containing <InlineMath>x_0</InlineMath>{' '}
            such that <InlineMath>{`f(U) \\subseteq V`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Open Set Characterization of Continuity
      </h3>

      <Definition title="Equivalent Conditions for Continuity">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath> be another metric space. Let{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath> be a function. Then the following four
          statements are equivalent:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is continuous.
          </li>
          <li>
            Whenever <InlineMath>{`(x^{(n)})_{n=1}^{\\infty}`}</InlineMath> is a sequence in{' '}
            <InlineMath>X</InlineMath> which converges to some point{' '}
            <InlineMath>{`x_0 \\in X`}</InlineMath>, the sequence{' '}
            <InlineMath>{`(f(x^{(n)}))_{n=1}^{\\infty}`}</InlineMath> converges to{' '}
            <InlineMath>{`f(x_0)`}</InlineMath>.
          </li>
          <li>
            Whenever <InlineMath>V</InlineMath> is an open set in <InlineMath>Y</InlineMath>, the
            set <InlineMath>{`f^{-1}(V) := \\{x \\in X : f(x) \\in V\\}`}</InlineMath> is an open
            set in <InlineMath>X</InlineMath>.
          </li>
          <li>
            Whenever <InlineMath>F</InlineMath> is a closed set in <InlineMath>Y</InlineMath>, the
            set <InlineMath>{`f^{-1}(F) := \\{x \\in X : f(x) \\in F\\}`}</InlineMath> is a closed
            set in <InlineMath>X</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="warning" title="Inverse Images vs. Forward Images">
        <p>
          It may seem strange that continuity ensures that the <em>inverse</em> image of an open
          set is open. One may guess instead that the reverse should be true, that the{' '}
          <em>forward</em> image of an open set is open; but this is not true. A continuous
          function can map an open set to a non-open set.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Composition of Continuous Functions</h3>

      <Definition title="Continuity Preserved by Composition">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath>, <InlineMath>{`(Y, d_Y)`}</InlineMath>, and{' '}
          <InlineMath>{`(Z, d_Z)`}</InlineMath> be metric spaces.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If <InlineMath>{`f : X \\to Y`}</InlineMath> is continuous at a point{' '}
            <InlineMath>{`x_0 \\in X`}</InlineMath>, and{' '}
            <InlineMath>{`g : Y \\to Z`}</InlineMath> is continuous at{' '}
            <InlineMath>{`f(x_0)`}</InlineMath>, then the composition{' '}
            <InlineMath>{`g \\circ f : X \\to Z`}</InlineMath>, defined by{' '}
            <InlineMath>{`g \\circ f(x) := g(f(x))`}</InlineMath>, is continuous at{' '}
            <InlineMath>x_0</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`f : X \\to Y`}</InlineMath> is continuous, and{' '}
            <InlineMath>{`g : Y \\to Z`}</InlineMath> is continuous, then{' '}
            <InlineMath>{`g \\circ f : X \\to Z`}</InlineMath> is also continuous.
          </li>
        </ul>
      </Definition>

      <Example title="Squaring a Continuous Function">
        <p>
          If <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> is a continuous function, then
          the function <InlineMath>{`f^2 : X \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`f^2(x) := f(x)^2`}</InlineMath> is automatically continuous also.
        </p>
        <p className="mt-2">
          This is because we have <InlineMath>{`f^2 = g \\circ f`}</InlineMath>, where{' '}
          <InlineMath>{`g : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is the squaring function{' '}
          <InlineMath>{`g(x) := x^2`}</InlineMath>, and <InlineMath>g</InlineMath> is a continuous
          function.
        </p>
      </Example>

      <Callout type="success" title="Key Takeaway">
        <p>
          The open set characterization of continuity (<InlineMath>{`f^{-1}(V)`}</InlineMath> is
          open whenever <InlineMath>V</InlineMath> is open) is extremely powerful and forms the
          basis for generalizing continuity to topological spaces.
        </p>
      </Callout>
    </LessonLayout>
  );
}
