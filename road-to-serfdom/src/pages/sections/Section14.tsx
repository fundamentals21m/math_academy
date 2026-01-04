import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Is it just or reasonable, that most voices against the main end of government
        should enslave the less number that would be free? ... They who seek nothing
        but their own just liberty, have always the right to win it, whenever they have
        the power, be the voices never so numerous that oppose it."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Milton, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek examines the relationship between material conditions
        and moral values. Despite fashionable claims about the "End of Economic Man,"
        our generation is in fact <strong className="text-amber-400">more governed by
        economic doctrines</strong> than ever—and its unwillingness to accept economic
        constraints threatens both our prosperity and our freedom.
      </p>

      {/* Section 1: The Myth of the "End of Economic Man" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Myth of the "End of Economic Man"</h2>

      <p className="my-4">
        Our generation likes to flatter itself that it attaches less weight to economic
        considerations than did its parents or grandparents. The "End of Economic Man"
        bids fair to become one of the governing myths of our age. But before we accept
        this claim, we must inquire how far it is true.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Economic Claims Everywhere</h4>
          <p className="text-sm text-dark-300">
            The claims for social reconstruction most strongly pressed are almost
            all economic: the "re-interpretation in economic terms" of liberty,
            equality, and security.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Governed by Doctrines</h4>
          <p className="text-sm text-dark-300">
            In their beliefs and aspirations, men today are more than ever governed
            by economic doctrines—about "potential plenty," inevitable monopoly,
            and "irrational" markets.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Refusing Constraints</h4>
          <p className="text-sm text-dark-300">
            Our generation is unwilling to sacrifice any demands to "economic arguments"—
            impatient with all restraints, unwilling to bow to economic necessities.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">"Economophobia"</h4>
          <p className="text-sm text-dark-300">
            "Economophobia" would be a more correct description than "End of Economic
            Man"—a revolt against impersonal forces that frustrate individual efforts.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>A More Accurate Description:</strong> It is not contempt for material
          welfare, or diminished desire for it, but a refusal to recognise any obstacles
          or conflicts with other aims which distinguishes our generation. Man has come
          to hate the impersonal forces to which he once submitted.
        </p>
      </Callout>

      {/* Section 2: Submission to Impersonal Forces */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Submission to Impersonal Forces</h2>

      <p className="my-4">
        This revolt against economic necessity is an instance of a more general
        phenomenon: a new unwillingness to submit to any rule or necessity whose
        rationale we do not understand. While sometimes commendable, in certain
        fields this craving for intelligibility cannot be fully satisfied.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Paradox of Complexity</h4>
        <p className="text-dark-300 mb-4">
          As the world becomes more complex, our resistance grows against forces we
          cannot understand. But it is precisely in these circumstances that it becomes
          <em> less and less possible</em> for anyone to fully understand them.
        </p>
        <p className="text-dark-400 text-sm">
          A complex civilisation is necessarily based on individuals adjusting to
          changes whose cause and nature they cannot grasp—why they should have more
          or less, why they should move to another occupation, why some things become
          scarcer than others.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "It was men's submission to the impersonal forces of the market that in the
        past has made possible the growth of a civilisation which without this could
        not have developed; it is by thus submitting that we are every day helping to
        build something that is greater than anyone of us can fully comprehend."
      </blockquote>

      <Callout type="warning">
        <p>
          <strong>The Real Choice:</strong> Unless this complex society is to be
          destroyed, the only alternative to submission to the impersonal forces of
          the market is submission to an equally uncontrollable and therefore
          <em> arbitrary power of other men</em>.
        </p>
      </Callout>

      {/* Section 3: The Limits of Mastering Society */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Limits of "Mastering" Society</h2>

      <p className="my-4">
        Those who argue that we have learned to master the forces of nature but are
        behind in mastering social forces are partly right. But they err fatally when
        they argue that we must master social forces <em>in the same manner</em> as
        natural forces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">The Totalitarian Path</h3>
          <p className="text-dark-400 text-sm">
            The attempt to master social forces as we master nature is not only the
            path to totalitarianism but to the <strong>destruction of our civilisation</strong>
            and a certain way to block future progress.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Truth</h3>
          <p className="text-dark-400 text-sm">
            Even the mere preservation of what we have achieved depends on the
            <strong> co-ordination of individual efforts by impersonal forces</strong>—
            not their replacement by conscious direction.
          </p>
        </div>
      </div>

      {/* Section 4: Freedom and Single Purposes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Freedom and Single Purposes</h2>

      <p className="my-4">
        Individual freedom cannot be reconciled with the supremacy of one single
        purpose to which the whole society must be entirely and permanently subordinated.
        The only exception is <strong className="text-amber-400">war and other temporary
        disasters</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The War Exception</h4>
        <p className="text-dark-300 mb-4">
          It is sensible to temporarily sacrifice freedom in order to make it more
          secure in the future. But the same cannot be said for a system proposed
          as a <em>permanent arrangement</em>.
        </p>
        <p className="text-dark-400 text-sm">
          This is why fashionable phrases about "doing for peace what we have learnt
          to do for war" are so misleading. Wartime subordination is the price of
          preserving freedom in the long run—not a model for peacetime organisation.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>Even Unemployment:</strong> No single purpose must be allowed
          absolute preference in peacetime—even the conquest of unemployment. The
          categorical "it must be done at all cost" is likely to do the greatest harm.
        </p>
      </Callout>

      {/* Section 5: The Post-War Challenge */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Post-War Challenge</h2>

      <p className="my-4">
        One dominant feature of the immediate post-war situation will be that war
        needs have drawn people into specialised jobs with relatively high wages.
        Many of these jobs will no longer exist at the same scale.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Problem</h4>
          <p className="text-sm text-dark-300">
            There will be an urgent need for transfer of large numbers to other
            jobs, many of which will be less favourably remunerated than war work.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">If Wages Are Rigid</h4>
          <p className="text-sm text-dark-300">
            If unions resist any lowering of particular wages, only two alternatives
            remain: <em>coercion</em> (compulsory transfer) or <em>unemployment</em>.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Inflation's Danger</h4>
          <p className="text-sm text-dark-300">
            Monetary policy cannot cure this except by general inflation—effecting
            in concealed fashion the wage reduction that couldn't be done directly.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Artificial Employment</h4>
          <p className="text-sm text-dark-300">
            Aiming always at maximum employment by monetary means tends to lower
            productivity and increase the proportion needing artificial support.
          </p>
        </Card>
      </CardGrid>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Let a uniform minimum be secured to everybody by all means; but let us admit
        at the same time that with this assurance of a basic minimum all claims for a
        privileged security of particular classes must lapse."
      </blockquote>

      {/* Section 6: Economic Progress as the Path Forward */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Economic Progress as the Path Forward</h2>

      <p className="my-4">
        The fate of our civilisation will ultimately depend on how we solve the
        economic problems we shall face after the war. If we act wisely, we can
        return to and surpass our former standards through hard work and investment.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">Conditions for Recovery</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Satisfaction with consuming no more than reconstruction allows</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>No exaggerated hopes creating irresistible claims</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Using resources where they contribute most to well-being</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Readiness to adapt quickly to changed circumstances</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>No group allowed to obstruct necessary adjustments</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Dispossessed Middle Class:</strong> It should never be forgotten
          that the decisive factor in the rise of totalitarianism on the Continent—yet
          absent in Britain—is the existence of a large <em>recently dispossessed
          middle class</em>. Short-sighted redistribution could create such a class.
        </p>
      </Callout>

      <blockquote className="border-l-4 border-rose-500 pl-6 py-2 my-6 text-dark-300 italic">
        "It may sound noble to say: damn economics, let us build up a decent world—but
        it is, in fact, merely irresponsible. The one thing modern democracy will not
        bear without cracking is the necessity of a substantial lowering of the standards
        of living in peace time."
      </blockquote>

      {/* Section 7: Material Conditions and Moral Values */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Material Conditions and Moral Values</h2>

      <p className="my-4">
        People who admit that present political trends threaten our economic prospects
        often deceive themselves that we are making "material sacrifices to gain ideal
        ends." But has fifty years of approach towards collectivism really raised our
        moral standards?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-amber-600/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Indignation About Injustice</h3>
          <p className="text-dark-400 text-sm">
            On the <em>negative</em> side, in its indignation about the inequities of
            the existing social order, our generation probably surpasses most of its
            predecessors.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Positive Standards</h3>
          <p className="text-dark-400 text-sm">
            But the effect on our <em>positive</em> standards—individual conduct and
            the seriousness with which we uphold moral principles against expediencies—
            is very different.
          </p>
        </div>
      </div>

      {/* Section 8: Freedom and Moral Responsibility */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Freedom and Moral Responsibility</h2>

      <p className="my-4">
        What our generation is in danger of forgetting is not only that morals are
        necessarily a phenomenon of <em>individual conduct</em>, but that they can
        exist only where the individual is free to decide for himself.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Essence of Morality</h4>
        <p className="text-dark-300 mb-4">
          Outside the sphere of individual responsibility there is neither goodness
          nor badness, neither opportunity for moral merit nor the chance of proving
          one's conviction by sacrificing one's desires to what one thinks right.
        </p>
        <blockquote className="text-dark-400 italic text-sm border-l-2 border-amber-500/50 pl-4">
          "If every action which is good or evil in a man of ripe years were under
          pittance and prescription and compulsion, what were virtue but a name, what
          praise should then be due to well-doing?"
          <footer className="text-dark-500 not-italic mt-1">— John Milton</footer>
        </blockquote>
      </div>

      <Callout type="info">
        <p>
          <strong>No Merit Without Choice:</strong> The members of a society who in
          all respects are <em>made</em> to do the good thing have no title to praise.
          We are neither entitled to be unselfish at someone else's expense, nor is
          there any merit in being unselfish if we have no choice.
        </p>
      </Callout>

      <p className="my-4">
        Freedom to order our own conduct, responsibility for arranging our own life
        according to our own conscience—this is the air in which alone moral sense
        grows and moral values are daily re-created.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Collectivism's Anti-Moral Effect</h4>
        <p className="text-dark-300">
          That in the sphere of individual conduct the effect of collectivism has been
          almost entirely destructive is both inevitable and undeniable. A movement
          whose main promise is the <strong>relief from responsibility</strong> cannot
          but be anti-moral in its effect.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The "End of Economic Man" is a myth—our generation is <strong>more
              governed</strong> by economic doctrines than ever, while refusing to
              accept economic constraints.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Submission to impersonal market forces</strong> made possible
              our complex civilisation; the alternative is submission to arbitrary
              human power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Individual freedom cannot be reconciled with <strong>permanent
              subordination</strong> to any single purpose—even worthy ones like
              eliminating unemployment.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Economic progress</strong> through adaptation and investment is
              the only path forward—redistribution instead of growth breeds the
              dispossessed middle class that enables totalitarianism.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Morality requires freedom</strong>—only where individuals are
              responsible for their own choices and free to sacrifice their interests
              does moral action have any meaning.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Collectivism is <strong>anti-moral</strong> in effect because its main
              promise—relief from responsibility—destroys the very conditions in
              which moral sense can grow.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The Prospects of International Order,"
          Hayek examines how the principles of liberty and planning apply to relations
          between nations, warning against the dangers of both nationalist autarky
          and premature world government.
        </p>
      </Callout>
    </LessonLayout>
  );
}
