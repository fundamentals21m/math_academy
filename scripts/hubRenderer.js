/**
 * Hub Renderer - Dynamically renders course sections and cards
 * Features:
 * - Collapsible category sections (Featured always expanded, others collapsed by default)
 * - User preferences stored in localStorage
 * - Expand All / Collapse All functionality
 */
import { SECTIONS, COURSES, getCoursesForSection } from './courses.js';

// Storage key for expanded sections
const STORAGE_KEY = 'hub:expandedSections';

// Default expanded sections (Featured is always expanded)
const DEFAULT_EXPANDED = ['featured'];

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
  const allSectionIds = SECTIONS.map(s => s.id);
  saveExpandedSections(allSectionIds);
  
  allSectionIds.forEach(id => updateSectionUI(id, true));
  updateToggleButtonText();
}

/**
 * Collapse all sections (except Featured)
 */
export function collapseAll() {
  saveExpandedSections(['featured']);
  
  SECTIONS.forEach(section => {
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
  const sectionsWithCourses = SECTIONS.filter(s => getCoursesForSection(s.id).length > 0);
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
 * @param {import('./courses.js').Course} course
 * @returns {string} HTML string
 */
function renderCourseCard(course) {
  const targetAttr = course.external ? 'target="_blank"' : '';
  const tagsHtml = course.tags
    .map(tag => `<span class="course-tag">${tag}</span>`)
    .join('');

  return `
    <a href="${course.url}" ${targetAttr} class="course-card" data-course-id="${course.id}">
      <div class="course-icon">${course.icon}</div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.description}</p>
      <div class="course-meta">${tagsHtml}</div>
    </a>
  `;
}

/**
 * Render a section with its courses
 * @param {import('./courses.js').Section} section
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

  return `
    <div class="level-section" data-section="${section.id}">
      <div class="level-header ${expandedClass}" onclick="window.hubToggleSection('${section.id}')">
        <span class="level-badge ${section.style}">${section.title}</span>
        <span class="level-description">${section.subtitle}</span>
        <span class="course-count">${sectionCourses.length} course${sectionCourses.length !== 1 ? 's' : ''}</span>
        <span class="level-chevron">${chevronIcon}</span>
      </div>
      <div class="courses-grid level-${section.style} ${expandedClass}">
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
 */
export function renderCourseHub(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const { insertFeaturedContentAfter } = options;
  const expandedSections = getExpandedSections();

  // Expose toggle function globally for onclick handlers
  window.hubToggleSection = toggleSection;

  let sectionsHtml = '';
  SECTIONS.forEach(section => {
    sectionsHtml += renderSection(section, expandedSections);
    // Insert featured content placeholder after specified section
    if (insertFeaturedContentAfter && section.id === insertFeaturedContentAfter) {
      sectionsHtml += `
        <div class="featured-section">
          <div class="level-header">
            <span class="level-badge featured">Featured</span>
            <span class="level-description">Mathematical wonder</span>
          </div>
          <div id="featured-content-inline"></div>
        </div>
      `;
    }
  });

  container.innerHTML = sectionsHtml;

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

  const linksHtml = COURSES
    .filter(course => course.leaderboardUrl)
    .map(course => {
      const targetAttr = course.external ? 'target="_blank"' : '';
      return `<a href="${course.leaderboardUrl}" ${targetAttr} class="btn btn-secondary btn-small">${course.shortName || course.title}</a>`;
    })
    .join('');

  container.innerHTML = linksHtml;
}

/**
 * Get the total course count for display
 * @returns {number}
 */
export function getCourseCount() {
  return COURSES.length;
}

/**
 * Get the total section count across all courses
 * @returns {number}
 */
export function getTotalSectionCount() {
  return SECTIONS.length;
}
