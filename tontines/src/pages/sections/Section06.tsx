import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Life Tables</h2>

      <p className="mb-4">
        Life tables are the foundation of actuarial science. They tabulate mortality
        statistics for a population, allowing us to calculate any survival probability
        we need.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Structure of a Life Table</h3>

      <Definition title="Life Table Columns">
        <p>A standard life table includes these columns:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>l_x</InlineMath> = number alive at age <InlineMath>x</InlineMath>
            (out of 100,000 born)
          </li>
          <li>
            <InlineMath>d_x</InlineMath> = deaths between age <InlineMath>x</InlineMath>
            and <InlineMath>x+1</InlineMath>
          </li>
          <li>
            <InlineMath>{'q_x = d_x / l_x'}</InlineMath> = probability of dying at age
            <InlineMath>x</InlineMath>
          </li>
          <li>
            <InlineMath>e_x</InlineMath> = expected remaining lifetime at age
            <InlineMath>x</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="Life Table Excerpt (U.S. Males)">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2"><InlineMath>l_x</InlineMath></th>
              <th className="pb-2"><InlineMath>d_x</InlineMath></th>
              <th className="pb-2"><InlineMath>q_x</InlineMath></th>
              <th className="pb-2"><InlineMath>e_x</InlineMath></th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">85,000</td>
              <td className="py-2">850</td>
              <td className="py-2">0.010</td>
              <td className="py-2">18.5</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">66</td>
              <td className="py-2">84,150</td>
              <td className="py-2">925</td>
              <td className="py-2">0.011</td>
              <td className="py-2">17.7</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">67</td>
              <td className="py-2">83,225</td>
              <td className="py-2">1,000</td>
              <td className="py-2">0.012</td>
              <td className="py-2">16.9</td>
            </tr>
            <tr>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
              <td className="py-2">...</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Calculating From Life Tables</h3>

      <p className="mb-4">
        Given life table data, we can compute any survival probability:
      </p>

      <MathBlock>
        {`{}_tp_x = \\frac{l_{x+t}}{l_x}`}
      </MathBlock>

      <Example title="Using the Life Table">
        <p className="mb-3">
          Probability a 65-year-old survives to 67:
        </p>
        <MathBlock>
          {`{}_2p_{65} = \\frac{l_{67}}{l_{65}} = \\frac{83,225}{85,000} = 0.979`}
        </MathBlock>
        <p className="mt-2">About 97.9% will survive 2 more years.</p>
      </Example>

      <Callout type="info" title="Where Life Tables Come From">
        <p>
          Governments compile life tables from census and death records. The U.S. Social
          Security Administration, UK Office for National Statistics, and similar agencies
          publish updated tables regularly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Observation</h3>

      <p className="mb-4">
        Notice that <InlineMath>q_x</InlineMath> (the death rate) increases with age.
        At 65, about 1% die each year. By 85, it's closer to 8%. This acceleration
        of mortality is fundamental to tontine design.
      </p>

      <p className="text-dark-400 italic">
        The death rate <InlineMath>q_x</InlineMath> gives us discrete, year-by-year
        mortality. But sometimes we need a continuous measure: the instantaneous
        death rate, or "force of mortality." That's next.
      </p>
    </LessonLayout>
  );
}
