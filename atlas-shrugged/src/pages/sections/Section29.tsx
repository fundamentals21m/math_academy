import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The road is cleared... We are going back to the world. He raised his hand and over the desolate earth he traced in space the sign of the dollar."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The final lines of Atlas Shrugged
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "In the Name of the Best Within Us" is the climax and conclusion of <em>Atlas Shrugged</em>.
        The strikers rescue John Galt from his captors, the old world finally collapses, and the
        men of the mind prepare to return and rebuild civilization on the foundation of reason,
        individual rights, and voluntary exchange.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Meaning:</strong> "The best within us" refers to the human capacity
          for reason, achievement, and joy—the values that the strikers fought to preserve and
          that will guide their rebuilding of the world.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Dagny, Francisco, Hank Rearden, and the other strikers mount a rescue operation to free
        John Galt from his captors. They storm the State Science Institute where Galt is being
        held, overpower the guards, and liberate him. During the rescue, Dagny kills a guard who
        would have shot Galt—her first act of physical force, taken in defense of the man she
        loves and the values he represents.
      </p>

      <p className="my-4">
        Meanwhile, the outside world has collapsed completely. New York's lights go out for the
        last time. The looters' government disintegrates into chaos. The system that demanded
        sacrifice has consumed itself. From their sanctuary in the valley, the strikers watch
        as the world they withdrew from crumbles into darkness.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Rescue</h4>
        <p className="text-dark-200 text-lg mb-4">
          "We are the men who will return. We will rebuild. But this time we will do it right.
          This time we will not apologize for our virtues or accept guilt for our achievements."
        </p>
        <p className="text-dark-400 text-sm">
          The strikers' vow as they prepare to reclaim the world.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Collapse of Collectivism</h3>
          <p className="text-dark-300 text-sm">Without the minds of the producers, the looters' system cannot sustain itself—it collapses under its own contradictions</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Return of the Creators</h3>
          <p className="text-dark-300 text-sm">The strikers will rebuild the world—but only when they can do so freely, without guilt or sacrifice</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Justice Through Action</h3>
          <p className="text-dark-300 text-sm">The rescue demonstrates that force in defense of rights is moral—it is initiation of force that is evil</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Promise of the Future</h3>
          <p className="text-dark-300 text-sm">The novel ends with hope—the road is cleared for a new civilization built on reason and freedom</p>
        </div>
      </div>

      {/* The Rescue Operation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rescue Operation</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Plan</h4>
          <p className="text-sm text-dark-300">
            Francisco, Ragnar Danneskjold, and Hank Rearden coordinate with Dagny to infiltrate
            the State Science Institute where Galt is being held.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Assault</h4>
          <p className="text-sm text-dark-300">
            The strikers storm the facility, overpowering the guards. Their superior competence
            and determination make short work of the looters' defenses.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny's Choice</h4>
          <p className="text-sm text-dark-300">
            Dagny shoots a guard who would have killed Galt—her first act of violence, taken
            in defense of the man she loves and the values she has finally embraced.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Liberation</h4>
          <p className="text-sm text-dark-300">
            Galt is freed. Though weakened by torture, he remains unbroken. The strikers escape
            with their leader, leaving the collapsing world behind.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Torture Scene</p>
            <p className="text-sm text-dark-400">Galt endures torture but remains unbroken; the torture machine itself breaks down during the ordeal</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Rescue</p>
            <p className="text-sm text-dark-400">The strikers assault the State Science Institute and free John Galt from his captors</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Lights Go Out</p>
            <p className="text-sm text-dark-400">New York City—symbol of human achievement—goes dark as the power grid fails for the last time</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Return</p>
            <p className="text-sm text-dark-400">The strikers prepare to leave the valley and rebuild civilization on the ruins of the old</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Sign of the Dollar:</strong> The novel's final image—Galt tracing the
          dollar sign over the darkened earth—represents the promise to rebuild a world based
          on productive achievement and voluntary exchange.
        </p>
      </Callout>

      {/* Character Resolutions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Resolutions</h2>

      <p className="my-4">
        The major characters find their final positions as the novel concludes:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">John Galt</h4>
          <p className="text-sm text-dark-300">
            Survives torture unbroken, is rescued by his fellow strikers, and will lead the
            rebuilding of civilization on rational principles.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-sm text-dark-300">
            Finally joins the strike fully, killing to defend Galt. She has chosen her values
            over her railroad—and will help build something greater.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden</h4>
          <p className="text-sm text-dark-300">
            Participates in the rescue, having finally shed the guilt that bound him to his
            exploiters. He is free to create without apology.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-sm text-dark-300">
            His years of apparent dissolution revealed as strategic sacrifice for the strike.
            He can now be the man he always was—openly and proudly.
          </p>
        </Card>
      </CardGrid>

      {/* The Collapse */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Final Collapse</h2>

      <p className="my-4">
        The looters' world disintegrates as the novel ends:
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-dark-800/50 rounded-lg p-4 border border-red-600/30">
          <p className="text-dark-200">
            <strong className="text-red-400">The Government Fragments:</strong> Without competent
            people to run it, the federal government collapses into warring factions and chaos.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-red-600/30">
          <p className="text-dark-200">
            <strong className="text-red-400">Infrastructure Fails:</strong> Power grids go dark,
            trains stop running, factories close. The physical structure of civilization crumbles.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-red-600/30">
          <p className="text-dark-200">
            <strong className="text-red-400">The Looters Perish:</strong> Those who lived by
            expropriation find there is nothing left to expropriate. They cannot survive without
            the producers they condemned.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-green-600/30">
          <p className="text-dark-200">
            <strong className="text-green-400">The Road is Cleared:</strong> The collapse is not
            tragedy but liberation. The old system had to die before the new one could be born.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Optimistic Ending:</strong> Despite the destruction, the novel ends on
          a note of triumph. The collapse was necessary—the old world could not be reformed,
          only replaced. Now the builders can create a new civilization worthy of man.
        </p>
      </Callout>

      {/* The Meaning of the Conclusion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Meaning of the Conclusion</h2>

      <div className="bg-dark-800 rounded-xl p-6 border border-amber-600/50 my-6">
        <h4 className="font-semibold text-amber-400 mb-4 text-center">What the Strikers Will Build</h4>
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>A society based on voluntary exchange, not forced redistribution</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Recognition of individual rights, including property rights</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Celebration of achievement rather than guilt for success</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Reason as the standard of truth, not faith or feeling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Government limited to protecting rights, not redistributing wealth</span>
          </li>
        </ul>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Dagny kills a guard during the rescue—her first act of violence in the novel. How does Rand distinguish between initiating force (which she condemns) and using force in defense (which she justifies)? Is this distinction clear enough to guide action in the real world?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The novel ends with civilization in ruins, yet presents this as a triumphant conclusion. What does this say about Rand's view of the relationship between destruction and creation? Is rebuilding from scratch preferable to reforming existing institutions?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The final image shows Galt tracing the sign of the dollar over the darkened earth. Why do you think Rand chose this symbol to represent the promise of the future? What values does the dollar sign represent in her philosophy, and do you find it an appropriate symbol of hope?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Throughout the novel, innocent people suffer because of the strike—not just the looters, but ordinary people caught in the collapse. Does the strikers' cause justify this collateral suffering? How might defenders and critics of their strategy evaluate this moral question differently?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>The strike succeeds:</strong> By withdrawing their minds, the producers
              have caused the looters' system to collapse under its own contradictions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Force in defense is moral:</strong> The rescue demonstrates that force
              used to protect rights is fundamentally different from force used to violate them.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Dagny completes her journey:</strong> By choosing Galt over her railroad,
              she affirms that values must be lived, not sacrificed to a dying world.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The collapse is liberation:</strong> The destruction of the old system
              clears the way for a new civilization built on proper principles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The future belongs to the creators:</strong> The strikers will rebuild
              the world—this time without guilt, without sacrifice, without apology.
            </span>
          </li>
        </ul>
      </div>

      {/* Final Reflection */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Reflection</h2>

      <Callout type="success">
        <p>
          <strong>Atlas Shrugged</strong> concludes with a vision of hope built on a foundation
          of struggle. The world has collapsed, but the men and women who make civilization
          possible have survived. They will return to rebuild—not as servants or slaves, but
          as free individuals, creating value by choice, trading by mutual consent, and living
          for their own happiness. The question "Who is John Galt?" has been answered. He is
          the man who refused to apologize for being human.
        </p>
      </Callout>
    </LessonLayout>
  );
}
