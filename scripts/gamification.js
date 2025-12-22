/**
 * Unified Gamification System for Magic Internet Math
 * Works across all courses: Basic Algebra (ba), Cryptography (crypto), Abstract Algebra (aa)
 */

const STORAGE_KEY = 'magic-internet-math-progress';
const COURSE_PREFIX = 'crypto';

// XP Configuration
const XP_CONFIG = {
  LESSON_VISIT: 10,
  LESSON_COMPLETE: 25,
  QUIZ_PER_CORRECT: 5,
  QUIZ_PERFECT_BONUS: 100,
  DEMO_USE: 5,
};

// Level thresholds
const LEVEL_THRESHOLDS = [0, 100, 250, 500, 850, 1300, 1900, 2650, 3550, 4600];

// Achievement definitions
const ACHIEVEMENTS = [
  { id: 'first-steps', name: 'First Steps', description: 'Complete your first lesson', icon: '🎯', condition: (s) => s.user.sectionsCompleted.length >= 1 },
  { id: 'explorer', name: 'Explorer', description: 'Visit lessons in all 3 courses', icon: '🧭', condition: (s) => hasVisitedAllCourses(s) },
  { id: 'crypto-curious', name: 'Crypto Curious', description: 'Complete 5 cryptography lessons', icon: '🔐', condition: (s) => countCryptoLessons(s) >= 5 },
  { id: 'quiz-master', name: 'Quiz Master', description: 'Get 100% on any quiz', icon: '⭐', condition: (s) => s.user.perfectQuizzes > 0 },
  { id: 'streak-starter', name: 'Streak Starter', description: 'Maintain a 3-day streak', icon: '🔥', condition: (s) => s.streak.currentStreak >= 3 },
  { id: 'week-warrior', name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '💪', condition: (s) => s.streak.currentStreak >= 7 },
  { id: 'curious-mind', name: 'Curious Mind', description: 'Interact with 10 demos', icon: '🔬', condition: (s) => s.user.visualizationsUsed >= 10 },
  { id: 'math-master', name: 'Math Master', description: 'Reach level 10', icon: '🏆', condition: (s) => s.user.level >= 10 },
];

function hasVisitedAllCourses(state) {
  const sections = Object.keys(state.sections);
  const hasBa = sections.some(id => id.startsWith('ba:'));
  const hasCrypto = sections.some(id => id.startsWith('crypto:'));
  const hasAa = sections.some(id => id.startsWith('aa:'));
  return hasBa && hasCrypto && hasAa;
}

function countCryptoLessons(state) {
  return state.user.sectionsCompleted.filter(id => id.startsWith('crypto:')).length;
}

// Get local date string for streak tracking
function getLocalDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Calculate level from XP
function calculateLevel(totalXP) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
}

// Get XP progress to next level
function getXPProgress(totalXP) {
  const level = calculateLevel(totalXP);
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] || (currentThreshold + 1200);
  const current = totalXP - currentThreshold;
  const required = nextThreshold - currentThreshold;
  return { current, required, percentage: Math.round((current / required) * 100) };
}

// Create default state
function createDefaultState() {
  const now = new Date().toISOString();
  const today = getLocalDateString();

  return {
    version: 2,
    user: {
      totalXP: 0,
      level: 1,
      sectionsCompleted: [],
      chaptersCompleted: [],
      quizzesTaken: 0,
      perfectQuizzes: 0,
      visualizationsUsed: 0,
      totalTimeSpentMinutes: 0,
      joinedAt: now,
    },
    sections: {},
    achievements: ACHIEVEMENTS.map(a => ({ id: a.id, unlockedAt: null })),
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: '',
      streakFreezeAvailable: false,
    },
    dailyGoals: {
      date: today,
      xpEarned: 0,
      xpGoal: 50,
      sectionsVisited: 0,
      quizzesTaken: 0,
      isComplete: false,
    },
    lastUpdated: now,
  };
}

// Update streak
function updateStreak(streak) {
  const today = getLocalDateString();
  const lastDate = streak.lastActivityDate;

  if (!lastDate) {
    return {
      ...streak,
      currentStreak: 1,
      longestStreak: Math.max(1, streak.longestStreak),
      lastActivityDate: today,
    };
  }

  if (lastDate === today) {
    return streak; // Already active today
  }

  // Check if yesterday
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  if (lastDate === yesterdayStr) {
    const newStreak = streak.currentStreak + 1;
    return {
      ...streak,
      currentStreak: newStreak,
      longestStreak: Math.max(newStreak, streak.longestStreak),
      lastActivityDate: today,
    };
  }

  // Streak broken
  return {
    ...streak,
    currentStreak: 1,
    lastActivityDate: today,
  };
}

// Main Gamification object
window.Gamification = {
  state: null,
  toastQueue: [],

  // Initialize
  init() {
    this.load();
    this.renderHeader();
    this.checkDailyReset();

    // Track current lesson visit
    const lessonId = this.getCurrentLessonId();
    if (lessonId !== null) {
      this.visitLesson(lessonId);
    }
  },

  // Get current lesson ID from URL
  getCurrentLessonId() {
    const path = window.location.pathname;
    const match = path.match(/(\d+)-/);
    if (match) {
      return parseInt(match[1], 10);
    }
    // Check for quiz page
    if (path.includes('quiz')) {
      return 12; // Quiz is lesson 12
    }
    return null;
  },

  // Load state from localStorage
  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.state = JSON.parse(stored);
        if (this.state.version !== 2) {
          console.warn('State version mismatch, using stored data anyway');
        }
      } else {
        this.state = createDefaultState();
        this.save();
      }
    } catch (e) {
      console.error('Failed to load gamification state:', e);
      this.state = createDefaultState();
    }
  },

  // Save state to localStorage
  save() {
    try {
      this.state.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save gamification state:', e);
    }
  },

  // Check and reset daily goals if needed
  checkDailyReset() {
    const today = getLocalDateString();
    if (this.state.dailyGoals.date !== today) {
      this.state.dailyGoals = {
        date: today,
        xpEarned: 0,
        xpGoal: this.state.dailyGoals.xpGoal,
        sectionsVisited: 0,
        quizzesTaken: 0,
        isComplete: false,
      };
      this.save();
    }
  },

  // Award XP
  awardXP(amount) {
    this.state.user.totalXP += amount;
    const oldLevel = this.state.user.level;
    this.state.user.level = calculateLevel(this.state.user.totalXP);

    this.state.dailyGoals.xpEarned += amount;
    if (this.state.dailyGoals.xpEarned >= this.state.dailyGoals.xpGoal) {
      this.state.dailyGoals.isComplete = true;
    }

    // Check for level up
    if (this.state.user.level > oldLevel) {
      this.showToast(`Level Up! Level ${this.state.user.level}`, '🎉');
    }

    this.state.streak = updateStreak(this.state.streak);
    this.save();
    this.checkAchievements();
    this.renderHeader();
  },

  // Visit lesson
  visitLesson(lessonId) {
    const sectionId = `${COURSE_PREFIX}:${lessonId}`;

    if (!this.state.sections[sectionId]) {
      this.state.sections[sectionId] = {
        sectionId,
        visitedAt: null,
        completedAt: null,
        demosUsed: [],
      };
    }

    // First visit
    if (!this.state.sections[sectionId].visitedAt) {
      this.state.sections[sectionId].visitedAt = new Date().toISOString();
      this.awardXP(XP_CONFIG.LESSON_VISIT);
      this.state.dailyGoals.sectionsVisited++;
    }
  },

  // Complete lesson
  completeLesson(lessonId) {
    const sectionId = `${COURSE_PREFIX}:${lessonId}`;

    if (!this.state.user.sectionsCompleted.includes(sectionId)) {
      this.state.user.sectionsCompleted.push(sectionId);
      if (this.state.sections[sectionId]) {
        this.state.sections[sectionId].completedAt = new Date().toISOString();
      }
      this.awardXP(XP_CONFIG.LESSON_COMPLETE);
    }
  },

  // Record quiz result
  completeQuiz(score, total) {
    const xp = score * XP_CONFIG.QUIZ_PER_CORRECT;
    const isPerfect = score === total;

    if (isPerfect) {
      this.state.user.perfectQuizzes++;
    }

    this.state.user.quizzesTaken++;
    this.state.dailyGoals.quizzesTaken++;

    let totalXP = xp;
    if (isPerfect) {
      totalXP += XP_CONFIG.QUIZ_PERFECT_BONUS;
      this.showToast('Perfect Score! +100 XP Bonus', '⭐');
    }

    this.awardXP(totalXP);

    // Mark quiz lesson as complete
    this.completeLesson(12);
  },

  // Use demo
  useDemo(lessonId, demoName) {
    const sectionId = `${COURSE_PREFIX}:${lessonId}`;

    if (!this.state.sections[sectionId]) {
      this.state.sections[sectionId] = {
        sectionId,
        visitedAt: new Date().toISOString(),
        completedAt: null,
        demosUsed: [],
      };
    }

    if (!this.state.sections[sectionId].demosUsed) {
      this.state.sections[sectionId].demosUsed = [];
    }

    if (!this.state.sections[sectionId].demosUsed.includes(demoName)) {
      this.state.sections[sectionId].demosUsed.push(demoName);
      this.state.user.visualizationsUsed++;
      this.awardXP(XP_CONFIG.DEMO_USE);
    }
  },

  // Check achievements
  checkAchievements() {
    for (const def of ACHIEVEMENTS) {
      const progress = this.state.achievements.find(a => a.id === def.id);
      if (progress && !progress.unlockedAt && def.condition(this.state)) {
        progress.unlockedAt = new Date().toISOString();
        this.showToast(`Achievement: ${def.name}`, def.icon);
      }
    }
    this.save();
  },

  // Show toast notification
  showToast(message, icon = '🎉') {
    const toast = document.createElement('div');
    toast.className = 'gamification-toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Render gamification header
  renderHeader() {
    // Remove existing if present
    const existing = document.querySelector('.gamification-bar');
    if (existing) existing.remove();

    const progress = getXPProgress(this.state.user.totalXP);
    const streak = this.state.streak.currentStreak;

    const bar = document.createElement('div');
    bar.className = 'gamification-bar';
    bar.innerHTML = `
      <div class="gam-streak ${streak > 0 ? 'active' : ''}">
        <span class="gam-icon">🔥</span>
        <span class="gam-value">${streak}</span>
      </div>
      <div class="gam-xp">
        <span class="gam-icon">⭐</span>
        <span class="gam-value">${this.state.user.totalXP.toLocaleString()} XP</span>
      </div>
      <div class="gam-level">
        <span class="gam-label">Lv</span>
        <span class="gam-value">${this.state.user.level}</span>
      </div>
      <div class="gam-progress">
        <div class="gam-progress-bar" style="width: ${progress.percentage}%"></div>
      </div>
    `;

    // Insert after nav
    const nav = document.querySelector('nav');
    if (nav) {
      nav.after(bar);
    }
  },

  // Reset progress (for testing)
  reset() {
    this.state = createDefaultState();
    this.save();
    this.renderHeader();
  }
};

// Add styles
const style = document.createElement('style');
style.textContent = `
  .gamification-bar {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%);
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-family: 'Inter', sans-serif;
    position: sticky;
    top: 60px;
    z-index: 40;
    backdrop-filter: blur(10px);
  }

  .gam-streak, .gam-xp, .gam-level {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .gam-icon {
    font-size: 1rem;
  }

  .gam-value {
    font-weight: 600;
    color: #f1f5f9;
    font-size: 0.875rem;
  }

  .gam-label {
    font-size: 0.75rem;
    color: #94a3b8;
  }

  .gam-streak.active .gam-icon {
    animation: flame 0.5s ease-in-out infinite alternate;
  }

  @keyframes flame {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
  }

  .gam-progress {
    flex: 1;
    max-width: 150px;
    height: 6px;
    background: rgba(148, 163, 184, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }

  .gam-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #06b6d4);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .gamification-toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
    transform: translateX(120%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .gamification-toast.show {
    transform: translateX(0);
  }

  .toast-icon {
    font-size: 1.5rem;
  }

  @media (max-width: 640px) {
    .gamification-bar {
      gap: 1rem;
      padding: 0.5rem;
    }
    .gam-progress {
      display: none;
    }
  }
`;
document.head.appendChild(style);

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Gamification.init());
} else {
  Gamification.init();
}
