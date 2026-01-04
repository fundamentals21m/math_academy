import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "So you think that money is the root of all evil? Have you ever asked what is the root of money?"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Francisco d'Anconia, beginning his famous speech
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "White Blackmail" centers on Jim Taggart's wedding to Cherryl Brooks and features
        one of the most famous passages in the novel: Francisco d'Anconia's "Money Speech."
        At a celebration of hollow achievement, Francisco delivers a devastating defense of
        money, capitalism, and the productive mind.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> "White blackmail" refers to the moral manipulation
          practiced by the looters—using guilt, pity, and appeals to sacrifice to extract
          compliance from the productive. It is blackmail that presents itself as virtue.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        James Taggart marries Cherryl Brooks in a lavish ceremony that celebrates his fraudulent
        reputation as the man who built the John Galt Line. The society wedding brings together
        the aristocracy of pull—politicians, influence-peddlers, and their enablers—along with
        the actual producers they exploit.
      </p>

      <p className="my-4">
        At the reception, a guest makes a casual remark about money being the root of all evil.
        <strong className="text-amber-400"> Francisco d'Anconia</strong> overhears and delivers
        an electrifying response that silences the room—a complete philosophical defense of
        money as a tool of free exchange among free minds.
      </p>

      {/* The Money Speech */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Money Speech</h2>

      <p className="my-4">
        Francisco's speech is one of the philosophical centerpieces of <em>Atlas Shrugged</em>.
        It inverts the conventional view of money as corrupting and instead presents it as
        humanity's noblest invention—the tool that makes peaceful cooperation possible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Root of Money</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Money is a tool of exchange, which can't exist unless there are goods produced
          and men able to produce them. Money is the material shape of the principle that
          men who wish to deal with one another must deal by trade and give value for value."
        </p>
        <p className="text-dark-400 text-sm">
          Francisco argues that money represents productive achievement, not exploitation.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Money and the Mind</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Money is made—before it can be looted or mooched—made by the effort of every
          honest man, each to the extent of his ability. An honest man is one who knows
          that he can't consume more than he has produced."
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Alternative to Money</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Run for your life from any man who tells you that money is evil. That sentence
          is the leper's bell of an approaching looter. So long as men live together on
          earth and need means to deal with one another—their only substitute, if they
          abandon money, is the muzzle of a gun."
        </p>
      </div>

      {/* Key Arguments */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Francisco's Key Arguments</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Money Requires Production</h4>
          <p className="text-sm text-dark-300">
            Money cannot exist without goods and the people who create them. It is
            the symbol of productive achievement, not its cause.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Trade vs. Force</h4>
          <p className="text-sm text-dark-300">
            Money makes voluntary exchange possible. Without it, the only alternative
            is brute force—taking rather than trading.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Money as Judge</h4>
          <p className="text-sm text-dark-300">
            "Money will not purchase happiness for the man who has no concept of what
            he wants"—money is a tool, not a substitute for values.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Barometer of Virtue</h4>
          <p className="text-sm text-dark-300">
            "Money is the barometer of a society's virtue"—when money flows to pull
            rather than production, society is doomed.
          </p>
        </Card>
      </CardGrid>

      {/* The Bracelet Confrontation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bracelet Confrontation</h2>

      <p className="my-4">
        At the wedding reception, Lillian Rearden notices that Dagny is wearing the Rearden
        Metal bracelet—the one Lillian had contemptuously traded away at Hank's anniversary
        party. Lillian attempts to use this as a weapon, implying scandal between Dagny and
        her husband.
      </p>

      <p className="my-4">
        But Dagny refuses to be intimidated. When Lillian asks her to return the bracelet,
        Dagny simply says <strong className="text-amber-400">"No."</strong> When warned about
        the risk to her reputation, she answers: "Then the responsibility and the risk will
        be theirs, not mine."
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Dagny's Defiance</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "I have never understood what is meant by a statement of that kind... I have
          never permitted myself to wonder about that... I do."
        </p>
        <p className="text-dark-400 text-sm">
          Dagny refuses to play Lillian's game of implication and innuendo. She will not
          pretend to be ashamed of values she holds openly.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>White Blackmail in Action:</strong> Lillian's approach exemplifies the
          chapter's title. She attempts to use Dagny's sense of propriety against her,
          expecting that the fear of scandal will force compliance. But Dagny refuses to
          grant the premise that she has anything to hide.
        </p>
      </Callout>

      {/* Jim and Cherryl */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Jim and Cherryl's Marriage</h2>

      <p className="my-4">
        Cherryl Brooks enters the marriage believing she has found a hero—a man of achievement
        who built a great railroad despite opposition. She doesn't know that everything she
        admires in Jim actually belongs to Dagny and men like Rearden.
      </p>

      <p className="my-4">
        Jim, for his part, marries Cherryl precisely because of her innocence and her worship.
        He wants someone who will believe in the image he has constructed—someone whose
        admiration he hasn't earned but can enjoy nonetheless.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">What Cherryl Believes</h3>
          <p className="text-dark-300 text-sm">Jim is a heroic industrialist who defied the world to build the John Galt Line, a man of vision and courage.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Reality</h3>
          <p className="text-dark-300 text-sm">Jim opposed the line at every turn. Dagny built it against his wishes. He took credit for her achievement.</p>
        </div>
      </div>

      {/* Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Money as Moral Symbol</h3>
          <p className="text-dark-300 text-sm">Francisco inverts the conventional view: money is not evil but the product of virtue—and hatred of money reveals hatred of production.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Moral Manipulation</h3>
          <p className="text-dark-300 text-sm">The looters use guilt, propriety, and appeals to sacrifice as weapons—"white blackmail" that exploits the victim's own virtues.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Fraud of Pull</h3>
          <p className="text-dark-300 text-sm">Jim's wedding celebrates an achievement that isn't his, while the actual achievers remain unrecognized.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Innocence Exploited</h3>
          <p className="text-dark-300 text-sm">Cherryl's genuine idealism makes her vulnerable to Jim's deception—she cannot imagine that heroism could be faked.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-dark-300 text-sm">
            Reveals another layer of his hidden purpose. The playboy mask slips as he
            delivers a passionate defense of productive achievement. His Money Speech
            shows the philosophical depth concealed beneath his apparent frivolity.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Demonstrates her refusal to be manipulated by moral pressure. She will not
            pretend shame for values she holds openly, regardless of social consequences.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Lillian Rearden</h4>
          <p className="text-dark-300 text-sm">
            Attempts to use propriety and the threat of scandal as weapons, but finds
            Dagny immune to this form of manipulation. Her tactics require a victim
            willing to feel guilty.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Cherryl Brooks Taggart</h4>
          <p className="text-dark-300 text-sm">
            Enters marriage full of hope and admiration, unaware that everything she
            believes about her husband is false. Her tragedy begins with this wedding.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Francisco argues that "money is the barometer of a society's virtue." Do you agree that how a society treats money and wealth reflects its underlying values? What does your society's attitude toward money reveal?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. When Lillian tries to shame Dagny about the bracelet, Dagny refuses to play along, saying "the responsibility and the risk will be theirs, not mine." How does refusing to accept false guilt change the dynamics of manipulation?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Jim marries Cherryl knowing she admires him for achievements that aren't his. What does it say about a person's character when they accept admiration they know is undeserved?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Francisco claims that without money as a means of exchange, "the only substitute... is the muzzle of a gun." Is this an overstatement, or can you trace how the absence of free exchange leads to force?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Francisco's Money Speech</strong> presents money as a tool of
              peaceful exchange—the material form of the trader principle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>"White blackmail"</strong> uses moral manipulation rather than
              force—exploiting the victim's own sense of guilt, propriety, or duty.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Dagny refuses</strong> to play the game of implication and shame,
              demonstrating that manipulation requires the victim's cooperation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Jim's wedding to Cherryl</strong> is built on fraud—she worships
              achievements that belong to others.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>"Money is the barometer</strong> of a society's virtue"—when pull
              replaces production, civilization begins to collapse.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
