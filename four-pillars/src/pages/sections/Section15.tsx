import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>The Number Line and the Number Plane</h2>

      <p>
        Around 1630, Pierre de Fermat and René Descartes independently
        discovered the advantages of using numbers in geometry as <strong>coordinates</strong>.
        Descartes was the first to publish a detailed account in his book
        <em> Géométrie</em> of 1637. For this reason, the coordinate approach to
        geometry became known as <strong>Cartesian</strong> (from the old way of
        writing his name: Des Cartes).
      </p>

      <Callout type="info">
        <strong>Historical Note:</strong> Descartes initially thought that geometry
        was as Euclid described it, and that numbers merely assist in studying
        geometric figures. But later mathematicians discovered objects with
        "non-Euclidean" properties, making it desirable to <em>define</em> points,
        lines, and length, and to <em>prove</em> that they satisfy Euclid's axioms.
      </Callout>

      <h3>The Number Line</h3>

      <p>
        The set ℝ of real numbers results from filling the gaps in the set ℚ of
        rational numbers with irrational numbers, such as √2. This innovation
        enables us to consider ℝ as a <strong>line</strong>, because it has no gaps
        and the numbers in it are ordered just as we imagine points on a line to be.
      </p>

      <Definition title="The Number Line">
        <p>
          We say that ℝ, together with its ordering, is a <strong>model</strong> of
          the line. One of our goals is to use ℝ to build a model for all of
          Euclidean plane geometry: a structure containing "lines," "circles,"
          "line segments," and so on, with all of the properties required by
          Euclid's or Hilbert's axioms.
        </p>
      </Definition>

      <h3>Building the Number Plane</h3>

      <p>
        The first step is to build the "plane," and in this we are guided by
        the properties of parallels in Euclid's geometry. We imagine a pair of
        perpendicular lines, called the <strong>x-axis</strong> and the
        <strong> y-axis</strong>, intersecting at a point O called the
        <strong> origin</strong>.
      </p>

      <p>
        We interpret the axes as number lines, with O the number 0 on each, and
        we assume that:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The positive direction on the x-axis is to the <strong>right</strong></li>
        <li>The positive direction on the y-axis is <strong>upward</strong></li>
      </ul>

      <h3>Coordinates of a Point</h3>

      <p>
        Through any point P, there is (by the parallel axiom) a unique line
        parallel to the y-axis and a unique line parallel to the x-axis. These
        two lines meet the x-axis and y-axis at numbers <em>a</em> and <em>b</em> called
        the <strong>x-coordinate</strong> and <strong>y-coordinate</strong> of P, respectively.
      </p>

      <Definition title="Ordered Pairs">
        <p>
          To keep the x-coordinate <em>a</em> and the y-coordinate <em>b</em> in their
          places, we use the <strong>ordered pair</strong> (a, b). For example:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>(3, 4) is the point with x-coordinate = 3 and y-coordinate = 4</li>
          <li>(4, 3) is a <em>different</em> point with x-coordinate = 4 and y-coordinate = 3</li>
        </ul>
        <p className="mt-2">
          Just as the intersection of 3rd Street and 4th Avenue is different from
          the intersection of 4th Street and 3rd Avenue!
        </p>
      </Definition>

      <Callout type="important">
        <strong>Uniqueness:</strong> The ordered pair (a, b) specifies P uniquely
        because any other point will have at least one different parallel passing
        through it and hence will differ from P in either the x- or y-coordinate.
      </Callout>

      <h3>The Number Plane ℝ²</h3>

      <p>
        Given the existence of a number line ℝ whose points are real numbers,
        we also have a <strong>number plane</strong> whose points are ordered pairs
        of real numbers.
      </p>

      <Definition title="The Cartesian Plane">
        <p>
          The <strong>Cartesian plane</strong> (or <strong>number plane</strong>) is
          the set of all ordered pairs of real numbers:
        </p>
        <MathBlock>
          {`\\mathbb{R}^2 = \\{(x, y) : x, y \\in \\mathbb{R}\\}`}
        </MathBlock>
        <p className="mt-2">
          We often write this as ℝ × ℝ or simply ℝ².
        </p>
      </Definition>

      <h3>The Power of Coordinates</h3>

      <p>
        This program of building geometry from numbers is called the
        <strong> arithmetization of geometry</strong>. It accomplishes much:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Algebraic Description</h4>
          <p className="text-slate-300 mt-2">
            It gives an algebraic description of constructibility by straightedge
            and compass, which makes it possible to prove that certain figures
            are <em>not</em> constructible.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Motion and Transformations</h4>
          <p className="text-slate-300 mt-2">
            It enables us to define what it means to "move" a geometric figure,
            which provides justification for Euclid's proof of SAS and raises
            a new kind of geometric question: What kinds of "motion" exist?
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">Access to Algebra</h4>
          <p className="text-slate-300 mt-2">
            One clear advantage is access to algebra, which reduces many geometric
            problems to simple calculations. Algebra also offers some conceptual
            advantages, as we will see.
          </p>
        </div>
      </div>

      <Theorem title="The Foundation">
        <p>
          By defining points, lines, and circles using real numbers and equations,
          we can <em>prove</em> that all of Euclid's axioms are satisfied.
          This shows that geometry follows from properties of the real numbers.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.1.1</h4>
        <p className="text-slate-300">
          Plot the following points on the coordinate plane: (2, 3), (-1, 4),
          (0, -2), and (-3, -1). In which quadrant does each point lie?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.1.2</h4>
        <p className="text-slate-300">
          Explain why the point (a, b) is different from the point (b, a) when
          a ≠ b. Give a specific example.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.1.3</h4>
        <p className="text-slate-300">
          What are the coordinates of the origin? What are the coordinates of
          a point on the positive x-axis? On the negative y-axis?
        </p>
      </div>

      <SectionQuiz
        sectionId={15}
        questions={quizMap[15] || []}
        title="Number Line and Plane Quiz"
      />
    </LessonLayout>
  );
}
