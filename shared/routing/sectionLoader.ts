/**
 * Section loader utilities for Math Academy courses.
 *
 * Provides utilities for dynamically loading section components.
 *
 * Usage in course App.tsx:
 * ```tsx
 * import { createSectionLoaders } from '@shared/routing/sectionLoader';
 *
 * // Option 1: Generate from count (requires knowing total sections)
 * const sectionLoaders = createSectionLoaders(95);
 *
 * // Option 2: Use Vite glob imports (auto-discovers sections)
 * const sectionModules = import.meta.glob('@/pages/sections/Section*.tsx');
 * const sectionLoaders = createSectionLoadersFromGlob(sectionModules);
 * ```
 */

import type { ComponentType } from 'react';

/**
 * Type for section module loader function
 */
export type SectionLoader = () => Promise<{ default: ComponentType }>;

/**
 * Type for section loaders map
 */
export type SectionLoaders = Record<number, SectionLoader>;

/**
 * Creates section loaders for a given number of sections.
 *
 * Note: This function generates import strings, but due to Vite's static
 * analysis requirements, the actual imports must be in the course code.
 * This function is primarily useful for understanding the pattern.
 *
 * For most courses, prefer using createSectionLoadersFromGlob with
 * import.meta.glob, as it auto-discovers sections without needing a count.
 *
 * @param totalSections - The highest section number (e.g., 94 for Section00-Section94)
 * @param importPath - Base import path (default: '@/pages/sections/Section')
 * @returns Section loaders map
 *
 * @example
 * // In a course with sections 0-94:
 * const loaders = createSectionLoaders(94);
 * // Returns: { 0: () => import('@/pages/sections/Section00'), 1: () => import(...), ... }
 */
export function createSectionLoaders(
  totalSections: number,
  importPath = '@/pages/sections/Section'
): SectionLoaders {
  const loaders: SectionLoaders = {};

  for (let i = 0; i <= totalSections; i++) {
    const paddedId = i.toString().padStart(2, '0');
    // Note: Vite requires static strings for import(), so we can't use template literals
    // This function serves as documentation - courses should use glob imports instead
    loaders[i] = () => import(`${importPath}${paddedId}`);
  }

  return loaders;
}

/**
 * Creates section loaders from Vite's import.meta.glob result.
 *
 * This is the recommended approach as it auto-discovers sections without
 * needing to specify a count, and works with Vite's static analysis.
 *
 * @param globModules - Result of import.meta.glob('@/pages/sections/Section*.tsx')
 * @returns Section loaders map with numeric keys
 *
 * @example
 * // In course App.tsx:
 * const sectionModules = import.meta.glob('@/pages/sections/Section*.tsx');
 * const sectionLoaders = createSectionLoadersFromGlob(sectionModules);
 *
 * // sectionLoaders = { 0: () => Promise<Module>, 1: () => Promise<Module>, ... }
 */
export function createSectionLoadersFromGlob(
  globModules: Record<string, () => Promise<unknown>>
): SectionLoaders {
  const loaders: SectionLoaders = {};

  for (const [path, loader] of Object.entries(globModules)) {
    // Extract section number from path like './Section00.tsx' or '../pages/sections/Section42.tsx'
    const match = path.match(/Section(\d+)/);
    if (match) {
      const sectionNumber = parseInt(match[1], 10);
      loaders[sectionNumber] = loader as SectionLoader;
    }
  }

  return loaders;
}

/**
 * Gets section numbers from a loaders map, sorted numerically.
 *
 * @param loaders - Section loaders map
 * @returns Sorted array of section numbers
 *
 * @example
 * const sections = getSectionNumbers(sectionLoaders);
 * // [0, 1, 2, 3, ..., 94]
 */
export function getSectionNumbers(loaders: SectionLoaders): number[] {
  return Object.keys(loaders)
    .map(Number)
    .sort((a, b) => a - b);
}

/**
 * Gets the total count of sections.
 *
 * @param loaders - Section loaders map
 * @returns Number of sections
 */
export function getSectionCount(loaders: SectionLoaders): number {
  return Object.keys(loaders).length;
}

/**
 * Gets the highest section number.
 *
 * @param loaders - Section loaders map
 * @returns Highest section number, or -1 if empty
 */
export function getMaxSectionNumber(loaders: SectionLoaders): number {
  const numbers = getSectionNumbers(loaders);
  return numbers.length > 0 ? numbers[numbers.length - 1] : -1;
}
