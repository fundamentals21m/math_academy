import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-semibold mb-4">Volumes of Revolution</h2>

      <p className="text-dark-200 mb-6">
        Just as we introduced area as a set function satisfying certain axioms and showed that
        areas of many regions can be calculated by integration, we now take the same approach
        for <strong>volume</strong>. This leads to powerful methods for computing volumes of
        three-dimensional solids.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Axiomatic Approach to Volume</h2>

      <p className="text-dark-200 mb-4">
        We assume there exists a class <InlineMath>{'\\mathscr{M}'}</InlineMath> of{' '}
        <strong>measurable sets</strong> in three-dimensional space (called <strong>solids</strong>)
        and a <strong>volume function</strong> <InlineMath>{'v'}</InlineMath> that assigns to each
        solid <InlineMath>{'S'}</InlineMath> a nonnegative number <InlineMath>{'v(S)'}</InlineMath>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Axioms for Volume</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Nonnegative:</strong> <InlineMath>{'v(S) \\geq 0'}</InlineMath> for every solid{' '}
            <InlineMath>{'S'}</InlineMath>
          </li>
          <li>
            <strong>Additive:</strong>{' '}
            <InlineMath>{'v(S \\cup T) = v(S) + v(T) - v(S \\cap T)'}</InlineMath>
          </li>
          <li>
            <strong>Difference:</strong> If <InlineMath>{'S \\subseteq T'}</InlineMath>, then{' '}
            <InlineMath>{'v(T - S) = v(T) - v(S)'}</InlineMath>
          </li>
          <li>
            <strong>Cavalieri's Principle:</strong> If <InlineMath>{'S'}</InlineMath> and{' '}
            <InlineMath>{'T'}</InlineMath> have equal cross-sectional areas for every plane
            perpendicular to a given line, then <InlineMath>{'v(S) = v(T)'}</InlineMath>
          </li>
          <li>
            <strong>Choice of Scale:</strong> A box with edges <InlineMath>{'a, b, c'}</InlineMath>{' '}
            has volume <InlineMath>{'v = abc'}</InlineMath>
          </li>
          <li>
            <strong>Convex sets are measurable</strong>
          </li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Cavalieri's Principle</h2>

      <p className="text-dark-200 mb-4">
        Cavalieri's principle is the key tool for computing volumes. Intuitively, imagine a solid
        as a stack of thin sheets of material (like a deck of cards) perpendicular to a given line.
        If we slide each sheet in its own plane, we change the shape but not the volume.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Cavalieri Solid</p>
        <p className="mb-2">
          A solid <InlineMath>{'S'}</InlineMath> is a <strong>Cavalieri solid</strong> with respect
          to a line <InlineMath>{'L'}</InlineMath> if every cross-section perpendicular to{' '}
          <InlineMath>{'L'}</InlineMath> is a measurable set in its own plane.
        </p>
        <p>
          <strong>Cavalieri's Principle:</strong> Two Cavalieri solids with equal cross-sectional
          areas at every height have equal volumes.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Volume of Right Cylindrical Solids</h2>

      <p className="text-dark-200 mb-4">
        A <strong>right cylindrical solid</strong> has the form:
      </p>

      <MathBlock>{'S = \\{(x, y, z) \\mid (x, y) \\in B, \\; a \\leq z \\leq b\\}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        where <InlineMath>{'B'}</InlineMath> is a bounded plane set (the base). Every cross-section
        perpendicular to the <InlineMath>{'z'}</InlineMath>-axis is congruent to{' '}
        <InlineMath>{'B'}</InlineMath>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Volume of a Right Cylinder</p>
        <p>
          The volume of a right cylindrical solid equals the area of its base multiplied by its
          altitude:
        </p>
        <MathBlock>{'v(S) = a(B) \\cdot (b - a)'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Cross-Sectional Area Formula</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.7 (Volume via Cross-Sectional Area)</p>
        <p className="mb-2">
          Let <InlineMath>{'R'}</InlineMath> be a Cavalieri solid with cross-sectional area function{' '}
          <InlineMath>{'a_R'}</InlineMath> that is integrable on <InlineMath>{'[a, b]'}</InlineMath>{' '}
          and zero outside <InlineMath>{'[a, b]'}</InlineMath>. Then the volume of{' '}
          <InlineMath>{'R'}</InlineMath> is:
        </p>
        <MathBlock>{'v(R) = \\int_a^b a_R(u)\\,du'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This powerful formula reduces three-dimensional volume calculations to one-dimensional
        integrals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Solids of Revolution: The Disk Method</h2>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'f'}</InlineMath> be nonnegative and integrable on{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. When the ordinate set of <InlineMath>{'f'}</InlineMath>{' '}
        is revolved about the <InlineMath>{'x'}</InlineMath>-axis, it sweeps out a{' '}
        <strong>solid of revolution</strong>.
      </p>

      <p className="text-dark-200 mb-4">
        Each cross-section perpendicular to the <InlineMath>{'x'}</InlineMath>-axis at point{' '}
        <InlineMath>{'x'}</InlineMath> is a circular disk of radius <InlineMath>{'f(x)'}</InlineMath>,
        with area <InlineMath>{'\\pi f^2(x)'}</InlineMath>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Disk Method</p>
        <p className="mb-2">
          The volume of the solid obtained by revolving the ordinate set of{' '}
          <InlineMath>{'f'}</InlineMath> about the <InlineMath>{'x'}</InlineMath>-axis is:
        </p>
        <MathBlock>{'V = \\int_a^b \\pi f^2(x)\\,dx = \\pi \\int_a^b f^2(x)\\,dx'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Volume of a Sphere</p>
        <p className="mb-2">
          A sphere of radius <InlineMath>{'r'}</InlineMath> is obtained by revolving the semicircle{' '}
          <InlineMath>{'f(x) = \\sqrt{r^2 - x^2}'}</InlineMath> about the{' '}
          <InlineMath>{'x'}</InlineMath>-axis for <InlineMath>{'-r \\leq x \\leq r'}</InlineMath>.
        </p>
        <MathBlock>{'V = \\pi \\int_{-r}^{r} (r^2 - x^2)\\,dx = 2\\pi \\int_0^r (r^2 - x^2)\\,dx'}</MathBlock>
        <MathBlock>{'= 2\\pi \\left[r^2 x - \\frac{x^3}{3}\\right]_0^r = 2\\pi \\left(r^3 - \\frac{r^3}{3}\\right) = \\frac{4}{3}\\pi r^3'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Volume of a Cone</p>
        <p className="mb-2">
          A right circular cone is obtained by revolving <InlineMath>{'f(x) = cx'}</InlineMath>{' '}
          about the <InlineMath>{'x'}</InlineMath>-axis for{' '}
          <InlineMath>{'0 \\leq x \\leq b'}</InlineMath>. The base has radius{' '}
          <InlineMath>{'R = cb'}</InlineMath> and the altitude is <InlineMath>{'b'}</InlineMath>.
        </p>
        <MathBlock>{'V = \\pi \\int_0^b (cx)^2\\,dx = \\pi c^2 \\int_0^b x^2\\,dx = \\pi c^2 \\cdot \\frac{b^3}{3} = \\frac{1}{3}\\pi R^2 b'}</MathBlock>
        <p className="mt-2">
          This is <InlineMath>{'\\frac{1}{3}'}</InlineMath> times the area of the base times the altitude.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Washer Method</h2>

      <p className="text-dark-200 mb-4">
        When the region <em>between</em> two graphs is rotated about the{' '}
        <InlineMath>{'x'}</InlineMath>-axis, each cross-section is an <strong>annulus</strong>{' '}
        (a washer-shaped region bounded by two concentric circles).
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Washer Method</p>
        <p className="mb-2">
          If <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are nonnegative and
          integrable on <InlineMath>{'[a, b]'}</InlineMath> with{' '}
          <InlineMath>{'f \\leq g'}</InlineMath>, the volume of the solid obtained by rotating the
          region between their graphs about the <InlineMath>{'x'}</InlineMath>-axis is:
        </p>
        <MathBlock>{'V = \\pi \\int_a^b [g^2(x) - f^2(x)]\\,dx'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Washer Method</p>
        <p className="mb-2">
          Find the volume when the region between <InlineMath>{'f(x) = \\sqrt{x}'}</InlineMath> and{' '}
          <InlineMath>{'g(x) = x^2'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath> is rotated
          about the <InlineMath>{'x'}</InlineMath>-axis.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          For <InlineMath>{'0 \\leq x \\leq 1'}</InlineMath>, we have{' '}
          <InlineMath>{'x^2 \\leq \\sqrt{x}'}</InlineMath>, so{' '}
          <InlineMath>{'g(x) = \\sqrt{x}'}</InlineMath> is the outer radius:
        </p>
        <MathBlock>{'V = \\pi \\int_0^1 [(\\sqrt{x})^2 - (x^2)^2]\\,dx = \\pi \\int_0^1 (x - x^4)\\,dx'}</MathBlock>
        <MathBlock>{'= \\pi \\left[\\frac{x^2}{2} - \\frac{x^5}{5}\\right]_0^1 = \\pi \\left(\\frac{1}{2} - \\frac{1}{5}\\right) = \\frac{3\\pi}{10}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Cross-Sectional Shapes</h2>

      <p className="text-dark-200 mb-4">
        Theorem 2.7 applies to any solid with known cross-sectional areas, not just solids of
        revolution.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Square Cross-Sections</p>
        <p className="mb-2">
          A solid has cross-sections perpendicular to the <InlineMath>{'x'}</InlineMath>-axis that
          are squares with edge <InlineMath>{'2x^2'}</InlineMath>. Find the volume from{' '}
          <InlineMath>{'x = 0'}</InlineMath> to <InlineMath>{'x = a'}</InlineMath>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          The cross-sectional area at <InlineMath>{'x'}</InlineMath> is{' '}
          <InlineMath>{'(2x^2)^2 = 4x^4'}</InlineMath>:
        </p>
        <MathBlock>{'V = \\int_0^a 4x^4\\,dx = 4 \\cdot \\frac{x^5}{5}\\Big|_0^a = \\frac{4a^5}{5}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Volume axioms:</strong> Similar to area axioms, with Cavalieri's principle
          replacing congruence
        </li>
        <li>
          <strong>Cross-sectional formula:</strong>{' '}
          <InlineMath>{'V = \\int_a^b a(x)\\,dx'}</InlineMath> where{' '}
          <InlineMath>{'a(x)'}</InlineMath> is cross-sectional area
        </li>
        <li>
          <strong>Disk method:</strong>{' '}
          <InlineMath>{'V = \\pi \\int_a^b f^2(x)\\,dx'}</InlineMath> for revolution about{' '}
          <InlineMath>{'x'}</InlineMath>-axis
        </li>
        <li>
          <strong>Washer method:</strong>{' '}
          <InlineMath>{'V = \\pi \\int_a^b [g^2(x) - f^2(x)]\\,dx'}</InlineMath> for region between
          curves
        </li>
        <li>
          <strong>Sphere:</strong> <InlineMath>{'V = \\frac{4}{3}\\pi r^3'}</InlineMath>
        </li>
        <li>
          <strong>Cone:</strong>{' '}
          <InlineMath>{'V = \\frac{1}{3} \\cdot \\text{base} \\cdot \\text{height}'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The key insight is that three-dimensional volume calculations reduce to one-dimensional
        integrals via the cross-sectional area formula. This technique extends to any solid whose
        cross-sectional area can be expressed as a function of position along an axis.
      </p>
    </LessonLayout>
  );
}
