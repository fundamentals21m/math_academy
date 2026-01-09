import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2>Direct Sums and Free Modules</h2>

      <p>
        Direct sums provide a way to build new modules from old ones, analogous to direct products
        of groups. Free modules are the module-theoretic generalization of vector spaces—modules
        with a basis. Understanding these constructions is essential for module theory.
      </p>

      <h3>Direct Sums</h3>

      <Definition title="Internal Direct Sum">
        <p>
          Let <InlineMath>{'M_1, M_2, \\ldots, M_n'}</InlineMath> be submodules of an <InlineMath>R</InlineMath>-module
          <InlineMath>M</InlineMath>. We say <InlineMath>M</InlineMath> is the <strong>internal direct sum</strong>
          of the <InlineMath>{'M_i'}</InlineMath>, written <InlineMath>{'M = M_1 \\oplus M_2 \\oplus \\cdots \\oplus M_n'}</InlineMath>, if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'M = M_1 + M_2 + \\cdots + M_n'}</InlineMath></li>
          <li>For each <InlineMath>i</InlineMath>: <InlineMath>{'M_i \\cap (M_1 + \\cdots + M_{i-1} + M_{i+1} + \\cdots + M_n) = \\{0\\}'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          Equivalently, every element <InlineMath>{'m \\in M'}</InlineMath> can be uniquely written as
          <InlineMath>{'m = m_1 + m_2 + \\cdots + m_n'}</InlineMath> with <InlineMath>{'m_i \\in M_i'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="External Direct Sum">
        <p>
          Given <InlineMath>R</InlineMath>-modules <InlineMath>{'M_1, \\ldots, M_n'}</InlineMath>, the
          <strong>external direct sum</strong> is:
        </p>
        <MathBlock>
          {'M_1 \\oplus M_2 \\oplus \\cdots \\oplus M_n = \\{(m_1, m_2, \\ldots, m_n) : m_i \\in M_i\\}'}
        </MathBlock>
        <p className="mt-2">
          with componentwise operations:
        </p>
        <MathBlock>
          {'(m_1, \\ldots, m_n) + (m_1\', \\ldots, m_n\') = (m_1 + m_1\', \\ldots, m_n + m_n\')'}
        </MathBlock>
        <MathBlock>
          {'r(m_1, \\ldots, m_n) = (rm_1, \\ldots, rm_n)'}
        </MathBlock>
      </Definition>

      <Theorem title="Internal = External"
        proof={
          <>
            <p>
              The internal direct sum <InlineMath>{'M_1 \\oplus \\cdots \\oplus M_n'}</InlineMath> is
              isomorphic to the external direct sum via <InlineMath>{'m_1 + \\cdots + m_n \\mapsto (m_1, \\ldots, m_n)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Uniqueness of the representation makes this well-defined and bijective; it's clearly
              an <InlineMath>R</InlineMath>-homomorphism.
            </p>
          </>
        }
      >
        <p>
          An internal direct sum is canonically isomorphic to the corresponding external direct sum.
        </p>
      </Theorem>

      <Example title="R^n as a Direct Sum">
        <p>
          <InlineMath>{'R^n = R \\oplus R \\oplus \\cdots \\oplus R'}</InlineMath> (n copies)
        </p>
        <p className="mt-2">
          The <InlineMath>i</InlineMath>-th copy of <InlineMath>R</InlineMath> corresponds to the submodule
          <InlineMath>{'\\{(0, \\ldots, 0, r, 0, \\ldots, 0) : r \\in R\\}'}</InlineMath> with <InlineMath>r</InlineMath>
          in position <InlineMath>i</InlineMath>.
        </p>
      </Example>

      <Definition title="Direct Sum of Infinitely Many Modules">
        <p>
          For an arbitrary family <InlineMath>{'\\{M_i\\}_{i \\in I}'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\bigoplus_{i \\in I} M_i = \\{(m_i)_{i \\in I} : m_i \\in M_i, \\text{ almost all } m_i = 0\\}'}
        </MathBlock>
        <p className="mt-2">
          This differs from the direct product <InlineMath>{'\\prod_{i \\in I} M_i'}</InlineMath>, which
          allows arbitrary (not necessarily finite) tuples.
        </p>
      </Definition>

      <h3>Free Modules</h3>

      <Definition title="Free Module">
        <p>
          An <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath> is <strong>free</strong> if it has a
          <strong>basis</strong>: a set <InlineMath>{'B = \\{b_i\\}_{i \\in I}'}</InlineMath> such that every
          element of <InlineMath>M</InlineMath> can be uniquely written as a finite <InlineMath>R</InlineMath>-linear
          combination of elements of <InlineMath>B</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Characterization of Free Modules"
        proof={
          <>
            <p>
              If <InlineMath>{'M \\cong \\bigoplus_{i \\in I} R'}</InlineMath>, the images of the generators
              <InlineMath>{'1 \\in R'}</InlineMath> in each copy form a basis.
            </p>
            <p className="mt-2">
              Conversely, if <InlineMath>B</InlineMath> is a basis, the map <InlineMath>{'\\bigoplus_{b \\in B} R \\to M'}</InlineMath>
              sending the generator of the <InlineMath>b</InlineMath>-th copy to <InlineMath>b</InlineMath> is an isomorphism.
            </p>
          </>
        }
      >
        <p>
          An <InlineMath>R</InlineMath>-module is free if and only if it is isomorphic to a direct sum of
          copies of <InlineMath>R</InlineMath>:
        </p>
        <MathBlock>
          {'M \\cong \\bigoplus_{i \\in I} R'}
        </MathBlock>
      </Theorem>

      <Example title="Free Modules">
        <p>
          <strong><InlineMath>R^n</InlineMath>:</strong> Free with basis <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong><InlineMath>{'R[x]'}</InlineMath>:</strong> Free as an <InlineMath>R</InlineMath>-module with
          basis <InlineMath>{'\\{1, x, x^2, \\ldots\\}'}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong><InlineMath>{'\\mathbb{Z}^2'}</InlineMath>:</strong> Free <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module
          with basis <InlineMath>{'\\{(1, 0), (0, 1)\\}'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Universal Property of Free Modules"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi'}</InlineMath> on basis elements by <InlineMath>{'\\phi(b_i) = f(b_i)'}</InlineMath>
              and extend by linearity: <InlineMath>{'\\phi(\\sum r_i b_i) = \\sum r_i f(b_i)'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is well-defined by the uniqueness of basis representations, and clearly the unique extension.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>F</InlineMath> be a free <InlineMath>R</InlineMath>-module with basis <InlineMath>B</InlineMath>.
          For any <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath> and function <InlineMath>{'f: B \\to M'}</InlineMath>,
          there exists a unique homomorphism <InlineMath>{'\\phi: F \\to M'}</InlineMath> extending <InlineMath>f</InlineMath>.
        </p>
      </Theorem>

      <h3>Rank of Free Modules</h3>

      <Definition title="Rank">
        <p>
          The <strong>rank</strong> of a free module <InlineMath>F</InlineMath> is the cardinality of any
          basis of <InlineMath>F</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Invariance of Rank"
        proof={
          <>
            <p>
              For general rings, this requires the Invariant Basis Number (IBN) property.
              Commutative rings with unity have IBN: if <InlineMath>{'R^m \\cong R^n'}</InlineMath>,
              localizing at a maximal ideal <InlineMath>{'\\mathfrak{m}'}</InlineMath> gives
              <InlineMath>{'(R/\\mathfrak{m})^m \\cong (R/\\mathfrak{m})^n'}</InlineMath>,
              and fields have invariant dimension.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is a commutative ring with unity and <InlineMath>{'R^m \\cong R^n'}</InlineMath>,
          then <InlineMath>{'m = n'}</InlineMath>. Thus rank is well-defined for free modules over commutative rings.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Non-Commutative Warning:</strong> Over some non-commutative rings, <InlineMath>{'R^m \\cong R^n'}</InlineMath>
        for <InlineMath>{'m \\neq n'}</InlineMath>! Such rings lack the Invariant Basis Number property.
      </Callout>

      <h3>Submodules of Free Modules</h3>

      <Theorem title="Submodules of Free Modules over PIDs"
        proof={
          <>
            <p>
              We use induction on rank. For rank 1 (<InlineMath>{'F = R'}</InlineMath>), submodules are ideals,
              which are principal: <InlineMath>{'N = (d) \\cong R'}</InlineMath> or <InlineMath>{'N = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              For higher rank, project onto one component, analyze the kernel and image, and use induction.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>R</InlineMath> is a PID and <InlineMath>F</InlineMath> is a free <InlineMath>R</InlineMath>-module
          of rank <InlineMath>n</InlineMath>, then every submodule <InlineMath>N</InlineMath> of <InlineMath>F</InlineMath>
          is free of rank <InlineMath>{'\\leq n'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Submodules of Z^2">
        <p>
          The submodule <InlineMath>{'N = \\{(a, b) \\in \\mathbb{Z}^2 : a + b \\equiv 0 \\pmod{2}\\}'}</InlineMath>
          is free of rank 2 with basis <InlineMath>{'\\{(2, 0), (1, 1)\\}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Indeed, <InlineMath>{'(a, b) \\in N'}</InlineMath> iff <InlineMath>a + b</InlineMath> is even, and
          <InlineMath>{'(a, b) = \\frac{a - b}{2}(2, 0) + b(1, 1)'}</InlineMath> (when <InlineMath>a + b</InlineMath> even).
        </p>
      </Example>

      <Callout type="info">
        <strong>Contrast with Vector Spaces:</strong> Over a field, every subspace has a complementary
        subspace: <InlineMath>{'V = W \\oplus W\''}</InlineMath>. Over rings, this generally fails.
        The submodule <InlineMath>{'2\\mathbb{Z} \\subseteq \\mathbb{Z}'}</InlineMath> has no complement.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Direct sums decompose modules into simpler pieces. Free modules are
        those with a basis, equivalent to direct sums of copies of <InlineMath>R</InlineMath>. The
        universal property says functions from a basis extend uniquely to homomorphisms. Over PIDs,
        submodules of free modules are free with rank at most the rank of the ambient module.
      </Callout>
    </LessonLayout>
  );
}
