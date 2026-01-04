import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening Quotes */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The whole of society will have become a single office and a single
        factory with equality of work and equality of pay."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — V. I. Lenin, 1917
        </footer>
      </blockquote>

      <blockquote className="border-l-4 border-rose-500 pl-6 py-2 my-6 text-lg italic text-dark-400">
        "In a country where the sole employer is the State, opposition means
        death by slow starvation. The old principle: who does not work shall
        not eat, has been replaced by a new one: who does not obey shall not eat."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — L. Trotsky, 1937
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Economic security is often represented as an indispensable condition of real
        liberty—and in a sense this is true. Independence of mind is rarely found among
        those who cannot be confident that they will make their way by their own effort.
        Yet the idea of economic security is <strong className="text-amber-400">vague and
        ambiguous</strong>. When understood in too absolute a sense, the striving for it
        becomes the gravest threat to freedom.
      </p>

      {/* Section 1: Two Kinds of Security */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Two Kinds of Security</h2>

      <p className="my-4">
        Hayek draws a crucial distinction between two fundamentally different kinds of
        security—one that can be achieved for all without destroying freedom, and one that
        can only be provided as <strong className="text-amber-400">privilege at the expense
        of others</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Limited Security</h4>
          <p className="text-sm text-dark-300">
            Security against severe physical privation—the certainty of a minimum of
            sustenance for all. This can be achieved <em>outside</em> and
            <em> supplementary to</em> the market system.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Absolute Security</h4>
          <p className="text-sm text-dark-300">
            Security of a given standard of life, of the particular income a person
            is thought to "deserve." This can only be provided by <em>controlling
            or abolishing</em> the market.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Achievable for All</h4>
          <p className="text-sm text-dark-300">
            In a society as wealthy as ours, minimum food, shelter, and clothing
            sufficient for health and the capacity to work can be assured to everyone.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Only as Privilege</h4>
          <p className="text-sm text-dark-300">
            Guaranteed income at a particular level cannot be given to all. When given
            to some, it necessarily diminishes the security of those left out.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>What the State Can Legitimately Do:</strong> Provide minimum sustenance;
          organize social insurance against sickness and accident; offer assistance to
          victims of earthquakes, floods, and other disasters. There is no incompatibility
          in principle between these measures and individual freedom.
        </p>
      </Callout>

      {/* Section 2: The Dangerous Kind of Security */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Security That Threatens Freedom</h2>

      <p className="my-4">
        The planning for security which has such an insidious effect on liberty is of a
        different kind. It is planning designed to protect individuals or groups against
        <strong className="text-amber-400"> diminutions of their income</strong> which,
        although undeserved, are inseparable from the competitive system.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Demand for "Just" Remuneration</h4>
        <p className="text-dark-300 mb-4">
          This demand for security is really another form of the demand for
          <strong> remuneration commensurate with subjective merits</strong>—not with
          the objective results of a man's efforts. But this kind of security is
          irreconcilable with freedom to choose one's employment.
        </p>
        <p className="text-dark-400 text-sm">
          In any system which relies on people's own choice for distributing labor
          among different occupations, remuneration must correspond to <em>usefulness
          to society</em>, even if this stands in no relation to subjective merit.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "We all know the tragic plight of the highly trained man whose hard-learned
        skill has suddenly lost its value because of some invention which greatly
        benefits the rest of society. That anybody should suffer such bitter
        disappointment through no fault of his own undoubtedly offends our sense
        of justice."
      </blockquote>

      <p className="my-4">
        But while this offends our sense of justice, governments everywhere have
        responded not merely by protecting people from severe hardship, but by trying
        to secure to them the <strong className="text-amber-400">continued receipt of
        their former income</strong>—sheltering them from the vicissitudes of the market.
        This is where the trouble begins.
      </p>

      {/* Section 3: Why Income Security Requires Directed Labor */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Income Security Requires Directed Labor</h2>

      <p className="my-4">
        Certainty of a given income cannot be given to all if any freedom in the choice
        of occupation is to be allowed. And if it is provided for some, it becomes a
        <strong className="text-amber-400"> privilege at the expense of others</strong>
        whose security is thereby necessarily diminished.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">How Markets Work</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Wages reflect usefulness to others</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>People can choose occupations freely</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Price signals guide labor to where it's needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Individuals judge if changes are worth the trouble</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">With Guaranteed Incomes</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>No incentive to move where labor is needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Cannot stay in job just because you like it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Direct orders must replace price signals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Authority decides where you work</span>
            </li>
          </ul>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Fundamental Problem:</strong> If those protected against undeserved
          loss are sheltered, and those benefiting from unmerited gain are prevented from
          keeping it, remuneration would soon cease to have any relation to actual
          usefulness. It would depend entirely on an authority's views about what a person
          <em> ought</em> to have done.
        </p>
      </Callout>

      {/* Section 4: The Bailiff vs. The Hangman */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bailiff vs. The Hangman</h2>

      <p className="my-4">
        In a competitive society, discipline is maintained by the risk of failure and
        the hope of reward. The worker who does poorly may be fired; the manager who
        fails faces bankruptcy. These are serious consequences—but compare them to
        what a planned economy requires.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">A Striking Contrast</h4>
        <p className="text-dark-300 mb-4">
          It has been well said that while the <strong>last resort of a competitive
          economy is the bailiff</strong>, the <strong>ultimate sanction of a planned
          economy is the hangman</strong>.
        </p>
        <p className="text-dark-400 text-sm">
          Without a "free reservoir" of labor—people who can be hired and fired—discipline
          cannot be maintained without corporal punishment, as with slave labor. A mistake
          a manager "ought" to have avoided is not his own affair—it is a crime against
          the community and must be treated as such.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "In order to do an engineering job, there ought to be surrounding the work a
        comparatively large area of unplanned economic action. There should be a place
        from which workers can be drawn, and when a worker is fired he should vanish
        from the job and from the pay-roll. In the absence of such a free reservoir
        discipline cannot be maintained without corporal punishment, as with slave labour."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — D. C. Coyle, American engineer
        </footer>
      </blockquote>

      {/* Section 5: Commercial vs. Military Society */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Commercial vs. The Military Type</h2>

      <p className="my-4">
        The conflict we face is between two irreconcilable types of social organization,
        often described as the <strong className="text-amber-400">commercial</strong> and
        the <strong className="text-amber-400">military</strong> type of society. There
        is no third possibility.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Commercial Society</h4>
          <p className="text-sm text-dark-300">
            Both the choice and the risk rest with the individual. The individual
            decides and bears the consequences.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Military Society</h4>
          <p className="text-sm text-dark-300">
            The individual is relieved of both choice and risk. Work and position
            are allotted by authority; if means are scanty, all are put on short commons.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Only Alternative</h4>
          <p className="text-sm text-dark-300">
            The military type is the only system in which full economic security can
            be conceded. But this security is inseparable from restrictions on liberty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Price</h4>
          <p className="text-sm text-dark-300">
            This is "the security of the barracks"—inseparable from the hierarchical
            order and restrictions of military life.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>Ancient Sparta and Modern Germany:</strong> If we want to see what
          society would be like organized as "a single great factory," we must look to
          ancient Sparta or contemporary Germany, which after moving for generations
          in this direction has nearly reached it.
        </p>
      </Callout>

      {/* Section 6: Security Granted Piecemeal */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Vicious Cycle of Piecemeal Security</h2>

      <p className="my-4">
        The policies followed everywhere, which hand out the privilege of security now
        to this group and now to that, are creating conditions in which the striving for
        security tends to become <strong className="text-amber-400">stronger than the
        love of freedom</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Escalating Cycle</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">1.</span>
            <span>Security is granted to one group as privilege</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">2.</span>
            <span>The insecurity of everyone else necessarily increases</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">3.</span>
            <span>The unprotected demand their own security</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">4.</span>
            <span>Each grant of security to some increases insecurity for the rest</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">5.</span>
            <span>Eventually no price, not even liberty, seems too high to pay</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "There has never been a worse and more cruel exploitation of one class by
        another than that of the weaker or less fortunate members of a group of
        producers by the well-established which has been made possible by the
        'regulation' of competition."
      </blockquote>

      {/* Section 7: The German Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The German Warning</h2>

      <p className="my-4">
        Germany had for long been a <em>Beamtenstaat</em>—a state of functionaries—in
        which not only in the civil service but in almost all spheres of life, income
        and status were assigned and guaranteed by authority.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">How Freedom is Slowly Smothered</h4>
        <p className="text-dark-300 mb-4">
          Where distinction and rank is achieved almost exclusively by becoming a
          salaried servant of the state, where to do one's assigned duty is regarded
          as more laudable than to choose one's own field of usefulness, where all
          pursuits outside the official hierarchy are regarded as inferior and
          somewhat disreputable—it is too much to expect that many will long prefer
          freedom to security.
        </p>
        <p className="text-dark-400 text-sm">
          And where the alternative to security in a dependent position is a most
          precarious position in which one is despised alike for success and failure,
          only few will resist the temptation of safety at the price of freedom.
        </p>
      </div>

      <p className="my-4">
        As security becomes privilege, a completely new set of social values arises.
        It is no longer <strong className="text-amber-400">independence but security
        </strong> which gives rank and status. The certain right to a pension matters
        more than confidence in one's ability to make good.
      </p>

      {/* Section 8: The Essential Truth */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Freedom Has a Price</h2>

      <p className="my-4">
        Some security is essential if freedom is to be preserved, because most men are
        willing to bear the risk freedom involves only so long as that risk is not too
        great. But nothing is more fatal than the present fashion of extolling security
        at the expense of freedom.
      </p>

      <Callout type="success">
        <p>
          <strong>Benjamin Franklin's Warning:</strong> "Those who would give up
          essential liberty to purchase a little temporary safety deserve neither
          liberty nor safety." This phrase applies to us in our lives as individuals
          no less than as nations.
        </p>
      </Callout>

      <p className="my-4">
        We must re-learn to face the fact that <strong className="text-amber-400">
        freedom can only be had at a price</strong>—and that as individuals we must be
        prepared to make severe material sacrifices to preserve our liberty.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              There are <strong>two kinds of security</strong>: limited security
              (minimum provision for all) that is compatible with freedom, and
              absolute security (guaranteed income) that destroys it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The state can legitimately provide <strong>basic minimums</strong> and
              social insurance without threatening freedom.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Guaranteeing people their <strong>former income</strong> regardless
              of usefulness is incompatible with freedom of occupation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The last resort of competition is the <strong>bailiff</strong>; the
              ultimate sanction of planning is the <strong>hangman</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Security granted <strong>piecemeal as privilege</strong> increases
              insecurity for everyone else, creating demand for more security.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              <strong>Freedom has a price</strong>—we must be willing to make
              material sacrifices to preserve liberty.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Why the Worst Get on Top," Hayek
          examines why totalitarian systems tend to be led not by the best but
          by the worst members of society—and why this is not accident but
          necessity.
        </p>
      </Callout>
    </LessonLayout>
  );
}
