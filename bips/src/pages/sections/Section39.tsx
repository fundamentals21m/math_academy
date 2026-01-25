import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Dealing with Malleability</h2>

      <p className="mb-4">
        BIP-62 was an ambitious attempt to eliminate transaction malleability in Bitcoin.
        While never fully activated, it cataloged the malleability vectors and influenced
        SegWit's design, which ultimately solved the problem more completely.
      </p>

      <Callout type="warning" title="Superseded by SegWit">
        <p>
          BIP-62 was withdrawn. SegWit (BIP-141) addresses malleability more comprehensively
          by moving signatures outside the transaction hash. However, BIP-62's analysis
          remains valuable for understanding the problem space.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is Malleability?</h3>

      <Definition title="Transaction Malleability">
        <p>
          A transaction is "malleable" if its txid can be changed without invalidating
          the transaction. This happens when components not covered by signatures
          (like the signatures themselves) can be modified while keeping the transaction valid.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Matters</h3>

      <p className="mb-4">
        Malleability causes serious problems:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Chained Transaction Breakage</p>
          <p className="text-sm text-dark-300">
            If TX_A is malleated before confirmation, any TX_B spending TX_A's output
            becomes invalid—TX_B references the wrong txid.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Lightning/Payment Channels</p>
          <p className="text-sm text-dark-300">
            Pre-signed refund transactions reference specific txids. If the funding
            transaction is malleated, the refunds become useless.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Exchange Fraud</p>
          <p className="text-sm text-dark-300">
            Attackers claimed withdrawals "failed" after malleating them. The exchange
            paid twice because they tracked by txid.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Malleability Vectors</h3>

      <p className="mb-4">
        BIP-62 identified numerous malleability sources:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Vector</th>
              <th className="text-left py-3 text-dark-300">Description</th>
              <th className="text-left py-3 text-dark-300">Fix</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Non-DER signatures</td>
              <td>Multiple valid encodings for same sig</td>
              <td>BIP-66 strict DER</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">High-S signatures</td>
              <td>Both S and -S are valid</td>
              <td>Low-S requirement</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">ScriptSig push sizes</td>
              <td>Multiple ways to push same data</td>
              <td>Minimal push encoding</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">CHECKMULTISIG dummy</td>
              <td>Dummy element can be any value</td>
              <td>BIP-147 NULLDUMMY</td>
            </tr>
            <tr>
              <td className="py-3">Sighash flags</td>
              <td>Non-signing parties can modify</td>
              <td>SegWit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-62 Proposals</h3>

      <Example title="Proposed Rules">
        <div className="space-y-2 text-dark-300">
          <p className="text-dark-400 mb-2">BIP-62 proposed these standardness rules:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Non-push operations in scriptSig forbidden</li>
            <li>Push operations must use minimal encoding</li>
            <li>Signature encoding must be strict DER</li>
            <li>Signature S values must be low (≤ n/2)</li>
            <li>CHECKMULTISIG dummy must be empty</li>
            <li>OP_IF/NOTIF arguments must be minimal</li>
            <li>No unnecessary stack elements</li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why BIP-62 Failed</h3>

      <p className="mb-4">
        BIP-62 was ultimately withdrawn for several reasons:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Incomplete:</strong> Third-party malleability couldn't be fully eliminated
            without protocol changes
          </li>
          <li>
            <strong>Complexity:</strong> Many rules, each addressing one vector—easy to miss some
          </li>
          <li>
            <strong>ANYONECANPAY:</strong> Signatures using this flag can't prevent scriptSig modifications
          </li>
          <li>
            <strong>SegWit superior:</strong> Moving signatures out of txid calculation solved the
            root problem elegantly
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">SegWit's Solution</h3>

      <p className="mb-4">
        SegWit eliminated malleability by fundamental redesign:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Legacy (Malleable)</p>
          <div className="text-sm text-dark-300 font-mono">
            <p>txid = hash(version + inputs + outputs + locktime)</p>
            <p className="text-dark-500 mt-1">inputs include signatures!</p>
          </div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">SegWit (Non-malleable)</p>
          <div className="text-sm text-dark-300 font-mono">
            <p>txid = hash(version + inputs + outputs + locktime)</p>
            <p className="text-emerald-400 mt-1">inputs have empty scriptSigs!</p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Partial Adoption">
        <p>
          Several BIP-62 rules were adopted independently:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>BIP-66:</strong> Strict DER signature encoding</li>
          <li><strong>BIP-147:</strong> NULLDUMMY for SegWit scripts</li>
          <li><strong>Policy:</strong> Low-S signatures required for relay</li>
        </ul>
      </Callout>

      <Callout type="success" title="Historical Significance">
        <p>
          While BIP-62 itself was never activated, its thorough analysis of malleability
          vectors was essential. It demonstrated why a comprehensive solution like SegWit
          was needed and influenced Bitcoin's security improvements for years.
        </p>
      </Callout>
    </LessonLayout>
  );
}
