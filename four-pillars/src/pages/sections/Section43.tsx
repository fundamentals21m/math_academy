import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2>Projective Arithmetic</h2>

      <p>
        If we choose any two lines in a projective plane as the x- and y-axes, we
        can add and multiply any points on the x-axis by certain constructions. The
        constructions resemble constructions of Euclidean geometry, but they use
        straightedge only, so they make sense in projective geometry.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> To keep the constructions simple, we use lines
        we call "parallel," but this merely means lines meeting on a designated
        "line at infinity." The real difficulty is that the construction of a + b
        is different from the construction of b + a, so it is a "coincidence" if
        a + b = b + a. Similarly, it is a "coincidence" if ab = ba, or if any other
        law of algebra holds.
      </Callout>

      <h3>Addition</h3>

      <p>
        To construct the sum a + b of points a and b on the x-axis, we take any
        line L parallel to the x-axis and construct the following lines:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>A line from a to the point where L meets the y-axis</li>
          <li>A line from b parallel to the y-axis</li>
          <li>A parallel to the first line through the intersection of the second line and L</li>
        </ol>
      </div>

      <Definition title="Construction of Sum">
        <p>
          This construction is similar in spirit to the construction of the sum in
          Section 1.1. There we "copied a length" by moving it from one place to
          another by a compass. The spirit of the compass remains in the projective
          construction: the first and third lines form a "compass" that "copies" the
          length Oa to the point b.
        </p>
      </Definition>

      <h3>Independence of the Choice of L</h3>

      <p>
        We need the line L to construct a + b, but we get the same point a + b
        from any other line L′ parallel to the x-axis.
      </p>

      <Theorem title="Sum Independence">
        <p>
          The sum a + b is independent of the choice of line L parallel to the x-axis.
        </p>
        <p className="mt-2 text-slate-300">
          This coincidence follows from the little Desargues theorem. The black sides
          of the solid triangles are parallel by construction, as are the gray sides.
          Then it follows from the little Desargues theorem that the dotted sides are
          also parallel, and one of them ends at the point a + b constructed from L′.
        </p>
      </Theorem>

      <h3>Multiplication</h3>

      <p>
        To construct the product ab of two points a and b on the x-axis, we first
        need to choose a point ≠ O on the x-axis to be 1. We also choose a point
        ≠ O to be the 1 on the y-axis.
      </p>

      <Definition title="Construction of Product">
        <p>
          The point ab is constructed by drawing the black and gray lines from 1
          and a on the x-axis to 1 on the y-axis, and then drawing their parallels.
          This construction is the projective version of "multiplication by a" done
          in Section 1.4.
        </p>
      </Definition>

      <p>
        Choosing the 1 on the x-axis means choosing a unit of length on the x-axis,
        so the position of ab definitely depends on it. For example, ab = b if a = 1
        but ab ≠ b if a ≠ 1.
      </p>

      <Theorem title="Product Independence from y-axis 1">
        <p>
          The position of ab does not depend on the choice of 1 on the y-axis, as
          the scissors theorem shows.
        </p>
        <p className="mt-2 text-slate-300">
          If we choose 1′ instead of 1 to construct ab, the path from b to ab follows
          the dashed and the dotted line instead of the black and the gray line. But
          it ends in the same place, because the dotted line to ab is parallel to the
          dotted line to a, by the scissors theorem.
        </p>
      </Theorem>

      <h3>Interchangeability of the Axes</h3>

      <p>
        Once we have chosen points called 1 on both the x- and y-axes, it is natural
        to let each point a on the x-axis correspond to the point on the y-axis
        obtained by drawing the line through a parallel to the line through the
        points 1 on both axes.
      </p>

      <p>
        It is also natural to define sum and product on the y-axis by constructions
        like those on the x-axis. But then the question arises: Do the y-axis sum
        and product correspond to the x-axis sum and product?
      </p>

      <Theorem title="Sums Correspond">
        <p>
          If we construct a + b on the x-axis, then the corresponding point on the
          y-axis is the y-axis sum of the y-axis a and b.
        </p>
        <p className="mt-2 text-slate-300">
          The proof uses a Pappus configuration of gray, dashed, and dotted lines
          between the y-axis and a line M through b parallel to the y-axis.
        </p>
      </Theorem>

      <Theorem title="Products Correspond">
        <p>
          The product of a and b on the y-axis is the point corresponding to ab
          on the x-axis.
        </p>
        <p className="mt-2 text-slate-300">
          This follows from the scissors theorem. The gray lines construct ab on
          the x-axis, and the dotted lines construct ab on the y-axis. By the
          scissors theorem, they end at corresponding points.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.1</h4>
        <p className="text-slate-300">
          Show that a + O = a for any a, so O functions as the zero on the x-axis.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.2</h4>
        <p className="text-slate-300">
          Show that, for any a, there is a point b that serves as −a; that is,
          a + b = O. (Warning: Do not be tempted to use measurement to find b.
          Work backward from O = a + b, reversing the construction of the sum.)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.3</h4>
        <p className="text-slate-300">
          Show that a · 1 = a for any a.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.4</h4>
        <p className="text-slate-300">
          Show that, for any a ≠ O, there is a b that serves as a⁻¹; that is,
          ab = 1. (Again, do the construction of the product in reverse.)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.5</h4>
        <p className="text-slate-300">
          What happens when we try to construct a + ∞?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.4.6</h4>
        <p className="text-slate-300">
          What is −∞?
        </p>
      </div>

      <Callout type="warning">
        <strong>Note:</strong> The answers to Exercises 6.4.5 and 6.4.6 are
        incompatible with ordinary arithmetic. This is why we do not include ∞
        among the points we add and multiply.
      </Callout>

      <SectionQuiz
        sectionId={43}
        questions={quizMap[43] || []}
        title="Projective Arithmetic Quiz"
      />
    </LessonLayout>
  );
}
