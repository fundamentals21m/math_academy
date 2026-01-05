import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section41Questions } from '../../data/quizzes';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-semibold mb-4">Hilbert's Third Problem</h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> This section covers more challenging
          material that connects trigonometry to a famous problem in geometry.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        Can a regular tetrahedron be cut into finitely many pieces and reassembled
        into a cube? This question, known as <strong>Hilbert's Third Problem</strong>,
        was one of 23 problems David Hilbert posed in 1900 as challenges for 20th
        century mathematicians.
      </p>

      {/* Background */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Background: Scissors Congruence</h3>

      <p className="text-dark-200 mb-6">
        In Section 14, we saw that any two polygons of equal area can be cut into
        pieces and reassembled into each other. This is called{' '}
        <strong>scissors congruence</strong> or <strong>equidecomposability</strong>.
      </p>

      <p className="text-dark-200 mb-6">
        Does the same hold in three dimensions? Can any two polyhedra of equal
        volume be cut and pasted into each other? This is the essence of Hilbert's
        Third Problem.
      </p>

      {/* Why It Matters */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why This Problem Matters</h3>

      <p className="text-dark-200 mb-6">
        If the tetrahedron could be cut and pasted into a cube, we could develop
        a theory of volume using only <strong>finite processes</strong>—no need
        for limits or calculus. The impossibility of this means that three-dimensional
        volume is fundamentally more complex than two-dimensional area.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="2D: Solvable" />
          <p className="text-xs text-dark-300">
            Any two polygons of equal area are scissors congruent. Area can be
            defined through finite dissection.
          </p>
        </Card>
        <Card>
          <CardHeader title="3D: Not Solvable" />
          <p className="text-xs text-dark-300">
            Polyhedra of equal volume need not be scissors congruent. Volume
            requires infinite processes (limits).
          </p>
        </Card>
      </CardGrid>

      {/* The Dihedral Angle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dihedral Angles</h3>

      <p className="text-dark-200 mb-6">
        Dehn's solution focuses on <strong>dihedral angles</strong>—the angles
        between faces of a polyhedron. For a cube, all dihedral angles are{' '}
        <InlineMath>\pi/2</InlineMath> (right angles).
      </p>

      <p className="text-dark-200 mb-6">
        For a regular tetrahedron, we must calculate the dihedral angle. Using
        the Pythagorean theorem on the triangle formed by the edge and face
        midpoints:
      </p>

      <MathBlock>
        {`\\cos\\frac{\\alpha}{2} = \\frac{2}{\\sqrt{2}\\sqrt{3}}, \\quad \\text{so} \\quad \\cos\\alpha = 2\\cos^2\\frac{\\alpha}{2} - 1 = \\frac{1}{3}`}
      </MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 my-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Tetrahedron Dihedral Angle
        </h4>
        <p className="text-dark-200">
          The dihedral angle <InlineMath>\alpha</InlineMath> of a regular tetrahedron
          satisfies <InlineMath>\cos\alpha = 1/3</InlineMath>.
        </p>
      </div>

      {/* The Key Insight */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Key Insight</h3>

      <p className="text-dark-200 mb-6">
        If a tetrahedron can be cut and pasted into a cube, we would need to
        "build" right angles (<InlineMath>\pi/2</InlineMath>) from the tetrahedron's
        dihedral angles. But cuts can create new dihedral angles in the interior.
      </p>

      <p className="text-dark-200 mb-6">
        Dehn's genius was realizing that the relationship between these angles
        is governed by a deeper principle involving <strong>rational independence</strong>
        and the addition formulas.
      </p>

      <Callout type="info">
        <p>
          The question becomes: Is the dihedral angle <InlineMath>\alpha</InlineMath>{' '}
          (where <InlineMath>\cos\alpha = 1/3</InlineMath>) a{' '}
          <strong>rational multiple of π</strong>? If not, something fundamental
          prevents the dissection.
        </p>
      </Callout>

      {/* Historical Context */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Historical Context</h3>

      <p className="text-dark-200 mb-6">
        Hilbert posed this problem in Paris in 1900. It was solved just a few
        months later by his student <strong>Max Dehn</strong> with surprisingly
        simple methods. It remains the most elementary of Hilbert's problems
        and one of the few that can be completely explained without advanced
        mathematics.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Hilbert's Third Problem</strong>: Can a tetrahedron be cut
              into a cube?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>dihedral angle</strong> of a regular tetrahedron has{' '}
              <InlineMath>\cos\alpha = 1/3</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This is fundamentally different from 2D, where equal-area polygons
              can always be dissected into each other.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Dehn solved this problem in 1900 using <strong>trigonometry</strong>{' '}
              and <strong>number theory</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={41} questions={section41Questions} />
    </LessonLayout>
  );
}
