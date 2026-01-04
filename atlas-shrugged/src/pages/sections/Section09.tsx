import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I am leaving it as I found it. Take over. It's yours."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Ellis Wyatt's note, left at the burning oil fields
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter X ends Part One with a shocking image: <strong className="text-amber-400">Ellis Wyatt</strong>
        sets fire to his own oil fields and vanishes, leaving behind a column of flame that
        will burn for years. This act of destruction—the destruction of one's own creation
        rather than surrender it to looters—becomes known as "Wyatt's Torch."
      </p>

      <Callout type="info">
        <p>
          <strong>The title "Wyatt's Torch"</strong> names the burning oil fields that
          become a symbol of the producers' rebellion. Rather than let the looters seize
          what he has created, Wyatt destroys it himself—and disappears.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The chapter opens with the passage of new legislation designed to strangle the
        booming Colorado economy. Directive 10-289—the "Equalization of Opportunity" measures—
        threatens to freeze the economy in place, preventing anyone from changing jobs, starting
        new businesses, or innovating in any way.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">Ellis Wyatt</strong>, the oil producer whose fields
        have made Colorado's industrial boom possible, is told he must operate under impossible
        restrictions. Rather than comply—rather than watch his creation be destroyed slowly by
        incompetent bureaucrats—he chooses to destroy it himself and vanish.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Burning Fields</h4>
        <p className="text-dark-200 text-lg mb-4">
          "A pillar of fire was rising from the oil fields of Colorado... The fire was
          not being fought. There was no one to fight it. The wells had been set ablaze
          by Ellis Wyatt... The note pinned to the door of his empty house said: 'I am
          leaving it as I found it. Take over. It's yours.'"
        </p>
        <p className="text-dark-400 text-sm">
          Wyatt's act of destruction is an act of defiance—he refuses to let the looters
          benefit from his work, choosing instead to destroy what he cannot keep.
        </p>
      </div>

      {/* The New Legislation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The New Legislation</h2>

      <p className="my-4">
        The looters, having learned nothing from the success of the John Galt Line, press
        forward with more restrictions. New directives would freeze wages, freeze prices,
        prevent workers from quitting their jobs, and require businesses to produce the same
        amount as the previous year regardless of circumstances.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Wage and Price Controls</h4>
          <p className="text-sm text-dark-300">
            All wages and prices would be frozen, preventing the market from functioning.
            Producers could not raise prices to cover increased costs, nor cut production
            to match reduced demand.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Job Freezes</h4>
          <p className="text-sm text-dark-300">
            Workers would be forbidden from quitting their jobs without permission.
            The government would decide who works where, eliminating individual choice.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Production Quotas</h4>
          <p className="text-sm text-dark-300">
            Businesses would be required to produce at least as much as the previous
            year. If conditions made this impossible, the business owner would be
            criminally liable.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Innovation Ban</h4>
          <p className="text-sm text-dark-300">
            New inventions and new businesses would require government permission.
            Innovation—the source of progress—would be controlled by bureaucrats.
          </p>
        </Card>
      </CardGrid>

      {/* Ellis Wyatt's Choice */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ellis Wyatt's Choice</h2>

      <p className="my-4">
        Faced with regulations that would make it impossible to operate his oil fields
        profitably or efficiently, <strong className="text-amber-400">Ellis Wyatt</strong>
        makes a radical choice. He will not slowly watch his creation be destroyed by
        incompetent management imposed by the government. He will not let the looters
        benefit from what he has built.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Logic of Destruction</h4>
        <p className="text-dark-200 mb-4">
          Wyatt's act seems destructive, but it follows a clear logic: if the looters will
          destroy his creation anyway through incompetent management, why should they benefit
          from it even temporarily? By destroying the fields himself, Wyatt denies the looters
          the fruits of his labor and makes a statement that cannot be ignored.
        </p>
        <p className="text-dark-400 text-sm">
          This is the ultimate withdrawal of the sanction of the victim—Wyatt refuses to
          pretend that the looters' system can work.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Meaning of "Take Over. It's Yours."</strong> Wyatt's note is bitterly
          ironic. He is giving the looters exactly what they wanted—his oil fields. But now
          those fields are worthless, a flaming monument to the consequences of looting.
          If they want to run things, let them start from nothing, as he did.
        </p>
      </Callout>

      {/* The End of Part One */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The End of Part One</h2>

      <p className="my-4">
        Wyatt's Torch marks the end of Part One: "Non-Contradiction." The title refers to
        the logical principle that something cannot be both A and not-A at the same time.
        The world has been trying to maintain a contradiction—to loot the producers while
        expecting them to keep producing. Wyatt's disappearance shows that this contradiction
        cannot hold.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Strike Begins</h3>
          <p className="text-dark-300 text-sm">
            Though not yet named, the strike of the men of the mind has begun. Wyatt
            joins the other capable people who have mysteriously vanished.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Symbol</h3>
          <p className="text-dark-300 text-sm">
            The burning oil fields become a symbol visible across Colorado—a constant
            reminder of what happens when producers are pushed too far.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Question Intensifies</h3>
          <p className="text-dark-300 text-sm">
            "Who is John Galt?" takes on new urgency. Where are the capable people going?
            Who is taking them? Why are they leaving everything behind?
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Warning</h3>
          <p className="text-dark-300 text-sm">
            Wyatt's Torch is a warning to every producer: you are not safe. The looters
            will take everything. The only question is what you will do about it.
          </p>
        </div>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes Developed</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Contradiction Exposed</h4>
          <p className="text-dark-300">
            The looters' system depends on a contradiction: punishing the productive while
            expecting them to keep producing. Wyatt's act exposes this contradiction by
            removing himself from the equation.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Withdrawal of Sanction</h4>
          <p className="text-dark-300">
            By destroying his fields rather than surrendering them, Wyatt withdraws his
            sanction from the looters' system. He refuses to pretend that their approach
            can work, even at great personal cost.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">The Price of Looting</h4>
          <p className="text-dark-300">
            The looters wanted Wyatt's oil without Wyatt's mind. Now they have neither.
            The burning fields demonstrate that wealth cannot be separated from the
            minds that create it.
          </p>
        </div>
      </div>

      {/* Dagny's Response */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny's Response</h2>

      <p className="my-4">
        Dagny witnesses Wyatt's Torch with horror and incomprehension. She cannot understand
        why a man would destroy what he has built. She sees only the waste, not the principle
        behind the act. Her inability to understand foreshadows her own struggle in the chapters
        to come.
      </p>

      <Callout type="note">
        <p>
          <strong>Dagny's Blindness:</strong> Dagny is committed to fighting the looters from
          within the system. She cannot yet see that the system itself is the problem, and that
          withdrawal—not battle—may be the only answer. Wyatt's act plants a seed of doubt
          that will grow as the novel progresses.
        </p>
      </Callout>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">New Regulations Announced</p>
            <p className="text-sm text-dark-400 mt-1">
              Comprehensive economic controls are announced that would freeze the economy
              in place and criminalize normal business decisions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Ellis Wyatt Vanishes</p>
            <p className="text-sm text-dark-400 mt-1">
              Rather than operate under impossible restrictions, Wyatt disappears,
              joining the other capable people who have mysteriously left.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Wyatt's Torch</p>
            <p className="text-sm text-dark-400 mt-1">
              Wyatt sets fire to his oil fields before leaving, creating a burning
              monument that will be visible for years.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">"Take Over. It's Yours."</p>
            <p className="text-sm text-dark-400 mt-1">
              Wyatt's note gives the looters exactly what they wanted—but now it's
              worthless, a challenge rather than a gift.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">5</span>
          <div>
            <p className="font-semibold text-dark-100">Part One Ends</p>
            <p className="text-sm text-dark-400 mt-1">
              "Non-Contradiction" concludes with the image of Wyatt's Torch burning
              against the Colorado sky—a symbol of what is to come.
            </p>
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Looking Ahead</h2>

      <Callout type="success">
        <p>
          <strong>Part Two: "Either-Or"</strong> will intensify the conflict. The mystery
          of where the capable people are going will deepen. Dagny will struggle to keep
          the railroad running as the world collapses around her. And the answer to
          "Who is John Galt?" will slowly begin to emerge.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Ellis Wyatt destroys his own oil fields rather than let the looters take control of them. Is this act justified? What principle is Wyatt acting on, and what message does his destruction send? Could he have made a different choice?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Wyatt's note says "I am leaving it as I found it. Take over. It's yours." What is the bitter irony in these words? What does Wyatt mean by giving the looters exactly what they wanted—but in a form they cannot use?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Part One is titled "Non-Contradiction," referring to the logical principle that something cannot be both true and false simultaneously. What contradiction has the world been trying to maintain, and how does Wyatt's act expose it?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Dagny witnesses Wyatt's Torch with horror and cannot understand why he would destroy what he built. What does her reaction reveal about her own beliefs? What would it take for her to understand Wyatt's choice—and perhaps make a similar one herself?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Ellis Wyatt destroys his own creation</strong> rather than let the
              looters benefit from it, setting the oil fields ablaze.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>"Take over. It's yours"</strong> is Wyatt's bitter challenge to
              the looters—let them start from nothing as he did.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Wyatt's Torch</strong> becomes a symbol of the producers' rebellion,
              visible across Colorado as a constant reminder.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The contradiction is exposed:</strong> the looters cannot have
              production without producers, wealth without minds.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Part One ends</strong> with the strike of the men of the mind
              gaining momentum, though its nature remains mysterious.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
