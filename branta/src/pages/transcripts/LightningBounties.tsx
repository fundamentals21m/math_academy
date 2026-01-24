import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function LightningBounties() {
  return (
    <TranscriptLayout transcriptId="lightning-bounties">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Lightning Bounties uses Branta to secure BOLT-11 invoice deposits</li>
          <li>Users can verify payments before depositing bounty funds</li>
          <li>The integration demonstrates real-world Guardrail usage</li>
          <li>Partnership formed at TABConf 2024 in Atlanta</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is Lightning Bounties?</h3>

      <p className="mb-4">
        Lightning Bounties is an innovative platform that connects open-source projects with
        developers through Bitcoin-based incentives:
      </p>

      <Definition title="Lightning Bounties">
        <p>
          A platform that enables open-source projects on GitHub to post bounties in Bitcoin.
          When a developer completes an accepted solution, they receive instant payment via
          the Lightning Network. The platform won the MIT Hackathon in early 2024.
        </p>
      </Definition>

      <Example title="How It Works">
        <ol className="list-decimal list-inside space-y-2">
          <li>Project owner links a GitHub issue to Lightning Bounties</li>
          <li>Owner deposits satoshis via BOLT-11 invoice to fund the bounty</li>
          <li>Developers work on solving the issue</li>
          <li>When a solution is accepted, payment is released instantly</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Security Challenge</h3>

      <p className="mb-4">
        With real Bitcoin flowing through the platform, security is paramount:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          When project owners deposit bounty funds, they need confidence that their payment is
          going to Lightning Bounties—not to an attacker who has compromised their browser or
          clipboard.
        </p>
      </blockquote>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
          <p className="text-red-400 font-bold mb-2">Risk Without Verification</p>
          <p className="text-sm text-dark-300">
            A compromised browser extension could replace the BOLT-11 invoice with an
            attacker's invoice. Funds would be lost with no recourse.
          </p>
        </div>
        <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
          <p className="text-green-400 font-bold mb-2">Protected by Guardrail</p>
          <p className="text-sm text-dark-300">
            Users can verify the invoice is registered to Lightning Bounties before
            paying. Mismatches are flagged as suspicious.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Integration</h3>

      <p className="mb-4">
        Branta's Guardrail provides verification for BOLT-11 deposits:
      </p>

      <Example title="Verification Flow">
        <div className="space-y-3">
          <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3">
            <span className="text-amber-400 font-bold">1</span>
            <p className="text-sm text-dark-300">
              Lightning Bounties generates a BOLT-11 invoice for the bounty deposit
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3">
            <span className="text-amber-400 font-bold">2</span>
            <p className="text-sm text-dark-300">
              Invoice is registered with Branta's Guardrail (TTL matches invoice expiry)
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3">
            <span className="text-amber-400 font-bold">3</span>
            <p className="text-sm text-dark-300">
              User sees deposit invoice and can verify via Branta before paying
            </p>
          </div>
          <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3">
            <span className="text-amber-400 font-bold">4</span>
            <p className="text-sm text-dark-300">
              If verified, user pays with confidence. If not registered, warning displayed.
            </p>
          </div>
        </div>
      </Example>

      <Callout type="info" title="Any Device Verification">
        Users can verify the invoice from any internet-connected device—even a separate
        phone or computer. This provides an additional layer of security against device
        compromise.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Partnership Origins</h3>

      <p className="mb-4">
        The collaboration began at TABConf 2024:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          At TABConf 2024, the Lightning Bounties team connected with Branta. The teams
          discovered a natural alignment—Lightning Bounties needed secure payment verification,
          and Branta provided exactly that capability.
        </p>
      </blockquote>

      <Example title="TABConf 2024 Milestone">
        <p className="mb-2">
          Lightning Bounties became the first company to adopt pre-payment verification
          via Guardrail at TABConf in Atlanta, Georgia—establishing a new benchmark for
          responsible Bitcoin transactions.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Matters</h3>

      <p className="mb-4">
        The integration demonstrates Guardrail's practical value:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Real-World Usage</p>
          <p className="text-sm text-dark-300">
            Not a theoretical security improvement—actual users verifying actual payments
            before real funds are sent.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Lightning Native</p>
          <p className="text-sm text-dark-300">
            Demonstrates that Guardrail works seamlessly with Lightning Network invoices,
            not just on-chain addresses.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Open Source Support</p>
          <p className="text-sm text-dark-300">
            Helps secure a platform that supports the broader open-source ecosystem
            with Bitcoin payments.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Global Scale</h3>

      <p className="mb-4">
        Branta supports Lightning Bounties as the platform scales:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          Thousands of satoshis have already circulated through the Lightning Bounties system,
          establishing foundations for an open-source compensation marketplace. Branta's
          verification ensures this growth happens safely.
        </p>
      </blockquote>

      <Callout type="success" title="Key Insight">
        The Lightning Bounties integration shows how pre-payment verification can be
        seamlessly added to existing Bitcoin applications, providing security without
        disrupting user experience or requiring custody of funds.
      </Callout>
    </TranscriptLayout>
  );
}
