import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Zero-Knowledge Proofs</h2>

      <p>
        Zero-knowledge proofs allow one party (the prover) to convince another party (the verifier)
        that a statement is true, without revealing anything beyond the truth of the statement.
        This remarkable concept has profound applications in cryptography.
      </p>

      <h3>The Concept of Zero-Knowledge</h3>

      <Definition title="Interactive Proof">
        An <strong>interactive proof system</strong> for a language <em>L</em> consists of:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A prover <em>P</em> (computationally unbounded)</li>
          <li>A verifier <em>V</em> (polynomial-time)</li>
          <li>Multiple rounds of interaction</li>
          <li><strong>Completeness:</strong> If <MathBlock math="x \in L" inline />, honest prover convinces verifier</li>
          <li><strong>Soundness:</strong> If <MathBlock math="x \notin L" inline />, no prover can convince verifier (except with negligible probability)</li>
        </ul>
      </Definition>

      <Definition title="Zero-Knowledge">
        An interactive proof is <strong>zero-knowledge</strong> if the verifier learns nothing
        beyond the validity of the statement. Formally, there exists a simulator that can
        produce transcripts indistinguishable from real interactions.
      </Definition>

      <h3>The Cave Analogy</h3>

      <p>
        Imagine a cave with a forking path that reconnects at the back. A magic door blocks
        the connection, openable only with a secret word.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Ali Baba's Cave</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Prover (Peggy) enters cave, chooses random path (A or B)</li>
          <li>Verifier (Victor) waits outside, doesn't see which path</li>
          <li>Victor calls out a random path for Peggy to exit from</li>
          <li>Peggy exits from requested path (using secret word if needed)</li>
          <li>Repeat many times; if Peggy always succeeds, she likely knows the secret</li>
        </ol>
      </div>

      <Callout type="info">
        <strong>Zero-Knowledge Property:</strong> A video of this protocol proves nothing to
        third parties - it could be faked by having Victor and Peggy conspire to match paths.
        Yet it convinces Victor who chooses randomly.
      </Callout>

      <h3>Schnorr Identification Protocol</h3>

      <Definition title="Schnorr Protocol">
        <p><strong>Setup:</strong> Group <em>G</em> of prime order <em>q</em>, generator <em>g</em>.
        Prover has secret <em>x</em>, public key <MathBlock math="y = g^x" inline />.</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Commitment:</strong> Prover chooses random <em>r</em>, sends <MathBlock math="R = g^r" inline /></li>
          <li><strong>Challenge:</strong> Verifier sends random <MathBlock math="c \in \{0, 1, \ldots, 2^t-1\}" inline /></li>
          <li><strong>Response:</strong> Prover sends <MathBlock math="s = r + cx \bmod q" inline /></li>
          <li><strong>Verify:</strong> Check that <MathBlock math="g^s = R \cdot y^c" inline /></li>
        </ol>
      </Definition>

      <Example title="Schnorr Protocol Execution">
        <p>Let <MathBlock math="g = 2, q = 11, x = 7" inline />. Public: <MathBlock math="y = 2^7 \bmod 11 = 7" inline /></p>
        <p className="mt-2"><strong>Round:</strong></p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Prover: <MathBlock math="r = 4" inline />, <MathBlock math="R = 2^4 \bmod 11 = 5" inline /></li>
          <li>Verifier: <MathBlock math="c = 3" inline /></li>
          <li>Prover: <MathBlock math="s = 4 + 3 \cdot 7 = 25 \equiv 3 \pmod{11}" inline /></li>
          <li>Verify: <MathBlock math="2^3 = 8" inline /> and <MathBlock math="5 \cdot 7^3 = 5 \cdot 2 = 10 \equiv 8" inline /> ✓</li>
        </ol>
      </Example>

      <Theorem title="Schnorr Security"
        proof={
          <>
            <p><strong>Completeness:</strong> If the prover knows <em>x</em> and follows the protocol honestly:</p>
            <MathBlock math="g^s = g^{r + cx} = g^r \cdot g^{cx} = g^r \cdot (g^x)^c = R \cdot y^c" />
            <p>The verification equation <MathBlock math="g^s = R \cdot y^c" inline /> holds with probability 1.</p>

            <p className="mt-3"><strong>Soundness:</strong> We show a cheating prover succeeds with probability at most <MathBlock math="1/2^t" inline />.</p>
            <p className="mt-2">Suppose a cheater can answer two different challenges <MathBlock math="c" inline /> and <MathBlock math="c'" inline /> for the same commitment <em>R</em> with responses <em>s</em> and <MathBlock math="s'" inline />. Then:</p>
            <MathBlock math="g^s = R \cdot y^c \quad \text{and} \quad g^{s'} = R \cdot y^{c'}" />
            <p>Dividing these equations:</p>
            <MathBlock math="g^{s - s'} = y^{c - c'} = g^{x(c - c')}" />
            <p>Therefore <MathBlock math="s - s' \equiv x(c - c') \pmod{q}" inline />, giving:</p>
            <MathBlock math="x = (s - s')(c - c')^{-1} \bmod q" />
            <p>This extracts the secret key! By contrapositive, a prover who doesn't know <em>x</em> can answer at most one challenge per commitment. Since challenges are chosen uniformly from <MathBlock math="\{0, 1, \ldots, 2^t - 1\}" inline />, the probability of guessing correctly is <MathBlock math="1/2^t" inline />.</p>

            <p className="mt-3"><strong>Zero-Knowledge:</strong> We construct a simulator that produces transcripts indistinguishable from real ones:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Choose random <MathBlock math="c \in \{0, \ldots, 2^t - 1\}" inline /> and random <MathBlock math="s \in \mathbb{Z}_q" inline /></li>
              <li>Compute <MathBlock math="R = g^s \cdot y^{-c}" inline /></li>
              <li>Output transcript <MathBlock math="(R, c, s)" inline /></li>
            </ol>
            <p className="mt-2">Verification: <MathBlock math="g^s = g^s \cdot y^{-c} \cdot y^c = R \cdot y^c" inline /> holds by construction.</p>
            <p className="mt-2">In a real transcript, <em>R</em> is uniform (since <MathBlock math="r" inline /> is random), <em>c</em> is uniform (chosen by verifier), and <em>s</em> is uniform in <MathBlock math="\mathbb{Z}_q" inline /> (since <MathBlock math="r" inline /> is). The simulated transcript has identical distribution: <em>c</em> and <em>s</em> are uniform by construction, and <em>R</em> is uniform because <MathBlock math="g^s y^{-c}" inline /> with uniform <em>s</em> is uniform.</p>
          </>
        }
      >
        The Schnorr protocol satisfies:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Completeness:</strong> Honest prover always convinces verifier</li>
          <li><strong>Soundness:</strong> Cheater succeeds with probability <MathBlock math="1/2^t" inline /></li>
          <li><strong>Zero-knowledge:</strong> Simulator can fake transcripts (choose <em>c, s</em> first, compute <MathBlock math="R = g^s y^{-c}" inline />)</li>
        </ul>
      </Theorem>

      <h3>Zero-Knowledge Proofs for NP</h3>

      <Theorem title="ZK for All of NP (GMW, 1986)"
        proof={
          <>
            <p>The proof proceeds in two steps: (1) construct a ZK proof for graph 3-coloring, and (2) use NP-completeness to extend to all of NP.</p>

            <p className="mt-3"><strong>Step 1: ZK Proof for 3-Coloring</strong></p>
            <p className="mt-2">Given a graph <MathBlock math="G = (V, E)" inline /> and a valid 3-coloring <MathBlock math="\chi: V \to \{1, 2, 3\}" inline />:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><strong>Commitment:</strong> Prover randomly permutes the 3 colors (applying <MathBlock math="\pi" inline /> to <MathBlock math="\chi" inline />), then commits to each vertex's new color using a hiding commitment scheme.</li>
              <li><strong>Challenge:</strong> Verifier selects a random edge <MathBlock math="(u, v) \in E" inline />.</li>
              <li><strong>Response:</strong> Prover opens the commitments for vertices <em>u</em> and <em>v</em>.</li>
              <li><strong>Verify:</strong> Verifier checks that the two colors are different.</li>
            </ol>

            <p className="mt-3"><strong>Analysis:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Completeness:</strong> Valid coloring means adjacent vertices have different colors, so honest prover always passes.</li>
              <li><strong>Soundness:</strong> If the graph is not 3-colorable, at least one edge has endpoints of the same color. Probability of catching this is <MathBlock math="\geq 1/|E|" inline />. After <MathBlock math="k \cdot |E|" inline /> rounds, cheater's success probability is at most <MathBlock math="(1 - 1/|E|)^{k|E|} \approx e^{-k}" inline />.</li>
              <li><strong>Zero-knowledge:</strong> The random permutation ensures each revealed pair is a uniformly random pair of distinct colors from <MathBlock math="\{1,2,3\}" inline />. A simulator can produce this distribution without knowing the coloring: for the challenged edge, output two random distinct colors with valid commitments.</li>
            </ul>

            <p className="mt-3"><strong>Step 2: Extension to all of NP</strong></p>
            <p className="mt-2">Since 3-coloring is NP-complete, any NP language <em>L</em> has a polynomial-time reduction to 3-coloring. Given instance <em>x</em> and witness <em>w</em> for <MathBlock math="x \in L" inline />:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Compute the reduction: <MathBlock math="(G, \chi) = \text{Reduce}(x, w)" inline /></li>
              <li>Run the 3-coloring ZK proof on <MathBlock math="(G, \chi)" inline /></li>
            </ol>
            <p className="mt-2">The reduction preserves zero-knowledge: the verifier only sees the graph <em>G</em> (which is computable from <em>x</em> alone) and the ZK proof reveals nothing about <MathBlock math="\chi" inline />, hence nothing about <em>w</em>.</p>

            <p className="mt-3"><strong>Note:</strong> This construction requires a commitment scheme, which in turn requires one-way functions.</p>
          </>
        }
      >
        Every problem in NP has a zero-knowledge proof system (assuming one-way functions exist).
        This is shown by giving a ZK proof for graph 3-coloring, which is NP-complete.
      </Theorem>

      <h3>Non-Interactive Zero-Knowledge (NIZK)</h3>

      <Definition title="Fiat-Shamir Transform">
        Convert an interactive ZK proof to non-interactive using a hash function <em>H</em>:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Compute commitment <em>R</em> as usual</li>
          <li>Set challenge <MathBlock math="c = H(g, y, R)" inline /> (no interaction needed)</li>
          <li>Compute response <em>s</em></li>
          <li>Proof is <MathBlock math="(R, s)" inline /> or just <MathBlock math="(c, s)" inline /></li>
        </ul>
      </Definition>

      <p>
        The Fiat-Shamir transform converts Schnorr identification into the Schnorr signature scheme:
        sign message <em>M</em> by including it in the hash: <MathBlock math="c = H(R, M)" inline />.
      </p>

      <h3>Applications</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Modern Applications</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Authentication:</strong> Prove identity without revealing password</li>
          <li><strong>E-voting:</strong> Prove vote validity without revealing choice</li>
          <li><strong>Blockchain:</strong> zk-SNARKs for private transactions (Zcash)</li>
          <li><strong>Credentials:</strong> Prove age &gt; 18 without revealing birthdate</li>
          <li><strong>zkRollups:</strong> Scalable blockchain computation verification</li>
        </ul>
      </div>

      <h3>zk-SNARKs</h3>

      <Definition title="zk-SNARK">
        <strong>Zero-Knowledge Succinct Non-interactive ARgument of Knowledge:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Zero-knowledge:</strong> Reveals nothing beyond statement truth</li>
          <li><strong>Succinct:</strong> Proof size is constant (a few hundred bytes)</li>
          <li><strong>Non-interactive:</strong> Single message from prover to verifier</li>
          <li><strong>Argument:</strong> Computationally sound (vs. statistically)</li>
          <li><strong>of Knowledge:</strong> Prover must "know" the witness</li>
        </ul>
      </Definition>

      <Callout type="success">
        <strong>Revolutionary Impact:</strong> zk-SNARKs allow verification of arbitrary computation
        in constant time. A verifier can check that a program was executed correctly without
        re-running it - even for programs that take hours to run.
      </Callout>

      <h3>Oblivious Transfer</h3>

      <Definition title="1-out-of-2 Oblivious Transfer">
        Alice has two messages <MathBlock math="m_0, m_1" inline />. Bob wants <MathBlock math="m_b" inline />{' '}
        for some choice bit <em>b</em>. The protocol ensures:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Bob receives <MathBlock math="m_b" inline /> but learns nothing about <MathBlock math="m_{1-b}" inline /></li>
          <li>Alice doesn't learn which message Bob chose</li>
        </ul>
      </Definition>

      <Theorem title="OT Sufficiency"
        proof={
          <>
            <p>We sketch the proof that OT suffices for secure two-party computation of any function <MathBlock math="f(x, y)" inline />.</p>

            <p className="mt-3"><strong>Step 1: Boolean circuit representation</strong></p>
            <p className="mt-2">Any efficiently computable function can be expressed as a Boolean circuit with AND and XOR gates. Convert <em>f</em> to such a circuit <em>C</em>.</p>

            <p className="mt-3"><strong>Step 2: Garbled circuits (Yao's protocol)</strong></p>
            <p className="mt-2">Party A (the garbler) creates an encrypted version of <em>C</em>:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>For each wire <em>w</em>, choose two random keys <MathBlock math="k_w^0, k_w^1" inline /> representing values 0 and 1</li>
              <li>For each gate, create a garbled gate table that encrypts the output wire keys under the corresponding input wire keys</li>
            </ul>

            <p className="mt-3"><strong>Step 3: Input wire keys via OT</strong></p>
            <p className="mt-2">A sends their garbled circuit and keys for their own input wires to B.</p>
            <p className="mt-2">For B's input wires, they use OT: for each input bit <MathBlock math="b_i" inline /> of B:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>A offers both keys <MathBlock math="(k_{w_i}^0, k_{w_i}^1)" inline /></li>
              <li>B selects <MathBlock math="k_{w_i}^{b_i}" inline /> without A learning <MathBlock math="b_i" inline /></li>
              <li>B receives exactly one key per wire without learning the other</li>
            </ul>

            <p className="mt-3"><strong>Step 4: Evaluation</strong></p>
            <p className="mt-2">B evaluates the garbled circuit gate-by-gate, decrypting each gate table with the known wire keys, obtaining the output.</p>

            <p className="mt-3"><strong>Security:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>A learns nothing about B's input (OT hides B's choice)</li>
              <li>B learns nothing about A's input beyond <MathBlock math="f(x, y)" inline /> (garbling hides intermediate values)</li>
            </ul>

            <p className="mt-3">This shows OT enables arbitrary secure computation. The converse—that secure computation implies OT—is straightforward: OT itself is a two-party function.</p>
          </>
        }
      >
        Oblivious transfer is a complete primitive for secure two-party computation. Any function
        can be securely computed given OT as a building block.
      </Theorem>

      <Callout type="info">
        <strong>Broader Impact:</strong> Zero-knowledge proofs have transformed from a theoretical
        curiosity to a practical technology. They enable privacy-preserving computation, verifiable
        credentials, and scalable blockchain systems.
      </Callout>
    </LessonLayout>
  );
}
