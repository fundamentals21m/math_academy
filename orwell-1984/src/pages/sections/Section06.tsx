import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Chapter 7: The Proles</h2>

      <p>
        Winston writes in his diary his most dangerous thought yet: "If there is hope,
        it lies in the proles." This chapter explores his reflections on the proletariat
        and their potential as agents of revolution.
      </p>

      <h3>"If There Is Hope..."</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/20 text-center my-6">
        <p className="text-xl font-bold text-rose-400">
          "If there is hope, it lies in the proles."
        </p>
      </div>

      <p>
        The proles comprise 85% of Oceania's population. They are the only force
        numerous enough to overthrow the Party—yet they have no desire to do so.
        Like cattle, they are kept docile through a combination of poverty, ignorance,
        and carefully managed entertainment.
      </p>

      <Definition title="The Proles">
        <p>
          The proletariat—the working masses who live outside the Party structure.
          They are not monitored by telescreens, may engage in private relationships,
          and are largely ignored by the Thought Police. The Party considers them
          beneath suspicion: "Proles and animals are free."
        </p>
      </Definition>

      <h3>The Party's Contempt</h3>

      <p>
        The Party's attitude toward the proles is one of supreme contempt. They are
        treated not as enemies but as non-persons—irrelevant masses to be managed
        rather than converted.
      </p>

      <Example title="Entertainment for the Proles">
        <p>
          The proles are kept pacified through:
        </p>
        <ul className="mt-2 space-y-1">
          <li><strong>The Lottery:</strong> A rigged gambling system that maintains hope</li>
          <li><strong>Pornography:</strong> Produced by the Ministry of Truth's "Pornosec"</li>
          <li><strong>Cheap newspapers:</strong> Full of crime, sports, and horoscopes</li>
          <li><strong>Sentimental songs:</strong> Written by machines called "versificators"</li>
        </ul>
        <p className="mt-2 text-dark-400">
          "Heavy physical work, the care of home and children, petty quarrels with
          neighbors, films, football, beer, and above all, gambling, filled up the
          horizon of their minds."
        </p>
      </Example>

      <h3>Winston's Paradox</h3>

      <p>
        Winston understands the cruel paradox: the proles would need to become conscious
        to rebel, but they cannot become conscious until after they have rebelled.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Until they become conscious they will never rebel, and until after they
          have rebelled they cannot become conscious."
        </p>
      </div>

      <h3>The Proles' Vitality</h3>

      <p>
        Despite his pessimism, Winston is drawn to the proles' vitality. They retain
        human emotions—love, loyalty, family bonds—that have been crushed in Party
        members. They still sing, still care for their children, still quarrel with
        their neighbors over trivial things.
      </p>

      <Callout type="info">
        <strong>Human Nature:</strong> The proles represent Orwell's belief that
        human nature persists despite oppression. Their "animal" passions—love,
        sex, family—are exactly what the Party has trained out of its members.
        In this sense, they are more fully human than Winston himself.
      </Callout>

      <h3>The Historical Record</h3>

      <p>
        Winston tries to find evidence that life was once better than the Party claims.
        He searches history books, but all have been rewritten. The Party asserts that
        before the Revolution, capitalists exploited the masses terribly—but can Winston
        trust these accounts?
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>All history books claim the past was worse</li>
        <li>No contradictory evidence exists</li>
        <li>Winston's own memories are fragmentary</li>
        <li>The older generation cannot articulate their memories</li>
      </ul>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Class and Revolution:</strong> The masses'
          potential for and failure to achieve liberation
        </li>
        <li>
          <strong className="text-rose-400">Consciousness and Action:</strong> The chicken-and-egg
          problem of revolutionary awareness
        </li>
        <li>
          <strong className="text-rose-400">Human Nature:</strong> What survives under
          totalitarianism and what is destroyed
        </li>
        <li>
          <strong className="text-rose-400">Hope and Despair:</strong> Winston's conflicted
          assessment of the possibility of change
        </li>
      </ul>

      <Callout type="warning">
        <strong>Orwell's Politics:</strong> As a democratic socialist, Orwell believed
        in the revolutionary potential of the working class. <em>Nineteen Eighty-Four</em>
        can be read as a dark meditation on what happens when that potential is
        systematically neutralized through propaganda and distraction.
      </Callout>
    </LessonLayout>
  );
}
