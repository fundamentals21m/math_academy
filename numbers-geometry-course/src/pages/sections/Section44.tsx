import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section44Questions } from '../../data/quizzes';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-semibold mb-4">The Tetrahedron and the Cube</h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> This section completes Dehn's proof
          that a regular tetrahedron cannot be cut into a cube.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        We now have all the tools to prove <strong>Dehn's Theorem</strong>: the
        regular tetrahedron is not equidecomposable with the cube. The proof
        beautifully combines the addition formula for cosine with elementary
        number theory.
      </p>

      {/* The Setup */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Setting Up the Proof</h3>

      <p className="text-dark-200 mb-6">
        From Section 42, we know:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>• The Dehn invariant of the <strong>cube</strong> is <InlineMath>0</InlineMath></li>
          <li>
            • The Dehn invariant of the <strong>tetrahedron</strong> with unit
            edges is <InlineMath>6 \otimes \alpha</InlineMath>, where{' '}
            <InlineMath>\cos\alpha = 1/3</InlineMath>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        From Section 43, we know that <InlineMath>l \otimes \alpha \neq 0</InlineMath>{' '}
        if <InlineMath>l \neq 0</InlineMath> and <InlineMath>\alpha</InlineMath>{' '}
        is rationally independent of <InlineMath>\pi</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          What We Must Prove
        </h4>
        <p className="text-dark-200">
          The dihedral angle <InlineMath>\alpha</InlineMath> of the regular
          tetrahedron (where <InlineMath>\cos\alpha = 1/3</InlineMath>) is{' '}
          <strong>not</strong> a rational multiple of <InlineMath>\pi</InlineMath>.
        </p>
      </div>

      {/* The Proof Strategy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Proof Strategy</h3>

      <p className="text-dark-200 mb-6">
        If <InlineMath>\alpha = m\pi/n</InlineMath> for some integers{' '}
        <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath>, then{' '}
        <InlineMath>n\alpha = m\pi</InlineMath>, so{' '}
        <InlineMath>\cos(n\alpha) = \pm 1</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        We'll prove by <strong>induction</strong> that{' '}
        <InlineMath>\cos(n\alpha) \neq \pm 1</InlineMath> for any positive integer{' '}
        <InlineMath>n</InlineMath>. The key is showing:
      </p>

      <MathBlock>{`\\cos(n\\alpha) = \\frac{q_n}{3^n}`}</MathBlock>

      <p className="text-dark-200 my-6">
        where <InlineMath>q_n</InlineMath> is an integer <strong>not divisible by 3</strong>.
      </p>

      {/* The Induction */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Inductive Proof</h3>

      <p className="text-dark-200 mb-4">
        <strong>Base case:</strong> <InlineMath>\cos\alpha = 1/3 = q_1/3^1</InlineMath>,
        where <InlineMath>q_1 = 1</InlineMath> is not divisible by 3. ✓
      </p>

      <p className="text-dark-200 mb-4">
        <strong>Inductive step:</strong> Assume the statement holds for all{' '}
        <InlineMath>k \leq n</InlineMath>. We use the identity:
      </p>

      <MathBlock>
        {`\\cos((k+1)\\alpha) + \\cos((k-1)\\alpha) = 2\\cos(k\\alpha)\\cos\\alpha`}
      </MathBlock>

      <p className="text-dark-200 my-4">
        which comes from adding the addition formulas:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\cos((k+1)\\alpha) = \\cos(k\\alpha)\\cos\\alpha - \\sin(k\\alpha)\\sin\\alpha`}
        </MathBlock>
        <MathBlock>
          {`\\cos((k-1)\\alpha) = \\cos(k\\alpha)\\cos\\alpha + \\sin(k\\alpha)\\sin\\alpha`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-4">
        So:{' '}
        <InlineMath>
          \cos((k+1)\alpha) = 2\cos(k\alpha)\cos\alpha - \cos((k-1)\alpha)
        </InlineMath>
      </p>

      <p className="text-dark-200 mb-4">
        By induction hypothesis:{' '}
        <InlineMath>\cos(k\alpha) = q_k/3^k</InlineMath> and{' '}
        <InlineMath>\cos((k-1)\alpha) = q_{'k-1'}/3^{'{k-1}'}</InlineMath>.
      </p>

      <MathBlock>
        {`\\cos((k+1)\\alpha) = \\frac{(2/3)q_k}{3^k} - \\frac{q_{k-1}}{3^{k-1}} = \\frac{2q_k - 9q_{k-1}}{3^{k+1}}`}
      </MathBlock>

      {/* The Number Theory */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Number Theory Step</h3>

      <p className="text-dark-200 mb-6">
        Let <InlineMath>q_{'k+1'} = 2q_k - 9q_{'k-1'}</InlineMath>. Is{' '}
        <InlineMath>q_{'k+1'}</InlineMath> divisible by 3?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li>
            • <InlineMath>9q_{'k-1'}</InlineMath> is divisible by 3
          </li>
          <li>
            • <InlineMath>2q_k</InlineMath> is NOT divisible by 3 (since{' '}
            <InlineMath>q_k</InlineMath> is not divisible by 3)
          </li>
          <li>
            • Therefore <InlineMath>2q_k - 9q_{'k-1'}</InlineMath> is NOT divisible
            by 3
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Since <InlineMath>q_n</InlineMath> is never divisible by 3, we have{' '}
        <InlineMath>\cos(n\alpha) = q_n/3^n</InlineMath> is never{' '}
        <InlineMath>\pm 1</InlineMath> (which would require{' '}
        <InlineMath>q_n = \pm 3^n</InlineMath>).
      </p>

      {/* The Conclusion */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dehn's Theorem</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Dehn's Theorem (1900)
        </h4>
        <p className="text-dark-200">
          <strong>The regular tetrahedron is not equidecomposable with the cube.</strong>
        </p>
        <p className="text-dark-200 mt-3">
          Proof: The dihedral angle <InlineMath>\alpha</InlineMath> is not a rational
          multiple of <InlineMath>\pi</InlineMath>, so{' '}
          <InlineMath>6 \otimes \alpha \neq 0</InlineMath>. But the cube has Dehn
          invariant 0. Since equidecomposable polyhedra have equal Dehn invariants,
          the tetrahedron and cube cannot be equidecomposable. □
        </p>
      </div>

      <Callout type="success">
        <p>
          This elegant proof combines <strong>trigonometry</strong> (the addition
          formula), <strong>number theory</strong> (divisibility by 3), and{' '}
          <strong>abstract algebra</strong> (tensors)—a beautiful example of how
          mathematics connects seemingly disparate areas.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>\cos(n\alpha) = q_n/3^n</InlineMath> where{' '}
              <InlineMath>q_n</InlineMath> is never divisible by 3.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Therefore <InlineMath>\alpha</InlineMath> is not a rational multiple
              of <InlineMath>\pi</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The tetrahedron has Dehn invariant{' '}
              <InlineMath>6 \otimes \alpha \neq 0</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The cube has Dehn invariant 0, so they are <strong>not equidecomposable</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={44} questions={section44Questions} />
    </LessonLayout>
  );
}
