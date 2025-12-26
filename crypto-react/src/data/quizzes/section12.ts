import type { QuizQuestion } from './types';

export const section12Quiz = {
  easy: [
    {
      id: 's12-e01',
      type: 'multiple-choice',
      question: 'The equation for a typical elliptic curve used in cryptography is:',
      options: [
        '$y^2 = x^3 + ax + b$',
        '$y = x^2 + a$',
        '$y^2 = x^2 + 1$',
        '$y = mx + b$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Elliptic curves in cryptography use the short Weierstrass form: $y^2 = x^3 + ax + b$.'
    },
    {
      id: 's12-e02',
      type: 'multiple-choice',
      question: 'Why is ECC more efficient than RSA?',
      options: [
        'Same security with much smaller key sizes',
        'It uses simpler math operations',
        'It does not need prime numbers',
        'It has no mathematical basis'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The elliptic curve discrete log problem is harder, allowing 256-bit ECC to match 3072-bit RSA security.'
    },
    {
      id: 's12-e03',
      type: 'multiple-choice',
      question: 'What is the identity element in an elliptic curve group?',
      options: [
        'The point at infinity ($\\mathcal{O}$)',
        'The origin $(0, 0)$',
        'The point $(1, 1)$',
        'There is no identity'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The point at infinity $\\mathcal{O}$ is the identity: $P + \\mathcal{O} = P$ for all points $P$.'
    },
    {
      id: 's12-e04',
      type: 'multiple-choice',
      question: 'What operation replaces exponentiation in elliptic curve cryptography?',
      options: [
        'Scalar multiplication: $nP = P + P + \\cdots + P$',
        'Division of points',
        'Cross product',
        'Matrix exponentiation'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Scalar multiplication (adding a point to itself $n$ times) is the EC equivalent of modular exponentiation.'
    },
    {
      id: 's12-e05',
      type: 'multiple-choice',
      question: 'Bitcoin uses which elliptic curve?',
      options: [
        'secp256k1',
        'P-256 (secp256r1)',
        'Curve25519',
        'brainpoolP256r1'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Bitcoin and most cryptocurrencies use the secp256k1 curve for ECDSA digital signatures.'
    },
    {
      id: 's12-e06',
      type: 'numeric',
      question: 'If a 256-bit ECC key provides equivalent security to a 3072-bit RSA key, what is the ratio of key sizes (RSA/ECC)?',
      correctAnswer: 12,
      numericRange: { min: 10, max: 14 },
      difficulty: 'easy',
      explanation: '$3072 / 256 = 12$. ECC keys are about 12 times smaller for equivalent security.'
    },
    {
      id: 's12-e07',
      type: 'multiple-choice',
      question: 'In point addition, what happens when you add a point $P$ to itself?',
      options: [
        'You perform point doubling to get $2P$',
        'You get the point at infinity',
        'The result is always $(0, 0)$',
        'Addition is undefined'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Adding $P + P = 2P$ uses the point doubling formula, which involves the tangent line at $P$.'
    },
    {
      id: 's12-e08',
      type: 'multiple-choice',
      question: 'What is the elliptic curve discrete log problem (ECDLP)?',
      options: [
        'Given $P$ and $Q = nP$, find the scalar $n$',
        'Find all points on the curve',
        'Compute $P + Q$ for any points',
        'Factor the curve parameters'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'ECDLP: given points $P$ and $Q$ where $Q = nP$, finding the scalar $n$ is computationally hard.'
    },
    {
      id: 's12-e09',
      type: 'multiple-choice',
      question: 'For a point $(x, y)$ on an elliptic curve, its negation $-P$ is:',
      options: [
        '$(x, -y)$',
        '$(-x, y)$',
        '$(-x, -y)$',
        '$(y, x)$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Negating a point reflects it across the x-axis: $-P = (x, -y)$.'
    },
    {
      id: 's12-e10',
      type: 'multiple-choice',
      question: 'What property must an elliptic curve satisfy to be secure?',
      options: [
        'The curve must have a large prime-order subgroup',
        'The curve must pass through the origin',
        'All points must have integer coordinates',
        'The curve must be symmetric about the y-axis'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Security requires a large prime-order subgroup to make the ECDLP hard and prevent small-subgroup attacks.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's12-m01',
      type: 'multiple-choice',
      question: 'In elliptic curve point addition $P + Q$ where $P \\neq Q$, the slope $\\lambda$ is:',
      options: [
        '$\\lambda = \\frac{y_2 - y_1}{x_2 - x_1}$',
        '$\\lambda = \\frac{x_2 - x_1}{y_2 - y_1}$',
        '$\\lambda = y_1 \\cdot y_2$',
        '$\\lambda = x_1 + x_2$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The slope of the line through $P = (x_1, y_1)$ and $Q = (x_2, y_2)$ is $\\lambda = (y_2 - y_1)/(x_2 - x_1)$.'
    },
    {
      id: 's12-m02',
      type: 'multiple-choice',
      question: 'In point doubling ($P + P$), the slope $\\lambda$ is computed as:',
      options: [
        '$\\lambda = \\frac{3x_1^2 + a}{2y_1}$',
        '$\\lambda = \\frac{2y_1}{3x_1^2 + a}$',
        '$\\lambda = x_1 + y_1$',
        '$\\lambda = \\frac{y_1}{x_1}$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The tangent line slope at $P$ is derived from implicit differentiation: $\\lambda = (3x_1^2 + a)/(2y_1)$.'
    },
    {
      id: 's12-m03',
      type: 'numeric',
      question: 'On curve $y^2 = x^3 + 7$ over $\\mathbb{F}_{11}$, if $P = (2, 4)$, verify $P$ is on the curve: $4^2 \\bmod 11 = ?$',
      correctAnswer: 5,
      numericRange: { min: 0, max: 10 },
      difficulty: 'medium',
      explanation: '$4^2 = 16 \\equiv 5 \\pmod{11}$. Also, $2^3 + 7 = 15 \\equiv 4 \\pmod{11}$. Since $5 \\neq 4$, $(2,4)$ is NOT on the curve. The question tests modular arithmetic.'
    },
    {
      id: 's12-m04',
      type: 'multiple-choice',
      question: 'The cofactor of an elliptic curve group is:',
      options: [
        'The ratio of the full group order to the prime subgroup order',
        'The number of points on the curve',
        'The value of $a$ in the curve equation',
        'The field characteristic'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Cofactor $h = \\#E / n$ where $\\#E$ is total points and $n$ is the large prime subgroup order.'
    },
    {
      id: 's12-m05',
      type: 'numeric',
      question: 'secp256k1 has cofactor $h = 1$. If the curve order is $n$ (a prime), how many points of order $n$ exist?',
      correctAnswer: 1,
      numericRange: { min: 1, max: 10 },
      difficulty: 'medium',
      explanation: 'With cofactor 1, the group is cyclic of prime order $n$, so every non-identity point has order $n$. Technically $n-1$ points have order $n$, but all generate the same group.'
    },
    {
      id: 's12-m06',
      type: 'multiple-choice',
      question: 'Curve25519 is named for:',
      options: [
        'The prime $p = 2^{255} - 19$ defining the field',
        'Its security level of 255 bits',
        'The year 2025 when it was standardized',
        'The 25th curve proposed by NIST'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Curve25519 uses the prime field $\\mathbb{F}_p$ where $p = 2^{255} - 19$.'
    },
    {
      id: 's12-m07',
      type: 'numeric',
      question: 'In ECDH, Alice\'s private key is $a$ and Bob\'s public key is $Q_B = bG$. The shared secret point is $aQ_B = a(bG) = (ab)G$. How many scalar multiplications does Alice perform?',
      correctAnswer: 1,
      numericRange: { min: 1, max: 3 },
      difficulty: 'medium',
      explanation: 'Alice computes $aQ_B$ (one scalar multiplication) to get the shared point. She already has $Q_B$ from Bob.'
    },
    {
      id: 's12-m08',
      type: 'multiple-choice',
      question: 'Edwards curves have the form:',
      options: [
        '$x^2 + y^2 = 1 + dx^2y^2$',
        '$y^2 = x^3 + ax + b$',
        '$y^2 + xy = x^3 + ax^2 + b$',
        '$y = x^3 + ax$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Edwards curves use the equation $x^2 + y^2 = 1 + dx^2y^2$, offering fast and complete addition formulas.'
    },
    {
      id: 's12-m09',
      type: 'numeric',
      question: 'If computing $nP$ uses double-and-add with $n$ having $k$ bits, approximately how many point operations (doublings + additions)?',
      correctAnswer: 384,
      numericRange: { min: 350, max: 450 },
      difficulty: 'medium',
      explanation: 'For $k$-bit $n$: $k-1$ doublings and on average $(k-1)/2$ additions. For $k=256$: ~$255 + 127.5 \\approx 383$ operations.'
    },
    {
      id: 's12-m10',
      type: 'multiple-choice',
      question: 'Twisted Edwards curves are used in Ed25519 because:',
      options: [
        'They provide complete, constant-time addition formulas',
        'They have smaller keys than Weierstrass curves',
        'They are faster for key generation only',
        'They work only over binary fields'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Twisted Edwards curves have unified addition formulas with no special cases, enabling constant-time implementations resistant to timing attacks.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's12-h01',
      type: 'multiple-choice',
      question: 'The MOV attack reduces ECDLP to discrete log in $\\mathbb{F}_{p^k}$ by:',
      options: [
        'Using the Weil or Tate pairing to map points to field elements',
        'Factoring the curve order',
        'Finding collisions in point addition',
        'Exploiting weak random number generation'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'MOV uses pairings to embed the curve group into a finite field extension, then solves the easier DLP there. Secure curves have large embedding degree.'
    },
    {
      id: 's12-h02',
      type: 'numeric',
      question: 'secp256k1 has order $n \\approx 2^{256}$. Pollard\'s rho algorithm takes $O(\\sqrt{n})$ operations. Approximately how many bits of security?',
      correctAnswer: 128,
      numericRange: { min: 120, max: 135 },
      difficulty: 'hard',
      explanation: '$\\sqrt{2^{256}} = 2^{128}$, so secp256k1 provides approximately 128 bits of security against ECDLP.'
    },
    {
      id: 's12-h03',
      type: 'multiple-choice',
      question: 'A "twist" of an elliptic curve $E: y^2 = x^3 + ax + b$ is:',
      options: [
        'A curve isomorphic over a field extension but not over the base field',
        'A curve with the same points but different group operation',
        'A curve rotated 90 degrees in the plane',
        'A curve with swapped $a$ and $b$ coefficients'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The quadratic twist $E\'$ is isomorphic to $E$ over $\\mathbb{F}_{p^2}$ but represents a different set of points over $\\mathbb{F}_p$.'
    },
    {
      id: 's12-h04',
      type: 'numeric',
      question: 'For curve $y^2 = x^3 + 7$ over $\\mathbb{F}_p$, the number of points is $\\#E = p + 1 - t$ where $|t| \\leq 2\\sqrt{p}$ (Hasse). If $p = 23$ and $\\#E = 28$, what is $t$?',
      correctAnswer: -4,
      numericRange: { min: -10, max: 10 },
      difficulty: 'hard',
      explanation: '$28 = 23 + 1 - t = 24 - t$, so $t = -4$. This satisfies $|{-4}| \\leq 2\\sqrt{23} \\approx 9.6$.'
    },
    {
      id: 's12-h05',
      type: 'multiple-choice',
      question: 'Side-channel attacks on ECC can be mitigated by:',
      options: [
        'Using constant-time algorithms and randomized projective coordinates',
        'Increasing the key size',
        'Using smaller finite fields',
        'Publishing the private key'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Constant-time scalar multiplication and coordinate randomization prevent timing, power, and cache attacks from leaking the private key.'
    },
    {
      id: 's12-h06',
      type: 'numeric',
      question: 'In projective coordinates, a point is $(X:Y:Z)$ with $x = X/Z$, $y = Y/Z$. To add points without field inversions until the end, how many inversions are needed for $n$ additions?',
      correctAnswer: 1,
      numericRange: { min: 1, max: 5 },
      difficulty: 'hard',
      explanation: 'Projective coordinates allow all additions using only multiplications, with a single inversion at the end to convert back to affine.'
    },
    {
      id: 's12-h07',
      type: 'multiple-choice',
      question: 'The Koblitz curves (e.g., secp256k1 with $a=0$) have the advantage of:',
      options: [
        'Faster point multiplication using the Frobenius endomorphism',
        'Larger group order than random curves',
        'Simpler key generation',
        'Resistance to all known attacks'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Koblitz curves have efficient endomorphisms that speed up scalar multiplication by decomposing scalars.'
    },
    {
      id: 's12-h08',
      type: 'numeric',
      question: 'BLS12-381 is a pairing-friendly curve. The embedding degree is 12, meaning pairings map to $\\mathbb{F}_{p^{12}}$. If $p \\approx 2^{381}$, approximately how many bits is the target field?',
      correctAnswer: 4572,
      numericRange: { min: 4500, max: 4600 },
      difficulty: 'hard',
      explanation: '$12 \\times 381 = 4572$ bits for the extension field $\\mathbb{F}_{p^{12}}$.'
    },
    {
      id: 's12-h09',
      type: 'multiple-choice',
      question: 'Invalid curve attacks exploit:',
      options: [
        'Implementations that don\'t verify points are on the correct curve',
        'Weaknesses in the curve equation itself',
        'Poor random number generation',
        'Integer overflow in point addition'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If implementations don\'t validate that received points lie on the expected curve, attackers can send points from weaker curves.'
    },
    {
      id: 's12-h10',
      type: 'numeric',
      question: 'Ed25519 signatures are 64 bytes (512 bits). If the curve order is ~$2^{252}$ and each of $R$ and $s$ is 32 bytes, how many bits is each component?',
      correctAnswer: 256,
      numericRange: { min: 250, max: 260 },
      difficulty: 'hard',
      explanation: 'Ed25519 signatures consist of a compressed point $R$ (256 bits) and a scalar $s$ (256 bits), totaling 512 bits = 64 bytes.'
    }
  ] as QuizQuestion[]
};
