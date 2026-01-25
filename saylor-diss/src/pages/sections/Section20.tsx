import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-semibold mb-4">Areas for Further Study</h2>

      <p className="my-4">
        While this model represents a significant step toward quantifying Machiavelli's political
        insights, it necessarily leaves much unexplored. This final section discusses the
        <strong className="text-indigo-400"> limitations</strong> of the current model and suggests
        directions for future research.
      </p>

      {/* Model Limitations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Limitations of the Model</h3>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No Population Dynamics</h4>
          <p className="text-sm text-dark-300">
            The model assumes constant population and class ratios. Real political systems are
            affected by demographic change—birth rates, migration, urbanization.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No Technological Change</h4>
          <p className="text-sm text-dark-300">
            Production technology is held constant. In reality, technological change affects
            productivity, economic distribution, and political power.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No International Relations</h4>
          <p className="text-sm text-dark-300">
            The city-state is modeled in isolation. Real polities interact with neighbors—trade,
            war, alliance, diplomacy all affect internal politics.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Simplified Class Structure</h4>
          <p className="text-sm text-dark-300">
            Only two classes (plus executive) are modeled. Real societies have more complex
            stratification—merchants, clergy, military, rural vs. urban.
          </p>
        </Card>
      </CardGrid>

      {/* Possible Extensions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Possible Extensions</h3>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">1. Multiple City-States</h4>
          <p className="text-dark-300 text-sm">
            Model interactions between neighboring polities—how does competition or cooperation
            affect internal political dynamics? Can external threats stabilize internal conflict?
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">2. Ideological Factors</h4>
          <p className="text-dark-300 text-sm">
            Include religion, nationalism, or political ideology as factors affecting popular
            expectations and willingness to accept sacrifice.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">3. Information and Propaganda</h4>
          <p className="text-dark-300 text-sm">
            Model the role of information asymmetry and propaganda in shaping popular perceptions
            of government policy and economic conditions.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-indigo-400 mb-2">4. Long-Run Dynamics</h4>
          <p className="text-dark-300 text-sm">
            Extend the time horizon to include demographic transitions, institutional evolution,
            and the rise and fall of political systems over centuries.
          </p>
        </div>
      </div>

      {/* Broader Applications */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Broader Applications</h3>

      <p className="my-4">
        While developed for Renaissance Italian city-states, the model's core insights may apply
        more broadly:
      </p>

      <Callout type="info">
        <p>
          <strong>Modern Relevance:</strong> The dynamics of factional conflict, executive power,
          policy resistance, and the J-curve of reform appear in many modern contexts—developing
          nations attempting democratization, established democracies facing populist movements,
          organizations undergoing restructuring.
        </p>
      </Callout>

      <p className="my-4">
        The methodology itself—applying system dynamics to qualitative political theory—could be
        extended to other thinkers: Hobbes, Locke, Montesquieu, Marx. Each offers a model of
        political interaction that could be tested for mathematical consistency.
      </p>

      {/* Conclusion */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Concluding Thoughts</h3>

      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-lg italic text-dark-300">
        "Anyone who studies present and ancient affairs will easily see how in all cities and all
        peoples there still exist, and have always existed, the same desires and passions."
        <footer className="text-sm text-dark-500 mt-2 not-italic">— Machiavelli, Discourses, 252</footer>
      </blockquote>

      <p className="my-4">
        Machiavelli's core insight remains valid: political dynamics arise from the interaction of
        competing interests within structural constraints. By modeling these interactions
        mathematically, we gain not certainty but <strong className="text-indigo-400">disciplined
        intuition</strong>—a systematic way to explore the implications of our assumptions and
        test our understanding of political systems.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">What We've Learned</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Machiavelli's political philosophy is amenable to rigorous mathematical modeling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>System dynamics reveals counter-intuitive dynamics in political systems</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Stability arises from friction between competing factions, not harmony</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Well-intentioned reforms can backfire through complex feedback mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Political wisdom requires understanding system structure, not just good intentions</span>
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
              The model has <strong>limitations</strong>: no population dynamics, technology
              change, or international relations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              <strong>Extensions</strong> could include multiple polities, ideology, information
              asymmetry, and long-run dynamics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              The <strong>methodology</strong> could be applied to other political theorists and
              modern contexts.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              Machiavelli's core insight endures: <strong>structure matters</strong>—political
              wisdom requires understanding system dynamics, not just good intentions.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          <strong>Congratulations!</strong> You've completed this course on Michael Saylor's
          dissertation. You now have a foundation in system dynamics applied to political theory,
          understanding why political systems behave as they do and why well-intentioned reforms
          so often fail.
        </p>
      </Callout>
    </LessonLayout>
  );
}
