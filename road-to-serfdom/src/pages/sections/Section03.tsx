import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "What has always made the state a hell on earth has been precisely that
        man has tried to make it his heaven."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — F. Hoelderlin, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek examines how socialism—originally recognized as a grave
        threat to freedom—came to be seen as its champion. The "Great Utopia" is the
        promise of socialism as the fulfillment of freedom, a promise that Hayek argues
        leads to its opposite: <strong className="text-amber-400">servitude</strong>.
      </p>

      {/* Section 1: Socialism's Authoritarian Origins */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Socialism's Authoritarian Origins</h2>

      <p className="my-4">
        The extraordinary thing about socialism is that it was <em>not only</em> early
        recognized as the gravest threat to freedom, but quite openly began as a
        <strong className="text-amber-400"> reaction against</strong> the liberalism
        of the French Revolution. Yet it gained general acceptance under the flag of liberty.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Forgotten History:</strong> It is rarely remembered now that socialism
          in its beginnings was frankly authoritarian. The French writers who laid the
          foundations of modern socialism had no doubt that their ideas could be put into
          practice only by a <em>strong dictatorial government</em>.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Saint-Simon's Warning</h4>
        <p className="text-dark-300">
          The first of modern planners, Saint-Simon, even predicted that those who did
          not obey his proposed planning boards would be <strong>"treated as cattle"</strong>.
          Where freedom was concerned, the founders of socialism made no bones about their
          intentions—freedom of thought they regarded as the root-evil of nineteenth-century
          society.
        </p>
      </div>

      {/* Section 2: Democratic Socialism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Alliance with Democracy</h2>

      <p className="my-4">
        Only under the influence of the strong democratic currents preceding the revolution
        of 1848 did socialism begin to ally itself with the forces of freedom. But the new
        "democratic socialism" took a long time to live down the suspicions aroused by
        its antecedents.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "Democracy extends the sphere of individual freedom, socialism restricts it.
        Democracy attaches all possible value to each man; socialism makes each man a
        mere agent, a mere number. Democracy and socialism have nothing in common but
        one word: equality. But notice the difference: while democracy seeks equality
        in liberty, socialism seeks equality in restraint and servitude."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Alexis de Tocqueville, 1848
        </footer>
      </blockquote>

      {/* Section 3: The New Freedom */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Promise of "New Freedom"</h2>

      <p className="my-4">
        To harness the strongest of all political motives—the craving for freedom—socialism
        began increasingly to make use of the promise of a "new freedom." The coming of
        socialism was to be <em>the leap from the realm of necessity to the realm of freedom</em>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Old Freedom</h4>
          <p className="text-sm text-dark-300">
            Freedom from coercion, from the arbitrary power of other men, release from
            ties which left the individual no choice but obedience to a superior.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">New "Freedom"</h4>
          <p className="text-sm text-dark-300">
            Freedom from necessity, release from the compulsion of circumstances—but
            this is really just another name for <strong>power</strong> or <strong>wealth</strong>.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Confusion</h4>
          <p className="text-sm text-dark-300">
            Few people noticed this subtle change in meaning, and still fewer asked
            whether the two kinds of freedom could really be combined.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Promise</h4>
          <p className="text-sm text-dark-300">
            "Economic freedom" was said to be necessary to make political freedom
            "worth having"—only socialism could complete the struggle for freedom.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>The Confusion of Freedom with Power:</strong> The demand for "economic
          freedom" was really only another name for the old demand for an equal distribution
          of wealth. This gave socialists another word in common with liberals—and they
          exploited it to the full.
        </p>
      </Callout>

      {/* Section 4: The Road to Servitude */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The High Road to Servitude</h2>

      <p className="my-4">
        There can be no doubt that the promise of greater freedom has become one of
        the most effective weapons of socialist propaganda, and that the belief that
        socialism would bring freedom is genuine and sincere. But this would only
        heighten the tragedy if it should prove true:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl text-dark-300 italic">
        "What was promised to us as the Road to Freedom was in fact the High Road
        to Servitude."
      </blockquote>

      <p className="my-4">
        The promise of more freedom was responsible for luring more and more liberals
        along the socialist road, for blinding them to the conflict between the basic
        principles of socialism and liberalism.
      </p>

      {/* Section 5: Observers' Testimonies */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Witnesses to the Transformation</h2>

      <p className="my-4">
        In recent years, old apprehensions about the unforeseen consequences of socialism
        have been strongly voiced from unexpected quarters. Observer after observer has
        been impressed with the extraordinary similarity between "fascism" and "communism."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Max Eastman</h3>
          <p className="text-dark-400 text-sm">
            Lenin's old friend was compelled to admit that "instead of being better,
            Stalinism is worse than fascism, more ruthless, barbarous, unjust, immoral,
            anti-democratic, unredeemed by any hope or scruple." And: "Stalinism is
            socialism, in the sense of being an inevitable although unforeseen political
            accompaniment of the nationalisation and collectivisation."
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">W.H. Chamberlin</h3>
          <p className="text-dark-400 text-sm">
            After twelve years in Russia as an American correspondent, seeing all his
            ideals shattered, he concluded: "Socialism is certain to prove, in the
            beginning at least, the road NOT to freedom, but to dictatorship and
            counter-dictatorships, to civil war of the fiercest kind."
          </p>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Peter Drucker's Conclusion</h4>
        <p className="text-dark-300">
          "The complete collapse of the belief in the attainability of freedom and equality
          through Marxism has forced Russia to travel the same road towards a totalitarian,
          purely negative, non-economic society of unfreedom and inequality which Germany
          has been following. Not that communism and fascism are essentially the same.
          <strong> Fascism is the stage reached after communism has proved an illusion.</strong>"
        </p>
      </div>

      {/* Section 6: From Socialist to Fascist */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Path from Socialism to Fascism</h2>

      <p className="my-4">
        No less significant is the intellectual history of many of the Nazi and Fascist
        leaders. Everybody who watched these movements grow was struck by the number
        of leading men—from Mussolini downwards (and not excluding Laval and Quisling)—who
        began as socialists and ended as Fascists or Nazis.
      </p>

      <Callout type="info">
        <p>
          <strong>The Ease of Conversion:</strong> The relative ease with which a young
          communist could be converted into a Nazi or vice versa was generally known in
          Germany—best of all to the propagandists of the two parties. Many a university
          teacher saw English and American students return from the Continent, uncertain
          whether they were communists or Nazis and certain only that they hated Western
          liberal civilisation.
        </p>
      </Callout>

      <p className="my-4">
        While communists and Nazis clashed frequently with each other before coming to
        power, they competed for the support of <em>the same type of mind</em> and reserved
        for each other the hatred of the heretic. Their practice showed how closely they
        were related.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Real Enemy</h4>
        <p className="text-dark-300">
          To both Nazi and communist, the real enemy—the man with whom they had nothing
          in common and whom they could not hope to convince—is <strong>the liberal of
          the old type</strong>. While to the Nazi the communist, and to the communist
          the Nazi, and to both the socialist, are potential recruits made of the right
          timber, they both know that there can be no compromise with those who really
          believe in individual freedom.
        </p>
      </div>

      {/* Section 7: Hitler's Own Words */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Doctrine Most Hated</h2>

      <p className="my-4">
        Professor Eduard Heimann, a leader of German religious socialism, wrote in an
        article titled "The Rediscovery of Liberalism":
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "Hitlerism proclaims itself as both true democracy and true socialism, and the
        terrible truth is that there is a grain of truth for such claims—an infinitesimal
        grain, to be sure, but at any rate enough to serve as a basis for such fantastic
        distortions. But one fact stands out with perfect clarity in all the fog:
        <strong> Hitler has never claimed to represent true liberalism.</strong> Liberalism
        then has the distinction of being the doctrine most hated by Hitler."
      </blockquote>

      <p className="my-4">
        This hatred had little occasion to show itself in practice merely because, by the
        time Hitler came to power, liberalism was to all intents and purposes dead in Germany.
        And it was <strong className="text-amber-400">socialism that had killed it</strong>.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Socialism began as a <strong>frankly authoritarian</strong> movement—its
              founders made no bones about requiring dictatorial power.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Socialism captured support by promising a <strong>"new freedom"</strong>—but
              this was really just another name for power and wealth redistribution.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Democracy and socialism</strong> have nothing in common but the word
              "equality"—democracy seeks equality in liberty, socialism in servitude.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Observers of totalitarianism have noted the <strong>extraordinary similarity</strong>
              between fascism and communism—outcomes that share common collectivist roots.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Many <strong>Nazi and Fascist leaders began as socialists</strong>—the
              conversion from one to the other was notoriously easy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The one doctrine both communists and Nazis truly hated was <strong>
              classical liberalism</strong>—belief in individual freedom.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Individualism and Collectivism," Hayek
          clarifies the crucial distinction between these two opposing principles—
          distinguishing socialism's ends from its methods, and explaining what
          "planning" really means.
        </p>
      </Callout>
    </LessonLayout>
  );
}
