import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The socialists believe in two things which are absolutely different and
        perhaps even contradictory: freedom and organisation."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Elie Halévy, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Before we can progress with the main problem, Hayek argues, a crucial confusion
        must be cleared up. This confusion concerns nothing less than the concept of
        <strong className="text-amber-400"> socialism itself</strong>—and the
        distinction between its <em>ends</em> and its <em>methods</em>.
      </p>

      {/* Section 1: The Two Meanings of Socialism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Two Meanings of Socialism</h2>

      <p className="my-4">
        Socialism may mean—and is often used to describe—merely the ideals of
        <strong className="text-amber-400"> social justice</strong>, greater equality,
        and security. These are the ultimate <em>aims</em> of socialism, which many
        people share regardless of their political views.
      </p>

      <p className="my-4">
        But socialism also means the particular <em>method</em> by which most socialists
        hope to attain these ends: the abolition of private enterprise, of private
        ownership of the means of production, and the creation of a system of
        <strong className="text-amber-400"> "planned economy"</strong> in which the
        entrepreneur working for profit is replaced by a central planning body.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Socialism as Ends</h4>
          <p className="text-sm text-dark-300">
            Social justice, greater equality, security—aims that many people value
            and that need not require collectivism to pursue.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Socialism as Methods</h4>
          <p className="text-sm text-dark-300">
            Abolition of private property, central planning, replacement of
            competition with conscious direction of economic activity.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Confusion</h4>
          <p className="text-sm text-dark-300">
            Those who reject the methods are often accused of not valuing the ends.
            But the real dispute is about <em>means</em>, not ultimate goals.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Danger</h4>
          <p className="text-sm text-dark-300">
            Many who care only about the ends fail to understand how the methods
            chosen will determine whether those ends can be achieved.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>Socialism and Collectivism:</strong> It is probably preferable to
          describe the methods which can be used for a great variety of ends as
          <em> collectivism</em> and to regard socialism as a species of that genus.
          Everything which is true of collectivism as such must apply also to socialism.
        </p>
      </Callout>

      {/* Section 2: What Planning Really Means */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What "Planning" Really Means</h2>

      <p className="my-4">
        "Planning" owes its popularity largely to the fact that everybody desires,
        of course, that we should handle our common problems as rationally as possible.
        In this sense, <em>everybody</em> is a planner. But this is not what modern
        planners mean by the term.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Liberal "Plan"</h4>
        <p className="text-dark-300 mb-4">
          According to modern planners, it is not sufficient to design the most
          rational permanent <em>framework</em> within which various activities would
          be conducted by different persons according to their individual plans.
          This liberal plan, according to them, is <strong>no plan</strong>—and it
          is indeed not a plan designed to satisfy particular views about who should
          have what.
        </p>
        <p className="text-dark-400 text-sm">
          The liberal position is to design rules and institutions that allow individuals
          to make their own plans and coordinate them through market processes.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Collectivist "Plan"</h4>
        <p className="text-dark-300 mb-4">
          What our planners demand is a <strong>central direction of all economic
          activity</strong> according to a single plan, laying down how the resources
          of society should be "consciously directed" to serve particular ends in a
          definite way.
        </p>
        <p className="text-dark-400 text-sm">
          The dispute is not about whether we should use foresight, but about
          <em> who</em> should do the planning—individuals for themselves or a
          central authority for everyone.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The dispute between the modern planners and their opponents is, therefore,
        not a dispute on whether we ought to choose intelligently between the various
        possible organisations of society... It is a dispute about what is the best
        way of so doing."
      </blockquote>

      {/* Section 3: The Liberal Argument for Competition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Liberal Argument for Competition</h2>

      <p className="my-4">
        It is important not to confuse opposition against central planning with a
        dogmatic <em>laissez-faire</em> attitude. The liberal argument is in favour
        of making the best possible use of the forces of <strong className="text-amber-400">
        competition</strong> as a means of co-ordinating human efforts—not an
        argument for leaving things just as they are.
      </p>

      <Callout type="info">
        <p>
          <strong>Competition Requires a Framework:</strong> The liberal argument does
          not deny, but even emphasises, that in order for competition to work
          beneficially, a carefully thought-out legal framework is required. Neither
          existing nor past legal rules are free from grave defects.
        </p>
      </Callout>

      <p className="my-4">
        Economic liberalism regards competition as superior not only because it is in
        most circumstances the most efficient method known, but even more because it
        is the <strong className="text-amber-400">only method</strong> by which our
        activities can be adjusted to each other without coercive or arbitrary
        intervention of authority.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Competition is Superior</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Dispenses with "conscious social control"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Gives individuals a chance to decide for themselves</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Coordinates without coercion or arbitrary authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Uses price signals to communicate dispersed knowledge</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">What Liberalism is NOT</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>A "stationary creed" with fixed rules</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Opposition to all government action</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Passive acceptance of existing institutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Denial that social services can be legitimate</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: The Proper Role of Government */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Proper Role of Government</h2>

      <p className="my-4">
        In no system that could be rationally defended would the state just do nothing.
        An effective competitive system needs an intelligently designed and continuously
        adjusted legal framework as much as any other system.
      </p>

      <p className="my-4">
        The functioning of competition requires adequate organisation of certain
        institutions like <strong className="text-amber-400">money, markets, and
        channels of information</strong>—some of which can never be adequately
        provided by private enterprise. It depends above all on the existence of an
        appropriate legal system designed both to preserve competition and to make it
        operate as beneficially as possible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Tasks for Government in a Competitive System</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Create conditions in which competition will be as effective as possible</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Supplement competition where it cannot be made effective</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Provide services that private enterprise cannot profitably supply</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Prevent fraud and deception (including exploitation of ignorance)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Define property rights appropriately for different things</span>
          </li>
        </ul>
      </div>

      <Callout type="note">
        <p>
          <strong>Regulations Compatible with Competition:</strong> To prohibit the
          use of certain poisonous substances, or to require special precautions in
          their use, to limit working hours or to require certain sanitary
          arrangements, is fully compatible with the preservation of competition—so
          long as these restrictions affect all potential producers equally.
        </p>
      </Callout>

      {/* Section 5: The Movement Against Competition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Movement Against Competition</h2>

      <p className="my-4">
        The task of creating a suitable framework for competition had not yet been
        carried very far when states everywhere turned from it to that of
        <strong className="text-amber-400"> supplanting competition</strong> by a
        different and irreconcilable principle.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "It is important to be quite clear about this: the modern movement for planning
        is a movement against competition as such, a new flag under which all the old
        enemies of competition have rallied."
      </blockquote>

      <p className="my-4">
        What in effect unites the socialists of the Left and the Right is this common
        hostility to competition and their common desire to replace it by a directed
        economy. Though the terms "capitalism" and "socialism" are still generally
        used to describe the past and the future forms of society, they conceal rather
        than elucidate the nature of the transition through which we are passing.
      </p>

      {/* Section 6: The False "Middle Way" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The False "Middle Way"</h2>

      <p className="my-4">
        Nothing seems at first more plausible, or is more likely to appeal to
        reasonable people, than the idea that our goal must be neither the extreme
        decentralisation of free competition nor the complete centralisation of a
        single plan, but some <em>judicious mixture</em> of the two methods.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Treacherous Guide:</strong> Yet mere common sense proves a
          treacherous guide in this field. Although competition can bear some
          admixture of regulation, it cannot be combined with planning to any extent
          we like without ceasing to operate as an effective guide to production.
        </p>
      </Callout>

      <p className="my-4">
        Both competition and central direction become poor and inefficient tools if
        they are incomplete. They are <strong className="text-amber-400">alternative
        principles</strong> used to solve the same problem, and a mixture of the two
        means that neither will really work.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Key Insight</h4>
        <p className="text-dark-300">
          Planning and competition can be combined only by <strong>planning for
          competition</strong>—designing the framework within which competition
          operates—but not by <strong>planning against competition</strong>—trying
          to replace market processes with central direction.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Socialism</strong> can mean either ultimate aims (justice,
              equality, security) or particular methods (central planning, abolition
              of private property). The dispute is about <em>methods</em>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>"Planning"</strong> as used by collectivists means central
              direction of all economic activity—not merely rational foresight, which
              everyone supports.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Competition</strong> is superior not only for efficiency but
              because it coordinates activities without coercive or arbitrary
              intervention.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Liberalism is not laissez-faire</strong>—it requires a carefully
              designed legal framework and allows for substantial government activity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The modern planning movement is a <strong>movement against
              competition</strong> as such, uniting socialists of Left and Right.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The "middle way" is largely <strong>illusory</strong>: competition and
              central planning are alternative principles that cannot be mixed
              without both becoming ineffective.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The 'Inevitability' of Planning," Hayek
          examines the common claim that technological progress makes central planning
          necessary—and shows why this myth is false.
        </p>
      </Callout>
    </LessonLayout>
  );
}
