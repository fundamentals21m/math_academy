import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section54Questions } from '../../data/quizzes';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2 className="text-2xl font-semibold mb-4">Intuitionistic Propositional Calculus</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        For centuries, no one seriously questioned Aristotle's <strong>law of the
        excluded middle</strong>: for every proposition <InlineMath>{`p`}</InlineMath>,
        either <InlineMath>{`p`}</InlineMath> or not <InlineMath>{`p`}</InlineMath>.
        It was <strong>L. E. J. Brouwer</strong> (1882–1966) who proposed dropping
        this law, creating a new foundation for constructive mathematics.
      </p>

      {/* Brouwer's Challenge */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Brouwer's Challenge</h3>

      <Callout type="info" title="The Law of Excluded Middle">
        <p>
          Classical logic accepts: for every proposition <InlineMath>{`p`}</InlineMath>,
          either <InlineMath>{`p`}</InlineMath> or <InlineMath>{`\\neg p`}</InlineMath>:
        </p>
        <MathBlock>{`p \\lor \\neg p`}</MathBlock>
        <p className="text-sm mt-2">
          Equivalently: two negations make an affirmation:{' '}
          <InlineMath>{`\\neg\\neg p \\Rightarrow p`}</InlineMath>
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        <strong>Brouwer</strong>, a topologist, observed that all nonconstructive
        arguments in mathematics depend on Aristotle's law. He proposed simply
        dropping it — at least when talking about infinite collections.
      </p>

      <Card className="mb-6">
        <CardHeader>The Surprising Result</CardHeader>
        <p className="text-dark-300 text-sm">
          If one follows Brouwer's suggestion and drops the law of excluded middle,
          one is still left with a <strong>rich logical system</strong> adequate
          for all constructive mathematics. This system is called{' '}
          <strong>intuitionistic logic</strong>.
        </p>
      </Card>

      {/* Logical Symbols */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Logical Symbols</h3>

      <p className="text-dark-200 mb-4">
        We consider five logical symbols, with the following meanings:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader><InlineMath>{`\\top`}</InlineMath> (true)</CardHeader>
          <p className="text-dark-300 text-sm">
            The proposition that is always true
          </p>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`\\bot`}</InlineMath> (false)</CardHeader>
          <p className="text-dark-300 text-sm">
            The proposition that is always false (contradiction)
          </p>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`A \\land B`}</InlineMath> (and)</CardHeader>
          <p className="text-dark-300 text-sm">
            Both A and B
          </p>
        </Card>
        <Card>
          <CardHeader><InlineMath>{`A \\lor B`}</InlineMath> (or)</CardHeader>
          <p className="text-dark-300 text-sm">
            Either A or B (or both)
          </p>
        </Card>
      </CardGrid>

      <Card className="mt-4 mb-6">
        <CardHeader><InlineMath>{`A \\Rightarrow B`}</InlineMath> (implies)</CardHeader>
        <p className="text-dark-300 text-sm">
          If A then B
        </p>
      </Card>

      <Callout type="info" title="Negation">
        <p>
          Negation is <em>defined</em> in terms of implication:
        </p>
        <MathBlock>{`\\neg A \\equiv A \\Rightarrow \\bot`}</MathBlock>
        <p className="text-sm mt-2">
          "Not A" means "A implies a contradiction."
        </p>
      </Callout>

      {/* Entailment */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Entailment Symbol</h3>

      <p className="text-dark-200 mb-4">
        We use the <strong>entailment symbol</strong> <InlineMath>{`\\vdash`}</InlineMath>,
        where:
      </p>

      <MathBlock>{`A_1, \\ldots, A_n \\vdash B`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        means that the assumptions <InlineMath>{`A_1, \\ldots, A_n`}</InlineMath> entail
        the conclusion <InlineMath>{`B`}</InlineMath>, or that{' '}
        <InlineMath>{`B`}</InlineMath> may be deduced from these assumptions.
      </p>

      <Card className="mb-6">
        <CardHeader>Notation</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            We often denote strings of formulas by Greek letters:{' '}
            <InlineMath>{`\\Gamma \\vdash B`}</InlineMath> means{' '}
            <InlineMath>{`B`}</InlineMath> may be inferred from the formulas in{' '}
            <InlineMath>{`\\Gamma`}</InlineMath>.
          </p>
          <p className="mt-2">
            Note: <InlineMath>{`\\Gamma`}</InlineMath> may be empty{' '}
            (<InlineMath>{`n = 0`}</InlineMath>) or consist of a single formula.
          </p>
        </div>
      </Card>

      {/* Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Axioms</h3>

      <Card className="mb-6">
        <CardHeader>The Intuitionistic Axioms</CardHeader>
        <div className="text-dark-300 text-sm space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <MathBlock>{`\\vdash \\top`}</MathBlock>
              <p className="text-xs">truth</p>
            </div>
            <div className="text-center">
              <MathBlock>{`\\bot \\vdash A`}</MathBlock>
              <p className="text-xs">ex falso quodlibet</p>
            </div>
            <div className="text-center">
              <MathBlock>{`A \\land B \\vdash A`}</MathBlock>
              <p className="text-xs">left projection</p>
            </div>
            <div className="text-center">
              <MathBlock>{`A \\land B \\vdash B`}</MathBlock>
              <p className="text-xs">right projection</p>
            </div>
            <div className="text-center">
              <MathBlock>{`A, B \\vdash A \\land B`}</MathBlock>
              <p className="text-xs">pairing</p>
            </div>
            <div className="text-center">
              <MathBlock>{`A \\vdash A \\lor B`}</MathBlock>
              <p className="text-xs">left injection</p>
            </div>
            <div className="text-center">
              <MathBlock>{`B \\vdash A \\lor B`}</MathBlock>
              <p className="text-xs">right injection</p>
            </div>
            <div className="text-center">
              <MathBlock>{`A, A \\Rightarrow B \\vdash B`}</MathBlock>
              <p className="text-xs">modus ponens (MP)</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Rules of Inference */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Rules of Inference</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Argument by Cases (AC)</CardHeader>
          <MathBlock>{`\\frac{\\Gamma, A \\vdash C \\quad \\Gamma, B \\vdash C}{\\Gamma, A \\lor B \\vdash C}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If C follows from A, and C follows from B, then C follows from A ∨ B.
          </p>
        </Card>
        <Card>
          <CardHeader>Deduction Rule (DR)</CardHeader>
          <MathBlock>{`\\frac{\\Gamma, A \\vdash B}{\\Gamma \\vdash A \\Rightarrow B}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If B follows from Γ together with A, then A ⇒ B follows from Γ alone.
          </p>
        </Card>
      </CardGrid>

      {/* Structural Rules */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Structural Rules (Gentzen)</h3>

      <p className="text-dark-200 mb-4">
        <strong>Gerhard Gentzen</strong> (1919–1945) formalized structural rules
        that describe the entailment symbol itself:
      </p>

      <Card className="mb-6">
        <div className="text-dark-300 text-sm space-y-3">
          <div className="flex items-center gap-4">
            <InlineMath>{`A \\vdash A`}</InlineMath>
            <span className="text-xs">(identity: inferring a formula from itself)</span>
          </div>
          <div className="flex items-center gap-4">
            <InlineMath>{`\\frac{\\Gamma, A, B, \\Delta \\vdash C}{\\Gamma, B, A, \\Delta \\vdash C}`}</InlineMath>
            <span className="text-xs">(exchange: interchanging assumptions)</span>
          </div>
          <div className="flex items-center gap-4">
            <InlineMath>{`\\frac{\\Gamma \\vdash B}{\\Gamma, A \\vdash B}`}</InlineMath>
            <span className="text-xs">(weakening: adding superfluous assumptions)</span>
          </div>
          <div className="flex items-center gap-4">
            <InlineMath>{`\\frac{\\Gamma, A, A \\vdash B}{\\Gamma, A \\vdash B}`}</InlineMath>
            <span className="text-xs">(contraction: merging duplicate assumptions)</span>
          </div>
        </div>
      </Card>

      {/* Example Proofs */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Example Proofs</h3>

      <Card className="mb-6">
        <CardHeader>Example 1: A ⊢ ¬¬A</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">To prove that <InlineMath>{`A \\vdash \\neg\\neg A`}</InlineMath>:</p>
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; given</p>
            <p>2. A ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>3. ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 1,2</p>
            <p>4. (A ⇒ ⊥) ⇒ ⊥ &nbsp; DR 2,3</p>
          </div>
          <p className="mt-2 text-xs">
            Thus <InlineMath>{`A \\vdash (A \\Rightarrow \\bot) \\Rightarrow \\bot`}</InlineMath>,
            i.e., <InlineMath>{`A \\vdash \\neg\\neg A`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Example 2: A ⇒ B ⊢ ¬B ⇒ ¬A (Contraposition)</CardHeader>
        <div className="text-dark-300 text-sm">
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. A ⇒ B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; given</p>
            <p>2. B ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>3. A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>4. B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 1,3</p>
            <p>5. ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 2,4</p>
            <p>6. A ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DR 3,5</p>
            <p>7. ¬B ⇒ ¬A &nbsp;&nbsp;&nbsp;&nbsp; DR 2,6</p>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Example 3: ⊢ ¬¬(A ∨ ¬A)</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            While <InlineMath>{`A \\lor \\neg A`}</InlineMath> is <em>not</em> provable
            intuitionistically, its double negation <em>is</em>:
          </p>
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. (A ∨ ¬A) ⇒ ⊥ &nbsp; assumed</p>
            <p>2. A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>3. A ∨ ¬A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; axiom A ⊢ A ∨ B</p>
            <p>4. ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 1,3</p>
            <p>5. A ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DR 2,4</p>
            <p>6. A ∨ ¬A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; axiom B ⊢ A ∨ B</p>
            <p>7. ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 1,6</p>
            <p>8. ((A ∨ ¬A) ⇒ ⊥) ⇒ ⊥ &nbsp; DR 1,7</p>
          </div>
        </div>
      </Card>

      {/* Classical vs Intuitionistic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Classical vs. Intuitionistic</h3>

      <Callout type="warning" title="What Doesn't Hold Intuitionistically">
        <p>
          In classical logic, truth tables establish axioms. In intuitionistic
          logic, we cannot use truth tables — they would also establish:
        </p>
        <MathBlock>{`A \\lor \\neg A \\quad \\text{and} \\quad \\neg\\neg A \\Rightarrow A`}</MathBlock>
        <p className="text-sm mt-2">
          These are <strong>not provable</strong> in intuitionistic logic!
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Key Differences</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>Classically valid, intuitionistically invalid:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><InlineMath>{`p \\lor \\neg p`}</InlineMath> (excluded middle)</li>
            <li><InlineMath>{`\\neg\\neg p \\Rightarrow p`}</InlineMath> (double negation elimination)</li>
            <li><InlineMath>{`((p \\Rightarrow q) \\Rightarrow p) \\Rightarrow p`}</InlineMath> (Peirce's law)</li>
          </ul>
          <p className="mt-3">
            <strong>Valid in both:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><InlineMath>{`p \\Rightarrow \\neg\\neg p`}</InlineMath></li>
            <li><InlineMath>{`\\neg\\neg\\neg p \\Rightarrow \\neg p`}</InlineMath></li>
            <li><InlineMath>{`\\neg\\neg(p \\lor \\neg p)`}</InlineMath></li>
          </ul>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>
            • <strong>Brouwer</strong> (1882–1966): proposed dropping the law of
            excluded middle
          </li>
          <li>
            • <strong>Intuitionistic logic</strong>: logic without{' '}
            <InlineMath>{`p \\lor \\neg p`}</InlineMath>
          </li>
          <li>
            • <strong>Negation</strong>:{' '}
            <InlineMath>{`\\neg A \\equiv A \\Rightarrow \\bot`}</InlineMath>
          </li>
          <li>
            • <strong>Key rules</strong>: Modus Ponens (MP), Argument by Cases (AC),
            Deduction Rule (DR)
          </li>
          <li>
            • <strong>Gentzen</strong>: formalized structural rules (identity,
            exchange, weakening, contraction)
          </li>
          <li>
            • <strong>Provable</strong>: <InlineMath>{`A \\vdash \\neg\\neg A`}</InlineMath>
          </li>
          <li>
            • <strong>Not provable</strong>:{' '}
            <InlineMath>{`\\neg\\neg A \\vdash A`}</InlineMath>
          </li>
          <li>
            • Intuitionistic logic is <strong>adequate for constructive
            mathematics</strong>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={54} questions={section54Questions} />
    </LessonLayout>
  );
}
