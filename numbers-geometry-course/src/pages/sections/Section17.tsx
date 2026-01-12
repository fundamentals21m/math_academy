import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section17Questions } from '../../data/quizzes';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mb-4">The Whole and the Part</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        There is an unconscious assumption in cutting and pasting: we assume that
        area is <strong>conserved</strong>—that if we repeatedly cut and paste,
        we never get a polygon larger or smaller than the one we started with.
      </p>

      <Callout type="warning">
        <p>
          This is a blatantly <strong>physical assumption</strong>, like
          conservation of mass. A conscientious geometer would want to prove it
          if possible.
        </p>
      </Callout>

      {/* The Problem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Problem</h3>

      <p className="text-dark-200 mb-6">
        If we assume lengths and areas are numbers, several alarming questions
        arise:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">?</span>
            <span>
              There is more than one way to cut a polygon into triangles—what if
              different ways give different areas?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">?</span>
            <span>
              What if the area <InlineMath>\frac{'{1}'}{'{2}'}</InlineMath> ×
              base × height of a triangle depends on which side we choose as the
              base?
            </span>
          </li>
        </ul>
      </div>

      {/* Constancy of Base × Height */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Constancy of Base × Height
      </h3>

      <p className="text-dark-200 mb-6">
        The latter concern can be resolved using <strong>similar triangles</strong>.
        Triangles are called <em>similar</em> if they have the same angles, and
        Euclid proved that the corresponding sides of similar triangles are
        proportional.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Theorem: Constancy of Base × Height
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          In any triangle, the product of any side by the corresponding height
          is constant.
        </p>
        <p className="text-dark-400 text-xs">
          <strong>Proof sketch:</strong> Take triangle ABC with perpendiculars AD
          and BE. Triangles ADC and BEC have equal angles (they share angle C and
          both have a right angle). By proportionality of similar triangles:
        </p>
        <MathBlock>{`\\frac{BC}{BE} = \\frac{AC}{AD}`}</MathBlock>
        <p className="text-dark-400 text-xs">
          Therefore BC × AD = AC × BE.
        </p>
      </div>

      {/* The Greeks' Approach */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Greeks' Approach</h3>

      <p className="text-dark-200 mb-6">
        The first concern—different subdivisions giving different areas—is more
        difficult. For the Greeks, polygons that could be cut and pasted onto
        each other had equal area <em>by definition</em>.
      </p>

      <p className="text-dark-200 mb-6">
        Their problem was showing that a polygon could not be cut and pasted onto
        one that was intuitively "smaller"—a part of itself. They could not prove
        this, so Euclid made it an axiom:
      </p>

      <Callout type="info">
        <p className="text-lg font-semibold">
          "The whole is greater than the part."
        </p>
        <p className="text-sm mt-2">— Euclid's fifth Common Notion</p>
      </Callout>

      {/* Hilbert's Solution */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Hilbert's Solution (1899)</h3>

      <p className="text-dark-200 mb-6">
        When areas are numbers (numerical areas), the problem becomes solvable.
        Hilbert proved that different subdivisions of the same polygon give the
        same numerical area.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Signed Area [ABC]
        </h4>
        <p className="text-dark-300 text-sm mb-2">
          Hilbert used a concept of <strong>signed area</strong>:
        </p>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>
            [ABC] = <InlineMath>\frac{'{1}'}{'{2}'}</InlineMath> × base × height
            when A, B, C are in clockwise order
          </li>
          <li>
            [ABC] = −<InlineMath>\frac{'{1}'}{'{2}'}</InlineMath> × base × height
            when A, B, C are in counterclockwise order
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The key property is that for any point O (inside or outside the triangle):
      </p>

      <MathBlock>{`[ABC] = [OAB] + [OBC] + [OCA]`}</MathBlock>

      <p className="text-dark-200 my-6">
        When a triangle is subdivided, the areas spanned by interior edges cancel
        out, leaving only the original triangle's area.
      </p>

      <Callout type="success">
        <p>
          This clinches the case for <strong>using numbers in geometry</strong>.
          Numerical areas behave consistently regardless of how we subdivide.
        </p>
      </Callout>

      {/* Equidecomposability */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Equidecomposability</h3>

      <p className="text-dark-200 mb-6">
        Two polygons are <strong>equidecomposable</strong> if one can be cut into
        pieces that can be reassembled into the other. A remarkable theorem states:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Bolyai-Gerwien Theorem (19th century)
        </h4>
        <p className="text-dark-300 text-sm">
          Any two polygons of equal numerical area are equidecomposable.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Conservation of area</strong> under cutting and pasting is
              not obvious—Euclid assumed "the whole is greater than the part."
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Base × height is constant</strong> for any triangle,
              regardless of which side is chosen as the base.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Hilbert (1899)</strong> proved that numerical areas are
              well-defined using signed areas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Equidecomposability:</strong> Polygons with equal area can
              be cut into the same pieces (in 2D, but not always in 3D!).
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={17} questions={section17Questions} />
    </LessonLayout>
  );
}
