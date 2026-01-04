import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The metal was greenish-blue. It had a slight shimmer... like the color of the sky
        in the early morning, when the sun is still below the horizon but about to rise."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Description of Rearden Metal
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter II introduces us to <strong className="text-amber-400">Hank Rearden</strong>,
        a self-made steel industrialist who has spent ten years developing a revolutionary
        new alloy. As we witness the first heat of Rearden Metal being poured, we see the
        stark contrast between a man who creates value and those who merely consume it.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Chain"</strong> refers to the interconnected relationships
          that bind characters together—both the productive chains of business and trade,
          and the parasitic chains of family and social obligation that drain the producers.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter opens at the Rearden Steel mills in Pennsylvania, where <strong className="text-amber-400">Hank Rearden</strong> watches
        the first heat of his new metal being poured. This moment represents the culmination of
        ten years of grueling work, experimentation, and determination. The metal glows with a
        greenish-blue color unlike anything seen before—it is stronger than steel, lighter, and
        more resistant to heat and corrosion.
      </p>

      <p className="my-4">
        After the pour, Rearden walks home through the cold night, carrying a bracelet made
        from the first batch of Rearden Metal. As he walks the seven miles to his house, he
        reflects on his journey from working in the iron mines of Minnesota as a young man
        to becoming one of the most successful industrialists in America.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The First Heat</h4>
        <p className="text-dark-200 text-lg mb-4">
          "He stood at the window of his office... watching the first heat of Rearden Metal run
          out of the mouth of the furnace into the molds. He felt the flow of an emotion he had
          never permitted himself to feel. He whispered: 'Rearden Metal.'"
        </p>
        <p className="text-dark-400 text-sm">
          This scene establishes Rearden as the archetypal producer—a man who creates genuine
          value through the application of his mind to matter.
        </p>
      </div>

      <p className="my-4">
        When Rearden arrives home, he finds his family waiting: his wife <strong className="text-amber-400">Lillian</strong>,
        his mother, and his brother <strong className="text-amber-400">Philip</strong>. He presents the bracelet
        to Lillian as a gift—the first object ever made from Rearden Metal. Her response is cold
        and dismissive; she calls it "a chain" and says she would have preferred diamonds.
      </p>

      {/* The Rearden Family */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rearden Family</h2>

      <p className="my-4">
        The family scene at the Rearden household introduces one of the novel's central conflicts:
        the relationship between creators and those who depend on them while simultaneously
        despising them. Each family member represents a different form of parasitism.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Lillian Rearden</h4>
          <p className="text-sm text-dark-300">
            Hank's wife, who married him for his wealth and status. She despises his
            work and finds his dedication to industry vulgar, preferring "intellectual"
            pursuits and social gatherings.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Philip Rearden</h4>
          <p className="text-sm text-dark-300">
            Hank's younger brother, who has never worked and lives off Hank's generosity.
            He resents Hank for his success and constantly seeks donations for
            progressive causes.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Mrs. Rearden</h4>
          <p className="text-sm text-dark-300">
            Hank's mother, who plays the martyr and accuses Hank of neglecting his family,
            despite the fact that he supports them all financially.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-sm text-dark-300">
            The creator who supports them all, yet receives nothing but criticism
            and guilt. He accepts their accusations because he has been taught that
            selflessness is a virtue.
          </p>
        </Card>
      </CardGrid>

      {/* The Bracelet Scene */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bracelet: Symbol of Value</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4">
          "She clasped the bracelet on her wrist, then raised her hand to the light,
          turning it this way and that. 'A chain,' she said. 'Appropriate, isn't it?
          It's the chain by which he holds us all.'"
        </p>
        <p className="text-dark-400 text-sm">
          Lillian's dismissive response reveals the fundamental conflict between those
          who create and those who consume without understanding or appreciation.
        </p>
      </div>

      <p className="my-4">
        The bracelet represents everything Rearden has achieved—ten years of work, innovation,
        and the triumph of the human mind over matter. To Lillian, it is worthless because
        she cannot see value except in terms of social status and the opinions of others.
        This scene foreshadows a later moment when Dagny will recognize the bracelet's true worth.
      </p>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Introduced</h2>

      <Callout type="note">
        <p>
          <strong>The Sanction of the Victim:</strong> Rearden accepts the guilt his family
          places on him because he has been taught that his dedication to work is selfish
          and therefore wrong. This concept—that the victim must consent to his own
          exploitation—becomes central to the novel's philosophy.
        </p>
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Creation vs. Consumption</h3>
          <p className="text-dark-300 text-sm">
            Rearden creates value; his family consumes it without gratitude or understanding.
            This dynamic illustrates the novel's distinction between producers and looters.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Nature of Achievement</h3>
          <p className="text-dark-300 text-sm">
            Rearden's joy in creating Rearden Metal is presented as noble and proper,
            despite society's condemnation of such "selfish" pursuits.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Guilt and Duty</h3>
          <p className="text-dark-300 text-sm">
            The family exploits Rearden's sense of duty, using guilt as a weapon to
            extract his resources while offering nothing in return.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Material and Spiritual</h3>
          <p className="text-dark-300 text-sm">
            The chapter challenges the false dichotomy between material and spiritual
            value—Rearden's metal is both a physical achievement and a spiritual triumph.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">First Pour of Rearden Metal</p>
            <p className="text-sm text-dark-400 mt-1">
              The culmination of ten years of work, representing the triumph of human
              ingenuity and determination over matter.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Rearden's Walk Home</p>
            <p className="text-sm text-dark-400 mt-1">
              A seven-mile walk through the night, during which Rearden reflects on his
              journey from mine worker to industrial titan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Bracelet Gift</p>
            <p className="text-sm text-dark-400 mt-1">
              Rearden presents Lillian with a bracelet made from the first Rearden Metal,
              only to have her dismiss it as worthless compared to diamonds.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Philip's Request</p>
            <p className="text-sm text-dark-400 mt-1">
              Philip asks Hank for a donation to the "Friends of Global Progress,"
              then becomes hostile when Hank agrees, revealing his resentment.
            </p>
          </div>
        </div>
      </div>

      {/* Connection to Dagny */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Connection to Taggart Transcontinental</h2>

      <p className="my-4">
        The chapter also establishes the business relationship between Rearden Steel and
        Taggart Transcontinental. Dagny Taggart has ordered rail made of Rearden Metal for
        the Rio Norte Line—a decision that will prove controversial as the novel progresses.
        This connection between the two protagonists sets up their eventual alliance.
      </p>

      <Callout type="success">
        <p>
          <strong>Rearden Metal's Properties:</strong> The new alloy is stronger than the
          highest-grade steel, lighter, more heat-resistant, and costs less to produce.
          It represents a genuine technological breakthrough that could revolutionize
          industry—if only the looters will allow it to be used.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. When Rearden gives Lillian the bracelet made from the first Rearden Metal, she dismisses it as worthless compared to diamonds. What does this scene reveal about how different people assign value to objects? What makes something truly valuable?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Rearden's family criticizes him for working too hard and neglecting them, yet they depend entirely on his financial support. How does Rand present this contradiction? Do you think Rearden should feel guilty for his dedication to work?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Philip asks Hank for a donation to the "Friends of Global Progress," then becomes hostile when Hank agrees. What might explain Philip's resentment toward someone who is helping him? Have you observed similar dynamics in real life?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The chapter shows Rearden walking home alone after his greatest achievement, then facing indifference and criticism from his family. What does this suggest about the relationship between creators and those who benefit from their work?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Hank Rearden</strong> is introduced as the archetypal creator—a
              self-made man who has spent ten years developing Rearden Metal.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The Rearden family</strong> represents the parasites who drain
              producers while resenting them for their success.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>The bracelet scene</strong> symbolizes the conflict between those
              who understand value (creators) and those who don't (consumers).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Rearden's guilt</strong> illustrates the "sanction of the victim"—how
              producers are trained to accept responsibility for supporting parasites.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The business connection</strong> between Rearden and Taggart
              Transcontinental is established through Dagny's order for Rearden Metal rail.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
