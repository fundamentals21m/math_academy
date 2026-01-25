import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">Early Political Philosophers</h2>

      <p className="my-4">
        Before we can understand Machiavelli's revolutionary approach to political theory, we must
        first examine the philosophical traditions he inherited and ultimately rejected. The history
        of political philosophy before Machiavelli was dominated by two great thinkers: <strong className="text-indigo-400">Plato</strong> and{' '}
        <strong className="text-indigo-400">Aristotle</strong>.
      </p>

      <Callout type="info">
        <p>
          <strong>Key Question:</strong> Why did earlier political philosophers fail to develop
          a systematic, empirical approach to politics? The answer lies in their reliance on
          idealistic assumptions about human nature and governance.
        </p>
      </Callout>

      {/* Plato Section */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Plato's Republic</h3>

      <p className="my-4">
        Plato offers a logical political system, but in describing only its ideal equilibrium state,
        he ignores many of the most pressing political issues. Given his ideal state (both political
        and mathematical), he says nothing about the measures necessary to obtain it.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "His state is static, it might easily become an old fogey society, ruled by inflexible
        octogenarians hostile to invention and jealous of change. It is mere science without art;
        it exalts order to the scientific mind, and quite neglects that liberty which is the soul of art..."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Will Durant on Plato's Republic</footer>
      </blockquote>

      <p className="my-4">
        Today, few would disagree that a harmonious society composed of satisfied and productive
        individuals is a desirable goal. However, in reality, no group of individuals is harmonious
        and few people are satisfied—no matter what their condition. In Plato's <em>Republic</em>,
        all men perform the task for which they are most suited; in modern America, few people know
        what they want to do, fewer still do the task for which they are best suited.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Problems with Plato's Approach</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>Relies on a perfect educational system to sort people into roles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>Describes only the ideal state, not how to achieve it</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>Static equilibrium ignores dynamic political realities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>Abandons the ideal for the real, the dynamic for the static</span>
          </li>
        </ul>
      </div>

      {/* Aristotle Section */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Aristotle and the Golden Mean</h3>

      <p className="my-4">
        With Aristotle we move closer to Machiavelli's ideology. Aristotle abandons Plato's ideal
        "forms" and is biased toward the empirical. Thus, no absolute is to be strived for, but
        rather the <strong className="text-indigo-400">"golden mean"</strong>—a flexible standard
        that fluctuates with collateral circumstances.
      </p>

      <Card>
        <h4 className="font-semibold text-indigo-400 mb-2">The Golden Mean</h4>
        <p className="text-sm text-dark-300 mb-3">
          The "golden mean" is no easily discernable mathematical quantity; it fluctuates with the
          collateral circumstances of the situation, and discovers itself only to mature and flexible
          reason. The excellence of reason which allows an individual to discern the golden mean is
          an art won by habituation and training.
        </p>
        <p className="text-sm text-dark-400 italic">
          We do not act rightly because we have virtue or excellence, but rather we have these
          because we have acted rightly. (Durant 1933, 61)
        </p>
      </Card>

      <p className="my-4">
        Machiavelli did not believe it was possible for any man to know the absolutes, thus it was
        useless (and potentially dangerous) to use them as a basis for government. The "golden mean"
        is found in Machiavelli's much less ideal conception of relative values and pluralism.
        Machiavelli believed in the ability of a good system of government to produce civic virtue.
      </p>

      {/* Aristotle's Limitations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Aristotle's Limitations</h3>

      <p className="my-4">
        Yet, even if Aristotle begins to suggest some of the themes which are to become cornerstones
        in Machiavelli's <em>Discourses</em>, his thoughts contain a number of normative/prejudiced
        notions which hamper him in the construction of a truly objective model of political
        interaction.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Retail trade is unnatural... and a mode by which men gain from one another. The most
        hated sort of such exchange is usury, which makes a gain out of money itself, and not from
        its natural use. For money was intended as an instrument of exchange, and not as the mother
        of interest."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Aristotle, Politics</footer>
      </blockquote>

      <p className="my-4">
        Although the dislike for usury is not an uncommon theme in Western civilization, the
        economist will note that money is much more than just a means of exchange. Power is derived
        from the control of money. Disapproval of this fact cannot alter it. Thus, although
        Aristotle contributed much to the development of scientific analysis, his thoughts are
        still far removed from the modern political and economic theories espoused by Machiavelli
        and Smith.
      </p>

      {/* The Middle Ages */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Middle Ages: A Step Backward</h3>

      <p className="my-4">
        During the Middle Ages, political thought moved away from the ideas of Aristotle. For one
        thousand years, the wrench of religious faith fouled the machinery of political theory.
        Many of the great political philosophers of this period were theologians (Augustine, Thomas
        Aquinas), and in their writings, the structure of the political system was subordinated to
        the individual's relationship with God.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Divine Right</h4>
          <p className="text-sm text-dark-300">
            The question of social justice was pre-empted by the concept of Divine Right. In effect,
            anything the ruler did was acceptable—only God had the right to question the judgement
            of a monarch.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Meaningless Politics</h4>
          <p className="text-sm text-dark-300">
            With heaven waiting in the wings, the idea of an ideal worldly political system became
            meaningless. Why concern oneself with earthly governance when eternal salvation awaited?
          </p>
        </Card>
      </CardGrid>

      {/* Transition to Machiavelli */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Setting the Stage for Machiavelli</h3>

      <p className="my-4">
        With these considerations in mind, it comes as no surprise that the first political
        philosopher to consider politics from a systematic perspective was not an overly religious
        man. Taking advantage of the large body of classical Greek literature, some insightful
        analyses of Roman history, and his own observations of contemporary Italian politics,
        Machiavelli set out on a quest to determine the optimum form of government for a people
        wishing to maintain their liberty and prosperity.
      </p>

      <Callout type="success">
        <p>
          <strong>The Revolution:</strong> Perhaps what makes Machiavelli most unique in his quest
          is his envisionment of man's political interaction as a <em>physical system</em>, where
          structure can be just as important as substance. This systematic approach makes his
          writings particularly amenable to system dynamics modeling.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>Plato's ideal state</strong> is static and fails to address how to achieve
              or maintain political equilibrium in the real world.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Aristotle's golden mean</strong> moves toward empiricism but still contains
              prejudiced notions about trade and money.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              The <strong>Middle Ages</strong> subordinated political theory to theology, making
              systematic analysis impossible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Machiavelli's innovation was treating politics as a <strong>physical system</strong> with
              structure as important as substance.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
