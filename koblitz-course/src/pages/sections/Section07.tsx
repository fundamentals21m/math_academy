import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Enciphering Matrices</h2>

      <p>
        The Hill cipher uses matrix multiplication over <MathBlock math="\mathbb{Z}_{26}" inline />{' '}
        for encryption. This provides diffusion - small changes in plaintext affect the entire
        ciphertext block.
      </p>

      <h3>The Hill Cipher</h3>

      <Definition title="Hill Cipher">
        Choose an <MathBlock math="m \times m" inline /> invertible matrix <em>K</em> over{' '}
        <MathBlock math="\mathbb{Z}_{26}" inline /> as the key. To encrypt, group plaintext into
        vectors of length <em>m</em> and compute:
        <MathBlock math="C = KP \pmod{26}" />
        To decrypt: <MathBlock math="P = K^{-1}C \pmod{26}" inline />
      </Definition>

      <p>
        The matrix <em>K</em> must be invertible modulo 26, meaning{' '}
        <MathBlock math="\gcd(\det(K), 26) = 1" inline />.
      </p>

      <Example title="2×2 Hill Cipher">
        <p>Encrypt "OK" using the key matrix:</p>
        <MathBlock math="K = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}" />
        <p className="mt-2"><strong>Solution:</strong> O = 14, K = 10</p>
        <MathBlock math="C = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 14 \\ 10 \end{pmatrix} = \begin{pmatrix} 92 \\ 34 \end{pmatrix} \equiv \begin{pmatrix} 14 \\ 8 \end{pmatrix} \pmod{26}" />
        <p>Ciphertext: <strong>OI</strong> (14 = O, 8 = I)</p>
      </Example>

      <h3>Matrix Inversion mod 26</h3>

      <Theorem
        title="Matrix Inverse mod n"
        proof={
          <>
            <p>
              We verify that the proposed inverse satisfies <MathBlock math="K K^{-1} = I \pmod{n}" inline />.
              Let <MathBlock math="K = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" inline /> with
              <MathBlock math="\det K = ad - bc" inline /> and <MathBlock math="\gcd(\det K, n) = 1" inline />.
            </p>
            <p className="mt-2">
              Define the <strong>adjugate matrix</strong>:
            </p>
            <MathBlock math="\text{adj}(K) = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
            <p className="mt-2">
              Computing <MathBlock math="K \cdot \text{adj}(K)" inline />:
            </p>
            <MathBlock math="K \cdot \text{adj}(K) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & -ab + ba \\ cd - dc & -bc + ad \end{pmatrix}" />
            <MathBlock math="= \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = (ad - bc) \cdot I = (\det K) \cdot I" />
            <p className="mt-2">
              Since <MathBlock math="\gcd(\det K, n) = 1" inline />, the determinant has a multiplicative inverse
              <MathBlock math="(\det K)^{-1}" inline /> modulo <MathBlock math="n" inline />. Multiplying both sides:
            </p>
            <MathBlock math="K \cdot \left[(\det K)^{-1} \cdot \text{adj}(K)\right] = (\det K)^{-1} \cdot (\det K) \cdot I = I \pmod{n}" />
            <p className="mt-2">
              Therefore <MathBlock math="K^{-1} = (\det K)^{-1} \cdot \text{adj}(K) \pmod{n}" inline />.
            </p>
          </>
        }
      >
        For a <MathBlock math="2 \times 2" inline /> matrix <MathBlock math="K = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" inline />,
        the inverse modulo 26 is:
        <MathBlock math="K^{-1} = (\det K)^{-1} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \pmod{26}" />
        where <MathBlock math="(\det K)^{-1}" inline /> is the modular inverse of <MathBlock math="ad - bc" inline /> mod 26.
      </Theorem>

      <Example title="Computing K⁻¹">
        <p>Find the inverse of <MathBlock math="K = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}" inline /> mod 26.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li><MathBlock math="\det K = 3 \cdot 2 - 5 \cdot 1 = 1" inline /></li>
          <li>Since <MathBlock math="1^{-1} = 1 \pmod{26}" inline /></li>
          <li><MathBlock math="K^{-1} = 1 \cdot \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & 21 \\ 25 & 3 \end{pmatrix} \pmod{26}" inline /></li>
        </ol>
      </Example>

      <h3>Security of Hill Cipher</h3>

      <p>
        The Hill cipher is vulnerable to <strong>known-plaintext attacks</strong>. If an attacker
        knows <em>m</em> plaintext-ciphertext pairs, they can solve for the key matrix.
      </p>

      <Example title="Known-Plaintext Attack">
        <p>Suppose we know that "FR" encrypts to "PQ" and "ID" encrypts to "FZ" using a 2×2 Hill cipher.</p>
        <p className="mt-2"><strong>Attack:</strong> Form matrices from known pairs:</p>
        <MathBlock math="P = \begin{pmatrix} 5 & 8 \\ 17 & 3 \end{pmatrix}, \quad C = \begin{pmatrix} 15 & 5 \\ 16 & 25 \end{pmatrix}" />
        <p>Since <MathBlock math="C = KP" inline />, we have <MathBlock math="K = CP^{-1} \pmod{26}" inline />.</p>
      </Example>

      <Callout type="warning">
        <strong>Weakness:</strong> With just 2 plaintext-ciphertext pairs for a 2×2 Hill cipher
        (or <em>m</em> pairs for an <MathBlock math="m \times m" inline /> cipher), the key can be recovered.
      </Callout>

      <h3>Permutation Matrices</h3>

      <Definition title="Permutation Cipher">
        A <strong>permutation cipher</strong> (or transposition cipher) rearranges the positions
        of plaintext characters according to a fixed permutation. This can be represented as
        multiplication by a permutation matrix.
      </Definition>

      <Example title="Columnar Transposition">
        <p>Encrypt "MATHEMATICS" with key "CAB" (indicating column order 3, 1, 2).</p>
        <p className="mt-2"><strong>Solution:</strong> Arrange in columns under key:</p>
        <div className="font-mono text-sm mt-2">
          <p>C A B</p>
          <p>─────</p>
          <p>M A T</p>
          <p>H E M</p>
          <p>A T I</p>
          <p>C S X (pad with X)</p>
        </div>
        <p className="mt-2">Read columns in key order (A=1, B=2, C=3):</p>
        <p className="mt-1">Column A: AETS, Column B: TMIX, Column C: MHAC</p>
        <p>Ciphertext: <strong>AETSTMIXMHAC</strong></p>
      </Example>

      <h3>Product Ciphers</h3>

      <Definition title="Product Cipher">
        A <strong>product cipher</strong> combines multiple encryption steps. For example:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Substitution</strong> followed by <strong>permutation</strong></li>
          <li>Multiple rounds of substitution-permutation</li>
        </ol>
        Modern block ciphers (DES, AES) are product ciphers with many rounds.
      </Definition>

      <h3>Linear Algebra in Cryptanalysis</h3>

      <p>
        Linear cryptanalysis exploits linear relationships between plaintext, ciphertext, and key bits.
        For any cipher using linear operations (like Hill), the key can be recovered efficiently.
      </p>

      <Theorem
        title="Linear Cryptanalysis"
        proof={
          <>
            <p>
              Suppose the cipher has the form <MathBlock math="C = KP + b" inline /> where <MathBlock math="K" inline /> is
              an <MathBlock math="m \times m" inline /> key matrix and <MathBlock math="b" inline /> is a translation
              vector over a ring <MathBlock math="R" inline /> (e.g., <MathBlock math="\mathbb{Z}_n" inline />).
            </p>
            <p className="mt-2">
              Given <MathBlock math="m" inline /> linearly independent plaintext-ciphertext pairs
              <MathBlock math="(P_1, C_1), (P_2, C_2), \ldots, (P_m, C_m)" inline />, we form the matrices:
            </p>
            <MathBlock math="\mathbf{P} = \begin{pmatrix} P_1 & P_2 & \cdots & P_m \end{pmatrix}, \quad \mathbf{C} = \begin{pmatrix} C_1 & C_2 & \cdots & C_m \end{pmatrix}" />
            <p className="mt-2">
              From the encryption equation applied to each pair:
            </p>
            <MathBlock math="\mathbf{C} = K\mathbf{P} + \begin{pmatrix} b & b & \cdots & b \end{pmatrix}" />
            <p className="mt-2">
              <strong>Case 1:</strong> If we know <MathBlock math="b = 0" inline /> (or can determine it):
            </p>
            <MathBlock math="K = \mathbf{C}\mathbf{P}^{-1}" />
            <p className="mt-2">
              provided <MathBlock math="\mathbf{P}" inline /> is invertible over <MathBlock math="R" inline />.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> If <MathBlock math="b" inline /> is unknown, use <MathBlock math="m+1" inline /> pairs.
              Taking differences eliminates <MathBlock math="b" inline />:
            </p>
            <MathBlock math="C_i - C_1 = K(P_i - P_1)" />
            <p className="mt-2">
              This yields <MathBlock math="m" inline /> equations linear in the entries of <MathBlock math="K" inline />,
              which can be solved if the <MathBlock math="P_i - P_1" inline /> span an <MathBlock math="m" inline />-dimensional
              space. The complexity is <MathBlock math="O(m^3)" inline /> for Gaussian elimination, which is polynomial time.
            </p>
          </>
        }
      >
        If a cipher can be expressed as <MathBlock math="C = KP + b" inline /> over some ring,
        then given <em>sufficient plaintext-ciphertext pairs</em>, the key can be found by solving
        a system of linear equations.
      </Theorem>

      <Callout type="info">
        <strong>Design Principle:</strong> Modern ciphers use <strong>nonlinear</strong> operations
        (S-boxes) combined with linear mixing (permutations) to resist both linear and differential
        cryptanalysis.
      </Callout>

      <h3>Applications and Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Matrix Methods in Modern Crypto</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>AES MixColumns:</strong> Matrix multiplication over <MathBlock math="\mathbb{F}_{2^8}" inline /></li>
          <li><strong>Error-correcting codes:</strong> Generator and parity-check matrices</li>
          <li><strong>Lattice cryptography:</strong> Matrix operations over <MathBlock math="\mathbb{Z}" inline /></li>
          <li><strong>Multivariate crypto:</strong> Systems of polynomial equations</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Takeaway:</strong> While the basic Hill cipher is insecure, the concept of using
        matrices for diffusion remains fundamental to modern cryptography. The key insight is that
        linear operations alone are insufficient - nonlinearity is essential for security.
      </Callout>
    </LessonLayout>
  );
}
