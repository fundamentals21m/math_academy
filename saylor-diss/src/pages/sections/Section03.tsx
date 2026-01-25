import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">System Dynamics</h2>

      <p className="my-4">
        <strong className="text-indigo-400">System dynamics</strong> is a modeling methodology
        concerned with the complexities of non-linear behavior which are present in most social
        systems. It has its origins at MIT during the late 1950's, developed by Jay W. Forrester,
        an electrical engineer concerned with applying the power of modern computing techniques
        and cybernetic theory to the pressing social issues of the day.
      </p>

      {/* What Makes SD Different */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Beyond Linear Analysis</h3>

      <p className="my-4">
        System dynamics differs from more conventional modeling methodologies in the scope of the
        systems it attempts to describe. Most engineering analyses start with some sort of linear
        or analytical "first-cut" description of the process. For many physical systems, this
        initial "back-of-the-envelope" calculation yields reasonably accurate results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Traditional Engineering</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Linear "first-cut" descriptions</li>
            <li>• Use preliminary data as-is</li>
            <li>• Build complex computer models later</li>
            <li>• Works for many physical systems</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-lg font-semibold text-indigo-400 mb-2">System Dynamics</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>• Non-linear from the start</li>
            <li>• Models feedback loops explicitly</li>
            <li>• Uses differential equations</li>
            <li>• Designed for social complexity</li>
          </ul>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Problem with Linear Models:</strong> Analytical solutions to social problems
          are not complex enough to capture the effects of the major variables. In order to obtain
          a reasonable understanding about how social systems behave, we must start with a much
          more complex model.
        </p>
      </Callout>

      {/* Higher-Order Systems */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Higher-Order Differential Equations</h3>

      <p className="my-4">
        System dynamics allows us to model complex phenomena using systems of higher-order non-linear
        differential equations. Once linkages are established between the major variables, a digital
        computer is used to iterate a solution.
      </p>

      <Card>
        <h4 className="font-semibold text-indigo-400 mb-2">The Power of Simulation</h4>
        <p className="text-sm text-dark-300">
          Unlike analytical methods that require closed-form solutions, system dynamics uses
          numerical simulation. This allows the modeler to capture feedback loops, time delays,
          non-linear relationships, and accumulation effects that would be impossible to solve
          analytically.
        </p>
      </Card>

      {/* Core Concepts */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Core Concepts</h3>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Stocks (Levels)</h4>
          <p className="text-sm text-dark-300">
            Accumulations in the system—things that can be measured at a point in time. Examples:
            population, capital, discontent, influence.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Flows (Rates)</h4>
          <p className="text-sm text-dark-300">
            Changes to stocks over time—birth rate, investment rate, protest rate. Flows fill or
            drain stocks.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Feedback Loops</h4>
          <p className="text-sm text-dark-300">
            Circular causal chains where system outputs influence inputs. Can be reinforcing
            (positive) or balancing (negative).
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Time Delays</h4>
          <p className="text-sm text-dark-300">
            Gaps between cause and effect. Delays often cause oscillation and instability in
            systems.
          </p>
        </Card>
      </CardGrid>

      {/* Non-Intuitive Behavior */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Non-Intuitive Behavior</h3>

      <p className="my-4">
        System dynamics has yielded a large volume of information concerning the existence of
        non-intuitive behavior within very complex systems. (Forrester 1961) It is often found
        that locally rational policies can lead to globally dysfunctional behavior.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "...when a problem arises either from within a republic or outside it, one brought about
        either by internal or external reasons, one that has become so great that it begins to make
        everyone afraid, the safest policy is to delay dealing with it rather than trying to do
        away with it, because those who try to do away with it almost always increase its strength
        and accelerate the harm which they feared might come from it."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 241</footer>
      </blockquote>

      <Callout type="note">
        <p>
          <strong>Counter-Intuitive Results:</strong> Within many systems, the structure of
          interactions is so complex that it is extremely difficult for the policy maker to
          determine the proper course of action through intuition alone. There are many examples
          of problems where the obvious solution produces the opposite of the response intended,
          making the problem much worse.
        </p>
      </Callout>

      {/* STELLA Software */}
      <h3 className="text-xl font-semibold mt-8 mb-4">STELLA: The Modeling Tool</h3>

      <p className="my-4">
        Saylor's thesis uses <strong className="text-indigo-400">STELLA</strong> (Structural
        Thinking, Experiential Learning Laboratory with Animation), a system dynamics modeling
        software developed at MIT. STELLA provides a visual interface for building stock-and-flow
        diagrams and running simulations.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-3">Why STELLA?</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Visual diagramming of system structure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Automatic equation generation from diagrams</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Real-time simulation and graphing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Sensitivity analysis and scenario testing</span>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              <strong>System dynamics</strong> was developed at MIT to model complex social systems
              that resist simple analytical solutions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              The methodology uses <strong>stocks, flows, and feedback loops</strong> to represent
              accumulation, change, and circular causality.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Complex systems often exhibit <strong>counter-intuitive behavior</strong>—obvious
              solutions may backfire.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              <strong>STELLA software</strong> provides the computational platform for running
              the political system model.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
