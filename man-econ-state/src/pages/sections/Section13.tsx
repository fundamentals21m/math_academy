import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Every act of intervention substitutes the will of the government for the will
        of the individual."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter provides a systematic framework for analyzing
        <strong className="text-emerald-400"> government intervention</strong>. Rothbard
        classifies all interventions into three types and examines their direct effects
        on utility and welfare.
      </p>

      {/* Section 1: Types of Intervention Revisited */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Types of Intervention</h2>

      <p className="my-4">
        Recall from Chapter 12 of <em>Man, Economy, and State</em> that interventions
        are classified by their structure:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Autistic Intervention</h4>
          <p className="text-sm text-dark-300">
            Government restricts the individual's use of their own property or person,
            without any exchange involved.
          </p>
          <p className="text-sm text-dark-500 mt-2 italic">
            Examples: drug laws, censorship, compulsory schooling
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Binary Intervention</h4>
          <p className="text-sm text-dark-300">
            Government forces an exchange between itself and the individual—taking
            or giving.
          </p>
          <p className="text-sm text-dark-500 mt-2 italic">
            Examples: taxation, subsidies, conscription
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Triangular Intervention</h4>
          <p className="text-sm text-dark-300">
            Government dictates the terms of exchange between two private parties.
          </p>
          <p className="text-sm text-dark-500 mt-2 italic">
            Examples: price controls, licensing, tariffs
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: Direct Effects on Utility */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Direct Effects of Intervention on Utility</h2>

      <p className="my-4">
        Every intervention, by definition, prevents someone from doing what they would
        otherwise freely choose. This <strong className="text-emerald-400">reduces their
        demonstrated utility</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Utility Loss Principle</h4>
        <p className="text-dark-200 text-lg mb-4">
          If an action were beneficial to all parties, it would occur voluntarily.
          Coercion is only needed when at least one party loses.
        </p>
        <p className="text-dark-400 text-sm">
          Even when intervention "helps" one party, the coerced party loses more utility
          than they would in a voluntary exchange—otherwise, they would have agreed.
        </p>
      </div>

      <p className="my-4">
        Consider taxation: the taxpayer loses more utility from the money taken than
        the recipient gains—otherwise, the taxpayer would have donated voluntarily.
        The net effect is a reduction in total utility.
      </p>

      <Callout type="warning">
        <p>
          <strong>The knowledge problem:</strong> Beyond the utility loss, intervention
          destroys information. The market generates prices that reflect dispersed
          knowledge; intervention disrupts this signaling process.
        </p>
      </Callout>

      {/* Section 3: Autistic Intervention */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Autistic Intervention in Detail</h2>

      <p className="my-4">
        <strong className="text-emerald-400">Autistic intervention</strong> commands an
        individual regarding their own person or property, with no exchange involved.
        The government simply says: "You may not do X."
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            type: 'Prohibition of Production',
            example: 'Banning certain drugs, restricting farming',
            harm: 'Reduces output, creates black markets',
          },
          {
            type: 'Prohibition of Consumption',
            example: 'Drug use, unapproved treatments',
            harm: 'Reduces individual welfare, creates underground markets',
          },
          {
            type: 'Compulsion',
            example: 'Mandatory schooling, vaccination requirements',
            harm: 'Forces behavior against preferences',
          },
          {
            type: 'Regulation of Lifestyle',
            example: 'Seatbelt laws, building codes for own home',
            harm: 'Paternalistic overriding of individual judgment',
          },
        ].map(({ type, example, harm }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{type}</p>
              <p className="text-sm text-dark-400">Example: {example}</p>
              <p className="text-sm text-dark-500 italic">Harm: {harm}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="note">
        <p>
          <strong>The paternalism problem:</strong> Autistic intervention assumes the
          government knows better than individuals what is good for them. But individuals
          have local knowledge of their circumstances that bureaucrats lack.
        </p>
      </Callout>

      {/* Section 4: The Unseen Victims */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Unseen Victims</h2>

      <p className="my-4">
        Every intervention has beneficiaries who can be seen—the subsidized industry,
        the protected worker, the regulated profession. But the victims are often
        <strong className="text-emerald-400"> invisible</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">The Seen</h4>
          <p className="text-sm text-dark-300">
            The workers whose jobs are "saved" by tariffs. The farmers who receive
            subsidies. The licensed professionals who face less competition.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">The Unseen</h4>
          <p className="text-sm text-dark-300">
            The consumers who pay higher prices. The workers in export industries
            who lose jobs. The entrepreneurs who are never born.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        Good economic analysis requires seeing the unseen—tracing the full chain of
        consequences, including those that never happen because intervention prevented them.
      </p>

      {/* Section 5: The Welfare State */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Logic of Intervention</h2>

      <p className="my-4">
        Rothbard argues that intervention follows a relentless logic. Each intervention
        creates problems that seem to require further intervention:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Interventionist Dynamic</h4>
        <div className="flex items-center justify-between text-center text-sm">
          <div className="bg-dark-900 p-3 rounded">
            <p className="text-rose-400 font-semibold">Intervention</p>
            <p className="text-dark-400">Step 1</p>
          </div>
          <span className="text-dark-500">→</span>
          <div className="bg-dark-900 p-3 rounded">
            <p className="text-amber-400 font-semibold">Consequences</p>
            <p className="text-dark-400">Step 2</p>
          </div>
          <span className="text-dark-500">→</span>
          <div className="bg-dark-900 p-3 rounded">
            <p className="text-blue-400 font-semibold">"Crisis"</p>
            <p className="text-dark-400">Step 3</p>
          </div>
          <span className="text-dark-500">→</span>
          <div className="bg-dark-900 p-3 rounded">
            <p className="text-rose-400 font-semibold">More Intervention</p>
            <p className="text-dark-400">Step 4</p>
          </div>
        </div>
      </div>

      <p className="my-4">
        The endpoint of this logic is either complete government control (socialism)
        or a reversal toward free markets (liberalization). The "mixed economy" is
        inherently unstable.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>All intervention reduces utility</strong> for at least one party.
              If it didn't, voluntary action would achieve the same result.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Autistic intervention</strong> restricts individual choice about
              their own person and property.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Binary intervention</strong> forces exchanges with government
              (taxation, subsidies).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              The <strong>unseen victims</strong> of intervention must be traced:
              higher prices, lost opportunities, prevented innovations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>Intervention begets intervention</strong>: each measure creates
              problems that seem to require more government.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 3 examines <strong>Triangular Intervention</strong>—government control
        over private exchanges, including price controls, product regulations, and
        grants of monopolistic privilege.
      </p>
    </LessonLayout>
  );
}
