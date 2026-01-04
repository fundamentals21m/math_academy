import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "We are on strike against self-immolation. We are on strike against the creed of unearned rewards and unrewarded duties."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Galt
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In "The Utopia of Greed," Dagny explores the valley and discovers a functioning society
        built on the very principle that the outside world condemns: rational self-interest.
        Here, "greed"—properly understood as the pursuit of one's own happiness—creates harmony
        rather than conflict.
      </p>

      <Callout type="info">
        <p>
          <strong>Redefining "Greed":</strong> Rand provocatively titles this chapter to challenge
          conventional morality. In Galt's Gulch, the pursuit of profit and personal happiness
          leads to cooperation and mutual flourishing—the opposite of what altruist philosophy predicts.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        John Galt takes Dagny on a tour of the valley, showing her how the world's greatest minds
        have recreated civilization in miniature. Each person works at what they do best—not for
        society, not for duty, but for their own profit and satisfaction. Yet the result is a
        community of extraordinary productivity and genuine goodwill.
      </p>

      <p className="my-4">
        Dagny meets the missing industrialists, scientists, artists, and philosophers who have
        withdrawn from the world. She sees Ellis Wyatt's oil fields, producing once again.
        She visits Judge Narragansett, who has written a new constitution. She meets the
        philosopher Hugh Akston, working as a short-order cook—by choice, finding joy in simple
        productive work.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Economics of the Valley</h4>
        <p className="text-dark-200 text-lg mb-4">
          "We have no laws in this valley, no rules, no formal organization of any kind. We
          come here to rest from the world and to earn our living in freedom. Our only
          requirement is that you earn your way."
        </p>
        <p className="text-dark-400 text-sm">
          Midas Mulligan explaining the valley's system to Dagny.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Harmony of Interests</h3>
          <p className="text-dark-300 text-sm">When men pursue their rational self-interest honestly, their interests do not conflict—they complement each other</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Trader Principle</h3>
          <p className="text-dark-300 text-sm">All relationships in the valley are based on voluntary exchange of value for value, with no sacrifices demanded</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Joy of Work</h3>
          <p className="text-dark-300 text-sm">Work is not a burden but a source of pride and happiness when done freely for one's own benefit</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Natural Aristocracy</h3>
          <p className="text-dark-300 text-sm">Excellence rises naturally when achievement is celebrated rather than penalized</p>
        </div>
      </div>

      {/* The Valley's Residents */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Valley's Residents</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ellis Wyatt</h4>
          <p className="text-sm text-dark-300">
            The oil producer who set fire to his fields rather than let them be nationalized.
            In the valley, he has rebuilt and produces oil for the community—and for himself.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Hugh Akston</h4>
          <p className="text-sm text-dark-300">
            The great philosopher, once a professor at Patrick Henry University. He now runs
            a roadside diner in the valley, taking simple joy in feeding hungry travelers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Judge Narragansett</h4>
          <p className="text-sm text-dark-300">
            The judge who resigned when his court was overruled. He is writing amendments
            to the Constitution to prevent the government from violating individual rights.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Richard Halley</h4>
          <p className="text-sm text-dark-300">
            The composer whose music Dagny loves. He withdrew when the world finally
            accepted his work—too late, after years of rejection and suffering.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Tour of the Valley</p>
            <p className="text-sm text-dark-400">Galt shows Dagny the homes and businesses of the strikers, each a testament to human achievement</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">The Dollar Sign</p>
            <p className="text-sm text-dark-400">Dagny sees the valley's symbol: a gold dollar sign, representing free trade and earned wealth</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny Must Work</p>
            <p className="text-sm text-dark-400">While injured, Dagny cannot leave; she must earn her stay by working as Galt's housekeeper</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Power Plant</p>
            <p className="text-sm text-dark-400">Dagny sees Galt's motor in operation—the revolutionary invention that could power the world</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Gold Standard:</strong> The valley uses only gold and silver as money—real
          value that cannot be inflated or manipulated by governments. This represents economic
          freedom and honest exchange.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        Dagny experiences a profound internal transformation. For the first time, she lives in a
        world where her values are shared by everyone around her. She feels the intoxicating
        freedom of a society without guilt, without demands for sacrifice, without the constant
        battle against those who resent her ability.
      </p>

      <p className="my-4">
        Yet she cannot fully surrender to this happiness. Her railroad—Taggart Transcontinental—still
        exists in the outside world. Her brother James, incompetent and corrupt, is destroying
        everything she built. She feels torn between the world she has found and the world she
        refuses to abandon.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Dagny's Dilemma</h4>
        <p className="text-dark-200 text-lg">
          "You would have to give up the world. You would have to renounce the looters and the
          victims who permit the looting. You would have to stay here with us."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          The choice Galt presents to Dagny—and the choice she cannot yet make.
        </p>
      </div>

      {/* The Dollar Sign */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Symbol of the Dollar</h2>

      <p className="my-4">
        The valley's symbol is a three-foot-tall sign of the dollar, made of gold. This provocative
        choice represents Rand's moral defense of capitalism. The dollar sign, she argues, is the
        symbol of free trade, of value freely earned and freely exchanged.
      </p>

      <Callout type="warning">
        <p>
          <strong>Reclaiming the Symbol:</strong> Where the outside world treats money as evil
          and profit as shameful, the valley celebrates both as signs of productive achievement.
          The dollar sign is worn proudly—it represents the trader's principle: value for value.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. The chapter provocatively titles the valley's society a "Utopia of Greed." How does Rand attempt to redefine the word "greed"? Do you find her redefinition convincing, or does the traditional negative connotation still apply?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Hugh Akston, one of the world's greatest philosophers, works happily as a short-order cook in the valley. What point is Rand making about the nature of work and dignity? Do you agree that any honest work done freely can be fulfilling?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The valley uses only gold and silver as money. What are the philosophical arguments for and against a gold standard? How does Rand connect monetary policy to moral principles?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The valley has "no laws, no rules, no formal organization." Could such a society actually function in the real world, or does it only work because the inhabitants share identical values? What problems might arise in a larger, more diverse community operating on these principles?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rational self-interest creates harmony:</strong> When people pursue their
              own happiness honestly, they benefit each other through voluntary exchange.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The valley functions without coercion:</strong> No laws, no regulations,
              no forced charity—only the requirement that each person earns their way.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Work is a value, not a burden:</strong> The strikers find joy in productive
              work, regardless of its status—a philosopher happily runs a diner.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>The dollar sign is reclaimed:</strong> Money represents achievement and
              free exchange—it is worn as a badge of honor in the valley.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny remains torn:</strong> She loves what she has found but cannot yet
              abandon the railroad she built in the world outside.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
