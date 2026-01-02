import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';
import { ModularArithmeticCalculator } from '@/components/visualizations';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Introduction to the Disquisitiones Arithmeticae</h2>

      <p>
        In 1801, at the age of just 24, Carl Friedrich Gauss published the{' '}
        <em>Disquisitiones Arithmeticae</em> ("Arithmetical Investigations"), a work that
        would transform number theory from a collection of scattered results into a unified,
        rigorous mathematical discipline. This masterpiece established Gauss as one of
        the greatest mathematicians in history.
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> Gauss began working on the Disquisitiones at age 17.
        The book was written in Latin, the scholarly language of the time, and dedicated to
        Duke Karl Wilhelm Ferdinand of Brunswick, who had supported Gauss's education since childhood.
      </Callout>

      <h2>Congruence: A New Language for Number Theory</h2>

      <p>
        The first section of the Disquisitiones introduces Gauss's revolutionary notation
        for <strong>congruence</strong>. This simple but powerful idea provides a systematic
        way to study remainders and divisibility.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Definition: Congruence</h3>
        <p className="text-dark-200 mb-4">
          Two integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are said to be{' '}
          <strong>congruent modulo</strong> <InlineMath>m</InlineMath> if their difference{' '}
          <InlineMath>a - b</InlineMath> is divisible by <InlineMath>m</InlineMath>. We write:
        </p>
        <MathBlock>{`a \\equiv b \\pmod{m}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          The number <InlineMath>m</InlineMath> is called the <strong>modulus</strong>.
        </p>
      </div>

      <p>
        For example, <InlineMath>17 \equiv 5 \pmod{12}</InlineMath> because{' '}
        <InlineMath>17 - 5 = 12</InlineMath>, which is divisible by 12. Another way to think
        about it: 17 and 5 leave the same remainder when divided by 12.
      </p>

      <h2>Residues and Non-Residues</h2>

      <p>
        When <InlineMath>a \equiv b \pmod{m}</InlineMath>, Gauss says that{' '}
        <InlineMath>b</InlineMath> is a <strong>residue</strong> of{' '}
        <InlineMath>a</InlineMath> with respect to the modulus <InlineMath>m</InlineMath>.
        Any integer that is <em>not</em> congruent to <InlineMath>a</InlineMath> is called
        a <strong>non-residue</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Residues of 17 (mod 5)</h3>
          <p className="text-dark-300 mb-2">Numbers congruent to 17 modulo 5:</p>
          <p className="font-mono text-emerald-400">..., -8, -3, 2, 7, 12, 17, 22, 27, ...</p>
          <p className="text-dark-400 text-sm mt-2">All leave remainder 2 when divided by 5.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Non-Residues of 17 (mod 5)</h3>
          <p className="text-dark-300 mb-2">Numbers not congruent to 17 modulo 5:</p>
          <p className="font-mono text-amber-400">..., -4, 1, 6, 11, 16, 21, ...</p>
          <p className="text-dark-400 text-sm mt-2">These leave different remainders (0, 1, 3, or 4).</p>
        </div>
      </div>

      <h2>Least Residues</h2>

      <p>
        Among all the residues of a number, Gauss identifies the <strong>least residue</strong>—the
        unique representative in a standard range.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Least Positive Residue</h3>
        <p className="text-dark-200 mb-2">
          For any integer <InlineMath>a</InlineMath> and positive modulus <InlineMath>m</InlineMath>,
          there is a unique integer <InlineMath>r</InlineMath> such that:
        </p>
        <MathBlock>{`a \\equiv r \\pmod{m} \\quad \\text{and} \\quad 0 \\le r < m`}</MathBlock>
        <p className="text-dark-300 mt-4">
          This is simply the <strong>remainder</strong> when <InlineMath>a</InlineMath> is
          divided by <InlineMath>m</InlineMath>.
        </p>
      </div>

      <p>
        Gauss also considers the <strong>least absolute residue</strong>: the residue{' '}
        <InlineMath>r</InlineMath> with <InlineMath>{`-m/2 < r \\le m/2`}</InlineMath>.
        This is often more convenient for calculations.
      </p>

      <h2>Elementary Properties of Congruences</h2>

      <p>
        Gauss establishes that congruences behave much like equalities. These properties
        make modular arithmetic a powerful computational tool:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">1. Reflexivity</h3>
          <MathBlock>{`a \\equiv a \\pmod{m}`}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">Every number is congruent to itself.</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">2. Symmetry</h3>
          <MathBlock>{`\\text{If } a \\equiv b \\pmod{m}, \\text{ then } b \\equiv a \\pmod{m}`}</MathBlock>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">3. Transitivity</h3>
          <MathBlock>{`\\text{If } a \\equiv b \\text{ and } b \\equiv c \\pmod{m}, \\text{ then } a \\equiv c \\pmod{m}`}</MathBlock>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">4. Addition</h3>
          <MathBlock>{`\\text{If } a \\equiv b \\text{ and } c \\equiv d \\pmod{m}, \\text{ then } a + c \\equiv b + d \\pmod{m}`}</MathBlock>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">5. Multiplication</h3>
          <MathBlock>{`\\text{If } a \\equiv b \\text{ and } c \\equiv d \\pmod{m}, \\text{ then } ac \\equiv bd \\pmod{m}`}</MathBlock>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">6. Powers</h3>
          <MathBlock>{`\\text{If } a \\equiv b \\pmod{m}, \\text{ then } a^n \\equiv b^n \\pmod{m} \\text{ for any positive integer } n`}</MathBlock>
        </div>
      </div>

      <Callout type="warning">
        <strong>Caution with Division:</strong> Unlike addition and multiplication, you cannot
        always "divide" congruences. If <InlineMath>ac \equiv bc \pmod{m}</InlineMath>,
        it does <em>not</em> necessarily follow that <InlineMath>a \equiv b \pmod{m}</InlineMath>.
        This subtlety is addressed in Section II.
      </Callout>

      <h2>Try It: Modular Arithmetic Calculator</h2>

      <p>
        Use this interactive calculator to explore modular arithmetic operations.
        See how addition, subtraction, multiplication, and exponentiation work in
        congruence notation:
      </p>

      <ModularArithmeticCalculator className="my-6" />

      <h2>Applications</h2>

      <p>
        Gauss immediately demonstrates the utility of his notation with several applications,
        including tests for divisibility:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Example: Divisibility by 9</h3>
        <p className="text-dark-200 mb-4">
          Since <InlineMath>10 \equiv 1 \pmod{9}</InlineMath>, we have{' '}
          <InlineMath>10^n \equiv 1 \pmod{9}</InlineMath> for all <InlineMath>n</InlineMath>.
        </p>
        <p className="text-dark-200 mb-4">
          Therefore, a number written in decimal as <InlineMath>d_n d_{'{n-1}'} \cdots d_1 d_0</InlineMath> satisfies:
        </p>
        <MathBlock>{`d_n \\cdot 10^n + d_{n-1} \\cdot 10^{n-1} + \\cdots + d_1 \\cdot 10 + d_0 \\equiv d_n + d_{n-1} + \\cdots + d_1 + d_0 \\pmod{9}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          A number is divisible by 9 if and only if the sum of its digits is divisible by 9.
        </p>
      </div>

      <h2>The Significance of Gauss's Approach</h2>

      <p>
        Before Gauss, mathematicians described divisibility relationships verbally. By introducing
        the <InlineMath>\equiv</InlineMath> notation and treating congruence as a relation with
        algebraic properties, Gauss made number theory vastly more systematic and powerful.
      </p>

      <p>
        This first section lays the groundwork for everything that follows. The concept of
        congruence will be used throughout the Disquisitiones to study:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Linear equations in modular arithmetic (Section II)</li>
        <li>Powers and primitive roots (Section III)</li>
        <li>Quadratic residues and the Law of Quadratic Reciprocity (Section IV)</li>
        <li>Binary quadratic forms (Section V)</li>
        <li>The division of the circle and constructibility of regular polygons (Section VII)</li>
      </ul>

      <Callout type="success">
        <strong>Looking Ahead:</strong> In the next section, we'll explore how Gauss solves
        linear congruences—equations of the form <InlineMath>ax \equiv b \pmod{m}</InlineMath>—and
        discover the powerful Chinese Remainder Theorem.
      </Callout>
    </LessonLayout>
  );
}
