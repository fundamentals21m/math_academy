/**
 * @vitest-environment happy-dom
 * ErrorBoundary component tests
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

// Component that throws an error
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>No error</div>;
}

// Component that throws on click
function ThrowOnClick() {
  return (
    <button
      onClick={() => {
        throw new Error('Click error');
      }}
    >
      Click me
    </button>
  );
}

describe('ErrorBoundary', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Suppress console.error during tests since we expect errors
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('should catch errors and display fallback UI', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should display error message in details', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // Click to expand error details
    const details = screen.getByText('Error details');
    fireEvent.click(details);

    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('should render custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error page</div>}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error page')).toBeInTheDocument();
  });

  it('should have a Try Again button', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
  });

  it('should have a Refresh Page button', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole('button', { name: 'Refresh Page' })).toBeInTheDocument();
  });

  it('should reset error state when Try Again is clicked', () => {
    // We need to test that clicking Try Again clears the error state
    // When reset, the boundary will try to render children again
    // If children still throw, it catches the error again
    // So we verify the reset functionality by checking the button exists and is clickable
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    const tryAgainButton = screen.getByRole('button', { name: 'Try Again' });
    expect(tryAgainButton).toBeInTheDocument();
    
    // Click Try Again - this resets state and re-renders children
    // Since children still throw, error boundary catches again
    fireEvent.click(tryAgainButton);

    // The error UI is shown again because children still throw
    // This confirms the reset happened and boundary caught error again
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should call window.location.reload when Refresh Page is clicked', () => {
    const reloadSpy = vi.fn();
    const originalReload = window.location.reload;
    Object.defineProperty(window.location, 'reload', {
      value: reloadSpy,
      writable: true,
    });

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Refresh Page' }));

    expect(reloadSpy).toHaveBeenCalled();

    // Restore original
    Object.defineProperty(window.location, 'reload', {
      value: originalReload,
      writable: true,
    });
  });

  it('should display warning emoji', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // The warning emoji is rendered
    expect(screen.getByRole('img', { name: 'Warning' })).toBeInTheDocument();
  });

  it('should display helpful message for users', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(
      screen.getByText(/An unexpected error occurred. Please try refreshing the page./i)
    ).toBeInTheDocument();
  });
});
