import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Traditional Approaches and Their Limitations</h2>

      <p>
        Before FROST, there were two main approaches to threshold security in Bitcoin:
        traditional multisig and Shamir Secret Sharing. Both have significant limitations.
      </p>

      <h3>Approach 1: Bitcoin Multisig</h3>

      <Definition title="Bitcoin Multisig">
        <p>
          Multiple signature verification where spending requires <InlineMath>{`t`}</InlineMath> of
          <InlineMath>{`n`}</InlineMath> signatures from different public keys:
        </p>
        <MathBlock>
          {`\\text{Verify}(\\sigma_1, PK_1) \\land \\text{Verify}(\\sigma_2, PK_2) \\land \\ldots \\land \\text{Verify}(\\sigma_t, PK_t)`}
        </MathBlock>
      </Definition>

      <Example title="2-of-3 Multisig">
        <p>
          Alice creates a 2-of-3 multisig address with three public keys. To spend, she needs
          signatures from any two of the corresponding private keys.
        </p>
      </Example>

      <h4>Limitations of Multisig</h4>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-red-400 mb-2">Chain Bloat</h5>
          <p className="text-sm">
            Each signature adds ~64 bytes. A 5-of-7 multisig requires 5 signatures on-chain,
            making transactions expensive and slow.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-red-400 mb-2">Privacy Loss</h5>
          <p className="text-sm">
            On-chain observers see the exact threshold structure. Everyone knows Alice uses
            2-of-3, which may reveal information about her security setup.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-red-400 mb-2">Inflexibility</h5>
          <p className="text-sm">
            The threshold is baked into the script. Changing from 2-of-3 to 3-of-5 requires
            moving all funds to a new address.
          </p>
        </div>
      </div>

      <h3>Approach 2: Shamir Secret Sharing (SSS)</h3>

      <Definition title="Shamir Secret Sharing">
        <p>
          Secret encoded as the constant term of a polynomial. Given a secret <InlineMath>{`s`}</InlineMath>,
          choose a random polynomial <InlineMath>{`f(x)`}</InlineMath> of degree <InlineMath>{`t-1`}</InlineMath>
          where <InlineMath>{`f(0) = s`}</InlineMath>. Shares are points on this polynomial.
        </p>
        <MathBlock>
          {`f(x) = s + a_1 x + a_2 x^2 + \\ldots + a_{t-1} x^{t-1}`}
        </MathBlock>
        <p className="mt-2">
          Shares: <InlineMath>{`(1, f(1)), (2, f(2)), \\ldots, (n, f(n))`}</InlineMath>
        </p>
      </Definition>

      <h4>Limitations of SSS</h4>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-amber-400 mb-2">Reconstruction Vulnerability</h5>
          <p className="text-sm">
            To use the secret, shares must be brought together in one place. During reconstruction,
            the secret exists in memory on a single computer.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-amber-400 mb-2">Single Point of Failure</h5>
          <p className="text-sm">
            The reconstruction computer sees <InlineMath>{`s`}</InlineMath>. If compromised at that
            moment, the secret is stolen.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h5 className="text-lg font-semibold text-amber-400 mb-2">Not Signature-Compatible</h5>
          <p className="text-sm">
            SSS shares secrets, but signatures require <em>computation</em> with the secret.
            You can't directly sign with polynomial shares.
          </p>
        </div>
      </div>

      <Callout type="important">
        <strong>The Core Problem:</strong> Shamir Secret Sharing is designed for <em>reconstructing</em>
        static secrets, not for <em>computing</em> signatures collaboratively. In Bitcoin, we
        don't just want to store the key - we want to <em>use</em> it without ever assembling it.
      </Callout>

      <h3>The Gap</h3>

      <p>
        What we need is a scheme that combines:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The <strong>threshold property</strong> of secret sharing (t-of-n)</li>
        <li>The <strong>on-chain efficiency</strong> of single-party signatures</li>
        <li>The <strong>privacy</strong> of appearing as a normal transaction</li>
        <li>The <strong>security</strong> of never reconstructing the secret</li>
      </ul>

      <p>
        This is exactly what FROST achieves.
      </p>
    </LessonLayout>
  );
}
