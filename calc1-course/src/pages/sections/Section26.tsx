import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <p>
        We now begin our study of <strong>differential calculus</strong>, the second main branch
        of calculus. Newton and Leibniz, quite independently of one another, were largely
        responsible for developing the ideas of integral calculus to the point where hitherto
        insurmountable problems could be solved by more or less routine methods. The successful
        accomplishments of these men were primarily due to the fact that they were able to fuse
        together integral calculus with differential calculus.
      </p>

      <h2>The Origin of the Derivative</h2>
      <p>
        The central idea of differential calculus is the notion of <strong>derivative</strong>.
        Like the integral, the derivative originated from a problem in geometry—the problem of
        finding the <strong>tangent line</strong> at a point of a curve. Unlike the integral,
        however, the derivative evolved very late in the history of mathematics. The concept
        was not formulated until early in the 17th century when the French mathematician
        <strong> Pierre de Fermat</strong> attempted to determine the maxima and minima of
        certain special functions.
      </p>

      <h2>Fermat's Key Observation</h2>
      <p>
        Fermat's idea, basically very simple, can be understood by considering a curve that has
        a definite direction (describable by a tangent line) at each of its points. Fermat
        noticed that at certain points where the curve has a <strong>maximum or minimum</strong>,
        the tangent line must be <strong>horizontal</strong>.
      </p>

      <Callout type="info" title="The Connection">
        <p>
          Thus the problem of locating extreme values (maxima and minima) is seen to depend on
          the solution of another problem: that of locating the horizontal tangents. This raises
          the more general question of determining the direction of the tangent line at an
          <em>arbitrary</em> point of the curve.
        </p>
        <p>
          It was the attempt to solve this general problem that led Fermat to discover some of
          the rudimentary ideas underlying the notion of derivative.
        </p>
      </Callout>

      <h2>The Surprising Connection</h2>
      <p>
        At first sight there seems to be no connection whatever between:
      </p>
      <ul>
        <li>The problem of finding the <strong>area</strong> of a region lying under a curve</li>
        <li>The problem of finding the <strong>tangent line</strong> at a point of a curve</li>
      </ul>
      <p>
        The first person to realize that these two seemingly remote ideas are, in fact, rather
        intimately related appears to have been Newton's teacher, <strong>Isaac Barrow</strong>
        (1630-1677). However, Newton and Leibniz were the first to understand the real importance
        of this relation and they exploited it to the fullest, thus inaugurating an unprecedented
        era in the development of mathematics.
      </p>

      <Callout type="info" title="Beyond Tangent Lines">
        <p>
          Although the derivative was originally formulated to study the problem of tangents,
          it was soon found that it also provides a way to calculate <strong>velocity</strong>
          and, more generally, the <strong>rate of change</strong> of a function.
        </p>
      </Callout>

      <h2>A Problem Involving Velocity</h2>
      <p>
        To motivate the definition of derivative, let us consider a concrete problem involving
        the calculation of velocity.
      </p>

      <Callout type="example" title="Projectile Motion">
        <p>
          Suppose a projectile is fired straight up from the ground with initial velocity of
          144 feet per second. Neglect friction, and assume the projectile is influenced only
          by gravity so that it moves up and back along a straight line.
        </p>
        <p>
          Let <InlineMath>{`f(t)`}</InlineMath> denote the height in feet that the projectile attains
          <InlineMath>{`t`}</InlineMath> seconds after firing. If the force of gravity were not acting
          on it, the projectile would continue to move upward with a constant velocity, traveling
          a distance of 144 feet every second, and at time <InlineMath>{`t`}</InlineMath> we would have
          <InlineMath>{`f(t) = 144t`}</InlineMath>.
        </p>
        <p>
          In actual practice, gravity causes the projectile to slow down until its velocity
          decreases to zero and then it drops back to earth. Physical experiments suggest that
          as long as the projectile is aloft, its height <InlineMath>{`f(t)`}</InlineMath> is given by:
        </p>
        <MathBlock>{`f(t) = 144t - 16t^2.`}</MathBlock>
        <p>
          The term <InlineMath>{`-16t^2`}</InlineMath> is due to the influence of gravity. Note that
          <InlineMath>{`f(t) = 0`}</InlineMath> when <InlineMath>{`t = 0`}</InlineMath> and when
          <InlineMath>{`t = 9`}</InlineMath>. This means the projectile returns to earth after 9 seconds,
          and formula is valid only for <InlineMath>{`0 \\leq t \\leq 9`}</InlineMath>.
        </p>
      </Callout>

      <h2>Average Velocity</h2>
      <p>
        The problem we wish to consider is: <em>To determine the velocity of the projectile at
        each instant of its motion.</em> Before we can understand this problem, we must decide
        what is meant by "velocity at each instant."
      </p>
      <p>
        We introduce first the notion of <strong>average velocity</strong> during a time interval,
        say from time <InlineMath>{`t`}</InlineMath> to time <InlineMath>{`t + h`}</InlineMath>:
      </p>

      <Callout type="definition" title="Average Velocity">
        <MathBlock>{`\\text{Average velocity} = \\frac{\\text{change in distance during time interval}}{\\text{length of time interval}} = \\frac{f(t + h) - f(t)}{h}.`}</MathBlock>
        <p>
          This quotient, called a <strong>difference quotient</strong>, is a number which may
          be calculated whenever both <InlineMath>{`t`}</InlineMath> and <InlineMath>{`t + h`}</InlineMath> are
          in the interval <InlineMath>{`[0, 9]`}</InlineMath>. The number <InlineMath>{`h`}</InlineMath> may be
          positive or negative, but not zero.
        </p>
      </Callout>

      <h2>From Average to Instantaneous</h2>
      <p>
        Let us keep <InlineMath>{`t`}</InlineMath> fixed and see what happens to the difference quotient
        as we take values of <InlineMath>{`h`}</InlineMath> with smaller and smaller absolute value.
      </p>

      <Callout type="example" title="Calculation at t = 2">
        <p>
          Consider the instant <InlineMath>{`t = 2`}</InlineMath>. The height after 2 seconds is:
        </p>
        <MathBlock>{`f(2) = 288 - 64 = 224 \\text{ feet}.`}</MathBlock>
        <p>
          At time <InlineMath>{`t = 2 + h`}</InlineMath>, the height is:
        </p>
        <MathBlock>{`f(2 + h) = 144(2 + h) - 16(2 + h)^2 = 224 + 80h - 16h^2.`}</MathBlock>
        <p>
          Therefore the average velocity in the interval from <InlineMath>{`t = 2`}</InlineMath> to
          <InlineMath>{`t = 2 + h`}</InlineMath> is:
        </p>
        <MathBlock>{`\\frac{f(2 + h) - f(2)}{h} = \\frac{80h - 16h^2}{h} = 80 - 16h.`}</MathBlock>
      </Callout>

      <p>
        As we take values of <InlineMath>{`h`}</InlineMath> with smaller and smaller absolute value,
        this average velocity gets closer and closer to <InlineMath>{`80`}</InlineMath>:
      </p>
      <ul>
        <li>When <InlineMath>{`h = 0.1`}</InlineMath>, average velocity = 78.4</li>
        <li>When <InlineMath>{`h = 0.001`}</InlineMath>, average velocity = 79.984</li>
        <li>When <InlineMath>{`h = 0.00001`}</InlineMath>, average velocity = 79.99984</li>
        <li>When <InlineMath>{`h = -0.00001`}</InlineMath>, average velocity = 80.00016</li>
      </ul>
      <p>
        The important thing is that we can make the average velocity as close to 80 as we please
        by taking <InlineMath>{`|h|`}</InlineMath> sufficiently small. The average velocity approaches
        80 as a limit when <InlineMath>{`h`}</InlineMath> approaches zero. It seems natural to call this
        limiting value the <strong>instantaneous velocity</strong> at time <InlineMath>{`t = 2`}</InlineMath>.
      </p>

      <h2>The General Velocity Formula</h2>
      <p>
        The same kind of calculation can be carried out for any other instant. The average
        velocity for an arbitrary time interval from <InlineMath>{`t`}</InlineMath> to
        <InlineMath>{`t + h`}</InlineMath> is:
      </p>

      <MathBlock>{`\\frac{f(t + h) - f(t)}{h} = \\frac{[144(t + h) - 16(t + h)^2] - [144t - 16t^2]}{h} = 144 - 32t - 16h.`}</MathBlock>

      <p>
        When <InlineMath>{`h`}</InlineMath> approaches zero, the expression on the right approaches
        <InlineMath>{`144 - 32t`}</InlineMath> as a limit, and this limit is defined to be the
        <strong>instantaneous velocity</strong> at time <InlineMath>{`t`}</InlineMath>. If we denote
        the instantaneous velocity by <InlineMath>{`v(t)`}</InlineMath>, we may write:
      </p>

      <MathBlock>{`v(t) = 144 - 32t.`}</MathBlock>

      <h2>Position Function vs. Velocity Function</h2>
      <p>
        The formula <InlineMath>{`f(t) = 144t - 16t^2`}</InlineMath> defines a function <InlineMath>{`f`}</InlineMath>
        which tells us <em>how high</em> the projectile is at each instant—the <strong>position
        function</strong>. Its domain is the closed interval <InlineMath>{`[0, 9]`}</InlineMath>.
      </p>
      <p>
        The formula <InlineMath>{`v(t) = 144 - 32t`}</InlineMath> defines a new function <InlineMath>{`v`}</InlineMath>
        which tells us <em>how fast</em> the projectile is moving at each instant—the
        <strong>velocity function</strong>.
      </p>

      <Callout type="info" title="Interpreting the Velocity">
        <p>
          As <InlineMath>{`t`}</InlineMath> increases from 0 to 9:
        </p>
        <ul>
          <li><InlineMath>{`v(t)`}</InlineMath> decreases steadily from <InlineMath>{`v(0) = 144`}</InlineMath> to <InlineMath>{`v(9) = -144`}</InlineMath></li>
          <li>When <InlineMath>{`v(t) = 0`}</InlineMath>, solving <InlineMath>{`144 = 32t`}</InlineMath> gives <InlineMath>{`t = 9/2 = 4.5`}</InlineMath> seconds</li>
          <li>At <InlineMath>{`t = 4.5`}</InlineMath>, the projectile is momentarily at rest at height <InlineMath>{`f(4.5) = 324`}</InlineMath> feet</li>
          <li>When <InlineMath>{`t > 4.5`}</InlineMath>, the velocity is negative, indicating the height is decreasing</li>
        </ul>
      </Callout>

      <h2>The Limit Process</h2>
      <p>
        The limit process by which <InlineMath>{`v(t)`}</InlineMath> is obtained from the difference
        quotient is written symbolically as:
      </p>

      <Callout type="definition" title="Instantaneous Velocity">
        <MathBlock>{`v(t) = \\lim_{h \\to 0} \\frac{f(t + h) - f(t)}{h}.`}</MathBlock>
        <p>
          This equation is used to define velocity not only for this particular example but,
          more generally, for any particle moving along a straight line, provided the position
          function <InlineMath>{`f`}</InlineMath> is such that the difference quotient tends to a
          definite limit as <InlineMath>{`h`}</InlineMath> approaches zero.
        </p>
      </Callout>

      <h2>Preview: The Derivative</h2>
      <p>
        The velocity problem we just solved contains all the essential features of the
        <strong>derivative concept</strong>. In the next section, we will see that this same
        limit process applies to any function, not just position functions:
      </p>

      <MathBlock>{`f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}.`}</MathBlock>

      <p>
        The velocity <InlineMath>{`v(t)`}</InlineMath> is simply the derivative of the position function
        <InlineMath>{`f(t)`}</InlineMath>. This is often described by saying that <strong>velocity is
        the rate of change of position with respect to time</strong>.
      </p>

      <h2>Summary</h2>
      <p>
        The derivative arose from two seemingly unrelated problems:
      </p>
      <ul>
        <li>
          <strong>Geometric:</strong> Finding the tangent line to a curve at a point
        </li>
        <li>
          <strong>Physical:</strong> Finding the instantaneous velocity of a moving object
        </li>
      </ul>
      <p>
        Both problems are solved by the same mathematical process: forming a difference quotient
        and taking its limit as the interval shrinks to zero. Newton and Leibniz recognized that
        this derivative operation is intimately connected to integration, a discovery that
        unified calculus and made it an extraordinarily powerful tool for solving problems in
        mathematics, physics, and engineering.
      </p>
    </LessonLayout>
  );
}
