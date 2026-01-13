import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Why t-1 Points Reveal Nothing</h2>

      <p>
        Shamir Secret Sharing has a remarkable property: with fewer than <InlineMath>{`t`}</InlineMath> shares,
        an attacker gains <em>zero</em> information about the secret. This isn't just computational
        security (hard to break) - it's <strong>information-theoretic security</strong> (impossible
        to break, even with unlimited computing power).
      </p>

      <h3>The Key Insight</h3>

      <Theorem title="Information-Theoretic Security">
        <p>
          Given <InlineMath>{`t-1`}</InlineMath> shares from a degree <InlineMath>{`t-1`}</InlineMath> polynomial,
          for <em>every possible</em> secret value <InlineMath>{`s^*`}</InlineMath>, there exists
          exactly one polynomial of degree <InlineMath>{`t-1`}</InlineMath> that:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Passes through all <InlineMath>{`t-1`}</InlineMath> known points</li>
          <li>Has <InlineMath>{`f(0) = s^*`}</InlineMath></li>
        </ul>
        <p className="mt-3">
          Therefore, the <InlineMath>{`t-1`}</InlineMath> shares are consistent with <em>every</em> possible
          secret, revealing nothing about the true secret.
        </p>
      </Theorem>

      <h3>Concrete Example</h3>

      <p>
        Consider a 3-of-5 scheme where an attacker has obtained only 2 shares:
      </p>

      <MathBlock>
        {`(1, 67) \\text{ and } (2, 108)`}
      </MathBlock>

      <Example title="What the Attacker Sees">
        <p className="mb-4">
          With only 2 points, infinitely many degree-2 polynomials pass through them.
          Each gives a different secret:
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 mb-1">Polynomial 1 (the true one):</p>
            <MathBlock>{`f(x) = 42 + 17x + 8x^2`}</MathBlock>
            <p>Secret: <InlineMath>{`f(0) = 42`}</InlineMath></p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 mb-1">Polynomial 2:</p>
            <MathBlock>{`g(x) = 10 + 33x + 8x^2`}</MathBlock>
            <p>Secret: <InlineMath>{`g(0) = 10`}</InlineMath></p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 mb-1">Polynomial 3:</p>
            <MathBlock>{`h(x) = 100 - 17x + 8x^2`}</MathBlock>
            <p>Secret: <InlineMath>{`h(0) = 100`}</InlineMath></p>
          </div>

          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-rose-400 mb-1">Polynomial 4:</p>
            <MathBlock>{`p(x) = 0 + 43x + 8x^2`}</MathBlock>
            <p>Secret: <InlineMath>{`p(0) = 0`}</InlineMath></p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Every possible secret value corresponds to exactly one valid polynomial!
        </p>
      </Example>

      <h3>Why Every Secret Is Equally Likely</h3>

      <p>
        Let's prove this mathematically. Suppose we have <InlineMath>{`t-1`}</InlineMath> points
        and want to find a polynomial with <InlineMath>{`f(0) = s^*`}</InlineMath> for some target
        secret <InlineMath>{`s^*`}</InlineMath>.
      </p>

      <Definition title="Constructing a Consistent Polynomial">
        <p>
          Given points <InlineMath>{`(x_1, y_1), \\ldots, (x_{t-1}, y_{t-1})`}</InlineMath> and
          target secret <InlineMath>{`s^*`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            We have <InlineMath>{`t`}</InlineMath> constraints: the <InlineMath>{`t-1`}</InlineMath> known
            points plus <InlineMath>{`f(0) = s^*`}</InlineMath>
          </li>
          <li>
            A degree <InlineMath>{`t-1`}</InlineMath> polynomial has <InlineMath>{`t`}</InlineMath> coefficients:
            <InlineMath>{`a_0, a_1, \\ldots, a_{t-1}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`t`}</InlineMath> equations in <InlineMath>{`t`}</InlineMath> unknowns
            has exactly one solution
          </li>
        </ol>
      </Definition>

      <MathBlock>
        {`\\text{Unknowns: } t \\quad \\text{Equations: } t \\quad \\Rightarrow \\quad \\text{Unique solution}`}
      </MathBlock>

      <Callout type="info">
        <strong>The Math:</strong> This is just linear algebra! Each constraint
        <InlineMath>{`f(x_i) = y_i`}</InlineMath> gives us one linear equation in the coefficients.
        With <InlineMath>{`t`}</InlineMath> equations and <InlineMath>{`t`}</InlineMath> unknowns,
        we get exactly one polynomial (assuming distinct <InlineMath>{`x`}</InlineMath> values).
      </Callout>

      <h3>Uniform Distribution Over Secrets</h3>

      <Theorem title="Uniform Distribution">
        <p>
          If the polynomial coefficients <InlineMath>{`a_1, \\ldots, a_{t-1}`}</InlineMath> are chosen
          uniformly at random from <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>, then for any
          <InlineMath>{`t-1`}</InlineMath> shares, the conditional distribution of the secret
          <InlineMath>{`s = f(0)`}</InlineMath> is uniform over <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>.
        </p>
      </Theorem>

      <p>
        This means an attacker with <InlineMath>{`t-1`}</InlineMath> shares cannot distinguish
        between any two possible secrets. The secret could be 0, could be 1, could be
        <InlineMath>{`q-1`}</InlineMath> - all are equally likely given the attacker's information.
      </p>

      <h3>Comparison with Computational Security</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Information-Theoretic Security</h4>
          <ul className="space-y-2 text-sm">
            <li>Cannot be broken even with infinite computation</li>
            <li>Security is unconditional</li>
            <li>No cryptographic assumptions needed</li>
            <li>Shamir SSS achieves this</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Computational Security</h4>
          <ul className="space-y-2 text-sm">
            <li>Breaking would require infeasible computation</li>
            <li>Security based on hardness assumptions</li>
            <li>Examples: discrete log, factoring</li>
            <li>Schnorr signatures, RSA rely on this</li>
          </ul>
        </div>
      </div>

      <Example title="What an Attacker with t-1 Shares Learns">
        <p className="mb-4">With 2 shares in a 3-of-5 scheme:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>The attacker learns nothing about the secret</li>
          <li>Every secret in <InlineMath>{`\\mathbb{Z}_q`}</InlineMath> is equally consistent</li>
          <li>Guessing remains no better than random: probability <InlineMath>{`1/q`}</InlineMath></li>
          <li>For secp256k1: <InlineMath>{`q \\approx 2^{256}`}</InlineMath>, so success probability
            is astronomically small</li>
        </ul>
      </Example>

      <Callout type="warning">
        <strong>Important Distinction:</strong> While <InlineMath>{`t-1`}</InlineMath> shares
        reveal nothing about the <em>secret value</em>, they do reveal information about the
        <em>polynomial itself</em>. An attacker knows the polynomial passes through those
        <InlineMath>{`t-1`}</InlineMath> points. But this doesn't help them determine
        <InlineMath>{`f(0)`}</InlineMath> without additional shares.
      </Callout>

      <h3>Why This Matters for FROST</h3>

      <p>
        This information-theoretic security property is crucial for FROST:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          An attacker controlling <InlineMath>{`t-1`}</InlineMath> participants learns nothing
          about the group private key
        </li>
        <li>
          Even if <InlineMath>{`t-1`}</InlineMath> devices are compromised, the secret remains safe
        </li>
        <li>
          The threshold <InlineMath>{`t`}</InlineMath> represents the true security boundary,
          not just an approximation
        </li>
      </ul>

      <Callout type="success">
        <strong>The Bottom Line:</strong> Shamir Secret Sharing provides the strongest possible
        security guarantee: with fewer than <InlineMath>{`t`}</InlineMath> shares, breaking the
        scheme is not just computationally hard - it's mathematically impossible.
      </Callout>
    </LessonLayout>
  );
}
