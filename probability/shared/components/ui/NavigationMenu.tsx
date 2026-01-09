import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from './utils';

interface NavigationMenuContextValue {
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
}

const NavigationMenuContext = createContext<NavigationMenuContextValue | null>(null);

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <NavigationMenuContext.Provider value={{ openMenu, setOpenMenu }}>
      <nav className={cn('relative', className)} {...props}>
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  );
}

export interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export const NavigationMenuList = forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'flex items-center gap-1 p-1 rounded-lg',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

NavigationMenuList.displayName = 'NavigationMenuList';

export interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export const NavigationMenuItem = forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} className={cn('relative', className)} {...props}>
        {children}
      </li>
    );
  }
);

NavigationMenuItem.displayName = 'NavigationMenuItem';

export interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NavigationMenuTrigger = forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(NavigationMenuContext);
    if (!context) throw new Error('NavigationMenuTrigger must be used within NavigationMenu');

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex items-center justify-between gap-1 px-3 py-2',
          'text-sm font-medium text-[var(--color-text)] rounded-md',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          className
        )}
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

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const NavigationMenuContent = forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(NavigationMenuContext);
    if (!context) throw new Error('NavigationMenuContent must be used within NavigationMenu');

    return (
      <div
        ref={ref}
        className={cn(
          'absolute top-full left-0 mt-2 w-48',
          'bg-[var(--color-bg)] border border-[var(--color-border)]',
          'rounded-lg shadow-lg p-1',
          'animate-in fade-in-0 zoom-in-95 duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NavigationMenuContent.displayName = 'NavigationMenuContent';

export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const NavigationMenuLink = forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'block px-3 py-2 text-sm text-[var(--color-text)] rounded-md',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavigationMenuLink.displayName = 'NavigationMenuLink';

export default NavigationMenu;
