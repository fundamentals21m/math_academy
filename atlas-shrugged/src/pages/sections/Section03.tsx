import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "He was the kind of man who had never thought of his own existence as important
        enough to require an explanation. He worked, he loved his work, he did not ask why."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Description of an industrialist
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter IV introduces the concept of the <strong className="text-amber-400">"prime movers"</strong>—the
        industrialists, inventors, and creators who drive civilization forward. Through the
        backstory of Francisco d'Anconia and the growing crisis in Colorado, we see both the
        power of these individuals and the forces gathering against them.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The Immovable Movers"</strong> refers to the prime movers of industry—
          those whose creative minds drive the economy forward. Like the "unmoved mover" of
          Aristotelian philosophy, they are the source of action without being moved by outside forces.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        This chapter expands the novel's scope, showing the growing crisis in American industry
        and introducing key elements of the backstory. We learn more about the childhood
        friendship between <strong className="text-amber-400">Dagny Taggart</strong> and
        <strong className="text-amber-400">Francisco d'Anconia</strong>, and we see the
        Anti-dog-eat-dog Rule take effect, destroying Dan Conway's Phoenix-Durango railroad.
      </p>

      <p className="my-4">
        The chapter also shows the consequences of government intervention in the economy.
        As productive people are punished and incompetent ones rewarded, the system begins
        to break down. Suppliers cannot deliver, contracts are broken, and the industrial
        machine that supports civilization starts to falter.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Dan Conway's Defeat</h4>
        <p className="text-dark-200 text-lg mb-4">
          "I've never asked anyone to give me anything. I thought people got things by
          working for them. But it's not so simple... I built something good—and they're
          taking it away from me."
        </p>
        <p className="text-dark-400 text-sm">
          Dan Conway's defeat by the Anti-dog-eat-dog Rule represents the fate of producers
          in a society that punishes success and rewards political manipulation.
        </p>
      </div>

      {/* Francisco d'Anconia Backstory */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Francisco d'Anconia: The Prodigy</h2>

      <p className="my-4">
        The chapter reveals <strong className="text-amber-400">Francisco d'Anconia's</strong> backstory
        through Dagny's memories. As a child, Francisco was a prodigy—heir to the d'Anconia
        copper fortune, brilliant in every field he touched, driven by an inexhaustible energy
        and joy in achievement.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The d'Anconia Legacy</h4>
          <p className="text-sm text-dark-300">
            The d'Anconia fortune was built over centuries by generations of brilliant
            industrialists. Francisco was raised to be the crown jewel of the line,
            educated to continue and expand the family's achievement.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Childhood Summers</h4>
          <p className="text-sm text-dark-300">
            Francisco spent summers with the Taggarts, where he and Dagny became close
            friends. Even as a child, he displayed extraordinary ability and
            determination in everything he attempted.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Natural Ability</h4>
          <p className="text-sm text-dark-300">
            Francisco excelled at everything: mathematics, science, business, sports.
            He seemed to embody the human potential for greatness that the novel celebrates.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Mystery</h4>
          <p className="text-sm text-dark-300">
            The contrast between Francisco's brilliant youth and his current apparent
            degeneration into a playboy creates one of the novel's central mysteries.
          </p>
        </Card>
      </CardGrid>

      {/* Dagny and Francisco */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Memory of Francisco</h2>

      <p className="my-4">
        Dagny remembers Francisco as the embodiment of human potential—a boy who loved
        achievement for its own sake and who seemed destined for greatness. Their childhood
        friendship was based on shared values: a love of productive work and contempt for
        those who merely existed without creating.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Young Francisco</h4>
        <p className="text-dark-200 mb-4">
          Even as a teenager, Francisco understood business better than most adults. He
          once worked incognito in a d'Anconia copper foundry to learn the business from
          the ground up, rising to become one of the most valued workers before revealing
          his identity.
        </p>
        <p className="text-dark-400 text-sm">
          This episode illustrates Francisco's commitment to earning everything he had,
          despite being born to wealth.
        </p>
      </div>

      {/* The Crisis in Colorado */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Crisis in Colorado</h2>

      <p className="my-4">
        With the Phoenix-Durango forced out of Colorado, the state's industrial economy
        faces disaster. <strong className="text-amber-400">Ellis Wyatt</strong> and other
        producers in the region depend on reliable transportation, and Taggart Transcontinental
        cannot provide it—the Rio Norte Line is crumbling from neglect.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Consequences of Looting:</strong> The Anti-dog-eat-dog Rule, designed
          to help Taggart Transcontinental by eliminating competition, actually threatens
          to destroy Colorado's economy. The looters' victory may become their defeat, as
          the industrial system they feed upon collapses.
        </p>
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Ellis Wyatt's Ultimatum</h3>
          <p className="text-dark-300 text-sm">
            Wyatt demands that Taggart Transcontinental provide adequate service or face
            the consequences. His oil fields cannot wait for bureaucratic delays.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Failing Infrastructure</h3>
          <p className="text-dark-300 text-sm">
            Years of neglect have left the Rio Norte Line in dangerous condition.
            Dagny must rebuild it quickly or lose Colorado's business entirely.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Supply Chain Collapse</h3>
          <p className="text-dark-300 text-sm">
            Suppliers are failing to deliver, contractors are breaking contracts,
            and the network of industrial cooperation is fraying.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Race Against Time</h3>
          <p className="text-dark-300 text-sm">
            Dagny must rebuild the Rio Norte Line before Ellis Wyatt and other
            Colorado industrialists abandon the region.
          </p>
        </div>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Prime Mover</h4>
          <p className="text-dark-300">
            The prime movers of industry are like the "unmoved mover" of philosophy—they
            are the source of productive action, driving civilization forward through their
            creative minds. Without them, society cannot function.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Cost of Looting</h4>
          <p className="text-dark-300">
            When looters destroy producers, they destroy the source of the wealth they
            seek to seize. The Anti-dog-eat-dog Rule, meant to help Taggart, may ultimately
            destroy the economy it was supposed to preserve.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Human Potential</h4>
          <p className="text-dark-300">
            Francisco's backstory illustrates the heights humans can achieve when they are
            free to develop their abilities. His apparent fall from these heights makes his
            current behavior all the more mysterious.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Anti-dog-eat-dog Rule Takes Effect</p>
            <p className="text-sm text-dark-400 mt-1">
              Dan Conway is forced to close the Phoenix-Durango, leaving Colorado's
              industrialists dependent on the failing Rio Norte Line.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Francisco's Backstory Revealed</p>
            <p className="text-sm text-dark-400 mt-1">
              Through Dagny's memories, we learn about Francisco's brilliant youth
              and his early friendship with Dagny.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Ellis Wyatt's Demands</p>
            <p className="text-sm text-dark-400 mt-1">
              Wyatt warns that he will not wait for Taggart Transcontinental to
              get its act together—he needs reliable transportation now.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny's Decision</p>
            <p className="text-sm text-dark-400 mt-1">
              Dagny commits to rebuilding the Rio Norte Line with Rearden Metal,
              despite opposition from her brother and the public.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Lesson of History:</strong> The d'Anconia family fortune was built
          over centuries by men who created value. Francisco was raised in this tradition,
          trained to continue the work of generations. His apparent abandonment of this
          legacy is one of the novel's central puzzles.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The chapter title "The Immovable Movers" alludes to Aristotle's concept of an "unmoved mover." What makes industrialists like Rearden and Francisco "prime movers" in the economic sense? What happens to society when these prime movers are removed?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Francisco d'Anconia was once a brilliant prodigy who excelled at everything he attempted. Why is the contrast between his youth and his current behavior as a "playboy" so puzzling to those who knew him? What might explain such a dramatic change?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Dan Conway says, "I've never asked anyone to give me anything. I thought people got things by working for them." How does his experience with the Anti-dog-eat-dog Rule challenge this worldview? What alternatives does he have?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The Anti-dog-eat-dog Rule was supposed to help Taggart Transcontinental, but the chapter suggests it may ultimately harm Colorado's economy. How can a "victory" for the looters become their defeat? What does this suggest about the relationship between producers and parasites?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The prime movers</strong> are the creative minds who drive
              civilization forward—without them, society cannot function.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Francisco d'Anconia's</strong> brilliant youth is revealed through
              Dagny's memories, deepening the mystery of his current behavior.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Dan Conway's defeat</strong> illustrates how the productive are
              punished in a society corrupted by political manipulation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The Colorado crisis</strong> shows the consequences of destroying
              producers—the looters' victory threatens the economy they feed upon.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny's commitment</strong> to rebuilding the Rio Norte Line
              with Rearden Metal sets up the novel's central conflict.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
