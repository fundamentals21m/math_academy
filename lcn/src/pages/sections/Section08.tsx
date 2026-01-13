import { LessonLayout } from '@/components/layout';
import { Definition, Theorem } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { AGMRepresentationVisualizer } from '@/components/visualizations';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">SeqMuSig Security Proof</h2>

      <p className="mb-4">
        This section presents the security proof for SeqMuSig (Sequential MuSig) in the
        Algebraic Group Model (AGM). This is an advanced topic that shows how to reduce
        multi-signature security to regular blind signature security.
      </p>

      <Definition title="Algebraic Group Model (AGM)">
        <p>
          In the AGM, adversaries are assumed to be <strong>algebraic</strong>. An algorithm{' '}
          <InlineMath>\mathcal{'{A}'}</InlineMath> is algebraic w.r.t. some group description{' '}
          <InlineMath>(\mathbb{'{G}'}, p, g)</InlineMath> if for all group elements{' '}
          <InlineMath>Z</InlineMath> that it outputs, it also provides a{' '}
          <strong>representation</strong> of <InlineMath>Z</InlineMath> relative to all
          previously received group elements.
        </p>
        <p className="mt-3">
          Formally: if <InlineMath>\mathcal{'{A}'}</InlineMath> has received{' '}
          <InlineMath>(Y_1, \ldots, Y_n) \in \mathbb{'{G}'}^n</InlineMath>, then{' '}
          <InlineMath>\mathcal{'{A}'}</InlineMath> must output <InlineMath>Z</InlineMath>{' '}
          together with <InlineMath>(\alpha_1, \ldots, \alpha_n) \in (\mathbb{'{Z}'}_p)^n</InlineMath>{' '}
          such that:
        </p>
        <MathBlock>
          {`Z = \\sum_{i=1}^n \\alpha_i Y_i`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Notation</h3>

      <p className="mb-4">
        We write <InlineMath>[Z]</InlineMath> for a group element <InlineMath>Z</InlineMath>{' '}
        augmented with its representation:
      </p>
      <MathBlock>
        {`[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)`}
      </MathBlock>

      <p className="mt-4 mb-4">
        When the adversary returns a multiset of group elements <InlineMath>L</InlineMath>,
        we write <InlineMath>[L]</InlineMath> for the multiset of augmented group elements.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Core Algorithms</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">KeyGen()</p>
          <p className="font-mono text-sm">
            <InlineMath>x \leftarrow\!\!\$ \mathbb{'{Z}'}_p</InlineMath>;{' '}
            <InlineMath>X \leftarrow xG</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <InlineMath>sk \leftarrow x</InlineMath>;{' '}
            <InlineMath>pk \leftarrow X</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <strong>return</strong> <InlineMath>(sk, pk)</InlineMath>
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Ver(pk, m, σ)</p>
          <p className="font-mono text-sm">
            <InlineMath>X \leftarrow pk</InlineMath>;{' '}
            <InlineMath>(R, s) \leftarrow \sigma</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <InlineMath>c \leftarrow H_{'{sig}'}(X, R, m)</InlineMath>
          </p>
          <p className="font-mono text-sm">
            <strong>return</strong> <InlineMath>(sG = R + cX)</InlineMath>
          </p>
        </div>
      </div>

      <Theorem
        title="Lemma 2: MSUNF Reduction"
        proof={
          <div className="space-y-4">
            <p>
              <strong>Proof sketch:</strong>
            </p>
            <p>
              1. Let <InlineMath>\mathcal{'{A}'}</InlineMath> be an adversary against{' '}
              <InlineMath>\text{'{SeqMuSig}'}[\text{'{GrGen}'}]</InlineMath>.
            </p>
            <p>
              2. We construct <InlineMath>\mathcal{'{B}'}</InlineMath> that simulates{' '}
              <InlineMath>\text{'{Game}'}_1</InlineMath> to <InlineMath>\mathcal{'{A}'}</InlineMath>{' '}
              while using SUNF oracles.
            </p>
            <p>
              3. <InlineMath>\mathcal{'{B}'}</InlineMath> receives{' '}
              <InlineMath>(\mathbb{'{G}'}, p, g)</InlineMath> and <InlineMath>X^*</InlineMath>{' '}
              and runs <InlineMath>\mathcal{'{A}'}</InlineMath> on input <InlineMath>X^*</InlineMath>.
            </p>
            <p>
              4. Each Sign/Sign' query from <InlineMath>\mathcal{'{A}'}</InlineMath> is relayed
              to SUNF's oracles.
            </p>
            <p>
              5. Upon receiving <InlineMath>(L_i, m_i, \sigma_i)</InlineMath> for{' '}
              <InlineMath>i = 1..n</InlineMath> from <InlineMath>\mathcal{'{A}'}</InlineMath>,{' '}
              <InlineMath>\mathcal{'{B}'}</InlineMath> transforms them into SUNF forgeries.
            </p>
            <p>
              6. The key aggregation representation{' '}
              <InlineMath>\tilde{'{X}'}_i = \text{'{KeyAgg}'}(L_i)</InlineMath> with{' '}
              <InlineMath>(\alpha_i, \beta_i) = T_{'{akey}'}(\tilde{'{X}'}_i)</InlineMath>{' '}
              allows computing transformed signatures.
            </p>
          </div>
        }
      >
        <p>
          Let <InlineMath>\text{'{GrGen}'}</InlineMath> be a group generation algorithm such
          that <InlineMath>\text{'{BlSch}'}</InlineMath> is SUNF. Then{' '}
          <InlineMath>\text{'{SeqMuSig}'}</InlineMath> is MSUNF. Precisely, for any algebraic
          adversary <InlineMath>\mathcal{'{A}'}</InlineMath> against{' '}
          <InlineMath>\text{'{SeqMuSig}'}[\text{'{GrGen}'}]</InlineMath>, there exists an
          adversary <InlineMath>\mathcal{'{B}'}</InlineMath> such that:
        </p>
        <MathBlock>
          {`\\text{Adv}^{\\text{SUNF}}_{\\mathcal{B},\\text{BlSch}[\\text{GrGen}]}(\\lambda) \\geq \\text{Adv}^{\\text{MSUNF}}_{\\mathcal{A},\\text{SeqMuSig}[\\text{GrGen}]}(\\lambda) + \\epsilon`}
        </MathBlock>
      </Theorem>

      <Callout type="warning" title="Open Problem">
        <p>
          The proof has a subtle issue: the representation of <InlineMath>[X]</InlineMath>{' '}
          is not only in bases <InlineMath>G</InlineMath> and <InlineMath>X^*</InlineMath>{' '}
          but also all the <InlineMath>R</InlineMath>'s. This breaks the proof idea as it
          prevents programming <InlineMath>H_{'{sig}'}</InlineMath> such that a forgery in
          MSUNF is also a forgery in SUNF.
        </p>
        <p className="mt-2">
          Possible approaches include: using the sequential property (at most one{' '}
          <InlineMath>R_k</InlineMath> base at a time), ensuring the{' '}
          <InlineMath>X^*</InlineMath>-component conditions hold, or reducing to OMDL instead.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">References</h3>

      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>
          Bünz et al. <em>Bulletproofs: Short Proofs for Confidential Transactions and More.</em>{' '}
          2017.
        </li>
        <li>
          Fuchsbauer, Plouviez, Seurin. <em>Blind Schnorr Signatures and Signed ElGamal
          Encryption in the Algebraic Group Model.</em>
        </li>
        <li>
          Fuchsbauer, Kiltz, Loss. <em>The Algebraic Group Model and its Applications.</em>
        </li>
      </ul>

      <AGMRepresentationVisualizer className="my-8" />
    </LessonLayout>
  );
}
