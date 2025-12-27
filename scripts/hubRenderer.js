/**
 * Hub Renderer - Dynamically renders course sections and cards
 */
import { SECTIONS, COURSES, getCoursesForSection } from './courses.js';

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
 * @returns {string} HTML string
 */
function renderSection(section) {
  const sectionCourses = getCoursesForSection(section.id);

  if (sectionCourses.length === 0) {
    return '';
  }

  const cardsHtml = sectionCourses.map(renderCourseCard).join('');

  return `
    <div class="level-section" data-section="${section.id}">
      <div class="level-header">
        <span class="level-badge ${section.style}">${section.title}</span>
        <span class="level-description">${section.subtitle}</span>
      </div>
      <div class="courses-grid level-${section.style}">
        ${cardsHtml}
      </div>
    </div>
  `;
}

/**
 * Render all course sections into a container
 * @param {string} containerId - ID of the container element
 */
export function renderCourseHub(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const sectionsHtml = SECTIONS.map(renderSection).join('');
  container.innerHTML = sectionsHtml;
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
