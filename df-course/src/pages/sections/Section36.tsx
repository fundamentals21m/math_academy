import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2>Ring Homomorphisms and Quotient Rings</h2>

      <p>
        Just as group homomorphisms preserve the group structure, ring homomorphisms preserve
        both addition and multiplication. The study of ring homomorphisms leads naturally to
        ideals and quotient rings, which are the ring-theoretic analogues of normal subgroups
        and quotient groups.
      </p>

      <h3>Ring Homomorphisms</h3>

      <Definition title="Ring Homomorphism">
        <p>
          Let <InlineMath>R</InlineMath> and <InlineMath>S</InlineMath> be rings. A <strong>ring homomorphism</strong>
          is a function <InlineMath>{'\\phi: R \\to S'}</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>{'\\phi(a + b) = \\phi(a) + \\phi(b)'}</InlineMath> for all <InlineMath>{'a, b \\in R'}</InlineMath></li>
          <li><InlineMath>{'\\phi(ab) = \\phi(a)\\phi(b)'}</InlineMath> for all <InlineMath>{'a, b \\in R'}</InlineMath></li>
          <li><InlineMath>{'\\phi(1_R) = 1_S'}</InlineMath> (for rings with unity)</li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>Unity Convention:</strong> Some authors do not require condition (3). However, when
        working with rings with unity, it is standard to require homomorphisms to preserve the
        multiplicative identity.
      </Callout>

      <Definition title="Kernel and Image">
        <p>
          For a ring homomorphism <InlineMath>{'\\phi: R \\to S'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}'}
        </MathBlock>
        <MathBlock>
          {'\\text{Im}(\\phi) = \\{\\phi(r) : r \\in R\\}'}
        </MathBlock>
      </Definition>

      <Example title="The Reduction Homomorphism">
        <p>
          For any integer <InlineMath>{'n \\geq 2'}</InlineMath>, the map
        </p>
        <MathBlock>
          {'\\pi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}, \\quad \\pi(a) = a \\mod n'}
        </MathBlock>
        <p className="mt-2">
          is a surjective ring homomorphism with <InlineMath>{'\\ker(\\pi) = n\\mathbb{Z}'}</InlineMath>.
        </p>
      </Example>

      <Example title="Evaluation Homomorphism">
        <p>
          For any ring <InlineMath>R</InlineMath> and element <InlineMath>{'a \\in R'}</InlineMath>,
          the <strong>evaluation map</strong>
        </p>
        <MathBlock>
          {'\\text{ev}_a: R[x] \\to R, \\quad f(x) \\mapsto f(a)'}
        </MathBlock>
        <p className="mt-2">
          is a ring homomorphism. Its kernel consists of all polynomials having <InlineMath>a</InlineMath> as a root.
        </p>
      </Example>

      <h3>Ideals</h3>

      <Definition title="Ideal">
        <p>
          A subset <InlineMath>I</InlineMath> of a ring <InlineMath>R</InlineMath> is an <strong>ideal</strong>
          (or <strong>two-sided ideal</strong>) if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>(I, +)</InlineMath> is a subgroup of <InlineMath>(R, +)</InlineMath></li>
          <li><InlineMath>{'rI \\subseteq I'}</InlineMath> and <InlineMath>{'Ir \\subseteq I'}</InlineMath> for all <InlineMath>{'r \\in R'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          That is, <InlineMath>I</InlineMath> is closed under addition and absorbs multiplication from both sides.
        </p>
      </Definition>

      <Theorem title="Kernels are Ideals"
        proof={
          <>
            <p>
              Let <InlineMath>{'I = \\ker(\\phi)'}</InlineMath>. First, <InlineMath>I</InlineMath> is an additive subgroup because
              <InlineMath>{'\\phi(a - b) = \\phi(a) - \\phi(b) = 0 - 0 = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              For absorption: if <InlineMath>{'a \\in I'}</InlineMath> and <InlineMath>{'r \\in R'}</InlineMath>, then
              <InlineMath>{'\\phi(ra) = \\phi(r)\\phi(a) = \\phi(r) \\cdot 0 = 0'}</InlineMath>, so <InlineMath>{'ra \\in I'}</InlineMath>.
              Similarly for <InlineMath>ar</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The kernel of any ring homomorphism is an ideal.
        </p>
      </Theorem>

      <Definition title="Principal Ideal">
        <p>
          In a commutative ring <InlineMath>R</InlineMath>, the <strong>principal ideal</strong> generated
          by an element <InlineMath>a</InlineMath> is
        </p>
        <MathBlock>
          {'(a) = aR = \\{ar : r \\in R\\}'}
        </MathBlock>
      </Definition>

      <Example title="Ideals in Z">
        <p>
          Every ideal in <InlineMath>{'\\mathbb{Z}'}</InlineMath> is principal:
        </p>
        <MathBlock>
          {'I = (n) = n\\mathbb{Z} = \\{\\ldots, -2n, -n, 0, n, 2n, \\ldots\\}'}
        </MathBlock>
        <p className="mt-2">
          The ideals of <InlineMath>{'\\mathbb{Z}'}</InlineMath> are precisely <InlineMath>{'(0), (1), (2), (3), \\ldots'}</InlineMath>
        </p>
      </Example>

      <h3>Quotient Rings</h3>

      <Definition title="Quotient Ring">
        <p>
          Let <InlineMath>I</InlineMath> be an ideal of a ring <InlineMath>R</InlineMath>. The <strong>quotient ring</strong>
          <InlineMath>R/I</InlineMath> is the set of cosets
        </p>
        <MathBlock>
          {'R/I = \\{r + I : r \\in R\\}'}
        </MathBlock>
        <p className="mt-2">
          with operations:
        </p>
        <MathBlock>
          {'(a + I) + (b + I) = (a + b) + I'}
        </MathBlock>
        <MathBlock>
          {'(a + I)(b + I) = ab + I'}
        </MathBlock>
      </Definition>

      <Theorem title="Quotient Ring is Well-Defined"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'a + I = a\' + I'}</InlineMath> and <InlineMath>{'b + I = b\' + I'}</InlineMath>.
              Then <InlineMath>{'a - a\' \\in I'}</InlineMath> and <InlineMath>{'b - b\' \\in I'}</InlineMath>.
            </p>
            <p className="mt-2">
              For addition: <InlineMath>{'(a + b) - (a\' + b\') = (a - a\') + (b - b\') \\in I'}</InlineMath>.
            </p>
            <p className="mt-2">
              For multiplication: <InlineMath>{'ab - a\'b\' = ab - a\'b + a\'b - a\'b\' = (a-a\')b + a\'(b-b\')'}</InlineMath>.
              Since <InlineMath>I</InlineMath> is an ideal, both terms are in <InlineMath>I</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The operations on <InlineMath>R/I</InlineMath> are well-defined: they do not depend on the choice
          of coset representatives.
        </p>
      </Theorem>

      <Example title="Z/nZ">
        <p>
          The quotient ring <InlineMath>{'\\mathbb{Z}/n\\mathbb{Z}'}</InlineMath> consists of residue classes modulo <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>
          {'\\mathbb{Z}/n\\mathbb{Z} = \\{\\bar{0}, \\bar{1}, \\bar{2}, \\ldots, \\overline{n-1}\\}'}
        </MathBlock>
        <p className="mt-2">
          This recovers our familiar <InlineMath>{'\\mathbb{Z}_n'}</InlineMath> with modular arithmetic.
        </p>
      </Example>

      <h3>The Isomorphism Theorems</h3>

      <Theorem title="First Isomorphism Theorem for Rings"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\bar{\\phi}: R/\\ker(\\phi) \\to \\text{Im}(\\phi)'}</InlineMath> by
              <InlineMath>{'\\bar{\\phi}(r + \\ker(\\phi)) = \\phi(r)'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is well-defined: if <InlineMath>{'r + \\ker(\\phi) = r\' + \\ker(\\phi)'}</InlineMath>, then
              <InlineMath>{'r - r\' \\in \\ker(\\phi)'}</InlineMath>, so <InlineMath>{'\\phi(r) = \\phi(r\')'}</InlineMath>.
            </p>
            <p className="mt-2">
              It is a ring homomorphism (inherited from <InlineMath>{'\\phi'}</InlineMath>), surjective onto
              <InlineMath>{'\\text{Im}(\\phi)'}</InlineMath>, and injective because <InlineMath>{'\\bar{\\phi}(r + I) = 0'}</InlineMath>
              implies <InlineMath>{'r \\in \\ker(\\phi) = I'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\phi: R \\to S'}</InlineMath> is a ring homomorphism, then
        </p>
        <MathBlock>
          {'R/\\ker(\\phi) \\cong \\text{Im}(\\phi)'}
        </MathBlock>
      </Theorem>

      <Example title="Application: Polynomial Quotients">
        <p>
          Consider <InlineMath>{'\\text{ev}_i: \\mathbb{R}[x] \\to \\mathbb{C}'}</InlineMath> where <InlineMath>{'\\text{ev}_i(f) = f(i)'}</InlineMath>.
        </p>
        <p className="mt-2">
          The kernel is <InlineMath>{'(x^2 + 1)'}</InlineMath>, the ideal of polynomials with <InlineMath>i</InlineMath> as a root.
          By the First Isomorphism Theorem:
        </p>
        <MathBlock>
          {'\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}'}
        </MathBlock>
      </Example>

      <Theorem title="Second Isomorphism Theorem"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: A \\to (A + B)/B'}</InlineMath> by <InlineMath>{'\\phi(a) = a + B'}</InlineMath>.
              This is a surjective homomorphism with kernel <InlineMath>{'A \\cap B'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> is a subring and <InlineMath>B</InlineMath> is an ideal of <InlineMath>R</InlineMath>, then
        </p>
        <MathBlock>
          {'A/(A \\cap B) \\cong (A + B)/B'}
        </MathBlock>
      </Theorem>

      <Theorem title="Third Isomorphism Theorem"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: R/I \\to R/J'}</InlineMath> by <InlineMath>{'\\phi(r + I) = r + J'}</InlineMath>.
              This is well-defined since <InlineMath>{'I \\subseteq J'}</InlineMath>, and is a surjective homomorphism
              with kernel <InlineMath>{'J/I'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'I \\subseteq J'}</InlineMath> are ideals of <InlineMath>R</InlineMath>, then
        </p>
        <MathBlock>
          {'(R/I)/(J/I) \\cong R/J'}
        </MathBlock>
      </Theorem>

      <Theorem title="Correspondence Theorem"
        proof={
          <>
            <p>
              The natural projection <InlineMath>{'\\pi: R \\to R/I'}</InlineMath> establishes a correspondence
              between ideals of <InlineMath>R</InlineMath> containing <InlineMath>I</InlineMath> and ideals of <InlineMath>R/I</InlineMath>:
              <InlineMath>{'J \\mapsto J/I'}</InlineMath> with inverse <InlineMath>{'\\bar{J} \\mapsto \\pi^{-1}(\\bar{J})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          There is a bijection between ideals of <InlineMath>R</InlineMath> containing <InlineMath>I</InlineMath>
          and ideals of <InlineMath>R/I</InlineMath>, given by <InlineMath>{'J \\mapsto J/I'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Summary:</strong> Ring homomorphisms preserve both ring operations. Their kernels are
        ideals—subrings that absorb multiplication. Given an ideal <InlineMath>I</InlineMath>, we can
        form the quotient ring <InlineMath>R/I</InlineMath>. The isomorphism theorems relate homomorphisms,
        kernels, and quotients, paralleling the corresponding theorems for groups.
      </Callout>
    </LessonLayout>
  );
}
