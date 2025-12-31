import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section02Quiz } from '@/data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>The Central Object: Vector Spaces</h2>

      <p>
        A <strong>vector space</strong> is the fundamental structure of linear algebra. It captures
        the essence of what it means to add objects and scale them, abstracting away from the
        specific setting of arrows in <Math>{`\\mathbb{R}`}^n</Math> to a purely algebraic framework.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> The formal definition of a vector space emerged in the
        19th century, though mathematicians had been working with vectors for centuries. The
        abstraction allows us to study polynomials, functions, and matrices using the same
        techniques we use for geometric vectors.
      </Callout>

      <h2>Definition of a Vector Space</h2>

      <Definition title="Vector Space">
        <p>
          A <strong>vector space</strong> over a field <Math>F</Math> is a set <Math>V</Math> together
          with two operations:
        </p>
        <ul className="list-disc list-inside text-dark-300 my-3">
          <li><strong>Vector addition:</strong> <Math>+: V \times V \to V</Math></li>
          <li><strong>Scalar multiplication:</strong> <Math>\cdot: F \times V \to V</Math></li>
        </ul>
        <p>satisfying the following axioms for all <Math>u, v, w \in V</Math> and <Math>c, d \in F</Math>:</p>
        
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Vector Addition Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>V1 (Commutativity):</strong> <Math>u + v = v + u</Math></li>
              <li><strong>V2 (Associativity):</strong> <Math>(u + v) + w = u + (v + w)</Math></li>
              <li><strong>V3 (Zero vector):</strong> There exists <Math>{`\\mathbf{0}`} \in V</Math> such that <Math>v + {`\\mathbf{0}`} = v</Math></li>
              <li><strong>V4 (Additive inverses):</strong> For each <Math>v</Math>, there exists <Math>-v</Math> such that <Math>v + (-v) = {`\\mathbf{0}`}</Math></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Scalar Multiplication Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>V5 (Identity):</strong> <Math>1 \cdot v = v</Math></li>
              <li><strong>V6 (Associativity):</strong> <Math>(cd)v = c(dv)</Math></li>
              <li><strong>V7 (Distributivity over vectors):</strong> <Math>c(u + v) = cu + cv</Math></li>
              <li><strong>V8 (Distributivity over scalars):</strong> <Math>(c + d)v = cv + dv</Math></li>
            </ul>
          </div>
        </div>
      </Definition>

      <Callout type="warning">
        <strong>Important Distinction:</strong> Elements of <Math>V</Math> are called <strong>vectors</strong>,
        while elements of <Math>F</Math> are called <strong>scalars</strong>. Don't confuse them!
        The zero vector <Math>{`\\mathbf{0}`}</Math> is not the same as the scalar <Math>0</Math>.
      </Callout>

      <h2>The Canonical Example: <Math>{`\\mathbb{R}`}^n</Math></h2>

      <Example title="n-Dimensional Real Space">
        <p>
          The set <Math>{`\\mathbb{R}`}^n = {`\\{(x_1, x_2, \\ldots, x_n) : x_i \\in \\mathbb{R}\\}`}</Math> is
          a vector space over <Math>{`\\mathbb{R}`}</Math> with:
        </p>
        <MathBlock>{`
          (x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1 + y_1, \\ldots, x_n + y_n)
        `}</MathBlock>
        <MathBlock>{`
          c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)
        `}</MathBlock>
        <p className="mt-2">
          The zero vector is <Math>{`\\mathbf{0}`} = (0, 0, \ldots, 0)</Math>.
        </p>
      </Example>

      <h2>Less Obvious Examples</h2>

      <Example title="The Polynomial Space P_n(F)">
        <p>
          The set of all polynomials of degree at most <Math>n</Math> with coefficients in <Math>F</Math>:
        </p>
        <MathBlock>{`
          P_n(F) = \\{a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n : a_i \\in F\\}
        `}</MathBlock>
        <p className="mt-2">
          This is a vector space with the usual polynomial addition and scalar multiplication.
          The zero vector is the zero polynomial, and <Math>\dim(P_n(F)) = n + 1</Math>.
        </p>
      </Example>

      <Example title="The Matrix Space M_{m×n}(F)">
        <p>
          The set of all <Math>m \times n</Math> matrices with entries in <Math>F</Math> is a
          vector space with entry-wise operations:
        </p>
        <MathBlock>{`
          (A + B)_{ij} = A_{ij} + B_{ij}, \\quad (cA)_{ij} = c \\cdot A_{ij}
        `}</MathBlock>
        <p className="mt-2">
          The zero vector is the zero matrix. This space has dimension <Math>mn</Math>.
        </p>
      </Example>

      <Example title="Function Spaces">
        <p>
          Let <Math>F^S</Math> denote all functions from a set <Math>S</Math> to a field <Math>F</Math>.
          With pointwise operations:
        </p>
        <MathBlock>{`
          (f + g)(x) = f(x) + g(x), \\quad (cf)(x) = c \\cdot f(x)
        `}</MathBlock>
        <p className="mt-2">
          This is a vector space. Special cases include:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li><Math>\mathcal{'{C}'}({`\\mathbb{R}`})</Math> = continuous functions on <Math>{`\\mathbb{R}`}</Math></li>
          <li><Math>\mathcal{'{C}'}^\infty({`\\mathbb{R}`})</Math> = infinitely differentiable functions</li>
          <li>Solution spaces of differential equations</li>
        </ul>
      </Example>

      <h2>Properties Derived from Axioms</h2>

      <Theorem
        title="Uniqueness of Zero Vector"
        proof={
          <>
            <p>
              Suppose <Math>{`\\mathbf{0}`}</Math> and <Math>{`\\mathbf{0}`}'</Math> are both zero vectors. Then:
            </p>
            <MathBlock>{`\\mathbf{0} = \\mathbf{0} + \\mathbf{0}' = \\mathbf{0}'`}</MathBlock>
            <p>
              The first equality uses that <Math>{`\\mathbf{0}`}'</Math> is a zero vector, and the
              second uses that <Math>{`\\mathbf{0}`}</Math> is a zero vector.
            </p>
          </>
        }
      >
        <p>
          Every vector space has exactly one zero vector <Math>{`\\mathbf{0}`}</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Scalar Zero Property"
        proof={
          <>
            <p>For any <Math>v \in V</Math>:</p>
            <MathBlock>{`0 \\cdot v = (0 + 0) \\cdot v = 0 \\cdot v + 0 \\cdot v`}</MathBlock>
            <p className="mt-2">
              Adding <Math>-(0 \cdot v)</Math> to both sides gives <Math>{`\\mathbf{0}`} = 0 \cdot v</Math>.
            </p>
          </>
        }
      >
        <p>
          For any vector <Math>v</Math> in a vector space: <Math>0 \cdot v = {`\\mathbf{0}`}</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Negative Scalar Property"
        proof={
          <>
            <p>We show <Math>(-1) \cdot v + v = {`\\mathbf{0}`}</Math>:</p>
            <MathBlock>{`(-1) \\cdot v + v = (-1) \\cdot v + 1 \\cdot v = ((-1) + 1) \\cdot v = 0 \\cdot v = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">
              Therefore <Math>(-1) \cdot v</Math> is the additive inverse of <Math>v</Math>, i.e., <Math>(-1) \cdot v = -v</Math>.
            </p>
          </>
        }
      >
        <p>
          For any vector <Math>v</Math>: <Math>(-1) \cdot v = -v</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Zero Product Rule"
        proof={
          <>
            <p><strong>Case 1:</strong> If <Math>c = 0</Math>, we already proved <Math>0 \cdot v = {`\\mathbf{0}`}</Math>.</p>
            <p className="mt-2"><strong>Case 2:</strong> If <Math>v = {`\\mathbf{0}`}</Math>:</p>
            <MathBlock>{`c \\cdot \\mathbf{0} = c \\cdot (\\mathbf{0} + \\mathbf{0}) = c \\cdot \\mathbf{0} + c \\cdot \\mathbf{0}`}</MathBlock>
            <p>Adding <Math>-(c \cdot {`\\mathbf{0}`})</Math> gives <Math>c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</Math>.</p>
          </>
        }
      >
        <p>
          <Math>c \cdot v = {`\\mathbf{0}`}</Math> if and only if <Math>c = 0</Math> or <Math>v = {`\\mathbf{0}`}</Math>.
        </p>
      </Theorem>

      <h2>Non-Examples</h2>

      <Callout type="warning">
        <strong>Common Mistakes:</strong> Not every set with "addition" and "scaling" is a
        vector space. Here are some non-examples:
      </Callout>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Positive Real Numbers</h4>
          <p className="text-dark-300 mt-2">
            <Math>{`\\mathbb{R}`}^+ = {`\\{x \\in \\mathbb{R} : x > 0\\}`}</Math> with usual addition is
            NOT a vector space: it's not closed under addition (but it has no zero element, and
            no additive inverses).
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: First Quadrant</h4>
          <p className="text-dark-300 mt-2">
            <Math>{`\\{(x, y) : x \\geq 0, y \\geq 0\\}`}</Math> is NOT a vector space: it's not
            closed under scalar multiplication by negative numbers.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Affine Subsets</h4>
          <p className="text-dark-300 mt-2">
            A line not passing through the origin in <Math>{`\\mathbb{R}`}^2</Math> is NOT a
            vector space: it doesn't contain the zero vector.
          </p>
        </div>
      </div>

      <h2>Complex Vector Spaces</h2>

      <Example title="C^n as a Complex Vector Space">
        <p>
          <Math>{`\\mathbb{C}`}^n</Math> is a vector space over <Math>{`\\mathbb{C}`}</Math> with the
          obvious operations. But it can also be viewed as a vector space over <Math>{`\\mathbb{R}`}</Math>!
        </p>
        <p className="mt-2">
          When viewed over <Math>{`\\mathbb{R}`}</Math>, the dimension doubles: <Math>\dim_{`\\mathbb{R}`}({`\\mathbb{C}`}^n) = 2n</Math>.
        </p>
        <p className="mt-2">
          For example, <Math>{`\\mathbb{C}`}</Math> over <Math>{`\\mathbb{R}`}</Math> has basis <Math>{`\\{1, i\\}`}</Math>.
        </p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>A vector space has 8 axioms: 4 for addition, 4 for scalar multiplication</li>
          <li>Key examples: <Math>{`\\mathbb{R}`}^n</Math>, polynomials <Math>P_n(F)</Math>, matrices <Math>M_{'m×n'}(F)</Math>, function spaces</li>
          <li>The zero vector is unique, and <Math>0 \cdot v = {`\\mathbf{0}`}</Math> for any <Math>v</Math></li>
          <li>The same set can be a vector space over different fields with different dimensions</li>
          <li>Not every set with operations is a vector space - check all axioms!</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={2}
        questions={section02Quiz}
        title="Vector Spaces Quiz"
      />
    </LessonLayout>
  );
}
