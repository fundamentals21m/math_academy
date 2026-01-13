import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Why Naive Solutions Fail</h2>

      <p>
        After discovering the Drijvers attack, cryptographers proposed several "obvious"
        solutions. Each seemed reasonable but failed for important reasons. Understanding
        these failures helps appreciate why FROST's binding technique is necessary.
      </p>

      <h3>Bad Idea 1: Limit Parallelism</h3>

      <Definition title="Sequential Signing">
        <p>
          Only allow one signing session at a time. Wait for each signature to complete
          before starting the next.
        </p>
      </Definition>

      <p>
        This does prevent the Drijvers attack, since Wagner's algorithm requires multiple
        parallel sessions to find the k-sum combination.
      </p>

      <Callout type="error">
        <strong>Why It Fails:</strong> This defeats the entire purpose of threshold signatures
        in high-throughput scenarios. Bitcoin exchanges, Lightning nodes, and custodial
        services need to process many signatures per second.
      </Callout>

      <Example title="Throughput Comparison">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-emerald-400">Parallel FROST:</p>
            <p className="text-sm">Thousands of signatures per second</p>
          </div>
          <div>
            <p className="font-semibold text-rose-400">Sequential-only:</p>
            <p className="text-sm">~10 signatures per second (network latency dominated)</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          For institutional custody, sequential-only is impractical.
        </p>
      </Example>

      <h3>Bad Idea 2: Pre-commit to Message</h3>

      <Definition title="Message Pre-commitment">
        <p>
          Require participants to commit to the message <InlineMath>{`m`}</InlineMath> before
          any commitments are revealed.
        </p>
      </Definition>

      <p>
        The intuition: if the adversary must choose <InlineMath>{`m^*`}</InlineMath> before
        seeing any <InlineMath>{`R`}</InlineMath> values, they can't adaptively construct
        the k-sum.
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Problem 1: Reduces Flexibility</h4>
          <p className="text-sm">
            In many applications, the exact message isn't known until late in the process.
            For example, Bitcoin transactions may need last-minute fee adjustments.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30">
          <h4 className="font-semibold text-rose-400 mb-2">Problem 2: Doesn't Fully Prevent Attack</h4>
          <p className="text-sm">
            The adversary can still launch attacks if they control when sessions start.
            Pre-commitment only shifts the attack, not eliminates it.
          </p>
        </div>
      </div>

      <h3>Bad Idea 3: All-or-Nothing Abort</h3>

      <Definition title="Strict Abort Protocol">
        <p>
          If any participant detects suspicious behavior, abort the entire signing
          session and start over.
        </p>
      </Definition>

      <p>
        This aims to catch the attacker before damage is done.
      </p>

      <Callout type="error">
        <strong>Why It Fails:</strong>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Too strict:</strong> One malicious or malfunctioning party can stop
            all signing operations (denial of service)
          </li>
          <li>
            <strong>No accountability:</strong> Can't identify which participant caused
            the abort, so can't exclude them from future sessions
          </li>
          <li>
            <strong>Attack still possible:</strong> Between detection and abort, the
            adversary may have gathered enough information
          </li>
        </ul>
      </Callout>

      <h3>The Common Thread</h3>

      <Theorem title="Fundamental Limitation">
        <p>
          All naive solutions fail because they try to <em>restrict</em> the adversary's
          capabilities without <em>binding</em> responses to specific session state.
        </p>
        <p className="mt-3">
          The key insight: rather than limiting what the adversary can do, we should make
          it impossible for them to benefit from parallel sessions by ensuring each
          response is cryptographically bound to its context.
        </p>
      </Theorem>

      <h3>What We Actually Need</h3>

      <Definition title="Requirements for a Real Solution">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Parallel sessions:</strong> Must support concurrent signing for throughput
          </li>
          <li>
            <strong>No message pre-commitment:</strong> Message can be chosen late
          </li>
          <li>
            <strong>Graceful degradation:</strong> Misbehaving parties detected, not just aborted
          </li>
          <li>
            <strong>Mathematical security:</strong> Provably secure reduction to discrete log
          </li>
        </ol>
      </Definition>

      <p>
        FROST achieves all four requirements through its binding mechanism, which we
        explore in the next section.
      </p>

      <h3>Summary</h3>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30 text-center">
          <h4 className="font-semibold text-rose-400 mb-2">Limit Parallelism</h4>
          <p className="text-sm">Kills throughput</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30 text-center">
          <h4 className="font-semibold text-rose-400 mb-2">Pre-commit Message</h4>
          <p className="text-sm">Inflexible + incomplete</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-rose-500/30 text-center">
          <h4 className="font-semibold text-rose-400 mb-2">All-or-Nothing Abort</h4>
          <p className="text-sm">DoS vulnerable</p>
        </div>
      </div>

      <Callout type="info">
        <strong>The Path Forward:</strong> FROST's binding technique doesn't restrict
        parallelism—it embraces it while cryptographically preventing cross-session attacks.
      </Callout>
    </LessonLayout>
  );
}
