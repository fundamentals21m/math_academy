import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Measurable Functions</h2>

      <p className="mb-4">
        Just as we can only integrate Riemann integrable functions with the Riemann integral, we
        will only integrate <strong>measurable functions</strong> with the Lebesgue integral.
        Fortunately, the class of measurable functions is much larger.
      </p>

      <Definition title="Measurable Function">
        <p>
          Let <InlineMath>{`\\Omega`}</InlineMath> be a measurable subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, and{' '}
          <InlineMath>{`f : \\Omega \\to \\mathbf{R}^m`}</InlineMath> be a function.
        </p>
        <p className="mt-2">
          <InlineMath>f</InlineMath> is <strong>measurable</strong> iff{' '}
          <InlineMath>{`f^{-1}(V)`}</InlineMath> is measurable for every open set{' '}
          <InlineMath>{`V \\subseteq \\mathbf{R}^m`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Continuous Functions are Measurable
      </h3>

      <Definition title="Continuous Functions">
        <p>
          Let <InlineMath>{`\\Omega`}</InlineMath> be a measurable subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, and{' '}
          <InlineMath>{`f : \\Omega \\to \\mathbf{R}^m`}</InlineMath> be continuous. Then{' '}
          <InlineMath>f</InlineMath> is measurable.
        </p>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          If <InlineMath>V</InlineMath> is open, then <InlineMath>{`f^{-1}(V)`}</InlineMath> is
          open relative to <InlineMath>{`\\Omega`}</InlineMath>, which means{' '}
          <InlineMath>{`f^{-1}(V) = W \\cap \\Omega`}</InlineMath> for some open set{' '}
          <InlineMath>W</InlineMath>. This is measurable.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Alternative Characterization
      </h3>

      <Definition title="Box Criterion">
        <p>
          <InlineMath>f</InlineMath> is measurable iff <InlineMath>{`f^{-1}(B)`}</InlineMath> is
          measurable for every open box <InlineMath>B</InlineMath>.
        </p>
      </Definition>

      <Definition title="Component-wise Measurability">
        <p>
          If <InlineMath>{`f = (f_1, \\ldots, f_m)`}</InlineMath> where{' '}
          <InlineMath>{`f_j : \\Omega \\to \\mathbf{R}`}</InlineMath>, then{' '}
          <InlineMath>f</InlineMath> is measurable iff all <InlineMath>{`f_j`}</InlineMath> are
          individually measurable.
        </p>
      </Definition>

      <Definition title="Half-Line Criterion">
        <p>
          For <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath>,{' '}
          <InlineMath>f</InlineMath> is measurable iff <InlineMath>{`f^{-1}((a, \\infty))`}</InlineMath>{' '}
          is measurable for every real number <InlineMath>a</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Closure Properties
      </h3>

      <Definition title="Composition with Continuous Functions">
        <p>
          If <InlineMath>{`f : \\Omega \\to W`}</InlineMath> is measurable (where{' '}
          <InlineMath>W</InlineMath> is open), and <InlineMath>{`g : W \\to \\mathbf{R}^p`}</InlineMath>{' '}
          is continuous, then <InlineMath>{`g \\circ f`}</InlineMath> is measurable.
        </p>
      </Definition>

      <Example title="Consequences">
        <p>
          If <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath> is measurable, then so are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`|f|`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\max(f, 0)`}</InlineMath> and <InlineMath>{`\\min(f, 0)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f + g`}</InlineMath>, <InlineMath>{`f - g`}</InlineMath>,{' '}
            <InlineMath>{`fg`}</InlineMath>, <InlineMath>{`f/g`}</InlineMath> (if{' '}
            <InlineMath>g</InlineMath> measurable)
          </li>
          <li>
            <InlineMath>{`\\max(f, g)`}</InlineMath> and <InlineMath>{`\\min(f, g)`}</InlineMath>
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Limits of Measurable Functions
      </h3>

      <Definition title="Limits are Measurable">
        <p>
          Let <InlineMath>{`f_n : \\Omega \\to \\mathbf{R}^*`}</InlineMath> be measurable for each{' '}
          <InlineMath>n</InlineMath>. Then the following are also measurable:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`\\sup_{n \\geq 1} f_n`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\inf_{n \\geq 1} f_n`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\limsup_{n \\to \\infty} f_n`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\liminf_{n \\to \\infty} f_n`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          In particular, if <InlineMath>{`f_n \\to f`}</InlineMath> pointwise, then{' '}
          <InlineMath>f</InlineMath> is measurable.
        </p>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          For <InlineMath>{`g = \\sup_n f_n`}</InlineMath>:
        </p>
        <MathBlock>{`g^{-1}((a, \\infty)) = \\bigcup_{n \\geq 1} f_n^{-1}((a, \\infty))`}</MathBlock>
        <p className="mt-2">The countable union of measurable sets is measurable.</p>
      </Callout>

      <Callout type="success" title="Summary">
        <p>
          Almost any function one deals with in mathematics is measurable. The only way to
          construct non-measurable functions is via artificial means like invoking the axiom of
          choice.
        </p>
      </Callout>
    </LessonLayout>
  );
}
