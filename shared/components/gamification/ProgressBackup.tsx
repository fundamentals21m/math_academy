import { useState, useRef } from 'react';
import { exportProgress, importProgress, getProgressSummary } from '@shared/gamification/storage';

interface ProgressBackupProps {
  onImportSuccess?: () => void;
}

/**
 * Dropdown component for exporting/importing gamification progress.
 * Allows users to backup their progress to JSON and restore from backup files.
 *
 * @example
 * <ProgressBackup onImportSuccess={() => console.log('Imported!')} />
 */
export function ProgressBackup({ onImportSuccess }: ProgressBackupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const summary = getProgressSummary();

  const handleExport = () => {
    exportProgress();
    setMessage({ type: 'success', text: 'Progress exported! Check your downloads folder.' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setMessage(null);

    const result = await importProgress(file);

    setIsImporting(false);
    setMessage({
      type: result.success ? 'success' : 'error',
      text: result.message
    });

    if (result.success) {
      onImportSuccess?.();
      // Reload after short delay to show success message
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }

    // Clear the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-dark-800 transition-colors"
        aria-label="Backup & restore progress"
        title="Backup & restore progress"
      >
        <svg
          className="w-5 h-5 text-dark-400 hover:text-dark-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-72 bg-dark-800 rounded-lg shadow-xl border border-dark-700 z-50 p-4">
            <h3 className="text-sm font-semibold text-dark-100 mb-3">Progress Backup</h3>

            {summary && (
              <div className="mb-4 p-3 bg-dark-900 rounded-lg">
                <div className="text-xs text-dark-400 mb-1">Current Progress</div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-accent-400 font-semibold">{summary.totalXP} XP</span>
                  <span className="text-dark-300">Level {summary.level}</span>
                  <span className="text-dark-400">{summary.sectionsCompleted} sections</span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <button
                onClick={handleExport}
                disabled={!summary}
                className="w-full flex items-center gap-2 px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm text-dark-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Progress
              </button>

              <button
                onClick={handleImportClick}
                disabled={isImporting}
                className="w-full flex items-center gap-2 px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm text-dark-100 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {isImporting ? 'Importing...' : 'Import Backup'}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {message && (
              <div className={`mt-3 p-2 rounded text-xs ${
                message.type === 'success'
                  ? 'bg-green-900/50 text-green-300 border border-green-700'
                  : 'bg-red-900/50 text-red-300 border border-red-700'
              }`}>
                {message.text}
              </div>
            )}

            <p className="mt-3 text-xs text-dark-500">
              Export your progress regularly to avoid losing your XP. Import to restore from a backup file.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
