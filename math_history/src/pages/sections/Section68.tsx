import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2>Cantor and Set Theory</h2>

      <p>
        Georg Cantor's creation of set theory in the 1870s–1890s was one of
        the most revolutionary developments in the history of mathematics.
        By rigorously studying infinite sets, Cantor discovered that there
        are different "sizes" of infinity—a profound insight that shocked
        the mathematical world and laid the foundation for modern mathematics.
      </p>

      <Callout type="info">
        <strong>Controversial Genius:</strong> Cantor's ideas were so radical
        that many contemporaries rejected them. Leopold Kronecker called him
        a "corrupter of youth." Yet David Hilbert declared: "No one shall
        expel us from the paradise that Cantor has created."
      </Callout>

      <h3>What Is a Set?</h3>

      <Definition title="Set (Cantor's Definition)">
        <p>
          A <strong>set</strong> is a collection of definite, distinct objects
          of our perception or thought, conceived as a whole.
        </p>
        <p className="mt-2 text-dark-400">
          Sets can contain anything: numbers, points, functions, or even
          other sets.
        </p>
      </Definition>

      <Example title="Basic Sets">
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>\mathbb{N}</InlineMath>: Natural numbers {`{0, 1, 2, 3, ...}`}</li>
          <li><InlineMath>\mathbb{Z}</InlineMath>: Integers {`{..., -2, -1, 0, 1, 2, ...}`}</li>
          <li><InlineMath>\mathbb{Q}</InlineMath>: Rational numbers</li>
          <li><InlineMath>\mathbb{R}</InlineMath>: Real numbers</li>
        </ul>
      </Example>

      <h3>Comparing Infinite Sets</h3>

      <p>
        How can we compare the "sizes" of infinite sets? Cantor's key insight:
        use one-to-one correspondences.
      </p>

      <Definition title="Cardinality">
        <p>
          Two sets have the same <strong>cardinality</strong> (size) if there
          exists a bijection (one-to-one correspondence) between them.
        </p>
      </Definition>

      <Definition title="Countable Set">
        <p>
          A set is <strong>countably infinite</strong> if it has the same
          cardinality as <InlineMath>\mathbb{N}</InlineMath>—its elements can
          be listed: first, second, third, ...
        </p>
      </Definition>

      <Example title="Even Numbers Are Countable">
        <p>
          The even numbers seem like "half" of the natural numbers, but they
          have the same cardinality:
        </p>
        <MathBlock>
          {`n \\leftrightarrow 2n`}
        </MathBlock>
        <p className="mt-2">
          0 ↔ 0, 1 ↔ 2, 2 ↔ 4, 3 ↔ 6, ...
        </p>
        <p className="mt-2 text-dark-400">
          Every natural number pairs with exactly one even number, and vice
          versa. Same size!
        </p>
      </Example>

      <Example title="Integers Are Countable">
        <p>
          The integers can be listed:
        </p>
        <MathBlock>
          {`0, 1, -1, 2, -2, 3, -3, \\ldots`}
        </MathBlock>
        <p className="mt-2">
          This gives a bijection with <InlineMath>\mathbb{N}</InlineMath>,
          so <InlineMath>|\mathbb{Z}| = |\mathbb{N}|</InlineMath>.
        </p>
      </Example>

      <Theorem title="Rationals Are Countable">
        <p>
          The rational numbers <InlineMath>\mathbb{Q}</InlineMath> are countably
          infinite—they can be put in one-to-one correspondence with{' '}
          <InlineMath>\mathbb{N}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Cantor's Diagonal Arrangement">
        <p>
          Arrange positive rationals in a grid where row <InlineMath>m</InlineMath>,
          column <InlineMath>n</InlineMath> contains <InlineMath>m/n</InlineMath>.
          Then traverse diagonally, skipping duplicates:
        </p>
        <MathBlock>
          {`\\frac{1}{1}, \\frac{2}{1}, \\frac{1}{2}, \\frac{3}{1}, \\frac{2}{2}, \\frac{1}{3}, \\frac{4}{1}, \\ldots`}
        </MathBlock>
        <p className="mt-2">
          This lists all positive rationals, proving they're countable.
        </p>
      </Example>

      <h3>The Uncountability of the Reals</h3>

      <p>
        Cantor's most stunning result: the real numbers cannot be counted.
      </p>

      <Theorem title="Cantor's Diagonal Argument (1891)">
        <p>
          The real numbers are <strong>uncountable</strong>—there is no
          bijection between <InlineMath>\mathbb{R}</InlineMath> and{' '}
          <InlineMath>\mathbb{N}</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Diagonal Argument">
        <p>
          Suppose the reals in <InlineMath>[0, 1]</InlineMath> could be listed:
        </p>
        <MathBlock>
          {`r_1 = 0.d_{11}d_{12}d_{13}\\ldots`}
        </MathBlock>
        <MathBlock>
          {`r_2 = 0.d_{21}d_{22}d_{23}\\ldots`}
        </MathBlock>
        <MathBlock>
          {`r_3 = 0.d_{31}d_{32}d_{33}\\ldots`}
        </MathBlock>
        <p className="mt-2">
          Construct a new number <InlineMath>r</InlineMath> where the{' '}
          <InlineMath>n</InlineMath>-th digit differs from{' '}
          <InlineMath>d_{nn}</InlineMath>:
        </p>
        <MathBlock>
          {`r = 0.e_1e_2e_3\\ldots \\quad \\text{where } e_n \\neq d_{nn}`}
        </MathBlock>
        <p className="mt-2">
          Then <InlineMath>r</InlineMath> differs from every{' '}
          <InlineMath>r_n</InlineMath> in at least one digit, so{' '}
          <InlineMath>r</InlineMath> is not on the list. Contradiction!
        </p>
      </Example>

      <Callout type="note">
        <strong>Different Infinities:</strong> The reals are "larger" than
        the naturals—there are more real numbers than natural numbers, even
        though both sets are infinite. This was a revolutionary concept.
      </Callout>

      <h3>Cardinal Numbers</h3>

      <Definition title="Aleph Numbers">
        <p>
          Cantor denoted the cardinality of countably infinite sets by{' '}
          <InlineMath>\aleph_0</InlineMath> ("aleph-null"). The cardinality
          of the continuum (reals) is denoted <InlineMath>\mathfrak{c}</InlineMath>.
        </p>
        <MathBlock>
          {`|\\mathbb{N}| = \\aleph_0, \\quad |\\mathbb{R}| = \\mathfrak{c} = 2^{\\aleph_0}`}
        </MathBlock>
      </Definition>

      <Theorem title="Cantor's Theorem">
        <p>
          For any set <InlineMath>A</InlineMath>, the power set{' '}
          <InlineMath>\mathcal{P}(A)</InlineMath> (set of all subsets) has
          strictly greater cardinality:
        </p>
        <MathBlock>
          {`|A| < |\\mathcal{P}(A)|`}
        </MathBlock>
      </Theorem>

      <Example title="An Infinite Hierarchy">
        <p>
          Cantor's theorem implies an endless hierarchy of infinities:
        </p>
        <MathBlock>
          {`\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < \\cdots`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          There is no largest infinity—for any infinite set, we can always
          construct a larger one.
        </p>
      </Example>

      <h3>The Continuum Hypothesis</h3>

      <Definition title="Continuum Hypothesis">
        <p>
          The <strong>Continuum Hypothesis</strong> (CH) states that there is
          no set whose cardinality is strictly between{' '}
          <InlineMath>\aleph_0</InlineMath> and <InlineMath>\mathfrak{c}</InlineMath>.
        </p>
        <MathBlock>
          {`\\mathfrak{c} = \\aleph_1?`}
        </MathBlock>
      </Definition>

      <p>
        Cantor believed CH was true but could not prove it. The question
        would remain open for decades.
      </p>

      <Theorem title="Independence of CH">
        <p>
          Gödel (1940) showed CH is consistent with standard set theory.
          Cohen (1963) showed its negation is also consistent.
        </p>
        <p className="mt-2 text-dark-400">
          CH is <em>independent</em> of the standard axioms—it can neither
          be proved nor disproved from them!
        </p>
      </Theorem>

      <h3>Ordinal Numbers</h3>

      <p>
        Cantor also developed ordinal numbers to describe order types:
      </p>

      <Definition title="Ordinal Numbers">
        <p>
          <strong>Ordinal numbers</strong> extend the natural numbers to describe
          well-ordered sets. The first infinite ordinal is{' '}
          <InlineMath>\omega</InlineMath>, followed by{' '}
          <InlineMath>\omega + 1</InlineMath>,{' '}
          <InlineMath>\omega + 2</InlineMath>, ...,{' '}
          <InlineMath>\omega \cdot 2</InlineMath>, etc.
        </p>
      </Definition>

      <h3>Legacy</h3>

      <p>
        Set theory became the foundation of modern mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Universal language:</strong> All mathematical objects can
          be defined in terms of sets.
        </li>
        <li>
          <strong>Rigorous foundations:</strong> Set theory provides a basis
          for defining numbers, functions, and structures.
        </li>
        <li>
          <strong>New mathematics:</strong> Point-set topology, measure theory,
          and modern analysis rely on set-theoretic concepts.
        </li>
      </ul>

      <Callout type="info">
        <strong>Paradise and Paradox:</strong> Cantor's set theory opened new
        mathematical worlds but also revealed troubling paradoxes. The crisis
        these paradoxes caused would reshape the foundations of mathematics,
        leading to axiomatic set theory and profound questions about mathematical
        truth.
      </Callout>

      <SectionQuiz sectionId={68} questions={quizMap[68] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
