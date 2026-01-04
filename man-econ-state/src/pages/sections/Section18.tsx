import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The only viable path to the good society is one that is consonant with human nature
        and human action—the free society."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        We conclude our study of <em>Man, Economy, and State</em> and <em>Power and Market</em>
        with Rothbard's vision of the relationship between economics and public policy. What
        can economics tell us about how society should be organized?
      </p>

      {/* Section 1: The Role of Economic Science */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Role of Economic Science</h2>

      <p className="my-4">
        Economics as a science is <strong className="text-emerald-400">wertfrei</strong>
        (value-free)—it describes cause and effect, not what should be. But this doesn't
        mean it has nothing to say about policy.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">What Economics Can Do</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Trace consequences of policies</li>
            <li>• Show if means achieve ends</li>
            <li>• Expose hidden costs</li>
            <li>• Reveal unintended effects</li>
          </ul>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">What Economics Cannot Do</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Prescribe ultimate goals</li>
            <li>• Make value judgments</li>
            <li>• Say what "should" be</li>
            <li>• Compare utilities across people</li>
          </ul>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>The economist as advisor:</strong> The economist says "If you want X, then
          do Y"—but cannot say whether X is worth wanting. That is a question of ethics.
        </p>
      </Callout>

      {/* Section 2: The Case for the Free Market */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Economic Case for the Free Market</h2>

      <p className="my-4">
        Throughout this course, we've seen that the free market coordinates human action
        without coercion. Rothbard summarizes the case:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            point: 'Information',
            description: 'Prices convey dispersed knowledge no planner could possess.',
          },
          {
            point: 'Incentives',
            description: 'Profit and loss guide resources to highest-valued uses.',
          },
          {
            point: 'Innovation',
            description: 'Entrepreneurs discover new ways to serve consumers.',
          },
          {
            point: 'Coordination',
            description: 'Millions of plans mesh without central direction.',
          },
          {
            point: 'Capital Formation',
            description: 'Time preference and interest rates allocate resources across time.',
          },
          {
            point: 'Consumer Sovereignty',
            description: 'Consumers determine what is produced through their spending.',
          },
        ].map(({ point, description }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-emerald-600/30">
            <span className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{point}</p>
              <p className="text-sm text-dark-400">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: The Case Against Intervention */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Economic Case Against Intervention</h2>

      <p className="my-4">
        Every intervention distorts the market process. Rothbard summarizes the universal
        effects of government action in the economy:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Universal Effects of Intervention</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Reduces utility:</strong> At least one party is made worse off by coercion</li>
          <li>• <strong>Destroys information:</strong> Price signals are distorted or eliminated</li>
          <li>• <strong>Misallocates resources:</strong> Resources flow to political rather than consumer preferences</li>
          <li>• <strong>Reduces production:</strong> Incentives to produce are diminished</li>
          <li>• <strong>Creates conflict:</strong> Groups fight over the spoils of intervention</li>
          <li>• <strong>Begets more intervention:</strong> Each intervention creates problems "requiring" more</li>
        </ul>
      </div>

      <p className="my-4">
        The "mixed economy" is inherently unstable. It tends either toward full socialism
        (the logic of intervention) or toward the free market (recognizing intervention's failures).
      </p>

      {/* Section 4: The Vision of a Free Society */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. The Vision of a Free Society</h2>

      <p className="my-4">
        What would a truly free society look like? Rothbard envisions a world where all
        services—including defense and adjudication—are provided through voluntary exchange.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Private Law</h4>
          <p className="text-sm text-dark-300">
            Courts and arbitrators compete to provide justice. Law emerges from
            contracts and precedent.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Private Defense</h4>
          <p className="text-sm text-dark-300">
            Security agencies protect subscribers. Insurance companies fund
            protection as risk mitigation.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Voluntary Charity</h4>
          <p className="text-sm text-dark-300">
            Private charity, mutual aid societies, and family networks care for
            the needy without coercion.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Sound Money</h4>
          <p className="text-sm text-dark-300">
            Market-chosen commodity money (gold) prevents inflation and business
            cycles caused by credit expansion.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>Not utopia:</strong> The free society would not be perfect—human
          beings remain flawed. But it would be a society of mutual cooperation rather
          than coercion, where conflicts are resolved peacefully.
        </p>
      </Callout>

      {/* Section 5: The Path Forward */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. The Path Forward</h2>

      <p className="my-4">
        How can a free society be achieved? Rothbard emphasizes education and the
        dissemination of sound economic ideas.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Role of Ideas</h4>
        <p className="text-dark-200 text-lg mb-4">
          "In the long run, the ideas of the intellectuals determine society's course."
        </p>
        <ul className="text-dark-400 text-sm space-y-2">
          <li>• Government rests on ideological acceptance</li>
          <li>• People obey because they believe in legitimacy</li>
          <li>• Change requires changing minds</li>
          <li>• Economics education exposes intervention's failures</li>
        </ul>
      </div>

      <p className="my-4">
        The study of economics equips us to understand why interventions fail and why
        the free market succeeds. Armed with this knowledge, we can advocate for liberty
        with confidence.
      </p>

      {/* Section 6: The Synthesis */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Synthesis: Praxeology and Liberty</h2>

      <p className="my-4">
        Rothbard's treatise represents a comprehensive integration of economic theory and
        political philosophy. The key insights span two works:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Man, Economy, and State</h3>
          <p className="text-dark-300 text-sm mb-2">Pure economic theory</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Human action and praxeology</li>
            <li>• Value, exchange, and prices</li>
            <li>• Production and capital theory</li>
            <li>• Money and business cycles</li>
            <li>• Monopoly and competition</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Power and Market</h3>
          <p className="text-dark-300 text-sm mb-2">Applied political economy</p>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Defense on the free market</li>
            <li>• Types of intervention</li>
            <li>• Taxation and expenditures</li>
            <li>• Critique of antimarket ethics</li>
            <li>• Economics and public policy</li>
          </ul>
        </div>
      </div>

      {/* Course Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Course Summary</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Human action is purposeful behavior</strong>—the foundation of all
              economic analysis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>Value is subjective</strong>—determined by individuals, not inherent
              in objects.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>The market coordinates</strong> through prices, profit/loss, and
              entrepreneurship.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Intervention always fails</strong> to achieve its stated goals and
              creates unintended consequences.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              <strong>The free society</strong> is both economically efficient and ethically
              consistent with human rights.
            </span>
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>

      <p className="my-4">
        You have now completed an intensive study of Austrian economics as presented by
        Murray Rothbard. This framework provides tools for understanding economic phenomena,
        critiquing policy proposals, and envisioning a free society.
      </p>

      <Callout type="note">
        <p>
          <strong>Continue your study:</strong> This course covers the essentials, but
          Rothbard's original texts contain much more detail and many additional arguments.
          Reading the primary sources will deepen your understanding.
        </p>
      </Callout>

      <div className="bg-gradient-to-r from-emerald-900/50 to-dark-800 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 text-xl mb-3">Congratulations!</h4>
        <p className="text-dark-200">
          You have completed <em>Man, Economy, and State with Power and Market</em>. You now
          understand the praxeological approach to economics and its implications for a free
          society. May this knowledge serve you well.
        </p>
      </div>
    </LessonLayout>
  );
}
