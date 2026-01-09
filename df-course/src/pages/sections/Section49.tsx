import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Module Basic Definitions</h2>

      <p>
        Modules generalize the notion of vector spaces by replacing the field of scalars with
        an arbitrary ring. This generalization is fundamental to modern algebra, providing the
        right framework for studying linear algebra over rings and for developing homological
        algebra.
      </p>

      <h3>Definition of a Module</h3>

      <Definition title="Left R-Module">
        <p>
          Let <InlineMath>R</InlineMath> be a ring with unity. A <strong>left <InlineMath>R</InlineMath>-module</strong>
          is an abelian group <InlineMath>M</InlineMath> together with a scalar multiplication
          <InlineMath>{'R \\times M \\to M'}</InlineMath>, written <InlineMath>{'(r, m) \\mapsto rm'}</InlineMath>, satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>{'r(m + n) = rm + rn'}</InlineMath></li>
          <li><InlineMath>{'(r + s)m = rm + sm'}</InlineMath></li>
          <li><InlineMath>{'(rs)m = r(sm)'}</InlineMath></li>
          <li><InlineMath>{'1m = m'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          for all <InlineMath>{'r, s \\in R'}</InlineMath> and <InlineMath>{'m, n \\in M'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Right R-Module">
        <p>
          A <strong>right <InlineMath>R</InlineMath>-module</strong> has scalar multiplication on the right:
          <InlineMath>{'M \\times R \\to M'}</InlineMath>, with axioms modified accordingly:
          <InlineMath>{'m(rs) = (mr)s'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>R</InlineMath> is commutative, left and right modules are the same (just write
          scalars on either side). For non-commutative rings, the distinction matters.
        </p>
      </Definition>

      <Example title="Vector Spaces">
        <p>
          If <InlineMath>F</InlineMath> is a field, an <InlineMath>F</InlineMath>-module is precisely
          a vector space over <InlineMath>F</InlineMath>. All the familiar concepts (basis, dimension,
          linear independence) carry over.
        </p>
      </Example>

      <Example title="Abelian Groups as Z-Modules">
        <p>
          Any abelian group <InlineMath>A</InlineMath> is naturally a <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module:
        </p>
        <MathBlock>
          {'n \\cdot a = \\underbrace{a + a + \\cdots + a}_{n \\text{ times}} \\quad \\text{for } n > 0'}
        </MathBlock>
        <MathBlock>
          {'(-n) \\cdot a = -(n \\cdot a), \\quad 0 \\cdot a = 0'}
        </MathBlock>
        <p className="mt-2">
          Conversely, any <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module is an abelian group with this action.
          Thus: <InlineMath>{'\\mathbb{Z}'}</InlineMath>-modules = abelian groups.
        </p>
      </Example>

      <Example title="Ideals as Modules">
        <p>
          If <InlineMath>I</InlineMath> is an ideal of a ring <InlineMath>R</InlineMath>, then <InlineMath>I</InlineMath>
          is an <InlineMath>R</InlineMath>-module with the ring multiplication as scalar multiplication.
        </p>
        <p className="mt-2">
          In particular, <InlineMath>R</InlineMath> itself is an <InlineMath>R</InlineMath>-module.
        </p>
      </Example>

      <Example title="Polynomial Ring as Module">
        <p>
          <InlineMath>{'R[x]'}</InlineMath> is an <InlineMath>R</InlineMath>-module (scalars from <InlineMath>R</InlineMath>
          multiply polynomials in the obvious way).
        </p>
        <p className="mt-2">
          It is also an <InlineMath>{'R[x]'}</InlineMath>-module over itself.
        </p>
      </Example>

      <h3>Submodules</h3>

      <Definition title="Submodule">
        <p>
          A subset <InlineMath>N</InlineMath> of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath> is
          a <strong>submodule</strong> if <InlineMath>N</InlineMath> is itself an <InlineMath>R</InlineMath>-module
          under the inherited operations.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>N</InlineMath> is a submodule if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'N \\neq \\emptyset'}</InlineMath> (usually <InlineMath>{'0 \\in N'}</InlineMath>)</li>
          <li><InlineMath>N</InlineMath> is closed under addition and subtraction</li>
          <li><InlineMath>N</InlineMath> is closed under scalar multiplication: <InlineMath>{'rn \\in N'}</InlineMath> for all <InlineMath>{'r \\in R'}</InlineMath>, <InlineMath>{'n \\in N'}</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Submodules of R">
        <p>
          The submodules of <InlineMath>R</InlineMath> (as a left <InlineMath>R</InlineMath>-module over itself)
          are precisely the left ideals of <InlineMath>R</InlineMath>.
        </p>
        <p className="mt-2">
          For commutative <InlineMath>R</InlineMath>: submodules of <InlineMath>R</InlineMath> = ideals of <InlineMath>R</InlineMath>.
        </p>
      </Example>

      <h3>Module Homomorphisms</h3>

      <Definition title="Module Homomorphism">
        <p>
          A function <InlineMath>{'\\phi: M \\to N'}</InlineMath> between <InlineMath>R</InlineMath>-modules is
          an <strong><InlineMath>R</InlineMath>-module homomorphism</strong> (or <InlineMath>R</InlineMath>-linear map) if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'\\phi(m_1 + m_2) = \\phi(m_1) + \\phi(m_2)'}</InlineMath></li>
          <li><InlineMath>{'\\phi(rm) = r\\phi(m)'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          for all <InlineMath>{'m, m_1, m_2 \\in M'}</InlineMath> and <InlineMath>{'r \\in R'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Kernel and Image">
        <p>
          For a homomorphism <InlineMath>{'\\phi: M \\to N'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\ker(\\phi) = \\{m \\in M : \\phi(m) = 0\\}'}
        </MathBlock>
        <MathBlock>
          {'\\text{Im}(\\phi) = \\{\\phi(m) : m \\in M\\}'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'\\ker(\\phi)'}</InlineMath> is a submodule of <InlineMath>M</InlineMath> and
          <InlineMath>{'\\text{Im}(\\phi)'}</InlineMath> is a submodule of <InlineMath>N</InlineMath>.
        </p>
      </Definition>

      <Definition title="Hom and End">
        <p>
          The set of all <InlineMath>R</InlineMath>-homomorphisms from <InlineMath>M</InlineMath> to <InlineMath>N</InlineMath>
          is denoted <InlineMath>{'\\text{Hom}_R(M, N)'}</InlineMath>. It is an abelian group under addition:
          <InlineMath>{'(\\phi + \\psi)(m) = \\phi(m) + \\psi(m)'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'\\text{End}_R(M) = \\text{Hom}_R(M, M)'}</InlineMath> is the <strong>endomorphism ring</strong>
          of <InlineMath>M</InlineMath>, with multiplication given by composition.
        </p>
      </Definition>

      <Theorem title="Hom is a Module"
        proof={
          <>
            <p>
              When <InlineMath>R</InlineMath> is commutative, define <InlineMath>{'(r \\cdot \\phi)(m) = r \\cdot \\phi(m) = \\phi(rm)'}</InlineMath>.
              This makes <InlineMath>{'\\text{Hom}_R(M, N)'}</InlineMath> an <InlineMath>R</InlineMath>-module.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is commutative, then <InlineMath>{'\\text{Hom}_R(M, N)'}</InlineMath>
          is naturally an <InlineMath>R</InlineMath>-module.
        </p>
      </Theorem>

      <h3>Generating Sets and Bases</h3>

      <Definition title="Generated Submodule">
        <p>
          If <InlineMath>S</InlineMath> is a subset of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath>,
          the submodule <strong>generated</strong> by <InlineMath>S</InlineMath> is:
        </p>
        <MathBlock>
          {'\\langle S \\rangle = RS = \\left\\{\\sum_{\\text{finite}} r_i s_i : r_i \\in R, s_i \\in S\\right\\}'}
        </MathBlock>
        <p className="mt-2">
          A module is <strong>finitely generated</strong> if <InlineMath>{'M = \\langle s_1, \\ldots, s_n \\rangle'}</InlineMath>
          for some finite set.
        </p>
      </Definition>

      <Definition title="Cyclic Module">
        <p>
          A module <InlineMath>M</InlineMath> is <strong>cyclic</strong> if it is generated by a single element:
          <InlineMath>{'M = Rm = \\{rm : r \\in R\\}'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Cyclic Modules over Z">
        <p>
          <InlineMath>{'\\mathbb{Z}/n\\mathbb{Z}'}</InlineMath> is a cyclic <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module
          generated by <InlineMath>{'\\bar{1}'}</InlineMath>.
        </p>
        <p className="mt-2">
          More generally, any cyclic group is a cyclic <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module.
        </p>
      </Example>

      <Definition title="Basis and Free Module">
        <p>
          A subset <InlineMath>B</InlineMath> of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath> is
          a <strong>basis</strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>B</InlineMath> generates <InlineMath>M</InlineMath></li>
          <li><InlineMath>B</InlineMath> is linearly independent: <InlineMath>{'\\sum r_i b_i = 0 \\Rightarrow'}</InlineMath> all <InlineMath>{'r_i = 0'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          A module is <strong>free</strong> if it has a basis.
        </p>
      </Definition>

      <Callout type="warning">
        <strong>Not All Modules Are Free:</strong> Unlike vector spaces, not every module has a basis.
        For example, <InlineMath>{'\\mathbb{Z}/2\\mathbb{Z}'}</InlineMath> as a <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module
        has no basis: any element generates a proper submodule or satisfies <InlineMath>{'2 \\cdot \\bar{1} = 0'}</InlineMath>,
        violating linear independence.
      </Callout>

      <Example title="Free Modules">
        <p>
          <InlineMath>{'R^n = R \\oplus R \\oplus \\cdots \\oplus R'}</InlineMath> is a free module with basis
          the standard basis vectors <InlineMath>{'e_1, \\ldots, e_n'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'R[x]'}</InlineMath> as an <InlineMath>R</InlineMath>-module is free with basis
          <InlineMath>{'\\{1, x, x^2, x^3, \\ldots\\}'}</InlineMath>.
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> A module over a ring <InlineMath>R</InlineMath> is like a vector space,
        but with scalars from <InlineMath>R</InlineMath> rather than a field. Key examples include
        <InlineMath>{'\\mathbb{Z}'}</InlineMath>-modules (abelian groups) and ideals. Submodules, homomorphisms,
        and quotients parallel group theory. Free modules have bases, but not all modules are free—this
        is a key difference from vector spaces.
      </Callout>
    </LessonLayout>
  );
}
