import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        We assume there exists a class <MathInline>{'\\mathscr{M}'}</MathInline> of{' '}
        <strong>measurable sets</strong> in three-dimensional space (called <strong>solids</strong>)
        and a <strong>volume function</strong> <MathInline>{'v'}</MathInline> that assigns to each
        solid <MathInline>{'S'}</MathInline> a nonnegative number <MathInline>{'v(S)'}</MathInline>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Axioms for Volume</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Nonnegative:</strong> <MathInline>{'v(S) \\geq 0'}</MathInline> for every solid{' '}
            <MathInline>{'S'}</MathInline>
          </li>
          <li>
            <strong>Additive:</strong>{' '}
            <MathInline>{'v(S \\cup T) = v(S) + v(T) - v(S \\cap T)'}</MathInline>
          </li>
          <li>
            <strong>Difference:</strong> If <MathInline>{'S \\subseteq T'}</MathInline>, then{' '}
            <MathInline>{'v(T - S) = v(T) - v(S)'}</MathInline>
          </li>
          <li>
            <strong>Cavalieri's Principle:</strong> If <MathInline>{'S'}</MathInline> and{' '}
            <MathInline>{'T'}</MathInline> have equal cross-sectional areas for every plane
            perpendicular to a given line, then <MathInline>{'v(S) = v(T)'}</MathInline>
          </li>
          <li>
            <strong>Choice of Scale:</strong> A box with edges <MathInline>{'a, b, c'}</MathInline>{' '}
            has volume <MathInline>{'v = abc'}</MathInline>
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
          A solid <MathInline>{'S'}</MathInline> is a <strong>Cavalieri solid</strong> with respect
          to a line <MathInline>{'L'}</MathInline> if every cross-section perpendicular to{' '}
          <MathInline>{'L'}</MathInline> is a measurable set in its own plane.
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
        where <MathInline>{'B'}</MathInline> is a bounded plane set (the base). Every cross-section
        perpendicular to the <MathInline>{'z'}</MathInline>-axis is congruent to{' '}
        <MathInline>{'B'}</MathInline>.
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
          Let <MathInline>{'R'}</MathInline> be a Cavalieri solid with cross-sectional area function{' '}
          <MathInline>{'a_R'}</MathInline> that is integrable on <MathInline>{'[a, b]'}</MathInline>{' '}
          and zero outside <MathInline>{'[a, b]'}</MathInline>. Then the volume of{' '}
          <MathInline>{'R'}</MathInline> is:
        </p>
        <MathBlock>{'v(R) = \\int_a^b a_R(u)\\,du'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This powerful formula reduces three-dimensional volume calculations to one-dimensional
        integrals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Solids of Revolution: The Disk Method</h2>

      <p className="text-dark-200 mb-4">
        Let <MathInline>{'f'}</MathInline> be nonnegative and integrable on{' '}
        <MathInline>{'[a, b]'}</MathInline>. When the ordinate set of <MathInline>{'f'}</MathInline>{' '}
        is revolved about the <MathInline>{'x'}</MathInline>-axis, it sweeps out a{' '}
        <strong>solid of revolution</strong>.
      </p>

      <p className="text-dark-200 mb-4">
        Each cross-section perpendicular to the <MathInline>{'x'}</MathInline>-axis at point{' '}
        <MathInline>{'x'}</MathInline> is a circular disk of radius <MathInline>{'f(x)'}</MathInline>,
        with area <MathInline>{'\\pi f^2(x)'}</MathInline>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Disk Method</p>
        <p className="mb-2">
          The volume of the solid obtained by revolving the ordinate set of{' '}
          <MathInline>{'f'}</MathInline> about the <MathInline>{'x'}</MathInline>-axis is:
        </p>
        <MathBlock>{'V = \\int_a^b \\pi f^2(x)\\,dx = \\pi \\int_a^b f^2(x)\\,dx'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Volume of a Sphere</p>
        <p className="mb-2">
          A sphere of radius <MathInline>{'r'}</MathInline> is obtained by revolving the semicircle{' '}
          <MathInline>{'f(x) = \\sqrt{r^2 - x^2}'}</MathInline> about the{' '}
          <MathInline>{'x'}</MathInline>-axis for <MathInline>{'-r \\leq x \\leq r'}</MathInline>.
        </p>
        <MathBlock>{'V = \\pi \\int_{-r}^{r} (r^2 - x^2)\\,dx = 2\\pi \\int_0^r (r^2 - x^2)\\,dx'}</MathBlock>
        <MathBlock>{'= 2\\pi \\left[r^2 x - \\frac{x^3}{3}\\right]_0^r = 2\\pi \\left(r^3 - \\frac{r^3}{3}\\right) = \\frac{4}{3}\\pi r^3'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Volume of a Cone</p>
        <p className="mb-2">
          A right circular cone is obtained by revolving <MathInline>{'f(x) = cx'}</MathInline>{' '}
          about the <MathInline>{'x'}</MathInline>-axis for{' '}
          <MathInline>{'0 \\leq x \\leq b'}</MathInline>. The base has radius{' '}
          <MathInline>{'R = cb'}</MathInline> and the altitude is <MathInline>{'b'}</MathInline>.
        </p>
        <MathBlock>{'V = \\pi \\int_0^b (cx)^2\\,dx = \\pi c^2 \\int_0^b x^2\\,dx = \\pi c^2 \\cdot \\frac{b^3}{3} = \\frac{1}{3}\\pi R^2 b'}</MathBlock>
        <p className="mt-2">
          This is <MathInline>{'\\frac{1}{3}'}</MathInline> times the area of the base times the altitude.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Washer Method</h2>

      <p className="text-dark-200 mb-4">
        When the region <em>between</em> two graphs is rotated about the{' '}
        <MathInline>{'x'}</MathInline>-axis, each cross-section is an <strong>annulus</strong>{' '}
        (a washer-shaped region bounded by two concentric circles).
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Washer Method</p>
        <p className="mb-2">
          If <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> are nonnegative and
          integrable on <MathInline>{'[a, b]'}</MathInline> with{' '}
          <MathInline>{'f \\leq g'}</MathInline>, the volume of the solid obtained by rotating the
          region between their graphs about the <MathInline>{'x'}</MathInline>-axis is:
        </p>
        <MathBlock>{'V = \\pi \\int_a^b [g^2(x) - f^2(x)]\\,dx'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Washer Method</p>
        <p className="mb-2">
          Find the volume when the region between <MathInline>{'f(x) = \\sqrt{x}'}</MathInline> and{' '}
          <MathInline>{'g(x) = x^2'}</MathInline> on <MathInline>{'[0, 1]'}</MathInline> is rotated
          about the <MathInline>{'x'}</MathInline>-axis.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          For <MathInline>{'0 \\leq x \\leq 1'}</MathInline>, we have{' '}
          <MathInline>{'x^2 \\leq \\sqrt{x}'}</MathInline>, so{' '}
          <MathInline>{'g(x) = \\sqrt{x}'}</MathInline> is the outer radius:
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
          A solid has cross-sections perpendicular to the <MathInline>{'x'}</MathInline>-axis that
          are squares with edge <MathInline>{'2x^2'}</MathInline>. Find the volume from{' '}
          <MathInline>{'x = 0'}</MathInline> to <MathInline>{'x = a'}</MathInline>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          The cross-sectional area at <MathInline>{'x'}</MathInline> is{' '}
          <MathInline>{'(2x^2)^2 = 4x^4'}</MathInline>:
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
          <MathInline>{'V = \\int_a^b a(x)\\,dx'}</MathInline> where{' '}
          <MathInline>{'a(x)'}</MathInline> is cross-sectional area
        </li>
        <li>
          <strong>Disk method:</strong>{' '}
          <MathInline>{'V = \\pi \\int_a^b f^2(x)\\,dx'}</MathInline> for revolution about{' '}
          <MathInline>{'x'}</MathInline>-axis
        </li>
        <li>
          <strong>Washer method:</strong>{' '}
          <MathInline>{'V = \\pi \\int_a^b [g^2(x) - f^2(x)]\\,dx'}</MathInline> for region between
          curves
        </li>
        <li>
          <strong>Sphere:</strong> <MathInline>{'V = \\frac{4}{3}\\pi r^3'}</MathInline>
        </li>
        <li>
          <strong>Cone:</strong>{' '}
          <MathInline>{'V = \\frac{1}{3} \\cdot \\text{base} \\cdot \\text{height}'}</MathInline>
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
