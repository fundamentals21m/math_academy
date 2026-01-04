import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "We were the first to assert that the more complicated the forms of
        civilisation, the more restricted the freedom of the individual must become."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — B. Mussolini, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek confronts one of the most powerful arguments for central
        planning: the claim that technological progress makes it <em>inevitable</em>.
        Few planners are content to argue that planning is merely desirable—most insist
        we have <strong className="text-amber-400">no choice</strong>. Hayek shows this
        "inevitability" is a myth, deliberately cultivated to make planning seem like
        the unavoidable result of progress rather than a political choice.
      </p>

      {/* Section 1: The Myth of Inevitability */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Myth of Inevitability</h2>

      <p className="my-4">
        It is a revealing fact that few planners are content to say that central
        planning is <em>desirable</em>. Most of them affirm that we can no longer
        choose but are <strong className="text-amber-400">compelled by circumstances</strong>
        beyond our control to substitute planning for competition.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Deliberately Cultivated Myth:</strong> The myth is deliberately
          cultivated that we are embarking on the new course not out of free will but
          because competition is spontaneously eliminated by technological changes which
          we neither can reverse nor should wish to prevent. This argument is rarely
          developed at any length—it is one of those assertions taken over by one writer
          from another till, by mere iteration, it has come to be accepted as an
          established fact. It is, nevertheless, devoid of foundation.
        </p>
      </Callout>

      <p className="my-4">
        The tendency towards monopoly and planning is not the result of any "objective
        facts" beyond our control, but the product of <strong className="text-amber-400">
        opinions fostered and propagated</strong> for half a century till they have come
        to dominate all our policy.
      </p>

      {/* Section 2: The Concentration Doctrine */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The "Concentration of Industry" Myth</h2>

      <p className="my-4">
        The most frequently heard argument is that technological changes have made
        competition impossible in a constantly increasing number of fields. The only
        choice left, we are told, is between control of production by private monopolies
        and direction by the government.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Marxist Origins</h4>
        <p className="text-dark-300">
          This belief derives mainly from the Marxist doctrine of the "concentration of
          industry"—the idea that capitalism inevitably tends toward monopoly. Like so
          many Marxist ideas, it is now found in many circles who have received it at
          third or fourth hand and do not know whence it derives.
        </p>
      </div>

      <p className="my-4">
        The alleged technological cause is the superiority of large firms over small
        ones, due to the greater efficiency of modern methods of mass production. Modern
        methods, it is asserted, have created conditions where large firms can produce
        at decreasing costs per unit, driving out small firms until only giants remain.
      </p>

      <Callout type="info">
        <p>
          <strong>What the Evidence Actually Shows:</strong> The most comprehensive
          study of the facts—by the American "Temporary National Economic Committee"
          on the Concentration of Economic Power—concluded that the view according to
          which the greater efficiency of large-scale production is the cause of the
          disappearance of competition "finds scant support in any evidence that is
          now at hand."
        </p>
      </Callout>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The superior efficiency of large establishments has not been demonstrated;
        the advantages that are supposed to destroy competition have failed to manifest
        themselves in many fields.... Monopoly is frequently the product of factors
        other than the lower costs of greater size. It is attained through collusive
        agreement and promoted by public policies. When these agreements are invalidated
        and when these policies are reversed, competitive conditions can be restored."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — C. Wilcox, Competition and Monopoly in American Industry
        </footer>
      </blockquote>

      {/* Section 3: Historical Evidence */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Historical Evidence</h2>

      <p className="my-4">
        If monopoly were truly the result of technological developments or a necessary
        product of the evolution of "capitalism," we should expect it to appear first
        in the countries with the most advanced economic systems. In fact, the opposite
        occurred.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Germany's Deliberate Policy</h4>
          <p className="text-sm text-dark-300">
            Since 1878, Germany systematically fostered cartels and syndicates through
            deliberate policy—not just protection, but direct inducements and ultimately
            compulsion to create monopolies.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Britain's Experience</h4>
          <p className="text-sm text-dark-300">
            Until 1931, British industry was as competitive as at any time in its
            history. Only after adopting protectionism did monopoly growth proceed
            at an "amazing rate."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Timeline Problem</h4>
          <p className="text-sm text-dark-300">
            To argue that technological necessities which operated in Germany in the
            1880s made themselves felt in Britain only in the 1930s is absurd.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Real Cause</h4>
          <p className="text-sm text-dark-300">
            The suppression of competition in Germany was a matter of <em>deliberate
            policy</em>, undertaken in service of the planning ideal.
          </p>
        </Card>
      </CardGrid>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "The intellectual history of the last sixty or eighty years is indeed a
        perfect illustration of the truth that in social evolution nothing is
        inevitable but thinking makes it so."
      </blockquote>

      {/* Section 4: Complexity Requires Competition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Complexity Requires Competition, Not Planning</h2>

      <p className="my-4">
        Some argue that the complexity of our modern industrial civilisation creates
        problems that can only be dealt with by central planning. Hayek turns this
        argument on its head: it is precisely the <strong className="text-amber-400">
        complexity</strong> of modern life that makes competition the only viable
        method of coordination.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Knowledge Problem</h4>
        <p className="text-dark-300 mb-4">
          There would be no difficulty about efficient control or planning were
          conditions so simple that a single person or board could effectively
          survey all the relevant facts. It is only as the factors become so numerous
          that it is impossible to gain a synoptic view of them that decentralisation
          becomes imperative.
        </p>
        <p className="text-dark-400 text-sm">
          As decentralisation becomes necessary because nobody can consciously balance
          all the considerations bearing on the decisions of so many individuals, the
          coordination can clearly not be effected by "conscious control."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Price System</h3>
          <p className="text-dark-300 text-sm mb-3">
            The price system enables entrepreneurs, by watching the movement of
            comparatively few prices—as an engineer watches the hands of a few
            dials—to adjust their activities to those of their fellows.
          </p>
          <p className="text-dark-400 text-sm">
            The more complicated the whole, the more dependent we become on this
            impersonal mechanism for transmitting relevant information.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Central Direction</h3>
          <p className="text-dark-400 text-sm mb-3">
            Compared with the method of decentralisation plus automatic coordination,
            central direction is incredibly clumsy, primitive, and limited in scope.
          </p>
          <p className="text-dark-400 text-sm">
            If we had relied on conscious central planning for industrial growth,
            it would never have reached its current degree of differentiation,
            complexity, and flexibility.
          </p>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Paradox of Complexity:</strong> Any further growth of
          complexity, far from making central direction more necessary, makes it
          more important than ever that we should use a technique which does not
          depend on conscious control.
        </p>
      </Callout>

      {/* Section 5: The Standardisation Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Argument from Standardisation</h2>

      <p className="my-4">
        There is another argument: that some new technological possibilities can only
        be exploited if we compel everyone to use them. Perhaps everyone using the
        same car would make cars cheaper; perhaps universal use of electricity would
        make it cheaper than coal or gas.
      </p>

      <p className="my-4">
        Hayek concedes this might sometimes be true—abundance might be increased in
        some fields by compulsory standardisation. But this is not an argument that
        technical progress makes central direction <em>inevitable</em>. It merely
        makes it necessary to choose between gaining a particular advantage by
        compulsion and not obtaining it.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Case for Preserving Choice</h4>
        <p className="text-dark-300 mb-4">
          Though in the short run the price we have to pay for variety and freedom
          of choice may sometimes be high, in the long run even material progress
          will depend on this very variety, because <strong>we can never predict</strong>
          from which of the many forms in which a good or service can be provided
          something better may develop.
        </p>
        <p className="text-dark-400 text-sm">
          The argument for freedom is precisely that we ought to leave room for the
          unforeseeable free growth.
        </p>
      </div>

      {/* Section 6: Why Experts Favor Planning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Technical Experts Favor Planning</h2>

      <p className="my-4">
        Why do so many technical experts stand in the front rank of the planners?
        Hayek offers a penetrating explanation: almost every one of the technical
        ideals of our experts <em>could</em> be realised in a comparatively short
        time if it were made the <strong className="text-amber-400">sole aim of
        humanity</strong>.
      </p>

      <p className="my-4">
        The frustration of the specialist's ambitions in his own field makes him
        revolt against the existing order. We all find it difficult to bear seeing
        things left undone which everybody must admit are both desirable and possible.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Specialist's Blind Spot:</strong> That these things cannot all
          be done at the same time, that any one of them can be achieved only at
          the sacrifice of others, can be seen only by taking into account factors
          which fall outside any specialism—a painful intellectual effort that forces
          us to see our pet objectives against a wider background.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Illusion of the Specialist</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The lover of the countryside wants its traditional appearance preserved</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The health enthusiast wants insanitary old cottages cleared away</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The motorist wishes the country cut up by big motor roads</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The efficiency fanatic desires maximum specialisation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The idealist wants to preserve independent craftsmen</span>
          </li>
        </ul>
        <p className="text-dark-400 text-sm mt-4">
          All know that their aim can be fully achieved only by planning—and they
          all want planning for that reason. But the adoption of social planning
          can only bring out the <em>concealed conflict</em> between their aims.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "It would make the very men who are most anxious to plan society the most
        dangerous if they were allowed to do so—and the most intolerant of the
        planning of others. From the saintly and single-minded idealist to the
        fanatic is often but a step."
      </blockquote>

      {/* Section 7: The Danger of Expert Rule */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Danger of Expert Rule</h2>

      <p className="my-4">
        There could hardly be a more unbearable—and more irrational—world than one
        in which the most eminent specialists in each field were allowed to proceed
        unchecked with the realisation of their ideals.
      </p>

      <p className="my-4">
        Nor can "coordination" become a new specialism. The economist is the last
        to claim that he has the knowledge which a coordinator would need. His plea
        is for a <strong className="text-amber-400">method which effects coordination
        without the need for an omniscient dictator</strong>—but that means precisely
        the retention of those impersonal checks on individual efforts against which
        all specialists chafe.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The claim that planning is <strong>inevitable</strong> is a deliberately
              cultivated myth—the result of opinions propagated until they became
              accepted as fact.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Monopoly</strong> is not the inevitable result of technology
              but of deliberate policies—when these policies are reversed, competition
              can be restored.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>complexity</strong> of modern society makes competition
              more necessary, not less—no central planner can know what millions of
              individuals know.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>price system</strong> is an apparatus for transmitting
              information that allows coordination without conscious central direction.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Technical experts</strong> favor planning because they see
              only their own field's goals—not the inevitable trade-offs between
              competing objectives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              <strong>Freedom and variety</strong> may cost us some immediate gains,
              but they preserve the conditions for unforeseeable future progress.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Planning and Democracy," Hayek examines
          why democratic institutions cannot effectively direct economic activity—and
          why the attempt to do so leads to the delegation of power to unaccountable
          bodies and ultimately to dictatorship.
        </p>
      </Callout>
    </LessonLayout>
  );
}
