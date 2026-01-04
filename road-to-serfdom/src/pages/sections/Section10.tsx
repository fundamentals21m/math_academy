import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "All power corrupts, absolute power corrupts absolutely."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Lord Acton, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Many who regard the advent of totalitarianism as inevitable derive consolation
        from the belief that its most repellent features are due to historical accident—
        that these regimes were established by "blackguards and thugs." Hayek argues this
        is a dangerous illusion. There are <strong className="text-amber-400">strong
        reasons for believing</strong> that what we find most horrifying about
        totalitarian systems are not accidental byproducts but phenomena which
        totalitarianism is certain sooner or later to produce.
      </p>

      {/* Section 1: The Illusion of "Good" Totalitarianism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Illusion of "Good" Totalitarianism</h2>

      <p className="my-4">
        It is tempting to believe that totalitarianism is merely a powerful system that
        can be used for good or evil, and that its effects depend entirely on who runs it.
        Some even reason that if bad men will inevitably seize such power, good men should
        establish the system first to prevent this.
      </p>

      <Callout type="warning">
        <p>
          <strong>A Dangerous Assumption:</strong> Just as the democratic statesman who
          sets out to plan economic life will soon be confronted with the alternative of
          either assuming dictatorial powers or abandoning his plans, so the totalitarian
          dictator would soon have to choose between <em>disregard of ordinary morals</em>
          and <em>failure</em>.
        </p>
      </Callout>

      <p className="my-4">
        It is for this reason that the unscrupulous and uninhibited are likely to be more
        successful in a society tending towards totalitarianism. The totalitarian system
        does not merely <em>permit</em> bad people to rise—it <em>selects</em> for them.
      </p>

      {/* Section 2: Three Reasons Why the Worst Rise */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Three Reasons Why the Worst Rise</h2>

      <p className="my-4">
        There are three main reasons why a numerous and strong group with fairly
        homogeneous views is not likely to be formed by the best but rather by the
        <strong className="text-amber-400"> worst elements</strong> of any society.
        By our standards, the principles on which such a group would be selected will
        be almost entirely negative.
      </p>

      <div className="space-y-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">1. The Lowest Common Denominator</h4>
          <p className="text-dark-300 mb-3">
            The higher the education and intelligence of individuals, the more their views
            and tastes become differentiated and the less likely they are to agree on a
            particular hierarchy of values.
          </p>
          <p className="text-dark-400 text-sm">
            If we wish to find uniformity and similarity of outlook, we must descend to
            regions of <strong>lower moral and intellectual standards</strong> where more
            primitive instincts prevail. The largest group with similar values will be
            those with low standards—the lowest common denominator.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">2. The Docile and Gullible</h4>
          <p className="text-dark-300 mb-3">
            To increase their numbers, the potential dictator must convert more to the
            same simple creed. He will be able to obtain the support of all the
            <strong> docile and gullible</strong>—those who have no strong convictions
            of their own.
          </p>
          <p className="text-dark-400 text-sm">
            Those whose vague and imperfectly formed ideas are easily swayed and whose
            passions and emotions are readily aroused will swell the ranks of the
            totalitarian party.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30">
          <h4 className="font-semibold text-rose-400 mb-3">3. The Power of Negative Programs</h4>
          <p className="text-dark-300 mb-3">
            It seems almost a law of human nature that it is easier for people to agree on
            a <strong>negative programme</strong>—on the hatred of an enemy, on the envy
            of those better off—than on any positive task.
          </p>
          <p className="text-dark-400 text-sm">
            The contrast between "we" and "they," the common fight against those outside
            the group, is an essential ingredient in any creed which will solidly knit
            together a group for common action.
          </p>
        </div>
      </div>

      {/* Section 3: The Indispensable Enemy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Indispensable Enemy</h2>

      <p className="my-4">
        The enemy, whether internal like the "Jew" or the "Kulak," or external, seems to
        be an <strong className="text-amber-400">indispensable requisite</strong> in the
        armoury of a totalitarian leader. From their point of view, having an enemy has
        the great advantage of leaving them greater freedom of action than almost any
        positive programme.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Germany</h4>
          <p className="text-sm text-dark-300">
            The Jew became the enemy because of anti-capitalist resentment. German
            anti-semitism and anti-capitalism spring from the same root—a fact rarely
            grasped by foreign observers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Russia</h4>
          <p className="text-sm text-dark-300">
            The Kulak served the same purpose—a class enemy representing capitalism
            and exploitation, to be liquidated for the good of the collective.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Pattern</h4>
          <p className="text-sm text-dark-300">
            The traditional dislike of commercial pursuits made those who practiced
            them targets. It is the old story of the alien being admitted only to
            less respected trades and then hated for practising them.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Function</h4>
          <p className="text-sm text-dark-300">
            An enemy provides unity through opposition, justifies any measure as
            "defensive," and explains all failures as sabotage by hostile forces.
          </p>
        </Card>
      </CardGrid>

      {/* Section 4: Collectivism and Nationalism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Collectivism Becomes Nationalism</h2>

      <p className="my-4">
        It may be questioned whether anybody can realistically conceive of a collectivist
        programme other than in the service of a limited group. The belief in community
        of aims and interests with fellow-men seems to presuppose a greater degree of
        similarity than exists between men merely as human beings.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "One of the inherent contradictions of the collectivist philosophy is that while
        basing itself on the humanistic morals which individualism has developed, it is
        practicable only within a relatively small group."
      </blockquote>

      <Callout type="info">
        <p>
          <strong>Theory vs. Practice:</strong> Socialism so long as it remains
          theoretical is internationalist, while as soon as it is put into practice,
          whether in Russia or Germany, it becomes <em>violently nationalist</em>.
          This is why "liberal socialism" as most people imagine it is purely
          theoretical, while the practice of socialism is everywhere totalitarian.
        </p>
      </Callout>

      <p className="my-4">
        The nationalist and imperialist propensities of socialist planners, much more
        common than generally recognised, were exemplified by the Webbs and early Fabians,
        whose enthusiasm for planning was "characteristically combined with veneration for
        the large and powerful political units and a contempt for the small state."
      </p>

      {/* Section 5: Power as the Goal */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Power as the Goal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Individualist View</h3>
          <p className="text-dark-300 text-sm">
            To the great individualist social philosophers—Lord Acton, Jacob Burckhardt,
            Bertrand Russell—<strong>power itself has always appeared the arch-evil</strong>.
            Freedom means protection from arbitrary power wielded by other men.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">Collectivist View</h3>
          <p className="text-dark-300 text-sm">
            To the strict collectivist, <strong>power is a goal in itself</strong>. The
            desire to organise social life according to a unitary plan springs largely
            from a desire for power over men of a magnitude never before known.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Illusion of "Transferring" Power:</strong> Many liberal socialists
          believe that by depriving private individuals of power and transferring it to
          society, they can extinguish power. But by concentrating power in the hands of
          a single body, it is not merely transferred but <em>infinitely heightened</em>.
        </p>
      </Callout>

      <p className="my-4">
        It is entirely fallacious to argue that the power of a Central Planning Board
        would be "no greater than the power collectively exercised by private boards of
        directors." In a competitive society, nobody can exercise even a fraction of the
        power which a socialist planning board would possess. <strong className="text-amber-400">
        The competitive system is the only system designed to minimise by decentralisation
        the power exercised by man over man.</strong>
      </p>

      {/* Section 6: The Collectivist Morality */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Collectivist Morality</h2>

      <p className="my-4">
        From the two central features of every collectivist system—the need for a commonly
        accepted system of ends, and the all-overriding desire to give the group maximum
        power to achieve these ends—grows a definite system of morals which differs from
        ours in one crucial point: <strong className="text-amber-400">it does not leave
        the individual conscience free to apply its own rules</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Principle Difference</h4>
        <p className="text-dark-300 mb-4">
          Like formal law, the rules of individualist ethics are <strong>general and
          absolute</strong>—they prescribe or prohibit a general type of action
          irrespective of whether the ultimate purpose is good or bad. To cheat, steal,
          torture, or betray is held to be bad irrespective of circumstances.
        </p>
        <p className="text-dark-400 text-sm">
          The principle that <em>the end justifies the means</em> is in individualist
          ethics regarded as the denial of all morals. In collectivist ethics it becomes
          necessarily <strong>the supreme rule</strong>.
        </p>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "There is literally nothing which the consistent collectivist must not be prepared
        to do if it serves 'the good of the whole', because the 'good of the whole' is
        to him the only criterion of what ought to be done."
      </blockquote>

      {/* Section 7: The Selection of Leaders */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Who Gets Selected for Power</h2>

      <p className="my-4">
        There is little in the positions of power to attract those who hold moral beliefs
        of the kind which in the past have guided European peoples. The only tastes which
        are satisfied are <strong className="text-amber-400">the taste for power as such</strong>—
        the pleasure of being obeyed and of being part of a well-functioning and immensely
        powerful machine to which everything else must give way.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Requirements for the Totalitarian Leader's Instruments</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Must have <strong>no moral convictions of their own</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Must be <strong>unreservedly committed</strong> to the person of the leader</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Must be <strong>completely unprincipled</strong> and literally capable of everything</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Must have <strong>no ideals of their own</strong> which they want to realise</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">•</span>
            <span>Must have <strong>no ideas about right or wrong</strong> that might interfere with orders</span>
          </li>
        </ul>
      </div>

      <Callout type="note">
        <p>
          <strong>The Path to Power:</strong> As there will be need for actions which
          are bad in themselves, and which all those still influenced by traditional
          morals will be reluctant to perform, <em>the readiness to do bad things becomes
          a path to promotion and power</em>.
        </p>
      </Callout>

      {/* Section 8: The Virtues That Disappear */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Virtues That Disappear</h2>

      <p className="my-4">
        Hayek contrasts the virtues of the "typical Prussian" with those of the English
        tradition to illustrate what collectivism values versus what it destroys:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-dark-300 mb-3">Valued Under Collectivism</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Industriousness and discipline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Thoroughness and energetic ruthlessness</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Single-minded devotion to assigned tasks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Strong sense of order and duty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Strict obedience to authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dark-500">•</span>
              <span>Readiness for personal sacrifice</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">Destroyed by Collectivism</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Tolerance and respect for other individuals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Independence of mind</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span><em>Zivilcourage</em>—readiness to defend convictions against superiors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Consideration for the weak</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Healthy contempt and dislike of power</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Kindliness, humour, modesty, respect for privacy</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="my-4">
        These individualist virtues are at the same time <strong>eminently social
        virtues</strong>—they smooth social contacts and make control from above less
        necessary and more difficult. They flourish wherever the individualist or
        commercial type of society has prevailed.
      </p>

      {/* Section 9: The Economist's Verdict */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Economist's Verdict</h2>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "[The authorities of a collectivist state] would have to do these things whether
        they wanted to or not: and the probability of the people in power being individuals
        who would dislike the possession and exercise of power is on a level with the
        probability that an extremely tender-hearted person would get the job of
        whipping-master in a slave plantation."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Professor F. H. Knight
        </footer>
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>worst features of totalitarianism are not accidents</strong>—
              they are inherent in the system and will emerge regardless of who
              establishes it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Large groups with homogeneous views form around the <strong>lowest
              common denominator</strong>—those with primitive instincts and low
              moral standards.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Totalitarian movements grow by recruiting the <strong>docile and
              gullible</strong> and by uniting people against a common enemy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              An <strong>enemy is indispensable</strong> to totalitarian leaders—it
              provides unity through opposition and justifies any measure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Collectivism <strong>inevitably becomes nationalist</strong> because
              it requires a group identity and cannot extend to all humanity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              Collectivist ethics makes <strong>"the end justifies the means"</strong>
              the supreme rule, destroying the absolute moral prohibitions of
              individualist ethics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">7.</span>
            <span>
              Positions of power in totalitarian systems attract the <strong>ruthless
              and unscrupulous</strong>—those without moral convictions of their own.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "The End of Truth," Hayek examines how
          totalitarianism must control not only actions but beliefs—how propaganda
          becomes a tool for destroying the very concept of objective truth.
        </p>
      </Callout>
    </LessonLayout>
  );
}
