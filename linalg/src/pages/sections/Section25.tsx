import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      {/* Introduction */}
      <p>
        Eigenvalues reveal the behavior of <strong>differential equations</strong>. The solution to
        <InlineMath>{`\\mathbf{u}' = A\\mathbf{u}`}</InlineMath> involves <InlineMath>{`e^{\\lambda t}`}</InlineMath>, and <InlineMath>\lambda</InlineMath>
        determines stability.
      </p>

      <h2>Systems of Differential Equations</h2>

      <Definition title="First-Order System" className="my-6">
        <p>
          A system of first-order linear differential equations:
        </p>
        <MathBlock>
          {`\\frac{d\\mathbf{u}}{dt} = A\\mathbf{u}`}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>A</InlineMath> were a number, the solution would be <InlineMath>{`u = e^{at}u_0`}</InlineMath>.
          For matrices, we use eigenvalues!
        </p>
      </Definition>

      <h2>The Solution Using Eigenvalues</h2>

      <Theorem
        title="Solution to u' = Au"
        className="my-6"
        proof={
          <>
            <p>We verify <InlineMath>{`\\mathbf{u}(t) = e^{\\lambda t}\\mathbf{x}`}</InlineMath> satisfies <InlineMath>{`\\mathbf{u}' = A\\mathbf{u}`}</InlineMath>:</p>
            <p className="mt-2"><strong>Left side:</strong> <InlineMath>{`\\frac{d}{dt}(e^{\\lambda t}\\mathbf{x}) = \\lambda e^{\\lambda t}\\mathbf{x}`}</InlineMath></p>
            <p className="mt-2"><strong>Right side:</strong> <InlineMath>{`A(e^{\\lambda t}\\mathbf{x}) = e^{\\lambda t}(A\\mathbf{x}) = e^{\\lambda t}(\\lambda\\mathbf{x}) = \\lambda e^{\\lambda t}\\mathbf{x}`}</InlineMath></p>
            <p className="mt-2">The sides are equal, confirming <InlineMath>{`e^{\\lambda t}\\mathbf{x}`}</InlineMath> is a solution. With <InlineMath>n</InlineMath> independent eigenvectors, the general solution is a linear combination.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathbf{x}`}</InlineMath> is an eigenvector with eigenvalue <InlineMath>\lambda</InlineMath>,
          then <InlineMath>{`\\mathbf{u}(t) = e^{\\lambda t}\\mathbf{x}`}</InlineMath> is a solution.
        </p>
        <MathBlock>
          {`\\frac{d}{dt}(e^{\\lambda t}\\mathbf{x}) = \\lambda e^{\\lambda t}\\mathbf{x} = A(e^{\\lambda t}\\mathbf{x}) \\quad \\checkmark`}
        </MathBlock>
        <p className="mt-2">
          The general solution is a combination of these eigensolutions.
        </p>
      </Theorem>

      <Example title="A 2×2 System" className="my-6">
        <MathBlock>
          {`\\frac{d\\mathbf{u}}{dt} = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}\\mathbf{u}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <InlineMath>\lambda_1 = 2</InlineMath>, <InlineMath>\lambda_2 = -1</InlineMath><br />
          Eigenvectors: <InlineMath>{`\\mathbf{x}_1 = (5, 2)`}</InlineMath>, <InlineMath>{`\\mathbf{x}_2 = (1, 1)`}</InlineMath>
        </p>
        <MathBlock>
          {`\\mathbf{u}(t) = c_1 e^{2t}\\begin{bmatrix} 5 \\\\ 2 \\end{bmatrix} + c_2 e^{-t}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Stability</h2>

      <Theorem
        title="Stability Conditions"
        className="my-6"
        proof={
          <>
            <p>The general solution is <InlineMath>{`\\mathbf{u}(t) = c_1 e^{\\lambda_1 t}\\mathbf{x}_1 + \\cdots + c_n e^{\\lambda_n t}\\mathbf{x}_n`}</InlineMath>.</p>
            <p className="mt-2">For complex eigenvalue <InlineMath>\lambda = a + bi</InlineMath>:</p>
            <MathBlock>{`|e^{\\lambda t}| = |e^{(a+bi)t}| = e^{at}`}</MathBlock>
            <p className="mt-2">• If <InlineMath>{`a = \\text{Re}(\\lambda) < 0`}</InlineMath>, then <InlineMath>{`e^{at} \\to 0`}</InlineMath> as <InlineMath>{`t \\to \\infty`}</InlineMath>.</p>
            <p className="mt-2">• If any <InlineMath>{`\\text{Re}(\\lambda) > 0`}</InlineMath>, that term grows exponentially, giving <InlineMath>{`\\mathbf{u} \\to \\infty`}</InlineMath>.</p>
            <p className="mt-2">• If all <InlineMath>{`\\text{Re}(\\lambda) \\leq 0`}</InlineMath>, solutions stay bounded (oscillate or decay).</p>
          </>
        }
      >
        <p>For the system <InlineMath>{`\\mathbf{u}' = A\\mathbf{u}`}</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>Stable</strong> (<InlineMath>{`\\mathbf{u} \\to \\mathbf{0}`}</InlineMath>): all <InlineMath>{`\\text{Re}(\\lambda) &lt; 0`}</InlineMath></li>
          <li><strong>Unstable</strong> (<InlineMath>{`\\mathbf{u} \\to \\infty`}</InlineMath>): any <InlineMath>{`\\text{Re}(\\lambda) &gt; 0`}</InlineMath></li>
          <li><strong>Neutrally stable</strong>: all <InlineMath>{`\\text{Re}(\\lambda) \\leq 0`}</InlineMath> with no repeated <InlineMath>\lambda</InlineMath> on the boundary</li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Why Eigenvalues Determine Stability</p>
        <p className="text-dark-300 text-sm">
          <InlineMath>{`e^{\\lambda t}`}</InlineMath> grows if <InlineMath>{`\\text{Re}(\\lambda) &gt; 0`}</InlineMath><br />
          <InlineMath>{`e^{\\lambda t}`}</InlineMath> decays if <InlineMath>{`\\text{Re}(\\lambda) &lt; 0`}</InlineMath><br />
          <InlineMath>{`e^{\\lambda t}`}</InlineMath> oscillates if <InlineMath>\lambda</InlineMath> is purely imaginary
        </p>
      </div>

      <h2>The Matrix Exponential</h2>

      <Definition title="Matrix Exponential" className="my-6">
        <p>
          The <strong>matrix exponential</strong> is defined by the series:
        </p>
        <MathBlock>
          {`e^{At} = I + At + \\frac{(At)^2}{2!} + \\frac{(At)^3}{3!} + \\cdots`}
        </MathBlock>
        <p className="mt-2">
          The solution to <InlineMath>{`\\mathbf{u}' = A\\mathbf{u}`}</InlineMath> with <InlineMath>{`\\mathbf{u}(0) = \\mathbf{u}_0`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{u}(t) = e^{At}\\mathbf{u}_0`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Computing e^{At}"
        className="my-6"
        proof={
          <>
            <p>The matrix exponential is defined by <InlineMath>{`e^{At} = I + At + \\frac{(At)^2}{2!} + \\cdots`}</InlineMath></p>
            <p className="mt-2">If <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath>, then <InlineMath>{`A^k = X\\Lambda^k X^{-1}`}</InlineMath>, so:</p>
            <MathBlock>{`e^{At} = X\\left(I + \\Lambda t + \\frac{(\\Lambda t)^2}{2!} + \\cdots\\right)X^{-1} = Xe^{\\Lambda t}X^{-1}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>{`\\Lambda`}</InlineMath> is diagonal, <InlineMath>{`e^{\\Lambda t}`}</InlineMath> is also diagonal with entries <InlineMath>{`e^{\\lambda_i t}`}</InlineMath>.</p>
          </>
        }
      >
        <p>If <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath>:</p>
        <MathBlock>
          {`e^{At} = Xe^{\\Lambda t}X^{-1} = X\\begin{bmatrix} e^{\\lambda_1 t} & & 0 \\\\ & \\ddots & \\\\ 0 & & e^{\\lambda_n t} \\end{bmatrix}X^{-1}`}
        </MathBlock>
      </Theorem>

      <h2>Second-Order Equations</h2>

      <Example title="Converting to First Order" className="my-6">
        <p>The equation <InlineMath>y'' + by' + cy = 0</InlineMath> becomes a system:</p>
        <MathBlock>
          {`\\begin{bmatrix} y' \\\\ y'' \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ -c & -b \\end{bmatrix}\\begin{bmatrix} y \\\\ y' \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The eigenvalues of this matrix give the characteristic roots of the ODE.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`\\mathbf{u}' = A\\mathbf{u}`}</InlineMath> has solutions <InlineMath>{`\\mathbf{u} = e^{\\lambda t}\\mathbf{x}`}</InlineMath> for each eigenpair.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>General solution: <InlineMath>{`\\mathbf{u} = c_1 e^{\\lambda_1 t}\\mathbf{x}_1 + \\cdots + c_n e^{\\lambda_n t}\\mathbf{x}_n`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><strong>Stability</strong>: <InlineMath>{`\\mathbf{u} \\to 0`}</InlineMath> when all eigenvalues have negative real part.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Matrix exponential: <InlineMath>{`e^{At} = Xe^{\\\\Lambda t}X^{-1}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Second-order equations convert to first-order systems.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
