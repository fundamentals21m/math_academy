import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section02Quiz } from '@/data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>The Central Object: Vector Spaces</h2>

      <p>
        A <strong>vector space</strong> is the fundamental structure of linear algebra. It captures
        the essence of what it means to add objects and scale them, abstracting away from the
        specific setting of arrows in <InlineMath>{`\\mathbb{R}`}^n</InlineMath> to a purely algebraic framework.
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
          A <strong>vector space</strong> over a field <InlineMath>F</InlineMath> is a set <InlineMath>V</InlineMath> together
          with two operations:
        </p>
        <ul className="list-disc list-inside text-dark-300 my-3">
          <li><strong>Vector addition:</strong> <InlineMath>+: V \times V \to V</InlineMath></li>
          <li><strong>Scalar multiplication:</strong> <InlineMath>\cdot: F \times V \to V</InlineMath></li>
        </ul>
        <p>satisfying the following axioms for all <InlineMath>u, v, w \in V</InlineMath> and <InlineMath>c, d \in F</InlineMath>:</p>
        
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Vector Addition Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>V1 (Commutativity):</strong> <InlineMath>u + v = v + u</InlineMath></li>
              <li><strong>V2 (Associativity):</strong> <InlineMath>(u + v) + w = u + (v + w)</InlineMath></li>
              <li><strong>V3 (Zero vector):</strong> There exists <InlineMath>{`\\mathbf{0}`} \in V</InlineMath> such that <InlineMath>v + {`\\mathbf{0}`} = v</InlineMath></li>
              <li><strong>V4 (Additive inverses):</strong> For each <InlineMath>v</InlineMath>, there exists <InlineMath>-v</InlineMath> such that <InlineMath>v + (-v) = {`\\mathbf{0}`}</InlineMath></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Scalar Multiplication Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>V5 (Identity):</strong> <InlineMath>1 \cdot v = v</InlineMath></li>
              <li><strong>V6 (Associativity):</strong> <InlineMath>(cd)v = c(dv)</InlineMath></li>
              <li><strong>V7 (Distributivity over vectors):</strong> <InlineMath>c(u + v) = cu + cv</InlineMath></li>
              <li><strong>V8 (Distributivity over scalars):</strong> <InlineMath>(c + d)v = cv + dv</InlineMath></li>
            </ul>
          </div>
        </div>
      </Definition>

      <Callout type="warning">
        <strong>Important Distinction:</strong> Elements of <InlineMath>V</InlineMath> are called <strong>vectors</strong>,
        while elements of <InlineMath>F</InlineMath> are called <strong>scalars</strong>. Don't confuse them!
        The zero vector <InlineMath>{`\\mathbf{0}`}</InlineMath> is not the same as the scalar <InlineMath>0</InlineMath>.
      </Callout>

      <h2>The Canonical Example: <InlineMath>{`\\mathbb{R}`}^n</InlineMath></h2>

      <Example title="n-Dimensional Real Space">
        <p>
          The set <InlineMath>{`\\mathbb{R}`}^n = {`\\{(x_1, x_2, \\ldots, x_n) : x_i \\in \\mathbb{R}\\}`}</InlineMath> is
          a vector space over <InlineMath>{`\\mathbb{R}`}</InlineMath> with:
        </p>
        <MathBlock>{`
          (x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1 + y_1, \\ldots, x_n + y_n)
        `}</MathBlock>
        <MathBlock>{`
          c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)
        `}</MathBlock>
        <p className="mt-2">
          The zero vector is <InlineMath>{`\\mathbf{0}`} = (0, 0, \ldots, 0)</InlineMath>.
        </p>
      </Example>

      <h2>Less Obvious Examples</h2>

      <Example title="The Polynomial Space P_n(F)">
        <p>
          The set of all polynomials of degree at most <InlineMath>n</InlineMath> with coefficients in <InlineMath>F</InlineMath>:
        </p>
        <MathBlock>{`
          P_n(F) = \\{a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n : a_i \\in F\\}
        `}</MathBlock>
        <p className="mt-2">
          This is a vector space with the usual polynomial addition and scalar multiplication.
          The zero vector is the zero polynomial, and <InlineMath>\dim(P_n(F)) = n + 1</InlineMath>.
        </p>
      </Example>

      <Example title="The Matrix Space M_{m×n}(F)">
        <p>
          The set of all <InlineMath>m \times n</InlineMath> matrices with entries in <InlineMath>F</InlineMath> is a
          vector space with entry-wise operations:
        </p>
        <MathBlock>{`
          (A + B)_{ij} = A_{ij} + B_{ij}, \\quad (cA)_{ij} = c \\cdot A_{ij}
        `}</MathBlock>
        <p className="mt-2">
          The zero vector is the zero matrix. This space has dimension <InlineMath>mn</InlineMath>.
        </p>
      </Example>

      <Example title="Function Spaces">
        <p>
          Let <InlineMath>F^S</InlineMath> denote all functions from a set <InlineMath>S</InlineMath> to a field <InlineMath>F</InlineMath>.
          With pointwise operations:
        </p>
        <MathBlock>{`
          (f + g)(x) = f(x) + g(x), \\quad (cf)(x) = c \\cdot f(x)
        `}</MathBlock>
        <p className="mt-2">
          This is a vector space. Special cases include:
        </p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li><InlineMath>\mathcal{'{C}'}({`\\mathbb{R}`})</InlineMath> = continuous functions on <InlineMath>{`\\mathbb{R}`}</InlineMath></li>
          <li><InlineMath>\mathcal{'{C}'}^\infty({`\\mathbb{R}`})</InlineMath> = infinitely differentiable functions</li>
          <li>Solution spaces of differential equations</li>
        </ul>
      </Example>

      <h2>Properties Derived from Axioms</h2>

      <Theorem
        title="Uniqueness of Zero Vector"
        proof={
          <>
            <p>
              Suppose <InlineMath>{`\\mathbf{0}`}</InlineMath> and <InlineMath>{`\\mathbf{0}`}'</InlineMath> are both zero vectors. Then:
            </p>
            <MathBlock>{`\\mathbf{0} = \\mathbf{0} + \\mathbf{0}' = \\mathbf{0}'`}</MathBlock>
            <p>
              The first equality uses that <InlineMath>{`\\mathbf{0}`}'</InlineMath> is a zero vector, and the
              second uses that <InlineMath>{`\\mathbf{0}`}</InlineMath> is a zero vector.
            </p>
          </>
        }
      >
        <p>
          Every vector space has exactly one zero vector <InlineMath>{`\\mathbf{0}`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Scalar Zero Property"
        proof={
          <>
            <p>For any <InlineMath>v \in V</InlineMath>:</p>
            <MathBlock>{`0 \\cdot v = (0 + 0) \\cdot v = 0 \\cdot v + 0 \\cdot v`}</MathBlock>
            <p className="mt-2">
              Adding <InlineMath>-(0 \cdot v)</InlineMath> to both sides gives <InlineMath>{`\\mathbf{0}`} = 0 \cdot v</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any vector <InlineMath>v</InlineMath> in a vector space: <InlineMath>0 \cdot v = {`\\mathbf{0}`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Negative Scalar Property"
        proof={
          <>
            <p>We show <InlineMath>(-1) \cdot v + v = {`\\mathbf{0}`}</InlineMath>:</p>
            <MathBlock>{`(-1) \\cdot v + v = (-1) \\cdot v + 1 \\cdot v = ((-1) + 1) \\cdot v = 0 \\cdot v = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">
              Therefore <InlineMath>(-1) \cdot v</InlineMath> is the additive inverse of <InlineMath>v</InlineMath>, i.e., <InlineMath>(-1) \cdot v = -v</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any vector <InlineMath>v</InlineMath>: <InlineMath>(-1) \cdot v = -v</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Zero Product Rule"
        proof={
          <>
            <p><strong>Case 1:</strong> If <InlineMath>c = 0</InlineMath>, we already proved <InlineMath>0 \cdot v = {`\\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Case 2:</strong> If <InlineMath>v = {`\\mathbf{0}`}</InlineMath>:</p>
            <MathBlock>{`c \\cdot \\mathbf{0} = c \\cdot (\\mathbf{0} + \\mathbf{0}) = c \\cdot \\mathbf{0} + c \\cdot \\mathbf{0}`}</MathBlock>
            <p>Adding <InlineMath>-(c \cdot {`\\mathbf{0}`})</InlineMath> gives <InlineMath>c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>c \cdot v = {`\\mathbf{0}`}</InlineMath> if and only if <InlineMath>c = 0</InlineMath> or <InlineMath>v = {`\\mathbf{0}`}</InlineMath>.
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
            <InlineMath>{`\\mathbb{R}`}^+ = {`\\{x \\in \\mathbb{R} : x > 0\\}`}</InlineMath> with usual addition is
            NOT a vector space: it's not closed under addition (but it has no zero element, and
            no additive inverses).
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: First Quadrant</h4>
          <p className="text-dark-300 mt-2">
            <InlineMath>{`\\{(x, y) : x \\geq 0, y \\geq 0\\}`}</InlineMath> is NOT a vector space: it's not
            closed under scalar multiplication by negative numbers.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Affine Subsets</h4>
          <p className="text-dark-300 mt-2">
            A line not passing through the origin in <InlineMath>{`\\mathbb{R}`}^2</InlineMath> is NOT a
            vector space: it doesn't contain the zero vector.
          </p>
        </div>
      </div>

      <h2>Complex Vector Spaces</h2>

      <Example title="C^n as a Complex Vector Space">
        <p>
          <InlineMath>{`\\mathbb{C}`}^n</InlineMath> is a vector space over <InlineMath>{`\\mathbb{C}`}</InlineMath> with the
          obvious operations. But it can also be viewed as a vector space over <InlineMath>{`\\mathbb{R}`}</InlineMath>!
        </p>
        <p className="mt-2">
          When viewed over <InlineMath>{`\\mathbb{R}`}</InlineMath>, the dimension doubles: <InlineMath>\dim_{`\\mathbb{R}`}({`\\mathbb{C}`}^n) = 2n</InlineMath>.
        </p>
        <p className="mt-2">
          For example, <InlineMath>{`\\mathbb{C}`}</InlineMath> over <InlineMath>{`\\mathbb{R}`}</InlineMath> has basis <InlineMath>{`\\{1, i\\}`}</InlineMath>.
        </p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>A vector space has 8 axioms: 4 for addition, 4 for scalar multiplication</li>
          <li>Key examples: <InlineMath>{`\\mathbb{R}`}^n</InlineMath>, polynomials <InlineMath>P_n(F)</InlineMath>, matrices <InlineMath>M_{'m×n'}(F)</InlineMath>, function spaces</li>
          <li>The zero vector is unique, and <InlineMath>0 \cdot v = {`\\mathbf{0}`}</InlineMath> for any <InlineMath>v</InlineMath></li>
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
