import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section56Questions } from '../../data/quizzes';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2 className="text-2xl font-semibold mb-4">Intuitionistic Predicate Calculus</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The propositional calculus deals with logical connectives. To handle
        statements like "for all x" and "there exists x," we need the{' '}
        <strong>predicate calculus</strong>, which introduces{' '}
        <strong>quantifiers</strong> over variables.
      </p>

      {/* Free and Bound Variables */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Free and Bound Variables</h3>

      <p className="text-dark-200 mb-4">
        We deal with formulas <InlineMath>{`A`}</InlineMath> which contain{' '}
        <strong>free variables</strong>. To indicate which variables may be
        present, we write <InlineMath>{`A(x)`}</InlineMath> or{' '}
        <InlineMath>{`A(x, y)`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Examples</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <InlineMath>{`x^2 + 2 = 0`}</InlineMath> — the variable{' '}
            <InlineMath>{`x`}</InlineMath> is <strong>free</strong>
          </p>
          <p>
            <InlineMath>{`xy + x = y`}</InlineMath> — both{' '}
            <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath> are{' '}
            <strong>free</strong>
          </p>
        </div>
      </Card>

      <Callout type="info" title="Quantifiers">
        <p>
          From <InlineMath>{`A(x)`}</InlineMath> one may form:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <InlineMath>{`\\forall x \\, A(x)`}</InlineMath> — "<strong>for all</strong>{' '}
            <InlineMath>{`x`}</InlineMath>, <InlineMath>{`A(x)`}</InlineMath> holds"
          </li>
          <li>
            <InlineMath>{`\\exists x \\, A(x)`}</InlineMath> — "<strong>for some</strong>{' '}
            <InlineMath>{`x`}</InlineMath>, <InlineMath>{`A(x)`}</InlineMath> holds"
          </li>
        </ul>
        <p className="text-sm mt-2">
          In these formulas, <InlineMath>{`x`}</InlineMath> is no longer free — it is{' '}
          <strong>bound</strong> to the quantifier.
        </p>
      </Callout>

      {/* Substitution */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Substitution</h3>

      <p className="text-dark-200 mb-4">
        From <InlineMath>{`A(x)`}</InlineMath> one may obtain{' '}
        <InlineMath>{`A(t)`}</InlineMath>, the result of substituting the term{' '}
        <InlineMath>{`t`}</InlineMath> for <InlineMath>{`x`}</InlineMath>. Here{' '}
        <InlineMath>{`t`}</InlineMath> may be 5 or <InlineMath>{`y`}</InlineMath> or{' '}
        <InlineMath>{`x + 3y`}</InlineMath> — even <InlineMath>{`x`}</InlineMath> itself.
      </p>

      <Callout type="warning" title="Substitutability Restriction">
        <p>
          However, if <InlineMath>{`A(x)`}</InlineMath> is{' '}
          <InlineMath>{`\\exists y \\, B(x, y)`}</InlineMath>, we are{' '}
          <strong>not</strong> supposed to substitute <InlineMath>{`y`}</InlineMath> or{' '}
          <InlineMath>{`x + 3y`}</InlineMath> for <InlineMath>{`x`}</InlineMath>,
          because <InlineMath>{`y`}</InlineMath> would become captured.
        </p>
        <p className="text-sm mt-2">
          <strong>Definition:</strong> <InlineMath>{`t`}</InlineMath> is{' '}
          <em>substitutable</em> for <InlineMath>{`x`}</InlineMath> in{' '}
          <InlineMath>{`A(x)`}</InlineMath> provided any free variable in{' '}
          <InlineMath>{`t`}</InlineMath> remains free in{' '}
          <InlineMath>{`A(t)`}</InlineMath>.
        </p>
      </Callout>

      {/* Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Axioms for Quantifiers</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Universal Specification (US)</CardHeader>
          <MathBlock>{`\\forall x \\, A(x) \\vdash A(t)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If something holds for all <InlineMath>{`x`}</InlineMath>, it holds
            for any specific <InlineMath>{`t`}</InlineMath>.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            (requires: <InlineMath>{`t`}</InlineMath> substitutable for{' '}
            <InlineMath>{`x`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>Existential Generalization (EG)</CardHeader>
          <MathBlock>{`A(t) \\vdash \\exists x \\, A(x)`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If something holds for a specific <InlineMath>{`t`}</InlineMath>,
            then it holds for some <InlineMath>{`x`}</InlineMath>.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            (requires: <InlineMath>{`t`}</InlineMath> substitutable for{' '}
            <InlineMath>{`x`}</InlineMath>)
          </p>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Why the Restriction Matters</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Without the substitutability restriction on US, we could infer:
          </p>
          <MathBlock>{`\\forall x \\, \\exists y \\, B(x, y) \\vdash \\exists y \\, B(y, y)`}</MathBlock>
          <p className="mt-2">
            From "everybody blames somebody" we could incorrectly conclude that
            "somebody blames himself."
          </p>
        </div>
      </Card>

      {/* Rules of Inference */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Rules of Inference</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Universal Generalization (UG)</CardHeader>
          <MathBlock>{`\\frac{\\Gamma \\vdash A(x)}{\\Gamma \\vdash \\forall x \\, A(x)}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If <InlineMath>{`A(x)`}</InlineMath> can be derived without assumptions
            about <InlineMath>{`x`}</InlineMath>, then{' '}
            <InlineMath>{`\\forall x \\, A(x)`}</InlineMath> holds.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            (requires: <InlineMath>{`x`}</InlineMath> not free in{' '}
            <InlineMath>{`\\Gamma`}</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader>Existential Specification (ES)</CardHeader>
          <MathBlock>{`\\frac{\\Gamma, A(x) \\vdash B}{\\Gamma, \\exists x \\, A(x) \\vdash B}`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            If <InlineMath>{`B`}</InlineMath> follows from an arbitrary{' '}
            <InlineMath>{`A(x)`}</InlineMath>, then <InlineMath>{`B`}</InlineMath>{' '}
            follows from <InlineMath>{`\\exists x \\, A(x)`}</InlineMath>.
          </p>
          <p className="text-dark-400 text-xs mt-1">
            (requires: <InlineMath>{`x`}</InlineMath> not free in{' '}
            <InlineMath>{`\\Gamma`}</InlineMath> or <InlineMath>{`B`}</InlineMath>)
          </p>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Why UG Requires the Restriction</CardHeader>
        <div className="text-dark-300 text-sm">
          <p>
            Without the restriction on UG, from "x is afraid" we could infer
            "everyone is afraid."
          </p>
        </div>
      </Card>

      {/* Example Proofs */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Example Proofs</h3>

      <Card className="mb-6">
        <CardHeader>Example 1: ∀x(F(x) ∧ G(x)) ⊢ ∀xF(x) ∧ ∀xG(x)</CardHeader>
        <div className="text-dark-300 text-sm">
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. ∀x(F(x) ∧ G(x)) &nbsp;&nbsp; given</p>
            <p>2. F(x) ∧ G(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; US 1</p>
            <p>3. F(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; axiom for ∧, 2</p>
            <p>4. ∀xF(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UG 3 (x not free in 1)</p>
            <p>5. G(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; axiom for ∧, 2</p>
            <p>6. ∀xG(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UG 5 (x not free in 1)</p>
            <p>7. ∀xF(x) ∧ ∀xG(x) &nbsp; axiom for ∧, 4,6</p>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Example 2: ∃y∀xF(x,y) ⊢ ∀x∃yF(x,y)</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            If there exists a <InlineMath>{`y`}</InlineMath> that works for all{' '}
            <InlineMath>{`x`}</InlineMath>, then for each{' '}
            <InlineMath>{`x`}</InlineMath> there exists such a{' '}
            <InlineMath>{`y`}</InlineMath>.
          </p>
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. ∃y∀xF(x,y) &nbsp;&nbsp;&nbsp;&nbsp; given</p>
            <p>2. ∀xF(x,y) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>3. F(x,y) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; US 2</p>
            <p>4. ∃yF(x,y) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EG 3</p>
            <p>5. ∃yF(x,y) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ES 4 (y not free in 4)</p>
            <p>6. ∀x∃yF(x,y) &nbsp;&nbsp;&nbsp;&nbsp; UG 5 (x not free in 1)</p>
          </div>
          <p className="mt-2 text-xs">
            Note: The converse does <strong>not</strong> hold! "For every person
            there exists someone they love" does not imply "there exists someone
            whom everyone loves."
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Example 3: ¬∃xF(x) ⊢ ∀x¬F(x)</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            "Nothing has property F" implies "everything lacks property F."
          </p>
          <div className="font-mono text-xs space-y-1 bg-dark-900 p-3 rounded">
            <p>1. ∃xF(x) ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp; given</p>
            <p>2. F(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; assumed</p>
            <p>3. ∃xF(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EG 2</p>
            <p>4. ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MP 1,3</p>
            <p>5. F(x) ⇒ ⊥ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DR 2,4</p>
            <p>6. ∀x(F(x) ⇒ ⊥) &nbsp;&nbsp; UG 5 (x not free in 1)</p>
          </div>
        </div>
      </Card>

      {/* Important Relationships */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Relationships</h3>

      <Callout type="success" title="Intuitionistically Provable">
        <div className="space-y-2">
          <p><InlineMath>{`\\forall x(F(x) \\land G(x)) \\dashv\\vdash \\forall x F(x) \\land \\forall x G(x)`}</InlineMath></p>
          <p><InlineMath>{`\\exists y \\forall x F(x,y) \\vdash \\forall x \\exists y F(x,y)`}</InlineMath> (but not converse!)</p>
          <p><InlineMath>{`\\neg \\exists x F(x) \\vdash \\forall x \\neg F(x)`}</InlineMath></p>
          <p><InlineMath>{`\\forall x \\neg F(x) \\vdash \\neg\\neg \\exists x F(x)`}</InlineMath> (classically: <InlineMath>{`\\vdash \\exists x F(x)`}</InlineMath>)</p>
        </div>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Classical vs Intuitionistic</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>Classically</strong>, from{' '}
            <InlineMath>{`\\forall x \\neg F(x)`}</InlineMath> we can infer{' '}
            <InlineMath>{`\\exists x F(x)`}</InlineMath> using double negation
            elimination.
          </p>
          <p>
            <strong>Intuitionistically</strong>, we can only get{' '}
            <InlineMath>{`\\neg\\neg \\exists x F(x)`}</InlineMath>. If we could
            constructively prove <InlineMath>{`\\forall x \\neg F(x)`}</InlineMath>,
            we would have a <em>nonconstructive</em> proof of{' '}
            <InlineMath>{`\\exists x F(x)`}</InlineMath> — a contradiction in
            philosophy!
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>
            • <strong>Free variables</strong>: not bound by any quantifier
          </li>
          <li>
            • <strong>Bound variables</strong>: captured by ∀ or ∃
          </li>
          <li>
            • <strong>Substitutability</strong>: free variables in{' '}
            <InlineMath>{`t`}</InlineMath> must remain free in{' '}
            <InlineMath>{`A(t)`}</InlineMath>
          </li>
          <li>
            • <strong>Axioms</strong>: US (∀x A(x) ⊢ A(t)) and EG (A(t) ⊢ ∃x A(x))
          </li>
          <li>
            • <strong>Rules</strong>: UG and ES (with variable restrictions)
          </li>
          <li>
            • <strong>Key result</strong>: ∃y∀x F ⊢ ∀x∃y F (but not converse)
          </li>
          <li>
            • <strong>Intuitionistic limit</strong>:{' '}
            <InlineMath>{`\\forall x \\neg F(x) \\vdash \\neg\\neg \\exists x F(x)`}</InlineMath>,
            not <InlineMath>{`\\exists x F(x)`}</InlineMath>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={56} questions={section56Questions} />
    </LessonLayout>
  );
}
