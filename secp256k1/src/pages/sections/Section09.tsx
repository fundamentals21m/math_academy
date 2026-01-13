import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Recap and Future</h2>

      <p className="mb-4">
        We've journeyed from basic geometry to the cryptographic foundations of Bitcoin.
        Let's consolidate what we've learned and look at what the future holds.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What We've Learned</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold">1. Elliptic Curves</p>
          <p className="text-sm text-dark-300 mt-1">
            Smooth curves defined by <InlineMath>y^2 = x^3 + ax + b</InlineMath> with a beautiful
            geometric group law: draw a line through two points, find the third intersection,
            reflect.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold">2. Finite Fields</p>
          <p className="text-sm text-dark-300 mt-1">
            Modular arithmetic over prime <InlineMath>p</InlineMath> gives exact, bounded
            computation. The same formulas work—just mod <InlineMath>p</InlineMath>.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold">3. secp256k1 Parameters</p>
          <p className="text-sm text-dark-300 mt-1">
            Six carefully chosen values define Bitcoin's curve. <InlineMath>a = 0</InlineMath>,{' '}
            <InlineMath>b = 7</InlineMath> for simplicity; <InlineMath>h = 1</InlineMath> for
            security; <InlineMath>p</InlineMath> and <InlineMath>n</InlineMath> near{' '}
            <InlineMath>2^{'{256}'}</InlineMath> for 128-bit security.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-rose-400 font-bold">4. Key Generation</p>
          <p className="text-sm text-dark-300 mt-1">
            Private key <InlineMath>d</InlineMath> is random; public key{' '}
            <InlineMath>Q = dG</InlineMath> is computed via double-and-add. The ECDLP makes
            reversing this infeasible.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold">5. Signatures</p>
          <p className="text-sm text-dark-300 mt-1">
            ECDSA: <InlineMath>s = k^{'{-1}'}(z + rd)</InlineMath>. Schnorr:{' '}
            <InlineMath>s = k + ed</InlineMath>. Both prove knowledge of{' '}
            <InlineMath>d</InlineMath> without revealing it.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Assumptions</h3>

      <p className="mb-4">
        All of secp256k1's security rests on one fundamental assumption:
      </p>

      <Definition title="Elliptic Curve Discrete Logarithm Problem (ECDLP)">
        <p>
          Given points <InlineMath>G</InlineMath> and <InlineMath>Q = dG</InlineMath>, finding
          the scalar <InlineMath>d</InlineMath> is computationally infeasible.
        </p>
        <p className="mt-3">
          <strong>Best known attack:</strong> Pollard's rho algorithm requires{' '}
          <InlineMath>\sqrt{'{n}'} \approx 2^{'{128}'}</InlineMath> operations.
        </p>
        <p className="mt-2">
          <strong>Current status:</strong> No significant progress since 1999. The ECDLP has
          withstood decades of cryptanalytic effort.
        </p>
      </Definition>

      <Callout type="info" title="Why We Trust ECDLP">
        <p>
          Unlike RSA (which could fall to advances in factoring), elliptic curve discrete
          logs seem fundamentally harder. There's no known subexponential classical algorithm,
          and the structure resists the techniques that work for finite field DLP.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Quantum Threat</h3>

      <p className="mb-4">
        The elephant in the room: <strong>quantum computers</strong> can break elliptic curve
        cryptography efficiently.
      </p>

      <Definition title="Shor's Algorithm">
        <p>
          A quantum computer running Shor's algorithm can solve the ECDLP in polynomial time:
        </p>
        <MathBlock>
          {`O(n^3) \\text{ quantum operations for } n\\text{-bit curve}`}
        </MathBlock>
        <p className="mt-3">
          For secp256k1, this means ~2<sup>24</sup> operations—trivially feasible for a
          sufficiently large quantum computer.
        </p>
      </Definition>

      <Example title="Timeline Estimates">
        <p>Expert predictions for "cryptographically relevant" quantum computers:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Optimistic:</strong> 10-15 years (2035-2040)</li>
          <li><strong>Median estimate:</strong> 15-25 years (2040-2050)</li>
          <li><strong>Conservative:</strong> 30+ years or never</li>
        </ul>
        <p className="mt-2 text-dark-400">
          The uncertainty is enormous, but the threat is real enough to plan for.
        </p>
      </Example>

      <Callout type="warning" title="Harvest Now, Decrypt Later">
        <p>
          Adversaries could record encrypted communications today and decrypt them when
          quantum computers arrive. For long-term secrets, the quantum threat is already
          relevant.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Post-Quantum Alternatives</h3>

      <p className="mb-4">
        Several approaches could protect against quantum computers:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Approach</th>
              <th className="pb-2">Examples</th>
              <th className="pb-2">Trade-offs</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr>
              <td className="py-2 text-amber-400">Lattice-based</td>
              <td>CRYSTALS-Dilithium, Falcon</td>
              <td>Larger signatures (~2-3KB)</td>
            </tr>
            <tr>
              <td className="py-2 text-emerald-400">Hash-based</td>
              <td>SPHINCS+, XMSS</td>
              <td>Very large signatures (~40KB)</td>
            </tr>
            <tr>
              <td className="py-2 text-purple-400">Code-based</td>
              <td>Classic McEliece</td>
              <td>Huge public keys (~1MB)</td>
            </tr>
            <tr>
              <td className="py-2 text-cyan-400">Isogeny-based</td>
              <td>SQISign (research)</td>
              <td>Compact but slow, some broken</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Bitcoin's path forward is uncertain. Options include:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Soft fork:</strong> Add post-quantum signature scheme alongside ECDSA</li>
        <li><strong>Migration:</strong> Move funds to quantum-resistant addresses</li>
        <li><strong>Hash-based commitment:</strong> Commit to post-quantum pubkey in Taproot</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Alternative Curves</h3>

      <p className="mb-4">
        secp256k1 isn't the only elliptic curve. Others have different trade-offs:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Curve25519 / Ed25519</p>
          <ul className="text-sm space-y-1 text-dark-300">
            <li>• Montgomery/Edwards form</li>
            <li>• Easier constant-time implementation</li>
            <li>• Slightly smaller (255 bits)</li>
            <li>• Used by: Signal, SSH, WireGuard</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-purple-400 font-bold mb-2">BLS12-381</p>
          <ul className="text-sm space-y-1 text-dark-300">
            <li>• Pairing-friendly curve</li>
            <li>• Enables aggregate signatures</li>
            <li>• Larger (381 bits)</li>
            <li>• Used by: Ethereum 2.0, Zcash</li>
          </ul>
        </div>
      </div>

      <Definition title="Why Stick with secp256k1?">
        <p>
          Despite newer alternatives, secp256k1 remains excellent for Bitcoin:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Extensive implementation support and auditing</li>
          <li>No suspicious parameters (unlike NIST curves)</li>
          <li>Proven track record securing trillions in value</li>
          <li>Network effects: everyone already uses it</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Final Thoughts</h3>

      <p className="mb-4">
        secp256k1 is a remarkable piece of mathematics. A simple equation—<InlineMath>y^2 = x^3 + 7</InlineMath>—combined
        with modular arithmetic creates a cryptographic foundation securing hundreds of billions
        of dollars.
      </p>

      <p className="mb-4">
        The key insights:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Geometric elegance:</strong> Point addition is just drawing lines
        </li>
        <li>
          <strong>Computational hardness:</strong> Forward is easy, backward is impossible
        </li>
        <li>
          <strong>Practical efficiency:</strong> 256-bit keys give 128-bit security
        </li>
        <li>
          <strong>Rich ecosystem:</strong> From Bitcoin to Nostr, secp256k1 is everywhere
        </li>
      </ul>

      <Callout type="success" title="You Now Understand Bitcoin's Cryptography">
        <p>
          You've learned the mathematics that makes Bitcoin possible. When you sign a
          transaction, you're performing elliptic curve point multiplication and generating
          a Schnorr or ECDSA signature—all built on the foundations we've covered.
        </p>
        <p className="mt-2">
          The next time someone asks "but what backs Bitcoin?"—you can explain that it's
          backed by the same mathematics that secures the internet, with parameters so
          simple they couldn't hide a backdoor.
        </p>
      </Callout>
    </LessonLayout>
  );
}
