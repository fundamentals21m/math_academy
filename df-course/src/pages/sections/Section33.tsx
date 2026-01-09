import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2>Free Groups</h2>

      <p>
        Free groups are fundamental objects in group theory, representing groups with no relations
        other than those required by the group axioms. They serve as "universal" groups from which
        all other groups can be obtained as quotients, making them essential for understanding
        group presentations.
      </p>

      <h3>Words and Reduced Words</h3>

      <Definition title="Alphabet and Words">
        <p>
          Let <InlineMath>S</InlineMath> be a set. The <strong>alphabet</strong> on <InlineMath>S</InlineMath> is
          the set <InlineMath>{'S^{\\pm 1} = S \\cup S^{-1}'}</InlineMath>, where <InlineMath>{'S^{-1} = \\{s^{-1} : s \\in S\\}'}</InlineMath> is
          a set of formal inverses disjoint from <InlineMath>S</InlineMath>.
        </p>
        <p className="mt-2">
          A <strong>word</strong> in the alphabet <InlineMath>{'S^{\\pm 1}'}</InlineMath> is a finite sequence
          <InlineMath>{'w = s_1^{\\epsilon_1} s_2^{\\epsilon_2} \\cdots s_n^{\\epsilon_n}'}</InlineMath> where
          <InlineMath>{'s_i \\in S'}</InlineMath> and <InlineMath>{'\\epsilon_i \\in \\{1, -1\\}'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Reduced Words">
        <p>
          A word <InlineMath>w</InlineMath> is <strong>reduced</strong> if it contains no subword of the
          form <InlineMath>{'ss^{-1}'}</InlineMath> or <InlineMath>{'s^{-1}s'}</InlineMath> for any <InlineMath>{'s \\in S'}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>empty word</strong>, denoted <InlineMath>1</InlineMath> or <InlineMath>e</InlineMath>,
          is the unique word of length 0 and is considered reduced.
        </p>
      </Definition>

      <Example title="Reduced and Non-Reduced Words">
        <p>
          Let <InlineMath>{'S = \\{a, b\\}'}</InlineMath>. Consider these words:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'ab^{-1}a'}</InlineMath> is reduced</li>
          <li><InlineMath>{'abb^{-1}a'}</InlineMath> is NOT reduced (contains <InlineMath>{'bb^{-1}'}</InlineMath>)</li>
          <li><InlineMath>{'a^{-1}ba^{-1}'}</InlineMath> is reduced</li>
          <li><InlineMath>{'a^{-1}aa^{-1}b'}</InlineMath> is NOT reduced (contains <InlineMath>{'a^{-1}a'}</InlineMath>)</li>
        </ul>
      </Example>

      <h3>The Free Group</h3>

      <Definition title="Free Group">
        <p>
          The <strong>free group</strong> on a set <InlineMath>S</InlineMath>, denoted <InlineMath>F(S)</InlineMath> or <InlineMath>F_S</InlineMath>,
          is the set of all reduced words in the alphabet <InlineMath>{'S^{\\pm 1}'}</InlineMath>, with the group operation
          being concatenation followed by reduction.
        </p>
        <p className="mt-2">
          Explicitly, for words <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>, the product <InlineMath>uv</InlineMath> is
          obtained by concatenating <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>, then repeatedly canceling
          adjacent inverse pairs until the result is reduced.
        </p>
      </Definition>

      <Example title="Multiplication in F({a,b})">
        <p>
          In the free group <InlineMath>{'F(\\{a, b\\})'}</InlineMath>:
        </p>
        <MathBlock>
          {'(ab^{-1}) \\cdot (ba^2) = ab^{-1}ba^2 = aa^2 = a^3'}
        </MathBlock>
        <p className="mt-2">
          The <InlineMath>{'b^{-1}b'}</InlineMath> in the middle cancels, leaving <InlineMath>{'a^3'}</InlineMath>.
        </p>
        <MathBlock>
          {'(aba^{-1}) \\cdot (ab^{-1}a) = aba^{-1}ab^{-1}a = abb^{-1}a = a^2'}
        </MathBlock>
      </Example>

      <Theorem title="Universal Property of Free Groups"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: F(S) \\to G'}</InlineMath> by extending <InlineMath>f</InlineMath> to words:
            </p>
            <MathBlock>
              {'\\phi(s_1^{\\epsilon_1} \\cdots s_n^{\\epsilon_n}) = f(s_1)^{\\epsilon_1} \\cdots f(s_n)^{\\epsilon_n}'}
            </MathBlock>
            <p className="mt-2">
              This is well-defined because the reduction process corresponds to the group axioms in <InlineMath>G</InlineMath>
              (since <InlineMath>{'f(s)f(s)^{-1} = 1'}</InlineMath> in <InlineMath>G</InlineMath>). The map is clearly
              a homomorphism and is unique because it must satisfy <InlineMath>{'\\phi(s) = f(s)'}</InlineMath> for
              all <InlineMath>{'s \\in S'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>S</InlineMath> be a set and <InlineMath>G</InlineMath> be any group. For any function
          <InlineMath>{'f: S \\to G'}</InlineMath>, there exists a unique group homomorphism
          <InlineMath>{'\\phi: F(S) \\to G'}</InlineMath> such that <InlineMath>{'\\phi|_S = f'}</InlineMath>.
        </p>
        <MathBlock>
          {'\\begin{CD} S @>{\\iota}>> F(S) \\\\ @V{f}VV @VV{\\exists! \\phi}V \\\\ G @= G \\end{CD}'}
        </MathBlock>
      </Theorem>

      <Callout type="info">
        <strong>Category Theory Perspective:</strong> The free group construction defines a functor
        <InlineMath>{'F: \\mathbf{Set} \\to \\mathbf{Grp}'}</InlineMath> that is left adjoint to the
        forgetful functor <InlineMath>{'U: \\mathbf{Grp} \\to \\mathbf{Set}'}</InlineMath>. The universal
        property is precisely the adjunction isomorphism.
      </Callout>

      <h3>Properties of Free Groups</h3>

      <Theorem title="Free Groups are Torsion-Free"
        proof={
          <>
            <p>
              Let <InlineMath>{'w = s_1^{\\epsilon_1} \\cdots s_n^{\\epsilon_n}'}</InlineMath> be a non-trivial
              reduced word. We show <InlineMath>{'w^k \\neq 1'}</InlineMath> for all <InlineMath>{'k \\geq 1'}</InlineMath>.
            </p>
            <p className="mt-2">
              When computing <InlineMath>{'w^k'}</InlineMath>, cancellation can only occur at the boundaries
              between copies of <InlineMath>w</InlineMath>. If <InlineMath>{'s_n^{\\epsilon_n} \\neq (s_1^{\\epsilon_1})^{-1}'}</InlineMath>,
              no cancellation occurs and <InlineMath>{'w^k'}</InlineMath> has length <InlineMath>{'kn > 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              If cancellation does occur, the "uncanceled core" of <InlineMath>w</InlineMath> remains after
              each concatenation, so <InlineMath>{'w^k'}</InlineMath> is never the empty word.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'w \\in F(S)'}</InlineMath> with <InlineMath>{'w \\neq 1'}</InlineMath>, then
          <InlineMath>{'w^n \\neq 1'}</InlineMath> for all positive integers <InlineMath>n</InlineMath>.
          That is, non-identity elements have infinite order.
        </p>
      </Theorem>

      <Theorem title="Rank and Subgroups"
        proof={
          <>
            <p>
              The statement that <InlineMath>{'F(S) \\cong F(T)'}</InlineMath> implies <InlineMath>{'|S| = |T|'}</InlineMath>
              follows from the abelianization: <InlineMath>{'F(S)/[F(S), F(S)] \\cong \\mathbb{Z}^{|S|}'}</InlineMath>,
              and the rank of a free abelian group is an invariant.
            </p>
            <p className="mt-2">
              The Nielsen-Schreier theorem is more subtle and requires careful analysis of coset representatives
              or covering space theory.
            </p>
          </>
        }
      >
        <p>
          The <strong>rank</strong> of <InlineMath>F(S)</InlineMath> is <InlineMath>{'|S|'}</InlineMath>, and
          <InlineMath>{'F(S) \\cong F(T)'}</InlineMath> if and only if <InlineMath>{'|S| = |T|'}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>(Nielsen-Schreier)</strong> Every subgroup of a free group is free.
        </p>
      </Theorem>

      <Example title="The Free Group on One Generator">
        <p>
          The free group <InlineMath>{'F(\\{a\\})'}</InlineMath> on one generator is isomorphic to <InlineMath>{'\\mathbb{Z}'}</InlineMath>:
        </p>
        <MathBlock>
          {'F(\\{a\\}) = \\{\\ldots, a^{-2}, a^{-1}, 1, a, a^2, \\ldots\\} \\cong \\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          This is the only case where a free group is abelian.
        </p>
      </Example>

      <Example title="The Free Group on Two Generators">
        <p>
          The free group <InlineMath>{'F_2 = F(\\{a, b\\})'}</InlineMath> is non-abelian:
        </p>
        <MathBlock>
          {'ab \\neq ba'}
        </MathBlock>
        <p className="mt-2">
          It contains remarkable subgroups. For instance, the commutator subgroup <InlineMath>{'[F_2, F_2]'}</InlineMath>
          is a free group of infinite rank!
        </p>
      </Example>

      <h3>Group Presentations</h3>

      <Definition title="Group Presentation">
        <p>
          A <strong>presentation</strong> of a group <InlineMath>G</InlineMath> is an expression
        </p>
        <MathBlock>
          {'G = \\langle S \\mid R \\rangle'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>S</InlineMath> is a generating set and <InlineMath>R</InlineMath> is a set of
          relations (words equal to identity). Formally:
        </p>
        <MathBlock>
          {'G \\cong F(S) / \\langle\\langle R \\rangle\\rangle'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\langle\\langle R \\rangle\\rangle'}</InlineMath> is the normal closure of
          <InlineMath>R</InlineMath> in <InlineMath>F(S)</InlineMath>.
        </p>
      </Definition>

      <Example title="Common Group Presentations">
        <p>
          <strong>Cyclic group:</strong> <InlineMath>{'\\mathbb{Z}_n = \\langle a \\mid a^n \\rangle'}</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Dihedral group:</strong> <InlineMath>{'D_{2n} = \\langle r, s \\mid r^n, s^2, (sr)^2 \\rangle'}</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Quaternion group:</strong> <InlineMath>{'Q_8 = \\langle i, j \\mid i^4, i^2 j^{-2}, iji^{-1}j \\rangle'}</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Symmetric group:</strong> <InlineMath>{'S_n = \\langle s_1, \\ldots, s_{n-1} \\mid s_i^2, (s_i s_{i+1})^3, (s_i s_j)^2 \\text{ for } |i-j| > 1 \\rangle'}</InlineMath>
        </p>
      </Example>

      <Callout type="warning">
        <strong>The Word Problem:</strong> Given a group presentation <InlineMath>{'\\langle S \\mid R \\rangle'}</InlineMath>
        and a word <InlineMath>w</InlineMath>, is <InlineMath>{'w = 1'}</InlineMath> in the group? This problem
        is algorithmically undecidable in general! However, for specific classes of groups (e.g., finite groups,
        free groups, hyperbolic groups), algorithms exist.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Free groups are groups with no relations beyond the group axioms. They satisfy
        a universal property: any function from the generating set to a group extends uniquely to a homomorphism.
        Every group is a quotient of a free group, making presentations a powerful tool for describing groups.
        Free groups are non-abelian (except rank 1), torsion-free, and their subgroups are also free.
      </Callout>
    </LessonLayout>
  );
}
