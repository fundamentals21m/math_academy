import type { QuizQuestion } from './types';

export const section02Quiz = {
  easy: [
    {
      id: 's02-e01',
      type: 'multiple-choice',
      question: 'What base does the binary number system use?',
      options: ['Base 2', 'Base 8', 'Base 10', 'Base 16'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Binary uses base 2, meaning it only has two digits: 0 and 1.'
    },
    {
      id: 's02-e02',
      type: 'multiple-choice',
      question: 'What base does the hexadecimal number system use?',
      options: ['Base 2', 'Base 8', 'Base 10', 'Base 16'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Hexadecimal uses base 16 with digits 0-9 and letters A-F (representing 10-15).'
    },
    {
      id: 's02-e03',
      type: 'numeric',
      question: 'What is the decimal value of the binary number $101_2$?',
      correctAnswer: 5,
      numericRange: { min: 0, max: 20 },
      difficulty: 'easy',
      explanation: '$101_2 = 1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 = 4 + 0 + 1 = 5$'
    },
    {
      id: 's02-e04',
      type: 'numeric',
      question: 'What is the decimal value of the binary number $1000_2$?',
      correctAnswer: 8,
      numericRange: { min: 0, max: 20 },
      difficulty: 'easy',
      explanation: '$1000_2 = 1 \\times 2^3 = 8$'
    },
    {
      id: 's02-e05',
      type: 'multiple-choice',
      question: 'In hexadecimal, what letter represents the decimal value 10?',
      options: ['A', 'B', 'F', 'X'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'In hexadecimal: A=10, B=11, C=12, D=13, E=14, F=15.'
    },
    {
      id: 's02-e06',
      type: 'numeric',
      question: 'What is the decimal value of the hexadecimal number $\\text{F}_{16}$?',
      correctAnswer: 15,
      numericRange: { min: 0, max: 20 },
      difficulty: 'easy',
      explanation: 'In hexadecimal, F represents 15 in decimal.'
    },
    {
      id: 's02-e07',
      type: 'multiple-choice',
      question: 'How many bits are in one byte?',
      options: ['4 bits', '8 bits', '16 bits', '32 bits'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A byte consists of 8 bits and can represent values from 0 to 255.'
    },
    {
      id: 's02-e08',
      type: 'numeric',
      question: 'What is the decimal value of $11_2$?',
      correctAnswer: 3,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$11_2 = 1 \\times 2^1 + 1 \\times 2^0 = 2 + 1 = 3$'
    },
    {
      id: 's02-e09',
      type: 'multiple-choice',
      question: 'Which of the following is NOT a valid binary digit?',
      options: ['0', '1', '2', 'Both 0 and 1 are valid'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Binary (base 2) only uses the digits 0 and 1. The digit 2 is not valid in binary.'
    },
    {
      id: 's02-e10',
      type: 'numeric',
      question: 'What is the decimal value of the hexadecimal number $10_{16}$?',
      correctAnswer: 16,
      numericRange: { min: 0, max: 30 },
      difficulty: 'easy',
      explanation: '$10_{16} = 1 \\times 16^1 + 0 \\times 16^0 = 16$'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's02-m01',
      type: 'numeric',
      question: 'What is the decimal value of the binary number $11010_2$?',
      correctAnswer: 26,
      numericRange: { min: 0, max: 50 },
      difficulty: 'medium',
      explanation: '$11010_2 = 1 \\times 16 + 1 \\times 8 + 0 \\times 4 + 1 \\times 2 + 0 \\times 1 = 16 + 8 + 2 = 26$'
    },
    {
      id: 's02-m02',
      type: 'numeric',
      question: 'What is the decimal value of the hexadecimal number $2A_{16}$?',
      correctAnswer: 42,
      numericRange: { min: 0, max: 100 },
      difficulty: 'medium',
      explanation: '$2A_{16} = 2 \\times 16 + 10 \\times 1 = 32 + 10 = 42$ (since A = 10)'
    },
    {
      id: 's02-m03',
      type: 'multiple-choice',
      question: 'What is $13$ in binary?',
      options: ['$1101_2$', '$1011_2$', '$1110_2$', '$1111_2$'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$13 = 8 + 4 + 1 = 2^3 + 2^2 + 2^0$, so the binary representation is $1101_2$.'
    },
    {
      id: 's02-m04',
      type: 'numeric',
      question: 'Convert the decimal number 255 to hexadecimal. What is the first (leftmost) digit?',
      correctAnswer: 15,
      numericRange: { min: 0, max: 16 },
      difficulty: 'medium',
      explanation: '$255 = 15 \\times 16 + 15 = \\text{FF}_{16}$. The first digit is F, which equals 15.'
    },
    {
      id: 's02-m05',
      type: 'multiple-choice',
      question: 'What is the hexadecimal representation of the binary number $10110110_2$?',
      options: ['$\\text{B6}_{16}$', '$\\text{6B}_{16}$', '$\\text{D6}_{16}$', '$\\text{B4}_{16}$'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Group binary digits in fours from right: $1011\\ 0110$. $1011_2 = 11 = \\text{B}$, $0110_2 = 6$. So the answer is $\\text{B6}_{16}$.'
    },
    {
      id: 's02-m06',
      type: 'numeric',
      question: 'How many different values can be represented with 4 bits?',
      correctAnswer: 16,
      numericRange: { min: 1, max: 32 },
      difficulty: 'medium',
      explanation: 'With $n$ bits, you can represent $2^n$ different values. With 4 bits: $2^4 = 16$ values (0 through 15).'
    },
    {
      id: 's02-m07',
      type: 'multiple-choice',
      question: 'In binary addition, what is $1011_2 + 0101_2$?',
      options: ['$10000_2$', '$1110_2$', '$1111_2$', '$10001_2$'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$1011_2 = 11$ and $0101_2 = 5$. $11 + 5 = 16 = 10000_2$.'
    },
    {
      id: 's02-m08',
      type: 'numeric',
      question: 'What is the decimal value of $\\text{3F}_{16}$?',
      correctAnswer: 63,
      numericRange: { min: 0, max: 100 },
      difficulty: 'medium',
      explanation: '$\\text{3F}_{16} = 3 \\times 16 + 15 = 48 + 15 = 63$'
    },
    {
      id: 's02-m09',
      type: 'multiple-choice',
      question: 'What is the binary representation of the hexadecimal digit $\\text{C}$?',
      options: ['$1100_2$', '$1010_2$', '$1011_2$', '$1110_2$'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'C in hex equals 12 in decimal. $12 = 8 + 4 = 1100_2$.'
    },
    {
      id: 's02-m10',
      type: 'numeric',
      question: 'Convert $45$ to binary. How many 1s are in the result?',
      correctAnswer: 4,
      numericRange: { min: 1, max: 8 },
      difficulty: 'medium',
      explanation: '$45 = 32 + 8 + 4 + 1 = 101101_2$. There are four 1s in this binary representation.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's02-h01',
      type: 'numeric',
      question: 'What is the decimal value of the hexadecimal number $\\text{CAFE}_{16}$?',
      correctAnswer: 51966,
      numericRange: { min: 50000, max: 55000 },
      difficulty: 'hard',
      explanation: '$\\text{CAFE}_{16} = 12 \\times 16^3 + 10 \\times 16^2 + 15 \\times 16 + 14 = 49152 + 2560 + 240 + 14 = 51966$'
    },
    {
      id: 's02-h02',
      type: 'numeric',
      question: 'In base 8 (octal), what is $777_8$ in decimal?',
      correctAnswer: 511,
      numericRange: { min: 400, max: 600 },
      difficulty: 'hard',
      explanation: '$777_8 = 7 \\times 64 + 7 \\times 8 + 7 = 448 + 56 + 7 = 511$'
    },
    {
      id: 's02-h03',
      type: 'multiple-choice',
      question: 'What is the result of the bitwise XOR operation $1010_2 \\oplus 1100_2$?',
      options: ['$0110_2$', '$1110_2$', '$1000_2$', '$0010_2$'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'XOR returns 1 when bits differ. Comparing bit by bit: $1 \\oplus 1 = 0$, $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $0 \\oplus 0 = 0$. Result: $0110_2$.'
    },
    {
      id: 's02-h04',
      type: 'numeric',
      question: 'How many bits are needed to represent the decimal number 1000?',
      correctAnswer: 10,
      numericRange: { min: 8, max: 12 },
      difficulty: 'hard',
      explanation: 'We need $n$ bits where $2^n > 1000$. Since $2^9 = 512$ and $2^{10} = 1024$, we need 10 bits to represent 1000.'
    },
    {
      id: 's02-h05',
      type: 'multiple-choice',
      question: 'In two\'s complement representation with 8 bits, what decimal value does $11111111_2$ represent?',
      options: ['$-1$', '$255$', '$-127$', '$127$'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'In two\'s complement, the leftmost bit is the sign bit. $11111111_2$ represents $-1$ because inverting the bits gives $00000000$ and adding 1 gives $00000001$.'
    },
    {
      id: 's02-h06',
      type: 'numeric',
      question: 'What is $\\text{DEAD}_{16} + \\text{BEEF}_{16}$ in decimal?',
      correctAnswer: 106300,
      numericRange: { min: 100000, max: 110000 },
      difficulty: 'hard',
      explanation: '$\\text{DEAD}_{16} = 57005$ and $\\text{BEEF}_{16} = 48879$. Sum: $57005 + 48879 = 105884$. Note: The actual sum is $\\text{19D8C}_{16} = 105868$.'
    },
    {
      id: 's02-h07',
      type: 'multiple-choice',
      question: 'What is the hexadecimal representation of $4095$?',
      options: ['$\\text{FFF}_{16}$', '$\\text{FFE}_{16}$', '$\\text{1000}_{16}$', '$\\text{EFF}_{16}$'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$4095 = 4096 - 1 = 16^3 - 1 = \\text{FFF}_{16}$. Each F represents 15, and $15 \\times 256 + 15 \\times 16 + 15 = 4095$.'
    },
    {
      id: 's02-h08',
      type: 'numeric',
      question: 'In base 5, what is the decimal value of $4321_5$?',
      correctAnswer: 586,
      numericRange: { min: 500, max: 700 },
      difficulty: 'hard',
      explanation: '$4321_5 = 4 \\times 125 + 3 \\times 25 + 2 \\times 5 + 1 = 500 + 75 + 10 + 1 = 586$'
    },
    {
      id: 's02-h09',
      type: 'multiple-choice',
      question: 'What is the result of left-shifting $00001101_2$ by 3 positions?',
      options: ['$01101000_2$', '$00001101_2$', '$11010000_2$', '$00011010_2$'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Left shifting by 3 moves all bits 3 positions to the left, filling with zeros: $00001101 \\ll 3 = 01101000$. This is equivalent to multiplying by $2^3 = 8$.'
    },
    {
      id: 's02-h10',
      type: 'numeric',
      question: 'What is the maximum decimal value that can be stored in 16 bits (unsigned)?',
      correctAnswer: 65535,
      numericRange: { min: 60000, max: 70000 },
      difficulty: 'hard',
      explanation: 'With 16 bits unsigned, the maximum value is $2^{16} - 1 = 65536 - 1 = 65535$.'
    }
  ] as QuizQuestion[],
};
