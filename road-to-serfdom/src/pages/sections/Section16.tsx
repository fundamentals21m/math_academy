import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The guiding principle, that a policy of freedom for the individual is
        the only truly progressive policy, remains as true to-day as it was in
        the nineteenth century."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — F.A. Hayek
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        In this brief but powerful conclusion, Hayek steps back from the detailed
        arguments of the preceding chapters to offer his final reflections. His
        purpose, he reminds us, has not been to sketch a detailed blueprint for
        society, but to issue a <strong className="text-amber-400">warning</strong>—and
        to point toward the principles that must guide us if we are to preserve
        freedom.
      </p>

      {/* Section 1: The Purpose of This Book */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Purpose of This Book</h2>

      <p className="my-4">
        The purpose of this book has not been to sketch a detailed programme of a
        desirable future order of society. If with regard to international affairs
        we have gone beyond its essentially <em>critical</em> task, it was because
        in this field we may soon be called upon to create a framework within which
        future growth may have to proceed for a long time to come.
      </p>

      <Callout type="note">
        <p>
          <strong>Not a Blueprint:</strong> It is at least doubtful whether at this
          stage a detailed blueprint of a desirable internal order of society would
          be of much use—or whether anyone is competent to furnish it. The important
          thing now is that we shall come to agree on <em>certain principles</em> and
          free ourselves from some of the errors which have governed us in the recent past.
        </p>
      </Callout>

      <p className="my-4">
        However distasteful such an admission may be, we must recognise that we had
        before this war once again reached a stage where it is more important to
        <strong className="text-amber-400"> clear away the obstacles</strong> with
        which human folly has encumbered our path and to release the creative energy
        of individuals than to devise further machinery for "guiding" and "directing"
        them.
      </p>

      {/* Section 2: The First Need */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The First Need</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Creating Conditions for Progress</h4>
        <p className="text-dark-300">
          The first need is to free ourselves of that worst form of contemporary
          obscurantism which tries to persuade us that what we have done in the
          recent past was all either wise or inevitable. <strong>We shall not grow
          wiser before we learn that much that we have done was very foolish.</strong>
        </p>
      </div>

      <p className="my-4">
        We need to create <em>conditions favourable to progress</em> rather than to
        "plan progress." The focus must be on removing obstacles and releasing
        individual creativity, not on constructing ever more elaborate machinery
        for central direction.
      </p>

      {/* Section 3: The Courage to Make a New Start */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Courage to Make a New Start</h2>

      <blockquote className="border-l-4 border-dark-600 pl-6 py-2 my-6 text-dark-400 italic">
        "If we are to build a better world we must have the courage to make a new
        start—even if that means some <em>reculer pour mieux sauter</em>."
      </blockquote>

      <p className="my-4">
        It is not those who believe in inevitable tendencies who show this courage,
        not those who preach a "New Order" which is no more than a projection of
        the tendencies of the last forty years, and who can think of nothing better
        than to imitate Hitler.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Irony of the "New Order":</strong> It is indeed those who cry
          loudest for the New Order who are most completely under the sway of the
          ideas which have created this war and most of the evils from which we suffer.
        </p>
      </Callout>

      {/* Section 4: The Young and Their Elders */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Young and Their Elders</h2>

      <p className="my-4">
        The young are right if they have little confidence in the ideas which rule
        most of their elders. But they are mistaken or misled when they believe that
        these are still the liberal ideas of the nineteenth century, which in fact
        the younger generation hardly knows.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What the Young See</h4>
          <p className="text-sm text-dark-300">
            The failures of the twentieth century—economic crises, wars, and the
            rise of totalitarianism—which they rightly reject.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">What They Misunderstand</h4>
          <p className="text-sm text-dark-300">
            These failures were not caused by liberalism but by its abandonment.
            The young hardly know the liberal ideas they think they're rejecting.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Our Grandfathers' Ideals</h4>
          <p className="text-sm text-dark-300">
            Though we cannot return to the reality of the 19th century, we have the
            opportunity to realise its ideals—and they were not mean.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Who Made the Mess</h4>
          <p className="text-sm text-dark-300">
            We have little right to feel superior to our grandfathers. It is we,
            the twentieth century, and not they, who have made a mess of things.
          </p>
        </Card>
      </CardGrid>

      {/* Section 5: The Lessons of Experience */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Lessons of Experience</h2>

      <p className="my-4">
        If they had not yet fully learnt what was necessary to create the world
        they wanted, the experience we have since gained ought to have equipped
        us better for the task.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-emerald-600/30 my-6">
        <h4 className="font-semibold text-emerald-400 mb-3">The Central Lesson</h4>
        <p className="text-dark-300 text-lg">
          "If in the first attempt to create a world of free men we have failed,
          <strong> we must try again</strong>."
        </p>
      </div>

      <p className="my-4">
        The guiding principle, that a policy of freedom for the individual is the
        only truly progressive policy, remains as true to-day as it was in the
        nineteenth century. This is not nostalgia for a vanished past, but
        recognition of an <strong className="text-amber-400">enduring truth</strong>.
      </p>

      {/* Section 6: Looking Back at the Journey */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Journey We Have Taken</h2>

      <p className="my-4">
        Throughout this book, we have traced the road that leads from the
        abandonment of liberal principles to totalitarianism. Let us recall the
        main stations on this journey:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">The Intellectual Roots</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">1.</span>
              <span>The abandonment of the liberal tradition that created Western prosperity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">2.</span>
              <span>The promise of a "new freedom" that confused freedom with power</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">3.</span>
              <span>The false claim that planning is made inevitable by modern conditions</span>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h3 className="text-lg font-semibold text-rose-400 mb-3">The Practical Consequences</h3>
          <ul className="text-dark-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400">4.</span>
              <span>Economic control that inevitably extends to control of all life</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">5.</span>
              <span>The selection of the worst to positions of power</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400">6.</span>
              <span>The destruction of truth, morality, and all independent institutions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 7: The Path Forward */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Path Forward</h2>

      <p className="my-4">
        But this book has also pointed toward the path forward—not a detailed
        blueprint, but the principles that must guide us:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Principles for a Free Society</h4>
        <ul className="text-dark-300 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The Rule of Law—known rules applied equally to all, rather than arbitrary commands</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Competition as the means of coordinating individual efforts without coercion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>A minimum of security for all, without destroying the incentives of a free market</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Federation as the means of international order that preserves individual liberty</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Small states and local government as the training ground for democracy</span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          <strong>The Goal:</strong> Neither an omnipotent super-state, nor a loose
          association of "free nations", but a <em>community of nations of free men</em>
          must be our goal.
        </p>
      </Callout>

      {/* Section 8: A Final Word */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Final Word</h2>

      <p className="my-4">
        Hayek wrote this book in 1944, amid the destruction of the Second World War,
        warning that the ideas which had brought totalitarianism to Germany were
        gaining ground in Britain and America. His warning was controversial then
        and remains contested today.
      </p>

      <p className="my-4">
        But whatever one's political views, the core argument deserves serious
        consideration: that the expansion of central planning, however well-intentioned,
        tends to undermine the foundations of a free society. The debate he initiated
        continues to shape our world.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl text-dark-300 italic">
        "We shall not grow wiser before we learn that much that we have done was
        very foolish."
      </blockquote>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              This book's purpose was <strong>essentially critical</strong>—to warn
              against dangerous tendencies, not to provide a detailed blueprint for society.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The first need is to <strong>free ourselves from the illusion</strong>
              that what we have done was either wise or inevitable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Those who cry loudest for a "New Order" are often most <strong>under
              the sway of the ideas</strong> that created the evils they oppose.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              The young are right to distrust their elders' ideas, but wrong to
              think these are <strong>liberal ideas</strong>—which they hardly know.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              We have little right to feel superior to our grandfathers. It is
              <strong> we, the twentieth century</strong>, who made a mess of things.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              If we failed in the first attempt to create a world of free men,
              <strong> we must try again</strong>. Freedom remains the only truly
              progressive policy.
            </span>
          </li>
        </ul>
      </div>

      {/* Course Complete */}
      <Callout type="success">
        <p>
          <strong>Course Complete:</strong> You have finished reading "The Road to
          Serfdom." Hayek's warning about the dangers of central planning and the
          importance of individual freedom continues to resonate. Whether you agree
          or disagree with his conclusions, engaging seriously with his arguments
          is essential for understanding the great debates of modern political economy.
        </p>
      </Callout>
    </LessonLayout>
  );
}
