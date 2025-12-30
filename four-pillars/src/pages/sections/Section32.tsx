import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { PerspectiveProjectionDemo } from '@/components/visualizations/chapter5';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2>Drawing with Straightedge Alone</h2>

      <p>
        The <em>costruzione legittima</em> takes advantage of something that is
        visually obvious but mathematically mysterious—the fact that parallel
        lines generally do not look parallel, but appear to meet on the horizon.
      </p>

      <h3>Points at Infinity</h3>

      <Definition title="Vanishing Point and Line at Infinity">
        <ul className="list-disc list-inside space-y-2">
          <li>
            The point where a family of parallels appear to meet is called their
            <strong> vanishing point</strong> by artists, and their <strong>point
            at infinity</strong> by mathematicians.
          </li>
          <li>
            The horizon itself, which consists of all the points at infinity,
            is called the <strong>line at infinity</strong>.
          </li>
        </ul>
      </Definition>

      <h3>Limitations of the Costruzione Legittima</h3>

      <p>
        The costruzione legittima does not take full advantage of points at infinity.
        It involves some parallels that are really drawn parallel, so we need both
        straightedge and compass as used in Chapter 1. The construction also needs
        measurement to lay out the equally spaced points on the bottom line of the
        picture.
      </p>

      <Callout type="info">
        <strong>Key Question:</strong> Is it possible to draw a perspective view
        of a tiled floor with a straightedge alone? Absolutely!
      </Callout>

      <h3>Construction with Straightedge Alone</h3>

      <p>
        All one needs to get started is the horizon and a tile placed obliquely.
        The tile is created by two pairs of parallel lines, which are simply pairs
        that meet on the horizon.
      </p>

      <Theorem title="The Straightedge Construction">
        <ol className="list-decimal list-inside space-y-2">
          <li>Start with a horizon line and one tile (a quadrilateral whose opposite sides meet on the horizon)</li>
          <li>Draw the diagonal of this tile and extend it to the horizon, obtaining the point at infinity of all parallel diagonals</li>
          <li>This step allows us to draw two more diagonals, of tiles adjacent to the first one</li>
          <li>These diagonals give us the remaining sides of the adjacent tiles</li>
          <li>Repeat the process to fill in as many tiles as desired</li>
        </ol>
      </Theorem>

      <h3>Why It Works</h3>

      <p>
        This construction works because certain things remain the same in any view
        of the plane:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Straight lines remain straight</li>
          <li>Intersections remain intersections</li>
          <li>Parallel lines remain parallel or meet on the horizon</li>
        </ul>
      </div>

      <p>
        Since parallel lines always meet on the horizon if you point yourself in
        the right direction, if we could look in all directions at once we would
        see that <strong>any two lines have a point in common</strong>.
      </p>

      <h3>The Power of the Straightedge</h3>

      <p>
        This construction is easy and fun to do. Unlike the costruzione legittima,
        which requires both straightedge and compass for its measurements and
        parallel constructions, this method uses only incidence properties of
        lines—their meetings and intersections.
      </p>

      <Callout type="info">
        <strong>Try It:</strong> Get a straightedge and try the construction
        yourself! Start with a horizon line, draw one quadrilateral tile below it
        with opposite sides meeting on the horizon, and then extend using diagonals.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.2.1</h4>
        <p className="text-slate-300">
          Consider a triangular tile that could be half of a quadrangular tile.
          Draw a perspective view of the plane filled with many copies of this tile.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.2.2</h4>
        <p className="text-slate-300">
          By deleting some lines in your solution to Exercise 5.2.1, create a
          perspective view of the plane filled with congruent hexagons.
        </p>
      </div>

      <PerspectiveProjectionDemo className="my-6" />

      <SectionQuiz
        sectionId={32}
        questions={quizMap[32] || []}
        title="Drawing with Straightedge Alone Quiz"
      />
    </LessonLayout>
  );
}
