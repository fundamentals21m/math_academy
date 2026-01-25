import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">Machiavelli's Assumptions</h2>

      <p className="my-4">
        Before building a mathematical model of Machiavelli's political system, we must first
        understand the philosophical assumptions underlying his worldview. These assumptions
        form the foundation upon which the entire model rests.
      </p>

      {/* No Absolutes */}
      <h3 className="text-xl font-semibold mt-8 mb-4">No Absolute Truth</h3>

      <p className="my-4">
        Machiavelli disregarded absolutes. Ideals such as truth, beauty, right, and God were of
        little use because of man's imperfection. There is no way that any man could possibly know
        the absolute truth. As a result, much more weight was placed upon <strong className="text-indigo-400">appearances</strong>.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "If an evil man acts like a saint all of his life, how can you tell the difference between
        the two? In fact, what is the difference between the two?"
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Saylor's interpretation of Machiavelli</footer>
      </blockquote>

      <p className="my-4">
        For Machiavelli, the ends justify the means—not because the means are unimportant, but
        because we have no idea of what the best means are. In an imperfect world, surely it is
        the least objectionable.
      </p>

      {/* Floating Values */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Societies with Floating Values</h3>

      <p className="my-4">
        Because there are no absolutes, man is cast adrift. Machiavelli envisions societies with
        <strong className="text-indigo-400"> floating values</strong>. The best solution is thus
        his own realistic interpretation of the Aristotelian Mean, not some beautiful synthesis
        (man did not have the capacity for that), but rather some acceptable compromise.
      </p>

      <Card>
        <h4 className="font-semibold text-indigo-400 mb-2">The Ideal Political System</h4>
        <p className="text-sm text-dark-300">
          The ideal political system—note that this is a very different definition of ideal from
          that of the Greeks—is composed of a number of different actors, all with their own biases
          and agendas. By interacting and compromising, an average policy is settled upon, which
          results in the greatest common good. However, there is no harmonious happy society at
          the end of Machiavelli's rainbow. <strong>Politics is compromise, not consensus.</strong>
        </p>
      </Card>

      {/* Bounded Rationality */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Bounded Rationality</h3>

      <p className="my-4">
        Machiavelli makes no attempt to solve political problems in the way an analytic scientist
        might. He does not believe there is a solution. This marks him as a man ahead of his time.
        He demonstrates an understanding of human <strong className="text-indigo-400">cognitive limitations</strong> (i.e.,
        bounded rationality) centuries before the term came into vogue.
      </p>

      <Callout type="info">
        <p>
          <strong>Satisficing vs. Optimizing:</strong> By accepting the inevitable presence of
          non-idealities and non-deterministic processes, Machiavelli is able to abandon the
          impossible task of optimizing and begin the much more manageable one of <em>satisficing</em>.
          Machiavelli guarantees happiness for no one. He simply asks the question, assuming some
          degree of satisfaction is obtainable in this world, which system of political practices
          is most likely to satisfy the most people?
        </p>
      </Callout>

      {/* Assume Evil */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Assume Men Are Evil</h3>

      <p className="my-4">
        The keystone of Machiavelli's philosophical foundation is his assumption about human nature:
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...it is necessary for anyone who organizes a republic and institutes laws to take for
        granted that all men are evil and that they will always express the wickedness of their
        spirit whenever they have the opportunity."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 181</footer>
      </blockquote>

      <p className="my-4">
        To many, this might appear to be a pessimistic view of the world, unwarranted given the
        fact that the majority of people we interact with are not noticeably "wicked." However,
        in this assumption, Machiavelli once more demonstrates his intuitive grasp of probabilistic
        system behavior.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Why Assume Evil?</h4>
          <p className="text-sm text-dark-300">
            Given a system which assumes virtue, any singular evil action is likely to propagate,
            corrupting the entire system. Disincentives quickly develop to discourage the virtuous,
            and the just individual is perversely punished for not exploiting his fellow man.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">The Robust Alternative</h4>
          <p className="text-sm text-dark-300">
            If we instead assume evil behavior, then the society is able to monitor and check
            exploitation, punishing the occasional evil individual and preventing a breakdown of
            social morality. This is the most robust condition.
          </p>
        </Card>
      </CardGrid>

      {/* World of Constant Change */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A World of Constant Change</h3>

      <p className="my-4">
        Machiavelli's world is one of constant change. Few processes lead to ideal harmony and
        moderation.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "When the Roman people had recovered their liberty and had returned to their former level
        of power...it seemed reasonable to assume that Rome would be quiet for a time, nevertheless,
        experience shows the contrary, for every day new riots and disputes arose."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli on Rome (paraphrased)</footer>
      </blockquote>

      {/* Summary of Assumptions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary of Key Assumptions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-indigo-400 mb-2">Epistemological</h4>
            <ul className="text-dark-300 text-sm space-y-1">
              <li>• No absolute truths exist</li>
              <li>• Appearances matter more than essences</li>
              <li>• Human reason is bounded</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-400 mb-2">Behavioral</h4>
            <ul className="text-dark-300 text-sm space-y-1">
              <li>• Assume men will act selfishly</li>
              <li>• Values are relative and floating</li>
              <li>• Change is constant and inevitable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              Machiavelli rejected <strong>absolute truth</strong>—focusing instead on observable
              outcomes and practical results.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              His concept of <strong>floating values</strong> recognizes that societies must
              continuously negotiate and compromise rather than find perfect solutions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              <strong>Assuming evil</strong> creates a robust system that can handle occasional
              bad actors without systemic collapse.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Politics is <strong>compromise, not consensus</strong>—there is no happy harmonious
              endpoint.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
