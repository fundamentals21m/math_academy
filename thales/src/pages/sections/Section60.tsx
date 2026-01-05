import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section60Questions } from '../../data/quizzes';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2 className="text-2xl font-semibold mb-4">More about Gödel's Theorems</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Building on the incompleteness theorem, we now explore its stronger versions, its
        implications for Hilbert's program, and its meaning from different philosophical
        perspectives.
      </p>

      {/* ω-Consistency */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">ω-Consistency</h3>

        <p className="text-dark-200 mb-4">
          We introduce a stronger notion than plain consistency:
        </p>

        <Card variant="info">
          <CardHeader
            icon={<InlineMath math="\\omega" />}
            title="ω-Consistency"
          />
          <p className="text-dark-300">
            A language <InlineMath math="L" /> is <strong>ω-consistent</strong> provided, for any
            formula <InlineMath math="A(x)" />, if <InlineMath math="A(S^n0)" /> is provable for
            each natural number <InlineMath math="n" />, then it is <em>not</em> the case
            that <InlineMath math="\\vdash \\neg\\forall_{y \\in N} A(y)" />.
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          It is not hard to show that <strong>ω-consistency implies consistency</strong>. This
          gives us a stronger version of the incompleteness theorem.
        </p>
      </section>

      {/* Syntactic Version */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Syntactic Version</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">T</span>}
            title="Theorem 30.1 (Syntactic Version)"
          />
          <p className="text-dark-300 italic">
            If <InlineMath math="L" /> is ω-consistent, there is a formula <InlineMath math="G" /> such
            that <strong>neither <InlineMath math="G" /> nor <InlineMath math="\\neg G" /> is provable</strong> in{' '}
            <InlineMath math="L" />.
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          <strong>Rosser's improvement:</strong> J. Barkley Rosser showed that ω-consistency can be
          replaced by plain consistency. His proof is short but tricky, and we skip it here.
        </p>

        <Callout type="info" title="Undecidable Statements">
          <p>
            If neither a statement nor its negation is provable in a language, the statement is
            called <strong>undecidable</strong> relative to that language.
          </p>
        </Callout>
      </section>

      {/* Cannot Eliminate Undecidability */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Undecidability Cannot Be Eliminated</h3>

        <p className="text-dark-200 mb-4">
          A natural question arises: can we simply add the undecidable statement as a new axiom?
        </p>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">!</span>}
            title="Persistent Incompleteness"
          />
          <p className="text-dark-300">
            There is <strong>no way</strong> to get rid of all undecidable statements by adjoining a
            finite number of new axioms. If we added <InlineMath math="S^g0 \\in \\alpha_g" /> to
            the axioms of <InlineMath math="L" />, there would still be
            a <InlineMath math="g'" /> such that <InlineMath math="S^{g'}0 \\in \\alpha_{g'}" /> is
            an undecidable statement relative to this new language.
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          This is a profound limitation: <strong>incompleteness is inherent</strong> to any
          sufficiently powerful formal system.
        </p>
      </section>

      {/* Second Incompleteness Theorem */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Second Incompleteness Theorem</h3>

        <p className="text-dark-200 mb-4">
          <strong>Hilbert's second problem</strong> was to prove the consistency of arithmetic using
          only formal arithmetic itself. Gödel's results imply this is impossible.
        </p>

        <Card variant="error">
          <CardHeader
            icon={<span className="text-2xl">2</span>}
            title="Second Incompleteness Theorem"
          />
          <p className="text-dark-300 mb-3">
            Let <InlineMath math="Cons" /> be a statement in <InlineMath math="L" /> expressing
            "there is no <InlineMath math="n" /> such that <InlineMath math="P_n" /> is a proof
            of <InlineMath math="\\bot" />" (i.e., <InlineMath math="L" /> is consistent).
          </p>
          <p className="text-dark-300">
            Then: If <InlineMath math="L" /> is consistent, then{' '}
            <InlineMath math="\\not\\vdash Cons" />. That is,{' '}
            <strong><InlineMath math="L" /> cannot prove its own consistency</strong>.
          </p>
        </Card>

        <Callout type="warning" title="The Key Insight">
          <p>
            One can formalize the proof of Gödel's Incompleteness Theorem to
            show: <InlineMath math="\\vdash Cons \\Rightarrow S^g0 \\in \\alpha_g" />. Hence, if
            there were a proof in <InlineMath math="L" /> that <InlineMath math="L" /> was consistent
            (i.e., if <InlineMath math="\\vdash Cons" />), we would
            have <InlineMath math="\\vdash S^g0 \\in \\alpha_g" />. But we proved this is not the case!
          </p>
        </Callout>
      </section>

      {/* Philosophical Implications */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Philosophical Implications</h3>

        <p className="text-dark-200 mb-4">
          Gödel's Incompleteness Theorem, being a metamathematical result, has different
          implications depending on one's conception of mathematics:
        </p>

        <CardGrid columns={1}>
          <Card variant="info">
            <CardHeader
              icon={<span className="text-2xl">F</span>}
              title="The Formalist View"
            />
            <p className="text-dark-300">
              A classical <strong>formalist</strong> views arithmetic as nothing more than strings
              of symbols, manipulated according to certain rules. He does not want to rely on any
              interpretation in order to ensure consistency. He would hope that consistency could
              be established <em>within the system itself</em>.
            </p>
            <p className="text-dark-300 mt-2">
              <strong>Gödel's result shows this hope is in vain:</strong> the consistency of
              arithmetic cannot be demonstrated within arithmetic. Moreover, the idea of
              truth <em>cannot</em> be captured by the notion of provability.
            </p>
          </Card>

          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">I</span>}
              title="The Intuitionist View"
            />
            <p className="text-dark-300">
              From an <strong>intuitionist</strong> point of view, Gödel's Incompleteness Theorem
              is <em>not unwelcome</em>. For intuitionists, "true" means "provable" (with a finite
              proof). They maintain that some statements are neither true nor false.
            </p>
            <p className="text-dark-300 mt-2">
              <strong>Gödel's result merely confirms this belief</strong> by showing there are
              statements which are neither provable nor disprovable.
            </p>
          </Card>

          <Card variant="warning">
            <CardHeader
              icon={<span className="text-2xl">P</span>}
              title="The Platonist View"
            />
            <p className="text-dark-300">
              For the classical <strong>Platonist</strong>, the Incompleteness Theorem shows that
              there are statements true in the real world which are not provable.
            </p>
            <p className="text-dark-300 mt-2">
              In other words, <strong>the realities of mathematics are too profound to be captured
              by any finite axiom system</strong>. There will always be truths in mathematics which
              cannot be cranked out by a computer, but which must await new philosophical insights
              for their discovery.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>ω-consistency:</strong> A stronger condition than consistency;
              implies consistency
            </li>
            <li>
              <strong>Syntactic version:</strong> If ω-consistent, there exists{' '}
              <InlineMath math="G" /> with neither <InlineMath math="G" /> nor{' '}
              <InlineMath math="\\neg G" /> provable
            </li>
            <li>
              <strong>Rosser's improvement:</strong> Plain consistency suffices
            </li>
            <li>
              <strong>Undecidable:</strong> A statement where neither it nor its negation is provable
            </li>
            <li>
              <strong>Persistent incompleteness:</strong> Adding axioms creates new undecidable statements
            </li>
            <li>
              <strong>Second Incompleteness Theorem:</strong> A consistent system cannot prove its
              own consistency
            </li>
            <li>
              <strong>Hilbert's program:</strong> Cannot prove arithmetic's consistency within arithmetic
            </li>
            <li>
              <strong>Formalist:</strong> Truth cannot be captured by provability
            </li>
            <li>
              <strong>Intuitionist:</strong> Confirms that some statements are neither true nor false
            </li>
            <li>
              <strong>Platonist:</strong> Mathematical truth transcends any formal system
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={60} questions={section60Questions} />
    </LessonLayout>
  );
}
