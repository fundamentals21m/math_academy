import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CrossRatioExplorer } from '@/components/visualizations/chapter5';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2>The Cross-Ratio</h2>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300 my-6">
        "You might say it was a triumph of algebra to invent this quantity that turns
        out to be so valuable and could not be imagined geometrically. Or if you are
        a geometer at heart, you may say it is an invention of the devil and hate it
        all your life."
        <footer className="text-sm mt-2">— Robin Hartshorne, <em>Geometry: Euclid and Beyond</em></footer>
      </blockquote>

      <p>
        It is visually obvious that projection can change lengths and even the ratio
        of lengths, because equal lengths often appear unequal under projection. And
        yet we can recognize that a perspective drawing shows equal tiles, even though
        they are unequal in size and shape.
      </p>

      <Callout type="info">
        <strong>The Key Question:</strong> Some clue to the equality must be preserved
        under projection. It cannot be length; it cannot be a ratio of lengths; but,
        surprisingly, it can be a <strong>ratio of ratios</strong>, called the cross-ratio.
      </Callout>

      <h3>Definition of the Cross-Ratio</h3>

      <Definition title="Cross-Ratio">
        <p>
          The cross-ratio is a quantity associated with four points on a line. If the
          four points have coordinates p, q, r, and s, then their cross-ratio is:
        </p>
        <MathBlock>
          {`\\frac{(r - p)/(s - p)}{(r - q)/(s - q)} = \\frac{(r - p)(s - q)}{(r - q)(s - p)}`}
        </MathBlock>
      </Definition>

      <h3>The Cross-Ratio is Preserved by Projection</h3>

      <p>
        To show that the cross-ratio is preserved by projection, it suffices to show
        that it is preserved by the three generating transformations.
      </p>

      <Theorem title="Invariance of the Cross-Ratio">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-blue-400">1. The map x → x + l</p>
            <p className="text-slate-300">
              The numbers p, q, r, s are replaced by p + l, q + l, r + l, s + l.
              This does not change the cross-ratio because the l terms cancel by subtraction.
            </p>
          </div>
          <div>
            <p className="font-semibold text-blue-400">2. The map x → kx</p>
            <p className="text-slate-300">
              The numbers p, q, r, s are replaced by kp, kq, kr, ks.
              This does not change the cross-ratio because the k terms cancel by division.
            </p>
          </div>
          <div>
            <p className="font-semibold text-blue-400">3. The map x → 1/x</p>
            <p className="text-slate-300">
              The numbers p, q, r, s are replaced by 1/p, 1/q, 1/r, 1/s. With some
              algebra (taking common denominators and simplifying), the cross-ratio
              is unchanged.
            </p>
          </div>
        </div>
      </Theorem>

      <h3>Proof for the Reciprocal Map</h3>

      <p>
        When x → 1/x, the cross-ratio transforms as:
      </p>

      <MathBlock>
        {`\\frac{(\\frac{1}{r} - \\frac{1}{p})(\\frac{1}{s} - \\frac{1}{q})}{(\\frac{1}{r} - \\frac{1}{q})(\\frac{1}{s} - \\frac{1}{p})}`}
      </MathBlock>

      <p>Taking common denominators:</p>

      <MathBlock>
        {`= \\frac{\\frac{p-r}{pr} \\cdot \\frac{q-s}{qs}}{\\frac{q-r}{qr} \\cdot \\frac{p-s}{ps}}`}
      </MathBlock>

      <p>Multiplying through by pqrs:</p>

      <MathBlock>
        {`= \\frac{(p-r)(q-s)}{(q-r)(p-s)} = \\frac{(r-p)(s-q)}{(r-q)(s-p)}`}
      </MathBlock>

      <p>The cross-ratio is unchanged!</p>

      <h3>Is the Cross-Ratio Visible?</h3>

      <p>
        If we take the four equally spaced points p = 0, q = 1, r = 2, and s = 3,
        then their cross-ratio is:
      </p>

      <MathBlock>
        {`\\frac{(r - p)(s - q)}{(r - q)(s - p)} = \\frac{2 \\times 2}{1 \\times 3} = \\frac{4}{3}`}
      </MathBlock>

      <p>
        Any projective image of these points also has cross-ratio 4/3. Do four points
        on a line <em>look</em> equally spaced if their cross-ratio is 4/3?
      </p>

      <Callout type="info">
        <strong>Test Your Eye:</strong> Given any three points, there is exactly one
        fourth point that gives cross-ratio 4/3 with them—this is the point that
        "looks" evenly spaced in perspective.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.7.1</h4>
        <p className="text-slate-300">
          Show that there is only one point s that has a given cross-ratio with given
          points p, q, and r.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.7.2</h4>
        <p className="text-slate-300">
          If we have p = 0, q = 2, r = 3, find the value of s that gives cross-ratio 4/3.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.7.3</h4>
        <p className="text-slate-300">
          Before the discovery of perspective, artists sometimes drew a tiled floor by
          making the width of each row a constant fraction e of the one before. Show
          that this method is incorrect by computing the cross-ratio of four points
          separated by distances 1, e, and e².
        </p>
      </div>

      <CrossRatioExplorer className="my-6" />

      <SectionQuiz
        sectionId={37}
        questions={quizMap[37] || []}
        title="The Cross-Ratio Quiz"
      />
    </LessonLayout>
  );
}
