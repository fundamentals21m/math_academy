import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Modern Revival</h2>

      <p className="mb-4">
        After a century in obscurity, tontines are making a comeback. Three converging
        forces are driving renewed academic and industry interest.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Longevity Crisis</h3>

      <p className="mb-4">
        People are living longer than ever. A 65-year-old today can expect to live 20+ more years,
        with a significant chance of reaching 90 or beyond. Most retirement savings weren't
        designed for this horizon.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Annuity Problem</h3>

      <p className="mb-4">
        Life annuities promise guaranteed lifetime income, but insurance companies charge
        substantial "loading factors" (12-18%) for this guarantee. They must hold capital
        reserves against the risk that everyone lives too long.
      </p>

      <Definition title="Loading Factor">
        <p>
          The amount by which an insurance product's price exceeds its actuarially fair value.
          Loading covers administrative costs, profit margins, capital requirements, and
          adverse selection buffers.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Academic Breakthrough</h3>

      <Callout type="success" title="Milevsky & Salisbury (2015)">
        <p>
          The paper "Optimal Retirement Income Tontines" showed that mathematically optimal
          tontines can achieve nearly the same utility as perfect annuities—but without
          the insurance company overhead. This sparked renewed research interest.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modern Proposals</h3>

      <p className="mb-4">
        Today's tontine proposals differ fundamentally from historical versions:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>No last-survivor jackpot:</strong> Payouts smooth over time</li>
        <li><strong>Age-adjusted contributions:</strong> Fair to all demographics</li>
        <li><strong>Transparent mathematics:</strong> Formulas are public and auditable</li>
        <li><strong>Regulatory frameworks:</strong> Canada, UK, US considering modern rules</li>
      </ul>

      <p className="text-dark-400 italic">
        To understand how modern tontines work, we first need the mathematical tools.
        Next, we'll learn about survival probabilities—the foundation of mortality mathematics.
      </p>
    </LessonLayout>
  );
}
