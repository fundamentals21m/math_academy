import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>1.2 Matrix Encoding Techniques</h2>

      <p>
        One systematic algebraic technique for encoding binary words is through <strong>matrix
        multiplication</strong>. This approach provides a structured way to add redundancy to
        messages, enabling error detection and correction.
      </p>

      <h3>Review of Matrix Operations</h3>

      <p>
        Recall that if <InlineMath>{`\\mathbf{A} = (a_{ij})`}</InlineMath> is an <InlineMath>{`m \\times n`}</InlineMath> matrix
        and <InlineMath>{`\\mathbf{B} = (b_{rs})`}</InlineMath> is an <InlineMath>{`n \\times k`}</InlineMath> matrix,
        then the product <InlineMath>{`\\mathbf{AB}`}</InlineMath> is an <InlineMath>{`m \\times k`}</InlineMath> matrix <InlineMath>{`(c_{ij})`}</InlineMath> where:
      </p>
      <MathBlock>{`c_{ij} = \\sum_{r=1}^{n} a_{ir}b_{rj} \\quad \\text{for } 1 \\leq i \\leq m, \\, 1 \\leq j \\leq k`}</MathBlock>

      <Definition title="Homomorphism">
        <p>
          If <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are two groups, a map <InlineMath>{`f: A \\to B`}</InlineMath> satisfying:
        </p>
        <MathBlock>{`f(xy) = f(x)f(y) \\quad \\forall x, y \\in A`}</MathBlock>
        <p className="mt-2">is called a <strong>homomorphism</strong>.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A homomorphism that is one-to-one is called a <strong>monomorphism</strong></li>
          <li>A homomorphism that is both one-to-one and onto is called an <strong>isomorphism</strong></li>
        </ul>
      </Definition>

      <h3>Generator Matrices</h3>

      <Definition title="Encoding (Generator) Matrix">
        <p>
          An <InlineMath>{`m \\times n`}</InlineMath> matrix over <InlineMath>{`\\mathbb{B}`}</InlineMath> with <InlineMath>{`m < n`}</InlineMath> is
          called an <strong>encoding matrix</strong> (or <strong>generator matrix</strong>) if its
          first <InlineMath>m</InlineMath> columns form the identity matrix <InlineMath>{`\\mathbf{I}_m`}</InlineMath>.
        </p>
        <p className="mt-2">
          Given a generator matrix <InlineMath>{`\\mathbf{G}`}</InlineMath>, we define an encoding
          function <InlineMath>{`E: \\mathbb{B}^m \\to \\mathbb{B}^n`}</InlineMath> by:
        </p>
        <MathBlock>{`E(\\mathbf{x}) = \\mathbf{x}\\mathbf{G} \\quad \\text{for } \\mathbf{x} \\in \\mathbb{B}^m`}</MathBlock>
      </Definition>

      <Theorem
        title="Matrix Encoding is a Monomorphism"
        proof={
          <>
            <p>
              Since the first <InlineMath>m</InlineMath> columns of <InlineMath>{`\\mathbf{G}`}</InlineMath> form the
              identity matrix, for any <InlineMath>{`\\mathbf{x} = (x_1, \\ldots, x_m)`}</InlineMath>, the
              code word <InlineMath>{`\\mathbf{xG}`}</InlineMath> has <InlineMath>{`(x_1, \\ldots, x_m)`}</InlineMath> as
              its first <InlineMath>m</InlineMath> components.
            </p>
            <p className="mt-2">
              Thus, different message words produce different code words, so <InlineMath>E</InlineMath> is one-to-one.
            </p>
            <p className="mt-2">
              For <InlineMath>{`\\mathbf{x}, \\mathbf{y} \\in \\mathbb{B}^m`}</InlineMath>:
            </p>
            <MathBlock>{`E(\\mathbf{x} + \\mathbf{y}) = (\\mathbf{x} + \\mathbf{y})\\mathbf{G} = \\mathbf{x}\\mathbf{G} + \\mathbf{y}\\mathbf{G} = E(\\mathbf{x}) + E(\\mathbf{y})`}</MathBlock>
            <p className="mt-2">
              Thus <InlineMath>E</InlineMath> is a homomorphism, and being one-to-one, it is a monomorphism.
            </p>
          </>
        }
      >
        <p>
          For any <InlineMath>{`m \\times n`}</InlineMath> generator matrix <InlineMath>{`\\mathbf{G}`}</InlineMath>,
          the encoding function <InlineMath>{`E: \\mathbb{B}^m \\to \\mathbb{B}^n`}</InlineMath> given
          by <InlineMath>{`E(\\mathbf{x}) = \\mathbf{x}\\mathbf{G}`}</InlineMath> is a monomorphism.
        </p>
      </Theorem>

      <Definition title="Matrix Code">
        <p>
          A code given by a generator matrix is called a <strong>matrix code</strong>.
        </p>
      </Definition>

      <Definition title="Group Code">
        <p>
          When the code words in a block code form an additive group, the code is called a <strong>group code</strong>.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Key Insight:</strong> A matrix code is always a group code, since the code words
        form the image of a homomorphism, which is always a subgroup.
      </Callout>

      <Example title="A (3, 6) Matrix Code">
        <p>Consider the <InlineMath>{`3 \\times 6`}</InlineMath> generator matrix:</p>
        <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} 1 & 0 & 0 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & 1 \\\\ 0 & 0 & 1 & 1 & 1 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">All the code words of this code are:</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-dark-800/50 p-3 rounded-lg font-mono text-sm">
            <p>000 → 000000</p>
            <p>001 → 001111</p>
            <p>010 → 010011</p>
            <p>100 → 100110</p>
          </div>
          <div className="bg-dark-800/50 p-3 rounded-lg font-mono text-sm">
            <p>011 → 011100</p>
            <p>101 → 101001</p>
            <p>110 → 110101</p>
            <p>111 → 111010</p>
          </div>
        </div>
        <p className="mt-4">
          This code has 4 code words of weight 3, 3 code words of weight 4, and only the zero
          code word of weight 0.
        </p>
        <p className="mt-2 text-emerald-400">
          The minimum distance is 3, so this code can correct any single error and detect any error of weight 2.
        </p>
      </Example>

      <h3>Parity Check Codes</h3>

      <Definition title="(m, m+1) Parity Check Code">
        <p>
          An <strong><InlineMath>(m, m+1)</InlineMath> parity check code</strong> is defined by the
          encoding function <InlineMath>{`E: \\mathbb{B}^m \\to \\mathbb{B}^{m+1}`}</InlineMath>:
        </p>
        <MathBlock>{`E(a_1a_2\\cdots a_m) = a_1a_2\\cdots a_m a_{m+1}`}</MathBlock>
        <p className="mt-2">where:</p>
        <MathBlock>{`a_{m+1} = \\begin{cases} 1 & \\text{if } \\text{wt}(a_1a_2\\cdots a_m) \\text{ is odd} \\\\ 0 & \\text{if } \\text{wt}(a_1a_2\\cdots a_m) \\text{ is even} \\end{cases}`}</MathBlock>
        <p className="mt-2">
          The extra bit <InlineMath>{`a_{m+1}`}</InlineMath> ensures that every code word has even weight.
        </p>
      </Definition>

      <Theorem
        title="Parity Check Code is a Group Code"
        proof={
          <>
            <p>
              Let <InlineMath>{`a = a_1\\cdots a_m`}</InlineMath> and <InlineMath>{`a' = a'_1\\cdots a'_m`}</InlineMath> be
              message words with corresponding code words <InlineMath>{`b = b_1\\cdots b_{m+1}`}</InlineMath> and <InlineMath>{`b' = b'_1\\cdots b'_{m+1}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`c = b + b' = c_1\\cdots c_{m+1}`}</InlineMath> where <InlineMath>{`c_i = b_i + b'_i`}</InlineMath>.
            </p>
            <p className="mt-2">
              Now <InlineMath>{`c_1 + \\cdots + c_m = (b_1 + \\cdots + b_m) + (b'_1 + \\cdots + b'_m)`}</InlineMath>.
            </p>
            <p className="mt-2">
              This sum is odd if and only if exactly one of <InlineMath>{`b_1 + \\cdots + b_m`}</InlineMath> and <InlineMath>{`b'_1 + \\cdots + b'_m`}</InlineMath> is
              odd. In this case, exactly one of <InlineMath>{`b_{m+1}`}</InlineMath> and <InlineMath>{`b'_{m+1}`}</InlineMath> equals 1,
              so <InlineMath>{`c_{m+1} = 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              If both sums are even (or both odd), then <InlineMath>{`c_1 + \\cdots + c_m`}</InlineMath> is even
              and <InlineMath>{`c_{m+1} = b_{m+1} + b'_{m+1} = 0`}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>c</InlineMath> satisfies the parity check condition and is a code word.
              The zero word is the identity, and every word is its own inverse.
            </p>
          </>
        }
      >
        <p>
          The <InlineMath>(m, m+1)</InlineMath> parity check code is a group code.
        </p>
      </Theorem>

      <h3>Minimum Distance in Group Codes</h3>

      <Theorem
        title="Minimum Distance Equals Minimum Weight"
        proof={
          <>
            <p>
              Let <InlineMath>d</InlineMath> be the minimum distance of the group code. Then there
              exist code words <InlineMath>b, b'</InlineMath> such that <InlineMath>{`d = d(b, b') = \\text{wt}(b + b')`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since the code is a group code, <InlineMath>{`b + b'`}</InlineMath> is a code word. Let <InlineMath>t</InlineMath> be
              the minimum weight among non-zero code words. Then <InlineMath>{`d \\geq t`}</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, there exists a non-zero code word <InlineMath>{`b''`}</InlineMath> with <InlineMath>{`\\text{wt}(b'') = t`}</InlineMath>.
              Then <InlineMath>{`t = \\text{wt}(b'') = d(b'', 0) \\geq d`}</InlineMath>.
            </p>
            <p className="mt-2">Hence <InlineMath>{`d = t`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          For a group code, the minimum distance equals the minimum of the weights of the non-zero code words.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Important:</strong> In group codes, the error patterns that pass undetected are
        precisely those which correspond to non-zero code words. If <InlineMath>{`e = b^*`}</InlineMath> is
        a code word, then for any code word <InlineMath>b</InlineMath>, <InlineMath>{`b + e`}</InlineMath> is
        again a code word, so the error goes undetected.
      </Callout>

      <h3>Decoding by Coset Leaders</h3>

      <p>
        For group codes, we can use a systematic decoding procedure based on the decomposition
        of a group into cosets.
      </p>

      <Definition title="Subgroup and Coset">
        <p>
          A non-empty subset <InlineMath>N</InlineMath> of a group <InlineMath>M</InlineMath> is
          called a <strong>subgroup</strong> if the composition in <InlineMath>M</InlineMath> induces
          a composition in <InlineMath>N</InlineMath> and <InlineMath>N</InlineMath> is itself a group.
        </p>
        <p className="mt-2">
          For <InlineMath>{`a \\in \\mathbb{B}^n`}</InlineMath> and a subgroup <InlineMath>C</InlineMath>,
          the set <InlineMath>{`a + C = \\{a + c : c \\in C\\}`}</InlineMath> is called a <strong>coset</strong> of <InlineMath>C</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Coset Properties"
        proof={
          <>
            <p>
              If <InlineMath>{`b \\in a + C`}</InlineMath>, then <InlineMath>{`b = a + c`}</InlineMath> for
              some <InlineMath>{`c \\in C`}</InlineMath>. For any <InlineMath>{`c' \\in C`}</InlineMath>:
            </p>
            <MathBlock>{`b + c' = a + (c + c') \\in a + C`}</MathBlock>
            <p className="mt-2">
              Thus <InlineMath>{`b + C \\subseteq a + C`}</InlineMath>. Similarly, <InlineMath>{`a = b + c`}</InlineMath> implies <InlineMath>{`a + C \\subseteq b + C`}</InlineMath>.
            </p>
            <p className="mt-2">
              Hence <InlineMath>{`a + C = b + C`}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{`(a + C) \\cap (b + C) \\neq \\emptyset`}</InlineMath>, there
              exists <InlineMath>{`x \\in a + C`}</InlineMath> and <InlineMath>{`x \\in b + C`}</InlineMath>,
              so <InlineMath>{`a + C = x + C = b + C`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Two cosets of <InlineMath>C</InlineMath> in <InlineMath>{`\\mathbb{B}^n`}</InlineMath> are either disjoint or identical.
          Furthermore, <InlineMath>{`b \\in a + C`}</InlineMath> if and only if <InlineMath>{`a + C = b + C`}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Coset Leader">
        <p>
          In each coset of <InlineMath>C</InlineMath> in <InlineMath>{`\\mathbb{B}^n`}</InlineMath>,
          we choose a word <InlineMath>{`b^i`}</InlineMath> of least weight. This word is called
          a <strong>coset leader</strong>.
        </p>
        <p className="mt-2">
          Any element <InlineMath>c</InlineMath> of <InlineMath>{`\\mathbb{B}^n`}</InlineMath> can be
          uniquely written as <InlineMath>{`c = b^i + c^j`}</InlineMath> for some coset
          leader <InlineMath>{`b^i`}</InlineMath> and code word <InlineMath>{`c^j \\in C`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>decoding by coset leaders</strong> procedure defines <InlineMath>{`D(c) = c^j`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Coset Leader Decoding"
        proof={
          <>
            <p>
              <strong>(⇒)</strong> Suppose error pattern <InlineMath>e</InlineMath> is corrected.
              Let <InlineMath>{`c^i`}</InlineMath> be transmitted, so received word is <InlineMath>{`b = c^i + e`}</InlineMath>.
              Write <InlineMath>{`b = b^k + c'`}</InlineMath> for coset leader <InlineMath>{`b^k`}</InlineMath> and
              code word <InlineMath>{`c'`}</InlineMath>.
            </p>
            <p className="mt-2">
              By the decoding process, <InlineMath>{`D(b) = c'`}</InlineMath>. Since error is
              corrected, <InlineMath>{`D(b) = c^i`}</InlineMath>, so <InlineMath>{`c' = c^i`}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{`b^k + c^i = c^i + e`}</InlineMath>, giving <InlineMath>{`e = b^k`}</InlineMath>—a coset leader.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> If <InlineMath>{`e = b^k`}</InlineMath> is a coset leader, then for
              any code word <InlineMath>{`c^i`}</InlineMath>, the received word is <InlineMath>{`c^i + e = b^k + c^i`}</InlineMath>,
              and <InlineMath>{`D(b^k + c^i) = c^i`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          In group codes, decoding by coset leaders corrects precisely those error patterns which are coset leaders.
        </p>
      </Theorem>

      <Example title="Coset Decomposition for (3, 4) Parity Check Code">
        <p>The code words are:</p>
        <MathBlock>{`\\{0000, 0011, 0101, 0110, 1001, 1010, 1100, 1111\\}`}</MathBlock>
        <p className="mt-2">Coset decomposition in <InlineMath>{`\\mathbb{B}^4`}</InlineMath>:</p>
        <div className="bg-dark-800/50 p-4 rounded-lg mt-2 overflow-x-auto">
          <table className="font-mono text-sm">
            <thead>
              <tr>
                <th className="px-2 text-left text-primary-400">Leader</th>
                <th className="px-2 text-left" colSpan={8}>Coset Elements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2">0000</td>
                <td className="px-2">0000</td>
                <td className="px-2">0011</td>
                <td className="px-2">0101</td>
                <td className="px-2">1001</td>
                <td className="px-2">0110</td>
                <td className="px-2">1010</td>
                <td className="px-2">1100</td>
                <td className="px-2">1111</td>
              </tr>
              <tr>
                <td className="px-2">0001</td>
                <td className="px-2">0001</td>
                <td className="px-2">0010</td>
                <td className="px-2">0100</td>
                <td className="px-2">1000</td>
                <td className="px-2">0111</td>
                <td className="px-2">1011</td>
                <td className="px-2">1101</td>
                <td className="px-2">1110</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          If the received word is 1011, it lies in the second coset. The coset leader is 0001.
          Adding <InlineMath>{`1011 + 0001 = 1010`}</InlineMath>, which is the code word at the head
          of the column containing 1011.
        </p>
      </Example>

      <Callout type="success">
        <strong>Section Summary:</strong> Matrix encoding provides a systematic way to construct
        codes using matrix multiplication. The generator matrix <InlineMath>{`\\mathbf{G}`}</InlineMath> defines
        an encoding function that is a monomorphism. Matrix codes are group codes, and for group
        codes, the minimum distance equals the minimum non-zero weight. Decoding by coset leaders
        provides an efficient method for error correction in group codes.
      </Callout>
    </LessonLayout>
  );
}
