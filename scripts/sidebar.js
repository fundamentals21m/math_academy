/**
 * Sidebar Navigation for Magic Internet Math Cryptography Course
 */

const LESSONS = [
  { id: '1', file: '1-intro.html', title: 'Introduction', module: 'Foundations' },
  { id: '1b', file: '1b-numericalbases.html', title: 'Numerical Bases', module: 'Foundations' },
  { id: '2', file: '2-modular.html', title: 'Modular Arithmetic', module: 'Foundations' },
  { id: '3', file: '3-primes.html', title: 'Prime Numbers', module: 'Foundations' },
  { id: '4', file: '4-gcd.html', title: 'Greatest Common Divisor', module: 'Number Theory' },
  { id: '5', file: '5-inverse.html', title: 'Modular Inverse', module: 'Number Theory' },
  { id: '6', file: '6-euler.html', title: "Euler's Totient", module: 'Number Theory' },
  { id: '7', file: '7-modexp.html', title: 'Modular Exponentiation', module: 'Applied' },
  { id: '8', file: '8-discretelog.html', title: 'Discrete Logarithm', module: 'Applied' },
  { id: '9', file: '9-rsa.html', title: 'RSA Encryption', module: 'Cryptography' },
  { id: '10', file: '10-diffie-hellman.html', title: 'Diffie-Hellman', module: 'Cryptography' },
  { id: '11', file: '11-elliptic.html', title: 'Elliptic Curves', module: 'Cryptography' },
  { id: '12', file: '12-quiz.html', title: 'Final Quiz', module: 'Assessment' },
];

const EXTRAS = [
  { id: 'leaderboard', file: 'leaderboard.html', title: 'Leaderboard', icon: '🏆' },
  { id: 'achievements', file: 'achievements.html', title: 'Achievements', icon: '🎯' },
];

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  return filename;
}

function getCompletedLessons() {
  try {
    const stored = localStorage.getItem('magic-internet-math-progress');
    if (!stored) return [];
    const state = JSON.parse(stored);
    return state.user?.sectionsCompleted || [];
  } catch {
    return [];
  }
}

function createSidebar() {
  const currentPage = getCurrentPage();
  const completedLessons = getCompletedLessons();

  // Group lessons by module
  const modules = {};
  LESSONS.forEach(lesson => {
    if (!modules[lesson.module]) {
      modules[lesson.module] = [];
    }
    modules[lesson.module].push(lesson);
  });

  // Create sidebar HTML
  const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <span class="sidebar-title">Cryptography</span>
        <button class="sidebar-close" id="sidebar-close">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
      <nav class="sidebar-nav">
        ${Object.entries(modules).map(([moduleName, lessons]) => `
          <div class="sidebar-section">
            <div class="sidebar-section-title">${moduleName}</div>
            ${lessons.map(lesson => {
              const isActive = currentPage === lesson.file;
              const isCompleted = completedLessons.includes(`crypto:${lesson.id}`);
              return `
                <a href="${lesson.file}" class="sidebar-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                  <span class="sidebar-link-number">${isCompleted ? '' : lesson.id}</span>
                  <span class="sidebar-link-title">${lesson.title}</span>
                </a>
              `;
            }).join('')}
          </div>
        `).join('')}

        <div class="sidebar-section" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          ${EXTRAS.map(extra => {
            const isActive = currentPage === extra.file;
            return `
              <a href="${extra.file}" class="sidebar-link ${isActive ? 'active' : ''}">
                <span class="sidebar-link-number" style="font-size: 1rem;">${extra.icon}</span>
                <span class="sidebar-link-title">${extra.title}</span>
              </a>
            `;
          }).join('')}
        </div>
      </nav>
    </aside>
    <button class="sidebar-toggle" id="sidebar-toggle">
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  `;

  // Insert sidebar after nav
  const nav = document.querySelector('nav');
  if (nav) {
    nav.insertAdjacentHTML('afterend', sidebarHTML);
  }

  // Add has-sidebar class to body
  document.body.classList.add('has-sidebar');

  // Setup event listeners
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  sidebarToggle?.addEventListener('click', openSidebar);
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });
}

// Initialize sidebar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createSidebar);
} else {
  createSidebar();
}
