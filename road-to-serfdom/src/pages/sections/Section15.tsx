import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Of all checks on democracy, federation has been the most efficacious
        and the most congenial. ... The federal system limits and restrains the
        sovereign power by dividing it and by assigning to Government only
        certain defined rights. It is the only method of curbing not only the
        majority but the power of the whole people."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Lord Acton, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this penultimate chapter, Hayek applies his analysis of planning to
        international relations. He argues that <strong className="text-amber-400">
        national economic planning inevitably produces international conflict</strong>,
        that international planning would be even worse, and that the only solution
        is a federal system with limited powers—one that restrains nations without
        directing them.
      </p>

      {/* Section 1: The Retreat Began Here */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Retreat Began Here</h2>

      <p className="my-4">
        In no other field has the world paid so dearly for the abandonment of
        nineteenth-century liberalism as in international relations. It was here
        that the retreat began—and yet only a small part of the lesson has been learned.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Consequences of National Planning</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Many kinds of national planning are harmful in aggregate effect</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Planning requires shutting out extraneous influences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>This inevitably leads to restrictions on movement of people and goods</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Artificially fostered "economic solidarity" creates new blocks of opposed interests</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>A Fatal Illusion:</strong> It is one of the most fatal illusions
          that by substituting negotiations between states for competition between
          individuals, international friction would be reduced. This would merely
          put a contest of <em>force</em> in place of peaceful competition.
        </p>
      </Callout>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "If we were to make no better use of victory than to countenance existing
        trends, we might indeed find that we have defeated National-Socialism merely
        to create a world of many national socialisms, differing in detail, but all
        equally totalitarian, nationalistic, and in recurrent conflict."
      </blockquote>

      {/* Section 2: Why International Planning is Worse */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why International Planning Would Be Worse</h2>

      <p className="my-4">
        Those who realise the dangers of national planning often conclude that
        planning must be done "internationally" by some super-national authority.
        But the problems of planning become <em>greater</em>, not smaller, at
        the international scale.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Scale Increases Coercion</h4>
          <p className="text-sm text-dark-300">
            As the scale increases, agreement on ends decreases and the necessity
            to rely on force and compulsion grows.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Less Common Ground</h4>
          <p className="text-sm text-dark-300">
            The wider the net is thrown, the fewer common views on relative
            importance of tasks and agreed standards of value will exist.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Who Will Sacrifice?</h4>
          <p className="text-sm text-dark-300">
            Will the Norwegian fisherman forgo improvement to help his Portuguese
            fellow? Will the French peasant pay more taxes to industrialise Italy?
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Naked Rule of Force</h4>
          <p className="text-sm text-dark-300">
            International planning cannot be anything but an imposition by a
            small group of what they think suitable for the rest.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Illusion of Agreement</h4>
        <p className="text-dark-300 mb-4">
          If most people do not see the difficulty, it is because they assume—
          consciously or unconsciously—that <em>they</em> will be the ones settling
          these questions for others.
        </p>
        <p className="text-dark-400 text-sm">
          English people realise what such schemes mean only when presented with
          the possibility that they might be a minority in the planning authority,
          and that Britain's economic development might be determined by a
          non-British majority.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Grossraumwirtschaft Lesson:</strong> The German scheme of
          large-scale economic planning can be realised only by a <em>Herrenvolk</em>
          (master race) ruthlessly imposing its aims on others. The brutality is
          not German wickedness—it is the nature of the task assumed.
        </p>
      </Callout>

      {/* Section 3: The Danger of International Economic Authorities */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Danger of Economic Authorities</h2>

      <p className="my-4">
        The belief that we can give international authorities "merely" specific
        economic powers while states retain political sovereignty rests on a
        fallacy: that economic planning is merely a technical task solvable by
        experts objectively.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Tyrannical Power</h3>
          <p className="text-dark-400 text-sm">
            Exclusive control of an essential commodity or service (like air
            transport) is one of the most far-reaching powers imaginable. Anything
            can be justified by "technical necessities" no outsider can question.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">The Worst Racket</h3>
          <p className="text-dark-400 text-sm">
            A system of comprehensive monopolies recognised by all governments but
            subject to none would inevitably become the worst of all conceivable
            rackets—even if administrators are faithful guardians.
          </p>
        </div>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "The controller of the supply of any such raw material as petrol or timber,
        rubber or tin, would be the master of the fate of whole industries and
        countries."
      </blockquote>

      <p className="my-4">
        While nations might abide by formal rules on which they have agreed, they
        will never submit to the <em>direction</em> which international economic
        planning involves. They may agree on the <strong className="text-amber-400">
        rules of the game</strong>, but they will never agree on the order of
        preference in which their needs and rate of progress are fixed.
      </p>

      {/* Section 4: The Federal Solution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Federal Solution</h2>

      <p className="my-4">
        States cannot regain unfettered sovereignty in the economic sphere without
        endangering peace. But this does not mean giving a super-state powers we
        have not learnt to use intelligently even nationally. What we need is an
        authority that can <em>restrain</em> nations, not <em>direct</em> them.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">What an International Authority Needs</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Power to say "no" to restrictive measures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>A set of rules defining what states may do</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Authority to enforce these rules</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Powers strictly circumscribed by the Rule of Law</span>
          </li>
        </ul>
        <p className="text-dark-400 text-sm mt-4">
          The powers needed are essentially those of the ultra-liberal
          "laissez-faire" state—mainly <em>negative</em> powers to prevent harm.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>The Opposite of What We're Told:</strong> We need not more power
          in the hands of international <em>economic</em> authorities, but a
          superior <em>political</em> power that can hold economic interests in
          check—one not mixed up in the economic game itself.
        </p>
      </Callout>

      {/* Section 5: The Principle of Federation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Principle of Federation</h2>

      <p className="my-4">
        The form of international government where strictly defined powers are
        transferred to an international authority while individual countries
        remain responsible for internal affairs is <strong className="text-amber-400">
        federation</strong>. It is the only form of association that creates
        international order without putting undue strain on legitimate desires
        for independence.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Democracy with Limits</h4>
          <p className="text-sm text-dark-300">
            Federalism is the application of democracy to international affairs—
            but a democracy with definitely limited powers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Division Limits Power</h4>
          <p className="text-sm text-dark-300">
            The division of power would act as limitation of power for both
            the whole federation and the individual states.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">Good Planning Enabled</h4>
          <p className="text-sm text-dark-300">
            Federation can be designed to make harmful planning difficult
            while leaving the way free for all desirable planning done locally.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-emerald-400 mb-2">The Liberal Ideal</h4>
          <p className="text-sm text-dark-300">
            The idea of federation was the ideal of almost all nineteenth-century
            liberal thinkers—only abandoned with the rise of Realpolitik.
          </p>
        </Card>
      </CardGrid>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "There can be no international law without a power to enforce it. The
        obstacle to creating such power was the idea that it need command all the
        practically unlimited powers which the modern state possesses. But with
        the division of power under the federal system this is by no means necessary."
      </blockquote>

      {/* Section 6: Small States and Local Government */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Small States and Local Government</h2>

      <p className="my-4">
        We shall not rebuild civilisation on the large scale. There was more beauty
        and decency in the life of small peoples, and more happiness in large ones
        in proportion as they avoided the blight of centralisation.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Democracy Requires the Local</h4>
        <p className="text-dark-300 mb-4">
          Nowhere has democracy worked well without a great measure of
          <strong> local self-government</strong>, providing a school of political
          training for the people and their future leaders.
        </p>
        <p className="text-dark-400 text-sm">
          It is only where responsibility can be learnt and practised in affairs
          with which most people are familiar—where awareness of one's neighbour
          rather than theoretical knowledge guides action—that the ordinary man
          can take a real part in public affairs.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>Learning from the Small:</strong> The experience of small
          countries like Holland and Switzerland contains much from which even
          the most fortunate larger countries like Great Britain can learn.
          "We shall all be the gainers if we can create a world fit for small
          states to live in."
        </p>
      </Callout>

      {/* Section 7: The Path Forward */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Path Forward</h2>

      <p className="my-4">
        The federal principle requires careful application. A strong tendency
        exists to make any new international organisation all-comprehensive and
        world-wide, but this may be its weakness—as it was for the League of Nations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-dark-300 mb-3">Close Federation</h3>
          <p className="text-dark-400 text-sm">
            The comparatively close association which Federal Union represents
            may at first be practicable only in a limited region—perhaps
            Western Europe—though it may gradually extend.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-dark-300 mb-3">Looser Association</h3>
          <p className="text-dark-400 text-sm">
            A larger and looser association (a new League of Nations) would
            still be needed to reduce the risk of war between different blocs.
          </p>
        </div>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Neither an omnipotent super-state, nor a loose association of 'free nations',
        but a community of nations of free men must be our goal."
      </blockquote>

      <p className="my-4">
        The great opportunity after victory is that the great powers, by themselves
        first submitting to a system of rules they have power to enforce, may acquire
        the moral right to impose the same rules upon others. An international
        authority that effectively limits state power over the individual will be
        one of the best safeguards of peace.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>National economic planning</strong> inevitably creates
              international friction by turning economic relations into
              conflicts between armed states.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>International planning would be worse</strong>—the wider
              the area, the less common agreement on ends, and the greater the
              necessity to rely on force.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              International <strong>economic authorities</strong> with
              monopolistic control would become tyrannical—even with the best
              intentions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The solution is <strong>federation</strong>: limited powers
              transferred to an international authority that can restrain but
              not direct nations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Local self-government</strong> and small states preserve
              democracy better than large centralised powers—civilisation
              cannot be rebuilt on the large scale.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The goal is a <strong>community of nations of free men</strong>—
              neither an omnipotent super-state nor a mere loose association.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Final chapter:</strong> In the "Conclusion," Hayek summarises
          his argument and issues a call to action: the choice between freedom
          and serfdom lies in our hands, and the battle must be fought primarily
          in the realm of ideas.
        </p>
      </Callout>
    </LessonLayout>
  );
}
