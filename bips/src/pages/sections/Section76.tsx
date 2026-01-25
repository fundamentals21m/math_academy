import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-42: Finite Monetary Supply</h2>

      <p className="mb-4">
        BIP-42 humorously documents a fix for a theoretical bug where Bitcoin's supply
        could exceed 21 million due to integer overflow in the subsidy calculation. While
        the fix was technically necessary, the bug wouldn't manifest for over a century.
      </p>

      <Callout type="info" title="Satirical BIP">
        <p>
          BIP-42 is written in a satirical style, published on April 1st, 2014. However,
          the technical issue it describes is real, and the fix was implemented.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The 21 Million Limit</h3>

      <p className="mb-4">
        Bitcoin's supply schedule is well-known:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Subsidy schedule:</p>
        <p className="text-dark-300">Blocks 0-209,999:      50 BTC</p>
        <p className="text-dark-300">Blocks 210,000-419,999: 25 BTC</p>
        <p className="text-dark-300">Blocks 420,000-629,999: 12.5 BTC</p>
        <p className="text-dark-300">...halving every 210,000 blocks...</p>
        <p className="text-dark-400 mt-3 mb-2"># Geometric series:</p>
        <p className="text-amber-400">Total = 210,000 × 50 × 2 = 21,000,000 BTC</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bug</h3>

      <Definition title="Integer Overflow">
        <p>
          The original Bitcoin code calculated the number of halvings by right-shifting
          the block height. After 64 halvings, the shift amount would overflow, causing
          the subsidy calculation to produce unexpected results.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Original code (simplified):</p>
        <p className="text-dark-300">halvings = height / 210000</p>
        <p className="text-dark-300">subsidy = 50 BTC &gt;&gt; halvings</p>
        <p className="text-dark-400 mt-3 mb-2"># Problem after 64 halvings:</p>
        <p className="text-dark-300">halvings = 64</p>
        <p className="text-rose-400">subsidy = 50 &gt;&gt; 64  // Undefined behavior!</p>
        <p className="text-dark-500 mt-2">
          In many implementations: wraps around to 50 BTC again
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When Would This Occur?</h3>

      <p className="mb-4">
        The overflow would happen far in the future:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>64th halving:</strong> Block 13,440,000
          </li>
          <li>
            <strong>At ~10 min/block:</strong> Approximately year 2262
          </li>
          <li>
            <strong>By then:</strong> Subsidy already 0 satoshis (after ~33 halvings)
          </li>
          <li>
            <strong>But code:</strong> Would erroneously allow new subsidies
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fix</h3>

      <Example title="BIP-42 Solution">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Fixed code:</p>
            <p className="text-dark-300">halvings = height / 210000</p>
            <p className="text-emerald-400">if halvings &gt;= 64:</p>
            <p className="text-emerald-400 ml-4">return 0  // No subsidy</p>
            <p className="text-dark-300">subsidy = 50 BTC &gt;&gt; halvings</p>
          </div>
          <p className="text-dark-500 mt-2">
            Simple bounds check prevents the overflow
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Humor in BIP-42</h3>

      <p className="mb-4">
        The BIP's satirical style includes gems like:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <blockquote className="italic text-dark-300">
          "The Bitcoin community has seen much debate recently over whether the apparent
          promise of a finite monetary supply of 21 million bitcoins should be fulfilled
          or not. This BIP seeks to confirm it."
        </blockquote>
        <p className="text-dark-500 text-sm mt-3">
          — BIP-42, treating an obvious answer as if it needed debate
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Matters</h3>

      <Callout type="info" title="Monetary Policy">
        <p>
          Even though the bug wouldn't manifest for centuries, fixing it was important:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Confirms the 21 million supply cap at code level</li>
          <li>Removes any ambiguity about future monetary policy</li>
          <li>Demonstrates Bitcoin's commitment to sound money</li>
          <li>Shows that even theoretical bugs get fixed</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Soft Fork Details</h3>

      <p className="mb-4">
        BIP-42 was a soft fork (technically):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Forward-compatible:</strong> Old nodes would accept blocks with zero subsidy
          </li>
          <li>
            <strong>Activation:</strong> No special activation needed (immediate deployment)
          </li>
          <li>
            <strong>Effect:</strong> No observable change until year ~2262
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bitcoin Core validation.cpp:</p>
        <p className="text-dark-300">CAmount GetBlockSubsidy(int nHeight, ...) {'{'}</p>
        <p className="text-dark-300 ml-4">int halvings = nHeight / 210000;</p>
        <p className="text-emerald-400 ml-4">if (halvings &gt;= 64)</p>
        <p className="text-emerald-400 ml-8">return 0;</p>
        <p className="text-dark-300 ml-4">CAmount nSubsidy = 50 * COIN;</p>
        <p className="text-dark-300 ml-4">nSubsidy &gt;&gt;= halvings;</p>
        <p className="text-dark-300 ml-4">return nSubsidy;</p>
        <p className="text-dark-300">{'}'}</p>
      </div>

      <Callout type="success" title="Future-Proofing Bitcoin">
        <p>
          BIP-42 exemplifies Bitcoin's approach to protocol development: even bugs that
          won't matter for hundreds of years get fixed. The 21 million limit isn't just
          a promise—it's enforced in code, verified by every node, forever.
        </p>
      </Callout>
    </LessonLayout>
  );
}
