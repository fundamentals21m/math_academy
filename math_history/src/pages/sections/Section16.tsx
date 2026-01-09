import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Archimedes' Calculations</h2>

      <p>
        <strong>Archimedes of Syracuse</strong> (c. 287-212 BCE) was arguably the
        greatest mathematician of antiquity. His calculations of areas, volumes,
        and the value of <InlineMath>\pi</InlineMath> represent the pinnacle of
        Greek mathematics and anticipated integral calculus by two millennia.
      </p>

      <h3>Approximating Pi</h3>

      <p>
        Archimedes' most famous calculation was his approximation of <InlineMath>\pi</InlineMath>
        using inscribed and circumscribed regular polygons.
      </p>

      <Theorem title="Archimedes' Bounds on Pi">
        <MathBlock>
          {`3\\frac{10}{71} < \\pi < 3\\frac{1}{7}`}
        </MathBlock>
        <p className="mt-2">
          In decimal: <InlineMath>3.14084... {'<'} \pi {'<'} 3.14285...</InlineMath>
        </p>
      </Theorem>

      <Example title="The Method">
        <p>Archimedes' approach:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Start with a regular hexagon inscribed in a circle of diameter 1</li>
          <li>The hexagon's perimeter gives a lower bound for <InlineMath>\pi</InlineMath></li>
          <li>Double the sides: 6 → 12 → 24 → 48 → 96</li>
          <li>At each step, calculate the new perimeter using geometry</li>
          <li>Similarly track circumscribed polygons for upper bounds</li>
        </ol>
      </Example>

      {/* Visualization of polygon approximation */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Archimedes' Polygon Method for Pi
        </h4>
        <svg viewBox="0 0 500 180" className="w-full h-auto">
          {/* Hexagon */}
          <g transform="translate(80, 90)">
            <circle cx="0" cy="0" r="55" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3"/>
            <polygon 
              points="55,0 27.5,47.6 -27.5,47.6 -55,0 -27.5,-47.6 27.5,-47.6" 
              fill="#4f46e5" fillOpacity="0.3" 
              stroke="#818cf8" strokeWidth="2"
            />
            <text x="0" y="75" fill="#94a3b8" fontSize="10" textAnchor="middle">n=6</text>
            <text x="0" y="87" fill="#c7d2fe" fontSize="9" textAnchor="middle">P ≈ 3.00</text>
          </g>
          
          {/* 12-gon */}
          <g transform="translate(180, 90)">
            <circle cx="0" cy="0" r="55" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3"/>
            <polygon 
              points="55,0 47.6,27.5 27.5,47.6 0,55 -27.5,47.6 -47.6,27.5 -55,0 -47.6,-27.5 -27.5,-47.6 0,-55 27.5,-47.6 47.6,-27.5" 
              fill="#10b981" fillOpacity="0.3" 
              stroke="#34d399" strokeWidth="2"
            />
            <text x="0" y="75" fill="#94a3b8" fontSize="10" textAnchor="middle">n=12</text>
            <text x="0" y="87" fill="#a7f3d0" fontSize="9" textAnchor="middle">P ≈ 3.10</text>
          </g>
          
          {/* 24-gon */}
          <g transform="translate(280, 90)">
            <circle cx="0" cy="0" r="55" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3"/>
            <circle cx="0" cy="0" r="53" fill="#f59e0b" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="2"/>
            <text x="0" y="75" fill="#94a3b8" fontSize="10" textAnchor="middle">n=24</text>
            <text x="0" y="87" fill="#fcd34d" fontSize="9" textAnchor="middle">P ≈ 3.13</text>
          </g>
          
          {/* 96-gon (approximates circle) */}
          <g transform="translate(380, 90)">
            <circle cx="0" cy="0" r="55" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3"/>
            <circle cx="0" cy="0" r="54" fill="#ef4444" fillOpacity="0.2" stroke="#f87171" strokeWidth="2"/>
            <text x="0" y="75" fill="#94a3b8" fontSize="10" textAnchor="middle">n=96</text>
            <text x="0" y="87" fill="#fca5a5" fontSize="9" textAnchor="middle">P ≈ 3.141</text>
          </g>
          
          {/* Labels */}
          <text x="250" y="165" fill="#e5e7eb" fontSize="11" textAnchor="middle">
            Perimeter P approaches π as n increases
          </text>
        </svg>
      </div>

      <Callout type="note">
        <strong>Remarkable Accuracy:</strong> Archimedes' bounds give{' '}
        <InlineMath>\pi \approx 3.1416</InlineMath>, accurate to two decimal
        places. This approximation was not improved for about 400 years!
      </Callout>

      <h3>Volume of a Sphere</h3>

      <p>
        Archimedes considered his discovery of the sphere's volume to be his
        greatest achievement:
      </p>

      <Theorem title="Volume of a Sphere">
        <p>
          The volume of a sphere is two-thirds the volume of its circumscribing
          cylinder:
        </p>
        <MathBlock>
          {`V_{\\text{sphere}} = \\frac{2}{3} V_{\\text{cylinder}} = \\frac{2}{3} \\cdot \\pi r^2 \\cdot 2r = \\frac{4}{3}\\pi r^3`}
        </MathBlock>
      </Theorem>

      {/* Sphere and cylinder visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Archimedes' Sphere and Cylinder
        </h4>
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Cylinder */}
          <ellipse cx="200" cy="30" rx="80" ry="20" fill="none" stroke="#4b5563" strokeWidth="2"/>
          <line x1="120" y1="30" x2="120" y2="170" stroke="#4b5563" strokeWidth="2"/>
          <line x1="280" y1="30" x2="280" y2="170" stroke="#4b5563" strokeWidth="2"/>
          <ellipse cx="200" cy="170" rx="80" ry="20" fill="none" stroke="#4b5563" strokeWidth="2"/>
          
          {/* Sphere inside */}
          <ellipse cx="200" cy="100" rx="70" ry="70" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
          
          {/* Dimensions */}
          <line x1="300" y1="30" x2="300" y2="170" stroke="#94a3b8" strokeWidth="1"/>
          <line x1="295" y1="30" x2="305" y2="30" stroke="#94a3b8" strokeWidth="1"/>
          <line x1="295" y1="170" x2="305" y2="170" stroke="#94a3b8" strokeWidth="1"/>
          <text x="320" y="105" fill="#94a3b8" fontSize="12">2r</text>
          
          <line x1="200" y1="185" x2="280" y2="185" stroke="#94a3b8" strokeWidth="1"/>
          <text x="240" y="198" fill="#94a3b8" fontSize="12">r</text>
          
          {/* Labels */}
          <text x="200" y="100" fill="#c7d2fe" fontSize="11" textAnchor="middle">Sphere</text>
          <text x="50" y="100" fill="#9ca3af" fontSize="11" textAnchor="middle">Cylinder</text>
          
          {/* Ratio */}
          <text x="200" y="15" fill="#e5e7eb" fontSize="11" textAnchor="middle">
            V_sphere = (2/3) × V_cylinder
          </text>
        </svg>
      </div>

      <Callout type="info">
        <strong>Archimedes' Tombstone:</strong> Archimedes was so proud of this
        result that he requested a sphere inscribed in a cylinder be engraved
        on his tombstone. The Roman orator Cicero claimed to have found this
        tomb, overgrown with vegetation, and restored it.
      </Callout>

      <h3>Surface Area of a Sphere</h3>

      <Theorem title="Surface Area of a Sphere">
        <p>
          The surface area of a sphere equals four times the area of its
          great circle:
        </p>
        <MathBlock>
          {`A = 4\\pi r^2`}
        </MathBlock>
        <p className="mt-2">
          This equals the lateral surface area of the circumscribing cylinder.
        </p>
      </Theorem>

      <h3>The Mechanical Method</h3>

      <p>
        In a remarkable document called <em>The Method</em>, lost for centuries
        and rediscovered in 1906, Archimedes revealed how he actually{' '}
        <em>discovered</em> his results before proving them rigorously.
      </p>

      <Definition title="The Mechanical Method">
        <p>
          Archimedes imagined figures as made of infinitely thin slices, then
          used the law of the lever to "weigh" them against known figures:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Balance unknown area/volume against known ones</li>
          <li>Use proportions from the lever law</li>
          <li>Deduce the unknown quantity</li>
        </ul>
        <p className="mt-2 text-dark-400">
          This method wasn't rigorous enough for Greek standards, so Archimedes
          then proved his discoveries using exhaustion.
        </p>
      </Definition>

      <Example title="Discovering the Sphere Volume">
        <p>
          Archimedes balanced slices of a sphere against slices of a cone:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>At height <InlineMath>h</InlineMath>, a horizontal slice of the sphere has area <InlineMath>{`\\pi(r^2 - h^2)`}</InlineMath></li>
          <li>A corresponding cone slice has area <InlineMath>{`\\pi h^2`}</InlineMath></li>
          <li>By the lever law, these balance at specific distances</li>
          <li>Summing all slices gives the volume ratio</li>
        </ul>
      </Example>

      <h3>Other Remarkable Results</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Spiral of Archimedes</h4>
          <p className="text-sm text-dark-300">
            Found the area enclosed by the spiral{' '}
            <InlineMath>r = a\theta</InlineMath>, proving it equals one-third
            the area of the circle at the spiral's outer edge.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Conoids and Spheroids</h4>
          <p className="text-sm text-dark-300">
            Calculated volumes of paraboloids, hyperboloids, and ellipsoids—
            solids of revolution formed by rotating conic sections.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Centers of Gravity</h4>
          <p className="text-sm text-dark-300">
            Found the centers of gravity of triangles, parabolic segments,
            and other figures—essential for mechanics.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">The Sand Reckoner</h4>
          <p className="text-sm text-dark-300">
            Developed a number system to express extremely large numbers,
            estimating how many grains of sand would fill the universe.
          </p>
        </div>
      </div>

      <Callout type="note">
        <strong>Legacy:</strong> Archimedes' work represents the closest
        approach to calculus before the 17th century. Had Greek civilization
        not declined, calculus might have been invented 1800 years earlier!
      </Callout>

      <SectionQuiz
        sectionId={16}
        questions={quizMap[16] || []}
        title="Archimedes' Calculations Quiz"
      />
    </LessonLayout>
  );
}
