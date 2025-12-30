import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CentralProjectionDemo } from '@/components/visualizations/chapter5';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2>Projection</h2>

      <p>
        The three-dimensional Euclidean space ℝ³, in which lines through O are
        "points" of ℝP² and planes through O are "lines" of ℝP², also contains
        many other planes. Each plane 𝒫 not passing through O can be regarded
        as a <strong>perspective view</strong> of the projective plane ℝP².
      </p>

      <h3>Perspective Views</h3>

      <p>
        Each point P of 𝒫 corresponds to a line ("of sight") through O, and hence
        to a "point" of ℝP². The only lines through O that do not meet 𝒫 are those
        parallel to 𝒫—these make up the line at infinity or horizon of 𝒫.
      </p>

      <Definition title="Projection Between Planes">
        <p>
          If 𝒫₁ and 𝒫₂ are any two planes not passing through O, we can
          <strong> project</strong> 𝒫₁ to 𝒫₂ by sending each point P₁ in 𝒫₁
          to the point P₂ in 𝒫₂ lying on the same line through O as P₁.
        </p>
      </Definition>

      <p>
        The geometry of ℝP² is called "projective" because it encapsulates the
        geometry of a whole family of planes related by projection.
      </p>

      <h3>Projections of Projective Lines</h3>

      <p>
        Projection of one plane 𝒫₁ onto another plane 𝒫₂ produces an image that
        is generally distorted. For example, a grid of squares may be mapped to
        a perspective view that looks very different. Nevertheless, straight lines
        remain straight under projection.
      </p>

      <Callout type="info">
        <strong>Key Property:</strong> To understand projective distortion, we
        analyze the mappings of the projective line obtainable by projection.
      </Callout>

      <h3>Types of Projections</h3>

      <h4>Projection from Infinity (Parallel Lines)</h4>

      <p>
        When 𝓛₁ and 𝓛₂ are parallel, projection from a point at infinity means
        the lines from dots on 𝓛₁ to their images on 𝓛₂ are parallel. The dots
        are simply translated a constant distance l:
      </p>

      <MathBlock>
        {`x \\mapsto x + l`}
      </MathBlock>

      <h4>Projection from a Finite Point (Parallel Lines)</h4>

      <p>
        When 𝓛₁ is projected from a finite point P onto parallel line 𝓛₂, the
        distance between dots is magnified by a constant factor k ≠ 0:
      </p>

      <MathBlock>
        {`x \\mapsto kx`}
      </MathBlock>

      <h4>Projection onto Non-Parallel Lines</h4>

      <p>
        When 𝓛₁ and 𝓛₂ are not parallel, the distortion is more extreme. Consider
        projection from a point O equidistant from both lines, with 𝓛₁ parallel to
        the x-axis and 𝓛₂ parallel to the y-axis. The map from 𝓛₁ to 𝓛₂ is:
      </p>

      <MathBlock>
        {`x \\mapsto \\frac{1}{x}`}
      </MathBlock>

      <Theorem title="Generating Transformations">
        <p>
          Any combination of projections is a combination of these three
          <strong> generating transformations</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>x → x + l (translation)</li>
          <li>x → kx (scaling)</li>
          <li>x → 1/x (reciprocation)</li>
        </ul>
        <p className="mt-2">
          The combinations of these are precisely the functions of the form:
        </p>
        <MathBlock>
          {`f(x) = \\frac{ax + b}{cx + d}, \\quad \\text{where } ad - bc \\neq 0`}
        </MathBlock>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.5.1</h4>
        <p className="text-slate-300">
          If f₁(x) = a₁x + b₁ with a₁ ≠ 0 and f₂(x) = a₂x + b₂ with a₂ ≠ 0, show that
          f₁(f₂(x)) = Ax + B with A ≠ 0, and find the constants A and B.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.5.2</h4>
        <p className="text-slate-300">
          Deduce from Exercise 5.5.1 that composing any number of functions
          x → x + l or x → kx (for k ≠ 0) gives a function of the form f(x) = ax + b
          with a ≠ 0.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.5.3</h4>
        <p className="text-slate-300">
          Show that projection of a line, from any finite point P, onto a parallel
          line is represented by a function of the form f(x) = ax + b.
        </p>
      </div>

      <CentralProjectionDemo className="my-6" />

      <SectionQuiz
        sectionId={35}
        questions={quizMap[35] || []}
        title="Projection Quiz"
      />
    </LessonLayout>
  );
}
