import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">The Role of the Executive</h2>

      <p className="my-4">
        As has been mentioned above, the role of the executive is to implement those laws mandated
        by the legislature. It is his task to merge the <strong className="text-indigo-400">ideal</strong> with
        the <strong className="text-indigo-400">real</strong>. The need for an executive branch to
        deal with issues requiring decisive action was recognized by the Romans:
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Of all Roman institutions, this one (allowing for the creation of the dictatorship) truly
        deserves to be considered and numbered among those which were the cause of the greatness
        of so strong an empire: for without such an institution cities find a solution to extraordinary
        problems only with difficulty. Since the operation of normal institutions in republics is
        slow (neither a council nor any magistrate can undertake anything alone; in many cases
        they must consult with one another and, in harmonizing their opinions, time is spent),
        their remedies are very dangerous when they have to provide solutions to a problem which
        cannot wait."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 244</footer>
      </blockquote>

      {/* Bending the Laws */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Executive's License to "Bend" Laws</h3>

      <p className="my-4">
        As Machiavelli makes clear in the following passage, the role of the executive includes
        much more than simply carrying out instructions. In times of crisis, the laws may not be
        adequate—then it is the executive's duty to "bend" them.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "When a republic does not have such a procedure, it must either come to ruin by following
        its laws or ignore the laws in order to avoid ruin; yet in a republic it is not good for
        something to happen which requires action outside of the laws. While extraordinary measures
        may be beneficial at the moment, the example is nevertheless harmful, of if one forms the
        habit of breaking laws for a good reason, later on they can be broken for bad reasons under
        the same pretext of doing good."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 245</footer>
      </blockquote>

      <Callout type="warning">
        <p>
          <strong>The Slippery Slope:</strong> By granting the executive official license to "bend"
          the laws, the state institutionalizes a process which is physically unavoidable, maintaining
          some control over it. But this creates its own dangers—the executive may abuse this power.
        </p>
      </Callout>

      {/* Executive Power Variable */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Executive Power: 0 to 1</h3>

      <p className="my-4">
        Government policy is determined by averaging the law and executive desires, where executive
        desires are weighted by <strong className="text-indigo-400">Executive Power</strong>.
        Executive Power reflects the amount of influence the executive has over the rest of the
        government and ranges from 0 to 1.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Executive Power Scale</h4>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">0</p>
            <p className="text-dark-400 text-sm">Law Implemented Exactly</p>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 mx-4 rounded"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-400">1</p>
            <p className="text-dark-400 text-sm">Complete Dictatorship</p>
          </div>
        </div>
        <p className="text-dark-300 text-sm">
          If Executive Power = 0, then the law is implemented exactly as written, with no executive
          input. If Executive Power = 1, then the executive is a dictator, having complete control
          over government policy.
        </p>
      </div>

      {/* Executive Bias */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Executive Bias in Policy</h3>

      <p className="my-4">
        Unfortunately, an inevitable result of this practice is that government policies are biased
        by the desires of the executive. Executive decisions are made under uncertainty, thus there
        are two strong mechanisms to encourage this bias:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Psychological Bias</h4>
          <p className="text-sm text-dark-300">
            When a choice has to be made between two marginal alternatives, the executive is likely
            to choose the one least objectionable to his psyche. Decisions naturally tend toward
            his preferences.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-red-400 mb-2">No Check on Power</h4>
          <p className="text-sm text-dark-300">
            Because there is no way to arrive at a rational decision for most complex issues without
            incorporating assumptions, there is no way for opponents to prove wrongdoing on the
            part of the executive—there is no check on his power.
          </p>
        </Card>
      </CardGrid>

      {/* Executive as Stabilizer */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Executive as Stabilizer</h3>

      <p className="my-4">
        Under normal conditions, the executive acts as a natural stabilizer. When some unforeseen
        event causes economic distribution to swing too far in one direction, his influence upon
        the actual government policy causes this extreme to be mitigated.
      </p>

      <p className="my-4">
        Thus, the presence of a strong executive serves to damp the system (assuming his desires
        lie in between those of the aristocrats and the executive). If we consider the extreme case,
        when Executive Power is equal to 1 (a Tyranny), neither the popular nor the aristocratic
        legislative input can have any effect on the government policy making process. Thus,
        oscillations such as those we see above are impossible.
      </p>

      <Callout type="note">
        <p>
          <strong>Trade-off:</strong> A strong executive provides stability but at the cost of
          responsiveness to factional interests. A weak executive allows more democratic input
          but risks oscillation and instability.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              The executive's role is to <strong>bridge ideal laws with real constraints</strong>,
              including the power to "bend" laws in crisis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Executive Power</strong> ranges from 0 (pure law implementation) to 1
              (complete dictatorship).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Executive decisions are inevitably <strong>biased by personal preferences</strong>,
              and there's no way to check this bias.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              A strong executive provides <strong>stability</strong> but reduces responsiveness;
              a weak executive allows democracy but risks oscillation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
