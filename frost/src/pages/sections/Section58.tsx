import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2>Performance Optimizations</h2>

      <p>
        While FROST is already efficient compared to other threshold signature schemes,
        several optimizations can further improve performance in production deployments.
      </p>

      <h3>Batch Verification</h3>

      <p>
        Instead of verifying each signature share individually, batch verification
        combines all checks into a single equation:
      </p>

      <Definition title="Batch Verification Formula">
        <p>
          For shares <InlineMath>{`z_1, \\ldots, z_t`}</InlineMath> with random weights{' '}
          <InlineMath>{`r_1, \\ldots, r_t`}</InlineMath>:
        </p>
        <MathBlock>
          {`[\\sum_i r_i \\cdot z_i]G \\stackrel{?}{=} \\sum_i r_i \\cdot (R_i + [\\lambda_i \\cdot c]Y_i)`}
        </MathBlock>
      </Definition>

      <Example title="Performance Savings">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Individual verification:</strong>{' '}
            <InlineMath>{`t`}</InlineMath> separate scalar multiplications
          </li>
          <li>
            <strong>Batch verification:</strong> approximately 2 scalar multiplications
            using multi-scalar multiplication algorithms
          </li>
          <li>
            <strong>Speedup factor:</strong> approximately{' '}
            <InlineMath>{`t/2`}</InlineMath> times faster
          </li>
        </ul>
      </Example>

      <h3>Precomputation Tables</h3>

      <p>
        For frequently used points like <InlineMath>{`Y`}</InlineMath> and each{' '}
        <InlineMath>{`Y_i`}</InlineMath>, precomputation dramatically speeds up
        scalar multiplication:
      </p>

      <Example title="Precomputation Strategy">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`# For public key Y:
Precompute: [Y], [2]Y, [4]Y, [8]Y, ...
Store in memory as lookup table

# During signing:
[c]Y computed via table lookups instead of
repeated point additions`}
        </pre>
        <p className="mt-3">
          The trade-off is memory usage vs. computation time. For frequently used
          points, the memory cost is easily justified.
        </p>
      </Example>

      <h3>Multi-Scalar Multiplication</h3>

      <Definition title="Multi-Scalar Multiplication">
        <p>
          Computing <InlineMath>{`[a]P + [b]Q`}</InlineMath> is more efficient than
          computing each term separately:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Shamir's trick:</strong> Process both scalars simultaneously,
            approximately 25% faster
          </li>
          <li>
            <strong>Straus algorithm:</strong> Generalization to many points,
            approximately 40% faster
          </li>
          <li>
            <strong>Pippenger's algorithm:</strong> Best for large batches,
            asymptotically optimal
          </li>
        </ul>
      </Definition>

      <h3>Parallel Processing</h3>

      <Callout type="info">
        <strong>Parallelization Opportunities:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Preprocessing:</strong> Generate multiple commitment pairs in parallel
          </li>
          <li>
            <strong>Verification:</strong> Verify multiple shares simultaneously
          </li>
          <li>
            <strong>DKG:</strong> Polynomial evaluation for different participants
          </li>
        </ul>
      </Callout>

      <h3>Protocol-Level Optimizations</h3>

      <Example title="Preprocessing Buffer Strategy">
        <p>
          Maintain a buffer of preprocessed commitment pairs to avoid signing delays:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Generate pairs during idle time
          </li>
          <li>
            Refill buffer when it drops below threshold
          </li>
          <li>
            Balance storage cost vs. signing latency
          </li>
        </ul>
        <p className="mt-3">
          For high-throughput applications, maintaining 100+ pairs per participant
          ensures signing never waits for preprocessing.
        </p>
      </Example>

      <h3>Network Optimization</h3>

      <Definition title="Communication Efficiency">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Commitment compression:</strong> Use compressed point encoding
            (33 bytes vs 65 bytes)
          </li>
          <li>
            <strong>Batch requests:</strong> Combine multiple signing requests
            in single message
          </li>
          <li>
            <strong>Pipelining:</strong> Start next signing session before current
            completes (with care)
          </li>
        </ul>
      </Definition>

      <h3>Benchmarks</h3>

      <Theorem title="FROST Performance Characteristics">
        <p>On modern hardware (x86-64, single core):</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Preprocessing:</strong> approximately 1ms per commitment pair
          </li>
          <li>
            <strong>Signing:</strong> approximately 0.5ms per signature share
          </li>
          <li>
            <strong>Aggregation:</strong> approximately 1ms for verification + aggregation
          </li>
          <li>
            <strong>Total:</strong> 2-3ms per threshold signature (after preprocessing)
          </li>
        </ul>
        <p className="mt-4">
          This makes FROST suitable for high-throughput applications like payment
          processors or custodial services.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Hardware Acceleration:</strong> Some platforms provide hardware
        acceleration for elliptic curve operations (e.g., ARM Cryptographic Extensions).
        Using platform-specific optimizations can provide additional 2-4x speedup.
      </Callout>
    </LessonLayout>
  );
}
