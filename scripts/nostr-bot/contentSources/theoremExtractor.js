/**
 * Extract theorems from course files and convert LaTeX to readable text
 */

import { glob } from 'glob';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MATH_ACADEMY_ROOT = join(__dirname, '..', '..', '..');

// Course metadata for URLs and display names
// Note: URLs should NOT end with trailing slash to avoid double-slash when appending /#/section/
const COURSE_METADATA = {
  'gauss': { name: 'Disquisitiones Arithmeticae', url: 'https://gauss-deploy.vercel.app' },
  'euclid': { name: "Euclid's Elements", url: 'https://euclid-deploy.vercel.app' },
  'calc1-course': { name: 'Calculus I', url: 'https://calc1-deploy.vercel.app' },
  'calc_lib_art': { name: 'Calculus: A Liberal Art', url: 'https://mathacademy-cyan.vercel.app/calc-lib-art-deploy' },
  'calc_easy': { name: 'Beginner Calculus', url: 'https://mathacademy-cyan.vercel.app/calceasy-deploy' },
  'linalg': { name: 'Linear Algebra', url: 'https://mathacademy-cyan.vercel.app/linalg-deploy' },
  'advanced-linalg': { name: 'Advanced Linear Algebra', url: 'https://mathacademy-cyan.vercel.app/advlinalg-deploy' },
  'abstract-algebra': { name: 'Abstract Algebra', url: 'https://mathacademy-cyan.vercel.app/aa-deploy' },
  'real-analysis': { name: 'Real Analysis', url: 'https://ra-deploy-murex.vercel.app' },
  'crypto-react': { name: 'Cryptography Math', url: 'https://cryptography-xi.vercel.app' },
  'why-math': { name: 'Why Math?', url: 'https://mathacademy-cyan.vercel.app/why-math-deploy' },
  'four-pillars': { name: 'Four Pillars of Geometry', url: 'https://four-pillars-deploy.vercel.app' },
  'islr': { name: 'Intro to Statistical Learning', url: 'https://mathacademy-cyan.vercel.app/islr-deploy' },
  'west-graphs': { name: 'Introduction to Graph Theory', url: 'https://mathacademy-cyan.vercel.app/west-graphs-deploy' },
  'numbers-geometry-course': { name: 'Numbers and Geometry', url: 'https://numbers-geometry-deploy.vercel.app' },
  'koblitz-course': { name: 'Algebraic Number Theory', url: 'https://mathacademy-cyan.vercel.app/koblitz-course-deploy' },
  'thales': { name: 'Thales to Euclid', url: 'https://mathacademy-cyan.vercel.app/thales-deploy' },
  'human-action': { name: 'Human Action', url: 'https://human-action-deploy.vercel.app' },
  'man-econ-state': { name: 'Man, Economy, and State', url: 'https://man-econ-state-deploy.vercel.app' },
  'road-to-serfdom': { name: 'The Road to Serfdom', url: 'https://road-to-serfdom-deploy.vercel.app' },
  'atlas-shrugged': { name: 'Atlas Shrugged', url: 'https://atlas-shrugged-deploy.vercel.app' },
  'men-of-math-course': { name: 'Men of Mathematics', url: 'https://mathacademy-cyan.vercel.app/mom-deploy' },
};

/**
 * Convert LaTeX notation to readable plain text
 */
export function convertLatexToText(latex) {
  if (!latex) return '';

  let result = latex;

  // Remove display math delimiters
  result = result.replace(/\$\$(.*?)\$\$/g, '$1');

  // Process inline math - remove $ delimiters but keep content
  result = result.replace(/\$([^$]+)\$/g, (_, content) => convertMathContent(content));

  // Clean up remaining backslashes and braces
  result = result.replace(/\\{/g, '{');
  result = result.replace(/\\}/g, '}');
  result = result.replace(/\\ /g, ' ');
  result = result.replace(/\\,/g, ' ');
  result = result.replace(/\\;/g, ' ');
  result = result.replace(/\\!/g, '');
  result = result.replace(/\\quad/g, '  ');
  result = result.replace(/\\qquad/g, '    ');

  // Clean up multiple spaces and newlines
  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

/**
 * Convert math content (inside $ delimiters)
 */
function convertMathContent(content) {
  let result = content;

  // Blackboard bold letters
  result = result.replace(/\\mathbb\{R\}/g, 'R');
  result = result.replace(/\\mathbb\{N\}/g, 'N');
  result = result.replace(/\\mathbb\{Z\}/g, 'Z');
  result = result.replace(/\\mathbb\{Q\}/g, 'Q');
  result = result.replace(/\\mathbb\{C\}/g, 'C');
  result = result.replace(/\\mathbb\{F\}/g, 'F');

  // Greek letters (lowercase)
  result = result.replace(/\\alpha/g, 'alpha');
  result = result.replace(/\\beta/g, 'beta');
  result = result.replace(/\\gamma/g, 'gamma');
  result = result.replace(/\\delta/g, 'delta');
  result = result.replace(/\\epsilon/g, 'epsilon');
  result = result.replace(/\\varepsilon/g, 'epsilon');
  result = result.replace(/\\zeta/g, 'zeta');
  result = result.replace(/\\eta/g, 'eta');
  result = result.replace(/\\theta/g, 'theta');
  result = result.replace(/\\iota/g, 'iota');
  result = result.replace(/\\kappa/g, 'kappa');
  result = result.replace(/\\lambda/g, 'lambda');
  result = result.replace(/\\mu/g, 'mu');
  result = result.replace(/\\nu/g, 'nu');
  result = result.replace(/\\xi/g, 'xi');
  result = result.replace(/\\pi/g, 'pi');
  result = result.replace(/\\rho/g, 'rho');
  result = result.replace(/\\sigma/g, 'sigma');
  result = result.replace(/\\tau/g, 'tau');
  result = result.replace(/\\upsilon/g, 'upsilon');
  result = result.replace(/\\phi/g, 'phi');
  result = result.replace(/\\varphi/g, 'phi');
  result = result.replace(/\\chi/g, 'chi');
  result = result.replace(/\\psi/g, 'psi');
  result = result.replace(/\\omega/g, 'omega');

  // Greek letters (uppercase)
  result = result.replace(/\\Gamma/g, 'Gamma');
  result = result.replace(/\\Delta/g, 'Delta');
  result = result.replace(/\\Theta/g, 'Theta');
  result = result.replace(/\\Lambda/g, 'Lambda');
  result = result.replace(/\\Xi/g, 'Xi');
  result = result.replace(/\\Pi/g, 'Pi');
  result = result.replace(/\\Sigma/g, 'Sigma');
  result = result.replace(/\\Phi/g, 'Phi');
  result = result.replace(/\\Psi/g, 'Psi');
  result = result.replace(/\\Omega/g, 'Omega');

  // Relations
  result = result.replace(/\\equiv/g, '=');
  result = result.replace(/\\approx/g, '~');
  result = result.replace(/\\sim/g, '~');
  result = result.replace(/\\cong/g, '=');
  result = result.replace(/\\neq/g, '!=');
  result = result.replace(/\\ne/g, '!=');
  result = result.replace(/\\leq/g, '<=');
  result = result.replace(/\\le/g, '<=');
  result = result.replace(/\\geq/g, '>=');
  result = result.replace(/\\ge/g, '>=');
  result = result.replace(/\\ll/g, '<<');
  result = result.replace(/\\gg/g, '>>');
  result = result.replace(/\\subset/g, 'subset');
  result = result.replace(/\\subseteq/g, 'subset=');
  result = result.replace(/\\supset/g, 'superset');
  result = result.replace(/\\supseteq/g, 'superset=');
  result = result.replace(/\\in/g, 'in');
  result = result.replace(/\\notin/g, 'not in');
  result = result.replace(/\\mid/g, '|');
  result = result.replace(/\\nmid/g, 'does not divide');
  result = result.replace(/\\perp/g, 'perp');
  result = result.replace(/\\parallel/g, '||');

  // Operators
  result = result.replace(/\\cdot/g, '*');
  result = result.replace(/\\times/g, 'x');
  result = result.replace(/\\div/g, '/');
  result = result.replace(/\\pm/g, '+/-');
  result = result.replace(/\\mp/g, '-/+');
  result = result.replace(/\\oplus/g, '+');
  result = result.replace(/\\otimes/g, 'x');
  result = result.replace(/\\circ/g, 'o');
  result = result.replace(/\\bullet/g, '*');
  result = result.replace(/\\star/g, '*');
  result = result.replace(/\\cap/g, 'intersect');
  result = result.replace(/\\cup/g, 'union');
  result = result.replace(/\\setminus/g, '\\');
  result = result.replace(/\\land/g, 'and');
  result = result.replace(/\\lor/g, 'or');
  result = result.replace(/\\lnot/g, 'not');
  result = result.replace(/\\neg/g, 'not');

  // Arrows
  result = result.replace(/\\rightarrow/g, '->');
  result = result.replace(/\\to/g, '->');
  result = result.replace(/\\leftarrow/g, '<-');
  result = result.replace(/\\leftrightarrow/g, '<->');
  result = result.replace(/\\Rightarrow/g, '=>');
  result = result.replace(/\\Leftarrow/g, '<=');
  result = result.replace(/\\Leftrightarrow/g, '<=>');
  result = result.replace(/\\mapsto/g, '|->');
  result = result.replace(/\\implies/g, '=>');
  result = result.replace(/\\iff/g, '<=>');

  // Functions and operators
  result = result.replace(/\\pmod\{([^}]+)\}/g, '(mod $1)');
  result = result.replace(/\\bmod/g, 'mod');
  result = result.replace(/\\mod/g, 'mod');
  result = result.replace(/\\gcd/g, 'gcd');
  result = result.replace(/\\lcm/g, 'lcm');
  result = result.replace(/\\min/g, 'min');
  result = result.replace(/\\max/g, 'max');
  result = result.replace(/\\det/g, 'det');
  result = result.replace(/\\dim/g, 'dim');
  result = result.replace(/\\ker/g, 'ker');
  result = result.replace(/\\rank/g, 'rank');
  result = result.replace(/\\log/g, 'log');
  result = result.replace(/\\ln/g, 'ln');
  result = result.replace(/\\exp/g, 'exp');
  result = result.replace(/\\sin/g, 'sin');
  result = result.replace(/\\cos/g, 'cos');
  result = result.replace(/\\tan/g, 'tan');
  result = result.replace(/\\arcsin/g, 'arcsin');
  result = result.replace(/\\arccos/g, 'arccos');
  result = result.replace(/\\arctan/g, 'arctan');
  result = result.replace(/\\lim/g, 'lim');
  result = result.replace(/\\sup/g, 'sup');
  result = result.replace(/\\inf/g, 'inf');

  // Fractions - simple conversion
  result = result.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)');
  result = result.replace(/\\tfrac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)');
  result = result.replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)');

  // Square root
  result = result.replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '$1-root($2)');
  result = result.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');

  // Summation and products
  result = result.replace(/\\sum_\{([^}]+)\}\^\{([^}]+)\}/g, 'SUM($1 to $2)');
  result = result.replace(/\\sum_\{([^}]+)\}/g, 'SUM($1)');
  result = result.replace(/\\sum/g, 'SUM');
  result = result.replace(/\\prod_\{([^}]+)\}\^\{([^}]+)\}/g, 'PROD($1 to $2)');
  result = result.replace(/\\prod_\{([^}]+)\}/g, 'PROD($1)');
  result = result.replace(/\\prod/g, 'PROD');

  // Integrals
  result = result.replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, 'INT($1 to $2)');
  result = result.replace(/\\int_\{([^}]+)\}/g, 'INT($1)');
  result = result.replace(/\\int/g, 'INT');
  result = result.replace(/\\oint/g, 'OINT');
  result = result.replace(/\\iint/g, 'IINT');
  result = result.replace(/\\iiint/g, 'IIINT');

  // Limits
  result = result.replace(/\\lim_\{([^}]+)\}/g, 'lim($1)');

  // Special symbols
  result = result.replace(/\\infty/g, 'infinity');
  result = result.replace(/\\partial/g, 'd');
  result = result.replace(/\\nabla/g, 'nabla');
  result = result.replace(/\\forall/g, 'for all');
  result = result.replace(/\\exists/g, 'exists');
  result = result.replace(/\\nexists/g, 'does not exist');
  result = result.replace(/\\emptyset/g, 'empty set');
  result = result.replace(/\\varnothing/g, 'empty set');
  result = result.replace(/\\ldots/g, '...');
  result = result.replace(/\\cdots/g, '...');
  result = result.replace(/\\vdots/g, '...');
  result = result.replace(/\\ddots/g, '...');
  result = result.replace(/\\therefore/g, 'therefore');
  result = result.replace(/\\because/g, 'because');
  result = result.replace(/\\angle/g, 'angle');
  result = result.replace(/\\triangle/g, 'triangle');
  result = result.replace(/\\square/g, 'square');
  result = result.replace(/\\cong/g, 'congruent');

  // Text in math mode
  result = result.replace(/\\text\{([^}]+)\}/g, '$1');
  result = result.replace(/\\textrm\{([^}]+)\}/g, '$1');
  result = result.replace(/\\textit\{([^}]+)\}/g, '$1');
  result = result.replace(/\\textbf\{([^}]+)\}/g, '$1');
  result = result.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  result = result.replace(/\\mathit\{([^}]+)\}/g, '$1');
  result = result.replace(/\\mathbf\{([^}]+)\}/g, '$1');
  result = result.replace(/\\mathcal\{([^}]+)\}/g, '$1');
  result = result.replace(/\\mathfrak\{([^}]+)\}/g, '$1');
  result = result.replace(/\\operatorname\{([^}]+)\}/g, '$1');

  // Subscripts and superscripts
  result = result.replace(/\^\{([^}]+)\}/g, '^($1)');
  result = result.replace(/_\{([^}]+)\}/g, '_($1)');
  result = result.replace(/\^(\w)/g, '^$1');
  result = result.replace(/_(\w)/g, '_$1');

  // Matrices and cases - simplify
  result = result.replace(/\\begin\{pmatrix\}([\s\S]*?)\\end\{pmatrix\}/g, '[$1]');
  result = result.replace(/\\begin\{bmatrix\}([\s\S]*?)\\end\{bmatrix\}/g, '[$1]');
  result = result.replace(/\\begin\{vmatrix\}([\s\S]*?)\\end\{vmatrix\}/g, '|$1|');
  result = result.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, '{$1}');
  result = result.replace(/\\\\/g, '; ');
  result = result.replace(/&/g, ' ');

  // Delimiters
  result = result.replace(/\\left\(/g, '(');
  result = result.replace(/\\right\)/g, ')');
  result = result.replace(/\\left\[/g, '[');
  result = result.replace(/\\right\]/g, ']');
  result = result.replace(/\\left\{/g, '{');
  result = result.replace(/\\right\}/g, '}');
  result = result.replace(/\\left\|/g, '|');
  result = result.replace(/\\right\|/g, '|');
  result = result.replace(/\\left\\lfloor/g, 'floor(');
  result = result.replace(/\\right\\rfloor/g, ')');
  result = result.replace(/\\left\\lceil/g, 'ceil(');
  result = result.replace(/\\right\\rceil/g, ')');
  result = result.replace(/\\lfloor/g, 'floor(');
  result = result.replace(/\\rfloor/g, ')');
  result = result.replace(/\\lceil/g, 'ceil(');
  result = result.replace(/\\rceil/g, ')');
  result = result.replace(/\\left\./g, '');
  result = result.replace(/\\right\./g, '');

  // Euler's number and imaginary unit
  result = result.replace(/\\mathrm\{e\}/g, 'e');
  result = result.replace(/\\mathrm\{i\}/g, 'i');

  // Clean up remaining braces (but be careful with nested)
  result = result.replace(/\{([^{}]+)\}/g, '$1');
  result = result.replace(/\{([^{}]+)\}/g, '$1'); // Second pass for nested

  // Clean up backslashes before letters
  result = result.replace(/\\([a-zA-Z]+)/g, '$1');

  return result;
}

/**
 * Parse a TypeScript theorem file and extract theorem data
 * Handles both single quotes and backticks for string literals
 */
function parseTheoremFile(filePath, courseId) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const theorems = [];

    // Find the theorems array - look for " = [" pattern after "export const theorems"
    const arrayDecl = content.indexOf('export const theorems');
    if (arrayDecl === -1) return [];

    // Find the actual array opening bracket (after the type annotation)
    const arrayOpenMatch = content.slice(arrayDecl).match(/=\s*\[/);
    if (!arrayOpenMatch) return [];

    const arrayStart = arrayDecl + arrayOpenMatch.index + arrayOpenMatch[0].length;
    const contentFromArray = content.slice(arrayStart);

    // Split into individual theorem objects
    // Look for pattern: { id: '...' and collect until matching closing }
    let depth = 0;
    let inObject = false;
    let objectStart = -1;
    let i = 0; // Already past the opening [

    while (i < contentFromArray.length) {
      const char = contentFromArray[i];

      // Handle string literals (skip over them to avoid counting braces inside strings)
      if (char === "'" || char === '"') {
        const quote = char;
        i++;
        while (i < contentFromArray.length && contentFromArray[i] !== quote) {
          if (contentFromArray[i] === '\\') i++; // Skip escaped chars
          i++;
        }
        i++;
        continue;
      }

      // Handle template literals (backticks)
      if (char === '`') {
        i++;
        while (i < contentFromArray.length && contentFromArray[i] !== '`') {
          if (contentFromArray[i] === '\\') i++; // Skip escaped chars
          i++;
        }
        i++;
        continue;
      }

      // Handle comments
      if (char === '/' && contentFromArray[i + 1] === '/') {
        while (i < contentFromArray.length && contentFromArray[i] !== '\n') i++;
        i++;
        continue;
      }

      if (char === '{') {
        if (!inObject) {
          inObject = true;
          objectStart = i;
        }
        depth++;
      } else if (char === '}') {
        depth--;
        if (depth === 0 && inObject) {
          // Extract the complete object
          const objectStr = contentFromArray.slice(objectStart, i + 1);

          // Parse the object
          const theorem = parseTheoremObject(objectStr, courseId);
          if (theorem) {
            theorems.push(theorem);
          }

          inObject = false;
        }
      } else if (char === ']' && depth === 0) {
        // End of array
        break;
      }

      i++;
    }

    return theorems;
  } catch (error) {
    console.error(`Error parsing ${filePath}: ${error.message}`);
    return [];
  }
}

/**
 * Parse a single theorem object string
 */
function parseTheoremObject(objectStr, courseId) {
  try {
    // Extract fields using regex that handles both quotes and backticks
    const idMatch = objectStr.match(/id:\s*['"]([^'"]+)['"]/);
    const titleMatch = objectStr.match(/title:\s*["']([^"']+)["']/);

    // Statement can be single-quoted or backtick-quoted
    let statement = null;
    const statementBacktickMatch = objectStr.match(/statement:\s*`([^`]*)`/s);
    const statementQuoteMatch = objectStr.match(/statement:\s*'([^']*(?:\\.[^']*)*)'/s);
    if (statementBacktickMatch) {
      statement = statementBacktickMatch[1];
    } else if (statementQuoteMatch) {
      statement = statementQuoteMatch[1];
    }

    const sectionIdMatch = objectStr.match(/sectionId:\s*(\d+)/);
    const typeMatch = objectStr.match(/type:\s*['"]([^'"]+)['"]/);
    const hasProofMatch = objectStr.match(/hasProof:\s*(true|false)/);

    // Proof can be backtick-quoted (multi-line) or single-quoted
    let proof = null;
    const proofBacktickMatch = objectStr.match(/proof:\s*`([^`]*)`/s);
    const proofQuoteMatch = objectStr.match(/proof:\s*'([^']*(?:\\.[^']*)*)'/s);
    if (proofBacktickMatch) {
      proof = proofBacktickMatch[1];
    } else if (proofQuoteMatch) {
      proof = proofQuoteMatch[1];
    }

    if (idMatch && titleMatch && statement && sectionIdMatch) {
      return {
        id: idMatch[1],
        title: titleMatch[1],
        statement: statement,
        sectionId: parseInt(sectionIdMatch[1]),
        type: typeMatch ? typeMatch[1] : 'theorem',
        hasProof: hasProofMatch ? hasProofMatch[1] === 'true' : !!proof,
        proof: proof,
        courseId: courseId,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Load all theorems from all courses
 */
export async function loadAllTheorems() {
  const theoremFiles = await glob(`${MATH_ACADEMY_ROOT}/*/src/data/theorems.ts`);
  const allTheorems = [];

  for (const filePath of theoremFiles) {
    // Extract course ID from path
    const pathParts = filePath.split('/');
    const courseIndex = pathParts.findIndex(p => p === 'src') - 1;
    const courseId = pathParts[courseIndex];

    if (courseId) {
      // Skip template and test courses
      if (courseId === 'course-template' || courseId.includes('test')) {
        continue;
      }

      const theorems = parseTheoremFile(filePath, courseId);
      if (theorems.length > 0) {
        console.log(`  - ${courseId}: ${theorems.length} theorems`);
      }
      allTheorems.push(...theorems);
    }
  }

  console.log(`Loaded ${allTheorems.length} theorems from ${theoremFiles.length} courses`);
  return allTheorems;
}

/**
 * Clean up LaTeX for Nostr posting (preserve math, clean whitespace)
 */
function cleanLatexForNostr(latex) {
  if (!latex) return '';

  let result = latex;

  // Normalize whitespace (but preserve intentional line breaks)
  result = result.replace(/[ \t]+/g, ' ');
  result = result.replace(/\n\s*\n/g, '\n\n');
  result = result.trim();

  return result;
}

/**
 * Format a theorem for posting (preserves LaTeX for clients that support it)
 */
export function formatTheoremPost(theorem) {
  const metadata = COURSE_METADATA[theorem.courseId] || {
    name: theorem.courseId,
    url: 'https://mathacademy-cyan.vercel.app'
  };

  const typeEmoji = {
    theorem: '📐',
    definition: '📖',
    lemma: '🔗',
    corollary: '🎯',
    proposition: '💡',
    postulate: '📏',
  };

  const emoji = typeEmoji[theorem.type] || '📐';
  const title = `${emoji} ${theorem.title}`;

  // Preserve LaTeX notation for clients that support rendering
  let statement = cleanLatexForNostr(theorem.statement);

  // Truncate statement if too long (max 400 chars to allow for LaTeX markup)
  if (statement.length > 400) {
    statement = statement.slice(0, 397) + '...';
  }

  const lines = [title, '', statement];

  // Add proof if available (max 300 chars)
  if (theorem.proof) {
    let proofText = cleanLatexForNostr(theorem.proof);
    if (proofText.length > 300) {
      proofText = proofText.slice(0, 297) + '...';
    }
    lines.push('', `Proof: ${proofText}`);
  }

  lines.push('', `From: ${metadata.name}`);
  lines.push(`Learn more: ${metadata.url}/#/section/${theorem.sectionId}`);
  lines.push('', `Explore all courses: https://mathacademy-cyan.vercel.app`);

  return lines.join('\n');
}

/**
 * Get a content ID for a theorem
 */
export function getTheoremContentId(theorem) {
  return `theorem:${theorem.courseId}:${theorem.id}`;
}
