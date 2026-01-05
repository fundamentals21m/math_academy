import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section55Questions } from '../../data/quizzes';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2 className="text-2xl font-semibold mb-4">How to Interpret Intuitionistic Logic</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        To explain the subtle difference between intuitionistic and classical logic,
        we present an interpretation due to <strong>Brouwer</strong>,{' '}
        <strong>Heyting</strong>, and <strong>Kolmogorov</strong>. This interpretation
        reveals a remarkable connection between logic, set theory, and arithmetic.
      </p>

      {/* BHK Interpretation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The BHK Interpretation</h3>

      <p className="text-dark-200 mb-4">
        The <strong>Brouwer-Heyting-Kolmogorov (BHK) interpretation</strong> explains
        logical connectives in terms of <em>reasons</em> for a formula. A reason for{' '}
        <InlineMath>{`A`}</InlineMath> may be thought of as a proof of{' '}
        <InlineMath>{`A`}</InlineMath> from some suitable assumption.
      </p>

      <Callout type="info" title="Reasons for Formulas">
        <ul className="space-y-2">
          <li>
            • There is exactly <strong>one reason</strong> for{' '}
            <InlineMath>{`\\top`}</InlineMath> (namely, quoting the axiom)
          </li>
          <li>
            • There is <strong>no reason</strong> for <InlineMath>{`\\bot`}</InlineMath>
          </li>
          <li>
            • A reason for <InlineMath>{`A \\land B`}</InlineMath> consists of a
            reason for <InlineMath>{`A`}</InlineMath> <strong>and</strong> a reason
            for <InlineMath>{`B`}</InlineMath>
          </li>
          <li>
            • A reason for <InlineMath>{`A \\lor B`}</InlineMath> is a reason for{' '}
            <InlineMath>{`A`}</InlineMath> <strong>or</strong> a reason for{' '}
            <InlineMath>{`B`}</InlineMath>
          </li>
          <li>
            • A reason for <InlineMath>{`B \\Rightarrow C`}</InlineMath> is a{' '}
            <strong>rule</strong> for converting a reason for{' '}
            <InlineMath>{`B`}</InlineMath> into a reason for{' '}
            <InlineMath>{`C`}</InlineMath>
          </li>
        </ul>
      </Callout>

      {/* Correspondence with Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Correspondence with Set Theory</h3>

      <p className="text-dark-200 mb-4">
        Compare the statements about reasons with the following statements about{' '}
        <strong>sets</strong>:
      </p>

      <Card className="mb-6">
        <CardHeader>Statements about Sets</CardHeader>
        <ul className="text-dark-300 text-sm space-y-2">
          <li>• There is exactly <strong>one element</strong> of 1</li>
          <li>• There is <strong>no element</strong> of 0</li>
          <li>
            • An element of <InlineMath>{`A \\times B`}</InlineMath> is a{' '}
            <strong>pair</strong> of elements of <InlineMath>{`A`}</InlineMath> and{' '}
            <InlineMath>{`B`}</InlineMath>
          </li>
          <li>
            • An element of <InlineMath>{`A + B`}</InlineMath> is an element of{' '}
            <InlineMath>{`A`}</InlineMath> <strong>or</strong> an element of{' '}
            <InlineMath>{`B`}</InlineMath>
          </li>
          <li>
            • An element of <InlineMath>{`C^B`}</InlineMath> is a{' '}
            <strong>function</strong> that converts an element of{' '}
            <InlineMath>{`B`}</InlineMath> into an element of{' '}
            <InlineMath>{`C`}</InlineMath>
          </li>
        </ul>
      </Card>

      <Callout type="success" title="Logic-Set Correspondence">
        <p>Comparing intuitionistic logic with set arithmetic, we have:</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div>
            <p className="font-semibold">Logic</p>
          </div>
          <div>
            <p className="font-semibold">Sets</p>
          </div>
          <div><InlineMath>{`\\top`}</InlineMath></div>
          <div><InlineMath>{`1`}</InlineMath></div>
          <div><InlineMath>{`\\bot`}</InlineMath></div>
          <div><InlineMath>{`0`}</InlineMath></div>
          <div><InlineMath>{`A \\land B`}</InlineMath></div>
          <div><InlineMath>{`A \\times B`}</InlineMath></div>
          <div><InlineMath>{`A \\lor B`}</InlineMath></div>
          <div><InlineMath>{`A + B`}</InlineMath></div>
          <div><InlineMath>{`B \\Rightarrow C`}</InlineMath></div>
          <div><InlineMath>{`C^B`}</InlineMath></div>
        </div>
      </Callout>

      {/* Deductions as Mappings */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Deductions as Mappings</h3>

      <p className="text-dark-200 mb-4">
        A <strong>deduction</strong> from <InlineMath>{`A`}</InlineMath> to{' '}
        <InlineMath>{`B`}</InlineMath>, namely an argument showing{' '}
        <InlineMath>{`A \\vdash B`}</InlineMath>, corresponds to a{' '}
        <strong>mapping</strong> <InlineMath>{`A \\to B`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Logical Equivalence and Isomorphism</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            If there is a deduction from <InlineMath>{`A`}</InlineMath> to{' '}
            <InlineMath>{`B`}</InlineMath> and from <InlineMath>{`B`}</InlineMath> to{' '}
            <InlineMath>{`A`}</InlineMath>, we write{' '}
            <InlineMath>{`A \\dashv\\vdash B`}</InlineMath>.
          </p>
          <p>
            This corresponds to mappings <InlineMath>{`A \\to B`}</InlineMath> and{' '}
            <InlineMath>{`B \\to A`}</InlineMath>, and we may write{' '}
            <InlineMath>{`A \\leftrightarrow B`}</InlineMath>.
          </p>
          <p>
            Frequently these mappings are inverse to one another, giving a{' '}
            <strong>one-to-one correspondence</strong>:{' '}
            <InlineMath>{`A \\cong B`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Key Equivalences */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Equivalences</h3>

      <p className="text-dark-200 mb-4">
        The following intuitionistic equivalences correspond to set-theoretic
        isomorphisms:
      </p>

      <CardGrid columns={1}>
        <Card>
          <CardHeader>Distributivity of Implication over Conjunction</CardHeader>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-dark-300 text-sm mb-2">Logic:</p>
              <MathBlock>{`C \\Rightarrow (A \\land B) \\dashv\\vdash (C \\Rightarrow A) \\land (C \\Rightarrow B)`}</MathBlock>
            </div>
            <div>
              <p className="text-dark-300 text-sm mb-2">Sets:</p>
              <MathBlock>{`(A \\times B)^C \\cong A^C \\times B^C`}</MathBlock>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>Currying (Exponential Law)</CardHeader>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-dark-300 text-sm mb-2">Logic:</p>
              <MathBlock>{`A \\Rightarrow (B \\Rightarrow C) \\dashv\\vdash (A \\land B) \\Rightarrow C`}</MathBlock>
            </div>
            <div>
              <p className="text-dark-300 text-sm mb-2">Sets:</p>
              <MathBlock>{`(C^B)^A \\cong C^{A \\times B}`}</MathBlock>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>Distributivity over Disjunction</CardHeader>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-dark-300 text-sm mb-2">Logic:</p>
              <MathBlock>{`(A \\lor B) \\Rightarrow C \\dashv\\vdash (A \\Rightarrow C) \\land (B \\Rightarrow C)`}</MathBlock>
            </div>
            <div>
              <p className="text-dark-300 text-sm mb-2">Sets:</p>
              <MathBlock>{`C^{A+B} \\cong C^A \\times C^B`}</MathBlock>
            </div>
          </div>
        </Card>
      </CardGrid>

      {/* Laws of Arithmetic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Laws of Arithmetic</h3>

      <p className="text-dark-200 mb-4">
        The set-theoretic isomorphisms are generalizations of familiar laws of
        arithmetic:
      </p>

      <Card className="mb-6">
        <CardHeader>Exponential Laws</CardHeader>
        <div className="text-dark-300 text-sm space-y-3">
          <div className="flex items-center justify-between">
            <InlineMath>{`(A \\times B)^C \\cong A^C \\times B^C`}</InlineMath>
            <span>generalizes</span>
            <InlineMath>{`(a \\times b)^c = a^c \\times b^c`}</InlineMath>
          </div>
          <div className="flex items-center justify-between">
            <InlineMath>{`(C^B)^A \\cong C^{A \\times B}`}</InlineMath>
            <span>generalizes</span>
            <InlineMath>{`(c^b)^a = c^{a \\times b}`}</InlineMath>
          </div>
          <div className="flex items-center justify-between">
            <InlineMath>{`C^{A+B} \\cong C^A \\times C^B`}</InlineMath>
            <span>generalizes</span>
            <InlineMath>{`c^{a+b} = c^a \\times c^b`}</InlineMath>
          </div>
        </div>
      </Card>

      <Callout type="info" title="Remarkable Unity">
        <p>
          One cannot but be impressed by the <strong>remarkable unity</strong>{' '}
          pervading logic, set theory, and arithmetic. The same algebraic
          structures appear in all three domains!
        </p>
      </Callout>

      {/* Important Warning */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Word of Warning</h3>

      <p className="text-dark-200 mb-4">
        <InlineMath>{`A \\leftrightarrow B`}</InlineMath> does not always mean{' '}
        <InlineMath>{`A \\cong B`}</InlineMath>. For example, the intuitionistic
        equivalence:
      </p>

      <MathBlock>{`A \\Rightarrow (B \\Rightarrow A) \\dashv\\vdash \\top`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        translates into:
      </p>

      <MathBlock>{`(A^B)^A \\leftrightarrow 1`}</MathBlock>

      <p className="text-dark-200 mb-4">
        with mappings in both directions. But the 1-to-1 correspondence{' '}
        <InlineMath>{`(A^B)^A \\cong 1`}</InlineMath> holds only if{' '}
        <InlineMath>{`A \\cong 1`}</InlineMath> or{' '}
        <InlineMath>{`A \\cong 0`}</InlineMath> or{' '}
        <InlineMath>{`B \\cong 0`}</InlineMath>.
      </p>

      {/* Why Not Classical? */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Not Classical Logic?</h3>

      <Callout type="warning" title="The Problem with A ∨ B">
        <p>
          The interpretation of <InlineMath>{`A \\lor B`}</InlineMath> advocated
          here does <strong>not work for classical logic</strong>.
        </p>
        <p className="mt-2">
          As we see with Gödel's theorems, there is a formula{' '}
          <InlineMath>{`G`}</InlineMath> in number theory for which one can prove
          neither <InlineMath>{`G`}</InlineMath> nor{' '}
          <InlineMath>{`\\neg G`}</InlineMath>.
        </p>
        <p className="mt-2">
          According to our interpretation of{' '}
          <InlineMath>{`A \\lor B`}</InlineMath>,{' '}
          <InlineMath>{`G \\lor \\neg G`}</InlineMath> has no proof.
        </p>
        <p className="mt-2">
          Yet classically, <InlineMath>{`G \\lor \\neg G`}</InlineMath> is just
          a case of Aristotle's law of excluded middle — quoting this axiom would
          constitute a "proof."
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Intuitionistic vs Classical Disjunction</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>Intuitionistic:</strong> A proof of{' '}
            <InlineMath>{`A \\lor B`}</InlineMath> requires either a proof of{' '}
            <InlineMath>{`A`}</InlineMath> or a proof of{' '}
            <InlineMath>{`B`}</InlineMath>.
          </p>
          <p>
            <strong>Classical:</strong>{' '}
            <InlineMath>{`A \\lor \\neg A`}</InlineMath> is always provable by
            quoting the axiom of excluded middle, even when we cannot prove{' '}
            <InlineMath>{`A`}</InlineMath> or prove{' '}
            <InlineMath>{`\\neg A`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>
            • <strong>BHK interpretation</strong>: logical connectives explained
            via "reasons" (proofs)
          </li>
          <li>
            • <strong>Correspondence</strong>:{' '}
            <InlineMath>{`\\top \\leftrightarrow 1`}</InlineMath>,{' '}
            <InlineMath>{`\\bot \\leftrightarrow 0`}</InlineMath>,{' '}
            <InlineMath>{`\\land \\leftrightarrow \\times`}</InlineMath>,{' '}
            <InlineMath>{`\\lor \\leftrightarrow +`}</InlineMath>,{' '}
            <InlineMath>{`\\Rightarrow \\leftrightarrow \\text{exp}`}</InlineMath>
          </li>
          <li>
            • <strong>Deductions</strong> <InlineMath>{`A \\vdash B`}</InlineMath>{' '}
            correspond to <strong>mappings</strong>{' '}
            <InlineMath>{`A \\to B`}</InlineMath>
          </li>
          <li>
            • <strong>Logical equivalences</strong> correspond to{' '}
            <strong>set isomorphisms</strong>
          </li>
          <li>
            • Set isomorphisms generalize <strong>laws of arithmetic</strong>:
            e.g., <InlineMath>{`c^{a+b} = c^a \\cdot c^b`}</InlineMath>
          </li>
          <li>
            • <strong>Remarkable unity</strong> between logic, sets, and arithmetic
          </li>
          <li>
            • Classical <InlineMath>{`A \\lor B`}</InlineMath> doesn't match
            this interpretation (Gödel's <InlineMath>{`G`}</InlineMath>)
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={55} questions={section55Questions} />
    </LessonLayout>
  );
}
