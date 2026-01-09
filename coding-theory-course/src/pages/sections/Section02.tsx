import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>1.3 Generator and Parity Check Matrices</h2>

      <p>
        We now explore the relationship between generator matrices and parity check matrices,
        which provides powerful tools for both encoding and decoding in matrix codes.
      </p>

      <h3>From Generator Matrix to Parity Check Equations</h3>

      <Example title="Deriving Parity Check Equations">
        <p>Consider the matrix code given by the generator matrix:</p>
        <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} 1 & 0 & 0 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & 1 \\\\ 0 & 0 & 1 & 1 & 1 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`a_1a_2a_3a_4a_5a_6`}</InlineMath> is the code word corresponding to
          message word <InlineMath>{`a_1a_2a_3`}</InlineMath>, then:
        </p>
        <MathBlock>{`(a_1 \\; a_2 \\; a_3 \\; a_4 \\; a_5 \\; a_6) = (a_1 \\; a_2 \\; a_3)\\mathbf{G}`}</MathBlock>
        <p className="mt-2">This gives us:</p>
        <MathBlock>{`a_4 = a_1 + a_3, \\quad a_5 = a_1 + a_2 + a_3, \\quad a_6 = a_2 + a_3`}</MathBlock>
        <p className="mt-2">Rewriting these as <strong>parity check equations</strong>:</p>
        <MathBlock>{`a_1 + a_3 + a_4 = 0`}</MathBlock>
        <MathBlock>{`a_1 + a_2 + a_3 + a_5 = 0`}</MathBlock>
        <MathBlock>{`a_2 + a_3 + a_6 = 0`}</MathBlock>
      </Example>

      <h3>The Parity Check Matrix</h3>

      <p>The parity check equations from the previous example can be written in matrix form as:</p>
      <MathBlock>{`\\begin{pmatrix} 1 & 0 & 1 & 1 & 0 & 0 \\\\ 1 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & 1 & 1 & 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\\\ a_4 \\\\ a_5 \\\\ a_6 \\end{pmatrix} = \\mathbf{0}`}</MathBlock>

      <Definition title="Parity Check Matrix">
        <p>
          If <InlineMath>{`m < n`}</InlineMath>, then any <InlineMath>{`(n-m) \\times n`}</InlineMath> matrix <InlineMath>{`\\mathbf{H}`}</InlineMath> whose
          last <InlineMath>{`n - m`}</InlineMath> columns form the identity matrix <InlineMath>{`\\mathbf{I}_{n-m}`}</InlineMath> is
          called a <strong>parity check matrix</strong>.
        </p>
      </Definition>

      <h3>Standard Form Matrices</h3>

      <Callout type="info">
        <strong>Standard Form:</strong> A generator matrix in <strong>standard form</strong> has the structure:
        <MathBlock>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</MathBlock>
        where <InlineMath>{`\\mathbf{I}_m`}</InlineMath> is the <InlineMath>{`m \\times m`}</InlineMath> identity
        matrix and <InlineMath>{`\\mathbf{A}`}</InlineMath> is an <InlineMath>{`m \\times (n-m)`}</InlineMath> matrix.
        <p className="mt-2">The corresponding parity check matrix is:</p>
        <MathBlock>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</MathBlock>
        where <InlineMath>{`\\mathbf{A}^t`}</InlineMath> denotes the transpose of <InlineMath>{`\\mathbf{A}`}</InlineMath>.
      </Callout>

      <Example title="Generator and Parity Check Matrix Relationship">
        <p>For the generator matrix:</p>
        <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} 1 & 0 & 0 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & 1 \\\\ 0 & 0 & 1 & 1 & 1 & 1 \\end{pmatrix} = (\\mathbf{I}_3 \\;|\\; \\mathbf{A})`}</MathBlock>
        <p className="mt-2">where:</p>
        <MathBlock>{`\\mathbf{A} = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The parity check matrix is:</p>
        <MathBlock>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_3) = \\begin{pmatrix} 1 & 0 & 1 & 1 & 0 & 0 \\\\ 1 & 1 & 1 & 0 & 1 & 0 \\\\ 0 & 1 & 1 & 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Example>

      <h3>The Syndrome</h3>

      <Definition title="Syndrome">
        <p>
          For a received word <InlineMath>{`\\mathbf{r} \\in \\mathbb{B}^n`}</InlineMath>, the <strong>syndrome</strong> is defined as:
        </p>
        <MathBlock>{`\\mathbf{s} = \\mathbf{H}\\mathbf{r}^t`}</MathBlock>
        <p className="mt-2">
          The syndrome of a code word is always the zero vector. If the syndrome is non-zero,
          an error has been detected.
        </p>
      </Definition>

      <h3>Syndrome Decoding Procedure</h3>

      <Callout type="info">
        <strong>Syndrome (Parity Check) Decoding:</strong>
        <p className="mt-2">
          Let <InlineMath>{`\\mathbf{r} = r_1\\cdots r_m r_{m+1}\\cdots r_n`}</InlineMath> be the received
          word and <InlineMath>{`\\mathbf{s} = \\mathbf{H}\\mathbf{r}^t`}</InlineMath> be its syndrome.
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            If <InlineMath>{`\\mathbf{s} = \\mathbf{0}`}</InlineMath>, assume <InlineMath>{`\\mathbf{r}`}</InlineMath> is
            the transmitted code word. The original message is <InlineMath>{`r_1\\cdots r_m`}</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`\\mathbf{s}`}</InlineMath> matches the <InlineMath>i</InlineMath>-th column
            of <InlineMath>{`\\mathbf{H}`}</InlineMath>, assume an error occurred in position <InlineMath>i</InlineMath>.
            Flip the <InlineMath>i</InlineMath>-th bit to get the corrected code word.
          </li>
          <li>
            If <InlineMath>{`\\mathbf{s}`}</InlineMath> is neither zero nor a column
            of <InlineMath>{`\\mathbf{H}`}</InlineMath>, at least two errors occurred.
          </li>
        </ol>
      </Callout>

      <Theorem
        title="Single Error Correction Criterion"
        proof={
          <>
            <p>
              <strong>(⇒)</strong> Suppose the <InlineMath>i</InlineMath>-th column
              of <InlineMath>{`\\mathbf{H}`}</InlineMath> is zero. Let <InlineMath>{`\\mathbf{e}`}</InlineMath> be
              the error word with 1 in position <InlineMath>i</InlineMath> and 0 elsewhere.
            </p>
            <p className="mt-2">
              For any code word <InlineMath>{`\\mathbf{b}`}</InlineMath>:
            </p>
            <MathBlock>{`\\mathbf{H}(\\mathbf{b} + \\mathbf{e})^t = \\mathbf{H}\\mathbf{b}^t + \\mathbf{H}\\mathbf{e}^t = 0 + 0 = 0`}</MathBlock>
            <p className="mt-2">
              So <InlineMath>{`\\mathbf{b} + \\mathbf{e}`}</InlineMath> is decoded as a code word,
              and the error goes undetected.
            </p>
            <p className="mt-2">
              If columns <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath> are identical,
              let <InlineMath>{`\\mathbf{e}^i`}</InlineMath> and <InlineMath>{`\\mathbf{e}^j`}</InlineMath> be
              error words with 1 in positions <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath> respectively.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`\\mathbf{H}(\\mathbf{b} + \\mathbf{e}^i)^t = \\mathbf{H}(\\mathbf{b} + \\mathbf{e}^j)^t`}</InlineMath>,
              so we cannot distinguish between errors in positions <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> If columns are non-zero and distinct, then for any single
              error <InlineMath>{`\\mathbf{e}`}</InlineMath> in position <InlineMath>i</InlineMath>:
            </p>
            <MathBlock>{`\\mathbf{H}(\\mathbf{b} + \\mathbf{e})^t = \\mathbf{H}\\mathbf{e}^t = i\\text{-th column of } \\mathbf{H}`}</MathBlock>
            <p className="mt-2">
              This uniquely identifies the error position, allowing correction.
            </p>
          </>
        }
      >
        <p>
          An <InlineMath>{`(n-m) \\times n`}</InlineMath> parity check matrix <InlineMath>{`\\mathbf{H}`}</InlineMath> will
          decode all single errors correctly if and only if the columns of <InlineMath>{`\\mathbf{H}`}</InlineMath> are
          non-zero and distinct.
        </p>
      </Theorem>

      <Theorem
        title="Correspondence Between Generator and Parity Check Matrices"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\mathbf{a} \\in \\mathbb{B}^m`}</InlineMath> and <InlineMath>{`\\mathbf{b}`}</InlineMath> be
              the code word in the code generated by <InlineMath>{`\\mathbf{G}`}</InlineMath>.
              Then <InlineMath>{`\\mathbf{b} = \\mathbf{a}\\mathbf{G}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since the first <InlineMath>m</InlineMath> columns of <InlineMath>{`\\mathbf{G}`}</InlineMath> form <InlineMath>{`\\mathbf{I}_m`}</InlineMath>,
              we have <InlineMath>{`\\mathbf{b} = (\\mathbf{a} \\;|\\; \\bar{\\mathbf{b}})`}</InlineMath> where <InlineMath>{`\\bar{\\mathbf{b}} = \\mathbf{a}\\mathbf{A}`}</InlineMath>.
            </p>
            <p className="mt-2">Now:</p>
            <MathBlock>{`\\mathbf{H}\\mathbf{b}^t = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})(\\mathbf{a}\\mathbf{G})^t = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})\\mathbf{G}^t\\mathbf{a}^t`}</MathBlock>
            <MathBlock>{`= (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})\\begin{pmatrix} \\mathbf{I}_m \\\\ \\mathbf{A}^t \\end{pmatrix}\\mathbf{a}^t`}</MathBlock>
            <MathBlock>{`= (\\mathbf{A}^t + \\mathbf{A}^t)\\mathbf{a}^t = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">
              Thus every code word satisfies <InlineMath>{`\\mathbf{H}\\mathbf{b}^t = \\mathbf{0}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Uniqueness: The structure <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath> uniquely
              determines <InlineMath>{`\\mathbf{A}`}</InlineMath>, hence <InlineMath>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath>.
            </p>
          </>
        }
      >
        <ol className="list-decimal list-inside space-y-2">
          <li>
            If <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath> is
            an <InlineMath>{`m \\times n`}</InlineMath> generator matrix, then <InlineMath>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath> is
            the unique parity check matrix for the same code.
          </li>
          <li>
            If <InlineMath>{`\\mathbf{H} = (\\mathbf{B} \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath> is
            an <InlineMath>{`(n-m) \\times n`}</InlineMath> parity check matrix, then <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{B}^t)`}</InlineMath> is
            the unique generator matrix for the same code.
          </li>
        </ol>
      </Theorem>

      <h3>Conditions for Single Error Correction</h3>

      <Theorem
        title="Generator Matrix Single Error Correction Criterion"
        proof={
          <>
            <p>
              The parity check matrix of the code with generator <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath> is <InlineMath>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{`\\mathbf{H}`}</InlineMath> decodes all single errors correctly if and only
              if all columns of <InlineMath>{`\\mathbf{H}`}</InlineMath> are non-zero and distinct.
            </p>
            <p className="mt-2">
              The columns of <InlineMath>{`\\mathbf{A}^t`}</InlineMath> are the rows of <InlineMath>{`\\mathbf{A}`}</InlineMath>.
              The last <InlineMath>{`n - m`}</InlineMath> columns of <InlineMath>{`\\mathbf{H}`}</InlineMath> are
              automatically non-zero and distinct (they form <InlineMath>{`\\mathbf{I}_{n-m}`}</InlineMath>).
            </p>
            <p className="mt-2">
              For the first <InlineMath>m</InlineMath> columns (rows of <InlineMath>{`\\mathbf{A}`}</InlineMath>) to
              be non-zero and distinct from each other and from columns of <InlineMath>{`\\mathbf{I}_{n-m}`}</InlineMath>,
              each row of <InlineMath>{`\\mathbf{A}`}</InlineMath> must have weight at least 2 and all rows must be distinct.
            </p>
          </>
        }
      >
        <p>
          An <InlineMath>(m, n)</InlineMath>-code with generator matrix <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath> will
          decode all single errors correctly if and only if all the rows of <InlineMath>{`\\mathbf{A}`}</InlineMath> are
          distinct and each has weight at least 2.
        </p>
      </Theorem>

      <h3>The Dual Code</h3>

      <Definition title="Dual Code">
        <p>
          Let <InlineMath>C</InlineMath> be the <InlineMath>(m, n)</InlineMath>-code with generator
          matrix <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>dual code</strong> <InlineMath>{`C^\\perp`}</InlineMath> is the <InlineMath>(n-m, n)</InlineMath>-code
          with generator matrix <InlineMath>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>{`C^\\perp`}</InlineMath> is the code with parity check matrix <InlineMath>{`\\mathbf{G}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="A Code and Its Dual">
        <p>Consider the code with generator matrix:</p>
        <MathBlock>{`\\mathbf{G} = \\begin{pmatrix} 1 & 0 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The code words are:</p>
        <div className="bg-dark-800/50 p-3 rounded-lg font-mono text-sm mt-2">
          00000, 10111, 01101, 11010
        </div>
        <p className="mt-2">
          The minimum distance is 3, so this code can detect 2 errors and correct 1 error.
        </p>
        <p className="mt-4">The dual code has generator matrix:</p>
        <MathBlock>{`\\mathbf{G}_1 = (\\mathbf{I}_3 \\;|\\; \\mathbf{A}^t) = \\begin{pmatrix} 1 & 0 & 0 & 1 & 1 \\\\ 0 & 1 & 0 & 1 & 0 \\\\ 0 & 0 & 1 & 0 & 1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">The dual code words are:</p>
        <div className="bg-dark-800/50 p-3 rounded-lg font-mono text-sm mt-2">
          00000, 00101, 01010, 10011, 01111, 10110, 11001, 11100
        </div>
        <p className="mt-2 text-amber-400">
          The minimum distance of the dual is only 2, so it can only detect single errors.
          The dual of a single-error-correcting code need not be single-error-correcting!
        </p>
      </Example>

      <Theorem
        title="Same Syndrome Implies Same Coset"
        proof={
          <>
            <p>
              <InlineMath>{`\\mathbf{x}, \\mathbf{y}`}</InlineMath> are in the same coset
              if and only if <InlineMath>{`\\mathbf{y} = \\mathbf{x} + \\mathbf{c}`}</InlineMath> for
              some code word <InlineMath>{`\\mathbf{c} \\in C`}</InlineMath>.
            </p>
            <p className="mt-2">
              This is equivalent to <InlineMath>{`\\mathbf{x} + \\mathbf{y} = \\mathbf{c} \\in C`}</InlineMath>.
            </p>
            <p className="mt-2">Now:</p>
            <MathBlock>{`\\mathbf{x} + \\mathbf{y} \\in C \\iff \\mathbf{H}(\\mathbf{x} + \\mathbf{y})^t = 0`}</MathBlock>
            <MathBlock>{`\\iff \\mathbf{H}\\mathbf{x}^t + \\mathbf{H}\\mathbf{y}^t = 0`}</MathBlock>
            <MathBlock>{`\\iff \\mathbf{H}\\mathbf{x}^t = \\mathbf{H}\\mathbf{y}^t`}</MathBlock>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\\mathbf{H}`}</InlineMath> be a parity check matrix and <InlineMath>C</InlineMath> be
          the code defined by <InlineMath>{`\\mathbf{H}`}</InlineMath>. Words <InlineMath>{`\\mathbf{x}, \\mathbf{y} \\in \\mathbb{B}^n`}</InlineMath> are
          in the same coset of <InlineMath>C</InlineMath> if and only if they have the same syndrome.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Section Summary:</strong> Generator matrices in standard form <InlineMath>{`\\mathbf{G} = (\\mathbf{I}_m \\;|\\; \\mathbf{A})`}</InlineMath> have
        corresponding parity check matrices <InlineMath>{`\\mathbf{H} = (\\mathbf{A}^t \\;|\\; \\mathbf{I}_{n-m})`}</InlineMath>.
        The syndrome <InlineMath>{`\\mathbf{s} = \\mathbf{H}\\mathbf{r}^t`}</InlineMath> of a received
        word enables error detection and correction. For single-error correction, the columns
        of <InlineMath>{`\\mathbf{H}`}</InlineMath> must be non-zero and distinct. The dual code provides
        another perspective on the code structure.
      </Callout>
    </LessonLayout>
  );
}
