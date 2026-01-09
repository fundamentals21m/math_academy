import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Weight Distribution of Dual Codes</h2>

      <p>
        The weight distribution of a code provides essential information about its error-detecting
        and error-correcting capabilities. A remarkable result known as the MacWilliams identity
        relates the weight distribution of a code to that of its dual.
      </p>

      <h3>Weight Enumerator Polynomials</h3>

      <Definition title="Weight Distribution">
        Let <InlineMath math="\mathcal{C}" /> be a code of length <InlineMath math="n" /> over <InlineMath math="F = GF(q)" />.
        For <InlineMath math="i = 0, 1, \ldots, n" />, let <InlineMath math="A_i" /> denote the number of code words
        of weight <InlineMath math="i" /> in <InlineMath math="\mathcal{C}" />. The sequence
        <InlineMath math="(A_0, A_1, \ldots, A_n)" /> is called the <strong>weight distribution</strong> of <InlineMath math="\mathcal{C}" />.
      </Definition>

      <Callout type="info">
        <strong>Basic Properties:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath math="A_0 = 1" /> (the zero vector has weight 0)</li>
          <li><InlineMath math="\sum_{i=0}^{n} A_i = |\mathcal{C}|" /> (total number of code words)</li>
          <li>For a linear <InlineMath math="[n, k, d]" /> code, <InlineMath math="A_i = 0" /> for <InlineMath math="1 \leq i < d" /></li>
        </ul>
      </Callout>

      <Definition title="Weight Enumerator Polynomial">
        The <strong>weight enumerator polynomial</strong> of a code <InlineMath math="\mathcal{C}" /> with weight
        distribution <InlineMath math="(A_0, A_1, \ldots, A_n)" /> is the polynomial:
        <MathBlock math="W_{\mathcal{C}}(x, y) = \sum_{i=0}^{n} A_i x^{n-i} y^i" />
        Alternatively, in one variable:
        <MathBlock math="W_{\mathcal{C}}(z) = \sum_{i=0}^{n} A_i z^i = W_{\mathcal{C}}(1, z)" />
      </Definition>

      <Example title="Weight Enumerator of a Simple Code">
        <p>
          Consider the binary <InlineMath math="[4, 2]" /> code:
        </p>
        <MathBlock math="\mathcal{C} = \{0000, 1100, 0011, 1111\}" />
        <p className="mt-2">The weights are:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath math="\text{wt}(0000) = 0" /></li>
          <li><InlineMath math="\text{wt}(1100) = 2" /></li>
          <li><InlineMath math="\text{wt}(0011) = 2" /></li>
          <li><InlineMath math="\text{wt}(1111) = 4" /></li>
        </ul>
        <p className="mt-2">
          So the weight distribution is <InlineMath math="(A_0, A_1, A_2, A_3, A_4) = (1, 0, 2, 0, 1)" />.
        </p>
        <p className="mt-2">The weight enumerator polynomial is:</p>
        <MathBlock math="W_{\mathcal{C}}(x, y) = x^4 + 2x^2y^2 + y^4" />
      </Example>

      <Example title="Weight Enumerator of the (4, 7) Hamming Code">
        <p>
          The <InlineMath math="[7, 4, 3]" /> Hamming code has 16 code words. Direct enumeration shows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 code word of weight 0 (the zero word)</li>
          <li>0 code words of weight 1 or 2 (minimum distance is 3)</li>
          <li>7 code words of weight 3</li>
          <li>7 code words of weight 4</li>
          <li>0 code words of weight 5 or 6</li>
          <li>1 code word of weight 7 (the all-ones word)</li>
        </ul>
        <p className="mt-2">The weight enumerator is:</p>
        <MathBlock math="W_{\mathcal{C}}(x, y) = x^7 + 7x^4y^3 + 7x^3y^4 + y^7" />
      </Example>

      <h3>The MacWilliams Identity</h3>

      <p>
        The MacWilliams identity is a fundamental theorem that expresses the weight enumerator
        of the dual code <InlineMath math="\mathcal{C}^\perp" /> in terms of the weight enumerator
        of <InlineMath math="\mathcal{C}" />.
      </p>

      <Theorem
        title="MacWilliams Identity"
        proof={
          <>
            <p>
              We present the key ideas of the proof. For each <InlineMath math="\mathbf{u} \in V(n, q)" />,
              define the character sum:
            </p>
            <MathBlock math="\chi_{\mathbf{u}}(\mathbf{v}) = \omega^{\mathbf{u} \cdot \mathbf{v}}" />
            <p className="mt-2">
              where <InlineMath math="\omega = e^{2\pi i/p}" /> is a primitive <InlineMath math="p" />-th root
              of unity and <InlineMath math="p" /> is the characteristic of <InlineMath math="F" />.
            </p>
            <p className="mt-2">
              The key lemma is that for a linear code <InlineMath math="\mathcal{C}" />:
            </p>
            <MathBlock math="\sum_{\mathbf{c} \in \mathcal{C}} \chi_{\mathbf{u}}(\mathbf{c}) = \begin{cases} |\mathcal{C}| & \text{if } \mathbf{u} \in \mathcal{C}^\perp \\ 0 & \text{if } \mathbf{u} \notin \mathcal{C}^\perp \end{cases}" />
            <p className="mt-2">
              Using this and the Poisson summation formula over the group <InlineMath math="\mathcal{C}" />,
              one obtains after careful analysis:
            </p>
            <MathBlock math="\sum_{\mathbf{u} \in \mathcal{C}^\perp} x^{n - \text{wt}(\mathbf{u})} y^{\text{wt}(\mathbf{u})} = \frac{1}{|\mathcal{C}|} \sum_{\mathbf{c} \in \mathcal{C}} (x + (q-1)y)^{n - \text{wt}(\mathbf{c})} (x - y)^{\text{wt}(\mathbf{c})}" />
            <p className="mt-2">
              The left side is <InlineMath math="W_{\mathcal{C}^\perp}(x, y)" />. The right side simplifies to
              <InlineMath math="\frac{1}{|\mathcal{C}|} W_{\mathcal{C}}(x + (q-1)y, x - y)" />.
            </p>
          </>
        }
      >
        Let <InlineMath math="\mathcal{C}" /> be a linear <InlineMath math="[n, k]" /> code over <InlineMath math="GF(q)" />.
        Then the weight enumerator of the dual code <InlineMath math="\mathcal{C}^\perp" /> satisfies:
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = \frac{1}{|\mathcal{C}|} W_{\mathcal{C}}(x + (q-1)y, x - y)" />
        In the binary case (<InlineMath math="q = 2" />):
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = \frac{1}{|\mathcal{C}|} W_{\mathcal{C}}(x + y, x - y)" />
      </Theorem>

      <Callout type="warning">
        <strong>Importance:</strong> The MacWilliams identity allows us to compute the weight distribution
        of <InlineMath math="\mathcal{C}^\perp" /> from that of <InlineMath math="\mathcal{C}" /> without
        explicitly constructing the dual code.
      </Callout>

      <Example title="Applying MacWilliams Identity">
        <p>
          Consider the self-dual <InlineMath math="[4, 2]" /> code from before with:
        </p>
        <MathBlock math="W_{\mathcal{C}}(x, y) = x^4 + 2x^2y^2 + y^4" />
        <p className="mt-2">
          Since <InlineMath math="\mathcal{C}" /> is self-dual, <InlineMath math="\mathcal{C}^\perp = \mathcal{C}" />,
          so <InlineMath math="W_{\mathcal{C}^\perp} = W_{\mathcal{C}}" />.
        </p>
        <p className="mt-2">Let us verify this using the MacWilliams identity with <InlineMath math="q = 2" />:</p>
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = \frac{1}{4} W_{\mathcal{C}}(x + y, x - y)" />
        <p className="mt-2">Substituting:</p>
        <MathBlock math="W_{\mathcal{C}}(x + y, x - y) = (x + y)^4 + 2(x + y)^2(x - y)^2 + (x - y)^4" />
        <p className="mt-2">Expanding each term:</p>
        <MathBlock math="(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4" />
        <MathBlock math="(x - y)^4 = x^4 - 4x^3y + 6x^2y^2 - 4xy^3 + y^4" />
        <MathBlock math="(x + y)^2(x - y)^2 = (x^2 - y^2)^2 = x^4 - 2x^2y^2 + y^4" />
        <p className="mt-2">Adding these:</p>
        <MathBlock math="(x + y)^4 + (x - y)^4 = 2x^4 + 12x^2y^2 + 2y^4" />
        <MathBlock math="2(x + y)^2(x - y)^2 = 2x^4 - 4x^2y^2 + 2y^4" />
        <p className="mt-2">Total:</p>
        <MathBlock math="W_{\mathcal{C}}(x + y, x - y) = 4x^4 + 8x^2y^2 + 4y^4" />
        <p className="mt-2">Dividing by 4:</p>
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = x^4 + 2x^2y^2 + y^4 = W_{\mathcal{C}}(x, y) \,\, \checkmark" />
      </Example>

      <Example title="Dual Weight Enumerator of Hamming Code">
        <p>
          The <InlineMath math="[7, 4, 3]" /> Hamming code has weight enumerator:
        </p>
        <MathBlock math="W_{\mathcal{C}}(x, y) = x^7 + 7x^4y^3 + 7x^3y^4 + y^7" />
        <p className="mt-2">
          Its dual is the <InlineMath math="[7, 3, 4]" /> simplex code. Using the MacWilliams identity:
        </p>
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = \frac{1}{16} W_{\mathcal{C}}(x + y, x - y)" />
        <p className="mt-2">After computation:</p>
        <MathBlock math="W_{\mathcal{C}^\perp}(x, y) = x^7 + 7x^3y^4" />
        <p className="mt-2">
          This shows the simplex code has 1 code word of weight 0 and 7 code words of weight 4.
          In particular, all non-zero code words have the same weight (4), which is a characteristic
          property of simplex codes.
        </p>
      </Example>

      <h3>Applications of Weight Enumerators</h3>

      <Theorem
        title="Error Probability Bound"
        proof={
          <>
            <p>
              In a binary symmetric channel with crossover probability <InlineMath math="p" />,
              a code word <InlineMath math="\mathbf{c}" /> can be decoded incorrectly if the received
              word is closer to some other code word <InlineMath math="\mathbf{c}'" />.
            </p>
            <p className="mt-2">
              The probability that exactly <InlineMath math="i" /> bits are flipped is:
            </p>
            <MathBlock math="P(\text{wt}(\mathbf{e}) = i) = \binom{n}{i} p^i (1-p)^{n-i}" />
            <p className="mt-2">
              For minimum distance decoding, an error occurs if more than <InlineMath math="\lfloor (d-1)/2 \rfloor" /> bits
              are flipped. The weight enumerator provides bounds on this probability.
            </p>
          </>
        }
      >
        For a linear <InlineMath math="[n, k, d]" /> code used over a binary symmetric channel with
        crossover probability <InlineMath math="p" />, the probability of undetected error when using
        the code for error detection is:
        <MathBlock math="P_{\text{und}} = \sum_{i=1}^{n} A_i p^i (1-p)^{n-i} = W_{\mathcal{C}}(1-p, p) - (1-p)^n" />
      </Theorem>

      <Callout type="success">
        <strong>Summary:</strong> The weight enumerator polynomial captures essential information
        about a code:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The minimum distance (smallest <InlineMath math="i > 0" /> with <InlineMath math="A_i \neq 0" />)</li>
          <li>Error detection and correction capabilities</li>
          <li>Through MacWilliams identity, the weight distribution of the dual code</li>
          <li>Bounds on error probabilities in communication channels</li>
        </ul>
      </Callout>

      <Definition title="Distance Enumerator">
        The <strong>distance enumerator</strong> of a code <InlineMath math="\mathcal{C}" /> is:
        <MathBlock math="D_{\mathcal{C}}(x, y) = \frac{1}{|\mathcal{C}|} \sum_{\mathbf{u}, \mathbf{v} \in \mathcal{C}} x^{n - d(\mathbf{u}, \mathbf{v})} y^{d(\mathbf{u}, \mathbf{v})}" />
        For linear codes, <InlineMath math="D_{\mathcal{C}}(x, y) = W_{\mathcal{C}}(x, y)" /> since
        <InlineMath math="d(\mathbf{u}, \mathbf{v}) = \text{wt}(\mathbf{u} - \mathbf{v})" />.
      </Definition>
    </LessonLayout>
  );
}
