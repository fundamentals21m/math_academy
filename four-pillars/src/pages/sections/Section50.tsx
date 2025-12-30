import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { ReflectionCompositionDemo, SymmetryGroupDemo } from '@/components/visualizations/chapter7';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2>Transformations of the Projective Line</h2>

      <p>
        In Section 5.6, we found that the transformations of the real projective
        line ℝP¹ are the <strong>linear fractional functions</strong>. These are
        a natural generalization of linear functions, and they can be elegantly
        represented using matrices.
      </p>

      <h3>Linear Fractional Functions</h3>

      <Definition title="Linear Fractional Function">
        <p>
          A <strong>linear fractional function</strong> (also called a Möbius
          transformation) is a function of the form:
        </p>
        <MathBlock>{`f(x) = \\frac{ax + b}{cx + d}`}</MathBlock>
        <p className="mt-2">
          where a, b, c, d are real numbers with ad − bc ≠ 0.
        </p>
      </Definition>

      <p>
        The condition ad − bc ≠ 0 ensures that f is not a constant function.
        When c = 0, we get the ordinary linear (affine) functions of the line.
        When c ≠ 0, f maps ∞ to a/c and maps −d/c to ∞.
      </p>

      <h3>Matrix Representation</h3>

      <p>
        Linear fractional functions can be represented by 2×2 matrices in a
        beautiful way. The function f(x) = (ax + b)/(cx + d) corresponds to
        the matrix:
      </p>

      <MathBlock>{`A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`}</MathBlock>

      <Theorem title="Composition and Matrix Multiplication">
        <p>
          If f corresponds to matrix A and g corresponds to matrix B, then
          the composition f ∘ g corresponds to the matrix product AB.
        </p>
        <p className="mt-2 text-slate-300">
          This correspondence respects the group operation: composing linear
          fractional functions is the same as multiplying their matrices.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Homogeneous Coordinates:</strong> The matrix representation arises
        naturally from viewing ℝP¹ as the space of lines through O in ℝ². A point
        x on the line corresponds to the point (x, 1) in the plane, or more
        generally to any point (λx, λ) for λ ≠ 0. The point ∞ corresponds to
        points (1, 0) or (λ, 0).
      </Callout>

      <h3>The Group PGL(2, ℝ)</h3>

      <p>
        The group of all linear fractional transformations of ℝP¹ is denoted
        PGL(2, ℝ) — the <strong>projective general linear group</strong>.
      </p>

      <Definition title="PGL(2, ℝ)">
        <p>
          The group PGL(2, ℝ) consists of all invertible 2×2 matrices over ℝ,
          where two matrices are considered equivalent if one is a nonzero
          scalar multiple of the other:
        </p>
        <MathBlock>{`A \\sim \\lambda A \\quad \\text{for } \\lambda \\neq 0`}</MathBlock>
        <p className="mt-2">
          This is because the functions corresponding to A and λA are identical.
        </p>
      </Definition>

      <h3>Generating Transformations</h3>

      <p>
        Every linear fractional transformation is a composition of three basic
        types:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Generating Transformations</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Translation:</strong> x → x + l
            <MathBlock>{`\\begin{pmatrix} 1 & l \\\\ 0 & 1 \\end{pmatrix}`}</MathBlock>
          </li>
          <li>
            <strong>Scaling:</strong> x → kx (for k ≠ 0)
            <MathBlock>{`\\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix}`}</MathBlock>
          </li>
          <li>
            <strong>Inversion:</strong> x → 1/x
            <MathBlock>{`\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}`}</MathBlock>
          </li>
        </ul>
      </div>

      <h3>Cross-Ratio Invariance</h3>

      <p>
        The most important invariant of linear fractional transformations is
        the <strong>cross-ratio</strong>.
      </p>

      <Definition title="Cross-Ratio">
        <p>
          The cross-ratio of four points a, b, c, d on ℝP¹ is:
        </p>
        <MathBlock>{`(a, b; c, d) = \\frac{(a - c)(b - d)}{(a - d)(b - c)}`}</MathBlock>
      </Definition>

      <Theorem title="Cross-Ratio Invariance">
        <p>
          Linear fractional transformations preserve the cross-ratio:
        </p>
        <MathBlock>{`(f(a), f(b); f(c), f(d)) = (a, b; c, d)`}</MathBlock>
        <p className="mt-2 text-slate-300">
          This is the fundamental invariant of projective geometry on the line.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Three-Point Determination:</strong> A linear fractional transformation
        is completely determined by its action on any three points. Given three
        distinct points and their images, there is a unique linear fractional
        transformation mapping one triple to the other.
      </Callout>

      <h3>Fixed Points</h3>

      <p>
        The fixed points of a linear fractional transformation f(x) = (ax + b)/(cx + d)
        are the solutions to f(x) = x, which gives the quadratic equation:
      </p>

      <MathBlock>{`cx^2 + (d - a)x - b = 0`}</MathBlock>

      <p>
        A transformation can have 0, 1, or 2 fixed points (counting ∞):
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Two fixed points:</strong> Called <em>hyperbolic</em> or <em>elliptic</em></li>
          <li><strong>One fixed point:</strong> Called <em>parabolic</em> (translations)</li>
          <li><strong>All points fixed:</strong> The identity transformation</li>
        </ul>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.3.1</h4>
        <p className="text-slate-300">
          Verify that f(x) = (2x + 1)/(x + 1) and g(x) = (x + 3)/(2x − 1) satisfy
          (f ∘ g)(x) corresponding to the matrix product of their matrices.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.3.2</h4>
        <p className="text-slate-300">
          Find the unique linear fractional transformation that maps 0 → 1,
          1 → 0, and ∞ → ∞.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.3.3</h4>
        <p className="text-slate-300">
          Compute the cross-ratio (0, 1; 2, ∞) and verify it is preserved by
          the transformation x → 2x.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.3.4</h4>
        <p className="text-slate-300">
          Find the fixed points of f(x) = (2x + 1)/(x + 2) and classify the
          transformation.
        </p>
      </div>

      <ReflectionCompositionDemo className="my-6" />

      <SymmetryGroupDemo className="my-6" />

      <SectionQuiz
        sectionId={50}
        questions={quizMap[50] || []}
        title="Transformations of the Projective Line Quiz"
      />
    </LessonLayout>
  );
}
