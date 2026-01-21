import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { getTranscriptById, getAdjacentTranscripts, transcripts } from '@/data/transcripts';

interface TranscriptLayoutProps {
  transcriptId: string;
  children: ReactNode;
}

export function TranscriptLayout({ transcriptId, children }: TranscriptLayoutProps) {
  const transcript = getTranscriptById(transcriptId);
  const { prev, next } = getAdjacentTranscripts(transcriptId);
  const transcriptIndex = transcripts.findIndex(t => t.id === transcriptId);
  const totalTranscripts = transcripts.length;

  if (!transcript) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-dark-400">Transcript not found</p>
      </div>
    );
  }

  const progressPercent = ((transcriptIndex + 1) / totalTranscripts) * 100;

  return (
    <div className="min-h-screen relative">
      {/* Subtle background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Progress bar */}
      <div className="sticky top-16 z-30 h-1 bg-dark-900/80 backdrop-blur">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-primary-400 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Breadcrumb */}
      <div className="relative py-4 px-6 border-b border-dark-800/50 bg-dark-950/50 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-dark-500 hover:text-dark-300 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <svg className="w-4 h-4 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/transcripts" className="text-dark-500 hover:text-dark-300 transition-colors">
            Transcripts
          </Link>
          <svg className="w-4 h-4 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-dark-300 font-medium truncate">{transcript.title}</span>
        </nav>
      </div>

      {/* Main content */}
      <article className="relative max-w-4xl mx-auto px-6 py-12">
        {/* Transcript header */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 text-indigo-400 rounded-full border border-indigo-500/20">
              <span className="text-lg">🎙️</span>
              Transcript
            </span>
            <span className="text-dark-500 text-sm">
              {transcript.source}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-primary-400 bg-clip-text text-transparent">
              {transcript.title}
            </span>
          </h1>

          <p className="text-xl text-dark-400 leading-relaxed max-w-3xl mb-6">
            {transcript.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 mb-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {transcript.date}
            </span>
            {transcript.duration && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {transcript.duration}
              </span>
            )}
          </div>

          {/* Speakers */}
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-3">Speakers</h3>
            <div className="flex flex-wrap gap-3">
              {transcript.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-primary-500/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-400">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-dark-200 font-medium">{speaker.name}</p>
                    {speaker.role && (
                      <p className="text-xs text-dark-500">{speaker.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="flex flex-wrap gap-2">
            {transcript.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Decorative line */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/10" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
          </div>
        </header>

        {/* Transcript content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-6">
          {children}
        </div>

        {/* Original source link */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div>
              <h3 className="text-amber-400 font-semibold mb-1">Original Transcript</h3>
              <p className="text-dark-400 text-sm mb-3">
                This is an educational summary. Read the full original transcript at btctranscripts.com.
              </p>
              <a
                href={transcript.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/30 transition-colors"
              >
                View Original Transcript
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav className="relative max-w-4xl mx-auto px-6 py-12 border-t border-dark-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/transcript/${prev.id}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-dark-900/40 backdrop-blur border border-dark-700/40 hover:bg-dark-800/50 hover:border-dark-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-800/60 group-hover:bg-indigo-500/20 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-dark-400 group-hover:text-indigo-400 group-hover:-translate-x-0.5 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-1">Previous</p>
                <p className="text-dark-200 group-hover:text-indigo-400 transition-colors font-medium truncate">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/transcript/${next.id}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-dark-900/40 backdrop-blur border border-dark-700/40 hover:bg-dark-800/50 hover:border-dark-600/50 transition-all duration-300 md:flex-row-reverse md:text-right"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-800/60 group-hover:bg-indigo-500/20 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-dark-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-1">Next</p>
                <p className="text-dark-200 group-hover:text-indigo-400 transition-colors font-medium truncate">
                  {next.title}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              to="/transcripts"
              className="group flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              <span>All Transcripts</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
