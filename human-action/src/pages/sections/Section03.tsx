import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Polylogism types visualization
function PolylogismTypes() {
  const [activeType, setActiveType] = useState<'marxian' | 'racial' | null>('marxian');

  const types = {
    marxian: {
      name: 'Marxian Polylogism',
      claim: 'Different social classes have fundamentally different logical structures',
      groups: ['Bourgeoisie', 'Proletariat'],
      example: '"Bourgeois economics" reflects capitalist class interests, not objective truth',
      critique: 'When a worker becomes an entrepreneur, does their logical structure transform? Marx never explained how this works.',
      color: 'rose',
    },
    racial: {
      name: 'Racial Polylogism',
      claim: 'Different races have fundamentally different logical structures',
      groups: ['Race A', 'Race B', 'Race C'],
      example: '"Aryan science" vs. "Jewish science" in Nazi ideology',
      critique: 'Natural selection would have eliminated organisms incapable of sound reasoning. All surviving humans share successful logical frameworks.',
      color: 'purple',
    },
  };

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">Types of Polylogism</h4>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveType('marxian')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeType === 'marxian'
              ? 'bg-rose-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Marxian
        </button>
        <button
          onClick={() => setActiveType('racial')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeType === 'racial'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Racial
        </button>
      </div>

      {activeType && (
        <div className="space-y-4">
          <div className="bg-dark-900 rounded-lg p-4">
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-1">Core Claim</p>
            <p className={`text-${types[activeType].color}-400 font-medium`}>
              {types[activeType].claim}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-900/50 rounded-lg p-4">
              <p className="text-dark-500 text-xs uppercase tracking-wide mb-2">Example</p>
              <p className="text-dark-300 text-sm italic">"{types[activeType].example}"</p>
            </div>
            <div className="bg-dark-900/50 rounded-lg p-4">
              <p className="text-amber-400 text-xs uppercase tracking-wide mb-2">Mises's Critique</p>
              <p className="text-dark-300 text-sm">{types[activeType].critique}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4">
            {types[activeType].groups.map((group, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-12 h-12 rounded-full bg-${types[activeType].color}-600/30 border border-${types[activeType].color}-600 flex items-center justify-center`}>
                  <span className="text-lg">🧠</span>
                </div>
                <span className="text-dark-400 text-sm">{group}</span>
                {i < types[activeType].groups.length - 1 && (
                  <span className="text-dark-600 mx-2">≠</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-dark-500 text-sm">
            Polylogism claims these groups have incompatible logical structures
          </p>
        </div>
      )}
    </div>
  );
}

// The logical problem with polylogism
function PolylogismCritique() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'The Polylogist Claim',
      content: 'Different groups (classes, races) have different logical structures, so their conclusions cannot be compared.',
      icon: '📢',
    },
    {
      title: 'The Missing Specification',
      content: 'No polylogist has ever specified exactly HOW these logics differ. What are the different axioms? What rules vary?',
      icon: '❓',
    },
    {
      title: 'The Inconsistency',
      content: 'Marxists claim bourgeois ideas are "ideological" distortions, but their own doctrines are absolute truth. Why the exception?',
      icon: '⚖️',
    },
    {
      title: 'The Self-Refutation',
      content: 'If logic varies by group, then the polylogist\'s argument itself is just their group\'s ideology—not an objective claim about reality.',
      icon: '🔄',
    },
    {
      title: 'Mises\'s Conclusion',
      content: 'Polylogism is an evasion, not an argument. It allows dismissing opponents without actually engaging their reasoning.',
      icon: '✓',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">Why Polylogism Fails</h4>

      <div className="flex justify-between mb-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              step === i
                ? 'bg-amber-600 text-white'
                : step > i
                ? 'bg-amber-600/30 text-amber-400'
                : 'bg-dark-700 text-dark-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-6 text-center">
        <div className="text-4xl mb-3">{steps[step].icon}</div>
        <h5 className="text-amber-400 font-semibold mb-2">{steps[step].title}</h5>
        <p className="text-dark-300">{steps[step].content}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-4 py-2 rounded bg-dark-700 text-dark-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-600 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 rounded bg-amber-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-500 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Ideology concept exploration
function IdeologyExplorer() {
  const [showMises, setShowMises] = useState(false);

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-amber-400">The Marxian Concept of "Ideology"</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-rose-900/20 rounded-lg p-4 border border-rose-600/30">
          <h5 className="text-rose-400 font-semibold mb-2">Marxian Definition</h5>
          <p className="text-dark-300 text-sm mb-3">
            An "ideology" is a doctrine that:
          </p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Serves the interests of a particular class</li>
            <li>• Is factually incorrect or distorted</li>
            <li>• Masks its true purpose behind apparent objectivity</li>
          </ul>
          <p className="text-dark-500 text-sm mt-3 italic">
            Example: "Classical economics is bourgeois ideology—it justifies capitalism."
          </p>
        </div>

        <div
          className={`rounded-lg p-4 border cursor-pointer transition-all ${
            showMises
              ? 'bg-amber-900/20 border-amber-600/30'
              : 'bg-dark-700 border-dark-600 hover:border-dark-500'
          }`}
          onClick={() => setShowMises(!showMises)}
        >
          <h5 className={`font-semibold mb-2 ${showMises ? 'text-amber-400' : 'text-dark-400'}`}>
            {showMises ? "Mises's Response" : "Click to see Mises's response"}
          </h5>
          {showMises ? (
            <>
              <p className="text-dark-300 text-sm mb-3">
                This concept is self-defeating:
              </p>
              <ul className="text-dark-400 text-sm space-y-1">
                <li>• False beliefs cannot genuinely advance anyone's interests</li>
                <li>• Psychological motives don't affect theoretical validity</li>
                <li>• A theory stands or falls on its own merit</li>
              </ul>
              <p className="text-amber-400 text-sm mt-3 italic">
                "Even if an economist's motives are base, his arguments must be refuted on logical grounds."
              </p>
            </>
          ) : (
            <div className="h-24 flex items-center justify-center">
              <span className="text-dark-500 text-4xl">?</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The revolt against reason was directed against another target. It did not
        aim at natural sciences, but at economics."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Ludwig von Mises, Human Action, Chapter III
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Chapter III examines one of the most dangerous intellectual developments of
        the modern era: the attack on reason itself. Mises argues that this attack
        originated not from skeptical philosophers but from
        <strong className="text-amber-400"> socialist critics</strong> who could not
        defeat classical economics through rational argument and so resorted to
        denying the universality of logic.
      </p>

      <Callout type="warning">
        <p>
          <strong>Why this matters:</strong> If different groups have fundamentally
          different logics, then rational debate becomes impossible. This chapter
          defends the foundation on which all of praxeology rests: the universality
          of human reason.
        </p>
      </Callout>

      {/* Section 1: The Revolt Against Reason */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Revolt Against Reason</h2>

      <p className="my-4">
        The modern revolt against reason did not begin with attacks on mathematics or
        physics. It began with attacks on <strong className="text-amber-400">economics</strong>.
        Why? Because economic theory yielded conclusions that contradicted socialist programs.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Historical Context</h4>
        <div className="space-y-4 text-dark-300">
          <p>
            <strong>1. Classical Economics Develops:</strong> Economists like Smith, Ricardo,
            and Say developed theories of markets, prices, and production. Their conclusions
            generally supported free markets and private property.
          </p>
          <p>
            <strong>2. Socialists Object:</strong> Socialist thinkers wanted to abolish
            private property and markets. But economists showed why socialist schemes
            would fail (e.g., the calculation problem).
          </p>
          <p>
            <strong>3. Unable to Refute, They Attack:</strong> Rather than engaging
            the economists' arguments, socialists claimed that "bourgeois logic" itself
            was flawed—economics reflected class bias, not objective truth.
          </p>
        </div>
      </div>

      <p className="my-4">
        This strategy—attacking the tool of reason rather than the conclusions reached
        by reason—spread beyond economics into other domains, undermining confidence
        in rational discourse generally.
      </p>

      {/* Section 2: The Logical Aspect of Polylogism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Logical Aspect of Polylogism</h2>

      <p className="my-4">
        <strong className="text-amber-400">Polylogism</strong> is the doctrine that
        different groups of people have fundamentally different and incompatible
        logical structures. Mises examines two main variants:
      </p>

      <PolylogismTypes />

      <p className="my-4">
        The logical problem with polylogism is devastating: no polylogist has ever
        actually <em>specified</em> how the different logics differ. They simply
        assert that opponents' reasoning is invalid without demonstrating why.
      </p>

      <PolylogismCritique />

      <Callout type="note">
        <p>
          <strong>The key question Marxists never answer:</strong> If Ricardo's
          economics is valid under "bourgeois logic" but invalid under "proletarian
          logic," what specific axiom or rule of inference differs between them?
          Marx never said.
        </p>
      </Callout>

      {/* Section 3: The Praxeological Aspect of Polylogism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Praxeological Aspect of Polylogism</h2>

      <p className="my-4">
        Marxists employ a particular concept of <strong className="text-amber-400">"ideology"</strong>
        to dismiss opponents' arguments. An ideology, in Marxian terms, is a doctrine
        that serves class interests while being factually false. But this concept
        contains a fatal flaw.
      </p>

      <IdeologyExplorer />

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">False Beliefs Don't Help</h4>
          <p className="text-sm text-dark-300">
            If a doctrine is factually wrong, it cannot genuinely serve anyone's
            interests. Acting on false beliefs leads to failure, not success.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Motives Don't Determine Truth</h4>
          <p className="text-sm text-dark-300">
            Even if an economist is motivated by greed or class loyalty, his
            arguments must be evaluated on their merits, not his psychology.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Marxist Exception</h4>
          <p className="text-sm text-dark-300">
            Marxists claim their own doctrines are absolute truth, not mere
            ideology. But by their own logic, why should proletarian ideas be exempt?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Ad Hominem Fallacy</h4>
          <p className="text-sm text-dark-300">
            Dismissing arguments by attacking the arguer's class position or
            motives is a logical fallacy, not a refutation.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Racial Polylogism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Racial Polylogism</h2>

      <p className="my-4">
        Racial polylogism makes the same error as Marxian polylogism, substituting
        race for class. It claims that different races have fundamentally different
        logical structures, so an "Aryan" cannot truly understand "Jewish" thought
        (or vice versa).
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Mises's Critique of Racial Polylogism</h4>
        <div className="space-y-3 text-dark-300">
          <p>
            <strong>The Evolutionary Argument:</strong> Reason demonstrably works.
            It enables humans to survive and flourish. Natural selection would have
            eliminated organisms incapable of grasping cause-and-effect relationships
            or drawing valid inferences.
          </p>
          <p>
            <strong>The Implication:</strong> All humans must share the same successful
            logical framework—the framework that enables effective action in the world.
            Different races could not have developed fundamentally incompatible logics
            and all survived.
          </p>
          <p>
            <strong>The Same Failure:</strong> Like Marxian polylogism, racial polylogism
            never specifies how "Aryan logic" differs from "Jewish logic." It simply
            asserts incompatibility without demonstration.
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>Historical note:</strong> Mises, himself Jewish and forced to flee
          the Nazis, had personal reasons to oppose racial polylogism. But his argument
          is purely logical: the doctrine is self-refuting nonsense regardless of who
          advances it.
        </p>
      </Callout>

      {/* Section 5: Polylogism and Understanding */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Polylogism and Understanding</h2>

      <p className="my-4">
        A milder form of polylogism concedes that all humans share the same logical
        structure but claims that different groups have systematically different
        <strong className="text-amber-400"> value judgments</strong> and
        <strong className="text-amber-400"> historical understanding</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-600">
          <h3 className="text-lg font-semibold text-dark-400 mb-3">The Milder Claim</h3>
          <p className="text-dark-400 text-sm">
            "All workers share similar values and interpretations of history that
            differ systematically from those of capitalists."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Mises's Response</h3>
          <p className="text-dark-300 text-sm">
            This ignores the <em>heterogeneity within groups</em>. Workers disagree
            with each other constantly. Capitalists disagree with each other.
            There is no uniform "class consciousness."
          </p>
        </div>
      </div>

      <p className="my-4">
        Moreover, the same fundamental problem remains: if some group's beliefs are
        systematically false (mere "ideology"), those false beliefs cannot actually
        serve their interests. Error is error, regardless of who commits it.
      </p>

      {/* Section 6: The Case for Reason */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Case for Reason</h2>

      <p className="my-4">
        Mises concludes the chapter with a defense of reason itself. Reason is an
        <strong className="text-amber-400"> ultimate given</strong>—we cannot prove
        its validity using reason (that would be circular). But it is humanity's
        foremost tool and the foundation of civilization.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-4">The Indispensability of Reason</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-2">What Reason Provides</p>
            <ul className="text-dark-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Understanding of cause and effect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Ability to select appropriate means</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Communication and cooperation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Learning from experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Foundation of civilization itself</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-dark-500 text-xs uppercase tracking-wide mb-2">Why Abandoning It Fails</p>
            <ul className="text-dark-400 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-dark-500">•</span>
                <span>"Instinct" cannot replace reasoned analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark-500">•</span>
                <span>Renouncing reason is self-refuting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark-500">•</span>
                <span>There is no coherent "irrational" alternative</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark-500">•</span>
                <span>Critics of reason use reason to criticize</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "There can be no such thing as an irrational mode of thinking. To renounce
        reason and return to guidance by 'instinct' would destroy the foundations
        of civilization."
      </blockquote>

      <Callout type="success">
        <p>
          <strong>The bottom line:</strong> Polylogism is not a serious philosophical
          position—it is a rhetorical strategy for evading arguments one cannot
          refute. The universality of reason remains intact, and with it, the
          foundation of economics as a science.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>revolt against reason</strong> originated from socialist critics
              unable to defeat classical economics through rational argument.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Polylogism</strong> claims different groups (classes, races) have
              incompatible logical structures—a doctrine that is never actually demonstrated.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The Marxian concept of <strong>"ideology"</strong> is self-defeating: false
              beliefs cannot genuinely advance anyone's interests.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Racial polylogism</strong> fails for the same reasons plus an
              evolutionary argument: sound reasoning is necessary for survival.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Reason is an ultimate given</strong>—we cannot prove it using
              reason, but it is humanity's foremost tool and the basis of civilization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Polylogism is an <strong>evasion tactic</strong>, not a philosophical
              position—a way to dismiss arguments without engaging them.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="info">
        <p>
          <strong>Next chapter:</strong> Chapter IV presents "A First Analysis of
          the Category of Action"—examining the fundamental concepts of ends and
          means, the scale of value, and action as exchange.
        </p>
      </Callout>
    </LessonLayout>
  );
}
