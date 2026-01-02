import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section11Quiz } from '@/data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Diffie-Hellman Key Exchange</h2>

      <p>
        In 1976, Whitfield Diffie and Martin Hellman solved one of cryptography's oldest 
        problems: how can two people create a shared secret while communicating only over 
        a public channel that anyone can observe?
      </p>

      <Callout type="info">
        <strong>The Key Exchange Problem:</strong> Alice and Bob want to communicate 
        securely, but Eve is listening to everything they say. How can Alice and Bob 
        agree on a secret key without Eve learning it?
      </Callout>

      <h2>The Paint Mixing Analogy</h2>

      <p>
        Imagine colors that are easy to mix but impossible to unmix:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <div className="w-12 h-12 rounded-lg bg-yellow-400"></div>
          <div className="text-dark-300">
            <strong className="text-dark-100">Public color:</strong> Alice and Bob agree on yellow. 
            Eve sees this.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-blue-500/30">
            <div className="w-12 h-12 rounded-lg bg-blue-500"></div>
            <div className="text-dark-300">
              <strong className="text-blue-400">Alice's secret:</strong> Blue. Only Alice knows.
            </div>
          </div>
          <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-red-500/30">
            <div className="w-12 h-12 rounded-lg bg-red-500"></div>
            <div className="text-dark-300">
              <strong className="text-red-400">Bob's secret:</strong> Red. Only Bob knows.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <div className="w-12 h-12 rounded-lg bg-green-500"></div>
            <div className="text-dark-300">
              <strong className="text-dark-100">Alice sends:</strong> Yellow + Blue = Green. Eve sees this.
            </div>
          </div>
          <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <div className="w-12 h-12 rounded-lg bg-orange-500"></div>
            <div className="text-dark-300">
              <strong className="text-dark-100">Bob sends:</strong> Yellow + Red = Orange. Eve sees this.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <div className="w-12 h-12 rounded-lg bg-amber-700"></div>
          <div className="text-dark-300">
            <strong className="text-emerald-400">Shared secret:</strong> Both mix to get Yellow + Blue + Red = Brown. 
            Eve cannot unmix the colors!
          </div>
        </div>
      </div>

      <h2>The Mathematical Protocol</h2>

      <Definition title="Diffie-Hellman Key Exchange">
        <p className="mb-3">
          Alice and Bob agree on public parameters: a large prime <InlineMath>p</InlineMath> and a 
          generator <InlineMath>g</InlineMath>.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Alice picks secret <InlineMath>{`a`}</InlineMath>, computes <InlineMath>{`A = g^a \\mod p`}</InlineMath>, sends <InlineMath>{`A`}</InlineMath> to Bob</li>
          <li>Bob picks secret <InlineMath>{`b`}</InlineMath>, computes <InlineMath>{`B = g^b \\mod p`}</InlineMath>, sends <InlineMath>{`B`}</InlineMath> to Alice</li>
          <li>Alice computes <InlineMath>{`s = B^a \\mod p = g^{ab} \\mod p`}</InlineMath></li>
          <li>Bob computes <InlineMath>{`s = A^b \\mod p = g^{ab} \\mod p`}</InlineMath></li>
        </ol>
        <p className="mt-3">
          Both now share the secret <InlineMath>{`s = g^{ab} \\mod p`}</InlineMath>!
        </p>
      </Definition>

      <Example title="Complete Key Exchange">
        <p>Let's walk through with small numbers: <InlineMath>p = 23</InlineMath>, <InlineMath>g = 5</InlineMath></p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-900/50 rounded-lg p-3 font-mono text-sm space-y-1 border border-blue-500/30">
            <div className="text-blue-400 font-semibold">Alice</div>
            <div>Secret: a = 6</div>
            <div>A = 5^6 mod 23</div>
            <div>A = 15625 mod 23</div>
            <div>A = <span className="text-blue-400">8</span> → sends to Bob</div>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3 font-mono text-sm space-y-1 border border-red-500/30">
            <div className="text-red-400 font-semibold">Bob</div>
            <div>Secret: b = 15</div>
            <div>B = 5^15 mod 23</div>
            <div>B = <span className="text-red-400">19</span> → sends to Alice</div>
          </div>
        </div>

        <div className="bg-dark-900/50 rounded-lg p-3 mt-3 font-mono text-sm border border-emerald-500/30">
          <div className="text-emerald-400 font-semibold">Shared Secret Computation</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <div className="text-dark-400">Alice computes:</div>
              <div>s = B^a mod 23</div>
              <div>s = 19^6 mod 23 = <span className="text-emerald-400">2</span></div>
            </div>
            <div>
              <div className="text-dark-400">Bob computes:</div>
              <div>s = A^b mod 23</div>
              <div>s = 8^15 mod 23 = <span className="text-emerald-400">2</span></div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-emerald-400">
          Both compute the same shared secret: <InlineMath>s = 2</InlineMath>
        </p>
      </Example>

      <h2>What Does Eve See?</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-dark-100 mb-3">Eve's View of the Exchange</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="px-3 py-2 text-left text-dark-400">Information</th>
              <th className="px-3 py-2 text-left text-dark-400">Value</th>
              <th className="px-3 py-2 text-left text-dark-400">Eve Knows?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Public prime <InlineMath>p</InlineMath></td>
              <td className="px-3 py-2 font-mono">23</td>
              <td className="px-3 py-2 text-emerald-400">Yes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Generator <InlineMath>g</InlineMath></td>
              <td className="px-3 py-2 font-mono">5</td>
              <td className="px-3 py-2 text-emerald-400">Yes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Alice's public value <InlineMath>A</InlineMath></td>
              <td className="px-3 py-2 font-mono">8</td>
              <td className="px-3 py-2 text-emerald-400">Yes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Bob's public value <InlineMath>B</InlineMath></td>
              <td className="px-3 py-2 font-mono">19</td>
              <td className="px-3 py-2 text-emerald-400">Yes</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Alice's secret <InlineMath>a</InlineMath></td>
              <td className="px-3 py-2 font-mono">6</td>
              <td className="px-3 py-2 text-red-400">No</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">Bob's secret <InlineMath>b</InlineMath></td>
              <td className="px-3 py-2 font-mono">15</td>
              <td className="px-3 py-2 text-red-400">No</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Shared secret <InlineMath>s</InlineMath></td>
              <td className="px-3 py-2 font-mono">2</td>
              <td className="px-3 py-2 text-red-400">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Theorem title="Diffie-Hellman Security">
        <p>
          To find the shared secret <InlineMath>{`s = g^{ab}`}</InlineMath> from the public values <InlineMath>{`g^a`}</InlineMath> and <InlineMath>{`g^b`}</InlineMath>, 
          Eve would need to solve the <strong>Computational Diffie-Hellman (CDH) problem</strong>—which 
          is believed to be as hard as the discrete logarithm problem.
        </p>
      </Theorem>

      <h2>Man-in-the-Middle Attack</h2>

      <Callout type="danger">
        <strong>Critical Vulnerability:</strong> Diffie-Hellman by itself does not provide 
        authentication. If Eve can intercept and modify messages, she can perform a 
        "man-in-the-middle" attack.
      </Callout>

      <p>
        In this attack, Eve intercepts messages between Alice and Bob:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>Eve performs DH with Alice (pretending to be Bob)</li>
        <li>Eve performs DH with Bob (pretending to be Alice)</li>
        <li>Eve gets two different shared secrets</li>
        <li>Eve can decrypt Alice's messages, read them, and re-encrypt for Bob</li>
      </ul>

      <p>
        Solution: Combine Diffie-Hellman with authentication (digital signatures, certificates, etc.).
      </p>

      <Callout type="success">
        <strong>Real-World Usage:</strong> Diffie-Hellman is used in TLS (HTTPS), SSH, 
        VPNs, and many other protocols. The ephemeral variant (ECDHE) is preferred for 
        forward secrecy—even if long-term keys are compromised, past sessions remain secure.
      </Callout>

      {/* TODO: Add key exchange simulation visualization */}

      <SectionQuiz sectionId={11} questions={section11Quiz} title="Diffie-Hellman Quiz" />
    </LessonLayout>
  );
}
