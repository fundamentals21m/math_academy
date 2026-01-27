import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Capitalist Production and the Problem of Monopoly</h2>

      <p className="mb-4">
        One of the most common arguments against capitalism is that it leads to monopolies that
        exploit consumers through high prices and restricted output. This chapter examines the
        monopoly problem and demonstrates that the standard critique fundamentally misunderstands
        both the nature of monopoly and its actual source.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Defining Monopoly</h3>

      <Definition title="The Standard Definition">
        <p>
          In mainstream economics, a monopoly is typically defined as a firm that is the
          <strong>sole seller</strong> of a product with no close substitutes. Such a firm can
          allegedly charge prices above "competitive" levels, restrict output, and earn
          "supernormal" profits.
        </p>
      </Definition>

      <Callout type="warning" title="Problems with the Standard Definition">
        <p>
          This definition is fundamentally flawed because it treats the ability to set one's
          own prices—which <em>every</em> seller has—as if it were a special monopoly power.
          Every person who sells anything is a "monopolist" in the sense of being the sole
          seller of their particular product at their particular location at their particular
          moment. The question is not whether someone has pricing power but how they acquired
          their market position.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Two Types of Monopoly</h3>

      <Definition title="Free Market Monopoly">
        <p>
          A <strong>free market monopoly</strong> is a position achieved through superior
          service to consumers. A firm becomes the sole supplier because it produces better
          products, charges lower prices, or serves customers more effectively than any
          competitor. Such a position is always contestable—it lasts only as long as the
          firm continues to satisfy consumers better than alternatives.
        </p>
      </Definition>

      <Definition title="Coercive Monopoly">
        <p>
          A <strong>coercive monopoly</strong> is a position achieved through government
          intervention—through legal prohibitions on competition. The government grants
          exclusive privileges, licenses, patents, or franchises that legally prevent
          others from entering the market, regardless of how well they could serve consumers.
        </p>
      </Definition>

      <Theorem title="The Source of Harmful Monopoly">
        <p>
          Harmful monopoly power—the ability to charge high prices and restrict output
          without fear of competition—can only exist when backed by <strong>government
          coercion</strong>. On a free market, any attempt to charge excessive prices
          or offer inferior products creates profit opportunities that attract competitors.
          Only legal barriers to entry can prevent this competitive process.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Examples of Government-Created Monopolies</h3>

      <Example title="Coercive Monopolies in Practice">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Occupational licensing:</strong> Legal requirements that prevent qualified
            people from practicing medicine, law, or other professions without government approval
          </li>
          <li>
            <strong>Utility franchises:</strong> Exclusive rights granted to provide electricity,
            water, or other services in a geographic area
          </li>
          <li>
            <strong>Patents and copyrights:</strong> Legal monopolies over ideas and expressions
          </li>
          <li>
            <strong>Tariffs and quotas:</strong> Restrictions on foreign competition
          </li>
          <li>
            <strong>Taxi medallions:</strong> Limited permits required to operate a taxi
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Competitive Process</h3>

      <Theorem title="Competition as a Discovery Process">
        <p>
          Competition is not a static state where many firms sell identical products at
          the same price. Competition is a <strong>dynamic process of discovery</strong>
          where entrepreneurs try different approaches, products, and prices to better
          serve consumers. Some succeed and grow; others fail and exit.
        </p>
        <p className="mt-2">
          A firm that temporarily dominates its market through superior performance is
          <em>evidence of</em> competition working, not evidence of competition failing.
        </p>
      </Theorem>

      <Callout type="info" title="The Entrepreneur's Role">
        <p>
          Entrepreneurs who achieve large market shares do so by discovering ways to serve
          consumers that others missed. Their success benefits consumers through lower prices,
          better products, or innovations that raise living standards. Penalizing success
          punishes the very activity that benefits consumers most.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Antitrust and the Perverse Consequences</h3>

      <p className="mb-4">
        Antitrust laws, supposedly designed to protect consumers from monopoly, actually
        punish firms for serving consumers too well. The firms targeted by antitrust
        typically achieved their positions by charging lower prices, not higher ones.
      </p>

      <Theorem title="The Irony of Antitrust">
        <p>
          Antitrust prosecution is triggered by <em>success</em>—by gaining large market
          shares, by charging low prices (predatory pricing), by charging the same prices
          as competitors (price fixing), or by charging different prices (price discrimination).
          There is no pricing strategy that is immune from antitrust prosecution if a firm
          is successful enough.
        </p>
      </Theorem>

      <Callout type="success" title="Key Insight">
        <p>
          The monopoly problem is not a problem of capitalism but a problem of government
          intervention in capitalism. True harmful monopoly can only exist where government
          creates and protects it. On a free market, monopoly positions earned through superior
          service to consumers benefit rather than harm the public. The solution to monopoly
          is not more government intervention but less—the removal of legal barriers to
          competition rather than prosecution of successful competitors.
        </p>
      </Callout>
    </LessonLayout>
  );
}
