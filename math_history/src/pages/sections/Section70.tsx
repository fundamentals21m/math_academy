import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2>Gödel's Incompleteness Theorems</h2>

      <p>
        In 1931, Kurt Gödel proved two theorems that shook the foundations of
        mathematics. His incompleteness theorems showed that Hilbert's dream
        of a complete, consistent, decidable foundation for mathematics was
        impossible. Any sufficiently powerful mathematical system is either
        incomplete (some truths can't be proved) or inconsistent (contradictions
        can be proved).
      </p>

      <Callout type="info">
        <strong>A Revolutionary Discovery:</strong> Gödel's theorems are among
        the most profound results in the history of mathematics and logic.
        They revealed fundamental limitations on what formal systems can achieve
        and changed our understanding of mathematical truth.
      </Callout>

      <h3>The First Incompleteness Theorem</h3>

      <Theorem title="Gödel's First Incompleteness Theorem (1931)">
        <p>
          Any consistent formal system <InlineMath>F</InlineMath> capable of
          expressing basic arithmetic contains statements that are true but
          unprovable in <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          No consistent system can be complete—there will always be truths it
          cannot prove.
        </p>
      </Theorem>

      <p>
        More precisely: if <InlineMath>F</InlineMath> is consistent and
        contains enough arithmetic, there exists a sentence{' '}
        <InlineMath>G</InlineMath> such that neither <InlineMath>G</InlineMath>{' '}
        nor <InlineMath>{'\\neg G'}</InlineMath> is provable in{' '}
        <InlineMath>F</InlineMath>.
      </p>

      <h3>Gödel Numbering</h3>

      <p>
        Gödel's key technique: encode statements about a formal system{' '}
        <em>within</em> that system.
      </p>

      <Definition title="Gödel Numbering">
        <p>
          Assign a unique natural number (called a <strong>Gödel number</strong>)
          to every symbol, formula, and proof in the system. This allows
          statements about proofs to become arithmetic statements about numbers.
        </p>
      </Definition>

      <Example title="Encoding">
        <p>
          Assign numbers to symbols: "0" → 1, "S" → 2, "+" → 3, "=" → 4, etc.
        </p>
        <p className="mt-2">
          A formula becomes a sequence of numbers, encoded as a single large
          number using prime factorization:
        </p>
        <MathBlock>
          {`\\text{code}(s_1, s_2, s_3, \\ldots) = 2^{s_1} \\cdot 3^{s_2} \\cdot 5^{s_3} \\cdots`}
        </MathBlock>
      </Example>

      <h3>The Gödel Sentence</h3>

      <p>
        Using Gödel numbering, Gödel constructed a remarkable sentence:
      </p>

      <Definition title="The Gödel Sentence G">
        <p>
          The <strong>Gödel sentence</strong> <InlineMath>G</InlineMath> for
          a system <InlineMath>F</InlineMath> essentially says:
        </p>
        <MathBlock>
          {`G \\text{ says: "This sentence is not provable in } F \\text{."}`}
        </MathBlock>
      </Definition>

      <Example title="The Self-Reference">
        <p>
          How can a sentence refer to itself? Through Gödel numbering:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>G</InlineMath> has a Gödel number <InlineMath>n</InlineMath></li>
          <li><InlineMath>G</InlineMath> says: "The formula with Gödel number <InlineMath>n</InlineMath> is not provable"</li>
          <li>But the formula with Gödel number <InlineMath>n</InlineMath> <em>is</em> <InlineMath>G</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400">
          This is similar to the Liar Paradox ("This sentence is false") but
          about provability rather than truth.
        </p>
      </Example>

      <Theorem title="The Dilemma">
        <p>
          If <InlineMath>F</InlineMath> is consistent, then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>G</InlineMath> is provable, then <InlineMath>G</InlineMath> is false (it says it's not provable), so <InlineMath>F</InlineMath> proves something false—contradiction</li>
          <li>So <InlineMath>G</InlineMath> is not provable</li>
          <li>But then <InlineMath>G</InlineMath> is true (it correctly says it's not provable)</li>
          <li>So <InlineMath>G</InlineMath> is true but unprovable in <InlineMath>F</InlineMath></li>
        </ul>
      </Theorem>

      <h3>The Second Incompleteness Theorem</h3>

      <Theorem title="Gödel's Second Incompleteness Theorem">
        <p>
          If <InlineMath>F</InlineMath> is consistent and contains basic
          arithmetic, then <InlineMath>F</InlineMath> cannot prove its own
          consistency.
        </p>
      </Theorem>

      <p>
        Let <InlineMath>{'\\text{Con}(F)'}</InlineMath> be the statement "F is
        consistent" (expressible via Gödel numbering). If{' '}
        <InlineMath>F</InlineMath> is consistent, then{' '}
        <InlineMath>{'\\text{Con}(F)'}</InlineMath> is not provable in{' '}
        <InlineMath>F</InlineMath>.
      </p>

      <Callout type="note">
        <strong>The Death of Hilbert's Program:</strong> Hilbert hoped to
        prove mathematics consistent using finite methods. Gödel showed this
        is impossible: any system strong enough to formalize mathematics
        cannot prove its own consistency (assuming it is consistent).
      </Callout>

      <h3>Implications</h3>

      <Example title="For Hilbert's Program">
        <p>
          Hilbert wanted: (1) a complete system, (2) a consistency proof.
          Gödel showed:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>No sufficiently powerful system is complete (First Theorem)</li>
          <li>No such system can prove its own consistency (Second Theorem)</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Hilbert's program, in its original form, is impossible.
        </p>
      </Example>

      <Example title="For Mathematics">
        <p>
          The incompleteness theorems mean:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>There is no "Theory of Everything" for mathematics</li>
          <li>Some mathematical truths transcend any given formal system</li>
          <li>New axioms (like large cardinal axioms) can prove new truths</li>
        </ul>
      </Example>

      <Example title="Independent Statements">
        <p>
          Beyond the abstract Gödel sentence, mathematically natural statements
          are independent of standard axioms:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The Continuum Hypothesis (independent of ZFC)</li>
          <li>Various statements about large cardinals</li>
          <li>The Paris-Harrington theorem (independent of Peano arithmetic)</li>
        </ul>
      </Example>

      <h3>Common Misunderstandings</h3>

      <p>
        Gödel's theorems are often misinterpreted:
      </p>

      <Example title="What the Theorems DON'T Say">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>NOT:</strong> "Mathematics is inconsistent" —
            The theorems assume consistency; they show limits within consistent
            systems
          </li>
          <li>
            <strong>NOT:</strong> "Nothing can be proved" —
            Vast amounts can be proved; only certain statements are undecidable
          </li>
          <li>
            <strong>NOT:</strong> "Human minds exceed computers" —
            The theorems apply equally to any formal system, human or machine
          </li>
        </ul>
      </Example>

      <h3>Gödel's Life and Work</h3>

      <p>
        Kurt Gödel (1906–1978) was one of the greatest logicians in history:
      </p>

      <Example title="Beyond Incompleteness">
        <p>
          Gödel also proved:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Completeness theorem (1929):</strong> First-order logic is complete—every logically valid statement is provable</li>
          <li><strong>Consistency of AC and CH (1940):</strong> If ZF is consistent, so is ZFC + CH</li>
          <li>Important results in set theory, relativity, and philosophy</li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>A Profound Legacy:</strong> Gödel revealed that mathematical
        truth exceeds formal provability. His work showed that mathematics
        is not a closed, complete system but an endless frontier—there will
        always be true statements beyond the reach of any particular axiom
        system. This limitation is not a weakness but a feature of the
        infinite richness of mathematical reality.
      </Callout>

      <SectionQuiz sectionId={70} questions={quizMap[70] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
