import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section58Questions } from '../../data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2 className="text-2xl font-semibold mb-4">
        Isometries of the Plane
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The geometric interpretation of complex numbers leads to a beautiful
        description of all <strong>isometries</strong>—distance-preserving
        transformations—of the Euclidean plane.
      </p>

      {/* Isometries Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">What is an Isometry?</h3>

      <p className="text-dark-200 mb-6">
        An <strong>isometry</strong> of the plane is a transformation that
        preserves distances: if points <InlineMath>P</InlineMath> and{' '}
        <InlineMath>Q</InlineMath> are at distance <InlineMath>d</InlineMath>,
        their images <InlineMath>P'</InlineMath> and <InlineMath>Q'</InlineMath>{' '}
        are also at distance <InlineMath>d</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Key property:</strong> In terms of complex numbers, an
          isometry <InlineMath>f</InlineMath> satisfies:
        </p>
        <MathBlock>
          {`|f(z_1) - f(z_2)| = |z_1 - z_2|`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          for all complex numbers <InlineMath>z_1, z_2</InlineMath>.
        </p>
      </div>

      {/* Types of Isometries */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Types of Isometries
      </h3>

      <CardGrid>
        <Card>
          <CardHeader title="Translation" />
          <p className="text-xs text-dark-300">
            <InlineMath>f(z) = z + c</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Shifts every point by <InlineMath>c</InlineMath></p>
        </Card>
        <Card>
          <CardHeader title="Rotation" />
          <p className="text-xs text-dark-300">
            <InlineMath>f(z) = e^{'{i\\theta}'}z</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Rotates by angle <InlineMath>\theta</InlineMath> about origin</p>
        </Card>
        <Card>
          <CardHeader title="Reflection" />
          <p className="text-xs text-dark-300">
            <InlineMath>f(z) = \bar z</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Reflects in the real axis</p>
        </Card>
        <Card>
          <CardHeader title="Glide Reflection" />
          <p className="text-xs text-dark-300">
            <InlineMath>f(z) = \bar z + c</InlineMath>
          </p>
          <p className="text-xs text-dark-400 mt-2">Reflection followed by translation</p>
        </Card>
      </CardGrid>

      {/* Translations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Translations</h3>

      <p className="text-dark-200 mb-6">
        The simplest isometry is a <strong>translation</strong>:
      </p>

      <MathBlock>
        {`f(z) = z + c`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This shifts every point by the complex number <InlineMath>c</InlineMath>.
        If <InlineMath>c = a + bi</InlineMath>, it moves <InlineMath>a</InlineMath>{' '}
        units horizontally and <InlineMath>b</InlineMath> units vertically.
      </p>

      <p className="text-dark-200 mb-6">
        Translation preserves distance because:
      </p>

      <MathBlock>
        {`|f(z_1) - f(z_2)| = |(z_1 + c) - (z_2 + c)| = |z_1 - z_2|`}
      </MathBlock>

      {/* Rotations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Rotations</h3>

      <p className="text-dark-200 mb-6">
        A <strong>rotation</strong> about the origin by angle{' '}
        <InlineMath>\theta</InlineMath> is:
      </p>

      <MathBlock>
        {`f(z) = e^{i\\theta} z = (\\cos\\theta + i\\sin\\theta)z`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This uses the multiplicative property of argument: multiplying by{' '}
        <InlineMath>e^{'{i\\theta}'}</InlineMath> adds <InlineMath>\theta</InlineMath>{' '}
        to the argument while keeping the absolute value the same.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Special Case: Rotation by 90°
        </h4>
        <p className="text-dark-200">
          When <InlineMath>\theta = \pi/2</InlineMath>, we get{' '}
          <InlineMath>e^{'{i\\pi/2}'} = i</InlineMath>, confirming that
          multiplication by <InlineMath>i</InlineMath> is rotation by 90°.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        To rotate about a point <InlineMath>c</InlineMath> instead of the origin:
      </p>

      <MathBlock>
        {`f(z) = e^{i\\theta}(z - c) + c`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This translates <InlineMath>c</InlineMath> to the origin, rotates, then
        translates back.
      </p>

      {/* Reflections */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Reflections</h3>

      <p className="text-dark-200 mb-6">
        The <strong>complex conjugate</strong> of <InlineMath>z = a + bi</InlineMath> is:
      </p>

      <MathBlock>
        {`\\bar{z} = a - bi`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Geometrically, conjugation reflects in the real axis. The map{' '}
        <InlineMath>f(z) = \bar z</InlineMath> is an isometry because:
      </p>

      <MathBlock>
        {`|\\bar{z}| = |z|`}
      </MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Properties of conjugation:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>\overline{'{z_1 + z_2}'} = \bar z_1 + \bar z_2</InlineMath>
          </li>
          <li>
            <InlineMath>\overline{'{z_1 z_2}'} = \bar z_1 \bar z_2</InlineMath>
          </li>
          <li>
            <InlineMath>z \bar z = |z|^2</InlineMath>
          </li>
          <li>
            <InlineMath>\bar{'{\\bar z}'} = z</InlineMath>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        To reflect in a line through the origin making angle{' '}
        <InlineMath>\alpha</InlineMath> with the real axis:
      </p>

      <MathBlock>
        {`f(z) = e^{2i\\alpha} \\bar{z}`}
      </MathBlock>

      {/* Classification Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Classification of Isometries
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Isometry Classification Theorem
        </h4>
        <p className="text-dark-200 mb-4">
          Every isometry of the plane has one of these forms:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            <InlineMath>f(z) = e^{'{i\\theta}'}z + c</InlineMath>{' '}
            (rotation + translation)
          </li>
          <li>
            <InlineMath>f(z) = e^{'{i\\theta}'}\bar z + c</InlineMath>{' '}
            (reflection + translation)
          </li>
        </ol>
        <p className="text-dark-300 text-sm mt-3">
          The first type preserves orientation; the second reverses it.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Orientation-preserving</strong> isometries (rotations and
        translations) form a <em>group</em> under composition. This group is
        crucial in understanding plane geometry and crystallography.
      </p>

      {/* Fixed Points */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fixed Points</h3>

      <p className="text-dark-200 mb-6">
        A <strong>fixed point</strong> of an isometry <InlineMath>f</InlineMath>{' '}
        is a point <InlineMath>z_0</InlineMath> where <InlineMath>f(z_0) = z_0</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Translation:</strong> No fixed points (unless <InlineMath>c = 0</InlineMath>)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Rotation:</strong> One fixed point (the center)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Reflection:</strong> A line of fixed points (the mirror)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>Glide reflection:</strong> No fixed points
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          The study of isometries connects complex numbers to group theory. The
          group of orientation-preserving isometries is called the{' '}
          <strong>Euclidean group</strong> and has deep connections to physics
          and crystallography.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Isometries preserve distances:{' '}
              <InlineMath>|f(z_1) - f(z_2)| = |z_1 - z_2|</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Translation: <InlineMath>f(z) = z + c</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Rotation: <InlineMath>f(z) = e^{'{i\\theta}'}z</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Reflection: <InlineMath>f(z) = \bar z</InlineMath> (conjugation)
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={58} questions={section58Questions} />
    </LessonLayout>
  );
}
