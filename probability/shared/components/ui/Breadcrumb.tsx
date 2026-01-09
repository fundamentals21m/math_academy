import React, { forwardRef, useMemo } from 'react';
import { cn } from './utils';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  separator?: React.ReactNode;
}

export function Breadcrumb({ className, children, separator = '/', ...props }: BreadcrumbProps) {
  return (
    <nav className={cn('w-full', className)} aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center gap-2 flex-wrap">{children}</ol>
    </nav>
  );
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, active, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          'flex items-center gap-2',
          active && 'text-[var(--color-text-muted)]',
          className
        )}
        {...props}
      >
        {children}
        {!active && (
          <span className="text-[var(--color-text-muted)]" aria-hidden="true">
            {separator}
          </span>
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  as?: 'a' | 'span';
}

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, as: Component = 'a', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-sm hover:text-[var(--color-primary)] transition-colors',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

BreadcrumbLink.displayName = 'BreadcrumbLink';

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-[var(--color-text-muted)]', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export default Breadcrumb;
