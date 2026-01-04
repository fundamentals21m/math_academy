import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The man who speaks to you of sacrifice, speaks of slaves and masters. And intends
        to be the master."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Atlas Shrugged
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter VII inverts the common accusation that industrialists exploit workers.
        Through Rearden's battle with the <strong className="text-amber-400">Equalization
        of Opportunity Bill</strong> and the preparations for the John Galt Line, we see
        who truly exploits whom in a society corrupted by political pull.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Exploiters and the Exploited"</strong> challenges the
          Marxist narrative that capitalists exploit workers. Rand argues the opposite:
          it is the looters who exploit the producers, using government force to seize
          what they cannot earn.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The <strong className="text-amber-400">Equalization of Opportunity Bill</strong> passes,
        forcing Rearden to sell his ore mines. The bill is presented as helping the "little guy"
        but actually strips a productive man of his property to benefit his incompetent competitors.
        Meanwhile, Dagny and Rearden work frantically to complete the John Galt Line before
        their enemies can stop them.
      </p>

      <p className="my-4">
        The chapter also explores Rearden's internal conflict. He accepts the moral framework
        his enemies impose—that his dedication to work is selfish and wrong—even as he continues
        to work. This acceptance of unearned guilt is the "sanction of the victim" that allows
        the looters to succeed.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Bill Passes</h4>
        <p className="text-dark-200 text-lg mb-4">
          "Destroyed at the whim of some men who sat and voted... Who knows by what minds?
          Who knows whose will had placed them in power?—what motive moved them?—what was
          their knowledge?—which one of them, unaided, could bring a chunk of ore out of
          the earth?"
        </p>
        <p className="text-dark-400 text-sm">
          Rearden's internal monologue captures the injustice of being stripped of property
          by men who could never create what they are seizing.
        </p>
      </div>

      {/* Wesley Mouch's Betrayal */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Wesley Mouch's Betrayal</h2>

      <p className="my-4">
        <strong className="text-amber-400">Wesley Mouch</strong>, whom Rearden had employed
        as his Washington lobbyist, reveals his true colors. Rather than representing Rearden's
        interests, Mouch has been working with the conspirators all along. His reward for
        betrayal is appointment as Assistant Coordinator of the Bureau of Economic Planning
        and National Resources.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Double Agent</h4>
          <p className="text-sm text-dark-300">
            Mouch was paid by Rearden to represent his interests in Washington, but
            secretly worked to advance the legislation that would destroy him.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Reward</h4>
          <p className="text-sm text-dark-300">
            For his betrayal, Mouch receives a government position that gives him power
            over the very industries he once claimed to represent.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Lesson</h4>
          <p className="text-sm text-dark-300">
            Mouch's betrayal shows that hiring lobbyists to deal with government is
            futile—the system rewards those who serve the looters, not the producers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Rearden's Response</h4>
          <p className="text-sm text-dark-300">
            Rearden refuses to dwell on the betrayal, choosing instead to work harder.
            His response illustrates both his strength and his tragic acceptance of injustice.
          </p>
        </Card>
      </CardGrid>

      {/* The John Galt Line Preparation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Building the John Galt Line</h2>

      <p className="my-4">
        Despite the attacks on Rearden Metal and the passage of the Equalization Bill,
        <strong className="text-amber-400">Dagny</strong> and <strong className="text-amber-400">Rearden</strong>
        press forward with the John Galt Line. They work together closely, united by their
        shared values and determination to prove that achievement is possible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Partnership</h4>
        <p className="text-dark-200 mb-4">
          Working together on the John Galt Line, Dagny and Rearden develop a deep mutual
          respect. They understand each other in a way that neither has experienced before—
          a meeting of equals united by shared purpose.
        </p>
        <p className="text-dark-400 text-sm">
          Their professional partnership foreshadows the personal relationship that will develop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Bridge</h3>
          <p className="text-dark-300 text-sm">
            Rearden designs a revolutionary bridge using Rearden Metal, lighter and
            stronger than any steel structure. It becomes a symbol of human achievement.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Race Against Time</h3>
          <p className="text-dark-300 text-sm">
            They must complete the line before their enemies can pass more legislation
            to stop them—and before Ellis Wyatt gives up on Colorado.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Public Opposition</h3>
          <p className="text-dark-300 text-sm">
            The media, the intellectuals, and the government all oppose the John Galt Line.
            Dagny and Rearden work in defiance of the entire establishment.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Supporters</h3>
          <p className="text-dark-300 text-sm">
            Colorado's industrialists—Ellis Wyatt, Ted Nielsen, Ken Danagger—invest in
            the John Galt Line, betting on achievement against the tide of opinion.
          </p>
        </div>
      </div>

      {/* Who Exploits Whom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Who Exploits Whom?</h2>

      <Callout type="note">
        <p>
          <strong>The Inversion of Exploitation:</strong> The looters claim that industrialists
          exploit workers. But who actually uses force? Not Rearden, who trades value for value
          with willing employees. The looters use government force to seize Rearden's property—
          they are the true exploiters.
        </p>
      </Callout>

      <p className="my-4">
        The chapter exposes the lie at the heart of collectivist rhetoric. The Equalization
        of Opportunity Bill doesn't help workers or small businesses—it transfers Rearden's
        property to his competitors who cannot match his efficiency. The "exploited" are not
        workers but producers like Rearden, who are forced to surrender their achievements
        to those who create nothing.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Sanction of the Victim</h4>
          <p className="text-dark-300">
            Rearden accepts guilt for his achievements, allowing the looters to claim moral
            superiority. This acceptance—the sanction of the victim—is what gives the looters
            their power.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Nature of Force</h4>
          <p className="text-dark-300">
            Rearden cannot use force to keep his property; he can only create and trade.
            The looters, unable to create, must use government force to seize what they want.
            This is the true distinction between producers and parasites.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Partnership of Equals</h4>
          <p className="text-dark-300">
            Dagny and Rearden's working relationship is based on mutual respect and shared
            values. Neither exploits the other; they trade value for value, achieving more
            together than either could alone.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Equalization Bill Passes</p>
            <p className="text-sm text-dark-400 mt-1">
              The bill becomes law, forcing Rearden to sell his ore mines to
              competitors who cannot match his efficiency.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Mouch's Appointment</p>
            <p className="text-sm text-dark-400 mt-1">
              Wesley Mouch receives a government position as reward for betraying
              Rearden—a preview of things to come.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Bridge Construction Begins</p>
            <p className="text-sm text-dark-400 mt-1">
              Rearden's revolutionary Rearden Metal bridge begins to take shape,
              a testament to human ingenuity and determination.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Rearden Gives Payment Extension</p>
            <p className="text-sm text-dark-400 mt-1">
              Rearden offers to delay Taggart's payment until after the John Galt Line
              opens—an act of rational self-interest, not charity.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>Rearden's Gift to Taggart:</strong> When Rearden offers Taggart Transcontinental
          a payment extension, he explains it's not charity but self-interest—he needs them to
          succeed so his metal can prove itself. This illustrates the harmony of rational interests
          among producers.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The chapter title inverts the traditional Marxist narrative of exploitation. According to Rand, who are the real exploiters and who are the exploited? What evidence from the chapter supports this view? Do you find this argument convincing?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The Equalization of Opportunity Bill is presented as helping "the little guy," but actually transfers property from efficient producers to inefficient competitors. How do noble-sounding policies sometimes produce results opposite to their stated intentions?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Rearden accepts guilt for his achievements even though he has done nothing wrong. Why might a successful person feel guilty about their success? What does Rand mean by "the sanction of the victim," and how does it empower those who exploit producers?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Wesley Mouch's betrayal is rewarded with a government position. What does this say about the incentives in a system where political connections matter more than productive achievement? Can you think of modern parallels?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The true exploiters</strong> are not industrialists but looters
              who use government force to seize what they cannot create.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Wesley Mouch's betrayal</strong> shows that trying to work with
              the system through lobbyists is futile—the system rewards traitors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Rearden's acceptance of guilt</strong> for his achievements gives
              the looters their power—the sanction of the victim.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Dagny and Rearden's partnership</strong> demonstrates how producers
              relate to each other—through trade, not exploitation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The John Galt Line</strong> advances despite all opposition,
              demonstrating the power of determined achievers.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
