# ADR-005: Code Splitting Strategy

## Status
Accepted

## Context
Magic Internet Math has 26 courses with varying content sizes. Loading all content upfront would result in:
- Large initial bundle (>2MB)
- Slow time-to-interactive
- Poor mobile experience

## Decision
Implement multi-level code splitting:

1. **Route-Based Splitting**: Each course lazy-loaded
2. **Section-Based Splitting**: Individual sections lazy-loaded
3. **Vendor Chunking**: React, KaTeX, Framer Motion isolated
4. **Component-Level Splitting**: Heavy components code-split

## Consequences

### Positive
- Initial bundle <100KB
- Fast time-to-interactive
- Parallel chunk loading
- Better caching (vendor chunks rarely change)

### Negative
- Loading states needed
- Complex bundle analysis
- Potential layout shift

## Implementation Details

### Route Splitting (Vite)
```typescript
// App.tsx lazy loading
const routes = {
  '/': () => import('@/pages/Home'),
  '/sections/Section01': () => import('@/pages/sections/Section01'),
  '/sections/Section02': () => import('@/pages/sections/Section02'),
};
```

### Vendor Chunking (vite.config.ts)
```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-math': ['katex'],
          'vendor-animation': ['framer-motion'],
        },
      },
    },
  },
});
```

### Dynamic Imports
```typescript
// Heavy visualization only loads when needed
const MathVisualizer = lazy(() => import('./MathVisualizer'));
```

## Monitoring
- Bundle size CI checks (main <1MB, vendor-math <300KB)
- Chromatic visual regression
- Lighthouse performance audits

## References
- [Vite Build Options](https://vitejs.dev/config/build-options.html)
- [React Lazy](https://react.dev/reference/react/lazy)
