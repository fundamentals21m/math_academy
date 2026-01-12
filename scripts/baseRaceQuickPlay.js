/**
 * Base Conversion Racing Quick Play
 * Embedded base conversion mini-game for the hub
 * A simplified single-player version of the full Base Racing game
 */

/**
 * Create and initialize the Base Racing quick play game
 * @param {string} containerId - ID of the container element
 */
export function renderBaseRaceQuickPlay(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  // Configuration
  const QUESTION_COUNT = 5;
  const TIER_CONFIG = {
    name: 'Beginner',
    bases: [2, 10], // Binary and Decimal only
    range: [1, 15],
    basePoints: 50
  };
  const FULL_GAME_URL = 'https://base-race-opal.vercel.app/';
  const LEARN_URL = 'https://cryptography-xi.vercel.app/#/section/2'; // Numerical Bases lesson

  // Base names for display
  const BASE_NAMES = {
    2: 'binary',
    10: 'decimal',
    16: 'hexadecimal'
  };

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

  /**
   * Generate a random integer between min and max (inclusive)
   */
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Convert a number to a string in the given base (uppercase)
   */
  function numberToBase(num, base) {
    return num.toString(base).toUpperCase();
  }

  /**
   * Select two different bases
   */
  function selectBases(availableBases) {
    const sourceIndex = Math.floor(Math.random() * availableBases.length);
    let targetIndex = Math.floor(Math.random() * availableBases.length);
    while (targetIndex === sourceIndex) {
      targetIndex = Math.floor(Math.random() * availableBases.length);
    }
    return [availableBases[sourceIndex], availableBases[targetIndex]];
  }

  /**
   * Generate a single problem
   */
  function generateProblem() {
    const number = randomInt(TIER_CONFIG.range[0], TIER_CONFIG.range[1]);
    const [sourceBase, targetBase] = selectBases(TIER_CONFIG.bases);

    const sourceDisplay = numberToBase(number, sourceBase);
    const correctAnswer = numberToBase(number, targetBase);
    const sourceName = BASE_NAMES[sourceBase];
    const targetName = BASE_NAMES[targetBase];

    return {
      number,
      sourceBase,
      targetBase,
      sourceDisplay,
      correctAnswer,
      displayText: `Convert ${sourceDisplay} (${sourceName}) to ${targetName}`
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
      } while (attempts < 5 && usedCombos.has(`${problem.number}-${problem.sourceBase}-${problem.targetBase}`));

      usedCombos.add(`${problem.number}-${problem.sourceBase}-${problem.targetBase}`);
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
   * Validate answer (case-insensitive, strip leading zeros)
   */
  function validateAnswer(problem, answer) {
    const normalizedUser = answer.trim().toUpperCase().replace(/^0+/, '') || '0';
    const normalizedCorrect = problem.correctAnswer.replace(/^0+/, '') || '0';
    return normalizedUser === normalizedCorrect;
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
    if (userInput.trim() === '') return;

    const problem = problems[currentQuestion];
    const responseTime = Date.now() - questionStartTime;
    const isCorrect = validateAnswer(problem, userInput);

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
      let dotClass = 'base-race-progress-dot';
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
          <h3 class="featured-viz-title">Base Conversion Racing</h3>
          <p class="featured-viz-subtitle">
            Test your base conversion speed! Convert ${QUESTION_COUNT} numbers between binary and decimal.
            Build streaks for bonus multipliers.
          </p>
        </div>

        <div class="base-race-start-content">
          <div class="base-race-example">
            <span class="base-race-example-label">Example:</span>
            <span class="base-race-example-problem">1010 (binary) = ?</span>
            <span class="base-race-example-answer">Answer: 10</span>
          </div>

          <a href="${LEARN_URL}" target="_blank" rel="noopener noreferrer" class="base-race-learn-link">
            New to binary/hex? Learn the basics first
          </a>

          <button id="base-race-start-btn" class="viz-btn base-race-start-btn">
            Quick Play (${QUESTION_COUNT} Questions)
          </button>

          <a href="${FULL_GAME_URL}" target="_blank" class="base-race-full-game-link">
            Or play the full game with 10 difficulty tiers & hexadecimal
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
        <div class="base-race-progress">
          ${renderProgressDots()}
        </div>

        <div class="base-race-stats">
          <div class="base-race-stat">
            <div class="base-race-stat-value">${score}</div>
            <div class="base-race-stat-label">Score</div>
          </div>
          <div class="base-race-stat">
            <div class="base-race-stat-value base-race-streak">${streak > 0 ? streak + 'x' : '-'}</div>
            <div class="base-race-stat-label">Streak</div>
          </div>
          <div class="base-race-stat">
            <div class="base-race-stat-value">${currentQuestion + 1}/${QUESTION_COUNT}</div>
            <div class="base-race-stat-label">Question</div>
          </div>
        </div>

        <div class="base-race-problem">
          ${problem.displayText}
        </div>
        <div class="base-race-problem-hint">= ?</div>

        ${feedback ? `
          <div class="base-race-feedback ${feedback.correct ? 'correct' : 'incorrect'}">
            ${feedback.message}
          </div>
        ` : `
          <div class="base-race-input-container">
            <input
              type="text"
              id="base-race-input"
              class="base-race-input"
              placeholder="?"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="characters"
              spellcheck="false"
            />
            <button id="base-race-submit-btn" class="viz-btn">Submit</button>
          </div>
          <p class="base-race-hint">Press Enter to submit</p>
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
      message = 'Perfect! You nailed every conversion!';
    } else if (accuracy >= 80) {
      message = 'Great job! You really know your bases!';
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

        <div class="base-race-results">
          <div class="base-race-results-stats">
            <div class="base-race-result-stat">
              <div class="base-race-result-value">${score}</div>
              <div class="base-race-result-label">Final Score</div>
            </div>
            <div class="base-race-result-stat">
              <div class="base-race-result-value">${accuracy}%</div>
              <div class="base-race-result-label">Accuracy</div>
            </div>
            <div class="base-race-result-stat">
              <div class="base-race-result-value">${maxStreak}</div>
              <div class="base-race-result-label">Best Streak</div>
            </div>
          </div>

          <div class="base-race-progress" style="margin-top: 1.5rem;">
            ${renderProgressDots()}
          </div>
        </div>

        <div class="base-race-results-actions">
          <button id="base-race-play-again-btn" class="viz-btn">Play Again</button>
          <a href="${FULL_GAME_URL}" target="_blank" class="viz-btn base-race-full-btn">
            Play Full Game
          </a>
        </div>

        <p class="base-race-full-game-cta">
          Want more? The full game has <strong>10 difficulty tiers</strong>,
          <strong>hexadecimal conversions</strong>, and <strong>leaderboards</strong>!
        </p>

        <a href="${LEARN_URL}" target="_blank" rel="noopener noreferrer" class="base-race-learn-link">
          Want to learn more? Take the Numerical Bases lesson
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
   * Filter input to only allow valid characters
   */
  function filterInput(value) {
    // Only allow 0-9, A-F for hex (but quick play is binary/decimal only)
    return value.toUpperCase().replace(/[^0-9A-F]/g, '');
  }

  /**
   * Set up event listeners based on game phase
   */
  function setupEventListeners() {
    if (gamePhase === 'start') {
      const startBtn = document.getElementById('base-race-start-btn');
      if (startBtn) {
        startBtn.addEventListener('click', startGame);
      }
    } else if (gamePhase === 'playing' && !feedback) {
      const input = document.getElementById('base-race-input');
      const submitBtn = document.getElementById('base-race-submit-btn');

      if (input) {
        // Focus input
        setTimeout(() => input.focus(), 50);

        // Track input changes with filtering
        input.addEventListener('input', (e) => {
          const filtered = filterInput(e.target.value);
          e.target.value = filtered;
          userInput = filtered;
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
      const playAgainBtn = document.getElementById('base-race-play-again-btn');
      if (playAgainBtn) {
        playAgainBtn.addEventListener('click', startGame);
      }
    }
  }

  // Initial render
  render();
}
