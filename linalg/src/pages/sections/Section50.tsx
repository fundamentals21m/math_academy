import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      {/* Introduction */}
      <p>
        <strong>Machine learning</strong> is applied linear algebra. Neural networks, support vector machines,
        and dimensionality reduction all rely on matrix operations. This final section connects the course
        to modern data science.
      </p>

      <h2>Dimensionality Reduction</h2>

      <Theorem
        title="PCA Revisited"
        className="my-6"
        proof={
          <>
            <p><strong>Goal:</strong> Find directions of maximum variance. The variance along direction <InlineMath>{`\\mathbf{v}`}</InlineMath> (unit vector) is <InlineMath>{`\\mathbf{v}^T \\Sigma \\mathbf{v}`}</InlineMath> where <InlineMath>{`\\Sigma`}</InlineMath> is the covariance matrix.</p>
            <p className="mt-2"><strong>Solution:</strong> Maximize <InlineMath>{`\\mathbf{v}^T \\Sigma \\mathbf{v}`}</InlineMath> subject to <InlineMath>{`\\|\\mathbf{v}\\| = 1`}</InlineMath>. By Lagrange multipliers, <InlineMath>{`\\Sigma \\mathbf{v} = \\lambda \\mathbf{v}`}</InlineMath>.</p>
            <p className="mt-2">The principal components are eigenvectors of <InlineMath>\\Sigma</InlineMath>. The variance along each is its eigenvalue.</p>
            <p className="mt-2"><strong>SVD connection:</strong> For centered data <InlineMath>X</InlineMath>, <InlineMath>\\Sigma \\propto X^TX</InlineMath>. The SVD <InlineMath>X = U\\Sigma V^T</InlineMath> gives the same principal directions in <InlineMath>V</InlineMath>.</p>
          </>
        }
      >
        <p>
          <strong>Principal Component Analysis</strong> projects high-dimensional data to lower dimensions:
        </p>
        <MathBlock>
          {`X = U\\Sigma V^T \\quad \\Rightarrow \\quad X_k = U_k\\Sigma_k V_k^T`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Keep only <InlineMath>k</InlineMath> largest singular values</li>
          <li>Minimizes reconstruction error <InlineMath>\|X - X_k\|_F</InlineMath></li>
          <li>New coordinates: <InlineMath>Z = XV_k = U_k\Sigma_k</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Linear Classifiers</h2>

      <Definition title="Linear Classification" className="my-6">
        <p>
          Find a hyperplane <InlineMath>{`\\mathbf{w}^T\\mathbf{x} + b = 0`}</InlineMath> that separates two classes:
        </p>
        <MathBlock>
          {`\\text{Predict class } +1 \\text{ if } \\mathbf{w}^T\\mathbf{x} + b > 0`}
        </MathBlock>
        <p className="mt-2">
          The weight vector <InlineMath>{`\\mathbf{w}`}</InlineMath> is normal to the separating hyperplane.
        </p>
      </Definition>

      <Theorem
        title="Support Vector Machines"
        className="my-6"
        proof={
          <>
            <p><strong>Margin calculation:</strong> For a separating hyperplane <InlineMath>{`\\mathbf{w}^T\\mathbf{x} + b = 0`}</InlineMath>, the distance from point <InlineMath>{`\\mathbf{x}_i`}</InlineMath> to the hyperplane is <InlineMath>{`|\\mathbf{w}^T\\mathbf{x}_i + b|/\\|\\mathbf{w}\\|`}</InlineMath>.</p>
            <p className="mt-2"><strong>Constraint normalization:</strong> Scale <InlineMath>{`\\mathbf{w}, b`}</InlineMath> so the closest points satisfy <InlineMath>{`|\\mathbf{w}^T\\mathbf{x}_i + b| = 1`}</InlineMath>. Then margin = <InlineMath>{`1/\\|\\mathbf{w}\\|`}</InlineMath>.</p>
            <p className="mt-2"><strong>Maximize margin:</strong> Maximize <InlineMath>{`1/\\|\\mathbf{w}\\|`}</InlineMath> ⟺ minimize <InlineMath>{`\\|\\mathbf{w}\\|^2`}</InlineMath>.</p>
            <p className="mt-2"><strong>Support vectors:</strong> The constraints <InlineMath>{`y_i(\\mathbf{w}^T\\mathbf{x}_i + b) \\geq 1`}</InlineMath> are active (equality) only for points on the margin boundaries. These are the support vectors; they determine the solution.</p>
          </>
        }
      >
        <p>
          SVM finds the maximum-margin hyperplane:
        </p>
        <MathBlock>
          {`\\min \\|\\mathbf{w}\\|^2 \\quad \\text{subject to } y_i(\\mathbf{w}^T\\mathbf{x}_i + b) \\geq 1`}
        </MathBlock>
        <p className="mt-2">
          The margin is <InlineMath>{`2/\\|\\mathbf{w}\\|`}</InlineMath>. Support vectors lie on the margin boundaries.
        </p>
      </Theorem>

      <h2>Neural Networks</h2>

      <Definition title="Neural Network as Matrix Operations" className="my-6">
        <p>
          A fully-connected layer computes:
        </p>
        <MathBlock>
          {`\\mathbf{h} = \\sigma(W\\mathbf{x} + \\mathbf{b})`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\sigma</InlineMath> is a nonlinear activation (ReLU, sigmoid, etc.).<br />
          Without nonlinearity, deep networks would collapse to a single matrix!
        </p>
      </Definition>

      <Example title="Matrix View of Deep Learning" className="my-6">
        <p>A 3-layer network:</p>
        <MathBlock>
          {`\\mathbf{y} = W_3 \\sigma(W_2 \\sigma(W_1 \\mathbf{x}))`}
        </MathBlock>
        <p className="mt-2">
          Training = finding <InlineMath>W_1, W_2, W_3</InlineMath> to minimize loss.<br />
          Gradients computed via backpropagation (chain rule + matrix calculus).
        </p>
      </Example>

      <h2>Gradient Descent</h2>

      <Definition title="Gradient Descent" className="my-6">
        <p>
          Minimize <InlineMath>{`f(\\mathbf{w})`}</InlineMath> by iterating:
        </p>
        <MathBlock>
          {`\\mathbf{w}_{k+1} = \\mathbf{w}_k - \\alpha \\nabla f(\\mathbf{w}_k)`}
        </MathBlock>
        <p className="mt-2">
          For least squares: <InlineMath>{`\\nabla f = X^T(X\\mathbf{w} - y)`}</InlineMath>
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Condition Number in Optimization</p>
        <p className="text-dark-300 text-sm">
          Convergence rate of gradient descent depends on <InlineMath>\kappa(X^TX)</InlineMath>.<br />
          Ill-conditioned problems → slow convergence → need preconditioning or adaptive methods (Adam, etc.).
        </p>
      </div>

      <h2>Matrix Factorization</h2>

      <Definition title="Low-Rank Matrix Factorization" className="my-6">
        <p>
          Approximate matrix <InlineMath>R</InlineMath> (e.g., user-item ratings) as:
        </p>
        <MathBlock>
          {`R \\approx UV^T`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>U</InlineMath> (users) and <InlineMath>V</InlineMath> (items) have <InlineMath>k</InlineMath> columns (latent factors).
          This is the basis of recommender systems!
        </p>
      </Definition>

      <h2>Regularization</h2>

      <Theorem
        title="Ridge Regression"
        className="my-6"
        proof={
          <>
            <p><strong>Objective:</strong> Minimize <InlineMath>{`f(\\boldsymbol{\\beta}) = \\|X\\boldsymbol{\\beta} - \\mathbf{y}\\|^2 + \\lambda\\|\\boldsymbol{\\beta}\\|^2`}</InlineMath>.</p>
            <p className="mt-2"><strong>Derivative:</strong> <InlineMath>{`\\frac{\\partial f}{\\partial \\boldsymbol{\\beta}} = 2X^T(X\\boldsymbol{\\beta} - \\mathbf{y}) + 2\\lambda\\boldsymbol{\\beta} = 0`}</InlineMath>.</p>
            <p className="mt-2"><strong>Solve:</strong> <InlineMath>{`(X^TX + \\lambda I)\\boldsymbol{\\beta} = X^T\\mathbf{y}`}</InlineMath>, giving <InlineMath>{`\\hat{\\boldsymbol{\\beta}} = (X^TX + \\lambda I)^{-1}X^T\\mathbf{y}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Why it works:</strong> Adding <InlineMath>{`\\lambda I`}</InlineMath> shifts all eigenvalues of <InlineMath>X^TX</InlineMath> up by <InlineMath>{`\\lambda`}</InlineMath>. This:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Ensures invertibility (no zero eigenvalues)</li>
              <li>Reduces condition number: <InlineMath>{`\\kappa = (\\sigma_{\\max}^2 + \\lambda)/(\\sigma_{\\min}^2 + \\lambda)`}</InlineMath></li>
              <li>Shrinks coefficients toward zero (bias-variance tradeoff)</li>
            </ul>
          </>
        }
      >
        <p>
          Add penalty to prevent overfitting:
        </p>
        <MathBlock>
          {`\\min \\|X\\boldsymbol{\\beta} - y\\|^2 + \\lambda\\|\\boldsymbol{\\beta}\\|^2`}
        </MathBlock>
        <p className="mt-2">Solution:</p>
        <MathBlock>
          {`\\hat{\\boldsymbol{\\beta}} = (X^TX + \\lambda I)^{-1}X^Ty`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Adding <InlineMath>\lambda I</InlineMath> improves condition number and shrinks coefficients.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>PCA/SVD for dimensionality reduction; keep top <InlineMath>k</InlineMath> singular values.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>SVM: find max-margin hyperplane; <InlineMath>{`\\mathbf{w}`}</InlineMath> is normal vector.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Neural networks: layers of matrix multiply + nonlinearity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Gradient descent: <InlineMath>{`\\mathbf{w} \\to \\mathbf{w} - \\alpha\\nabla f`}</InlineMath>; condition number affects speed.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Ridge regression: <InlineMath>{`(X^TX + \\lambda I)^{-1}X^Ty`}</InlineMath> for regularization.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-green-500/10 to-dark-800/50 rounded-xl p-6 my-8 border border-green-500/20">
        <h3 className="text-xl font-bold text-green-400 mb-4">Course Complete!</h3>
        <p className="text-dark-200">
          Congratulations on completing Introduction to Linear Algebra! You now have the foundation
          to understand and apply linear algebra in:
        </p>
        <ul className="list-disc list-inside mt-3 text-dark-300 space-y-1">
          <li>Machine Learning and Data Science</li>
          <li>Computer Graphics and Vision</li>
          <li>Signal Processing and Communications</li>
          <li>Scientific Computing and Engineering</li>
          <li>Cryptography and Coding Theory</li>
        </ul>
        <p className="mt-4 text-dark-200">
          Linear algebra is the language of modern applied mathematics. Keep exploring!
        </p>
      </div>
    </LessonLayout>
  );
}
