import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Regulatory Obstacles</h2>

      <p className="mb-4">
        Perhaps the greatest obstacle to modern tontines isn't mathematical or economic—it's
        legal. Tontines fell out of favor a century ago, and regulatory frameworks haven't
        caught up with their potential renaissance.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Classification Problem</h3>

      <p className="mb-4">
        Regulators struggle to classify tontines. They don't fit neatly into existing
        categories, and each classification brings its own burdens.
      </p>

      <Definition title="Security Classification">
        <p>
          If a tontine is deemed a "security" (an investment contract), it falls under
          SEC jurisdiction in the United States.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Requirements:</strong> SEC registration, prospectus filing, ongoing disclosure</li>
          <li><strong>Cost:</strong> $500,000+ for initial registration, ongoing compliance</li>
          <li><strong>Exemptions:</strong> Limited to accredited investors only</li>
        </ul>
        <p className="mt-2 text-amber-400">
          The SEC's Howey test asks: Is there an investment of money in a common enterprise
          with expectation of profits from others' efforts? Tontines may qualify.
        </p>
      </Definition>

      <Definition title="Insurance Classification">
        <p>
          If a tontine is deemed "insurance," it requires state insurance commissioner approval.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Requirements:</strong> State license in each jurisdiction, capital reserves</li>
          <li><strong>Capital requirement:</strong> Typically $10M+ in surplus</li>
          <li><strong>Problem:</strong> A pure tontine doesn't guarantee payments like insurance does</li>
        </ul>
        <p className="mt-2 text-amber-400">
          Insurance regulators may reject tontines precisely because they <em>don't</em>
          guarantee payments—the opposite of what insurance does.
        </p>
      </Definition>

      <Definition title="Investment Company Classification">
        <p>
          If a tontine is deemed an "investment company" (like a mutual fund), additional
          SEC rules apply.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Requirements:</strong> Investment Company Act of 1940 compliance</li>
          <li><strong>Restrictions:</strong> Leverage limits, diversification requirements</li>
          <li><strong>Oversight:</strong> Board of directors, investment advisers</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Bans</h3>

      <p className="mb-4">
        Many states passed laws in the early 1900s explicitly prohibiting tontines or
        "investment based on survivorship." These laws remain on the books.
      </p>

      <Example title="Legacy Prohibitions">
        <div className="space-y-3">
          <p>Examples of historical restrictions:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>New York (1906):</strong> Armstrong Committee investigation led to
              prohibition of deferred dividend policies (tontine-style insurance)
            </li>
            <li>
              <strong>Multiple states:</strong> Laws against "wagering on lives" or
              "investments contingent on mortality"
            </li>
            <li>
              <strong>Insurable interest doctrine:</strong> Requires you have a legitimate
              interest in the life being "insured"
            </li>
          </ul>
          <p className="mt-3 text-dark-400">
            These laws targeted 19th-century abuses but may inadvertently prohibit
            modern, transparent tontine structures.
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fiduciary Concerns</h3>

      <p className="mb-4">
        Who manages the tontine, and what duties do they owe to participants?
      </p>

      <Callout type="warning" title="Governance Questions">
        <ul className="space-y-2">
          <li>
            <strong>Trustees:</strong> Who holds the assets? What standards must they meet?
          </li>
          <li>
            <strong>Liability:</strong> Who is responsible if investments lose money?
          </li>
          <li>
            <strong>Death verification:</strong> How are deaths confirmed? What prevents fraud?
          </li>
          <li>
            <strong>Conflicts of interest:</strong> Does the manager benefit from member deaths?
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">International Solutions</h3>

      <p className="mb-4">
        Several jurisdictions have found pathways to allow modern tontine-like products:
      </p>

      <Example title="Regulatory Pathways">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Jurisdiction</th>
              <th className="pb-2">Approach</th>
              <th className="pb-2">Product</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Canada</td>
              <td className="py-2">Pension regulation</td>
              <td className="py-2">Variable Payment Life Annuity (VPLA)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">UK</td>
              <td className="py-2">Trust structure</td>
              <td className="py-2">Collective defined contribution (CDC)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Australia</td>
              <td className="py-2">Superannuation rules</td>
              <td className="py-2">Group self-annuitization (GSA)</td>
            </tr>
            <tr>
              <td className="py-2">Netherlands</td>
              <td className="py-2">Cooperative law</td>
              <td className="py-2">Pension funds with variable benefits</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Definition title="Canada's VPLA">
        <p>
          The Variable Payment Life Annuity, introduced in 2020, allows pooled retirement
          plans to offer tontine-like income without insurance guarantees.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Regulated under pension law, not insurance law</li>
          <li>Payments adjust annually based on mortality and investment experience</li>
          <li>No minimum capital requirements beyond plan assets</li>
          <li>Available through employer pension plans</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Path Forward for the U.S.</h3>

      <p className="mb-4">
        What would it take to enable tontines in the United States?
      </p>

      <Callout type="info" title="Potential Solutions">
        <ul className="space-y-2">
          <li>
            <strong>Legislative reform:</strong> Congress could create a new category
            for "mortality-pooled retirement products"
          </li>
          <li>
            <strong>DOL guidance:</strong> Department of Labor could clarify that tontines
            can be offered within <InlineMath>401(k)</InlineMath> plans
          </li>
          <li>
            <strong>State innovation:</strong> A "sandbox" state could permit pilot programs
          </li>
          <li>
            <strong>SEC no-action letter:</strong> Staff guidance could clarify registration
            requirements
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Academic Consensus</h3>

      <p className="mb-4">
        Researchers increasingly argue that regulatory barriers harm retirees by denying
        them access to efficient longevity pooling.
      </p>

      <Example title="Expert Recommendations">
        <div className="space-y-3">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Milevsky (2015):</strong> "Tontines should be permitted alongside
              traditional annuities as a retirement income option"
            </li>
            <li>
              <strong>Forman & Sabin (2015):</strong> "Legal barriers to tontines should
              be reexamined in light of the retirement income crisis"
            </li>
            <li>
              <strong>Donnelly (2015):</strong> "Group self-annuitization provides fair
              value without insurance company guarantees"
            </li>
          </ul>
        </div>
      </Example>

      <p className="text-dark-400 italic">
        Even if regulatory barriers fall, tontines face another challenge: what happens
        when the pool shrinks to just a handful of survivors? That's the "last mile problem."
      </p>
    </LessonLayout>
  );
}
