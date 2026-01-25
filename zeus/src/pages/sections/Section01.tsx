import { LessonLayout } from '@/components/layout';
import { Definition, Theorem } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Bitcoin Fundamentals</h2>

      <p className="mb-4">
        Before diving into Zeus, it's essential to understand how Bitcoin works at a fundamental level.
        Bitcoin is a decentralized digital currency that operates without banks or intermediaries,
        using a technology called blockchain.
      </p>

      <Definition title="Blockchain">
        A distributed ledger that records all Bitcoin transactions across thousands of computers worldwide.
        Each block contains a list of transactions and is cryptographically linked to the previous block,
        forming an immutable chain.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin Units</h3>

      <p className="mb-4">
        Bitcoin can be divided into smaller units. The smallest unit is called a <strong>satoshi</strong> (sat),
        named after Bitcoin's creator, Satoshi Nakamoto.
      </p>

      <Theorem title="Satoshi Conversion">
        <MathBlock>{`1 \\text{ BTC} = 100{,}000{,}000 \\text{ satoshis}`}</MathBlock>
        <p className="mt-2 text-sm">
          This means 1 satoshi = <InlineMath>{'10^{-8}'}</InlineMath> BTC, or 0.00000001 BTC.
        </p>
      </Theorem>

      <p className="mb-4 mt-4">
        In Zeus and most Lightning wallets, amounts are typically displayed in satoshis because
        Lightning payments are often small - sometimes just a few sats for micropayments.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">UTXOs: The Building Blocks</h3>

      <Definition title="UTXO (Unspent Transaction Output)">
        Bitcoin doesn't track "account balances" like a bank. Instead, it tracks individual chunks of bitcoin
        called UTXOs. Your wallet balance is the sum of all UTXOs you can spend. When you make a payment,
        you consume one or more UTXOs and create new ones.
      </Definition>

      <p className="mb-4 mt-4">
        Think of UTXOs like physical bills. If you have a 50,000 sat UTXO and want to pay 30,000 sats,
        you must "break" the 50,000 sat UTXO, creating:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>30,000 sats to the recipient (a new UTXO for them)</li>
        <li>~19,800 sats back to yourself as "change" (a new UTXO for you)</li>
        <li>~200 sats as a transaction fee to miners</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">On-Chain Transactions</h3>

      <Definition title="On-Chain Transaction">
        A Bitcoin transaction that is broadcast to the network and recorded on the blockchain.
        On-chain transactions require confirmation by miners and typically take 10-60 minutes
        for the first confirmation.
      </Definition>

      <p className="mb-4 mt-4">
        On-chain transactions have fees that vary based on network congestion. The fee is typically
        measured in satoshis per virtual byte (sat/vB). A typical transaction is 140-250 vB.
      </p>

      <MathBlock>{`\\text{Total Fee} = \\text{Fee Rate (sat/vB)} \\times \\text{Transaction Size (vB)}`}</MathBlock>

      <Callout type="warning" title="Fee Considerations">
        During high network congestion, on-chain fees can become expensive. This is one reason the
        Lightning Network was created - to enable cheap, instant payments that settle on-chain later.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Private Keys and Addresses</h3>

      <Definition title="Private Key">
        A secret 256-bit number that gives you control over your bitcoin. Anyone with your private key
        can spend your coins. Private keys should never be shared or stored online.
      </Definition>

      <Definition title="Bitcoin Address">
        A public identifier (like a bank account number) where others can send you bitcoin.
        Addresses are derived from your public key, which is mathematically derived from your private key.
        It's safe to share addresses publicly.
      </Definition>

      <p className="mb-4 mt-4">
        The relationship between keys and addresses forms a one-way function:
      </p>

      <MathBlock>{`\\text{Private Key} \\xrightarrow{\\text{ECDSA}} \\text{Public Key} \\xrightarrow{\\text{Hash}} \\text{Address}`}</MathBlock>

      <Callout type="info" title="Key Insight">
        You can generate an address from a private key, but you cannot reverse the process.
        This cryptographic property is what secures Bitcoin.
      </Callout>
    </LessonLayout>
  );
}
