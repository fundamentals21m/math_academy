import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">The First System Theorists</h2>

      <p className="my-4">
        With the considerations of the previous section in mind, it comes as no surprise that the
        first political philosopher to consider politics from a systematic perspective was not an
        overly religious man. <strong className="text-indigo-400">Niccolo Machiavelli</strong> ushers
        in the age of the social engineer.
      </p>

      {/* Machiavelli's Method */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Machiavelli's Scientific Method</h3>

      <p className="my-4">
        Taking advantage of the large body of classical Greek literature, some insightful analyses
        of Roman history, and his own observations of contemporary Italian politics, Machiavelli
        set out on a quest to determine the optimum form of government for a people wishing to
        maintain their liberty and prosperity.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...one should organize the laws in such a way that they force upon the city those necessities
        which the location does not impose; and one should imitate the wise men who have lived in the
        most beautiful an fertile of lands, lands more apt to produce idle men unfit for any vigorous
        activity; in order to avoid the harm which the pleasant nature of the land might have caused
        because of idleness, they constrained their soldiers to undergo such training and exercise
        that better soldiers are produced there than in lands which are naturally harsh and barren."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 174</footer>
      </blockquote>

      <Callout type="note">
        <p>
          <strong>Key Insight:</strong> Machiavelli recognized that good outcomes don't arise from
          good intentions alone—they require the proper <em>structure</em> of incentives and
          constraints. This is fundamentally a systems thinking approach.
        </p>
      </Callout>

      {/* Politics as Generality */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Politics as a Science of Generalities</h3>

      <p className="my-4">
        With the <em>Discourses</em>, Machiavelli ushers in the age of the social engineer. Politics
        is very complex, yet there are some generalities which can be deduced by studying the history
        of various peoples, and the application of these principals can bear much fruit.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Anyone who studies present and ancient affairs will easily see how in all cities and all
        peoples there still exist, and have always existed, the same desires and passions. Thus,
        it is an easy matter for him who carefully examines past events to foresee future events
        in a republic and to apply the remedies employed by ancients, or, if old remedies cannot
        be found, to devise new ones based upon the similarity of events."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 252</footer>
      </blockquote>

      {/* Fortune and Skill */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Fortune and Skill</h3>

      <p className="my-4">
        Machiavelli does not, however, claim to have reduced politics to a science. In <em>The Prince</em>
        he admits that no matter how well prepared the politician is, success in worldly endeavors
        is dependent on both fortune and skill. However, he demonstrates that he understands the
        science of probability throughout his writings, and his ideas are fascinating because they
        so often have a mathematical rationale.
      </p>

      <Card>
        <h4 className="font-semibold text-indigo-400 mb-2">The Horatii and Curiatii</h4>
        <p className="text-sm text-dark-300 mb-3">
          Machiavelli's analysis of the duel between the three Roman Horatii and three Alban Curiatii
          offers a case in point. When the armies of Rome and Alba were massed opposite each other,
          to avoid enormous bloodshed, they agreed to decide the outcome by a duel between three
          warriors from each side.
        </p>
        <p className="text-sm text-dark-300">
          Machiavelli points out that it is very unwise to risk everything on only a portion of one's
          forces. By fighting a duel such as this one, each side gave up any systematic advantage
          they might have possessed—the advantage of numbers, equipment, training, location, morale.
          All of these were nullified by the decision to duel.
        </p>
      </Card>

      <p className="my-4">
        This concern with the uncertainty of micro-phenomena and the desire to improve the political
        system leads Machiavelli to seek out practices which result in greater holistic well-being.
      </p>

      {/* Machiavelli vs Adam Smith */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Machiavelli and Adam Smith</h3>

      <p className="my-4">
        In one sense, Machiavelli is the political alter ego of the economist Adam Smith. Smith's
        <em> Wealth of Nations</em> put capitalism on a solid theoretical footing, establishing the
        science of economics. In it, Smith argues that in an economic system properly constituted,
        the centrifugal tendencies of the population can be harnessed to provide for the best
        interests of all.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "We look not to the good will of the butcher, baker, and candlestick maker..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Adam Smith (paraphrased)</footer>
      </blockquote>

      <p className="my-4">
        In effect, Machiavelli said the same thing two hundred years earlier in the <em>Discourses</em>.
        It is the system of law and government which insures the healthy functioning of the political
        system, not the virtue of the individual. Until this point, it had been accepted that the
        desired goal was a good political system, and this was to be attained through the virtue of
        the individual.
      </p>

      <Callout type="info">
        <p>
          <strong>Revolutionary Reversal:</strong> Machiavelli ingeniously reversed this argument,
          claiming that while virtue might insure the proper functioning of the political system,
          a good political system was necessary in order to insure the maintenance of civic virtue
          (an Aristotelian idea with a twist). Thus, the problem now had to be dealt with in a
          systematic fashion.
        </p>
      </Callout>

      {/* Comparison Table */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Pre-Machiavelli vs Machiavelli</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-red-400 mb-2">Traditional View</h4>
          <p className="text-dark-300 text-sm mb-3">Goal: Good political system</p>
          <p className="text-dark-300 text-sm mb-3">Method: Individual virtue</p>
          <p className="text-dark-400 text-sm italic">
            "Good men make good governments"
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-green-400 mb-2">Machiavelli's View</h4>
          <p className="text-dark-300 text-sm mb-3">Goal: Civic virtue and liberty</p>
          <p className="text-dark-300 text-sm mb-3">Method: Good system structure</p>
          <p className="text-dark-400 text-sm italic">
            "Good systems produce good outcomes"
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Machiavelli was the first to treat politics as a <strong>system</strong> that could
              be studied and improved through careful analysis of history and observation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              He recognized that <strong>structure matters</strong>—good outcomes require properly
              designed institutions, not just good intentions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Like Adam Smith, Machiavelli understood that <strong>self-interest</strong> could
              be channeled through proper institutions to benefit society.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              He reversed the traditional causality: good <strong>systems produce virtue</strong>,
              not the other way around.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
