import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>The Method of Exhaustion</h2>

      <p>
        The <strong>method of exhaustion</strong> was the Greek technique for
        finding areas and volumes of curved figures. Developed by <strong>Eudoxus
        of Cnidus</strong> (c. 408-355 BCE) and perfected by <strong>Archimedes</strong>,
        this method anticipated integral calculus by nearly two thousand years.
      </p>

      <h3>The Challenge of Curved Figures</h3>

      <p>
        The Greeks could easily calculate areas of polygons by dividing them into
        triangles. But curves posed a fundamental problem: how do you measure
        something that has no straight edges?
      </p>

      <Definition title="Method of Exhaustion">
        <p>
          The <strong>method of exhaustion</strong> proves that a curved figure
          has a certain area by showing:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Inscribed polygons approach the area from below</li>
          <li>Circumscribed polygons approach the area from above</li>
          <li>The claimed area is the only value that works</li>
        </ol>
        <p className="mt-2">
          The key is a <em>double reductio ad absurdum</em>: prove the area is
          not greater than the claim, and not less than the claim.
        </p>
      </Definition>

      <h3>Area of a Circle</h3>

      <p>
        The most famous application is proving that the area of a circle equals
        <InlineMath>{' \\pi r^2'}</InlineMath>:
      </p>

      <Theorem title="Area of a Circle (Archimedes)">
        <p>
          The area of a circle is equal to the area of a right triangle whose
          base is the circumference and whose height is the radius:
        </p>
        <MathBlock>
          {`A = \\frac{1}{2} \\cdot 2\\pi r \\cdot r = \\pi r^2`}
        </MathBlock>
      </Theorem>

      {/* Visualization of inscribed and circumscribed polygons */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Exhaustion: Polygons Approaching a Circle
        </h4>
        <svg viewBox="0 0 500 200" className="w-full h-auto">
          {/* Circle 1 with inscribed square */}
          <g transform="translate(80, 100)">
            <circle cx="0" cy="0" r="50" fill="none" stroke="#818cf8" strokeWidth="2"/>
            <polygon points="35,-35 35,35 -35,35 -35,-35" fill="#4f46e5" fillOpacity="0.3" stroke="#4f46e5" strokeWidth="1"/>
            <text x="0" y="70" fill="#94a3b8" fontSize="11" textAnchor="middle">n = 4</text>
          </g>
          
          {/* Circle 2 with inscribed hexagon */}
          <g transform="translate(180, 100)">
            <circle cx="0" cy="0" r="50" fill="none" stroke="#818cf8" strokeWidth="2"/>
            <polygon points="50,0 25,43 -25,43 -50,0 -25,-43 25,-43" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1"/>
            <text x="0" y="70" fill="#94a3b8" fontSize="11" textAnchor="middle">n = 6</text>
          </g>
          
          {/* Circle 3 with inscribed octagon */}
          <g transform="translate(280, 100)">
            <circle cx="0" cy="0" r="50" fill="none" stroke="#818cf8" strokeWidth="2"/>
            <polygon points="50,0 35,35 0,50 -35,35 -50,0 -35,-35 0,-50 35,-35" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
            <text x="0" y="70" fill="#94a3b8" fontSize="11" textAnchor="middle">n = 8</text>
          </g>
          
          {/* Circle 4 with inscribed 12-gon */}
          <g transform="translate(380, 100)">
            <circle cx="0" cy="0" r="50" fill="none" stroke="#818cf8" strokeWidth="2"/>
            {/* 12-gon approximation */}
            <polygon 
              points="50,0 43,25 25,43 0,50 -25,43 -43,25 -50,0 -43,-25 -25,-43 0,-50 25,-43 43,-25" 
              fill="#ef4444" fillOpacity="0.3" 
              stroke="#ef4444" 
              strokeWidth="1"
            />
            <text x="0" y="70" fill="#94a3b8" fontSize="11" textAnchor="middle">n = 12</text>
          </g>
          
          {/* Arrow showing convergence */}
          <text x="250" y="20" fill="#e5e7eb" fontSize="12" textAnchor="middle">
            As n increases, polygon area approaches circle area
          </text>
        </svg>
      </div>

      <Example title="The Proof Structure">
        <p>
          To prove the circle has area <InlineMath>A = \pi r^2</InlineMath>:
        </p>
        <p className="mt-2"><strong>Part 1:</strong> Assume circle area {'>'} <InlineMath>\pi r^2</InlineMath>.</p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>Let the difference be <InlineMath>\epsilon</InlineMath></li>
          <li>Inscribe polygons with more and more sides</li>
          <li>Eventually, the polygon area exceeds <InlineMath>\pi r^2</InlineMath></li>
          <li>But the polygon fits inside the circle—contradiction!</li>
        </ul>
        
        <p className="mt-3"><strong>Part 2:</strong> Assume circle area {'<'} <InlineMath>\pi r^2</InlineMath>.</p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>Circumscribe polygons with more and more sides</li>
          <li>Eventually, the polygon area is less than <InlineMath>\pi r^2</InlineMath></li>
          <li>But the circle fits inside the polygon—contradiction!</li>
        </ul>
        
        <p className="mt-3">
          Therefore, the circle area equals exactly <InlineMath>\pi r^2</InlineMath>.
        </p>
      </Example>

      <h3>The Axiom of Eudoxus</h3>

      <p>
        The method relies on a crucial assumption:
      </p>

      <Theorem title="Axiom of Eudoxus (Archimedean Property)">
        <p>
          Given any two magnitudes <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>
          with <InlineMath>A {'<'} B</InlineMath>, there exists a positive integer{' '}
          <InlineMath>n</InlineMath> such that <InlineMath>nA {'>'} B</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently: by repeatedly doubling <InlineMath>A</InlineMath>, you can
          exceed any magnitude <InlineMath>B</InlineMath>.
        </p>
      </Theorem>

      <p>
        This axiom rules out "infinitesimals"—quantities smaller than any positive
        number but not zero. It guarantees that the gaps between inscribed polygons
        and the circle can be made arbitrarily small.
      </p>

      <h3>Quadrature of the Parabola</h3>

      <p>
        Archimedes' masterpiece was finding the area under a parabolic arc:
      </p>

      <Theorem title="Quadrature of the Parabola">
        <p>
          The area enclosed by a parabola and a chord is <InlineMath>4/3</InlineMath>
          the area of the inscribed triangle with the same base and vertex at
          the parabola's vertex.
        </p>
      </Theorem>

      {/* Visualization of parabola quadrature */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Archimedes' Parabola Quadrature
        </h4>
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Parabola */}
          <path 
            d="M 50 150 Q 200 10 350 150" 
            fill="#4f46e5" 
            fillOpacity="0.2" 
            stroke="#818cf8" 
            strokeWidth="2"
          />
          
          {/* Base chord */}
          <line x1="50" y1="150" x2="350" y2="150" stroke="#818cf8" strokeWidth="2"/>
          
          {/* Main triangle */}
          <polygon 
            points="50,150 200,50 350,150" 
            fill="#10b981" 
            fillOpacity="0.3" 
            stroke="#10b981" 
            strokeWidth="1"
          />
          
          {/* Smaller triangles (left) */}
          <polygon 
            points="50,150 125,87.5 200,50" 
            fill="#f59e0b" 
            fillOpacity="0.3" 
            stroke="#f59e0b" 
            strokeWidth="1"
          />
          
          {/* Smaller triangles (right) */}
          <polygon 
            points="200,50 275,87.5 350,150" 
            fill="#f59e0b" 
            fillOpacity="0.3" 
            stroke="#f59e0b" 
            strokeWidth="1"
          />
          
          {/* Labels */}
          <text x="200" y="110" fill="#a7f3d0" fontSize="12" textAnchor="middle">T</text>
          <text x="125" y="105" fill="#fcd34d" fontSize="10" textAnchor="middle">T/4</text>
          <text x="275" y="105" fill="#fcd34d" fontSize="10" textAnchor="middle">T/4</text>
          
          {/* Formula */}
          <text x="200" y="185" fill="#e5e7eb" fontSize="11" textAnchor="middle">
            Area = T + T/4 + T/16 + ... = T · (1 + 1/4 + 1/16 + ...) = 4T/3
          </text>
        </svg>
      </div>

      <Example title="The Geometric Series">
        <p>
          Archimedes showed that filling in the parabolic segment requires:
        </p>
        <MathBlock>
          {`T + \\frac{T}{4} + \\frac{T}{16} + \\frac{T}{64} + \\cdots = T \\cdot \\sum_{n=0}^{\\infty} \\frac{1}{4^n} = T \\cdot \\frac{1}{1-1/4} = \\frac{4T}{3}`}
        </MathBlock>
        <p className="mt-2">
          This was the first time anyone summed an infinite geometric series!
        </p>
      </Example>

      <Callout type="info">
        <strong>Proto-Calculus:</strong> The method of exhaustion is essentially
        integration by Riemann sums, but without the concept of limits. The Greeks
        achieved the same results as calculus through pure geometry and proof by
        contradiction—a remarkable intellectual achievement.
      </Callout>

      <h3>Limitations of the Method</h3>

      <p>
        Despite its power, the method had limitations:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>No general algorithms:</strong> Each problem required a
          custom geometric construction
        </li>
        <li>
          <strong>Required knowing the answer:</strong> You had to guess the
          area first, then prove it correct
        </li>
        <li>
          <strong>Labor-intensive:</strong> The double contradiction proof
          was lengthy and repetitive
        </li>
      </ul>

      <Callout type="note">
        <strong>Looking Forward:</strong> These limitations explain why calculus,
        with its systematic techniques and algorithms, eventually replaced the
        method of exhaustion. Newton and Leibniz didn't just replicate Greek
        results—they created a universal method for solving such problems.
      </Callout>

      <SectionQuiz
        sectionId={15}
        questions={quizMap[15] || []}
        title="Method of Exhaustion Quiz"
      />
    </LessonLayout>
  );
}
