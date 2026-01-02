import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section53Questions } from '../../data/quizzes';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2 className="text-2xl font-semibold mb-4">Logic from Aristotle to Russell</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Logic was not always regarded as a branch of mathematics. From{' '}
        <strong>Aristotle's</strong> syllogisms through the <strong>Stoics'</strong>{' '}
        truth tables to <strong>Frege's</strong> quantifiers and{' '}
        <strong>Russell's paradox</strong>, the development of formal logic
        spans over two millennia.
      </p>

      {/* Aristotle */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Aristotle (384–322 BC)</h3>

      <p className="text-dark-200 mb-4">
        <strong>Aristotle</strong> was the first to write about logic in the
        West. Among the principles he recognized:
      </p>

      <Card className="mb-6">
        <CardHeader>Aristotelian Principles</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <div className="flex items-center gap-4">
            <InlineMath>{`\\neg\\neg p \\iff p`}</InlineMath>
            <span>(double negation)</span>
          </div>
          <div className="flex items-center gap-4">
            <InlineMath>{`p \\lor \\neg p`}</InlineMath>
            <span>(excluded third)</span>
          </div>
          <div className="flex items-center gap-4">
            <InlineMath>{`(p \\Rightarrow q) \\iff (\\neg q \\Rightarrow \\neg p)`}</InlineMath>
            <span>(contraposition)</span>
          </div>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Aristotle's major concern was the <strong>syllogism</strong>, which
        dominated logical thinking for two thousand years. It deals with four
        types of statements:
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>SaP</CardHeader>
          <p className="text-dark-300 text-sm">All S are P</p>
        </Card>
        <Card>
          <CardHeader>SeP</CardHeader>
          <p className="text-dark-300 text-sm">No S are P</p>
        </Card>
        <Card>
          <CardHeader>SiP</CardHeader>
          <p className="text-dark-300 text-sm">Some S are P</p>
        </Card>
        <Card>
          <CardHeader>SoP</CardHeader>
          <p className="text-dark-300 text-sm">Some S are not P</p>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>The Four Figures of the Syllogism</CardHeader>
        <div className="text-dark-300 text-sm">
          <p className="mb-2">
            William of Shyreswood (1250 AD) gave them memorable names:
          </p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-semibold">barbara</p>
              <p>MaP, SaM → SaP</p>
            </div>
            <div>
              <p className="font-semibold">celarent</p>
              <p>MeP, SaM → SeP</p>
            </div>
            <div>
              <p className="font-semibold">darii</p>
              <p>MaP, SiM → SiP</p>
            </div>
            <div>
              <p className="font-semibold">ferio</p>
              <p>MeP, SiM → SoP</p>
            </div>
          </div>
        </div>
      </Card>

      {/* The Stoics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Stoics (200 BC)</h3>

      <p className="text-dark-200 mb-4">
        The <strong>Stoics</strong>, particularly <strong>Philo of Megara</strong>,
        essentially introduced <strong>truth tables</strong> into logic, thus
        anticipating <strong>Ludwig Wittgenstein</strong> (1889–1951).
      </p>

      <Card className="mb-6">
        <CardHeader>Truth Tables</CardHeader>
        <div className="text-dark-300 text-sm grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold mb-2 text-center">
              <InlineMath>{`p \\lor q`}</InlineMath> (or)
            </p>
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-dark-600">
                  <th>p</th><th>q</th><th><InlineMath>{`p \\lor q`}</InlineMath></th>
                </tr>
              </thead>
              <tbody>
                <tr><td>T</td><td>T</td><td>T</td></tr>
                <tr><td>T</td><td>F</td><td>T</td></tr>
                <tr><td>F</td><td>T</td><td>T</td></tr>
                <tr><td>F</td><td>F</td><td>F</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="font-semibold mb-2 text-center">
              <InlineMath>{`p \\Rightarrow q`}</InlineMath> (if-then)
            </p>
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-dark-600">
                  <th>p</th><th>q</th><th><InlineMath>{`p \\Rightarrow q`}</InlineMath></th>
                </tr>
              </thead>
              <tbody>
                <tr><td>T</td><td>T</td><td>T</td></tr>
                <tr><td>T</td><td>F</td><td>F</td></tr>
                <tr><td>F</td><td>T</td><td>T</td></tr>
                <tr><td>F</td><td>F</td><td>T</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Leibniz to Boole */}
      <h3 className="text-xl font-semibold mt-8 mb-4">From Leibniz to Boole</h3>

      <p className="text-dark-200 mb-4">
        <strong>Gottfried W. Leibniz</strong> (1646–1716) conceived of a
        universal symbolic language adequate for all of science, but never
        published the details.
      </p>

      <p className="text-dark-200 mb-4">
        In <strong>1847</strong>, full-blown symbolic logic finally appeared
        with <strong>George Boole</strong> (1815–1864) and{' '}
        <strong>Augustus De Morgan</strong> (1806–1871):
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Boole</CardHeader>
          <p className="text-dark-300 text-sm">
            Saw propositional logic as algebra, with the <strong>idempotent
            law</strong>: <InlineMath>{`p \\times p = p`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader>De Morgan's Laws</CardHeader>
          <div className="text-dark-300 text-sm">
            <MathBlock>{`\\neg(p \\land q) = \\neg p \\lor \\neg q`}</MathBlock>
            <MathBlock>{`\\neg(p \\lor q) = \\neg p \\land \\neg q`}</MathBlock>
          </div>
        </Card>
      </CardGrid>

      {/* Frege */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Frege and Quantifiers</h3>

      <p className="text-dark-200 mb-4">
        <strong>Gottlob Frege</strong> (1848–1925) was the first to have a
        modern view of the <strong>universal</strong> (∀) and{' '}
        <strong>existential</strong> (∃) quantifiers. He attempted to reduce
        all of mathematics to logic — a position called <strong>Logicism</strong>.
      </p>

      <Callout type="definition" title="Frege's Comprehension Scheme">
        <p>
          For any property <InlineMath>{`P(x)`}</InlineMath>, there exists a
          set containing exactly the entities with that property:
        </p>
        <MathBlock>{`\\exists y \\, \\forall x \\, (x \\in y \\iff P(x))`}</MathBlock>
        <p className="text-sm mt-2">
          Together with the <strong>axiom of extensionality</strong>:
        </p>
        <MathBlock>{`\\forall y \\, \\forall z \\, (\\forall x (x \\in y \\iff x \\in z) \\Rightarrow y = z)`}</MathBlock>
      </Callout>

      {/* Russell's Paradox */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Russell's Paradox</h3>

      <p className="text-dark-200 mb-4">
        Frege had just written a book propounding these views when he received
        a letter from <strong>Bertrand Russell</strong> (1872–1970), pointing
        out a serious problem.
      </p>

      <Callout type="theorem" title="Russell's Paradox (1901)">
        <p>
          Consider the property <InlineMath>{`P(x) = \\neg(x \\in x)`}</InlineMath>.
          By Frege's scheme, there exists a set{' '}
          <InlineMath>{`y`}</InlineMath> such that:
        </p>
        <MathBlock>{`\\forall x \\, (x \\in y \\iff \\neg(x \\in x))`}</MathBlock>
        <p className="mt-2">
          Taking <InlineMath>{`x = y`}</InlineMath> yields:
        </p>
        <MathBlock>{`y \\in y \\iff \\neg(y \\in y)`}</MathBlock>
        <p className="mt-2 font-semibold">A contradiction!</p>
      </Callout>

      {/* Responses to Paradox */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Responses to the Paradox</h3>

      <CardGrid columns={1}>
        <Card>
          <CardHeader>Russell & Whitehead: Type Theory</CardHeader>
          <p className="text-dark-300 text-sm">
            Forbid expressions like <InlineMath>{`x \\in x`}</InlineMath>.
            Each symbol has a <strong>type</strong> (a natural number), and{' '}
            <InlineMath>{`a \\in b`}</InlineMath> is only permitted if the
            type of <InlineMath>{`b`}</InlineMath> is one higher than{' '}
            <InlineMath>{`a`}</InlineMath>. Developed in the three-volume{' '}
            <em>Principia Mathematica</em>.
          </p>
        </Card>
        <Card>
          <CardHeader>Gödel-Bernays Set Theory</CardHeader>
          <p className="text-dark-300 text-sm">
            Distinguishes between <strong>sets</strong> and{' '}
            <strong>classes</strong>: only sets can be elements.
          </p>
        </Card>
        <Card>
          <CardHeader>Zermelo-Fraenkel Set Theory</CardHeader>
          <p className="text-dark-300 text-sm">
            Modifies comprehension to require separation from an existing set:
          </p>
          <MathBlock>{`\\forall z \\, \\exists y \\, \\forall x \\, (x \\in y \\iff (x \\in z \\land P(x)))`}</MathBlock>
        </Card>
      </CardGrid>

      {/* Skeptics */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Skeptics</h3>

      <p className="text-dark-200 mb-4">
        The paradoxes made some mathematicians skeptical about all but the
        most basic procedures.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Kronecker (1823–1891)</CardHeader>
          <p className="text-dark-300 text-sm italic mb-2">
            "God made the whole numbers, all the rest is the work of man."
          </p>
          <p className="text-dark-300 text-sm">
            Rejected <strong>nonconstructive arguments</strong> — proofs that
            don't tell you which case actually holds.
          </p>
        </Card>
        <Card>
          <CardHeader>Poincaré (1854–1912)</CardHeader>
          <p className="text-dark-300 text-sm">
            Objected to <strong>impredicative definitions</strong> — those
            that define an entity in terms of entities of a higher type.
          </p>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: Nonconstructive Proof</CardHeader>
        <div className="text-dark-300 text-sm space-y-2">
          <p>
            <strong>Theorem:</strong> There exist irrational numbers{' '}
            <InlineMath>{`\\alpha`}</InlineMath> and{' '}
            <InlineMath>{`\\beta`}</InlineMath> such that{' '}
            <InlineMath>{`\\alpha^\\beta`}</InlineMath> is rational.
          </p>
          <p>
            <strong>Proof:</strong> Consider{' '}
            <InlineMath>{`\\sqrt{2}^{\\sqrt{2}}`}</InlineMath>. If it's
            rational, we're done. If it's irrational, let{' '}
            <InlineMath>{`\\alpha = \\sqrt{2}^{\\sqrt{2}}`}</InlineMath> and{' '}
            <InlineMath>{`\\beta = \\sqrt{2}`}</InlineMath>. Then:
          </p>
          <MathBlock>{`\\alpha^\\beta = (\\sqrt{2}^{\\sqrt{2}})^{\\sqrt{2}} = \\sqrt{2}^{\\sqrt{2} \\times \\sqrt{2}} = \\sqrt{2}^2 = 2`}</MathBlock>
          <p className="text-xs">
            Kronecker objected: at the end, we don't know whether{' '}
            <InlineMath>{`\\alpha = \\sqrt{2}`}</InlineMath> or{' '}
            <InlineMath>{`\\alpha = \\sqrt{2}^{\\sqrt{2}}`}</InlineMath>.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>
            • <strong>Aristotle</strong> (384–322 BC): syllogisms, excluded
            third, contraposition
          </li>
          <li>
            • <strong>Stoics</strong> (200 BC): truth tables for ∨ and ⇒
          </li>
          <li>
            • <strong>Leibniz</strong> (1646–1716): universal symbolic language
          </li>
          <li>
            • <strong>Boole & De Morgan</strong> (1847): symbolic logic,
            idempotent law, De Morgan's laws
          </li>
          <li>
            • <strong>Frege</strong> (1848–1925): quantifiers ∀ and ∃,
            logicism, comprehension scheme
          </li>
          <li>
            • <strong>Russell</strong> (1872–1970): discovered paradox in
            Frege's system, type theory
          </li>
          <li>
            • <strong>Kronecker</strong>: rejected nonconstructive proofs
          </li>
          <li>
            • <strong>Poincaré</strong>: objected to impredicative definitions
          </li>
          <li>
            • <strong>Zermelo-Fraenkel</strong>: modified comprehension to
            avoid paradoxes
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={53} questions={section53Questions} />
    </LessonLayout>
  );
}
