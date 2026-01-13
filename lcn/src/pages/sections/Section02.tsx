import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Pay-to-Contract</h2>

      <p className="mb-4">
        Pay-to-Contract (P2C) is a commitment scheme where the commitment is a group element
        in <InlineMath>\mathbb{'{G}'}</InlineMath>. This scheme is particularly important in Bitcoin
        because it enables Taproot functionality.
      </p>

      <Definition title="Pay-to-Contract Commitment">
        <p>
          Given a generator <InlineMath>G</InlineMath> of <InlineMath>\mathbb{'{G}'}</InlineMath>,
          a hash function <InlineMath>H_{'P2C'}</InlineMath>, a message{' '}
          <InlineMath>{'m \\in \\{0,1\\}^*'}</InlineMath>, and a group element{' '}
          <InlineMath>P \in \mathbb{'{G}'}</InlineMath>, the commitment algorithm is:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-4 font-mono text-sm">
          <p className="text-indigo-400 font-bold mb-2">P2C<sub>Commit</sub>(m; P)</p>
          <p>1: <InlineMath>t \leftarrow H_{'{P2C}'}(P, m)</InlineMath></p>
          <p>2: <strong>return</strong> <InlineMath>P + t \cdot G</InlineMath></p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Feature: Tweaking Secret Keys</h3>

      <p className="mb-4">
        The main feature of Pay-to-Contract is that knowledge of a scalar{' '}
        <InlineMath>{'sk \\in \\mathbb{Z}_p'}</InlineMath> such that{' '}
        <InlineMath>sk \cdot G = P</InlineMath> allows computing the discrete logarithm of the
        commitment:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mt-4 font-mono text-sm mb-6">
        <p className="text-indigo-400 font-bold mb-2">P2C<sub>TweakSeckey</sub>(m, sk)</p>
        <p>1: <InlineMath>t \leftarrow H_{'{P2C}'}(sk \cdot G, m)</InlineMath></p>
        <p>2: <strong>return</strong> <InlineMath>sk + t \mod p</InlineMath></p>
      </div>

      <Callout type="success" title="Taproot Application">
        <p>
          This feature is used in Bitcoin's Taproot to allow creating Schnorr signatures for
          a Pay-to-Contract commitment. The public key can commit to a script (the message{' '}
          <InlineMath>m</InlineMath>), and the owner can still sign with the tweaked secret key.
        </p>
      </Callout>

      <Theorem
        title="Lemma 1: Pay-to-Contract is Binding"
        proof={
          <div className="space-y-3">
            <p>
              1. Let <InlineMath>\mathcal{'{A}'}</InlineMath> be a PPT adversary against the binding
              property of the Pay-to-Contract commitment scheme.
            </p>
            <p>
              2. Let <InlineMath>q</InlineMath> denote the number of queries the adversary makes to
              the random oracle <InlineMath>H_{'{P2C}'}</InlineMath>. Since the adversary is PPT,{' '}
              <InlineMath>{'q \\in \\text{poly}(\\lambda)'}</InlineMath>.
            </p>
            <p>
              3. There are at most <InlineMath>{'q(q-1) \\leq q^2'}</InlineMath> distinct pairs of
              queries to <InlineMath>H_{'{P2C}'}</InlineMath>.
            </p>
            <p>
              4. For any pair of distinct queries <InlineMath>(P, m)</InlineMath> and{' '}
              <InlineMath>(P', m')</InlineMath>, the probability that:
            </p>
            <MathBlock>
              {`P - P' = H_{\\text{P2C}}(P, m)G - H_{\\text{P2C}}(P', m')G`}
            </MathBlock>
            <p>
              is <InlineMath>1/p</InlineMath>. Therefore, the probability that{' '}
              <InlineMath>{'\\text{P2C}_{\\text{Commit}}(m; P) = \\text{P2C}_{\\text{Commit}}(m\'; P\')'}</InlineMath>{' '}
              is <InlineMath>1/p</InlineMath>.
            </p>
            <p>
              5. By the union bound, the probability that the adversary queried distinct{' '}
              <InlineMath>(P, m)</InlineMath> and <InlineMath>(P', m')</InlineMath> such that their
              commitments collide is <InlineMath>{'\\leq q^2/p'}</InlineMath>.
            </p>
            <p>
              6. Hence, <InlineMath>{`\\mu(\\lambda) = q^2/p`}</InlineMath> which is a negligible
              function (since <InlineMath>p</InlineMath> is exponential in <InlineMath>\lambda</InlineMath>{' '}
              and <InlineMath>q</InlineMath> is polynomial).
            </p>
          </div>
        }
      >
        <p>
          Pay-to-Contract is a binding commitment scheme in the random oracle model.
        </p>
      </Theorem>

      <Example title="Taproot Key Commitment">
        <p>
          In Taproot, a user with key pair <InlineMath>(sk, P = sk \cdot G)</InlineMath> can commit
          to a script tree <InlineMath>m</InlineMath>:
        </p>
        <MathBlock>
          {`Q = P + H_{\\text{P2C}}(P, m) \\cdot G`}
        </MathBlock>
        <p className="mt-2">
          The public key <InlineMath>Q</InlineMath> is published on-chain. To spend:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Key path:</strong> Sign with <InlineMath>sk' = sk + H_{'{P2C}'}(P, m)</InlineMath></li>
          <li><strong>Script path:</strong> Reveal <InlineMath>P</InlineMath> and <InlineMath>m</InlineMath>, execute script</li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
