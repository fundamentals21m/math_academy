import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>Protocol Overview</h2>

      <p>
        Having explored the mathematical components individually, we now assemble
        the complete FROST protocol. This section provides the roadmap; subsequent
        sections detail each phase.
      </p>

      <h3>The Three Phases</h3>

      <Definition title="FROST Protocol Structure">
        <p>FROST operates in three distinct phases:</p>
        <ol className="list-decimal list-inside space-y-3 mt-3">
          <li>
            <strong>Key Generation (DKG):</strong> Generate long-term key shares (performed once)
          </li>
          <li>
            <strong>Preprocessing:</strong> Generate commitment pairs (can be done in advance)
          </li>
          <li>
            <strong>Signing:</strong> Produce the threshold signature (fast, single round)
          </li>
        </ol>
      </Definition>

      <h3>Phase Relationships</h3>

      <div className="space-y-6 my-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-xl bg-indigo-900/30 border border-indigo-500/50 text-center">
              <p className="font-semibold text-indigo-400">DKG</p>
              <p className="text-xs text-gray-400">Once</p>
            </div>
            <div className="text-gray-500">→</div>
            <div className="p-4 rounded-xl bg-emerald-900/30 border border-emerald-500/50 text-center">
              <p className="font-semibold text-emerald-400">Preprocessing</p>
              <p className="text-xs text-gray-400">Batches</p>
            </div>
            <div className="text-gray-500">→</div>
            <div className="p-4 rounded-xl bg-amber-900/30 border border-amber-500/50 text-center">
              <p className="font-semibold text-amber-400">Signing</p>
              <p className="text-xs text-gray-400">Per-signature</p>
            </div>
          </div>
        </div>
      </div>

      <h3>Participants and Roles</h3>

      <Example title="Protocol Participants">
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 font-semibold mb-2">
              Participants <InlineMath>{`P_1, P_2, \\ldots, P_n`}</InlineMath>
            </p>
            <p className="text-sm">
              Each holds a secret share <InlineMath>{`s_i`}</InlineMath> and verification
              key <InlineMath>{`Y_i`}</InlineMath>. Any <InlineMath>{`t`}</InlineMath> of
              them can cooperate to sign.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 font-semibold mb-2">
              Coordinator (optional role)
            </p>
            <p className="text-sm">
              Collects commitments and signature shares, aggregates the final signature.
              Can be any participant; role can rotate.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 font-semibold mb-2">
              Signing Set <InlineMath>{`S`}</InlineMath>
            </p>
            <p className="text-sm">
              The specific <InlineMath>{`t`}</InlineMath> participants cooperating for
              a particular signature. Different signatures can use different sets.
            </p>
          </div>
        </div>
      </Example>

      <h3>Protocol Parameters</h3>

      <Definition title="FROST Parameters">
        <ul className="space-y-2">
          <li>
            <InlineMath>{`n`}</InlineMath>: Total number of participants
          </li>
          <li>
            <InlineMath>{`t`}</InlineMath>: Threshold (minimum required to sign), where <InlineMath>{`1 < t \\leq n`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\pi`}</InlineMath>: Preprocessing batch size (commitment pairs per batch)
          </li>
          <li>
            <InlineMath>{`G`}</InlineMath>: Elliptic curve generator point
          </li>
          <li>
            <InlineMath>{`q`}</InlineMath>: Order of the elliptic curve group
          </li>
        </ul>
      </Definition>

      <h3>What Each Phase Produces</h3>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-indigo-500/30">
          <h4 className="font-semibold text-indigo-400 mb-3">After DKG</h4>
          <ul className="space-y-2 text-sm">
            <li>Group public key <InlineMath>{`Y`}</InlineMath></li>
            <li>Each participant's share <InlineMath>{`s_i`}</InlineMath></li>
            <li>Verification shares <InlineMath>{`Y_i`}</InlineMath></li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-3">After Preprocessing</h4>
          <ul className="space-y-2 text-sm">
            <li>Commitment pairs <InlineMath>{`(D_i, E_i)`}</InlineMath></li>
            <li>Private nonces <InlineMath>{`(d_i, e_i)`}</InlineMath></li>
            <li><InlineMath>{`\\pi`}</InlineMath> pairs per batch</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-3">After Signing</h4>
          <ul className="space-y-2 text-sm">
            <li>Signature <InlineMath>{`(R, z)`}</InlineMath></li>
            <li>Valid Schnorr signature</li>
            <li>Verifies with <InlineMath>{`Y`}</InlineMath></li>
          </ul>
        </div>
      </div>

      <h3>Round Complexity</h3>

      <Theorem title="FROST Communication Rounds">
        <ul className="space-y-3">
          <li>
            <strong>DKG:</strong> 2 rounds (commitment broadcast, share distribution)
          </li>
          <li>
            <strong>Preprocessing:</strong> 1 round (non-interactive, can be async)
          </li>
          <li>
            <strong>Signing:</strong> 1 round (with preprocessing done in advance)
          </li>
        </ul>
        <p className="mt-4">
          The key insight: preprocessing amortizes the commitment exchange, making
          each signature require only a single round of communication.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>"Single-Round" Signing:</strong> This is FROST's headline feature.
        With preprocessing done ahead of time, producing a threshold signature
        requires only one round of communication among the signing set.
      </Callout>

      <h3>Security Throughout</h3>

      <p>
        Each phase maintains critical security properties:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">DKG Security</h4>
          <p className="text-sm">
            No single party ever knows <InlineMath>{`s`}</InlineMath>. Each contributes
            randomness, and shares are verifiable via Feldman commitments.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Preprocessing Security</h4>
          <p className="text-sm">
            Commitments are random and independent. Secret nonces <InlineMath>{`d_i, e_i`}</InlineMath>
            are used exactly once then deleted.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Signing Security</h4>
          <p className="text-sm">
            Binding prevents cross-session attacks. Signature shares are verifiable.
            Final signature is indistinguishable from single-party Schnorr.
          </p>
        </div>
      </div>

      <h3>What's Next</h3>

      <p>
        The following sections detail each phase:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Phase 1: DKG</strong> — How participants jointly generate the group key
          without any party knowing the complete secret
        </li>
        <li>
          <strong>Phase 2: Preprocessing</strong> — Non-interactive generation of
          commitment pairs for future signatures
        </li>
        <li>
          <strong>Phase 3: Signing</strong> — The single-round signing protocol that
          produces a standard Schnorr signature
        </li>
      </ul>

      <Callout type="info">
        <strong>Implementation Note:</strong> In practice, DKG happens once during setup.
        Preprocessing runs periodically to replenish commitment pairs. Signing happens
        as needed, consuming one commitment pair per signature.
      </Callout>
    </LessonLayout>
  );
}
