import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Chapter XVIII: Similarity and Affinity</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XVIII: De similitudine et affinitate Curvarum
      </p>

      <p>
        When are two curves "the same shape"? Euler develops the theory of
        <strong> similarity</strong> and its generalization, <strong>affinity</strong>,
        which describe how curves relate through geometric transformations.
      </p>

      <Callout type="info">
        <strong>Motivation:</strong> Understanding when curves are "essentially the same"
        simplifies classification. Two similar curves share all geometric properties
        except scale; two affine curves share projective properties.
      </Callout>

      <h2>Similarity Transformations</h2>

      <p>
        Two curves are <strong>similar</strong> if one can be transformed into the
        other by a combination of:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Translation:</strong> Moving the curve without changing orientation</li>
        <li><strong>Rotation:</strong> Turning about a point</li>
        <li><strong>Uniform scaling:</strong> Enlarging or shrinking by the same factor in all directions</li>
        <li><strong>Reflection:</strong> Mirror image across a line</li>
      </ul>

      <MathBlock>{`(x, y) \\mapsto (ax' + by' + c, dx' + ey' + f)`}</MathBlock>

      <p>
        where the linear part preserves angles (orthogonal transformation times a scalar).
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: All Circles Are Similar</p>
        <p>
          Any circle <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath> can be transformed into
          any other <InlineMath>{`x^2 + y^2 = R^2`}</InlineMath> by scaling by factor
          <InlineMath>R/r</InlineMath>. Hence there is essentially "one circle."
        </p>
      </div>

      <h2>Similarity Classes of Conics</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Classification by Shape</h3>
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong className="text-emerald-400">Circles:</strong> All similar to each other (one class)
          </li>
          <li>
            <strong className="text-blue-400">Parabolas:</strong> All similar to each other (one class)
          </li>
          <li>
            <strong className="text-purple-400">Ellipses:</strong> Similar if and only if they have the same eccentricity
          </li>
          <li>
            <strong className="text-amber-400">Hyperbolas:</strong> Similar if and only if they have the same eccentricity
          </li>
        </ul>
      </div>

      <p>
        Thus ellipses form a <em>one-parameter family</em> of similarity classes
        (parametrized by eccentricity <InlineMath>0 &lt; e &lt; 1</InlineMath>),
        as do hyperbolas (<InlineMath>e &gt; 1</InlineMath>).
      </p>

      <h2>Affine Transformations</h2>

      <p>
        <strong>Affine transformations</strong> are more general: they include
        non-uniform scaling (different factors in different directions):
      </p>

      <MathBlock>{`\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} e \\\\ f \\end{pmatrix}`}</MathBlock>

      <p>
        where <InlineMath>ad - bc \neq 0</InlineMath> (the transformation is invertible).
      </p>

      <Callout type="success">
        <strong>Key Property:</strong> Affine transformations preserve:
        <ul className="list-disc list-inside mt-2">
          <li>Collinearity (points on a line stay on a line)</li>
          <li>Ratios of distances along a line</li>
          <li>Parallelism</li>
        </ul>
        But they do <em>not</em> preserve angles or distances.
      </Callout>

      <h2>Affine Classification of Conics</h2>

      <p>
        Under affine transformations, conics simplify dramatically:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">All Ellipses</h4>
          <p className="text-dark-300 text-sm">
            Affinely equivalent to the circle <InlineMath>{`x^2 + y^2 = 1`}</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">All Parabolas</h4>
          <p className="text-dark-300 text-sm">
            Affinely equivalent to <InlineMath>{`y = x^2`}</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">All Hyperbolas</h4>
          <p className="text-dark-300 text-sm">
            Affinely equivalent to <InlineMath>xy = 1</InlineMath>
          </p>
        </div>
      </div>

      <p>
        From the affine viewpoint, there are only three types of conics!
      </p>

      <h2>Affine Properties</h2>

      <p>
        Properties preserved by affine transformations are called <strong>affine
        invariants</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Midpoints (the midpoint of a segment maps to the midpoint of the image)</li>
        <li>Centroids of triangles and polygons</li>
        <li>Parallelism of lines</li>
        <li>Ratios of areas (areas scale by <InlineMath>|ad - bc|</InlineMath>)</li>
        <li>The existence of diameters</li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Affine Invariance of Diameters</p>
        <p>
          Since diameters are characterized by bisecting chords, and affine maps
          preserve midpoints, the diameter property is affinely invariant. An
          ellipse's diameters map to the circle's diameters.
        </p>
      </div>

      <h2>Projective Equivalence</h2>

      <p>
        Even more general are <strong>projective transformations</strong>, which
        include perspective projections. Under projective equivalence:
      </p>

      <Callout type="warning">
        <strong>Remarkable Fact:</strong> All non-degenerate conics are projectively
        equivalent! A circle can be projected to any ellipse, parabola, or hyperbola.
        From the projective viewpoint, there is only <em>one</em> conic.
      </Callout>

      <h2>Application to Higher Curves</h2>

      <p>
        For cubics, similarity classification is richer:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Non-singular cubics: parametrized by the <InlineMath>j</InlineMath>-invariant</li>
        <li>Singular cubics: classified by type of singularity (node vs. cusp)</li>
      </ul>

      <p>
        The affine and projective classifications of higher curves remain active
        areas of algebraic geometry research.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Similarity transformations preserve shape;
        two curves are similar if related by translation, rotation, uniform scaling,
        or reflection. All circles are similar; ellipses are classified by eccentricity.
        Affine transformations are more general, preserving parallelism and ratios.
        All ellipses are affinely equivalent, as are all parabolas and all hyperbolas.
        Projective transformations make all conics equivalent. These hierarchies of
        transformations provide increasingly coarse but useful classifications.
      </Callout>
    </LessonLayout>
  );
}
