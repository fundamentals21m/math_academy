import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { RiemannLebesgueVisualizer } from '@/components/visualizations';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Simple Functions</h2>

      <p className="mb-4">
        To define the Lebesgue integral, we begin with <strong>simple functions</strong> -
        measurable functions with finite range. We then extend to more general functions.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Riemann vs Lebesgue Integration</h3>

      <RiemannLebesgueVisualizer />

      <Definition title="Simple Function">
        <p>
          Let <InlineMath>{`\\Omega`}</InlineMath> be a measurable subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>. A function{' '}
          <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath> is a{' '}
          <strong>simple function</strong> if it is measurable and the image{' '}
          <InlineMath>{`f(\\Omega)`}</InlineMath> is finite.
        </p>
      </Definition>

      <Example title="Characteristic Function">
        <p>
          For any measurable set <InlineMath>E</InlineMath>, define{' '}
          <InlineMath>{`\\chi_E : \\Omega \\to \\mathbf{R}`}</InlineMath> by{' '}
          <InlineMath>{`\\chi_E(x) := 1`}</InlineMath> if <InlineMath>{`x \\in E`}</InlineMath>,
          and <InlineMath>{`\\chi_E(x) := 0`}</InlineMath> otherwise.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`\\chi_E`}</InlineMath> is measurable and simple (image is{' '}
          <InlineMath>{`\\{0, 1\\}`}</InlineMath>).
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Simple Functions
      </h3>

      <Definition title="Vector Space Property">
        <p>
          If <InlineMath>{`f, g : \\Omega \\to \\mathbf{R}`}</InlineMath> are simple functions,
          then <InlineMath>{`f + g`}</InlineMath> is also simple. For any scalar{' '}
          <InlineMath>{`c \\in \\mathbf{R}`}</InlineMath>, <InlineMath>{`cf`}</InlineMath> is
          also simple.
        </p>
      </Definition>

      <Definition title="Representation by Characteristic Functions">
        <p>
          Every simple function <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath> can
          be written as:
        </p>
        <MathBlock>{`f = \\sum_{i=1}^{N} c_i \\chi_{E_i}`}</MathBlock>
        <p className="mt-2">
          for some real numbers <InlineMath>{`c_1, \\ldots, c_N`}</InlineMath> and disjoint
          measurable sets <InlineMath>{`E_1, \\ldots, E_N`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Approximation by Simple Functions">
        <p>
          Let <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath> be a non-negative
          measurable function. Then there exists an increasing sequence of simple functions{' '}
          <InlineMath>{`f_n`}</InlineMath>:
        </p>
        <MathBlock>{`0 \\leq f_1(x) \\leq f_2(x) \\leq f_3(x) \\leq \\ldots`}</MathBlock>
        <p className="mt-2">
          converging pointwise to <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Lebesgue Integral of Simple Functions
      </h3>

      <Definition title="Lebesgue Integral (Simple Functions)">
        <p>
          For a non-negative simple function <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath>,
          define:
        </p>
        <MathBlock>{`\\int_\\Omega f := \\sum_{\\lambda \\in f(\\Omega); \\lambda > 0} \\lambda \\cdot m(\\{x \\in \\Omega : f(x) = \\lambda\\})`}</MathBlock>
      </Definition>

      <Example title="Computing Simple Integrals">
        <p>
          Let <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> equal 3 on{' '}
          <InlineMath>{`[1, 2]`}</InlineMath>, equal 4 on <InlineMath>{`(2, 4)`}</InlineMath>,
          and 0 elsewhere. Then:
        </p>
        <MathBlock>{`\\int_\\Omega f = 3 \\times m([1,2]) + 4 \\times m((2,4)) = 3 \\times 1 + 4 \\times 2 = 11`}</MathBlock>
      </Example>

      <Definition title="Alternative Formula">
        <p>
          If <InlineMath>{`f = \\sum_{j=1}^{N} c_j \\chi_{E_j}`}</InlineMath> with disjoint{' '}
          <InlineMath>{`E_j`}</InlineMath> and non-negative <InlineMath>{`c_j`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\int_\\Omega f = \\sum_{j=1}^{N} c_j m(E_j)`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of the Integral
      </h3>

      <Definition title="Basic Properties">
        <p>
          For non-negative simple functions <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`0 \\leq \\int_\\Omega f \\leq \\infty`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\int_\\Omega f = 0`}</InlineMath> iff{' '}
            <InlineMath>f</InlineMath> is zero almost everywhere
          </li>
          <li>
            <InlineMath>{`\\int_\\Omega (f + g) = \\int_\\Omega f + \\int_\\Omega g`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\int_\\Omega cf = c \\int_\\Omega f`}</InlineMath> for{' '}
            <InlineMath>{`c > 0`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`f \\leq g`}</InlineMath>, then{' '}
            <InlineMath>{`\\int_\\Omega f \\leq \\int_\\Omega g`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Almost Everywhere">
        <p>
          A property <InlineMath>P(x)</InlineMath> holds <strong>almost everywhere</strong> if
          it holds for all <InlineMath>x</InlineMath> except possibly on a set of measure zero.
        </p>
      </Callout>

      <Callout type="success" title="Foundation for Lebesgue Integration">
        <p>
          Simple functions provide the foundation for the Lebesgue integral. Every measurable
          function can be approximated by simple functions, allowing us to extend integration
          to the full class of measurable functions.
        </p>
      </Callout>
    </LessonLayout>
  );
}
