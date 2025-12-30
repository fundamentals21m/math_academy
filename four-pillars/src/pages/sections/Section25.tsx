import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { TriangleCentersDemo } from '@/components/visualizations/chapter4';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2>Midpoints and Centroids</h2>

      <p>
        The definition of a real vector space does not include a definition of distance,
        but we can speak of the <strong>midpoint</strong> of a line segment and, more
        generally, of the point that divides a segment in a given ratio.
      </p>

      <h3>Finding Points on a Line</h3>

      <p>
        First observe that <strong>v</strong> is obtained from <strong>u</strong> by
        adding <strong>v</strong> − <strong>u</strong>, the vector that represents the
        position of <strong>v</strong> relative to <strong>u</strong>. More generally,
        adding any scalar multiple <em>a</em>(<strong>v</strong> − <strong>u</strong>)
        to <strong>u</strong> produces a point whose direction relative to <strong>u</strong>
        is the same as that of <strong>v</strong>.
      </p>

      <Definition title="Points on a Line">
        <p>
          The points <strong>u</strong> + <em>a</em>(<strong>v</strong> − <strong>u</strong>)
          are precisely those on the line through <strong>u</strong> and <strong>v</strong>.
        </p>
      </Definition>

      <h3>The Midpoint Formula</h3>

      <p>
        In particular, the midpoint of the segment between <strong>u</strong> and
        <strong> v</strong> is obtained by adding ½(<strong>v</strong> − <strong>u</strong>)
        to <strong>u</strong>:
      </p>

      <Theorem title="Midpoint Formula">
        <MathBlock>
          {`\\text{midpoint of } \\mathbf{u} \\text{ and } \\mathbf{v} = \\mathbf{u} + \\frac{1}{2}(\\mathbf{v} - \\mathbf{u}) = \\frac{1}{2}(\\mathbf{u} + \\mathbf{v})`}
        </MathBlock>
        <p className="mt-2">
          The midpoint of a line segment between <strong>u</strong> and <strong>v</strong>
          is the <strong>vector average</strong> of <strong>u</strong> and <strong>v</strong>.
        </p>
      </Theorem>

      <h3>Diagonals of a Parallelogram</h3>

      <p>
        This description of the midpoint gives a very short proof of the theorem
        that the diagonals of a parallelogram bisect each other.
      </p>

      <Theorem title="Parallelogram Diagonals Bisect">
        <p>
          By choosing one vertex of a parallelogram at <strong>0</strong>, we can
          assume the other vertices are at <strong>u</strong>, <strong>v</strong>,
          and <strong>u</strong> + <strong>v</strong>.
        </p>
        <p className="mt-2">
          The midpoint of the diagonal from <strong>0</strong> to <strong>u</strong> + <strong>v</strong>
          is ½(<strong>u</strong> + <strong>v</strong>). And this is also the midpoint of
          the other diagonal—the segment between <strong>u</strong> and <strong>v</strong>.
        </p>
      </Theorem>

      <h3>The Centroid</h3>

      <Definition title="Centroid">
        <p>
          The <strong>vector average</strong> of two or more points is physically
          significant because it is the <strong>barycenter</strong> (center of mass) of
          the system obtained by placing equal masses at the given points.
        </p>
        <p className="mt-2">
          The geometric name for this vector average point is the <strong>centroid</strong>.
        </p>
      </Definition>

      <h3>Medians of a Triangle</h3>

      <p>
        In the case of a triangle, the centroid has an alternative geometric description,
        given by the following classical theorem about <strong>medians</strong>: the lines
        from the vertices of a triangle to the midpoints of the respective opposite sides.
      </p>

      <Theorem title="Concurrence of Medians">
        <p>
          The medians of any triangle pass through the same point, the centroid of the triangle.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          Suppose the vertices of the triangle are <strong>u</strong>, <strong>v</strong>,
          and <strong>w</strong>. The median from <strong>u</strong> goes to the
          midpoint ½(<strong>v</strong> + <strong>w</strong>).
        </p>
        <p className="text-slate-300 mb-2">
          The medians meet at the point 2/3 of the way from <strong>u</strong> to
          ½(<strong>v</strong> + <strong>w</strong>):
        </p>
        <MathBlock>
          {`\\mathbf{u} + \\frac{2}{3}\\left(\\frac{1}{2}(\\mathbf{v} + \\mathbf{w}) - \\mathbf{u}\\right) = \\frac{1}{3}(\\mathbf{u} + \\mathbf{v} + \\mathbf{w})`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          This is the centroid! A similar argument shows it lies 2/3 of the way along
          each of the other two medians.
        </p>
      </div>

      <Callout type="info">
        <strong>Symmetry Insight:</strong> The formula ⅓(<strong>u</strong> + <strong>v</strong> + <strong>w</strong>)
        is unchanged when we permute the letters <strong>u</strong>, <strong>v</strong>, and <strong>w</strong>.
        This symmetry guarantees all three medians pass through the same point.
      </Callout>

      <h3>Extension to Three Dimensions</h3>

      <p>
        The theorem about concurrence of medians generalizes beautifully to three
        dimensions, where the figure corresponding to a triangle is a <strong>tetrahedron</strong>:
        a solid with four vertices joined by six lines that bound four triangular faces.
      </p>

      <Theorem title="Tetrahedron Centroid">
        <p>
          If a tetrahedron has vertices <strong>t</strong>, <strong>u</strong>,
          <strong> v</strong>, and <strong>w</strong>, then the four lines from
          each vertex to the centroid of the opposite face all meet at the centroid:
        </p>
        <MathBlock>
          {`\\frac{1}{4}(\\mathbf{t} + \\mathbf{u} + \\mathbf{v} + \\mathbf{w})`}
        </MathBlock>
        <p className="mt-2">
          Each line passes through the centroid at 3/4 of the way from the vertex
          to the centroid of the opposite face.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.3.1</h4>
        <p className="text-slate-300">
          Show that a square with vertices <strong>t</strong>, <strong>u</strong>,
          <strong> v</strong>, <strong>w</strong> has center
          ¼(<strong>t</strong> + <strong>u</strong> + <strong>v</strong> + <strong>w</strong>).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.3.2</h4>
        <p className="text-slate-300">
          Suppose a tetrahedron has vertices <strong>t</strong>, <strong>u</strong>,
          <strong> v</strong>, and <strong>w</strong>. Show that the centroid of the
          face opposite to <strong>t</strong> is ⅓(<strong>u</strong> + <strong>v</strong> + <strong>w</strong>).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.3.3</h4>
        <p className="text-slate-300">
          Show that the point 3/4 of the way from <strong>t</strong> to the centroid
          of the opposite face is ¼(<strong>t</strong> + <strong>u</strong> + <strong>v</strong> + <strong>w</strong>).
        </p>
      </div>

      <TriangleCentersDemo className="my-6" />

      <SectionQuiz
        sectionId={25}
        questions={quizMap[25] || []}
        title="Midpoints and Centroids Quiz"
      />
    </LessonLayout>
  );
}
