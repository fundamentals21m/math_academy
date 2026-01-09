import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Irrational Numbers</h2>

      <p>
        The discovery of irrational numbers is one of the most dramatic moments in
        the history of mathematics. The Pythagoreans believed that "all is number"—
        that every geometric quantity could be expressed as a ratio of whole numbers.
        The discovery that this is false shook the very foundations of Greek mathematics.
      </p>

      <h3>The Pythagorean Worldview</h3>

      <p>
        To understand why irrational numbers were so shocking, we must understand the
        Pythagorean conception of number. For the Pythagoreans:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Numbers</strong> meant positive whole numbers: 1, 2, 3, ...
        </li>
        <li>
          <strong>Ratios</strong> of numbers (what we call fractions) could express
          any meaningful quantity
        </li>
        <li>
          Two lengths were <strong>commensurable</strong> if they had a common measure—
          some unit that fit into both a whole number of times
        </li>
      </ul>

      <Definition title="Commensurable Lengths">
        <p>
          Two lengths <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are
          <strong> commensurable</strong> if there exists a length <InlineMath>u</InlineMath>
          such that <InlineMath>a = mu</InlineMath> and <InlineMath>b = nu</InlineMath>
          for some positive integers <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are
          commensurable if and only if <InlineMath>a/b</InlineMath> is rational.
        </p>
      </Definition>

      <p>
        The Pythagoreans assumed that any two lengths must be commensurable. This
        seemed obvious—surely we could always find a small enough unit to measure
        both exactly?
      </p>

      <h3>The Crisis: The Diagonal of a Square</h3>

      <p>
        Consider a square with side length 1. By the Pythagorean theorem, the
        diagonal <InlineMath>d</InlineMath> satisfies:
      </p>

      <MathBlock>
        {`d^2 = 1^2 + 1^2 = 2`}
      </MathBlock>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 200 200" className="w-64">
          {/* Square */}
          <rect x="30" y="30" width="120" height="120" fill="none" stroke="#60a5fa" strokeWidth="2" />
          
          {/* Diagonal */}
          <line x1="30" y1="150" x2="150" y2="30" stroke="#f472b6" strokeWidth="2" />
          
          {/* Labels */}
          <text x="90" y="170" textAnchor="middle" fill="#60a5fa" fontSize="14">1</text>
          <text x="165" y="95" fill="#60a5fa" fontSize="14">1</text>
          <text x="75" y="80" fill="#f472b6" fontSize="14">d = √2</text>
          
          {/* Right angle marker */}
          <path d="M 30 140 L 40 140 L 40 150" fill="none" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>

      <p>
        So <InlineMath>d = \\sqrt{2}</InlineMath>. But is <InlineMath>\\sqrt{2}</InlineMath>
        rational? Is the diagonal commensurable with the side?
      </p>

      <Theorem title="Irrationality of √2">
        <p>
          <InlineMath>\\sqrt{2}</InlineMath> is irrational—it cannot be expressed as a
          ratio of two integers.
        </p>
      </Theorem>

      <h3>The Proof</h3>

      <p>
        This proof, attributed to Hippasus of Metapontum (a Pythagorean), uses
        <em>proof by contradiction</em>. It is one of the most elegant arguments
        in all of mathematics.
      </p>

      <Callout type="note">
        <strong>Proof by Contradiction:</strong> We assume the opposite of what we
        want to prove, then show this leads to a logical impossibility. This forces
        us to conclude that our assumption was wrong.
      </Callout>

      <p><strong>Proof:</strong></p>

      <p>
        Suppose, for the sake of contradiction, that <InlineMath>\\sqrt{2}</InlineMath>
        is rational. Then we can write:
      </p>

      <MathBlock>
        {`\\sqrt{2} = \\frac{p}{q}`}
      </MathBlock>

      <p>
        where <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> are positive
        integers with no common factors (the fraction is in lowest terms).
      </p>

      <p>Squaring both sides:</p>

      <MathBlock>
        {`2 = \\frac{p^2}{q^2} \\quad \\Rightarrow \\quad p^2 = 2q^2`}
      </MathBlock>

      <p>
        This means <InlineMath>p^2</InlineMath> is even. But if <InlineMath>p^2</InlineMath>
        is even, then <InlineMath>p</InlineMath> must be even (because odd² = odd).
      </p>

      <p>
        So <InlineMath>p = 2k</InlineMath> for some integer <InlineMath>k</InlineMath>.
        Substituting:
      </p>

      <MathBlock>
        {`(2k)^2 = 2q^2 \\quad \\Rightarrow \\quad 4k^2 = 2q^2 \\quad \\Rightarrow \\quad q^2 = 2k^2`}
      </MathBlock>

      <p>
        This means <InlineMath>q^2</InlineMath> is even, so <InlineMath>q</InlineMath>
        must also be even.
      </p>

      <Callout type="danger">
        <strong>Contradiction!</strong> We assumed <InlineMath>p/q</InlineMath> was in
        lowest terms (no common factors), but we've just shown both <InlineMath>p</InlineMath>
        and <InlineMath>q</InlineMath> are even—meaning they share a factor of 2.
      </Callout>

      <p>
        Since our assumption led to a contradiction, the assumption must be false.
        Therefore, <InlineMath>\\sqrt{2}</InlineMath> is <strong>not</strong> rational. ∎
      </p>

      <h3>The Aftermath</h3>

      <p>
        According to legend, when Hippasus revealed this discovery, the Pythagoreans
        were so disturbed that they drowned him at sea. Whether or not this is true,
        the story reflects the profound shock this discovery caused.
      </p>

      <Example title="Other Irrational Numbers">
        <p>
          The same proof technique shows that many other square roots are irrational:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><InlineMath>\\sqrt{3}</InlineMath> is irrational</li>
          <li><InlineMath>\\sqrt{5}</InlineMath> is irrational</li>
          <li><InlineMath>\\sqrt{n}</InlineMath> is irrational unless <InlineMath>n</InlineMath> is a perfect square</li>
        </ul>
      </Example>

      <h3>Mathematical Significance</h3>

      <p>
        The discovery of irrational numbers forced mathematicians to rethink the
        relationship between geometry and arithmetic:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Geometry could not be reduced to arithmetic</strong>—there were
          lengths that no fraction could represent
        </li>
        <li>
          <strong>The number system had to be expanded</strong>—eventually leading
          to the real numbers
        </li>
        <li>
          <strong>New proof techniques emerged</strong>—the Greeks developed the
          method of exhaustion to handle limits without irrational numbers
        </li>
      </ul>

      <Callout type="info">
        <strong>Looking Forward:</strong> The Greeks never fully resolved the crisis
        of irrational numbers. A rigorous definition of real numbers had to wait until
        the 19th century, with the work of Dedekind and Cantor.
      </Callout>

      <SectionQuiz
        sectionId={3}
        questions={quizMap[3] || []}
        title="Irrational Numbers Quiz"
      />
    </LessonLayout>
  );
}
