import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2>Galois Theory</h2>

      <p>
        Évariste Galois, killed in a duel at age 20, left behind one of the
        most profound theories in mathematics. Galois theory reveals a deep
        connection between the solvability of polynomial equations and the
        structure of certain groups of permutations. It explains <em>why</em>{' '}
        quadratic, cubic, and quartic equations can be solved by radicals,
        while the general quintic cannot.
      </p>

      <Callout type="info">
        <strong>A Tragic Genius:</strong> Galois developed his theory in his
        teens, was rejected by the mathematical establishment, imprisoned for
        political activities, and died in 1832 from wounds sustained in a
        duel. His hastily written notes, penned the night before his death,
        contained ideas that would take decades to fully understand.
      </Callout>

      <h3>The Problem</h3>

      <p>
        The central question: which polynomial equations can be solved using
        only arithmetic operations and root extractions (radicals)?
      </p>

      <Example title="Solvable by Radicals">
        <p>
          The quadratic formula expresses roots using radicals:
        </p>
        <MathBlock>
          {`x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`}
        </MathBlock>
        <p className="mt-2">
          Similarly, cubic and quartic formulas exist (though more complex).
          But what about degree 5 and higher?
        </p>
      </Example>

      <p>
        Abel proved in 1824 that no general formula exists for degree 5, but
        his proof didn't explain <em>which</em> specific quintics are solvable.
        Galois went further.
      </p>

      <h3>Galois's Key Insight</h3>

      <p>
        Galois associated to each polynomial a group—now called the{' '}
        <strong>Galois group</strong>—that encodes the symmetries among its
        roots.
      </p>

      <Definition title="Galois Group">
        <p>
          The <strong>Galois group</strong> of a polynomial{' '}
          <InlineMath>f(x)</InlineMath> over a field <InlineMath>F</InlineMath>{' '}
          is the group of all automorphisms of the splitting field of{' '}
          <InlineMath>f</InlineMath> that fix <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Informally: it's the group of permutations of the roots that preserve
          all algebraic relations among them.
        </p>
      </Definition>

      <Example title="Galois Group of x² - 2">
        <p>
          The polynomial <InlineMath>x^2 - 2</InlineMath> has roots{' '}
          <InlineMath>\pm\sqrt{2}</InlineMath>. The only nontrivial symmetry
          swaps them: <InlineMath>{`\\sqrt{2} \\leftrightarrow -\\sqrt{2}`}</InlineMath>.
        </p>
        <p className="mt-2">
          The Galois group is <InlineMath>{`\\mathbb{Z}/2\\mathbb{Z}`}</InlineMath>,
          the cyclic group of order 2.
        </p>
      </Example>

      <Example title="Galois Group of a Cubic">
        <p>
          For a general cubic <InlineMath>x^3 + px + q</InlineMath> with three
          distinct roots, the Galois group is <InlineMath>S_3</InlineMath>{' '}
          (all 6 permutations of three roots).
        </p>
        <p className="mt-2">
          If the discriminant is a perfect square, the Galois group is{' '}
          <InlineMath>A_3</InlineMath> (just the 3 even permutations).
        </p>
      </Example>

      <h3>Solvability Criterion</h3>

      <Theorem title="Galois's Theorem">
        <p>
          A polynomial equation is <strong>solvable by radicals</strong> if
          and only if its Galois group is a <strong>solvable group</strong>.
        </p>
      </Theorem>

      <p>
        But what is a solvable group?
      </p>

      <Definition title="Solvable Group">
        <p>
          A group <InlineMath>G</InlineMath> is <strong>solvable</strong> if
          it has a chain of subgroups:
        </p>
        <MathBlock>
          {`\\{e\\} = G_0 \\triangleleft G_1 \\triangleleft G_2 \\triangleleft \\cdots \\triangleleft G_n = G`}
        </MathBlock>
        <p className="mt-2">
          where each quotient <InlineMath>G_{i+1}/G_i</InlineMath> is abelian
          (commutative).
        </p>
      </Definition>

      <Example title="S_3 is Solvable">
        <p>
          The symmetric group <InlineMath>S_3</InlineMath> has the chain:
        </p>
        <MathBlock>
          {`\\{e\\} \\triangleleft A_3 \\triangleleft S_3`}
        </MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`A_3/\\{e\\}`}</InlineMath> and <InlineMath>S_3/A_3</InlineMath>{' '}
          are both abelian (cyclic groups), <InlineMath>S_3</InlineMath> is solvable.
        </p>
        <p className="mt-2 text-dark-400">
          This is why cubic equations can be solved by radicals.
        </p>
      </Example>

      <Example title="S_4 is Solvable">
        <p>
          Similarly, <InlineMath>S_4</InlineMath> has the chain:
        </p>
        <MathBlock>
          {`\\{e\\} \\triangleleft V_4 \\triangleleft A_4 \\triangleleft S_4`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>V_4</InlineMath> is the Klein four-group. All
          quotients are abelian, so <InlineMath>S_4</InlineMath> is solvable.
        </p>
        <p className="mt-2 text-dark-400">
          This explains why quartic equations can be solved by radicals.
        </p>
      </Example>

      <h3>Why the Quintic Fails</h3>

      <Theorem title="A_5 is Not Solvable">
        <p>
          The alternating group <InlineMath>A_5</InlineMath> is{' '}
          <strong>simple</strong>—it has no nontrivial normal subgroups.
        </p>
        <p className="mt-2">
          Since <InlineMath>A_5</InlineMath> is simple and non-abelian, it
          cannot have a chain with abelian quotients. Therefore{' '}
          <InlineMath>A_5</InlineMath>, and hence <InlineMath>S_5</InlineMath>,
          is not solvable.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>The Obstruction:</strong> The general quintic has Galois group{' '}
        <InlineMath>S_5</InlineMath>, which is not solvable. This is <em>why</em>{' '}
        no quintic formula exists—not just that we haven't found one, but that
        none can exist.
      </Callout>

      <h3>What Galois Theory Tells Us</h3>

      <Example title="Specific Solvable Quintics">
        <p>
          Some specific quintic equations <em>are</em> solvable by radicals—those
          whose Galois group is a solvable subgroup of <InlineMath>S_5</InlineMath>.
        </p>
        <p className="mt-2">
          For example, <InlineMath>x^5 - 2 = 0</InlineMath> has a solvable
          Galois group and its root is simply <InlineMath>\sqrt[5]{2}</InlineMath>.
        </p>
      </Example>

      <Example title="Constructibility">
        <p>
          Galois theory also determines which regular polygons can be
          constructed with straightedge and compass. A regular{' '}
          <InlineMath>n</InlineMath>-gon is constructible if and only if{' '}
          <InlineMath>n</InlineMath> is a product of a power of 2 and distinct
          Fermat primes.
        </p>
        <p className="mt-2 text-dark-400">
          This explains why 17-gon is constructible (Gauss's discovery) but
          7-gon is not.
        </p>
      </Example>

      <h3>The Fundamental Theorem</h3>

      <Theorem title="Fundamental Theorem of Galois Theory">
        <p>
          There is a one-to-one correspondence between:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Subgroups of the Galois group</li>
          <li>Intermediate field extensions</li>
        </ul>
        <p className="mt-2">
          Moreover, normal subgroups correspond to normal (Galois) extensions.
        </p>
      </Theorem>

      <p>
        This "Galois correspondence" reveals that solving equations is
        equivalent to understanding group structure.
      </p>

      <h3>Legacy</h3>

      <p>
        Galois theory transformed mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Birth of abstract algebra:</strong> Groups, fields, and their
          interplay became central mathematical objects.
        </li>
        <li>
          <strong>Model for modern mathematics:</strong> Galois's approach—studying
          symmetries and structure rather than explicit computations—became
          the paradigm.
        </li>
        <li>
          <strong>Applications:</strong> Coding theory, cryptography, and
          algebraic geometry all build on Galois theory.
        </li>
      </ul>

      <Callout type="info">
        <strong>Galois's Vision:</strong> In his final letter, Galois wrote:
        "There is something to complete in this demonstration. I do not have
        the time." What he left incomplete took mathematicians decades to
        fully develop, but his vision—that symmetry groups control algebraic
        solvability—was profoundly correct.
      </Callout>

      <SectionQuiz sectionId={61} questions={quizMap[61] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
