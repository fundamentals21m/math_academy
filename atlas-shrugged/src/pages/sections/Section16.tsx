import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "In the name of the general welfare, to protect the people's security, to achieve full
        equality and total stability, it is decreed for the duration of the national emergency..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The opening of Directive 10-289
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Moratorium on Brains" brings the crisis to its climax with the passage of
        <strong className="text-amber-400"> Directive 10-289</strong>—the most comprehensive
        set of economic controls ever imposed. This directive freezes the entire economy in
        place, forbidding any change, any innovation, any movement. It is the logical end
        point of the looters' philosophy: the death of the mind.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> A "moratorium" is a temporary suspension—but
          this is a moratorium on human thought itself. The looters have decided that the
          solution to their problems is to freeze everything in place, to stop the mind
          from creating the changes they cannot control.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Wesley Mouch and his circle meet to draft Directive 10-289. The directive contains
        eight points designed to freeze the entire economy—forbidding workers from quitting,
        businesses from closing, prices from changing, or production from varying. It is the
        final attempt to hold civilization in place by force.
      </p>

      <p className="my-4">
        The chapter reveals the true motives of the looters: not the good of the people, but
        hatred of achievement, fear of the competent, and the desperate desire to stop the
        world from changing in ways they cannot control.
      </p>

      {/* Directive 10-289 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Eight Points of Directive 10-289</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/50 my-6">
        <h4 className="font-semibold text-red-400 mb-4">Directive 10-289: The Death of Freedom</h4>
        <div className="space-y-3 text-dark-200">
          <p><strong className="text-amber-400">Point One:</strong> All workers shall remain at their present jobs and may not leave without permission from the Unification Board.</p>
          <p><strong className="text-amber-400">Point Two:</strong> All industrial establishments shall remain in operation and may not close without permission.</p>
          <p><strong className="text-amber-400">Point Three:</strong> All patents and copyrights shall be turned over to the nation as "public property."</p>
          <p><strong className="text-amber-400">Point Four:</strong> No new inventions, products, or devices shall be produced, invented, or marketed.</p>
          <p><strong className="text-amber-400">Point Five:</strong> All production shall remain at the same level as the "Basic Year."</p>
          <p><strong className="text-amber-400">Point Six:</strong> All spending shall remain at the same level as the "Basic Year."</p>
          <p><strong className="text-amber-400">Point Seven:</strong> All wages, prices, and incomes are frozen at present levels.</p>
          <p><strong className="text-amber-400">Point Eight:</strong> The Unification Board shall have final authority over all disputes.</p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Logic of Totalitarianism:</strong> Each point of Directive 10-289 follows
          from the premise that the individual exists to serve society. If workers can quit,
          they might leave essential jobs. If businesses can close, production might fall.
          If inventors can create, they might disrupt the status quo. The directive is the
          logical conclusion of collectivism.
        </p>
      </Callout>

      {/* The Meeting */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Looters' Council</h2>

      <p className="my-4">
        The men who draft Directive 10-289 reveal their true natures in their private
        conversation. Each has a different excuse, but all share the same hatred of
        achievement and the same desire to escape the consequences of their own incompetence.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Wesley Mouch</h4>
          <p className="text-sm text-dark-300">
            The bureaucrat who believes in nothing but power. He drafts the directive
            because he needs to "do something" about the crisis he helped create.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">James Taggart</h4>
          <p className="text-sm text-dark-300">
            "If we are to perish, let's make sure we all perish together"—revealing
            that his motive is not prosperity but the destruction of the able.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dr. Floyd Ferris</h4>
          <p className="text-sm text-dark-300">
            "Genius is a superstition"—the scientist who hates science, who wants
            to eliminate the individual mind from human affairs.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Eugene Lawson</h4>
          <p className="text-sm text-dark-300">
            "Man's mind is the root of all evil. This is the Age of Love"—the
            humanitarian who hates humanity's highest faculty.
          </p>
        </Card>
      </CardGrid>

      {/* Jim's Confession */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Jim Taggart's Confession</h2>

      <p className="my-4">
        In a moment of unguarded honesty, James Taggart reveals the true motive behind
        all the looters' policies:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Real Motive</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Well, why not? Why should they have it, if we don't? Why should they stand
          above us? If we are to perish, let's make sure that we all perish together.
          Let's make sure that we leave them no chance to survive!"
        </p>
        <p className="text-dark-400 text-sm">
          Jim's outburst reveals that the looters are not motivated by concern for
          the poor but by hatred of the successful. Their goal is not to lift anyone
          up but to drag everyone down.
        </p>
      </div>

      {/* Fred Kinnan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Fred Kinnan: The Honest Looter</h2>

      <p className="my-4">
        Fred Kinnan, the labor leader, is the only one at the meeting who speaks honestly
        about what they are doing:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "I know that I'm delivering the poor bastards into slavery, and that's all
          there is to it. And they know it, too. But they know that I'll have to throw
          them a crumb once in a while, if I want to keep my racket, while with the
          rest of you they wouldn't have a chance in hell."
        </p>
        <p className="text-dark-400 text-sm">
          Kinnan's cynical honesty exposes the hypocrisy of the others—he admits he's
          a racketeer, while they pretend to be humanitarians.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Age of Reason Is Over</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Do you think that outside of your college-bred pansies there's one village
          idiot whom you're fooling? I'm a racketeer—but I know it and my boys know it,
          and they know that I'll pay off."
        </p>
      </div>

      {/* Dagny's Response */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Resignation</h2>

      <p className="my-4">
        When Dagny learns of Directive 10-289, she reacts with the certainty that has
        been building within her. She walks into Jim's office and throws the newspaper
        at his face:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "There's my resignation, Jim. I won't work as a slave or as a slave-driver."
        </p>
        <p className="text-dark-400 text-sm">
          Dagny refuses to be part of enforcing the directive. She retreats to a cabin
          in the Berkshires to think—and to decide what is left to do with her life.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>Francisco's Call:</strong> Francisco calls Dagny the morning the directive
          is announced. "How do you like the new suspension?" he asks. "The moratorium on
          brains." He had known it was coming—another hint of his hidden knowledge of the
          looters' plans.
        </p>
      </Callout>

      {/* Rearden's Realization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Rearden's Revelation</h2>

      <p className="my-4">
        Faced with the "Gift Certificate" demanding he sign away Rearden Metal, Hank
        Rearden finally achieves full clarity about his past errors. Looking at the
        certificate, he sees the truth he had been avoiding:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Answer to All Questions</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Guilty?—guiltier than I had known, far guiltier than I had thought, that day—
          guilty of the evil of damning as guilt that which was my best. I damned the fact
          that my mind and body were a unit, and that my body responded to the values of
          my mind."
        </p>
      </div>

      <p className="my-4">
        Rearden understands that his error was accepting the looters' moral code—believing
        that his desires were shameful, that his success was somehow wrong, that he owed
        a duty to those who gave him nothing in return.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Death of Innovation</h3>
          <p className="text-dark-300 text-sm">Point Four forbids new inventions—the explicit admission that the looters fear the creative mind above all else.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Hatred as Motive</h3>
          <p className="text-dark-300 text-sm">Jim's confession reveals that the looters are driven not by love of the poor but by hatred of the successful.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Logic of Force</h3>
          <p className="text-dark-300 text-sm">Each restriction requires another—you cannot freeze jobs without freezing businesses, prices, and production.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Choice to Withdraw</h3>
          <p className="text-dark-300 text-sm">Dagny's resignation shows that even she has reached a limit—there is a point beyond which one cannot serve.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Reaches her breaking point. She cannot be part of a system that enslaves
            workers to their jobs and forbids human progress. Her resignation is not
            surrender but a refusal to be an instrument of destruction.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-dark-300 text-sm">
            Achieves philosophical clarity. He understands that his guilt was
            misplaced—he should not have been ashamed of his desires or his success.
            The Gift Certificate crystallizes his understanding.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">James Taggart</h4>
          <p className="text-dark-300 text-sm">
            Reveals his true nature in an unguarded moment. His "confession" shows
            that his motivation is not helping the poor but destroying the able—he
            would rather everyone perish than let the competent succeed.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Directive 10-289 forbids new inventions on the grounds that innovation disrupts stability. What is the relationship between innovation and stability? Is there a legitimate tension between them?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Jim Taggart confesses: "If we are to perish, let's make sure that we all perish together." What does this reveal about the psychology behind demands for equality? Is the desire to "level the playing field" always benevolent?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Fred Kinnan, the labor leader, openly admits he's "delivering the poor bastards into slavery" but argues he's still their best option. Is cynical honesty about self-interest better or worse than humanitarian rhetoric that conceals the same self-interest?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Dagny resigns rather than work as "a slave or a slave-driver." Where is the line between working within a flawed system to improve it and becoming complicit in its injustices?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Directive 10-289</strong> freezes the entire economy—forbidding
              workers from quitting, businesses from closing, and inventors from creating.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Jim Taggart's confession</strong> reveals the true motive: hatred
              of the successful, not concern for the unsuccessful.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Fred Kinnan</strong> is the only honest looter—he admits he's a
              racketeer while the others pretend to be humanitarians.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Dagny resigns</strong> rather than work as "a slave or a slave-driver"—
              she retreats to a cabin to decide her future.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Rearden achieves clarity</strong>—understanding that his error was
              accepting guilt for his virtues instead of celebrating them.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
