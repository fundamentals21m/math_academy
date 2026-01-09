# ADR-001: Design System Architecture

## Status
Accepted

## Context
Magic Internet Math needed a consistent, accessible design system across 26 courses. Prior to this ADR, components were scattered across courses with inconsistent implementations, leading to duplication and maintenance challenges.

## Decision
Create a centralized UI component library at `shared/components/ui/` with the following principles:

1. **Atomic Design**: Components range from primitives (Button, Input) to molecules (Card, Modal) to organisms (NavigationMenu, Tabs)
2. **Headless Patterns**: Use compound component patterns where state is managed internally (Tabs, Select, Accordion)
3. **CSS Variables**: All theming via CSS custom properties for light/dark mode support
4. **TypeScript First**: Full type safety with exported types for all component props
5. **Composition**: Components compose via slots rather than prop spreading

## Consequences

### Positive
- Single source of truth for UI components
- Consistent styling across all courses
- Easier maintenance and updates
- Storybook documentation for visual testing
- Accessibility baked in (ARIA attributes, keyboard navigation)

### Negative
- Initial development overhead
- Requires discipline to avoid prop sprawl
- Bundle size consideration (code splitting available)

## Implementation Details

### Component Structure
```typescript
// Compound component pattern
export function Tabs({ children }: TabsProps) { ... }
export function TabsList({ children }: TabsListProps) { ... }
export function TabsTrigger({ value }: TabsTriggerProps) { ... }
export function TabsContent({ value }: TabsContentProps) { ... }
```

### CSS Variables
```css
[data-theme="light"] {
  --color-bg: #ffffff;
  --color-text: #1e293b;
  --color-primary: #6366f1;
}

[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-text: #f1f5f9;
  --color-primary: #818cf8;
}
```

### Testing Strategy
- Unit tests for component logic
- Storybook for visual regression (Chromatic)
- Integration tests for component interactions

## References
- [Shadcn/ui](https://ui.shadcn.com) for compound component inspiration
- [Radix UI](https://www.radix-ui.com) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com) for utility classes
