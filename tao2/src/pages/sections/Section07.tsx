import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Continuity and Compactness</h2>

      <p className="mb-4">
        Continuous functions interact well with the concept of compact sets. This section explores
        several important results about continuous functions on compact domains.
      </p>

      <Definition title="Continuous Maps Preserve Compactness">
        <p>
          Let <InlineMath>{`f : X \\to Y`}</InlineMath> be a continuous map from one metric space{' '}
          <InlineMath>{`(X, d_X)`}</InlineMath> to another <InlineMath>{`(Y, d_Y)`}</InlineMath>.
          Let <InlineMath>{`K \\subseteq X`}</InlineMath> be any compact subset of{' '}
          <InlineMath>X</InlineMath>.
        </p>
        <p className="mt-2">
          Then the image <InlineMath>{`f(K) := \\{f(x) : x \\in K\\}`}</InlineMath> of{' '}
          <InlineMath>K</InlineMath> is also <strong>compact</strong>.
        </p>
      </Definition>

      <Callout type="success" title="Key Consequence">
        <p>
          This theorem has profound implications: continuous images of compact sets are compact.
          Combined with the Heine-Borel theorem, this tells us that continuous functions map
          closed and bounded subsets of <InlineMath>{`\\mathbf{R}^n`}</InlineMath> to closed and
          bounded subsets.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Maximum Principle</h3>

      <Definition title="Maximum Principle">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a <strong>compact</strong> metric space, and let{' '}
          <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> be a continuous function. Then:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is <strong>bounded</strong>.
          </li>
          <li>
            <InlineMath>f</InlineMath> attains its <strong>maximum</strong> at some point{' '}
            <InlineMath>{`x_{\\max} \\in X`}</InlineMath>, meaning{' '}
            <InlineMath>{`f(x_{\\max}) \\geq f(x)`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in X`}</InlineMath>.
          </li>
          <li>
            <InlineMath>f</InlineMath> attains its <strong>minimum</strong> at some point{' '}
            <InlineMath>{`x_{\\min} \\in X`}</InlineMath>, meaning{' '}
            <InlineMath>{`f(x_{\\min}) \\leq f(x)`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in X`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="warning" title="Compactness is Essential">
        <p>
          This principle can fail if <InlineMath>X</InlineMath> is not compact. For example,
          the function <InlineMath>{`f(x) = x`}</InlineMath> on the open interval{' '}
          <InlineMath>(0, 1)</InlineMath> does not attain its supremum (1) or its infimum (0).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Uniform Continuity</h3>

      <Definition title="Uniform Continuity">
        <p>
          Let <InlineMath>{`f : X \\to Y`}</InlineMath> be a map from one metric space{' '}
          <InlineMath>{`(X, d_X)`}</InlineMath> to another <InlineMath>{`(Y, d_Y)`}</InlineMath>.
        </p>
        <p className="mt-2">
          We say that <InlineMath>f</InlineMath> is <strong>uniformly continuous</strong> if,
          for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists a{' '}
          <InlineMath>{`\\delta > 0`}</InlineMath> such that{' '}
          <InlineMath>{`d_Y(f(x), f(x')) < \\varepsilon`}</InlineMath> whenever{' '}
          <InlineMath>{`x, x' \\in X`}</InlineMath> are such that{' '}
          <InlineMath>{`d_X(x, x') < \\delta`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Continuity vs. Uniform Continuity">
        <p>
          The key difference is: for ordinary continuity, the <InlineMath>{`\\delta`}</InlineMath>{' '}
          can depend on both <InlineMath>{`\\varepsilon`}</InlineMath> and the point{' '}
          <InlineMath>x_0</InlineMath>. For uniform continuity, the{' '}
          <InlineMath>{`\\delta`}</InlineMath> depends only on{' '}
          <InlineMath>{`\\varepsilon`}</InlineMath> and works for all points simultaneously.
        </p>
      </Callout>

      <Definition title="Uniform Continuity on Compact Sets">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> be
          metric spaces, and suppose that <InlineMath>{`(X, d_X)`}</InlineMath> is{' '}
          <strong>compact</strong>. If <InlineMath>{`f : X \\to Y`}</InlineMath> is a function,
          then:
        </p>
        <MathBlock>
          {`f \\text{ is continuous} \\iff f \\text{ is uniformly continuous}`}
        </MathBlock>
      </Definition>

      <Example title="Uniformly Continuous Functions">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Every uniformly continuous function is continuous.
          </li>
          <li>
            The function <InlineMath>{`f(x) = x^2`}</InlineMath> on{' '}
            <InlineMath>{`[0, 1]`}</InlineMath> is uniformly continuous (because{' '}
            <InlineMath>{`[0, 1]`}</InlineMath> is compact).
          </li>
          <li>
            The function <InlineMath>{`f(x) = x^2`}</InlineMath> on{' '}
            <InlineMath>{`\\mathbf{R}`}</InlineMath> is continuous but{' '}
            <strong>not</strong> uniformly continuous.
          </li>
          <li>
            The addition function <InlineMath>{`(x, y) \\mapsto x + y`}</InlineMath> is uniformly
            continuous on <InlineMath>{`\\mathbf{R}^2`}</InlineMath>.
          </li>
          <li>
            The multiplication function <InlineMath>{`(x, y) \\mapsto xy`}</InlineMath> is{' '}
            <strong>not</strong> uniformly continuous on <InlineMath>{`\\mathbf{R}^2`}</InlineMath>.
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Composition and Uniform Continuity
      </h3>

      <Definition title="Composition Preserves Uniform Continuity">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath>, <InlineMath>{`(Y, d_Y)`}</InlineMath>,{' '}
          <InlineMath>{`(Z, d_Z)`}</InlineMath> be metric spaces, and let{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath> and <InlineMath>{`g : Y \\to Z`}</InlineMath>{' '}
          be two uniformly continuous functions.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`g \\circ f : X \\to Z`}</InlineMath> is also{' '}
          <strong>uniformly continuous</strong>.
        </p>
      </Definition>

      <Definition title="Direct Sum and Uniform Continuity">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : X \\to \\mathbf{R}`}</InlineMath> be uniformly continuous functions.
        </p>
        <p className="mt-2">
          Then the direct sum{' '}
          <InlineMath>{`f \\oplus g : X \\to \\mathbf{R}^2`}</InlineMath> defined by{' '}
          <InlineMath>{`f \\oplus g(x) := (f(x), g(x))`}</InlineMath> is uniformly continuous.
        </p>
      </Definition>

      <Callout type="note" title="Arithmetic and Uniform Continuity">
        <p>
          If <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : X \\to \\mathbf{R}`}</InlineMath> are uniformly continuous on a metric
          space <InlineMath>(X, d)</InlineMath>, then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`f + g`}</InlineMath> and <InlineMath>{`f - g`}</InlineMath> are
            uniformly continuous.
          </li>
          <li>
            <InlineMath>{`fg`}</InlineMath> need <strong>not</strong> be uniformly continuous in
            general.
          </li>
          <li>
            <InlineMath>{`cf`}</InlineMath> for a constant <InlineMath>c</InlineMath> is
            uniformly continuous.
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
