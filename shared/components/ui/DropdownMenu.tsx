import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from './utils';

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function DropdownMenu({ className, children, ...props }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className={cn('relative inline-block', className)} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(DropdownContext);
    if (!context) throw new Error('DropdownMenuTrigger must be used within DropdownMenu');

    return (
      <button
        ref={(node) => {
          (ref as React.MutableRefObject<HTMLButtonElement | null>) = node;
          context.triggerRef.current = node;
        }}
        type="button"
        className={cn(
          'inline-flex items-center justify-center gap-2 px-3 py-2',
          'text-sm font-medium text-[var(--color-text)] rounded-md',
          'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          className
        )}
        onClick={() => context.setOpen(!context.open)}
        {...props}
      >
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-200"
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

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, children, align = 'end', ...props }, ref) => {
    const context = useContext(DropdownContext);
    if (!context) throw new Error('DropdownMenuContent must be used within DropdownMenu');

    if (!context.open) return null;

    const alignClasses = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'absolute z-50 top-full mt-2 w-48',
          'bg-[var(--color-bg)] border border-[var(--color-border)]',
          'rounded-lg shadow-lg p-1',
          'animate-in fade-in-0 zoom-in-95 duration-150',
          alignClasses[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inset?: boolean;
}

export const DropdownMenuItem = forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ className, children, inset, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'w-full flex items-center gap-2 px-3 py-2',
          'text-sm text-[var(--color-text)] rounded-md',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          inset && 'pl-9',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownMenuItem.displayName = 'DropdownMenuItem';

export interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  decorative?: boolean;
}

export const DropdownMenuSeparator = forwardRef<HTMLHRElement, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          'my-1 border-t border-[var(--color-border)]',
          className
        )}
        {...props}
      />
    );
  }
);

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  inset?: boolean;
}

export const DropdownMenuLabel = forwardRef<HTMLLabelElement, DropdownMenuLabelProps>(
  ({ className, children, inset, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'block px-3 py-2 text-xs font-semibold uppercase tracking-wider',
          'text-[var(--color-text-muted)]',
          inset && 'pl-9',
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export default DropdownMenu;
