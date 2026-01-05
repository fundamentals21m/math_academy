import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section58Questions } from '../../data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2 className="text-2xl font-semibold mb-4">Gödel's Theorems</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In 1931, <strong>Kurt Gödel</strong> (1906–1978) proved results that shook the foundations
        of mathematics. His incompleteness theorems revealed fundamental limitations on what can
        be proven within formal systems—limitations that have profound implications for
        mathematics, logic, and philosophy.
      </p>

      <Callout type="info" title="The Setting">
        <p>
          We consider a formal language <InlineMath math="L" /> which is adequate for arithmetic.
          We assume <InlineMath math="L" /> includes the intuitionistic predicate calculus together
          with axioms for arithmetic, and that all basic laws of arithmetic are provable
          in <InlineMath math="L" />. For example, <InlineMath math="L" /> might be the type theory
          from the previous chapter.
        </p>
      </Callout>

      {/* Basic Concepts */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Formal Languages and Models</h3>

        <p className="text-dark-200 mb-4">
          A <strong>formal language</strong> is a system for dealing with strings of symbols.
          An interpretation of these symbols is called a <strong>model</strong>.
        </p>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">P</span>}
            title="Proofs in Formal Languages"
          />
          <p className="text-dark-300 mb-3">
            A <strong>proof</strong> is a finite sequence of formulas, each of which is either:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>An axiom, or</li>
            <li>Follows from previous formulas by a rule of inference</li>
          </ul>
        </Card>

        <Card variant="warning" className="mt-4">
          <CardHeader
            icon={<span className="text-2xl">C</span>}
            title="Consistency"
          />
          <p className="text-dark-300">
            A formal language is <strong>consistent</strong> if there is no proof whose last
            line is <InlineMath math="\\bot" /> (falsehood). That is, a consistent language
            does not contain a proof of a contradiction.
          </p>
        </Card>
      </section>

      {/* Completeness Theorem */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gödel's Completeness Theorem (1930)</h3>

        <p className="text-dark-200 mb-4">
          In 1930, Gödel proved a <strong>completeness result</strong> for the classical predicate
          calculus. This was extended by Leon Henkin (1950) to classical type theory, and later
          to intuitionistic type theory.
        </p>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">T</span>}
            title="Theorem 28.1 (Completeness)"
          />
          <p className="text-dark-300 italic">
            A formula is provable in <InlineMath math="L" /> if and only if it is true under
            all possible interpretations of the nonlogical symbols in <InlineMath math="L" />,
            i.e., in all models of <InlineMath math="L" />.
          </p>
        </Card>

        <Callout type="warning" title="A Caveat">
          <p>
            The proof of this theorem depends on the <strong>axiom of choice</strong> and is
            thus unacceptable to intuitionists. The converse (the <strong>soundness theorem</strong>)
            has a straightforward proof that is acceptable to intuitionists.
          </p>
        </Callout>

        <p className="text-dark-200 mt-4">
          As a corollary: <InlineMath math="L" /> is consistent if and only if it has a model.
        </p>
      </section>

      {/* ω-completeness */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">ω-Complete Models</h3>

        <p className="text-dark-200 mb-4">
          If <InlineMath math="n" /> is a natural number, let <InlineMath math="S^n0" /> denote
          the expression formed by placing <InlineMath math="S" /> (successor) <InlineMath math="n" /> times
          before <InlineMath math="0" />. This expression is normally interpreted as the
          natural number <InlineMath math="n" />.
        </p>

        <Card variant="info">
          <CardHeader
            icon={<InlineMath math="\\omega" />}
            title="ω-Completeness"
          />
          <p className="text-dark-300">
            A model is <strong>ω-complete</strong> if, for any formula <InlineMath math="A(x)" /> of{' '}
            <InlineMath math="L" /> (with <InlineMath math="x" /> of type <InlineMath math="N" />),
            whenever <InlineMath math="A(S^n0)" /> is true in that model for <em>each</em> natural
            number <InlineMath math="n" />, then <InlineMath math="\\forall_{x \\in N} A(x)" /> is
            also true in that model.
          </p>
        </Card>
      </section>

      {/* Incompleteness Theorem */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gödel's Incompleteness Theorem (1931)</h3>

        <p className="text-dark-200 mb-4">
          In 1931, Gödel proved his famous <strong>incompleteness theorem</strong> for arithmetic:
        </p>

        <Card variant="error">
          <CardHeader
            icon={<span className="text-2xl">!</span>}
            title="Theorem 28.2 (Incompleteness)"
          />
          <p className="text-dark-300 italic">
            There is a formula in <InlineMath math="L" /> which is true in any ω-complete model,
            but not provable in <InlineMath math="L" />, assuming <InlineMath math="L" /> to
            be consistent.
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          Combining this with the completeness theorem, we may conclude that <strong>some
          models are not ω-complete</strong>.
        </p>
      </section>

      {/* Philosophical Implications */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Philosophical Implications</h3>

        <p className="text-dark-200 mb-4">
          Gödel's results have different meanings depending on one's philosophical stance:
        </p>

        <CardGrid columns={1}>
          <Card variant="info">
            <CardHeader
              icon={<span className="text-2xl">I</span>}
              title="The Intuitionist View"
            />
            <p className="text-dark-300">
              For intuitionists, truth equals knowability, which is interpreted as provability.
              Even if <InlineMath math="A(S^n0)" /> has a proof for each <InlineMath math="n" />,
              it would not guarantee that <InlineMath math="\\forall_{x \\in N} A(x)" /> has a proof.
              Hence intuitionists have <strong>no particular reason</strong> to think of the
              world as ω-complete.
            </p>
          </Card>

          <Card variant="warning">
            <CardHeader
              icon={<span className="text-2xl">P</span>}
              title="The Platonist View"
            />
            <p className="text-dark-300">
              <strong>Gödel himself was a Platonist.</strong> Platonists see truth as a property
              of an eternal, immutable reality independent of human minds. A classical Platonist
              believes the real world contains an infinite collection of natural numbers. If each
              has property <InlineMath math="A" />, then they <em>all</em> have property{' '}
              <InlineMath math="A" />—so the real world is ω-complete. Thus Gödel concluded:
              there is a formula of arithmetic which is <strong>eternally true but not
              provable</strong>.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* The Gödel Sentence */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Gödel Sentence</h3>

        <p className="text-dark-200 mb-4">
          The proof of incompleteness constructs a specific sentence <InlineMath math="G" />,
          called the <strong>Gödel sentence</strong>, which essentially says:
        </p>

        <Card>
          <blockquote className="text-lg italic text-dark-200 border-l-4 border-amber-500 pl-4">
            "This sentence is not provable in <InlineMath math="L" />."
          </blockquote>
        </Card>

        <p className="text-dark-200 mt-4">
          If <InlineMath math="G" /> were provable, then (since <InlineMath math="L" /> is
          sound) <InlineMath math="G" /> would be true. But <InlineMath math="G" /> says it is
          not provable—contradiction! Hence <InlineMath math="G" /> is <strong>not provable</strong>.
        </p>

        <p className="text-dark-200 mt-4">
          But if <InlineMath math="G" /> is not provable, then what it says is true! So{' '}
          <InlineMath math="G" /> is <strong>true but unprovable</strong>.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>Formal language:</strong> A system of symbols with rules for manipulation
            </li>
            <li>
              <strong>Model:</strong> An interpretation of the symbols
            </li>
            <li>
              <strong>Consistent:</strong> No proof of a contradiction
            </li>
            <li>
              <strong>Completeness (1930):</strong> Provable ⟺ true in all models
            </li>
            <li>
              <strong>ω-complete model:</strong> If <InlineMath math="A(S^n0)" /> is true for
              all <InlineMath math="n" />, then <InlineMath math="\\forall x\\, A(x)" /> is true
            </li>
            <li>
              <strong>Incompleteness (1931):</strong> There exist true-but-unprovable sentences
            </li>
            <li>
              <strong>The Gödel sentence:</strong> "I am not provable" — true but unprovable
            </li>
            <li>
              <strong>Intuitionist view:</strong> Not all statements are true or false
            </li>
            <li>
              <strong>Platonist view:</strong> Truth transcends provability
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={58} questions={section58Questions} />
    </LessonLayout>
  );
}
