import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { DoubleAndAddAnimator } from '@/components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Key Generation</h2>

      <p className="mb-4">
        With the curve parameters defined, we can now understand how Bitcoin addresses
        are derived. Key generation is the process of creating a private-public key pair
        that forms the foundation of ownership in Bitcoin.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Pair Relationship</h3>

      <Definition title="Private and Public Keys">
        <p>
          A key pair consists of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Private key <InlineMath>d</InlineMath>:</strong> A random scalar in{' '}
            <InlineMath>{`[1, n-1]`}</InlineMath>
          </li>
          <li>
            <strong>Public key <InlineMath>Q</InlineMath>:</strong> The point{' '}
            <InlineMath>Q = d \cdot G</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          This is the one-way function: computing <InlineMath>Q</InlineMath> from{' '}
          <InlineMath>d</InlineMath> is easy; computing <InlineMath>d</InlineMath> from{' '}
          <InlineMath>Q</InlineMath> is the ECDLP—believed to be computationally infeasible.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 1: Generating the Private Key</h3>

      <p className="mb-4">
        The private key must be:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Random:</strong> Generated from a cryptographically secure source
        </li>
        <li>
          <strong>In range:</strong> A 256-bit integer in <InlineMath>{`[1, n-1]`}</InlineMath>
        </li>
        <li>
          <strong>Secret:</strong> Never shared or exposed
        </li>
      </ul>

      <Example title="Private Key Example">
        <p>A valid secp256k1 private key (hexadecimal):</p>
        <p className="font-mono text-xs mt-2 break-all text-amber-400">
          e8f32e723de6dddffcd0c9df9d0ab4a6f0e5a76a0f5c67c7d8f61d50b37b2e29
        </p>
        <p className="mt-3 text-dark-400">
          This is 256 bits of randomness—the owner's entire Bitcoin fortune depends on keeping
          this secret.
        </p>
      </Example>

      <Callout type="warning" title="Randomness Is Critical">
        <p>
          If the private key has any predictability (weak RNG, reused entropy, low-entropy seed),
          attackers can guess it. Wallets have been drained because of weak random number generators.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Step 2: Computing the Public Key</h3>

      <p className="mb-4">
        Given private key <InlineMath>d</InlineMath>, compute <InlineMath>Q = dG</InlineMath>{' '}
        using the double-and-add algorithm:
      </p>

      <Example title="Double-and-Add for d = 42">
        <p><InlineMath>42 = 101010_2</InlineMath> (binary)</p>
        <div className="mt-3 space-y-1 text-sm font-mono">
          <p>Start: <InlineMath>R = \mathcal{'{O}'}</InlineMath></p>
          <p>Bit 1: <InlineMath>R = 2R = \mathcal{'{O}'}</InlineMath>, <InlineMath>R = R + G = G</InlineMath></p>
          <p>Bit 0: <InlineMath>R = 2R = 2G</InlineMath></p>
          <p>Bit 1: <InlineMath>R = 2R = 4G</InlineMath>, <InlineMath>R = R + G = 5G</InlineMath></p>
          <p>Bit 0: <InlineMath>R = 2R = 10G</InlineMath></p>
          <p>Bit 1: <InlineMath>R = 2R = 20G</InlineMath>, <InlineMath>R = R + G = 21G</InlineMath></p>
          <p>Bit 0: <InlineMath>R = 2R = 42G</InlineMath></p>
        </div>
        <p className="mt-3 text-dark-400">
          Result: <InlineMath>Q = 42G</InlineMath> computed with only ~8 operations instead of 42.
        </p>
      </Example>

      <DoubleAndAddAnimator className="my-8" />

      <p className="mb-4">
        For a 256-bit scalar, double-and-add requires at most 512 elliptic curve operations
        (256 doublings + up to 256 additions)—still very fast on modern computers.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Public Key Formats</h3>

      <p className="mb-4">
        The public key <InlineMath>Q = (x, y)</InlineMath> can be encoded in two ways:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Uncompressed (65 bytes)</p>
          <p className="font-mono text-sm">04 || x || y</p>
          <p className="text-xs text-dark-400 mt-2">
            Prefix <code>04</code> followed by both coordinates (32 bytes each).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Compressed (33 bytes)</p>
          <p className="font-mono text-sm">02/03 || x</p>
          <p className="text-xs text-dark-400 mt-2">
            Prefix <code>02</code> (even y) or <code>03</code> (odd y), plus x-coordinate only.
          </p>
        </div>
      </div>

      <Definition title="Compression Works Because...">
        <p>
          For any <InlineMath>x</InlineMath> on the curve, there are at most two valid{' '}
          <InlineMath>y</InlineMath> values: <InlineMath>y</InlineMath> and <InlineMath>-y</InlineMath>.
          Since <InlineMath>-y \equiv p - y \pmod p</InlineMath>, one is even and one is odd.
          The prefix encodes which one.
        </p>
        <p className="mt-2">
          To decompress: compute <InlineMath>y = \sqrt{'{x^3 + 7}'} \mod p</InlineMath> and select
          the root with the correct parity.
        </p>
      </Definition>

      <Callout type="info" title="Bitcoin Uses Compressed Keys">
        <p>
          Since 2012, Bitcoin wallets default to compressed public keys, saving 32 bytes per
          output. This adds up: millions of transactions = gigabytes saved on the blockchain.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Analysis</h3>

      <p className="mb-4">
        How secure is a 256-bit private key?
      </p>

      <Example title="The Key Space">
        <p>Total possible private keys: <InlineMath>n \approx 2^{'{256}'}</InlineMath></p>
        <div className="mt-3 space-y-2 text-sm">
          <p>
            <strong>Atoms in the observable universe:</strong> ~<InlineMath>10^{'{80}'} \approx 2^{'{266}'}</InlineMath>
          </p>
          <p>
            <strong>Age of universe in nanoseconds:</strong> ~<InlineMath>10^{'{26}'} \approx 2^{'{87}'}</InlineMath>
          </p>
        </div>
        <p className="mt-3 text-dark-400">
          Even checking one key per nanosecond since the Big Bang wouldn't scratch the surface.
        </p>
      </Example>

      <Definition title="Birthday Attack Resistance">
        <p>
          The best-known attack (Pollard's rho) requires <InlineMath>\sqrt{'{n}'} \approx 2^{'{128}'}</InlineMath>{' '}
          operations. This is why 256-bit keys provide "128-bit security."
        </p>
        <p className="mt-2">
          <InlineMath>2^{'{128}'}</InlineMath> operations at 1 trillion/second would take{' '}
          <InlineMath>10^{'{19}'}</InlineMath> years—longer than the age of the universe.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">From Public Key to Address</h3>

      <p className="mb-4">
        Bitcoin addresses add another layer on top of public keys:
      </p>

      <MathBlock>
        {`\\text{Address} = \\text{Base58Check}(\\text{RIPEMD160}(\\text{SHA256}(Q)))`}
      </MathBlock>

      <p className="mb-4">
        Why hash the public key?
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li><strong>Shorter:</strong> 160 bits instead of 256</li>
        <li><strong>Post-quantum hedge:</strong> Hashing provides additional protection</li>
        <li><strong>Privacy:</strong> Public key not revealed until spending</li>
      </ul>

      <Callout type="success" title="Summary">
        <p>
          Key generation: pick random <InlineMath>d</InlineMath>, compute <InlineMath>Q = dG</InlineMath>,
          derive address. This simple process, secured by the ECDLP, protects billions of dollars
          in Bitcoin.
        </p>
      </Callout>
    </LessonLayout>
  );
}
