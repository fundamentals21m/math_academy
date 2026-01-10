# Troubleshooting Guide

Common issues encountered in Math Academy courses and their solutions.

## Table of Contents
- [React Runtime Errors](#react-runtime-errors)
- [Build Issues](#build-issues)
- [Deployment Issues](#deployment-issues)

---

## React Runtime Errors

### Error #130: "Element type is invalid"

**Symptoms:**
- Page shows React error boundary with "Something went wrong"
- Console shows: `Minified React error #130`
- Error message: "Element type is invalid: expected a string or a class/function but got: object"

**Common Causes:**

1. **Undefined Component Usage**
   ```tsx
   // BAD: Using a component that doesn't exist or isn't imported
   <Math math="\sqrt{2}" />

   // GOOD: Use the correct imported component
   <InlineMath math="\sqrt{2}" />
   ```

   **Fix:** Check imports at the top of the file and ensure the component name matches exactly.

2. **Invalid Callout Type**
   ```tsx
   // BAD: Using a type not defined in Callout component
   <Callout type="example">...</Callout>
   <Callout type="summary">...</Callout>

   // The Callout component may only support: info, warning, danger, success, note
   ```

   **Fix:** Either use a supported type, or add the missing type to the Callout component's `calloutStyles` record.

**Example Fix (Callout.tsx):**
```tsx
type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'note' | 'example' | 'summary';

const calloutStyles: Record<CalloutType, {...}> = {
  // ... existing types ...
  example: {
    bg: 'bg-cyan-500/5',
    border: 'border-cyan-500/30',
    icon: 'M9.663 17h4.673M12 3v1m6.364...',
    iconColor: 'text-cyan-400',
  },
  summary: {
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30',
    icon: 'M9 5H7a2 2 0 00-2 2v12...',
    iconColor: 'text-amber-400',
  },
};
```

### Error: "Cannot read properties of undefined (reading 'bg')"

**Symptoms:**
- Error boundary triggered
- Console shows TypeError about reading 'bg' from undefined

**Cause:** A component (usually Callout) is receiving a `type` prop value that doesn't exist in its styles mapping.

**Fix:** Add the missing type to the component's style definitions (see above).

---

### JSX Parsing of LaTeX Curly Braces

**Symptoms:**
- `ReferenceError: n is not defined` (or similar variable names)
- Occurs in minified/production builds but may work in dev
- Error happens when rendering math content

**Cause:** LaTeX expressions with curly braces are parsed as JSX expressions during build:
```tsx
// BAD: Curly braces interpreted as JSX
<InlineMath>T_{n-1}</InlineMath>        // {n-1} becomes JSX expression
<InlineMath>\sqrt{2}</InlineMath>       // {2} becomes JSX expression
<InlineMath>\mathbb{C}</InlineMath>     // {C} becomes JSX expression

// GOOD: Wrap in string literal
<InlineMath>{'T_{n-1}'}</InlineMath>
<InlineMath>{'\\sqrt{2}'}</InlineMath>
<InlineMath>{'\\mathbb{C}'}</InlineMath>
```

**Fix:** Wrap all LaTeX content containing `{}` in string literals `{'...'}`.

**Patterns to search for:**
```bash
# Find potentially problematic InlineMath usage
grep -r "<InlineMath>[^{].*{" --include="*.tsx" src/
```

---

## Build Issues

### Course builds but fails at runtime

**Debugging steps:**
1. Run `npm run build` - check for warnings
2. Start preview server: `npm run preview`
3. Open browser console and check for errors
4. Look for React error codes (e.g., #130) and follow the provided URL

---

## Deployment Issues

### Assets return 404 after deployment

**Symptoms:**
- Page loads but shows blank content
- Network tab shows 404 for JS/CSS assets
- Assets are requested from wrong path

**Cause:** Mismatch between vite's `base` path and deployment location.

**Example:**
```ts
// vite.config.ts
const COURSE_ID = 'men-of-math'  // Builds with /men-of-math/
const BASE_PATH = `/${COURSE_ID}/`

// But deployed at /mom-deploy/ on the hub
```

**Fix:** Update `COURSE_ID` in vite.config.ts to match the deployment path:
```ts
const COURSE_ID = 'mom-deploy'  // Must match deployment folder name
```

**Verification:**
1. Check `index.html` after build - asset paths should match deployment location
2. Example: If deployed at `/mom-deploy/`, paths should be `/mom-deploy/assets/...`

### Hub Deployment Structure

Courses are deployed to subfolders within the hub at `mathacademy-cyan.vercel.app`:
```
/mom-deploy/          -> Men of Mathematics
/aa-deploy/           -> Abstract Algebra
/linalg-deploy/       -> Linear Algebra
/cryptography/        -> Cryptography
```

The vite `base` path must match these folder names exactly.

---

## Quick Diagnostic Commands

```bash
# Check for JSX/LaTeX issues
grep -rn "<InlineMath>[^{].*{" --include="*.tsx" src/pages/

# Check for undefined component usage
grep -rn "<Math " --include="*.tsx" src/pages/

# Verify build output paths
cat dist/index.html | grep -o 'src="[^"]*"' | head -5

# Test local build
npm run build && npm run preview
```

---

## Related Files

- `src/components/common/Callout.tsx` - Callout component with type definitions
- `src/components/common/MathBlock.tsx` - Math rendering components (InlineMath, MathBlock)
- `vite.config.ts` - Build configuration including base path
