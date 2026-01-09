import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h2>Turing and Computability</h2>

      <p>
        What does it mean to "compute"? In 1936, Alan Turing answered this
        question with a mathematical model—the <strong>Turing machine</strong>—that
        captured the essence of mechanical calculation. His work not only
        founded computer science but also revealed fundamental limits on what
        can be computed, connecting beautifully with Gödel's incompleteness
        results.
      </p>

      <Callout type="info">
        <strong>Birth of Computer Science:</strong> Before computers existed,
        Turing defined what computation means in principle. His abstract
        machines, existing only on paper, laid the theoretical foundation for
        all digital computers and established the field of computability theory.
      </Callout>

      <h3>The Entscheidungsproblem</h3>

      <p>
        Turing's work addressed Hilbert's <em>Entscheidungsproblem</em>
        (decision problem):
      </p>

      <Definition title="Entscheidungsproblem">
        <p>
          Is there an algorithm that, given any mathematical statement, can
          determine whether it is provable?
        </p>
        <p className="mt-2 text-dark-400">
          Hilbert believed such a "decision procedure" should exist, mechanizing
          mathematical discovery.
        </p>
      </Definition>

      <h3>Turing Machines</h3>

      <p>
        To prove the Entscheidungsproblem has no solution, Turing first had
        to define "algorithm" precisely:
      </p>

      <Definition title="Turing Machine">
        <p>
          A <strong>Turing machine</strong> consists of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>An infinite tape divided into cells, each containing a symbol</li>
          <li>A head that reads/writes symbols and moves left or right</li>
          <li>A finite set of states</li>
          <li>A transition table specifying actions based on current state and symbol</li>
        </ul>
      </Definition>

      <Example title="How It Works">
        <p>
          At each step, based on the current state and symbol under the head,
          the machine:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Writes a symbol (possibly the same)</li>
          <li>Moves left or right (or stays)</li>
          <li>Enters a new state (possibly the same)</li>
        </ol>
        <p className="mt-2">
          The machine halts when it reaches a designated "halt" state.
        </p>
      </Example>

      <Theorem title="Church-Turing Thesis">
        <p>
          Any function that can be computed by any reasonable notion of
          "algorithm" can be computed by a Turing machine.
        </p>
        <p className="mt-2 text-dark-400">
          This is a thesis, not a theorem—it can't be proved because "algorithm"
          is informal. But all proposed alternatives have proven equivalent.
        </p>
      </Theorem>

      <h3>Universal Turing Machines</h3>

      <p>
        A remarkable discovery: one machine can simulate all others.
      </p>

      <Definition title="Universal Turing Machine">
        <p>
          A <strong>universal Turing machine</strong> <InlineMath>U</InlineMath>{' '}
          takes as input:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A description of any Turing machine <InlineMath>M</InlineMath></li>
          <li>An input <InlineMath>x</InlineMath></li>
        </ul>
        <p className="mt-2">
          And simulates what <InlineMath>M</InlineMath> would do on{' '}
          <InlineMath>x</InlineMath>.
        </p>
      </Definition>

      <Callout type="note">
        <strong>The Stored-Program Computer:</strong> The universal Turing
        machine is the theoretical basis for modern computers. A single
        physical machine can run any program—it doesn't need separate hardware
        for each task.
      </Callout>

      <h3>The Halting Problem</h3>

      <p>
        Turing proved that some problems are fundamentally unsolvable:
      </p>

      <Theorem title="The Halting Problem Is Undecidable">
        <p>
          There is no algorithm that, given a description of a Turing machine{' '}
          <InlineMath>M</InlineMath> and input <InlineMath>x</InlineMath>,
          can always correctly determine whether <InlineMath>M</InlineMath>{' '}
          halts on <InlineMath>x</InlineMath>.
        </p>
      </Theorem>

      <Example title="Proof Sketch">
        <p>
          Suppose a halting-detector <InlineMath>H(M, x)</InlineMath> exists.
          Construct a new machine <InlineMath>D</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>D(M)</InlineMath> runs <InlineMath>H(M, M)</InlineMath></li>
          <li>If <InlineMath>H</InlineMath> says <InlineMath>M</InlineMath> halts on itself, <InlineMath>D</InlineMath> loops forever</li>
          <li>If <InlineMath>H</InlineMath> says <InlineMath>M</InlineMath> doesn't halt on itself, <InlineMath>D</InlineMath> halts</li>
        </ul>
        <p className="mt-2">
          Now ask: does <InlineMath>D(D)</InlineMath> halt?
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>D(D)</InlineMath> halts, then <InlineMath>H(D, D)</InlineMath> said "halts", so <InlineMath>D(D)</InlineMath> loops. Contradiction!</li>
          <li>If <InlineMath>D(D)</InlineMath> doesn't halt, then <InlineMath>H(D, D)</InlineMath> said "doesn't halt", so <InlineMath>D(D)</InlineMath> halts. Contradiction!</li>
        </ul>
        <p className="mt-2 text-dark-400">
          So <InlineMath>H</InlineMath> cannot exist.
        </p>
      </Example>

      <h3>Connection to Incompleteness</h3>

      <p>
        Turing's result connects deeply to Gödel's:
      </p>

      <Theorem title="Negative Solution to Entscheidungsproblem">
        <p>
          There is no algorithm to decide whether arbitrary statements in
          arithmetic are provable. The Entscheidungsproblem has no solution.
        </p>
      </Theorem>

      <Example title="Undecidability and Incompleteness">
        <p>
          If we could decide provability, we could determine whether statements
          like the Gödel sentence are provable—but Gödel showed such statements
          exist that are true but unprovable. The inability to decide provability
          follows from incompleteness.
        </p>
      </Example>

      <h3>Other Undecidable Problems</h3>

      <p>
        Many natural problems are undecidable:
      </p>

      <Example title="Examples of Undecidable Problems">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Word problem for groups:</strong> Given a group presentation,
            determine if two words represent the same element
          </li>
          <li>
            <strong>Hilbert's 10th problem:</strong> Determine if a Diophantine
            equation has integer solutions (proved undecidable by Matiyasevich, 1970)
          </li>
          <li>
            <strong>Post correspondence problem:</strong> A seemingly simple
            combinatorial problem
          </li>
          <li>
            <strong>Tiling problems:</strong> Whether a set of tiles can tile
            the plane
          </li>
        </ul>
      </Example>

      <h3>Complexity Theory</h3>

      <p>
        Beyond computability, we study computational efficiency:
      </p>

      <Definition title="P and NP">
        <p>
          <strong>P</strong> is the class of problems solvable in polynomial
          time. <strong>NP</strong> is the class of problems whose solutions
          can be verified in polynomial time.
        </p>
        <p className="mt-2 text-dark-400">
          The question "P = NP?" is one of the most important open problems
          in computer science and mathematics.
        </p>
      </Definition>

      <h3>Turing's Legacy</h3>

      <p>
        Alan Turing (1912–1954) made profound contributions:
      </p>

      <Example title="Contributions Beyond Computability">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Codebreaking:</strong> Led the effort to break the Enigma
            cipher in World War II
          </li>
          <li>
            <strong>Artificial Intelligence:</strong> Proposed the "Turing test"
            for machine intelligence
          </li>
          <li>
            <strong>Morphogenesis:</strong> Mathematical models of biological
            pattern formation
          </li>
          <li>
            <strong>Early computers:</strong> Designed some of the first
            programmable computers
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>The Boundary of the Computable:</strong> Turing showed that
        while computation is immensely powerful, it has absolute limits. Some
        problems cannot be solved by any algorithm, no matter how clever.
        Yet within these limits, the theory of computation has enabled the
        digital revolution that transformed our world. Turing's work stands
        as one of the great intellectual achievements of the 20th century.
      </Callout>

      <h3>Conclusion: Mathematics and Its History</h3>

      <p>
        From the ancient discovery of <InlineMath>{'\\sqrt{2}'}</InlineMath> to
        Turing's machines, we have traced mathematics through three millennia.
        We've seen:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Constant evolution:</strong> Each age builds on its predecessors
          while asking new questions
        </li>
        <li>
          <strong>Deep connections:</strong> Number theory, algebra, geometry,
          analysis, and logic interweave
        </li>
        <li>
          <strong>Profound discoveries:</strong> From irrational numbers to
          non-Euclidean geometry to incompleteness
        </li>
        <li>
          <strong>Enduring mysteries:</strong> The Riemann hypothesis, P vs NP,
          and countless questions remain open
        </li>
      </ul>

      <p className="mt-4">
        Mathematics continues to grow, revealing new structures, solving old
        problems, and finding unexpected applications. Its history is not
        merely the past—it illuminates the present and points toward futures
        we cannot yet imagine.
      </p>

      <SectionQuiz sectionId={71} questions={quizMap[71] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
