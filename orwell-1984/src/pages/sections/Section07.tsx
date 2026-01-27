import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Chapter 8: The Antique Shop</h2>

      <p>
        Winston ventures into the prole district, seeking evidence of the past. He
        encounters an old man who remembers life before the Revolution, and visits
        <strong> Mr. Charrington's antique shop</strong>—a decision that will seal
        his fate.
      </p>

      <h3>The Quest for the Past</h3>

      <p>
        Winston wanders through the prole quarter, searching for someone who can
        tell him what life was really like before the Party. He enters a pub and
        approaches an old man—perhaps eighty years old—who might remember.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "A sense of helplessness took hold of Winston. The old man's memory was
          nothing but a rubbish-heap of details. One could question him all day
          without getting any real information."
        </p>
      </div>

      <p>
        The old man can remember personal anecdotes—a funeral, a fight, the price of
        beer—but cannot generalize. He cannot say whether life was better or worse.
        His memories are fragments without pattern or meaning.
      </p>

      <h3>Mr. Charrington's Shop</h3>

      <p>
        Leaving the pub, Winston finds himself outside the junk shop where he bought
        his diary. He enters and meets <strong>Mr. Charrington</strong>, a gentle,
        elderly man who sells antiques from before the Revolution.
      </p>

      <Definition title="Mr. Charrington">
        <p>
          The proprietor of an antique shop in the prole district. He appears to be
          a harmless, cultured old man of about sixty, with thick spectacles and
          white hair. He speaks with a refined accent unusual for a prole and seems
          to share Winston's love of the past.
        </p>
      </Definition>

      <h3>The Glass Paperweight</h3>

      <p>
        Winston purchases a beautiful glass paperweight containing a piece of pink
        coral. The object fascinates him—it belongs to a different age, a time when
        beautiful things were made for their own sake.
      </p>

      <Example title="The Paperweight as Symbol">
        <p>
          "It was a heavy lump of glass, curved on one side, flat on the other, making
          almost a hemisphere. There was a peculiar softness, as of rainwater, in both
          the colour and the texture of the glass. At the heart of it, magnified by
          the curved surface, there was a strange, pink, convoluted object that recalled
          a rose or a sea anemone."
        </p>
        <p className="mt-2 text-dark-400">
          The paperweight comes to symbolize the fragile world Winston tries to
          preserve—a small, beautiful, private space that will be shattered by the
          Party's intrusion.
        </p>
      </Example>

      <h3>The Room Upstairs</h3>

      <p>
        Mr. Charrington shows Winston a room above the shop—a comfortable space with
        no telescreen. The room is furnished with old things: a mahogany bed, a gateleg
        table, a twelve-hour clock. Winston is entranced by this glimpse of the past.
      </p>

      <Callout type="danger">
        <strong>Foreshadowing:</strong> The room above the shop, with its absent
        telescreen and its air of privacy, will become Winston and Julia's refuge.
        But its very appeal marks it as a trap. There is a telescreen hidden behind
        the picture of St. Clement's Church.
      </Callout>

      <h3>"Oranges and Lemons"</h3>

      <p>
        Mr. Charrington teaches Winston a fragment of an old nursery rhyme about the
        bells of London's churches. Winston is fascinated by this surviving scrap of
        the past.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">The Rhyme</p>
        <p className="mt-2 italic text-dark-300">
          "Oranges and lemons, say the bells of St Clement's,<br />
          You owe me three farthings, say the bells of St Martin's..."
        </p>
        <p className="mt-2 text-dark-400">
          The rhyme ends: "Here comes a candle to light you to bed, / Here comes a
          chopper to chop off your head." This ominous conclusion foreshadows
          Winston's fate.
        </p>
      </div>

      <h3>The Dark-Haired Girl</h3>

      <p>
        As Winston leaves the shop, he sees the dark-haired girl from the Two Minutes
        Hate. Terror seizes him—she must be spying on him. He is certain she is an
        agent of the Thought Police.
      </p>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">The Past as Refuge:</strong> Winston's quest
          for artifacts and memories of another time
        </li>
        <li>
          <strong className="text-rose-400">Memory's Unreliability:</strong> The old man's
          inability to provide meaningful testimony
        </li>
        <li>
          <strong className="text-rose-400">Beauty and Danger:</strong> The fatal attraction
          of beautiful, forbidden things
        </li>
        <li>
          <strong className="text-rose-400">Surveillance and Paranoia:</strong> The
          impossibility of knowing whom to trust
        </li>
      </ul>

      <Callout type="info">
        <strong>End of Part One:</strong> With this chapter, Part One of the novel
        concludes. Winston has established his thoughtcrime, found a potential
        sanctuary, and glimpsed both hope (the proles) and danger (the dark-haired
        girl). Part Two will bring dramatic changes to his situation.
      </Callout>
    </LessonLayout>
  );
}
