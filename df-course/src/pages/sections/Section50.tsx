import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2>Quotient Modules and Homomorphisms</h2>

      <p>
        Just as with groups and rings, we can form quotients of modules by submodules. The
        fundamental isomorphism theorems carry over to modules, providing powerful tools for
        analyzing module structure and homomorphisms.
      </p>

      <h3>Quotient Modules</h3>

      <Definition title="Quotient Module">
        <p>
          Let <InlineMath>N</InlineMath> be a submodule of an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath>.
          The <strong>quotient module</strong> <InlineMath>M/N</InlineMath> is the set of cosets
        </p>
        <MathBlock>
          {'M/N = \\{m + N : m \\in M\\}'}
        </MathBlock>
        <p className="mt-2">
          with operations:
        </p>
        <MathBlock>
          {'(m_1 + N) + (m_2 + N) = (m_1 + m_2) + N'}
        </MathBlock>
        <MathBlock>
          {'r(m + N) = rm + N'}
        </MathBlock>
      </Definition>

      <Theorem title="Quotient is Well-Defined"
        proof={
          <>
            <p>
              If <InlineMath>{'m_1 + N = m_1\' + N'}</InlineMath>, then <InlineMath>{'m_1 - m_1\' \\in N'}</InlineMath>.
            </p>
            <p className="mt-2">
              For addition: <InlineMath>{'(m_1 + m_2) - (m_1\' + m_2\') = (m_1 - m_1\') + (m_2 - m_2\') \\in N'}</InlineMath>.
            </p>
            <p className="mt-2">
              For scalar multiplication: <InlineMath>{'rm_1 - rm_1\' = r(m_1 - m_1\') \\in N'}</InlineMath> since
              <InlineMath>N</InlineMath> is closed under scalar multiplication.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>M/N</InlineMath> is an <InlineMath>R</InlineMath>-module, and the natural map
          <InlineMath>{'\\pi: M \\to M/N'}</InlineMath> given by <InlineMath>{'\\pi(m) = m + N'}</InlineMath>
          is a surjective module homomorphism with <InlineMath>{'\\ker(\\pi) = N'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Quotient of Z-Modules">
        <p>
          Consider <InlineMath>{'\\mathbb{Z}'}</InlineMath> as a <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module
          and the submodule <InlineMath>{'n\\mathbb{Z}'}</InlineMath>.
        </p>
        <MathBlock>
          {'\\mathbb{Z}/n\\mathbb{Z} = \\{\\bar{0}, \\bar{1}, \\ldots, \\overline{n-1}\\}'}
        </MathBlock>
        <p className="mt-2">
          This is the familiar cyclic group of order <InlineMath>n</InlineMath>, viewed as a <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module.
        </p>
      </Example>

      <Example title="Quotient of Polynomial Module">
        <p>
          Let <InlineMath>{'M = F[x]'}</InlineMath> as an <InlineMath>F[x]</InlineMath>-module and
          <InlineMath>{'N = (x^2 + 1)'}</InlineMath>.
        </p>
        <MathBlock>
          {'F[x]/(x^2 + 1) = \\{a + bx + (x^2 + 1) : a, b \\in F\\}'}
        </MathBlock>
        <p className="mt-2">
          When <InlineMath>{'F = \\mathbb{R}'}</InlineMath>, this is isomorphic to <InlineMath>{'\\mathbb{C}'}</InlineMath>.
        </p>
      </Example>

      <h3>The Isomorphism Theorems</h3>

      <Theorem title="First Isomorphism Theorem"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\bar{\\phi}: M/\\ker(\\phi) \\to \\text{Im}(\\phi)'}</InlineMath> by
              <InlineMath>{'\\bar{\\phi}(m + \\ker(\\phi)) = \\phi(m)'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is well-defined: if <InlineMath>{'m - m\' \\in \\ker(\\phi)'}</InlineMath>, then
              <InlineMath>{'\\phi(m) = \\phi(m\')'}</InlineMath>.
            </p>
            <p className="mt-2">
              It is an <InlineMath>R</InlineMath>-homomorphism, surjective onto <InlineMath>{'\\text{Im}(\\phi)'}</InlineMath>,
              and injective because <InlineMath>{'\\bar{\\phi}(m + K) = 0'}</InlineMath> implies <InlineMath>{'m \\in K'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\phi: M \\to N'}</InlineMath> is an <InlineMath>R</InlineMath>-module homomorphism, then
        </p>
        <MathBlock>
          {'M/\\ker(\\phi) \\cong \\text{Im}(\\phi)'}
        </MathBlock>
      </Theorem>

      <Theorem title="Second Isomorphism Theorem"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: A \\to (A + B)/B'}</InlineMath> by <InlineMath>{'\\phi(a) = a + B'}</InlineMath>.
              This is a surjective homomorphism with <InlineMath>{'\\ker(\\phi) = A \\cap B'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>A, B</InlineMath> are submodules of <InlineMath>M</InlineMath>, then
        </p>
        <MathBlock>
          {'A/(A \\cap B) \\cong (A + B)/B'}
        </MathBlock>
      </Theorem>

      <Theorem title="Third Isomorphism Theorem"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: M/N \\to M/L'}</InlineMath> by <InlineMath>{'\\phi(m + N) = m + L'}</InlineMath>.
              Well-defined since <InlineMath>{'N \\subseteq L'}</InlineMath>. Surjective with kernel <InlineMath>{'L/N'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'N \\subseteq L'}</InlineMath> are submodules of <InlineMath>M</InlineMath>, then
        </p>
        <MathBlock>
          {'(M/N)/(L/N) \\cong M/L'}
        </MathBlock>
      </Theorem>

      <Theorem title="Correspondence Theorem"
        proof={
          <>
            <p>
              The bijection is given by <InlineMath>{'L \\mapsto L/N'}</InlineMath> with inverse
              <InlineMath>{'\\bar{L} \\mapsto \\pi^{-1}(\\bar{L})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>N</InlineMath> is a submodule of <InlineMath>M</InlineMath>, there is a bijection:
        </p>
        <MathBlock>
          {'\\{\\text{submodules of } M \\text{ containing } N\\} \\leftrightarrow \\{\\text{submodules of } M/N\\}'}
        </MathBlock>
        <p className="mt-2">
          given by <InlineMath>{'L \\mapsto L/N'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Annihilators</h3>

      <Definition title="Annihilator">
        <p>
          For an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath> and element <InlineMath>{'m \\in M'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\text{Ann}_R(m) = \\{r \\in R : rm = 0\\}'}
        </MathBlock>
        <p className="mt-2">
          For a submodule <InlineMath>N</InlineMath>:
        </p>
        <MathBlock>
          {'\\text{Ann}_R(N) = \\{r \\in R : rn = 0 \\text{ for all } n \\in N\\}'}
        </MathBlock>
        <p className="mt-2">
          These are ideals of <InlineMath>R</InlineMath> (left ideals if <InlineMath>R</InlineMath> is non-commutative).
        </p>
      </Definition>

      <Example title="Annihilator in Z-Modules">
        <p>
          In <InlineMath>{'\\mathbb{Z}/6\\mathbb{Z}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\text{Ann}(\\bar{1}) = 6\\mathbb{Z}'}</InlineMath></li>
          <li><InlineMath>{'\\text{Ann}(\\bar{2}) = 3\\mathbb{Z}'}</InlineMath></li>
          <li><InlineMath>{'\\text{Ann}(\\bar{3}) = 2\\mathbb{Z}'}</InlineMath></li>
        </ul>
      </Example>

      <Theorem title="Cyclic Module Structure"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: R \\to Rm'}</InlineMath> by <InlineMath>{'\\phi(r) = rm'}</InlineMath>.
              This is surjective with <InlineMath>{'\\ker(\\phi) = \\text{Ann}(m)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'M = Rm'}</InlineMath> is a cyclic module, then
        </p>
        <MathBlock>
          {'M \\cong R/\\text{Ann}(m)'}
        </MathBlock>
      </Theorem>

      <h3>Exact Sequences</h3>

      <Definition title="Exact Sequence">
        <p>
          A sequence of module homomorphisms
        </p>
        <MathBlock>
          {'\\cdots \\xrightarrow{} M_{i-1} \\xrightarrow{\\phi_{i-1}} M_i \\xrightarrow{\\phi_i} M_{i+1} \\xrightarrow{} \\cdots'}
        </MathBlock>
        <p className="mt-2">
          is <strong>exact</strong> at <InlineMath>{'M_i'}</InlineMath> if <InlineMath>{'\\text{Im}(\\phi_{i-1}) = \\ker(\\phi_i)'}</InlineMath>.
          The sequence is <strong>exact</strong> if it is exact at every term.
        </p>
      </Definition>

      <Definition title="Short Exact Sequence">
        <p>
          A <strong>short exact sequence</strong> is an exact sequence of the form
        </p>
        <MathBlock>
          {'0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0'}
        </MathBlock>
        <p className="mt-2">
          This means: <InlineMath>f</InlineMath> is injective, <InlineMath>g</InlineMath> is surjective, and <InlineMath>{'\\text{Im}(f) = \\ker(g)'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Canonical Short Exact Sequence">
        <p>
          For any submodule <InlineMath>N</InlineMath> of <InlineMath>M</InlineMath>:
        </p>
        <MathBlock>
          {'0 \\to N \\xrightarrow{\\iota} M \\xrightarrow{\\pi} M/N \\to 0'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\iota'}</InlineMath> is inclusion and <InlineMath>{'\\pi'}</InlineMath> is the quotient map.
        </p>
      </Example>

      <Callout type="info">
        <strong>Splitting:</strong> A short exact sequence <InlineMath>{'0 \\to A \\to B \\to C \\to 0'}</InlineMath>
        <strong>splits</strong> if there exists <InlineMath>{'s: C \\to B'}</InlineMath> with <InlineMath>{'gs = \\text{id}_C'}</InlineMath>.
        In this case, <InlineMath>{'B \\cong A \\oplus C'}</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Quotient modules <InlineMath>M/N</InlineMath> are formed when <InlineMath>N</InlineMath>
        is a submodule. The isomorphism theorems from group theory carry over exactly. Annihilators
        measure which ring elements "kill" module elements. Exact sequences encode relationships
        between modules and their subquotients, with short exact sequences being particularly important.
      </Callout>
    </LessonLayout>
  );
}
