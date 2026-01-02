import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section12Quiz } from '@/data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Elliptic Curve Cryptography</h2>

      <p>
        Elliptic Curve Cryptography (ECC) is modern cryptography's secret weapon. It provides 
        the same security as RSA but with dramatically smaller keys—a 256-bit ECC key is 
        roughly equivalent to a 3072-bit RSA key!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">RSA Key Sizes</h3>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>1024 bits → 80-bit security</li>
            <li>2048 bits → 112-bit security</li>
            <li className="text-amber-400">3072 bits → 128-bit security</li>
            <li>7680 bits → 192-bit security</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">ECC Key Sizes</h3>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>160 bits → 80-bit security</li>
            <li>224 bits → 112-bit security</li>
            <li className="text-emerald-400">256 bits → 128-bit security</li>
            <li>384 bits → 192-bit security</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Why Smaller is Better:</strong> Smaller keys mean faster computations, 
        less bandwidth, and lower power consumption—critical for mobile devices, IoT, 
        and embedded systems.
      </Callout>

      <h2>What is an Elliptic Curve?</h2>

      <Definition title="Elliptic Curve">
        <p>
          An elliptic curve over a finite field <InlineMath>{`\\mathbb{Z}_p`}</InlineMath> is the set of
          points <InlineMath>{`(x, y)`}</InlineMath> satisfying:
        </p>
        <MathBlock>{`y^2 \\equiv x^3 + ax + b \\pmod{p}`}</MathBlock>
        <p className="mt-2">
          along with a special "point at infinity" <InlineMath>{`\\mathcal{O}`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          The curve must satisfy <InlineMath>{`4a^3 + 27b^2 \\neq 0`}</InlineMath> (ensures no singularities).
        </p>
      </Definition>

      <p>
        Over the real numbers, these curves look like smooth curves. But in cryptography, 
        we work over finite fields, where the "curve" is actually a scattered set of points.
      </p>

      <h2>Point Addition</h2>

      <p>
        The magic of elliptic curves is that points on the curve form a <strong>group</strong> under 
        a special addition operation:
      </p>

      <Definition title="Elliptic Curve Point Addition">
        <p>
          Given points <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> on the curve:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Draw a line through <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath></li>
          <li>This line intersects the curve at a third point <InlineMath>R</InlineMath></li>
          <li>Reflect <InlineMath>R</InlineMath> across the x-axis to get <InlineMath>P + Q</InlineMath></li>
        </ol>
        <p className="mt-3 text-dark-400">
          When <InlineMath>P = Q</InlineMath>, we use the tangent line at <InlineMath>P</InlineMath> (point doubling).
        </p>
      </Definition>

      <Example title="Addition Formulas">
        <p>For points <InlineMath>P = (x_1, y_1)</InlineMath> and <InlineMath>Q = (x_2, y_2)</InlineMath>:</p>
        
        <div className="bg-dark-900/50 rounded-lg p-4 mt-3 space-y-3">
          <div>
            <div className="text-dark-400 text-sm mb-1">Slope (when P ≠ Q):</div>
            <MathBlock>{`\\lambda = \\frac{y_2 - y_1}{x_2 - x_1} \\mod p`}</MathBlock>
          </div>
          <div>
            <div className="text-dark-400 text-sm mb-1">Slope (when P = Q, point doubling):</div>
            <MathBlock>{`\\lambda = \\frac{3x_1^2 + a}{2y_1} \\mod p`}</MathBlock>
          </div>
          <div>
            <div className="text-dark-400 text-sm mb-1">Result P + Q = (x₃, y₃):</div>
            <MathBlock>{`x_3 = \\lambda^2 - x_1 - x_2 \\mod p`}</MathBlock>
            <MathBlock>{`y_3 = \\lambda(x_1 - x_3) - y_1 \\mod p`}</MathBlock>
          </div>
        </div>
      </Example>

      <h2>Scalar Multiplication</h2>

      <p>
        The core operation in ECC is <strong>scalar multiplication</strong>: given a point <InlineMath>P</InlineMath> and 
        an integer <InlineMath>n</InlineMath>, compute:
      </p>

      <MathBlock>{`nP = \\underbrace{P + P + \\cdots + P}_{n \\text{ times}}`}</MathBlock>

      <p>
        Using the "double-and-add" algorithm (similar to square-and-multiply), this is 
        very efficient—even for huge values of <InlineMath>n</InlineMath>.
      </p>

      <h2>The Elliptic Curve Discrete Log Problem</h2>

      <Theorem title="ECDLP Hardness">
        <p>
          Given a base point <InlineMath>G</InlineMath> and a point <InlineMath>Q = nG</InlineMath>, finding the 
          scalar <InlineMath>n</InlineMath> is computationally infeasible for properly chosen curves.
        </p>
        <MathBlock>{`\\text{Given } G \\text{ and } Q = nG\\text{, find } n \\text{ (hard!)}`}</MathBlock>
      </Theorem>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Easy Direction</h3>
          <p className="text-dark-300 mb-2">Computing <InlineMath>Q = nG</InlineMath>:</p>
          <p className="text-dark-400 text-sm">
            Use double-and-add algorithm. Takes <InlineMath>{`O(\\log n)`}</InlineMath> point operations.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Hard Direction</h3>
          <p className="text-dark-300 mb-2">Finding <InlineMath>n</InlineMath> given <InlineMath>G</InlineMath> and <InlineMath>Q</InlineMath>:</p>
          <p className="text-dark-400 text-sm">
            Best known algorithms are <InlineMath>{`O(\\sqrt{n})`}</InlineMath>. For 256-bit curves, this 
            means ~2¹²⁸ operations.
          </p>
        </div>
      </div>

      <h2>Elliptic Curve Diffie-Hellman (ECDH)</h2>

      <p>
        ECDH works just like regular Diffie-Hellman, but with elliptic curve operations:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Public Parameters</h3>
          <p className="text-dark-300">
            Curve parameters <InlineMath>(p, a, b)</InlineMath> and generator point <InlineMath>G</InlineMath>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Alice</h3>
            <p className="text-dark-300 text-sm">
              Picks secret <InlineMath>a</InlineMath>, sends <InlineMath>A = aG</InlineMath>
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-red-500/30">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Bob</h3>
            <p className="text-dark-300 text-sm">
              Picks secret <InlineMath>b</InlineMath>, sends <InlineMath>B = bG</InlineMath>
            </p>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Shared Secret</h3>
          <p className="text-dark-300">
            Alice computes <InlineMath>aB = a(bG) = abG</InlineMath><br />
            Bob computes <InlineMath>bA = b(aG) = abG</InlineMath><br />
            Both get the same point!
          </p>
        </div>
      </div>

      <h2>Bitcoin and secp256k1</h2>

      <Callout type="info">
        <strong>Real-World Curve:</strong> Bitcoin uses the secp256k1 curve, defined by:
        <MathBlock>{`y^2 = x^3 + 7 \\pmod{p}`}</MathBlock>
        where <InlineMath>{`p = 2^{256} - 2^{32} - 977`}</InlineMath>
      </Callout>

      <p>
        Every Bitcoin address is derived from an elliptic curve public key:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>
          <strong className="text-dark-100">Private key:</strong> A random 256-bit number <InlineMath>k</InlineMath>
        </li>
        <li>
          <strong className="text-dark-100">Public key:</strong> The point <InlineMath>K = kG</InlineMath>
        </li>
        <li>
          <strong className="text-dark-100">Address:</strong> Hash of the public key
        </li>
      </ul>

      <p>
        The ECDLP ensures that knowing <InlineMath>K</InlineMath> doesn't reveal <InlineMath>k</InlineMath>—your 
        bitcoins are safe as long as your private key remains secret.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Why secp256k1?</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Efficient implementation (special prime form)</li>
          <li>Well-studied and believed secure</li>
          <li>Parameters were chosen "verifiably at random" (reduces trust concerns)</li>
          <li>256-bit security matches SHA-256 used elsewhere in Bitcoin</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Congratulations!</strong> You've now learned the mathematical foundations 
        of modern cryptography—from modular arithmetic to RSA, Diffie-Hellman, and elliptic 
        curves. These concepts protect trillions of dollars in transactions every day!
      </Callout>

      {/* TODO: Add elliptic curve visualization */}

      <SectionQuiz sectionId={12} questions={section12Quiz} title="Elliptic Curve Cryptography Quiz" />
    </LessonLayout>
  );
}
