import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2>Projective Plane Axioms and Their Models</h2>

      <p>
        Drawing a tiled floor with straightedge alone requires a "horizon"—a line
        at infinity. This idea leads us to believe in a structure called a
        <strong> projective plane</strong>, containing objects called "points" and
        "lines" satisfying certain axioms.
      </p>

      <h3>Axioms for a Projective Plane</h3>

      <Definition title="Projective Plane Axioms">
        <ol className="list-decimal list-inside space-y-3">
          <li>Any two "points" are contained in a unique "line."</li>
          <li>Any two "lines" contain a unique "point."</li>
          <li>There exist four "points," no three of which are in a "line."</li>
        </ol>
      </Definition>

      <p>
        Notice that these are axioms about <strong>incidence</strong>: They involve
        only meetings between "points" and "lines," not things such as length or angle.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Understanding the Axioms</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            <strong>Axiom 1</strong> is essentially Euclid's first axiom for the
            construction of lines.
          </li>
          <li>
            <strong>Axiom 2</strong> says that there are no exceptional pairs of
            lines that do not meet. We can define "parallels" to be lines that
            meet on a "horizon," but this does not single out a special class of lines.
          </li>
          <li>
            <strong>Axiom 3</strong> says that a projective plane has "enough
            points to be interesting"—we can think of the four points as vertices
            of a quadrilateral.
          </li>
        </ul>
      </div>

      <h3>The Real Projective Plane ℝP²</h3>

      <p>
        If there is such a thing as a projective plane, it should certainly satisfy
        these axioms. But does anything satisfy them? These doubts are dispelled by
        the following model.
      </p>

      <Definition title="The Real Projective Plane ℝP²">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Take <strong>"points"</strong> to be lines through O in ℝ³
          </li>
          <li>
            Take <strong>"lines"</strong> to be planes through O in ℝ³
          </li>
          <li>
            Take the <strong>"plane"</strong> to be the set of all lines through O in ℝ³
          </li>
        </ul>
      </Definition>

      <Theorem title="ℝP² Satisfies the Axioms">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Any two "points" are contained in a unique "line" because two given
            lines through O lie in a unique plane through O.
          </li>
          <li>
            Any two "lines" contain a unique "point" because any two planes
            through O meet in a unique line through O.
          </li>
          <li>
            There are four different "points," no three of which are in a "line":
            for example, the lines from O to (1,0,0), (0,1,0), (0,0,1), and (1,1,1).
          </li>
        </ol>
      </Theorem>

      <h3>Viewing with an All-Seeing Eye</h3>

      <p>
        Lines and planes through O in ℝ³ capture the idea of <strong>viewing with
        an all-seeing eye</strong>. The point O is the position of the eye, and the
        lines through O connect the eye to points in the plane.
      </p>

      <p>
        Consider how the eye sees the plane z = −1. Points P₁, P₂, P₃, ... in this
        plane are joined to the eye by lines through O. As a point Pₙ tends to infinity,
        its line of sight tends toward horizontal. Therefore:
      </p>

      <Callout type="info">
        <strong>Points at Infinity:</strong> The horizontal lines through O are the
        "points at infinity" of the plane z = −1, and the plane of all horizontal
        lines through O is the "horizon" or "line at infinity."
      </Callout>

      <h3>One Point at Infinity per Line</h3>

      <p>
        This model makes clear why each line has only <strong>one</strong> point at
        infinity, not two: The lines connecting O to points P along a line M tend
        toward the <em>same</em> horizontal line as P tends to infinity in either
        direction (namely, the parallel to M through O).
      </p>

      <h3>The Real Projective Line</h3>

      <p>
        It is hard to find a surface that behaves like ℝP², but it is easy to find
        a curve that behaves like any "line" in it—the <strong>real projective line</strong>.
      </p>

      <Definition title="Modeling a Projective Line">
        <p>
          The "points" in a "line" of ℝP²—namely, the lines through O in some plane
          through O—correspond to points of a circle through O. Each point P ≠ O on
          the circle corresponds to the line through O and P, and the point O itself
          corresponds to the tangent line at O.
        </p>
      </Definition>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.3.1</h4>
        <p className="text-slate-300">
          Find the plane ax + by + cz = 0 through the points (0,0,1) and (1,1,1),
          and check that it does not contain the points (1,0,0) and (0,1,0).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.3.2</h4>
        <p className="text-slate-300">
          Show that ℝP² has four "lines," no three of which have a common "point."
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.3.3</h4>
        <p className="text-slate-300">
          Suppose that A, B, C, D are four "points" in a projective plane, no three
          of which are in a "line." Consider the "lines" AB, BC, CD, DA. Show that
          if AB and BC have a common point E, then E = B.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.3.4</h4>
        <p className="text-slate-300">
          Deduce from Exercise 5.3.3 that the three lines AB, BC, CD have no common
          point, and that the same is true of any three of the lines AB, BC, CD, DA.
        </p>
      </div>

      <SectionQuiz
        sectionId={33}
        questions={quizMap[33] || []}
        title="Projective Plane Axioms Quiz"
      />
    </LessonLayout>
  );
}
