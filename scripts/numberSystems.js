// Numerical Bases Conversion Module

const NumberSystems = {
  bits: [0, 0, 0, 0, 0, 0, 0, 0],

  // Quiz state
  quiz: {
    questions: [],
    currentQuestion: 0,
    score: 0,
    totalQuestions: 5,
    answered: false,
    difficulty: 'easy' // 'easy', 'medium', or 'hard'
  },

  init() {
    this.setupConverter();
    this.setupBitVisualizer();
    // Don't auto-start quiz - wait for difficulty selection
  },

  // Converter functionality
  setupConverter() {
    const decimalInput = document.getElementById('decimalInput');
    const binaryInput = document.getElementById('binaryInput');
    const hexInput = document.getElementById('hexInput');

    if (!decimalInput || !binaryInput || !hexInput) return;

    decimalInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (value === '') {
        this.clearConverter();
        return;
      }
      const decimal = parseInt(value, 10);
      if (!isNaN(decimal) && decimal >= 0) {
        binaryInput.value = decimal.toString(2);
        hexInput.value = decimal.toString(16).toUpperCase();
        this.showConversionSteps(decimal, 'decimal');
      }
    });

    binaryInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (value === '') {
        this.clearConverter();
        return;
      }
      if (/^[01]+$/.test(value)) {
        const decimal = parseInt(value, 2);
        decimalInput.value = decimal;
        hexInput.value = decimal.toString(16).toUpperCase();
        this.showConversionSteps(decimal, 'binary');
      }
    });

    hexInput.addEventListener('input', (e) => {
      const value = e.target.value.trim().toUpperCase();
      if (value === '') {
        this.clearConverter();
        return;
      }
      if (/^[0-9A-F]+$/.test(value)) {
        const decimal = parseInt(value, 16);
        decimalInput.value = decimal;
        binaryInput.value = decimal.toString(2);
        this.showConversionSteps(decimal, 'hex');
      }
    });
  },

  clearConverter() {
    document.getElementById('decimalInput').value = '';
    document.getElementById('binaryInput').value = '';
    document.getElementById('hexInput').value = '';
    document.getElementById('conversionSteps').innerHTML =
      '<span class="muted">Enter a number to see conversion steps...</span>';
  },

  showConversionSteps(decimal, fromBase) {
    const stepsDiv = document.getElementById('conversionSteps');
    const binary = decimal.toString(2);
    const hex = decimal.toString(16).toUpperCase();

    let html = '';

    // Show the conversion from input base
    if (fromBase === 'decimal') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Decimal to Binary:</span>\n`;
      html += this.getDecimalToBinarySteps(decimal);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Decimal to Hex:</span>\n`;
      html += this.getDecimalToHexSteps(decimal);
      html += `</div>`;
    } else if (fromBase === 'binary') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Binary to Decimal:</span>\n`;
      html += this.getBinaryToDecimalSteps(binary);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Binary to Hex:</span>\n`;
      html += this.getBinaryToHexSteps(binary);
      html += `</div>`;
    } else if (fromBase === 'hex') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Hex to Decimal:</span>\n`;
      html += this.getHexToDecimalSteps(hex);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Hex to Binary:</span>\n`;
      html += this.getHexToBinarySteps(hex);
      html += `</div>`;
    }

    stepsDiv.innerHTML = html;
  },

  getDecimalToBinarySteps(decimal) {
    if (decimal === 0) return `0 → <span class="success">0</span>`;

    let steps = [];
    let n = decimal;
    while (n > 0) {
      const remainder = n % 2;
      steps.push(`${n} ÷ 2 = ${Math.floor(n / 2)} remainder ${remainder}`);
      n = Math.floor(n / 2);
    }
    return steps.join('\n') + `\nRead bottom-up: <span class="success">${decimal.toString(2)}</span>`;
  },

  getDecimalToHexSteps(decimal) {
    if (decimal === 0) return `0 → <span class="success">0</span>`;

    let steps = [];
    let n = decimal;
    while (n > 0) {
      const remainder = n % 16;
      const hexChar = remainder.toString(16).toUpperCase();
      steps.push(`${n} ÷ 16 = ${Math.floor(n / 16)} remainder ${remainder}${remainder >= 10 ? ` (${hexChar})` : ''}`);
      n = Math.floor(n / 16);
    }
    return steps.join('\n') + `\nRead bottom-up: <span class="success">${decimal.toString(16).toUpperCase()}</span>`;
  },

  getBinaryToDecimalSteps(binary) {
    const digits = binary.split('').reverse();
    let steps = [];
    let total = 0;

    digits.forEach((digit, i) => {
      const value = parseInt(digit) * Math.pow(2, i);
      total += value;
      if (digit === '1') {
        steps.unshift(`${digit} × 2^${i} = ${value}`);
      }
    });

    if (steps.length === 0) return `All zeros → <span class="success">0</span>`;
    return steps.join(' + ') + ` = <span class="success">${total}</span>`;
  },

  getBinaryToHexSteps(binary) {
    // Pad to multiple of 4
    const padded = binary.padStart(Math.ceil(binary.length / 4) * 4, '0');
    let steps = [];

    for (let i = 0; i < padded.length; i += 4) {
      const group = padded.substr(i, 4);
      const value = parseInt(group, 2);
      const hexChar = value.toString(16).toUpperCase();
      steps.push(`${group} = ${hexChar}`);
    }

    const result = parseInt(binary, 2).toString(16).toUpperCase();
    return steps.join(', ') + ` → <span class="success">${result}</span>`;
  },

  getHexToDecimalSteps(hex) {
    const digits = hex.split('').reverse();
    let steps = [];
    let total = 0;

    digits.forEach((digit, i) => {
      const value = parseInt(digit, 16) * Math.pow(16, i);
      total += value;
      steps.unshift(`${digit} × 16^${i} = ${value}`);
    });

    return steps.join(' + ') + ` = <span class="success">${total}</span>`;
  },

  getHexToBinarySteps(hex) {
    let steps = [];

    for (const digit of hex) {
      const value = parseInt(digit, 16);
      const binary = value.toString(2).padStart(4, '0');
      steps.push(`${digit} = ${binary}`);
    }

    const result = parseInt(hex, 16).toString(2);
    return steps.join(', ') + ` → <span class="success">${result}</span>`;
  },

  // Bit Visualizer functionality
  setupBitVisualizer() {
    const container = document.getElementById('bitVisualizer');
    if (!container) return;

    this.renderBits();
  },

  renderBits() {
    const container = document.getElementById('bitVisualizer');
    if (!container) return;

    container.innerHTML = '';

    this.bits.forEach((bit, index) => {
      const bitDiv = document.createElement('div');
      bitDiv.className = 'bit-cell';
      bitDiv.style.cssText = `
        width: 50px;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${bit ? 'rgba(0, 245, 255, 0.2)' : 'var(--bg)'};
        border: 2px solid ${bit ? 'var(--neon-cyan)' : 'var(--border)'};
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: ${bit ? '0 0 15px rgba(0, 245, 255, 0.3)' : 'none'};
      `;

      const bitValue = document.createElement('div');
      bitValue.style.cssText = `
        font-size: 1.5rem;
        font-weight: 700;
        color: ${bit ? 'var(--neon-cyan)' : 'var(--text-muted)'};
        font-family: monospace;
      `;
      bitValue.textContent = bit;

      const bitPower = document.createElement('div');
      bitPower.style.cssText = `
        font-size: 0.7rem;
        color: var(--text-muted);
        margin-top: 4px;
      `;
      bitPower.textContent = `2^${7 - index}`;

      bitDiv.appendChild(bitValue);
      bitDiv.appendChild(bitPower);

      bitDiv.addEventListener('click', () => {
        this.toggleBit(index);
      });

      bitDiv.addEventListener('mouseenter', () => {
        bitDiv.style.transform = 'scale(1.05)';
      });

      bitDiv.addEventListener('mouseleave', () => {
        bitDiv.style.transform = 'scale(1)';
      });

      container.appendChild(bitDiv);
    });

    this.updateBitDisplay();
  },

  toggleBit(index) {
    this.bits[index] = this.bits[index] ? 0 : 1;
    this.renderBits();
  },

  updateBitDisplay() {
    const decimal = this.bitsToDecimal();
    const hex = decimal.toString(16).toUpperCase().padStart(2, '0');

    document.getElementById('bitDecimal').textContent = decimal;
    document.getElementById('bitHex').textContent = hex;
  },

  bitsToDecimal() {
    return this.bits.reduce((acc, bit, index) => {
      return acc + bit * Math.pow(2, 7 - index);
    }, 0);
  },

  clearBits() {
    this.bits = [0, 0, 0, 0, 0, 0, 0, 0];
    this.renderBits();
  },

  setAllBits() {
    this.bits = [1, 1, 1, 1, 1, 1, 1, 1];
    this.renderBits();
  },

  randomBits() {
    this.bits = this.bits.map(() => Math.round(Math.random()));
    this.renderBits();
  },

  // ==================== Quiz Functionality ====================

  showDifficultySelect() {
    document.getElementById('difficultySelect').style.display = 'block';
    document.getElementById('quizContent').style.display = 'none';
  },

  startQuiz(difficulty) {
    // Check if quiz elements exist
    if (!document.getElementById('quizQuestion')) return;

    this.quiz.difficulty = difficulty || 'easy';
    this.quiz.questions = this.generateQuizQuestions();
    this.quiz.currentQuestion = 0;
    this.quiz.score = 0;
    this.quiz.answered = false;

    // Hide difficulty select, show quiz content
    document.getElementById('difficultySelect').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('changeDifficultyBtn').style.display = 'none';

    this.showQuizQuestion();
  },

  generateQuizQuestions() {
    const questions = [];

    for (let i = 0; i < this.quiz.totalQuestions; i++) {
      questions.push(this.generateQuestion(this.quiz.difficulty));
    }

    return questions;
  },

  generateQuestion(difficulty) {
    // Determine number range based on difficulty
    let min, max;
    switch (difficulty) {
      case 'easy':
        min = 1;
        max = 15;
        break;
      case 'medium':
        min = 16;
        max = 255;
        break;
      case 'hard':
        min = 256;
        max = 4095;
        break;
    }

    // Generate random number
    const value = Math.floor(Math.random() * (max - min + 1)) + min;

    // Choose random conversion direction
    const bases = ['binary', 'decimal', 'hex'];
    const fromIndex = Math.floor(Math.random() * 3);
    let toIndex = Math.floor(Math.random() * 3);
    while (toIndex === fromIndex) {
      toIndex = Math.floor(Math.random() * 3);
    }

    const fromBase = bases[fromIndex];
    const toBase = bases[toIndex];

    // Format the value in the "from" base
    let fromValue;
    switch (fromBase) {
      case 'binary':
        fromValue = value.toString(2);
        break;
      case 'decimal':
        fromValue = value.toString(10);
        break;
      case 'hex':
        fromValue = value.toString(16).toUpperCase();
        break;
    }

    // Get the correct answer in the "to" base
    let correctAnswer;
    switch (toBase) {
      case 'binary':
        correctAnswer = value.toString(2);
        break;
      case 'decimal':
        correctAnswer = value.toString(10);
        break;
      case 'hex':
        correctAnswer = value.toString(16).toUpperCase();
        break;
    }

    // Generate wrong answers
    const options = this.generateOptions(value, toBase, correctAnswer);

    return {
      difficulty,
      fromBase,
      toBase,
      fromValue,
      correctAnswer,
      options,
      value
    };
  },

  generateOptions(value, toBase, correctAnswer) {
    const options = [correctAnswer];
    const usedValues = new Set([value]);

    // Generate 3 wrong answers
    while (options.length < 4) {
      // Generate a nearby wrong value
      let offset;
      if (value < 16) {
        offset = Math.floor(Math.random() * 5) + 1;
      } else if (value < 256) {
        offset = Math.floor(Math.random() * 20) + 1;
      } else {
        offset = Math.floor(Math.random() * 100) + 1;
      }

      // Randomly add or subtract
      const wrongValue = Math.random() < 0.5 ? value + offset : Math.max(1, value - offset);

      if (usedValues.has(wrongValue)) continue;
      usedValues.add(wrongValue);

      let wrongAnswer;
      switch (toBase) {
        case 'binary':
          wrongAnswer = wrongValue.toString(2);
          break;
        case 'decimal':
          wrongAnswer = wrongValue.toString(10);
          break;
        case 'hex':
          wrongAnswer = wrongValue.toString(16).toUpperCase();
          break;
      }

      if (!options.includes(wrongAnswer)) {
        options.push(wrongAnswer);
      }
    }

    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
  },

  showQuizQuestion() {
    const q = this.quiz.questions[this.quiz.currentQuestion];
    this.quiz.answered = false;

    // Update question number and progress
    document.getElementById('quizQuestionNum').textContent =
      `Question ${this.quiz.currentQuestion + 1} of ${this.quiz.totalQuestions}`;
    document.getElementById('quizProgress').style.width =
      `${(this.quiz.currentQuestion / this.quiz.totalQuestions) * 100}%`;
    document.getElementById('quizScore').textContent =
      `Score: ${this.quiz.score}/${this.quiz.currentQuestion}`;

    // Show difficulty badge
    const difficultyEl = document.getElementById('quizDifficulty');
    difficultyEl.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    switch (q.difficulty) {
      case 'easy':
        difficultyEl.style.background = 'rgba(0, 255, 159, 0.2)';
        difficultyEl.style.color = 'var(--neon-green)';
        break;
      case 'medium':
        difficultyEl.style.background = 'rgba(255, 170, 0, 0.2)';
        difficultyEl.style.color = 'var(--warning)';
        break;
      case 'hard':
        difficultyEl.style.background = 'rgba(255, 51, 102, 0.2)';
        difficultyEl.style.color = 'var(--error)';
        break;
    }

    // Format base names nicely
    const baseNames = {
      binary: 'binary',
      decimal: 'decimal',
      hex: 'hexadecimal'
    };

    // Show question
    document.getElementById('quizQuestion').innerHTML =
      `Convert <span style="color: var(--neon-cyan); font-family: monospace; font-size: 1.3rem;">${q.fromValue}</span> from ${baseNames[q.fromBase]} to ${baseNames[q.toBase]}`;

    const optionsContainer = document.getElementById('quizOptions');
    const inputContainer = document.getElementById('quizInputContainer');

    // Show appropriate input method based on difficulty
    if (this.quiz.difficulty === 'hard') {
      // Hard mode: text input
      optionsContainer.style.display = 'none';
      inputContainer.style.display = 'block';
      const answerInput = document.getElementById('quizAnswerInput');
      answerInput.value = '';
      answerInput.disabled = false;
      answerInput.focus();
    } else {
      // Easy/Medium mode: multiple choice
      optionsContainer.style.display = 'block';
      inputContainer.style.display = 'none';
      optionsContainer.innerHTML = '';

      q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.style.fontFamily = 'monospace';
        optionDiv.textContent = option;
        optionDiv.onclick = () => this.selectQuizOption(index);
        optionsContainer.appendChild(optionDiv);
      });
    }

    // Hide feedback and next button
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('quizFeedback').innerHTML = '';
    document.getElementById('nextQuestionBtn').style.display = 'none';
  },

  // Submit answer for hard mode (text input)
  submitAnswer() {
    if (this.quiz.answered) return;

    const answerInput = document.getElementById('quizAnswerInput');
    const userAnswer = answerInput.value.trim().toUpperCase();

    if (!userAnswer) return; // Don't submit empty answers

    this.quiz.answered = true;
    answerInput.disabled = true;

    const q = this.quiz.questions[this.quiz.currentQuestion];
    const correctAnswer = q.correctAnswer.toUpperCase();
    const isCorrect = userAnswer === correctAnswer;

    const feedback = document.getElementById('quizFeedback');

    // Show feedback
    if (isCorrect) {
      this.quiz.score++;
      feedback.className = 'quiz-feedback show correct';
      feedback.innerHTML = `<strong>Correct!</strong> ${q.fromValue} (${q.fromBase}) = ${q.correctAnswer} (${q.toBase})`;
    } else {
      feedback.className = 'quiz-feedback show incorrect';
      feedback.innerHTML = `<strong>Not quite.</strong> You answered: <span style="color: var(--error);">${userAnswer || '(empty)'}</span><br>${q.fromValue} (${q.fromBase}) = <strong>${q.correctAnswer}</strong> (${q.toBase})`;
    }

    // Update score display
    document.getElementById('quizScore').textContent =
      `Score: ${this.quiz.score}/${this.quiz.currentQuestion + 1}`;

    // Show appropriate button
    if (this.quiz.currentQuestion < this.quiz.totalQuestions - 1) {
      document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    } else {
      this.showQuizResults();
    }
  },

  selectQuizOption(index) {
    if (this.quiz.answered) return;
    this.quiz.answered = true;

    const q = this.quiz.questions[this.quiz.currentQuestion];
    const selectedOption = q.options[index];
    const isCorrect = selectedOption === q.correctAnswer;

    const options = document.querySelectorAll('#quizOptions .quiz-option');
    const feedback = document.getElementById('quizFeedback');

    // Mark correct and incorrect options
    options.forEach((opt, i) => {
      opt.onclick = null;
      if (q.options[i] === q.correctAnswer) {
        opt.classList.add('correct');
      } else if (i === index) {
        opt.classList.add('incorrect');
      }
    });

    // Show feedback
    if (isCorrect) {
      this.quiz.score++;
      feedback.className = 'quiz-feedback show correct';
      feedback.innerHTML = `<strong>Correct!</strong> ${q.fromValue} (${q.fromBase}) = ${q.correctAnswer} (${q.toBase})`;
    } else {
      feedback.className = 'quiz-feedback show incorrect';
      feedback.innerHTML = `<strong>Not quite.</strong> ${q.fromValue} (${q.fromBase}) = <strong>${q.correctAnswer}</strong> (${q.toBase})`;
    }

    // Update score display
    document.getElementById('quizScore').textContent =
      `Score: ${this.quiz.score}/${this.quiz.currentQuestion + 1}`;

    // Show appropriate button
    if (this.quiz.currentQuestion < this.quiz.totalQuestions - 1) {
      document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    } else {
      // Quiz complete
      this.showQuizResults();
    }
  },

  nextQuestion() {
    this.quiz.currentQuestion++;
    this.showQuizQuestion();
  },

  showQuizResults() {
    const percentage = Math.round((this.quiz.score / this.quiz.totalQuestions) * 100);

    // Update progress to 100%
    document.getElementById('quizProgress').style.width = '100%';

    let message, messageColor;
    if (percentage === 100) {
      message = "Perfect score! You've mastered base conversions!";
      messageColor = 'var(--neon-green)';
    } else if (percentage >= 80) {
      message = "Excellent work! You have a strong grasp of base conversions.";
      messageColor = 'var(--neon-green)';
    } else if (percentage >= 60) {
      message = "Good effort! Practice a bit more with the converter above.";
      messageColor = 'var(--warning)';
    } else {
      message = "Keep practicing! Use the interactive converter to build your skills.";
      messageColor = 'var(--error)';
    }

    // Hide input container if in hard mode
    if (this.quiz.difficulty === 'hard') {
      document.getElementById('quizInputContainer').style.display = 'none';
    }

    const feedback = document.getElementById('quizFeedback');
    feedback.className = 'quiz-feedback show';
    feedback.style.background = 'var(--bg-card)';
    feedback.style.border = '1px solid var(--border)';
    feedback.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 2rem; font-weight: 700; color: ${messageColor}; margin-bottom: 0.5rem;">
          ${this.quiz.score} / ${this.quiz.totalQuestions}
        </div>
        <div style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 1rem;">
          ${percentage}%
        </div>
        <p style="color: ${messageColor};">${message}</p>
      </div>
    `;

    document.getElementById('nextQuestionBtn').style.display = 'none';
    document.getElementById('changeDifficultyBtn').style.display = 'inline-block';
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  NumberSystems.init();
});

// Export
window.NumberSystems = NumberSystems;
