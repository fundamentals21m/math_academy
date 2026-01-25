import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Dissertation structure overview
const dissertationStructure = [
  { chapter: 1, title: 'Political Theory and System Theory', description: 'Introduction to political philosophy and system dynamics methodology' },
  { chapter: 2, title: "Machiavelli's Conception of the State", description: 'Philosophical foundations and model overview' },
  { chapter: 3, title: 'Model Description', description: 'Detailed description of the political system model components' },
  { chapter: 4, title: 'Findings', description: 'Simulation results and policy analysis' },
  { chapter: 5, title: 'Conclusion', description: 'General system tendencies and areas for further study' },
];

// Key concepts explorer
function KeyConceptsExplorer() {
  const [activeConcept, setActiveConcept] = useState(0);

  const concepts = [
    {
      term: 'System Dynamics',
      definition: 'A modeling methodology for understanding complex systems through feedback loops, stocks, and flows.',
      insight: 'Developed at MIT by Jay Forrester in the 1950s, it allows simulation of non-linear social systems.',
    },
    {
      term: 'Feedback Loop',
      definition: 'A circular causal chain where outputs of a system influence its inputs, creating self-reinforcing or self-correcting behavior.',
      insight: 'Machiavelli recognized that political systems exhibit both stabilizing (negative) and destabilizing (positive) feedback.',
    },
    {
      term: 'Political Equilibrium',
      definition: 'A state where competing political forces balance each other, resulting in stable governance.',
      insight: 'The model explores how equilibrium can be maintained or disrupted through various policy interventions.',
    },
    {
      term: 'Executive Power',
      definition: 'The ability of the ruler to implement laws and influence policy outcomes beyond what legislation mandates.',
      insight: 'Saylor models executive power as a continuous variable from 0 (law implemented exactly) to 1 (complete dictatorship).',
    },
    {
      term: 'Social Discontent',
      definition: 'The gap between what political actors desire and what they actually receive from the political system.',
      insight: 'Discontent drives political participation, protest, and potentially revolution when it exceeds thresholds.',
    },
  ];

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold mb-4 text-indigo-400">Key Concepts</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {concepts.map((concept, i) => (
          <button
            key={i}
            onClick={() => setActiveConcept(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeConcept === i
                ? 'bg-indigo-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {concept.term}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        <h5 className="font-semibold text-indigo-400 mb-2">{concepts[activeConcept].term}</h5>
        <p className="text-dark-200 mb-3">{concepts[activeConcept].definition}</p>
        <p className="text-dark-400 text-sm italic">{concepts[activeConcept].insight}</p>
      </div>
    </div>
  );
}

// Dissertation structure visualization
function DissertationStructure() {
  return (
    <div className="space-y-3 my-6">
      {dissertationStructure.map(({ chapter, title, description }) => (
        <div key={chapter} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-indigo-600/50 transition-colors">
          <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-sm shrink-0">
            {chapter}
          </span>
          <div>
            <p className="font-semibold text-dark-100">{title}</p>
            <p className="text-sm text-dark-400 mt-1">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Anyone who studies present and ancient affairs will easily see how in all cities
        and all peoples there still exist, and have always existed, the same desires and passions."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Niccolo Machiavelli, Discourses on Livy
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to <em>A Machiavellian Interpretation of Political Dynamics</em>, Michael Saylor's
        1987 MIT thesis that applies modern <strong className="text-indigo-400">system dynamics</strong> methodology
        to model Niccolo Machiavelli's political philosophy. This groundbreaking work constructs a mathematical
        model of a generic Renaissance Italian city-state using the STELLA simulation software.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> We'll work through all five chapters of Saylor's dissertation,
          exploring his systematic development of a political dynamics model from Machiavelli's writings.
          Each section includes key concepts, model descriptions, and simulation findings.
        </p>
      </Callout>

      {/* Abstract */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Abstract</h2>

      <p className="my-4">
        A mathematical model of the political and economic interactions of a generic Renaissance
        Italian city-state was constructed. The modeling methodology was <strong className="text-indigo-400">system dynamics</strong> and
        the simulation software utilized was STELLA. The substantive material focused on Machiavelli's
        <em> Discourses</em>. Machiavelli's writings have proven to be very rich in their description
        of general system theory and thus are readily modeled.
      </p>

      <p className="my-4">
        First, a brief overview of pertinent political philosophy and system theory is presented.
        This is followed by a discussion of Machiavelli's political philosophy in particular.
        Next the model structure is presented in a moderately detailed form.
      </p>

      <p className="my-4">
        Findings include a discussion of executive policies, effects of exogenous supply shocks on
        political stability, analysis of policy prospects for executives of varying competence, and
        discussion of the implications of corruption for the policy maker. Certain unexpected behavior
        modes are explained and supported with empirical evidence.
      </p>

      {/* Why System Dynamics? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why System Dynamics?</h2>

      <p className="my-4">
        Machiavelli's writings offer a model of political interaction particularly amenable to
        description using the system dynamics methodology. Perhaps what makes him most unique in
        his quest is his envisionment of man's political interaction as a <strong className="text-indigo-400">physical system</strong>,
        where structure can be just as important as substance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-indigo-400 mb-2">Traditional Political Analysis</h3>
          <p className="text-dark-300 text-sm">Linear, cause-and-effect reasoning</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>* Focuses on individual events</li>
            <li>* Assumes predictable outcomes</li>
            <li>* Static equilibrium models</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-indigo-400 mb-2">System Dynamics Approach</h3>
          <p className="text-dark-300 text-sm">Non-linear feedback analysis</p>
          <ul className="text-dark-400 text-sm mt-2 space-y-1">
            <li>* Models feedback loops</li>
            <li>* Captures emergent behavior</li>
            <li>* Dynamic equilibrium analysis</li>
          </ul>
        </div>
      </div>

      {/* The Three Factions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Political System Model</h2>

      <p className="my-4">
        The model revolves around the aspirations of three political factions: the <strong className="text-indigo-400">populace</strong>,
        the <strong className="text-indigo-400">aristocracy</strong>, and the <strong className="text-indigo-400">executive</strong>.
        These factions have different desires regarding freedom and economic welfare:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">The Populace</h4>
          <p className="text-sm text-dark-300">
            Desires <strong>high</strong> levels of freedom and economic welfare.
            Expresses discontent through protest and potentially rebellion.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">The Aristocracy</h4>
          <p className="text-sm text-dark-300">
            Desires <strong>low</strong> popular freedom (to maintain privilege).
            Influences legislation through wealth and traditional power.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">The Executive</h4>
          <p className="text-sm text-dark-300">
            Desires <strong>moderate</strong> conditions. Implements laws and
            bridges the gap between ideal legislation and real constraints.
          </p>
        </Card>
      </CardGrid>

      <Callout type="note">
        <p>
          <strong>Key insight:</strong> Machiavelli holds that it is <em>friction</em> between differing
          factions that guarantees the health of the state. In every republic there are two different
          inclinations: that of the people and that of the upper class. All laws which are made in
          favor of liberty are born of the conflict between the two.
        </p>
      </Callout>

      {/* Dissertation Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Course Structure</h2>

      <p className="my-4">
        This course follows the structure of Saylor's dissertation, organized into five chapters
        that build from philosophical foundations to detailed model analysis:
      </p>

      <DissertationStructure />

      {/* Key Concepts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Concepts to Know</h2>

      <p className="mb-4">
        Before diving into the chapters, familiarize yourself with these foundational
        terms used throughout the dissertation:
      </p>

      <KeyConceptsExplorer />

      {/* About Michael Saylor */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About Michael Saylor</h2>

      <p className="my-4">
        Michael Jerry Saylor submitted this thesis to the MIT Department of Humanities in May 1987,
        in partial fulfillment of the requirements for a Bachelor of Science in Humanities and Engineering.
        His thesis tutor was John D. Sterman, Associate Professor of Management, a leading figure in
        system dynamics.
      </p>

      <p className="my-4">
        Saylor would later go on to found MicroStrategy in 1989 and become known as a prominent
        advocate for Bitcoin adoption. This early work demonstrates his systematic approach to
        understanding complex systems—a theme that would continue throughout his career.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-indigo-400">1987</p>
          <p className="text-dark-300 text-sm mt-1">MIT Thesis completed</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-indigo-400">147</p>
          <p className="text-dark-300 text-sm mt-1">Pages of analysis</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-indigo-400">35</p>
          <p className="text-dark-300 text-sm mt-1">Years of simulation</p>
        </div>
      </div>

      {/* Why Read This */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Study This Thesis?</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Interdisciplinary Approach</h4>
          <p className="text-sm text-dark-300">
            Combines political philosophy, economics, and computational modeling
            in a rigorous framework.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Timeless Insights</h4>
          <p className="text-sm text-dark-300">
            Machiavelli's observations about power, reform, and stability
            remain relevant five centuries later.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Quantitative Analysis</h4>
          <p className="text-sm text-dark-300">
            Transforms qualitative political theory into testable,
            mathematical propositions.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-indigo-400 mb-2">Policy Implications</h4>
          <p className="text-sm text-dark-300">
            Explores why well-intentioned reforms often backfire and
            what conditions favor stability.
          </p>
        </Card>
      </CardGrid>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ready to Begin?</h2>

      <p className="my-4">
        In the next section, we'll examine the <strong>Early Political Philosophers</strong>—from
        Plato to Aristotle to Machiavelli—and understand why Machiavelli's approach to political
        theory was revolutionary and particularly suited to system dynamics modeling.
      </p>

      <Callout type="success">
        <p>
          <strong>What you'll gain:</strong> By working through this thesis, you'll develop an
          understanding of how complex political systems behave, why reforms often fail, and
          what conditions lead to political stability or revolution. You'll see political
          science not as abstract philosophy, but as a quantifiable dynamic system.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">1.</span>
            <span>
              This thesis applies <strong>system dynamics</strong> methodology to model
              Machiavelli's political philosophy mathematically.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">2.</span>
            <span>
              The model focuses on a <strong>Renaissance Italian city-state</strong> with
              three competing factions: populace, aristocracy, and executive.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">3.</span>
            <span>
              Machiavelli viewed political interaction as a <strong>physical system</strong> where
              structure matters as much as individual actions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">4.</span>
            <span>
              The friction between classes <strong>guarantees political health</strong>—all
              good laws spring from the conflict between factions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 font-bold">5.</span>
            <span>
              Findings include analysis of <strong>executive policy effects</strong>, production
              shocks, corruption, and reform dynamics.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
