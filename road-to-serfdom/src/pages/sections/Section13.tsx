import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "When authority presents itself in the guise of organisation it develops
        charms fascinating enough to convert communities of free people into
        totalitarian States."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — The Times, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek turns his attention to his own adopted home of Britain,
        warning that the very intellectual currents that prepared Germany for totalitarianism
        are now making their appearance in the English-speaking world. The
        <strong className="text-amber-400"> totalitarians in our midst</strong> are not
        foreign agents but homegrown intellectuals who have absorbed the same ideas
        that proved so destructive on the Continent.
      </p>

      {/* Section 1: German Ideas in British Dress */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">German Ideas in British Dress</h2>

      <p className="my-4">
        Hayek uses the example of Professor E.H. Carr, whose influential work presents
        ideas that would be immediately recognizable to anyone familiar with German
        intellectual development—though appearing now under English auspices.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">Carr's Familiar Arguments</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The "inevitability" of planning and the end of competition</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Contempt for "nineteenth-century" liberal ideas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The thesis that Free Trade served only British interests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The necessity of autarky and large-scale economic units</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Even a section on "The Moral Functions of War"</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The result which we desire can be won only by a deliberate reorganisation
        of European life such as Hitler has undertaken"!
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — E.H. Carr, quoted by Hayek
        </footer>
      </blockquote>

      <Callout type="warning">
        <p>
          <strong>A Familiar Pattern:</strong> Professor Carr's conviction that trends
          toward planning are "inevitable" is based on familiar economic fallacies—the
          presumed necessity of monopoly growth due to technology, the alleged "potential
          plenty," and all the popular catchwords which appear in works of this kind.
        </p>
      </Callout>

      {/* Section 2: The Scientist-Politicians */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Scientist-Politicians</h2>

      <p className="my-4">
        One feature of German intellectual development that is now appearing in Britain
        is the scientists agitating for a "scientific" organisation of society. The ideal
        of a society organised "through and through" from the top has in Germany been
        considerably furthered by the influence of scientific and technological specialists
        on social and political opinions.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The "Intolerance of Reason"</h4>
          <p className="text-sm text-dark-300">
            The scientific specialist frequently displays an impatience with the
            ways of the ordinary man and contempt for anything not consciously
            organised by superior minds.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Political Professors</h4>
          <p className="text-sm text-dark-300">
            In Germany, political professors played a role comparable to political
            lawyers in France—and their influence was rarely on the side of liberty.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Education's Shift</h4>
          <p className="text-sm text-dark-300">
            Germany between 1840 and 1940 provides a striking illustration of the
            effects of shifting education from the "humanities" to the "realities."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Scientists' Submission</h4>
          <p className="text-sm text-dark-300">
            Scientists and engineers, who claimed to be leaders toward a new world,
            submitted more readily than almost any other class to Nazi tyranny.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>The Betrayal of the Intellectuals:</strong> Julien Benda's
          <em> Trahison des Clercs</em> prophetically foresaw how intellectuals would
          abandon their role as guardians of truth for political engagement—giving
          "the prestige of a scientific appearance to passions of their hearts."
        </p>
      </Callout>

      {/* Section 3: The "Scientific Attitude" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The "Scientific Attitude"</h2>

      <p className="my-4">
        As an example of scientist-politicians, Hayek examines Dr. C.H. Waddington's
        book <em>The Scientific Attitude</em>, which combines claims for greater
        political power for scientists with advocacy of wholesale "planning."
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Waddington's Claims</h4>
        <p className="text-dark-300 mb-4">
          Dr. Waddington clearly sees that the tendencies he describes and supports
          inevitably lead to a totalitarian system—yet apparently this appears to him
          preferable to what he describes as "the present ferocious monkey-house civilisation."
        </p>
        <ul className="text-dark-400 space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>"Science can pass ethical judgment on human behaviour"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Freedom is "a very troublesome concept" for the scientist</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>"The freedom to be odd and unlike one's neighbour is not a scientific value"</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-rose-500 pl-6 py-2 my-6 text-dark-300 italic">
        "It is difficult to deny that England now is a worse country to live in than
        it was" in 1913—yet Dr. Waddington looks forward to an economic system which
        "will be centralised and totalitarian in the sense that all aspects of the
        economic development of large regions are consciously planned as an integrated whole."
      </blockquote>

      <Callout type="warning">
        <p>
          <strong>Dangerous Optimism:</strong> Dr. Waddington's "scientific attitude"
          offers no better counsel for his belief that freedom of thought will survive
          in a totalitarian system than the conviction that "there must be very valuable
          evidence" that it is possible "to combine totalitarianism with freedom of thought."
        </p>
      </Callout>

      {/* Section 4: Middle-Class Socialism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Middle-Class Socialism</h2>

      <p className="my-4">
        Various attempts to create some kind of middle-class socialism bear an alarming
        resemblance to similar developments in pre-Hitler Germany—unknown, no doubt,
        to their authors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-dark-300 mb-3">New Movements</h3>
          <p className="text-dark-400 text-sm">
            Organisations like the "Forward March" or "Common Wealth" movement of
            Sir Richard Acland, and the "1941 Committee" of J.B. Priestley represent
            symptomatic phenomena, even if not yet major political forces.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">The Real Danger</h3>
          <p className="text-dark-400 text-sm">
            The impetus toward totalitarianism comes mainly from the two great vested
            interests: <strong>organised capital</strong> and <strong>organised labour</strong>.
            The greatest menace is that both point in the same direction.
          </p>
        </div>
      </div>

      {/* Section 5: The Alliance for Monopoly */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Alliance for Monopoly</h2>

      <p className="my-4">
        Organised capital and organised labour share a common, and often concerted,
        support for the monopolistic organisation of industry. This tendency is the
        great immediate danger—though there is no reason to believe it is inevitable.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Capitalist Illusion</h4>
        <p className="text-dark-300 mb-4">
          The capitalist organisers of monopolies aim not at a totalitarian system but
          at a sort of <strong>corporative society</strong> in which organised industries
          would appear as semi-independent and self-governing "estates."
        </p>
        <p className="text-dark-400 text-sm">
          But they are as short-sighted as their German colleagues in believing they
          will be allowed not only to create but to run such a system. A state which
          allows enormous aggregations of power cannot afford to let this power rest
          entirely in private control.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>State Monopoly is Worse:</strong> A state monopoly is always a
          state-protected monopoly—protected against both potential competition and
          effective criticism. Private monopoly is scarcely ever complete and even
          more rarely of long duration.
        </p>
      </Callout>

      {/* Section 6: The Tragedy of Labour */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tragedy of Labour</h2>

      <p className="my-4">
        The fatal turning point in modern development was when the great movement
        which could serve its original ends only by fighting all privilege—the
        <strong className="text-amber-400"> Labour Movement</strong>—came under the
        influence of anti-competition doctrines and became itself entangled in the
        strife for privilege.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "It is one of the saddest spectacles of our time to see a great democratic
        movement support a policy which must lead to the destruction of democracy
        and which meanwhile can benefit only a minority of the masses who support it."
      </blockquote>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Left's Support for Monopoly</h4>
        <p className="text-dark-300 mb-4">
          The recent growth of monopoly is largely the result of deliberate collaboration
          between organised capital and organised labour, where privileged groups of
          labour share in monopoly profits at the expense of:
        </p>
        <ul className="text-dark-400 space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The community as a whole</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The poorest workers in less well-organised industries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>The unemployed</span>
          </li>
        </ul>
      </div>

      <p className="my-4">
        The change in public opinion that made this development possible is more than
        anything the result of the <strong>propaganda against competition by the Left</strong>.
        Very frequently, even measures aimed against monopolists serve only to strengthen
        monopoly power.
      </p>

      {/* Section 7: The Labour Party Programme */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Labour Party Programme</h2>

      <p className="my-4">
        To anyone familiar with the history of the major Continental countries in the
        last twenty-five years, the study of the Labour Party programme, now committed
        to creating a "planned society," is a most depressing experience.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Identical Language</h4>
          <p className="text-sm text-dark-300">
            Not only the general outline but the detail and even wording is
            indistinguishable from German socialist dreams of twenty-five years ago.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">"Balanced Economy"</h4>
          <p className="text-sm text-dark-300">
            Characteristic catchwords like "balanced economy" and "community
            consumption" are bodily taken over from German ideology.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Wartime Controls</h4>
          <p className="text-sm text-dark-300">
            The resolution requires retention in peacetime of "measures of Government
            control needed for mobilising the national resources in war."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">A Reactionary Movement</h4>
          <p className="text-sm text-dark-300">
            The great party that has taken the place of progressive parties has
            ranged itself with what must be regarded as a reactionary movement.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>The Labour Leaders' Proclamation:</strong> Those who now proclaim
          that they have "done once and for all with the mad competitive system" are
          proclaiming the doom of individual freedom. There is no possibility other
          than the impersonal discipline of the market or direction by the will of a few.
        </p>
      </Callout>

      {/* Section 8: The Only Alternative */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Only Alternative</h2>

      <p className="my-4">
        While there is no reason to believe the movement toward monopoly is inevitable,
        there can be little doubt that if we continue on the path we have been treading,
        it will lead us to totalitarianism.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">A Better Approach to Monopoly</h4>
        <p className="text-dark-300 mb-4">
          Where monopoly is really inevitable, strong state <em>control</em> over
          private monopolies—the American approach—offers better chances than state
          <em> management</em>.
        </p>
        <ul className="text-dark-400 space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Stringent price control leaving no room for extraordinary profits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Making the monopolist position the least eligible among entrepreneurs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Reducing monopoly to spheres where it is truly inevitable</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">✓</span>
            <span>Stimulating invention of competitive substitutes</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Only make the position of the monopolist once more that of the whipping boy
        of economic policy and you will be surprised how quickly most of the abler
        entrepreneurs will rediscover their taste for the bracing air of competition!"
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>same intellectual currents</strong> that prepared Germany
              for totalitarianism are now appearing in Britain—often in nearly
              identical form.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Scientist-politicians</strong> display an "intolerance of reason"
              and contempt for ordinary people that leads them to favor "scientific"
              organization of society.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>two great vested interests</strong>—organised capital and
              organised labour—both point toward monopolistic organization and away
              from competition.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The <strong>Labour movement's</strong> turn against competition is
              tragic—a movement that could serve its ends only by fighting privilege
              now supports privilege.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The Labour Party programme is <strong>indistinguishable</strong> from
              German socialist dreams of twenty-five years earlier—a depressing
              repetition of failed ideas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Where monopoly is inevitable, <strong>state control</strong> of private
              monopoly is preferable to state management—keeping checks on power intact.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Material Conditions and Ideal Ends,"
          Hayek examines the relationship between economic freedom and moral values,
          arguing that the pursuit of material goals at any cost threatens the very
          foundations of a free and decent society.
        </p>
      </Callout>
    </LessonLayout>
  );
}
