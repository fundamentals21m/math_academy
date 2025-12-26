/**
 * Simple Sidebar Navigation for Cryptography Course
 */

const LESSONS = [
  { id: '1', file: '1-intro.html', title: 'Introduction' },
  { id: '1b', file: '1b-numericalbases.html', title: 'Numerical Bases' },
  { id: '2', file: '2-modular.html', title: 'Modular Arithmetic' },
  { id: '3', file: '3-primes.html', title: 'Prime Numbers' },
  { id: '4', file: '4-gcd.html', title: 'GCD' },
  { id: '5', file: '5-inverse.html', title: 'Modular Inverse' },
  { id: '6', file: '6-euler.html', title: "Euler's Totient" },
  { id: '7', file: '7-modexp.html', title: 'Modular Exponentiation' },
  { id: '8', file: '8-discretelog.html', title: 'Discrete Logarithm' },
  { id: '9', file: '9-rsa.html', title: 'RSA' },
  { id: '10', file: '10-diffie-hellman.html', title: 'Diffie-Hellman' },
  { id: '11', file: '11-elliptic.html', title: 'Elliptic Curves' },
  { id: '12', file: '12-quiz.html', title: 'Quiz' },
];

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split('/').pop();
}

function createSidebar() {
  const currentPage = getCurrentPage();

  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <nav class="sidebar-nav">
        ${LESSONS.map(lesson => {
          const isActive = currentPage === lesson.file;
          return `
            <a href="${lesson.file}" class="sidebar-link ${isActive ? 'active' : ''}">
              <span class="sidebar-num">${lesson.id}</span>
              <span class="sidebar-title">${lesson.title}</span>
            </a>
          `;
        }).join('')}
      </nav>
    </aside>
  `;

  const nav = document.querySelector('nav');
  if (nav) {
    nav.insertAdjacentHTML('afterend', sidebarHTML);
  }

  document.body.classList.add('has-sidebar');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createSidebar);
} else {
  createSidebar();
}
