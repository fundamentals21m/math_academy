import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Stratum V2 Overview</h2>

      <p className="mb-4">
        Stratum V2 is a next-generation mining protocol that addresses the limitations
        of the original Stratum protocol. While not a BIP, it's essential knowledge for
        understanding modern mining infrastructure.
      </p>

      <Callout type="info" title="Industry Standard">
        <p>
          Stratum V2 was developed by Braiins (formerly Slush Pool) with input from
          Square Crypto. It's gaining adoption as the modern replacement for Stratum V1.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stratum V1 Problems</h3>

      <p className="mb-4">
        The original Stratum protocol has significant issues:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>No encryption:</strong> All communication is plaintext
          </li>
          <li>
            <strong>Pool controls blocks:</strong> Miners can't choose transactions
          </li>
          <li>
            <strong>Bandwidth inefficient:</strong> JSON-based, verbose messages
          </li>
          <li>
            <strong>Man-in-the-middle:</strong> Hashrate can be stolen
          </li>
          <li>
            <strong>Centralization:</strong> Pools have complete power over block contents
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stratum V2 Features</h3>

      <Definition title="Stratum V2 Protocol">
        <p>
          A binary protocol with mandatory encryption, optional transaction selection
          by miners, and efficient bandwidth usage. It significantly improves security,
          efficiency, and decentralization.
        </p>
      </Definition>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">🔐 Mandatory Encryption</p>
          <p className="text-sm text-dark-300">
            AEAD encryption (Noise Protocol) protects all communication from eavesdropping
            and tampering.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">📦 Binary Protocol</p>
          <p className="text-sm text-dark-300">
            Compact binary format instead of JSON reduces bandwidth by ~50% and improves
            parsing performance.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">🏭 Job Declaration</p>
          <p className="text-sm text-dark-300">
            Miners can select their own transactions, reducing pool centralization power.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">⚡ Version Rolling</p>
          <p className="text-sm text-dark-300">
            Native support for ASICBoost via version bit rolling, aligned with BIP-320.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Layers</h3>

      <p className="mb-4">
        Stratum V2 has multiple sub-protocols:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Protocol</th>
              <th className="text-left py-3 text-dark-300">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Mining Protocol</td>
              <td>Work distribution, share submission</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Job Declaration</td>
              <td>Miners propose own block templates</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Template Distribution</td>
              <td>Pool distributes block templates</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">Job Negotiation</td>
              <td>Fee negotiation, transaction preferences</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Job Declaration Protocol</h3>

      <Example title="Miner-Selected Transactions">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Traditional (Stratum V1):</p>
            <p className="text-dark-300">Pool: "Here's the block template, mine it"</p>
            <p className="text-dark-300">Miner: *mines pool's chosen transactions*</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># With Job Declaration (Stratum V2):</p>
            <p className="text-dark-300">Miner: "I want to include these transactions"</p>
            <p className="text-dark-300">Pool: "Approved, here's the job ID"</p>
            <p className="text-emerald-400">Miner: *mines own-selected transactions*</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Improvements</h3>

      <Callout type="info" title="Hashrate Hijacking Prevention">
        <p>
          Stratum V1's plaintext allows attackers to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Redirect hashrate to their pool</li>
          <li>Steal mined shares</li>
          <li>Monitor mining activity</li>
        </ul>
        <p className="mt-2">
          Stratum V2's encryption and authentication prevent all of these attacks.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decentralization Benefits</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">With miner-selected transactions:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Pools can't censor transactions</li>
          <li>Miners can support their preferred policies</li>
          <li>No single entity controls what gets mined</li>
          <li>Reduces "51% of hashrate = 51% of censorship power"</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Adoption Status</h3>

      <p className="mb-4">
        Stratum V2 adoption is growing:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Braiins Pool:</strong> Full Stratum V2 support
          </li>
          <li>
            <strong>DEMAND Pool:</strong> Stratum V2 implementation
          </li>
          <li>
            <strong>Firmware:</strong> Braiins OS+ supports Stratum V2
          </li>
          <li>
            <strong>Reference Implementation:</strong> Open-source available
          </li>
        </ul>
      </div>

      <Callout type="success" title="Future of Mining">
        <p>
          Stratum V2 represents the future of Bitcoin mining communication. Its
          combination of security, efficiency, and decentralization improvements
          addresses long-standing concerns about mining pool centralization while
          providing practical benefits for miners and pools alike.
        </p>
      </Callout>
    </LessonLayout>
  );
}
