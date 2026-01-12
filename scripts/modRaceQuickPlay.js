/**
 * Mod Racing Quick Play
 * Embedded modular arithmetic mini-game for the hub
 * A simplified single-player version of the full Mod Racing game
 */

/**
 * Create and initialize the Mod Racing quick play game
 * @param {string} containerId - ID of the container element
 */
export function renderModRaceQuickPlay(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  // Configuration
  const QUESTION_COUNT = 5;
  const TIER_CONFIG = {
    name: 'Beginner',
    modulusRange: [2, 5],
    dividendRange: [10, 25],
    basePoints: 50
  };
  const FULL_GAME_URL = 'https://mod-race.vercel.app/';

  // State
  let gamePhase = 'start'; // 'start' | 'playing' | 'results'
  let currentQuestion = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let problems = [];
  let answers = []; // Track correct/incorrect for progress dots
  let questionStartTime = null;
  let userInput = '';
  let feedback = null; // { correct: boolean, message: string }

  // Prime numbers for more interesting problems
  const PRIME_MODULI = [2, 3, 5];

  /**
   * Generate a random integer between min and max (inclusive)
   */
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Select a modulus, preferring primes 60% of the time
   */
  function selectModulus() {
    const [min, max] = TIER_CONFIG.modulusRange;
    const validPrimes = PRIME_MODULI.filter(p => p >= min && p <= max);

    if (validPrimes.length > 0 && Math.random() < 0.6) {
      return validPrimes[Math.floor(Math.random() * validPrimes.length)];
    }
    return randomInt(min, max);
  }

  /**
   * Generate a single problem
   */
  function generateProblem() {
    const modulus = selectModulus();
    const [minDiv, maxDiv] = TIER_CONFIG.dividendRange;

    // Ensure dividend > modulus for non-trivial problem
    const effectiveMin = Math.max(minDiv, modulus + 1);
    let dividend;
    let attempts = 0;

    // Try to get non-zero remainder 90% of the time
    do {
      dividend = randomInt(effectiveMin, maxDiv);
      attempts++;
    } while (attempts < 10 && dividend % modulus === 0 && Math.random() < 0.9);

    return {
      dividend,
      modulus,
      correctAnswer: dividend % modulus,
      displayText: `${dividend} mod ${modulus}`
    };
  }

  /**
   * Generate all problems for the game
   */
  function generateProblems() {
    const probs = [];
    const usedCombos = new Set();

    for (let i = 0; i < QUESTION_COUNT; i++) {
      let problem;
      let attempts = 0;

      do {
        problem = generateProblem();
        attempts++;
      } while (attempts < 5 && usedCombos.has(`${problem.dividend}-${problem.modulus}`));

      usedCombos.add(`${problem.dividend}-${problem.modulus}`);
      probs.push(problem);
    }

    return probs;
  }

  /**
   * Calculate streak multiplier
   */
  function getStreakMultiplier() {
    if (streak >= 10) return 1.5;
    if (streak >= 7) return 1.3;
    if (streak >= 5) return 1.2;
    if (streak >= 3) return 1.1;
    return 1.0;
  }

  /**
   * Calculate speed bonus (0-100% of base points)
   */
  function getSpeedBonus(responseTimeMs) {
    const seconds = responseTimeMs / 1000;
    if (seconds < 1) return 1.0;
    if (seconds < 3) return 0.5 + (3 - seconds) * 0.25;
    if (seconds < 10) return (10 - seconds) * 0.0714;
    return 0;
  }

  /**
   * Start a new game
   */
  function startGame() {
    gamePhase = 'playing';
    currentQuestion = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    problems = generateProblems();
    answers = [];
    userInput = '';
    feedback = null;
    questionStartTime = Date.now();
    render();
  }

  /**
   * Submit an answer
   */
  function submitAnswer() {
    const answer = parseInt(userInput, 10);
    if (isNaN(answer)) return;

    const problem = problems[currentQuestion];
    const responseTime = Date.now() - questionStartTime;
    const isCorrect = answer === problem.correctAnswer;

    answers.push(isCorrect);

    if (isCorrect) {
      streak++;
      if (streak > maxStreak) maxStreak = streak;

      const speedBonus = getSpeedBonus(responseTime);
      const streakMult = getStreakMultiplier();
      const points = Math.round(TIER_CONFIG.basePoints * (1 + speedBonus) * streakMult);
      score += points;

      feedback = {
        correct: true,
        message: `+${points} points!`
      };
    } else {
      streak = 0;
      const penalty = Math.round(TIER_CONFIG.basePoints * 0.5);
      score = Math.max(0, score - penalty);

      feedback = {
        correct: false,
        message: `The answer was ${problem.correctAnswer}`
      };
    }

    userInput = '';

    // Show feedback briefly, then advance
    render();
    setTimeout(() => {
      feedback = null;
      currentQuestion++;

      if (currentQuestion >= QUESTION_COUNT) {
        gamePhase = 'results';
      } else {
        questionStartTime = Date.now();
      }
      render();
    }, 1200);
  }

  /**
   * Generate progress dots HTML
   */
  function renderProgressDots() {
    let dots = '';
    for (let i = 0; i < QUESTION_COUNT; i++) {
      let dotClass = 'mod-race-progress-dot';
      if (i < answers.length) {
        dotClass += answers[i] ? ' correct' : ' incorrect';
      } else if (i === currentQuestion) {
        dotClass += ' current';
      }
      dots += `<div class="${dotClass}"></div>`;
    }
    return dots;
  }

  /**
   * Generate start screen HTML
   */
  function renderStartScreen() {
    return `
      <div class="featured-viz-card">
        <div class="featured-viz-header">
          <h3 class="featured-viz-title">Mod Racing</h3>
          <p class="featured-viz-subtitle">
            Test your modular arithmetic speed! Answer ${QUESTION_COUNT} questions as fast as you can.
            Build streaks for bonus multipliers.
          </p>
        </div>

        <div class="mod-race-start-content">
          <div class="mod-race-example">
            <span class="mod-race-example-label">Example:</span>
            <span class="mod-race-example-problem">17 mod 5 = ?</span>
            <span class="mod-race-example-answer">Answer: 2</span>
          </div>

          <a href="https://cryptography-xi.vercel.app/#/section/3" target="_blank" rel="noopener noreferrer" class="mod-race-learn-link">
            New to modular arithmetic? Learn the basics first
          </a>

          <button id="mod-race-start-btn" class="viz-btn mod-race-start-btn">
            Quick Play (${QUESTION_COUNT} Questions)
          </button>

          <a href="${FULL_GAME_URL}" target="_blank" class="mod-race-full-game-link">
            Or play the full game with 10 difficulty tiers & multiplayer
          </a>
        </div>
      </div>
    `;
  }

  /**
   * Generate playing screen HTML
   */
  function renderPlayingScreen() {
    const problem = problems[currentQuestion];

    return `
      <div class="featured-viz-card">
        <div class="mod-race-progress">
          ${renderProgressDots()}
        </div>

        <div class="mod-race-stats">
          <div class="mod-race-stat">
            <div class="mod-race-stat-value">${score}</div>
            <div class="mod-race-stat-label">Score</div>
          </div>
          <div class="mod-race-stat">
            <div class="mod-race-stat-value mod-race-streak">${streak > 0 ? streak + 'x' : '-'}</div>
            <div class="mod-race-stat-label">Streak</div>
          </div>
          <div class="mod-race-stat">
            <div class="mod-race-stat-value">${currentQuestion + 1}/${QUESTION_COUNT}</div>
            <div class="mod-race-stat-label">Question</div>
          </div>
        </div>

        <div class="mod-race-problem">
          ${problem.displayText} = ?
        </div>

        ${feedback ? `
          <div class="mod-race-feedback ${feedback.correct ? 'correct' : 'incorrect'}">
            ${feedback.message}
          </div>
        ` : `
          <div class="mod-race-input-container">
            <input
              type="number"
              id="mod-race-input"
              class="mod-race-input"
              placeholder="?"
              autocomplete="off"
              inputmode="numeric"
            />
            <button id="mod-race-submit-btn" class="viz-btn">Submit</button>
          </div>
          <p class="mod-race-hint">Press Enter to submit</p>
        `}
      </div>
    `;
  }

  /**
   * Generate results screen HTML
   */
  function renderResultsScreen() {
    const correctCount = answers.filter(a => a).length;
    const accuracy = Math.round((correctCount / QUESTION_COUNT) * 100);

    let message = '';
    if (accuracy === 100) {
      message = 'Perfect! You nailed every question!';
    } else if (accuracy >= 80) {
      message = 'Great job! You really know your mods!';
    } else if (accuracy >= 60) {
      message = 'Good effort! Keep practicing!';
    } else {
      message = 'Keep at it! Practice makes perfect!';
    }

    return `
      <div class="featured-viz-card">
        <div class="featured-viz-header">
          <h3 class="featured-viz-title">Game Complete!</h3>
          <p class="featured-viz-subtitle">${message}</p>
        </div>

        <div class="mod-race-results">
          <div class="mod-race-results-stats">
            <div class="mod-race-result-stat">
              <div class="mod-race-result-value">${score}</div>
              <div class="mod-race-result-label">Final Score</div>
            </div>
            <div class="mod-race-result-stat">
              <div class="mod-race-result-value">${accuracy}%</div>
              <div class="mod-race-result-label">Accuracy</div>
            </div>
            <div class="mod-race-result-stat">
              <div class="mod-race-result-value">${maxStreak}</div>
              <div class="mod-race-result-label">Best Streak</div>
            </div>
          </div>

          <div class="mod-race-progress" style="margin-top: 1.5rem;">
            ${renderProgressDots()}
          </div>
        </div>

        <div class="mod-race-results-actions">
          <button id="mod-race-play-again-btn" class="viz-btn">Play Again</button>
          <a href="${FULL_GAME_URL}" target="_blank" class="viz-btn mod-race-full-btn">
            Play Full Game
          </a>
        </div>

        <p class="mod-race-full-game-cta">
          Want more? The full game has <strong>10 difficulty tiers</strong>,
          <strong>multiplayer racing</strong>, and <strong>leaderboards</strong>!
        </p>

        <a href="https://cryptography-xi.vercel.app/#/section/3" target="_blank" rel="noopener noreferrer" class="mod-race-learn-link">
          Want to learn more? Take the Modular Arithmetic lesson
        </a>
      </div>
    `;
  }

  /**
   * Main render function
   */
  function render() {
    let html = '';

    switch (gamePhase) {
      case 'start':
        html = renderStartScreen();
        break;
      case 'playing':
        html = renderPlayingScreen();
        break;
      case 'results':
        html = renderResultsScreen();
        break;
    }

    container.innerHTML = html;
    setupEventListeners();
  }

  /**
   * Set up event listeners based on game phase
   */
  function setupEventListeners() {
    if (gamePhase === 'start') {
      const startBtn = document.getElementById('mod-race-start-btn');
      if (startBtn) {
        startBtn.addEventListener('click', startGame);
      }
    } else if (gamePhase === 'playing' && !feedback) {
      const input = document.getElementById('mod-race-input');
      const submitBtn = document.getElementById('mod-race-submit-btn');

      if (input) {
        // Focus input
        setTimeout(() => input.focus(), 50);

        // Track input changes
        input.addEventListener('input', (e) => {
          userInput = e.target.value;
        });

        // Handle Enter key
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitAnswer();
          }
        });
      }

      if (submitBtn) {
        submitBtn.addEventListener('click', submitAnswer);
      }
    } else if (gamePhase === 'results') {
      const playAgainBtn = document.getElementById('mod-race-play-again-btn');
      if (playAgainBtn) {
        playAgainBtn.addEventListener('click', startGame);
      }
    }
  }

  // Initial render
  render();
}
