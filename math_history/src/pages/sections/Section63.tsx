import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2>Abstract Groups</h2>

      <p>
        From permutations, symmetries, and algebraic structures, mathematicians
        gradually recognized that these diverse examples shared common properties.
        The <em>abstract</em> group concept—defining groups purely by axioms
        without reference to what the elements "are"—emerged in the late 19th
        century and became a cornerstone of modern algebra.
      </p>

      <Callout type="info">
        <strong>Abstraction's Power:</strong> By stripping away specific
        contexts and focusing on structural properties, mathematicians could
        prove theorems once that apply to permutations, symmetries, number
        systems, and structures not yet imagined.
      </Callout>

      <h3>The Group Axioms</h3>

      <Definition title="Group">
        <p>
          A <strong>group</strong> is a set <InlineMath>G</InlineMath> with a
          binary operation <InlineMath>\cdot</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Closure:</strong> For all <InlineMath>a, b \in G</InlineMath>,{' '}
            <InlineMath>a \cdot b \in G</InlineMath></li>
          <li><strong>Associativity:</strong> <InlineMath>(a \cdot b) \cdot c = a \cdot (b \cdot c)</InlineMath></li>
          <li><strong>Identity:</strong> There exists <InlineMath>e \in G</InlineMath> with{' '}
            <InlineMath>e \cdot a = a \cdot e = a</InlineMath> for all <InlineMath>a</InlineMath></li>
          <li><strong>Inverses:</strong> For each <InlineMath>a</InlineMath>, there exists{' '}
            <InlineMath>a^{-1}</InlineMath> with <InlineMath>a \cdot a^{-1} = a^{-1} \cdot a = e</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Examples of Groups">
        <p>
          We've seen many groups:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>(\mathbb{Z}, +)</InlineMath>: integers under addition</li>
          <li><InlineMath>(\mathbb{Q}^*, \times)</InlineMath>: nonzero rationals under multiplication</li>
          <li><InlineMath>(S_n, \circ)</InlineMath>: permutations under composition</li>
          <li><InlineMath>(D_n, \circ)</InlineMath>: symmetries of a regular <InlineMath>n</InlineMath>-gon</li>
          <li><InlineMath>GL_n(\mathbb{R})</InlineMath>: invertible matrices under multiplication</li>
        </ul>
      </Example>

      <Definition title="Abelian Group">
        <p>
          A group is <strong>abelian</strong> (or commutative) if{' '}
          <InlineMath>a \cdot b = b \cdot a</InlineMath> for all{' '}
          <InlineMath>a, b</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Named after Niels Henrik Abel. Examples: <InlineMath>(\mathbb{Z}, +)</InlineMath>,{' '}
          cyclic groups. Non-examples: <InlineMath>S_n</InlineMath> for{' '}
          <InlineMath>n \geq 3</InlineMath>, <InlineMath>D_n</InlineMath> for{' '}
          <InlineMath>n \geq 3</InlineMath>.
        </p>
      </Definition>

      <h3>Subgroups and Quotients</h3>

      <Definition title="Subgroup">
        <p>
          A <strong>subgroup</strong> <InlineMath>H</InlineMath> of{' '}
          <InlineMath>G</InlineMath> is a subset that is itself a group under
          the same operation. We write <InlineMath>H \leq G</InlineMath>.
        </p>
      </Definition>

      <Example title="Subgroups of Z">
        <p>
          The subgroups of <InlineMath>{`(\\mathbb{Z}, +)`}</InlineMath> are exactly{' '}
          <InlineMath>{`n\\mathbb{Z} = \\{..., -2n, -n, 0, n, 2n, ...\\}`}</InlineMath>{' '}
          for <InlineMath>{`n \\geq 0`}</InlineMath>.
        </p>
      </Example>

      <Definition title="Normal Subgroup">
        <p>
          A subgroup <InlineMath>N</InlineMath> is <strong>normal</strong> in{' '}
          <InlineMath>G</InlineMath> (written <InlineMath>N \trianglelefteq G</InlineMath>)
          if <InlineMath>gNg^{-1} = N</InlineMath> for all <InlineMath>g \in G</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Normal subgroups are exactly those for which we can form a quotient group.
        </p>
      </Definition>

      <Definition title="Quotient Group">
        <p>
          If <InlineMath>N \trianglelefteq G</InlineMath>, the <strong>quotient
          group</strong> <InlineMath>G/N</InlineMath> consists of cosets{' '}
          <InlineMath>gN</InlineMath> with operation{' '}
          <InlineMath>(gN)(hN) = (gh)N</InlineMath>.
        </p>
      </Definition>

      <Example title="Z/nZ">
        <p>
          The quotient <InlineMath>\mathbb{Z}/n\mathbb{Z}</InlineMath> is the
          cyclic group of order <InlineMath>n</InlineMath>—integers modulo{' '}
          <InlineMath>n</InlineMath>.
        </p>
      </Example>

      <h3>Homomorphisms and Isomorphisms</h3>

      <Definition title="Group Homomorphism">
        <p>
          A <strong>homomorphism</strong> <InlineMath>\phi: G \to H</InlineMath>{' '}
          is a function preserving the group operation:
        </p>
        <MathBlock>
          {`\\phi(ab) = \\phi(a)\\phi(b)`}
        </MathBlock>
      </Definition>

      <Definition title="Isomorphism">
        <p>
          An <strong>isomorphism</strong> is a bijective homomorphism. Groups
          are <strong>isomorphic</strong> (<InlineMath>G \cong H</InlineMath>)
          if there exists an isomorphism between them.
        </p>
        <p className="mt-2 text-dark-400">
          Isomorphic groups are "structurally identical"—they differ only in
          the names of elements.
        </p>
      </Definition>

      <Theorem title="First Isomorphism Theorem">
        <p>
          If <InlineMath>\phi: G \to H</InlineMath> is a homomorphism, then:
        </p>
        <MathBlock>
          {`G / \\ker(\\phi) \\cong \\text{im}(\\phi)`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This fundamental theorem relates kernels, images, and quotients.
        </p>
      </Theorem>

      <h3>Classification of Groups</h3>

      <p>
        A major goal of group theory is classification:
      </p>

      <Theorem title="Classification of Finite Abelian Groups">
        <p>
          Every finite abelian group is isomorphic to a direct product of
          cyclic groups of prime power order:
        </p>
        <MathBlock>
          {`G \\cong \\mathbb{Z}/p_1^{a_1}\\mathbb{Z} \\times \\cdots \\times \\mathbb{Z}/p_k^{a_k}\\mathbb{Z}`}
        </MathBlock>
      </Theorem>

      <Example title="Groups of Order 8">
        <p>
          The abelian groups of order 8 are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>\mathbb{Z}/8\mathbb{Z}</InlineMath> (cyclic)</li>
          <li><InlineMath>\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}</InlineMath></li>
          <li><InlineMath>\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}</InlineMath></li>
        </ul>
      </Example>

      <h3>Simple Groups</h3>

      <Definition title="Simple Group">
        <p>
          A group is <strong>simple</strong> if it has no nontrivial normal
          subgroups (only <InlineMath>{`\\{e\\}`}</InlineMath> and the whole group).
        </p>
      </Definition>

      <p>
        Simple groups are the "atoms" of group theory—all groups are built
        from simple groups through extensions.
      </p>

      <Theorem title="Classification of Finite Simple Groups">
        <p>
          The finite simple groups fall into several families:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Cyclic groups <InlineMath>\mathbb{Z}/p\mathbb{Z}</InlineMath> for prime <InlineMath>p</InlineMath></li>
          <li>Alternating groups <InlineMath>A_n</InlineMath> for <InlineMath>n \geq 5</InlineMath></li>
          <li>Groups of Lie type (classical and exceptional)</li>
          <li>26 sporadic groups (including the Monster)</li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>A Monumental Achievement:</strong> The classification of
        finite simple groups, completed around 1980, is one of the longest
        proofs in mathematics—spanning tens of thousands of pages across
        hundreds of papers by dozens of mathematicians.
      </Callout>

      <h3>Historical Development</h3>

      <p>
        The abstract group concept emerged gradually:
      </p>

      <Example title="Key Contributors">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Lagrange (1770s):</strong> Studied permutations in equation
            theory without the group concept
          </li>
          <li>
            <strong>Galois (1830s):</strong> Used groups implicitly to study
            solvability
          </li>
          <li>
            <strong>Cayley (1854):</strong> First abstract definition of groups
          </li>
          <li>
            <strong>Jordan, Hölder (1870s–1890s):</strong> Developed structure
            theory and Jordan-Hölder theorem
          </li>
          <li>
            <strong>Burnside, Frobenius (1900s):</strong> Developed representation
            theory
          </li>
        </ul>
      </Example>

      <h3>Modern Applications</h3>

      <p>
        Abstract groups appear throughout mathematics and science:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Cryptography:</strong> RSA uses the group{' '}
          <InlineMath>(\mathbb{Z}/n\mathbb{Z})^*</InlineMath>; elliptic curve
          cryptography uses groups of points on elliptic curves.
        </li>
        <li>
          <strong>Physics:</strong> Particle physics is built on Lie groups;
          quantum mechanics uses unitary groups.
        </li>
        <li>
          <strong>Chemistry:</strong> Molecular symmetry groups determine
          spectroscopic properties.
        </li>
        <li>
          <strong>Computer science:</strong> Permutation groups arise in
          algorithm design and computational complexity.
        </li>
      </ul>

      <Callout type="info">
        <strong>The Abstractionist's Triumph:</strong> The journey from
        concrete permutations to abstract groups exemplifies mathematics'
        power: by identifying common structure, we create tools applicable
        far beyond their origin. Group theory, born from polynomial equations,
        now illuminates particle physics, cryptography, and countless other
        fields.
      </Callout>

      <SectionQuiz sectionId={63} questions={quizMap[63] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
