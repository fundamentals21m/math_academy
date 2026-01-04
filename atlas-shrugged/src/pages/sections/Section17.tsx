import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "One thing is certain—we can't send a train into the tunnel with a coal-burning engine."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Bill Brent, chief dispatcher, stating the obvious truth no one wanted to hear
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        This chapter shows the catastrophic consequences of a system that punishes competence
        and rewards evasion. When the Taggart Comet is stranded without a Diesel engine to
        pull it through the Winston Tunnel, a chain of cowardice and evasion leads to
        disaster—a disaster that kills everyone aboard the train.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Tunnel Disaster:</strong> This chapter contains the novel's most
          devastating illustration of what happens when competence is driven out and
          replaced by men who refuse to think. The Winston Tunnel disaster is not an
          accident—it is the inevitable result of a system designed to avoid responsibility.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The Taggart Comet is stranded at Winston Station. The only available engine is a
        coal-burning locomotive, but the Winston Tunnel is eight miles long—sending a
        coal-burning engine through it would fill the tunnel with deadly carbon monoxide.
        Every competent railroad man knows this.
      </p>

      <p className="my-4">
        But aboard the Comet is <strong className="text-amber-400">Kip Chalmers</strong>,
        a politician who must reach San Francisco for a campaign rally. He demands that
        the train proceed immediately. What follows is a cascade of cowardice as each
        person in the chain of command passes the decision to someone else.
      </p>

      {/* The Chain of Evasion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Chain of Evasion</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Nobody Told Me To!</h4>
        <p className="text-dark-200 text-lg mb-4">
          Dave Mitchum, the division superintendent, had been promoted not through competence
          but through political connections. His employers had had no specific misdeeds to
          charge against him, but had simply eased him out, because he said, "Nobody told me
          to!" too often.
        </p>
        <p className="text-dark-400 text-sm">
          Now, faced with an impossible situation, Mitchum's only instinct is to avoid
          responsibility—to pass the decision to someone else.
        </p>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Kip Chalmers</h4>
          <p className="text-sm text-dark-300">
            The politician who demands the train proceed, screaming that "miserable
            technological problems" should not interfere with "crucial social issues."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dave Mitchum</h4>
          <p className="text-sm text-dark-300">
            The superintendent who refuses to make the decision himself but arranges
            for the order to be given—so that someone else will be blamed.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Bill Brent</h4>
          <p className="text-sm text-dark-300">
            The competent dispatcher who knows the truth and quits rather than give
            the order—the only man who acts with integrity.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Young Dispatcher</h4>
          <p className="text-sm text-dark-300">
            A boy too inexperienced to understand what he's doing, who signs the order
            because "one did not doubt the good faith of railroad executives."
          </p>
        </Card>
      </CardGrid>

      {/* Bill Brent's Stand */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bill Brent's Integrity</h2>

      <p className="my-4">
        Bill Brent is the only man in the chain who refuses to participate in the evasion.
        When Mitchum orders him to send the train through the tunnel, Brent quits on the spot:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Man Who Knew</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "It's true that so long as I hold this job, I cannot refuse to obey you. But I can,
          if I quit. So I'm quitting."
        </p>
        <p className="text-dark-400 text-sm">
          Bill Brent knew that man must live by his own rational perception of reality,
          that he cannot act against it or escape it—and that there is no other way for
          him to live.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "If you want to send the sheriff for me in the morning, I'll be at home. I won't
          try to escape. There's no place to go."
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Law Against Quitting:</strong> Under Directive 10-289, workers cannot
          quit their jobs. Brent knows he may go to jail for resigning—but he would rather
          face imprisonment than be responsible for murder.
        </p>
      </Callout>

      {/* The Disaster */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tunnel Disaster</h2>

      <p className="my-4">
        The order is signed by a young dispatcher who doesn't fully understand what he's
        doing. The original engineer refuses to take the train and quits. A drunk engineer
        agrees to take it. The train enters the Winston Tunnel—and never exits.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The Result</h4>
        <p className="text-dark-200 text-lg mb-4">
          The coal-burning engine fills the eight-mile tunnel with carbon monoxide.
          Every person aboard the Taggart Comet dies. Then an Army Special carrying
          munitions crashes into the stalled train, and the tunnel collapses.
        </p>
        <p className="text-dark-400 text-sm">
          The Winston Tunnel—built by Nat Taggart a century ago—is destroyed, cutting
          the transcontinental line and leaving no rail route across the mountains.
        </p>
      </div>

      {/* The Passengers */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Passengers</h2>

      <p className="my-4">
        In one of the novel's most controversial passages, Rand describes the passengers
        who died in the tunnel disaster, showing that each had contributed to the system
        that killed them:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4">
          The passengers included: a teacher who taught that reason is a superstition;
          a journalist who wrote that individual rights are outdated; a businessman who
          believed in using government to destroy competitors; a mother who believed
          children should be raised by the state.
        </p>
        <p className="text-dark-400 text-sm">
          Rand's point is not that these individuals deserved to die, but that the
          disaster was the logical consequence of the ideas they supported—ideas that
          led to a system where competence is punished and evasion is rewarded.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Ideas Have Consequences:</strong> The tunnel disaster illustrates Rand's
          view that philosophical ideas have real-world effects. The passengers died not
          by accident but because of a system built on the premise that reality can be
          evaded and that someone else will always take responsibility.
        </p>
      </Callout>

      {/* Ragnar Danneskjold */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ragnar Danneskjold</h2>

      <p className="my-4">
        Before the tunnel disaster, the chapter introduces <strong className="text-amber-400">
        Ragnar Danneskjold</strong>, the pirate philosopher, in a nighttime meeting with Rearden:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Robin Hood Reversal</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Robin Hood was the man who robbed the rich and gave to the poor. Well, I'm
          the man who robs the poor and gives to the rich—or, to be exact, the man who
          robs the thieving poor and gives back to the productive rich."
        </p>
        <p className="text-dark-400 text-sm">
          Danneskjold explains that he is fighting to destroy the legend of Robin Hood—
          the idea that need, not achievement, is the source of rights.
        </p>
      </div>

      <p className="my-4">
        Danneskjold reveals that he has been depositing gold in accounts for the men who
        have been robbed by taxation—returning to them the wealth that was taken by force.
        He gives Rearden a bar of gold representing the income tax Rearden has paid.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Evasion as Policy</h3>
          <p className="text-dark-300 text-sm">The system is designed to ensure that no one takes responsibility—decisions are passed along until they land on someone too weak to resist.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Cost of Incompetence</h3>
          <p className="text-dark-300 text-sm">When competent men like Bill Brent are driven out, they are replaced by those who cannot or will not think—with catastrophic results.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Individual Integrity</h3>
          <p className="text-dark-300 text-sm">Bill Brent stands alone as the one man who refuses to participate—showing that integrity is always possible, even at great personal cost.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Restitution</h3>
          <p className="text-dark-300 text-sm">Danneskjold represents the idea of returning stolen property—that robbery by government is still robbery.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Bill Brent</h4>
          <p className="text-dark-300 text-sm">
            The hero of this chapter—a middle-aged railroad man who has the courage to
            quit rather than be party to murder. His integrity costs him his job and
            possibly his freedom, but he refuses to compromise.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Ragnar Danneskjold</h4>
          <p className="text-dark-300 text-sm">
            Revealed as a philosopher-pirate fighting against the Robin Hood legend.
            He represents the most extreme response to the looters—taking back by force
            what was taken by force.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dave Mitchum</h4>
          <p className="text-dark-300 text-sm">
            The archetype of the incompetent—a man who got his position through pull
            and whose only skill is avoiding responsibility. His cowardice costs
            hundreds of lives.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Bill Brent quits rather than give the order to send the train through the tunnel, even knowing he may face legal consequences under Directive 10-289. What responsibilities do individuals have when ordered to do something they believe is wrong?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The tunnel disaster results from a chain of people passing responsibility to others. How do organizational structures sometimes make it easier to evade personal accountability? What safeguards might prevent such chains of evasion?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Ragnar Danneskjold describes himself as the reverse of Robin Hood—"the man who robs the thieving poor and gives back to the productive rich." What is the moral distinction, if any, between taking from producers through taxation and taking back through piracy?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Kip Chalmers dismisses "technological problems" as irrelevant compared to "crucial social issues." What are the dangers of viewing physical reality as subordinate to political considerations?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The tunnel disaster</strong> kills everyone aboard the Comet when
              a coal-burning engine fills the eight-mile tunnel with carbon monoxide.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Bill Brent quits</strong> rather than give the order—the only man
              in the chain who acts with integrity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>The disaster is caused</strong> by a system that punishes competence
              and rewards evasion—not by accident.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Ragnar Danneskjold</strong> reveals his mission: destroying the Robin
              Hood legend and returning stolen property to producers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The Winston Tunnel collapses</strong>, cutting the only rail route
              through the mountains and crippling the transcontinental system.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
