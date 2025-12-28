/**
 * Cardinality Visualization
 * Demonstrates that the set of integers (Z) and the set of even integers (2Z)
 * have the same cardinality through the bijection f(n) = 2n
 */

/**
 * Create and initialize the cardinality visualization
 * @param {string} containerId - ID of the container element
 */
export function renderCardinalityViz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  // State
  let pairsToShow = 5; // Show -5 to 5 (11 integers)
  let hoveredPair = null;
  let isAnimating = false;
  let animationFrame = null;

  // SVG dimensions
  const width = 800;
  const height = 300;
  const margin = { top: 50, right: 60, bottom: 80, left: 60 };
  const rowGap = 100;

  // Helper to compute x position for a number on the number line
  function getX(n, maxN) {
    const usableWidth = width - margin.left - margin.right;
    const centerX = width / 2;
    const spacing = usableWidth / (2 * maxN + 2);
    return centerX + n * spacing;
  }

  // Generate SVG content
  function generateSVG() {
    const integers = [];
    for (let i = -pairsToShow; i <= pairsToShow; i++) {
      integers.push(i);
    }

    const topY = margin.top + 30;
    const bottomY = topY + rowGap;

    // Build SVG elements
    let paths = '';
    let topNumbers = '';
    let bottomNumbers = '';

    // Draw connection lines (curved paths)
    integers.forEach(n => {
      const x1 = getX(n, pairsToShow);
      const x2 = getX(n, pairsToShow); // Same x position (bijection preserves order)
      const y1 = topY + 15;
      const y2 = bottomY - 15;

      const isHovered = hoveredPair === n;
      const opacity = hoveredPair !== null ? (isHovered ? 1 : 0.2) : 0.6;
      const strokeWidth = isHovered ? 2.5 : 1.5;
      const stroke = isHovered ? '#22d3ee' : '#6366f1';

      // Curved path
      const midY = (y1 + y2) / 2;
      paths += `<path
        d="M ${x1} ${y1} Q ${x1} ${midY}, ${x2} ${y2}"
        stroke="${stroke}"
        stroke-width="${strokeWidth}"
        fill="none"
        opacity="${opacity}"
        class="connection-line"
        data-pair="${n}"
      />`;

      // Arrow head at bottom
      const arrowSize = 6;
      paths += `<polygon
        points="${x2},${y2} ${x2-arrowSize},${y2-arrowSize*1.5} ${x2+arrowSize},${y2-arrowSize*1.5}"
        fill="${stroke}"
        opacity="${opacity}"
        data-pair="${n}"
      />`;
    });

    // Draw top number line (integers)
    integers.forEach(n => {
      const x = getX(n, pairsToShow);
      const isHovered = hoveredPair === n;
      const fill = isHovered ? '#22d3ee' : '#f1f5f9';
      const fontSize = isHovered ? '16' : '14';
      const fontWeight = isHovered ? '700' : '500';

      topNumbers += `<g class="number-group" data-pair="${n}">
        <circle cx="${x}" cy="${topY}" r="${isHovered ? 20 : 16}" fill="${isHovered ? 'rgba(34, 211, 238, 0.2)' : 'rgba(99, 102, 241, 0.15)'}" stroke="${isHovered ? '#22d3ee' : '#6366f1'}" stroke-width="1.5"/>
        <text x="${x}" y="${topY + 5}" text-anchor="middle" fill="${fill}" font-size="${fontSize}" font-weight="${fontWeight}" font-family="Inter, sans-serif">${n}</text>
      </g>`;
    });

    // Draw bottom number line (even integers)
    integers.forEach(n => {
      const x = getX(n, pairsToShow);
      const evenValue = n * 2;
      const isHovered = hoveredPair === n;
      const fill = isHovered ? '#f472b6' : '#f1f5f9';
      const fontSize = isHovered ? '16' : '14';
      const fontWeight = isHovered ? '700' : '500';

      bottomNumbers += `<g class="number-group" data-pair="${n}">
        <circle cx="${x}" cy="${bottomY}" r="${isHovered ? 20 : 16}" fill="${isHovered ? 'rgba(244, 114, 182, 0.2)' : 'rgba(236, 72, 153, 0.15)'}" stroke="${isHovered ? '#f472b6' : '#ec4899'}" stroke-width="1.5"/>
        <text x="${x}" y="${bottomY + 5}" text-anchor="middle" fill="${fill}" font-size="${fontSize}" font-weight="${fontWeight}" font-family="Inter, sans-serif">${evenValue}</text>
      </g>`;
    });

    // Labels
    const labels = `
      <text x="${margin.left - 10}" y="${topY + 5}" text-anchor="end" fill="#94a3b8" font-size="16" font-weight="600" font-family="Inter, sans-serif">Z</text>
      <text x="${margin.left - 10}" y="${bottomY + 5}" text-anchor="end" fill="#94a3b8" font-size="16" font-weight="600" font-family="Inter, sans-serif">2Z</text>
    `;

    // Ellipsis indicators
    const leftEllipsis = `
      <text x="${margin.left + 15}" y="${topY + 5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
      <text x="${margin.left + 15}" y="${bottomY + 5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
    `;
    const rightEllipsis = `
      <text x="${width - margin.right - 15}" y="${topY + 5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
      <text x="${width - margin.right - 15}" y="${bottomY + 5}" fill="#64748b" font-size="16" font-family="Inter, sans-serif">...</text>
    `;

    // Function notation
    const notation = `
      <text x="${width / 2}" y="${(topY + bottomY) / 2 + 5}" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic" font-family="Inter, sans-serif">f(n) = 2n</text>
    `;

    return `
      <svg viewBox="0 0 ${width} ${height}" class="cardinality-svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </linearGradient>
        </defs>
        ${paths}
        ${labels}
        ${leftEllipsis}
        ${rightEllipsis}
        ${topNumbers}
        ${bottomNumbers}
        ${notation}
      </svg>
    `;
  }

  // Generate HTML content
  function render() {
    const totalPairs = 2 * pairsToShow + 1;

    container.innerHTML = `
      <div class="featured-viz-card">
        <div class="featured-viz-header">
          <h3 class="featured-viz-title">Integers & Even Integers: Same Size?</h3>
          <p class="featured-viz-subtitle">A mind-bending result from set theory. How is it possible that the set of even integers has the same number as all integers? Intuitively one would think it has half, but they're equal. It also turns out that all infinities are not equal.</p>
        </div>

        <div class="featured-viz-content">
          ${generateSVG()}
        </div>

        <div class="featured-viz-controls">
          <div class="control-group">
            <label for="pairs-slider" class="control-label">Show pairs:</label>
            <input type="range" id="pairs-slider" min="1" max="10" value="${pairsToShow}" class="viz-slider">
            <span class="control-value">${totalPairs} pairs</span>
          </div>

          <button id="animate-btn" class="viz-btn ${isAnimating ? 'active' : ''}">
            ${isAnimating ? 'Stop' : 'Animate'}
          </button>
        </div>

        <div class="featured-viz-explanation">
          <p>
            <strong>The bijection f(n) = 2n</strong> maps every integer to exactly one even integer,
            and every even integer has exactly one partner. Despite <span class="math">2Z &sub; Z</span>,
            both sets have the same cardinality: <span class="math aleph">&alefsym;<sub>0</sub></span> (aleph-null, countably infinite).
          </p>
          <p class="hint">Hover over any number to highlight its pair!</p>
        </div>
      </div>
    `;

    // Add event listeners
    setupEventListeners();
  }

  // Set up event listeners
  function setupEventListeners() {
    // Slider
    const slider = document.getElementById('pairs-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        pairsToShow = parseInt(e.target.value, 10);
        render();
      });
    }

    // Animate button
    const animateBtn = document.getElementById('animate-btn');
    if (animateBtn) {
      animateBtn.addEventListener('click', toggleAnimation);
    }

    // Hover interactions
    const svgContainer = container.querySelector('.featured-viz-content');
    if (svgContainer) {
      svgContainer.addEventListener('mouseover', (e) => {
        const target = e.target.closest('[data-pair]');
        if (target) {
          hoveredPair = parseInt(target.dataset.pair, 10);
          updateSVG();
        }
      });

      svgContainer.addEventListener('mouseout', (e) => {
        const target = e.target.closest('[data-pair]');
        if (target) {
          hoveredPair = null;
          updateSVG();
        }
      });
    }
  }

  // Update SVG without full re-render
  function updateSVG() {
    const svgContainer = container.querySelector('.featured-viz-content');
    if (svgContainer) {
      svgContainer.innerHTML = generateSVG();
    }
  }

  // Animation
  function toggleAnimation() {
    if (isAnimating) {
      stopAnimation();
    } else {
      startAnimation();
    }
  }

  function startAnimation() {
    isAnimating = true;
    pairsToShow = 1;
    render();

    animationFrame = setInterval(() => {
      if (pairsToShow < 10) {
        pairsToShow++;
        render();
      } else {
        stopAnimation();
      }
    }, 800);
  }

  function stopAnimation() {
    isAnimating = false;
    if (animationFrame) {
      clearInterval(animationFrame);
      animationFrame = null;
    }
    render();
  }

  // Initial render
  render();
}
