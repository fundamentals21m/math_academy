import React, { forwardRef } from 'react';
import { cn } from './utils';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblings?: number;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { className, currentPage, totalPages, onPageChange, siblings = 1, ...props },
    ref
  ) => {
    const pages = React.useMemo(() => {
      const dots = '...';
      const totalPageNumbers = siblings * 2 + 3;

      if (totalPageNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const leftSiblingIndex = Math.max(currentPage - siblings, 1);
      const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

      const firstPageIndex = 1;
      const lastPageIndex = totalPages;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblings;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, dots, totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblings;
        const rightRange = Array.from(
          { length: rightItemCount },
          (_, i) => totalPages - rightItemCount + i + 1
        );
        return [firstPageIndex, dots, ...rightRange];
      }

      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
    }, [currentPage, totalPages, siblings]);

    return (
      <nav
        ref={ref}
        className={cn('flex items-center justify-center gap-1', className)}
        aria-label="Pagination"
        {...props}
      >
        <PaginationItems pages={pages} currentPage={currentPage} onPageChange={onPageChange} />
      </nav>
    );
  }
);

interface PaginationItemsProps {
  pages: (number | string)[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationItems = ({ pages, currentPage, onPageChange }: PaginationItemsProps) => {
  return (
    <>
      <PaginationPrev currentPage={currentPage} onPageChange={onPageChange} />
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <PaginationEllipsis />
          ) : (
            <PaginationItem
              page={page as number}
              isActive={page === currentPage}
              onPageChange={onPageChange}
            />
          )}
        </React.Fragment>
      ))}
      <PaginationNext currentPage={currentPage} onPageChange={onPageChange} />
    </>
  );
};

interface PaginationItemProps {
  page: number;
  isActive: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({ page, isActive, onPageChange }: PaginationItemProps) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 text-sm rounded-md',
        'transition-colors duration-[var(--transition-fast)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
        isActive
          ? 'bg-[var(--color-primary)] text-white font-medium'
          : 'text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]'
      )}
      onClick={() => onPageChange(page)}
      aria-current={isActive ? 'page' : undefined}
    >
      {page}
    </button>
  );
};

export interface PaginationNextProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationNext = ({ currentPage, onPageChange }: PaginationNextProps) => {
  const disabled = currentPage >= 5;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-md',
        'text-[var(--color-text)]',
        'hover:bg-[var(--color-bg-secondary)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        disabled && 'pointer-events-none'
      )}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={disabled}
      aria-label="Next page"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export interface PaginationPrevProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationPrev = ({ currentPage, onPageChange }: PaginationPrevProps) => {
  const disabled = currentPage <= 1;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-md',
        'text-[var(--color-text)]',
        'hover:bg-[var(--color-bg-secondary)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        disabled && 'pointer-events-none'
      )}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={disabled}
      aria-label="Previous page"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export interface PaginationEllipsisProps {
  className?: string;
}

export const PaginationEllipsis = ({ className }: PaginationEllipsisProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 text-sm',
        'text-[var(--color-text-muted)]',
        className
      )}
      aria-hidden="true"
    >
      ...
    </span>
  );
};

export default Pagination;
