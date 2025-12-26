import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';
import { COURSE_NAME, COURSE_DESCRIPTION, FEATURES } from '@/config';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">📐</span>
            <h1 className="text-4xl font-bold text-dark-100 mb-4">Introduction to Real Analysis</h1>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              A rigorous introduction to real analysis covering limits, continuity, differentiation, and integration through formal proofs
            </p>
          </div>

          {/* Course Overview */}
          <div className="bg-dark-800/50 border border-dark-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark-100 mb-6">Course Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Part 1: Foundations of Analysis</h3>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    The Real Number System
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Mathematical Induction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Finite and Infinite Sets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Functions and Relations
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Part 2: Sequences and Series</h3>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Sequences and Their Limits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Infinite Series
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Convergence Tests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Power Series
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-dark-400 mb-6">
                Based on Kenneth A. Ross's "Elementary Analysis" - this course provides a rigorous foundation
                in real analysis with formal proofs and mathematical reasoning.
              </p>

              <div className="flex justify-center gap-4">
                <Link
                  to="/section/1"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Start Learning
                </Link>
                {FEATURES.leaderboard && (
                  <Link
                    to="/leaderboard"
                    className="bg-dark-700 hover:bg-dark-600 text-dark-200 px-6 py-3 rounded-lg font-medium transition-colors border border-dark-600"
                  >
                    View Leaderboard
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
