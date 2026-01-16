import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>New Light on the Prehistory of the Austrian School</h2>

      <p>
        The Austrian School of economics, founded by Carl Menger in 1871, did not arise in a vacuum.
        It had important predecessors whose insights Menger developed and systematized. Understanding
        this prehistory illuminates the distinctive character of Austrian thought and corrects the
        impression that it was merely a reaction to the German Historical School.
      </p>

      <Callout type="info">
        <strong>The Founding Work:</strong> Carl Menger's <em>Grundsätze der Volkswirtschaftslehre</em>
        (Principles of Economics), published in 1871, is conventionally dated as the founding of the
        Austrian School. Yet Menger drew on a rich tradition of economic thought, especially from
        Spain and France.
      </Callout>

      <h3>The Spanish Scholastics</h3>
      <p>
        The late Spanish Scholastics of the sixteenth and seventeenth centuries—centered at the
        University of Salamanca—developed many ideas that would later become central to Austrian
        economics. These included the subjective theory of value, the role of entrepreneurship,
        and critiques of government intervention.
      </p>

      <p>
        Thinkers like Luis de Molina, Juan de Mariana, and Martín de Azpilcueta recognized that
        the value of goods depends not on intrinsic qualities or labor input but on the subjective
        evaluations of buyers and sellers. They also understood the connection between money supply
        and prices—the quantity theory of money.
      </p>

      <Callout type="success">
        <strong>A Forgotten Tradition:</strong> The Spanish Scholastics represent a forgotten chapter
        in the history of economic thought. Their insights were largely lost as the mercantilist
        and later classical schools came to dominate. The Austrians rediscovered and developed
        these insights, often without knowing their origins.
      </Callout>

      <h3>The French Liberal Tradition</h3>
      <p>
        More immediately, the Austrian School drew on the French liberal tradition of the eighteenth
        and nineteenth centuries. The Physiocrats, despite their errors about the exclusive
        productivity of land, emphasized natural economic laws and the benefits of laissez-faire.
      </p>

      <p>
        More important were the French economists of the nineteenth century: Jean-Baptiste Say,
        Frédéric Bastiat, and their successors. Say developed the theory of entrepreneurship and
        critiqued the labor theory of value. Bastiat brilliantly exposed the fallacies of
        protectionism and interventionism.
      </p>

      <h3>Richard Cantillon</h3>
      <p>
        An especially important precursor was Richard Cantillon, an Irish-French banker whose
        <em>Essai sur la Nature du Commerce en Général</em> (1755) is one of the first systematic
        treatises on economics. Cantillon developed sophisticated analyses of entrepreneurship,
        the structure of production, and monetary theory.
      </p>

      <Callout type="info">
        <strong>The Cantillon Effect:</strong> Cantillon showed that new money does not enter the
        economy uniformly but at specific points, enriching some before others. This "Cantillon
        effect" would later be developed by the Austrians in their analysis of credit expansion
        and the business cycle.
      </Callout>

      <h3>A. R. J. Turgot</h3>
      <p>
        Anne-Robert-Jacques Turgot, the great French economist and statesman, developed important
        elements of what would become Austrian theory. His analysis of capital, interest, and the
        structure of production anticipated the work of Böhm-Bawerk by more than a century.
      </p>

      <p>
        Turgot understood that capital goods are produced means of production, that their value
        derives from the value of the consumer goods they help produce, and that interest is a
        phenomenon arising from the time structure of production. These insights are central to
        Austrian capital theory.
      </p>

      <h3>The British Classical School</h3>
      <p>
        The relationship between the Austrian School and British classical economics is complex.
        The Austrians rejected the labor theory of value that was central to Adam Smith and David
        Ricardo. Yet they built on classical insights about the benefits of free trade and the
        coordination of economic activity through prices.
      </p>

      <Callout type="warning">
        <strong>The Ricardian Detour:</strong> In some respects, Ricardian economics represented
        a step backward from the subjective value tradition. Ricardo's emphasis on objective costs
        and the labor theory of value led economics in a direction that culminated in Marx. The
        Austrians corrected this Ricardian detour.
      </Callout>

      <h3>Menger's Contribution</h3>
      <p>
        What Menger contributed was the systematic development and integration of these various
        strands. He placed the subjective theory of value on rigorous foundations, developing the
        concept of marginal utility. He analyzed the structure of production in terms of goods of
        different "orders," with consumer goods being first-order goods and producer goods being
        higher-order goods.
      </p>

      <p>
        Menger also developed a theory of the origin of money and other social institutions as
        the unintended consequences of individual action—not as products of deliberate design or
        social contract but as spontaneous orders emerging from countless individual choices.
      </p>

      <h3>The Continuity of Economic Thought</h3>
      <p>
        Understanding the prehistory of the Austrian School reveals the continuity of sound
        economic thinking across centuries and national boundaries. From the Spanish Scholastics
        through the French liberals to the Austrian economists, a tradition of subjective value,
        methodological individualism, and free-market advocacy has persisted.
      </p>

      <Callout type="success">
        <strong>Conclusion:</strong> The Austrian School did not spring fully formed from Menger's
        mind. It represented the culmination of centuries of economic thinking, drawing on insights
        from Spain, France, Britain, and elsewhere. This historical perspective enriches our
        understanding of Austrian economics and its place in the history of ideas.
      </Callout>
    </LessonLayout>
  );
}
