import { Link } from 'react-router-dom';
import { useCourseConfig } from '@shared/contexts/CourseConfigContext';
import { useGamification } from '@shared/gamification';
import { XPDisplay, StreakBadge, ProgressBackup } from '../gamification';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

/**
 * Shared header component for all courses.
 * Displays course name, navigation, and gamification stats.
 *
 * Requires CourseConfigProvider and GamificationProvider to be in the component tree.
 *
 * @example
 * <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
 */
export function Header({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const { name, icon, features, hubUrl, youtubePlaylistUrl } = useCourseConfig();
  // Always call the hook unconditionally, then conditionally use the result
  const gamificationContext = useGamification();
  const gamification = features.gamification ? gamificationContext : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-800">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left: Menu toggle and logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-dark-800 transition-colors"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <svg
              className="w-6 h-6 text-dark-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl">{icon}</span>
            <h1 className="text-lg font-semibold text-dark-100 hidden sm:block">
              {name}
            </h1>
          </Link>
          {youtubePlaylistUrl && (
            <a
              href={youtubePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(255, 0, 0, 0.9)' }}
              title="Watch on YouTube"
            >
              <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href={hubUrl}
            className="text-dark-400 hover:text-dark-100 transition-colors text-sm font-medium"
          >
            Hub
          </a>
          <Link
            to="/"
            className="text-dark-400 hover:text-dark-100 transition-colors text-sm font-medium"
          >
            Home
          </Link>
          {features.theoremIndex && (
            <Link
              to="/theorems"
              className="text-dark-400 hover:text-dark-100 transition-colors text-sm font-medium"
            >
              Theorems
            </Link>
          )}
          {features.interactiveModules && (
            <Link
              to="/interactive"
              className="text-dark-400 hover:text-dark-100 transition-colors text-sm font-medium"
            >
              Interactive
            </Link>
          )}
          {features.leaderboard && (
            <Link
              to="/leaderboard"
              className="text-dark-400 hover:text-dark-100 transition-colors text-sm font-medium"
            >
              Leaderboard
            </Link>
          )}
        </nav>

        {/* Right: Gamification stats and backup */}
        <div className="flex items-center gap-4">
          {features.gamification && gamification && (
            <>
              <StreakBadge streak={gamification.state.streak.currentStreak} />
              <XPDisplay
                xp={gamification.state.user.totalXP}
                level={gamification.state.user.level}
              />
            </>
          )}
          {features.gamification && <ProgressBackup />}
        </div>
      </div>
    </header>
  );
}
