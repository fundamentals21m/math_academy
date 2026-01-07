import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Freedom Convoy fundraising blocked
const blockedFundraising = [
  { platform: 'GoFundMe', amount: 'CAD $10M (~$5.8M)', outcome: 'Only ~$1M released before government intervention' },
  { platform: 'GiveSendGo', amount: '$9.58M', outcome: 'Blocked by Canadian government' },
];

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        A byproduct of being responsible for one's own private keys is a natural desire for privacy.
        This is a thorny issue because most people are conditioned to be willing to give up their
        privacy around money.
      </p>

      {/* The CBDC Nightmare */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The CBDC Preview</h2>

      <p className="my-4">
        China is already using a CBDC (Central Bank Digital Currency), and that has given Western
        society a preview of the nightmare we will experience if we allow our governments to
        implement a <strong className="text-orange-400">totalitarian panopticon around money and spending</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Growing Threat</h4>
        <p className="text-dark-200">
          Most people using bitcoin are doing so strictly for price exposure and don't care about
          maintaining privacy, but they should. They will be looking for more and more solutions
          to regain their privacy as the central banks tighten their grip further.
        </p>
      </div>

      {/* Freedom to Transact */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Freedom to Transact as a Natural Right</h2>

      <p className="my-4">
        There are many people that believe that the freedom to transact is a natural right and
        a natural extension of freedom of speech. In the digital world, monetary transactions
        are little more than messages, not different from texts or emails.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Core Argument</h4>
        <p className="text-dark-200 text-lg">
          Like with speech, there cannot be truly free markets without the
          <strong className="text-orange-400"> total freedom to transact</strong>.
        </p>
      </div>

      {/* US Dollar Dominance and Surveillance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dollar Dominance and Financial Surveillance</h2>

      <p className="my-4">
        The US uses its status as the central issuer of the world's current reserve currency
        (the US dollar) and the world's reserve asset (US government bonds) to maintain its
        status as the dominant leader in the world.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">SWIFT Network Access</h4>
          <p className="text-sm text-dark-300">
            The US uses SWIFT payment network access to provide oversight over seemingly every
            transaction in the global financial system.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">KYC/AML Regulations</h4>
          <p className="text-sm text-dark-300">
            "Know Your Customer" and "Anti-Money Laundering" regulations claim that nobody
            transacting has any right to privacy.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Crime Argument</h4>
          <p className="text-sm text-dark-300">
            The reality is that the majority of criminal activity in the world happens in US
            dollars—a much preferred network for crime than an unencrypted public ledger.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Innovation Strangled</h4>
          <p className="text-sm text-dark-300">
            These regulations have strangled innovation and made it untenable for companies to
            operate honestly, causing many to leave the US for friendlier jurisdictions.
          </p>
        </Card>
      </CardGrid>

      {/* Honking for Freedom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Honking for Freedom: The Canadian Trucker Convoy</h2>

      <p className="my-4">
        The Canadian Freedom Convoy in January of 2022 brought this privacy issue to light when
        it comes to personal spending. Whether you agree or not with what the truckers were
        protesting, many people in Canada and the US appreciated their fight and wanted to support
        them by donating money for clothing and firewood.
      </p>

      <Callout type="warning">
        <p>
          Several methods of donating were established that raised millions of dollars for these
          truckers, which <strong>never saw their way into their hands</strong> as a result of
          direct intervention by the Trudeau government.
        </p>
      </Callout>

      {/* Blocked Fundraising Table */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fundraising Blocked</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Platform</th>
              <th className="px-4 py-3 text-left text-orange-400">Amount Raised</th>
              <th className="px-4 py-3 text-left text-orange-400">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {blockedFundraising.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200 font-medium">{item.platform}</td>
                <td className="px-4 py-3 text-dark-300">{item.amount}</td>
                <td className="px-4 py-3 text-dark-400">{item.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The GoFundMe Story */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The GoFundMe Campaign</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <blockquote className="text-dark-300 italic">
          "Donations to the 'Freedom Convoy 2022' GoFundMe page continued to roll in and reached
          CAD $10m, with about CAD $1m released to the organisers before the platform was forced
          to take action in opposition to the behaviour of participants."
        </blockquote>
        <p className="text-sm text-dark-500 mt-2">— The Independent</p>
      </div>

      {/* The GiveSendGo Story */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The GiveSendGo Campaign</h2>

      <p className="my-4">
        After GoFundMe was blocked, supporters turned to GiveSendGo, a Christian crowdfunding
        platform. The results were similar:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <ul className="text-dark-300 space-y-3">
          <li>
            <strong className="text-orange-400">$9.58 million</strong> collected through the platform
          </li>
          <li>
            <strong className="text-orange-400">44%</strong> ($4.2 million) originated in the United States
          </li>
          <li>
            <strong className="text-orange-400">109,000+</strong> donations through Friday night
          </li>
          <li>
            <strong className="text-orange-400">~62,000</strong> donations coming from the US
          </li>
        </ul>
      </div>

      <p className="my-4">
        The Canadian government worked to block protesters' access to these funds, and it is not
        clear how much of the money ultimately got through. Millions of dollars raised through
        GoFundMe were blocked after Canadian officials raised objections with the company.
      </p>

      {/* The Emergencies Act */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Emergencies Act: Freezing Bank Accounts</h2>

      <p className="my-4">
        Regardless of the will of the hundreds of thousands of individuals who wanted to send
        donations to these truckers, the Canadian government was able to intervene and block
        them at every turn. But the intervention didn't end at the blockade.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Nuclear Option</h4>
        <p className="text-dark-200 mb-4">
          The Trudeau government invoked the <strong>"Emergencies Act"</strong> in order to freeze
          the bank accounts of the individuals who donated to the protests.
        </p>
        <blockquote className="text-dark-300 italic border-l-4 border-red-600 pl-4">
          "Banks have been told they can't provide 'any financial or related services' to people
          associated with the protests, a move that will result in frozen accounts, stranded money
          and cancelled credit cards."
        </blockquote>
      </div>

      <Callout type="note">
        <p>
          Most people have likely never heard of a GoFundMe or a GiveSendGo campaign being
          hijacked and redirected by a government. This was an unprecedented display of financial
          surveillance and control over peaceful citizens.
        </p>
      </Callout>

      {/* Why This Matters for Bitcoin */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why This Matters for Bitcoin</h2>

      <p className="my-4">
        The Canadian Freedom Convoy demonstrated exactly why bitcoin users value privacy. When
        governments can:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <p className="text-dark-200">
            Block crowdfunding platforms from distributing donations
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <p className="text-dark-200">
            Freeze bank accounts of ordinary citizens for their political views
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <p className="text-dark-200">
            Cancel credit cards for donating to legal causes
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <p className="text-dark-200">
            Track and punish donors to political movements
          </p>
        </div>
      </div>

      <p className="my-4">
        ...then the need for a <strong className="text-orange-400">censorship-resistant, permissionless
        money</strong> becomes self-evident. Bitcoin, held in self-custody, could not have been blocked,
        frozen, or redirected by any government.
      </p>

      {/* The Privacy Imperative */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Privacy Imperative</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Lesson for Institutions</h4>
        <p className="text-dark-200 text-lg">
          Bitcoin users will increasingly demand privacy-preserving solutions. Institutions that
          don't understand this fundamental value proposition will find themselves offering
          products that sophisticated bitcoin users don't want.
        </p>
      </div>

      <p className="my-4">
        The current idea most individuals and institutions have about using bitcoin is solely
        for its price exposure, with very little to do with the powerful property of it as a
        digital bearer asset. This just underscores how early we all are and how little the
        majority of the world understands bitcoin.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>CBDCs threaten financial privacy</strong>—China's CBDC is a preview of
              the totalitarian panopticon Western governments could implement.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Freedom to transact is an extension of free speech</strong>—monetary
              transactions in the digital world are just messages.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>The Freedom Convoy showed government power over money</strong>—crowdfunding
              was blocked, bank accounts were frozen, and credit cards were cancelled.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>KYC/AML regulations are weaponized</strong>—while most crime happens in
              dollars, these regulations strangle innovation and honest business.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Bitcoin in self-custody is censorship-resistant</strong>—it could not
              have been blocked, frozen, or redirected by the Canadian government.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
