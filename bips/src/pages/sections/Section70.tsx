import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-158: Compact Block Filters</h2>

      <p className="mb-4">
        BIP-158 specifies the structure and encoding of compact block filters used by
        BIP-157. These Golomb-coded sets (GCS) efficiently represent block contents for
        lightweight client filtering.
      </p>

      <Callout type="info" title="Companion to BIP-157">
        <p>
          BIP-158 defines HOW to construct filters. BIP-157 defines HOW to serve them.
          Together they enable privacy-preserving light clients.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Golomb-Coded Sets</h3>

      <Definition title="GCS (Golomb-Coded Set)">
        <p>
          A probabilistic data structure that compactly encodes a set of elements. Like
          Bloom filters, it has false positives but no false negatives. Unlike Bloom
          filters, it's more space-efficient and deterministic.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># GCS parameters for Bitcoin filters:</p>
        <p className="text-dark-300">P = 19 (false positive rate = 1/2^19 ≈ 1 in 500,000)</p>
        <p className="text-dark-300">M = 784931 (parameter derived from P)</p>
        <p className="text-dark-500 mt-3">
          Very low false positive rate → minimal wasted block downloads
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filter Construction</h3>

      <p className="mb-4">
        Basic (type 0) filters include specific block data:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-amber-400 font-bold mb-2">Included in Filter:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>All scriptPubKeys of outputs created in the block</li>
          <li>All scriptPubKeys being spent by inputs (from prevouts)</li>
          <li>Scripts are serialized without length prefix</li>
        </ul>
        <p className="text-dark-400 font-bold mt-4 mb-2">Excluded from Filter:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>OP_RETURN outputs (not spendable)</li>
          <li>Witness data (only script, not signatures)</li>
          <li>Transaction structure (inputs, outputs, etc.)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Encoding Process</h3>

      <Example title="Filter Construction Steps">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Collect elements:</p>
            <p className="text-dark-300">elements = [scriptPubKey₁, scriptPubKey₂, ...]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Hash each element:</p>
            <p className="text-dark-300">key = block_hash[0:16]</p>
            <p className="text-dark-300">hashed = [siphash(key, e) for e in elements]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Map to range and sort:</p>
            <p className="text-dark-300">N = len(elements)</p>
            <p className="text-dark-300">values = sorted([h % (N * M) for h in hashed])</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Compute deltas:</p>
            <p className="text-dark-300">deltas = [values[i] - values[i-1] for i in 1..N]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 5. Golomb-Rice encode deltas:</p>
            <p className="text-amber-400">filter = golomb_encode(deltas, P)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Golomb-Rice Encoding</h3>

      <p className="mb-4">
        Each delta is encoded as quotient + remainder:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># For each delta value d:</p>
        <p className="text-dark-300">q = d &gt;&gt; P          # quotient (d / 2^P)</p>
        <p className="text-dark-300">r = d &amp; ((1 &lt;&lt; P) - 1)  # remainder (d mod 2^P)</p>
        <p className="text-dark-400 mt-3 mb-2"># Encoding:</p>
        <p className="text-dark-300">write q ones, then a zero  # unary for quotient</p>
        <p className="text-dark-300">write r as P bits          # binary for remainder</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filter Matching</h3>

      <p className="mb-4">
        Clients check if their scripts might be in the filter:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Client matching algorithm:</p>
        <p className="text-dark-300">1. Hash client's scriptPubKey with same key</p>
        <p className="text-dark-300">2. Map to same range: h % (N * M)</p>
        <p className="text-dark-300">3. Decode filter's sorted values</p>
        <p className="text-dark-300">4. Binary search for client's value</p>
        <p className="text-amber-400 mt-2">Match found → download block for details</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filter Size</h3>

      <Callout type="info" title="Space Efficiency">
        <p>
          Basic filters average ~10-20 KB per block. With 2000+ elements (scriptPubKeys),
          this is roughly 8-10 bytes per element—much smaller than storing full scripts.
        </p>
        <p className="mt-2">
          Total chain: ~10-20 GB for all filters vs ~500+ GB for full blockchain.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why GCS over Bloom?</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Bloom Filters</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Fixed size regardless of set</li>
            <li>Non-deterministic (depends on insertion order)</li>
            <li>Larger for same false positive rate</li>
            <li>Easy to construct</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Golomb-Coded Sets</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Size proportional to set</li>
            <li>Deterministic (same inputs → same output)</li>
            <li>~40% smaller than Bloom</li>
            <li>More complex encoding</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Determinism</h3>

      <p className="mb-4">
        Filter determinism is crucial:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Same block → same filter:</strong> All nodes produce identical filters
          </li>
          <li>
            <strong>Verifiable:</strong> Clients can cross-check filters from multiple peers
          </li>
          <li>
            <strong>Header chain:</strong> Filter headers form verifiable hash chain
          </li>
          <li>
            <strong>No trust required:</strong> Dishonest peers detected by mismatched filters
          </li>
        </ul>
      </div>

      <Callout type="success" title="Efficient and Private">
        <p>
          BIP-158's compact filters enable a new generation of light clients that are
          both bandwidth-efficient and privacy-preserving. The deterministic construction
          allows trustless verification while Golomb coding minimizes storage and transfer
          costs.
        </p>
      </Callout>
    </LessonLayout>
  );
}
