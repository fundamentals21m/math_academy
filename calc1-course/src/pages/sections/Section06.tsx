import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          one horizontal (the <MathInline>{'x'}</MathInline>-axis) and one vertical
          (the <MathInline>{'y'}</MathInline>-axis). Their point of intersection,
          denoted <MathInline>{'O'}</MathInline>, is called the <strong>origin</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Each point in the plane is assigned a pair of numbers called its <strong>coordinates</strong>.
        For a point <MathInline>{'P'}</MathInline> with coordinates <MathInline>{'(a, b)'}</MathInline>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>The number <MathInline>{'a'}</MathInline> is the <strong>x-coordinate</strong> (or <em>abscissa</em>) — the horizontal distance from the <MathInline>{'y'}</MathInline>-axis</li>
        <li>The number <MathInline>{'b'}</MathInline> is the <strong>y-coordinate</strong> (or <em>ordinate</em>) — the vertical distance from the <MathInline>{'x'}</MathInline>-axis</li>
      </ul>

      <Callout type="info">
        <p className="font-semibold mb-2">Sign Conventions</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Points to the right of the <MathInline>{'y'}</MathInline>-axis have positive <MathInline>{'x'}</MathInline>-coordinates</li>
          <li>Points to the left of the <MathInline>{'y'}</MathInline>-axis have negative <MathInline>{'x'}</MathInline>-coordinates</li>
          <li>Points above the <MathInline>{'x'}</MathInline>-axis have positive <MathInline>{'y'}</MathInline>-coordinates</li>
          <li>Points below the <MathInline>{'x'}</MathInline>-axis have negative <MathInline>{'y'}</MathInline>-coordinates</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Four Quadrants</h3>

      <p className="text-dark-200 mb-4">
        The coordinate axes divide the plane into four regions called <strong>quadrants</strong>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li><strong>First quadrant:</strong> <MathInline>{'a > 0'}</MathInline> and <MathInline>{'b > 0'}</MathInline> (upper right)</li>
        <li><strong>Second quadrant:</strong> <MathInline>{'a < 0'}</MathInline> and <MathInline>{'b > 0'}</MathInline> (upper left)</li>
        <li><strong>Third quadrant:</strong> <MathInline>{'a < 0'}</MathInline> and <MathInline>{'b < 0'}</MathInline> (lower left)</li>
        <li><strong>Fourth quadrant:</strong> <MathInline>{'a > 0'}</MathInline> and <MathInline>{'b < 0'}</MathInline> (lower right)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Ordered Pairs</h3>

      <p className="text-dark-200 mb-4">
        When we write <MathInline>{'(a, b)'}</MathInline> to represent a point, the
        order matters. Such a pair is called an <strong>ordered pair</strong>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Equality of Ordered Pairs</p>
        <p>
          Two ordered pairs <MathInline>{'(a, b)'}</MathInline> and <MathInline>{'(c, d)'}</MathInline>{' '}
          are equal if and only if <MathInline>{'a = c'}</MathInline> and <MathInline>{'b = d'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        For example, the point <MathInline>{'(2, 5)'}</MathInline> is different from{' '}
        <MathInline>{'(5, 2)'}</MathInline>, even though the sets <MathInline>{'\\{2, 5\\}'}</MathInline>{' '}
        and <MathInline>{'\\{5, 2\\}'}</MathInline> are equal.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cartesian Equations</h3>

      <p className="text-dark-200 mb-4">
        Geometric figures can be described by equations involving coordinates.
        For example, a circle of radius <MathInline>{'r'}</MathInline> centered at
        the origin consists of all points <MathInline>{'(x, y)'}</MathInline> satisfying:
      </p>

      <MathBlock>{'x^2 + y^2 = r^2'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This follows from the Pythagorean theorem: if <MathInline>{'P = (x, y)'}</MathInline>{' '}
        is on the circle, the distance from <MathInline>{'P'}</MathInline> to the origin
        is <MathInline>{'\\sqrt{x^2 + y^2} = r'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Functions: Informal Description</h2>

      <p className="text-dark-200 mb-4">
        Mathematics frequently deals with relationships between collections of objects.
        One of the most important types of relationships is called a <strong>function</strong>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Function (Informal)</p>
        <p>
          Given two sets <MathInline>{'X'}</MathInline> and <MathInline>{'Y'}</MathInline>,
          a <strong>function</strong> is a correspondence which associates with each element
          of <MathInline>{'X'}</MathInline> one and only one element of <MathInline>{'Y'}</MathInline>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The set <MathInline>{'X'}</MathInline> is called the <strong>domain</strong> of the function</li>
          <li>The set of elements of <MathInline>{'Y'}</MathInline> that are associated with elements of <MathInline>{'X'}</MathInline> is called the <strong>range</strong></li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Function Notation</h3>

      <p className="text-dark-200 mb-4">
        Functions are often denoted by letters like <MathInline>{'f'}</MathInline>,{' '}
        <MathInline>{'g'}</MathInline>, <MathInline>{'h'}</MathInline>, or Greek letters
        like <MathInline>{'\\varphi'}</MathInline>. If <MathInline>{'f'}</MathInline> is
        a function and <MathInline>{'x'}</MathInline> is in its domain, we write{' '}
        <MathInline>{'f(x)'}</MathInline> (read "f of x") for the element in the
        range associated with <MathInline>{'x'}</MathInline>.
      </p>

      <p className="text-dark-200 mb-6">
        The notation <MathInline>{'f(x)'}</MathInline> is called the <strong>value of f at x</strong>{' '}
        or the <strong>image of x under f</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Examples of Functions</h3>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 1: Hooke's Law</p>
        <p>
          The force <MathInline>{'F'}</MathInline> needed to stretch a spring a distance{' '}
          <MathInline>{'x'}</MathInline> beyond its natural length is{' '}
          <MathInline>{'F = cx'}</MathInline>, where <MathInline>{'c'}</MathInline> is
          the spring constant. The force is a function of the displacement.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 2: Volume of a Cube</p>
        <p>
          The volume <MathInline>{'V'}</MathInline> of a cube with edge length{' '}
          <MathInline>{'x'}</MathInline> is <MathInline>{'V = x^3'}</MathInline>.
          The volume is a function of the edge length.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 3: The Identity Function</p>
        <p>
          The function <MathInline>{'f(x) = x'}</MathInline> for all real <MathInline>{'x'}</MathInline>{' '}
          is called the <strong>identity function</strong>. Its graph is a straight line
          through the origin making a 45° angle with the axes.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example 4: The Absolute Value Function</p>
        <p>
          The function <MathInline>{'\\varphi(x) = |x|'}</MathInline> assigns to each
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
          A <strong>function</strong> <MathInline>{'f'}</MathInline> is a set of ordered
          pairs <MathInline>{'(x, y)'}</MathInline> no two of which have the same first member.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        This definition captures the key requirement: for each <MathInline>{'x'}</MathInline>{' '}
        in the domain, there is exactly one <MathInline>{'y'}</MathInline> paired with it.
        We write <MathInline>{'y = f(x)'}</MathInline> instead of <MathInline>{'(x, y) \\in f'}</MathInline>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Domain and Range</h3>

      <Callout type="info">
        <p className="font-semibold mb-2">Terminology</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Domain:</strong> The set of all first members <MathInline>{'x'}</MathInline> of pairs in <MathInline>{'f'}</MathInline></li>
          <li><strong>Range:</strong> The set of all second members <MathInline>{'y'}</MathInline> of pairs in <MathInline>{'f'}</MathInline></li>
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
          The <strong>graph</strong> of a function <MathInline>{'f'}</MathInline> is the
          set of all points <MathInline>{'(x, y)'}</MathInline> in the plane where{' '}
          <MathInline>{'x'}</MathInline> is in the domain and <MathInline>{'y = f(x)'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        To draw the graph, we plot the domain on the <MathInline>{'x'}</MathInline>-axis,
        and above each point <MathInline>{'x'}</MathInline> we plot the point{' '}
        <MathInline>{'(x, f(x))'}</MathInline>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Vertical Line Test</h3>

      <p className="text-dark-200 mb-6">
        A curve in the plane is the graph of a function if and only if every vertical
        line intersects it at most once. This reflects the requirement that each{' '}
        <MathInline>{'x'}</MathInline> in the domain has exactly one corresponding{' '}
        <MathInline>{'y'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Special Types of Functions</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Step Functions</h3>

      <p className="text-dark-200 mb-4">
        A <strong>step function</strong> is constant on intervals and jumps at certain points.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">The Prime-Counting Function</p>
        <p>
          For <MathInline>{'x > 0'}</MathInline>, let <MathInline>{'\\pi(x)'}</MathInline>{' '}
          be the number of primes less than or equal to <MathInline>{'x'}</MathInline>.
          This function is constant between primes and jumps by 1 at each prime:
        </p>
        <p className="mt-2">
          <MathInline>{'\\pi(1) = 0'}</MathInline>,{' '}
          <MathInline>{'\\pi(2) = 1'}</MathInline>,{' '}
          <MathInline>{'\\pi(3) = 2'}</MathInline>,{' '}
          <MathInline>{'\\pi(5) = 3'}</MathInline>,{' '}
          <MathInline>{'\\pi(10) = 4'}</MathInline>
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Factorial Function</h3>

      <p className="text-dark-200 mb-4">
        For positive integers <MathInline>{'n'}</MathInline>, the factorial function is:
      </p>

      <MathBlock>{'f(n) = n! = 1 \\cdot 2 \\cdot 3 \\cdots n'}</MathBlock>

      <p className="text-dark-200 mb-6">
        The domain is the positive integers, and the values grow very rapidly:
        <MathInline>{'1! = 1'}</MathInline>, <MathInline>{'5! = 120'}</MathInline>,{' '}
        <MathInline>{'10! = 3{,}628{,}800'}</MathInline>.
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
