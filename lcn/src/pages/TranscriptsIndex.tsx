import { useState } from 'react';
import { Link } from 'react-router-dom';
import { transcripts, getAllTopics } from '@/data/transcripts';

export default function TranscriptsIndex() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const topics = getAllTopics();

  const filteredTranscripts = transcripts.filter(t => {
    const matchesTopic = !selectedTopic || t.topics.includes(selectedTopic);
    const matchesSearch = !searchQuery ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.speakers.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dark-950">
      <main className="py-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 flex items-center justify-center">
                <span className="text-2xl">🎙️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-dark-100">Transcripts</h1>
                <p className="text-dark-400">
                  Talks, interviews, and presentations on cryptography
                </p>
              </div>
            </div>

            <p className="text-dark-400 text-sm max-w-3xl">
              Curated summaries from leading experts in zero-knowledge proofs, cryptographic commitments,
              and multi-signature schemes. These transcripts cover the mathematics and applications of modern cryptography.
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search transcripts by title, speaker, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-11 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Topic filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTopic === null
                  ? 'bg-indigo-500 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              All Topics
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTopic === topic
                    ? 'bg-indigo-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-dark-500 text-sm mb-4">
            {filteredTranscripts.length} transcript{filteredTranscripts.length !== 1 ? 's' : ''} found
          </p>

          {/* Transcript grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredTranscripts.map((transcript) => (
              <Link
                key={transcript.id}
                to={`/transcript/${transcript.id}`}
                className="group p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎙️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-dark-100 group-hover:text-indigo-400 transition-colors mb-1">
                      {transcript.title}
                    </h3>
                    <p className="text-sm text-dark-400 mb-3 line-clamp-2">
                      {transcript.description}
                    </p>

                    {/* Speakers */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs text-dark-500">Speakers:</span>
                      {transcript.speakers.slice(0, 3).map((speaker, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 rounded bg-dark-700/50 text-dark-300"
                        >
                          {speaker.name}
                        </span>
                      ))}
                      {transcript.speakers.length > 3 && (
                        <span className="text-xs text-dark-500">
                          +{transcript.speakers.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {transcript.topics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-dark-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {transcript.date}
                      </span>
                      <span>{transcript.source}</span>
                      {transcript.duration && (
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {transcript.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTranscripts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center">
                <span className="text-3xl">🔍</span>
              </div>
              <p className="text-dark-400 mb-2">No transcripts found</p>
              <p className="text-dark-500 text-sm">Try adjusting your search or topic filter</p>
            </div>
          )}

          {/* Key speakers section */}
          <div className="mt-12 p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-dark-100 font-semibold mb-1">Featured Experts</h3>
                <p className="text-dark-400 text-sm mb-3">
                  These transcripts feature leading voices in cryptography and zero-knowledge research:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-dark-700 text-dark-300">
                    Jens Groth - Creator of Groth16
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-dark-700 text-dark-300">
                    Dan Boneh - Stanford Professor
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-dark-700 text-dark-300">
                    Benedikt Bunz - Bulletproofs Author
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-dark-700 text-dark-300">
                    Jonas Nick - Blockstream
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
