import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Chapter 2: The Parsons Family</h2>

      <p>
        Winston is interrupted from writing in his diary by a knock at the door. It
        is <strong>Mrs. Parsons</strong>, his neighbor, asking for help with a blocked
        sink. Her visit introduces us to the terrifying reality of family life under
        the Party.
      </p>

      <h3>The Parsons Family</h3>

      <p>
        Tom Parsons is Winston's colleague at the Ministry of Truth—a fat, sweaty man
        of "paralysing stupidity" who is utterly devoted to the Party. His wife is a
        dusty, defeated-looking woman who lives in constant fear of her own children.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "With those children, thought Winston, that wretched woman must lead a life
          of terror. Another year, two years, and they would be watching her night and
          day for symptoms of unorthodoxy."
        </p>
      </div>

      <h3>The Spies and Youth Leagues</h3>

      <p>
        The Parsons children are members of the <strong>Spies</strong>—the youth
        organization that indoctrinates children into Party ideology and encourages
        them to report any signs of unorthodoxy, even in their own parents.
      </p>

      <Definition title="The Spies">
        <p>
          A youth organization for children under the Junior Anti-Sex League. Children
          are taught to worship Big Brother and spy on their parents and neighbors.
          Many parents have been denounced by their own children for thoughtcrime—sometimes
          for words spoken in their sleep.
        </p>
      </Definition>

      <p>
        The Parsons children terrorize their mother, playing at being Thought Police
        and demanding to go see public hangings. When Winston enters, they immediately
        accuse him of being a "traitor" and a "thought-criminal," pointing a toy
        pistol at his head.
      </p>

      <Example title="Children as Instruments of Terror">
        <p>
          "Nearly all children nowadays were horrible. What was worst of all was that
          by means of such organizations as the Spies they were systematically turned
          into ungovernable little savages, and yet this produced in them no tendency
          whatever to rebel against the discipline of the Party."
        </p>
        <p className="mt-2">
          The children worship Big Brother with a "sort of frenzy" and are "systematically
          turned against their parents."
        </p>
      </Example>

      <h3>The Destruction of the Family</h3>

      <p>
        The Party understands that family loyalty threatens its total control. By
        turning children into spies and encouraging them to denounce their parents,
        the Party has effectively destroyed the family as an institution of trust
        and love.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Children are taught to spy on their parents from early childhood</li>
        <li>Denouncing family members is considered heroic</li>
        <li>Parents live in fear of their own children</li>
        <li>Family loyalty is redirected toward Big Brother</li>
      </ul>

      <Callout type="danger">
        <strong>Foreshadowing:</strong> The Parsons children's behavior foreshadows
        a later revelation in the novel. Tom Parsons himself will eventually be
        arrested for thoughtcrime—denounced by his own daughter for saying "Down
        with Big Brother" in his sleep.
      </Callout>

      <h3>Winston Returns to His Diary</h3>

      <p>
        After returning to his flat, Winston continues writing in his diary. He
        records a memory from that morning's Two Minutes Hate—particularly the moment
        when his eyes met those of O'Brien. Winston believes he saw a flash of
        understanding, a hint that O'Brien might share his hatred of the Party.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "I understand HOW: I do not understand WHY."
        </p>
        <p className="mt-2 text-dark-400">
          Winston writes this about the Party's methods. He can see the mechanisms
          of control, but cannot fathom what drives the Party's hunger for power.
        </p>
      </div>

      <h3>The Knock at the Door</h3>

      <p>
        The chapter ends with a terrifying moment. There is another knock at the
        door. Winston knows that this could be the Thought Police—that his diary
        has been discovered and his life is over. He sits frozen, certain that
        death has arrived.
      </p>

      <Callout type="info">
        <strong>Narrative Technique:</strong> Orwell uses the knock at the door as a
        recurring motif throughout the novel. Each knock represents the ever-present
        threat of discovery and the psychological terror of living under constant
        surveillance.
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Family as Enemy:</strong> The Party's systematic
          destruction of family bonds
        </li>
        <li>
          <strong className="text-rose-400">Children as Weapons:</strong> Youth organizations
          that weaponize children against their parents
        </li>
        <li>
          <strong className="text-rose-400">Psychological Terror:</strong> The constant
          fear of denunciation and arrest
        </li>
        <li>
          <strong className="text-rose-400">False Hope:</strong> Winston's belief that
          O'Brien shares his dissent
        </li>
      </ul>
    </LessonLayout>
  );
}
