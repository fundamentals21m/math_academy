import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';
import { COURSE_NAME } from '@/config';
import { theorems, getCategories, searchTheorems } from '@/data/theorems';
import { curriculum } from '@/data/curriculum';

// Helper to get section info
const getSectionTitle = (sectionId: number): string => {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === sectionId);
    if (section) return section.title;
  }
  return `Section ${sectionId}`;
};

// Group theorems by category
const groupedTheorems = getCategories().map((category) => ({
  category,
  items: theorems.filter((t) => t.category === category),
}));

export default function Theorems() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTheorems = searchQuery
    ? searchTheorems(searchQuery)
    : theorems;

  const displayGroups = searchQuery
    ? [{ category: 'Search Results', items: filteredTheorems }]
    : groupedTheorems;

  // Type badge colors
  const typeColors: Record<string, string> = {
    theorem: 'text-amber-400 bg-amber-500/10',
    definition: 'text-blue-400 bg-blue-500/10',
    lemma: 'text-purple-400 bg-purple-500/10',
    corollary: 'text-green-400 bg-green-500/10',
    proposition: 'text-cyan-400 bg-cyan-500/10',
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">
            Theorems & Definitions
          </h1>
          <p className="text-dark-400 mb-8">
            Quick reference for all theorems and definitions in {COURSE_NAME}
          </p>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search theorems and definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Tip callout */}
          <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20 rounded-2xl p-4 mb-8">
            <p className="text-amber-300 text-sm">
              <span className="font-semibold">Tip:</span> Click any theorem to
              go to its section. Many include interactive proofs!
            </p>
          </div>

          {/* Theorems by category */}
          <div className="space-y-8">
            {displayGroups.map(({ category, items }) => (
              <div key={category} className="space-y-3">
                <h2 className="text-xl font-bold text-dark-200 border-b border-dark-700/50 pb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center text-sm font-bold text-amber-400">
                    {items.length}
                  </span>
                  {category}
                </h2>

                <div className="space-y-2">
                  {items.map((theorem) => (
                    <Link
                      key={theorem.id}
                      to={`/section/${theorem.sectionId}`}
                      className="block group"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-dark-800/40 border border-dark-700/50 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-dark-800/60">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 opacity-40 group-hover:opacity-100 transition-opacity" />

                        <div className="pl-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {theorem.type && (
                              <span
                                className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                                  typeColors[theorem.type] ||
                                  'text-dark-400 bg-dark-700'
                                }`}
                              >
                                {theorem.type}
                              </span>
                            )}
                            <span className="text-[10px] text-dark-500">
                              Section {theorem.sectionId}
                            </span>
                            <span className="text-[10px] text-dark-600">
                              {getSectionTitle(theorem.sectionId)}
                            </span>
                            {theorem.hasProof && (
                              <span className="ml-auto text-[10px] text-amber-500/70 font-medium">
                                Has Proof
                              </span>
                            )}
                          </div>

                          <h3 className="font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                            {theorem.title}
                          </h3>

                          <p className="text-sm text-dark-400 mt-1">
                            {theorem.statement}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTheorems.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              No theorems found matching your search.
            </div>
          )}

          {/* Navigation footer */}
          <div className="mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center">
            <Link
              to="/interactive"
              className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Interactive Modules
            </Link>

            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
