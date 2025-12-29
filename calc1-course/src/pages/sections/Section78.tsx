import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h1>Linear Independence</h1>

      <p>
        In the previous section, we saw that some vectors in a spanning set can be "redundant"—they
        don't add to the span because they're already expressible in terms of others. The concept
        of <strong>linear independence</strong> captures exactly when vectors have no such redundancy.
      </p>

      <h2>Definition</h2>

      <Callout type="definition" title="Linear Independence">
        <p>
          Vectors <MathInline>{`\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k`}</MathInline> in <MathInline>{`\\mathbb{R}^n`}</MathInline> are
          <strong> linearly independent</strong> if the only solution to:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
        <p>is the trivial solution <MathInline>{`c_1 = c_2 = \\cdots = c_k = 0`}</MathInline>.</p>
      </Callout>

      <Callout type="definition" title="Linear Dependence">
        <p>
          Vectors are <strong>linearly dependent</strong> if they are not linearly independent—that is,
          if there exist scalars <MathInline>{`c_1, \\ldots, c_k`}</MathInline>, not all zero, such that:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
      </Callout>

      <h2>Testing for Linear Independence</h2>

      <Callout type="example" title="Two Vectors in ℝ²">
        <p>Are <MathInline>{`\\mathbf{v}_1 = (1, 2)`}</MathInline> and <MathInline>{`\\mathbf{v}_2 = (3, 5)`}</MathInline> linearly independent?</p>
        <p><strong>Solution:</strong> Set up <MathInline>{`c_1(1, 2) + c_2(3, 5) = (0, 0)`}</MathInline>:</p>
        <MathBlock>{`c_1 + 3c_2 = 0`}</MathBlock>
        <MathBlock>{`2c_1 + 5c_2 = 0`}</MathBlock>
        <p>From the first equation: <MathInline>{`c_1 = -3c_2`}</MathInline>. Substituting:</p>
        <MathBlock>{`2(-3c_2) + 5c_2 = -6c_2 + 5c_2 = -c_2 = 0`}</MathBlock>
        <p>So <MathInline>{`c_2 = 0`}</MathInline> and thus <MathInline>{`c_1 = 0`}</MathInline>. Only the trivial solution exists.</p>
        <p>The vectors are <strong>linearly independent</strong>.</p>
      </Callout>

      <Callout type="example" title="Linearly Dependent Vectors">
        <p>Are <MathInline>{`\\mathbf{v}_1 = (1, 2)`}</MathInline> and <MathInline>{`\\mathbf{v}_2 = (2, 4)`}</MathInline> linearly independent?</p>
        <p><strong>Solution:</strong> Notice that <MathInline>{`\\mathbf{v}_2 = 2\\mathbf{v}_1`}</MathInline>, so:</p>
        <MathBlock>{`2\\mathbf{v}_1 - 1\\mathbf{v}_2 = 2(1, 2) - (2, 4) = (0, 0)`}</MathBlock>
        <p>
          This is a nontrivial linear combination (with <MathInline>{`c_1 = 2, c_2 = -1`}</MathInline>) that equals zero.
        </p>
        <p>The vectors are <strong>linearly dependent</strong>.</p>
      </Callout>

      <Callout type="example" title="Three Vectors in ℝ³">
        <p>Are <MathInline>{`(1, 0, 0)`}</MathInline>, <MathInline>{`(0, 1, 0)`}</MathInline>, <MathInline>{`(0, 0, 1)`}</MathInline> linearly independent?</p>
        <p><strong>Solution:</strong> Set <MathInline>{`c_1(1, 0, 0) + c_2(0, 1, 0) + c_3(0, 0, 1) = (0, 0, 0)`}</MathInline>:</p>
        <MathBlock>{`(c_1, c_2, c_3) = (0, 0, 0)`}</MathBlock>
        <p>This immediately gives <MathInline>{`c_1 = c_2 = c_3 = 0`}</MathInline>.</p>
        <p>The standard basis vectors are <strong>linearly independent</strong>.</p>
      </Callout>

      <h2>Geometric Interpretation</h2>

      <Callout type="info" title="Geometric Meaning">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Two vectors</strong> are linearly dependent iff they are parallel (one is a scalar multiple of the other)</li>
          <li><strong>Three vectors</strong> in <MathInline>{`\\mathbb{R}^3`}</MathInline> are linearly dependent iff they lie in a common plane through the origin</li>
          <li>In general, vectors are dependent iff one can be written as a linear combination of the others</li>
        </ul>
      </Callout>

      <h2>Key Properties</h2>

      <Callout type="theorem" title="Properties of Linear Independence">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Any set containing the zero vector is linearly dependent</li>
          <li>A single nonzero vector is linearly independent</li>
          <li>Two vectors are linearly dependent iff one is a scalar multiple of the other</li>
          <li>If <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline> is linearly independent, so is any subset</li>
          <li>If <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline> is linearly dependent, so is any larger set containing it</li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Dependence and Span">
        <p>
          The vectors <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> are linearly dependent if and only if
          at least one vector can be written as a linear combination of the others:
        </p>
        <MathBlock>{`\\mathbf{v}_j \\in \\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_{j-1}, \\mathbf{v}_{j+1}, \\ldots, \\mathbf{v}_k\\}`}</MathBlock>
        <p>for some <MathInline>{`j`}</MathInline>.</p>
      </Callout>

      <h2>Maximum Independent Sets</h2>

      <Callout type="theorem" title="Size Limit on Independent Sets">
        <p>
          In <MathInline>{`\\mathbb{R}^n`}</MathInline>, any linearly independent set has at most <MathInline>{`n`}</MathInline> vectors.
        </p>
        <p>
          Equivalently, any set of more than <MathInline>{`n`}</MathInline> vectors in <MathInline>{`\\mathbb{R}^n`}</MathInline> must
          be linearly dependent.
        </p>
      </Callout>

      <Callout type="example" title="Four Vectors in ℝ³">
        <p>
          Any four vectors in <MathInline>{`\\mathbb{R}^3`}</MathInline> are automatically linearly dependent,
          regardless of what they are.
        </p>
        <p>
          For instance, <MathInline>{`(1,0,0), (0,1,0), (0,0,1), (1,1,1)`}</MathInline> must be dependent.
          Indeed: <MathInline>{`(1,1,1) = (1,0,0) + (0,1,0) + (0,0,1)`}</MathInline>.
        </p>
      </Callout>

      <h2>Basis</h2>

      <Callout type="definition" title="Basis">
        <p>
          A <strong>basis</strong> for <MathInline>{`\\mathbb{R}^n`}</MathInline> is a set of vectors that is:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Linearly independent</strong></li>
          <li><strong>Spans</strong> <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
        </ol>
        <p>
          A basis provides a "coordinate system"—every vector can be written uniquely as a linear
          combination of basis vectors.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis">
        <p>
          The standard basis for <MathInline>{`\\mathbb{R}^n`}</MathInline> is <MathInline>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, \\ldots, 0), \\quad \\mathbf{e}_2 = (0, 1, \\ldots, 0), \\quad \\ldots, \\quad \\mathbf{e}_n = (0, 0, \\ldots, 1)`}</MathBlock>
        <p>These are linearly independent and span <MathInline>{`\\mathbb{R}^n`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Non-Standard Basis for ℝ²">
        <p>
          The vectors <MathInline>{`\\mathbf{u} = (1, 1)`}</MathInline> and <MathInline>{`\\mathbf{v} = (1, -1)`}</MathInline> form
          a basis for <MathInline>{`\\mathbb{R}^2`}</MathInline>.
        </p>
        <p><strong>Independence:</strong> <MathInline>{`c_1(1,1) + c_2(1,-1) = (0,0)`}</MathInline> gives <MathInline>{`c_1 + c_2 = 0`}</MathInline> and <MathInline>{`c_1 - c_2 = 0`}</MathInline>, so <MathInline>{`c_1 = c_2 = 0`}</MathInline>. ✓</p>
        <p><strong>Spanning:</strong> For any <MathInline>{`(a, b)`}</MathInline>:</p>
        <MathBlock>{`(a, b) = \\frac{a+b}{2}(1, 1) + \\frac{a-b}{2}(1, -1)`}</MathBlock>
        <p>Every vector in <MathInline>{`\\mathbb{R}^2`}</MathInline> is a unique linear combination of <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline>. ✓</p>
      </Callout>

      <h2>Dimension</h2>

      <Callout type="theorem" title="Dimension Theorem">
        <p>
          Every basis for <MathInline>{`\\mathbb{R}^n`}</MathInline> contains exactly <MathInline>{`n`}</MathInline> vectors.
        </p>
        <p>
          We say <MathInline>{`\\mathbb{R}^n`}</MathInline> has <strong>dimension</strong> <MathInline>{`n`}</MathInline>.
        </p>
      </Callout>

      <p>
        This remarkable fact means the "size" of <MathInline>{`\\mathbb{R}^n`}</MathInline> is intrinsic—it doesn't
        depend on which basis we choose.
      </p>

      <Callout type="info" title="Basis Characterizations">
        <p>For a set of <MathInline>{`n`}</MathInline> vectors in <MathInline>{`\\mathbb{R}^n`}</MathInline>, the following are equivalent:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The vectors form a basis</li>
          <li>The vectors are linearly independent</li>
          <li>The vectors span <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
        </ul>
        <p>
          For exactly <MathInline>{`n`}</MathInline> vectors, any one of these properties implies the other two!
        </p>
      </Callout>

      <h2>Finding Coordinates</h2>

      <Callout type="example" title="Coordinates in a Non-Standard Basis">
        <p>
          Express <MathInline>{`(5, 3)`}</MathInline> in terms of the basis <MathInline>{`\\{(1, 1), (1, -1)\\}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Find <MathInline>{`c_1, c_2`}</MathInline> such that:</p>
        <MathBlock>{`c_1(1, 1) + c_2(1, -1) = (5, 3)`}</MathBlock>
        <MathBlock>{`c_1 + c_2 = 5, \\quad c_1 - c_2 = 3`}</MathBlock>
        <p>Adding: <MathInline>{`2c_1 = 8`}</MathInline>, so <MathInline>{`c_1 = 4`}</MathInline>. Then <MathInline>{`c_2 = 1`}</MathInline>.</p>
        <p>
          The coordinates of <MathInline>{`(5, 3)`}</MathInline> with respect to this basis are <MathInline>{`(4, 1)`}</MathInline>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Linearly independent:</strong> Only <MathInline>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathInline> implies all <MathInline>{`c_i = 0`}</MathInline></p>
        <p><strong>Linearly dependent:</strong> Some nontrivial combination equals <MathInline>{`\\mathbf{0}`}</MathInline></p>
        <p><strong>Geometric test:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>2 vectors: dependent iff parallel</li>
          <li>3 vectors in <MathInline>{`\\mathbb{R}^3`}</MathInline>: dependent iff coplanar</li>
        </ul>
        <p><strong>Basis:</strong> Linearly independent + spans the space</p>
        <p><strong>Dimension:</strong> <MathInline>{`\\dim(\\mathbb{R}^n) = n`}</MathInline> (number of vectors in any basis)</p>
        <p><strong>Key fact:</strong> In <MathInline>{`\\mathbb{R}^n`}</MathInline>, at most <MathInline>{`n`}</MathInline> vectors can be independent</p>
      </Callout>
    </LessonLayout>
  );
}
