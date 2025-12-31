import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section01Quiz } from '@/data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>The Foundation: Algebraic Structures</h2>

      <p>
        Before we can study vector spaces and linear transformations, we need to understand the
        algebraic structure that underlies them: <strong>fields</strong>. A field is a set equipped
        with two operations (addition and multiplication) that satisfy familiar properties like
        commutativity, associativity, and the existence of inverses.
      </p>

      <Callout type="info">
        <strong>Why Fields Matter:</strong> The scalars in linear algebra come from a field. While
        you're probably most familiar with the real numbers <Math>{`\\mathbb{R}`}</Math>, the theory
        works over any field. This generality is powerful: the same theorems apply whether we work
        with real numbers, complex numbers, or even finite fields.
      </Callout>

      <h2>Definition of a Field</h2>

      <Definition title="Field">
        <p>
          A <strong>field</strong> is a set <Math>F</Math> together with two binary operations,
          addition (<Math>+</Math>) and multiplication (<Math>\cdot</Math>), satisfying the
          following axioms:
        </p>
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Addition Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>A1 (Closure):</strong> For all <Math>a, b \in F</Math>, <Math>a + b \in F</Math></li>
              <li><strong>A2 (Commutativity):</strong> <Math>a + b = b + a</Math></li>
              <li><strong>A3 (Associativity):</strong> <Math>(a + b) + c = a + (b + c)</Math></li>
              <li><strong>A4 (Identity):</strong> There exists <Math>0 \in F</Math> such that <Math>a + 0 = a</Math></li>
              <li><strong>A5 (Inverses):</strong> For each <Math>a</Math>, there exists <Math>-a</Math> such that <Math>a + (-a) = 0</Math></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Multiplication Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>M1 (Closure):</strong> For all <Math>a, b \in F</Math>, <Math>a \cdot b \in F</Math></li>
              <li><strong>M2 (Commutativity):</strong> <Math>a \cdot b = b \cdot a</Math></li>
              <li><strong>M3 (Associativity):</strong> <Math>(a \cdot b) \cdot c = a \cdot (b \cdot c)</Math></li>
              <li><strong>M4 (Identity):</strong> There exists <Math>1 \in F</Math> with <Math>1 \neq 0</Math> such that <Math>a \cdot 1 = a</Math></li>
              <li><strong>M5 (Inverses):</strong> For each <Math>a \neq 0</Math>, there exists <Math>a^{'{-1}'}</Math> such that <Math>a \cdot a^{'{-1}'} = 1</Math></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Distributive Law</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>D (Distributivity):</strong> <Math>a \cdot (b + c) = a \cdot b + a \cdot c</Math></li>
            </ul>
          </div>
        </div>
      </Definition>

      <h2>Examples of Fields</h2>

      <Example title="The Real Numbers">
        <p>
          The real numbers <Math>{`\\mathbb{R}`}</Math> with ordinary addition and multiplication form
          a field. This is the most familiar example and the one you've used throughout calculus.
        </p>
      </Example>

      <Example title="The Complex Numbers">
        <p>
          The complex numbers <Math>{`\\mathbb{C} = \\{a + bi : a, b \\in \\mathbb{R}\\}`}</Math> form
          a field where:
        </p>
        <MathBlock>{`
          (a + bi) + (c + di) = (a + c) + (b + d)i
        `}</MathBlock>
        <MathBlock>{`
          (a + bi)(c + di) = (ac - bd) + (ad + bc)i
        `}</MathBlock>
        <p className="mt-2">
          The multiplicative inverse of <Math>a + bi \neq 0</Math> is:
        </p>
        <MathBlock>{`
          (a + bi)^{-1} = \\frac{a - bi}{a^2 + b^2}
        `}</MathBlock>
      </Example>

      <Example title="The Rational Numbers">
        <p>
          The rational numbers <Math>{`\\mathbb{Q} = \\{p/q : p, q \\in \\mathbb{Z}, q \\neq 0\\}`}</Math> form
          a field with the usual operations. Note that the integers <Math>{`\\mathbb{Z}`}</Math> do
          NOT form a field because most integers lack multiplicative inverses.
        </p>
      </Example>

      <Example title="Finite Fields">
        <p>
          For any prime <Math>p</Math>, the integers modulo <Math>p</Math>, denoted <Math>{`\\mathbb{Z}_p`}</Math> or <Math>{`\\mathbb{F}_p`}</Math>,
          form a field with <Math>p</Math> elements. For example, <Math>{`\\mathbb{F}_2 = \\{0, 1\\}`}</Math> with:
        </p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Addition in <Math>{`\\mathbb{F}_2`}</Math></h4>
            <MathBlock>{`
              \\begin{array}{c|cc}
              + & 0 & 1 \\\\
              \\hline
              0 & 0 & 1 \\\\
              1 & 1 & 0
              \\end{array}
            `}</MathBlock>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Multiplication in <Math>{`\\mathbb{F}_2`}</Math></h4>
            <MathBlock>{`
              \\begin{array}{c|cc}
              \\cdot & 0 & 1 \\\\
              \\hline
              0 & 0 & 0 \\\\
              1 & 0 & 1
              \\end{array}
            `}</MathBlock>
          </div>
        </div>
      </Example>

      <h2>Key Properties of Fields</h2>

      <Theorem
        title="Uniqueness of Identities"
        proof={
          <>
            <p>
              <strong>Uniqueness of 0:</strong> Suppose both <Math>0</Math> and <Math>0'</Math> are
              additive identities. Then:
            </p>
            <MathBlock>{`0 = 0 + 0' = 0'`}</MathBlock>
            <p className="mt-2">
              <strong>Uniqueness of 1:</strong> Similarly, if <Math>1</Math> and <Math>1'</Math> are
              multiplicative identities:
            </p>
            <MathBlock>{`1 = 1 \\cdot 1' = 1'`}</MathBlock>
          </>
        }
      >
        <p>
          In any field <Math>F</Math>, the additive identity <Math>0</Math> and multiplicative
          identity <Math>1</Math> are unique.
        </p>
      </Theorem>

      <Theorem
        title="Zero Product Property"
        proof={
          <>
            <p>For any <Math>a \in F</Math>:</p>
            <MathBlock>{`a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0`}</MathBlock>
            <p className="mt-2">
              Adding <Math>-(a \cdot 0)</Math> to both sides gives <Math>0 = a \cdot 0</Math>.
            </p>
          </>
        }
      >
        <p>
          For any element <Math>a</Math> in a field <Math>F</Math>: <Math>a \cdot 0 = 0</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Cancellation Laws"
        proof={
          <>
            <p>
              <strong>Additive cancellation:</strong> If <Math>a + c = b + c</Math>, add <Math>-c</Math> to
              both sides to get <Math>a = b</Math>.
            </p>
            <p className="mt-2">
              <strong>Multiplicative cancellation:</strong> If <Math>ac = bc</Math> with <Math>c \neq 0</Math>,
              multiply both sides by <Math>c^{'{-1}'}</Math> to get <Math>a = b</Math>.
            </p>
          </>
        }
      >
        <p>
          If <Math>a + c = b + c</Math>, then <Math>a = b</Math>. If <Math>ac = bc</Math> and <Math>c \neq 0</Math>,
          then <Math>a = b</Math>.
        </p>
      </Theorem>

      <h2>Subfields</h2>

      <Definition title="Subfield">
        <p>
          A subset <Math>K \subseteq F</Math> of a field <Math>F</Math> is a <strong>subfield</strong> if
          <Math>K</Math> is itself a field under the same operations.
        </p>
      </Definition>

      <Example title="Chain of Subfields">
        <p>We have the following chain of subfields:</p>
        <MathBlock>{`\\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}`}</MathBlock>
        <p className="mt-2">
          Each field is a subfield of the next. In fact, <Math>{`\\mathbb{Q}`}</Math> is the smallest
          subfield of <Math>{`\\mathbb{R}`}</Math> (the "prime subfield").
        </p>
      </Example>

      <h2>Why This Matters for Linear Algebra</h2>

      <Callout type="success">
        <strong>The Big Picture:</strong> Throughout this course, we'll work with vector spaces
        over a field <Math>F</Math>. The elements of <Math>F</Math> are called <strong>scalars</strong>.
        While you can usually think of <Math>{`F = \\mathbb{R}`}</Math>, keeping the theory general
        reveals the algebraic essence of linear algebra and allows applications to:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Quantum mechanics (complex vector spaces)</li>
          <li>Coding theory (finite field vector spaces)</li>
          <li>Computer graphics (real and complex transformations)</li>
        </ul>
      </Callout>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>A field has two operations (addition and multiplication) satisfying 11 axioms</li>
          <li>Common examples: <Math>{`\\mathbb{Q}`}</Math>, <Math>{`\\mathbb{R}`}</Math>, <Math>{`\\mathbb{C}`}</Math>, and finite fields <Math>{`\\mathbb{F}_p`}</Math></li>
          <li>The integers <Math>{`\\mathbb{Z}`}</Math> are NOT a field (no multiplicative inverses)</li>
          <li>Field properties like cancellation laws follow from the axioms</li>
          <li>Linear algebra works over any field, not just <Math>{`\\mathbb{R}`}</Math></li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={1}
        questions={section01Quiz}
        title="Fields and Number Systems Quiz"
      />
    </LessonLayout>
  );
}
