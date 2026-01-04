import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Dagny, we can never lose the things we live for. We may have to change their form
        at times, if we've made an error, but the purpose remains the same and the forms
        are ours to make."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Francisco d'Anconia to Dagny
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "By Our Love" shows Dagny in her mountain retreat after resigning from Taggart
        Transcontinental. When Francisco arrives, their reunion reveals the depth of what
        they have lost and what they still share. The chapter explores the meaning of love,
        the nature of the strike, and the mystery that has haunted Dagny since the beginning.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> "By Our Love" refers to Francisco's
          revelation that the strikers have been motivated by their love for the world
          they are trying to save—not by hatred or destruction. They withdrew their
          minds because they loved life too much to let it be consumed by looters.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Dagny has retreated to a hunting cabin in the Berkshire Mountains—a place inherited
        from her father that she has not visited in years. She spends her days rebuilding
        the cabin, planting flowers, fixing the roof—trying to find peace, trying to decide
        what is left of her life.
      </p>

      <p className="my-4">
        Francisco finds her there. Their meeting is like a scene from their childhood—the
        future as it should have been, if everything had gone as they once expected. But
        now Francisco can finally tell her the truth about the twelve years of pain and
        apparent betrayal.
      </p>

      {/* The Reunion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Reunion</h2>

      <p className="my-4">
        When Francisco appears, coming up the hill toward her cabin, Dagny experiences a
        moment of pure recognition—as if the years of pain had not happened, as if they
        were meeting in the future they had once imagined together:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Greeting</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "Hi, Slug!"<br /><br />
          "Hi, Frisco!"
        </p>
        <p className="text-dark-400 text-sm">
          Their childhood nicknames, used for the first time in years—a recognition
          that despite everything, the essential connection between them has survived.
        </p>
      </div>

      <p className="my-4">
        When he reaches her, Francisco takes her in his arms with a desperate intensity—
        and Dagny knows that this is the confession he has never spoken, the acknowledgment
        that he has never stopped loving her:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "The desperate violence of the way he held her, the hurting pressure of his mouth
          on hers, the exultant surrender of his body to the touch of hers, were not the
          form of a moment's pleasure—she knew that no physical hunger could bring a man
          to this—she knew that it was the statement she had never heard from him, the
          greatest confession of love a man could make."
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Truth Revealed:</strong> Francisco can now tell Dagny everything—
          the secret he has kept for twelve years, the reason for his apparent destruction,
          the purpose behind his playboy mask. The time of concealment is ending.
        </p>
      </Callout>

      {/* The Strike Explained */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Strike Explained</h2>

      <p className="my-4">
        Francisco asks Dagny if she has thought about the men who quit and vanished.
        She admits that she has—and that she no longer blames them:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Understanding the Strikers</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "I used to think that there was some destroyer who came after them and made
          them quit. But I guess there wasn't. There have been times, this past month,
          when I've almost wished he would come for me, too. But nobody came."
        </p>
        <p className="text-dark-400 text-sm">
          Francisco's quiet response: "No?"
        </p>
      </div>

      <p className="my-4">
        Dagny admits that she now understands what the vanished producers felt—and why
        they left. She would have betrayed Taggart Transcontinental by staying:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "If I had agreed to serve the looters, it's Nat Taggart that I would have
          delivered to them. I couldn't let his achievement, and mine, end up with the
          looters as our final goal."
        </p>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Purpose Remains</h4>
          <p className="text-sm text-dark-300">
            Francisco tells Dagny that they can never lose what they live for—only
            the form may change, not the essential purpose.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Destroyer's Secret</h4>
          <p className="text-sm text-dark-300">
            Dagny has believed there was a "destroyer" taking the world's producers.
            Francisco begins to hint that she is closer to the truth than she knows.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No Betrayal in Leaving</h4>
          <p className="text-sm text-dark-300">
            Dagny understands that staying to serve the looters would have been the
            real betrayal—not leaving.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Question of Twelve Years</h4>
          <p className="text-sm text-dark-300">
            Francisco asks if Dagny could have made this choice twelve years ago.
            Her answer—"No"—vindicates his decision to wait.
          </p>
        </Card>
      </CardGrid>

      {/* Richard Halley's Music */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Music of Richard Halley</h2>

      <p className="my-4">
        As Francisco walks up the hill, Dagny hears him whistling a piece of music—
        the Fifth Concerto by Richard Halley. But Richard Halley only wrote four
        concertos before he vanished:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">A Mystery Deepened</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "It was the Fifth Concerto by Richard Halley, wasn't it?"<br /><br />
          "Oh . . . !" He looked startled, then smiled in amusement at himself, then
          answered gravely, "I'll tell you that later."
        </p>
        <p className="text-dark-400 text-sm">
          Another hint about where the vanished producers have gone—and what they
          have been doing.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>The Fifth Concerto:</strong> Richard Halley disappeared after his
          opera was finally recognized—after decades of rejection. If Francisco knows
          his Fifth Concerto, it means Halley has been composing in hiding. But where?
        </p>
      </Callout>

      {/* Love and Values */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Love and Values</h2>

      <p className="my-4">
        The chapter deepens the novel's exploration of love as a response to values.
        Francisco's love for Dagny has survived twelve years of apparent betrayal because
        it was based on their shared understanding of what matters in life:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "No matter what he had done to wreck his life, this was still the Francisco
          d'Anconia in whose bed she had been so proud of belonging—no matter what
          betrayals she had met from the world, her vision of life had been true and
          some indestructible part of it had remained within him."
        </p>
      </div>

      <p className="my-4">
        But Dagny pulls away—not from lack of desire, but because she cannot yet forgive
        what she believes Francisco has done. He accepts this:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "Not yet. You have a great deal to forgive me, first. But I can tell you
          everything now."
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Love as Recognition</h3>
          <p className="text-dark-300 text-sm">The reunion of Dagny and Francisco shows that true love survives because it is based on shared values, not circumstance.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Time to Choose</h3>
          <p className="text-dark-300 text-sm">Dagny has reached the point Francisco reached twelve years ago—understanding that serving the looters is the real betrayal.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Purpose Over Form</h3>
          <p className="text-dark-300 text-sm">We may have to change the form of our work, but the essential purpose—the love of life—remains.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Secret World</h3>
          <p className="text-dark-300 text-sm">Hints about Richard Halley's music and Francisco's knowledge suggest a hidden refuge where the strikers continue their work.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Has reached the understanding that she cannot serve the looters. She now
            comprehends what the vanished producers felt—and why they left. But she
            does not yet know where they have gone or what awaits her.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-dark-300 text-sm">
            Can finally begin to reveal the truth. His joy at seeing Dagny reach
            understanding is palpable—the twelve years of waiting are vindicated.
            He has never stopped loving her, and now he can show it.
          </p>
        </div>
      </div>

      {/* The Return */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Summons Back</h2>

      <p className="my-4">
        Despite her resolution to stay away, Dagny cannot escape the world she loves.
        When she learns of the tunnel disaster through a radio broadcast, she knows
        she must return:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <p className="text-dark-200 text-lg mb-4">
          The destruction of the Winston Tunnel changes everything. With no rail route
          through the mountains, Taggart Transcontinental faces collapse. Dagny knows
          that she cannot stand by while everything she built is destroyed.
        </p>
        <p className="text-dark-400 text-sm">
          Her return to work is not a surrender—it is the choice she makes because
          she is not yet ready to give up on the world.
        </p>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Dagny realizes that "staying to serve the looters would have been the real betrayal—not leaving." When does perseverance become complicity? How do we know when it's time to walk away from something we've built?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Francisco asks Dagny if she could have made the choice to leave twelve years ago. She admits "No." What does this suggest about the role of personal growth and readiness in making life-changing decisions?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Francisco whistles Richard Halley's Fifth Concerto—a piece that should not exist because Halley only wrote four concertos before vanishing. What does the existence of hidden artistic creation suggest about the relationship between creators and their audience?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Despite her resolution to stay away, Dagny returns when she hears about the tunnel disaster. Is her return a failure of resolve, or is it a demonstration of her values? What does it mean to be unable to abandon something you love?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Francisco finds Dagny</strong> at her mountain cabin and reveals
              that his love for her has never ended—that he can now tell her everything.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dagny understands</strong> why the producers left—she would have
              betrayed her values by continuing to serve the looters.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Francisco whistles Richard Halley's Fifth Concerto</strong>—a
              piece that should not exist, hinting at a hidden world where the strikers
              continue to create.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>We can never lose what we live for</strong>—only the form may
              change, but the purpose remains.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The tunnel disaster</strong> brings Dagny back to the railroad—
              she cannot abandon the world while there is still a chance to save it.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
