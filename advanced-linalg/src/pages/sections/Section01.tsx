import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
        you're probably most familiar with the real numbers <InlineMath>{`\\mathbb{R}`}</InlineMath>, the theory
        works over any field. This generality is powerful: the same theorems apply whether we work
        with real numbers, complex numbers, or even finite fields.
      </Callout>

      <h2>Definition of a Field</h2>

      <Definition title="Field">
        <p>
          A <strong>field</strong> is a set <InlineMath>{`F`}</InlineMath> together with two binary operations,
          addition (<InlineMath>{`+`}</InlineMath>) and multiplication (<InlineMath>{`\\cdot`}</InlineMath>), satisfying the
          following axioms:
        </p>
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Addition Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>A1 (Closure):</strong> For all <InlineMath>{`a, b \\in F`}</InlineMath>, <InlineMath>{`a + b \\in F`}</InlineMath></li>
              <li><strong>A2 (Commutativity):</strong> <InlineMath>{`a + b = b + a`}</InlineMath></li>
              <li><strong>A3 (Associativity):</strong> <InlineMath>{`(a + b) + c = a + (b + c)`}</InlineMath></li>
              <li><strong>A4 (Identity):</strong> There exists <InlineMath>{`0 \\in F`}</InlineMath> such that <InlineMath>{`a + 0 = a`}</InlineMath></li>
              <li><strong>A5 (Inverses):</strong> For each <InlineMath>{`a`}</InlineMath>, there exists <InlineMath>{`-a`}</InlineMath> such that <InlineMath>{`a + (-a) = 0`}</InlineMath></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Multiplication Axioms</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>M1 (Closure):</strong> For all <InlineMath>{`a, b \\in F`}</InlineMath>, <InlineMath>{`a \\cdot b \\in F`}</InlineMath></li>
              <li><strong>M2 (Commutativity):</strong> <InlineMath>{`a \\cdot b = b \\cdot a`}</InlineMath></li>
              <li><strong>M3 (Associativity):</strong> <InlineMath>{`(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)`}</InlineMath></li>
              <li><strong>M4 (Identity):</strong> There exists <InlineMath>{`1 \\in F`}</InlineMath> with <InlineMath>{`1 \\neq 0`}</InlineMath> such that <InlineMath>{`a \\cdot 1 = a`}</InlineMath></li>
              <li><strong>M5 (Inverses):</strong> For each <InlineMath>{`a \\neq 0`}</InlineMath>, there exists <InlineMath>{`a^{-1}`}</InlineMath> such that <InlineMath>{`a \\cdot a^{-1} = 1`}</InlineMath></li>
            </ul>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Distributive Law</h4>
            <ul className="list-disc list-inside text-dark-300 space-y-1 text-sm">
              <li><strong>D (Distributivity):</strong> <InlineMath>{`a \\cdot (b + c) = a \\cdot b + a \\cdot c`}</InlineMath></li>
            </ul>
          </div>
        </div>
      </Definition>

      <h2>Examples of Fields</h2>

      <Example title="The Real Numbers">
        <p>
          The real numbers <InlineMath>{`\\mathbb{R}`}</InlineMath> with ordinary addition and multiplication form
          a field. This is the most familiar example and the one you've used throughout calculus.
        </p>
      </Example>

      <Example title="The Complex Numbers">
        <p>
          The complex numbers <InlineMath>{`\\mathbb{C} = \\{a + bi : a, b \\in \\mathbb{R}\\}`}</InlineMath> form
          a field where:
        </p>
        <MathBlock>{`
          (a + bi) + (c + di) = (a + c) + (b + d)i
        `}</MathBlock>
        <MathBlock>{`
          (a + bi)(c + di) = (ac - bd) + (ad + bc)i
        `}</MathBlock>
        <p className="mt-2">
          The multiplicative inverse of <InlineMath>{`a + bi \\neq 0`}</InlineMath> is:
        </p>
        <MathBlock>{`
          (a + bi)^{-1} = \\frac{a - bi}{a^2 + b^2}
        `}</MathBlock>
      </Example>

      <Example title="The Rational Numbers">
        <p>
          The rational numbers <InlineMath>{`\\mathbb{Q} = \\{p/q : p, q \\in \\mathbb{Z}, q \\neq 0\\}`}</InlineMath> form
          a field with the usual operations. Note that the integers <InlineMath>{`\\mathbb{Z}`}</InlineMath> do
          NOT form a field because most integers lack multiplicative inverses.
        </p>
      </Example>

      <Example title="Finite Fields">
        <p>
          For any prime <InlineMath>{`p`}</InlineMath>, the integers modulo <InlineMath>{`p`}</InlineMath>, denoted <InlineMath>{`\\mathbb{Z}_p`}</InlineMath> or <InlineMath>{`\\mathbb{F}_p`}</InlineMath>,
          form a field with <InlineMath>{`p`}</InlineMath> elements. For example, <InlineMath>{`\\mathbb{F}_2 = \\{0, 1\\}`}</InlineMath> with:
        </p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Addition in <InlineMath>{`\\mathbb{F}_2`}</InlineMath></h4>
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
            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Multiplication in <InlineMath>{`\\mathbb{F}_2`}</InlineMath></h4>
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
              <strong>Uniqueness of 0:</strong> Suppose both <InlineMath>{`0`}</InlineMath> and <InlineMath>{`0'`}</InlineMath> are
              additive identities. Then:
            </p>
            <MathBlock>{`0 = 0 + 0' = 0'`}</MathBlock>
            <p className="mt-2">
              <strong>Uniqueness of 1:</strong> Similarly, if <InlineMath>{`1`}</InlineMath> and <InlineMath>{`1'`}</InlineMath> are
              multiplicative identities:
            </p>
            <MathBlock>{`1 = 1 \\cdot 1' = 1'`}</MathBlock>
          </>
        }
      >
        <p>
          In any field <InlineMath>{`F`}</InlineMath>, the additive identity <InlineMath>{`0`}</InlineMath> and multiplicative
          identity <InlineMath>{`1`}</InlineMath> are unique.
        </p>
      </Theorem>

      <Theorem
        title="Zero Product Property"
        proof={
          <>
            <p>For any <InlineMath>{`a \\in F`}</InlineMath>:</p>
            <MathBlock>{`a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0`}</MathBlock>
            <p className="mt-2">
              Adding <InlineMath>{`-(a \\cdot 0)`}</InlineMath> to both sides gives <InlineMath>{`0 = a \\cdot 0`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any element <InlineMath>{`a`}</InlineMath> in a field <InlineMath>{`F`}</InlineMath>: <InlineMath>{`a \\cdot 0 = 0`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Cancellation Laws"
        proof={
          <>
            <p>
              <strong>Additive cancellation:</strong> If <InlineMath>{`a + c = b + c`}</InlineMath>, add <InlineMath>{`-c`}</InlineMath> to
              both sides to get <InlineMath>{`a = b`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Multiplicative cancellation:</strong> If <InlineMath>{`ac = bc`}</InlineMath> with <InlineMath>{`c \\neq 0`}</InlineMath>,
              multiply both sides by <InlineMath>{`c^{-1}`}</InlineMath> to get <InlineMath>{`a = b`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`a + c = b + c`}</InlineMath>, then <InlineMath>{`a = b`}</InlineMath>. If <InlineMath>{`ac = bc`}</InlineMath> and <InlineMath>{`c \\neq 0`}</InlineMath>,
          then <InlineMath>{`a = b`}</InlineMath>.
        </p>
      </Theorem>

      <h2>Subfields</h2>

      <Definition title="Subfield">
        <p>
          A subset <InlineMath>{`K \\subseteq F`}</InlineMath> of a field <InlineMath>{`F`}</InlineMath> is a <strong>subfield</strong> if
          <InlineMath>{`K`}</InlineMath> is itself a field under the same operations.
        </p>
      </Definition>

      <Example title="Chain of Subfields">
        <p>We have the following chain of subfields:</p>
        <MathBlock>{`\\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}`}</MathBlock>
        <p className="mt-2">
          Each field is a subfield of the next. In fact, <InlineMath>{`\\mathbb{Q}`}</InlineMath> is the smallest
          subfield of <InlineMath>{`\\mathbb{R}`}</InlineMath> (the "prime subfield").
        </p>
      </Example>

      <h2>Why This Matters for Linear Algebra</h2>

      <Callout type="success">
        <strong>The Big Picture:</strong> Throughout this course, we'll work with vector spaces
        over a field <InlineMath>{`F`}</InlineMath>. The elements of <InlineMath>{`F`}</InlineMath> are called <strong>scalars</strong>.
        While you can usually think of <InlineMath>{`F = \\mathbb{R}`}</InlineMath>, keeping the theory general
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
          <li>Common examples: <InlineMath>{`\\mathbb{Q}`}</InlineMath>, <InlineMath>{`\\mathbb{R}`}</InlineMath>, <InlineMath>{`\\mathbb{C}`}</InlineMath>, and finite fields <InlineMath>{`\\mathbb{F}_p`}</InlineMath></li>
          <li>The integers <InlineMath>{`\\mathbb{Z}`}</InlineMath> are NOT a field (no multiplicative inverses)</li>
          <li>Field properties like cancellation laws follow from the axioms</li>
          <li>Linear algebra works over any field, not just <InlineMath>{`\\mathbb{R}`}</InlineMath></li>
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
