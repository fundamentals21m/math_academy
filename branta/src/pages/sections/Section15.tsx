import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Desktop Application</h2>

      <p className="mb-4">
        Branta Core is a cross-platform desktop application that helps prevent address swap
        attacks by monitoring your clipboard for Bitcoin and Nostr-related content. It provides
        real-time verification without requiring integration into specific wallets or services.
      </p>

      <Definition title="Branta Core">
        A desktop application that monitors your system clipboard for Bitcoin addresses and
        Lightning invoices. When it detects relevant content, it can verify against Branta's
        database and alert you to potential address swaps.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <p className="mb-4">
        Branta Core operates in the background on your computer:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Clipboard monitoring</strong> - Watches for Bitcoin addresses and Lightning invoices</li>
        <li><strong>Detection</strong> - Recognizes various Bitcoin address formats</li>
        <li><strong>Verification</strong> - Queries Branta's API to check registration</li>
        <li><strong>Notification</strong> - Alerts you to verification status</li>
      </ol>

      <Example title="Detection and Alert Flow">
        <div className="space-y-3">
          <div className="bg-dark-800 p-3 rounded flex items-center space-x-3">
            <span className="text-2xl">📋</span>
            <div>
              <p className="text-dark-200">Address copied to clipboard</p>
              <p className="font-mono text-sm text-dark-400">bc1qar0srrr7xfkvy5l...</p>
            </div>
          </div>
          <div className="text-center text-dark-400">↓</div>
          <div className="bg-dark-800 p-3 rounded flex items-center space-x-3">
            <span className="text-2xl">🔍</span>
            <div>
              <p className="text-dark-200">Branta Core detects and verifies</p>
              <p className="text-sm text-dark-400">Querying Branta API...</p>
            </div>
          </div>
          <div className="text-center text-dark-400">↓</div>
          <div className="bg-green-900/30 p-3 rounded flex items-center space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="text-green-400">Verified: Example Merchant</p>
              <p className="text-sm text-dark-400">This address is registered with Branta</p>
            </div>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Installation</h3>

      <p className="mb-4">
        Branta Core is available for Windows, with macOS and Linux support planned:
      </p>

      <Example title="System Requirements">
        <ul className="list-disc list-inside space-y-1">
          <li>Node.js 22 or higher</li>
          <li>npm 10 or higher</li>
          <li>Windows (macOS and Linux coming soon)</li>
        </ul>
      </Example>

      <Example title="Installation from Source">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`# Clone the repository
git clone https://github.com/BrantaOps/core.git
cd core

# Install dependencies
npm install

# Run the application
# Terminal 1: Angular frontend
npm run ng:serve

# Terminal 2: Electron backend
npm start`}
        </pre>
      </Example>

      <p className="mb-4">
        Pre-built binaries are also available from the GitHub releases page.
      </p>

      <Callout type="warning" title="Pre-Release Software">
        Branta Core is currently pre-release software and may contain bugs or incomplete
        features. Use at your own risk. Feedback and contributions are welcome!
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Features</h3>

      <Definition title="Clipboard Monitoring">
        Continuously monitors your clipboard for Bitcoin addresses (all formats), Lightning
        invoices, and Nostr-related content. Detection happens automatically whenever you
        copy relevant text.
      </Definition>

      <Definition title="Automatic Verification">
        When a supported format is detected, Branta Core automatically queries the Branta
        API to check if the address is registered. Results are displayed in real-time.
      </Definition>

      <Definition title="Desktop Notifications">
        Verification results are shown as native desktop notifications. You'll see
        whether an address is verified, unverified, or potentially suspicious.
      </Definition>

      <Definition title="History Log">
        Maintains a history of verified addresses so you can review past checks. Useful
        for auditing your transaction history.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <Example title="Protecting Wallet Transactions">
        <p className="mb-2">
          Before pasting an address into your wallet, Branta Core verifies it. If the
          address doesn't match what you expect, you're warned before you can accidentally
          send to the wrong destination.
        </p>
      </Example>

      <Example title="Detecting Clipboard Hijacking">
        <p className="mb-2">
          If malware on your system is replacing addresses in your clipboard, Branta Core
          will detect that the pasted address differs from what was originally copied and
          alert you to the discrepancy.
        </p>
      </Example>

      <Example title="Verifying Business Payments">
        <p className="mb-2">
          When paying invoices, copy the address and let Branta Core verify it belongs to
          the expected business before completing the transaction.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Architecture</h3>

      <p className="mb-4">
        Branta Core is built using modern web technologies:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Electron</strong> - Cross-platform desktop framework</li>
        <li><strong>Angular</strong> - Frontend UI framework</li>
        <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
        <li><strong>Native APIs</strong> - System clipboard and notification access</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Considerations</h3>

      <Callout type="info" title="What Branta Core Accesses">
        <ul className="list-disc list-inside space-y-1">
          <li>Clipboard content (only when it contains Bitcoin-related data)</li>
          <li>Network access to query Branta API</li>
          <li>Desktop notification system</li>
        </ul>
      </Callout>

      <p className="mb-4">
        Important privacy notes:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Only Bitcoin-related clipboard content is processed</li>
        <li>Addresses you verify are sent to Branta's servers</li>
        <li>No personal data beyond addresses is collected</li>
        <li>Application is open source—you can audit the code</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Contributing</h3>

      <p className="mb-4">
        Branta Core is open source and welcomes contributions:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Report bugs via GitHub Issues</li>
        <li>Submit feature requests</li>
        <li>Contribute code via Pull Requests</li>
        <li>Help with macOS and Linux packaging</li>
      </ul>

      <Example title="Development Setup">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`# Clone and setup
git clone https://github.com/BrantaOps/core.git
cd core
npm install

# Development mode (hot reload)
npm run ng:serve  # In terminal 1
npm start         # In terminal 2

# Build for distribution
npm run build
npm run package`}
        </pre>
      </Example>

      <Callout type="success" title="Always-On Protection">
        With Branta Core running in the background, every Bitcoin address you copy is
        automatically checked. It's like having a security guard watching over your
        transactions.
      </Callout>
    </LessonLayout>
  );
}
