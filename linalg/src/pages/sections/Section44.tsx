import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      {/* Introduction */}
      <p>
        Linear algebra provides powerful tools for <strong>cryptography</strong>. Matrix operations
        over finite fields enable encryption, and coding theory uses linear algebra for error correction.
      </p>

      <h2>Modular Arithmetic</h2>

      <Definition title="Finite Fields" className="my-6">
        <p>
          In cryptography, we work modulo a prime <InlineMath>p</InlineMath>:
        </p>
        <MathBlock>
          {`\\mathbb{Z}_p = \\{0, 1, 2, \\ldots, p-1\\}`}
        </MathBlock>
        <p className="mt-2">
          All operations are performed mod <InlineMath>p</InlineMath>. Every nonzero element has an inverse.
        </p>
      </Definition>

      <Example title="Arithmetic in Z₇" className="my-6">
        <p>In <InlineMath>{`\\mathbb{Z}_7`}</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{`3 + 5 = 8 \\equiv 1 \\pmod{7}`}</InlineMath></li>
          <li><InlineMath>{`3 \\times 5 = 15 \\equiv 1 \\pmod{7}`}</InlineMath></li>
          <li><InlineMath>{`3^{-1} = 5`}</InlineMath> (since <InlineMath>3 \times 5 = 1</InlineMath>)</li>
        </ul>
      </Example>

      <h2>Hill Cipher</h2>

      <Definition title="Hill Cipher" className="my-6">
        <p>
          Encrypt using an invertible matrix <InlineMath>K</InlineMath> over <InlineMath>{`\\mathbb{Z}_{26}`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\mathbf{c} = K\\mathbf{m} \\pmod{26}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\mathbf{m}`}</InlineMath> = message (letters as numbers 0-25)<br />
          <InlineMath>{`\\mathbf{c}`}</InlineMath> = ciphertext<br />
          Decrypt: <InlineMath>{`\\mathbf{m} = K^{-1}\\mathbf{c}`}</InlineMath>
        </p>
      </Definition>

      <Example title="2×2 Hill Cipher" className="my-6">
        <p>Key matrix (mod 26):</p>
        <MathBlock>
          {`K = \\begin{bmatrix} 3 & 2 \\\\ 5 & 7 \\end{bmatrix}, \\quad K^{-1} = \\begin{bmatrix} 7 & 24 \\\\ 15 & 17 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Encrypt "HI" = (7, 8): <InlineMath>K(7, 8)^T = (37, 91)^T \equiv (11, 13)^T</InlineMath> = "LN"
        </p>
      </Example>

      <h2>Error-Correcting Codes</h2>

      <Definition title="Linear Code" className="my-6">
        <p>
          A <strong>linear code</strong> is a subspace of <InlineMath>{`\\mathbb{Z}_2^n`}</InlineMath>.
          Encode message <InlineMath>{`\\mathbf{m}`}</InlineMath> using generator matrix <InlineMath>G</InlineMath>:
        </p>
        <MathBlock>
          {`\\mathbf{c} = G\\mathbf{m}`}
        </MathBlock>
        <p className="mt-2">
          The code adds redundancy to detect and correct errors.
        </p>
      </Definition>

      <Example title="Hamming (7,4) Code" className="my-6">
        <p>
          Encodes 4 data bits as 7 bits (3 parity bits):
        </p>
        <MathBlock>
          {`G = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 1 & 1 & 0 & 1 \\\\ 1 & 0 & 1 & 1 \\\\ 0 & 1 & 1 & 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Can correct any single-bit error!
        </p>
      </Example>

      <Theorem
        title="Parity Check Matrix"
        className="my-6"
        proof={
          <>
            <p><strong>Definition:</strong> The parity check matrix <InlineMath>H</InlineMath> satisfies <InlineMath>HG = 0</InlineMath> where <InlineMath>G</InlineMath> is the generator matrix.</p>
            <p className="mt-2"><strong>Valid codewords:</strong> If <InlineMath>{`\\mathbf{c} = G\\mathbf{m}`}</InlineMath> is a valid codeword, then <InlineMath>{`H\\mathbf{c} = HG\\mathbf{m} = \\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Error detection:</strong> Received word <InlineMath>{`\\mathbf{r} = \\mathbf{c} + \\mathbf{e}`}</InlineMath> where <InlineMath>{`\\mathbf{e}`}</InlineMath> is the error pattern.</p>
            <MathBlock>{`H\\mathbf{r} = H(\\mathbf{c} + \\mathbf{e}) = H\\mathbf{c} + H\\mathbf{e} = \\mathbf{0} + H\\mathbf{e} = H\\mathbf{e}`}</MathBlock>
            <p className="mt-2">The <strong>syndrome</strong> <InlineMath>{`H\\mathbf{r}`}</InlineMath> depends only on the error pattern, not the message. If <InlineMath>{`\\mathbf{e}`}</InlineMath> is a single bit error in position <InlineMath>{`j`}</InlineMath>, then <InlineMath>{`H\\mathbf{e}`}</InlineMath> equals column <InlineMath>{`j`}</InlineMath> of <InlineMath>{`H`}</InlineMath>, identifying the error location.</p>
          </>
        }
      >
        <p>
          The <strong>parity check matrix</strong> <InlineMath>H</InlineMath> detects errors:
        </p>
        <MathBlock>
          {`H\\mathbf{c} = \\mathbf{0} \\quad \\text{if no error}`}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>{`H\\mathbf{r} \\neq \\mathbf{0}`}</InlineMath>, the syndrome tells us which bit is wrong.
        </p>
      </Theorem>

      <h2>Modern Cryptography</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Linear Algebra in Modern Crypto</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>RSA:</strong> Matrix operations over <InlineMath>{`\\mathbb{Z}_n`}</InlineMath></li>
          <li><strong>Elliptic curves:</strong> Points form a group, arithmetic uses linear algebra</li>
          <li><strong>Lattice cryptography:</strong> Hard lattice problems (LWE, SIS)</li>
          <li><strong>Post-quantum:</strong> Code-based and lattice-based systems</li>
        </ul>
      </div>

      <h2>Lattice Problems</h2>

      <Definition title="Learning With Errors (LWE)" className="my-6">
        <p>
          Given <InlineMath>{`A\\mathbf{s} + \\mathbf{e} \\approx \\mathbf{b}`}</InlineMath> where <InlineMath>{`\\mathbf{e}`}</InlineMath> is small noise,
          find <InlineMath>{`\\mathbf{s}`}</InlineMath>.
        </p>
        <p className="mt-2">
          This is believed to be hard even for quantum computers, forming the basis of
          <strong> post-quantum cryptography</strong>.
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Cryptography uses linear algebra over finite fields <InlineMath>{`\\mathbb{Z}_p`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Hill cipher: <InlineMath>{`\\mathbf{c} = K\\mathbf{m}`}</InlineMath>, decrypt with <InlineMath>{`K^{-1}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Linear codes: subspaces that add redundancy for error correction.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Parity check matrix <InlineMath>H</InlineMath>: <InlineMath>{`H\\mathbf{c} = 0`}</InlineMath> detects errors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Lattice-based crypto (LWE) is quantum-resistant.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
