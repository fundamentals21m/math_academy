import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The control of the production of wealth is the control of human life itself."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Hilaire Belloc, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Most planners who have seriously considered the practical aspects of their task have
        little doubt that a directed economy must be run on more or less dictatorial lines.
        But their hope is that this dictatorship will be confined to <em>economic matters</em>.
        In this chapter, Hayek exposes the fundamental flaw in this assumption: there is no
        such thing as a <strong className="text-amber-400">"merely economic"</strong> sphere
        that can be controlled without controlling all of life.
      </p>

      {/* Section 1: The Illusion of "Merely Economic" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Illusion of "Merely Economic"</h2>

      <p className="my-4">
        The belief that the power exercised over economic life is a power over matters of
        secondary importance only, and which therefore makes it possible to leave the realm
        of higher values free from government interference, is found in almost all planners.
        But this is a <strong className="text-amber-400">complete misunderstanding</strong>
        of what economic control really means.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Central Point:</strong> Economic control is not merely control of a
          sector of human life which can be separated from the rest; it is the control of
          the <em>means</em> for all our ends. And whoever has sole control of the means
          must also determine <em>which ends</em> are to be served, which values are to be
          rated higher and which lower—in short, what men should believe and strive for.
        </p>
      </Callout>

      <p className="my-4">
        Our economic freedom—what appears to the socialist as mere "freedom to exploit"—is
        actually <strong className="text-amber-400">freedom to use our resources for whatever
        purpose we see fit</strong>. It is this freedom that is at stake when we speak of
        economic freedom.
      </p>

      {/* Section 2: Money as the Instrument of Freedom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Money: The Great Instrument of Freedom</h2>

      <p className="my-4">
        The use of money gives us so much freedom that we take it for granted. In a
        free society, we are free within a known range of choices—the size of which
        depends on our income. But we are <em>free</em> within it.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">What Money Makes Possible</h4>
        <p className="text-dark-300 mb-4">
          Money is one of the greatest instruments of freedom ever invented by man. In
          existing society, it opens an astounding range of choice to the poor man—a
          range greater than that which not many generations ago was open to the wealthy.
        </p>
        <p className="text-dark-400 text-sm">
          We can choose with whom we trade; we can search for somebody willing to
          provide what we want at a price we are willing to pay. We are not dependent
          on particular people being willing to supply us.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "It would be much truer to say that money is one of the greatest instruments
        of freedom ever invented by man. It is money which in existing society opens
        an astounding range of choice to the poor man."
      </blockquote>

      {/* Section 3: The False Distinction of "Economic Ends" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Myth of Separate "Economic Ends"</h2>

      <p className="my-4">
        One common argument against economic freedom is that economic motives are somehow
        base or ignoble—that restricting them harms nobody's "higher" values. But this rests
        on a fatal confusion about what economic activity really is.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Common View</h4>
          <p className="text-sm text-dark-300">
            That there are "economic motives" distinct from other human motives—materialistic,
            base concerns separate from our "higher" values.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Reality</h4>
          <p className="text-sm text-dark-300">
            "Economic" describes the <em>aspect</em> of all our endeavors—our efforts to
            secure means for ends, using scarce resources. The ends themselves vary infinitely.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What We Really Choose</h4>
          <p className="text-sm text-dark-300">
            When we choose between economic alternatives, we choose between different
            <em> ultimate values</em>—travel or a new coat, better food or more books.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Consequence</h4>
          <p className="text-sm text-dark-300">
            Control over "economic" life is control over all the means that serve our
            ends—and thus control over <em>which ends</em> can be pursued.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>The Key Insight:</strong> There is no separate economic motive. When
          we are said to act from "economic motives," we actually mean that our non-economic
          aims—whatever they may be—are limited by the concern for the means available.
          All ends compete for the same limited resources.
        </p>
      </Callout>

      {/* Section 4: What Central Control Really Means */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Central Control Really Means</h2>

      <p className="my-4">
        Whoever controls all economic activity controls the means for all our ends—and must
        therefore decide which ends are to be satisfied and which not. This is the position
        of the central planner. In making these decisions, the planner necessarily determines
        <strong className="text-amber-400"> the relative importance of different ends</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">In a Free Market</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Each person decides what matters most to them</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>No one determines all the prices you face</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>You decide how to allocate your own resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Your ends need not match anyone else's ranking</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Under Central Planning</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>The authority decides what is important</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>All prices and quantities are determined by the plan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Resources flow to state-determined priorities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Your values must yield to the "social" scale</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        The question is not whether the economic planner will decide what we <em>want</em>,
        but whether his decisions will determine what we <em>get</em>—and at what cost.
        Since the planner must allocate all resources, he necessarily determines what each
        person can obtain and on what terms.
      </p>

      {/* Section 5: Control of Consumption and Production */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Control of Consumption and Production</h2>

      <p className="my-4">
        Some argue that planning need only control <em>production</em> while leaving
        <em> consumption</em> free. This is another illusion. The authority directing
        production will control consumption because it determines what goods are available.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Freedom in the Closet</h4>
        <p className="text-dark-300">
          Leaving us free to decide what we consume once we have only these options
          is no real freedom at all. The consumer's sovereignty—the power of demand to
          direct production—is precisely what planning destroys. In a planned system,
          the <strong>producer</strong> (the state) decides what will be made, not the
          consumer.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Illusion of "Free Consumer Choice":</strong> The authority would
          have full power to decide between "guns and butter"—and to determine for the
          consumer how much of which he is to have. One cannot have guns <em>and</em>
          butter in unlimited quantities. The deciding power lies with whoever controls
          the means of production.
        </p>
      </Callout>

      {/* Section 6: The Fiction of "Free Choice of Occupation" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Fiction of Free Choice of Occupation</h2>

      <p className="my-4">
        Nothing makes the character of a planned economy so plausible or so intolerable as
        the extent to which freedom of occupation must be restricted under it. The complete
        direction of all economic activity involves <strong className="text-amber-400">
        control over what each person may do for a living</strong>.
      </p>

      <p className="my-4">
        The fiction that we could be "free" to choose our occupation while the state
        determines wages and conditions is pure illusion. If the planner determines what
        jobs exist, what they pay, and what working conditions prevail, our "choice" becomes
        merely choosing among whatever options the planner has decided to offer.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "To believe that the power which is thus conferred on the state is merely power
        over 'economics,' not touching on the more important human values, is itself the
        product of an incomplete conception of life."
      </blockquote>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">What "Directed Labor" Really Means</h4>
        <p className="text-dark-300 mb-4">
          No planner has yet tried to explain how there could be <em>both</em> central
          economic planning <em>and</em> genuine freedom of occupation. Either the plan
          determines where people work—or the plan is not really a plan.
        </p>
        <p className="text-dark-400 text-sm">
          Even if no direct coercion is used, control over wages and conditions of work
          can make any job intolerable—or make only one job tolerable. This is a power
          "not much better than slavery."
        </p>
      </div>

      {/* Section 7: The Importance of the "Unimportant" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why "Unimportant" Freedoms Matter</h2>

      <p className="my-4">
        Would we really mind so much if economic freedom were taken away? Planners console
        us that the freedoms affected are "merely economic"—matters of food, housing, clothing.
        But consider what this means.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Freedom to Travel</h4>
          <p className="text-sm text-dark-300">
            Whether, when, and where we travel depends on economic resources and economic
            permissions. No economic freedom means no freedom to travel.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Freedom to Choose Our Work</h4>
          <p className="text-sm text-dark-300">
            The choice of occupation—perhaps the most important choice in most people's
            lives—becomes an illusion when all employers are the state.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Freedom of Home and Leisure</h4>
          <p className="text-sm text-dark-300">
            How we spend our free time, what hobbies we pursue, what we read and learn—all
            depend on economic resources we control.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Freedom of Expression</h4>
          <p className="text-sm text-dark-300">
            Even free speech and free press require material resources. When the state
            controls all printing, all paper, all halls—how free is speech?
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        The so-called "economic" freedoms are often dearer to us than anything else. If we
        had to choose one freedom above others, it would often be what our masters call
        "merely economic."
      </p>

      {/* Section 8: Private Property as Guarantee of Freedom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Private Property as the Guarantee of Freedom</h2>

      <p className="my-4">
        What our generation has forgotten is that the system of private property is the most
        important <strong className="text-amber-400">guarantee of freedom</strong>—not only
        for those who own property but almost equally for those who do not.
      </p>

      <Callout type="info">
        <p>
          <strong>Why Property Protects the Propertyless:</strong> It is only because the
          control of the means of production is divided among many people acting
          independently that nobody has complete power over us. If all the means of
          production were vested in a single hand—whether nominally that of "society"
          or a dictator—whoever exercises this control has complete power over us.
        </p>
      </Callout>

      <p className="my-4">
        In a competitive society, the employed person can—if unhappy—move to another employer.
        But what if there is only one employer—the state? Then there is no escape. Every
        economic grievance becomes a political grievance, to be solved only by political
        submission.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Real Meaning of "Social Ownership"</h4>
        <p className="text-dark-300">
          When it is said that the means of production should be "owned by society," what
          this really means is that they will be owned by <strong>the state</strong>—which
          means controlled by <strong>those who control the state</strong>. The question
          becomes: who are those people, and what checks exist on their power?
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Economic control is <strong>control of the means for all ends</strong>.
              There is no separate "economic sphere" that can be controlled without
              controlling all of life.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Money is a great instrument of freedom</strong>—it opens choice
              to even the poor, allowing trade with many rather than dependence on one.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              There is no separate <strong>"economic motive"</strong>—all our ends
              compete for the same scarce means. Economic choices are choices among
              ultimate values.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Control of production inevitably means <strong>control of consumption</strong>.
              The authority that decides what is made decides what we can have.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Freedom of occupation</strong> under planning is fictitious—if the
              state controls all jobs, wages, and conditions, our "choice" is illusory.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              <strong>Private property</strong> is the essential guarantee of freedom—
              even for the propertyless—because it divides control among many independent
              actors.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Who, Whom?", Hayek examines how planning
          necessarily involves some people deciding the fate of others—and why in a
          planned society the crucial question becomes Lenin's blunt formula: "Who plans
          whom? Who directs and dominates whom?"
        </p>
      </Callout>
    </LessonLayout>
  );
}
