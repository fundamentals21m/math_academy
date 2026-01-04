import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "From each according to his ability, to each according to his need! We're all one big family!"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The creed that destroyed the Twentieth Century Motor Company
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "Their Brothers' Keepers" explores the doctrine of collective obligation—the belief
        that each person is responsible for the welfare of all others. Through the devastating
        story of the Twentieth Century Motor Company, Rand shows how this seemingly compassionate
        ideal leads to universal destruction and moral corruption.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Irony:</strong> "Am I my brother's keeper?" was Cain's evasion
          after murdering Abel. Rand inverts the phrase to show that the doctrine of universal
          brotherhood, when enforced, becomes a tool of mutual destruction.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter centers on the history of the Twentieth Century Motor Company, the factory
        where John Galt once worked. After the founder died, his heirs implemented a radical
        experiment: all workers would be paid according to their needs, and would work according
        to their abilities. It was the practical application of collectivism—and it destroyed
        everyone involved.
      </p>

      <p className="my-4">
        A former worker at the factory recounts the horror of what happened. Within two years,
        the most productive workers had fled or collapsed. The laziest became the most rewarded.
        Families hid their abilities and exaggerated their needs. Neighbors spied on neighbors.
        The factory that had been a model of American industry became a hellhole of mutual
        resentment and declining production.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Factory's Experiment</h4>
        <p className="text-dark-200 text-lg mb-4">
          "We voted for the plan... because we believed that by working harder, we would all
          be better off... Within a year, we were voting on whether to allow one of us to have
          a new pair of shoes."
        </p>
        <p className="text-dark-400 text-sm">
          A former worker describing the degradation that followed the implementation of the plan.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Ability as Liability</h3>
          <p className="text-dark-300 text-sm">Under the plan, those with greater ability owed more to others—turning talent into a curse</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Need as Entitlement</h3>
          <p className="text-dark-300 text-sm">Those with greater needs received more—creating incentives to fail, to suffer, to be helpless</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Tyranny of "We"</h3>
          <p className="text-dark-300 text-sm">Individual judgment was replaced by collective voting—every personal decision became public property</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Moral Degradation</h3>
          <p className="text-dark-300 text-sm">Good people became corrupt as the system rewarded vice and punished virtue</p>
        </div>
      </div>

      {/* The Twentieth Century Motor Company */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Twentieth Century Motor Company</h2>

      <p className="my-4">
        The story of the motor company serves as a parable of collectivism in practice. What
        began with idealistic promises of brotherhood ended in mutual hatred and destruction.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Original Vision</h4>
          <p className="text-sm text-dark-300">
            The heirs believed they were creating utopia—a workplace where everyone would
            share equally, where competition would end, where need would be the only claim.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Perverse Incentives</h4>
          <p className="text-sm text-dark-300">
            Ability became a debt owed to others. Need became a credit to be collected.
            The system punished success and rewarded failure.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Moral Collapse</h4>
          <p className="text-sm text-dark-300">
            Workers learned to hide their abilities, exaggerate their needs, and resent
            anyone who produced more. Goodwill turned to hatred.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Destruction</h4>
          <p className="text-sm text-dark-300">
            Within four years, the company collapsed. The most capable had fled. Production
            had crashed. The experiment in brotherhood had created hell on earth.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Galt's Departure</p>
            <p className="text-sm text-dark-400">When the plan was announced, John Galt stood up and said, "I will stop the motor of the world"—then walked out</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Voting Meetings</p>
            <p className="text-sm text-dark-400">Workers voted on each other's needs—who deserved a new coat, whose child could go to school</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Flight of the Able</p>
            <p className="text-sm text-dark-400">The best workers quit, one by one, as they realized they were being punished for their competence</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Final Collapse</p>
            <p className="text-sm text-dark-400">The factory that had been a showplace of American industry closed its doors, bankrupt and destroyed</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Origin of the Strike:</strong> It was at this moment—watching the vote
          that would enslave the able to the needy—that John Galt conceived the strike. He
          would not stop others from implementing their plan, but he would remove himself
          and, eventually, everyone who could make it work.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">The Narrator</strong> (the former worker) shows how
        collectivism corrupts ordinary people. He was not a bad man—he voted for the plan because
        it sounded fair. But living under it transformed him. He learned to hate his neighbors,
        to resent achievement, to feel ashamed of his own abilities.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">John Galt's</strong> origin is revealed more fully.
        He was the brilliant young engineer who invented the motor—the motor that could have
        powered the world. When he saw what the collective demanded, he refused to let his
        creation serve their purposes. He walked away, taking his mind with him.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Galt's Declaration</h4>
        <p className="text-dark-200 text-lg">
          "I will put an end to this, once and for all... I will stop the motor of the world."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          The moment John Galt declared his intention—and the birth of the strike.
        </p>
      </div>

      {/* The Logic of Collectivism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Logic of Collectivism</h2>

      <p className="my-4">
        Rand uses the motor company story to demonstrate what she sees as the inevitable logic
        of collectivism:
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">1. Ability becomes a mortgage.</strong> The more
            you can do, the more you owe to others who cannot do as much.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">2. Need becomes a claim.</strong> The less you
            have, the more entitled you are to take from those who have more.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">3. Incentives are inverted.</strong> The system
            rewards failure and punishes success, creating a race to the bottom.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">4. Mutual resentment replaces goodwill.</strong> Everyone
            comes to hate everyone else—the able for being exploited, the needy for being dependent.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">5. Collapse is inevitable.</strong> When ability
            flees and need multiplies, there is nothing left to distribute.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The Twentieth Century Motor Company's experiment was based on the slogan "From each according to his ability, to each according to his need." Why does Rand believe this principle is inherently destructive? Are there any contexts where need-based distribution might work?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The workers who voted for the collectivist plan believed they were creating a more just and caring workplace. What does this story suggest about the relationship between good intentions and good outcomes? How should we evaluate policies—by their intentions or their results?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The chapter describes how workers learned to hide their abilities and exaggerate their needs under the collective system. What does this reveal about incentive structures and human behavior? Can you think of real-world examples where similar dynamics occur?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. John Galt declared "I will stop the motor of the world" in response to the collective plan. Was this response justified, or was it an abandonment of the other workers who might have been helped by his talents? What obligations, if any, do the gifted have to society?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Collectivism corrupts everyone:</strong> The motor company experiment shows
              how a system based on need and ability destroys both the able and the needy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>"Brotherhood" enforced is tyranny:</strong> When obligation to others is
              mandatory, it ceases to be compassion and becomes slavery.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Galt's strike began here:</strong> The origin of the strike was the moment
              Galt saw collectivism implemented and vowed to withdraw his mind.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Incentives matter:</strong> A system that punishes ability and rewards need
              will get less ability and more need.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Good intentions are not enough:</strong> The heirs believed they were
              creating paradise—they created hell instead.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
