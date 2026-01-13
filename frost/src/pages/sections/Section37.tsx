import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2>Why Forking Works</h2>

      <p>
        The forking lemma is a powerful tool in cryptographic proofs. Let's understand why
        running a forger twice with different random oracle outputs allows us to extract secrets.
      </p>

      <h3>The Core Insight</h3>

      <Definition title="Random Oracle Control">
        <p>
          In the random oracle model, the simulator controls hash function outputs. This gives us
          a crucial capability: we can "rewind" the forger and give it a different answer to the
          same hash query.
        </p>
      </Definition>

      <Example title="The Setup">
        <p>Suppose the forger produces a valid signature:</p>
        <MathBlock>{`\\sigma = (R, z) \\text{ for message } m`}</MathBlock>
        <p className="mt-3">The forger queried:</p>
        <MathBlock>{`c = H_2(R, Y, m)`}</MathBlock>
        <p className="mt-3">And computed a valid response:</p>
        <MathBlock>{`z = k + s \\cdot c`}</MathBlock>
      </Example>

      <h3>The Forking Technique</h3>

      <Definition title="First Execution">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Run forger <InlineMath>{`\\mathcal{F}`}</InlineMath> with random tape{' '}
            <InlineMath>{`\\rho`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\mathcal{F}`}</InlineMath> makes hash queries{' '}
            <InlineMath>{`q_1, q_2, \\ldots, q_n`}</InlineMath>
          </li>
          <li>
            At query <InlineMath>{`q_i = (R, Y, m)`}</InlineMath>, return{' '}
            <InlineMath>{`c`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\mathcal{F}`}</InlineMath> outputs forgery{' '}
            <InlineMath>{`(R, z, m)`}</InlineMath>
          </li>
        </ol>
      </Definition>

      <Definition title="Second Execution (Fork)">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Run forger <InlineMath>{`\\mathcal{F}`}</InlineMath> with{' '}
            <strong>same</strong> random tape <InlineMath>{`\\rho`}</InlineMath>
          </li>
          <li>
            Answer queries <InlineMath>{`q_1, \\ldots, q_{i-1}`}</InlineMath> identically
          </li>
          <li>
            At query <InlineMath>{`q_i = (R, Y, m)`}</InlineMath>, return{' '}
            <strong>different</strong> <InlineMath>{`c' \\neq c`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\mathcal{F}`}</InlineMath> outputs forgery{' '}
            <InlineMath>{`(R, z', m)`}</InlineMath>
          </li>
        </ol>
      </Definition>

      <Callout type="info">
        <strong>Key Observation:</strong> Because we used the same random tape{' '}
        <InlineMath>{`\\rho`}</InlineMath> and answered earlier queries identically, the forger
        follows the same execution path until the fork point. This means{' '}
        <InlineMath>{`R`}</InlineMath> is the same in both executions!
      </Callout>

      <h3>The Extraction</h3>

      <Theorem title="Secret Extraction">
        <p>With two valid signatures for the same <InlineMath>{`R`}</InlineMath>:</p>
        <MathBlock>{`z = k + s \\cdot c`}</MathBlock>
        <MathBlock>{`z' = k + s \\cdot c'`}</MathBlock>
        <p className="mt-3">Subtract to eliminate <InlineMath>{`k`}</InlineMath>:</p>
        <MathBlock>{`z - z' = s \\cdot (c - c')`}</MathBlock>
        <p className="mt-3">
          Since <InlineMath>{`c \\neq c'`}</InlineMath>, we can divide:
        </p>
        <MathBlock>{`s = \\frac{z - z'}{c - c'} \\pmod{q}`}</MathBlock>
      </Theorem>

      <Example title="Concrete Numbers">
        <p>Suppose:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>First execution: <InlineMath>{`c = 7, z = 150`}</InlineMath></li>
          <li>Second execution: <InlineMath>{`c' = 11, z' = 178`}</InlineMath></li>
        </ul>
        <p className="mt-3">Then:</p>
        <MathBlock>{`s = \\frac{178 - 150}{11 - 7} = \\frac{28}{4} = 7`}</MathBlock>
        <p className="mt-3">
          We've extracted the secret <InlineMath>{`s = 7`}</InlineMath>!
        </p>
      </Example>

      <h3>The Forking Lemma</h3>

      <Theorem title="General Forking Lemma (Bellare-Neven)">
        <p>
          If forger <InlineMath>{`\\mathcal{F}`}</InlineMath> succeeds with probability{' '}
          <InlineMath>{`\\varepsilon`}</InlineMath> after making at most{' '}
          <InlineMath>{`q`}</InlineMath> random oracle queries, then the probability of obtaining
          two useful forgeries via forking is at least:
        </p>
        <MathBlock>{`\\text{frk} \\geq \\varepsilon \\left( \\frac{\\varepsilon}{q} - \\frac{1}{|H|} \\right)`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`|H|`}</InlineMath> is the size of the hash output space.
        </p>
        <p className="mt-3">
          For large <InlineMath>{`|H|`}</InlineMath> (like <InlineMath>{`2^{256}`}</InlineMath>),
          this simplifies to approximately:
        </p>
        <MathBlock>{`\\text{frk} \\geq \\frac{\\varepsilon^2}{q}`}</MathBlock>
      </Theorem>

      <h3>Why Same Randomness Matters</h3>

      <Definition title="Deterministic Execution">
        <p>
          Using the same random tape <InlineMath>{`\\rho`}</InlineMath> ensures:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Same internal randomness for the forger</li>
          <li>Same commitment <InlineMath>{`R`}</InlineMath> chosen</li>
          <li>Same message <InlineMath>{`m`}</InlineMath> targeted</li>
          <li>Same query sequence until the fork</li>
        </ul>
        <p className="mt-3">
          Without identical randomness, we might get different <InlineMath>{`R`}</InlineMath>{' '}
          values, making extraction impossible.
        </p>
      </Definition>

      <h3>Application to FROST</h3>

      <Example title="FROST Context">
        <p>In FROST's security proof:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            The group public key <InlineMath>{`Y`}</InlineMath> contains the embedded DL challenge
          </li>
          <li>
            When forger creates a forgery, it implicitly "knows"{' '}
            <InlineMath>{`s`}</InlineMath>
          </li>
          <li>
            Forking extracts <InlineMath>{`s`}</InlineMath> explicitly
          </li>
          <li>
            From <InlineMath>{`s`}</InlineMath>, we can solve the original DL challenge
          </li>
        </ol>
      </Example>

      <Callout type="success">
        <strong>The Power of Rewinding:</strong> The forking lemma transforms a cryptographic
        attack into a mathematical extraction tool. If anyone can forge signatures, we can use
        their attack to solve discrete logarithms - which we believe is impossible. Therefore,
        forgery must also be impossible.
      </Callout>

      <h3>Limitations</h3>

      <Definition title="When Forking Fails">
        <p>The forking technique has limitations:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Probability loss:</strong> Success probability degrades to{' '}
            <InlineMath>{`\\varepsilon^2/q`}</InlineMath>
          </li>
          <li>
            <strong>Query bound:</strong> Need to know when the critical query occurs
          </li>
          <li>
            <strong>Requires rewinding:</strong> Not applicable to some security models
          </li>
        </ul>
      </Definition>

      <p>
        Despite these limitations, the forking lemma provides a rigorous foundation for proving
        FROST's security, connecting its hardness directly to the discrete logarithm problem.
      </p>
    </LessonLayout>
  );
}
