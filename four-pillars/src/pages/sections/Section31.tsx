import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2>Perspective Drawing</h2>

      <p>
        Sometime in the 15th century, Italian artists discovered how to draw
        three-dimensional scenes in correct perspective. This discovery
        represented a great advance in realism, transforming how artists
        depicted the world.
      </p>

      <h3>The Discovery of Perspective</h3>

      <p>
        The simplest test of perspective drawing is the depiction of a tiled
        floor. Before perspective was understood, artists drew all tiles as
        rectangles, which makes the floor look vertical. We know from experience
        that a horizontal rectangle does not <em>look</em> rectangular—its angles
        are not all right angles because its sides converge to a common point on
        the horizon.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> In perspective drawing, parallel lines
        that recede from the viewer appear to meet at a single point on the
        horizon, called the <strong>vanishing point</strong>.
      </Callout>

      <h3>The Costruzione Legittima</h3>

      <p>
        The Italians drew tiles by a method called the <em>costruzione legittima</em>
        (legitimate construction), first published by Leon Battista Alberti in 1436.
      </p>

      <Definition title="Costruzione Legittima">
        <p>The method works as follows:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            The bottom edge of the picture coincides with a line of tile edges
          </li>
          <li>
            A horizontal line is chosen as the horizon
          </li>
          <li>
            Lines are drawn from equally spaced points on the bottom edge to a
            point on the horizon (the vanishing point)
          </li>
          <li>
            These lines depict the parallel columns of tiles perpendicular to
            the bottom edge
          </li>
          <li>
            A horizontal line near the bottom completes the first row of tiles
          </li>
        </ol>
      </Definition>

      <h3>Finding the Tile Rows</h3>

      <p>
        The real problem comes next: How do we find the correct horizontal lines
        to depict the 2nd, 3rd, 4th, ... rows of tiles? The answer is surprisingly
        simple:
      </p>

      <Theorem title="The Diagonal Method">
        <p>
          Draw the diagonal of any tile in the bottom row. The diagonal necessarily
          crosses successive columns at the corners of tiles in the 2nd, 3rd, 4th, ...
          rows. Hence, these rows can be constructed by drawing horizontal lines at
          the successive crossings.
        </p>
      </Theorem>

      <h3>Mathematical Analysis</h3>

      <p>
        Consider a floor with rows of tiles crossing the x-axis at x = 0, 1, 2, 3, ...,
        and suppose the artist copies the view onto a vertical transparent screen
        through the y-axis, keeping a fixed eye position at the point (−1, 1).
      </p>

      <p>
        The perspective view of the points x = 0, 1, 2, 3, ... will be a series
        of points on the y-axis. The line from (−1, 1) to (n, 0) crosses the y-axis
        at:
      </p>

      <MathBlock>
        {`y = \\frac{n}{n+1}`}
      </MathBlock>

      <p>
        Hence, the perspective images of the points x = 0, 1, 2, 3, ... are the points:
      </p>

      <MathBlock>
        {`y = 0, \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\ldots`}
      </MathBlock>

      <h3>The Shift Function</h3>

      <p>
        If each of the points 0, 1, 2, 3, ... is sent to the next, then each of
        their perspective images y = 0, 1/2, 2/3, 3/4, ... is sent to the next.
        This shift is effected by the function:
      </p>

      <MathBlock>
        {`f(y) = \\frac{1}{2-y}`}
      </MathBlock>

      <Callout type="info">
        <strong>Fixed Point:</strong> The point y = 1 is not moved by this function
        (since f(1) = 1). This point corresponds to the horizon—the limit point
        where the rows of tiles appear to converge.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.1.1</h4>
        <p className="text-slate-300">
          Show that the line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).
          Hence verify that the perspective images of the points x = 0, 1, 2, 3, ...
          are the points y = 0, 1/2, 2/3, 3/4, ....
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.1.2</h4>
        <p className="text-slate-300">
          Show that the function f(y) = 1/(2−y) sends each perspective image
          y = 0, 1/2, 2/3, 3/4, ... to the next.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.1.3</h4>
        <p className="text-slate-300">
          Which point on the y-axis is not moved by the function f(y) = 1/(2−y),
          and what is the geometric significance of this point?
        </p>
      </div>

      <SectionQuiz
        sectionId={31}
        questions={quizMap[31] || []}
        title="Perspective Drawing Quiz"
      />
    </LessonLayout>
  );
}
