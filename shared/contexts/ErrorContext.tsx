import { createContext, useContext, useCallback, useState, type ReactNode } from 'react';
import { getLogger } from '../utils/logger';
import { isFirebaseConfigured } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import { getFirebaseFunctions } from '../firebase/config';

const logger = getLogger('ErrorContext');

export interface AppError {
  id: string;
  message: string;
  details?: string;
  recoverable?: boolean;
  timestamp: Date;
  userAgent?: string;
  url?: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
}

/**
 * Log error to Firebase for production monitoring
 */
async function logErrorToFirebase(error: AppError): Promise<void> {
  if (!isFirebaseConfigured()) return;

  try {
    const functions = getFirebaseFunctions();
    if (!functions) {
      logger.debug('Firebase functions not initialized');
      return;
    }

    const logError = httpsCallable<{ error: Omit<AppError, 'id' | 'timestamp'> }, { success: boolean }>(
      functions,
      'logClientError'
    );

    await logError({
      error: {
        message: error.message,
        details: error.details,
        recoverable: error.recoverable,
        userAgent: error.userAgent,
        url: error.url,
        severity: error.severity,
      },
    });

    logger.debug('Error logged to Firebase:', error.message);
  } catch (err) {
    // Silent fail - error logging should never break the app
    logger.debug('Failed to log error to Firebase:', err);
  }
}

interface ErrorContextValue {
  errors: AppError[];
  addError: (error: Omit<AppError, 'id' | 'timestamp'>) => void;
  dismissError: (id: string) => void;
  dismissAll: () => void;
}

const ErrorContext = createContext<ErrorContextValue | null>(null);

interface ErrorProviderProps {
  children: ReactNode;
  onError?: (error: AppError) => void;
}

export function ErrorProvider({ children, onError }: ErrorProviderProps) {
  const [errors, setErrors] = useState<AppError[]>([]);

  const addError = useCallback(
    (error: Omit<AppError, 'id' | 'timestamp' | 'userAgent' | 'url'>) => {
      const newError: AppError = {
        id: crypto.randomUUID(),
        ...error,
        timestamp: new Date(),
        recoverable: error.recoverable ?? true,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        severity: error.severity ?? 'error',
      };

      setErrors((prev) => {
        const updated = [...prev, newError];
        if (onError) {
          onError(newError);
        }
        return updated;
      });

      // Log to Firebase for production monitoring (non-blocking)
      logErrorToFirebase(newError).catch(() => {});

      logger.error('App error added:', newError);
    },
    [onError]
  );

  const dismissError = useCallback((id: string) => {
    setErrors((prev) => prev.filter((err) => err.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setErrors([]);
  }, []);

  return (
    <ErrorContext.Provider value={{ errors, addError, dismissError, dismissAll }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useErrorContext() {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error('useErrorContext must be used within ErrorProvider');
  }

  return context;
}
