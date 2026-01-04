import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The words 'to make money' hold the essence of human morality... Not an empty bag of coins, but the ability to produce."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Francisco d'Anconia
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        While Dagny remains in the valley, the outside world continues its collapse. "Anti-Greed"
        shows the contrast between the valley's celebration of profit and the looters' escalating
        war against productive achievement. The world's governments implement ever more destructive
        policies in the name of fighting "greed."
      </p>

      <Callout type="info">
        <p>
          <strong>The Irony of "Anti-Greed":</strong> The chapter title highlights the contradiction
          in collectivist morality—those who claim to oppose "greed" are themselves greedy for the
          unearned, while those accused of greed are actually traders who give value for value.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The narrative shifts between Dagny's month in the valley and the deteriorating conditions
        of the outside world. News reports filter in describing new laws against "economic crimes,"
        price controls, production quotas, and the nationalization of remaining industries.
        Each measure, intended to fight "greed," accelerates the economic collapse.
      </p>

      <p className="my-4">
        In Washington, the looters grow increasingly desperate. Wesley Mouch and his allies pass
        Directive 10-289, a comprehensive plan to freeze the economy in place—forbidding anyone
        from quitting their job, changing their business, or introducing new products. It is the
        logical endpoint of the anti-profit philosophy: the total enslavement of the productive
        to the demands of the unproductive.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Directive 10-289</h4>
        <p className="text-dark-200 text-lg mb-4">
          "In the name of the general welfare... all workers, wage earners, and employees of any
          kind whatsoever shall henceforth be attached to their jobs and shall not leave nor be
          dismissed nor change employment."
        </p>
        <p className="text-dark-400 text-sm">
          The directive turns every American into a slave, bound to their position by law.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Contradiction of Controls</h3>
          <p className="text-dark-300 text-sm">Each control creates a crisis requiring more controls, in an escalating spiral toward total tyranny</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Who Are the Greedy?</h3>
          <p className="text-dark-300 text-sm">The looters who demand the unearned accuse the producers who create wealth of "greed"</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Sanction of the Victim</h3>
          <p className="text-dark-300 text-sm">The system depends on producers accepting guilt for their achievement</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Freedom vs. Security</h3>
          <p className="text-dark-300 text-sm">The promise of "security" through government control leads to universal poverty and slavery</p>
        </div>
      </div>

      {/* The Outside World */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Collapse of the Outside World</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Economic Paralysis</h4>
          <p className="text-sm text-dark-300">
            Factories close, trains stop running, cities go dark. The productive capacity
            of the nation withers as those who could produce choose not to.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Looters' Panic</h4>
          <p className="text-sm text-dark-300">
            Wesley Mouch, James Taggart, and their allies sense they are losing control.
            Their response is not to free the economy but to tighten their grip.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Public Despair</h4>
          <p className="text-sm text-dark-300">
            Ordinary people grow hopeless. The phrase "Who is John Galt?" transforms from
            a joke into a genuine cry of desperation and longing.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Hank Rearden's Struggle</h4>
          <p className="text-sm text-dark-300">
            The last great industrialist still operating, Rearden faces impossible demands.
            The looters need him but cannot stop attacking him.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Passage of Directive 10-289</p>
            <p className="text-sm text-dark-400">The comprehensive slavery decree that freezes the entire economy and binds every worker to their job</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The "Anti-Greed" Campaign</p>
            <p className="text-sm text-dark-400">Government propaganda intensifies, blaming the crisis on "selfish" businessmen rather than policies</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">More Producers Disappear</p>
            <p className="text-sm text-dark-400">The strike accelerates as capable people vanish rather than submit to the new controls</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny Receives News</p>
            <p className="text-sm text-dark-400">From her sanctuary in the valley, Dagny learns of the disaster befalling her railroad</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Logic of Collectivism:</strong> Rand shows how anti-profit policies follow
          an inexorable logic. If profit is evil, then production for profit must be controlled.
          If people flee controls, they must be forced to stay. The endpoint is slavery.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">Dagny</strong> watches the destruction from the valley with
        anguish. Each report of a new disaster, each announcement of a new regulation, tears at her
        determination to return. Yet she still believes she can save something—she cannot accept
        that the battle is already lost.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">Hank Rearden</strong>, still in the outside world, faces
        the full weight of Directive 10-289. He is ordered to sign his patents over to the government,
        to accept production quotas, to become a slave in his own mills. His resistance is heroic
        but increasingly futile.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Looters' Confession</h4>
        <p className="text-dark-200 text-lg">
          "We need you. We need your Metal. We need your mills. Without you, we're done for...
          But we cannot permit you to succeed. We cannot permit you to have what you've earned."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          The contradiction at the heart of the looters' system—they need producers but cannot
          allow them to be free.
        </p>
      </div>

      {/* The Real Meaning of Greed */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Real Meaning of Greed</h2>

      <p className="my-4">
        The chapter forces readers to examine what "greed" really means. In common usage, it
        describes an excessive desire for wealth. But Rand distinguishes between two types of
        desire for values:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-green-600/50">
          <h3 className="text-lg font-semibold text-green-400 mb-2">The Trader's Desire</h3>
          <p className="text-dark-300 text-sm">
            The desire to create wealth, to earn rewards through productive work, to exchange
            value for value. This is the "greed" of the valley—and it harms no one.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/50">
          <h3 className="text-lg font-semibold text-red-400 mb-2">The Looter's Desire</h3>
          <p className="text-dark-300 text-sm">
            The desire to take wealth from others, to receive rewards without earning them,
            to consume what others produce. This is the true greed—and it destroys everything.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Directive 10-289 forbids workers from leaving their jobs and businesses from changing their products. How does Rand argue that such "protective" measures logically follow from anti-profit philosophy? Can you identify any real-world policies that exhibit similar logic?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The chapter distinguishes between the "trader's desire" (creating wealth through productive work) and the "looter's desire" (taking wealth from others). Where would you draw the line between legitimate profit-seeking and exploitation? Are there gray areas Rand's framework doesn't address?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The looters confess: "We need you... But we cannot permit you to succeed." What does this contradiction reveal about the psychology of envy? Have you observed similar contradictions in political or social discourse today?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Rand argues that each economic control creates problems that justify further controls, leading inevitably toward total tyranny. Is this a valid concern about government intervention, or is it a slippery slope fallacy? Can you think of historical examples that support or refute this argument?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Directive 10-289 represents total control:</strong> The logical endpoint
              of anti-profit philosophy is the enslavement of all productive people.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>"Anti-greed" is itself greedy:</strong> Those who condemn profit are greedy
              for the unearned—they want wealth without the effort of creating it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Controls breed more controls:</strong> Each intervention creates new problems,
              which are used to justify further interventions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The looters need producers:</strong> They cannot survive without those they
              condemn, yet they cannot allow producers to be free.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny's conflict intensifies:</strong> She sees the destruction but still
              cannot bring herself to abandon the world.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
