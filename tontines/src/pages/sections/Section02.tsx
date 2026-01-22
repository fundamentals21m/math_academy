import { LessonLayout } from '@/components/layout';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Scandal and Downfall</h2>

      <p className="mb-4">
        By the late 1800s, insurance companies had transformed tontines from simple pooling
        arrangements into complex "tontine insurance policies." The results were disastrous.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Corruption</h3>

      <p className="mb-4">
        Companies like Equitable Life accumulated massive tontine assets. Executives used
        these funds as personal slush funds—lavish salaries, risky speculation, bribery
        of legislators. Promised payouts rarely materialized as advertised.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Perverse Incentive</h3>

      <Callout type="danger" title="The Fundamental Problem">
        <p>
          In a tontine, fewer survivors means more money for each remaining member.
          This created a dark incentive: benefit from others' deaths. Real and imagined
          murder plots became literary staples—Agatha Christie and Robert Louis Stevenson
          both wrote tontine murder mysteries.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Armstrong Investigation (1905)</h3>

      <p className="mb-4">
        New York State Senator William Armstrong led an investigation that exposed widespread
        corruption in tontine insurance. The scandal led to:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Effective ban on tontines in most U.S. jurisdictions</li>
        <li>Major reforms of the insurance industry</li>
        <li>Public distrust of mortality-pooling schemes</li>
      </ul>

      <p className="mb-4">
        Tontines vanished from mainstream finance for over a century. The word itself
        became associated with fraud and murder plots.
      </p>

      <Callout type="note" title="Not the Concept's Fault">
        <p>
          The scandal was about <em>corporate corruption</em>, not the tontine mechanism itself.
          Modern tontine proposals address these issues through transparency, no
          last-survivor jackpots, and proper regulation.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        Next, we'll see how academic research and the retirement crisis are driving
        a modern revival of tontine concepts.
      </p>
    </LessonLayout>
  );
}
