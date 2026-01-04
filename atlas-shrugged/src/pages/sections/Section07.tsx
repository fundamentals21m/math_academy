import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Miss Taggart, who is John Galt?"
        <br />
        "We are!"
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Exchange at the opening of the John Galt Line
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter VIII is the triumphant culmination of the novel's first major arc. The
        <strong className="text-amber-400"> John Galt Line</strong> opens, proving that
        Rearden Metal is safe and that achievement is possible despite every attempt to
        stop it. Dagny and Rearden ride the first train themselves, risking their lives
        on their own work.
      </p>

      <Callout type="info">
        <p>
          <strong>The title "The John Galt Line"</strong> names both the railroad and the
          chapter. By completing the line, Dagny and Rearden answer the question "Who is
          John Galt?" with their own achievement—they are the prime movers who make
          civilization possible.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The John Galt Line is complete. Despite predictions of disaster, attacks from the
        media, and condemnation from the intellectual establishment, the first train is ready
        to run. <strong className="text-amber-400">Dagny Taggart</strong> and
        <strong className="text-amber-400">Hank Rearden</strong> will ride in the engine cab
        themselves, staking their lives on the safety of Rearden Metal.
      </p>

      <p className="my-4">
        The run is a complete success. The train travels at speeds never before achieved,
        crossing the revolutionary Rearden Metal bridge without incident. The crowds who
        have gathered to watch—some hoping for disaster, others for success—witness the
        triumph of human achievement over every obstacle.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The First Run</h4>
        <p className="text-dark-200 text-lg mb-4">
          "The green-blue rails ran to meet them, like two jets shot out of a single point
          beyond the curve of the earth. The crossties melted, as they approached, into a
          smooth stream rolling down under the wheels. She felt no wheels under the floor.
          The motion was a smooth flight on a sustained impulse."
        </p>
        <p className="text-dark-400 text-sm">
          Dagny's experience of the train ride captures the joy of successful achievement—
          the integration of mind and matter, purpose and action.
        </p>
      </div>

      {/* The Opening Ceremony */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Opening Ceremony</h2>

      <p className="my-4">
        <strong className="text-amber-400">Eddie Willers</strong> cuts the ribbon to open
        the John Galt Line. When photographers ask him to stage the moment for multiple shots,
        he refuses—"It's not going to be a phony." This small act of integrity captures the
        spirit of the enterprise.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Eddie's Role</h4>
          <p className="text-sm text-dark-300">
            As Dagny's loyal assistant, Eddie represents the competent workers who keep
            civilization running. His refusal to fake the ceremony shows his commitment
            to honesty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Crowd</h4>
          <p className="text-sm text-dark-300">
            People from all over have come to watch—some hoping the train will crash,
            others cheering for success. The line has become a symbol of the battle
            between achievement and destruction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Engine</h4>
          <p className="text-sm text-dark-300">
            A diesel engine bearing the emblem of Nat Taggart, founder of the railroad.
            Dagny carries forward the legacy of her ancestor's achievement.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">"We Are!"</h4>
          <p className="text-sm text-dark-300">
            When a reporter asks "Who is John Galt?", Dagny answers "We are!"—claiming
            the mysterious name as a symbol of achievement rather than despair.
          </p>
        </Card>
      </CardGrid>

      {/* The Journey */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Journey</h2>

      <p className="my-4">
        The train accelerates to 100 miles per hour—far faster than any conventional train
        could safely travel on conventional rails. The Rearden Metal tracks and bridge hold
        perfectly. Inside the cab, Dagny and Rearden experience the joy of successful creation.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Meaning of the Ride</h4>
        <p className="text-dark-200 mb-4">
          "It was the greatest sensation of existence: not to trust, but to know. The security
          of being first, with full sight and full knowledge of one's course—not the blind sense
          of being pulled into the unknown by some unknown power ahead."
        </p>
        <p className="text-dark-400 text-sm">
          The train ride represents the novel's epistemology: knowledge is possible, reality
          is knowable, and the joy of existence comes from understanding and controlling one's world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Bridge Crossing</h3>
          <p className="text-dark-300 text-sm">
            The train crosses the revolutionary Rearden Metal bridge at full speed.
            Those who predicted collapse watch in silence as the bridge holds perfectly.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Speed Record</h3>
          <p className="text-dark-300 text-sm">
            The train achieves speeds impossible on conventional tracks, proving that
            Rearden Metal is not just safe but superior to all alternatives.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Witnesses</h3>
          <p className="text-dark-300 text-sm">
            Along the route, people gather to watch—workers, farmers, townspeople.
            Many cheer, recognizing achievement when they see it.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Vindication</h3>
          <p className="text-dark-300 text-sm">
            Every expert who predicted failure, every official who condemned Rearden Metal,
            is proven wrong. Achievement has triumphed over opinion.
          </p>
        </div>
      </div>

      {/* Ellis Wyatt */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ellis Wyatt's Celebration</h2>

      <p className="my-4">
        At the end of the line, <strong className="text-amber-400">Ellis Wyatt</strong> waits
        to greet them. He hosts a celebration at his home overlooking his oil fields—a gathering
        of the producers who made the John Galt Line possible. For one night, they celebrate
        what they have achieved.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Wyatt's Toast</h4>
        <p className="text-dark-200 text-lg mb-4">
          "To the world as it seems to be right now!"
        </p>
        <p className="text-dark-400 text-sm">
          Wyatt's toast acknowledges that this moment of triumph cannot last—but he refuses
          to let that prevent him from celebrating what they have achieved.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>A Bittersweet Victory:</strong> Ellis Wyatt's toast and his smashing of
          the wine glass hint at the darker truth: this triumph is temporary. The looters
          are still in power, and they will not rest until they have destroyed what the
          producers have built.
        </p>
      </Callout>

      {/* Dagny and Rearden */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny and Rearden</h2>

      <p className="my-4">
        The chapter ends with Dagny and Rearden's relationship moving beyond the professional.
        Their shared achievement, their shared values, and their shared defiance of a hostile
        world have created a bond that demands expression. What begins as a partnership of
        minds becomes a union of bodies.
      </p>

      <Callout type="note">
        <p>
          <strong>The Meaning of Their Union:</strong> Dagny and Rearden come together not
          despite their achievements but because of them. Their physical relationship is an
          expression of their spiritual kinship—the recognition of shared values in a world
          that denies those values.
        </p>
      </Callout>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Joy of Achievement</h4>
          <p className="text-dark-300">
            The train ride captures what it feels like to achieve—the integration of purpose
            and action, the satisfaction of seeing one's mind move matter. This joy is presented
            as the proper reward of productive work.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Knowledge vs. Faith</h4>
          <p className="text-dark-300">
            Dagny and Rearden don't trust that the metal will hold—they know it. Their confidence
            is based on evidence and reason, not faith. This epistemological point underlies
            the novel's celebration of achievement.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Mind and Body</h4>
          <p className="text-dark-300">
            The chapter rejects the separation of mind and body. Achievement is physical—metal,
            rails, bridges—as well as mental. And the relationship between Dagny and Rearden
            is spiritual as well as physical.
          </p>
        </div>
      </div>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Eddie Cuts the Ribbon</p>
            <p className="text-sm text-dark-400 mt-1">
              Eddie Willers opens the John Galt Line with a single authentic cut,
              refusing to stage a phony ceremony for photographers.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The First Run Succeeds</p>
            <p className="text-sm text-dark-400 mt-1">
              The train crosses the Rearden Metal bridge at 100 mph without incident,
              proving every critic wrong.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">"We Are!"</p>
            <p className="text-sm text-dark-400 mt-1">
              Dagny answers the question "Who is John Galt?" by claiming the name
              as a symbol of achievement rather than despair.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Wyatt's Celebration</p>
            <p className="text-sm text-dark-400 mt-1">
              Ellis Wyatt hosts a celebration for the producers who made the line possible,
              toasting "the world as it seems to be right now."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">5</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny and Rearden's Union</p>
            <p className="text-sm text-dark-400 mt-1">
              Their partnership culminates in a physical relationship that expresses
              their spiritual kinship.
            </p>
          </div>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. When asked "Who is John Galt?", Dagny answers "We are!" What does she mean by this answer? How does her response transform the phrase from an expression of despair into something else entirely?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Dagny and Rearden ride in the engine cab during the first run, risking their lives on their own work. What does this willingness to stake their lives say about their confidence? How does this contrast with the critics who condemned Rearden Metal from the safety of their offices?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Ellis Wyatt's toast—"To the world as it seems to be right now!"—has a bittersweet quality. Why does he acknowledge that this moment of triumph cannot last? What does this foreshadow about the conflict to come?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The chapter presents the joy of achievement—the integration of purpose and action—as one of life's highest experiences. Do you agree that productive achievement can be a source of profound joy? What role does work play in a meaningful life?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The John Galt Line succeeds</strong> spectacularly, proving that
              Rearden Metal is safe and that achievement is possible despite opposition.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Dagny's answer "We are!"</strong> transforms the phrase "Who is
              John Galt?" from an expression of despair to a claim of achievement.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>The joy of achievement</strong> is presented as the proper reward
              of productive work and the essence of a well-lived life.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Wyatt's bittersweet toast</strong> foreshadows that this triumph
              cannot last in a world controlled by looters.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny and Rearden's relationship</strong> develops as an expression
              of shared values, not in spite of their achievements but because of them.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
