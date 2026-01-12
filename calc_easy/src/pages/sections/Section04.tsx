import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>On Different Degrees of Smallness</h2>

      <p>
        We shall find that in our processes of calculation we have to deal with small
        quantities of various degrees of smallness. We shall also learn under what
        circumstances we may consider small quantities to be so minute that we may
        omit them from consideration.
      </p>

      <Callout type="info">
        <strong>The Key Insight:</strong> Everything depends upon relative minuteness.
        A small quantity can be neglected if it is small <em>relative to</em> another
        small quantity we're considering.
      </Callout>

      <h2>Familiar Examples of Smallness</h2>

      <p>
        There are 60 minutes in the hour, 24 hours in the day, 7 days in the week.
        Therefore there are 1440 minutes in the day and 10,080 minutes in the week.
      </p>

      <p>
        Obviously 1 minute is a very small quantity of time compared with a whole week.
        Indeed, our forefathers called it "one minute" meaning a minute fraction—namely
        one sixtieth—of an hour. When they needed still smaller subdivisions of time,
        they divided each minute into 60 still smaller parts, which they called "second
        minutes" (i.e., small quantities of the second order of minuteness).
      </p>

      <h2>Orders of Smallness</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Relative Sizes</h3>
        <ul className="space-y-2 text-dark-300">
          <li>A penny compared with $100 is 1/100 part — <strong>small</strong></li>
          <li>A penny compared with $10,000 is 1/1,000,000 part — <strong>very small</strong></li>
          <li>1/60 of 1/60 = 1/3600 — <strong>second order of smallness</strong></li>
          <li>1% of 1% = 1/10,000 — <strong>third order of smallness</strong></li>
        </ul>
      </div>

      <h2>The Negligible Second Order</h2>

      <p>
        Then we see that the smaller a small quantity itself is, the more negligible
        does the corresponding small quantity of the second order become. Hence we
        know that <em>in all cases we are justified in neglecting the small quantities
        of the second—or third (or higher)—orders</em>, if only we take the small
        quantity of the first order small enough in itself.
      </p>

      <h2>A Geometric Example</h2>

      <p>Consider the function f(x) = x². If x grows by a small amount dx:</p>

      <MathBlock math="(x + dx)^2 = x^2 + 2x \cdot dx + (dx)^2" />

      <p>
        The second term is not negligible because it is a first-order quantity (dx
        multiplied by x). But the third term (dx)² is of the second order of smallness,
        being a bit of a bit of x². It is clearly less important than the second.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <p className="text-dark-300 mb-2">
          If dx is 1/60 of x, then the second term would be 2/60 of x², whereas the
          third term would be only 1/3600 of x². This last term is clearly less
          important than the second.
        </p>
        <p className="text-dark-400 text-sm">
          If we go further and take dx to mean only 1/1000 of x, then the third term
          will be only 1/1,000,000 of x².
        </p>
      </div>

      <h2>The Millionaire's Analogy</h2>

      <p>
        Suppose a millionaire were to say to his secretary: "Next week I will give you
        a small fraction of any money that comes in to me." Suppose that the secretary
        were to say to his boy: "I will give you a small fraction of what I get."
      </p>

      <p>
        Suppose the fraction in each case to be 1/100 part. Now if Mr. Millionaire
        received during the next week $1,000, the secretary would receive $10 and the
        boy 1 dime. Ten dollars would be a small quantity compared with $1,000; but a
        dime is a small small quantity indeed!
      </p>

      <Callout type="success">
        <strong>The Rule:</strong> In calculus we write things such as dx, and du, and
        dy, and these things called "differentials" are small bits. If dx be a small
        bit of x, it does not follow that such quantities as x·dx, or x²dx are negligible.
        But dx×dx would be negligible, being a small quantity of the second order.
      </Callout>
    </LessonLayout>
  );
}
