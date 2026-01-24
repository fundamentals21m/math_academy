import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Supply Chain Compromises</h2>

      <p className="mb-4">
        Supply chain attacks target the software and services that Bitcoin applications depend on.
        Rather than attacking the end user directly, attackers compromise libraries, tools, or
        infrastructure that many applications use. A single successful supply chain attack can
        affect thousands of downstream users.
      </p>

      <Definition title="Supply Chain Attack">
        A cyberattack that targets the less-secure elements in the supply network, such as
        third-party vendors, open-source libraries, build systems, or distribution channels.
        The attack is then propagated to all users of the compromised component.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Software Supply Chain</h3>

      <p className="mb-4">
        Modern Bitcoin applications are built on layers of dependencies:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Operating systems</strong> - Windows, macOS, Linux</li>
        <li><strong>Programming languages</strong> - JavaScript, Python, Rust runtimes</li>
        <li><strong>Package managers</strong> - npm, pip, cargo packages</li>
        <li><strong>Libraries</strong> - Cryptographic, networking, UI components</li>
        <li><strong>Build tools</strong> - Compilers, bundlers, CI/CD systems</li>
        <li><strong>Distribution channels</strong> - App stores, CDNs, auto-update systems</li>
      </ul>

      <p className="mb-4">
        Each layer represents a potential attack vector. If any component in this chain is
        compromised, all applications using it become vulnerable.
      </p>

      <Callout type="warning" title="Scale of the Problem">
        A typical JavaScript web application may have hundreds or thousands of dependencies.
        A compromise in any of them could result in malicious code running in the final
        application, often without the developers' knowledge.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Supply Chain Attacks</h3>

      <Definition title="Dependency Confusion">
        Attackers publish malicious packages with names similar to internal or private packages.
        When developers accidentally install the public malicious version, the attacker's code
        runs in their application.
      </Definition>

      <Example title="Dependency Confusion Attack">
        <p className="mb-2">
          A company uses an internal package called <code>company-bitcoin-utils</code>. An
          attacker publishes a package with the same name to npm with a higher version number.
        </p>
        <p className="text-dark-400 mt-2">
          When developers run <code>npm install</code>, they may inadvertently install the
          malicious public version instead of their internal package.
        </p>
      </Example>

      <Definition title="Typosquatting">
        Publishing malicious packages with names that are common misspellings of popular packages.
        Developers who mistype a package name install the attacker's version.
      </Definition>

      <Example title="Typosquatting Examples">
        <div className="space-y-1 font-mono text-sm">
          <p><span className="text-green-400">Legitimate:</span> bitcoin-core</p>
          <p><span className="text-red-400">Typosquat:</span> bitcoincore, bitcoin_core, bitcoin-cor</p>
        </div>
      </Example>

      <Definition title="Compromised Maintainers">
        Attackers gain access to the accounts of maintainers of popular packages, either through
        credential theft, social engineering, or by taking over abandoned packages.
      </Definition>

      <Definition title="Build System Compromise">
        Attackers infiltrate CI/CD systems to inject malicious code during the build process.
        The source code looks clean, but the distributed binaries contain malware.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Notable Supply Chain Incidents</h3>

      <Example title="Event-Stream (2018)">
        <p className="mb-2">
          A popular npm package with millions of weekly downloads was compromised. The new
          maintainer added code that specifically targeted Bitcoin wallets, attempting to
          steal private keys from the Copay wallet application.
        </p>
        <p className="text-dark-400 mt-2">
          The attack went undetected for weeks because it only activated for specific targets.
        </p>
      </Example>

      <Example title="SolarWinds (2020)">
        <p className="mb-2">
          Attackers compromised the build system of SolarWinds, a major IT management software
          provider. Malicious updates were signed and distributed to thousands of organizations,
          including major corporations and government agencies.
        </p>
        <p className="text-dark-400 mt-2">
          This demonstrated how a single supply chain compromise can have massive downstream effects.
        </p>
      </Example>

      <Example title="Codecov (2021)">
        <p className="mb-2">
          A popular code coverage tool was compromised, allowing attackers to extract environment
          variables and secrets from CI/CD pipelines. Any project using Codecov potentially
          leaked their credentials.
        </p>
        <p className="text-dark-400 mt-2">
          Bitcoin-related projects using Codecov may have had API keys, wallet seeds, or other
          sensitive data exposed.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin-Specific Risks</h3>

      <p className="mb-4">
        Supply chain attacks on Bitcoin applications are particularly dangerous because:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Direct financial impact</strong> - Compromised code can steal funds immediately</li>
        <li><strong>Key extraction</strong> - Malware can exfiltrate private keys</li>
        <li><strong>Address replacement</strong> - Libraries generating addresses can substitute attacker addresses</li>
        <li><strong>Silent operation</strong> - Attacks can remain dormant until triggered</li>
      </ul>

      <Callout type="danger" title="The Cryptographic Library Risk">
        If a cryptographic library used for address generation is compromised, it could generate
        deterministically weak keys or addresses that the attacker can compute. Funds would appear
        secure until the attacker decides to sweep them all at once.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Branta Mitigates Supply Chain Risks</h3>

      <p className="mb-4">
        While Branta cannot prevent supply chain attacks, it adds a critical verification layer
        that limits their effectiveness:
      </p>

      <Example title="Defense Scenario">
        <p className="mb-2">
          A payment library is compromised to replace merchant addresses with attacker addresses.
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Compromised library generates payment page with attacker's address</li>
          <li>User sees the address and prepares to pay</li>
          <li>User queries Branta: "Is this address registered to MerchantCo?"</li>
          <li>Branta: "No, this address is not registered" or "Belongs to Unknown"</li>
          <li>User does not proceed with payment</li>
        </ol>
      </Example>

      <p className="mb-4">
        The key insight: supply chain attacks can compromise address generation and display,
        but they cannot retroactively register those addresses with Branta as belonging to
        legitimate businesses. The verification breaks the attack.
      </p>

      <Callout type="success" title="Independent Trust Anchor">
        Branta serves as an independent trust anchor that exists outside the supply chain
        of any particular application. Even if everything else is compromised, the verification
        against Branta's registration system remains reliable.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Best Practices</h3>

      <p className="mb-4">
        Combining Branta verification with good supply chain hygiene provides defense in depth:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Pin dependencies</strong> - Lock specific versions rather than accepting latest</li>
        <li><strong>Audit regularly</strong> - Review dependencies for suspicious changes</li>
        <li><strong>Use lockfiles</strong> - Ensure consistent installations across environments</li>
        <li><strong>Verify signatures</strong> - Check that packages are signed by expected maintainers</li>
        <li><strong>Always verify with Branta</strong> - Before any significant payment, query Branta</li>
      </ul>

      <p className="mb-4">
        For high-value transactions, consider using separate, minimal environments that have
        fewer dependencies and thus smaller attack surfaces.
      </p>
    </LessonLayout>
  );
}
