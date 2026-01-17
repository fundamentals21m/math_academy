import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Inner Products on Periodic Functions</h2>

      <p className="mb-4">
        To develop the theory of Fourier series, we need to introduce the concept of an{' '}
        <strong>inner product</strong> on the space of continuous periodic functions. This is
        analogous to the dot product on Euclidean spaces.
      </p>

      <Definition title="Inner Product">
        <p>
          If <InlineMath>{`f, g \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, we
          define the <strong>inner product</strong> <InlineMath>{`\\langle f, g \\rangle`}</InlineMath>{' '}
          to be:
        </p>
        <MathBlock>{`\\langle f, g \\rangle = \\int_{[0,1]} f(x) \\overline{g(x)} \\, dx`}</MathBlock>
      </Definition>

      <Callout type="note" title="Complex Integration">
        <p>
          To integrate a complex-valued function <InlineMath>{`f(x) = g(x) + ih(x)`}</InlineMath>,
          we use:
        </p>
        <MathBlock>{`\\int_{[a,b]} f = \\int_{[a,b]} g + i \\int_{[a,b]} h`}</MathBlock>
        <p className="mt-2">
          All the standard rules of calculus (integration by parts, fundamental theorem of
          calculus, substitution) still hold for complex-valued functions.
        </p>
      </Callout>

      <Example title="Computing an Inner Product">
        <p>
          Let <InlineMath>{`f(x) := 1`}</InlineMath> and <InlineMath>{`g(x) := e^{2\\pi ix}`}</InlineMath>.
          Then:
        </p>
        <MathBlock>{`\\langle f, g \\rangle = \\int_{[0,1]} 1 \\cdot \\overline{e^{2\\pi ix}} \\, dx = \\int_{[0,1]} e^{-2\\pi ix} \\, dx = \\frac{e^{-2\\pi i} - e^0}{-2\\pi i} = \\frac{1 - 1}{-2\\pi i} = 0`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of the Inner Product</h3>

      <Definition title="Inner Product Properties">
        <p>
          Let <InlineMath>{`f, g, h \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Hermitian property:</strong>{' '}
            <InlineMath>{`\\langle g, f \\rangle = \\overline{\\langle f, g \\rangle}`}</InlineMath>
          </li>
          <li>
            <strong>Positivity:</strong>{' '}
            <InlineMath>{`\\langle f, f \\rangle \\geq 0`}</InlineMath>, with equality iff{' '}
            <InlineMath>{`f = 0`}</InlineMath>
          </li>
          <li>
            <strong>Linearity in first variable:</strong>{' '}
            <InlineMath>{`\\langle f + g, h \\rangle = \\langle f, h \\rangle + \\langle g, h \\rangle`}</InlineMath>{' '}
            and <InlineMath>{`\\langle cf, g \\rangle = c\\langle f, g \\rangle`}</InlineMath>
          </li>
          <li>
            <strong>Antilinearity in second variable:</strong>{' '}
            <InlineMath>{`\\langle f, g + h \\rangle = \\langle f, g \\rangle + \\langle f, h \\rangle`}</InlineMath>{' '}
            and <InlineMath>{`\\langle f, cg \\rangle = \\bar{c}\\langle f, g \\rangle`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The L2 Norm</h3>

      <Definition title="L2 Norm">
        <p>
          From the positivity property, we define the <strong>L2 norm</strong>{' '}
          <InlineMath>{`\\|f\\|_2`}</InlineMath> of a function{' '}
          <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> by:
        </p>
        <MathBlock>{`\\|f\\|_2 := \\sqrt{\\langle f, f \\rangle} = \\left( \\int_{[0,1]} |f(x)|^2 \\, dx \\right)^{1/2}`}</MathBlock>
        <p className="mt-2">
          The norm <InlineMath>{`\\|f\\|_2`}</InlineMath> is sometimes called the{' '}
          <strong>root mean square</strong> of <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Example title="Computing the L2 Norm">
        <p>
          If <InlineMath>{`f(x) = e^{2\\pi ix}`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\|f\\|_2 = \\left( \\int_{[0,1]} e^{2\\pi ix} e^{-2\\pi ix} \\, dx \\right)^{1/2} = \\left( \\int_{[0,1]} 1 \\, dx \\right)^{1/2} = 1`}</MathBlock>
      </Example>

      <Definition title="Properties of the L2 Norm">
        <p>
          Let <InlineMath>{`f, g \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Non-degeneracy:</strong>{' '}
            <InlineMath>{`\\|f\\|_2 = 0`}</InlineMath> iff <InlineMath>{`f = 0`}</InlineMath>
          </li>
          <li>
            <strong>Cauchy-Schwarz inequality:</strong>{' '}
            <InlineMath>{`|\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2`}</InlineMath>
          </li>
          <li>
            <strong>Triangle inequality:</strong>{' '}
            <InlineMath>{`\\|f + g\\|_2 \\leq \\|f\\|_2 + \\|g\\|_2`}</InlineMath>
          </li>
          <li>
            <strong>Pythagoras' theorem:</strong> If{' '}
            <InlineMath>{`\\langle f, g \\rangle = 0`}</InlineMath>, then{' '}
            <InlineMath>{`\\|f + g\\|_2^2 = \\|f\\|_2^2 + \\|g\\|_2^2`}</InlineMath>
          </li>
          <li>
            <strong>Homogeneity:</strong>{' '}
            <InlineMath>{`\\|cf\\|_2 = |c| \\|f\\|_2`}</InlineMath> for all{' '}
            <InlineMath>{`c \\in \\mathbf{C}`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="success" title="Orthogonality">
        <p>
          In light of Pythagoras' theorem, we say that <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath> are <strong>orthogonal</strong> iff{' '}
          <InlineMath>{`\\langle f, g \\rangle = 0`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The L2 Metric</h3>

      <Definition title="L2 Metric">
        <p>
          We define the <strong>L2 metric</strong> on{' '}
          <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> by:
        </p>
        <MathBlock>{`d_{L^2}(f, g) := \\|f - g\\|_2 = \\left( \\int_{[0,1]} |f(x) - g(x)|^2 \\, dx \\right)^{1/2}`}</MathBlock>
      </Definition>

      <Callout type="warning" title="L2 vs L-infinity">
        <p>
          The notion of convergence in <InlineMath>{`L^2`}</InlineMath> metric is different from
          uniform or pointwise convergence. In general, we have{' '}
          <InlineMath>{`0 \\leq \\|f\\|_2 \\leq \\|f\\|_{\\infty}`}</InlineMath>, but the{' '}
          <InlineMath>{`L^2`}</InlineMath> metric is not as well-behaved: the space{' '}
          <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> is not complete
          in the <InlineMath>{`L^2`}</InlineMath> metric, despite being complete in the{' '}
          <InlineMath>{`L^{\\infty}`}</InlineMath> metric.
        </p>
      </Callout>
    </LessonLayout>
  );
}
