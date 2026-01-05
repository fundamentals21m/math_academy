import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section119() {
  return (
    <LessonLayout sectionId={119}>
      <h2>Book V: Theory of Proportions</h2>

      <p>
        Book V presents Eudoxus's theory of proportion, one of the greatest achievements of Greek
        mathematics. This theory allows us to compare magnitudes of any kind—lengths, areas,
        volumes—whether or not they share a common measure. It effectively handles what we now call
        irrational ratios.
      </p>

      <h3 className="mt-6">Definitions</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 1</h4>
          <p className="text-dark-200 mt-2">
            A <strong>magnitude</strong> is a part of a magnitude, the less of the greater, when it
            measures the greater.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 2</h4>
          <p className="text-dark-200 mt-2">
            The greater is a <strong>multiple</strong> of the less when it is measured by the less.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 3</h4>
          <p className="text-dark-200 mt-2">
            A <strong>ratio</strong> is a sort of relation in respect of size between two magnitudes
            of the same kind.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 4</h4>
          <p className="text-dark-200 mt-2">
            Magnitudes are said to <strong>have a ratio</strong> to one another which can, when
            multiplied, exceed one another.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            This is the "Archimedean property"—no infinitesimals or infinities.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 5 (The Key Definition)</h4>
          <p className="text-dark-200 mt-2">
            Magnitudes are said to be in the <strong>same ratio</strong>, the first to the second and
            the third to the fourth, when, if any equimultiples whatever are taken of the first and
            third, and any equimultiples whatever of the second and fourth, the former equimultiples
            alike exceed, are alike equal to, or alike fall short of, the latter equimultiples
            respectively taken in corresponding order.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            In modern notation: A:B = C:D means for all positive integers m, n: mA {'>'} nB ⟺ mC {'>'} nD
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 6</h4>
          <p className="text-dark-200 mt-2">
            Let magnitudes which have the same ratio be called <strong>proportional</strong>.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 7</h4>
          <p className="text-dark-200 mt-2">
            When, of the equimultiples, the multiple of the first magnitude exceeds the multiple of
            the second, but the multiple of the third does not exceed the multiple of the fourth,
            then the first is said to have a <strong>greater ratio</strong> to the second than the
            third has to the fourth.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 8</h4>
          <p className="text-dark-200 mt-2">
            A <strong>proportion in three terms</strong> is the least possible.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 9</h4>
          <p className="text-dark-200 mt-2">
            When three magnitudes are proportional, the first is said to have to the third the{' '}
            <strong>duplicate ratio</strong> of that which it has to the second.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B = B:C, then A:C is the "duplicate" (squared) ratio of A:B.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 10</h4>
          <p className="text-dark-200 mt-2">
            When four magnitudes are continuously proportional, the first is said to have to the
            fourth the <strong>triplicate ratio</strong> of that which it has to the second, and so
            on continually, whatever the proportion may be.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 11</h4>
          <p className="text-dark-200 mt-2">
            Magnitudes are called <strong>antecedents</strong> in a ratio those which are compared
            (the first and third), and <strong>consequents</strong> those to which they are compared
            (the second and fourth).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 12</h4>
          <p className="text-dark-200 mt-2">
            <strong>Alternate ratio</strong> means taking the antecedent in relation to the
            antecedent and the consequent in relation to the consequent.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B = C:D, then alternately A:C = B:D.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 13</h4>
          <p className="text-dark-200 mt-2">
            <strong>Inverse ratio</strong> means taking the consequent as antecedent in relation to
            the antecedent as consequent.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">If A:B = C:D, then inversely B:A = D:C.</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 14</h4>
          <p className="text-dark-200 mt-2">
            <strong>Composition of a ratio</strong> means taking the antecedent together with the
            consequent as one in relation to the consequent by itself.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B, then componendo gives (A+B):B.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 15</h4>
          <p className="text-dark-200 mt-2">
            <strong>Separation of a ratio</strong> means taking the excess by which the antecedent
            exceeds the consequent in relation to the consequent by itself.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B, then separando gives (A-B):B.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 16</h4>
          <p className="text-dark-200 mt-2">
            <strong>Conversion of a ratio</strong> means taking the antecedent in relation to the
            excess by which the antecedent exceeds the consequent.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B, then convertendo gives A:(A-B).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 17</h4>
          <p className="text-dark-200 mt-2">
            A ratio <strong>ex aequali</strong> arises when, there being several magnitudes and
            another set equal to them in multitude, taken two and two in the same ratio, as the
            first is to the last among the first magnitudes, so is the first to the last among the
            second magnitudes.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A:B = D:E and B:C = E:F, then ex aequali A:C = D:F.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 18</h4>
          <p className="text-dark-200 mt-2">
            A <strong>perturbed proportion</strong> arises when, there being three magnitudes and
            another set equal to them in multitude, antecedent is to consequent as antecedent is to
            consequent, while consequent is to a third as a third is to the consequent.
          </p>
        </div>
      </div>

      <h3 className="mt-8">The Significance of Definition 5</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          Definition 5 is the cornerstone of the entire theory. It defines when two ratios are equal
          without requiring the ratios to be expressible as fractions. This handles the problem of{' '}
          <strong>incommensurable magnitudes</strong> (like the diagonal and side of a square)
          which cannot be expressed as ratios of whole numbers.
        </p>
        <p className="text-dark-200 mt-4">
          This definition essentially anticipates Dedekind cuts and the modern definition of real
          numbers by over 2,000 years. It was so rigorous that it served as the foundation for
          proportion theory until the 19th century.
        </p>
      </div>

      <h3 className="mt-8">Overview of Book V</h3>

      <p>Book V contains 25 propositions that establish the algebra of ratios:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>V.1-6:</strong> Properties of equimultiples
        </li>
        <li>
          <strong>V.7-10:</strong> Equal and unequal magnitudes in ratios
        </li>
        <li>
          <strong>V.11-13:</strong> Transitivity and ordering of ratios
        </li>
        <li>
          <strong>V.14-15:</strong> Proportional magnitudes and order
        </li>
        <li>
          <strong>V.16:</strong> Alternation (alternando)
        </li>
        <li>
          <strong>V.17-18:</strong> Separation and composition (separando, componendo)
        </li>
        <li>
          <strong>V.19:</strong> Conversion (convertendo)
        </li>
        <li>
          <strong>V.20-23:</strong> Ex aequali theorems
        </li>
        <li>
          <strong>V.24-25:</strong> Addition and comparison of proportionals
        </li>
      </ul>
    </LessonLayout>
  );
}
