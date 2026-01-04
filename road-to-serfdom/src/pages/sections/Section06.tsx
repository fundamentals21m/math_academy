import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The statesman who should attempt to direct private people in what manner
        they ought to employ their capitals, would not only load himself with a
        most unnecessary attention, but assume an authority which could safely be
        trusted to no council and senate whatever."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Adam Smith, quoted by Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this chapter, Hayek examines why democratic institutions are inherently
        incapable of carrying out comprehensive economic planning. The fundamental
        problem is that <strong className="text-amber-400">planning requires agreement
        on ends</strong>—but in a free society, such agreement does not exist. The
        attempt to plan regardless leads inevitably to the delegation of power to
        unaccountable bodies, and ultimately to dictatorship.
      </p>

      {/* Section 1: The Collectivist Demand */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Collectivist Demand</h2>

      <p className="my-4">
        The common features of all collectivist systems may be described as the
        <strong className="text-amber-400"> deliberate organisation of the labours
        of society for a definite social goal</strong>. That our present society
        lacks such "conscious" direction towards a single aim has always been one
        of the main complaints of socialist critics.
      </p>

      <p className="my-4">
        The various kinds of collectivism—communism, fascism, and others—differ
        between themselves in the nature of the goal towards which they want to
        direct society's efforts. But they all differ from liberalism in wanting
        to organise the <em>whole</em> of society for this unitary end, refusing
        to recognise autonomous spheres in which the ends of individuals are supreme.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Totalitarian Connection:</strong> In short, all forms of
          collectivism are totalitarian in the true sense of this new word—they
          represent the unexpected but nevertheless inseparable manifestations of
          what in theory we call collectivism.
        </p>
      </Callout>

      {/* Section 2: The Problem of the "Common Good" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Problem of the "Common Good"</h2>

      <p className="my-4">
        The "social goal" for which society is to be organised is usually vaguely
        described as the <strong className="text-amber-400">"common good"</strong>,
        the "general welfare", or the "general interest". It does not need much
        reflection to see that these terms have no sufficiently definite meaning
        to determine a particular course of action.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Why "Common Good" Fails as a Guide</h4>
        <p className="text-dark-300 mb-4">
          The welfare and happiness of millions cannot be measured on a single scale
          of less and more. The welfare of a people, like the happiness of a man,
          depends on a great many things that can be provided in an infinite variety
          of combinations.
        </p>
        <p className="text-dark-400 text-sm">
          It cannot be adequately expressed as a single end, but only as a
          <strong> hierarchy of ends</strong>, a comprehensive scale of values in
          which every need of every person is given its place.
        </p>
      </div>

      <p className="my-4">
        To direct all our activities according to a single plan presupposes that
        every one of our needs is given its rank in an order of values complete
        enough to decide between all the different courses the planner has to choose.
        It presupposes, in short, the existence of a <strong className="text-amber-400">
        complete ethical code</strong> in which all different human values are
        allotted their due place.
      </p>

      {/* Section 3: The Incomplete Moral Code */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Incomplete Moral Code</h2>

      <p className="my-4">
        The essential point is that <strong className="text-amber-400">no such
        complete ethical code exists</strong>. We are not in the habit of thinking
        of moral codes as more or less complete. The fact that we constantly choose
        between different values without a social code prescribing how we ought
        to choose does not surprise us—but this is precisely because in our free
        society there has been no occasion to develop such common views.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">In a Free Society</h4>
          <p className="text-sm text-dark-300">
            There is neither occasion nor reason for people to develop common views
            about what should be done in situations requiring trade-offs between
            competing values.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">In a Planned Society</h4>
          <p className="text-sm text-dark-300">
            Where all means are property of society and used according to a unitary
            plan, a "social" view about what ought to be done must guide all
            decisions.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Revelation</h4>
          <p className="text-sm text-dark-300">
            In such a world we should soon find that our moral code is full of
            gaps—we simply have no agreed answers to most of the questions that
            arise.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Historical Trend</h4>
          <p className="text-sm text-dark-300">
            The growth of civilisation has been accompanied by a steady <em>diminution</em>
            of the sphere bound by fixed rules. Planning would reverse this trend.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>From Primitive to Free:</strong> From the primitive man bound by
          elaborate ritual in almost every daily activity, morals have more and more
          tended to become merely limits circumscribing the sphere within which the
          individual could behave as he liked. A comprehensive economic plan would
          mean a complete reversal of this tendency.
        </p>
      </Callout>

      {/* Section 4: The Philosophy of Individualism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Philosophy of Individualism</h2>

      <p className="my-4">
        Not only do we not possess an all-inclusive scale of values: it would be
        <strong className="text-amber-400"> impossible for any mind</strong> to
        comprehend the infinite variety of different needs of different people
        which compete for available resources, and to attach a definite weight
        to each.
      </p>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "This is the fundamental fact on which the whole philosophy of individualism
        is based. It does not assume, as is often asserted, that man is egoistic
        or selfish, or ought to be. It merely starts from the indisputable fact
        that the limits of our powers of imagination make it impossible to include
        in our scale of values more than a sector of the needs of the whole society."
      </blockquote>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-emerald-600/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">What Individualism Recognises</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Only partial scales of values exist in individual minds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>These scales are inevitably different and often inconsistent</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Individuals should follow their own values within limits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>The individual is the ultimate judge of his ends</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">What Individualism Does NOT Assume</h3>
          <ul className="text-dark-400 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>That man is egoistic or selfish</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>That man ought to be selfish</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>That there are no social ends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">✗</span>
              <span>That people should not combine for common purposes</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 5: Common Action and Its Limits */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Limits of Common Action</h2>

      <p className="my-4">
        The individualist view does not exclude the recognition of social ends—or
        rather, of a <strong className="text-amber-400">coincidence of individual
        ends</strong> which makes it advisable for men to combine for their pursuit.
        But it limits such common action to the instances where individual views
        actually coincide.
      </p>

      <p className="my-4">
        What are called "social ends" are for the individualist merely identical
        ends of many individuals—or ends to the achievement of which individuals
        are willing to contribute in return for assistance they receive in satisfying
        their own desires. People are most likely to agree on common action where
        the common end is not an <em>ultimate</em> end, but a <em>means</em> capable
        of serving a great variety of purposes.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Probability of Agreement</h4>
        <p className="text-dark-300 mb-4">
          The probability that people will agree on a particular course of action
          necessarily <strong>decreases</strong> as the scope of such action extends.
        </p>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Certain state functions will have practical <strong>unanimity</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Others will have agreement of a <strong>substantial majority</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Eventually we reach fields where there will be <strong>as many views as people</strong></span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Domination Effect:</strong> Once the communal sector, in which
          the state controls all the means, exceeds a certain proportion of the whole,
          the effects of its actions dominate the entire system. Where central and
          local authorities directly control more than half of national income, they
          control indirectly almost the whole economic life of the nation.
        </p>
      </Callout>

      {/* Section 6: The Failure of Democratic Planning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">When Democracy Attempts Planning</h2>

      <p className="my-4">
        What must be the consequences when democracy embarks upon a course of
        planning which in its execution requires <strong className="text-amber-400">
        more agreement than in fact exists</strong>?
      </p>

      <p className="my-4">
        People may agree on adopting a system of directed economy because they
        have been convinced it will produce great prosperity. In discussions
        leading to the decision, the goal will have been described by some term
        like "common welfare" which only conceals the <em>absence of real agreement</em>
        on the ends of planning.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Journey Without a Destination</h4>
        <p className="text-dark-300 mb-4">
          The effect of people agreeing that there must be central planning, without
          agreeing on the ends, will be rather as if a group of people were to commit
          themselves to take a journey together <strong>without agreeing where they
          want to go</strong>.
        </p>
        <p className="text-dark-400 text-sm">
          The result: they may all have to make a journey which most of them do not
          want at all.
        </p>
      </div>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-dark-300 italic">
        "That planning creates a situation in which it is necessary for us to agree
        on a much larger number of topics than we have been used to, and that in a
        planned system we cannot confine collective action to the tasks on which we
        can agree, but are forced to produce agreement on everything in order that
        any action can be taken at all, is one of the features which contribute more
        than most to determining the character of a planned system."
      </blockquote>

      {/* Section 7: Parliament as "Talking Shop" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Decline of Parliament</h2>

      <p className="my-4">
        It may have been the unanimously expressed will of the people that parliament
        should prepare a comprehensive economic plan, yet neither the people nor its
        representatives need therefore be able to agree on any <em>particular</em> plan.
      </p>

      <p className="my-4">
        The inability of democratic assemblies to carry out what seems to be a clear
        mandate will inevitably cause <strong className="text-amber-400">dissatisfaction
        with democratic institutions</strong>. Parliaments come to be regarded as
        ineffective "talking shops", unable or incompetent to carry out the tasks
        for which they have been chosen.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Fatal Conclusion</h4>
        <p className="text-dark-300">
          The conviction grows that if efficient planning is to be done, the direction
          must be <strong>"taken out of politics"</strong> and placed in the hands of
          experts, permanent officials, or independent autonomous bodies.
        </p>
      </div>

      <Callout type="info">
        <p>
          <strong>The Webbs' Complaint:</strong> This difficulty is well known to
          socialists. It will soon be half a century since the Webbs began to complain
          of the "increased incapacity of the House of Commons to cope with its work."
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              All collectivist systems—communism, fascism, socialism—are
              <strong> totalitarian</strong> in that they refuse to recognise
              autonomous spheres where individual ends are supreme.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The <strong>"common good"</strong> has no definite meaning that can
              guide action—it conceals the absence of agreement rather than
              expressing a real consensus.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>No complete ethical code exists</strong> that could guide all
              the decisions a comprehensive plan would require.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Individualism</strong> is based not on selfishness but on the
              recognition that no mind can comprehend all the needs of all people.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The probability of agreement <strong>decreases</strong> as the scope
              of collective action extends—planning forces us to "agree" on
              everything.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              When democratic parliaments cannot agree on a plan, the demand grows
              to <strong>delegate power</strong> to experts and autonomous bodies
              beyond democratic control.
            </span>
          </li>
        </ul>
      </div>

      {/* Looking Ahead */}
      <Callout type="success">
        <p>
          <strong>Next chapter:</strong> In "Planning and the Rule of Law," Hayek
          explains the fundamental distinction between general rules and specific
          commands—and why planning inevitably requires the latter, replacing the
          rule of law with arbitrary power.
        </p>
      </Callout>
    </LessonLayout>
  );
}
