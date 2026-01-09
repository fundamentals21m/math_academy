import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <p>
        In this section, we work through detailed examples of cyclic code computations
        and explore the important invariance property of cyclic codes under certain
        automorphisms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Solved Examples</h2>

      <Example title="Computing a Generator Polynomial">
        <p>
          Let us find all binary cyclic codes of length 7. First, we factor <InlineMath>{`X^7 - 1`}</InlineMath> over <InlineMath>{`\mathbb{B}`}</InlineMath>:
        </p>
        <MathBlock>
          {`X^7 - 1 = X^7 + 1 = (X + 1)(X^3 + X + 1)(X^3 + X^2 + 1)`}
        </MathBlock>
        <p className="mt-2">
          The divisors of <InlineMath>{`X^7 - 1`}</InlineMath> give us all cyclic codes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`g(X) = 1`}</InlineMath>: dimension 7 (the entire space)</li>
          <li><InlineMath>{`g(X) = X + 1`}</InlineMath>: dimension 6</li>
          <li><InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>: dimension 4</li>
          <li><InlineMath>{`g(X) = X^3 + X^2 + 1`}</InlineMath>: dimension 4</li>
          <li><InlineMath>{`g(X) = (X + 1)(X^3 + X + 1)`}</InlineMath>: dimension 3</li>
          <li><InlineMath>{`g(X) = (X + 1)(X^3 + X^2 + 1)`}</InlineMath>: dimension 3</li>
          <li><InlineMath>{`g(X) = (X^3 + X + 1)(X^3 + X^2 + 1)`}</InlineMath>: dimension 1</li>
          <li><InlineMath>{`g(X) = X^7 - 1`}</InlineMath>: dimension 0 (the zero code)</li>
        </ul>
      </Example>

      <Example title="Encoding with a Cyclic Code">
        <p>
          Consider the binary cyclic code <InlineMath>{`\mathscr{C}`}</InlineMath> of length 7 with
          generator polynomial <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>. This is a [7, 4] code.
        </p>
        <p className="mt-2">
          To encode the message <InlineMath>{`m = (1, 0, 1, 1)`}</InlineMath>, we represent it as
          the polynomial <InlineMath>{`m(X) = 1 + X^2 + X^3`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Non-systematic encoding:</strong> Compute <InlineMath>{`c(X) = m(X) \\cdot g(X)`}</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
c(X) &= (1 + X^2 + X^3)(X^3 + X + 1) \\\\
&= X^3 + X + 1 + X^5 + X^3 + X^2 + X^6 + X^4 + X^3 \\\\
&= 1 + X + X^2 + X^3 + X^4 + X^5 + X^6
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          The codeword is <InlineMath>{`c = (1, 1, 1, 1, 1, 1, 1)`}</InlineMath>.
        </p>
      </Example>

      <Example title="Systematic Encoding">
        <p>
          For systematic encoding with the same code, we place the message in the high-order
          positions and compute the parity check symbols.
        </p>
        <p className="mt-2">
          Given <InlineMath>{`m(X) = 1 + X^2 + X^3`}</InlineMath>, compute <InlineMath>{`X^3 m(X) = X^3 + X^5 + X^6`}</InlineMath>.
        </p>
        <p className="mt-2">
          Divide <InlineMath>{`X^3 m(X)`}</InlineMath> by <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>:
        </p>
        <MathBlock>
          {`X^6 + X^5 + X^3 = (X^3 + X^2 + 1)(X^3 + X + 1) + (X^2 + X + 1)`}
        </MathBlock>
        <p className="mt-2">
          The remainder is <InlineMath>{`r(X) = X^2 + X + 1`}</InlineMath>. The systematic codeword is:
        </p>
        <MathBlock>
          {`c(X) = r(X) + X^3 m(X) = 1 + X + X^2 + X^3 + X^5 + X^6`}
        </MathBlock>
        <p className="mt-2">
          This gives <InlineMath>{`c = (1, 1, 1, 1, 0, 1, 1)`}</InlineMath>, where the last 4 positions
          contain the original message.
        </p>
      </Example>

      <Example title="Finding the Dual Code">
        <p>
          The dual of a cyclic code is also cyclic. For the [7, 4] code with <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>,
          find the generator of the dual code.
        </p>
        <p className="mt-2">
          The check polynomial is <InlineMath>{`h(X) = (X^7 - 1)/g(X)`}</InlineMath>:
        </p>
        <MathBlock>{`h(X) = \\frac{X^7 + 1}{X^3 + X + 1} = (X + 1)(X^3 + X^2 + 1) = X^4 + X^3 + X^2 + 1`}</MathBlock>
        <p className="mt-2">
          The generator polynomial of <InlineMath>{`\mathscr{C}^\perp`}</InlineMath> is the reciprocal polynomial:
        </p>
        <MathBlock>
          {`h^*(X) = X^4 h(X^{-1}) = X^4(X^{-4} + X^{-3} + X^{-2} + 1) = 1 + X + X^2 + X^4`}
        </MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{`\mathscr{C}^\perp`}</InlineMath> is a [7, 3] cyclic code with
          generator <InlineMath>{`g^\\perp(X) = 1 + X + X^2 + X^4`}</InlineMath>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">The Invariance Property</h2>

      <p>
        Cyclic codes possess a remarkable invariance property under certain permutations
        of coordinates. This property is fundamental to understanding the automorphism
        group of cyclic codes.
      </p>

      <Definition title="Cyclic Shift Permutation">
        <p>
          Let <InlineMath>{`\\pi`}</InlineMath> be the permutation of <InlineMath>{`\{0, 1, \ldots, n-1\}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`\\pi(i) = i + 1 \\pmod{n}`}</MathBlock>
        <p className="mt-2">
          For a vector <InlineMath>{`v = (v_0, v_1, \ldots, v_{n-1})`}</InlineMath>, the action
          of <InlineMath>{`\\pi`}</InlineMath> gives:
        </p>
        <MathBlock>{`\\pi(v) = (v_{n-1}, v_0, v_1, \\ldots, v_{n-2})`}</MathBlock>
      </Definition>

      <Theorem
        title="Cyclic Invariance Property"
        proof={
          <>
            <p>
              Let <InlineMath>{`c = (c_0, c_1, \ldots, c_{n-1}) \in \mathscr{C}`}</InlineMath>.
              The corresponding polynomial is <InlineMath>{`c(X) = c_0 + c_1 X + \cdots + c_{n-1} X^{n-1}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Consider <InlineMath>{`X \\cdot c(X)`}</InlineMath> in the ring <InlineMath>{`R_n = F[X]/\\langle X^n - 1 \\rangle`}</InlineMath>:
            </p>
            <MathBlock>{`X \\cdot c(X) = c_0 X + c_1 X^2 + \\cdots + c_{n-2} X^{n-1} + c_{n-1} X^n`}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{`X^n \equiv 1 \pmod{X^n - 1}`}</InlineMath>, we have:
            </p>
            <MathBlock>{`X \\cdot c(X) \\equiv c_{n-1} + c_0 X + c_1 X^2 + \\cdots + c_{n-2} X^{n-1} \\pmod{X^n - 1}`}</MathBlock>
            <p className="mt-2">
              This corresponds to the vector <InlineMath>{`\pi(c) = (c_{n-1}, c_0, \ldots, c_{n-2})`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`\mathscr{C}`}</InlineMath> is an ideal in <InlineMath>{`R_n`}</InlineMath>,
              if <InlineMath>{`c(X) \in \mathscr{C}`}</InlineMath> then <InlineMath>{`X \cdot c(X) \in \mathscr{C}`}</InlineMath>,
              proving that <InlineMath>{`\pi(c) \in \mathscr{C}`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A linear code <InlineMath>{`\mathscr{C}`}</InlineMath> of length <InlineMath>{`n`}</InlineMath> is
          cyclic if and only if it is invariant under the cyclic shift permutation <InlineMath>{`\\pi`}</InlineMath>.
          That is, for all <InlineMath>{`c \in \mathscr{C}`}</InlineMath>:
        </p>
        <MathBlock>{`c \\in \\mathscr{C} \\implies \\pi(c) \\in \\mathscr{C}`}</MathBlock>
      </Theorem>

      <Definition title="Multiplier Automorphism">
        <p>
          Let <InlineMath>{`n`}</InlineMath> be a positive integer and <InlineMath>{`s`}</InlineMath> be an integer
          with <InlineMath>{`\\gcd(s, n) = 1`}</InlineMath>. The <strong>multiplier</strong> <InlineMath>{`\\mu_s`}</InlineMath> is
          the permutation of <InlineMath>{`\{0, 1, \ldots, n-1\}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`\\mu_s(i) = si \\pmod{n}`}</MathBlock>
        <p className="mt-2">
          For a vector <InlineMath>{`v = (v_0, v_1, \ldots, v_{n-1})`}</InlineMath>, the action
          of <InlineMath>{`\\mu_s`}</InlineMath> on the coordinates gives a new
          vector <InlineMath>{`\\mu_s(v)`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Multiplier Invariance"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\alpha`}</InlineMath> be a primitive <InlineMath>{`n`}</InlineMath>-th root of unity
              in an extension field, and let <InlineMath>{`\mathscr{C}`}</InlineMath> be the cyclic code
              with defining set <InlineMath>{`T \subseteq \{0, 1, \ldots, n-1\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              A codeword <InlineMath>{`c(X)`}</InlineMath> is in <InlineMath>{`\mathscr{C}`}</InlineMath> if
              and only if <InlineMath>{`c(\\alpha^j) = 0`}</InlineMath> for all <InlineMath>{`j \\in T`}</InlineMath>.
            </p>
            <p className="mt-2">
              The action of <InlineMath>{`\\mu_s`}</InlineMath> on <InlineMath>{`c(X) = \sum_{i=0}^{n-1} c_i X^i`}</InlineMath> gives
              a polynomial whose evaluation at <InlineMath>{`\\alpha^j`}</InlineMath> equals <InlineMath>{`c(\alpha^{sj})`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`q`}</InlineMath> generates a subgroup of <InlineMath>{`(\mathbb{Z}/n\mathbb{Z})^*`}</InlineMath>,
              the cyclotomic cosets are preserved under multiplication by <InlineMath>{`q`}</InlineMath>.
              If <InlineMath>{`j \\in T`}</InlineMath>, then <InlineMath>{`qj \pmod{n}`}</InlineMath> is also in <InlineMath>{`T`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore, <InlineMath>{`\mu_s(\mathscr{C}) \subseteq \mathscr{C}`}</InlineMath>, and by the same
              argument applied to <InlineMath>{`\mu_{s^{-1}}`}</InlineMath>, we get equality.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath>.
          Then <InlineMath>{`\mathscr{C}`}</InlineMath> is invariant under the multiplier <InlineMath>{`\\mu_q`}</InlineMath>:
        </p>
        <MathBlock>{`\\mu_q(\\mathscr{C}) = \\mathscr{C}`}</MathBlock>
        <p className="mt-2">
          More generally, if <InlineMath>{`s`}</InlineMath> is a power of <InlineMath>{`q`}</InlineMath> modulo <InlineMath>{`n`}</InlineMath>,
          then <InlineMath>{`\mu_s(\mathscr{C}) = \mathscr{C}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Multiplier Invariance for Binary Codes">
        <p>
          Consider binary cyclic codes of length 7 over <InlineMath>{`\mathbb{B} = \text{GF}(2)`}</InlineMath>.
          The multiplier <InlineMath>{`\\mu_2`}</InlineMath> acts on positions <InlineMath>{`\{0, 1, 2, 3, 4, 5, 6\}`}</InlineMath> as:
        </p>
        <MathBlock>{`0 \\to 0, \\quad 1 \\to 2, \\quad 2 \\to 4, \\quad 3 \\to 6, \\quad 4 \\to 1, \\quad 5 \\to 3, \\quad 6 \\to 5`}</MathBlock>
        <p className="mt-2">
          This permutation <InlineMath>{`\\mu_2 = (0)(1\\,2\\,4)(3\\,6\\,5)`}</InlineMath> preserves every binary
          cyclic code of length 7.
        </p>
        <p className="mt-2">
          For the [7, 4] Hamming code with generator <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>,
          consider the codeword <InlineMath>{`c = (1, 1, 0, 1, 0, 0, 0)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Applying <InlineMath>{`\\mu_2`}</InlineMath>: position 0 stays, positions 1, 2, 4 cycle,
          positions 3, 6, 5 cycle. The result <InlineMath>{`\\mu_2(c) = (1, 0, 1, 0, 0, 0, 1)`}</InlineMath> is
          also in the code.
        </p>
      </Example>

      <Callout type="info" title="Automorphism Group">
        <p>
          The automorphism group of a cyclic code contains at least the cyclic
          group <InlineMath>{`\langle \pi \rangle \cong \mathbb{Z}_n`}</InlineMath> generated by
          the cyclic shift. Combined with multiplier automorphisms, the full automorphism
          group often has a rich structure.
        </p>
        <p className="mt-2">
          For many cyclic codes, the automorphism group is the <strong>affine
          group</strong> <InlineMath>{`\text{AGL}(1, n)`}</InlineMath> or a subgroup thereof.
        </p>
      </Callout>

      <Theorem
        title="Affine Automorphisms"
        proof={
          <>
            <p>
              Let <InlineMath>{`\sigma_{a,b}`}</InlineMath> act on coordinate positions by <InlineMath>{`i \mapsto ai + b \pmod{n}`}</InlineMath>.
            </p>
            <p className="mt-2">
              The cyclic shift corresponds to <InlineMath>{`\sigma_{1,1}`}</InlineMath>,
              and the multiplier <InlineMath>{`\\mu_a`}</InlineMath> corresponds to <InlineMath>{`\sigma_{a,0}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since cyclic codes are closed under cyclic shifts (by definition) and under
              multipliers <InlineMath>{`\\mu_a`}</InlineMath> where <InlineMath>{`a`}</InlineMath> is a power of <InlineMath>{`q`}</InlineMath>,
              they are closed under the composition of these operations.
            </p>
            <p className="mt-2">
              The maps <InlineMath>{`\sigma_{a,b}`}</InlineMath> with <InlineMath>{`a`}</InlineMath> a power
              of <InlineMath>{`q`}</InlineMath> modulo <InlineMath>{`n`}</InlineMath> form a subgroup of the affine
              group, and this subgroup preserves any cyclic code.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\mathscr{C}`}</InlineMath> be a cyclic code of length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\text{GF}(q)`}</InlineMath>.
          Then <InlineMath>{`\mathscr{C}`}</InlineMath> is invariant under all affine maps of the form:
        </p>
        <MathBlock>{`\\sigma_{a,b}: i \\mapsto ai + b \\pmod{n}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`a = q^j`}</InlineMath> for some <InlineMath>{`j`}</InlineMath>,
          and <InlineMath>{`b \in \mathbb{Z}_n`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Automorphisms of the [7, 4] Hamming Code">
        <p>
          The binary [7, 4] Hamming code has generator <InlineMath>{`g(X) = X^3 + X + 1`}</InlineMath>.
          Its automorphism group includes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The cyclic shift <InlineMath>{`\pi = \sigma_{1,1}`}</InlineMath> of order 7</li>
          <li>The multiplier <InlineMath>{`\mu_2 = \sigma_{2,0}`}</InlineMath> of order 3</li>
        </ul>
        <p className="mt-2">
          Together, these generate a group of order 21, which acts transitively on the
          non-zero codewords. In fact, the full automorphism group of the [7, 4] Hamming code
          is <InlineMath>{`\text{GL}(3, 2)`}</InlineMath> of order 168.
        </p>
      </Example>
    </LessonLayout>
  );
}
