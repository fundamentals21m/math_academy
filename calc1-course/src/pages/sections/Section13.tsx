import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Area Between Curves</h2>

      <p className="text-dark-200 mb-6">
        In Section 10, we expressed the area of the ordinate set of a nonnegative function as an
        integral. Now we extend this to compute areas of more general regions—specifically, the
        region trapped between the graphs of two functions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Region Between Two Graphs</h2>

      <p className="text-dark-200 mb-4">
        If two functions <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> satisfy{' '}
        <InlineMath>{'f(x) \\leq g(x)'}</InlineMath> for all <InlineMath>{'x'}</InlineMath> in{' '}
        <InlineMath>{'[a, b]'}</InlineMath>, we write <InlineMath>{'f \\leq g'}</InlineMath> on{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. The set <InlineMath>{'S'}</InlineMath> of all points{' '}
        <InlineMath>{'(x, y)'}</InlineMath> satisfying:
      </p>

      <MathBlock>{'f(x) \\leq y \\leq g(x), \\quad a \\leq x \\leq b'}</MathBlock>

      <p className="text-dark-200 mb-6">
        is called the <strong>region between the graphs</strong> of <InlineMath>{'f'}</InlineMath>{' '}
        and <InlineMath>{'g'}</InlineMath>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.1 (Area Between Two Graphs)</p>
        <p className="mb-2">
          Assume <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are integrable
          and satisfy <InlineMath>{'f \\leq g'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>.
          Then the region <InlineMath>{'S'}</InlineMath> between their graphs is measurable and its
          area <InlineMath>{'a(S)'}</InlineMath> is given by:
        </p>
        <MathBlock>{'a(S) = \\int_a^b [g(x) - f(x)]\\,dx'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        When <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are both nonnegative,
        let <InlineMath>{'G'}</InlineMath> be the ordinate set of <InlineMath>{'g'}</InlineMath> and{' '}
        <InlineMath>{'F'}</InlineMath> the ordinate set of <InlineMath>{'f'}</InlineMath>. The region{' '}
        <InlineMath>{'S'}</InlineMath> between them is the difference <InlineMath>{'S = G - F'}</InlineMath>.
        Since <InlineMath>{'F \\subseteq G'}</InlineMath>:
      </p>

      <MathBlock>{'a(S) = a(G) - a(F) = \\int_a^b g(x)\\,dx - \\int_a^b f(x)\\,dx = \\int_a^b [g(x) - f(x)]\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-6">
        For the general case where <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>{' '}
        may be negative, we translate the region upward by a constant <InlineMath>{'c'}</InlineMath>{' '}
        to bring it above the <InlineMath>{'x'}</InlineMath>-axis. The translation preserves area,
        and the constants cancel in the difference.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Worked Examples</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Parabola and Line</p>
        <p className="mb-2">
          Compute the area of the region <InlineMath>{'S'}</InlineMath> between the graphs of{' '}
          <InlineMath>{'f(x) = x(x-2) = x^2 - 2x'}</InlineMath> and <InlineMath>{'g(x) = x/2'}</InlineMath>{' '}
          over <InlineMath>{'[0, 2]'}</InlineMath>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          Since <InlineMath>{'f \\leq g'}</InlineMath> over <InlineMath>{'[0, 2]'}</InlineMath>:
        </p>
        <MathBlock>{'a(S) = \\int_0^2 [g(x) - f(x)]\\,dx = \\int_0^2 \\left(\\frac{5}{2}x - x^2\\right)\\,dx'}</MathBlock>
        <MathBlock>{'= \\frac{5}{2} \\cdot \\frac{2^2}{2} - \\frac{2^3}{3} = 5 - \\frac{8}{3} = \\frac{7}{3}'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">When the Graphs Cross</h3>

      <p className="text-dark-200 mb-4">
        If the functions cross within the interval, we must split the integral at the crossing points
        and take absolute values of the differences.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Crossing Curves</p>
        <p className="mb-2">
          Compute the area between <InlineMath>{'f(x) = x'}</InlineMath> and{' '}
          <InlineMath>{'g(x) = x^3/4'}</InlineMath> over <InlineMath>{'[-1, 2]'}</InlineMath>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          The curves cross at <InlineMath>{'x = 0'}</InlineMath>. On <InlineMath>{'[-1, 0]'}</InlineMath>,
          we have <InlineMath>{'f \\leq g'}</InlineMath>; on <InlineMath>{'[0, 2]'}</InlineMath>, we have{' '}
          <InlineMath>{'g \\leq f'}</InlineMath>. So:
        </p>
        <MathBlock>{'a(S) = \\int_{-1}^{0} \\left(\\frac{x^3}{4} - x\\right)\\,dx + \\int_0^2 \\left(x - \\frac{x^3}{4}\\right)\\,dx'}</MathBlock>
        <MathBlock>{'= -\\frac{1}{4} \\cdot \\frac{(-1)^4}{4} + \\frac{(-1)^2}{2} + \\frac{2^2}{2} - \\frac{1}{4} \\cdot \\frac{2^4}{4} = \\frac{23}{16}'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">General Formula for Crossing Curves</p>
        <p className="mb-2">
          When the interval <InlineMath>{'[a, b]'}</InlineMath> can be broken into subintervals where
          either <InlineMath>{'f \\leq g'}</InlineMath> or <InlineMath>{'g \\leq f'}</InlineMath>, the
          area formula becomes:
        </p>
        <MathBlock>{'a(S) = \\int_a^b |g(x) - f(x)|\\,dx'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Area of a Circular Disk</h2>

      <p className="text-dark-200 mb-4">
        A circular disk of radius <InlineMath>{'r'}</InlineMath> is the region between the upper and
        lower semicircles:
      </p>

      <MathBlock>{'f(x) = -\\sqrt{r^2 - x^2}, \\quad g(x) = \\sqrt{r^2 - x^2}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Both functions are bounded and piecewise monotonic on <InlineMath>{'[-r, r]'}</InlineMath>,
        so they are integrable. By Theorem 2.1, the area is:
      </p>

      <MathBlock>{'A(r) = \\int_{-r}^{r} [g(x) - f(x)]\\,dx = 2\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Using the scaling property (Theorem 1.19) with <InlineMath>{'k = 1/r'}</InlineMath>:
      </p>

      <MathBlock>{'A(r) = 2r \\int_{-1}^{1} \\sqrt{r^2 - (rx)^2}\\,dx = 2r^2 \\int_{-1}^{1} \\sqrt{1 - x^2}\\,dx = r^2 A(1)'}</MathBlock>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of <InlineMath>{'\\pi'}</InlineMath></p>
        <p>
          We define the number <InlineMath>{'\\pi'}</InlineMath> to be the area of a unit disk:
        </p>
        <MathBlock>{'\\pi = A(1) = 2\\int_{-1}^{1} \\sqrt{1 - x^2}\\,dx'}</MathBlock>
        <p className="mt-2">
          The formula just proved states that the area of a disk of radius{' '}
          <InlineMath>{'r'}</InlineMath> is <InlineMath>{'A(r) = \\pi r^2'}</InlineMath>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Similarity Transformations</h2>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{'S'}</InlineMath> is a region in the plane and <InlineMath>{'k > 0'}</InlineMath>,
        the set <InlineMath>{'kS'}</InlineMath> obtained by multiplying all coordinates by{' '}
        <InlineMath>{'k'}</InlineMath> is called <strong>similar</strong> to{' '}
        <InlineMath>{'S'}</InlineMath>. This <strong>similarity transformation</strong> is an{' '}
        <em>expansion</em> if <InlineMath>{'k > 1'}</InlineMath> and a <em>contraction</em> if{' '}
        <InlineMath>{'0 < k < 1'}</InlineMath>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Area Under Similarity Transformations</p>
        <p className="mb-2">
          Let <InlineMath>{'f'}</InlineMath> be nonnegative and integrable on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, with ordinate set <InlineMath>{'S'}</InlineMath>.
          Under a similarity transformation with factor <InlineMath>{'k > 0'}</InlineMath>, the
          new ordinate set <InlineMath>{'kS'}</InlineMath> is the ordinate set of{' '}
          <InlineMath>{'g(x) = kf(x/k)'}</InlineMath> over <InlineMath>{'[ka, kb]'}</InlineMath>, and:
        </p>
        <MathBlock>{'a(kS) = k^2 \\cdot a(S)'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This explains why the area of a disk of radius <InlineMath>{'r'}</InlineMath> is{' '}
        <InlineMath>{'r^2'}</InlineMath> times the area of a unit disk: the disk of radius{' '}
        <InlineMath>{'r'}</InlineMath> is the unit disk scaled by factor <InlineMath>{'r'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Using Area to Compute Integrals</h2>

      <p className="text-dark-200 mb-4">
        Sometimes we can reverse the process: use geometric knowledge of area to compute integrals.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Computing <InlineMath>{'\\int_0^a x^{1/2}\\,dx'}</InlineMath></p>
        <p className="mb-2">
          Consider <InlineMath>{'f(x) = x^{1/2}'}</InlineMath> on <InlineMath>{'[0, a]'}</InlineMath>{' '}
          where <InlineMath>{'a > 0'}</InlineMath>. The ordinate set <InlineMath>{'S'}</InlineMath>{' '}
          plus the shaded region <InlineMath>{'T'}</InlineMath> (under the curve{' '}
          <InlineMath>{'x = y^2'}</InlineMath>) fill out a rectangle of base{' '}
          <InlineMath>{'a'}</InlineMath> and height <InlineMath>{'a^{1/2}'}</InlineMath>.
        </p>
        <p className="mt-3 mb-2">
          Thus <InlineMath>{'a(S) + a(T) = a^{3/2}'}</InlineMath>. But{' '}
          <InlineMath>{'T'}</InlineMath> is the ordinate set of <InlineMath>{'g(y) = y^2'}</InlineMath>{' '}
          on <InlineMath>{'[0, a^{1/2}]'}</InlineMath>:
        </p>
        <MathBlock>{'a(T) = \\int_0^{a^{1/2}} y^2\\,dy = \\frac{1}{3}a^{3/2}'}</MathBlock>
        <p className="mt-2 mb-2">Therefore:</p>
        <MathBlock>{'\\int_0^a x^{1/2}\\,dx = a(S) = a^{3/2} - \\frac{1}{3}a^{3/2} = \\frac{2}{3}a^{3/2}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        This clever argument generalizes to any positive integer root:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.2 (Integral of <InlineMath>{'x^{1/n}'}</InlineMath>)</p>
        <p className="mb-2">
          For <InlineMath>{'a > 0'}</InlineMath>, <InlineMath>{'b > 0'}</InlineMath>, and{' '}
          <InlineMath>{'n'}</InlineMath> a positive integer:
        </p>
        <MathBlock>{'\\int_a^b x^{1/n}\\,dx = \\frac{b^{1+1/n} - a^{1+1/n}}{1 + 1/n}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Area between curves:</strong> If <InlineMath>{'f \\leq g'}</InlineMath> on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, the area between them is{' '}
          <InlineMath>{'\\int_a^b [g(x) - f(x)]\\,dx'}</InlineMath>
        </li>
        <li>
          <strong>Crossing curves:</strong> Use{' '}
          <InlineMath>{'\\int_a^b |g(x) - f(x)|\\,dx'}</InlineMath> when curves cross
        </li>
        <li>
          <strong>Definition of <InlineMath>{'\\pi'}</InlineMath>:</strong> The area of a unit disk
        </li>
        <li>
          <strong>Similarity:</strong> Scaling by factor <InlineMath>{'k'}</InlineMath> multiplies
          area by <InlineMath>{'k^2'}</InlineMath>
        </li>
        <li>
          <strong>Disk area:</strong> <InlineMath>{'A(r) = \\pi r^2'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        These results demonstrate the power of integration for computing areas of regions that would
        be difficult or impossible to handle using elementary geometry alone. The interplay between
        integration and area also allows us to compute certain integrals by geometric reasoning.
      </p>
    </LessonLayout>
  );
}
