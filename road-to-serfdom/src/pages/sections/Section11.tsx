import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "It is significant that the nationalisation of thought has proceeded
        everywhere pari passu with the nationalisation of industry."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — E. H. Carr, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek examines one of the most profound moral consequences
        of totalitarianism: the systematic destruction of{' '}
        <strong className="text-amber-400">truth itself</strong>. When the state
        controls all information and demands conformity to an official doctrine,
        the very concept of objective truth—the foundation of all morals—is
        undermined.
      </p>

      {/* Section 1: The Need for Belief */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Making People Believe</h2>

      <p className="my-4">
        The most effective way of making everybody serve the single system of ends
        towards which the social plan is directed is to{' '}
        <strong className="text-amber-400">make everybody believe</strong> in those
        ends. It is not enough that everybody should be forced to work for the same
        ends—the people must come to regard them as their own ends.
      </p>

      <Callout type="warning">
        <p>
          <strong>Imposed Beliefs Become Internalized:</strong> Although the beliefs
          must be chosen for the people and imposed upon them, they must become
          their beliefs—a generally accepted creed which makes individuals act
          spontaneously in the way the planner wants.
        </p>
      </Callout>

      <p className="my-4">
        If the feeling of oppression in totalitarian countries is in general much
        less acute than most people in liberal countries imagine, this is because
        the totalitarian governments succeed to a high degree in{' '}
        <em>making people think as they want them to</em>.
      </p>

      {/* Section 2: The Nature of Totalitarian Propaganda */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Nature of Totalitarian Propaganda
      </h2>

      <p className="my-4">
        Neither propaganda in itself, nor the techniques employed, are peculiar to
        totalitarianism. What so completely changes its nature and effect in a
        totalitarian state is that{' '}
        <strong className="text-amber-400">all propaganda serves the same goal</strong>
        —all instruments are coordinated to influence individuals in the same
        direction.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">
          Gleichschaltung: The Coordination of All Minds
        </h4>
        <p className="text-dark-300">
          The German term <em>Gleichschaltung</em> captures this phenomenon: the
          total coordination of all instruments of propaganda to produce uniformity
          of thought. When all sources of information are under one single control,
          it is no longer a question of merely persuading—the skilful propagandist
          has power to <strong>mould minds</strong> in any direction he chooses.
        </p>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Propaganda in Free Society</h4>
          <p className="text-sm text-dark-300">
            Made by independent, competing agencies for different ends. Effect is
            limited because alternative viewpoints exist.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Totalitarian Propaganda</h4>
          <p className="text-sm text-dark-300">
            All sources unified under single control. Different not only in
            magnitude but in <em>kind</em>—no escape from its influence.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Isolation Effect</h4>
          <p className="text-sm text-dark-300">
            Even the most intelligent and independent people cannot entirely escape
            the influence if long isolated from all other sources of information.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Moral Effect</h4>
          <p className="text-sm text-dark-300">
            The peculiar moral effects arise not from technique but from the
            <em> object and scope</em> of totalitarian propaganda.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: The Destruction of Truth */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Destruction of Truth
      </h2>

      <p className="my-4">
        The moral consequences of totalitarian propaganda are of an even more
        profound kind than the enforcement of a new moral code. They are{' '}
        <strong className="text-amber-400">destructive of all morals</strong>{' '}
        because they undermine one of the foundations of all morals: the sense of
        and the respect for truth.
      </p>

      <Callout type="info">
        <p>
          <strong>Beyond Values to Facts:</strong> Totalitarian propaganda cannot
          confine itself to values and moral convictions. It must extend to
          questions of <em>fact</em> where human intelligence is involved in a
          different way—because official values must be justified by assertions
          about causal connections between means and ends.
        </p>
      </Callout>

      <p className="my-4">
        The planner constantly faces decisions about which there exist no definite
        moral rules. Yet he must justify his decisions to the people. The need to
        rationalize likes and dislikes, and to state reasons that will appeal to as
        many people as possible, forces him to construct{' '}
        <strong className="text-amber-400">theories</strong>—assertions about facts
        which become an integral part of the governing doctrine.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Creation of Myths</h4>
        <p className="text-dark-300 mb-4">
          This process of creating a "myth" to justify action need not be conscious.
          The totalitarian leader may be guided merely by instinctive prejudices,
          then embrace theories which seem to provide rational justification for
          them. Thus a pseudo-scientific theory becomes part of the official creed.
        </p>
        <p className="text-dark-400 text-sm">
          Plato's "noble lies," Sorel's "myths," the racial doctrine of the Nazis,
          and the corporative state theory of Mussolini all serve the same purpose:
          justifying preconceived opinions with elaborate "scientific" theories.
        </p>
      </div>

      {/* Section 4: The Perversion of Language */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Perversion of Language</h2>

      <p className="my-4">
        The most effective way of making people accept new values is to persuade
        them that these are really the same values they have always held—but which
        were not properly understood before. And the most efficient technique to
        this end is to{' '}
        <strong className="text-amber-400">use the old words but change their meaning</strong>.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "Few traits of totalitarian regimes are at the same time so confusing to
        the superficial observer and yet so characteristic of the whole intellectual
        climate as the complete perversion of language, the change of meaning of the
        words by which the ideals of the new regimes are expressed."
      </blockquote>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">
          "Liberty": The Worst Sufferer
        </h4>
        <p className="text-dark-300 mb-4">
          The word <em>liberty</em> is used as freely in totalitarian states as
          elsewhere. Indeed, wherever liberty as we understand it has been destroyed,
          this has almost always been done{' '}
          <strong>in the name of some new freedom</strong> promised to the people.
        </p>
        <p className="text-dark-400 text-sm">
          The "collective freedom" offered by planners is not the freedom of members
          of society but the unlimited freedom of the planner to do with society
          what he pleases. It is the <em>confusion of freedom with power</em>{' '}
          carried to the extreme.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>Words Become Empty Shells:</strong> Gradually the whole language
          becomes despoiled. Words become empty shells deprived of any definite
          meaning, as capable of denoting one thing as its opposite, and used solely
          for the emotional associations which still adhere to them.
        </p>
      </Callout>

      <p className="my-4">
        The list of perverted words extends beyond "freedom" and "liberty" to
        include <em>justice</em>, <em>law</em>, <em>right</em>, and <em>equality</em>
        —almost all moral and political terms in general use.
      </p>

      {/* Section 5: The Plan Becomes Sacred */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Plan Becomes Sacred
      </h2>

      <p className="my-4">
        Since coercion cannot be confined merely to the acceptance of the ethical
        code underlying the plan, and since many parts of this code will never be
        explicitly stated, the plan itself—in every detail, in fact every act of
        the government—must become{' '}
        <strong className="text-amber-400">sacrosanct and exempt from criticism</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">
            Doubt as Sabotage
          </h3>
          <p className="text-dark-400 text-sm">
            As the Webbs report of Russia: "Whilst the work is in progress, any
            public expression of doubt, or even fear that the plan will not be
            successful, is an act of disloyalty and even of treachery." When doubt
            concerns the whole social plan, it must be treated as <em>sabotage</em>.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">
            Information Control
          </h3>
          <p className="text-dark-400 text-sm">
            The whole apparatus for spreading knowledge—schools, press, wireless,
            cinema—will be used exclusively to spread views that strengthen belief
            in the rightness of decisions. All information that might cause doubt
            will be <em>withheld</em>.
          </p>
        </div>
      </div>

      <p className="my-4">
        The situation in a totalitarian state is permanently and in all fields the
        same that it is elsewhere in some fields only in wartime. Everything which
        might cause doubt about the wisdom of the government or create discontent
        will be kept from the people.
      </p>

      {/* Section 6: Science Under Totalitarianism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Science Under Totalitarianism
      </h2>

      <p className="my-4">
        Totalitarian control of opinion extends even to subjects which at first
        seem to have no political significance. In the disciplines dealing directly
        with human affairs—history, law, economics—the disinterested search for
        truth cannot be allowed. These disciplines become the most fertile factories
        of <strong className="text-amber-400">official myths</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">"Party in Mathematics"</h4>
          <p className="text-sm text-dark-300">
            Soviet journals proclaimed: "We stand for Party in Mathematics. We
            stand for the purity of Marxist-Leninist theory in surgery."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">"German Physics"</h4>
          <p className="text-sm text-dark-300">
            Nobel prizeman Lennard published his life's work under the title
            <em> German Physics in Four Volumes</em>. Relativity was called a
            "Semitic attack on Nordic physics."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Statistics as "Class War"</h4>
          <p className="text-sm text-dark-300">
            Mathematical statistics attacked because they "form part of the class
            struggle on the ideological frontier."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Chess as Politics</h4>
          <p className="text-sm text-dark-300">
            "We must finish once and for all with the neutrality of chess. We must
            condemn the formula 'chess for the sake of chess.'"
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>No Activity for Its Own Sake:</strong> It is entirely in keeping
          with totalitarianism that it condemns any human activity done for its own
          sake. Science for science's sake, art for art's sake, are equally
          abhorrent to Nazis and communists. Every activity must derive
          justification from a conscious social purpose.
        </p>
      </Callout>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "As the Nazi Minister of Justice has explained, the question which every
        new scientific theory must ask itself is: 'Do I serve National-Socialism
        for the greatest benefit of all?'"
      </blockquote>

      {/* Section 7: The New Meaning of Truth */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Truth: From Discovery to Decree
      </h2>

      <p className="my-4">
        The word <strong className="text-amber-400">truth</strong> itself ceases to
        have its old meaning. It no longer describes something to be found, with
        the individual conscience as the sole arbiter of whether evidence warrants
        a belief. It becomes something to be{' '}
        <em>laid down by authority</em>—something which has to be believed in the
        interest of the organized effort.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">
          The Intellectual Climate of Totalitarianism
        </h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>
              The spirit of <strong>complete cynicism</strong> as regards truth
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>
              The loss of the sense of even the <strong>meaning of truth</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>
              The disappearance of the spirit of <strong>independent inquiry</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>
              Loss of belief in the power of <strong>rational conviction</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>
              All differences of opinion become <strong>political issues</strong>{' '}
              to be decided by authority
            </span>
          </li>
        </ul>
      </div>

      <p className="my-4">
        Perhaps the most alarming fact is that contempt for intellectual liberty
        is not a thing which arises only once the totalitarian system is established.
        It can be found everywhere among intellectuals who have embraced a
        collectivist faith—even in countries still under a liberal regime.
      </p>

      {/* Section 8: The Argument Against Freedom of Thought */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Attack on Freedom of Thought
      </h2>

      <p className="my-4">
        Some intellectuals argue that there is no "real" freedom of thought in
        liberal society anyway—that opinions are shaped by propaganda, advertising,
        and environmental factors. From this they conclude that if thought is
        always being shaped, we ought to use this power deliberately to turn
        thoughts in a "desirable" direction.
      </p>

      <Callout type="info">
        <p>
          <strong>Hayek's Response:</strong> It is probably true that the great
          majority are rarely capable of thinking independently. But this does not
          mean that anyone is competent, or ought to have power, to select those
          to whom freedom of thought is to be reserved. It certainly does not
          justify any group claiming the right to determine what others should think.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">
          Why Freedom of Thought Matters
        </h4>
        <p className="text-dark-300">
          In any society, freedom of thought will probably be of direct significance
          only for a small minority. But it is this minority—who can think
          independently—that creates progress, discovers errors, and challenges
          authority. To suppress this freedom is to close off the possibility of
          correction and improvement.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Totalitarian systems must make people <strong>believe</strong> in the
              plan's ends—not merely force compliance, but shape minds to accept
              the goals as their own.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Totalitarian propaganda differs from propaganda in free societies
              not only in <strong>magnitude</strong> but in <strong>kind</strong>
              —because all sources of information are unified under single control.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The moral consequences are <strong>destructive of all morals</strong>{' '}
              because they undermine the very sense of and respect for truth.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Language itself is <strong>perverted</strong>—old words are given
              new meanings, so that "freedom" comes to mean the opposite of what
              it once meant.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The plan becomes <strong>sacrosanct</strong>—doubt is treated as
              sabotage, and all information that might cause questioning is suppressed.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Even <strong>pure science</strong> is politicized—mathematics,
              physics, and every human activity must serve the regime's purposes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">7.</span>
            <span>
              <strong>Truth</strong> ceases to be something discovered by
              individual inquiry and becomes something decreed by authority.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The Socialist Roots of Nazism," Hayek
          traces the intellectual history of National Socialism back to German
          socialist thought—showing that Nazism was not a reaction against
          socialism but grew out of it.
        </p>
      </Callout>
    </LessonLayout>
  );
}
