import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The man who does not value himself, cannot value anything or anyone."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Galt
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Egoist" deepens the philosophical exploration begun in Galt's speech, focusing on
        the proper understanding of selfishness. Rand argues that rational selfishness—the
        commitment to one's own life and happiness—is not only moral but is the foundation of
        all other virtues.
      </p>

      <Callout type="info">
        <p>
          <strong>Redefining "Selfishness":</strong> Rand challenges the conventional meaning
          of selfishness (harming others for personal gain) and replaces it with a concept she
          calls "rational self-interest"—the pursuit of values that genuinely serve one's life.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Following Galt's speech, the looters are in chaos. They know they need Galt—he is the
        only one who can reverse the collapse—but they cannot accept his terms. Mr. Thompson,
        the head of state, attempts to negotiate with Galt, offering him unlimited power if he
        will take over the economy. Galt refuses: he will not accept the role of economic dictator.
      </p>

      <p className="my-4">
        The chapter explores what it means to be an "egoist" in the proper sense. Galt's refusal
        to rule is itself an act of egoism: he will not sacrifice his values for power, and he
        will not accept responsibility for a system that contradicts everything he believes. The
        true egoist does not seek power over others—he seeks freedom to live by his own judgment.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Galt's Refusal</h4>
        <p className="text-dark-200 text-lg mb-4">
          "You want me to be Economic Dictator?... I will not rule by the standards which you
          accept. I will not accept your terms. I will not agree to work for you or to be ruled
          by you. I am on strike."
        </p>
        <p className="text-dark-400 text-sm">
          Galt refuses power because accepting it would mean accepting the looters' premises.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Rational vs. Irrational Selfishness</h3>
          <p className="text-dark-300 text-sm">True selfishness pursues genuine values through honest means; the looter's "selfishness" destroys values through force</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Independence as Virtue</h3>
          <p className="text-dark-300 text-sm">The egoist relies on his own judgment, not on the approval or permission of others</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Power vs. Freedom</h3>
          <p className="text-dark-300 text-sm">The true egoist does not seek power over others—he seeks freedom from the control of others</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Self-Esteem</h3>
          <p className="text-dark-300 text-sm">Proper self-value is earned through rational achievement, not through dominance over others</p>
        </div>
      </div>

      {/* The Looters' Desperation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Looters' Desperation</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Mr. Thompson's Offer</h4>
          <p className="text-sm text-dark-300">
            The head of state offers Galt unlimited power—he can set any policy, demand any
            resources. The looters are willing to give him everything except their own surrender.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Contradiction</h4>
          <p className="text-sm text-dark-300">
            They want Galt to save them but refuse to change the system that caused the crisis.
            They want results without accepting the principles that produce them.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Galt's Analysis</h4>
          <p className="text-sm text-dark-300">
            Galt explains that he cannot "run" an economy because economies cannot be run—they
            can only be freed. Planning requires force; freedom requires only the removal of force.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Final Option</h4>
          <p className="text-sm text-dark-300">
            When persuasion fails, the looters are left with only one tool: physical force.
            They decide to capture Galt and make him cooperate—or destroy him.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Negotiations</p>
            <p className="text-sm text-dark-400">Mr. Thompson meets with Galt, attempting to bargain, bribe, or persuade him to take control</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Galt's Explanations</p>
            <p className="text-sm text-dark-400">Galt patiently explains why he cannot and will not accept their offer—why it is philosophically impossible</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">The Turn to Force</p>
            <p className="text-sm text-dark-400">When reason fails to move Galt, the looters decide they must compel his obedience</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny's Dilemma</p>
            <p className="text-sm text-dark-400">Dagny realizes that Galt is in danger but does not know how to help him without betraying him</p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Meaning of Force:</strong> The chapter demonstrates that the looters'
          system ultimately rests on physical force. When they cannot persuade or deceive,
          their only remaining tool is the gun. This is the final meaning of collectivism.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">John Galt</strong> demonstrates what true egoism looks
        like in practice. He refuses power not because he is humble but because he is proud—too
        proud to accept a position that would require him to become a slave-master. His refusal
        is the ultimate act of self-respect.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">Mr. Thompson and the Looters</strong> reveal the
        bankruptcy of their position. They have no ideas, no principles, no values—only the
        desperate need for someone competent to save them from the consequences of their own
        philosophy.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Egoist's Position</h4>
        <p className="text-dark-200 text-lg">
          "I do not seek to rule. I do not seek to be ruled. I seek only to be left alone, to
          think my own thoughts and live by my own effort. That is all I have ever wanted. That
          is all any man can rightfully want."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Galt's statement of what genuine self-interest requires.
        </p>
      </div>

      {/* The True Meaning of Selfishness */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The True Meaning of Selfishness</h2>

      <p className="my-4">
        Rand distinguishes between two very different meanings of "selfishness":
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-green-600/50">
          <h3 className="text-lg font-semibold text-green-400 mb-2">Rational Selfishness</h3>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>* Pursues genuine values that serve one's life</li>
            <li>* Uses reason to identify what is truly beneficial</li>
            <li>* Trades value for value with others</li>
            <li>* Respects the rights of others as a principle</li>
            <li>* Earns self-esteem through achievement</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/50">
          <h3 className="text-lg font-semibold text-red-400 mb-2">Irrational "Selfishness"</h3>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>* Pursues whims regardless of consequences</li>
            <li>* Uses force or fraud to get what one wants</li>
            <li>* Sacrifices others for short-term gains</li>
            <li>* Treats other people as tools to be used</li>
            <li>* Seeks self-esteem through power over others</li>
          </ul>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Looters Are Not Selfish:</strong> Paradoxically, Rand argues that the
          looters are not truly selfish—they do not value themselves enough to think, to produce,
          to live independently. They seek to exist as parasites, which is a form of self-destruction.
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Galt refuses to become Economic Dictator even though he could potentially help millions of people. Is his refusal an act of principle or an act of cruelty? When, if ever, should someone sacrifice their principles to help others in crisis?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. The chapter distinguishes between "rational selfishness" (pursuing genuine values through honest means) and "irrational selfishness" (using force or fraud). Is this distinction clear enough to be useful in practice? How would you determine which category a given action falls into?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. Rand argues that the true egoist seeks freedom, not power over others. Yet historically, many who claimed to act in self-interest have sought to dominate others. Does Rand's definition of egoism describe human nature accurately, or is it an idealized vision?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. The looters want Galt to save their system without changing its fundamental principles. Why is this request impossible to fulfill? Can you think of contemporary situations where people want solutions without accepting the changes those solutions require?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Rational selfishness is moral:</strong> The pursuit of one's own life and
              happiness through reason and production is the proper moral purpose.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The true egoist seeks freedom, not power:</strong> Galt refuses to rule
              because ruling others contradicts the values that make life worth living.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Self-esteem must be earned:</strong> Genuine self-value comes from rational
              achievement, not from dominance or parasitism.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Collectivism ends in force:</strong> When the looters cannot persuade or
              deceive, they must resort to physical compulsion.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>The conflict approaches its climax:</strong> The looters have decided
              that if Galt will not cooperate voluntarily, they will force him.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
