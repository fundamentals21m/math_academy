import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">The Method of Exhaustion</h2>

      <p className="text-dark-200 mb-6">
        Before we proceed to a systematic treatment of integral calculus, it will be instructive
        to apply the <strong>method of exhaustion</strong> directly to one of the special figures
        treated by Archimedes himself: the area under a parabola.
      </p>

      <Callout type="info">
        <p>
          The method of exhaustion is a technique for finding the area of a shape by inscribing
          inside it a sequence of polygons whose areas converge to the area of the containing shape.
          The polygons "exhaust" the area as they get closer and closer to the boundary.
        </p>
      </Callout>

      {/* The Parabolic Segment */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Parabolic Segment</h3>

      <p className="text-dark-200 mb-4">
        Consider the region under the parabola <InlineMath>{'y = x^2'}</InlineMath> from{' '}
        <InlineMath>{'x = 0'}</InlineMath> to <InlineMath>{'x = b'}</InlineMath>. If we choose
        an arbitrary point on the base at distance <InlineMath>{'x'}</InlineMath> from the origin,
        then the vertical distance (ordinate) from this point to the curve is <InlineMath>{'x^2'}</InlineMath>.
      </p>

      <Callout type="definition">
        <p>
          <strong>Parabolic Segment:</strong> The region bounded by the parabola{' '}
          <InlineMath>{'y = x^2'}</InlineMath>, the <InlineMath>{'x'}</InlineMath>-axis, and the
          vertical line <InlineMath>{'x = b'}</InlineMath>.
        </p>
        <p className="mt-2">
          The base has length <InlineMath>{'b'}</InlineMath> and the altitude is <InlineMath>{'b^2'}</InlineMath>.
        </p>
      </Callout>

      {/* Approximation by Rectangles */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Approximation by Rectangles</h3>

      <p className="text-dark-200 mb-4">
        We approximate the area by dividing the base into <InlineMath>{'n'}</InlineMath> equal
        parts, each of width <InlineMath>{'b/n'}</InlineMath>. On each subinterval, we construct
        a rectangle whose height equals the ordinate at the left endpoint.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Setting Up the Approximation</p>
        <p>
          The <InlineMath>{'k'}</InlineMath>-th rectangle (for <InlineMath>{'k = 0, 1, 2, \\ldots, n-1'}</InlineMath>)
          has:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Base: <InlineMath>{'b/n'}</InlineMath></li>
          <li>Height: <InlineMath>{'\\left(\\frac{kb}{n}\\right)^2 = \\frac{k^2 b^2}{n^2}'}</InlineMath></li>
          <li>Area: <InlineMath>{'\\frac{b}{n} \\cdot \\frac{k^2 b^2}{n^2} = \\frac{k^2 b^3}{n^3}'}</InlineMath></li>
        </ul>
      </Callout>

      <p className="text-dark-200 mt-4 mb-4">
        The sum of all <InlineMath>{'n'}</InlineMath> rectangles gives us an approximation to the area:
      </p>

      <MathBlock>
        {'S_n = \\sum_{k=0}^{n-1} \\frac{k^2 b^3}{n^3} = \\frac{b^3}{n^3} \\sum_{k=0}^{n-1} k^2'}
      </MathBlock>

      {/* The Key Formula */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Sum of Squares Formula</h3>

      <p className="text-dark-200 mb-4">
        To evaluate this sum, we need the formula for the sum of the first <InlineMath>{'n-1'}</InlineMath> squares:
      </p>

      <Callout type="theorem">
        <p><strong>Sum of Squares Formula:</strong></p>
        <MathBlock>
          {'\\sum_{k=0}^{n-1} k^2 = 0^2 + 1^2 + 2^2 + \\cdots + (n-1)^2 = \\frac{(n-1)n(2n-1)}{6}'}
        </MathBlock>
      </Callout>

      <p className="text-dark-200 mt-4 mb-4">
        Substituting this into our expression for <InlineMath>{'S_n'}</InlineMath>:
      </p>

      <MathBlock>
        {'S_n = \\frac{b^3}{n^3} \\cdot \\frac{(n-1)n(2n-1)}{6} = \\frac{b^3(n-1)(2n-1)}{6n^2}'}
      </MathBlock>

      {/* Taking the Limit */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Taking the Limit</h3>

      <p className="text-dark-200 mb-4">
        As <InlineMath>{'n \\to \\infty'}</InlineMath>, the rectangles become narrower and their
        union approximates the parabolic region more closely. Let's simplify:
      </p>

      <MathBlock>
        {'S_n = \\frac{b^3(n-1)(2n-1)}{6n^2} = \\frac{b^3}{6} \\cdot \\frac{n-1}{n} \\cdot \\frac{2n-1}{n}'}
      </MathBlock>

      <MathBlock>
        {'= \\frac{b^3}{6} \\cdot \\left(1 - \\frac{1}{n}\\right) \\cdot \\left(2 - \\frac{1}{n}\\right)'}
      </MathBlock>

      <p className="text-dark-200 mt-4 mb-4">
        As <InlineMath>{'n \\to \\infty'}</InlineMath>, both <InlineMath>{'1/n \\to 0'}</InlineMath>, so:
      </p>

      <Callout type="theorem">
        <p><strong>Archimedes' Result:</strong></p>
        <MathBlock>
          {'\\text{Area} = \\lim_{n \\to \\infty} S_n = \\frac{b^3}{6} \\cdot 1 \\cdot 2 = \\frac{b^3}{3}'}
        </MathBlock>
        <p className="mt-2 text-sm text-dark-400">
          The area under the parabola <InlineMath>{'y = x^2'}</InlineMath> from <InlineMath>{'0'}</InlineMath> to{' '}
          <InlineMath>{'b'}</InlineMath> is exactly <InlineMath>{'b^3/3'}</InlineMath>.
        </p>
      </Callout>

      {/* Connection to Modern Calculus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Connection to Modern Notation</h3>

      <p className="text-dark-200 mb-4">
        In modern integral notation, we would write this result as:
      </p>

      <MathBlock>
        {'\\int_0^b x^2 \\, dx = \\frac{b^3}{3}'}
      </MathBlock>

      <Callout type="info">
        <p>
          The integral sign <InlineMath>{'\\int'}</InlineMath> (an elongated "S" for "sum") was
          introduced by Leibniz. The method of exhaustion foreshadows exactly how we will
          define the integral: as a limit of sums of rectangular areas.
        </p>
      </Callout>

      {/* Critical Analysis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Critical Analysis</h2>

      <p className="text-dark-200 mb-4">
        While the method of exhaustion gives correct results, there are several logical
        questions that need to be addressed for a rigorous foundation:
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-dark-800 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold text-yellow-400">Question 1</p>
          <p className="text-dark-300 text-sm mt-1">
            How do we know the "sum of squares" formula is correct?
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold text-yellow-400">Question 2</p>
          <p className="text-dark-300 text-sm mt-1">
            What exactly does it mean for the limit to exist? What are the precise rules for manipulating limits?
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold text-yellow-400">Question 3</p>
          <p className="text-dark-300 text-sm mt-1">
            How do we define "area" in the first place? Is it circular reasoning to use area to define area?
          </p>
        </div>
      </div>

      <p className="text-dark-200 mt-6 mb-4">
        These questions will be answered carefully in the coming chapters. We will:
      </p>

      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Prove the sum of squares formula using mathematical induction (Part 4)</li>
        <li>Define limits rigorously using the real number system (Part 3)</li>
        <li>Define area axiomatically and derive the integral from these axioms (Chapter 1)</li>
      </ul>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The method of exhaustion approximates curved regions with polygons (rectangles) and takes a limit.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              For the parabola <InlineMath>{'y = x^2'}</InlineMath>, dividing <InlineMath>{'[0, b]'}</InlineMath> into{' '}
              <InlineMath>{'n'}</InlineMath> parts and summing rectangle areas leads to the sum of squares.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Taking <InlineMath>{'n \\to \\infty'}</InlineMath> gives the exact area: <InlineMath>{'b^3/3'}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>This calculation motivates but does not rigorously define integral calculus—we need proper foundations.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
