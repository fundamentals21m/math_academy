import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Failed bitcoin institutions
const failedInstitutions = [
  { type: 'Exchanges', examples: 'Mt. Gox, FTX', failure: 'Custody failures and fraud' },
  { type: 'Yield Products', examples: 'Celsius, BlockFi, Anchor', failure: 'Unsustainable yield promises' },
  { type: 'Altcoins', examples: 'TERRA/LUNA, BSV, BCash', failure: 'Failed hard forks and ponzi schemes' },
  { type: 'Custodians', examples: 'Prime Trust', failure: 'Mismanagement of client assets' },
];

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The crux of the matter is the notion that HODL'ing is an irrational and unreasonable act,
        or at least requires a willful ability to be irrational or unreasonable."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        It might seem odd to begin a book about institutional bitcoin with a section titled
        "Bitcoin is for Individuals," but this foundation is critical to any organization that
        aspires to use bitcoin successfully. <strong className="text-orange-400">Many have tried, and few have succeeded.</strong>
      </p>

      {/* The Graveyard of Bitcoin Institutions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Graveyard of Bitcoin Institutions</h2>

      <p className="my-4">
        The very short history of bitcoin has many examples of institutions that have either
        perished or brought themselves to the brink of destruction trying to offer consumer
        products. Their failures share common themes:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold text-lg">1</span>
          <p className="text-dark-200 mt-2">
            Products that didn't have the structural integrity to withstand bitcoin's volatility
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold text-lg">2</span>
          <p className="text-dark-200 mt-2">
            Products that didn't respect the constraints of bitcoin
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold text-lg">3</span>
          <p className="text-dark-200 mt-2">
            Products that went against the natural order of human action
          </p>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Type</th>
              <th className="px-4 py-3 text-left text-orange-400">Examples</th>
              <th className="px-4 py-3 text-left text-orange-400">Failure Mode</th>
            </tr>
          </thead>
          <tbody>
            {failedInstitutions.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.type}</td>
                <td className="px-4 py-3 text-dark-300">{item.examples}</td>
                <td className="px-4 py-3 text-dark-400">{item.failure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <p>
          All of these companies' failures took down large chunks of the industry and did a lot
          to slow the worldwide adoption of bitcoin. Not all were criminal, and many didn't begin
          with intentions to scam people, but they all eventually found their way near that
          neighborhood, whether unwittingly or not.
        </p>
      </Callout>

      {/* Why HODL'ing is Irrational */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why HODL'ing is Irrational</h2>

      <p className="my-4">
        The author realized how distinct a human act it was to HODL bitcoin (Holding On for Dear Life)
        when considering whether some Artificial Intelligence could ever buy, sell, or "HODL" it.
      </p>

      <p className="my-4">
        Even amongst humans, the vast majority of bitcoin that has ever been acquired has changed
        hands several times over. If humans have a hard time hanging on to their bitcoin,
        why would AI be any different?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Core Insight</h4>
        <p className="text-dark-200 text-lg mb-4">
          HODL'ing requires a willful ability to be irrational or unreasonable.
        </p>
        <p className="text-dark-400 text-sm">
          This ability is difficult to model into software, and even more difficult to execute
          through corporate or institutional governance, where reputations are built and
          destroyed at these crucial points.
        </p>
      </div>

      {/* Human Action and Institutional Decision-Making */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Human Action and Institutional Decision-Making</h2>

      <p className="my-4">
        Human action is based on an individual's unique set of circumstances at a given moment—
        specifically, the largest source of dissatisfaction that can be removed at the lowest cost.
        This is the <strong className="text-orange-400">water/diamond paradox</strong>: a person would
        forgo all the diamonds in the world for their first glass of water.
      </p>

      <p className="my-4">
        At an institutional level, the decision to remove the largest source of dissatisfaction
        stems from the human beings who have the power, and their particular source of pain.
        Theoretically (and legally), corporate governors are bound by a fiduciary duty to deliver
        profits to shareholders. However, in practice, other incentives often prove more powerful.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Fiduciary Duty</h4>
          <p className="text-sm text-dark-300">
            Executives are legally bound to deliver profits to shareholders and enhance share value.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Job Security</h4>
          <p className="text-sm text-dark-300">
            In practice, keeping their job is often a more powerful incentive than maximizing
            shareholder value.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">External Pressure</h4>
          <p className="text-sm text-dark-300">
            Activist investors and political pressures can override pure profit motives.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Short-Term Thinking</h4>
          <p className="text-sm text-dark-300">
            Quarterly reporting cycles create pressure to show immediate results rather than
            long-term value creation.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>The diamonds are no longer an incentive</strong> when an executive sees themselves
          needing that first glass of water again. The author foresees a scenario where executives
          face similar pressure to "adopt bitcoin" at their companies over the next five years.
        </p>
      </Callout>

      {/* Case Studies: MicroStrategy and Tesla */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Case Studies: Strategy and Tesla</h2>

      <p className="my-4">
        In 2020, two companies—MicroStrategy (now Strategy) and Tesla—made the bold move to put
        bitcoin on their balance sheet. Neither was in the S&P 500. Both were extensions of
        an individual who believed in bitcoin: <strong className="text-orange-400">Michael Saylor</strong> and
        <strong className="text-orange-400"> Elon Musk</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Strategy (MicroStrategy)</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Continued accumulating bitcoin aggressively</li>
            <li>• Has a nearly $100B market capitalization</li>
            <li>• Awaits S&P 500 entry despite meeting criteria</li>
            <li>• Demonstrates long-term HODL commitment</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">Tesla</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Initially purchased bitcoin for treasury</li>
            <li>• Exited position shortly after S&P 500 inclusion</li>
            <li>• Demonstrates institutional pressure to sell</li>
            <li>• Shows limits of corporate bitcoin holding</li>
          </ul>
        </div>
      </div>

      {/* The Misguided Hope */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Misguided Hope</h2>

      <p className="my-4">
        Many bitcoiners are waiting for mega-companies like Apple or Facebook to put bitcoin
        on their balance sheet. Some think governments will get into the game. Others are
        waiting for pensions and endowments to commit asset allocation to bitcoin.
      </p>

      <p className="my-4 text-orange-400 font-semibold">
        They are all misguided.
      </p>

      <p className="my-4">
        Even bitcoin institutions like publicly traded mining companies eventually succumb
        to the pressure of selling their bitcoin. The structural incentives of institutional
        governance work against long-term bitcoin holding.
      </p>

      {/* Government Bitcoin */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Government Bitcoin: El Salvador and Bhutan</h2>

      <p className="my-4">
        El Salvador is the nation with the most aggressive strategy to publicly accumulate
        and use bitcoin to date. President Bukele has a superior understanding of both
        bitcoin and his country, and his popularity enables him to unilaterally extend
        himself as an executive.
      </p>

      <p className="my-4">
        Even with all of this in place, we don't know what El Salvador will look like when
        Bukele is no longer the president. Bhutan has also been accumulating bitcoin for
        several years under the radar.
      </p>

      <Callout type="info">
        <p>
          <strong>Countries vs. Companies:</strong> Countries can have a longer time horizon than
          companies (economists call this "low time preference"). However, most nations are unable
          to develop a long horizon and end up endlessly borrowing from the IMF and World Bank.
          Western democracies have generally short time horizons as leaders are elected every
          few years.
        </p>
      </Callout>

      {/* Pensions and the Four-Year Cycle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Pensions and the Four-Year Cycle</h2>

      <p className="my-4">
        For the same reason that companies won't hold bitcoin long term on their balance sheets,
        pensions are highly unlikely to hold bitcoin through an entire <strong className="text-orange-400">four-year
        cycle</strong> (known in bitcoin parlance as a "mining reward epoch").
      </p>

      <p className="my-4">
        A pension has even less of a connection to an individual actor than a company does.
        Its decisions are made by a board or committee that may or may not even be participants
        in the pension or employees of the company.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Pension Dilemma</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>At best:</strong> Bitcoin shows up as a "high risk, high reward" investment opportunity.
          </p>
          <p className="text-dark-200">
            <strong>The risk:</strong> As fiduciaries, pensions open themselves up to lawsuits from
            participants if they allocate assets to bitcoin and it doesn't perform well.
          </p>
          <p className="text-dark-200">
            <strong>The requirement:</strong> It will take a highly committed company whose executives
            don't fear these consequences to navigate a pension successfully through a complete
            four-year cycle.
          </p>
        </div>
      </div>

      {/* BlackRock and the Path Forward */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">BlackRock and the Path Forward</h2>

      <p className="my-4">
        The entrance of BlackRock into the bitcoin space with their IBIT spot bitcoin ETF,
        and their mutual fund complex that will utilize that ETF, is the only reason the
        author believes pension funds and other institutional trusts might end up with
        bitcoin exposure.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The BlackRock Effect</h4>
        <p className="text-dark-200 text-lg">
          Institutions might get bitcoin exposure without explicitly knowing it—which is likely
          what it will take to cause a significant uptick in participation.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Bitcoin is peer-to-peer.</strong> It is a cash system designed for
              individuals, and companies are always an individual acting on their behalf.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>HODL'ing is irrational</strong>—it requires a willful ability to resist
              selling pressure that institutions are structurally incapable of.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Institutional failures</strong> in bitcoin (FTX, Celsius, etc.) share common
              themes of not respecting bitcoin's nature.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Corporate balance sheet holdings</strong> require a dominant individual
              (like Saylor) to overcome institutional pressure to sell.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>BlackRock's ETF</strong> may be the vehicle that finally brings institutional
              bitcoin exposure—by making it indirect and almost invisible.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
