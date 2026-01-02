import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
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
          Vectors <InlineMath>{`\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k`}</InlineMath> in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> are
          <strong> linearly independent</strong> if the only solution to:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
        <p>is the trivial solution <InlineMath>{`c_1 = c_2 = \\cdots = c_k = 0`}</InlineMath>.</p>
      </Callout>

      <Callout type="definition" title="Linear Dependence">
        <p>
          Vectors are <strong>linearly dependent</strong> if they are not linearly independent—that is,
          if there exist scalars <InlineMath>{`c_1, \\ldots, c_k`}</InlineMath>, not all zero, such that:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
      </Callout>

      <h2>Testing for Linear Independence</h2>

      <Callout type="example" title="Two Vectors in ℝ²">
        <p>Are <InlineMath>{`\\mathbf{v}_1 = (1, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{v}_2 = (3, 5)`}</InlineMath> linearly independent?</p>
        <p><strong>Solution:</strong> Set up <InlineMath>{`c_1(1, 2) + c_2(3, 5) = (0, 0)`}</InlineMath>:</p>
        <MathBlock>{`c_1 + 3c_2 = 0`}</MathBlock>
        <MathBlock>{`2c_1 + 5c_2 = 0`}</MathBlock>
        <p>From the first equation: <InlineMath>{`c_1 = -3c_2`}</InlineMath>. Substituting:</p>
        <MathBlock>{`2(-3c_2) + 5c_2 = -6c_2 + 5c_2 = -c_2 = 0`}</MathBlock>
        <p>So <InlineMath>{`c_2 = 0`}</InlineMath> and thus <InlineMath>{`c_1 = 0`}</InlineMath>. Only the trivial solution exists.</p>
        <p>The vectors are <strong>linearly independent</strong>.</p>
      </Callout>

      <Callout type="example" title="Linearly Dependent Vectors">
        <p>Are <InlineMath>{`\\mathbf{v}_1 = (1, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{v}_2 = (2, 4)`}</InlineMath> linearly independent?</p>
        <p><strong>Solution:</strong> Notice that <InlineMath>{`\\mathbf{v}_2 = 2\\mathbf{v}_1`}</InlineMath>, so:</p>
        <MathBlock>{`2\\mathbf{v}_1 - 1\\mathbf{v}_2 = 2(1, 2) - (2, 4) = (0, 0)`}</MathBlock>
        <p>
          This is a nontrivial linear combination (with <InlineMath>{`c_1 = 2, c_2 = -1`}</InlineMath>) that equals zero.
        </p>
        <p>The vectors are <strong>linearly dependent</strong>.</p>
      </Callout>

      <Callout type="example" title="Three Vectors in ℝ³">
        <p>Are <InlineMath>{`(1, 0, 0)`}</InlineMath>, <InlineMath>{`(0, 1, 0)`}</InlineMath>, <InlineMath>{`(0, 0, 1)`}</InlineMath> linearly independent?</p>
        <p><strong>Solution:</strong> Set <InlineMath>{`c_1(1, 0, 0) + c_2(0, 1, 0) + c_3(0, 0, 1) = (0, 0, 0)`}</InlineMath>:</p>
        <MathBlock>{`(c_1, c_2, c_3) = (0, 0, 0)`}</MathBlock>
        <p>This immediately gives <InlineMath>{`c_1 = c_2 = c_3 = 0`}</InlineMath>.</p>
        <p>The standard basis vectors are <strong>linearly independent</strong>.</p>
      </Callout>

      <h2>Geometric Interpretation</h2>

      <Callout type="info" title="Geometric Meaning">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Two vectors</strong> are linearly dependent iff they are parallel (one is a scalar multiple of the other)</li>
          <li><strong>Three vectors</strong> in <InlineMath>{`\\mathbb{R}^3`}</InlineMath> are linearly dependent iff they lie in a common plane through the origin</li>
          <li>In general, vectors are dependent iff one can be written as a linear combination of the others</li>
        </ul>
      </Callout>

      <h2>Key Properties</h2>

      <Callout type="theorem" title="Properties of Linear Independence">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Any set containing the zero vector is linearly dependent</li>
          <li>A single nonzero vector is linearly independent</li>
          <li>Two vectors are linearly dependent iff one is a scalar multiple of the other</li>
          <li>If <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath> is linearly independent, so is any subset</li>
          <li>If <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath> is linearly dependent, so is any larger set containing it</li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Dependence and Span">
        <p>
          The vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath> are linearly dependent if and only if
          at least one vector can be written as a linear combination of the others:
        </p>
        <MathBlock>{`\\mathbf{v}_j \\in \\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_{j-1}, \\mathbf{v}_{j+1}, \\ldots, \\mathbf{v}_k\\}`}</MathBlock>
        <p>for some <InlineMath>{`j`}</InlineMath>.</p>
      </Callout>

      <h2>Maximum Independent Sets</h2>

      <Callout type="theorem" title="Size Limit on Independent Sets">
        <p>
          In <InlineMath>{`\\mathbb{R}^n`}</InlineMath>, any linearly independent set has at most <InlineMath>{`n`}</InlineMath> vectors.
        </p>
        <p>
          Equivalently, any set of more than <InlineMath>{`n`}</InlineMath> vectors in <InlineMath>{`\\mathbb{R}^n`}</InlineMath> must
          be linearly dependent.
        </p>
      </Callout>

      <Callout type="example" title="Four Vectors in ℝ³">
        <p>
          Any four vectors in <InlineMath>{`\\mathbb{R}^3`}</InlineMath> are automatically linearly dependent,
          regardless of what they are.
        </p>
        <p>
          For instance, <InlineMath>{`(1,0,0), (0,1,0), (0,0,1), (1,1,1)`}</InlineMath> must be dependent.
          Indeed: <InlineMath>{`(1,1,1) = (1,0,0) + (0,1,0) + (0,0,1)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Basis</h2>

      <Callout type="definition" title="Basis">
        <p>
          A <strong>basis</strong> for <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is a set of vectors that is:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Linearly independent</strong></li>
          <li><strong>Spans</strong> <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
        </ol>
        <p>
          A basis provides a "coordinate system"—every vector can be written uniquely as a linear
          combination of basis vectors.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis">
        <p>
          The standard basis for <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is <InlineMath>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, \\ldots, 0), \\quad \\mathbf{e}_2 = (0, 1, \\ldots, 0), \\quad \\ldots, \\quad \\mathbf{e}_n = (0, 0, \\ldots, 1)`}</MathBlock>
        <p>These are linearly independent and span <InlineMath>{`\\mathbb{R}^n`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Non-Standard Basis for ℝ²">
        <p>
          The vectors <InlineMath>{`\\mathbf{u} = (1, 1)`}</InlineMath> and <InlineMath>{`\\mathbf{v} = (1, -1)`}</InlineMath> form
          a basis for <InlineMath>{`\\mathbb{R}^2`}</InlineMath>.
        </p>
        <p><strong>Independence:</strong> <InlineMath>{`c_1(1,1) + c_2(1,-1) = (0,0)`}</InlineMath> gives <InlineMath>{`c_1 + c_2 = 0`}</InlineMath> and <InlineMath>{`c_1 - c_2 = 0`}</InlineMath>, so <InlineMath>{`c_1 = c_2 = 0`}</InlineMath>. ✓</p>
        <p><strong>Spanning:</strong> For any <InlineMath>{`(a, b)`}</InlineMath>:</p>
        <MathBlock>{`(a, b) = \\frac{a+b}{2}(1, 1) + \\frac{a-b}{2}(1, -1)`}</MathBlock>
        <p>Every vector in <InlineMath>{`\\mathbb{R}^2`}</InlineMath> is a unique linear combination of <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath>. ✓</p>
      </Callout>

      <h2>Dimension</h2>

      <Callout type="theorem" title="Dimension Theorem">
        <p>
          Every basis for <InlineMath>{`\\mathbb{R}^n`}</InlineMath> contains exactly <InlineMath>{`n`}</InlineMath> vectors.
        </p>
        <p>
          We say <InlineMath>{`\\mathbb{R}^n`}</InlineMath> has <strong>dimension</strong> <InlineMath>{`n`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This remarkable fact means the "size" of <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is intrinsic—it doesn't
        depend on which basis we choose.
      </p>

      <Callout type="info" title="Basis Characterizations">
        <p>For a set of <InlineMath>{`n`}</InlineMath> vectors in <InlineMath>{`\\mathbb{R}^n`}</InlineMath>, the following are equivalent:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The vectors form a basis</li>
          <li>The vectors are linearly independent</li>
          <li>The vectors span <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
        </ul>
        <p>
          For exactly <InlineMath>{`n`}</InlineMath> vectors, any one of these properties implies the other two!
        </p>
      </Callout>

      <h2>Finding Coordinates</h2>

      <Callout type="example" title="Coordinates in a Non-Standard Basis">
        <p>
          Express <InlineMath>{`(5, 3)`}</InlineMath> in terms of the basis <InlineMath>{`\\{(1, 1), (1, -1)\\}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Find <InlineMath>{`c_1, c_2`}</InlineMath> such that:</p>
        <MathBlock>{`c_1(1, 1) + c_2(1, -1) = (5, 3)`}</MathBlock>
        <MathBlock>{`c_1 + c_2 = 5, \\quad c_1 - c_2 = 3`}</MathBlock>
        <p>Adding: <InlineMath>{`2c_1 = 8`}</InlineMath>, so <InlineMath>{`c_1 = 4`}</InlineMath>. Then <InlineMath>{`c_2 = 1`}</InlineMath>.</p>
        <p>
          The coordinates of <InlineMath>{`(5, 3)`}</InlineMath> with respect to this basis are <InlineMath>{`(4, 1)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Linearly independent:</strong> Only <InlineMath>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</InlineMath> implies all <InlineMath>{`c_i = 0`}</InlineMath></p>
        <p><strong>Linearly dependent:</strong> Some nontrivial combination equals <InlineMath>{`\\mathbf{0}`}</InlineMath></p>
        <p><strong>Geometric test:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>2 vectors: dependent iff parallel</li>
          <li>3 vectors in <InlineMath>{`\\mathbb{R}^3`}</InlineMath>: dependent iff coplanar</li>
        </ul>
        <p><strong>Basis:</strong> Linearly independent + spans the space</p>
        <p><strong>Dimension:</strong> <InlineMath>{`\\dim(\\mathbb{R}^n) = n`}</InlineMath> (number of vectors in any basis)</p>
        <p><strong>Key fact:</strong> In <InlineMath>{`\\mathbb{R}^n`}</InlineMath>, at most <InlineMath>{`n`}</InlineMath> vectors can be independent</p>
      </Callout>
    </LessonLayout>
  );
}
