import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section03Questions } from '../../data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">Sumerian-Babylonian Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Sumerians were a people of unknown linguistic affinity, who lived in the
        southern part of Mesopotamia (modern Iraq), and whose civilization was absorbed
        by the Semitic Babylonians around 2000 BC. Babylonian culture reached its peak
        in about 575 BC under Nebuchadnezzar, but most of the mathematical achievements
        we shall discuss go back much further — to around 2000 BC.
      </p>

      <Callout type="info">
        <p>
          This was about the time when the biblical patriarch Abraham was said to have
          been born in the Sumerian city of <strong>Ur</strong>. Like the ancient Egyptians,
          the Mesopotamians never gave what we would call "proofs" for their results —
          the first people to do so were the Greeks.
        </p>
      </Callout>

      {/* The Sexagesimal System */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Sexagesimal System (Base 60)</h3>

      <p className="text-dark-200 mb-6">
        In representing numbers up to (and including) 59, the Sumerians and Babylonians
        used a <strong>decimal system</strong>. For example, they wrote 35 using cuneiform
        symbols for 30 and 5.
      </p>

      <p className="text-dark-200 mb-6">
        However, 60 is again denoted by the same symbol as 1, and so is{' '}
        <InlineMath>{`60^2`}</InlineMath>, as well as <InlineMath>{`60^{-1}`}</InlineMath>,{' '}
        <InlineMath>{`60^{-2}`}</InlineMath>, etc. It is usually clear from context which
        is meant. To remove ambiguity, we use degree notation:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">Sexagesimal Examples</h4>
        <ul className="space-y-3 font-mono">
          <li className="flex items-center gap-4">
            <span className="text-dark-300 w-24">30° or 30′</span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-200">30, or 30/60 = 1/2</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-dark-300 w-24">12° or 12′</span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-200">12, or 12/60 = 1/5</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-dark-300 w-24">1°24′ or 1′24″</span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-200">84, or 84/60 = 7/5</span>
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          The Babylonian use of scale 60 was taken over into Greek astronomy around
          150 BC by <strong>Hipparchus of Nicaea</strong> and is still used today in
          measuring <strong>time</strong> (60 seconds = 1 minute, 60 minutes = 1 hour)
          and <strong>angles</strong> (60 minutes = 1 degree).
        </p>
      </Callout>

      {/* Weights and Measures */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Weights and Measures</h3>

      <p className="text-dark-200 mb-6">
        The sexagesimal system was also employed for weights of silver:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <div className="flex flex-col gap-2 text-dark-200">
          <p><strong>60 shekels</strong> = 1 mina</p>
          <p><strong>60 minas</strong> = 1 talent</p>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        The prophet Ezekiel, living in Babylon, wrote in 573 BC:
      </p>

      <blockquote className="border-l-4 border-amber-400 pl-4 italic text-dark-300 mb-6">
        "The Lord Yahweh says this: ... Twenty shekels, twenty-five shekels and fifteen
        shekels are to make one mina." — Ezekiel 45:9-12
      </blockquote>

      {/* The Symbol for Zero */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Invention of Zero</h3>

      <p className="text-dark-200 mb-6">
        The later Babylonians even introduced a <strong>symbol for zero</strong> as a
        placeholder. For example, to write <InlineMath>{`60^2 + 4 = 3604`}</InlineMath>,
        they would use a special symbol to indicate the missing "ones of 60" position.
      </p>

      <Callout type="info">
        <p>
          <strong>Ptolemy</strong> (150 AD) replaced this Babylonian zero symbol by a
          small circle, probably from the Greek word <em>"ouden"</em>, meaning "nothing".
          This eventually evolved into our modern symbol 0.
        </p>
      </Callout>

      {/* Division and Tables */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Tables for Computation</h3>

      <p className="text-dark-200 mb-6">
        In order to divide, the Babylonians made use of the fact that{' '}
        <InlineMath>{`a/b = a \\cdot b^{-1}`}</InlineMath>. To this end, they constructed
        <strong> tables of reciprocals</strong>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 overflow-x-auto">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">
          Mesopotamian Table of Inverses (Scale 60)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
          <div className="space-y-1">
            <div className="flex justify-between"><span>2</span><span className="text-amber-400">30′</span></div>
            <div className="flex justify-between"><span>3</span><span className="text-amber-400">20′</span></div>
            <div className="flex justify-between"><span>4</span><span className="text-amber-400">15′</span></div>
            <div className="flex justify-between"><span>5</span><span className="text-amber-400">12′</span></div>
            <div className="flex justify-between"><span>6</span><span className="text-amber-400">10′</span></div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between"><span>8</span><span className="text-amber-400">7′30″</span></div>
            <div className="flex justify-between"><span>9</span><span className="text-amber-400">6′40″</span></div>
            <div className="flex justify-between"><span>10</span><span className="text-amber-400">6′</span></div>
            <div className="flex justify-between"><span>12</span><span className="text-amber-400">5′</span></div>
            <div className="flex justify-between"><span>15</span><span className="text-amber-400">4′</span></div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between"><span>16</span><span className="text-amber-400">3′45″</span></div>
            <div className="flex justify-between"><span>18</span><span className="text-amber-400">3′20″</span></div>
            <div className="flex justify-between"><span>20</span><span className="text-amber-400">3′</span></div>
            <div className="flex justify-between"><span>24</span><span className="text-amber-400">2′30″</span></div>
            <div className="flex justify-between"><span>25</span><span className="text-amber-400">2′24″</span></div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between"><span>27</span><span className="text-amber-400">2′13″20‴</span></div>
            <div className="flex justify-between"><span>30</span><span className="text-amber-400">2′</span></div>
            <div className="flex justify-between"><span>32</span><span className="text-amber-400">1′52″30‴</span></div>
            <div className="flex justify-between"><span>36</span><span className="text-amber-400">1′40″</span></div>
            <div className="flex justify-between"><span>40</span><span className="text-amber-400">1′30″</span></div>
          </div>
        </div>
        <p className="text-dark-400 mt-4 text-sm">
          Note: The scribe did not list inverses of integers having a prime factor
          other than 2, 3, or 5 — these would give repeating sexagesimals!
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The Babylonians also had tables of <strong>squares</strong>, <strong>cubes</strong>,{' '}
        <strong>square roots</strong>, <strong>cube roots</strong>, and even roots of
        equations like <InlineMath>{`x^2(x \\pm 1) = a`}</InlineMath>.
      </p>

      {/* Square Root Algorithm */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Extracting Square Roots</h3>

      <p className="text-dark-200 mb-6">
        The Babylonian method for extracting square roots is sometimes called{' '}
        <strong>Heron's method</strong> after Heron of Alexandria (60 AD), who included
        it in his <em>Metrica</em>. However, the Babylonians knew it over 1,500 years earlier!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">The Algorithm</h4>
        <p className="text-dark-200 mb-4">
          To find <InlineMath>{`\\sqrt{a}`}</InlineMath>:
        </p>
        <ol className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">1.</span>
            <span>
              Let <InlineMath>{`a_1`}</InlineMath> be a rational approximation to{' '}
              <InlineMath>{`\\sqrt{a}`}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">2.</span>
            <span>
              Compute <InlineMath>{`a_{n+1} = \\frac{1}{2}\\left(a_n + \\frac{a}{a_n}\\right)`}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">3.</span>
            <span>
              Then <InlineMath>{`a_n \\to \\sqrt{a}`}</InlineMath> as{' '}
              <InlineMath>{`n \\to \\infty`}</InlineMath>.
            </span>
          </li>
        </ol>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Example: √2" />
          <p className="text-sm text-dark-300 mb-2">
            Starting with <InlineMath>{`a_1 = 3/2`}</InlineMath>:
          </p>
          <ul className="text-xs text-dark-400 space-y-1">
            <li><InlineMath>{`a_2 = 17/12`}</InlineMath></li>
            <li><InlineMath>{`a_3 = 577/408`}</InlineMath></li>
            <li><InlineMath>{`a_4 = 665857/470832`}</InlineMath></li>
          </ul>
          <p className="text-xs text-dark-500 mt-2">
            Error after 4 steps: &lt; 10⁻²³
          </p>
        </Card>
        <Card>
          <CardHeader title="Tablet YBC7289" />
          <p className="text-sm text-dark-300 mb-2">
            Dating from about <strong>1600 BC</strong>, this tablet gives:
          </p>
          <p className="text-dark-200 font-mono">
            √2 ≈ 1°24′51″10‴
          </p>
          <p className="text-xs text-dark-400 mt-2">
            In decimal: ≈ 1.41421296...
            <br />
            True value: 1.41421356...
          </p>
        </Card>
      </CardGrid>

      {/* Why Base 60? */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why Base 60?</h3>

      <p className="text-dark-200 mb-6">
        Why did the Babylonians choose 60 as their base? Several advantages:
      </p>

      <ul className="space-y-3 mb-6 text-dark-200">
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">1.</span>
          <span>
            <strong>Highly divisible:</strong> 60 has many divisors (1, 2, 3, 4, 5, 6,
            10, 12, 15, 20, 30, 60), making fractions like 1/2, 1/3, 1/4, 1/5, 1/6
            terminate nicely.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">2.</span>
          <span>
            <strong>Astronomical convenience:</strong> The year has approximately 360
            days, and the circle was divided into 360 degrees (6 × 60).
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-400 font-bold">3.</span>
          <span>
            <strong>Finger counting:</strong> One can count to 60 using the twelve
            finger segments of one hand (excluding thumb) and five fingers of the
            other: 12 × 5 = 60.
          </span>
        </li>
      </ul>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The Sumerians and Babylonians developed a sophisticated{' '}
              <strong>sexagesimal (base 60)</strong> number system around 2000 BC.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              This system survives today in our measurement of <strong>time</strong>{' '}
              (60 seconds/minute, 60 minutes/hour) and <strong>angles</strong>{' '}
              (60 minutes/degree).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The Babylonians invented a <strong>symbol for zero</strong> as a
              placeholder, predating other civilizations by centuries.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              They created extensive <strong>tables</strong> for arithmetic operations
              and knew algorithms for computing square roots to high precision.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Like the Egyptians, they developed practical mathematics but did not
              provide <strong>formal proofs</strong> — that innovation came from the Greeks.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={3} questions={section03Questions} />
    </LessonLayout>
  );
}
