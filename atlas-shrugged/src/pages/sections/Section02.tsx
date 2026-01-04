import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "We can't help it if the process of civilization is a process of destroying competition.
        The strong always win against the weak, and it isn't fair."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — James Taggart
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter III exposes the philosophy of the looters through a secret meeting between
        James Taggart, <strong className="text-amber-400">Orren Boyle</strong>, and other
        political operators. While they speak of fairness and helping the weak, their true
        goal is to destroy competitors through political manipulation rather than merit.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Top and the Bottom"</strong> contrasts those at the "top"
          of society (the productive achievers) with those at the "bottom" (the schemers
          who use political pull rather than ability to advance).
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter opens with <strong className="text-amber-400">James Taggart</strong> meeting
        secretly with <strong className="text-amber-400">Orren Boyle</strong> of Associated Steel,
        <strong className="text-amber-400">Wesley Mouch</strong> (Rearden's Washington lobbyist),
        and <strong className="text-amber-400">Paul Larkin</strong>. They gather in a dingy bar,
        deliberately avoiding the respectable establishments where businessmen might see them.
      </p>

      <p className="my-4">
        Their conversation reveals their plan: to use government regulation to destroy Hank
        Rearden and Dan Conway's Phoenix-Durango railroad. They speak in euphemisms about
        "fairness" and "the public good," but their actual goal is to eliminate competition
        they cannot match through honest means.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Looters' Meeting</h4>
        <p className="text-dark-200 text-lg mb-4">
          "They did not talk about methods. They did not say the method was to demand
          sacrifice from others. They said they were 'protecting the public interest.'
          They did not say what made them entitled to speak for the public."
        </p>
        <p className="text-dark-400 text-sm">
          Rand exposes how looters use noble-sounding language to disguise their actual
          intentions: the destruction of better competitors through force.
        </p>
      </div>

      {/* The Conspirators */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Conspirators</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">James Taggart</h4>
          <p className="text-sm text-dark-300">
            President of Taggart Transcontinental, who relies on political connections
            rather than competence. He resents his sister Dagny's abilities and seeks
            to destroy Dan Conway's competing railroad.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Orren Boyle</h4>
          <p className="text-sm text-dark-300">
            Owner of Associated Steel, an inefficient company that cannot compete with
            Rearden Steel. He wants government intervention to handicap his more
            capable competitor.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Wesley Mouch</h4>
          <p className="text-sm text-dark-300">
            Rearden's Washington lobbyist, who is secretly working against his employer.
            He serves as a double agent, feeding information to the conspirators.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Paul Larkin</h4>
          <p className="text-sm text-dark-300">
            A "friend" of Rearden who pretends loyalty while plotting against him.
            He represents the false friend who profits from betrayal.
          </p>
        </Card>
      </CardGrid>

      {/* The Anti-Dog-Eat-Dog Rule */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Anti-Dog-Eat-Dog Rule</h2>

      <p className="my-4">
        The chapter introduces the <strong className="text-amber-400">Anti-dog-eat-dog Rule</strong>,
        a regulation being pushed through the National Alliance of Railroads. This rule would
        force the Phoenix-Durango railroad to cease operations in Colorado, eliminating
        Taggart Transcontinental's main competitor in the region.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Rule's True Purpose</h4>
        <p className="text-dark-200 mb-4">
          The rule is presented as protecting "the public interest" and preventing
          "destructive competition." In reality, it is designed to destroy Dan Conway's
          Phoenix-Durango railroad—a more efficient competitor that has been winning
          Colorado's freight business from Taggart Transcontinental.
        </p>
        <p className="text-dark-400 text-sm">
          This illustrates how looters use government force to accomplish what they cannot
          achieve through productive merit.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Language of Looting:</strong> Notice how the conspirators never speak
          directly about their intentions. They use euphemisms like "fairness," "public good,"
          and "destructive competition" to disguise their real goal: destroying those who
          are better than them.
        </p>
      </Callout>

      {/* Dan Conway */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dan Conway and the Phoenix-Durango</h2>

      <p className="my-4">
        <strong className="text-amber-400">Dan Conway</strong> has built the Phoenix-Durango
        railroad through years of hard work, serving the booming industrial region of Colorado
        far better than Taggart Transcontinental. His reward for superior service will be
        destruction through political manipulation.
      </p>

      <p className="my-4">
        The tragedy of Conway's fate illustrates a key theme of the novel: in a society
        corrupted by political pull, the competent are punished for their competence, while
        the incompetent are rewarded for their political connections.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Pull vs. Merit</h3>
          <p className="text-dark-300 text-sm">
            The chapter contrasts those who succeed through ability (Conway, Rearden)
            with those who succeed through political manipulation (Taggart, Boyle).
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Rhetoric of Looting</h3>
          <p className="text-dark-300 text-sm">
            Looters never admit their true motives. They cloak their plunder in
            language about fairness, equality, and the public good.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Betrayal</h3>
          <p className="text-dark-300 text-sm">
            Wesley Mouch and Paul Larkin represent the betrayers—those who pose as
            allies while secretly working for the enemy.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Force vs. Production</h3>
          <p className="text-dark-300 text-sm">
            Unable to compete through better products or services, the looters turn
            to government force to eliminate their competition.
          </p>
        </div>
      </div>

      {/* Dagny's Response */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Perspective</h2>

      <p className="my-4">
        When Dagny learns about the plot against Phoenix-Durango, she is horrified—not because
        Conway is a friend, but because she recognizes the injustice of destroying a better
        competitor through political means rather than market competition.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg">
          Dagny understands that the Anti-dog-eat-dog Rule, while benefiting Taggart
          Transcontinental in the short term, represents a fundamental corruption of
          the principles that make business and civilization possible.
        </p>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Secret Meeting</p>
            <p className="text-sm text-dark-400 mt-1">
              Taggart, Boyle, Mouch, and Larkin meet in a dingy bar to plot the destruction
              of their competitors through political means.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Anti-Dog-Eat-Dog Rule</p>
            <p className="text-sm text-dark-400 mt-1">
              A new regulation designed to force Phoenix-Durango out of Colorado,
              eliminating Taggart Transcontinental's competition.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Wesley Mouch's Betrayal</p>
            <p className="text-sm text-dark-400 mt-1">
              Rearden's own lobbyist is revealed to be secretly working with the
              conspiracy against him.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Planning Rearden's Destruction</p>
            <p className="text-sm text-dark-400 mt-1">
              The conspirators discuss future plans to use government regulation
              to handicap Rearden Steel and Rearden Metal.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophical Significance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Philosophical Significance</h2>

      <Callout type="note">
        <p>
          <strong>The Meaning of "Destructive Competition":</strong> The looters call
          honest competition "destructive" because it destroys their pretense of equality.
          When a superior company wins business through better service, it exposes the
          inferiority of those who cannot compete—and this exposure is what they truly fear.
        </p>
      </Callout>

      <p className="my-4">
        This chapter establishes the novel's central political conflict: the battle between
        those who produce and those who loot. The looters cannot create value, so they must
        seize it from those who can. They cannot compete in the marketplace, so they turn
        to government force to eliminate their competitors.
      </p>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The conspirators use language like "fairness," "public interest," and "destructive competition" to justify their plans. How does their actual behavior contrast with their stated motives? Can you identify similar rhetoric in modern political or business contexts?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The Anti-dog-eat-dog Rule will destroy Dan Conway's Phoenix-Durango railroad, which provides superior service to Colorado. Who ultimately benefits and who suffers from this rule? What does this suggest about regulations designed to limit competition?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Wesley Mouch is supposed to represent Rearden's interests in Washington but is secretly working against him. What does this reveal about the relationship between business and government in the novel's world? Is it ever possible to "work within the system"?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Dagny is horrified by the plot against Phoenix-Durango even though it would benefit her own railroad. Why might she react this way? What principles is she defending beyond her immediate self-interest?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The looters' conspiracy</strong> is revealed: Taggart, Boyle, and
              others plan to use government regulation to destroy their competitors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The Anti-dog-eat-dog Rule</strong> will force the efficient
              Phoenix-Durango railroad out of Colorado, rewarding incompetence.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Wesley Mouch</strong> is betraying his employer Rearden,
              working secretly with the conspirators.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The rhetoric of looting</strong> uses noble-sounding language
              like "fairness" and "public good" to disguise plunder.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Pull replaces merit</strong> as the means of success in a
              society corrupted by political manipulation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
