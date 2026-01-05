import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section59Questions } from '../../data/quizzes';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2 className="text-2xl font-semibold mb-4">Proof of Gödel's Incompleteness Theorem</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We now sketch a proof of Gödel's incompleteness result in a manner acceptable to
        intuitionists. The key insight is using <strong>self-reference</strong>: constructing
        a formula that "talks about" its own provability.
      </p>

      {/* Gödel's Lemma */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gödel's Lemma</h3>

        <p className="text-dark-200 mb-4">
          The proof begins with a fundamental lemma about representing recursive relations
          within our formal language <InlineMath math="L" />.
        </p>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">L</span>}
            title="Lemma 29.1 (Gödel's Lemma)"
          />
          <p className="text-dark-300 mb-3">
            Suppose <InlineMath math="R(m, n)" /> is a <strong>recursive relation</strong> between
            natural numbers <InlineMath math="m" /> and <InlineMath math="n" />. That is, for any
            two numbers, there is a finite effective procedure for deciding whether they are in
            the relation <InlineMath math="R" />.
          </p>
          <p className="text-dark-300 mb-2">
            Then there is a formula <InlineMath math="F(x, y)" /> in <InlineMath math="L" />,
            with <InlineMath math="x" /> and <InlineMath math="y" /> of type <InlineMath math="N" />,
            such that:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>
              if <InlineMath math="R(m, n)" />, then <InlineMath math="\\vdash F(S^m0, S^n0)" />
            </li>
            <li>
              if not <InlineMath math="R(m, n)" />, then <InlineMath math="\\vdash \\neg F(S^m0, S^n0)" />
            </li>
          </ul>
        </Card>

        <Callout type="info" title="Example">
          <p>
            Let <InlineMath math="R" /> be the relation "is 1 greater than." Let{' '}
            <InlineMath math="F(x, y)" /> be the formula <InlineMath math="x = Sy" />. Then:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              If <InlineMath math="m" /> is 1 greater than <InlineMath math="n" />, it is provable
              that <InlineMath math="S^m0 = SS^n0" />
            </li>
            <li>
              If <InlineMath math="m" /> is not 1 greater than <InlineMath math="n" />, it is
              provable that <InlineMath math="S^m0 \\neq SS^n0" />
            </li>
          </ul>
        </Callout>

        <p className="text-dark-200 mt-4">
          This lemma is plausible since <InlineMath math="L" /> is meant to capture ordinary
          number theory.
        </p>
      </section>

      {/* The Construction */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Construction</h3>

        <p className="text-dark-200 mb-4">
          We now construct the self-referential Gödel sentence.
        </p>

        <CardGrid columns={1}>
          <Card variant="info">
            <CardHeader
              icon={<span className="text-2xl">1</span>}
              title="Enumerate Sets"
            />
            <p className="text-dark-300">
              Enumerate all expressions of type <InlineMath math="PN" /> (sets of natural numbers)
              in <InlineMath math="L" />. Since there are only countably many finite strings of
              symbols, there are only countably many such expressions. Call
              them <InlineMath math="\\alpha_1, \\alpha_2, \\ldots" />
            </p>
          </Card>

          <Card variant="info">
            <CardHeader
              icon={<span className="text-2xl">2</span>}
              title="Enumerate Proofs"
            />
            <p className="text-dark-300">
              Enumerate all proofs of <InlineMath math="L" />. There are only countably many
              (assuming proofs are finite) since there are only countably many finite sequences
              of formulas. Call the proofs <InlineMath math="P_1, P_2, \\ldots" />
            </p>
          </Card>

          <Card variant="info">
            <CardHeader
              icon={<span className="text-2xl">3</span>}
              title="Define the Relation R"
            />
            <p className="text-dark-300">
              Let <InlineMath math="R(m, n)" /> be the relation: "<InlineMath math="P_n" /> is a
              proof of the formula <InlineMath math="S^m0 \\in \\alpha_m" />". This relation is
              recursive—we can decide whether it holds by checking whether{' '}
              <InlineMath math="S^m0 \\in \\alpha_m" /> is the last line of proof{' '}
              <InlineMath math="P_n" />.
            </p>
          </Card>

          <Card variant="warning">
            <CardHeader
              icon={<span className="text-2xl">4</span>}
              title="Construct the Gödel Set"
            />
            <p className="text-dark-300">
              By Gödel's Lemma, there is a formula <InlineMath math="F(x, y)" /> representing{' '}
              <InlineMath math="R" />. Consider the set:
            </p>
            <MathBlock math="\\{x \\in N \\mid \\neg\\exists_{y \\in N} F(x, y)\\}" />
            <p className="text-dark-300 mt-2">
              This is one of the <InlineMath math="\\alpha_i" />. Say it is{' '}
              <InlineMath math="\\alpha_g" />. Then by definition, it is provable that:
            </p>
            <MathBlock math="S^g0 \\in \\alpha_g \\;\\text{ iff }\\; \\neg\\exists_{y \\in N} F(S^g0, y)" />
          </Card>
        </CardGrid>
      </section>

      {/* The Key Argument */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Key Argument</h3>

        <Card variant="error">
          <CardHeader
            icon={<span className="text-2xl">!</span>}
            title="The Gödel Sentence"
          />
          <p className="text-dark-300 mb-3">
            Consider the formula <InlineMath math="S^g0 \\in \\alpha_g" />.
          </p>
          <p className="text-dark-300 mb-3">
            <strong>Claim:</strong> If <InlineMath math="L" /> is consistent, then{' '}
            <InlineMath math="S^g0 \\in \\alpha_g" /> is <em>not provable</em> in{' '}
            <InlineMath math="L" />.
          </p>
          <div className="bg-dark-800 p-4 rounded mt-3">
            <p className="text-dark-200 text-sm">
              <strong>Proof:</strong> Suppose <InlineMath math="S^g0 \\in \\alpha_g" /> were
              provable. Then there exists some <InlineMath math="n" /> such
              that <InlineMath math="P_n" /> is a proof of <InlineMath math="S^g0 \\in \\alpha_g" />.
              In that case, <InlineMath math="R(g, n)" /> holds. But then by Gödel's Lemma,{' '}
              <InlineMath math="\\vdash F(S^g0, S^n0)" />, and
              hence <InlineMath math="\\vdash \\exists_{y \\in N} F(S^g0, y)" />. By the
              definition of <InlineMath math="\\alpha_g" />, we would
              have <InlineMath math="\\vdash \\neg S^g0 \\in \\alpha_g" />—contradicting the
              assumption that <InlineMath math="\\vdash S^g0 \\in \\alpha_g" />.
            </p>
          </div>
        </Card>

        <p className="text-dark-200 mt-6 mb-4">
          So for all <InlineMath math="n" />, not <InlineMath math="R(g, n)" />. Hence for
          all <InlineMath math="n" />, <InlineMath math="\\vdash \\neg F(S^g0, S^n0)" /> by
          Gödel's Lemma. Call this result (*).
        </p>
      </section>

      {/* Truth in ω-complete Models */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Truth in ω-Complete Models</h3>

        <p className="text-dark-200 mb-4">
          From the soundness result, we may conclude that for all <InlineMath math="n" />,{' '}
          <InlineMath math="\\neg F(S^g0, S^n0)" /> is true in all models of <InlineMath math="L" />.
        </p>

        <p className="text-dark-200 mb-4">
          Hence in any <strong>ω-complete model</strong> of <InlineMath math="L" />, the proposition{' '}
          <InlineMath math="\\forall_{y \\in N} \\neg F(S^g0, y)" /> is true.
        </p>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">Q</span>}
            title="Completing the Proof"
          />
          <p className="text-dark-300">
            Even intuitionistic logic allows us to infer <InlineMath math="\\neg\\exists_y G(y)" /> from{' '}
            <InlineMath math="\\forall_y \\neg G(y)" />. Hence <InlineMath math="\\neg\\exists_{y \\in N} F(S^g0, y)" />{' '}
            is true in any ω-complete model. By the definition of <InlineMath math="\\alpha_g" />, this
            means <InlineMath math="S^g0 \\in \\alpha_g" /> is <strong>true</strong> in any ω-complete
            model.
          </p>
        </Card>

        <Callout type="success" title="The Result">
          <p>
            <strong>Theorem 29.2 (Gödel's Incompleteness - Semantic Version):</strong> If{' '}
            <InlineMath math="L" /> is consistent, there is a formula which is true in any
            ω-complete model but not provable in <InlineMath math="L" />.
          </p>
          <p className="mt-2">
            The formula <InlineMath math="S^g0 \\in \\alpha_g" /> is our witness: it is not
            provable in <InlineMath math="L" /> (since <InlineMath math="L" /> is consistent),
            yet it is true in all ω-complete models.
          </p>
        </Callout>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>Gödel's Lemma:</strong> Recursive relations can be represented by formulas
            </li>
            <li>
              <strong>Enumeration:</strong> Sets <InlineMath math="\\alpha_1, \\alpha_2, \\ldots" /> and
              proofs <InlineMath math="P_1, P_2, \\ldots" /> are countable
            </li>
            <li>
              <strong>The relation <InlineMath math="R(m,n)" />:</strong> "<InlineMath math="P_n" /> proves{' '}
              <InlineMath math="S^m0 \\in \\alpha_m" />" is recursive
            </li>
            <li>
              <strong>The Gödel set:</strong> <InlineMath math="\\alpha_g = \\{x \\mid \\neg\\exists_y F(x,y)\\}" />
            </li>
            <li>
              <strong>Self-reference:</strong> <InlineMath math="S^g0 \\in \\alpha_g" /> says "I am not
              provable"
            </li>
            <li>
              <strong>Key argument:</strong> If provable, then <InlineMath math="R(g,n)" /> for some{' '}
              <InlineMath math="n" />, leading to contradiction
            </li>
            <li>
              <strong>Conclusion:</strong> Not provable, but true in all ω-complete models
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={59} questions={section59Questions} />
    </LessonLayout>
  );
}
