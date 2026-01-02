import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      {/* Introduction */}
      <p>
        <strong>Linear regression</strong> is the most important statistical model. It finds the best
        linear relationship between variables—and "best" means least squares, which is pure linear algebra.
      </p>

      <h2>The Linear Model</h2>

      <Definition title="Linear Regression Model" className="my-6">
        <p>
          The model assumes:
        </p>
        <MathBlock>
          {`y = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>y</InlineMath> = response vector (<InlineMath>n \times 1</InlineMath>)<br />
          <InlineMath>X</InlineMath> = design matrix (<InlineMath>n \times p</InlineMath>)<br />
          <InlineMath>{`\\boldsymbol{\\\\beta}`}</InlineMath> = unknown coefficients (<InlineMath>p \times 1</InlineMath>)<br />
          <InlineMath>{`\\boldsymbol{\\\\varepsilon}`}</InlineMath> = random errors
        </p>
      </Definition>

      <h2>Least Squares Solution</h2>

      <Theorem
        title="Normal Equations"
        className="my-6"
        proof={
          <>
            <p><strong>Minimize squared error:</strong> Let <InlineMath>{`f(\\boldsymbol{\\beta}) = \\|\\mathbf{y} - X\\boldsymbol{\\beta}\\|^2 = (\\mathbf{y} - X\\boldsymbol{\\beta})^T(\\mathbf{y} - X\\boldsymbol{\\beta})`}</InlineMath>.</p>
            <p className="mt-2"><strong>Expand:</strong> <InlineMath>{`f = \\mathbf{y}^T\\mathbf{y} - 2\\boldsymbol{\\beta}^T X^T \\mathbf{y} + \\boldsymbol{\\beta}^T X^T X \\boldsymbol{\\beta}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Take derivative:</strong> <InlineMath>{`\\frac{\\partial f}{\\partial \\boldsymbol{\\beta}} = -2X^T\\mathbf{y} + 2X^TX\\boldsymbol{\\beta} = 0`}</InlineMath>.</p>
            <p className="mt-2"><strong>Solve:</strong> <InlineMath>{`X^TX\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y}`}</InlineMath>, giving <InlineMath>{`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^T\\mathbf{y}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Projection view:</strong> The error <InlineMath>{`\\mathbf{e} = \\mathbf{y} - X\\hat{\\boldsymbol{\\beta}}`}</InlineMath> satisfies <InlineMath>{`X^T\\mathbf{e} = 0`}</InlineMath>, meaning <InlineMath>{`\\mathbf{e}`}</InlineMath> is orthogonal to <InlineMath>C(X)</InlineMath>.</p>
          </>
        }
      >
        <p>
          The <strong>least squares estimate</strong> <InlineMath>{`\\hat{\\boldsymbol{\\beta}}`}</InlineMath> minimizes <InlineMath>{`\\|y - X\\boldsymbol{\\beta}\\|^2`}</InlineMath>:
        </p>
        <MathBlock>
          {`X^TX\\hat{\\boldsymbol{\\beta}} = X^Ty`}
        </MathBlock>
        <MathBlock>
          {`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^Ty`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          This is exactly the projection formula! <InlineMath>{`\\hat{y} = X\\hat{\\boldsymbol{\\beta}}`}</InlineMath> is the projection of <InlineMath>y</InlineMath> onto <InlineMath>C(X)</InlineMath>.
        </p>
      </Theorem>

      <Example title="Simple Linear Regression" className="my-6">
        <p>
          For <InlineMath>y = \beta_0 + \beta_1 x</InlineMath>, the design matrix is:
        </p>
        <MathBlock>
          {`X = \\begin{bmatrix} 1 & x_1 \\\\ 1 & x_2 \\\\ \\vdots & \\vdots \\\\ 1 & x_n \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Solving gives the familiar formulas for slope and intercept.
        </p>
      </Example>

      <h2>Geometric Interpretation</h2>

      <Theorem
        title="Projection Interpretation"
        className="my-6"
        proof={
          <>
            <p><strong>Hat matrix:</strong> <InlineMath>H = X(X^TX)^{-1}X^T</InlineMath> satisfies <InlineMath>H^2 = H</InlineMath> (idempotent) and <InlineMath>H^T = H</InlineMath> (symmetric).</p>
            <p className="mt-2">These are the defining properties of an orthogonal projection matrix.</p>
            <p className="mt-2"><strong>Projects onto C(X):</strong> For any <InlineMath>{`\\mathbf{v} \\in C(X)`}</InlineMath>, write <InlineMath>{`\\mathbf{v} = X\\mathbf{c}`}</InlineMath>. Then <InlineMath>{`H\\mathbf{v} = X(X^TX)^{-1}X^TX\\mathbf{c} = X\\mathbf{c} = \\mathbf{v}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Orthogonal residuals:</strong> <InlineMath>{`\\mathbf{e} = (I-H)\\mathbf{y}`}</InlineMath>. Since <InlineMath>{`(I-H)H = 0`}</InlineMath>, the residual is orthogonal to the fitted values and hence to <InlineMath>{`C(X)`}</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{`\\hat{y} = X(X^TX)^{-1}X^Ty`}</InlineMath> = projection of <InlineMath>y</InlineMath> onto column space of <InlineMath>X</InlineMath></li>
          <li><InlineMath>{`H = X(X^TX)^{-1}X^T`}</InlineMath> = "hat matrix" (projection matrix)</li>
          <li>Residuals <InlineMath>{`e = y - \\hat{y}`}</InlineMath> are orthogonal to columns of <InlineMath>X</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Variance of Estimates</h2>

      <Theorem
        title="Covariance of Beta-Hat"
        className="my-6"
        proof={
          <>
            <p><strong>Setup:</strong> <InlineMath>{`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^T\\mathbf{y} = (X^TX)^{-1}X^T(X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}) = \\boldsymbol{\\beta} + (X^TX)^{-1}X^T\\boldsymbol{\\varepsilon}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Apply covariance transformation:</strong> Since <InlineMath>{`\\hat{\\boldsymbol{\\beta}} - \\boldsymbol{\\beta} = (X^TX)^{-1}X^T\\boldsymbol{\\varepsilon}`}</InlineMath>:</p>
            <MathBlock>{`\\text{Cov}(\\hat{\\boldsymbol{\\beta}}) = (X^TX)^{-1}X^T \\cdot \\text{Cov}(\\boldsymbol{\\varepsilon}) \\cdot X(X^TX)^{-1}`}</MathBlock>
            <p className="mt-2">With <InlineMath>{`\\text{Cov}(\\boldsymbol{\\varepsilon}) = \\sigma^2 I`}</InlineMath>:</p>
            <MathBlock>{`= \\sigma^2 (X^TX)^{-1}X^TX(X^TX)^{-1} = \\sigma^2(X^TX)^{-1}`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\text{Cov}(\\boldsymbol{\\\\varepsilon}) = \\sigma^2 I`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Cov}(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2(X^TX)^{-1}`}
        </MathBlock>
        <p className="mt-2">
          The estimate <InlineMath>{`\\hat{\\sigma}^2 = \\|e\\|^2/(n-p)`}</InlineMath> from residuals.
        </p>
      </Theorem>

      <h2>R-Squared</h2>

      <Definition title="Coefficient of Determination" className="my-6">
        <MathBlock>
          {`R^2 = 1 - \\frac{\\|e\\|^2}{\\|y - \\bar{y}\\|^2} = \\frac{\\|\\hat{y} - \\bar{y}\\|^2}{\\|y - \\bar{y}\\|^2}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>R^2</InlineMath> = fraction of variance explained by the model (0 to 1).
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Pythagorean Theorem in Regression</p>
        <p className="text-dark-300 text-sm">
          <InlineMath>{`\\|y - \\bar{y}\\|^2 = \\|\\hat{y} - \\bar{y}\\|^2 + \\|e\\|^2`}</InlineMath><br /><br />
          Total variance = Explained variance + Unexplained variance<br />
          This is orthogonal decomposition!
        </p>
      </div>

      <h2>Multiple Regression</h2>

      <Example title="Multiple Regression" className="my-6">
        <p>
          With multiple predictors <InlineMath>y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Coefficients account for other variables (partial effects)</li>
          <li>Multicollinearity: if columns of <InlineMath>X</InlineMath> are nearly dependent, <InlineMath>{`(X^TX)^{-1}`}</InlineMath> is ill-conditioned</li>
          <li>Regularization (ridge regression) adds <InlineMath>\lambda I</InlineMath> to stabilize</li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Least squares: <InlineMath>{`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^Ty`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>{`\\hat{y}`}</InlineMath> is the projection of <InlineMath>y</InlineMath> onto column space of <InlineMath>X</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Residuals <InlineMath>e</InlineMath> are orthogonal to columns of <InlineMath>X</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>R^2</InlineMath> = fraction of variance explained.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Variance of <InlineMath>{`\\hat{\\boldsymbol{\\beta}}`}</InlineMath>: <InlineMath>{`\\sigma^2(X^TX)^{-1}`}</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
