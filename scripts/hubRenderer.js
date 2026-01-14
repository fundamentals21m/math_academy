/**
 * Hub Renderer - Dynamically renders course sections and cards
 * Features:
 * - Collapsible category sections (Featured always expanded, others collapsed by default)
 * - User preferences stored in localStorage
 * - Expand All / Collapse All functionality
 * - Dynamic loading from Firebase with fallback to static data
 * - Inline progress indicators on course cards
 */
import { SECTIONS as STATIC_SECTIONS, COURSES as STATIC_COURSES, getCoursesForSection as getStaticCoursesForSection } from './courses.js';

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Sanitize CSS gradient value to prevent CSS injection
 * Only allows safe linear-gradient and radial-gradient patterns
 * @param {string} gradient
 * @returns {string} Sanitized gradient or default
 */
function sanitizeGradient(gradient) {
  const defaultGradient = 'linear-gradient(90deg, #6366f1, #818cf8)';
  if (!gradient || typeof gradient !== 'string') {
    return defaultGradient;
  }

  // Remove any dangerous characters that could break out of CSS context
  // Only allow: letters, numbers, spaces, parentheses, commas, #, %, deg, px, -, .
  const sanitized = gradient.trim();

  // Check for dangerous patterns (urls, expressions, javascript, etc.)
  const dangerousPatterns = [
    /url\s*\(/i,
    /expression\s*\(/i,
    /javascript:/i,
    /data:/i,
    /@import/i,
    /behavior:/i,
    /-moz-binding/i,
    /[<>"'`]/,  // No HTML or quotes that could escape
    /;/,        // No semicolons to prevent property injection
    /\}/,       // No closing braces
    /\{/,       // No opening braces
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(sanitized)) {
      console.warn('Blocked potentially malicious gradient:', gradient);
      return defaultGradient;
    }
  }

  // Must start with a valid gradient function
  if (!sanitized.match(/^(linear-gradient|radial-gradient|conic-gradient)\s*\(/i)) {
    return defaultGradient;
  }

  // Length limit to prevent DoS
  if (sanitized.length > 500) {
    return defaultGradient;
  }

  return sanitized;
}

// Data source - will be populated from Firebase or static data
let DATA_SECTIONS = STATIC_SECTIONS;
let DATA_COURSES = STATIC_COURSES;
let dataSource = 'static'; // 'static' or 'firebase'

// Progress data - loaded from localStorage or Firebase
let progressData = null;
const PROGRESS_STORAGE_KEY = 'magic-internet-math-progress';
const NOSTR_AUTH_KEY = 'nostr-auth';

// Storage key for expanded sections
const STORAGE_KEY = 'hub:expandedSections';

// Default expanded sections (Featured is always expanded)
const DEFAULT_EXPANDED = ['featured'];

/**
 * Load course configuration from Firebase
 * Falls back to static data if Firebase fails
 */
async function loadFromFirebase() {
  try {
    // Check if Firebase is available
    if (!window.callFunction) {
      console.log('Firebase not available, using static data');
      return false;
    }

    const config = await window.callFunction('getCourseConfig');
    
    if (config && config.sections && config.courses) {
      // Map Firebase data to match static data structure
      DATA_SECTIONS = config.sections.map(s => ({
        id: s.id,
        title: s.title,
        subtitle: s.subtitle,
        style: s.style
      }));
      
      DATA_COURSES = config.courses.map(c => ({
        id: c.id,
        title: c.title,
        description: c.description,
        icon: c.icon,
        url: c.url,
        tags: c.tags || [],
        sections: c.sections || [],
        totalSections: c.totalSections,
        progressPrefix: c.progressPrefix,
        leaderboardUrl: c.leaderboardUrl,
        shortName: c.shortName,
        external: c.external,
        progressGradient: c.progressGradient
      }));
      
      dataSource = 'firebase';
      console.log('Loaded course config from Firebase');
      return true;
    }
  } catch (error) {
    console.warn('Failed to load from Firebase, using static data:', error.message);
  }
  return false;
}

/**
 * Load progress data from localStorage or Firebase
 * Sets the progressData module variable
 */
async function loadProgressData() {
  // First check for Nostr auth to fetch from Firebase
  try {
    const nostrAuth = localStorage.getItem(NOSTR_AUTH_KEY);
    if (nostrAuth && window.getUserScores) {
      const auth = JSON.parse(nostrAuth);
      if (auth?.npub) {
        const result = await window.getUserScores(auth.npub);
        if (result && result.scores && result.scores.length > 0) {
          // Convert Firebase scores to progress format
          progressData = { source: 'firebase', scores: result.scores };
          return;
        }
      }
    }
  } catch (e) {
    console.warn('Failed to load progress from Firebase:', e);
  }

  // Fallback to localStorage
  try {
    const data = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (data) {
      const state = JSON.parse(data);
      if (state.user?.sectionsCompleted?.length > 0) {
        progressData = { source: 'localStorage', sectionsCompleted: state.user.sectionsCompleted };
      }
    }
  } catch (e) {
    console.warn('Failed to load progress from localStorage:', e);
  }
}

/**
 * Get progress percentage for a specific course
 * @param {Object} course - The course object
 * @returns {number} Progress percentage (0-100), or 0 if no progress
 */
function getCourseProgress(course) {
  if (!progressData || !course.progressPrefix || !course.totalSections) {
    return 0;
  }

  if (progressData.source === 'firebase' && progressData.scores) {
    // Find score for this course
    const courseScore = progressData.scores.find(s => s.courseId === course.id);
    if (courseScore?.xp) {
      // Estimate progress based on XP (~50 XP per section)
      const estimatedSections = Math.min(Math.floor(courseScore.xp / 50), course.totalSections);
      return (estimatedSections / course.totalSections) * 100;
    }
  } else if (progressData.source === 'localStorage' && progressData.sectionsCompleted) {
    const completed = progressData.sectionsCompleted.filter(id => id.startsWith(course.progressPrefix)).length;
    return (completed / course.totalSections) * 100;
  }

  return 0;
}

/**
 * Get courses for a specific section
 * @param {string} sectionId
 * @returns {Array} Array of courses in that section
 */
function getCoursesForSection(sectionId) {
  return DATA_COURSES.filter(course => course.sections?.includes(sectionId));
}

/**
 * Get the list of currently expanded sections from localStorage
 * @returns {string[]} Array of section IDs that are expanded
 */
function getExpandedSections() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Always ensure 'featured' is included
      if (!parsed.includes('featured')) {
        parsed.push('featured');
      }
      return parsed;
    }
  } catch (e) {
    console.warn('Failed to read expanded sections from localStorage', e);
  }
  return [...DEFAULT_EXPANDED];
}

/**
 * Save the list of expanded sections to localStorage
 * @param {string[]} sections - Array of section IDs that are expanded
 */
function saveExpandedSections(sections) {
  try {
    // Always ensure 'featured' is included when saving
    if (!sections.includes('featured')) {
      sections = [...sections, 'featured'];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  } catch (e) {
    console.warn('Failed to save expanded sections to localStorage', e);
  }
}

/**
 * Toggle a section's expanded state
 * @param {string} sectionId - The section ID to toggle
 */
function toggleSection(sectionId) {
  // Featured is always expanded, cannot be collapsed
  if (sectionId === 'featured') return;

  const expanded = getExpandedSections();
  const index = expanded.indexOf(sectionId);
  
  if (index > -1) {
    expanded.splice(index, 1);
  } else {
    expanded.push(sectionId);
  }
  
  saveExpandedSections(expanded);
  updateSectionUI(sectionId, index === -1);
  updateToggleButtonText();
}

/**
 * Update the UI for a specific section
 * @param {string} sectionId - The section ID to update
 * @param {boolean} isExpanded - Whether the section should be expanded
 */
function updateSectionUI(sectionId, isExpanded) {
  const section = document.querySelector(`[data-section="${sectionId}"]`);
  if (!section) return;

  const header = section.querySelector('.level-header');
  const grid = section.querySelector('.courses-grid');

  if (header) {
    header.classList.toggle('expanded', isExpanded);
  }
  if (grid) {
    grid.classList.toggle('expanded', isExpanded);
  }
}

/**
 * Expand all sections
 */
export function expandAll() {
  const allSectionIds = DATA_SECTIONS.map(s => s.id);
  saveExpandedSections(allSectionIds);
  
  allSectionIds.forEach(id => updateSectionUI(id, true));
  updateToggleButtonText();
}

/**
 * Collapse all sections (except Featured)
 */
export function collapseAll() {
  saveExpandedSections(['featured']);
  
  DATA_SECTIONS.forEach(section => {
    updateSectionUI(section.id, section.id === 'featured');
  });
  updateToggleButtonText();
}

/**
 * Check if all sections are expanded
 * @returns {boolean}
 */
function areAllExpanded() {
  const expanded = getExpandedSections();
  // Only check sections that have courses
  const sectionsWithCourses = DATA_SECTIONS.filter(s => getCoursesForSection(s.id).length > 0);
  return sectionsWithCourses.every(s => expanded.includes(s.id));
}

/**
 * Update the toggle button text based on current state
 */
function updateToggleButtonText() {
  const btn = document.getElementById('toggle-all-sections');
  if (btn) {
    btn.textContent = areAllExpanded() ? 'Collapse All' : 'Expand All';
  }
}

/**
 * Render a single course card
 * @param {Object} course
 * @returns {string} HTML string
 */
function renderCourseCard(course) {
  // Security: Add rel="noopener noreferrer" to external links to prevent tabnabbing
  const targetAttr = course.external ? 'target="_blank" rel="noopener noreferrer"' : '';
  const tagsHtml = (course.tags || [])
    .map(tag => `<span class="course-tag">${escapeHtml(tag)}</span>`)
    .join('');

  // Get progress for this course
  const progress = getCourseProgress(course);
  // Security: Sanitize gradient to prevent CSS injection
  const safeGradient = sanitizeGradient(course.progressGradient);
  const progressHtml = progress > 0
    ? `<div class="card-progress-bar" style="--progress: ${progress}%; --gradient: ${safeGradient}"></div>`
    : '';

  return `
    <a href="${escapeHtml(course.url)}" ${targetAttr} class="course-card ${progress > 0 ? 'has-progress' : ''}" data-course-id="${escapeHtml(course.id)}">
      <div class="course-icon">${escapeHtml(course.icon || '')}</div>
      <h3 class="course-title">${escapeHtml(course.title)}</h3>
      <p class="course-description">${escapeHtml(course.description)}</p>
      <div class="course-meta">${tagsHtml}</div>
      ${progressHtml}
    </a>
  `;
}

/**
 * Render a section with its courses
 * @param {Object} section
 * @param {string[]} expandedSections - List of currently expanded section IDs
 * @returns {string} HTML string
 */
function renderSection(section, expandedSections) {
  const sectionCourses = getCoursesForSection(section.id);

  if (sectionCourses.length === 0) {
    return '';
  }

  const isExpanded = expandedSections.includes(section.id);
  const expandedClass = isExpanded ? 'expanded' : '';
  const cardsHtml = sectionCourses.map(renderCourseCard).join('');
  const chevronIcon = '▶';
  // Security: Escape all user-controlled data
  const safeId = escapeHtml(section.id);
  const safeStyle = escapeHtml(section.style);

  return `
    <div class="level-section" data-section="${safeId}">
      <div class="level-header ${expandedClass}" data-section-id="${safeId}">
        <span class="level-badge ${safeStyle}">${escapeHtml(section.title)}</span>
        <span class="level-description">${escapeHtml(section.subtitle)}</span>
        <span class="course-count">${sectionCourses.length} course${sectionCourses.length !== 1 ? 's' : ''}</span>
        <span class="level-chevron">${chevronIcon}</span>
      </div>
      <div class="courses-grid level-${safeStyle} ${expandedClass}">
        ${cardsHtml}
      </div>
    </div>
  `;
}

/**
 * Render all course sections into a container
 * @param {string} containerId - ID of the container element
 * @param {Object} [options] - Rendering options
 * @param {string} [options.insertFeaturedContentAfter] - Section ID after which to insert featured content placeholder
 * @param {boolean} [options.useFirebase=true] - Whether to try loading from Firebase first
 */
export async function renderCourseHub(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const { insertFeaturedContentAfter, useFirebase = true } = options;

  // Try to load from Firebase if requested
  if (useFirebase) {
    // Show loading state
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem; color: #64748b;">
        <div style="width: 40px; height: 40px; border: 3px solid rgba(99, 102, 241, 0.2); border-top-color: #6366f1; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <p style="margin-top: 1rem;">Loading courses...</p>
      </div>
    `;

    // Wait a moment for Firebase to initialize
    await new Promise(resolve => setTimeout(resolve, 500));
    await loadFromFirebase();
  }

  // Load progress data for inline card progress bars
  await loadProgressData();

  const expandedSections = getExpandedSections();

  let sectionsHtml = '';
  DATA_SECTIONS.forEach(section => {
    sectionsHtml += renderSection(section, expandedSections);
    // Insert featured content placeholders after specified section
    if (insertFeaturedContentAfter && section.id === insertFeaturedContentAfter) {
      sectionsHtml += `
        <div class="featured-section">
          <div class="level-header">
            <span class="level-badge featured">Featured</span>
            <span class="level-description">Mathematical wonder</span>
          </div>
          <div id="featured-content-inline"></div>
        </div>
        <div class="games-row">
          <div class="featured-section game-section">
            <div class="level-header">
              <span class="level-badge featured">Featured Game</span>
              <span class="level-description">Test your modular arithmetic speed</span>
            </div>
            <div id="mod-race-quickplay-inline"></div>
          </div>
          <div class="featured-section game-section">
            <div class="level-header">
              <span class="level-badge featured">Featured Game</span>
              <span class="level-description">Test your base conversion speed</span>
            </div>
            <div id="base-race-quickplay-inline"></div>
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = sectionsHtml;

  // Security: Use addEventListener instead of inline onclick to prevent injection
  container.querySelectorAll('.level-header[data-section-id]').forEach(header => {
    header.addEventListener('click', () => {
      const sectionId = header.dataset.sectionId;
      if (sectionId) toggleSection(sectionId);
    });
    // Add cursor pointer style for clickable headers
    header.style.cursor = 'pointer';
  });

  // Update toggle button text after render
  updateToggleButtonText();
}

/**
 * Initialize the toggle all button
 * Call this after the DOM is ready
 */
export function initToggleButton() {
  const btn = document.getElementById('toggle-all-sections');
  if (btn) {
    btn.addEventListener('click', () => {
      if (areAllExpanded()) {
        collapseAll();
      } else {
        expandAll();
      }
    });
    updateToggleButtonText();
  }
}

/**
 * Render course-specific leaderboard links
 * @param {string} containerId - ID of the container element
 */
export function renderLeaderboardLinks(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const linksHtml = DATA_COURSES
    .filter(course => course.leaderboardUrl)
    .map(course => {
      // Security: Add rel="noopener noreferrer" to external links to prevent tabnabbing
      const targetAttr = course.external ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeHtml(course.leaderboardUrl)}" ${targetAttr} class="btn btn-secondary btn-small">${escapeHtml(course.shortName || course.title)}</a>`;
    })
    .join('');

  container.innerHTML = linksHtml;
}

/**
 * Get the total course count for display
 * @returns {number}
 */
export function getCourseCount() {
  return DATA_COURSES.length;
}

/**
 * Get the total section count across all courses
 * @returns {number}
 */
export function getTotalSectionCount() {
  return DATA_SECTIONS.length;
}

/**
 * Get the current data source
 * @returns {string} 'static' or 'firebase'
 */
export function getDataSource() {
  return dataSource;
}

/**
 * Force reload data from Firebase
 */
export async function reloadFromFirebase() {
  const loaded = await loadFromFirebase();
  if (loaded) {
    // Re-render if already mounted
    const container = document.getElementById('courses-container');
    if (container) {
      const expandedSections = getExpandedSections();
      let sectionsHtml = '';
      DATA_SECTIONS.forEach(section => {
        sectionsHtml += renderSection(section, expandedSections);
      });
      container.innerHTML = sectionsHtml;
      updateToggleButtonText();
    }
  }
  return loaded;
}
