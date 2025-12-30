import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Lines and Their Equations</h2>

      <p>
        One of the most important consequences of the parallel axiom is the
        Thales theorem and hence the proportionality of similar triangles.
        When coordinates are introduced, this allows us to define the property
        of straight lines known as <strong>slope</strong>.
      </p>

      <h3>The Concept of Slope</h3>

      <p>
        You know from high-school mathematics that slope is the quotient
        "rise over run" and, more importantly, that the value of the slope
        does not depend on which two points of the line define the rise and the run.
      </p>

      <Definition title="Slope">
        <p>
          The <strong>slope</strong> of a line is the ratio of the vertical change
          (rise) to the horizontal change (run) between any two points on the line:
        </p>
        <MathBlock>
          {`\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}`}
        </MathBlock>
      </Definition>

      <h3>Why Slope is Constant</h3>

      <p>
        Consider two segments of the same line: AB with rise |BC| and run |AC|,
        and A'B' with rise |B'C'| and run |A'C'|. The angles at corresponding
        vertices are equal because parallel lines create equal angles.
      </p>

      <Theorem title="Constant Slope">
        <p>
          Triangles ABC and A'B'C' are similar (by AA similarity), and so their
          corresponding sides are proportional. In particular:
        </p>
        <MathBlock>
          {`\\frac{|BC|}{|AC|} = \\frac{|B'C'|}{|A'C'|}`}
        </MathBlock>
        <p className="mt-2">
          That is, slope = constant for all points on the line.
        </p>
      </Theorem>

      <h3>The Equation of a Line</h3>

      <p>
        Suppose we are given a line of slope <em>a</em> that crosses the y-axis
        at the point Q where y = c. If P = (x, y) is any point on this line, then
        the rise from Q to P is y - c and the run is x. Hence:
      </p>

      <MathBlock>
        {`\\text{slope} = a = \\frac{y - c}{x}`}
      </MathBlock>

      <p>
        Multiplying both sides by x gives y - c = ax, that is:
      </p>

      <MathBlock>
        {`y = ax + c`}
      </MathBlock>

      <Definition title="Slope-Intercept Form">
        <p>
          The equation <strong>y = ax + c</strong> is called the
          <strong> slope-intercept form</strong> of a line, where:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>a</strong> is the slope of the line</li>
          <li><strong>c</strong> is the y-intercept (where the line crosses the y-axis)</li>
        </ul>
        <p className="mt-2">
          This equation is satisfied by all points on the line, and only by them.
        </p>
      </Definition>

      <h3>Vertical Lines</h3>

      <p>
        Almost all lines have equations of the slope-intercept form; the only
        exceptions are lines that do not cross the y-axis. These are the
        <strong> vertical lines</strong>, which do not have a finite slope
        (we could say they have infinite slope).
      </p>

      <p>
        A vertical line has an equation of the form:
      </p>

      <MathBlock>
        {`x = c, \\quad \\text{for some constant } c`}
      </MathBlock>

      <h3>General Form of a Line</h3>

      <p>
        Combining both cases, all lines have equations of the form:
      </p>

      <MathBlock>
        {`ax + by + c = 0, \\quad \\text{for some constants } a, b, \\text{ and } c`}
      </MathBlock>

      <Definition title="Linear Equation">
        <p>
          An equation of the form ax + by + c = 0 is called a
          <strong> linear equation</strong> in the variables x and y. The set of
          all points (x, y) satisfying this equation forms a line in ℝ².
        </p>
      </Definition>

      <h3>Two Key Axioms as Theorems</h3>

      <Callout type="important">
        <strong>A Change in Perspective:</strong> Descartes viewed equations of
        lines as information deduced from Euclid's axioms (in particular, from
        the parallel axiom). But we can also take the opposite view: Equations
        <em> define</em> what lines are, and they provide a <em>model</em> of
        Euclid's axioms—showing that geometry follows from properties of real numbers.
      </Callout>

      <p>
        If a line is defined to be the set of points (x, y) in the number plane
        satisfying a linear equation, then we can <em>prove</em> the following
        statements that Euclid took as axioms:
      </p>

      <Theorem title="Unique Line Through Two Points">
        <p>
          There is a unique line through any two distinct points.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Given distinct points P₁ = (x₁, y₁) and P₂ = (x₂, y₂), any point
          P = (x, y) on the line through them satisfies:
        </p>
        <MathBlock>
          {`\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{y - y_1}{x - x_1} \\quad \\text{(if } x_2 \\neq x_1\\text{)}`}
        </MathBlock>
      </Theorem>

      <Theorem title="Parallel Axiom">
        <p>
          For any line L and point P outside L, there is a unique line through
          P not meeting L.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          The parallel to L through P is the unique line through P with the
          same slope as L.
        </p>
      </Theorem>

      <h3>Parallel Lines</h3>

      <p>
        Parallel lines, not surprisingly, turn out to be lines with the same slope:
      </p>

      <Theorem title="Parallel Lines Have Equal Slopes">
        <p>
          Distinct lines y = ax + c and y = a'x + c' have a common point unless
          they have the same slope (a = a'). Lines with the same slope are parallel.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.2.1</h4>
        <p className="text-slate-300">
          Given distinct points P₁ = (x₁, y₁) and P₂ = (x₂, y₂), show that any
          point P = (x, y) on the line through P₁ and P₂ satisfies the equation
          by equating slopes.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.2.2</h4>
        <p className="text-slate-300">
          Find the equation of the line passing through (1, 2) and (3, 6).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.2.3</h4>
        <p className="text-slate-300">
          If a line L has equation y = 3x, what is the equation of the parallel
          to L through P = (2, 2)?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.2.4</h4>
        <p className="text-slate-300">
          Show that distinct lines y = ax + c and y = a'x + c' have a common
          point unless they have the same slope. What happens when one line
          is vertical?
        </p>
      </div>

      <SectionQuiz
        sectionId={16}
        questions={quizMap[16] || []}
        title="Lines and Equations Quiz"
      />
    </LessonLayout>
  );
}
