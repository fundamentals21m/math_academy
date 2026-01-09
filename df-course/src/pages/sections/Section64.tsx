import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Straightedge and Compass Constructions</h2>
      <p>
        The ancient Greeks posed three famous geometric problems: squaring the circle, doubling
        the cube, and trisecting an arbitrary angle. For over two thousand years, mathematicians
        attempted these constructions using only straightedge and compass. Field theory finally
        proved these constructions impossible, demonstrating the power of algebra in geometry.
      </p>

      <Callout type="info">
        <strong>Historical Significance:</strong> The impossibility proofs are among the most
        celebrated applications of abstract algebra. They illustrate how algebraic structure
        can definitively answer geometric questions that resisted direct attack for millennia.
      </Callout>

      <h3>Constructible Numbers</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Constructible Numbers</h4>
        <p>
          A real number <InlineMath>\alpha</InlineMath> is <strong>constructible</strong> if,
          starting from two points distance 1 apart, we can construct a point at
          distance <InlineMath>|\alpha|</InlineMath> from the origin using only:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li>Drawing a line through two constructed points</li>
          <li>Drawing a circle centered at a constructed point passing through another</li>
          <li>Marking intersection points of lines and circles</li>
        </ul>
      </div>

      <h3>The Field of Constructible Numbers</h3>

      <p>
        The constructible numbers have a beautiful algebraic characterization:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Closure Properties</h4>
        <p>
          The set of constructible numbers forms a field. If <InlineMath>\alpha</InlineMath>
          and <InlineMath>\beta</InlineMath> are constructible, so are:
        </p>
        <MathBlock>{`\\alpha + \\beta, \\quad \\alpha - \\beta, \\quad \\alpha \\cdot \\beta, \\quad \\frac{\\alpha}{\\beta} \\text{ (if } \\beta \\neq 0\\text{)}`}</MathBlock>
        <p className="mt-3">
          Moreover, if <InlineMath>\alpha &gt; 0</InlineMath> is constructible,
          then <InlineMath>\sqrt{"{\\alpha}"}</InlineMath> is constructible.
        </p>
      </div>

      <h3>The Key Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Constructibility Criterion</h4>
        <p>
          A real number <InlineMath>\alpha</InlineMath> is constructible if and only if there
          exists a tower of field extensions:
        </p>
        <MathBlock>{`\\mathbb{Q} = F_0 \\subseteq F_1 \\subseteq F_2 \\subseteq \\cdots \\subseteq F_n`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>\alpha \in F_n</InlineMath> and each <InlineMath>[F_i:F_{"{i-1}"}] = 2</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Corollary</h4>
        <p>
          If <InlineMath>\alpha</InlineMath> is constructible, then <InlineMath>[\mathbb{"{Q}"}(\alpha):\mathbb{"{Q}"}]</InlineMath>
          is a power of 2.
        </p>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> The converse is not quite true: having degree a power of 2 is necessary
        but not sufficient for constructibility. The full characterization involves the Galois group.
      </Callout>

      <h3>The Three Classical Problems</h3>

      <h4>1. Doubling the Cube</h4>
      <p>
        Given a cube, construct another cube with twice the volume.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Impossibility Proof</p>
        <p className="mt-2">
          If the original cube has side 1, we need side <InlineMath>\sqrt[3]{"{2}"}</InlineMath>.
        </p>
        <p className="mt-2">
          The minimal polynomial of <InlineMath>\sqrt[3]{"{2}"}</InlineMath>
          over <InlineMath>\mathbb{"{Q}"}</InlineMath> is <InlineMath>x^3 - 2</InlineMath>,
          which is irreducible by Eisenstein.
        </p>
        <p className="mt-2">
          Thus <InlineMath>[\mathbb{"{Q}"}(\sqrt[3]{"{2}"}):\mathbb{"{Q}"}] = 3</InlineMath>,
          which is not a power of 2.
        </p>
        <p className="mt-2 text-red-400 font-semibold">
          Therefore, <InlineMath>\sqrt[3]{"{2}"}</InlineMath> is not constructible.
        </p>
      </div>

      <h4>2. Trisecting an Angle</h4>
      <p>
        Given an arbitrary angle, construct an angle one-third its measure.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Impossibility Proof (for 60 degrees)</p>
        <p className="mt-2">
          Consider trisecting <InlineMath>60°</InlineMath>. We need to construct <InlineMath>20°</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>\theta = 20° = \pi/9</InlineMath>. Using the identity <InlineMath>\cos(3\theta) = 4\cos^3(\theta) - 3\cos(\theta)</InlineMath>:
        </p>
        <MathBlock>{`\\cos(60°) = \\frac{1}{2} = 4\\cos^3(20°) - 3\\cos(20°)`}</MathBlock>
        <p className="mt-2">
          Let <InlineMath>\alpha = \cos(20°)</InlineMath>. Then <InlineMath>\alpha</InlineMath>
          satisfies <InlineMath>8\alpha^3 - 6\alpha - 1 = 0</InlineMath>.
        </p>
        <p className="mt-2">
          This cubic is irreducible over <InlineMath>\mathbb{"{Q}"}</InlineMath>
          (check: no rational roots), so <InlineMath>[\mathbb{"{Q}"}(\alpha):\mathbb{"{Q}"}] = 3</InlineMath>.
        </p>
        <p className="mt-2 text-red-400 font-semibold">
          Therefore, the 60 degree angle cannot be trisected.
        </p>
      </div>

      <Callout type="info">
        <strong>Important:</strong> Some angles CAN be trisected (e.g., 90 degrees). The impossibility
        is for arbitrary angles, and we prove it by exhibiting one specific angle that cannot be trisected.
      </Callout>

      <h4>3. Squaring the Circle</h4>
      <p>
        Given a circle, construct a square with the same area.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Impossibility Proof</p>
        <p className="mt-2">
          A circle of radius 1 has area <InlineMath>\pi</InlineMath>.
          We need a square of side <InlineMath>\sqrt{"{\\pi}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Lindemann proved in 1882 that <InlineMath>\pi</InlineMath> is transcendental
          over <InlineMath>\mathbb{"{Q}"}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>\pi</InlineMath> is not algebraic, neither is <InlineMath>\sqrt{"{\\pi}"}</InlineMath>.
        </p>
        <p className="mt-2 text-red-400 font-semibold">
          Therefore, the circle cannot be squared (with straightedge and compass).
        </p>
      </div>

      <h3>Constructible Regular Polygons</h3>

      <p>
        Which regular <InlineMath>n</InlineMath>-gons can be constructed?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Gauss-Wantzel Theorem</h4>
        <p>
          A regular <InlineMath>n</InlineMath>-gon is constructible if and only if:
        </p>
        <MathBlock>{`n = 2^k \\cdot p_1 \\cdot p_2 \\cdots p_m`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>k \geq 0</InlineMath> and each <InlineMath>p_i</InlineMath>
          is a distinct Fermat prime (a prime of the form <InlineMath>2^{"{2^j}"} + 1</InlineMath>).
        </p>
      </div>

      <p>
        The known Fermat primes are: 3, 5, 17, 257, and 65537.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Constructible n-gons</p>
        <p className="mt-2">
          For small <InlineMath>n</InlineMath>: 3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20, ...
        </p>
        <p className="mt-2">
          The regular 7-gon, 9-gon, 11-gon, 13-gon, and 14-gon are NOT constructible.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: The Regular 17-gon</p>
        <p className="mt-2">
          Gauss, at age 19, discovered that the regular 17-gon is constructible.
          This discovery convinced him to pursue mathematics. The construction involves
          nested square roots:
        </p>
        <MathBlock>{`\\cos\\left(\\frac{2\\pi}{17}\\right) = \\frac{-1 + \\sqrt{17} + \\sqrt{34-2\\sqrt{17}} + 2\\sqrt{17+3\\sqrt{17}-\\sqrt{34-2\\sqrt{17}}-2\\sqrt{34+2\\sqrt{17}}}}{16}`}</MathBlock>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> A number is constructible iff it lies in a tower of
        quadratic extensions over <InlineMath>\mathbb{"{Q}"}</InlineMath>. This means
        its degree over <InlineMath>\mathbb{"{Q}"}</InlineMath> must be a power of 2.
        The classical impossibilities follow: doubling the cube requires <InlineMath>\sqrt[3]{"{2}"}</InlineMath>
        (degree 3), trisecting 60 degrees requires <InlineMath>\cos(20°)</InlineMath> (degree 3),
        and squaring the circle requires <InlineMath>\sqrt{"{\\pi}"}</InlineMath> (transcendental).
        Regular polygons are constructible precisely when determined by Fermat primes.
      </Callout>
    </LessonLayout>
  );
}
