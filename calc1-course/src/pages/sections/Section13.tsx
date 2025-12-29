import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        If two functions <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> satisfy{' '}
        <MathInline>{'f(x) \\leq g(x)'}</MathInline> for all <MathInline>{'x'}</MathInline> in{' '}
        <MathInline>{'[a, b]'}</MathInline>, we write <MathInline>{'f \\leq g'}</MathInline> on{' '}
        <MathInline>{'[a, b]'}</MathInline>. The set <MathInline>{'S'}</MathInline> of all points{' '}
        <MathInline>{'(x, y)'}</MathInline> satisfying:
      </p>

      <MathBlock>{'f(x) \\leq y \\leq g(x), \\quad a \\leq x \\leq b'}</MathBlock>

      <p className="text-dark-200 mb-6">
        is called the <strong>region between the graphs</strong> of <MathInline>{'f'}</MathInline>{' '}
        and <MathInline>{'g'}</MathInline>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.1 (Area Between Two Graphs)</p>
        <p className="mb-2">
          Assume <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> are integrable
          and satisfy <MathInline>{'f \\leq g'}</MathInline> on <MathInline>{'[a, b]'}</MathInline>.
          Then the region <MathInline>{'S'}</MathInline> between their graphs is measurable and its
          area <MathInline>{'a(S)'}</MathInline> is given by:
        </p>
        <MathBlock>{'a(S) = \\int_a^b [g(x) - f(x)]\\,dx'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        When <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline> are both nonnegative,
        let <MathInline>{'G'}</MathInline> be the ordinate set of <MathInline>{'g'}</MathInline> and{' '}
        <MathInline>{'F'}</MathInline> the ordinate set of <MathInline>{'f'}</MathInline>. The region{' '}
        <MathInline>{'S'}</MathInline> between them is the difference <MathInline>{'S = G - F'}</MathInline>.
        Since <MathInline>{'F \\subseteq G'}</MathInline>:
      </p>

      <MathBlock>{'a(S) = a(G) - a(F) = \\int_a^b g(x)\\,dx - \\int_a^b f(x)\\,dx = \\int_a^b [g(x) - f(x)]\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-6">
        For the general case where <MathInline>{'f'}</MathInline> and <MathInline>{'g'}</MathInline>{' '}
        may be negative, we translate the region upward by a constant <MathInline>{'c'}</MathInline>{' '}
        to bring it above the <MathInline>{'x'}</MathInline>-axis. The translation preserves area,
        and the constants cancel in the difference.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Worked Examples</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Parabola and Line</p>
        <p className="mb-2">
          Compute the area of the region <MathInline>{'S'}</MathInline> between the graphs of{' '}
          <MathInline>{'f(x) = x(x-2) = x^2 - 2x'}</MathInline> and <MathInline>{'g(x) = x/2'}</MathInline>{' '}
          over <MathInline>{'[0, 2]'}</MathInline>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          Since <MathInline>{'f \\leq g'}</MathInline> over <MathInline>{'[0, 2]'}</MathInline>:
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
          Compute the area between <MathInline>{'f(x) = x'}</MathInline> and{' '}
          <MathInline>{'g(x) = x^3/4'}</MathInline> over <MathInline>{'[-1, 2]'}</MathInline>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          The curves cross at <MathInline>{'x = 0'}</MathInline>. On <MathInline>{'[-1, 0]'}</MathInline>,
          we have <MathInline>{'f \\leq g'}</MathInline>; on <MathInline>{'[0, 2]'}</MathInline>, we have{' '}
          <MathInline>{'g \\leq f'}</MathInline>. So:
        </p>
        <MathBlock>{'a(S) = \\int_{-1}^{0} \\left(\\frac{x^3}{4} - x\\right)\\,dx + \\int_0^2 \\left(x - \\frac{x^3}{4}\\right)\\,dx'}</MathBlock>
        <MathBlock>{'= -\\frac{1}{4} \\cdot \\frac{(-1)^4}{4} + \\frac{(-1)^2}{2} + \\frac{2^2}{2} - \\frac{1}{4} \\cdot \\frac{2^4}{4} = \\frac{23}{16}'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">General Formula for Crossing Curves</p>
        <p className="mb-2">
          When the interval <MathInline>{'[a, b]'}</MathInline> can be broken into subintervals where
          either <MathInline>{'f \\leq g'}</MathInline> or <MathInline>{'g \\leq f'}</MathInline>, the
          area formula becomes:
        </p>
        <MathBlock>{'a(S) = \\int_a^b |g(x) - f(x)|\\,dx'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Area of a Circular Disk</h2>

      <p className="text-dark-200 mb-4">
        A circular disk of radius <MathInline>{'r'}</MathInline> is the region between the upper and
        lower semicircles:
      </p>

      <MathBlock>{'f(x) = -\\sqrt{r^2 - x^2}, \\quad g(x) = \\sqrt{r^2 - x^2}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Both functions are bounded and piecewise monotonic on <MathInline>{'[-r, r]'}</MathInline>,
        so they are integrable. By Theorem 2.1, the area is:
      </p>

      <MathBlock>{'A(r) = \\int_{-r}^{r} [g(x) - f(x)]\\,dx = 2\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-4">
        Using the scaling property (Theorem 1.19) with <MathInline>{'k = 1/r'}</MathInline>:
      </p>

      <MathBlock>{'A(r) = 2r \\int_{-1}^{1} \\sqrt{r^2 - (rx)^2}\\,dx = 2r^2 \\int_{-1}^{1} \\sqrt{1 - x^2}\\,dx = r^2 A(1)'}</MathBlock>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of <MathInline>{'\\pi'}</MathInline></p>
        <p>
          We define the number <MathInline>{'\\pi'}</MathInline> to be the area of a unit disk:
        </p>
        <MathBlock>{'\\pi = A(1) = 2\\int_{-1}^{1} \\sqrt{1 - x^2}\\,dx'}</MathBlock>
        <p className="mt-2">
          The formula just proved states that the area of a disk of radius{' '}
          <MathInline>{'r'}</MathInline> is <MathInline>{'A(r) = \\pi r^2'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Similarity Transformations</h2>

      <p className="text-dark-200 mb-4">
        If <MathInline>{'S'}</MathInline> is a region in the plane and <MathInline>{'k > 0'}</MathInline>,
        the set <MathInline>{'kS'}</MathInline> obtained by multiplying all coordinates by{' '}
        <MathInline>{'k'}</MathInline> is called <strong>similar</strong> to{' '}
        <MathInline>{'S'}</MathInline>. This <strong>similarity transformation</strong> is an{' '}
        <em>expansion</em> if <MathInline>{'k > 1'}</MathInline> and a <em>contraction</em> if{' '}
        <MathInline>{'0 < k < 1'}</MathInline>.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Area Under Similarity Transformations</p>
        <p className="mb-2">
          Let <MathInline>{'f'}</MathInline> be nonnegative and integrable on{' '}
          <MathInline>{'[a, b]'}</MathInline>, with ordinate set <MathInline>{'S'}</MathInline>.
          Under a similarity transformation with factor <MathInline>{'k > 0'}</MathInline>, the
          new ordinate set <MathInline>{'kS'}</MathInline> is the ordinate set of{' '}
          <MathInline>{'g(x) = kf(x/k)'}</MathInline> over <MathInline>{'[ka, kb]'}</MathInline>, and:
        </p>
        <MathBlock>{'a(kS) = k^2 \\cdot a(S)'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        This explains why the area of a disk of radius <MathInline>{'r'}</MathInline> is{' '}
        <MathInline>{'r^2'}</MathInline> times the area of a unit disk: the disk of radius{' '}
        <MathInline>{'r'}</MathInline> is the unit disk scaled by factor <MathInline>{'r'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Using Area to Compute Integrals</h2>

      <p className="text-dark-200 mb-4">
        Sometimes we can reverse the process: use geometric knowledge of area to compute integrals.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Computing <MathInline>{'\\int_0^a x^{1/2}\\,dx'}</MathInline></p>
        <p className="mb-2">
          Consider <MathInline>{'f(x) = x^{1/2}'}</MathInline> on <MathInline>{'[0, a]'}</MathInline>{' '}
          where <MathInline>{'a > 0'}</MathInline>. The ordinate set <MathInline>{'S'}</MathInline>{' '}
          plus the shaded region <MathInline>{'T'}</MathInline> (under the curve{' '}
          <MathInline>{'x = y^2'}</MathInline>) fill out a rectangle of base{' '}
          <MathInline>{'a'}</MathInline> and height <MathInline>{'a^{1/2}'}</MathInline>.
        </p>
        <p className="mt-3 mb-2">
          Thus <MathInline>{'a(S) + a(T) = a^{3/2}'}</MathInline>. But{' '}
          <MathInline>{'T'}</MathInline> is the ordinate set of <MathInline>{'g(y) = y^2'}</MathInline>{' '}
          on <MathInline>{'[0, a^{1/2}]'}</MathInline>:
        </p>
        <MathBlock>{'a(T) = \\int_0^{a^{1/2}} y^2\\,dy = \\frac{1}{3}a^{3/2}'}</MathBlock>
        <p className="mt-2 mb-2">Therefore:</p>
        <MathBlock>{'\\int_0^a x^{1/2}\\,dx = a(S) = a^{3/2} - \\frac{1}{3}a^{3/2} = \\frac{2}{3}a^{3/2}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4">
        This clever argument generalizes to any positive integer root:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.2 (Integral of <MathInline>{'x^{1/n}'}</MathInline>)</p>
        <p className="mb-2">
          For <MathInline>{'a > 0'}</MathInline>, <MathInline>{'b > 0'}</MathInline>, and{' '}
          <MathInline>{'n'}</MathInline> a positive integer:
        </p>
        <MathBlock>{'\\int_a^b x^{1/n}\\,dx = \\frac{b^{1+1/n} - a^{1+1/n}}{1 + 1/n}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Area between curves:</strong> If <MathInline>{'f \\leq g'}</MathInline> on{' '}
          <MathInline>{'[a, b]'}</MathInline>, the area between them is{' '}
          <MathInline>{'\\int_a^b [g(x) - f(x)]\\,dx'}</MathInline>
        </li>
        <li>
          <strong>Crossing curves:</strong> Use{' '}
          <MathInline>{'\\int_a^b |g(x) - f(x)|\\,dx'}</MathInline> when curves cross
        </li>
        <li>
          <strong>Definition of <MathInline>{'\\pi'}</MathInline>:</strong> The area of a unit disk
        </li>
        <li>
          <strong>Similarity:</strong> Scaling by factor <MathInline>{'k'}</MathInline> multiplies
          area by <MathInline>{'k^2'}</MathInline>
        </li>
        <li>
          <strong>Disk area:</strong> <MathInline>{'A(r) = \\pi r^2'}</MathInline>
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
