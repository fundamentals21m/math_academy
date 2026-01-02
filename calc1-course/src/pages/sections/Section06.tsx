import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">Cartesian Geometry and Functions</h2>

      <p className="text-dark-200 mb-6">
        To study calculus effectively, we need a way to describe geometric objects
        using numbers. Cartesian geometry provides this bridge between geometry and
        algebra, while functions formalize the relationships between quantities.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Cartesian Coordinate System</h2>

      <p className="text-dark-200 mb-4">
        The idea of representing geometric points by numbers was introduced by
        René Descartes (1596–1650). The procedure for points in a plane is:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Coordinate Axes</p>
        <p>
          Two perpendicular reference lines called <strong>coordinate axes</strong> are chosen:
          one horizontal (the <InlineMath>{'x'}</InlineMath>-axis) and one vertical
          (the <InlineMath>{'y'}</InlineMath>-axis). Their point of intersection,
          denoted <InlineMath>{'O'}</InlineMath>, is called the <strong>origin</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Each point in the plane is assigned a pair of numbers called its <strong>coordinates</strong>.
        For a point <InlineMath>{'P'}</InlineMath> with coordinates <InlineMath>{'(a, b)'}</InlineMath>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>The number <InlineMath>{'a'}</InlineMath> is the <strong>x-coordinate</strong> (or <em>abscissa</em>) — the horizontal distance from the <InlineMath>{'y'}</InlineMath>-axis</li>
        <li>The number <InlineMath>{'b'}</InlineMath> is the <strong>y-coordinate</strong> (or <em>ordinate</em>) — the vertical distance from the <InlineMath>{'x'}</InlineMath>-axis</li>
      </ul>

      <Callout type="info">
        <p className="font-semibold mb-2">Sign Conventions</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Points to the right of the <InlineMath>{'y'}</InlineMath>-axis have positive <InlineMath>{'x'}</InlineMath>-coordinates</li>
          <li>Points to the left of the <InlineMath>{'y'}</InlineMath>-axis have negative <InlineMath>{'x'}</InlineMath>-coordinates</li>
          <li>Points above the <InlineMath>{'x'}</InlineMath>-axis have positive <InlineMath>{'y'}</InlineMath>-coordinates</li>
          <li>Points below the <InlineMath>{'x'}</InlineMath>-axis have negative <InlineMath>{'y'}</InlineMath>-coordinates</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Four Quadrants</h3>

      <p className="text-dark-200 mb-4">
        The coordinate axes divide the plane into four regions called <strong>quadrants</strong>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li><strong>First quadrant:</strong> <InlineMath>{'a > 0'}</InlineMath> and <InlineMath>{'b > 0'}</InlineMath> (upper right)</li>
        <li><strong>Second quadrant:</strong> <InlineMath>{'a < 0'}</InlineMath> and <InlineMath>{'b > 0'}</InlineMath> (upper left)</li>
        <li><strong>Third quadrant:</strong> <InlineMath>{'a < 0'}</InlineMath> and <InlineMath>{'b < 0'}</InlineMath> (lower left)</li>
        <li><strong>Fourth quadrant:</strong> <InlineMath>{'a > 0'}</InlineMath> and <InlineMath>{'b < 0'}</InlineMath> (lower right)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Ordered Pairs</h3>

      <p className="text-dark-200 mb-4">
        When we write <InlineMath>{'(a, b)'}</InlineMath> to represent a point, the
        order matters. Such a pair is called an <strong>ordered pair</strong>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Equality of Ordered Pairs</p>
        <p>
          Two ordered pairs <InlineMath>{'(a, b)'}</InlineMath> and <InlineMath>{'(c, d)'}</InlineMath>{' '}
          are equal if and only if <InlineMath>{'a = c'}</InlineMath> and <InlineMath>{'b = d'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        For example, the point <InlineMath>{'(2, 5)'}</InlineMath> is different from{' '}
        <InlineMath>{'(5, 2)'}</InlineMath>, even though the sets <InlineMath>{'\\{2, 5\\}'}</InlineMath>{' '}
        and <InlineMath>{'\\{5, 2\\}'}</InlineMath> are equal.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cartesian Equations</h3>

      <p className="text-dark-200 mb-4">
        Geometric figures can be described by equations involving coordinates.
        For example, a circle of radius <InlineMath>{'r'}</InlineMath> centered at
        the origin consists of all points <InlineMath>{'(x, y)'}</InlineMath> satisfying:
      </p>

      <MathBlock>{'x^2 + y^2 = r^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This follows from the Pythagorean theorem: if <InlineMath>{'P = (x, y)'}</InlineMath>{' '}
        is on the circle, the distance from <InlineMath>{'P'}</InlineMath> to the origin
        is <InlineMath>{'\\sqrt{x^2 + y^2} = r'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Functions: Informal Description</h2>

      <p className="text-dark-200 mb-4">
        Mathematics frequently deals with relationships between collections of objects.
        One of the most important types of relationships is called a <strong>function</strong>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Function (Informal)</p>
        <p>
          Given two sets <InlineMath>{'X'}</InlineMath> and <InlineMath>{'Y'}</InlineMath>,
          a <strong>function</strong> is a correspondence which associates with each element
          of <InlineMath>{'X'}</InlineMath> one and only one element of <InlineMath>{'Y'}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The set <InlineMath>{'X'}</InlineMath> is called the <strong>domain</strong> of the function</li>
          <li>The set of elements of <InlineMath>{'Y'}</InlineMath> that are associated with elements of <InlineMath>{'X'}</InlineMath> is called the <strong>range</strong></li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Function Notation</h3>

      <p className="text-dark-200 mb-4">
        Functions are often denoted by letters like <InlineMath>{'f'}</InlineMath>,{' '}
        <InlineMath>{'g'}</InlineMath>, <InlineMath>{'h'}</InlineMath>, or Greek letters
        like <InlineMath>{'\\varphi'}</InlineMath>. If <InlineMath>{'f'}</InlineMath> is
        a function and <InlineMath>{'x'}</InlineMath> is in its domain, we write{' '}
        <InlineMath>{'f(x)'}</InlineMath> (read "f of x") for the element in the
        range associated with <InlineMath>{'x'}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        The notation <InlineMath>{'f(x)'}</InlineMath> is called the <strong>value of f at x</strong>{' '}
        or the <strong>image of x under f</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Examples of Functions</h3>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Hooke's Law</p>
        <p>
          The force <InlineMath>{'F'}</InlineMath> needed to stretch a spring a distance{' '}
          <InlineMath>{'x'}</InlineMath> beyond its natural length is{' '}
          <InlineMath>{'F = cx'}</InlineMath>, where <InlineMath>{'c'}</InlineMath> is
          the spring constant. The force is a function of the displacement.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Volume of a Cube</p>
        <p>
          The volume <InlineMath>{'V'}</InlineMath> of a cube with edge length{' '}
          <InlineMath>{'x'}</InlineMath> is <InlineMath>{'V = x^3'}</InlineMath>.
          The volume is a function of the edge length.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: The Identity Function</p>
        <p>
          The function <InlineMath>{'f(x) = x'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>{' '}
          is called the <strong>identity function</strong>. Its graph is a straight line
          through the origin making a 45° angle with the axes.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 4: The Absolute Value Function</p>
        <p>
          The function <InlineMath>{'\\varphi(x) = |x|'}</InlineMath> assigns to each
          real number its absolute value. Its graph forms a V-shape with vertex at the origin.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Functions: Formal Definition</h2>

      <p className="text-dark-200 mb-4">
        The formal definition of a function is based on the set concept and ordered pairs:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Function (Formal Definition)</p>
        <p>
          A <strong>function</strong> <InlineMath>{'f'}</InlineMath> is a set of ordered
          pairs <InlineMath>{'(x, y)'}</InlineMath> no two of which have the same first member.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        This definition captures the key requirement: for each <InlineMath>{'x'}</InlineMath>{' '}
        in the domain, there is exactly one <InlineMath>{'y'}</InlineMath> paired with it.
        We write <InlineMath>{'y = f(x)'}</InlineMath> instead of <InlineMath>{'(x, y) \\in f'}</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Domain and Range</h3>

      <Callout type="info">
        <p className="font-semibold mb-2">Terminology</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Domain:</strong> The set of all first members <InlineMath>{'x'}</InlineMath> of pairs in <InlineMath>{'f'}</InlineMath></li>
          <li><strong>Range:</strong> The set of all second members <InlineMath>{'y'}</InlineMath> of pairs in <InlineMath>{'f'}</InlineMath></li>
          <li><strong>Real function:</strong> A function whose domain and range are sets of real numbers</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Graphs of Functions</h2>

      <p className="text-dark-200 mb-4">
        Real functions can be visualized geometrically using their <strong>graph</strong>:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Graph of a Function</p>
        <p>
          The <strong>graph</strong> of a function <InlineMath>{'f'}</InlineMath> is the
          set of all points <InlineMath>{'(x, y)'}</InlineMath> in the plane where{' '}
          <InlineMath>{'x'}</InlineMath> is in the domain and <InlineMath>{'y = f(x)'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        To draw the graph, we plot the domain on the <InlineMath>{'x'}</InlineMath>-axis,
        and above each point <InlineMath>{'x'}</InlineMath> we plot the point{' '}
        <InlineMath>{'(x, f(x))'}</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Vertical Line Test</h3>

      <p className="text-dark-200 mb-6">
        A curve in the plane is the graph of a function if and only if every vertical
        line intersects it at most once. This reflects the requirement that each{' '}
        <InlineMath>{'x'}</InlineMath> in the domain has exactly one corresponding{' '}
        <InlineMath>{'y'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Special Types of Functions</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Step Functions</h3>

      <p className="text-dark-200 mb-4">
        A <strong>step function</strong> is constant on intervals and jumps at certain points.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">The Prime-Counting Function</p>
        <p>
          For <InlineMath>{'x > 0'}</InlineMath>, let <InlineMath>{'\\pi(x)'}</InlineMath>{' '}
          be the number of primes less than or equal to <InlineMath>{'x'}</InlineMath>.
          This function is constant between primes and jumps by 1 at each prime:
        </p>
        <p className="mt-2">
          <InlineMath>{'\\pi(1) = 0'}</InlineMath>,{' '}
          <InlineMath>{'\\pi(2) = 1'}</InlineMath>,{' '}
          <InlineMath>{'\\pi(3) = 2'}</InlineMath>,{' '}
          <InlineMath>{'\\pi(5) = 3'}</InlineMath>,{' '}
          <InlineMath>{'\\pi(10) = 4'}</InlineMath>
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Factorial Function</h3>

      <p className="text-dark-200 mb-4">
        For positive integers <InlineMath>{'n'}</InlineMath>, the factorial function is:
      </p>

      <MathBlock>{'f(n) = n! = 1 \\cdot 2 \\cdot 3 \\cdots n'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The domain is the positive integers, and the values grow very rapidly:
        <InlineMath>{'1! = 1'}</InlineMath>, <InlineMath>{'5! = 120'}</InlineMath>,{' '}
        <InlineMath>{'10! = 3{,}628{,}800'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        Cartesian geometry provides a powerful tool for representing geometric objects
        algebraically using coordinates. A function is a rule that assigns to each element
        of its domain exactly one element in its range. Functions can be described by
        formulas, tables, or graphs. Real-valued functions of a real variable are central
        to calculus, and their graphs provide geometric insight into their behavior.
      </p>
    </LessonLayout>
  );
}
