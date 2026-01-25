import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section87() {
  return (
    <LessonLayout sectionId={87}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-119 Deep Dive: Vaults</h2>

      <p className="mb-4">
        BIP-119 (OP_CHECKTEMPLATEVERIFY) enables Bitcoin vaults—self-custodial cold storage
        with built-in spending restrictions that provide time to respond to theft attempts.
      </p>

      <Callout type="info" title="Covenants for Security">
        <p>
          Vaults use CTV's covenant capability to pre-commit funds to specific spending
          paths, creating a security model that's resistant to key compromise.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Vault Problem</h3>

      <p className="mb-4">
        Traditional Bitcoin custody has a fundamental tension:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-r border-dark-700 pr-4">
            <p className="text-rose-400 font-bold mb-2">Hot Wallet Risk</p>
            <p className="text-sm text-dark-300">
              Keys online for quick access. Attacker with key access can steal instantly.
            </p>
          </div>
          <div className="pl-4">
            <p className="text-amber-400 font-bold mb-2">Cold Storage Trade-off</p>
            <p className="text-sm text-dark-300">
              Keys offline for security. Difficult to access when needed, still vulnerable
              when signing.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vault Architecture</h3>

      <Definition title="Bitcoin Vault">
        <p>
          A smart contract construction where funds can only be spent through a two-step
          process: first to an intermediate "unvaulting" state, then to the final
          destination after a time delay. This delay allows the owner to recover funds
          if the unvaulting was unauthorized.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Vault spending paths:</p>
        <p className="text-dark-300">Vault UTXO</p>
        <p className="text-dark-300 ml-4">├─ Unvault tx (triggers timelock)</p>
        <p className="text-dark-300 ml-8">├─ Withdraw tx (after delay)</p>
        <p className="text-dark-300 ml-8">└─ Recovery tx (anytime, to cold storage)</p>
        <p className="text-dark-500 mt-3">
          Recovery path allows stopping theft during delay period
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">CTV-Based Vault</h3>

      <Example title="Simple CTV Vault">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Vault script:</p>
            <p className="text-dark-300">&lt;unvault_template_hash&gt; OP_CTV</p>
            <p className="text-dark-500 mt-2">
              Funds can ONLY go to pre-defined unvault output
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Unvault output script:</p>
            <p className="text-dark-300">OP_IF</p>
            <p className="text-dark-300 ml-4">&lt;delay&gt; OP_CSV &lt;hot_key&gt; OP_CHECKSIG</p>
            <p className="text-dark-300">OP_ELSE</p>
            <p className="text-dark-300 ml-4">&lt;recovery_key&gt; OP_CHECKSIG</p>
            <p className="text-dark-300">OP_ENDIF</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Vault Flow</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <div>
              <p className="text-dark-300 font-bold">Setup</p>
              <p className="text-sm text-dark-400">
                Create vault output with CTV committing to unvault tx
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <div>
              <p className="text-dark-300 font-bold">Initiate Withdrawal</p>
              <p className="text-sm text-dark-400">
                Broadcast unvault tx, starting the timelock
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <div>
              <p className="text-dark-300 font-bold">Monitoring Period</p>
              <p className="text-sm text-dark-400">
                Watch for unexpected unvaulting (e.g., 1 week delay)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4a.</span>
            <div>
              <p className="text-dark-300 font-bold">Complete Withdrawal</p>
              <p className="text-sm text-dark-400">
                After delay, withdraw to destination address
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-rose-400 font-bold">4b.</span>
            <div>
              <p className="text-dark-300 font-bold">Recovery (if theft)</p>
              <p className="text-sm text-dark-400">
                Immediately sweep to recovery address using cold key
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Properties</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Protected Against</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Instant theft (delay gives time to react)</li>
            <li>Hot key compromise alone</li>
            <li>Coercion without cold key</li>
            <li>Undetected key leakage</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Requires</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Monitoring for unvault txs</li>
            <li>Secure recovery key (cold)</li>
            <li>Ability to broadcast recovery tx</li>
            <li>Time to respond during delay</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Watchtower Integration</h3>

      <Callout type="info" title="Vault Watchtowers">
        <p>
          Watchtowers can monitor the blockchain for unauthorized unvault transactions
          and automatically broadcast recovery transactions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Only need to store recovery transaction</li>
          <li>Can't steal funds (recovery goes to your cold storage)</li>
          <li>Multiple watchtowers for redundancy</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advanced Vault Patterns</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Tiered vault with rate limiting:</p>
        <p className="text-dark-300">Vault (100 BTC total)</p>
        <p className="text-dark-300 ml-4">├─ Unvault tx commits to:</p>
        <p className="text-dark-300 ml-8">├─ 1 BTC to withdrawal (1 day delay)</p>
        <p className="text-dark-300 ml-8">└─ 99 BTC back to new vault</p>
        <p className="text-dark-500 mt-2">
          Maximum 1 BTC per day even with hot key compromised
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison with Multisig</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Aspect</th>
              <th className="text-left py-3 text-dark-300">Multisig</th>
              <th className="text-left py-3 text-dark-300">Vault</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Theft protection</td>
              <td>Need multiple keys</td>
              <td className="text-emerald-400">Time delay + monitoring</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Key loss risk</td>
              <td>Lose threshold = lost funds</td>
              <td className="text-amber-400">Still need both keys</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Operational complexity</td>
              <td>Coordinate signers</td>
              <td>Monitor + wait</td>
            </tr>
            <tr>
              <td className="py-3">Single-user friendly</td>
              <td>Awkward (same person, multiple keys)</td>
              <td className="text-emerald-400">Designed for it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Self-Custody Revolution">
        <p>
          CTV-based vaults represent a significant advancement in Bitcoin self-custody.
          By adding time as a security dimension, vaults provide protection against key
          compromise that was previously impossible without trusted third parties—making
          secure self-custody accessible to everyone.
        </p>
      </Callout>
    </LessonLayout>
  );
}
