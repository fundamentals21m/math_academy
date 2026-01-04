import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "You who would not submit to the hardships of nature, but set out to conquer it—to what have you submitted at the hands of men?"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Francisco d'Anconia to Hank Rearden
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Sanction of the Victim" contains one of the novel's most important philosophical
        revelations. In a late-night conversation at Rearden's mills, Francisco d'Anconia
        helps Rearden understand the mechanism by which the looters maintain their power:
        they depend entirely on the cooperation of their victims.
      </p>

      <Callout type="info">
        <p>
          <strong>The Central Insight:</strong> The looters cannot survive without the sanction
          of their victims. Their power comes not from their own strength but from the
          willingness of the productive to accept guilt and continue producing for those
          who despise them.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Francisco visits Rearden at his steel mills late at night. What begins as apparent
        small talk becomes a Socratic dialogue in which Francisco systematically dismantles
        the moral premises that keep Rearden chained to his destroyers.
      </p>

      <p className="my-4">
        Through careful questioning, Francisco leads Rearden to see that he has accepted a
        false moral code—one that equates virtue with suffering and demands that the able
        serve the incompetent. The conversation transforms Rearden's understanding of his
        own situation.
      </p>

      {/* The Moral Code of Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Morality of the Mills</h2>

      <p className="my-4">
        Francisco points to Rearden's mills and asks him to see them as a moral statement:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Production as Moral Action</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "If you want to see an abstract principle, such as moral action, in material
          form—there it is. Every girder of it, every pipe, wire and valve was put there
          by a choice in answer to the question: right or wrong?"
        </p>
        <p className="text-dark-400 text-sm">
          Francisco shows Rearden that his mills embody a moral code—the commitment to
          truth, to the best possible outcome, to reality as the standard of value.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "You had to act on your own judgment, you had to have the capacity to judge,
          the courage to stand on the verdict of your mind, and the purest, the most
          ruthless consecration to the rule of doing right, of doing the best, the
          utmost best possible to you."
        </p>
      </div>

      {/* The Contradiction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Contradiction</h2>

      <p className="my-4">
        Francisco then poses the crucial question: Why does Rearden live by one code when
        dealing with nature but another when dealing with men?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Double Standard</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Nothing could have made you act against your judgment, and you would have
          rejected as wrong—as evil—any man who attempted to tell you that the best way
          to heat a furnace was to fill it with ice. Millions of men, an entire nation,
          were not able to deter you from producing Rearden Metal... But what I wonder
          about, Mr. Rearden, is why you live by one code of principles when you deal
          with nature and by another when you deal with men?"
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Paradox of Success:</strong> Rearden's production of Rearden Metal
          has made his life harder, not easier. His greatest achievement has become the
          tool of his persecution. This, Francisco argues, is the result of accepting a
          false moral code.
        </p>
      </Callout>

      {/* The Three Kinds of Men */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Three Kinds of Men</h2>

      <p className="my-4">
        Francisco asks Rearden to consider three types of men who might use his rail:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Giants</h4>
          <p className="text-sm text-dark-300">
            Men like Ellis Wyatt—productive equals who would use Rearden's rail to
            reach still higher achievements of their own.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Honest Workers</h4>
          <p className="text-sm text-dark-300">
            Men like Eddie Willers—who cannot match Rearden's genius but share his
            moral integrity and give their best effort.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Looters</h4>
          <p className="text-sm text-dark-300">
            Whining rotters who demand the income of a company president while doing
            nothing, who ride on his rail and sneer at him.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Rearden's Answer</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "I'd blast that rail first."
        </p>
        <p className="text-dark-400 text-sm">
          When asked if he would want his rail used by looters who despise him,
          Rearden's answer is immediate and absolute.
        </p>
      </div>

      {/* The Sanction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Sanction of the Victim</h2>

      <p className="my-4">
        Francisco reveals the key to the looters' power:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Source of Their Power</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "You take pride in setting no limit to your endurance, Mr. Rearden, because
          you think that you are doing right. What if you aren't? What if you're placing
          your virtue in the service of evil and letting it become a tool for the
          destruction of everything you love, respect and admire?"
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "You, who would not submit to the hardships of nature, but set out to conquer
          it and placed it in the service of your joy and your comfort—to what have you
          submitted at the hands of men? You, who know from your work that one bears
          punishment only for being wrong—what have you been willing to bear and for
          what reason?"
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Key Insight:</strong> The looters' power depends entirely on the
          victims' acceptance of guilt. They need producers like Rearden to feel that
          they deserve punishment, that their success is somehow shameful. Without this
          sanction, the looters are powerless.
        </p>
      </Callout>

      {/* Lillian's Game */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mechanism at Home</h2>

      <p className="my-4">
        The chapter also shows Rearden beginning to understand Lillian's manipulation of him.
        He realizes that her power over him depends entirely on his own virtues—his sense of
        honor, his compassion, his desire to do right.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Formula of Evil</h4>
        <p className="text-dark-200 text-lg mb-4">
          "What sort of code permitted the concept of a punishment that required the
          victim's own virtue as the fuel to make it work? A code which would destroy
          only those who tried to observe it; a punishment, from which only the honest
          would suffer, while the dishonest would escape unhurt."
        </p>
        <p className="text-dark-400 text-sm">
          Rearden grasps the formula of the evil he faces: a system that uses virtue
          as a weapon against the virtuous.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Sanction Required</h3>
          <p className="text-dark-300 text-sm">Evil cannot succeed without the cooperation of its victims. The looters need producers to accept guilt and keep producing.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Virtue as Weapon</h3>
          <p className="text-dark-300 text-sm">The looters use the victim's own virtues—honesty, compassion, sense of duty—as tools of control.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Production as Morality</h3>
          <p className="text-dark-300 text-sm">Rearden's mills embody a moral code—the commitment to reality, to the best possible outcome, to truth.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Double Standard</h3>
          <p className="text-dark-300 text-sm">Rearden applies rigorous standards to his work but accepts chaos in his moral life—a contradiction he must resolve.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-dark-300 text-sm">
            Begins to understand the nature of the trap he's in. Francisco's questions
            lead him to see that his suffering is not inevitable—it's the result of
            accepting a false moral code. This is a turning point in his development.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-dark-300 text-sm">
            Reveals himself as a philosopher and teacher, not just a playboy. His
            method—leading Rearden to discover the truth through questions rather than
            telling him—shows both his wisdom and his respect for Rearden's mind.
          </p>
        </div>
      </div>

      {/* The Friendship */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">An Unexpected Friendship</h2>

      <p className="my-4">
        Despite all evidence suggesting Francisco is a destroyer, Rearden finds himself
        drawn to him:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "I know that he's a liar, a loafer, a cheap playboy, the most viciously
          irresponsible waste of a human being I ever imagined possible. Yet, when I
          look at him, I feel that if ever there was a man to whom I would entrust my
          life, he's the one."
        </p>
        <p className="text-dark-400 text-sm">
          — Rearden to Dagny, about Francisco
        </p>
      </div>

      <p className="my-4">
        When Dagny asks what Francisco makes him feel, Rearden answers with a single word:
        <strong className="text-amber-400"> "Hope."</strong>
      </p>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Francisco asks why Rearden applies rigorous standards to his work but accepts chaos in his dealings with people. Can you identify areas in your own life where you apply different standards to different domains?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The chapter introduces the concept of "the sanction of the victim"—that oppressors need their victims' cooperation to maintain power. Can you think of historical or contemporary examples where withdrawing this sanction has been effective?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Francisco describes Rearden's mills as a moral statement—"every girder of it, every pipe, wire and valve was put there by a choice in answer to the question: right or wrong?" How does productive work embody moral choices?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Despite believing Francisco is "a liar, a loafer, a cheap playboy," Rearden feels that Francisco is the one man to whom he would entrust his life. What might explain this contradiction between evidence and intuition?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The sanction of the victim</strong> is the key to the looters'
              power—they depend entirely on the producers' acceptance of guilt.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Production embodies a moral code</strong>—the commitment to truth,
              reality, and doing the best possible work.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Rearden lives by a double standard</strong>—rigorous with nature,
              submissive with men—and this contradiction is destroying him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The looters use virtue as a weapon</strong>—turning the victim's
              own honor, compassion, and sense of duty against him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Francisco gives Rearden hope</strong>—despite everything, Rearden
              senses that Francisco represents a way out of the trap.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
