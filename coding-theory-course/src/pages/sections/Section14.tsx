import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>New Codes from Given Codes</h2>

      <p>
        Given a linear code <InlineMath math="\mathcal{C}" />, we can construct new codes by modifying
        it in various ways. The three most important operations are <strong>puncturing</strong>,
        <strong> shortening</strong>, and <strong>extending</strong>. These operations allow us to
        adjust code parameters to meet specific requirements.
      </p>

      <h3>Punctured Codes</h3>

      <Definition title="Punctured Code">
        Let <InlineMath math="\mathcal{C}" /> be an <InlineMath math="[n, k, d]" /> code over <InlineMath math="F" />.
        The <strong>punctured code</strong> <InlineMath math="\mathcal{C}^*" /> obtained by puncturing
        <InlineMath math="\mathcal{C}" /> in coordinate position <InlineMath math="i" /> is the code of length
        <InlineMath math="n - 1" /> formed by deleting the <InlineMath math="i" />-th coordinate from every code word:
        <MathBlock math="\mathcal{C}^* = \{(c_1, \ldots, c_{i-1}, c_{i+1}, \ldots, c_n) \mid (c_1, \ldots, c_n) \in \mathcal{C}\}" />
      </Definition>

      <Callout type="info">
        <strong>Intuition:</strong> Puncturing removes a coordinate position from all code words.
        This reduces the code length by 1 while potentially affecting the dimension and minimum distance.
      </Callout>

      <Theorem
        title="Parameters of Punctured Codes"
        proof={
          <>
            <p>
              <strong>Length:</strong> By definition, deleting one position reduces the length from <InlineMath math="n" /> to <InlineMath math="n - 1" />.
            </p>
            <p className="mt-2">
              <strong>Dimension:</strong> Let <InlineMath math="\mathbf{G}" /> be a generator matrix
              of <InlineMath math="\mathcal{C}" />. The generator matrix <InlineMath math="\mathbf{G}^*" />
              of <InlineMath math="\mathcal{C}^*" /> is obtained by deleting the <InlineMath math="i" />-th column
              of <InlineMath math="\mathbf{G}" />.
            </p>
            <p className="mt-2">
              If the <InlineMath math="i" />-th column is a linear combination of the other columns,
              then <InlineMath math="\text{rank}(\mathbf{G}^*) = k" />. Otherwise, <InlineMath math="\text{rank}(\mathbf{G}^*) = k - 1" />.
              In either case, <InlineMath math="k^* \geq k - 1" />.
            </p>
            <p className="mt-2">
              <strong>Minimum distance:</strong> Consider a code word <InlineMath math="\mathbf{c}" /> of minimum
              weight <InlineMath math="d" />. If <InlineMath math="c_i = 0" />, puncturing does not change its
              weight. If <InlineMath math="c_i \neq 0" />, puncturing reduces its weight by 1.
            </p>
            <p className="mt-2">
              If there exists a minimum weight code word with <InlineMath math="c_i = 0" />, then <InlineMath math="d^* = d" />.
              Otherwise, <InlineMath math="d^* = d - 1" />. In all cases, <InlineMath math="d^* \geq d - 1" />.
            </p>
          </>
        }
      >
        If <InlineMath math="\mathcal{C}" /> is an <InlineMath math="[n, k, d]" /> code and <InlineMath math="\mathcal{C}^*" /> is
        obtained by puncturing <InlineMath math="\mathcal{C}" /> in one position, then <InlineMath math="\mathcal{C}^*" /> is
        an <InlineMath math="[n-1, k^*, d^*]" /> code where:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath math="k - 1 \leq k^* \leq k" /></li>
          <li><InlineMath math="d - 1 \leq d^* \leq d" /></li>
        </ul>
      </Theorem>

      <Example title="Puncturing the (7, 4) Hamming Code">
        <p>
          Consider the <InlineMath math="[7, 4, 3]" /> Hamming code with generator matrix:
        </p>
        <MathBlock math="\mathbf{G} = \begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 & 1 & 1 & 1 \end{pmatrix}" />
        <p className="mt-2">
          Puncturing by deleting the last column gives:
        </p>
        <MathBlock math="\mathbf{G}^* = \begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 1 \\ 0 & 1 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 1 & 1 \end{pmatrix}" />
        <p className="mt-2">
          Since the last column of <InlineMath math="\mathbf{G}" /> is not a linear combination of other
          columns, the punctured code has dimension <InlineMath math="k^* = 4" />.
        </p>
        <p className="mt-2">
          The resulting <InlineMath math="[6, 4, 2]" /> code is called the <strong>shortened Hamming code</strong>.
          Note that all minimum weight code words of the original Hamming code have a 1 in at least one
          position, so puncturing can reduce the minimum distance from 3 to 2.
        </p>
      </Example>

      <h3>Shortened Codes</h3>

      <Definition title="Shortened Code">
        Let <InlineMath math="\mathcal{C}" /> be an <InlineMath math="[n, k, d]" /> code. The <strong>shortened code</strong>
        <InlineMath math="\mathcal{C}_s" /> obtained by shortening <InlineMath math="\mathcal{C}" /> in coordinate
        position <InlineMath math="i" /> is the code formed by:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Selecting all code words with <InlineMath math="c_i = 0" /></li>
          <li>Deleting the <InlineMath math="i" />-th coordinate from these code words</li>
        </ol>
        <MathBlock math="\mathcal{C}_s = \{(c_1, \ldots, c_{i-1}, c_{i+1}, \ldots, c_n) \mid (c_1, \ldots, c_n) \in \mathcal{C}, c_i = 0\}" />
      </Definition>

      <Callout type="info">
        <strong>Key Difference:</strong> Puncturing deletes a position from <em>all</em> code words,
        while shortening first restricts to code words with 0 in that position, then deletes it.
        Shortening is more restrictive and produces a smaller code.
      </Callout>

      <Theorem
        title="Parameters of Shortened Codes"
        proof={
          <>
            <p>
              <strong>Length:</strong> Deleting one position gives length <InlineMath math="n - 1" />.
            </p>
            <p className="mt-2">
              <strong>Dimension:</strong> The shortened code <InlineMath math="\mathcal{C}_s" /> consists of
              code words from <InlineMath math="\mathcal{C}" /> with <InlineMath math="c_i = 0" />. This is
              the intersection of <InlineMath math="\mathcal{C}" /> with the hyperplane <InlineMath math="x_i = 0" />.
            </p>
            <p className="mt-2">
              If all code words have <InlineMath math="c_i = 0" />, then <InlineMath math="\mathcal{C}_s" /> has
              dimension <InlineMath math="k" /> (after coordinate deletion). Otherwise, the constraint
              <InlineMath math="c_i = 0" /> reduces dimension by 1, giving <InlineMath math="k_s = k - 1" />.
            </p>
            <p className="mt-2">
              <strong>Minimum distance:</strong> Since <InlineMath math="\mathcal{C}_s \subseteq \mathcal{C}" />
              (viewing shortened code words as code words of <InlineMath math="\mathcal{C}" /> with <InlineMath math="c_i = 0" />),
              the minimum weight of non-zero code words in <InlineMath math="\mathcal{C}_s" /> is at least <InlineMath math="d" />.
              Deleting the zero coordinate does not change weight, so <InlineMath math="d_s \geq d" />.
            </p>
          </>
        }
      >
        If <InlineMath math="\mathcal{C}" /> is an <InlineMath math="[n, k, d]" /> code and <InlineMath math="\mathcal{C}_s" /> is
        obtained by shortening <InlineMath math="\mathcal{C}" /> in one position, then <InlineMath math="\mathcal{C}_s" /> is
        an <InlineMath math="[n-1, k_s, d_s]" /> code where:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath math="k - 1 \leq k_s \leq k" /></li>
          <li><InlineMath math="d_s \geq d" /></li>
        </ul>
      </Theorem>

      <Example title="Shortening a Binary Code">
        <p>
          Consider the <InlineMath math="[4, 2]" /> code:
        </p>
        <MathBlock math="\mathcal{C} = \{0000, 1100, 0011, 1111\}" />
        <p className="mt-2">
          To shorten in the first position, we select code words with <InlineMath math="c_1 = 0" />:
        </p>
        <MathBlock math="\{0000, 0011\}" />
        <p className="mt-2">Then delete the first coordinate:</p>
        <MathBlock math="\mathcal{C}_s = \{000, 011\}" />
        <p className="mt-2">
          The shortened code is a <InlineMath math="[3, 1, 2]" /> code. Note that the minimum distance
          is preserved (still 2).
        </p>
      </Example>

      <h3>Extended Codes</h3>

      <Definition title="Extended Code">
        Let <InlineMath math="\mathcal{C}" /> be an <InlineMath math="[n, k, d]" /> code over <InlineMath math="F" />.
        The <strong>extended code</strong> <InlineMath math="\bar{\mathcal{C}}" /> (or <InlineMath math="\mathcal{C}_e" />)
        is obtained by adding an <strong>overall parity check</strong> coordinate to each code word:
        <MathBlock math="\bar{\mathcal{C}} = \{(c_1, c_2, \ldots, c_n, c_{n+1}) \mid (c_1, \ldots, c_n) \in \mathcal{C}, \, c_{n+1} = -\sum_{i=1}^{n} c_i\}" />
      </Definition>

      <Callout type="info">
        <strong>Binary Case:</strong> For binary codes, <InlineMath math="c_{n+1} = c_1 + c_2 + \cdots + c_n" />
        (since <InlineMath math="-1 = 1" /> in <InlineMath math="\mathbb{B}" />). The extended code word has
        even weight because <InlineMath math="c_1 + c_2 + \cdots + c_n + c_{n+1} = 0" />.
      </Callout>

      <Theorem
        title="Parameters of Extended Codes"
        proof={
          <>
            <p>
              <strong>Length:</strong> Adding one coordinate increases length to <InlineMath math="n + 1" />.
            </p>
            <p className="mt-2">
              <strong>Dimension:</strong> The map <InlineMath math="\mathcal{C} \to \bar{\mathcal{C}}" /> that
              appends the parity check digit is a bijection, so <InlineMath math="|\bar{\mathcal{C}}| = |\mathcal{C}|" />.
              Since the code remains linear, <InlineMath math="\bar{k} = k" />.
            </p>
            <p className="mt-2">
              <strong>Minimum distance (binary):</strong> Let <InlineMath math="\mathbf{c}" /> be a code word
              of weight <InlineMath math="w" /> in <InlineMath math="\mathcal{C}" />. The extended code word has
              weight <InlineMath math="w" /> if <InlineMath math="w" /> is even, or <InlineMath math="w + 1" /> if
              <InlineMath math="w" /> is odd.
            </p>
            <p className="mt-2">
              If <InlineMath math="d" /> is odd, all minimum weight code words have odd weight, so they become
              weight <InlineMath math="d + 1" /> in <InlineMath math="\bar{\mathcal{C}}" />. Hence <InlineMath math="\bar{d} = d + 1" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="d" /> is even, minimum weight code words remain weight <InlineMath math="d" />,
              so <InlineMath math="\bar{d} = d" />.
            </p>
          </>
        }
      >
        If <InlineMath math="\mathcal{C}" /> is an <InlineMath math="[n, k, d]" /> binary code, then the
        extended code <InlineMath math="\bar{\mathcal{C}}" /> is an <InlineMath math="[n+1, k, \bar{d}]" /> code where:
        <MathBlock math="\bar{d} = \begin{cases} d + 1 & \text{if } d \text{ is odd} \\ d & \text{if } d \text{ is even} \end{cases}" />
        More precisely, <InlineMath math="\bar{d} = d" /> or <InlineMath math="\bar{d} = d + 1" />,
        and <InlineMath math="\bar{d}" /> is always even for binary codes.
      </Theorem>

      <Example title="Extended Hamming Code">
        <p>
          The <InlineMath math="[7, 4, 3]" /> Hamming code has odd minimum distance 3. Extending it gives
          the <InlineMath math="[8, 4, 4]" /> <strong>extended Hamming code</strong>.
        </p>
        <p className="mt-2">If the original parity check matrix is:</p>
        <MathBlock math="\mathbf{H} = \begin{pmatrix} 1 & 1 & 0 & 1 & 1 & 0 & 0 \\ 1 & 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 1 & 0 & 0 & 1 \end{pmatrix}" />
        <p className="mt-2">
          The extended code has parity check matrix:
        </p>
        <MathBlock math="\bar{\mathbf{H}} = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 1 & 1 & 0 & 1 & 1 & 0 & 0 & 0 \\ 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 1 & 0 & 0 & 1 & 0 \end{pmatrix}" />
        <p className="mt-2">
          The first row enforces the overall parity check. The extended <InlineMath math="[8, 4, 4]" /> code
          can correct 1 error and detect 2 errors.
        </p>
      </Example>

      <h3>Relationships Between Operations</h3>

      <Theorem
        title="Puncturing and Shortening Duality"
        proof={
          <>
            <p>
              Let <InlineMath math="\mathcal{C}" /> be an <InlineMath math="[n, k]" /> code with generator
              matrix <InlineMath math="\mathbf{G}" /> and parity check matrix <InlineMath math="\mathbf{H}" />.
            </p>
            <p className="mt-2">
              Puncturing <InlineMath math="\mathcal{C}" /> corresponds to deleting a column of <InlineMath math="\mathbf{G}" />.
              For the dual code <InlineMath math="\mathcal{C}^\perp" /> (generated by <InlineMath math="\mathbf{H}" />),
              this corresponds to deleting a column of <InlineMath math="\mathbf{H}" />.
            </p>
            <p className="mt-2">
              Shortening <InlineMath math="\mathcal{C}^\perp" /> in position <InlineMath math="i" /> selects code words
              with 0 in position <InlineMath math="i" />, then deletes that position. The parity check matrix
              for this shortened code is obtained by deleting column <InlineMath math="i" /> of <InlineMath math="\mathbf{H}" />.
            </p>
            <p className="mt-2">
              This shows that <InlineMath math="(\mathcal{C}^*)^\perp = (\mathcal{C}^\perp)_s" />.
            </p>
          </>
        }
      >
        Let <InlineMath math="\mathcal{C}" /> be a linear code. Then:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The dual of the punctured code equals the shortened dual: <InlineMath math="(\mathcal{C}^*)^\perp = (\mathcal{C}^\perp)_s" /></li>
          <li>The dual of the shortened code equals the punctured dual: <InlineMath math="(\mathcal{C}_s)^\perp = (\mathcal{C}^\perp)^*" /></li>
        </ul>
      </Theorem>

      <Example title="Chain of Operations">
        <p>
          Starting from the <InlineMath math="[8, 4, 4]" /> extended Hamming code:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Puncture once:</strong> Get <InlineMath math="[7, 4, 3]" /> Hamming code
          </li>
          <li>
            <strong>Puncture twice:</strong> Get <InlineMath math="[6, 4, 2]" /> code
          </li>
          <li>
            <strong>Shorten once:</strong> Get <InlineMath math="[7, 3, 4]" /> simplex code
          </li>
          <li>
            <strong>Shorten twice:</strong> Get <InlineMath math="[6, 2, 4]" /> code
          </li>
        </ul>
        <p className="mt-2">
          Note that shortening preserves (or increases) minimum distance but reduces dimension,
          while puncturing preserves dimension but may reduce minimum distance.
        </p>
      </Example>

      <h3>Multiple Operations</h3>

      <Definition title="Puncturing Multiple Positions">
        If <InlineMath math="\mathcal{C}" /> is an <InlineMath math="[n, k, d]" /> code, puncturing in <InlineMath math="s" /> positions
        gives a code of length <InlineMath math="n - s" />. The resulting parameters satisfy:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Dimension: <InlineMath math="k - s \leq k^* \leq k" /></li>
          <li>Minimum distance: <InlineMath math="d - s \leq d^* \leq d" /></li>
        </ul>
      </Definition>

      <Callout type="warning">
        <strong>Design Trade-offs:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Puncturing</strong> trades length for potentially reduced minimum distance</li>
          <li><strong>Shortening</strong> trades dimension (information rate) for preserved/increased minimum distance</li>
          <li><strong>Extending</strong> trades increased length for improved minimum distance (when d is odd)</li>
        </ul>
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The three fundamental operations for constructing new codes are:
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Puncturing:</strong> Delete a coordinate position from all code words.
            <InlineMath math="[n, k, d] \to [n-1, k^*, d^*]" /> with <InlineMath math="k^* \geq k - 1" /> and <InlineMath math="d^* \geq d - 1" />
          </li>
          <li>
            <strong>Shortening:</strong> Restrict to code words with 0 in a position, then delete it.
            <InlineMath math="[n, k, d] \to [n-1, k_s, d_s]" /> with <InlineMath math="k_s \geq k - 1" /> and <InlineMath math="d_s \geq d" />
          </li>
          <li>
            <strong>Extending:</strong> Add an overall parity check.
            <InlineMath math="[n, k, d] \to [n+1, k, \bar{d}]" /> with <InlineMath math="\bar{d} \in \{d, d+1\}" />
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
