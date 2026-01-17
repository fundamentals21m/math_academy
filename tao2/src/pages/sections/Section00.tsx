import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { MetricBallsVisualizer } from '@/components/visualizations';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Definitions and Examples</h2>

      <p className="mb-4">
        In Definition 6.1.5 we defined what it meant for a sequence{' '}
        <InlineMath>{`(x_n)_{n=m}^{\\infty}`}</InlineMath> of real numbers to converge to another
        real number <InlineMath>x</InlineMath>. This meant that for every{' '}
        <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists an{' '}
        <InlineMath>{`N \\geq m`}</InlineMath> such that{' '}
        <InlineMath>{`|x - x_n| \\leq \\varepsilon`}</InlineMath> for all{' '}
        <InlineMath>{`n \\geq N`}</InlineMath>.
      </p>

      <p className="mb-4">
        One way to phrase this more precisely is to introduce the <strong>distance function</strong>{' '}
        <InlineMath>{`d(x, y)`}</InlineMath> between two real numbers by{' '}
        <InlineMath>{`d(x, y) := |x - y|`}</InlineMath>. Then a sequence converges to{' '}
        <InlineMath>x</InlineMath> if and only if{' '}
        <InlineMath>{`\\lim_{n \\to \\infty} d(x_n, x) = 0`}</InlineMath>.
      </p>

      <Callout type="info" title="Generalizing Convergence">
        <p>
          We would like to generalize this notion of convergence, so that we can take limits
          not just of sequences of real numbers, but also sequences of complex numbers, vectors,
          matrices, functions, or even sequences of sequences. The key is to work{' '}
          <em>abstractly</em>, defining a general class of spaces called <strong>metric spaces</strong>.
        </p>
      </Callout>

      <Definition title="Metric Space">
        <p>
          A <strong>metric space</strong> <InlineMath>(X, d)</InlineMath> is a set{' '}
          <InlineMath>X</InlineMath> of objects (called <em>points</em>), together with a{' '}
          <strong>distance function</strong> or <strong>metric</strong>{' '}
          <InlineMath>{`d: X \\times X \\to [0, +\\infty)`}</InlineMath>, which associates to
          each pair <InlineMath>x, y</InlineMath> of points a non-negative real number{' '}
          <InlineMath>{`d(x, y) \\geq 0`}</InlineMath>. The metric must satisfy four axioms:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong>(Reflexivity)</strong> For any <InlineMath>{`x \\in X`}</InlineMath>, we have{' '}
            <InlineMath>{`d(x, x) = 0`}</InlineMath>
          </li>
          <li>
            <strong>(Positivity)</strong> For any distinct <InlineMath>{`x, y \\in X`}</InlineMath>,
            we have <InlineMath>{`d(x, y) > 0`}</InlineMath>
          </li>
          <li>
            <strong>(Symmetry)</strong> For any <InlineMath>{`x, y \\in X`}</InlineMath>, we have{' '}
            <InlineMath>{`d(x, y) = d(y, x)`}</InlineMath>
          </li>
          <li>
            <strong>(Triangle inequality)</strong> For any <InlineMath>{`x, y, z \\in X`}</InlineMath>,
            we have <InlineMath>{`d(x, z) \\leq d(x, y) + d(y, z)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Examples of Metric Spaces</h3>

      <Example title="The Real Line">
        <p>
          Let <InlineMath>{`\\mathbf{R}`}</InlineMath> be the real numbers with metric{' '}
          <InlineMath>{`d(x, y) := |x - y|`}</InlineMath>. This is called the{' '}
          <strong>standard metric</strong> on <InlineMath>{`\\mathbf{R}`}</InlineMath>.
        </p>
      </Example>

      <Example title="Euclidean Spaces">
        <p>
          For <InlineMath>{`n \\geq 1`}</InlineMath>, the <strong>Euclidean metric</strong>{' '}
          (also called the <InlineMath>{`l^2`}</InlineMath> metric) on{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath> is defined by:
        </p>
        <MathBlock>
          {`d_{l^2}((x_1, \\ldots, x_n), (y_1, \\ldots, y_n)) := \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}`}
        </MathBlock>
        <p className="mt-2">
          This corresponds to the geometric distance between two points as given by
          Pythagoras' theorem.
        </p>
      </Example>

      <Example title="Taxicab Metric">
        <p>
          The <strong>taxicab metric</strong> (or <InlineMath>{`l^1`}</InlineMath> metric) on{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath> is defined by:
        </p>
        <MathBlock>
          {`d_{l^1}((x_1, \\ldots, x_n), (y_1, \\ldots, y_n)) := \\sum_{i=1}^{n}|x_i - y_i|`}
        </MathBlock>
        <p className="mt-2">
          This models the distance a taxi-cab would traverse if only allowed to move in
          cardinal directions (north, south, east, west) and not diagonally.
        </p>
      </Example>

      <Example title="Sup Norm Metric">
        <p>
          The <strong>sup norm metric</strong> (or <InlineMath>{`l^{\\infty}`}</InlineMath> metric)
          on <InlineMath>{`\\mathbf{R}^n`}</InlineMath> is defined by:
        </p>
        <MathBlock>
          {`d_{l^{\\infty}}((x_1, \\ldots, x_n), (y_1, \\ldots, y_n)) := \\sup\\{|x_i - y_i| : 1 \\leq i \\leq n\\}`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Visualizing Different Metrics</h3>

      <MetricBallsVisualizer />

      <Example title="Discrete Metric">
        <p>
          Let <InlineMath>X</InlineMath> be any set. The <strong>discrete metric</strong>{' '}
          <InlineMath>{`d_{\\text{disc}}`}</InlineMath> is defined by:
        </p>
        <MathBlock>
          {`d_{\\text{disc}}(x, y) := \\begin{cases} 0 & \\text{if } x = y \\\\ 1 & \\text{if } x \\neq y \\end{cases}`}
        </MathBlock>
        <p className="mt-2">
          In this metric, all distinct points are equally far apart. Every set has at least
          one metric on it via the discrete metric.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Metric Equivalence</h3>

      <p className="mb-4">
        Different metrics can give the same notion of convergence. The{' '}
        <InlineMath>{`l^1`}</InlineMath>, <InlineMath>{`l^2`}</InlineMath>, and{' '}
        <InlineMath>{`l^{\\infty}`}</InlineMath> metrics on{' '}
        <InlineMath>{`\\mathbf{R}^n`}</InlineMath> are related by:
      </p>

      <MathBlock>
        {`d_{l^2}(x, y) \\leq d_{l^1}(x, y) \\leq \\sqrt{n} \\, d_{l^2}(x, y)`}
      </MathBlock>

      <MathBlock>
        {`\\frac{1}{\\sqrt{n}} d_{l^2}(x, y) \\leq d_{l^{\\infty}}(x, y) \\leq d_{l^2}(x, y)`}
      </MathBlock>

      <Definition title="Convergence in Metric Spaces">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space and let{' '}
          <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> be a sequence of points in{' '}
          <InlineMath>X</InlineMath>. We say that{' '}
          <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath>{' '}
          <strong>converges to</strong> <InlineMath>x</InlineMath> with respect to metric{' '}
          <InlineMath>d</InlineMath> if:
        </p>
        <MathBlock>
          {`\\lim_{n \\to \\infty} d(x^{(n)}, x) = 0`}
        </MathBlock>
        <p className="mt-2">
          Equivalently, for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists{' '}
          <InlineMath>{`N \\geq m`}</InlineMath> such that{' '}
          <InlineMath>{`d(x^{(n)}, x) \\leq \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`n \\geq N`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Metric-Dependent Convergence">
        <p>
          The convergence of a sequence can depend on what metric one uses. For example,
          the sequence <InlineMath>{`(1/n, 1/n)`}</InlineMath> in{' '}
          <InlineMath>{`\\mathbf{R}^2`}</InlineMath> converges to{' '}
          <InlineMath>(0, 0)</InlineMath> in the Euclidean metric, but does{' '}
          <strong>not</strong> converge to <InlineMath>(0, 0)</InlineMath> in the discrete
          metric, since <InlineMath>{`d_{\\text{disc}}((1/n, 1/n), (0, 0)) = 1`}</InlineMath>{' '}
          for all <InlineMath>{`n \\geq 1`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Uniqueness of Limits</h3>

      <p className="mb-4">
        An important property of metric spaces is that limits are unique:
      </p>

      <Definition title="Uniqueness of Limits">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space and let{' '}
          <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath> be a sequence in{' '}
          <InlineMath>X</InlineMath>. If the sequence converges to both{' '}
          <InlineMath>x</InlineMath> and <InlineMath>{`x'`}</InlineMath> with respect to{' '}
          <InlineMath>d</InlineMath>, then <InlineMath>{`x = x'`}</InlineMath>.
        </p>
      </Definition>

      <p className="mt-4">
        Because of this uniqueness, if <InlineMath>{`(x^{(n)})_{n=m}^{\\infty}`}</InlineMath>{' '}
        converges to <InlineMath>x</InlineMath> in the metric <InlineMath>d</InlineMath>, we
        write <InlineMath>{`\\lim_{n \\to \\infty} x^{(n)} = x`}</InlineMath>.
      </p>
    </LessonLayout>
  );
}
