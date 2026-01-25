import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-31: Pong Message</h2>

      <p className="mb-4">
        BIP-31 introduced the pong message as a response to ping, enabling nodes to test
        connection liveness and measure latency. This simple addition significantly improved
        network reliability and peer management.
      </p>

      <Callout type="info" title="Connection Health">
        <p>
          Before BIP-31, nodes had no reliable way to test if a peer was responsive.
          Connections could become stale without detection, wasting resources.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Without pong messages:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>No way to measure connection latency</li>
          <li>Stale connections not detected until data transfer fails</li>
          <li>Resources wasted on unresponsive peers</li>
          <li>Difficulty distinguishing slow from dead connections</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Ping/Pong Protocol</h3>

      <Definition title="Ping/Pong Messages">
        <p>
          A ping message contains a random nonce. The peer responds with a pong containing
          the same nonce. Matching nonces prove the response is for that specific ping.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Ping message:</p>
        <p className="text-dark-300">command: "ping"</p>
        <p className="text-amber-400">nonce: 0x0102030405060708 (random 8 bytes)</p>
        <p className="text-dark-400 mt-4 mb-2"># Pong response:</p>
        <p className="text-dark-300">command: "pong"</p>
        <p className="text-amber-400">nonce: 0x0102030405060708 (same as ping)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Message Flow</h3>

      <Example title="Ping/Pong Exchange">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Time: 0ms</p>
            <p className="text-dark-300">Node A → Node B: ping(nonce=12345)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Time: 50ms</p>
            <p className="text-dark-300">Node B → Node A: pong(nonce=12345)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Result:</p>
            <p className="text-emerald-400">Round-trip latency: 50ms</p>
            <p className="text-emerald-400">Connection: alive</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Latency Measurement</h3>

      <p className="mb-4">
        Ping/pong enables accurate latency measurement:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Round-trip time:</strong> Measure time from ping sent to pong received
          </li>
          <li>
            <strong>Network distance:</strong> Estimate peer geographic/network proximity
          </li>
          <li>
            <strong>Congestion detection:</strong> Monitor latency changes over time
          </li>
          <li>
            <strong>Peer selection:</strong> Prefer lower-latency peers for time-sensitive data
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Timeout Handling</h3>

      <p className="mb-4">
        Nodes disconnect peers that don't respond to pings:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bitcoin Core default behavior:</p>
        <p className="text-dark-300">Send ping every ~2 minutes (quiet periods)</p>
        <p className="text-dark-300">Timeout: 20 minutes without any message</p>
        <p className="text-dark-300">If pong not received for 20+ minutes → disconnect</p>
        <p className="text-dark-500 mt-3">
          Ensures connections are actually usable
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why the Nonce?</h3>

      <Callout type="info" title="Nonce Purpose">
        <p>
          The nonce ensures you're measuring the right response:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Multiple pings can be in-flight simultaneously</li>
          <li>Match pong to specific ping for accurate timing</li>
          <li>Detect if peer responds to wrong ping (implementation bug)</li>
          <li>Prevent replay attacks in latency measurements</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Version</h3>

      <p className="mb-4">
        BIP-31 added pong in protocol version 60001:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Before 60001</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Ping message existed (empty)</li>
            <li>No response expected</li>
            <li>Limited utility</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Protocol 60001+</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Ping includes nonce</li>
            <li>Pong response with same nonce</li>
            <li>Full liveness testing</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation</h3>

      <Example title="Simple Ping/Pong Logic">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">Node behavior:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-emerald-400"># On receiving ping:</p>
            <p className="text-dark-300">if msg.command == "ping":</p>
            <p className="text-dark-500 ml-4">send pong(nonce=msg.nonce)</p>
            <p className="text-emerald-400 mt-2"># On sending ping:</p>
            <p className="text-dark-300">nonce = random_bytes(8)</p>
            <p className="text-dark-300">ping_sent_time[nonce] = now()</p>
            <p className="text-dark-300">send ping(nonce)</p>
            <p className="text-emerald-400 mt-2"># On receiving pong:</p>
            <p className="text-dark-300">latency = now() - ping_sent_time[msg.nonce]</p>
          </div>
        </div>
      </Example>

      <Callout type="success" title="Simple but Essential">
        <p>
          BIP-31 is one of the simplest BIPs—just adding a response message—but it's
          essential for network health. Every modern Bitcoin implementation uses ping/pong
          for connection management, making the network more robust and efficient.
        </p>
      </Callout>
    </LessonLayout>
  );
}
