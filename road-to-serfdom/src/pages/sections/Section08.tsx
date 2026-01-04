import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The finest opportunity ever given to the world was thrown away because
        the passion for equality made vain the hope for freedom."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Lord Acton, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Once we accept that economic activity must be directed by a central authority,
        one question becomes paramount: <strong className="text-amber-400">Who decides?</strong>
        Lenin captured this in his famous phrase <em>"Who, whom?"</em>—shorthand for the
        universal problem of any socialist society: Who plans whom? Who directs whom?
        Who assigns to others their station in life?
      </p>

      {/* Section 1: The Blindness of Competition and Justice */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The "Blindness" of Competition</h2>

      <p className="my-4">
        One of the commonest objections to competition is that it is "blind." But Hayek
        reminds us that to the ancients, <strong className="text-amber-400">blindness was
        an attribute of their deity of justice</strong>. This is not a weakness but a virtue.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Why "Blindness" is a Virtue</h4>
        <p className="text-dark-300 mb-4">
          It is as much a commendation of competition as of justice that it is
          <strong> no respecter of persons</strong>. That it is impossible to foretell
          who will be lucky and who will suffer—that rewards and penalties depend on
          capacity and luck rather than on someone's views of merit—is a feature, not a bug.
        </p>
        <p className="text-dark-400 text-sm">
          Just as legal rules should not be designed to benefit particular people,
          economic outcomes should not be assigned by anyone's conscious judgment
          of who "deserves" what.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "The choice open to us is not between a system in which everybody will get
        what he deserves according to some absolute and universal standard of right,
        and one where individual shares are determined partly by accident... but between
        a system where it is the will of a few persons that decides who is to get what,
        and one where it depends at least partly on the ability and enterprise of the
        people concerned."
      </blockquote>

      {/* Section 2: Freedom Despite Inequality */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Freedom Despite Inequality</h2>

      <p className="my-4">
        The opportunities open to the poor in a competitive society are much more
        restricted than those open to the rich. But this does not make it less true
        that in such a society <strong className="text-amber-400">the poor are much more
        free</strong> than a person commanding much greater material comfort in a
        different type of society.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Under Competition</h4>
          <p className="text-sm text-dark-300">
            A man who starts poor can reach wealth. It depends solely on him—not on
            the favors of the mighty. Nobody can prevent him from attempting it.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Under Planning</h4>
          <p className="text-sm text-dark-300">
            Success depends on the approval of authority. No amount of ability or
            effort matters if those who direct the plan have not assigned you a place.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Unskilled Worker</h4>
          <p className="text-sm text-dark-300">
            A badly paid unskilled worker in a free country has more freedom to shape
            his life than a better-paid engineer in a planned economy like Russia.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Real Difference</h4>
          <p className="text-sm text-dark-300">
            In a free society: no absolute impediments, no brute force confining you.
            Under planning: danger to security and freedom if you displease authority.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          <strong>We Have Forgotten What Unfreedom Means:</strong> It is only because
          we have forgotten what unfreedom means that we often overlook that a badly
          paid worker in a free country can change his job, his residence, his views,
          his leisure activities—while in a planned society these all require official
          permission or approval.
        </p>
      </Callout>

      {/* Section 3: Private Property Protects Everyone */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Private Property Protects Everyone</h2>

      <p className="my-4">
        What our generation has forgotten is that the system of private property is the
        most important <strong className="text-amber-400">guarantee of freedom</strong>—not
        only for those who own property, but scarcely less for those who do not.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">With Divided Property</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Nobody has complete power over us</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>We can decide what to do with ourselves</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Minorities can be employed by fellow members</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Many independent actors means many options</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">With Unified Control</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Whoever exercises control has complete power</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Your fate depends on the state's judgment of you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>Minorities have only a "nominal share" in communal property</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>The smallest official has more power than a millionaire neighbor</span>
            </li>
          </ul>
        </div>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "Who will deny that a world in which the wealthy are powerful is still a
        better world than one in which only the already powerful can acquire wealth?"
      </blockquote>

      {/* Section 4: Lenin's Question */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Lenin's Question: "Who, Whom?"</h2>

      <p className="my-4">
        Lenin himself introduced to Russia the famous phrase <strong className="text-amber-400">
        "who, whom?"</strong>—the byword in which the people summed up the universal
        problem of a socialist society. Who plans whom? Who directs and dominates whom?
        Who assigns to other people their station in life, and who has his allotted by others?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Central Political Problem</h4>
        <p className="text-dark-300 mb-4">
          As soon as the state takes upon itself the task of planning the whole economic
          life, the problem of the <strong>due station of different individuals and groups</strong>
          must inevitably become the central political problem.
        </p>
        <p className="text-dark-400 text-sm">
          There will be no economic or social questions that would not be political
          questions—their solution will depend exclusively on who wields coercive power,
          on whose views prevail on all occasions.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Only Power Worth Having:</strong> As the coercive power of the state
          will alone decide who is to have what, the only power worth having will be a
          share in the exercise of this directing power. All roads to wealth and honor
          will exist only through the government.
        </p>
      </Callout>

      {/* Section 5: The Difference Between Free and Totalitarian Systems */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Difference Between Free and Totalitarian Systems</h2>

      <p className="my-4">
        An American student of politics asserted that the problem of all government is
        "who gets what, when, and how?" In a way this is not untrue—all government affects
        people's relative positions. But there are two fundamental distinctions:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">General Rules vs. Particular Effects</h4>
          <p className="text-sm text-dark-300">
            Measures may be taken without knowing how they will affect particular
            individuals, and without aiming at particular effects. This is different
            from consciously determining each person's fate.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Limited vs. Total Government</h4>
          <p className="text-sm text-dark-300">
            The question is whether <em>everything</em> a person gets depends on
            government, or only <em>some things</em> for <em>some people</em> in
            <em>some ways</em> at <em>some times</em>.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Liberal System</h4>
          <p className="text-sm text-dark-300">
            Economic forces are allowed to work for ends not part of government policy;
            economic power can be used independently of government direction.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Totalitarian System</h4>
          <p className="text-sm text-dark-300">
            There is only one power—the ruling group—with control over all human ends
            and complete power over the position of each individual in society.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        Both Nazis and socialists complain of the "artificial separation of economics
        and politics" and demand the dominance of politics over economics. But the
        alternative is not merely that there would be only one power, but that this
        single power would have <strong className="text-amber-400">control over all
        human ends</strong>.
      </p>

      {/* Section 6: Inequality Under Planning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How Inequality Feels Under Planning</h2>

      <p className="my-4">
        Once it becomes generally recognized that the position of the individual is
        determined not by impersonal forces but by the <strong className="text-amber-400">
        deliberate decision of authority</strong>, people's attitudes toward their
        position in society necessarily change.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Inequality is More Bearable When Impersonal</h4>
        <p className="text-dark-300 mb-4">
          Inequality is undoubtedly more readily borne, and affects the dignity of the
          person much less, if it is determined by <strong>impersonal forces</strong> than
          when it is due to <strong>design</strong>.
        </p>
        <p className="text-dark-400 text-sm">
          In a competitive society, it is no slight to a person to be told by any
          particular firm that it has no need for his services. But in a planned
          society, individuals must decide not whether a person is needed for a
          particular job, but <em>whether he is of use for anything</em>.
        </p>
      </div>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "While people will submit to suffering which may hit anyone, they will not
        so easily submit to suffering which is the result of the decision of authority.
        It may be bad to be just a cog in an impersonal machine; but it is infinitely
        worse if we can no longer leave it."
      </blockquote>

      <p className="my-4">
        Once government has embarked upon planning for the sake of justice, it cannot
        refuse responsibility for anybody's fate or position. All efforts to improve
        one's position must then be directed at <strong className="text-amber-400">
        influencing the authority</strong> rather than at developing one's abilities
        and foresight.
      </p>

      {/* Section 7: The Problem of "Justice" in Planning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Problem of "Justice" in Planning</h2>

      <p className="my-4">
        That a government which undertakes to direct economic activity will have to use
        its power to realize somebody's ideal of distributive justice is certain. But
        how can it be guided? Is there a scale of values on which reasonable people can
        agree, which would justify a new hierarchical order of society?
      </p>

      <Callout type="note">
        <p>
          <strong>Only Absolute Equality Would Provide Guidance:</strong> There is only
          one general principle that would provide a definite answer to all questions:
          <em> complete and absolute equality</em>. But no socialist movement aimed at
          complete equality has ever gained substantial support. What socialism promises
          is "greater equality"—a merely negative expression of dislike for the present
          state of affairs.
        </p>
      </Callout>

      <p className="my-4">
        The formula of "greater equality" answers practically none of the planner's
        questions. It does not free us from the necessity of deciding in every particular
        instance between the merits of particular individuals or groups. All it tells us
        is to take from the rich as much as we can—but when it comes to the distribution
        of the spoils, the problem is the same.
      </p>

      {/* Section 8: Our Ideas of "Just Price" Come from Competition */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Where Our Ideas of "Justice" Come From</h2>

      <p className="my-4">
        Have we not all some idea of what is a "just price" or a "fair wage"? Unfortunately,
        what standards we have are <strong className="text-amber-400">derived from the
        competitive regime we have known</strong>, and would necessarily disappear soon
        after the disappearance of competition.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">What "Just Price" Really Means</h4>
        <p className="text-dark-300 mb-4">
          What we mean by a just price or a fair wage is either the <strong>customary</strong>
          price or wage, the return which past experience has made people expect, or
          the price that would exist if there were no monopolistic exploitation.
        </p>
        <p className="text-dark-400 text-sm">
          But when the planner decides how much of each good is to be produced, he
          also determines what the "just" price or "fair" wage will be. If fewer
          architects are wanted, the "fair" wage for architects will be lower—because
          the planner has decided it should be so.
        </p>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "A fixed rule, like that of equality, might be acquiesced in, and so might
        chance, or an external necessity; but that a handful of human beings should
        weigh everybody in the balance, and give more to one and less to another at
        their sole pleasure and judgment, would not be borne unless from persons
        believed to be more than men, and backed by supernatural terrors."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — John Stuart Mill
        </footer>
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Competition, like justice, is <strong>"blind"</strong>—and this is
              its virtue. It is no respecter of persons, distributing rewards
              without anyone's conscious design.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Even with unequal starting positions, the <strong>poor are more free</strong>
              in a competitive society than the comfortable in a planned one.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Private property</strong> guarantees freedom for everyone—even
              those without property—by dividing control among many independent actors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              In a planned society, Lenin's question <strong>"Who, whom?"</strong>
              becomes the central political problem: who decides everyone's fate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Inequality feels worse</strong> when it results from deliberate
              human decision than when it results from impersonal forces.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Our standards of <strong>"just price" and "fair wage"</strong> come from
              competition—they would disappear with it, leaving only the planner's
              arbitrary decisions.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Security and Freedom," Hayek examines
          the two kinds of security—the limited security that can be achieved for all,
          and the absolute security that some demand at the expense of others' freedom.
        </p>
      </Callout>
    </LessonLayout>
  );
}
