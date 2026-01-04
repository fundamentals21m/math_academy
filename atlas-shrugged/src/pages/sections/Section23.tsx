import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Man's life is the standard of morality, but your own life is its purpose. If existence on earth is your goal, you must choose your actions and values by the standard of that which is proper to man."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Galt
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "Anti-Life" examines the philosophical root of the world's collapse: the ethics of
        self-sacrifice. Rand argues that the morality which demands that individuals sacrifice
        themselves for others is not merely impractical—it is fundamentally opposed to human life.
        It is, quite literally, anti-life.
      </p>

      <Callout type="info">
        <p>
          <strong>The Moral Root:</strong> This chapter argues that bad politics and economics
          flow from bad ethics. The world is collapsing not because of economic ignorance but
          because of a moral code that condemns the requirements of human survival.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        As Dagny's time in the valley nears its end, the philosophical discussions deepen.
        John Galt, Hugh Akston, and the other strikers explain why they withdrew from the world.
        It was not merely because they were exploited economically—it was because they were
        condemned morally for the very actions that made life possible.
      </p>

      <p className="my-4">
        The chapter traces the logic of self-sacrifice to its conclusion. If man's life requires
        reason, production, and achievement, then a morality that condemns these as "selfish" is
        a morality of death. The strikers have rejected not just bad laws but the moral code that
        made those laws possible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Choice</h4>
        <p className="text-dark-200 text-lg mb-4">
          "You have been called selfish for the courage of acting on your own judgment and
          bearing sole responsibility for your own life. You have been called arrogant for
          your independent mind. You have been called cruel for your unyielding integrity."
        </p>
        <p className="text-dark-400 text-sm">
          Galt describing how producers are condemned for the virtues that sustain life.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Life as the Standard</h3>
          <p className="text-dark-300 text-sm">A proper moral code takes human life as its standard—actions that sustain life are good; those that destroy it are evil</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Self-Sacrifice as Death Worship</h3>
          <p className="text-dark-300 text-sm">A morality that demands sacrifice of the self to others is ultimately a morality that values death over life</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Virtue of Selfishness</h3>
          <p className="text-dark-300 text-sm">Rational self-interest—properly understood—is the foundation of morality, not its enemy</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Mind vs. Force</h3>
          <p className="text-dark-300 text-sm">A philosophy that condemns reason must ultimately resort to physical force to achieve its ends</p>
        </div>
      </div>

      {/* The Philosophy of Death */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Philosophy of Death</h2>

      <p className="my-4">
        Rand's argument proceeds systematically: Human survival requires reason. Reason is an
        individual faculty. Therefore, human survival requires that individuals think and act
        for themselves. A morality that condemns self-interest—that calls rational selfishness
        evil—is a morality that condemns the very means of human survival.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Reason Condemned</h4>
          <p className="text-sm text-dark-300">
            The morality of sacrifice teaches that individual judgment is arrogant—that one
            should defer to the group, to tradition, to faith, to anything but one's own mind.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Production Condemned</h4>
          <p className="text-sm text-dark-300">
            Working for one's own profit is called greedy. The producer is expected to work
            for others, not for himself—to be a servant, not a creator.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Achievement Condemned</h4>
          <p className="text-sm text-dark-300">
            Success is treated as a crime against those who failed. The achiever must apologize
            for his accomplishments and sacrifice them to those who accomplished nothing.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Happiness Condemned</h4>
          <p className="text-sm text-dark-300">
            Personal happiness is called selfish and shallow. The moral ideal is suffering
            and sacrifice—finding one's purpose in serving others rather than in living.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Hugh Akston's Explanation</p>
            <p className="text-sm text-dark-400">The philosopher explains how he identified the moral contradiction that is destroying the world</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The History of the Strike</p>
            <p className="text-sm text-dark-400">Galt recounts how he came to organize the withdrawal of the world's best minds</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Outside World Deteriorates</p>
            <p className="text-sm text-dark-400">Reports arrive of increasing chaos, shortages, and breakdowns in the world Dagny left</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny's Month Ends</p>
            <p className="text-sm text-dark-400">The time approaches for Dagny to decide: stay in the valley or return to the dying world</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Sanction of the Victim:</strong> A key concept introduced here—the looters'
          system depends entirely on the producers' acceptance of their own guilt. The moment
          producers withdraw their moral sanction, the system collapses.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">Dagny</strong> understands the philosophy intellectually
        but struggles with its implications. She has spent her life fighting for values in a world
        that condemns them. Can she really abandon that fight? The strikers tell her she has been
        fighting on the enemy's terms—that every victory only prolongs the system's survival.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">John Galt</strong> emerges as more than a strategist—he
        is a moral philosopher who has identified the root error of human history and organized
        a withdrawal from the consequences of that error.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Alternative</h4>
        <p className="text-dark-200 text-lg">
          "We are not combating any one particular policy. We are fighting the moral code that
          makes all such policies possible. We are fighting the creed of sacrifice, which permits
          men to be destroyed in the name of virtue."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          The strikers' target is not politics but the underlying morality.
        </p>
      </div>

      {/* The Pro-Life Philosophy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Pro-Life Philosophy</h2>

      <p className="my-4">
        Against the morality of sacrifice, the strikers offer an alternative: a morality based
        on man's life as the standard of value. This philosophy holds that:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 border border-amber-600/50 my-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Reason is man's basic means of survival and should be celebrated, not condemned</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Productive work is a virtue—the primary means by which man sustains his life</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Achievement is moral—it represents the application of mind to the task of living</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Happiness is the purpose of morality—not suffering, not sacrifice, but the achievement of one's values</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Trade is the only proper relationship between men—value for value, with neither sacrifice nor plunder</span>
          </li>
        </ul>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Rand argues that a morality demanding self-sacrifice is fundamentally "anti-life." How would defenders of altruistic ethics respond to this characterization? Is there a meaningful distinction between self-sacrifice and helping others?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The chapter identifies reason, production, achievement, and happiness as the requirements of human life that conventional morality condemns. Do you agree that these qualities are typically viewed negatively in society? What evidence supports or contradicts this claim?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The concept of "the sanction of the victim" suggests that oppressive systems require the moral acceptance of those being exploited. Can you think of historical or contemporary examples where withdrawing this sanction has led to significant change?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The strikers argue that bad politics ultimately stems from bad ethics. Do you agree that moral philosophy is the root cause of political systems, or do material and economic conditions shape our moral beliefs? Which comes first?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The root problem is moral:</strong> Bad politics flows from bad ethics—the
              morality of self-sacrifice makes looting seem virtuous.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Self-sacrifice is anti-life:</strong> A morality that demands the sacrifice
              of reason, production, achievement, and happiness is a morality of death.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Man's life is the standard:</strong> The proper moral code judges actions
              by whether they sustain and enhance human life.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The sanction of the victim:</strong> The looters' system depends on
              producers accepting guilt—withdraw the sanction, and the system falls.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny faces her choice:</strong> She must decide whether to continue
              fighting on the enemy's terms or to join the strike.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
