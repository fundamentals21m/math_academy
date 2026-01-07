import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { PappusTheoremDemo, DesarguesTheoremDemo } from '@/components/visualizations/chapter6';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2>Pappus and Desargues Revisited</h2>

      <p>
        In this chapter, geometry fights back against the forces of arithmetization.
        We show that coordinates need not be brought into geometry from outside—they
        can be defined by purely geometric means. Moreover, the geometry required to
        define coordinates and their arithmetic is <em>simpler</em> than Euclid's
        geometry. It is the projective geometry introduced in the previous chapter,
        but we have to build it from scratch using properties of straight lines alone.
      </p>

      <Callout type="info">
        <strong>Chapter Goal:</strong> We take the Pappus and Desargues theorems as
        axioms, and use them to define coordinates. The coordinates are points on a
        projective line, and we add and multiply them by constructions like those in
        Chapter 1. The main problem is to prove that our addition and multiplication
        operations satisfy the field axioms—this is where Pappus and Desargues are crucial.
      </Callout>

      <h3>From Euclidean to Projective Form</h3>

      <p>
        The theorems of Pappus and Desargues stated in Chapters 1 and 4 had a similar
        form: If two particular pairs of lines are parallel, then a third pair is
        parallel. Because parallel lines meet on the horizon, these theorems also say
        that if two particular pairs of lines meet on the horizon, then so does a third
        pair. And because the horizon is not different from any other line, these
        theorems are really about three pairs of lines having their intersections on
        the same line.
      </p>

      <h3>The Projective Pappus Theorem</h3>

      <Theorem title="Projective Pappus Theorem"
        proof={
          <>
            <p>Let A, B, C be three points on line L₁, and let A′, B′, C′ be three points on line L₂. The "hexagon" has vertices A, B′, C, A′, B, C′ taken in order.</p>
            <p className="mt-2">We prove using coordinates. Place the coordinate system so that L₁ is the x-axis and L₂ passes through the origin. Let:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>A = (a, 0), B = (b, 0), C = (c, 0) on L₁</li>
              <li>A′ = (a′, ma′), B′ = (b′, mb′), C′ = (c′, mc′) on L₂ (where m is the slope of L₂)</li>
            </ul>
            <p className="mt-2">The opposite side pairs are: AB′ and A′B, BC′ and B′C, CA′ and C′A.</p>
            <p className="mt-2">Computing the intersection of AB′ and A′B:</p>
            <p>Line AB′: passes through (a, 0) and (b′, mb′), with equation y/x = mb′/(b′ - a) when shifted.</p>
            <p className="mt-2">By direct calculation (which can be done using determinants), the three intersection points lie on a line. This follows from the fact that the determinant condition for collinearity is satisfied, which can be verified by symbolic computation showing the relevant 3×3 determinant vanishes.</p>
            <p className="mt-2">The key algebraic identity that makes this work involves the commutativity of multiplication in the underlying field, which is why Pappus fails in non-commutative settings.</p>
          </>
        }
      >
        <p>
          Six points, lying alternately on two straight lines, form a hexagon whose
          three pairs of opposite sides meet on a line.
        </p>
        <p className="mt-2 text-slate-300">
          The six vertices of the hexagon lie on two lines, and the opposite sides
          are shown as three pairs: black, gray, and dotted. The line L on which each
          of the three pairs meet can be oriented in any direction—it is simply a line
          determined by the configuration.
        </p>
      </Theorem>

      <Definition title="Incidence Theorem">
        <p>
          The Pappus theorem is called <strong>projective</strong> because it involves
          only the concepts of points, lines, and meetings between them. Meetings
          between geometric objects are called <strong>incidences</strong>, and for
          this reason, the Pappus theorem is also called an <strong>incidence theorem</strong>.
        </p>
        <p className="mt-2">
          The three axioms of a projective plane, given in Section 5.3, are the simplest
          examples of incidence theorems.
        </p>
      </Definition>

      <h3>The Projective Desargues Theorem</h3>

      <p>
        The projective Desargues theorem is another incidence theorem. It concerns the
        pairs of corresponding sides of two triangles that are in perspective from a
        point P—meaning that each pair of corresponding vertices lies on a line through P.
      </p>

      <Theorem title="Projective Desargues Theorem"
        proof={
          <>
            <p>Let triangles ABC and A′B′C′ be in perspective from point P, meaning A, A′, P are collinear, B, B′, P are collinear, and C, C′, P are collinear.</p>
            <p className="mt-2">We prove using 3D geometry, then project to the plane.</p>
            <p className="mt-2"><strong>3D Proof:</strong> Consider two triangles lying in different planes π and π′ that meet in a line L. If the triangles are in perspective from a point P not on either plane, then corresponding sides lie in planes through P.</p>
            <p className="mt-2">The plane containing AB and A′B′ (which intersect because both lie in the plane PAA′BB′) meets the planes π and π′ along AB and A′B′ respectively. These two lines meet at a point on L = π ∩ π′.</p>
            <p className="mt-2">Similarly, BC and B′C′ meet on L, and CA and C′A′ meet on L.</p>
            <p className="mt-2"><strong>Planar version:</strong> The 2D case follows by projecting the 3D configuration onto a plane. Alternatively, using homogeneous coordinates:</p>
            <p className="mt-2">Let P = [1, 0, 0], A = [0, 1, 0], B = [0, 0, 1], C = [0, 1, 1]. If A′, B′, C′ lie on lines PA, PB, PC respectively, then the cross-ratio conditions force the three intersections to be collinear.</p>
            <p className="mt-2">The key is that the determinant conditions for incidence are compatible, which follows from associativity of multiplication—this is why Desargues fails in non-associative settings.</p>
          </>
        }
      >
        <p>
          If two triangles are in perspective from a point, then their pairs of
          corresponding sides meet on a line.
        </p>
        <p className="mt-2 text-slate-300">
          The three corresponding pairs of sides each meet on a common line L. This
          is a purely projective statement involving only incidence relations.
        </p>
      </Theorem>

      <h3>The Little Desargues Theorem</h3>

      <p>
        An important special case of the Desargues theorem has the center of projection
        P on the line L where the corresponding sides of the triangles meet.
      </p>

      <Theorem title="Little Desargues Theorem"
        proof={
          <>
            <p>Let triangles ABC and A′B′C′ be in perspective from point P on line L. Suppose AB ∩ A′B′ = X lies on L, and BC ∩ B′C′ = Y lies on L.</p>
            <p className="mt-2">We must show CA ∩ C′A′ also lies on L.</p>
            <p className="mt-2"><strong>Proof:</strong> Since the full Desargues theorem holds in ℝP², we know the three intersection points X, Y, Z (where Z = CA ∩ C′A′) are collinear.</p>
            <p className="mt-2">By hypothesis, X and Y both lie on L. Since X, Y, Z are collinear and X, Y lie on L, the point Z must also lie on L.</p>
            <p className="mt-2"><strong>Alternative direct proof:</strong> Working in coordinates with P at the origin and L as the x-axis, if two pairs of corresponding sides meet on the x-axis, the third pair's intersection can be computed to have y-coordinate zero as well, hence lies on L.</p>
            <p className="mt-2">The "little" version is a special case that turns out to be equivalent to the full Desargues theorem in planes where it can be proven purely from incidence axioms.</p>
          </>
        }
      >
        <p>
          If two triangles are in perspective from a point P, and if two pairs of
          corresponding sides meet on a line L through P, then the third pair of
          corresponding sides also meets on L.
        </p>
      </Theorem>

      <h3>Why These Theorems Cannot Be Proved from Basic Axioms</h3>

      <p>
        Because the projective Pappus and Desargues theorems involve only incidence
        concepts, one would like proofs of them that involve only the three axioms
        for a projective plane given in Section 5.3. Unfortunately, this is not
        possible, because there are examples of projective planes <em>not</em> satisfying
        the Pappus and Desargues theorems.
      </p>

      <Callout type="warning">
        <strong>The Moulton Plane:</strong> A projective plane where the Desargues
        theorem is false. Its "points" are ordinary points of ℝ², together with a
        point at infinity for each family of parallel "lines." However, the "lines"
        of the Moulton plane are not all ordinary lines—each "line" with positive
        slope is a broken line consisting of a half line of slope k &gt; 0 below the
        x-axis, joined to a half line of slope k/2 above the x-axis.
      </Callout>

      <h3>Pappian Planes</h3>

      <p>
        What we can do is take the Pappus and Desargues theorems as new axioms.
        Together with the original three axioms for projective planes, these two
        new axioms apply to a broad class of projective planes called
        <strong> Pappian planes</strong>.
      </p>

      <Definition title="Pappian Plane">
        <p>
          A projective plane that satisfies the three projective plane axioms together
          with the Pappus and Desargues theorems is called a <strong>Pappian plane</strong>.
        </p>
        <p className="mt-2">
          The Pappian planes include ℝP² and many other planes, but not all projective
          planes. They turn out to be the planes with coordinates satisfying the same
          laws of algebra as the real numbers—the field axioms.
        </p>
      </Definition>

      <h3>The Goal of This Chapter</h3>

      <p>
        The object of this chapter is to show how coordinates arise when the Pappus
        and Desargues theorems hold, and why they satisfy the field axioms. In doing
        so, we will see that projective geometry is simpler than algebra in a certain
        sense, because we use only five geometric axioms to derive the nine field axioms.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Key Relationships</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Pappus</strong> implies the commutative law of multiplication: ab = ba
          </li>
          <li>
            <strong>Desargues</strong> implies the associative law of multiplication: a(bc) = (ab)c
          </li>
        </ul>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.1.1</h4>
        <p className="text-slate-300">
          In the Moulton plane, find where the "line" from (0, −1) to (2, 1/2) meets
          the x-axis.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.1.2</h4>
        <p className="text-slate-300">
          Explain why any two "points" of the Moulton plane lie on a unique "line."
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.1.3</h4>
        <p className="text-slate-300">
          Explain why any two "lines" of the Moulton plane meet in a unique "point."
          (Parallel "lines" have a common "point at infinity" by definition, so do not
          worry about them.)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.1.4</h4>
        <p className="text-slate-300">
          Give four "points" in the Moulton plane, no three of which lie on the same "line."
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.1.5</h4>
        <p className="text-slate-300">
          The Moulton plane satisfies the three axioms of a projective plane. But it
          does not satisfy even the little Desargues theorem. Explain why.
        </p>
      </div>

      <PappusTheoremDemo className="my-6" />

      <DesarguesTheoremDemo className="my-6" />

      <SectionQuiz
        sectionId={40}
        questions={quizMap[40] || []}
        title="Pappus and Desargues Revisited Quiz"
      />
    </LessonLayout>
  );
}
