import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { ZKProtocolDiagram } from '@/components/visualizations';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Zero Knowledge Arguments of Knowledge</h2>

      <p className="mb-4">
        A zero-knowledge argument of knowledge is a fundamental cryptographic primitive that allows
        a prover to convince a verifier of a statement without revealing any information beyond the
        validity of the statement itself.
      </p>

      <Definition title="Zero-Knowledge Argument of Knowledge">
        <p>
          A zero-knowledge argument of knowledge consists of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            A non-interactive PPT Turing machine <InlineMath>\text{'{Setup}'}</InlineMath> which outputs
            a common random string <InlineMath>\sigma</InlineMath>
          </li>
          <li>
            Two interactive PPT Turing machines: <InlineMath>\mathsf{'{P}'}</InlineMath> (prover) and{' '}
            <InlineMath>\mathsf{'{V}'}</InlineMath> (verifier)
          </li>
        </ul>
        <p className="mt-3">
          The prover and verifier interacting on inputs <InlineMath>x</InlineMath> and{' '}
          <InlineMath>y</InlineMath> will produce a transcript <InlineMath>\pi</InlineMath> and
          output a bit <InlineMath>b</InlineMath> indicating whether the verifier accepts:
        </p>
        <MathBlock>
          {`\\pi \\leftarrow \\langle \\mathsf{P}(x), \\mathsf{V}(y) \\rangle = b`}
        </MathBlock>
        <p className="mt-3">
          For any <InlineMath>\sigma</InlineMath>, a value <InlineMath>w</InlineMath> is a{' '}
          <strong>witness</strong> for a statement <InlineMath>x</InlineMath> if it satisfies
          the relation <InlineMath>(\sigma, x, w) \in \mathcal{'{R}'}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Three Properties</h3>

      <p className="mb-4">
        A zero-knowledge argument of knowledge must satisfy three properties:
      </p>

      <Definition title="Completeness">
        <p>
          Completeness requires that the prover be able to convince the verifier to accept{' '}
          <InlineMath>x</InlineMath> with <strong>overwhelming probability</strong> if{' '}
          <InlineMath>(\sigma, x, w) \in \mathcal{'{R}'}</InlineMath>.
        </p>
        <p className="mt-2">
          In other words: if the prover knows a valid witness, they can always convince
          the verifier.
        </p>
      </Definition>

      <Definition title="Soundness">
        <p>
          Soundness requires that the prover <strong>fail with overwhelming probability</strong>{' '}
          to convince the verifier to accept if{' '}
          <InlineMath>{'(\\sigma, x, w) \\notin \\mathcal{R}'}</InlineMath>.
        </p>
        <p className="mt-2">
          In other words: without a valid witness, even a cheating prover cannot convince
          the verifier (except with negligible probability).
        </p>
      </Definition>

      <Definition title="Zero-Knowledge">
        <p>
          The zero-knowledge property requires that the verifier{' '}
          <strong>learns nothing about the witness</strong> from interacting with an honest prover.
        </p>
        <p className="mt-3">
          This is formalized via the existence of a <strong>simulator</strong> that is able to
          construct an identically distributed proof <em>without knowledge of the witness</em>.
        </p>
      </Definition>

      <Callout type="info" title="Intuition Behind Zero-Knowledge">
        <p>
          The key insight is that if a simulator can produce transcripts that look identical to
          real transcripts without knowing the witness, then the verifier cannot be learning
          anything from the transcript that they couldn't compute on their own.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Arguments vs. Proofs</h3>

      <p className="mb-4">
        Note the distinction between <strong>arguments</strong> and <strong>proofs</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Argument:</strong> Soundness holds against computationally bounded (PPT) provers
        </li>
        <li>
          <strong>Proof:</strong> Soundness holds against unbounded provers (information-theoretic)
        </li>
      </ul>

      <p className="mt-4">
        In practice, arguments are often sufficient because we only need to defend against
        realistic (efficient) adversaries.
      </p>

      <ZKProtocolDiagram className="my-8" />
    </LessonLayout>
  );
}
