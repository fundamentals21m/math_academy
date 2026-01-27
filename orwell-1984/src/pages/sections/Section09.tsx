import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { DoublethinkExplorer } from '@/components/visualizations';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Part Two, Chapter 2: The Golden Country</h2>

      <p>
        Winston and <strong>Julia</strong>—we finally learn her name—meet in the
        countryside, in a landscape that Winston recognizes as the Golden Country
        from his dreams. Their first real conversation reveals Julia's philosophy
        of rebellion.
      </p>

      <h3>The Journey</h3>

      <p>
        Following Julia's directions, Winston takes a train to the countryside and
        walks to a secluded spot. When Julia arrives, she leads him to a hidden
        clearing surrounded by trees—a place without microphones or telescreens.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "It was the Golden Country—almost... A thrush was singing somewhere, but
          there was also a faint murmur of distant traffic. It was not a place that
          he had ever been to, but it was a place that he had always known."
        </p>
      </div>

      <h3>Julia</h3>

      <Definition title="Julia">
        <p>
          A twenty-six-year-old woman who works in the Fiction Department at the
          Ministry of Truth, operating the novel-writing machines. She wears the
          scarlet sash of the Junior Anti-Sex League—which she despises. Unlike
          Winston, she has no intellectual hatred of the Party; her rebellion is
          purely personal and sensual.
        </p>
      </Definition>

      <p>
        Julia's first act is to produce a packet of real chocolate and real coffee—luxuries
        available only on the black market. She has survived by appearing to be an
        orthodox zealot while secretly breaking every rule she can.
      </p>

      <h3>Their First Conversation</h3>

      <p>
        They talk freely for the first time. Julia explains that she recognized
        Winston as a thought-criminal by the look in his eyes—the same way Winston
        thought he recognized O'Brien.
      </p>

      <Example title="Julia's Rebellion">
        <p>
          Julia has been engaging in thoughtcrime since she was sixteen. She has
          had numerous affairs with Party members, seeing sex as a direct attack
          on the Party's control:
        </p>
        <p className="mt-2 italic">
          "I hate purity, I hate goodness! I don't want any virtue to exist anywhere.
          I want everyone to be corrupt to the bones."
        </p>
        <p className="mt-2">
          When she tells Winston about her previous lovers, he is delighted rather
          than jealous. Every act of desire is a blow against Big Brother.
        </p>
      </Example>

      <h3>The Political and the Personal</h3>

      <p>
        Winston and Julia's affair immediately takes on political meaning. Their
        desire is itself an act of rebellion:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Their embrace had been a battle, the climax a victory. It was a blow struck
          against the Party. It was a political act."
        </p>
      </div>

      <h3>The Thrush's Song</h3>

      <p>
        A thrush sings nearby, pouring out its song without purpose or audience.
        Winston is moved by this image of pure, unmotivated beauty—something that
        could never exist in the world of the Party.
      </p>

      <Callout type="info">
        <strong>Symbol:</strong> The thrush, singing for no reason but its own
        nature, represents the kind of freedom that the Party cannot permit.
        Art, beauty, and desire must serve the Party—or be destroyed. The thrush
        exists outside ideology.
      </Callout>

      <h3>Julia's Practicality</h3>

      <p>
        Unlike Winston, Julia has no interest in understanding the Party's philosophy
        or fighting it systematically. She simply wants to enjoy life and break rules.
        She falls asleep when Winston talks about history and politics.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>She doesn't care about the Party's lies—only about her own pleasure</li>
        <li>She thinks the war is probably fake, but it doesn't concern her</li>
        <li>She wants to rebel, not to understand</li>
        <li>Her resistance is sensual and personal, not intellectual</li>
      </ul>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Sex as Rebellion:</strong> Physical desire
          as direct challenge to Party control
        </li>
        <li>
          <strong className="text-rose-400">Nature as Freedom:</strong> The Golden Country
          as space outside the Party's reach
        </li>
        <li>
          <strong className="text-rose-400">Different Rebellions:</strong> Winston's
          intellectual resistance vs. Julia's sensual defiance
        </li>
        <li>
          <strong className="text-rose-400">Corruption as Liberation:</strong> Julia's
          paradoxical morality
        </li>
      </ul>

      <Callout type="warning">
        <strong>Contrasts:</strong> Julia and Winston represent different responses
        to totalitarianism. His is philosophical; hers is practical. His is driven
        by truth; hers by pleasure. These differences will become significant in
        their ultimate fates.
      </Callout>

      <h3>Interactive: Doublethink Explorer</h3>
      <p className="mb-4">
        Explore the contradictory slogans and practices of the Party. How does
        doublethink work?
      </p>
      <DoublethinkExplorer />
    </LessonLayout>
  );
}
