import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Some Simple Cryptosystems</h2>

      <p>
        Before studying modern public-key cryptography, we examine classical cryptosystems.
        While these are insecure by modern standards, they illustrate fundamental cryptographic
        concepts and provide historical context.
      </p>

      <h3>Basic Terminology</h3>

      <Definition title="Cryptographic Terms">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Plaintext:</strong> The original message <em>P</em></li>
          <li><strong>Ciphertext:</strong> The encrypted message <em>C</em></li>
          <li><strong>Encryption:</strong> The function <MathBlock math="E_k: P \to C" inline /></li>
          <li><strong>Decryption:</strong> The function <MathBlock math="D_k: C \to P" inline /></li>
          <li><strong>Key:</strong> Secret information <em>k</em> used in encryption/decryption</li>
        </ul>
      </Definition>

      <h3>Shift Cipher (Caesar Cipher)</h3>

      <Definition title="Shift Cipher">
        Represent letters as numbers: A = 0, B = 1, ..., Z = 25. The <strong>shift cipher</strong>{' '}
        with key <MathBlock math="k \in \{0, 1, \ldots, 25\}" inline /> encrypts letter <em>P</em> as:
        <MathBlock math="C \equiv P + k \pmod{26}" />
        Decryption: <MathBlock math="P \equiv C - k \pmod{26}" inline />
      </Definition>

      <Example title="Caesar Cipher (k = 3)">
        <p>Encrypt "MATH" with key <MathBlock math="k = 3" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <div className="font-mono text-sm mt-2">
          <p>M (12) → 12 + 3 = 15 → P</p>
          <p>A (0) → 0 + 3 = 3 → D</p>
          <p>T (19) → 19 + 3 = 22 → W</p>
          <p>H (7) → 7 + 3 = 10 → K</p>
        </div>
        <p className="mt-2">Ciphertext: <strong>PDWK</strong></p>
      </Example>

      <Callout type="warning">
        <strong>Security:</strong> The shift cipher has only 26 possible keys, making it trivially
        breakable by exhaustive search (brute force attack).
      </Callout>

      <h3>Substitution Cipher</h3>

      <Definition title="Simple Substitution Cipher">
        A <strong>substitution cipher</strong> replaces each letter with another according to a
        fixed permutation <MathBlock math="\sigma" inline /> of the alphabet. The key is the
        permutation itself.
      </Definition>

      <p>
        The number of possible keys is <MathBlock math="26! \approx 4 \times 10^{26}" inline />,
        far too large for brute force. However, substitution ciphers are vulnerable to{' '}
        <strong>frequency analysis</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">English Letter Frequencies</h4>
        <p className="text-dark-300 mb-2">Most common letters: E (12.7%), T (9.1%), A (8.2%), O (7.5%), I (7.0%), N (6.7%)</p>
        <p className="text-dark-300">Least common: Z (0.07%), Q (0.10%), X (0.15%), J (0.15%)</p>
      </div>

      <h3>Affine Cipher</h3>

      <Definition title="Affine Cipher">
        The <strong>affine cipher</strong> uses a linear function with keys{' '}
        <MathBlock math="a, b \in \mathbb{Z}_{26}" inline /> where <MathBlock math="\gcd(a, 26) = 1" inline />:
        <MathBlock math="C \equiv aP + b \pmod{26}" />
        Decryption: <MathBlock math="P \equiv a^{-1}(C - b) \pmod{26}" inline />
      </Definition>

      <p>
        The requirement <MathBlock math="\gcd(a, 26) = 1" inline /> ensures <em>a</em> has an inverse.
        Valid values: <MathBlock math="a \in \{1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\}" inline /> (12 choices).
        Total keys: <MathBlock math="12 \times 26 = 312" inline />.
      </p>

      <Example title="Affine Cipher">
        <p>Encrypt "HI" with <MathBlock math="a = 5, b = 8" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong></p>
        <div className="font-mono text-sm mt-2">
          <p>H (7) → 5·7 + 8 = 43 ≡ 17 → R</p>
          <p>I (8) → 5·8 + 8 = 48 ≡ 22 → W</p>
        </div>
        <p className="mt-2">Ciphertext: <strong>RW</strong></p>
      </Example>

      <h3>Vigenère Cipher</h3>

      <Definition title="Vigenère Cipher">
        The <strong>Vigenère cipher</strong> uses a keyword to create a polyalphabetic substitution.
        If the keyword has length <em>m</em> with letters <MathBlock math="k_0, k_1, \ldots, k_{m-1}" inline />:
        <MathBlock math="C_i \equiv P_i + k_{i \bmod m} \pmod{26}" />
      </Definition>

      <Example title="Vigenère Cipher">
        <p>Encrypt "CRYPTOGRAPHY" with keyword "KEY".</p>
        <p className="mt-2"><strong>Solution:</strong> K=10, E=4, Y=24</p>
        <div className="font-mono text-sm mt-2 overflow-x-auto">
          <p>C R Y P T O G R A P H Y</p>
          <p>K E Y K E Y K E Y K E Y</p>
          <p>────────────────────────</p>
          <p>M V W Z X M Q V Y Z L W</p>
        </div>
      </Example>

      <p>
        The Vigenère cipher was considered unbreakable for centuries but can be attacked using:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Kasiski examination:</strong> Find repeated sequences to determine key length</li>
        <li><strong>Index of coincidence:</strong> Statistical method to find key length</li>
        <li>Once key length <em>m</em> is known, solve <em>m</em> shift ciphers</li>
      </ul>

      <h3>One-Time Pad</h3>

      <Theorem
        title="One-Time Pad (Vernam Cipher)"
        proof={
          <>
            <p>
              We prove perfect secrecy by showing that the ciphertext reveals no information
              about the plaintext. Let <MathBlock math="P" inline /> be the plaintext, <MathBlock math="K" inline /> the
              key (uniformly random over the message space), and <MathBlock math="C = P \oplus K" inline /> the ciphertext
              (where <MathBlock math="\oplus" inline /> denotes XOR or modular addition).
            </p>
            <p className="mt-2">
              <strong>Claim:</strong> For any ciphertext <MathBlock math="c" inline /> and any plaintext <MathBlock math="p" inline />:
            </p>
            <MathBlock math="\Pr[P = p \mid C = c] = \Pr[P = p]" />
            <p className="mt-2">
              <strong>Proof:</strong> For any fixed plaintext <MathBlock math="p" inline /> and ciphertext <MathBlock math="c" inline />,
              there is exactly one key <MathBlock math="k = c \oplus p" inline /> (or <MathBlock math="k = c - p \pmod{n}" inline />)
              that maps <MathBlock math="p" inline /> to <MathBlock math="c" inline />.
            </p>
            <p className="mt-2">
              Since <MathBlock math="K" inline /> is uniformly random over all possible keys:
            </p>
            <MathBlock math="\Pr[C = c \mid P = p] = \Pr[K = c \oplus p] = \frac{1}{|\mathcal{K}|}" />
            <p className="mt-2">
              This probability is the same for all plaintexts <MathBlock math="p" inline />. By Bayes' theorem:
            </p>
            <MathBlock math="\Pr[P = p \mid C = c] = \frac{\Pr[C = c \mid P = p] \cdot \Pr[P = p]}{\Pr[C = c]}" />
            <p className="mt-2">
              Since <MathBlock math="\Pr[C = c \mid P = p] = 1/|\mathcal{K}|" inline /> for all <MathBlock math="p" inline />,
              and <MathBlock math="\Pr[C = c] = \sum_p \Pr[C = c \mid P = p] \cdot \Pr[P = p] = 1/|\mathcal{K}|" inline />,
              we obtain:
            </p>
            <MathBlock math="\Pr[P = p \mid C = c] = \Pr[P = p]" />
            <p className="mt-2">
              Thus observing the ciphertext provides no information about the plaintext, which is the
              definition of <strong>perfect secrecy</strong> (Shannon, 1949).
            </p>
          </>
        }
      >
        If the key is truly random, as long as the plaintext, and used only once, then the
        Vigenère cipher becomes <strong>perfectly secure</strong> (information-theoretically secure).
      </Theorem>

      <Callout type="success">
        <strong>Perfect Secrecy:</strong> The one-time pad is provably unbreakable - the ciphertext
        reveals absolutely no information about the plaintext. However, key distribution and
        management make it impractical for most applications.
      </Callout>

      <h3>Cryptanalysis Summary</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Attack Methods</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Cipher</th>
              <th className="text-left py-2">Key Space</th>
              <th className="text-left py-2">Attack</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Shift</td>
              <td className="py-2">26</td>
              <td className="py-2">Brute force</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Affine</td>
              <td className="py-2">312</td>
              <td className="py-2">Brute force</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Substitution</td>
              <td className="py-2">26!</td>
              <td className="py-2">Frequency analysis</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Vigenère</td>
              <td className="py-2">26^m</td>
              <td className="py-2">Kasiski + frequency</td>
            </tr>
            <tr>
              <td className="py-2">One-time pad</td>
              <td className="py-2">26^n</td>
              <td className="py-2">None (perfect)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LessonLayout>
  );
}
