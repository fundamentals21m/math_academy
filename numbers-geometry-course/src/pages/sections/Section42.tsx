import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section42Questions } from '../../data/quizzes';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-semibold mb-4">The Dehn Invariant</h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> This section introduces the Dehn
          invariant, a quantity that is preserved under cutting and pasting of
          polyhedra.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        Dehn solved Hilbert's Third Problem by discovering that volume is not
        the only thing conserved when cutting and pasting a polyhedron. He found
        another quantity—now called the <strong>Dehn invariant</strong>—that
        encodes the dihedral angles and edge lengths.
      </p>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Dihedral Content</h3>

      <p className="text-dark-200 mb-6">
        An edge of length <InlineMath>l</InlineMath> and dihedral angle{' '}
        <InlineMath>\alpha</InlineMath> contributes{' '}
        <InlineMath>l \otimes \alpha</InlineMath> to the{' '}
        <strong>dihedral content</strong>. The total for a polyhedron is:
      </p>

      <MathBlock>
        {`D(S) = l_1 \\otimes \\alpha_1 + l_2 \\otimes \\alpha_2 + \\cdots + l_k \\otimes \\alpha_k`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        where <InlineMath>l_1, l_2, \ldots, l_k</InlineMath> are edge lengths and{' '}
        <InlineMath>\alpha_1, \alpha_2, \ldots, \alpha_k</InlineMath> are their
        dihedral angles.
      </p>

      {/* The Rules */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rules for Cutting and Pasting</h3>

      <p className="text-dark-200 mb-6">
        When we cut or paste a polyhedron, the Dehn invariant transforms according
        to three simple rules:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 space-y-4">
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">
            Rule 1: Splitting angles
          </h4>
          <MathBlock>
            {`l \\otimes (\\alpha + \\beta) = l \\otimes \\alpha + l \\otimes \\beta`}
          </MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            When a cut splits a dihedral angle <InlineMath>\alpha + \beta</InlineMath>{' '}
            into <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath>.
          </p>
        </div>
        <div>
          <h4 className="text-green-400 font-semibold mb-2">
            Rule 2: Splitting edges
          </h4>
          <MathBlock>
            {`(l + m) \\otimes \\alpha = l \\otimes \\alpha + m \\otimes \\alpha`}
          </MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            When a cut splits an edge of length <InlineMath>l + m</InlineMath>.
          </p>
        </div>
        <div>
          <h4 className="text-purple-400 font-semibold mb-2">
            Rule 3: Flat angles vanish
          </h4>
          <MathBlock>{`l \\otimes \\pi = 0`}</MathBlock>
          <p className="text-dark-300 text-sm mt-2">
            An edge with angle <InlineMath>\pi</InlineMath> is not a real edge.
          </p>
        </div>
      </div>

      {/* The Cube Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: The Cube</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Dehn Invariant of the Unit Cube
        </h4>
        <p className="text-dark-200 mb-3">
          The cube has 12 edges, each of length 1 with dihedral angle{' '}
          <InlineMath>\pi/2</InlineMath>. So:
        </p>
        <MathBlock>{`D(\\text{cube}) = 12 \\otimes \\frac{\\pi}{2}`}</MathBlock>
        <p className="text-dark-200 mt-3">
          But by Rule 1:{' '}
          <InlineMath>
            1 \otimes \frac{'\pi'}{2} + 1 \otimes \frac{'\pi'}{2} = 1 \otimes \pi = 0
          </InlineMath>
        </p>
        <p className="text-dark-200 mt-2">
          Therefore, <InlineMath>D(\text{'{cube}'}) = 0</InlineMath>.
        </p>
      </div>

      {/* The Key Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Invariance Property</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Dehn's Key Result
        </h4>
        <p className="text-dark-200">
          If two polyhedra <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath>{' '}
          are <strong>equidecomposable</strong> (can be cut and pasted into each
          other), then <InlineMath>D(P) = D(Q)</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This means the Dehn invariant is a <strong>necessary condition</strong>{' '}
        for scissors congruence. If two polyhedra have different Dehn invariants,
        they cannot be cut into each other!
      </p>

      {/* Tensor Products */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Mathematical Structure: Tensors
      </h3>

      <p className="text-dark-200 mb-6">
        The objects <InlineMath>l \otimes \alpha</InlineMath> obeying Rules 1 and 2
        are called <strong>tensors</strong>. The set of all such expressions is
        denoted <InlineMath>\mathbb{'{R}'} \otimes \mathbb{'{R}'}/\pi\mathbb{'{Z}'}</InlineMath>—the{' '}
        <strong>tensor product</strong> of real numbers and angles (where we
        treat <InlineMath>\pi</InlineMath> as equivalent to 0).
      </p>

      <Callout type="info">
        <p>
          Tensor products are normally studied in advanced algebra, but Dehn
          proved what he needed from first principles. The simple rules hide
          deep mathematical structure.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>Dehn invariant</strong>{' '}
              <InlineMath>D(S) = \sum l_i \otimes \alpha_i</InlineMath> is conserved
              under cutting and pasting.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Three rules govern how it transforms: angle splitting, edge splitting,
              and <InlineMath>l \otimes \pi = 0</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The cube has Dehn invariant <strong>0</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              If <InlineMath>D(P) \neq D(Q)</InlineMath>, then{' '}
              <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> are{' '}
              <strong>not equidecomposable</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={42} questions={section42Questions} />
    </LessonLayout>
  );
}
