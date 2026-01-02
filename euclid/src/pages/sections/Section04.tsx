import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { SASCongruence } from '@/components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <SASCongruence />

      <Proposition
        title="Proposition I.4"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having the two sides <em>AB</em>,{' '}
              <em>AC</em> equal to the two sides <em>DE</em>, <em>DF</em> respectively, namely{' '}
              <em>AB</em> to <em>DE</em> and <em>AC</em> to <em>DF</em>, and the angle <em>BAC</em>{' '}
              equal to the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              I say that the base <em>BC</em> is also equal to the base <em>EF</em>, the triangle{' '}
              <em>ABC</em> will be equal to the triangle <em>DEF</em>, and the remaining angles will
              be equal to the remaining angles respectively, namely those which the equal sides
              subtend, that is, the angle <em>ABC</em> to the angle <em>DEF</em>, and the angle{' '}
              <em>ACB</em> to the angle <em>DFE</em>.
            </p>
            <p className="mt-2">
              For, if the triangle <em>ABC</em> be applied to the triangle <em>DEF</em>, and if the
              point <em>A</em> be placed on the point <em>D</em> and the straight line <em>AB</em> on{' '}
              <em>DE</em>, then the point <em>B</em> will also coincide with <em>E</em>, because{' '}
              <em>AB</em> is equal to <em>DE</em>.
            </p>
            <p className="mt-2">
              Again, <em>AB</em> coinciding with <em>DE</em>, the straight line <em>AC</em> will also
              coincide with <em>DF</em>, because the angle <em>BAC</em> is equal to the angle{' '}
              <em>EDF</em>; hence the point <em>C</em> will also coincide with the point <em>F</em>,
              because <em>AC</em> is again equal to <em>DF</em>.
            </p>
            <p className="mt-2">
              But <em>B</em> also coincided with <em>E</em>; hence the base <em>BC</em> will coincide
              with the base <em>EF</em>.
            </p>
            <p className="mt-2">
              [For if, when <em>B</em> coincides with <em>E</em> and <em>C</em> with <em>F</em>, the
              base <em>BC</em> does not coincide with the base <em>EF</em>, two straight lines will
              enclose a space: which is impossible. Therefore the base <em>BC</em> will coincide with{' '}
              <em>EF</em>] and will be equal to it. [C.N. 4]
            </p>
            <p className="mt-2">
              Thus the whole triangle <em>ABC</em> will coincide with the whole triangle <em>DEF</em>,
              and will be equal to it.
            </p>
            <p className="mt-2">
              And the remaining angles will also coincide with the remaining angles and will be equal
              to them, the angle <em>ABC</em> to the angle <em>DEF</em>, and the angle <em>ACB</em> to
              the angle <em>DFE</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two triangles have the two sides equal to two sides respectively, and have the angles
          contained by the equal straight lines equal, they will also have the base equal to the
          base, the triangle will be equal to the triangle, and the remaining angles will be equal
          to the remaining angles respectively, namely those which the equal sides subtend.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the famous <strong>Side-Angle-Side (SAS)</strong> congruence theorem. It states that
        if two sides and the included angle of one triangle are equal to two sides and the included
        angle of another triangle, then the triangles are congruent (equal in all respects).
      </p>

      <p className="mt-4">
        Euclid's proof uses the method of <strong>superposition</strong>: he imagines placing one
        triangle on top of the other and showing that they must coincide exactly. This method has
        been criticized by later mathematicians because it relies on unstated assumptions about
        rigid motion.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Common Notion 4 (things which coincide are equal)</li>
        <li>The implicit assumption that figures can be moved without changing their size or shape</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Modern Treatment:</strong> In modern axiomatic geometry,
          SAS is often taken as an axiom rather than proved, or it is derived from axioms about
          transformations and rigid motions.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Result:</strong> Proposition I.4 is one of the most
          frequently used results in the <em>Elements</em>. Almost every proof involving triangles
          relies on this or the other congruence theorems that follow.
        </p>
      </div>
    </LessonLayout>
  );
}
