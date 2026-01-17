import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Inverse Function Theorem</h2>

      <p className="mb-4">
        In single-variable calculus, the inverse function theorem states that if{' '}
        <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is invertible,
        differentiable, and <InlineMath>{`f'(x_0) \\neq 0`}</InlineMath>, then{' '}
        <InlineMath>{`f^{-1}`}</InlineMath> is differentiable at{' '}
        <InlineMath>{`f(x_0)`}</InlineMath> with:
      </p>
      <MathBlock>{`(f^{-1})'(f(x_0)) = \\frac{1}{f'(x_0)}`}</MathBlock>

      <p className="mb-4">
        We now generalize this to functions{' '}
        <InlineMath>{`f : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath>.
      </p>

      <Definition title="Invertibility of Linear Transformations">
        <p>
          Let <InlineMath>{`T : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath> be a linear
          transformation which is also invertible. Then the inverse transformation{' '}
          <InlineMath>{`T^{-1} : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath> is also linear.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Inverse Function Theorem
      </h3>

      <Definition title="Inverse Function Theorem">
        <p>
          Let <InlineMath>E</InlineMath> be an open subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, and let{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^n`}</InlineMath> be continuously differentiable.
          Suppose <InlineMath>{`x_0 \\in E`}</InlineMath> is such that{' '}
          <InlineMath>{`f'(x_0) : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath> is{' '}
          <strong>invertible</strong>.
        </p>
        <p className="mt-2">Then there exist:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            An open set <InlineMath>U</InlineMath> in <InlineMath>E</InlineMath> containing{' '}
            <InlineMath>{`x_0`}</InlineMath>
          </li>
          <li>
            An open set <InlineMath>V</InlineMath> in <InlineMath>{`\\mathbf{R}^n`}</InlineMath>{' '}
            containing <InlineMath>{`f(x_0)`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          such that <InlineMath>f</InlineMath> is a <strong>bijection</strong> from{' '}
          <InlineMath>U</InlineMath> to <InlineMath>V</InlineMath>. Furthermore,{' '}
          <InlineMath>{`f^{-1} : V \\to U`}</InlineMath> is differentiable at{' '}
          <InlineMath>{`f(x_0)`}</InlineMath>, and:
        </p>
        <MathBlock>{`(f^{-1})'(f(x_0)) = (f'(x_0))^{-1}`}</MathBlock>
      </Definition>

      <Callout type="info" title="Local Invertibility">
        <p>
          The theorem says <InlineMath>f</InlineMath> is <strong>locally invertible</strong> near{' '}
          <InlineMath>{`x_0`}</InlineMath>. Even if <InlineMath>f</InlineMath> is not globally
          invertible, restricting domain and range sufficiently makes it a bijection.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Proof Outline</h3>

      <Callout type="info" title="Deriving the Derivative Formula">
        <p>
          From <InlineMath>{`f^{-1} \\circ f = I`}</InlineMath> on <InlineMath>U</InlineMath>,
          differentiate at <InlineMath>{`x_0`}</InlineMath> using the chain rule:
        </p>
        <MathBlock>{`I = (f^{-1})'(f(x_0)) \\cdot f'(x_0)`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`(f^{-1})'(f(x_0)) = (f'(x_0))^{-1}`}</InlineMath>.
        </p>
      </Callout>

      <Example title="Proof Strategy">
        <p>The proof proceeds by reduction to simpler cases:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            Reduce to <InlineMath>{`f(x_0) = 0`}</InlineMath> by replacing{' '}
            <InlineMath>f</InlineMath> with <InlineMath>{`\\tilde{f}(x) = f(x) - f(x_0)`}</InlineMath>
            .
          </li>
          <li>
            Reduce to <InlineMath>{`x_0 = 0`}</InlineMath> by replacing <InlineMath>f</InlineMath>{' '}
            with <InlineMath>{`\\tilde{f}(x) = f(x + x_0)`}</InlineMath>.
          </li>
          <li>
            Reduce to <InlineMath>{`f'(0) = I`}</InlineMath> by replacing <InlineMath>f</InlineMath>{' '}
            with <InlineMath>{`\\tilde{f}(x) = f'(0)^{-1}f(x)`}</InlineMath>.
          </li>
        </ol>
        <p className="mt-2">
          In the special case, write <InlineMath>{`f(x) = x + g(x)`}</InlineMath> where{' '}
          <InlineMath>{`g(0) = 0`}</InlineMath> and <InlineMath>{`g'(0) = 0`}</InlineMath>. Then
          apply the perturbation lemma from the contraction mapping theorem.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Checking Invertibility
      </h3>

      <Callout type="success" title="Invertibility Criterion">
        <p>
          The linear transformation <InlineMath>{`f'(x_0)`}</InlineMath> is invertible if and only
          if the matrix <InlineMath>{`Df(x_0)`}</InlineMath> is invertible. This can be checked
          using:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Determinant:</strong> <InlineMath>{`\\det(Df(x_0)) \\neq 0`}</InlineMath>
          </li>
          <li>
            <strong>Gaussian elimination:</strong> The matrix has full rank
          </li>
        </ul>
      </Callout>

      <Callout type="warning" title="When the Derivative is Not Invertible">
        <p>
          If <InlineMath>{`f'(x_0)`}</InlineMath> is not invertible, then{' '}
          <InlineMath>{`f^{-1}`}</InlineMath> cannot exist and be differentiable at{' '}
          <InlineMath>{`f(x_0)`}</InlineMath>. However, <InlineMath>f</InlineMath> may still be
          invertible (e.g., <InlineMath>{`f(x) = x^3`}</InlineMath> at <InlineMath>x = 0</InlineMath>
          ).
        </p>
      </Callout>

      <Example title="Open Mapping Property">
        <p>
          If <InlineMath>{`f : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath> is continuously
          differentiable with <InlineMath>{`f'(x)`}</InlineMath> invertible for all{' '}
          <InlineMath>x</InlineMath>, then <InlineMath>f</InlineMath> maps open sets to open sets.
        </p>
      </Example>
    </LessonLayout>
  );
}
