import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Example } from '@/components/common/ContentBlocks';
import { CharacterMap } from '@/components/visualizations';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Part Two, Chapter 1: "I Love You"</h2>

      <p>
        Part Two begins with a dramatic twist: the dark-haired girl whom Winston
        believed to be a spy passes him a note containing three words that change
        everything: <strong>"I love you."</strong>
      </p>

      <h3>The Note</h3>

      <p>
        Days after Winston saw her in the prole quarter, the girl stumbles and falls
        in a corridor at the Ministry of Truth. As Winston helps her up, she presses
        a folded paper into his hand. He must wait hours before he can safely read it.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-2xl font-bold text-rose-400">
          "I love you."
        </p>
        <p className="mt-2 text-dark-400">
          Three words that constitute thoughtcrime—and salvation.
        </p>
      </div>

      <h3>Winston's Transformation</h3>

      <p>
        The effect of the note is immediate and profound. Winston's fear transforms
        into a desperate desire to live. His instinct for self-preservation, which
        had been crushed, suddenly revives.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "The desire to stay alive had become almost a physical hunger... At this
          moment, if anything, his vague desire to save her was stronger than his
          desire to save himself."
        </p>
      </div>

      <h3>The Difficulty of Meeting</h3>

      <p>
        Winston must find a way to meet the girl without being observed. This is
        extraordinarily difficult:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Telescreens are everywhere</li>
        <li>Patrols monitor public spaces</li>
        <li>Any unexplained conversation is suspicious</li>
        <li>Even looking at someone too long could be noticed</li>
      </ul>

      <p>
        For days, Winston can only catch glimpses of her across the canteen. Finally,
        they manage to sit at the same table, speaking without appearing to communicate.
      </p>

      <Example title="Speaking Without Speaking">
        <p>
          "It was not safe even to look in one another's direction. She never looked
          at him... They did actually communicate, by tiny barely perceptible
          movements of the hand, without either of them having to speak."
        </p>
        <p className="mt-2">
          They arrange to meet in Victory Square during the evening crowds, when
          surveillance is more difficult.
        </p>
      </Example>

      <h3>The Meeting in Victory Square</h3>

      <p>
        They meet briefly among the crowds watching a convoy of Eurasian prisoners.
        The girl whispers directions to a place in the countryside where they can
        meet secretly. Winston is overwhelmed by her competence and daring.
      </p>

      <Callout type="info">
        <strong>The Girl's Name:</strong> We will not learn the girl's name until
        the next chapter. She has been presented as a threat and an enigma; now
        she becomes an ally and lover. The delayed revelation of her name emphasizes
        her transformation in Winston's perception.
      </Callout>

      <h3>Love as Rebellion</h3>

      <p>
        The girl's declaration is not merely personal—it is political. In Oceania,
        love between individuals is a form of rebellion because it creates loyalty
        outside the Party.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Insight</p>
        <p className="mt-2 text-dark-300">
          The Party has tried to eliminate sexual desire and romantic love because
          these feelings cannot be controlled. The girl's note is an act of treason
          as much as an expression of emotion.
        </p>
      </div>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Love as Political Act:</strong> Personal
          attachment as rebellion against totalitarianism
        </li>
        <li>
          <strong className="text-rose-400">Hope and Survival:</strong> How human
          connection revives the will to live
        </li>
        <li>
          <strong className="text-rose-400">Surveillance and Intimacy:</strong> The
          elaborate precautions required for private communication
        </li>
        <li>
          <strong className="text-rose-400">Trust and Risk:</strong> Winston's decision
          to believe in the girl despite his fears
        </li>
      </ul>

      <Callout type="warning">
        <strong>Dramatic Irony:</strong> The reader, like Winston, does not yet know
        whether to trust this development. The girl's sudden declaration could be
        genuine—or it could be an elaborate trap set by the Thought Police.
      </Callout>

      <h3>Interactive: Character Relationships</h3>
      <p className="mb-4">
        Explore the characters of Nineteen Eighty-Four and their complex relationships.
      </p>
      <CharacterMap />
    </LessonLayout>
  );
}
