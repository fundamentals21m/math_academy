import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">The Legislative Sector</h2>

      <p className="my-4">
        Having established the sources of discontent in the previous section, we now turn to
        how the political system responds to discontent through the <strong className="text-indigo-400">legislative
        process</strong>. The legislative sector determines how factional influence is translated
        into government policy.
      </p>

      {/* Three Types of Government */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Three Imperfect Forms of Government</h3>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...those who have written about republics declare that there are in them three kinds of
        governments, which they call principality, aristocracy, and democracy..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 176</footer>
      </blockquote>

      <p className="my-4">
        With Popular Legislative Influence set to unity, aristocratic and executive desires become
        insignificant, and we have a <strong>pure democracy</strong>. Generally, however, this is
        not desirable:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Let me say, therefore, that all the forms of government listed are defective... Thus,
        those who were prudent in establishing laws recognized this fact and, avoiding each of
        these forms in themselves, chose one that combined them all, judging such a government
        to be steadier and more stable, for when there is in a city-state a principality, an
        aristocracy, and a democracy, one form keeps watch over the other."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 181</footer>
      </blockquote>

      {/* Mixed Government */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Mixed Government</h3>

      <p className="my-4">
        The logic of Machiavelli's statement is clear. By maintaining a <strong className="text-indigo-400">mixed
        government</strong>, the political system avoids weighting the discontent of any one faction
        too heavily. This prevents the buildup of intolerable levels of social stress which would
        result in rebellion and chaos.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Why Mixed Works</h4>
          <p className="text-sm text-dark-300">
            We can see from this model why Machiavelli was quick to say that laws favoring freedom
            were born of conflict between the classes. If the populace wants more freedom, and the
            aristocracy wishes to deprive the people of more freedom, then popular protest will
            be a positive quantity and aristocratic discontent, a negative quantity.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Balance of Forces</h4>
          <p className="text-sm text-dark-300">
            Assuming equal weight is given to each faction and the level of freedom and welfare in
            society are high enough to allow effective protest, these two inputs will cancel out,
            preventing either from "exploiting" the other.
          </p>
        </Card>
      </CardGrid>

      {/* Legislative Influence */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Legislative Influence Dynamics</h3>

      <p className="my-4">
        In reality, this analysis is made more difficult by the fact that the balance of legislative
        influence is not constant. The influence of the executive branch is very closely related to
        <strong className="text-indigo-400"> Executive Power</strong>—a measure of the executive's
        control over the government apparatus.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">How Factions Gain Legislative Influence</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="w-24 text-amber-400 font-semibold">Aristocracy:</span>
            <span className="text-dark-300">Increases influence when overly discontent with the state of affairs—wealth and traditional power.</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-24 text-green-400 font-semibold">Populace:</span>
            <span className="text-dark-300">Gains influence through two mechanisms: (1) incremental—high levels of protest increase representative strength, (2) revolutionary—violent opposition shifts legislative power drastically.</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-24 text-indigo-400 font-semibold">Executive:</span>
            <span className="text-dark-300">Legislative influence closely tied to Executive Power—the executive's control over the government apparatus.</span>
          </div>
        </div>
      </div>

      {/* Institutionalized Change */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Institutionalized vs Revolutionary Change</h3>

      <p className="my-4">
        The populace gains legislative influence through two mechanisms, one institutionalized, one
        irregular. High levels of protest may increase the strength and number of those representatives
        favoring the popular position. This represents an <strong>incremental adjustment</strong>.
      </p>

      <p className="my-4">
        Violent opposition to the legislative branch can also increase popular influence. When this
        effect takes place, it results in <strong>drastic shifts</strong> of legislative influence.
      </p>

      <Callout type="note">
        <p>
          <strong>Key Insight:</strong> The legislative process is not a neutral arbiter but rather
          a battlefield where factional interests compete. The balance of power shifts based on
          discontent levels, economic conditions, and the threat of violence.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Machiavelli advocated <strong>mixed government</strong>—combining elements of
              principality, aristocracy, and democracy for stability.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Legislative balance</strong> prevents any one faction from accumulating
              intolerable levels of discontent.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Each faction gains influence through different mechanisms: aristocracy through
              <strong> wealth</strong>, populace through <strong>protest</strong>, executive
              through <strong>power</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Popular influence can shift <strong>incrementally</strong> (through representatives)
              or <strong>drastically</strong> (through violent opposition).
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
