import { useState } from 'react';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Timeline of mathematicians
const mathematicians = [
  { name: 'Zeno', years: '495-435 BC', era: 'ancient', contribution: 'Paradoxes of infinity' },
  { name: 'Eudoxus', years: '408-355 BC', era: 'ancient', contribution: 'Method of exhaustion' },
  { name: 'Archimedes', years: '287-212 BC', era: 'ancient', contribution: 'Calculus precursor' },
  { name: 'Descartes', years: '1596-1650', era: 'early-modern', contribution: 'Analytic geometry' },
  { name: 'Fermat', years: '1601-1665', era: 'early-modern', contribution: 'Number theory' },
  { name: 'Pascal', years: '1623-1662', era: 'early-modern', contribution: 'Probability' },
  { name: 'Newton', years: '1642-1727', era: 'early-modern', contribution: 'Calculus' },
  { name: 'Leibniz', years: '1646-1716', era: 'early-modern', contribution: 'Calculus notation' },
  { name: 'Euler', years: '1707-1783', era: 'enlightenment', contribution: 'Everything' },
  { name: 'Lagrange', years: '1736-1813', era: 'enlightenment', contribution: 'Analytical mechanics' },
  { name: 'Laplace', years: '1749-1827', era: 'enlightenment', contribution: 'Celestial mechanics' },
  { name: 'Gauss', years: '1777-1855', era: 'romantic', contribution: 'Number theory' },
  { name: 'Cauchy', years: '1789-1857', era: 'romantic', contribution: 'Rigorous analysis' },
  { name: 'Abel', years: '1802-1829', era: 'romantic', contribution: 'Algebraic unsolvability' },
  { name: 'Galois', years: '1811-1832', era: 'romantic', contribution: 'Group theory' },
  { name: 'Riemann', years: '1826-1866', era: 'late-modern', contribution: 'Geometry & analysis' },
  { name: 'Weierstrass', years: '1815-1897', era: 'late-modern', contribution: 'Epsilon-delta rigor' },
  { name: 'Cantor', years: '1845-1918', era: 'late-modern', contribution: 'Set theory' },
];

// Interactive Timeline Component
function MathematiciansTimeline() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);

  const eras = [
    { id: 'ancient', name: 'Ancient Greece', color: 'bg-amber-600' },
    { id: 'early-modern', name: 'Early Modern (1600s)', color: 'bg-blue-600' },
    { id: 'enlightenment', name: 'Enlightenment (1700s)', color: 'bg-emerald-600' },
    { id: 'romantic', name: 'Romantic Era (1800s)', color: 'bg-rose-600' },
    { id: 'late-modern', name: 'Late Modern', color: 'bg-purple-600' },
  ];

  const filtered = selectedEra
    ? mathematicians.filter(m => m.era === selectedEra)
    : mathematicians;

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">2,500 Years of Mathematical Giants</h4>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedEra(null)}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            selectedEra === null ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          All Eras
        </button>
        {eras.map(era => (
          <button
            key={era.id}
            onClick={() => setSelectedEra(era.id)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              selectedEra === era.id ? `${era.color} text-white` : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {era.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(m => {
          const era = eras.find(e => e.id === m.era);
          return (
            <div
              key={m.name}
              className="bg-dark-800 rounded-lg p-3 border-l-4 transition-transform hover:scale-105"
              style={{ borderColor: era?.color.replace('bg-', '').replace('-600', '') }}
            >
              <p className="font-semibold text-dark-100">{m.name}</p>
              <p className="text-xs text-dark-400">{m.years}</p>
              <p className="text-sm text-dark-300 mt-1">{m.contribution}</p>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click an era to filter, or explore all {mathematicians.length} mathematicians featured in the book
      </p>
    </div>
  );
}

// Theme Explorer Component
function ThemeExplorer() {
  const [activeTheme, setActiveTheme] = useState(0);

  const themes = [
    {
      title: 'Genius vs. Society',
      description: 'Many mathematicians faced poverty, persecution, or neglect. Galois died in a duel at 20. Abel died penniless at 26. Cantor suffered mental breakdowns from academic attacks.',
      examples: ['Abel rejected by academia', 'Galois\'s papers lost twice', 'Cantor vs. Kronecker feud'],
    },
    {
      title: 'The Nature of Mathematical Discovery',
      description: 'Is mathematics invented or discovered? Bell explores how breakthroughs often come through sudden insight after long unconscious incubation.',
      examples: ['Poincaré\'s bus-step epiphany', 'Hamilton\'s bridge inscription', 'Archimedes\' "Eureka!"'],
    },
    {
      title: 'The Infinite',
      description: 'From Zeno\'s paradoxes to Cantor\'s transfinite numbers, the infinite has been mathematics\' most dangerous and fruitful obsession.',
      examples: ['Zeno\'s Achilles paradox', 'Newton\'s infinitesimals', 'Cantor\'s diagonal argument'],
    },
    {
      title: 'Rigor vs. Intuition',
      description: 'The 19th century saw a crisis: could mathematics be made completely rigorous? Weierstrass, Dedekind, and Cantor attempted to ground all of mathematics in set theory.',
      examples: ['Weierstrass\'s pathological functions', 'Dedekind cuts', 'Russell\'s paradox'],
    },
    {
      title: 'Pure vs. Applied',
      description: 'Should mathematics serve practical needs or pursue abstract beauty? This tension runs through the book, with champions on both sides.',
      examples: ['Fourier\'s heat equation', 'Jacobi\'s "honor of the human spirit"', 'Gauss\'s astronomy'],
    },
  ];

  return (
    <div className="demo-container">
      <h4 className="text-lg font-semibold mb-4">Major Themes</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {themes.map((theme, i) => (
          <button
            key={i}
            onClick={() => setActiveTheme(i)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeTheme === i
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {theme.title}
          </button>
        ))}
      </div>

      <div className="bg-dark-800 rounded-lg p-4">
        <h5 className="font-semibold text-primary-400 mb-2">{themes[activeTheme].title}</h5>
        <p className="text-dark-300 mb-3">{themes[activeTheme].description}</p>
        <div className="flex flex-wrap gap-2">
          {themes[activeTheme].examples.map((ex, i) => (
            <span key={i} className="px-2 py-1 bg-dark-700 rounded text-sm text-dark-400">
              {ex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The lives of mathematicians present human documents fully as
        engrossing as any fiction and far stranger."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — E.T. Bell, Men of Mathematics (1937)
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Welcome to a journey through 2,500 years of mathematical history. E.T. Bell's
        <em> Men of Mathematics</em>, first published in 1937, remains one of the most
        influential and entertaining books ever written about mathematicians and their ideas.
      </p>

      <Callout type="info">
        <p>
          <strong>About this course:</strong> We'll explore Bell's portraits of history's
          greatest mathematicians, from Zeno of Elea (5th century BC) to Georg Cantor (died 1918).
          Along the way, we'll encounter the mathematical ideas that changed humanity's
          understanding of number, space, infinity, and proof itself.
        </p>
      </Callout>

      {/* About the Author */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About E.T. Bell</h2>

      <p className="my-4">
        Eric Temple Bell (1883-1960) was a Scottish-born American mathematician and prolific
        science fiction writer. He taught at Caltech for over 30 years and made contributions
        to number theory, including the "Bell numbers" named in his honor.
      </p>

      <p className="my-4">
        Bell wrote <em>Men of Mathematics</em> not as a dry historical record, but as a
        collection of vivid biographical portraits. His goal was to make mathematics come
        alive through the personalities who created it—their struggles, rivalries,
        obsessions, and moments of brilliant insight.
      </p>

      <Callout type="warning">
        <p>
          <strong>A note on accuracy:</strong> Modern historians have found that Bell
          sometimes embellished or dramatized his accounts. The Galois duel story, for
          instance, is more myth than fact. We'll note these issues as they arise, but
          the book's power to inspire interest in mathematics remains undiminished.
        </p>
      </Callout>

      {/* Timeline */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Cast of Characters</h2>

      <p className="mb-6">
        Bell profiles roughly 30 mathematicians spanning from ancient Greece to the early
        20th century. Here's an interactive overview of the mathematical giants we'll meet:
      </p>

      <MathematiciansTimeline />

      {/* What Makes This Book Special */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Makes This Book Special</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Human Drama</h4>
          <p className="text-sm text-dark-300">
            Mathematics through the lens of human struggle—poverty, rivalry,
            madness, and triumph against the odds.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Big Ideas Made Accessible</h4>
          <p className="text-sm text-dark-300">
            Bell explains complex concepts like non-Euclidean geometry and
            transfinite numbers with clarity and wit.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Historical Sweep</h4>
          <p className="text-sm text-dark-300">
            From Zeno's paradoxes (450 BC) to Cantor's infinities (1890s),
            we see how mathematical ideas evolved over millennia.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-primary-400 mb-2">Quotable Prose</h4>
          <p className="text-sm text-dark-300">
            Bell's writing sparkles with memorable phrases and provocative
            opinions that still generate debate.
          </p>
        </Card>
      </CardGrid>

      {/* Major Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Themes We'll Explore</h2>

      <p className="mb-6">
        Throughout the book, Bell weaves together several recurring themes that illuminate
        both the nature of mathematics and the lives of those who create it:
      </p>

      <ThemeExplorer />

      {/* Course Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How This Course Is Organized</h2>

      <p className="my-4">
        We've organized the course into 10 parts that follow Bell's roughly chronological
        arrangement, grouped by era and theme:
      </p>

      <div className="space-y-3 my-6">
        {[
          { part: 1, title: 'Ancient Mathematics', desc: 'Zeno, Eudoxus, Archimedes' },
          { part: 2, title: 'Birth of Modern Mathematics', desc: 'Descartes, Fermat, Pascal' },
          { part: 3, title: 'The Calculus Creators', desc: 'Newton, Leibniz, The Bernoullis' },
          { part: 4, title: 'The Age of Euler', desc: 'Euler, Lagrange, Laplace' },
          { part: 5, title: 'French Revolutionary Era', desc: 'Monge, Fourier, Poncelet' },
          { part: 6, title: 'The Prince of Mathematicians', desc: 'Gauss, Cauchy, Lobachevsky' },
          { part: 7, title: 'Tragic Geniuses', desc: 'Abel, Jacobi, Hamilton, Galois' },
          { part: 8, title: 'Victorian Algebraists', desc: 'Sylvester & Cayley, Hermite, Kronecker' },
          { part: 9, title: 'The Rigor Revolution', desc: 'Riemann, Kummer, Dedekind, Weierstrass, Boole' },
          { part: 10, title: 'The Modern Era', desc: 'Poincaré, Cantor, and concluding themes' },
        ].map(({ part, title, desc }) => (
          <div key={part} className="flex items-center gap-4 p-3 bg-dark-800 rounded-lg">
            <span className="w-8 h-8 flex items-center justify-center bg-primary-600 rounded-full text-white font-bold text-sm">
              {part}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{title}</p>
              <p className="text-sm text-dark-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Famous Quotes Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Taste of Bell's Prose</h2>

      <div className="space-y-4">
        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "Archimedes will be remembered when Aeschylus is forgotten, because languages
            die and mathematical ideas do not."
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "If there is a God, he's a great mathematician."
          </p>
          <footer className="text-sm text-dark-500 mt-1">— Bell on the Pythagoreans</footer>
        </blockquote>

        <blockquote className="border-l-4 border-rose-500 pl-4 py-2 bg-dark-800 rounded-r-lg">
          <p className="text-dark-300 italic">
            "Galois did not die for love... He died because of the petty spite of
            little men too small to acknowledge the genius of one greater than themselves."
          </p>
        </blockquote>
      </div>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ready to Begin?</h2>

      <p className="my-4">
        In the next section, we'll meet <strong>Zeno of Elea</strong>, the philosopher
        who first confronted humanity with the paradoxes of infinity and motion. His
        puzzles—Achilles and the Tortoise, the Arrow, the Stadium—would haunt
        mathematics for over two millennia.
      </p>

      <Callout type="success">
        <p>
          <strong>What you'll gain:</strong> By the end of this course, you'll understand
          not just who created modern mathematics, but <em>why</em> and <em>how</em>.
          You'll see that mathematics is not a collection of arbitrary rules, but a
          living human endeavor shaped by curiosity, ambition, and the eternal quest
          to understand our universe.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <em>Men of Mathematics</em> (1937) by E.T. Bell is a classic collection of
              biographical portraits of history's greatest mathematicians.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The book spans 2,500 years, from Zeno (5th century BC) to Cantor (died 1918),
              covering roughly 30 mathematicians.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Major themes include: genius vs. society, the nature of discovery, the infinite,
              rigor vs. intuition, and pure vs. applied mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              While some details are embellished, Bell's book remains unsurpassed in making
              mathematical history come alive.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
