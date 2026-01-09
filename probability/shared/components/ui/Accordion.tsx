import React, { createContext, useContext, useState, useCallback, forwardRef } from 'react';
import { cn } from './utils';

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  collapsible?: boolean;
}

export function Accordion({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  children,
  collapsible = true,
  className,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    if (defaultValue !== undefined) {
      const set = new Set<string>();
      const items = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      items.forEach(item => item && set.add(item));
      return set;
    }
    return new Set<string>();
  });

  const handleToggle = useCallback((itemValue: string) => {
    setOpenItems(prev => {
      const next = new Set(type === 'multiple' ? prev : []);
      if (next.has(itemValue)) {
        if (collapsible || type === 'multiple') {
          next.delete(itemValue);
        }
      } else {
        next.add(itemValue);
      }
      onValueChange?.(type === 'multiple' ? Array.from(next) : next.values().next().value || '');
      return next;
    });
  }, [type, collapsible, onValueChange]);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem: handleToggle }}>
      <div className={cn('w-full space-y-2', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('border border-[var(--color-border)] rounded-lg overflow-hidden', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionTrigger must be used within Accordion');

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'w-full flex items-center justify-between gap-4 px-4 py-3',
          'text-left text-sm font-medium text-[var(--color-text)]',
          'bg-[var(--color-bg)] hover:bg-[var(--color-bg-secondary)]',
          'transition-colors duration-[var(--transition-fast)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          className
        )}
        {...props}
      >
        {children}
        <svg
          className="w-4 h-4 flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'px-4 py-3 text-sm text-[var(--color-text-secondary)]',
          'bg-[var(--color-bg)] border-t border-[var(--color-border)]',
          'animate-in slide-in-from-top-2 duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export default Accordion;
