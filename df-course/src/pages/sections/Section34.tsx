import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2>Ring Basic Definitions</h2>

      <p>
        Rings generalize the arithmetic of integers by abstracting the operations of addition and
        multiplication. While groups capture symmetry through a single operation, rings capture
        the interplay between two operations, opening up the rich world of algebraic number theory
        and algebraic geometry.
      </p>

      <h3>The Definition of a Ring</h3>

      <Definition title="Ring">
        <p>
          A <strong>ring</strong> <InlineMath>R</InlineMath> is a set equipped with two binary operations,
          addition <InlineMath>+</InlineMath> and multiplication <InlineMath>{'\\cdot'}</InlineMath>, satisfying:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>(R, +)</InlineMath> is an abelian group (with identity <InlineMath>0</InlineMath>)</li>
          <li>Multiplication is associative: <InlineMath>{'(ab)c = a(bc)'}</InlineMath></li>
          <li>Distributive laws hold:
            <MathBlock>
              {'a(b + c) = ab + ac \\quad \\text{and} \\quad (a + b)c = ac + bc'}
            </MathBlock>
          </li>
        </ol>
      </Definition>

      <Definition title="Ring with Unity">
        <p>
          A ring <InlineMath>R</InlineMath> has <strong>unity</strong> (or <strong>identity</strong>) if there
          exists an element <InlineMath>{'1 \\in R'}</InlineMath> such that
        </p>
        <MathBlock>
          {'1 \\cdot a = a \\cdot 1 = a \\quad \\text{for all } a \\in R'}
        </MathBlock>
        <p className="mt-2">
          In modern usage, most authors assume rings have unity unless stated otherwise.
        </p>
      </Definition>

      <Definition title="Commutative Ring">
        <p>
          A ring <InlineMath>R</InlineMath> is <strong>commutative</strong> if
        </p>
        <MathBlock>
          {'ab = ba \\quad \\text{for all } a, b \\in R'}
        </MathBlock>
      </Definition>

      <Example title="The Integers">
        <p>
          <InlineMath>{'\\mathbb{Z}'}</InlineMath> with usual addition and multiplication is the prototypical
          commutative ring with unity. The additive identity is 0, and the multiplicative identity is 1.
        </p>
      </Example>

      <Example title="Integers Modulo n">
        <p>
          <InlineMath>{'\\mathbb{Z}/n\\mathbb{Z}'}</InlineMath> (or <InlineMath>{'\\mathbb{Z}_n'}</InlineMath>)
          is a commutative ring with unity under addition and multiplication modulo <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">
          For example, in <InlineMath>{'\\mathbb{Z}_6'}</InlineMath>: <InlineMath>{'4 \\cdot 5 = 20 \\equiv 2 \\pmod{6}'}</InlineMath>.
        </p>
      </Example>

      <Example title="The Zero Ring">
        <p>
          The <strong>zero ring</strong> <InlineMath>{'\\{0\\}'}</InlineMath> has <InlineMath>{'0 = 1'}</InlineMath>.
          This is the only ring where <InlineMath>{'0 = 1'}</InlineMath>.
        </p>
      </Example>

      <h3>Basic Properties</h3>

      <Theorem title="Elementary Ring Properties"
        proof={
          <>
            <p>
              For (1): <InlineMath>{'a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0'}</InlineMath>.
              Adding <InlineMath>{'-(a \\cdot 0)'}</InlineMath> to both sides gives <InlineMath>{'a \\cdot 0 = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              For (2): <InlineMath>{'a(-b) + ab = a(-b + b) = a \\cdot 0 = 0'}</InlineMath>, so <InlineMath>{'a(-b) = -(ab)'}</InlineMath>.
            </p>
            <p className="mt-2">
              For (3): <InlineMath>{'(-1)a + a = (-1)a + 1 \\cdot a = (-1 + 1)a = 0 \\cdot a = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          In any ring <InlineMath>R</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'a \\cdot 0 = 0 \\cdot a = 0'}</InlineMath> for all <InlineMath>a</InlineMath></li>
          <li><InlineMath>{'(-a)b = a(-b) = -(ab)'}</InlineMath></li>
          <li>If <InlineMath>R</InlineMath> has unity, then <InlineMath>{'(-1)a = -a'}</InlineMath></li>
        </ol>
      </Theorem>

      <h3>Units and Zero Divisors</h3>

      <Definition title="Units">
        <p>
          Let <InlineMath>R</InlineMath> be a ring with unity. An element <InlineMath>{'u \\in R'}</InlineMath> is
          a <strong>unit</strong> if there exists <InlineMath>{'v \\in R'}</InlineMath> such that
        </p>
        <MathBlock>
          {'uv = vu = 1'}
        </MathBlock>
        <p className="mt-2">
          The set of all units in <InlineMath>R</InlineMath>, denoted <InlineMath>{'R^\\times'}</InlineMath> or
          <InlineMath>{'U(R)'}</InlineMath>, forms a group under multiplication.
        </p>
      </Definition>

      <Example title="Units in Various Rings">
        <p>
          <InlineMath>{'\\mathbb{Z}^\\times = \\{1, -1\\}'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'\\mathbb{Q}^\\times = \\mathbb{Q} \\setminus \\{0\\}'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'(\\mathbb{Z}/8\\mathbb{Z})^\\times = \\{1, 3, 5, 7\\}'}</InlineMath> (elements coprime to 8)
        </p>
        <p className="mt-2">
          <InlineMath>{'(\\mathbb{Z}/p\\mathbb{Z})^\\times = \\{1, 2, \\ldots, p-1\\}'}</InlineMath> for prime <InlineMath>p</InlineMath>
        </p>
      </Example>

      <Definition title="Zero Divisors">
        <p>
          A nonzero element <InlineMath>{'a \\in R'}</InlineMath> is a <strong>zero divisor</strong> if there
          exists a nonzero <InlineMath>{'b \\in R'}</InlineMath> such that <InlineMath>{'ab = 0'}</InlineMath> or <InlineMath>{'ba = 0'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Zero Divisors in Z_6">
        <p>
          In <InlineMath>{'\\mathbb{Z}_6'}</InlineMath>: <InlineMath>{'2 \\cdot 3 = 6 \\equiv 0 \\pmod{6}'}</InlineMath>
        </p>
        <p className="mt-2">
          So both 2 and 3 are zero divisors. The zero divisors in <InlineMath>{'\\mathbb{Z}_6'}</InlineMath> are <InlineMath>{'\\{2, 3, 4\\}'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Units Cannot Be Zero Divisors"
        proof={
          <>
            <p>
              Suppose <InlineMath>u</InlineMath> is a unit with inverse <InlineMath>{'u^{-1}'}</InlineMath>,
              and <InlineMath>{'ub = 0'}</InlineMath> for some <InlineMath>b</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'b = 1 \\cdot b = (u^{-1}u)b = u^{-1}(ub) = u^{-1} \\cdot 0 = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              So the only element that <InlineMath>u</InlineMath> can multiply to give 0 is 0 itself.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'u \\in R'}</InlineMath> is a unit, then <InlineMath>u</InlineMath> is not a zero divisor.
        </p>
      </Theorem>

      <h3>Integral Domains and Fields</h3>

      <Definition title="Integral Domain">
        <p>
          An <strong>integral domain</strong> is a commutative ring with unity <InlineMath>{'1 \\neq 0'}</InlineMath>
          that has no zero divisors. Equivalently, for all <InlineMath>{'a, b \\in R'}</InlineMath>:
        </p>
        <MathBlock>
          {'ab = 0 \\implies a = 0 \\text{ or } b = 0'}
        </MathBlock>
      </Definition>

      <Definition title="Field">
        <p>
          A <strong>field</strong> is a commutative ring with unity <InlineMath>{'1 \\neq 0'}</InlineMath>
          in which every nonzero element is a unit. Equivalently, <InlineMath>{'F^\\times = F \\setminus \\{0\\}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Every Field is an Integral Domain"
        proof={
          <>
            <p>
              Let <InlineMath>F</InlineMath> be a field and suppose <InlineMath>{'ab = 0'}</InlineMath> with <InlineMath>{'a \\neq 0'}</InlineMath>.
              Since <InlineMath>a</InlineMath> is nonzero, it has an inverse <InlineMath>{'a^{-1}'}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'b = 1 \\cdot b = (a^{-1}a)b = a^{-1}(ab) = a^{-1} \\cdot 0 = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every field is an integral domain.
        </p>
      </Theorem>

      <Theorem title="Finite Integral Domains are Fields"
        proof={
          <>
            <p>
              Let <InlineMath>R</InlineMath> be a finite integral domain and <InlineMath>{'a \\in R'}</InlineMath> be nonzero.
              Consider the function <InlineMath>{'\\phi_a: R \\to R'}</InlineMath> defined by <InlineMath>{'\\phi_a(x) = ax'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is injective: if <InlineMath>{'ax = ay'}</InlineMath>, then <InlineMath>{'a(x-y) = 0'}</InlineMath>, and since
              <InlineMath>{'a \\neq 0'}</InlineMath> and <InlineMath>R</InlineMath> is an integral domain, <InlineMath>{'x = y'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>R</InlineMath> is finite, an injective function <InlineMath>{'R \\to R'}</InlineMath> is also
              surjective. Hence <InlineMath>{'1 \\in \\text{Im}(\\phi_a)'}</InlineMath>, meaning <InlineMath>{'ab = 1'}</InlineMath>
              for some <InlineMath>b</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every finite integral domain is a field.
        </p>
      </Theorem>

      <h3>Subrings</h3>

      <Definition title="Subring">
        <p>
          A subset <InlineMath>S</InlineMath> of a ring <InlineMath>R</InlineMath> is a <strong>subring</strong>
          if <InlineMath>S</InlineMath> is itself a ring under the operations inherited from <InlineMath>R</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>S</InlineMath> is a subring if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'S \\neq \\emptyset'}</InlineMath></li>
          <li><InlineMath>{'a - b \\in S'}</InlineMath> for all <InlineMath>{'a, b \\in S'}</InlineMath></li>
          <li><InlineMath>{'ab \\in S'}</InlineMath> for all <InlineMath>{'a, b \\in S'}</InlineMath></li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>Convention Warning:</strong> If we require rings to have unity, we must decide whether
        subrings must share the same unity. Different authors make different choices. In Dummit and Foote,
        subrings of rings with unity are required to contain that unity.
      </Callout>

      <Example title="Common Subrings">
        <p>
          <InlineMath>{'\\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}'}</InlineMath>
          forms a chain of subrings.
        </p>
        <p className="mt-2">
          <InlineMath>{'\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}'}</InlineMath> (Gaussian integers)
          is a subring of <InlineMath>{'\\mathbb{C}'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'2\\mathbb{Z} = \\{\\ldots, -4, -2, 0, 2, 4, \\ldots\\}'}</InlineMath> is a subring of
          <InlineMath>{'\\mathbb{Z}'}</InlineMath> (but does not contain 1, so some authors would not call it a subring).
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> A ring is a set with addition (forming an abelian group) and multiplication
        (associative, distributing over addition). Rings with commutative multiplication are called commutative;
        rings with a multiplicative identity are rings with unity. Units are elements with multiplicative inverses;
        zero divisors are nonzero elements whose product with some nonzero element is zero. An integral domain is
        a commutative ring with unity and no zero divisors; a field is an integral domain where every nonzero
        element is a unit.
      </Callout>
    </LessonLayout>
  );
}
