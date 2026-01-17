import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Double Derivatives and Clairaut's Theorem</h2>

      <p className="mb-4">
        We now investigate what happens when a function is differentiated twice.
      </p>

      <Definition title="Continuously Differentiable Functions">
        <p>
          Let <InlineMath>E</InlineMath> be an open subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath> and{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}^m`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is <strong>continuously differentiable</strong> (or{' '}
            <InlineMath>{`C^1`}</InlineMath>) if all partial derivatives{' '}
            <InlineMath>{`\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}`}</InlineMath>{' '}
            exist and are continuous on <InlineMath>E</InlineMath>.
          </li>
          <li>
            <InlineMath>f</InlineMath> is <strong>twice continuously differentiable</strong> (or{' '}
            <InlineMath>{`C^2`}</InlineMath>) if it is <InlineMath>{`C^1`}</InlineMath> and all
            the partial derivatives{' '}
            <InlineMath>{`\\frac{\\partial f}{\\partial x_j}`}</InlineMath> are themselves{' '}
            <InlineMath>{`C^1`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Example title="C2 Function Example">
        <p>
          Let <InlineMath>{`f : \\mathbf{R}^2 \\to \\mathbf{R}^2`}</InlineMath> be defined by{' '}
          <InlineMath>{`f(x, y) = (x^2 + xy, y^2)`}</InlineMath>.
        </p>
        <p className="mt-2">
          First partial derivatives:
        </p>
        <MathBlock>{`\\frac{\\partial f}{\\partial x}(x, y) = (2x + y, 0), \\quad \\frac{\\partial f}{\\partial y}(x, y) = (x, 2y)`}</MathBlock>
        <p className="mt-2">
          Second partial derivatives:
        </p>
        <MathBlock>{`\\frac{\\partial}{\\partial x}\\frac{\\partial f}{\\partial x} = (2, 0), \\quad \\frac{\\partial}{\\partial y}\\frac{\\partial f}{\\partial x} = (1, 0)`}</MathBlock>
        <MathBlock>{`\\frac{\\partial}{\\partial x}\\frac{\\partial f}{\\partial y} = (1, 0), \\quad \\frac{\\partial}{\\partial y}\\frac{\\partial f}{\\partial y} = (0, 2)`}</MathBlock>
        <p className="mt-2">
          Notice that{' '}
          <InlineMath>{`\\frac{\\partial}{\\partial y}\\frac{\\partial f}{\\partial x} = \\frac{\\partial}{\\partial x}\\frac{\\partial f}{\\partial y}`}</InlineMath>
          .
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Clairaut's Theorem</h3>

      <Definition title="Clairaut's Theorem">
        <p>
          Let <InlineMath>E</InlineMath> be an open subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, and let{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath> be twice continuously differentiable
          on <InlineMath>E</InlineMath>. Then for all{' '}
          <InlineMath>{`1 \\leq i, j \\leq n`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{\\partial}{\\partial x_j} \\frac{\\partial f}{\\partial x_i}(x_0) = \\frac{\\partial}{\\partial x_i} \\frac{\\partial f}{\\partial x_j}(x_0)`}</MathBlock>
        <p className="mt-2">
          In other words, <strong>mixed partial derivatives commute</strong> when they are
          continuous.
        </p>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          The proof uses the auxiliary quantity:
        </p>
        <MathBlock>{`X := f(\\delta e_i + \\delta e_j) - f(\\delta e_i) - f(\\delta e_j) - f(0)`}</MathBlock>
        <p className="mt-2">
          This can be computed by integrating in either order (first{' '}
          <InlineMath>{`x_i`}</InlineMath> then <InlineMath>{`x_j`}</InlineMath>, or vice versa),
          and the mean value theorem shows both orders give approximately{' '}
          <InlineMath>{`\\delta^2`}</InlineMath> times the respective mixed partial derivative.
        </p>
      </Callout>

      <Example title="Common Notation">
        <p>
          Clairaut's theorem is often written as:
        </p>
        <MathBlock>{`f_{xy} = f_{yx}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`f_{xy} := \\frac{\\partial^2 f}{\\partial y \\partial x}`}</InlineMath>{' '}
          means "differentiate first with respect to <InlineMath>x</InlineMath>, then with
          respect to <InlineMath>y</InlineMath>."
        </p>
      </Example>

      <Callout type="warning" title="Continuity is Essential">
        <p>
          Clairaut's theorem <strong>fails</strong> if we do not assume the second derivatives
          are continuous. There exist functions where the mixed partial derivatives exist but
          are not equal at certain points.
        </p>
        <p className="mt-2">
          Counterexample: <InlineMath>{`f(x, y) = \\frac{xy^3}{x^2 + y^2}`}</InlineMath> for{' '}
          <InlineMath>{`(x, y) \\neq (0, 0)`}</InlineMath> and{' '}
          <InlineMath>{`f(0, 0) = 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="success" title="Higher Order Derivatives">
        <p>
          For <InlineMath>{`C^k`}</InlineMath> functions (k times continuously differentiable),
          all mixed partial derivatives of order up to <InlineMath>k</InlineMath> are
          independent of the order of differentiation.
        </p>
      </Callout>
    </LessonLayout>
  );
}
