import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Connecting to a Node</h2>

      <p className="mb-4">
        Zeus can connect to various Lightning implementations running on external hardware.
        This "remote node" mode gives you access to the full power of your node from anywhere
        in the world.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Supported Implementations</h3>

      <Definition title="LND (Lightning Network Daemon)">
        The most widely deployed Lightning implementation, developed by Lightning Labs.
        Zeus has the most complete support for LND, including all channel management and
        routing features.
      </Definition>

      <Definition title="Core Lightning (CLN)">
        Formerly c-lightning, this implementation is developed by Blockstream. Zeus supports
        CLN via its REST interface. Some advanced features may differ from LND.
      </Definition>

      <Definition title="LndHub">
        A custodial Lightning account system. While not true self-custody, some users
        connect to LndHub instances for convenience. Zeus supports this for compatibility.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connection Methods</h3>

      <p className="mb-4">
        Zeus supports several ways to connect to your node:
      </p>

      <Definition title="REST API">
        The standard way to connect to LND. Requires the node's REST address (usually port 8080)
        and a macaroon for authentication. This is the most common connection method.
      </Definition>

      <Definition title="Tor Hidden Service">
        Connect through the Tor network for privacy. Your node exposes a .onion address that
        Zeus can reach from anywhere without revealing your home IP address.
      </Definition>

      <Callout type="info" title="Tor Recommendation">
        Using Tor is recommended for remote connections. It provides privacy and works
        through NAT/firewalls without port forwarding.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Setting Up Connection</h3>

      <p className="mb-4">
        To connect Zeus to your node, you'll need:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Node Address:</strong> IP:port or .onion address</li>
        <li><strong>Macaroon:</strong> Authentication credential (admin.macaroon for full access)</li>
        <li><strong>TLS Certificate:</strong> For encrypted connections (optional with Tor)</li>
      </ol>

      <Definition title="Macaroon">
        A capability-based authentication token used by LND. Macaroons can be restricted to
        allow only certain actions (read-only, invoice-only, etc.). The admin macaroon grants
        full access to all node functions.
      </Definition>

      <Callout type="warning" title="Macaroon Security">
        Your admin macaroon gives full control over your node. Never share it or store it
        unencrypted. Treat it like a password to all your funds.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Node Package Integration</h3>

      <p className="mb-4">
        Many popular node packages have built-in Zeus connection support:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Umbrel:</strong> Generates connection URLs in the Lightning app</li>
        <li><strong>Start9:</strong> Embassy provides connection details automatically</li>
        <li><strong>RaspiBlitz:</strong> Offers Zeus connection through its menu</li>
        <li><strong>myNode:</strong> Provides connection strings in the interface</li>
        <li><strong>BTCPay Server:</strong> Has direct Zeus integration</li>
      </ul>

      <p className="mb-4">
        These packages often provide a QR code that Zeus can scan, automatically configuring
        all connection details.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Testing the Connection</h3>

      <p className="mb-4">
        After entering your connection details:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>Zeus will attempt to connect to your node</li>
        <li>On success, you'll see your node's alias and balance</li>
        <li>On failure, check your credentials and network connectivity</li>
      </ol>

      <Callout type="note" title="Troubleshooting">
        Common connection issues:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Tor not running or misconfigured</li>
          <li>Incorrect macaroon (wrong encoding or type)</li>
          <li>Firewall blocking the connection</li>
          <li>Node not fully synced or online</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multiple Nodes</h3>

      <p className="mb-4">
        Zeus allows you to save multiple node configurations and switch between them.
        This is useful if you:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Run separate nodes for different purposes</li>
        <li>Manage nodes for a business and personal use</li>
        <li>Want to test on testnet while also using mainnet</li>
      </ul>

      <Callout type="success" title="Connected!">
        Once connected, Zeus becomes a powerful remote control for your node, with access
        to all its features from your mobile device.
      </Callout>
    </LessonLayout>
  );
}
