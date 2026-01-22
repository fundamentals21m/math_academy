import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Golden Age</h2>

      <p className="mb-4">
        The 18th and 19th centuries saw tontines everywhere. They funded wars, built landmarks,
        and became a standard financial instrument across Europe and America.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Freemasons' Hall Tontine (1775)</h3>

      <p className="mb-4">
        One of the most famous historical tontines funded the construction of Freemasons' Hall
        in London. It illustrates perfectly how tontines worked in practice.
      </p>

      <Example title="Freemasons' Hall Tontine">
        <div className="space-y-3">
          <p><strong>Initial Investment:</strong> 100 shares at £50 each (about £3,000 in today's money)</p>
          <p><strong>Annual Dividend:</strong> £250 total, split among surviving nominees</p>
          <p><strong>End State:</strong> Last survivor receives all £250/year</p>
          <p className="mt-4 text-emerald-400">
            <strong>Notable:</strong> The youngest nominee was 9-month-old Rebecca Lara.
            She lived to age 72, collecting increasingly large payouts for decades.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">American Tontines</h3>

      <p className="mb-4">
        Alexander Hamilton proposed using tontines to fund American infrastructure in 1790.
        By the late 1800s, tontine policies represented a massive portion of U.S. life
        insurance—at their peak, two-thirds of American families held tontine policies.
      </p>

      <Callout type="info" title="Tontine Scale">
        <p>
          By 1905, American tontine assets exceeded <InlineMath>\$7</InlineMath> billion
          (equivalent to over <InlineMath>\$200</InlineMath> billion today). The tontine
          was one of the most successful financial innovations in history—before scandal
          brought it down.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Tontines Flourished</h3>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Simplicity:</strong> Easy to understand—you invest, you get paid while alive
        </li>
        <li>
          <strong>Growing Income:</strong> Payouts increased as you aged (when you needed more)
        </li>
        <li>
          <strong>No Insurance Company Risk:</strong> The pool self-adjusted to actual mortality
        </li>
        <li>
          <strong>Attractive Returns:</strong> Mortality credits boosted effective yields
        </li>
      </ul>

      <p className="text-dark-400 italic">
        In the next section, we'll see how corruption and scandal led to the downfall of tontines—and
        why they were effectively banned for over a century.
      </p>
    </LessonLayout>
  );
}
