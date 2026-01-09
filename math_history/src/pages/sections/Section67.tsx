import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2>Dimension</h2>

      <p>
        What does it mean for a space to have dimension <InlineMath>n</InlineMath>?
        Intuitively, a line is 1-dimensional, a plane is 2-dimensional, and
        ordinary space is 3-dimensional. But making this precise—and extending
        it to more exotic spaces—required deep mathematical work. The struggle
        to define dimension rigorously led to surprising discoveries about
        the nature of space itself.
      </p>

      <Callout type="info">
        <strong>Dimension Is Subtle:</strong> Is dimension topological or
        algebraic? Can it be fractional? Can you continuously map a square
        onto a line segment? These questions drove the development of multiple
        dimension theories, each capturing different aspects of "size."
      </Callout>

      <h3>Early Understanding</h3>

      <p>
        For centuries, dimension seemed obvious:
      </p>

      <Example title="Coordinate Dimension">
        <p>
          A point in <InlineMath>{'\\mathbb{R}^n'}</InlineMath> is specified by{' '}
          <InlineMath>n</InlineMath> coordinates. This suggests:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A line (<InlineMath>{'\\mathbb{R}^1'}</InlineMath>): 1 coordinate</li>
          <li>A plane (<InlineMath>{'\\mathbb{R}^2'}</InlineMath>): 2 coordinates</li>
          <li>Space (<InlineMath>{'\\mathbb{R}^3'}</InlineMath>): 3 coordinates</li>
        </ul>
      </Example>

      <p>
        But is dimension preserved under continuous maps? Is{' '}
        <InlineMath>{'\\mathbb{R}^2'}</InlineMath> topologically different from{' '}
        <InlineMath>{'\\mathbb{R}^3'}</InlineMath>?
      </p>

      <h3>Cantor's Shocking Discovery</h3>

      <p>
        In 1877, Georg Cantor proved something that seemed to contradict the
        very idea of dimension:
      </p>

      <Theorem title="Cantor's Bijection">
        <p>
          There exists a bijection (one-to-one correspondence) between{' '}
          <InlineMath>{'\\mathbb{R}'}</InlineMath> and{' '}
          <InlineMath>{'\\mathbb{R}^2'}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          The line and the plane have the same cardinality!
        </p>
      </Theorem>

      <Example title="Cantor's Construction">
        <p>
          Interleave the decimal digits of coordinates:
        </p>
        <MathBlock>
          {`(0.a_1a_2a_3\\ldots, 0.b_1b_2b_3\\ldots) \\leftrightarrow 0.a_1b_1a_2b_2a_3b_3\\ldots`}
        </MathBlock>
        <p className="mt-2">
          This maps points in the unit square to points on the unit interval.
        </p>
      </Example>

      <p>
        Cantor himself was shocked: "I see it but I don't believe it!" But
        his bijection was not continuous—dimension might still be a topological
        invariant.
      </p>

      <h3>Space-Filling Curves</h3>

      <p>
        In 1890, Giuseppe Peano constructed something even more disturbing:
      </p>

      <Theorem title="Peano Curve">
        <p>
          There exists a continuous surjection from the unit interval{' '}
          <InlineMath>[0, 1]</InlineMath> onto the unit square{' '}
          <InlineMath>[0, 1]^2</InlineMath>.
        </p>
      </Theorem>

      <Example title="Space-Filling Curves">
        <p>
          The Peano curve and Hilbert curve are continuous paths that pass
          through every point of a square. A 1-dimensional curve can "fill"
          a 2-dimensional region!
        </p>
        <p className="mt-2">
          However, these curves are not injective (one-to-one)—they must
          cross themselves infinitely often.
        </p>
      </Example>

      <Callout type="note">
        <strong>Continuous vs. Homeomorphism:</strong> Space-filling curves
        show that continuous maps don't preserve dimension. But what about
        homeomorphisms (continuous bijections with continuous inverses)?
      </Callout>

      <h3>Invariance of Dimension</h3>

      <p>
        The fundamental question: Is <InlineMath>{'\\mathbb{R}^m'}</InlineMath>{' '}
        homeomorphic to <InlineMath>{'\\mathbb{R}^n'}</InlineMath> when{' '}
        <InlineMath>m \neq n</InlineMath>?
      </p>

      <Theorem title="Invariance of Dimension (Brouwer, 1911)">
        <p>
          <InlineMath>{'\\mathbb{R}^m'}</InlineMath> is homeomorphic to{' '}
          <InlineMath>{'\\mathbb{R}^n'}</InlineMath> if and only if{' '}
          <InlineMath>m = n</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Dimension is indeed a topological invariant.
        </p>
      </Theorem>

      <p>
        Brouwer's proof used sophisticated methods from algebraic topology.
        The theorem seems obvious, but proving it rigorously required the
        full power of homology theory.
      </p>

      <h3>Topological Dimension</h3>

      <p>
        Several rigorous definitions of dimension emerged:
      </p>

      <Definition title="Lebesgue Covering Dimension">
        <p>
          A space has <strong>covering dimension</strong>{' '}
          <InlineMath>n</InlineMath> if every open cover can be refined to
          a cover where each point is in at most <InlineMath>n + 1</InlineMath>{' '}
          sets, and <InlineMath>n</InlineMath> is minimal with this property.
        </p>
      </Definition>

      <Definition title="Inductive Dimension">
        <p>
          Define dimension inductively:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The empty set has dimension -1</li>
          <li>A space has dimension <InlineMath>n</InlineMath> if every point has arbitrarily small neighborhoods whose boundaries have dimension at most <InlineMath>n - 1</InlineMath></li>
        </ul>
      </Definition>

      <Example title="Verifying Dimensions">
        <p>
          Using these definitions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A point has dimension 0 (boundary is empty)</li>
          <li>A line has dimension 1 (boundaries of neighborhoods are points)</li>
          <li>A plane has dimension 2 (boundaries are curves)</li>
          <li><InlineMath>{'\\mathbb{R}^n'}</InlineMath> has dimension <InlineMath>n</InlineMath></li>
        </ul>
      </Example>

      <h3>Fractal Dimension</h3>

      <p>
        Some sets don't fit neatly into integer dimensions:
      </p>

      <Definition title="Hausdorff Dimension">
        <p>
          The <strong>Hausdorff dimension</strong> measures how a set scales.
          For a set covered by balls of radius <InlineMath>r</InlineMath>,
          it captures whether "volume" scales like{' '}
          <InlineMath>r^d</InlineMath> for some <InlineMath>d</InlineMath>—which
          need not be an integer.
        </p>
      </Definition>

      <Example title="The Cantor Set">
        <p>
          Remove the middle third of <InlineMath>[0, 1]</InlineMath>, then
          the middle third of each remaining interval, forever.
        </p>
        <p className="mt-2">
          The Cantor set has:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Topological dimension 0 (totally disconnected)</li>
          <li>Hausdorff dimension <InlineMath>{`\\frac{\\log 2}{\\log 3} \\approx 0.631`}</InlineMath></li>
        </ul>
      </Example>

      <Example title="The Sierpiński Triangle">
        <p>
          The Sierpiński triangle (formed by repeatedly removing central
          triangles) has Hausdorff dimension{' '}
          <InlineMath>{`\\frac{\\log 3}{\\log 2} \\approx 1.585`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          It's "more than a line but less than a plane."
        </p>
      </Example>

      <Example title="Coastlines and Nature">
        <p>
          Mandelbrot observed that natural objects often have fractal
          dimension. The coastline of Britain has dimension about 1.25—more
          irregular than a smooth curve but less than a filled region.
        </p>
      </Example>

      <h3>High-Dimensional Topology</h3>

      <p>
        Dimension behaves strangely in high dimensions:
      </p>

      <Example title="Exotic Spheres">
        <p>
          In most dimensions, there's essentially one way to make a sphere.
          But Milnor discovered (1956) that in dimension 7, there are 28
          different smooth structures on the sphere!
        </p>
        <p className="mt-2 text-dark-400">
          These "exotic spheres" are homeomorphic but not diffeomorphic
          (smoothly equivalent).
        </p>
      </Example>

      <Example title="Dimension 4 Is Special">
        <p>
          Dimension 4 is uniquely strange. For example:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{'\\mathbb{R}^4'}</InlineMath> has uncountably many different smooth structures</li>
          <li>The smooth Poincaré conjecture is false in dimension 4</li>
          <li>Many problems solvable in other dimensions remain open in dimension 4</li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>The Mystery of Dimension:</strong> What seemed a simple
        concept—counting coordinates—turned out to be subtle and rich.
        Different dimension theories capture different properties, fractal
        dimensions allow non-integers, and high-dimensional spaces harbor
        surprises. Understanding dimension remains at the heart of geometry
        and topology.
      </Callout>

      <SectionQuiz sectionId={67} questions={quizMap[67] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
