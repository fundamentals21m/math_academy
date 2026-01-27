import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition } from '@/components/common/ContentBlocks';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Chapter 6: Marriage and the Party</h2>

      <p>
        In his diary, Winston records memories of his <strong>marriage to Katharine</strong>,
        revealing the Party's systematic destruction of intimacy and its total control
        over human sexuality.
      </p>

      <h3>Winston's Marriage</h3>

      <p>
        Winston married Katharine about eleven years ago. They separated after only
        fifteen months—divorce is not permitted, but separation is common when couples
        produce no children. Katharine was beautiful but utterly orthodox, and Winston
        remembers her with a mixture of revulsion and pity.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "She had without exception the most stupid, vulgar, empty mind that he had
          ever encountered. She had not a thought in her head that was not a slogan,
          and there was no imbecility, absolutely none, that she was not capable of
          swallowing if the Party handed it out to her."
        </p>
      </div>

      <h3>The Party and Sex</h3>

      <p>
        The Party has declared war on the sexual instinct. While it cannot eliminate
        sex entirely (children must be produced), it works to remove all pleasure
        and intimacy from the act.
      </p>

      <Definition title="The Party's Sexual Puritanism">
        <p>
          The Party views sexual desire as a dangerous energy that could be directed
          against it. Therefore:
        </p>
        <ul className="mt-2 space-y-1">
          <li>Sex is permitted only within marriage, for procreation only</li>
          <li>All pleasure in the act is discouraged as "goodthinkful"</li>
          <li>The Junior Anti-Sex League promotes complete celibacy</li>
          <li>Artificial insemination ("artsem") is discussed as the ideal future</li>
        </ul>
      </Definition>

      <h3>Katharine's "Duty to the Party"</h3>

      <p>
        Winston recalls with horror how Katharine would submit to sex as a "duty to
        the Party"—the production of children. She called it "making a baby" and
        approached it with grim determination, as if performing a "slightly disgusting
        minor operation."
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "As soon as he touched her she seemed to wince and stiffen. To embrace her
          was like embracing a jointed wooden image. And what was strange was that even
          when she was clasping him against her he had the feeling that she was simultaneously
          pushing him away with all her strength."
        </p>
      </div>

      <h3>Sexual Desire as Rebellion</h3>

      <p>
        Winston comes to understand that sexual desire itself is an act of rebellion.
        The Party cannot permit love or lust because these are private emotions that
        create loyalties outside its control.
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Desire directs energy away from the Party</li>
        <li>Love creates private loyalties that threaten collective devotion</li>
        <li>Physical pleasure is a form of individual freedom</li>
        <li>The Party wants citizens who can love only Big Brother</li>
      </ul>

      <Callout type="warning">
        <strong>Foreshadowing:</strong> Winston's thoughts about sexuality and rebellion
        anticipate his relationship with Julia. Their affair will be an act of political
        rebellion as much as personal passion—a point Julia will articulate explicitly.
      </Callout>

      <h3>Winston's Encounters with Prostitutes</h3>

      <p>
        Winston confesses in his diary to visiting prostitutes in the prole districts.
        Prostitution is illegal but tolerated by the Party as long as it remains secret
        and joyless. Winston recalls a "dreadful" encounter with an old, toothless woman
        that left him filled with revulsion.
      </p>

      <Callout type="info">
        <strong>Class Distinctions:</strong> While Party members are expected to be
        sexually pure, the proles are allowed more freedom. The Party considers
        them too insignificant to control completely. This double standard will
        become important when Winston seeks freedom in the prole districts.
      </Callout>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Control of Sexuality:</strong> The Party's
          systematic suppression of desire
        </li>
        <li>
          <strong className="text-rose-400">Love as Threat:</strong> Private emotions
          as dangerous to totalitarian control
        </li>
        <li>
          <strong className="text-rose-400">The Body as Battleground:</strong> Physical
          desires as the last refuge of individual autonomy
        </li>
        <li>
          <strong className="text-rose-400">Orthodoxy in Relationships:</strong> How
          ideology poisons even the most intimate connections
        </li>
      </ul>
    </LessonLayout>
  );
}
