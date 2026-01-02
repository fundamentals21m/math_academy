/**
 * Progress Dashboard - Displays user progress across all courses
 * Reads from localStorage for local progress and Firebase for cross-domain sync
 */
import { COURSES } from './courses.js';

const STORAGE_KEY = 'magic-internet-math-progress';
const NOSTR_AUTH_KEY = 'nostr-auth';

/**
 * Render the progress stats (XP, Level, Streak, Sections)
 * @returns {string} HTML string
 */
function renderProgressStats(state) {
  return `
    <div class="progress-stats-grid">
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #f59e0b;" id="total-xp">${state.user.totalXP.toLocaleString()}</div>
        <div class="progress-stat-label">Total XP</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #6366f1;" id="current-level">${state.user.level}</div>
        <div class="progress-stat-label">Level</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #f97316;" id="current-streak">${state.streak?.currentStreak || 0}</div>
        <div class="progress-stat-label">Day Streak</div>
      </div>
      <div class="card progress-stat-card">
        <div class="progress-stat-value" style="color: #22c55e;" id="sections-completed">${state.user.sectionsCompleted?.length || 0}</div>
        <div class="progress-stat-label">Sections Completed</div>
      </div>
    </div>
  `;
}

/**
 * Render a single course progress card
 * @param {import('./courses.js').Course} course
 * @param {number} completedCount
 * @returns {string} HTML string
 */
function renderCourseProgress(course, completedCount) {
  const percentage = (completedCount / course.totalSections) * 100;
  const unit = course.id === 'crypto' ? 'lessons' : 'sections';
  const gradient = course.progressGradient || 'linear-gradient(90deg, #6366f1, #818cf8)';

  return `
    <div class="card progress-course-card">
      <h4 class="progress-course-title">${course.title}</h4>
      <div class="hub-progress-bar-container">
        <div class="hub-progress-bar-fill" style="background: ${gradient}; width: ${percentage}%;"></div>
      </div>
      <div class="progress-count">${completedCount} / ${course.totalSections} ${unit}</div>
    </div>
  `;
}

/**
 * Render the course progress grid
 * @param {string[]} sectionsCompleted
 * @returns {string} HTML string
 */
function renderCourseProgressGrid(sectionsCompleted) {
  const cardsHtml = COURSES.map(course => {
    const count = sectionsCompleted.filter(id => id.startsWith(course.progressPrefix)).length;
    return renderCourseProgress(course, count);
  }).join('');

  return `<div class="progress-courses-grid">${cardsHtml}</div>`;
}

/**
 * Try to get Nostr auth from localStorage
 */
function getNostrAuth() {
  try {
    const auth = localStorage.getItem(NOSTR_AUTH_KEY);
    if (auth) {
      return JSON.parse(auth);
    }
  } catch (e) {
    console.error('Failed to parse Nostr auth:', e);
  }
  return null;
}

/**
 * Render course progress from Firebase scores
 */
function renderCourseProgressFromScores(scores) {
  const cardsHtml = COURSES.map(course => {
    // Find score for this course
    const courseScore = scores.find(s => s.courseId === course.id);
    const xp = courseScore?.xp || 0;
    // Estimate sections based on XP (rough approximation: ~50 XP per section)
    const estimatedSections = Math.min(Math.floor(xp / 50), course.totalSections);
    return renderCourseProgress(course, estimatedSections);
  }).join('');

  return `<div class="progress-courses-grid">${cardsHtml}</div>`;
}

/**
 * Initialize and render the progress dashboard
 * @param {string} containerId - ID of the container element
 */
export async function renderProgressDashboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  // First try localStorage (for same-domain progress)
  const data = localStorage.getItem(STORAGE_KEY);

  // Check for Nostr auth to fetch from Firebase
  const nostrAuth = getNostrAuth();

  if (nostrAuth?.npub && window.getUserScores) {
    // User is authenticated with Nostr - fetch from Firebase
    try {
      const result = await window.getUserScores(nostrAuth.npub);
      if (result && result.scores && result.scores.length > 0) {
        const totalXP = result.scores.reduce((sum, s) => sum + (s.xp || 0), 0);
        const level = Math.floor(totalXP / 500) + 1;

        const state = {
          user: {
            totalXP,
            level,
            sectionsCompleted: []
          },
          streak: { currentStreak: 0 }
        };

        container.innerHTML = `
          <h2 class="section-title">Your Progress</h2>
          <p class="section-subtitle">Track your learning journey across all courses</p>
          ${renderProgressStats(state)}
          ${renderCourseProgressFromScores(result.scores)}
        `;
        container.style.display = 'block';
        return;
      }
    } catch (e) {
      console.error('Failed to fetch scores from Firebase:', e);
    }
  }

  // Fallback to localStorage
  if (!data) {
    container.style.display = 'none';
    return;
  }

  try {
    const state = JSON.parse(data);
    if (!state.user || state.user.totalXP === 0) {
      container.style.display = 'none';
      return;
    }

    const sectionsCompleted = state.user.sectionsCompleted || [];

    container.innerHTML = `
      <h2 class="section-title">Your Progress</h2>
      <p class="section-subtitle">Track your learning journey across all courses</p>
      ${renderProgressStats(state)}
      ${renderCourseProgressGrid(sectionsCompleted)}
    `;

    container.style.display = 'block';
  } catch (e) {
    console.error('Failed to load progress:', e);
    container.style.display = 'none';
  }
}
