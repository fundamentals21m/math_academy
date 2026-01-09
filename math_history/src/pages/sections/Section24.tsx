import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>Complex Numbers Enter</h2>

      <p>
        The cubic equation forced mathematicians to confront a strange phenomenon:
        Cardano's formula sometimes produced expressions involving{' '}
        <InlineMath>\sqrt{'{-1}'}</InlineMath> even when all three roots were{' '}
        <em>real numbers</em>. This paradox would eventually lead to the acceptance
        of <strong>complex numbers</strong>—one of mathematics' greatest conceptual
        breakthroughs.
      </p>

      <Callout type="info">
        <strong>The Birthplace of i:</strong> While quadratic equations had hinted
        at square roots of negatives, it was <em>cubic equations</em> that truly
        forced the acceptance of complex numbers. Cardano called them "sophistic
        negatives" and worked with them reluctantly but effectively.
      </Callout>

      <h3>The Casus Irreducibilis</h3>

      <p>
        Consider the cubic equation <InlineMath>y^3 = 15y + 4</InlineMath>. It
        clearly has <InlineMath>y = 4</InlineMath> as a solution (since{' '}
        <InlineMath>64 = 60 + 4</InlineMath>). But what does Cardano's formula give?
      </p>

      <Example title="The Irreducible Case">
        <p>
          With <InlineMath>p = 15</InlineMath> and <InlineMath>q = 4</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{q}{2}\\right)^2 - \\left(\\frac{p}{3}\\right)^3 = 4 - 125 = -121`}
        </MathBlock>
        <p className="mt-2">
          The expression under the square root is <strong>negative</strong>!
          Cardano's formula gives:
        </p>
        <MathBlock>
          {`y = \\sqrt[3]{2 + \\sqrt{-121}} + \\sqrt[3]{2 - \\sqrt{-121}}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This looks meaningless, yet we know <InlineMath>y = 4</InlineMath> is
          a perfectly real solution!
        </p>
      </Example>

      <Definition title="Casus Irreducibilis">
        <p>
          The <strong>casus irreducibilis</strong> ("irreducible case") occurs when
          a cubic with three real roots produces square roots of negative numbers
          in Cardano's formula. This happens precisely when:
        </p>
        <MathBlock>
          {`\\left(\\frac{q}{2}\\right)^2 < \\left(\\frac{p}{3}\\right)^3`}
        </MathBlock>
        <p className="mt-2">
          Remarkably, the imaginary parts <em>cancel out</em> to give real solutions.
        </p>
      </Definition>

      <h3>Bombelli's Breakthrough</h3>

      <p>
        <strong>Rafael Bombelli</strong> (1526-1572) was the first to systematically
        work with these strange square roots of negatives. In his <em>Algebra</em>
        (1572), he showed that the formula actually works.
      </p>

      <Theorem title="Bombelli's Verification">
        <p>
          Bombelli boldly assumed that:
        </p>
        <MathBlock>
          {`\\sqrt[3]{2 + \\sqrt{-121}} = 2 + \\sqrt{-1}`}
        </MathBlock>
        <p className="mt-2">and verified by cubing:</p>
        <MathBlock>
          {`(2 + \\sqrt{-1})^3 = 8 + 12\\sqrt{-1} - 6 - \\sqrt{-1} = 2 + 11\\sqrt{-1}`}
        </MathBlock>
        <p className="mt-2">
          Since <InlineMath>\sqrt{'{-121}'} = 11\sqrt{'{-1}'}</InlineMath>, this confirms the cube root!
          Similarly:
        </p>
        <MathBlock>
          {`\\sqrt[3]{2 - \\sqrt{-121}} = 2 - \\sqrt{-1}`}
        </MathBlock>
        <p className="mt-2">
          Adding these cube roots: <InlineMath>(2 + \sqrt{'{-1}'}) + (2 - \sqrt{'{-1}'}) = 4</InlineMath>
        </p>
      </Theorem>

      {/* Visualization of complex numbers canceling */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          How Imaginary Parts Cancel
        </h4>
        <svg viewBox="0 0 500 180" className="w-full h-auto">
          {/* First cube root */}
          <rect x="30" y="30" width="140" height="50" rx="5" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
          <text x="100" y="50" fill="#c7d2fe" fontSize="10" textAnchor="middle">∛(2 + √-121)</text>
          <text x="100" y="68" fill="#a5b4fc" fontSize="11" textAnchor="middle">= 2 + √-1</text>
          
          {/* Plus sign */}
          <text x="195" y="58" fill="#6b7280" fontSize="20" textAnchor="middle">+</text>
          
          {/* Second cube root */}
          <rect x="220" y="30" width="140" height="50" rx="5" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
          <text x="290" y="50" fill="#a7f3d0" fontSize="10" textAnchor="middle">∛(2 - √-121)</text>
          <text x="290" y="68" fill="#6ee7b7" fontSize="11" textAnchor="middle">= 2 - √-1</text>
          
          {/* Equals sign */}
          <text x="385" y="58" fill="#6b7280" fontSize="20" textAnchor="middle">=</text>
          
          {/* Result */}
          <rect x="410" y="30" width="70" height="50" rx="5" fill="#f59e0b" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="2"/>
          <text x="445" y="62" fill="#fcd34d" fontSize="16" textAnchor="middle" fontWeight="bold">4</text>
          
          {/* Explanation below */}
          <text x="250" y="110" fill="#94a3b8" fontSize="10" textAnchor="middle">
            The √-1 terms cancel: (+√-1) + (-√-1) = 0
          </text>
          <text x="250" y="128" fill="#818cf8" fontSize="10" textAnchor="middle">
            Real parts add: 2 + 2 = 4
          </text>
          
          {/* Complex plane hint */}
          <text x="250" y="160" fill="#64748b" fontSize="9" textAnchor="middle" fontStyle="italic">
            2 + √-1 and 2 - √-1 are "complex conjugates" — they always combine to give a real number
          </text>
        </svg>
      </div>

      <h3>The Notation</h3>

      <p>
        The notation <InlineMath>i = \sqrt{'{-1}'}</InlineMath> came much later,
        introduced by <strong>Euler</strong> in 1777. Early mathematicians used
        various circumlocutions:
      </p>

      <Example title="Historical Names for √-1">
        <ul className="space-y-2">
          <li>
            <strong>Cardano:</strong> "sophistic negatives" (1545)
          </li>
          <li>
            <strong>Bombelli:</strong> "più di meno" (plus of minus) and
            "meno di meno" (minus of minus) for <InlineMath>\pm\sqrt{'{-1}'}</InlineMath>
          </li>
          <li>
            <strong>Descartes:</strong> "imaginary" numbers (1637)—the name stuck!
          </li>
          <li>
            <strong>Euler:</strong> <InlineMath>i</InlineMath> (1777)
          </li>
          <li>
            <strong>Gauss:</strong> "complex" numbers (1831)
          </li>
        </ul>
      </Example>

      <h3>Why Complex Numbers Were Necessary</h3>

      <Theorem title="The Inevitability of Complex Numbers">
        <p>
          The casus irreducibilis proves that complex numbers are <em>unavoidable</em>
          for solving cubics algebraically. It can be shown that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            When a cubic has three distinct real roots, Cardano's formula
            <em> necessarily</em> involves <InlineMath>\sqrt{'{-1}'}</InlineMath>
          </li>
          <li>
            There is no alternative algebraic formula that avoids complex numbers
          </li>
          <li>
            The only escape is to use transcendental functions (like Viete's
            trigonometric method)
          </li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>A Philosophical Shift:</strong> Complex numbers forced mathematicians
        to separate "existence" from "geometric representability." Numbers didn't
        have to be lengths or areas—they could be abstract entities defined by
        their algebraic properties.
      </Callout>

      <h3>Computing with Complex Numbers</h3>

      <p>
        Bombelli established the basic rules for arithmetic with complex numbers.
        If we write <InlineMath>\sqrt{'{-1}'}</InlineMath> as <InlineMath>i</InlineMath>:
      </p>

      <Definition title="Complex Arithmetic">
        <p>
          For complex numbers <InlineMath>a + bi</InlineMath> and <InlineMath>c + di</InlineMath>:
        </p>
        <MathBlock>
          {`\\begin{aligned}
(a + bi) + (c + di) &= (a + c) + (b + d)i \\\\
(a + bi)(c + di) &= (ac - bd) + (ad + bc)i
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          The key rule is <InlineMath>i^2 = -1</InlineMath>, which makes the
          product formula work.
        </p>
      </Definition>

      <Example title="Verifying Bombelli's Cube">
        <p>Let's verify <InlineMath>(2 + i)^3 = 2 + 11i</InlineMath>:</p>
        <MathBlock>
          {`\\begin{aligned}
(2 + i)^2 &= 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i \\\\
(2 + i)^3 &= (2 + i)(3 + 4i) \\\\
&= 6 + 8i + 3i + 4i^2 \\\\
&= 6 + 11i - 4 = 2 + 11i \\quad \\checkmark
\\end{aligned}`}
        </MathBlock>
      </Example>

      <h3>Complex Conjugates</h3>

      <Definition title="Complex Conjugate">
        <p>
          The <strong>complex conjugate</strong> of <InlineMath>z = a + bi</InlineMath>
          is <InlineMath>\bar z = a - bi</InlineMath>. Key properties:
        </p>
        <MathBlock>
          {`\\begin{aligned}
z + \\bar z &= 2a \\quad \\text{(always real)} \\\\
z \\cdot \\bar z &= a^2 + b^2 \\quad \\text{(always real and non-negative)}
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          This explains why imaginary parts cancel in Cardano's formula: the two
          cube roots are always complex conjugates!
        </p>
      </Definition>

      <h3>The Road Ahead</h3>

      <p>
        The acceptance of complex numbers opened vast new territories:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Algebraic Consequences</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>The Fundamental Theorem of Algebra</li>
            <li>Every polynomial has all its roots in <InlineMath>\mathbb{'{C}'}</InlineMath></li>
            <li>Galois theory and solvability</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Geometric Consequences</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>The complex plane (Argand, Gauss)</li>
            <li>Rotation and scaling as multiplication</li>
            <li>Euler's formula: <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath></li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>From "Imaginary" to Essential:</strong> What began as "sophistic
        negatives" would become essential to physics (quantum mechanics, electrical
        engineering), pure mathematics (complex analysis, algebraic geometry), and
        modern technology (signal processing, control systems).
      </Callout>

      <h3>A Summary of Polynomial Equations</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="p-2 text-left text-primary-400">Degree</th>
              <th className="p-2 text-left text-primary-400">Solved By</th>
              <th className="p-2 text-left text-primary-400">Method</th>
              <th className="p-2 text-left text-primary-400">Numbers Needed</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="p-2">1 (Linear)</td>
              <td className="p-2">Ancient</td>
              <td className="p-2">Direct</td>
              <td className="p-2">Rationals</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-2">2 (Quadratic)</td>
              <td className="p-2">Babylonians, Brahmagupta</td>
              <td className="p-2">Completing square</td>
              <td className="p-2">Square roots</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-2">3 (Cubic)</td>
              <td className="p-2">del Ferro, Tartaglia, Cardano</td>
              <td className="p-2">Cardano's formula</td>
              <td className="p-2">Complex numbers!</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-2">4 (Quartic)</td>
              <td className="p-2">Ferrari</td>
              <td className="p-2">Reduce to cubic</td>
              <td className="p-2">Complex numbers</td>
            </tr>
            <tr>
              <td className="p-2">5+ (Quintic)</td>
              <td className="p-2">Abel, Galois</td>
              <td className="p-2"><strong>Impossible</strong> by radicals</td>
              <td className="p-2">Elliptic functions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionQuiz
        sectionId={24}
        questions={quizMap[24] || []}
        title="Complex Numbers Enter Quiz"
      />
    </LessonLayout>
  );
}
