import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Socialism of Social Engineering</h2>

      <p className="mb-4">
        Beyond the socialism of Marxists, social democrats, and conservatives, there exists another
        form: the socialism of social engineering. This is the socialism advocated by technocrats,
        experts, and social scientists who believe society can be rationally designed and improved
        through scientific management.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Technocratic Vision</h3>

      <Definition title="Social Engineering">
        <p>
          Social engineering is the belief that society can be <strong>scientifically managed</strong>
          by experts who possess superior knowledge about what is good for people. Unlike traditional
          socialism which claims to represent the will of workers or the poor, social engineering
          socialism claims the authority of <em>science</em> and <em>expertise</em>.
        </p>
      </Definition>

      <p className="mb-4">
        Social engineers do not necessarily aim at equality or the preservation of tradition.
        Their goal is <strong>optimization</strong>—arranging society according to what experts
        determine is the most efficient or beneficial arrangement, regardless of what individuals
        themselves would choose.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Pretense of Knowledge</h3>

      <Theorem title="The Knowledge Problem">
        <p>
          Social engineering rests on a fundamental error: the assumption that experts can possess
          the knowledge necessary to rationally plan society. But the knowledge required for
          economic coordination is <strong>dispersed</strong> among millions of individuals,
          <strong>tacit</strong> (incapable of being articulated), and <strong>constantly changing</strong>.
        </p>
        <p className="mt-2">
          No central authority, however intelligent or well-intentioned, can gather and process
          this knowledge. The market price system aggregates and communicates this dispersed
          knowledge in a way that no planning board can replicate.
        </p>
      </Theorem>

      <Callout type="warning" title="Hayek's Warning">
        <p>
          F.A. Hayek called this the "pretense of knowledge"—the dangerous illusion that
          experts can design better outcomes than emerge spontaneously from voluntary
          interactions. This pretense justifies ever-greater interventions, each creating
          new problems that call for further interventions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Forms of Social Engineering</h3>

      <Example title="Social Engineering Interventions">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Urban planning:</strong> Experts design cities according to "scientific" principles</li>
          <li><strong>Educational policy:</strong> Curricula determined by pedagogical experts</li>
          <li><strong>Public health mandates:</strong> Lifestyle choices dictated by health authorities</li>
          <li><strong>Environmental regulation:</strong> Resource use planned by ecological experts</li>
          <li><strong>Monetary policy:</strong> Money supply managed by central bank economists</li>
          <li><strong>Industrial policy:</strong> "Strategic" industries selected by economic planners</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Social Engineering Is Socialist</h3>

      <Theorem title="The Socialist Nature of Social Engineering">
        <p>
          Social engineering is socialist because it transfers decision-making authority from
          natural property owners to nonowners (the "experts"). It denies individuals the right
          to use their own property according to their own judgment and instead subjects them
          to the judgment of those who neither produced nor contracted for the resources in
          question.
        </p>
      </Theorem>

      <p className="mb-4">
        The social engineer says: "You may own this property, but you cannot use it as you
        see fit. You must use it as we, the experts, determine is best for society." This
        is functionally identical to the claims of other socialists—only the justification
        differs.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Self-Perpetuating Nature</h3>

      <Definition title="The Intervention Spiral">
        <p>
          Each social engineering intervention creates unintended consequences that seem to
          call for further intervention. Rent control creates housing shortages, which leads
          to public housing programs, which create concentrated poverty, which leads to urban
          renewal programs, and so on.
        </p>
        <p className="mt-2">
          The social engineer never concludes that intervention itself is the problem.
          Instead, each failure is attributed to insufficient expertise, inadequate funding,
          or lack of political will—calling for <em>more</em> intervention rather than less.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Moral Dimension</h3>

      <Callout type="info" title="Paternalism and Freedom">
        <p>
          Social engineering is inherently paternalistic: it assumes experts know better than
          individuals what is good for them. This denies the fundamental moral status of
          persons as autonomous beings capable of directing their own lives. Even if the
          experts were correct about what is "best," imposing their judgment on unwilling
          individuals violates their rights as self-owners.
        </p>
      </Callout>

      <Theorem title="Economic Consequences">
        <p>
          Like all forms of socialism, social engineering produces relative impoverishment.
          By overriding the decisions of property owners with the judgments of nonowners,
          it destroys the incentive structure that drives efficient resource allocation and
          creates the same problems of reduced investment, wasteful resource use, and capital
          consumption that characterize other socialist systems.
        </p>
      </Theorem>

      <Callout type="success" title="Key Insight">
        <p>
          The socialism of social engineering is perhaps the most dangerous form because it
          appears to be ideologically neutral and scientifically justified. It appeals to
          people across the political spectrum who believe in "rational" policy-making.
          But its effects are just as destructive as any other form of socialism—and its
          claim to scientific authority makes it harder to resist.
        </p>
      </Callout>
    </LessonLayout>
  );
}
