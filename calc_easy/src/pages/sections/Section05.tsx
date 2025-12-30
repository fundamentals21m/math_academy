import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>On Relative Growings</h2>

      <p>
        All through the calculus we are dealing with quantities that are growing, and
        with rates of growth. We classify all quantities into two classes: <strong>constants</strong>
        and <strong>variables</strong>.
      </p>

      <Callout type="info">
        <strong>Notation:</strong> Constants are denoted by letters from the beginning
        of the alphabet (a, b, c), while variables are denoted by letters from the end
        (x, y, z, u, v, w, t).
      </Callout>

      <h2>Dependent Variables</h2>

      <p>
        Usually we are dealing with more than one variable at once, and thinking of
        the way in which one variable depends on the other. For instance, we think of
        the way in which the height reached by a projectile depends on the time of
        attaining that height.
      </p>

      <p>
        Suppose we have got two such variables that depend on each other. An alteration
        in one will bring about an alteration in the other, <em>because</em> of this
        dependence. Let us call one of the variables x, and the other that depends on it y.
      </p>

      <h2>The Ratio dy/dx</h2>

      <p>
        Suppose we make x to vary—that is to say, we either alter it or imagine it to
        be altered, by adding to it a bit which we call dx. We are thus causing x to
        become x + dx. Then, because x has been altered, y will have altered also, and
        will have become y + dy.
      </p>

      <MathBlock latex="\frac{dy}{dx}" />

      <p>
        Right through the differential calculus we are hunting, hunting, hunting for a
        curious thing, a mere ratio, namely, the proportion which dy bears to dx when
        both of them are infinitely small.
      </p>

      <h2>Example 1: The Triangle</h2>

      <p>
        Let x and y be respectively the base and the height of a right-angled triangle
        of which the slope of the other side is fixed at 30°. If we suppose this
        triangle to expand and yet keep its angles the same as at first, then when the
        base grows so as to become x + dx, the height becomes y + dy.
      </p>

      <MathBlock latex="\frac{dy}{dx} = \frac{1}{1.73...} = \tan 30°" />

      <h2>Example 2: The Ladder</h2>

      <p>
        Let x represent the horizontal distance, from a wall, of the bottom end of a
        ladder, AB, of fixed length, and let y be the height it reaches up the wall.
        Now y clearly depends on x. It is easy to see that, if we pull the bottom end
        A a bit farther from the wall, the top end B will come down a little lower.
      </p>

      <p>
        Suppose the ladder was so long that when the bottom end A was 19 inches from
        the wall the top end B reached just 15 feet from the ground. Now if you were
        to pull the bottom end out 1 inch more, how much would the top end come down?
      </p>

      <MathBlock latex="\sqrt{(180)^2 + (19)^2} = 181 \text{ inches}" />

      <p>
        If the new distance is 20 inches, then:
      </p>

      <MathBlock latex="y - dy = \sqrt{(181)^2 - (20)^2} = \sqrt{32361} = 179.89 \text{ inches}" />

      <p>
        So dy is 180 - 179.89 = 0.11 inch. Making dx an increase of 1 inch has resulted
        in making dy a decrease of 0.11 inch.
      </p>

      <MathBlock latex="\frac{dy}{dx} = \frac{-0.11}{1} = -0.11" />

      <Callout type="success">
        <strong>Key Point:</strong> The ratio dy/dx can only be found when y and x are
        related to each other in some way, so that whenever x varies y does vary also.
        This relation is called a "function" in x, y, z, etc.
      </Callout>
    </LessonLayout>
  );
}
