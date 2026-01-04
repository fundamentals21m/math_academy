import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "If you choose to deal with men by means of compulsion, do so. But you will discover that you need the voluntary co-operation of your victims."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Hank Rearden, at his trial
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "Account Overdrawn" brings Hank Rearden to trial for the "crime" of selling his own
        metal to a willing buyer—Ken Danagger—in violation of government allocation rules.
        Instead of defending himself within the system's terms, Rearden refuses to grant the
        court any legitimacy, delivering a speech that exposes the nature of the regime.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> "Account Overdrawn" refers to the moral
          bankruptcy of the looters' system. They have been drawing on the productive
          capacity of men like Rearden without making any deposits—and the account is
          running dry.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Rearden and Ken Danagger are indicted for an illegal sale of Rearden Metal. The
        government needs to make an example of them—but they also need the appearance of
        legitimacy. They want Rearden to defend himself, to argue within their framework,
        to implicitly accept their right to try him.
      </p>

      <p className="my-4">
        Rearden refuses. He will not defend himself because there is no objective principle
        of justice that the court recognizes. He will not help them disguise the nature of
        their proceeding. His defiance transforms the trial into a revelation of the system's
        true nature.
      </p>

      {/* Rearden's Defiance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rearden's Courtroom Speech</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">No Defense Possible</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "A prisoner brought to trial can defend himself only if there is an objective
          principle of justice recognized by his judges, a principle upholding his rights,
          which they may not violate and which he can invoke. The law, by which you are
          trying me, holds that there are no principles, that I have no rights and that
          you may do with me whatever you please. Very well. Do it."
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Burglar's Difference</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "If it is now believed that my fellow men may sacrifice me in any manner they
          please for the sake of whatever they deem to be their own good, if they believe
          that they may seize my property simply because they need it—well, so does any
          burglar. There is only this difference: the burglar does not ask me to sanction
          his act."
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Public's Right</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Are we to understand that if the public deems it necessary to curtail your
          profits, you do not recognize its right to do so?"
          <br /><br />
          "Why, yes, I do. The public may curtail my profits any time it wishes—by
          refusing to buy my product."
          <br /><br />
          "We are speaking of... other methods."
          <br /><br />
          "Any other method of curtailing profits is the method of looters—and I
          recognize it as such."
        </p>
      </div>

      {/* The Key Exchange */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Flaw in Their Theory</h2>

      <p className="my-4">
        The judges grow increasingly frustrated. They need Rearden's cooperation to maintain
        the appearance of a legitimate legal proceeding. When they insist that the law
        compels him to volunteer a defense, the courtroom laughs.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Voluntary Requirement</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "That is the flaw in your theory, gentlemen, and I will not help you out of it.
          If you choose to deal with men by means of compulsion, do so. But you will
          discover that you need the voluntary co-operation of your victims, in many more
          ways than you can see at present. And your victims should discover that it is
          their own volition—which you cannot force—that makes you possible."
        </p>
        <p className="text-dark-400 text-sm">
          Rearden articulates the principle that underlies the entire strike: force is
          ultimately impotent without the cooperation of those it exploits.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Court's Dilemma:</strong> The judges cannot punish Rearden severely
          because public opinion is turning in his favor. His refusal to play their game
          has exposed the trial for what it is—a proceeding where the conclusion was
          predetermined and the "defense" was merely theater.
        </p>
      </Callout>

      {/* The Verdict */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Verdict</h2>

      <p className="my-4">
        The court, trapped by Rearden's refusal to cooperate and by growing public support
        for him, imposes a suspended sentence and a fine. They cannot afford to make him a
        martyr, but they cannot let him go free without any penalty. The compromise reveals
        their weakness.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No Legitimacy Granted</h4>
          <p className="text-sm text-dark-300">
            Rearden refuses to enter a plea, make a defense, or acknowledge the court's
            authority—denying them the appearance of justice.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Public Support</h4>
          <p className="text-sm text-dark-300">
            The gallery's reaction—laughter, applause—shows that ordinary people recognize
            the truth Rearden speaks.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Suspended Sentence</h4>
          <p className="text-sm text-dark-300">
            The light punishment reveals the court's fear—they cannot afford to create
            a martyr by enforcing their own laws.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ken Danagger's Fate</h4>
          <p className="text-sm text-dark-300">
            While Rearden fights, Danagger is contacted by the mysterious destroyer—and
            vanishes, another producer removed from the world.
          </p>
        </Card>
      </CardGrid>

      {/* Ken Danagger */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Disappearance of Ken Danagger</h2>

      <p className="my-4">
        While Rearden confronts his accusers, Ken Danagger—the coal producer who was his
        partner in the "illegal" sale—receives a visitor. When Dagny rushes to see him,
        hoping to prevent another disappearance, she arrives moments too late. Danagger
        has already decided to go.
      </p>

      <p className="my-4">
        Unlike other departures, Dagny almost catches the mysterious recruiter. She sees
        a figure leaving Danagger's office—a man whose presence she can feel but cannot
        identify. This near-miss intensifies her determination to discover who is taking
        the world's producers.
      </p>

      <Callout type="note">
        <p>
          <strong>The Pattern Continues:</strong> As Dagny predicted, the weight of the
          world shifts to each man in turn—and that man becomes the next to vanish.
          Danagger, facing trial for the crime of selling his own coal, chooses to leave
          rather than submit.
        </p>
      </Callout>

      {/* Francisco on Love */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Francisco's Philosophy of Love</h2>

      <p className="my-4">
        In another conversation, Francisco explains to Rearden his philosophy of sex and
        love—connecting it to the same principles that govern production and trade:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Love as Response to Values</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Love is our response to our highest values—and can be nothing else. Let a man
          corrupt his values and his view of existence, let him profess that love is not
          self-enjoyment but self-denial, that virtue consists not of pride but of pity
          or pain or weakness or sacrifice... and he will have cut himself in two."
        </p>
      </div>

      <p className="my-4">
        Francisco reveals that his playboy reputation is a mask—he has never actually been
        with any of the women he is seen with. The image serves his hidden purpose, while
        his actual values remain intact.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Need for Sanction</h3>
          <p className="text-dark-300 text-sm">The looters cannot function without the appearance of legitimacy—they need their victims to participate in the pretense.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Moral vs. Legal</h3>
          <p className="text-dark-300 text-sm">What the law calls crime—trading value for value—is actually virtue. What the law permits—looting—is the real crime.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Impotence of Force</h3>
          <p className="text-dark-300 text-sm">Force can destroy but cannot create. The looters need producers to keep producing—and that requires the producers' choice.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Values and Love</h3>
          <p className="text-dark-300 text-sm">Francisco connects the same principles—love as response to values—showing the unity of Rand's philosophy across all domains.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-dark-300 text-sm">
            Reaches a new level of clarity and defiance. His courtroom speech shows that
            he has internalized Francisco's lessons about the sanction of the victim. He
            will no longer help his destroyers maintain their pretense of justice.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Comes agonizingly close to catching the destroyer. Her near-miss with the
            mysterious figure at Danagger's office intensifies her determination to solve
            the mystery—and her fear of what the answer might be.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Ken Danagger</h4>
          <p className="text-dark-300 text-sm">
            Chooses to vanish rather than submit to trial. His departure shows that even
            the strongest producers can be persuaded to leave—suggesting the recruiter's
            argument must be extraordinarily compelling.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Rearden argues that defending himself would implicitly grant legitimacy to the court. When, if ever, is refusing to participate in an unjust system more powerful than trying to work within it?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Rearden says that a burglar at least "does not ask me to sanction his act." What is the difference between open force and force disguised as law? Which is more dangerous to liberty?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Ken Danagger vanishes after being contacted by the mysterious "destroyer," choosing to leave rather than face trial. What would you do if faced with the choice between fighting an unjust system or walking away from everything you've built?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Francisco explains that "love is our response to our highest values." How does this definition of love differ from common conceptions? Do you agree that who we love reveals what we value most?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rearden refuses to defend himself</strong> because there is no
              objective principle of justice the court recognizes—only naked force.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The looters need voluntary cooperation</strong> from their victims
              to maintain the appearance of legitimacy—force alone is insufficient.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Ken Danagger vanishes</strong> after being contacted by the
              mysterious destroyer—Dagny arrives moments too late to stop him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The suspended sentence</strong> reveals the court's weakness—they
              cannot afford to make Rearden a martyr.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Francisco reveals</strong> that his playboy image is a mask—he has
              never actually been with any of the women in the scandal sheets.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
