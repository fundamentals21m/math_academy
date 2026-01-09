import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2>Paradoxes and Foundations</h2>

      <p>
        Around 1900, cracks appeared in the foundations of mathematics.
        Cantor's powerful set theory harbored paradoxes—contradictions that
        emerged from seemingly reasonable reasoning. These paradoxes triggered
        a foundational crisis and led to a complete rethinking of the logical
        basis of mathematics.
      </p>

      <Callout type="info">
        <strong>A Crisis of Foundations:</strong> The discovery of paradoxes
        in set theory was deeply troubling. If mathematics could harbor
        contradictions, what was mathematics built on? This crisis stimulated
        some of the deepest thinking about logic, proof, and mathematical truth.
      </Callout>

      <h3>Russell's Paradox</h3>

      <p>
        The most famous paradox was discovered by Bertrand Russell in 1901:
      </p>

      <Definition title="Russell's Paradox">
        <p>
          Consider the set <InlineMath>R</InlineMath> of all sets that do not
          contain themselves:
        </p>
        <MathBlock>
          {`R = \\{x : x \\notin x\\}`}
        </MathBlock>
        <p className="mt-2">
          Is <InlineMath>R \in R</InlineMath>?
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>R \in R</InlineMath>, then by definition <InlineMath>R \notin R</InlineMath></li>
          <li>If <InlineMath>R \notin R</InlineMath>, then by definition <InlineMath>R \in R</InlineMath></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Contradiction! The set <InlineMath>R</InlineMath> both does and
          doesn't contain itself.
        </p>
      </Definition>

      <Example title="The Barber Paradox">
        <p>
          Russell illustrated his paradox with a story: In a village, the
          barber shaves exactly those men who do not shave themselves.
        </p>
        <p className="mt-2">
          Who shaves the barber?
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If the barber shaves himself, then he doesn't (he only shaves those who don't shave themselves)</li>
          <li>If he doesn't shave himself, then he does (he shaves all who don't shave themselves)</li>
        </ul>
      </Example>

      <h3>Other Paradoxes</h3>

      <Example title="Cantor's Paradox">
        <p>
          Consider the "set of all sets" <InlineMath>V</InlineMath>. By
          Cantor's theorem, <InlineMath>\mathcal{P}(V)</InlineMath> should be
          larger than <InlineMath>V</InlineMath>.
        </p>
        <p className="mt-2">
          But <InlineMath>\mathcal{P}(V) \subseteq V</InlineMath> (since
          every set is in <InlineMath>V</InlineMath>), so{' '}
          <InlineMath>|\mathcal{P}(V)| \leq |V|</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Contradiction! There can be no "set of all sets."
        </p>
      </Example>

      <Example title="Burali-Forti Paradox">
        <p>
          Consider the set of all ordinal numbers. This should itself be an
          ordinal, and thus should be both a member of itself and larger than
          itself.
        </p>
        <p className="mt-2 text-dark-400">
          There can be no "set of all ordinals."
        </p>
      </Example>

      <h3>Responses to the Crisis</h3>

      <p>
        Mathematicians proposed several approaches to resolve the paradoxes:
      </p>

      <Definition title="Logicism (Russell, Frege)">
        <p>
          <strong>Logicism</strong> sought to derive all mathematics from
          pure logic. Russell and Whitehead's <em>Principia Mathematica</em>{' '}
          (1910–1913) attempted this using type theory to avoid paradoxes.
        </p>
      </Definition>

      <Definition title="Intuitionism (Brouwer)">
        <p>
          <strong>Intuitionism</strong> rejected "completed infinities" and
          non-constructive proofs. Mathematical objects exist only when
          explicitly constructed.
        </p>
        <p className="mt-2 text-dark-400">
          Intuitionists reject the law of excluded middle for infinite domains:
          "A or not-A" isn't necessarily valid.
        </p>
      </Definition>

      <Definition title="Formalism (Hilbert)">
        <p>
          <strong>Formalism</strong> treated mathematics as a formal game with
          symbols. Hilbert sought to prove that mathematics is consistent
          (free of contradictions) using finite methods.
        </p>
      </Definition>

      <h3>Axiomatic Set Theory</h3>

      <p>
        The most successful response was to put set theory on a rigorous
        axiomatic foundation:
      </p>

      <Definition title="Zermelo-Fraenkel Set Theory (ZF)">
        <p>
          Ernst Zermelo (1908) and Abraham Fraenkel developed axioms that
          allow useful sets while avoiding paradoxes. Key features:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Sets are built from simpler sets in controlled ways</li>
          <li>No "set of all sets" can be formed</li>
          <li>The axiom of separation restricts which subsets can be formed</li>
        </ul>
      </Definition>

      <Example title="Key ZF Axioms">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Empty set:</strong> There exists an empty set{' '}
            <InlineMath>\emptyset</InlineMath>
          </li>
          <li>
            <strong>Pairing:</strong> For any sets <InlineMath>a, b</InlineMath>,
            the set <InlineMath>{`\\{a, b\\}`}</InlineMath> exists
          </li>
          <li>
            <strong>Union:</strong> The union of any set of sets exists
          </li>
          <li>
            <strong>Power set:</strong> The power set of any set exists
          </li>
          <li>
            <strong>Infinity:</strong> An infinite set exists
          </li>
          <li>
            <strong>Separation:</strong> Given a set and a property, the
            subset satisfying that property exists (but only as a <em>subset</em>,
            not from scratch)
          </li>
          <li>
            <strong>Replacement:</strong> The image of a set under a function
            is a set
          </li>
        </ul>
      </Example>

      <Definition title="Axiom of Choice (AC)">
        <p>
          The <strong>Axiom of Choice</strong> states that given any collection
          of nonempty sets, we can choose one element from each simultaneously.
        </p>
        <p className="mt-2 text-dark-400">
          AC is independent of ZF but widely accepted. ZFC = ZF + AC is the
          standard foundation for most mathematics.
        </p>
      </Definition>

      <Example title="Controversial Consequences of AC">
        <p>
          The Axiom of Choice implies some surprising results:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Every vector space has a basis</li>
          <li>Every set can be well-ordered</li>
          <li>Banach-Tarski paradox: A ball can be decomposed and reassembled into two balls of the same size</li>
        </ul>
      </Example>

      <h3>Hilbert's Program</h3>

      <p>
        David Hilbert proposed an ambitious program to secure mathematics:
      </p>

      <Definition title="Hilbert's Program">
        <p>
          Hilbert aimed to:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Formalize all of mathematics in a precise symbolic system</li>
          <li>Prove that this system is <strong>consistent</strong> (cannot derive contradictions)</li>
          <li>Prove that it is <strong>complete</strong> (every true statement is provable)</li>
          <li>Provide <strong>decision procedures</strong> for mathematical truth</li>
        </ol>
      </Definition>

      <Callout type="note">
        <strong>A Bold Vision:</strong> Hilbert believed mathematics could
        be made absolutely secure through formalization. His program dominated
        foundational thinking in the 1920s—until Gödel showed it could not
        fully succeed.
      </Callout>

      <h3>The Significance of Foundations</h3>

      <p>
        The foundational crisis had lasting effects:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Rigor:</strong> Mathematics became more careful about
          definitions and assumptions.
        </li>
        <li>
          <strong>Axiomatic method:</strong> The axiomatic approach spread
          throughout mathematics.
        </li>
        <li>
          <strong>Mathematical logic:</strong> Logic became a mathematical
          subject in its own right.
        </li>
        <li>
          <strong>Philosophical questions:</strong> Deep questions about the
          nature of mathematical truth remained open.
        </li>
      </ul>

      <Callout type="info">
        <strong>From Crisis to Clarity:</strong> The paradoxes that seemed
        to threaten mathematics ultimately strengthened it. By forcing
        mathematicians to think carefully about foundations, they led to
        deeper understanding and more powerful tools—though also to the
        surprising limitations revealed by Gödel.
      </Callout>

      <SectionQuiz sectionId={69} questions={quizMap[69] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
