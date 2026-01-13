import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Security Intuition</h2>

      <p>
        Why is Schnorr secure? Understanding the security properties helps us understand
        what FROST must preserve when distributing the signature computation.
      </p>

      <h3>Soundness: Cannot Forge Without the Secret</h3>

      <Definition title="Soundness">
        <p>
          A signature scheme is <strong>sound</strong> if no one can create a valid signature
          without knowing the secret key.
        </p>
      </Definition>

      <p>
        For Schnorr, forging requires computing <InlineMath>{`z = k + s \\cdot c`}</InlineMath>
        without knowing <InlineMath>{`s`}</InlineMath>.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Why Forging Is Hard</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Given:</strong> Public key <InlineMath>{`Y = [s]G`}</InlineMath>,
            challenge <InlineMath>{`c`}</InlineMath>
          </li>
          <li>
            <strong>Need:</strong> Response <InlineMath>{`z`}</InlineMath> such that
            <InlineMath>{`[z]G = R + [c]Y`}</InlineMath>
          </li>
          <li>
            <strong>Problem:</strong> Without <InlineMath>{`s`}</InlineMath>, cannot compute
            <InlineMath>{`z = k + s \\cdot c`}</InlineMath> for any chosen <InlineMath>{`k`}</InlineMath>
          </li>
          <li>
            <strong>Alternative attack:</strong> Find <InlineMath>{`z`}</InlineMath> directly?
            Requires solving discrete log to find <InlineMath>{`z`}</InlineMath> from
            <InlineMath>{`R + [c]Y`}</InlineMath>
          </li>
        </ul>
      </div>

      <h3>Zero-Knowledge: Signature Reveals Nothing</h3>

      <Definition title="Zero-Knowledge Property">
        <p>
          A signature reveals <strong>no information</strong> about the secret key beyond
          what could be computed from the public key alone.
        </p>
      </Definition>

      <p>Why Schnorr signatures are zero-knowledge:</p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <InlineMath>{`z`}</InlineMath> looks random (due to random <InlineMath>{`k`}</InlineMath>)
        </li>
        <li>
          <InlineMath>{`R`}</InlineMath> looks random (random group element)
        </li>
        <li>
          The challenge <InlineMath>{`c`}</InlineMath> binds them together via hash
        </li>
        <li>
          Multiple signatures don't leak cumulative information
        </li>
      </ul>

      <Example title="Simulation Argument">
        <p>
          To prove zero-knowledge, we show a <strong>simulator</strong> can produce
          valid-looking signatures without knowing <InlineMath>{`s`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Choose random <InlineMath>{`z`}</InlineMath> and <InlineMath>{`c`}</InlineMath></li>
          <li>Compute <InlineMath>{`R = [z]G - [c]Y`}</InlineMath></li>
          <li>Output <InlineMath>{`(R, z)`}</InlineMath></li>
        </ol>
        <p className="mt-3">
          This "signature" passes verification but was created without knowing
          <InlineMath>{`s`}</InlineMath>. In the random oracle model, real signatures
          are indistinguishable from simulated ones.
        </p>
      </Example>

      <h3>The Random Oracle Model</h3>

      <Definition title="Random Oracle">
        <p>
          The hash function <InlineMath>{`H`}</InlineMath> is modeled as a truly random function:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Given any new input, output is uniformly random</li>
          <li>Same input always gives same output</li>
          <li>Cannot predict <InlineMath>{`H(x)`}</InlineMath> without querying <InlineMath>{`x`}</InlineMath></li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>Why Random Oracle Matters:</strong> The random oracle model ensures attackers
        cannot predict <InlineMath>{`H(R \\| Y \\| m)`}</InlineMath> without first committing
        to <InlineMath>{`R`}</InlineMath>. This prevents "working backwards" from a desired
        challenge to forge a signature.
      </Callout>

      <h3>Security Reduction</h3>

      <Theorem title="Schnorr Security">
        <p>
          If the discrete logarithm problem is hard, then Schnorr signatures are
          unforgeable under chosen-message attack (in the random oracle model).
        </p>
        <p className="mt-3 text-sm text-dark-300">
          More precisely: Any efficient forger can be converted into an efficient
          discrete log solver with comparable probability of success.
        </p>
      </Theorem>

      <p>
        The proof uses the <strong>forking lemma</strong>: run the forger twice with
        different random oracle outputs, extract the secret from two forgeries.
        We'll see this technique again in FROST's security proof.
      </p>

      <h3>Implications for FROST</h3>

      <p>FROST must preserve these properties:</p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Soundness</h4>
          <p className="text-sm">
            Cannot forge without <InlineMath>{`t`}</InlineMath> honest participants
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Zero-Knowledge</h4>
          <p className="text-sm">
            Signatures reveal nothing about individual shares
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">No Reconstruction</h4>
          <p className="text-sm">
            Secret <InlineMath>{`s`}</InlineMath> never assembled in one place
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
