import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from './utils';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const sizeClasses: Record<ModalProps['size'], string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-4xl',
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  React.useEffect(() => {
    if (open && closeOnEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }
  }, [open, closeOnEscape, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      
      {/* Modal panel */}
      <div
        className={cn(
          'relative w-full mx-4 bg-[var(--color-bg)] rounded-xl shadow-[var(--shadow-xl)]',
          'transform transition-all scale-100 opacity-100',
          'max-h-[90vh] overflow-hidden flex flex-col',
          sizeClasses[size]
        )}
      >
        {/* Header */}
        {(title || description) && (
          <div className="flex flex-col space-y-1.5 p-6 border-b border-[var(--color-border)]">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-[var(--color-text)]"
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                id="modal-description"
                className="text-sm text-[var(--color-text-muted)]"
              >
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalHeader = Modal;

export interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const ModalTitle = Modal;

export interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ModalDescription = Modal;

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalContent = Modal;

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  dividers?: boolean;
}

export const ModalFooter = ({
  className,
  dividers = true,
  children,
  ...props
}: ModalFooterProps) => (
  <div
    className={cn(
      'flex items-center justify-end gap-3 p-6',
      dividers && 'border-t border-[var(--color-border)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Modal;
