import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I knew it was possible and what it would mean, and I couldn't let it be used by the looters, couldn't let them know what they were getting—so I quit."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Galt, on abandoning his motor
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Generator" reveals the full story of John Galt's revolutionary motor and why he
        abandoned it. The motor—which could draw static electricity from the atmosphere and
        convert it into usable power—represents the creative potential of the human mind. Galt's
        decision to withdraw it from a world that would enslave him symbolizes the strike itself.
      </p>

      <Callout type="info">
        <p>
          <strong>The Motor as Symbol:</strong> Galt's motor represents the mind's capacity to
          transform nature into values. Its withdrawal represents what happens when producers
          refuse to create for those who condemn them.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The looters have captured John Galt and are attempting to force him to become their
        economic dictator. They need his mind to function—his motor, in particular, could solve
        the energy crisis that is paralyzing the nation. But the motor exists only in Galt's
        mind, and he will not share it with those who would use it to perpetuate slavery.
      </p>

      <p className="my-4">
        The chapter explores the meaning of the motor and its destruction. Galt explains that he
        invented it as a young engineer at the Twentieth Century Motor Company, but when the
        company's heirs implemented their collectivist plan, he realized his invention would be
        used to power a system of slavery. He destroyed his prototype and walked away.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Motor's Principle</h4>
        <p className="text-dark-200 text-lg mb-4">
          "I saw what it could mean for mankind—and I saw what it was being made to mean. I
          saw that the men who created it would be the men to suffer most from it. I was not
          going to let that happen."
        </p>
        <p className="text-dark-400 text-sm">
          Galt explaining why he refused to let his invention serve the looters.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Mind as the Source</h3>
          <p className="text-dark-300 text-sm">The motor did not create itself—it required Galt's mind. Force cannot create; it can only destroy or redistribute what minds have made</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Right to Withhold</h3>
          <p className="text-dark-300 text-sm">If a man owns his own mind, he has the right to refuse to use it for those who would enslave him</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Force vs. Persuasion</h3>
          <p className="text-dark-300 text-sm">The looters can force Galt's body into captivity but cannot force his mind to create</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Limits of Power</h3>
          <p className="text-dark-300 text-sm">Political power can destroy but cannot produce—the gun is useless against a mind that refuses</p>
        </div>
      </div>

      {/* The Motor's Story */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Story of the Motor</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Invention</h4>
          <p className="text-sm text-dark-300">
            As a young engineer, Galt discovered a way to convert atmospheric static electricity
            into usable power. The motor could have provided unlimited clean energy.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Company's Change</h4>
          <p className="text-sm text-dark-300">
            When the company's founders died, their heirs implemented the collectivist plan.
            Galt saw that his motor would be used to power a system of slavery.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Decision</h4>
          <p className="text-sm text-dark-300">
            Galt refused to let his creation serve his destroyers. He destroyed the prototype,
            erased his notes, and walked away with his knowledge locked in his mind.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Rebuilt Motor</h4>
          <p className="text-sm text-dark-300">
            In the valley, Galt rebuilt his motor to power the community of the strikers—the
            only people worthy of its benefits, because they respected its creator.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Galt's Captivity</p>
            <p className="text-sm text-dark-400">The looters hold Galt prisoner, demanding that he cooperate and save their system</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Demand for the Motor</p>
            <p className="text-sm text-dark-400">The looters realize Galt's motor could solve the energy crisis—if only he would share it</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Galt's Refusal</p>
            <p className="text-sm text-dark-400">Galt explains that the motor cannot be separated from its creator—his mind is the generator</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Turn to Torture</p>
            <p className="text-sm text-dark-400">Unable to persuade Galt, the looters decide to torture him into compliance</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Final Brutality:</strong> When all else fails, the looters resort to
          physical torture. They strap Galt to a machine designed to inflict pain, believing
          they can break his will. They have forgotten that force cannot create—it can only destroy.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">John Galt</strong> faces the ultimate test. Strapped to
        a torture device, he remains unbroken. His courage comes not from indifference to pain but
        from certainty in his values. He would rather suffer than create for his destroyers.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">The Looters</strong> reveal their ultimate nature. They
        have exhausted every method—persuasion, bribery, threats—and now resort to raw physical
        torture. Their civilization has collapsed to the level of the torturer's rack.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Under Torture</h4>
        <p className="text-dark-200 text-lg">
          "You can destroy my body... You can stop my heart. But you cannot make my mind
          produce a single thought that I do not choose to think. You cannot make me want
          to help you."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Galt's defiance demonstrates the limits of physical force against the human will.
        </p>
      </div>

      {/* The Meaning of the Motor */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Motor's Deeper Meaning</h2>

      <p className="my-4">
        The motor is more than a plot device—it represents the creative power of the human mind
        and the conditions necessary for that power to function:
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">The motor requires a mind.</strong> No amount of
            resources, labor, or desire can create without the thinking that discovers principles
            and applies them to nature.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">The motor requires freedom.</strong> Galt could only
            create when he was free to keep the products of his mind. Slavery kills the motivation
            to create.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">The motor cannot be seized.</strong> The looters can
            capture Galt's body, but the motor exists only in his mind, and that cannot be forced
            to produce.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <p className="text-dark-200">
            <strong className="text-amber-400">The motor is the mind.</strong> The physical device
            is merely a manifestation. The true generator is human reason itself.
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Title's Meaning:</strong> "The Generator" refers not just to the motor
          but to the human mind—the source of all values, all inventions, all progress. The
          mind is the prime mover of human life.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Galt's motor represents unlimited clean energy that could transform civilization. Was Galt morally justified in withholding this invention from humanity? What are the ethical implications of a creator refusing to share a beneficial discovery?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The looters resort to physical torture when persuasion fails. What does this progression reveal about the relationship between collectivist ideology and the use of force? Is Rand's portrayal of this progression fair, or is it an exaggeration?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Galt claims that the looters can destroy his body but cannot force his mind to produce. Is there a limit to how much physical coercion the human spirit can withstand? What historical examples support or challenge this view?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The chapter argues that intellectual property (like Galt's motor design) cannot truly be seized because it exists in the mind. How does this relate to contemporary debates about intellectual property rights, patents, and the ownership of ideas?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The mind is the source of all values:</strong> The motor could not exist
              without Galt's creative thinking—force cannot produce ideas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Knowledge cannot be forced:</strong> The looters can torture Galt's body
              but cannot compel his mind to create.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Creators have the right to withhold:</strong> If a man owns his own mind,
              he has the right to refuse to use it for those who enslave him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Force reveals moral bankruptcy:</strong> The resort to torture demonstrates
              that the looters have no arguments, no values, nothing but brute power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The crisis reaches its climax:</strong> Galt under torture represents
              the ultimate confrontation between mind and force.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
