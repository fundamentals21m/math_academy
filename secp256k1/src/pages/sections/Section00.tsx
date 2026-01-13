import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Big Picture</h2>

      <p className="mb-4">
        A random 256-bit number can secure billions of dollars. How is that possible?
        The answer lies in <strong>elliptic curve cryptography</strong>, and specifically
        in a curve called <strong>secp256k1</strong>—the mathematical foundation of Bitcoin.
      </p>

      <Callout type="info" title="Learning Philosophy">
        <p>
          This course takes you from <em>borrowed belief</em> to <em>earned conviction</em>.
          You'll understand not just <em>that</em> Bitcoin's cryptography works, but <em>why</em>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem: Public-Key Cryptography</h3>

      <p className="mb-4">
        Imagine Alice wants to receive Bitcoin. She needs to share something publicly (her address)
        that allows anyone to send her coins, but only she can spend them. This requires two keys:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Private Key</p>
          <p className="text-sm text-dark-300">
            A secret number known only to Alice. Used to sign transactions and prove ownership.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Public Key</p>
          <p className="text-sm text-dark-300">
            Derived from the private key. Shared publicly so others can verify Alice's signatures.
          </p>
        </div>
      </div>

      <Definition title="One-Way Function">
        <p>
          A function <InlineMath>f</InlineMath> is <strong>one-way</strong> if:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Easy forward:</strong> Given <InlineMath>x</InlineMath>, computing{' '}
            <InlineMath>f(x)</InlineMath> is efficient
          </li>
          <li>
            <strong>Hard reverse:</strong> Given <InlineMath>y = f(x)</InlineMath>, finding{' '}
            <InlineMath>x</InlineMath> is computationally infeasible
          </li>
        </ul>
        <p className="mt-3">
          For public-key cryptography, we need: <InlineMath>{`\\text{public} = f(\\text{private})`}</InlineMath>
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Not RSA?</h3>

      <p className="mb-4">
        RSA was the first widely-used public-key cryptosystem (1977). It's based on the
        difficulty of factoring large numbers. But RSA has drawbacks:
      </p>

      <Example title="RSA vs ECC Key Sizes">
        <p className="mb-3">To achieve 128-bit security (the standard for Bitcoin):</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="pb-2">System</th>
              <th className="pb-2">Key Size</th>
              <th className="pb-2">Signature Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-dark-300">
              <td>RSA</td>
              <td>3,072 bits</td>
              <td>3,072 bits</td>
            </tr>
            <tr className="text-amber-400">
              <td>ECC (secp256k1)</td>
              <td>256 bits</td>
              <td>512 bits</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          ECC keys are <strong>12x smaller</strong>! This matters for blockchain space efficiency.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Enter Elliptic Curves</h3>

      <p className="mb-4">
        Elliptic curves provide a different one-way function based on a hard problem called
        the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>.
      </p>

      <Definition title="Elliptic Curve">
        <p>
          An elliptic curve is the set of points <InlineMath>(x, y)</InlineMath> satisfying:
        </p>
        <MathBlock>
          {`y^2 = x^3 + ax + b`}
        </MathBlock>
        <p className="mt-2">
          For secp256k1, the equation is beautifully simple:
        </p>
        <MathBlock>
          {`y^2 = x^3 + 7`}
        </MathBlock>
      </Definition>

      <p className="mb-4">
        The key insight is that points on an elliptic curve form a <strong>group</strong>—you
        can "add" points together to get other points on the curve. This addition has a
        geometric interpretation that we'll explore in the next section.
      </p>

      <Callout type="success" title="The One-Way Property">
        <p>
          Given a generator point <InlineMath>G</InlineMath> and a scalar <InlineMath>d</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Easy:</strong> Compute <InlineMath>Q = d \cdot G</InlineMath> (add{' '}
            <InlineMath>G</InlineMath> to itself <InlineMath>d</InlineMath> times)
          </li>
          <li>
            <strong>Hard:</strong> Given <InlineMath>G</InlineMath> and <InlineMath>Q</InlineMath>,
            find <InlineMath>d</InlineMath> (the discrete logarithm problem)
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why secp256k1?</h3>

      <p className="mb-4">
        Satoshi Nakamoto chose secp256k1 for Bitcoin. Let's decode the name:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="font-mono text-lg text-center mb-4">
          <span className="text-amber-400">sec</span>
          <span className="text-emerald-400">p</span>
          <span className="text-purple-400">256</span>
          <span className="text-rose-400">k</span>
          <span className="text-cyan-400">1</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
          <div className="text-center">
            <span className="text-amber-400 font-bold">sec</span>
            <p className="text-dark-400">Standards for Efficient Cryptography</p>
          </div>
          <div className="text-center">
            <span className="text-emerald-400 font-bold">p</span>
            <p className="text-dark-400">Prime field</p>
          </div>
          <div className="text-center">
            <span className="text-purple-400 font-bold">256</span>
            <p className="text-dark-400">256-bit prime</p>
          </div>
          <div className="text-center">
            <span className="text-rose-400 font-bold">k</span>
            <p className="text-dark-400">Koblitz curve</p>
          </div>
          <div className="text-center">
            <span className="text-cyan-400 font-bold">1</span>
            <p className="text-dark-400">First curve</p>
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold text-dark-100 mt-6 mb-3">Key Advantages</h4>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Efficiency:</strong> Koblitz curves are ~30% faster than random curves
        </li>
        <li>
          <strong>Simplicity:</strong> <InlineMath>a = 0</InlineMath> simplifies the math
        </li>
        <li>
          <strong>Transparency:</strong> Parameters are deterministic, not suspiciously random like NIST curves
        </li>
        <li>
          <strong>No backdoors:</strong> The small constant <InlineMath>b = 7</InlineMath> leaves no room for hidden weaknesses
        </li>
      </ul>

      <Callout type="warning" title="The NIST P-256 Controversy">
        <p>
          NIST's P-256 curve uses seemingly random constants generated by the NSA. Some
          cryptographers worried these could hide backdoors. secp256k1's simple, deterministic
          parameters inspired more trust in the cypherpunk community.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What's Coming</h3>

      <p className="mb-4">
        In this course, we'll build up to a complete understanding of secp256k1:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-dark-300">
        <li><strong>Foundation:</strong> Curves over real numbers, then finite fields</li>
        <li><strong>The Curve:</strong> secp256k1's specific parameters and key generation</li>
        <li><strong>Signatures:</strong> ECDSA and Schnorr—proving ownership cryptographically</li>
        <li><strong>Practice:</strong> Implementation, applications, and the future</li>
      </ol>

      <Callout type="note" title="Homework">
        <p>
          Try plotting <InlineMath>{`y^2 = x^3 + 7`}</InlineMath> on{' '}
          <a
            href="https://www.desmos.com/calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline"
          >
            Desmos
          </a>
          . Hint: Plot both <InlineMath>{`y = \\sqrt{x^3 + 7}`}</InlineMath> and{' '}
          <InlineMath>{`y = -\\sqrt{x^3 + 7}`}</InlineMath>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
